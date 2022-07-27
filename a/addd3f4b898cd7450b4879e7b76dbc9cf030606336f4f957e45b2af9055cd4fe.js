var InsticatorApp;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(846);
var utils_1 = __webpack_require__(55);
var Cookie = (function () {
    function Cookie() {
        this.isCookieEnabled = this.checkCookieEnabled();
        this.isUserActive = false;
    }
    Cookie.prototype.checkCookieEnabled = function () {
        return navigator.cookieEnabled;
    };
    Cookie.prototype.get = function (name) {
        var nameLenPlus = name.length + 1;
        return (document.cookie
            .split(';')
            .map(function (c) { return c.trim(); })
            .filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === name + "=";
        })
            .map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null);
    };
    Cookie.prototype.set = function (name, value, expiresInMins) {
        var date = new Date();
        var location = document.location;
        date.setTime(date.getTime() + expiresInMins * 60 * 1000);
        var cookieName = name + '=' + value;
        var expires = ';expires=' + date.toUTCString();
        var domain = ';Domain=' + '.' + index_1.getTLD(location.hostname);
        var secure = index_1.isSecure(location) ? ';SameSite=None; Secure' : '';
        var path = ';path=/';
        document.cookie = cookieName + expires + domain + path + secure;
    };
    Cookie.prototype.extendExpiration = function (name, session) {
        if (session && this.isUserActive) {
            try {
                this.set(index_1.COOKIE_NAME, utils_1.default.hash(JSON.stringify(session)), utils_1.default.calculateSessionLength());
                this.setIsUserActive(false);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    Cookie.prototype.setIsUserActive = function (val) {
        this.isUserActive = val;
    };
    return Cookie;
}());
exports["default"] = Cookie;


/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testGetSrc = exports.sendPageview = exports.reassembleHostname = exports.isSecure = exports.getTLD = exports.getSession = exports.REFRESH_RATE = exports.COOKIE_NAME = void 0;
var utils_1 = __webpack_require__(55);
var cookie_1 = __webpack_require__(898);
exports.COOKIE_NAME = 'InstiSession';
exports.REFRESH_RATE = 60000;
var InsticatorApp;
(function (InsticatorApp) {
    var isPageviewInfoReady = false;
    var Prebid = (function () {
        function Prebid() {
        }
        Prebid.getWindowLocation = function () {
            return window.location;
        };
        Prebid.getWindowSelf = function () {
            return window.self;
        };
        Prebid.getWindowTop = function () {
            return window.top;
        };
        Prebid.getTopWindowLocation = function () {
            if (this.inIframe()) {
                var loc;
                try {
                    loc =
                        this.getAncestorOrigins() || this.getTopFrameReferrer();
                }
                catch (e) {
                    console.log('could not obtain top window location: ' + e);
                }
                if (loc)
                    return this.parse(loc, { decodeSearchAsString: true });
            }
            return this.getWindowLocation();
        };
        Prebid.inIframe = function () {
            try {
                return this.getWindowSelf() !== this.getWindowTop();
            }
            catch (e) {
                return true;
            }
        };
        Prebid.getAncestorOrigins = function () {
            if (window.document.location &&
                window.document.location.ancestorOrigins &&
                window.document.location.ancestorOrigins.length >= 1) {
                return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
            }
        };
        Prebid.getTopFrameReferrer = function () {
            try {
                window.top.location.toString();
                var referrerLoc = '';
                var currentWindow;
                do {
                    currentWindow = currentWindow
                        ? currentWindow.parent
                        : window;
                    if (currentWindow.document &&
                        currentWindow.document.referrer) {
                        referrerLoc = currentWindow.document.referrer;
                    }
                } while (currentWindow !== window.top);
                return referrerLoc;
            }
            catch (e) {
                return window.document.referrer;
            }
        };
        Prebid.parse = function (url, options) {
            var parsed = document.createElement('a');
            if (options &&
                'noDecodeWholeURL' in options &&
                options.noDecodeWholeURL) {
                parsed.href = url;
            }
            else {
                parsed.href = decodeURIComponent(url);
            }
            return {
                href: parsed.href,
                protocol: (parsed.protocol || '').replace(/:$/, ''),
                hostname: parsed.hostname,
                port: +parsed.port,
                pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
                hash: (parsed.hash || '').replace(/^#/, ''),
                host: parsed.host || window.location.host,
            };
        };
        return Prebid;
    }());
    var Campaign = (function () {
        function Campaign(urlQuery) {
            var params = new URLSearchParams(urlQuery);
            console.log('params: ', params);
            this.source = params.get('utm_source');
            this.medium = params.get('utm_medium');
            this.campaign = params.get('utm_campaign');
            this.term = params.get('utm_term');
            this.content = params.get('utm_content');
        }
        Campaign.equals = function (oldCampaign, newCampaign) {
            return (oldCampaign.source == newCampaign.source &&
                oldCampaign.medium == newCampaign.medium &&
                oldCampaign.campaign == newCampaign.campaign &&
                oldCampaign.term == newCampaign.term &&
                oldCampaign.content == newCampaign.content);
        };
        Campaign.isCampaignUpdated = function (oldCampaign, newCampaign) {
            var isCampaignUpdated = false;
            if (oldCampaign == null) {
                if (newCampaign != null) {
                    isCampaignUpdated = true;
                }
            }
            else {
                if (newCampaign != null &&
                    !this.equals(oldCampaign, newCampaign)) {
                    isCampaignUpdated = true;
                }
            }
            return isCampaignUpdated;
        };
        return Campaign;
    }());
    var Session = (function () {
        function Session(sessionLength, urlQuery) {
            this.id = this.generateId();
            this.referrer = this.getReferrer();
            this.campaign = new Campaign(urlQuery);
        }
        Session.prototype.generateId = function () {
            return utils_1.default.UUID();
        };
        Session.prototype.calculateExpiration = function (sessionLength) {
            var date = new Date();
            date.setTime(date.getTime() + sessionLength * 60 * 1000);
            return date.toUTCString();
        };
        Session.prototype.getReferrer = function () {
            return utils_1.default.extractHostname(utils_1.default.getReferrer());
        };
        return Session;
    }());
    var InstiSession = (function () {
        function InstiSession() {
            this.cookieName = exports.COOKIE_NAME;
            this.utils = new utils_1.default();
            this.cookie = new cookie_1.default();
        }
        InstiSession.prototype.getSessionForPageview = function () {
            var sessionLength = utils_1.default.calculateSessionLength();
            var session = this.getSessionFromCookie();
            if (session == null) {
                session = new Session(sessionLength, utils_1.default.getUrlQuery());
            }
            else {
                var currentReferrerDomain = utils_1.default.extractHostname(utils_1.default.getReferrer());
                var sessionReferrer = session.referrer;
                var isReferrerDifferent = sessionReferrer &&
                    getTLD(currentReferrerDomain) !== '' &&
                    getTLD(currentReferrerDomain) !== getTLD(sessionReferrer);
                if (isReferrerDifferent) {
                    session = new Session(sessionLength, utils_1.default.getUrlQuery());
                }
                else {
                    var newCampaign = new Campaign(utils_1.default.getUrlQuery());
                    var isCampaignChanged = Campaign.isCampaignUpdated(session.campaign, newCampaign);
                    if (isCampaignChanged) {
                        session = new Session(sessionLength, utils_1.default.getUrlQuery());
                    }
                }
            }
            this.setSessionToCookie(session, sessionLength);
            console.log('session: ', session);
            return session;
        };
        InstiSession.prototype.getSessionForEmbed = function () {
            var sessionLength = utils_1.default.calculateSessionLength();
            var session = this.getSessionFromCookie();
            if (session == null) {
                session = new Session(sessionLength, utils_1.default.getUrlQuery());
            }
            this.setSessionToCookie(session, sessionLength);
            console.log('session: ', session);
            return session;
        };
        InstiSession.prototype.getSessionFromCookie = function () {
            var sessionString = this.cookie.get(this.cookieName);
            var session = null;
            if (sessionString !== null &&
                typeof sessionString !== 'undefined') {
                try {
                    session = JSON.parse(sessionString);
                }
                catch (e) {
                    try {
                        session = JSON.parse(utils_1.default.unhash(sessionString));
                    }
                    catch (e) {
                        console.log('Invalid session value: ', sessionString);
                    }
                }
            }
            return session;
        };
        InstiSession.prototype.setSessionToCookie = function (session, expiresInMins) {
            if (this.cookie.isCookieEnabled) {
                this.cookie.set(this.cookieName, utils_1.default.hash(JSON.stringify(session)), expiresInMins);
                console.log('Cookie enabled, set cookie');
            }
            else {
                console.log('Cookie disabled');
            }
        };
        return InstiSession;
    }());
    var instiSession = new InstiSession();
    var PageviewType;
    (function (PageviewType) {
        PageviewType[PageviewType["HEADER_CODE_ONLY"] = 0] = "HEADER_CODE_ONLY";
        PageviewType[PageviewType["EMBED_ONLY"] = 1] = "EMBED_ONLY";
        PageviewType[PageviewType["AD_ONLY"] = 2] = "AD_ONLY";
        PageviewType[PageviewType["EMBED_AND_AD"] = 3] = "EMBED_AND_AD";
    })(PageviewType || (PageviewType = {}));
    var IntegrationType;
    (function (IntegrationType) {
        IntegrationType[IntegrationType["HARD_CODE"] = 0] = "HARD_CODE";
        IntegrationType[IntegrationType["HARD_CODED_WITH_FRIENDLY_IFRAME"] = 1] = "HARD_CODED_WITH_FRIENDLY_IFRAME";
        IntegrationType[IntegrationType["HARD_CODED_WITH_SAFEFRAME"] = 2] = "HARD_CODED_WITH_SAFEFRAME";
        IntegrationType[IntegrationType["DFP_WITH_SAFEFRAME"] = 3] = "DFP_WITH_SAFEFRAME";
        IntegrationType[IntegrationType["DFP_WITHOUT_SAFEFRAME"] = 4] = "DFP_WITHOUT_SAFEFRAME";
    })(IntegrationType || (IntegrationType = {}));
    var TopFrame = (function () {
        function TopFrame() {
            this.getClosestTop();
        }
        TopFrame.prototype.getClosestTop = function () {
            this.frame = window;
            this.isExceptionThrown = false;
            try {
                while (this.frame.parent.document !== this.frame.document) {
                    if (this.frame.parent.document) {
                        this.frame = this.frame.parent;
                    }
                    else {
                        this.isExceptionThrown = true;
                        break;
                    }
                }
            }
            catch (e) {
                this.isExceptionThrown = true;
            }
        };
        return TopFrame;
    }());
    var topFrame = new TopFrame();
    var Pageview = (function () {
        function Pageview() {
            var _this = this;
            this.TIMEOUT = 0;
            this.getPageviewInfo = function () {
                if (!isPageviewInfoReady) {
                    _this.id = _this.getId();
                    _this.pageUrl = _this.getBestPageUrl();
                    _this.ads = _this.getAdsOnPage();
                    _this.embeds = _this.getEmbedsOnPage();
                    _this.type = _this.getType();
                    _this.siteUUID = _this.getSiteUUID();
                    _this.session = instiSession.getSessionForPageview();
                    _this.timeStamp = new Date().toISOString();
                    _this.deviceType = _this.getDeviceType();
                    _this.integrationType = _this.getIntegrationType();
                    _this.sessionAndPageViewTemplateVersion =
                        _this.getSessionAndPageViewTemplateVersion();
                    isPageviewInfoReady = true;
                }
                return _this;
            };
            this.firePageview = function () {
                var pageview = _this.getPageviewInfo();
                topFrame.frame.ads_list = topFrame.frame.ads_list || [];
                topFrame.frame.embeds_list = topFrame.frame.embeds_list || [];
                topFrame.frame.ads_list = topFrame.frame.ads_list.concat(pageview.ads);
                topFrame.frame.embeds_list = topFrame.frame.embeds_list.concat(pageview.embeds);
                if (!topFrame.frame.isPageviewSent) {
                    topFrame.frame.isPageviewSent = true;
                    console.log('Send pageview now');
                    var url_1 = 'https://event.insticator.com/v1/event?event_name=event_pageview';
                    var testGroup_1 = '1';
                    setTimeout(function () {
                        var formatedPageview = _this.formatPageview(pageview, topFrame.frame.ads_list, topFrame.frame.embeds_list, testGroup_1);
                        console.log('formatedPageview: ', JSON.stringify(formatedPageview));
                        utils_1.default.makeAjaxCall('POST', url_1, formatedPageview, function () { });
                    }, _this.TIMEOUT);
                }
                else {
                    console.log('pageview have been sent or scheduled');
                }
            };
        }
        Pageview.prototype.getType = function () {
            var type;
            if (this.ads.length === 0) {
                if (this.embeds.length === 0) {
                    type = PageviewType[PageviewType.HEADER_CODE_ONLY];
                }
                else {
                    type = PageviewType[PageviewType.EMBED_ONLY];
                }
            }
            else {
                if (this.embeds.length === 0) {
                    type = PageviewType[PageviewType.AD_ONLY];
                }
                else {
                    type = PageviewType[PageviewType.EMBED_AND_AD];
                }
            }
            return type;
        };
        Pageview.prototype.getId = function () {
            var _a, _b;
            if ((_b = (_a = topFrame.frame) === null || _a === void 0 ? void 0 : _a.federatedObj) === null || _b === void 0 ? void 0 : _b.pageview_id)
                return topFrame.frame.federatedObj.pageview_id;
            return utils_1.default.UUID();
        };
        Pageview.prototype.getPageUrl = function () {
            var topWindowPageUrl;
            try {
                topWindowPageUrl = window.top.location.href;
            }
            catch (e) { }
            return topWindowPageUrl == null
                ? document.referrer
                : topWindowPageUrl;
        };
        Pageview.prototype.getBestPageUrl = function () {
            var bestPageUrl = '';
            console.log('topFrame: ', topFrame);
            if (!topFrame.isExceptionThrown) {
                bestPageUrl = topFrame.frame.location.href;
            }
            else {
                try {
                    try {
                        bestPageUrl = window.top.location.href;
                    }
                    catch (e) {
                        var aOrigins = window.location.ancestorOrigins;
                        bestPageUrl = aOrigins[aOrigins.length - 1];
                    }
                }
                catch (e) {
                    bestPageUrl = topFrame.frame.document.referrer;
                }
            }
            return bestPageUrl;
        };
        Pageview.prototype.getAdsOnPage = function () {
            var adsOnPage = [];
            var adUnits = document.querySelectorAll('[id^="div-insticator-ad"]');
            for (var i = 0; i < adUnits.length; i++) {
                var adUnit = adUnits[i].id;
                adsOnPage.push(adUnit);
            }
            return adsOnPage;
        };
        Pageview.prototype.getEmbedsOnPage = function () {
            var embedOnPage = [];
            var insticatorContainerElement = document.getElementById('insticator-container');
            if (insticatorContainerElement) {
                var insticatorBodyScript = insticatorContainerElement.getElementsByTagName('script');
                if (insticatorBodyScript) {
                    for (var i = 0; i < insticatorBodyScript.length; i++) {
                        var regex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
                        var bodyCode = insticatorBodyScript[i].innerHTML;
                        var found = bodyCode.match(regex);
                        if (found) {
                            embedOnPage.push(found[0]);
                            break;
                        }
                    }
                }
            }
            return embedOnPage;
        };
        Pageview.prototype.getSessionAndPageViewTemplateVersion = function () {
            return 'V3.2';
        };
        Pageview.prototype.getSiteUUID = function () {
            return '6f83f478-eee3-4828-b55c-3385e33fc440';
        };
        Pageview.prototype.getDeviceType = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                ? 'MOBILE'
                : 'DESKTOP';
        };
        Pageview.prototype.isInFriendlyIframe = function () {
            return window.self.document !== window.top.document;
        };
        Pageview.prototype.isDFPFriendlyFrame = function () {
            return !!window.name && window.name.indexOf('google') !== -1;
        };
        Pageview.prototype.isDFPSafeFrame = function () {
            return (window.location.href.indexOf('googlesyndication') !== -1 &&
                window.location.href.indexOf('safeframe') !== -1);
        };
        Pageview.prototype.getIntegrationType = function () {
            try {
                if (this.isInFriendlyIframe()) {
                    return this.isDFPFriendlyFrame()
                        ? IntegrationType.DFP_WITHOUT_SAFEFRAME
                        : IntegrationType.HARD_CODED_WITH_FRIENDLY_IFRAME;
                }
                else {
                    return IntegrationType.HARD_CODE;
                }
            }
            catch (e) {
                return this.isDFPSafeFrame()
                    ? IntegrationType.DFP_WITH_SAFEFRAME
                    : IntegrationType.HARD_CODED_WITH_SAFEFRAME;
            }
        };
        Pageview.prototype.setFederatedData = function () {
            var adsCodeSrc = utils_1.default.getAdsCodeSrcUrl();
            if (!topFrame.frame.federatedObj) {
                topFrame.frame.federatedObj = {
                    pageview_id: this.id,
                };
            }
            if (adsCodeSrc && topFrame.frame.insticatorCommentingUnitSettings) {
                topFrame.frame.federatedObj.adsCodeSrc = adsCodeSrc;
            }
        };
        Pageview.prototype.getHeaderCodeVersion = function () {
            return typeof window.insticatorHeaderCodeVersion !== 'undefined'
                ?
                    window.insticatorHeaderCodeVersion
                : 'UNDEFINED';
        };
        Pageview.prototype.formatPageview = function (pageview, ads, embeds, testGroup) {
            return {
                timestamp: pageview.timeStamp,
                user_data: {
                    session_details: pageview.session,
                },
                embed_context: {
                    site: {
                        id: pageview.siteUUID,
                        page_url: pageview.pageUrl,
                        hostname: Prebid.getTopWindowLocation().hostname,
                    },
                    environment: {
                        device: pageview.deviceType,
                    },
                },
                event_data: {
                    type: 'load',
                    data: {
                        pageview_id: pageview.id,
                        pageview_type: pageview.type,
                        integration_type: IntegrationType[pageview.integrationType],
                        ads: ads,
                        embed: embeds,
                        header_code_version: this.getHeaderCodeVersion(),
                        session_and_page_view_code_version: pageview.sessionAndPageViewTemplateVersion,
                        test_group: testGroup,
                    },
                },
            };
        };
        return Pageview;
    }());
    var pageview = new Pageview();
    function setIsPageviewInfoReady(val) {
        isPageviewInfoReady = val;
    }
    function setIsPageviewSent(val) {
        topFrame.frame.isPageviewSent = val;
    }
    function handleSendPageView() {
        pageview.firePageview();
        if (isPageviewInfoReady)
            pageview.setFederatedData();
        else
            utils_1.default.documentReady(pageview.setFederatedData);
    }
    function handleSPARouting() {
        var _a, _b;
        setIsPageviewSent(false);
        setIsPageviewInfoReady(false);
        if ((_b = (_a = topFrame.frame) === null || _a === void 0 ? void 0 : _a.federatedObj) === null || _b === void 0 ? void 0 : _b.pageview_id)
            topFrame.frame.federatedObj.pageview_id = utils_1.default.UUID();
        handleSendPageView();
    }
    function sendPageview() {
        initListeners();
        handleSendPageView();
        var pushStateAPI = history.pushState;
        var replaceStateAPI = history.replaceState;
        history.pushState = function () {
            setTimeout(handleSPARouting);
            return pushStateAPI.apply(history, arguments);
        };
        history.replaceState = function () {
            setTimeout(handleSPARouting);
            return replaceStateAPI.apply(history, arguments);
        };
        topFrame.frame.addEventListener('popstate', function () {
            setTimeout(handleSPARouting);
        });
    }
    InsticatorApp.sendPageview = sendPageview;
    function getSession() {
        return instiSession.getSessionForEmbed();
    }
    InsticatorApp.getSession = getSession;
    function reassembleHostname(parts, length) {
        return parts.slice(Math.max(parts.length - length, 0)).join('.');
    }
    InsticatorApp.reassembleHostname = reassembleHostname;
    function getTLD(currentHostname) {
        var mostCommonTLDs = ['com', 'net', 'org', 'io', 'co'];
        var parts = currentHostname.split('.'), lastIndex = parts.length - 1;
        if (mostCommonTLDs.indexOf(parts[lastIndex]) != -1)
            return reassembleHostname(parts, 2);
        if (mostCommonTLDs.indexOf(parts[lastIndex - 1]) != -1)
            return reassembleHostname(parts, 3);
        return currentHostname;
    }
    InsticatorApp.getTLD = getTLD;
    function isSecure(location) {
        return location.protocol === 'https:';
    }
    InsticatorApp.isSecure = isSecure;
    function initListeners() {
        var session = instiSession.getSessionFromCookie();
        utils_1.default.addListeners({
            handleEvent: function () { return instiSession.cookie.setIsUserActive(true); },
        });
        setInterval(function () { return instiSession.cookie.extendExpiration(exports.COOKIE_NAME, session); }, exports.REFRESH_RATE);
    }
    InsticatorApp.initListeners = initListeners;
})(InsticatorApp || (InsticatorApp = {}));
exports.getSession = InsticatorApp.getSession;
exports.getTLD = InsticatorApp.getTLD;
exports.isSecure = InsticatorApp.isSecure;
exports.reassembleHostname = InsticatorApp.reassembleHostname;
exports.sendPageview = InsticatorApp.sendPageview;
exports.testGetSrc = utils_1.default.getAdsCodeSrcUrl;


/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ADS_CODE_PREFIX = 'cloudfront.net/ads-code/';
var ADS_CODE_PREFIX_STAGING = 'insticator-mks-staging/ads-code/';
var Utils = (function () {
    function Utils() {
    }
    Utils.getReferrer = function () {
        return document.referrer;
    };
    Utils.getUrlQuery = function () {
        return document.location.search;
    };
    Utils.extractHostname = function (url) {
        var hostname;
        if (url.indexOf('//') > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        return hostname;
    };
    Utils.UUID = function () {
        var dec2hex = [];
        for (var i_1 = 0; i_1 <= 15; i_1++) {
            dec2hex[i_1] = i_1.toString(16);
        }
        var uuid = '';
        for (var i = 1; i <= 36; i++) {
            if (i === 9 || i === 14 || i === 19 || i === 24) {
                uuid += '-';
            }
            else if (i === 15) {
                uuid += 4;
            }
            else if (i === 20) {
                uuid += dec2hex[(Math.random() * 4) | (0 + 8)];
            }
            else {
                uuid += dec2hex[(Math.random() * 16) | 0];
            }
        }
        return uuid;
    };
    Utils.makeAjaxCall = function (method, url, data, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(xmlHttp.responseText);
            }
        };
        xmlHttp.open(method, url, true);
        xmlHttp.setRequestHeader('Content-type', 'application/json');
        xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
        var jsonData = JSON.stringify(data);
        xmlHttp.send(jsonData);
    };
    Utils.documentReady = function (fn) {
        if (document.readyState != 'loading') {
            console.log('dom ready!');
            fn();
        }
        else if (document.addEventListener) {
            console.log('dom not ready, set up listener');
            document.addEventListener('DOMContentLoaded', fn);
        }
        else {
            console.log('ignore ie');
            fn();
        }
    };
    Utils.hash = function (value) {
        return window.btoa(value);
    };
    Utils.unhash = function (value) {
        return window.atob(value);
    };
    Utils.calculateSessionLength = function () {
        var estTimeLocaleString = new Date().toLocaleString('en-US', {
            timeZone: 'America/New_York',
        });
        var estTime = new Date(estTimeLocaleString);
        var sessionLength = 30;
        if (estTime.getHours() == 23 && estTime.getMinutes() > 30) {
            sessionLength = 60 - estTime.getMinutes();
        }
        return sessionLength;
    };
    Utils.addListeners = function (callback) {
        var types = ['click', 'touches', 'keydown'];
        return types.map(function (type) { return document.addEventListener(type, callback); });
    };
    Utils.getAdsCodeSrcUrl = function () {
        var url;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; ++i) {
            var src = scripts[i].getAttribute('src');
            try {
                if (src &&
                    (src.indexOf(ADS_CODE_PREFIX) !== -1 ||
                        src.indexOf(ADS_CODE_PREFIX_STAGING) !== -1)) {
                    url = src;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        return url;
    };
    return Utils;
}());
exports["default"] = Utils;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(846);
/******/ 	InsticatorApp = __webpack_exports__;
/******/ 	
/******/ })()
;
if(typeof InsticatorApp !== 'undefined' && typeof InsticatorApp.sendPageview === 'function') {
    InsticatorApp.sendPageview();
    InsticatorApp.VERSION = "V3.2";
}

var insticatorHeaderCodeVersion = "STANDARD-feature-HS-1554-stocktwits-override-2022-06-15 16:00:36";
var __webpack_exports__ = {};
try {
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var instBid = instBid || {};
    instBid.que = instBid.que || [];
    (function () {
        "use strict";
        
        var settings = {
            global: {
                domain: "stocktwits.com",
                gamNetworkId: "2507246",
                
                    gamNetworkString: "2507246,22404395434",
                
                amazonUamId: '70fb13d1-ab65-42ac-a7ca-0b4e680d5c92',
                insticatorAsi: 'insticator.com',
                insticatorSid: 'ce637c43-22f3-419d-b04d-324f5976e66b',
                embedHost: 'https://dashboard.insticator.com',
                enableAAX: false,
                siteUUID: "6f83f478-eee3-4828-b55c-3385e33fc440",
            },
            ad: {
                settings: {
                    DEVICE_TYPE_BREAKPOINTS: {"mobileUpper": 748, "desktopLower": 990},
                    PREBID_TIMEOUT: 4000,
                    PREBID_MOBILE_TIMEOUT: 4000,
                    REFRESH_TIMEOUT: 5000,
                    AMAZON_TIMEOUT: 3000,
                    adUnitToSizeMap: {
                        DESKTOP: JSON.parse('{"div-insticator-ad-1":{"width":300,"height":250},"div-insticator-ad-3":{"width":300,"height":250},"div-insticator-ad-5":{"width":300,"height":250}}'),
                        TABLET: JSON.parse('{}'),
                        MOBILE: JSON.parse('{"div-insticator-ad-1":{"width":300,"height":250},"div-insticator-ad-3":{"width":300,"height":250},"div-insticator-ad-5":{"width":300,"height":250}}')
                    },
                    hoverAdUnits: [],
                    embedOverlayAd: JSON.parse('{"0231acdc-223d-4ee3-b401-0eda627593bc":{"mobile":[],"web":[]},"62624a89-c125-422b-a5a3-96c6666cacfd":{"mobile":[],"web":[]},"e91c268f-ff86-4233-b49b-67dbb1868f3b":{"mobile":[],"web":[]}}'),
                    autoRefreshIntervalLowerBound: 30000,
                    autoRefreshIntervalUpperBound: 30000,
                    excludeClickRefreshAdX: false,
                    excludeAutoRefreshAdX: !true || false,
                    renderSecondHighestBid: true,
                    AUTO_REFRESH_CAP: 20000,
                    impressionType: {
                        INITIAL_LOAD: "il",
                        TIME_BASED_REFRESH: "tbr",
                        SMART_REFRESH: "sr"
                    },
                    geoSSPWhitelistingMap: JSON.parse('{"PR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko","triplelift_oko"],"PW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"QA":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AE":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","index_oko","ix","openx","openx_oko","risecodes_ironsource","rubicon","rubicon_oko","sharethrough","sovrn","teads_oko","triplelift_oko"],"AF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AQ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","index_oko","ix","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","triplelift_oko"],"RE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AU":["33across","33across_oko","Emx_Oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","emx_digital","fluct","fluct_oko","improvedigital_oko","index_oko","ix","onemobile","openx","openx_oko","pubmatic","pubmatic_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sharethrough","sonobi","sonobi_oko","sovrn","synacormedia","synacormedia_oko","teads_oko","triplelift_oko","ucfunnel","verizonmedia"],"AW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AX":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"AZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"RO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BB":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"RS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","index_oko","ix","openx","openx_oko","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko"],"RU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"RW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BJ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SA":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko","sharethrough"],"BQ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SB":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BR":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SE":["Emx_Oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","emx_digital","ix","onemobile","openx","openx_oko","pubmatic","pubmatic_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","verizonmedia"],"BT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SG":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","fluct","fluct_oko","index_oko","ix","openx","openx_oko","risecodes_ironsource","rubicon","rubicon_oko","sonobi","sonobi_oko","synacormedia","synacormedia_oko","ucfunnel"],"BV":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SJ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"BZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CA":["33across","33across_oko","Emx_Oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","emx_digital","fluct","fluct_oko","gumgum","gumgum_oko","improvedigital_oko","index_oko","ix","onemobile","openx","openx_oko","pubmatic","pubmatic_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sharethrough","sonobi","sonobi_oko","sovrn","synacormedia","synacormedia_oko","teads_oko","triplelift_oko","ucfunnel","verizonmedia"],"SR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ST":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SV":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","ix","openx","openx_oko","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sonobi","sonobi_oko","sovrn"],"SX":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"SZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CV":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","fluct","fluct_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CX":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TJ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"CZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"DE":["Emx_Oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","emx_digital","index_oko","ix","onemobile","openx","openx_oko","pubmatic","pubmatic_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","teads_oko","triplelift_oko","verizonmedia"],"TV":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","fluct","fluct_oko","index_oko","ix","risecodes_ironsource","rubicon","rubicon_oko","ucfunnel"],"DJ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"TZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"DK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","index_oko","ix","openx","openx_oko","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn"],"DM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"DO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"UA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","openx","openx_oko","risecodes_ironsource","rubicon","rubicon_oko"],"UG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"DZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"UM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","fluct","fluct_oko","openx","openx_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","synacormedia_oko","teads_oko"],"US":["33across","33across_oko","Emx_Oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","emx_digital","fluct","fluct_oko","gumgum","gumgum_oko","improvedigital_oko","index_oko","insticator","ix","onemobile","openx","openx_oko","pubmatic","pubmatic_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sharethrough","sonobi","sonobi_oko","sovrn","synacormedia","synacormedia_oko","teads_oko","triplelift_oko","ucfunnel","verizonmedia"],"EC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"EE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"EG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"EH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"UY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"UZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ER":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ES":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","conversant","onemobile","openx","openx_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","triplelift_oko","verizonmedia"],"ET":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","fluct","fluct_oko","risecodes_ironsource","rubicon","rubicon_oko"],"VU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"FI":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","index_oko","ix","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn"],"FJ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"FK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"FM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"FO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"FR":["Emx_Oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","conversant","emx_digital","onemobile","openx","openx_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","teads_oko","triplelift_oko","verizonmedia"],"WF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GB":["Emx_Oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","emx_digital","gumgum","gumgum_oko","improvedigital_oko","index_oko","insticator","ix","onemobile","openx","openx_oko","pubmatic","pubmatic_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sharethrough","sonobi_oko","sovrn","synacormedia","synacormedia_oko","teads_oko","triplelift_oko","verizonmedia"],"WS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GP":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GQ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"GY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"XK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"HK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","fluct","fluct_oko","index_oko","ix","openx","openx_oko","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sonobi","sonobi_oko","sovrn","ucfunnel"],"HM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"HN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"HR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"HT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"YE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"HU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ID":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"YT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IE":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","conversant","onemobile","openx","openx_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","synacormedia","synacormedia_oko","teads_oko","triplelift_oko","verizonmedia"],"IL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ZA":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko","teads_oko"],"IQ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"IT":["Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","index_oko","ix","onemobile","openx","openx_oko","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","triplelift_oko","verizonmedia"],"ZM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"JE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ZW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"JM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"JO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"JP":["aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","fluct","fluct_oko","index_oko","ix","openx","openx_oko","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sonobi","sonobi_oko","ucfunnel"],"KE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KP":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","fluct","fluct_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"KZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LB":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LV":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"LY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MD":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ME":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"ML":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MO":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MP":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MQ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MS":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MT":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MV":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MW":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MX":["aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","index_oko","ix","risecodes_ironsource","rubicon","triplelift_oko","ucfunnel"],"MY":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","fluct","fluct_oko","risecodes_ironsource","rubicon","rubicon_oko"],"MZ":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NC":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NI":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","openx","openx_oko","risecodes_ironsource","rubicon","triplelift_oko"],"NO":["Emx_Oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","emx_digital","index_oko","ix","pubmatic","pubmatic_oko","risecodes_ironsource","rubicon","rubicon_oko","sonobi","sonobi_oko"],"NP":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NR":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NU":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"NZ":["33across","33across_oko","Smartadserver_oko","aax_oko","acuityads","adx_oko","amazon","amazon_oko","amx","amx_oko","aniview_oko","appnexus","appnexus_oko","conversant","index_oko","ix","onemobile","rhythmone","rhythmone_oko","risecodes_ironsource","rubicon","rubicon_oko","sovrn","synacormedia","synacormedia_oko","teads_oko","triplelift_oko","ucfunnel","verizonmedia"],"OM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PA":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PE":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PF":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PG":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PH":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","fluct","fluct_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PK":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PL":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PM":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"],"PN":["aax_oko","acuityads","adx_oko","amx","amx_oko","aniview_oko","risecodes_ironsource","rubicon","rubicon_oko"]}'),
                    divToAdUnitMap: JSON.parse('{"DESKTOP":{"div-insticator-ad-1":"stocktwits.com_Web_300x250_1","div-insticator-ad-3":"stocktwits.com_Web_300x250_3","div-insticator-ad-5":"stocktwits.com_Web_300x250_5"},"MOBILE":{"div-insticator-ad-1":"stocktwits.com_Mobile_300x250_1","div-insticator-ad-3":"stocktwits.com_Mobile_300x250_3","div-insticator-ad-5":"stocktwits.com_Mobile_300x250_5"},"TABLET":{}}'),
                    mockup: {
                        on: false
                    },
                    showHouseAds: true,
                    multisize: {
                        on: false,
                        custom: JSON.parse('{"dfp":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]],"320x50":[[320,100],[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"33across":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]],"320x50":[[320,50]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"adkernel":{"desktop":{"300x600":[],"160x600":[],"728x90":[[728,90]],"300x250":[[300,250]],"320x50":[]},"mobile":{"300x250":[[300,250]],"320x50":[]}},"amx":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]],"320x50":[[320,100],[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"appnexus":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]],"320x50":[[320,100],[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"beachfront":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[],"300x250":[[300,250],[320,50]],"320x50":[[320,50]]},"mobile":{"300x250":[[320,50],[300,250]],"320x50":[[320,50]]}},"conversant":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100]],"320x50":[[320,100]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[300,250]],"320x50":[[320,100]]}},"districtm":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250],[320,50]],"320x50":[[320,50]]},"mobile":{"300x250":[[320,50],[300,250]],"320x50":[[320,50]]}},"emx_digital":{"desktop":{"300x600":[[300,600],[300,250]],"160x600":[],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]],"320x50":[[320,100],[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90]],"970x90":[[970,90],[728,90],[468,60]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"gumgum":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250]],"320x50":[[320,100]]},"mobile":{"300x250":[[336,280],[320,100],[300,250]],"320x50":[[320,100]]}},"improvedigital":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]],"320x50":[[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"insticator":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]],"320x50":[[320,50]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"ix":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]],"320x50":[[320,100],[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"mediago":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]],"320x50":[[320,50]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"openx":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]],"320x50":[[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"pubmatic":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]],"320x50":[[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90]],"970x90":[[970,90],[728,90],[468,60]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"pulsepoint":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]],"320x50":[[320,50]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"rhythmone":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]],"320x50":[[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90]],"970x90":[[970,90],[728,90],[468,60]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"rubicon":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,50]],"320x50":[[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[320,50],[300,250]],"320x50":[[320,50]]}},"sonobi":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]],"320x50":[[320,100],[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90],[486,60],[320,100],[320,50]],"970x90":[[970,90],[728,90],[468,60],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"sovrn":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]],"320x50":[[320,100],[320,50]],"970x250":[[970,250]],"970x90":[[970,90]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"synacormedia":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[],"300x250":[[336,280],[300,250],[320,100],[320,50]],"320x50":[[320,50]],"970x250":[[970,250],[300,250],[970,90],[728,90]],"970x90":[[970,90],[728,90],[468,60]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"teads":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]],"320x50":[[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"triplelift":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]],"320x50":[[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"ucfunnel":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]],"320x50":[[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}}}')
                    },
                    testGroupNumber: String(window.insticator_tg || 1),
                    adUnitSettings: JSON.parse('{"DESKTOP":{"multiSizeOn":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"adRefreshOn":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"fixedHeightOn":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"enabledGAM":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"multiSizeConfig":{"div-insticator-ad-1":[[728,90],[120,600],[250,250],[160,600],[468,60],[970,250],[300,600],[300,250],[970,90]],"div-insticator-ad-3":[[728,90],[120,600],[250,250],[160,600],[468,60],[970,250],[300,600],[300,250],[970,90]],"div-insticator-ad-5":[[728,90],[120,600],[250,250],[160,600],[468,60],[970,250],[300,600],[300,250],[970,90]]}},"MOBILE":{"multiSizeOn":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"adRefreshOn":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"fixedHeightOn":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"enabledGAM":["div-insticator-ad-1","div-insticator-ad-3","div-insticator-ad-5"],"multiSizeConfig":{"div-insticator-ad-1":[[728,90],[120,600],[250,250],[160,600],[468,60],[970,250],[300,600],[300,250],[970,90]],"div-insticator-ad-3":[[728,90],[120,600],[250,250],[160,600],[468,60],[970,250],[300,600],[300,250],[970,90]],"div-insticator-ad-5":[[728,90],[120,600],[250,250],[160,600],[468,60],[970,250],[300,600],[300,250],[970,90]]}},"TABLET":{}}'),
                    enableCustomPrebid: {
                        on: true,
                        customScript: "https://df80k0z3fi8zg.cloudfront.net/files/instibid/6f83f478-eee3-4828-b55c-3385e33fc440.js"
                    },
                    isOkoSite: false,
                    enableInterstitialDesktop: false,
                    enableInterstitialMobile: false,
                    siteUrl: "stocktwits.com",
                    
                        amazonBidMap: JSON.parse('{"1ai57nk":"1.77","8nb400":"35","tktzb4":"0.02","b0u4u8":"12","103kfsw":"2.77","1huugao":"2.79","13ueygw":"1.65","1yx5hc0":"1.71","191pce8":"7.85","h3c934":"2.32","d7hxq8":"1.6","1cq1yps":"1.61","1t5vwn4":"5.15","1xe7pq8":"2.67","1hzu8zk":"0.23","m84qo0":"3.5","1mfnr40":"0.31","144ejuo":"0.93","19o6fi8":"1.13","4luiv4":"0.92","1phjabk":"2.39","1lvokcg":"0.95","2ib3eo":"25","tutkow":"1.3","11mi7eo":"1.81","1vv9y4g":"1.23","c461a8":"32","rwwf0g":"1.14","1dk0qv4":"0.25","azl6o0":"1.76","fpea68":"0.72","hnbfuo":"1.68","1uhbz7k":"1.63","19e6u4g":"1.45","58blz4":"5.4","o123nk":"0.62","3udn28":"7.4","t0usjk":"0.66","p50h6o":"0.14","hdbugw":"0.4","1dwi8lc":"6.65","md4jcw":"0.94","ir9tds":"1.5","gtcnpc":"1.04","s0n9j4":"16.5","kk76dc":"2.62","1cb2kn4":"2.89","9vmt4w":"1.44","lvn8xs":"5.5","exxedc":"7.6","1v8sv0g":"7.95","1wa9c74":"3.15","17b9vr4":"3.65","9ln7r4":"0.16","csijnk":"2.88","14odqm8":"0.29","nibv28":"11.5","13kfd34":"0.37","1frxhxc":"0.09","15kuf40":"7.65","1fmxp8g":"2.65","56g6ps":"31","lt5clc":"0.38","p00ohs":"2.7","50twxs":"2.84","13ffke8":"2.93","3rvqps":"2.28","7dqgow":"0.12","tic2yo":"7.7","1xbptds":"7.15","1b24ef4":"1.93","q8yups":"0.46","1odkwsg":"2.07","1181s":"3.4","ug1pmo":"12.5","126he68":"1.97","ms3xfk":"2.86","112j0n4":"2.45","1hfv280":"0.87","16wahog":"0.13","5kt3pc":"3.8","1mzmxvk":"1.27","iha800":"0.22","xgoao0":"0.74","c61gjk":"6.4","hxb18g":"0.86","4vu48w":"2.2","t5ul8g":"4.5","1m8622o":"7.35","wz708w":"5.7","u7b2f4":"6.1","4buxhc":"1.64","i2atxc":"4.7","gocv0g":"3.6","zol1q8":"0.85","1a85m9s":"0.49","18cqcxs":"6.85","xvnoqo":"2.66","1bm3l6o":"1.29","135fz0g":"4.85","b9ks1s":"0.64","e1gpvk":"0.24","2nxd6o":"1.96","1gbwoow":"1.05","fzdvk0":"2","8cp1j4":"3","1manyf4":"2.87","vtzojk":"10.5","pf02kg":"1.42","1t3e0ao":"0.03","1itt14w":"2.47","1du0c8w":"1.53","onj6rk":"5.9","73qvb4":"2.04","dhhj40":"0.88","1l1ps74":"2.31","11whssg":"0.69","15icirk":"2.53","nh2ww0":"1.26","162bpj4":"1.89","1urbklc":"0.91","4s39q8":"15","1yi639c":"2.99","1exyps0":"1.85","1w59ji8":"2.51","qqg54w":"8.5","kz6kg0":"1.34","1qlhnuo":"2.11","g84irk":"18","1cg2dc0":"0.33","108k8hs":"0.21","11ri03k":"3.25","1yn5vy8":"0.43","1jds7wg":"1.83","cdj5kw":"0.96","vsqqdc":"0.26","rmwtmo":"1.46","10sjf9c":"1.17","zelgcg":"1.7","fcabcw":"30","69s35s":"0.6","46v4sg":"4.2","elfwn4":"1.2","1qvh98g":"0.19","ol1af4":"0.78","mx3q4g":"0.3","18k81z4":"0.81","hptc74":"6.8","1ijtfr4":"1.19","1e3zxmo":"1.21","1krq6tc":"1.03","7xpngg":"1.08","12hp8g":"6.6","7wgpa8":"19","18z7g1s":"2.73","10ijtvk":"1.49","146wg74":"6.05","1d01k3k":"0.89","ehp24g":"14","1nylips":"3.35","1v6ayo0":"2.83","1glwa2o":"2.33","1oxk3k0":"1.43","bjkdfk":"1.92","g9dgxs":"0.08","hf79q8":"26","130g6bk":"1.01","1wf94w0":"0.59","jl8lj4":"0.54","9gnf28":"2.72","evfi0w":"2.48","7plhc0":"27","1mpnchs":"1.59","1bh3shs":"3.85","drh4hs":"2.16","1nm40zk":"5.75","sgvls0":"0.5","19478qo":"0.17","k1gxs0":"13.5","6tr9xc":"0.76","std3i8":"6.9","faew3k":"4.4","ov0vsw":"2.06","1jsrlz4":"4.55","1njm4n4":"0.63","1i2c5c0":"5.35","1g1x3b4":"1.37","mn44qo":"2.22","176a328":"1.41","1rpg1ds":"2.43","ypmgw0":"4.9","158cxds":"1.25","1u7cdts":"0.35","qdyneo":"4.3","h0ucqo":"10","u4t62o":"0.98","41vc3k":"0.36","qsy1hc":"0.82","1lbpdkw":"0.39","19y60w0":"2.41","1hpunls":"2.15","23y6f4":"1.8","1bw36kg":"0.97","1i9tudc":"1.51","19qobuo":"6.25","yd4z5s":"6.5","gjd2bk":"1.36","1txcsg0":"2.27","aplla8":"0.48","1p01zwg":"6.55","nr2i9s":"2.54","1y36p6o":"1.07","1onki68":"0.15","1ietn28":"3.75","kf7dog":"1.98","14ydc00":"1.57","8rofls":"1.72","1df0y68":"2.81","zykn40":"2.13","aflzwg":"2.4","as3hmo":"5.6","1tc3y8":"21","r7xfk0":"2.74","807jsw":"6.2","10dk16o":"4.05","k57sao":"0.7","1s4ffgg":"4.35","yum9kw":"2.34","wmpiio":"2.5","1tddlog":"1.31","1lloyyo":"1.67","4fls00":"17","g4do8w":"2.64","1privpc":"0.47","zzsw0":"1.48","1xt73sw":"1.39","yan2tc":"1.38","s6w0e8":"2.42","1ez6yo":"5","y0nhfk":"0.1","1l6pkw0":"2.95","cniqyo":"2.24","1gvvvgg":"0.41","18p7uo0":"4.65","18a8glc":"1.73","n73bi8":"1.58","1sjetj4":"0.67","a5meio":"1.12","16yse0w":"5.25","1oikphc":"2.71","djzfgg":"6","13afrpc":"2.29","xbohz4":"3.3","55tpmo":"0.28","f5f3eo":"0.56","1steeww":"1.95","1enz4e8":"0.57","1h5vgu8":"1.69","n9l7uo":"6.7","1n9mj9c":"2.55","1xj7if4":"0.11","khpa0w":"7.1","2gfo5c":"5.8","1jga48w":"6.95","ebgb9c":"1.52","ahhf5s":"28","1f7yb5s":"0.73","eatu68":"22","11cim0w":"0.53","ykmo74":"1.06","12qgkxs":"1.33","9aeo74":"20","ujsk5c":"2.9","1012jgg":"7.25","1a35tkw":"3.05","1ntlq0w":"1.91","1u2cl4w":"2.91","1k7r01s":"0.07","1xo7b40":"3.95","2wnb4":"29","6m9kw0":"7","x6opa8":"1.86","1yd6akg":"2.35","1bc3zsw":"0.01","uyry80":"1.62","1cik9og":"5.45","9qn0g0":"4","17g9og0":"1.09","1cv1reo":"3.45","610qo":"0.84","vir4zk":"2.18","1uwbda8":"4.75","bdbmkg":"16","3wvjeo":"2.92","5zshs0":"2.52","1wz8bnk":"0.75","j3rb40":"6.3","jv86ww":"1.82","sqv75s":"1.78","1p7joxs":"1.11","1s9f85c":"1.79","taudxc":"1.94","rrwmbk":"3.7","1q1ih34":"1.75","11f0idc":"5.65","1qbi2gw":"0.83","1rfgg00":"1.15","i7amm8":"2.14","ffeosg":"1.84","16cbaww":"0.77","pozny8":"1.1","16raozk":"2.69","w2qbr4":"1.54","lo5jwg":"2.94","rff4lc":"5.3","qiyg3k":"1.74","cv0g00":"8","1x97x1c":"2.03","q1h5og":"7.5","1v1b5z4":"2.19","pyz9c0":"2.38","1khqlfk":"1.35","1tnd728":"0.99","6jrojk":"1.88","1mknjsw":"4.15","1goe6f4":"7.45","15xbwu8":"4.45","15sc45c":"0.61","1b4mark":"7.05","1j3smio":"0.55","1jxreo0":"1.99","37wjy8":"1.32","19ze9s":"1.16","17q99ts":"2.37","lj5r7k":"2.3","ciiy9s":"4.8","6v083k":"11","h8c1s0":"2.96","1gqw2rk":"2.97","1b74740":"2.57","wcpx4w":"1.22","5ftb0g":"1.56","jg8su8":"3.1","7b8kcg":"7.8","tfu6m8":"2.58","fl0ykg":"34","jb905c":"2.46","zaults":"14.5","yzm29s":"2.98","12syha8":"6.45","ku6rr4":"3.9","cxiccg":"0.32","1ypnsao":"5.55","12bh6v4":"2.61","g0m4g":"2.12","xqnw1s":"2.02","1jnrta8":"0.71","ib1h4w":"17.5","2dxrsw":"0.68","1808v7k":"0.45","jsqakg":"9.5","1qqhgjk":"2.75","87p8u8":"2.36","2xwykg":"0.04","wwp3wg":"0.58","bok64g":"2.56","uesrgg":"2.26","nm2pkw":"5.1","z4luyo":"0.42","vnqxog":"2.82","q07i8":"0.2","1ujtvk0":"6.75","1vlacqo":"1.55","1qdzytc":"5.95","35enls":"9","14jdxxc":"2.85","1sye7ls":"2.59","1r5gum8":"1.47","1rzfmrk":"0.51","1wp8q9s":"1.87","b4kzcw":"3.2","1rrxxq8":"7.55","12ggzk0":"0.05","p8rbpc":"15.5","1vbarcw":"0.27","rcx88w":"0.18","91o0zk":"0.8","1k593pc":"7.75","1pcjhmo":"4.95","1c62ry8":"2.25","vl91c0":"7.3","3hw5c0":"1","c7wvsw":"24","iesbnk":"7.9","1vxrugw":"6.35","9bnmdc":"2.08","1e8zqbk":"5.05","1fhxwjk":"2.01","ob1p1c":"1.9","j19erk":"1.18","16mawao":"2.05","7nq22o":"1.4","1da15hc":"2.17","1as4t1c":"0.65","1tyl1c":"0.52","r2xmv4":"2.1","uoscu8":"0.34","l965ts":"1.02","5z60ow":"23","1ku835s":"6.15","1m5o5q8":"2.23","1o3lbeo":"0.79","vxqj28":"4.1","14ee58g":"2.21","wvg5q8":"18.5","1k2r7cw":"2.63","m34xz4":"1.66","9e5ips":"7.2","1edzj0g":"2.49","n5udc0":"19.5","18u7ncw":"2.09","l0etc":"2.76","78qo00":"2.68","1jyznk":"2.44","1tidedc":"3.55","icafb4":"2.78","gbvda8":"5.2","dwgx6o":"2.8","5pswe8":"1.24","1h0vo5c":"4.25","v8rjls":"0.9","1fag7i8":"5.85","6yr2m8":"4.6","2sx5vk":"2.6","m9czk":"13","8hou80":"0.44","kp6z28":"0.06","3si7sw":"33","c3jk74":"1.28"}'),
                    
                    enableAdl: false,
                    adlPropertyId: 'insticator',
                    enablePreventAdOnBotCrawler: true,
                    botFilters: JSON.parse('[]'),
                    enableConfiant: true,
                    enableConfiantRescan: true,
                    myPropertyId: '0JuP31nJbtIWLjH1bj4PZ1iaI30',
                    enableRequestsOnAllAdUnits: false,
                    enableRefreshOnInactiveTab: true,
                    enableSovrnBeacon: true,
                    enableCaptify: false,
                    enableNonPersonalizedAds: false,
                    enableStickyAdUnits: false,
                    useAmazonHeaderBidding: true,
                    enableAutoRefresh: true,
                    enableInfinityAdUnits: false,
                    enableSpaRouting: true,
                    enablePrebidAnalyticsAdapter: false,
                    prebidAnalyticsSamplingRate: 0,
                    eventURL: 'https://event.insticator.com/v1/event'
                },
                variables: {
                    divsWithAdsShowInDFPForFirstTime: [],
                    ready: false,
                    hbFills: {},
                    timedOut: false,
                    autoRefreshCounter: 0,
                    adSlots: {},
                    initSet: false,
                    adUnitsMap: {},
                    amazonBidResponsesMap: {},
                    amazonUAMSlotsMap: {},
                    blockAds: false,
                    pubmaticIh: "//ads.pubmatic.com/AdServer/js/pwt/95054/6114",
                    lazyLoad: {
                        on: false,
                        desktopRenderMargin: 0,
                        mobileRenderMargin: 0
                    },
                    autoRefreshTimer: "",
                    blockAmazonUAM: false,
                    demoMode: false,
                    houseBackfillOnlyMode: 0,
                    fixedSize: {
                        "DESKTOP": {
                            "300x600": {"width":300,"height":600},
                            "160x600": {"width":160,"height":600},
                            "728x90": {"width":728,"height":90},
                            "300x250": {"width":336,"height":280},
                            "970x90": {"width":970,"height":90},
                            "970x250": {"width":970,"height":250}
                        },
                        "TABLET": {
                            "300x600": {"width":300,"height":600},
                            "160x600": {"width":160,"height":600},
                            "728x90": {"width":728,"height":90},
                            "300x250": {"width":336,"height":280},
                            "970x90": {"width":970,"height":90},
                            "970x250": {"width":970,"height":250}
                        },
                        "MOBILE": {
                            "300x250": {"width":336,"height":280},
                            "320x50": {"width":320,"height":100}
                        }
                    },
                    enableFixedHeight: true,
                    domainWhitelist: {
                        on: true,
                        list: JSON.parse('["hunchme.com","stocktwits.com","insticator.com"]')
                    },
                    enableSmartRefresh: true,
                    enableMcm: true,
                    enableTablet: false,
                    
                }
            },
            passback: {
                passbackInfoJson: {
                    DESKTOP: JSON.parse('{}'),
                    TABLET: JSON.parse('{}'),
                    MOBILE: JSON.parse('{}')
                },
                passbackCreativeMap: {
                    default : ""
                    
                },
            },

            visitor: {
                hashedEmailsEndpoint: "https://h99w9l39sa.execute-api.us-east-1.amazonaws.com/prod",
            },

           tracking: {
                embeds: JSON.parse('{"0231acdc-223d-4ee3-b401-0eda627593bc":true,"62624a89-c125-422b-a5a3-96c6666cacfd":true,"e91c268f-ff86-4233-b49b-67dbb1868f3b":true}'),
            },

           smartRefresh: {
                enableSmartRefresh: true,
                initialAutoRefresh: 0,
                minimumRefreshInterval: 30,
                refreshBidsInterval: 30,
                refreshAdsCheckInterval: 5,
                refreshAdsCap: 100,
                thresholdToBeInactive: 60,
                firstRefreshCheckTime: 30,
                adRenderMarginDesktop: 1000,
                adRenderMarginMobile: 1000,
                userIsActive: true,
                adunitStatusMap: {},
                handles: {
                    refreshBidsHandle: null,
                    refreshSlotHandle: null
                },
                
                    smartRefreshExclusion: JSON.parse('["US","GB","CA","AU"]'),
                
            },

            

            id: {
                enableFabrickId: false,
                enableLiveRampId: false,
                enableAudigentId: false,
                enableYahooConnectId: false,
                enableCriteoId: false,
                enableQuantcastId: false,
                enableLotameId: false,
                enablePubProvidedId: false,
                enableIdPlusId: false,
                enableAdmixerId: false,
                enableSharedId: false,
                enableUID1Id: false,
                enableEpsilonPublinkId: false,
                id5Partner: "369",
                fabrickKey: "2105028132",
                liveRampId: "88",
                hashedEmailsEndpoint: "https://h99w9l39sa.execute-api.us-east-1.amazonaws.com/prod",
                yahooPixelId: "58596",
                ttdPid: "mp4hjl8",
                epsilonPublinkIdApiKey: "1ee2254d-9708-4ea2-b5d4-3ca454dd6015",
                epsilonConversantSiteId: "111985",
            },

            sspDiscrepancyMap: JSON.parse('{"DistrictM":20.0,"PubMatic":0.0,"AppNexus":18.0,"YieldNexus":60.0,"OpenX":2.0,"Rubicon":0.0,"ShareThrough":22.0,"Rhythmone":60.0,"Mediago":0.0,"Gumgum":0.0,"Improvedigital":0.0,"Amx":0.0,"Conversant":0.0,"33Across":0.0,"Sovrn":0.0,"Sonobi":0.0,"UCFunnel":5.0,"IndexExchange":0.0,"Aol":0.0}'),

            bidderJson: JSON.parse('{"div-insticator-ad-1":[{"name":"33across","desktop":{"sizeArray":[[300,250]],"params":{"siteId":"a8TkIe6qKr6jeUaKlId8sQ","productId":"siab"}},"mobile":{"sizeArray":[[300,250]],"params":{"siteId":"aJzjAm6qKr6iXiaKkGJozW","productId":"siab"}}},{"name":"amazon"},{"name":"insticator","desktop":{"sizeArray":[[300,250]],"params":{"adUnitId":"01EX2DK7MW4BNN8TS2R0AT576D"}},"mobile":{"sizeArray":[[300,250]],"params":{"adUnitId":"01EX2DK7MW4BNN8TS2R0AT576D"}}},{"name":"ix","desktop":{"sizeArray":[[300,250]],"params":{"siteId":"318086"}},"mobile":{"sizeArray":[[300,250]],"params":{"siteId":"318083"}}},{"name":"pubmatic","desktop":{"sizeArray":[[300,250]],"params":{"publisherId":"95054"}},"mobile":{"sizeArray":[[300,250]],"params":{"publisherId":"95054"}}},{"name":"rubicon","desktop":{"sizeArray":[[300,250]],"params":{"accountId":"17062","siteId":"170204","zoneId":"820336"}},"mobile":{"sizeArray":[[300,250]],"params":{"accountId":"17062","siteId":"170206","zoneId":"820342"}}},{"name":"sovrn","desktop":{"sizeArray":[[250,250],[300,250]],"params":{"tagid":"750827"}},"mobile":{"sizeArray":[[250,250],[300,250]],"params":{"tagid":"750821"}}}],"div-insticator-ad-3":[{"name":"33across","desktop":{"sizeArray":[[300,250]],"params":{"siteId":"cRFrESYf4r6OobaKkGJozW","productId":"siab"}},"mobile":{"sizeArray":[[300,250]],"params":{"siteId":"ck1Rv2Yf4r6OmLaKkv7mNO","productId":"siab"}}},{"name":"amazon"},{"name":"insticator","desktop":{"sizeArray":[[300,250]],"params":{"adUnitId":"01EX2DK7MW4BNN8TS2R0AT576D"}},"mobile":{"sizeArray":[[300,250]],"params":{"adUnitId":"01EX2DK7MW4BNN8TS2R0AT576D"}}},{"name":"ix","desktop":{"sizeArray":[[300,250]],"params":{"siteId":"318086"}},"mobile":{"sizeArray":[[300,250]],"params":{"siteId":"318083"}}},{"name":"pubmatic","desktop":{"sizeArray":[[300,250]],"params":{"publisherId":"95054"}},"mobile":{"sizeArray":[[300,250]],"params":{"publisherId":"95054"}}},{"name":"rubicon","desktop":{"sizeArray":[[300,250]],"params":{"accountId":"17062","siteId":"170204","zoneId":"1785686"}},"mobile":{"sizeArray":[[300,250]],"params":{"accountId":"17062","siteId":"170206","zoneId":"1785696"}}},{"name":"sovrn","desktop":{"sizeArray":[[250,250],[300,250]],"params":{"tagid":"750829"}},"mobile":{"sizeArray":[[250,250],[300,250]],"params":{"tagid":"750823"}}}],"div-insticator-ad-5":[{"name":"33across","desktop":{"sizeArray":[[300,250]],"params":{"siteId":"cEjJy2YeWr6OTdaKlId8sQ","productId":"siab"}},"mobile":{"sizeArray":[[300,250]],"params":{"siteId":"cdatMmYeWr6OTdaKlId8sQ","productId":"siab"}}},{"name":"amazon"},{"name":"insticator","desktop":{"sizeArray":[[300,250]],"params":{"adUnitId":"01EX2DK7MW4BNN8TS2R0AT576D"}},"mobile":{"sizeArray":[[300,250]],"params":{"adUnitId":"01EX2DK7MW4BNN8TS2R0AT576D"}}},{"name":"ix","desktop":{"sizeArray":[[300,250]],"params":{"siteId":"318086"}},"mobile":{"sizeArray":[[300,250]],"params":{"siteId":"318083"}}},{"name":"pubmatic","desktop":{"sizeArray":[[300,250]],"params":{"publisherId":"95054"}},"mobile":{"sizeArray":[[300,250]],"params":{"publisherId":"95054"}}},{"name":"rubicon","desktop":{"sizeArray":[[300,250]],"params":{"accountId":"17062","siteId":"170204","zoneId":"820338"}},"mobile":{"sizeArray":[[300,250]],"params":{"accountId":"17062","siteId":"170206","zoneId":"820344"}}},{"name":"sovrn","desktop":{"sizeArray":[[250,250],[300,250]],"params":{"tagid":"750831"}},"mobile":{"sizeArray":[[250,250],[300,250]],"params":{"tagid":"750825"}}}]}')
        }
;
        function Ad() {
            this.settings = Object.assign({}, settings.ad.settings);
            this.variables = Object.assign({}, settings.ad.variables);
            this.variables.firstPageView = true;
            var _this = this;
            this.initializeVariables = function () {
                _this.settings.mockup.on = _this.checkMock();
                _this.settings.multisize.on = _this.settings.multisize.on && !_this.settings.mockup.on;
                _this.checkDemoMode();
                _this.checkHouseBackfillOnlyMode();
                _this.checkDomainWhitelist();
            };
            this.initializeBeforeRefreshAd = function () {
                try {
                    tracking.checkEmbedCodeAndSettingOnPage();
                    _this.updateHoverAdUnits();
                    _this.settings.hoverAdUnits.forEach(function (hoverAdUnit) {
                        _this.clearAdsUnderContainerId(hoverAdUnit);
                    });
                }
                catch (e) {
                    Insticator.logger.logMessage("Failed to execute initializeBeforeRefreshAd due to exception: " + e);
                }
            };
            if (settings.ad.settings.enableSpaRouting) {
                this.resetVariables = function () {
                    _this.variables.ready = false;
                    _this.variables.initSet = false;
                    _this.variables.timedOut = false;
                    _this.variables.autoRefreshCounter = 0;
                };
                this.resetRefresh = function () {
                    if (settings.ad.settings.enableAutoRefresh) {
                        if (_this.variables.blockAds) {
                            Insticator.logger.logMessage("This geo is blocked for time based refresh.");
                        }
                        else {
                            Insticator.logger.logMessage("Resetting time based refresh.");
                            if (!_this.variables.lazyLoad.on) {
                                _this.resetAutoRefreshTimer();
                            }
                        }
                    }
                    if (settings.ad.settings.enableSmartRefresh) {
                        Insticator.logger.logMessage("Resetting smart refresh.");
                        var smartRefresh = new SmartRefresh();
                        smartRefresh.initSmartRefresh();
                    }
                };
            }
            this.updateHoverAdUnits = function () {
                if (_this.settings.hoverAdUnits && _this.settings.hoverAdUnits.length == 0) {
                    var hoverAdUnits = [];
                    var platformHoverAds = [];
                    if (tracking.embedUUID !== "UNKNOWN") {
                        platformHoverAds = _this.settings.embedOverlayAd[tracking.embedUUID];
                    }
                    else if (Object.keys(_this.settings.embedOverlayAd).length === 1) {
                        platformHoverAds = _this.settings.embedOverlayAd[Object.keys(_this.settings.embedOverlayAd)[0]];
                    }
                    if (platformHoverAds && Object.keys(platformHoverAds).length > 0) {
                        var deviceType = utils.getDeviceType();
                        if (deviceType == 'MOBILE') {
                            hoverAdUnits = platformHoverAds["mobile"];
                        }
                        else {
                            hoverAdUnits = platformHoverAds["web"];
                        }
                    }
                    _this.settings.hoverAdUnits = hoverAdUnits;
                }
            };
            this.getFinalSizeArray = function (originalArray, multiSizeArray, divId) {
                var device = utils.getDeviceType();
                if (ad.settings.adUnitSettings[device]['multiSizeOn'].includes(divId)) {
                    return ad.settings.adUnitSettings[device]['multiSizeConfig'][divId].filter(function (n) {
                        return multiSizeArray.some(function (e) { return JSON.stringify(e) === JSON.stringify(n); });
                    });
                }
                return originalArray;
            };
            this.checkMock = function () {
                var re = new RegExp(".*(hunchme.com|insticator.com)\/apps\/mockupgenerator.*");
                try {
                    return re.test(window.top.location.href);
                }
                catch (e) {
                    Insticator.logger.logMessage('Not able to check mock status');
                }
                return false;
            };
            this.getSizeForDiv = function (divId) {
                var deviceType = utils.getDeviceType();
                var size = _this.settings.adUnitToSizeMap[deviceType][divId];
                if (settings.anchorUnitConfig) {
                    if (divId == settings.anchorUnitConfig.anchorAdUnitDivId) {
                        size = anchorAd.getAdSize();
                    }
                }
                return size;
            };
            this.isSlotRenderEndedAdded = false;
            this.getGamNetworkString = function () {
                return settings.global.gamNetworkString;
            };
            this.checkSlot = function (slots, divId) {
                return slots.find(function (item) {
                    return divId.indexOf(item.getSlotElementId()) >= 0;
                });
            };
            if (settings.ad.settings.enableInfinityAdUnits) {
                this.inftyAdUnitTemplate = '';
                this.removeAdFromSettings = function (divId, deviceString) {
                    Insticator.logger.logMessage("New ad: remove settings for: " + divId);
                    delete ad.settings.adUnitToSizeMap[deviceString][divId];
                    delete ad.settings.divToAdUnitMap[deviceString][divId];
                    Object.keys(ad.settings.infinity.adUnitSettings[deviceString]).forEach(function (key) {
                        var collection = ad.settings.adUnitSettings[deviceString][key];
                        if (collection.constructor === Array) {
                            var idx = collection.indexOf(divId);
                            collection.splice(idx, 1);
                        }
                        else {
                            if (key == "multiSizeConfig") {
                                delete collection[divId];
                            }
                        }
                    });
                };
                this.addAdToSettings = function (divId, deviceString) {
                    ad.settings.adUnitToSizeMap[deviceString][divId] = JSON.parse(JSON.stringify(ad.settings.infinity.adUnitToSizeMap[deviceString][ad.inftyAdUnitTemplate]));
                    ad.settings.divToAdUnitMap[deviceString][divId] = JSON.parse(JSON.stringify(ad.settings.infinity.divToAdUnitMap[deviceString][ad.inftyAdUnitTemplate]));
                    Object.keys(ad.settings.infinity.adUnitSettings[deviceString]).forEach(function (key) {
                        if (ad.settings.adUnitSettings[deviceString][key] == undefined) {
                            if (key == "multiSizeConfig") {
                                ad.settings.adUnitSettings[deviceString][key] = {};
                            }
                            else {
                                ad.settings.adUnitSettings[deviceString][key] = [];
                            }
                        }
                        var collection = ad.settings.adUnitSettings[deviceString][key];
                        if (collection.constructor === Array) {
                            collection.push(divId);
                        }
                        else {
                            if (key == "multiSizeConfig") {
                                collection[divId] = Object.assign([], ad.settings.infinity.adUnitSettings[deviceString][key][ad.inftyAdUnitTemplate]);
                            }
                        }
                    });
                };
                this.setNewAdInftyTemplate = function (divId, deviceString, adUnitSize) {
                    if (adUnitSize != undefined) {
                        if (adUnitSize.length < 1) {
                            Insticator.logger.logMessage("New ad: Invalid adUnitSize: " + adUnitSize);
                            return;
                        }
                        adUnitSize = adUnitSize.toLocaleLowerCase();
                        if (ad.variables.adUnitLabelToAdUnitSize[adUnitSize]) {
                            adUnitSize = ad.variables.adUnitLabelToAdUnitSize[adUnitSize];
                        }
                        if (ad.settings.infinity.sizeToInfinityAdsMap[deviceString][adUnitSize] == undefined) {
                            Insticator.logger.logMessage("New ad: Can't find target adUnit for " + adUnitSize + " size.");
                            return;
                        }
                        ad.inftyAdUnitTemplate = ad.settings.infinity.sizeToInfinityAdsMap[deviceString][adUnitSize];
                    }
                };
                this.inCommentPlacementToAdUnitLabel = function () {
                    if (window.insticatorCommentingUnitSettings == undefined) {
                        Insticator.logger.logMessage("in comment ad: Cannot find comment ad unit settings");
                        return;
                    }
                    var commentSettings = window.insticatorCommentingUnitSettings;
                    return {
                        'DESKTOP': {
                            'submitButton': commentSettings.nextToButtonAdDesktopSize,
                            'inThread': commentSettings.belowLoadMoreButtonAdDesktopSize
                        },
                        'MOBILE': {
                            'inThread': commentSettings.belowLoadMoreButtonAdMobileSize
                        }
                    };
                };
                this.setInCommentInftyTemplate = function (divId, deviceString, placement) {
                    var adUnitLabel;
                    var placmentLookup = ad.inCommentPlacementToAdUnitLabel();
                    if (placmentLookup[deviceString][placement]) {
                        adUnitLabel = placmentLookup[deviceString][placement];
                    }
                    ad.setNewAdInftyTemplate(divId, deviceString, adUnitLabel);
                };
                this.addBid = function (divId, deviceString) {
                    var isAdunitDefined = -1 != instBid.adUnits.findIndex(function (adUnit) { return adUnit.code == divId; });
                    if (isAdunitDefined) {
                        Insticator.logger.logMessage("New ad: ad unit " + divId + " already defined for bidding.");
                        return;
                    }
                    Insticator.logger.logMessage("New ad: add new bids to instBid for " + divId);
                    if (ad.settings.infinity.bidderConfig[ad.inftyAdUnitTemplate] == undefined) {
                        Insticator.logger.logMessage("New ad: NO bids for this adUnit!!! Cannot find adUnit config for " + ad.inftyAdUnitTemplate);
                        return;
                    }
                    var adUnitForBids = ad.settings.infinity.bidderConfig[ad.inftyAdUnitTemplate];
                    for (var _i = 0, _a = Object.keys(adUnitForBids); _i < _a.length; _i++) {
                        var bidder = _a[_i];
                        ad.setAdUnitConf(divId, adUnitForBids[bidder]);
                    }
                    instBid.addAdUnits(ad.variables.adUnitsMap[divId]);
                    if (settings.ad.settings.getUseAmazonHeaderBidding) {
                        var infityAdUnitTemplate = ad.settings.infinity.divToAdUnitMap[deviceString][ad.inftyAdUnitTemplate];
                        var infityAmamzonAdSizes = ad.settings.infinity.adUnitToSizeMap[deviceString][ad.inftyAdUnitTemplate];
                        var amazonAdUnit = {
                            slotID: divId,
                            slotName: "/" + ad.getGamNetworkString() + "/" + infityAdUnitTemplate,
                            sizes: [[infityAmamzonAdSizes.width, infityAmamzonAdSizes.height]]
                        };
                        ad.variables.amazonUAMSlotsMap[divId] = amazonAdUnit;
                    }
                };
                this.addNewSlot = function (divId, deviceString) {
                    Insticator.logger.logMessage("New ad: create slot for " + divId);
                    var infinityAdUnit = ad.settings.divToAdUnitMap[deviceString][divId];
                    var gamNetworkString = ad.getGamNetworkString();
                    var newAdSize = ad.settings.adUnitToSizeMap[deviceString][divId];
                    var sizeArray = [newAdSize.width, newAdSize.height];
                    var originalArray = [newAdSize.width, newAdSize.height];
                    if (_this.settings.multisize.on) {
                        sizeArray = _this.getCustomSizeArray("dfp", deviceString.toLowerCase(), newAdSize.width + 'x' + newAdSize.height, sizeArray);
                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, divId);
                    }
                    var defineSlot = googletag.defineSlot('/' + gamNetworkString + '/' + infinityAdUnit, sizeArray, divId);
                    if (defineSlot) {
                        _this.variables.adSlots[divId] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                    }
                    googletag.enableServices();
                };
                this.registerWithSmartRefresh = function (divId) {
                    if (smartRefresh && smartRefresh.adObserver) {
                        Insticator.logger.logMessage("New ad: Ad registered with smartRefresh");
                        smartRefresh.settings.adunits.push(divId);
                        smartRefresh.initSlotStatus(divId);
                        smartRefresh.adObserver.observe(document.getElementById(divId));
                    }
                    else {
                        Insticator.logger.logMessage("New ad: No smartRefresh observer found");
                        return;
                    }
                };
                this.handleNewAd = function (divId, adUnitSize) {
                    Insticator.logger.logMessage("New ad: new ad detected: " + divId);
                    var deviceString = utils.isMobileDevice ? "MOBILE" : "DESKTOP";
                    if (ad.settings.infinity == undefined) {
                        Insticator.logger.logMessage("New ad: Cannot find infinity settings.  Will not place this ad.");
                        return;
                    }
                    ad.inftyAdUnitTemplate = Object.keys(ad.settings.infinity.divToAdUnitMap[deviceString])[0];
                    if (ad.settings.adUnitToSizeMap[deviceString][divId] != undefined) {
                        Insticator.logger.logMessage("New ad: settings already exist for " + divId + ".  Will not place this ad.");
                        return;
                    }
                    ad.setNewAdInftyTemplate(divId, deviceString, adUnitSize);
                    ad.addAdToSettings(divId, deviceString);
                    if (ad.settings.divToAdUnitMap[deviceString][divId] == undefined) {
                        Insticator.logger.logMessage("New ad: Unable to create ad.");
                        return;
                    }
                    ad.addBid(divId, deviceString);
                    {
                        ad.registerWithSmartRefresh(divId);
                    }
                    googletag.cmd.push(function () {
                        ad.addNewSlot(divId, deviceString);
                        Insticator.logger.logMessage("New Ad: Append ad for " + divId);
                        ad.appendAd(divId, ad.isGAMEnabled(divId));
                    });
                };
                this.handleInCommentAd = function (divId, placement) {
                    placement = !!placement ? placement : 'inThread';
                    var placedAds = ad.getExistingDivs();
                    var maxNumberOfAds = 10;
                    if (placement != 'submitButton' && placedAds.length > maxNumberOfAds) {
                        Insticator.logger.logMessage("in comment ad: Will not place ad. Too mnay ads on the page");
                        return;
                    }
                    Insticator.logger.logMessage("in comment ad: new ad detected: " + divId);
                    var deviceString = utils.isMobileDevice ? "MOBILE" : "DESKTOP";
                    var placemebtLookup = ad.inCommentPlacementToAdUnitLabel();
                    if (placemebtLookup[deviceString][placement] == "DISABLED") {
                        Insticator.logger.logMessage("in comment ad: This ad placement is disabled.  Will not place this ad.");
                        return;
                    }
                    if (ad.settings.infinity == undefined) {
                        Insticator.logger.logMessage("in comment ad: Cannot find infinity settings.  Will not place this ad.");
                        return;
                    }
                    if (ad.settings.adUnitToSizeMap[deviceString][divId] != undefined) {
                        Insticator.logger.logMessage("in comment ad: settings already exist for " + divId + ".  Will not place this ad.");
                        return;
                    }
                    ad.inftyAdUnitTemplate = '';
                    ad.setInCommentInftyTemplate(divId, deviceString, placement);
                    if (!ad.inftyAdUnitTemplate) {
                        Insticator.logger.logMessage("New ad: Cannot create ad. Ad unit template was not set.");
                        return;
                    }
                    ad.addAdToSettings(divId, deviceString);
                    if (ad.settings.divToAdUnitMap[deviceString][divId] == undefined) {
                        Insticator.logger.logMessage("in comment ad: Unable to create ad.");
                        return;
                    }
                    ad.addBid(divId, deviceString);
                    {
                        ad.registerWithSmartRefresh(divId);
                    }
                    googletag.cmd.push(function () {
                        ad.addNewSlot(divId, deviceString);
                        Insticator.logger.logMessage("in comment Ad: Append ad for " + divId);
                        ad.appendAd(divId, ad.isGAMEnabled(divId));
                    });
                };
            }
            this.removeAd = function (containerId) {
                Insticator.logger.logMessage("Remove ad: Collapse div");
                var deviceString = utils.isMobileDevice ? "MOBILE" : "DESKTOP";
                var adElem = document.querySelector("#" + containerId);
                if (adElem != undefined) {
                    Insticator.logger.logMessage("Remove ad: Remove markup");
                    adElem.style.height = "0";
                    ad.clearAdsUnderContainerId(containerId);
                }
                Insticator.logger.logMessage("Remove ad: Remove from settings");
                ad.removeAdFromSettings(containerId, deviceString);
                if (settings.smartRefresh.enableSmartRefresh) {
                    Insticator.logger.logMessage("Remove ad: Remove from smart refresh");
                    smartRefresh.adObserver.unobserve(adElem);
                    smartRefresh.settings.adunits = smartRefresh.settings.adunits.filter(function (adunit) { return adunit != containerId; });
                }
                Insticator.logger.logMessage("Remove ad: Remove from bidding");
                delete ad.variables.adUnitsMap[containerId];
                instBid.removeAdUnit([containerId]);
                if (settings.ad.settings.useAmazonHeaderBidding) {
                    if (ad.variables.amazonUAMSlotsMap[containerId]) {
                        delete ad.variables.amazonUAMSlotsMap[containerId];
                    }
                }
                Insticator.logger.logMessage("Remove ad: destroy slot");
                googletag.destroySlots([ad.variables.adSlots[containerId]]);
            };
            this.defineAdSlots = function () {
                googletag.cmd.push(function () {
                    var gamNetworkString = ad.getGamNetworkString();
                    var deviceString = utils.getDeviceType();
                    var slots = googletag.pubads().getSlots();
                    var divs = Object.keys(ad.settings.adUnitToSizeMap[deviceString]);
                    for (var i = 0; i < divs.length; i++) {
                        var divId = divs[i];
                        if (!divId.includes('inview') && ad.settings.adUnitSettings[deviceString]['enabledGAM'].indexOf(divId) != -1 && !_this.checkSlot(slots, divId)) {
                            var sizeArray = [ad.settings.adUnitToSizeMap[deviceString][divId]['width'], ad.settings.adUnitToSizeMap[deviceString][divId]['height']];
                            var originalArray = [ad.settings.adUnitToSizeMap[deviceString][divId]['width'], ad.settings.adUnitToSizeMap[deviceString][divId]['height']];
                            if (_this.settings.multisize.on) {
                                sizeArray = _this.getCustomSizeArray("dfp", deviceString.toLowerCase(), ad.settings.adUnitToSizeMap[deviceString][divId]['width'] + "x" + ad.settings.adUnitToSizeMap[deviceString][divId]['height'], sizeArray);
                                sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, divId);
                            }
                            var defineSlot = googletag.defineSlot('/' + gamNetworkString + '/' + ad.settings.divToAdUnitMap[deviceString][divId], sizeArray, divId);
                            if (defineSlot) {
                                _this.variables.adSlots[divId] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                            }
                        }
                    }
                    googletag.enableServices();
                    if (!_this.isSlotRenderEndedAdded) {
                        googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                            if (event.slot.getSlotElementId().startsWith("div-insticator-ad-")) {
                                var device = utils.getDeviceType();
                                if (_this.variables.enableFixedHeight && _this.settings.adUnitSettings[device]['fixedHeightOn'].includes(event.slot.getSlotElementId())) {
                                    _this.appendCenterStyle(event.slot.getSlotElementId());
                                }
                                else {
                                    _this.setDimensionFromDFP(event.slot.getSlotElementId());
                                }
                                if (_this.variables.lazyLoad.on) {
                                    ad.lazyAd.updateAdElement(event.slot.getSlotElementId());
                                }
                                dfp.removeAmazonTargeting(event);
                            }
                        });
                        _this.isSlotRenderEndedAdded = true;
                    }
                });
            };
            this.loadInterstitialAd = function () {
                googletag.cmd.push(function () {
                    Insticator.logger.logMessage("Loading interstitial ad: " + ad.getGamNetworkString() + "/" + ad.settings.siteUrl);
                    var GAM_web_interstitial = googletag.defineOutOfPageSlot("/" + ad.getGamNetworkString() + "/" + ad.settings.siteUrl + "-interstitial", googletag.enums.OutOfPageFormat.INTERSTITIAL);
                    if (GAM_web_interstitial) {
                        GAM_web_interstitial.addService(googletag.pubads());
                        googletag.display(GAM_web_interstitial);
                    }
                });
            };
            this.init = function () {
                if (_this.variables.initSet)
                    return;
                if (!window.googletag || !googletag.apiReady) {
                    (function () {
                        var gads = document.createElement('script');
                        gads.async = true;
                        gads.type = 'text/javascript';
                        gads.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
                        var node = document.getElementsByTagName('script')[0];
                        node.parentNode.insertBefore(gads, node);
                    })();
                }
                if (settings.ad.settings.enableAdl) {
                    this.loadAdLightning();
                }
                this.defineAdSlots();
                googletag.cmd.push(function () {
                    if (settings.ad.settings.useAmazonHeaderBidding) {
                        dfp.setAmazonTargeting(ad.settings.impressionType.INITIAL_LOAD);
                    }
                    instBid.que.push(function () {
                        instBid.setTargetingForGPTAsync();
                    });
                });
                utils.initTabListeners();
                if (settings.ad.settings.enablePreventAdOnBotCrawler) {
                    _this.variables.blockAds = utils.isUABotCrawler();
                    Insticator.logger.logMessage("USER AGENT: " + window.navigator.userAgent + " is bot/crawler: " + _this.variables.blockAds);
                }
                _this.variables.ready = true;
                _this.variables.initSet = true;
                _this.setPositionTargeting();
                Insticator.ad.loadAllAds();
                if (ad.settings.enableInterstitialMobile && utils.getDeviceType() == "MOBILE") {
                    _this.loadInterstitialAd();
                }
                if (ad.settings.enableInterstitialDesktop && utils.getDeviceType() != "MOBILE") {
                    _this.loadInterstitialAd();
                }
            };
            this.setTimeoutForInit = function () {
                if (utils.getDeviceType() == "MOBILE") {
                    setTimeout(function () {
                        Insticator.logger.logMessage("Mobile timeout");
                        _this.variables.timedOut = true;
                        _this.init();
                    }, _this.settings.PREBID_MOBILE_TIMEOUT);
                }
                else {
                    setTimeout(function () {
                        Insticator.logger.logMessage("Desktop timeout");
                        _this.variables.timedOut = true;
                        _this.init();
                    }, _this.settings.PREBID_TIMEOUT);
                }
            };
            this.loadInstBid = function () {
                if (!window.instBid || !instBid.libLoaded) {
                    var instBidEle = document.createElement("script");
                    instBidEle.type = "text/javascript";
                    instBidEle.async = true;
                    if (ad.settings.enableCustomPrebid.on) {
                        instBidEle.src = ad.settings.enableCustomPrebid.customScript;
                    }
                    else {
                        instBidEle.src = "https://df80k0z3fi8zg.cloudfront.net/files/instbid-4.32.0-28-with-new-ssps.js";
                    }
                    var instBidTargetEl = document.getElementsByTagName("head")[0];
                    instBidTargetEl.insertBefore(instBidEle, instBidTargetEl.firstChild);
                }
            };
            this.loadPubmaticIH = function (callback) {
                var purl = window.location.href;
                var url = ad.variables.pubmaticIh;
                Insticator.logger.logMessage("Loading pubmatic IH: " + url);
                var profileVersionId = '';
                if (purl.indexOf('pwtv=') > 0) {
                    var regexp = /pwtv=(.*?)(&|$)/g;
                    var matches = regexp.exec(purl);
                    if (matches.length >= 2 && matches[1].length > 0) {
                        profileVersionId = '/' + matches[1];
                    }
                }
                var script = document.createElement('script');
                script.async = true;
                script.type = 'text/javascript';
                script.onreadystatechange = function () {
                    if (this.readyState == 'complete') {
                        callback();
                    }
                };
                script.onload = callback;
                script.src = url + profileVersionId + '/pwt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(script, node);
            };
            this.loadApsTag = function () {
                !function (a9, a, p, s, t, A, g) { if (a[a9])
                    return; function q(c, r) { a[a9]._Q.push([c, r]); } a[a9] = { init: function () { q("i", arguments); }, fetchBids: function () { q("f", arguments); }, setDisplayBids: function () { }, targetingKeys: function () { return []; }, _Q: [] }; A = p.createElement(s); A.async = !0; A.src = t; g = p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A, g); }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
                apstag.init({
                    pubID: parent.Insticator.settings.amazonUamId,
                    adServer: 'googletag',
                    schain: {
                        ver: '1.0',
                        complete: 1,
                        nodes: [
                            {
                                asi: parent.Insticator.settings.insticatorAsi,
                                sid: parent.Insticator.settings.insticatorSid,
                                hp: 1
                            }
                        ]
                    },
                    gdpr: {
                        cmpTimeout: 1000
                    }
                });
            };
            this.tcfapiIframeStub = function () {
                var frame = window;
                var cmpFrame;
                var cmpCallbacks = {};
                while (frame) {
                    try {
                        if (frame.frames['__tcfapiLocator']) {
                            cmpFrame = frame;
                            break;
                        }
                    }
                    catch (ignore) { }
                    if (frame === window.top) {
                        break;
                    }
                    frame = frame.parent;
                }
                window.__tcfapi = function (cmd, version, callback, arg) {
                    if (!cmpFrame) {
                        callback({ msg: 'CMP not found' }, false);
                    }
                    else {
                        var callId = Math.random() + '';
                        var msg = {
                            __tcfapiCall: {
                                command: cmd,
                                parameter: arg,
                                version: version,
                                callId: callId,
                            },
                        };
                        cmpCallbacks[callId] = callback;
                        cmpFrame.postMessage(msg, '*');
                    }
                };
                function(){}