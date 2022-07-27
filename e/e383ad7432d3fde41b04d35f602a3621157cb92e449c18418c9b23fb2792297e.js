
s = new AppMeasurement()
s.linkInternalFilters = 'pitchfork.com,advancemags.com,traffic.outbrain.com,javascript:,tel:,mailto:';
s.server = "";
s.channel = "";
s.pageType = "";
s.currencyCode = "USD";
s.ActionDepthTest = true
s.socAuthVar = 'eVar72';

if (typeof Visitor != 'undefined') {
	s.visitor = Visitor.getInstance("F7093025512D2B690A490D44@AdobeOrg");
	s.contextData.visCheck = s.visitor.getMarketingCloudVisitorID();
} else {
	s.contextData.visCheck = "MCMID not available";
}


/* Make sure s.events exists */
s.events = s.events ? s.events : '';

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "condenast";

/* Link Tracking Config */
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkLeaveQueryString = false;
s.linkTrackVars = "evar21,evar39,evar40,prop34,events";
s.linkTrackEvents = "event3,event4,event10,event11,event12,event13,event20,event21,event22,event23,event24,event25,event29,event30,event31,event32,event37,event38";

// time parting plugin configuration - US
s._tpDST = {
    2012: '3/11,11/4',
    2013: '3/10,11/3',
    2014: '3/9,11/2',
    2015: '3/8,11/1',
    2016: '3/13,11/6',
    2017: '3/12,11/5',
    2018: '3/11,11/4',
    2019: '3/10,11/3'
}

//Page load time plugin
s_getLoadTime()

/* Plugin Config */
s.usePlugins = true

function s_doPlugins(s) {

    var user = (typeof CN !== 'undefined' && CN.user) ? CN.user : null;

    function isLoggedIn() {
        var bool = (user) ? user.isLoggedIn() : false;
        return (bool) ? 'logged in' : 'not logged in';
    };

    function userID() {
        return (user) ? user.userid() : '';
    };

    s.eVar16 = s.prop16 = isLoggedIn();
    s.eVar52 = s.prop52 = userID();


    if (s.campaign) {
        s.eVar15 = s.eVar20 = 'D=v0';
    }

    s.events = s.apl(s.events, "event2", ",", 2) // page view event

    if (!s.eVar10) {
        s.eVar10 = s.Util.getQueryParam('intcid');
        s.eVar10 = s.getValOnce(s.eVar10, 's_eVar10', 0);
    }

    /* Visit Depth of 5  and New Visit Begun*/
    if (s.ActionDepthTest) {
        s.pdvalue = s.getActionDepth("s_depth");
        if (s.pdvalue == 5) s.events = s.apl(s.events, 'event26', ',', 2);
        if (s.pdvalue == 1) s.events = s.apl(s.events, 'event28', ',', 2);
        s.ActionDepthTest = false;
    }

    /* Download Event */
    s.d_url = s.downloadLinkHandler(s.linkDownloadFileTypes);
    if (s.d_url) {
        s.events = s.apl(s.events, 'event18', ',', 2);
        s.linkTrackVars = "events";
        s.linkTrackEvents = "event18,";
    }

    /*
    //Sets event9 (error) and errored URL on 500 or 404 
    if(_satellite.getVar('Content Type') == 'error'){
        s.events = 'event9';
        s.pageName = s.eVar2 = document.URL
    }

    //Sets event1 (search) and numOfSearchResults
    if(_satellite.getVar('Content Type') == 'search'){
        s.events = 'event1';
        s.prop2 = _satellite.getVar('Num of Search Results');
        s.prop1 = s.eVar1 = _satellite.getVar('Search Terms');
    }

    // Captures onsite keywords in a list variable 
    s.list2 = _satellite.getVar('Onsite Keywords');  
    */
    
    // Engaged Visitors
    var timeTemp = s.getTimeSpent("event82");
    if (timeTemp) {
        s.events = s.apl(s.events, timeTemp, ",", 2);
    }

    /* SocialPlatforms - SocialAnalytics */
    s.socialPlatforms('eVar71');

    s.prop17 = s.eVar17 = s.getVisitNumCustom('m');

    /* Plugin Example: trackTNT 2.1*/
    //s.tnt = s.trackTNT();

    /*Previous Page Name call*/
    s.prop68 = s.eVar68 = s.getPreviousValue(s.pageName, 's_ppn');
    //var ppv = s.getPercentPageViewed(s.pageName);
    //if( ppv && typeof ppv=='object' && ppv[0] == s.prop68 ) { 
    //s.prop58 = s.eVar58 = ppv[1] // % page viewed
    //s.eVar69 = s.prop69 = ppv[2] // initial % viewed
    //  }
  
    /*Previous Content Type call*/
    s.prop35 = s.eVar35 = s.getPreviousValue(s.eVar5, 's_pct');

    //Page load plugin call
    s.eVar56 = s_getLoadTime();
    s.prop56 = 'D=v56';

    /**get Responsive Web Design Values**/
    s.eVar51 = s.getRwd(true, 750, 980);
    s.prop51 = 'D=v51';

    /* New or repeat visitor designation */
    s.eVar23 = s.getNewRepeat();
    s.prop23 = 'D=v23'
        
    //moved to data elements -- test
    /*get PCID for audience development
    s.eVar24 = mboxFactoryDefault.getPCId().getId();
    */

    //Time parting plugin call
    s.eVar11 = s.getTimeParting('n', '-5');
    s.prop11 = 'D=v11'

    /* dedupe the traffic sources reports */
    s.referrer = s.dedupeReferrers();

    /*Detects if referrer is external*/
    s.isReferrer = s.referrer ? s.referrer : document.referrer;
    if (s.isReferrer) {
        s.noQReferrer = s.isReferrer.indexOf('?') > -1 ? s.isReferrer.substring(0, s.isReferrer.indexOf('?')) : s.isReferrer; //removes query params
        s.refArr = s.split(s.noQReferrer, "/");
        s.refSub = s.refArr.length > 1 ? s.refArr[2].toLowerCase() : s.noQReferrer.toLowerCase();
        s.lnkIntFltArray = s.split(s.linkInternalFilters, ',');
        s.lnkIntFltArrLen = s.lnkIntFltArray.length - 1;
        for (s.qI = 0; s.qI <= s.lnkIntFltArrLen; s.qI++) {
            if (s.lnkIntFltArray[s.qI]) {
                s.inFilts = s.refSub.indexOf(s.lnkIntFltArray[s.qI]) == -1 ? false : true; //does referrer contain int. filter?  if so, set true, else set false
                if (s.inFilts)
                    break;
            }
        }

        /* If referrer is external, removes 'www' if present, extracts domain/subdomain and populates eVar39/prop39 and eVar30/prop30 respectively.*/
        if (!s.inFilts) {
            s.refSubArr = s.refSub.split(".");
            if (s.refSubArr.length > 2) {
                if (s.refSubArr[s.refSubArr.length - 2] == "com" || s.refSubArr[s.refSubArr.length - 2] == "co") {
                    s.eVar39 = s.refSubArr[s.refSubArr.length - 3] + '.' + s.refSubArr[s.refSubArr.length - 2] + "." + s.refSubArr[s.refSubArr.length - 1];
                } else {
                    s.eVar39 = s.refSubArr[s.refSubArr.length - 2] + "." + s.refSubArr[s.refSubArr.length - 1];
                }
            } else {
                s.eVar39 = s.refSub;
            }
            s.eVar30 = (s.refSub.substring(0, 4) == "www.") ? s.refSub.substring(4) : s.refSub;
        }
    }
    s.eVar30 = s.getAndPersistValue(s.eVar30, 'v30', 0);
    s.eVar39 = s.getAndPersistValue(s.eVar39, 'v39', 0);
    s.prop39 = s.eVar39 ? 'D=v39' : "";
    s.prop30 = s.eVar30 ? 'D=v30' : "";

}
s.doPlugins = s_doPlugins

/*
 * Plugin: socialPlatforms v1.1
 */
s.socialPlatforms = new Function("a", "" + "var s=this,g,K,D,E,F,i;g=s.referrer?s.referrer:document.referrer;g=g." + "toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){" + "D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){if(a){s[a]=D[1];}}}");

s.socPlatList = "facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|pinterest.com>Pinterest";


/*
 * Engaged Users Plugin - High Value Audience
 * Added 3/22/2013 as a result of an audit and per discussions with Dan Stubbs and Don Taylor
 */
s.getTimeSpent = function(e1) {
    var s = this;

    if ((typeof s.linkType === undefined || s.linkType != '') || (s.linkType == '' && s.eo == '')) {

        s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);
        s.linkTrackEvents = s.apl(s.linkTrackEvents, e1, ',', 2);

        previousTime = s.c_r('timeSpent');
        currentTime = (new Date()).getTime();

        if (s.events && s.events.indexOf(e1 + "=") > -1) {
            var list = s.split(s.events, ",");
            if (list.length > 0) {
                s.events = "";
                for (var i = 0; i < list.length; i++) {
                    if (list[i].indexOf(e1 + "=") == -1)
                        s.events = s.events + list[i] + ",";
                }
                s.events = s.events.substring(0, s.events.length - 1);
            }
        }

        if (previousTime == '') {
            s.c_w('timeSpent', currentTime);
            return e1 + '=0';
        } else {
            var timeDiff = Math.round((currentTime - previousTime) / 1000)
            if (timeDiff > 1800 || timeDiff < 0) {
                s.c_w('timeSpent', currentTime)
                return e1 + '=0';
            } else {
                s.c_w('timeSpent', currentTime);
                return e1 + '=' + timeDiff;
            }
        }
    }
}

/*
 * Plugin Utility: apl v1.2
 */
s.apl = new Function("l", "v", "d", "u", "" + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.le" + "ngth;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase(" + ")));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue = new Function("v", "c", "e", "" + "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(" + "v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Plugin: Visit Depth
 */
s.getActionDepth = new Function("c", "" + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);" + "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}" + "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");

/*
 * Plugin: downloadLinkHandler 0.8 - identify and report download links
 */
s.downloadLinkHandler = new Function("p", "e", "" + "var s=this,o=s.p_gh(),h=o.href,n='linkDownloadFileTypes',i,t;if(!h|" + "|(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n" + "]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return e?o:" + "h;");
s.p_gh = new Function("", "" + "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o" + "),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o" + "=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot" + "(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");

/*
 * Plugin: exitLinkHandler 0.8 - identify and report exit links
 */
s.exitLinkHandler = new Function("p", "e", "" + "var s=this,o=s.p_gh(),h=o.href,n='linkInternalFilters',i,t;if(!h||(" + "s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]=" + "p?p:t;h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)==" + "'e')s.linkType='e';else h='';s[n]=t;return e?o:h;");
s.p_gh = new Function("", "" + "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o" + "),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o" + "=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot" + "(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");

/*
 * Plugin: linkHandler 0.8 - identify and report custom links
 */
s.linkHandler = new Function("p", "t", "e", "" + "var s=this,o=s.p_gh(),h=o.href,i,l;t=t?t:'o';if(!h||(s.linkType&&(h" + "||s.linkName)))return'';i=h.indexOf('?');h=s.linkLeaveQueryString||" + "i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s" + ".linkName=l=='[['?'':l;s.linkType=t;return e?o:h;}return'';");
s.p_gh = new Function("", "" + "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o" + "),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o" + "=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot" + "(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");
s.p_gn = new Function("t", "h", "" + "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=" + "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}" + "return 0;");

/*
 * Plugin Utility: pt - runs function in f argument against list of
 * variables declared in x (delimited by d), with a as an optional
 * argument to be included in f function call
 */
s.pt = new Function("x", "d", "f", "a", "" + "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t" + ".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri" + "ng(z,x.length);t=z<x.length?t:''}return'';");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: dedupeReferrer v1.0 - prevents the duplication of referrers
 */
s.dedupeReferrer = new Function("c", "b", "" + "var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.refer" + "rer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.le" + "ngth;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.s" + "plit(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';i" + "f(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if" + "(a){return a}else{return k[b]}}}");
/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce = new Function("v", "c", "e", "t", "" + "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" + "0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e" + "==0?0:a);}return v==k?'':v");

/*
 * Monthly Visit Number
 */
s.dimo = new Function("m", "y", "var d=new Date(y,m+1,0); return d.getDate();");
s.endof = new Function("x", "var t = new Date(); t.setHours(0); t.setMinutes(0);" + "t.setSeconds(0); if(x=='m') d=s.dimo(t.getMonth(),t.getFullYear()) - t.getDate() + 1;" + "else if(x=='w') d=7-t.getDay(); else d=1; t.setDate(t.getDate()+d); return t;");
s.getVisitNumCustom = new Function("tp", "" + "var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_'+tp,c2='sinvisit_'+tp,eo=s.endof(tp)," + "y=eo.getTime();e.setTime(y);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}" + "cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}" + "else return 'unknown visit number';}" + "else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}" + "else{s.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");

/*
 * TNT Integration Plugin v2.1AM
 */
s.trackTNT = new Function("v", "p", "b", "" + "var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false" + ",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get" + "QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c" + "ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(" + "(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in" + "dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B" + "ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:" + "00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara" + "m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp" + "ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util." + "getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi" + "ned)r+=window[v];if(b)window[v]='';return r;");

/*
 * Plugin: getPercentPageViewed v1.74
 */
s.getPercentPageViewed = new Function("n", "" + "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load" + "','unload','scroll','resize','zoom','keyup','mouseup','touchend','o" + "rientationchange','pan'],K='s_ppv',P=K+'l',I=n||s.pageName||documen" + "t.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){" + "var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a" + "[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a" + "[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9" + "]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w(" + "K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=wind" + "ow,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen|" + "|{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWi" + "dth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W" + ".s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e" + "=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s" + "&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho" + "],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight|" + "|E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePi" + "xelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.r" + "ound(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(O)%180:Y>X?0:90,a=s" + ".s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v" + "!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iP" + "od|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')" + "&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if" + "(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+" + "V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':" + "o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)" + "};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);" + "else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!argument" + "s.length||n=='-'?a[1]:a");

//Page load plugin definition
function s_getLoadTime() {
    if (!window.s_loadT) {
        var b = new Date().getTime(),
            o = window.performance ? performance.timing : 0,
            a = o ? o.requestStart : window.inHeadTS || 0;
        s_loadT = a ? ((b - a) / 1000).toFixed(1) : ''
    }
    return (s_loadT < 0) ? '' : s_loadT;
}

//getRWD plugin definition
s.getRwd = function(a, c, e) {
    var d;
    var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var f = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (a) {
        if (b < c) {
            d = "phone layout";
        } else {
            if (b >= e) {
                d = "desktop layout";
            } else {
                if (b >= c && b < e) {
                    d = "tablet layout";
                }
            }
        }
        d = d + ":" + b + "x" + f;
    } else {
        d = "not rwd page:" + b + "x" + f;
    }
    return d;
};

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting = new Function("h", "z", "" + "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont" + "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['" + "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" + "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp" + "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea" + "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)" + "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT" + "imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d" + ".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P" + "M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
 * Plugin: dedupeReferrer v1.0 - prevents the duplication of referrers
 */

/* dedupe referrers */
s.dedupeReferrers = new Function("c", "b", "" + "var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.refer" + "rer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.le" + "ngth;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.s" + "plit(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';i" + "f(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if" + "(a){return a}else{return k[b]}}}");

s.loadModule("Integrate")
s.Integrate.onLoad = function(s, m) {

}

/*DIL code V5*/
"function" != typeof DIL && (DIL = function(a, b) {
    var d = [],
        c, e;
    a !== Object(a) && (a = {});
    var f, g, k, r, t, n, u, D, m, z, H;
    f = a.partner;
    g = a.containerNSID;
    k = a.iframeAttachmentDelay;
    r = !!a.disableDestinationPublishingIframe;
    t = a.iframeAkamaiHTTPS;
    n = a.mappings;
    u = a.uuidCookie;
    D = !0 === a.enableErrorReporting;
    m = a.visitorService;
    z = a.declaredId;
    H = !0 === a.removeFinishedScriptsAndCallbacks;
    var I, J, E, B;
    I = !0 === a.disableScriptAttachment;
    J = !0 === a.disableDefaultRequest;
    E = a.afterResultForDefaultRequest;
    B = a.dpIframeSrc;
    D && DIL.errorModule.activate();
    var K = !0 === window._dil_unit_tests;
    (c = b) && d.push(c + "");
    if (!f || "string" != typeof f) return c = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({
        name: "error",
        message: c,
        filename: "dil.js"
    }), Error(c);
    c = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
    if (g || "number" == typeof g) g = parseInt(g, 10), !isNaN(g) && 0 <= g && (c = "");
    c && (g = 0, d.push(c), c = "");
    e = DIL.getDil(f, g);
    if (e instanceof DIL && e.api.getPartner() == f && e.api.getContainerNSID() == g) return e;
    if (this instanceof DIL) DIL.registerDil(this, f, g);
    else return new DIL(a, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + f + " and containerNSID = " + g);
    var w = {
            IS_HTTPS: "https:" == document.location.protocol,
            POST_MESSAGE_ENABLED: !!window.postMessage,
            COOKIE_MAX_EXPIRATION_DATE: "Tue, 19 Jan 2038 03:14:07 UTC"
        },
        F = {
            stuffed: {}
        },
        l = {},
        p = {
            firingQueue: [],
            fired: [],
            firing: !1,
            sent: [],
            errored: [],
            reservedKeys: {
                sids: !0,
                pdata: !0,
                logdata: !0,
                callback: !0,
                postCallbackFn: !0,
                useImageRequest: !0
            },
            callbackPrefix: "demdexRequestCallback",
            firstRequestHasFired: !1,
            useJSONP: !0,
            abortRequests: !1,
            num_of_jsonp_responses: 0,
            num_of_jsonp_errors: 0,
            num_of_img_responses: 0,
            num_of_img_errors: 0,
            toRemove: [],
            removed: [],
            readyToRemove: !1,
            platformParams: {
                d_nsid: g + "",
                d_rtbd: "json",
                d_jsonv: DIL.jsonVersion + "",
                d_dst: "1"
            },
            nonModStatsParams: {
                d_rtbd: !0,
                d_dst: !0,
                d_cts: !0,
                d_rs: !0
            },
            modStatsParams: null,
            adms: {
                TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 2E3,
                calledBack: !1,
                mid: null,
                noVisitorAPI: !1,
                instance: null,
                releaseType: "no VisitorAPI",
                admsProcessingStarted: !1,
                process: function(h) {
                    try {
                        if (!this.admsProcessingStarted) {
                            var a = this,
                                v, b, c, d, f;
                            if ("function" == typeof h && "function" == typeof h.getInstance) {
                                if (m === Object(m) && (v = m.namespace) && "string" == typeof v) b = h.getInstance(v);
                                else {
                                    this.releaseType = "no namespace";
                                    this.releaseRequests();
                                    return
                                }
                                if (b === Object(b) && "function" == typeof b.isAllowed && "function" == typeof b.getMarketingCloudVisitorID) {
                                    if (!b.isAllowed()) {
                                        this.releaseType = "VisitorAPI not allowed";
                                        this.releaseRequests();
                                        return
                                    }
                                    this.instance =
                                        b;
                                    this.admsProcessingStarted = !0;
                                    c = function(h) {
                                        "VisitorAPI" != a.releaseType && (a.mid = h, a.releaseType = "VisitorAPI", a.releaseRequests())
                                    };
                                    K && (d = m.server) && "string" == typeof d && (b.server = d);
                                    f = b.getMarketingCloudVisitorID(c);
                                    if ("string" == typeof f && f.length) {
                                        c(f);
                                        return
                                    }
                                    setTimeout(function() {
                                        "VisitorAPI" != a.releaseType && (a.releaseType = "timeout", a.releaseRequests())
                                    }, this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);
                                    return
                                }
                                this.releaseType = "invalid instance"
                            } else this.noVisitorAPI = !0;
                            this.releaseRequests()
                        }
                    } catch (e) {
                        this.releaseRequests()
                    }
                },
                releaseRequests: function(){},
                getMarketingCloudVisitorID: function() {
                    return this.instance ? this.instance.getMarketingCloudVisitorID() : null
                },
                getMIDQueryString: function() {
                    var h = s.isPopulatedString,
                        a = this.getMarketingCloudVisitorID();
                    h(this.mid) && this.mid == a || (this.mid = a);
                    return h(this.mid) ? "d_mid=" + this.mid + "&" : ""
                }
            },
            declaredId: {
                declaredId: {
                    init: null,
                    request: null
                },
                declaredIdCombos: {},
                setDeclaredId: function(h, a) {
                    var b = s.isPopulatedString,
                        c = encodeURIComponent;
                    if (h ===
                        Object(h) && b(a)) {
                        var d = h.dpid,
                            f = h.dpuuid,
                            e = null;
                        if (b(d) && b(f)) {
                            e = c(d) + "$" + c(f);
                            if (!0 === this.declaredIdCombos[e]) return "setDeclaredId: combo exists for type '" + a + "'";
                            this.declaredIdCombos[e] = !0;
                            this.declaredId[a] = {
                                dpid: d,
                                dpuuid: f
                            };
                            return "setDeclaredId: succeeded for type '" + a + "'"
                        }
                    }
                    return "setDeclaredId: failed for type '" + a + "'"
                },
                getDeclaredIdQueryString: function() {
                    var h = this.declaredId.request,
                        a = this.declaredId.init,
                        b = "";
                    null !== h ? b = "&d_dpid=" + h.dpid + "&d_dpuuid=" + h.dpuuid : null !== a && (b = "&d_dpid=" + a.dpid +
                        "&d_dpuuid=" + a.dpuuid);
                    return b
                }
            },
            registerRequest: function(h) {
                var a = this.firingQueue;
                h === Object(h) && a.push(h);
                !this.firing && a.length && (this.adms.calledBack ? (h = a.shift(), h.src = h.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() + "d_nsid="), x.fireRequest(h), this.firstRequestHasFired || "script" != h.tag || (this.firstRequestHasFired = !0)) : this.processVisitorAPI())
            },
            processVisitorAPI: function() {
                this.adms.process(window.Visitor)
            },
            requestRemoval: function(h) {
                if (!H) return "removeFinishedScriptsAndCallbacks is not boolean true";
                var a = this.toRemove,
                    b, c;
                h === Object(h) && (b = h.script, c = h.callbackName, (b === Object(b) && "SCRIPT" == b.nodeName || "no script created" == b) && "string" == typeof c && c.length && a.push(h));
                if (this.readyToRemove && a.length) {
                    c = a.shift();
                    b = c.script;
                    c = c.callbackName;
                    "no script created" != b ? (h = b.src, b.parentNode.removeChild(b)) : h = b;
                    window[c] = null;
                    try {
                        delete window[c]
                    } catch (d) {}
                    this.removed.push({
                        scriptSrc: h,
                        callbackName: c
                    });
                    DIL.variables.scriptsRemoved.push(h);
                    DIL.variables.callbacksRemoved.push(c);
                    return this.requestRemoval()
                }
                return "requestRemoval() processed"
            }
        };
    e = function() {
        var h = "http://fast.",
            a = "?d_nsid=" + g + "#" + encodeURIComponent(document.location.href);
        if ("string" === typeof B && B.length) return B + a;
        w.IS_HTTPS && (h = !0 === t ? "https://fast." : "https://");
        return h + f + ".demdex.net/dest4.html" + a
    };
    var y = {
            THROTTLE_START: 3E4,
            throttleTimerSet: !1,
            id: "destination_publishing_iframe_" + f + "_" + g,
            url: e(),
            iframe: null,
            iframeHasLoaded: !1,
            sendingMessages: !1,
            messages: [],
            messagesPosted: [],
            messageSendingInterval: w.POST_MESSAGE_ENABLED ? 15 : 100,
            jsonProcessed: [],
            attachIframe: function() {
                var h =
                    this,
                    a = document.createElement("iframe");
                a.id = this.id;
                a.style.cssText = "display: none; width: 0; height: 0;";
                a.src = this.url;
                q.addListener(a, "load", function() {
                    h.iframeHasLoaded = !0;
                    h.requestToProcess()
                });
                document.body.appendChild(a);
                this.iframe = a
            },
            requestToProcess: function(h, a) {
                var b = this;
                h && !s.isEmptyObject(h) && this.process(h, a);
                this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                    b.messageSendingInterval = w.POST_MESSAGE_ENABLED ?
                        15 : 150
                }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
            },
            process: function(h, a) {
                var b = encodeURIComponent,
                    c, d, f, e, g, m;
                a === Object(a) && (m = q.encodeAndBuildRequest(["", a.dpid || "", a.dpuuid || ""], ","));
                if ((c = h.dests) && c instanceof Array && (d = c.length))
                    for (f = 0; f < d; f++) e = c[f], e = [b("dests"), b(e.id || ""), b(e.y || ""), b(e.c || "")], this.addMessage(e.join("|"));
                if ((c = h.ibs) && c instanceof Array && (d = c.length))
                    for (f = 0; f < d; f++) e = c[f], e = [b("ibs"), b(e.id || ""), b(e.tag || ""), q.encodeAndBuildRequest(e.url || [],
                        ","), b(e.ttl || ""), "", m], this.addMessage(e.join("|"));
                if ((c = h.dpcalls) && c instanceof Array && (d = c.length))
                    for (f = 0; f < d; f++) e = c[f], g = e.callback || {}, g = [g.obj || "", g.fn || "", g.key || "", g.tag || "", g.url || ""], e = [b("dpm"), b(e.id || ""), b(e.tag || ""), q.encodeAndBuildRequest(e.url || [], ","), b(e.ttl || ""), q.encodeAndBuildRequest(g, ","), m], this.addMessage(e.join("|"));
                this.jsonProcessed.push(h)
            },
            addMessage: function(h) {
                var a = encodeURIComponent,
                    a = D ? a("---destpub-debug---") : a("---destpub---");
                this.messages.push(a + h)
            },
            sendMessages: function() {
                var h =
                    this,
                    a;
                this.messages.length ? (a = this.messages.shift(), DIL.xd.postMessage(a, this.url, this.iframe.contentWindow), this.messagesPosted.push(a), setTimeout(function() {
                    h.sendMessages()
                }, this.messageSendingInterval)) : this.sendingMessages = !1
            }
        },
        G = {
            traits: function(h) {
                s.isValidPdata(h) && (l.sids instanceof Array || (l.sids = []), q.extendArray(l.sids, h));
                return this
            },
            pixels: function(h) {
                s.isValidPdata(h) && (l.pdata instanceof Array || (l.pdata = []), q.extendArray(l.pdata, h));
                return this
            },
            logs: function(h) {
                s.isValidLogdata(h) &&
                    (l.logdata !== Object(l.logdata) && (l.logdata = {}), q.extendObject(l.logdata, h));
                return this
            },
            customQueryParams: function(h) {
                s.isEmptyObject(h) || q.extendObject(l, h, p.reservedKeys);
                return this
            },
            signals: function(h, a) {
                var b, c = h;
                if (!s.isEmptyObject(c)) {
                    if (a && "string" == typeof a)
                        for (b in c = {}, h) h.hasOwnProperty(b) && (c[a + b] = h[b]);
                    q.extendObject(l, c, p.reservedKeys)
                }
                return this
            },
            declaredId: function(h) {
                p.declaredId.setDeclaredId(h, "request");
                return this
            },
            result: function(h) {
                "function" == typeof h && (l.callback = h);
                return this
            },
            afterResult: function(h) {
                "function" == typeof h && (l.postCallbackFn = h);
                return this
            },
            useImageRequest: function(){}