/* USBank AppMeasurement for JS - last updated 10/07/2019 */
/* Adobe Analytics code version: AppMeasurement 2.17.0*/

/* eslint-disable */

if (typeof (cd) == "undefined") var cd = new Object();

var sc_code_ver = "R October 2019|AM_2.12.0|10.07.2019|baseOLB"; //SiteCatalyst code version

window.s = new AppMeasurement("[report suite id(s)]");



if (typeof Visitor != 'undefined') {
    s.visitor = Visitor.getInstance("675616D751E567410A490D4C@AdobeOrg");


    if (s.c_r('appVisitorAID')) {
        visitor.setAnalyticsVisitorID(s.c_r('appVisitorAID'));
    }

    if (s.c_r('appVisitorMID')) {
        visitor.setMarketingCloudVisitorID(s.c_r('appVisitorMID'));
    }
}

if (typeof (cd) == "undefined") var cd = new Object();
var s_url = document.location.hostname.toString();

//QC 6713 [iphone/ipad/android] (Omniture) Omni Transfer pages for mobile app users does not set hostname
if (s_url == "") {
    if (typeof ApplicationContext == "function") {
        s_url = ApplicationContext.getContext().getContextProp("SERVICE_HOSTNAME");
    }
}
//End of QC 6713


if (s_url.match(/uat[\d]?/) || s_url.match(/it[\d]?/)) {
    s.account = "usbankdev";
} else if (s_url.indexOf("usbank.com") > -1 || s_url.indexOf("liveperson.net") > -1 || s_url.indexOf("emp-onlinebanking.us.bank-dns.com") > -1 || s_url.indexOf("24hb-banking.us.bank-dns.com") > -1 || s_url.indexOf("internal-banking-ad.us.bank-dns.com") > -1 || s_url.indexOf("fusionprodpilot.us.bank-dns.com") > -1 || s_url.match(/fusionprodgroup[\d]\.us\.bank\-dns\.com/)) {
    s.account = "usbankcom";
} else {
    s.account = "usbankdev";
}


if (window.location.protocol == "file:") {
    s.ssl = true;
} // If Protocol is set to 'file:', force SSL
/************************** CONFIG SECTION **************************/
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = false;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
//s.linkInternalFilters = "javascript:,usbank.com,liveperson.net," + window.location.hostname;
s.linkInternalFilters = "javascript:,usbank.com,liveperson.net,us.bank-dns.com," + window.location.hostname;
//s.linkInternalFilters = ".";

s.linkLeaveQueryString = false;
s.linkTrackVars = "prop8,eVar8,contextData.appNameForSiteCat,contextData.uxNameForSiteCat,contextData.appName_PERS,contextData.uxName_PERS,prop4,eVar4,prop6,prop29,eVar90,contextData.clientNameForSiteCat";
s.linkTrackEvents = "None";
s.visitorNamespace = "usbank";
s.trackingServer = "metrics.usbank.com";
s.trackingServerSecure = "smetrics.usbank.com";
/* Page Name Plugin Config */
s.siteID = "olb"; // leftmost value in pagename
s.defaultPage = ""; // filename to add when none exists
s.queryVarsList = ""; // query parameters to keep
s.pathExcludeDelim = ""; // portion of the path to exclude
s.pathConcatDelim = ":"; // page name component separator
s.pathExcludeList = ""; // elements to exclude from the path
s.isPageView = true
s.usePlugins = true

function s_doPlugins(s) {

    s.AudienceManagement.setup({
        "partner": "usbank",
        "containerNSID": 0,
        "uuidCookie": {
            "name": "aam_uuid",
            "days": 30
        }
    });
    
    /* Set Platform for OLB and enrollment */
    s.prop40 = "online banking";
    /* Custom Page View */
    s.events = s.apl(s.events, "event17", ",", 2);
    /* Page Name */
    s.prop24 = s.getPageName() ? s.getPageName().replace(/:af\([^:]*/g, '') : "";
    s.contextData['prop53Val'] = s.pageName;

    /*Checks for Presence of Visitor ID Service - writes result into Context Data Variable */
    s.contextData['vidAPICheck'] = (typeof (Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");


    /* User Agent Checking for Mobile-based logic */
    var ua = navigator.userAgent;
    if (!ua) {
        ua = "device unknown";
    }
    var device_name = "";
    var device_type = "";
    var device_auth_type = "";
    var checker = {
        iphone: ua.match(/iPhone/),
        ipad: ua.match(/iPad/),
        android: ua.match(/Android/),
        windowsPhone: ua.match(/Windows Phone/),
        blackBerry: ua.match(/BlackBerry|BB|playbook/i)
    };

    if ((s.prop30 && s.eVar71) && (s.prop30 == s.eVar71) && s.prop30 == "wap:touch") //if prop30/eVar71 hardcoded on page to wap:touch
    {
        if (checker.android) {
            device_name = "wap:android";
        } else if (checker.ipad) {
            device_name = "wap:ipad";
        } else if (checker.iphone) {
            device_name = "wap:iphone";
        } else if (checker.windowsPhone) {
            device_name = "wap:windowsPhone";
        } else if (checker.blackBerry) {
            device_name = "wap:blackBerry";
        } else {
            device_name = "wap:other";
        }

        s.eVar71 = s.prop30 = device_name;
    }


    /* contextData for Omni AppName and UXNAme */
    if (window.APPNAMEForSiteCat) {
        s.contextData['appNameForSiteCat'] = window.APPNAMEForSiteCat;
    }
    /* added below condition for OAUTH on Feb 10 2017 */
    if (window.ClientIDForSiteCat) {
        s.contextData['clientIDForSiteCat'] = window.ClientIDForSiteCat;
    }
    s.contextData['appName_PERS'] = s.getAndPersistValue(s.contextData['appNameForSiteCat'], 's_appname_sc', 0);
    if (window.UXNAMEForSiteCat) {

        s.contextData['uxApp'] = "false"; //default setting for uxName App Check

        s.contextData['uxNameForSiteCat'] = window.UXNAMEForSiteCat.toLowerCase();

        //Logic overwrites uxName App Check if uxName is set to iphone, ipad or android
        if (s.contextData['uxNameForSiteCat'] == "iphone") {
            s.contextData['uxApp'] = "app:iphone";
        }
        if (s.contextData['uxNameForSiteCat'] == "ipad") {
            s.contextData['uxApp'] = "app:ipad";
        }
        if (s.contextData['uxNameForSiteCat'] == "android") {
            s.contextData['uxApp'] = "app:android";
        }

        /*Modified on Feb 10 2017 - Added OR condition for responsive */
        if (s.contextData['uxNameForSiteCat'] == "touch" || s.contextData['uxNameForSiteCat'] == "responsive") {

            if (checker.android) {
                device_name = "wap:android";
            } else if (checker.ipad) {
                device_name = "wap:ipad";
            } else if (checker.iphone) {
                device_name = "wap:iphone";
            } else if (checker.windowsPhone) {
                device_name = "wap:windowsPhone";
            } else if (checker.blackBerry) {
                device_name = "wap:blackBerry";
            } else {
                device_name = "wap:other";
            }

            s.eVar71 = s.prop30 = device_name;
        }
        if (s.contextData['uxApp'] != "false") {
            s.eVar71 = s.prop30 = s.contextData['uxApp'];
        }
    }
    s.contextData['uxName_PERS'] = s.getAndPersistValue(s.contextData['uxNameForSiteCat'], 's_uxname_sc', 0);

    if (s.contextData['appNameForSiteCat'] == "MBL") {
        s.prop40 = "mobile";
    }
    if (s.contextData['appNameForSiteCat'] == "SVI") {
        s.prop40 = "mobile";
    }
    if (s.contextData['appNameForSiteCat'] == "APPLY") {
        s.prop40 = "touch apply";
    }
    if (window.CLIENTNAMEForSiteCat) {
        s.contextData['clientNameForSiteCat'] = window.CLIENTNAMEForSiteCat;
    }
    if (!s.contextData['appNameForSiteCat'] && s.eVar48 != null && s.eVar48.match(/mobile/i)) {
        s.prop40 = "mobile";
    }
    /* Added below condition on Feb 10 2017 - For Yodlee appl. */
    if ((s.contextData['appNameForSiteCat'] == "OAUTH") && (s.contextData['clientIDForSiteCat'] == "Yodlee")) {
        s.prop40 = "online banking - yodlee";
    }
    /* Added below condition on July 10 2017 - For Alexa appl. */
    if ((s.contextData['appNameForSiteCat'] == "OAUTH") && (s.contextData['clientIDForSiteCat'] == "Amazon")) {
        s.prop40 = "online banking - alexa";
    }
    //If the context data variable cd.LPID/cd.lpid is set, set eVar8 to cd.LPID/cd.lpid value
    if (cd.lpid) {
        s.eVar8 = cd.lpid;
    }
    if (cd.LPID) {
        s.eVar8 = cd.LPID;
    }

    if (s.prop24) s.prop24 = s.prop24.toLowerCase();
    s.eVar35 = 'D=pageName';
    /* LPID */
    if (s.c_r("riblpid")) {
        s.eVar8 = s.c_r("riblpid");
    }
    if (s.eVar8) {
        s.prop8 = "D=v8";
        s.eVar9 = "customer"; //cust segment
    } else {
        s.eVar9 = "prospect";
    }

    // Setting eVar8 as Customer ID in Marketing Cloud if defined
    if (s.eVar8) {
        if (typeof Visitor != 'undefined') {
            visitor.setCustomerIDs({
                "lpid": {
                    "id": s.eVar8,
                    "authState": 1
                }
            });
        }
    }

    /*Remember Me Cookie*/
    if (s.c_r("RM")) {
        s.contextData['RememberMyId'] = s.c_r("RememberMyId");
    }

    if (!s.c_r("RM")) {
        if (s.c_r("RememberMyId")) {
            s.contextData['RememberMyId'] = s.c_r("RememberMyId");
        }
    }
    /* User Agent */
    s.eVar37 = "D=User-Agent";
    /* Campaign Tracking */
    if (!s.campaign) s.campaign = s.getQueryParam("ecid");
    s.campaign = s.getValOnce(s.campaign, "s_campaign", 0);
    /* Capture Original Referrer for redirect offers */
    if (s.getQueryParam("original_ref")) s.referrer = s.getQueryParam("original_ref");
    /* Internal Campaign */
    if (!s.eVar1) s.eVar1 = s.getQueryParam("icid");
    s.eVar1 = s.getValOnce(s.eVar1, "s_ev1", 0);
    /* Page URL */
    s.pageURL = document.location.href;
    s.prop29 = s.pageURL.split("?")[0];
    if (s.pageURL.match(/usb\/af\(.+\)/i)) {
        s.pageURL = s.pageURL.replace(/usb\/af\(.+\)\//i, '');
        if (s.prop15 && s.prop15.match(/usb:af\(.+\)/i)) s.prop15 = s.prop15.replace(/usb:usb:af\(.+\)/i, 'olb');
        if (s.prop24 && s.prop24.match(/usb:af\(.+\)/i)) s.prop24 = s.prop24.replace(/olb:usb:af\(.+\)/i, 'olb');
        if (s.prop29 && s.prop29.match(/usb\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/usb\/af\(.+\)/i, '');
        if (s.prop31 && s.prop31.match(/usb:af\(.+\)/i)) s.prop31 = s.prop31.replace(/usb:usb:af\(.+\)/i, 'olb');
    }
    if (s.pageURL.match(/OLS\/af\(.+\)/i)) {
        s.pageURL = s.pageURL.replace(/\af\(.+\)\//i, '');
        if (s.prop24 && s.prop24.match(/ols:af\(.+\)/i)) s.prop24 = s.prop24.replace(/:af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/OLS\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
    }
    if (s.pageURL.match(/OLMM\/af\(.+\)/i)) {
        s.pageURL = s.pageURL.replace(/\af\(.+\)\//i, '');
        if (s.prop24 && s.prop24.match(/OLMM:af\(.+\)/i)) s.prop24 = s.prop24.replace(/:af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/OLMM\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
    }
    if (s.pageURL.match(/CM\/af\(.+\)/i)) {
        s.pageURL = s.pageURL.replace(/\af\(.+\)\//i, '');
        if (s.prop24 && s.prop24.match(/CM:af\(.+\)/i)) s.prop24 = s.prop24.replace(/:af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/CM\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
    }
    if (s.pageURL.match(/onlinebanking.usbank.com/i)) {
        if (s.prop15 && s.prop15.match(/usb/i)) s.prop15 = s.prop15.replace(/usb/i, 'olb');
        if (s.prop24 && s.prop24.match(/usb:usb/i)) s.prop24 = s.prop24.replace(/usb:usb/i, 'olb');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:ccap:af\(.+\)/i, 'olb:ccap');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:auth:af\(.+\)/i, 'olb:auth');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:mm:af\(.+\)/i, 'olb:mm');
        if (s.prop29 && s.prop29.match(/CCAP\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/auth\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/MM\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop31 && s.prop31.match(/usb/i)) s.prop31 = s.prop31.replace(/usb/i, 'olb');
    }
    if (s.pageURL.match(/onlinebanking2.usbank.com/i)) {
        if (s.prop15 && s.prop15.match(/usb/i)) s.prop15 = s.prop15.replace(/usb/i, 'olb');
        if (s.prop24 && s.prop24.match(/usb:usb/i)) s.prop24 = s.prop24.replace(/usb:usb/i, 'olb');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:ccap:af\(.+\)/i, 'olb:ccap');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:auth:af\(.+\)/i, 'olb:auth');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:mm:af\(.+\)/i, 'olb:mm');
        if (s.prop29 && s.prop29.match(/CCAP\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/auth\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/MM\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop31 && s.prop31.match(/usb/i)) s.prop31 = s.prop31.replace(/usb/i, 'olb');
    }
    if (s.pageURL.match(/onlinebanking.us.bank-dns.com/i)) {
        if (s.prop15 && s.prop15.match(/usb/i)) s.prop15 = s.prop15.replace(/usb/i, 'olb');
        if (s.prop24 && s.prop24.match(/usb:usb/i)) s.prop24 = s.prop24.replace(/usb:usb/i, 'olb');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:ccap:af\(.+\)/i, 'olb:ccap');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:auth:af\(.+\)/i, 'olb:auth');
        if (s.prop24 && s.prop24.match(/olb/i)) s.prop24 = s.prop24.replace(/olb:MM:af\(.+\)/i, 'olb:mm');
        if (s.prop29 && s.prop29.match(/CCAP\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/auth\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop29 && s.prop29.match(/MM\/af\(.+\)/i)) s.prop29 = s.prop29.replace(/\/af\(.+\)/i, '');
        if (s.prop31 && s.prop31.match(/usb/i)) s.prop31 = s.prop31.replace(/usb/i, 'olb');
    }
    s.prop14 = s.eVar90 = "D=g";

    /* Plug-ins and Global Settings */
    s.prop18 = s.getDaysSinceLastVisit('s_lv');
    s.eVar3 = s.getNewRepeat(2000);
    s.prop3 = "D=v3";
    s.prop19 = s.getVisitNum(2000);
    /* Landing Page Event */
    var s_visitStart = s.getVisitStart('sc_visit_start');
    if (s_visitStart == 1 || s_visitStart == "1") {
        s.events = s.apl(s.events, "event15", ",", 2);
    }
    /* 2nd Page of Visit */
    var s_visitFirst = s.getPreviousValue(s_visitStart, "s_visitStart");
    if (s_visitFirst == 1 || s_visitFirst == "1") {
        s.events = s.apl(s.events, "event16", ",", 2);
    }
    /* Percent Page Viewed */
    s.prop17 = s.getPreviousValue(s.pageName ? s.pageName : s.prop24, "s_prevPage");
    s.prop17 = s.prop17 ? s.prop17.replace(/:af\([^:]*/g, '') : '';
    if (s.prop17) {
        var s_ppv = s.getPercentPageViewed();
        s.prop16 = s_ppv[1];
    }

    if (s.linkType == "e") {
        s.prop17 = s.getPreviousValue(s.pageName ? s.pageName : s.prop24, "s_prevPage");
        s.prop17 = s.prop17 ? s.prop17.replace(/:af\([^:]*/g, '') : '';
        if (s.prop17) {
            s.linkTrackVars = 'prop15,prop17';
            s.prop16 = s.getPercentPageViewed();
        }
    }
    /* Time Parting - Central */
    s.prop4 = s.getTimeParting('h', '-6');
    s.prop6 = s.getTimeParting('d', '-6');
    /* User's Date MM/DD/YYYY */
    var SCdate = new Date();
    s.prop7 = (SCdate.getMonth() + 1) + "/" + SCdate.getDate() + "/" + SCdate.getFullYear();
    /* Site Section */
    if (s.prop2 && !s.eVar40) s.eVar40 = s.prop2;
    /* Product View (custom) Event */
    /* if(s.events&&s.events.indexOf('prodView')>-1&&s.events.indexOf('event6,')<0)s.events=s.apl(s. events,"event6",",",2); */
    /* s_code Version */
    s.prop50 = window.visitor && window.visitor.version ? sc_code_ver + "|Vid_" + window.visitor.version : sc_code_ver + "|Vid_NA"; //defined: line 3
    /* Added below if condition to support Target migrate the library from mbox.js to at.js */
    /* Removed outer if condition */
    /* Change done on Jan 19 2017 */
    if (!s.eVar27) {
        var pcId = document.cookie.match(/PC#[^#]*/g);
        s.eVar27 = pcId ? pcId[0].split('#')[1] : '';
    }
    s.tnt = s.trackTNT();
    /* setting prop39 based on EN/EASNonce cookie */
    if (s.c_r("EN")) {
        s.prop39 = 'remember me enabled';
    }

    if (!s.prop39) {
        var temp = s.c_r("EASNonce");
        if (temp) {
            s.prop39 = 'remember me enabled';
        }
    }

    if (s.prop17.match(/mobile/i) || (s.prop24.match(/svilogin/i))) {
        s.prop40 = "mobile";
    } else if (s.prop29.match(/CCAP/i) && s.prop24.match(/login assistance/i)) {
        s.prop40 = "mobile";
    }

    var ua = navigator.userAgent;
    if (!ua) {
        ua = "device unknown";
    }
    var device_name = "";
    var device_type = "";
    var device_auth_type = "";
    var checker = {
        iphone: ua.match(/iPhone/),
        ipad: ua.match(/iPad/),
        android: ua.match(/Android/),
        windowsPhone: ua.match(/Windows Phone/),
        blackBerry: ua.match(/BlackBerry/)
    };
    // order matters for USBAPP
    if (window.deviceAuthType) {
        var device_auth_type_split = window.deviceAuthType.split(":");
        device_auth_type = device_auth_type_split[1];
        device_auth_type = device_auth_type.toLowerCase();
        s.contextData['device_auth_type'] = device_auth_type;

        if (window.deviceAuthType == "mobile: USBAPP") {
            if (checker.android) {
                device_name = "app:android";
                device_type = "android";
            } else if (checker.ipad) {
                device_name = "app:ipad";
                device_type = "ipad";
            } else if (checker.iphone) {
                device_name = "app:iphone";
                device_type = "iphone"
            }

            s.prop1 = "mobile app";
            s.eVar71 = s.prop30 = device_name;
            s.eVar40 = s.prop2 = device_type + device_auth_type;
            s.contextData['device_auth_type_full'] = window.deviceAuthType.toLowerCase();
        } else if (window.deviceAuthType == "mobile: APP") {

            if (checker.android) {
                device_name = "app:android";
                device_type = "android";
            } else if (checker.ipad) {
                device_name = "app:ipad";
                device_type = "ipad";
            } else if (checker.iphone) {
                device_name = "app:iphone";
                device_type = "iphone"
            }

            s.prop1 = "mobile app";
            s.eVar71 = s.prop30 = device_name;
            s.eVar40 = s.prop2 = device_type + device_auth_type;
            s.contextData['device_auth_type_full'] = window.deviceAuthType.toLowerCase();
        } else if (window.deviceAuthType == "mobile: WAP") {

            s.eVar40 = s.prop2 = "wapbase secured";
            if (checker.android) {
                device_name = "wap:android";
                device_type = "android";
            } else if (checker.ipad) {
                device_name = "wap:ipad";
                device_type = "ipad";
            } else if (checker.iphone) {
                device_name = "wap:iphone";
                device_type = "iphone"
            } else if (checker.windowsPhone) {
                device_name = "wap:windowsPhone";
                device_type = "windows phone";
            } else if (checker.blackBerry) {
                device_name = "wap:blackBerry";
                device_type = "blackBerry";
            } else {
                device_name = "wap:other";
            }

            s.prop1 = "mobile wap";
            s.eVar71 = s.prop30 = device_name;
            if (device_type) {
                s.eVar40 = s.prop2 = "waptouch secured";
            }
            s.contextData['device_auth_type_full'] = window.deviceAuthType.toLowerCase();
        } else if (window.deviceAuthType == "mobile: TOUCH") {
            s.eVar40 = s.prop2 = "wapbase secured";
            if (checker.android) {
                device_name = "wap:android";
                device_type = "android";
            } else if (checker.ipad) {
                device_name = "wap:ipad";
                device_type = "ipad";
            } else if (checker.iphone) {
                device_name = "wap:iphone";
                device_type = "iphone"
            } else if (checker.windowsPhone) {
                device_name = "wap:windowsPhone";
                device_type = "windows phone";
            } else if (checker.blackBerry) {
                device_name = "wap:blackBerry";
                device_type = "blackBerry";
            } else {
                device_name = "wap:other";
            }

            s.prop1 = "mobile wap";
            s.eVar71 = s.prop30 = device_name;
            if (device_type) {
                s.eVar40 = s.prop2 = "waptouch secured";
            }
            s.contextData['device_auth_type_full'] = window.deviceAuthType.toLowerCase();
        } else if (window.deviceAuthType == "mobile: Touch") {
            s.eVar40 = s.prop2 = "wapbase secured";
            if (checker.android) {
                device_name = "wap:android";
                device_type = "android";
            } else if (checker.ipad) {
                device_name = "wap:ipad";
                device_type = "ipad";
            } else if (checker.iphone) {
                device_name = "wap:iphone";
                device_type = "iphone"
            } else if (checker.windowsPhone) {
                device_name = "wap:windowsPhone";
                device_type = "windows phone";
            } else if (checker.blackBerry) {
                device_name = "wap:blackBerry";
                device_type = "blackBerry";
            } else {
                device_name = "wap:other";
            }

            s.prop1 = "mobile wap";
            s.eVar71 = s.prop30 = device_name;
            if (device_type) {
                s.eVar40 = s.prop2 = "waptouch secured";
            }
            s.contextData['device_auth_type_full'] = window.deviceAuthType.toLowerCase();
        } else if ((window.deviceAuthType && (window.deviceAuthType != ("mobile: USBAPP" || "mobile: APP" || "mobile: WAP" || "mobile: TOUCH" || "mobile: Touch")))) {
            s.prop1 = "mobile unknown";
            s.eVar71 = s.prop30 = "device unknown";
            s.eVar40 = s.prop2 = "unknown";
            s.contextData['device_auth_type_full'] = window.deviceAuthType.toLowerCase();
        }
    }

    //Grabbing Client Segment Code from CommonDataHelper Object if present

    if (typeof CommonDataHelper != 'undefined') {
        if (CommonDataHelper.UserAndAccountsFromServer.UserInfoResponse.CustomerTypeCode) {
            cd.clientSegmentCode = CommonDataHelper.UserAndAccountsFromServer.UserInfoResponse.CustomerTypeCode;
        }

    }

    //responsive code for processing rules
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    s.contextData['et_dimensions'] = width + 'x' + height;
    s.contextData['et_width'] = width;
    var etratio = height / width;
    if (etratio >= 1) {
        s.contextData['et_orientation'] = "portrait";
    } else {
        s.contextData['et_orientation'] = "landscape";
    }

    for (var cdVar in cd) {
        if (cd.hasOwnProperty(cdVar)) { // check that item is a property of omn

            s.contextData['cd.' + cdVar] = cd[cdVar];
        }
    }

    if (cd.events) {
        s.events = s.apl(s.events, cd.events, ",", 2);
    }
    s.contextData['EVENTS'] = s.events ? s.events + ',' : '';

    if (localStorage && localStorage.omniiphonemid) {
        s.marketingCloudVisitorID = localStorage.omniiphonemid || "";
        s.analyticsVisitorID = localStorage.omniiphoneaid || "";
        s.eVar8 = localStorage.omniiphonelpid || "";
        s.prop30 = localStorage.omniapptype || ""
    }
    if (s.c_r("mid") && (s.c_r("apptype") == "app:iphone rebranded" || s.c_r("apptype") == "app:android rebranded")) {
        s.marketingCloudVisitorID = s.c_r("mid") || "";
        s.analyticsVisitorID = s.c_r("aid") || "";
        s.prop30 = s.c_r("apptype") || ""
    }   

   
}

s.doPlugins = s_doPlugins;



//Clear Context Function

s.clearContext = new Function("", "" + "var s=this;for(var cvr in cd){if(cd.hasOwnProperty(cvr)){delete cd[" + "cvr];}}for(var svr in s.contextData){if(s.contextData.hasOwnPropert" + "y(svr)){delete s.contextData[svr];}}");

/*
 * Cookie Combining Utility v.5
 */

if (!s.__ccucr) {
    s.c_rr = s.c_r;
    s.__ccucr = true;

    function c_r(k) {
        var s = this,
            d = new Date,
            v = s.c_rr(k),
            c = s.c_rspers(),
            i, m, e;
        if (v) return v;
        k = s.escape ? s.escape(k) : encodeURIComponent(k);
        i = c.indexOf(' ' + k + '=');
        c = i < 0 ? s.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '=');
        m = i < 0 ? i : c.indexOf('|', i);
        e = i < 0 ? i : c.indexOf(';', i);
        m = m > 0 ? m : e;
        v = i < 0 ? '' : s.unescape ? s.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m)) : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        return v;
    }

    function c_rspers() {
        var s = this,
            cv = s.c_rr("s_pers"),
            date = new Date().getTime(),
            expd = null,
            cvarr = [],
            vcv = "";
        if (!cv) return vcv;
        cvarr = cv.split(";");
        for (var i = 0, l = cvarr.length; i < l; i++) {
            expd = cvarr[i].match(/\|([0-9]+)$/);
            if (expd && parseInt(expd[1]) >= date) {
                vcv += cvarr[i] + ";";
            }
        }
        return vcv;
    }
    s.c_rspers = c_rspers;
    s.c_r = s.cookieRead = c_r;
}
if (!s.__ccucw) {
    s.c_wr = s.c_w;
    s.__ccucw = true;

    function c_w(k, v, e) {
        var s = this,
            d = new Date,
            ht = 0,
            pn = 's_pers',
            sn = 's_sess',
            pc = 0,
            sc = 0,
            pv, sv, c, i, t, f;
        d.setTime(d.getTime() - 60000);
        if (s.c_rr(k)) s.c_wr(k, '', d);
        k = s.escape ? s.escape(k) : encodeURIComponent(k);
        pv = s.c_rspers();
        i = pv.indexOf(' ' + k + '=');
        if (i > -1) {
            pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
            pc = 1;
        }
        sv = s.c_rr(sn);
        i = sv.indexOf(' ' + k + '=');
        if (i > -1) {
            sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
            sc = 1;
        }
        d = new Date;
        if (e) {
            if (e == 1) e = new Date, f = e.getYear(), e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
            if (e.getTime() > d.getTime()) {
                pv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + '|' + e.getTime() + ';';
                pc = 1;
            }
        } else {
            sv += ' ' + k + '=' + (s.escape ? s.escape(v) : encodeURIComponent(v)) + ';';
            sc = 1;
        }
        sv = sv.replace(/%00/g, '');
        pv = pv.replace(/%00/g, '');
        if (sc) s.c_wr(sn, sv, 0);
        if (pc) {
            t = pv;
            while (t && t.indexOf(';') != -1) {
                var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
                t = t.substring(t.indexOf(';') + 1);
                ht = ht < t1 ? t1 : ht;
            }
            d.setTime(ht);
            s.c_wr(pn, pv, d);
        }
        return v == s.c_r(s.unescape ? s.unescape(k) : decodeURIComponent(k));
    }
    s.c_w = s.cookieWrite = c_w;
}
/*
 * getQueryParam v2.5 - H-code and AppMeasurement Compatible
 */
s.getQueryParam = new Function("p", "d", "u", "h", "" + "var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:(s.wd?s.w" + "d.location:window.location));while(p){i=p.indexOf(',');i=i<0?p.leng" + "th:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#')>-1?t" + ".substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p." + "length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "h", "" + "var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub" + "string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", "" + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." + "epa?s.epa(v):s.unescape(v);}return''");
/*
 * TNT Integration Plugin v2.0
 */
s.trackTNT = new Function("v", "p", "b", "" + "var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false" + ",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get" + "QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c" + "ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(" + "(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in" + "dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B" + "ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:" + "00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara" + "m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp" + "ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util." + "getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi" + "ned)r+=window[v];if(b)window[v]='';return r;");
/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit = new Function("c", "" + "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT" + "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s" + "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f" + "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f" + "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);" + "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da" + "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day" + "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s." + "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c" + "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c" + "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur" + "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s" + "!=f5) return '';else return cval_s;");
/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
/*
 * Plugin: getVisitStart v2.0 - returns 1 on 1st page of visit, else 0
 */
s.getVisitStart = new Function("c", "" + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c" + ")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");
/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue = new Function("v", "c", "e", "" + "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(" + "v)s.c_w(c,v,e?a:0);return s.c_r(c);");
/* Copies variables from one object into another */
s.scCopy = new Function("src", "dest", "" + "for (i in src)dest[i]=src[i];");
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce = new Function("v", "c", "e", "" + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(" + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/* Plugin: getPreviousValue_v1.0 - return previous value of designated */
s.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
 * Plugin: getPercentPageViewed 2.0 (Minified)
 */
s.handlePPVevents = function () {
    if (!s_c_il) return;
    for (var i = 0, scill = s_c_il.length; i < scill; i++)
        if (typeof s_c_il[i] != "undefined" && s_c_il[i]._c && s_c_il[i]._c == "s_c") {
            var s = s_c_il[i];
            break
        }
    if (!s) return;
    if (!s.getPPVid) return;
    var dh = Math.max(Math.max(s.d.body.scrollHeight, s.d.documentElement.scrollHeight), Math.max(s.d.body.offsetHeight, s.d.documentElement.offsetHeight), Math.max(s.d.body.clientHeight, s.d.documentElement.clientHeight)),
        vph = window.innerHeight || (s.d.documentElement.clientHeight || s.d.body.clientHeight),
        st = window.pageYOffset || (window.document.documentElement.scrollTop || window.document.body.scrollTop),
        vh = st + vph,
        pv = Math.min(Math.round(vh / dh * 100), 100),
        c = "";
    if (!s.c_r("tp") || decodeURIComponent(s.c_r("s_ppv").split(",")[0]) != s.getPPVid || s.ppvChange == "1" && (s.c_r("tp") && dh != s.c_r("tp"))) {
        s.c_w("tp", dh);
        s.c_w("s_ppv", "")
    } else c = s.c_r("s_ppv");
    var a = c && c.indexOf(",") > -1 ? c.split(",", 4) : [],
        id = a.length > 0 ? a[0] : escape(s.getPPVid),
        cv = a.length > 1 ? parseInt(a[1]) : 0,
        p0 = a.length > 2 ? parseInt(a[2]) : pv,
        cy = a.length > 3 ? parseInt(a[3]) :
            0,
        cn = pv > 0 ? id + "," + (pv > cv ? pv : cv) + "," + p0 + "," + (vh > cy ? vh : cy) : "";
    s.c_w("s_ppv", cn)
};
s.getPercentPageViewed = function (pid, change) {
    var s = this,
        ist = !s.getPPVid ? true : false;
    pid = pid ? pid : s.pageName ? s.pageName : document.location.href;
    s.ppvChange = change ? change : "1";
    if (typeof s.linkType != "undefined" && s.linkType != "0" && s.linkType != "" && s.linkType != "e") return "";
    var v = s.c_r("s_ppv"),
        a = v.indexOf(",") > -1 ? v.split(",", 4) : [];
    if (a && a.length < 4) {
        for (var i = 3; i > 0; i--) a[i] = i < a.length ? a[i - 1] : "";
        a[0] = ""
    }
    if (a) a[0] = unescape(a[0]);
    if (!s.getPPVid || s.getPPVid != pid) {
        s.getPPVid = pid;
        s.c_w("s_ppv", escape(s.getPPVid));
        s.handlePPVevents()
    }
    if (ist)
        if (window.addEventListener) {
            window.addEventListener("load",
                s.handlePPVevents, false);
            window.addEventListener("click", s.handlePPVevents, false);
            window.addEventListener("scroll", s.handlePPVevents, false);
            window.addEventListener("resize", s.handlePPVevents, false)
        } else if (window.attachEvent) {
            window.attachEvent("onload", s.handlePPVevents);
            window.attachEvent("onclick", s.handlePPVevents);
            window.attachEvent("onscroll", s.handlePPVevents);
            window.attachEvent("onresize", s.handlePPVevents)
        }
    return pid != "-" ? a : a[1]
};
/*
 * Plugin: getTimeParting 2.0
 */
s.getTimeParting = new Function("t", "z", "y", "l", "" + "var s=this,d,A,U,X,Z,W,B,C,D,Y,mint;d=new Date();A=d.getFullYear();Y=U=S" + "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U" + ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801" + "|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z" + "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin" + "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D" + "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat" + "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new" + " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g" + "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo" + "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get" + "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='" + "00';if(C>=15&&C<30){X='15'}if(C>=30&&C<45){X='30'}if(C>=45&&C<60){X='45'}" + "if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6" + "||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab" + "le'}else{if(t){if(t=='m'){mint=B+':'+C+U;return mint}if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r" + "eturn A}}else{return Z+', '+W}}}");
/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName = new Function("u", "" + "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/'," + "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s." + "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub" + "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i" + "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d" + "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;" + "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p." + "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x" + ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s" + "ubstring(x+1)}return n");
/* s.join: 1.0 - s.join(v,p)*/
s.join = new Function("v", "p", "" + "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" + ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" + ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" + "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
/* Utility Function: p_c */
s.p_c = new Function("v", "c", "" + "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le" + "ngth:x).toLowerCase()?v:0");
/*
 * Plugin Utility: apl v1.1
 */
s.apl = new Function("l", "v", "d", "u", "" + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a." + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" + "e()));}}if(!m)l=l?l+d+v:v;return l");
/*
 * Plugin Utility: Replace v1.0
 */
s.repl = new Function("x", "o", "n", "" + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." + "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Partner Plugin: DFA Check 1.0 - Restrict DFA calls to once a visit, per report suite, per click
 * through. Used in conjunction with VISTA. Deduplicates SCM hits.
 */

s.partnerDFACheck = new Function("cfg", "" + "var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new A" + "rray;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn" + "]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}if(s.wd)q=s.wd.location.search.toLowerCase();else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLow" + "erCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}r" + "eturn v>=1;");

/*
 * Utility Function: vpr - set the variable vs with value v
 */
s.vpr = new Function("vs", "v",
    "if(typeof(v)!='undefined' && vs){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

/*
 *first load only plugin
 */
s.p_fo = new Function("n", "" + "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=" + "new Object;return 1;}else {return 0;}");
/*
 * Plugin: getVisitNum - version 3.0
 */
s.getVisitNum = new Function("tp", "c", "c2", "" + "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" + "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" + "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" + "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" + "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" + "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" + "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" + "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" + "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" + ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo = new Function("m", "y", "" + "var d=new Date(y,m+1,0);return d.getDate();");
s.endof = new Function("x", "" + "var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==" + "'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" + "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " + "t;");

s.wd = window;
s.fl = new Function("x", "l", "" + "return x?(''+x).substring(0,l):x");
s.pt = new Function("x", "d", "f", "a", "" + "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t" + ".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri" + "ng(z,x.length);t=z<x.length?t:''}return'';");

/* Configure Modules and Plugins */

/************************** DFA VARIABLES **************************/
/* @TODO: Fill in these variables with the settings mapped in the
 * DFA wizard and that match your desired preferences. Some of the
 * variables are optional and have been labeled as such below.
 * @TODO: Comments should be removed in a production deployment. */
var dfaConfig = {
    CSID: '1521091', // DFA Client Site ID
    SPOTID: '3033967', // DFA Spotlight ID
    tEvar: 'eVar57', // Transfer variable, typically the "View Through" eVar.
    errorEvar: 'eVar59', // DFA error tracking (optional)
    timeoutEvent: 'event64', // Tracks timeouts/empty responses (optional)
    requestURL: "http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]", // the DFA request URL
    maxDelay: "2500", // The maximum time to wait for DFA servers to respond, in milliseconds.
    visitCookie: "s_dfa", // The name of the visitor cookie to use to restrict DFA calls to once per visit.
    clickThroughParam: "CID", // A query string paramter that will force the DFA call to occur.
    searchCenterParam: "s_kwcid", // SearchCenter identifier.
    newRsidsProp: undefined //"prop34" // Stores the new report suites that need the DFA tracking code. (optional)
};
/************************ END DFA Variables ************************/
s.maxDelay = dfaConfig.maxDelay;

window.AppMeasurement_Module_Integrate = function(l) {
    
    var c = this;
    c.s = l;
    var e = window;
    e.s_c_in || (e.s_c_il = [], e.s_c_in = 0);
    c._il = e.s_c_il;
    c._in = e.s_c_in;
    c._il[c._in] = c;
    e.s_c_in++;
    c._c = "s_m";
    c.list = [];
    c.add = function (d, b) {
        var a;
        b || (b = "s_Integrate_" + d);
        e[b] || (e[b] = {});
        a = c[d] = e[b];
        a.a = d;
        a.e = c;
        a._c = 0;
        a._d = 0;
        void 0 == a.disable && (a.disable = 0);
        a.get = function (b, d) {
            var f = document,
                h = f.getElementsByTagName("HEAD"),
                k;
            if (!a.disable && (d || (v = "s_" + c._in + "_Integrate_" + a.a + "_get_" + a._c), a._c++ , a.VAR = v, a.CALLBACK = "s_c_il[" + c._in + "]." +
                a.a + ".callback", a.delay(), h = h && 0 < h.length ? h[0] : f.body)) try {
                    k = f.createElement("SCRIPT"), k.type = "text/javascript", k.setAttribute("async", "async"), k.src = c.c(a, b), 0 > b.indexOf("[CALLBACK]") && (k.onload = k.onreadystatechange = function () {
                        a.callback(e[v])
                    }), h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k)
                } catch (l) { }
        };
        a.callback = function (b) {
            var c;
            if (b)
                for (c in b) Object.prototype[c] || (a[c] = b[c]);
            a.ready()
        };
        a.beacon = function (b) {
            var d = "s_i_" + c._in + "_Integrate_" + a.a + "_" + a._c;
            a.disable || (a._c++ , d = e[d] =
                new Image, d.src = c.c(a, b))
        };
        a.script = function (b) {
            a.get(b, 1)
        };
        a.delay = function () {
            a._d++
        };
        a.ready = function () {
            a._d--;
            a.disable || l.delayReady()
        };
        c.list.push(d)
    };
    c._g = function (d) {
        var b, a = (d ? "use" : "set") + "Vars";
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && b[a]) try {
                b[a](l, b)
            } catch (e) { }
    };
    c._t = function () {
        c._g(1)
    };
    c._d = function () {
        var d, b;
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && 0 < b._d) return 1;
        return 0
    };
    c.c = function (c, b) {
        var a, e, g, f;
        "http" != b.toLowerCase().substring(0, 4) &&
            (b = "http://" + b);
        l.ssl && (b = l.replace(b, "http:", "https:"));
        c.RAND = Math.floor(1E13 * Math.random());
        for (a = 0; 0 <= a;) a = b.indexOf("[", a), 0 <= a && (e = b.indexOf("]", a), e > a && (g = b.substring(a + 1, e), 2 < g.length && "s." == g.substring(0, 2) ? (f = l[g.substring(2)]) || (f = "") : (f = "" + c[g], f != c[g] && parseFloat(f) != c[g] && (g = 0)), g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)), a = e));
        return b
    }
}

s.loadModule("Integrate");
s.Integrate.onLoad = function (s, m) {
    var dfaCheck = s.partnerDFACheck(dfaConfig);
    if (dfaCheck) {
        s.Integrate.add("DFA");
        s.Integrate.DFA.tEvar = dfaConfig.tEvar;
        s.Integrate.DFA.errorEvar = dfaConfig.errorEvar;
        s.Integrate.DFA.timeoutEvent = dfaConfig.timeoutEvent;
        s.Integrate.DFA.CSID = dfaConfig.CSID;
        s.Integrate.DFA.SPOTID = dfaConfig.SPOTID;
        s.Integrate.DFA.get(dfaConfig.requestURL);
        s.Integrate.DFA.setVars = function (s, p) {
            if (window[p.VAR]) { // got a response
                if (!p.ec) { // no errors
                    s[p.tEvar] = "DFA-" + (p.lis ? p.lis : 0) + "-" + (p.lip ? p.lip : 0) + "-" + (p.lastimp ? p.lastimp : 0) + "-" + (p.lastimptime ? p.lastimptime : 0) + "-" + (p.lcs ? p.lcs : 0) + "-" + (p.lcp ? p.lcp : 0) + "-" + (p.lastclk ? p.lastclk : 0) + "-" + (p.lastclktime ? p.lastclktime : 0)
                } else if (p.errorEvar) { // got an error response, track
                    s[p.errorEvar] = p.ec;
                }
            } else if (p.timeoutEvent) { // empty response or timeout
                s.events = ((!s.events || s.events == '') ? '' : (s.events + ',')) + p.timeoutEvent; // timeout event
            }
        }
    }
}

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
window.AppMeasurement_Module_ActivityMap = function(h) {
    function q() { var a = f.pageYOffset + (f.innerHeight || 0); a && a > +g && (g = a) } function r() { if (e.scrollReachSelector) { var a = h.d.querySelector && h.d.querySelector(e.scrollReachSelector); a ? (g = a.scrollTop || 0, a.addEventListener("scroll", function () { var d; (d = a && a.scrollTop + a.clientHeight || 0) > g && (g = d) })) : 0 < w-- && setTimeout(r, 1E3) } } function l(a, d) { var c, b, n; if (a && d && (c = e.c[d] || (e.c[d] = d.split(",")))) for (n = 0; n < c.length && (b = c[n++]);)if (-1 < a.indexOf(b)) return null; p = 1; return a }
    function s(a, d, c, b, e) { var f, k; if (a.dataset && (k = a.dataset[d])) f = k; else if (a.getAttribute) if (k = a.getAttribute("data-" + c)) f = k; else if (k = a.getAttribute(c)) f = k; if (!f && h.useForcedLinkTracking && e) { var g; a = a.onclick ? "" + a.onclick : ""; varValue = ""; if (b && a && (d = a.indexOf(b), 0 <= d)) { for (d += b.length; d < a.length;)if (c = a.charAt(d++), 0 <= "'\"".indexOf(c)) { g = c; break } for (k = !1; d < a.length && g;) { c = a.charAt(d); if (!k && c === g) break; "\\" === c ? k = !0 : (varValue += c, k = !1); d++ } } (g = varValue) && (h.w[b] = g) } return f || e && h.w[b] } function t(a, d,
        c) { var b; return (b = e[d](a, c)) && (p ? (p = 0, b) : l(m(b), e[d + "Exclusions"])) } function u(a, d, c) { var b; if (a && !(1 === (b = a.nodeType) && (b = a.nodeName) && (b = b.toUpperCase()) && x[b]) && (1 === a.nodeType && (b = a.nodeValue) && (d[d.length] = b), c.a || c.t || c.s || !a.getAttribute || ((b = a.getAttribute("alt")) ? c.a = b : (b = a.getAttribute("title")) ? c.t = b : "IMG" == ("" + a.nodeName).toUpperCase() && (b = a.getAttribute("src") || a.src) && (c.s = b)), (b = a.childNodes) && b.length)) for (a = 0; a < b.length; a++)u(b[a], d, c) } function m(a) {
            if (null == a || void 0 == a) return a;
            try { return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254) } catch (d) { }
        } var e = this; e.s = h; var f = window; f.s_c_in || (f.s_c_il = [], f.s_c_in = 0); e._il = f.s_c_il; e._in = f.s_c_in; e._il[e._in] = e; f.s_c_in++;
    e._c = "s_m"; var g = 0, v, w = 60; e.c = {}; var p = 0, x = { SCRIPT: 1, STYLE: 1, LINK: 1, CANVAS: 1 }; e._g = function () { var a, d, c, b = h.contextData, e = h.linkObject; (a = h.pageName || h.pageURL) && (d = t(e, "link", h.linkName)) && (c = t(e, "region")) && (b["a.activitymap.page"] = a.substring(0, 255), b["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, b["a.activitymap.region"] = 127 < c.length ? c.substring(0, 127) : c, 0 < g && (b["a.activitymap.xy"] = 10 * Math.floor(g / 10)), b["a.activitymap.pageIDType"] = h.pageName ? 1 : 0) }; e.e = function () {
    e.trackScrollReach &&
        !v && (e.scrollReachSelector ? r() : (q(), f.addEventListener && f.addEventListener("scroll", q, !1)), v = !0)
    }; e.link = function (a, d) {
        var c; if (d) c = l(m(d), e.linkExclusions); else if ((c = a) && !(c = s(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
            var b, f; (f = l(m(a.innerText || a.textContent), e.linkExclusions)) || (u(a, b = [], c = { a: void 0, t: void 0, s: void 0 }), (f = l(m(b.join("")))) || (f = l(m(c.a ? c.a : c.t ? c.t : c.s ? c.s : void 0))) || !(b = (b = a.tagName) && b.toUpperCase ? b.toUpperCase() : "") || ("INPUT" == b || "SUBMIT" == b && a.value ? f = l(m(a.value)) : "IMAGE" ==
                b && a.src && (f = l(m(a.src))))); c = f
        } return c
    }; e.region = function (a) { for (var d, c = e.regionIDAttribute || "id"; a && (a = a.parentNode);) { if (d = s(a, c, c, c)) return d; if ("BODY" == a.nodeName) return "BODY" } }
}
/* End ActivityMap Module */

/****************************** MODULES *****************************/

window.AppMeasurement_Module_AudienceManagement = function(d) {
    var a = this;
    a.s = d;
    var b = window;
    b.s_c_in || (b.s_c_il = [], b.s_c_in = 0);
    a._il = b.s_c_il;
    a._in = b.s_c_in;
    a._il[a._in] = a;
    b.s_c_in++;
    a._c = "s_m";
    a.setup = function (c) {
        b.DIL && c && (c.disableDefaultRequest = !0, c.disableScriptAttachment = !0, a.instance = b.DIL.create(c), a.tools = b.DIL.tools)
    };
    a.isReady = function () {
        return a.instance ? !0 : !1
    };
    a.getEventCallConfigParams = function () {
        return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams ? a.instance.api.getEventCallConfigParams() : {}
    };
    a.passData = function (b) {
        a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b)
    }
}

s.loadModule("AudienceManagement");

"function" !== typeof window.DIL && (window.DIL = function (a, c) {
    var d = [],
        b, g;
    a !== Object(a) && (a = {});
    var f, k, n, u, s, m, p, y, x, J, K, D;
    f = a.partner;
    k = a.containerNSID;
    n = !!a.disableDestinationPublishingIframe;
    u = a.iframeAkamaiHTTPS;
    s = a.mappings;
    m = a.uuidCookie;
    p = !0 === a.enableErrorReporting;
    y = a.visitorService;
    x = a.declaredId;
    J = !0 === a.removeFinishedScriptsAndCallbacks;
    K = !0 === a.delayAllUntilWindowLoad;
    D = !0 === a.disableIDSyncs;
    var L, M, N, G, E, O, P, Q;
    L = !0 === a.disableScriptAttachment;
    M = !0 === a.disableCORSFiring;
    N = !0 === a.disableDefaultRequest;
    G = a.afterResultForDefaultRequest;
    E = a.dpIframeSrc;
    O = !0 === a.testCORS;
    P = !0 === a.useJSONPOnly;
    Q = a.visitorConstructor;
    p && DIL.errorModule.activate();
    var R = !0 === window._dil_unit_tests;
    (b = c) && d.push(b + "");
    if (!f || "string" !== typeof f) return b = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({
        name: "error",
        message: b,
        filename: "dil.js"
    }), Error(b);
    b = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
    if (k || "number" === typeof k) k = parseInt(k, 10), !isNaN(k) && 0 <= k && (b = "");
    b && (k = 0, d.push(b), b = "");
    g = DIL.getDil(f, k);
    if (g instanceof DIL && g.api.getPartner() === f && g.api.getContainerNSID() === k) return g;
    if (this instanceof DIL) DIL.registerDil(this, f, k);
    else return new DIL(a, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + f + " and containerNSID = " + k);
    var B = {
        IS_HTTPS: "https:" === document.location.protocol,
        POST_MESSAGE_ENABLED: !!window.postMessage,
        COOKIE_MAX_EXPIRATION_DATE: "Tue, 19 Jan 2038 03:14:07 UTC"
    }, H = {
        stuffed: {}
    }, l = {}, q = {
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
        num_of_cors_responses: 0,
        num_of_cors_errors: 0,
        corsErrorSources: [],
        num_of_img_responses: 0,
        num_of_img_errors: 0,
        toRemove: [],
        removed: [],
        readyToRemove: !1,
        platformParams: {
            d_nsid: k + "",
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
            process: function (e) {
                try {
                    if (!this.admsProcessingStarted) {
                        this.admsProcessingStarted = !0;
                        var t = this,
                            a, h, b, d, c;
                        if ("function" === typeof e && "function" === typeof e.getInstance) {
                            if (y === Object(y) && (a = y.namespace) && "string" === typeof a) h = e.getInstance(a, {
                                idSyncContainerID: k
                            });
                            else {
                                this.releaseType = "no namespace";
                                this.releaseRequests();
                                return
                            } if (h === Object(h) && "function" === typeof h.isAllowed && "function" === typeof h.getMarketingCloudVisitorID && "function" === typeof h.getCustomerIDs) {
                                if (!h.isAllowed()) {
                                    this.releaseType = "VisitorAPI not allowed";
                                    this.releaseRequests();
                                    return
                                }
                                this.instance = h;
                                b = function (e) {
                                    "VisitorAPI" !== t.releaseType && (t.mid = e, t.releaseType = "VisitorAPI", t.releaseRequests())
                                };
                                R && (d = y.server) && "string" === typeof d && (h.server = d);
                                c = h.getMarketingCloudVisitorID(b);
                                if ("string" ===
                                    typeof c && c.length) {
                                    b(c);
                                    return
                                }
                                setTimeout(function () {
                                    "VisitorAPI" !== t.releaseType && (t.releaseType = "timeout", t.releaseRequests())
                                }, this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);
                                return
                            }
                            this.releaseType = "invalid instance"
                        } else this.noVisitorAPI = !0;
                        this.releaseRequests()
                    }
                } catch (f) {
                    this.releaseRequests()
                }
            },
            releaseRequests: function(){},
            getMarketingCloudVisitorID: function () {
                return this.instance ? this.instance.getMarketingCloudVisitorID() : null
            },
            getMIDQueryString: function () {
                var e =
                    w.isPopulatedString,
                    t = this.getMarketingCloudVisitorID();
                e(this.mid) && this.mid === t || (this.mid = t);
                return e(this.mid) ? "d_mid=" + this.mid + "&" : ""
            },
            getCustomerIDs: function () {
                return this.instance ? this.instance.getCustomerIDs() : null
            },
            getCustomerIDsQueryString: function (e) {
                if (e === Object(e)) {
                    var t = "",
                        a = [],
                        h = [],
                        b, d;
                    for (b in e) e.hasOwnProperty(b) && (h[0] = b, d = e[b], d === Object(d) && (h[1] = d.id || "", h[2] = d.authState || 0, a.push(h), h = []));
                    if (h = a.length)
                        for (e = 0; e < h; e++) t += "&d_cid_ic=" + a[e].join("%01");
                    return t
                }
                return ""
            }
        },
        declaredId: {
            declaredId: {
                init: null,
                request: null
            },
            declaredIdCombos: {},
            setDeclaredId: function (e, t) {
                var a = w.isPopulatedString,
                    h = encodeURIComponent;
                if (e === Object(e) && a(t)) {
                    var b = e.dpid,
                        d = e.dpuuid,
                        c = null;
                    if (a(b) && a(d)) {
                        c = h(b) + "$" + h(d);
                        if (!0 === this.declaredIdCombos[c]) return "setDeclaredId: combo exists for type '" + t + "'";
                        this.declaredIdCombos[c] = !0;
                        this.declaredId[t] = {
                            dpid: b,
                            dpuuid: d
                        };
                        return "setDeclaredId: succeeded for type '" + t + "'"
                    }
                }
                return "setDeclaredId: failed for type '" + t + "'"
            },
            getDeclaredIdQueryString: function () {
                var e =
                    this.declaredId.request,
                    t = this.declaredId.init,
                    a = "";
                null !== e ? a = "&d_dpid=" + e.dpid + "&d_dpuuid=" + e.dpuuid : null !== t && (a = "&d_dpid=" + t.dpid + "&d_dpuuid=" + t.dpuuid);
                return a
            }
        },
        registerRequest: function (e) {
            var a = this.firingQueue;
            e === Object(e) && a.push(e);
            this.firing || !a.length || K && !DIL.windowLoaded || !this.adms.calledBack || (e = a.shift(), e.src = e.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() + "d_nsid="), w.isPopulatedString(e.corsPostData) && (e.corsPostData = e.corsPostData.replace(/^d_nsid=/,
                this.adms.getMIDQueryString() + "d_nsid=")), C.fireRequest(e), this.firstRequestHasFired || "script" !== e.tag && "cors" !== e.tag || (this.firstRequestHasFired = !0))
        },
        processVisitorAPI: function () {
            this.adms.process(Q || window.Visitor)
        },
        requestRemoval: function (e) {
            if (!J) return "removeFinishedScriptsAndCallbacks is not boolean true";
            var a = this.toRemove,
                r, h;
            e === Object(e) && (r = e.script, h = e.callbackName, (r === Object(r) && "SCRIPT" === r.nodeName || "no script created" === r) && "string" === typeof h && h.length && a.push(e));
            if (this.readyToRemove &&
                a.length) {
                h = a.shift();
                r = h.script;
                h = h.callbackName;
                "no script created" !== r ? (e = r.src, r.parentNode.removeChild(r)) : e = r;
                window[h] = null;
                try {
                    delete window[h]
                } catch (b) { }
                this.removed.push({
                    scriptSrc: e,
                    callbackName: h
                });
                DIL.variables.scriptsRemoved.push(e);
                DIL.variables.callbacksRemoved.push(h);
                return this.requestRemoval()
            }
            return "requestRemoval() processed"
        }
    };
    g = function () {
        var e = "http://fast.",
            a = "?d_nsid=" + k + "#" + encodeURIComponent(document.location.href);
        if ("string" === typeof E && E.length) return E + a;
        B.IS_HTTPS &&
            (e = !0 === u ? "https://fast." : "https://");
        return e + f + ".demdex.net/dest5.html" + a
    };
    var z = {
        THROTTLE_START: 3E4,
        throttleTimerSet: !1,
        id: "destination_publishing_iframe_" + f + "_" + k,
        url: g(),
        iframe: null,
        iframeHasLoaded: !1,
        sendingMessages: !1,
        messages: [],
        messagesPosted: [],
        messageSendingInterval: B.POST_MESSAGE_ENABLED ? 15 : 100,
        ibsDeleted: [],
        jsonProcessed: [],
        newIframeCreated: null,
        iframeIdChanged: !1,
        originalIframeHasLoadedAlready: null,
        attachIframe: function () {
            function e() {
                h = document.createElement("iframe");
                h.id = b.id;
                h.style.cssText =
                    "display: none; width: 0; height: 0;";
                h.src = b.url;
                b.newIframeCreated = !0;
                a();
                document.body.appendChild(h)
            }

            function a() {
                v.addListener(h, "load", function () {
                    h.className = "aamIframeLoaded";
                    b.iframeHasLoaded = !0;
                    b.requestToProcess()
                })
            }
            var b = this,
                h = document.getElementById(this.id);
            h ? "IFRAME" !== h.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== h.className ? (this.originalIframeHasLoadedAlready = !1, a()) : (this.iframeHasLoaded = this.originalIframeHasLoadedAlready = !0, this.requestToProcess())) : e();
            this.iframe = h
        },
        requestToProcess: function (e, a) {
            var b = this;
            e && !w.isEmptyObject(e) && this.process(e, a);
            this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function () {
                b.messageSendingInterval = B.POST_MESSAGE_ENABLED ? 15 : 150
            }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
        },
        process: function (e, a) {
            var b = encodeURIComponent,
                h, d, c, f, g, k;
            a === Object(a) && (k = v.encodeAndBuildRequest(["", a.dpid ||
                "", a.dpuuid || ""
            ], ","));
            if ((h = e.dests) && h instanceof Array && (d = h.length))
                for (c = 0; c < d; c++) f = h[c], f = [b("dests"), b(f.id || ""), b(f.y || ""), b(f.c || "")], this.addMessage(f.join("|"));
            if ((h = e.ibs) && h instanceof Array && (d = h.length))
                for (c = 0; c < d; c++) f = h[c], f = [b("ibs"), b(f.id || ""), b(f.tag || ""), v.encodeAndBuildRequest(f.url || [], ","), b(f.ttl || ""), "", k], this.addMessage(f.join("|"));
            if ((h = e.dpcalls) && h instanceof Array && (d = h.length))
                for (c = 0; c < d; c++) f = h[c], g = f.callback || {}, g = [g.obj || "", g.fn || "", g.key || "", g.tag || "", g.url ||
                    ""
                ], f = [b("dpm"), b(f.id || ""), b(f.tag || ""), v.encodeAndBuildRequest(f.url || [], ","), b(f.ttl || ""), v.encodeAndBuildRequest(g, ","), k], this.addMessage(f.join("|"));
            this.jsonProcessed.push(e)
        },
        addMessage: function (e) {
            var a = encodeURIComponent,
                a = p ? a("---destpub-debug---") : a("---destpub---");
            this.messages.push(a + e)
        },
        sendMessages: function () {
            var e = this,
                a;
            this.messages.length && this.iframe && this.iframe.contentWindow ? (a = this.messages.shift(), DIL.xd.postMessage(a, this.url, this.iframe.contentWindow), this.messagesPosted.push(a), setTimeout(function () {
                e.sendMessages()
            },
                this.messageSendingInterval)) : this.sendingMessages = !1
        }
    }, I = {
        traits: function (e) {
            w.isValidPdata(e) && (l.sids instanceof Array || (l.sids = []), v.extendArray(l.sids, e));
            return this
        },
        pixels: function (e) {
            w.isValidPdata(e) && (l.pdata instanceof Array || (l.pdata = []), v.extendArray(l.pdata, e));
            return this
        },
        logs: function (e) {
            w.isValidLogdata(e) && (l.logdata !== Object(l.logdata) && (l.logdata = {}), v.extendObject(l.logdata, e));
            return this
        },
        customQueryParams: function (e) {
            w.isEmptyObject(e) || v.extendObject(l, e, q.reservedKeys);
            return this
        },
        signals: function (e, a) {
            var b, h = e;
            if (!w.isEmptyObject(h)) {
                if (a && "string" === typeof a)
                    for (b in h = {}, e) e.hasOwnProperty(b) && (h[a + b] = e[b]);
                v.extendObject(l, h, q.reservedKeys)
            }
            return this
        },
        declaredId: function (e) {
            q.declaredId.setDeclaredId(e, "request");
            return this
        },
        result: function (e) {
            "function" === typeof e && (l.callback = e);
            return this
        },
        afterResult: function (e) {
            "function" === typeof e && (l.postCallbackFn = e);
            return this
        },
        useImageRequest: function(){}