"use strict";

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

var VMAXSDK = VMAXSDK || {};

VMAXSDK.Companion = {
    overrideParams: {},
    defaultParams: {
        DelayShowClose: {
            showDelay: 0,
            closeDelay: 0,
            hideOnEndcard: true
        },
        CloseOnNextBreak: {
            showDelay: 0,
            hideOnEndcard: true
        }
    },
    changeDefaultParams: function changeDefaultParams(requestedParams) {
        var behaviorsPresent = Object.keys(VMAXSDK.Companion.defaultParams);
        for (var behavior in requestedParams) {
            if (behaviorsPresent.indexOf(behavior) > -1) updateParams(behavior, requestedParams[behavior]);
        }
        function updateParams(behavior, params) {
            var parametersPresent = Object.keys(VMAXSDK.Companion.defaultParams[behavior]);
            for (var parameter in params) {
                if (parametersPresent.indexOf(parameter) > -1) {
                    VMAXSDK.Companion.defaultParams[behavior][parameter] = params[parameter];
                }
            }
        }
    },
    Enums: {
        DEFAULT: "default",
        NEVER_CLOSE: "neverClose",
        CLOSE_AFTER_FIVE_SECOND: "closeAfterFiveSecond",
        ENDCARD: "endcard",
        CLOSE_AFTER_FIVE_SECOND_HIDE_ON_ENDCARD: "closeAfterFiveSecondHideOnEndcard",
        DELAY_SHOW_CLOSE: "DelayShowClose",
        CLOSE_ON_NEXT_BREAK: "CloseOnNextBreak"
    },
    _companionEventReceivers: {
        "default": function _default(eventReceiverOptions) {
            return new VmaxDefaultCompanionEventReceiver(eventReceiverOptions);
        },
        neverClose: function neverClose(eventReceiverOptions) {
            return new VmaxNeverCloseCompanionEventReceiver(eventReceiverOptions);
        },
        closeAfterFiveSecond: function closeAfterFiveSecond(eventReceiverOptions) {
            return new VmaxCloseAfterSecCompanionEventReceiver(eventReceiverOptions);
        },
        endcard: function endcard(eventReceiverOptions) {
            return new VmaxEndcardEventReceiver(eventReceiverOptions);
        },
        closeAfterFiveSecondHideOnEndcard: function closeAfterFiveSecondHideOnEndcard(eventReceiverOptions) {
            return new VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver(eventReceiverOptions);
        },
        DelayShowClose: function DelayShowClose(eventReceiverOptions) {
            return new VmaxDelayShowCloseEventReceiver(eventReceiverOptions);
        },
        CloseOnNextBreak: function CloseOnNextBreak(eventReceiverOptions) {
            return new VmaxCloseOnNextBreakEventReceiver(eventReceiverOptions);
        }
    }
};

Object.freeze(VMAXSDK.Companion.Enums);

Object.freeze(VMAXSDK.Companion._companionEventReceivers);

Object.seal(VMAXSDK.Companion.defaultParams);

for (var behavior in VMAXSDK.Companion.defaultParams) {
    Object.seal(VMAXSDK.Companion.defaultParams[behavior]);
    for (var parameter in VMAXSDK.Companion.defaultParams[behavior]) {
        Object.seal(VMAXSDK.Companion.defaultParams[behavior][parameter]);
    }
}

var VmaxCompanionManager = function() {
    function VmaxCompanionManager() {
        _classCallCheck(this, VmaxCompanionManager);
        this.eventReceiverRegistry = {};
        this.companionList = {};
        this.activePrimaryPlacementIds = {};
    }
    _createClass(VmaxCompanionManager, [ {
        key: "registerSlot",
        value: function registerSlot(options) {
            var adspotKey = options.adspotKey, placementId = options.placementId, companionEventReceiver = options.companionEventReceiver;
            if (!this.eventReceiverRegistry.hasOwnProperty(adspotKey)) {
                this.eventReceiverRegistry[adspotKey] = {};
            }
            this.eventReceiverRegistry[adspotKey][placementId] = companionEventReceiver;
            for (var activePlacementId in this.activePrimaryPlacementIds) {
                this.eventReceiverRegistry[adspotKey][placementId].doPause({
                    primaryplacementId: activePlacementId
                });
            }
        }
    }, {
        key: "unRegisterPrimarySlot",
        value: function unRegisterPrimarySlot(options) {
            var primaryPlacementId = options.placementId;
            if (this.companionList.hasOwnProperty(primaryPlacementId)) {
                for (var adspotKey in this.companionList[primaryPlacementId]) {
                    for (var pId in this.eventReceiverRegistry[adspotKey]) {
                        this.eventReceiverRegistry[adspotKey][pId].doClose({
                            primaryPlacementId: primaryPlacementId
                        });
                        this.eventReceiverRegistry[adspotKey][pId].doResume({
                            primaryPlacementId: primaryPlacementId
                        });
                    }
                }
                var videoPlayerNode = document.getElementById(this.videoContainer);
                if (videoPlayerNode) {
                    videoPlayerNode.innerHTML = "";
                }
                delete this.companionList[primaryPlacementId];
            }
        }
    }, {
        key: "unRegisterCompanionSlot",
        value: function unRegisterCompanionSlot(options) {
            var companionPlacementId = options.placementId;
            for (var adspotKey in this.eventReceiverRegistry) {
                for (var pId in this.eventReceiverRegistry[adspotKey]) {
                    if (pId == companionPlacementId) {
                        this.eventReceiverRegistry[adspotKey][pId].doDestroy();
                        delete this.eventReceiverRegistry[adspotKey][pId];
                    }
                }
            }
        }
    }, {
        key: "getCompanionCache",
        value: function getCompanionCache(options) {
            var primaryPlacementId = options.primaryPlacementId, companionAdspotKey = options.adspotKey;
            if (this.companionList[primaryPlacementId].hasOwnProperty(companionAdspotKey)) {
                return this.companionList[primaryPlacementId][companionAdspotKey];
            }
            return {};
        }
    }, {
        key: "onPrimaryAdShow",
        value: function onPrimaryAdShow(options) {
            var primaryPlacementId = options.placementId, videoContainer = options.videoContainer;
            this.videoContainer = videoContainer;
            var showCompanionAd = _.pick(this.companionList, [ primaryPlacementId ]);
            for (var adspotKey in showCompanionAd[primaryPlacementId]) {
                for (var pId in this.eventReceiverRegistry[adspotKey]) {
                    console.log("Companion ad " + adspotKey + " showing");
                    this.eventReceiverRegistry[adspotKey][pId].doShow({
                        primaryPlacementId: primaryPlacementId
                    });
                }
            }
            this.broadcastOnPrimaryAdShow(primaryPlacementId);
        }
    }, {
        key: "onPrimaryVideoEnd",
        value: function onPrimaryVideoEnd(options) {
            var primaryPlacementId = options.placementId;
            this.broadcastOnPrimaryVideoEnd(primaryPlacementId);
            var closeCompanionAd = _.pick(this.companionList, [ primaryPlacementId ]);
            for (var adspotKey in closeCompanionAd[primaryPlacementId]) {
                for (var pId in this.eventReceiverRegistry[adspotKey]) {
                    if (typeof this.eventReceiverRegistry[adspotKey][pId].doHide === "function") {
                        console.log("Companion ad " + adspotKey + " Hidden");
                        this.eventReceiverRegistry[adspotKey][pId].doHide({
                            primaryPlacementId: primaryPlacementId
                        });
                    }
                }
            }
        }
    }, {
        key: "onPrimaryAdEnd",
        value: function onPrimaryAdEnd(options) {
            var primaryPlacementId = options.placementId, _options$isAdSkipped = options.isAdSkipped, isAdSkipped = _options$isAdSkipped === undefined ? false : _options$isAdSkipped;
            this.broadcastOnPrimaryAdEnd(primaryPlacementId);
            var closeCompanionAd = _.pick(this.companionList, [ primaryPlacementId ]);
            for (var adspotKey in closeCompanionAd[primaryPlacementId]) {
                for (var pId in this.eventReceiverRegistry[adspotKey]) {
                    console.log("Companion ad " + adspotKey + " finished");
                    this.eventReceiverRegistry[adspotKey][pId].doClose({
                        primaryPlacementId: primaryPlacementId,
                        isAdSkipped: isAdSkipped
                    });
                    this.eventReceiverRegistry[adspotKey][pId].doResume({
                        primaryPlacementId: primaryPlacementId
                    });
                }
            }
        }
    }, {
        key: "setCompanionCache",
        value: function setCompanionCache(options) {
            var primaryPlacementId = options.placementId, companionAds = options.companionAds, primaryAdspotKey = options.adspotKey;
            this.companionList[primaryPlacementId] = companionAds;
            var doCacheList = _.pick(this.eventReceiverRegistry, _.keys(companionAds));
            for (var adspotKey in this.eventReceiverRegistry) {
                if (doCacheList.hasOwnProperty(adspotKey)) {
                    console.log("Companion ad available for " + adspotKey + " In primaryAdspotKey " + primaryAdspotKey);
                    this.broadcastDoCache(adspotKey, primaryPlacementId);
                } else {
                    this.broadcastDoResume(adspotKey, primaryPlacementId);
                }
            }
            delete this.activePrimaryPlacementIds[primaryPlacementId];
        }
    }, {
        key: "isPrimaryActive",
        value: function isPrimaryActive() {
            return Object.keys(this.activePrimaryPlacementIds).length > 0;
        }
    }, {
        key: "broadcastDoCache",
        value: function broadcastDoCache(companionAdspotKey, primaryPlacementId) {
            for (var pId in this.eventReceiverRegistry[companionAdspotKey]) {
                this.eventReceiverRegistry[companionAdspotKey][pId].doCompanionCache({
                    primaryPlacementId: primaryPlacementId
                });
            }
        }
    }, {
        key: "broadcastDoResume",
        value: function broadcastDoResume(companionAdspotKey, primaryPlacementId) {
            for (var pId in this.eventReceiverRegistry[companionAdspotKey]) {
                this.eventReceiverRegistry[companionAdspotKey][pId].doResume({
                    primaryPlacementId: primaryPlacementId
                });
            }
        }
    }, {
        key: "onPrimaryAdFetchStarted",
        value: function onPrimaryAdFetchStarted(options) {
            var primaryAdspotKey = options.adspotKey, primaryplacementId = options.placementId;
            this.activePrimaryPlacementIds[primaryplacementId] = primaryplacementId;
            for (var key in this.eventReceiverRegistry) {
                for (var pId in this.eventReceiverRegistry[key]) {
                    this.eventReceiverRegistry[key][pId].doPause({
                        primaryplacementId: primaryplacementId,
                        primaryAdspotKey: primaryAdspotKey
                    });
                }
            }
        }
    }, {
        key: "getEventReceiver",
        value: function getEventReceiver(options) {
            var adspotKey = options.adspotKey, placementId = options.placementId;
            return this.eventReceiverRegistry[adspotKey][placementId] || {};
        }
    }, {
        key: "broadcastToSiblings",
        value: function broadcastToSiblings(options) {
            var primaryPlacementId = options.primaryPlacementId, message = options.message;
            for (var companionAdspotKey in this.eventReceiverRegistry) {
                for (var pId in this.eventReceiverRegistry[companionAdspotKey]) {
                    this.eventReceiverRegistry[companionAdspotKey][pId].doUpdate({
                        primaryPlacementId: primaryPlacementId,
                        message: message
                    });
                }
            }
        }
    }, {
        key: "broadcastOnPrimaryAdShow",
        value: function broadcastOnPrimaryAdShow(primaryPlacementId) {
            for (var companionAdspotKey in this.eventReceiverRegistry) {
                for (var pId in this.eventReceiverRegistry[companionAdspotKey]) {
                    if (typeof this.eventReceiverRegistry[companionAdspotKey][pId].onPrimaryAdShow === "function") this.eventReceiverRegistry[companionAdspotKey][pId].onPrimaryAdShow({
                        primaryPlacementId: primaryPlacementId
                    });
                }
            }
        }
    }, {
        key: "broadcastOnPrimaryAdEnd",
        value: function broadcastOnPrimaryAdEnd(primaryPlacementId) {
            for (var companionAdspotKey in this.eventReceiverRegistry) {
                for (var pId in this.eventReceiverRegistry[companionAdspotKey]) {
                    if (typeof this.eventReceiverRegistry[companionAdspotKey][pId].onPrimaryAdEnd === "function") this.eventReceiverRegistry[companionAdspotKey][pId].onPrimaryAdEnd({
                        primaryPlacementId: primaryPlacementId
                    });
                }
            }
        }
    }, {
        key: "holdPrimaryEvent",
        value: function holdPrimaryEvent(eventName, placementId) {
            VMAXSDK.Events.holdEventDispatch(eventName, placementId);
        }
    }, {
        key: "broadcastOnPrimaryVideoEnd",
        value: function broadcastOnPrimaryVideoEnd(primaryPlacementId) {
            for (var companionAdspotKey in this.eventReceiverRegistry) {
                for (var pId in this.eventReceiverRegistry[companionAdspotKey]) {
                    if (typeof this.eventReceiverRegistry[companionAdspotKey][pId].onPrimaryVideoEnd === "function") {
                        console.log("|||||", this.eventReceiverRegistry[companionAdspotKey][pId]);
                        this.eventReceiverRegistry[companionAdspotKey][pId].onPrimaryVideoEnd({
                            primaryPlacementId: primaryPlacementId
                        });
                    }
                }
            }
        }
    }, {
        key: "releasePrimaryEvent",
        value: function releasePrimaryEvent(eventName, placementId) {
            VMAXSDK.Events.releaseEvents(eventName, placementId);
        }
    }, {
        key: "purgePrimaryEvent",
        value: function purgePrimaryEvent(primaryId) {}
    }, {
        key: "companionSkipAd",
        value: function companionSkipAd(options) {
            var placementId = options.placementId, adspotKey = options.adspotKey;
            var eventReceiverRegistry = this.eventReceiverRegistry;
            for (var adspotKeyInRegistry in eventReceiverRegistry) {
                if (adspotKeyInRegistry == adspotKey && this.eventReceiverRegistry[adspotKey].hasOwnProperty(placementId) && typeof this.eventReceiverRegistry[adspotKey][placementId].doSkipAd === "function") {
                    this.eventReceiverRegistry[adspotKey][placementId].doSkipAd({
                        placementId: placementId
                    });
                    break;
                }
            }
        }
    } ]);
    return VmaxCompanionManager;
}();

var VmaxDefaultCompanionEventReceiver = function() {
    function VmaxDefaultCompanionEventReceiver(options) {
        _classCallCheck(this, VmaxDefaultCompanionEventReceiver);
        var adspotKey = options.adspotKey, placementId = options.placementId, callbacks = options.callbacks;
        this.adspotKey = adspotKey;
        this.placementId = placementId;
        this.activePlacementIds = {};
        this.callbacks = callbacks;
        this.currentPrimaryPlacement = "";
    }
    _createClass(VmaxDefaultCompanionEventReceiver, [ {
        key: "currentDom",
        value: function currentDom() {
            var dom = document.getElementById(this.placementId);
            return dom ? dom : false;
        }
    }, {
        key: "doResume",
        value: function doResume(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
            if (Object.keys(this.activePlacementIds).length == 0) {
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.setAttribute("data-alive", 1);
                    if (typeof this.callbacks["onResume"] == "function") {
                        this.callbacks["onResume"](currentNode);
                    }
                }
            }
        }
    }, {
        key: "doPause",
        value: function doPause(options) {
            var primaryplacementId = options.primaryplacementId, primaryAdspotKey = options.primaryAdspotKey;
            var currentNode = this.currentDom();
            this.activePlacementIds[primaryplacementId] = primaryplacementId;
            if (currentNode) {
                currentNode.setAttribute("data-alive", 0);
                if (typeof this.callbacks["onPause"] == "function") {
                    this.callbacks["onPause"](currentNode);
                }
            }
        }
    }, {
        key: "doDestroy",
        value: function doDestroy() {
            var currentNode = this.currentDom();
            var self = this;
            if (currentNode) {
                if (currentNode.innerHTML && currentNode.innerHTML.length > 0) {
                    VMAXSDK.Events.dispatch("onAdClose", self.placementId, {
                        placementId: self.placementId,
                        width: self.hasOwnProperty("companionAd") && self.companionAd.hasOwnProperty("width") && self.companionAd.width,
                        height: self.hasOwnProperty("companionAd") && self.companionAd.hasOwnProperty("height") && self.companionAd.height
                    });
                }
                currentNode.innerHTML = "";
            }
        }
    }, {
        key: "doClose",
        value: function doClose(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                this.doDestroy();
                this.currentPrimaryPlacement = "";
            }
        }
    }, {
        key: "doCompanionCache",
        value: function doCompanionCache() {}
    }, {
        key: "doShow",
        value: function doShow(options) {
            var primaryPlacementId = options.primaryPlacementId;
            this.companionAd = VMAX.companionManager.getCompanionCache({
                primaryPlacementId: primaryPlacementId,
                adspotKey: this.adspotKey
            });
            this.currentPrimaryPlacement = primaryPlacementId;
            this.doDestroy();
            this.insertCompanionHTML();
            this.handleTrackingEvent("creativeView");
            VMAXSDK.Events.dispatch("onAdRender", this.placementId, {
                placementId: this.placementId,
                width: this.companionAd.hasOwnProperty("width") && this.companionAd.width,
                height: this.companionAd.hasOwnProperty("height") && this.companionAd.height
            });
        }
    }, {
        key: "parseAdParameters",
        value: function parseAdParameters() {
            try {
                if (!this.companionAd.hasOwnProperty("AdParameters") || this.companionAd.AdParameters.length === 0 || this.companionAd.AdParameters[0].length === 0) {
                    return {};
                }
                return JSON.parse(this.companionAd.AdParameters[0]);
            } catch (err) {
                console.warn("Cannot parse AdParameters in companion node!");
            }
        }
    }, {
        key: "insertCompanionHTML",
        value: function insertCompanionHTML() {
            var html = this.companionAd["HTMLResource"][0] || "";
            this.iframeId = "iframe" + (Date.now() || new Date().getTime());
            if (html.length) {
                var _parseAdParameters = this.parseAdParameters(), _parseAdParameters$wi = _parseAdParameters.width, AdParametersWidth = _parseAdParameters$wi === undefined ? false : _parseAdParameters$wi, _parseAdParameters$he = _parseAdParameters.height, AdParametersHeight = _parseAdParameters$he === undefined ? false : _parseAdParameters$he;
                var width = AdParametersWidth !== false ? AdParametersWidth : this.companionAd.width;
                var height = AdParametersHeight !== false ? AdParametersHeight : this.companionAd.height;
                var isWidthResponsive = width == -1;
                var isHeightResponsive = height == -1;
                var iframeNode = this.createDOMElement("iframe", {
                    marginwidth: 0,
                    marginheight: 0,
                    hspace: 0,
                    vspace: 0,
                    frameborder: 0,
                    id: this.iframeId,
                    scrolling: "no",
                    style: "border: 0; background:transparent"
                });
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.adInfo = {};
                    currentNode.appendChild(iframeNode);
                    var doc = iframeNode.contentWindow.document;
                    doc.open();
                    doc.write("<body>" + html + VmaxAd.supportForVmaxAdEvents() + "</body>");
                    doc.close();
                    iframeNode.contentDocument.body.setAttribute("data-parent-id", this.placementId);
                }
                var iframeResizer = new IframeResizer({
                    iframeNode: iframeNode,
                    isHeightResponsive: isHeightResponsive,
                    isWidthResponsive: isWidthResponsive,
                    width: width,
                    height: height
                });
            }
        }
    }, {
        key: "handleTrackingEvent",
        value: function handleTrackingEvent(type) {
            var placementId = this.placementId, container = document.getElementById(placementId) || document.body, frame = document.createElement("iframe"), urls = this.companionAd["TrackingEvents"][type];
            frame.id = placementId + "_" + Math.random(10) * 100;
            frame.style = "width: 0px; height: 0px; border: 0;";
            var nodes = [];
            if (urls.length > 0) {
                for (var i in urls) {
                    nodes.push('<img \n                    src="' + urls[i] + '" \n                    width="1" \n                    onload="" \n                    onerror="" \n                    height="1" \n                    border="0">');
                }
                frame.src = "data:text/html," + encodeURIComponent(nodes.join(""));
                container.insertBefore(frame, null);
            }
        }
    }, {
        key: "click",
        value: function click() {
            this.handleTrackingEvent("creativeClick");
        }
    }, {
        key: "bindClickEvent",
        value: function bindClickEvent() {
            console.log("bindClickEvent called");
            var currentNode = this.currentDom();
            currentNode.addEventListener("onmousedown", this.handleUserAction.bind(this));
        }
    }, {
        key: "unbindClickEvent",
        value: function unbindClickEvent() {
            console.log("unbindClickEvent called");
            if (this.currentDom()) {
                this.currentDom().removeEventListener("onmousedown", this.handleUserAction.bind(this));
            }
        }
    }, {
        key: "handleUserAction",
        value: function handleUserAction(event) {
            console.log("event " + event.key);
            var _key = event.key;
            if (_key == 0) {
                console.log("click called");
                event.preventDefault();
                return this.click();
            }
        }
    }, {
        key: "doUpdate",
        value: function doUpdate(options) {
            var primaryPlacementId = options.primaryPlacementId, message = options.message;
            var pNode = this.currentDom();
            try {
                pNode.querySelector("#" + this.iframeId).contentWindow.onOperationUpdate(message);
            } catch (err) {}
        }
    }, {
        key: "getPrimaryId",
        value: function getPrimaryId() {
            return this.currentPrimaryPlacement;
        }
    }, {
        key: "createDOMElement",
        value: function createDOMElement(tagName, tagProperties) {
            var el = document.createElement(tagName);
            for (var prop in tagProperties) {
                el.setAttribute(prop, tagProperties[prop]);
            }
            return el;
        }
    } ]);
    return VmaxDefaultCompanionEventReceiver;
}();

var VmaxOperationEventRecevier = function() {
    function VmaxOperationEventRecevier(options) {
        _classCallCheck(this, VmaxOperationEventRecevier);
        var placementId = options.placementId, adspotKey = options.adspotKey;
        this.placementId = placementId;
        this.adspotKey = adspotKey;
    }
    _createClass(VmaxOperationEventRecevier, [ {
        key: "getpNode",
        value: function getpNode() {
            var dom = document.getElementById(this.placementId);
            return dom ? dom : false;
        }
    }, {
        key: "onUpdate",
        value: function onUpdate(options) {
            var message = options.message;
            if (message === "cancel") {
                if (VMAXSDK && VMAXSDK.hasOwnProperty("onOperationComplete") && typeof VMAXSDK.onOperationComplete == "function") {
                    VMAXSDK.onOperationComplete(this.placementId);
                }
                return;
            }
            this.eventReceiver = VMAX.companionManager.getEventReceiver({
                placementId: this.placementId,
                adspotKey: this.adspotKey
            });
            if (!_.isEmpty(this.eventReceiver) && !_.isEmpty(this.eventReceiver.getPrimaryId())) {
                var primaryPlacementId = this.eventReceiver.getPrimaryId();
                VMAX.companionManager.broadcastToSiblings({
                    primaryPlacementId: primaryPlacementId,
                    message: message
                });
            } else {}
            if (VMAXSDK && VMAXSDK.hasOwnProperty("onOperationComplete") && typeof VMAXSDK.onOperationComplete == "function") {
                VMAXSDK.onOperationComplete(this.placementId);
            }
        }
    } ]);
    return VmaxOperationEventRecevier;
}();

var VmaxCloseAfterSecCompanionEventReceiver = function(_VmaxDefaultCompanion) {
    _inherits(VmaxCloseAfterSecCompanionEventReceiver, _VmaxDefaultCompanion);
    function VmaxCloseAfterSecCompanionEventReceiver(options) {
        _classCallCheck(this, VmaxCloseAfterSecCompanionEventReceiver);
        var _this2 = _possibleConstructorReturn(this, (VmaxCloseAfterSecCompanionEventReceiver.__proto__ || Object.getPrototypeOf(VmaxCloseAfterSecCompanionEventReceiver)).call(this, options));
        _this2.closeAdAfter = 5;
        _this2.setTimeout = null;
        _this2.isDoShowMethodCalled = false;
        _this2.prevPrimaryPlacementId = false;
        return _this2;
    }
    _createClass(VmaxCloseAfterSecCompanionEventReceiver, [ {
        key: "doResume",
        value: function doResume(options) {}
    }, {
        key: "doClose",
        value: function doClose(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                this.prevPrimaryPlacementId = primaryPlacementId;
                this.setTimeout = setTimeout(function(self) {
                    self.doDestroy();
                    self.currentPrimaryPlacement = "";
                    clearTimeout(self.setTimeout);
                    self.setTimeout = null;
                    self.resume(options);
                }, this.closeAdAfter * 1e3, this);
            }
        }
    }, {
        key: "doShow",
        value: function doShow(options) {
            this.isDoShowMethodCalled = true;
            var primaryPlacementId = options.primaryPlacementId;
            this.companionAd = VMAX.companionManager.getCompanionCache({
                primaryPlacementId: primaryPlacementId,
                adspotKey: this.adspotKey
            });
            this.currentPrimaryPlacement = primaryPlacementId;
            this.doDestroy();
            this.insertCompanionHTML();
            this.handleTrackingEvent("creativeView");
            VMAXSDK.Events.dispatch("onAdRender", this.placementId, {
                placementId: this.placementId,
                width: this.companionAd.hasOwnProperty("width") && this.companionAd.width,
                height: this.companionAd.hasOwnProperty("height") && this.companionAd.height
            });
        }
    }, {
        key: "onPrimaryAdShow",
        value: function onPrimaryAdShow(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (this.isDoShowMethodCalled) {
                return;
            }
            delete this.activePlacementIds[primaryPlacementId];
            if (this.prevPrimaryPlacementId) {
                delete this.activePlacementIds[this.prevPrimaryPlacementId];
            }
            var self = this;
            self.doDestroy();
            self.currentPrimaryPlacement = "";
            clearTimeout(self.setTimeout);
            self.setTimeout = null;
            this.prevPrimaryPlacementId = false;
        }
    }, {
        key: "onPrimaryAdEnd",
        value: function onPrimaryAdEnd(options) {
            if (!this.isDoShowMethodCalled) {
                this.resume(options);
                return;
            }
            this.isDoShowMethodCalled = false;
        }
    }, {
        key: "doDestroy",
        value: function doDestroy() {
            clearTimeout(this.setTimeout);
            var currentNode = this.currentDom();
            var self = this;
            if (currentNode) {
                if (currentNode.innerHTML && currentNode.innerHTML.length > 0) {
                    VMAXSDK.Events.dispatch("onAdClose", self.placementId, {
                        placementId: self.placementId,
                        width: self.hasOwnProperty("companionAd") && self.companionAd.hasOwnProperty("width") && self.companionAd.width,
                        height: self.hasOwnProperty("companionAd") && self.companionAd.hasOwnProperty("height") && self.companionAd.height
                    });
                }
                currentNode.innerHTML = "";
            }
        }
    }, {
        key: "resume",
        value: function resume(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
            if (Object.keys(this.activePlacementIds).length == 0) {
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.setAttribute("data-alive", 1);
                    if (typeof this.callbacks["onResume"] == "function") {
                        this.callbacks["onResume"](currentNode);
                    }
                }
            }
        }
    } ]);
    return VmaxCloseAfterSecCompanionEventReceiver;
}(VmaxDefaultCompanionEventReceiver);

var VmaxNeverCloseCompanionEventReceiver = function(_VmaxDefaultCompanion2) {
    _inherits(VmaxNeverCloseCompanionEventReceiver, _VmaxDefaultCompanion2);
    function VmaxNeverCloseCompanionEventReceiver(options) {
        _classCallCheck(this, VmaxNeverCloseCompanionEventReceiver);
        var _this3 = _possibleConstructorReturn(this, (VmaxNeverCloseCompanionEventReceiver.__proto__ || Object.getPrototypeOf(VmaxNeverCloseCompanionEventReceiver)).call(this, options));
        _this3.STATES = {
            EMPTY: 0,
            COMPANION: 1,
            EXTENDED_COMPANION: 2,
            REGULAR_AD: 3
        };
        _this3.currentstate = _this3.STATES.EMPTY;
        return _this3;
    }
    _createClass(VmaxNeverCloseCompanionEventReceiver, [ {
        key: "detectState",
        value: function detectState() {
            if (this.currentstate !== this.STATES.EMPTY && this.currentstate !== this.STATES.REGULAR_AD) return;
            var currentNode = this.currentDom();
            this.currentstate = currentNode && currentNode.innerHTML.length !== 0 ? this.STATES.REGULAR_AD : this.STATES.EMPTY;
        }
    }, {
        key: "doShow",
        value: function doShow(options) {
            var primaryPlacementId = options.primaryPlacementId;
            this.companionAd = VMAX.companionManager.getCompanionCache({
                primaryPlacementId: primaryPlacementId,
                adspotKey: this.adspotKey
            });
            this.currentPrimaryPlacement = primaryPlacementId;
            if (this.currentstate === this.STATES.EXTENDED_COMPANION) {
                VMAXSDK.Events.dispatch("onAdClose", this.placementId, {
                    placementId: this.placementId,
                    width: this.companionAd.hasOwnProperty("width") && this.companionAd.width,
                    height: this.companionAd.hasOwnProperty("height") && this.companionAd.height
                });
            }
            this.doDestroy();
            this.insertCompanionHTML();
            this.handleTrackingEvent("creativeView");
            this.currentstate = this.STATES.COMPANION;
            VMAXSDK.Events.dispatch("onAdRender", this.placementId, {
                placementId: this.placementId,
                width: this.companionAd.hasOwnProperty("width") && this.companionAd.width,
                height: this.companionAd.hasOwnProperty("height") && this.companionAd.height
            });
        }
    }, {
        key: "doResume",
        value: function doResume(options) {}
    }, {
        key: "doClose",
        value: function doClose() {
            if (this.currentstate === this.STATES.COMPANION) {
                this.currentstate = this.STATES.EXTENDED_COMPANION;
            }
        }
    }, {
        key: "onPrimaryAdShow",
        value: function onPrimaryAdShow(options) {
            this.detectState();
            switch (this.currentstate) {
              case this.STATES.EXTENDED_COMPANION:
              case this.STATES.REGULAR_AD:
                this.doDestroy();
                this.currentPrimaryPlacement = "";
                this.currentstate = this.STATES.EMPTY;
                break;

              default:
                break;
            }
        }
    }, {
        key: "onPrimaryAdEnd",
        value: function onPrimaryAdEnd(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
            this.detectState();
            if (this.currentstate === this.STATES.EMPTY) {
                if (Object.keys(this.activePlacementIds).length == 0) {
                    var currentNode = this.currentDom();
                    if (currentNode) {
                        currentNode.setAttribute("data-alive", 1);
                        if (typeof this.callbacks["onResume"] == "function") {
                            this.callbacks["onResume"](currentNode);
                        }
                    }
                }
            }
        }
    } ]);
    return VmaxNeverCloseCompanionEventReceiver;
}(VmaxDefaultCompanionEventReceiver);

var VmaxNeverCloseNeverSendXHRCompanionEventReceiver = function(_VmaxDefaultCompanion3) {
    _inherits(VmaxNeverCloseNeverSendXHRCompanionEventReceiver, _VmaxDefaultCompanion3);
    function VmaxNeverCloseNeverSendXHRCompanionEventReceiver(options) {
        _classCallCheck(this, VmaxNeverCloseNeverSendXHRCompanionEventReceiver);
        return _possibleConstructorReturn(this, (VmaxNeverCloseNeverSendXHRCompanionEventReceiver.__proto__ || Object.getPrototypeOf(VmaxNeverCloseNeverSendXHRCompanionEventReceiver)).call(this, options));
    }
    _createClass(VmaxNeverCloseNeverSendXHRCompanionEventReceiver, [ {
        key: "doShow",
        value: function doShow(options) {
            var primaryPlacementId = options.primaryPlacementId;
            this.companionAd = VMAX.companionManager.getCompanionCache({
                primaryPlacementId: primaryPlacementId,
                adspotKey: this.adspotKey
            });
            this.currentPrimaryPlacement = primaryPlacementId;
            this.doDestroy();
            this.insertCompanionHTML();
            this.handleTrackingEvent("creativeView");
        }
    }, {
        key: "doResume",
        value: function doResume(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
        }
    }, {
        key: "doClose",
        value: function doClose() {}
    } ]);
    return VmaxNeverCloseNeverSendXHRCompanionEventReceiver;
}(VmaxDefaultCompanionEventReceiver);

var VmaxEndcardEventReceiver = function(_VmaxDefaultCompanion4) {
    _inherits(VmaxEndcardEventReceiver, _VmaxDefaultCompanion4);
    function VmaxEndcardEventReceiver(options) {
        _classCallCheck(this, VmaxEndcardEventReceiver);
        var _this5 = _possibleConstructorReturn(this, (VmaxEndcardEventReceiver.__proto__ || Object.getPrototypeOf(VmaxEndcardEventReceiver)).call(this, options));
        _this5.closeAdAfter = 5;
        _this5.setTimeout = null;
        _this5.isDoShowMethodCalled = false;
        _this5.prevPrimaryPlacementId = false;
        var currentNode = _this5.currentDom();
        if (currentNode) {
            currentNode.style.pointerEvents = "none";
            currentNode.style.visibility = "hidden";
        }
        _this5.creativeViewBeaconFired = false;
        return _this5;
    }
    _createClass(VmaxEndcardEventReceiver, [ {
        key: "doResume",
        value: function doResume(options) {}
    }, {
        key: "doSkipAd",
        value: function doSkipAd(options) {
            var primaryPlacementId = this.getPrimaryId();
            this.removeEndcard({
                primaryPlacementId: primaryPlacementId
            });
        }
    }, {
        key: "doHide",
        value: function doHide(options) {
            var primaryPlacementId = options.primaryPlacementId, _options$isAdSkipped2 = options.isAdSkipped, isAdSkipped = _options$isAdSkipped2 === undefined ? false : _options$isAdSkipped2;
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                this.prevPrimaryPlacementId = primaryPlacementId;
                if (isAdSkipped) return;
                this.showEndcard();
                if (!this.creativeViewBeaconFired) {
                    this.handleTrackingEvent("creativeView");
                    this.creativeViewBeaconFired = true;
                }
                VMAXSDK.Events.dispatch("onAdRender", this.placementId, {
                    placementId: this.placementId
                });
                this.setTimeout = setTimeout(this.removeEndcard.bind(this), this.closeAdAfter * 1e3, options);
            }
        }
    }, {
        key: "doCompanionCache",
        value: function doCompanionCache(options) {
            var primaryPlacementId = options.primaryPlacementId;
            VMAX.companionManager.holdPrimaryEvent("onAdClose", primaryPlacementId);
        }
    }, {
        key: "doShow",
        value: function doShow(options) {
            this.isDoShowMethodCalled = true;
            var primaryPlacementId = options.primaryPlacementId;
            this.companionAd = VMAX.companionManager.getCompanionCache({
                primaryPlacementId: primaryPlacementId,
                adspotKey: this.adspotKey
            });
            this.currentPrimaryPlacement = primaryPlacementId;
            this.doDestroy();
            this.insertCompanionHTML(options);
        }
    }, {
        key: "onPrimaryAdShow",
        value: function onPrimaryAdShow(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (this.isDoShowMethodCalled) {
                return;
            }
            delete this.activePlacementIds[primaryPlacementId];
            if (this.prevPrimaryPlacementId) {
                delete this.activePlacementIds[this.prevPrimaryPlacementId];
            }
            var self = this;
            self.doDestroy();
            self.currentPrimaryPlacement = "";
            clearTimeout(self.setTimeout);
            self.setTimeout = null;
            this.prevPrimaryPlacementId = false;
        }
    }, {
        key: "onPrimaryAdEnd",
        value: function onPrimaryAdEnd(options) {
            if (!this.isDoShowMethodCalled) {
                this.resume(options);
                return;
            }
            this.isDoShowMethodCalled = false;
        }
    }, {
        key: "doDestroy",
        value: function doDestroy() {
            clearTimeout(this.setTimeout);
            var currentNode = this.currentDom();
            var self = this;
            if (currentNode) {
                currentNode.innerHTML = "";
            }
        }
    }, {
        key: "resume",
        value: function resume(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
            if (Object.keys(this.activePlacementIds).length == 0) {
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.setAttribute("data-alive", 1);
                    if (typeof this.callbacks["onResume"] == "function") {
                        this.callbacks["onResume"](currentNode);
                    }
                }
            }
        }
    }, {
        key: "insertCompanionHTML",
        value: function insertCompanionHTML(options) {
            var html = this.companionAd["HTMLResource"][0] || "";
            this.divContainerId = "iframe" + (Date.now() || new Date().getTime());
            if (html.length) {
                var divContainer = this.createDOMElement("div", {
                    id: this.divContainerId,
                    style: "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px;"
                });
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.style.display = "block";
                    currentNode.style.pointerEvents = "none";
                    currentNode.style.visibility = "hidden";
                    divContainer.innerHTML = html;
                    currentNode.appendChild(divContainer);
                }
            }
        }
    }, {
        key: "showEndcard",
        value: function showEndcard() {
            var currentNode = this.currentDom();
            if (currentNode) {
                currentNode.style.pointerEvents = "all";
                currentNode.style.visibility = "visible";
            }
        }
    }, {
        key: "removeEndcard",
        value: function removeEndcard(options) {
            var primaryPlacementId = options.primaryPlacementId;
            this.doDestroy();
            this.currentPrimaryPlacement = "";
            clearTimeout(this.setTimeout);
            this.setTimeout = null;
            this.resume(options);
            VMAXSDK.Events.dispatch("onAdClose", this.placementId, {
                placementId: this.placementId
            });
            VMAX.companionManager.releasePrimaryEvent("onAdClose", primaryPlacementId);
            var currentNode = this.currentDom();
            if (currentNode) {
                currentNode.style.pointerEvents = "none";
                currentNode.style.visibility = "hidden";
            }
        }
    }, {
        key: "endcardCTA",
        value: function endcardCTA(options) {
            try {
                var primaryPlacementId = options.primaryPlacementId;
                var primaryAdClickThrough = this.companionAd.TrackingEvents.primaryAdClickThrough;
                if (!primaryAdClickThrough || !primaryAdClickThrough.length) return;
                for (var i = 0; i < primaryAdClickThrough.length; i++) {
                    window.open(primaryAdClickThrough[i], "_blank");
                }
                this.handleTrackingEvent("primaryAdClickTracking");
            } catch (err) {
                console.warn('Cannot initialize event "clickThrough"', err);
            }
        }
    } ]);
    return VmaxEndcardEventReceiver;
}(VmaxDefaultCompanionEventReceiver);

var VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver = function(_VmaxDefaultCompanion5) {
    _inherits(VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver, _VmaxDefaultCompanion5);
    function VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver(options) {
        _classCallCheck(this, VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver);
        var _this6 = _possibleConstructorReturn(this, (VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver.__proto__ || Object.getPrototypeOf(VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver)).call(this, options));
        _this6.closeAdAfter = 5;
        _this6.setTimeout = null;
        _this6.propDisplay = "";
        return _this6;
    }
    _createClass(VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver, [ {
        key: "isEndcardPresent",
        value: function isEndcardPresent() {
            var endcardElement = document.querySelector('ins[id][data-adspot-key="endcard"]');
            return this.companionAd.hasOwnProperty("isCompanionEndcardPresent") && this.companionAd.isCompanionEndcardPresent === true && (typeof endcardElement === "undefined" ? "undefined" : _typeof(endcardElement)) === "object";
        }
    }, {
        key: "doHide",
        value: function doHide(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                var currentNode = this.currentDom();
                var isEndcardPresent = this.isEndcardPresent();
                if (currentNode && isEndcardPresent) {
                    this.propDisplay = currentNode.style.display;
                    console.log("||||| Hiding ad");
                    currentNode.style.display = "none";
                }
            }
        }
    }, {
        key: "doResume",
        value: function doResume(options) {}
    }, {
        key: "doClose",
        value: function doClose(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                var currentNode = this.currentDom();
                currentNode.style.display = this.propDisplay;
                this.setTimeout = setTimeout(function(self) {
                    self.doDestroy();
                    self.currentPrimaryPlacement = "";
                    clearTimeout(self.setTimeout);
                    VMAXSDK.Events.dispatch("onAdClose", self.placementId, {
                        placementId: self.placementId,
                        width: self.companionAd.hasOwnProperty("width") && self.companionAd.width,
                        height: self.companionAd.hasOwnProperty("height") && self.companionAd.height
                    });
                    self.setTimeout = null;
                    self.resume(options);
                }, this.closeAdAfter * 1e3, this);
            }
        }
    }, {
        key: "doDestroy",
        value: function doDestroy() {
            clearTimeout(this.setTimeout);
            var currentNode = this.currentDom();
            if (currentNode) {
                currentNode.innerHTML = "";
            }
        }
    }, {
        key: "resume",
        value: function resume(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
            if (Object.keys(this.activePlacementIds).length == 0) {
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.setAttribute("data-alive", 1);
                    if (typeof this.callbacks["onResume"] == "function") {
                        this.callbacks["onResume"](currentNode);
                    }
                }
            }
        }
    } ]);
    return VmaxCloseAfterSecHideOnEndcardCompanionEventReceiver;
}(VmaxDefaultCompanionEventReceiver);

var VmaxDelayShowCloseEventReceiver = function(_VmaxDefaultCompanion6) {
    _inherits(VmaxDelayShowCloseEventReceiver, _VmaxDefaultCompanion6);
    function VmaxDelayShowCloseEventReceiver(options) {
        _classCallCheck(this, VmaxDelayShowCloseEventReceiver);
        var _this7 = _possibleConstructorReturn(this, (VmaxDelayShowCloseEventReceiver.__proto__ || Object.getPrototypeOf(VmaxDelayShowCloseEventReceiver)).call(this, options));
        _this7.setTimeoutForShowAd = null;
        _this7.setTimeoutForCloseAd = null;
        _this7.propDisplay = "";
        _this7.doHideCalled = false;
        _this7.companionParams = _extends({}, VMAXSDK.Companion.defaultParams.DelayShowClose);
        _this7.isCompanionShown = false;
        return _this7;
    }
    _createClass(VmaxDelayShowCloseEventReceiver, [ {
        key: "isEndcardPresent",
        value: function isEndcardPresent() {
            var endcardElement = document.querySelector('ins[id][data-adspot-key="endcard"]');
            return this.companionAd.hasOwnProperty("isCompanionEndcardPresent") && this.companionAd.isCompanionEndcardPresent === true && (typeof endcardElement === "undefined" ? "undefined" : _typeof(endcardElement)) === "object";
        }
    }, {
        key: "doHide",
        value: function doHide(options) {
            var primaryPlacementId = options.primaryPlacementId;
            var currentNode = this.currentDom();
            this.propDisplay = currentNode.style.display;
            if (this.isCompanionShown === true && this.currentPrimaryPlacement == primaryPlacementId) {
                var isEndcardPresent = this.isEndcardPresent();
                var hideOnEndcard = this.companionParams.hideOnEndcard;
                if (currentNode && isEndcardPresent && hideOnEndcard) {
                    console.log("||||| Hiding ad");
                    currentNode.style.display = "none";
                }
            }
            this.doHideCalled = true;
            if (!this.isCompanionShown) {
                clearTimeout(this.setTimeoutForCloseAd);
                clearTimeout(this.setTimeoutForShowAd);
            }
        }
    }, {
        key: "doShow",
        value: function doShow(options) {
            var defaultParams = _extends({}, VMAXSDK.Companion.defaultParams.DelayShowClose);
            var companionParams = this.getCompanionParams();
            var globalParams = _extends({}, VMAXSDK.Companion.overrideParams.DelayShowClose || {});
            this.companionParams = this.parseAndValidateCompanionParams(_extends({}, defaultParams, companionParams, globalParams));
            clearTimeout(this.setTimeoutForShowAd);
            this.setTimeoutForShowAd = null;
            var showDelay = this.companionParams.showDelay;
            if (showDelay > 0) {
                this.setTimeoutForShowAd = setTimeout(this.showAd.bind(this, options), showDelay * 1e3);
            } else {
                this.showAd(options);
            }
        }
    }, {
        key: "showAd",
        value: function showAd(options) {
            var primaryPlacementId = options.primaryPlacementId;
            this.companionAd = VMAX.companionManager.getCompanionCache({
                primaryPlacementId: primaryPlacementId,
                adspotKey: this.adspotKey
            });
            this.currentPrimaryPlacement = primaryPlacementId;
            this.doDestroy();
            this.insertCompanionHTML();
            this.handleTrackingEvent("creativeView");
            this.isCompanionShown = true;
            VMAXSDK.Events.dispatch("onAdRender", this.placementId, {
                placementId: this.placementId,
                width: this.companionAd.hasOwnProperty("width") && this.companionAd.width,
                height: this.companionAd.hasOwnProperty("height") && this.companionAd.height
            });
        }
    }, {
        key: "parseAndValidateCompanionParams",
        value: function parseAndValidateCompanionParams(params) {
            var showDelay = params.showDelay, closeDelay = params.closeDelay, hideOnEndcard = params.hideOnEndcard;
            var _VMAXSDK$Companion$de = VMAXSDK.Companion.defaultParams.DelayShowClose, defaultShowDelay = _VMAXSDK$Companion$de.showDelay, defaultCloseDelay = _VMAXSDK$Companion$de.closeDelay, defaultHideOnEndcard = _VMAXSDK$Companion$de.hideOnEndcard;
            showDelay = VMAXSDK.utilities.convertTo.number(VMAXSDK.validationRules.isWholeNumber(showDelay, defaultShowDelay));
            closeDelay = VMAXSDK.utilities.convertTo.number(VMAXSDK.validationRules.isWholeNumber(closeDelay, defaultCloseDelay));
            hideOnEndcard = VMAXSDK.utilities.convertTo["boolean"](VMAXSDK.validationRules.isBoolean(hideOnEndcard, defaultHideOnEndcard));
            return {
                showDelay: showDelay,
                closeDelay: closeDelay,
                hideOnEndcard: hideOnEndcard
            };
        }
    }, {
        key: "getCompanionParams",
        value: function getCompanionParams() {
            var currentNode = this.currentDom();
            var _currentNode$dataset = currentNode.dataset, showDelay = _currentNode$dataset.companionParamShowDelay, closeDelay = _currentNode$dataset.companionParamCloseDelay, hideOnEndcard = _currentNode$dataset.companionParamHideOnEndcard;
            var returnParams = VMAXSDK.utilities.remove.undefinedValueKeysFromObject({
                showDelay: showDelay,
                closeDelay: closeDelay,
                hideOnEndcard: hideOnEndcard
            });
            return returnParams;
        }
    }, {
        key: "doResume",
        value: function doResume(options) {}
    }, {
        key: "doClose",
        value: function doClose(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (!this.isCompanionShown) {
                this.closeAd(options);
                return;
            }
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                var currentNode = this.currentDom();
                if (this.doHideCalled === true) {
                    currentNode.style.display = this.propDisplay;
                }
                var closeDelay = this.companionParams.closeDelay;
                this.setTimeoutForCloseAd = setTimeout(this.closeAd.bind(this, options), closeDelay * 1e3);
            }
        }
    }, {
        key: "closeAd",
        value: function closeAd(options) {
            if (this.isCompanionShown) {
                this.doDestroy();
            } else {
                clearTimeout(this.setTimeoutForShowAd);
                this.setTimeoutForShowAd = null;
            }
            this.currentPrimaryPlacement = "";
            clearTimeout(this.setTimeoutForCloseAd);
            if (this.isCompanionShown) {
                VMAXSDK.Events.dispatch("onAdClose", this.placementId, {
                    placementId: this.placementId,
                    width: this.companionAd.hasOwnProperty("width") && this.companionAd.width,
                    height: this.companionAd.hasOwnProperty("height") && this.companionAd.height
                });
            }
            this.setTimeoutForCloseAd = null;
            if (this.isCompanionShown) {
                this.resume(options);
            }
        }
    }, {
        key: "doDestroy",
        value: function doDestroy() {
            clearTimeout(this.setTimeoutForCloseAd);
            this.setTimeoutForCloseAd = null;
            var currentNode = this.currentDom();
            if (currentNode) {
                currentNode.innerHTML = "";
            }
        }
    }, {
        key: "resume",
        value: function resume(options) {
            var primaryPlacementId = options.primaryPlacementId;
            delete this.activePlacementIds[primaryPlacementId];
            if (Object.keys(this.activePlacementIds).length == 0) {
                var currentNode = this.currentDom();
                if (currentNode) {
                    currentNode.setAttribute("data-alive", 1);
                    if (typeof this.callbacks["onResume"] == "function") {
                        this.callbacks["onResume"](currentNode);
                    }
                }
            }
        }
    } ]);
    return VmaxDelayShowCloseEventReceiver;
}(VmaxDefaultCompanionEventReceiver);

var VmaxCloseOnNextBreakEventReceiver = function(_VmaxDelayShowCloseEv) {
    _inherits(VmaxCloseOnNextBreakEventReceiver, _VmaxDelayShowCloseEv);
    function VmaxCloseOnNextBreakEventReceiver() {
        _classCallCheck(this, VmaxCloseOnNextBreakEventReceiver);
        return _possibleConstructorReturn(this, (VmaxCloseOnNextBreakEventReceiver.__proto__ || Object.getPrototypeOf(VmaxCloseOnNextBreakEventReceiver)).apply(this, arguments));
    }
    _createClass(VmaxCloseOnNextBreakEventReceiver, [ {
        key: "doShow",
        value: function doShow(options) {
            var defaultParams = _extends({}, VMAXSDK.Companion.defaultParams.CloseOnNextBreak);
            var companionParams = this.getCompanionParams();
            var globalParams = _extends({}, VMAXSDK.Companion.overrideParams.CloseOnNextBreak || {});
            this.companionParams = this.parseAndValidateCompanionParams(_extends({}, defaultParams, companionParams, globalParams));
            clearTimeout(this.setTimeoutForShowAd);
            this.setTimeoutForShowAd = null;
            var showDelay = this.companionParams.showDelay;
            if (showDelay > 0) {
                this.setTimeoutForShowAd = setTimeout(this.showAd.bind(this, options), showDelay * 1e3);
            } else {
                this.showAd(options);
            }
        }
    }, {
        key: "parseAndValidateCompanionParams",
        value: function parseAndValidateCompanionParams(params) {
            var showDelay = params.showDelay, hideOnEndcard = params.hideOnEndcard;
            var _VMAXSDK$Companion$de2 = VMAXSDK.Companion.defaultParams.CloseOnNextBreak, defaultShowDelay = _VMAXSDK$Companion$de2.showDelay, defaultHideOnEndcard = _VMAXSDK$Companion$de2.hideOnEndcard;
            showDelay = VMAXSDK.utilities.convertTo.number(VMAXSDK.validationRules.isWholeNumber(showDelay, defaultShowDelay));
            hideOnEndcard = VMAXSDK.utilities.convertTo["boolean"](VMAXSDK.validationRules.isBoolean(hideOnEndcard, defaultHideOnEndcard));
            return {
                showDelay: showDelay,
                hideOnEndcard: hideOnEndcard
            };
        }
    }, {
        key: "getCompanionParams",
        value: function getCompanionParams() {
            var currentNode = this.currentDom();
            var _currentNode$dataset2 = currentNode.dataset, showDelay = _currentNode$dataset2.companionParamShowDelay, hideOnEndcard = _currentNode$dataset2.companionParamHideOnEndcard;
            var returnParams = VMAXSDK.utilities.remove.undefinedValueKeysFromObject({
                showDelay: showDelay,
                hideOnEndcard: hideOnEndcard
            });
            return returnParams;
        }
    }, {
        key: "doClose",
        value: function doClose(options) {
            var primaryPlacementId = options.primaryPlacementId;
            if (!this.isCompanionShown) {
                this.closeAd(options);
                return;
            }
            if (this.currentPrimaryPlacement == primaryPlacementId) {
                var currentNode = this.currentDom();
                if (this.doHideCalled === true) {
                    currentNode.style.display = this.propDisplay;
                }
            }
        }
    } ]);
    return VmaxCloseOnNextBreakEventReceiver;
}(VmaxDelayShowCloseEventReceiver);

var VmaxAdVideoManager = function() {
    function VmaxAdVideoManager(options) {
        _classCallCheck(this, VmaxAdVideoManager);
        var mediaFiles = options.mediaFiles, vastJson = options.vastJson, isContentPlayerFullscreen = options.isContentPlayerFullscreen;
        this.vastJson = vastJson;
        this.isContentPlayerFullscreen = isContentPlayerFullscreen;
        this.mediaFiles = mediaFiles["uri"];
        this.skip = 6 || vastJson["skipTime"];
        this.cta = "Visit Advertiser" || vastJson["cta"];
        this.videoSrc = this.mediaFiles || "";
        this.init();
    }
    _createClass(VmaxAdVideoManager, [ {
        key: "getTemplate",
        value: function getTemplate() {
            return this.template;
        }
    }, {
        key: "init",
        value: function init() {
            var div = document.createElement("div");
            var styleNode = this.getStyle();
            div.innerHTML = this.createTemplate();
            this.playerContainer = div.querySelector("#playerContainer");
            this.player = div.querySelector("#vservPlayer");
            this.skipTime = div.querySelector("#skipTime");
            this.skipBtn = div.querySelector("#skipBtn");
            this.seekBar = div.querySelector("#seekBar");
            this.runningTime = div.querySelector("#runningTime");
            this.hidden = div.querySelector("#hidden");
            this.fullScreenBtn = div.querySelector("#fullScreenBtn");
            this.clickToAction = div.querySelector("#clickToAction");
            this.overlay = div.querySelector("#overlay");
            this.player.ontimeupdate = this.onTimeUpdate.bind(this);
            this.player.onloadedmetadata = this.onLoadedMetaData.bind(this);
            this.player.onplaying = this.onPlay.bind(this);
            this.player.onpause = this.onPause.bind(this);
            this.fullScreenBtn.onclick = this.onFullScreenMode.bind(this);
            this.clickToAction.onclick = this.onClickToAction.bind(this);
            this.hidden.onclick = this.hiddenFullscreenButton.bind(this);
            div.firstChild.insertBefore(styleNode, div.firstChild.firstChild);
            this.devices = {
                isPhone: navigator.userAgent.indexOf("iPhone") != -1
            };
            this.template = {
                div: div.firstChild,
                video: div.querySelector("video")
            };
            try {
                if (typeof Hls == "function" && Hls.isSupported() && this.mediaFiles.indexOf("m3u8") != -1 && !this.devices.isPhone) {
                    this.hls = new Hls({
                        maxBufferLength: 14,
                        defaultAudioCodec: "mp4a.40.2",
                        enableSoftwareAES: false
                    });
                    this.hls.loadSource(this.mediaFiles);
                    this.hls.attachMedia(this.player);
                }
            } catch (err) {
                console.log("HLS is not Supported", err);
            }
        }
    }, {
        key: "createTemplate",
        value: function createTemplate() {
            this.html = '<div class="player" id="playerContainer">\n    \t<div class="overlay" id="overlay">\n            <div class="loader"></div>\n        </div>\n        <video class="video" id="vservPlayer" controls="false">\n            <source src="' + this.videoSrc + '" />\n        </video>\n        <div class="cta-container" id="clickToAction">\n            <button class="cta">\n                ' + this.cta + '\n                <img class="cta-icon" alt="">\n            </button>\n        </div>\n        <div class="progress-time">\n            Ad :\n            <div class="time" id="runningTime"></div>\n        </div>\n        <div class="skip-button">\n            <button class="btn" id="skipBtn">\n                Skip ad in <span id="skipTime"></span> s\n            </button>\n        </div>\n        <div class="full-screen-icon" id="fullScreenBtn"><img class="zoom-out" alt="zoom-in"></div>\n        <div id="hidden"></div>\n        <div class="progress-bar">\n            <div class="bar" id="seekBar"></div>\n        </div>\n    \t</div>';
            return this.html;
        }
    }, {
        key: "getStyleText",
        value: function getStyleText() {
            var style = "\n    \t.player {\n        \tposition: relative;\n        \twidth: 100%;\n\t        height:100%;\n\t        z-index:99;\n\t    }\n\t\t.hidden{\n\t\t\tdisplay:none;\n\t\t}\n\t    .player video::-webkit-media-controls {\n\t        display: none !important;\n\t    }\n\n\t    .video {\n\t        width:100%;\n\t        height:100%;\n\t        background:black;\n\t    }\n\t\t.video-height-full-screen {\n\t        height: 100% !important;\n\t    }\n\t    .progress-bar {\n\t        position: absolute;\n\t        height: 3px;\n\t        left: 0;\n\t        right: 0;\n\t        bottom: -1px;\n\t    }\n\n\t    .bar {\n\t        background: #FF9800;\n\t        width: 0%;\n\t        height: 3px;\n\t        border-radius: 4px;\n\t    }\n\n\t    .cta-container {\n\t        position: absolute;\n\t        bottom: 30px;\n\t        right: 0;\n\t        width: 100%;\n\t        max-width: 130px;\n\t        color: antiquewhite;\n\t        cursor: pointer;\n\t    }\n\n\t    .full-screen-icon {\n\t        position: absolute;\n\t        bottom: 10px;\n\t        right: 10px;\n\t        width: 100%;\n\t        max-width: 20px;\n\t        height: 20px;\n\t        color: black;\n\t        cursor: pointer;\n\t        text-align: center;\n\t    }\n\n\t    .cta {\n\t        padding:10px;\n\t        align-content: center;\n\t        vertical-align: middle;\n\t        background: transparent;\n\t        border: none;\n\t        color: #dadae9;\n\t        cursor: pointer;\n\t        font-size: 13px;\n\t    }\n\n\t    .skip-button {\n\t        position: absolute;\n\t        right: 0;\n\t        top: 0;\n\t        margin: 9px;\n\t        border: 1px antiquewhite solid;\n\t        border-radius: 4px;\n\t        background: #5d564f85;\n\t        height: 20px;\n\t        color: aliceblue;\n\t        text-align: center;\n\t        display: inline-block;\n\t        font-size: 12px;\n\t    }\n\n\t    .progress-time {\n\t        position: absolute;\n\t        left: 0;\n\t        bottom: 2px;\n\t        height: 20px;\n\t        color: white;\n\t        margin: 4px 4px 4px 10px;\n\t        font-size: 13px;\n\t        text-align: center;\n\t        font-family: arial;\n\t    }\n\n\t    .time {\n\t        margin-left: 5px;\n\t        display: inline-block;\n\t    }\n\n\t    .btn {\n\t     background: transparent;\n\t    border: none;\n\t    color: aliceblue;\n\t    cursor: pointer;\n\t    font-size: 12px;\n\t    padding: 3px\n\t    }\n\n\t    .zoom-in {\n        \tmax-width: 16px;\n\t        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAAImeNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZiYm6UBoblZspkpiM8FAE+6FWgbLdiMAAADd0lEQVR4nO3dT1baUBQG8O/m8DItDCpTGDRMcQXCCtQVVFagrkC7AtsVyA6qK9CuwEwJA5iqA+k04XA7IFj/PBDNvUrL/Y08wfNuzgckOcl9D4KyweCunKbpAQAQ0TCKNrraNX36/euDyQTlIMCoVAq79XplpFGnpDHozGBwV86ydECE8nQLo9e7rjUa1WPNuk8lyc0JMx8QAcxAlqVfAWxq1Ao0Bp0Zj9M9YBbmFBH2NWv68cGTDc1+/7alUUk10MnkcZg537b/hmqg68gCFWaBCrNAhVmgwixQYRaoMAtUmAUqzAIVZoEKs0CFrW2gzFzTGFc1UCL6pDl+Ef9koAC3PBuHujWXQ4QtjXHVAs1v4DY9L11q1VzAV7OlcZNZJdAkuWkyT376X6VfGjUXIcK5bzvz5HQwuBO94S0e6PRd5wv478x/yEO6UinsAvA9lKtlWXol+Uml2R/TB2rZTpGDNRG24f+aAwCYsdtoVM/eOn4Rvd71MRGOFvxLzOz/JC+DiIbOuTMC7p9OXgGovXXAJXSjqNpRHP9FSXJ9AaClWCIOACDLsiPohhk7Fx4qjr8U58JdALFiiWZ+DOW5X1MBXefCtlZjwWvU65WRc2EbilcaATD/LFjQCKBOFFU7qxDmTL1eGUVRtc2Mb/CfqAq5Pyklyc2JpyHgtYbMFBPh/KNabl7j74kY20TcQuGeAfousV/GGGOMMcYYY4wxxhhjjDHGGGOMMcYYI23tm8XG43RvMqEtqWYxAqaLRDHjpPguPjIC6HBVg81bxPchvEoPAbqt0sx0FoZuZXpE8/b3CyyYC1BE3sFMam3SRLyTZemF9PSVt9AOE8gDdc6pdPM+0EzT7FRx/KVohwkgftdpNdMW8Y85pr7rtBpJ/f5tK59F5/uKj6KoWpGu+ZLZooZz9mlIFHS+fPl8KVFLfCbddMeoDf8hpJwkN3vSNV/iW9QwN3Qu3JQKE1Ca6xlFGzFRsOt7jRnbGjUXmVeTKBC/+lCbjZy/68+uHohU50TN0/Jsu5T8ZM4oz5enS8/Gmm7N5TBDZVa0aqDM/Ftz/IJUrr3Xds2RIAhUrrvXNlAtFqgwC1SYBSrMAhVmgQqzQIVZoMIsUGEWqDALVJgFKkw10CDw3rVficfJWlQD9S3ix4wfmjX9ni3/E2vcXAYetOJoWbefUPsDQYRRqW401pIAAAAASUVORK5CYII=');\n\t    }\n\n\t    .zoom-out {\n\t        max-width: 16px;\n\t        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAAImeNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZiYm6UBoblZspkpiM8FAE+6FWgbLdiMAAADnElEQVR4nO2dMVrbMBiGP+mxPYehyQoDZqU3cG9QbhBO0CcnAE5AOQG+QblBfYOyxhmSNTDEc+JH6mAlDSSOTfhtKHzvRpD1mzeyZCz5l0INRqPHyBgT1SlbhtbIPC+Ij44OstfU81LG41knz+d9Y9B5TT1a6+T4+EtSVU7tOpHFYn4N4DvwupNZYwKoszDs3gvVt5M0fTgF7C8Ah0JVZgDufD8YlDUMXXIi/cViPgbQh5xMADgE7LVgfRXYa8jJBAoX/cViPk7Th/62AhstNE2ntyhENobvBwdNX/ruCps1GQNAHIa98/UPnrTQNmQCQJ7npx8hBoC+c7Zi1UKLJmxvNw6RJwvD3kELcZCm0xlku6wS1HkYdmPAtdDxeNZpq2+zFjdtxGk3lr0uHDqhbjRv+pvMrMXVyUnvsuE4K05OepfW4grF6Nwkyzui4pKveWkk1uJGa73XydW5h2uS0egx2uc4Y0xHKfwAUHV8Foa9AzUaPUbWmt8VhTdGs89GnQFbKf1N1/gPKPnsMgHAOUh2lTHGRFtv7NdpcxB579RxUSl03z7zI1LHRaVQ8jIoVBgKFYZChaFQYShUGAoVhkKFoVBhKFQYChWGQoWhUGG01junB7K3ftL+nnAuSn1pjUx7XhADmGwrwGehm+xwMvG8INbFggN1hqdPo1ufUPtfKJn4SwB1trF4YzyedfadzPqMjEaP0XL6mBBCCCGEEEIIIYQQQgghhBBCCCEtw4UOL2PbQgf3evfDqUtAELnPM2txw6U42xkOp5fule+lzARQgzDs3iuX7OQPtmSP4fqmTZzMiy2/mvh+8FXn+byPklQ87lsga+xwcpjn876uyLjFPnUN56LUlzHocAWzMBQqDIUKQ6HCUKgwFCoMhQpDocJQqDAUKgyFCkOhwlCoMJVCjTF89c5Rx0WlUD4T/UcdF1prnVSUiZ5nwv6MOAfRrjJa64Qpgyt4acpgz/1wh+r89ZFSiKw1+5wX0nT6JhN/ywk1a/cbC1Tp5h4b3AGuD/X9YIAWMmkrhYvhcHrZcJwVaxNqjWdAdw4LoS6rw6DhoADaHeTai6VWm62sRnm3U0DcQvRWJv6qJtQEiZe7LADPbptcJuwYDeN5XuPb/7QRA1WbqwBLqeoczfWpSRubVLkYSUPVZ8X+H5vp6Lfe2IdhN/b94AhFa5X84ydt9dUFaoCSFEp7kgHqp+8HR+uX+ZOIdWrhFmr1t1D7CwTgewYEWjnaAAAAAElFTkSuQmCC');\n\t    }\n\n\t    .loader {\n\t    position: absolute;\n\t    top: 50%;\n\t    left: 50%;\n\t    display: block;\n\t    width: 40px;\n\t    height: 40px;\n\t    border: 2px solid rgba(255, 255, 255, 0.1);\n\t    border-radius: 50%;\n\t    border-top-color: #fff;\n\t    animation: spin 1s ease-in-out infinite;\n\t    -webkit-animation: spin 1s ease-in-out infinite;\n\t    margin: -20px 0 0 -20px;\n\t    }\n\n\t    @keyframes spin {\n\t      to { -webkit-transform: rotate(360deg); }\n\t    }\n\t    @-webkit-keyframes spin {\n\t      to { -webkit-transform: rotate(360deg); }\n\t    }\n\n\t    .overlay {\n\t        position: absolute;\n\t        width: 100%;\n\t        top: 0;\n\t        left: 0;\n\t        right: 0;\n\t        bottom: 0;\n\t        background-color: rgba(0, 0, 0, 0.5);\n\t        z-index: 2;\n\t        cursor: pointer;\n\t    }\n\n\t    .cta-icon {\n\t        max-width: 18px;\n\t        vertical-align: sub;\n\t        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAA3NCSVQICAjb4U/gAAAAS1BMVEUAAAA9PUIAAADR0d8AAAAAAACLi5VHcEwAAADY2ObV1eQAAAAAAADNzdzX1+XPz9y4uMbIyNbY2OeoqLXY2OfNzduurrpTU1fa2umINzifAAAAGHRSTlMCORHZHihiAAnCQRUby6WISqjuFNJxgigaliNiAAAAX3pUWHRSYXcgcHJvZmlsZSB0eXBlIEFQUDEAAAiZ40pPzUstykxWKCjKT8vMSeVSAANjEy4TSxNLo0QDAwMLAwgwNDAwNgSSRkC2OVQo0QAFmJibpQGhuVmymSmIzwUAT7oVaBst2IwAAAHeSURBVFiF7dfbboMwDAZg1y3ULWG0nJr3f9KFQ0vABhKv2qSp/820CX2zcyABzm8KfKAP9CcQsOig6svOU95AA0FjlykJ4iGgC4NspYLuHNJV9Di+CTIHJs0hqK67cY8RJkyaQSD0zlKAK4lLHgSwXB1yqnMvLf6pD/HVIaZbe3ziJggorKASQXrWh4RlJjgpgjQIsVCZJijWLkD5Ru6HJCNxDAQo2coJ587xuA6ZbCO0cA7P9SRASPy1NWXhJM+VKUC0sfWWjsFskPI4aD7vnUPdbrm7SYiCWD3dIDjJxcRArB6CfrdgZjKc3tm7EO9rODtcUUTeKbIHSX2xZwIgua94aK2vWCikrxAoqK8ASFiH16uiIt5XVVtbV7GDzfvqHGubSEjoq3dsQVEQ74tuVgFJ86WD+DpUQbNDc1w/KogK5iihxneG/aWDXleqaV/ooGw8JLz9pRtsPPWS/95QTr+T2rxNvP2uhJw0HBLT/VAFuT8TIvrvHyU0fnf4v2sh9vSvQ7h1GYGITXvZS70H1TYqqxC+CSIMu2e/0qxWlEY55WN1jEzIN80rbbYKYdIGD1PeXdxlqCvJ3VHToLjbLEp3hPEHoTkFxkjO9OFHwREd71M0PALjQT/NP4a+AS134O5puWSbAAAAAElFTkSuQmCC');\n\t    }";
            return style;
        }
    }, {
        key: "getStyle",
        value: function getStyle() {
            var css = document.createElement("style");
            var styles = this.getStyleText();
            css.type = "text/css";
            if (css.styleSheet) css.styleSheet.cssText = styles; else css.appendChild(document.createTextNode(styles));
            return css;
        }
    }, {
        key: "onTimeUpdate",
        value: function onTimeUpdate() {
            var sec = parseInt((this.player.duration - this.player.currentTime) % 60) || 0;
            var min = parseInt((this.player.duration - this.player.currentTime) / 60 % 60) || 0;
            sec = sec.toString().length == 1 ? "0" + sec : sec;
            this.runningTime.innerHTML = "(" + min + ":" + sec + ")";
            this.skipTime.innerHTML = this.skip - Math.floor(this.player.currentTime);
            var percentage = this.player.currentTime / this.player.duration * 100;
            this.seekBar.style.width = percentage + "%";
            if (Math.floor(this.player.currentTime) >= 5) {
                this.skipBtn.innerHTML = "Skip Ad";
                if (typeof this.skipBtn.onclick == "function") return;
                this.skipBtn.onclick = this.onSkipButtonClick.bind(this);
            }
        }
    }, {
        key: "onFullScreenMode",
        value: function onFullScreenMode(event) {
            console.log("full screen Mode On");
            if (document.fullscreen) {
                this.disableFullscreenMode();
            } else {
                this.enableFullscreenMode();
            }
        }
    }, {
        key: "enableFullscreenMode",
        value: function enableFullscreenMode() {
            this.playerContainer.requestFullscreen()["catch"](function(err) {
                console.log("Error attempting to enable full-screen mode: " + err.message + " (" + err.name + ")");
            });
            this.fullScreenBtn.firstChild.className = "zoom-in";
            this.player.classList.add("video-height-full-screen");
        }
    }, {
        key: "disableFullscreenMode",
        value: function disableFullscreenMode() {
            document.exitFullscreen();
            this.fullScreenBtn.firstChild.className = "zoom-out";
            this.player.classList.remove("video-height-full-screen");
        }
    }, {
        key: "onClickToAction",
        value: function onClickToAction() {
            window.open("https://www.google.com/");
        }
    }, {
        key: "onSkipButtonClick",
        value: function onSkipButtonClick() {
            console.log("click");
        }
    }, {
        key: "onPlay",
        value: function onPlay() {
            this.overlay.style.display = "none";
        }
    }, {
        key: "onLoadedMetaData",
        value: function onLoadedMetaData() {
            console.log("onLoadedMetaData called");
            this.hidden.click();
            this.player.style.background = "black";
        }
    }, {
        key: "onPause",
        value: function onPause() {
            this.overlay.style.display = "block";
        }
    }, {
        key: "hiddenFullscreenButton",
        value: function hiddenFullscreenButton() {
            if (!document.pictureInPictureElement) {
                this.player.requestPictureInPicture()["catch"](function(err) {
                    console.log(" Video failed to enter Picture-in-Picture mode: " + err.message + " (" + err.name + ")");
                });
            } else {
                document.exitPictureInPicture()["catch"](function(err) {
                    console.log("Video failed to leave Picture-in-Picture mode: " + err.message + " (" + err.name + ")");
                });
            }
        }
    } ]);
    return VmaxAdVideoManager;
}();

var VastParser = function() {
    function VastParser() {
        _classCallCheck(this, VastParser);
        this.companionsAds = {};
    }
    _createClass(VastParser, [ {
        key: "init",
        value: function init(options) {
            var xml = options.xml, onXmlParseSuccess = options.onXmlParseSuccess, onXmlParseError = options.onXmlParseError;
            var _this = this;
            this.onXmlParseSuccess = onXmlParseSuccess;
            this.onXmlParseError = onXmlParseError;
            this.parseVastAd({
                xml: this.parseXML(xml),
                onSuccess: function onSuccess(companionsAds) {
                    if (typeof onXmlParseSuccess == "function") {
                        _this.onXmlParseSuccess(_this.companionsAds);
                    }
                },
                onError: function onError() {
                    if (typeof onXmlParseError == "function") {
                        _this.onXmlParseError(_this.companionsAds);
                    }
                }
            });
        }
    }, {
        key: "parseXML",
        value: function parseXML(xml) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xml, "text/xml");
            return xmlDoc;
        }
    }, {
        key: "getCDATASection",
        value: function getCDATASection(pNode, cNodeName) {
            var dataNodeIndex = 0;
            cNodeName = cNodeName ? cNodeName : "#cdata-section";
            for (var x = 0; x < pNode.childNodes.length; x++) {
                if (pNode.childNodes[x].nodeName === cNodeName && pNode.childNodes[x].nodeValue !== "") {
                    dataNodeIndex = x;
                    break;
                }
            }
            return pNode.childNodes[dataNodeIndex].nodeValue.trim();
        }
    }, {
        key: "getCDATASections",
        value: function getCDATASections(pNodes, cNodeName) {
            var nodeValues = [];
            for (var x = 0; x < pNodes.length; x++) {
                nodeValues.push(this.getCDATASection(pNodes[x], cNodeName) || "");
            }
            return nodeValues;
        }
    }, {
        key: "loadXmlAd",
        value: function loadXmlAd(options) {
            var url = options.VASTAdTagURI, onSuccess = options.onSuccess, onError = options.onError;
            var _this = this;
            var request = new XMLHttpRequest({
                mozSystem: true
            });
            request.responseType = "document";
            request.open("get", url, true);
            request.addEventListener("error", function() {
                console.info("Error Loading Xml Url", url);
                _this.onXmlParseError();
            });
            request.addEventListener("load", function() {
                var xml = request["response"];
                _this.parseVastAd({
                    xml: xml,
                    onSuccess: onSuccess,
                    onError: onError
                });
            });
            request.send();
        }
    }, {
        key: "parseVastAd",
        value: function parseVastAd(options) {
            var xml = options.xml, onSuccess = options.onSuccess, onError = options.onError;
            var xmlType = "";
            if (xml.getElementsByTagName("VASTAdTagURI").length > 0) {
                xmlType = "W";
            } else {
                xmlType = "L";
            }
            var companions = xml.getElementsByTagName("Companion");
            var tagVideoClicks = xml.getElementsByTagName("VideoClicks");
            var isVideoClicksPresent = tagVideoClicks && tagVideoClicks.length > 0;
            var tagClickThrough = isVideoClicksPresent ? tagVideoClicks[0].getElementsByTagName("ClickThrough") : [];
            var tagClickTracking = isVideoClicksPresent ? tagVideoClicks[0].getElementsByTagName("ClickTracking") : [];
            var VideoClicks = {
                isVideoClicksPresent: isVideoClicksPresent,
                ClickThrough: this.getCDATASections(tagClickThrough),
                ClickTracking: this.getCDATASections(tagClickTracking)
            };
            var isCompanionEndcardPresent = function() {
                try {
                    for (var i = 0; i < companions.length; i++) {
                        var adslotId = companions[i].getAttribute("adSlotId");
                        if (adslotId === "endcard") {
                            return true;
                        }
                    }
                    return false;
                } catch (err) {
                    return false;
                }
            }();
            for (var i = 0; i < companions.length; i++) {
                var adslotId = companions[i].getAttribute("adSlotId");
                var primaryAdClickThrough = isVideoClicksPresent ? VideoClicks["ClickThrough"] : [];
                var primaryAdClickTracking = isVideoClicksPresent ? VideoClicks["ClickTracking"] : [];
                if (adslotId == null) continue;
                if (!this.companionsAds.hasOwnProperty(adslotId)) {
                    this.companionsAds[adslotId] = {
                        HTMLResource: "",
                        AdParameters: "",
                        height: "",
                        width: "",
                        TrackingEvents: {
                            creativeView: [],
                            creativeClick: [],
                            primaryAdClickThrough: primaryAdClickThrough,
                            primaryAdClickTracking: primaryAdClickTracking
                        },
                        isCompanionEndcardPresent: isCompanionEndcardPresent
                    };
                }
                var companion = companions[i];
                var HTMLResource = companion.getElementsByTagName("HTMLResource");
                var AdParameters = companion.getElementsByTagName("AdParameters");
                var width = companion.getAttribute("width");
                var height = companion.getAttribute("height");
                var TrackingEvents = companion.getElementsByTagName("Tracking");
                this.companionsAds[adslotId]["HTMLResource"] = this.getCDATASections(HTMLResource);
                this.companionsAds[adslotId]["AdParameters"] = this.getCDATASections(AdParameters);
                this.companionsAds[adslotId]["height"] = height;
                this.companionsAds[adslotId]["width"] = width;
                for (var _i2 = 0; _i2 < TrackingEvents.length; _i2++) {
                    var eventType = TrackingEvents[_i2].getAttribute("event");
                    if (this.companionsAds[adslotId]["TrackingEvents"].hasOwnProperty(eventType)) {
                        this.companionsAds[adslotId]["TrackingEvents"][eventType].push(this.getCDATASection(TrackingEvents[_i2]));
                    }
                }
            }
            if (xmlType == "L") {
                if (typeof onSuccess === "function") {
                    onSuccess(this.companionsAds);
                }
            } else {
                var VASTAdTagURI = xml.getElementsByTagName("VASTAdTagURI").length ? this.getCDATASections(xml.getElementsByTagName("VASTAdTagURI"))[0] : "";
                if (VASTAdTagURI == "") {
                    console.debug("No media file available!");
                    return;
                } else {
                    this.loadXmlAd({
                        VASTAdTagURI: VASTAdTagURI,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                }
            }
        }
    }, {
        key: "htmlStr",
        value: function htmlStr() {
            return '\n         <style type="text/css">\r\n        /* common style */\r\n        \r\n        @import url(\'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap\');\r\n        .vm_container {\r\n            font-family: Noto Sans, Arial, sans-serif;\r\n            font-size: 0.75rem;\r\n            color: #fff;\r\n        }\r\n        \r\n        .vm_container img {\r\n            display: block;\r\n            width: 100%;\r\n            height: 100%;\r\n            min-width: 1px;\r\n            min-height: 1px;\r\n            filter: none;\r\n        }\r\n        \r\n        .vm_container button {\r\n            cursor: pointer;\r\n            padding: 0;\r\n            border: none;\r\n            outline: none;\r\n            font: inherit;\r\n            text-transform: inherit;\r\n            color: inherit;\r\n            background: transparent;\r\n        }\r\n        \r\n        .vm_container button>div {\r\n            font-size: 0.875rem;\r\n            background-color: #A100FF;\r\n            border-radius: 1.25rem;\r\n            padding: 0.625rem 1rem;\r\n            align-self: center;\r\n            min-height: 1rem;\r\n            line-height: 1rem;\r\n            display: block;\r\n            text-align: center;\r\n            background-image: linear-gradient(-78deg, #A100FF 0%, #FF0000 100%);\r\n        }\r\n        \r\n        .vm_icon {\r\n            border-radius: 0;\r\n            color: #fff;\r\n            width: 40px;\r\n            height: 40px;\r\n            -webkit-flex-shrink: 0;\r\n            -ms-flex-negative: 0;\r\n            flex-shrink: 0;\r\n        }\r\n        \r\n        .vm_content {\r\n            width: 100%;\r\n            margin-right: 0.5rem;\r\n        }\r\n        \r\n        .vm_ad_badge {\r\n            margin-right: 0.5rem;\r\n            padding: 0 0.185rem;\r\n            display: inline-block;\r\n            font-size: 0.688rem;\r\n            background: #ffc01c;\r\n            border-radius: 0.125rem;\r\n        }\r\n        \r\n        .vm_ad_title {\r\n            font-size: 0.875rem;\r\n            align-self: center;\r\n        }\r\n        \r\n        .vm_ad_desc {\r\n            display: inline-block;\r\n            font-size: 0.75rem;\r\n            color: #D8D8D8;\r\n            opacity: 0.7;\r\n            padding-top: 0.25rem;\r\n        }\r\n        /* vm_ad01 */\r\n        \r\n        .vm_ad01 {\r\n            width: 360px;\r\n            height: 56px;\r\n            background: rgba(30, 30, 30, 1);\r\n        }\r\n        \r\n        .vm_ad01 .vm_container {\r\n            display: flex;\r\n            flex-wrap: nowrap;\r\n            padding: 0.5rem 1rem;\r\n        }\r\n        \r\n        .vm_ad01 .vm_icon {\r\n            margin-right: 0.5rem;\r\n        }\r\n        \r\n        .vm_ad01 .vm_ad_title {\r\n            position: relative;\r\n            vertical-align: middle;\r\n        }\r\n        \r\n        .vm_ad01 .vm_ty {\r\n            margin-top: 0.625rem;\r\n        }\r\n        \r\n        #vm_content_thank_you {\r\n            display: none;\r\n        }\r\n    </style>\r\n\r\n    \x3c!-- Mobile Ads - App Masthead - Portrait --\x3e\r\n    <div id="vm_content_normal_ad" class="vm_ad01">\r\n        <div class="vm_container">\r\n            <div class="vm_icon"><img src="img/icon.jpg" /></div>\r\n            <div class="vm_content">\r\n                <div class="vm_ad_title">This is Ad Title</div>\r\n                <div class="vm_ad_badge">Ad</div>\r\n                <div class="vm_ad_desc">This is ad description</div>\r\n            </div>\r\n            <button onclick="vmaxLaunchOperation(this,\'vop://LeadGen/campaign_id=1&template_id=1&ifa=rr352eeb-93ac-9d1d-7c1d-92be405dea31&os=Android&trnid=87.C2_478926_a4df801a\'); \r\n            vmaxClickTracking([\'https:/a/1.jpg\', \'https:/a/2.jpg\', \'https:/a/3.jpg\'])"><div>Subscribe</div></button>\r\n        </div>\r\n    </div>\r\n    \x3c!-- Mobile Ads - App Masthead - Portrait - End --\x3e\r\n\r\n    \x3c!-- Mobile Ads - App Masthead - Portrait - Thank You --\x3e\r\n    <div id="vm_content_thank_you" class="vm_ad01">\r\n        <div class="vm_container">\r\n            <div class="vm_icon"><img src="img/icon.jpg" /></div>\r\n            <div class="vm_content">\r\n                <div class="vm_ad_title vm_ty">Thank you for the subscription!</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \x3c!-- Mobile Ads - App Masthead - Portrait - Thank You - End --\x3e\r\n\r\n    <script>\r\n        /** Show Appropriate message based on the arguments **/\r\n        function onOperationUpdate(msg) {\r\n            // DOM Elements\r\n            var elemNormalAd = document.getElementById("vm_content_normal_ad");\r\n            var elemThankyou = document.getElementById("vm_content_thank_you");\r\n            switch (msg) {\r\n                case "thank-you":\r\n                    elemNormalAd.style.display = "none";\r\n                    elemThankyou.style.display = "block";\r\n                    break;\r\n                case "error":\r\n                    break;\r\n                default:\r\n                    elemNormalAd.style.display = "block";\r\n                    elemThankyou.style.display = "none";\r\n                    break;\r\n            }\r\n        }\r\n        /** Handle "vmaxLaunchOperation" function \r\n        (1) if not present in the current window\r\n        (2) And is present in the parent window **/\r\n        if (typeof vmaxLaunchOperation === "undefined") {\r\n            if (window.parent.hasOwnProperty("vmaxLaunchOperation") &&\r\n                typeof window.parent.vmaxLaunchOperation === "function") {\r\n                function vmaxLaunchOperation(that , URLSchema) {\r\n                    window.parent.vmaxLaunchOperation(that , URLSchema);\r\n                }\r\n            } else {\r\n                function vmaxLaunchOperation(URLSchema) {\r\n                    // Since "vmaxLaunchOperation" is not defined, we are creating a dummy function\r\n                }\r\n            }\r\n        }\r\n\r\n        /** Fire away click events **/\r\n        function vmaxClickTracking(urls) {\r\n            try {\r\n                var imgs = [];\r\n                for (var _i = 0; _i < urls.length; _i++) {\r\n                    imgs[_i] = new Image();\r\n                    imgs[_i].src = urls[_i];\r\n                }\r\n            } catch (err) {\r\n                console.error(err);\r\n            }\r\n        }\r\n    <\/script>';
        }
    } ]);
    return VastParser;
}();

var VmaxVastAdEventsInterface = function() {
    function VmaxVastAdEventsInterface(options) {
        _classCallCheck(this, VmaxVastAdEventsInterface);
        var vast = options.vast, placementId = options.placementId, containerId = options.containerId, adspotKey = options.adspotKey;
        this.vast = vast;
        this.placementId = placementId;
        this.containerId = containerId;
        this.adspotKey = adspotKey;
        this.isAdStopped = false;
        this.isAdCompletedView = false;
        this.adDuration = 0;
        this.adRemainingTime = 0;
        this.adTitle = false;
        this.adDescription = false;
        this.adAdvertiser = false;
        this.adClickThrough = false;
        this.ins_tag = document.getElementById(placementId);
        this.isVmaxGoogleIMA = this.ins_tag.hasOwnProperty("eventTrackers");
        this.ins_eventTrackers = this.isVmaxGoogleIMA ? this.ins_tag.eventTrackers : "";
        this.counterClickThrough = 0;
    }
    _createClass(VmaxVastAdEventsInterface, [ {
        key: "getAdPlaytime",
        value: function getAdPlaytime() {
            try {
                return this.player.adDuration - this.player.adRemainingTime;
            } catch (err) {
                return false;
            }
        }
    }, {
        key: "getAdDuration",
        value: function getAdDuration() {
            try {
                return this.player.adDuration;
            } catch (err) {
                return false;
            }
        }
    }, {
        key: "onAdLoaded",
        value: function onAdLoaded() {
            if (this.isVmaxGoogleIMA) VmaxAd.fireBeacon("fill-notification-url", this.ins_eventTrackers, [ "<FILL>", "1" ]);
            VMAXSDK.Events.dispatch("onAdLoaded", this.placementId, {
                placementId: this.placementId,
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onAdStarted",
        value: function onAdStarted() {
            console.log("onAdStarted called");
            VMAX.companionManager.onPrimaryAdShow({
                adspotKey: this.adspotKey,
                placementId: this.placementId,
                videoContainer: this.containerId
            });
            VMAXSDK.Events.dispatch("onAdMediaStart", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "setPlayer",
        value: function setPlayer(options) {
            var container = options.container, player = options.player, _options$adId = options.adId, adId = _options$adId === undefined ? false : _options$adId, _options$adTitle = options.adTitle, adTitle = _options$adTitle === undefined ? false : _options$adTitle, _options$adAdvertiser = options.adAdvertiser, adAdvertiser = _options$adAdvertiser === undefined ? false : _options$adAdvertiser, _options$adDescriptio = options.adDescription, adDescription = _options$adDescriptio === undefined ? false : _options$adDescriptio, _options$adClickThrou = options.adClickThrough, adClickThrough = _options$adClickThrou === undefined ? false : _options$adClickThrou, pluginParams = options.pluginParams;
            this.player = player;
            this.adId = adId;
            this.adDuration = typeof player.adDuration !== "undefined" ? player.adDuration : 0;
            this.adRemainingTime = player && player.hasOwnProperty("adRemainingTime") && player.adRemainingTime || 0;
            this.adTitle = adTitle;
            this.adDescription = adDescription;
            this.adAdvertiser = adAdvertiser;
            this.adClickThrough = adClickThrough;
            this.pluginParams = pluginParams;
            this.insTag = document.getElementById(this.placementId);
        }
    }, {
        key: "onAdDestroy",
        value: function onAdDestroy(options) {
            var isTrackerFired = options.isTrackerFired, isAdPlayerFullscreen = options.isAdPlayerFullscreen, _options$muted = options.muted, muted = _options$muted === undefined ? null : _options$muted;
            var videoAdDuration = function() {
                try {
                    return this.player.adDuration;
                } catch (err) {
                    return false;
                }
            }();
            var videoAdRemainingTime = function() {
                try {
                    return this.player.adRemainingTime;
                } catch (err) {
                    return false;
                }
            }();
            VMAXSDK.Events.purgeEventQueue(this.placementId);
            VMAXSDK.Events.dispatch("onAdClose", this.placementId, {
                placementId: this.placementId,
                playtime: (videoAdDuration || 0) - (videoAdRemainingTime || 0),
                duration: videoAdDuration,
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false,
                muted: muted
            });
            VmaxAd.onAdClose(this.containerId, this.placementId, isAdPlayerFullscreen, false, muted);
        }
    }, {
        key: "destroyPlayer",
        value: function destroyPlayer() {
            try {
                if (this.player) {
                    this.player.stopAd();
                    this.player = null;
                    delete this.player;
                }
                this.adId = false;
                this.adDuration = 0;
                this.adRemainingTime = 0;
                this.adTitle = false;
                this.adDescription = false;
                this.adAdvertiser = false;
                this.adClickThrough = false;
            } catch (err) {
                console.error("VAEI > Could not destroy player instance!", err);
            }
        }
    }, {
        key: "getPlayer",
        value: function getPlayer() {
            return this.player || "";
        }
    }, {
        key: "onAdRender",
        value: function onAdRender() {
            console.log("onAdRender called");
            VMAXSDK.Events.dispatch("onAdRender", this.placementId, {
                placementId: this.placementId,
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onImpression",
        value: function onImpression() {
            var isImpressionFired = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (isImpressionFired == false) {
                console.log("Impression fired from VAEI");
            }
            VMAXSDK.FCAP.init({
                pId: this.placementId,
                type: "i"
            });
            if (this.isVmaxGoogleIMA) VmaxAd.fireBeacon("impression", this.ins_eventTrackers, "");
            VMAXSDK.Events.dispatch("onAdImpression", this.placementId, {
                placementId: this.placementId,
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onAdTimeUpdate",
        value: function onAdTimeUpdate() {
            var isRemainingTimeFired = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            console.log("onAdTimeUpdate called");
            VMAXSDK.Events.dispatch("onAdTimeUpdate", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onFirstQuartile",
        value: function onFirstQuartile(options) {
            console.log("onFirstQuartile called");
            VMAXSDK.Events.dispatch("onAdMediaFirstQuartile", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onMidPoint",
        value: function onMidPoint() {
            console.log("onMidPoint called");
            VMAXSDK.Events.dispatch("onAdMediaMidpoint", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onThirdQuartile",
        value: function onThirdQuartile() {
            console.log("onThirdQuartile called");
            VMAXSDK.Events.dispatch("onAdMediaThirdQuartile", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onComplete",
        value: function onComplete() {
            console.log("onComplete called");
            VMAXSDK.Events.dispatch("onAdMediaComplete", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onCompletedView",
        value: function onCompletedView() {
            console.log("onCompletedView Called called");
        }
    }, {
        key: "onPause",
        value: function onPause() {
            if (this.ins_tag.hasOwnProperty("isAdBreak") && this.ins_tag.isAdBreak) this.ins_tag._adbreak_.pauseAdBreak();
            VMAXSDK.Events.dispatch("onAdMediaPause", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onResume",
        value: function onResume() {
            if (this.ins_tag.hasOwnProperty("isAdBreak") && this.ins_tag.isAdBreak) this.ins_tag._adbreak_.resumeAdBreak();
            console.log("onResume called");
            VMAXSDK.Events.dispatch("onAdMediaResume", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onMute",
        value: function onMute() {
            console.log("onMute called");
            VMAXSDK.Events.dispatch("onAdMediaMute", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onUnmute",
        value: function onUnmute() {
            console.log("onUnmute called");
            VMAXSDK.Events.dispatch("onAdMediaUnmute", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onExpand",
        value: function onExpand() {
            console.log("onExpand called");
            VMAXSDK.Events.dispatch("onAdMediaExpand", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onCollapse",
        value: function onCollapse() {
            console.log("onCollapse called");
            VMAXSDK.Events.dispatch("onAdMediaCollapse", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onMute",
        value: function onMute() {
            console.log("onMute called");
            VMAXSDK.Events.dispatch("onAdMediaMute", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onUnmute",
        value: function onUnmute() {
            console.log("onUnmute called");
            VMAXSDK.Events.dispatch("onAdMediaUnmute", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onClick",
        value: function onClick() {
            var isClickEventFired = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (isClickEventFired == false) {
                console.log("click event fired from VAEI");
            }
            if (this.counterClickThrough === 0) {
                VMAXSDK.FCAP.init({
                    pId: this.placementId,
                    type: "c"
                });
            }
            if (this.isVmaxGoogleIMA) VmaxAd.fireBeacon("click-url", this.ins_eventTrackers, "");
            VMAXSDK.Events.dispatch("onAdClick", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
            this.counterClickThrough++;
        }
    }, {
        key: "onError",
        value: function onError() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            VMAX.companionManager.onPrimaryAdEnd({
                placementId: this.placementId
            });
            if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
                VMAXSDK.onAdError(this.placementId, "video stuck");
            }
            VMAXSDK.Events.dispatch("onAdError", this.placementId, {
                placementId: this.placementId,
                errorCode: options.hasOwnProperty("errorCode") ? options.errorCode : "005",
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
            this.isAdStopped = false;
            this.isAdCompletedView = false;
        }
    }, {
        key: "onAdClose",
        value: function onAdClose(options) {
            this.isAdCompletedView = true;
            var _options$isTrackerFir = options.isTrackerFired, isTrackerFired = _options$isTrackerFir === undefined ? true : _options$isTrackerFir, _options$isAdPlayerFu = options.isAdPlayerFullscreen, isAdPlayerFullscreen = _options$isAdPlayerFu === undefined ? false : _options$isAdPlayerFu, _options$isAdSkipped3 = options.isAdSkipped, isAdSkipped = _options$isAdSkipped3 === undefined ? false : _options$isAdSkipped3, _options$muted2 = options.muted, muted = _options$muted2 === undefined ? null : _options$muted2;
            this.isAdStopped = false;
            VMAXSDK.Events.dispatch("onAdClose", this.placementId, {
                placementId: this.placementId,
                duration: function() {
                    try {
                        return this.player.adDuration;
                    } catch (err) {
                        return false;
                    }
                }(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false,
                muted: muted,
                eventOnAdClose: function() {
                    VmaxAd.onAdClose(this.containerId, this.placementId, isAdPlayerFullscreen, false, muted);
                }.bind(this)
            });
        }
    }, {
        key: "onAdEnd",
        value: function onAdEnd(options) {
            this.isAdCompletedView = true;
            VmaxAd.isVideoShown(this.placementId, true);
            var isTrackerFired = options.isTrackerFired, isAdPlayerFullscreen = options.isAdPlayerFullscreen;
            VMAXSDK.Events.dispatch("onAdMediaEnd", this.placementId, {
                placementId: this.placementId,
                duration: function() {
                    try {
                        return this.player.adDuration;
                    } catch (err) {
                        return false;
                    }
                }(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
            if (this.isAdStopped && this.isAdCompletedView) {
                VmaxAd.onAdMediaEnd(this.containerId, this.placementId, isAdPlayerFullscreen);
            }
        }
    }, {
        key: "onAdStopped",
        value: function onAdStopped(options) {
            this.isAdStopped = true;
            var isTrackerFired = options.isTrackerFired, isAdPlayerFullscreen = options.isAdPlayerFullscreen;
            if (this.isAdStopped && this.isAdCompletedView) {
                VmaxAd.onAdMediaEnd(this.containerId, this.placementId, isAdPlayerFullscreen);
            }
        }
    }, {
        key: "onAdSkippable",
        value: function onAdSkippable() {
            console.log("onAdSkippable called");
            VMAXSDK.Events.dispatch("onAdSkippable", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false
            });
        }
    }, {
        key: "onAdSkipped",
        value: function onAdSkipped(options) {
            var isTrackerFired = options.isTrackerFired, isAdPlayerFullscreen = options.isAdPlayerFullscreen, _options$muted3 = options.muted, muted = _options$muted3 === undefined ? null : _options$muted3;
            this.isAdStopped = false;
            this.isAdCompletedView = false;
            var isAdSkipped = true;
            VMAXSDK.Events.dispatch("onAdSkipped", this.placementId, {
                placementId: this.placementId,
                playtime: this.getAdPlaytime(),
                duration: this.getAdDuration(),
                adId: this.adId || false,
                adTitle: this.adTitle || false,
                adDescription: this.adDescription || false,
                adAdvertiser: this.adAdvertiser || false,
                adClickThrough: this.adClickThrough || false,
                pluginParams: this.pluginParams || false,
                muted: muted
            });
            VmaxAd.onAdClose(this.containerId, this.placementId, isAdPlayerFullscreen, isAdSkipped, muted);
        }
    }, {
        key: "onOutOfViewport",
        value: function onOutOfViewport(options) {
            try {
                if (this.player) {
                    console.log("onOutOfViewport");
                    this.player.pauseAd();
                }
            } catch (err) {}
        }
    }, {
        key: "onInViewport",
        value: function onInViewport(options) {
            var _this9 = this;
            try {
                if (this.player) {
                    console.log("onInViewport");
                    this.player.resumeAd()["catch"](function() {
                        _this9.player.startAd();
                    });
                    this.insTag.vmaxTrackers.fireImpression();
                }
            } catch (err) {}
        }
    } ]);
    return VmaxVastAdEventsInterface;
}();

var VmaxSDKCustomEvents = function() {
    function VmaxSDKCustomEvents() {
        _classCallCheck(this, VmaxSDKCustomEvents);
        this.events = [ "onAdBreakReady", "onAdBreakStart", "onAdBreakComplete", "onAdReady", "onAdError", "onAdClose", "onAdMediaEnd", "onAdRefresh", "onAdSkipped", "onAdMediaStart", "onAdMediaPause", "onAdMediaResume", "onAdSkipEnabled", "onAdClick", "onAdRender", "onAdMediaUnmute", "onAdMediaMute", "onAdMediaExpand", "onAdMediaCollapse", "onAdMediaFirstQuartile", "onAdMediaMidpoint", "onAdMediaThirdQuartile", "onAdTimeUpdate", "onAdLoaded", "onAdMediaComplete" ];
        this.callbacks = {};
        this.paramsInfo = {};
        this.savedDispatchedEvents = {};
        this.skipEvents = {};
    }
    _createClass(VmaxSDKCustomEvents, [ {
        key: "holdEventDispatch",
        value: function holdEventDispatch(eventName, placementId) {
            if (!this.skipEvents.hasOwnProperty(eventName)) {
                this.skipEvents[eventName] = [];
            }
            if (this.skipEvents[eventName].indexOf(placementId) === -1) {
                this.skipEvents[eventName].push(placementId);
            }
        }
    }, {
        key: "releaseEvents",
        value: function releaseEvents(eventName, placementId) {
            if (this.skipEvents.hasOwnProperty(eventName)) {
                var _index = this.skipEvents[eventName].indexOf(placementId);
                if (this.skipEvents[eventName].indexOf(placementId) > -1) {
                    this.skipEvents[eventName].splice(_index, 1);
                }
                if (this.skipEvents[eventName].length === 0) {
                    delete this.skipEvents[eventName];
                }
            }
            var savedInfo = this.savedDispatchedEvents.hasOwnProperty(eventName) && this.savedDispatchedEvents[eventName].hasOwnProperty(placementId) && this.savedDispatchedEvents[eventName][placementId];
            if (savedInfo) {
                for (var i = 0; i < savedInfo.length; i++) {
                    var extraInfo = savedInfo[i];
                    this.dispatch(eventName, placementId, extraInfo);
                }
            }
            if (this.savedDispatchedEvents.hasOwnProperty(eventName)) {
                if (this.savedDispatchedEvents[eventName].hasOwnProperty(placementId)) {
                    delete this.savedDispatchedEvents[eventName][placementId];
                }
                if (Object.keys(this.savedDispatchedEvents[eventName]).length === 0) {
                    delete this.savedDispatchedEvents[eventName];
                }
            }
        }
    }, {
        key: "purgeEventQueue",
        value: function purgeEventQueue(placementId) {
            if (!placementId) {
                this.skipEvents = {};
                this.savedDispatchedEvents = {};
                return;
            }
            for (var eventName in this.skipEvents) {
                if (this.skipEvents.hasOwnProperty(eventName)) {
                    var _index = this.skipEvents[eventName].indexOf(placementId);
                    if (this.skipEvents[eventName].indexOf(placementId) > -1) {
                        this.skipEvents[eventName].splice(_index, 1);
                    }
                    if (this.skipEvents[eventName].length === 0) {
                        delete this.skipEvents[eventName];
                    }
                }
                if (this.savedDispatchedEvents.hasOwnProperty(eventName)) {
                    if (this.savedDispatchedEvents[eventName].hasOwnProperty(placementId)) {
                        delete this.savedDispatchedEvents[eventName][placementId];
                    }
                    if (Object.keys(this.savedDispatchedEvents[eventName]).length === 0) {
                        delete this.savedDispatchedEvents[eventName];
                    }
                }
            }
        }
    }, {
        key: "dispatch",
        value: function dispatch(eventName, placementId) {
            var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            try {
                if (!this.events.indexOf(eventName) === -1) {
                    console.error("Event name is not valid!");
                    return;
                }
                if (typeof placementId !== "string") {
                    console.error("Placement ID should be a string!");
                    return;
                }
                if (this.skipEvents.hasOwnProperty(eventName) && this.skipEvents[eventName].indexOf(placementId) > -1) {
                    if (!this.savedDispatchedEvents.hasOwnProperty(eventName)) {
                        this.savedDispatchedEvents[eventName] = {};
                    }
                    if (!this.savedDispatchedEvents[eventName].hasOwnProperty(placementId)) {
                        this.savedDispatchedEvents[eventName][placementId] = [];
                    }
                    this.savedDispatchedEvents[eventName][placementId].push(extraInfo);
                    return;
                }
                var extraInfoModified = _extends({}, extraInfo);
                for (var _key in extraInfoModified) {
                    if (/^event/i.test(_key) && typeof extraInfoModified[_key] === "function") {
                        extraInfoModified[_key]();
                        delete extraInfoModified[_key];
                    }
                }
                var SPCPlacementId = getSPCPlacementId(placementId);
                if (!this.callbacks.hasOwnProperty(eventName)) {
                    return;
                }
                var callbacks = this.callbacks[eventName].hasOwnProperty(placementId) && this.callbacks[eventName][placementId];
                var SPCCallbacks = this.callbacks[eventName].hasOwnProperty(SPCPlacementId) && this.callbacks[eventName][SPCPlacementId];
                var updatePlacementIdInStructuredParams = this.getUpdatedStructuredParams({
                    params: this.getStructuredParams(extraInfoModified),
                    replace: {
                        placementId: SPCPlacementId
                    }
                });
                if (callbacks) {
                    for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](this.getStructuredParams(extraInfoModified));
                    }
                }
                if (SPCCallbacks && updatePlacementIdInStructuredParams) {
                    for (var _i3 = 0; _i3 < SPCCallbacks.length; _i3++) {
                        SPCCallbacks[_i3](updatePlacementIdInStructuredParams);
                    }
                }
            } catch (err) {
                console.error("Cannot dispatch event to the specified event/placementId!", err);
            }
            function getSPCPlacementId(placementId) {
                var insTag = document.getElementById(placementId);
                var isSPC = insTag && insTag.isSPCInstance === true;
                var SPCId = isSPC && insTag.SPC.placementId;
                console.log(">>>>>", SPCId);
                return SPCId;
            }
        }
    }, {
        key: "listen",
        value: function listen(eventName, placementId, callback) {
            try {
                if (!this.events.indexOf(eventName) === -1) {
                    console.warn("Event name is not valid!");
                    return;
                }
                if (!/string|object/i.test(typeof placementId === "undefined" ? "undefined" : _typeof(placementId)) || (typeof placementId === "undefined" ? "undefined" : _typeof(placementId)) === "object" && placementId instanceof Array === false) {
                    console.warn("Placement ID should be a string/array!");
                    return;
                }
                if (typeof callback !== "function") {
                    console.warn("Callback should be a function!");
                    return;
                }
                if (!this.callbacks.hasOwnProperty(eventName)) {
                    this.callbacks[eventName] = {};
                }
                if (typeof placementId === "string") {
                    if (!this.callbacks[eventName].hasOwnProperty(placementId)) {
                        this.callbacks[eventName][placementId] = [];
                    }
                    var _indexCallback = this.findCallback(this.callbacks[eventName][placementId], callback);
                    _indexCallback = _indexCallback !== false ? _indexCallback : this.callbacks[eventName][placementId].indexOf(callback);
                    if (_indexCallback > -1) {
                        this.callbacks[eventName][placementId][_indexCallback] = callback;
                    } else {
                        this.callbacks[eventName][placementId].push(callback);
                    }
                } else if (placementId instanceof Array) {
                    for (var i = 0; i < placementId.length; i++) {
                        var pId = placementId[i];
                        if (typeof pId === "string") {
                            if (!this.callbacks[eventName].hasOwnProperty(pId)) {
                                this.callbacks[eventName][pId] = [];
                            }
                            var _indexCallback = this.findCallback(this.callbacks[eventName][pId], callback);
                            _indexCallback = _indexCallback !== false ? _indexCallback : this.callbacks[eventName][pId].indexOf(callback);
                            if (_indexCallback > -1) {
                                this.callbacks[eventName][pId][_indexCallback] = callback;
                            } else {
                                this.callbacks[eventName][pId].push(callback);
                            }
                        }
                    }
                }
            } catch (err) {
                console.error("Cannot attach listen to the specified event/placementId!", err);
            }
        }
    }, {
        key: "findCallback",
        value: function findCallback(_array, _callback) {
            try {
                if (typeof _callback !== "function" || !_callback.hasOwnProperty("name") || _array instanceof Array === false) {
                    return false;
                }
                var _index = -1;
                for (var _indexArray = 0; _indexArray < _array.length; _indexArray++) {
                    if (typeof _array[_indexArray] === "function" && _array[_indexArray].name === _callback.name) {
                        _index = _indexArray;
                        break;
                    }
                }
                return _index;
            } catch (err) {
                console.warn("Does not support name property in function!", err);
                return false;
            }
        }
    }, {
        key: "setParams",
        value: function setParams() {
            var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            try {
                if (!this.paramsInfo.hasOwnProperty(parameters.placementId)) {
                    this.paramsInfo[parameters.placementId] = parameters;
                } else {
                    var previousValues = this.paramsInfo[parameters.placementId];
                    this.paramsInfo[parameters.placementId] = _extends({}, previousValues, {
                        parameters: parameters
                    });
                }
                return this.paramsInfo[parameters.placementId];
            } catch (err) {
                console.warn("Cannot set parameters!", parameters || false, err);
                if (this.paramsInfo.hasOwnProperty(parameters.placementId)) {
                    return this.paramsInfo[parameters.placementId];
                } else {
                    return {};
                }
            }
        }
    }, {
        key: "getStructuredParams",
        value: function getStructuredParams() {
            var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            try {
                var tmpObj = {};
                if (parameters.hasOwnProperty("placementId") && parameters.placementId !== false) {
                    tmpObj["placementId"] = parameters.placementId;
                }
                tmpObj["ad"] = {};
                if (parameters.hasOwnProperty("adId") && parameters.adId !== false) {
                    tmpObj["ad"]["id"] = parameters.adId;
                }
                if (parameters.hasOwnProperty("width") && parameters.width !== false) {
                    tmpObj["ad"]["width"] = parameters.width;
                }
                if (parameters.hasOwnProperty("height") && parameters.height !== false) {
                    tmpObj["ad"]["height"] = parameters.height;
                }
                if (parameters.hasOwnProperty("playtime") && parameters.playtime !== false) {
                    tmpObj["ad"]["playtime"] = parameters.playtime;
                }
                if (parameters.hasOwnProperty("duration") && parameters.duration !== false) {
                    tmpObj["ad"]["duration"] = parameters.duration;
                }
                if (parameters.hasOwnProperty("adTitle") && parameters.adTitle !== false) {
                    tmpObj["ad"]["adTitle"] = parameters.adTitle;
                }
                if (parameters.hasOwnProperty("adDescription") && parameters.adDescription !== false) {
                    tmpObj["ad"]["adDescription"] = parameters.adDescription;
                }
                if (parameters.hasOwnProperty("adAdvertiser") && parameters.adAdvertiser !== false) {
                    tmpObj["ad"]["adAdvertiser"] = parameters.adAdvertiser;
                }
                if (parameters.hasOwnProperty("adClickThrough") && parameters.adClickThrough !== false) {
                    tmpObj["ad"]["adClickThrough"] = parameters.adClickThrough;
                }
                if (parameters.hasOwnProperty("pluginParams") && parameters.pluginParams.hasOwnProperty("width") && !isNaN(parameters.pluginParams.width)) {
                    tmpObj["ad"]["width"] = parameters.pluginParams.width;
                }
                if (parameters.hasOwnProperty("pluginParams") && parameters.pluginParams.hasOwnProperty("height") && !isNaN(parameters.pluginParams.height)) {
                    tmpObj["ad"]["height"] = parameters.pluginParams.height;
                }
                if (parameters.hasOwnProperty("pluginParams") && parameters.pluginParams.hasOwnProperty("isVerticalVideo") && !isNaN(parameters.pluginParams.isVerticalVideo)) {
                    tmpObj["ad"]["isVerticalVideo"] = parameters.pluginParams.isVerticalVideo;
                }
                if (parameters.hasOwnProperty("muted")) {
                    tmpObj["ad"]["muted"] = parameters.muted;
                }
                tmpObj["ad"] = _extends({}, tmpObj["ad"], this.getMetaInfoFromINSTag(parameters.placementId), this.getAdInfoFromINSTag(parameters.placementId));
                if (Object.keys(tmpObj["ad"]).length === 0) {
                    delete tmpObj["ad"];
                }
                if (parameters.hasOwnProperty("errorCode") && parameters.errorCode !== false) {
                    tmpObj["errorCode"] = parameters.errorCode;
                }
                if (parameters.hasOwnProperty("isAdSkipped")) {
                    tmpObj["isAdSkipped"] = parameters.isAdSkipped || false;
                }
                return tmpObj;
            } catch (err) {
                console.error("Cannot structure data!", err);
                return {};
            }
        }
    }, {
        key: "getMetaInfoFromINSTag",
        value: function getMetaInfoFromINSTag(placementId) {
            try {
                if (typeof placementId !== "string" || !document.getElementById(placementId)) {
                    return {};
                }
                var insTag = document.getElementById(placementId);
                if (!insTag.dataset.hasOwnProperty("meta")) {
                    return {};
                }
                var metaInfo = insTag.dataset.meta;
                metaInfo = JSON.parse(metaInfo.replace(/'/gi, '"'));
                if (Object.keys(metaInfo).length === 0) {
                    return {};
                }
                return metaInfo;
            } catch (err) {
                return {};
            }
        }
    }, {
        key: "getAdInfoFromINSTag",
        value: function getAdInfoFromINSTag(placementId) {
            try {
                if (typeof placementId !== "string" || !document.getElementById(placementId)) {
                    return {};
                }
                var insTag = document.getElementById(placementId);
                if (!insTag.hasOwnProperty("adInfo")) {
                    return {};
                }
                var adInfo = insTag.hasOwnProperty("adInfo") && insTag.adInfo;
                var tmpAdInfo = {
                    orderId: _get(adInfo.order.id),
                    orderName: _get(adInfo.order.name),
                    advertiserId: _get(adInfo.advertiser.id),
                    advertiserMarketer: _get(adInfo.advertiser.marketer),
                    advertiserBrand: _get(adInfo.advertiser.brand),
                    advertiserAgency: _get(adInfo.advertiser.agency),
                    campaignId: _get(adInfo.campaign.id),
                    campaignName: _get(adInfo.campaign.name),
                    name: _get(adInfo.ad.name),
                    id: _get(adInfo.ad.id),
                    adparams: _get(adInfo.adparams)
                };
                tmpAdInfo = _sanitize(tmpAdInfo);
                return tmpAdInfo;
            } catch (err) {
                console.warn("Did not get 'adInfo' from <INS>", err);
            }
            function _get(tmpObj) {
                try {
                    return tmpObj;
                } catch (err) {
                    return "";
                }
            }
            function _sanitize(tmpObj) {
                try {
                    var tmpObj2 = {};
                    for (var _key in tmpObj) {
                        if (tmpObj[_key] !== "") {
                            tmpObj2[_key] = tmpObj[_key];
                        }
                    }
                    return tmpObj2;
                } catch (err) {
                    return {};
                }
            }
        }
    }, {
        key: "getUpdatedStructuredParams",
        value: function getUpdatedStructuredParams(options) {
            var _options$params = options.params, params = _options$params === undefined ? {} : _options$params, _options$replace = options.replace, replace = _options$replace === undefined ? {} : _options$replace;
            if (Object.keys(params).length === 0) return false;
            for (var key in replace) {
                params[key] = replace[key];
            }
            return params;
        }
    } ]);
    return VmaxSDKCustomEvents;
}();

var VmaxAdEvents = {
    onAdClose: function onAdClose(element) {
        var insTag = this.getInsTag(element);
        if (!insTag) return;
        VMAX.companionManager.companionSkipAd({
            placementId: insTag.id,
            adspotKey: insTag.dataset.adspotKey
        });
    },
    getInsTag: function getInsTag(element) {
        var insTag = element.closest("ins");
        if (!insTag || !insTag.hasAttribute("id") || !insTag.dataset.hasOwnProperty("adspotKey")) {
            return false;
        }
        return insTag;
    }
};

var SimpleVastVideoPlayer = function() {
    function SimpleVastVideoPlayer(options) {
        _classCallCheck(this, SimpleVastVideoPlayer);
        var defaults = {
            xml: false,
            mute: true,
            autoPlay: true,
            moat: {},
            containerId: false,
            placementId: false,
            trackers: {},
            adContent: {},
            adspotKey: false,
            loop: false,
            previewImage: false
        };
        this.state = _extends({}, defaults, options);
    }
    _createClass(SimpleVastVideoPlayer, [ {
        key: "show",
        value: function show() {
            var _state = this.state, xml = _state.xml, _state$adContent = _state.adContent, adContent = _state$adContent === undefined ? {} : _state$adContent, placementId = _state.placementId, containerId = _state.containerId, muteState = _state.mute, _state$loop = _state.loop, loop = _state$loop === undefined ? false : _state$loop, _state$previewImage = _state.previewImage, previewImage = _state$previewImage === undefined ? false : _state$previewImage;
            var adspotKey = document.getElementById(placementId).dataset.adspotKey;
            if (!placementId || !containerId || !adspotKey) return;
            VMAXSDK.showAd({
                placementId: placementId,
                containerId: containerId,
                muteState: muteState,
                xml: xml,
                adparams: adContent && adContent.hasOwnProperty("adparams") && adContent.adparams,
                viewability: adContent && adContent.hasOwnProperty("viewability") && adContent.viewability,
                adspotKey: adspotKey,
                loop: loop,
                previewImage: previewImage
            });
        }
    } ]);
    return SimpleVastVideoPlayer;
}();

var VmaxNativeAdLayoutManager = function() {
    function VmaxNativeAdLayoutManager() {
        _classCallCheck(this, VmaxNativeAdLayoutManager);
        this.layouts = {};
    }
    _createClass(VmaxNativeAdLayoutManager, [ {
        key: "addLayout",
        value: function addLayout(options) {
            var layoutName = options.layoutName, layoutContent = options.layoutContent, adspotSize = options.adspotSize;
            if (typeof layoutName !== "string" || typeof layoutContent !== "string" || typeof adspotSize !== "string" || layoutName.length === 0 || layoutContent.length === 0 || adspotSize.length === 0) {
                console.warn("Unable to add layout. One or more parameters are incorrect!");
                return;
            }
            var key = this.sanitizeLayoutName(layoutName) + "_" + adspotSize;
            this.layouts[key] = layoutContent;
        }
    }, {
        key: "isNativeCustomLayout",
        value: function isNativeCustomLayout(options) {
            var adspotFormat = options.adspotFormat, layoutName = options.layoutName, adspotSize = options.adspotSize;
            return adspotFormat === "native" && typeof layoutName === "string" && layoutName.length > 0 && typeof adspotSize === "string" && adspotSize.length > 0;
        }
    }, {
        key: "isLayoutRegistered",
        value: function isLayoutRegistered(options) {
            var _options$layoutName = options.layoutName, layoutName = _options$layoutName === undefined ? "" : _options$layoutName, _options$adspotSize = options.adspotSize, adspotSize = _options$adspotSize === undefined ? "" : _options$adspotSize;
            var layouts = this.layouts;
            var isParametersProvidedOk = typeof layoutName === "string" && typeof adspotSize === "string" && layoutName.length > 0 && adspotSize.length > 0;
            var key = isParametersProvidedOk && this.sanitizeLayoutName(layoutName) + "_" + adspotSize;
            return isParametersProvidedOk && layouts.hasOwnProperty(key);
        }
    }, {
        key: "getLayout",
        value: function getLayout(options) {
            var layoutName = options.layoutName, adspotSize = options.adspotSize;
            var layouts = this.layouts;
            if (this.isLayoutRegistered(options)) {
                var key = this.sanitizeLayoutName(layoutName) + "_" + adspotSize;
                return layouts[key];
            } else {
                return false;
            }
        }
    }, {
        key: "getLayoutName",
        value: function getLayoutName(nativeAdObject) {
            try {
                return nativeAdObject.layout || "";
            } catch (err) {
                return "";
            }
        }
    }, {
        key: "sanitizeLayoutName",
        value: function sanitizeLayoutName() {
            var layoutName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            try {
                return layoutName.replace(/\s/i, "_");
            } catch (err) {
                return layoutName || "";
            }
        }
    } ]);
    return VmaxNativeAdLayoutManager;
}();

var VmaxOperationMediator = function() {
    function VmaxOperationMediator() {
        _classCallCheck(this, VmaxOperationMediator);
        this.operationList = [];
        this.operationIdList = [];
    }
    _createClass(VmaxOperationMediator, [ {
        key: "registerOperation",
        value: function registerOperation(options) {
            var operation = options.operation;
            var operationId = operation.getOperationId();
            this.operationList[operationId] = operation;
            this.operationIdList.push(operationId);
        }
    }, {
        key: "handleOperation",
        value: function handleOperation(options) {
            try {
                var schemeUrl = options.schemeUrl, operationEventRecevier = options.operationEventRecevier;
                var schemeUrlData = schemeUrl.split("://")[1].split("/");
                var operation = schemeUrlData[0];
                var metadata = schemeUrlData[1];
                if (this.operationList.hasOwnProperty(operation)) {
                    if (VMAXSDK && VMAXSDK.hasOwnProperty("onOperationStart") && typeof VMAXSDK.onOperationStart == "function") {
                        var _placementId = operationEventRecevier && operationEventRecevier.hasOwnProperty("placementId") && operationEventRecevier.placementId;
                        VMAXSDK.onOperationStart(_placementId);
                    }
                    this.operationList[operation].onUserInteraction({
                        metadata: metadata,
                        operationEventRecevier: operationEventRecevier
                    });
                }
            } catch (err) {
                console.warn("Could not start required operation!", err);
            }
        }
    }, {
        key: "getOperationList",
        value: function getOperationList() {
            return this.operationIdList.join();
        }
    } ]);
    return VmaxOperationMediator;
}();

var VmaxAdEvents = VmaxAdEvents || {};

VmaxAdEvents.launchOperation = function(Element, schemeUrl) {
    if (schemeUrl == "") return;
    var dataParentId = Element.closest("body").dataset.hasOwnProperty("parentId") && Element.closest("body").dataset.parentId;
    var placementId = dataParentId || Element.closest("ins[id][data-adspot-key]");
    var pNode = document.getElementById(placementId);
    var operationEventRecevier = pNode.IOperationEventRecevier;
    VMAX.operationMediator.handleOperation({
        schemeUrl: schemeUrl,
        operationEventRecevier: operationEventRecevier
    });
};

VmaxAdEvents.isOperation = function(landingUrl) {
    var isOperationTest = new RegExp("vop://", "i");
    var isOperation = isOperationTest.test(landingUrl);
    return isOperation;
};

VmaxAdEvents.handleClick = function(element, landingUrl) {
    if (VmaxAdEvents.isOperation(landingUrl)) {
        VmaxAdEvents.launchOperation(element, landingUrl);
    } else if (typeof window.ADSDKEXT !== "undefined" && typeof window.ADSDKEXT.click_handler !== "undefined" && typeof window.ADSDKEXT.click_handler == "function") {
        window.ADSDKEXT.click_handler(landingUrl);
    } else if (typeof window.parent.ADSDKEXT !== "undefined" && typeof window.parent.ADSDKEXT.click_handler !== "undefined" && typeof window.parent.ADSDKEXT.click_handler == "function") {
        window.parent.ADSDKEXT.click_handler(landingUrl);
    } else {
        window.open(landingUrl);
    }
};

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

var IframeResizer = function() {
    function IframeResizer() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, IframeResizer);
        var _options$iframeNode = options.iframeNode, iframeNode = _options$iframeNode === undefined ? false : _options$iframeNode, _options$isHeightResp = options.isHeightResponsive, isHeightResponsive = _options$isHeightResp === undefined ? false : _options$isHeightResp, _options$isWidthRespo = options.isWidthResponsive, isWidthResponsive = _options$isWidthRespo === undefined ? false : _options$isWidthRespo, _options$width = options.width, width = _options$width === undefined ? false : _options$width, _options$height = options.height, height = _options$height === undefined ? false : _options$height;
        if (!this.isIframeElement(iframeNode)) return;
        this.resizeTimer = false;
        this.iframeNode = iframeNode;
        this.isHeightResponsive = isHeightResponsive;
        this.isWidthResponsive = isWidthResponsive;
        this.width = width;
        this.height = height;
        this.iframeContentBody = this.getContentBody();
        this.iframeDocument = this.getContentWindowDocument();
        this.applyAttributesToIframe();
        if (isHeightResponsive) this.attachEvents();
    }
    _createClass(IframeResizer, [ {
        key: "applyAttributesToIframe",
        value: function applyAttributesToIframe() {
            if (this.isHeightResponsive) {
                this.attachEvents();
            } else {
                this.iframeNode.style.height = this.height + "px";
            }
            if (this.isWidthResponsive) {
                this.iframeNode.style.width = "100%";
            } else {
                this.iframeNode.style.width = this.width + "px";
            }
        }
    }, {
        key: "attachEvents",
        value: function attachEvents() {
            setTimeout(this.resizeIframe.bind(this), 300);
            this.iframeNode.addEventListener("load", this.resizeIframe.bind(this));
            this.iframeNode.contentWindow.addEventListener("resize", this.checkIfWindowHasDoneResizing.bind(this));
            var existingElements = this.iframeContentBody.querySelectorAll("*");
            for (var element in existingElements) {
                this.attachChildLoadEventListener(element);
            }
            this.iframeContentBody.appendChild(this.customCss());
            this.iframeContentBody.addEventListener("animationstart", this.checkIfDOMInserted.bind(this), true);
            this.iframeContentBody.addEventListener("MSAnimationStart", this.checkIfDOMInserted.bind(this), true);
            this.iframeContentBody.addEventListener("webkitAnimationStart", this.checkIfDOMInserted.bind(this), true);
        }
    }, {
        key: "attachChildLoadEventListener",
        value: function attachChildLoadEventListener(element) {
            if (!element || !/video|img|script|link/i.test(element.nodeName)) return;
            element.addEventListener("load", this.resizeIframe.bind(this));
        }
    }, {
        key: "customCss",
        value: function customCss() {
            var style = document.createElement("style");
            var _css_text = document.createTextNode("@keyframes elementInserteds { from {  } to {  } } \n    body * { animation-duration: 0.001s; animation-name: elementInserteds; }");
            style.appendChild(_css_text);
            return style;
        }
    }, {
        key: "checkIfDOMInserted",
        value: function checkIfDOMInserted(event) {
            if (event.animationName !== "elementInserteds") return;
            var element = event.target;
            this.attachChildLoadEventListener(element);
        }
    }, {
        key: "checkIfWindowHasDoneResizing",
        value: function checkIfWindowHasDoneResizing() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(this.resizeIframe.bind(this), 500);
        }
    }, {
        key: "resizeIframe",
        value: function resizeIframe() {
            try {
                if (!this.iframeContentBody) return;
                var _this = this;
                var body = this.iframeDocument.body, html = this.iframeDocument.documentElement;
                var maxHeight = function() {
                    try {
                        var rootElements = _this.iframeDocument.querySelectorAll(" body > *");
                        var height = 0;
                        for (var _node = 0; _node < rootElements.length; _node++) {
                            height += rootElements[_node].offsetHeight || 0;
                        }
                        return height;
                    } catch (err) {
                        return 0;
                    }
                }();
                console.debug("Max height 1: ", maxHeight);
                if (!maxHeight) {
                    maxHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                    console.debug("Max height 2: ", maxHeight);
                }
                this.iframeNode.style.height = maxHeight + "px";
            } catch (err) {}
        }
    }, {
        key: "getContentBody",
        value: function getContentBody() {
            return this.iframeNode.contentWindow && this.iframeNode.contentWindow.document && this.iframeNode.contentWindow.document.body;
        }
    }, {
        key: "getContentWindowDocument",
        value: function getContentWindowDocument() {
            return this.iframeNode.contentWindow && this.iframeNode.contentWindow.document;
        }
    }, {
        key: "isIframeElement",
        value: function isIframeElement(node) {
            try {
                return node instanceof HTMLElement && /iframe/i.test(node.nodeName);
            } catch (e) {
                return (typeof node === "undefined" ? "undefined" : _typeof(node)) === "object" && node.nodeType === 1 && _typeof(node.style) === "object" && _typeof(node.ownerDocument) === "object" && /iframe/i.test(node.nodeName);
            }
        }
    } ]);
    return IframeResizer;
}();

var VmaxTrackers = function() {
    function VmaxTrackers(options) {
        _classCallCheck(this, VmaxTrackers);
        this.state = {
            isImpressionFired: false
        };
        var _options$adObject = options.adObject, adObject = _options$adObject === undefined ? {} : _options$adObject, _options$placementId = options.placementId, placementId = _options$placementId === undefined ? false : _options$placementId;
        this.placementId = placementId;
        this.adObject = adObject;
    }
    _createClass(VmaxTrackers, [ {
        key: "fireImpression",
        value: function fireImpression() {
            if (this.state.isImpressionFired) {
                return;
            }
            if (typeof vservNotifyImpression == "function") vservNotifyImpression(this.adObject);
            this.state.isImpressionFired = true;
        }
    } ]);
    return VmaxTrackers;
}();

var VMAX = {};

var CONST = {};

var VMAX_ADD_ONS = {};

var VMAX_GLOBALS = {};

var VMAXSDK = VMAXSDK || {};

CONST.sdkVersion = "1.20.1";

CONST.APIVersion = "S-MS-" + CONST.sdkVersion;

CONST.reqDomain = "r.zee5.com";

CONST.folder_path = "prod/websdk/" + CONST.sdkVersion;

var url = "https://" + CONST.reqDomain + "/getad.php?<zoneid>|<source>|S-MS-4.3.1";

VMAX.Event = {};

VMAX.hashkey = Date.now() || new Date().getTime();

VMAX.AdParams = {};

VMAX.DeliveryAPI = url;

VMAX.Domain = {};

VMAX.Domain.Name = "cdn.vmax.com";

VMAX.Domain.Name = "rlocal.com";

VMAX.Domain.Context = "//" + VMAX.Domain.Name + "/WEBSDK";

VMAX.Domain.Lib = VMAX.Domain.Context + "/libs";

VMAX.Domain.Style = VMAX.Domain.Context + "/css";

VMAX.Domain.img = "//" + VMAX.Domain.Context + "/imgs";

VMAX.TestMode = "false";

VMAX.timer_viewport = false;

var event_VMAXSDK_ready = createNewEvent("VMAXSDK_ready");

VMAX.flag_body_loaded_timer = false;

VMAX.companionManager = new VmaxCompanionManager();

VMAX.operationMediator = new VmaxOperationMediator();

VMAXSDK.Events = new VmaxSDKCustomEvents();

VMAXSDK.nativeAdLayoutManager = new VmaxNativeAdLayoutManager();

VMAX.ObserverList = {};

VMAX.xmlhttp = {};

var VmaxAd = {};

CONST.enabled_sdks = [];

VMAXSDK.enableSDK = function(adnetworks) {
    var isValidAdnetworkArray = (typeof adnetworks === "undefined" ? "undefined" : _typeof(adnetworks)) === "object" && adnetworks instanceof Array && adnetworks.length > 0;
    if (isValidAdnetworkArray) {
        CONST.enabled_sdks = CONST.enabled_sdks.concat(adnetworks);
    }
};

VMAXSDK.pauseAd = function(placementId) {
    VmaxAd.pauseVideoForVPP(placementId);
    VmaxAd.pauseVideoForVastPlayer(placementId);
    VmaxAd.pauseAdRefresh(placementId);
};

VMAXSDK.resumeAd = function(placementId) {
    VmaxAd.resumeVideoForVPP(placementId);
    VmaxAd.resumeVideoForVastPlayer(placementId);
    VmaxAd.resumeAdRefresh(placementId);
};

CONST.__adNetworkMapping__ = Object.freeze({
    VmaxGoogleIMA: "VmaxGoogleIMA"
});

function createNewEvent(eventName) {
    var event;
    if (typeof Event === "function") {
        event = new Event(eventName);
    } else {
        event = document.createEvent("Event");
        event.initEvent(eventName, true, true);
    }
    return event;
}

VMAX.createNewEvent = function(eventName) {
    var event;
    if (typeof Event === "function") {
        event = new Event(eventName);
    } else {
        event = document.createEvent("Event");
        event.initEvent(eventName, true, true);
    }
    return event;
};

VMAX.isBrowserIE = navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true;

VMAXSDK.destroyPlacement = function(options) {
    var placementId = options.placementId, callback = options.callback;
    if (placementId && !_.isString(placementId)) return;
    var node = document.getElementById(placementId);
    if (!node) return;
    var companionLevel = node.getAttribute("data-companion-level");
    if (companionLevel == null || _.isEmpty(VMAX.companionManager)) return;
    if (companionLevel == "primary") {
        VMAX.companionManager.unRegisterPrimarySlot({
            placementId: placementId
        });
    } else {
        VMAX.companionManager.unRegisterCompanionSlot({
            placementId: placementId
        });
    }
    node.parentNode.removeChild(node);
    if (typeof callback == "function") {
        callback({
            placementId: placementId
        });
    }
    console.log(placementId + " remove Successfully");
};

VMAX.initConfig = function(cScript) {
    var location = getLocation(cScript);
    VMAX.Domain.Name = location["host"];
    VMAX.Domain.Context = location["protocol"] + "://" + VMAX.Domain.Name + "/" + CONST.folder_path;
    VMAX.Domain.Lib = VMAX.Domain.Context + "/libs";
    VMAX.Domain.Style = VMAX.Domain.Context + "/css";
    VMAX.Domain.Img = VMAX.Domain.Context + "/imgs";
    VMAX.Vast_player_js = VMAX.Domain.Lib + "/vast-player.js";
};

VMAX_ADD_ONS.viewport_timer = "";

VMAX_ADD_ONS.ins_in_viewport = function(a, _id) {
    init_ins_in_viewport();
    function init_ins_in_viewport() {
        try {
            if (a === "adstarted") {
                single_advideo_check(_id);
                return;
            } else if (a === false || a === true) {
                checkAllElements(a);
                return;
            }
            checkAllElements();
        } catch (err) {}
    }
    function single_advideo_check(_id) {
        var _node = document.getElementById(_id);
        if (_node) {
            var _x = _node.getElementsByTagName("iframe")[0];
            var _win_child = _x.contentWindow || _x.contentDocument;
            if (!in_viewport(_node)) {
                try {
                    _win_child.player.pauseAd();
                    _win_child.flagInViewPause = true;
                } catch (err) {}
            } else {
                _win_child.flagInViewPause = false;
            }
        }
    }
    function checkAllElements(flag) {
        var _nodes = document.getElementsByTagName("ins");
        for (var i = 0; i < _nodes.length; i++) {
            var _node = _nodes[i];
            try {
                var _x = _node.getElementsByTagName("iframe")[0] || _node;
                var _win_child = /iframe/i.test(_x.nodeName) ? _x.contentWindow || _x.contentDocument : false;
                if (flag === false || !in_viewport(_node)) {
                    if (_win_child.player) {
                        try {
                            _win_child.player.pauseAd();
                            _win_child.flagInViewPause = true;
                        } catch (err) {}
                    } else {
                        _win_child.flagInViewPause = false;
                        try {
                            if (VMAX.refresh_timers["timer_" + _node.id]) {
                                VmaxAd.cancel_refresh_ad(_node.id);
                            }
                        } catch (err) {}
                    }
                } else {
                    if (_win_child.player && !_win_child.isDeveloperPaused) {
                        try {
                            if (_win_child.player.adRemainingTime != 0) _win_child.player.resumeAd();
                        } catch (err) {}
                    } else {
                        if (!VMAX.refresh_timers["timer_" + _node.id] && !VmaxAd.isMarkedForRefresh(_node.id)) {
                            VmaxAd.refresh_ad(_node.id);
                        }
                    }
                }
            } catch (err) {}
        }
    }
    function in_viewport(_elem) {
        if (document[VMAX.window_hidden]) {
            return false;
        }
        var elem_position = _elem.offsetTop;
        var elem_height = _elem.offsetHeight;
        var _scrollY = window.scrollY || document.documentElement.scrollTop;
        var _window_height = window.innerHeight;
        var elem_height_threshold = elem_height / 2;
        var flag_is_elem_at_top_of_page = elem_position + elem_height_threshold < _window_height;
        if (flag_is_elem_at_top_of_page) {
            var flag_show = _scrollY < elem_position + elem_height_threshold;
        } else {
            var flag_show = _scrollY + _window_height > elem_position + elem_height_threshold && _scrollY + _window_height <= elem_position + elem_height_threshold + _window_height;
        }
        return flag_show;
    }
};

VMAX.inserted_ins_tags = [];

VMAX.abbrNum = function(number) {
    number = parseFloat(number);
    if (number > 1e12) {
        return "1T+";
    }
    var decPlaces = Math.pow(10, 1);
    var abbrev = [ "k", "m", "b", "t", "qd", "qi", "sx", "sp", "oc", "n", "d" ];
    for (var i = abbrev.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3);
        if (size <= number) {
            number = Math.round(number * decPlaces / size) / decPlaces;
            if (number == 1e3 && i < abbrev.length - 1) {
                number = 1;
                i++;
            }
            number += abbrev[i];
            break;
        }
    }
    return number;
};

VMAX.hot_push = function() {
    var _style = document.createElement("style");
    _style.type = "text/css";
    var _css_text = document.createTextNode("@keyframes insInserted { from { opacity: 0.99; } to { opacity: 1; } } ins[id][data-adspot-key] { animation-duration: 0.001s; animation-name: insInserted; }");
    _style.appendChild(_css_text);
    document.body.appendChild(_style);
    var chk_ins_inserted = function chk_ins_inserted(event) {
        if (event.animationName == "insInserted") {
            var _elem = event.target;
            var flag_element_has_children = function() {
                var found = false;
                var children = _elem.getElementsByTagName("*");
                for (var i = 0; i < children.length; i++) {
                    if (children[i].getAttribute("data-native-element")) {
                        found = true;
                        break;
                    }
                }
                return found;
            }();
            if (VMAX.inserted_ins_tags.indexOf(_elem.id) == -1 && !/ins-active/.test(_elem.className)) {
                VMAX.inserted_ins_tags.push(_elem.id);
                var operationEventRecevier = new VmaxOperationEventRecevier({
                    placementId: _elem["id"],
                    adspotKey: _elem.getAttribute("data-adspot-key")
                });
                _elem.IOperationEventRecevier = operationEventRecevier;
                addNodeIntoCompanionManager(_elem);
                getAdParams(_elem);
                _elem.className += (_elem.className.length ? " " : "") + "ins-active";
                _elem.className += flag_element_has_children ? " ins-native-custom" : "";
                if (flag_element_has_children) {
                    _elem.customNativeFields = _elem.innerHTML;
                    _elem.innerHTML = "";
                }
            }
        }
    };
    document.addEventListener("animationstart", chk_ins_inserted, true);
    document.addEventListener("MSAnimationStart", chk_ins_inserted, true);
    document.addEventListener("webkitAnimationStart", chk_ins_inserted, true);
};

VMAX.ins_in_viewport_init = function() {
    if (VMAX_ADD_ONS && VMAX_ADD_ONS.ins_in_viewport && typeof VMAX_ADD_ONS.ins_in_viewport == "function") {
        VMAX_ADD_ONS.ins_in_viewport();
    }
};

VMAX.initAdSDK = function() {
    var libraries_to_load = [ VMAX.Domain.Lib + "/native.ajax-class-es5.js", VMAX.Domain.Lib + "/HelperLib.js", VMAX.Domain.Lib + "/hls.js" ];
    loadLibFile(libraries_to_load, "", function() {
        console.log("SDK Version: " + CONST.sdkVersion);
        VmaxAd = new vmaxAd();
        VMAX.flag_body_loaded_timer = setInterval(function() {
            if (document.body) {
                clearInterval(VMAX.flag_body_loaded_timer);
                VMAX.hot_push();
                VMAX.instream_store.init();
            }
        }, 50);
        try {
            VMAX.timer_viewport = setInterval(function() {
                if (VMAX_ADD_ONS && VMAX_ADD_ONS.ins_in_viewport && typeof VMAX_ADD_ONS.ins_in_viewport == "function") {
                    VMAX_ADD_ONS.ins_in_viewport();
                }
            }, 400);
        } catch (err) {}
        window.dispatchEvent(event_VMAXSDK_ready);
    });
};

(function(d, s, id, ad) {
    var sq = d.querySelector('script[src*="ad.js"]').src || d.currentScript.src || d.querySelector('script[src*="WSDK/ad.js"]').src;
    if (RegExp("set-debug=true").test(sq)) VMAX.debugMode = true;
    checkMode();
    VMAX.initConfig(sq);
    VMAX.initAdSDK();
})(document, "script", "lib-main");

var __vmax_data = {};

function VmaxUserData() {
    this.setLoginId = function() {
        __vmax_data.lid = arguments && arguments[0];
    };
}

function getVmaxUserData() {
    var qEle = document.querySelector("ins.adsbyvmax");
    var qData = qEle !== null ? qEle.dataset : null;
    return qData;
}

VMAX.globals = function(_globals_override) {
    var _globals = {};
    if (VMAXSDK) {
        if (typeof VMAXSDK.AD_USER != "undefined") {
            _globals = _extends(_globals, VMAXSDK.AD_USER);
        }
        if (typeof VMAXSDK.AD_CONTEXT != "undefined") {
            _globals = _extends(_globals, VMAXSDK.AD_CONTEXT);
        }
        if (typeof VMAXSDK.AD_INFO != "undefined") {
            _globals = _extends(_globals, VMAXSDK.AD_INFO);
        }
    }
    if (_globals && Object.keys(_globals).length) {} else {}
    if (Object.keys(_globals_override).length) {
        _globals = _extends(_globals, _globals_override);
    }
    if (!_globals.connectionType && VMAX.getConnectionType()) {
        _globals.connectionType = VMAX.getConnectionType();
    }
    var tmp_lang = navigator.language || navigator.userLanguage;
    if (tmp_lang) {
        _globals.lc = tmp_lang;
    }
    return _globals;
};

VMAX.getConnectionType = function() {
    var cType = null;
    try {
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        var type = connection.type;
        if (type == "wifi") cType = 1; else if (type == "cellular") cType = 2; else cType = false;
    } catch (err) {
        cType = false;
    }
    return cType;
};

function registerCompanion(options) {
    var adspotKey = options.adspotKey, placementId = options.placementId, companionLevel = options.companionLevel, companionBehavior = options.companionBehavior;
    var isPureCompanion = companionLevel ? true : false;
    var companionEventReceiver = void 0;
    var eventReceiverOptions = {
        adspotKey: adspotKey,
        placementId: placementId,
        isPureCompanion: isPureCompanion,
        callbacks: {
            onResume: function onResume(pNode) {
                console.log("Send XHR Request for " + pNode.getAttribute("data-adspot-key"));
                getAdParams(pNode);
            },
            onPause: function onPause(pNode) {
                VmaxAd.cancel_refresh_ad(pNode["id"]);
            }
        }
    };
    var companionEventReceivers = VMAXSDK.Companion._companionEventReceivers;
    companionEventReceiver = companionEventReceivers.hasOwnProperty(companionBehavior) ? companionEventReceivers[companionBehavior](eventReceiverOptions) : companionEventReceivers["default"](eventReceiverOptions);
    VMAX.companionManager.registerSlot({
        adspotKey: adspotKey,
        placementId: placementId,
        companionEventReceiver: companionEventReceiver
    });
}

function addNodeIntoCompanionManager(pNode) {
    var placementId = pNode.getAttribute("id");
    var adspotKey = pNode.getAttribute("data-adspot-key");
    var companionLevel = pNode.getAttribute("data-companion-level");
    var companionBehavior = pNode.getAttribute("data-companion-behavior");
    if (companionLevel == null || _.isEmpty(placementId) || !_.isString(placementId)) return;
    companionLevel = companionLevel.toLocaleLowerCase().trim();
    if (companionLevel == "primary") {
        VMAX.companionManager.onPrimaryAdFetchStarted({
            adspotKey: adspotKey,
            placementId: placementId
        });
    } else if (companionLevel == "companion" || companionLevel == "hybrid") {
        registerCompanion({
            adspotKey: adspotKey,
            placementId: placementId,
            companionLevel: companionLevel,
            companionBehavior: companionBehavior
        });
        if (VMAX.companionManager.isPrimaryActive()) {
            pNode.setAttribute("data-alive", 0);
        }
    }
}

VMAX.getSafeAdNetworkParemter = function(Sdk_name) {
    return Sdk_name.toLocaleLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/ /g, "_");
};

CONST.adNetworks = _defineProperty({}, VMAX.getSafeAdNetworkParemter("Google Ad Manager"), 63481);

Object.freeze(CONST.adNetworks);

CONST.SDK_CAPABILITY_ENABLED = "sce";

CONST.SDK_CAPABILITY_TO_PASS_DURATION_IN_REQEST = "1";

CONST.adNetworks_capability = {
    63481: [ "63481_" + CONST.SDK_CAPABILITY_TO_PASS_DURATION_IN_REQEST ]
};

Object.freeze(CONST.adNetworks_capability);

CONST.enabled_sdks_capability = [];

VMAX.getSEParameter = function() {
    if (CONST.enabled_sdks.length == 0) {
        return false;
    }
    var seValue = [];
    for (var i = 0; i < CONST.enabled_sdks.length; i++) {
        var element = CONST.enabled_sdks[i];
        var elementName = VMAX.getSafeAdNetworkParemter(element);
        if (CONST.adNetworks.hasOwnProperty(elementName)) seValue.push(CONST.adNetworks[elementName]);
        if (CONST.adNetworks_capability.hasOwnProperty("" + seValue)) CONST.enabled_sdks_capability.push(CONST.adNetworks_capability["" + seValue]);
    }
    return seValue.join(",");
};

function getAdParams(pNode) {
    if (pNode && pNode.id) VmaxAd.removeRefreshMark(pNode.id);
    var isAdRequestAllowed = pNode.getAttribute("data-alive");
    var isPureCompanion = pNode.getAttribute("data-companion-level") == "companion";
    if (isAdRequestAllowed == 0 || isPureCompanion) {
        var pool_index = VMAX.inserted_ins_tags.indexOf(pNode.id);
        VMAX.inserted_ins_tags.splice(pool_index, 1);
        return;
    }
    var vmaxDataKeys = [ "setsection", "setlanguageofarticle", "setloginid", "setage", "setemail", "setcity", "setgender" ];
    var vmaxDelKeys = [ "sec", "loa", "lid", "ag", "em", "ci", "gn" ];
    var pId = pNode.getAttribute("id");
    var _getDOMDataset = getDOMDataset(pNode, [ "adspotKey", "source", "testMode", "setcustomdata", "pkgName" ]), adspotKey = _getDOMDataset.adspotKey, source = _getDOMDataset.source, testMode = _getDOMDataset.testMode, setcustomdata = _getDOMDataset.setcustomdata, vmaxCustomData = _getDOMDataset.vmaxCustomData, pkgName = _getDOMDataset.pkgName;
    var vmaxData = getDOMDataset(pNode, vmaxDataKeys, vmaxDelKeys);
    var _globals_override = getDOMDataset(pNode, [ "loginId", "email", "age", "gender", "city", "state", "pincode", "userIfa", "sectionCategory", "pageCategory", "languageOfArticle", "lat", "lng", "mcc", "mnc", "pkgName" ]);
    var _globals = VMAX.globals(_globals_override);
    var _globals_mapping = {
        loginId: "lid",
        email: "em",
        age: "ag",
        gender: "gn",
        pincode: "pin",
        city: "ci",
        state: "st",
        userIfa: "advid",
        sectionCategory: "scat",
        pageCategory: "pcat",
        languageOfArticle: "loa",
        lat: "lat",
        lng: "lon",
        connectionType: "ap",
        mcc: "cc",
        mnc: "nc",
        lc: "lc",
        pkgName: "source",
        lid: "lid",
        baid: "baid"
    };
    if (typeof setcustomdata === "string" && setcustomdata.length > 0) {
        setcustomdata = JSON.parse(setcustomdata);
    }
    var isSPCInstance = pNode.hasOwnProperty("isSPCInstance") && pNode.isSPCInstance === true;
    var spcTargetingParameters = isSPCInstance && pNode.SPC.getCustomData();
    if (isSPCInstance === true && spcTargetingParameters) {
        setcustomdata = _extends({}, setcustomdata || {}, spcTargetingParameters);
    }
    var globalCustomData = function() {
        try {
            var tmpObj = {};
            var isCustomDataAvailable = VMAXSDK.hasOwnProperty("CUSTOM_DATA") && Object.keys(VMAXSDK.CUSTOM_DATA).length > 0;
            if (!isCustomDataAvailable) return {};
            for (var _key in VMAXSDK.CUSTOM_DATA) {
                tmpObj["ck_" + encodeURI(_key)] = encodeURI(VMAXSDK.CUSTOM_DATA[_key]);
            }
            return tmpObj;
        } catch (err) {
            console.warn("Could not parse global custom data!", err);
            return {};
        }
    }();
    if (typeof setcustomdata != "undefined") {
        if (VMAX.package_exceptions(pkgName)) {
            setcustomdata = setcustomdata.replace(/'/g, '"');
        }
        try {
            var custom = _extends({}, setcustomdata);
            setcustomdata = {};
            for (var x in custom) {
                setcustomdata["ck_" + x] = custom[x];
            }
        } catch (err) {
            setcustomdata = {};
        }
    } else {
        setcustomdata = {};
    }
    setcustomdata = _extends({}, globalCustomData, setcustomdata);
    if (vmaxCustomData) {
        var _custom = JSON.parse(vmaxCustomData);
        vmaxCustomData = {};
        for (var _x11 in _custom) {
            vmaxCustomData["ck_" + _x11] = _custom[_x11];
        }
    }
    if (Object.keys(_globals).length) {
        for (var _x12 in _globals) {
            if (_globals_mapping.hasOwnProperty(_x12)) {
                vmaxData[_globals_mapping[_x12]] = _globals[_x12];
            }
        }
    }
    var isAdBreakInstance = pNode.hasOwnProperty("isAdBreak") && pNode.isAdBreak === true;
    if (isAdBreakInstance) {
        return pNode._adbreak_.getAdBreakRequestParams({
            pId: pId,
            adspotKey: adspotKey,
            pkgName: pkgName,
            testMode: testMode,
            vmaxData: vmaxData,
            setcustomdata: setcustomdata,
            isAdBreakInstance: isAdBreakInstance
        });
    } else return getRqResponse(pId, adspotKey, pkgName, testMode, vmaxData, setcustomdata);
}

function getAdBreakRequest(options) {
    var insOptions = options.insOptions, pId = options.pId, isAdBreakInstance = options.isAdBreakInstance;
    var requested_ads = insOptions.requested_ads, adspotKey = insOptions.adspotKey, pkgName = insOptions.pkgName, expected_time = insOptions.expected_time, max_time = insOptions.max_time, ect = insOptions.ect, testMode = insOptions.testMode, vmaxData = insOptions.vmaxData, setcustomdata = insOptions.setcustomdata;
    var spotId = pId;
    var insTag = document.getElementById(spotId);
    var vmaxCustomData = setcustomdata;
    var deliveryUrl = "https://" + CONST.reqDomain + "/delivery/br.php?<zoneid>|<source>|S-MS-4.3.1";
    deliveryUrl = deliveryUrl.replace("<zoneid>", adspotKey);
    var requestParams = getAdParameters(spotId, adspotKey, pkgName, testMode, vmaxData, vmaxCustomData);
    var adParams = requestParams.adParams;
    vmaxData = requestParams.vmaxData;
    vmaxCustomData = requestParams.vmaxCustomData;
    deliveryUrl = deliveryUrl.replace("<source>", encodeURI(adParams["source"]));
    if (expected_time) adParams["ebt"] = expected_time;
    if (max_time) adParams["mbt"] = max_time;
    adParams["ect"] = ect || 5;
    var seValues = adParams["se"].split(",");
    seValues.forEach(function(elem) {
        if (CONST.adNetworks_capability.hasOwnProperty(elem)) {
            var adParamKey = CONST.adNetworks_capability["" + elem];
            adParamKey.forEach(function(capability) {
                adParams[CONST.SDK_CAPABILITY_ENABLED + "_" + capability] = 1;
            });
        }
    });
    var deliveryParams = _extends({}, adParams, vmaxData, vmaxCustomData);
    if (!insTag.SPC.canMakeAdsRequest()) {
        return;
    } else {
        delete deliveryParams["adspot"];
        deliveryParams["adspots"] = insTag.SPC.getAdspotKeys().join(",");
    }
    VMAX.xmlhttp[spotId] = new XMLHTTP();
    VMAX.xmlhttp[spotId].sendRequest(deliveryUrl, VMAX.successCallback, deliveryParams, spotId, true, isAdBreakInstance);
}

function getAdParameters(spotId, adspotKey, source, testMode, vmaxData, vmaxCustomData, isInterstitial) {
    var helpers = new helperLib();
    var hostname = helpers.getSource();
    var adParams = {};
    var operationList = VMAX.operationMediator.getOperationList();
    var tmp_advt_id = function() {
        try {
            return appAdRq.getData() || "";
        } catch (err) {
            return "";
        }
    }();
    adParams["source"] = source !== undefined ? source : hostname;
    vmaxCustomData = vmaxCustomData !== undefined && Object.keys(vmaxCustomData).length > 0 ? vmaxCustomData : {};
    adParams["adspot"] = adspotKey;
    adParams["vr"] = CONST.APIVersion;
    adParams["tpl"] = 1;
    adParams["ua"] = encodeURI(navigator.userAgent);
    adParams["ve"] = "2";
    if (operationList) {
        adParams["oe"] = operationList || "";
    }
    adParams["sw"] = window.screen.availWidth || window.innerWidth;
    adParams["sh"] = window.screen.availHeight || window.innerHeight;
    adParams["fcap"] = JSON.stringify(VMAXSDK.FCAP.getCampaignList());
    if (tmp_advt_id) {
        adParams["eua"] = tmp_advt_id;
    }
    adParams["se"] = VMAX.getSEParameter() || "74384";
    if (VMAXSDK.hasOwnProperty("AD_USER") && VMAXSDK.AD_USER.hasOwnProperty("gk") && VMAX.isJSON(VMAXSDK.AD_USER.gk)) {
        adParams["gk"] = encodeURIComponent(JSON.stringify(VMAXSDK.AD_USER.gk));
    }
    if (typeof Hls == "function" && Hls.isSupported() || navigator.userAgent.indexOf("iPhone") != -1) adParams["mt"] = "hls";
    if (typeof orientation !== "undefined") {
        if (/portrait/i.test(orientation)) adParams["ao"] = "p"; else if (/landscape/i.test(orientation)) adParams["ao"] = "l";
    } else {
        if (adParams["sw"] > adParams["sh"]) adParams["ao"] = "l"; else adParams["ao"] = "p";
    }
    return {
        adParams: adParams,
        vmaxData: vmaxData,
        vmaxCustomData: vmaxCustomData
    };
}

function getRqResponse(spotId, adspotKey, source, testMode, vmaxData, vmaxCustomData, isInterstitial) {
    console.log(CONST.enabled_sdks);
    var insTag = document.getElementById(spotId);
    var deliveryAPI = void 0, deliveryParams = {};
    var options = getAdParameters(spotId, adspotKey, source, testMode, vmaxData, vmaxCustomData, isInterstitial);
    var adParams = options.adParams;
    deliveryAPI = VMAX.DeliveryAPI.replace("<zoneid>", adspotKey);
    deliveryAPI = deliveryAPI.replace("<source>", encodeURI(adParams["source"]));
    vmaxData = options.vmaxData;
    vmaxCustomData = options.vmaxCustomData;
    deliveryParams = _extends({}, adParams, vmaxData, vmaxCustomData);
    var isSPCInstance = insTag.hasOwnProperty("isSPCInstance") && insTag.isSPCInstance;
    if (isSPCInstance) {
        if (!insTag.SPC.canMakeAdsRequest()) {
            return;
        } else {
            delete deliveryParams["adspot"];
            deliveryParams["adspots"] = insTag.SPC.getAdspotKeys().join(",");
        }
    }
    VMAX.xmlhttp[spotId] = new XMLHTTP();
    VMAX.xmlhttp[spotId].sendRequest(deliveryAPI, VMAX.successCallback, deliveryParams, spotId, isSPCInstance);
}

VMAX.isJSON = function(tmpObject) {
    try {
        return tmpObject instanceof Object && tmpObject instanceof Array === false;
    } catch (err) {
        return false;
    }
    return true;
};

VMAX.package_exceptions = function(pkgName) {
    if (!pkgName) {
        return;
    }
    return /sit.jionet.jio.com|jionetportal.jiolabs.com|jionetportal.jio.in|jionet2.jio.in/i.test(pkgName);
};

VMAX.successCallback = function(response, postData, fallback, spotId, isSPCInstance, isAdBreakInstance) {
    if (isSPCInstance && !isAdBreakInstance) {
        var parsedAdResponse = VmaxAd.getAdContent(response, "", spotId);
        if (VMAX.isNoFill(parsedAdResponse)) {
            VMAX.handleSPCCall({
                placementId: spotId,
                callback: function callback(options) {
                    var _options$placementId2 = options.placementId, placementId = _options$placementId2 === undefined ? "" : _options$placementId2;
                    VMAX.handleNoFill({
                        placementId: placementId,
                        isSPCInstance: isSPCInstance
                    });
                }
            });
        } else {
            VMAX.handleSPCCall({
                placementId: spotId,
                response: parsedAdResponse.ad,
                callback: function callback(options) {
                    var _options$placementId3 = options.placementId, placementId = _options$placementId3 === undefined ? "" : _options$placementId3, _options$adspotKey = options.adspotKey, adspotKey = _options$adspotKey === undefined ? "" : _options$adspotKey, _options$singleAdspot = options.singleAdspotResponse, singleAdspotResponse = _options$singleAdspot === undefined ? {} : _options$singleAdspot;
                    postData["adspot"] = adspotKey;
                    VMAX.rCallback(singleAdspotResponse, postData, fallback, placementId, isSPCInstance);
                }
            });
        }
    } else if (isAdBreakInstance) {
        var _parsedAdResponse = VmaxAd.getAdContent(response, "", spotId);
        var insTag = document.getElementById(spotId);
        if (VMAX.isNoFill(_parsedAdResponse)) {
            VMAX.handleNoFill({
                spotId: spotId
            });
        } else {
            insTag._adbreak_.handleAdBreakResponse({
                placementId: spotId,
                response: _parsedAdResponse.ad,
                callback: function callback(options) {
                    var _options$placementId4 = options.placementId, placementId = _options$placementId4 === undefined ? "" : _options$placementId4, _options$adspotKey2 = options.adspotKey, adspotKey = _options$adspotKey2 === undefined ? "" : _options$adspotKey2, _options$singleAdspot2 = options.singleAdspotResponse, singleAdspotResponse = _options$singleAdspot2 === undefined ? {} : _options$singleAdspot2, remaining_max_Time = options.remaining_max_Time;
                    postData["adspot"] = adspotKey;
                    VMAX.rCallback(singleAdspotResponse, postData, fallback, placementId, isSPCInstance, isAdBreakInstance, remaining_max_Time);
                }
            });
        }
    } else {
        VMAX.rCallback(response, postData, fallback, spotId);
    }
};

VMAX.handleSPCCall = function(options) {
    var _options$placementId5 = options.placementId, placementId = _options$placementId5 === undefined ? false : _options$placementId5, _options$callback = options.callback, callback = _options$callback === undefined ? function() {} : _options$callback, _options$response = options.response, response = _options$response === undefined ? {} : _options$response;
    var insTag = document.getElementById(placementId);
    var getAdspotKeys = insTag.SPC.getAdspotKeys();
    var getPlacementIds = insTag.SPC.getInsIds();
    var map = {};
    for (var i = 0; i < getAdspotKeys.length; i++) {
        var adspotKey = getAdspotKeys[i];
        var singleAdspotResponse = {};
        if (!map.hasOwnProperty(adspotKey)) map[adspotKey] = 0;
        var isNoFill = !response.hasOwnProperty(adspotKey) || typeof response[adspotKey][map[adspotKey]] === "undefined";
        if (!isNoFill) {
            singleAdspotResponse = _extends({}, response[adspotKey][map[adspotKey]]);
            map[adspotKey] = map[adspotKey] + 1;
        }
        callback({
            placementId: getPlacementIds[i],
            adspotKey: adspotKey,
            singleAdspotResponse: singleAdspotResponse
        });
    }
};

VMAX.isNoFill = function(adResponse) {
    return !adResponse || !adResponse.ad && !adResponse.adnetwork || adResponse.status == "001" || adResponse.status != "000";
};

VMAX.handleNoFill = function(options) {
    var _options$placementId6 = options.placementId, placementId = _options$placementId6 === undefined ? false : _options$placementId6, _options$isSPCInstanc = options.isSPCInstance, isSPCInstance = _options$isSPCInstanc === undefined ? false : _options$isSPCInstanc;
    if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
        VMAXSDK.onAdError(placementId, "no response");
    }
    VMAXSDK.Events.dispatch("onAdError", placementId, {
        placementId: placementId,
        errorCode: "001"
    });
    try {
        var pool_index = VMAX.inserted_ins_tags.indexOf(placementId);
        VMAX.inserted_ins_tags.splice(pool_index, 1);
    } catch (err) {
        console.log("Could not remove from pool [" + placementId + "]");
    }
    return;
};

VMAX.rCallback = function(rq, postData, fallback, spotId, isSPCInstance, isAdBreakInstance, remaining_max_Time) {
    if (VMAX.xmlhttp.hasOwnProperty(spotId)) {
        delete VMAX.xmlhttp[spotId];
    }
    var adspotkey = postData["adspot"];
    parseCompanionAd({
        adspotKey: adspotkey,
        placementId: spotId,
        response: isSPCInstance || isAdBreakInstance ? rq : rq["response"]
    });
    var strAd = isSPCInstance || isAdBreakInstance ? rq : VmaxAd.getAdContent(rq, adspotkey, spotId);
    try {
        var ins_tag = document.getElementById(spotId);
        delete ins_tag.dataset.mediaLoopOnce;
        ins_tag.removeAttribute("data-media-loop-once");
    } catch (err) {}
    if (!strAd || !strAd.ad && !strAd.adnetwork || strAd.status == "001" || strAd.status != "000") {
        if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
            VMAXSDK.onAdError(spotId, "no response");
        }
        VMAXSDK.Events.dispatch("onAdError", spotId, {
            placementId: spotId,
            errorCode: "001"
        });
        try {
            var pool_index = VMAX.inserted_ins_tags.indexOf(spotId);
            VMAX.inserted_ins_tags.splice(pool_index, 1);
        } catch (err) {
            console.log("Could not remove from pool [" + spotId + "]");
        }
        return;
    }
    try {
        var adspot_element = document.getElementById(spotId);
        if (adspot_element.hasAttribute("data-fcap")) adspot_element.removeAttribute("data-fcap");
        var fCapTime = strAd.adparams;
        var fcr = fCapTime["mod"]["fcr"];
        var campaignid = fCapTime["campaignid"];
        adspot_element.setAttribute("data-fcap", campaignid);
        VMAXSDK.FCAP.addCampaign(campaignid, spotId, fcr);
    } catch (err) {}
    try {
        var insTag = document.getElementById(spotId);
        insTag.adInfo = strAd.hasOwnProperty("adInfo") && strAd["adInfo"];
    } catch (err) {
        console.warn("Did not set adInfo data!", err);
    }
    var _strAd$adid = strAd.adid, adId = _strAd$adid === undefined ? false : _strAd$adid;
    var width = strAd["image-width"] || false;
    var height = strAd["image-height"] || false;
    var placementId = spotId;
    if (!strAd.adnetwork) {
        VMAXSDK.Events.dispatch("onAdReady", spotId, {
            placementId: placementId,
            adId: adId,
            width: width,
            height: height
        });
    }
    VmaxAd.setupAdBody(spotId, adspotkey, strAd, false, postData, isAdBreakInstance, remaining_max_Time);
};

VMAX.noAdFound = function(spotId, adJson) {
    var errorString = "No Ad Found!";
};

function loadingScale() {
    if (typeof timerStart == "undefined") timerStart = Date.now() || 0;
    t = Date.now() - timerStart;
    return "\nLoaded in:\t" + (t / 1e3 || 0).toFixed(3) + "s.";
}

function checkMode() {
    var debugEle = document.querySelector("var.adsbyvmax");
    var debugVars = debugEle !== null ? debugEle.dataset : null;
    if (debugVars && debugVars.hasOwnProperty("debugSet") && debugVars["debugSet"] === "true" && debugVars.hasOwnProperty("deliveryUri") && debugVars["deliveryUri"] !== "") VMAX.DeliveryAPI = VMAX.DeliveryAPI.replace(CONST.RqDomain, debugVars["deliveryUri"]);
    if (VMAX.debugMode === false) {
        console.debug = function() {};
    }
}

function loadLibFile(fileUrls, nodeType, lCallback) {
    var fUrls = [];
    var elNode = [];
    var readyState = [];
    var entry = void 0;
    var loadCount = void 0;
    nodeType = nodeType || "script";
    if ((typeof fileUrls === "undefined" ? "undefined" : _typeof(fileUrls)) === "object") {
        fUrls = fileUrls.slice(0);
        loadCount = fileUrls.length;
    } else {
        fUrls[0] = fileUrls;
        loadCount = 1;
    }
    fileUrls = null;
    var myLibUrls = fUrls.length > 0 ? fUrls : fUrls[0];
    myLibUrls.forEach(function(item, ix) {
        console.debug(item, ix);
        elNode[ix] = document.createElement(nodeType);
        if (nodeType === "script") {
            elNode[ix].src = item;
        } else if (nodeType === "link") {
            elNode[ix].href = item;
            elNode[ix].rel = "stylesheet";
        } else return;
        entry = document.getElementsByTagName(nodeType)[0];
        if (entry) entry.parentNode.insertBefore(elNode[ix], entry); else document.body.appendChild(elNode[ix]);
        elNode[ix].onload = elNode[ix].onreadystatechange = function() {
            readyState[ix] = elNode[ix].readyState;
            if (!readyState[ix] || /complete|loaded/.test(elNode[ix].readyState)) {
                loadCount -= 1;
                if (typeof lCallback === "function" && loadCount === 0) lCallback(elNode[ix].readyState);
                elNode[ix].onload = null;
                elNode[ix].onreadystatechange = null;
            }
        };
    });
}

function getDOMDataset(domNode, dsKeys, subKeys) {
    var keys = [];
    var dsObject = {};
    if (!dsKeys) return domNode.dataset;
    if (VMAX.isBrowserIE) {
        keys = dsKeys.slice(0);
        return extractObjKV(domNode.dataset, keys, subKeys);
    }
    if (dsKeys.constructor.name !== "Array") {
        if (domNode.dataset.hasOwnProperty(dsKeys)) {
            dsObject[dsKeys] = domNode.dataset[dsKeys];
            return dsObject;
        } else return {};
    } else {
        keys = dsKeys.slice(0);
        return extractObjKV(domNode.dataset, keys, subKeys);
    }
}

function extractObjKV(obj, keys, sKeys) {
    var objKV = {};
    var key = void 0;
    var substitute = sKeys && keys.length === sKeys.length ? true : false;
    for (var k in keys) {
        if (obj.hasOwnProperty(keys[k])) {
            key = substitute ? sKeys[k] : keys[k];
            objKV[key] = obj[keys[k]];
        }
    }
    return objKV;
}

function createDOMElement(tagName, tagProperties) {
    var el = document.createElement(tagName);
    for (var prop in tagProperties) {
        el.setAttribute(prop, tagProperties[prop]);
    }
    return el;
}

function getLocation(href) {
    var match = href.match(/^((app|https?)\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: href,
        protocol: match[2],
        host: match[3],
        hostname: match[4],
        port: match[5] || "",
        pathname: match[6],
        search: match[7],
        hash: match[8]
    };
}

VMAX.instream_store = function() {
    var VMAX_INSTREAM_ADS = "VMAXINSTREAMADS";
    var obj = {
        init: function init() {
            try {
                sessionStorage.setItem(VMAX_INSTREAM_ADS, "{}");
            } catch (err) {}
        },
        get: function get(_id) {
            try {
                var getItems = JSON.parse(sessionStorage.getItem(VMAX_INSTREAM_ADS));
                return getItems[_id] || false;
            } catch (err) {}
        },
        set: function set(pId, adspotKey, adContent) {
            try {
                var getItems = JSON.parse(sessionStorage.getItem(VMAX_INSTREAM_ADS));
                var new_item = {};
                new_item[pId] = {
                    adspotKey: adspotKey,
                    adContent: adContent
                };
                var merged_item = _extends({}, getItems, new_item);
                sessionStorage.setItem(VMAX_INSTREAM_ADS, JSON.stringify(merged_item));
            } catch (err) {}
        }
    };
    return obj;
}();

VMAXSDK.showAd2 = function(options) {
    if (!VMAXSDK.hasOwnProperty("vppMap")) {
        VMAXSDK.vppMap = {};
    }
    var _options$containerId = options.containerId, containerId = _options$containerId === undefined ? false : _options$containerId, _options$placementId7 = options.placementId, placementId = _options$placementId7 === undefined ? placementId : _options$placementId7, _options$muteState = options.muteState, muteState = _options$muteState === undefined ? true : _options$muteState, _options$fullscreenSt = options.fullscreenState, fullscreenState = _options$fullscreenSt === undefined ? false : _options$fullscreenSt, _options$enableFullsc = options.enableFullscreen, enableFullscreen = _options$enableFullsc === undefined ? function() {} : _options$enableFullsc, _options$exitFullscre = options.exitFullscreen, exitFullscreen = _options$exitFullscre === undefined ? function() {} : _options$exitFullscre, _options$adBreakPages = options.adBreakPages, adBreakPages = _options$adBreakPages === undefined ? {} : _options$adBreakPages, _options$showTapToUnm = options.showTapToUnmuteButton, showTapToUnmuteButton = _options$showTapToUnm === undefined ? false : _options$showTapToUnm;
    var container = document.getElementById(containerId);
    var ad = VMAX.instream_store.get(placementId);
    if (!containerId || !container || !ad) {
        return;
    }
    var globalVPP = VMAXSDK.hasOwnProperty("getGlobalVPP") && typeof VMAXSDK.getGlobalVPP === "function" && VMAXSDK.getGlobalVPP();
    var insVPP = false;
    VMAXSDK.vppMap[containerId] = insVPP || globalVPP || false;
    try {
        if (!VMAXSDK.vppMap[containerId]) {
            console.warn("VPP has not been mentioned! hence ad cannot be rendered!");
            return;
        }
        VMAXSDK.vppMap[containerId].registerVAEI({
            VAEI: new VmaxVastAdEventsInterface({
                vastJson: {},
                placementId: placementId,
                containerId: containerId,
                adspotKey: ad["adspotKey"]
            })
        });
        VMAXSDK.vppMap[containerId].init({
            containerId: containerId,
            enableFullscreen: enableFullscreen,
            exitFullscreen: exitFullscreen,
            template: "templateOne",
            muteState: muteState,
            fullscreenState: fullscreenState,
            xml: ad["adContent"]["ad"],
            viewability: ad["adContent"]["viewability"],
            adBreakPages: adBreakPages,
            showTapToUnmuteButton: showTapToUnmuteButton
        });
        VMAXSDK.vppMap[containerId].show();
    } catch (err) {
        console.error("Could not initialize the requested VPP", err);
    }
};

VMAXSDK.showAd = function(placementid, containerid) {
    try {
        if ((typeof placementid === "undefined" ? "undefined" : _typeof(placementid)) == "object") {
            var options = placementid;
            VmaxAd.showInstreamAdForVPP(options);
            return;
        }
        var ad = VMAX.instream_store.get(placementid);
        if (ad) {
            try {
                var elem = document.getElementById(containerid);
                if (containerid && elem) {
                    VmaxAd.createVastVideoAdMarkup(containerid, ad.adspotKey, ad.adContent, true, placementid);
                } else {
                    console.warn("Could not find the element to display instream video!");
                }
            } catch (err) {
                console.error("Could not render the Instream video!\n", err);
            }
        } else {
            return false;
        }
    } catch (err) {
        console.error("Could not show the instream ad! ", err);
    }
};

VMAXSDK.destroyAd = function(options) {
    var _options$containerId2 = options.containerId, containerId = _options$containerId2 === undefined ? false : _options$containerId2, _options$placementId8 = options.placementId, placementId = _options$placementId8 === undefined ? false : _options$placementId8;
    var container = document.getElementById(containerId);
    if (!containerId || !container || !placementId || !VMAXSDK.hasOwnProperty("vppMap") || !VMAXSDK.vppMap.hasOwnProperty(containerId) || !VMAXSDK.vppMap[containerId]) {
        return;
    }
    try {
        if (VMAX.xmlhttp[placementId]) {
            VMAX.xmlhttp[placementId].abort();
        }
        VMAXSDK.vppMap[containerId].destroyVideo();
    } catch (err) {
        console.error("Could not initialize the requested VPP", err);
    }
};

var helperLib = function() {
    function helperLib() {
        _classCallCheck(this, helperLib);
    }
    _createClass(helperLib, [ {
        key: "getSource",
        value: function getSource() {
            if (window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
                var referre = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1];
                var host = getLocation(referre);
                return host.hostname;
            }
            return window.location.hostname;
        }
    } ]);
    return helperLib;
}();

VMAX.instream_xml_store = function() {
    var ads = {};
    var obj = {};
    obj.set = function(id, resp) {
        try {
            ads[id] = resp.ad || null;
        } catch (err) {}
    };
    obj.get = function(tmp_id) {
        try {
            return ads[tmp_id].ad;
        } catch (err) {
            return false;
        }
    };
    obj.getAll = function() {
        try {
            return ads;
        } catch (err) {
            return false;
        }
    };
    return obj;
}();

VMAX.window_hidden, VMAX.visibility_change;

if (typeof document.hidden !== "undefined") {
    VMAX.window_hidden = "hidden";
    VMAX.visibility_change = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    VMAX.window_hidden = "msHidden";
    VMAX.visibility_change = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    VMAX.window_hidden = "webkitHidden";
    VMAX.visibility_change = "webkitvisibilitychange";
} else if (typeof document.oHidden !== "undefined") {
    VMAX.window_hidden = "oHidden";
    VMAX.visibility_change = "ovisibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
    VMAX.window_hidden = "mozHidden";
    VMAX.visibility_change = "mozvisibilitychange";
} else if (typeof document.khtmlHidden !== "undefined") {
    VMAX.window_hidden = "khtmlHidden";
    VMAX.visibility_change = "khtmlvisibilitychange";
}

VMAX.isRegisteredWithVMAXRegistry = function(options) {
    try {
        var adnetwork = options.adnetwork;
        var adnetwork_class_name = VMAX.getAdNetworkClassName({
            adnetwork: adnetwork
        });
        var isPluginRegisteredWithVMAXRegistry = VMAXRegistry.ads.hasOwnProperty(adnetwork_class_name);
        return isPluginRegisteredWithVMAXRegistry;
    } catch (err) {
        return false;
    }
};

VMAX.getAdNetworkClassName = function(options) {
    var adnetwork = options.adnetwork;
    var adnetwork_class = adnetwork["main"]["adnetwork_class"];
    var adnetwork_class_name = adnetwork_class.split("/").pop().split(".").shift();
    return adnetwork_class_name;
};

VMAX.loadAdNetworkAdapter = function(options) {
    try {
        var adnetwork = options.adnetwork, successCallback = options.successCallback, errorCallback = options.errorCallback;
        var adnetwork_class = adnetwork["main"]["adnetwork_class"];
        var isLoaded = document.querySelectorAll(".mediation-script");
        if (isLoaded.length > 0) {
            isLoaded[0].onload = successCallback;
            isLoaded[0].addEventListener("load", successCallback);
            isLoaded[0].addEventListener("error", errorCallback);
            return;
        }
        var myScript = document.createElement("script");
        myScript.src = adnetwork_class;
        myScript.className = "mediation-script";
        document.body.appendChild(myScript);
        myScript.addEventListener("load", successCallback);
        myScript.addEventListener("error", errorCallback);
        return true;
    } catch (err) {
        console.log(err);
    }
};

VMAX.createAdWithVMAXRegistry = function(options) {
    var _options$pId = options.pId, pId = _options$pId === undefined ? "" : _options$pId, _options$adnetwork = options.adnetwork, adnetwork = _options$adnetwork === undefined ? {} : _options$adnetwork, _options$adspotKey3 = options.adspotKey, adspotKey = _options$adspotKey3 === undefined ? "" : _options$adspotKey3, _options$adContent = options.adContent, adContent = _options$adContent === undefined ? {} : _options$adContent, _options$ignoreAdnetw = options.ignoreAdnetwork, ignoreAdnetwork = _options$ignoreAdnetw === undefined ? false : _options$ignoreAdnetw, _options$postData = options.postData, postData = _options$postData === undefined ? {} : _options$postData, remaining_max_Time = options.remaining_max_Time;
    var adnetwork_class_name = VMAX.getAdNetworkClassName({
        adnetwork: adnetwork
    });
    var adTagUrl = adnetwork["main"]["adnetwork_params"]["ad_tag_url"];
    var placementId = pId;
    var insTag = document.getElementById(pId);
    insTag.adnetwork = adnetwork_class_name;
    insTag.eventTrackers = adnetwork["main"];
    var isAdBreakInstance = insTag.hasOwnProperty("isAdBreak") && insTag.isAdBreak;
    if (isAdBreakInstance) {
        insTag._adNetwork_ = {};
        insTag._adNetwork_.adspotKey = adspotKey;
        insTag._adNetwork_.adContent = adContent;
        insTag._adNetwork_.ignoreAdnetwork = ignoreAdnetwork;
        insTag._adNetwork_.postData = postData;
        insTag._adNetwork_.remaining_max_Time = remaining_max_Time;
        VMAXSDK.Events.dispatch("onAdReady", pId, {
            placementId: placementId
        });
        if (typeof VMAXSDK.onAdReady == "function") {
            VMAXSDK.onAdReady(placementId);
        }
        return;
    }
    VMAXRegistry.ads[adnetwork_class_name].prepare({
        placementId: placementId,
        adInfo: {
            adTagUrl: adTagUrl
        },
        VmaxAdLoadListener: function VmaxAdLoadListener() {
            insTag.isAdPrepared = true;
            VMAXSDK.Events.dispatch("onAdReady", pId, {
                placementId: placementId
            });
            if (typeof VMAXSDK.onAdReady == "function") {
                VMAXSDK.onAdReady(placementId);
            }
        },
        VmaxAdErrorListener: function VmaxAdErrorListener() {
            console.log(">>>>> Error" + placementId);
            VmaxAd.fireBeacon("nofill-notification-url", insTag.eventTrackers, [ "<NOFILL>", "2" ]);
            delete insTag.adnetwork;
            if (!adContent.ad) {
                if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
                    VMAXSDK.onAdError(placementId, "no response");
                }
                VMAXSDK.Events.dispatch("onAdError", placementId, {
                    placementId: placementId,
                    errorCode: "001"
                });
                try {
                    var pool_index = VMAX.inserted_ins_tags.indexOf(placementId);
                    VMAX.inserted_ins_tags.splice(pool_index, 1);
                } catch (err) {
                    console.log("Could not remove from pool [" + placementId + "]");
                }
                return;
            }
            VmaxAd.setupAdBody(placementId, adspotKey, adContent, true, postData);
        }
    });
    VMAXRegistry.ads[adnetwork_class_name].registerVAEI({
        placementId: placementId,
        VAEI: new VmaxVastAdEventsInterface({
            placementId: placementId,
            adspotKey: adspotKey
        })
    });
};

VMAX.refresh_timers = {};

VMAX.adnetwork_info = {};

VMAX.interstitialAdsCalled = 0;

VMAX.closeInterstitialTimer = false;

VMAX.showInterstitialTimer = false;

VMAX.interstitialCloseEventCtr = 0;

VMAX.interstitialBodyOverflowProperty = "";

var vmaxRenderAd = function() {
    function vmaxRenderAd(pId, adspotKey, adContent, ignoreAdnetwork) {
        _classCallCheck(this, vmaxRenderAd);
        this.pId = pId;
        this.adspotKey = adspotKey;
        this.adContent = adContent;
        this.rand = Math.random().toString(36).substring(7);
        this.ignoreAdnetwork = ignoreAdnetwork;
    }
    _createClass(vmaxRenderAd, [ {
        key: "check",
        value: function check(flag) {
            switch (flag) {
              case "interstitial":
                return true;
                break;

              default:
                return false;
                break;
            }
            return false;
        }
    }, {
        key: "interstitial",
        value: function interstitial(callFallbackOrAd) {
            if (!this.adContent || this.adContent["status"] == "001") {
                console.log("Discarded a no fill ad!");
                return;
            } else {
                if (!callFallbackOrAd) {
                    VMAX.interstitialAdsCalled++;
                }
            }
            var pId = this.pId;
            var size = this.adContent["adspot-size"];
            var format = this.adContent["adspot-format"];
            var viewability = this.adContent["viewability"] ? this.adContent["viewability"] : false;
            var _width = parseInt(this.adContent["image-width"]);
            var _height = parseInt(this.adContent["image-height"]);
            var adnetwork = this.adContent["adnetwork"] || false;
            var appConfig = this.adContent.hasOwnProperty("app-config") ? this.adContent["app-config"] : false;
            var showAfter = function() {
                try {
                    var elem = document.getElementById(pId);
                    var _showAfter = parseInt(elem.dataset.showAfter) || 0;
                    return _showAfter;
                } catch (err) {
                    return 0;
                }
            }();
            var closeAfter = function() {
                try {
                    var elem = document.getElementById(pId);
                    var close_after_val = elem.dataset.closeAfter ? parseInt(elem.dataset.closeAfter) : false;
                    var _closeAfter = close_after_val !== false ? close_after_val : 10;
                    return _closeAfter;
                } catch (err) {
                    return 10;
                }
            }();
            var close_id = "VMAXINTERSTITIALCLOSE_" + this.rand;
            var _this = this;
            var display = false;
            VMAX.interstitialCloseEventCtr = 0;
            var session = function() {
                var VMAXINTERSTITIALADSCONFIG = "VMAXINTERSTITIALADSCONFIG";
                var default_value = {
                    ads_shown: 0,
                    sleep_timestamp: 0
                };
                var obj = {
                    getSleepTimer: function getSleepTimer() {
                        try {
                            var getItems = sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG) ? JSON.parse(sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG)) : {};
                            return getItems.hasOwnProperty("sleep_timestamp") ? getItems["sleep_timestamp"] : 0;
                        } catch (err) {
                            console.error("Could not set sleep time\n", err);
                            return 0;
                        }
                    },
                    incrementAds: function incrementAds() {
                        try {
                            var getItems = sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG) ? JSON.parse(sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG)) : {};
                            var new_item = {
                                ads_shown: getItems.hasOwnProperty("ads_shown") ? getItems["ads_shown"] + 1 : 1
                            };
                            var merged_item = _extends({}, default_value, new_item);
                            sessionStorage.setItem(VMAXINTERSTITIALADSCONFIG, JSON.stringify(merged_item));
                            return new_item["ads_shown"];
                        } catch (err) {
                            console.error("Could not store the new instream ad data!\n", err);
                            return 0;
                        }
                    },
                    updateSleepTimer: function updateSleepTimer(reset) {
                        try {
                            var getItems = sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG) ? JSON.parse(sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG)) : {};
                            var sleep_time = appConfig && appConfig["ad-request-sleep-time"] ? appConfig["ad-request-sleep-time"] : 10;
                            var timeout = new Date(new Date().getTime() + sleep_time * 6e4).getTime();
                            var new_item = {
                                sleep_timestamp: reset ? 0 : timeout,
                                ads_shown: reset ? 0 : getItems["ads_shown"]
                            };
                            var merged_item = _extends({}, default_value, getItems, new_item);
                            sessionStorage.setItem(VMAXINTERSTITIALADSCONFIG, JSON.stringify(merged_item));
                            return true;
                        } catch (err) {
                            console.error("Could not store the new instream ad data!\n", err);
                            return false;
                        }
                    },
                    checkTimeRemaining: function checkTimeRemaining() {
                        try {
                            var getRemainingTImeout = sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG) ? JSON.parse(sessionStorage.getItem(VMAXINTERSTITIALADSCONFIG))["sleep_timestamp"] : 0;
                            var timeout = new Date().getTime();
                            var diff = getRemainingTImeout - timeout;
                            if (getRemainingTImeout !== 0) {}
                        } catch (err) {
                            return 0;
                        }
                    }
                };
                return obj;
            }();
            if (!callFallbackOrAd && !interstitialBusinessRules()) {
                return false;
            }
            var table_info = _extends({}, this.adContent, {
                renderingTo: this.pId
            });
            if (callFallbackOrAd && callFallbackOrAd == "fallback" || !callFallbackOrAd && !this.ignoreAdnetwork && size === "interstitial" && adnetwork) {
                var flag_main_adnetwork_failed = callFallbackOrAd && callFallbackOrAd == "fallback";
                showAdAfterAndCall("createAdnetwork", flag_main_adnetwork_failed ? 0 : showAfter);
            } else if (!callFallbackOrAd || callFallbackOrAd == "allAdnetworksFailed") {
                var flag_adnetworks_failed = callFallbackOrAd && callFallbackOrAd == "allAdnetworksFailed";
                if (size === "interstitial" && format === "display") {
                    showAdAfterAndCall("createAdDisplay", flag_adnetworks_failed ? 0 : showAfter);
                } else if (size === "interstitial" && format === "video") {
                    showAdAfterAndCall("createAdVideo", flag_adnetworks_failed ? 0 : showAfter);
                } else if (size === "interstitial" && format === "native") {
                    imagesPreloaded(_this.adContent.ad, function() {
                        showAdAfterAndCall("createInterstitialLayout", flag_adnetworks_failed ? 0 : showAfter);
                        if (!callFallbackOrAd) {
                            applyBusinessRules();
                        }
                    });
                }
            }
            if (!callFallbackOrAd && format !== "native") {
                applyBusinessRules();
            }
            function imagesPreloaded(AdObj, cb) {
                try {
                    var i;
                    var _ret = function() {
                        var images = [];
                        for (var key in AdObj) {
                            if (key.match(/^(imageIcon|imageMain|imageMedium)$/) && AdObj[key] != "") {
                                images.push(AdObj[key]);
                            }
                        }
                        var tmp_ctr = 0;
                        var img_length = images.length;
                        if (img_length == 0) {
                            if (typeof cb == "function") {
                                cb();
                            }
                            return {
                                v: void 0
                            };
                        }
                        for (i = 0; i < img_length; i++) {
                            var tmp_img_url = images[i];
                            if (tmp_img_url !== "") {
                                var tmp_img = new Image();
                                tmp_img.src = tmp_img_url;
                                tmp_img.onload = function() {
                                    tmp_ctr++;
                                    if (tmp_ctr >= img_length) {
                                        if (typeof cb == "function") {
                                            cb();
                                        }
                                    }
                                };
                            }
                        }
                    }();
                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                } catch (err) {
                    console.warn("Image Load Fail : " + err);
                }
            }
            function showAdAfterAndCall(functionName, showAfterSecs, adContent) {
                clearInterval(VMAX.showInterstitialTimer);
                if (callFallbackOrAd) {
                    showAdNow(functionName);
                } else {
                    VMAX.showInterstitialTimer = setTimeout(function() {
                        showAdNow(functionName);
                    }, showAfterSecs * 1e3);
                }
            }
            function showAdNow(functionName) {
                try {
                    display = eval(functionName)();
                    if (display) {
                        clearInterval(VMAX.closeInterstitialTimer);
                        clearInterval(VMAX.showInterstitialTimer);
                        if (closeAfter !== 0 && format != "video") {
                            VMAX.closeInterstitialTimer = setTimeout(close_insterstitial, (closeAfter + 1) * 1e3);
                        } else {}
                        VMAXSDK.FCAP.init({
                            pId: _this.pId,
                            type: "i"
                        });
                    }
                } catch (err) {
                    console.error("Could not initialize interstitial ad!\n", err);
                }
            }
            function template(content) {
                try {
                    var rand = _this.rand;
                    var close_button_spacing = 0;
                    var classNamePotraitLandscape = _height > _width ? " p" : " l";
                    var addSpace = _height < window.innerHeight;
                    var flag_is_native = _this.adContent["adspot-format"] == "native";
                    var iphone = /iphone|ipad/gi.test(navigator.userAgent) && !flag_is_native;
                    var iconUrl = VMAX.Domain.Context + "/imgs/icons_assets.png";
                    var css_native_interstitial = ".default-native-interstitial-portrait-main-wrapper{width: 320px;height: 480px;max-width: 320px;max-height: 480px;margin: 0 auto;background-color: #F2E7ED;font-family: Arial, Helvetica, sans-serif;border: 1px solid #68689C;box-sizing: border-box;}\n\t\t\t\t.default-native-interstitial-portrait-main-wrapper *{box-sizing: border-box;font-size: 16px;}\n\t\t\t\t.default-native-interstitial-portrait-main-wrapper > div {margin: 0 auto;width: 320px;max-width: 320px;}\n\t\t\t\t.default-native-interstitial-portrait-top-wrapper > div,.default-native-interstitial-portrait-bottom-wrapper > div {display: table-cell;vertical-align: middle;}\n\t\t\t\t/*TopWrapper css*/\n\t\t\t\t.default-native-interstitial-portrait-logo-wrapper img{width: 100%;max-width: 100%;}\n\t\t\t\t.default-native-interstitial-portrait-logo-wrapper{width:100px;max-width:100px;height:80px;height:100px;max-height: 100px;padding: 0 10px;}\n\t\t\t\t.default-native-interstitial-portrait-title-wrapper{width:220px;height:80px;height:100px;max-height: 100px;padding: 0 10px;color: #595A93;font-family: Arial, Helvetica, sans-serif; word-break: break-all;}\n\t\t\t\t/*MiddleWrapper css*/\n\n\t\t\t\t.default-native-interstitial-portrait-image-wrapper{padding: 10px 10px 0 10px;}\n\t\t\t\t.default-native-interstitial-portrait-image-wrapper img{display: table-cell;vertical-align: middle;width: 100%;max-width: 100%;max-height: 200px;}\n\t\t\t\t.default-native-interstitial-portrait-description-wrapper{height: 60px;max-height: 60px;padding: 10px;text-align: center;font-style: italic;display: table;width: 100%;color: #595A93;}\n\t\t\t\t.default-native-interstitial-portrait-description-wrapper > div{display: table-cell;vertical-align: middle; font-size: 12px; padding: 0 7px; text-align: left; word-break: break-all;}\n\t\t\t\t.default-native-interstitial-portrait-review-wrapper > div{vertical-align: middle;display: table-cell;width:320px;max-width:320px;height:37px;text-align: center;color: #595A93;}\n\t\t\t\t.default-native-interstitial-portrait-review-detail > div{display:inline-block;}\n\t\t\t\t.default-native-interstitial-star-rating{display: table-cell;vertical-align: middle;}\n\t\t\t\t/*.default-native-interstitial-portrait-star-rating{background: url(" + iconUrl + ") no-repeat -27px -431px;width: 50px;height: 10px;content: '';margin: 0 5px;}*/\n\t\t\t\t.default-native-interstitial-star-rating > div:after{background: url(" + iconUrl + ") no-repeat -27px -431px;height: 10px;display: inline-block;content: '';}\n\t\t\t\t/* .default-native-color1 .default-native-star div{background-repeat:no-repeat;} */\n\t\t\t\t.default-native-interstitial-star-rating .s0:after{width:0px;}\n\t\t\t\t.default-native-interstitial-star-rating .s05:after{width:6px;}\n\t\t\t\t.default-native-interstitial-star-rating .s1:after{width:10px;}\n\t\t\t\t.default-native-interstitial-star-rating .s15:after{width:16px;}\n\t\t\t\t.default-native-interstitial-star-rating .s2:after{width:20px;}\n\t\t\t\t.default-native-interstitial-star-rating .s25:after{width:26px;}\n\t\t\t\t.default-native-interstitial-star-rating .s3:after{width:30px;}\n\t\t\t\t.default-native-interstitial-star-rating .s35:after{width:36px;}\n\t\t\t\t.default-native-interstitial-star-rating .s4:after{width:40px;}\n\t\t\t\t.default-native-interstitial-star-rating .s45:after{width:46px;}\n\t\t\t\t.default-native-interstitial-star-rating .s5:after{width:50px;} \n\t\t\t\t.default-native-interstitial-portrait-downloads{font-style: italic;color:#FAB480;}\n\t\t\t\t/*BottomWrapper*/\n\t\t\t\t.default-native-interstitial-portrait-download-wrapper{height:70px;max-height: 70px;text-align: center;width: 320px;max-width: 320px;}\n\t\t\t\t.default-native-interstitial-portrait-download-wrapper > div{display: table-cell;vertical-align: middle;display: inline-block;}\n\t\t\t\t.default-native-interstitial-portrait-download-btn{background-color: #535590;border: transparent;cursor: pointer;color: #FFFFFF;width: 300px;height: 50px;border-radius: 25px;}\n\t\t\t\t/*class for hiding specific element*/\n\t\t\t\t.default-native-interstitial-hide{visibility: hidden;}\n\t\t\t\t/*Spritesheet for icons*/\n\t\t\t\t.default-native-interstitial-portrait-icon-count::before{background: url(" + iconUrl + ") no-repeat -27px -487px;width: 12px;height: 13px;display: inline-block;content: '';margin: 0 5px;}\n\t\t\t\t.default-native-interstitial-portrait-icon-count::after{content: 'Downloads';display: inline-block;margin: 0 5px;font-style: italic;color:#FAB480;}\n\t\t\t\t.default-native-interstitial-portrait-download-btn::after{background: url(" + iconUrl + ") no-repeat -25px -379px;width: 34px;height: 35px;display: inline-block;content:'';margin: 0 5px;vertical-align: middle;}\n\n\t\t\t\t/*_____________Protrait End___________*/\n\n\t\t\t\t/*_____________Landscape___________*/\n\n\t\t\t\t.default-native-interstitial-landscape-main-wrapper{width:480px;height:320px;max-width:480px;max-height:320px;margin:0 auto;background-color:#F2E7ED;font-family:Arial, Helvetica, sans-serif;border:1px solid #68689C;box-sizing:border-box;}\n\t\t\t\t .default-native-interstitial-landscape-left-right-panel{width:480px;height:320px;max-width:480px;max-height:320px;}\n\t\t\t\t .default-native-interstitial-landscape-left-right-panel *{box-sizing:border-box;font-size:16px;color:#595A93;}\n\t\t\t\t .default-native-interstitial-landscape-left-panel,.right-panel{float:left;height:320px;max-height:320px;}\n\t\t\t\t .default-native-interstitial-landscape-left-panel{width:260px;max-width:260px; background:rgba(0,0,0,0.1);}\n\t\t\t\t .default-native-interstitial-landscape-image-wrapper{height:150px;max-height:150px;}\n\t\t\t\t .default-native-interstitial-landscape-image-wrapper img{width:260px;max-width:100%;max-height:150px}\n\t\t\t\t .default-native-interstitial-landscape-description-wrapper{height:170px;max-height:170px;display:table;padding:0 20px;}\n\t\t\t\t .default-native-interstitial-landscape-description{display:table-cell;vertical-align:middle;text-align:center;width: 260px;max-width: 260px; text-align: left; padding: 15px; font-size: 14px; word-break: break-all;}\n\t\t\t\t .default-native-interstitial-landscape-right-panel{width:220px;max-width:220px;float: right;}\n\t\t\t\t .default-native-interstitial-landscape-top-wrapper{text-align:center;}\n\t\t\t\t .default-native-interstitial-landscape-logo-wrapper{height:120px;max-height:120px;display:table-cell;vertical-align:bottom;padding:15px 0;width:220px;max-width:220px;text-align:center;}\n\t\t\t\t .default-native-interstitial-landscape-logo-wrapper img{width: 80px; height: auto;}\n\t\t\t\t .default-native-interstitial-landscape-review-wrapper > div{width:220px;max-width:220px;height:40px;max-height:40px;}\n\t\t\t\t .default-native-interstitial-landscape-icon-count::before{background:url(" + iconUrl + ") no-repeat -27px -487px;width:12px;height:13px;display:inline-block;content:'';margin:0 5px;}\n\t\t\t\t .default-native-interstitial-landscape-icon-count::after{display:inline-block;content:'Downloads';margin:0 5px;font-style:italic;color:#FAB480;}\n\t\t\t\t .default-native-interstitial-star-rating{display:table-cell;vertical-align:middle;}\n\t\t\t\t .default-native-interstitial-landscape-star-image{background:url(" + iconUrl + ") no-repeat -27px -431px;width:50px;height:10px;content:'';margin:0 5px;display:inline-block;}\n\t\t\t\t .default-native-interstitial-landscape-icon-count{height:40px;max-height:40px;display:table-cell;vertical-align:middle;width:220px;}\n\t\t\t\t .default-native-interstitial-landscape-download-wrapper{width:220px;max-width:220px;/*height:90px;*/max-height:90px;text-align:center;display:table-cell;vertical-align:middle;}\n\t\t\t\t .default-native-interstitial-landscape-download-wrapper > div{display:table-cell;vertical-align:middle;}\n\t\t\t\t .default-native-interstitial-landscape-download-btn{background-color:#535590;border:transparent;cursor:pointer;color:#FFFFFF;width:200px;height:50px;border-radius:25px; font-size: 12px;}\n\t\t\t\t .default-native-interstitial-landscape-download-btn:after{background:url(" + iconUrl + ") no-repeat -0px -540px;width:24px;height:24px;display:inline-block;content:'';margin:0 5px;vertical-align:middle;}\n\t\t\t\t .default-native-interstitial-landscape-title-content{display:table-cell;vertical-align:middle;width:220px;max-width:220px;height:30px;max-height:30px; padding: 0 10px; box-sizing: border-box; word-break: break-all;}\n\n\t\t\t\t/*_____________Landscape End___________*/\n\n\t\t\t\t/*_______________Native-interstitial Css End_______________*/";
                    return '<style type="text/css">\n\t\t\t\t#body{ pointer-events:none; }\n\t\t\t\t#VMAXINTERSTITIALOVERLAY_' + rand + "{position: fixed; z-index: 999; top: 0; bottom: 0; left: 0; right: 0; background: #000; background: rgba(0,0,0,0.8); overflow: auto; -webkit-overflow-scrolling:touch; }\n\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + "{ position: relative; width: " + (flag_is_native ? "auto" : _width + "px") + "; height: " + (flag_is_native ? "auto" : _height + "px") + "; margin: 0 auto; background: #fff; " + (flag_is_native ? "display: inline-block" : "") + "; }\n\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".space{margin:15px auto;}\n\t\t\t\t#VMAXINTERSTITIALCLOSE_" + rand + "{ position: absolute; top: " + close_button_spacing + "px; right: " + close_button_spacing + "px; border: 0; z-index: 99999; border-radius: 50%; width: 40px; height: 40px; background: none; }\n\t\t\t\t#VMAXINTERSTITIALCLOSE_" + rand + " img{ width:100%; height:auto; }\n\t\t\t\t#VMAXINTERSTITIALPOPUPCONTENTTABLE_" + rand + "{border-collapse:collapse; width: 100%; height: 100%; padding: 0; margin: 0;}\n\t\t\t\t#VMAXINTERSTITIALPOPUPCONTENTTABLE_" + rand + " td{ vertical-align:middle; text-align:center; }\n\t\t\t\t#VMAXINTERSTITIALPOPUPCONTENT_" + rand + "{position: relative; width: " + (flag_is_native ? "auto" : _width + "px") + "; height: " + (flag_is_native ? "auto" : _height + "px") + "; z-index: 1; padding: 0; margin: 0;}\n\t\t\t\t#VMAXINTERSTITIALPOPUPCONTENT_" + rand + " .default-native-interstitial-portrait-main-wrapper, #VMAXINTERSTITIALPOPUPCONTENT_" + rand + " .default-native-interstitial-landscape-main-wrapper{display: none;}\n\t\t\t\t@media all and (orientation: landscape) {\n\t\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".type-1.p{margin: " + (flag_is_native ? "0" : "15px") + " auto;}\n\t\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".type-2.p{ height: " + _width + "px; width: " + _height + "px; }\n\t\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".type-2.p #VMAXINTERSTITIALPOPUPCONTENT_" + rand + "{ height: " + _width + "px; width: " + _height + "px; }\n\t\t\t\t\t#VMAXINTERSTITIALPOPUPCONTENT_" + rand + " .default-native-interstitial-landscape-main-wrapper{display: block !important; }\n\t\t\t\t}\n\t\t\t\t@media all and (orientation: portrait) {\n\t\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".type-1.l{margin:auto " + (flag_is_native ? "0" : "15px") + "; }\n\t\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".type-2.l{ height: " + _width + "px; width: " + _height + "px; }\n\t\t\t\t\t#VMAXINTERSTITIALPOPUP_" + rand + ".type-2.l #VMAXINTERSTITIALPOPUPCONTENT_" + rand + "{ height: " + _width + "px; width: " + _height + "px; }\n\t\t\t\t\t#VMAXINTERSTITIALPOPUPCONTENT_" + rand + " .default-native-interstitial-portrait-main-wrapper{display: block !important; }\n\t\t\t\t}\n\t\t\t\t/* iPhone & iPad */\n\t\t\t    #VMAXINTERSTITIALCLOSE_" + rand + ".big{ width:60px; height: 60px; top: " + (close_button_spacing + 4) + "px; right: " + (close_button_spacing - 7) + "px; }\n\t\t\t    " + (flag_is_native ? css_native_interstitial : "") + '\n\t\t\t\t</style>\n\t\t\t\t<div id="VMAXINTERSTITIALOVERLAY_' + rand + '">\n\t\t\t\t\t<table id="VMAXINTERSTITIALPOPUPCONTENTTABLE_' + rand + '">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div id="VMAXINTERSTITIALPOPUP_' + rand + '" class="' + (format != "video" ? "type-1" : "type-2") + classNamePotraitLandscape + (addSpace ? " space" : "") + '">\n\t\t\t\t\t\t\t\t\t<button id="VMAXINTERSTITIALCLOSE_' + rand + '"' + (iphone ? ' class="big"' : "") + '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAApVBMVEUAAADT2dzT2dzU2dzT2dzT2dzT2dzT2dzT2tzT2dzT2dzT2tzT2dzT2dzT2tzT2dzT2dzT2dzT2dzT2dzT2tzT2dzT2dzT2dzT2tzT2dzT2dzT2dzU2tzT2N3T2dzT2dzT2dzT2dzN3+LT09bT2dzU297W3N/b4eXY3+JWVVXa4ONVVFSanZ6Rk5WVl5mOkJGXmpueoKKgo6VbWlrc4+aHiouBg4O11FDdAAAAJHRSTlMA5vouwCrTumWcvnx4JfXbzrWDsEA0FxPp4cFHIBmaT048AgJvceV+AAABtUlEQVRIx42W61arMBBGJwl3SmvtTY96vA3UglDU6vs/mmC16cAEsn81q/sjM8CwAn1UEHpiOhVeGCgYRU0cgSeEMxnO3EfYw38w6isfWfwV71+ikUtGX0c4gL/u+u4MB5klHV/gCIIk7mY4yuxO+88OWhA98ffH4l6tJFohFRz5h5Y4R/8Gz0hTRPP6Bloc8n+WEj/D83XU+i7xP/d5drbe1l8k4QJATC5YFeVLpv3XYk8CsW5ZK2We6kUbp20rgZ3ErpHoT41QECByCeprAgiRSexfsqOfYocQLvAP0mp+ONVPuACBTKIuqrcm1PdRgEQu8fbxUW0ZH6d84GAOGEra1e9N51xJXNN5XZTbQ9ME23TY96tdlWdNH9we/yFg/bQtjKsqAFf0/Lr1+YRwAZzeI9g2PknQgZiQ17ss2nr08yg+ycxNACCRZIBKOkCvZIBkAg3+4IiSDXxoWdp/BJbwQ4SW+HBE2X7IXPglRitiOOHb+HPQbLxx39vAGbfXY/71LRCSkT28BDqs50P+YgN9YmnSZQwsyrDJXIGJ5aK3i1w8whBu93DiAsVw/LmS8oo//nwDLzz4TpdbGY8AAAAASUVORK5CYII=" alt="" /></button>\n\t\t\t\t\t\t\t\t\t<div id="VMAXINTERSTITIALPOPUPCONTENT_' + rand + '"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>';
                } catch (err) {
                    return "";
                }
            }
            function createInterstitialLayout() {
                try {
                    var _pId = _this.pId;
                    document.getElementById(_pId).adContent = _this.adContent["ad"];
                    var html = "";
                    var nativeAdObj = JSON.parse(_this.adContent["ad"]);
                    nativeAdObj.downloads = VMAX.abbrNum(nativeAdObj.downloads);
                    var rating_class = new vmaxAd().setNativeRatingClass(nativeAdObj.rating);
                    var desc = "";
                    var btn = void 0, download = void 0, star = void 0, descCss = void 0;
                    if (nativeAdObj.desc2) {
                        desc = nativeAdObj.desc2;
                    } else if (nativeAdObj.desc) {
                        desc = nativeAdObj.desc;
                    }
                    btn = nativeAdObj.ctaText != "" ? "" : "default-native-interstitial-hide";
                    download = nativeAdObj.downloads != "" ? "" : "default-native-interstitial-hide";
                    star = rating_class == "s0" ? "default-native-interstitial-hide" : "";
                    descCss = desc != "" ? "" : "default-native-interstitial-hide";
                    var download_text = nativeAdObj.downloads ? '<div class="default-native-interstitial-portrait-icon-count ' + download + '">' + nativeAdObj.downloads + "</div>" : "";
                    var rating_text = nativeAdObj.rating ? '<div class="default-native-interstitial-star-rating ' + star + '">\n                <div class="' + rating_class + '"></div>\t\t\t\t       \n            </div>' : "";
                    html = '<div data-pid="' + _pId + '" onclick="vservclick(this)" class="default-native-interstitial-portrait-main-wrapper portrait" >\n\t\t\t\t            <div class="default-native-interstitial-portrait-top-wrapper">\n\t\t\t\t                <div class="default-native-interstitial-portrait-logo-wrapper"><img src="' + nativeAdObj.imageIcon + '" alt="icon"></div>\n\t\t\t\t                <div class="default-native-interstitial-portrait-title-wrapper">' + nativeAdObj.title + '</div>\n\t\t\t\t            </div>\n\t\t\t\t            <div class="default-native-interstitial-portrait-middle-wrapper">\n\t\t\t\t                <div class="default-native-interstitial-portrait-image-wrapper"><img src="' + nativeAdObj.imageMain + '" alt="mainImage"></div>\n\t\t\t\t                <div class="default-native-interstitial-portrait-description-wrapper"><div class="default-native-interstitial-portrait-description ' + descCss + '">' + desc + '</div></div>\n\t\t\t\t                <div class="default-native-interstitial-portrait-review-wrapper">\n\t\t\t\t\t\t\t\t\t<div class="default-native-interstitial-portrait-review-detail">\n\t\t\t\t\t\t\t\t\t\t' + download_text + "\n\t\t\t\t                    \t" + rating_text + '\n\t\t\t\t                    </div>\n\t\t\t\t                </div>\n\t\t\t\t            </div>\n\t\t\t\t            <div class="default-native-interstitial-portrait-bottom-wrapper">\n\t\t\t\t                <div class="default-native-interstitial-portrait-download-wrapper ' + btn + '"><button class="default-native-interstitial-portrait-download-btn">' + nativeAdObj.ctaText + "</button></div>\n\t\t\t\t            </div>\n\t\t\t\t        </div>";
                    btn = nativeAdObj.ctaText != "" ? "" : "default-native-interstitial-hide";
                    download = nativeAdObj.downloads != "" ? "" : "default-native-interstitial-hide";
                    star = rating_class == "s0" ? "default-native-interstitial-hide" : "";
                    descCss = desc != "" ? "" : "default-native-interstitial-hide";
                    var download_text2 = nativeAdObj.downloads ? '<div class="default-native-interstitial-landscape-review-detail">\n                <div class="default-native-interstitial-landscape-icon-count ' + download + '">' + nativeAdObj.downloads + "</div>\n            </div>" : "";
                    var rating_text2 = nativeAdObj.rating ? '<div class="default-native-interstitial-star-rating ' + star + '">\n                <div class="' + rating_class + '">\n                </div>\n            </div>' : "";
                    html += '<div data-pid="' + _pId + '" onclick="vservclick(this)" class="default-native-interstitial-landscape-main-wrapper landscape">\n\t\t\t\t\t            <div class="default-native-interstitial-landscape-left-right-panel">\n\t\t\t\t\t                    <div class="default-native-interstitial-landscape-left-panel">\n\t\t\t\t\t                            <div class="default-native-interstitial-landscape-image-wrapper"><img src="' + nativeAdObj.imageMain + '" alt="mainImage"></div>\n\t\t\t\t\t                            <div class="default-native-interstitial-landscape-description-wrapper"><div class="default-native-interstitial-landscape-description ' + descCss + '">' + desc + '</div></div>\n\t\t\t\t\t                    </div>\n\t\t\t                    <div class="default-native-interstitial-landscape-right-panel">\n\t\t\t                        <div class="default-native-interstitial-landscape-top-wrapper">\n\t\t\t                            <div class="default-native-interstitial-landscape-logo-wrapper"><img src="' + nativeAdObj.imageIcon + '" alt="icon"></div>\n\t\t\t                            <div class="default-native-interstitial-landscape-title-wrapper"><div class="default-native-interstitial-landscape-title-content">' + nativeAdObj.title + '</div></div>\n\t\t\t                            <div class="default-native-interstitial-landscape-review-wrapper">\n                                            ' + download_text2 + "\n                                            " + rating_text2 + '\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="default-native-interstitial-landscape-bottom-wrapper">\n\t\t\t                            <div class="default-native-interstitial-landscape-download-wrapper"><button class="default-native-interstitial-landscape-download-btn ' + btn + '">' + nativeAdObj.ctaText + "</button></div>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\t\t\t            </div>";
                    create(html);
                    document.getElementById(_pId).setAttribute("data-isnative", "no");
                    return true;
                } catch (err) {
                    console.log("Error : " + err);
                    return false;
                }
            }
            function create(bodyContent, bodyContentScript) {
                bodyContentScript = bodyContentScript || "";
                var frameId = "VMAXINTERSTITIALIFRAME_" + _this.rand;
                var adContainer = document.getElementById(_this.pId);
                var iframe_options = {
                    id: frameId,
                    marginwidth: 0,
                    marginheight: 0,
                    hspace: 0,
                    vspace: 0,
                    frameborder: 0,
                    style: "width: 100%; height: 100%;"
                };
                if (_this.adContent["adspot-format"] == "native") {
                    var fileref = document.createElement("link");
                    var linkpath = VMAX.Domain.Style + "/default.css";
                    fileref.setAttribute("rel", "stylesheet");
                    fileref.setAttribute("href", linkpath);
                    document.getElementsByTagName("head")[0].appendChild(fileref);
                    var scriptTag2 = document.createElement("script");
                    var scriptTagText2 = document.createTextNode(bodyContentScript);
                    scriptTag2.appendChild(scriptTagText2);
                    adContainer.innerHTML = "";
                    adContainer.innerHTML = template();
                    document.getElementById("VMAXINTERSTITIALPOPUPCONTENT_" + _this.rand).innerHTML = bodyContent;
                    document.getElementById("VMAXINTERSTITIALPOPUPCONTENT_" + _this.rand).appendChild(scriptTag2);
                    native_interstitial_resize_event();
                    window.addEventListener("resize", native_interstitial_resize_event);
                    if (typeof vservNotifyImpression == "function") vservNotifyImpression(JSON.parse(_this.adContent.ad));
                } else {
                    var frameNode = createDOMElement("iframe", iframe_options);
                    adContainer.innerHTML = "";
                    adContainer.innerHTML = template();
                    document.getElementById("VMAXINTERSTITIALPOPUPCONTENT_" + _this.rand).appendChild(frameNode);
                    var doc = document.getElementById(frameId).contentWindow.document;
                    doc.scrolling = "no";
                    doc.open();
                    doc.write("<body>" + (bodyContent + bodyContentScript) + "</body>");
                    doc.close();
                    try {
                        VMAX.interstitialBodyOverflowProperty = document.body.style.overflow;
                        document.body.style.overflow = "hidden";
                    } catch (err) {}
                }
                var close_button = document.getElementById("VMAXINTERSTITIALCLOSE_" + _this.rand);
                if (close_button) {
                    close_button.removeEventListener("click", close_insterstitial, true);
                    window.removeEventListener("resize", native_interstitial_resize_event);
                }
                close_button.addEventListener("click", close_insterstitial, true);
            }
            function native_interstitial_resize_event() {
                try {
                    var element_2_zoom = document.getElementById("VMAXINTERSTITIALPOPUP_" + _this.rand);
                    var padding = 15;
                    element_2_zoom.style.zoom = function() {
                        var flag_is_portrait = window.innerHeight > window.innerWidth;
                        var padding = 20;
                        var zoomFactor = 1;
                        if (flag_is_portrait) {
                            zoomFactor = (window.innerWidth - padding * 2) / (320 + padding * 2);
                        } else {
                            zoomFactor = (window.innerHeight - padding * 2) / (320 + padding * 2);
                        }
                        return zoomFactor < 1 ? 1 : zoomFactor;
                    }();
                } catch (err) {}
            }
            function close_insterstitial() {
                clearInterval(VMAX.closeInterstitialTimer);
                var close_button = document.getElementById("VMAXINTERSTITIALCLOSE_" + _this.rand);
                var adContainer = document.getElementById(_this.pId);
                document.body.style.overflow = VMAX.interstitialBodyOverflowProperty;
                if (close_button) {
                    close_button.removeEventListener("click", close_insterstitial, true);
                }
                adContainer.innerHTML = "";
                try {
                    if (VMAX.interstitialCloseEventCtr === 0 && VMAXSDK && VMAXSDK.onAdClose && typeof VMAXSDK.onAdClose == "function") {
                        VMAXSDK.onAdClose(_this.pId);
                        VMAX.interstitialCloseEventCtr++;
                    }
                } catch (err) {}
                return false;
            }
            function createAdnetwork() {
                try {
                    var adnetworkContent = VmaxAd.createAdnetworkAdMarkup(_this.pId, _this.adspotKey, _this.adContent, callFallbackOrAd ? false : true, true);
                    create(adnetworkContent);
                    return true;
                } catch (err) {
                    return false;
                }
            }
            function createAdDisplay() {
                try {
                    create(_this.adContent["ad"]);
                    return true;
                } catch (err) {
                    return false;
                }
            }
            function createAdVideo() {
                try {
                    var moat_code = "";
                    var xml = _this.adContent["ad"];
                    var advid = "";
                    var _pId2 = _this.pId;
                    var rand = _this.rand;
                    try {
                        try {
                            advid = adContainer.dataset.userIfa || "";
                        } catch (err) {
                            advid = "";
                        }
                        var flag_moat = viewability ? viewability["2"] : false;
                        if (flag_moat) {
                            moat_code = '/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/ function initMoatTracking(c,d,e,k,l){var g=document.createElement("script"),a=[];d={adData:{ids:d,duration:e,url:l},dispatchEvent:function(b){this.sendEvent?(a&&(a.push(b),b=a,a=!1),this.sendEvent(b)):a.push(b)}};e="_moatApi"+Math.floor(1E8*Math.random());var f,h;try{f=c.ownerDocument,h=f.defaultView||f.parentWindow}catch(b){f=document,h=window}h[e]=d;g.type="text/javascript";c&&c.insertBefore(g,c.childNodes[0]||null);g.src="https://z.moatads.com/"+k.replace(/\\[ccb\\]/gi, new Date().getTime())+"/moatvideo.js#"+e;return d};';
                            var ids = {
                                level1: viewability["2"].macros.moatClientLevel1 || "",
                                level2: viewability["2"].macros.moatClientLevel2 || "",
                                level3: viewability["2"].macros.moatClientLevel3 || "",
                                level4: viewability["2"].macros.moatClientLevel4 || "",
                                slicer1: viewability["2"].macros.moatClientSlicer1 || "",
                                slicer2: viewability["2"].macros.moatClientSlicer2 || ""
                            };
                            var tmp_duration = viewability["2"].macros.duration;
                            var tmp_partner_code = viewability["2"].id;
                            if (moat_code) {
                                moat_code = moat_code + 'try{ var MoatApiReference = initMoatTracking(document.getElementById("interstitial_msite_vide0_ad"), ' + JSON.stringify(ids) + ', "' + tmp_duration + '", "' + tmp_partner_code + '", ""); }catch(err){ console.log("Caught: "+err); }';
                            }
                        } else {
                            moat_code = "";
                        }
                    } catch (err) {
                        moat_code = "";
                    }
                    var tmp_video_content = '<div id="interstitial_msite_vide0_ad" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"></div>';
                    var tmp_video_content_script_text = '<script src="' + VMAX.Vast_player_js + '"><\/script><script>';
                    tmp_video_content_script_text += moat_code + "\n\t\t\t\t        var xml_str = '" + xml.replace(/\n/gim, "").replace(/\[ccb\]/gi, new Date().getTime()).replace(/\[advid\]/gi, advid) + '\';\n                        __tmp_completed_view_event = false;\n                        videoIsStuckTimer = false;\n\t\t\t\t        var player = new VASTPlayer(document.getElementById("interstitial_msite_vide0_ad"));\n\t\t\t\t        // console.log(player, document.getElementById("interstitial_msite_vide0_ad"));\n\t\t\t\t        player.load(xml_str).then(function startAd() {\n\t\t\t\t        \t// console.log("Ad started");\n\t\t\t\t\t\t\twindow.parent.VMAX_ADD_ONS.ins_in_viewport("adstarted", "' + _pId2 + '");\n\t\t\t\t            tmp_vid_container = document.getElementsByTagName("video")[0];\n';
                    tmp_video_content_script_text += '\n\t\t\t\t            if (document.getElementsByTagName("video")[0]) {\n                                document.getElementsByTagName("video")[0].volume = 0;\n                                document.getElementsByTagName("video")[0].muted = true;\n                                document.getElementsByTagName("video")[0].addEventListener("stalled", function(){\n                                    console.log("Video is stalled! (ID: ' + _pId2 + ')");\n                                    videoIsStuck();\n                                }); \n                                document.getElementsByTagName("video")[0].addEventListener("error", function(){\n                                    console.log("Video error occurred! (ID: ' + _pId2 + ')");\n                                    videoIsStuck();\n                                }); \n                                \n\t\t\t\t            }\n                            setTimeout(function() {\n                                document.getElementsByTagName("video")[0].setAttribute("muted", "true");\n\t\t\t\t                // player.muteAd();\n\t\t\t\t                player.startAd();\n                            }, 10);\n\t\t\t\t\t\t\t\n\t\t\t\t            player.startAd();\n\t\t\t\t\t\t\t\n                            var vid_flag = true;\n                            \n\t\t\t\t            return;\n\t\t\t\t        }).catch(function(reason) {\n\t\t\t\t        \tconsole.log(reason);\n\t\t\t\t            console.warn("' + _pId2 + ' >>> Vast XML error! ("+rmpVast.getAdErrorMessage()+")");\n\t\t\t\t\t\t\t//Close Interstitial ad\n\t\t\t\t\t\t\twindow.parent.document.getElementById("VMAXINTERSTITIALCLOSE_' + rand + '").click();\n\t\t\t\t        });\n\t\t\t\t\t\t\n\t\t\t\t        player.once("AdImpression", function(){\n\t\t\t\t        \t// console.log("Video Impression(' + _pId2 + ') URL fired");\n\t\t\t\t\t\t\twindow.parent.VMAXSDK.FCAP.init({"pId" : "' + _pId2 + '", "type": "i"});\n\t\t\t\t        });\n\t\t\t\t\t\t\n\t\t\t\t        player.once("AdClickThru", function(){\n\t\t\t\t        \twindow.parent.VMAXSDK.FCAP.init({"pId" : "' + _pId2 + '", "type": "c"});\n\t\t\t\t        });\n\t\t\t\t\t\t\n\t\t\t\t        player.once("AdStopped", function() {\n\t\t\t            \t// console.log("Ad stopped!");\n\t\t\t                if (!__tmp_completed_view_event) {\n\t\t\t                    document.addEventListener("CompletedView", function(e) {\n\t\t\t                    \t// console.log("Media End callback calling from CV event (Interstitial)");\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t    \t\t//Call the Callback if defined\n\t\t\t\t\t\t\t\t\twindow.parent.VmaxAd.onAdMediaEnd("' + _pId2 + '");\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t//Close Interstitial ad\n\t\t\t\t\t\t\t\t\twindow.parent.document.getElementById("VMAXINTERSTITIALCLOSE_' + rand + '").click();\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tif(typeof MoatApiReference != \'undefined\' && MoatApiReference instanceof Object){\n\t\t\t\t\t\t\t    \t\tMoatApiReference.dispatchEvent({ "type" : "AdVideoComplete" , "adVolume" : player.adVolume.toString() });\n\t\t\t\t\t\t\t    \t}\n\t\t\t\t\t\t\t    \t// console.log("Video completed 1!");\n\t\t\t                    }, false);\n\t\t\t                } else {\n\t\t\t                    // console.log("Media End callback calling from Video completed (Interstitial)");\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t    \t\t//Call the Callback if defined\n\t\t\t\t\t\t\t\twindow.parent.VmaxAd.onAdMediaEnd("' + _pId2 + '");\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t//Close Interstitial ad\n\t\t\t\t\t\t\t\twindow.parent.document.getElementById("VMAXINTERSTITIALCLOSE_' + rand + '").click();\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t    \t\tif(typeof MoatApiReference != \'undefined\' && MoatApiReference instanceof Object){\n\t\t\t\t\t\t    \t\tMoatApiReference.dispatchEvent({ "type" : "AdVideoComplete" , "adVolume" : player.adVolume.toString() });\n\t\t\t\t\t\t    \t}\n\t\t\t\t\t\t    \t// console.log("Video completed 2!");\n\t\t\t                }\n                        });\n                        \n                        player.on("AdPaused", function(){ \n                            videoIsStuck();\n                        }); \n                        player.on("AdPlaying", function(){ \n                            console.log("Video playing!");\n                        }); \n                        setInterval(function(){ \n                            if( document.getElementsByTagName("video")[0] ){\n                                if(document.getElementsByTagName("video")[0].paused === true && videoIsStuckTimer === false ){ \n                                    console.log("Video stuck!!!"); \n                                    setTimeout(function(){ \n                                        document.getElementsByTagName("video")[0].play(); \n                                        videoIsStuck(); \n                                    }, 100); \n                                }else if(document.getElementsByTagName("video")[0].paused === false && videoIsStuckTimer ){ \n                                    clearTimeout(videoIsStuckTimer); \n                                    videoIsStuckTimer = false; \n                                } \n                            }\n                        }, 500);\n                        function videoIsStuck(){                            console.log("Video is stuck, due to network! (ID: ' + _pId2 + ')");\n                            if( videoIsStuckTimer === false ){\n                                console.log("Video got stuck");\n                                videoIsStuckTimer = setTimeout(function(){\n                                    console.log("Video is stuck. Closing interstitial ad... (ID: ' + _pId2 + ')");\n                                    if (window.parent.VMAXSDK && window.parent.VMAXSDK.onAdError && typeof window.parent.VMAXSDK.onAdError == "function") {\n                                        window.parent.VMAXSDK.onAdError("' + _pId2 + '", "video stuck");\n                                    }\n                                    //Close Interstitial ad\n                                    window.parent.document.getElementById("VMAXINTERSTITIALCLOSE_' + rand + '").click();\n                                }, 5000);\n                            }                         }';
                    tmp_video_content_script_text += "<\/script>";
                    create(tmp_video_content, tmp_video_content_script_text);
                    return true;
                } catch (err) {
                    return false;
                }
            }
            function interstitialBusinessRules() {
                if (VMAX.interstitialAdsCalled > 1) {
                    return false;
                }
                session.checkTimeRemaining();
                var current_timestamp = new Date().getTime();
                var interstital_timeout = session.getSleepTimer();
                if (interstital_timeout !== 0 && current_timestamp < interstital_timeout) {
                    return false;
                }
                session.updateSleepTimer(true);
                return true;
            }
            function applyBusinessRules() {
                var ads_shown = session.incrementAds();
                if (appConfig && ads_shown >= appConfig["show-ad-counter"]) {
                    session.updateSleepTimer();
                }
            }
        }
    } ]);
    return vmaxRenderAd;
}();

var vmaxAd = function() {
    function vmaxAd() {
        _classCallCheck(this, vmaxAd);
        this.renderAd = false;
    }
    _createClass(vmaxAd, [ {
        key: "getContainerIdFromVppMap",
        value: function getContainerIdFromVppMap(placementId) {
            if (!VMAXSDK.hasOwnProperty("vppMap")) return;
            var vppMapArray = Object.entries(VMAXSDK.vppMap);
            for (var i = 0; i < vppMapArray.length; i++) {
                if (placementId == vppMapArray[i][1].VAEI.placementId) return vppMapArray[i][1].VAEI.containerId;
            }
        }
    }, {
        key: "pauseVideoForVPP",
        value: function pauseVideoForVPP(placementId) {
            var containerId = this.getContainerIdFromVppMap(placementId);
            if (containerId === "" || typeof containerId == "undefined") return;
            VMAXSDK.vppMap["" + containerId];
            VMAXSDK.vppMap["" + containerId].isDeveloperPaused = true;
            VMAXSDK.vppMap["" + containerId].pauseAd(true);
        }
    }, {
        key: "resumeVideoForVPP",
        value: function resumeVideoForVPP(placementId) {
            var containerId = this.getContainerIdFromVppMap(placementId);
            if (containerId === "" || typeof containerId == "undefined") return;
            VMAXSDK.vppMap["" + containerId].resumeAd(true);
        }
    }, {
        key: "pauseVideoForVastPlayer",
        value: function pauseVideoForVastPlayer(placementId) {
            try {
                if (document.querySelector("#" + placementId + " iframe").contentWindow.player) document.querySelector("#" + placementId + " iframe").contentWindow.isDeveloperPaused = true;
                document.querySelector("#" + placementId + " iframe").contentWindow.player.pauseAd();
            } catch (err) {}
        }
    }, {
        key: "resumeVideoForVastPlayer",
        value: function resumeVideoForVastPlayer(placementId) {
            try {
                document.querySelector("#" + placementId + " iframe").contentWindow.isDeveloperPaused = false;
                document.querySelector("#" + placementId + " iframe").contentWindow.player.resumeAd();
            } catch (err) {}
        }
    }, {
        key: "pauseAdRefresh",
        value: function pauseAdRefresh(placementId) {
            if (!this.getRefreshRate(placementId) || this.isMarkedForRefresh(placementId)) return;
            var configRefreshTimer = document.getElementById(placementId).dataset.configRefreshTimer;
            var remainingRefreshTime = document.getElementById(placementId).dataset.remainingRefreshTime;
            var remainingTime = (remainingRefreshTime || configRefreshTimer) - (Date.now() - document.getElementById(placementId).dataset.refreshRateStart) / 1e3;
            document.getElementById(placementId).dataset.remainingRefreshTime = remainingTime;
            VmaxAd.markForRefreshLater(placementId);
            VmaxAd.remove_refresh_ad(placementId);
        }
    }, {
        key: "resumeAdRefresh",
        value: function resumeAdRefresh(placementId) {
            if (!this.getRefreshRate(placementId) || !this.isMarkedForRefresh(placementId)) return;
            var ins_tag = document.getElementById(placementId);
            if (ins_tag.dataset.refreshRateStart) delete ins_tag.dataset.refreshRateStart;
            this.refresh_ad(placementId);
            VmaxAd.removeRefreshMark(placementId);
        }
    }, {
        key: "getAdContent",
        value: function getAdContent(rq, adspotKey, spotId) {
            if (rq.responseText === "") return this.adError(spotId, "1006");
            try {
                var respObj = JSON.parse(rq.responseText);
                if (respObj.status === "000" || respObj.status === "001") {
                    return respObj;
                } else {
                    return "";
                }
            } catch (e) {
                return "";
            }
        }
    }, {
        key: "closeAd",
        value: function closeAd(_id, is_not_instream) {
            try {
                var elem = document.getElementById(_id);
                elem.innerHTML = "";
                if (is_not_instream && is_not_instream === true) {
                    elem.style.height = "auto";
                    elem.style.width = "auto";
                }
                return true;
            } catch (err) {
                return false;
            }
        }
    }, {
        key: "adError",
        value: function adError(spotId, errorCode) {
            var errorObj = {
                PlacementId: spotId,
                ErrorCode: Error,
                ErrorDescription: vmaxConst.errorObj[errorCode]
            };
            if (typeof VMAXonAdError === "function") {
                return VMAXonAdError(spotId, errorObj);
            }
            return;
        }
    }, {
        key: "onAdMediaEnd",
        value: function onAdMediaEnd(_id, placementid, isAdPlayerFullscreen) {
            try {
                VMAX.companionManager.onPrimaryVideoEnd({
                    placementId: placementid
                });
                if (VMAXSDK && VMAXSDK.onAdMediaEnd && typeof VMAXSDK.onAdMediaEnd == "function") {
                    VMAXSDK.onAdMediaEnd(_id, placementid ? placementid : _id, isAdPlayerFullscreen);
                }
            } catch (err) {}
        }
    }, {
        key: "onAdClose",
        value: function onAdClose(containerId, placementId, isAdPlayerFullscreen) {
            var isAdSkipped = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var muted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            try {
                VMAX.companionManager.onPrimaryAdEnd({
                    placementId: placementId,
                    isAdSkipped: isAdSkipped
                });
                if (VMAXSDK && VMAXSDK.onAdClose && typeof VMAXSDK.onAdClose == "function") {
                    VMAXSDK.onAdClose(containerId, placementId, isAdPlayerFullscreen, isAdSkipped, muted);
                }
            } catch (err) {}
        }
    }, {
        key: "cancel_refresh_ad",
        value: function cancel_refresh_ad(pId) {
            try {
                if (VMAX.refresh_timers["timer_" + pId]) {
                    clearInterval(VMAX.refresh_timers["timer_" + pId]);
                    delete VMAX.refresh_timers["timer_" + pId];
                }
                VmaxAd.markForRefreshLater(pId);
            } catch (err) {}
        }
    }, {
        key: "remove_refresh_ad",
        value: function remove_refresh_ad(pId) {
            try {
                if (VMAX.refresh_timers["timer_" + pId]) {
                    clearInterval(VMAX.refresh_timers["timer_" + pId]);
                    delete VMAX.refresh_timers["timer_" + pId];
                }
            } catch (err) {}
        }
    }, {
        key: "isVideoShown",
        value: function isVideoShown(placementId, flag) {
            try {
                if (typeof placementId !== "string" || typeof flag !== "boolean") return;
                var insTag = document.getElementById(placementId);
                if (!insTag) return;
                insTag.isVideoShown = flag;
            } catch (err) {}
        }
    }, {
        key: "refresh_ad",
        value: function refresh_ad(pId, emptyDom) {
            try {
                var configRefreshTimer = document.getElementById(pId).dataset.configRefreshTimer;
                var remainingRefreshTime = document.getElementById(pId).dataset.remainingRefreshTime;
                var _timeout = remainingRefreshTime ? remainingRefreshTime : configRefreshTimer;
                document.getElementById(pId).dataset.refreshRateStart = Date.now();
                _timeout = parseInt(_timeout);
                console.log("Time out is " + _timeout);
                if (_timeout && !isNaN(_timeout)) {
                    _timeout = !remainingRefreshTime && _timeout < 30 ? 30 : _timeout;
                    if (VMAX.refresh_timers["timer_" + pId]) {
                        clearInterval(VMAX.refresh_timers["timer_" + pId]);
                    }
                    VMAX.refresh_timers["timer_" + pId] = setInterval(function() {
                        var _node = document.getElementById(pId);
                        if (_node) {
                            var canRefresh = !_node.dataset.hasOwnProperty("mediaLoopOnce") || _node.dataset.hasOwnProperty("mediaLoopOnce") && _node.dataset.mediaLoopOnce == "true";
                            if (_node.hasOwnProperty("isVideoShown") && _node.isVideoShown === false) {
                                VmaxAd.cancel_refresh_ad(_node.id);
                                VmaxAd.refresh_ad(pId, emptyDom);
                                console.log("$$$$$$$ Will refresh on next iteration!");
                            }
                            if (!canRefresh && _node.hasOwnProperty("isVideoShown") && _node.isVideoShown === false) return;
                            VMAXSDK.Events.dispatch("onAdRefresh", pId, {
                                placementId: pId
                            });
                            VMAXSDK.Events.dispatch("onAdClose", pId, {
                                placementId: pId
                            });
                            getAdParams(_node);
                            clearInterval(VMAX.refresh_timers["timer_" + pId]);
                            console.log("$$$$$$$ Refreshing!");
                        }
                    }, parseInt(_timeout) * 1e3);
                }
                if (emptyDom) {
                    var _node = document.getElementById(pId);
                    if (_node) {
                        _node.innerHTML = "";
                    }
                }
            } catch (err) {
                throw new Error("Could not setup refresh rate for " + pId);
            }
        }
    }, {
        key: "getRefreshRate",
        value: function getRefreshRate(placementId) {
            try {
                var _timeout = document.getElementById(placementId).dataset.configRefreshTimer;
                return isNaN(_timeout) ? _timeout : parseInt(_timeout);
            } catch (err) {
                return false;
            }
        }
    }, {
        key: "markForRefreshLater",
        value: function markForRefreshLater(placementId) {
            try {
                var node = document.getElementById(placementId);
                if (node) {
                    node.classList.add("refresh-later");
                }
            } catch (err) {}
        }
    }, {
        key: "isMarkedForRefresh",
        value: function isMarkedForRefresh(placementId) {
            try {
                var node = document.getElementById(placementId);
                if (node) {
                    return /refresh-later/i.test(node.className);
                }
                return false;
            } catch (err) {
                return false;
            }
        }
    }, {
        key: "removeRefreshMark",
        value: function removeRefreshMark(placementId) {
            try {
                var node = document.getElementById(placementId);
                if (node) {
                    node.classList.remove("refresh-later");
                }
            } catch (err) {}
        }
    }, {
        key: "refreshAdNow",
        value: function refreshAdNow(pId) {
            var _node = document.getElementById(pId);
            if (_node) {
                VMAXSDK.Events.dispatch("onAdRefresh", pId, {
                    placementId: pId
                });
                VMAXSDK.Events.dispatch("onAdClose", pId, {
                    placementId: pId
                });
                getAdParams(_node);
            }
        }
    }, {
        key: "setupAdBody",
        value: function setupAdBody(pId, adspotKey, adContent, ignoreAdnetwork, postData, remaining_max_Time) {
            var pNode = document.getElementById(pId);
            var adspotFormat = pNode.hasOwnProperty("isAdBreak") && pNode.isAdBreak ? adContent["format"] : adContent["adspot-format"];
            var adspotSize = adContent["adspot-size"];
            var adnetwork = adContent["adnetwork"];
            var adspotType = adContent["type"];
            var containerSize = {
                height: adContent["image-height"],
                width: adContent["image-width"]
            };
            var nativeAdObject = function() {
                try {
                    return adspotFormat === "native" && JSON.parse(adContent["ad"]);
                } catch (err) {
                    return {};
                }
            }();
            var layoutName = nativeAdObject && VMAXSDK.nativeAdLayoutManager.getLayoutName(nativeAdObject);
            console.log("Layout derieved: ", layoutName, pId);
            setTimeout(function() {
                try {
                    var pool_index = VMAX.inserted_ins_tags.indexOf(pId);
                    VMAX.inserted_ins_tags.splice(pool_index, 1);
                } catch (err) {
                    console.log("Could not remove from pool [" + pId + "]");
                }
            }, 200);
            this.renderAd = new vmaxRenderAd(pId, adspotKey, adContent, ignoreAdnetwork);
            if (this.renderAd.check(adspotSize)) {
                this.renderAd.interstitial(false);
                return;
            }
            try {
                var refresh_timer = adContent["adspot-config"] && adContent["adspot-config"]["refresh-rate"] ? adContent["adspot-config"]["refresh-rate"] : false;
                document.getElementById(pId).dataset.configRefreshTimer = refresh_timer;
                if (refresh_timer !== false && VMAXSDK && VMAXSDK.onAdRefresh && typeof VMAXSDK.onAdRefresh == "function") {
                    VMAXSDK.onAdRefresh(pId);
                }
            } catch (err) {}
            if (!ignoreAdnetwork && VMAX.isRegisteredWithVMAXRegistry({
                adnetwork: adnetwork
            }) === true) {
                VMAX.createAdWithVMAXRegistry({
                    pId: pId,
                    adnetwork: adnetwork,
                    adspotKey: adspotKey,
                    adContent: adContent,
                    ignoreAdnetwork: ignoreAdnetwork,
                    postData: postData,
                    remaining_max_Time: remaining_max_Time
                });
                return;
            }
            if (!ignoreAdnetwork && adnetwork) {
                VMAX.loadAdNetworkAdapter({
                    adnetwork: adnetwork,
                    successCallback: function successCallback() {
                        var adnetworkClassName = VMAX.getAdNetworkClassName({
                            adnetwork: adnetwork
                        });
                        if (!VMAXRegistry.ads.hasOwnProperty(adnetworkClassName)) {
                            var adnetworkInstance = new VmaxGoogleIMA();
                            if (adnetworkInstance.allowsPassingDurationInRequest) {
                                pNode.allowsPassingDurationInRequest = true;
                            } else {}
                        }
                        VMAX.createAdWithVMAXRegistry({
                            pId: pId,
                            adnetwork: adnetwork,
                            adspotKey: adspotKey,
                            adContent: adContent,
                            ignoreAdnetwork: ignoreAdnetwork,
                            postData: postData,
                            remaining_max_Time: remaining_max_Time
                        });
                    },
                    errorCallback: function errorCallback() {
                        VmaxAd.setupAdBody(pId, adspotKey, adContent, true, postData);
                    }
                });
                return;
            }
            if (!(adspotFormat === "video" && /^billboard|unknown$/.test(adspotSize))) {
                try {
                    this.refresh_ad(pId);
                } catch (err) {
                    console.log("Could not setup refresh timer for (" + pId + ")");
                }
            }
            if (adspotFormat === "display" && /^(banner|billboard)$/.test(adspotSize) && /8|9/.test(adspotType)) {
                var isResponsive = false;
                return this.createDisplayAdMarkup(pId, adspotKey, adContent, isResponsive);
            }
            if (adspotFormat === "video" && /^billboard$/.test(adspotSize)) {
                return this.createVastVideoAdMarkup(pId, adspotKey, adContent);
            }
            if (adspotFormat === "video" && /^unknown$/.test(adspotSize)) {
                containerSize = {
                    height: "250",
                    width: "300"
                };
                return this.instreamAdMarkup(pId, adspotKey, adContent);
            }
            if (VMAXSDK.nativeAdLayoutManager.isNativeCustomLayout({
                adspotFormat: adspotFormat,
                layoutName: layoutName,
                adspotSize: adspotSize
            })) {
                return this.createNativeAdMarkup(pId, adspotKey, adContent, false, postData);
            }
            if (adspotFormat === "native" && /^(banner|billboard)$/.test(adspotSize) && /2|3|8|9/.test(adspotType)) {
                return this.createNativeAdMarkup(pId, adspotKey, adContent, false, postData);
            }
            if (adspotFormat === "native" && /^(unknown)$/.test(adspotSize)) {
                return this.createNativeAdMarkup(pId, adspotKey, adContent, true, postData);
            }
            console.info("Not Qualified Markup.....");
        }
    }, {
        key: "instreamAdMarkup",
        value: function instreamAdMarkup(pId, adspotKey, adContent) {
            if (!adContent.ad || adContent.status == "001") {
                if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
                    VMAXSDK.onAdError(pId, "no fill");
                }
            } else if (!adContent["allow-extraction"] || adContent["allow-extraction"] != 1) {
                if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
                    VMAXSDK.onAdError(pId, "not authorized");
                }
            } else {
                VMAX.instream_store.set(pId, adspotKey, adContent);
                if (VMAXSDK && VMAXSDK.onAdReady && typeof VMAXSDK.onAdReady == "function") {
                    VMAXSDK.onAdReady(pId, adContent.ad);
                }
            }
        }
    }, {
        key: "fireBeacon",
        value: function fireBeacon() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            try {
                if (params.adnetwork_params[type]) {
                    var trackers = params.adnetwork_params[type];
                    for (var i = 0; i < trackers.length; i++) {
                        if (replace && replace instanceof Array) {
                            fireEvent(trackers[i].replace(replace[0], replace[1]));
                        } else {
                            fireEvent(trackers[i]);
                        }
                    }
                }
            } catch (err) {}
            function fireEvent(beacon) {
                var img = new Image();
                img.onload = function() {};
                img.onrerror = function() {
                    console.log("Error firing beacon: " + beacon);
                };
                img.src = beacon;
            }
        }
    }, {
        key: "adnetwork_templates",
        value: function adnetwork_templates(adnetwork, _id, containerSize, isFallback, isInterstitial) {
            try {
                var adnetwork_params = adnetwork.adnetwork_params;
                var tmp_str = "template_" + adnetwork.adnetwork_class;
                return eval(tmp_str)();
            } catch (err) {
                console.error("Adnetwork(" + _id + "): Could not render main adnetwork!", err);
                return "";
            }
            function template_googleAdsense() {
                var rand_name = Math.random().toString(36).substring(7);
                return "<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'><\/script>\n\t\t\t\t\t<script>  var googletag = googletag || {};  googletag.cmd = googletag.cmd || [];<\/script>\n\t\t\t\t\t<script>\n\t\t\t\t\tgoogletag.cmd.push(function() {\n\t\t\t\t\t\tgoogletag.defineSlot('/" + adnetwork_params.ad_client + "/" + adnetwork_params.ad_slot + "', [" + containerSize.width + ", " + containerSize.height + "], 'div_" + rand_name + "').addService(googletag.pubads());\n\t\t\t\t\t\tgoogletag.pubads().enableSingleRequest();\n\t\t\t\t\t\tgoogletag.pubads().set('page_url','www.jio.com');\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n\t\t\t\t\t\t\tif(event.isEmpty){\n\t\t\t\t\t\t\t    // fallback\n\t\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\t\twindow.parent.VmaxAd.callFallback(\"" + _id + '", ' + isFallback + ", " + isInterstitial + ');\n\t\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fallback properly (' + _id + ')");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\t    \twindow.parent.VmaxAd.fireFillNotificationBeacon("' + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t\t\t}catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fill notification beacon properly (' + _id + ")\");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotOnload', function(event) {\n\t\t\t\t\t\t\t// Impression\n\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\twindow.parent.VmaxAd.fireImpressionBeacon(\"" + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t    \t// console.error("Could not call adnetwork impression (' + _id + ")\");\n\t\t\t\t\t\t    }\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.enableServices();\n\t\t\t\t\t});<\/script>\n\t\t\t\t\t<div id='div_" + rand_name + "' style='height:250px; width:230px;'><script>googletag.cmd.push(function() { googletag.display('div_" + rand_name + "'); });<\/script></div>";
            }
            function template_googleAdsenseVideo() {
                var rand_name = Math.random().toString(36).substring(7);
                return "<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'><\/script>\n\t\t\t\t\t<script>  var googletag = googletag || {};  googletag.cmd = googletag.cmd || [];<\/script>\n\t\t\t\t\t<script>\n\t\t\t\t\tgoogletag.cmd.push(function() {\n\t\t\t\t\t\tgoogletag.defineSlot('/" + adnetwork_params.ad_client + "/" + adnetwork_params.ad_slot + "', [" + containerSize.width + ", " + containerSize.height + "], 'div_" + rand_name + "').addService(googletag.pubads());\n\t\t\t\t\t\tgoogletag.pubads().enableSingleRequest();\n\t\t\t\t\t\tgoogletag.pubads().set('page_url','www.jio.com');\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n\t\t\t\t\t\t\tif(event.isEmpty){\n\t\t\t\t\t\t\t    // fallback\n\t\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\t\twindow.parent.VmaxAd.callFallback(\"" + _id + '", ' + isFallback + ", " + isInterstitial + ');\n\t\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fallback properly (' + _id + ')");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\t    \twindow.parent.VmaxAd.fireFillNotificationBeacon("' + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t\t\t}catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fill notification beacon properly (' + _id + ")\");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotOnload', function(event) {\n\t\t\t\t\t\t\t// Impression\n\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\twindow.parent.VmaxAd.fireImpressionBeacon(\"" + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t    \t// console.error("Could not call adnetwork impression (' + _id + ")\");\n\t\t\t\t\t\t    }\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.enableServices();\n\t\t\t\t\t});<\/script>\n\t\t\t\t\t<div id='div_" + rand_name + "' style='height:250px; width:230px;'><script>googletag.cmd.push(function() { googletag.display('div_" + rand_name + "'); });<\/script></div>";
            }
            function template_adx() {
                var rand_name = Math.random().toString(36).substring(7);
                return "<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'><\/script>\n\t\t\t\t\t<script> var googletag = googletag || {};  googletag.cmd = googletag.cmd || [];<\/script>\n\t\t\t\t\t<script>\n\t\t\t\t\tgoogletag.cmd.push(function() {\n\t\t\t\t\t\tgoogletag.defineSlot('" + adnetwork_params.adunitid + "', [" + containerSize.width + ", " + containerSize.height + "], 'div_" + rand_name + "').addService(googletag.pubads());\n\t\t\t\t\t\tgoogletag.pubads().enableSingleRequest();\n\t\t\t\t\t\tgoogletag.pubads().set('page_url','www.jio.com');\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n\t\t\t\t\t\t\tif(event.isEmpty){\n\t\t\t\t\t\t\t    // fallback\n\t\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\t\twindow.parent.VmaxAd.callFallback(\"" + _id + '", ' + isFallback + ", " + isInterstitial + ');\n\t\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fallback properly (' + _id + ')");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\t    \twindow.parent.VmaxAd.fireFillNotificationBeacon("' + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t\t\t}catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fill notification beacon properly (' + _id + ")\");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotOnload', function(event) {\n\t\t\t\t\t\t\t// Impression\n\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\twindow.parent.VmaxAd.fireImpressionBeacon(\"" + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t    \t// console.error("Could not call adnetwork impression (' + _id + ")\");\n\t\t\t\t\t\t    }\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.enableServices();\n\t\t\t\t\t});<\/script>\n\t\t\t\t\t<div id='div_" + rand_name + "' style='height:250px; width:230px;'><script>googletag.cmd.push(function() { googletag.display('div_" + rand_name + "'); });<\/script></div>";
            }
            function template_adxVideo() {
                var rand_name = Math.random().toString(36).substring(7);
                return "<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'><\/script>\n\t\t\t\t\t<script> var googletag = googletag || {};  googletag.cmd = googletag.cmd || [];<\/script>\n\t\t\t\t\t<script>\n\t\t\t\t\tgoogletag.cmd.push(function() {\n\t\t\t\t\t\tgoogletag.defineSlot('" + adnetwork_params.adunitid + "', [" + containerSize.width + ", " + containerSize.height + "], 'div_" + rand_name + "').addService(googletag.pubads());\n\t\t\t\t\t\tgoogletag.pubads().enableSingleRequest();\n\t\t\t\t\t\tgoogletag.pubads().set('page_url','www.jio.com');\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotRenderEnded', function(event) {\n\t\t\t\t\t\t\tif(event.isEmpty){\n\t\t\t\t\t\t\t    // fallback\n\t\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\t\twindow.parent.VmaxAd.callFallback(\"" + _id + '", ' + isFallback + ", " + isInterstitial + ');\n\t\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fallback properly (' + _id + ')");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\t    \twindow.parent.VmaxAd.fireFillNotificationBeacon("' + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t\t\t}catch(err){\n\t\t\t\t\t\t\t    \t// console.error("Could not call adnetwork fill notification beacon properly (' + _id + ")\");\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.pubads().addEventListener('slotOnload', function(event) {\n\t\t\t\t\t\t\t// Impression\n\t\t\t\t\t\t    try{\n\t\t\t\t\t\t\t\twindow.parent.VmaxAd.fireImpressionBeacon(\"" + _id + '", ' + isFallback + ');\n\t\t\t\t\t\t    }catch(err){\n\t\t\t\t\t\t    \t// console.error("Could not call adnetwork impression (' + _id + ")\");\n\t\t\t\t\t\t    }\n\t\t\t\t\t\t});\n\t\t\t\t\t\tgoogletag.enableServices();\n\t\t\t\t\t});<\/script>\n\t\t\t\t\t<div id='div_" + rand_name + "' style='height:250px; width:230px;'><script>googletag.cmd.push(function() { googletag.display('div_" + rand_name + "'); });<\/script></div>";
            }
            function template_freakout_native() {
                var rand_name = Math.random().toString(36).substring(7);
                return '<div id="div_' + rand_name + '" data-rfp-adspot-id="' + adnetwork_params.adspotid + '" style="display:none"></div>\n            <script src="http://js.rfp.fout.jp/rfp-infeed.js"><\/script>\n            <script type="text/javascript">RFP.InFeed.Default.run({"immediately":true})<\/script>';
            }
        }
    }, {
        key: "fireFillNotificationBeacon",
        value: function fireFillNotificationBeacon(_id, isFallback) {
            try {
                var params = VMAX.adnetwork_info[_id];
                if (!isFallback) {
                    this.fireBeacon("fill-notification-url", params.adContent.adnetwork.main, [ "<FILL>", "1" ]);
                } else {
                    this.fireBeacon("fill-notification-url", params.adContent.adnetwork.fallback, [ "<FILL>", "1" ]);
                }
            } catch (err) {}
        }
    }, {
        key: "fireImpressionBeacon",
        value: function fireImpressionBeacon(_id, isFallback) {
            try {
                var params = VMAX.adnetwork_info[_id];
                if (!isFallback) {
                    this.fireBeacon("impression", params.adContent.adnetwork.main);
                } else {
                    this.fireBeacon("impression", params.adContent.adnetwork.fallback);
                }
            } catch (err) {}
        }
    }, {
        key: "callFallback",
        value: function callFallback(_id, isFallback, isInterstitial) {
            try {
                var params = VMAX.adnetwork_info[_id];
                var flag_fallback_exists = params.adContent && params.adContent.adnetwork && params.adContent.adnetwork.fallback;
                if (!isFallback && flag_fallback_exists) {
                    this.fireBeacon("nofill-notification-url", params.adContent.adnetwork.main, [ "<NOFILL>", "2" ]);
                    if (isInterstitial) {
                        this.renderAd.interstitial("fallback");
                    } else {
                        this.createAdnetworkAdMarkup(params.pId, params.adspotKey, params.adContent, false, isInterstitial);
                    }
                } else {
                    this.fireBeacon("nofill-notification-url", params.adContent.adnetwork.fallback, [ "<NOFILL>", "2" ]);
                    if (isInterstitial) {
                        this.renderAd.interstitial("allAdnetworksFailed");
                    } else {
                        this.setupAdBody(params.pId, params.adspotKey, params.adContent, true);
                    }
                }
            } catch (err) {}
        }
    }, {
        key: "createAdnetworkAdMarkup",
        value: function createAdnetworkAdMarkup(pId, adspotKey, adContent, flagMain, isInterstitial) {
            var frameId = "mF_" + adspotKey + "_" + pId;
            var adContainer = document.getElementById(pId);
            var adnetwork = adContent["adnetwork"];
            var bodyContent = "";
            var options = {
                id: frameId,
                marginwidth: 0,
                marginheight: 0,
                hspace: 0,
                vspace: 0,
                frameborder: 0,
                scrolling: "no",
                width: "100%",
                height: "100%",
                style: "display: block; margin: 0 auto;"
            };
            var adnetwork_params = flagMain ? adnetwork.main : adnetwork.fallback || false;
            var containerSize = {
                width: adContent["image-width"],
                height: adContent["image-height"]
            };
            if (adnetwork) {
                if (flagMain) {
                    var params_fallback = {
                        pId: pId,
                        adspotKey: adspotKey,
                        adContent: adContent,
                        flagMain: false
                    };
                    VMAX.adnetwork_info[pId] = params_fallback;
                }
                bodyContent = this.adnetwork_templates(adnetwork_params, pId, containerSize, !flagMain, isInterstitial);
            }
            if (isInterstitial) {
                return bodyContent;
            }
            var frameNode = createDOMElement("iframe", options);
            adContainer.innerHTML = "";
            adContainer.appendChild(frameNode);
            if (containerSize && containerSize.width && containerSize.height) {
                adContainer.style.width = containerSize.width + "px";
                adContainer.style.height = containerSize.height + "px";
            }
            adContainer.style.display = "block";
            adContainer.style.margin = "0 auto";
            var doc = document.getElementById(frameId).contentWindow.document;
            doc.open();
            doc.write("<body>" + bodyContent + "</body>");
            doc.close();
            doc.addEventListener("click", function() {
                window.parent.VmaxAd.fireBeacon("click-url", adnetwork_params);
            });
        }
    }, {
        key: "createVastVideoAdMarkup",
        value: function createVastVideoAdMarkup(pId, adspotKey, adContent, flag_instream, placementid) {
            var rand = Math.random().toString(36).substring(7);
            var frameId = "mF_" + adspotKey + "_" + pId;
            var adContainer = document.getElementById(pId);
            try {
                var advid = adContainer.dataset.userIfa || "";
            } catch (err) {
                var advid = "";
            }
            var xml = adContent.ad;
            var options = void 0, frameNode = void 0;
            var viewability = adContent.viewability || false;
            if (flag_instream) {
                adContainer.is_instream = true;
            } else {
                placementid = false;
            }
            if (adContent.hasOwnProperty("image-width") && adContent.hasOwnProperty("image-height")) {
                var dw = adContent["image-width"];
                var dh = adContent["image-height"];
            }
            if (xml) {
                options = {
                    id: frameId,
                    marginwidth: 0,
                    marginheight: 0,
                    hspace: 0,
                    vspace: 0,
                    frameborder: 0,
                    scrolling: "no",
                    width: "100%",
                    height: "100%",
                    style: "display: block; margin: 0 auto;"
                };
                if (!flag_instream) {
                    options["style"] = "display: block; margin: 0 auto; min-height: 300px; max-height: 250px;";
                }
                var moat_code = "";
                var _tmp_ua = "";
                try {
                    _tmp_ua = window.navigator.userAgent;
                } catch (err) {}
                var _tmp_ua_check = true;
                try {
                    var flag_moat = viewability["2"] || false;
                    if (flag_moat && _tmp_ua_check) {
                        moat_code = '/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/ function initMoatTracking(c,d,e,k,l){var g=document.createElement("script"),a=[];d={adData:{ids:d,duration:e,url:l},dispatchEvent:function(b){this.sendEvent?(a&&(a.push(b),b=a,a=!1),this.sendEvent(b)):a.push(b)}};e="_moatApi"+Math.floor(1E8*Math.random());var f,h;try{f=c.ownerDocument,h=f.defaultView||f.parentWindow}catch(b){f=document,h=window}h[e]=d;g.type="text/javascript";c&&c.insertBefore(g,c.childNodes[0]||null);g.src="https://z.moatads.com/"+k.replace(/\\[ccb\\]/gi, new Date().getTime())+"/moatvideo.js#"+e;return d};\n\n                    ';
                        var ids = {
                            level1: viewability["2"].macs.moatClientLevel1 || "",
                            level2: viewability["2"].macroros.moatClientLevel2 || "",
                            level3: viewability["2"].macros.moatClientLevel3 || "",
                            level4: viewability["2"].macros.moatClientLevel4 || "",
                            slicer1: viewability["2"].macros.moatClientSlicer1 || "",
                            slicer2: viewability["2"].macros.moatClientSlicer2 || ""
                        };
                        var tmp_duration = viewability["2"].macros.duration;
                        var tmp_partner_code = viewability["2"].id;
                        if (moat_code) {
                            moat_code = moat_code + 'try{ var MoatApiReference = initMoatTracking(document.getElementById("msite_vide0_ad_' + rand + '"), ' + JSON.stringify(ids) + ', "' + tmp_duration + '", "' + tmp_partner_code + '", ""); }catch(err){ console.log("Caught: "+err); }';
                        }
                    } else {
                        moat_code = "";
                    }
                } catch (err) {
                    var _moat_code = "";
                }
                var bodyContent = '<div id="msite_vide0_ad_' + rand + '" ' + (!flag_instream ? 'style="width:300px;height:250px;"' : 'style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;"') + "></div>";
                var bodyContentScript = '<script src="' + VMAX.Vast_player_js + '"><\/script><script>\n            ' + moat_code + "\n\t\t    (function() {\n\t\t        var xml_str = '" + encodeURI(xml).replace(/\n/gim, "").replace(/'/gim, "&rsquo;").replace(/\[ccb\]/gi, new Date().getTime()).replace(/\[advid\]/gi, advid) + "';\n\t\t        __tmp_completed_view_event = false;\n                player = new VASTPlayer(document.getElementById(\"msite_vide0_ad_" + rand + '"));\n                window.flagInViewPause = false;\n                window.isDeveloperPaused = false;\n                videoIsStuckTimer = false;\n\t\t        player.load(xml_str).then(function startAd() {\n\t\t\t\t\twindow.parent.VMAX_ADD_ONS.ins_in_viewport("adstarted", "' + pId + '");\n\t\t            tmp_vid_container = document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0];\n\n\t\t            ' + (!flag_instream ? 'tmp_vid_container.style.height = "250px";' : "") + '\n\t\t            \n\t\t            if (document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0]) {\n                        // document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].volume = 0;\n                        // document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].muted = true;\n                        document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].addEventListener("stalled", function(){\n                            console.log("Video is stalled! (ID: \'+ pId + \')");\n                            videoIsStuck();\n                        }); \n                        document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].addEventListener("error", function(){\n                            console.log("Video error occurred! (ID: \'+ pId + \')");\n                            videoIsStuck();\n                        }); \n                        \n                    }\n\t\t            setTimeout(function() {\n                        // document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].setAttribute("muted", "true");\n\t\t                // player.muteAd();\n\t\t                player.startAd();\n                    }, 10);\n\n\t\t            player.startAd();\n                    var vid_flag = true;\n\t\t            return;\n\t\t        }).catch(function(reason) {\n\t\t        \tconsole.log(reason);\n\t\t            setTimeout(function() {\n\t\t            \tconsole.warn("' + pId + ' >>> Vast XML error!");\n\t\t\t\t\t\t// window.parent.VmaxAd.refresh_ad("' + pId + '", true);\n\t\t\t\t\t\treturn window.parent.VmaxAd.closeAd("' + pId + '", ' + !flag_instream + ');\n\t\t                throw reason;\n\t\t            }, 0);\n\t\t        });\n                \n                player.once("AdStarted", function(a){\n                    window.parent.VMAX.companionManager.onPrimaryAdShow({\n                        \'adspotKey\':"' + adspotKey + "\",\n                        'placementId':\"" + placementid + "\",\n                        'videoContainer' : \"" + pId + '"\n                    })\n                });\n\n\t\t        player.once("AdImpression", function(a){\n\t\t\t\t\t// console.log("Video Impression(' + (!flag_instream ? pId : placementid) + ") URL fired\");\n\t\t\t\t\twindow.parent.VMAXSDK.FCAP.init({'pId' : \"" + (!flag_instream ? pId : placementid) + "\", 'type': 'i'});\n\t\t        });\n\n\t\t        player.once(\"AdClickThru\", function(){\n\t\t        \twindow.parent.VMAXSDK.FCAP.init({'pId' : \"" + (!flag_instream ? pId : placementid) + '", \'type\': \'c\'});\n\t\t        });\n\n\t\t        player.once("AdStopped", function() {\n                    // console.log("Ad stopped!");\n                    // return;\n                    videoIsStuckTimer = true;\n                    document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].pause();\n                    setTimeout(function(){\n                        document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].pause();\n                    }, 1);\n\t                if (!__tmp_completed_view_event) {\n\t                    document.addEventListener("CompletedView", function(e) {\n\t                    \t// console.log("Media End callback calling from CV event");\n\t                        //Call the Callback if defined\n\t\t\t\t\t\t\twindow.parent.VmaxAd.onAdMediaEnd("' + pId + '" ' + (placementid ? ', "' + placementid + '"' : "") + ");\n\n\t\t\t\t    \t\t//If its an instream exit the function\n\t\t\t\t    \t\t" + (flag_instream ? 'return window.parent.VmaxAd.closeAd( "' + pId + '" );' : "") + '\n\n\t\t\t\t    \t\t//If its not instream, then check if "refresh" is defined, and then call the next ad\n\t\t\t\t    \t\tvar refresh_timer = ' + (!flag_instream && adContent["adspot-config"] && adContent["adspot-config"]["refresh-rate"] ? adContent["adspot-config"]["refresh-rate"] : false) + ';\n\t\t\t\t\t    \tlet _node = window.parent.document.getElementById( "' + pId + '" );\n\t\t\t\t\t\t\tif( refresh_timer && _node ){\n\t\t\t\t\t\t\t\t// console.log("' + pId + ' >>> ", "refreshing ad(1)");\n\t\t\t\t\t\t\t\twindow.parent.getAdParams( _node );\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tif(typeof MoatApiReference != \'undefined\' && MoatApiReference instanceof Object){\n\t\t\t\t\t    \t\tMoatApiReference.dispatchEvent({ "type" : "AdVideoComplete" , "adVolume" : player.adVolume.toString() });\n\t\t\t\t\t    \t}\n\t\t\t\t\t    \t// console.log("Vast video completed 1!");\n\t                    }, false);\n\t                } else {\n\t                    // console.log("Media End callback calling from Video Completed event");\n\n\t                    //Call the Callback if defined\n\t\t\t\t\t\twindow.parent.VmaxAd.onAdMediaEnd("' + pId + '" ' + (placementid ? ', "' + placementid + '"' : "") + ");\n\n\t\t\t    \t\t//If its an instream exit the function\n\t\t\t    \t\t" + (flag_instream ? 'return window.parent.VmaxAd.closeAd( "' + pId + '" );' : "") + '\n\n\t\t\t    \t\t//If its not instream, then check if "refresh" is defined, and then call the next ad\n\t\t\t    \t\tvar refresh_timer = ' + (!flag_instream && adContent["adspot-config"] && adContent["adspot-config"]["refresh-rate"] ? adContent["adspot-config"]["refresh-rate"] : false) + ';\n\t\t\t\t    \tlet _node = window.parent.document.getElementById( "' + pId + '" );\n\t\t\t\t\t\tif( refresh_timer && _node ){\n\t\t\t\t\t\t\t// console.log("' + pId + ' >>> ", "refreshing ad(2)");\n\t\t\t\t\t\t\twindow.parent.getAdParams( _node );\n\t\t\t\t\t\t}\n\n\t\t\t    \t\tif(typeof MoatApiReference != \'undefined\' && MoatApiReference instanceof Object){\n\t\t\t\t    \t\tMoatApiReference.dispatchEvent({ "type" : "AdVideoComplete" , "adVolume" : player.adVolume.toString() });\n\t\t\t\t    \t}\n\t\t\t\t    \t// console.log("Vast video completed 2!");\n\t                }\n                });\n\n                player.on("AdPaused", function(){\n                    console.log(\'Ad pause and then calling videostuck\');\n                    videoIsStuck();\n                 });\n                 player.on("AdPlaying", function(){\n                    console.log("Video playing!");\n                 });\n\n                 setInterval(function(){ \n                     if( document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0] && !flagInViewPause && !isDeveloperPaused ){\n                         if(document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].paused === true && videoIsStuckTimer === false ){ \n                            //  console.log("Video stuck!!!"); \n                             setTimeout(function(){ \n                                 document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].play(); \n                                 videoIsStuck(); \n                             }, 100); \n                         }else if(document.getElementById("msite_vide0_ad_' + rand + '").getElementsByTagName("video")[0].paused === false && videoIsStuckTimer ){ \n                             clearTimeout(videoIsStuckTimer); \n                             videoIsStuckTimer = false; \n                         } \n                     }\n                 }, 500);\n                \n                function videoIsStuck(){\n                    if( !flagInViewPause && !isDeveloperPaused){\n                       console.log("Video is stuck, due to network! (ID: ' + pId + ')");\n                        if( videoIsStuckTimer === false ){\n                            // console.log("Video got stuck");\n                            videoIsStuckTimer = setTimeout(function(){\n                                window.parent.VMAX.companionManager.onPrimaryAdEnd({\n                                    placementId:"' + placementid + '"\n                                });\n                                console.log("Video is stuck.");\n                                //If its an instream exit the function\n                                ' + (flag_instream ? 'return window.parent.VmaxAd.closeAd( "' + pId + '" );' : "") + '\n\n                                //If its not instream, then call the next ad\n                                let _node = window.parent.document.getElementById( "' + pId + '" );\n                                if( _node ){\n                                    window.parent.getAdParams( _node );\n                                }\n                                if (window.parent.VMAXSDK && window.parent.VMAXSDK.onAdError && typeof window.parent.VMAXSDK.onAdError == "function") {\n                                    window.parent.VMAXSDK.onAdError("' + pId + '", "video stuck");\n                                }\n                            }, 5000);\n                        }\n                    }else{\n                        console.log("Video is paused(out of view / manually paused)! (ID: \' + id + \')");\n                    }\n                }\n\t\t    })(VASTPlayer);\n\t\t    <\/script>';
                frameNode = createDOMElement("iframe", options);
                adContainer.innerHTML = "";
                adContainer.appendChild(frameNode);
                if (!flag_instream) {
                    if (dw && dh) {
                        adContainer.style.width = dw + "px";
                        adContainer.style.height = dh + "px";
                    }
                    adContainer.style.display = "block";
                    adContainer.style.margin = "0 auto";
                }
                var doc = document.getElementById(frameId).contentWindow.document;
                doc.open();
                doc.write("<body>" + (bodyContent + bodyContentScript) + "</body>");
                doc.close();
                try {
                    var iframe_loaded = false;
                    var tmp_video_error = false;
                    document.getElementById(frameId).onload = function() {
                        iframe_loaded = true;
                    };
                    setTimeout(function(flag_instream, pId, placementid) {
                        var tmp_video = doc.getElementsByTagName("video")[0];
                        if (!tmp_video || tmp_video.paused) {
                            try {} catch (err) {}
                            console.log("Error: Video not loaded! " + (tmp_video ? tmp_video.src : ""));
                        }
                    }, 4e3);
                } catch (err) {}
            } else {
                console.warn("Ad response is empty (" + pId + ")!");
                VmaxAd.refresh_ad(pId, true);
            }
        }
    }, {
        key: "createDisplayAdMarkup",
        value: function createDisplayAdMarkup(pId, adspotKey, adContent, isResponsive) {
            var frameId = "mF_" + adspotKey + "_" + pId;
            var adContainer = document.getElementById(pId);
            var bodyContent = adContent.ad;
            var options = void 0, frameNode = void 0;
            if (bodyContent) {
                var dimension = void 0, dim_params = void 0;
                if (adContent.hasOwnProperty("image-width") && adContent.hasOwnProperty("image-height")) {
                    var isWidthResponsive = adContent["image-width"] == -1;
                    var isHeightResponsive = adContent["image-height"] == -1;
                    var dw = isWidthResponsive ? "100%" : adContent["image-width"] + "px";
                    var dh = isHeightResponsive ? "auto" : adContent["image-height"] + "px";
                    dimension = "display: inline-block; width: " + dw + "; height: " + dh;
                    dim_params = "";
                } else {
                    dimension = "";
                    dim_params = "auto";
                }
                if (isResponsive) {
                    dimension = "display: inline-block; width: 100%;";
                }
                options = {
                    id: frameId,
                    marginwidth: 0,
                    marginheight: 0,
                    hspace: 0,
                    vspace: 0,
                    frameborder: 0,
                    scrolling: "no"
                };
                if (dimension) options["style"] = dimension;
                if (dimension) options["data-ad-format"] = dim_params;
                frameNode = createDOMElement("iframe", options);
                var parent_div = document.createElement("div");
                adContainer.innerHTML = "";
                parent_div.appendChild(frameNode);
                adContainer.appendChild(parent_div);
                if (dw && dh) {
                    parent_div.style.width = dw + "px";
                    parent_div.style.height = dh + "px";
                }
                if (isResponsive) {
                    parent_div.style.width = "100%";
                    parent_div.style.height = "auto";
                }
                parent_div.style.display = "block";
                parent_div.style.margin = "0 auto";
                var doc = document.getElementById(frameId).contentWindow.document;
                doc.open();
                doc.write("<body>" + bodyContent + "</body>");
                doc.close();
                frameNode.contentDocument.body.setAttribute("data-parent-id", pId);
                VMAXSDK.FCAP.init({
                    pId: pId,
                    type: "i"
                });
                var iframeResizer = new IframeResizer({
                    iframeNode: frameNode,
                    isHeightResponsive: isHeightResponsive,
                    isWidthResponsive: isWidthResponsive,
                    width: dw,
                    height: dh
                });
                VMAXSDK.Events.dispatch("onAdRender", pId, {
                    placementId: pId,
                    width: adContent["image-width"],
                    height: adContent["image-height"]
                });
            } else {
                console.warn("Ad response is empty (" + pId + ")!");
                VmaxAd.refresh_ad(pId, true);
            }
        }
    }, {
        key: "supportForVmaxAdEvents",
        value: function supportForVmaxAdEvents() {
            return '<script>/** Handle APIs from VmaxAdEvents interface\n            (1) if not present in the current window\n            (2) And is present in the parent window **/\n            if (typeof VmaxAdEvents === "undefined") {\n              var isVmaxAdEventsPresentInParent = window.parent.hasOwnProperty("VmaxAdEvents");\n              var referenceVmaxAdEvents = isVmaxAdEventsPresentInParent && window.parent.VmaxAdEvents;\n              var VmaxAdEvents = {\n                launchOperation: function (Element, URLSchema) {\n                  if( !isVmaxAdEventsPresentInParent ) return;\n                  try{\n                    referenceVmaxAdEvents.launchOperation(Element, URLSchema);\n                  }catch(err){}\n                },\n                handleClick: function(Element, URLSchema) {\n                  if( !isVmaxAdEventsPresentInParent ) return;\n                  try{\n                    referenceVmaxAdEvents.handleClick(Element, URLSchema);\n                  }catch(err){}\n                }\n              };\n            }<\/script>';
        }
    }, {
        key: "ellipsisText",
        value: function ellipsisText(str, len) {
            if (str.length > len) return str.substring(0, len - 3) + "..."; else return str;
        }
    }, {
        key: "createCustomElement",
        value: function createCustomElement(pId, element, native_ad_obj, adContent) {
            try {
                var replaceButtonThemeMacros = function replaceButtonThemeMacros(_html) {
                    if (typeof _html !== "string") {
                        return _html || "";
                    }
                    var htmlString = _html;
                    var templateMacros = [ "ctaTheme", "ctaColor", "ctaTextColor", "ctaBorderColor" ];
                    for (var i = 0; i < templateMacros.length; i++) {
                        var macro = templateMacros[i];
                        var macroValue = native_ad_obj.hasOwnProperty(macro) && native_ad_obj[macro] || "";
                        var macroRegex = new RegExp("%" + macro + "%", "gim");
                        htmlString = htmlString.replace(macroRegex, macroValue);
                    }
                    return htmlString;
                };
                var prepareHTML = function prepareHTML(_html) {
                    var tmp_div = document.createElement("div");
                    tmp_div.innerHTML = replaceButtonThemeMacros(_html);
                    var _children = tmp_div.getElementsByTagName("*");
                    for (var i = 0; i < _children.length; i++) {
                        var _child = _children[i];
                        var attr_data_native_value = _child.getAttribute(attr_data_native) && _child.dataset.nativeElement;
                        var flag_is_present_in_map = mapForElement.hasOwnProperty(attr_data_native_value);
                        var obj_value = native_ad_obj.hasOwnProperty(attr_data_native_value) && native_ad_obj[attr_data_native_value] || "";
                        if (flag_is_present_in_map) {
                            if (/img/i.test(_child.nodeName)) {
                                _child.src = obj_value;
                            } else if (attr_data_native_value === "video") {
                                if (!_child.hasAttribute("id") || !_child.id) {
                                    _child.id = "___temp_" + (Date.now() || new Date.getTime());
                                }
                            } else if (attr_data_native_value === "media") {
                                if (!_child.hasAttribute("id") || !_child.id) {
                                    _child.id = "___temp_" + (Date.now() || new Date.getTime());
                                }
                                var isVideoThere = native_ad_obj.hasOwnProperty("video") && native_ad_obj["video"];
                                var isMainImageThere = native_ad_obj.hasOwnProperty("imageMain") && native_ad_obj["imageMain"];
                                if (isVideoThere) {
                                    _child.className += _child.className.length > 0 && " ___playVideo___" || "___playVideo___";
                                }
                                if (!isVideoThere && isMainImageThere) {
                                    var mainImage = document.createElement("img");
                                    mainImage.src = isMainImageThere;
                                    _child.className += _child.className.length > 0 && " ___showMainImage___" || "___showMainImage___";
                                    _child.appendChild(mainImage);
                                }
                            } else {
                                _child.appendChild(document.createTextNode(obj_value));
                            }
                            _child.className += (_child.className.length > 0 ? " " : "") + mapForElement[attr_data_native_value];
                        }
                    }
                    return tmp_div.innerHTML;
                };
                var adspotSize = adContent["adspot-size"] || "";
                var layoutName = VMAXSDK.nativeAdLayoutManager.getLayoutName(native_ad_obj);
                var isLayoutRegistered = layoutName && VMAXSDK.nativeAdLayoutManager.isLayoutRegistered({
                    layoutName: layoutName,
                    adspotSize: adspotSize
                });
                var children_elements = document.createElement("div");
                children_elements.innerHTML = element.customNativeFields;
                var attr_data_native = "data-native-element";
                var mapForElement = {
                    title: "native_c_title",
                    ctaText: "native_c_btn_txt",
                    desc: "native_c_desc",
                    desc2: "native_c_tagline",
                    rating: "native_c_rating",
                    downloads: "native_c_downloads",
                    price: "native_c_price",
                    imageIcon: "native_c_icon",
                    imageMain: "native_c_imagemain",
                    sponsored: "native_c_sponsored",
                    likes: "native_c_like",
                    phone: "native_c_phone",
                    address: "native_c_address",
                    customImage: "native_c_customimage",
                    salePrice: "native_c_saleprice",
                    video: "native_c_video",
                    media: "native_c_media"
                };
                var updatedHTML = isLayoutRegistered ? prepareHTML(VMAXSDK.nativeAdLayoutManager.getLayout({
                    layoutName: layoutName,
                    adspotSize: adspotSize
                })) : prepareHTML(element.customNativeFields);
                document.getElementById(pId).adContent = this["renderAd"]["adContent"]["ad"];
                var custom_wrapper = document.createElement("div");
                custom_wrapper.id = "custom_wrapper_" + pId;
                custom_wrapper.setAttribute("data-pid", pId);
                custom_wrapper.innerHTML = updatedHTML;
                custom_wrapper.className = "custom_wrapper";
                return custom_wrapper.outerHTML;
            } catch (err) {
                console.warn("custom layout fail : " + err);
            }
        }
    }, {
        key: "createNativeElement",
        value: function createNativeElement(pId, ins_tag, nativeAdObj, adContent) {
            var adspotSize = adContent["adspot-size"];
            var encodeJSON = encodeURI(adContent.ad);
            var html = "";
            var desc = "";
            var rating_class = this.setNativeRatingClass(nativeAdObj.rating);
            var star = rating_class == "s0" ? "" : "default-native-star";
            if (nativeAdObj.desc2) {
                desc = nativeAdObj.desc2;
            } else if (nativeAdObj.desc) {
                desc = nativeAdObj.desc;
            }
            var impTracker = ins_tag.getAttribute("data-imp-tracker");
            if (impTracker && nativeAdObj.hasOwnProperty("impTrackers")) nativeAdObj["impTrackers"].push(impTracker);
            var clkTracker = ins_tag.getAttribute("data-clk-tracker");
            if (clkTracker && nativeAdObj.hasOwnProperty("clickTrackers")) nativeAdObj["clickTrackers"].push(clkTracker);
            document.getElementById(pId).adContent = adContent.ad;
            if (adspotSize === "banner") {
                html = HTMLNativeBanner();
            }
            if (adspotSize === "billboard") {
                html = HTMLNativeBillboard();
            }
            return html;
            function HTMLNativeBanner() {
                var nativeImageIcon = typeof nativeAdObj.imageIcon !== "undefined" && '<div class="_c1"><img class="_imgIcon" src="' + nativeAdObj.imageIcon + '" alt="Icon"></div>';
                var nativeTitle = typeof nativeAdObj.title !== "undefined" && '<div class="_ad_title">' + nativeAdObj.title + "</div>";
                var nativeSponsored = typeof nativeAdObj.sponsored !== "undefined" && '<span class="_ad_badge">' + nativeAdObj.sponsored + "</span>";
                var description = nativeAdObj.desc2 || nativeAdObj.desc;
                var nativeDesc = typeof description !== "undefined" && '<div class="_ad_description"><span class="_ad_badge">' + nativeAdObj.sponsored + "</span>" + description + "</div>";
                var nativeCTAButton = typeof nativeAdObj.ctaText !== "undefined" && '<div class="_c3"><button class="_ctaButton">' + nativeAdObj.ctaText + "</button></div>";
                var styleText = '<style type="text/css">\n            .__native_banner_default{ width: 320px; height: 50px; font-family: Arial, sans-serif; font-size: 12px; background-color: #222; }\n            .__native_banner_default ._content,\n            .__native_banner_default ._content > ._c1,\n            .__native_banner_default ._content > ._c2{ height: 50px; }\n            .__native_banner_default ._content > ._c2{ flex-grow: 1; align-self: flex-start;}\n            .__native_banner_default ._imgIcon{ width: 40px; height: 40px; margin: 5px 5px 5px 0px; }\n            .__native_banner_default ._content{ box-sizing: border-box; display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 0 5px;}\n            .__native_banner_default ._ad_title{ color: #fff; font-size: 14px; margin: 9px 0 5px; }\n            .__native_banner_default ._ad_badge{ color: #fff; font-size: 11px;  display: inline-block; background: #ffc01c; padding: 2px 3px; border-radius: 2px; margin-right: 3px; }\n            .__native_banner_default ._ad_badge:empty{display: none;}\n            .__native_banner_default ._ad_description{ color: #d8d8d8; font-size: 12px;}\n            .__native_banner_default ._ctaButton{cursor: pointer; padding: 0; border: none; outline: none; background-color: #A100FF; border-radius: 20px; padding: 8px 12px; display: block; text-align: center; background-image: linear-gradient(-78deg, #A100FF 0%, #FF0000 100%); font-size: 14px; color: #fff; width: 90px;}\n            \n            .__native_banner_default ._ad_title, \n            .__native_banner_default ._ad_description{\n                width: ' + (162 + (nativeImageIcon ? 0 : 50) + (nativeCTAButton ? 0 : 90)) + "px;\n                line-height: 12px;\n            }\n        \n            .__native_banner_default ._ad_title, \n            .__native_banner_default ._ad_description,\n            .__native_banner_default ._ctaButton{\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n\n            @media only screen and (min-width: 728px) {\n                .__native_banner_default{ width: 728px; height: 90px; }\n                .__native_banner_default ._content,\n                .__native_banner_default ._content > ._c1{ height: 90px; }\n                .__native_banner_default ._content > ._c2{ height: auto; align-self: center; }\n                .__native_banner_default ._content{ padding:0 10px; }\n                .__native_banner_default ._imgIcon{ width: 70px; height: 70px; margin: 10px 10px 10px 0px; }\n                .__native_banner_default ._ctaButton{ width: 120px; padding: 12px 15px; font-size: 16px; }\n                .__native_banner_default ._ad_title{ font-size: 18px; }\n                .__native_banner_default ._ad_description{ font-size: 16px; }\n                .__native_banner_default ._ad_badge{ font-size: 14px; padding: 1px 3px; }\n                .__native_banner_default ._ad_title, \n                .__native_banner_default ._ad_description{\n                    width: " + (500 + (nativeImageIcon ? 0 : 80) + (nativeCTAButton ? 0 : 120)) + "px;\n                    line-height: 20px;\n                    margin: 10px 0;\n                }\n            }\n\n            @media only screen and (min-width: 970px) {\n                .__native_banner_default{ width: 970px; }\n                .__native_banner_default ._ad_title, \n                .__native_banner_default ._ad_description{\n                    width: " + (740 + (nativeImageIcon ? 0 : 80) + (nativeCTAButton ? 0 : 120)) + "px;\n                    line-height: 20px;\n                    margin: 10px 0;\n                }\n            }\n            </style>";
                var html = styleText + '\n            <div class="__native_banner_default" onclick="vservclick(this)" data-pid="' + pId + '">\n                <div class="_content">\n                    ' + (nativeImageIcon || "") + '\n                    <div class="_c2">\n                        ' + (nativeTitle || "") + "\n                        " + (nativeDesc || "") + "\n                    </div>\n                    " + (nativeCTAButton || "") + "\n                </div>\n            </div>";
                return html || "";
            }
            function HTMLNativeBillboard() {
                var imageMain = typeof nativeAdObj.imageMain !== "undefined" && nativeAdObj.imageMain;
                var imageMedium = typeof nativeAdObj.imageMedium !== "undefined" && nativeAdObj.imageMedium;
                var image = imageMain || imageMedium;
                var nativeImageMain = imageMain && '<img class="_imgMain" src="' + imageMain + '" alt="Main Image">';
                var nativeImageIcon = typeof nativeAdObj.imageIcon !== "undefined" && '<div class="_c1"><img class="_imgIcon" src="' + nativeAdObj.imageIcon + '" alt="Icon"></div>';
                var nativeTitle = typeof nativeAdObj.title !== "undefined" && '<div class="_ad_title">' + nativeAdObj.title + "</div>";
                var nativeSponsored = typeof nativeAdObj.sponsored !== "undefined" && '<span class="_ad_badge">' + nativeAdObj.sponsored + "</span>";
                var description = nativeAdObj.desc2 || nativeAdObj.desc;
                var nativeDesc = typeof description !== "undefined" && '<div class="_ad_description">' + (nativeSponsored || "") + description + "</div>";
                var nativeCTAButton = typeof nativeAdObj.ctaText !== "undefined" && '<div class="_c3"><button class="_ctaButton">' + nativeAdObj.ctaText + "</button></div>";
                var titleWidth = 139 + (nativeImageIcon ? 0 : 48) + (nativeCTAButton ? 0 : 97);
                var styleText = '<style type="text/css">\n                .__native_bb_default{ width: 300px; height: 250px; font-family: Noto Sans, Arial, sans-serif; font-size: 12px; background-color: #222; }\n                .__native_bb_default ._imgMain{ width: auto; height: 157px; display: block; margin: 0 auto; }\n                .__native_bb_default ._imgIcon{ width: 40px; height: 40px; margin: 8px 8px 8px 0px; }\n                .__native_bb_default ._content{ padding: ' + (imageMain ? 18 : 175) + "px 8px 18px; height: 93px; box-sizing: border-box; display: flex; flex-direction: row; justify-content: center; align-items: center; }\n                .__native_bb_default ._content > ._c2{ flex-grow: 1; align-self: flex-start;}\n                .__native_bb_default ._ad_title{ color: #fff; font-size: 14px; margin: 9px 0 5px; }\n                .__native_bb_default ._ad_badge{ color: #fff; font-size: 11px;  display: inline-block; background: #ffc01c; padding: 2px 3px; border-radius: 2px; margin-right: 3px; }\n                .__native_bb_default ._ad_description{ color: #d8d8d8; font-size: 12px;}\n                .__native_bb_default ._ctaButton{cursor: pointer; padding: 0; border: none; outline: none; background-color: #A100FF; border-radius: 20px; padding: 10px 16px; display: block; text-align: center; background-image: linear-gradient(-78deg, #A100FF 0%, #FF0000 100%); font-size: 14px; color: #fff; width: 97px;}\n                \n                .__native_bb_default ._ad_title, \n                .__native_bb_default ._ad_description{\n                    width: " + titleWidth + "px;\n                    line-height: 12px;\n                }\n            \n                .__native_bb_default ._ad_title, \n                .__native_bb_default ._ad_description,\n                .__native_bb_default ._ctaButton{\n                    white-space: nowrap;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                }\n            </style>";
                var html = styleText + '\n            <div class="__native_bb_default" onclick="vservclick(this)" data-pid="' + pId + '">\n                ' + (nativeImageMain || "") + '\n                <div class="_content">\n                    ' + (nativeImageIcon || "") + '\n                    <div class="_c2">\n                        ' + (nativeTitle || "") + "\n                        " + (nativeDesc || "") + "\n                    </div>\n                    " + (nativeCTAButton || "") + "\n                </div>\n            </div>";
                return html || "";
            }
        }
    }, {
        key: "createNativeAdMarkup",
        value: function createNativeAdMarkup(pId, adspotKey, adContent, flagCustomNative, postData) {
            var adspotSize = adContent["adspot-size"] || "";
            console.debug("Setting up Native Ad Markup...", adContent, pId, adspotKey);
            var nativeAdObj = JSON.parse(adContent.ad);
            var layoutName = VMAXSDK.nativeAdLayoutManager.getLayoutName(nativeAdObj);
            nativeAdObj.downloads = VMAX.abbrNum(nativeAdObj.downloads);
            var ins_tag = document.getElementById(pId);
            var linkpath = VMAX.Domain.Style + "/default.css";
            var isLayoutRegistered = VMAXSDK.nativeAdLayoutManager.isLayoutRegistered({
                layoutName: layoutName,
                adspotSize: adspotSize
            });
            var isLayoutDefaultRegistered = VMAXSDK.nativeAdLayoutManager.isLayoutRegistered({
                layoutName: layoutName,
                adspotSize: VmaxAdspotSize.Default
            });
            var isCustomNative = flagCustomNative === true || /ins-native-custom/.test(ins_tag.className);
            var wrapperCustomNative = false;
            var html = "";
            if (isLayoutRegistered) {
                html = this.createCustomElement(pId, ins_tag, nativeAdObj, adContent);
            } else if (isLayoutDefaultRegistered) {
                html = this.createCustomElement(pId, ins_tag, nativeAdObj, adContent);
            } else if (isCustomNative) {
                html = this.createCustomElement(pId, ins_tag, nativeAdObj, adContent);
            } else {
                if (!layoutName) {
                    html = this.createNativeElement(pId, ins_tag, nativeAdObj, adContent);
                } else {
                    console.error("Layout is missing! no layout has been registered for this ad.");
                    return;
                }
            }
            var flag_css_loaded = function() {
                var link_tags = document.getElementsByTagName("link");
                var found = false;
                for (var i = 0; i < link_tags.length; i++) {
                    var link = link_tags[i];
                    if (link.href === linkpath) {
                        found = true;
                        break;
                    }
                }
                return found;
            }();
            if (!flag_css_loaded) {
                loadLibFile([ linkpath ], "link", function() {
                    render();
                });
            } else {
                render();
            }
            function render() {
                if (ins_tag) {
                    ins_tag.setAttribute("data-isnative", "yes");
                    ins_tag.vmaxTrackers = new VmaxTrackers({
                        adObject: nativeAdObj,
                        placementId: ins_tag.id
                    });
                    ins_tag.innerHTML = html;
                    if (isLayoutRegistered || isCustomNative) {
                        wrapperCustomNative = ins_tag.querySelector(".custom_wrapper");
                        playNativeVideos(ins_tag);
                        attachClickEvent(ins_tag);
                        hideUntilAssetsLoaded(ins_tag);
                    }
                    if (adspotSize === "banner") {
                        VMAX.applyAnimation(ins_tag, "default-native-ad-banner");
                    } else {
                        VMAX.applyAnimation(ins_tag, "default-native-add");
                    }
                    if (VMAX.package_exceptions(postData.source)) {
                        ins_tag.setAttribute("data-isnative", "no");
                        ins_tag.vmaxTrackers.fireImpression();
                    } else {
                        inView.threshold(.5);
                        if (inView.is(ins_tag)) {
                            console.log("Ad is in the view > 1!");
                            ins_tag.setAttribute("data-isnative", "no");
                            ins_tag.vmaxTrackers.fireImpression();
                        } else {
                            inView("#" + pId).once("enter", function() {
                                console.log("Ad is in the view > 2!");
                                ins_tag.setAttribute("data-isnative", "no");
                                ins_tag.vmaxTrackers.fireImpression();
                            });
                        }
                    }
                }
            }
            function extractNativePreviewImage(attribute) {
                try {
                    return nativeAdObj.hasOwnProperty(attribute) && nativeAdObj[attribute];
                } catch (err) {
                    return false;
                }
            }
            function playNativeVideos(ins_tag) {
                try {
                    var videoElements = ins_tag.querySelectorAll('[data-native-element="video"], [data-native-element="media"].___playVideo___');
                    if (videoElements.length > 0) {
                        VmaxAd.isVideoShown(ins_tag.id, false);
                        for (var i = 0; i < videoElements.length; i++) {
                            var videoElement = videoElements[i];
                            var shouldVideoLoop = videoElement.dataset && videoElement.dataset.hasOwnProperty("nativeElementMediaAttrLoop") && videoElement.dataset.nativeElementMediaAttrLoop == "true";
                            var previewImage = videoElement.dataset && videoElement.dataset.hasOwnProperty("nativeElementMediaAttrPreviewimage") && extractNativePreviewImage(videoElement.dataset.nativeElementMediaAttrPreviewimage);
                            var player = new SimpleVastVideoPlayer({
                                xml: nativeAdObj && nativeAdObj.hasOwnProperty("video") && nativeAdObj.video,
                                containerId: videoElement.id,
                                placementId: pId,
                                adContent: adContent,
                                loop: shouldVideoLoop,
                                previewImage: previewImage
                            });
                            player.show();
                        }
                        ins_tag.dataset.mediaLoopOnce = "false";
                        videoElements[0].addEventListener("videoended", function() {
                            ins_tag.dataset.mediaLoopOnce = "true";
                        });
                    }
                } catch (err) {}
            }
            function attachClickEvent(ins_tag) {
                var clickableElements = ins_tag.querySelectorAll('[data-native-clickable="true"]');
                var rootDivElement = ins_tag.querySelector("div");
                var isAnyClickableElementsPresent = clickableElements.length > 0;
                if (!isAnyClickableElementsPresent) {
                    var rootElements = ins_tag.children;
                    for (var i = 0; i < rootElements.length; i++) {
                        rootElements[i].addEventListener("click", function(e) {
                            if (e.pageX !== 0 && e.pageY !== 0) {
                                vservclick(rootDivElement);
                            }
                        });
                    }
                } else {
                    for (var _i4 = 0; _i4 < clickableElements.length; _i4++) {
                        clickableElements[_i4].addEventListener("click", function(e) {
                            if (e.pageX !== 0 && e.pageY !== 0) {
                                vservclick(rootDivElement);
                            }
                        });
                    }
                }
            }
            function hideUntilAssetsLoaded(ins_tag) {
                var _images = ins_tag.querySelectorAll("img");
                var _videos = ins_tag.querySelectorAll('[data-native-element="video"], [data-native-element="media"].___playVideo___');
                var _totalElements = _images.length + _videos.length;
                if (_totalElements === 0) return;
                wrapperCustomNative.style.visibility = "hidden";
                wrapperCustomNative.style.height = "0px";
                wrapperCustomNative.style.overflow = "hidden";
                console.log(">>>>>>>>>> _totalElements", _totalElements);
                var _counter = 0;
                var _showAd = function _showAd(e) {
                    _counter = _counter + 1;
                    if (_counter === _totalElements) {
                        console.log(">>>>>>>>>> All elements loaded!");
                        wrapperCustomNative.style.visibility = "";
                        wrapperCustomNative.style.height = "auto";
                        wrapperCustomNative.style.overflow = "";
                    }
                };
                for (var _i = 0; _i < _images.length; _i++) {
                    _images[_i].addEventListener("load", _showAd);
                }
                if (_videos.length > 0) {
                    _videos[0].addEventListener("videoparsed", _showAd);
                }
            }
        }
    }, {
        key: "setNativeRatingClass",
        value: function setNativeRatingClass(rating) {
            rating = parseFloat(rating).toFixed(1);
            if (rating) {
                if (rating < .5) return "s0"; else if (rating >= .5 && rating < 1) return "s05"; else if (rating >= 1 && rating < 1.5) return "s1"; else if (rating >= 1.5 && rating < 2) return "s15"; else if (rating >= 2 && rating < 2.5) return "s2"; else if (rating >= 2.5 && rating < 3) return "s25"; else if (rating >= 3 && rating < 3.5) return "s3"; else if (rating >= 3.5 && rating < 4) return "s35"; else if (rating >= 4 && rating < 4.5) return "s4"; else if (rating >= 4.5 && rating < 5) return "s45"; else if (rating >= 5) return "s5";
            }
            return "s0";
        }
    }, {
        key: "callInView",
        value: function callInView() {
            inView("ins.adsbyvmax").on("enter", native_imp);
        }
    }, {
        key: "notifyTrueImpression",
        value: function notifyTrueImpression() {
            var insobj = inView("ins.adsbyvmax").check();
            for (var i = 0; i < insobj.current.length; i++) {
                if (insobj.current[i].getAttribute("data-isnative") == "yes") {
                    var tags = document.getElementById(insobj.current[i].id).getElementsByTagName("*");
                    for (var j = 0; j < tags.length; j++) {
                        if (tags[j].getAttribute("data-encode")) {
                            var JSON_DATA = tags[j].getAttribute("data-encode");
                            var decodeJson = decodeURI(JSON_DATA);
                            var Vserv_Data = JSON.parse(decodeJson);
                            vservNotifyImpression(Vserv_Data);
                            insobj.current[i].setAttribute("data-isnative", "no");
                        }
                    }
                }
            }
        }
    }, {
        key: "showInstreamNetworkAd",
        value: function showInstreamNetworkAd(options) {
            var placementId = options.placementId, muteState = options.muteState, adBreakPages = options.adBreakPages, insTag = options.insTag;
            var adTagUrl = insTag.eventTrackers["adnetwork_params"]["ad_tag_url"];
            var adnetwork_class_name = insTag.adnetwork;
            var _insTag$_adNetwork_ = insTag._adNetwork_, _insTag$_adNetwork_$a = _insTag$_adNetwork_.adspotKey, adspotKey = _insTag$_adNetwork_$a === undefined ? "" : _insTag$_adNetwork_$a, _insTag$_adNetwork_$a2 = _insTag$_adNetwork_.adContent, adContent = _insTag$_adNetwork_$a2 === undefined ? {} : _insTag$_adNetwork_$a2, _insTag$_adNetwork_$i = _insTag$_adNetwork_.ignoreAdnetwork, ignoreAdnetwork = _insTag$_adNetwork_$i === undefined ? false : _insTag$_adNetwork_$i, _insTag$_adNetwork_$p = _insTag$_adNetwork_.postData, postData = _insTag$_adNetwork_$p === undefined ? {} : _insTag$_adNetwork_$p;
            var allowsPassingDurationInRequest = VMAXRegistry.ads[adnetwork_class_name].allowsPassingDurationInRequest;
            var canPlayAd = insTag._adbreak_.reselectAdsForShow({
                adContent: insTag.eventTrackers,
                placementId: placementId
            });
            var remaining_max_Time = void 0;
            if (allowsPassingDurationInRequest) {
                remaining_max_Time = insTag._adbreak_.reselectAdsForShow({
                    adContent: insTag.eventTrackers,
                    placementId: placementId,
                    allowsPassingDurationInRequest: allowsPassingDurationInRequest
                });
            }
            if (canPlayAd || allowsPassingDurationInRequest) {
                VMAXRegistry.ads[adnetwork_class_name].prepare({
                    placementId: placementId,
                    adInfo: {
                        adTagUrl: adTagUrl,
                        remaining_max_Time: remaining_max_Time
                    },
                    VmaxAdLoadListener: function VmaxAdLoadListener() {
                        insTag.isAdPrepared = true;
                        VMAXRegistry.ads[adnetwork_class_name].render({
                            placementId: placementId,
                            muteState: muteState,
                            adBreakPages: adBreakPages
                        });
                    },
                    VmaxAdErrorListener: function VmaxAdErrorListener() {
                        console.log(">>>>> Error" + placementId);
                        VmaxAd.fireBeacon("nofill-notification-url", insTag.eventTrackers, [ "<NOFILL>", "2" ]);
                        delete insTag.adnetwork;
                        delete insTag._adNetwork_;
                        if (!adContent.ad) {
                            if (VMAXSDK && VMAXSDK.onAdError && typeof VMAXSDK.onAdError == "function") {
                                VMAXSDK.onAdError(placementId, "no response");
                            }
                            VMAXSDK.Events.dispatch("onAdError", placementId, {
                                placementId: placementId,
                                errorCode: "001"
                            });
                            try {
                                var pool_index = VMAX.inserted_ins_tags.indexOf(placementId);
                                VMAX.inserted_ins_tags.splice(pool_index, 1);
                            } catch (err) {
                                console.log("Could not remove from pool [" + placementId + "]");
                            }
                            return;
                        }
                        insTag.isFallbackAd = true;
                        VmaxAd.setupAdBody(placementId, adspotKey, adContent, true, postData);
                    }
                });
            }
            VMAXRegistry.ads[adnetwork_class_name].registerVAEI({
                placementId: placementId,
                VAEI: new VmaxVastAdEventsInterface({
                    placementId: placementId,
                    adspotKey: adspotKey
                })
            });
        }
    }, {
        key: "showInstreamAdForVPP",
        value: function showInstreamAdForVPP(options) {
            if (!VMAXSDK.hasOwnProperty("vppMap")) {
                VMAXSDK.vppMap = {};
            }
            var _options$containerId3 = options.containerId, containerId = _options$containerId3 === undefined ? false : _options$containerId3, _options$placementId9 = options.placementId, placementId = _options$placementId9 === undefined ? placementId : _options$placementId9, _options$muteState2 = options.muteState, muteState = _options$muteState2 === undefined ? false : _options$muteState2, _options$fullscreenSt2 = options.fullscreenState, fullscreenState = _options$fullscreenSt2 === undefined ? false : _options$fullscreenSt2, _options$enableFullsc2 = options.enableFullscreen, enableFullscreen = _options$enableFullsc2 === undefined ? function() {} : _options$enableFullsc2, _options$exitFullscre2 = options.exitFullscreen, exitFullscreen = _options$exitFullscre2 === undefined ? function() {} : _options$exitFullscre2, _options$adBreakPages2 = options.adBreakPages, adBreakPages = _options$adBreakPages2 === undefined ? {} : _options$adBreakPages2, _options$showTapToUnm2 = options.showTapToUnmuteButton, showTapToUnmuteButton = _options$showTapToUnm2 === undefined ? false : _options$showTapToUnm2, _options$loop = options.loop, loop = _options$loop === undefined ? false : _options$loop, _options$previewImage = options.previewImage, previewImage = _options$previewImage === undefined ? false : _options$previewImage;
            var insTag = document.getElementById(placementId);
            var isAdBreakInstance = insTag.hasOwnProperty("isAdBreak") && insTag.isAdBreak;
            var adnetworkRegisteredWithPlacement = insTag.hasOwnProperty("adnetwork") && insTag.adnetwork;
            if (!isAdBreakInstance && adnetworkRegisteredWithPlacement) {
                VMAXRegistry.ads[adnetworkRegisteredWithPlacement].render({
                    placementId: placementId,
                    muteState: muteState,
                    adBreakPages: adBreakPages
                });
                return;
            }
            if (isAdBreakInstance && adnetworkRegisteredWithPlacement) {
                this.showInstreamNetworkAd({
                    insTag: insTag,
                    placementId: placementId,
                    muteState: muteState,
                    adBreakPages: adBreakPages
                });
                return;
            }
            var container = document.getElementById(containerId);
            var ad = VMAX.instream_store.get(placementId);
            if (isAdBreakInstance) {
                var canShowAd = insTag._adbreak_.reselectAdsForShow({
                    adContent: ad.adContent,
                    placementId: placementId
                });
                if (!canShowAd) {
                    return;
                }
            }
            var xml = options.xml, adspotKey = options.adspotKey, viewability = options.viewability;
            if (!containerId || !container || !ad && !xml) {
                return;
            }
            var globalVPP = VMAXSDK.hasOwnProperty("getGlobalVPP") && typeof VMAXSDK.getGlobalVPP === "function" && VMAXSDK.getGlobalVPP();
            var insVPP = false;
            var _ref = ad["adContent"] || options, _ref$adparams = _ref.adparams, adparams = _ref$adparams === undefined ? {} : _ref$adparams;
            if (isAdBreakInstance) {
                adparams.delay = ad["adContent"]["adInfo"]["ad"]["delay"];
            }
            VMAXSDK.vppMap[containerId] = insVPP || globalVPP || false;
            try {
                if (!VMAXSDK.vppMap[containerId]) {
                    console.warn("VPP has not been mentioned! hence ad cannot be rendered!");
                    return;
                }
                VMAXSDK.vppMap[containerId].registerVAEI({
                    VAEI: new VmaxVastAdEventsInterface({
                        vastJson: {},
                        placementId: placementId,
                        containerId: containerId,
                        adspotKey: ad["adspotKey"] || adspotKey
                    })
                });
                VMAXSDK.vppMap[containerId].init({
                    placementId: placementId,
                    containerId: containerId,
                    enableFullscreen: enableFullscreen,
                    exitFullscreen: exitFullscreen,
                    template: "templateOne",
                    muteState: muteState,
                    fullscreenState: fullscreenState,
                    xml: ad ? ad["adContent"]["ad"] : xml,
                    viewability: ad ? ad["adContent"]["viewability"] : viewability,
                    adparams: adparams,
                    adBreakPages: adBreakPages,
                    showTapToUnmuteButton: showTapToUnmuteButton,
                    loop: loop,
                    previewImage: previewImage
                });
                VMAXSDK.vppMap[containerId].show();
            } catch (err) {
                console.error("Could not initialize the requested VPP", err);
            }
        }
    } ]);
    return vmaxAd;
}();

var vmaxConst = {};

vmaxConst.errorObj = {
    1001: "No Fill",
    1002: "Ad request not allowed",
    1003: "Manifest entry missing",
    1004: "Request Timeout",
    1005: "Internal server error",
    1006: "SDK initialization error",
    1007: "Mismatch UX or markup",
    1008: "Network error",
    1009: "Mandatory params missing",
    1010: "Rendition error",
    1011: "Parsing error",
    1012: "Unknown error",
    1013: "Invalid request arguments",
    1014: "Ad expired"
};

vmaxConst.adStatus = {
    STATE_AD_NOT_REQUESTED: "s1",
    STATE_AD_REQUESTED: "s2",
    STATE_AD_READY: "s3",
    STATE_AD_ERROR: "s4",
    STATE_AD_STARTED: "s5",
    STATE_AD_END: "s6",
    STATE_AD_DISMISSED: "s7",
    STATE_AD_INTERACTED: "s8",
    STATE_AD_READY_NOCACHE: "s10"
};

var adstorage = function() {
    function adstorage() {
        _classCallCheck(this, adstorage);
    }
    _createClass(adstorage, [ {
        key: "setStorage",
        value: function setStorage(key, val, type) {
            try {
                if (type == "local") {
                    localStorage.setItem(key, JSON.stringify(val));
                } else {
                    sessionStorage.setItem(key, JSON.stringify(val));
                }
            } catch (err) {}
        }
    }, {
        key: "getStorage",
        value: function getStorage(key, type) {
            try {
                if (type == "local") {
                    return JSON.parse(localStorage.getItem(key)) || {};
                } else {
                    return JSON.parse(sessionStorage.getItem(key)) || {};
                }
            } catch (err) {
                return {};
            }
        }
    }, {
        key: "removeStorage",
        value: function removeStorage(key, type) {
            try {
                if (type == "local") {
                    return localStorage.removeItem(key);
                } else {
                    return sessionStorage.removeItem(key);
                }
            } catch (err) {
                return {};
            }
        }
    } ]);
    return adstorage;
}();

VMAX.applyAnimationTimer = {};

VMAX.applyAnimation = function(ins_tag, className) {
    try {
        var banners = ins_tag.getElementsByClassName(className);
        var ins_id = ins_tag.id;
        if (banners.length <= 1) return;
        var ctr = 1;
        if (VMAX.applyAnimationTimer[ins_id]) {
            clearInterval(VMAX.applyAnimationTimer[ins_id]);
        }
        VMAX.applyAnimationTimer[ins_id] = setInterval(function() {
            if (!document.getElementById(ins_id)) {
                clearInterval(VMAX.applyAnimationTimer[ins_id]);
                return;
            }
            var banners2 = ins_tag.getElementsByClassName(className);
            var flag_if_ins_or_native_elem_exists = document.getElementById(ins_id) && document.getElementById(ins_id).getElementsByClassName(className).length > 1;
            if (!flag_if_ins_or_native_elem_exists) {
                clearInterval(VMAX.applyAnimationTimer[ins_id]);
                return;
            }
            var banner = banners2[ctr];
            for (var i = 0; i < banners2.length; i++) {
                banners2[i].className = VMAX.removeClasses(banners2[i], [ "active", "not-active" ]);
            }
            setTimeout(function() {
                banner.className += " active";
            }, 500);
            ctr++;
            if (ctr >= banners2.length) {
                ctr = 0;
            }
        }, 5e3);
    } catch (err) {
        console.warn("Could not apply animation!");
    }
};

VMAX.removeClasses = function(elem, _classes) {
    if (!_classes || !_classes.length || (typeof _classes === "undefined" ? "undefined" : _typeof(_classes)) !== "object") {
        if (elem) {
            return elem.className;
        } else {
            return "";
        }
    }
    var _elem_classes = elem.className.split(" ");
    var _className = [];
    for (var i = 0; i < _elem_classes.length; i++) {
        var _class = _elem_classes[i];
        if (_classes.indexOf(_class) == -1) {
            _className.push(_class);
        }
    }
    return _className.join(" ");
};

VMAXSDK.FCAP = {
    storage: new adstorage(),
    setValue: function setValue(propertyPath, value, obj) {
        var properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".");
        if (properties.length > 1) {
            if (!obj.hasOwnProperty(properties[0]) || _typeof(obj[properties[0]]) !== "object") obj[properties[0]] = {};
            return this.setValue(properties.slice(1), value, obj[properties[0]]);
        } else {
            obj[properties[0]] = value;
            return true;
        }
    },
    addCampaign: function addCampaign(campaignid, spotId, options) {
        var campaignList = VMAXSDK.FCAP.storage.getStorage("campaignList", "local"), serverExpiryTime = VMAXSDK.FCAP.storage.getStorage("serverExpiryTime", "local"), i = options["i"], c = options["c"], id = campaignid;
        this.setCounter = function(value, type) {
            if (value && value.hasOwnProperty("m")) this.setValue(id + "." + type + ".m", 0, campaignList);
            if (value && value.hasOwnProperty("h")) this.setValue(id + "." + type + ".h", 0, campaignList);
            if (value && value.hasOwnProperty("d")) this.setValue(id + "." + type + ".d", 0, campaignList);
            if (value && value.hasOwnProperty("l")) this.setValue(id + "." + type + ".l", 0, campaignList);
        };
        if (campaignList.hasOwnProperty(id)) {
            if (campaignList[id]["i"]["hash"] !== JSON.stringify(i)) {
                delete campaignList[id]["i"];
                this.setCounter(i, "i");
                serverExpiryTime["c_" + id] = options;
            }
            if (campaignList[id]["c"]["hash"] !== JSON.stringify(c)) {
                delete campaignList[id]["c"];
                this.setCounter(c, "c");
                serverExpiryTime["c_" + id] = options;
            }
        } else {
            this.setCounter(i, "i");
            this.setCounter(c, "c");
        }
        serverExpiryTime["c_" + id] = options;
        this.setValue(id + ".i.hash", JSON.stringify(i), campaignList);
        this.setValue(id + ".c.hash", JSON.stringify(c), campaignList);
        VMAXSDK.FCAP.storage.setStorage("campaignList", campaignList, "local");
        VMAXSDK.FCAP.storage.setStorage("serverExpiryTime", serverExpiryTime, "local");
    },
    cleanUp: function cleanUp(option) {
        this.id = option && option["id"] ? option["id"] : "";
        this.type = option && option["type"] ? option["type"] : "";
        this.campaignList = VMAXSDK.FCAP.storage.getStorage("campaignList", "local");
        this.get = function() {
            return this.validate(this.type !== "" ? this.campaignList[this.id] : this.campaignList);
        };
        this.storeAndReturn = function() {
            if (this.id || this.type) return false;
            this.campaignList = this.get();
            VMAXSDK.FCAP.storage.setStorage("campaignList", this.campaignList, "local");
            return this.campaignList;
        };
        this.validate = function(options) {
            var currentTime = Date.parse(new Date()), campaign = options;
            if (option && !this.campaignList[this.id][this.type].hasOwnProperty("expireTime")) {
                return campaign;
            }
            if (this.type !== "") {
                for (var key in campaign[this.type]) {
                    if (currentTime > campaign[this.type]["expireTime"][key]) {
                        campaign[this.type][key] = 0;
                        delete campaign[this.type]["expireTime"][key];
                    }
                }
            } else {
                for (var id in campaign) {
                    for (var type in campaign[id]) {
                        for (var counter in campaign[id][type]) {
                            if (campaign[id][type].hasOwnProperty("expireTime") && counter.match(/^(m|h|d)$/)) {
                                if (currentTime > campaign[id][type]["expireTime"][counter]) {
                                    campaign[id][type][counter] = 0;
                                    delete campaign[id][type]["expireTime"][counter];
                                }
                            }
                        }
                    }
                }
            }
            return campaign;
        };
    },
    incrementCounter: function incrementCounter(options) {
        this.setExpiryTime = function(data) {
            if (data) {
                var val = data, expiry = {};
                if (val && val.hasOwnProperty("m")) {
                    var min = new Date();
                    expiry["m"] = min.setMinutes(min.getMinutes() + parseInt(val["m"])) - min.getSeconds() * 1e3;
                }
                if (val && val.hasOwnProperty("h")) {
                    var hour = new Date();
                    expiry["h"] = hour.setHours(hour.getHours() + parseInt(val["h"])) - (hour.getMinutes() * 60 * 1e3 + hour.getSeconds() * 1e3);
                }
                if (val && val.hasOwnProperty("d")) {
                    var date = new Date();
                    expiry["d"] = date.setDate(date.getDate() + parseInt(val["d"])) - (date.getHours() * 60 * 60 * 1e3 + date.getMinutes() * 60 * 1e3 + date.getSeconds() * 1e3);
                }
                return expiry;
            }
        };
        this.setExpiryTimeByType = function(expiryType) {
            var campaignType = localStorageServerExpiryTime["c_" + campaignId][type], getCounterValue = _defineProperty({}, expiryType, campaignType[expiryType]);
            if (getCounterValue[expiryType] != undefined || getCounterValue[expiryType] != null) {
                var counterExpiryTime = this.setExpiryTime(getCounterValue)[expiryType];
                this.setValue(campaignId + "." + type + ".expireTime." + expiryType, counterExpiryTime, campaignList);
            }
        };
        this.print = function() {
            for (var key in campaignList[campaignId][type]["expireTime"]) {}
        };
        if (options) {
            var type = options["type"], campaignList = VMAXSDK.FCAP.storage.getStorage("campaignList", "local"), localStorageServerExpiryTime = VMAXSDK.FCAP.storage.getStorage("serverExpiryTime", "local"), campaignId = options.campaignId;
            campaignList[campaignId] = new this.cleanUp({
                id: campaignId,
                type: type
            }).get();
            if (!campaignList[campaignId][type].hasOwnProperty("expireTime")) {
                campaignList[campaignId][type]["expireTime"] = this.setExpiryTime(localStorageServerExpiryTime["c_" + campaignId][type]);
            } else {
                var expiry = campaignList[campaignId][type]["expireTime"];
                if (!expiry.hasOwnProperty("m")) {
                    this.setExpiryTimeByType("m");
                }
                if (!expiry.hasOwnProperty("h")) {
                    this.setExpiryTimeByType("h");
                }
                if (!expiry.hasOwnProperty("d")) {
                    this.setExpiryTimeByType("d");
                }
            }
            this.print();
            for (var key in campaignList[campaignId][type]) {
                if (key.match(/^(m|h|d|l)$/)) {
                    campaignList[campaignId][type][key] += 1;
                }
            }
            VMAXSDK.FCAP.storage.setStorage("campaignList", campaignList, "local");
        }
    },
    getCampaignList: function getCampaignList() {
        var list = new this.cleanUp().storeAndReturn(), data = {
            i: {},
            c: {}
        };
        for (var campaign in list) {
            if (list[campaign].hasOwnProperty("i")) {
                if (list[campaign]["i"].hasOwnProperty("expireTime")) {
                    delete list[campaign]["i"]["expireTime"];
                }
                if (list[campaign]["i"].hasOwnProperty("hash")) {
                    delete list[campaign]["i"]["hash"];
                }
                data["i"][campaign] = list[campaign]["i"];
            }
            if (list[campaign].hasOwnProperty("c")) {
                if (list[campaign]["c"].hasOwnProperty("expireTime")) {
                    delete list[campaign]["c"]["expireTime"];
                }
                if (list[campaign]["c"].hasOwnProperty("hash")) {
                    delete list[campaign]["c"]["hash"];
                }
                data["c"][campaign] = list[campaign]["c"];
            }
        }
        if (Object.keys(data["i"]).length == 0) delete data["i"];
        if (Object.keys(data["c"]).length == 0) delete data["c"];
        return data;
    },
    init: function init(options) {
        if (options) {
            var pId = options["pId"];
            var type = options["type"];
            var ins_tag = document.getElementById(pId);
            if (ins_tag.hasAttribute("data-fcap")) {
                this.incrementCounter({
                    campaignId: ins_tag.getAttribute("data-fcap"),
                    type: type
                });
            }
        }
    }
};

var VmaxNativeAdFactory = {
    addLayout: VMAXSDK.nativeAdLayoutManager.addLayout.bind(VMAXSDK.nativeAdLayoutManager)
};

var VmaxAdspotSize = {
    Default: "default",
    Custom: "unknown",
    Billboard: "billboard",
    Banner: "banner"
};

var VMAXRegistry = {
    ads: {}
};

VMAXRegistry.registerAd = function(options) {
    var _options$plugin = options.plugin, plugin = _options$plugin === undefined ? false : _options$plugin, _options$name = options.name, name = _options$name === undefined ? "" : _options$name;
    VMAXRegistry.ads[name] = plugin;
    console.log(VMAXRegistry);
};

var VMAXSDK = VMAXSDK || {};

VMAXSDK.playVideo = function(containerId) {
    try {
        var isVPPPresent = VMAXSDK.hasOwnProperty("getGlobalVPP") && typeof VMAXSDK.getGlobalVPP === "function";
        if (isVPPPresent) {
            VMAXSDK.vppMap[containerId].resumeAd();
        } else {
            var contentWindow = document.getElementById(containerId).querySelector("iframe").contentWindow;
            contentWindow.flagInViewPause = false;
            contentWindow.player.resumeAd();
        }
    } catch (err) {
        console.warn("Could not pause video!", err);
    }
};

VMAXSDK.pauseVideo = function(containerId) {
    try {
        var isVPPPresent = VMAXSDK.hasOwnProperty("getGlobalVPP") && typeof VMAXSDK.getGlobalVPP === "function";
        if (isVPPPresent) {
            VMAXSDK.vppMap[containerId].pauseAd();
        } else {
            var contentWindow = document.getElementById(containerId).getElementsByTagName("iframe")[0].contentWindow;
            contentWindow.flagInViewPause = true;
            contentWindow.player.pauseAd();
        }
    } catch (err) {
        console.warn("Could not pause video!", err);
    }
};

window.inView = function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
}([ function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        };
    }
    var i = n(2), o = r(i);
    t.exports = o["default"];
}, function(t, e) {
    function n(t) {
        var e = typeof t === "undefined" ? "undefined" : _typeof(t);
        return null != t && ("object" == e || "function" == e);
    }
    t.exports = n;
}, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        };
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(9), o = r(i), u = n(3), f = r(u), s = n(4), c = function c() {
        if ("undefined" != typeof window) {
            var t = 100, e = [ "scroll", "resize", "load", "animationstart", "animationend", "transitionstart", "transitionend", "touchstart", "touchend", "touchmove", "touchcancel", "gesturestart", "gestureend", "gesturechange", "orientationchange", "mousewheel" ], n = {
                history: []
            }, r = {
                offset: {},
                threshold: 0,
                test: s.inViewport
            }, i = (0, o["default"])(function() {
                n.history.forEach(function(t) {
                    n[t].check();
                });
            }, t);
            e.forEach(function(t) {
                return addEventListener(t, i);
            }), window.MutationObserver && addEventListener("DOMContentLoaded", function() {
                new MutationObserver(i).observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                });
            });
            var u = function u(t) {
                if ("string" == typeof t) {
                    var e = [].slice.call(document.querySelectorAll(t));
                    return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), 
                    n.history.push(t)), n[t];
                }
            };
            return u.offset = function(t) {
                if (void 0 === t) return r.offset;
                var e = function e(t) {
                    return "number" == typeof t;
                };
                return [ "top", "right", "bottom", "left" ].forEach(e(t) ? function(e) {
                    return r.offset[e] = t;
                } : function(n) {
                    return e(t[n]) ? r.offset[n] = t[n] : null;
                }), r.offset;
            }, u.threshold = function(t) {
                return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
            }, u.test = function(t) {
                return "function" == typeof t ? r.test = t : r.test;
            }, u.is = function(t) {
                return r.test(t, r);
            }, u.offset(0), u;
        }
    };
    e["default"] = c();
}, function(t, e) {
    "use strict";
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
        };
    }(), i = function() {
        function t(e, r) {
            n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
                enter: [],
                exit: []
            }, this.singles = {
                enter: [],
                exit: []
            };
        }
        return r(t, [ {
            key: "check",
            value: function value() {
                var t = this;
                try {
                    return this.elements.forEach(function(e) {
                        var n = t.options.test(e, t.options), r = t.current.indexOf(e), i = r > -1, o = n && !i, u = !n && i;
                        o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
                    }), this;
                } catch (t) {
                    return !1;
                }
            }
        }, {
            key: "on",
            value: function value(t, e) {
                return this.handlers[t].push(e), this;
            }
        }, {
            key: "once",
            value: function value(t, e) {
                return this.singles[t].unshift(e), this;
            }
        }, {
            key: "emit",
            value: function value(t, e) {
                for (;this.singles[t].length; ) {
                    this.singles[t].pop()(e);
                }
                for (var n = this.handlers[t].length; --n > -1; ) {
                    this.handlers[t][n](e);
                }
                return this;
            }
        } ]), t;
    }();
    e["default"] = function(t, e) {
        return new i(t, e);
    };
}, function(t, e) {
    "use strict";
    function n(t, e) {
        var n = t.getBoundingClientRect(), r = n.top, i = n.right, o = n.bottom, u = n.left, f = n.width, s = n.height, c = {
            t: o,
            r: window.innerWidth - u,
            b: window.innerHeight - r,
            l: i
        }, a = {
            x: e.threshold * f,
            y: e.threshold * s
        };
        return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inViewport = n;
}, function(t, e) {
    (function(e) {
        var n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.Object === Object && e;
        t.exports = n;
    }).call(e, function() {
        return this;
    }());
}, function(t, e, n) {
    var r = n(5), i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self, o = r || i || Function("return this")();
    t.exports = o;
}, function(t, e, n) {
    function r(t, e, n) {
        function r(e) {
            var n = x, r = m;
            return x = m = void 0, E = e, w = t.apply(r, n);
        }
        function a(t) {
            return E = t, O = setTimeout(h, e), M ? r(t) : w;
        }
        function l(t) {
            var n = t - j, r = t - E, i = e - n;
            return _ ? c(i, g - r) : i;
        }
        function d(t) {
            var n = t - j, r = t - E;
            return void 0 === j || n >= e || n < 0 || _ && r >= g;
        }
        function h() {
            var t = o();
            return d(t) ? v(t) : void (O = setTimeout(h, l(t)));
        }
        function v(t) {
            return O = void 0, T && x ? r(t) : (x = m = void 0, w);
        }
        function p() {
            void 0 !== O && clearTimeout(O), E = 0, x = j = m = O = void 0;
        }
        function y() {
            return void 0 === O ? w : v(o());
        }
        function b() {
            var t = o(), n = d(t);
            if (x = arguments, m = this, j = t, n) {
                if (void 0 === O) return a(j);
                if (_) return O = setTimeout(h, e), r(j);
            }
            return void 0 === O && (O = setTimeout(h, e)), w;
        }
        var x, m, g, w, O, j, E = 0, M = !1, _ = !1, T = !0;
        if ("function" != typeof t) throw new TypeError(f);
        return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, 
        T = "trailing" in n ? !!n.trailing : T), b.cancel = p, b.flush = y, b;
    }
    var i = n(1), o = n(8), u = n(10), f = "Expected a function", s = Math.max, c = Math.min;
    t.exports = r;
}, function(t, e, n) {
    var r = n(6), i = function i() {
        return r.Date.now();
    };
    t.exports = i;
}, function(t, e, n) {
    function r(t, e, n) {
        var r = !0, f = !0;
        if ("function" != typeof t) throw new TypeError(u);
        return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), 
        i(t, e, {
            leading: r,
            maxWait: e,
            trailing: f
        });
    }
    var i = n(7), o = n(1), u = "Expected a function";
    t.exports = r;
}, function(t, e) {
    function n(t) {
        return t;
    }
    t.exports = n;
} ]);

(function() {
    function n(n, t) {
        return n.push.apply(n, t), n;
    }
    function t(n, t, r, e) {
        for (var u = n.length, o = r + (e ? 1 : -1); e ? o-- : ++o < u; ) {
            if (t(n[o], o, n)) return o;
        }
        return -1;
    }
    function r(n) {
        return function(t) {
            return null == t ? nt : t[n];
        };
    }
    function e(n) {
        return function(t) {
            return null == n ? nt : n[t];
        };
    }
    function u(n, t, r, e, u) {
        return u(n, function(n, u, o) {
            r = e ? (e = false, n) : t(r, n, u, o);
        }), r;
    }
    function o(n, t) {
        return E(t, function(t) {
            return n[t];
        });
    }
    function i(n, t) {
        return function(r) {
            return n(t(r));
        };
    }
    function c(n) {
        return n instanceof f ? n : new f(n);
    }
    function(){}
    function a(n, t, r) {
        var e = n[t];
        Rt.call(n, t) && wn(e, r) && (r !== nt || t in n) || l(n, t, r);
    }
    function l(n, t, r) {
        n[t] = r;
    }
    function p(n, t, r) {
        if (typeof n != "function") throw new TypeError(rt);
        return setTimeout(function() {
            n.apply(nt, r);
        }, t);
    }
    function s(n, t) {
        var r = true;
        return Ut(n, function(n, e, u) {
            return r = !!t(n, e, u);
        }), r;
    }
    function h(n, t, r) {
        for (var e = -1, u = n.length; ++e < u; ) {
            var o = n[e], i = t(o);
            if (null != i && (c === nt ? i === i && true : r(i, c))) var c = i, f = o;
        }
        return f;
    }
    function v(n, t) {
        var r = [];
        return Ut(n, function(n, e, u) {
            t(n, e, u) && r.push(n);
        }), r;
    }
    function y(t, r, e, u, o) {
        var i = -1, c = t.length;
        for (e || (e = H), o || (o = []); ++i < c; ) {
            var f = t[i];
            r > 0 && e(f) ? r > 1 ? y(f, r - 1, e, u, o) : n(o, f) : u || (o[o.length] = f);
        }
        return o;
    }
    function g(n, t) {
        return n && Vt(n, t, cr);
    }
    function _(n, t) {
        return v(t, function(t) {
            return Tn(n[t]);
        });
    }
    function b(n) {
        return W(n);
    }
    function j(n, t) {
        return n > t;
    }
    function d(n) {
        return In(n) && b(n) == ht;
    }
    function m(n, t, r, e, u) {
        return n === t || (null == n || null == t || !In(n) && !In(t) ? n !== n && t !== t : O(n, t, r, e, m, u));
    }
    function O(n, t, r, e, u, o) {
        var i = Zt(n), c = Zt(t), f = i ? lt : b(n), a = c ? lt : b(t);
        f = f == at ? bt : f, a = a == at ? bt : a;
        var l = f == bt, p = a == bt, s = f == a;
        o || (o = []);
        var h = Lt(o, function(t) {
            return t[0] == n;
        }), v = Lt(o, function(n) {
            return n[0] == t;
        });
        if (h && v) return h[1] == t;
        if (o.push([ n, t ]), o.push([ t, n ]), s && !l) {
            var y = i ? J(n, t, r, e, u, o) : M(n, t, f, r, e, u, o);
            return o.pop(), y;
        }
        if (!(r & et)) {
            var g = l && Rt.call(n, "__wrapped__"), _ = p && Rt.call(t, "__wrapped__");
            if (g || _) {
                var j = g ? n.value() : n, d = _ ? t.value() : t, y = u(j, d, r, e, o);
                return o.pop(), y;
            }
        }
        if (!s) return false;
        var y = U(n, t, r, e, u, o);
        return o.pop(), y;
    }
    function x(n) {
        return In(n) && b(n) == dt;
    }
    function w(n) {
        return typeof n == "function" ? n : null == n ? Hn : ((typeof n === "undefined" ? "undefined" : _typeof(n)) == "object" ? N : r)(n);
    }
    function A(n, t) {
        return n < t;
    }
    function E(n, t) {
        var r = -1, e = An(n) ? Array(n.length) : [];
        return Ut(n, function(n, u, o) {
            e[++r] = t(n, u, o);
        }), e;
    }
    function N(n) {
        var t = Gt(n);
        return function(r) {
            var e = t.length;
            if (null == r) return !e;
            for (r = Object(r); e--; ) {
                var u = t[e];
                if (!(u in r && m(n[u], r[u], et | ut))) return false;
            }
            return true;
        };
    }
    function k(n, t) {
        return n = Object(n), gn(t, function(t, r) {
            return r in n && (t[r] = n[r]), t;
        }, {});
    }
    function F(n, t) {
        return Kt(X(n, t, Hn), n + "");
    }
    function T(n, t, r) {
        var e = -1, u = n.length;
        t < 0 && (t = -t > u ? 0 : u + t), r = r > u ? u : r, r < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, 
        t >>>= 0;
        for (var o = Array(u); ++e < u; ) {
            o[e] = n[e + t];
        }
        return o;
    }
    function S(n) {
        return T(n, 0, n.length);
    }
    function B(n, t) {
        var r;
        return Ut(n, function(n, e, u) {
            return r = t(n, e, u), !r;
        }), !!r;
    }
    function I(t, r) {
        var e = t;
        return gn(r, function(t, r) {
            return r.func.apply(r.thisArg, n([ t ], r.args));
        }, e);
    }
    function R(n, t) {
        if (n !== t) {
            var r = n !== nt, e = null === n, u = n === n, o = false, i = t !== nt, c = null === t, f = t === t, a = false;
            if (!c && !a && !o && n > t || o && i && f && !c && !a || e && i && f || !r && f || !u) return 1;
            if (!e && !o && !a && n < t || a && r && u && !e && !o || c && r && u || !i && u || !f) return -1;
        }
        return 0;
    }
    function $(n, t, r, e) {
        var u = !r;
        r || (r = {});
        for (var o = -1, i = t.length; ++o < i; ) {
            var c = t[o], f = e ? e(r[c], n[c], c, r, n) : nt;
            f === nt && (f = n[c]), u ? l(r, c, f) : a(r, c, f);
        }
        return r;
    }
    function q(n) {
        return F(function(t, r) {
            var e = -1, u = r.length, o = u > 1 ? r[u - 1] : nt;
            for (o = n.length > 3 && typeof o == "function" ? (u--, o) : nt, t = Object(t); ++e < u; ) {
                var i = r[e];
                i && n(t, i, e, o);
            }
            return t;
        });
    }
    function D(n, t) {
        return function(r, e) {
            if (null == r) return r;
            if (!An(r)) return n(r, e);
            for (var u = r.length, o = t ? u : -1, i = Object(r); (t ? o-- : ++o < u) && e(i[o], o, i) !== false; ) {}
            return r;
        };
    }
    function P(n) {
        return function(t, r, e) {
            for (var u = -1, o = Object(t), i = e(t), c = i.length; c--; ) {
                var f = i[n ? c : ++u];
                if (r(o[f], f, o) === false) break;
            }
            return t;
        };
    }
    function z(n) {
        return function(){};
    }
    function C(n) {
        return function(t, r, e) {
            var u = Object(t);
            if (!An(t)) {
                var o = w(r, 3);
                t = cr(t), r = function r(n) {
                    return o(u[n], n, u);
                };
            }
            var i = n(t, r, e);
            return i > -1 ? u[o ? t[i] : i] : nt;
        };
    }
    function G(n, t, r, e) {
        function u() {
            for (var t = -1, c = arguments.length, f = -1, a = e.length, l = Array(a + c), p = this && this !== kt && this instanceof u ? i : n; ++f < a; ) {
                l[f] = e[f];
            }
            for (;c--; ) {
                l[f++] = arguments[++t];
            }
            return p.apply(o ? r : this, l);
        }
        if (typeof n != "function") throw new TypeError(rt);
        var o = t & ot, i = z(n);
        return u;
    }
    function J(n, t, r, e, u, o) {
        var i = r & et, c = n.length, f = t.length;
        if (c != f && !(i && f > c)) return false;
        for (var a = -1, l = true, p = r & ut ? [] : nt; ++a < c; ) {
            var s, h = n[a], v = t[a];
            if (s !== nt) {
                if (s) continue;
                l = false;
                break;
            }
            if (p) {
                if (!B(t, function(n, t) {
                    if (!un(p, t) && (h === n || u(h, n, r, e, o))) return p.push(t);
                })) {
                    l = false;
                    break;
                }
            } else if (h !== v && !u(h, v, r, e, o)) {
                l = false;
                break;
            }
        }
        return l;
    }
    function M(n, t, r, e, u, o, i) {
        switch (r) {
          case st:
          case ht:
          case _t:
            return wn(+n, +t);

          case vt:
            return n.name == t.name && n.message == t.message;

          case dt:
          case mt:
            return n == t + "";
        }
        return false;
    }
    function U(n, t, r, e, u, o) {
        var i = r & et, c = cr(n), f = c.length;
        if (f != cr(t).length && !i) return false;
        for (var a = f; a--; ) {
            var l = c[a];
            if (!(i ? l in t : Rt.call(t, l))) return false;
        }
        for (var p = true, s = i; ++a < f; ) {
            l = c[a];
            var h, v = n[l], y = t[l];
            if (!(h === nt ? v === y || u(v, y, r, e, o) : h)) {
                p = false;
                break;
            }
            s || (s = "constructor" == l);
        }
        if (p && !s) {
            var g = n.constructor, _ = t.constructor;
            g != _ && "constructor" in n && "constructor" in t && !(typeof g == "function" && g instanceof g && typeof _ == "function" && _ instanceof _) && (p = false);
        }
        return p;
    }
    function V(n) {
        return Kt(X(n, nt, tn), n + "");
    }
    function H(n) {
        return Zt(n) || Yt(n);
    }
    function K(n, t) {
        var r = typeof n === "undefined" ? "undefined" : _typeof(n);
        return t = null == t ? ft : t, !!t && ("number" == r || "symbol" != r && wt.test(n)) && n > -1 && n % 1 == 0 && n < t;
    }
    function L(n, t, r) {
        if (!Bn(r)) return false;
        var e = typeof t === "undefined" ? "undefined" : _typeof(t);
        return !!("number" == e ? An(r) && K(t, r.length) : "string" == e && t in r) && wn(r[t], n);
    }
    function Q(n) {
        var t = [];
        if (null != n) for (var r in Object(n)) {
            t.push(r);
        }
        return t;
    }
    function W(n) {
        return qt.call(n);
    }
    function X(n, t, r) {
        return t = Jt(t === nt ? n.length - 1 : t, 0), function() {
            for (var e = arguments, u = -1, o = Jt(e.length - t, 0), i = Array(o); ++u < o; ) {
                i[u] = e[t + u];
            }
            u = -1;
            for (var c = Array(t + 1); ++u < t; ) {
                c[u] = e[u];
            }
            return c[t] = r(i), n.apply(this, c);
        };
    }
    function Y(n) {
        return v(n, Boolean);
    }
    function Z() {
        var t = arguments.length;
        if (!t) return [];
        for (var r = Array(t - 1), e = arguments[0], u = t; u--; ) {
            r[u - 1] = arguments[u];
        }
        return n(Zt(e) ? S(e) : [ e ], y(r, 1));
    }
    function nn(n, r, e) {
        var u = null == n ? 0 : n.length;
        if (!u) return -1;
        var o = null == e ? 0 : rr(e);
        return o < 0 && (o = Jt(u + o, 0)), t(n, w(r, 3), o);
    }
    function tn(n) {
        return (null == n ? 0 : n.length) ? y(n, 1) : [];
    }
    function rn(n) {
        return (null == n ? 0 : n.length) ? y(n, ct) : [];
    }
    function en(n) {
        return n && n.length ? n[0] : nt;
    }
    function un(n, t, r) {
        var e = null == n ? 0 : n.length;
        r = typeof r == "number" ? r < 0 ? Jt(e + r, 0) : r : 0;
        for (var u = (r || 0) - 1, o = t === t; ++u < e; ) {
            var i = n[u];
            if (o ? i === t : i !== i) return u;
        }
        return -1;
    }
    function on(n) {
        var t = null == n ? 0 : n.length;
        return t ? n[t - 1] : nt;
    }
    function cn(n, t, r) {
        var e = null == n ? 0 : n.length;
        return t = null == t ? 0 : +t, r = r === nt ? e : +r, e ? T(n, t, r) : [];
    }
    function fn(n) {
        var t = c(n);
        return t.__chain__ = true, t;
    }
    function an(n, t) {
        return t(n), n;
    }
    function ln(n, t) {
        return t(n);
    }
    function pn() {
        return I(this.__wrapped__, this.__actions__);
    }
    function sn(n, t, r) {
        return t = r ? nt : t, s(n, w(t));
    }
    function hn(n, t) {
        return v(n, w(t));
    }
    function vn(n, t) {
        return Ut(n, w(t));
    }
    function yn(n, t) {
        return E(n, w(t));
    }
    function(){}