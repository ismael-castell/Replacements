var treg=treg||{};treg.gya=treg.gya||{};treg.cmd=treg.cmd||[];treg.loaded=treg.loaded||0;++treg.loaded;treg.events=[];treg.sso={};treg.event={};treg.modules={};treg.developerMode=treg.developerMode||false;treg.screens={};treg.logtype={};treg.log=[];treg.pageType=treg.pageType||"content";treg.loggingOut=false;treg.domLoaded=false;treg.localCSS=treg.localCSS||false;treg.loadGigya=false;treg.ssoId="janrain";treg.build="3.26";treg.reloadAfterLogin=treg.reloadAfterLogin||false;treg.force_logout=treg.force_logout||false;treg.preventReloadOnLogin=false;treg.versionId="2.90";treg._loadAsync=false;treg.promiseTimeout=treg.promiseTimeout||-1;treg.useModalPortal=treg.useModalPortal||false;treg.telemetryTrace=function(a){};treg.identity={id:null,edbId:null,displayName:null};treg.server_location="treg.hearstnp.com/";treg.current_hash="0xCF1AD708ABB7EB25A34484C872DA7ED67304AFF4";treg.main_script_node=null;treg.event.on_treg_loaded=10;treg.event.on_dom_loaded=20;treg.event.on_user_logged_in=30;treg.event.onSessionFound=40;treg.event.onSessionNotFound=50;treg.event.onSessionEnd=60;treg.event.onInitialSessionState=65;treg.event.onSocialProviderFound=500;treg.event.onAccountLinked=510;treg.event.onAccountUnLinked=520;treg.event.onScreenRendered=530;treg.event.onRegistrationStart=540;treg.event.onRegistrationSuccess=550;treg.event.onRegistrationFailed=560;treg.event.onLoginFailed=570;treg.event.onReturningExperienceData=580;treg.event.onAnalyticsDataUpdated=600;treg.event.OnBeforeNicknameUpdate=610;treg.event.onBeforeWidgets=620;treg.event.onBeforeProfileWidget=630;treg.screens.login=10;treg.screens.edit_profile=20;treg.screens.create_account=30;treg.screens.password_recover=40;treg.screens.verify_email=50;treg.screens.accountDeactivated=60;treg.screens.signInWaitMessage=70;treg.logtype.info=0;treg.logtype.warning=1;treg.logtype.error=2;treg.sso.localTimeout=7776000;treg.sso.federatedTimeout=7776000;treg.unqueueCommands=function(){treg.logInfo("unqueueCommands");while(treg.cmd.length>0){(treg.cmd.shift())()}treg.cmd={};treg.cmd.push=function(a){a()}};treg.clearCookie=function(a){document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"};treg.setEnvCookie=function(a,b){document.cookie=a+"="+b+"; path=/"};treg.setConfigCookie=function(a,b){treg.setEnvCookie(a,b)};treg.clearConfigCookie=function(a){if(arguments.length==0){treg.clearCookie("site_url");treg.clearCookie("environment");treg.clearCookie("sso");treg.clearCookie("subscriber_id");treg.clearCookie("gigyaServiceAvailable");treg.clearCookie("conditional1")}else{treg.clearCookie(arguments[0])}};treg.dumpConfigCookies=function(){console.log("site_url :"+treg.readCookie("site_url"));console.log("environment :"+treg.readCookie("environment"));console.log("sso :"+treg.readCookie("sso"));console.log("subscriber_id :"+treg.readCookie("subscriber_id"));console.log("gigyaServiceAvailable :"+treg.readCookie("gigyaServiceAvailable"))};treg.readConfigFromCookies=function(){var b=treg.readCookie("site_url");var a=treg.readCookie("environment");var c=treg.readCookie("sso");var d=treg.readCookie("subscriber_id");if(typeof(b)!="undefined"){treg.url_overide=b}if(typeof(a)!="undefined"){treg.server_location=(a=="production")?"treg.hearstnp.com/":"treg-staging.hearstnp.com/"}if(typeof(c)!="undefined"){treg.forceLoadSSO=c;if(c=="janrain"){treg.loadGigya=false}else{treg.loadGigya=true}}if(typeof(d)!="subscriber_id"){treg.subscriberid=d}};(function(){var a;function b(g,d,e,f){if(a){return a[g]}d=document.cookie.split("; ");a={};for(f=d.length-1;f>=0;f--){e=d[f].split("=");a[e[0]]=e[1]}return a[g]}treg.readCookie=b})();treg.loadSystem=function(){if(treg.loaded>1){throw new Error("treg.js already loaded");return}treg.readConfigFromCookies();var d=treg.getPageUrl();var a=treg.server_location+"assets/"+treg.current_hash+"/GetJS?url="+escape(d);var c=treg.getFullExpandedAddress(a);if(treg._loadAsync==true){treg.logInfo("loading async");var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=c;(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(b)}else{document.write('<script src="'+c+'"></script>')}treg.logInfo("treg queued to load: "+a)};treg.renderScreen=function(a){return false};treg.hasActiveSession=function(){return false};treg.clearIdentity=function(){treg.identity.id=null;treg.identity.edbId=null};treg.reloadPage=function(a){treg.logInfo("page refresh by: "+a);if(treg.getParameterByName("notregrefresh")==""){window.location.reload(true)}};treg.sso.saveIdentityObject=function(c,a,d,b){};treg.sso.clearIdentityObject=function(a){};treg.sso.loadIdentityObject=function(a,b){b(null)};treg.GetCookieDomain=function(){var b=window.location.host;var a=b;if(b!=null){var c=b.split(".").reverse();if(c!=null&&c.length>1){a=c[1]+"."+c[0];if(c.length>2&&c[2].toLowerCase()=="m"){a="m."+a}}}return a};treg.registerEvent=function(b,a){var c=treg.events[b];treg.events[b]=function(d){c&&c(d);a(d)}};treg.fireEvent=function(a,b){treg.events[a]&&treg.events[a](b)};treg.logInfo=function(a){treg.logEvent(new Date(),a,treg.logtype.info)};treg.logWarning=function(a){treg.logEvent(new Date(),a,treg.logtype.warning)};treg.logError=function(a){treg.logEvent(new Date(),a,treg.logtype.error)};treg.logException=function(b,a){if(typeof a!="undefined"){if(typeof a.message!="undefined"){treg.logEvent(new Date(),b+a.message);return}}treg.logEvent(new Date(),b,treg.logtype.error)};if(typeof(window.performance)=="undefined"){treg.logEvent=function(){}