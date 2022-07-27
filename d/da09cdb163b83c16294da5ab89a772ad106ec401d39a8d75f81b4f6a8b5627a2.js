(function(global) {
    //
    // Smarty template to setup account-specific configuration variables and data
    //
    var optimost = global.optimost || (global.optimost = {}),
        dmh = global.dmh || (global.dmh = {}),
        runtime = dmh.runtime || (dmh.runtime = optimost),
        config = runtime.config || (runtime.config = {}),
        saveOptimostDb = optimost.saveOptimostDb || (function(data) { config.optimostData = data; }),
        defaultConfig = {  // default values for dmh.runtime.config
            accountId:"1783",
            vtDomain: "www.marketinghub.opentext.com",
            byDomain: "by.marketinghub.opentext.com",
            originDomain: "origin.marketinghub.opentext.com",
            secureDomain: "secure.marketinghub.opentext.com"
        }, 
        i,
        dirtyExperimentList,
        urlCounterList,
        cleanExperimentList = [],
        exp;
        
    // fill in missing defaults in config ...
    for( i in defaultConfig ) {
        if ( undefined === config[i] ) {
            config[i] = defaultConfig[i];
        }
    }

    // start auto-generated content
    dirtyExperimentList = [
        {
            "subjectName": "productpagemvt",
            "subjectId": 23,
            "portfolioId" : 3,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:(/^store\\.lexisnexis\\.com$/i.test(window.location.hostname)   && ((/\\/categories|products\\//i.test(window.location.pathname) && /\\-sku/i.test(window.location.pathname) && !/\\/details$/i.test(window.location.pathname))     || /\\/details$/i.test(window.location.pathname))   && window.innerWidth >= 970 && !/^\\/(ahla|nita|florida\\_bar|site\\/)/i.test(window.location.pathname))",
            "trialId" : "23",
            "trialStage":"live",
            "trialLaunchSecs": 1490718856,
            "unique":  "/trial/1783/p/productpagemvt/23/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783productpagemvtgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 121
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and below",
    "segmentPriority": 2,
    "waveId": 91
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IPs",
    "segmentPriority": 2,
    "waveId": 97
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 109
}                
            ]
        },
        {
            "subjectName": "pretestnavmenujuly142017",
            "subjectId": 24,
            "portfolioId" : 2,
            "locationUrl": decodeURIComponent( "https://www.lexisnexis.com/en-us/home.test.7.13.2017.html" ),
            "pageId": "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"simpleURL\",\"value\":\"https://www.lexisnexis.com/en-us/home.test.7.13.2017.html\"},{\"type\":\"URL\",\"key\":\"simpleURL\",\"value\":\"http://www.lexisnexis.com/en-us/home.test.7.13.2017.html\"}]}",
            "trialId" : "24",
            "trialStage":"live",
            "trialLaunchSecs": 1500065911,
            "unique":  "/trial/1783/p/pretestnavmenujuly142017/24/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783pretestnavmenujuly142017gum",
            "stickyCookieSecs": 2592000,
            "agenda": "abtest",
            "creativeType": "json",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 5,
    "waveId": 112
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 113
}                
            ]
        },
        {
            "subjectName": "mobilemenu",
            "subjectId": 25,
            "portfolioId" : 3,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js: /^store\\.lexisnexis\\.com/i.test(window.location.hostname) && window.screen.width<960",
            "trialId" : "25",
            "trialStage":"live",
            "trialLaunchSecs": 1510046574,
            "unique":  "/trial/1783/p/mobilemenu/25/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783mobilemenugum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 130
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 browsers and below",
    "segmentPriority": 2,
    "waveId": 135
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IPs",
    "segmentPriority": 2,
    "waveId": 134
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 114
}                
            ]
        },
        {
            "subjectName": "advancehomepage",
            "subjectId": 26,
            "portfolioId" : 4,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:(function(){ var match=false; if(document.location.pathname== '/en-us/products/lexis-advance.page'){ match=true; } return match; })();",
            "trialId" : "26",
            "trialStage":"live",
            "trialLaunchSecs": 1506015949,
            "unique":  "/trial/1783/p/advancehomepage/26/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783advancehomepagegum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IP Excludes (Internal Users)",
    "segmentPriority": 5,
    "waveId": 118
},                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 5,
    "waveId": 116
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 123
}                
            ]
        },
        {
            "subjectName": "productpage-detailslink",
            "subjectId": 27,
            "portfolioId" : 3,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:(function (path) { return (!/^\\/(ahla|nita|florida\\_bar|site\\/)/i.test(path)   && /^store\\.lexisnexis\\.com$/i.test(window.location.hostname)   && /\\/categories\\//i.test(path)   && /-sku/i.test(path)   && 970 <= window.screen.width) })(window.location.pathname)",
            "trialId" : "27",
            "trialStage":"live",
            "trialLaunchSecs": 1504687189,
            "unique":  "/trial/1783/p/productpage-detailslink/27/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783productpage-detailslinkgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 124
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and Below",
    "segmentPriority": 2,
    "waveId": 120
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IPs",
    "segmentPriority": 2,
    "waveId": 119
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 129
}                
            ]
        },
        {
            "subjectName": "globalnavigation",
            "subjectId": 28,
            "portfolioId" : 4,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js: (function() {     var ar_link = document.getElementsByTagName(\"link\");     var lnk;     var match = false; window.optrial = window.optrial || {};     if (document.location.hostname.indexOf('.lexisnexis.com') > -1) {         for (var c = 0; c < ar_link.length; ++c) {             lnk = ar_link[c];             if (lnk.href && lnk.href.toLowerCase().indexOf('/css/lndc-styles.css') > -1) {                 match = true;                 break;             }         }     } if(match){ var w = screen.width;  if(w <=767){ optrial.opscreensize='small'; } else if(w <=1101){ optrial.opscreensize='medium'; } else { optrial.opscreensize='large'; } optrial.opscreenwidth=w; }     return match; })();",
            "trialId" : "28",
            "trialStage":"live",
            "trialLaunchSecs": 1508186028,
            "unique":  "/trial/1783/p/globalnavigation/28/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783globalnavigationgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 193
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IP Exclude (internal users)",
    "segmentPriority": 2,
    "waveId": 137
},                                    {
    "isStatic": false,
    "isQA": false,
    "segmentName": "Large Device (1102px and up)",
    "segmentPriority": 3,
    "waveId": 142
},                                    {
    "isStatic": false,
    "isQA": false,
    "segmentName": "Medium Device (768 - 1101px)",
    "segmentPriority": 3,
    "waveId": 143
},                                    {
    "isStatic": false,
    "isQA": false,
    "segmentName": "Small Device (0 - 767px)",
    "segmentPriority": 3,
    "waveId": 144
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 132
}                
            ]
        },
        {
            "subjectName": "homepage-seealllinks",
            "subjectId": 29,
            "portfolioId" : 3,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:window.location.pathname === '/' && window.location.hostname === 'store.lexisnexis.com'  && 970 <= window.screen.width",
            "trialId" : "29",
            "trialStage":"live",
            "trialLaunchSecs": 1515150079,
            "unique":  "/trial/1783/p/homepage-seealllinks/29/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783homepage-seealllinksgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 150
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and Below",
    "segmentPriority": 2,
    "waveId": 147
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IPs",
    "segmentPriority": 2,
    "waveId": 146
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 141
}                
            ]
        },
        {
            "subjectName": "homepage-geolocation",
            "subjectId": 30,
            "portfolioId" : 3,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:(function(){var dl=document.domain,pn=location.pathname;if(dl===\"store.lexisnexis.com\"&&(pn===\"/\" ||(pn===\"/categories/california\"||pn===\"/categories/texas\"||pn===\"/categories/florida\")))return true;else return false;})()",
            "trialId" : "30",
            "trialStage":"live",
            "trialLaunchSecs": 1529421979,
            "unique":  "/trial/1783/p/homepage-geolocation/30/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783homepage-geolocationgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 152
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and below",
    "segmentPriority": 2,
    "waveId": 159
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IP",
    "segmentPriority": 2,
    "waveId": 158
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "iOS and Android",
    "segmentPriority": 2,
    "waveId": 163
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "California",
    "segmentPriority": 5,
    "waveId": 166
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Florida",
    "segmentPriority": 5,
    "waveId": 164
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Texas",
    "segmentPriority": 5,
    "waveId": 165
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 157
}                
            ]
        },
        {
            "subjectName": "homepage-categorylinks",
            "subjectId": 39,
            "portfolioId" : 3,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:window.location.pathname === '/' && window.location.hostname === 'store.lexisnexis.com' && 970 <= window.screen.width",
            "trialId" : "39",
            "trialStage":"live",
            "trialLaunchSecs": 1547118324,
            "unique":  "/trial/1783/p/homepage-categorylinks/39/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783homepage-categorylinksgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and below",
    "segmentPriority": 2,
    "waveId": 185
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IP",
    "segmentPriority": 2,
    "waveId": 186
},                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 5,
    "waveId": 187
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 183
}                
            ]
        },
        {
            "subjectName": "la080-landingpage-form",
            "subjectId": 40,
            "portfolioId" : 1,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:(function(){  var match=false; if(window.innerWidth>1199){ if(document.location.hostname==\"www.lexisnexis.com\" && document.location.pathname ==\"/en-us/products/lexis-advance.page\"){ match=true; } if((document.location.hostname==\"cert-www.lexisnexis.com\"&&document.location.pathname==\"/trial/contact-form-variation-two.asp\")||(document.location.hostname==\"cert-www.lexisnexis.com\"&&document.location.pathname==\"/trial/contact-form-twostep.asp\")){ var opCookie=document.cookie.split(';'); var opCookieCheck=\"op1783advancehomepagegum\";  for(var i =0;i<opCookie.length;i++){  if(opCookie[i].indexOf('op1783advancehomepagegum')>=0){  match=true; } } } } return match;  }())",
            "trialId" : "40",
            "trialStage":"live",
            "trialLaunchSecs": 1554751236,
            "unique":  "/trial/1783/p/la080-landingpage-form/40/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783la080-landingpage-formgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 1,
    "waveId": 195
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and below",
    "segmentPriority": 2,
    "waveId": 196
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IP",
    "segmentPriority": 2,
    "waveId": 194
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 189
}                
            ]
        },
        {
            "subjectName": "lexisadvancelandingpage-contentt",
            "subjectId": 43,
            "portfolioId" : 4,
            "locationUrl": decodeURIComponent( "" ),
            "pageId": "js:(document.location.hostname==\"www.lexisnexis.com\" && document.location.pathname ==\"/en-us/products/lexis-advance.page\")",
            "trialId" : "43",
            "trialStage":"live",
            "trialLaunchSecs": 1555440252,
            "unique":  "/trial/1783/p/lexisadvancelandingpage-contentt/43/content.js",
            "agentTrafficRatio": 1000,
            "stickyCookieName": "op1783lexisadvancelandingpage-contenttgum",
            "stickyCookieSecs": 2592000,
            "agenda": "advancedopt",
            "creativeType": "javascript",
            "attrs": [
                
            ],
            "waveList": [
                                    {
    "isStatic": true,
    "isQA": true,
    "segmentName": "QA",
    "segmentPriority": 5,
    "waveId": 208
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "IE10 and below",
    "segmentPriority": 6,
    "waveId": 211
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "Internal IP",
    "segmentPriority": 6,
    "waveId": 214
},                                    {
    "isStatic": true,
    "isQA": false,
    "segmentName": "All Visitors",
    "segmentPriority": 1000,
    "waveId": 213
}                
            ]
        }

    ];

    urlCounterList = [
        {
            "counterId": "2",
            "InvokeMethod": "url",
            "name": "RegPageFormSub(uslm,success=y)",
            "pageId" : "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"regexpURL\",\"value\":\".*uslm.*success=y.*\"}]}",
            "locationUrls": [
     decodeURIComponent( "n/a" )

            ],
            "subjectIds": [
     2,
     6

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/2/event.js"
        },
        {
            "counterId": "3",
            "InvokeMethod": "url",
            "name": "AllFormSubmissions(success=y)",
            "pageId" : "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"regexpURL\",\"value\":\".*success=y.*\"}]}",
            "locationUrls": [
     decodeURIComponent( "n/a" )

            ],
            "subjectIds": [
     5,
     7,
     8,
     9,
     10,
     11,
     12,
     13,
     14,
     15,
     16,
     17,
     18,
     19,
     20,
     22

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/3/event.js"
        },
        {
            "counterId": "4",
            "InvokeMethod": "url",
            "name": "Success=y OR confirmation.aspx",
            "pageId" : "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"regexpURL\",\"value\":\".*success=y*.\"},{\"type\":\"URL\",\"key\":\"simpleURL\",\"value\":\"http://www.lexisnexis.com/stateresources/confirmation.aspx\"}]}",
            "locationUrls": [
     decodeURIComponent( "n/a" )

            ],
            "subjectIds": [
     3,
     4

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/4/event.js"
        },
        {
            "counterId": "5",
            "InvokeMethod": "url",
            "name": "CFM Thank You Page",
            "pageId" : "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"simpleURL\",\"value\":\"http://lexisnexis.com/trial/contactrepCFM-b.asp?success=y\"}]}",
            "locationUrls": [
     decodeURIComponent( "n/a" )

            ],
            "subjectIds": [
     20

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/5/event.js"
        },
        {
            "counterId": "6",
            "InvokeMethod": "url",
            "name": "BK test Oct 6 PKI trial megaform-redesign-test.asp corpproduct 47",
            "pageId" : "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"simpleURL\",\"value\":\"http://www.lexisnexis.com/trial/megaform-redesign-test.asp?corpproduct=47\"}]}",
            "locationUrls": [
     decodeURIComponent( "n/a" )

            ],
            "subjectIds": [
     21

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/6/event.js"
        },
        {
            "counterId": "7",
            "InvokeMethod": "url",
            "name": "Product page - Details link clicks",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23,
     27

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/7/event.js"
        },
        {
            "counterId": "8",
            "InvokeMethod": "url",
            "name": "Product page - View a sample link clicks",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/8/event.js"
        },
        {
            "counterId": "9",
            "InvokeMethod": "url",
            "name": "Product page - International order inquiry banner clicks",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/9/event.js"
        },
        {
            "counterId": "10",
            "InvokeMethod": "url",
            "name": "Product page - Print icon clicks",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/10/event.js"
        },
        {
            "counterId": "11",
            "InvokeMethod": "url",
            "name": "Product page - Trustwave badge clicks",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/11/event.js"
        },
        {
            "counterId": "12",
            "InvokeMethod": "url",
            "name": "Product page - Related product clicks",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/12/event.js"
        },
        {
            "counterId": "13",
            "InvokeMethod": "url",
            "name": "Add to Cart",
            "pageId" : "false",
            "locationUrls": [

            ],
            "subjectIds": [
     23,
     27,
     30

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/13/event.js"
        },
        {
            "counterId": "14",
            "InvokeMethod": "url",
            "name": "Visit Counter www.lexisnexis.com/en-us/home.test.7.13.2017.html",
            "pageId" : "wz:{\"version\":\"1.0\",\"data\":[{\"type\":\"URL\",\"key\":\"simpleURL\",\"value\":\"http://www.lexisnexis.com/en-us/home.test.7.13.2017.html\"}]}",
            "locationUrls": [

            ],
            "subjectIds": [
     24

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/14/event.js"
        },
        {
            "counterId": "15",
            "InvokeMethod": "url",
            "name": "1. Basket page",
            "pageId" : "js:/store.lexisnexis.com/i.test(document.location.host) && /^\\/shopping-cart\\/?$/i.test(document.location.pathname)",
            "locationUrls": [

            ],
            "subjectIds": [
     25,
     27,
     29,
     30,
     39

            ],
            "attrs": [
        {
    "requestArg": "referrer",
    "sourceType": "expr",
    "valueSource": "document.referrer"
}

            ],
            "unique": "/counter/1783/-/15/event.js"
        },
        {
            "counterId": "16",
            "InvokeMethod": "url",
            "name": "2. Delivery",
            "pageId" : "js:/store.lexisnexis.com/i.test(document.location.host) && /^\\/shopping-cart\\/delivery\\/?$/i.test(document.location.pathname)",
            "locationUrls": [

            ],
            "subjectIds": [
     25,
     27,
     29,
     30,
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/16/event.js"
        },
        {
            "counterId": "17",
            "InvokeMethod": "url",
            "name": "3. Payment page",
            "pageId" : "js:/store.lexisnexis.com/i.test(document.location.host) && /^\\/shopping-cart\\/payment\\/?$/i.test(document.location.pathname)",
            "locationUrls": [

            ],
            "subjectIds": [
     25,
     27,
     29,
     30,
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/17/event.js"
        },
        {
            "counterId": "18",
            "InvokeMethod": "url",
            "name": "3a. Smart Pay",
            "pageId" : "js:/store.lexisnexis.com/i.test(document.location.host) && /^\\/shopping-cart\\/smartpay\\/?$/i.test(document.location.pathname)",
            "locationUrls": [

            ],
            "subjectIds": [
     27,
     29,
     30

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/18/event.js"
        },
        {
            "counterId": "20",
            "InvokeMethod": "url",
            "name": "Page",
            "pageId" : "js: false",
            "locationUrls": [

            ],
            "subjectIds": [
     27

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/20/event.js"
        },
        {
            "counterId": "21",
            "InvokeMethod": "url",
            "name": "Homepage",
            "pageId" : "js:/store.lexisnexis.com/i.test(document.location.host) && document.location.pathname==\"/\"",
            "locationUrls": [

            ],
            "subjectIds": [
     27

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/21/event.js"
        },
        {
            "counterId": "22",
            "InvokeMethod": "url",
            "name": "Menu clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     25

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/22/event.js"
        },
        {
            "counterId": "23",
            "InvokeMethod": "url",
            "name": "Navigation clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     25

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/23/event.js"
        },
        {
            "counterId": "24",
            "InvokeMethod": "url",
            "name": "Search clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     25

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/24/event.js"
        },
        {
            "counterId": "25",
            "InvokeMethod": "url",
            "name": "Any page (Bounce rate tracking)",
            "pageId" : "js:/^store\\.lexisnexis\\.com/i.test(window.location.hostname)",
            "locationUrls": [

            ],
            "subjectIds": [
     25

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/25/event.js"
        },
        {
            "counterId": "27",
            "InvokeMethod": "url",
            "name": "Global Nav - Nav Clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     28

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/27/event.js"
        },
        {
            "counterId": "28",
            "InvokeMethod": "url",
            "name": "Global Nav - Page",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     28

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/28/event.js"
        },
        {
            "counterId": "29",
            "InvokeMethod": "url",
            "name": "Global Nav - Page Entry",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     28

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/29/event.js"
        },
        {
            "counterId": "30",
            "InvokeMethod": "url",
            "name": "Global Nav - Page Time",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     28

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/30/event.js"
        },
        {
            "counterId": "31",
            "InvokeMethod": "url",
            "name": "Global Nav - Search Clicks",
            "pageId" : "js:(function(){ if(document.location.pathname.indexOf('/search.page') > -1 && window.jQuery && jQuery('#searchbtn').length){  function op_cntr(attrib){ window.optrial = window.optrial || {}; optrial.opitem = attrib; /*Counter: Global Nav - Search Clicks*/ var _o=optimost; _o.U=\"https://secure.marketinghub.opentext.com/by/counter/1783/-/31/event.gif?oid=SearchClicks\"; _o.ST=\"script\"; _o.SA={\"type\":\"text/javascript\"}; _o.B(); var url = _o.S();   var opCounter=new Image(); opCounter.src=url;  var date = new Date(); var ms = 250; var curDate = null; do { curDate = new Date(); } while (curDate - date < ms); }   jQuery(\".gsc-resultsRoot a.gs-title\").click(function(){ op_cntr('Result'); });  jQuery(\"#searchbtn\").click(function(){ op_cntr('Button'); });  } return false; })();",
            "locationUrls": [

            ],
            "subjectIds": [
     28

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/31/event.js"
        },
        {
            "counterId": "32",
            "InvokeMethod": "url",
            "name": "Global Nav - Contact Form",
            "pageId" : "js:(function(){ if(document.location.pathname.indexOf('/megaform') > -1 && window.jQuery && jQuery('button.btn-primary').length){  function op_cntr(attrib){ window.optrial = window.optrial || {}; optrial.opprod = attrib; /*Counter: Global Nav - Contact Form*/ var _o=optimost; _o.U=\"https://secure.marketinghub.opentext.com/by/counter/1783/-/32/event.gif?oid=ContactForm\"; _o.ST=\"script\"; _o.SA={\"type\":\"text/javascript\"}; _o.B(); var url = _o.S();   var opCounter=new Image(); opCounter.src=url;  var date = new Date(); var ms = 250; var curDate = null; do { curDate = new Date(); } while (curDate - date < ms); }   var prod = document.getElementById(\"Prod1\"); var val=''; if(prod){ val = prod.value; } jQuery('button.btn-primary').click(function(){ op_cntr(val); });  } return false; })();",
            "locationUrls": [

            ],
            "subjectIds": [
     28

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/32/event.js"
        },
        {
            "counterId": "33",
            "InvokeMethod": "url",
            "name": "Sign in or create a profile",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     25

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/33/event.js"
        },
        {
            "counterId": "34",
            "InvokeMethod": "url",
            "name": "Homepage - See all link",
            "pageId" : "js:false",
            "locationUrls": [

            ],
            "subjectIds": [
     29

            ],
            "attrs": [
        {
    "requestArg": "opFeaturedProduct",
    "sourceType": "expr",
    "valueSource": "opFeaturedProduct"
}

            ],
            "unique": "/counter/1783/-/34/event.js"
        },
        {
            "counterId": "35",
            "InvokeMethod": "url",
            "name": "Homepage – New / Fav / Preorder products",
            "pageId" : "js:false",
            "locationUrls": [

            ],
            "subjectIds": [
     29,
     39

            ],
            "attrs": [
        {
    "requestArg": "opRow",
    "sourceType": "expr",
    "valueSource": "opRow"
},        {
    "requestArg": "opFeaturedProduct",
    "sourceType": "expr",
    "valueSource": "opFeaturedProduct"
}

            ],
            "unique": "/counter/1783/-/35/event.js"
        },
        {
            "counterId": "36",
            "InvokeMethod": "url",
            "name": "Homepage – Red carousel products",
            "pageId" : "js:false",
            "locationUrls": [

            ],
            "subjectIds": [
     29

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/36/event.js"
        },
        {
            "counterId": "37",
            "InvokeMethod": "url",
            "name": "Product page",
            "pageId" : "js:(function (path) { return /^store\\.lexisnexis\\.com$/i.test(window.location.hostname) && ((/\\/categories\\//i.test(path) && /\\-sku/i.test(path) && !/\\/details$/i.test(path)) || /\\/details$/i.test(path)) })(window.location.pathname)",
            "locationUrls": [

            ],
            "subjectIds": [
     29,
     30,
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/37/event.js"
        },
        {
            "counterId": "38",
            "InvokeMethod": "url",
            "name": "Homepage - Microsites",
            "pageId" : "js:false",
            "locationUrls": [

            ],
            "subjectIds": [
     29,
     39

            ],
            "attrs": [
        {
    "requestArg": "opSite",
    "sourceType": "expr",
    "valueSource": "opSite"
}

            ],
            "unique": "/counter/1783/-/38/event.js"
        },
        {
            "counterId": "39",
            "InvokeMethod": "url",
            "name": "Landing Page - Banner Clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     30

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/39/event.js"
        },
        {
            "counterId": "40",
            "InvokeMethod": "url",
            "name": "Landing Page - Product Clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     30

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/40/event.js"
        },
        {
            "counterId": "41",
            "InvokeMethod": "url",
            "name": "Landing Page - Home breadcrumb link/Logo",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     30

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/41/event.js"
        },
        {
            "counterId": "42",
            "InvokeMethod": "url",
            "name": "Home Page - New Category pages links",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/42/event.js"
        },
        {
            "counterId": "43",
            "InvokeMethod": "url",
            "name": "Home Page - Carousel clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/43/event.js"
        },
        {
            "counterId": "44",
            "InvokeMethod": "url",
            "name": "Home Page - Category clicks",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/44/event.js"
        },
        {
            "counterId": "45",
            "InvokeMethod": "url",
            "name": "Home Page - Search Results Page",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/45/event.js"
        },
        {
            "counterId": "47",
            "InvokeMethod": "url",
            "name": "Home Page - Compliance/Products/NeedHelp",
            "pageId" : "",
            "locationUrls": [

            ],
            "subjectIds": [
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/47/event.js"
        },
        {
            "counterId": "48",
            "InvokeMethod": "url",
            "name": "Category Page",
            "pageId" : "js:(function (path) {var nesting=path.split('/').length; return /^store\\.lexisnexis\\.com$/i.test(window.location.hostname) && ((/^\\/categories\\//i.test(path) && !/\\-sku/i.test(path)) && nesting>3 &&  !/\\/details$/i.test(path)) })(window.location.pathname)",
            "locationUrls": [

            ],
            "subjectIds": [
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/48/event.js"
        },
        {
            "counterId": "49",
            "InvokeMethod": "url",
            "name": "Search Results Page",
            "pageId" : "js:(function (path,srch) {return /^store\\.lexisnexis\\.com$/i.test(window.location.hostname) &&  /^\\/search\\/?$/i.test(path) &&  /\\?query\\=/i.test(srch)})(window.location.pathname,window.location.search)",
            "locationUrls": [

            ],
            "subjectIds": [
     39

            ],
            "attrs": [


            ],
            "unique": "/counter/1783/-/49/event.js"
        }

    ];

    // end auto-generated content

    
    for( i=0; i < dirtyExperimentList.length; ++i ) {
        exp = dirtyExperimentList[i];
        if ( exp.locationUrl || 
            (exp.pageId && ((exp.pageId.substr(0,3) === 'js:') || (exp.pageId.substr(0,3) === 'wz:') || (exp.pageId.substr(0,3) === 'ts:'))) 
        ) {
            exp.criteria = (exp.locationUrl ? exp.locationUrl.toLowerCase().replace( /^https?:\/+/, '' ) : undefined);
            cleanExperimentList.push( exp );
        }
    }

    saveOptimostDb( { experiments:cleanExperimentList, counters:urlCounterList } );
})(this);


;!function(e){"use strict";var t=e.optimost||(e.optimost={});t._assignPoly=function(e,t){if(!e||"object"!=typeof e)throw new TypeError("Cannot convert undefined or null to object");for(var o=e,n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(o[i]=r[i])}return o},"function"==typeof Object.assign?t.assign=Object.assign.bind(Object):t.assign=t._assignPoly}(this),function(e){"use strict";var t,o=e.optimost||(e.optimost={}),n=e.dmh||(e.dmh={}),r=n.runtime||(n.runtime=o),i=r.config||(r.config={}),a={accountId:"1000",vtDomain:"www.marketinghub.opentext.com",byDomain:"by.marketinghub.opentext.com",secureDomain:"secure.marketinghub.opentext.com",optimostData:{experiments:[],counters:[]}};for(t in a)void 0===i[t]&&(i[t]=a[t])}(this),function(e){"use strict";var t,o,n,r=e.optimost||(e.optimost={}),i=e.dmh||(e.dmh={}),a=i.runtime||(i.runtime=r),c=a._private||(a._private={}),s=a.config||(a.config={});if(t={portfolioId:1,websiteId:1,autolaunch:!0,loadAsync:"loading"!==document.readyState&&null!==document.body||document.currentScript&&document.currentScript.async,fullClickStream:!0,disableHideBody:!1,allowMultipleLoads:!1,threeLevelDomains:["co.uk","gov.uk","com.au","com.cn","co.jp","com.br","com.hk"],accountId:"unknown",byDomain:"by.marketinghub.opentext.com",secureDomain:"secure.marketinghub.opentext.com",originDomain:"origin.marketinghub.opentext.com",moduleTiming:"interactive",modulePollSecs:10,modulePollFreqMs:100,bareModules:!1,disableThrottle:!(!location.search.match(/[\?&]opNoThrottle\=true/i)&&!document.cookie.match(/(^|;)\s*opNoThrottle\=true/i)),appMode:!1,storageMode:"cookie",runSanityCheck:!1,debug:!(!location.search.match(/[\?&]opdebug=true/)&&!document.cookie.match(/(^|;)\s*opdebug=true/)),useEventjs:!(!location.search.match(/[\?&]opejs=true/)&&!document.cookie.match(/(^|;)\s*opejs=true/)),useAjax:!(!location.search.match(/[\?&]opajax=true/)&&!document.cookie.match(/(^|;)\s*opajax=true/)),useCache:(location.search.match(/[\?&]opcache=(\w+)/)||document.cookie.match(/(^|;)\s*opcache=(\w+)/)||["VisualTest","VisualTest"])[1],doNotTrack:!1,beSecure:!1},i.runtime._globalCodeLoaded)throw new Error("Attempt to load global code multiple times");for(o in t)void 0===i.runtime.config[o]&&(s[o]=t[o]);n=location.search.match(/([\?&])opDNT=(\w+)/i)||document.cookie.match(/(^|;)\s*opejs=(\w+)/i),s.doNotTrack=n?"true"===n[2]:""+navigator.doNotTrack=="1"||"yes"===navigator.doNotTrack||""+navigator.msDoNotTrack=="1"||""+window.doNotTrack=="1",s.byDomain.match(/\.marketinghub\.\w+\.com$/)&&(location.search.match(/[\?&]opByPass\=true/i)||document.cookie.match(/(^|;)\s*opByPass\=true/i))&&(s.byDomain="by.mhub.optimost.io",s.secureDomain="secure.mhub.optimost.io",s.originDomain="secure.mhub.optimost.io",console.log("Flipping over to 'mhub.optimost.io' by-servers for testing")),c._dmhConfigOld={},e._dmhConfig&&(r.assign(s,e._dmhConfig),r.assign(c._dmhConfigOld,e._dmhConfig)),s.doNotTrack&&(s.autolaunch=!1),e.console=e.console||{log:function(){},warn:function(){},error:function(){},dir:function(){}},e.console.dir||(e.console.dir=function(){}),function(){r.ieInfo={isOldIE:!1,ieVersion:0};var e=navigator.userAgent.toLowerCase();if(-1!==e.indexOf("msie")){var t=parseInt(e.split("msie")[1]);if(t<10&&(r.ieInfo.isOldIE=!0,(r.ieInfo.ieVersion=t)<9))throw s.autolaunch=!1,new Error("Optimost does not support IE8 and older")}}(),r.jQuery=r.jQuery||window.jQuery}(this),function(e){"use strict";var t=setTimeout;function n(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function r(o,n){for(;3===o._state;)o=o._value;0!==o._state?(o._handled=!0,i._immediateFn(function(){var e=1===o._state?n.onFulfilled:n.onRejected;if(null!==e){var t;try{t=e(o._value)}catch(e){return void c(n.promise,e)}a(n.promise,t)}else(1===o._state?a:c)(n.promise,o._value)})):o._deferreds.push(n)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if(e instanceof i)return t._state=3,t._value=e,void s(t);if("function"==typeof o)return void l((n=o,r=e,function(){n.apply(r,arguments)}),t)}t._state=1,t._value=e,s(t)}catch(e){c(t,e)}var n,r}function c(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,o=e._deferreds.length;t<o;t++)r(e,e._deferreds[t]);e._deferreds=null}function u(e,t,o){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=o}function l(e,t){var o=!1;try{e(function(e){o||(o=!0,a(t,e))},function(e){o||(o=!0,c(t,e))})}catch(e){if(o)return;o=!0,c(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var o=new this.constructor(n);return r(this,new u(e,t,o)),o},i.all=function(e){var c=Array.prototype.slice.call(e);return new i(function(n,r){if(0===c.length)return n([]);var i=c.length;function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if("function"==typeof o)return void o.call(e,function(e){a(t,e)},r)}c[t]=e,0==--i&&n(c)}catch(e){r(e)}}for(var e=0;e<c.length;e++)a(e,c[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(o){return new i(function(e,t){t(o)})},i.race=function(r){return new i(function(e,t){for(var o=0,n=r.length;o<n;o++)r[o].then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},e.optimost||(e.optimost={}),optimost._PromisePoly=i,e.Promise?optimost.Promise=e.Promise:optimost.Promise=i}(this),function(e){"use strict";var t=function(e){if("object"!=typeof e.document)throw new Error("Cookies.js requires a `window` with a `document` object");var i=function(e,t,o){return 1===arguments.length?i.get(e):i.set(e,t,o)};return i._document=e.document,i._cacheKeyPrefix="cookey.",i._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),i.defaults={path:"/",secure:!1},i.get=function(e){i._cachedDocumentCookie!==i._document.cookie&&i._renewCache();var t=i._cache[i._cacheKeyPrefix+e];return void 0===t?void 0:decodeURIComponent(t)},i.setOptimost=function(e,t,o){(o=i._getExtendedOptions(o)).expires=i._getExpiresDate(void 0===t?-1:o.expires);var n=i._generateCookieString(e,t,o);return i._document.cookie=n},i.set=function(e,t,o){return i.setOptimost(e,t,o),i},i.expire=function(e,t){return i.set(e,void 0,t)},i._getExtendedOptions=function(e){return{path:e&&e.path||i.defaults.path,domain:e&&e.domain||i.defaults.domain,expires:e&&e.expires||i.defaults.expires,secure:e&&void 0!==e.secure?e.secure:i.defaults.secure}},i._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},i._getExpiresDate=function(e,t){if(t=t||new Date,"number"==typeof e?e=e===1/0?i._maxExpireDate:new Date(t.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!i._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},i._generateCookieString=function(e,t,o){var n=(e=(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"))+"="+(t=(t+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return n+=(o=o||{}).path?";path="+o.path:"",n+=o.domain?";domain="+o.domain:"",n+=o.expires?";expires="+o.expires.toUTCString():"",n+=o.secure?";secure":""},i.getOptimostKeys=function(e){for(var t=(e=e||document.cookie)?e.split("; "):[],o=[],n=0;n<t.length;n++){var r=i._getKeyValuePairFromCookieString(t[n]);o.push(r.key)}return o},i._getCacheFromString=function(e){for(var t={},o=e?e.split("; "):[],n=0;n<o.length;n++){var r=i._getKeyValuePairFromCookieString(o[n]);void 0===t[i._cacheKeyPrefix+r.key]&&(t[i._cacheKeyPrefix+r.key]=r.value)}return t},i._getKeyValuePairFromCookieString=function(e){var t=e.indexOf("=");t=t<0?e.length:t;var o,n=e.substr(0,t);try{o=decodeURIComponent(n)}catch(e){console&&"function"==typeof console.error&&console.error('Could not decode cookie with key "'+n+'"',e)}return{key:o,value:e.substr(t+1)}},i._renewCache=function(){i._cache=i._getCacheFromString(i._document.cookie),i._cachedDocumentCookie=i._document.cookie},i._areEnabled=function(){var e="cookies.js",t="1"===i.set(e,1).get(e);return i.expire(e),t},i.enabled=i._areEnabled(),i},o=e&&"object"==typeof e.document?t(e):t;e.optimost=e.optimost||{},e.optimost._private=e.optimost._private||{},e.optimost._private.Cookies=o}(this),function(e){"use strict";var a,c,o,n,t=e.optimost||(e.optimost={}),u=a,r=t.config||(t.config={}),s=t._private.Cookies;a={getItem:function(e){return s.get(e)||null},setItem:function(e,t,o,n,r,i){o&&("string"==typeof o&&(o=o.trim()),"string"==typeof o&&o.match(/^\d+$/)&&(o=+o));var a=s.setOptimost(e,t,{path:n,domain:r,expires:o,secure:i});return document.cookie=a},removeItem:function(e,t,o){return s.expire(e,{expires:"Thu, 01 Jan 1970 00:00:00 GMT",domain:o,path:t}),!0},hasItem:function(e){return!!s.get(e)},keys:function(){return s.getOptimostKeys(document.cookie)}},e.localStorage&&(o=e.localStorage,n="_optimost",(u={_getDb:function(){var e=o.getItem(n),t={};if(e)try{t=JSON.parse(e)}catch(e){console.log("WARNING: failure parsing optimost localStorage",e)}return t},_setDb:function(e){if(e&&"object"==typeof e)try{return o.setItem(n,JSON.stringify(e)),!0}catch(e){console.log("WARNING: failure saving to optimost localStorage",e)}return!1},_expireEntries:function(e){var t,o,n={},r=(new Date).getTime();for(t in e=e||{})(o=e[t]).expireMs&&o.expireMs>r&&(n[t]=o);return n},getItem:function(e){var t,o;return e&&(t=u._getDb()[e])&&"object"==typeof t?(o=(new Date).getTime(),t.expireMs&&+t.expireMs>o?t.value:null):null},setItem:function(e,t,o,n,r,i){var a,c,s={key:e,value:t,expireMs:0};if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;if(a=u._getDb(),c=(new Date).getTime(),s.expireMs=c+864e5,o)switch("string"==typeof o&&o.match(/^\d+$/)&&(o=+o),o.constructor){case Number:s.expireMs=c+1e3*o;break;case String:s.expireMs=new Date(o).getTime();break;case Date:s.expireMs=o.getTime()}return a[e]=s,a=u._expireEntries(a),u._setDb(a),!0},removeItem:function(e,t,o){var n,r=u._getDb();return!!e&&!!(n=r[e])&&(n.expireMs=0,r=u._expireEntries(r),u._setDb(r),!0)},hasItem:function(e){return!!u.getItem(e)},keys:function(){var e,t=u._expireEntries(u._getDb()),o=[];for(e in t)o.push(e);return o}})._setDb(u._getDb())||(r.debug&&console.log("Disabling optimost local storage - db consistency check failed"),u=a)),c={_getHandlers:function(){return"local"===r.storageMode?[u,a]:[a,u]},cookie:a,localStorage:u,getItem:function(){var e=c._getHandlers();return e[0].getItem.apply(e[0],arguments)||e[1].getItem.apply(e[1],arguments)},setItem:function(e,t,o,n,r,i){var a=c._getHandlers();return o&&"string"==typeof o&&o.match(/^\d+$/)&&(o=+o),a[0]!==a[1]&&a[1].removeItem(e,n,r),a[0].setItem.apply(a[0],arguments)},removeItem:function(){var e=c._getHandlers();return e[0]!==e[1]&&e[1].removeItem.apply(e[1],arguments),e[0].removeItem.apply(e[0],arguments)},hasItem:function(e){return!!c.getItem(e)},keys:function(){var e,t,o=c._getHandlers(),n={},r=o[0].keys(),i=u!==a?o[1].keys():[];for(e=0;e<r.length;++e)n[r[e]]=!0;for(e=0;e<i.length;++e)n[t=i[e]]||(r.push(t),n[t]=!0);return r}},t.storage=c}(this),function(e){"use strict";var t=e.optimost||(e.optimost={}),o=t._private||(t._private={}),r=o.readyHelper;r||((r={_readyList:[],_pageReadyListener:function(){if(r.isPageReady()){var e=r._readyList;r._readyList=[],e.forEach(function(e){setTimeout(e,0)})}},isPageReady:function(){return!!("complete"===document.readyState||"interactive"===document.readyState&&document.body)},ready:function(n){return new t.Promise(function(t,o){var e=function(){var e;try{n&&"function"==typeof n&&(e=n()),t(e)}catch(e){o(e)}};r.isPageReady()?setTimeout(e,0):r._readyList.push(e)})}}).isPageReady()||(document.addEventListener("DOMContentLoaded",r._pageReadyListener,!1),window.addEventListener("load",r._pageReadyListener,!1)),o.readyHelper=r)}(this),function(s){var u,o,n,i,e=s.dmh||(s.dmh={}),a=s.optimost||(s.optimost={}),l=a.config||(a.config={}),d=[],p=[];function c(e){e=e||a.storage;var t=new Date;t.setTime(t.getTime()+63072e6),e.setItem("opVisitorId",o,t,"/",a.SLD()),(t=new Date).setTime(t.getTime()+18e5),e.setItem("opSessionId",n,t,"/",a.SLD())}a.SLD=function(e){var t,o=e||document.domain,n=o.split("."),r=n.length,i=2,a=0,c=l.threeLevelDomains||["co.uk","gov.uk","com.au","com.cn","co.jp","com.br"];if(r<2)return null;if(!isNaN(n[r-1])&&!isNaN(n[r-2]))return null;for(t=(n[r-2]+"."+n[r-1]).toLowerCase(),a=0;a<c.length;++a)if(t===c[a]){i=3;break}if(r<i)return null;for(o="",a=0;a<i;++a)o+="."+n[r-i+a];return o},u={getUTMAttributes:function(o){var n={};return o=o||location.search,["utm_source","utm_medium","utm_name","utm_term","utm_content"].forEach(function(e){var t=function(e,t){t=t||location.search,e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))}(e,o);t&&(n[e]=t)}),n},isMvtEnabled:function(){return!1},cookie:a.storage.cookie,cookieLysol:function(e){var t,o,n=document.domain.split(".");for(u.cookie.removeItem(e,"/"),t=0;t<10&&1<n.length;++t)o=n.join("."),u.cookie.removeItem(e,"/",o),n=n.splice(1)},_newRandomId:function(){var e,t="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";e="";for(var o=0;o<20;o++){var n;n=Math.round(Math.random()*(t.length-1)),e+=t.charAt(n)}return e},getCookieDomain:function(){return a.SLD()},reportArrival:function(e,t,o){var n={hitsCustomAttr:d,visitsCustomAttr:p,ur:location.href};if(t=t||{},"none"===a.config.fullClickStream)return!1;["opVisitorId","opSessionId"].forEach(function(e){u.cookieLysol(e)}),c(a.storage),t&&"string"==typeof t&&(t={ur:t}),(n=a.assign(n,t)).et="arrive",n.st=e||1;var r="https://"+a.config.originDomain+"/Tracker/blank.gif?"+u._loadAttributes(n);return d=[],p=[],i=u._newRandomId(),a._private.readyHelper.ready(function(){var e=new Image(1,1);null!=o&&(e.onload=o,e.onerror=o),e.src=r}),!0},_loadAttributes:function(e){var t,o,n="",r=s.navigator;function i(e,t,o){return o?e+(e&&""!==e?"&":"")+t+"="+encodeURIComponent(o):e}function a(e,t,o){if(!o||""==o)return e;var n="";return e&&""!=e&&(n="&"),e+n+t+"="+JSON.stringify(function e(t){var o;if(t&&"object"==typeof t&&(t.toJSON||Array.prototype.toJSON))for(o in t.toJSON&&(t.toJSON=void 0),t)e(t[o]);return t}(o))}e=e||{},r&&(t={userAgent:r.userAgent,version:r.appVersion,vendor:r.vendor},r.userLanguage?o=r.userLanguage:r.browserLanguage?o=r.browserLanguage.toLowerCase():r.language?o=r.language.toLowerCase():r.systemLanguage&&(o=r.systemLanguage)),n=i(n=i(n=i(n=i(n=i(n=i(n=i(n="","st",1),"ht",e.hitId||u.getHitId()),"hitId",e.hitId||u.getHitId()),"sessId",e.sessId||u.getSessionId()),"id",e.id||u.getVisitorId()),"ur",e.ur||s.location.href),"rf",e.rf||document.referrer),t&&(n=i(n,"bn",t.userAgent)),n=i(n=i(n,"lc",o),"vr","1"),s.screen&&(n=i(n,"sc",screen.width+"x"+screen.height+"x"+screen.colorDepth)),n=a(n=a(n=i(n=i(n=i(n,"tz",(new Date).getTimezoneOffset()),"ac",u.getAccountId()),"et",e.et||"arrive"),"hitsCustomAttr",e.hitsCustomAttr||d),"visitsCustomAttr",e.visitsCustomAttr||p);var c=u.getUTMAttributes();for(key in c)key&&c[key]&&"string"==typeof c[key]&&(n=i(n,key,c[key]));return n},getVisitsCustomAttr:function(){return p},getHitsCustomAttr:function(){return d},setCustomAttr:function(e,t,o,n){if(e<0||9<e||null===e)console.log("Custom Attribute: Invalid Slot Id");else if(null!==t){var r=new Object;r.key=t,r.value=o,1===(r.scope=n)?d[e]=r:2===n?p[e]=r:console.log("Invalid scope Id ")}else console.log("Invalid Key")},sync:function(){c()},setVisitorId:function(e){o=e,u.sync()},getVisitorId:function(){return o},getSessionId:function(){return n},getHitId:function(){return i},getAccountId:function(){return a.config.accountId}},e.tracker=u,i=u._newRandomId(),o=a.storage.getItem("opVisitorId")||u._newRandomId(),n=a.storage.getItem("opSessionId")||u._newRandomId(),c(a.storage.localStorage)}(this),function(e){"use strict";var s=e.optimost||(e.optimost={}),t=e.dmh||(e.dmh={}),o=t.runtime||(t.runtime=s),n=(o.config||(o.config={}),o._private||(o._private={})),r=n.readyHelper;if(n.WaitForSelector)console.log("Warning: WaitForSelector already defined - bailing out of definition");else{var u;u=n.WaitForSelector={_requestQ:[],_observer:null,_interval:null,_selectNode:function(e,t){if(!e)return null;var o=e.match(/(.+)\:eq\((\d+)\)$/),n=null;if(t=t||document,o){var r,i=+o[2];0<i?(r=t.querySelectorAll(o[1])).length>i&&(n=r[i]):n=t.querySelector(o[1])}else n=t.querySelector(e);return n},_scanTimout:null,_scheduleScan:function(){u._scanTimeout||(u._scanTimeout=setTimeout(function(){u._scanTimeout=null,u._scanWatchRequests()},0))},_scanWatchRequests:function(){var e=[],n=Date.now();if(r.isPageReady()){var t=[].concat(u._requestQ);u._requestQ=[],t.forEach(function(t){if(!t.isDone){try{var o=t.selector?u._selectNode(t.selector,t.rootNode):null}catch(e){return t.isDone=!0,t.callback(t.selector,o),void console.log("Caught unexpected processing selector: "+t.selector,e)}o||t.stopTimeMs<n?(t.isDone=!0,t.callback(t.selector,o)):e.push(t)}}),u._requestQ=u._requestQ.concat(e),0<e.length&&!u._observer&&!u._interval?(u._interval||(u._interval=setInterval(function(){u._scheduleScan()},250)),"function"!=typeof MutationObserver||u._observer||(u._observer=new MutationObserver(function(e){s.trace&&s.trace("Scheduling scan in response to mutations ..."),u._scheduleScan()}),u._observer.observe(document.body,{childList:!0,subtree:!0}))):0===e.length&&(u._interval&&(clearInterval(u._interval),u._interval=null),"function"==typeof MutationObserver&&u._observer&&(u._observer.disconnect(),u._observer=null))}},waitForSelector:function(e,a,t,o){0<(t=+t)&&t<15e3||(t=12e3);var c={selector:e,callback:null,rootNode:o,stopTimeMs:Date.now()+t,isDone:!1};return{cancel:function(){c.isDone=!0},promise:new s.Promise(function(n,r){var i=!1;c.callback=function(e,t){if(!i){i=!0;try{var o;"function"==typeof a?a.apply(window,arguments):o={selector:e,node:t},n(o)}catch(e){s.trace("waitForSelector callback failed",e),r(e)}}},u._requestQ.push(c),u._scheduleScan()})}}},s.waitForSelector=n.WaitForSelector.waitForSelector,r.ready(function(){u._scanWatchRequests()})}}(this),function(e){"use strict";var i,t=e.optimost||(e.optimost={}),a=t.config||(t.config={}),o=t._private||(t._private={});(i={_state:"new",_db:void 0,_pendingOpenCallback:function(){},_writeQueue:[],_open:function(t){var o=function(e){try{t(e)}catch(e){console.log("Err invoking creativeCache callback",e)}};if("function"!=typeof t&&(t=function(){}),i._db)o(i);else{if("init"===i._state){var n=i._pendingOpenCallback;return i._pendingOpenCallback=function(e){n(e),o(e)},void setTimeout(function(){i._open(o)},20)}if("new"===i._state){if(i._state="init",!e.indexedDB)return i._state="closed",void o();var r=indexedDB.open("optimost",1);r.onerror=function(e){console.log("Error creating/accessing IndexedDB database")},r.onsuccess=function(e){a.debug&&console.log("Success creating/accessing IndexedDB database");var t=r.result;t.onerror=function(e){console.log("Error creating/accessing IndexedDB database")},i._db=t,i._state="active",o(i)},r.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains("creatives")&&t.deleteObjectStore("creatives"),t.createObjectStore("creatives",{keyPath:"key"})}}else o()}},get:function(e,t){var o=!1,n=function(e){if(!o){o=!0;try{t(e)}catch(e){console.log("Caught exception in creativeCache.get callback",e)}}};if("function"==typeof t)if(i._db&&e)try{var r=i._db.transaction(["creatives"],"readonly").objectStore("creatives").get(e);r.onsuccess=function(e){var t=r.result;t&&t.expireTimeMs&&t.expireTimeMs>(new Date).getTime()?n(t.value):n()},r.onerror=function(){n()}}catch(e){console.log("transaction setup failed",e),n()}else n()},put:function(e,t,o){if(i._db)if(("number"!=typeof o||o<0||86400<o)&&(o=3600),e&&t){if(i._writeQueue.push({key:e,value:t,ttlSecs:o}),!(1<i._writeQueue.length)){var n=i._db.transaction(["creatives"],"readwrite"),r=function(){var e,t;0<i._writeQueue.length&&(e=i._writeQueue[0],(t=n.objectStore("creatives").put({key:e.key,value:e.value,expireTimeMs:(new Date).getTime()+1e3*e.ttlSecs})).onsuccess=function(){i._writeQueue.shift(),r()},t.onerror=function(){console.log("WARN: failed to save key to creative cache: "+e.key),t.onsuccess()})};r()}}else console.log("Ignoring empty key/value cache put");else onComplete(!1)},isNoOp:function(){return!i._db}})._open(),o.cacheFactory={open:function(e){return i._open(e)}}}(this),function(global){"use strict";var optimost=global.optimost||(global.optimost={}),dmh=global.dmh||(global.dmh={}),runtime=dmh.runtime||(dmh.runtime=optimost),config=runtime.config||(runtime.config={}),_private=optimost._private||(optimost._private={}),PageIdHelper;PageIdHelper={_simpleURLMatch:function(e,t){return t.replace(/(\?.*)|(#.*)/g,"").replace(/^https?:\/+/,"").replace(/^www\./,"").replace(/\/$/,"").replace(/'/g,"%27")===e.replace(/(\?.*)|(#.*)/g,"").replace(/^https?:\/+/,"").replace(/^www\./,"").replace(/\/$/,"").replace(/\%2520/g,"%20").replace(/'/g,"%27")},_exactURLMatch:function(e,t){return t.replace(/(\?|\&)opqa=true(&opcreative=\d{0,4})?/g,"").replace(/^https?:\/+/,"").replace(/^www\./,"").replace(/\/+$/,"").replace(/'/g,"%27")===e.replace(/^https?:\/+/,"").replace(/^www\./,"").replace(/\/$/,"").replace(/\%2520/g,"%20").replace(/'/g,"%27").replace(/'/g,"%27")},_subStringURLMatch:function(e,t){var o=t.replace(/^https?:\/+/,"").replace(/^www\./,"").replace(/\/$/,""),n=e.replace(/^https?:\/+/,"").replace(/^www\./,"").replace(/\/$/,"");return-1!=o.indexOf(n)},_regExpURLMatch:function(e,t){return!!t.match(new RegExp(e))},_testWizardPageId:function(pageId){try{var testPageId=JSON.parse(pageId.slice(3)),elem;for(elem in testPageId=testPageId.data,testPageId){var expression=testPageId[elem];if("URL"===expression.type){if("simpleURL"===expression.key){if(PageIdHelper._simpleURLMatch(encodeURI(expression.value),location.href))return!0}else if("exactURL"===expression.key){if(PageIdHelper._exactURLMatch(encodeURI(expression.value),location.href))return!0}else if("substringURL"===expression.key){if(PageIdHelper._subStringURLMatch(encodeURI(expression.value),location.href))return!0}else if("regexpURL"===expression.key&&PageIdHelper._regExpURLMatch(expression.value,location.href))return!0}else if("JS variable"===expression.type){if(""+global[expression.key]===expression.value)return!0}else if("Cookie value"===expression.type){var cookieName=expression.key.replace(".","\\.").replace("?","?").replace("$","\\$").replace("*","\\*"),cookieValue=expression.value.replace(".","\\.").replace("?","?").replace("$","\\$").replace("*","\\*");if(document.cookie.match(new RegExp(cookieName+"\\="+cookieValue)))return!0}else if("JS expression"===expression.type&&eval(expression.value))return!0}}catch(e){optimost.trace("Failed to evaluate pageId expression: "+e)}return!1},_testTeamSitePageId:function(e){var t,o,n,r=window._teamSiteInfo;try{if(r&&"object"==typeof r){if(t=/^ts:\{([^,]+),([^,]+)\}/.exec(e))return o=t[1],n=t[2],o===""+r.pageId&&n===""+r.version;optimost.trace("Fialed to parse ts: pageId: "+e)}}catch(e){optimost.trace("Failed to evaluate pageId expression: "+e)}return!1},_testPageId:function(pageId){if(pageId){var match=/^js\:(.*)/.exec(pageId);if(match)try{return!!eval(match[1])}catch(e){return void optimost.trace("Failed to evaluate pageId expression: "+match[1]+", "+e)}return match=/^wz\:.*/.exec(pageId),match?PageIdHelper._testWizardPageId(pageId):(match=/^ts\:\.*/.exec(pageId),match?PageIdHelper._testTeamSitePageId(pageId):void 0)}}},optimost._private.PageIdHelper=PageIdHelper}(this),function(e){"use strict";var u,t,l=e.optimost||(e.optimost={}),o=e.dmh||(e.dmh={}),n=o.runtime||(o.runtime=l),a=(o.tracker,n.config||(n.config={}));u={_selectorDb:{},ajaxGetText:function(n){return new l.Promise(function(e,t){var o=new XMLHttpRequest;o.onreadystatechange=function(){4===o.readyState&&(200===o.status?e(o.responseText):(l.trace("WARNING: AJAX call failed "+n+", got status: "+o.status,o),t(o)))},o.open("GET",n),o.send()})},ajaxGetJson:function(e){return u.ajaxGetText(e).then(function(e){return JSON.parse(e)})},reportPageView:function(o){return t._reportCommon(o,"pageView").then(function(e){var t=JSON.parse(e);return t.counterCookieName&&t.counterCookieValue&&(l.storage.setItem(t.counterCookieName,t.counterCookieValue,t.counterCookieDuration,"/",l.SLD()),o.stickyCookieName&&l.storage.setItem(o.stickyCookieName,t.counterCookieValue,o.stickyCookieSecs||void 0,"/",l.SLD())),t})},reportAction:function(e){return t._reportCommon(e,"action")},registerSelector:function(e,t){var o={expData:e,selectorFunc:t.selectorFunc,renderFunc:t.renderFunc,startupFunc:t.startupFunc,reportFunc:t.reportFunc};return o.expData&&o.selectorFunc&&o.renderFunc&&"function"==typeof o.selectorFunc&&"function"==typeof o.renderFunc&&"object"==typeof o.expData&&o.expData.trialId?(u._selectorDb[e.trialId]=o,!0):(l.trace("Ignoring invaliad appHelper.registerSelector registration",o),!1)},registerTrial:function(t,e,o){var n,r,i,a,c=l.lookupTrial(t,o),s=["selectorFunc","renderFunc","startupFunc","reportFunc"];if(e=e||{},c&&c.appPageId){for(c.pageId="js:true",n={expData:c,selectorFunc:function(e,t){return l.testPageId(c.appPageId)&&l.testThrottle(c)},renderFunc:function(e,t){l.moduleHelper.runSubjectModules(c.subjectId)},startupFunc:function(e){l.trace("NOOP startup for trial: "+t)},reportFunc:function(e){u.reportPageView(e)}},r=0;r<s.length;++r)(i=e[a=s[r]])&&"function"==typeof i&&(n[a]=i);if(!u.registerSelector(c,n))return}else c?l.trace("Must enableAppMode() before registering a trial with the appHelper"):l.trace("No data found for trial: "+t);return n},enableAppMode:function(e,t){var o,n,r,i=[];if(a.appMode=!0,a.moduleTiming="manual",a.bareModules=!0,a.allowMultipleLoads=!0,a.disableHideBody=!0,t&&"object"==typeof t?r=t:a.optimostData&&(r=a.optimostData.experiments),r){for(o=0;o<a.optimostData.experiments.length;++o)(n=r[o]).appPageId||(n.appPageId=n.pageId);if(e&&"object"==typeof e)for(o=0;o<e.length;++o)i.push(u.registerTrial(e[o],null,r))}return i},renderCreativesFor:function(e,t){var o,n;for(o in e=e||location.href,t=t||{},u._selectorDb)if((n=u._selectorDb[o])&&"function"==typeof n.selectorFunc&&n.expData)try{n.selectorFunc(e,t)&&"function"==typeof n.renderFunc&&(n.renderFunc(e,t),n.reportFunc&&"function"==typeof n.reportFunc?n.reportFunc(n.expData):u.reportPageView(n.expData))}catch(e){l.trace("Error evaluating selector or render func for "+n.expData.trialId,e)}},startup:function(e){var t,o,n=[];for(t in u._selectorDb)if("function"==typeof(o=u._selectorDb[t]).startupFunc)try{o.startupFunc(e),n.push(o)}catch(e){l.trace("Error evaluating startupFunc: "+e,[e,o])}return n}},t={_reportCommon:function(e,t){var o,n,r=l._private.ApiUtils.getExtras();return o="action"===t?l._private.ApiUtils.buildCounterQueryString():l._private.ApiUtils.buildTrialQueryString(void 0,void 0,void 0,void 0,l.assign({},r.optrial,{opRecordData:"wave"})),n=(n=(n=l.buildAssetUrl(e,o)).replace(/\/content\.js\?/,"/contentXhr.js?")).replace(/\/event\.\w\w\w?\?/,"/eventXhr.js?"),u.ajaxGetText(n)}},l.appHelper=u}(this),function(global){"use strict";var optimost=global.optimost||(global.optimost={}),dmh=global.dmh||(global.dmh={}),runtime=dmh.runtime||(dmh.runtime=optimost),tracker=dmh.tracker||{},config=runtime.config||(runtime.config={}),_private=runtime._private||(runtime._private={}),ApiUtils;ApiUtils={getExtras:function(){var e={optrial:{},opcounter:{},combo:{}};return"object"==typeof optrial&&optrial&&optimost.assign(e.optrial,optrial),"object"==typeof opcounter&&opcounter&&optimost.assign(e.opcounter,opcounter),optimost.assign(e.combo,e.optrial,e.opcounter),e},safeEval:function(script){if("string"==typeof script)try{return eval(script)}catch(e){return void optimost.trace("Failed to evaluate script: "+script+", caught: "+e)}}.bind(global),buildTrialQueryString:function(e,t,o,n,r){var i,a,c,s,u,l,d="",p=new Date,f=document.location,m=Math.round(p.getTime()/1e3),g=tracker.getHitId(),h=tracker.getSessionId(),v=tracker.getVisitorId(),y=optimost.storage;for(e=e||location.search,o=o||document.referrer,n||(n=f.protocol+"//"+f.hostname+f.pathname),r||(r=ApiUtils.getExtras().optrial),l="?D_ts="+m+"&D_tzo="+p.getTimezoneOffset()+"&D_ref="+encodeURIComponent(o)+"&D_loc="+encodeURIComponent(n),(i=e.replace(/^[\?\&]+/,"").replace(/[\?\&]+$/,""))&&(l+="&"+i),a=y.keys(),d="",c=0;c<a.length;++c)"op"!==(s=a[c]).substring(0,2)&&"QA_PIN_CREATIVE"!==s||(u=y.getItem(s))&&(d+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u));for(c in l+=d,r)l+="&"+encodeURIComponent(c)+"="+encodeURIComponent(r[c]);return g&&l.indexOf("hitId=")<0&&(l+="&hitId="+encodeURIComponent(g)),h&&l.indexOf("opSessionId=")<0&&(l+="&opSessionId="+encodeURIComponent(h)),v&&l.indexOf("opVisitorId=")<0&&(l+="&opVisitorId="+encodeURIComponent(v)),ApiUtils.sanitizeUrl(l)},buildCounterQueryString:function(e,t,o,n,r){return ApiUtils.buildTrialQueryString(e,t,o,n,r||ApiUtils.getExtras().combo)},dedupQueryString:function(e){var t,o,n,r="",i={};if(!e)return r;for(t=e.split(/[\?\&]+/),n=0;n<t.length;++n)(o=t[n])&&0<o.indexOf("=")&&!i[o]&&(i[o]=!0,r+=(r?"&":"?")+o);return r},sanitizeUrl:function(e){var t,o,n,r=["<",">",'"',"'","\r","\n","\t"," "],i=e||"";for(t=0;t<r.length;++t)o=r[t],n=encodeURIComponent(o),"'"===o&&(n="%27"),i=i.replace(new RegExp(o,"g"),n);return i},addScriptToPage:function(e,t,n,r,i){var a,c,s,u,l,d,p=dmh.runtime._addScriptToPageCallbacks.length;if(t=t||function(){},s=function(e){try{t(e)}catch(e){}},e&&"object"==typeof e?(a=e.url,c=e.data):a=e,a){if(r=r||optimost.config.allowMultipleLoads,n=!!n||optimost.isPageReady()||config.loadAsync||!1!==i&&c&&"abtest"===c.agenda,i=!!((i=!!(void 0===i?optimost.config.useAjax:i))&&window.indexedDB&&n),a=ApiUtils.sanitizeUrl(a),optimost.ieInfo.isOldIE&&(s=function(e){global.setTimeout(function(){t(e)},10)}),optimost._alreadyLoaded[a]&&!r)return optimost.trace("WARNING: Not adding already loaded script to page: "+a),void s({loaded:!1,status:"err"});u=!!(("always"===config.useCache||c&&"abtest"===c.agenda&&"VisualTest"===config.useCache)&&i&&c&&c.unique&&0<=a.indexOf(c.unique)&&0<a.indexOf("?")&&window.indexedDB&&n),d={useAjax:i,async:n,loaded:!0,force:r,useCache:u,status:"ok",cacheHit:!1},l=function(t,o){var e=!1;return n?i?(e=t&&o,optimost.appHelper.ajaxGetText(a).then(function(e){ApiUtils.safeEval(e),t&&o&&t.put(o,e,3600),s(d)}).catch(function(){d.status="err",s(d)})):dmh.runtime._XHnew({src:a},function(e){d.status=e,s(d)},r):(dmh.runtime._addScriptToPageCallbacks.push(s),document.write("\n<script type='text/javascript' src=\""+a+'"><\/script>\n'),document.write("\n<script type='text/javascript'>dmh.runtime._addScriptToPageCallbacks["+p+"]( "+JSON.stringify(d)+");<\/script>\n")),e},u?optimost._private.cacheFactory.open(function(t){var o;u=!(!u||!t),n=!0,config.loadAsync=!0,d.useCache=u,d.async=n,u?(o=c.unique,t.get(o,function(e){e&&ApiUtils.canUseCache(c)?(optimost.trace("Cache hit on "+o),ApiUtils.safeEval(e),d.cacheHit=!0,s(d),a.match(/opRecordData=\w+/)||optimost.ready(function(){optimost.appHelper.reportPageView(c)})):l(t,o)})):l()}):l()}else s({status:"err"})},addScriptListToPage:function(e,t,o,n){var r,i,a=0;if(n=n||optimost.config.allowMultipleLoads,r=function(){++a>=e.length&&"function"==typeof t&&t()},e&&e.length)for(i=0;i<e.length;++i)ApiUtils.addScriptToPage(e[i],r,o,!!n);else"function"==typeof t&&setTimeout(function(){try{t()}catch(e){optimost.trace("Unexpected exception: "+e,e)}},10)},loadImageList:function(e,t){var o,n,r,i,a=0;if("function"!=typeof t&&(t=function(){}),e&&e.length)for(n=function(){++a>=e.length&&t()},r=0;r<e.length;++r)i="string"==typeof e[r]?e[r]:e[r].url,(o=new Image(1,1)).onload=n,o.onerror=n,o.src=i;else try{t()}catch(e){optimost.trace("Unexpected exception: "+e,e)}},decodeHitId:function(e){if(!e||"string"!=typeof e||3!==e.length||"function"!=typeof window.parseInt)return 0;if(e.toLowerCase()===e)return parseInt(e.replace(/^0+/,""),36);function t(e){var t="A".charCodeAt(0),o="Z".charCodeAt(0),n="a".charCodeAt(0),r="z".charCodeAt(0),i="0".charCodeAt(0),a="9".charCodeAt(0),c=e.charCodeAt(0),s=0;return i<=c&&c<=a?s=c-i:n<=c&&c<=r?s=c-n+10:t<=c&&c<=o?s=c-t+36:optimost.trace("Invalid base62 digit: ".c),s}var o=t(e.charAt(0)),n=t(e.charAt(1)),r=t(e.charAt(2)),i=46656;return 35<o?i+=62*(o-36)*62+62*n+r:35<n?(i+=99944,i+=62*(n-36)*36+62*o+r):(i+=157976,i+=36*(r-36)*36+36*o+n),i},canUseCache:function(e,t,o){var n=optimost.storage,r=0;if("always"!==config.useCache&&"VisualTest"!==config.useCache)return!1;if(null==o&&(o=!(!location.search.match(/[\?&]op(vt)?qa=./)&&!document.cookie.match(/(^|;)\s*op(vt)?qa=true/))),!e||!e.waveList)return!1;if(!t&&e.stickyCookieName){var i=n.getItem(e.stickyCookieName);t=optimost.parseSessionId(i).waveId}if(!t)return!1;var a,c=null;for(r=0;r<e.waveList.length;++r){if(!(a=e.waveList[r]).isStatic)return!1;if(a.waveId===t){c=a;break}}return!!c&&o===c.isQA}},_private.ApiUtils=ApiUtils}(this),function(e){"use strict";var n,k,w=e.optimost||(e.optimost={}),i=e.dmh||(e.dmh={}),t=i.runtime||(i.runtime=w),x=i.tracker||{},S=t.config||(t.config={}),o=t._private||(t._private={}),a=o.eventBus,r=o.readyHelper,c=o.PageIdHelper,C=o.ApiUtils;a||(a={_listenerDb:{},_addListener:function(e){if(e&&e.evType&&e.callback&&0===e.callCount)if(a._listenerDb[e.evType]){var t=a._listenerDb[e.evType],o=0,n=!1;for(o=0;o<t.length;++o)if(t[o].callback===e.callback){n=!0;break}n||a._listenerDb[e.evType].push(e)}else a._listenerDb[e.evType]=[e]},on:function(e,t){e&&"string"==typeof e&&t&&"function"==typeof t&&a._addListener({evType:e,callback:t,callCount:0,callOnce:!1})},off:function(e,t){if(e&&"string"==typeof e&&t&&"function"==typeof t&&a._listenerDb[e]&&0<a._listenerDb[e].length){var o,n=-1,r=a._listenerDb[e];for(o=0;o<r.length;++o)if(r[o].callback===t){n=o;break}0<=n&&r.splice(n,1)}},trigger:function(e,t){if(e&&"string"==typeof e&&a._listenerDb[e]){var o,n=[].concat(a._listenerDb[e]),r=[{type:e}];if(t)if("object"==typeof t&&t.length)for(o=0;o<t.length;++o)r.push(t[o]);else r.push(t);n.forEach(function(e){try{++e.callCount,e.callback.apply(this,r)}catch(e){console.log("Warning: callback caught exception",e)}}),a._listenerDb[e]=a._listenerDb[e].filter(function(e){return!e.callOnce||e.callCount<1})}},one:function(e,t){e&&"string"==typeof e&&t&&"function"==typeof t&&a._addListener({evType:e,callback:t,callOnce:!0,callCount:0})}},o.eventBus=a),n={_testPageId:c._testPageId,testPageId:c._testPageId,on:a.on.bind(a),off:a.off.bind(a),trigger:a.trigger.bind(a),one:a.one.bind(a),isPageReady:r.isPageReady.bind(r),ready:r.ready.bind(r),byServerUrl:"http:"===location.protocol?"http://"+S.byDomain:"https://"+S.secureDomain,_alreadyLoaded:{},_alreadyCallback:{},_XHnew:function(e,t,o){if(t=t||function(){},o=o||w.config.allowMultipleLoads,"object"==typeof e&&(e.src||e.data)){var n,r=e.src||e.data,i=document.createElement("script"),a=document.getElementsByTagName("head"),c=e.data,s=function(e){w._alreadyCallback[r]||(t(e),w._alreadyCallback[r]=!0)},u={type:"text/javascript"};if(!w._alreadyLoaded[r]||o){for(n in w._alreadyCallback[r]=!1,u)i.setAttribute(n,u[n]);for(n in e)n&&"data"!==n.toLowerCase()&&i.setAttribute(n,C.sanitizeUrl(e[n]));return t&&(i.onreadystatechange=function(){"complete"!==this.readyState&&"loaded"!==this.readyState||s("ok")},i.onload=function(){s("ok")},i.onerror=function(){w.onScriptError(this),s("err")}),c&&(i.innerHTML=c),a[0]?a[0].insertBefore(i,a[0].childNodes[a[0].childNodes.length-1]):document.body.insertBefore(i,document.body.childNodes[document.body.childNodes.length-1]),w._alreadyLoaded[r]=!0,this}}},_addScriptToPageCallbacks:[],_addScriptToPage:C.addScriptToPage,_addScriptListToPage:C.addScriptListToPage,_buildQueryString:C.buildTrialQueryString,_loadAttributeValue:function(e){var t=void 0;if(e.valueSource)return"var"===e.sourceType||"expr"===e.sourceType?t=C.safeEval(e.valueSource):"cookie"===e.sourceType&&(t=i.runtime.getCookie(e.valueSource))&&(t=t.split(",")[0].trim()),t},getCookie:function(){return w.storage.cookie.getItem.apply(w.storage.cookie,arguments)||void 0},setCookie:function(){return w.storage.cookie.setItem.apply(w.storage.cookie,arguments)},removeCookie:function(){return w.storage.cookie.removeItem.apply(w.storage.cookie,arguments)},testThrottle:function(e,t){var o,n=!0;return t="function"==typeof t?t:Math.random,!S.disableThrottle&&e.agentTrafficRatio&&e.agentTrafficRatio<1e3&&e.stickyCookieName&&((o=w.storage.getItem(e.stickyCookieName))?n="mvt-no"!==o:Math.floor(1e3*t())<e.agentTrafficRatio?n=!0:(n=!1,w.storage.setItem(e.stickyCookieName,"mvt-no",e.stickyCookieSecs||void 0,"/",w.SLD()))),n},_testThrottle:function(){return n.testThrottle.apply(this,arguments)},buildAssetUrl:function(e,t){var o,n,r,i,a,c;if(!e||!e.unique)return w.trace("buildAssetUrl missing data.unique",e),o;if(a=0===e.unique.indexOf("/counter/"),t||(t=a?C.buildCounterQueryString():C.buildTrialQueryString()),e.attrs)for(n=0;n<e.attrs.length;++n)(r=e.attrs[n]).requestArg&&r.sourceType&&r.valueSource&&null!=(i=w._loadAttributeValue(r))&&(t+="&"+encodeURIComponent(r.requestArg)+"="+encodeURIComponent(i));return t=C.dedupQueryString(t),c=a||0<=t.indexOf("opRecordData=wave")||0===e.unique.indexOf("/go/"),o=e.byServerUrl||w.getBaseUrl(c),o+=e.unique,o+=t,o=C.sanitizeUrl(o)},loadAssets:(k={},function(e,t,o,n,r){var i,a,c,s,u,l,d,p,f,m,g,h=[],v=[],y=S.websiteId||1,_={},b={};for((r=r||{}).extraQueryParams&&"object"==typeof r.extraQueryParams?(_=r.extraQueryParams,b=r.extraQueryParams):(_=(l=C.getExtras()).combo,b=l.optrial),s=w._buildQueryString(void 0,void 0,void 0,void 0,b),u=w._buildQueryString(void 0,void 0,void 0,void 0,_),o=o||w.config.allowMultipleLoads,a=0;a<e.length;++a)(c=w.assign({},e[a])).unique&&(d=0===c.unique.indexOf("/counter/"),!S.useEventjs&&d&&(c.unique=c.unique.replace(/\/[^\/]+$/,"/event.gif")),k[c.unique]&&!o||(i=w.buildAssetUrl(c,d?u:s),c.unique.match(/\.gif$/)?v.push({url:i,data:c}):h.push({url:i,data:c}),w.trace("Adding code to page: ",i)),k[c.unique]=!0);p=0,f=h.length+v.length,m=!1,g=function(e){f<=(p+=e)&&!m&&(m=!0,n?x.reportArrival(""+y,void 0,t):t&&t())},C.addScriptListToPage(h,function(){g(h.length)},void 0,!0),C.loadImageList(v,function(){g(v.length)});var I=h.concat(v);for(a=0;a<I.length;++a)I[a]=I[a].url;return I}),_callbacks:{augmentLoadList:[],onAssetsLoaded:[]},registerCallbacks:function(e){if(e){var t,o=0,n=["augmentLoadList","onAssetsLoaded"],r=i.runtime._callbacks;for(o=0;o<n.length;++o)e[t=n[o]]&&"function"==typeof e[t]&&r[t].push(e[t])}},getBaseUrl:function(e){return e?"https://"+S.originDomain:w.byServerUrl},_findDuplicateOpCookies:function(e,t){var o,n,r,i,a=[],c={};if(e=e||document.cookie,(t=t||document.domain)===(i=w.SLD(t))||"."+t===i)return a;for(o=e.split(/\s*;\s*/),n=0;n<o.length;++n)(r=o[n].replace(/\s*\=.*$/,"")).match(/^op.+(gum|liid)$/)&&(c[r]=(c[r]||0)+1,2===c[r]&&a.push(r));return a},lookupTrial:function(e,t){var o,n,r=""+e,i=[];for(t&&"object"==typeof t?i=t:S.optimostData&&S.optimostData.experiments&&(i=S.optimostData.experiments),o=0;o<i.length;++o)if((n=i[o]).trialId===r)return n;return null},lookupCounter:function(e,t){var o,n,r=""+e,i=[];for(t&&"object"==typeof t?i=t:S.optimostData&&S.optimostData.counters&&(i=S.optimostData.counters),o=0;o<i.length;++o)if((n=i[o]).counterId===r)return n;return null},filterCountersForPage:function(e){var t,o,n=[];for(e&&"object"==typeof e||(e=S.optimostData.counters),o=0;o<e.length;++o)!0===((t=e[o]).pageId?w.testPageId(t.pageId):void 0)&&n.push(t);return n},trace:function(){S.debug&&console.log.apply(console,arguments)},_updateStyle:function(e,t){var o=document.createTextNode(t);e.styleSheet?e.styleSheet.cssText=o.nodeValue:(e.hasChildNodes()&&e.removeChild(e.childNodes[0]),e.appendChild(o))},_createStyle:function(e){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");return o.type="text/css",w._updateStyle(o,e),t.appendChild(o),o},_bodyIsHidden:!1,_getHideBodyNode:function(){var e="op_hideX99",t=(document.head||document.getElementsByTagName("head")[0]).querySelector("style#"+e);return t||((t=w._createStyle("")).id=e),t},_hideBody:function(){var e;S.disableHideBody||S.appMode||w._bodyIsHidden||(e=w._getHideBodyNode(),w._updateStyle(e,"body{visibility:hidden}"),w._bodyIsHidden=!0)},_revealBody:function(){var e;w._bodyIsHidden&&(e=w._getHideBodyNode(),w._updateStyle(e,"body{visibility:visible}"),w._bodyIsHidden=!1)},parseSessionId:function(e){var t={segmentId:0,waveId:0,creativeId:0,visitorId:"",impressionId:""};return!e||25!==e.length&&37!==e.length||"a"!==e.charAt(0)||(t.segmentId=C.decodeHitId(e.substr(1,3)),t.waveId=C.decodeHitId(e.substr(4,3)),t.creativeId=C.decodeHitId(e.substr(7,3)),t.visitorId=e.substr(10,12),t.impressionId=25<e.length?e.substr(22,12):t.visitorId),t}},function(){var e,t=w.storage.cookie,o=n._findDuplicateOpCookies();for(e=0;e<o.length;++e)t.removeItem(o[e],"/")}(),function(){var e;for(e in n)w[e]||(w[e]=n[e])}(),n=w}(this),function(s){"use strict";var u,l=s.optimost||(s.optimost={}),d=l.config||(l.config={});l.M=l.M||{},l._modulesInOrder=l._modulesInOrder||[],u={_scheduledModules:{},_wrapRunner:function(t){return function(){var e=document.write;document.write=function(){l.trace("WARNING! - module attempted document.write() call after loading complete - refresh creatives to update content.js code")};try{return t.apply(this,arguments)}catch(e){l.trace("ERROR evaluating experiment js modules",e)}document.write=e}},immediateScheduler:function(e){if(e&&"function"==typeof e)try{e()}catch(e){l.trace("ERROR evaluating experiment js modules",e)}},interactiveScheduler:function(e){if(e&&"function"==typeof e){var t=u._wrapRunner(e);l.isPageReady()?t():l.ready(t)}},completeScheduler:function(e){var t=u._wrapRunner(e);"complete"===document.readyState?t():window.addEventListener("load",t,!1)},manualScheduler:function(e){},getScheduler:function(e){var t,o=u;return"manual"===(e=e||d.moduleTiming)?t=o.manualScheduler:"interactive"===e?t=o.interactiveScheduler:"immediate"===e?t=o.immediateScheduler:"complete"===e&&(t=o.completeScheduler),t?l.trace(e+" module scheduler"):(l.trace("unknown module scheduler, "+e+", using 'interactiveScheduler'"),t=o.interactiveScheduler),t},moduleRunner:function(){var e,t,o=[],n={};try{for(t=0;t<l._modulesInOrder.length;++t)e=l._modulesInOrder[t],u._scheduledModules[e.name]||(e.thunk(),n[e.name]||(o.push(e.name),n[e.name]=!0))}catch(e){l.trace("ERROR evaluating experiment js modules",e)}return o},addModule:function(t,e,o){if(t&&e){var n=!1,r=function(){if(d.bareModules||!n&&l.M[t]===r)try{e.apply(window,arguments)}catch(e){l.trace("WARNING: failed to execute module "+t+", caught error: "+e,e)}else l.trace("WARNING: attempt to rerun or double-registered module: "+t);n=!0},i={name:t,info:o,thunk:r};return l.M[t]=r,l._modulesInOrder.push(i),l.trigger("moduleAdded",i),i}},runSubjectModules:function(e){var t,o,n=[];if(!e)return n;for(t=0;t<l._modulesInOrder.length;++t)if((o=l._modulesInOrder[t]).info&&o.info.subjectId==e){n.push(o);try{o.thunk()}catch(e){l.trace("Error executing module "+o.name+": "+e,[e,o])}}return n},clearModules:function(){l._modulesInOrder=[],l.M={}},displayModule:function(e){"function"==typeof l.M[e]&&l.M[e]()},hasModules:function(){var e;for(e in l.M)if(l.M[e])return!0;return!1},hasModule:function(e){return!!l.M[e]},runModuleWhen:function(e,t){u._scheduledModules[e];return u._scheduledModules[e]={name:e,done:!1,readyCheck:t},e},_pollRunConditions:function(){var e,t,o=[];for(e in u._scheduledModules)if(!(t=u._scheduledModules[e]).done){try{l.M[t.name]&&t.readyCheck()&&(t.done=!0,l.M[t.name]())}catch(e){l.trace("Error polling scheduled module "+t.name+", "+e,e),t.done=!0}t.done&&o.push(t)}return o}},function(){var e,t,o,n,r=["addModule","displayModule","hasModules"],i=new Date,a=+(d.modulePollSecs||10),c=+(d.modulePollFreqMs||100);for(0<a&&a<201||(a=10),19<c&&c<201||(c=100),n=1e3*a,e=0;e<r.length;++e)l[t=r[e]]=u[t];l.moduleHelper=u,o=s.setInterval(function(){u._pollRunConditions();(new Date).getTime()-i.getTime()>n&&s.clearInterval(o)},c)}()}(this);
;try{
	window.optimost = window.optimost || {};
	optimost.JLibrary=function(libId,segName,wavId,crId){this.l=window.location,this.d=document,this.v={},this.f={},this.v.loc=this.l.href;this.v.protocol=this.l.protocol;this.v.domain=this.l.hostname;this.v.path=this.l.pathname;this.v.query=this.l.search;this.version="1.01",this.debug=false,this.error=null;if(libId){libId+="";if(libId.match(/^\d+$/)){this.acctId=libId;this.c={};this.e={};window.$optt={}}else{this.acctId=null;if(!libId.match(/^op\d+.+liid$/)){this.error="Invalid library ID";libId=null}}}else this.error="No library ID defined";if(typeof optimost.jQueryReady==="undefined"){optimost.jQueryReady=false;optimost.jQueryReadyCallbacks=[];optimost.createPlugins=function(){if(!jQuery.isFunction(jQuery().textContent)){(function(e){e.fn.textContent=function(e,t,n){function r(e,t){var n=[];if(e.childNodes&&e.childNodes.length>0)for(var i=0;i<e.childNodes.length;i++){if(e.childNodes[i].nodeType==3&&e.childNodes[i].nodeValue.match(t))n.push(e.childNodes[i]);else if(e.childNodes[i].nodeType==1)n=n.concat(r(e.childNodes[i],t))}return n}var i=[];if(typeof e!=="string"&&!Object.prototype.toString.call(e).match(/RegExp/))e=/.*/;this.each(function(){i=i.concat(r(this,e))});if(typeof t==="string")for(var s=0;s<i.length;s++)if(i[s].nodeValue.match(e)){if(n){if(n==="replace")i[s].nodeValue=i[s].nodeValue.replace(e,t);else if(n==="prepend")i[s].nodeValue=t+i[s].nodeValue;else if(n==="append")i[s].nodeValue+=t}else i[s].nodeValue=t}return i}})(jQuery)}if(!jQuery.isFunction(jQuery().opBind)){(function(e){e.fn.opBind=function(t,n,r,i,s){return this.each(function(){if(e.fn.jquery<"1.7"){if(typeof i!="undefined")e(this).bind(t,r,i);else if(typeof r!="undefined")e(this).bind(t,n,r);else e(this).bind(t,n)}else e(this).on(t,n,r,i,s)})}})(jQuery)}if(this.si!="global"&&!jQuery.isFunction(jQuery().addClickthru)){(function(e){e.fn.addClickthru=function(n,i){return this.each(function(){if(n){var s=this;var o=function(e){if(typeof e=="function"){t=e.toString();return t.substring(t.indexOf("{")+1,t.lastIndexOf("}"))}else return null};s.onclick=new Function("this.applyClickthru(this,'"+n+"','oplink',this.attribs);"+(typeof s.onclick=="function"?o(s.onclick):"return true"));s.attribs=i;s.applyClickthru=function(t,n,i){var s=function(t){if(!t.match(/^http/)){if(e("base").size())r=e("base").attr("href");else r=document.location.href;var n=r.split("//");var i=n[0]+"//";var s=n[1].split("/");var o="";for(var u=0;u<s.length-1;u++)o+=s[u]!=""?s[u]+"/":"";b=i+s[0];r=i+o;if(t.substr(0,1)=="/")t=b+t;else t=r+t}return t};if(t.opdone||!t.href&&!t.action)return false;t.opdone=true;if(t.tagName.toLowerCase()=="form")var o=s(t.action);else var o=s(t.href);hTag=o.indexOf("#")==-1?null:o.split("#")[1];o=o.split("#")[0];o=n+(n.match(/\?/)?"&":"?")+i+"="+escape(o);if(this.attribs&&this.attribs.arr)o+=this.attribs.toString();if(hTag)o+="#"+hTag;o=o.replace(/\+/g,"%2B");if(t.tagName.toLowerCase()=="form")t.action=o;else t.href=o;return true}}})}})(jQuery)}if(!jQuery.isFunction(jQuery().addBinaryCounter)){(function(e){e.fn.addBinaryCounter=function(t,n,r,i,s){if(n&&typeof t=="string"&&typeof r=="object"){if(typeof i=="undefined")i="target";if(arguments.length==4&&typeof i.arr!="undefined"){s=i;i="target"}return this.each(function(){if(i=="target"){if(e(this).attr("href")&&t=="click")i=e(this)[0];else i=null}e(this).opBind(t,function(e){r.fireBinaryCounter(n,e,i,s)})})}}})(jQuery)}};optimost.waitForJQuery=function(){if(typeof jQuery=="function"){optimost.createPlugins();optimost.jQueryReady=true;for(var e=0;e<optimost.jQueryReadyCallbacks.length;e++)if(typeof optimost.jQueryReadyCallbacks[e]==="function")optimost.jQueryReadyCallbacks[e]()}else{optimost.jqWait++;if(optimost.jqWait<600)setTimeout(optimost.waitForJQuery,200)}};optimost.jqWait=0;optimost.waitForJQuery()}this.log=function(){if(this.debug&&typeof console=="object"&&typeof console.log=="function"){var expr="console.log(";for(var i=0;i<arguments.length;i++){if(typeof arguments[i]=="undefined")break;else expr+=(i==0?"":",")+"arguments["+i+"]"}expr+=")";eval(expr)}},this.trim=function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},this.getCookie=function(e){var t=new RegExp("[; ]"+e+"=([^\\s;]*)");var n=(" "+document.cookie).match(t);if(e&&n)return unescape(n[1]);return null},this.setCookie=function(e,t,n,r){optimost.SC(e,t,r,n)},this.getQParam=function(e,n){e=e.replace(/[\[]/,"\\[").replace(/[]]/,"\\]");t=(new RegExp("[\\?&]"+e+"=([^&#]*)")).exec(n);return t==null?null:t[1]},this.addLoadEvent=function(e){var t=window.onload;if(typeof window.onload!="function"){window.onload=e}else{window.onload=function(){if(t){t()}e()}}},this.strFunc=function(e,n,r){function i(e){return e+(e[e.length-1]==";"?"":";")}if(typeof e=="function"){t=e.toString();t=this.trim(t.substring(t.indexOf("{")+1,t.lastIndexOf("}")));if(typeof n!="string")return t;else{if(r)return i(this.trim(n))+t;else return i(t)+n}}else return null},this.ieVer=function(){var e=navigator.userAgent;var t=null;if(/Trident/.test(e)&&!/MSIE/.test(e))t=e.match(/rv\:(\d+\.\d+)/);else if(/MSIE/.test(e))t=e.match(/MSIE\s+(\d+\.\d+)/);if(t)return parseFloat(t[1]);else return 100};this.Attribs=function(){this.arr=[];for(var e=0;e<arguments.length-1;e+=2)this.arr.push({name:arguments[e],value:escape(arguments[e+1])});this.length=this.arr.length;this.toString=function(e){var t="";for(var n=0;n<this.arr.length;n++)if(e)t+=" "+this.arr[n].name+'="'+this.arr[n].value+'"';else t+="&"+this.arr[n].name+"="+this.arr[n].value;return t}},this.fireBinaryCounter=function(e,t,n,r){if(typeof jQuery=="function"){if(arguments.length<4){if(t&&typeof t.arr!=="undefined"){r=t;n=null;t=null}else{if(n&&typeof n.arr!=="undefined"){r=n;n=null}if(t&&(t.href||typeof t==="function")){n=t;t=null}}}var i=new Image;var s=jQuery("body");if(s.size()){s[0].appendChild(i);this.bcf=n;var o="optimost.lib_"+this.si;if(typeof n=="function"){this.bct=setTimeout(n,this.binCtrTimeout);var u=new Function(["e"],"clearTimeout("+o+".bct);"+o+".bcf()");jQuery(i).opBind("load",u).opBind("error",u)}else if(n&&n.href){if(n.target&&n.target!="")n=null;else{var u=new Function(["e"],"clearTimeout("+o+".bct);if("+o+".bcf.href.match(/^javascript:/i)){h="+o+".bcf.href.replace(/^javascript:/i,'')}else window.location="+o+".bcf.href");jQuery(i).opBind("load",u).opBind("error",u)}}var a=this.l.protocol=="http:"?"http://"+optimost.config.byDomain:"https://"+optimost.config.secureDomain+"/by";if(!this.acctId){var f=this.libId.match(/^op[0-9]{1,4}/)[0];f=f.replace("op","")}else var f=this.acctId;var l=a+"/counter/"+f+"/-/"+e+"/event.gif"+this.tqs;if(r)l+=r.toString();jQuery(i).attr("src",l+"&rand="+Math.floor(Math.random()*1e6));if(n&&t){if(t.preventDefault)t.preventDefault();else t.returnValue=false}}}};this.getTqs=function(){var e=document.cookie;var t="";if(e.length>3){var n="?";for(var r=e.split(";"),i=0,s=r.length;i<s;i++){var o=r[i].split("=");o[0]=this.trim(o[0]);if(o.length==2&&o[0].match(/^op.+liid$/)){t+=n+o[0]+"="+unescape(o[1]);n="&"}}}return t};if(libId&&libId.match(/^op.+liid$/)&&document.cookie.indexOf(libId)!=-1){this.si=this.getCookie(libId);this.tqs="?"+libId+"="+this.si}else if(libId){this.tqs=this.getTqs();this.si="global";this.e={};this.c={}}else{libId="";this.tqs="";this.si=""}this.libId=libId;if(!segName)segName="N/A";this.segName=segName;if(!wavId)wavId="N/A";this.wavId=wavId;if(!crId)crId="N/A";this.crId=crId;this.info=function(){if(this.acctId)return"Global code";else return"Persona: "+this.segName+"\nWave#: "+this.wavId+"\nCreative#: "+this.crId};this.actions=[];this.binCtrTimeout=1e3;var regLib=new Function(["lib"],"optimost.lib_"+this.si+"=lib");regLib(this)};
	$optg = new optimost.JLibrary(1783);
	
	/** 
	 * Optimost Services Library, starting with loaddash library
	 */ 
	/** 
	 * @external String.prototype.trim() 
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim|String.prototype.trim()} 
	 */  
	if (!String.prototype.trim) {  
	  String.prototype.trim = function() {  
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');  
	  };  
	}  
	  
	/* ------------------------------------------------------------------------------------------------------------------ */  
	  
	(function(win, doc, nav) {  
	  if (win && doc && nav) {  
		win.optimostGetIeVersion = function optimostGetIeVersion() {  
		  var ieVersion = (typeof win.Infinity === 'number') ? win.Infinity : 2016;  
		  var ua = nav.userAgent;  
		  if (doc.documentMode && /(MSIE\s\d+|\srv\:\d+)/.test(ua)) {  
			ua = ua.match(/(MSIE\s\d+|\srv\:\d+)/);  
			ua = win.parseInt(ua[ua.length - 1].match(/\d+/)[0]);  
			if (ua) {  
			  ieVersion = ua;  
			}  
		  }  
		  return ieVersion;  
		};  
	  }  
	})(window, window.document, window.navigator);  
	  
	if (typeof window.optimostGetIeVersion === 'function' && window.optimostGetIeVersion() > 8) {  
	  
	/** 
	 * @license 
	 * lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE 
	 * Build: `lodash core -o ./dist/lodash.core.js` 
	 */  
	;(function(){function n(n){return K(n)&&pn.call(n,"callee")&&!bn.call(n,"callee")}function t(n,t){return n.push.apply(n,t),n}function r(n){return function(t){return null==t?nn:t[n]}}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return d(t,function(t){return n[t]})}function o(n){return n instanceof i?n:new i(n)}function(){}function c(n,t,r,e){return n===nn||M(n,ln[r])&&!pn.call(e,r)?t:n}function f(n,t,r){  
	if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(nn,r)},t)}function a(n,t){var r=true;return mn(n,function(n,e,u){return r=!!t(n,e,u)}),r}function l(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===nn?i===i:r(i,c)))var c=i,f=o}return f}function p(n,t){var r=[];return mn(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function s(n,r,e,u,o){var i=-1,c=n.length;for(e||(e=D),o||(o=[]);++i<c;){var f=n[i];0<r&&e(f)?1<r?s(f,r-1,e,u,o):t(o,f):u||(o[o.length]=f);  
	}return o}function h(n,t){return n&&On(n,t,qn)}function v(n,t){return p(t,function(t){return V(n[t])})}function y(n,t){return n>t}function b(n,t,r,e,u){return n===t||(null==n||null==t||!H(n)&&!K(t)?n!==n&&t!==t:g(n,t,b,r,e,u))}function g(n,t,r,e,u,o){var i=Sn(n),c=Sn(t),f="[object Array]",a="[object Array]";i||(f=hn.call(n),f="[object Arguments]"==f?"[object Object]":f),c||(a=hn.call(t),a="[object Arguments]"==a?"[object Object]":a);var l="[object Object]"==f,c="[object Object]"==a,a=f==a;o||(o=[]);  
	var p=En(o,function(t){return t[0]==n}),s=En(o,function(n){return n[0]==t});if(p&&s)return p[1]==t;if(o.push([n,t]),o.push([t,n]),a&&!l){if(i)r=B(n,t,r,e,u,o);else n:{switch(f){case"[object Boolean]":case"[object Date]":case"[object Number]":r=M(+n,+t);break n;case"[object Error]":r=n.name==t.name&&n.message==t.message;break n;case"[object RegExp]":case"[object String]":r=n==t+"";break n}r=false}return o.pop(),r}return 2&u||(i=l&&pn.call(n,"__wrapped__"),f=c&&pn.call(t,"__wrapped__"),!i&&!f)?!!a&&(r=R(n,t,r,e,u,o),  
	o.pop(),r):(i=i?n.value():n,f=f?t.value():t,r=r(i,f,e,u,o),o.pop(),r)}function _(n){return typeof n=="function"?n:null==n?Y:(typeof n=="object"?m:r)(n)}function j(n,t){return n<t}function d(n,t){var r=-1,e=U(n)?Array(n.length):[];return mn(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function m(n){var t=_n(n);return function(r){var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&b(n[u],r[u],nn,3)))return false}return true}}function O(n,t){return n=Object(n),G(t,function(t,r){return r in n&&(t[r]=n[r]),  
	t},{})}function x(n){return xn(q(n,void 0,Y),n+"")}function A(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function E(n){return A(n,0,n.length)}function w(n,t){var r;return mn(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function k(n,r){return G(r,function(n,r){return r.func.apply(r.thisArg,t([n],r.args))},n)}function N(n,t,r,e){var u=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var c=t[o],f=e?e(r[c],n[c],c,r,n):nn;  
	if(f===nn&&(f=n[c]),u)r[c]=f;else{var a=r,l=a[c];pn.call(a,c)&&M(l,f)&&(f!==nn||c in a)||(a[c]=f)}}return r}function S(n){return x(function(t,r){var e=-1,u=r.length,o=1<u?r[u-1]:nn,o=3<n.length&&typeof o=="function"?(u--,o):nn;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function F(n){return function(){}}function T(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==on&&this instanceof e?u:n;++c<f;)a[c]=r[c];  
	for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=F(n);return e}function B(n,t,r,e,u,o){var i=n.length,c=t.length;if(i!=c&&!(2&u&&c>i))return false;for(var c=-1,f=true,a=1&u?[]:nn;++c<i;){var l=n[c],p=t[c];if(void 0!==nn){f=false;break}if(a){if(!w(t,function(n,t){if(!z(a,t)&&(l===n||r(l,n,e,u,o)))return a.push(t)})){f=false;break}}else if(l!==p&&!r(l,p,e,u,o)){f=false;break}}return f}function R(n,t,r,e,u,o){var i=2&u,c=qn(n),f=c.length,a=qn(t).length;  
	if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:pn.call(t,p)))return false}for(a=true;++l<f;){var p=c[l],s=n[p],h=t[p];if(void 0!==nn||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function D(t){return Sn(t)||n(t)}function I(n){var t=[];if(null!=n)for(var r in Object(n))t.push(r);return t}function q(n,t,r){  
	return t=jn(t===nn?n.length-1:t,0),function(){for(var e=arguments,u=-1,o=jn(e.length-t,0),i=Array(o);++u<o;)i[u]=e[t+u];for(u=-1,o=Array(t+1);++u<t;)o[u]=e[u];return o[t]=r(i),n.apply(this,o)}}function $(n){return(null==n?0:n.length)?s(n,1):[]}function P(n){return n&&n.length?n[0]:nn}function z(n,t,r){var e=null==n?0:n.length;r=typeof r=="number"?0>r?jn(e+r,0):r:0,r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1}function C(n,t){return mn(n,_(t))}function G(n,t,r){return e(n,_(t),r,3>arguments.length,mn);  
	}function J(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Fn(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=nn),r}}function M(n,t){return n===t||n!==n&&t!==t}function U(n){var t;return(t=null!=n)&&(t=n.length,t=typeof t=="number"&&-1<t&&0==t%1&&9007199254740991>=t),t&&!V(n)}function V(n){return!!H(n)&&(n=hn.call(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function H(n){var t=typeof n;  
	return null!=n&&("object"==t||"function"==t)}function K(n){return null!=n&&typeof n=="object"}function L(n){return typeof n=="number"||K(n)&&"[object Number]"==hn.call(n)}function Q(n){return typeof n=="string"||!Sn(n)&&K(n)&&"[object String]"==hn.call(n)}function W(n){return typeof n=="string"?n:null==n?"":n+""}function X(n){return null==n?[]:u(n,qn(n))}function Y(n){return n}function Z(n,r,e){var u=qn(r),o=v(r,u);null!=e||H(r)&&(o.length||!u.length)||(e=r,r=n,n=this,o=v(r,qn(r)));var i=!(H(e)&&"chain"in e&&!e.chain),c=V(n);  
	return mn(o,function(e){var u=r[e];n[e]=u,c&&(n.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=n(this.__wrapped__);return(e.__actions__=E(this.__actions__)).push({func:u,args:arguments,thisArg:n}),e.__chain__=r,e}return u.apply(n,t([this.value()],arguments))})}),n}var nn,tn=1/0,rn=/[&<>"']/g,en=RegExp(rn.source),un=typeof self=="object"&&self&&self.Object===Object&&self,on=typeof global=="object"&&global&&global.Object===Object&&global||un||Function("return this")(),cn=(un=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,fn=function(n){  
	return function(t){return null==n?nn:n[t]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),an=Array.prototype,ln=Object.prototype,pn=ln.hasOwnProperty,sn=0,hn=ln.toString,vn=on._,yn=Object.create,bn=ln.propertyIsEnumerable,gn=on.isFinite,_n=function(n,t){return function(r){return n(t(r))}}(Object.keys,Object),jn=Math.max,dn=function(){function n(){}return function(t){return H(t)?yn?yn(t):(n.prototype=t,t=new n,n.prototype=nn,t):{}}}();i.prototype=dn(o.prototype),i.prototype.constructor=i;  
	var mn=function(n,t){return function(r,e){if(null==r)return r;if(!U(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(h),On=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}(),xn=Y,An=String,En=function(n){return function(t,r,e){var u=Object(t);if(!U(t)){var o=_(r);t=qn(t),r=function(n){return o(u[n],n,u)}}return r=n(t,r,e),-1<r?u[o?t[r]:r]:nn}}(function(n,t,r){  
	var e=null==n?0:n.length;if(!e)return-1;r=null==r?0:Fn(r),0>r&&(r=jn(e+r,0));n:{for(t=_(t),e=n.length,r+=-1;++r<e;)if(t(n[r],r,n)){n=r;break n}n=-1}return n}),wn=x(function(n,t,r){return T(n,t,r)}),kn=x(function(n,t){return f(n,1,t)}),Nn=x(function(n,t,r){return f(n,Tn(t)||0,r)}),Sn=Array.isArray,Fn=Number,Tn=Number,Bn=S(function(n,t){N(t,_n(t),n)}),Rn=S(function(n,t){N(t,I(t),n)}),Dn=S(function(n,t,r,e){N(t,$n(t),n,e)}),In=x(function(n){return n.push(nn,c),Dn.apply(nn,n)}),qn=_n,$n=I,Pn=function(n){  
	return xn(q(n,nn,$),n+"")}(function(n,t){return null==n?{}:O(n,d(t,An))});o.assignIn=Rn,o.before=J,o.bind=wn,o.chain=function(n){return n=o(n),n.__chain__=true,n},o.compact=function(n){return p(n,Boolean)},o.concat=function(){var n=arguments.length;if(!n)return[];for(var r=Array(n-1),e=arguments[0];n--;)r[n-1]=arguments[n];return t(Sn(e)?E(e):[e],s(r,1))},o.create=function(n,t){var r=dn(n);return null==t?r:Bn(r,t)},o.defaults=In,o.defer=kn,o.delay=Nn,o.filter=function(n,t){return p(n,_(t))},o.flatten=$,  
	o.flattenDeep=function(n){return(null==n?0:n.length)?s(n,tn):[]},o.iteratee=_,o.keys=qn,o.map=function(n,t){return d(n,_(t))},o.matches=function(n){return m(Bn({},n))},o.mixin=Z,o.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");return function(){return!n.apply(this,arguments)}},o.once=function(n){return J(2,n)},o.pick=Pn,o.slice=function(n,t,r){var e=null==n?0:n.length;return r=r===nn?e:+r,e?A(n,null==t?0:+t,r):[]},o.sortBy=function(n,t){var e=0;return t=_(t),  
	d(d(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r;n:{r=n.criteria;var e=t.criteria;if(r!==e){var u=r!==nn,o=null===r,i=r===r,c=e!==nn,f=null===e,a=e===e;if(!f&&r>e||o&&c&&a||!u&&a||!i){r=1;break n}if(!o&&r<e||f&&u&&i||!c&&i||!a){r=-1;break n}}r=0}return r||n.index-t.index}),r("value"))},o.tap=function(n,t){return t(n),n},o.thru=function(n,t){return t(n)},o.toArray=function(){},o.values=X,o.extend=Rn,Z(o,o),o.clone=function(){}