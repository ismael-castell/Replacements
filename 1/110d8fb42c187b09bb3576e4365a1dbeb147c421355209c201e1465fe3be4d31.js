window.aps=window.aps||{};
if(aps.cmd){throw new Error("loadAds.js already loaded")
}aps.cfg=aps.cfg||{version:"22.6.10",logToConsole:false,allAds:[],is:{},multi:{},multiAds:[]};(function(){aps.sitesWithoutCallback=["datebook.sfchronicle.com","education.seattlepi.com","healthyeating.sfgate.com","homeguides.sfgate.com","livehealthy.chron.com","preview.houstonchronicle.com","pyme.lavoztx.com","smallbusiness.chron.com","work.chron.com","www.beaumontenterprise.com","www.bigrapidsnews.com","www.chron.com","www.countytimes.com","www.ctinsider.com","www.ctpost.com","www.darientimes.com","www.expressnews.com","www.fairfieldcitizenonline.com","www.greenwichtime.com","www.houstonchronicle.com","www.lakecountystar.com","www.lmtonline.com","www.manisteenews.com","www.michigansthumb.com","www.middletownpress.com","www.milfordmirror.com","www.mrt.com","www.myjournalcourier.com","www.myplainview.com","www.mysanantonio.com","www.ncadvertiser.com","www.newmilfordspectrum.com","www.newstimes.com","www.nhregister.com","www.ourmidland.com","www.recordpatriot.com","www.registercitizen.com","www.seattlepi.com","www.sfchronicle.com","www.sfgate.com","www.sheltonherald.com","www.stamfordadvocate.com","www.theheraldreview.com","www.thehour.com","www.theintelligencer.com","www.theridgefieldpress.com","www.thetelegraph.com","www.timesunion.com","www.trumbulltimes.com","www.westport-news.com","www.yourconroenews.com","www.wiltonbulletin.com"];
window.debugSGA=window.debugSGA||false;
window.APSpageUrl=window.APSpageUrl||"";
window.devices={DESKTOP:1,MOBILE:2,TABLET:3};
window.prebid_source={CLIENT:1,SERVER:2,SERVER_COMPATIBLE:3};
aps.cmd=[];
aps.juiceLog=[];
aps.events=[];
aps.event={};
aps.app_events={};
aps.logtype={};
aps.implementSRA=true;
aps.topWindow=window;
aps.topAps=aps.topWindow.aps;
aps.o={};
aps.fn=aps.fn||{};
aps.cfg.leafsSites=["education.seattlepi.com","healthyeating.sfgate.com","homeguides.sfgate.com","livehealthy.chron.com","pyme.lavoztx.com","smallbusiness.chron.com","work.chron.com"];
JuicePageUrl=document.location.href.replace("/?","?");
window.googletag=window.googletag||{};
googletag.cmd=googletag.cmd||[];
window.pbjs=window.pbjs||{};
pbjs.que=pbjs.que||[];
pbjs.bidderSettings=pbjs.bidderSettings||{};
window.HDN=window.HDN||{};
HDN.dataLayer=HDN.dataLayer||{};
HDN.dataLayer.ads=HDN.dataLayer.ads||{};
HDN.dataLayer.content=HDN.dataLayer.content||{};
HDN.dataLayer.href=HDN.dataLayer.href||{};
HDN.dataLayer.presentation=HDN.dataLayer.presentation||{};
HDN.dataLayer.sharing=HDN.dataLayer.sharing||{};
HDN.dataLayer.source=HDN.dataLayer.source||{};
HDN.dataLayer.paywall=HDN.dataLayer.paywall||{};
window.loadAd_UrlLocation=window.loadAd_UrlLocation||"https://aps.hearstnp.com/";
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)
};
ga.l=+new Date;
ga("create","UA-1616916-99","auto","pb")
})();(function(){aps.o.kvp=function(a){this.key=a;
this.value=[]
};
aps.o.baseAd=function(a,e,b,d,c){this.code=a;
this.width=e;
this.height=b;
this.sizeMappings=d;
this.kvps=c;
if(aps.cfg.allAds){aps.cfg.allAds[a]=this
}};
aps.o.bid=function(j,a,c,h,b,g){var f={};
var d=["amznbid","amzniid","amznp","amznsz","auctionId","slotID","adserverTargeting","cpm","ttl","originalCpm"];
Object.entries(b).map(function(l){if(d.includes(l[0])){f[l[0]]=l[1]
}});
if(!g){g="banner"
}var i=b.size;
if(i=="1x1"){if(a.stringSizes.includes("300x250")){i="300x250"
}else{if(a.stringSizes.includes("728x90")){i="728x90"
}else{if(a.stringSizes.includes("320x50")){i="320x50"
}}}}this.ad=a.code;
this.adId=(j=="a9")?b.amzniid:b.adId;
this.bid=(j=="a9")?null:parseFloat(b.cpm).toFixed(2);
this.bidder=c;
this.mediaType=g;
this.position=a.position;
this.ref=h;
this.size=b.size;
this.source=j;
this.url=a.getPage().href;
this.obj=f;
var k=new Date().valueOf();
var e=k-aps.cfg.bid.prefetch.timeoutPadding;
if(j=="a9"){e+=10*60*1000
}else{e+=b.ttl*1000
}this.expires=e;
this.received=k;
this.viewability=false;
this.won=false;
this.selected=false;
this.sent=false;
aps.fn.logInfo("*BID* "+aps.fn.fixLen(this.ad,10)+aps.fn.fixLen(this.source+"/"+c,17)+" "+aps.fn.fixLen(b.amznbid||this.ref,10)+aps.fn.fixLen("["+this.mediaType+"]",10)+" id: "+this.adId.slice(-7))
};
aps.o.gamAd=function(a,h,c,g,e){this.code=a;
this.width=h;
this.height=c;
this.sizeMappings=g;
this.lowerCode=this.code.toLowerCase();
aps.fn.checkMultiType=function(i){var j=i.code.split("-")[0];
if(!aps.cfg.multiAds[j]){i.multiAd=false;
i.multiType=null
}else{i.multiAd=true;
i.multiType=j
}i.MultiCalled=false;
aps.cfg.multi.enabled=true
}(this);
if(!aps.fn.toBeDisplayed(this)){aps.fn.logSkip(this.code,"will not show on this device");
this.exclude=true
}if(!aps.fn.shouldPlaceAd(a)){aps.fn.logSkip(this.code,"excluded by query string");
this.exclude=true
}if(!aps.fn.filterRevenueProfileAds(this.code)&&!this.multiAd){aps.fn.logSkip(this.code,"not included in revenueProfile");
this.exclude=true
}if(!this.exclude){this.a9={};
this.a9.bids=[];
this.pb={};
this.pb.bids=[];
this.gam=null;
this.rm=false;
this.kvps=e||[];
this.interstitial=(this.code=="GO300"||(aps.cfg.page.device==devices.MOBILE&&this.code=="S300"))?true:false;
this.exclude=false;
this.state=null;
this.video=(this.lowerCode.indexOf("video")>-1)?true:false;
this.companion_units=false;
this.doNotRefresh=(this.code=="Crown"||this.code.startsWith("SSHOW"))?true:false;
this.viewability=-1;
this.refreshable=false;
this.impressionViewable=false;
this.advertiserId=null;
this.advertiser=null;
this.lineitemId=null;
this.creativeId=null;
this.isEmpty=null;
this.position=null;
this.renderedSize=null;
this.googleFrame=null;
this.isBounceX=false;
this.isDynamic=false;
this.isLoading=false;
this.mediaType="banner";
this.supportsNative=this.code.startsWith("NTV")?true:false;
this.renderCount=1;
this.sizes=aps.fn.setAdSize(this);
this.stringSizes=[];
this.scrollDepth=0;
if(aps.cfg.is.leafsSite){var f=this.code.split("-");
this.scrollDepth=(f.length==1)?0:f[1]
}this.getPage=function(){return aps.cfg.page.allPages[this.scrollDepth]
};
this.getDataLayerInterstitial=function(i){if(!aps.cfg.dfp.dataLayerInterstials){var j="";
try{j=HDN.dataLayer.revenueProfiles.profiles.nonsub.interstitials.value
}catch(k){}aps.cfg.dfp.dataLayerInterstials=j.split(",")||[]
}if(["BGS_REC_IN","EEinsert"].includes(i.code)||aps.cfg.dfp.dataLayerInterstials.indexOf(i.code)>-1){i.interstitial=true;
i.refreshable=true;
i.impressionViewable=true
}}(this);
for(var d=0;
d<this.sizes.length;
d++){this.stringSizes.push(this.sizes[d].join("x"))
}var b={"atf":["bpflex","concert1","concert2","crown","eeinsert","ee300","ee300_2","ee300_3","ee320","ee728","flex1","leaf1","leaf2","leaf3","leaf4","list","lnlogo","mad","mw_1_text","pmad","qat","rb","vsf1","inline","rb","ntv1hed","ntvalt6dcp"],"btf":["cp300","dp300","ep300","cpflex","dpflex","epflex","fpflex","gpflex","mw_2_text","qat2","tmp300_3","vsf2","ntvbtfmw","ntvbtfrr"],"stf":["ft728","la300","mw_3_text","mw728_1","mw728_2","rs300","vsf3"],"":["noad","spweather","Video_MOS_Multi"]};
this.addAdKvp=function(i,m,l){var k=l||false;
var j=this.kvps.filter(function(n){return n.key==i
})[0];
if(j&&k){j.value=[]
}if(j==undefined){j=new aps.o.kvp(i);
this.kvps.push(j)
}if(!j.value.includes(m)){j.value.push(m);
aps.fn.logInfo(this.code+" KVP: "+i+" = "+j.value)
}};
this.setAdPosition=function(i,l,o){var n=o||false;
var p=i.kvps.filter(function(r){return r.key=="position"
});
var q=(p.length==0)?"":p[0].value;
if(p[0]&&Array.isArray(p[0].value)){p[0].value=p[0].value[0];
q=p[0].value
}var j=i.lowerCode.replace("dtbk_","").replace("obit-","").replace("gs","").split("-")[0];
var m="";
var k=j.substring(0,1);
if(["a","b","s"].includes(k)){m=k+"tf"
}else{if(j.startsWith("ntv")){m="atf"
}}i.position=aps.fn.getDictionnaryKey(l,j,m);
i.addAdKvp("position",i.position);
i.addAdKvp("DIV_ID",i.code);
if(i.code=="mad"){i.position="mad"
}if(i.code=="tmp300_3"){i.potision="atf"
}}(this,b,true);
aps.cfg.ads[this.code]=this;
this.div=document.getElementById(this.code);
if(this.div){aps.fireEvent(aps.event.on_new_div,this.div)
}aps.fireEvent(aps.event.on_define_bid_data,this)
}};
aps.o.datalayer=function(){this.content={};
this.content.galleryListType=null;
this.content.isSensitive=null;
this.content.keyNlpCategories=null;
this.content.keyNlpConsumerGood=null;
this.content.keyNlpEvent=null;
this.content.keyNlpLocation=null;
this.content.keyNlpOrganization=null;
this.content.keyNlpOther=null;
this.content.keyNlpPerson=null;
this.content.keyNlpUnknown=null;
this.content.keyNlpWorkOfArt=null;
this.content.keySubjects=null;
this.content.lastModifiedDate=null;
this.content.objectId=null;
this.content.objectType=null;
this.content.paragraphCount=null;
this.content.pubDate=null;
this.content.publishedOnline=null;
this.content.sectionPath=null;
this.content.subtitle=null;
this.content.title=null;
this.content.wordCount=null;
this.ads={};
this.ads.programmatic=true;
this.href={};
this.href.canonicalUrl=null;
this.href.pageUrl=null;
this.href.pageUrlHash=null;
this.href.pageUrlPath=null;
this.href.pageUrlPathFolders=null;
this.href.pageUrlQueryParams=null;
this.infiniteScrollDepth=null;
this.isAffiliatedContent=null;
this.isSponsoredContent=null;
this.presentation={};
this.presentation.hasInteractive=null;
this.presentation.hasSlideshow=null;
this.presentation.hasSlideshowListView=null;
this.presentation.hasVideo=null;
this.presentation.infiniteScrollEnabled=null;
this.sharing={};
this.sharing.openGraphUrl=null;
this.source={};
this.source.authorName=null;
this.source.authorTitle=null;
this.source.originalSourceSite=null;
this.source.sourceSite=null;
this.meta={};
this.meta.author=null;
this.meta.name=null;
this.meta.release=null;
this.meta.description=null;
this.meta.id=null;
this.meta.published=null;
this.meta.description=null;
this.meta.image=null;
this.meta.title=null;
this.meta.type=null;
this.meta.url=null;
this.meta.sections=null;
this.meta.release=null;
this.meta.title=null;
this.meta.nlpCategories=null;
this.meta.nlpConsumerGood=null;
this.meta.nlpEvent=null;
this.meta.nlpLocation=null;
this.meta.nlpOrganisation=null;
this.meta.nlpOther=null;
this.meta.nlpPerson=null;
this.meta.nlpUnknown=null;
this.meta.nlpWorkOfArt=null;
this._getLookup=function(b){var a=HDN;
b.forEach(function(c){a=a[c]
});
return a
};
this._copyFromDataLayer=function(a,b,c){var d=["ads","content","href","isAffiliatedContent","isSponsoredContent","presentation","sharing","source"];
Object.entries(b).forEach(function(e){var h=["dataLayer"].concat(c);
h.push(e[0]);
if(!d.includes(h[1])){return
}var f=a._getLookup(h);
if(!f&&a[e[0]]){h.splice(1,1);
f=a._getLookup(h)
}if(typeof f=="undefined"){return
}if(typeof e[1]=="object"&&e[1]!=null){var g=c.slice();
g.push(e[0]);
a._copyFromDataLayer(a,b[e[0]],g)
}else{if(typeof f!=undefined){b[e[0]]=f
}}})
};
this._copyFromMetaData=function(a){var b=["author","name","release","description","id","published","description","image","title","type","url","sections","release","title"];
b.forEach(function(c){var e=null;
var d=document.querySelector("meta[name='"+c+"']");
if(d){e=d.content
}if(typeof e!="undefined"){a.meta[c]=e
}})
};
this._copyFromDataObject=function(b,a){b.data=a;
Object.entries(a).forEach(function(c){var d=c[0].split("_");
if(d[0]=="HDN"){d.splice(0,2);
switch(d.length){case 1:b[d[0]]=c[1];
break;
case 2:b[d[0]][d[1]]=c[1];
break;
case 3:b[d[0]][d[1]][d[2]]=c[1];
break
}}else{b.meta[c[0].replace("meta_","")]=c[1]
}})
};
this._init=function(b,a){if(a){this._copyFromDataObject(b,a)
}else{this._copyFromDataLayer(b,b,[]);
this._copyFromMetaData(b)
}if(!this.infiniteScrollDepth){if(aps.cfg.is.wcm){this.infiniteScrollDepth=0
}}if(aps.cfg.is.leafsSite){this.infiniteScrollDepth=aps.cfg.page.urls.length
}}
};
aps.o.page=function(b,c,a){this.href=aps.fn.getFilteredHref(b);
if(aps.cfg.is.richie){this.href=APSpageUrl
}this.juicePageUrl=this.href.replace("/?","?");
var d=this.href.indexOf("/");
this.hostname=this.href.substring(0,d);
this.pathname=this.href.substring(d);
this.host=this.hostname.toLowerCase().split(".");
this.domain=this.host.slice(-2).join(".");
this.isSubDomain=(this.host[0]=="www")?false:true,this.path=this.pathname.toLowerCase().split("?")[0].split("/");
this.path=(this.path[this.path.length-1]=="")?this.path.slice(1,this.path.length-1):this.path.slice(1,this.path.length);
this.datalayer=new aps.o.datalayer();
this.datalayer._init(this.datalayer,a);
this.bids=[];
this.a9=null;
this.a9BidsReceived=false;
this.pb=null;
this.pbBidsReceived=false;
this.scrollDepth=0;
this.permutive={};
this.kvps=c||[];
this.addPageKvp=function(e,j,h,k){var g=h||false;
var i=k||[];
var f=this.kvps.filter(function(l){return l.key==e
})[0];
if(f&&f.key=="custom"&&i.length>0){f.value=f.value.filter(function(l){return !i.includes(l)
})
}else{if(f&&g){f.value=[]
}}if(f==undefined){f=new aps.o.kvp(e);
this.kvps.push(f)
}if(!f.value.includes(j)){if(Array.isArray(j)){j.forEach(function(l){f.value.push(l)
})
}else{f.value.push(j)
}aps.fn.logInfo("Page KVP: "+e+" = "+f.value)
}};
this.page_type2=null;
this.setPageType2=function(e){if(aps.cfg.is.faceBookInstantArticle){e.page_type2="instant article"
}else{if(aps.cfg.is.leafsSite){if(document.location.pathname=="/"){e.page_type2="channel"
}else{e.page_type2="article"
}}else{if(window.ess&&window.ess.prop24){e.page_type2=ess.prop24
}else{if(e.datalayer&&e.datalayer.content){if(e.datalayer.content.galleryListType&&e.datalayer.content.galleryListType=="list"){e.page_type2="slideshow list view"
}else{e.page_type2=e.datalayer.content.objectType
}}else{if(typeof(top.omni_blogname)!="undefined"){e.page_type2=aps.fn.getBlogOmniType()
}}}}}aps.fn.logInfo("page_type2: "+e.page_type2);
e.addPageKvp("page_type2",e.page_type2)
}(this);
this.init=function(){aps.fn.setPageTargettedUrl(this,"PageUrl",this.juicePageUrl,["Testpage","Cmpid","Ipid"]);
var e=document.referrer.replace(/^(http(?:s)?:\/\/)/,"").split("/")[0];
aps.fn.setPageTargettedUrl(this,"referrer",e,[]);
if(this.datalayer.infiniteScrollDepth){this.addPageKvp("ScrollPage",this.datalayer.infiniteScrollDepth);
this.scrollDepth=this.datalayer.infiniteScrollDepth
}if(aps.key){this.addPageKvp(aps.key,aps.values,true);
delete aps.key;
delete aps.values
}if(!this.datalayer.ads.programmatic){this.addPageKvp("custom","progfalse");
aps.fn.logInfo("*Disabling bidders - dataLayer.ads.programmatic");
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}aps.fireEvent(aps.event.on_new_page,this)
};
this.init()
};
aps.o.base=function(){this.lastRequestedHref="";
this.current=null;
this.next=null;
this.allPages=[];
this.urls=[];
this.device=window.current_device;
this.checkPage=function(){var a=aps.fn.getFilteredHref();
if(this.next&&this.next.href==a){this.current=this.next;
this.currentIndex=this.urls.indexOf(a);
this.next=null;
aps.logInfo("Changing current URL to "+a)
}else{if(!this.current||a!=this.current.href){if(!this.urls.includes(a)){aps.fn.getPageInfo()
}this.currentIndex=this.urls.indexOf(a);
this.current=this.allPages[this.currentIndex];
aps.logInfo("Changing current URL to "+a)
}}};
this.googleUrlFilter=function(b){var a=["username","password","testinggooglefilter","email","client_id","loginID","error","e","parameter","email_id","emailaddress","bc_em","cm_lm"];
Object.entries(b.qs).forEach(function(c){if(!aps.cfg.serveAds){return
}if(a.includes(c[0])){aps.fn.logInfo("setting serve ads to false");
aps.cfg.serveAds=false
}});
if(aps.cfg.serveAds&&window.location.href.indexOf("#cluid")!==-1){aps.fn.logInfo("setting serve ads to false");
aps.cfg.serveAds=false
}};
this.kvps=[];
this.addBaseKvp=function(a,e,d){var c=d||false;
var b=this.kvps.filter(function(f){return f.key==a
})[0];
if(b&&c){b.value=[]
}if(b==undefined){b=new aps.o.kvp(a);
this.kvps.push(b)
}if(!b.value.includes(e)){b.value.push(e);
aps.fn.logInfo("Base KVP: "+a+" = "+b.value)
}};
this.qs=[];
this.parseQS=function(a){var c=location.search.slice(1);
var b=c.split("&");
b.forEach(function(f){f=f.split("=");
var e=f[0];
var g=f[1];
for(var d=2;
d<f.length;
d++){g=g+"="+f[d]
}if(e.length){if(a.qs[e]!==undefined){if(!a.qs[e].push){a.qs[e]=[a.qs[e]]
}a.qs[e].push(g||"")
}else{a.qs[e]=g||""
}}})
}(this);
this.init=function(a){if(a.qs["console"]==1){aps.fn.logToConsole=true
}a.googleUrlFilter(a);
aps.fireEvent(aps.event.on_first_load,a)
}(this)
};
aps.o.req=function(a){this.ads=[];
this.gams=[];
this.page=a;
this.pageTargeting=null;
this.renders=[]
}
})();(function(){new aps.o.baseAd("Crown",99,99,["0001x99x99","0001x001x002"]);
new aps.o.baseAd("Flex1",970,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0996x055x001","0768x055x001","0768x728x90","0768x88x88","0768x001x001","0001x300x50","0001x320x50","0001x88x88","0001x001x001","0001x055x001"]);
new aps.o.baseAd("APflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("BPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("CPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("DPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("EPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("FPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("GPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]);
new aps.o.baseAd("Box",300,250,["0996x970x250","0996x970x90","0996x728x90","0996x620x336","0996x501x501","0996x336x280","0996x320x100","0996x320x250","0996x001x001","0001x501x501","0001x336x280","0001x325x204","0001x325x508","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("CONCERT1",501,501,["0996x001x001","0996x501x501","0996x620x366","0996x336x280","0996x320x250","0996x320x100","0001x501x501","0001x336x280","0001x325x508","0001x325x204","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("CONCERT2",501,501,["0996x620x366","0996x501x501","0996x336x280","0996x320x100","0996x300x250","0996x001x001","0001x501x501","0001x336x280","0001x325x508","0001x325x204","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("LNlogo",150,47,["0001x150x47"]);
new aps.o.baseAd("SPweather",150,32,["0986x150x32","0001x000x000"]);
new aps.o.baseAd("A951",970,250,["1312x002x001","1312x1200x300","1312x980x40","1312x971x90","1312x970x415","1312x970x250","1312x970x90","1312x970x168","1312x960x150","1312x950x30","0996x002x001","0996x980x40","0996x971x90","0996x970x415","0996x970x250","0996x970x168","0996x970x90","0996x960x300","0996x960x150","0996x950x30","0654x002x001","0654x704x300","0001x000x000"]);
new aps.o.baseAd("A728",728,90,["1312x970x90","1312x728x90","1312x003x003","1312x003x001","0996x970x90","0996x728x90","0996x468x60","0996x003x001","0996x003x003","0768x728x90","0654x468x60","0654x003x001","0654x003x003","0001x000x000"]);
new aps.o.baseAd("A300",300,250,["1312x300x600","1312x300x250","1312x004x001","0996x300x600","0996x300x250","0996x004x001","0654x300x600","0654x300x250","0654x004x001","0001x300x250","0001x004x001"]);
new aps.o.baseAd("A300x600",300,600,["0001x300x600","0001x300x250"]);
new aps.o.baseAd("B300",300,250,["0654x300x600","0654x300x250","0654x160x600","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("B728",728,90,["1312x970x90","1312x728x90","1312x003x003","0996x970x90","0996x728x90","0996x468x60","0996x003x003","0654x728x90","0654x468x60","0654x003x003","0001x000x000"]);
new aps.o.baseAd("S300",300,250,["0654x300x600","0654x300x250","0654x160x600","0001x300x250"]);
new aps.o.baseAd("MW728_1",728,90,["1280x970x415","1280x940x250","1280x728x90","0768x003x003","0001x000x000"]);
new aps.o.baseAd("MW728_2",728,90,["1280x940x250","1280x728x90","0768x003x003","0001x000x000"]);
new aps.o.baseAd("TMP300_3",300,250,["0654x300x250","0001x000x000"]);
new aps.o.baseAd("MAD",320,50,["1312x000x000","0996x000x000","0654x000x000","0001x320x50","0001x300x50"]);
new aps.o.baseAd("AP300",300,250,["0001x004x001","0001x300x250"]);
new aps.o.baseAd("BP300",300,250,["0001x300x250","0001x005x001"]);
new aps.o.baseAd("CP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("DP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("EP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]);
new aps.o.baseAd("PMAD",320,50,["1312x000x000","0996x000x000","0654x000x000","0001x320x50","0001x300x50"]);
new aps.o.baseAd("EE300",300,250,["000x300x250"]);
new aps.o.baseAd("EE300_2",300,250,["000x300x250"]);
new aps.o.baseAd("EE300_3",300,250,["000x300x250"]);
new aps.o.baseAd("EE320",320,50,["0768x000x000","0000x320x50"]);
new aps.o.baseAd("EE728",728,90,["0768x728x90","000x000x000"]);
new aps.o.baseAd("EEinsert",1,1,["0001x001x001"]);
new aps.o.baseAd("OBIT-A728",728,90,["1056x970x90","1056x728x90","0750x728x90","0001x320x50"]);
new aps.o.baseAd("OBIT-AP300",300,250,["0001x300x250"]);
new aps.o.baseAd("OBIT-B728",728,90,["1056x970x90","1056x728x90","0750x728x90","0001x320x50"]);
new aps.o.baseAd("Leaf1",300,250,["0001x300x255","0001x343x255","0001x343x280","0001x300x250"]);
new aps.o.baseAd("Leaf2",300,250,["0996x620x366","0996x336x280","0996x300x250","0996x320x100","0996x320x50","0996x250x250","0996x300x50","0001x300x600","0001x160x600","0001x336x280","0001x325x508","0001x325x204","0001x300x250","0001x250x250","0001x320x50","0001x300x50","0001x501x501"]);
new aps.o.baseAd("Leaf3",300,250,["0996x728x90","0996x468x60","0996x320x50","0996x300x50","0001x300x250","0001x325x508","0001x325x204","0001x250x250","0001x336,280"]);
new aps.o.baseAd("Leaf4",300,250,["0996x620x366","0996x336x280","0996x300x250","0996x250x250","0001x325x508","0001x325x204"]);
new aps.o.baseAd("Inline",300,250,["0996x620x366","0996x501x501","0996x336x280","0996x320x100","0996x300x250","0996x001x001","0001x501x501","0001x336x280","0001x325x204","0001x325x508","0001x320x100","0001x300x250","0001x001x001"]);
new aps.o.baseAd("LIST",300,250,["996x300x600","996x300x250","996x001x001","001x300x250","001x001x001"]);
new aps.o.baseAd("RB",300,250,["0996x300x250","0996x300x600","0996x160x600","0996x005x001","0654x300x250","0654x300x600","0654x160x600","0654x005x001","0001x300x250"]);
new aps.o.baseAd("SSHOW",300,250,["001x300x250","001x001x001"]);
new aps.o.baseAd("DTBK_AP951",970,250,["1024x001x001","1024x970x250","0001x000x000"]);
new aps.o.baseAd("DTBK_AP300",300,250,["1024x300x600","1024x300x250","0001x000x000"]);
new aps.o.baseAd("DTBK_BP300",300,250,["1024x300x250","1024x300x600","0001x000x000"]);
new aps.o.baseAd("DTBK_AP300_M",300,250,["1020x000x000","0001x300x250"]);
new aps.o.baseAd("DTBK_BP300_M",300,250,["1024x000x000","0001x300x250"]);
new aps.o.baseAd("DTBK_AP728",728,90,["996x001x001","996x970x250","996x970x90","996x728x90","0001x000x000"]);
new aps.o.baseAd("DTBK_BP728",728,90,["996x001x001","996x970x250","996x970x90","996x728x90","0001x000x000"]);
new aps.o.baseAd("Video_MOS_Multi",1,4,["0001x400x300","0001x640x480","0001x001x004","0001x640x360"])
})();(function(){aps.fn.fixLen=function(text,len){var padder="                                    ";
var tlen=(""+text).length;
var pad=(tlen<len)?len-tlen:0;
return text+padder.substr(0,pad)
};
aps.fn.logEvent=function(timeStamp,msg,mtype){aps.juiceLog.push({d:timeStamp,pt:(window.performance)?window.performance.now():null,m:msg,t:mtype})
};
aps.fn.logf=function(e,t){return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #ff8a45; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cJuice"),e
};
aps.fn.logInfo=function(msg){if(aps.cfg.logToConsole){aps.fn.logEvent(new Date(),msg,aps.logtype.info);
console.info.apply(console,aps.fn.logf(arguments,""))
}};
aps.logInfo=aps.fn.logInfo;
aps.fn.setPerformanceMetrics=function(name,description){aps.fn.logInfo(description)
};
aps.fn.setPerformanceMetrics("JuiceScriptLoading","start of juice script loading");
aps.fn.logWarning=function(msg){aps.fn.logEvent(new Date(),msg,aps.logtype.warning);
if(aps.cfg.logToConsole){console.info.apply(console,aps.fn.logf(arguments,"WARNING:"))
}};
aps.fn.logError=function(msg){aps.fn.logEvent(new Date(),msg,aps.logtype.error);
if(aps.cfg.logToConsole){console.info.apply(console,aps.fn.logf(arguments,"ERROR:"))
}};
aps.fn.logException=function(msg,e){if(typeof e!="undefined"){if(typeof e.message!="undefined"){aps.fn.logEvent(new Date(),msg+e.message);
return
}}aps.fn.logEvent(new Date(),msg,aps.logtype.error)
};
aps.fn.logSkip=function(adcode,reason){aps.alreadyLogged=aps.alreadyLogged||[];
if(aps.alreadyLogged.indexOf[adcode+":"+reason]>-1){return
}aps.fn.logInfo("*SKIP "+aps.fn.fixLen(adcode,10)+" "+reason);
aps.alreadyLogged.push(adcode+":"+reason)
};
aps.fn.domLoaded=function(){aps.fn.setPerformanceMetrics("DomLoaded","DomLoaded");
aps.cfg.domIsLoaded=true;
aps.fireEvent(aps.event.on_dom_loaded)
};
aps.fn.dumpLogWindow=function(){var logs=aps.juiceLog;
var html="";
for(var i=0;
i<logs.length;
i++){var sClass="msg";
var time="";
if(typeof(logs[i].pt)=="undefined"){time=(performance.timing.navigationStart+logs[i].pt)-performance.timing.domLoading;
time=time.toFixed(2)
}else{time=aps.fn.formatDateTime(logs[i].d)
}if(typeof(logs[i].t)!="undefined"){if(logs[i].t==aps.logtype.warning){sClass+=" warning"
}if(logs[i].t==aps.logtype.error){sClass+=" error"
}}var msg='<div class="'+sClass+'">'+time+" : "+logs[i].m+"</div>";
html+=msg
}var w=window.open("","wnd");
w.document.body.innerHTML=html
};
aps.fn.formatDateTime=function(timeStamp){var h=(timeStamp.getHours()<10?"0":"")+timeStamp.getHours();
var m=(timeStamp.getMinutes()<10?"0":"")+timeStamp.getMinutes();
var s=(timeStamp.getSeconds()<10?"0":"")+timeStamp.getSeconds();
var ms=timeStamp.getMilliseconds();
return h+":"+m+":"+s+": "+ms
};
aps.fn.getCookie=function(cname){var name=cname+"=";
var ca=document.cookie.split(";");
for(var i=0;
i<ca.length;
i++){var c=ca[i];
while(c.charAt(0)==" "){c=c.substring(1)
}if(c.indexOf(name)==0){return c.substring(name.length,c.length)
}}return""
};
aps.fn.setAdSize=function(ad){var availables=["320x50","300x250","300x600","400x300","640x480","728x90","970x90","970x250","501x501","001x001","620x366","325x508","325x204","336x280","160x600","320x100","155x210","286x110","300x300","309x280","840x300"];
var sizes=[];
var widthfound=30000;
var doNotServe=["MW_1_TEXT","MW_2_TEXT","MW_3_TEXT"];
if(doNotServe.indexOf(ad.code)>-1){aps.fn.logSkip(ad.code,"is in do not serve array");
return sizes
}ad.sizeMappings=ad.sizeMappings||[];
for(var j=0;
j<ad.sizeMappings.length;
j++){var map=ad.sizeMappings[j].split("x");
var split=parseInt(map);
if(split>aps.pageWidth){continue
}if(widthfound==30000){widthfound=split
}if(widthfound==split){var adSize=map[1]+"x"+map[2];
if(availables.indexOf(adSize)>-1){sizes.push([parseInt(map[1]),parseInt(map[2])])
}}}return sizes
};
aps.fn.getBlogOmniType=function(){var abOmniPagename;
var abOmniChannel;
var abOmniHier1;
var abOmniServer=document.location.host;
var abOmniSSL1;
var abOmniSSL2;
var abOmniSSL3;
var abOmniSSL4;
var abOmniBlogType;
var abOmniTitle="";
var abOmniID="";
var abOmniContentType="Blogs";
var abOmniAuthor="";
var abOmniQuery="";
var abOmniDomain;
var abOmniBlogName="";
var abOmniHeadline="";
var abOmniFullURL=document.URL.toLowerCase();
var abOmniBlobUX="";
var abBlogCat=new Object;
abBlogCat.SuperCategory="";
abBlogCat.Category="";
abBlogCat.AuthorType="reader";
abBlogCat.Usage="blog";
abBlogCat.Section="";
abBlogCat.Voice="";
var abStrRelativePath;
var abStrPageURL="";
var abStrBlogPath;
var abStrPagePath;
var abBoolIs404=false;
this.toProperCase=function toProperCase(pc){if(pc!="undefined"){if(pc.length>1){return pc.toLowerCase().replace(/^(.)|\s(.)/g,function($1){return $1.toUpperCase()
})
}}};
if(typeof(omni_blogID)!="undefined"){abOmniID=omni_blogID
}if(typeof(omni_blogauthor)!="undefined"){abOmniAuthor=toProperCase(omni_blogauthor)
}if(typeof(omni_blogauthortype)!="undefined"){abBlogCat.AuthorType=omni_blogauthortype
}if(typeof(omni_blogposttitle)!="undefined"){abBoolIs404=(omni_blogposttitle.toLowerCase()=="page not found");
abOmniTitle=omni_blogposttitle;
if(abOmniTitle.charAt(abOmniTitle.length-1)==" "){abOmniTitle=abOmniTitle.substr(0,abOmniTitle.length-1)
}}if(typeof(omni_blogname)!="undefined"){abOmniBlogName=omni_blogname
}if(typeof(omni_blogcategory2)!="undefined"){abBlogCat.Category=omni_blogcategory2
}if(abBlogCat.Category.length>0){if(typeof(omni_blogcategory)!="undefined"){abBlogCat.SuperCategory=omni_blogcategory
}}else{if(typeof(omni_blogcategory)!="undefined"){abBlogCat.Category=omni_blogcategory
}}if(typeof(omni_blogusage)!="undefined"){abBlogCat.Usage=omni_blogusage
}if(typeof(omni_section)!="undefined"){abBlogCat.Section=omni_section
}if(typeof(omni_voices)!="undefined"){abBlogCat.Voice=omni_voices
}this.abParseURL=function(){var strFullURL=abOmniFullURL;
if(strFullURL.indexOf("#")>-1){strFullURL=strFullURL.split("#")[0]
}var intQStart=strFullURL.indexOf("?")+1;
var intRelPathStart=strFullURL.indexOf(".com")+5;
abOmniDomain=strFullURL.substr(0,intRelPathStart);
if(intQStart>0){abOmniQuery=strFullURL.substring(intQStart);
abStrRelativePath=strFullURL.substring(0,intQStart-1)
}else{abStrRelativePath=strFullURL
}abStrPageURL=abStrRelativePath;
abStrRelativePath=abStrRelativePath.substr(intRelPathStart);
if(abStrRelativePath.charAt(abStrRelativePath.length-1)=="/"){abStrRelativePath=abStrRelativePath.substr(0,abStrRelativePath.length-1)
}var arrayTemp=new Array();
arrayTemp=abStrRelativePath.split("/");
abStrBlogPath=arrayTemp[0];
abStrPagePath=arrayTemp[arrayTemp.length-1];
if(abStrBlogPath==abStrPagePath){abStrPagePath="index"
}if(top.document.location.hostname=="insidescoopsf.sfgate.com"){abStrBlogPath="insidescoop"
}return abStrBlogPath+":"+abStrPagePath
};
this.abAssignSections=function(){if(abBlogCat.SuperCategory.length>0){abOmniChannel=abBlogCat.SuperCategory;
abOmniSSL1=abBlogCat.SuperCategory;
abOmniSSL2=abOmniSSL1+":"+abBlogCat.Category;
abOmniSSL3=abOmniSSL2+":blogs";
abOmniSSL4=abOmniSSL3+":"+abOmniBlogName.toLowerCase()
}else{abOmniChannel=abBlogCat.Category;
abOmniSSL1=abBlogCat.Category;
abOmniSSL2=abOmniSSL1+":blogs";
abOmniSSL3=abOmniSSL2+":"+abOmniBlogName.toLowerCase();
abOmniSSL4=abOmniSSL3;
if(abBlogCat.Voice.length>0){abOmniSSL4=abOmniSSL4+":"+abBlogCat.Voice.toLowerCase()
}}abOmniHier1=abOmniSSL4.replace(/:/g,",")
};
abOmniPagename="Blogs-"+abParseURL();
if(abBlogCat.Category==""){abCategorizeBlog(abStrBlogPath,abBlogCat)
}abAssignSections();
if(abOmniTitle==""||abOmniTitle==abOmniBlogName){abOmniTitle="Blog index page"
}if(abBlogCat.Section.length>0){abOmniBlogName=abOmniBlogName+":"+abBlogCat.Section
}abOmniTitle=abOmniBlogName+":"+abOmniTitle;
abOmniID=abOmniBlogName+"--"+abOmniID;
abOmniBlogType=abBlogCat.AuthorType;
abOmniBlogName=abOmniBlogName+"("+abBlogCat.AuthorType+")";
abOmniTitle=abOmniTitle+"("+abBlogCat.AuthorType+")";
abOmniTitle=abOmniTitle.replace(/'/g,"");
abOmniHeadline=abOmniTitle;
if(abOmniAuthor){if(abOmniAuthor.indexOf(",")!=-1){abOmniAuthor=abOmniAuthor.substring(0,abOmniAuthor.indexOf(","))
}}if(abBoolIs404){return"undefined"
}else{return abOmniContentType
}};
aps.fn.getDictionnaryKey=function(dictionnary,value,destination){var BreakException={};
var retValue=destination;
try{Object.entries(dictionnary).forEach(function(line){if(line[1].includes(value)){retValue=line[0];
throw BreakException
}})
}catch(e){if(e!==BreakException){throw e
}}return retValue
};
aps.fn.toBeDisplayed=function(ad){var willDisplay=false;
var widthfound=30000;
for(var j=0;
j<ad.sizeMappings.length;
j++){var map=ad.sizeMappings[j].split("x");
var split=parseInt(map[0]);
if(split>aps.pageWidth){continue
}if(widthfound==30000){widthfound=split
}if(widthfound==split){if(parseInt(map[1])>0&&parseInt(map[2])>0){willDisplay=true
}}}return willDisplay
};
aps.fn.getQueryParameterByName=function(key){if(aps.qeueryStringObj==null){aps.qeueryStringObj=aps.fn.queryStringToJSON()
}var qobj=aps.qeueryStringObj;
var keyToUse=key.replace("[]","");
if(!qobj.hasOwnProperty(keyToUse)){return null
}if(key.indexOf("[]")==-1){return qobj[keyToUse]
}if(typeof qobj[keyToUse]==="string"){var retval=[];
retval.push(qobj[keyToUse]);
return retval
}return qobj[keyToUse]
};
aps.fn.queryStringToJSON=function(){var str=location.search.slice(1);
var pairs=str.split("&");
var result={};
pairs.forEach(function(pair){pair=pair.split("=");
var name=pair[0];
var value=pair[1];
if(name.length){if(result[name]!==undefined){if(!result[name].push){result[name]=[result[name]]
}result[name].push(value||"")
}else{result[name]=value||""
}}});
return(result)
};
aps.fn.desktopOrMobile=function(desktopValue,mobileValue){return(aps.cfg.bid.current_device==devices.DESKTOP)?desktopValue:mobileValue
};
aps.fn.addPageKvp=function(key,value,overwrite){aps.cfg.page.checkPage();
aps.cfg.page.current.addPageKvp(key,value,overwrite)
};
aps.fn.getFilteredHref=function(href){var loc=href||document.location.href;
return loc.replace("https://","").replace("http://","").split("#")[0].substring(0,300)||""
};
aps.fn.insertScript=function(url,async,type,id){var a=document.createElement("script");
a.src=url;
if(type){a.type=type
}if(id){a.id=id
}a.async=async;
var tgt=document.getElementsByTagName("script")[0];
tgt.parentNode.insertBefore(a,tgt)
};
aps.fn.readRevenueProfile=function(){aps.cfg.revenueProfile=[];
try{if(HDN.dataLayer.content.designTemplate.indexOf("dynamic_two_column.tpl")>-1){var revProfile=Object.entries(HDN.dataLayer.revenueProfiles.profiles);
for(var rp in revProfile){var subscriptions=revProfile[rp][1];
for(col in subscriptions){if(col.indexOf("column")==0){var ads=Object.entries(subscriptions[col]);
for(adtype in ads){aps.cfg.revenueProfile.push(ads[adtype][1].id)
}}}}if(aps.cfg.page.current.domain=="timesunion.com"){aps.cfg.revenueProfile.push("LNlogo")
}}}catch(e){}}();
aps.fn.filterRevenueProfileAds=function(code){if(aps.cfg.revenueProfile.length>0&&aps.cfg.revenueProfile.indexOf(code)==-1){return false
}else{return true
}};
aps.fn.isValidBid=function(adDef,bidder,wrapper){aps.cfg.bid.isValid=aps.cfg.bid.isValid||[];
var encode=adDef.code+bidder+wrapper;
if(aps.cfg.bid.isValid[encode]!=undefined){return aps.cfg.bid.isValid[encode]
}aps.cfg.bid.isValid[encode]=true;
aps.cfg.bid.excludedBids.forEach(function(rule){try{if(eval(rule[0])){aps.fn.logSkip(adDef.code,rule[1]);
aps.cfg.bid.isValid[encode]=false
}}catch(e){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_error_rule",eventAction:document.location.href,eventLabel:rule});
return false
}});
return aps.cfg.bid.isValid[encode]
};
aps.fn.shouldRunThirdParty=function(modulecode){return true
};
aps.fn.stripAndPreserveQueryStringVars=function(qstring,preserveList){if(typeof(qstring)=="undefined"){return""
}var pairs=qstring.split("&");
var result=[];
pairs.forEach(function(pair){pair=pair.split("=");
if(preserveList.indexOf(pair[0])!=-1){result.push(pair[0]+"="+pair[1])
}});
if(result.length>0){return"?"+result.join("&")
}return""
};
aps.fn.setPageTargettedUrl=function(page,kvpName,fullUrl,preserveQueryParms){var urlPieces=fullUrl.split("?");
var kvpUrl="";
if(preserveQueryParms.length==0){kvpUrl=urlPieces[0]
}else{kvpUrl=urlPieces[0]+aps.fn.stripAndPreserveQueryStringVars(urlPieces[1],preserveQueryParms)
}page.addPageKvp(kvpName,kvpUrl)
};
aps.fn.checkKvps=function(kvps){var ok=true;
try{kvps.forEach(function(kvp){if(typeof kvp.key!="string"||typeof kvp.value!="string"){ok=false
}})
}catch(ex){ok=false
}return ok
};
aps.fn.waitForDefinedTags=function(func){if(!aps.cfg.serveAds){return
}if(aps.cfg.adDefinitionLoaded){eval(func)()
}else{aps.alreadyWaiting=aps.alreadyWaiting||false;
aps.waitingForDefinedTags=aps.waitingForDefinedTags||[];
if(aps.waitingForDefinedTags.indexOf(func)>-1){return
}aps.waitingForDefinedTags.push(func);
if(!aps.cfg.adDefinitionLoaded){aps.registerEvent(aps.event.on_ad_definition_loaded,function(){eval(func)()
});
if(!aps.alreadyWaiting){aps.fn.setPerformanceMetrics(null,"waiting for Ad Definition");
aps.alreadyWaiting=true
}}}};
aps.fn.setupResponsiveMappings=function(){};
aps.fn.generateSizeMappings=function(ad){var arSizeMappings=[];
if(ad.sizeMappings!=undefined&&ad.sizeMappings.length>0){if(aps.cfg.is.legacy){aps.sizeMappings=ad.sizeMappings.filter(function(sizemap){return sizemap.split("x")[0]<aps.pageWidth
});
var largest=ad.sizeMappings[0].split("x")[0];
ad.sizeMappings=ad.sizeMappings.filter(function(sizemap){return sizemap.split("x")[0]==largest
});
for(var i=0;
i<ad.sizeMappings.length;
i++){ad.sizeMappings[i]=ad.sizeMappings[i].replace(largest,"0001")
}if(ad.sizeMappings.length==0){ad.sizeMappings.push("0001x0x0")
}}var arFixedMappings=[];
var arViewports=[];
var viewPortIDX={};
for(var i=0;
i<ad.sizeMappings.length;
i++){var arMap=ad.sizeMappings[i].split("x");
var adSize=[parseInt(arMap[1],10),parseInt(arMap[2],10)];
var nViewport=parseInt(arMap[0],10);
var idx=viewPortIDX[arMap[0]];
if(idx==undefined){idx=arFixedMappings.length;
arFixedMappings[idx]=new Array();
viewPortIDX[arMap[0]]=idx;
arViewports.push(arMap[0])
}if(adSize[0]!=0&&adSize[1]!=0){arFixedMappings[idx].push(adSize)
}}for(i=0;
i<arViewports.length;
i++){var viewport=[parseInt(arViewports[i],10),100];
var idx=viewPortIDX[arViewports[i]];
var slots=arFixedMappings[idx];
slots.push(["fluid"]);
if(slots.length==1){arSizeMappings.push([viewport,slots[0]])
}else{arSizeMappings.push([viewport,slots])
}}}else{arSizeMappings.push([[0,0],[ad.width,ad.height]])
}return arSizeMappings
};
aps.fn.contentLoaded=function(win,fn){var done=false,top=true,doc=win.document,root=doc.documentElement,add=doc.addEventListener?"addEventListener":"attachEvent",rem=doc.addEventListener?"removeEventListener":"detachEvent",pre=doc.addEventListener?"":"on",init=function(e){if(e.type=="readystatechange"&&doc.readyState!="complete"){return
}(e.type=="load"?win:doc)[rem](pre+e.type,init,false);
if(!done&&(done=true)){fn.call(win,e.type||e)
}},poll=function(){try{root.doScroll("left")
}catch(e){setTimeout(poll,50);
return
}init("poll")
};
if(doc.readyState=="complete"){fn.call(win,"lazy")
}else{if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement
}catch(e){}if(top){poll()
}}doc[add](pre+"DOMContentLoaded",init,false);
doc[add](pre+"readystatechange",init,false);
win[add](pre+"load",init,false)
}};
aps.fn.monitofCeltraIframe=function(c){if(c===7||aps.cfg.dfp.celtra.divs.length==0){return
}for(var i=aps.cfg.dfp.celtra.divs.length-1;
i>=0;
i--){var frame=aps.cfg.dfp.celtra.divs[i];
var pFrame=frame.parentElement;
if(frame.style.display==="none"){if(pFrame.children.length>1){pFrame.style.position="relative";
frame.style.position="absolute";
frame.style.width="100%";
frame.style.height="100%";
frame.style.left="0"
}frame.style.display="block";
aps.fn.logInfo(pFrame.parentElement.id+": fixing Celtra display");
aps.cfg.dfp.celtra.divs.splice(i,1)
}}if(aps.cfg.dfp.celtra.divs.length>0){setTimeout(function(){aps.fn.monitofCeltraIframe(c+1)
},1000)
}};
aps.fn.tagAd=function(ad){if(!aps.cfg.logToConsole){return
}var div=document.getElementById(ad.code+"dbg");
if(!div){div=document.createElement("div");
div.id=ad.code+"dbg";
div.setAttribute("class","tooltip");
div.setAttribute("onmouseover","aps.fn.showAdDetails(this)");
var ori=document.getElementById(ad.code);
ori.style.position="relative";
var left=0;
if(ori.clientWidth&&ori.clientWidth>aps.pageWidth){left=20
}var style="top:0px;left:"+left+"px;min-height:"+ori.clientHeight+"px;height:100%;text-align:left; inline-block; color: #fff; background:rgba(255,138,69,70%); padding: 1px 4px; border-radius: 3px;position:absolute;font-family:'Source Sans Pro Regular',system-ui;min-width:80px;";
div.style=style;
ad.div.appendChild(div)
}if(!aps.cfg.infoDiv){var infoDiv=document.createElement("div");
infoDiv.id="infoDiv";
infoDiv.setAttribute("class","tooltipinfo");
infoDiv.style="position:absolute;display:none;width:406px;height:366px;overflow:hide;z-index;3000;background-color:rgba(255,138,69,100%);border-radius: 3px;font-family:'Source Sans Pro Regular';padding:3px 3px 3px 3px";
infoDiv.style.zIndex=3000;
document.body.insertBefore(infoDiv,document.body.firstChild);
aps.cfg.infoDiv=infoDiv;
var infoDivClick=document.createElement("div");
infoDivClick.style="position.absolute;top:0px;float:right;font-size:10pt;color:white";
infoDivClick.innerHTML="Click to close";
infoDiv.appendChild(infoDivClick);
var titleDiv=document.createElement("div");
titleDiv.id="infoDivTitle";
titleDiv.title="Click to close";
titleDiv.style="height:40px;width:400px;text-align:left;position:relative";
titleDiv.setAttribute("onclick","aps.fn.hideAdDetails()");
infoDiv.appendChild(titleDiv);
var detailsDiv=document.createElement("div");
detailsDiv.id="infoDivDetails";
detailsDiv.style="overflow-y:scroll;width:400px;height:300px;oveflow:scroll;font-size:small;line-height:normal;padding:3px;position:relative;background-color:white;color:black;font-family:'Source Sans Pro Regular'";
infoDiv.appendChild(detailsDiv)
}var inner=ad.code+"<br/><font size='2pt'>SD: "+ad.scrollDepth;
if(ad.advertiser){inner+="<br/>"+ad.advertiser
}inner+="</font>";
div.innerHTML=inner;
if(aps.cfg.infoDivDisplaying==ad.code){aps.fn.setAdDetails(ad.code)
}};
aps.fn.setAdDetails=function(id){if(!aps.cfg.logToConsole){return
}var ad=aps.cfg.ads[id];
document.getElementById("infoDivTitle").innerHTML="<h1>"+id+"</h1>";
var inner="<b>Misc</b><br/>";
inner+="AdUnit: <font color='blue'>"+ad.getPage().adUnit+"</font><br/>";
inner+="Advertiser: <font color='blue'>"+ad.advertiser+"</font><br/>";
inner+="SizeMappings: <font color='blue'>"+ad.sizeMappings.join(", ")+"</font><br/>";
inner+="Sizes: <font color='blue'>"+ad.stringSizes.join(", ")+"</font><br/>";
inner+="Page Width:  <font color='blue'>"+aps.pageWidth+"</font><br/>";
inner+="Current Device:  <font color='blue'>";
switch(current_device){case devices.DESKTOP:inner+="Desktop";
break;
case devices.TABLER:inner+="Tablet";
break;
case devices.MOBILE:inner+="Mobile";
break
}inner+="</font><br/>";
if(aps.cfg.bid.enabled){inner+="<hr/>";
inner+="<b>Bids</b><br/>";
if(ad.gam.aps&&ad.gam.aps.originalBid){inner+="Original Bid: <font color='blue'>"+ad.gam.aps.originalBid.ref+"</font><br/>"
}else{inner+="Original Bid: <font color='blue'>n/a</font><br/>"
}inner+="Optimized Bid: <font color='blue'>"+ad.gam.currentBid.ref+"</font><br/>";
inner+="Bid increase: <font color='blue'>"+parseFloat(ad.gam.aps.increase).toFixed(2)+"</font><br/>";
inner+="Won: <font color='blue'>"+ad.gam.currentBid.won+"</font><br/>"
}inner+="<hr/>";
if(ad.render){inner+="<b>Response Info</b><br/>";
var orderId=ad.render.responseInfo.campaignId;
var lineItemId=ad.render.responseInfo.lineItemId||ad.render.responseInfo.sourceAgnosticLineItemId;
Object.entries(ad.render.responseInfo).forEach(function(item){var link=item[1];
if(item[1]!=null){switch(item[0]){case"creativeId":link="<a href='https://admanager.google.com/36117602#creatives/creative/detail/creative_id="+item[1]+"&line_item_id="+lineItemId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"sourceAgnosticCreativeId":link="<a href='https://admanager.google.com/36117602#creatives/creative/detail/creative_id="+item[1]+"&line_item_id="+lineItemId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"lineItemId":link="<a href='https://admanager.google.com/36117602#delivery/line_item/detail/line_item_id="+item[1]+"&order_id="+orderId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"sourceAgnosticLineItemId":link="<a href='https://admanager.google.com/36117602#delivery/line_item/detail/line_item_id="+item[1]+"&order_id="+orderId+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break;
case"campaignId":link="<a href='https://admanager.google.com/36117602#delivery/order/order_overview/order_id="+item[1]+"' target='_blank' style='color:blue;text-decoration:underline'>"+item[1]+"</a>";
break
}}inner+=item[0]+": <font color='blue'>"+link+"</font><br/>"
});
inner+="<hr/>";
inner+="<b>Targeting</b><br/>";
Object.entries(ad.render.targetingMap).forEach(function(item){var value=Array.isArray(item[1])?item[1].join(", "):item[1].replace(",",", ");
inner+=item[0]+": <font color='blue'>"+value+"</font><br/>"
});
inner+="<hr/>";
inner+="<b>Page Targeting</b><br/>";
Object.entries(ad.render.request.pageTargeting).forEach(function(item){var value=Array.isArray(item[1])?item[1].join(", "):item[1].replace(",",", ");
inner+=item[0]+": <font color='blue'>"+value+"</font><br/>"
})
}document.getElementById("infoDivDetails").innerHTML=inner
};
aps.fn.showAdDetails=function(adinfo){var theAd=adinfo.id.replace("dbg","");
if(aps.cfg.infoDivDisplaying==theAd){return
}aps.cfg.infoDiv.style.display="block";
aps.cfg.infoDiv.style.top=event.pageY+15+"px";
aps.cfg.infoDiv.style.left=event.pageX+15+"px";
aps.cfg.infoDivDisplaying=theAd;
aps.fn.setAdDetails(theAd)
};
aps.fn.hideAdDetails=function(ad){aps.cfg.infoDiv.style.display="none";
aps.cfg.infoDivDisplaying=""
};
aps.fn.requestAds=function(){if(!aps.cfg.readyToCallGAM){aps.fn.waitToCallGAM();
return
}var requests=[];
var req;
var missing=[];
aps.cfg.queuedAds=aps.cfg.queuedAds.filter(function(id){return !["Inline","RB"].includes(id)
});
var arr=[];
aps.cfg.queuedAds.forEach(function(id){if(!arr.includes(id)){arr.push(id)
}});
aps.cfg.queuedAds=arr;
aps.cfg.queuedAds.forEach(function(id){var ad=aps.cfg.ads[id];
if(!ad){return
}if(!requests[ad.scrollDepth]){req=new aps.o.req(aps.cfg.page.allPages[ad.scrollDepth]);
requests[ad.scrollDepth]=req
}if(!ad.div){ad.div=document.getElementById(ad.code);
if(!ad.div){missing.push(ad.code);
aps.cfg.missingDivs.push(ad.code);
return
}}if(!ad.gam){if(ad.supportsNative){ad.gam=googletag.defineSlot("/"+aps.cfg.networkCode+"/"+ad.getPage().adUnit,["fluid"],ad.code)
}else{if(aps.cfg.is.legacy){ad.gam=googletag.defineSlot("/"+aps.cfg.networkCode+"/"+ad.getPage().adUnit,ad.sizes,ad.code)
}else{ad.gam=googletag.defineSlot("/"+aps.cfg.networkCode+"/"+ad.getPage().adUnit,[ad.width,ad.height],ad.code)
}}ad.kvps.forEach(function(kvp){ad.gam.setTargeting(kvp.key,kvp.value)
})
}if(ad.gam){ad.gam.clearTargeting("frsh");
ad.gam.setTargeting("frsh",ad.renderCount);
ad.gam.clearTargeting("i");
ad.gam.setTargeting("i",""+aps.cfg.dfp.requests.length);
if(["Crown"].includes(ad.code)){ad.gam.setCollapseEmptyDiv(true,true)
}aps.fn.setupResponsiveMappings(ad.gam,ad);
ad.gam.addService(googletag.pubads())
}if(ad.gam&&ad.div){if(req.ads.length<aps.cfg.dfp.maxAdsPerRequest){ad.isLoading=true;
req.gams.push(ad.gam);
req.ads.push(ad.code);
if(ad.div.firstChild&&ad.div.firstChild.clientHeight){if(ad.div.firstChild.clientHeight>Math.abs(ad.div.style.minHeight.replace("px",""))){ad.div.style.minHeight=ad.div.firstChild.clientHeight+"px"
}}}}});
if(missing.length>0){aps.logInfo("*GAM* Not requesting "+missing+" div(s) not on the page")
}requests.forEach(function(request,index){if(request.ads.length==0&&aps.cfg.dfp.requests.length==0){aps.cfg.waitingForAds=aps.cfg.waitingForAds||new Date().valueOf();
var thisTime=new Date().valueOf();
if(thisTime>aps.cfg.waitingForAds+15000){aps.logInfo("*GAM* Page not ready - no ads to request - enough waiting");
aps.cfg.queuedAds=[]
}else{aps.logInfo("*GAM* Page not ready - no ads to request");
setTimeout(aps.fn.requestAds,100)
}return
}if(aps.cfg.bid.enabled&&((aps.cfg.bid.a9.enabled&&!request.page.a9BidsReceived)||!request.page.pbBidsReceived)){var info=JSON.stringify({version:1.1,pbBids:{enabled:aps.cfg.bid.enabled,received:request.page.pbBidsReceived},a9Bids:{enabled:aps.cfg.bid.a9.enabled,received:request.page.a9BidsReceived},scroll:request.page.scrollDepth,});
aps.logInfo("Bids not received for page "+request.page.scrollDepth);
request.gams=[];
request.ads=[]
}if(request.gams.length>0){if(request.page.datalayer.content.isSensitive){aps.logInfo("Don't serve ad on "+request.page.href+" - tragedy flag");
return
}request.page.addPageKvp("scrollpage",""+request.page.scrollDepth,true);
aps.cfg.page.kvps.forEach(function(kvp){googletag.pubads().setTargeting(kvp.key,kvp.value)
});
request.page.kvps.forEach(function(kvp){googletag.pubads().setTargeting(kvp.key,kvp.value)
});
aps.fireEvent(aps.event.on_before_request_ads,request);
request.pageTargeting={};
var pagetm=googletag.pubads().getTargetingKeys();
pagetm.forEach(function(key){request.pageTargeting[key]=googletag.pubads().getTargeting(key)
});
request.ads.forEach(function(adId){aps.cfg.ads[adId].state="requested"
});
aps.cfg.dfp.requests.push(request);
aps.fn.logInfo("*GAM* requesting for page "+index+" : "+request.ads);
if(aps.cfg.dfp.batchSRA.enabled||request.page.page_type2=="article"){googletag.pubads().refresh(request.gams,{changeCorrelator:false})
}else{googletag.pubads().refresh(request.gams)
}}aps.cfg.queuedAds=aps.cfg.queuedAds.filter(function(id){return !request.ads.includes(id)
});
if(aps.cfg.queuedAds.length>0){if(aps.cfg.dfp.requests.length>0&&(HDN.dataLayer.ads.loaded||!aps.cfg.is.wcm)){var divs=[];
for(var i=aps.cfg.queuedAds.length-1;
i>=0;
i--){if(!aps.cfg.ads[aps.cfg.queuedAds[i]].div){divs.push(aps.cfg.queuedAds[i]);
aps.cfg.queuedAds.splice(i,1)
}}if(divs.length>0){aps.fn.logInfo("*GAM* "+divs+" removed from queue, still not on page")
}}if(aps.cfg.queuedAds.length>0){setTimeout(aps.fn.requestAds,500)
}}});
if(aps.cfg.dfp.batchSRA.enabled){aps.cfg.dfp.batchSRA.waitingNext=true;
if(aps.cfg.dfp.batchSRA.auto){aps.fn.logInfo("BatchSRA : waiting to next step in "+aps.cfg.dfp.batchSRA.delay+" ms");
setTimeout(aps.fn.displayNextBatch,aps.cfg.dfp.batchSRA.delay)
}}};
aps.fn.waitToCallGAM=function(){if(aps.cfg.readyToCallGAM){aps.fn.requestAds()
}else{if((aps.cfg.bid.a9.enabled&&!aps.cfg.bid.a9.received)||(aps.cfg.bid.enabled&&!aps.cfg.bid.pb.received)||!aps.cfg.domIsLoaded||!googletag.apiReady||aps.cfg.waitingForRichie||(!aps.cfg.tregReady&&aps.cfg.waitForTreg&&!aps.cfg.is.legacy)){if(aps.cfg.waitingSince){var now=new Date().valueOf();
if(now-aps.cfg.waitingSince>=5000){var info={version:aps.cfg.version,pbBids:{enabled:aps.cfg.bid.enabled,received:aps.cfg.bid.pb.received},a9Bids:{enabled:aps.cfg.bid.a9.enabled,received:aps.cfg.bid.a9.received},domIsLoaded:aps.cfg.domIsLoaded,apiReady:googletag.apiReady,richie:{is:aps.cfg.is.richie,waiting:aps.cfg.waitingForRichie},treg:{waiting:aps.cfg.waitForTreg,ready:aps.cfg.tregReady},legacy:aps.cfg.is.legacy,};
aps.logInfo(["Waiting for 5 seconds.",info]);
if(googletag.apiReady){aps.cfg.readyToCallGAM=true;
aps.fn.requestAds()
}else{setTimeout(aps.fn.waitToCallGAM,100)
}}else{aps.logInfo("Not ready to call GAM");
setTimeout(aps.fn.waitToCallGAM,100)
}}else{aps.logInfo("Not ready to call GAM");
aps.cfg.waitingSince=aps.cfg.waitingSince||new Date().valueOf();
setTimeout(aps.fn.waitToCallGAM,100)
}}else{aps.logInfo("Ready to call GAM");
aps.cfg.readyToCallGAM=true;
aps.fn.requestAds()
}}}
})();(function(){aps.pageWidth=window.screen.width||top.window.innerWidth||window.width||-1;
if(navigator.userAgent.indexOf("iPad")>-1){window.current_device=devices.TABLET
}else{if(navigator.userAgent.indexOf("iPhone")>-1){window.current_device=devices.MOBILE
}else{if(navigator.userAgent.indexOf("Android")>-1){window.current_device=devices.MOBILE
}else{if(document.querySelectorAll("meta[name=viewport]").length>0){try{var d;
var c=document.querySelectorAll("meta[name=viewport]")[0].content.split(",");
for(var b=0;
b<c.length;
b++){var e=c[b].split("=");
if(e[0].trim()=="width"){d=e[1].trim()
}}aps.pageWidth=(d=="device-width")?window.innerWidth:d
}catch(a){}}window.current_device=(aps.pageWidth<768)?devices.MOBILE:devices.DESKTOP
}}}})();(function(){aps.event.on_dom_loaded=10;
aps.event.on_before_request_ads=20;
aps.event.on_get_bids=30;
aps.event.on_request_new_video_ads=40;
aps.event.on_ad_definition_loaded=50;
aps.event.on_define_bid_data=60;
aps.event.on_initial_bid_request=70;
aps.event.on_timer=80;
aps.event.on_new_page=90;
aps.event.on_first_load=100;
aps.event.on_new_div=110;
aps.event.on_request_bid=120;
aps.event.on_check_include_ad=130;
aps.event.on_render_ad=140;
aps.cfg.timer=setInterval(function(){aps.fireEvent(aps.event.on_timer)
},1000);
aps.logtype.info=0;
aps.logtype.warning=1;
aps.logtype.error=2;
aps.registerEvent=function(b,a){var c=aps.events[b];
aps.events[b]=function(d){c&&c(d);
a(d)
}
};
aps.fireEvent=function(a,b){aps.events[a]&&aps.events[a](b)
}
})();(function(){aps.cfg.is.wcm=(HDN&&HDN.dataLayer&&HDN.dataLayer.content&&typeof HDN.dataLayer.content.designTemplate!="undefined")?true:false;
aps.cfg.is.authorPage=(aps.cfg.is.wcm&&document.location.pathname.startsWith("/author/"))?true:false;
aps.cfg.is.datebookSF=document.location.hostname=="datebook.sfchronicle.com";
aps.cfg.is.eedition=document.location.hostname.indexOf("olivesoftware.com")>0;
aps.cfg.is.faceBookInstantArticle=(JuicePageUrl.indexOf("juicemode=fbinstant")!==-1);
aps.cfg.is.leafsSite=aps.cfg.leafsSites.includes(document.location.hostname);
aps.cfg.is.legacy=(document.location.hostname.indexOf("legacy.com")>-1||(top.location!=location&&document.referrer=="https://www.legacy.com/"));
aps.cfg.is.premium=(HDN&&HDN.dataLayer&&typeof HDN.dataLayer.paywall!=="undefined"&&typeof HDN.dataLayer.paywall.premiumStatus!=="undefined"&&HDN.dataLayer.paywall.premiumStatus==="isPremium")?true:false;
aps.cfg.is.premiumSite=["expressnews.com","houstonchronicle.com","sfchronicle.com"].some(function(a){return document.location.host.endsWith(a)
})&&document.location.host.split(".").some(function(a){return["www","cmf"].includes(a)
});
aps.cfg.is.qa=(document.location.hostname.startsWith("cmf.")||document.location.hostname.startsWith("preview.cmf")||loadAd_UrlLocation=="https://aps-staging.hearstnp.com/")?true:false;
aps.cfg.is.previewHC=document.location.hostname=="preview.houstonchronicle.com";
aps.cfg.is.projectPage=(document.location.pathname.startsWith("/projects")||document.location.hostname.startsWith("projects."))?true:false;
aps.cfg.is.richie=APSpageUrl.indexOf("staging.richie")==0||APSpageUrl.indexOf("richie")==0||APSpageUrl.indexOf("papp")==0;
aps.cfg.is.wp=typeof(window.wp_content)=="object"
})();(function(){aps.registerEvent(aps.event.on_new_page,function(a){a.adUnit=null;
a.setAdUnit=function(){var b={adUnit:(aps.page&&aps.page.adUnit)?aps.page.adUnit:"",previousValue:(aps.page&&aps.page.adUnit)?aps.page.adUnit:"",queryStringOverwritten:false,levelOne:{value:"hnp-"+a.domain,forced:false,},levelTwo:{value:"",forced:false,},checkQueryStringValue:function(){var d=aps.fn.getQueryParameterByName("hnpau");
if(!d){return
}var c=d.split("/");
if(c[0]&&c[0]!=""){if(c[0].startsWith("hnp-")){this.levelOne.value=c[0];
this.levelOne.forced=true;
this.queryStringOverwritten=true
}else{aps.fn.logInfo("*WRN* Using hnpau query string param to set runtime adunit needs to have an adunit to start with 'hnp-'. To define second level, add it after /. To only change second level, start at /")
}}if(c[1]&&c[1]!=""){this.levelTwo.value=c[1];
this.levelTwo.forced=true;
this.queryStringOverwritten=true
}},getNewValue:function(){this.checkQueryStringValue();
if(aps.cfg.is.richie){this.levelOne.value="hnp-"+a.domain;
this.levelOne.forced=true;
this.levelTwo.value="article_rapp";
this.levelTwo.forced=true
}if(aps.cfg.is.authorPage||aps.cfg.is.projectPage){this.levelTwo.value="general_wcm";
this.levelTwo.forced=true
}if(aps.cfg.is.datebookSF||aps.cfg.is.previewHC){this.levelTwo.value="datebook_wp";
this.levelTwo.forced=true
}if(window.juice&&window.juice.definedTags&&window.juice.definedTags.adUnit){var c=juice.definedTags.adUnit.split("/");
this.levelOne.value=c[0];
this.levelOne.forced=true;
this.levelTwo.value=c[1];
this.levelTwo.forced=true
}if(aps.cfg.is.legacy){if(!this.levelOne.forced){this.levelOne.value="hnp-"+a.domain;
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="Obituaries";
this.levelTwo.forced=true
}}if(aps.cfg.is.eedition){if(!this.levelOne.forced){var d=document.location.pathname.split("/")[3]+".com";
switch(document.location.pathname.split("/")[3]){case"albanytimesunion":d="timesunion.com";
break;
case"atuspecialsectionfree":d="timesunion.com";
break;
case"atuspecialsectionpaid":d="timesunion.com";
break;
case"atusubscriberexclusives":d="timesunion.com";
break;
case"beaumontlakecaster":d="beaumontenterprise.com";
break;
case"beaumontvip":d="beaumontenterprise.com";
break;
case"connecticutpost":d="ctpost.com";
break;
case"cthousehunter":d="ctpost.com";
break;
case"danburynewstimes":d="newstimes.com";
break;
case"foothillstrader":d="nhregister.com";
this.levelTwo.value="e-edition";
this.levelTwo.forced=true;
break;
case"houstonchronicle":d="chron.com";
break;
case"hurondailytribune":d="michigansthumb.com";
break;
case"hurondailytribunenie":d="michigansthumb.com";
break;
case"intelligencer":d="theintelligencer.com";
break;
case"laredomorningtimes":d="lmtonline.com";
break;
case"lavoz":d="chron.com";
break;
case"midlanddailynews":d="ourmidland.com";
break;
case"midlanddailynewsnie":d="ourmidland.com";
break;
case"midlandreportertelegram":d="mrt.com";
break;
case"midlandreportertelegramnie":d="mrt.com";
break;
case"saenmilitary":d="mysanantonio.com";
break;
case"saencommunities":d="mysanantonio.com";
break;
case"saensubscriberexclusives":d="mysanantonio.com";
break;
case"saenweeklies":d="mysanantonio.com";
break;
case"sanantonioexpressnews":d="mysanantonio.com";
break;
case"sanfranciscochronicle":d="sfgate.com";
break;
case"sanfranciscochroniclenie":d="sfgate.com";
break
}if(d!=""){this.levelOne.value="hnp-"+d;
this.levelOne.forced=true
}}if(!this.levelTwo.forced){this.levelTwo.value="E-edition";
this.levelTwo.forced=true
}}if(aps.cfg.is.qa&&aps.cfg.is.wcm){if(!this.levelOne.forced){this.levelOne.value="hnp-hearstdemosite";
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="hearstdemozone";
this.levelTwo.forced=true
}}if(aps.cfg.is.leafsSite){if(document.location.hostname=="pyme.lavoztx.com"){if(!this.levelOne.forced){this.levelOne.value="hnp-chron.com";
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="La_Voz";
this.levelTwo.forced=true
}}if(!this.levelOne.forced){this.levelOne.value="hnp-"+document.location.host.split(".").slice(-2).join(".");
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value=(document.location.pathname=="/")?"channel_leaf":"article_leaf";
this.levelTwo.forced=true
}}if(!this.levelTwo.forced&&!a.isSubDomain&&a.path.length==0){this.levelTwo.value="Homepage";
this.levelTwo.forced=true
}if(!this.levelTwo.forced){switch(aps.cfg.designTemplate){case"design/article/dynamic_two_column.tpl":this.levelTwo.value="article_dtc";
this.levelTwo.forced=true;
break;
case"design/article/dynamic_one_column.tpl":this.levelTwo.value="article_doc";
this.levelTwo.forced=true;
break;
case"design/slideshow/dynamic_two_column.tpl":this.levelTwo.value="article_list";
this.levelTwo.forced=true;
break;
case"design/channel/dynamic_two_column.tpl":this.levelTwo.value="channel_wcm";
this.levelTwo.forced=true;
break;
default:if(aps.cfg.designTemplate&&aps.cfg.designTemplate.indexOf("channel")>-1){this.levelTwo.value="channel_old";
this.levelTwo.forced=true
}else{this.levelTwo.value="article_old";
this.levelTwo.forced=true
}}}this.levelOne.value=this.levelOne.value.replace("hnp-theintelligencer.com","theintelligencer");
var e=this.levelOne.value+"/"+this.levelTwo.value;
if(this.queryStringOverwritten||aps.sitesWithoutCallback.includes(a.hostname)){this.adUnit=e;
aps.fn.logInfo("*AdUnit: setting adUnit to : "+this.adUnit)
}this.newValue=e;
return e
}};
a.adUnit=b.getNewValue()
}()
})
})();(function(){aps.registerEvent(aps.event.on_new_page,function(a){a.sectionPath=[];
a.setSectionPath=function(){var d=a.datalayer.content.sectionPath||[];
if(d.length>0&&typeof d[0].title=="string"){var c=[];
Object.entries(d).forEach(function(e){c.push(e[1].title.toLowerCase())
});
d=c
}if(aps.cfg.is.datebookSF){a.sectionPath=["entertainment","datebook"]
}else{if(aps.cfg.is.previewHC){a.sectionPath=["entertainment","preview"]
}else{if(window.juice&&window.juice.definedTags&&window.juice.definedTags.sectionPath){a.sectionPath=juice.definedTags.sectionPath
}else{if(aps.cfg.is.authorPage){a.sectionPath=["author",a.path[2]]
}else{if(aps.cfg.is.leafsSite){a.sectionPath=[document.location.hostname.split(".")[0]];
a.addPageKvp("category","third_party");
a.addPageKvp("custom","demandmedia")
}else{if(d){a.sectionPath=d;
for(var b=0;
b<a.sectionPath.length;
b++){a.sectionPath[b]=a.sectionPath[b].replace(/["\'=!#*~;\^<>]/g,"");
a.sectionPath[b]=a.sectionPath[b].replace(/\s\+\s|\s\&\s|\+|\&/g,"-and-");
a.sectionPath[b]=a.sectionPath[b].replace(/[\(\)\[\],]/g,"|")
}}}}}}}if(a.sectionPath.length>0){aps.fn.logInfo("section Path: "+d);
for(var b=0;
b<a.sectionPath.length;
b++){if(a.sectionPath[b]){aps.fn.logInfo("section Path: section"+(b+1)+"="+a.sectionPath[b]);
a.addPageKvp("section"+(b+1),a.sectionPath[b])
}}}}()
})
})();(function(){aps.cfg.advertisers={46962802:"House PSA",46402162:"House PSA",46328242:"A9",4506751574:"Aardvark",198604042:"AppNexus",4401584047:"Consumable",4594233306:"Concert",46513882:"Criteo",99465802:"Facebook",53211082:"Google Adx",47574562:"ix",4726587804:"JustPremium",47576002:"Kargo",4542983697:"Lockerdome",4903417422:"NoBid",53204482:"OpenX",5174193964:"PublicGood",79962922:"Pubmatic",5024029832:"PulsePoint",53212282:"Rubicon",55181242:"Teads",53212402:"TripleLift",4907535500:"Vidazoo",4401894681:"Yieldmo",203184442:"Gamut Media",169654522:"ix",169655602:"OpenX",169656562:"RhythmOne",169656562:"Rubicon",195800602:"Sovrn",4579237619:"Media.net",4417528020:"TripleLift",};
if(window.location.search.indexOf("console=2")!==-1){window.debugSGA=true
}aps.cfg.adDefinitionLoaded=false;
aps.cfg.ads=[];
aps.cfg.adtest={};
aps.cfg.adMap=aps.cfg.adMap||[];
aps.cfg.adtestparam="";
aps.cfg.domIsLoaded=false;
aps.cfg.infiniteScroll=HDN.dataLayer.presentation.infiniteScrollEnabled;
aps.cfg.missingDivs=[];
aps.cfg.designTemplate=HDN&&HDN.dataLayer&&HDN.dataLayer.content&&HDN.dataLayer.content.designTemplate;
aps.cfg.disablePersonalisation=false;
aps.cfg.doNotSell=HDN&&HDN.dataLayer&&HDN.dataLayer.privacy&&HDN.dataLayer.privacy.ccpaDoNotSell||false;
aps.cfg.juiceCustom=false;
aps.cfg.logToConsole=aps.cfg.logToConsole||(window.debugSGA)?true:(window.location.search.indexOf("console=1")!==-1)?true:false;
var a=aps.fn.getCookie("console");
if(a!=undefined&&a=="1"){aps.cfg.logToConsole=true
}aps.cfg.nlpCat=[];
aps.cfg.stp={at:-1,nextTimeout:2500,def:{timeout:2500,stepStarted:false,dfpCalled:false,ads:[],adsToRequest:[],divids:[],pb:{biddersDone:[],bids:[],calledBidders:[],clientSideBidders:[],},a9:{bidsReceived:false,},adRendered:false,matching:[],reason:"",},};
aps.cfg.dfp={celtra:{},dynamicAds:[],phd:{enabled:false,},rnd:{},celtraAds:[],googleSlots:[],moatYieldReady:false,adsNotShowing:[],refreshes:0,undefinedAds:[],waiting:[],isWaiting:false,dataLayerInterstitialRefreshables:["Flex1","A300","TMP300_3","MAD"],viewability:[],rendered:{timer:null,que:[]},requests:[],maxAdsPerRequest:10,};
aps.cfg.bid={a9:{adUnits:[],enabled:true,config:{},apstag:{},initCalled:false,videoAdUnits:[],partners:[],received:false,},pb:{config:{},data:{},adUnits:[],adUnitIds:[],videoAdUnits:[],s2sBidders:[],bidders:[],biddersCount:0,biddersDone:[],biddersPriority:["triplelift","criteo","concert","ix","kargo","vidazoo"],dataProviders:[],settings:{},moveToS2SOnMax:["rubicon","appnexus","pubmatic"],notSupportingGDPR:["consumable","kargo","appnexus"],shuffleMoveToS2SOnMax:true,received:false,},bids:[],detectAllBids:true,disableNative:true,disableMobile:false,disabledOnMobile:[],enabled:(window.location.search.indexOf("pb=0")!==-1)?false:true,enableGDPR:false,excludedDomains:["gametimect.com","olivesoftware.com"],lessBidder:0,current_domain:"",current_device:current_device,showTargeting:true,showType:false,maxClientSideBidders:(current_device==devices.DESKTOP)?7:6,excludedBids:[['wrapper=="pb" && aps.cfg.page.current.domain=="chron.com" && adDef.code == "A951" && ["home page","channel"].includes(aps.page_type2)',"no bid on A951 for page_type2 home_page or channel on chron.com"],['wrapper=="pb" && aps.page_type2 != "article" && adDef.code.startsWith("CONCERT")',"no bid on CONCERTx ads for page_type2 not article"],['bidder == "criteo" && adDef.code.startsWith("NTV")',"no bid on NTV ads for criteo"],['bidder == "consumable" && adDef.width == 970 && adDef.height == 250',"no bid on 970x250 ads for consumable"],['bidder == "teads" && adDef.width == 501 && adDef.height == 501 && aps.page_type2 != "article"',"no bid on non article page on CONCERTx for teads"],['bidder == "teads" && aps.cfg.ads.filter(function(ad){return ad.advertiserId == 55181242}).count >= 10',"no bid after 10 impressions of teads"],['bidder=="triplelift" && ["Flex1","B728","TMP300_3"].includes(adDef.code)',"no bid on Flex1, B728 or TMP300_3 for triplelift"],['adDef.code == "A951" && document.location.href.startsWith("https://www.sfgate.com/realestate/")',"no bid on A951 on sfgate realestate"],['bidder == "kargo" && adDef.code == "Flex1"',"no bid on Flex1 for Kargo"],['bidder == "teads" && ["Flex1","MAD","Inline","RB"].includes(adDef.code)',"no bid on Flex1, MAD, Inline or RB for teads"],['adDef.code == "DTBK_AP951"',"no bid on DTBK_AP951, direct sales only."],],};
aps.cfg.vid={mode:"apv",tagUrl:"",enabled:false,};
aps.cfg.gaLog=(Math.floor(Math.random()*100)<=5);
aps.cfg.excludeModules=[];
aps.cfg.waitingGoogle=false;
aps.cfg.preventCeltraAdsToRefresh=true;
aps.cfg.queuedAds=[];
aps.cfg.serveAds=true;
aps.cfg.readyToCallGAM=false;
aps.cfg.refreshViewableOnly=true;
aps.cfg.videoAdTag=null;
if(aps.cfg.logToConsole){var b=new Date();
b.setTime(b.getTime()+(1000*24*60*60*1000));
var c="; expires="+b.toGMTString();
document.cookie="console=1"+c+"; path=/"
}if(window.location.search.indexOf("console=0")!==-1){var b=new Date();
b.setTime(b.getTime()+(60*1000));
var c="; expires="+b.toGMTString();
document.cookie="console=0"+c+"; path=/";
aps.cfg.logToConsole=false
}aps.cfg.source="Prod";
if(window.loadAd_UrlLocation.indexOf("dev.")>-1||aps.cfg.is.qa){aps.cfg.source="QA"
}if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_version",eventAction:aps.cfg.source,eventLabel:aps.cfg.version})
}aps.registerEvent(aps.event.on_new_page,function(d){if(document.location.pathname.indexOf("/sponsored/")!==-1){aps.fn.logInfo("*Disabling bidders - sponsored content");
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}if(aps.cfg.bid.excludedDomains.includes(d.domain)){aps.fn.logInfo("*Disabling bidders - excluded domains");
aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}if(document.location.hostname.startsWith("storystudio")){aps.fn.logInfo("storystudio - no ads");
aps.cfg.serveAds=false
}if(aps.cfg.is.projectPage){aps.sitesWithoutCallback.push(document.location.hostname)
}if(aps.cfg.is.qa&&aps.cfg.is.wcm){aps.sitesWithoutCallback.push(document.location.hostname)
}})
})();(function(){aps.cfg.waitingForRichie=aps.cfg.waitingForRichie||false;
if(APSpageUrl){if(aps.cfg.is.richie){googletag.cmd.push(function(){try{googletag.pubads().set("page_url",JuicePageUrl);
aps.fn.logInfo("Richie app: Setting page_url to "+JuicePageUrl)
}catch(b){}});
aps.fn.logInfo("Richie app: disabling modules");
if(document.location.href.indexOf("?appId=")==-1){aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false
}aps.cfg.excludeModules=["nlp","ab_testing","blueconic","PublisherProvidedId","permutive"];
if(typeof mraid=="undefined"){aps.fn.logInfo("mraid not present, not waiting for Richie");
aps.cfg.waitingForRichie=false
}else{aps.cfg.waitingForRichie=true;
aps.fn.logInfo("Richie app: enabling viewable trigger");
function a(b){if(b){aps.cfg.waitingForRichie=false;
aps.fn.logInfo("Richie app: viewable triggered")
}}mraid.addEventListener("viewableChange",a)
}}}})();(function(){aps.fn.getHDNnlpWithId=function(e,g,d){var f=[];
try{var a=e.datalayer.content["keyNlp"+g];
for(var c=0;
c<a.length;
c++){if(c<10){f.push(d+"_"+a[c].trim())
}}}catch(b){}return f
};
aps.registerEvent(aps.event.on_new_page,function(d){try{var a=[];
var f=d.datalayer.content.keyNlpCategories||[];
f=f.map(function(g){if(g.startsWith("/")){return g.substring(1)
}return g
});
d.addPageKvp("nlp_categories",f);
var b=[];
var e=d.datalayer.source.authorName;
if(e.length>0){b=b.concat("a_"+e)
}e=aps.fn.getHDNnlpWithId(d,"ConsumerGood","g");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Event","e");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Location","l");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Organization","o");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Person","p");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"Unknown","u");
if(e.length>0){b=b.concat(e)
}e=aps.fn.getHDNnlpWithId(d,"WorkOfArt","w");
if(e.length>0){b=b.concat(e)
}d.addPageKvp("nlp_entities",b)
}catch(c){aps.fn.logInfo("nlp_categories: exception")
}})
})();(function(){if(aps.cfg.is.eedition){return
}if(!aps.fn.shouldRunThirdParty("permutive")){return
}aps.cfg.permutive=aps.cfg.permutive||{};
aps.cfg.permutive.excludedFrom=["www.sfgate.com/partner/transparensee","www.mysanantonio.com/partner/transparensee","www.timesunion.com/partner/transparensee","https://realestate.timesunion.com/"];
aps.cfg.permutive.setPermutiveValue=function(page,arrToTest){retValue=null;
if(!arrToTest.length){arrToTest=[arrToTest]
}for(var i=0;
i<arrToTest.length;
i++){if(retValue==null){try{retValue=eval(arrToTest[i]);
if(retValue){return retValue
}}catch(e){}}}return retValue
};
aps.registerEvent(aps.event.on_new_page,function(page){if(aps.cfg.permutive.excludedFrom.includes(APSpageUrl)){return
}window.ntvConfig=window.ntvConfig||{};
window.ntvConfig.keyValues=window.ntvConfig.keyValues||{};
page.permutive.ntvConfig=localStorage.getItem("_pnativo");
if(page.permutive.ntvConfig){window.ntvConfig.keyValues.permutive=page.permutive.ntvConfig
}page.permutive.config={"page":{"type":"","article":{"id":"","title":"","description":"","authors":[],"sections":[],"publishedAt":"","keywords":[],"nlp":{"categories":[],"person":[],"location":[],"organization":[],"event":[],"workOfArt":[],"consumerGood":[],"other":[],"unknown":[]}},"user":{"bcDFPTargetingParams":[]}}};
page.permutive.config.page.type=aps.cfg.permutive.setPermutiveValue(page,["wp_content.objectType","page.datalayer.content.objectType","dataLayer.filter(function(e){return e.pagetype})[0].pagetype","document.querySelector(\"meta[property='og:type']\").content",page.permutive.config.page.type]);
page.permutive.config.page.article.id=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.objectId",page.permutive.config.page.article.id]);
page.permutive.config.page.article.title=aps.cfg.permutive.setPermutiveValue(page,["wp_content.title","page.datalayer.content.title","dataLayer.filter(function(e){return e.content_name})[0].content_name","document.querySelector(\"meta[property='og:title']\").content",page.permutive.config.page.article.title]);
page.permutive.config.page.article.description=aps.cfg.permutive.setPermutiveValue(page,["document.querySelector(\"meta[name='description']\").content",page.permutive.config.page.article.description]);
page.permutive.config.page.article.authors=aps.cfg.permutive.setPermutiveValue(page,["wp_source.authorName.split(', ')","page.datalayer.source.authorName.split(', ')","dataLayer.filter(function(e){return e.author})[0].author.split(', ')","document.querySelector(\"meta[name='author']\").content.split(', ')",""]);
page.permutive.config.page.article.sections=aps.cfg.permutive.setPermutiveValue(page,["wp_content.sectionPath.filter(function(e){return e!=''})","page.datalayer.content.sectionPath","var e = dataLayer.filter(function(e){return e.category})[0];var p=[e.category,e.subcategory]; p.filter(function(e){return e || false})","document.querySelector(\"meta[property='og:section']\").content.split(', ')",page.permutive.config.page.article.section]);
page.permutive.config.page.article.publishedAt=aps.cfg.permutive.setPermutiveValue(page,["wp_content.pubDate.replace(' ','T')+ 'Z'","page.datalayer.content.pubDate.replace(' ','T')+ 'Z'","getPublishedDateISO()","pubDate",page.permutive.config.page.article.publishedAt]);
page.permutive.config.page.article.keywords=aps.cfg.permutive.setPermutiveValue(page,['document.querySelector("meta[name=\'news_keywords\']").content.split(", ")','document.querySelector("a[rel=\'category tag\']").textContent.split(", ")',"[dataLayer.filter(function(e){return e.adcat1})[0].adcat1 || '',dataLayer.filter(function(e){return e.adcat1})[0].adcat2 || '',dataLayer.filter(function(e){return e.adcat1})[0].adcat3 || ''].filter(function (e){return e != ''})","[document.location.pathname.split('/')[1]]",[]]);
page.permutive.config.page.article.nlp.categories=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpCategories",page.permutive.config.page.article.nlp.categories]);
page.permutive.config.page.article.nlp.person=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpPerson",page.permutive.config.page.article.nlp.person]);
page.permutive.config.page.article.nlp.location=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpLocation",page.permutive.config.page.article.nlp.location]);
page.permutive.config.page.article.nlp.organization=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpOrganization",page.permutive.config.page.article.nlp.organization]);
page.permutive.config.page.article.nlp.event=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpEvent",page.permutive.config.page.article.nlp.event]);
page.permutive.config.page.article.nlp.workOfArt=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpWorkOfArt",page.permutive.config.page.article.nlp.workOfArt]);
page.permutive.config.page.article.nlp.consumerGood=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpConsumerGood",page.permutive.config.page.article.nlp.consumerGood]);
page.permutive.config.page.article.nlp.other=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpOther",page.permutive.config.page.article.nlp.other]);
page.permutive.config.page.article.nlp.unknown=aps.cfg.permutive.setPermutiveValue(page,["page.datalayer.content.keyNlpUnknown",page.permutive.config.page.article.nlp.unknown]);
page.permutive.config.page.user.bcDFPTargetingParams=aps.cfg.permutive.setPermutiveValue(page,['JSON.parse(localStorage.getItem("bcDFPTargetingParams"))[0].value']);
page.permutive.config.page.user.subscriberStatus=aps.cfg.permutive.setPermutiveValue(page,["treg.identity.isEntitled.toString()","'false'"]);
page.permutive.project_id="0272ac85-5199-4024-a555-397c3d825d95";
page.permutive.organization_id="0272ac85-5199-4024-a555-397c3d825d95";
page.permutive.public_api_key="8cbbdd6e-f6b9-4f84-9637-a93d3032cbf2";
page.permutive.workspace_id="6af07a2d-d0d3-4dfd-961a-bab066126220";
page.permutive.publisherUserId=aps.fn.getCookie("HNPDIUDPF2");
page.permutive.maxItems=170;
page.permutive.ids=[];
!function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";
for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;
r<o.length;
r++){var t=o[r];
n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);
n.q.push({functionName:e,arguments:i})
}
}(t)
}}}(window.permutive,page.permutive.public_api_key,{});
if(page.permutive.publisherUserId!=""){window.permutive.identify([{"id":page.permutive.publisherUserId,"tag":"publisherUserId"}])
}permutive.addon("web",page.permutive.config);
aps.fn.insertScript("https://"+page.permutive.organization_id+".edge.permutive.app/"+page.permutive.workspace_id+"-web.js",true);
aps.fn.logInfo("Permutive: Loading")
});
aps.registerEvent(aps.event.on_before_request_ads,function(request){request.page.permutive.ids=googletag.pubads().getTargeting("permutive");
if(request.page.permutive.ids.length===0){try{request.page.permutive.ids=JSON.parse(localStorage.getItem("_pdfps"))
}catch(e){request.page.permutive.ids=[]
}request.page.permutive.ids=request.page.permutive.ids||[];
if(request.page.permutive.ids.length>request.page.permutive.maxItems){aps.fn.logInfo("Permutive: "+request.page.permutive.ids.length+" audiences found");
if(request.page.domain!="stamfordadvocate.com"){request.page.permutive.ids=request.page.permutive.ids.slice(0,request.page.permutive.maxItems)
}}aps.fn.logInfo("Permutive (from local storage)")
}else{request.page.permutive.ids=request.page.permutive.ids||[];
if(request.page.permutive.ids.length>request.page.permutive.maxItems){aps.fn.logInfo("Permutive: "+request.page.permutive.ids.length+" audiences found");
if(request.page.domain!="stamfordadvocate.com"){request.page.permutive.ids=request.page.permutive.ids.slice(0,request.page.permutive.maxItems)
}}}var permutiveKvp=request.page.kvps.filter(function(kvp){return kvp.key=="permutive"
})[0];
if(permutiveKvp){permutiveKvp.value=[]
}request.page.addPageKvp("permutive",request.page.permutive.ids,true)
})
})();(function(){aps.cfg.multi=aps.cfg.multi||{};
aps.cfg.multi.ads=aps.cfg.multi.ads||[];
aps.cfg.multi.enabled=aps.cfg.multi.enabled||false;
aps.cfg.multi.availableTypes={};
if(aps.cfg.is.wcm){aps.cfg.multiAds["Inline"]=aps.cfg.allAds["Inline"];
aps.cfg.multiAds["LIST"]=aps.cfg.allAds["LIST"];
aps.cfg.multiAds["RB"]=aps.cfg.allAds["RB"];
aps.cfg.multiAds["SSHOW"]=aps.cfg.allAds["SSHOW"];
aps.cfg.multiAds["Box"]=aps.cfg.allAds["Box"]
}else{if(aps.cfg.is.leafsSite){aps.cfg.multiAds["A728"]=aps.cfg.allAds["A728"];
aps.cfg.multiAds["A300"]=aps.cfg.allAds["A300"];
aps.cfg.multiAds["B300"]=aps.cfg.allAds["B300"];
aps.cfg.multiAds["S300"]=aps.cfg.allAds["S300"];
aps.cfg.multiAds["Leaf1"]=aps.cfg.allAds["Leaf1"];
aps.cfg.multiAds["Leaf2"]=aps.cfg.allAds["Leaf2"];
aps.cfg.multiAds["Leaf3"]=aps.cfg.allAds["Leaf3"];
aps.cfg.multiAds["Leaf4"]=aps.cfg.allAds["Leaf4"];
aps.cfg.multiAds["MAD"]=aps.cfg.allAds["MAD"]
}}aps.registerEvent(aps.event.on_ad_definition_loaded,function(){if(!aps.cfg.serveAds){return
}aps.cfg.multi.createMultiAds();
Object.entries(aps.cfg.multiAds).forEach(function(d){if((!aps.cfg.juiceDirect&&!aps.cfg.juiceCustom)||aps.cfg.adMap.includes(d[0])){if(aps.cfg.ads[d[0]]){aps.cfg.bid.prefetch.checkMultiAd(aps.cfg.ads[d[0]])
}}});
var b=["Crown","Flex1"];
var c=aps.cfg.adMap.filter(function(d){return !b.includes(d)
});
var a=aps.cfg.adMap.filter(function(d){return b.includes(d)
});
aps.cfg.adMap=a.concat(c);
aps.cfg.adMap.forEach(function(e){var d=aps.cfg.ads[e];
if(!d){aps.logInfo(e+" not found!");
aps.cfg.adMap=aps.cfg.adMap.filter(function(f){return f!=e
});
return
}d.checkForInclude={addAdSlot:false,stop:false};
aps.fireEvent(aps.event.on_check_include_ad,d);
if(!d.checkForInclude.stop){d.checkForInclude.addAdSlot=true
}if(d.checkForInclude.addAdSlot){aps.cfg.queuedAds.push(e)
}})
});
aps.registerEvent(aps.event.on_render_ad,function(a){if(!aps.cfg.bid.enabled){return
}aps.cfg.bid.prefetch.checkMultiAd(a.ad)
});
aps.cfg.multi.createMultiAds=function(){Object.entries(aps.cfg.multiAds).forEach(function(b){baseAd=aps.cfg.multiAds[b[0]];
if((!aps.cfg.juiceDirect&&!aps.cfg.JuiceCustom)||aps.cfg.adMap.includes(b[0])){var a=aps.cfg.ads[baseAd.code]||new aps.o.gamAd(baseAd.code,baseAd.width,baseAd.height,baseAd.sizeMappings);
aps.cfg.multi.availableTypes[baseAd.code]=a;
if(aps.cfg.is.leafsSite){}}})
};
aps.cloneAdMulti=function(c){if(aps.cfg.ads[c]){return
}var a=c.split("-")[0];
var b=aps.cfg.ads[a];
if(b.code==undefined){return
}var d=new aps.o.gamAd(c,b.width,b.height,b.sizeMappings);
d.batchRequest=""
};
aps.showLIST=function(b){if((JSON.stringify(b)=="[null]"||JSON.stringify(b)=="[]")&&!aps.cfg.dfp.isWaiting){aps.fn.logInfo("showLIST: Called with empty array");
return
}aps.cfg.multi.enabled=true;
var a=[];
b.forEach(function(f){var e="";
var g=f.id.split("-");
var d=true;
if(g.length==1){aps.fn.logInfo("showLIST: Base ad "+g[0]+" won't be re-created");
d=false
}e=g[0];
if(aps.cfg.multi.availableTypes[e]==undefined){aps.fn.logInfo("showLIST: This type of LIST ad is not supported");
d=false
}if(d){var c=aps.cfg.ads[f.id];
if(!c){aps.cloneAdMulti(f.id);
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads[f.id]);
c=aps.cfg.ads[f.id]
}if(!c.div){c.div=f;
aps.fireEvent(aps.event.on_new_div,f)
}a.push(f.id)
}});
aps.cfg.lazyLoadingForced=aps.cfg.lazyLoadingForced||false;
if(aps.cfg.lazyLoadingForced||(b.length>5&&aps.cfg.queuedAds.length>0)){if(!aps.cfg.lazyLoadingForced){aps.cfg.ivm.options.rootMargin="1000px 0px 200px 0px";
aps.cfg.ivm.options.delayBeforeDelete=3000;
aps.cfg.lazyLoadingForced=true;
aps.fn.logInfo("showLIST: LazyLoading of ads forced");
aps.fn.logInfo("*IVM* delayBeforeDelete : 3000");
aps.fn.logInfo("*IVM* rootMargin : 400px");
aps.cfg.bid.prefetch.allBidsOnRefresh=false;
aps.cfg.bid.prefetch.delay=3000;
aps.cfg.bid.excludedBidders=[];
if(aps.cfg.bid.excludedBidders.length>0){aps.cfg.bid.excludedBids.push(["aps.cfg.bid.excludedBidders.includes(bidder)","triplelift excluded, too many ads"]);
aps.cfg.bid.pb.bidders=aps.cfg.bid.pb.bidders.filter(function(c){return !aps.cfg.bid.excludedBidders.includes(c)
});
aps.cfg.bid.pb.biddersCount=aps.cfg.bid.pb.bidders.length;
aps.cfg.bid.excludedBidders.forEach(function(c){aps.cfg.bid.pb.data[c]={extra:aps.cfg.bid.pb.data[c].extra}
});
Object.entries(aps.cfg.ads).forEach(function(c){c[1].pb.bids=c[1].pb.bids.filter(function(d){return !aps.cfg.bid.excludedBidders.includes(d.bidder)
})
})
}}aps.fn.logInfo("showLIST: Ready MULTI slots: "+a)
}else{aps.fn.logInfo("showLIST: Calling MULTI slots: "+a);
a.forEach(function(c){aps.cfg.queuedAds.push(c)
})
}setTimeout(aps.fn.waitToCallGAM,200)
}
})();(function(){if(aps.cfg.is.wcm){aps.fn.logInfo("IVM Enabling In-View ad Management");
aps.cfg.ivm={observed:[],observer:null,delayBeforeDelete:5000,options:{root:null,rootMargin:"200px 0px 200px 0px",thresholds:0,},appendToObserver:function(a){if(!a){return
}if(!aps.cfg.ivm.observed.includes(a.id)){aps.cfg.ivm.observed.push(a.id);
aps.cfg.ivm.observer.observe(a);
aps.logInfo("*IVM* observing "+a.id)
}},callback:function(a){a.forEach(function(c){var b=aps.cfg.ads[c.target.id];
if(b.div==null){b.div=document.getElementById(b.code)
}b.div.dataset.inview=c.isIntersecting;
if(b.doNotRefresh){return
}if(c.isIntersecting){aps.fn.tagAd(b);
aps.fn.logInfo("*IVM* "+b.code+" in view");
if(b.state=="toDelete"){b.state="displayed"
}else{if(b.state==null&&aps.cfg.lazyLoadingForced){b.state="firstLoad";
aps.fn.logInfo("*IVM* "+b.code+" loading");
b.impressionViewable=true;
hearstRefreshAds([b.code])
}else{if(b.state=="deleted"){b.state="reloading";
aps.fn.logInfo("*IVM* "+b.code+" reloading");
b.impressionViewable=true;
hearstRefreshAds([b.code])
}}}}else{if(b.renderCount>1){aps.fn.logInfo("*IVM* "+b.code+" out of view");
b.state="toDelete";
b.ivm=new Date().valueOf()
}}})
}};
aps.cfg.ivm.observer=new IntersectionObserver(aps.cfg.ivm.callback,aps.cfg.ivm.options);
aps.registerEvent(aps.event.on_before_request_ads,function(a){a.ads.forEach(function(c){var b=document.getElementById(c);
aps.cfg.ivm.appendToObserver(b)
})
});
aps.registerEvent(aps.event.on_new_div,function(a){aps.cfg.ivm.appendToObserver(a)
});
aps.registerEvent(aps.event.on_timer,function(b){var a=new Date().valueOf()-aps.cfg.ivm.delayBeforeDelete;
Object.entries(aps.cfg.ads).forEach(function(e){var c=e[1];
if(c.state!="toDelete"){return
}if(c.ivm<a&&!c.doNotRefresh){c.state="deleted";
c.advertiserId=null;
c.advertiser=null;
var d=document.getElementById(c.code);
d.style.minHeight=d.clientHeight+"px";
d.innerHTML="";
aps.fn.logInfo("*IVM* "+c.code+" deleted")
}})
})
}})();(function(){aps.fn.setPerformanceMetrics("GoogleLoadingStart","loading google");
aps.fn.insertScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js",true,"text/javascript","gdfp");
googletag.cmd.push(function(){aps.fn.setPerformanceMetrics("GoogleLoaded","google ready");
googletag.pubads().collapseEmptyDivs(false);
googletag.pubads().enableSingleRequest();
googletag.pubads().disableInitialLoad();
googletag.pubads().setPrivacySettings({childDirectedTreatment:false});
googletag.enableServices();
try{var d=JSON.parse(GetCookie("location_data"));
if(d.is_eu){aps.cfg.disablePersonalisation=true
}}catch(a){}if(aps.cfg.disablePersonalisation){aps.fn.logInfo("disabling personalizedAds");
googletag.pubads().setRequestNonPersonalizedAds(1)
}var f="; "+document.cookie;
var e=f.split("; BCSessionID=");
if(e.length==2){var c=e.pop().split(";").shift();
var b=aps.codec.hex.fromBits(aps.hash.sha256.hash(c));
aps.fn.logInfo("PublisherProvidedId: "+c+" hash: "+b);
googletag.pubads().setPublisherProvidedId(b)
}else{aps.fn.logInfo("PublisherProvidedId: BCSessionID not detected")
}googletag.pubads().addEventListener("slotRenderEnded",function(g){if(typeof g.slot.getSlotId!="undefined"){if(typeof g.slot.getSlotId().getDomId!="undefined"){aps.fn.onRender(g)
}}});
googletag.pubads().addEventListener("impressionViewable",function(i){if(typeof i.slot.getSlotId!="undefined"){var h=i.slot.getSlotId().getDomId();
if(typeof(h)!="undefined"){aps.fn.setPerformanceMetrics("FirstAdViewable","*VIEW "+h);
var g=aps.cfg.ads[h];
if(g){g.impressionViewable=true
}}}})
});
window.hearstGetVideoAdTagSize=function(a){var e="";
if(a.sizeMappings!=undefined&&a.sizeMappings.length>0){var d=[];
for(var c=0;
c<a.sizeMappings.length;
c++){var b=a.sizeMappings[c].split("x");
if(parseInt(b[1],10)>1&&parseInt(b[2],10)>4){d.push(parseInt(b[1],10)+"x"+parseInt(b[2],10))
}}e="?sz="+d.join("%7C")
}else{e="?sz="+encodeURIComponent(a.width+"x"+a.height)
}return e
};
window.hearstGetVideoAdTag=function(b){if(aps.cfg.videoAdTag==null){aps.cfg.videoAdTag={width:1,height:4,code:"Video_MOS",rm:false,interstitial:false,sizeMappings:["001x400x300","001x640x360","001x640x480","001x001x004"],video:true,companion_units:null,kvps:[],}
}var a=aps.cfg.videoAdTag;
if(typeof(a)=="undefined"){aps.fn.logInfo("hearstGetVideoAdTag called with non-defined ad slot "+b+" : ignoring ");
return null
}if(a.video==false){aps.fn.logInfo("hearstGetVideoAdTag called non video defined ad slot "+b);
return null
}var f=hearstGetVideoAdTagSize(a);
var g="https://pubads.g.doubleclick.net/gampad/ads";
g+=f;
g+="&iu=/"+encodeURIComponent(aps.cfg.networkCode+"/"+aps.cfg.page.current.adUnit);
g+="&url="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
g+="&impl=s";
g+="&gdfp_req=1";
g+="&env=vp";
g+="&output=xml_vast3";
g+="&page_type="+aps.cfg.page.current.page_type2;
g+="&unviewed_position_start=1";
g+="&description_url="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
g+="&vpos=preroll";
g+="&ad_safe=medium";
if(a.companion_units!=null&&a.companion_units!=""){g+="&ciu_szs="+encodeURIComponent(a.companion_units)
}else{g+="&ciu_szs="
}var c="";
c+="distributor_domain=";
if(aps.cfg.page.current.domain.indexOf("m.")==0){c+=aps.cfg.page.current.domain.substr(2)
}else{c+=aps.cfg.page.current.domain
}c+="&page_type2="+aps.cfg.page.current.page_type2;
c+="&pageurl="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
c+="&referrer="+encodeURIComponent(document.referrer);
c+="&urlhash="+aps.cfg.juiceMdUrlHash;
c+="&pw=__player-width__&ph=__player-height__";
c+=(aps.cfg.vid.tagUrl=="")?"":"&"+aps.cfg.vid.tagUrl;
for(var d=0;
d<aps.cfg.page.kvps.length;
d++){var e=aps.cfg.page.kvps[d];
c+="&"+e.key+"="+e.value
}for(var d=0;
d<aps.cfg.page.current.kvps.length;
d++){var e=aps.cfg.page.current.kvps[d];
c+="&"+e.key+"="+e.value
}for(var d=0;
d<a.kvps.length;
d++){var e=a.kvps[d];
c+="&"+e.key+"="+e.value
}aps.cfg.adtest[a.code]=aps.cfg.adtest[a.code]||[];
for(var d=0;
d<aps.cfg.adtest[a.code].length;
d++){var e=aps.cfg.adtest[a.code][d];
c+="&"+e.key+"="+e.value
}if(c.length>0){g+="&cust_params="+encodeURIComponent(c)
}g+="&correlator="+new Date().getTime();
aps.fn.logInfo("hearstGetVideoAdTag:"+g);
return g
};
window.defineTags=function(){};
window.hearstPlaceAd=function(b){var a=aps.cfg.ads[b];
var c=document.getElementById(b);
if(c&&a&&a.div==null){aps.fireEvent(aps.event.on_new_div,c)
}aps.fn.logInfo("hearstPlaceAd "+b)
};
window.hearstRefreshAds=function(){var c=[];
var a=[];
if(arguments.length==1){a=arguments[0]
}else{Object.entries(aps.cfg.ads).map(function(d){if(!d[1].exclude&&d[1].refreshable&&!d[1].doNotRefresh){a.push(d[0])
}})
}if(arguments.length==0){aps.fn.logInfo("hearstRefreshAds called : (all refreshable slots) "+a.join(", "))
}else{aps.fn.logInfo("hearstRefreshAds called : "+a)
}var b=(aps.cfg.ivm&&arguments.length==1)?false:true;
if(debugSGA){b=false
}if(b&&!document.hasFocus()){aps.fn.logInfo("hearstRefreshAds: Tab does not have focus - skipped");
return
}a.forEach(function(e){var d=aps.cfg.ads[e];
if(d.state=="firstLoad"){aps.fn.logInfo("hearstRefreshAds: first load of "+d.code);
d.state="displayed";
c.push(d.code)
}else{if(d.doNotRefresh){aps.fn.logSkip(d.code,"DoNotRefresh")
}else{if(aps.cfg.dfp.celtraAds.indexOf(d.code)>-1){aps.fn.logSkip(d.code,"Celtra ad")
}else{if(!aps.cfg.is.leafsSite&&d.isLoading==true){aps.fn.logSkip(d.code,"Last request not completed")
}else{if(!aps.cfg.is.leafsSite&&!d.refreshable){aps.fn.logSkip(d.code,"Not refreshable")
}else{if(!aps.cfg.is.leafsSite&&d.renderCount<=1){aps.fn.logSkip(d.code,"Not rendered")
}else{if(!aps.cfg.is.leafsSite&&aps.cfg.refreshViewableOnly&&!d.impressionViewable){aps.fn.logSkip(d.code,"Not viewable")
}else{if(d.code=="Crown"){aps.fn.logSkip(d.code,"Not refreshing Crown");
d.exclude=true
}else{if(aps.page_type2=="article"&&["www.expressnews.com","www.houstonchronicle.com","www.sfchronicle.com"].includes(document.location.hostname)&&((current_device==devices.MOBILE&&d.code!="MAD")||(!["A300","B300","S300"].includes(d.code)&&!d.code.startsWith("rb")))){aps.fn.logSkip(d.code,"hearstRefreshAds: not refreshing masthead ads on premium site ");
d.exclude=true
}else{if(aps.cfg.ivm&&d.div.dataset.inview=="false"){aps.fn.logSkip(d.code,"only refreshing in view ads")
}else{aps.fn.logInfo("hearstRefreshAds: refreshing "+d.code);
c.push(d.code)
}}}}}}}}}}});
if(c.length<=0){aps.fn.logInfo("hearstRefreshAds: No ads are in refreshable state - skipping refresh");
return
}aps.fn.logInfo("hearstRefreshAds: refreshing ad slots "+c);
aps.cfg.queuedAds=aps.cfg.queuedAds.concat(c);
aps.fn.requestAds()
};
window.hearstRefreshInterstitialAds=function(a){var b=[];
if(!Array.isArray(a)){a=[a]
}aps.fn.logInfo("hearstRefreshInterstitialAds called: "+a.join(", "));
a.forEach(function(d){var c=aps.cfg.ads[d];
if(d=="EEinsert"){if(!aps.cfg.ads["EEinsert"]){aps.logInfo("EEinsert not defined")
}else{b.push(d)
}return
}if(!c){aps.fn.logSkip(d+" not defined");
return
}if(!c.interstitial){aps.fn.logSkip(c.code+" not an interstitial ad");
return
}if(c.isLoading==true&&c.code!="EEinsert"){aps.fn.logInfo("skipping refresh of "+c.code+" .  It has not completed last request.");
return
}if(aps.cfg.refreshViewableOnly&&!c.impressionViewable&&c.code!="EEinsert"){aps.fn.logInfo("skipping refresh of interstitial "+c.code+" .  It is not viewable.")
}else{aps.fn.logInfo("hearstRefreshAds: refreshing "+c.code);
b.push(c.code)
}});
if(b.length<=0){aps.fn.logInfo("hearstRefreshAds: No ads are in refreshable state - skipping refresh");
return
}aps.fn.logInfo("hearstRefreshAds: refreshing ad slots "+b);
aps.cfg.queuedAds=aps.cfg.queuedAds.concat(b);
aps.fn.requestAds()
};
aps.fn.contentLoaded(window,aps.fn.domLoaded)
})();(function(){aps.cfg.page=new aps.o.base();
aps.fn.getPageInfo=function(b,a){var b=b||aps.fn.getFilteredHref(document.location.href);
var e=aps.cfg.page;
if(!e.urls.includes(b)){var d=new aps.o.page(b,[],a);
e.allPages.push(d);
e.urls.push(b);
if(!e.current){e.current=d;
e.currentIndex=0;
aps.logInfo("Changing current URL to "+b);
aps.cfg.current_domain=e.current.domain
}else{e.next=d;
if(aps.cfg.is.wcm){if(!e.next.scrollDepth){e.next.scrollDepth=aps.cfg.page.urls.length-1
}}if(aps.cfg.is.leafsSite){e.next.scrollDepth=aps.cfg.page.urls.length-1
}}}else{var c=e.urls.indexOf(b);
e.currentIndex=c;
e.current=e.allPages[c]
}};
aps.fn.getPageInfo();
JuicePageUrl=aps.cfg.page.current.href.replace("/?","?");
if(aps.cfg.page.current.domain=="ctinsider.com"){aps.cfg.page.addBaseKvp("sect","ctinsider")
}aps.cfg.abtestvar=window.HDN&&HDN.dataLayer&&HDN.dataLayer.abtest&&HDN.dataLayer.abtest.experimentId||aps.abtest||aps.npabtest||[];
if(aps.cfg.abtestvar.length>0){aps.fn.logInfo("npabtest : "+aps.cfg.abtestvar);
aps.cfg.abtestvar.forEach(function(a){aps.cfg.page.addBaseKvp("ab",a)
})
}else{aps.fn.logInfo("npabtest not detected.")
}aps.cfg.page.addBaseKvp("v",aps.cfg.version)
})();(function(){if(!aps.cfg.bid.enabled){return
}aps.cfg.bid.prefetch={enabled:true,delay:2000,allBidsOnRefresh:true,que:[],refreshTimeout:2500,timeout:2500,timeoutPadding:10*1000,multiAdsToPrefetch:4,version:1.4,a9:{adUnits:[],enabled:true,},pb:{adUnits:[],bidCount:[],biddersDone:[],calledBidders:[],clientSideBidders:[],enabled:true,},checkMultiAd:function(a){if(!a.multiAd||aps.cfg.infiniteScroll){return
}if(aps.cfg.is.wcm){var b=(parseInt(a.code.split("-")[1])+1)||1;
var c=b+aps.cfg.bid.prefetch.multiAdsToPrefetch;
if(aps.page_type2=="slideshow list view"){c=b+10
}for(var d=b;
d<c;
d++){if(!aps.cfg.ads[a.multiType+"-"+d]){var e=a.multiType+"-"+d;
aps.cloneAdMulti(e);
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads[e])
}}}},};
aps.fn.logInfo("Bid prefetching enabled");
aps.registerEvent(aps.event.on_render_ad,function(a){if(aps.cfg.bid.prefetch.timer==null&&aps.cfg.bid.bids.length<500){aps.cfg.bid.prefetch.timer=setTimeout(function(){var b=aps.cfg.bid.prefetch.que.slice();
aps.cfg.bid.prefetch.que=[];
aps.cfg.bid.prefetch.timer=null;
aps.fireEvent(aps.event.on_get_bids,b)
},aps.cfg.bid.prefetch.delay)
}})
})();(function(){if(aps.cfg.is.wcm){window.addEventListener("expectedDataForNextArticle_infiniteScroll",function(b){var a=b.detail;
var d=aps.fn.getFilteredHref(a.HDN_dataLayer_href_pageUrl);
aps.cfg.page.checkPage();
aps.fn.getPageInfo(d,a);
aps.logInfo(["New infinite scroll event: ",b.detail]);
var e=aps.cfg.adMap.filter(function(f){return aps.cfg.ads[f].multiAd
});
var c=[];
e.forEach(function(j){var f=1;
while(aps.cfg.ads[j+"-"+f]){f++
}var g=f+aps.cfg.bid.prefetch.multiAdsToPrefetch;
for(var h=f;
h<g;
h++){if(!aps.cfg.ads[j+"-"+h]){var k=j+"-"+h;
aps.cloneAdMulti(k);
c.push(k);
aps.cfg.ads[k].scrollDepth=aps.cfg.page.next.scrollDepth;
aps.cfg.ads[k].page=aps.cfg.page.next;
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads[k])
}}});
aps.fireEvent(aps.event.on_get_bids,c)
});
window.addEventListener("extraArticleInView_infiniteScroll",function(a){aps.cfg.page.checkPage();
if(aps.cfg.ads["MAD"]){aps.cfg.ads["MAD"].scrollDepth=aps.cfg.page.current.scrollDepth;
aps.cfg.ads["MAD"].isLoading=false;
googletag.destroySlots([aps.cfg.ads["MAD"].gam]);
aps.cfg.ads["MAD"].gam=null;
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads["MAD"]);
aps.cfg.queuedAds.push("MAD");
aps.fireEvent(aps.event.on_get_bids,["MAD"])
}})
}if(aps.cfg.is.leafsSite){aps.cfg.infiniteScroll=true;
window.addEventListener("leaf_next_url",function(a){var c=aps.fn.getFilteredHref(a.detail);
aps.fn.getPageInfo(c);
aps.logInfo(["New infinite scroll event: ",a.detail]);
var d=aps.cfg.adMap.filter(function(e){return typeof aps.cfg.ads[e]!="undefined"
}).filter(function(e){return aps.cfg.ads[e].multiAd
});
var b=[];
d.forEach(function(f){var e=aps.cfg.page.next.scrollDepth;
var g=f+"-"+e;
aps.cloneAdMulti(g);
b.push(g)
});
aps.fireEvent(aps.event.on_get_bids,b)
});
window.addEventListener("leaf_new_url",function(a){aps.cfg.page.checkPage();
if(aps.cfg.ads["MAD"]){aps.cfg.ads["MAD"].scrollDepth=aps.cfg.page.current.scrollDepth;
aps.cfg.ads["MAD"].isLoading=false;
if(googletag.destroySlots){googletag.destroySlots([aps.cfg.ads["MAD"].gam])
}aps.cfg.ads["MAD"].gam=null;
aps.fireEvent(aps.event.on_define_bid_data,aps.cfg.ads["MAD"]);
aps.cfg.queuedAds.push("MAD");
aps.fireEvent(aps.event.on_get_bids,["MAD"])
}})
}aps.registerEvent(aps.event.on_timer,function(a){var b=Date.now();
var c=aps.cfg.dfp.rendered.que.filter(function(d){return !d.done&&(b-d.ts)>1000
});
c.forEach(function(f){var d=aps.cfg.ads[f.code];
var e=document.getElementById(f.code);
if(e.firstChild&&e.firstChild.name&&e.firstChild.name.startsWith("google")){e=e.firstChild
}var g=e.getClientRects();
if(g.length>0){d.renderedSize=Math.round(g[0].width)+"x"+Math.round(g[0].height);
f.renderedSize=d.renderedSize;
f.advertiser=d.advertiser;
f.sizes=d.stringSizes.join(",")
}f.done=true
})
});
aps.registerEvent(aps.event.on_new_div,function(b){var a=aps.cfg.ads[b.id];
var c=0;
a.div=b;
if(aps.cfg.is.wcm){if(b.dataset&&b.dataset.scrolldepth){c=b.dataset.scrolldepth
}a.scrollDepth=c
}aps.logInfo("*DIV* New div : "+b.id+" scrollDepth: "+c)
})
})();(function(){try{var a=document.location.search.indexOf("adtest")+7;
if(a==6){return
}var c=document.location.search.indexOf(";",a);
if(c==-1){c=document.location.search.length-a
}aps.cfg.adtestparam=document.location.search.substr(a,c);
if(aps.cfg.adtestparam){aps.page_kvps=aps.page_kvps||[];
aps.cfg.adtestparam=decodeURI(aps.cfg.adtestparam).split("|");
for(var g=0;
g<aps.cfg.adtestparam.length;
g++){var d=aps.cfg.adtestparam[g];
var h=d.split(":");
var i=h[0];
var f=h[1].split("=");
if(i=="page"){aps.cfg.page.addBaseKvp(f[0],f[1])
}else{if(!aps.cfg.adtest[i]){aps.cfg.adtest[i]=[]
}aps.cfg.adtest[i].push({key:f[0],value:f[1]})
}}}}catch(b){}})();(function(){aps.cfg.dfp.lazyload={enabled:(HDN.dataLayer.ads.adMode=="lazy")||false,firstLoad:["Crown","Flex1","A300","MAD"],};
aps.placeAd=function(a){if(!aps.cfg.dfp.lazyload.enabled){aps.fn.logInfo("aps.placeAd called but lazyload is not enabled via HDN.dataLayer.ads.adMode");
return
}if((JSON.stringify(a)=="[null]"||JSON.stringify(a)=="[]")&&!aps.cfg.dfp.isWaiting){aps.fn.logInfo("aps.placeAd: Called with empty array");
return
}var d=(a.length==0||!aps.cfg.dfp.isWaiting);
var b=[];
var c=[];
a.forEach(function(e){var f=e.id;
b.push(f);
if(!aps.cfg.ads[f]){aps.fn.logSkip(f,"ad not defined - aps.placeAd");
return
}if(aps.cfg.queuedAds.includes(f)){aps.fn.logSkip(f,"ad already queued - aps.placeAd");
return
}if(aps.cfg.ads[f].renderCount>1){aps.fn.logSkip(f,"ad already displayed - aps.placeAd");
return
}c.push(f);
aps.cfg.dfp.waiting.push(f);
aps.cfg.dfp.isWaiting=true;
d=true
});
aps.fn.logInfo("aps.placeAd: called with values: "+b.join(","));
if(c.length==0){aps.fn.logInfo("aps.placeAd: No ad to proceed");
return
}aps.fn.logInfo("aps.placeAd: processing: "+c.join(","));
aps.waitStartStep("lazyload")
};
if(aps.cfg.dfp.lazyload.enabled){aps.fn.logInfo("lazyloading: enabled");
aps.registerEvent(aps.event.on_check_include_ad,function(a){var c=aps.cfg.adMap.filter(function(d){return !aps.cfg.dfp.lazyload.firstLoad.includes(d)
});
var b=aps.cfg.dfp.lazyload.firstLoad.filter(function(d){return aps.cfg.adMap.includes(d)
});
aps.cfg.adMap=b.concat(c);
aps.cfg.queuedAds=aps.cfg.queuedAds.concat(b)
})
}})();(function(){aps.cfg.dfp.batchSRA={delay:3000,enabled:(window.location.search.indexOf("batchsra=1")!==-1||document.location.hostname.toLowerCase()=="sfinsider.sfgate.com")?true:false,auto:false,waitingNext:false,hasScrolled:false,userInteractFor:1,atfFirst:true,completed:false,};
if(HDN.dataLayer.ads.adMode=="batch"){aps.cfg.dfp.batchSRA.enabled=true;
aps.logInfo("BatchSRA enabled")
}if(aps.cfg.dfp.batchSRA.enabled){aps.fn.onScroll=function(){if(!aps.cfg.dfp.batchSRA.waitingNext||aps.cfg.dfp.batchSRA.hasScrolled){return
}aps.fn.logInfo("Batch SRA : Scrolled");
aps.cfg.dfp.batchSRA.auto=true;
aps.cfg.dfp.batchSRA.hasScrolled=true;
aps.cfg.dfp.batchSRA.waitingNext=false;
aps.fn.displayNextBatch()
};
aps.fn.logInfo("Batch SRA : listening to Scroll event");
if(window.addEventListener){window.addEventListener("scroll",aps.fn.onScroll,false);
window.addEventListener("click",aps.fn.onScroll,false)
}else{if(window.attachEvent){window.attachEvent("onscroll",aps.fn.onScroll);
window.attachEvent("onclick",aps.fn.onScroll)
}}aps.registerEvent(aps.event.on_check_include_ad,function(a){a.checkForInclude.stop=true;
if(a.position=="atf"||a.position=="mad"){a.checkForInclude.addAdSlot=true
}});
aps.fn.displayNextBatch=function(){if(aps.cfg.dfp.batchSRA.completed){return
}var a=[];
Object.entries(aps.cfg.ads).map(function(c){a.push(c[0])
});
var b=[];
aps.cfg.dfp.requests.forEach(function(c){b=b.concat(c.ads)
});
a=a.filter(function(c){return !b.includes(c)
});
if(a.length>0){aps.cfg.queuedAds=aps.cfg.queuedAds.concat(a);
aps.fn.requestAds()
}aps.cfg.dfp.batchSRA.completed
}
}})();(function(){if(aps.cfg.is.leafsSite){if(document.cookie.split(";").filter(function(a){return a.indexOf("region=EU")>=0
}).length==1){aps.fn.logInfo("region EU detected, disabling personalized ads");
aps.cfg.disablePersonalisation=true;
if(document.location.href.indexOf("gdpr=true")>-1){aps.cfg.bid.enableGDPR=true
}}}else{if(document.location.href.indexOf("?is_eu=1")>-1){aps.fn.logInfo("region EU (test) detected, disabling personalized ads");
aps.cfg.disablePersonalisation=true
}}})();(function(){if(document.location.hostname.match(/((homeguides|smallbusiness|work|healthyeating|livehealthy)\.(chron|sfgate)\.com)/)){return
}var d={"beaumontenterprise.com":"75e9ad4b5f1f1f3de38dea085cc34f079b9d8243999d3b30d70a543f2c3ae813","sfgate.com":"1cbbeea35302b334c17ec7de41048b19077c3452b8825fa3017876cf49d877c2","chron.com":"b8d94fd702b39f91830ea26eb261a1dd7eb3f9d18e86f88c83f7a317f3115379","mysanantonio.com":"3c81fd9605d796d254c7bdc62001ec2c520515c7c306b66b713a4421f7343766","seattlepi.com":"a3e9f57e66bb33f8f8995e6866a7eace83bca9720ee52bb2d8ab18fb8dddae94","sfchronicle.com":"a5e03e178aaf9b41b3fc69428362339bd7ba9a606118acee43f6169a1f7f9847","houstonchronicle.com":"48a6940997d234b7add9af8ed2b41694654edaeb6e7b5827579702d25182700b","expressnews.com":"d65ba7cd6a96847162fb556c3a5dc7b7e66de309481ec4e558b4e9dc40515858","timesunion.com":"f999472effec7a1ef427ab8ed55df47b4d250f60f376ce71f7293b353026f514","ctpost.com":"1118fad26ca4bcdf2a99fdee52724e3c512a258c149cbd8e6c4084c13040e86a","stamfordadvocate.com":"2df4f16391dbd310915a08bd62897dde4902fe30a7c29dcb2b80ba04345df633","nhregister.com":"2370d2dc32ab1b0d0894de8f024e2764a55756c723edb12fa7d7b6b221922fba","newstimes.com":"68fab42777221c69e8d127d9ba7a8b29e0ba95aae66e6166eb070c330ac04c0f","greenwichtime.com":"4a6fb4d137bab5bdc207d09d4b1acfc191dbad1e9e0e3190ca676d3730195d06","thehour.com":"049118934d099a757a2987317f05327a8ccd5a7c1501feaf8e4639fadbdb8936","ctinsider.com":"21b81f81bd7fa576db043ec887848073bbc6eafc46d9f8bec5240163093e2d46","registercitizen.com":"3377ba9d7d5061bf618f4ae6d3900e0067f913f99748fc366b7cb1542e6a96b2","middletownpress.com":"4f1f32e75691195dd027c417eed6c56d8a37e7ed729eb57c8ecd8abf8d5f420b","thetelegraph.com":"bf557221a53f15d39c7bce3aeed56dd6c13e57b3eba48f8e4fd2d54af42f0122","ourmidland.com":"37af6c3aa88542ced759eb5a9c478617d1b50eeae32789a669e3facca42eb56a","myjournalcourier.com":"5497becf77524b62bee5a589030b1e2163d34a60b7d960cdc976afc12b64d623","michigansthumb.com":"601647fe4d84d12a565e709dc7e944d38db91923d65d9bb6865788234f41893d","theintelligencer.com":"aadf36ee0d8d0f2765013057eb1bad1a552f9377dfc4b532d9b698df9a655884","manisteenews.com":"a2031afbd2e08a959fa777db882a99b7cc56d1dbff61d9d2d56c20a89c6d8b7e","bigrapidsnews.com":"7c907dba0dac340d4f0b3879a3d1699f0bf19e2a95b06945aa3b31cfde002c09","recordpatriot.com":"d4c71cee77592309f10e62ab4ce1a4d995719a82a77932eee5fc18a7948e2f41","lakecountystar.com":"2a7c7fb608092db498480edf2068123ffcd679d5ce9e8819760338386e1350e4","theheraldreview.com":"1655d53ab46f5391a09e189a8cf86f8e22098886ea6a2ae727b112087a05cbd0","yourconroenews.com":"aa3912f9cfd7f1fafd025dbd846d2383acce1b3574061b2c9508d43d5cc653da","lmtonline.com":"ffd0921bb88989b2dc6bac92611425966d93e8be7cf154e95fd27ae95db26375","mrt.com":"08621a723e4a1cd4ba4c25f46ce953173b9b3cffad4ec0bfb9b0e5d22bc22bc8","myplainview.com":"b49696bc422c346e4f4282e32cfc324d782f32b9c9d0fec6751d29dc0862bf61","theridgefieldpress.com":"053f373cd281b81bb04913797ec13da4438c7cc4596fc29e382ce5a1a93ce32d","westport-news.com":"55e354cf58c712583585324c15d758cd2b9801c0ce839fb6020d8835a63c0502","ncadvertiser.com":"eaff3ad2730aea1b010a2434dad485aef8e1a473f8977f048e5888c27a0a8b15","fairfieldcitizenonline.com":"ddbcce19fd54ba6f20d8e3bedb35cfea7887e9579c34d38307b3f3fa3f659ab0","wiltonbulletin.com":"7ef8a69225bec566b6a15690bd94081ed7898400ff9a8c68ac05ee924c2c2ce3","darientimes.com":"f0790e5c63dd390570f98d8b20ad18ee2666f8184dc03434de1c60fb823ff71c","trumbulltimes.com":"909616d5d05133cda02800bf40834036448deeea436efebe0d39fcb3f3f4bec8","sheltonherald.com":"2ea54058f6365a6a2bcb4ecda879ff406900d5b274c1e1ed6e2f0e746ad5068f","milfordmirror.com":"0f7190eb184e8a5af5171a9ea07a792b5a193725ebdb8a2c55a30ff187802fef","newmilfordspectrum.com":"34fda7a5dec281cc4ac526c9c1609ee8a6223ae799760c638c3b92d86751b2c5","southeasttexas.com":"1ca0a738d5cf7bb8ce1434d5522573d7f6894098e4706151b2882420b6bb6c62","gametimect.com":"c5a3ed040f3b98d6d9877a09dc7f00f3ba126d6f10836272b84a07be9ced5df7","connecticutmag.com":"6daa3d7e6b8778d504883db9545f72adfc4df9ba624ae5ac79af0dda7e1f98a3","shorelinetimes.com":"91a7025281ac9294e20e8cdd7b9c5d6414f44d887193db48097942a2404a9d1d","countytimes.com":"26a8bb30dec1f24c1e7bd51988a30cdaf1a32c615057fa4a092fedd8d19b6005","westhartfordnews.com":"5de2ce5445b39d5609215833a7fa6410f027135902d458f6751d115c11c33634","dolphin-news.com":"041a5d17decdae44358ae2eca8065b501b5a4936882e2188a3d41470b64eb47d","ctpostchronicle.com":"645700f07ec80b72131b2a6fc97f8f43da5820ce68bd559b0b507dfdf08f9f6a","ctbulletin.com":"26a8bb30dec1f24c1e7bd51988a30cdaf1a32c615057fa4a092fedd8d19b6005","greenstate.com":"412163cc8d602f027626c2ffab24515bd8f6ff426d0d4096330b64d8e7681e03","canyonnews.com":"593c0a648b760954871854fb60be6dfc252fd7387de8bcb568ebf2cd5449f3d8","sellitlaredo.com":"a86e9a199fadcfd738a0fa46b3fa9381cbb92bdc9b7a75b7fa222e143eaac6b9",};
var b=d[aps.cfg.current_domain]||"";
if(b!=""){aps.fn.logInfo("The Media Trust: Loading");
var a=document.getElementsByTagName("script")[0];
var c=document.createElement("script");
c.async=1;
c.src="https://scripts.webcontentassessor.com/scripts/"+b;
a.parentNode.insertBefore(c,a)
}})();(function(){aps.fn.onRender=function(d){var i={};
var j=d.slot||null;
i.slot=j;
i.divid=j.getSlotElementId();
i.ad=aps.cfg.ads[i.divid];
if(i.divid&&i.divid.startsWith("browsi")){return
}if(i.ad){i.targetingMap=j.getTargetingMap();
i.responseInfo=j.getResponseInformation();
i.emptyAd=d.isEmpty;
i.adsize=d.size||null;
i.request=aps.cfg.dfp.requests[i.targetingMap.i];
i.bidInfo="";
j.currentBids=j.currentBids||[];
i.originalBid=(j.currentBids.length>0)?JSON.parse(JSON.stringify(j.currentBids[0])):null;
i.winningBid=null;
i.lineitemId=d.lineItemId||null;
if(i.lineitemId==null&&i.responseInfo){if(i.responseInfo.lineItemId==null&&i.responseInfo.yieldGroupIds!=null){i.lineitemId=i.responseInfo.yieldGroupIds[0]
}}i.ad.state=(i.emptyAd)?"empty":"displayed";
i.ad.renderCount++;
i.ad.isLoading=false;
i.ad.refreshable=true;
i.ad.advertiserId=d.advertiserId;
i.ad.size=i.adsize;
i.ad.lineItemId=d.lineitemId;
i.ad.creativeId=d.creativeId;
i.ad.isEmpty=i.emptyAd;
i.html="";
if(i.ad.creativeId){i.html=j.getHtml()
}i.adType="banner";
if(i.targetingMap.hb_format){i.adType=i.targetingMap.hb_format[0]
}if(i.adType=="native"&&i.html.indexOf("pbNativeTagData")==-1){i.adType="banner"
}var b=i.ad.kvps.filter(function(e){return(e.key=="custom")
});
var f=(b.length>0&&b[0].value.includes("blank_refresh"))||false;
if(i.emptyAd){if(!["Crown","LNLogo","EEinsert"].includes(i.divid)&&!f){i.ad.addAdKvp("custom","blank_refresh");
aps.cfg.queuedAds.push(i.divid);
aps.fn.logInfo("*BLANK* "+i.divid+" - blank ad served. Refreshing");
aps.fn.requestAds()
}if(f&&i.divid.dataset&&i.divid.dataset.slug=="Advertisement"){aps.fn.logInfo(i.divid+" - slot empty: hiding div");
i.divid.style.display="none"
}}i.advertiser=(i.responseInfo&&i.responseInfo.advertiserId!=null)?"Direct Ad":"No Ad";
if(i.advertiser!="No Ad"){if(aps.cfg.advertisers[i.responseInfo.advertiserId]){i.advertiser=aps.cfg.advertisers[i.responseInfo.advertiserId]
}if(d.yieldGroupIds!=null){i.advertiser="exb/"+i.advertiser;
try{if(typeof(companyIds[0])!="undefined"){i.advertiser="ExB/"+aps.cfg.advertisers[companyIds[0]]
}}catch(c){}}}if(aps.cfg.infoDivDisplaying==i.ad.code){aps.fn.setAdDetails(i.ad.code)
}var k=null;
var g=i.html.match(/renderAd\(document, \'(.*)\'/g);
var a=i.html.match(/renderImp\(document,"(.*)"/g);
var h=i.html.match(/CustomEvent\(\'publicgood\'/g);
if(g||a||h){k=j.currentBid;
k.won=true
}else{if(j.currentBid){j.currentBid.sent=false
}}if(k){i.bidInfo=" bid: "+k.adId.slice(-7);
if(j.aps.optimized){i.bidInfo=i.bidInfo+" [OPT] +"+j.aps.increase;
ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_optimized_v"+aps.cfg.bid.prefetch.version,eventAction:document.location.hostname,eventLabel:j.aps.increase})
}i.winningBid=JSON.parse(JSON.stringify(k));
aps.cfg.bid.prefetch.que.push(i.divid);
i.advertiser=k.source+"/"+k.bidder
}i.ad.advertiser=i.advertiser;
i.ad.render=i;
i.request.renders.push(i);
aps.fireEvent(aps.event.on_render_ad,i);
aps.fn.tagAd(i.ad);
aps.fn.logInfo("*IMP* "+aps.fn.fixLen(i.ad.code,10)+" "+aps.fn.fixLen(i.advertiser,14)+" lineitem: "+aps.fn.fixLen(i.lineitemId,12)+i.bidInfo)
}};
aps.registerEvent(aps.event.on_render_ad,function(c){if(c.ad.advertiserId==4594233306){var a=document.getElementById(c.ad.code).firstChild;
var b=a.style.cssText||"";
b=(b=="")?"flex-grow:1":"flex-grow:1; "+b;
a.setAttribute("style",b)
}});
aps.registerEvent(aps.event.on_render_ad,function(a){if(a.html.indexOf("HNP-RM-NoRefresh")>-1){aps.fn.logInfo(a.ad.code+": NoRefresh detected");
a.ad.refreshable=false;
a.ad.doNotRefresh=true
}});
aps.registerEvent(aps.event.on_render_ad,function(c){if(aps.cfg.preventCeltraAdsToRefresh){if(c.html.indexOf("celtra")>-1){var a=c.ad;
if(aps.cfg.dfp.celtraAds.indexOf(a.code)==-1){aps.cfg.dfp.celtraAds.push(a.code);
aps.fn.logInfo(a.code+": Celtra ad detected")
}c.ad.refreshable=false;
c.ad.doNotRefresh=true;
if(c.ad.code=="Crown"||c.ad.code=="Flex1"){if(aps.fn.getQueryParameterByName("plainceltra")==null){aps.cfg.dfp.celtra.preventMonitorIframe=aps.cfg.dfp.celtra.preventMonitorIframe||false;
aps.cfg.dfp.celtra.checkMonitorIframe=aps.cfg.dfp.celtra.checkMonitorIframe||false;
if(!aps.cfg.dfp.celtra.checkMonitorIframe){aps.cfg.dfp.celtra.checkMonitorIframe=true;
aps.page.kvps.forEach(function(d){if(d.key=="testpage"&&d.value=="NYC_AdTech_CeltraViewTest"){aps.cfg.dfp.celtra.preventMonitorIframe=true
}})
}if(aps.cfg.dfp.celtra.preventMonitorIframe){aps.fn.logInfo("Not loading CeltraIframeFix");
return
}aps.cfg.dfp.celtra.divs=aps.cfg.dfp.celtra.divs||[];
aps.cfg.dfp.celtra.monitorIframe=aps.cfg.dfp.celtra.monitorIframe||false;
var b=document.getElementById("google_ads_iframe_"+event.slot.getSlotId().getId());
aps.cfg.dfp.celtra.divs.push(b);
if(!aps.cfg.dfp.celtra.monitorIframe){aps.cfg.dfp.celtra.monitorIframe=true;
b.addEventListener("load",function(d){aps.fn.monitofCeltraIframe(0)
})
}}if(aps.cfg.dfp.celtraAds.indexOf("Flex1")==-1){aps.cfg.dfp.celtraAds.push("Flex1");
aps.fn.logInfo("Flex1 also disabled (Celtra on Crown)")
}if(aps.cfg.dfp.celtraAds.indexOf("Crown")==-1){aps.cfg.dfp.celtraAds.push("Crown");
aps.fn.logInfo("Crown also disabled (Celtra on Flex1)")
}}}}});
aps.registerEvent(aps.event.on_render_ad,function(b){if(b.divid=="MAD"){if(event.size&&(event.size[0]!=320||event.size[1]!=50)){aps.fn.logInfo("Fixing: MAD having wrong size: "+event.size);
var a=document.getElementById("MAD").firstChild;
a.style.width="320px";
a.style.height="50px"
}aps.cfg.ads["MAD"].impressionTimer=aps.cfg.ads["MAD"].impressionTimer||null;
if(aps.cfg.ads["MAD"].impressionTimer==null){aps.cfg.ads["MAD"].impressionTimer=setTimeout(function(){aps.fn.logInfo("Forcing MAD viewability");
aps.cfg.ads["MAD"].impressionTimer=null;
aps.cfg.ads["MAD"].impressionViewable=true
},30000)
}}})
})();(function(){var a=document.createElement("script");
a.src="https://z.moatads.com/hearstnewsprebidheader515009925453/moatheader.js";
a.setAttribute("id","moat-tag");
document.getElementsByTagName("head")[0].appendChild(a);
window.moatYieldReady=function(){aps.cfg.dfp.moatYieldReady=true;
window.moatPrebidApi.enableLogging()
};
aps.registerEvent(aps.event.on_before_request_ads,function(c){aps.fn.logInfo("setMoatPrebidData");
if(window.moatPrebidApi&&typeof window.moatPrebidApi.enableLogging==="function"){window.moatPrebidApi.enableLogging()
}if(window.moatPrebidApi&&typeof window.moatPrebidApi.pageDataAvailable==="function"&&window.moatPrebidApi.pageDataAvailable()){var b=window.moatPrebidApi.getMoatTargetingForPage();
Object.entries(b).forEach(function(d){var f=d[1];
if(aps.cfg.logToConsole){if(d[0]=="m_data"){f="0";
aps.fn.logInfo("Overwrite moat info "+d[0]+"="+f)
}else{if(Array.isArray(f)){var e=[];
f.forEach(function(g){e.push(g.replace("unsafe","safe"))
});
f=e
}else{f=f.replace("unsafe","safe")
}aps.fn.logInfo("Overwrite moat info "+d[0]+"="+f)
}}c.page.addPageKvp(d[0],f,true)
})
}})
})();(function(){})();(function(){aps.hash=aps.hash||{};
aps.codec=aps.codec||{};
aps.bitArray={bitSlice:function(b,d,c){b=aps.bitArray._shiftRight(b.slice(d/32),32-(d&31)).slice(1);
return(c===undefined)?b:aps.bitArray.clamp(b,c-d)
},extract:function(b,d,c){var f,e=Math.floor((-d-c)&31);
if((d+c-1^d)&-32){f=(b[d/32|0]<<(32-e))^(b[d/32+1|0]>>>e)
}else{f=b[d/32|0]>>>e
}return f&((1<<c)-1)
},concat:function(a,b){if(a.length===0||b.length===0){return a.concat(b)
}var c=a[a.length-1],d=aps.bitArray.getPartial(c);
if(d===32){return a.concat(b)
}else{return aps.bitArray._shiftRight(b,d,c|0,a.slice(0,a.length-1))
}},bitLength:function(b){var c=b.length,d;
if(c===0){return 0
}d=b[c-1];
return(c-1)*32+aps.bitArray.getPartial(d)
},clamp:function(b,d){if(b.length*32<d){return b
}b=b.slice(0,Math.ceil(d/32));
var c=b.length;
d=d&31;
if(c>0&&d){b[c-1]=aps.bitArray.partial(d,b[c-1]&2147483648>>(d-1),1)
}return b
},partial:function(b,c,a){if(b===32){return c
}return(a?c|0:c<<(32-b))+b*1099511627776
},getPartial:function(a){return Math.round(a/1099511627776)||32
},equal:function(c,d){if(aps.bitArray.bitLength(c)!==aps.bitArray.bitLength(d)){return false
}var f=0,e;
for(e=0;
e<c.length;
e++){f|=c[e]^d[e]
}return(f===0)
},_shiftRight:function(b,g,c,f){var d,e=0,h;
if(f===undefined){f=[]
}for(;
g>=32;
g-=32){f.push(c);
c=0
}if(g===0){return f.concat(b)
}for(d=0;
d<b.length;
d++){f.push(c|b[d]>>>g);
c=b[d]<<(32-g)
}e=b.length?b[b.length-1]:0;
h=aps.bitArray.getPartial(e);
f.push(aps.bitArray.partial(g+h&31,(g+h>32)?c:f.pop(),1));
return f
},_xor4:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]
},byteswapM:function(b){var c,e,d=65280;
for(c=0;
c<b.length;
++c){e=b[c];
b[c]=(e>>>24)|((e>>>8)&d)|((e&d)<<8)|(e<<24)
}return b
}};
aps.codec.hex={fromBits:function(a){var c="",b;
for(b=0;
b<a.length;
b++){c+=((a[b]|0)+263882790666240).toString(16).substr(4)
}return c.substr(0,aps.bitArray.bitLength(a)/4)
},toBits:function(d){var a,c=[],b;
d=d.replace(/\s|0x/g,"");
b=d.length;
d=d+"00000000";
for(a=0;
a<d.length;
a+=8){c.push(parseInt(d.substr(a,8),16)^0)
}return aps.bitArray.clamp(c,b*4)
}};
aps.hash.sha256=function(a){if(!this._key[0]){this._precompute()
}if(a){this._h=a._h.slice(0);
this._buffer=a._buffer.slice(0);
this._length=a._length
}else{this.reset()
}};
aps.codec.utf8String={fromBits:function(a){var d="",b=aps.bitArray.bitLength(a),c,e;
for(c=0;
c<b/8;
c++){if((c&3)===0){e=a[c/4]
}d+=String.fromCharCode(e>>>8>>>8>>>8);
e<<=8
}return decodeURIComponent(escape(d))
},toBits:function(c){c=unescape(encodeURIComponent(c));
var b=[],a,d=0;
for(a=0;
a<c.length;
a++){d=d<<8|c.charCodeAt(a);
if((a&3)===3){b.push(d);
d=0
}}if(a&3){b.push(aps.bitArray.partial(8*(a&3),d))
}return b
}};
aps.hash.sha256.hash=function(a){return(new aps.hash.sha256()).update(a).finalize()
};
aps.hash.sha256.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);
this._buffer=[];
this._length=0;
return this
},update:function(e){if(typeof e==="string"){e=aps.codec.utf8String.toBits(e)
}var f,a=this._buffer=aps.bitArray.concat(this._buffer,e),k=this._length,h=this._length=k+aps.bitArray.bitLength(e);
if(h>9007199254740991){throw ("Cannot hash more than 2^53 - 1 bits")
}if(typeof Uint32Array!=="undefined"){var d=new Uint32Array(a);
var g=0;
for(f=512+k-((512+k)&511);
f<=h;
f+=512){this._block(d.subarray(16*g,16*(g+1)));
g+=1
}a.splice(0,16*g)
}else{for(f=512+k-((512+k)&511);
f<=h;
f+=512){this._block(a.splice(0,16))
}}return this
},finalize:function(){var d,a=this._buffer,c=this._h;
a=aps.bitArray.concat(a,[aps.bitArray.partial(1,1)]);
for(d=a.length+2;
d&15;
d++){a.push(0)
}a.push(Math.floor(this._length/4294967296));
a.push(this._length|0);
while(a.length){this._block(a.splice(0,16))
}this.reset();
return c
},_init:[],_key:[],_precompute:function(){var c=0,e=2,a,d;
function b(f){return(f-Math.floor(f))*4294967296|0
}for(;
c<64;
e++){d=true;
for(a=2;
a*a<=e;
a++){if(e%a===0){d=false;
break
}}if(d){if(c<8){this._init[c]=b(Math.pow(e,1/2))
}this._key[c]=b(Math.pow(e,1/3));
c++
}}},_block:function(t){var q,s,c,d,e=this._h,r=this._key,f=e[0],g=e[1],j=e[2],l=e[3],m=e[4],n=e[5],o=e[6],p=e[7];
for(q=0;
q<64;
q++){if(q<16){s=t[q]
}else{c=t[(q+1)&15];
d=t[(q+14)&15];
s=t[q&15]=((c>>>7^c>>>18^c>>>3^c<<25^c<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+t[q&15]+t[(q+9)&15])|0
}s=(s+p+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(o^m&(n^o))+r[q]);
p=o;
o=n;
n=m;
m=l+s|0;
l=j;
j=g;
g=f;
f=(s+((g&j)^(l&(g^j)))+(g>>>2^g>>>13^g>>>22^g<<30^g<<19^g<<10))|0
}e[0]=e[0]+f|0;
e[1]=e[1]+g|0;
e[2]=e[2]+j|0;
e[3]=e[3]+l|0;
e[4]=e[4]+m|0;
e[5]=e[5]+n|0;
e[6]=e[6]+o|0;
e[7]=e[7]+p|0
}}
})();(function(){aps.specifiedAdSlots={};
aps.usingSelectiveAdSlotLoading=false;
aps.selectiveAdSlotCookieName="Ju13ceSelectiveAdsList";
aps.fn.shouldPlaceAd=function(c){if(!aps.usingSelectiveAdSlotLoading){return true
}return(typeof(aps.specifiedAdSlots[c])!="undefined")
};
var b=aps.fn.getQueryParameterByName("sadslot[]");
if(b!=null){aps.usingSelectiveAdSlotLoading=true;
for(var a=0;
a<b.length;
a++){aps.specifiedAdSlots[b[a]]=true
}}})();(function(){aps.specified3rdParties={};
aps.usingSelective3rdLoading=false;
aps.fn.shouldRunThirdParty=function(c){if(aps.cfg.is.faceBookInstantArticle){return false
}if(aps.cfg.excludeModules.indexOf(c)>-1){return false
}if(!aps.usingSelective3rdLoading){return true
}return(typeof(aps.specified3rdParties[c])!="undefined")
};
aps.add3rdToSelectiveLoadingList=function(c){aps.specified3rdParties[c]=true
};
var a=aps.fn.getQueryParameterByName("sad3rd[]");
if(a!=null){aps.usingSelective3rdLoading=true;
for(var b=0;
b<a.length;
b++){aps.specified3rdParties[a[b]]=true
}}})();(function(){if(!aps.fn.shouldRunThirdParty("a9")){return
}if(aps.cfg.page.current.domain=="greenstate.com"){aps.cfg.bid.a9.enabled=false
}if((aps.cfg.bid.current_device==devices.MOBILE||aps.cfg.bid.current_device==devices.TABLET)&&(aps.cfg.bid.disabledOnMobile.indexOf("a9")>-1||aps.cfg.bid.disableMobile)){aps.cfg.bid.a9.enabled=false
}if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){aps.cfg.bid.a9.enabled=false
}if(!aps.cfg.bid.enabled||!aps.cfg.bid.a9.enabled){aps.fn.logInfo("A9 disabled");
return
}!function(d,b,f,i,j,c,e){if(b[d]){return
}function h(a,g){b[d]._Q.push([a,g])
}b[d]={init:function(){h("i",arguments)
},fetchBids:function(){h("f",arguments)
},setDisplayBids:function(){},_Q:[]};
c=f.createElement(i);
c.async=!0;
c.src=j;
e=f.getElementsByTagName(i)[0];
e.parentNode.insertBefore(c,e)
}("apstag",window,document,"script","https://c.amazon-adsystem.com/aax2/apstag.js");
aps.cfg.bid.a9.config.pubID="3070";
aps.cfg.bid.a9.config.adServer="googletag";
aps.cfg.bid.a9.config.bidTimeout=aps.cfg.bid.prefetch.refreshTimeout;
aps.cfg.bid.a9.partners={"1y9xr0g":"amobee","1ayvuv4":"appnexus","1ginqio":"conversant","2kotmo":"districtm","j80glc":"dmx","1eaqzgg":"gumgum","yrdq0w":"index","t7ludc":"magnite","1gqg3k":"oath","bgbtvk":"openX","1m2fm68":"pubmatic","kbyu4g":"pulsepoint","1r28b28":"sharethgough","e87rpc":"simpli.fi","16j2cqo":"triplelift","rjoa2o":"undertone","1gqg3k":"verizon mkt","lfx7nx":"verizon","t7ludc":"rubicon","1iqkhkw":"yieldmo",};
aps.cfg.bid.a9.validSections={"":"home page","Homepage":"home page","news":"news","entertainment":"entertainment","sports":"sports","burningman":"burningman","realestate":"real estate","obituaries":"obituaries","bayarea":"local news","seen-events":"seen","neighborhood":"local news","food":"food","lifestyle":"living","life":"living","business":"business","local":"local news","ontheblock":"real estate","politics":"news","homestyle":"real estate","living":"living","california-wildfires":"local news","seen-saratoga":"seen","comics-and-games":"entertainment","technology":"technology","education":"education","seen":"seen","expensive-san-francisco":"local news","2018":"local news","2019":"local news","weather":"local news","national":"news","homes":"real estate","photogallery":"news","style":"living","search":"other","science":"news","houseoftheweek":"real estate","music":"entertainment","sfhistory":"local news","nation":"news","readmore":"other","49ers":"sports","portal":"subsciption","crime":"local news","client":"entertainment","warriors":"sports","chris-mcginnis":"travel","raiders":"sports","chronicle_vault":"entertainment","art":"entertainment","real-estate":"real estate","insidescoop":"food","mommyfiles":"living","seattlenews":"local news","beer":"food","access.aspx?product=newedition&from=http:":"subsciption","travel":"travel","giants":"sports","galleries":"news","home":"real estate","opinion":"local news","jobs":"jobs","houston":"local news","education_clone_6643_20180713151626":"local news","dearabby":"entertainment","beauty":"living","outdoors":"travel","subscribe-new-offers":"subsciption","earthquakes":"local news","cars":"autos","chronicle-history":"local news","capitol":"local news","tablehopping":"food","photos":"news","latestnews":"news","mlb":"sports","horoscope":"entertainment","new-haven":"local news","fiesta":"local news","collegesports":"sports","blogs":"other","preps":"sports","auto":"autos","originalpets":"living","lifestyles":"living","athletics":"sports","weird":"news","wine":"food","games":"entertainment","comics":"entertainment","columns":"local news","getaways":"travel","us":"news","rodeo":"entertainment",};
aps.cfg.bid.a9.getSection=function(a){var b="";
if(aps.cfg.bid.a9.validSections[a.path[0]]==undefined){b="other"
}else{b=aps.cfg.bid.a9.validSections[a.path[0]]
}switch(a.hostname){case"education.seattlepi.com":b="Education";
break;
case"healthyeating.sfgate.com":b="Healthy Eating";
break;
case"homeguides.sfgate.com":b="Home Guides";
break;
case"livehealthy.chron.com":b="Live Healthy";
break;
case"pyme.lavoztx.com":b="Pyme";
break;
case"smallbusiness.chron.com":b="Small Business";
break;
case"work.chron.com":b="Work";
break
}return b
};
aps.cfg.bid.a9.configSlot=function(a){var c={sizes:[]};
if(a.exclude){return c
}if(!aps.fn.isValidBid(a,"","a9")){return c
}a.sizes=a.sizes||[];
if(a.mediaType=="native"){return c
}if(a.sizes.length==0){aps.fn.logSkip(a.code,"no size available to bidders (a9)");
return c
}if(a.video){return c
}var b={};
b.slotID=a.code;
b.slotName="/"+aps.cfg.networkCode+"/"+aps.cfg.page.current.adUnit+"/"+b.slotID;
b.sizes=a.sizes;
if(!aps.cfg.is.qa){b.floor={value:5,currency:"USD"}
}return b
};
aps.registerEvent(aps.event.on_define_bid_data,function(a){if(a.code=="Crown"){return
}var b=aps.cfg.bid.a9.configSlot(a);
if(b.sizes.length>0){if(!aps.cfg.bid.prefetch.a9.adUnits.includes(a.code)){aps.cfg.bid.prefetch.a9.adUnits.push(a.code)
}a.a9=b
}});
aps.registerEvent(aps.event.on_request_bid,function(a){a.pages.forEach(function(d){var c=d.a9.ads;
var b=d.a9.adIds;
if(!aps.cfg.bid.prefetch.allBidsOnRefresh&&a.slotIds){c=c.filter(function(e){return a.slotIds.includes(e.slotID)
});
b=b.filter(function(e){return a.slotIds.includes(e)
})
}if(c.length>0){aps.fn.setPerformanceMetrics("A9BidsRequested","calling a9 for page "+d.scrollDepth+" ads: "+b);
apstag.init(d.a9.config);
apstag.fetchBids({slots:c,timeout:aps.cfg.bid.prefetch.timeout,},function(e){aps.cfg.bid.a9.handleDisplayBids(e,d)
});
setTimeout(function(){aps.cfg.bid.a9.received=true;
d.a9BidsReceived=true
},aps.cfg.bid.prefetch.timeout)
}})
});
aps.cfg.bid.a9.handleDisplayBids=function(a,b){a.forEach(function(d){if(d.amznbid=="2"||d.amznbid=="1"){return
}var c=aps.cfg.ads[d.slotID];
var e=aps.cfg.bid.a9.partners[d.amznp]||"a9";
var h=d.amznbid;
if(d.amznbid_sp){h=d.amznbid_sp
}while(h.length<7){h+="0"
}var g=aps.fn.getPageBid(c,d);
g.a9BidsReceived=true;
var f=new aps.o.bid("a9",c,e,h,d);
g.bids.push(f)
});
aps.cfg.bid.a9.received=true;
b.a9BidsReceived=true;
aps.fn.logInfo("A9 bids received")
};
aps.cfg.bid.a9.buildDisplaySlots=function(d){var c=[];
for(var a=0;
a<definedTags.ads.length;
a++){if(definedTags.ads[a].video){var b={};
b.slotID="videoSlotName1";
b.mediaType="video";
c.push(b);
return c
}}return c
};
aps.cfg.bid.a9.getVideoBids=function(){if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){return
}if(!aps.cfg.vid.enabled){return
}if(aps.cfg.bid.a9.videoAdUnits.length>0){googletag.cmd.push(function(){aps.cfg.bid.a9.checkInitCalled();
aps.fn.logInfo("calling A9 video");
apstag.fetchBids({slots:aps.cfg.bid.a9.videoAdUnits,timeout:aps.cfg.bid.a9.config.bidTimeout},function(a){aps.cfg.bid.a9.handleVideoBids(a)
})
})
}};
aps.cfg.bid.a9.handleVideoBids=function(a){aps.fn.logInfo("A9 video bid received: "+a.length);
if(a.length>0){aps.cfg.vid.tagUrl+=a[0].qsParams;
aps.cfg.bid.bids.push({slotid:a[0].slotID,bid:a[0].amznbid,bidder:aps.cfg.bid.a9.partners[a[0].amznp]||"A9"})
}};
aps.registerEvent(aps.event.on_request_new_video_ads,function(){aps.cfg.bid.a9.getVideoBids()
})
})();(function(){aps.registerEvent(aps.event.on_before_request_ads,function(c){var a=!1;
if(aps.cfg.page.current.domain=="expressnews.com"||aps.cfg.page.current.domain=="houstonchronicle.com"){try{if(GetCookie("hrstctok")!=null){a=1
}}catch(b){}}else{if(aps.cfg.page.current.domain=="sfchronicle.com"){try{if(JSON.parse(sessionStorage.getItem("sync-subscriberPlans-status"))["hasActivePlans"]==true){a=1
}}catch(b){}}}if(a){aps.cfg.page.addBaseKvp("category","premuser")
}})
})();(function(){var a="";
switch(aps.cfg.page.current.domain){case"houstonchronicle.com":case"chron.com":a="hou";
break;
case"expressnews.com":case"mysanantonio.com.com":a="sa";
break;
case"sfchronicle.com":case"sfgate.com":a="sf";
break;
case"timesunion.com":a="tu";
break;
default:return;
break
}aps.registerEvent(aps.event.on_before_request_ads,function(h){var d=false;
var l=false;
var j=[];
try{if(typeof(localStorage)!=undefined){var f=JSON.parse(localStorage.getItem("hnp_subs"));
var b=1;
var e=null;
if(f!=null){for(var g in f){if(f.hasOwnProperty(g)){e=f[g];
if(e.hasOwnProperty("sub_status_"+b)){var i=a;
if(e["sub_status_"+b]=="Active"){i=i+"_a_"
}else{i=i+"_ex_"
}i=i+e["sub_product_"+b]+"_";
i=i+e["sub_product_code_"+b];
j.push(i)
}}b++
}}}}catch(c){}var k=a+"_na";
if(j.length>=1){k=j.join(",")
}aps.fn.addPageKvp("swgt",k)
})
})();!function(){aps.fn.createHash=function(Q,S){function U(c,d){return c<<d|c>>>32-d
}function W(h,i){var j,k,l,m,n;
return l=2147483648&h,m=2147483648&i,j=1073741824&h,k=1073741824&i,n=(1073741823&h)+(1073741823&i),j&k?2147483648^n^l^m:j|k?1073741824&n?3221225472^n^l^m:1073741824^n^l^m:n^l^m
}function Y(d,e,f){return d&e|~d&f
}function aa(d,e,f){return d&f|e&~f
}function ac(d,e,f){return d^e^f
}function ae(d,e,f){return e^(d|~f)
}function ag(c,d,e,k,l,m,n){return c=W(c,W(W(Y(d,e,k),l),n)),W(U(c,m),d)
}function ai(c,d,f,k,l,m,n){return c=W(c,W(W(aa(d,f,k),l),n)),W(U(c,m),d)
}function ak(c,d,g,k,l,m,n){return c=W(c,W(W(ac(d,g,k),l),n)),W(U(c,m),d)
}function am(c,d,h,k,l,m,n){return c=W(c,W(W(ae(d,h,k),l),n)),W(U(c,m),d)
}function ao(j){for(var k,l=j.length,m=l+8,n=(m-m%64)/64,o=16*(n+1),p=Array(o-1),q=0,r=0;
l>r;
){k=(r-r%4)/4,q=r%4*8,p[k]=p[k]|j.charCodeAt(r)<<q,r++
}return k=(r-r%4)/4,q=r%4*8,p[k]=p[k]|128<<q,p[o-2]=l<<3,p[o-1]=l>>>29,p
}function aq(f){var g,h,i="",j="";
for(h=0;
3>=h;
h++){g=f>>>8*h&255,j="0"+g.toString(16),i+=j.substr(j.length-2,2)
}return i
}function at(e){e=e.replace(/\r\n/g,"\n");
for(var f="",g=0;
g<e.length;
g++){var h=e.charCodeAt(g);
128>h?f+=String.fromCharCode(h):h>127&&2048>h?(f+=String.fromCharCode(h>>6|192),f+=String.fromCharCode(63&h|128)):(f+=String.fromCharCode(h>>12|224),f+=String.fromCharCode(h>>6&63|128),f+=String.fromCharCode(63&h|128))
}return f
}void 0===S&&(S=""),void 0===Q&&(Q=10000000000*Math.random()+"||"+window.location.href+"||"+(new Date).getTime()+"||"+S);
var av,ax,ay,az,aA,aB,aC,aD,aE,aF=Array(),aG=7,R=12,T=17,V=22,X=5,Z=9,ab=14,ad=20,af=4,ah=11,aj=16,al=23,an=6,ap=10,ar=15,au=21;
for(Q=at(Q),aF=ao(Q),aB=1732584193,aC=4023233417,aD=2562383102,aE=271733878,av=0;
av<aF.length;
av+=16){ax=aB,ay=aC,az=aD,aA=aE,aB=ag(aB,aC,aD,aE,aF[av+0],aG,3614090360),aE=ag(aE,aB,aC,aD,aF[av+1],R,3905402710),aD=ag(aD,aE,aB,aC,aF[av+2],T,606105819),aC=ag(aC,aD,aE,aB,aF[av+3],V,3250441966),aB=ag(aB,aC,aD,aE,aF[av+4],aG,4118548399),aE=ag(aE,aB,aC,aD,aF[av+5],R,1200080426),aD=ag(aD,aE,aB,aC,aF[av+6],T,2821735955),aC=ag(aC,aD,aE,aB,aF[av+7],V,4249261313),aB=ag(aB,aC,aD,aE,aF[av+8],aG,1770035416),aE=ag(aE,aB,aC,aD,aF[av+9],R,2336552879),aD=ag(aD,aE,aB,aC,aF[av+10],T,4294925233),aC=ag(aC,aD,aE,aB,aF[av+11],V,2304563134),aB=ag(aB,aC,aD,aE,aF[av+12],aG,1804603682),aE=ag(aE,aB,aC,aD,aF[av+13],R,4254626195),aD=ag(aD,aE,aB,aC,aF[av+14],T,2792965006),aC=ag(aC,aD,aE,aB,aF[av+15],V,1236535329),aB=ai(aB,aC,aD,aE,aF[av+1],X,4129170786),aE=ai(aE,aB,aC,aD,aF[av+6],Z,3225465664),aD=ai(aD,aE,aB,aC,aF[av+11],ab,643717713),aC=ai(aC,aD,aE,aB,aF[av+0],ad,3921069994),aB=ai(aB,aC,aD,aE,aF[av+5],X,3593408605),aE=ai(aE,aB,aC,aD,aF[av+10],Z,38016083),aD=ai(aD,aE,aB,aC,aF[av+15],ab,3634488961),aC=ai(aC,aD,aE,aB,aF[av+4],ad,3889429448),aB=ai(aB,aC,aD,aE,aF[av+9],X,568446438),aE=ai(aE,aB,aC,aD,aF[av+14],Z,3275163606),aD=ai(aD,aE,aB,aC,aF[av+3],ab,4107603335),aC=ai(aC,aD,aE,aB,aF[av+8],ad,1163531501),aB=ai(aB,aC,aD,aE,aF[av+13],X,2850285829),aE=ai(aE,aB,aC,aD,aF[av+2],Z,4243563512),aD=ai(aD,aE,aB,aC,aF[av+7],ab,1735328473),aC=ai(aC,aD,aE,aB,aF[av+12],ad,2368359562),aB=ak(aB,aC,aD,aE,aF[av+5],af,4294588738),aE=ak(aE,aB,aC,aD,aF[av+8],ah,2272392833),aD=ak(aD,aE,aB,aC,aF[av+11],aj,1839030562),aC=ak(aC,aD,aE,aB,aF[av+14],al,4259657740),aB=ak(aB,aC,aD,aE,aF[av+1],af,2763975236),aE=ak(aE,aB,aC,aD,aF[av+4],ah,1272893353),aD=ak(aD,aE,aB,aC,aF[av+7],aj,4139469664),aC=ak(aC,aD,aE,aB,aF[av+10],al,3200236656),aB=ak(aB,aC,aD,aE,aF[av+13],af,681279174),aE=ak(aE,aB,aC,aD,aF[av+0],ah,3936430074),aD=ak(aD,aE,aB,aC,aF[av+3],aj,3572445317),aC=ak(aC,aD,aE,aB,aF[av+6],al,76029189),aB=ak(aB,aC,aD,aE,aF[av+9],af,3654602809),aE=ak(aE,aB,aC,aD,aF[av+12],ah,3873151461),aD=ak(aD,aE,aB,aC,aF[av+15],aj,530742520),aC=ak(aC,aD,aE,aB,aF[av+2],al,3299628645),aB=am(aB,aC,aD,aE,aF[av+0],an,4096336452),aE=am(aE,aB,aC,aD,aF[av+7],ap,1126891415),aD=am(aD,aE,aB,aC,aF[av+14],ar,2878612391),aC=am(aC,aD,aE,aB,aF[av+5],au,4237533241),aB=am(aB,aC,aD,aE,aF[av+12],an,1700485571),aE=am(aE,aB,aC,aD,aF[av+3],ap,2399980690),aD=am(aD,aE,aB,aC,aF[av+10],ar,4293915773),aC=am(aC,aD,aE,aB,aF[av+1],au,2240044497),aB=am(aB,aC,aD,aE,aF[av+8],an,1873313359),aE=am(aE,aB,aC,aD,aF[av+15],ap,4264355552),aD=am(aD,aE,aB,aC,aF[av+6],ar,2734768916),aC=am(aC,aD,aE,aB,aF[av+13],au,1309151649),aB=am(aB,aC,aD,aE,aF[av+4],an,4149444226),aE=am(aE,aB,aC,aD,aF[av+11],ap,3174756917),aD=am(aD,aE,aB,aC,aF[av+2],ar,718787259),aC=am(aC,aD,aE,aB,aF[av+9],au,3951481745),aB=W(aB,ax),aC=W(aC,ay),aD=W(aD,az),aE=W(aE,aA)
}var aw=aq(aB)+aq(aC)+aq(aD)+aq(aE);
return aw.toLowerCase()
};
aps.registerEvent(aps.event.on_before_request_ads,function(b){if(aps.cfg.juiceMdUrlHash){return
}try{aps.cfg.juiceMdUrlHash=window.Bootstrapper&&window.Bootstrapper.mdHash?Bootstrapper.mdHash:aps.fn.createHash();
aps.cfg.page.addBaseKvp("urlhash",aps.cfg.juiceMdUrlHash);
aps.performanceMetrics.urlHash=aps.cfg.juiceMdUrlHash
}catch(a){console.warn("Error Generating Unique Hash")
}})
}();(function(){if(aps.fn.shouldRunThirdParty("blueconic")){var a=this;
aps.registerEvent(aps.event.on_before_request_ads,function(d){if(typeof localStorage.bcDFPTargetingParams!=="undefined"){aps.fn.logInfo("Blueconic segments detected");
try{var b=window.JSON.parse(localStorage.bcDFPTargetingParams);
if(b[0]["key"]=="audiences"&&b[0]["value"].length>0){aps.cfg.page.addPageKvp("bc_audiences",b[0]["value"])
}else{aps.fn.logInfo("Empty blueconic segment detected")
}}catch(c){aps.fn.logInfo("error parsing blueconic data")
}}else{aps.fn.logInfo("Blueconic segments not detected")
}})
}})();(function(){if(!aps.cfg.bid.enabled){return
}aps.pwt={};
aps.pwt.getLocalStorage=function(){var i={};
var j=localStorage.getItem("identityHub");
if(j!=null){i=JSON.parse(j)
}var j=localStorage.getItem("identityHub_getUserIds");
if(j!=null){i.getUserIds=function(){return JSON.parse(j)
}
}return i
};
aps.pwt.setLocalStorage=function(){aps.fn.logInfo("loaded PubMatic pwt.js");
localStorage.setItem("identityHub",JSON.stringify(window.PWT));
localStorage.setItem("identityHub_getUserIds",JSON.stringify(window.PWT.getUserIds()))
};
window.PWT=aps.pwt.getLocalStorage();
var a="2933";
switch(aps.cfg.current_domain){case"chron.com":a="3346";
break;
case"ctpost.com":a="3347";
break;
case"expressnews.com":a="3348";
break;
case"houstonchronicle.com":a="3349";
break;
case"mysanantonio.com":a="3350";
break;
case"seattlepi.com":a="3351";
break;
case"sfchronicle.com":a="3352";
break;
case"sfgate.com":a="3353";
break;
case"timesunion.com":a="3354";
break
}var e=window.location.href;
var g="//ads.pubmatic.com/AdServer/js/pwt/157076/"+a;
var d="";
if(e.indexOf("pwtv=")>0){var f=/pwtv=(.*?)(&|$)/g;
var b=f.exec(e);
if(b.length>=2&&b[1].length>0){d="/"+b[1]
}}var h=document.createElement("script");
h.async=true;
h.id="identityHub";
h.type="text/javascript";
h.src=g+d+"/pwt.js";
h.onload=aps.pwt.setLocalStorage;
var c=document.getElementsByTagName("script")[0];
c.parentNode.insertBefore(h,c);
aps.fn.logInfo("loading PubMatic pwt.js")
})();(function () {
 /* prebid.js v5.8.0
 Updated : 2021-08-09*/
 !function(e){var t=window.pbjsChunk;window.pbjsChunk=function(n,o,a){for(var c,u,s,d=0,f=[];d<n.length;d++)u=n[d],r[u]&&f.push(r[u][0]),r[u]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);for(t&&t(n,o,a);f.length;)f.shift()();if(a)for(d=0;d<a.length;d++)s=i(i.s=a[d]);return s};var n={},r={329:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e},i(i.s=839)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"internal",(function(){return j})),t.getPrebidInternal=function(){return w},n.d(t,"bind",(function(){return U})),t.getUniqueIdentifierStr=x,t.generateUUID=function e(t){return t?(t^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},t.getBidIdParameter=function(e,t){if(t&&t[e])return t[e];return""},t.tryAppendQueryString=function(e,t,n){if(n)return e+t+"="+encodeURIComponent(n)+"&";return e},t.parseQueryStringParameters=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t=t.replace(/&$/,"")},t.transformAdServerTargetingObj=function(e){return e&&Object.getOwnPropertyNames(e).length>0?ce(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(ue(e,t)))})).join("&"):""},t.getAdUnitSizes=function(e){if(!e)return;var t=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)){var n=e.mediaTypes.banner.sizes;Array.isArray(n[0])?t=n:t.push(n)}else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes));return t},t.parseSizesInput=function(e){var t=[];if("string"==typeof e){var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)Z(n,i)&&n[i].match(r)&&t.push(n[i])}else if("object"===h(e)){var o=e.length;if(o>0)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(D(e));else for(var a=0;a<o;a++)t.push(D(e[a]))}return t},t.parseGPTSingleSizeArray=D,t.parseGPTSingleSizeArrayToRtbSize=function(e){if(N(e))return{w:e[0],h:e[1]}},t.getWindowTop=k,t.getWindowSelf=P,t.getWindowLocation=M,t.logMessage=q,t.logInfo=G,t.logWarn=W,t.logError=L,t.hasConsoleLogger=function(){return E},t.debugTurnedOn=z,t.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=x(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e},t.getParameterByName=function(e){return me(M().search)[e]||""},t.isA=V,t.isFn=H,t.isStr=K,t.isArray=J,t.isNumber=Y,t.isPlainObject=Q,t.isBoolean=function(e){return V(e,"Boolean")},t.isEmpty=$,t.isEmptyStr=function(e){return K(e)&&(!e||0===e.length)},t._each=X,t.contains=function(e,t){if($(e))return!1;if(H(e.indexOf))return-1!==e.indexOf(t);var n=e.length;for(;n--;)if(e[n]===t)return!0;return!1},t._map=function(e,t){if($(e))return[];if(H(e.map))return e.map(t);var n=[];return X(e,(function(r,i){n.push(t(r,i,e))})),n},t.hasOwn=Z,t.insertElement=ee,t.triggerPixel=te,t.callBurl=function(e){var t=e.source,n=e.burl;t===m.S2S.SRC&&n&&j.triggerPixel(n)},t.insertHtmlIntoIframe=function(e){if(!e)return;var t=document.createElement("iframe");t.id=x(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",t.frameBorder="0",t.allowtransparency="true",j.insertElement(t,document,"body"),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()},t.insertUserSyncIframe=ne,t.createTrackPixelHtml=function(e){if(!e)return"";var t=encodeURI(e),n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+t+'"></div>'},t.createTrackPixelIframeHtml=re,t.getValueString=ie,t.uniques=oe,t.flatten=ae,t.getBidRequest=function(e,t){if(!e)return;var n;return t.some((function(t){var r=c()(t.bids,(function(t){return["bidId","adId","bid_id"].some((function(n){return t[n]===e}))}));return r&&(n=r),r})),n},t.getKeys=ce,t.getValue=ue,t.getKeyByValue=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t)return n},t.getBidderCodes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits;return e.map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(ae,[])})).reduce(ae).filter(oe)},t.isGptPubadsDefined=se,t.isApnGetTagDefined=function(){if(window.apntag&&H(window.apntag.getTag))return!0},n.d(t,"getHighestCpm",(function(){return de})),n.d(t,"getOldestHighestCpmBid",(function(){return fe})),n.d(t,"getLatestHighestCpmBid",(function(){return le})),t.shuffle=function(e){var t=e.length;for(;t>0;){var n=Math.floor(Math.random()*t);t--;var r=e[t];e[t]=e[n],e[n]=r}return e},t.adUnitsFilter=function(e,t){return s()(e,t&&t.adUnitCode)},t.deepClone=ge,t.inIframe=function(){try{return j.getWindowSelf()!==j.getWindowTop()}catch(e){return!0}},t.isSafariBrowser=function(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)},t.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace(/\$\{AUCTION_PRICE\}/g,t)},t.replaceClickThrough=function(e,t){if(!e||!t||"string"!=typeof t)return;return e.replace(/\${CLICKTHROUGH}/g,t)},t.timestamp=function(){return(new Date).getTime()},t.getPerformanceNow=function(){return window.performance&&window.performance.now&&window.performance.now()||0},t.hasDeviceAccess=function(){return!1!==r.b.getConfig("deviceAccess")},t.checkCookieSupport=be,t.delayExecution=function(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));var n=0;return function(){++n===t&&e.apply(this,arguments)}},t.groupBy=function(e,t){return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})},t.getDefinedParams=function(e,t){return t.filter((function(t){return e[t]})).reduce((function(t,n){return y(t,v({},n,e[n]))}),{})},t.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e).every((function(e){return s()(t,e)})))return!1;if(e.video&&e.video.context)return s()(["instream","outstream","adpod"],e.video.context);return!0},t.getBidderRequest=function(e,t,n){return c()(e,(function(e){return e.bids.filter((function(e){return e.bidder===t&&e.adUnitCode===n})).length>0}))||{start:null,auctionId:null}},t.getUserConfiguredParams=function(e,t,n){return e.filter((function(e){return e.code===t})).map((function(e){return e.bids})).reduce(ae,[]).filter((function(e){return e.bidder===n})).map((function(e){return e.params||{}}))},t.getOrigin=function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},t.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack},t.isAdUnitCodeMatchingSlot=function(e){return function(t){return ve(e,t)}},t.isSlotMatchingAdUnitCode=ye,t.getGptSlotInfoForAdUnitCode=function(e){var t;se()&&(t=c()(window.googletag.pubads().getSlots(),ye(e)));if(t)return{gptSlot:t.getAdUnitPath(),divId:t.getSlotElementId()};return{}},t.unsupportedBidderMessage=function(e,t){var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(n," ad unit\n    containing bidders that don't support ").concat(n,": ").concat(t,".\n    This bidder won't fetch demand.\n  ")},t.isInteger=he,t.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,(function(e,t){return"_"+t.toLowerCase()})).replace(/^_/,"")},t.cleanObj=function(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})},t.pick=function(e,t){if("object"!==h(e))return{};return t.reduce((function(n,r,i){if("function"==typeof r)return n;var o=r,a=r.match(/^(.+?)\sas\s(.+?)$/i);a&&(r=a[1],o=a[2]);var c=e[r];return"function"==typeof t[i+1]&&(c=t[i+1](c,n)),void 0!==c&&(n[o]=c),n}),{})},t.transformBidderParamKeywords=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keywords",n=[];return X(e,(function(e,r){if(J(e)){var i=[];X(e,(function(e){((e=ie(t+"."+r,e))||""===e)&&i.push(e)})),e=i}else{if(!K(e=ie(t+"."+r,e)))return;e=[e]}n.push({key:r,value:e})})),n},t.convertTypes=function(e,t){return Object.keys(e).forEach((function(n){var r,i;t[n]&&(H(e[n])?t[n]=e[n](t[n]):t[n]=(r=e[n],i=t[n],"string"===r?i&&i.toString():"number"===r?Number(i):i),isNaN(t[n])&&delete t.key)})),t},t.isArrayOfNums=function(e,t){return J(e)&&(!t||e.length===t)&&e.every((function(e){return he(e)}))},t.fill=function(e,t){for(var n=[],r=0;r<t;r++){var i=Q(e)?ge(e):e;n.push(i)}return n},t.chunk=function(e,t){for(var n=[],r=0;r<Math.ceil(e.length/t);r++){var i=r*t,o=i+t;n.push(e.slice(i,o))}return n},t.getMinValueFromArray=function(e){return Math.min.apply(Math,p(e))},t.getMaxValueFromArray=function(e){return Math.max.apply(Math,p(e))},t.compareOn=function(e){return function(t,n){return t[e]<n[e]?1:t[e]>n[e]?-1:0}},t.parseQS=me,t.formatQS=Se,t.parseUrl=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?n.search:j.parseQS(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},t.buildUrl=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(j.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")},t.deepEqual=Ae,t.mergeDeep=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!r.length)return t;var o=r.shift();if(Q(t)&&Q(o))for(var a in o)Q(o[a])?(t[a]||y(t,v({},a,{})),e(t[a],o[a])):J(o[a])&&t[a]?J(t[a])&&(t[a]=t[a].concat(o[a])):y(t,v({},a,o[a]));return e.apply(void 0,[t].concat(r))},t.cyrb53Hash=function(e){for(var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=function(e,t){if(H(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},i=3735928559^n,o=1103547991^n,a=0;a<e.length;a++)t=e.charCodeAt(a),i=r(i^t,2654435761),o=r(o^t,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()};var r=n(3),i=n(164),o=n.n(i),a=n(11),c=n.n(a),u=n(12),s=n.n(u),d=n(165);n.d(t,"deepAccess",(function(){return d.a}));var f=n(166);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"deepSetValue",(function(){return f.a}));var m=n(5),S=Object.prototype.toString,A=Boolean(window.console),E=Boolean(A&&window.console.log),O=Boolean(A&&window.console.info),T=Boolean(A&&window.console.warn),I=Boolean(A&&window.console.error),C=n(9),j={checkCookieSupport:be,createTrackPixelIframeHtml:re,getWindowSelf:P,getWindowTop:k,getWindowLocation:M,insertUserSyncIframe:ne,insertElement:ee,isFn:H,triggerPixel:te,logError:L,logWarn:W,logMessage:q,logInfo:G,parseQS:me,formatQS:Se,deepEqual:Ae},w={};var _,R={},U=function(e,t){return t}.bind(null,1,R)()===R?Function.prototype.bind:function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))}},B=(_=0,function(){return++_});function x(){return B()+Math.random().toString(16).substr(2)}function D(e){if(N(e))return e[0]+"x"+e[1]}function N(e){return J(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function k(){return window.top}function P(){return window.self}function M(){return window.location}function q(){z()&&E&&console.log.apply(console,F(arguments,"MESSAGE:"))}function G(){z()&&O&&console.info.apply(console,F(arguments,"INFO:"))}function W(){z()&&T&&console.warn.apply(console,F(arguments,"WARNING:")),C.emit(m.EVENTS.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}function L(){z()&&I&&console.error.apply(console,F(arguments,"ERROR:")),C.emit(m.EVENTS.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function F(e,t){e=[].slice.call(e);var n=r.b.getCurrentBidder();return t&&e.unshift(t),n&&e.unshift(i("#aaa")),e.unshift(i("#3b88c3")),e.unshift("%cPrebid"+(n?"%c".concat(n):"")),e;function i(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function z(){return!!r.b.getConfig("debug")}function V(e,t){return S.call(e)==="[object "+t+"]"}function H(e){return V(e,"Function")}function K(e){return V(e,"String")}function J(e){return V(e,"Array")}function Y(e){return V(e,"Number")}function Q(e){return V(e,"Object")}function $(e){if(!e)return!0;if(J(e)||K(e))return!(e.length>0);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function X(e,t){if(!$(e)){if(H(e.forEach))return e.forEach(t,this);var n=0,r=e.length;if(r>0)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}}function Z(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!==e[t]&&e.constructor.prototype[t]!==e[t]}function ee(e,t,n,r){var i;t=t||document,i=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{if((i=i.length?i:t.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function te(e,t){var n=new Image;t&&j.isFn(t)&&(n.addEventListener("load",t),n.addEventListener("error",t)),n.src=e}function ne(e,t){var n=j.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=n;var i=r.firstChild;t&&j.isFn(t)&&(i.addEventListener("load",t),i.addEventListener("error",t)),j.insertElement(i,document,"html",!0)}function re(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e?(t&&(e=encodeURI(e)),n&&(n='sandbox="'.concat(n,'"')),"<iframe ".concat(n,' id="').concat(x(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')):""}function ie(e,t,n){return null==t?n:K(t)?t:Y(t)?t.toString():void j.logWarn("Unsuported type for param: "+e+" required type: String")}function oe(e,t,n){return n.indexOf(e)===t}function ae(e,t){return e.concat(t)}function ce(e){return Object.keys(e)}function ue(e,t){return e[t]}function se(){if(window.googletag&&H(window.googletag.pubads)&&H(window.googletag.pubads().getSlots))return!0}var de=pe("timeToRespond",(function(e,t){return e>t})),fe=pe("responseTimestamp",(function(e,t){return e>t})),le=pe("responseTimestamp",(function(e,t){return e<t}));function pe(e,t){return function(n,r){return n.cpm===r.cpm?t(n[e],r[e])?r:n:n.cpm<r.cpm?r:n}}function ge(e){return o()(e)}function be(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}var ve=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t};function ye(e){return function(t){return ve(t,e)}}function he(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function me(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=l(t.split("="),2),r=n[0],i=n[1];return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(i)):e[r]=i||"",e}),{}):{}}function Se(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return"".concat(t,"[]=").concat(e)})).join("&"):"".concat(t,"=").concat(e[t])})).join("&")}function Ae(e,t){if(e===t)return!0;if("object"===h(e)&&null!==e&&"object"===h(t)&&null!==t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!Ae(e[n],t[n]))return!1}return!0}return!1}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"storage",(function(){return I})),t.registerBidder=function(e){var t=Array.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;function n(e){var n=j(e);i.default.registerBidAdapter(n,e.code,t)}n(e),Array.isArray(e.aliases)&&e.aliases.forEach((function(t){var r,o,a=t;Object(y.isPlainObject)(t)&&(a=t.code,r=t.gvlid,o=t.skipPbsAliasing),i.default.aliasRegistry[a]=e.code,n(T({},e,{code:a,gvlid:r,skipPbsAliasing:o}))}))},t.newBidder=j,n.d(t,"registerSyncInner",(function(){return w})),t.preloadBidderMappingFile=_,t.getIabSubCategory=function(e,t){var n=i.default.getBidAdapter(e);if(n.getSpec().getMappingFileInfo){var r=n.getSpec().getMappingFileInfo(),o=r.localStorageKey?r.localStorageKey:n.getBidderCode(),a=I.getDataFromLocalStorage(o);if(a){try{a=JSON.parse(a)}catch(t){Object(y.logError)("Failed to parse ".concat(e," mapping data stored in local storage"))}return a.mapping[t]?a.mapping[t]:null}}},t.isValid=R;var r=n(75),i=n(8),o=n(3),a=n(39),c=n(55),u=n(36),s=n(22),d=n(5),f=n.n(d),l=n(9),p=n.n(l),g=n(12),b=n.n(g),v=n(4),y=n(0),h=n(2),m=n(10),S=n(7);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=Object(S.a)("bidderFactory"),C=["requestId","cpm","ttl","creativeId","netRevenue","currency"];function j(e){return T(new r.a(e.code),{getSpec:function(){return Object.freeze(e)},registerSyncs:t,callBids:function(r,i,c,u,s,d){if(Array.isArray(r.bids)){var l={},g=[],b=r.bids.filter(n);if(0!==b.length){var v={};b.forEach((function(e){v[e.bidId]=e,e.adUnitCode||(e.adUnitCode=e.placementCode)}));var h=e.buildRequests(b,r);if(h&&0!==h.length){Array.isArray(h)||(h=[h]);var m=Object(y.delayExecution)(d(S),h.length);h.forEach((function(t){switch(t.method){case"GET":u("".concat(t.url).concat(function(e){if(e)return"?".concat("object"===O(e)?Object(y.parseQueryStringParameters)(e):e);return""}(t.data)),{success:d(n),error:o},void 0,T({method:"GET",withCredentials:!0},t.options));break;case"POST":u(t.url,{success:d(n),error:o},"string"==typeof t.data?t.data:JSON.stringify(t.data),T({method:"POST",contentType:"text/plain",withCredentials:!0},t.options));break;default:Object(y.logWarn)("Skipping invalid request from ".concat(e.code,". Request type ").concat(t.type," must be GET or POST")),m()}function n(n,o){s(e.code);try{n=JSON.parse(n)}catch(e){}var c;n={body:n,headers:{get:o.getResponseHeader.bind(o)}},g.push(n);try{c=e.interpretResponse(n,t)}catch(t){return Object(y.logError)("Bidder ".concat(e.code," failed to interpret the server's response. Continuing without bids"),null,t),void m()}function u(t){var n=v[t.requestId];if(n){t.originalCpm=t.cpm,t.originalCurrency=t.currency,t.meta=t.meta||T({},t[n.bidder]);var o=T(Object(a.a)(f.a.STATUS.GOOD,n),t);!function(e,t){l[e]=!0,R(e,t,[r])&&i(e,t)}(n.adUnitCode,o)}else Object(y.logWarn)("Bidder ".concat(e.code," made bid for unknown request ID: ").concat(t.requestId,". Ignoring."))}c&&(Object(y.isArray)(c)?c.forEach(u):u(c)),m(c)}function o(t){s(e.code),Object(y.logError)("Server call for ".concat(e.code," failed: ").concat(t,". Continuing without bids.")),m()}}))}else S()}else S()}function S(){c(),o.b.runWithBidder(e.code,(function(){p.a.emit(f.a.EVENTS.BIDDER_DONE,r),t(g,r.gdprConsent,r.uspConsent)}))}}});function t(t,n,r){w(e,t,n,r)}function n(t){return!!e.isBidRequestValid(t)||(Object(y.logWarn)("Invalid bid sent to bidder ".concat(e.code,": ").concat(JSON.stringify(t))),!1)}}var w=Object(m.b)("async",(function(e,t,n,r){var a=o.b.getConfig("userSync.aliasSyncEnabled");if(e.getUserSyncs&&(a||!i.default.aliasRegistry[e.code])){var u=o.b.getConfig("userSync.filterSettings"),s=e.getUserSyncs({iframeEnabled:!(!u||!u.iframe&&!u.all),pixelEnabled:!(!u||!u.image&&!u.all)},t,n,r);s&&(Array.isArray(s)||(s=[s]),s.forEach((function(t){c.a.registerSync(t.type,e.code,t.url)})))}}),"registerSyncs");function _(e,t){if(!o.b.getConfig("adpod.brandCategoryExclusion"))return e.call(this,t);t.filter((function(e){return Object(y.deepAccess)(e,"mediaTypes.video.context")===h.a})).map((function(e){return e.bids.map((function(e){return e.bidder}))})).reduce(y.flatten,[]).filter(y.uniques).forEach((function(e){var t=i.default.getBidAdapter(e);if(t.getSpec().getMappingFileInfo){var n=t.getSpec().getMappingFileInfo(),r=n.refreshInDays?n.refreshInDays:1,o=n.localStorageKey?n.localStorageKey:t.getSpec().code,a=I.getDataFromLocalStorage(o);try{(!(a=a?JSON.parse(a):void 0)||Object(y.timestamp)()>a.lastUpdated+24*r*60*60*1e3)&&Object(v.a)(n.url,{success:function(t){try{t=JSON.parse(t);var n={lastUpdated:Object(y.timestamp)(),mapping:t.mapping};I.setDataInLocalStorage(o,JSON.stringify(n))}catch(t){Object(y.logError)("Failed to parse ".concat(e," bidder translation mapping file"))}},error:function(){Object(y.logError)("Failed to load ".concat(e," bidder translation file"))}})}catch(t){Object(y.logError)("Failed to parse ".concat(e," bidder translation mapping file"))}}})),e.call(this,t)}function R(e,t,n){function r(e){return"Invalid bid from ".concat(t.bidderCode,". Ignoring bid: ").concat(e)}return e?t?(i=Object.keys(t),C.every((function(e){return b()(i,e)&&!b()([void 0,null],t[e])}))?"native"!==t.mediaType||Object(u.g)(t,n)?"video"!==t.mediaType||Object(s.d)(t,n)?!("banner"===t.mediaType&&!function(e,t,n){if((t.width||0===parseInt(t.width,10))&&(t.height||0===parseInt(t.height,10)))return t.width=parseInt(t.width,10),t.height=parseInt(t.height,10),!0;var r=Object(y.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0].sizes,o=Object(y.parseSizesInput)(i);if(1===o.length){var a=A(o[0].split("x"),2),c=a[0],u=a[1];return t.width=parseInt(c,10),t.height=parseInt(u,10),!0}return!1}(e,t,n))||(Object(y.logError)(r("Banner bids require a width and height")),!1):(Object(y.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):(Object(y.logError)(r("Native bid missing some required properties.")),!1):(Object(y.logError)(r("Bidder ".concat(t.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1)):(Object(y.logWarn)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1):(Object(y.logWarn)("No adUnitCode was supplied to addBidResponse."),!1);var i}Object(m.a)("checkAdUnitSetup").before(_)},10:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),t.d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=e.getHooks({hook:t});0===r.length&&e.before(t,n)},t.c=function(e,t){a("async",(function(e){e.forEach((function(e){return t.apply(void 0,function(e){if(Array.isArray(e))return o(e)}(n=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var n}))}),e)([])},t.e=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];c(e).before((function(e,t){t.push(n),e(t)}))};var r=n(167),i=n.n(r);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=i()({ready:i.a.SYNC|i.a.ASYNC|i.a.QUEUE}),c=a.get},100:function(e,t,n){"use strict";var r=n(14),i=n(57).find,o=n(51),a="find",c=!0;a in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},101:function(e,t,n){var r=n(33),i=n(102),o=n(44),a=n(45),c=n(56),u=n(30),s=n(77),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t,!0),s)try{return d(e,t)}catch(e){}if(u(e,t))return o(!i.f.call(e,t),e[t])}},102:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},103:function(e,t,n){var r=n(28),i=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==s||n!=u&&("function"==typeof t?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",s=o.POLYFILL="P";e.exports=o},104:function(e,t,n){var r=n(29),i=n(105),o=n(23)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},105:function(e,t,n){var r=n(46);e.exports=Array.isArray||function(e){return"Array"==r(e)}},106:function(e,t,n){var r=n(25),i=n(31);e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},107:function(e,t,n){var r,i,o=n(25),a=n(108),c=o.process,u=c&&c.versions,s=u&&u.v8;s?i=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),e.exports=i&&+i},108:function(e,t,n){var r=n(27);e.exports=r("navigator","userAgent")||""},109:function(e,t,n){var r=n(80);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},11:function(e,t,n){var r=n(99);e.exports=r},110:function(e,t,n){n(111);var r=n(52);e.exports=r("Array","includes")},111:function(e,t,n){"use strict";var r=n(14),i=n(81).includes,o=n(51);r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},112:function(e,t,n){var r=n(58),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},113:function(e,t,n){n(114),n(131),n(92),n(133);var r=n(49);e.exports=r.Set},114:function(e,t,n){"use strict";var r=n(115),i=n(120);e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},115:function(e,t,n){"use strict";var r=n(14),i=n(25),o=n(83),a=n(28),c=n(31),u=n(18),s=n(86),d=n(29),f=n(64),l=n(34).f,p=n(57).forEach,g=n(33),b=n(54),v=b.set,y=b.getterFor;e.exports=function(e,t,n){var b,h=-1!==e.indexOf("Map"),m=-1!==e.indexOf("Weak"),S=h?"set":"add",A=i[e],E=A&&A.prototype,O={};if(g&&"function"==typeof A&&(m||E.forEach&&!a((function(){(new A).entries().next()})))){b=t((function(t,n){v(s(t,b,e),{type:e,collection:new A}),null!=n&&u(n,t[S],{that:t,AS_ENTRIES:h})}));var T=y(e);p(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(e){var t="add"==e||"set"==e;!(e in E)||m&&"clear"==e||c(b.prototype,e,(function(n,r){var i=T(this).collection;if(!t&&m&&!d(n))return"get"==e&&void 0;var o=i[e](0===n?0:n,r);return t?this:o}))})),m||l(b.prototype,"size",{configurable:!0,get:function(){return T(this).collection.size}})}else b=n.getConstructor(t,e,h,S),o.REQUIRED=!0;return f(b,e,!1,!0),O[e]=b,r({global:!0,forced:!0},O),m||n.setStrong(b,e,h),b}},116:function(e,t,n){var r=n(28);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},117:function(e,t,n){"use strict";var r=n(63),i=n(62);e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},118:function(e,t,n){var r=n(25),i=n(119),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},119:function(e,t,n){var r=n(59),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},12:function(e,t,n){var r=n(110);e.exports=r},120:function(e,t,n){"use strict";var r=n(34).f,i=n(87),o=n(125),a=n(26),c=n(86),u=n(18),s=n(66),d=n(130),f=n(33),l=n(83).fastKey,p=n(54),g=p.set,b=p.getterFor;e.exports={getConstructor:function(e,t,n,s){var d=e((function(e,r){c(e,d,t),g(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),f||(e.size=0),null!=r&&u(r,e[s],{that:e,AS_ENTRIES:n})})),p=b(t),v=function(e,t,n){var r,i,o=p(e),a=y(e,t);return a?a.value=n:(o.last=a={index:i=l(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),f?o.size++:e.size++,"F"!==i&&(o.index[i]=a)),e},y=function(e,t){var n,r=p(e),i=l(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(d.prototype,{clear:function(){for(var e=p(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,n=p(t),r=y(t,e);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:t.size--}return!!r},forEach:function(e){for(var t,n=p(this),r=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!y(this,e)}}),o(d.prototype,n?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&r(d.prototype,"size",{get:function(){return p(this).size}}),d},setStrong:function(e,t,n){var r=t+" Iterator",i=b(t),o=b(r);s(e,t,(function(e,t){g(this,{type:r,target:e,state:i(e),kind:t,last:void 0})}),(function(){for(var e=o(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(t)}}},121:function(e,t,n){var r=n(33),i=n(34),o=n(15),a=n(122);e.exports=r?Object.defineProperties:function(e,t){o(e);for(var n,r=a(t),c=r.length,u=0;c>u;)i.f(e,n=r[u++],t[n]);return e}},122:function(e,t,n){var r=n(123),i=n(88);e.exports=Object.keys||function(e){return r(e,i)}},123:function(e,t,n){var r=n(30),i=n(45),o=n(81).indexOf,a=n(53);e.exports=function(e,t){var n,c=i(e),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;t.length>u;)r(c,n=t[u++])&&(~o(s,n)||s.push(n));return s}},124:function(e,t,n){var r=n(27);e.exports=r("document","documentElement")},125:function(e,t,n){var r=n(89);e.exports=function(e,t,n){for(var i in t)n&&n.unsafe&&e[i]?e[i]=t[i]:r(e,i,t[i],n);return e}},126:function(e,t,n){"use strict";var r=n(90).IteratorPrototype,i=n(87),o=n(44),a=n(64),c=n(37),u=function(){return this};e.exports=function(e,t,n){var s=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),a(e,s,!1,!0),c[s]=u,e}},127:function(e,t,n){var r=n(28);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},128:function(e,t,n){var r=n(15),i=n(129);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},129:function(e,t,n){var r=n(29);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},13:function(e,t,n){"use strict";t.a=u,t.c=function(e){return!(!e||!e.url)},t.b=function(e,t){e.render(t)};var r=n(40),i=n(0),o=n(11),a=n.n(o),c="outstream";function u(e){var t=this,n=e.url,o=e.config,a=e.id,u=e.callback,d=e.loaded,f=e.adUnitCode;this.url=n,this.config=o,this.handlers={},this.id=a,this.loaded=d,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):i.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=u||function(){t.loaded=!0,t.process()},this.render=function(){var e=this,t=arguments,o=function(){e._render?e._render.apply(e,t):i.logWarn("No render function was provided, please use .setRender on the renderer")};s(f)?(i.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(f)),o()):(this.cmd.unshift(o),Object(r.a)(n,c,this.callback))}.bind(this)}function s(e){var t=pbjs.adUnits,n=a()(t,(function(t){return t.code===e}));if(!n)return!1;var r=i.deepAccess(n,"renderer"),o=!!(r&&r.url&&r.render),c=i.deepAccess(n,"mediaTypes.video.renderer"),u=!!(c&&c.url&&c.render);return!!(o&&!0!==r.backupOnly||u&&!0!==c.backupOnly)}u.install=function(e){return new u({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},u.prototype.getConfig=function(){return this.config},u.prototype.setRender=function(e){this._render=e},u.prototype.setEventHandlers=function(e){this.handlers=e},u.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),i.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(n))},u.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){i.logError("Error processing Renderer command: ",e)}}},130:function(e,t,n){"use strict";var r=n(27),i=n(34),o=n(23),a=n(33),c=o("species");e.exports=function(e){var t=r(e),n=i.f;a&&t&&!t[c]&&n(t,c,{configurable:!0,get:function(){return this}})}},131:function(e,t){},132:function(e,t,n){var r=n(58),i=n(47),o=function(e){return function(t,n){var o,a,c=String(i(t)),u=r(n),s=c.length;return u<0||u>=s?e?"":void 0:(o=c.charCodeAt(u))<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?e?c.charAt(u):o:e?c.slice(u,u+2):a-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},133:function(e,t,n){n(134);var r=n(135),i=n(25),o=n(62),a=n(31),c=n(37),u=n(23)("toStringTag");for(var s in r){var d=i[s],f=d&&d.prototype;f&&o(f)!==u&&a(f,u,s),c[s]=c.Array}},134:function(e,t,n){"use strict";var r=n(45),i=n(51),o=n(37),a=n(54),c=n(66),u="Array Iterator",s=a.set,d=a.getterFor(u);e.exports=c(Array,"Array",(function(e,t){s(this,{type:u,target:r(e),index:0,kind:t})}),(function(){var e=d(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},135:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},136:function(e,t,n){n(14)({target:"Set",stat:!0},{from:n(137)})},137:function(e,t,n){"use strict";var r=n(21),i=n(26),o=n(18);e.exports=function(e){var t,n,a,c,u=arguments.length,s=u>1?arguments[1]:void 0;return r(this),(t=void 0!==s)&&r(s),null==e?new this:(n=[],t?(a=0,c=i(s,u>2?arguments[2]:void 0,2),o(e,(function(e){n.push(c(e,a++))}))):o(e,n.push,{that:n}),new this(n))}},138:function(e,t,n){n(14)({target:"Set",stat:!0},{of:n(139)})},139:function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},14:function(e,t,n){"use strict";var r=n(25),i=n(101).f,o=n(103),a=n(49),c=n(26),u=n(31),s=n(30),d=function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t};e.exports=function(e,t){var n,f,l,p,g,b,v,y,h=e.target,m=e.global,S=e.stat,A=e.proto,E=m?r:S?r[h]:(r[h]||{}).prototype,O=m?a:a[h]||(a[h]={}),T=O.prototype;for(l in t)n=!o(m?l:h+(S?".":"#")+l,e.forced)&&E&&s(E,l),g=O[l],n&&(b=e.noTargetGet?(y=i(E,l))&&y.value:E[l]),p=n&&b?b:t[l],n&&typeof g==typeof p||(v=e.bind&&n?c(p,r):e.wrap&&n?d(p):A&&"function"==typeof p?c(Function.call,p):p,(e.sham||p&&p.sham||g&&g.sham)&&u(v,"sham",!0),O[l]=v,A&&(s(a,f=h+"Prototype")||u(a,f,{}),a[f][l]=p,e.real&&T&&!T[l]&&u(T,l,p)))}},140:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(141);r({target:"Set",proto:!0,real:!0,forced:i},{addAll:function(){return o.apply(this,arguments)}})},141:function(e,t,n){"use strict";var r=n(15),i=n(21);e.exports=function(){for(var e=r(this),t=i(e.add),n=0,o=arguments.length;n<o;n++)t.call(e,arguments[n]);return e}},142:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(143);r({target:"Set",proto:!0,real:!0,forced:i},{deleteAll:function(){return o.apply(this,arguments)}})},143:function(e,t,n){"use strict";var r=n(15),i=n(21);e.exports=function(){for(var e,t=r(this),n=i(t.delete),o=!0,a=0,c=arguments.length;a<c;a++)e=n.call(t,arguments[a]),o=o&&e;return!!o}},144:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(26),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{every:function(e){var t=o(this),n=c(t),r=a(e,arguments.length>1?arguments[1]:void 0,3);return!u(n,(function(e,n){if(!r(e,e,t))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},145:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{difference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete);return s(e,(function(e){r.call(n,e)})),n}})},146:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(26),s=n(38),d=n(35),f=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{filter:function(e){var t=a(this),n=d(t),r=u(e,arguments.length>1?arguments[1]:void 0,3),i=new(s(t,o("Set"))),l=c(i.add);return f(n,(function(e){r(e,e,t)&&l.call(i,e)}),{IS_ITERATOR:!0}),i}})},147:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(26),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{find:function(e){var t=o(this),n=c(t),r=a(e,arguments.length>1?arguments[1]:void 0,3);return u(n,(function(e,n){if(r(e,e,t))return n(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},148:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{intersection:function(e){var t=a(this),n=new(u(t,o("Set"))),r=c(t.has),i=c(n.add);return s(e,(function(e){r.call(t,e)&&i.call(n,e)})),n}})},149:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(21),c=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{isDisjointFrom:function(e){var t=o(this),n=a(t.has);return!c(e,(function(e,r){if(!0===n.call(t,e))return r()}),{INTERRUPTED:!0}).stopped}})},15:function(e,t,n){var r=n(29);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},150:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(93),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{isSubsetOf:function(e){var t=u(this),n=a(e),r=n.has;return"function"!=typeof r&&(n=new(o("Set"))(e),r=c(n.has)),!s(t,(function(e,t){if(!1===r.call(n,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},151:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(21),c=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{isSupersetOf:function(e){var t=o(this),n=a(t.has);return!c(e,(function(e,r){if(!1===n.call(t,e))return r()}),{INTERRUPTED:!0}).stopped}})},152:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(35),c=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{join:function(e){var t=o(this),n=a(t),r=void 0===e?",":String(e),i=[];return c(n,i.push,{that:i,IS_ITERATOR:!0}),i.join(r)}})},153:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(26),s=n(38),d=n(35),f=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{map:function(e){var t=a(this),n=d(t),r=u(e,arguments.length>1?arguments[1]:void 0,3),i=new(s(t,o("Set"))),l=c(i.add);return f(n,(function(e){l.call(i,r(e,e,t))}),{IS_ITERATOR:!0}),i}})},154:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(21),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{reduce:function(e){var t=o(this),n=c(t),r=arguments.length<2,i=r?void 0:arguments[1];if(a(e),u(n,(function(n){r?(r=!1,i=n):i=e(i,n,n,t)}),{IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty set with no initial value");return i}})},155:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(26),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{some:function(e){var t=o(this),n=c(t),r=a(e,arguments.length>1?arguments[1]:void 0,3);return u(n,(function(e,n){if(r(e,e,t))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},156:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{symmetricDifference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete),i=c(n.add);return s(e,(function(e){r.call(n,e)||i.call(n,e)})),n}})},157:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{union:function(e){var t=a(this),n=new(u(t,o("Set")))(t);return s(e,c(n.add),{that:n}),n}})},158:function(e,t,n){n(92),n(159);var r=n(49);e.exports=r.Array.from},159:function(e,t,n){var r=n(14),i=n(160);r({target:"Array",stat:!0,forced:!n(163)((function(e){Array.from(e)}))},{from:i})},16:function(e,t,n){"use strict";t.a=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},160:function(e,t,n){"use strict";var r=n(26),i=n(48),o=n(161),a=n(84),c=n(50),u=n(162),s=n(61);e.exports=function(e){var t,n,d,f,l,p,g=i(e),b="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,h=void 0!==y,m=s(g),S=0;if(h&&(y=r(y,v>2?arguments[2]:void 0,2)),null==m||b==Array&&a(m))for(n=new b(t=c(g.length));t>S;S++)p=h?y(g[S],S):g[S],u(n,S,p);else for(l=(f=m.call(g)).next,n=new b;!(d=l.call(f)).done;S++)p=h?o(f,y,[d.value,S],!0):d.value,u(n,S,p);return n.length=S,n}},161:function(e,t,n){var r=n(15),i=n(85);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){throw i(e),t}}},162:function(e,t,n){"use strict";var r=n(56),i=n(34),o=n(44);e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},163:function(e,t,n){var r=n(23)("iterator"),i=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){i=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){}return n}},164:function(e,t){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}},165:function(e,t,n){"use strict";t.a=function(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}},166:function(e,t,n){"use strict";t.a=function(e,t,n){t.split&&(t=t.split("."));for(var r,i=0,o=t.length,a=e;i<o;++i)r=a[t[i]],a=a[t[i]]=i===o-1?n:null!=r?r:!~t[i+1].indexOf(".")&&+t[i+1]>-1?[]:{}}},167:function(e,t){ c.SYNC=1,c.ASYNC=2,c.QUEUE=4;var n=Object.freeze({useProxy:!0,ready:0}),r=new WeakMap,i="2,1,0"===[1].reduce((function(e,t,n){return[e,t,n]}),2).toString()?Array.prototype.reduce:function(e,t){var n,r=Object(this),i=r.length>>>0,o=0;if(t)n=t;else{for(;o<i&&!(o in r);)o++;n=r[o++]}for(;o<i;)o in r&&(n=e(n,r[o],o,r)),o++;return n};function o(e,t){return Array.prototype.slice.call(e,t)}var a=Object.assign||function(e){return i.call(o(arguments,1),(function(e,t){return t&&Object.keys(t).forEach((function(n){e[n]=t[n]})),e}),e)};function c(e){var t,u={},s=[];function d(e,t){return"function"==typeof e?g.call(null,"sync",e,t):"string"==typeof e&&"function"==typeof t?g.apply(null,arguments):"object"==typeof e?f.apply(null,arguments):void 0}function f(e,t,n){var r=!0;void 0===t&&(t=Object.getOwnPropertyNames(e),r=!1);var i={},o=["constructor"];do{(t=t.filter((function(t){return!("function"!=typeof e[t]||-1!==o.indexOf(t)||t.match(/^_/))}))).forEach((function(t){var r=t.split(":"),o=r[0],a=r[1]||"sync";if(!i[o]){var c=e[o];i[o]=e[o]=g(a,c,n?[n,o]:void 0)}})),e=Object.getPrototypeOf(e)}while(r&&e);return i}function l(e){var n=Array.isArray(e)?e:e.split(".");return i.call(n,(function(r,i,o){var a=r[i],c=!1;return a||(o===n.length-1?(t||s.push((function(){c||console.warn("fun-hooks: referenced '"+e+"' but it was never created")})),r[i]=p((function(e){r[i]=e,c=!0}))):r[i]={})}),u)}function p(e){var t=[],n=[],i=function(){},o={before:function(e,n){return u.call(this,t,"before",e,n)},after:function(e,t){return u.call(this,n,"after",e,t)},getHooks:function(e){var r=t.concat(n);"object"==typeof e&&(r=r.filter((function(t){return Object.keys(e).every((function(n){return t[n]===e[n]}))})));try{a(r,{remove:function(){return r.forEach((function(e){e.remove()})),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return r},removeAll:function(){return this.getHooks().remove()}},c={install:function(r,o,a){this.type=r,i=a,a(t,n),e&&e(o)}};return r.set(o.after,c),o;function u(e,r,o,a){var c={hook:o,type:r,priority:a||10,remove:function(){var r=e.indexOf(c);-1!==r&&(e.splice(r,1),i(t,n))}};return e.push(c),e.sort((function(e,t){return t.priority-e.priority})),i(t,n),this}}function g(n,i,u){var d=i.after&&r.get(i.after);if(d){if(d.type!==n)throw"fun-hooks: recreated hookable with different type";return i}var f,g,b=u?l(u):p(),v={get:function(e,t){return b[t]||Reflect.get.apply(Reflect,arguments)}};return t||s.push(y),e.useProxy&&"function"==typeof Proxy&&Proxy.revocable?g=new Proxy(i,v):a(g=function(){return v.apply?v.apply(i,this,o(arguments)):i.apply(this,arguments)},b),r.get(g.after).install(n,g,(function(e,t){var r,i=[];e.length||t.length?(e.forEach(a),r=i.push(void 0)-1,t.forEach(a),f=function(e,t,a){var c,u=0,s="async"===n&&"function"==typeof a[a.length-1]&&a.pop();function d(e){"sync"===n?c=e:s&&s.apply(null,arguments)}function f(e){if(i[u]){var r=o(arguments);return f.bail=d,r.unshift(f),i[u++].apply(t,r)}"sync"===n?c=e:s&&s.apply(null,arguments)}return i[r]=function(){var r=o(arguments,1);"async"===n&&s&&(delete f.bail,r.push(f));var i=e.apply(t,r);"sync"===n&&f(i)},f.apply(null,a),c}):f=void 0;function a(e){i.push(e.hook)}y()})),g;function y(){!t&&("sync"!==n||e.ready&c.SYNC)&&("async"!==n||e.ready&c.ASYNC)?"sync"!==n&&e.ready&c.QUEUE?v.apply=function(){var e=arguments;s.push((function(){g.apply(e[1],e[2])}))}:v.apply=function(){throw"fun-hooks: hooked function not ready"}:v.apply=f}}return(e=a({},n,e)).ready?d.ready=function(){t=!0,function(e){for(var t;t=e.shift();)t()}(s)}:t=!0,d.get=l,d}e.exports=c},17:function(e,t){e.exports=!0},18:function(e,t,n){var r=n(15),i=n(84),o=n(50),a=n(26),c=n(61),u=n(85),s=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var d,f,l,p,g,b,v,y=n&&n.that,h=!(!n||!n.AS_ENTRIES),m=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),A=a(t,y,1+h+S),E=function(e){return d&&u(d),new s(!0,e)},O=function(e){return h?(r(e),S?A(e[0],e[1],E):A(e[0],e[1])):S?A(e,E):A(e)};if(m)d=e;else{if("function"!=typeof(f=c(e)))throw TypeError("Target is not iterable");if(i(f)){for(l=0,p=o(e.length);p>l;l++)if((g=O(e[l]))&&g instanceof s)return g;return new s(!1)}d=f.call(e)}for(b=d.next;!(v=b.call(d)).done;){try{g=O(v.value)}catch(e){throw u(d),e}if("object"==typeof g&&g&&g instanceof s)return g}return new s(!1)}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3),i=n(0);var o=function(e){function t(e){var t=r.b.getConfig("pageUrl");if(t)return t;try{var n=e.querySelector("link[rel='canonical']");if(null!==n)return n.href}catch(e){}return null}return function(){var n,o,a,c=[],u=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(e),s=r.b.getConfig("maxNestedIframes"),d=!1,f=0,l=!1,p=!1;do{var g=n,b=p,v=void 0,y=!1,h=null;p=!1,n=n?n.parent:e;try{v=n.location.href||null}catch(e){y=!0}if(y)if(b){var m=g.context;try{o=h=m.sourceUrl,l=!0,n===e.top&&(d=!0),m.canonicalUrl&&(a=m.canonicalUrl)}catch(e){}}else{Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");try{var S=g.document.referrer;S&&(h=S,n===e.top&&(d=!0))}catch(e){}!h&&u&&u[f-1]&&(h=u[f-1]),h&&!l&&(o=h)}else{if(v&&(o=h=v,l=!1,n===e.top)){d=!0;var A=t(n.document);A&&(a=A)}n.context&&n.context.sourceUrl&&(p=!0)}c.push(h),f++}while(n!==e.top&&f<s);return c.reverse(),{referer:o||null,reachedTop:d,isAmp:l,numIframes:f-1,stack:c,canonicalUrl:a||null}}}(window)},2:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r="native",i="video",o="banner",a="adpod"},21:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},210:function(e,t,n){n(211);var r=n(52);e.exports=r("Array","findIndex")},211:function(e,t,n){"use strict";var r=n(14),i=n(57).findIndex,o=n(51),a="findIndex",c=!0;a in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},216:function(e,t,n){"use strict";t.a=function(){window.addEventListener("message",h,!1)};var r=n(9),i=n.n(r),o=n(36),a=n(5),c=n.n(a),u=n(0),s=n(24),d=n(11),f=n.n(d),l=n(13),p=n(12),g=n.n(p),b=n(3),v=c.a.EVENTS.BID_WON,y=c.a.EVENTS.STALE_RENDER;function h(e){var t=e.message?"message":"data",n={};try{n=JSON.parse(e[t])}catch(e){return}if(n&&n.adId){var r=f()(s.a.getBidsReceived(),(function(e){return e.adId===n.adId}));if(r&&"Prebid Request"===n.message){if(r.status===c.a.BID_STATUS.RENDERED&&(Object(u.logWarn)("Ad id ".concat(r.adId," has been rendered before")),i.a.emit(y,r),Object(u.deepAccess)(b.b.getConfig("auctionOptions"),"suppressStaleRender")))return;!function(e,t){var n=e.adId,r=e.ad,i=e.adUrl,o=e.width,a=e.height,c=e.renderer,s=e.cpm;Object(l.c)(c)?Object(l.b)(c,e):n&&(m(e),t.source.postMessage(JSON.stringify({message:"Prebid Response",ad:Object(u.replaceAuctionPrice)(r,s),adUrl:Object(u.replaceAuctionPrice)(i,s),adId:n,width:o,height:a}),t.origin))}(r,e),s.a.addWinningBid(r),i.a.emit(v,r)}if(r&&"Prebid Native"===n.message){if("assetRequest"===n.action){var a=Object(o.d)(n,r);return void e.source.postMessage(JSON.stringify(a),e.origin)}if("allAssetRequest"===n.action){var d=Object(o.c)(n,r);e.source.postMessage(JSON.stringify(d),e.origin)}else"resizeNativeHeight"===n.action&&(r.height=n.height,r.width=n.width,m(r));if("click"===Object(o.b)(n,r))return;s.a.addWinningBid(r),i.a.emit(v,r)}}}function m(e){var t=e.adId,n=e.adUnitCode,r=e.width,i=e.height;["div","iframe"].forEach((function(e){var o=function(e){var r=function(e,t){return Object(u.isGptPubadsDefined)()?function(e){return f()(window.googletag.pubads().getSlots(),(function(t){return f()(t.getTargetingKeys(),(function(n){return g()(t.getTargeting(n),e)}))})).getSlotElementId()}(e):Object(u.isApnGetTagDefined)()?function(e){var t=window.apntag.getTag(e);return t&&t.targetId}(t):t}(t,n),i=document.getElementById(r);return i&&i.querySelector(e)}(e+':not([style*="display: none"])');if(o){var a=o.style;a.width=r+"px",a.height=i+"px"}else Object(u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(n,".  Can't resize it to ad's dimensions.  Please review setup."))}))}},217:function(e,t,n){"use strict";t.a=function(e){var t;try{e=e||window.sessionStorage,t=JSON.parse(e.getItem(u))}catch(e){}t&&p(t,!0)};var r,i,o=n(3),a=n(0),c=n(32),u="pbjs:debugging";function s(e){Object(a.logMessage)("DEBUG: "+e)}function d(e){Object(a.logWarn)("DEBUG: "+e)}function f(e){r=y.bind(e),c.c.before(r,5),i=h.bind(e),c.e.before(i,5)}function l(){c.c.getHooks({hook:r}).remove(),c.e.getHooks({hook:i}).remove()}function p(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.b.setConfig({debug:!0}),l(),f(e),s("bidder overrides enabled".concat(t?" from session":""))}function g(e,t,n){return!(!e.bidder||e.bidder===t)||!(!e.adUnitCode||e.adUnitCode===n)}function b(e,t){return Array.isArray(e)&&-1===e.indexOf(t)}function v(e,t,n){return Object.keys(e).filter((function(e){return-1===["adUnitCode","bidder"].indexOf(e)})).reduce((function(t,r){return s("bidder overrides changed '".concat(t.adUnitCode,"/").concat(t.bidderCode,"' ").concat(n,".").concat(r," from '").concat(t[r],".js' to '").concat(e[r],"'")),t[r]=e[r],t}),t)}function y(e,t,n){var r=this;b(r.bidders,n.bidderCode)?d("bidder '".concat(n.bidderCode,"' excluded from auction by bidder overrides")):(Array.isArray(r.bids)&&r.bids.forEach((function(e){g(e,n.bidderCode,t)||v(e,n,"bidder")})),e(t,n))}function h(e,t){var n=this,r=t.filter((function(e){return!b(n.bidders,e.bidderCode)||(d("bidRequest '".concat(e.bidderCode,"' excluded from auction by bidder overrides")),!1)}));Array.isArray(n.bidRequests)&&r.forEach((function(e){n.bidRequests.forEach((function(t){e.bids.forEach((function(n){g(t,e.bidderCode,n.adUnitCode)||v(t,n,"bidRequest")}))}))})),e(r)}function m(e){if(e.enabled){try{window.sessionStorage.setItem(u,JSON.stringify(e))}catch(e){}p(e)}else{l(),s("bidder overrides disabled");try{window.sessionStorage.removeItem(u)}catch(e){}}}o.b.getConfig("debugging",(function(e){return m(e.debugging)}))},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),t.d=function(e,t){var n=Object(r.getBidRequest)(e.requestId,t),i=n&&Object(r.deepAccess)(n,"mediaTypes.video"),o=i&&Object(r.deepAccess)(i,"context");return s(e,n,i,o)},n.d(t,"c",(function(){return s}));n(8);var r=n(0),i=n(3),o=n(12),a=(n.n(o),n(10)),c="outstream",u="instream";var s=Object(a.b)("sync",(function(e,t,n,o){return!t||n&&o!==c?i.b.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):(Object(r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):o!==c||!!(e.renderer||t.renderer||n.renderer)}),"checkVideoBidSetup")},23:function(e,t,n){var r=n(25),i=n(79),o=n(30),a=n(60),c=n(80),u=n(109),s=i("wks"),d=r.Symbol,f=u?d:d&&d.withoutSetter||a;e.exports=function(e){return o(s,e)&&(c||"string"==typeof s[e])||(c&&o(d,e)?s[e]=d[e]:s[e]=f("Symbol."+e)),s[e]}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),i=n(32),o=n(11),a=n.n(o),c=n(5);var u=function(){var e=[],t={};return t.addWinningBid=function(t){var n=a()(e,(function(e){return e.getAuctionId()===t.auctionId}));n?(t.status=c.BID_STATUS.RENDERED,n.addWinningBid(t)):Object(r.logWarn)("Auction not found when adding winning bid")},t.getAllWinningBids=function(){return e.map((function(e){return e.getWinningBids()})).reduce(r.flatten,[])},t.getBidsRequested=function(){return e.map((function(e){return e.getBidRequests()})).reduce(r.flatten,[])},t.getNoBids=function(){return e.map((function(e){return e.getNoBids()})).reduce(r.flatten,[])},t.getBidsReceived=function(){return e.map((function(e){if(e.getAuctionStatus()===i.a)return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e}))},t.getAllBidsForAdUnitCode=function(t){return e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e&&e.adUnitCode===t}))},t.getAdUnits=function(){return e.map((function(e){return e.getAdUnits()})).reduce(r.flatten,[])},t.getAdUnitCodes=function(){return e.map((function(e){return e.getAdUnitCodes()})).reduce(r.flatten,[]).filter(r.uniques)},t.createAuction=function(t){var n=t.adUnits,r=t.adUnitCodes,o=t.callback,a=t.cbTimeout,c=t.labels,u=t.auctionId,s=Object(i.k)({adUnits:n,adUnitCodes:r,callback:o,cbTimeout:a,labels:c,auctionId:u});return function(t){e.push(t)}(s),s},t.findBidByAdId=function(t){return a()(e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]),(function(e){return e.adId===t}))},t.getStandardBidderAdServerTargeting=function(){return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING]},t.setStatusForBids=function(n,r){var i=t.findBidByAdId(n);if(i&&(i.status=r),i&&r===c.BID_STATUS.BID_TARGETING_SET){var o=a()(e,(function(e){return e.getAuctionId()===i.auctionId}));o&&o.setBidTargeting(i)}},t.getLastAuctionId=function(){return e.length&&e[e.length-1].getAuctionId()},t.clearAllAuctions=function(){e.length=0},t}()},25:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(t,n(42))},26:function(e,t,n){var r=n(21);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},27:function(e,t,n){var r=n(49),i=n(25),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},28:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},29:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return I}));var r=n(43),i=n(11),o=n.n(i),a=n(12),c=n.n(a),u=n(82),s=n.n(u),d=n(0),f=["fpd"];function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=n(94),y=n(0),h=n(5),m="TRUE"===y.getParameterByName(h.DEBUG_MODE).toUpperCase(),S=window.location.origin,A="random",E={};E[A]=!0,E.fixed=!0;var O=A,T={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"};var I=function(){var e,t,n,i=[],a=null;function u(){e={};var i={_debug:m,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:3e3,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:S,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_priceGranularity:T.MEDIUM,set priceGranularity(e){c(e)&&("string"==typeof e?this._priceGranularity=a(e)?e:T.MEDIUM:y.isPlainObject(e)&&(this._customPriceBucket=e,this._priceGranularity=T.CUSTOM,y.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(e){var t=this;this._mediaTypePriceGranularity=Object.keys(e).reduce((function(n,r){return c(e[r])?"string"==typeof e?n[r]=a(e[r])?e[r]:t._priceGranularity:y.isPlainObject(e)&&(n[r]=e[r],y.logMessage("Using custom price granularity for ".concat(r))):y.logWarn("Invalid price granularity for media type: ".concat(r)),n}),{})},_sendAllBids:true,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_useBidCache:false,get useBidCache(){return this._useBidCache},set useBidCache(e){this._useBidCache=e},_deviceAccess:true,get deviceAccess(){return this._deviceAccess},set deviceAccess(e){this._deviceAccess=e},_bidderSequence:O,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){E[e]?this._bidderSequence=e:y.logWarn("Invalid order: ".concat(e,". Bidder Sequence was not set."))},_timeoutBuffer:400,get timeoutBuffer(){return this._timeoutBuffer},set timeoutBuffer(e){this._timeoutBuffer=e},_disableAjaxTimeout:false,get disableAjaxTimeout(){return this._disableAjaxTimeout},set disableAjaxTimeout(e){this._disableAjaxTimeout=e},_maxNestedIframes:10,get maxNestedIframes(){return this._maxNestedIframes},set maxNestedIframes(e){this._maxNestedIframes=e},_auctionOptions:{},get auctionOptions(){return this._auctionOptions},set auctionOptions(e){(function(e){if(!y.isPlainObject(e))return y.logWarn("Auction Options must be an object"),!1;for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return y.logWarn("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!y.isArray(e[r]))return y.logWarn("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(y.isStr))return y.logWarn("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!y.isBoolean(e[r]))return y.logWarn("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(e)&&(this._auctionOptions=e)}};function a(e){return o()(Object.keys(T),(function(t){return e===T[t]}))}function c(e){if(!e)return y.logError("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)a(e)||y.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if(y.isPlainObject(e)&&!Object(r.b)(e))return y.logError("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}t&&j(Object.keys(t).reduce((function(e,n){return t[n]!==i[n]&&(e[n]=i[n]||{}),e}),{})),t=i,n={}}function h(){if(a&&n&&y.isPlainObject(n[a])){var e=n[a],r=new s.a(Object.keys(t).concat(Object.keys(e)));return v(r).reduce((function(n,r){return void 0===e[r]?n[r]=t[r]:void 0===t[r]?n[r]=e[r]:y.isPlainObject(e[r])?n[r]=Object(d.mergeDeep)({},t[r],e[r]):n[r]=e[r],n}),{})}return b({},t)}function A(e){var t={};return Object.keys(e).forEach((function(n){var r="context"===n?"site":n;t[r]="site"===r||"user"===r?Object.keys(e[n]).reduce((function(t,r){return"data"===r?y.mergeDeep(t,{ext:{data:e[n][r]}}):y.mergeDeep(t,p({},r,e[n][r])),t}),{}):e[n]})),t}function I(e){var t={};return Object.keys(e).filter((function(e){return"context"===e})).forEach((function(n){Object.keys(e[n]).forEach((function(r){"data"===r?y.mergeDeep(t,{ext:{data:e[n][r]}}):"object"!==g(e[n][r])||Array.isArray(e[n][r])?y.mergeDeep(t,{ext:{data:p({},r.toLowerCase(),e[n][r])}}):Object.keys(e[n][r]).forEach((function(i){y.mergeDeep(t,{ext:{data:p({},r.toLowerCase(),p({},i.toLowerCase(),e[n][r][i]))}})}))}))})),t}function C(e,t){var n=t;if("string"!=typeof e&&(n=e,e="*"),"function"==typeof n){var r={topic:e,callback:n};return i.push(r),function(){i.splice(i.indexOf(r),1)}}y.logError("listener must be a function")}function j(e){var t=Object.keys(e);i.filter((function(e){return c()(t,e.topic)})).forEach((function(t){t.callback(p({},t.topic,e[t.topic]))})),i.filter((function(e){return"*"===e.topic})).forEach((function(t){return t.callback(e)}))}function w(e,t){a=e;try{return t()}finally{_()}}function _(){a=null}return u(),{getCurrentBidder:function(){return a},resetBidder:_,getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?y.deepAccess(h(),e):h()}return C.apply(void 0,arguments)},setConfig:function(n){if(y.isPlainObject(n)){var r=Object.keys(n),i={};r.forEach((function(r){var o="fpd"===r?"ortb2":r,a="fpd"===r?A(n[r]):n[r];y.isPlainObject(e[o])&&y.isPlainObject(a)&&(a=b({},e[o],a)),i[o]=t[o]=a})),j(i)}else y.logError("setConfig options must be an object")},setDefaults:function(n){y.isPlainObject(e)?(b(e,n),b(t,n)):y.logError("defaults must be an object")},resetConfig:u,runWithBidder:w,callbackWithBidder:function(e){return function(t){return function(){if("function"==typeof t){for(var n,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return w(e,(n=y.bind).call.apply(n,[t,this].concat(i)))}y.logWarn("config.callbackWithBidder callback is not a function")}}},setBidderConfig:function(e){try{!function(e){if(!y.isPlainObject(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!y.isPlainObject(e.config))throw"setBidderConfig bidder options must contain a config object"}(e),e.bidders.forEach((function(t){n[t]||(n[t]={}),Object.keys(e.config).forEach((function(r){var i="fpd"===r?"ortb2":r,o="fpd"===r?A(e.config[r]):e.config[r];y.isPlainObject(o)?n[t][i]=b({},n[t][i]||{},o):n[t][i]=o}))}))}catch(e){y.logError(e)}},getBidderConfig:function(){return n},convertAdUnitFpd:function(e){var t=[];return e.forEach((function(e){e.fpd?(e.ortb2Imp?y.mergeDeep(e.ortb2Imp,I(e.fpd)):e.ortb2Imp=I(e.fpd),t.push(function(e){e.fpd;return l(e,f)}(e))):t.push(e)})),t},getLegacyFpd:function(e){if("object"===g(e)){var t={};return Object.keys(e).forEach((function(n){var r="site"===n?"context":n;t[r]="context"===r||"user"===r?Object.keys(e[n]).filter((function(e){return"data"!==e})).reduce((function(t,r){return"ext"===r?y.mergeDeep(t,e[n][r]):y.mergeDeep(t,p({},r,e[n][r])),t}),{}):e[n]})),t}},getLegacyImpFpd:function(e){if("object"===g(e)){var t={};return y.deepAccess(e,"ext.data")&&Object.keys(e.ext.data).forEach((function(n){"pbadslot"===n?y.mergeDeep(t,{context:{pbAdSlot:e.ext.data[n]}}):"adserver"===n?y.mergeDeep(t,{context:{adServer:e.ext.data[n]}}):y.mergeDeep(t,{context:{data:p({},n,e.ext.data[n])}})})),t}}}}()},30:function(e,t,n){var r=n(48),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},31:function(e,t,n){var r=n(33),i=n(34),o=n(44);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return I})),t.k=function(e){var t,n,o,a,s=e.adUnits,d=e.adUnitCodes,f=e.callback,p=e.cbTimeout,v=e.labels,B=e.auctionId,k=s,P=v,M=d,q=[],W=[],L=[],F=B||S.generateUUID(),z=f,V=p,H=[],K=new Set;function J(){return{auctionId:F,timestamp:t,auctionEnd:n,auctionStatus:o,adUnits:k,adUnitCodes:M,labels:P,bidderRequests:q,noBids:L,bidsReceived:W,winningBids:H,timeout:V}}function Y(e,t){if(t&&clearTimeout(a),void 0===n){var i=[];e&&(S.logMessage("Auction ".concat(F," timedOut")),c=K,(i=q.map((function(e){return(e.bids||[]).filter((function(e){return!c.has(e.bidder)}))})).reduce(r.flatten,[]).map((function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}}))).length&&E.emit(O.EVENTS.BID_TIMEOUT,i)),o=I,n=Date.now(),E.emit(O.EVENTS.AUCTION_END,J()),U(k,(function(){try{if(null!=z){var t=M,n=W.filter(S.bind.call(r.adUnitsFilter,this,t)).reduce(G,{});z.apply(pbjs,[n,e,F]),z=null}}catch(e){S.logError("Error executing bidsBackHandler",null,e)}finally{i.length&&A.callTimedOutBidders(s,i,V);var o=u.b.getConfig("userSync")||{};o.enableOverride||m(o.syncDelay)}}))}var c}function Q(){u.b.resetBidder(),S.logInfo("Bids Received for Auction with id: ".concat(F),W),o=I,Y(!1,!0)}function $(e){K.add(e)}function X(e){var t=this;e.forEach((function(e){var t;t=e,q=q.concat(t)}));var n={},s={bidRequests:e,run:function(){var s,p;s=Y.bind(null,!0),p=setTimeout(s,V),a=p,o=T,E.emit(O.EVENTS.AUCTION_INIT,J());var v=function(e,t){var n=0,o=!1,a=new Set,s={};function d(){n--,o&&0===n&&e()}function f(e,o){var a=this;s[o.requestId]=!0,n++;var f=function(e){var t=e.adUnitCode,n=e.bid,o=e.bidderRequest,a=e.auctionId,s=o.start,d=h({},n,{auctionId:a,responseTimestamp:Object(r.timestamp)(),requestTimestamp:s,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});d.timeToRespond=d.responseTimestamp-d.requestTimestamp,E.emit(O.EVENTS.BID_ADJUSTMENT,d);var f=o.bids&&l()(o.bids,(function(e){return e.adUnitCode==t&&e.bidId==d.requestId})),p=f&&f.renderer,g=d.mediaType,b=f&&f.mediaTypes&&f.mediaTypes[g],v=b&&b.renderer,m=null;v&&v.url&&v.render&&(!0!==v.backupOnly||!n.renderer)?m=v:p&&p.url&&p.render&&(!0!==p.backupOnly||!n.renderer)&&(m=p);m&&(d.renderer=c.a.install({url:m.url}),d.renderer.setRender(m.render));var S=N(n.mediaType,f,u.b.getConfig("mediaTypePriceGranularity")),A=Object(i.a)(d.cpm,"object"===y(S)?S:u.b.getConfig("customPriceBucket"),u.b.getConfig("currency.granularityMultiplier"));return d.pbLg=A.low,d.pbMg=A.med,d.pbHg=A.high,d.pbAg=A.auto,d.pbDg=A.dense,d.pbCg=A.custom,d}({adUnitCode:e,bid:o,bidderRequest:a,auctionId:t.getAuctionId()});"video"===f.mediaType?function(e,t,n,i){var o=!0,a=Object(r.getBidRequest)(t.originalRequestId||t.requestId,[n]),c=a&&Object(r.deepAccess)(a,"mediaTypes.video"),s=c&&Object(r.deepAccess)(c,"context");u.b.getConfig("cache.url")&&s!==b.b&&(!t.videoCacheKey||u.b.getConfig("cache.ignoreBidderCacheKey")?(o=!1,D(e,t,i,a)):t.vastUrl||(S.logError("videoCacheKey specified but not required vastUrl for video bid"),o=!1));o&&(x(e,t),i())}(t,f,a,d):(x(t,f),d())}function p(){var r=this,i=t.getBidRequests(),c=u.b.getConfig("auctionOptions");if(a.add(r),c&&!S.isEmpty(c)){var d=c.secondaryBidders;d&&!i.every((function(e){return g()(d,e.bidderCode)}))&&(i=i.filter((function(e){return!g()(d,e.bidderCode)})))}o=i.every((function(e){return a.has(e)})),r.bids.forEach((function(e){s[e.bidId]||(t.addNoBid(e),E.emit(O.EVENTS.NO_BID,e))})),o&&0===n&&e()}return{addBidResponse:f,adapterDone:p}}(Q,t);A.callBids(k,e,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];_.apply({dispatch:v.addBidResponse,bidderRequest:this},t)}),v.adapterDone,{request:function(e,t){f(C,t),f(n,e),j[e]||(j[e]={SRA:!0,origin:t}),n[e]>1&&(j[e].SRA=!1)},done:function(e){C[e]--,w[0]&&d(w[0])&&w.shift()}},V,$)}};function d(e){var t=!0,n=u.b.getConfig("maxRequestsPerOrigin")||4;return e.bidRequests.some((function(e){var r=1,i=void 0!==e.src&&e.src===O.S2S.SRC?"s2s":e.bidderCode;return j[i]&&(!1===j[i].SRA&&(r=Math.min(e.bids.length,n)),C[j[i].origin]+r>n&&(t=!1)),!t})),t&&e.run(),t}function f(e,t){void 0===e[t]?e[t]=1:e[t]++}d(s)||(S.logWarn("queueing auction due to limited endpoint capacity"),w.push(s))}return{addBidReceived:function(e){W=W.concat(e)},addNoBid:function(e){L=L.concat(e)},executeCallback:Y,callBids:function(){o="started",t=Date.now();var e=A.makeBidRequests(k,t,F,V,P);S.logInfo("Bids Requested for Auction with id: ".concat(F),e),e.length<1?(S.logWarn("No valid bid requests returned for auction"),Q()):R.call({dispatch:X,context:this},e)},addWinningBid:function(e){H=H.concat(e),A.callBidWonBidder(e.bidder,e,s)},setBidTargeting:function(e){A.callSetTargetingBidder(e.bidder,e)},getWinningBids:function(){return H},getTimeout:function(){return V},getAuctionId:function(){return F},getAuctionStatus:function(){return o},getAdUnits:function(){return k},getAdUnitCodes:function(){return M},getBidRequests:function(){return q},getBidsReceived:function(){return W},getNoBids:function(){return L}}},n.d(t,"c",(function(){return _})),n.d(t,"e",(function(){return R})),t.g=B,t.d=x,n.d(t,"f",(function(){return D})),n.d(t,"i",(function(){return k})),n.d(t,"h",(function(){return P})),t.j=M;var r=n(0),i=n(43),o=n(36),a=n(96),c=n(13),u=n(3),s=n(55),d=n(10),f=n(11),l=n.n(f),p=n(12),g=n.n(p),b=n(22),v=n(2);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=s.a.syncUsers,S=n(0),A=n(8).default,E=n(9),O=n(5),T="inProgress",I="completed";E.on(O.EVENTS.BID_ADJUSTMENT,(function(e){!function(e){var t,n=e.bidderCode,r=e.cpm;if(pbjs.bidderSettings&&(n&&pbjs.bidderSettings[n]&&"function"==typeof pbjs.bidderSettings[n].bidCpmAdjustment?t=pbjs.bidderSettings[n].bidCpmAdjustment:pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(t=pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),t))try{r=t(e.cpm,h({},e))}catch(e){S.logError("Error during bid adjustment","bidmanager.js",e)}r>=0&&(e.cpm=r)}(e)}));var C={},j={},w=[];var _=Object(d.b)("async",(function(e,t){this.dispatch.call(this.bidderRequest,e,t)}),"addBidResponse"),R=Object(d.b)("sync",(function(e){this.dispatch.call(this.context,e)}),"addBidderRequests"),U=Object(d.b)("async",(function(e,t){t&&t()}),"bidsBackCallback");function B(e,t){t.timeToRespond>e.getTimeout()+u.b.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function x(e,t){var n=e.getBidRequests(),r=l()(n,(function(e){return e.bidderCode===t.bidderCode}));!function(e,t){var n;if(e.bidderCode&&(e.cpm>0||e.dealId)){var r=l()(t.bids,(function(t){return t.adUnitCode===e.adUnitCode}));n=function(e,t,n){if(!t)return{};var r={},i=pbjs.bidderSettings;if(i){q(r,M(t.mediaType,e,n),t),e&&i[e]&&i[e][O.JSON_MAPPING.ADSERVER_TARGETING]&&(q(r,i[e],t),t.sendStandardTargeting=i[e].sendStandardTargeting)}t.native&&(r=h({},r,Object(o.e)(t,n)));return r}(e.bidderCode,e,r)}e.adserverTargeting=h(e.adserverTargeting||{},n)}(t,r),E.emit(O.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),B(e,t)}var D=Object(d.b)("async",(function(e,t,n,r){Object(a.b)([t],(function(r,i){r?(S.logWarn("Failed to save to the video cache: ".concat(r,". Video bid must be discarded.")),B(e,t)):""===i[0].uuid?(S.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),B(e,t)):(t.videoCacheKey=i[0].uuid,t.vastUrl||(t.vastUrl=Object(a.a)(t.videoCacheKey)),x(e,t),n())}),r)}),"callPrebidCache");function N(e,t,n){if(e&&n){if(e===v.d){var i=Object(r.deepAccess)(t,"mediaTypes.".concat(v.d,".context"),"instream");if(n["".concat(v.d,"-").concat(i)])return n["".concat(v.d,"-").concat(i)]}return n[e]}}var k=function(e,t){var n=N(e,t,u.b.getConfig("mediaTypePriceGranularity"));return"string"==typeof e&&n?"string"==typeof n?n:"custom":u.b.getConfig("priceGranularity")},P=function(e){return function(t){return e===O.GRANULARITY_OPTIONS.AUTO?t.pbAg:e===O.GRANULARITY_OPTIONS.DENSE?t.pbDg:e===O.GRANULARITY_OPTIONS.LOW?t.pbLg:e===O.GRANULARITY_OPTIONS.MEDIUM?t.pbMg:e===O.GRANULARITY_OPTIONS.HIGH?t.pbHg:e===O.GRANULARITY_OPTIONS.CUSTOM?t.pbCg:void 0}};function M(e,t,n){function i(e,t){return{key:e,val:"function"==typeof t?function(e){return t(e)}:function(e){return Object(r.getValue)(e,t)}}}var o=O.TARGETING_KEYS,a=k(e,n),c=pbjs.bidderSettings;if(c[O.JSON_MAPPING.BD_SETTING_STANDARD]||(c[O.JSON_MAPPING.BD_SETTING_STANDARD]={}),c[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING]||(c[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING]=[i(o.BIDDER,"bidderCode"),i(o.AD_ID,"adId"),i(o.PRICE_BUCKET,P(a)),i(o.SIZE,"size"),i(o.DEAL,"dealId"),i(o.SOURCE,"source"),i(o.FORMAT,"mediaType"),i(o.ADOMAIN,(function(e){return e.meta&&e.meta.advertiserDomains&&e.meta.advertiserDomains.length>0?e.meta.advertiserDomains[0]:""}))]),"video"===e){var s=c[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING];if([o.UUID,o.CACHE_ID].forEach((function(e){void 0===l()(s,(function(t){return t.key===e}))&&s.push(i(e,"videoCacheKey"))})),u.b.getConfig("cache.url")&&(!t||!1!==S.deepAccess(c,"".concat(t,".sendStandardTargeting")))){var d=Object(r.parseUrl)(u.b.getConfig("cache.url"));void 0===l()(s,(function(e){return e.key===o.CACHE_HOST}))&&s.push(i(o.CACHE_HOST,(function(e){return S.deepAccess(e,"adserverTargeting.".concat(o.CACHE_HOST))?e.adserverTargeting[o.CACHE_HOST]:d.hostname})))}}return c[O.JSON_MAPPING.BD_SETTING_STANDARD]}function q(e,t,n){var r=t[O.JSON_MAPPING.ADSERVER_TARGETING];return n.size=n.getSize(),S._each(r,(function(r){var i=r.key,o=r.val;if(e[i]&&S.logWarn("The key: "+i+" is getting ovewritten"),S.isFn(o))try{o=o(n)}catch(e){S.logError("bidmanager","ERROR",e)}(void 0===t.suppressEmptyKeys||!0!==t.suppressEmptyKeys)&&i!==O.TARGETING_KEYS.DEAL||!S.isEmptyStr(o)&&null!=o?e[i]=o:S.logInfo("suppressing empty key '"+i+"' from adserver targeting")})),e}function G(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},33:function(e,t,n){var r=n(28);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},332:function(e,t,n){n(333);var r=n(52);e.exports=r("String","includes")},333:function(e,t,n){"use strict";var r=n(14),i=n(334),o=n(47);r({target:"String",proto:!0,forced:!n(336)("includes")},{includes:function(e){return!!~String(o(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},334:function(e,t,n){var r=n(335);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},335:function(e,t,n){var r=n(29),i=n(46),o=n(23)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},336:function(e,t,n){var r=n(23)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(e){}}return!1}},34:function(e,t,n){var r=n(33),i=n(77),o=n(15),a=n(56),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},35:function(e,t,n){var r=n(17),i=n(93);e.exports=r?i:function(e){return Set.prototype.values.call(e)}},36:function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return l})),t.h=function(e){if(e&&e.type&&function(e){if(!e||!o()(Object.keys(p),e))return Object(r.logError)("".concat(e," nativeParam is not supported")),!1;return!0}(e.type))return p[e.type];return e},t.g=function(e,t){var n=Object(r.getBidRequest)(e.requestId,t);if(!n)return!1;if(!Object(r.deepAccess)(e,"native.clickUrl"))return!1;var i=n.nativeParams;if(!i)return!0;var a=Object.keys(i).filter((function(e){return i[e].required})),c=Object.keys(e.native).filter((function(t){return e.native[t]}));return a.every((function(e){return o()(c,e)}))},t.b=function(e,t){var n;"click"===e.action?n=t.native&&t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&Object(r.insertHtmlIntoIframe)(t.native.javascriptTrackers));return(n||[]).forEach(r.triggerPixel),e.action},t.e=function(e,t){var n={};Object(r.deepAccess)(t,"nativeParams.rendererUrl")?e.native.rendererUrl=g(t.nativeParams.rendererUrl):Object(r.deepAccess)(t,"nativeParams.adTemplate")&&(e.native.adTemplate=g(t.nativeParams.adTemplate));var i=!1!==Object(r.deepAccess)(t,"nativeParams.sendTargetingKeys"),o=function(e){var t={};Object(r.deepAccess)(e,"nativeParams.ext")&&Object.keys(e.nativeParams.ext).forEach((function(e){t[e]="hb_native_".concat(e)}));return u(u({},d.NATIVE_KEYS),t)}(t),a=u(u({},e.native),e.native.ext);return delete a.ext,Object.keys(a).forEach((function(a){var c=o[a],u=g(e.native[a])||g(Object(r.deepAccess)(e,"native.ext.".concat(a)));if("adTemplate"!==a&&c&&u){var s=Object(r.deepAccess)(t,"nativeParams.".concat(a,".sendId"));if("boolean"!=typeof s&&(s=Object(r.deepAccess)(t,"nativeParams.ext.".concat(a,".sendId"))),s)u="".concat(c,":").concat(e.adId);var d=Object(r.deepAccess)(t,"nativeParams.".concat(a,".sendTargetingKeys"));"boolean"!=typeof d&&(d=Object(r.deepAccess)(t,"nativeParams.ext.".concat(a,".sendTargetingKeys"))),("boolean"==typeof d?d:i)&&(n[c]=u)}})),n},t.d=function(e,t){var n={message:"assetResponse",adId:e.adId,assets:[]};t.native.hasOwnProperty("adTemplate")&&(n.adTemplate=g(t.native.adTemplate));t.native.hasOwnProperty("rendererUrl")&&(n.rendererUrl=g(t.native.rendererUrl));return e.assets.forEach((function(e){var i=Object(r.getKeyByValue)(d.NATIVE_KEYS,e),o=g(t.native[i]);n.assets.push({key:i,value:o})})),n},t.c=function(e,t){var n={message:"assetResponse",adId:e.adId,assets:[]};return Object.keys(t.native).forEach((function(e,r){if("adTemplate"===e&&t.native[e])n.adTemplate=g(t.native[e]);else if("rendererUrl"===e&&t.native[e])n.rendererUrl=g(t.native[e]);else if("ext"===e)Object.keys(t.native[e]).forEach((function(r){if(t.native[e][r]){var i=g(t.native[e][r]);n.assets.push({key:r,value:i})}}));else if(t.native[e]&&d.NATIVE_KEYS.hasOwnProperty(e)){var i=g(t.native[e]);n.assets.push({key:e,value:i})}})),n};var r=n(0),i=n(12),o=n.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n(5),f=[],l=Object.keys(d.NATIVE_KEYS).map((function(e){return d.NATIVE_KEYS[e]})),p={image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}};function g(e){return"object"===a(e)&&e.url?e.url:e}},37:function(e,t){e.exports={}},38:function(e,t,n){var r=n(15),i=n(21),o=n(23)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[o])?t:i(n)}},39:function(e,t,n){"use strict";t.a=function(e,t){return new i(e,t)};var r=n(0);function i(e,t){var n=t&&t.src||"client",i=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=function(){switch(i){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}(),this.adId=r.getUniqueIdentifierStr(),this.requestId=t&&t.bidId,this.mediaType="banner",this.source=n,this.getStatusCode=function(){return i},this.getSize=function(){return this.width+"x"+this.height}}},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),t.b=u;var r=n(3);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(0),c=u();function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.request,c=t.done;return function(t,u,s){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var f,l=d.method||(s?"POST":"GET"),p=document.createElement("a");p.href=t;var g="object"===o(u)&&null!==u?u:{success:function(){a.logMessage("xhr success")},error:function(e){a.logError("xhr error",null,e)}};if("function"==typeof u&&(g.success=u),(f=new window.XMLHttpRequest).onreadystatechange=function(){if(4===f.readyState){"function"==typeof c&&c(p.origin);var e=f.status;e>=200&&e<300||304===e?g.success(f.responseText,f):g.error(f.statusText,f)}},r.b.getConfig("disableAjaxTimeout")||(f.ontimeout=function(){a.logError("  xhr timeout after ",f.timeout,"ms")}),"GET"===l&&s){var b=a.parseUrl(t,d);i(b.search,s),t=a.buildUrl(b)}f.open(l,t,!0),r.b.getConfig("disableAjaxTimeout")||(f.timeout=e),d.withCredentials&&(f.withCredentials=!0),a._each(d.customHeaders,(function(e,t){f.setRequestHeader(t,e)})),d.preflight&&f.setRequestHeader("X-Requested-With","XMLHttpRequest"),f.setRequestHeader("Content-Type",d.contentType||"text/plain"),"function"==typeof n&&n(p.origin),"POST"===l&&s?f.send(s):f.send()}catch(e){a.logError("xhr construction",e),"object"===o(u)&&null!==u&&u.error(e)}}}},40:function(e,t,n){"use strict";t.a=function(e,t,n){if(!t||!e)return void o.logError("cannot load external script without url and moduleCode");if(!i()(c,t))return void o.logError("".concat(t," not whitelisted for loading external JavaScript"));if(a[e])return n&&"function"==typeof n&&(a[e].loaded?n():a[e].callbacks.push(n)),a[e].tag;a[e]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&a[e].callbacks.push(n);return o.logWarn("module ".concat(t," is loading external JavaScript")),function(t,n){var r=document.createElement("script");r.type="text/javascript",r.async=!0,a[e].tag=r,r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=function(){n()};return r.src=t,o.insertElement(r),r}(e,(function(){a[e].loaded=!0;try{for(var t=0;t<a[e].callbacks.length;t++)a[e].callbacks[t]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}}))};var r=n(12),i=n.n(r),o=n(0),a={},c=["adloox","criteo","outstream","adagio","browsi"]},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O})),t.c=T,n.d(t,"d",(function(){return I}));var r=n(0),i=n(3),o=n(36),a=n(24),c=n(95),u=n(2),s=n(10),d=n(12),f=n.n(d),l=n(11),p=n.n(l);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=n(0),m=n(5),S=[],A=Object.keys(m.TARGETING_KEYS).map((function(e){return m.TARGETING_KEYS[e]})),E={isBidNotExpired:function(e){return e.responseTimestamp+1e3*e.ttl-1e3>Object(r.timestamp)()},isUnusedBid:function(e){return e&&(e.status&&!f()([m.BID_STATUS.RENDERED],e.status)||!e.status)}},O=Object(s.b)("sync",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!o){var a=[],c=i.b.getConfig("sendBidsControl.dealPrioritization"),u=Object(r.groupBy)(e,"adUnitCode");return Object.keys(u).forEach((function(e){var i=[],o=Object(r.groupBy)(u[e],"bidderCode");Object.keys(o).forEach((function(e){return i.push(o[e].reduce(t))})),n>0?(i=c?i.sort(T(!0)):i.sort((function(e,t){return t.cpm-e.cpm})),a.push.apply(a,v(i.slice(0,n)))):a.push.apply(a,v(i))})),a}return e}));function T(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n){return void 0!==t.adserverTargeting.hb_deal&&void 0===n.adserverTargeting.hb_deal?-1:void 0===t.adserverTargeting.hb_deal&&void 0!==n.adserverTargeting.hb_deal?1:e?n.cpm-t.cpm:n.adserverTargeting.hb_pb-t.adserverTargeting.hb_pb}}var I=function(e){var t={},n={};function a(e,t){return e.adserverTargeting&&t&&(h.isArray(t)&&f()(t,e.adUnitCode)||"string"==typeof t&&e.adUnitCode===t)}function s(e,t){if(!0===i.b.getConfig("targetingControls.alwaysIncludeDeals")){var n=A.concat(o.a);return O(t,r.getHighestCpm).map((function(t){if(t.dealId&&a(t,e))return b({},t.adUnitCode,D(t,n.filter((function(e){return void 0!==t.adserverTargeting[e]}))))})).filter((function(e){return e}))}return[]}function d(e,t){var n=g({},m.TARGETING_KEYS,m.NATIVE_KEYS),i=Object.keys(n),o={};Object(r.logInfo)("allowTargetingKeys - allowed keys [ ".concat(t.map((function(e){return n[e]})).join(", ")," ]")),e.map((function(e){var r=Object.keys(e)[0],a=e[r].filter((function(e){var r=Object.keys(e)[0],a=0===i.filter((function(e){return 0===r.indexOf(n[e])})).length||p()(t,(function(e){var t=n[e];return 0===r.indexOf(t)}));return o[r]=!a,a}));e[r]=a}));var a=Object.keys(o).filter((function(e){return o[e]}));return Object(r.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", ")," ]")),e.filter((function(e){return e[Object.keys(e)[0]].length>0}))}function l(e,t){var n=Object(r.deepClone)(e);return Object.keys(n).map((function(e){return{adUnitCode:e,adserverTargeting:n[e]}})).sort(T()).reduce((function(e,i,o,a){var c,u=(c=i.adserverTargeting,Object.keys(c).reduce((function(e,t){return e+"".concat(t,"%3d").concat(encodeURIComponent(c[t]),"%26")}),""));o+1===a.length&&(u=u.slice(0,-3));var s=i.adUnitCode,d=u.length;return d<=t?(t-=d,Object(r.logInfo)("AdUnit '".concat(s,"' auction keys comprised of ").concat(d," characters.  Deducted from running threshold; new limit is ").concat(t),n[s]),e[s]=n[s]):Object(r.logWarn)("The following keys for adUnitCode '".concat(s,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d,", the current allotted amount was ").concat(t,".\n"),n[s]),o+1===a.length&&0===Object.keys(e).length&&Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e}),{})}function y(e){return e.map((function(e){return b({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return b({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,t){return g(t,e)}),{}))})).reduce((function(e,t){var n=Object.keys(t)[0];return e[n]=g({},e[n],t[n]),e}),{})}function I(t){return"string"==typeof t?[t]:h.isArray(t)?t:e.getAdUnitCodes()||[]}function C(){var t=e.getBidsReceived();return i.b.getConfig("useBidCache")||(t=t.filter((function(e){return n[e.adUnitCode]===e.auctionId}))),t=t.filter((function(e){return Object(r.deepAccess)(e,"video.context")!==u.a})).filter((function(e){return"banner"!==e.mediaType||Object(c.c)([e.width,e.height])})).filter(E.isUnusedBid).filter(E.isBidNotExpired),O(t,r.getOldestHighestCpmBid)}function j(e,n){var r=t.getWinningBids(e,n),i=w();return r=r.map((function(e){return b({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(t){return void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===i.indexOf(t)})).reduce((function(t,n){var r=[e.adserverTargeting[n]],i=b({},n.substring(0,20),r);if(n===m.TARGETING_KEYS.DEAL){var o=b({},"".concat(n,"_").concat(e.bidderCode).substring(0,20),r);return[].concat(v(t),[i,o])}return[].concat(v(t),[i])}),[]))}))}function w(){return e.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(A).filter(r.uniques)}function _(e,t,n,i){return Object.keys(t.adserverTargeting).filter(R()).forEach((function(n){e.length&&e.filter(function(e){return function(n){return n.adUnitCode===t.adUnitCode&&n.adserverTargeting[e]}}(n)).forEach(function(e){return function(n){h.isArray(n.adserverTargeting[e])||(n.adserverTargeting[e]=[n.adserverTargeting[e]]),n.adserverTargeting[e]=n.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(r.uniques),delete t.adserverTargeting[e]}}(n))})),e.push(t),e}function R(){var e=w().concat(o.a);return function(t){return-1===e.indexOf(t)}}function U(e){return b({},e.adUnitCode,Object.keys(e.adserverTargeting).filter(R()).map((function(t){return b({},t.substring(0,20),[e.adserverTargeting[t]])})))}function B(e,t){return t.filter((function(t){return f()(e,t.adUnitCode)})).map((function(e){return g({},e)})).reduce(_,[]).map(U).filter((function(e){return e}))}function x(e,t){var n=A.concat(o.a),c=i.b.getConfig("sendBidsControl.bidLimit"),u=O(t,r.getHighestCpm,c),s=i.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),d=s?s.map((function(e){return m.TARGETING_KEYS[e]})):n;return u.map((function(t){if(a(t,e))return b({},t.adUnitCode,D(t,n.filter((function(e){return void 0!==t.adserverTargeting[e]&&-1!==d.indexOf(e)}))))})).filter((function(e){return e}))}function D(e,t){return t.map((function(t){return b({},"".concat(t,"_").concat(e.bidderCode).substring(0,20),[e.adserverTargeting[t]])}))}function N(t){function n(e){return Object(r.deepAccess)(e,m.JSON_MAPPING.ADSERVER_TARGETING)}return e.getAdUnits().filter((function(e){return f()(t,e.code)&&n(e)})).map((function(e){return b({},e.code,function(e){var t=n(e);return Object.keys(t).map((function(e){return b({},e,h.isArray(t[e])?t[e]:t[e].split(","))}))}(e))}))}return t.setLatestAuctionForAdUnit=function(e,t){n[e]=t},t.resetPresetTargeting=function(t,n){if(Object(r.isGptPubadsDefined)()){var i=I(t),o=e.getAdUnits().filter((function(e){return f()(i,e.code)}));window.googletag.pubads().getSlots().forEach((function(e){var t=h.isFn(n)&&n(e);S.forEach((function(n){o.forEach((function(r){(r.code===e.getAdUnitPath()||r.code===e.getSlotElementId()||h.isFn(t)&&t(r.code))&&e.setTargeting(n,null)}))}))}))}},t.resetPresetTargetingAST=function(e){I(e).forEach((function(e){var t=window.apntag.getTag(e);if(t&&t.keywords){var n=Object.keys(t.keywords),r={};n.forEach((function(e){f()(S,e.toLowerCase())||(r[e]=t.keywords[e])})),window.apntag.modifyTag(e,{keywords:r})}}))},t.getAllTargeting=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C(),n=I(e),o=j(n,t).concat(B(n,t)).concat(i.b.getConfig("enableSendAllBids")?x(n,t):s(n,t)).concat(N(n));o.map((function(e){Object.keys(e).map((function(t){e[t].map((function(e){-1===S.indexOf(Object.keys(e)[0])&&(S=Object.keys(e).concat(S))}))}))}));var a=Object.keys(g({},m.DEFAULT_TARGETING_KEYS,m.NATIVE_KEYS)),c=i.b.getConfig("targetingControls.allowTargetingKeys")||a;Array.isArray(c)&&c.length>0&&(o=d(o,c)),o=y(o);var u=i.b.getConfig("targetingControls.auctionKeyMaxChars");return u&&(Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(u," characters.  Running checks on auction keys...")),o=l(o,u)),n.forEach((function(e){o[e]||(o[e]={})})),o},t.setTargetingForGPT=function(e,t){window.googletag.pubads().getSlots().forEach((function(n){Object.keys(e).filter(t?t(n):Object(r.isAdUnitCodeMatchingSlot)(n)).forEach((function(t){return Object.keys(e[t]).forEach((function(r){var i=e[t][r];"string"==typeof i&&(i=i.split(",")),(i=i.length>1?[i]:i).map((function(e){return h.logMessage("Attempting to set key value for slot: ".concat(n.getSlotElementId()," key: ").concat(r," value: ").concat(e)),e})).forEach((function(e){n.setTargeting(r,e)}))}))}))}))},t.getWinningBids=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C(),n=I(e);return t.filter((function(e){return f()(n,e.adUnitCode)})).filter((function(e){return e.cpm>0})).map((function(e){return e.adUnitCode})).filter(r.uniques).map((function(e){return t.filter((function(t){return t.adUnitCode===e?t:null})).reduce(r.getHighestCpm)}))},t.setTargetingForAst=function(e){var n=t.getAllTargeting(e);try{t.resetPresetTargetingAST(e)}catch(e){h.logError("unable to reset targeting for AST"+e)}Object.keys(n).forEach((function(e){return Object.keys(n[e]).forEach((function(t){if(h.logMessage("Attempting to set targeting for targetId: ".concat(e," key: ").concat(t," value: ").concat(n[e][t])),h.isStr(n[e][t])||h.isArray(n[e][t])){var r={};t.search(/pt[0-9]/)<0?r[t.toUpperCase()]=n[e][t]:r[t]=n[e][t],window.apntag.setKeywords(e,r,{overrideKeyValue:!0})}}))}))},t.isApntagDefined=function(){if(window.apntag&&h.isFn(window.apntag.setKeywords))return!0},t}(a.a)},42:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(11),i=n.n(r),o=n(0),a={buckets:[{max:5,increment:.5}]},c={buckets:[{max:20,increment:.1}]},u={buckets:[{max:20,increment:.01}]},s={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},d={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":l(e,a,n),med:""===r?"":l(e,c,n),high:""===r?"":l(e,u,n),auto:""===r?"":l(e,d,n),dense:""===r?"":l(e,s,n),custom:""===r?"":l(e,t,n)}}function l(e,t,n){var r="";if(!p(t))return r;var o=t.buckets.reduce((function(e,t){return e.max>t.max?e:t}),{max:0}),a=0,c=i()(t.buckets,(function(t){if(e>o.max*n){var i=t.precision;void 0===i&&(i=2),r=(t.max*n).toFixed(i)}else{if(e<=t.max*n&&e>=a*n)return t.min=a,t;a=t.max}}));return c&&(r=function(e,t,n){var r=void 0!==t.precision?t.precision:2,i=t.increment*n,o=t.min*n,a=Math.pow(10,r+2),c=(e*a-o*a)/(i*a),u=Math.floor(c)*i+o;return(u=Number(u.toFixed(10))).toFixed(r)}(e,c,n)),r}function p(e){if(o.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach((function(e){e.max&&e.increment||(t=!1)})),t}},44:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},45:function(e,t,n){var r=n(76),i=n(47);e.exports=function(e){return r(i(e))}},46:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},47:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},48:function(e,t,n){var r=n(47);e.exports=function(e){return Object(r(e))}},49:function(e,t){e.exports={}},5:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",NO_BID:"noBid",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",SET_TARGETING:"setTargeting",BEFORE_REQUEST_BIDS:"beforeRequestBids",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed",AD_RENDER_SUCCEEDED:"adRenderSucceeded",TCF2_ENFORCEMENT:"tcf2Enforcement",AUCTION_DEBUG:"auctionDebug",BID_VIEWABLE:"bidViewable",STALE_RENDER:"staleRender"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocument",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host",ADOMAIN:"hb_adomain"},DEFAULT_TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_HOST:"hb_cache_host"},NATIVE_KEYS:{title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url",adTemplate:"hb_adTemplate"},S2S:{SRC:"s2s",DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"},BID_STATUS:{BID_TARGETING_SET:"targetingSet",RENDERED:"rendered",BID_REJECTED:"bidRejected"}}},50:function(e,t,n){var r=n(58),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},51:function(e,t){e.exports=function(){}},52:function(e,t,n){var r=n(27);e.exports=r},53:function(e,t){e.exports={}},54:function(e,t,n){var r,i,o,a=n(118),c=n(25),u=n(29),s=n(31),d=n(30),f=n(59),l=n(65),p=n(53),g="Object already initialized",b=c.WeakMap;if(a||f.state){var v=f.state||(f.state=new b),y=v.get,h=v.has,m=v.set;r=function(e,t){if(h.call(v,e))throw new TypeError(g);return t.facade=e,m.call(v,e,t),t},i=function(e){return y.call(v,e)||{}},o=function(e){return h.call(v,e)}}else{var S=l("state");p[S]=!0,r=function(e,t){if(d(e,S))throw new TypeError(g);return t.facade=e,s(e,S,t),t},i=function(e){return d(e,S)?e[S]:{}},o=function(e){return d(e,S)}}e.exports={set:r,get:i,has:o,enforce:function(e){return o(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),i=n(3),o=n(12),a=n.n(o),c=n(7);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}i.b.setDefaults({userSync:r.deepClone({syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0})});var f=Object(c.a)("usersync");var l=!r.isSafariBrowser()&&f.cookiesAreEnabled(),p=function(e){var t={},n={image:[],iframe:[]},o=new Set,c={},s={image:!0,iframe:!1},f=e.config;function l(){if(f.syncEnabled&&e.browserSupportsCookies){try{!function(){if(!s.image)return;p(n.image,(function(e){var t=u(e,2),n=t[0],i=t[1];r.logMessage("Invoking image pixel user sync for bidder: ".concat(n)),r.triggerPixel(i)}))}(),function(){if(!s.iframe)return;p(n.iframe,(function(e){var t=u(e,2),n=t[0],i=t[1];r.logMessage("Invoking iframe user sync for bidder: ".concat(n)),r.insertUserSyncIframe(i)}))}()}catch(e){return r.logError("Error firing user syncs",e)}n={image:[],iframe:[]}}}function p(e,t){r.shuffle(e).forEach((function(e){t(e),o.add(e[0])}))}function g(e,t){var n=f.filterSettings;if(function(e,t){if(e.all&&e[t])return r.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var n=e.all?e.all:e[t],i=e.all?"all":t;if(!n)return!1;var o=n.filter,a=n.bidders;if(o&&"include"!==o&&"exclude"!==o)return r.logWarn('UserSync "filterSettings.'.concat(i,".filter\" setting '").concat(o,"' is not a valid option; use either 'include' or 'exclude'.")),!1;if("*"!==a&&!(Array.isArray(a)&&a.length>0&&a.every((function(e){return r.isStr(e)&&"*"!==e}))))return r.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(i,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1;return!0}(n,e)){s[e]=!0;var i=n.all?n.all:n[e],o="*"===i.bidders?[t]:i.bidders;return{include:function(e,t){return!a()(e,t)},exclude:function(e,t){return a()(e,t)}}[i.filter||"include"](o,t)}return!s[e]}return i.b.getConfig("userSync",(function(e){if(e.userSync){var t=e.userSync.filterSettings;r.isPlainObject(t)&&(t.image||t.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))}f=d(f,e.userSync)})),t.registerSync=function(e,i,a){return o.has(i)?r.logMessage('already fired syncs for "'.concat(i,'", ignoring registerSync call')):f.syncEnabled&&r.isArray(n[e])?i?0!==f.syncsPerBidder&&Number(c[i])>=f.syncsPerBidder?r.logWarn('Number of user syncs exceeded for "'.concat(i,'"')):t.canBidderRegisterSync(e,i)?(n[e].push([i,a]),void(c=function(e,t){return e[t]?e[t]+=1:e[t]=1,e}(c,i))):r.logWarn('Bidder "'.concat(i,'" not permitted to register their "').concat(e,'" userSync pixels.')):r.logWarn("Bidder is required for registering sync"):r.logWarn('User sync type "'.concat(e,'" not supported'))},t.syncUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(l,Number(e));l()},t.triggerUserSyncs=function(){f.enableOverride&&t.syncUsers()},t.canBidderRegisterSync=function(e,t){return!f.filterSettings||!g(e,t)},t}({config:i.b.getConfig("userSync"),browserSupportsCookies:l})},56:function(e,t,n){var r=n(29);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},57:function(e,t,n){var r=n(26),i=n(76),o=n(48),a=n(50),c=n(104),u=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,d=4==e,f=6==e,l=7==e,p=5==e||f;return function(g,b,v,y){for(var h,m,S=o(g),A=i(S),E=r(b,v,3),O=a(A.length),T=0,I=y||c,C=t?I(g,O):n||l?I(g,0):void 0;O>T;T++)if((p||T in A)&&(m=E(h=A[T],T,S),e))if(t)C[T]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return T;case 2:u.call(C,h)}else switch(e){case 4:return!1;case 7:u.call(C,h)}return f?-1:s||d?d:C}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},58:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},59:function(e,t,n){var r=n(25),i=n(106),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},60:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},61:function(e,t,n){var r=n(62),i=n(37),o=n(23)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},62:function(e,t,n){var r=n(63),i=n(46),o=n(23)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},63:function(e,t,n){var r={};r[n(23)("toStringTag")]="z",e.exports="[object z]"===String(r)},64:function(e,t,n){var r=n(63),i=n(34).f,o=n(31),a=n(30),c=n(117),u=n(23)("toStringTag");e.exports=function(e,t,n,s){if(e){var d=n?e:e.prototype;a(d,u)||i(d,u,{configurable:!0,value:t}),s&&!r&&o(d,"toString",c)}}},65:function(e,t,n){var r=n(79),i=n(60),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},66:function(e,t,n){"use strict";var r=n(14),i=n(126),o=n(91),a=n(128),c=n(64),u=n(31),s=n(89),d=n(23),f=n(17),l=n(37),p=n(90),g=p.IteratorPrototype,b=p.BUGGY_SAFARI_ITERATORS,v=d("iterator"),y="keys",h="values",m="entries",S=function(){return this};e.exports=function(e,t,n,d,p,A,E){i(n,t,d);var O,T,I,C=function(e){if(e===p&&U)return U;if(!b&&e in _)return _[e];switch(e){case y:case h:case m:return function(){return new n(this,e)}}return function(){return new n(this)}},j=t+" Iterator",w=!1,_=e.prototype,R=_[v]||_["@@iterator"]||p&&_[p],U=!b&&R||C(p),B="Array"==t&&_.entries||R;if(B&&(O=o(B.call(new e)),g!==Object.prototype&&O.next&&(f||o(O)===g||(a?a(O,g):"function"!=typeof O[v]&&u(O,v,S)),c(O,j,!0,!0),f&&(l[j]=S))),p==h&&R&&R.name!==h&&(w=!0,U=function(){return R.call(this)}),f&&!E||_[v]===U||u(_,v,U),l[t]=U,p)if(T={values:C(h),keys:A?U:C(y),entries:C(m)},E)for(I in T)(b||w||!(I in _))&&s(_,I,T[I]);else r({target:t,proto:!0,forced:b||w},T);return T}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i={};function o(e,t,n){var r=function(e,t){var n=i[e]=i[e]||{bidders:{}};return t?n.bidders[t]=n.bidders[t]||{}:n}(e,n);return r[t]=(r[t]||0)+1,r[t]}var a={incrementRequestsCounter:function(e){return o(e,"requestsCounter")},incrementBidderRequestsCounter:function(e,t){return o(e,"requestsCounter",t)},incrementBidderWinsCounter:function(e,t){return o(e,"winsCounter",t)},getRequestsCounter:function(e){return Object(r.deepAccess)(i,"".concat(e,".requestsCounter"))||0},getBidderRequestsCounter:function(e,t){return Object(r.deepAccess)(i,"".concat(e,".bidders.").concat(t,".requestsCounter"))||0},getBidderWinsCounter:function(e,t){return Object(r.deepAccess)(i,"".concat(e,".bidders.").concat(t,".winsCounter"))||0}}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),t.a=function(e){return s({moduleName:e,moduleType:"core"})},t.b=function(e,t){return s({gvlid:e,moduleName:t})};var r=n(10),i=n(0),o=n(12),a=n.n(o),c=["core","prebid-module"],u=[];function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.gvlid,n=e.moduleName,r=e.moduleType;function o(e){if(a()(c,r)){return e({valid:!0})}var o;return d(t,n,{hasEnforcementHook:!1},(function(t){if(t&&t.hasEnforcementHook)o=e(t);else{var n={hasEnforcementHook:!1,valid:i.hasDeviceAccess()};o=e(n)}})),o}var s=function(e,t,n,r,i,a){var c=function(o){if(o&&o.valid){var a=i&&""!==i?" ;domain=".concat(encodeURIComponent(i)):"",c=n&&""!==n?" ;expires=".concat(n):"",u=null!=r&&"none"==r.toLowerCase()?"; Secure":"";document.cookie="".concat(e,"=").concat(encodeURIComponent(t)).concat(c,"; path=/").concat(a).concat(r?"; SameSite=".concat(r):"").concat(u)}};if(!a||"function"!=typeof a)return o(c);u.push((function(){var e=o(c);a(e)}))},f=function(e,t){var n=function(t){if(t&&t.valid){var n=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return n?decodeURIComponent(n[2]):null}return null};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))},l=function(e){var t=function(e){if(e&&e.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(e){}finally{try{localStorage.removeItem("prebid.cookieTest")}catch(e){}}return!1};if(!e||"function"!=typeof e)return o(t);u.push((function(){var n=o(t);e(n)}))},p=function(e){var t=function(e){return!(!e||!e.valid)&&(!!i.checkCookieSupport()||(window.document.cookie="prebid.cookieTest",-1!==window.document.cookie.indexOf("prebid.cookieTest")))};if(!e||"function"!=typeof e)return o(t);u.push((function(){var n=o(t);e(n)}))},g=function(e,t,n){var r=function(n){n&&n.valid&&y()&&window.localStorage.setItem(e,t)};if(!n||"function"!=typeof n)return o(r);u.push((function(){var e=o(r);n(e)}))},b=function(e,t){var n=function(t){return t&&t.valid&&y()?window.localStorage.getItem(e):null};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))},v=function(e,t){var n=function(t){t&&t.valid&&y()&&window.localStorage.removeItem(e)};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))},y=function(e){var t=function(e){if(e&&e.valid)try{return!!window.localStorage}catch(e){i.logError("Local storage api disabled")}return!1};if(!e||"function"!=typeof e)return o(t);u.push((function(){var n=o(t);e(n)}))},h=function(e,t){var n=function(t){if(t&&t.valid){var n=[];if(i.hasDeviceAccess())for(var r=document.cookie.split(";");r.length;){var o=r.pop(),a=o.indexOf("=");a=a<0?o.length:a,decodeURIComponent(o.slice(0,a).replace(/^\s+/,"")).indexOf(e)>=0&&n.push(decodeURIComponent(o.slice(a+1)))}return n}};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))};return{setCookie:s,getCookie:f,localStorageIsEnabled:l,cookiesAreEnabled:p,setDataInLocalStorage:g,getDataFromLocalStorage:b,removeDataFromLocalStorage:v,hasLocalStorage:y,findSimilarCookies:h}}var d=Object(r.b)("async",(function(e,t,n,r){r(n)}),"validateStorageEnforcement")},71:function(e,t,n){var r=n(210);e.exports=r},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"adUnitSetupChecks",(function(){return J})),n.d(t,"checkAdUnitSetup",(function(){return Y})),t.executeCallbacks=Z;var r=n(16),i=n(0),o=n(216),a=n(55),c=n(3),u=n(24),s=n(41),d=n(10),f=n(217),l=n(12),p=n.n(l),g=n(67),b=n(13),v=n(39),y=n(7);function h(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=Object(r.a)(),E=n(5),O=n(0),T=n(8).default,I=n(9),C=a.a.triggerUserSyncs,j=E.EVENTS,w=j.ADD_AD_UNITS,_=j.BID_WON,R=j.REQUEST_BIDS,U=j.SET_TARGETING,B=j.AD_RENDER_FAILED,x=j.AD_RENDER_SUCCEEDED,D=j.STALE_RENDER,N=E.AD_RENDER_FAILED_REASON,k=N.PREVENT_WRITING_ON_MAIN_DOCUMENT,P=N.NO_AD,M=N.EXCEPTION,q=N.CANNOT_FIND_AD,G=N.MISSING_DOC_OR_ADID,W={bidWon:function(e){var t=u.a.getBidsRequested().map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(i.flatten).filter(i.uniques);if(!O.contains(t,e))return void O.logError('The "'+e+'" placement is not defined.');return!0}};function L(e,t,n){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}function F(e,t){var n=[];return O.isArray(e)&&(t?e.length===t:e.length>0)&&(e.every((function(e){return Object(i.isArrayOfNums)(e,2)}))?n=e:Object(i.isArrayOfNums)(e,2)&&n.push(e)),n}function z(e){var t=O.deepClone(e),n=t.mediaTypes.banner,r=F(n.sizes);return r.length>0?(n.sizes=r,t.sizes=r):(O.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete t.mediaTypes.banner),t}function V(e){var t=O.deepClone(e),n=t.mediaTypes.video;if(n.playerSize){var r="number"==typeof n.playerSize[0]?2:1,i=F(n.playerSize,r);i.length>0?(2===r&&O.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),n.playerSize=i,t.sizes=i):(O.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete t.mediaTypes.video.playerSize)}return t}function H(e){var t=O.deepClone(e),n=t.mediaTypes.native;return n.image&&n.image.sizes&&!Array.isArray(n.image.sizes)&&(O.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete t.mediaTypes.native.image.sizes),n.image&&n.image.aspect_ratios&&!Array.isArray(n.image.aspect_ratios)&&(O.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete t.mediaTypes.native.image.aspect_ratios),n.icon&&n.icon.sizes&&!Array.isArray(n.icon.sizes)&&(O.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete t.mediaTypes.native.icon.sizes),t}function K(e,t){var n=O.deepAccess(e,"mediaTypes.".concat(t,".pos"));if(!n||!O.isNumber(n)||!isFinite(n)){var r="Value of property 'pos' on ad unit ".concat(e.code," should be of type: Number");O.logWarn(r),I.emit(E.EVENTS.AUCTION_DEBUG,{type:"WARNING",arguments:r}),delete e.mediaTypes[t].pos}return e}Object(f.a)(),A.bidderSettings=A.bidderSettings||{},A.libLoaded=!0,A.version="v5.8.0",O.logInfo("Prebid.js v5.8.0 loaded"),A.installedModules=["rtdModule","appnexusBidAdapter","concertBidAdapter","consumableBidAdapter","criteoBidAdapter","ixBidAdapter","justpremiumBidAdapter","kargoBidAdapter","nobidBidAdapter","openxBidAdapter","prebidServerBidAdapter","pubmaticBidAdapter","pulsepointBidAdapter","rubiconBidAdapter","teadsBidAdapter","tripleliftBidAdapter","vidazooBidAdapter","yieldmoBidAdapter","browsiRtdProvider","consentManagement","consentManagementUsp","googleAnalyticsAdapter","optimeraRtdProvider","permutiveRtdProvider"],A.adUnits=A.adUnits||[],A.triggerUserSyncs=C;var J={validateBannerMediaType:z,validateVideoMediaType:V,validateNativeMediaType:H,validateSizes:F},Y=Object(d.b)("sync",(function(e){var t=[];return e.forEach((function(e){var n,r,i,o=e.mediaTypes,a=e.bids;if(a&&O.isArray(a))if(o&&0!==Object.keys(o).length){o.banner&&(n=z(e),o.banner.hasOwnProperty("pos")&&(n=K(n,"banner"))),o.video&&(r=V(n||e),o.video.hasOwnProperty("pos")&&(r=K(r,"video"))),o.native&&(i=H(r||(n||e)));var c=S({},n,r,i);t.push(c)}else O.logError("Detected adUnit.code '".concat(e.code,"' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));else O.logError("Detected adUnit.code '".concat(e.code,"' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))})),t}),"checkAdUnitSetup");function Q(e){var t=u.a[e]().filter(O.bind.call(i.adUnitsFilter,this,u.a.getAdUnitCodes())),n=u.a.getLastAuctionId();return t.map((function(e){return e.adUnitCode})).filter(i.uniques).map((function(e){return t.filter((function(t){return t.auctionId===n&&t.adUnitCode===e}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return t={},n=e[0].adUnitCode,r={bids:e},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r})).reduce((function(e,t){return S(e,t)}),{})}function $(e){var t=e.reason,n=e.message,r=e.bid,i=e.id,o={reason:t,message:n};r&&(o.bid=r),i&&(o.adId=i),O.logError(n),I.emit(B,o)}function X(e){var t=e.doc,n=e.bid,r=e.id,i={doc:t};n&&(i.bid=n),r&&(i.adId=r),I.emit(x,i)}function Z(e,t){function n(e){for(var t;t=e.shift();)t()}n(y.c),n(ee),e.call(this,t)}A.getAdserverTargetingForAdUnitCodeStr=function(e){if(O.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=A.getAdserverTargetingForAdUnitCode(e);return O.transformAdServerTargetingObj(t)}O.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},A.getHighestUnusedBidResponseForAdUnitCode=function(e){if(e){var t=u.a.getAllBidsForAdUnitCode(e).filter(s.a.isUnusedBid).filter(s.a.isBidNotExpired);return t.length?t.reduce(i.getHighestCpm):{}}O.logMessage("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")},A.getAdserverTargetingForAdUnitCode=function(e){return A.getAdserverTargeting(e)[e]},A.getAdserverTargeting=function(e){return O.logInfo("Invoking pbjs.getAdserverTargeting",arguments),s.d.getAllTargeting(e)},A.getNoBids=function(){return O.logInfo("Invoking pbjs.getNoBids",arguments),Q("getNoBids")},A.getNoBidsForAdUnitCode=function(e){return{bids:u.a.getNoBids().filter((function(t){return t.adUnitCode===e}))}},A.getBidResponses=function(){return O.logInfo("Invoking pbjs.getBidResponses",arguments),Q("getBidsReceived")},A.getBidResponsesForAdUnitCode=function(e){return{bids:u.a.getBidsReceived().filter((function(t){return t.adUnitCode===e}))}},A.setTargetingForGPTAsync=function(e,t){if(O.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),Object(i.isGptPubadsDefined)()){var n=s.d.getAllTargeting(e);s.d.resetPresetTargeting(e,t),s.d.setTargetingForGPT(n,t),Object.keys(n).forEach((function(e){Object.keys(n[e]).forEach((function(t){"hb_adid"===t&&u.a.setStatusForBids(n[e][t],E.BID_STATUS.BID_TARGETING_SET)}))})),I.emit(U,n)}else O.logError("window.googletag is not defined on the page")},A.setTargetingForAst=function(e){O.logInfo("Invoking pbjs.setTargetingForAn",arguments),s.d.isApntagDefined()?(s.d.setTargetingForAst(e),I.emit(U,s.d.getAllTargeting())):O.logError("window.apntag is not defined on the page")},A.renderAd=Object(d.b)("async",(function(e,t,n){if(O.logInfo("Invoking pbjs.renderAd",arguments),O.logMessage("Calling renderAd with adId :"+t),e&&t)try{var r=u.a.findBidByAdId(t);if(r){var i=!0;if(r&&r.status===E.BID_STATUS.RENDERED&&(O.logWarn("Ad id ".concat(r.adId," has been rendered before")),I.emit(D,r),O.deepAccess(c.b.getConfig("auctionOptions"),"suppressStaleRender")&&(i=!1)),i){if(r.ad=O.replaceAuctionPrice(r.ad,r.cpm),r.adUrl=O.replaceAuctionPrice(r.adUrl,r.cpm),n&&n.clickThrough){var o=n.clickThrough;r.ad=O.replaceClickThrough(r.ad,o),r.adUrl=O.replaceClickThrough(r.adUrl,o)}u.a.addWinningBid(r),I.emit(_,r);var a=r.height,s=r.width,d=r.ad,f=r.mediaType,l=r.adUrl,p=r.renderer,g=document.createComment("Creative ".concat(r.creativeId," served by ").concat(r.bidder," Prebid.js Header Bidding"));if(Object(b.c)(p))Object(b.b)(p,r),O.insertElement(g,e,"html"),X({doc:e,bid:r,id:t});else if(e===document&&!O.inIframe()||"video"===f){var v="Error trying to write ad. Ad render call ad id ".concat(t," was prevented from writing to the main document.");$({reason:k,message:v,bid:r,id:t})}else if(d){if(navigator.userAgent&&navigator.userAgent.toLowerCase().indexOf("firefox/")>-1){var y=/firefox\/([\d\.]+)/,h=navigator.userAgent.toLowerCase().match(y)[1];h&&parseInt(h,10)<67&&e.open("text/html","replace")}e.write(d),e.close(),L(e,s,a),O.insertElement(g,e,"html"),O.callBurl(r),X({doc:e,bid:r,id:t})}else if(l){var m=O.createInvisibleIframe();m.height=a,m.width=s,m.style.display="inline",m.style.overflow="hidden",m.src=l,O.insertElement(m,e,"body"),L(e,s,a),O.insertElement(g,e,"html"),O.callBurl(r),X({doc:e,bid:r,id:t})}else{var S="Error trying to write ad. No ad for bid response id: ".concat(t);$({reason:P,message:S,bid:r,id:t})}}}else{var A="Error trying to write ad. Cannot find ad by given id : ".concat(t);$({reason:q,message:A,id:t})}}catch(e){var T="Error trying to write ad Id :".concat(t," to the page:").concat(e.message);$({reason:M,message:T,id:t})}else{var C="Error trying to write ad Id :".concat(t," to the page. Missing document or adId");$({reason:G,message:C,id:t})}})),A.removeAdUnit=function(e){(O.logInfo("Invoking pbjs.removeAdUnit",arguments),e)?(O.isArray(e)?e:[e]).forEach((function(e){for(var t=A.adUnits.length-1;t>=0;t--)A.adUnits[t].code===e&&A.adUnits.splice(t,1)})):A.adUnits=[]},A.requestBids=Object(d.b)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels,a=e.auctionId;I.emit(R);var d=n||c.b.getConfig("bidderTimeout");r=r&&c.b.convertAdUnitFpd(O.isArray(r)?r:[r])||A.adUnits,O.logInfo("Invoking pbjs.requestBids",arguments);var f=[],l=[];if(c.b.getConfig("s2sConfig",(function(e){e&&e.s2sConfig&&(f=Array.isArray(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])})),f.forEach((function(e){l.push.apply(l,h(e.bidders))})),r=Y(r),i&&i.length?r=r.filter((function(e){return p()(i,e.code)})):i=r&&r.map((function(e){return e.code})),r.forEach((function(e){var t=Object.keys(e.mediaTypes||{banner:"banner"}),n=e.bids.map((function(e){return e.bidder})),r=T.bidderRegistry,i=l?n.filter((function(e){return!p()(l,e)})):n;e.transactionId=O.generateUUID(),i.forEach((function(n){var i=r[n],o=i&&i.getSpec&&i.getSpec(),a=o&&o.supportedMediaTypes||["banner"];t.some((function(e){return p()(a,e)}))?g.a.incrementBidderRequestsCounter(e.code,n):(O.logWarn(O.unsupportedBidderMessage(e,n)),e.bids=e.bids.filter((function(e){return e.bidder!==n})))})),g.a.incrementRequestsCounter(e.code)})),r&&0!==r.length){var b=u.a.createAuction({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:d,labels:o,auctionId:a}),v=r.length;v>15&&O.logInfo("Current auction ".concat(b.getAuctionId()," contains ").concat(v," adUnits."),r),i.forEach((function(e){return s.d.setLatestAuctionForAdUnit(e,b.getAuctionId())})),b.callBids()}else if(O.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e){O.logError("Error executing bidsBackHandler",null,e)}})),A.requestBids.before(Z,49),A.addAdUnits=function(e){O.logInfo("Invoking pbjs.addAdUnits",arguments),A.adUnits.push.apply(A.adUnits,c.b.convertAdUnitFpd(O.isArray(e)?e:[e])),I.emit(w)},A.onEvent=function(e,t,n){O.logInfo("Invoking pbjs.onEvent",arguments),O.isFn(t)?!n||W[e].call(null,n)?I.on(e,t,n):O.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):O.logError('The event handler provided is not a function and was not set on event "'+e+'".')},A.offEvent=function(e,t,n){O.logInfo("Invoking pbjs.offEvent",arguments),n&&!W[e].call(null,n)||I.off(e,t,n)},A.getEvents=function(){return O.logInfo("Invoking pbjs.getEvents"),I.getEvents()},A.registerBidAdapter=function(e,t){O.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{T.registerBidAdapter(e(),t)}catch(e){O.logError("Error registering bidder adapter : "+e.message)}},A.registerAnalyticsAdapter=function(e){O.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{T.registerAnalyticsAdapter(e)}catch(e){O.logError("Error registering analytics adapter : "+e.message)}},A.createBid=function(e){return O.logInfo("Invoking pbjs.createBid",arguments),Object(v.a)(e)};var ee=[],te=Object(d.b)("async",(function(e){e&&!O.isEmpty(e)?(O.logInfo("Invoking pbjs.enableAnalytics for: ",e),T.enableAnalytics(e)):O.logError("pbjs.enableAnalytics should be called with option {}")}),"enableAnalyticsCb");function ne(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){O.logError("Error processing command :","prebid.js",e)}}))}A.enableAnalytics=function(e){ee.push(te.bind(this,e))},A.aliasBidder=function(e,t,n){O.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?T.aliasBidAdapter(e,t,n):O.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},A.getAllWinningBids=function(){return u.a.getAllWinningBids()},A.getAllPrebidWinningBids=function(){return u.a.getBidsReceived().filter((function(e){return e.status===E.BID_STATUS.BID_TARGETING_SET}))},A.getHighestCpmBids=function(e){return s.d.getWinningBids(e)},A.markWinningBidAsUsed=function(e){var t=[];e.adUnitCode&&e.adId?t=u.a.getBidsReceived().filter((function(t){return t.adId===e.adId&&t.adUnitCode===e.adUnitCode})):e.adUnitCode?t=s.d.getWinningBids(e.adUnitCode):e.adId?t=u.a.getBidsReceived().filter((function(t){return t.adId===e.adId})):O.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),t.length>0&&(t[0].status=E.BID_STATUS.RENDERED)},A.getConfig=c.b.getConfig,A.setConfig=c.b.setConfig,A.setBidderConfig=c.b.setBidderConfig,A.que.push((function(){return Object(o.a)()})),A.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){O.logError("Error processing command :",e.message,e.stack)}else O.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},A.que.push=A.cmd.push,A.processQueue=function(){d.b.ready(),ne(A.que),ne(A.cmd)},t.default=A},73:function(e,t,n){var r=n(332);e.exports=r},74:function(e,t,n){"use strict";t.a=function(e,t){o.adServers=o.adServers||{},o.adServers[e]=o.adServers[e]||{},Object.keys(t).forEach((function(n){o.adServers[e][n]?Object(i.logWarn)("Attempting to add an already registered function property ".concat(n," for AdServer ").concat(e,".")):o.adServers[e][n]=t[n]}))};var r=n(16),i=n(0),o=Object(r.a)()},75:function(e,t,n){"use strict";t.a=function(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}},76:function(e,t,n){var r=n(28),i=n(46),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},77:function(e,t,n){var r=n(33),i=n(28),o=n(78);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},78:function(e,t,n){var r=n(25),i=n(29),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},79:function(e,t,n){var r=n(17),i=n(59);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.1",mode:r?"pure":"global",copyright:"?? 2021 Denis Pushkarev (zloirock.ru)"})},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"gdprDataHandler",(function(){return U})),n.d(t,"uspDataHandler",(function(){return B})),n.d(t,"coppaDataHandler",(function(){return x})),n.d(t,"clientTestAdapters",(function(){return D})),n.d(t,"allS2SBidders",(function(){return N})),t.getAllS2SBidders=k,t.setS2STestingModule=function(e){A=e};var r=n(0),i=n(95),o=n(36),a=n(1),c=n(4),u=n(3),s=n(10),d=n(12),f=n.n(d),l=n(11),p=n.n(l),g=n(67),b=n(19);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A,E=n(0),O=n(5),T=n(9),I={},C=I.bidderRegistry={},j=I.aliasRegistry={},w=[];u.b.getConfig("s2sConfig",(function(e){e&&e.s2sConfig&&(w=Array.isArray(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])}));var _={};var R=Object(s.b)("sync",(function(e){var t=e.bidderCode,n=e.auctionId,a=e.bidderRequestId,c=e.adUnits,u=e.labels,s=e.src;return c.reduce((function(e,c){var d=Object(i.b)(Object(i.a)(c,u),c.mediaTypes,c.sizes),f=d.active,l=d.mediaTypes,p=d.filterResults;return f?p&&E.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" banner sizes from '),p.before,"to ",p.after):E.logInfo('Size mapping disabled adUnit "'.concat(c.code,'"')),f&&e.push(c.bids.filter((function(e){return e.bidder===t})).reduce((function(e,t){var d=c.nativeParams||E.deepAccess(c,"mediaTypes.native");d&&(t=S({},t,{nativeParams:Object(o.h)(d)})),t=S({},t,Object(r.getDefinedParams)(c,["ortb2Imp","mediaType","renderer","storedAuctionResponse"]));var f=Object(i.b)(Object(i.a)(t,u),l),p=f.active,b=f.mediaTypes,v=f.filterResults;return p?v&&E.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'" banner sizes from '),v.before,"to ",v.after):E.logInfo('Size mapping deactivated adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'"')),E.isValidMediaTypes(b)?t=S({},t,{mediaTypes:b}):E.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),p&&e.push(S({},t,{adUnitCode:c.code,transactionId:c.transactionId,sizes:E.deepAccess(b,"banner.sizes")||E.deepAccess(b,"video.playerSize")||[],bidId:t.bid_id||E.getUniqueIdentifierStr(),bidderRequestId:a,auctionId:n,src:s,bidRequestsCount:g.a.getRequestsCounter(c.code),bidderRequestsCount:g.a.getBidderRequestsCounter(c.code,t.bidder),bidderWinsCount:g.a.getBidderWinsCounter(c.code,t.bidder)})),e}),[])),e}),[]).reduce(r.flatten,[]).filter((function(e){return""!==e}))}),"getBids");var U={consentData:null,setConsentData:function(e){U.consentData=e},getConsentData:function(){return U.consentData}},B={consentData:null,setConsentData:function(e){B.consentData=e},getConsentData:function(){return B.consentData}},x={getCoppa:function(){return!!u.b.getConfig("coppa")}},D=[],N=[];function k(){I.s2STestingEnabled=!1,w.forEach((function(e){e&&e.enabled&&e.bidders&&e.bidders.length&&N.push.apply(N,y(e.bidders))}))}function P(e){return e&&e.enabled&&e.testing&&A}function M(e,t,n){try{var i=C[e].getSpec();i&&i[t]&&"function"==typeof i[t]&&(E.logInfo("Invoking ".concat(e,".").concat(t)),u.b.runWithBidder(e,r.bind.call(i[t],i,n)))}catch(n){E.logWarn("Error calling ".concat(t," of ").concat(e))}}I.makeBidRequests=Object(s.b)("sync",(function(e,t,n,i,o){T.emit(O.EVENTS.BEFORE_REQUEST_BIDS,e);var a=Object(r.getBidderCodes)(e);u.b.getConfig("bidderSequence")===u.a&&(a=Object(r.shuffle)(a));var c=Object(b.a)(),s=a,d=[];0===N.length&&k(),w.forEach((function(t){t&&t.enabled&&(P(t)&&(A.calculateBidSources(t),A.getSourceBidderMap(e,N)[A.CLIENT].forEach((function(e){f()(D,e)||D.push(e)}))))})),s=a.filter((function(e){return!f()(N,e)||f()(D,e)}));var l=N;w.forEach((function(r){if(r&&r.enabled){(function(e){return Boolean(P(e)&&e.testServerOnly)})(r)&&function(e,t){return Boolean(p()(e,(function(e){return p()(e.bids,(function(e){return(e.bidSource||t.bidderControl&&t.bidderControl[e.bidder])&&e.finalSource===A.SERVER}))})))}(e,r)&&(E.logWarn("testServerOnly: True.  All client requests will be suppressed."),s.length=0);var i=function(e,t){var n=t.bidders,r=E.deepClone(e);return r.forEach((function(e){e.bids=e.bids.filter((function(e){return f()(n,e.bidder)&&(!P(t)||e.finalSource!==A.CLIENT)})).map((function(e){return e.bid_id=E.getUniqueIdentifierStr(),e}))})),r.filter((function(e){return 0!==e.bids.length}))}(e,r),a=E.generateUUID();l.forEach((function(e){var u=E.getUniqueIdentifierStr(),s={bidderCode:e,auctionId:n,bidderRequestId:u,tid:a,bids:R({bidderCode:e,auctionId:n,bidderRequestId:u,adUnits:E.deepClone(i),labels:o,src:O.S2S.SRC}),auctionStart:t,timeout:r.timeout,src:O.S2S.SRC,refererInfo:c};0!==s.bids.length&&d.push(s)})),i.forEach((function(e){var t=e.bids.filter((function(e){return p()(d,(function(t){return p()(t.bids,(function(t){return t.bidId===e.bid_id}))}))}));e.bids=t})),d.forEach((function(e){void 0===e.adUnitsS2SCopy&&(e.adUnitsS2SCopy=i.filter((function(e){return e.bids.length>0})))}))}}));var g=function(e){var t=E.deepClone(e);return t.forEach((function(e){e.bids=e.bids.filter((function(e){return!D.length||e.finalSource!==A.SERVER}))})),t.filter((function(e){return 0!==e.bids.length}))}(e);return s.forEach((function(e){var r=E.getUniqueIdentifierStr(),a={bidderCode:e,auctionId:n,bidderRequestId:r,bids:R({bidderCode:e,auctionId:n,bidderRequestId:r,adUnits:E.deepClone(g),labels:o,src:"client"}),auctionStart:t,timeout:i,refererInfo:c},u=C[e];u||E.logError("Trying to make a request for bidder that does not exist: ".concat(e)),u&&a.bids&&0!==a.bids.length&&d.push(a)})),U.getConsentData()&&d.forEach((function(e){e.gdprConsent=U.getConsentData()})),B.getConsentData()&&d.forEach((function(e){e.uspConsent=B.getConsentData()})),d}),"makeBidRequests"),I.callBids=function(e,t,n,i,o,a,s){if(t.length){var d=v(t.reduce((function(e,t){return e[Number(void 0!==t.src&&t.src===O.S2S.SRC)].push(t),e}),[[],[]]),2),l=d[0],p=d[1],g=[];p.forEach((function(e){for(var t=-1,n=0;n<g.length;++n)if(e.tid===g[n].tid){t=n;break}t<=-1&&g.push(e)}));var b=0;w.forEach((function(e){if(e&&g[b]&&f()(e.bidders,g[b].bidderCode)){var t=Object(c.b)(a,o?{request:o.request.bind(null,"s2s"),done:o.done}:void 0),u=e.bidders,s=C[e.adapter],d=g[b].tid,l=g[b].adUnitsS2SCopy,v=p.filter((function(e){return e.tid===d}));if(s){var y={tid:d,ad_units:l,s2sConfig:e};if(y.ad_units.length){var h=v.map((function(e){return e.start=Object(r.timestamp)(),i.bind(e)})),m=y.ad_units.reduce((function(e,t){return e.concat((t.bids||[]).reduce((function(e,t){return e.concat(t.bidder)}),[]))}),[]);E.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(u.filter((function(e){return f()(m,e)})).join(","))),v.forEach((function(e){T.emit(O.EVENTS.BID_REQUESTED,e)})),s.callBids(y,p,(function(e,t){var i=Object(r.getBidderRequest)(p,t.bidderCode,e);i&&n.call(i,e,t)}),(function(){return h.forEach((function(e){return e()}))}),t)}}else E.logError("missing "+e.adapter);b++}})),l.forEach((function(e){e.start=Object(r.timestamp)();var t=C[e.bidderCode];u.b.runWithBidder(e.bidderCode,(function(){E.logMessage("CALLING BIDDER"),T.emit(O.EVENTS.BID_REQUESTED,e)}));var d=Object(c.b)(a,o?{request:o.request.bind(null,e.bidderCode),done:o.done}:void 0),f=i.bind(e);try{u.b.runWithBidder(e.bidderCode,r.bind.call(t.callBids,t,e,n.bind(e),f,d,s,u.b.callbackWithBidder(e.bidderCode)))}catch(t){E.logError("".concat(e.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:t,bidRequest:e}),f()}}))}else E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},I.videoAdapters=[],I.registerBidAdapter=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.supportedMediaTypes,i=void 0===r?[]:r;e&&t?"function"==typeof e.callBids?(C[t]=e,f()(i,"video")&&I.videoAdapters.push(t),f()(i,"native")&&o.f.push(t)):E.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):E.logError("bidAdapter or bidderCode not specified")},I.aliasBidAdapter=function(e,t,n){if(void 0===C[t]){var r=C[e];if(void 0===r){var i=[];w.forEach((function(n){if(n.bidders&&n.bidders.length){var r=n&&n.bidders;n&&f()(r,t)?j[t]=e:i.push(e)}})),i.forEach((function(e){E.logError('bidderCode "'+e+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")}))}else try{var c,u=function(e){var t=[];return f()(I.videoAdapters,e)&&t.push("video"),f()(o.f,e)&&t.push("native"),t}(e);if(r.constructor.prototype!=Object.prototype)(c=new r.constructor).setBidderCode(t);else{var s=r.getSpec(),d=n&&n.gvlid,l=n&&n.skipPbsAliasing;c=Object(a.newBidder)(S({},s,{code:t,gvlid:d,skipPbsAliasing:l})),j[t]=e}I.registerBidAdapter(c,t,{supportedMediaTypes:u})}catch(t){E.logError(e+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else E.logMessage('alias name "'+t+'" has been already specified.')},I.registerAnalyticsAdapter=function(e){var t=e.adapter,n=e.code,r=e.gvlid;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,_[n]={adapter:t,gvlid:r}):E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n,'"\n        analytics adapter must implement an enableAnalytics() function')):E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},I.enableAnalytics=function(e){E.isArray(e)||(e=[e]),E._each(e,(function(e){var t=_[e.provider].adapter;t?t.enableAnalytics(e):E.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider,"."))}))},I.getBidAdapter=function(e){return C[e]},I.getAnalyticsAdapter=function(e){return _[e]},I.callTimedOutBidders=function(e,t,n){t=t.map((function(t){return t.params=E.getUserConfiguredParams(e,t.adUnitCode,t.bidder),t.timeout=n,t})),t=E.groupBy(t,"bidder"),Object.keys(t).forEach((function(e){M(e,"onTimeout",t[e])}))},I.callBidWonBidder=function(e,t,n){t.params=E.getUserConfiguredParams(n,t.adUnitCode,t.bidder),g.a.incrementBidderWinsCounter(t.adUnitCode,t.bidder),M(e,"onBidWon",t)},I.callSetTargetingBidder=function(e,t){M(e,"onSetTargeting",t)},I.callBidViewableBidder=function(e,t){M(e,"onBidViewable",t)},t.default=I},80:function(e,t,n){var r=n(107),i=n(28);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},81:function(e,t,n){var r=n(45),i=n(50),o=n(112),a=function(e){return function(t,n,a){var c,u=r(t),s=i(u.length),d=o(a,s);if(e&&n!=n){for(;s>d;)if((c=u[d++])!=c)return!0}else for(;s>d;d++)if((e||d in u)&&u[d]===n)return e||d||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},82:function(e,t,n){var r=n(113);n(136),n(138),n(140),n(142),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),e.exports=r},83:function(e,t,n){var r=n(53),i=n(29),o=n(30),a=n(34).f,c=n(60),u=n(116),s=c("meta"),d=0,f=Object.isExtensible||function(){return!0},l=function(e){a(e,s,{value:{objectID:"O"+ ++d,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,s)){if(!f(e))return"F";if(!t)return"E";l(e)}return e[s].objectID},getWeakData:function(e,t){if(!o(e,s)){if(!f(e))return!0;if(!t)return!1;l(e)}return e[s].weakData},onFreeze:function(e){return u&&p.REQUIRED&&f(e)&&!o(e,s)&&l(e),e}};r[s]=!0},839:function(e,t,n){e.exports=n(72)},84:function(e,t,n){var r=n(23),i=n(37),o=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},85:function(e,t,n){var r=n(15);e.exports=function(e){var t=e.return;if(void 0!==t)return r(t.call(e)).value}},86:function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},87:function(e,t,n){var r,i=n(15),o=n(121),a=n(88),c=n(53),u=n(124),s=n(78),d=n(65),f=d("IE_PROTO"),l=function(){},p=function(e){return"<script>"+e+"</"+"script>"},g=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;g=r?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var n=a.length;n--;)delete g.prototype[a[n]];return g()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(l.prototype=i(e),n=new l,l.prototype=null,n[f]=e):n=g(),void 0===t?n:o(n,t)}},88:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},89:function(e,t,n){var r=n(31);e.exports=function(e,t,n,i){i&&i.enumerable?e[t]=n:r(e,t,n)}},9:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=n(0),o=n(5),a=Array.prototype.slice,c=Array.prototype.push,u=i._map(o.EVENTS,(function(e){return e})),s=o.EVENT_ID_PATHS,d=[];e.exports=function(){var e={},t={};function n(t,n){i.logMessage("Emitting event for: "+t);var r=n[0]||{},o=r[s[t]],a=e[t]||{que:[]},u=i._map(a,(function(e,t){return t})),f=[];d.push({eventType:t,args:r,id:o,elapsedTime:i.getPerformanceNow()}),o&&i.contains(u,o)&&c.apply(f,a[o].que),c.apply(f,a.que),i._each(f,(function(e){if(e)try{e.apply(null,n)}catch(e){i.logError("Error executing handler:","events.js",e)}}))}return t.on=function(t,n,r){if(function(e){return i.contains(u,e)}(t)){var o=e[t]||{que:[]};r?(o[r]=o[r]||{que:[]},o[r].que.push(n)):o.que.push(n),e[t]=o}else i.logError("Wrong event name : "+t+" Valid event names :"+u)},t.emit=function(e){var t=a.call(arguments,1);n(e,t)},t.off=function(t,n,r){var o=e[t];i.isEmpty(o)||i.isEmpty(o.que)&&i.isEmpty(o[r])||r&&(i.isEmpty(o[r])||i.isEmpty(o[r].que))||(r?i._each(o[r].que,(function(e){var t=o[r].que;e===n&&t.splice(t.indexOf(e),1)})):i._each(o.que,(function(e){var t=o.que;e===n&&t.splice(t.indexOf(e),1)})),e[t]=o)},t.get=function(){return e},t.getEvents=function(){var e=[];return i._each(d,(function(t){var n=r({},t);e.push(n)})),e},t}()},90:function(e,t,n){"use strict";var r,i,o,a=n(28),c=n(91),u=n(31),s=n(30),d=n(23),f=n(17),l=d("iterator"),p=!1;[].keys&&("next"in(o=[].keys())?(i=c(c(o)))!==Object.prototype&&(r=i):p=!0);var g=null==r||a((function(){var e={};return r[l].call(e)!==e}));g&&(r={}),f&&!g||s(r,l)||u(r,l,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},91:function(e,t,n){var r=n(30),i=n(48),o=n(65),a=n(127),c=o("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=i(e),r(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},92:function(e,t,n){"use strict";var r=n(132).charAt,i=n(54),o=n(66),a="String Iterator",c=i.set,u=i.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:String(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},93:function(e,t,n){var r=n(15),i=n(61);e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},94:function(e,t,n){var r=n(158);e.exports=r},95:function(e,t,n){"use strict";t.a=function(e,t){if(e.labelAll)return{labelAll:!0,labels:e.labelAll,activeLabels:t};return{labelAll:!1,labels:e.labelAny,activeLabels:t}},t.c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=s(t);if(!n.shouldFilter)return!0;return!!n.sizesSupported[e]},t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.labels,n=void 0===t?[]:t,r=e.labelAll,o=void 0!==r&&r,c=e.activeLabels,d=void 0===c?[]:c,f=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u,g=s(p);f=Object(i.isPlainObject)(f)?Object(i.deepClone)(f):l?{banner:{sizes:l}}:{};var b=Object(i.deepAccess)(f,"banner.sizes");g.shouldFilter&&b&&(f.banner.sizes=b.filter((function(e){return g.sizesSupported[e]})));var v=Object.keys(f),y={active:v.every((function(e){return"banner"!==e}))||v.some((function(e){return"banner"===e}))&&Object(i.deepAccess)(f,"banner.sizes.length")>0&&(0===n.length||!o&&(n.some((function(e){return g.labels[e]}))||n.some((function(e){return a()(d,e)})))||o&&n.reduce((function(e,t){return e?g.labels[t]||a()(d,t):e}),!0)),mediaTypes:f};b&&b.length!==f.banner.sizes.length&&(y.filterResults={before:b,after:f.banner.sizes});return y};var r=n(3),i=n(0),o=n(12),a=n.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=[];function s(e){return e.reduce((function(e,t){if("object"===c(t)&&"string"==typeof t.mediaQuery&&t.mediaQuery.length>0){var n=!1;try{n=Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches}catch(e){Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),n=matchMedia(t.mediaQuery).matches}n&&(Array.isArray(t.sizesSupported)&&(e.shouldFilter=!0),["labels","sizesSupported"].forEach((function(n){return(t[n]||[]).forEach((function(t){return e[n][t]=!0}))})))}else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');return e}),{labels:{},sizesSupported:{},shouldFilter:!1})}r.b.getConfig("sizeConfig",(function(e){return function(e){u=e}(e.sizeConfig)}))},96:function(e,t,n){"use strict";t.b=function(e,t,n){var o={puts:e.map(a,n)};Object(r.a)(i.b.getConfig("cache.url"),function(e){return{success:function(t){var n;try{n=JSON.parse(t).responses}catch(t){return void e(t,[])}n?e(null,n):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(t,n){e(new Error("Error storing video ad in the cache: ".concat(t,": ").concat(JSON.stringify(n))),[])}}}(t),JSON.stringify(o),{contentType:"text/plain",withCredentials:!0})},t.a=function(e){return"".concat(i.b.getConfig("cache.url"),"?uuid=").concat(e)};var r=n(4),i=n(3),o=n(0);function a(e){var t,n,r,a={type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,r=n?"<![CDATA[".concat(n,"]]>"):"",'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t,"]]></VASTAdTagURI>\n        <Impression>").concat(r,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),ttlseconds:Number(e.ttl)};return i.b.getConfig("cache.vasttrack")&&(a.bidder=e.bidder,a.bidid=e.requestId,a.aid=e.auctionId,o.isPlainObject(this)&&this.hasOwnProperty("auctionStart")&&(a.timestamp=this.auctionStart)),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(a.key=e.customCacheKey),a}},99:function(e,t,n){n(100);var r=n(52);e.exports=r("Array","find")}});
/* AppNexus             */ pbjsChunk([291],{264:function(e,r,a){e.exports=a(265)},265:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",(function(){return R}));var t=a(13),n=a(0),i=a(3),s=a(1),o=a(2),d=a(24),p=a(11),c=a.n(p),u=a(12),l=a.n(u),m=a(22),f=a(7);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}var h="appnexus",_="https://ib.adnxs.com/ut/v3/prebid",k="https://ib.adnxs-simple.com/ut/v3/prebid",I=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],A=["minduration","maxduration","skip","skipafter","playbackmethod","api"],w=["age","externalUid","segments","gender","dnt","language"],x=["geo","device_id"],C=["enabled","dongle","member_id","debug_timeout"],S={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}},T={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},E=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,O=Object(f.b)(32,h),R={code:h,gvlid:32,aliases:[{code:"appnexusAst",gvlid:32},{code:"brealtime"},{code:"emxdigital",gvlid:183},{code:"pagescience"},{code:"defymedia"},{code:"gourmetads"},{code:"matomy"},{code:"featureforward"},{code:"oftmedia"},{code:"districtm",gvlid:144},{code:"adasta"},{code:"beintoo",gvlid:618}],supportedMediaTypes:[o.b,o.d,o.c],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var a=e.map(q),t=c()(e,M),s={};!0===i.b.getConfig("coppa")&&(s={coppa:!0}),t&&Object.keys(t.params.user).filter((function(e){return l()(w,e)})).forEach((function(e){var r=n.convertCamelToUnderscore(e);if("segments"===e&&n.isArray(t.params.user[e])){var a=[];t.params.user[e].forEach((function(e){n.isNumber(e)?a.push({id:e}):n.isPlainObject(e)&&a.push(e)})),s[r]=a}else"segments"!==e&&(s[r]=t.params.user[e])}));var o,d=c()(e,B);d&&d.params&&d.params.app&&(o={},Object.keys(d.params.app).filter((function(e){return l()(x,e)})).forEach((function(e){return o[e]=d.params.app[e]})));var p,u=c()(e,F);u&&u.params&&d.params.app&&d.params.app.id&&(p={appid:u.params.app.id});var m={},f={},v=O.getCookie("apn_prebid_debug")||null;if(v)try{m=JSON.parse(v)}catch(e){n.logError("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{var y=c()(e,V);y&&y.debug&&(m=y.debug)}m&&m.enabled&&Object.keys(m).filter((function(e){return l()(C,e)})).forEach((function(e){f[e]=m[e]}));var g=c()(e,D),h=g?parseInt(g.params.member,10):0,I=e[0].schain,A=c()(e,W),S={tags:b(a),user:s,sdk:{source:"pbjs",version:"5.8.0"},schain:I};if(A&&(S.iab_support={omidpn:"Appnexus",omidpv:"5.8.0"}),h>0&&(S.member_id=h),d&&(S.device=o),u&&(S.app=p),i.b.getConfig("adpod.brandCategoryExclusion")&&(S.brand_category_uniqueness=!0),f.enabled&&(S.debug=f,n.logInfo("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(f,null,4))),r&&r.gdprConsent&&(S.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies},r.gdprConsent.addtlConsent&&-1!==r.gdprConsent.addtlConsent.indexOf("~"))){var T=r.gdprConsent.addtlConsent,E=T.substring(T.indexOf("~")+1);S.gdpr_consent.addtl_consent=E.split(".").map((function(e){return parseInt(e,10)}))}if(r&&r.uspConsent&&(S.us_privacy=r.uspConsent),r&&r.refererInfo){var R={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map((function(e){return encodeURIComponent(e)})).join(",")};S.referrer_detection=R}if(c()(e,J)&&e.filter(J).forEach((function(e){var r=function(e,r){var a=r.mediaTypes.video,t=a.durationRangeSec,i=a.requireExactDuration,s=function(e){var r=e.adPodDurationSec,a=e.durationRangeSec,t=e.requireExactDuration,i=n.getMinValueFromArray(a),s=Math.floor(r/i);return t?Math.max(s,a.length):s}(r.mediaTypes.video),o=n.getMaxValueFromArray(t),d=e.filter((function(e){return e.uuid===r.bidId})),p=n.fill.apply(n,b(d).concat([s]));if(i){var c=Math.ceil(s/t.length),u=n.chunk(p,c);t.forEach((function(e,r){u[r].map((function(r){H(r,"minduration",e),H(r,"maxduration",e)}))}))}else p.map((function(e){return H(e,"maxduration",o)}));return p}(a,e),t=S.tags.filter((function(r){return r.uuid!==e.bidId}));S.tags=[].concat(b(t),b(r))})),e[0].userId){var j=[];K(j,n.deepAccess(e[0],"userId.flocId.id"),"chrome.com",null),K(j,n.deepAccess(e[0],"userId.criteoId"),"criteo.com",null),K(j,n.deepAccess(e[0],"userId.netId"),"netid.de",null),K(j,n.deepAccess(e[0],"userId.idl_env"),"liveramp.com",null),K(j,n.deepAccess(e[0],"userId.tdid"),"adserver.org","TDID"),K(j,n.deepAccess(e[0],"userId.uid2.id"),"uidapi.com","UID2"),j.length&&(S.eids=j)}return a[0].publisher_id&&(S.publisher_id=a[0].publisher_id),function(e,r){var a=[],t={withCredentials:!0},s=_;N(r)||(s=k);"TRUE"!==n.getParameterByName("apn_test").toUpperCase()&&!0!==i.b.getConfig("apn_test")||(t.customHeaders={"X-Is-Test":1});if(e.tags.length>15){var o=n.deepClone(e);n.chunk(e.tags,15).forEach((function(e){o.tags=e;var n=JSON.stringify(o);a.push({method:"POST",url:s,data:n,bidderRequest:r,options:t})}))}else{var d=JSON.stringify(e);a={method:"POST",url:s,data:d,bidderRequest:r,options:t}}return a}(S,r)},interpretResponse:function(e,r){var a=this,i=r.bidderRequest;e=e.body;var d=[];if(!e||e.error){var p="in response for ".concat(i.bidderCode," adapter");return e&&e.error&&(p+=": ".concat(e.error)),n.logError(p),d}if(e.tags&&e.tags.forEach((function(e){var r,p=(r=e)&&r.ads&&r.ads.length&&c()(r.ads,(function(e){return e.rtb}));if(p&&0!==p.cpm&&l()(a.supportedMediaTypes,p.ad_type)){var u=function(e,r,a){var i=n.getBidRequest(e.uuid,[a]),d={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:i.adUnitCode,appnexus:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.adomain&&(d.meta=y({},d.meta,{advertiserDomains:[]}));r.advertiser_id&&(d.meta=y({},d.meta,{advertiserId:r.advertiser_id}));if(r.rtb.video){switch(y(d,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastImpUrl:r.notify_url,ttl:3600}),n.deepAccess(i,"mediaTypes.video.context")){case o.a:var p=Object(s.getIabSubCategory)(i.bidder,r.brand_category_id);d.meta=y({},d.meta,{primaryCatId:p});var u=r.deal_priority;d.video={context:o.a,durationSeconds:Math.floor(r.rtb.video.duration_ms/1e3),dealTier:u},d.vastUrl=r.rtb.video.asset_url;break;case m.b:if(d.adResponse=e,d.adResponse.ad=d.adResponse.ads[0],d.adResponse.ad.video=d.adResponse.ad.rtb.video,d.vastXml=r.rtb.video.content,r.renderer_url){var l=c()(a.bids,(function(r){return r.bidId===e.uuid})),f=n.deepAccess(l,"renderer.options");d.renderer=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.a.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1,adUnitCode:e});try{i.setRender(L)}catch(e){n.logWarn("Prebid Error calling setRender on renderer",e)}return i.setEventHandlers({impression:function(){return n.logMessage("AppNexus outstream video impression event")},loaded:function(){return n.logMessage("AppNexus outstream video loaded event")},ended:function(){n.logMessage("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),i}(d.adUnitCode,r,f)}break;case m.a:d.vastUrl=r.notify_url+"&redir="+encodeURIComponent(r.rtb.video.asset_url)}}else if(r.rtb[o.c]){var v=r.rtb[o.c],b=r.viewability.config.replace("src=","data-src="),g=v.javascript_trackers;null==g?g=b:n.isStr(g)?g=[g,b]:g.push(b),d[o.c]={title:v.title,body:v.desc,body2:v.desc2,cta:v.ctatext,rating:v.rating,sponsoredBy:v.sponsored,privacyLink:v.privacy_link,address:v.address,downloads:v.downloads,likes:v.likes,phone:v.phone,price:v.price,salePrice:v.saleprice,clickUrl:v.link.url,displayUrl:v.displayurl,clickTrackers:v.link.click_trackers,impressionTrackers:v.impression_trackers,javascriptTrackers:g},v.main_img&&(d.native.image={url:v.main_img.url,height:v.main_img.height,width:v.main_img.width}),v.icon&&(d.native.icon={url:v.icon.url,height:v.icon.height,width:v.icon.width})}else{y(d,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{if(r.rtb.trackers){var h=r.rtb.trackers[0].impression_urls[0],_=n.createTrackPixelHtml(h);d.ad+=_}}catch(e){n.logError("Error appending tracking pixel",e)}}return d}(e,p,i);u.mediaType=function(e){var r=e.ad_type;return r===o.d?o.d:r===o.c?o.c:o.b}(p),d.push(u)}})),e.debug&&e.debug.debug_info){var u="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;u=u.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),n.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),n.logMessage(u)}return d},getMappingFileInfo:function(){return{url:"https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",refreshInDays:2}},getUserSyncs:function(e,r,a){if(e.iframeEnabled&&N({gdprConsent:a}))return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}]},transformBidParams:function(e,r){return e=n.convertTypes({member:"string",invCode:"string",placementId:"number",keywords:n.transformBidderParamKeywords,publisherId:"number"},e),r&&(e.use_pmt_rule="boolean"==typeof e.usePaymentRule&&e.usePaymentRule,e.usePaymentRule&&delete e.usePaymentRule,j(e.keywords)&&e.keywords.forEach(P),Object.keys(e).forEach((function(r){var a=n.convertCamelToUnderscore(r);a!==r&&(e[a]=e[r],delete e[r])}))),e},onBidWon:function(e){e.native&&function(e){var r=function(e){var r;if(n.isStr(e)&&U(e))r=e;else if(n.isArray(e))for(var a=0;a<e.length;a++){var t=e[a];U(t)&&(r=t)}return r}(e.native.javascriptTrackers);if(r)for(var a="pbjs_adid="+e.adId+";pbjs_auc="+e.adUnitCode,t=function(e){var r=e.indexOf('src="')+5,a=e.indexOf('"',r);return e.substring(r,a)}(r),i=t.replace("dom_id=%native_dom_id%",a),s=document.getElementsByTagName("iframe"),o=!1,d=0;d<s.length&&!o;d++){var p=s[d];try{var c=p.contentDocument||p.contentWindow.document;if(c)for(var u=c.getElementsByTagName("script"),l=0;l<u.length&&!o;l++){var m=u[l];m.getAttribute("data-src")==t&&(m.setAttribute("src",i),m.setAttribute("data-src",""),m.removeAttribute&&m.removeAttribute("data-src"),o=!0)}}catch(e){if(!(e instanceof DOMException&&"SecurityError"===e.name))throw e}}}(e)}};function j(e){return!!(n.isArray(e)&&e.length>0)}function P(e){j(e.value)&&""===e.value[0]&&delete e.value}function U(e){var r=e.match(E),a=null!=r&&r.length>=1,t=e.match("trk.js"),n=null!=t&&t.length>=1;return e.startsWith("<script")&&n&&a}function N(e){var r=!0;return e&&e.gdprConsent&&e.gdprConsent.gdprApplies&&2===e.gdprConsent.apiVersion&&(r=!(!0!==n.deepAccess(e.gdprConsent,"vendorData.purpose.consents.1"))),r}function q(e){var r={};r.sizes=z(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placementId?r.id=parseInt(e.params.placementId,10):r.code=e.params.invCode,r.allow_smaller_sizes=e.params.allowSmallerSizes||!1,r.use_pmt_rule=e.params.usePaymentRule||!1,r.prebid=!0,r.disable_psa=!0;var a=function(e){if(!n.isFn(e.getFloor))return e.params.reserve?e.params.reserve:null;var r=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if(n.isPlainObject(r)&&!isNaN(r.floor)&&"USD"===r.currency)return r.floor;return null}(e);if(a&&(r.reserve=a),e.params.position&&(r.position={above:1,below:2}[e.params.position]||0),e.params.trafficSourceCode&&(r.traffic_source_code=e.params.trafficSourceCode),e.params.privateSizes&&(r.private_sizes=z(e.params.privateSizes)),e.params.supplyType&&(r.supply_type=e.params.supplyType),e.params.pubClick&&(r.pubclick=e.params.pubClick),e.params.extInvCode&&(r.ext_inv_code=e.params.extInvCode),e.params.publisherId&&(r.publisher_id=parseInt(e.params.publisherId,10)),e.params.externalImpId&&(r.external_imp_id=e.params.externalImpId),!n.isEmpty(e.params.keywords)){var t=n.transformBidderParamKeywords(e.params.keywords);t.length>0&&t.forEach(P),r.keywords=t}var i,s,p=n.deepAccess(e,"ortb2Imp.ext.data.pbadslot");if(p&&(r.gpid=p),(e.mediaType===o.c||n.deepAccess(e,"mediaTypes.".concat(o.c)))&&(r.ad_types.push(o.c),0===r.sizes.length&&(r.sizes=z([1,1])),e.nativeParams)){var u=(i=e.nativeParams,s={},Object.keys(i).forEach((function(e){var r=T[e]&&T[e].serverName||T[e]||e,a=T[e]&&T[e].requiredParams;if(s[r]=y({},a,i[e]),(r===T.image.serverName||r===T.icon.serverName)&&s[r].sizes){var t=s[r].sizes;(n.isArrayOfNums(t)||n.isArray(t)&&t.length>0&&t.every((function(e){return n.isArrayOfNums(e)})))&&(s[r].sizes=z(s[r].sizes))}r===T.privacyLink&&(s.privacy_supported=!0)})),s);r[o.c]={layouts:[u]}}var m=n.deepAccess(e,"mediaTypes.".concat(o.d)),f=n.deepAccess(e,"mediaTypes.video.context");r.hb_source=m&&"adpod"===f?7:1,(e.mediaType===o.d||m)&&r.ad_types.push(o.d),(e.mediaType===o.d||m&&"outstream"!==f)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter((function(e){return l()(I,e)})).forEach((function(a){switch(a){case"context":case"playback_method":var t=e.params.video[a];t=n.isArray(t)?t[0]:t,r.video[a]=S[a][t];break;case"frameworks":break;default:r.video[a]=e.params.video[a]}})),e.params.video.frameworks&&n.isArray(e.params.video.frameworks)&&(r.video_frameworks=e.params.video.frameworks)),m&&(r.video=r.video||{},Object.keys(m).filter((function(e){return l()(A,e)})).forEach((function(e){switch(e){case"minduration":case"maxduration":"number"!=typeof r.video[e]&&(r.video[e]=m[e]);break;case"skip":"boolean"!=typeof r.video.skippable&&(r.video.skippable=1===m[e]);break;case"skipafter":"number"!=typeof r.video.skipoffset&&(r.video.skippoffset=m[e]);break;case"playbackmethod":if("number"!=typeof r.video.playback_method){var a=m[e];(a=n.isArray(a)?a[0]:a)>=1&&a<=4&&(r.video.playback_method=a)}break;case"api":if(!r.video_frameworks&&n.isArray(m[e])){var t=m[e].map((function(e){var r=4===e?5:5===e?4:e;if(r>=1&&r<=5)return r})).filter((function(e){return e}));r.video_frameworks=t}}}))),e.renderer&&(r.video=y({},r.video,{custom_renderer_present:!0})),e.params.frameworks&&n.isArray(e.params.frameworks)&&(r.banner_frameworks=e.params.frameworks);var v=c()(d.a.getAdUnits(),(function(r){return e.transactionId===r.transactionId}));return v&&v.mediaTypes&&v.mediaTypes.banner&&r.ad_types.push(o.b),0===r.ad_types.length&&delete r.ad_types,r}function z(e){var r=[],a={};if(n.isArray(e)&&2===e.length&&!n.isArray(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===v(e))for(var t=0;t<e.length;t++){var i=e[t];(a={}).width=parseInt(i[0],10),a.height=parseInt(i[1],10),r.push(a)}return r}function M(e){return!!e.params.user}function D(e){return!!parseInt(e.params.member,10)}function B(e){if(e.params)return!!e.params.app}function F(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function V(e){return!!e.debug}function J(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===o.a}function W(e){var r=!1,a=e.params,t=e.params.video;return a.frameworks&&n.isArray(a.frameworks)&&(r=l()(e.params.frameworks,6)),!r&&t&&t.frameworks&&n.isArray(t.frameworks)&&(r=l()(e.params.video.frameworks,6)),r}function H(e,r,a){n.isEmpty(e.video)&&(e.video={}),e.video[r]=a}function L(e){var r,a;r=e.adUnitCode,(a=document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0]&&a[0].style.setProperty("display","none"),function(e){try{var r=document.getElementById(e).querySelectorAll("script[id^='sas_script']");r[0].nextSibling&&"iframe"===r[0].nextSibling.localName&&r[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push((function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},$.bind(null,e))}))}function $(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}function K(e,r,a,t){return r&&(t?e.push({source:a,id:r,rti_partner:t}):e.push({source:a,id:r})),e}Object(s.registerBidder)(R)}},[264]);
/* BrowsiRTDProvider    */ pbjsChunk([273],{304:function(t,e,r){t.exports=r(305)},305:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addBrowsiTag=y,e.collectData=m,e.setData=O,e.isIdMatchingAdUnit=h,e.getMacroId=j,r.d(e,"browsiSubmodule",(function(){return v}));var n=r(0),o=r(10),a=r(4),i=r(40),c=r(7),u=r(11),s=r.n(u);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(c.b)(),f={},g=null;function y(t){var e=Object(i.a)(t.u,"browsi");return e.async=!0,e.setAttribute("data-sitekey",f.siteKey),e.setAttribute("data-pubkey",f.pubKey),e.setAttribute("prebidbpt","true"),e.setAttribute("id","browsi-tag"),e.setAttribute("src",t.u),e.prebidData=n.deepClone(t),f.keyName&&(e.prebidData.kn=f.keyName),e}function m(){var t=window.top,e=t.document,r=null;try{r=d.getDataFromLocalStorage("__brtd")}catch(t){n.logError("unable to parse __brtd")}var o,i,c=p(p(p(p({},{sk:f.siteKey,sw:t.screen&&t.screen.width||-1,sh:t.screen&&t.screen.height||-1,url:"".concat(e.location.protocol,"//").concat(e.location.host).concat(e.location.pathname)}),r?{us:r}:{us:"{}"}),document.referrer?{r:document.referrer}:{}),document.title?{at:document.title}:{});o="//".concat(f.url,"/prebid?").concat((i=c,Object.keys(i).map((function(t){return t+"="+encodeURIComponent(i[t])})).join("&"))),Object(a.b)()(o,{success:function(t,e){if(200===e.status)try{var r=JSON.parse(t);r&&r.p&&r.kn?O({p:r.p,kn:r.kn,pmd:r.pmd}):O({}),y(r)}catch(t){n.logError("unable to parse data"),O({})}else 204===e.status&&O({})},error:function(){O({}),n.logError("unable to get prediction data")}})}function O(t){g=t}function w(t,e){var r=t<0?"NA":(Math.floor(10*t)/10).toFixed(2),n={};return n[(f.keyName||e||"browsiViewability").toString()]=r.toString(),n}function h(t,e){if(!e||!e.length||!t)return!0;var r=t.getAdUnitPath();return-1!==e.indexOf(r)}function j(t,e){if(t)try{return function(t,e,r,n){var o=t.p.replace(/['"]+/g,"").replace(/<DIV_ID>/g,e);r&&(o=o.replace(/<AD_UNIT>/g,r));n&&(o=o.replace(/<KEY_(\w+)>/g,n));t.s&&(o=o.substring(t.s.s,t.s.e));return o}(t,e.getSlotElementId(),e.getAdUnitPath(),(function(t,r){return r&&e.getTargeting(r).join("_")||"NA"}))}catch(e){n.logError("failed to evaluate: ".concat(t))}return e.getSlotElementId()}var v={name:"browsi",getTargetingData:function(t){try{var e=g&&g.p||{};return t.reduce((function(t,r){if(!r)return t;var o=function(t){var e=n.isGptPubadsDefined()&&window.googletag.pubads().getSlots();if(!e||!e.length)return null;return s()(e,(function(e){return e.getSlotElementId()===t||e.getAdUnitPath()===t}))||null}(r),a=o?j(g.pmd,o):r,i=e[a];if(t[r]=w(-1,g.kn),!i)return t;if(i.p){if(!h(o,i.w))return t;t[r]=w(i.p,g.kn)}return t}),{})}catch(t){return{}}},init:function(t){(f=t.params)&&f.siteKey&&f.pubKey&&f.url?m():n.logError("missing params for Browsi provider");return!0}};Object(o.e)("realTimeData",v)}},[304]);
/* Concert              */ pbjsChunk([263],{326:function(e,t,n){e.exports=n(327)},327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return i}));var r=n(0),o=n(1),s=n(7);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={code:"concert",isBidRequestValid:function(e){return!!e.params.partnerId||(r.logWarn("Missing partnerId bid parameter"),!1)},buildRequests:function(e,t){r.logMessage(e),r.logMessage(t);var n={meta:{prebidVersion:"5.8.0",pageUrl:t.refererInfo.referer,screen:[window.screen.width,window.screen.height].join("x"),debug:r.debugTurnedOn(),uid:c(t),optedOut:u(),adapterVersion:"1.1.1",uspConsent:t.uspConsent,gdprConsent:t.gdprConsent}};return n.slots=e.map((function(e){return{name:e.adUnitCode,bidId:e.bidId,transactionId:e.transactionId,sizes:e.params.sizes||e.sizes,partnerId:e.params.partnerId,slotType:e.params.slotType,adSlot:e.params.slot||e.adUnitCode,placementId:e.params.placementId||"",site:e.params.site||t.refererInfo.referer}})),r.logMessage(n),{method:"POST",url:"".concat("https://bids.concert.io","/bids/prebid"),data:JSON.stringify(n)}},interpretResponse:function(e,t){r.logMessage(e),r.logMessage(t);var n=e.body;if(!n||"object"!==a(n))return[];var o;return o=n.bids.map((function(e){return{requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,ad:e.ad,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},creativeId:e.creativeId,netRevenue:e.netRevenue,currency:e.currency}})),r.debugTurnedOn()&&n.debug&&r.logMessage("CONCERT",n.debug),r.logMessage(o),o},getUserSyncs:function(e,t,n,r){var o=[];if(e.iframeEnabled&&!u()){var s=[];n&&"boolean"==typeof n.gdprApplies&&s.push("gdpr_applies=".concat(n.gdprApplies?"1":"0")),n&&"string"==typeof n.consentString&&s.push("gdpr_consent=".concat(n.consentString)),r&&"string"==typeof r&&s.push("usp_consent=".concat(r)),o.push({type:"iframe",url:"https://cdn.concert.io/lib/bids/sync.html"+(s.length>0?"?".concat(s.join("&")):"")})}return o},onTimeout:function(e){r.logMessage("concert bidder timed out"),r.logMessage(e)},onBidWon:function(e){r.logMessage("concert bidder won bid"),r.logMessage(e)}};Object(o.registerBidder)(i);var d=Object(s.b)();function c(e){if(u()||!function(e){return!("string"===e.uspConsent&&"1YY"===e.uspConsent.toUpperCase().substring(0,2))}(e))return!1;var t="c_uid",n=d.getDataFromLocalStorage(t);return n||(n=r.generateUUID(),d.setDataInLocalStorage(t,n)),n}function u(){return"true"===d.getDataFromLocalStorage("c_nap")}}},[326]);
/* ConsentManagement    */ pbjsChunk([262],{330:function(n,t,e){n.exports=e(331)},331:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"allowAuction",(function(){return v})),e.d(t,"userCMP",(function(){return f})),e.d(t,"consentTimeout",(function(){return p})),e.d(t,"gdprScope",(function(){return g})),e.d(t,"staticConsentData",(function(){return m})),t.requestBidsHook=D,t.resetConsentData=function(){C=void 0,f=void 0,b=0,i.gdprDataHandler.setConsentData(null)},t.setConsentConfig=I;var o=e(0),a=e(3),i=e(8),r=e(12),s=e.n(r),c=e(73),d=e.n(c);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var f,p,g,m,C,v={value:true,definedInConfig:!1},b=0,y=!1,w={iab:function(n,t,e){function a(a,i){o.logInfo("Received a response from CMP",a),i?!1!==a.gdprApplies&&"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus||n(a,e):t("CMP unable to register callback function.  Please check CMP setup.",e)}var i=function(){var t={};function a(){t.getConsentData&&t.getVendorConsents&&(o.logInfo("Received all requested responses from CMP",t),n(t,e))}return{consentDataCallback:function(n){t.getConsentData=n,a()},vendorConsentsCallback:function(n){t.getVendorConsents=n,a()}}}(),r={},s=function(){for(var n,t,e=window;!n;){try{if("function"==typeof e.__tcfapi||"function"==typeof e.__cmp){"function"==typeof e.__tcfapi?(b=2,t=e.__tcfapi):(b=1,t=e.__cmp),n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){b=2,n=e;break}}catch(n){}try{if(e.frames.__cmpLocator){b=1,n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}(),c=s.cmpFrame,l=s.cmpFunction;if(!c)return t("CMP not found.",e);o.isFn(l)?(o.logInfo("Detected CMP API is directly accessible, calling it now..."),1===b?(l("getConsentData",null,i.consentDataCallback),l("getVendorConsents",null,i.vendorConsentsCallback)):2===b&&l("addEventListener",b,a)):1===b&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(o.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),f("getConsentData",i.consentDataCallback),f("getVendorConsents",i.vendorConsentsCallback)):(o.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===b?(p("getConsentData",c,i.consentDataCallback),p("getVendorConsents",c,i.vendorConsentsCallback)):2===b&&p("addEventListener",c,a));function f(n,t){var a=e.adUnits,i=1,r=1;if(Array.isArray(a)&&a.length>0){var s=o.getAdUnitSizes(a[0]);i=s[0][0],r=s[0][1]}window.$sf.ext.register(i,r,(function(e,o){if("cmpReturn"===e){var a="getConsentData"===n?o.vendorConsentData:o.vendorConsents;t(a)}})),window.$sf.ext.cmp(n)}function p(n,t,e){var o=2===b?"__tcfapi":"__cmp",a="".concat(o,"Call");function i(n){var t="".concat(o,"Return"),e="string"==typeof n.data&&d()(n.data,t)?JSON.parse(n.data):n.data;if(e[t]&&e[t].callId){var a=e[t];void 0!==r[a.callId]&&r[a.callId](a.returnValue,a.success)}}2===b?(window[o]=function(n,e,o,i){var s=Math.random()+"",c=u({},a,{command:n,version:e,parameter:i,callId:s});r[s]=o,t.postMessage(c,"*")},window.addEventListener("message",i,!1),window[o](n,b,e)):(window[o]=function(n,e,o){var i=Math.random()+"",s=u({},a,{command:n,parameter:e,callId:i});r[i]=o,t.postMessage(s,"*")},window.addEventListener("message",i,!1),window[o](n,void 0,e))}},static:function(n,t,e){n(m,e)}};function D(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return C?(o.logInfo("User consent information already known.  Pulling internally stored information..."),P(null,e)):s()(Object.keys(w),f)?(w[f].call(this,k,h,e),void(e.haveExited||(0===p?k(void 0,e):e.timer=setTimeout(M.bind(null,e),p)))):(o.logWarn("CMP framework (".concat(f,") is not a supported framework.  Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function k(n,t){"static"===f&&2===(b=n.getConsentData?1:n.getTCData?2:0)&&(n=n.getTCData);var e=1===b?function(n){var t=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||o.isStr(n.getConsentData.consentData)&&o.isPlainObject(n.getVendorConsents)&&Object.keys(n.getVendorConsents).length>1))}:2===b?function(){var t=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:g,e=n&&n.tcString;return!("boolean"==typeof t&&(!0!==t||o.isStr(e)))}:null;v.definedInConfig&&2===b?o.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2"):v.definedInConfig||1!==b||o.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(true,").")),o.isFn(e)?e(n)?h("CMP returned unexpected value during lookup process.",t,n):(clearTimeout(t.timer),A(n),P(null,t)):h("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",t,n)}function M(n){h("CMP workflow exceeded timeout threshold.",n)}function h(n,t,e){clearTimeout(t.timer),v.value&&1===b&&A(void 0),P(n,t,e)}function A(n){1===b?C={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:g}:(C={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:g},n&&n.addtlConsent&&o.isStr(n.addtlConsent)&&(C.addtlConsent=n.addtlConsent)),C.apiVersion=b,i.gdprDataHandler.setConsentData(C)}function P(n,t,e){if(!1===t.haveExited){t.haveExited=!0;var a=t.context,i=t.args,r=t.nextFn;n?v.value&&1===b?(o.logWarn(n+" 'allowAuctionWithoutConsent' activated.",e),r.apply(a,i)):(o.logError(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():o.logError("Error executing bidsBackHandler")):r.apply(a,i)}}function I(n){(n=n&&(n.gdpr||n.usp?n.gdpr:n))&&"object"===l(n)?(o.isStr(n.cmpApi)?f=n.cmpApi:(f="iab",o.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),o.isNumber(n.timeout)?p=n.timeout:(p=1e4,o.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(v.value=n.allowAuctionWithoutConsent,v.definedInConfig=!0),g=!0===n.defaultGdprScope,o.logInfo("consentManagement module has been activated..."),"static"===f&&(o.isPlainObject(n.consentData)?(m=n.consentData,p=0):o.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),y||pbjs.requestBids.before(D,50),y=!0):o.logWarn("consentManagement config not defined, exiting consent manager")}a.b.getConfig("consentManagement",(function(n){return I(n.consentManagement)}))}},[330]);
/* Consent USP          */ pbjsChunk([261],{337:function(t,n,e){t.exports=e(338)},338:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"consentAPI",(function(){return c})),e.d(n,"consentTimeout",(function(){return r})),e.d(n,"staticConsentData",(function(){return u})),n.requestBidsHook=f,n.resetConsentData=function(){},n.setConsentConfig=P;var a=e(0),o=e(3),i=e(8);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c,r,u,l,d=!1,p={iab:function(t,n,e){var o=(u={},{consentDataCallback:function(a,o){o&&a.uspString&&(u.usPrivacy=a.uspString),u.usPrivacy?t(u,e):n("Unable to get USP consent string.",e)}}),i={},s=function(){for(var t,n,e=window;!t;){try{if("function"==typeof e.__uspapi){n=e.__uspapi,t=e;break}}catch(t){}try{if(e.frames.__uspapiLocator){t=e;break}}catch(t){}if(e===window.top)break;e=e.parent}return{uspapiFrame:t,uspapiFunction:n}}(),c=s.uspapiFrame,r=s.uspapiFunction;var u;if(!c)return n("USP CMP not found.",e);a.isFn(r)?(a.logInfo("Detected USP CMP is directly accessible, calling it now..."),r("getUSPData",1,o.consentDataCallback)):(a.logInfo("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."),function(t,n,e){function a(t){var n=t&&t.data&&t.data.__uspapiReturn;n&&n.callId&&void 0!==i[n.callId]&&(i[n.callId](n.returnValue,n.success),delete i[n.callId])}window.__uspapi=function(t,e,a){var o=Math.random()+"",s={__uspapiCall:{command:t,version:e,callId:o}};i[o]=a,n.postMessage(s,"*")},window.addEventListener("message",a,!1),window.__uspapi(t,1,e)}("getUSPData",c,o.consentDataCallback))},static:function(t,n,e){t(u,e)}};function f(t,n){var e={context:this,args:[n],nextFn:t,adUnits:n.adUnits||pbjs.adUnits,bidsBackHandler:n.bidsBackHandler,haveExited:!1,timer:null};if(!p[c])return a.logWarn("USP framework (".concat(c,") is not a supported framework. Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args);p[c].call(this,g,b,e),e.haveExited||(0===r?g(void 0,e):e.timer=setTimeout(m.bind(null,e),r))}function g(t,n){!t||!t.usPrivacy?b("USPAPI returned unexpected value during lookup process.",n,t):(clearTimeout(n.timer),function(t){t&&t.usPrivacy&&(l=t.usPrivacy,i.uspDataHandler.setConsentData(l))}(t),y(null,n))}function m(t){b("USPAPI workflow exceeded timeout threshold.",t)}function b(t,n,e){clearTimeout(n.timer),y(t,n,e)}function y(t,n,e){if(!1===n.haveExited){n.haveExited=!0;var o=n.context,i=n.args,s=n.nextFn;t&&a.logWarn(t+" Resuming auction without consent data as per consentManagement config.",e),s.apply(o,i)}}function P(t){(t=t&&t.usp)&&"object"===s(t)?(a.isStr(t.cmpApi)?c=t.cmpApi:(c="iab",a.logInfo("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat("iab",")."))),a.isNumber(t.timeout)?r=t.timeout:(r=50,a.logInfo("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),a.logInfo("USPAPI consentManagement module has been activated..."),"static"===c&&(a.isPlainObject(t.consentData)&&a.isPlainObject(t.consentData.getUSPData)?(t.consentData.getUSPData.uspString&&(u={usPrivacy:t.consentData.getUSPData.uspString}),r=0):a.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),d||pbjs.requestBids.before(f,50),d=!0):a.logWarn("consentManagement.usp config not defined, exiting usp consent manager")}o.b.getConfig("consentManagement",(function(t){return P(t.consentManagement)}))}},[337]);
/* Consumable           */ pbjsChunk([260],{339:function(e,r,n){e.exports=n(340)},340:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",(function(){return o}));var t=n(0),i=n(1);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a=0,d="consumable",o={code:"consumable",isBidRequestValid:function(e){return!!(e.params.networkId&&e.params.siteId&&e.params.unitId&&e.params.unitName)},buildRequests:function(e,r){var n={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return n;a=e[0].params.siteId,d=e[0].bidder;var t=s({placements:[],time:Date.now(),url:r.refererInfo.referer,referrer:document.referrer,source:[{name:"prebidjs",version:"5.8.0"}]},e[0].params);return r&&r.gdprConsent&&(t.gdpr={consent:r.gdprConsent.consentString,applies:"boolean"!=typeof r.gdprConsent.gdprApplies||r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(t.ccpa=r.uspConsent),e.map((function(e){var r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes||[],n=s({divName:e.bidId,adTypes:e.adTypes||p(r)},e.params);n.networkId&&n.siteId&&n.unitId&&n.unitName&&t.placements.push(n)})),n.data=JSON.stringify(t),n.bidRequest=e,n.bidderRequest=r,n.url="https://e.serverbid.com/api/v2",n},interpretResponse:function(e,r){var n,t,i,s,a=[];t=r.bidRequest,e=(e||{}).body;for(var d=0;d<t.length;d++)if(n={},i=(s=t[d]).bidId,e){var o=e.decisions&&e.decisions[i],u=o&&o.pricing&&o.pricing.clearPrice;o&&u&&(n.requestId=i,n.cpm=u,n.width=o.width,n.height=o.height,n.unitId=s.params.unitId,n.unitName=s.params.unitName,n.ad=c(o,n.unitId,n.unitName),n.currency="USD",n.creativeId=o.adId,n.ttl=30,n.meta={advertiserDomains:o.adomain?o.adomain:[]},n.netRevenue=!0,n.referrer=r.bidderRequest.refererInfo.referer,a.push(n))}return a},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://sync.serverbid.com/ss/"+a+".html"}]:e.pixelEnabled&&r.length>0?r[0].body.pixels:void t.logWarn(d+": Please enable iframe based user syncing.")}},u=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];function p(e){var r=[];return e.forEach((function(e){var n=u.indexOf(e[0]+"x"+e[1]);n>=0&&r.push(n)})),r}function c(e,r,n){return e.contents&&e.contents[0]&&e.contents[0].body+t.createTrackPixelHtml(e.impressionUrl)}u[77]="970x90",u[123]="970x250",u[43]="300x600",u[286]="970x66",u[3230]="970x280",u[429]="486x60",u[374]="700x500",u[934]="300x1050",u[1578]="320x100",u[331]="320x250",u[3301]="320x267",u[2730]="728x250",Object(i.registerBidder)(o)}},[339]);
/* Criteo               */ pbjsChunk([1],{345:function(t,e,r){t.exports=r(346)},346:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_require__.d(__webpack_exports__,"ADAPTER_VERSION",(function(){return ADAPTER_VERSION})),__webpack_require__.d(__webpack_exports__,"PROFILE_ID_PUBLISHERTAG",(function(){return PROFILE_ID_PUBLISHERTAG})),__webpack_require__.d(__webpack_exports__,"FAST_BID_VERSION_CURRENT",(function(){return FAST_BID_VERSION_CURRENT})),__webpack_require__.d(__webpack_exports__,"spec",(function(){return spec})),__webpack_exports__.canFastBid=canFastBid,__webpack_exports__.getFastBidUrl=getFastBidUrl,__webpack_exports__.tryGetCriteoFastBid=tryGetCriteoFastBid;var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__=__webpack_require__(40),__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_2__src_config_js__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_4__src_utils_js__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__=__webpack_require__(11),__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__),__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__=__webpack_require__(68),__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__=__webpack_require__(7);function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var GVLID=91,ADAPTER_VERSION=34,BIDDER_CODE="criteo",CDB_ENDPOINT="https://bidder.criteo.com/cdb",PROFILE_ID_INLINE=207,PROFILE_ID_PUBLISHERTAG=185,storage=Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID),LOG_PREFIX="Criteo: ",FAST_BID_VERSION_PLACEHOLDER="%FAST_BID_VERSION%",FAST_BID_VERSION_CURRENT=105,FAST_BID_VERSION_LATEST="latest",FAST_BID_VERSION_NONE="none",PUBLISHER_TAG_URL_TEMPLATE="https://static.criteo.net/js/ld/publishertag.prebid"+FAST_BID_VERSION_PLACEHOLDER+".js",FAST_BID_PUBKEY_E=65537,FAST_BID_PUBKEY_N="ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",spec={code:BIDDER_CODE,gvlid:GVLID,supportedMediaTypes:[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b,__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d,__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c],isBidRequestValid:function(t){return!(!t||!t.params||!t.params.zoneId&&!t.params.networkId)&&!(hasVideoMediaType(t)&&!hasValidVideoMediaType(t))},buildRequests:function(t,e){var r,i,s=__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getLegacyFpd(__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("ortb2"))||{};_extends(e,{publisherExt:s.context,userExt:s.user,ceh:__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")});var a=__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.fastBidVersion"),_=canFastBid(a);if(!publisherTagAvailable()&&_){window.Criteo=window.Criteo||{},window.Criteo.usePrebidEvents=!1,tryGetCriteoFastBid();var o=getFastBidUrl(a);setTimeout((function(){Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(o,BIDDER_CODE)}),e.timeout)}if(publisherTagAvailable()){var n=new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG,ADAPTER_VERSION,t,e,"5.8.0");r=n.buildCdbUrl(),i=n.buildCdbRequest()}else{var p=buildContext(t,e);r=buildCdbUrl(p),i=buildCdbRequest(p,t,e)}if(i)return{method:"POST",url:r,data:i,bidRequests:t}},interpretResponse:function(t,e){var r=t.body||t;if(publisherTagAvailable()){var i=Criteo.PubTag.Adapters.Prebid.GetAdapter(e);if(i)return i.interpretResponse(r,e)}var s=[];return r&&r.slots&&__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(r.slots)&&r.slots.forEach((function(t){var r=__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(e.bidRequests,(function(e){return e.adUnitCode===t.impid&&(!e.params.zoneId||parseInt(e.params.zoneId)===t.zoneid)})),i=r.bidId,a={requestId:i,adId:t.bidId||__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),cpm:t.cpm,currency:t.currency,netRevenue:!0,ttl:t.ttl||60,creativeId:t.creativecode,width:t.width,height:t.height,dealId:t.dealCode};t.adomain&&(a.meta=_extends({},a.meta,{advertiserDomains:t.adomain})),t.native?r.params.nativeCallback?a.ad=createNativeAd(i,t.native,r.params.nativeCallback):(a.native=createPrebidNativeAd(t.native),a.mediaType=__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c):t.video?(a.vastUrl=t.displayurl,a.mediaType=__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d):a.ad=t.creative,s.push(a)})),s},onTimeout:function(t){if(publisherTagAvailable()&&Array.isArray(t)){var e=[];t.forEach((function(t){-1===e.indexOf(t.auctionId)&&(e.push(t.auctionId),Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())}))}},onBidWon:function(t){publisherTagAvailable()&&t&&Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)},onSetTargeting:function(t){publisherTagAvailable()&&Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)}};function publisherTagAvailable(){return"undefined"!=typeof Criteo&&Criteo.PubTag&&Criteo.PubTag.Adapters&&Criteo.PubTag.Adapters.Prebid}function buildContext(t,e){var r="";e&&e.refererInfo&&(r=e.refererInfo.referer);var i=__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search,s={url:r,debug:"1"===i.pbt_debug,noLog:"1"===i.pbt_nolog,amp:!1};return t.forEach((function(t){"amp"===t.params.integrationMode&&(s.amp=!0)})),s}function buildCdbUrl(t){var e=CDB_ENDPOINT;return e+="?profileId="+PROFILE_ID_INLINE,e+="&av="+String(ADAPTER_VERSION),e+="&wv="+encodeURIComponent("5.8.0"),e+="&cb="+String(Math.floor(99999999999*Math.random())),t.amp&&(e+="&im=1"),t.debug&&(e+="&debug=1"),t.noLog&&(e+="&nolog=1"),e}function checkNativeSendId(t){return!(t.nativeParams&&(t.nativeParams.image&&(!0!==t.nativeParams.image.sendId||!0===t.nativeParams.image.sendTargetingKeys)||t.nativeParams.icon&&(!0!==t.nativeParams.icon.sendId||!0===t.nativeParams.icon.sendTargetingKeys)||t.nativeParams.clickUrl&&(!0!==t.nativeParams.clickUrl.sendId||!0===t.nativeParams.clickUrl.sendTargetingKeys)||t.nativeParams.displayUrl&&(!0!==t.nativeParams.displayUrl.sendId||!0===t.nativeParams.displayUrl.sendTargetingKeys)||t.nativeParams.privacyLink&&(!0!==t.nativeParams.privacyLink.sendId||!0===t.nativeParams.privacyLink.sendTargetingKeys)||t.nativeParams.privacyIcon&&(!0!==t.nativeParams.privacyIcon.sendId||!0===t.nativeParams.privacyIcon.sendTargetingKeys)))}function buildCdbRequest(t,e,r){var i,s={publisher:{url:t.url,ext:r.publisherExt},slots:e.map((function(t){i=t.params.networkId||i;var e={impid:t.adUnitCode,transactionid:t.transactionId,auctionId:t.auctionId};if(t.params.zoneId&&(e.zoneid=t.params.zoneId),__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"ortb2Imp.ext")&&(e.ext=t.ortb2Imp.ext),t.params.ext&&(e.ext=_extends({},e.ext,t.params.ext)),t.params.publisherSubId&&(e.publishersubid=t.params.publisherSubId),t.params.nativeCallback||__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c))?(e.native=!0,checkNativeSendId(t)||__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX+"all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"),e.sizes=parseSizes(retrieveBannerSizes(t),parseNativeSize)):e.sizes=parseSizes(retrieveBannerSizes(t),parseSize),hasVideoMediaType(t)){var r={playersizes:parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.video.playerSize"),parseSize),mimes:t.mediaTypes.video.mimes,protocols:t.mediaTypes.video.protocols,maxduration:t.mediaTypes.video.maxduration,api:t.mediaTypes.video.api,skip:t.mediaTypes.video.skip||t.params.video.skip,placement:t.mediaTypes.video.placement||t.params.video.placement,minduration:t.mediaTypes.video.minduration||t.params.video.minduration,playbackmethod:t.mediaTypes.video.playbackmethod||t.params.video.playbackmethod,startdelay:t.mediaTypes.video.startdelay||t.params.video.startdelay};e.video=r}return e}))};return i&&(s.publisher.networkid=i),s.user={ext:r.userExt},r&&r.ceh&&(s.user.ceh=r.ceh),r&&r.gdprConsent&&(s.gdprConsent={},void 0!==r.gdprConsent.gdprApplies&&(s.gdprConsent.gdprApplies=!!r.gdprConsent.gdprApplies),s.gdprConsent.version=r.gdprConsent.apiVersion,void 0!==r.gdprConsent.consentString&&(s.gdprConsent.consentData=r.gdprConsent.consentString)),r&&r.uspConsent&&(s.user.uspIab=r.uspConsent),s}function retrieveBannerSizes(t){return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.banner.sizes")||t.sizes}function parseSizes(t,e){return Array.isArray(t[0])?t.map((function(t){return e(t)})):[e(t)]}function parseSize(t){return t[0]+"x"+t[1]}function parseNativeSize(t){return void 0===t[0]&&void 0===t[1]?"2x2":t[0]+"x"+t[1]}function hasVideoMediaType(t){return void 0!==__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.video")}function hasValidVideoMediaType(t){var e=!0;if(["mimes","playerSize","maxduration","protocols","api","skip","placement","playbackmethod"].forEach((function(r){void 0===__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.video."+r)&&void 0===__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"params.video."+r)&&(e=!1,__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video."+r+" is required"))})),e){var r=t.mediaTypes.video.placement||t.params.video.placement;if("instream"==t.mediaTypes.video.context&&1===r)return!0;if("outstream"==t.mediaTypes.video.context&&1!==r)return!0}return!1}function createPrebidNativeAd(t){return{sendTargetingKeys:!1,title:t.products[0].title,body:t.products[0].description,sponsoredBy:t.advertiser.description,icon:t.advertiser.logo,image:t.products[0].image,clickUrl:t.products[0].click_url,privacyLink:t.privacy.optout_click_url,privacyIcon:t.privacy.optout_image_url,cta:t.products[0].call_to_action,price:t.products[0].price,impressionTrackers:t.impression_pixels.map((function(t){return t.url}))}}function createNativeAd(t,e,r){var i="criteo_prebid_native_slots";return window[i]=window[i]||{},window[i][t]={callback:r,payload:e},'\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i,';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t,'"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')}function canFastBid(t){return t!==FAST_BID_VERSION_NONE}function getFastBidUrl(t){var e;if(t===FAST_BID_VERSION_LATEST)e="";else if(t){String(t).split(".")[0]<102&&__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Specifying a Fastbid version which is not supporting version selection."),e="."+t}else e="."+FAST_BID_VERSION_CURRENT;return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER,e)}function tryGetCriteoFastBid(){try{var fastBidStorageKey="criteo_fast_bid",hashPrefix="// Hash: ",fastBidFromStorage=storage.getDataFromLocalStorage(fastBidStorageKey);if(null!==fastBidFromStorage){var firstLineEndPosition=fastBidFromStorage.indexOf("\n"),firstLine=fastBidFromStorage.substr(0,firstLineEndPosition).trim();if(firstLine.substr(0,hashPrefix.length)!==hashPrefix)__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"),storage.removeDataFromLocalStorage(fastBidStorageKey);else{var publisherTagHash=firstLine.substr(hashPrefix.length),publisherTag=fastBidFromStorage.substr(firstLineEndPosition+1);Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag,publisherTagHash,FAST_BID_PUBKEY_N,FAST_BID_PUBKEY_E)?(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"),eval(publisherTag)):(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"),storage.removeDataFromLocalStorage(fastBidStorageKey))}}}catch(t){}}Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec)},68:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(69),s=r(70);e.verify=function(t,e,r,a){var _=new i.BigInteger(i.b64toHex(e)),o=new i.BigInteger(i.b64toHex(r)),n=_.modPowInt(a,o);return i.removeExtraSymbols(n.toHexString())===s.Sha256.hash(t)}},69:function(t,e,r){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t){null!==t&&this.fromHexString(t)}return t.prototype.toHexString=function(){if(this.s<0)return"-"+this.negate().toHexString();var t,e=!1,r="",i=this.t,s=this.DB-i*this.DB%4;if(i-- >0)for(s<this.DB&&(t=this[i]>>s)>0&&(e=!0,r=d(t));i>=0;)s<4?(t=(this[i]&(1<<s)-1)<<4-s,t|=this[--i]>>(s+=this.DB-4)):(t=this[i]>>(s-=4)&15,s<=0&&(s+=this.DB,--i)),t>0&&(e=!0),e&&(r+=d(t));return e?r:"0"},t.prototype.fromHexString=function(e){if(null!==e){this.t=0,this.s=0;for(var r=e.length,i=!1,s=0;--r>=0;){var a=c(e,r);a<0?"-"==e.charAt(r)&&(i=!0):(i=!1,0==s?this[this.t++]=a:s+4>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,(s+=4)>=this.DB&&(s-=this.DB))}0,this.clamp(),i&&t.ZERO.subTo(this,this)}},t.prototype.negate=function(){var e=a();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.mod=function(e){var r=a();return this.abs().divRemTo(e,null,r),this.s<0&&r.compareTo(t.ZERO)>0&&e.subTo(r,r),r},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.lShiftTo=function(t,e){for(var r=t%this.DB,i=this.DB-r,s=(1<<i)-1,a=Math.floor(t/this.DB),_=this.s<<r&this.DM,o=this.t-1;o>=0;--o)e[o+a+1]=this[o]>>i|_,_=(this[o]&s)<<r;for(o=a-1;o>=0;--o)e[o]=0;e[a]=_,e.t=this.t+a+1,e.s=this.s,e.clamp()},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},t.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var i=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,i,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},t.prototype.multiplyTo=function(e,r){var i=this.abs(),s=e.abs(),a=i.t;for(r.t=a+s.t;--a>=0;)r[a]=0;for(a=0;a<s.t;++a)r[a+i.t]=i.am(0,s[a],r,a,0,i.t);r.s=0,r.clamp(),this.s!=e.s&&t.ZERO.subTo(r,r)},t.prototype.divRemTo=function(e,r,i){var s=e.abs();if(!(s.t<=0)){var o=this.abs();if(o.t<s.t)return null!=r&&r.fromHexString("0"),void(null!=i&&this.copyTo(i));null==i&&(i=a());var n=a(),p=this.s,c=e.s,d=this.DB-_(s[s.t-1]);d>0?(s.lShiftTo(d,n),o.lShiftTo(d,i)):(s.copyTo(n),o.copyTo(i));var u=n.t,h=n[u-1];if(0!=h){var l=h*(1<<this.F1)+(u>1?n[u-2]>>this.F2:0),f=this.FV/l,v=(1<<this.F1)/l,E=1<<this.F2,m=i.t,T=m-u,b=null==r?a():r;for(n.dlShiftTo(T,b),i.compareTo(b)>=0&&(i[i.t++]=1,i.subTo(b,i)),t.ONE.dlShiftTo(u,b),b.subTo(n,n);n.t<u;)n[n.t++]=0;for(;--T>=0;){var D=i[--m]==h?this.DM:Math.floor(i[m]*f+(i[m-1]+E)*v);if((i[m]+=n.am(0,D,i,T,0,u))<D)for(n.dlShiftTo(T,b),i.subTo(b,i);i[m]<--D;)i.subTo(b,i)}null!=r&&(i.drShiftTo(u,r),p!=c&&t.ZERO.subTo(r,r)),i.t=u,i.clamp(),d>0&&i.rShiftTo(d,i),p<0&&t.ZERO.subTo(i,i)}}},t.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var i=t%this.DB,s=this.DB-i,a=(1<<i)-1;e[0]=this[r]>>i;for(var _=r+1;_<this.t;++_)e[_-r-1]|=(this[_]&a)<<s,e[_-r]=this[_]>>i;i>0&&(e[this.t-r-1]|=(this.s&a)<<s),e.t=this.t-r,e.clamp()}},t.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.subTo=function(t,e){for(var r=0,i=0,s=Math.min(t.t,this.t);r<s;)i+=this[r]-t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i-=t[r],e[r++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=i<0?-1:0,i<-1?e[r++]=this.DV+i:i>0&&(e[r++]=i),e.t=r,e.clamp()},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new u(e):new h(e),this.exp(t,r)},t.prototype.exp=function(e,r){if(e>4294967295||e<1)return t.ONE;var i=a(),s=a(),o=r.convert(this),n=_(e)-1;for(o.copyTo(i);--n>=0;)if(r.sqrTo(i,s),(e&1<<n)>0)r.mulTo(s,o,i);else{var p=i;i=s,s=p}return r.revert(i)},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},t.prototype.am1=function(t,e,r,i,s,a){for(;--a>=0;){var _=e*this[t++]+r[i]+s;s=Math.floor(_/67108864),r[i++]=67108863&_}return s},t.prototype.am2=function(t,e,r,i,s,a){for(var _=32767&e,o=e>>15;--a>=0;){var n=32767&this[t],p=this[t++]>>15,c=o*n+p*_;s=((n=_*n+((32767&c)<<15)+r[i]+(1073741823&s))>>>30)+(c>>>15)+o*p+(s>>>30),r[i++]=1073741823&n}return s},t.prototype.am3=function(t,e,r,i,s,a){for(var _=16383&e,o=e>>14;--a>=0;){var n=16383&this[t],p=this[t++]>>14,c=o*n+p*_;s=((n=_*n+((16383&c)<<14)+r[i]+s)>>28)+(c>>14)+o*p,r[i++]=268435455&n}return s},t}();function a(){return new s(null)}function _(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}e.BigInteger=s,e.nbi=a,e.nbits=_;var o,n,p=[];for(o="0".charCodeAt(0),n=0;n<=9;++n)p[o++]=n;for(o="a".charCodeAt(0),n=10;n<36;++n)p[o++]=n;for(o="A".charCodeAt(0),n=10;n<36;++n)p[o++]=n;function c(t,e){var r=p[t.charCodeAt(e)];return null==r?-1:r}e.intAt=c;function d(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}e.int2char=d;e.b64toHex=function(t){var e,r="",i=0,s=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));a<0||(0==i?(r+=d(a>>2),s=3&a,i=1):1==i?(r+=d(s<<2|a>>4),s=15&a,i=2):2==i?(r+=d(s),r+=d(a>>2),s=3&a,i=3):(r+=d(s<<2|a>>4),r+=d(15&a),i=0))}return 1==i&&(r+=d(s<<2)),r},e.removeExtraSymbols=function(t){return t.replace(/^1f+00/,"").replace("3031300d060960864801650304020105000420","")};var u=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),h=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=a();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(s.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=a();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],i=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,i,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function l(t){var e=a();return e.fromHexString(t.toString()),e}e.nbv=l,s.ZERO=l(0),s.ONE=l(1),"Microsoft Internet Explorer"==navigator.appName?(s.prototype.am=s.prototype.am2,i=30):"Netscape"!=navigator.appName?(s.prototype.am=s.prototype.am1,i=26):(s.prototype.am=s.prototype.am3,i=28),s.prototype.DB=i,s.prototype.DM=(1<<i)-1,s.prototype.DV=1<<i;s.prototype.FV=Math.pow(2,52),s.prototype.F1=52-i,s.prototype.F2=2*i-52},70:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.hash=function(e){e=t.utf8Encode(e||"");for(var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s=(e+=String.fromCharCode(128)).length/4+2,a=Math.ceil(s/16),_=new Array(a),o=0;o<a;o++){_[o]=new Array(16);for(var n=0;n<16;n++)_[o][n]=e.charCodeAt(64*o+4*n)<<24|e.charCodeAt(64*o+4*n+1)<<16|e.charCodeAt(64*o+4*n+2)<<8|e.charCodeAt(64*o+4*n+3)<<0}var p=8*(e.length-1)/Math.pow(2,32),c=8*(e.length-1)>>>0;_[a-1][14]=Math.floor(p),_[a-1][15]=c;for(o=0;o<a;o++){for(var d=new Array(64),u=0;u<16;u++)d[u]=_[o][u];for(u=16;u<64;u++)d[u]=t.q1(d[u-2])+d[u-7]+t.q0(d[u-15])+d[u-16]>>>0;var h=i[0],l=i[1],f=i[2],v=i[3],E=i[4],m=i[5],T=i[6],b=i[7];for(u=0;u<64;u++){var D=b+t.z1(E)+t.Ch(E,m,T)+r[u]+d[u],y=t.z0(h)+t.Maj(h,l,f);b=T,T=m,m=E,E=v+D>>>0,v=f,f=l,l=h,h=D+y>>>0}i[0]=i[0]+h>>>0,i[1]=i[1]+l>>>0,i[2]=i[2]+f>>>0,i[3]=i[3]+v>>>0,i[4]=i[4]+E>>>0,i[5]=i[5]+m>>>0,i[6]=i[6]+T>>>0,i[7]=i[7]+b>>>0}var P=new Array(i.length);for(b=0;b<i.length;b++)P[b]=("00000000"+i[b].toString(16)).slice(-8);return P.join("")},t.utf8Encode=function(t){try{return(new TextEncoder).encode(t).reduce((function(t,e){return t+String.fromCharCode(e)}),"")}catch(e){return unescape(encodeURIComponent(t))}},t.ROTR=function(t,e){return e>>>t|e<<32-t},t.z0=function(e){return t.ROTR(2,e)^t.ROTR(13,e)^t.ROTR(22,e)},t.z1=function(e){return t.ROTR(6,e)^t.ROTR(11,e)^t.ROTR(25,e)},t.q0=function(e){return t.ROTR(7,e)^t.ROTR(18,e)^e>>>3},t.q1=function(e){return t.ROTR(17,e)^t.ROTR(19,e)^e>>>10},t.Ch=function(t,e,r){return t&e^~t&r},t.Maj=function(t,e,r){return t&e^t&r^e&r},t}();e.Sha256=i}},[345]);
/* GA                   */ pbjsChunk([224],{419:function(e,n,t){e.exports=t(420)},420:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(9),s=t(0),r=t(5),a=t(8).default,u=r.EVENTS.BID_REQUESTED,c=r.EVENTS.BID_TIMEOUT,d=r.EVENTS.BID_RESPONSE,l=r.EVENTS.BID_WON,f={nonInteraction:!0},p=[],b=null,m=!0,v="Prebid.js Bids",y=0,g=!1,T=null,w=null,E=!0,S={};function h(){if(m&&"function"==typeof window[b]){for(var e=0;e<p.length;e++)p[e].call();p.push=function(e){e.call()},m=!1}s.logMessage("event count sent to GA: "+y)}function D(e){return e?Math.floor(100*e):0}function $(e){return T?T(e):(e>=0&&e<.5?n="$0-0.5":e>=.5&&e<1?n="$0.5-1":e>=1&&e<1.5?n="$1-1.5":e>=1.5&&e<2?n="$1.5-2":e>=2&&e<2.5?n="$2-2.5":e>=2.5&&e<3?n="$2.5-3":e>=3&&e<4?n="$3-4":e>=4&&e<6?n="$4-6":e>=6&&e<8?n="$6-8":e>=8&&(n="$8 above"),n);var n}function C(e){e&&e.bidderCode&&p.push((function(){y++,window[b](w,"event",v,"Requests",e.bidderCode,1,f)})),h()}function M(e){e&&e.bidderCode&&p.push((function(){var n,t,o=D(e.cpm),i=e.bidderCode;if(void 0!==e.timeToRespond&&g){y++;var s=((n=e.timeToRespond)>=0&&n<200?t="0-200ms":n>=200&&n<300?t="0200-300ms":n>=300&&n<400?t="0300-400ms":n>=400&&n<500?t="0400-500ms":n>=500&&n<600?t="0500-600ms":n>=600&&n<800?t="0600-800ms":n>=800&&n<1e3?t="0800-1000ms":n>=1e3&&n<1200?t="1000-1200ms":n>=1200&&n<1500?t="1200-1500ms":n>=1500&&n<2e3?t="1500-2000ms":n>=2e3&&(t="2000ms above"),t);window[b](w,"event","Prebid.js Load Time Distribution",s,i,1,f)}if(e.cpm>0){y+=2;var r=$(e.cpm);g&&(y++,window[b](w,"event","Prebid.js CPM Distribution",r,i,1,f)),window[b](w,"event",v,"Bids",i,o,f),window[b](w,"event",v,"Bid Load Time",i,e.timeToRespond,f)}})),h()}function N(e){p.push((function(){s._each(e,(function(e){y++;var n=e.bidder;window[b](w,"event",v,"Timeouts",n,f)}))})),h()}function _(e){var n=D(e.cpm);p.push((function(){y++,window[b](w,"event",v,"Wins",e.bidderCode,n,f)})),h()}S.enableAnalytics=function(e){var n=e.provider,t=e.options;b=n||"ga",w=t&&t.trackerName?t.trackerName+".send":"send",E=void 0===t||void 0===t.sampling||Math.random()<parseFloat(t.sampling),t&&void 0!==t.global&&(b=t.global),t&&void 0!==t.enableDistribution&&(g=t.enableDistribution),t&&"function"==typeof t.cpmDistribution&&(T=t.cpmDistribution);if(E){var r=i.getEvents();s._each(r,(function(e){if("object"===o(e)){var n=e.args;if(e.eventType===u)C(n);else if(e.eventType===d)M(n);else if(e.eventType===c){N(n)}else e.eventType===l&&_(n)}})),i.on(u,(function(e){C(e)})),i.on(d,(function(e){M(e)})),i.on(c,(function(e){N(e)})),i.on(l,(function(e){_(e)}))}else s.logMessage("Prebid.js google analytics disabled by sampling");this.enableAnalytics=function(){return s.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.")}},S.getTrackerSend=function(){return w},S.getCpmDistribution=$,a.registerAnalyticsAdapter({adapter:S,code:"ga"}),n.default=S}},[419]);
/* ix                   */ pbjsChunk([198],{481:function(e,r,t){e.exports=t(482)},482:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return V}));var n=t(0),i=t(2),a=t(3),o=t(11),s=t.n(o),d=t(1),c=t(22);function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=v(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function v(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var g="roundel",h=[i.b,i.d],x=8e3,I={JPY:1},O="p",w="x",A={"liveramp.com":"idl","netid.de":"NETID","neustar.biz":"fabrickId","zeotap.com":"zeotapIdPlus","uidapi.com":"UID2","adserver.org":"TDID"},P=["britepoolid","id5id","lipbid","haloId","criteoId","lotamePanoramaId","merkleId","parrableId","connectid","tapadId","quantcastId","pubcid","TDID","flocId"],S=["mimes","minduration","maxduration"],z=["mimes","minduration","maxduration","protocols","protocol","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext","playerSize","w","h"];function T(e){var r=C(e);r.banner={};var t=n.deepAccess(e,"params.size");return t&&(r.banner.w=t[0],r.banner.h=t[1],n.deepAccess(r,"ext.sid")||(r.ext.sid=n.parseGPTSingleSizeArray(t))),r.banner.topframe=n.inIframe()?0:1,k(e,r,i.b),r}function j(e){var r=C(e),t=n.deepAccess(e,"mediaTypes.video"),a=n.deepAccess(e,"params.video");if(!B(e,t,a))return{};for(var o in r.video=a?n.deepClone(e.params.video):{},t)-1===z.indexOf(o)||r.video.hasOwnProperty(o)||(r.video[o]=t[o]);if(r.video.minduration>r.video.maxduration)return n.logError("IX Bid Adapter: video minduration [".concat(r.video.minduration,"] cannot be greater than video maxduration [").concat(r.video.maxduration,"]")),{};var s=a&&a.context||t&&t.context;if(s&&!r.video.hasOwnProperty("placement")&&(s===c.a?r.video.placement=1:s===c.b?r.video.placement=4:n.logWarn("IX Bid Adapter: Video context '".concat(s,"' is not supported"))),!r.video.w||!r.video.h){var d=R(n.deepAccess(r,"video.playerSize"))||R(n.deepAccess(e,"params.size"));if(!d)return n.logWarn("IX Bid Adapter: Video size is missing in [mediaTypes.video] missing"),{};r.video.w=d[0],r.video.h=d[1],n.deepAccess(r,"ext.sid")||(r.ext.sid=n.parseGPTSingleSizeArray(d))}return k(e,r,i.d),r}function C(e){var r={};r.id=e.bidId,r.ext={},r.ext.siteID=e.params.siteId,!e.params.hasOwnProperty("id")||"string"!=typeof e.params.id&&"number"!=typeof e.params.id||(r.ext.sid=String(e.params.id));var t=n.deepAccess(e,"ortb2Imp.ext.data.adserver.adslot");return t&&(r.ext.dfp_ad_unit_code=t),r}function k(e,r,t){var i=null,a=null;if(e.params.bidFloor&&e.params.bidFloorCur&&(i={floor:e.params.bidFloor,currency:e.params.bidFloorCur}),n.isFn(e.getFloor)){var o="*",s="*";if(t&&n.contains(h,t)){var d=r[t];o=t,s=[d.w,d.h]}try{a=e.getFloor({mediaType:o,size:s})}catch(e){n.logWarn("priceFloors module call getFloor failed, error : ",e)}}a?(r.bidfloor=a.floor,r.bidfloorcur=a.currency,r.ext.fl=O):i&&(r.bidfloor=i.floor,r.bidfloorcur=i.currency,r.ext.fl=w)}function D(e,r,t){var a={},o=!(!n.deepAccess(e,"exp")||!n.isInteger(e.exp)),s=n.deepAccess(e,"dealid")||n.deepAccess(e,"ext.dealid");return I.hasOwnProperty(r)?a.cpm=e.price/I[r]:a.cpm=e.price/100,a.requestId=e.impid,s&&(a.dealId=s),a.netRevenue=true,a.currency=r,a.creativeId=e.hasOwnProperty("crid")?e.crid:"-",n.deepAccess(e,"ext.vasturl")?(a.vastUrl=e.ext.vasturl,a.width=t.video.w,a.height=t.video.h,a.mediaType=i.d,a.ttl=o?e.exp:3600):(a.ad=e.adm,a.width=e.w,a.height=e.h,a.mediaType=i.b,a.ttl=o?e.exp:300),a.meta={},a.meta.networkId=n.deepAccess(e,"ext.dspid"),a.meta.brandId=n.deepAccess(e,"ext.advbrandid"),a.meta.brandName=n.deepAccess(e,"ext.advbrand"),e.adomain&&e.adomain.length>0&&(a.meta.advertiserDomains=e.adomain),a}function E(e){return Array.isArray(e)&&2===e.length&&n.isInteger(e[0])&&n.isInteger(e[1])}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(E(e))return e[0]===r[0]&&e[1]===r[1];for(var t=0;t<e.length;t++)if(e[t][0]===r[0]&&e[t][1]===r[1])return!0;return!1}function B(e,r,t){var i=!0;r||n.logWarn("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");var a,o=y(S);try{for(o.s();!(a=o.n()).done;){var s=a.value,d=r&&r.hasOwnProperty(s),c=t&&t.hasOwnProperty(s);d||c||(n.logError("IX Bid Adapter: ".concat(s," is not included in either the adunit or params level")),i=!1)}}catch(e){o.e(e)}finally{o.f()}if(!i)return!1;var p=r&&r.hasOwnProperty("protocol"),u=r&&r.hasOwnProperty("protocols"),l=t&&t.hasOwnProperty("protocol"),m=t&&t.hasOwnProperty("protocols");return p||u||l||m}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return E(e)?e:!!E(e[0])&&e[0]}function _(e,r){if(e)return s()(r,(function(r){return r.id===e}))}function q(e,r,t,o){var s="https://htlb.casalemedia.com/cygnus",d=function(e,r){var t=[],i={};if(n.isArray(e)){var a,o=y(e);try{for(o.s();!(a=o.n()).done;){var s=a.value;A[s.source]&&n.deepAccess(s,"uids.0")&&(i[s.source]=!0,s.uids[0].ext={rtiPartner:A[s.source]},delete s.uids[0].atype,t.push(s))}}catch(e){o.e(e)}finally{o.f()}}if(r&&r.id&&r.version){var d={source:"chrome.com",uids:[{id:r.id,ext:{rtiPartner:"flocId",ver:r.version}}]};t.push(d),i["chrome.com"]=!0}return{toSend:t,seenSources:i}}(n.deepAccess(e,"0.userIdAsEids"),n.deepAccess(e,"0.userId.flocId")),c=d.toSend;if(window.headertag&&"function"==typeof window.headertag.getIdentityInfo){var u=window.headertag.getIdentityInfo();if(u&&"object"===f(u))for(var m in u)if(u.hasOwnProperty(m)){var v=u[m];!v.responsePending&&v.data&&"object"===f(v.data)&&Object.keys(v.data).length&&!d.seenSources[v.data.source]&&c.push(v.data)}}if(r&&r.bidderCode===g&&!d.seenSources["liveramp.com"])return[];var b={};b.id=e[0].bidderRequestId.toString(),b.site={},b.ext={},b.ext.source="prebid",b.ext.ixdiag={},b.ext.ixdiag.msd=0,b.ext.ixdiag.msi=0,b.imp=[];var h=function(e){for(var r=e.map((function(e){return e.transactionId})).filter((function(e,r,t){return t.indexOf(e)===r})),t={mfu:0,bu:0,iu:0,nu:0,ou:0,allu:0,ren:!1,version:"5.8.0",userIds:M(e[0])},i=function(i){if(o=e.filter((function(e){return e.transactionId===r[i]}))[0],n.deepAccess(o,"mediaTypes")){if(Object.keys(o.mediaTypes).length>1&&t.mfu++,n.deepAccess(o,"mediaTypes.native")&&t.nu++,n.deepAccess(o,"mediaTypes.banner")&&t.bu++,"outstream"===n.deepAccess(o,"mediaTypes.video.context")){t.ou++;var a="object"===f(n.deepAccess(o,"renderer")||n.deepAccess(o,"mediaTypes.video.renderer"));t.ren=t.ren&&a?n.deepAccess(t,"ren"):a}"instream"===n.deepAccess(o,"mediaTypes.video.context")&&t.iu++,t.allu++}},a=0;a<r.length;a++){var o;i(a)}return t}(e);for(var I in h)b.ext.ixdiag[I]=h[I];if(e[0].schain&&(b.source={ext:{schain:e[0].schain}}),c.length>0&&(b.user={},b.user.eids=c),document.referrer&&""!==document.referrer&&(b.site.ref=document.referrer),r){if(r.gdprConsent){var O=r.gdprConsent;O.hasOwnProperty("gdprApplies")&&(b.regs={ext:{gdpr:O.gdprApplies?1:0}}),O.hasOwnProperty("consentString")&&(b.user=b.user||{},b.user.ext={consent:O.consentString||""},O.hasOwnProperty("addtlConsent")&&O.addtlConsent&&(b.user.ext.consented_providers_settings={consented_providers:O.addtlConsent}))}r.uspConsent&&n.deepSetValue(b,"regs.ext.us_privacy",r.uspConsent),r.refererInfo&&(b.site.page=r.refererInfo.referer)}a.b.getConfig("coppa")&&n.deepSetValue(b,"regs.coppa",1);var w={};w.s=e[0].params.siteId,w.v=o,w.ac="j",w.sd=1,8.1===o&&(w.nf=1);var P=r&&r.bidderCode||"ix",S=a.b.getConfig(P),z=[],T=0,j=Object.keys(t),C="".concat(s).concat(n.parseQueryStringParameters(l(l({},w),{},{r:JSON.stringify(b)}))).length;if(C>x)return n.logError("ix bidder: Base request size has exceeded maximum request size."),z;var k=C;if(S){if("object"===f(S.firstPartyData)){var D=S.firstPartyData,E="?";for(var F in D)D.hasOwnProperty(F)&&(E+="".concat(encodeURIComponent(F),"=").concat(encodeURIComponent(D[F]),"&"));E=E.slice(0,-1),b.site.page+=E}"number"==typeof S.timeout&&(w.t=S.timeout),"boolean"==typeof S.detectMissingSizes?b.ext.ixdiag.dms=S.detectMissingSizes:b.ext.ixdiag.dms=!0}for(var B=function(e){if(k>=x||z.length>=4)return"break";for(var r=t[j[e]],a=r.missingCount,o=void 0===a?0:a,d=r.missingImps,c=void 0===d?[]:d,u=r.ixImps,l=!1,m=x-k,f={ixImps:void 0===u?[]:u,missingBannerImpressions:c},y=Object.keys(f).map((function(e){return f[e]})).filter((function(e){return Array.isArray(e)})).reduce((function(e,r){return e.concat.apply(e,p(r))}),[]),v=encodeURIComponent(JSON.stringify({impressionObjects:y})).length;v>m;)l=!0,y.pop(),v=encodeURIComponent(JSON.stringify({impressionObjects:y})).length;if(i.b in y[0]){var g=y[0],h={id:g.id,banner:{topframe:g.banner.topframe,format:y.map((function(e){var r=e.banner;return{w:r.w,h:r.h,ext:e.ext}}))}};"bidfloor"in y[0]&&(h.bidfloor=y[0].bidfloor),"bidfloorcur"in y[0]&&(h.bidfloorcur=y[0].bidfloorcur),b.imp.push(h),b.ext.ixdiag.msd+=o,b.ext.ixdiag.msi+=c.length}else{var I;(I=b.imp).push.apply(I,p(y))}var O=e===j.length-1;if(l||O){var A=n.deepClone(w);O&&!T||(b.ext.ixdiag.sn=T,A.sn=T),T++,A.r=JSON.stringify(b),z.push({method:"GET",url:s,data:A}),k=C,b.imp=[],b.ext.ixdiag.msd=0,b.ext.ixdiag.msi=0}},R=0;R<j.length;R++){if("break"===B(R))break}return z}function M(e){var r=e.userId||{};return P.filter((function(e){return r[e]}))}function U(e,r){if(r)for(var t=0;t<e.length;t++){var n=e[t];if(r[0]===n[0]&&r[1]===n[1]){e.splice(t,1);break}}}function N(e,r,t){var i=e.transactionId;if(r.hasOwnProperty(i)){var a=[];r[i].hasOwnProperty("missingSizes")&&(a=r[i].missingSizes),U(a,e.params.size),r[i].missingSizes=a}else if(n.deepAccess(e,"mediaTypes.banner.sizes")){var o=n.deepClone(e.mediaTypes.banner.sizes);U(o,e.params.size);var s={missingSizes:o,impression:t};r[i]=s}}function J(e,r,t){var a=n.deepClone(r);return a.ext.sid=n.parseGPTSingleSizeArray(t),a.banner.w=t[0],a.banner.h=t[1],k(e,a,i.b),a}var V={code:"ix",gvlid:10,aliases:[{code:g,gvlid:10,skipPbsAliasing:!1}],supportedMediaTypes:h,isBidRequestValid:function(e){var r,t,i=n.deepAccess(e,"params.video"),a=n.deepAccess(e,"params.size"),o=n.deepAccess(e,"mediaTypes.banner.sizes"),s=n.deepAccess(e,"mediaTypes.video"),d=n.deepAccess(e,"mediaTypes.video.playerSize"),c=e.params.hasOwnProperty("bidFloor"),p=e.params.hasOwnProperty("bidFloorCur");if(e.hasOwnProperty("mediaType")&&!n.contains(h,e.mediaType))return!1;if(n.deepAccess(e,"mediaTypes.banner")&&!o)return!1;if(a){var u=R(a);if(!u)return n.logError("ix bidder params: size has invalid format."),!1;if(!F(e.sizes,u)&&!F(d,u)&&!F(o,u))return n.logError("ix bidder params: bid size is not included in ad unit sizes or player size."),!1}return"string"!=typeof e.params.siteId&&"number"!=typeof e.params.siteId?(n.logError("ix bidder params: siteId must be string or number value."),!1):!c&&!p||c&&p&&(r=e.params.bidFloor,t=e.params.bidFloorCur,Boolean("number"==typeof r&&"string"==typeof t&&t.match(/^[A-Z]{3}$/)))?!(!o&&(s||i))||B(0,s,i):(n.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."),!1)},buildRequests:function(e,r){for(var t=[],o={},s={},d=null,c={},u=l(l({},{detectMissingSizes:!0}),a.b.getConfig("ix")),m=0;m<e.length;m++){d=e[m];var f=n.deepAccess(d,"mediaTypes.video"),y=n.deepAccess(d,"params.video");if((d.mediaType===i.d||f||y)&&!s.hasOwnProperty(d.transactionId)){var v=j(d);0!=Object.keys(v).length&&(s[d.transactionId]={},s[d.transactionId].ixImps=[],s[d.transactionId].ixImps.push(v))}if(d.mediaType===i.b||n.deepAccess(d,"mediaTypes.banner.sizes")||!d.mediaType&&!d.mediaTypes){var b=T(d);n.deepAccess(d,"params.size")&&(o.hasOwnProperty(d.transactionId)||(o[d.transactionId]={}),o[d.transactionId].hasOwnProperty("ixImps")||(o[d.transactionId].ixImps=[]),o[d.transactionId].ixImps.push(b)),u.hasOwnProperty("detectMissingSizes")&&u.detectMissingSizes&&N(d,c,b)}}for(var g in c)if(c.hasOwnProperty(g)){var h=c[g].missingSizes;o.hasOwnProperty(g)||(o[g]={}),o[g].hasOwnProperty("missingImps")||(o[g].missingImps=[],o[g].missingCount=0);for(var x=c[g].impression,I=0;I<h.length;I++){var O=J(d,x,h[I]);o[g].missingImps.push(O),o[g].missingCount++}}return Object.keys(o).length>0&&t.push.apply(t,p(q(e,r,o,7.2))),Object.keys(s).length>0&&t.push.apply(t,p(q(e,r,s,8.1))),t},interpretResponse:function(e,r){var t=[],n=null;if(!e.hasOwnProperty("body")||!e.body.hasOwnProperty("seatbid"))return t;for(var i=e.body,a=i.seatbid,o=0;o<a.length;o++)if(a[o].hasOwnProperty("bid"))for(var s=a[o].bid,d=JSON.parse(r.data.r),c=0;c<s.length;c++){var p=_(s[c].impid,d.imp);n=D(s[c],i.cur,p),t.push(n)}return t},transformBidParams:function(e,r){return n.convertTypes({siteID:"number"},e)},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://js-sec.indexww.com/um/ixmatch.html"}]:[]}};Object(d.registerBidder)(V)}},[481]);
/* Kargo                */ pbjsChunk([194],{491:function(e,t,r){e.exports=r(492)},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return p}));var n=r(0),a=r(3),o=r(1),i=r(7);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u,s,d,g="kargo",l=Object(i.b)(972,g),p={gvlid:972,code:g,isBidRequestValid:function(e){return!(!e||!e.params)&&!!e.params.placementId},buildRequests:function(e,t){var r,o=a.b.getConfig("currency"),i=o&&o.adServerCurrency||"USD",u={},s={};n._each(e,(function(e){u[e.bidId]=e.params.placementId,s[e.bidId]=e.sizes})),e.length>0&&e[0].userId&&e[0].userId.tdid&&(r=e[0].userId.tdid);var d=c({},{sessionId:p._getSessionId(),requestCount:p._getRequestCount(),timeout:t.timeout,currency:i,cpmGranularity:1,timestamp:(new Date).getTime(),cpmRange:{floor:0,ceil:20},bidIDs:u,bidSizes:s,prebidRawBidRequests:e},p._getAllMetadata(r,t.uspConsent,t.gdprConsent)),g=encodeURIComponent(JSON.stringify(d));return c({},t,{method:"GET",url:"".concat("https://krk.kargo.com","/api/v2/bid"),data:"json=".concat(g),currency:i})},interpretResponse:function(e,t){var r=e.body,n=[];for(var a in r){var o=r[a],i=void 0;o.metadata&&o.metadata.landingPageDomain&&(i={clickUrl:o.metadata.landingPageDomain,advertiserDomains:[o.metadata.landingPageDomain]}),n.push({requestId:a,cpm:Number(o.cpm),width:o.width,height:o.height,ad:o.adm,ttl:300,creativeId:o.id,dealId:o.targetingCustom,netRevenue:!0,currency:t.currency,meta:i})}return n},getUserSyncs:function(e,t,r,n){var a=[],o=p._generateRandomUuid(),i=p._getClientId(),c=r&&r.gdprApplies?1:0,u=r&&r.consentString?r.consentString:"";if("string"==typeof n&&4==n.length&&1==n[0]&&"Y"==n[2])return a;if(e.iframeEnabled&&o&&i)for(var s=0;s<5;s++)a.push({type:"iframe",url:"https://crb.kargo.com/api/v1/initsyncrnd/{UUID}?seed={SEED}&idx={INDEX}&gdpr={GDPR}&gdpr_consent={GDPR_CONSENT}&us_privacy={US_PRIVACY}".replace("{UUID}",i).replace("{SEED}",o).replace("{INDEX}",s).replace("{GDPR}",c).replace("{GDPR_CONSENT}",u).replace("{US_PRIVACY}",n||"")});return a},_readCookie:function(e){if(!l.cookiesAreEnabled())return null;for(var t="".concat(e,"="),r=document.cookie.split(";"),n=0;n<r.length;n++){for(var a=r[n];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null},_getCrbFromCookie:function(){try{var e=JSON.parse(decodeURIComponent(p._readCookie("krg_crb")));if(e&&e.v){var t=JSON.parse(atob(e.v));if(t)return t}return{}}catch(e){return{}}},_getCrbFromLocalStorage:function(){try{return JSON.parse(atob(p._getLocalStorageSafely("krg_crb")))}catch(e){return{}}},_getCrb:function(){var e=p._getCrbFromLocalStorage();return Object.keys(e).length?e:p._getCrbFromCookie()},_getKruxUserId:function(){return p._getLocalStorageSafely("kxkar_user")},_getKruxSegments:function(){return p._getLocalStorageSafely("kxkar_segs")},_getKrux:function(){var e=p._getKruxSegments(),t=[];return e&&(t=e.split(",")),{userID:p._getKruxUserId(),segments:t}},_getLocalStorageSafely:function(e){try{return l.getDataFromLocalStorage(e)}catch(e){return null}},_getUserIds:function(e,t,r){var n=p._getCrb(),a={kargoID:n.userId,clientID:n.clientId,crbIDs:n.syncIds||{},optOut:n.optOut,usp:t};try{r&&(a.gdpr={consent:r.consentString||"",applies:!!r.gdprApplies})}catch(e){}return e&&(a.tdID=e),a},_getClientId:function(){return p._getCrb().clientId},_getAllMetadata:function(e,t,r){return{userIDs:p._getUserIds(e,t,r),krux:p._getKrux(),pageURL:window.location.href,rawCRB:p._readCookie("krg_crb"),rawCRBLocalStorage:p._getLocalStorageSafely("krg_crb")}},_getSessionId:function(){return u||(u=p._generateRandomUuid()),u},_getRequestCount:function(){return s===window.location.pathname?++d:(s=window.location.pathname,d=0)},_generateRandomUuid:function(){try{var e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=-177&e[6]|64,e[8]=-65&e[8]|128;var t=Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("");return t.slice(0,8)+"-"+t.slice(8,12)+"-"+t.slice(12,16)+"-"+t.slice(16,20)+"-"+t.slice(20)}catch(e){return""}}};Object(o.registerBidder)(p)}},[491]);
/* OpenX                */ pbjsChunk([159],{581:function(e,t,n){e.exports=n(582)},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"USER_ID_CODE_TO_QUERY_ARG",(function(){return f})),n.d(t,"spec",(function(){return b}));var r=n(3),a=n(1),i=n(0),o=n(2),d=n(12),s=n.n(d);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,d=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){d=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(d)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=[o.b,o.d],l=["startdelay","mimes","minduration","maxduration","startdelay","skippable","playbackmethod","api","protocols","boxingallowed","linearity","delivery","protocol","placement","minbitrate","maxbitrate"],f={britepoolid:"britepoolid",criteoId:"criteoid",fabrickId:"nuestarid",haloId:"audigentid",id5id:"id5id",idl_env:"lre",IDP:"zeotapid",idxId:"idxid",intentIqId:"intentiqid",lipb:"lipbid",lotamePanoramaId:"lotameid",merkleId:"merkleid",netId:"netid",parrableId:"parrableid",pubcid:"pubcid",quantcastId:"quantcastid",tapadId:"tapadid",tdid:"ttduuid",uid2:"uid2",flocId:"floc",admixerId:"admixerid",deepintentId:"deepintentid",dmdId:"dmdid",nextrollId:"nextrollid",novatiq:"novatiqid",mwOpenLinkId:"mwopenlinkid",dapId:"dapid",amxId:"amxid"},b={code:"openx",gvlid:69,supportedMediaTypes:m,isBidRequestValid:function(e){var t=e.params.delDomain||e.params.platform;return i.deepAccess(e,"mediaTypes.banner")&&t?!!e.params.unit||i.deepAccess(e,"mediaTypes.banner.sizes.length")>0:!(!e.params.unit||!t)},buildRequests:function(e,t){if(0===e.length)return[];var n=[],a=p(function(e){return e.reduce((function(e,t){var n;return n=t,i.deepAccess(n,"mediaTypes.video")&&!i.deepAccess(n,"mediaTypes.banner")||n.mediaType===o.d?e[0].push(t):e[1].push(t),e}),[[],[]])}(e),2),d=a[0],c=a[1];return c.length>0&&n.push(function(e,t){var n=[],a=!1,d=v(e,t),s=i._map(e,(function(e){return e.params.unit}));d.aus=i._map(e,(function(e){return i.parseSizesInput(e.mediaTypes.banner.sizes).join(",")})).join("|"),d.divids=i._map(e,(function(e){return encodeURIComponent(e.adUnitCode)})).join(","),d.aucs=i._map(e,(function(e){var t=i.deepAccess(e,"ortb2Imp.ext.data.pbadslot");return encodeURIComponent(t||"")})).join(","),s.some((function(e){return e}))&&(d.auid=s.join(","));e.some((function(e){return e.params.doNotTrack}))&&(d.ns=1);(!0===r.b.getConfig("coppa")||e.some((function(e){return e.params.coppa})))&&(d.tfcd=1);e.forEach((function(e){if(e.params.customParams){var t=i._map(Object.keys(e.params.customParams),(function(t){return function(e,t){var n=t[e];i.isArray(n)&&(n=n.join(","));return(e.toLowerCase()+"="+n.toLowerCase()).replace("+",".").replace("/","_")}(t,e.params.customParams)})),r=window.btoa(t.join("&"));a=!0,n.push(r)}else n.push("")})),a&&(d.tps=n.join(","));return y(d,o.b,e),{method:"GET",url:d.ph?"https://u.openx.net/w/1.0/arj":"https://".concat(e[0].params.delDomain,"/w/1.0/arj"),data:d,payload:{bids:e,startTime:new Date}}}(c,t)),d.length>0&&d.forEach((function(e){n.push(function(e,t){var n=function(e,t){var n,r,a=i.deepAccess(e,"mediaTypes.video"),d=v([e],t),c=i.deepAccess(e,"params.video")||{},p=i.deepAccess(e,"mediaTypes.video.context"),u=i.deepAccess(e,"mediaTypes.video.playerSize");i.isArray(e.sizes)&&2===e.sizes.length&&!i.isArray(e.sizes[0])?(n=parseInt(e.sizes[0],10),r=parseInt(e.sizes[1],10)):i.isArray(e.sizes)&&i.isArray(e.sizes[0])&&2===e.sizes[0].length?(n=parseInt(e.sizes[0][0],10),r=parseInt(e.sizes[0][1],10)):i.isArray(u)&&2===u.length&&(n=parseInt(u[0],10),r=parseInt(u[1],10));var m={w:n,h:r},f=e.params.video||e.params.openrtb||{};f.openrtb&&(f=f.openrtb);i.isArray(f.imp)&&(f=f.imp[0].video);Object.keys(f).filter((function(e){return s()(l,e)})).forEach((function(e){return m[e]=f[e]})),Object.keys(a).filter((function(e){return s()(l,e)})).forEach((function(e){return m[e]=a[e]}));var b={imp:[{video:m}]};d.openrtb=JSON.stringify(b),d.auid=e.params.unit,d.vwd=n||c.vwd,d.vht=r||c.vht,"outstream"===p&&(d.vos="101");c.mimes&&(d.vmimes=c.mimes);e.params.test&&(d.vtest=1);var h=i.deepAccess(e,"ortb2Imp.ext.data.pbadslot");h&&(d.aucs=encodeURIComponent(h));return y(d,o.d,[e]),d}(e,t);return{method:"GET",url:n.ph?"https://u.openx.net/v/1.0/avjp":"https://".concat(e.params.delDomain,"/v/1.0/avjp"),data:n,payload:{bid:e,startTime:new Date}}}(e,t))})),n},interpretResponse:function(e,t){var n=e.body;return function(e){return/avjp$/.test(e.url)?o.d:o.b}(t)===o.d?function(e,t){var n=t.bid,r=(t.startTime,[]);if(void 0!==e&&""!==e.vastUrl&&e.pub_rev>0){var a=i.parseUrl(e.vastUrl).search||{},d={};d.requestId=n.bidId,e.deal_id&&(d.dealId=e.deal_id),d.ttl=300,d.netRevenue=!0,d.currency=e.currency,d.cpm=parseInt(e.pub_rev,10)/1e3,d.width=parseInt(e.width,10),d.height=parseInt(e.height,10),d.creativeId=e.adid,d.vastUrl=e.vastUrl,d.mediaType=o.d,e.ph=a.ph,e.colo=a.colo,e.ts=a.ts,r.push(d)}return r}(n,t.payload):function(e,t){for(var n=t.bids,r=(t.startTime,e.ads.ad),a=[],i=0;i<r.length;i++){var o=r[i],d=parseInt(o.idx,10),s={};if(s.requestId=n[d].bidId,o.pub_rev){s.cpm=Number(o.pub_rev)/1e3;var c=o.creative[0];c&&(s.width=c.width,s.height=c.height),s.creativeId=c.id,s.ad=o.html,o.deal_id&&(s.dealId=o.deal_id),s.ttl=300,s.netRevenue=!0,s.currency=o.currency,o.tbd&&(s.tbd=o.tbd),s.ts=o.ts,s.meta={},o.brand_id&&(s.meta.brandId=o.brand_id),o.adomain&&length(o.adomain)>0?s.meta.advertiserDomains=o.adomain:s.meta.advertiserDomains=[],o.adv_id&&(s.meta.dspid=o.adv_id),a.push(s)}}return a}(n,t.payload)},getUserSyncs:function(e,t,n,r){if(e.iframeEnabled||e.pixelEnabled)return[{type:e.iframeEnabled?"iframe":"image",url:i.deepAccess(t,"0.body.ads.pixels")||i.deepAccess(t,"0.body.pixels")||function(e,t){var n="https://u.openx.net/w/1.0/pd",r=[];e&&(r.push("gdpr="+(e.gdprApplies?1:0)),r.push("gdpr_consent="+encodeURIComponent(e.consentString||"")));t&&r.push("us_privacy="+encodeURIComponent(t));return"".concat(n).concat(r.length>0?"?"+r.join("&"):"")}(n,r)}]},transformBidParams:function(e,t){return i.convertTypes({unit:"string",customFloor:"number"},e)}};function h(e){var t,n,r,a=window,i=document,o=i.documentElement;if(e){try{a=window.top,i=window.top.document}catch(e){return}o=i.documentElement,r=i.body,t=a.innerWidth||o.clientWidth||r.clientWidth,n=a.innerHeight||o.clientHeight||r.clientHeight}else o=i.documentElement,t=a.innerWidth||o.clientWidth,n=a.innerHeight||o.clientHeight;return"".concat(t,"x").concat(n)}function v(e,t){var n,a=i.inIframe();n={ju:r.b.getConfig("pageUrl")||t.refererInfo.referer,ch:document.charSet||document.characterSet,res:"".concat(screen.width,"x").concat(screen.height,"x").concat(screen.colorDepth),ifr:a,tz:(new Date).getTimezoneOffset(),tws:h(a),be:1,bc:e[0].params.bc||"".concat("hb_pb","_").concat("3.0.3"),dddid:i._map(e,(function(e){return e.transactionId})).join(","),nocache:(new Date).getTime()};var o,d,s,p,u,m=r.b.getConfig("ortb2.user.data");if(Array.isArray(m)&&m.length>0){var l=m.filter((function(e){return Array.isArray(e.segment)&&e.segment.length>0&&void 0!==e.name&&e.name.length>0})).reduce((function(e,t){var n="object"===c(t.ext)&&t.ext.segtax?"".concat(t.name,"/").concat(t.ext.segtax):t.name;return e[n]=(e[n]||[]).concat(t.segment.map((function(e){return e.id}))),e}),{}),b=Object.keys(l).map((function(e,t){return e+":"+l[e].join("|")})).join(",");b.length>0&&(n.sm=encodeURIComponent(b))}if(e[0].params.platform&&(n.ph=e[0].params.platform),t.gdprConsent){var v=t.gdprConsent;void 0!==v.consentString&&(n.gdpr_consent=v.consentString),void 0!==v.gdprApplies&&(n.gdpr=v.gdprApplies?1:0),"iab"===r.b.getConfig("consentManagement.cmpApi")&&(n.x_gdpr_f=1)}return t&&t.uspConsent&&(n.us_privacy=t.uspConsent),i.deepAccess(e[0],"crumbs.pubcid")&&i.deepSetValue(e[0],"userId.pubcid",i.deepAccess(e[0],"crumbs.pubcid")),o=n,d=e[0].userId,i._each(d,(function(e,t){var n=f[t];if(f.hasOwnProperty(t))switch(t){case"flocId":case"uid2":o[n]=e.id;break;case"lipb":if(o[n]=e.lipbid,Array.isArray(e.segments)&&e.segments.length>0){var r="liveintent:"+e.segments.join("|");o.sm="".concat(o.sm?o.sm+encodeURIComponent(","):"").concat(encodeURIComponent(r))}break;case"parrableId":o[n]=e.eid;break;case"id5id":o[n]=e.uid;break;case"novatiq":o[n]=e.snowflake;break;default:o[n]=e}})),n=o,e[0].schain&&(n.schain=(s=e[0].schain,"".concat(s.ver,",").concat(s.complete,"!").concat((p=s.nodes,u=["asi","sid","hp","rid","name","domain"],p.map((function(e){return u.map((function(t){return e[t]||""})).join(",")})).join("!"))))),n}function y(e,t,n){var a=[],i=!1;n.forEach((function(e){var n=function(e,t){var n={},a=r.b.getConfig("currency.adServerCurrency")||"USD";"function"==typeof e.getFloor&&(n=e.getFloor({currency:a,mediaType:t,size:"*"}));var i=n.floor||e.params.customFloor||0;return Math.round(1e3*i)}(e,t);n?(a.push(n),i=!0):a.push(0)})),i&&(e.aumfs=a.join(","))}Object(a.registerBidder)(b)}},[581]);
/* OptimeraRTDProvider  */ pbjsChunk([157],{585:function(e,t,r){e.exports=r(586)},586:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"optimeraKeyName",(function(){return l})),r.d(t,"scoresBaseURL",(function(){return s})),r.d(t,"scoresURL",(function(){return n})),r.d(t,"clientID",(function(){return o})),r.d(t,"device",(function(){return f})),r.d(t,"optimeraTargeting",(function(){return p})),r.d(t,"fetchScoreFile",(function(){return d})),t.scoreFileRequest=m,t.returnTargetingData=g,t.onAuctionInit=h,t.init=v,t.setScoresURL=b,t.setScores=O,r.d(t,"optimeraSubmodule",(function(){return D}));var n,o,i=r(0),c=r(10),a=r(4),u={},l="hb_deal_optimera",s="https://dyv1bugovvq1g.cloudfront.net/",f="default",p={},d=!0;function m(){i.logInfo("Fetch Optimera score file."),Object(a.b)()(n,{success:function(e,t){if(200===t.status)try{O(e)}catch(e){i.logError("Unable to parse Optimera Score File.",e)}else 403===t.status&&i.logError("Unable to fetch the Optimera Score File - 403")},error:function(){i.logError("Unable to fetch the Optimera Score File.")}})}function g(e,t){var r={};try{e.forEach((function(e){p[e]&&(r[e]={},r[e][l]=[p[e]])}))}catch(e){i.logError("error",e)}return i.logInfo("Apply Optimera targeting"),r}function h(e,t,r){b(),d&&m()}function v(e){return(u=e.params)&&u.clientID?(o=u.clientID,u.optimeraKeyName&&(l=u.optimeraKeyName),u.device&&(f=u.device),b(),m(),!0):(u.clientID||i.logError("Optimera clientID is missing in the Optimera RTD configuration."),!1)}function b(){var e=window.location.host,t=window.location.pathname,r="".concat(s).concat(o,"/").concat(e).concat(t,".js");n!==r?(n=r,d=!0):d=!1}function O(e){var t={};try{t=JSON.parse(e),"default"!==f&&t.device[f]&&(t=t.device[f])}catch(e){i.logError("Optimera score file could not be parsed.")}p=t}var D={name:"optimeraRTD",onAuctionInitEvent:h,getTargetingData:g,init:v};Object(c.e)("realTimeData",D)}},[585]);
/* PermutiveRTDProvider */ pbjsChunk([150],{601:function(e,t,r){e.exports=r(602)},602:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"storage",(function(){return m})),t.initSegments=b,t.setBidderRtb=g,t.isAcEnabled=O,t.isPermutiveOnPage=y,t.getSegments=S,r.d(t,"permutiveSubmodule",(function(){return h}));var n=r(16),a=r(10),c=r(7),i=r(0),u=r(3),o=r(12),s=r.n(o);function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f="permutive",m=Object(c.b)(null,f);function b(e,t,r){var n=y(),a=l(r),c=S(a.params.maxSegs);v(e,a,c),a.waitForIt&&n?window.permutive.ready((function(){v(e,a,c),t()}),"realtime"):t()}function l(e){return Object(i.mergeDeep)({waitForIt:!1,params:{maxSegs:500,acBidders:[],overwrites:{}}},e)}function g(e,t){var r=u.b.getBidderConfig(),n=l(t),a=Object(i.deepAccess)(n,"params.acBidders"),c=S(Object(i.deepAccess)(n,"params.maxSegs"));a.forEach((function(e){var t=function(e,t){var r=t.ac.map((function(e){return{id:e}})),n="permutive.com",a=Object(i.mergeDeep)({},e),c=(Object(i.deepAccess)(a,"ortb2.user.data")||[]).filter((function(e){return e.name!==n})).concat({name:n,segment:r});return Object(i.deepSetValue)(a,"ortb2.user.data",c),a}(r[e]||{},c);u.b.setBidderConfig({bidders:[e],config:t})}))}function v(e,t,r){var a=e&&e.adUnits||Object(n.a)().adUnits,c={deepSetValue:i.deepSetValue,deepAccess:i.deepAccess,isFn:i.isFn,mergeDeep:i.mergeDeep},u={appnexusAst:"appnexus"};a&&a.forEach((function(e){e.bids.forEach((function(e){var n=e.bidder;void 0!==u[n]&&(n=u[n]);var a=O(t,n),o=function(e,t){var r=Object(i.deepAccess)(e,"params.overwrites.".concat(t));return r&&Object(i.isFn)(r)?r:null}(t,n),s=function(e){return{appnexus:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(i.deepSetValue)(e,"params.keywords.p_standard",t.ac),t.appnexus&&t.appnexus.length&&Object(i.deepSetValue)(e,"params.keywords.permutive",t.appnexus),e},rubicon:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(i.deepSetValue)(e,"params.visitor.p_standard",t.ac),t.rubicon&&t.rubicon.length&&Object(i.deepSetValue)(e,"params.visitor.permutive",t.rubicon),e},ozone:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(i.deepSetValue)(e,"params.customData.0.targeting.p_standard",t.ac),e}}[e]}(n);o?o(e,r,a,c,s):s&&s(e,r,a)}))}))}function j(e){try{e()}catch(e){Object(i.logError)(e)}}function O(e,t){var r=Object(i.deepAccess)(e,"params.acBidders")||[];return s()(r,t)}function y(){return void 0!==window.permutive&&"function"==typeof window.permutive.ready}function S(e){var t=A("_psegs").map(Number).filter((function(e){return e>=1e6})).map(String),r=A("_ppam"),n=A("_pcrprs"),a={ac:[].concat(p(n),p(r),p(t)),rubicon:A("_prubicons"),appnexus:A("_papns"),gam:A("_pdfps")};for(var c in a)a[c]=a[c].slice(0,e);return a}function A(e){try{return JSON.parse(m.getDataFromLocalStorage(e)||"[]")}catch(e){return[]}}var h={name:f,getBidRequestData:function(e,t,r){j((function(){b(e,t,r)}))},onAuctionInitEvent:function(){},init:function(e,t){return!0}};Object(a.e)("realTimeData",h)}},[601]);
/* PrebidServer         */ pbjsChunk([32],{605:function(e,r,t){e.exports=t(606)},606:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.resetSyncedStatus=function(){T=0},r.resetWurlMap=function(){J={}},r.PrebidServer=G;var n=t(75),i=t(39),s=t(0),o=t(5),a=t.n(o),c=t(8),d=t(3),p=t(2),u=t(36),l=t(1),b=t(9),f=t.n(b),g=t(12),v=t.n(g),y=t(607),m=t(4),h=t(11),S=t.n(h);function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,s=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(s.push(n.value),!r||s.length!==r);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return s}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return A(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(){return(w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P,k,_=d.b.getConfig,I=a.a.S2S.SRC,T=0,U={timeout:1e3,maxBids:1,adapter:"prebidServer",adapterOptions:{},syncUrlModifier:{}};function B(e){if(e){var r=Array.isArray(e)?e:[e],t=[];return r.every((function(r,n,i){if((function(e){["endpoint","syncEndpoint"].forEach((function(r){if(s.isStr(e[r])){var t=e[r];e[r]={p1Consent:t,noP1Consent:t}}!s.isPlainObject(e[r])||e[r].p1Consent&&e[r].noP1Consent||["p1Consent","noP1Consent"].forEach((function(t){e[r][t]||s.logWarn("s2sConfig.".concat(r,".").concat(t," not defined.  PBS request will be skipped in some P1 scenarios."))}))}))}(e),!1!==function(e){if(e.defaultVendor){var r=e.defaultVendor,t=Object.keys(e);if(!y.a[r])return s.logError("Incorrect or unavailable prebid server default vendor option: "+r),!1;Object.keys(y.a[r]).forEach((function(n){U[n]!==e[n]&&v()(t,n)||(e[n]=y.a[r][n])}))}return e.enabled="boolean"==typeof e.enabled&&e.enabled}(r))&&!1!==function(e){var r=Object.keys(e);if(["accountId","bidders","endpoint"].filter((function(e){return!v()(r,e)&&(s.logError(e+" missing in server to server config"),!0)})).length>0)return!1}(r))return Array.isArray(r.bidders)&&(i[n].bidders=r.bidders.filter((function(e){return-1===t.indexOf(e)&&(t.push(e),!0)}))),!0;return s.logWarn("prebidServer: s2s config is disabled"),!1}))?P=r:void 0}}function D(e,r){if(0!==e.length){var t=e.shift();t.no_cookie?function(e,r,t,n,i){if(i.syncUrlModifier&&"function"==typeof i.syncUrlModifier[t]){V(e,i.syncUrlModifier[t](e,r,t),t,n)}else V(e,r,t,n)}(t.usersync.type,t.usersync.url,t.bidder,s.bind.call(D,null,e,r),r):D(e,r)}}function V(e,r,t,n){r?"image"===e||"redirect"===e?(s.logMessage('Invoking image pixel user sync for bidder: "'.concat(t,'"')),s.triggerPixel(r,n)):"iframe"==e?(s.logMessage('Invoking iframe user sync for bidder: "'.concat(t,'"')),s.insertUserSyncIframe(r,n)):(s.logError('User sync type "'.concat(e,'" not supported for bidder: "').concat(t,'"')),n()):(s.logError('No sync url for bidder "'.concat(t,'": ').concat(r)),n())}d.b.setDefaults({s2sConfig:U}),_("s2sConfig",(function(e){return B(e.s2sConfig)}));var R={sponsoredBy:1,body:2,rating:3,likes:4,downloads:5,price:6,salePrice:7,phone:8,address:9,body2:10,cta:12},N=Object.keys(R),q={icon:1,image:3},z={img:1,js:2};[R,q,{impression:1,"viewable-mrc50":2,"viewable-mrc100":3,"viewable-video50":4},z].forEach((function(e){Object.keys(e).forEach((function(r){e[e[r]]=r}))}));var M={},W={},J={};var X=function(e,r,t,n,i){var o=[],a={},p=r[0],l=new Set;if(t.forEach((function(e){for(var t=e.code,i=1;l.has(t);)i++,t="".concat(e.code,"-").concat(i);l.add(t);var b,f=Object(u.h)(s.deepAccess(e,"mediaTypes.native"));if(f)try{b=W[t]=Object.keys(f).reduce((function(e,r){var t=f[r];function n(e){return w({required:t.required?1:0},e?s.cleanObj(e):{})}switch(r){case"image":case"icon":var i=q[r],o=s.cleanObj({type:i,w:s.deepAccess(t,"sizes.0"),h:s.deepAccess(t,"sizes.1"),wmin:s.deepAccess(t,"aspect_ratios.0.min_width"),hmin:s.deepAccess(t,"aspect_ratios.0.min_height")});if(!(o.w&&o.h||o.hmin&&o.wmin))throw"invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";Array.isArray(t.aspect_ratios)&&(o.ext={aspectratios:t.aspect_ratios.map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}))}),e.push(n({img:o}));break;case"title":if(!t.len)throw"invalid title.len";e.push(n({title:{len:t.len}}));break;default:var a=R[r];a&&e.push(n({data:{type:a,len:t.len}}))}return e}),[])}catch(e){s.logError("error creating native request: "+String(e))}var g=s.deepAccess(e,"mediaTypes.video"),v=s.deepAccess(e,"mediaTypes.banner");e.bids.forEach((function(e){if(M["".concat(t).concat(e.bidder)]=e.bid_id,c.default.aliasRegistry[e.bidder]){var r=c.default.bidderRegistry[e.bidder];r&&!r.getSpec().skipPbsAliasing&&(a[e.bidder]=c.default.aliasRegistry[e.bidder])}}));var y={};if(v&&v.sizes){var m=s.parseSizesInput(v.sizes).map((function(e){var r=j(e.split("x"),2),t=r[0],n=r[1];return{w:parseInt(t,10),h:parseInt(n,10)}}));y.banner={format:m},v.pos&&(y.banner.pos=v.pos)}if(s.isEmpty(g)||("outstream"!==g.context||g.renderer||e.renderer?("instream"!==g.context||g.hasOwnProperty("placement")||(g.placement=1),y.video=Object.keys(g).filter((function(e){return"context"!==e})).reduce((function(e,r){return"playerSize"===r?(e.w=s.deepAccess(g,"".concat(r,".0.0")),e.h=s.deepAccess(g,"".concat(r,".0.1"))):e[r]=g[r],e}),{})):s.logError("Outstream bid without renderer cannot be sent to Prebid Server.")),b)try{y.native={request:JSON.stringify({context:1,plcmttype:1,eventtrackers:[{event:1,methods:[1]}],assets:b}),ver:"1.2"}}catch(e){s.logError("error creating native request: "+String(e))}var h=e.bids.reduce((function(t,i){var s=c.default.bidderRegistry[i.bidder];return s&&s.getSpec().transformBidParams&&(i.params=s.getSpec().transformBidParams(i.params,!0,e,r)),t[i.bidder]=n.adapterOptions&&n.adapterOptions[i.bidder]?w({},i.params,n.adapterOptions[i.bidder]):i.params,t}),x({},s.deepAccess(e,"ortb2Imp.ext"))),C={id:t,ext:h,secure:n.secure},O=x({},s.deepAccess(e,"ortb2Imp.ext.data"));Object.keys(O).forEach((function(e){"pbadslot"===e?"string"==typeof O[e]&&O[e]?s.deepSetValue(C,"ext.data.pbadslot",O[e]):delete C.ext.data.pbadslot:"adserver"===e?["name","adslot"].forEach((function(e){var r=s.deepAccess(O,"adserver.".concat(e));"string"==typeof r&&r&&s.deepSetValue(C,"ext.data.adserver.".concat(e.toLowerCase()),r)})):s.deepSetValue(C,"ext.data.".concat(e),O[e])})),w(C,y);var A=S()(p.bids,(function(r){return r.adUnitCode===e.code&&r.storedAuctionResponse}));A&&s.deepSetValue(C,"ext.prebid.storedauctionresponse.id",A.storedAuctionResponse.toString());var E=S()(p.bids,(function(r){return r.adUnitCode===e.code&&"function"==typeof r.getFloor}));if(E){var P;try{P=E.getFloor({currency:d.b.getConfig("currency.adServerCurrency")||"USD"})}catch(e){s.logError("PBS: getFloor threw an error: ",e)}P&&P.currency&&!isNaN(parseFloat(P.floor))&&(C.bidfloor=parseFloat(P.floor),C.bidfloorcur=P.currency)}(C.banner||C.video||C.native)&&o.push(C)})),o.length){var b={id:e.tid,source:{tid:e.tid},tmax:n.timeout,imp:o,test:0,ext:{prebid:{auctiontimestamp:p.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}}}};b.ext.prebid=w(b.ext.prebid,{channel:{name:"pbjs",version:pbjs.version}}),_("debug")&&(b.ext.prebid=w(b.ext.prebid,{debug:!0})),n.extPrebid&&"object"===E(n.extPrebid)&&(b.ext.prebid=w(b.ext.prebid,n.extPrebid));var f=d.b.getConfig("currency.adServerCurrency");f&&"string"==typeof f?b.cur=[f]:Array.isArray(f)&&f.length&&(b.cur=[f[0]]),function(e,r,t){e&&("object"===E(d.b.getConfig("app"))?(e.app=d.b.getConfig("app"),e.app.publisher={id:t}):(e.site={},s.isPlainObject(d.b.getConfig("site"))&&(e.site=d.b.getConfig("site")),s.deepAccess(e.site,"publisher.id")||s.deepSetValue(e.site,"publisher.id",t),e.site.page||(e.site.page=r)),"object"===E(d.b.getConfig("device"))&&(e.device=d.b.getConfig("device")),e.device||(e.device={}),e.device.w||(e.device.w=window.innerWidth),e.device.h||(e.device.h=window.innerHeight))}(b,r[0].refererInfo.referer,n.accountId);var g=s.deepAccess(r,"0.bids.0.schain");g&&(b.source.ext={schain:g}),s.isEmpty(a)||(b.ext.prebid.aliases=x(x({},b.ext.prebid.aliases),a));var v=s.deepAccess(r,"0.bids.0.userIdAsEids");s.isArray(v)&&v.length>0&&s.deepSetValue(b,"user.ext.eids",v),s.isArray(k)&&k.length>0&&(i&&s.isArray(i)&&k.forEach((function(e){e.bidders&&(e.bidders=e.bidders.filter((function(e){return i.includes(e)})))})),s.deepSetValue(b,"ext.prebid.data.eidpermissions",k));var y=d.b.getConfig("multibid");if(y&&s.deepSetValue(b,"ext.prebid.multibid",y.reduce((function(e,r){var t={};return Object.keys(r).forEach((function(e){t[e.toLowerCase()]=r[e]})),e.push(t),e}),[])),r){var m;if(p.gdprConsent)"boolean"==typeof p.gdprConsent.gdprApplies&&(m=p.gdprConsent.gdprApplies?1:0),s.deepSetValue(b,"regs.ext.gdpr",m),s.deepSetValue(b,"user.ext.consent",p.gdprConsent.consentString),p.gdprConsent.addtlConsent&&"string"==typeof p.gdprConsent.addtlConsent&&s.deepSetValue(b,"user.ext.ConsentedProvidersSettings.consented_providers",p.gdprConsent.addtlConsent);p.uspConsent&&s.deepSetValue(b,"regs.ext.us_privacy",p.uspConsent)}!0===_("coppa")&&s.deepSetValue(b,"regs.coppa",1);var h=_("ortb2")||{};return h.site&&s.mergeDeep(b,{site:h.site}),h.user&&s.mergeDeep(b,{user:h.user}),function(e){var r=d.b.getBidderConfig(),t=Object.keys(r).reduce((function(e,t){var n=r[t];if(n.ortb2){var i={};n.ortb2.site&&(i.site=n.ortb2.site),n.ortb2.user&&(i.user=n.ortb2.user),e.push({bidders:[t],config:{ortb2:i}})}return e}),[]);t.length&&s.deepSetValue(e,"ext.prebid.bidderconfig",t)}(b),b}s.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")},F=function(e,r,t){var n=[];return[["errors","serverErrors"],["responsetimemillis","serverResponseTimeMs"]].forEach((function(t){return function(e,r,t,n){var i=s.deepAccess(r,"ext.".concat(t));i&&Object.keys(i).forEach((function(r){var t=S()(e,(function(e){return e.bidderCode===r}));t&&(t[n]=i[r])}))}(r,e,t[0],t[1])})),e.seatbid&&e.seatbid.forEach((function(o){(o.bid||[]).forEach((function(c){var d,u="".concat(c.impid).concat(o.seat);M[u]&&(d=s.getBidRequest(M[u],r));var l=c.price,b=0!==l?a.a.STATUS.GOOD:a.a.STATUS.NO_BID,f=Object(i.a)(b,d||{bidder:o.seat,src:I});f.cpm=l;var g=s.deepAccess(e,["ext","responsetimemillis",o.seat].join("."));d&&g&&(d.serverResponseTimeMs=g);var v,y,m,h=s.deepAccess(c,"ext.prebid.bidid");s.isStr(h)&&(f.pbsBidId=h),s.isStr(s.deepAccess(c,"ext.prebid.events.win"))&&(v=d.auctionId,y=f.adId,m=s.deepAccess(c,"ext.prebid.events.win"),[v,y].every(s.isStr)&&(J["".concat(v).concat(y)]=m));var S=s.deepAccess(c,"ext.prebid.targeting");if(s.isPlainObject(S)&&(s.isStr(s.deepAccess(c,"ext.prebid.events.win"))&&(S=s.getDefinedParams(S,Object.keys(S).filter((function(e){return-1===e.indexOf("hb_winurl")&&-1===e.indexOf("hb_bidid")})))),f.adserverTargeting=S),f.seatBidId=c.id,s.deepAccess(c,"ext.prebid.type")===p.d){f.mediaType=p.d;var C=d.sizes&&d.sizes[0];f.playerWidth=C[0],f.playerHeight=C[1],c.ext.prebid.cache&&"object"===E(c.ext.prebid.cache.vastXml)&&c.ext.prebid.cache.vastXml.cacheId&&c.ext.prebid.cache.vastXml.url?(f.videoCacheKey=c.ext.prebid.cache.vastXml.cacheId,f.vastUrl=c.ext.prebid.cache.vastXml.url):S&&S.hb_uuid&&S.hb_cache_host&&S.hb_cache_path&&(f.videoCacheKey=S.hb_uuid,f.vastUrl="https://".concat(S.hb_cache_host).concat(S.hb_cache_path,"?uuid=").concat(S.hb_uuid)),c.adm&&(f.vastXml=c.adm),!f.vastUrl&&c.nurl&&(f.vastUrl=c.nurl)}else if(s.deepAccess(c,"ext.prebid.type")===p.c){var x,j;f.mediaType=p.c,j="string"==typeof c.adm?f.adm=JSON.parse(c.adm):f.adm=c.adm;var A=(O(x={},z.img,j.imptrackers||[]),O(x,z.js,j.jstracker?[j.jstracker]:[]),x);if(j.eventtrackers&&j.eventtrackers.forEach((function(e){switch(e.method){case z.img:A[z.img].push(e.url);break;case z.js:A[z.js].push(e.url)}})),s.isPlainObject(j)&&Array.isArray(j.assets)){var w=W[c.impid];f.native=s.cleanObj(j.assets.reduce((function(e,r){var t=w[r.id];return s.isPlainObject(r.img)?e[t.img.type?q[t.img.type]:"image"]=s.pick(r.img,["url","w as width","h as height"]):s.isPlainObject(r.title)?e.title=r.title.text:s.isPlainObject(r.data)&&N.forEach((function(n){R[n]===t.data.type&&(e[n]=r.data.value)})),e}),s.cleanObj({clickUrl:j.link,clickTrackers:s.deepAccess(j,"link.clicktrackers"),impressionTrackers:A[z.img],javascriptTrackers:A[z.js]})))}else s.logError("prebid server native response contained no assets")}else c.adm&&c.nurl?(f.ad=c.adm,f.ad+=s.createTrackPixelHtml(decodeURIComponent(c.nurl))):c.adm?f.ad=c.adm:c.nurl&&(f.adUrl=c.nurl);f.width=c.w,f.height=c.h,c.dealid&&(f.dealId=c.dealid),f.requestId=d.bidId||d.bid_Id,f.creative_id=c.crid,f.creativeId=c.crid,c.burl&&(f.burl=c.burl),f.currency=e.cur?e.cur:"USD",f.meta={};var P=s.deepAccess(c,"ext.prebid.meta");P&&s.isPlainObject(P)&&(f.meta=s.deepClone(P)),c.adomain&&(f.meta.advertiserDomains=c.adomain);var k=t.defaultTtl||60;f.ttl=c.exp?c.exp:k,f.netRevenue=!c.netRevenue||c.netRevenue,n.push({adUnit:d.adUnitCode,bid:f})}))})),n};function H(e){var r,t,n=function(e,r){if([e,r].every(s.isStr))return J["".concat(e).concat(r)]}(e.auctionId,e.adId);s.isStr(n)&&(s.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(n,'"')),s.triggerPixel(n),r=e.auctionId,t=e.adId,[r,t].every(s.isStr)&&(J["".concat(r).concat(t)]=void 0))}function L(e,r){return function(e){var r=!0;return e&&e.gdprApplies&&2===e.apiVersion&&(r=!(!0!==s.deepAccess(e,"vendorData.purpose.consents.1"))),r}(r)?e.p1Consent:e.noP1Consent}function K(e){var r,t;return Array.isArray(e)&&e.length>0&&(r=e[0].gdprConsent,t=e[0].uspConsent),{gdprConsent:r,uspConsent:t}}function G(){var e=new n.a("prebidServer");return e.callBids=function(e,r,t,n,i){var o=s.deepClone(e.ad_units),p=K(r),u=p.gdprConsent,b=p.uspConsent,g=o.filter((function(e){return e.mediaTypes&&(e.mediaTypes.native||e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.mediaTypes.video&&e.mediaTypes.video.playerSize)})),y=g.map((function(e){return e.bids.map((function(e){return e.bidder})).filter(s.uniques)})).reduce(s.flatten).filter(s.uniques);if(Array.isArray(P)){if(e.s2sConfig&&e.s2sConfig.syncEndpoint&&L(e.s2sConfig.syncEndpoint,u))!function(e,r,t,n){if(P.length!==T){T++;var i={uuid:s.generateUUID(),bidders:e,account:n.accountId},o=n.userSyncLimit;s.isNumber(o)&&o>0&&(i.limit=o),r&&(i.gdpr=r.gdprApplies?1:0,!1!==r.gdprApplies&&(i.gdpr_consent=r.consentString)),t&&(i.us_privacy=t),"boolean"==typeof n.coopSync&&(i.coopSync=n.coopSync);var a=JSON.stringify(i);Object(m.a)(L(n.syncEndpoint,r),(function(e){try{D((e=JSON.parse(e)).bidder_status,n)}catch(e){s.logError(e)}}),a,{contentType:"text/plain",withCredentials:!0})}}(e.s2sConfig.bidders.map((function(e){return c.default.aliasRegistry[e]||e})).filter((function(e,r,t){return t.indexOf(e)===r})),u,b,e.s2sConfig);var h=X(e,r,g,e.s2sConfig,y),S=h&&JSON.stringify(h);s.logInfo("BidRequest: "+S);var C=L(e.s2sConfig.endpoint,u);h&&S&&C?i(C,{success:function(i){return function(e,r,t,n,i,o){var p,u=K(t),b=u.gdprConsent,g=u.uspConsent;try{p=JSON.parse(e),F(p,t,o).forEach((function(e){var r=e.adUnit,i=e.bid;Object(l.isValid)(r,i,t)&&n(r,i)})),t.forEach((function(e){return f.a.emit(a.a.EVENTS.BIDDER_DONE,e)}))}catch(e){s.logError(e)}(!p||p.status&&v()(p.status,"Error"))&&s.logError("error parsing response: ",p.status);i(),function(e,r,t){e.forEach((function(e){var n=c.default.getBidAdapter(e);n&&n.registerSyncs&&d.b.runWithBidder(e,s.bind.call(n.registerSyncs,n,[],r,t))}))}(r,b,g)}(i,y,r,t,n,e.s2sConfig)},error:n},S,{contentType:"text/plain",withCredentials:!0}):s.logError("PBS request not made.  Check endpoints.")}},f.a.on(a.a.EVENTS.BID_WON,H),w(this,{callBids:e.callBids,setBidderCode:e.setBidderCode,type:I})}Object(s.getPrebidInternal)().setEidPermissions=function(e){k=e},c.default.registerBidAdapter(new G,"prebidServer")},607:function(){}},[605]);
/* Pubmatic             */ pbjsChunk([143],{622:function(e,r,a){e.exports=a(623)},623:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",(function(){return F}));var t=a(0),i=a(1),n=a(2),s=a(3),o=a(13);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function c(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l="pubmatic",m="PubMatic: ",g="USD",b=void 0,h="https://pubmatic.bbvms.com/r/".concat("$RENDERER",".js"),f={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},y="number",v="string",E="boolean",I="array",w={mimes:I,minduration:y,maxduration:y,startdelay:y,playbackmethod:I,api:I,protocols:I,w:y,h:y,battr:I,linearity:y,placement:y,minbitrate:y,maxbitrate:y,skip:y},P={TITLE:{ID:1,KEY:"title",TYPE:0},IMAGE:{ID:2,KEY:"image",TYPE:0},ICON:{ID:3,KEY:"icon",TYPE:0},SPONSOREDBY:{ID:4,KEY:"sponsoredBy",TYPE:1},BODY:{ID:5,KEY:"body",TYPE:2},CLICKURL:{ID:6,KEY:"clickUrl",TYPE:0},VIDEO:{ID:7,KEY:"video",TYPE:0},EXT:{ID:8,KEY:"ext",TYPE:0},DATA:{ID:9,KEY:"data",TYPE:0},LOGO:{ID:10,KEY:"logo",TYPE:0},SPONSORED:{ID:11,KEY:"sponsored",TYPE:1},DESC:{ID:12,KEY:"data",TYPE:2},RATING:{ID:13,KEY:"rating",TYPE:3},LIKES:{ID:14,KEY:"likes",TYPE:4},DOWNLOADS:{ID:15,KEY:"downloads",TYPE:5},PRICE:{ID:16,KEY:"price",TYPE:6},SALEPRICE:{ID:17,KEY:"saleprice",TYPE:7},PHONE:{ID:18,KEY:"phone",TYPE:8},ADDRESS:{ID:19,KEY:"address",TYPE:9},DESC2:{ID:20,KEY:"desc2",TYPE:10},DISPLAYURL:{ID:21,KEY:"displayurl",TYPE:11},CTA:{ID:22,KEY:"cta",TYPE:12}},O=1,T=2,S=3,D=[{id:P.SPONSOREDBY.ID,required:!0,data:{type:1}},{id:P.TITLE.ID,required:!0},{id:P.IMAGE.ID,required:!0}],Y={1:"PMP",5:"PREF",6:"PMPG"},x=1,R=2,k={bootstrapPlayer:function(e){var r={code:e.adUnitCode};if(e.vastXml?r.vastXml=e.vastXml:e.vastUrl&&(r.vastUrl=e.vastUrl),e.vastXml||e.vastUrl){for(var a,i=k.getRendererId("pubmatic",e.rendererCode),n=document.getElementById(e.adUnitCode),s=0;s<window.bluebillywig.renderers.length;s++)if(window.bluebillywig.renderers[s]._id===i){a=window.bluebillywig.renderers[s];break}a?a.bootstrap(r,n):t.logWarn("".concat(m,": Couldn't find a renderer with ").concat(i))}else t.logWarn("".concat(m,": No vastXml or vastUrl on bid, bailing..."))},newRenderer:function(e,r){var a=h.replace("$RENDERER",e),i=o.a.install({url:a,loaded:!1,adUnitCode:r});try{i.setRender(k.outstreamRender)}catch(e){t.logWarn("".concat(m,": Error tying to setRender on renderer"),e)}return i},outstreamRender:function(e){e.renderer.push((function(){k.bootstrapPlayer(e)}))},getRendererId:function(e,r){return"".concat(e,"-").concat(r)}},A=[n.b,n.d,n.c],C=0,z=!1,K={},N={};function U(e,r){if(!t.isStr(r))return r&&t.logWarn("PubMatic: Ignoring param key: "+e+", expects string-value, found "+u(r)),b;switch(e){case"pmzoneid":return r.split(",").slice(0,50).map((function(e){return e.trim()})).join();case"kadfloor":case"lat":case"lon":return parseFloat(r)||b;case"yob":return parseInt(r)||b;default:return r}}function q(e){var r;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(r=e.params.adSlot,t.isStr(r)?r.replace(/^\s+/g,"").replace(/\s+$/g,""):(r&&t.logWarn("pubmatic: adSlot must be a string. Ignoring adSlot"),""));var a=e.params.adSlot,i=a.split(":");if(a=i[0],2==i.length&&(e.params.adUnitIndex=i[1]),i=a.split("@"),e.params.adUnit=i[0],i.length>1){if(2!=(i=i[1].split("x")).length)return void t.logWarn("PubMatic: AdSlot Error: adSlot not in required format");e.params.width=parseInt(i[0],10),e.params.height=parseInt(i[1],10)}else if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(n.b)&&e.mediaTypes.banner.hasOwnProperty("sizes")){for(var s=0,o=[];s<e.mediaTypes.banner.sizes.length;s++)2===e.mediaTypes.banner.sizes[s].length&&o.push(e.mediaTypes.banner.sizes[s]);e.mediaTypes.banner.sizes=o,e.mediaTypes.banner.sizes.length>=1&&(e.params.width=e.mediaTypes.banner.sizes[0][0],e.params.height=e.mediaTypes.banner.sizes[0][1],e.mediaTypes.banner.sizes=e.mediaTypes.banner.sizes.splice(1,e.mediaTypes.banner.sizes.length-1))}}function M(e,r,a){var i,n="Ignoring param key: "+e+", expects "+a+", found "+u(r);switch(a){case E:i=t.isBoolean;break;case y:i=t.isNumber;break;case v:i=t.isStr;break;case I:i=t.isArray}return i(r)?r:(t.logWarn(m+n),b)}function L(e,r){var a=e.KEY;return{id:e.ID,required:r[a].required?1:0,data:{type:e.TYPE,len:r[a].len,ext:r[a].ext}}}function j(e){var r={assets:[]};for(var a in e){if(e.hasOwnProperty(a)){var i={};if(!(r.assets&&r.assets.length>0&&r.assets.hasOwnProperty(a)))switch(a){case P.TITLE.KEY:e[a].len||e[a].length?i={id:P.TITLE.ID,required:e[a].required?1:0,title:{len:e[a].len||e[a].length,ext:e[a].ext}}:t.logWarn("PubMatic: Error: Title Length is required for native ad: "+JSON.stringify(e));break;case P.IMAGE.KEY:e[a].sizes&&e[a].sizes.length>0?i={id:P.IMAGE.ID,required:e[a].required?1:0,img:{type:S,w:e[a].w||e[a].width||(e[a].sizes?e[a].sizes[0]:b),h:e[a].h||e[a].height||(e[a].sizes?e[a].sizes[1]:b),wmin:e[a].wmin||e[a].minimumWidth||(e[a].minsizes?e[a].minsizes[0]:b),hmin:e[a].hmin||e[a].minimumHeight||(e[a].minsizes?e[a].minsizes[1]:b),mimes:e[a].mimes,ext:e[a].ext}}:t.logWarn("PubMatic: Error: Image sizes is required for native ad: "+JSON.stringify(e));break;case P.ICON.KEY:e[a].sizes&&e[a].sizes.length>0?i={id:P.ICON.ID,required:e[a].required?1:0,img:{type:O,w:e[a].w||e[a].width||(e[a].sizes?e[a].sizes[0]:b),h:e[a].h||e[a].height||(e[a].sizes?e[a].sizes[1]:b)}}:t.logWarn("PubMatic: Error: Icon sizes is required for native ad: "+JSON.stringify(e));break;case P.VIDEO.KEY:i={id:P.VIDEO.ID,required:e[a].required?1:0,video:{minduration:e[a].minduration,maxduration:e[a].maxduration,protocols:e[a].protocols,mimes:e[a].mimes,ext:e[a].ext}};break;case P.EXT.KEY:i={id:P.EXT.ID,required:e[a].required?1:0};break;case P.LOGO.KEY:i={id:P.LOGO.ID,required:e[a].required?1:0,img:{type:T,w:e[a].w||e[a].width||(e[a].sizes?e[a].sizes[0]:b),h:e[a].h||e[a].height||(e[a].sizes?e[a].sizes[1]:b)}};break;case P.SPONSOREDBY.KEY:case P.BODY.KEY:case P.RATING.KEY:case P.LIKES.KEY:case P.DOWNLOADS.KEY:case P.PRICE.KEY:case P.SALEPRICE.KEY:case P.PHONE.KEY:case P.ADDRESS.KEY:case P.DESC2.KEY:case P.DISPLAYURL.KEY:case P.CTA.KEY:i=L(N[a],e)}}i&&i.id&&(r.assets[r.assets.length]=i)}var n=D.length,s=0;return D.forEach((function(e){for(var a=r.assets.length,t=0;t<a;t++)if(e.id==r.assets[t].id){s++;break}})),z=n!=s,r}function W(e){var r,a=e.mediaTypes.banner.sizes,i=[];if(a!==b&&t.isArray(a)){if(r={},e.params.width||e.params.height)r.w=e.params.width,r.h=e.params.height;else{if(0===a.length)return r=b,t.logWarn("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),r;r.w=parseInt(a[0][0],10),r.h=parseInt(a[0][1],10),a=a.splice(1,a.length-1)}a.length>0&&(i=[],a.forEach((function(e){e.length>1&&i.push({w:e[0],h:e[1]})})),i.length>0&&(r.format=i)),r.pos=0,r.topframe=t.inIframe()?0:1}else t.logWarn("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),r=b;return r}function _(e){var r,a=t.mergeDeep(t.deepAccess(e.mediaTypes,"video"),e.params.video);if(a!==b){for(var i in r={},w)a.hasOwnProperty(i)&&(r[i]=M(i,a[i],w[i]));t.isArray(e.mediaTypes.video.playerSize[0])?(r.w=parseInt(e.mediaTypes.video.playerSize[0][0],10),r.h=parseInt(e.mediaTypes.video.playerSize[0][1],10)):t.isNumber(e.mediaTypes.video.playerSize[0])&&(r.w=parseInt(e.mediaTypes.video.playerSize[0],10),r.h=parseInt(e.mediaTypes.video.playerSize[1],10))}else r=b,t.logWarn("PubMatic: Error: Video config params missing for adunit: "+e.params.adUnit+" with mediaType set as video. Ignoring video impression in the adunit.");return r}function B(e,r){var a,i,o={},d={},l=e.hasOwnProperty("sizes")?e.sizes:[],m="",h=[];if(function(e,r){r.params.deals&&(t.isArray(r.params.deals)?r.params.deals.forEach((function(r){t.isStr(r)&&r.length>3?(e.pmp||(e.pmp={private_auction:0,deals:[]}),e.pmp.deals.push({id:r})):t.logWarn("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: "+r)})):t.logWarn("PubMatic: Error: bid.params.deals should be an array of strings."))}(o={id:e.bidId,tagid:e.params.adUnit||void 0,bidfloor:U("kadfloor",e.params.kadfloor),secure:1,ext:{pmZoneId:U("pmzoneid",e.params.pmzoneid)},bidfloorcur:e.params.currency?U("currency",e.params.currency):g},e),function(e,r){var a,i="";if(r.params.dctr)if(i=r.params.dctr,t.isStr(i)&&i.length>0){var n=i.split("|");i="",n.forEach((function(e){i+=e.length>0?e.trim()+"|":""})),a=i.length,"|"===i.substring(a,a-1)&&(i=i.substring(0,a-1)),e.ext.key_val=i.trim()}else t.logWarn("PubMatic: Ignoring param : dctr with value : "+i+", expects string-value, found empty or non-string value")}(o,e),e.hasOwnProperty("mediaTypes"))for(m in e.mediaTypes)switch(m){case n.b:(a=W(e))!==b&&(o.banner=a);break;case n.c:d.request=JSON.stringify(j(e.nativeParams)),z?t.logWarn("PubMatic: Error: Error in Native adunit "+e.params.adUnit+". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."):o.native=d;break;case n.d:(i=_(e))!==b&&(o.video=i)}else a={pos:0,w:e.params.width,h:e.params.height,topframe:t.inIframe()?0:1},t.isArray(l)&&l.length>1&&((l=l.splice(1,l.length-1)).forEach((function(e){h.push({w:e[0],h:e[1]})})),a.format=h),o.banner=a;return function(e,r){var a=function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){c(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}({},t.deepAccess(r,"ortb2Imp.ext.data"));Object.keys(a).forEach((function(r){"pbadslot"===r?"string"==typeof a[r]&&a[r]&&t.deepSetValue(e,"ext.data.pbadslot",a[r]):"adserver"===r?["name","adslot"].forEach((function(r){var i=t.deepAccess(a,"adserver.".concat(r));"string"==typeof i&&i&&(t.deepSetValue(e,"ext.data.adserver.".concat(r.toLowerCase()),i),"adslot"===r&&t.deepSetValue(e,"ext.dfp_ad_unit_code",i))})):t.deepSetValue(e,"ext.data.".concat(r),a[r])}))}(o,e),function(e,r){var a=-1;"function"!=typeof r.getFloor||s.b.getConfig("pubmatic.disableFloors")||[n.b,n.d,n.c].forEach((function(t){if(e.hasOwnProperty(t)){var i=r.getFloor({currency:e.bidfloorcur,mediaType:t,size:"*"});if("object"===u(i)&&i.currency===e.bidfloorcur&&!isNaN(parseInt(i.floor))){var n=parseFloat(i.floor);a=-1==a?n:Math.min(n,a)}}}));e.bidfloor&&(a=Math.max(a,e.bidfloor));e.bidfloor=!isNaN(a)&&a>0?a:b}(o,e),o.hasOwnProperty(n.b)||o.hasOwnProperty(n.c)||o.hasOwnProperty(n.d)?o:b}function V(e,r){var a=null,i=t.deepAccess(e,"0.userId.flocId");if(i&&i.id)switch(r){case R:a={id:"FLOC",name:"FLOC",ext:{ver:i.version},segment:[{id:i.id,name:"chrome.com",value:i.id.toString()}]};break;case x:default:a={source:"chrome.com",uids:[{atype:1,id:i.id,ext:{ver:i.version}}]}}return a}function G(e){return!0===t.isArray(e)&&e.length>0}t._each(P,(function(e){K[e.ID]=e.KEY})),t._each(P,(function(e){N[e.KEY]=e}));var F={code:l,gvlid:76,supportedMediaTypes:[n.b,n.d,n.c],isBidRequestValid:function(e){if(e&&e.params){if(!t.isStr(e.params.publisherId))return t.logWarn("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1;if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(n.d)){var r=t.deepAccess(e.mediaTypes,"video.mimes"),a=t.deepAccess(e,"params.video.mimes");if(!1===G(r)&&!1===G(a))return t.logWarn("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:"+JSON.stringify(e)),!1;if(!e.mediaTypes[n.d].hasOwnProperty("context"))return t.logError("".concat(m,": no context specified in bid. Rejecting bid: "),e),!1;if("outstream"===e.mediaTypes[n.d].context&&!t.isStr(e.params.outstreamAU)&&!e.hasOwnProperty("renderer")&&!e.mediaTypes[n.d].hasOwnProperty("renderer"))return t.logError("".concat(m,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '),e),!1}return!0}return!1},buildRequests:function(e,r){var a;r&&r.refererInfo&&(a=r.refererInfo);var i,o=function(e){return{pageURL:e&&e.referer?e.referer:window.location.href,refURL:window.document.referrer}}(a),p=function(e){return{id:""+(new Date).getTime(),at:1,cur:[g],imp:[],site:{page:e.pageURL,ref:e.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:{},ext:{}}}(o),c="",l=[],m=[];if(e.forEach((function(e){if((i=t.deepClone(e)).params.adSlot=i.params.adSlot||"",q(i),i.params.hasOwnProperty("video"));else if(!(i.hasOwnProperty("mediaTypes")&&i.mediaTypes.hasOwnProperty(n.c)||0!==i.params.width||0!==i.params.height))return void t.logWarn("PubMatic: Skipping the non-standard adslot: ",i.params.adSlot,JSON.stringify(i));o.pubId=o.pubId||i.params.publisherId,(o=function(e,r){var a,i,n;for(a in r.kadpageurl||(r.kadpageurl=r.pageURL),f)f.hasOwnProperty(a)&&(i=e[a])&&("object"===u(n=f[a])&&(i=n.f(i,r)),t.isStr(i)?r[a]=i:t.logWarn("PubMatic: Ignoring param : "+a+" with value : "+f[a]+", expects string-value, found "+u(i)));return r}(i.params,o)).transactionId=i.transactionId,""===c?c=i.params.currency||b:i.params.hasOwnProperty("currency")&&c!==i.params.currency&&t.logWarn("PubMatic: Currency specifier ignored. Only one currency permitted."),i.params.currency=c,i.params.hasOwnProperty("dctr")&&t.isStr(i.params.dctr)&&l.push(i.params.dctr),i.params.hasOwnProperty("bcat")&&t.isArray(i.params.bcat)&&(m=m.concat(i.params.bcat));var r=B(i);r&&p.imp.push(r)})),0!=p.imp.length){var h,y;p.site.publisher.id=o.pubId.trim(),C=o.pubId.trim(),p.ext.wrapper={},p.ext.wrapper.profile=parseInt(o.profId)||b,p.ext.wrapper.version=parseInt(o.verId)||b,p.ext.wrapper.wiid=o.wiid||r.auctionId,p.ext.wrapper.wv="prebid_prebid_5.8.0",p.ext.wrapper.transactionId=o.transactionId,p.ext.wrapper.wp="pbjs",p.user.gender=o.gender?o.gender.trim():b,p.user.geo={},p.user.geo.lat=U("lat",o.lat),p.user.geo.lon=U("lon",o.lon),p.user.yob=U("yob",o.yob),p.device.geo=p.user.geo,p.site.page=o.kadpageurl.trim()||p.site.page.trim(),p.site.domain=(h=p.site.page,(y=document.createElement("a")).href=h,y.hostname),"object"===u(s.b.getConfig("content"))&&(p.site.content=s.b.getConfig("content")),"object"===u(s.b.getConfig("device"))&&(p.device=d(p.device,s.b.getConfig("device"))),t.deepSetValue(p,"source.tid",o.transactionId),-1!==window.location.href.indexOf("pubmaticTest=true")&&(p.test=1),e[0].schain&&t.deepSetValue(p,"source.ext.schain",e[0].schain),r&&r.gdprConsent&&(t.deepSetValue(p,"user.ext.consent",r.gdprConsent.consentString),t.deepSetValue(p,"regs.ext.gdpr",r.gdprConsent.gdprApplies?1:0)),r&&r.uspConsent&&t.deepSetValue(p,"regs.ext.us_privacy",r.uspConsent),!0===s.b.getConfig("coppa")&&t.deepSetValue(p,"regs.coppa",1),function(e,r){var a=t.deepAccess(r,"0.userIdAsEids"),i=V(r,x);i&&(a||(a=[]),a.push(i)),t.isArray(a)&&a.length>0&&t.deepSetValue(e,"user.eids",a)}(p,e),function(e,r){(r=r.filter((function(e){return"string"==typeof e||(t.logWarn("PubMatic: bcat: Each category should be a string, ignoring category: "+e),!1)})).map((function(e){return e.trim()})).filter((function(e,r,a){if(e.length>3)return a.indexOf(e)===r;t.logWarn("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: "+e)}))).length>0&&(t.logWarn("PubMatic: bcat: Selected: ",r),e.bcat=r)}(p,m),function(e,r){var a=V(r,R);a&&(e.user||(e.user={}),e.user.data||(e.user.data=[]),e.user.data.push(a))}(p,e);var v=s.b.getConfig("ortb2")||{};return v.site&&t.mergeDeep(p,{site:v.site}),v.user&&t.mergeDeep(p,{user:v.user}),"object"===u(s.b.getConfig("app"))&&(p.app=s.b.getConfig("app"),p.app.publisher=p.site.publisher,p.app.ext=p.site.ext||b,"object"!==u(p.app.content)&&(p.app.content=p.site.content||b),delete p.site),{method:"POST",url:"https://hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(p),bidderRequest:r}}},interpretResponse:function(e,r){var a=[],i=g,s=JSON.parse(r.data),o=s.site&&s.site.ref?s.site.ref:"";try{e.body&&e.body.seatbid&&t.isArray(e.body.seatbid)&&(i=e.body.cur||i,e.body.seatbid.forEach((function(e){e.bid&&t.isArray(e.bid)&&e.bid.forEach((function(d){var p={requestId:d.impid,cpm:(parseFloat(d.price)||0).toFixed(2),width:d.w,height:d.h,creativeId:d.crid||d.id,dealId:d.dealid,currency:i,netRevenue:true,ttl:300,referrer:o,ad:d.adm,pm_seat:e.seat||null,pm_dspid:d.ext&&d.ext.dspid?d.ext.dspid:null,partnerImpId:d.id||""};s.imp&&s.imp.length>0&&s.imp.forEach((function(e){if(d.impid===e.id)switch(function(e,r){if(e.ext&&null!=e.ext.BidType)r.mediaType=A[e.ext.BidType];else{t.logInfo("PubMatic: bid.ext.BidType does not exist, checking alternatively for mediaType");var a=e.adm,i="",s=new RegExp(/VAST\s+version/);if(a.indexOf('span class="PubAPIAd"')>=0)r.mediaType=n.b;else if(s.test(a))r.mediaType=n.d;else try{(i=JSON.parse(a.replace(/\\/g,"")))&&i.native&&(r.mediaType=n.c)}catch(e){t.logWarn("PubMatic: Error: Cannot parse native reponse for ad response: "+a)}}}(d,p),p.mediaType){case n.b:break;case n.d:p.width=d.hasOwnProperty("w")?d.w:e.video.w,p.height=d.hasOwnProperty("h")?d.h:e.video.h,p.vastXml=d.adm,function(e,r){var a,t,i;if(r.bidderRequest&&r.bidderRequest.bids){for(var s=0;s<r.bidderRequest.bids.length;s++)r.bidderRequest.bids[s].bidId===e.requestId&&(a=r.bidderRequest.bids[s].params,t=r.bidderRequest.bids[s].mediaTypes[n.d].context,i=r.bidderRequest.bids[s].adUnitCode);t&&"outstream"===t&&a&&a.outstreamAU&&i&&(e.rendererCode=a.outstreamAU,e.renderer=k.newRenderer(e.rendererCode,i))}}(p,r);break;case n.c:!function(e,r){if(r.native={},e.hasOwnProperty("adm")){var a="";try{a=JSON.parse(e.adm.replace(/\\/g,""))}catch(e){return void t.logWarn("PubMatic: Error: Cannot parse native reponse for ad response: "+r.adm)}if(a&&a.native&&a.native.assets&&a.native.assets.length>0){r.mediaType=n.c;for(var i=0,s=a.native.assets.length;i<s;i++)switch(a.native.assets[i].id){case P.TITLE.ID:r.native.title=a.native.assets[i].title&&a.native.assets[i].title.text;break;case P.IMAGE.ID:r.native.image={url:a.native.assets[i].img&&a.native.assets[i].img.url,height:a.native.assets[i].img&&a.native.assets[i].img.h,width:a.native.assets[i].img&&a.native.assets[i].img.w};break;case P.ICON.ID:r.native.icon={url:a.native.assets[i].img&&a.native.assets[i].img.url,height:a.native.assets[i].img&&a.native.assets[i].img.h,width:a.native.assets[i].img&&a.native.assets[i].img.w};break;case P.SPONSOREDBY.ID:case P.BODY.ID:case P.LIKES.ID:case P.DOWNLOADS.ID:case P.PRICE:case P.SALEPRICE.ID:case P.PHONE.ID:case P.ADDRESS.ID:case P.DESC2.ID:case P.CTA.ID:case P.RATING.ID:case P.DISPLAYURL.ID:r.native[K[a.native.assets[i].id]]=a.native.assets[i].data&&a.native.assets[i].data.value}r.native.clickUrl=a.native.link&&a.native.link.url,r.native.clickTrackers=a.native.link&&a.native.link.clicktrackers||[],r.native.impressionTrackers=a.native.imptrackers||[],r.native.jstracker=a.native.jstracker||[],r.width||(r.width=0),r.height||(r.height=0)}}}(d,p)}})),d.ext&&d.ext.deal_channel&&(p.dealChannel=Y[d.ext.deal_channel]||null),p.meta={},d.ext&&d.ext.dspid&&(p.meta.networkId=d.ext.dspid),d.ext&&d.ext.advid&&(p.meta.buyerId=d.ext.advid),d.adomain&&d.adomain.length>0&&(p.meta.advertiserDomains=d.adomain,p.meta.clickUrl=d.adomain[0]),e.ext&&e.ext.buyid&&(p.adserverTargeting={hb_buyid_pubmatic:e.ext.buyid}),a.push(p)}))})))}catch(e){t.logError(e)}return a},getUserSyncs:function(e,r,a,t){var i=""+C;return a&&(i+="&gdpr="+(a.gdprApplies?1:0),i+="&gdpr_consent="+encodeURIComponent(a.consentString||"")),t&&(i+="&us_privacy="+encodeURIComponent(t)),!0===s.b.getConfig("coppa")&&(i+="&coppa=1"),e.iframeEnabled?[{type:"iframe",url:"https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p="+i}]:[{type:"image",url:"https://image8.pubmatic.com/AdServer/ImgSync?p="+i}]},transformBidParams:function(e,r){return t.convertTypes({publisherId:"string",adSlot:"string"},e)}};Object(i.registerBidder)(F)}},[622]);
/* PulsePoint           */ pbjsChunk([140],{638:function(e,r,t){e.exports=t(639)},639:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return m}));var n=t(0),i=t(1),a=t(13);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=100,u=200,o=50,c=150,p=50,l="USD",f=["cp","ct","cf","video","battr","bcat","badv","bidfloor"],m={code:"pulsepoint",gvlid:81,aliases:["pulseLite","pulsepointLite"],supportedMediaTypes:["banner","native","video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.cp&&e.params.ct)},buildRequests:function(e,r){return{method:"POST",url:"https://bid.contextweb.com/header/ortb?src=prebid",data:{id:e[0].bidderRequestId,imp:e.map((function(e){return function(e){return{id:e.bidId,banner:v(e),native:h(e),tagid:e.params.ct.toString(),video:b(e),bidfloor:k(e),ext:g(e)}}(e)})),site:O(e,r),app:T(e),device:{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:e[0].params.bcat,badv:e[0].params.badv,user:x(e[0],r),regs:C(r),source:P(e[0].schain)},bidderRequest:r}},interpretResponse:function(e,r){return function(e,r){var t={},i={},d={},s=r.body;e.data.imp.forEach((function(e){t[e.id]=e})),s&&s.seatbid.forEach((function(e){return e.bid.forEach((function(e){i[e.impid]=e}))}));e.bidderRequest&&e.bidderRequest.bids&&e.bidderRequest.bids.forEach((function(e){d[e.bidId]=e}));var u=[];return Object.keys(t).forEach((function(e){if(i[e]){var r={requestId:e,cpm:i[e].price,creative_id:i[e].crid,creativeId:i[e].crid,adId:e,ttl:i[e].exp||20,netRevenue:true,currency:s.cur||l,meta:{advertiserDomains:i[e].adomain||[]}};t[e].video?(d[e]&&"outstream"===n.deepAccess(d[e],"mediaTypes.video.context")&&(r.renderer=(o=n.deepAccess(d[e],"renderer.options"),c=n.deepAccess(i[e],"ext.outstream"),(p=a.a.install({url:c.rendererUrl,config:{defaultOptions:c.config,rendererOptions:o,type:c.type},loaded:!1})).setRender((function(e){e.renderer.push((function(){var r=e.renderer.getConfig();(new window.PulsePointOutstreamRenderer).render({adUnitCode:e.adUnitCode,vastXml:e.vastXml,type:r.type,defaultOptions:r.defaultOptions,rendererOptions:o})}))})),p)),r.vastXml=i[e].adm,r.mediaType="video",r.width=i[e].w,r.height=i[e].h):t[e].banner?(r.ad=i[e].adm,r.width=i[e].w||t[e].banner.w,r.height=i[e].h||t[e].banner.h):t[e].native&&(r.native=function(e,r){if(e.native){var t=function(e){try{if(e)return JSON.parse(e)}catch(e){n.logError("pulsepointLite.safeParse","ERROR",e)}return null}(r.adm),i={};if(t&&t.native&&t.native.assets)return t.native.assets.forEach((function(e){i.title=e.title?e.title.text:i.title,i.body=e.data&&2===e.data.type?e.data.value:i.body,i.sponsoredBy=e.data&&1===e.data.type?e.data.value:i.sponsoredBy,i.image=e.img&&3===e.img.type?e.img.url:i.image,i.icon=e.img&&1===e.img.type?e.img.url:i.icon})),t.native.link&&(i.clickUrl=encodeURIComponent(t.native.link.url)),i.impressionTrackers=t.native.imptrackers,i}return null}(t[e],i[e]),r.mediaType="native"),u.push(r)}var o,c,p})),u}(r,e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://bh.contextweb.com/visitormatch"}]:e.pixelEnabled?[{type:"image",url:"https://bh.contextweb.com/visitormatch/prebid"}]:void 0},transformBidParams:function(e,r){return n.convertTypes({cf:"string",cp:"number",ct:"number"},e)}};function v(e){var r=function(e){var r=n.deepAccess(e,"mediaTypes.banner.sizes");if(r&&n.isArray(r))return r.filter((function(e){return n.isArray(e)&&2===e.length})).map((function(e){return{w:e[0],h:e[1]}}));return null}(e),t=function(e,r){if(e.params.cf){var t=e.params.cf.toUpperCase().split("X");return[parseInt(e.params.cw||t[0],10),parseInt(e.params.ch||t[1],10)]}if(r&&r.length>0)return[r[0].w,r[0].h];return[1,1]}(e,r);return e.mediaTypes&&e.mediaTypes.banner?{w:t[0],h:t[1],battr:e.params.battr,format:r}:null}function b(e){return e.params.video?d({},e.params.video,e.mediaTypes&&e.mediaTypes.video?e.mediaTypes.video:{},{battr:e.params.battr}):null}function g(e){var r={},t={};return f.forEach((function(e){return t[e]=1})),Object.keys(e.params).forEach((function(n){t[n]||(r[n]=e.params[n])})),Object.keys(r).length>0?{prebid:r}:null}function h(e){if(e.nativeParams){var r=[];return y(r,function(e,r,t){if(r)return{id:e,required:r.required?1:0,title:{len:r.len||t}};return null}(r.length+1,e.nativeParams.title,s)),y(r,w(r.length+1,e.nativeParams.body,2,u)),y(r,w(r.length+1,e.nativeParams.sponsoredBy,1,o)),y(r,I(r.length+1,e.nativeParams.icon,1,p,p)),y(r,I(r.length+1,e.nativeParams.image,3,c,c)),{request:JSON.stringify({assets:r}),ver:"1.1",battr:e.params.battr}}return null}function y(e,r){r&&e.push(r)}function I(e,r,t,n,i){return r?{id:e,required:r.required?1:0,img:{type:t,wmin:r.wmin||n,hmin:r.hmin||i}}:null}function w(e,r,t,n){return r?{id:e,required:r.required?1:0,data:{type:t,len:r.len||n}}:null}function O(e,r){var t=e&&e.length>0?e[0].params.cp:"0";return e[0].params.app?null:{publisher:{id:t.toString()},ref:q(),page:r&&r.refererInfo?r.refererInfo.referer:""}}function T(e){var r=e&&e.length>0?e[0].params.cp:"0",t=e[0].params.app;return t?{publisher:{id:r.toString()},bundle:t.bundle,storeurl:t.storeUrl,domain:t.domain}:null}function q(){try{return window.top.document.referrer}catch(e){return document.referrer}}function x(e,r){var t={};if(r&&r.gdprConsent&&(t.consent=r.gdprConsent.consentString),e&&e.userId){t.eids=[],R(t.eids,e.userId.pubcid,"pubcommon"),R(t.eids,e.userId.britepoolid,"britepool.com"),R(t.eids,e.userId.criteoId,"criteo"),R(t.eids,e.userId.idl_env,"identityLink"),R(t.eids,n.deepAccess(e,"userId.id5id.uid"),"id5-sync.com",n.deepAccess(e,"userId.id5id.ext")),R(t.eids,n.deepAccess(e,"userId.parrableId.eid"),"parrable.com"),e.userId.lipb&&e.userId.lipb.lipbid&&R(t.eids,e.userId.lipb.lipbid,"liveintent.com"),R(t.eids,e.userId.tdid,"adserver.org",{rtiPartner:"TDID"});var i=e.userId.digitrustid;if(i&&i.data){var a={};i.data.id&&(a.id=i.data.id),i.data.keyv&&(a.keyv=i.data.keyv),t.digitrust=a}}return{ext:t}}function R(e,r,t,n){if(r){var i={id:r};n&&(i.ext=n),e.push({source:t,uids:[i]})}}function C(e){if(e.gdprConsent||e.uspConsent){var r={};return e.gdprConsent&&(r.gdpr=e.gdprConsent.gdprApplies?1:0),e.uspConsent&&(r.us_privacy=e.uspConsent),{ext:r}}return null}function P(e){return e?{ext:{schain:e}}:null}function k(e){var r=e.params.bidfloor;if(n.isFn(e.getFloor)){var t=e.getFloor({mediaType:e.mediaTypes.banner?"banner":e.mediaTypes.video?"video":"Native",size:"*",currency:l});t&&t.floor&&(r=t.floor)}return r}Object(i.registerBidder)(m)}},[638]);
/* RtdModule            */ pbjsChunk([123],{680:function(n,t,e){n.exports=e(681)},681:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"subModules",(function(){return m})),t.attachRealTimeDataProvider=b,t.init=T,t.setBidRequestsData=N,t.getAdUnitTargeting=O,t.deepMerge=S;var o=e(3),r=e(10),a=e(0),i=e(9),u=e.n(i),f=e(5),c=e.n(f),s=e(8),g=e(11),l=e.n(g),p=e(16);function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function v(){return(v=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var E,h,y=[],m=[],D=[];function b(n){y.push(n)}function T(n){var t=n.getConfig("realTimeData",(function(n){var e=n.realTimeData;e.dataProviders?(t(),E=e,D=e.dataProviders,u.a.on(c.a.EVENTS.AUCTION_INIT,(function(n){m.forEach((function(t){t.onAuctionInitEvent&&t.onAuctionInitEvent(n,t.config,h)}))})),u.a.on(c.a.EVENTS.AUCTION_END,(function(n){O(n),m.forEach((function(t){t.onAuctionEndEvent&&t.onAuctionEndEvent(n,t.config,h)}))})),u.a.on(c.a.EVENTS.BID_RESPONSE,(function(n){m.forEach((function(t){t.onBidResponseEvent&&t.onBidResponseEvent(n,t.config,h)}))})),Object(p.a)().requestBids.before(N,40),function(){h=A();var n=[];D.forEach((function(t){var e=l()(y,(function(n){return n.name===t.name}));e&&e.init&&e.init(t,h)&&n.push(v(e,{config:t}))})),m=n}()):a.logError("missing parameters for real time module")}))}function A(){return{gdpr:s.gdprDataHandler.getConsentData(),usp:s.uspDataHandler.getConsentData(),coppa:!!o.b.getConfig("coppa")}}function N(n,t){h=A();var e=[],o=[];m.forEach((function(n){if("function"==typeof n.getBidRequestData){e.push(n);var t=n.config;t&&t.waitForIt&&o.push(n)}}));var r,a=o.length&&E.auctionDelay&&E.auctionDelay>0,i=o.length,u=!1;if(!e.length)return c();if(a&&(r=setTimeout(c,E.auctionDelay)),e.forEach((function(n){n.getBidRequestData(t,f.bind(n),n.config,h)})),!a)return c();function f(){if(!u)return this.config&&this.config.waitForIt&&i--,i<=0?c():void 0}function c(){u=!0,clearTimeout(r),n.call(this,t)}}function O(n){var t=m.filter((function(n){return"function"==typeof n.getTargetingData}));if(t.length){var e=n.adUnitCodes;if(e){for(var o=[],r=t.length-1;r>=0;r--){var i=t[r].getTargetingData(e,t[r].config,h);i&&"object"===d(i)?o.push(i):a.logWarn("invalid getTargetingData response for sub module",t[r].name)}var u=S(o);return n.adUnits.forEach((function(n){var t=n.code&&u[n.code];t&&(n[c.a.JSON_MAPPING.ADSERVER_TARGETING]=v(n[c.a.JSON_MAPPING.ADSERVER_TARGETING]||{},t))})),n.adUnits}}}function S(n){return Array.isArray(n)&&n.length?n.reduce((function(n,t){for(var e in t)if(t.hasOwnProperty(e))if(n.hasOwnProperty(e)){var o=t[e];for(var r in o)o.hasOwnProperty(r)&&(n[e][r]=o[r])}else n[e]=t[e];return n}),{}):{}}Object(r.c)("realTimeData",b),T(o.b)}},[680]);
/* Rubicon              */ pbjsChunk([122],{684:function(e,r,t){e.exports=t(685)},685:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return _})),r.hasVideoMediaType=O,t.d(r,"resetRubiConf",(function(){return k})),r.masSizeOrdering=R,r.determineRubiconVideoSizeId=z,r.getPriceGranularity=T,r.hasValidVideoParams=E,r.hasValidSupplyChainParams=U,r.encodeParam=P,r.resetUserSync=function(){N=!1};var n=t(0),i=t(1),o=t(3),a=t(2),s=t(11),c=t.n(s),d=t(13),u=t(16);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y="https://video-outstream.rubiconproject.com/apex-2.0.0.js",x={};o.b.getConfig("rubicon",(function(e){n.mergeDeep(x,e.rubicon)}));var h={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",548:"500x1000",550:"980x480",552:"300x200",558:"640x640"};n._each(h,(function(e,r){return h[e]=r}));var _={code:"rubicon",gvlid:52,supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){if("object"!==b(e.params))return!1;for(var r=0,t=["accountId","siteId","zoneId"];r<t.length;r++)if(e.params[t[r]]=parseInt(e.params[t[r]]),isNaN(e.params[t[r]]))return n.logError("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var i=w(e,!0);return!!i&&("video"!==i||E(e))},buildRequests:function(e,r){var t=[],i=e.filter((function(e){return"video"===w(e)})).map((function(e){e.startTime=(new Date).getTime();var t={id:e.transactionId,test:o.b.getConfig("debug")?1:0,cur:["USD"],source:{tid:e.transactionId},tmax:r.timeout,imp:[{exp:o.b.getConfig("s2sConfig.defaultTtl"),id:e.adUnitCode,secure:1,ext:v({},e.bidder,e.params),video:n.deepAccess(e,"mediaTypes.video")||{}}],ext:{prebid:{channel:{name:"pbjs",version:pbjs.version},cache:{vastxml:{returnCreative:!0===x.returnVast}},targeting:{includewinners:!0,includebidderkeys:!1,pricegranularity:T(o.b)},bidders:{rubicon:{integration:x.int_type||"pbjs"}}}}};"rubicon"!==e.bidder&&(t.ext.prebid.aliases=v({},e.bidder,"rubicon"));var i,s,c=Object(u.a)().installedModules;if(!c||c.length&&-1===c.indexOf("rubiconAnalyticsAdapter")||n.deepSetValue(t,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),"function"!=typeof e.getFloor||x.disableFloors)i=parseFloat(n.deepAccess(e,"params.floor"));else{var d;try{d=e.getFloor({currency:"USD",mediaType:"video",size:S(e,"video")})}catch(e){n.logError("Rubicon: getFloor threw an error: ",e)}i="object"!==b(d)||"USD"!==d.currency||isNaN(parseInt(d.floor))?void 0:parseFloat(d.floor)}(isNaN(i)||(t.imp[0].bidfloor=i),t.imp[0].ext[e.bidder].video.size_id=z(e),function(e,r,t){if(!e)return;"object"===b(o.b.getConfig("app"))?e.app=o.b.getConfig("app"):e.site={page:A(r,t)};"object"===b(o.b.getConfig("device"))&&(e.device=o.b.getConfig("device"));r.params.video.language&&["site","device"].forEach((function(t){e[t]&&(e[t].content=f({language:r.params.video.language},e[t].content))}))}(t,e,r),function(e,r){"object"===b(e.imp[0].video)&&void 0===e.imp[0].video.skip&&(e.imp[0].video.skip=r.params.video.skip);"object"===b(e.imp[0].video)&&void 0===e.imp[0].video.skipafter&&(e.imp[0].video.skipafter=r.params.video.skipdelay);"object"===b(e.imp[0].video)&&void 0===e.imp[0].video.pos&&("atf"===r.params.position?e.imp[0].video.pos=1:"btf"===r.params.position&&(e.imp[0].video.pos=3));var t=S(r,"video");e.imp[0].video.w=t[0],e.imp[0].video.h=t[1]}(t,e),r.gdprConsent)&&("boolean"==typeof r.gdprConsent.gdprApplies&&(s=r.gdprConsent.gdprApplies?1:0),n.deepSetValue(t,"regs.ext.gdpr",s),n.deepSetValue(t,"user.ext.consent",r.gdprConsent.consentString));r.uspConsent&&n.deepSetValue(t,"regs.ext.us_privacy",r.uspConsent);var p=n.deepAccess(r,"bids.0.userIdAsEids");p&&p.length&&n.deepSetValue(t,"user.ext.eids",p);var l=o.b.getConfig("user.id");l&&n.deepSetValue(t,"user.id",l),!0===o.b.getConfig("coppa")&&n.deepSetValue(t,"regs.coppa",1),e.schain&&U(e.schain)&&n.deepSetValue(t,"source.ext.schain",e.schain);var m=o.b.getConfig("multibid");return m&&n.deepSetValue(t,"ext.prebid.multibid",m.reduce((function(e,r){var t={};return Object.keys(r).forEach((function(e){t[e.toLowerCase()]=r[e]})),e.push(t),e}),[])),C(e,a.d,t),e.storedAuctionResponse&&n.deepSetValue(t.imp[0],"ext.prebid.storedauctionresponse.id",e.storedAuctionResponse.toString()),n.deepSetValue(t.imp[0],"ext.prebid.auctiontimestamp",r.auctionStart),{method:"POST",url:"https://".concat(x.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:t,bidRequest:e}}));if(!0!==x.singleRequest)t=i.concat(e.filter((function(e){return"banner"===w(e)})).map((function(e){var t=_.createSlotParams(e,r);return{method:"GET",url:"https://".concat(x.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:_.getOrderedParams(t).reduce((function(e,r){var i=t[r];return n.isStr(i)&&""!==i||n.isNumber(i)?"".concat(e).concat(P(r,i),"&"):e}),"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})));else{var s=e.filter((function(e){return"banner"===w(e)})).reduce((function(e,r){return(e[r.params.siteId]=e[r.params.siteId]||[]).push(r),e}),{});t=i.concat(Object.keys(s).reduce((function(e,t){var i,o;return(i=s[t],o=10,i.map((function(e,r){return r%o==0?i.slice(r,r+o):null})).filter((function(e){return e}))).forEach((function(t){var i=_.combineSlotUrlParams(t.map((function(e){return _.createSlotParams(e,r)})));e.push({method:"GET",url:"https://".concat(x.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:_.getOrderedParams(i).reduce((function(e,r){var t=i[r];return n.isStr(t)&&""!==t||n.isNumber(t)?"".concat(e).concat(P(r,t),"&"):e}),"")+"slots=".concat(t.length,"&rand=").concat(Math.random()),bidRequest:t})})),e}),[]))}return t},getOrderedParams:function(e){var r=/^tg_v/,t=/^tg_i/,n=/^eid_|^tpid_/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","rp_schain"].concat(Object.keys(e).filter((function(e){return n.test(e)}))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(["tk_flint","x_source.tid","x_source.pchain","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter((function(e){return-1===i.indexOf(e)})))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];var r=e.reduce((function(r,t,n){return Object.keys(t).forEach((function(i){r.hasOwnProperty(i)||(r[i]=new Array(e.length)),r[i].splice(n,1,t[i])})),r}),{}),t=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(r).forEach((function(e){var n=r[e].join(";"),i=n.match(t);r[e]=i?i[1]:n})),r},createSlotParams:function(e,r){e.startTime=(new Date).getTime();var t=e.params,i=S(e,"banner"),s=m(t.latLong||[],2),d=s[0],u=s[1],p={account_id:t.accountId,site_id:t.siteId,zone_id:t.zoneId,size_id:i[0],alt_size_ids:i.slice(1).join(",")||void 0,rp_floor:(t.floor=parseFloat(t.floor))>=.01?t.floor:void 0,rp_secure:"1",tk_flint:"".concat(x.int_type||"pbjs_lite","_v5.8.0"),"x_source.tid":e.transactionId,"x_source.pchain":t.pchain,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:t.userId,"p_geo.latitude":isNaN(parseFloat(d))?void 0:parseFloat(d).toFixed(4),"p_geo.longitude":isNaN(parseFloat(u))?void 0:parseFloat(u).toFixed(4),"tg_fl.eid":e.code,rf:A(e,r)};if("function"==typeof e.getFloor&&!x.disableFloors){var l;try{l=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){n.logError("Rubicon: getFloor threw an error: ",e)}p.rp_hard_floor="object"!==b(l)||"USD"!==l.currency||isNaN(parseInt(l.floor))?void 0:l.floor}var f={1:"atf",3:"btf"}[n.deepAccess(e,"mediaTypes.banner.pos")]||"";p.p_pos="atf"===t.position||"btf"===t.position?t.position:f;var g=o.b.getConfig("user.id");return g&&(p.ppuid=g),e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if("adserver.org"===e.source?(p.tpid_tdid=e.uids[0].id,p["eid_adserver.org"]=e.uids[0].id):"liveintent.com"===e.source?(p["tpid_liveintent.com"]=e.uids[0].id,p["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(p["tg_v.LIseg"]=e.ext.segments.join(","))):"liveramp.com"===e.source?p.x_liverampidl=e.uids[0].id:"id5-sync.com"===e.source?p["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||""):p["eid_".concat(e.source)]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype||""),!p.ppuid){var r=c()(e.uids,(function(e){return e.ext&&"ppuid"===e.ext.stype}));r&&r.id&&(p.ppuid=r.id)}}catch(r){n.logWarn("Rubicon: error reading eid:",e,r)}})),r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(p.gdpr=Number(r.gdprConsent.gdprApplies)),p.gdpr_consent=r.gdprConsent.consentString),r.uspConsent&&(p.us_privacy=encodeURIComponent(r.uspConsent)),p.rp_maxbids=r.bidLimit||1,C(e,a.b,p),!0===o.b.getConfig("coppa")&&(p.coppa=1),e.schain&&U(e.schain)&&(p.rp_schain=_.serializeSupplyChain(e.schain)),p},serializeSupplyChain:function(e){if(!U(e))return"";var r=e.ver,t=e.complete,n=e.nodes;return"".concat(r,",").concat(t,"!").concat(_.serializeSupplyChainNodes(n))},serializeSupplyChainNodes:function(e){var r=["asi","sid","hp","rid","name","domain"];return e.map((function(e){return r.map((function(r){return encodeURIComponent(e[r]||"")})).join(",")})).join("!")},interpretResponse:function(e,r){var t=r.bidRequest;if(!(e=e.body)||"object"!==b(e))return[];if(e.seatbid){var i=n.deepAccess(e,"ext.errors.rubicon");Array.isArray(i)&&i.length>0&&n.logWarn("Rubicon: Error in video response");var o=[];return e.seatbid.forEach((function(r){(r.bid||[]).forEach((function(i){var s={requestId:t.bidId,currency:e.cur||"USD",creativeId:i.crid,cpm:i.price||0,bidderCode:r.seat,ttl:300,netRevenue:!1!==x.netRevenue,width:i.w||n.deepAccess(t,"mediaTypes.video.w")||n.deepAccess(t,"params.video.playerWidth"),height:i.h||n.deepAccess(t,"mediaTypes.video.h")||n.deepAccess(t,"params.video.playerHeight")};i.id&&(s.seatBidId=i.id),i.dealid&&(s.dealId=i.dealid),i.adomain&&n.deepSetValue(s,"meta.advertiserDomains",Array.isArray(i.adomain)?i.adomain:[i.adomain]),n.deepAccess(i,"ext.bidder.rp.advid")&&n.deepSetValue(s,"meta.advertiserId",i.ext.bidder.rp.advid);var c=n.deepAccess(e,"ext.responsetimemillis.rubicon");if(t&&c&&(t.serverResponseTimeMs=c),n.deepAccess(i,"ext.prebid.type")===a.d){s.mediaType=a.d,n.deepSetValue(s,"meta.mediaType",a.d);var u=n.deepAccess(i,"ext.prebid.targeting");u&&"object"===b(u)&&(s.adserverTargeting=u),i.ext.prebid.cache&&"object"===b(i.ext.prebid.cache.vastXml)&&i.ext.prebid.cache.vastXml.cacheId&&i.ext.prebid.cache.vastXml.url?(s.videoCacheKey=i.ext.prebid.cache.vastXml.cacheId,s.vastUrl=i.ext.prebid.cache.vastXml.url):u&&u.hb_uuid&&u.hb_cache_host&&u.hb_cache_path&&(s.videoCacheKey=u.hb_uuid,s.vastUrl="https://".concat(u.hb_cache_host).concat(u.hb_cache_path,"?uuid=").concat(u.hb_uuid)),i.adm&&(s.vastXml=i.adm),i.nurl&&(s.vastUrl=i.nurl),!s.vastUrl&&i.nurl&&(s.vastUrl=i.nurl),"outstream"===n.deepAccess(t,"mediaTypes.video.context").toLowerCase()&&(s.renderer=function(e){var r=d.a.install({id:e.adId,url:x.rendererUrl||y,config:x.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{r.setRender(j)}catch(e){n.logWarn("Prebid Error calling setRender on renderer",e)}return r}(s))}else n.logWarn("Rubicon: video response received non-video media type");o.push(s)}))})),o}var s,c=e.ads,u=0;return"object"!==b(t)||Array.isArray(t)||"video"!==w(t)||"object"!==b(c)||(c=c[t.adUnitCode]),!Array.isArray(c)||c.length<1?[]:c.reduce((function(r,i,o){if(i.impression_id&&s===i.impression_id?u++:s=i.impression_id,"ok"!==i.status)return r;var c,d,p=Array.isArray(t)?t[o-u]:t;if(p&&"object"===b(p)){var l={requestId:p.bidId,currency:"USD",creativeId:i.creative_id||"".concat(i.network||"","-").concat(i.advertiser||""),cpm:i.cpm||0,dealId:i.deal,ttl:300,netRevenue:!1!==x.netRevenue,rubicon:{advertiserId:i.advertiser,networkId:i.network},meta:{advertiserId:i.advertiser,networkId:i.network,mediaType:a.b}};if(i.creative_type&&(l.mediaType=i.creative_type),i.adomain&&(l.meta.advertiserDomains=Array.isArray(i.adomain)?i.adomain:[i.adomain]),i.creative_type===a.d)l.width=p.params.video.playerWidth,l.height=p.params.video.playerHeight,l.vastUrl=i.creative_depot_url,l.impression_id=i.impression_id,l.videoCacheKey=i.impression_id;else{l.ad=(c=i.script,d=i.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(d,"'>\n<script type='text/javascript'>").concat(c,"<\/script>\n</div>\n</body>\n</html>"));var f=m(h[i.size_id].split("x").map((function(e){return Number(e)})),2);l.width=f[0],l.height=f[1]}l.rubiconTargeting=(Array.isArray(i.targeting)?i.targeting:[]).reduce((function(e,r){return e[r.key]=r.values[0],e}),{rpfl_elemid:p.adUnitCode}),r.push(l)}else n.logError("Rubicon: bidRequest undefined at index position:".concat(o),t,e);return r}),[]).sort((function(e,r){return(r.cpm||0)-(e.cpm||0)}))},getUserSyncs:function(e,r,t,n){if(!N&&e.iframeEnabled){var i="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?i+="?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):i+="?gdpr_consent=".concat(t.consentString)),n&&(i+="".concat(i?"&":"?","us_privacy=").concat(encodeURIComponent(n))),N=!0,{type:"iframe",url:"https://".concat(x.syncHost||"eus",".rubiconproject.com/usync.html")+i}}},transformBidParams:function(e,r){return n.convertTypes({accountId:"number",siteId:"number",zoneId:"number"},e)}};function A(e,r){var t=o.b.getConfig("pageUrl");return e.params.referrer?t=e.params.referrer:t||(t=r.refererInfo.referer),e.params.secure?t.replace(/^http:/i,"https:"):t}function j(e){var r,t=document.getElementById(e.adUnitCode);(r=t.querySelector("div[id^='google_ads']"))&&r.style.setProperty("display","none"),function(e){var r=e.querySelector("script[id^='sas_script']"),t=r&&r.nextSibling;t&&"iframe"===t.localName&&t.style.setProperty("display","none")}(t);var n=e.renderer.getConfig();e.renderer.push((function(){window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:"#".concat(e.adUnitCode),align:n.align||"center",position:n.position||"append"},closeButton:n.closeButton||!1,label:n.label||void 0,collapse:n.collapse||!0})}))}function S(e,r){var t=e.params;if("video"===r){var i=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?i=[t.video.playerWidth,t.video.playerHeight]:Array.isArray(n.deepAccess(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?i=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(i=e.sizes[0]),i}var o=[];return Array.isArray(t.sizes)?o=t.sizes:void 0!==n.deepAccess(e,"mediaTypes.banner.sizes")?o=I(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?o=I(e.sizes):n.logWarn("Rubicon: no sizes are setup or found"),R(o)}function C(e,r,t){var i={user:{ext:{data:l({},e.params.visitor)}},site:{ext:{data:l({},e.params.inventory)}}};e.params.keywords&&(i.site.keywords=n.isArray(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);var s=n.mergeDeep({},o.b.getConfig("ortb2")||{},i),c=n.deepAccess(e.ortb2Imp,"ext.data")||{},d={user:[4],site:[1,2,5,6]},u={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},p=function(e,r,t){if("data"===r&&Array.isArray(e))return e.filter((function(e){return e.segment&&n.deepAccess(e,"ext.segtax")&&d[t]&&-1!==d[t].indexOf(n.deepAccess(e,"ext.segtax"))})).map((function(e){var r=e.segment.filter((function(e){return e.id})).reduce((function(e,r){return e.push(r.id),e}),[]);if(r.length>0)return r.toString()})).toString();if("object"!==b(e)||Array.isArray(e)){if(void 0!==e)return Array.isArray(e)?e.filter((function(e){if("object"!==b(e)&&void 0!==e)return e.toString();n.logWarn("Rubicon: Filtered value: ",e,"for key",r,": Expected value to be string, integer, or an array of strings/ints")})).toString():e.toString()}else n.logWarn("Rubicon: Filtered FPD key: ",r,": Expected value to be string, integer, or an array of strings/ints")},f=function(e,r,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=p(e,n,r),a=u[n]&&i?"".concat(u[n]):"data"===n?"".concat(u[r],"iab"):"".concat(u[r]).concat(n);t[a]=t[a]?t[a].concat(",",o):o};Object.keys(c).forEach((function(e){"adserver"===e?["name","adslot"].forEach((function(r){c[e][r]&&(c[e][r]=c[e][r].toString().replace(/^\/+/,""))})):"pbadslot"===e&&(c[e]=c[e].toString().replace(/^\/+/,""))})),r===a.b?(["site","user"].forEach((function(e){Object.keys(s[e]).forEach((function(r){"site"===e&&"content"===r&&s[e][r].data?f(s[e][r].data,e,"data"):"ext"!==r?f(s[e][r],e,r):s[e][r].data&&Object.keys(s[e].ext.data).forEach((function(r){f(s[e].ext.data[r],e,r,!1)}))}))})),Object.keys(c).forEach((function(e){"adserver"===e?f(c[e].adslot,name,e):f(c[e],"site",e)}))):(Object.keys(c).length&&n.mergeDeep(t.imp[0].ext,{data:c}),n.mergeDeep(t,s))}function I(e){return n.parseSizesInput(e).reduce((function(e,r){var t=parseInt(h[r],10);return t&&e.push(t),e}),[])}function O(e){return"object"===b(n.deepAccess(e,"params.video"))&&void 0!==n.deepAccess(e,"mediaTypes.".concat(a.d))}function w(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return O(e)?-1===["outstream","instream"].indexOf(n.deepAccess(e,"mediaTypes.".concat(a.d,".context")))?void(r&&n.logError("Rubicon: mediaTypes.video.context must be outstream or instream")):S(e,"video").length<2?void(r&&n.logError("Rubicon: could not determine the playerSize of the video")):(r&&n.logMessage("Rubicon: making video request for adUnit",e.adUnitCode),"video"):0===S(e,"banner").length?void(r&&n.logError("Rubicon: could not determine the sizes for banner request")):(r&&n.logMessage("Rubicon: making banner request for adUnit",e.adUnitCode),"banner")}var k=function(){return x={}};function R(e){var r=[15,2,9];return e.sort((function(e,t){var n=r.indexOf(e),i=r.indexOf(t);return n>-1||i>-1?-1===n?1:-1===i?-1:n-i:e-t}))}function z(e){var r=parseInt(n.deepAccess(e,"params.video.size_id"));return isNaN(r)?"outstream"===n.deepAccess(e,"mediaTypes.".concat(a.d,".context"))?203:201:r}function T(e){return{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:e.getConfig("customPriceBucket")&&e.getConfig("customPriceBucket").buckets}[e.getConfig("priceGranularity")]}}function E(e){var r=!0,t=Object.prototype.toString.call([]),i={mimes:t,protocols:t,linearity:Object.prototype.toString.call(0),api:t};return Object.keys(i).forEach((function(t){Object.prototype.toString.call(n.deepAccess(e,"mediaTypes.video."+t))!==i[t]&&(r=!1,n.logError("Rubicon: mediaTypes.video."+t+" is required and must be of type: "+i[t]))})),r}function U(e){var r=!1,t=["asi","sid","hp"];return e.nodes?((r=e.nodes.reduce((function(e,r){return e?t.every((function(e){return r.hasOwnProperty(e)})):e}),!0))||n.logError("Rubicon: required schain params missing"),r):r}function P(e,r){return"rp_schain"===e?"rp_schain=".concat(r):"".concat(e,"=").concat(encodeURIComponent(r))}var N=!1;Object(i.registerBidder)(_)}},[684]);
/* Teads                */ pbjsChunk([100],{748:function(e,r,t){e.exports=t(749)},749:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"storage",(function(){return v})),t.d(r,"spec",(function(){return l}));var n=t(1),i=t(7),a=t(0);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c="teads",p=12,u=11,f=0,g=22,y="_tfpvi",v=Object(i.b)(132,c),l={code:c,gvlid:132,supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){var r=!1;if(void 0!==e.params){var t=h(a.getValue(e.params,"placementId")),n=h(a.getValue(e.params,"pageId"));r=t&&n}return r||a.logError("Teads placementId and pageId parameters are required. Bid aborted."),r},buildRequests:function(e,r){var t,n,i=e.map(I),o=s(s(s({referrer:m(r),pageReferrer:document.referrer,networkBandwidth:(n=window.navigator,n&&n.connection&&n.connection.downlink>=0?n.connection.downlink.toString():""),timeToFirstByte:b(window),data:i,deviceWidth:screen.width,hb_version:"5.8.0"},function(e){if(!e)return{};var r=e.id?{cohortId:e.id}:{},t=e.version?{cohortVersion:e.version}:{};return s(s({},r),t)}(a.deepAccess(e,"0.userId.flocId"))),(t=a.deepAccess(e,"0.userId.uid2"))?{unifiedId2:t.id}:{}),function(){if(!v.cookiesAreEnabled())return{};var e=v.getCookie(y);return e?{firstPartyCookieTeadsId:e}:{}}());e[0].schain&&(o.schain=e[0].schain);var d=r.gdprConsent;if(r&&d){var c="boolean"==typeof d.gdprApplies,l="string"==typeof d.consentString,h=c?function(e,r,t){var n=p;e?function(e,r){return e&&1===r?e.hasGlobalScope||e.hasGlobalConsent:!(!e||2!==r)&&!e.isServiceSpecific}(r,t)&&(n=u):n=f;return n}(d.gdprApplies,d.vendorData,d.apiVersion):g;o.gdpr_iab={consent:l?d.consentString:"",status:h,apiVersion:d.apiVersion}}return r&&r.uspConsent&&(o.us_privacy=r.uspConsent),{method:"POST",url:"https://a.teads.tv/hb/bid-request",data:JSON.stringify(o)}},interpretResponse:function(e,r){var t=[];return(e=e.body).responses&&e.responses.forEach((function(e){var r={cpm:e.cpm,width:e.width,height:e.height,currency:e.currency,netRevenue:!0,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},ad:e.ad,requestId:e.bidId,creativeId:e.creativeId,placementId:e.placementId};e.dealId&&(r.dealId=e.dealId),t.push(r)})),t}};function m(e){var r="";return e&&e.refererInfo&&e.refererInfo.referer&&(r=e.refererInfo.referer),r}function b(e){var r=e.performance||e.webkitPerformance||e.msPerformance||e.mozPerformance,t=r&&"function"==typeof r.getEntriesByType&&"[object Function]"===Object.prototype.toString.call(r.getEntriesByType)&&r.getEntriesByType("navigation")[0]&&r.getEntriesByType("navigation")[0].responseStart&&r.getEntriesByType("navigation")[0].requestStart&&r.getEntriesByType("navigation")[0].responseStart>0&&r.getEntriesByType("navigation")[0].requestStart>0&&Math.round(r.getEntriesByType("navigation")[0].responseStart-r.getEntriesByType("navigation")[0].requestStart);if(t)return t.toString();var n=r&&r.timing.responseStart&&r.timing.requestStart&&r.timing.responseStart>0&&r.timing.requestStart>0&&r.timing.responseStart-r.timing.requestStart;return n?n.toString():""}function I(e){var r={},t=a.getValue(e.params,"placementId"),n=a.getValue(e.params,"pageId");return r.sizes=function(e){return a.parseSizesInput(function(e){var r=a.deepAccess(e,"mediaTypes.video.playerSize"),t=a.deepAccess(e,"mediaTypes.video.sizes"),n=a.deepAccess(e,"mediaTypes.banner.sizes");return a.isArray(n)||a.isArray(r)||a.isArray(t)?[n,t,r].reduce((function(e,r){return a.isArray(r)&&(a.isArray(r[0])?r.forEach((function(r){e.push(r)})):e.push(r)),e}),[]):e.sizes}(e))}(e),r.bidId=a.getBidIdParameter("bidId",e),r.bidderRequestId=a.getBidIdParameter("bidderRequestId",e),r.placementId=parseInt(t,10),r.pageId=parseInt(n,10),r.adUnitCode=a.getBidIdParameter("adUnitCode",e),r.auctionId=a.getBidIdParameter("auctionId",e),r.transactionId=a.getBidIdParameter("transactionId",e),r}function h(e){return parseInt(e)>0}Object(n.registerBidder)(l)}},[748]);
/* TripleLift           */ pbjsChunk([94],{762:function(e,r,t){e.exports=t(763)},763:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"tripleliftAdapterSpec",(function(){return b}));var n=t(2),i=t(1),o=t(0),u=t(3);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y=!0,m=null,b={gvlid:28,code:"triplelift",supportedMediaTypes:[n.b,n.d],isBidRequestValid:function(e){return void 0!==e.params.inventoryCode},buildRequests:function(e,r){var t="https://tlx.3lift.com/header/auction?",n=function(e){var r={},t=e[0].schain,n=function(){var e={},r={},t={},n=u.b.getLegacyFpd(u.b.getConfig("ortb2"))||{},i=a({},n.context),p=a({},n.user);S(r,i),S(t,p),o.isEmpty(r)||(e.context=r);o.isEmpty(t)||(e.user=t);return e}();r.imp=e.map((function(e,r){var t={id:r,tagid:e.params.inventoryCode,floor:v(e)};return g(e)?t.video=function(e){var r=d(d({},e.params.video),e.mediaTypes.video);r.w||(r.w=r.playerSize[0][0]);r.h||(r.h=r.playerSize[0][1]);"instream"===r.context&&(r.placement=1);return delete r.playerSize,r}(e):e.mediaTypes.banner&&(t.banner={format:O(e.sizes)}),o.isEmpty(e.ortb2Imp)||(t.fpd=function(e){var r={},t={};S(t,e.ext),o.isEmpty(t)||(r.context=t);return r}(e.ortb2Imp)),t}));var i=[].concat(f((p=[e[0]],h(p,"tdid","adserver.org","TDID"))),f(function(e){return h(e,"idl_env","liveramp.com","idl")}([e[0]])),f(function(e){return h(e,"criteoId","criteo.com","criteoId")}([e[0]])),f(function(e){return h(e,"pubcid","pubcid.org","pubcid")}([e[0]])));var p;i.length>0&&(r.user={ext:{eids:i}});var c=function(e,r){var t={};o.isEmpty(e)||(t.schain=d({},e));o.isEmpty(r)||(t.fpd=d({},r));return t}(t,n);o.isEmpty(c)||(r.ext=c);return r}(e);if(t=o.tryAppendQueryString(t,"lib","prebid"),t=o.tryAppendQueryString(t,"v","5.8.0"),r&&r.refererInfo){var i=r.refererInfo.referer;t=o.tryAppendQueryString(t,"referrer",i)}return r&&r.timeout&&(t=o.tryAppendQueryString(t,"tmax",r.timeout)),r&&r.gdprConsent&&(void 0!==r.gdprConsent.gdprApplies&&(y=r.gdprConsent.gdprApplies,t=o.tryAppendQueryString(t,"gdpr",y.toString())),void 0!==r.gdprConsent.consentString&&(m=r.gdprConsent.consentString,t=o.tryAppendQueryString(t,"cmp_cs",m))),r&&r.uspConsent&&(t=o.tryAppendQueryString(t,"us_privacy",r.uspConsent)),!0===u.b.getConfig("coppa")&&(t=o.tryAppendQueryString(t,"coppa",!0)),t.lastIndexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),o.logMessage("tlCall request built: "+t),{method:"POST",url:t,data:n,bidderRequest:r}},interpretResponse:function(e,r){var t=r.bidderRequest;return(e.body.bids||[]).map((function(e){return function(e,r){var t={},n=r.width||1,i=r.height||1,o=r.deal_id||"",u=r.crid||"",a=e.bids[r.imp_id];0!=r.cpm&&r.ad&&(t={requestId:a.bidId,cpm:r.cpm,width:n,height:i,netRevenue:!0,ad:r.ad,creativeId:u,dealId:o,currency:"USD",ttl:300,tl_source:r.tl_source,meta:{}},g(a)&&(t.vastXml=r.ad,t.mediaType="video"),r.advertiser_name&&(t.meta.advertiserName=r.advertiser_name),r.adomain&&r.adomain.length&&(t.meta.advertiserDomains=r.adomain),r.tl_source&&"hdx"==r.tl_source&&(t.meta.mediaType="banner"),r.tl_source&&"tlx"==r.tl_source&&(t.meta.mediaType="native"));return t}(t,e)}))},getUserSyncs:function(e,r,t,n){var i=function(e){if(!e)return;if(e.iframeEnabled)return"iframe";if(e.pixelEnabled)return"image"}(e);if(i){var u="https://eb2.3lift.com/sync?";return"image"===i&&(u=o.tryAppendQueryString(u,"px",1),u=o.tryAppendQueryString(u,"src","prebid")),null!==m&&(u=o.tryAppendQueryString(u,"gdpr",y),u=o.tryAppendQueryString(u,"cmp_cs",m)),n&&(u=o.tryAppendQueryString(u,"us_privacy",n)),[{type:i,url:u}]}}};function g(e){return!!e.mediaTypes.video&&(!!e.mediaTypes.video.context&&"instream"===e.mediaTypes.video.context.toLowerCase())}function v(e){var r=null;if("function"==typeof e.getFloor){var t=e.getFloor({currency:"USD",mediaType:g(e)?"video":"banner",size:"*"});"object"!==p(t)||"USD"!==t.currency||isNaN(parseFloat(t.floor))||(r=parseFloat(t.floor))}return null!==r?r:e.params.floor}function S(e,r){o.isEmpty(r)||Object.keys(r).forEach((function(t){null!=r[t]&&(e[t]=r[t])}))}function h(e,r,t,n){return e.map(function(e){return function(r){return r&&r.userId&&r.userId[e]}}(r)).filter((function(e){return!!e})).map(function(e,r){return function(t){return{source:e,uids:[{id:t,ext:{rtiPartner:r}}]}}}(t,n))}function O(e){return e.filter(A).map((function(e){return{w:e[0],h:e[1]}}))}function A(e){return 2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}Object(i.registerBidder)(b)}},[762]);
/* Yieldmo              */ pbjsChunk([66],{825:function(e,r,t){e.exports=t(826)},826:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return w}));var n=t(0),i=t(2),o=t(1),a=t(13),c=t(12),d=t.n(c),u=t(11),s=t.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f="USD",m=300,l=!0,v="https://ads.yieldmo.com/exchange/prebid",y="https://prebid-outstream.yieldmo.com/bundle.js",g=["mimes","startdelay","placement","startdelay","skipafter","protocols","api","playbackmethod","maxduration","minduration","pos","skip","skippable"],b=["name","domain","cat","keywords"],h=n.getWindowTop(),A=["description","title","pr","page_url"],w={code:"yieldmo",supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return!!(e&&e.adUnitCode&&e.bidId&&(x(e)||S(e))&&function(e){if(!S(e))return!0;var r=function(){},t=function(){},i=function(e){return void 0!==e},o=function(r,t,i,o){if(0===r.indexOf("video")){var a="params."+r,c="mediaTypes."+r,d=n.deepAccess(e,a),u=n.deepAccess(e,c),s=t(d),p=t(u);return s?d:p||(s?p||i(c,u,o):i(a,d,o),d||u)}var f=n.deepAccess(e,r);return t(f)||i(r,f,o),f};try{o("video.context",(function(e){return!n.isEmpty(e)}),r),o("params.placementId",(function(e){return!n.isEmpty(e)}),r),o("video.playerSize",(function(){}),t,"array of 2 integers, ex: [640,480] or [[640,480]]"),o("video.mimes",(function(e){return i(e)}),r),o("video.mimes",(function(e){return n.isArray(e)&&e.every((function(e){return n.isStr(e)}))}),t,'array of strings, ex: ["video/mp4"]');var a=o("video.placement",(function(e){return i(e)}),r);return o("video.placement",(function(e){return e>=1&&e<=5}),t),1===a&&(o("video.startdelay",(function(e){return i(e)}),(function(e,t){return r(e,t,"placement == 1")})),o("video.startdelay",(function(e){return n.isNumber(e)}),t,"number, ex: 5")),o("video.protocols",(function(e){return i(e)}),r),o("video.protocols",(function(e){return n.isArrayOfNums(e)&&e.every((function(e){return e>=1&&e<=6}))}),t,"array of numbers, ex: [2,3]"),o("video.api",(function(e){return i(e)}),r),o("video.api",(function(e){return n.isArrayOfNums(e)&&e.every((function(e){return e>=1&&e<=6}))}),t,"array of numbers, ex: [2,3]"),o("video.playbackmethod",(function(e){return!i(e)||n.isArrayOfNums(e)}),t,"array of integers, ex: [2,6]"),o("video.maxduration",(function(e){return i(e)}),r),o("video.maxduration",(function(e){return n.isInteger(e)}),t),o("video.minduration",(function(e){return!i(e)||n.isNumber(e)}),t),o("video.skippable",(function(e){return!i(e)||n.isBoolean(e)}),t),o("video.skipafter",(function(e){return!i(e)||n.isNumber(e)}),t),o("video.pos",(function(e){return!i(e)||n.isNumber(e)}),t),o("params.badv",(function(e){return!i(e)||n.isArray(e)}),t,'array of strings, ex: ["ford.com","pepsi.com"]'),o("params.bcat",(function(e){return!i(e)||n.isArray(e)}),t,'array of strings, ex: ["IAB1-5","IAB1-6"]'),!0}catch(e){return n.logError(e.message),!1}}(e))},buildRequests:function(e,r){var t=e.filter((function(e){return x(e)})),o=e.filter((function(e){return S(e)})),a=[];if(t.length>0){var c={pbav:"5.8.0",p:[],page_url:r.refererInfo.referer,bust:(new Date).getTime().toString(),pr:h.document&&h.document.referrer||"",scrd:h.devicePixelRatio||0,dnt:"1"===window.doNotTrack||"1"===window.navigator.doNotTrack||!1,description:k(),title:h.document.title||"",w:h.innerWidth,h:h.innerHeight,userConsent:JSON.stringify({gdprApplies:n.deepAccess(r,"gdprConsent.gdprApplies")||"",cmp:n.deepAccess(r,"gdprConsent.consentString")||""}),us_privacy:n.deepAccess(r,"uspConsent")||""},u=window.navigator.maxTouchPoints;u&&(c.mtp=u),t.forEach((function(e){c.p.push(function(e){var r={placement_id:e.adUnitCode,callback_id:e.bidId,sizes:e.mediaTypes.banner.sizes};if(e.params){e.params.placementId&&(r.ym_placement_id=e.params.placementId);var t=I(e,i.b);t&&(r.bidFloor=t)}return JSON.stringify(r)}(e));var r=T(e,"pubcid");r?c.pubcid=r:e.crumbs&&e.crumbs.pubcid&&(c.pubcid=e.crumbs.pubcid);var t=T(e,"tdid");t&&(c.tdid=t);var o=T(e,"criteoId");o&&(c.cri_prebid=o),e.schain&&(c.schain=JSON.stringify(e.schain)),n.deepAccess(e,"params.lr_env")&&(c.ats_envelope=e.params.lr_env)})),c.p="["+c.p.toString()+"]";var s="".concat(v,"?").concat(n.parseQueryStringParameters(c)).length-8e3;if(s>0)for(var p=0;p<A.length&&!((s=O(s,c,A[p]))<=0);p++);a.push({method:"GET",url:v,data:c})}if(o.length>0){var f=function(e,r){var t={id:e[0].bidderRequestId,at:1,imp:e.map((function(e){return function(e){var r=function(e){var r=n.deepAccess(e,"mediaTypes.video.playerSize");if(n.isArrayOfNums(r,2))return r;if(n.isArray(r)&&n.isArrayOfNums(r[0],2))return r[0];return null}(e),t={id:e.bidId,tagid:e.adUnitCode,bidfloor:I(e,i.d),ext:{placement_id:e.params.placementId},video:{w:r[0],h:r[1],linearity:1}},o=n.deepAccess(e,"mediaTypes.video");Object.keys(o).filter((function(e){return d()(g,e)})).forEach((function(e){return t.video[e]=o[e]}));var a=n.deepAccess(e,"params.video");Object.keys(a).filter((function(e){return d()(g,e)})).forEach((function(e){return t.video[e]=a[e]})),t.video.skippable&&(t.video.skip=1,delete t.video.skippable);1!==t.video.placement&&(t.video.startdelay=0,t.video.playbackmethod=[2]);return t}(e)})),site:_(e[0],r),device:N(),badv:e[0].params.badv||[],bcat:e[0].params.bcat||[],ext:{prebid:"5.8.0"},ats_envelope:e[0].params.lr_env};return function(){}(t,r),t}(o,r);a.push({method:"POST",url:"https://ads.yieldmo.com/exchange/prebidvideo",data:f})}return a},interpretResponse:function(e,r){var t=[],o=e.body;(o.length>0&&o.forEach((function(){})),o.seatbid)&&o.seatbid.reduce((function(e,r){return e.concat(r.bid)}),[]).forEach((function(e){return t.push(function(e,r){var t=s()(n.deepAccess(r,"data.imp")||[],(function(r){return r.id===e.impid})),o={requestId:t.id,cpm:e.price,width:t.video.w,height:t.video.h,creativeId:e.crid||e.adid,currency:f,netRevenue:l,mediaType:i.d,ttl:m,vastXml:e.adm,meta:{advertiserDomains:e.adomain||[],mediaType:i.d}};if(t.video.placement&&1!==t.video.placement){var c=a.a.install({url:y,config:{width:o.width,height:o.height,vastTimeout:15e3,maxAllowedVastTagRedirects:5,allowVpaid:!0,autoPlay:!0,preload:!0,mute:!0},id:t.tagid,loaded:!1});c.setRender((function(){})),o.renderer=c}return o}(e,r))}));return t},getUserSyncs:function(){return[]}};function x(e){return!!n.deepAccess(e,"mediaTypes.banner")}function(){}function(){}function(){}function(){}function _(e,r){var t={},i=n.parseUrl(n.deepAccess(r,"refererInfo.referer"));n.isEmpty(i)||(t.page="".concat(i.protocol,"://").concat(i.hostname).concat(i.pathname)),self===top&&document.referrer&&(t.ref=document.referrer);var o=document.getElementsByTagName("meta").keywords;o&&o.content&&(t.keywords=o.content);var a=n.deepAccess(e,"params.site");return a&&Object.keys(a).filter((function(e){return d()(b,e)})).forEach((function(e){return t[e]=a[e]})),t}function N(){return{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage}}function(){}