/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f) {
    function g(a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(","))))
            for (n = 0; n < b.length && (c = b[n++]);)
                if (-1 < a.indexOf(c)) return null;
        p = 1;
        return a
    }

    function q(a, d, b, c, e) {
        var g, h;
        if (a.dataset && (h = a.dataset[d])) g = h;
        else if (a.getAttribute)
            if (h = a.getAttribute("data-" + b)) g = h;
            else if (h = a.getAttribute(b)) g = h;
        if (!g && f.useForcedLinkTracking && e && (g = "", d = a.onclick ? "" + a.onclick : "")) {
            b = d.indexOf(c);
            var l, k;
            if (0 <= b) {
                for (b += 10; b < d.length && 0 <= "= \t\r\n".indexOf(d.charAt(b));) b++;
                if (b < d.length) {
                    h = b;
                    for (l = k = 0; h < d.length && (";" != d.charAt(h) || l);) l ? d.charAt(h) != l || k ? k = "\\" == d.charAt(h) ? !k : 0 : l = 0 : (l = d.charAt(h), '"' != l && "'" != l && (l = 0)), h++;
                    if (d = d.substring(b, h)) a.e = new Function("s", "var e;try{s.w." + c + "=" + d + "}catch(e){}"), a.e(f)
                }
            }
        }
        return g || e && f.w[c]
    }

    function r(a, d, b) {
        var c;
        return (c = e[d](a, b)) && (p ? (p = 0, c) : g(k(c), e[d + "Exclusions"]))
    }

    function s(a, d, b) {
        var c;
        if (a && !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) && (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c), b.a ||
                b.t || b.s || !a.getAttribute || ((c = a.getAttribute("alt")) ? b.a = c : (c = a.getAttribute("title")) ? b.t = c : "IMG" == ("" + a.nodeName).toUpperCase() && (c = a.getAttribute("src") || a.src) && (b.s = c)), (c = a.childNodes) && c.length))
            for (a = 0; a < c.length; a++) s(c[a], d, b)
    }

    function k(a) {
        if (null == a || void 0 == a) return a;
        try {
            return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
                "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254)
        } catch (d) {}
    }
    var e = this;
    e.s = f;
    var m = window;
    m.s_c_in || (m.s_c_il = [], m.s_c_in = 0);
    e._il = m.s_c_il;
    e._in = m.s_c_in;
    e._il[e._in] = e;
    m.s_c_in++;
    e._c = "s_m";
    e.c = {};
    var p = 0,
        t = {
            SCRIPT: 1,
            STYLE: 1,
            LINK: 1,
            CANVAS: 1
        };
    e._g = function() {
        var a, d, b, c = f.contextData,
            e = f.linkObject;
        (a = f.pageName || f.pageURL) && (d = r(e, "link", f.linkName)) && (b = r(e, "region")) && (c["a.activitymap.page"] = a.substring(0,
            255), c["a.activitymap.link"] = 128 < d.length ? d.substring(0, 128) : d, c["a.activitymap.region"] = 127 < b.length ? b.substring(0, 127) : b, c["a.activitymap.pageIDType"] = f.pageName ? 1 : 0)
    };
    e.link = function(a, d) {
        var b;
        if (d) b = g(k(d), e.linkExclusions);
        else if ((b = a) && !(b = q(a, "sObjectId", "s-object-id", "s_objectID", 1))) {
            var c, f;
            (f = g(k(a.innerText || a.textContent), e.linkExclusions)) || (s(a, c = [], b = {
                a: void 0,
                t: void 0,
                s: void 0
            }), (f = g(k(c.join("")))) || (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) || !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() :
                "") || ("INPUT" == c || "SUBMIT" == c && a.value ? f = g(k(a.value)) : "IMAGE" == c && a.src && (f = g(k(a.src)))));
            b = f
        }
        return b
    };
    e.region = function(a) {
        for (var d, b = e.regionIDAttribute || "id"; a && (a = a.parentNode);) {
            if (d = q(a, b, b, b)) return d;
            if ("BODY" == a.nodeName) return "BODY"
        }
    }
}
/* End ActivityMap Module */

function AppMeasurement_Module_AudienceManagement(d) {
    var a = this;
    a.s = d;
    var b = window;
    b.s_c_in || (b.s_c_il = [], b.s_c_in = 0);
    a._il = b.s_c_il;
    a._in = b.s_c_in;
    a._il[a._in] = a;
    b.s_c_in++;
    a._c = "s_m";
    a.setup = function(c) {
        b.DIL && c && (c.disableDefaultRequest = !0, c.disableScriptAttachment = !0, c.disableCORS = !0, c.secureDataCollection = !1, a.instance = b.DIL.create(c), a.tools = b.DIL.tools)
    };
    a.isReady = function() {
        return a.instance ? !0 : !1
    };
    a.getEventCallConfigParams = function() {
        return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams ?
            a.instance.api.getEventCallConfigParams() : {}
    };
    a.passData = function(b) {
        a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b)
    }
}
"function" !== typeof window.DIL && (window.DIL = function(a, c) {
    var b = [],
        d, f;
    a !== Object(a) && (a = {});
    var g, k, r, v, s, p, n, E, u, A, L, B, C, F;
    g = a.partner;
    k = a.containerNSID;
    r = !!a.disableDestinationPublishingIframe;
    v = a.iframeAkamaiHTTPS;
    s = a.mappings;
    p = a.uuidCookie;
    n = !0 === a.enableErrorReporting;
    E = a.visitorService;
    u = a.declaredId;
    A = !0 === a.removeFinishedScriptsAndCallbacks;
    L = !0 === a.delayAllUntilWindowLoad;
    B = !0 === a.disableIDSyncs;
    C = "undefined" === typeof a.secureDataCollection || !0 === a.secureDataCollection;
    F = !0 === a.useCORSOnly;
    var M, N, I, G, O, P, Q, R;
    M = !0 === a.disableScriptAttachment;
    N = !0 === a.disableDefaultRequest;
    I = a.afterResultForDefaultRequest;
    G = a.dpIframeSrc;
    O = !0 === a.testCORS;
    P = !0 === a.useJSONPOnly;
    Q = a.visitorConstructor;
    R = !0 === a.disableCORS;
    n && DIL.errorModule.activate();
    var T = !0 === window._dil_unit_tests;
    (d = c) && b.push(d + "");
    if (!g || "string" !== typeof g) return d = "DIL partner is invalid or not specified in initConfig", DIL.errorModule.handleError({
        name: "error",
        message: d,
        filename: "dil.js"
    }), Error(d);
    d = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
    if (k || "number" === typeof k) k = parseInt(k, 10), !isNaN(k) && 0 <= k && (d = "");
    d && (k = 0, b.push(d), d = "");
    f = DIL.getDil(g, k);
    if (f instanceof DIL && f.api.getPartner() === g && f.api.getContainerNSID() === k) return f;
    if (this instanceof DIL) DIL.registerDil(this, g, k);
    else return new DIL(a, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + g + " and containerNSID = " + k);
    var z = {
            IS_HTTPS: C || "https:" === document.location.protocol,
            POST_MESSAGE_ENABLED: !!window.postMessage,
            COOKIE_MAX_EXPIRATION_DATE: "Tue, 19 Jan 2038 03:14:07 UTC"
        },
        J = {
            stuffed: {}
        },
        m = {},
        q = {
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
                d_jsonv: DIL.jsonVersion +
                    "",
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
                VisitorAPI: null,
                instance: null,
                releaseType: "no VisitorAPI",
                isOptedOut: !0,
                isOptedOutCallbackCalled: !1,
                admsProcessingStarted: !1,
                process: function(e) {
                    try {
                        if (!this.admsProcessingStarted) {
                            this.admsProcessingStarted = !0;
                            var x = this,
                                a, h, d, b;
                            if ("function" === typeof e && "function" === typeof e.getInstance) {
                                if (E === Object(E) && (a = E.namespace) && "string" ===
                                    typeof a) h = e.getInstance(a, {
                                    idSyncContainerID: k
                                });
                                else {
                                    this.releaseType = "no namespace";
                                    this.releaseRequests();
                                    return
                                }
                                if (h === Object(h) && h instanceof e && "function" === typeof h.isAllowed && "function" === typeof h.getMarketingCloudVisitorID && "function" === typeof h.getCustomerIDs && "function" === typeof h.isOptedOut) {
                                    this.VisitorAPI = e;
                                    if (!h.isAllowed()) {
                                        this.releaseType = "VisitorAPI not allowed";
                                        this.releaseRequests();
                                        return
                                    }
                                    this.instance = h;
                                    d = function(e) {
                                        "VisitorAPI" !== x.releaseType && (x.mid = e, x.releaseType = "VisitorAPI",
                                            x.releaseRequests())
                                    };
                                    b = h.getMarketingCloudVisitorID(d);
                                    if ("string" === typeof b && b.length) {
                                        d(b);
                                        return
                                    }
                                    setTimeout(function() {
                                        "VisitorAPI" !== x.releaseType && (x.releaseType = "timeout", x.releaseRequests())
                                    }, this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);
                                    return
                                }
                                this.releaseType = "invalid instance"
                            } else this.noVisitorAPI = !0;
                            this.releaseRequests()
                        }
                    } catch (c) {
                        this.releaseRequests()
                    }
                },
                releaseRequests: function(){},
                getMarketingCloudVisitorID: function() {
                    return this.instance ? this.instance.getMarketingCloudVisitorID() :
                        null
                },
                getMIDQueryString: function() {
                    var e = w.isPopulatedString,
                        x = this.getMarketingCloudVisitorID();
                    e(this.mid) && this.mid === x || (this.mid = x);
                    return e(this.mid) ? "d_mid=" + this.mid + "&" : ""
                },
                getCustomerIDs: function() {
                    return this.instance ? this.instance.getCustomerIDs() : null
                },
                getCustomerIDsQueryString: function(e) {
                    if (e === Object(e)) {
                        var x = "",
                            a = [],
                            h = [],
                            d, b;
                        for (d in e) e.hasOwnProperty(d) && (h[0] = d, b = e[d], b === Object(b) && (h[1] = b.id || "", h[2] = b.authState || 0, a.push(h), h = []));
                        if (h = a.length)
                            for (e = 0; e < h; e++) x += "&d_cid_ic=" +
                                t.encodeAndBuildRequest(a[e], "%01");
                        return x
                    }
                    return ""
                },
                getIsOptedOut: function() {
                    this.instance ? this.instance.isOptedOut([this, this.isOptedOutCallback], this.VisitorAPI.OptOut.GLOBAL, !0) : (this.isOptedOut = !1, this.isOptedOutCallbackCalled = !0)
                },
                isOptedOutCallback: function(e) {
                    this.isOptedOut = e;
                    this.isOptedOutCallbackCalled = !0;
                    q.registerRequest()
                }
            },
            declaredId: {
                declaredId: {
                    init: null,
                    request: null
                },
                declaredIdCombos: {},
                setDeclaredId: function(e, a) {
                    var l = w.isPopulatedString,
                        h = encodeURIComponent;
                    if (e === Object(e) &&
                        l(a)) {
                        var d = e.dpid,
                            b = e.dpuuid,
                            c = null;
                        if (l(d) && l(b)) {
                            c = h(d) + "$" + h(b);
                            if (!0 === this.declaredIdCombos[c]) return "setDeclaredId: combo exists for type '" + a + "'";
                            this.declaredIdCombos[c] = !0;
                            this.declaredId[a] = {
                                dpid: d,
                                dpuuid: b
                            };
                            return "setDeclaredId: succeeded for type '" + a + "'"
                        }
                    }
                    return "setDeclaredId: failed for type '" + a + "'"
                },
                getDeclaredIdQueryString: function() {
                    var e = this.declaredId.request,
                        a = this.declaredId.init,
                        l = encodeURIComponent,
                        h = "";
                    null !== e ? h = "&d_dpid=" + l(e.dpid) + "&d_dpuuid=" + l(e.dpuuid) : null !== a && (h =
                        "&d_dpid=" + l(a.dpid) + "&d_dpuuid=" + l(a.dpuuid));
                    return h
                }
            },
            registerRequest: function(e) {
                var a = this.firingQueue;
                e === Object(e) && a.push(e);
                this.firing || !a.length || L && !DIL.windowLoaded || (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(), this.adms.calledBack && !this.adms.isOptedOut && this.adms.isOptedOutCallbackCalled && (this.adms.isOptedOutCallbackCalled = !1, e = a.shift(), e.src = e.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() + "d_nsid="), w.isPopulatedString(e.corsPostData) &&
                    (e.corsPostData = e.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + "d_nsid=")), D.fireRequest(e), this.firstRequestHasFired || "script" !== e.tag && "cors" !== e.tag || (this.firstRequestHasFired = !0)))
            },
            processVisitorAPI: function() {
                this.adms.process(Q || window.Visitor)
            },
            requestRemoval: function(e) {
                if (!A) return "removeFinishedScriptsAndCallbacks is not boolean true";
                var a = this.toRemove,
                    l, h;
                e === Object(e) && (l = e.script, h = e.callbackName, (l === Object(l) && "SCRIPT" === l.nodeName || "no script created" === l) && "string" ===
                    typeof h && h.length && a.push(e));
                if (this.readyToRemove && a.length) {
                    h = a.shift();
                    l = h.script;
                    h = h.callbackName;
                    "no script created" !== l ? (e = l.src, l.parentNode.removeChild(l)) : e = l;
                    window[h] = null;
                    try {
                        delete window[h]
                    } catch (d) {}
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
    f = function() {
        var e = "http://fast.",
            a = "?d_nsid=" + k + "#" + encodeURIComponent(document.location.href);
        if ("string" === typeof G && G.length) return G + a;
        z.IS_HTTPS && (e = !0 === v ? "https://fast." : "https://");
        return e + g + ".demdex.net/dest5.html" + a
    };
    var y = {
            THROTTLE_START: 3E4,
            throttleTimerSet: !1,
            id: "destination_publishing_iframe_" + g + "_" + k,
            url: f(),
            iframe: null,
            iframeHasLoaded: !1,
            sendingMessages: !1,
            messages: [],
            messagesPosted: [],
            messageSendingInterval: z.POST_MESSAGE_ENABLED ? 15 : 100,
            ibsDeleted: [],
            jsonProcessed: [],
            newIframeCreated: null,
            iframeIdChanged: !1,
            originalIframeHasLoadedAlready: null,
            attachIframe: function() {
                function e() {
                    h =
                        document.createElement("iframe");
                    h.sandbox = "allow-scripts allow-same-origin";
                    h.title = "Adobe ID Syncing iFrame";
                    h.id = l.id;
                    h.style.cssText = "display: none; width: 0; height: 0;";
                    h.src = l.url;
                    l.newIframeCreated = !0;
                    a();
                    document.body.appendChild(h)
                }

                function a() {
                    t.addListener(h, "load", function() {
                        h.className = "aamIframeLoaded";
                        l.iframeHasLoaded = !0;
                        l.requestToProcess()
                    })
                }
                var l = this,
                    h = document.getElementById(this.id);
                h ? "IFRAME" !== h.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1,
                    "aamIframeLoaded" !== h.className ? (this.originalIframeHasLoadedAlready = !1, a()) : (this.iframeHasLoaded = this.originalIframeHasLoadedAlready = !0, this.iframe = h, this.requestToProcess())) : e();
                this.iframe = h
            },
            requestToProcess: function(e, a) {
                var l = this;
                e && !w.isEmptyObject(e) && this.process(e, a);
                this.iframeHasLoaded && this.messages.length && !this.sendingMessages && (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                    l.messageSendingInterval = z.POST_MESSAGE_ENABLED ? 15 : 150
                }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
            },
            process: function(e, a) {
                var l = encodeURIComponent,
                    h, d, b, c, g, f;
                a === Object(a) && (f = t.encodeAndBuildRequest(["", a.dpid || "", a.dpuuid || ""], ","));
                if ((h = e.dests) && h instanceof Array && (d = h.length))
                    for (b = 0; b < d; b++) c = h[b], c = [l("dests"), l(c.id || ""), l(c.y || ""), l(c.c || "")], this.addMessage(c.join("|"));
                if ((h = e.ibs) && h instanceof Array && (d = h.length))
                    for (b = 0; b < d; b++) c = h[b], c = [l("ibs"), l(c.id || ""), l(c.tag || ""), t.encodeAndBuildRequest(c.url || [], ","), l(c.ttl || ""), "", f], this.addMessage(c.join("|"));
                if ((h = e.dpcalls) && h instanceof Array && (d = h.length))
                    for (b = 0; b < d; b++) c = h[b], g = c.callback || {}, g = [g.obj || "", g.fn || "", g.key || "", g.tag || "", g.url || ""], c = [l("dpm"), l(c.id || ""), l(c.tag || ""), t.encodeAndBuildRequest(c.url || [], ","), l(c.ttl || ""), t.encodeAndBuildRequest(g, ","), f], this.addMessage(c.join("|"));
                this.jsonProcessed.push(e)
            },
            addMessage: function(e) {
                var a = encodeURIComponent,
                    a = n ? a("---destpub-debug---") : a("---destpub---");
                this.messages.push(a + e)
            },
            sendMessages: function() {
                var e = this,
                    a;
                this.messages.length ?
                    (a = this.messages.shift(), DIL.xd.postMessage(a, this.url, this.iframe.contentWindow), this.messagesPosted.push(a), setTimeout(function() {
                        e.sendMessages()
                    }, this.messageSendingInterval)) : this.sendingMessages = !1
            }
        },
        K = {
            traits: function(e) {
                w.isValidPdata(e) && (m.sids instanceof Array || (m.sids = []), t.extendArray(m.sids, e));
                return this
            },
            pixels: function(e) {
                w.isValidPdata(e) && (m.pdata instanceof Array || (m.pdata = []), t.extendArray(m.pdata, e));
                return this
            },
            logs: function(e) {
                w.isValidLogdata(e) && (m.logdata !== Object(m.logdata) &&
                    (m.logdata = {}), t.extendObject(m.logdata, e));
                return this
            },
            customQueryParams: function(e) {
                w.isEmptyObject(e) || t.extendObject(m, e, q.reservedKeys);
                return this
            },
            signals: function(e, a) {
                var l, h = e;
                if (!w.isEmptyObject(h)) {
                    if (a && "string" === typeof a)
                        for (l in h = {}, e) e.hasOwnProperty(l) && (h[a + l] = e[l]);
                    t.extendObject(m, h, q.reservedKeys)
                }
                return this
            },
            declaredId: function(e) {
                q.declaredId.setDeclaredId(e, "request");
                return this
            },
            result: function(e) {
                "function" === typeof e && (m.callback = e);
                return this
            },
            afterResult: function(e) {
                "function" ===
                typeof e && (m.postCallbackFn = e);
                return this
            },
            useImageRequest: function(){}