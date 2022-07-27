/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 * Copyright 2015 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

(function ($) {
    $.uaMatch = function( ua ) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) || [];
        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };
    // Not clobbering any existing $.browser
    if ( !$.browser ) {
        var
            matched = $.uaMatch( navigator.userAgent ),
            browser = {};
        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
        }
        // Chrome is Webkit, but Webkit is also Safari.
        if ( browser.chrome ) {
            browser.webkit = true;
        } else if ( browser.webkit ) {
            browser.safari = true;
        }
        $.browser = browser;
    }
})($);
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/


/**
 * @package xfalib.ut.Class
 */
(function(_, xfalib){

    xfalib.ns = xfalib.ns || function (namespaceString) {
        var parts = namespaceString.split('.'),
            parent = window,
            currentPart = '';

        for(var i = 0, length = parts.length; i < length; i++) {
            currentPart = parts[i];
            parent[currentPart] = parent[currentPart] || {};
            parent = parent[currentPart];
        }

        return parent;
    };

    var Class = xfalib.ut.Class = function(options) {
        this.options = _.extend({}, this.options, options);
        if(!this.options.jsonModel)
            this.options.jsonModel = {};
        //For perf reason, we are setting jsonModel as direct property instead of using property descriptor
        this.jsonModel = this.options.jsonModel;
        this.initialize.apply(this, arguments);
    };

    _.extend(Class.prototype, {
        initialize : function(){
        },

        xfaUtil :function(){
          return xfalib.ut.XfaUtil.prototype;
        },

        copyArray : function(src,dst,options) {
            var keepReference = this.getOrElse(options, "keepReference", true);
            if(src instanceof Array)
            {
                for (var i = 0;i<src.length;i++)
                {
                    var obj;
                    if(src[i] instanceof Array)
                    {
                        obj = this._createDestination(dst, i, keepReference, []);
                        this.copyArray(src[i],obj,options);
                    }
                    else if(typeof src[i] == "object")
                    {
                        obj = this._createDestination(dst, i, keepReference, {});
                        this.copyObject(src[i],obj,options);
                    } else {
                        obj = src[i];
                    }
                    dst[i] = obj;
                }
                if(dst.length > src.length){
                    dst.splice(src.length, (dst.length - src.length));  //Remove ths rest of the extra destination items
                }
            }
        },

        /**
         *
         * @param src
         * @param dst
         * @param options e.g. {keepReference: true, exceptions:["htmlId"], transformMaps: {"dataId", function(src, options){ return src "33"+src; }}}
         */
        copyObject : function(src,dst,options) {
            var keepReference = this.getOrElse(options, "keepReference", true);
            var exceptions = this.getOrElse(options, "exceptions", []);
            var transformMaps = this.getOrElse(options, "transformMaps", {});
            if(typeof src == "object") {
                for (var child in src) {
                    if(exceptions.indexOf(child) == -1) {
                        if(src[child] instanceof Array) {
                            dst[child] = this._createDestination(dst, child, keepReference, []);
                            this.copyArray(src[child],dst[child],options);
                        }
                        else if(typeof src[child] == "object" && src[child] != null) {
                            dst[child] = this._createDestination(dst, child, keepReference, {});
                            this.copyObject(src[child],dst[child],options);
                        }
                        else{
                            if(!_.isUndefined(transformMaps[child])){
                                dst[child] = transformMaps[child](src[child], options, src);
                            }
                            else
                                dst[child] = src[child];
                        }
                    }
                }
            }
        },

        _createDestination : function(obj, property, keepReference, defaultValue) {
            if(!keepReference)
                return defaultValue;
            else if(_.isObject(obj) && !obj.hasOwnProperty(property))
                return defaultValue;
            else
                return obj[property] || defaultValue ;  //Would handle both, Array and objects
        },

        /**
         * will replace functions in the object with noop function based on a predicate function's result.
         * If no predicate is passed all functions will be disabled.
         * Warning once disabled object cant be re-enabled.
         *
         * sample predicate to disable all 'public' functions : function (funcName) { return funcName[0] != '_'}
         *
         * @param predicate
         * @private
         */
        _disableFunctions: function (predicate) {
            var noop = function () {},
                disableAll = !_.isFunction(predicate);

            _.each(_.functions(this), function (funcName) {
                if (disableAll || predicate(funcName)) {
                    this[funcName] = noop;
                }
            }, this);
        },

        /**
         * getOrElse can take multiple arguments.
         * arg1(obj): base Object
         * arg2: string representing property chain where properties are concatenated via dot
         * arg3: default value
         **/

        getOrElse : function(obj){
            var currObject = obj;
            if(arguments.length < 2)
                return currObject;
            else if(arguments.length == 2) {
                if(!_.isUndefined(currObject)){
                    return currObject;
                } else {
                    return _.clone(arguments[1]);
                }
            }
            else {
                var propChain = (arguments[1] || "").split(".");
                var defaultValue = arguments[2];
                _.each(propChain, function(prop){
                    if(_.isObject(currObject))
                        currObject = currObject[prop];
                    else
                        currObject = undefined;
                }, this);

                if(!_.isUndefined(currObject))
                    return currObject;
                else {
                    return _.clone(defaultValue) ; //May have to do deep clone in future. TODO: support for conditional clone
                }
            }
        },

        jqId: function (id) {
            return xfalib.ut.XfaUtil.prototype.jqId(id);
        },

        logger : function(){
            return this.xfaUtil().getLogger();
        },

        validateInput : function(param, dataType,fallback){
        	if(typeof param !== "undefined" && param !== null) {
        		switch(dataType) {
        		case "string":
        			param = param+"";
        			break;
        		case "object":
        			if(typeof param !== "object")
        				param = fallback;
        			break;
        	    case "integer":
                    param = parseInt(param);
                    if(isNaN(param))
                        param = fallback;
                    break;
               case "measurement":
                     break;
        		default:
        			if(dataType instanceof Array) {
                        if(!~dataType.indexOf(param))
                            param = fallback
                    }
        		}
        	}
        	return param;
        }

    });

    _.extend(Class, {
        defineProps : function(propsMap){
            _.each(propsMap, function(propDesc, propName){
                //Check property can be resolved using resolveNode
                if(propDesc.resolve) {
                    //Check whether prototype owns the object resolveProperties
                    if(!this.prototype.hasOwnProperty("resolveProperties")) {
                        //check whether prototype inherits the object resolveProperties
                        if(this.prototype.resolveProperties) {
                            //clone the object since we do not want to modify parent's prototype
                            this.prototype.resolveProperties = _.clone(this.prototype.resolveProperties);
                        }
                        else
                            this.prototype.resolveProperties = [];
                    }
                    this.prototype.resolveProperties.push(propName)
                }
                Object.defineProperty(this.prototype, propName, propDesc);

            }, this);
        },
        extend : function(props){
            var child = inherits(this, props);
            child.extend = this.extend;
            return child;
        },
        addMixins : function(mixinBakers){
            if(!_.isArray(mixinBakers)){
                mixinBakers = [mixinBakers];
            }
            _.each(mixinBakers, function(mixinBaker){
                if(mixinBaker.normalProperties){
                    _.extend(this.prototype, mixinBaker.normalProperties);
                }
                if(mixinBaker.propertyDescriptors){
                    this.defineProps(mixinBaker.propertyDescriptors);
                }
            }, this);
        }
    });

    // Shared empty constructor function to aid in prototype-chain creation.
    var ctor = function(){};

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    function inherits(parent, protoProps, staticProps) {
        var child;
        var _super = parent.prototype;
        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ parent.apply(this, arguments); };
        }

        // Inherit class (static) properties from parent.
        _.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child._super = parent.prototype;
        child._superClass = parent;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) { //_.extend(child.prototype, protoProps);
            // Copy the properties over onto the new prototype
            for (var name in protoProps) {
                if(name == "_defaults"){
                    protoProps[name] = _.extend({}, _super[name], protoProps[name]);
                }
                child.prototype[name] = protoProps[name];
            }
        }


        // Add static properties to the constructor function, if supplied.
        if (staticProps) _.extend(child, staticProps);

        // Correctly set child's `prototype.constructor`.
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is needed later.
        child.__super__ = parent.prototype;

        return child;
    };
})(_, window.xfalib);
/**
 * Created by vdua on 2/18/2015.
 */
(function (_, xfalib) {
    var XMLUtils = {
        dataSom2xpath: function (dataSom) {
            var xpath = "";

            if (!_.isEmpty(dataSom)) {
                // any dot preceded by ], takes care of dot-s in name,
                // and remove constant prefix "xfa[0].datasets[0].data[0]" and form root name, then join using '/'
                _.each(dataSom.split(/\]\./).slice(4),
                    function (part) {
                        var openBracketPos = part.lastIndexOf('[');
                        xpath += part.substring(0, openBracketPos + 1) +
                            (parseInt(part.substring(openBracketPos + 1)) + 1) + // increment index by 1 for xpath query
                            "]/";
                    });

                if (_.isEmpty(xpath)) {
                    xpath = dataSom;
                } else if (xpath[xpath.length - 1] === '/') {
                    xpath = xpath.slice(0, -1);
                }
            }

            return xpath;
        },

        /**
         * Converts an xPathResult of type iterator to an array
         * @param xPathResult
         * @returns {Array}
         */
        iteratorToArray: function (xPathResult) {
            var result = [];
            var node = xPathResult.iterateNext();
            while (node != null) {
                result.push(node);
                node = xPathResult.iterateNext();
            }
            return result;
        },
        /**
         * Wrapper API for document.evaluate to provide cross-browser support.
         * @param xpath
         * @param node
         * @param nsResolver
         * @param resultType
         * @param result
         * @returns {Object|*}
         */
        evaluateXPath: function (xpath, node, nsResolver, resultType, result) {
            try {
                if(_.isEmpty(xpath) || !_.isString(xpath) || !(node instanceof Node)) {
                    return null;
                }

                if (_.isUndefined(document.evaluate)) {
                    wgxpath.install();
                }
                var documentToSearch = node instanceof Document ? node : node.ownerDocument,
                    documentToEval = documentToSearch.evaluate ? documentToSearch : document;
                xpath = this.sanitizeXPath(xpath);

                return documentToEval.evaluate(xpath, node, nsResolver, resultType, result);

            } catch (exception) {
                xfalib.ut.XfaUtil.prototype.getLogger().error("Could not evaluate xpath: " + xpath  + exception);

            }

        },
         /**
         *Removes all [*] other than ['numeric'] from xpath
         *@param xpath
         *@returns xpath after removing "[*]"
         */
         sanitizeXPath: function(xpath) {
             var xpathArray=xpath.split("/"),
                 resultXpath = _.map(xpathArray, function (path) {
                 return path.replace(/\[(.*\D+.*)\]|\[\]/g,"");
             }).join("/");
             return resultXpath;
         },

        /**
         * Creates all the Elements (if they don't exist) in the xpath leading to the node being searched for in the
         * xpath relative to the element. Optionally creates the node as well if bParentsOnly is false
         * @param xpath
         * @param element
         * @param bParentsOnly whether to create only the parents or the node as well
         * @returns node that is being represented by the xpath relative to the element.
         */
        createElementsFromXPath: function (xpath, element, bParentsOnly) {
            if (xpath != null || element != null) {
                var parts = xpath.split("/"),
                    actualParts = bParentsOnly ? _.initial(parts) : parts,
                    el = element;
                _.each(actualParts, function (part, index) {
                    var som = part.match(/^([^[]+)(\[(\d+)\])?/),
                        childEl;
                    if (som == null) {
                        xfalib.ut.XfaUtil.prototype.getLogger().error("Unsupported expression in Bindref " + part);
                        return null;
                    }
                    //only the last element can be attribute
                    childEl = this.findOrCreateElement(part, el, index === actualParts.length - 1);
                    el = childEl;
                }, this);
                return el;
            }
            return null;
        },

        /**
         * Form an xpath part returns the index as well as the tagName. Index can be * as well
         * @param xpathName
         * @returns {*}
         * @private
         */
        _getElementNameAndIndexFromXPathPart: function (xpathName) {
            var som  =  xpathName.match(/^([^[]+)(?:\[(\d+|\*)\])?/);
            if (som !== null) {
                return {
                    name: som[1],
                    index: som[2] || 0
                };
            }
            return null;
        },

        /**
         * create an element with the tagName elementName for the ownerDocument of element.
         * @param elementName
         * @param element
         * @returns {HTMLElement}
         */
        createElement: function (elementName, element) {
            var el = element.ownerDocument.createElement(elementName);
            return el;
        },

        /**
         * Searches for the nodeXpath relative to element. If it doesn't exists creates it and returns the node
         * @param element
         * @param nodeXpath
         * @param bAttribute if true then check for attribute otherwise not.
         * @returns {Node|*}
         */
        findOrCreateElement: function (nodeXpath, element, bAttribute) {
            try {
                if (element == null) {
                    return null;
                }
                var result = this.evaluateXPath(nodeXpath, element, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null),
                    el = result.iterateNext(),
                    res;
                if (el == null) {
                    res = this._getElementNameAndIndexFromXPathPart(nodeXpath);
                    if (res != null) {
                        if (bAttribute && res.name.match(/^@/)) {
                            var attrName = res.name.replace(/^@/, "");
                            el = element.ownerDocument.createAttribute(attrName);
                            element.setAttributeNode(el);
                        } else {
                            el = element.ownerDocument.createElement(res.name);
                            element.appendChild(el);
                        }
                    }
                }
                return el;

            } catch (exception) {
                xfalib.ut.XfaUtil.prototype.getLogger().error("Following exception "
                    +  "occurred while executing findOrCreateElement " + exception);
            }

        },

        /**
         * Returns the Root Form Elment from the xmlDocumentElement
         * @param xmlDocumentElement It can be a document or Element. If the root element is xdp element, it returns
         *        the grand grand child of that element. otherwise the root element is returned. The root
         *        Element can be either the element itself or documentElement of the element.
         */
        getXFARootFormElementFromXML: function (xmlDocumentElement) {
            if(_.isUndefined(document.evaluate)) {
                wgxpath.install();
            }
            var isElement = xmlDocumentElement instanceof Element,
                docElemName = isElement ? xmlDocumentElement.nodeName : xmlDocumentElement.documentElement.nodeName,
                rootElement = isElement ? xmlDocumentElement : xmlDocumentElement.documentElement,
                nodeList;

            if ("xdp:xdp" === docElemName || "xdp" === docElemName) {
                if (xfalib.ut.XfaUtil.prototype.isIE()) {
                    //IE doesn't support evaluating namespace elements
                    var datasets = rootElement.firstElementChild,
                        data = datasets.firstElementChild;
                    rootElement = data.firstElementChild;
                } else {
                    // assumption is that the xml will be of format <xdp><datasets><data><form1>
                    // TODO: change first * to xfa:datasets
                    nodeList = this.evaluateXPath("*/xfa:data/*", rootElement, formBridge.nsResolver,
                                            XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                    rootElement = nodeList.iterateNext();
                }
            }
            return rootElement;
        },

        /**
         * Returns an object containing the prefix and namespaces present in the rootElement. For default namespace the
         * prefix is "_default"
         * @param rootElement {Element} xml element which has to be looked for namespaces
         * @returns {object} object whose keys are the prefix and values are the namespace
         */
        getNamespaces: function (rootElement) {
            var namespaces = {
                "_default" : null
            };
            _.each(rootElement.attributes, function (attr) {
                var name = attr.name,
                    parsedAttrName = name.match(/^xmlns(?:\:(.*))?/),
                    isNamespace = parsedAttrName != null,
                    namespaceName = isNamespace ? parsedAttrName[1] || "_default" : null;
                if (namespaceName) {
                    namespaces[namespaceName] = attr.value;
                }
            });
            return namespaces;
        },

        /**
         * Returns a namespace resolver given a element. The nsResolver returns the namespace given a prefix by
         * using the namespaces mentioned in the element.
         * @param rootElement element from which to create the nsResolver
         * @returns {function} the function returns the namespace given a prefix.
         */
        getNsResolver: function (rootElement) {
            var namespaces = this.getNamespaces(rootElement),
                nsResolver = (function (namespaces) {
                    return function (nsPrefix) {
                        var namespace = formBridge.nsResolver(nsPrefix) || namespaces[nsPrefix];
                        return namespace;
                    };
                }(namespaces));
            return nsResolver;
        },

        /**
         * Removes default namespaces from xml, basically the namespace defined as xmlns="some namespace". The
         * side-effect of the API is it removes the string "xmlns='some namespace'" from any attribute value as well.
         * @param xml {string}
         * @returns {string}
         */
        removeDefaultNamespace: function (xml) {
            var stringRegex = "(\\s+)" + // any number of spaces
                             "(xmlns=" + // then xmlns=
                            "('[^']*'|\"[^\"]*\"))" + // then value in single quotes ('[^']') or
                                                    //                 double quotes ("[^"]")
                            "(?=[^<>]*>)",  // followed by closing tag (implies attribute) and before another
                                           // opening tag(implies text)
                regex = new RegExp(stringRegex, "g");
            return xml.replace(regex, "$1");
        }
    };
    xfalib.ut.XMLUtils = XMLUtils;
}(_, xfalib));
/**
 * @package xfalib.ut.Logger
 * @import xfalib.ut.Class
 */

(function(_, xfalib, $){
    var categoryAcronyms = {
                            "a": "xfa",
                            "b": "xfaView",
                            "c": "xfaPerf"
        },
        loggerTypes = ["off", "console", "server", "consoleServer"];
    var Logger = xfalib.ut.Logger = xfalib.ut.Class.extend({

//      Count of log messages so far.
        LOG_COUNT : {
            level : {
                "FATAL" : 0,
                "ERROR" : 0,
                "WARN" : 0,
                "INFO" : 0,
                "DEBUG" : 0,
                "TRACE" : 0,
                "ALL" : 0
            },
            category : {
                "xfa" : 0,
                "xfaView" : 0,
                "xfaPerf" : 0,
                "Unknown" : 0
           }
        },

        /**
         * Log level to turn logging off (default).
         * @static
         * @final
         * @type Number
         */
        OFF : 0,

        /**
         * Log level for fatal error messages.
         * @static
         * @final
         * @type Number
         */
        FATAL : 1,

        /**
         * Log level for error messages.
         * @static
         * @type Number
         * @final
         */
        ERROR : 2,

        /**
         * Log level for warning messages.
         * @static
         * @type Number
         * @final
         */
        WARN : 3,

        /**
         * Log level for info messages.
         * @static
         * @type Number
         * @final
         */
        INFO : 4,

        /**
         * Log level for debug messages.
         * @static
         * @type Number
         * @final
         */
        DEBUG : 5,

        /**
         * Log level for trace messages.
         * @static
         * @type Number
         * @final
         */
        TRACE : 6,

        /**
         * Log level for all messages.
         * @static
         * @type Number
         * @final
         */
        ALL : 7,


        logLevelNames : ["OFF", "FATAL", "ERROR", "WARN", "INFO", "DEBUG", "TRACE", "ALL"],

        initialize : function(){
            var str = "",
                that =this;
            Logger._super.initialize.call(this);
            this.logs = {};
            this.logMessages = "";
            this.logServiceProxy = this.options.logServiceProxy;
            this.contextPath = this.options.contextPath;
            this.renderContext =  this.options.renderContext;
            if(this.jsonModel.logConfigString) {
                _.extend(this.jsonModel, this.parse(this.jsonModel.logConfigString));
            }
            _.each(this.jsonModel.category, function(category) {
                that.LOG_COUNT.category[category] = 0;
            })
        },

        /**
         * parses a log config string of the form <0,1,2,3>-<category string><level integer>-<category string><level integer>..
         * and returns an a config object that logger uses. The function is a private and not to be called outside
         * this function
         *
         * category can not contain numbers and only valid characters are a-zA-Z
         * level can be any integer.
         *
         * category string is converted into actual category for the logger by using default categoryAcronyms
         * [a : xfa, b: xfaView, c: xfaPerf} and the categoryAcronyms passed to the options while instantiating the
         * object. If not found in both the acronyms then the value category string is used as actual category
         *
         * For example for the input string 1-a9-b9-c9 return object is
         * {on: true, category: [xfa,xfaView, xfaPerf], level: [9, 9, 9], type: console}
         *
         * For the input string 1-a9-b9-c9-d9-e11 with options.categoryAcronyms {a:a, d:AF} return object is
         * {on: true, category: [xfa,xfaView, xfaPerf, AF, e], level: [9, 9, 9, 9, 11], type: console}
         */
        parse : function(configString) {
            var arr = configString.split("-"),
                logType = _.first(arr),
                logConfig = _.rest(arr),
                res = {
                    on: logType === "0" ? "false": "true",
                    category: [],
                    level:[],
                    type:loggerTypes[parseInt(logType)]
                };
           _.each(logConfig, function(item, index) {
                var config = item.match(/^([A-Za-z]+)(\d+)$/),
                    category;
                if (config && config.length === 3) {
                    category = this.getOrElse(categoryAcronyms, config[1],
                                    this.getOrElse(this.jsonModel, "categoryAcronyms." + config[1], config[1]));
                    res.category.push(category);
                    res.level.push(parseInt(config[2]));
                } else {
                    //calling this because logger is not initialized as of now
                    this.consoleHandler(this.resolveMessage(xfalib.locale.LogMessages["ALC-FRM-901-020"],
                                                    [item, configString]))
                }
            }, this);
            return res;
        },

        /*
         *
         */
        resolveMessage : function(message, snippets) {
            snippets = snippets || [];
            return message.replace(/{(\d+)}/g, function(match, number) {
                return typeof snippets[number] != 'undefined'
                    ? snippets[number]
                    : match
                    ;
            });
        },

        /**
         * Writes a message to the console.
         * @private
         * @param {Number} level The log level
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         * @return The log message
         * @type String
         */
        log : function(category, level, message, snippets) {
            var d= new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var mili = d.getMilliseconds();
            var sec = d.getSeconds();
            var min = d.getMinutes();
            var hour = d.getHours();
            var date = day + "." + month + "." + year +" " + hour + ":" + min + ":" + sec + ":" + mili;
            if(this.jsonModel && this.jsonModel.category) {
                for(var i = 0; i<this.jsonModel.category.length; i++) {
                    if (level != 0 && this.jsonModel.level[i] >= level && this.jsonModel.category[i] == category && this.jsonModel.on == "true") {

                        var resolvedMessage = message;
                        if(snippets){
                            //resolve message with snippet
                            resolvedMessage = this.resolveMessage(message, snippets);
                        }

                        var text = "";
                        text += date ;
                        text += " *" + this.logLevelNames[level] + "*";
                        text += " [" +  category + "]" ;
                        text += "  " + resolvedMessage + "\r\n" ;
                        this.logMessages += text ;
                        if(this.jsonModel.type == "console" || this.jsonModel.type == "consoleServer" ) {
                            ++this.LOG_COUNT.category[category || 'Unknown'];
                            ++this.LOG_COUNT.level[this.logLevelNames[parseInt(level) < 8? level:7]];
                            this.consoleHandler(text, level);
                        }
                    }
                }
            }
        },

        consoleHandler : function(text, level){
            if(typeof console != "undefined") {
                var levelName = typeof this.logLevelNames[level] === "string"
                    ? this.logLevelNames[level].toLowerCase()
                    : "log",
                    logFunction = console.log;
                if (typeof console[levelName] === "function") {
                    logFunction = console[levelName]
                }
                logFunction.call(console, "\n\n\n" + text);
                //Error log already shows the call stack for debugging.
                if(levelName !== "error") {
                    try {
                        n.test
                    } catch (exception) {
                        if (exception.stack) {
                            logFunction.call(console, exception.stack.replace("ReferenceError: n is not defined", ""));
                        }
                    }
                }
            }

        },

        /*
         *  Helper function to ger submit service proxy url
         */
        _getLogServiceProxyUrl: function() {
            var logServiceProxyUrl = "";
            if(this.logServiceProxy)
                logServiceProxyUrl += this.logServiceProxy;
            else //finally hard code it
                logServiceProxyUrl += ((this.contextPath && this.contextPath != "/") ? this.contextPath : "") + "/content/xfaforms/profiles/default.log.html";
            return logServiceProxyUrl;
        },

        _invokeAtServer: function(options) {
            var localSubmitUrl =  this._getLogServiceProxyUrl();
            var params = {
                    async: true,
                    url: localSubmitUrl,
                    type: 'POST',
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                    data: options
                };
            $.ajax(params);
        },

        isServerLoggingEnabled : function(){
            if((this.jsonModel.on == "true") && (this.jsonModel.type == "server" || this.jsonModel.type == "consoleServer"))
                return true;
            else
                return false;
        },

        serverHandler :function() {
            var options = {'logMessages' : this.logMessages, 'renderContext' : this.renderContext};
            this._invokeAtServer(options);
            this.logMessages = "" ;
        },

        /**
         * Writes a message to the console if log level is set to
         * {@link #FATAL} or higher.
         * @static
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         */
        fatal : function(category, message, snippets) {
            this.log(category, this.FATAL, message, snippets);
        },

        /**
         * Writes a message to the console if log level is set to
         * {@link #ERROR} or higher.
         * @static
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         */
        error : function(category, message, snippets) {
            this.log(category, this.ERROR, message, snippets);
        },

        /**
         * Writes a message to the console if log level is set to
         * {@link #WARN} or higher.
         * @static
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         */
        warn : function(category, message, snippets) {
            this.log(category, this.WARN, message, snippets);
        },

        /**
         * Writes a message to the console if log level is set to
         * {@link #INFO} or higher.
         * @static
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         */
        info : function(category, message, snippets) {
            this.log(category, this.INFO, message, snippets);
        },

        /**
         * Writes a message to the console if log level is set to
         * {@link #DEBUG} or higher.
         * @static
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         */
        debug : function(category, message, snippets) {
            this.log(category, this.DEBUG, message, snippets);
        },

        /**
         * Writes a message to the console if log level is set to
         * {@link #TRACE} or higher.
         * @static
         * @param {String} message The log message
         * @param {String/String[]} snippets (optional) The texts replacing
         *        <code>{n}</code>
         */
        trace :  function(category, message, snippets) {
            this.log(category, this.TRACE, message, snippets);
        },

        isLogEnabled : function(category, level) {
            if(this.jsonModel.on == "true") {
                var pos = this.jsonModel.category.indexOf(category) ;
                if(this.jsonModel.level[pos] >= level)
                    return true;
            }
            return false;
        }

    });
})(_, xfalib, $);
/**
 * @package xfalib.ut.EventClass
 * @import xfalib.ut.Class
 */
(function(_, xfalib){
    // Regular expression used to split event strings
    // Regular expression used to split event strings
    var eventSplitter = /\s+/;

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may bind with `on` or remove with `off` callback functions
    // to an event; trigger`-ing an event fires all callbacks in succession.
    //
    var EventClass = xfalib.ut.EventClass =  xfalib.ut.Class.extend({

        // Bind one or more space separated events, `events`, to a `listener`
        // object. The object should implement `handleEvent` function which will be
        // called on event dispatch
        on: function(event, listener, context) {

            var calls, list,retVal = true;
            var fnCallback = _.isFunction(listener) ? listener : null;
            if (!listener || (!listener["handleEvent"] && !fnCallback)) return false;

            calls = this._callbacks || (this._callbacks = {});

            list = calls[event] || (calls[event] = []);
            if(fnCallback){
                context = context || this;
                var found = _.find(list, function(callback){
                    return (callback.fn == fnCallback && callback.context == context);
                }, this);
                if(found)
                    return false;
                else {
                    list.push({"fn" : fnCallback, "context": context});
                }
            }
            else{
                if(~list.indexOf(listener))
                    return false;
                else
                    list.push(listener);
            }

            return  true;
        },

        // Remove one or many callbacks. If `listener` is null, removes all listener for the
        // event. If `events` is null, removes all bound callbacks for all events.
        off: function(events, listener, context) {
            var event, calls, node;

            // No events, or removing *all* events.
            if (!(calls = this._callbacks)) return;
            if (!(events || listener)) {
                delete this._callbacks;
                return this;
            }

            var fnCallback = _.isFunction(listener) ? listener : null;
            // Loop through the listed events and contexts and remove the required ones.
            events = events ? events.split(eventSplitter) : _.keys(calls);
            while (event = events.shift()) {
                node = calls[event];
                calls[event] = _.filter(calls[event],function(elem) {
                    if(typeof(listener) !== "undefined"){
                        if(fnCallback && elem.fn == fnCallback && elem.context == context)
                            return false;
                        else if(!fnCallback && listener === elem)
                            return false;
                    }
                    else{
                        return false;
                    }
                    return true;
                });
                if(!calls[event].length)
                    delete calls[event];
            }

            return this;
        },

        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` except the first
        trigger: function(events) {
            var event, calls, rest;
            if (!(calls = this._callbacks)) return this;
            events = events.split(eventSplitter);
            var payLoad = _.rest(arguments);
            while (event = events.shift()) {
                _.each(calls[event],function(callback) {
                    if(callback.fn && callback.context){
                        callback.fn.apply(callback.context, payLoad);
                    }
                    else if (_.isFunction(callback.handleEvent)){
                        callback.handleEvent.apply(callback, payLoad);
                    }
                });
            }

            return this;
        }

    });


})(_, xfalib);


(function (_, $, xfalib) {
    var XfaUtil = xfalib.ut.XfaUtil = function () {
        },
        registeredLocaleProperties = null,
        timeoutListenerAttached = false,
        timeouts = [],
        attachClearTimeoutListener = function (timeout) {
            timeouts.push(timeout);
            if (timeoutListenerAttached === false) {
                $(window).one("destroy.xfa", function () {
                    _.each(timeouts, function (_timeout) {
                        clearTimeout(_timeout);
                    });
                    timeouts = [];
                    timeoutListenerAttached = false;
                });
                timeoutListenerAttached = true;
            }
        };
    _.extend(XfaUtil.prototype, {
        _globalUniqueId: (new Date()).getTime(),
        logger: null,

        formScaleFactor: 1,      // used to appropriately scale the form when contained inside an iframe

        getOrElse: xfalib.ut.Class.prototype.getOrElse,
        //map of event names between XTG and Mobile Form
        //Mobile Form uses different names for some the event and let's fix those names before sending them to XTG.
        _xtgEventName: {
            "$formready": "ready",
            "$layoutready": "ready"
        },

        generateUID: function () {
            return "UID" + (++XfaUtil.prototype._globalUniqueId);
        },

        matchJsonType: function (jsonModel, _class) {   //TODO: handle getOrElse
            return (jsonModel && _class && XfaUtil.prototype.getOrElse(jsonModel._class, "").toLowerCase() == ("" + _class).toLowerCase());
        },

        $data: function (elem, name, data) {
            if (!$.data(elem, "_xfaInitialized")) {
                //Initialized data- attributes parse for once using this call.
                // Next onward don't use this. Instead use $.data which is cheap/
                $(elem).data();
                $.data(elem, "_xfaInitialized", true); //Mark the element to say that data has been initialized.
            }
            return $.data(elem, name, data);
        },

        /*
         * alternative to jQuery.css which sets style properties directly through element.style. This is much faster then
         * corresponding jQuery.css alternative.
         *
         * Warning: this only supports standard css property names and does not do any pre-processing of name and value.
         * So calling this, make sure the style names are compatible.
         */
        $css: function (elem, stylesObj) {
            // Exclude the following css properties to add px. copied from jquery.cssNumber to add hyphenated style names
            var cssNumber = {
                "fillOpacity": true,
                "fill-opacity": true,
                "fontWeight": true,
                "font-weight": true,
                "lineHeight": true,
                "line-height": true,
                "zIndex": true,
                "z-index": true,
                "opacity": true,
                "orphans": true,
                "widows": true,
                "zoom": true
            };

            for (var prop in stylesObj) {
                var value = stylesObj[prop];
                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if (_.isNumber(value) && !cssNumber[ prop ]) {
                    value += "px";
                }
                elem.style[prop] = value;
            }
        },

        isTableHF: function (iChildNode) {
            //model can be a Node object or simply a json
            var assistJson = _.find(iChildNode.children, function (jChild) {
                return jChild._class == "assist";
            }, this);
            var childRole = (assistJson || {}).role;
            if (childRole == "TH" || childRole == "TF")
                return true;
            else
                return false;
        },

        getUiOneOfChildTag: function (uiParent) {
            var uiEl = _.find(uiParent.children, function (child) {
                return child._class == "ui";
            });
            if (!uiEl)
                return undefined;
            var uiOneOfChildMap = xfalib.runtime.xfa._templateSchema._getOneOfChild("ui");
            var uiOneOfChild = _.find(uiEl.children, function (child) {
                return uiOneOfChildMap[child._class] == true;
            });
            if (!uiOneOfChild)
                return undefined;
            return uiOneOfChild._class;
        },

        //TODO: this should be removed. One of the worst function.
        dIndexOf: function (searchArray, item2Find) {
            var ind = -1;
            _.find(searchArray, function (item, index) {
                return item == item2Find && (ind = index)
            });
            return ind;
        },

        splitStringByWidth: function (value, width, refEl) {
            var i = value.length , expectedWidth;
            do {
                expectedWidth = xfalib.view.util.TextMetrics.measureExtent(value.slice(0, i), {"refEl": refEl, maxWidth: -1}).width;
                i--;
            } while (expectedWidth > width)
            if (i != value.length - 1)
                return value.slice(0, i + 1);
            return value;
        },

        isRepeatabeEl: function (elTag) {
            if (elTag == "subform" || elTag == "subformSet")
                return true;
            else
                return false;
        },

        /**
         * @function
         * stripOrCall(toStrip, diffFunc, fArgs)
         * @description
         * common utility function to handle final submission payload stripping
         * @param {bool} toStrip : flag to signify whether to optimize jsonModelDiff size, by stripping off unnecessary properties
         * @param {function} diffFunc : callback func. call in case submit is not on
         * @param {Array} fArgs : arguments to be passed to the diff func.
         * @returns {object} object containing the jsonDiff
         */
        // should ALWAYS be called with a flag signifying if a submission is in progress,
        // and a callback function to compute the json to be sent back during submission, usually an apt '_computeJsonDiff'
        stripOrCall: function (toStrip, diffFunc, fArgs) {
            if (toStrip) {
                return {
                    "changed": false,
                    "jsonDifference": {}
                };
            }
            else if (_.isFunction(diffFunc)) {
                return diffFunc.apply(this, fArgs);
            }
        },

        /**
         * @function
         * partialStripOrCall(stripLvl, diffFunc, fArgs)
         * @description
         * common utility function to handle final submission payload stripping or for output of getFormState.
         * @param {int} diff_level : flag to signify whether to optimize jsonModelDiff size, by stripping off unnecessary properties
         *                        must be 0,1, or 2, as with "diff_level" param of _computeJsonDiff.
         * @param {function} diffFunc : callback func. call in case submit is not on
         * @returns {object} object containing the jsonDiff
         */
        partialStripOrCall: function (diff_level, diffFunc) {
            var diffObj = diffFunc.call(this, diff_level);

            if (!diffObj.changed) {
                if(diff_level === 1) {
                    diffObj = {
                        "changed": true,
                        "jsonDifference": {
                            "_class": this.jsonModel._class,
                            "name": this.jsonModel.name
                        }
                    };
                } else {
                    diffObj.jsonDifference = {};  // don't need stuff for other cases
                }
            }

            return diffObj;
        },

        /**
         * @function
         * stripObject(obj, exceptionNames)
         * @description
         * Utility function to strip unnecessary properties from an object
         * @param {object} obj : the object to strip
         * @param {Array} exceptionNames : array holding names of important properties to preserve
         * @returns {boolean} : true if this obj, or any of it's descendant is returned un-stripped
         */
        stripObject: function (obj, exceptionNames) {
            if (_.isEmpty(obj) || !_.isObject(obj)) {
                return true;
            } else {
                var dontStrip = false;
                _.each(_.keys(obj), function (propName) {
                    var keepProp = false;
                    if (!_.contains(exceptionNames, propName)) {
                        if (_.isArray(obj[propName])) {
                            _.each(obj[propName], function (arrElem) {
                                var isUnStripped = XfaUtil.prototype.stripObject(arrElem, exceptionNames);
                                keepProp = keepProp || isUnStripped;
                            });
                        } else if (_.isObject(obj[propName])) {
                            keepProp = XfaUtil.prototype.stripObject(obj[propName], exceptionNames);
                        }

                        if (!keepProp) {
                            delete obj[propName];
                        } else {
                            dontStrip = true;
                        }
                    } else {
                        dontStrip = true;
                    }
                });
                return dontStrip;
            }
        },

        computeDomJsonDiff: function (domNode) {
            var changed = true;
            if (domNode.hasOwnProperty("_modelChanged")) {
                changed = domNode._modelChanged;
            }
            var jsonDiff = {};
            if (changed) {
                this.copyObject(domNode.jsonModel, jsonDiff, {"exceptions": ["children", "{default}", "extras"]});
            } else {
                jsonDiff = {_class: domNode.className};
            }
            if (!changed && domNode.jsonModel.hasOwnProperty("name")) {
                jsonDiff.name = domNode.jsonModel.name;
            }
            return {
                "changed": changed,
                jsonDifference: jsonDiff
            };
        },

        getLogger: function () {
            return XfaUtil.prototype.logger || XfaUtil.prototype.getOrElse(xfalib, "runtime.xfa.Logger", null);
        },

        getErrorManager: function () {
            return XfaUtil.prototype.getOrElse(xfalib, "runtime.xfa.ErrorManager", null);
        },

        XFA_CLICK_EVENT: "xfaclick",
        XFA_EXIT_EVENT: "xfaexit",
        XFA_ENTER_EVENT: "xfaenter",
        XFA_CHANGE_EVENT: "xfachange",
        XFA_PREOPEN_EVENT: "xfapreopen",

        btwn: function (val, a, b) {
            return val > a && val < b;
        },

        // function to detect if Browser is chrome / safari (webkit)
        isWebkit: function () {
            return  !!$.browser.webkit || /webkit/.test(navigator.userAgent.toLowerCase()) || !!window.chrome || !!$.browser.chrome || /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) || !!$.browser.safari || !!window.webkitURL ||
                ( /safari/.test(navigator.userAgent.toLowerCase()) &&
                    /apple computer/.test(navigator.vendor.toLowerCase()) );

            // TODO : find a better way to do this as $.browser is deprecated and
            // userAgent may be spoofed
        },

        clearTimeoutOnDestroy: function (timeout) {
            attachClearTimeoutListener(timeout);
        },

        // function to detect if Browser is  safari
        isSafari: function () {
            return ( /safari/.test(navigator.userAgent.toLowerCase()) &&
                    /apple computer/.test(navigator.vendor.toLowerCase()) );
        },

        getLocaleStrings: function () {
            return xfalib.locale.Strings;
        },

        getLogMessages: function () {
            return xfalib.locale.LogMessages;
        },

        /*
         * This function should not be added in the prototype of any Object
         * as in the case of other functions
         */
        registerLocaleProperties: function (props) {
            registeredLocaleProperties = props;
        },

        /*
         * This function should not be added in the prototype of any Object
         * as in the case of other functions
         */
        getDefaultLocaleProperty: function (property) {
            var localeProps = registeredLocaleProperties || this.getOrElse(xfalib, "script.Xfa._defaultLocale", null);
            return this.getOrElse(localeProps, property, null);
        },

        /**
         * Encodes <script> and </script> with &lt;script&gt; and &lt;/script&gt;
         * Does same with img, video and audio tags also.
         * These tags are being removed since scripts can be run through
         * <img onerror="script" /> (same for audio and video).
         */
        encodeScriptableTags: function (str) {
            var index;
            if (_.isString(str)) {
                return str.replace(/<(\/?)(script[^<>]*)>/gi, '&lt;$1$2&gt;')
                    .replace(/<(\/?)(img[^<>]*)>/gi, '&lt;$1$2&gt;')
                    .replace(/<(\/?)(video[^<>]*)>/gi, '&lt;$1$2&gt;')
                    .replace(/<(\/?)(audio[^<>]*)>/gi, '&lt;$1$2&gt;')
            }
        },

        /**
         *
         * @param id : a string representing an HTML element id.
         *
         * return after applying an escaping '\' before each # . : [ ]
         */
        jqId: function(id) {
            return "#" + id.replace(/(#|:|\.|\[|\])/g, "\\$1");
        },

        _triggerOnBridge: function (eventName, target, property, oldVal, newVal) {
            var evnt = xfalib.script.XfaModelEvent.createEvent(eventName, target,
                property, oldVal, newVal);
            if(formBridge){
                window.formBridge.trigger(eventName, evnt);
            }
        },

        /*
         * pads the passed in String str by pre-pending padChars to convert it to a string of given width.
         * If string length is already greater that equal to given width, original string is returned.
         */
        padString : function (str, width, padChar) {
            padChar = padChar || '0';
            str = str + '';
            return str.length >= width ? str : new Array(width - str.length + 1).join(padChar) + str;
        },

        /**
         * returns true if the browser is IE otherwise false
         * @returns {boolean}
         */
        isIE: function () {
            return $.browser.msie || (navigator.appName === "Netscape" && navigator.userAgent.match(/Trident\//))
        },

        /**
         * returns false if other browser
         * if ie tries to return browser version (non falsy)
         * @returns {*}
         */

        detectIE: function () {
            // 1st try jq
            if($.browser.msie) {
                if($.browser.version && parseInt($.browser.version, 10)) {
                    return parseInt($.browser.version, 10);
                }
            }

            var ua = window.navigator.userAgent;

            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

            // IE 12 / Spartan
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

            // Edge (IE 12+)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;
        },
        /**
         * returns true if the browser is chrome otherwise false
         * @returns {boolean}
         */
        detectChrome : function () {
            return (!!window.chrome || !!$.browser.chrome || /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()));
        },

        /**
        * @param {String} val: value to be verified
        * @returns {boolean}
        * returns true if the provided string contains DOM element
        */
        isHTML: function(val) {
            //check whether string contains tags, so that $val does not contain result of the val used as selector
            // eg: val = "a" will return result for $(val) which is not required
            if(val && /<[a-z][\s\S]*>/.test(val)) {
                try {
                    var $val = $(val);
                    return $val.length > 0;
                } catch (exception) {
                    // if jquery throws exception that means string is not a proper HTML
                    return false;
                }
            } else {
                return false;
            }
        },

        /**
         * returns true if passed key is non printable, false otherwise.
         * @param {String} key event.key property of a Keyboard event
         */
        isNonPrintableKey : function (key) {
            return (key   // In IE, event.key returns words instead of actual characters for some keys.
               && !_.contains(['MozPrintableKey','Divide','Multiply','Subtract','Add','Enter','Decimal','Spacebar','Del'],key)
               && key.length != 1 )
        },

        /**
        * returns true for ipad
        * @returns {boolean}
        */
        _isIpad : function () {
            return navigator.userAgent.match(/iPad/i) != null;
        },

        /**
        * returns true if the subform is table or having role table else false
        * @param {Object} view
        */
        _tableCheckForAccessibility : function (view) {
            var assist = view.model.getElement("assist", 0, true);
            return this.getOrElse(view, "layoutModel.layout", null) == xfalib.view.LayoutConst.LAYOUT_TABLE
                || this.getOrElse(assist, "role", null) == "Table";
        },

        /**
        * returns value of tooltip to be assigned as title based on values provided in accessibility
        * @param {Object} model
        * @returns toolTipText
        */
        _getToolTipText : function (model) {
            var assist = model.getElement("assist", 0, true),
                toolTipText = "";
            // going against xfa spec, on hover show tooltip or speak text or element name, don't show caption as it's already visible
            // assist priority doesn't matter, but selecting none will disable tooltip on hover
            if (this.getOrElse(assist, "speak.disable", 0) != 1) { // loose compare string value
                toolTipText = this.getOrElse(assist, "toolTip.value", "") ||
                    this.getOrElse(assist, "speak.value", "")   ||
                    this.getOrElse(model, "jsonModel.name", "");
            }
            return toolTipText;
        },

        /**
        * returns value of mandatory message
        * @param {Object} model
        * @returns mandatoryMessage
        */
        _getMandatoryMessage : function (model) {
            var defaultMessage = model._defaults.validate.message.defaultMessage,
                msg = this.getOrElse(model, "validate.message.nullTest", defaultMessage);
            return (msg && msg.value) ? msg.value : defaultMessage.value;
        }
    });

    //Special handling for IE.
    if ($.browser.msie || $.browser.mozilla) {
        XfaUtil.prototype.$css = function (elem, stylesObj) {
            $(elem).css(stylesObj);
        }
    }
})(_, $, xfalib);
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/



(function (_, $, xfalib) {
    xfalib.ut.Utilities = {

        isIE11: function () {
            return !!navigator.userAgent.match(/Trident.*rv\:11\./);
        },

        checkMinMozillaVersion: function (version) {
            return (!this.isIE11() && $.browser.mozilla && parseInt($.browser.version) >= version);
        },

        getObjectFromKeyValueStringList: function (list) {
            var key, value, object = {}, tempArray;
            _.each(list, function (keyValuePair, index) {
                tempArray = keyValuePair.split("=");
                if (tempArray && tempArray.length > 1) {
                    object[tempArray[0]] = tempArray[1];
                }
            });
            return object;
        },

        _getNameWithoutMarker: function (fileName) {
            var markerIndex = fileName.indexOf("__afAttachment__");
            if (markerIndex !== -1) {
                fileName = fileName.substring(markerIndex + "__afAttachment__".length, fileName.length);
            }
            return fileName;
        }
    };
})(_, $, xfalib);
/**
 * @package xfalib.ut.Scanner
 * @fileOverview helper class to scan over a string.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel:{_str: String}}
 */

(function(_,xfalib){
    var Scanner = xfalib.ut.Scanner = xfalib.ut.Class.extend({

        initialize: function() {
            this._pos = 0;
        },

        isEOF : function(){
            return (this.jsonModel._str.length <= this._pos);
        },

        peek : function(){
            return (this.isEOF()) ? null : this.jsonModel._str.charAt(this._pos);
        },

        optionalConsumeChar : function(aChar){
            if(this.jsonModel._str.charAt(this._pos) == aChar){
                this._pos++;
                return aChar;
            }else{
                return null;
            }
        },

        /**
         * Gets next char ignore quoted string.
         *    |
         *   abc returns c.
         *     |
         *   abc'de'f returns f.
         * @param aChar
         */
        getNCharIQS : function(){
            this._pos++;
            if(this.jsonModel._str.length <= this._pos){
                var current = this.jsonModel._str.charAt(this._pos);
                if(current != '\''){
                    return current;
                }else{
                    if(moveNextExpectedChar('\'')){
                        return this.jsonModel._str.charAt(this._pos);
                    }
                }
            }
            return null;
        },

        moveNextExpectedChar : function(aChar){
            this._pos++;// currently point to '
            while(this._pos< this.jsonModel._str.length && this.jsonModel._str.charAt(this._pos) != aChar){
                this._pos++;
            }
            return this._pos < this.jsonModel._str.length;
        },

        readInteger : function(len){
            if(this.pos+len >this.jsonModel._str.length){
                return null;
            }
            var integer = xfalib.ut.PictureUtils.parseIntExact(this.jsonModel._str,this._pos,len);
            this._pos+=len;
            return integer;
        }
    });

    Scanner.lookupNext = function(pat, patPos, filter){
        var patLen = pat.length;
        if(patPos >= patLen){
            return null;
        }

        var token = {};
        token.startPos = patPos;

        var firstChar = pat.charAt(patPos);
        var patValid = false;
        //
        if (firstChar == '\''){
            for (var i = patPos+1; i < patLen;i++ ){
                var chr = pat.charAt(i);
                if(chr =='\''){
                    token.type=1;
                    token.len = i - patPos + 1;
                    patValid = true;
                    break;
                }
            }

        }else if( ('a' <= firstChar && firstChar <= 'z' || 'A' <= firstChar && firstChar <= 'Z') || filter.call(null, firstChar)){
            var endPos = patLen;//end is exclusive
            for (var i = 1; patPos+i < patLen;i++ ){
                if(pat.charAt(patPos+i)!=firstChar){
                    endPos = patPos+i;
                    break;
                }
            }
            token.type=2;
            token.len = endPos - patPos;
            token.patChar = firstChar;
            token.patPos = patPos;
            patValid = true;
        }else{
            if (firstChar == '?' || firstChar == '+' || firstChar == '*') {
                token.type=3;
                token.len = 1;
            }else{
                token.type=4;
                token.len = 1;
            }
            patValid = true;
        }
        if(patValid){
            return token;
        }else{
            throw "Picture is invalid.";
        }
    }
})(_,xfalib);


/**
 * @package xfalib.ut.PictureFmt
 * @fileOverview The file defines methods to parse and format data
 * according to XFA picture patterns.
 * @version 0.0.1
 */
(function(_,xfalib) {

    var PictureFmt = xfalib.ut.PictureFmt = function() {};
    PictureFmt.DatePicturePattern =  /^date(?:\([a-zA-Z]*_[a-zA-Z]*\))?\{([\w\W]*?)\}$/;
    PictureFmt.TimePicturePattern =  /^time(?:\([a-zA-Z]*_[a-zA-Z]*\))?\{([\w\W]*?)\}$/;
    PictureFmt.TextPicturePattern =  /^text\{([\w\W]*?)\}$/;
    PictureFmt.NumPicturePattern =  /^num\{([\w\W]*?)\}$/;

    /**
     * Parses a given data source according to the given picture.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {object}
     */
    PictureFmt.parse  = function(sSource, sPicture,sLocale){
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});

        var match = PictureFmt.DatePicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.parseDate(sSource, match[1]);
        }
        match = PictureFmt.TimePicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.parseTime(sSource, match[1]);
        }
        match = PictureFmt.TextPicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.parseText(sSource, match[1]);
        }
        match = PictureFmt.NumPicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.parseNumeric(sSource, match[1]);
        }
        throw "Invalid picture clause "+sPicture;
    };

    /**
     * Formats a given data source according to the given picture.
     * @param date {object}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.format  = function(sSource, sPicture, sLocale,bRelaxed,bFormatNumberFromasDefaultPC){
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});

        var match = PictureFmt.DatePicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.formatDate(sSource, match[1]);
        }
        match = PictureFmt.TimePicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.formatTime(sSource, match[1]);
        }
        match = PictureFmt.TextPicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.formatText(sSource, match[1],bRelaxed);
        }
        match = PictureFmt.NumPicturePattern.exec(sPicture);
        if(match && match[1]){
            return PictureEngine.formatNumeric(sSource, match[1],sLocale,bRelaxed,bFormatNumberFromasDefaultPC);
        }
            throw "Invalid picture clause "+sPicture;
    };

    /**
     * Checks if a given data source is formatted according to the given picture.
     * @param date {object}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {boolean}
     */
    PictureFmt.formatTest = function (sSource, sPicture, sLocale, bRelaxed, bFormatNumberFromasDefaultPC) {
        var formattedData;
        try {
            formattedData = PictureFmt.format(sSource, sPicture, sLocale, bRelaxed, bFormatNumberFromasDefaultPC);
        }catch(e) {
            return false;
        }

        if(!_.isString(formattedData)) {
            return false;
        } else {
            var parsedData;
            try {
                parsedData = PictureFmt.parse(formattedData, sPicture, sLocale);
            } catch (e) {
                return false;
            }
            if(!_.isString(parsedData) && parsedData !== formattedData) {
                return false;
            }
        }
        return true;
    };

    /**
     * Parses a given data source according to the given date picture
     * under the given sLocale.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.parseDate  = function(sSource, sPicture,sLocale){
        var picRegexp = PictureFmt.DatePicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.parseDate(sSource, match[1]);
        }else{
            return PictureEngine.parseDate(sSource, sPicture);
        }
    };


    /**
     * Formats a given data source according to the given date picture
     * * under the given sLocale.
     * @param date {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.formatDate  = function(date, sPicture, sLocale){
        var picRegexp =  PictureFmt.DatePicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.formatDate(date, match[1]);
        }else{
            return PictureEngine.formatDate(date, sPicture);
        }
    };

    /**
     * Parses a given data source according to the given date picture
     * under the given sLocale.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {date}
     */
    PictureFmt.parseTime  = function(sSource, sPicture,sLocale){
        var picRegexp = PictureFmt.TimePicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.parseTime(sSource, match[1]);
        }else{
            return PictureEngine.parseTime(sSource, sPicture);
        }
        return null;
    };


    /**
     * Formats a given data source according to the given date picture
     * * under the given sLocale.
     * @param date {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.formatTime  = function(date, sPicture, sLocale){
        var picRegexp =  PictureFmt.TimePicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.formatTime(date, match[1]);
        }else{
            return PictureEngine.formatTime(date, sPicture);
        }
    };

    /**
     * Parses a given data source according to the given text picture
     * under the given sLocale.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.parseText  = function(sSource, sPicture,sLocale){
        var picRegexp = PictureFmt.TextPicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.parseText(sSource, match[1]);
        }else{
            return PictureEngine.parseText(sSource, sPicture);
        }
    };

    /**
     * Formats a given data source according to the given text picture
     *  under the given sLocale.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.formatText  = function(sSource, sPicture, sLocale,bRelaxed){
        var picRegexp =  PictureFmt.TextPicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.formatText(sSource, match[1],bRelaxed);
        }else{
            return PictureEngine.formatText(sSource, sPicture,bRelaxed);
        }
        return null;
    };

    /**
     * Parses a given data source according to the given numeric picture
     * under the given sLocale.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.parseNumeric  = function(sSource, sPicture,sLocale){
        var picRegexp = PictureFmt.NumPicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.parseNumeric(sSource, match[1]);
        }else{
            return PictureEngine.parseNumeric(sSource, sPicture);
        }
        return null;
    };

    /**
     * Formats a given data source according to the given numeric picture
     *  under the given sLocale.
     * @param sSource {string}
     * @param sPicture {string}
     * @param sLocale {string}
     * @returns {string}
     */
    PictureFmt.formatNumeric  = function(sSource, sPicture, sLocale){
        var picRegexp =  PictureFmt.NumPicturePattern;
        var match = picRegexp.exec(sPicture);
        var PictureEngine = new xfalib.ut.PictureEngine({jsonModel:{locale:sLocale}});
        if(match && match[1]){
            return PictureEngine.formatNumeric(sSource, match[1]);
        }else{
            return PictureEngine.formatNumeric(sSource, sPicture);
        }
    };




    /**
     * Parses a given data source according to the given datetime picture
     * under the given sLocale.
     * @param sSource {string}
     *            the source data.
     * @param sPicture {string}
     *            the datetime picture.
     * @param sDateMask {string}
     *            the date sub-picture.
     * @param sTimeMask {string}
     *            the time sub-picture.
     * @param sLocale
     *            the locale name.
     *
     */
    PictureFmt.parseDateTime  = function(sSource, sPicture, sDateMask, sTimeMask, sLocale){

    };
    /**
     * Formats a given data source according to the given datetime picture
     * under the given locale.
     *
     * @param sSource {string}
     *            the source data.
     * @param sPicture {string}
     *            the datetime picture.
     * @param sDateMask {string}
     *            the date sub-picture.
     * @param sTimeMask {string}
     *            the time sub-picture.
     * @param sLocale {string}
     *            the locale name.
     */
    PictureFmt.formatDateTime  = function(sSource, sPicture, sDateMask, sTimeMask, sLocale){

    };

})(_,xfalib);
/**
 * @package xfalib.ut.PictureUtils
 * @fileOverview The file defines static utilities methods.
 * @version 0.0.1
 */

(function(_,xfalib){
    var PictureUtils = xfalib.ut.PictureUtils = function() {}

    PictureUtils.padding = function(number, digits, isFw, zero){
        var leading = ["0","00","000","0000"];
        var numStr = leading[digits-1] + number;
        return numStr.slice(- digits);
    };

    PictureUtils.parseIntAggressive = function(dateString, startPos,len){
        var result = new Object();
        var parsedNum = 0; //The number value parsed from dateString
        var parsedLen = -1; //How many chars parsed according to this pattern;
        for(var idx=0; idx<len && (startPos + idx) < dateString.length; idx++){
            var chr = dateString.charAt(startPos + idx);
            if(chr >='0' && chr <='9'){
                parsedNum = parsedNum *10 + (chr- '0');
            }else{
                parsedLen = idx;
                break;
            }
        }
        if(parsedLen == -1) {
            parsedLen = len;
        }
        result.value = parsedNum;
        result.len = parsedLen;
        return result;
    };

    PictureUtils.parseIntExact = function(dateString, startPos,len){
        var result = 0;
        PictureUtils.assert(startPos+ len <= dateString.length, "mismatch");
        for(var idx=0; idx<len ; idx++){
            var chr = dateString.charAt(startPos + idx);
            if(chr >='0' && chr <='9'){
                result = result *10 + (chr- '0');
            }else{
                throw "unexpected currentChar in PictureUtils.parseInt";
            }
        }
        return result;
    };

    PictureUtils.isDigit = function(chr){
        return /[0-9]/.test(chr) ;
    };

    PictureUtils.inString = function(chr,aString){
        return (aString.indexOf(chr) >=0) ;
    };


    var regExpIsLetter = /[\u0041-\u005a\u0061-\u007a\u00aa-\u00aa\u00b5-\u00b5\u00ba-\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u0236\u0250-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ee-\u02ee\u037a-\u037a\u0386-\u0386\u0388-\u038a\u038c-\u038c\u038e-\u03a1\u03a3-\u03ce\u03d0-\u03f5\u03f7-\u03fb\u0400-\u0481\u048a-\u04ce\u04d0-\u04f5\u04f8-\u04f9\u0500-\u050f\u0531-\u0556\u0559-\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u063a\u0640-\u064a\u066e-\u066f\u0671-\u06d3\u06d5-\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff-\u06ff\u0710-\u0710\u0712-\u072f\u074d-\u074f\u0780-\u07a5\u07b1-\u07b1\u0904-\u0939\u093d-\u093d\u0950-\u0950\u0958-\u0961\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2-\u09b2\u09b6-\u09b9\u09bd-\u09bd\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e-\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd-\u0abd\u0ad0-\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d-\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71-\u0b71\u0b83-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c-\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb5\u0bb7-\u0bb9\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cbd\u0cde-\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d60-\u0d61\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd-\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84-\u0e84\u0e87-\u0e88\u0e8a-\u0e8a\u0e8d-\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5-\u0ea5\u0ea7-\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd-\u0ebd\u0ec0-\u0ec4\u0ec6-\u0ec6\u0edc-\u0edd\u0f00-\u0f00\u0f40-\u0f47\u0f49-\u0f6a\u0f88-\u0f8b\u1000-\u1021\u1023-\u1027\u1029-\u102a\u1050-\u1055\u10a0-\u10c5\u10d0-\u10f8\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1206\u1208-\u1246\u1248-\u1248\u124a-\u124d\u1250-\u1256\u1258-\u1258\u125a-\u125d\u1260-\u1286\u1288-\u1288\u128a-\u128d\u1290-\u12ae\u12b0-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0-\u12c0\u12c2-\u12c5\u12c8-\u12ce\u12d0-\u12d6\u12d8-\u12ee\u12f0-\u130e\u1310-\u1310\u1312-\u1315\u1318-\u131e\u1320-\u1346\u1348-\u135a\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7-\u17d7\u17dc-\u17dc\u1820-\u1877\u1880-\u18a8\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1d00-\u1d6b\u1e00-\u1e9b\u1ea0-\u1ef9\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59-\u1f59\u1f5b-\u1f5b\u1f5d-\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe-\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071-\u2071\u207f-\u207f\u2102-\u2102\u2107-\u2107\u210a-\u2113\u2115-\u2115\u2119-\u211d\u2124-\u2124\u2126-\u2126\u2128-\u2128\u212a-\u212d\u212f-\u2131\u2133-\u2139\u213d-\u213f\u2145-\u2149\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312c\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fa5\ua000-\ua48c\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e-\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/

    /**
     * TODO Implement method equivalent to Character.isLetter.
     */
    PictureUtils.isLetter = function(chr){
        return regExpIsLetter.test(chr);
    };

    PictureUtils.isLetterOrDigit = function(chr){
        return this.isLetter(chr) || this.isDigit(chr);
    };

    /**
     * Scan this string for the first character in the given set. Similar to
     * strcspn().
     *
     * @param src{String}
     *            the string to scan
     * @param sSkip{String}
     *            the characters to scan for
     * @param nOffset{number}
     *            the position where to start the scan. Default = 0.
     * @return The position, relative to nOffset, for the first character found
     *         in the given set
     */
    PictureUtils.skipUntil = function(srcStr, sSkip, nOffset) {
        var nCharsSkipped = nOffset;

        // starting at the offset position, scan the characters in this string
        // until it matches one of the characters in the given set.
        while (nCharsSkipped < srcStr.length) {
            var i = nCharsSkipped;
            if (sSkip.indexOf(srcStr.charAt(i++)) >= 0)
                break;
            nCharsSkipped = i;
        }

        return nCharsSkipped - nOffset;
    };

    PictureUtils.matchString = function(str, startPos, target){
        if(startPos + target.length > str.length){
            return false;
        }else{
            for(var idx = 0; idx<target.length; idx++){
                if(target.charAt(idx) != str.charAt(startPos + idx)) return false;
            }
            return true;
        }
    };

    PictureUtils.assert = function(condition, message){
        if(!condition){
            throw message;
        }
    };

    PictureUtils.getLocaleObject = function(locale,property) {
        if(locale !== null && xfalib.runtime.xfa) {
            return xfalib.runtime.xfa._getLocaleSymbols(locale, property);
        } else {
            return xfalib.ut.XfaUtil.prototype.getDefaultLocaleProperty(property)
        }
    }

    PictureUtils.getHashOfLocaleObject = function(locale,property) {
          if(!PictureUtils.getHashOfLocaleObject[locale+"_"+property]) {
              var hashObj = {};
              _.each(PictureUtils.getLocaleObject(locale,property), function(val) {
                  var sVal = (val+"").toLowerCase();
                  var hash = 0;
                  for(var i =0;i<sVal.length;i++) {
                      hash+=(i+1)*sVal.charCodeAt(i)
                  }
                  hashObj[hash] = hashObj[hash] || [];
                  hashObj[hash].push(sVal);
              })
              PictureUtils.getHashOfLocaleObject[locale+"_"+property] = hashObj;
          }
          return PictureUtils.getHashOfLocaleObject[locale+"_"+property]
    }

    PictureUtils.convertNumberToLocale = function(locale,number) {
        var zero = PictureUtils.getLocaleObject(locale,"numberSymbols.zero");
        var zeroCode = zero.charCodeAt(0);
        number += "";
        var newNumber = [];
        for(var i = 0;i < number.length;i++) {
            newNumber.push(String.fromCharCode(zeroCode + parseInt(number.charAt(i))));
        }
        return newNumber.join("");
    }

    PictureUtils.parsePictureClause = function (clause){
        if(clause === null || clause === undefined) {
            return [];
        }
        var insidePattern = false,
            insideQuote=false,
            insideLocale = false,
            locale = "",
            type = "",
            pattern = "",
            flag = false,
            currentChar = "",
            result = [],
            matchType = /^num$|^text$|^date$/,
            matchLocale = /^[a-zA-Z]*_[a-zA-Z]*$/,
            i = 0,
            bracketOpenCount = 0;
        for(;i<clause.length;i++) {
            currentChar = clause.charAt(i);
            if(insideQuote && currentChar !== "'") {
                pattern += currentChar;
                continue;
            }
            switch(currentChar) {
               case "'":
                   if(!insidePattern) {
                       // ' is not allowed except insidePattern
                       return null;
                   }
                   insideQuote = !insideQuote;
                   pattern += currentChar;
                   break;
               case "{":
                    if(insidePattern || insideLocale || type === "") {
                        // { is not allowed insidePattern or insideLocale
                        return null;
                    }
                   insidePattern = true;
                    break;
                case "}":
                    if(!insidePattern || (insideLocale && pattern === "") || type === "") {
                        // { is allowed only insidePattern and not insideLocale
                        return null;
                    } else {
                        bracketOpenCount = 0;
                        insidePattern = false;
                        if(matchType.exec(type) === null) {
                            return null;
                        }
                        if(locale !== "" && matchLocale.exec(locale) === null) {
                            return null;
                        }
                        result.push({
                            category: type,
                            mask: pattern,
                            locale: locale
                        })
                    }
                    break;
                case "|":
                    if(type === "" || insidePattern || insideLocale) {
                        return null;
                    } else {
                        type = pattern = locale = "";
                        insidePattern = insideLocale = false;
                    }
                    break;
                case "(" :
                    if(type === "" || bracketOpenCount === 1) {
                        // ( is not allowed inside Locale
                        return null;
                    } else {
                        if(!insidePattern) {
                            insideLocale = true;
                        } else {
                            pattern += currentChar;
                        }
                        bracketOpenCount++;
                    }
                    break;
                case ")" :
                    if((!insideLocale && !insidePattern) || bracketOpenCount === 0) {
                        return null;
                    } else {
                        if(insidePattern) {
                            pattern += currentChar;
                        }
                        insideLocale = false;
                        bracketOpenCount--;
                    }
                    break;
                default:
                    if(insidePattern) {
                        pattern += currentChar;
                    } else if(insideLocale) {
                        locale += currentChar;
                    } else if(type !== "" && (pattern !== "" || locale !== "")){
                        return null;
                    } else {
                        type += currentChar;
                    }
                    break;
           }
       }
       if(insidePattern || insideLocale || insideQuote || bracketOpenCount !== 0) {
           return null;
       }
       return result;
    }

})(_,xfalib);

/**
 * @package xfalib.ut.VisitorBase
 * @import xfalib.ut.Class
 * @fileOverview Base class for visitor
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String}}
 */

(function(_,xfalib) {
    var VisitorBase = xfalib.ut.VisitorBase = xfalib.ut.Class.extend({
        consume : function(token){
            switch (token.type)
            {
                case 1:
                    this.consumeStringLiteral(token);
                    break;
                case 2:
                    this.consumeSubPattern(token);
                    break;
                case 3:
                    this.consumeStringWildCard(token);
                    break;
                case 4:
                    this.consumeCharLiteral(token);
                    break;
            }
        },
        acceptPatternChar : function(chr){
            return false;
        },
        getPicture : function(){
            return this.jsonModel._sPicture;
        },
        abstractMethod : function(){
            throw "Not implemented";
        },
        consumeStringWildCard : this.abstractMethod,
        consumeStringLiteral: this.abstractMethod,
        consumeCharLiteral: this.abstractMethod,
        consumeSubPattern: this.abstractMethod,
        getResult: this.abstractMethod
    });
})(_,xfalib);

/**
 * @package xfalib.ut.NumPictureDesc
 * @import xfalib.ut.Class
 * @fileOverview Pre-process Numeric Picture.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String}}
 */

(function(_,xfalib){
    var NumPictureDesc = xfalib.ut.NumPictureDesc = xfalib.ut.Class.extend({

        initialize: function() {
            this.hasRadix = false;
            this.hasExpon = false;
            this.hasSign = false;
            this.hasPercent = false;
            this.fracDigit = 0;
            this.intDigit = 0;

            this._mbLeftParenSeen = false;
            this._mbRightParenSeen = false;
            this._compactPattern();
            this._xlatePattern();
            NumPictureDesc._super.initialize.call(this);
        },
        
        getPicture : function(){
            return this.jsonModel._sPicture;
        },

        _match2Char : function (char1, char2, idx){
            if(idx+1 < this.jsonModel._sPicture.length){
                return (this.jsonModel._sPicture.charAt(idx) ==char1 && this.jsonModel._sPicture.charAt(idx+1) ==char2);
            }else{
                return false;
            }
        },

        _xlatePattern : function(){
            var patPos = 0;
            for(var token = xfalib.ut.Scanner.lookupNext(this.jsonModel._sPicture, patPos, this._acceptPatternChar); token != null;  ){
                this._consume(token);
                patPos = patPos + token.len;
                token = xfalib.ut.Scanner.lookupNext(this.jsonModel._sPicture, patPos, this._acceptPatternChar);
            }
        },
        
        _compactPattern : function(){
            var buf = new Array();
            for(var index =0, len = this.jsonModel._sPicture.length; index <len; index++){
                if(this._match2Char('D','B',index)){
                    buf.push('D');
                    index++;
                }else if(this._match2Char('d','b',index)){
                    buf.push('d');
                    index++;
                }else if(this._match2Char('C','R',index)){
                    buf.push('C');
                    index++;
                }else if(this._match2Char('c','r',index)){
                    buf.push('c');
                    index++;
                }else{
                    buf.push(this.jsonModel._sPicture.charAt(index));
                }
            }
            this.jsonModel._sPicture = buf.join("");
        },

        _acceptPatternChar : function(chr){
            return xfalib.ut.PictureUtils.inString(chr, "(%$,.)89BCDERSVZbcdrsvzt");
        },

        _consume : function(token){
            if(token.type == 2){
                this._subConsume(token.patChar, token.len);
            }// else not a pattern
        },

        _subConsume : function(chr, chrCnt){
            switch (chr) {
                case'E' :
                    if (chrCnt > 1 || this.hasExpon || (this.fracDigit + this.intDigit)==0)
                        throw "Illegal Numeric Picture: more than one Expon";
                    this.hasExpon = true;
                    break;
                case '(':
                    if (chrCnt > 1 || this._mbLeftParenSeen	|| this.fracDigit + this.intDigit >0 )
                        throw "Illegal Numeric Picture:  ()";
                    this._mbLeftParenSeen = true;
                    break;

                case ')':
                    if (chrCnt > 1 || ! this._mbLeftParenSeen || this._mbRightParenSeen)
                        throw "Illegal Numeric Picture:  ()";
                    this._mbRightParenSeen = true;
                    if(this.fracDigit + this.intDigit >0) this.hasSign = true;
                    break;
                case 'S':
                case 's':
                case 'C': //CR
                case 'c': //cr
                case 'D': //DB
                case 'd': //db
                    this.hasSign = true;
                    break;
                case '%' :
                    this.hasPercent = true;
                    break;
                case '.':
                case 'V':
                case 'v':
                    if (chrCnt > 1 || this.hasRadix)
                        throw "Illegal Numeric Picture: too many vV.";
                    this.hasRadix = true;
                    this._mbFracStartSeen = true;
                    break;
                case '8' :
                case '9' :
                case 'Z':
                case 'z':
                    if (this.hasRadix){
                        this.fracDigit += chrCnt;
                    } else{
                        this.intDigit += chrCnt;
                    }
                    break;
            }
        },

        parseNumberInfo : function(msText){
            var text=msText,
                num = Number(text),
                negative = false
            if(num < 0){
                negative = true;
                num = -num;
                text = text.replace("-","");
            }
            if(this.hasPercent){
                num *= 100;
                text = ""+num;
            }
            var shift = 0;
            if(this.hasExpon){
                var threshold = Math.pow(10,this.intDigit);
                if(num < threshold){
                    while(num*10 < threshold) {
                        num *= 10;
                        shift--;
                    }
                }else{
                    while(num > threshold){
                        num /= 10;
                        shift++;
                    }
                }
                text = num+"";
            }
            var radixPos = text.indexOf(".", 0),
                fractionDigit = radixPos<0 ? 0 : text.length - radixPos - 1

            if(this.fracDigit < fractionDigit) {
                num = num.toFixed(this.fracDigit);
                text = num +""
            }

            if(text.indexOf("0") == 0 && msText.indexOf("0") != 0) {
                text = text.substring(1);
            }

            radixPos = text.indexOf(".", 0)
            var integerDigit = radixPos < 0 ? text.length : radixPos,
                offset = this.intDigit - integerDigit

            if(offset <0 ){
                throw "Exit: most significant " + offset +" digit lost";
            }
            return {
                "integerDigit" : integerDigit,
                "radixPos" : radixPos ,
                "fractionDigit" :  radixPos<0 ? 0 : text.length - radixPos - 1,
                "msText" : text,
                "shift" : shift,
                "isNegative" : negative,
                "padding" :offset
            };
        }
    });

    NumPictureDesc.gsDB = "DB";
    NumPictureDesc.gsCR = "CR";
    NumPictureDesc.gsE = "E";
    NumPictureDesc.gsDSP = "  ";
    NumPictureDesc.gsSSP = " ";

})(_,xfalib);











    /**
 * @package xfalib.ut.TimeInfo
 * @import xfalib.ut.Class
 * @fileOverview A wrapper class for date related information.
 * @version 0.0.1
 */

/**
 * @constructor
 */
(function(_,xfalib){
    var TimeInfo = xfalib.ut.TimeInfo = xfalib.ut.Class.extend({

        initialize: function() {
            this.mHourOfMeriDiem = -1;
            this.mHourOfDay = -1;
            this.mMinuteOfHour = -1;
            this.mSecondOfMinute = -1;
            this.mThousandthOfSecond = -1;
        },

        getISOTime : function(){
            var timeStr = "";
            if(this.mThousandthOfSecond>0){
                timeStr = "-" + this.formatNum(this.mThousandthOfSecond,3);
            }
            if(this.mSecondOfMinute>0 || timeStr!=""){
                timeStr = this.formatNum(this.mSecondOfMinute,2)+timeStr;
                timeStr = ":"+timeStr;
            }
            if(this.mMinuteOfHour>0 || timeStr!=""){
                timeStr = this.formatNum(this.mMinuteOfHour,2)+timeStr;
                timeStr = ":"+timeStr;
            }
            timeStr = this.formatNum(this.mHourOfDay,2) + timeStr;

            return timeStr;
        },

        formatNum : function(num, digits){
            if(num<0){
                num = 0;
            }
            return xfalib.ut.PictureUtils.padding(num, digits);
        },

        getDate : function(){
            var date = new Date();
            this.setTime(date);
            return date;
        },

        setTime : function(date){
            date.setHours(this.mHourOfDay);
            date.setMinutes(this.mMinuteOfHour);
            date.setSeconds(this.mSecondOfMinute);
            date.setMilliseconds(this.mThousandthOfSecond);
        }
    });

    /**
     *
     * <p>Valid ISO8601/XFA time strings are in any one
     * of the following time patterns:
     * <ul>
     * <li> HH[MM[SS[.FFF][z]]]
     * <li> HH[MM[SS[.FFF][+HH[MM]]]]
     * <li> HH[MM[SS[.FFF][-HH[MM]]]]
     * <li> HH[:MM[:SS[.FFF][z]]]
     * <li> HH[:MM[:SS[.FFF][+HH[:MM]]]]
     * <li> HH[:MM[:SS[.FFF][-HH[:MM]]]]
     * </ul>
     */
    TimeInfo.Parse = function(isoDateStr, locale){
        var scanner = new xfalib.ut.Scanner({jsonModel:{_str:isoDateStr}});
        var hours = scanner.readInteger(2);
        var minitues = -1;
        if(!scanner.isEOF()){
            scanner.optionalConsumeChar(':');
            minitues = scanner.readInteger(2);
        }
        var seconds = -1;
        if(!scanner.isEOF()){
            scanner.optionalConsumeChar(':');
            seconds = scanner.readInteger(2);
        }
        var milliseconds = -1;
        if(!scanner.isEOF()){
            scanner.optionalConsumeChar('-');
            milliseconds = scanner.readInteger(3);
        }
        //TODO timezone
        var info = new xfalib.ut.TimeInfo();
       TimeInfo.setPropertyIfNotNull(info,hours,"mHourOfDay");
       TimeInfo.setPropertyIfNotNull(info,minitues,"mMinuteOfHour");
       TimeInfo.setPropertyIfNotNull(info,seconds,"mSecondOfMinute");
       TimeInfo.setPropertyIfNotNull(info,milliseconds,"mThousandthOfSecond");
        return info;
    };

    /**
     *
     * static method
     */
    TimeInfo.setPropertyIfNotNull = function(object, value, proName){
        if(value!=null){
            var d = Number(value);
            if(!isNaN(d)){
                object[proName] = d;
            }
        }
    };

})(_,xfalib);
/**
 * @package xfalib.ut.DateInfo
 * @import xfalib.ut.Class
 * @fileOverview A wrapper class for date related information.
 * @version 0.0.1
 */

/**
 * @constructor
 */

(function(_,xfalib) {
    var DateInfo = xfalib.ut.DateInfo = xfalib.ut.Class.extend({

        initialize: function(options) {
            if (options && !options.isParsingCall ) { // skip setting internal values when called while parsing date formats
                this.date = new Date();
                this._year = this.date.getFullYear();
                this._month = this.date.getMonth() + 1;
                this._day = this.date.getDay();
            }
            DateInfo._super.initialize.call(this);
        },

        formatNum : function(num, digits){
            if(num<0)
                num = 0;
            return xfalib.ut.PictureUtils.padding(num, digits);
        },

        getDate : function(){
            return this.date;
        },
        setDate : function() {
          this.date = new Date(this._year,this._month-1,this._day)
        },
        getISODate : function(){
            var isoDate = [];

            isoDate.push(this.formatNum(this._year, 4));
            isoDate.push("-");
            isoDate.push(this.formatNum(this._month, 2));
            isoDate.push("-");
            isoDate.push(this.formatNum(this._day, 2));

            return isoDate.join("");
        },

        year : function(y) {
            if(y && y > 0 && y <= 9999)
                this._year = y;
            else
                throw "undefined year";
        },

        month : function(m) {
            if(m && m>0 && m < 13) {
               this._month = m;
            }
            else
                throw "Invalid month " + m;
        },

        _leapYear : function() {
            var year = this._year;
            return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
        },

        _maxDate : function(m) {
              if(this._leapYear() && m == 2)
                 return 29;
              else return DateInfo.dates[m-1];
        },

        day : function(d) {
            if(d && d > 0 && d <= this._maxDate(this._month || 0))
                this._day = d;
            else
                throw "Invalid Date "+ d + " for the month "+(this._month);
        },

        validate : function(y, m, d) {
                this.year(y);
                this.month(m);
                this.day(d);
        }
    });

    DateInfo.ParseIsoString = function(isoDateStr, locale){
		var isDateRegexp = /^(\d{4})(?:-?(\d{1,2})(?:-?(\d{1,2}))?)?(?:T((\d{2}):(\d{2}):(\d{2}))Z)?$/;
        var match = isDateRegexp.exec(isoDateStr);
        if(match && match.length >= 4){
            var dateInfo = new DateInfo();
            var date = new Date(isoDateStr);
            // TODO - check if date is invalid.
            if(match[4] && date != null) { // if time is available then use date object for conversion otherwise use previous approach to support invalid date like 2012-10-101, 2010-02-29 etc for RTC CQ-4201274
                dateInfo.year(date.getFullYear());
                dateInfo.month(date.getMonth()+1);
                dateInfo.day(date.getDate());
            } else {
                try {
                    dateInfo.year(Number(match[1]));
                    dateInfo.month(Number(match[2]));
                    dateInfo.day(Number(match[3]));
                } catch(e) {
                    return null;
                }
            }
            dateInfo.setDate();
            return dateInfo;
        }
        return null;
    };

    DateInfo.Parse = function(dateStr, locale){
        locale = locale || "en_US";
        var patterns = xfalib.ut.PictureUtils.getLocaleObject(locale,"datePatterns"),
            isoDate = this.ParseIsoString(dateStr, locale);
        if(!_.isEmpty(isoDate)) {
            return isoDate;  // in case edit pattern is present, it'll be parsed by the widget during input and return an iso date string.
        }
        _.find(patterns, function(pattern) {
              try {
                  isoDate = xfalib.ut.PictureFmt.parseDate(dateStr,pattern,locale);
                  return true;
              } catch(exception) {
                  return false;
              }
        });
        isoDate = isoDate || dateStr;
        return DateInfo.ParseIsoString(isoDate);
    };

    DateInfo.dates = [31,28,31,30,31,30,31,31,30,31,30,31];
    DateInfo.daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
})(_,xfalib);
/**
 * @package xfalib.ut.PictureEngine
 * @import xfalib.ut.Scanner
 * @fileOverview The file is a facade to assembly all components together.
 * @version 0.0.1
 */
(function(_,xfalib) {

    var PictureEngine = xfalib.ut.PictureEngine = xfalib.ut.Class.extend({

        _lookupNext: xfalib.ut.Scanner.lookupNext,

        MAX_XFA_PREC	: 8,		// Max no. of fractional digits in XFA.
        MAX_DBL_DIG	:18,		// Max no. of significant digits in a double.
        MAX_INT_DIG	:10,		// Max no. of significant digits in an integer.
        MAX_DBL_WIDTH	:15,		// Max width before precision loss in a double.
        INTEGRAL_FMT :  0,
        DECIMAL_FMT : 1,
        CURRENCY_FMT : 2,
        PERCENT_FMT : 3,

        parseDate : function(sSource, sPicture, locale){
            return this._acceptVisitor(new xfalib.ut.DateParsingVisitor({jsonModel:{_sPicture:sPicture,_dataString:sSource,_locale:this.jsonModel.locale}}));
        },

        formatDate : function(dDate, sPicture){
            var dateInfo = xfalib.ut.DateInfo.Parse(dDate, this.jsonModel.locale);
            if(dateInfo == null){
                return null;
            }else{
                return this._acceptVisitor(new xfalib.ut.DateFormattingVisitor({jsonModel:{_sPicture:sPicture,_dateInfo:dateInfo,_locale:this.jsonModel.locale}}));
            }
        },

        parseTime : function(sSource, sPicture){
            return this._acceptVisitor(new xfalib.ut.TimeParsingVisitor({jsonModel:{_sPicture:sPicture,_dataString:sSource}}));
        },

        formatTime : function(dDate, sPicture){
            var timeInfo = xfalib.ut.TimeInfo.Parse(dDate, this.jsonModel.locale);
            if(timeInfo == null){
                return null;
            }else{
                return this._acceptVisitor(new xfalib.ut.TimeFormattingVisitor({jsonModel:{_sPicture:sPicture,_timeInfo:timeInfo}}));
            }
        },

        parseText : function(sSource, sPicture){
            return this._acceptVisitor(new xfalib.ut.TextParsingVisitor({jsonModel:{_sPicture:sPicture,_dataString:sSource}}));
        },

        formatText : function(sSource, sPicture,bRelaxed){
            return this._acceptVisitor(new xfalib.ut.TextFormattingVisitor({jsonModel:{_sPicture:sPicture,_text:sSource,relaxed:bRelaxed}}));
        },

        parseNumeric : function(sSource, sPicture){
            var visitor = new xfalib.ut.NumParsingVisitor({jsonModel:{_sPicture:sPicture,_dataString:sSource,_locale:this.jsonModel.locale}}); // TODO : Is locale required
            visitor.parse();
            return visitor.getResult();
        },

       formatNumeric : function(sSource, sPicture,locale,bRelaxed,bFormatNumberFromasDefaultPC){

             var sFormatPicture =sPicture;
             if( bRelaxed && bFormatNumberFromasDefaultPC){
                 sFormatPicture = this.getNumberFormat(sPicture,1, {formatOption: "WITH_GROUPINGS",
                                      "precision"  : this.getNumberPrecision(sSource),
                                    "width"      : sSource.length
                                   });
             }
             return this._acceptVisitor(new xfalib.ut.NumFormattingVisitor({jsonModel:{_sPicture:sFormatPicture,_locale:this.jsonModel.locale},text:sSource}));
        },

        _acceptVisitor : function(visitor){
            this._scanPattern(visitor);
            return visitor.getResult();
        },

        _scanPattern : function(visitor){
            var patPos = 0;
            var sPicture = visitor.getPicture();
            for(var token = this._lookupNext(sPicture, patPos, visitor.acceptPatternChar); token != null;  ){
                visitor.consume(token);
                patPos = patPos + token.len;
                token = this._lookupNext(sPicture, patPos, visitor.acceptPatternChar);
            }
        },

       /**
          * Removes n bytes from this string starting at position nOffset.
         *
          * @param nOffset - start position for the remove
          * @param nLength - the number of characters to remove
          * @return This string
          */

         _swallow : function(sString , nOffset, nLenToSwallow)
         {
             if(_.isEmpty(sString) || nLenToSwallow ==0){
                 return sString;
             }

             if( (nOffset + nLenToSwallow)> sString.length ) {
                 nLenToSwallow = (nOffset + nLenToSwallow) - sString.length;
             }
            var subStr = sString.substr(0,nOffset) + sString.substr(offset + nLenToSwallow);

             return subStr
         },
         /**
         * Replace some portion of one string with another String.
          * @param sString - the String where it has to be replaced.
          * @param sReplacement - the replacement string.
          * @param nOffset - start position for the replacement. Default value = 0.
          * @param nCutLength - the number of bytes to remove from the
          * original string.
          */

         _replaceAll : function(sString ,sReplacement , nOffset ,nCutlength) {
             return sString.substr(0,nOffset) + sReplacement  + sString.substr(nOffset + nCutlength)
         },

         //----------------------------------------------------------------------
         // SkipOver
         //
         // Scan this string for the first byte of the character not in the given set.
         // Similar to strspn().
         //----------------------------------------------------------------------
         _skipOver : function(fromString,sSkip, nOffset)
         {
             // starting at the offset position, scan the characters in this string
             // until it does not match any of the characters in the given set.
            var nCharsSkipped = nOffset;
             var i = 0;
             while (nCharsSkipped < fromString.length)
             {
                 i = nCharsSkipped;
                 if (sSkip.indexOf(fromString[i]) ==-1) {
                     break;
                 }
                 i++;
                 nCharsSkipped = i;
             }

             return nCharsSkipped - nOffset;
         },

         /*
          * Get the numeric format in the given style.
          * @param style in the range of values 0-2,
          * where (0 = integral, 1 = decimal, 2 = currency).
          * @param option in the set of format options:
          */
         getNumberFormat : function(format , style, option)
        {
             if (style < this.INTEGRAL_FMT || this.PERCENT_FMT < style) {
                 style = this.DECIMAL_FMT;
             }

             var sFormat = format;

             //
             // Use any alternate part because they handle negative values.
             //
             var  nBar = 0;
             if ((nBar = sFormat.indexOf('|')) != -1) {
                 sFormat = this._swallow(sFormat, 0, nBar + 1);
             }
             //
             // Determine position of radix (or anything like it)
             // and the replicating part of the pattern, i.e., from
             // the separator to this radix.
            //
             var nDot;
             if ( (nDot = sFormat.indexOf('.')) == -1) {
                 if ((nDot = sFormat.indexOf('v')) == -1) {
                     if ((nDot = sFormat.indexOf('V')) == -1) {
                         if ((nDot = sFormat.indexOf('E')) == -1) {
                             if ((nDot = sFormat.indexOf(' ')) == -1) {
                                 if ((nDot = sFormat.indexOf('%')) == -1) {
                                     nDot = sFormat.length;
                                 }
                             }
                         }
                     }
                 }
             }
             if (nDot) {
                 if (this._skipOver(sFormat,"89zZ", nDot - 1) != 1) {
                     nDot = sFormat.length;
                 }
             }
             var sZZZ;
             var nZed;
             if ( (nZed = sFormat.indexOf("z,")) != -1) {
                 //
                 // Watson 1230768.  Handle locales, like India, that have
                 // pictures with more than one grouping symbol.
                //
                 var nSep = nDot;
                 var nComma;
                 if ((nComma = sFormat.indexOf(',', nZed + 2)) !=-1) {
                    nSep = nComma;
                 }
                 if (nSep > nZed + 2) {
                     sZZZ = Array(nSep - nZed).join('z');
                 }
                 else {
                     sZZZ = Array(1).join('z');
                 }
             }
             else {
                nZed = 0;
             }
             //
             // If non-integral styles Then determine width and precision.
             //
             var nPrec = 0;
             var nWidth = this.MAX_INT_DIG;
             if (style != this.INTEGRAL_FMT) {
                 nPrec = option.precision; // (option >> 8) & 0xff;
                 var trim = ((nPrec & 0x80) == 0);
                 nPrec &= 0x7f;
                 if (nPrec == 0x7f) {
                     nPrec = this._skipOver(sFormat, "89zZ", nDot + 1);
                 }
                 if ((option.width) != undefined) {
                     nWidth = option.width;
                 }
                 else {
                     nWidth = this.MAX_DBL_DIG;
                 }
                 //
                 // Fix for Watson 1229423.  If the locale's format contains
                 // any sign pictures Then widen accordingly.  Also widen if
                 // precision of locale's picture format is greater than requested.
                 //
                 if (sFormat.indexOf('s')!=-1) {
                     nWidth += 1;
                 }
                 if (sFormat.indexOf('(')!=-1) {
                     nWidth += 1;
                 }
                 if (sFormat.indexOf(')') !=-1) {
                     nWidth += 1;
                 }
                var nFmtPrec = this._skipOver(sFormat,"89zZ", nDot + 1);
                 if (0 < nPrec && nPrec < nFmtPrec) {
                     nWidth += nFmtPrec - nPrec;
                 }

                 //
                 // Pare down the precision if the width is big enough to yield
                 // IEEE 754 64-bit double precision errors, which appears to be
                 // anything over 14 significant digits.
                 //
                 if (trim && nPrec > 0 && nWidth > nPrec) {
                     //
                     // Fix for Watson 1211481.  If the given precision is less
                     // than what the locale's format dictates then widen the given
                     // width.
                    //
                     if (nPrec <= sFormat.length - 1 - nDot) {
                         nWidth += sFormat.length - 1 - nDot - nPrec;
                     }
                     for (var i = nWidth - 1; i > this.MAX_DBL_WIDTH; i--) {
                         //
                         // Never pare down the precision below what the locale's
                         // format dictates.
                         //
                         if (nPrec <= sFormat.length - 1 - nDot)
                            break;
                         nPrec--;
                     }
                 }
             }
             //Watson 1483675 - If the locale's format contains
             // a dollar sign or a space then widen accordingly.
             if (style == this.CURRENCY_FMT) {
                 if (sFormat.indexOf('$')!=-1) {
                     nWidth++;
                 }

                 if (sFormat.indexOf(' ')!=-1) {
                     nWidth += 1;
                }
             }

             //
             // If percent style was wanted Then truncate after the percent character.
             //
             if (style == this.PERCENT_FMT) {
                 var nTrim = this._skipOver(sFormat,"89zZ", nDot + 1);
                 sFormat = this._replaceAll(sFormat,"",nTrim,0)
                 //sFormat.Replace(jfString::EmptyString(), nDot + 1, nTrim);

                 //Watson 1483675 - If the locale's format contains
                 // a percent sign then widen accordingly.
                 if (sFormat.indexOf('%')!=-1) {
                     nWidth++;
                 }
             }
             //
             // Else if integral style was wanted Then truncate at the radix character.
             //
             //
             // If integral style was wanted Then truncate at the radix character.
             //
             else if (style == this.INTEGRAL_FMT || nPrec == 0){// && option.formatOption == "WITHOUT_RADIX") {
                 var nTrim = this._skipOver(sFormat,"89zZ", nDot + 1);
                 sFormat = this._replaceAll(sFormat,"",nDot,nTrim+1);
             }
             //
             // Otherwise for decimal and currency styles Do
             // replace fractional 'z' pictures with '8's to requested precision,
             //
             else if (option.formatOption == "WITH_EIGHTS") {
                 var nEight = nDot + 1;
                 while ((nEight =sFormat.indexOf('z'))!=-1) {
                     this._replaceAll(sFormat, '8', nEight,'8'.length);
                 }
                 while (sFormat.Length() - nDot <= nPrec) {
                     sFormat = this._replaceAll(sFormat, "8", nDot + 1, 0);
                 }
             }
             //
             // Or replace fractional '9' pictures with 'z's to requested precision
             // Watson 1322850 - add option to keep nines, previously this function
             // would force frac. digits to be either z's or 8's with no option for 9's.
             //
             else if ((option.formatOption) == "WITH_ZEDS" && !((option.formatOption) == "KEEP_NINES")) {
                 var nNine = nDot + 1;
                 while ((nNine = sFormat.indexOf('9'))!=-1) {
                     this._replaceAll(sFormat, 'z', nNine,1);
                 }
                 while (sFormat.Length() - nDot <= nPrec) {
                     this._replaceAll(sFormat, "z", nDot + 1, 0);
                 }
             }
             //
             // Replicate section from separator to radix to requested width.
             //
             if (!sZZZ) {
                 sZZZ = "z";
             }
            else if ((option.formatOption) == "WITHOUT_GROUPINGS" ) {
                 //
                 // Watson 1230768.  Handle locales, like India, that have
                 // pictures with more than one grouping symbol.
                 //
                 var nComma = nZed + 1 ;
                 this._replaceAll(sFormat, 'z' ,nComma,1);
                 while ( nComma!= -1 && (nComma < nDot)) {
                     nComma = sFormat.indexOf(',');
                     sFormat = this._replaceAll(sFormat,'z',nComma,1);
                 }
             }
             else if ((option.formatOption == "WITH_GROUPINGS")) {
                 sZZZ = this._replaceAll(sZZZ,',',0,1);
                 nWidth += (nWidth + sZZZ.length) / sZZZ.length;
             }
             while (sFormat.length < nWidth) {
                 sFormat = this._replaceAll(sFormat, sZZZ, nZed + 1, 0);
             }
             return sFormat;
         },

         /**
          * Get the decimal precision of the given numeric string.
          * @return the decimal precision or 0 for integral values.
          */
         getNumberPrecision: function(sVal)
         {
             var nRadix = 0;
             var i = -1;
             // Reason for not using the commented line. We are always storing the value in model with . as decimal separator
             // Passing field locale/ browser locale would lead to precision width being zero for non-english locales where
             // decimal separater may be different.
             // var rIndex = xfalib.ut.PictureUtils.getLocaleObject(this.jsonModel.locale,"numberSymbols").decimal;
             // so hardcoding . for now
             var rIndex = ".";
             if( (nRadix = sVal.indexOf(rIndex))!=-1)
             {
                     for(; nRadix <=sVal.length ;nRadix++) {
                         i++;
                     }

                 return i;
             }
             return 0;
          }
    })
})(_,xfalib);
/**
 * @package xfalib.ut.FormattingVisitorBase
 * @import xfalib.ut.VisitorBase
 * @fileOverview Base class for visitor
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String]}
 */

(function(_,xfalib) {
    var FormattingVisitorBase = xfalib.ut.FormattingVisitorBase = xfalib.ut.VisitorBase.extend({

        initialize: function() {
            this._buffer = []; //TODO: ASK Ren where does this _buffer comes from
            FormattingVisitorBase._super.initialize.call(this);
        },

        consumeStringWildCard : function(token){
            //'?' '*' '+
            this._buffer.push(" ");
        },

        consumeStringLiteral : function(token){
            this._buffer.push(this.jsonModel._sPicture.substr(token.startPos+1,token.len-2));
        },

        consumeCharLiteral : function(token){
            this._buffer.push(""+ this.jsonModel._sPicture.charAt(token.startPos));
        }
    })

})(_,xfalib);
/**
 * @package xfalib.ut.ParsingVisitorBase
 * @import xfalib.ut.VisitorBase
 * @fileOverview Base class for visitor
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String,_dataString: String}}
 */

(function(_,xfalib){
    var ParsingVisitorBase = xfalib.ut.ParsingVisitorBase = xfalib.ut.VisitorBase.extend({

        initialize: function() {
            this._strLen = this.jsonModel._dataString.length;
            this._strPos = 0;
            ParsingVisitorBase._super.initialize.call(this);
        },

        consumeStringWildCard : function(token){
            if (chr == '?') {
                if (this._strPos < this._strLen)//&& Character.isDefined(str.charAt(strPos))
                    this._strPos += 1;
            } else if (chr == '+') {
                if (this._strPos >= this._strLen)// || ! Character.isWhitespace(str.charAt(strPos)))
                    throw "Mismatch";
                this._strPos += 1;
                while (this._strPos < this._strLen)// && Character.isWhitespace(str.charAt(strPos)))
                    this._strPos += 1;
            } else if (chr == '*') {
                while (this._strPos < this._strLen)// && Character.isWhitespace(str.charAt(strPos)))
                    this._strPos += 1;
            }

        },

        consumeStringLiteral : function(token){
            for(var offset=0; offset<token.len-2 ;offset++){ //-2, heading and trailing quote
                if(this.jsonModel._sPicture.charAt(token.startPos+offset+1) != this.jsonModel._dataString.charAt(this._strPos+offset)){
                    throw ("Mismatch" + this.jsonModel._sPicture.substr(token.startPos, token.len));
                }
            }
            this._strPos += token.len-2;

        },

        consumeCharLiteral : function(token){
            if(this.jsonModel._sPicture.charAt(token.startPos) == this.jsonModel._dataString.charAt(this._strPos)){
                this._strPos += 1;
            }else{
                throw "Mismatch";
            }
        }
    })
})(_,xfalib);

/**
 * @package xfalib.ut.DateFormattingVisitor
 * @import xfalib.ut.FormattingVisitorBase
 * @fileOverview The file provides formating logic on date pattern characters.
 * @version 0.0.1
 */


/**
 * @constructor
 * @param object {jsonModel: {_sPicture:String,_dateInfo: xfalib.ut.DateInfo}}
 */

(function(_,xfalib) {
    var PictureUtils =  xfalib.ut.PictureUtils;
    var DateFormattingVisitor = xfalib.ut.DateFormattingVisitor = xfalib.ut.FormattingVisitorBase.extend({

        consumeSubPattern : function(token){
            var chr = token.patChar;
            var chrCnt = token.len;

            switch (chr) {
                case 'D':
                    var dayOfMonth=this.jsonModel._dateInfo.date.getDate();
                    switch(chrCnt){
                        case 1:
                            break;
                        case 2:
                            dayOfMonth = PictureUtils.padding(dayOfMonth,2);
                            break;
                    }
                    this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,dayOfMonth));
                    break;
                case 'J':

                    //this._mDayOfYear;
                    break;
                case 'M':
                    var monthOfYear = this.jsonModel._dateInfo.date.getMonth();
                    switch(chrCnt){
                        case 1:
                            this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,monthOfYear+1));
                            break;
                        case 2:
                            this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,PictureUtils.padding(monthOfYear+1,2)));
                            break;
                        case 3:
                            var monthNames = PictureUtils.getLocaleObject(this.jsonModel._locale,"calendarSymbols.abbrmonthNames");
                            this._buffer.push(monthNames[monthOfYear]);
                            break;
                        case 4:
                            var monthNames = PictureUtils.getLocaleObject(this.jsonModel._locale,"calendarSymbols.monthNames");
                            this._buffer.push(monthNames[monthOfYear]);
                            break;
                    }

                    break;
                case 'E':
                    var dayOfWeek = this.jsonModel._dateInfo.date.getDay();
                    var dayNames;
                    switch(chrCnt) {
                        case 1:
                            this._buffer.push(dayOfWeek);
                            break;
                        case 3:
                            dayNames =  PictureUtils.getLocaleObject(this.jsonModel._locale,"calendarSymbols.abbrdayNames");
                            this._buffer.push(dayNames[dayOfWeek]);
                            break;
                        case 4:
                            dayNames =   PictureUtils.getLocaleObject(this.jsonModel._locale,"calendarSymbols.dayNames");
                            this._buffer.push(dayNames[dayOfWeek]);
                            break;
                        default:
                            throw "unsupported Picture Clause ";
                    }
                    break;
                case 'e':
                    break;
                case 'G':
                    break;
                case 'Y':

                    var yearOfEra = this.jsonModel._dateInfo.date.getFullYear()
                    switch(chrCnt){
                        case 2:
                            if(yearOfEra>2029 || yearOfEra < 1930){
                                throw "unsupported " + yearOfEra + " by pattern YY";
                            }
                            yearOfEra = PictureUtils.padding(yearOfEra % 100, 2);
                            break;
                        case 4:
                            yearOfEra = PictureUtils.padding(yearOfEra, 4); // 2 digit(0000-9999)
                            break;
                    }
                    this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,yearOfEra));
                    break;
                case 'w':
                    break;
                case 'W':
                    break;
                default: throw "Unsupported pattern";
            }

        },
        /**
         *
         * @override
         */
        getResult : function(){
            return this._buffer.join("");
        }

    });
})(_,xfalib);


/**
 * @package xfalib.ut.TextFormattingVisitor
 * @import xfalib.ut.FormattingVisitorBase
 * @fileOverview Formats a string according to Text Picture.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object { jsonModel:{_sPicture: String, _text: String}}
 */
(function(_,xfalib){
    var TextFormattingVisitor = xfalib.ut.TextFormattingVisitor = xfalib.ut.FormattingVisitorBase.extend({

        initialize: function() {
            this._textPos = 0;
            this._relaxed = typeof this.jsonModel.relaxed === "undefined" ? true: this.jsonModel.relaxed;
            TextFormattingVisitor._super.initialize.call(this);
        },

        consumeSubPattern : function(token){
            var chr = token.patChar;
            var chrCnt = token.len;
            for(var index = 0; index < chrCnt && (!this._relaxed || this._textPos < this.jsonModel._text.length); index++){
                switch (chr) {
                    case '9': // Numeric
                        var cUni = this.jsonModel._text.charAt(this._textPos++);
                        if(!xfalib.ut.PictureUtils.isDigit(cUni)){
                            throw "TextFormatting: not a digit as expected";
                        }
                        this._buffer.push(cUni);
                        break;
                    case 'A': // Alphebetic
                        var cUni = this.jsonModel._text.charAt(this._textPos++);
                        if(!xfalib.ut.PictureUtils.isLetter(cUni)){
                            throw "TextFormatting: not a character as expected";
                        }
                        this._buffer.push(cUni);
                        break;
                    case 'O': // Alphanumeric
                    case '0':
                        var cUni = this.jsonModel._text.charAt(this._textPos++);
                        // cUni === "" is a hack for LC-6152
                        // To prevent extra loop[one more time than the length of the string] for which cUni was ""
                        // which was neither a letter nor a digit
                        // so we were getting textformatting error
                        //which caused email id validation to fail for chars less than picture clause
                        if(!(cUni ==="" || xfalib.ut.PictureUtils.isLetter(cUni) || xfalib.ut.PictureUtils.isDigit(cUni))){
                            throw "TextFormatting: not a character or digit as expected";
                        }
                        this._buffer.push(cUni);
                        break;
                    case 'X':
                        var cUni = this.jsonModel._text.charAt(this._textPos++);
                        this._buffer.push(cUni);
                        break;
                    case 't':
                        this._buffer.push("\t");
                        break;
                    default: this._buffer.push(chr);
                }
            }

        },

        /**
         *
         * @override
         */
        getResult : function(){
            if(this._textPos < this.jsonModel._text.length)
                throw "TextFormatting: picture clause smaller than input Text";
            return this._buffer.join("");
        },

        /**
         *
         * @override
         */
        acceptPatternChar : function(chr){
            return xfalib.ut.PictureUtils.inString(chr, "9AO0Xt");
        },

        consumeCharLiteral : function(token){
         this._buffer.push(""+ this.jsonModel._sPicture.charAt(token.startPos));
         // LC-3869 : forward the text pointer after literal is present and matched with the picture.
         if(this.jsonModel._sPicture.charAt(token.startPos) == this.jsonModel._text.charAt(token.startPos))
             this._textPos++;
        }
    })

})(_,xfalib);


/**
 * @package xfalib.ut.TextFormattingVisitor
 * @import xfalib.ut.FormattingVisitorBase
 * @fileOverview The file provides formating logic on date pattern characters.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param object {jsonModel: {_sPicture:String,_timeInfo: xfalib.ut.TimeInfo}}
 */

(function(_,xfalib){
    var TimeFormattingVisitor = xfalib.ut.TimeFormattingVisitor=  xfalib.ut.FormattingVisitorBase.extend({

        consumeSubPattern : function(token){
            var chr = token.patChar;
            var chrCnt = token.len;

            switch (chr) {
                case 'H':
                case 'K':
                    var hourOfDay = this.jsonModel._timeInfo.mHourOfDay;
                    if(chr=='K'){
                        hourOfDay += 1;
                    }
                    switch(chrCnt){
                        case 1:
                            this._buffer.push(hourOfDay);
                            break;
                        case 2:
                            this._buffer.push(xfalib.ut.PictureUtils.padding(hourOfDay,2));
                            break;
                    }
                    break;

                case 'M':
                    var minuteOfHour = this.jsonModel._timeInfo.mMinuteOfHour;
                    switch(chrCnt){
                        case 1:
                            this._buffer.push(minuteOfHour);
                            break;
                        case 2:
                            this._buffer.push(xfalib.ut.PictureUtils.padding(minuteOfHour,2));
                            break;
                    }

                    break;
                case 'S':
                    var secondOfMinute = this.jsonModel._timeInfo.mSecondOfMinute;
                    switch(chrCnt){
                        case 1:
                            this._buffer.push(secondOfMinute);
                            break;
                        case 2:
                            this._buffer.push(xfalib.ut.PictureUtils.padding(secondOfMinute,2));
                            break;
                    }
                    break;
                case 'F':
                    var Milliseconds =this.jsonModel._timeInfo.mThousandthOfSecond;
                    this._buffer.push(xfalib.ut.PictureUtils.padding(Milliseconds,3));
                    break;

                default: throw "Unsupported pattern";
            };

        },

        /**
         *
         * @override
         */
        getResult : function(){
            return this._buffer.join("");
        }

    });

})(_,xfalib);


/**
 * @package xfalib.ut.NumFormattingVisitor
 * @import xfalib.ut.FormattingVisitorBase
 * @fileOverview Formats a string according to Text Picture.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object { jsonModel:{_sPicture: String}, text: String}
 */

(function(_,xfalib){
    var PictureUtils =  xfalib.ut.PictureUtils;
    var NumFormattingVisitor = xfalib.ut.NumFormattingVisitor = xfalib.ut.FormattingVisitorBase.extend({

        initialize: function(options) {
            NumFormattingVisitor._super.initialize.call(this);
            this._textPos = 0;

            //boolean value used for internal state track
            this._mbDigitAddedToOutput = false; // at least one digit has been added to output
            this._mbSignAddedToOutput = false;
            this._nScannedPatternDigit = 0; //how many digit(98Zz) characters scanned in pattern, reset to 0 after '.Vv'
            this._mbRadixSeen = false;

            this._pictureDesc = new xfalib.ut.NumPictureDesc({jsonModel:{_sPicture:this.jsonModel._sPicture}});
            this.jsonModel._sPicture= this._pictureDesc.getPicture();
            this._numberInfo = this._pictureDesc.parseNumberInfo(options.text);

            this._mbNegative = this._numberInfo.isNegative;
            this._msText = this._numberInfo.msText;
            this._leadingPadding = this._numberInfo.padding;
            //
            this._mNumberSymbols = xfalib.ut.PictureUtils.getLocaleObject(this.jsonModel._locale,"numberSymbols");
            this._mCurrencySymbols = xfalib.ut.PictureUtils.getLocaleObject(this.jsonModel._locale,"currencySymbols");
        },

        _checkAndAddDecimalPoint: function(fw) {
            if(this._mAddRadix) {
                this._buffer.push(this._fmtStr(this._mNumberSymbols.decimal, fw));
                this._mAddRadix = false;
            }
        },

        consumeSubPattern : function(token){
            var chr = token.patChar,
                chrCnt = token.len;
            switch (chr) {
                case '9':
                case '8':
                case 'Z': // Digit or space if zero.
                case 'z':// Digit or nothing if zero.
                    if(!this._mbSignAddedToOutput)
                        this._ensureSignIsAdded();
                    while (chrCnt-- > 0 ) {
                        if(!this._mbRadixSeen){
                            if(this._leadingPadding > this._nScannedPatternDigit++){
                                var placeHolder = null;
                                if(this._mbDigitAddedToOutput){
                                    placeHolder = this._mNumberSymbols.zero;
                                }else{
                                    if(chr == '9' || chr =='8') {
                                        placeHolder = this._mNumberSymbols.zero;
                                        this._mbDigitAddedToOutput = true;
                                    }else if(chr == 'Z'){
                                        placeHolder = " ";
                                    }
                                }
                                if(placeHolder){
                                    this._buffer.push(this._matchChr(placeHolder));
                                }
                            }else {
                                var cValue = this._msText.charAt(this._textPos++);
                                this._ensureCharIsDigit(cValue);
                                this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,cValue));
                                this._mbDigitAddedToOutput = true;
                            }
                        }else{  //handling fractional part
                            if(this._nScannedPatternDigit++  < this._numberInfo.fractionDigit ){
                                var cValue = this._msText.charAt(this._textPos++);
                                this._ensureCharIsDigit(cValue);
                                this._checkAndAddDecimalPoint();
                                this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,cValue));
                                this._mbDigitAddedToOutput = true;
                            }else{
                                if(chr == '9'|| chr =='Z') {
                                    this._checkAndAddDecimalPoint();
                                    this._buffer.push(this._matchChr(this._mNumberSymbols.zero));
                                } else if(chr == '8') {
                                    var cValue = this._msText.charAt(this._textPos++);
                                    if(cValue != '' && this._ensureCharIsDigit(cValue)) {
                                        this._checkAndAddDecimalPoint();
                                        this._buffer.push(PictureUtils.convertNumberToLocale(this.jsonModel._locale,cValue));
                                        this._mbDigitAddedToOutput = true;
                                    }
                                }
                            }
                        }

                    }

                    break;
                case 'E': // Exponent.
                    this._buffer.push('E');
                    this._buffer.push("" + this._numberInfo.shift);
                    break;
                case 'C': // CR symbol if negative and spaces if positive.
                    this._buffer.push((this._mbNegative) ? xfalib.ut.NumPictureDesc.gsCR : xfalib.ut.NumPictureDesc.gsDSP);
                    break;
                case 'c': // CR symbol if negative and nothing if positive.
                    if (this._mbNegative){
                        this._buffer.push(xfalib.ut.NumPictureDesc.gsCR);
                    }
                    break;
                case 'D': // DB symbol if negative and spaces if positive.
                    this._buffer.push((this._mbNegative) ? xfalib.ut.NumPictureDesc.gsDB : xfalib.ut.NumPictureDesc.gsDSP);
                    break;
                case 'd': // DB symbol if negative and nothing if positive.
                    if (this._mbNegative){
                        this._buffer.push(xfalib.ut.NumPictureDesc.gsDB);
                    }
                    break;
                case 'S': // Minus sign if negative and a space if positive.
                case 's':
                    if (this._mbNegative){
                        this._buffer.push(this._fmtStr(	this._mNumberSymbols.minus));
                    }else{
                        if('S' == chr){
                            this._buffer.push(this._matchChr(' '));
                        }
                    }
                    break;
                case 'V': // Implied decimal sign if parsing.
                case '.':
                case 'v': // Implied decimal sign.
                    if (this._textPos < this._msText.length && this._msText.charAt(this._textPos) == '.'){
                        this._textPos++; //consume a '.'
                    }
                    if (chr == 'V' || chr == '.'){
                        this._mAddRadix = true;
                        //this._buffer.push(this._fmtStr(this._mNumberSymbols.decimal, ));
                    }
                    this._mbRadixSeen = true;
                    this._nScannedPatternDigit = 0;
                    break;

                case 0xFF0C: // Fullwidth ','.
                case ',': // Grouping separator.
                    while (chrCnt-- > 0) {
                        if (this._mbDigitAddedToOutput){
                            this._buffer.push(this._fmtStr(	this._mNumberSymbols.grouping ));
                        }
                        this._mbCommaSeen = true;
                    }
                    break;
                case 0xFF04: // Fullwidth '$'.
                case '$': // Currency name or symbol.
                    while (chrCnt-- > 0) {
                        this._buffer.push(this._fmtStr(	this._mCurrencySymbols.symbol ));
                    }
                    break;
                case 0xFF05: // Fullwidth '%'.
                case '%': // Percent symbol.
                    while (chrCnt-- > 0) {
                        this._buffer.push(this._fmtStr(	this._mNumberSymbols.percent));
                    }
                    break;
                case 0xFF08: // Fullwidth '('.
                case 0xFF09: // Fullwidth ')'.
                case '(': // Left parenthesis.
                case ')': // Right parenthesis.
                    this._buffer.push(this._matchChr((this._mbNegative) ? chr : ' '));
                    break;
                default:
            }
        },

        _ensureCharIsDigit : function(cValue){
            if ('0' > cValue || cValue > '9'){
                throw "Nuberic Formatting: not a digit as expected " + cValue;
            }
        },


        _fmtStr : function(str){
            return str;
        },

        _matchStr : function(str){
            return str;
        },

        _matchChr : function(str){
            return str;
        },

        _ensureSignIsAdded : function(){
            if (this._mbNegative && ! this._mbDigitAddedToOutput && ! this._pictureDesc.hasSign) {
                this._buffer.push(this._mNumberSymbols.minus);
                this._mbSignAddedToOutput = true;
            }
        },

        /**
         *
         * @override
         */
        getResult : function(){
            return this._buffer.join("");
        },

        /**
         *
         * @override
         */
        acceptPatternChar : function(chr){
            return xfalib.ut.PictureUtils.inString(chr, "(%$,.)89BCDERSVZbcdrsvzt");
        }

    });

})(_,xfalib);


/**
 * @package xfalib.ut.TimeParsingVisitor
 * @import xfalib.ut.ParsingVisitorBase
 * @fileOverview The file provides parsing/formating logic on date pattern characters.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String, _dataString: String]}
 */

(function(_,xfalib){
    var TimeParsingVisitor = xfalib.ut.TimeParsingVisitor = xfalib.ut.ParsingVisitorBase.extend({

        initialize: function() {
            this._timeInfo = new xfalib.ut.TimeInfo();
            TimeParsingVisitor._super.initialize.call(this);
        },

        consumeSubPattern : function(token){
            var chr = token.patChar;
            var chrCnt = token.len;
            var curPos = this._strPos;
            var scannedChar = chrCnt;
            this._assert(curPos+chrCnt <=this.jsonModel._dataString.length, "Mismatch");

            switch (chr) {
                case 'h':
                    if(this._timeInfo.mHourOfMeriDiem != -1 || this._timeInfo.mHourOfDay != -1){
                        throw "ambiguity time string";
                    }
                    var hourOfMeriDiem=-1;
                    switch(chrCnt){
                        case 1:
                            var parsed = this.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(1-12)
                            hourOfMeriDiem = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            hourOfMeriDiem = this.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(1-12)
                            break;
                    }

                    this._timeInfo.mHourOfMeriDiem = hourOfMeriDiem -1;
                    this._assert(this._timeInfo.mHourOfMeriDiem>=0 && this._timeInfo.mHourOfMeriDiem<=11, "Invalid Hour Of MeriDiem value.");
                    break;

                case 'k':
                    if(this._timeInfo.mHourOfMeriDiem != -1 || this._timeInfo.mHourOfDay != -1){
                        throw "ambiguity time string";
                    }
                    var hourOfMeriDiem=-1;
                    switch(chrCnt){
                        case 1:
                            var parsed = this.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-11)
                            hourOfMeriDiem = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            hourOfMeriDiem = this.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-11)
                            break;
                    }

                    this._timeInfo.mHourOfMeriDiem = hourOfMeriDiem;
                    this._assert(this._timeInfo.mHourOfMeriDiem>=0 && this._timeInfo.mHourOfMeriDiem<=11, "Invalid hour of meriDiem value.");
                    break;

                case 'H':
                    if(this._timeInfo.mHourOfMeriDiem != -1 || this._timeInfo.mHourOfDay != -1){
                        throw "ambiguity time string";
                    }
                    var hourOfDay=-1;
                    switch(chrCnt){
                        case 1:
                            var parsed = this.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-23)
                            hourOfDay = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            hourOfDay = this.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-23)
                            break;
                    }

                    this._timeInfo.mHourOfDay = hourOfDay;
                    this._assert(this._timeInfo.mHourOfDay>=0 && this._timeInfo.mHourOfDay<=23, "Invalid hour of day value.");
                    break;

                case 'K':
                    if(this._timeInfo.mHourOfMeriDiem != -1 || this._timeInfo.mHourOfDay != -1){
                        throw "ambiguity time string";
                    }
                    var hourOfDay=-1;
                    switch(chrCnt){
                        case 1:
                            var parsed = this.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-23)
                            hourOfDay = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            hourOfDay = this.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-23)
                            break;
                    }

                    this._timeInfo.mHourOfDay = hourOfDay - 1;
                    this._assert(this._timeInfo.mHourOfDay>=0 && this._timeInfo.mHourOfDay<=23, "Invalid hour of day value.");
                    break;
                case 'M':
                    if(this._timeInfo.mMinuteOfHour != -1){
                        throw "ambiguity time string";
                    }
                    var minuteOfHour=-1;
                    switch(chrCnt){
                        case 1:
                            var parsed = this.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-59)
                            minuteOfHour = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            minuteOfHour = this.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-59)
                            break;
                    }

                    this._timeInfo.mMinuteOfHour = minuteOfHour;
                    this._assert(this._timeInfo.mMinuteOfHour>=0 && this._timeInfo.mMinuteOfHour<=59, "Invalid minute of hour.");
                    break;
                case 'S':
                    if(this._timeInfo.mSecondOfMinute != -1){
                        throw "ambiguity time string";
                    }
                    var secondOfMinute=-1;
                    switch(chrCnt){
                        case 1:
                            var parsed = this.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-59)
                            secondOfMinute = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            secondOfMinute = this.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(0-59)
                            break;
                    }

                    this._timeInfo.mSecondOfMinute = secondOfMinute;
                    this._assert(this._timeInfo.mSecondOfMinute>=0 && this._timeInfo.mSecondOfMinute<=59, "Invalid second of minute.");
                    break;
                case 'F':

                    this._assert(chrCnt==3, "Invalid pattern F.");
                    this._timeInfo.mThousandthOfSecond = this.parseIntExact(this.jsonModel._dataString, curPos, 3);
                    this._assert(this._timeInfo.mThousandthOfSecond>=0 && this._timeInfo.mThousandthOfSecond<=999, "Invalid thousand of second.");
                    break;

                default: throw "Unsupported pattern";
            }

            this._strPos += scannedChar;
        },

        parseIntAggressive : xfalib.ut.PictureUtils.parseIntAggressive,

        parseIntExact : xfalib.ut.PictureUtils.parseIntExact,

        getResult : function(){
            return this._timeInfo.getISOTime();
        },

        getTimeInfo : function(){
            return this._timeInfo;
        },

        _assert : function(condition, message){
            if(!condition){
                throw message;
            }
        }
    });
})(_,xfalib);



/**
 * @package xfalib.ut.TextParsingVisitor
 * @import xfalib.ut.ParsingVisitorBase
 *
 * @fileOverview Parses a string according to Text Picture.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String, _dataString: String]}
 */
(function(_,xfalib){
    var TextParsingVisitor = xfalib.ut.TextParsingVisitor = xfalib.ut.ParsingVisitorBase.extend({

        initialize: function() {
            TextParsingVisitor._super.initialize.call(this);
            this._buffer = [];
        },

        consumeSubPattern : function(token){
            var chr = token.patChar;
            var chrCnt = token.len;
            for(var index = 0; index < chrCnt; index++){
                switch (chr) {
                    case '9': // Numeric
                        var cUni = this.jsonModel._dataString.charAt(this._strPos++);
                        if(!xfalib.ut.PictureUtils.isDigit(cUni)){
                            throw "TextParsing: not a digit as expected";
                        }
                        this._buffer.push(cUni);
                        break;
                    case 'A': // Alphebetic
                        var cUni = this.jsonModel._dataString.charAt(this._strPos++);
                        if(!xfalib.ut.PictureUtils.isLetter(cUni)){
                            throw "TextParsing: not a character as expected";
                        }
                        this._buffer.push(cUni);
                        break;
                    case 'O': // Alphanumeric
                    case '0':
                        var cUni = this.jsonModel._dataString.charAt(this._strPos++);
                        if(!xfalib.ut.PictureUtils.isLetterOrDigit(cUni)){
                            throw "TextParsing: not a character or digit as expected";
                        }
                        this._buffer.push(cUni);
                        break;
                    case 'X':
                        var cUni = this.jsonModel._dataString.charAt(this._strPos++);
                        this._buffer.push(cUni);
                        break;
                    case 't':
                        if(this.jsonModel._dataString.charAt(this._strPos++)=="\t"){
                            this._buffer.push("\t");
                        }else{
                            throw "TextParsing: not a Tab as expected";
                        }
                        break;
                    default:
                        if(this.jsonModel._dataString.charAt(this._strPos++)== chr){
                            this._buffer.push(chr);
                        }else{
                            throw "TextParsing: not '" + chr+"' as expected";
                        }
                }
            }

        },
        /**
         *
         * @override
         */
        getResult : function(){
            if(this._strPos < this.jsonModel._dataString.length)
                throw "TextParsing: picture clause smaller than input Text";
            return this._buffer.join("");
        },
        /**
         *
         * @override
         */
        acceptPatternChar : function(chr){
            return xfalib.ut.PictureUtils.inString(chr, "9AO0Xt");
        }

    });
})(_,xfalib);


/**
 * @package xfalib.ut.NumParsingVisitor
 * @import xfalib.ut.ParsingVisitorBase
 * @fileOverview Parses a string according to Text Picture.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String,_dataString: String}}
 */

(function(_,xfalib){
    var NumParsingVisitor = xfalib.ut.NumParsingVisitor = xfalib.ut.ParsingVisitorBase.extend({

        initialize: function(options) {
            this._pictureDesc = new xfalib.ut.NumPictureDesc({jsonModel:{_sPicture:this.jsonModel._sPicture}});
            this.jsonModel._sPicture = this._pictureDesc.getPicture();
            this._buffer = [];
            this._strPos = 0;
            this._hasRadix = false;
            this._mbNegative = false;
            this._mbDigitSeen = false; // at least one digit has been added to output
            this._mbSignSeen = false;
            this._mBacktrack = null;
            this._hasPercent = false;
            this._mbExponSeen = false;

            this._mNumberSymbols = xfalib.ut.PictureUtils.getLocaleObject(this.options._locale,"numberSymbols");
            this._mCurrencySymbols = xfalib.ut.PictureUtils.getLocaleObject(this.options._locale,"currencySymbols");
        },

        _lookupNext : xfalib.ut.Scanner.lookupNext,

        parse : function(){
            var patPos = 0;
            while(true){
                try{
                    for(var token = this._lookupNext(this.jsonModel._sPicture, patPos, this.acceptPatternChar); token != null;  ){
                        this.consume(token);
                        patPos = patPos + token.len;
                        token = this._lookupNext(this.jsonModel._sPicture, patPos, this.acceptPatternChar);
                    }
                }catch(e){
                    //mismatch, try again!
                    if(this._mBacktrack){
                        patPos = this._mBacktrack.patPos;
                        this._buffer.length = 0;
                        this._strPos = this._mBacktrack.strPos;
                        this._mbDigitSeen = false;
                        this._mBacktrack = null;
                        continue;
                    }
                }
                break;
            }
        },
        consumeSubPattern : function(token){

            var chr = token.patChar;
            var chrCnt = token.len;
            var fw = false;
            switch (chr) {
                case '9':
                case '8':
                case 'Z': // Digit or space if zero.
                case 'z':// Digit or nothing if zero.
                    while (chrCnt-- > 0 ) {
                        if(!this._mbDigitSeen){
                            var cUni = this.jsonModel._dataString.charAt(this._strPos);
                            if(cUni == '-'){
                                this._mbNegative = true;
                                cUni = this.jsonModel._dataString.charAt(++this._strPos);
                            }
                            if(chr== '9' || chr == '8'){
                                if(!xfalib.ut.PictureUtils.isDigit(cUni)){
                                    throw "TextParsing: not a digit as expected";
                                }
                                this._buffer.push(cUni);
                                this._mbDigitSeen =true;
                            }else if(chr =='Z'){
                                if(xfalib.ut.PictureUtils.isDigit(cUni)){
                                    this._buffer.push(cUni);
                                    this._mbDigitSeen =true;
                                }else if(cUni != ' '){
                                    throw "TextParsing: not a digit or space as expected";
                                }
                            }else {
                                // has to be 'z', eagerly try to match a digit, if a mismatch is latterly found, backtrack
                                if(xfalib.ut.PictureUtils.isDigit(cUni)){
                                    this._buffer.push(cUni);
                                    this._mbDigitSeen =true;
                                    this._mBacktrack = {
                                        "patPos" : token.patPos + token.len - chrCnt, //new position from next char after 'z'
                                        "strPos" : this._strPos
                                    };
                                }else {
                                    throw "TextParsing: not a digit or space as expected";
                                }
                            }
                            ++this._strPos;
                        }else{
                            var cUni = this.jsonModel._dataString.charAt(this._strPos);
                            if(xfalib.ut.PictureUtils.isDigit(cUni)){
                                this._buffer.push(cUni);
                                ++this._strPos;
                            }else{
                                if(chr !='z'){
                                    throw "TextParsing: not a digit as expected";
                                }else{
                                    ++this._strPos;
                                }
                            }
                        }
                    }

                    break;
                case 'V' :
                case 'v' :
                case '.' :
                    if(this._matchStr(this._mNumberSymbols.decimal)){
                        this._hasRadix = true;
                        this._buffer.push('.');
                        this._mbDigitSeen =true;
                    }else{
                        throw "TextParsing: not a radix as expected";
                    }
                    break;
                case 'E': // Exponent.
                    if(this._matchStr('E')){
                        this._buffer.push('E');
                        if(this._matchStr('+')){
                            //
                        }else if(this._matchStr('-')){
                            this.jsonModel._buffer.push('-');
                        }
                        var strLen = this.jsonModel._dataString.length;
                        while(this._strPos < strLen &&
                            xfalib.ut.PictureUtils.isDigit(this.jsonModel._dataString.charAt(this._strPos))){
                            this._buffer.push(this.jsonModel._dataString.charAt(this._strPos++));
                        }
                    }
                    break;

                case 'C': // CR symbol if negative and spaces if positive.
                    if(this._matchStr(xfalib.ut.NumPictureDesc.gsCR)){
                        this._mbNegative = true;
                    }else if(!this._matchStr(xfalib.ut.NumPictureDesc.gsDSP)){
                        throw "TextParsing: not a CR as expected";
                    }
                    break;
                case 'c': // CR symbol if negative and nothing if positive.
                    if(this._matchStr(xfalib.ut.NumPictureDesc.gsCR)){
                        this._mbNegative = true;
                    }
                    break;
                case 'D': // DB symbol if negative and spaces if positive.
                    if(this._matchStr(xfalib.ut.NumPictureDesc.gsDB)){
                        this._mbNegative = true;
                    }else if(!this._matchStr(xfalib.ut.NumPictureDesc.gsDSP)){
                        throw "TextParsing: not a CR as expected";
                    }
                    break;
                case 'd': // DB symbol if negative and nothing if positive.
                    if(this._matchStr(xfalib.ut.NumPictureDesc.gsDB)){
                        this._mbNegative = true;
                    }
                    break;
                case 'S': // Minus sign if negative and a space if positive.
                    if(this._matchStr(this._mNumberSymbols.negative,fw)){
                        this._mbNegative = true;
                    }else if(!this._matchStr(" ")){
                        throw "TextParsing: not a CR as expected";
                    }
                    break;
                case 's':
                    if(this._matchStr(this._mNumberSymbols.negative,fw)){
                        this._mbNegative = true;
                    }
                    break;
                case 0xFF0C: // Fullwidth ','.
                case ',': // Grouping separator.
                    while (chrCnt-- > 0) {
                        if(!this._matchStr(this._mNumberSymbols.grouping, fw)){
                            throw "TextParsing: not a grouping symbol as expected";
                        }
                    }
                    break;
                case 0xFF04: // Fullwidth '$'.
                case '$': // Currency name or symbol.
                    while (chrCnt-- > 0) {
                        if(!this._matchStr(this._mCurrencySymbols.symbol, fw)){
                            throw "TextParsing: not a grouping symbol as expected";
                        }
                    }
                    break;
                case 0xFF05: // Fullwidth '%'.
                case '%': // Percent symbol.
                    while (chrCnt-- > 0) {
                        if(!this._matchStr(this._mNumberSymbols.percent, fw)){
                            throw "TextParsing: not a grouping symbol as expected";
                        }
                    }
                    this._hasPercent = true;
                    break;
                case 0xFF08: // Fullwidth '('.
                case 0xFF09: // Fullwidth ')'.
                case '(': // Left parenthesis.
                case ')': // Right parenthesis.
                    if(this._matchStr(chr,fw)){
                        this._mbNegative = true;
                    }else if(!this._matchStr(" ")){
                        throw "TextParsing: not parentesis as expected";
                    }
                    break;
                case 't': // tab.
                    while (chrCnt-- > 0) this._matchStr('\t',fw);
            }
        },
        getResult : function(){
            var stringNum =  this._buffer.join("");
            if(this._hasPercent) {
                var buf = new Array();
                stringNum = Number(stringNum).toString();
                var dot = stringNum.indexOf('.');

                var pos = dot-2;
                if(pos ==0) buf.push("0");
                else if(pos ==-1) buf.push("0.0");
                else if(pos ==-3) pos = stringNum.length - 2;
                for(var index=0;index < stringNum.length; index++){
                    if(index == pos){
                        buf.push(".");
                    }
                    if(index != dot){
                        buf.push(stringNum.charAt(index));
                    }
                }
                stringNum = buf.join("");
            }
            var number = Number(stringNum);
            if(this._mbNegative) number = -number;
            return number.toString();
        },

        _matchStr : function(target){
            if(xfalib.ut.PictureUtils.matchString(this.jsonModel._dataString, this._strPos, target)){
                this._strPos+= target.length;
                return true;
            }else{
                return false;
            }
        },

        /**
         *
         * @override
         */
        acceptPatternChar : function(chr){
            return xfalib.ut.PictureUtils.inString(chr, "(%$,.)89BCDERSVZbcdrsvzt");
        }
    });
})(_,xfalib);
/**
 * @package xfalib.ut.DateParsingVisitor
 * @import xfalib.ut.ParsingVisitorBase
 * @fileOverview The file provides parsing/formating logic on date pattern characters.
 * @version 0.0.1
 */

/**
 * @constructor
 * @param Object {jsonModel: {_sPicture: String, _dataString: String]}
 */

(function(_,xfalib) {
    var DateParsingVisitor = xfalib.ut.DateParsingVisitor = xfalib.ut.ParsingVisitorBase.extend({

        initialize: function() {
            this._dateInfo = new xfalib.ut.DateInfo({isParsingCall : true});
            this._dayOfMonth = this._monthOfYear = this._yearOfEra = null; // used to validate date once all sub patterns are consumed
            DateParsingVisitor._super.initialize.call(this);
        },

        consumeSubPattern : function(token){
            var chr = token.patChar;
            var chrCnt = token.len;
            var curPos = this._strPos;
            var scannedChar = chrCnt;

            //TODO: need to remove this assert.
            this._assert(curPos+chrCnt <=this.jsonModel._dataString.length, "Mismatch");

            switch (chr) {
                case 'D':
                    switch(chrCnt){
                        case 1:
                            var parsed = xfalib.ut.PictureUtils.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(1-31)
                            this._dayOfMonth = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            this._dayOfMonth = xfalib.ut.PictureUtils.parseIntExact(this.jsonModel._dataString, curPos, 2); // 1-2 digit(1-31)
                            break;
                    }
                    this._assert(this._dayOfMonth <= 31 && this._dayOfMonth >0, "Invalid date string1");
                    break;
                case 'J':

                    //this._mDayOfYear;
                    break;
                case 'M':
                    var symbol = "";
                    switch(chrCnt){
                        case 1:
                            var parsed = xfalib.ut.PictureUtils.parseIntAggressive(this.jsonModel._dataString, curPos, 2); // 1-2 digit(1-12)
                            this._monthOfYear = parsed.value;
                            scannedChar = parsed.len;
                            break;
                        case 2:
                            this._monthOfYear = xfalib.ut.PictureUtils.parseIntExact(this.jsonModel._dataString, curPos, 2); // 2 digit(01-12)
                            break;
                        case 3:
                            symbol = "calendarSymbols.abbrmonthNames";
                            break;
                        case 4:
                            symbol = "calendarSymbols.monthNames"
                            break;

                    }
                    if(symbol) {
                        var hashObj = xfalib.ut.PictureUtils.getHashOfLocaleObject(this.jsonModel._locale,symbol),
                            str = this.jsonModel._dataString.toLowerCase(),
                            hash = 0,
                            curStr = ""
                        scannedChar = 0;
                        while(curPos+scannedChar < str.length) {
                            hash += (scannedChar+1)*str.charCodeAt(curPos+scannedChar)
                            curStr+= str.charAt(curPos+scannedChar);
                            scannedChar++;
                            if(hashObj[hash] && hashObj[hash].indexOf(curStr) > -1 ) break;
                        }
                        var monthNames = _.map(xfalib.ut.PictureUtils.getLocaleObject(this.jsonModel._locale, symbol), function (str) {
                            return str.toLowerCase();
                        });
                        this._monthOfYear = monthNames.indexOf(curStr) + 1; // months are from 1 to 12
                    }
                    //TODO: remove this assert
                    this._assert(this._monthOfYear <= 12 && this._monthOfYear >0, "Invalid date string2");
                    break;
                case 'E':
                    var symbol = ""
                    switch(chrCnt) {
                        case 1:
                            scannedChar = 1;
                            break;
                        case 3:
                            symbol = "calendarSymbols.abbrdayNames";
                            break;
                        case 4:
                            symbol = "calendarSymbols.dayNames"
                            break;
                        default:
                            throw "unsupported Picture Clause ";
                    }
                    if(symbol) {
                        var hashObj = xfalib.ut.PictureUtils.getHashOfLocaleObject(this.jsonModel._locale,symbol);
                        scannedChar = 0;
                        var str = this.jsonModel._dataString.toLowerCase();
                        var hash = 0;
                        var curStr = "";
                        while(curPos+scannedChar < str.length) {
                            hash += (scannedChar+1)*str.charCodeAt(curPos+scannedChar)
                            curStr+= str.charAt(curPos+scannedChar);
                            scannedChar++;
                            if(hashObj[hash] && hashObj[hash].indexOf(curStr) > -1) break;
                        }
                    }
                    break;

                case 'e':
                    break;
                case 'G':
                    break;
                case 'Y':

                    switch(chrCnt){
                        case 2:
                            this._yearOfEra = xfalib.ut.PictureUtils.parseIntExact(this.jsonModel._dataString, curPos, 2); // 2 digit(00-99)
                            this._yearOfEra+=2000;
                            if(this._yearOfEra >= 2029){
                                this._yearOfEra -=100;
                            }
                            break;
                        case 4:
                            this._yearOfEra = xfalib.ut.PictureUtils.parseIntExact(this.jsonModel._dataString, curPos, 4); // 2 digit(0000-9999)
                            break;
                    }

                    this._assert(this._yearOfEra <= 9999 && this._yearOfEra >=0, "Invalid date string3");
                    break;
                case 'w':
                    break;
                case 'W':
                    break;
                default: throw "Unsupported pattern";
            }

            if(this._yearOfEra && this._monthOfYear && this._dayOfMonth){
                this._dateInfo.validate(this._yearOfEra, this._monthOfYear, this._dayOfMonth);
            }

            this._strPos += scannedChar;
        },

        getDate : function(){
            return this._dateInfo.date;
        },

        getResult: function(){
            if (this._strPos < this.jsonModel._dataString.length) {
                throw "DateParsing: picture clause smaller than input Date";
            }
            return this._dateInfo.getISODate();
        },

        _assert : function(condition, message){
            if(!condition){
                throw message;
            }
        }
    });
})(_,xfalib);

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/



(function(_, $, xfalib){

    var LocalizationUtil = xfalib.ut.LocalizationUtil = xfalib.ut.Class.extend({

        getLocalizedMessage: function(category, message, snippets){
            var resolvedMessage = message;
            if(snippets){
                //resolve message with snippet
                resolvedMessage = resolvedMessage.replace(/{(\d+)}/g, function(match, number) {
                    return typeof snippets[number] != 'undefined'
                        ? snippets[number]
                        : match
                        ;
                });
            }
            var text = "";
            if (category) {
                text += " [" + category + "]";
            }
            text += "  " + resolvedMessage + "\r\n" ;
            return text;
        }

    });
})(_, $, xfalib);


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/




(function(_, $, xfalib){
    xfalib.view.util.TextMetrics = {
        xfaUtil : xfalib.ut.XfaUtil.prototype,
        ERROR_MARGIN : 1,
        $measureEl : null,
        initialize : function(divEl){
            if(!divEl){
                var $div = $("<div></div>");
                $div.attr("id", "textMetrics");
                var divStyles = {};
                divStyles.left = -1000;
                divStyles.top = -1000;
                divStyles.position = "absolute";
                divStyles.visibility = "hidden";
                this.xfaUtil.$css($div.get(0), divStyles);
                this.$measureEl = $div;
                $("body").append(this.$measureEl);
            }else{
                this.$measureEl = divEl;
            }
        },

        measureExtent : function(text, options){
            text = text + " ";
            if(!this.$measureEl){
                this.initialize();
            }
            options = options || {};
            var textStyles = {};
            var $refEl =  $(options.refEl || "<div/>") ;
            var refEl = $refEl.get(0);
            textStyles.fontSize = $refEl.css("fontSize") || options["font-size"] || options["fontSize"];
            textStyles.fontStyle = $refEl.css("fontStyle") || options["font-style"] || options["fontStyle"];
            textStyles.fontWeight = $refEl.css("fontWeight") || options["font-weight"] || options["fontWeight"];
            textStyles.fontFamily = $refEl.css("fontFamily") || options["font-family"] || options["fontFamily"];
            textStyles.lineHeight = refEl.style.lineHeight || options["line-height"] || options["lineHeight"];
            textStyles.letterSpacing = $refEl.css("letterSpacing") || options["letter-spacing"] || options["letterSpacing"];
            textStyles.whiteSpace =  $refEl.css("whiteSpace") || options["white-space"] || options["whiteSpace"] || "pre-wrap";
            if( $.browser.mozilla && $refEl.is("textarea"))      // for Bug #3621180
                textStyles.whiteSpace = "pre-wrap";
            textStyles.wordBreak =  $refEl.css("wordBreak") || options["word-break"] || options["wordBreak"] || "break-all";
            textStyles.wordWrap =  $refEl.css("wordWrap") || options["word-wrap"] || options["wordWrap"] || "break-word";
            textStyles.width = this._elWidth(refEl, options);
            textStyles.height = this._elHeight(refEl, options);
            textStyles.minWidth = this._elMinWidth(refEl, options);
            textStyles.minHeight = this._elMinHeight(refEl, options);
            textStyles.maxWidth = this._elMaxWidth(refEl, options);
            textStyles.maxHeight = this._elMaxHeight(refEl, options);
            this.xfaUtil.$css(this.$measureEl.get(0), textStyles);
            // for text fields/areas and draw requiring rich text support
            if(options.contentType === "text/html"){
              // retaining for future use . If we use the above property for other rich text
               if(options.skipXSSProtection) {
                 this.$measureEl.html(text);
               } else {
                 this.$measureEl.html(xfalib.ut.XfaUtil.prototype.encodeScriptableTags(text));
               }
            }else {
               this.$measureEl.text(text);
            }
            var measuredWidth =  this.$measureEl.width();
            var measuredHeight =  this.$measureEl.height();

            if(measuredWidth == Math.ceil(options["width"]) || measuredWidth == Math.floor(options["width"])){
                measuredWidth = options["width"];
            }
            else if(options["maxWidth"] > measuredWidth || (measuredWidth > options["minWidth"] > 0 && (options["maxWidth"] || -1) < 0)){
                //complicated, please simplify if below hurts you:  Add error margin if there is scope of further extension of extent
                measuredWidth = measuredWidth +1;
            }

            if(measuredHeight == Math.ceil(options["height"]) || measuredHeight == Math.floor(options["height"])){
                measuredHeight = options["height"];
            }
            else if( $refEl.is("textarea") && (options["maxHeight"] > measuredHeight || (measuredHeight > options["minHeight"] > 0 && (options["maxHeight"] || -1) < 0))){
                measuredHeight = measuredHeight +1;
            }
            this.$measureEl.empty();
            return {width : measuredWidth, height : measuredHeight};
        },

        _elWidth : function(refEl, options){
            if(options["minWidth"] && options["minWidth"] > -1)
                return "auto";
            else if(options["maxWidth"] && options["maxWidth"] > -1)
                return "auto";
            else
                return options["width"] || "auto";
        },

        _elHeight : function(refEl, options){
            // TODO: check for calculations here for floating field and other cases.
            if(options["contentType"] === "text/html")
                return "auto";
            if(options.isDraw) { // for handling the case of draw having floating fields
                return "auto";
            }
            if(!$(refEl).is("textarea"))
                return options["height"] || "auto";
            if(options["minHeight"] && options["minHeight"] > -1)
                return "auto";
            else if(options["maxHeight"] && options["maxHeight"] > -1)
                return "auto";
            else
                return options["height"] || "auto";
        },

        _elMinWidth : function(refEl, options){
            if(options["minWidth"] && options["minWidth"] > -1)
                return options["minWidth"];
            else
                return "0"; //default css value
        },

        _elMinHeight : function(refEl, options){
            if(options["minHeight"] && options["minHeight"] > -1)
                return options["minHeight"];
            else
                return "0"; //default css value
        },

        _elMaxWidth : function(refEl, options){
            if(options["maxWidth"] && options["maxWidth"] > -1)
                return options["maxWidth"];
            else
                return "none"; //default css value
        },

        _elMaxHeight : function(refEl, options){
            if(options["maxHeight"] && options["maxHeight"] > -1)
                return options["maxHeight"];
            else
                return "none"; //default css value
        },

        _destroy : function() {
            $("#textMetrics").remove();
            this.$measureEl = null;
        }
    }
})(_, $, xfalib);
(function($) {

	$.alertBox = {

		verticalOffset: -75,
		horizontalOffset: 0,
		repositionOnResize: true,
		overlayOpacity: 0.01,
		overlayColor: '#FFF',
		draggable: false,
		dialogClass: null,
		imageDirectory: "..",
		images: ["A_Warning_Lg_N.png", "A_Alert2_Lg_N.png", "C_QuestionBubble_Xl_N.png", "A_InfoBlue_32x32_N.png"],

		alert: function(img, message, title, callback) {
			this._show(img, title, message, null, 'OK', function(result) {
				if( callback ) callback(result);
			});
		},

		okCancel: function(img, message, title, callback) {
			this._show(img, title, message, null, 'OK-Cancel', function(result) {
				if( callback ) callback(result);
			});
		},
		yesNo: function(img, message, title, callback) {
			this._show(img, title, message, null, 'Yes-No', function(result) {
				if( callback ) callback(result);
			});
		},

		yesNoCancel: function(img, message, title, callback) {
			this._show(img, title, message, null, 'Yes-No-Cancel', function(result) {
				if( callback ) callback(result);
			});
		},

		_createBox: function(msgBox_message,buttons,callback) {
			var that = this;
			$("#"+msgBox_message).after("<div id='msgBox_panel'>");
			_.each(buttons.split("-"),function(val,i) {
                var dispval = xfalib.locale.Strings[val.toLowerCase()] ? xfalib.locale.Strings[val.toLowerCase()] : val;  // keys in loaclization files are in lower-case
                $("#msgBox_panel").append("<input type='button' value='"+dispval+"' id = 'msgBox_"+val+"' class=msgbox_input />");
				$("#msgBox_"+val).click( function() {
					that._hide();
					callback(!i);
				});
				if(!i) $("msgBox_"+val).focus();
			});
		},

		_show: function(img, title, msg, value, type, callback) {

			this._hide();
			this._overlay('show');

			$("BODY").append(
			  '<div id="msgBox_container">' +
			    '<h1 id="msgBox_title"></h1>' +
			    '<div id="msgBox_content">' +
			      '<div id="msgBox_message"></div>' +
				'</div>' +
			  '</div>');

			if( this.dialogClass ) $("#msgBox_container").addClass($.alertBox.dialogClass);

			$("#msgBox_container").css({
				position: 'absolute',
				zIndex: 99999,
				padding: 0,
				margin: 0
			});

			$("#msgBox_title").text(title);
			$("#msgBox_content").addClass("msgBoxType"+img);//css("background-image","url("+this.imageDirectory+ this.images[img]+")");
			msg = xfalib.ut.XfaUtil.prototype.encodeScriptableTags(msg.replace(/\n/g, '<br />'));
            $("#msgBox_message").html(msg);

			$("#msgBox_container").css({
				minWidth: $("#msgBox_container").outerWidth(),
				maxWidth: $("#msgBox_container").outerWidth()
			});

			this._reposition();
			this._maintainPosition(true);

			this._createBox("msgBox_message",type,callback);

			//TODO: Make keyboard input work
			/*$("#msgBox_ok").keypress( function(e) {
				if( e.keyCode == 13 || e.keyCode == 27 ) $("#msgBox_ok").trigger('click');
			});
			$("#msgBox_cancel").keypress( function(e) {
				if( e.keyCode == 13 ) $("#msgBox_ok").trigger('click');
				if( e.keyCode == 27 ) $("#msgBox_cancel").trigger('click');
			});
			$("#msgBox_yes, #msgBox_no").keypress( function(e) {
				if( e.keyCode == 13 ) $("#msgBox_yes").trigger('click');
					if( e.keyCode == 27 ) $("#msgBox_no").trigger('click');
				});*/

		},

		_hide: function() {
			$("#msgBox_container").remove();
			this._overlay('hide');
			this._maintainPosition(false);
		},

		_overlay: function(status) {
			switch( status ) {
				case 'show':
					this._overlay('hide');
					$("BODY").append('<div id="msgBox_overlay"></div>');
					$("#msgBox_overlay").css({
						position: 'absolute',
						zIndex: 99998,
						top: '0px',
						left: '0px',
						width: '100%',
						height: $(document).height(),
						background: this.overlayColor,
						opacity: this.overlayOpacity
					});
				break;
				case 'hide':
					$("#msgBox_overlay").remove();
				break;
			}
		},

		_reposition: function() {
            var windowHeight = $(window).height() / xfalib.ut.XfaUtil.prototype.formScaleFactor,
                windowWidth = $(window).width() / xfalib.ut.XfaUtil.prototype.formScaleFactor,
                windowScrollTop =  $(window).scrollTop() / xfalib.ut.XfaUtil.prototype.formScaleFactor,
                windowScrollLeft =  $(window).scrollLeft() / xfalib.ut.XfaUtil.prototype.formScaleFactor,
			    top = ((windowHeight / 2) - ($("#msgBox_container").outerHeight() / 2)) + this.verticalOffset,
			    left = ((windowWidth / 2) - ($("#msgBox_container").outerWidth() / 2)) + this.horizontalOffset;
			if( top < 0 ) top = 0;
			if( left < 0 ) left = 0;

			// IE6 fix
			if( $.browser.msie && parseInt($.browser.version) <= 6 ) top = top + windowScrollTop;

			$("#msgBox_container").css({
				top: top + windowScrollTop + 'px',
				left:  left + windowScrollLeft + 'px'
			});
			$("#msgBox_overlay").height( $(document).height() );
		},

		_maintainPosition: function(status) {
			if( this.repositionOnResize ) {
				switch(status) {
					case true:
						$(window).bind('resize', this._reposition);
					break;
					case false:
						$(window).unbind('resize', this._reposition);
					break;
				}
			}
		}

	};
})($);/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2016 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/


(function(_, $, xfalib){
    xfalib.view.util.HtmlUtil = {
        /*
        * Most of the time it returns undefined while accessing an undefined attribute of a dom element.
        * But some browsers can throw specific exceptions while accessing an attribute which is un-supported for a specific case.
        * This API is to make this behaviour consistent across browsers and return undefined for un-supported attributes.
        * */
        getHTMLSupportedAttr : function($domElement, attr){
           try{
               return $domElement[attr];
            }
           catch (err){
               return undefined;
            }
        },

        /**
         * Checks if the attribute is supported for the given HTML element.
         * This is primarily useful to support HTML5 features in widgets
         * @param element       name of HTML element
         * @param attribute     attribute to check on the element
         * @returns {boolean}
         */
        elementSupportsAttribute : function (element, attribute) {
            var test = document.createElement(element);
            if (attribute in test) {
                $(test).remove();
                test = null;
                return true;
            } else {
                $(test).remove();
                test = null;
                return false;
            }
        }
    }
})(_, $, xfalib);
/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/



(function(_, $, xfalib){
    xfalib.view.util.Styles = {
        xfaUtil : xfalib.ut.XfaUtil.prototype,
        _deviceResolution :  144.0, //DPI
        _in2mmFactor : 25.4,
        _pdfResolution : 72.0 ,
        getStyleForEdge : function (edgeElement, str, cssStyleObj){
            var style = { "raised" : "outset" ,
                "dashDot" : "dashed" ,
                "dashDotDot" : "dashed" ,
                "dashed" : "dashed" ,
                "dotted" : "dotted" ,
                "embossed" : "groove" ,
                "etched" : "inset" ,
                "lowered" : "ridge",
                "solid" : "solid"};
            if(edgeElement && edgeElement.jsonModel.presence != "hidden" && edgeElement.jsonModel.presence !="invisible") {
                cssStyleObj['border'+str+'width'] = this._subPixelValue(this._convertToPx(edgeElement.getAttribute('thickness'))) || "1px";
                if(edgeElement.getElement("color") && edgeElement.getElement("color").getAttribute("value") !="")  {
                    var color =   edgeElement.getElement("color").getAttribute("value");
                    color = "rgb(" + color + ")";
                    cssStyleObj['border'+str+'color']   = color  ;
                }
                else {
                    cssStyleObj['border'+str+'color'] = "rgb(0,0,0)"  ;
                }
                cssStyleObj['border'+str+'style']   = style[edgeElement.getAttribute('stroke')] || "solid" ;
            } else {
                cssStyleObj['border'+str+'width'] =  "0px";
                return 1;
            }

        },

        getStyleForBorder : function (border) {
            if(border) {
                var edge  =  border.getElement('edge', 0, true),
                    edge1 = border.getElement('edge', 1, true),
                    edge2 = border.getElement('edge', 2, true),
                    edge3 = border.getElement('edge', 3, true);
                if(edge || edge1 || edge2 || edge3) {
                    var cssStyleObj = {} ;
                    var e0 = this.getStyleForEdge(edge, "-top-",cssStyleObj);
                    var e1 = this.getStyleForEdge(edge1 || edge,"-right-",cssStyleObj);
                    var e2 = this.getStyleForEdge(edge2|| edge,"-bottom-",cssStyleObj);
                    var e3 = this.getStyleForEdge(edge3 || edge,"-left-",cssStyleObj);
                    if(e0 !=1|| e1 !=1|| e2 !=1|| e3!=1)
                        return cssStyleObj ;
                }
            }
                return null;
        },

        _convertToPx : function(size){
            if(!size)
                return 0;
            size = "" + size;
            var pxSize = size;
            if(size.indexOf("in") >=0){
                pxSize = this._mm2px(parseFloat(size) * this._in2mmFactor);
            }
            else if(size.indexOf("mm") >=0){
                pxSize = this._mm2px(size);
            }
            else if(size.indexOf("cm") >=0){
                pxSize = this._mm2px(parseFloat(size) * 10);
            }
            else if(size.indexOf("pt") >=0){
                pxSize = parseFloat(size) * (this._deviceResolution/this._pdfResolution);
            }
            else if(size.indexOf("px") >=0){
                pxSize = parseFloat(size);
            }
            return pxSize;
        },

        _mm2px : function(mmSize){
            var mmSizeNum = 0;
            if(_.isNumber(mmSize))
                mmSizeNum = mmSize;
            else{
                mmSizeNum = parseFloat(mmSize)
            }
            var mm2in = 1/25.4 ;
            var pxSize = mmSizeNum*mm2in*this._deviceResolution;
            return pxSize;
        },

        _subPixelValue : function(value){
            if(value > 0.01)
                return Math.max(value, 1.0);
            else
                return value;
        }
    }
})(_, $, xfalib);
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2017 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/




(function(_, $, xfalib){
    xfalib.view.util.traversalManager = {

        // compute tabIndex for the provided page
        _computTabIndex : function (pageView) {
            var pageNum = pageView._pageNumber(),
                tabIndex = this._tabIndexBasedOnRange(pageNum);
            this.geographicalOrder = [];
            this._createGeographicalOrder(pageView);
            this._createFinalTraversalOrder(tabIndex); // assign tab index using traversal element and geographicalOrder
            // keep tracks of the last field on the page to get tab index so that handler to render next page can be added on getting focus through tabbing
            this._lastFieldTabbed = null;
        },

        _tabIndexBasedOnRange : function (pageNum) {
            var behaviorConfig = new xfalib.ut.Version(formBridge.userConfig["behaviorConfig"]),
                tabIndexConfig = (behaviorConfig.isOn('mfRangeTabIndex')|| behaviorConfig.isOn('rangeTabIndex')),
                /*assuming single page can not have more than 1000 fields.[index -> 0 to 999]
                  this is also configurable by passing the maximum number of fields allowable in the page
                  in the config parameter */
                maxFieldInPageForTabIndex = tabIndexConfig? parseInt(tabIndexConfig):1000;

            return pageNum * maxFieldInPageForTabIndex;
        },

        // to create geographical order array which will be containing all the views in the geographical order
        _createGeographicalOrder : function (currentView) {
            var sortedChildViewWrapper = this._sortViewGeographically(currentView.childViews);
            _.each(sortedChildViewWrapper, function (wrapper) {
                var currentView = wrapper.view,
                    instanceCheckMap = this._getMapOfInstanceCheck(currentView),
                    isViewEligibleForTabbing = this._isViewEligibleForTabbing(currentView);
                //  If the child view is fieldView, drawView, exclGroupView or subformView then we will push these views in this.geographicalOrder array,
                //  as we need their traverse object during final traversing
                if (((instanceCheckMap.isField && !instanceCheckMap.isChildOfExclGroup) || instanceCheckMap.isSubform || instanceCheckMap.isDraw
                    || instanceCheckMap.isExclGroup) && isViewEligibleForTabbing) {
                    this.geographicalOrder.push({
                        view : currentView,
                        visited : false
                    });
                }
                if (instanceCheckMap.isContainer && isViewEligibleForTabbing) {
                    this._createGeographicalOrder(currentView);
                }
            }, this);
        },

        // to sort provided views in geographical order
        _sortViewGeographically : function (views) {
            var viewsWrapper = [];   // wrapper of view and their geographical reference
            _.each(views, function(view) {
                var position = view.$el.offset(),
                    paddedX = xfalib.ut.XfaUtil.prototype.padString(parseInt(position.left), 5, '0'),
                    marginTop = view._marginTop(),
                    paddedY = position.top - parseFloat(marginTop),
                    positionalReference = parseInt("" + parseInt(paddedY) + paddedX);
                viewsWrapper.push({
                    positionalReference: positionalReference,
                    view: view
                });
            });
            return _.sortBy(viewsWrapper, function(viewWrapper){ return viewWrapper.positionalReference; });
        },

        // Walk through views in geographical order and assign tab index honouring traversal object if present
        _createFinalTraversalOrder : function (tabIndex) {
            var geographicalOrderLength = this.geographicalOrder.length,
                currentWrappedObj = null,
                index = -1,
                traversalIndex = 0,  // index of the element to be traversed
                viewTraversed = 0;  // counter of view traversed

            while (1) {
                if (traversalIndex >= geographicalOrderLength) {
                    traversalIndex = 0;
                }
                currentWrappedObj = this.geographicalOrder[traversalIndex];

                if (!currentWrappedObj || currentWrappedObj.visited) {  // if the wrapped object does not exist or it has been visited move to the next one
                    traversalIndex++;
                } else {
                    currentWrappedObj.visited = true;
                    viewTraversed++;
                    var currentView = currentWrappedObj.view,
                        instanceCheckMap = this._getMapOfInstanceCheck(currentView),
                        currentModel = currentView.model,
                        nextView = null,
                        nextViewSom = null;

                    // get the first traversal of the subform if traversal object is present, else move to the next geographical element
                    // next of the subform will be taken care when we will be finding the next view to be traversed,
                    // as we will be checking if the ancestor contain next before moving to geographically next view
                    if (instanceCheckMap.isSubform) {
                        if (currentModel && currentModel.getTraversalObject()) {
                            // get the first element to be traversed and update traversalIndex
                            nextViewSom = currentModel.getNextTraversalSom(xfalib.template.Constants.firstTraversal);
                            index = this._findViewInGeographicalOrderArray(nextViewSom);
                            traversalIndex = index != -1 ? index : traversalIndex + 1;
                        } else {
                            traversalIndex++;
                        }
                    // get the next traversal for the field/draw if traversal object is present, else move to the next geographical element
                    // update the tabindex for the field
                    } else if (instanceCheckMap.isField || instanceCheckMap.isDraw) {
                        if (instanceCheckMap.isField) {
                            currentView.updateTabIndex(tabIndex);
                            this._lastFieldTabbed = currentView;
                            tabIndex++;
                        }
                        if (currentModel && currentModel.getTraversalObject()) {
                            //get next element to be traversed and update traversalIndex
                            nextViewSom = currentModel.getNextTraversalSom(xfalib.template.Constants.nextTraversal);
                            index = this._findViewInGeographicalOrderArray(nextViewSom);
                            traversalIndex = index != -1 ? index : traversalIndex + 1;
                        } else {
                            traversalIndex = this._findNextViewToBeTraversed(traversalIndex);
                        }
                    // if traversal object present get the next element to be traversed, if first is also present then update tab index of the first element
                    // else look for the traversal element in the children
                    } else if (instanceCheckMap.isExclGroup) {
                        if (currentModel && currentModel.getTraversalObject()) {
                            // get next element to be traversed and update traversalIndex
                            nextViewSom = currentModel.getNextTraversalSom(xfalib.template.Constants.nextTraversal);
                            index = this._findViewInGeographicalOrderArray(nextViewSom);
                            traversalIndex = index != -1 ? index : traversalIndex + 1;
                            // if first is also present assign tab index to that referred child else assign same tab index to all child
                            nextViewSom = currentModel.getNextTraversalSom(xfalib.template.Constants.firstTraversal);
                            tabIndex = this._updateTabIndexOfExclGroupChildren(currentView, tabIndex, nextViewSom);
                        } else {
                            tabIndex = this._updateTabIndexOfExclGroupChildren(currentView, tabIndex);
                            traversalIndex = this._findTraversalInExclGroupChildren(currentView, traversalIndex);
                        }
                    } else {
                        traversalIndex++;
                    }
                }

                // if all the view are traversed, we have assigned tab index to all the views
                if (viewTraversed >= geographicalOrderLength) {
                    this._renderNextPageFuture();
                    break;
                }
            }
        },

        // Check if the nextView is a sibling of the currentView (shares the same parent)
        // if it is not a sibling, check if the parent has a NEXT traversal.
        // if so get the node traversed to else recurse to see if nextView is a sibling of our parent
        // return -1 if the provided next node is sibling of current node or if no ancestor contain next traversal
        // else return index of the next traversal object of parent
        _getParentNextTraversal : function (currentView, nextView, traversalIndex) {
            var parentView = currentView.parentView,
                parentModel = parentView.model,
                nextViewParentModel = nextView.parentView.model,
                traversalObj = null,
                nextIndex = -1;

            if (parentModel && nextViewParentModel && parentModel.somExpression != nextViewParentModel.somExpression) {
                if(parentView && parentView instanceof xfalib.view.SubformView) {
                    if (parentModel.getTraversalObject()) {
                        var nextViewSom = parentModel.getNextTraversalSom(xfalib.template.Constants.nextTraversal);
                        nextIndex = this._findViewInGeographicalOrderArray(nextViewSom);
                        if (nextIndex != -1 && !this.geographicalOrder[nextIndex].visited) {
                            return nextIndex;
                        } else {
                            return traversalIndex++;
                        }
                    } else {
                        this._getParentNextTraversal(parentView, nextView, traversalIndex);
                    }
                } else {  // parentView is not a subform so skip up a level and re-check sibling
                    this._getParentNextTraversal(parentView, nextView, traversalIndex);
                }
            } else {
                return -1;  //provided currentView and nextView are sibling
            }
            return traversalIndex++;
        },

        // return the index of the view having provided somExpression in the geographicalOrder array
        _findViewInGeographicalOrderArray : function (somExpression) {
            return _.findIndex(this.geographicalOrder, function (viewWrapper) {
                var currentViewModel = viewWrapper.view.model;
                return (currentViewModel && currentViewModel.somExpression == somExpression);
            });
        },

        // find the next element to be traversed based on the provided traversalIndex
        _findNextViewToBeTraversed : function (traversalIndex) {
            var currentView = this.geographicalOrder[traversalIndex].view,
                index = this._getNextUnvisited(traversalIndex),   //get next unvisited based on geographical location
                nextView = null,
                nextIndex = -1;

            if (index != -1) {
                nextView = this.geographicalOrder[index].view;
                //check if both are sibling and if not find the next of the parent and update traversalIndex
                nextIndex = this._getParentNextTraversal(currentView, nextView, traversalIndex);
                return nextIndex != -1 ? nextIndex : index;
            }
            return traversalIndex++;
        },

        // return the next unvisited node based on geographical location
        // starting from the traversalIndex and wraps around to check all the views
        _getNextUnvisited : function (traversalIndex) {
            var geographicalOrderLength = this.geographicalOrder.length,
                index = 0,
                actualIndex = 0;
            while(index < geographicalOrderLength) {
                actualIndex = (index + traversalIndex) % geographicalOrderLength;
                if(!this.geographicalOrder[actualIndex].visited) {
                    return actualIndex;
                }
                index++;
            }
            return -1;
        },

        // assign same tab index to all the child of exclude group
        // if exclude group contain first traverse object, then the child being referred as first should have less tabindex
        // compared to other child
        _updateTabIndexOfExclGroupChildren : function (exclGroupView, tabIndex, firstChildSom) {
            _.each(exclGroupView.childViews, function(child){
                if (this._isViewEligibleForTabbing(child)) {
                    if(firstChildSom && child.model.somExpression == firstChildSom) {
                        tabIndex++;
                        child.updateTabIndex(tabIndex-1);
                        this._lastFieldTabbed = child;
                    } else {
                        child.updateTabIndex(tabIndex);
                    }
                }
            }, this);
            if (!firstChildSom) {
                this._lastFieldTabbed = exclGroupView.childViews[0];
            }
            return ++tabIndex;
        },

        // find if any child contains next pointer and update traversal index
        // start with the last in the geographical order of the children and find child which have next traversal
        _findTraversalInExclGroupChildren : function (exclGroupView, traversalIndex) {
            var sortedChildView = this._sortViewGeographically(exclGroupView.childViews),
                tempObj = null,
                childView = null,
                childModel = null,
                traversalObj = null,
                nextViewSom = null,
                index = -1;

            sortedChildView.reverse();
            tempObj = _.find(sortedChildView, function(child) {
                childView = child.view;
                childModel = childView.model;
                if(childModel && (traversalObj = childModel.getTraversalObject())) {
                    return traversalObj.length > 0;
                }
            });

            if (tempObj) {
                nextViewSom = tempObj.model.getNextTraversalSom(xfalib.template.Constants.nextTraversal);
                index = this._findViewInGeographicalOrderArray(nextViewSom);
                traversalIndex = index != -1 ? index : traversalIndex + 1;
            } else { // else get next unvisited based on geographical location
                traversalIndex = this._findNextViewToBeTraversed(traversalIndex);
            }
            return traversalIndex;
        },

        // check if the view is initialized and visible
        _isViewEligibleForTabbing : function (view) {
            if (view._initialized && view.$el.css("visibility") != "hidden") {
                return true;
            }
            return false;
        },

        // return map of whethter provided view is instance of the various views
        _getMapOfInstanceCheck : function (view) {
            var instanceCheckMap = {};
            instanceCheckMap.isSubform = view instanceof xfalib.view.SubformView;
            instanceCheckMap.isField = view instanceof xfalib.view.FieldView;
            instanceCheckMap.isDraw = view instanceof xfalib.view.XfaDrawView;
            instanceCheckMap.isExclGroup = view instanceof xfalib.view.ExclGroupView;
            instanceCheckMap.isChildOfExclGroup = view.parentView instanceof xfalib.view.ExclGroupView;
            instanceCheckMap.isContainer = view instanceof xfalib.view.ContainerView;

            return instanceCheckMap;
        },

        // add event handler for rendering next page on tabbing on last field of the page
        _renderNextPageFuture : function () {
            if (this._lastFieldTabbed) {
                this._lastFieldTabbed.$el.one('focusin.traversalManager', function() {
                    var pagingManager = window.formBridge ? window.formBridge.pagingManager() : null;
                    $(window).on( "keyup.traversalManager", function (e) {
                        var code = (e.keyCode ? e.keyCode : e.which);
                        if (code == 9 && pagingManager && pagingManager.hasMorePages()) {
                            pagingManager.renderNextPage();
                            $(window).off("keyup.traversalManager");
                        }
                    });
                });
            }
        },
        _destroy : function() {
            this.geographicalOrder = null;
        }
    }
})(_, $, xfalib);
/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/



(function(_, $, xfalib){

    var ErrorManager = xfalib.view.util.ErrorManager = xfalib.ut.Class.extend({

        options: {
            warningMessageVisible:false,
            errorMessageVisible: false
        },

        initialize: function () {
            $(window).on("destroy.xfa", function () {
                $("#error-msg").hide();
                $("#warning-msg").hide();
            });
        },

        onFieldEnter: function (jqWidget) {
            var element = jqWidget.element;
            if (jqWidget.option("errorMessage")|| jqWidget.option("warningMessage")) {
                var pos = $(element).offset(),
                    styles = {};
                styles.left = (pos.left * (1 / xfalib.ut.XfaUtil.prototype.formScaleFactor) + element.width() + 5) + "px";
                styles.top = pos.top * (1 / xfalib.ut.XfaUtil.prototype.formScaleFactor) + "px";
                if (jqWidget.option("errorMessage")) {
                    jqWidget.$css($("#error-msg").get(0), styles);
                    $("#error-msg").text(jqWidget.option("errorMessage")).show();
                    jqWidget.option("errorMessageVisible",true);
                }
                else if (jqWidget.option("warningMessage")) {
                    jqWidget.$css($("#warning-msg").get(0), styles);
                    $("#warning-msg").text(jqWidget.option("warningMessage")).show();
                    jqWidget.option("warningMessageVisible",true);
                }
            }
        },

        onFieldExit: function (jqWidget) {
            if (jqWidget.option("errorMessageVisible")) {
                $("#error-msg").hide();
                jqWidget.option("errorMessageVisible",false);
            } else if (jqWidget.option("warningMessageVisible")) {
                $("#warning-msg").hide();
                jqWidget.option("warningMessageVisible",false);
            }
        },

        markError: function (jqWidget, msg, type) {
            // assigning role="alert" so that JAWS reads-out the validation message
            if (type != "warning") {
                if ($("#error-msg").length < 1)
                    $("<div id='error-msg' role='alert'></div>").appendTo('body');
                jqWidget.option("errorMessage",msg);
                jqWidget.element.addClass("dataInvalid");
            } else {
                if ($("#warning-msg").length < 1)
                    $("<div id='warning-msg' role='alert'></div>").appendTo('body');
                jqWidget.option("warningMessage",msg);
            }

        },

        clearError: function (jqWidget) {
            this.onFieldExit(jqWidget);
            jqWidget.element.removeClass("dataInvalid");
            jqWidget.option("errorMessage",null);
            jqWidget.option("warningMessage",null);
        }
    });
})(_, $, xfalib);
(function(_,$, xfalib) {
    var xfaUtil = xfalib.ut.XfaUtil.prototype,
        BUFFER_SPC = 20;

    /* template for the clear Button */
    var clearButtonTemplate = '<div class="dp-clear">' +
        '<a></a>' +
        '</div>';

    /* template for the calendar
    * header contains the navigation icons (left and right arrows)
    * and the current caption (which can be date, year or month)
    *
    * monthview displays the grid for showing the dates for a particular
    * month
    *
    * yearview displays all the months of that year
    *
    * yearsetview displays a grid of 16 years. This can be configured
    * through the option: yearsPerView
    *
    */
    var calendarTemplate = '<div class="dp-header">' +
        '<div class="dp-leftnav"></div>' +
        '<div class="dp-caption"></div>' +
        '<div class="dp-rightnav"></div>' +
        '</div>' +
        '<div class="view dp-monthview"></div>' +
        '<div class="view dp-yearview"></div>' +
        '<div class="view dp-yearsetview"></div>';

    /*template for the timer: not implemented yet */
    var watchTemplate = '<div class="dp-header">' +
        '<div class="dp-leftnav"></div>' +
        '<div class="dp-caption"></div>' +
        '<div class="dp-rightnav"></div>' +
        '</div>' +
        '<div class="view dp-monthview"></div>' +
        '<div class="view dp-yearview"></div>' +
        '<div class="view dp-yearsetview"></div>';

    /** default configuration options
     *
     * container: the html element where the datepicker template will be added
     *
     * yearsPerView: number of years to show in the yearset view
     *
     * width: with of the widget
     *
     * viewHeight: Height of the month,year and yearset view. This doesn't include
     *             the height of the header
     *
     * locale: locale information for the locale in which to show the datepicker which comprises of
     *        days: day names to display in the monthview
     *        months: month names to display in the yearview
     *        zero: string representation of zero in the locale. Numbers will be
     *              displayed in that locale only
     *        clearText: Text to display for the reset button
     *        name: name of the locale
     *
     * format: input format for the datepicker (not implemented)
     *
     * pickerType: type of the datetimepicker (date, datetime and time)
     *
     * positioning: element around which datepicker will be displayed. if null then it
     *              will be displayed around the input element
     *
     * showCalendarIcon: to show the Calendar on the right of the text field or not
     */

    var defaults = {
        container: "body",
        yearsPerView: 16,
        width: 433,
        viewHeight: 248,
        locale: {
            days:["S","M","T","W","T","F","S"],
            months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
            zero: "0",
            clearText: "Clear",
            name:"en_US"
        },
        format:"YYYY-MM-DD",
        pickerType:"date",
        positioning: null,
        showCalendarIcon: false
    },
    dates = [31,28,31,30,31,30,31,31,30,31,30,31],
    /*
     *  Actions to perform when clicked on the datepicker buttons
     *  for different views
     *  caption: view to show when clicked on caption
     *           (Year/YearSet/Month/null) null means don't change the view
     *  li: view to show when clicked on date, month or year element
     *  upDown: add(up key) or subtract(down key) current date (for monthview),
     *          month(Year View) or year(YearSetView) with the number provided
     *  key: identifies the key that needs to be changed for that view
     */
    viewAction = {
        Month: {
            caption: 'Year',
            li: null,
            key:"day",
            upDown:7
        },
        Year: {
            caption: "Yearset",
            li: "Month",
            key:"month",
            upDown:3
        },
        Yearset: {
            caption: null,
            li: "Year",
            key:"year",
            upDown:4
        }
    },
    headerClass = "header",

    DateTimePicker = function() {
        this.initialized = false;
    }

    $.extend(DateTimePicker.prototype, {
        /*
         * create the widget using the provided options
         */
        create: function(options) {
            var $dp,self = this,html="",prevNavWidth,nextNavWidth;
            this.options = $.extend({},defaults,options);
            // prevent memory leak since options.positioning holds reference to HTML DOM
            this.options.positioning = null;
            // If width of date-picker exceeds screen width then it'll take up the entire screen width in AF
            if(window.guideBridge && this.options.width > window.innerWidth) {
               this.options.width=window.innerWidth - BUFFER_SPC; // buffer
            }
            if(this.options.pickerType.match(/date/)) {
                html += calendarTemplate;
            }

            if(this.options.pickerType.match(/time/)) {
                html += watchTemplate;
            }

            html += clearButtonTemplate;

            $.extend(this, {
                selectedDay:0,
                selectedMonth:0,
                selectedYear:0,
                currentDay:0,
                currentMonth:0,
                currentYear:0,
                touchSupported : xfalib.ut.TouchUtil.TOUCH_ENABLED,
                _visible:false,
                _defaultView:"Month",
                _keysEnabled:false,
                $dp:$("<div></div>").addClass("datetimepicker")
                                    .width(this.options.width)
                                    .append(html)
                                    .addClass("datePickerTarget")
                                    .appendTo(this.options.container)
                                    .toggleClass("datetimepicker-notouch",this.touchSupported),
                $month: $(".dp-monthview",this.$dp).height(this.options.viewHeight),
                $year: $(".dp-yearview",this.$dp).height(this.options.viewHeight),
                $yearset : $(".dp-yearsetview",this.$dp).height(this.options.viewHeight)
            });
            this.actualWidth = Math.floor(this.$dp.width());
            $('.dp-clear a',this.$dp).bind("click", $.proxy(this._clearDate,this));
            prevNavWidth = $(".dp-leftnav",this.$dp).bind("click",
                                                            function(evnt) {
                                                                self._adjustDate(-1,self.view)
                                                            })
                                                    .outerWidth(true)
            nextNavWidth = $(".dp-rightnav",this.$dp).bind("click",
                                                            function(evnt) {
                                                                self._adjustDate(1,self.view)
                                                            })
                                                     .outerWidth(true)
            this.$caption = $(".dp-caption",this.$dp).width(this.actualWidth - prevNavWidth - nextNavWidth)
                                                     .bind("click",
                                                            function(evnt) {
                                                                if(!self.$caption.hasClass("disabled")) {
                                                                    self._layout(viewAction[self.view].caption);
                                                                }
                                                       });

            // attach click event on entire datePicker popup
            $(this.$dp).on("click",
                function(evnt) {
                    //focus only if the device doesn't support touch
                    // input otherwise on screen keyboard will popup
                    if(!self.touchSupported)
                        self._curInstance.$field.focus();
                });

            $(window).on("touchstart.datetimepicker mousedown.datetimepicker",self._checkWindowClicked);
            this._curInstance = null;
        },

        /*
         * attaches the date picker to the field. This is a one time operation
         * First creates a configuration object and stores it in the field data attributes
         * then attaches event handlers on click, focus (to show the picker) and blur (to hide) events
         */
        _attachField: function($field,options, value) {
            var inst = this._newInst($field,options, value),
                self = this,
                activateField = function(evnt) {
                    var data = xfaUtil.$data(evnt.target,"datetimepicker");
                    if(data.access == false) {
                        return;
                    }
                    if(!self._curInstance)
                         self._activateField(evnt);

                    if(self.options.showCalendarIcon) {
                        if (evnt.type === self.getEvent()) {
                            if (self._iconClicked) {
                                self._iconClicked = false;
                                self._show();
                            } else {
                                self._hide(); // deactivate calendar popup if field/caption is clicked
                                self._curInstance.$field.focus(); // bring back focus in field
                            }
                        }
                    } else {
                        /*show the popup only if
                         1. click/touch event
                         2. focus event in case of non-touch devices and focus is not done using script
                         */
                        if (evnt.type === self.getEvent() || (evnt.type === "focus" && !self.touchSupported && !self.scriptFocus)) {
                            self._show(evnt);
                        }
                    }

                    self._clickedWindow = true;
                    self.scriptFocus = false;
                },
                deactivateField = function(evnt) {
                    //deactivate only if clicked outside window
                    // on touch devices only keyboard or calander should be active at once, touching keyboard should deactivate calendar
                    if (self._clickedWindow && (self.options.showCalendarIcon || !self.touchSupported)) {
                        self._hide();
                        self._deactivateField();
                        self._clickedWindow = true;
                    }
                };
            xfaUtil.$data($field[0],"datetimepicker",inst);

            $field.bind(this.getEvent(),activateField)
                  .focus(activateField)
                  .blur(deactivateField);
            if(options.showCalendarIcon) {
                $("<div/>").addClass("datepicker-calendar-icon")
                    .insertAfter($field)
                    .css({
                        "width": options.iconWidth + "px",
                        "height": options.iconWidth + "px"
                    })
                    .on(this.getEvent(), function (evnt) {
                        self._iconClicked = true;
                        $field.click();
                    });
            }
        },

        _newInst: function($f,options, value) {
            return {
                $field:$f,
                locale: options.locale,
                positioning: options.positioning || $f,
                access:options.access,
                selectedDate:options.value,
                editValue :options.editValue
            }
        },

        /*
         * To check where the click happened, if happened outside the datepicker
         * then hide the picker. This is checked whether any ancestor of clicked target
         * has a class datePickerTarget. This class is added to the attached element as well
         */
        _checkWindowClicked : function(evnt) {
            var self = adobeDateTimePicker;
            if(self._curInstance) {
                // datepickerTarget class depicts that the component is a part of the Date Field
                // and on click of that class, we should not hide the datepicker or fire exit events.
                if(!$(evnt.target).closest(".datePickerTarget").length) {
                    //non-touch devices do not deactivate on blur. Hence needs to be done here
                    if(self.touchSupported) {
                        self._hide()
                        //clicking outside a field doesn't blur the field in IPad. Doing it by script
                        self._curInstance.$field[0].blur()
                        self._deactivateField()
                    } else{
                        self._clickedWindow = true;
                    }
                }
                else {
                    self._clickedWindow = false;
                }
            }
        },

        /*
         * handling of key strokes. All the key strokes prevent the default browser action
         * unless specified otherwise
         * tab: hides the datepicker and perform default browser action
         * escape: hides the datepicker
         * down arrow key: show the picker if it is hidden, or helping in changing the dates
         * up arrow key: navigate the picker upwards by the number specified in actionView.upDown of the current View
         * left arrow key: navigate the picker one unit of that view backward
         * right arrow key: navigate the picker one unit of that view forward
         * shift + up: perform the action that happens on clicking the caption (as specified in actionView.caption)
         * shift + left: perform the action that happens on clicking the left navigation button
         * shift + right: perform the action that happens on clicking the right navigation button
         * space: select the current focussed date.
         */
        _hotKeys: function(evnt) {
            var handled = false, date;
            switch(evnt.keyCode) {
                case 9: //tab
                    // CQ-4239352 : Setting clickedWindow property to true on tabbing so that deactivateField logic gets executed
                    // When clicking on "x" on input field in in IE and when selecting the content and releasing the mouse select outside the field
                    // the click event is not trigerred on the field and hence activateField is not executed, so clickedWindow remains as false
                    adobeDateTimePicker._clickedWindow = true;
                    adobeDateTimePicker._hide();
                    handled=false;
                    break;
                case 27: //escape
                    adobeDateTimePicker._hide();
                    handled = true;
                    break;
                case 40: //down arrow key
                    if(!this._visible) {
                        this._show();
                        return;
                    }
                    this.$focusedDate.addClass("dp-focus");
                    break;
            }

            if(adobeDateTimePicker._visible && this._keysEnabled) {
                var v = viewAction[this.view].key,
                    updown=viewAction[this.view].upDown;
                switch(evnt.keyCode) {
                    case 32: //select on space
                        this.hotKeyPressed = true;
                        if(this.$focusedDate)
                            this.$focusedDate.trigger("click");
                        this.hotKeyPressed = false;
                        handled = true;
                        break;
                    case 37: //left arrow key
                        if(evnt.shiftKey)
                            $(".dp-leftnav",this.$dp).triggerHandler("click");
                        else
                            this._adjustDate(-1,v);
                        handled = true;
                        break;
                    case 38: //up arrow key
                        if(evnt.shiftKey)
                            this.$caption.triggerHandler("click");
                        else
                            this._adjustDate(-updown,v);
                        handled = true;
                        break;
                    case 39: //right arrow key
                        if(evnt.shiftKey)
                            $(".dp-rightnav",this.$dp).triggerHandler("click");
                        else
                            this._adjustDate(+1,v);
                        handled = true;
                        break;
                    case 40: //down arrow key
                        this._adjustDate(updown,v);
                        handled = true;
                        break;
                    default:
                }
            }
            if(handled) {
                evnt.preventDefault();
            }
        },

        /*
         * show the datepicker.
         */
        _show: function() {
            if(this._curInstance.access == false)
                return;
            this.options.locale = this._curInstance.locale;
            if(!this._visible) {
                var self = this,
                    date = new Date(),
                    val,
                    validDate;
                //Bug#3607735:
                // Date constructor in ipad 5.1 doesn't support "YYYY-MM-DD", hence parsing the date on our own
                validDate = xfalib.ut.DateInfo.ParseIsoString(this._curInstance.selectedDate);
                date = (validDate != null)? validDate.getDate(): new Date();
                this.selectedDay = this.currentDay = date.getDate();
                this.selectedMonth = this.currentMonth = date.getMonth();
                this.selectedYear = this.currentYear = date.getFullYear();
                $('.dp-clear a',this.$dp).text(this.options.locale.clearText);
                this._layout('Month');
                this._position();
                this.$dp.show();
                this._visible = true;
                if (this.options.showCalendarIcon) {
                    this._curInstance.$field.attr('readonly', true);    // when the datepicker is active, deactivate the field
                }
            }

            //   Disabling the focus on ipad  due to a bug where value of
            // date picker is not being set
            // Removing this code will only hamper one use case
            // where on ipad if you click on the calander then
            // the field becomes read only so
            // there is no indication where the current focus is
            // And  if you remove this foucs code all together
            // then what happens is that on desktop MF in iframe the exit event
            // is not getting called hence calander getting remained open even
            // when you click somewhere on window or focus into some other field
            if (this.options.showCalendarIcon  && !this.touchSupported ) {
                this._curInstance.$field.focus(); // field loses focus after being marked readonly, causing blur event not to be fired later
            }
        },

        /*
         * position the datepicker around the positioning element
         * provided in the options
         */
        _position: function() {
            var $elem = this._curInstance.positioning,
                windowScrollX = window.scrollX/ xfalib.ut.XfaUtil.prototype.formScaleFactor,
                windowScrollY = window.scrollY/ xfalib.ut.XfaUtil.prototype.formScaleFactor,
                windowInnerHeight = window.innerHeight/ xfalib.ut.XfaUtil.prototype.formScaleFactor,
                windowInnerWidth = window.innerWidth/ xfalib.ut.XfaUtil.prototype.formScaleFactor,
                height = $elem.outerHeight(true),
                width  = $elem.outerWidth(true),
                top = $elem.offset().top / xfalib.ut.XfaUtil.prototype.formScaleFactor + height,
                left = $elem.offset().left / xfalib.ut.XfaUtil.prototype.formScaleFactor,
                styles = {"top": (top+"px"), "left": (left+"px")},
                diffBottom = top + this.$dp.outerHeight(true) - windowInnerHeight - windowScrollY,
                newLeft,
                newTop;
            if(diffBottom > 0) {
                //can't appear at the bottom
                //check top
                newTop = top - height - this.$dp.outerHeight(true) - BUFFER_SPC;
                if(newTop < windowScrollY) {
                    //can't appear at the top as well ... the datePicker pop up overlaps the date field
                    newTop = top - diffBottom;
                    // Fix for BUG #3626974
                    if(xfaUtil.isWebkit() && !this.options.showCalendarIcon) {
                        this._curInstance.$field.trigger("onoverlap.datetimepicker");
                    }
                }
                styles.top = newTop + "px";
            }
            if(left + this.$dp.outerWidth(true) > windowScrollX + windowInnerWidth ) {
                //align with the right edge
                newLeft = windowScrollX + windowInnerWidth - this.$dp.outerWidth(true) - BUFFER_SPC;
                styles.left = newLeft + "px";
            }
            xfaUtil.$css(this.$dp.get(0), styles);
            return this;
        },

        /*
         * layout the nextView. if nextView is null return
         *
         */
        _layout: function(nextView) {
            if(nextView == null) {
                this._hide();
            } else {
                if(this.view)
                    this['$'+this.view.toLowerCase()].hide();
                this.view = nextView;
                this.$caption.toggleClass("disabled",!viewAction[this.view].caption);
                this['$'+this.view.toLowerCase()].show();
                this["show"+this.view]();
            }
            return this;
        },

        /*
         * show the month view
         */
        showMonth: function() {
            var self = this,
                maxDay =   this._maxDate(this.currentMonth),
                prevMaxDay = this._maxDate((this.currentMonth + 12)%12),
                day1 = new Date(this.currentYear,this.currentMonth,1).getDay(),
                rowsReq = Math.ceil((day1 + maxDay) / 7) + 1,
                data,display;

            this.tabulateView(
                {
                    caption: this.options.locale.months[this.currentMonth] + ", "+ this._convertNumberToLocale(this.currentYear),
                    header:this.options.locale.days,
                    numRows:rowsReq,
                    numColumns:7,
                    elementAt: function(row,col) {
                        var day = (row-1)*7 + col - day1 + 1;
                        display = self._convertNumberToLocale(day);
                        data = day;
                        if(day < 1) {
                            display = self._convertNumberToLocale(prevMaxDay + day);
                            data = -1
                        }
                        else if(day > maxDay) {
                            display = self._convertNumberToLocale(day-maxDay);
                            data = -1;
                        }
                        return {
                            "data":data,
                            "display": display
                        };
                    }
                });
        },

        /*
         * show the year view
         */
        showYear: function() {
            var self = this,month;
            this.tabulateView(
                {
                    caption: this._convertNumberToLocale(this.currentYear),
                    numRows:4,
                    numColumns:3,
                    elementAt: function(row,col) {
                        month =  row*3 + col;
                        return {
                            "data":month,
                            "display": self.options.locale.months[month]
                        };
                    }
                });
        },

        /*
         * show the year set view
         */
        showYearset: function() {
            var year,self = this;
            this.tabulateView(
                {
                    caption: this._convertNumberToLocale(this.currentYear - this.options.yearsPerView/2) +"-"+this._convertNumberToLocale(this.currentYear - this.options.yearsPerView/2 + this.options.yearsPerView - 1),
                    numRows:4,
                    numColumns:4,
                    elementAt: function(row,col) {
                        year =  self.currentYear - 8 + (row*4 + col);
                        return {
                            "data":year,
                            "display": self._convertNumberToLocale(year)
                        };
                    }
                });
        },

        insertRow :  function(rowNum,rowArray,isHeader,height) {
            var $view = this["$"+this.view.toLowerCase()],
                width = (this.actualWidth)/rowArray.length,
                $row = $("ul",$view).eq(rowNum),
                items,$li,element,$tmp,
                self= this;
            if(!$row.length)
                $row = $("<ul></ul>").appendTo($view).toggleClass(headerClass,isHeader);
            $row.height(height);
            items = $("li",$row).length;
            while(items++ < rowArray.length) {
                $tmp = $("<li></li>").appendTo($row)
                if(!isHeader)
                    $tmp.bind("click", $.proxy(this._selectDate,this));
            }

            _.each(rowArray, function(el,index) {
                $li = $("li",$row).eq(index);
                if(isHeader)
                    $li.text(rowArray[index]);
                else {
                    element = rowArray[index];
                    xfaUtil.$data($li.get(0), "value", element.data);
                    if(self._checkDateIsFocussed(element.data)) {
                        if(self.$focusedDate)
                            self.$focusedDate.removeClass("dp-focus");
                        self.$focusedDate = $li;
                        if(self._keysEnabled)
                            self.$focusedDate.addClass("dp-focus")
                    }
                    $li.toggleClass("dp-selected",self._checkDateIsSelected(element.data))
                        .toggleClass("disabled",element.data == -1).text(element.display)
                        .attr("title",element.data);
                }
                $li.css( {"height":height+"px","width":width+"px","line-height":height+"px"});
            })
            return $row;
        },

        /*
         * creates a tabular view based on the options provided. The options that can be passed are
         * numRows: number of rows that needs rendering
         * numCols: number of columns that needs rendering
         * caption: text for the datepickers caption element
         * header: an array of elements that identifies the header row
         * elementAt: a function(row, column) that returns an object (data: <data>, display: <display>) where
         *            <data> is the value to set for that view when the element at (row,column) is clicked and
         *            <display> is the value that will be visible to the user
         */
        tabulateView : function(options) {
            var r = 0,rows = 0,
                row = [],
                ht =  this.options.viewHeight/options.numRows,
                c;
            this.$caption.text(options.caption);
            if(options.header) {
                this.insertRow(r++,options.header,true,ht);
            }
            while(r < options.numRows) {
                c = 0;
                while(c < options.numColumns) {
                    row[c] = options.elementAt(r,c);
                    c++;
                }
                this.insertRow(r++,row,false,ht);
            }
            rows = $(".dp-"+this.view.toLowerCase()+"view ul:visible").length;
            while(rows > options.numRows) {
                $(".dp-"+this.view.toLowerCase()+"view ul").eq(--rows).hide();
            }
            while(options.numRows > rows) {
                $(".dp-"+this.view.toLowerCase()+"view ul").eq(rows++).show();
            }
        },

        _activateField : function(evnt) {
            this._curInstance = xfaUtil.$data(evnt.target,"datetimepicker");
            this._curInstance.$field.trigger("onfocus1.datetimepicker").addClass("datePickerTarget");
            // Issue LC-7049:
            // datepickerTarget should be added when activate the field and should be removed
            // after the fields gets deactivated.
            if (this.options.showCalendarIcon) {
                this._curInstance.$field.parent().addClass("datePickerTarget");
            }
            //enable hot keys only for non touch devices
            if(!this.touchSupported && !this._keysEnabled) {
                $(window).on("keydown.datetimepicker", $.proxy(this._hotKeys,this));
                this._keysEnabled = true;
            }
        },

        _deactivateField: function() {
            if(this._curInstance) {
                if(this._keysEnabled) {
                    $(window).off("keydown.datetimepicker")
                    this._keysEnabled = false;
                }
                //Bug#3607499: on deactivate check the value in the input box, if that is
                // different than the selected Date, change the selectedDate
                //if (this._curInstance.selectedDate != this._curInstance.$field.val()) {
                //    this._curInstance.selectedDate = this._curInstance.$field.val();
                //}
                this._curInstance.$field.trigger("onfocusout.datetimepicker").removeClass("datePickerTarget");
                // Issue LC-7049:
                // datepickerTarget should be added when activate the field and should be removed
                // after the fields gets deactivated. Otherwise clicking on any other datefield
                // will not hide the existing datepicker
                if (this.options.showCalendarIcon) {
                    this._curInstance.$field.parent().removeClass("datePickerTarget");
                }
                this._curInstance = null;
            }
        },

        _hide: function() {
            if(this._visible) {
                this.$dp.hide();
                this._curInstance.$field.trigger("onclose.datetimepicker");
                this._visible = false;
                if (this.options.showCalendarIcon) {
                    this._curInstance.$field.attr('readonly', false);    // when the datepicker is deactivated, activate the field
                }
            }
        },

        _adjustDate: function(step,view) {
            var maxDate,prevMaxDate;
            switch(view.toLowerCase()) {
                case "day":
                    this.currentDay += step;
                    maxDate = this._maxDate(this.currentMonth)
                    if(this.currentDay < 1) {
                        prevMaxDate =  this._maxDate((this.currentMonth - 1 + 12)%12);
                        this.currentDay = prevMaxDate + this.currentDay;
                        return this._adjustDate(-1,"month");
                    }
                    if(this.currentDay > maxDate) {
                        this.currentDay -= maxDate;
                        return this._adjustDate(+1,"month");
                    }
                    break;
                case "month":
                    this.currentMonth += step;
                    if(this.currentMonth > 11) {
                        this.currentYear++;
                        this.currentMonth = 0;
                    }
                    if(this.currentMonth < 0) {
                        this.currentYear--;
                        this.currentMonth = 11;
                    }
                    break;
                case "year":
                    this.currentYear += step;
                    break;
                case "yearset":
                    this.currentYear += step*this.options.yearsPerView;
                    break;
            }
            this._layout(this.view);
        },

        _checkDateIsSelected: function(data) {
            switch(this.view.toLowerCase()) {
                case "month":
                    return this.currentYear == this.selectedYear && this.currentMonth == this.selectedMonth && data == this.selectedDay;
                case "year":
                    return this.currentYear == this.selectedYear && this.selectedMonth == data;
                case "yearset":
                    return this.selectedYear == data;
            }
        },

        _checkDateIsFocussed: function(data) {
            switch(this.view.toLowerCase()) {
                case "month":
                    return data == this.currentDay;
                case "year":
                    return this.currentMonth == data;
                case "yearset":
                    return this.currentYear == data;
            }
        },

        _convertNumberToLocale : function(number) {
            var zeroCode = this.options.locale.zero.charCodeAt(0);
            number += "";
            var newNumber = [];
            for(var i = 0;i < number.length;i++) {
                newNumber.push(String.fromCharCode(zeroCode + parseInt(number.charAt(i))));
            }
            return newNumber.join("");
        },

        _clearDate: function() {
            var isDateEmpty = this._curInstance.$field.val() ? false : true;
            this.selectedYear
                = this.selectedMonth
                = this.selectedYear
                = -1;
            this._curInstance.selectedDate = "";
            this._curInstance.$field.val("");
            if (!isDateEmpty) {
                this._curInstance.$field.trigger("onvaluechange.datetimepicker", [
                    {selectedDate: ""}
                ]);
            }
            $(".dp-selected",this['$'+this.view.toLowerCase()]).removeClass("dp-selected");
        },

        getEvent : function() {
            return "click";//this.touchSupported ? "touchstart" : "click";
        },

        _pad2: function(m) {
            return m = m < 10 ?"0"+m:m;
        },

        toString : function() {
            return this.selectedYear +"-"+this._pad2(this.selectedMonth + 1)+"-"+this._pad2(this.selectedDay);
        },

        _selectDate : function(evnt) {
            var val = xfaUtil.$data(evnt.target, "value"),
                nextView = viewAction[this.view].li,
                editVal;
            //disabled dates have a value of -1. Do nothing in that case
            if(val == -1)
                return;
            switch(this.view.toLowerCase()) {
                case "month":
                    this.selectedMonth = this.currentMonth;
                    this.selectedYear = this.currentYear;
                    this.selectedDay = val;
                    this._curInstance.selectedDate = this.toString();
                    editVal = this._curInstance.editValue(this.toString());
                    this._curInstance.$field.val(editVal)
                    this._curInstance.$field.trigger("onvaluechange.datetimepicker", [
                        {selectedDate: editVal}
                    ]);
                    $(".dp-selected",this['$'+this.view.toLowerCase()]).removeClass("dp-selected");
                    $(evnt.target).addClass("dp-selected");
                    break;
                case "year":
                    this.currentMonth = val;
                    break;
                case "yearset":
                    this.currentYear = val;
                    break;
            }
            this._layout(nextView);
            //manually focus on the field if clicked on the popup buttons for non-touch device
            if(!this.touchSupported) {
                //No need to focus if selection is made by pressing space.
                if(!this.hotKeyPressed) {
                    this.scriptFocus = true;
                }
            } else if(nextView == null){
                //For touch devices, deactivate the field if a selection is made
                this._deactivateField()
            }
        },

        _leapYear : function() {
            return this.currentYear % 400 == 0 || (this.currentYear % 100 != 0 && this.currentYear % 4 == 0);
        },

        _maxDate : function(m) {
            if(this._leapYear() && m == 1)
                return 29;
            else return dates[m];
        },

        _access: function(val) {
            if(typeof val == "undefined")
                return this.access
            this.access = val;
        },

        _value:function(val) {
            if(typeof val == "undefined")
                return this.$field.val()
            else {
                this.selectedDate = val;
                var editValue = this.editValue(val);
                // update the field val with provided value instead of null
                if (!editValue) {
                    editValue = val;
                }
                this.$field.val(editValue);
            }
        }
    });

    var adobeDateTimePicker = new DateTimePicker();

    $.fn.adobeDateTimePicker = function(options, value) {
        if(!adobeDateTimePicker.initialized) {
            adobeDateTimePicker.create(options);
            adobeDateTimePicker.initialized = true;
        }
        if(typeof options === "object") {
            adobeDateTimePicker._attachField(this, options);
        }
        else if(typeof options === "string") {
            if(arguments.length == 2)
                adobeDateTimePicker["_"+options].apply(xfaUtil.$data(this[0],"datetimepicker"),[value])
            else
                return adobeDateTimePicker["_"+options].apply(xfaUtil.$data(this[0],"datetimepicker"))
        }
        return this;
    }
})(_, $, xfalib);
(function (xfalib) {
    xfalib.ut.TouchUtil = (function () {
        var touchAvailable = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) ,
            pointerEnabled = !!(window.MSPointerEvent || window.PointerEvent) ,
            POINTER_DOWN_EVENT = "mousedown",
            POINTER_MOVE_EVENT = "mousemove",
            POINTER_UP_EVENT = "mouseup",
            EVENT_TYPE = "MouseEvent";

        if (window.PointerEvent) { //> IE11
            POINTER_DOWN_EVENT = "pointerdown";
            POINTER_MOVE_EVENT = "pointermove";
            POINTER_UP_EVENT = "pointerup";
            EVENT_TYPE = "PointerEvent";

        } else if (window.MSPointerEvent) { // IE10
            POINTER_DOWN_EVENT = "MSPointerDown";
            POINTER_MOVE_EVENT = "MSPointerMove";
            POINTER_UP_EVENT = "MSPointerUp";
            EVENT_TYPE = "MSPointerEvent" ;

        } else if (touchAvailable) {  // other touch devices
            POINTER_DOWN_EVENT = "touchstart";
            POINTER_MOVE_EVENT = "touchmove";
            POINTER_UP_EVENT = "touchend";
            EVENT_TYPE = "TouchEvent";
        }
        return {
            TOUCH_ENABLED: touchAvailable,
            // new MS Pointer Events
            POINTER_EVENT: EVENT_TYPE,
            POINTER_ENABLED: pointerEnabled,
            POINTER_DOWN: POINTER_DOWN_EVENT,
            POINTER_MOVE: POINTER_MOVE_EVENT,
            POINTER_UP: POINTER_UP_EVENT,
            getTouchEvent: function (evt) {
                var target;
                if (pointerEnabled) {
                    target = evt.originalEvent;
                } else if (touchAvailable) {
                    target = evt.originalEvent || evt;
                    target = target.touches[0];
                    //if (evt.originalEvent && evt.originalEvent.changedTouches && evt.originalEvent.changedTouches[0]) {
                    //    te = evt.originalEvent.changedTouches[0];
                    //}
                }

                return target || evt;
            },
            getPointerEvent: function (eventType) {
                var event = null;
                if ((typeof PointerEvent) === "function") {
                    event = new PointerEvent(eventType, {
                        bubbles: true,
                        cancelable: true
                    });
                } else {
                    event = document.createEvent(EVENT_TYPE);
                    event.initEvent(eventType, true, true);
                }
                return event;
            },
            getTouches:function(evt){
                var touches = [];
                if(touchAvailable && evt.originalEvent && evt.originalEvent.touches ){
                    touches = evt.originalEvent.touches;
                }
                return touches;
            }
        };
    })();
})(xfalib);
(function ($) {
    $.widget("xfaWidget.abstractWidget", {

        $userControl: null,

        $data: xfalib.ut.XfaUtil.prototype.$data,

        $css: xfalib.ut.XfaUtil.prototype.$css,

        getOrElse: xfalib.ut.Class.prototype.getOrElse,

        dIndexOf: xfalib.ut.XfaUtil.prototype.dIndexOf,

        btwn: xfalib.ut.XfaUtil.prototype.btwn,

        logger: xfalib.ut.XfaUtil.prototype.getLogger,

        localeStrings: xfalib.ut.XfaUtil.prototype.getLocaleStrings,

        logMsgs: xfalib.ut.XfaUtil.prototype.getLogMessages,

        errorManager: xfalib.ut.XfaUtil.prototype.getErrorManager,

        _widgetName: "abstractWidget",

        // if there are any specific black listed attributes, each widget should define their own
        _blackListedAttributes : ["type"],

        options: {
            name: "",
            value: null,
            commitProperty: "value",
            displayValue: null,
            screenReaderText: null,
            tabIndex: 0,
            role: null,
            paraStyles: null,
            dir: null,
            errorMessage: null,
            warningMessage: null,
            hScrollDisabled: false,
            placeholder:"",
            isValid:true
        },

        getOptionsMap: function () {
            return {
                "tabIndex": function (val) {
                    this.$userControl.attr("tabindex", val);
                },
                "role": function (val) {
                    if (val)
                        this.$userControl.attr("role", val);
                },
                "screenReaderText": function (val) {
                    if (val)
                        this.$userControl.attr("aria-label", val)
                },
                "paraStyles": function (val) {
                    if (val)
                        this.$css(this.$userControl.get(0), val);
                },
                "dir": function (val) {
                    if (val)
                        this.$userControl.attr("dir", this.options.dir);
                },
                "height": function (val) {
                    if (val) {
                        this.$css(this.$userControl[0], {"height": val})
                    }
                },
                "width": function (val) {
                    if (val)
                        this.$css(this.$userControl[0], {"width": val})
                },
                "isValid": function (val) {
                    if(val){
                      this.$userControl.removeAttr("aria-invalid");
                    } else {
                      this.$userControl.attr("aria-invalid",true);
                    }
                },
                "color" : function(value) {
                    if(!_.isEmpty(value)) {
                        var color = "rgb(" + value + ")";
                        this.$css(this.$userControl[0], {"color": color});
                    }
                },
                "font-style" : function (value) {
                    if (!_.isEmpty(value)) {
                        this.$css(this.$userControl[0], {"font-style": value});
                    }
                }
            };
        },

        getEventMap: function () {
            return {
                "focus": xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT,
                "blur": xfalib.ut.XfaUtil.prototype.XFA_EXIT_EVENT,
                "click": xfalib.ut.XfaUtil.prototype.XFA_CLICK_EVENT
            };
        },

        /**
         * Copies all the attributes from source jquery object to destination jquery object
         * @param $src      source jquery object
         * @param $dest     destination jquery object
         */
        copyAttributesFromSrcToDest : function($src, $dest){
            var that = this;
            // let's get all the attribute from the src element and copy it to dest jquery object
            if($src != null && $src[0] && $src[0].attributes && $dest != null){
                $.each($src[0].attributes, function() {
                    // we don't add the black listed set of attributes
                    if(this.specified && this.value != null && _.isString(this.value) && this.value.length > 0 && that._blackListedAttributes.indexOf(this.name) === -1) {
                        $dest.attr(this.name, this.value);
                    }
                });
            }
        },

        _create: function () {
            this.widgetEventPrefix = "";
            this.element.addClass(this._widgetName);
            this.$userControl = this.render();
            this.optionsHandler = this.getOptionsMap();
            this.eventMap = this.getEventMap();
            this._initializeOptions();
            this._initializeEventHandlers();
            this.errObj = this.errorManager();
            //call it only after render
            // Dirty hack to prevent this being called in Guide
            if (typeof guidelib === "undefined") {
                this.$css(this.$userControl.get(0), {
                    "box-sizing": "border-box",
                    "position": "absolute"
                });
            }
        },

        _initializeEventHandlers: function () {
            xfalib.ut.XfaUtil.prototype.getLogger().debug("xfa", "initialize event handlers for " + this._widgetName);
            _.each(this.eventMap, function (xfaevent, htmlevent) {
                var self = this;
                if (xfaevent) {
                    if (!(xfaevent instanceof  Array)) {
                        xfaevent = [xfaevent];
                    }
                    for (var i = 0; i < xfaevent.length; i++) {
                        xfalib.ut.XfaUtil.prototype.getLogger().debug("xfa", "binding " + htmlevent + " with " + xfaevent[i]);
                        this.$userControl.bind(htmlevent,
                            (function (xfevnt) {
                                return function (evnt) {
                                    xfalib.ut.XfaUtil.prototype.getLogger().debug("xfa", "trigger " + evnt.type +
                                    " xfa-event " + xfevnt);
                                    self._preProcessEvent.apply(self, [xfevnt, evnt]);
                                    //since the fix https://github.com/jquery/jquery/pull/972, Fix for keeping namespace when triggering an event using an Event #972
                                    //we need to clear the namespace and its regular expression of triggering event, as the listeners are registered on un-namespaced events
                                    evnt.namespace = "";
                                    evnt.namespace_re = "";
                                    self._trigger(xfevnt, evnt);
                                    self._postProcessEvent.apply(self, [xfevnt, evnt]);
                                }
                            })(xfaevent[i])
                        )

                    }
                }
            }, this)
        },

        _preProcessEvent: function (xfaevent, htmlevent) {
            if (xfaevent == this.options.commitEvent) {
                this.preProcessCommit(htmlevent);
            }
            switch (xfaevent) {
                case xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT:
                    this.preProcessEnter(htmlevent);
                    break;
                case xfalib.ut.XfaUtil.prototype.XFA_EXIT_EVENT:
                    this.preProcessExit(htmlevent);
                    break;
                case xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT:
                    this.preProcessChange(htmlevent);
                    break;
                case xfalib.ut.XfaUtil.prototype.XFA_CLICK_EVENT:
                    this.preProcessClick(htmlevent);
                    break;
            }

        },

        _postProcessEvent: function (xfaevent, htmlevent) {
            if (xfaevent == this.options.commitEvent) {
                this.postProcessCommit(htmlevent);
            }
            switch (xfaevent) {
                case xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT:
                    this.postProcessEnter(htmlevent);
                    break;
                case xfalib.ut.XfaUtil.prototype.XFA_EXIT_EVENT:
                    this.postProcessExit(htmlevent);
                    break;
                case xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT:
                    this.postProcessChange(htmlevent);
                    break;
                case xfalib.ut.XfaUtil.prototype.XFA_CLICK_EVENT:
                    this.postProcessClick(htmlevent);
                    break;
            }
        },

        _initializeOptions: function () {
            _.each(this.optionsHandler, function (value, key) {
                if (typeof value === "function")
                    value.apply(this, [this.options[key]]); // TODO: check whether it is needed for initialization or not
            }, this)
        },

        _setOption: function (key, value) {
            if (this.options[key] != value) {
                this.options[ key ] = value;
                if (typeof this.optionsHandler[key] === "function") {
                    this.optionsHandler[key].apply(this, [this.options[key]])
                }
            }
        },

        /**
         * @override
         */
        option: function (key, value) {
            if (arguments.length === 1 &&
                typeof key === "string" &&
                this.options.hasOwnProperty(key) &&
                this.options[key] === undefined) {
                return undefined;
            }
            return $.Widget.prototype.option.apply(this, arguments)
        },

        destroy: function () {
            this.$userControl.removeClass(this._widgetName);
        },


        render: function () {
            var control;
            if (this.element.children().length > 0) {
                control = $(this.element.children().get(0));
            }
            else
                control = this.element;
            control.attr("name", this.options.name)
            return control;
        },


        preProcessCommit: function (evnt) {
            this.options.value = this.getCommitValue();
            xfalib.ut.XfaUtil.prototype.getLogger().debug("xfa", "passing commit value " + this.options.value +
            "to model ");
        },

        getCommitValue: function () {

        },

        preProcessExit: function (evnt) {

        },

        preProcessEnter: function (evnt) {
            //Only focus the enabled widgets
            if (this.options.access === "open") {
                this._showError();
                this.showValue();
            }
        },

        preProcessChange: function (evnt) {

        },

        preProcessClick: function (evnt) {

        },

        postProcessCommit: function (evnt) {
            this.showDisplayValue();
        },

        postProcessExit: function (evnt) {
            //Only for the enabled widgets
            if (this.options.access === "open") {
                this.showDisplayValue();
                this._hideError();
            }
        },

        postProcessEnter: function (evnt) {
        },

        postProcessChange: function (evnt) {

        },

        postProcessClick: function (evnt) {

        },

        showDisplayValue: function () {
            this.$userControl.val(this.options.displayValue)
        },

        /**
         * Checks if the edit value is same as value present in the user control(html form element)
         * @returns {boolean}
         */
        _isValueSame : function(){
            return (((this.options.value === null) && (this.$userControl.val() === "")) || (this.options.value === this.$userControl.val()));
        },

        showValue: function () {
            // May be $userControl doesn't have val(), using it as of now
            // If the value of the field is not same as edit value, only then set the value, this also solves IE bug of cursor
            // moving to the end of field on click
            if(!this._isValueSame()) {
                this.$userControl.val(this.options.value)
            }
        },

        focus: function () {
            var that = this;
            // setTimeout added to fix CQ-51141
            // While using setFocus API in adaptive form, the focus was not being set in TextBox on chrome
            // and also on click of caption of RadioButton/Checkbox, due to fast event execution, hence adding delay during focus.
            setTimeout(function(){
                that.$userControl[0].focus();
            }, 1);
        },

        click: function () {
            this.focus();
            this.$userControl.triggerHandler("click"); // we do not want the exact click as might bubble up to the field.
        },

        /* widget specific code */

        _showError: function () {
            if(this.errObj && _.isFunction(this.errObj.onFieldEnter)) {
                this.errObj.onFieldEnter(this);
            }
        },

        _calculatePaddingForVAlign:function(diff){
           var flagForMoz = $.browser.mozilla && !xfalib.ut.Utilities.isIE11() &&
                              this.options.multiLine,
               vAlignBottomOrTop = this.options.paraStyles &&
                                   (this.options.paraStyles["vertical-align"] == "bottom" ||
                                    this.options.paraStyles["vertical-align"] == "top");

           if(flagForMoz && vAlignBottomOrTop || $.browser.msie && this.options.multiLine) {
              return;
           }
           // to handle the edge cases, if the diff is like -0.01 the whole operation is getting aborted
           // this diff comes mainly due to scroll height getting rounded off when widgetHeight is like x.999999
           diff = (diff > -0.01) ? Math.abs(diff) : diff;
           if (this.options.paraStyles && diff > 0) {
                var vAlign = this.options.paraStyles["vertical-align"];
                if (vAlign == "bottom") {
                    diff = diff - this.options.paraStyles["padding-bottom"];
                    this.$userControl.css("padding-top", diff);
                    this.padding = this.$userControl.css("padding-top");
                }
                else if (vAlign == "top" || (vAlign != "middle" && vAlign == undefined)) {
                    if (this.options.paraStyles["padding-top"])
                        diff = diff - this.options.paraStyles["padding-top"];
                    this.$userControl.css("padding-bottom", diff);
                    this.padding = this.$userControl.css("padding-bottom");
                }
                else if (this.options.multiLine && vAlign == "middle") {
                    var newDiff = diff / 2;
                    newDiff = newDiff - this.options.paraStyles["padding-bottom"];
                    if (this.options.paraStyles["padding-top"])
                        newDiff = newDiff + this.options.paraStyles["padding-top"];
                    this.$userControl.css("padding-top", newDiff);
                }
            }
        },

        _handleVAlignOnExit: function (evnt) {

            if (!this.options.paraStyles) {
                //vAlign has to be handled only if there is paraStyles
                return;
            }
            var value = this.options.displayValue,
                lineHeight = xfalib.view.util.TextMetrics.measureExtent(value, {refEl: this.$userControl.get(0), maxHeight: -1}).height,
                widgetHeight = this.options.height,
                diff = widgetHeight - lineHeight;
            this._calculatePaddingForVAlign(diff);

        },

        _handleVAlignOnEnter: function (evnt) {
            //Only align the enabled widgets
            var flagForIE = $.browser.msie && this.options.multiLine;
            if (this.options.paraStyles && !flagForIE) {
                 var vAlign = this.options.paraStyles["vertical-align"];
                 if (vAlign == "bottom" && this.padding)
                     this.$userControl.css("padding-top", this.padding);
                 else if (vAlign == "top" && this.padding)
                     this.$userControl.css("padding-bottom", this.padding);
            }
        },

        _hideError: function () {
            if(this.errObj && _.isFunction(this.errObj.onFieldExit)) {
                this.errObj.onFieldExit(this);
            }
        },

        markError: function (msg, type) {
            if(this.errObj && _.isFunction(this.errObj.markError)) {
                this.errObj.markError(this, msg, type);
            }
        },

        clearError: function () {
            if(this.errObj && _.isFunction(this.errObj.clearError)) {
                this.errObj.clearError(this);
            }
        },

        getEditValue: function(value) {
            if(this.options.editPattern == null) {
                return value;
            }
            try {
                return xfalib.ut.PictureFmt.format(value, this.options.editPattern);
            } catch(e) {
                return null;
            }
        },

        parseEditValue: function(value) {
            if(this.options.editPattern == null) {
                return value;
            }
            try {
                return xfalib.ut.PictureFmt.parse(value, this.options.editPattern);
            } catch(e) {
                return value;
            }
        }
    });
})($);
(function($) {
    $.widget( "xfaWidget.defaultWidget", $.xfaWidget.abstractWidget, {

        _widgetName: "defaultWidget",

        getOptionsMap: function() {
            var parentOptionsMap = $.xfaWidget.abstractWidget.prototype.getOptionsMap.apply(this,arguments);
            return $.extend({},parentOptionsMap,{
                "access": function(val) {
                    switch(val) {
                        case "open" :
                            this.$userControl.removeAttr("readOnly");
                            this.$userControl.removeAttr("aria-readonly");
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                        case "nonInteractive" :
                        case "protected" :
                            this.$userControl.attr("disabled", "disabled");
                            this.$userControl.attr("aria-disabled", "true");
                            break;
                        case "readOnly" :
                            this.$userControl.attr("readOnly", "readOnly");
                            this.$userControl.attr("aria-readonly", "true");
                            break;
                        default  :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                    }
                },

                "displayValue": function(val) {
                    if(this.options.commitProperty) {
                        if($.browser.mozilla && this.options.commitProperty == "value") {
                            // on submitting form firefox does not remember autocomplete values, if updated through attr()
                            this.$userControl.val(this._displayEmptyStringForIE(this.options.displayValue));
                        } else {
                            this.$userControl.prop(this.options.commitProperty, this._displayEmptyStringForIE(this.options.displayValue));
                            this.$userControl.attr(this.options.commitProperty, this._displayEmptyStringForIE(this.options.displayValue));
                        }
                    } else {
                        this.logger().debug("xfaView", "[DefaultWidget._update], User Control or Commit Property is null");
                    }
                },

                "placeholder": function(value){
                    this.$userControl.attr("placeholder", value);
                }
            });
        },

        _displayEmptyStringForIE: function(value){
            /*CQ-69417: By default "null" is displayed in the comments text box
              "null" values shown in IE */
            // CQ-69107 included check for edge as well
            return (value == null && xfalib.ut.XfaUtil.prototype.detectIE()) ? '' : value;
        },

        render : function() {
            var control = $.xfaWidget.abstractWidget.prototype.render.apply(this,arguments)
            this._attachEventHandlers(control)
            return control
        },

        getCommitValue: function() {
            var value = this.$userControl.val();
            if(this.options.hScrollDisabled && !this.options.multiLine)
                var value = xfalib.ut.XfaUtil.prototype.splitStringByWidth(this.$userControl.val(),this.$userControl.width(),this.$userControl.get(0)) ;
            return value;
        },

        _attachEventHandlers: function($control) {
            $control.keydown($.proxy(this._handleKeyDown,this));
            $control.keypress($.proxy(this._handleKeyPress,this));
            $control.on('paste',$.proxy(this._handlePaste,this));
            $control.on('cut',$.proxy(this._handleCut,this));
        },

        _handleKeyDown : function(event){
            if(event.keyCode == 13 || event.charCode == 13 || event.which == 13) // touch devices may return charCode
                event.preventDefault();
        },

        _handleKeyPress : function(event){
            if(event.keyCode == 13 || event.charCode == 13 || event.which == 13) // touch devices may return charCode
                event.preventDefault();
        }
    });
})($);
(function($, _) {
    var xfaUtil = xfalib.ut.XfaUtil.prototype;
    $.widget( "xfaWidget.dateTimeEdit", $.xfaWidget.defaultWidget, {

        _widgetName : "dateTimeEdit",

        getEventMap: function() {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this,arguments);
            if(this._nativeWidget === false) {
                return $.extend({}, parentOptionsMap, {
                    "onfocus1.datetimepicker": xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT,
                    "onvaluechange.datetimepicker": xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT,
                    "onfocusout.datetimepicker": xfalib.ut.XfaUtil.prototype.XFA_EXIT_EVENT,
                    "onoverlap.datetimepicker": xfalib.ut.XfaUtil.prototype.XFA_CLICK_EVENT, // Custom Event to fix BUG #3626974
                    "input": xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT, // TODO : add handler for xfa.event.change
                    "focus": null,
                    "blur": null
                })
            } else {
                return $.extend({}, parentOptionsMap, {
                    "change": xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT
                })
            }
        },

        _getAdobeDatePickerOptionsMap : function(parentOptionsMap) {
            return {
                "access" : function (val) {
                    switch (val) {
                        case "open" :
                            this.$userControl.adobeDateTimePicker("access", true);
                            break;
                        case "nonInteractive" :
                        case "protected" :
                        case "readOnly" :
                            this.$userControl.adobeDateTimePicker("access", false);
                            break;
                    }
                    parentOptionsMap.access.apply(this, arguments);
                },
                "displayValue" : function (val) {
                    // set the value in the datepicker plugin
                    this.$userControl.adobeDateTimePicker("value", this.options.value);
                    // show the display value
                    this.showDisplayValue();
                }
            }
        },

        _getNativeDatePickerOptionsMap: function (parentOptionsMap) {
            return {
                "displayValue": function (val) {
                    this.showDisplayValue();
                }
            }
        },


        getOptionsMap: function() {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments),
                datePickerOptions = this._nativeWidget === false ? this._getAdobeDatePickerOptionsMap(parentOptionsMap)
                    : this._getNativeDatePickerOptionsMap(parentOptionsMap),
                commonOptions = {
                    "paraStyles": function (paraStyles) {
                        parentOptionsMap.paraStyles.apply(this, arguments);
                        this._handleVAlignOnExit();
                    },

                    "width": function (val) {
                        parentOptionsMap.width.apply(this, arguments);
                        if (this.options.showCalendarIcon && val) {
                            var effectiveWidth = val > this.options.calendarIconWidth ? val - this.options.calendarIconWidth : val;
                            this.$userControl.width(effectiveWidth);  // leave space for the cal icon
                        }
                    },

                    "height": function(val) {
                        parentOptionsMap.height.apply(this, arguments);
                        this._handleVAlignOnExit();
                    },

                    "screenReaderText": function (val) {
                        if (val) {
                            this.$userControl.attr("aria-label", val + " , " + xfalib.locale.Strings.dpFormatInst);
                        }
                    }
                };
            return $.extend({},parentOptionsMap,datePickerOptions, commonOptions);
        },

        postProcessExit: function(evnt) {
            $.xfaWidget.defaultWidget.prototype.postProcessExit.apply(this,arguments);
            this._handleVAlignOnExit ();
        },

        preProcessEnter: function(evnt) {
            $.xfaWidget.defaultWidget.prototype.preProcessEnter.apply(this,arguments);
            this._handleVAlignOnEnter();
        },

        preProcessChange: function(evnt) {
           //CQ-46332:loss of date value in date-picker , setting the value here or else
           //it gets lost during focus
           if(this._nativeWidget === true){
            this.options.value = this.$userControl.val();
           }
        },

        showDisplayValue: function() {
            if(this._nativeWidget === false) {
                $.xfaWidget.defaultWidget.prototype.showDisplayValue.apply(this, arguments);
            } else {
                this.showValue();
            }
        },


        showValue: function () {
            if (this._nativeWidget == false) {
                this.$userControl.adobeDateTimePicker("value", this.options.value);
            } else {
                $.xfaWidget.defaultWidget.prototype.showValue.apply(this, arguments);
            }
            $.xfaWidget.textField.prototype._selectOnFocusInIE.apply(this, arguments);
        },

        getCommitValue: function() {
            if (this._nativeWidget === false) {
                var value = this.$userControl.adobeDateTimePicker("value"),
                    parsedValue = this.parseEditValue(value);
                return parsedValue;
            }
            return $.xfaWidget.defaultWidget.prototype.getCommitValue.apply(this, arguments);
        },

        render: function() {
            var self = this,
                textStyle = this.getOrElse(this.$data(this.element.get(0), "xfamodel"), "textstyle", ""),
                $control = $.xfaWidget.abstractWidget.prototype.render.apply(this, arguments),
                $source = $control,
                id,
                existingInlineStyleAttributeValues,
                newInlineStyleAttributeValues,
                combinedInlineStyleAttributeValues;
            existingInlineStyleAttributeValues = this.element.find("input").attr("style") || '';
            this._nativeWidget = true;
            if(this.options.useNativeWidget === false || $control[0].type !== "date") {
                this._nativeWidget = false;
                id = this.element.find("input")[0].id;
                this.element.children().remove();
                $("<div></div>").css({position: "relative", width: "100%", height: "100%"}) // want to fill entire width of containing table cell
                    .append($("<input type='text'/>"))
                    .appendTo(this.element);
                $control = $("input", this.element).
                    attr("style", textStyle).
                    attr("name", this.options.name).
                    attr("id", id).
                    adobeDateTimePicker({
                        positioning: this.element,
                        locale: {
                            months: this.options.months,
                            days: this.options.days,
                            zero: this.options.zero,
                            clearText: this.options.clearText
                        },
                        access: this.options.access,
                        value: this.options.value,
                        showCalendarIcon: this.options.showCalendarIcon,
                        iconWidth: this.options.calendarIconWidth,
                        editValue: function (value) {
                            return self.getEditValue(value);
                        }
                    });
            }
            this._attachEventHandlers($control);
            newInlineStyleAttributeValues = this.element.find("input").attr("style") || '';
            //append the previous inlineStyleAttributeValues to newInlineStyleAttributeValues so that the inline styles
            //added from the dialog are applied.
            combinedInlineStyleAttributeValues = newInlineStyleAttributeValues + existingInlineStyleAttributeValues;
            this.element.find("input").attr("style", combinedInlineStyleAttributeValues);
            // only in case of adaptive form, we would copy the attributes back
            if(window.guideBridge) {
                // restore the original attribute back to destination object
                this.copyAttributesFromSrcToDest($source, this.element.find("input"));
            }
            return $control;
        }
    }) ;

})($, _);
(function($) {
$.widget("xfaWidget.numericInput", $.xfaWidget.defaultWidget, {

    _widgetName: "numericInput",

	options : {
		value : null,
		curValue: null,
        pos: 0,
        lengthLimitVisible: true,
        zero:"0",
        decimal:".",
        minus:"-"
	},

    //TODO: to support writing in different locales \d should be replaced by [0-9] for different locales
    _matchArray : {
                    "integer":"^[+-]?{digits}*$",
                    "decimal":"^[+-]?{digits}{leading}({decimal}{digits}{fraction})?$",
                    "float":"^[+-]?{digits}*({decimal}{digits}*)?$"
                  },

    _regex : null,

    _engRegex : null,

    _writtenInLocale : false,

    getOptionsMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "paraStyles": function(paraStyles){
                parentOptionsMap.paraStyles.apply(this,arguments);
                this._handleVAlignOnExit ();
            } ,

            "height": function(val) {
                if(val)   {
                    this.$css(this.$userControl[0],{"height" :val})
                    this._handleVAlignOnExit();    // To Handle the case of expandable Fields
                }
            }

        })
    },

    getEventMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "onKeyInput.numericInput" : xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT
        })
    },

    _getDigits: function() {
        var zeroCode = this.options.zero.charCodeAt(0),
            digits = "";
        for(var i = 0;i < 10;i++) {
            digits += String.fromCharCode(zeroCode + i);
        }
        return "["+digits+"]"
    },

    _escape: function(str) {
      return str.replace(".","\\.")
    },

    postProcessExit: function(evnt) {
        $.xfaWidget.defaultWidget.prototype.postProcessExit.apply(this,arguments);
        this._handleVAlignOnExit ();
    },

    preProcessEnter: function(evnt) {
        $.xfaWidget.defaultWidget.prototype.preProcessEnter.apply(this,arguments);
        this._handleVAlignOnEnter();
    },

	render : function() {
        var matchStr =  this._matchArray[this.options.dataType];
        if(matchStr) {
            var ld = this.options.leadDigits,
                fd = this.options.fracDigits,
                ldstr = ld && ld != -1 ? "{0,"+ld+"}"
                    : "*",
                fdstr = fd && fd != -1 ? "{0,"+fd+"}"
                    : "*",
                matchStr =  matchStr.replace("{leading}",ldstr)
                                    .replace("{fraction}",fdstr),
                localeStr = matchStr.replace(/{digits}/g,this._getDigits())
                                    .replace("{decimal}",this._escape(this.options.decimal)),
                engStr = matchStr.replace(/{digits}/g,"[0-9]")
                                .replace("{decimal}","\\.")
            this._processValue = !(this._getDigits() == "[0123456789]" && this.options.decimal == ".")
            this._regex = new RegExp(localeStr, "g");
            this._engRegex = new RegExp(engStr, "g");
        }
        return $.xfaWidget.defaultWidget.prototype.render.apply(this, arguments);
    },

    getCommitValue: function() {
        var value = $.xfaWidget.defaultWidget.prototype.getCommitValue.apply(this, arguments)
        if(value.length > 0 && this._processValue && !value.match(this._engRegex)) {
            this._writtenInLocale = true
            value = this._convertValueFromLocale(value);
        } else {
            this._writtenInLocale = false
        }
        if(value && value.length >= this.options.combCells )
            value = value.slice(0,this.options.combCells);
        return value;
    },

    _attachEventHandlers : function($control) {
		$.xfaWidget.defaultWidget.prototype._attachEventHandlers.apply(this,arguments);
	},

    _handleKeyInput : function(event, character, code){
        if(event.ctrlKey && !_.contains(['paste', 'cut'], event.type)) {
            return true;
        }

        $.xfaWidget.defaultWidget.prototype._handleKeyDown.apply(this,arguments);
        this.options.lengthLimitVisible = true;

        var val = this.$userControl.prop(this.options.commitProperty) || '',
            pos = xfalib.view.util.HtmlUtil.getHTMLSupportedAttr(this.$userControl[0], "selectionStart") || 0,
            selectionStart = pos,
            selectionEnd = xfalib.view.util.HtmlUtil.getHTMLSupportedAttr(this.$userControl[0], "selectionEnd") || 0,
            combCells = parseInt(this.options.combCells) || 0,
            current,
            change = character;

        if (combCells > 0 ) {
            change = character.substr(0, combCells - val.length + selectionEnd - selectionStart);
        }

        current = val.substr(0, selectionStart) + change + val.substr(selectionEnd);

        if (!(this._regex == null || current.match(this._regex) || current.match(this._engRegex))) {
            event.preventDefault();
            return false;
        }
        if (!_.contains(['keydown', 'cut'], event.type) && combCells && (val.length >= combCells || current.length > combCells) && selectionStart === selectionEnd) {
            event.preventDefault();
            return false;
        }

        this.options.curValue = val;
        this.options.pos = pos;

        if(this.options.hScrollDisabled && !_.contains(['keydown', 'cut'], event.type)) {
            var expectedWidth = xfalib.view.util.TextMetrics.measureExtent(current, {refEl: this.$userControl[0], maxWidth:-1}).width;
            if(!event.ctrlKey && expectedWidth > this.$userControl.width() - 5){
                event.preventDefault();
                this.options.lengthLimitVisible = false;
            }
        }

        this.$userControl.trigger({
            type : "onKeyInput.numericInput",
            originalType : event.type,
            character : character,  // contains the pasted string or pressed key
            keyCode : event.keyCode || 0,
            charCode : event.charCode || 0,
            which : event.which || 0,
            ctrlKey : event.ctrlKey || event.metaKey || false,
            shiftKey : event.shiftKey || false,
            keyDown : false, // This property is available only for list boxes and drop-down lists
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
        });
    },

    _handleKeyDown : function(event){
        if (event) {
            var code = event.charCode || event.which || event.keyCode || 0;
            if(code == 8 || code == 46) // backspace and del
               this._handleKeyInput(event, "", code);
            else if(code == 32) { // suppress space
                event.preventDefault();
                return false;
            }
        }
    },

    _isValidChar: function (character) {
        return character>='0' && character<='9' || character===this.options.decimal || character==='-'
    },

    _handleKeyPress : function(event){
        if (event) {
            var code = event.charCode || event.which || event.keyCode || 0,
                character = String.fromCharCode(code);

            if(xfalib.ut.XfaUtil.prototype.isNonPrintableKey(event.key)) { // mozilla also generates a keypress, along with keydown
                return true;                                               // for all keys, so only handling printable keys in keypress
            }

            if (this._isValidChar(character))
                this._handleKeyInput(event, character, code);
            else if (!event.ctrlKey){
                event.preventDefault();
                return false;
            }
        }
    },

    _handlePaste : function(event){
        if (event) {
            var pastedChar = undefined;
            if (window.clipboardData && window.clipboardData.getData) { // IE
                pastedChar = window.clipboardData.getData('Text');
            } else if (event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
                pastedChar = event.originalEvent.clipboardData.getData('text/plain');
            }

            if(pastedChar) {
                var allPastedCharsValid = _.every(pastedChar.split(''), function (character) {
                    return this._isValidChar(character);
                }, this);
                if (allPastedCharsValid) {
                    this._handleKeyInput(event, pastedChar, 0);
                }
                else if (!event.ctrlKey) {
                    event.preventDefault();
                    return false;
                }
            }
        }
    },

    _handleCut : function(event) {
        if (event) {
            this._handleKeyInput(event, "", 0);
        }
    },
    // CQ-107886 : added handling for negative values, as for '-', '-3' was getting returned
    _convertValueToLocale: function(val) {
        var zeroCode = this.options.zero.charCodeAt(0);
        return  _.map(val,function(c) {
            if(c == ".") {
                return this.options.decimal;
            } else if(c == "-") {
                return this.options.minus;
            } else {
                return String.fromCharCode(parseInt(c) + zeroCode);
            }
        },this).join("");
    },

    _convertValueFromLocale: function(val) {
        var zeroCode = this.options.zero.charCodeAt(0);
        return  _.map(val,function(c) {
            if(c == this.options.decimal) {
                return ".";
            } else if(c == this.options.minus) {
                return "-";
            } else {
                return (c.charCodeAt(0) - zeroCode).toString();
            }
        },this).join("");
    },

    showValue : function() {
       // if the value is same, don't do anything
       if(!this._isValueSame()){
           if(this.options.value && this._writtenInLocale) {
               this.$userControl.val(this._convertValueToLocale(this.options.value))
           } else {
               this.$userControl.val(this.options.value)
           }
       }
       //IE doesn't show selected text if we focus and set its value all the time so force selection
       $.xfaWidget.textField.prototype._selectOnFocusInIE.apply(this, arguments);
    }
});
})($);(function ($, _) {
    $.widget("xfaWidget.dropDownList", $.xfaWidget.defaultWidget, {            //commitEvent: change; commitProperty: value<Array>

        _widgetName: "dropDownList",

        options: {
            value: [],
            items: [],
            editable: false,
            placeholder: "",
            displayValue: []
        },

        widgetSkeleton: '<select name="" style="" size = "1" role="combobox"><option id="emptyValue" role="option" value=""></option></select>',
        optionSkeleton: '<option role="option" data-user-option></option>',
        optGroupSkeleton: '<optgroup label=""></optgroup>',
        AF_OPTGROUP_NAME: "afOptGroupName",
        PLACE_HOLDER_STYLE_CLASS : "placeHolder",

        getOptionsMap: function () {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this, arguments);
            return $.extend({}, parentOptionsMap, {
                "value": function (val) {
                    if (!_.isArray(val)) {
                        val = [val];
                    }
                    var found = false,
                        that = this;
                    //sync option selection as per new values
                    $("option", this.$userControl).each(function (index) {
                        var selectValue = $(this).val();
                        //Check if this value is present in options value array
                        if (_.contains(val, selectValue)) {
                            $(this).prop("selected", true);
                            found = true;
                        } else {
                            $(this).prop("selected", false);
                            if (this.id === "emptyValue") {
                                $(this).val("").html(that.options.placeholder);
                                //Hiding emptyValue with no placeholder text configured.
                                if(that.options.placeholder.length == 0) {
                                    $(this).hide();
                                }
                            }
                        }
                    });
                    //If no value is found then set the emptyValue to true
                    if (val.length == 0 || val[0] == null) {
                        this.$userControl.children("#emptyValue").prop("selected", true);
                    } else if (!found) {
                        this.$userControl.children("#emptyValue").text(val[0]).
                            prop("selected", true).
                            val(_.escape(val[0])).
                            show();
                    }
                    this.$userControl.toggleClass(this.PLACE_HOLDER_STYLE_CLASS, val.length == 0 || val == null);
                },

                "items": function (val) {
                    if (!_.isArray(val)) {
                        val = [val];
                    }

                    var AF_OPTGROUP_NAME = "afOptGroupName";
                    var i, j, optgroupOptions = [], element, $viewOptgroup, $preOptgroup;
                    var viewOptgroups = $("optgroup", this.$userControl);
                    // Removes all options which earlier didn't belong to any optgroup.
                    if (viewOptgroups.length == 0) {
                        // save selected value because when value is set before items in setWidgetOptions
                        // the selected value would get lost in html
                        var selectedOption = this.$userControl.find('[selected]');
                        this.$userControl.children("option[data-user-option]").remove();
                    }
                    for (i = 0, j = 0; j < val.length; j++) {
                        element = val[j];
                        if (element.save != AF_OPTGROUP_NAME) {
                            // Add options to String[] which will be later synced to the optgroup.
                            optgroupOptions.push(element);
                        } else {
                            $viewOptgroup = viewOptgroups[i++];
                            // When optgroup is less than the required optgroups.
                            if (i > viewOptgroups.length) {
                                $viewOptgroup = this.addGroup(element.display);
                            }
                            // Undefined as it may not occur even once when list is purely of options.
                            if (!_.isUndefined($viewOptgroup) && $viewOptgroup.label != element.display) {
                                $viewOptgroup.label = element.display || '';
                            }
                            // Check to skip the first optgroup.
                            if (j != 0) {
                                // Syncs options to the prev optgroup.
                                // Prev optgroup because current optgroup marks the end of options of prev.
                                this.handleOptions($preOptgroup, optgroupOptions);
                                // Clear options of the optgroup for next optgroup.
                                optgroupOptions = [];
                            }
                            $preOptgroup = $viewOptgroup;
                        }
                    }
                    // Removes all extra optgroups.
                    while (i < viewOptgroups.length) {
                        $viewOptgroup = viewOptgroups[i++];
                        this.deleteGroup($viewOptgroup.label);
                    }
                    //Add remaining options to respective optgroup.
                    if (optgroupOptions.length != 0) {
                        this.handleOptions($preOptgroup, optgroupOptions, selectedOption);
                    }

                    //Intentionally left the selection check -> I am relying on the fact that "value" sync event is called after "items" sync.
                },

                "displayValue": function () {
                },
                "placeholder": function(value){
                    // overriding the default handling of place holder options setter
                },
                "access": function (val) {
                    switch (val) {
                        case "open" :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                        case "nonInteractive" :
                        case "protected" :
                        case "readOnly" :
                            this.$userControl.attr("disabled", "disabled");
                            this.$userControl.attr("aria-disabled", "true");
                            break;
                        default  :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                    }
                }
            })
        },

        getEventMap: function () {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this, arguments);
            return $.extend({}, parentOptionsMap, {
                "focus": [xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT, xfalib.ut.XfaUtil.prototype.XFA_PREOPEN_EVENT],
                "change": xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT
            })
        },

        render: function () {
            var existingInlineStyleAttributeValues = this.element.find("select").attr("style"),
                newInlineStyleAttributeValues,
                combinedInlineStyleAttributeValues,
                size = 1;

            this.element.addClass(this._widgetName);
            this.element.children().remove();

            var inputName = _.uniqueId("select"),  //Unique Id
                textStyle = this.getOrElse(this.$data(this.element.get(0), "xfamodel"), "textstyle", ""),
                $widgetSkeleton = $(this.widgetSkeleton)
                                    .attr('style', textStyle)
                                    .attr('name', inputName);
            if(this.options.editable) {
                $widgetSkeleton.addClass('combobox');
            }

            if(this.options.items && this.options.items.length>0){
                size = this.options.items.length
            }
            if(this.options.multiSelect) {
                $widgetSkeleton.addClass('multiDropdown');
                $widgetSkeleton.attr('multiple','multiple');
                $widgetSkeleton.attr('size',size);
                $widgetSkeleton.attr('data-multiple-selection',"true");
            }

            var $parEl = $widgetSkeleton;
            _.each(this.options.items, function(item){
                var saveItem = _.isString(item.save) ? item.save.replace(/\"/g, "&quot;") : "";
                if (saveItem === this.AF_OPTGROUP_NAME){ // assuming optgroups appear before options
                    $parEl = $(this.optGroupSkeleton).attr('label', item.display).appendTo($widgetSkeleton);
                } else {
                    $(this.optionSkeleton).val(saveItem).text(item.display).appendTo($parEl);
                }
            },this);

            this.element.append($widgetSkeleton);

            var control = this.element.children().eq(0).attr("name", this.options.name);
            this._attachEventHandlers(control);
            newInlineStyleAttributeValues = this.element.find("select").attr("style");
            //append the previous inlineStyleAttributeValues to newInlineStyleAttributeValues so that the inline styles
            //added from the dialog are applied.
            combinedInlineStyleAttributeValues = newInlineStyleAttributeValues + existingInlineStyleAttributeValues;
            this.element.find("select").attr("style", combinedInlineStyleAttributeValues);
            return control;
        },

        //syncs the options to the optgroup dynamically.
        handleOptions : function ($viewOptgroup, val, selectedOption) {
            //When the list so far consists purely of options.
            if (_.isUndefined($viewOptgroup)) {
                $viewOptgroup = this.$userControl[0];
            }
            var viewOptions = $("option[data-user-option]", $viewOptgroup);
            //Syncs the value of options.
            for (var i = 0, j = 0; i < viewOptions.length && j < val.length; i++, j++) {
                var $viewOption = viewOptions[i];
                var element = val[j];
                if ($viewOption.text != element.display) {
                    $viewOption.text = element.display || '';
                }
                if ($viewOption.value != element.save) {
                    $viewOption.value = element.save || '';
                }
            }
            //Deletes options if count is more than required.
            while (i < viewOptions.length) {
                this.deleteOption(viewOptions[i++])
            }
            //Add options if count is less than required.
            while (j < val.length) {
                this.addOption($viewOptgroup, val[j++], selectedOption);
            }
        },

        addOption : function ($viewOptgroup, element, selectedOption) {
            var $newOption = $(this.optionSkeleton).val(element.save).text(element.display);
            $newOption.appendTo($viewOptgroup);
            if(selectedOption) {
                if(element.save === selectedOption.val() && element.display === selectedOption.text()) {
                    $newOption.prop("selected", true);
                }
            }
            // Since the displayValue is a '\n' separated string of selected values in case of multiSelect,
            // we convert it to an array and check whether that array contains the save value of the element
            var values;
            if (this.options.value && _.isString(this.options.value)) {
                values = this.options.value.split('\n');
            } else if (_.isArray(this.options.value)) {
                // In the case of AF we have value/displayValue as an array
                values = this.options.value
            }
            if (values && values.indexOf(element.save) >= 0) {
                //Hide emptyValue and select the new option.
                var $emptyOption = this.$userControl.children("#emptyValue");
                $emptyOption.val("").html(this.options.placeholder).prop("selected", false);
                //Hiding emptyValue with no placeholder text configured.
                if(this.options.placeholder.length == 0) {
                    $emptyOption.hide();
                }
                this.$userControl.children().filter( function() {
                    return this.value==element.save;
                }).prop("selected", true);
            }
        },

        deleteOption: function ($viewOption) {
            this.$userControl.find('option[value='+$viewOption.value+']').remove();
        },

        addGroup: function(label) {
            //Creates a optgroup Node.
            var optionGroup = document.createElement("OPTGROUP");
            optionGroup.label = label;
            this.$userControl[0].appendChild(optionGroup);
            return optionGroup;
        },

        deleteGroup: function(label) {
            this.$userControl.children().remove('optgroup[label='+label+']');
        },

        addItem: function (itemValues) {
            var newOption = new Option(itemValues.sDisplayVal || '', itemValues.sSaveVal || '');
            // add role=option to the new option that has been added.
            $(newOption).attr("role", "option");
            this.$userControl[0].add(newOption, null);
            // if item has same value as present in options then mark it as selected
            if (_.contains(this.options.value, itemValues.sSaveVal)) {
                this.$userControl.children("#emptyValue").val("").html("").prop("selected", false).hide();
                this.$userControl.find("option[value=" + itemValues.sSaveVal + "]").prop("selected", true)
            }
        },

        clearItems: function () {
            //Deleting all the options including optGroup except the empty value.
            this.$userControl.children().not("#emptyValue").remove();
        },

        deleteItem: function (nIndex) {
            //check for emptyValue instead of blindly doing + 1
            if (this.$userControl[0].item(0) && this.$userControl[0].item(0).id == "emptyValue")
                nIndex = nIndex + 1;
            //if there is emptyValue element then just delete one index higher
            //this check is must instead of blindly increasing the index by 1 because NWKListBox extends this class and that doesn't maintain emptyValue
            this.$userControl[0].remove(nIndex);
        },

        getCommitValue: function (event) {
            var value = $("option:selected", this.$userControl).map(function () {
                return $(this).val();
            }).get();
            return value;
        },

        showDisplayValue: function () {
        },

        destroy: function () {
            this.element.
                removeClass(this._widgetName).
                children().remove().
                text("");

            // call the base destroy function
            $.xfaWidget.defaultWidget.prototype.destroy.apply(this, arguments);
        },

        _handleKeyDown: function (event) {

            if (event.keyCode == 13) {
                //do nothing
                //just override the return key behaviour and over to defaultWidget for rest of the stuff.
                //return key is intercepted to avoid submission of form which is default behavior of html form element
                //but as a side effect it also stops the closing of drop down only in IE -> probably I should use IE condition but
                // this code works fine in          chrome as well so keeping it that way.
                //watson bug#3675141
            }
            else
                $.xfaWidget.defaultWidget.prototype._handleKeyDown.apply(this, arguments);
        },

        // CQ-51462 : focus and commit event (change) happen together hence first selection was modifying the value
        // we do not want focus to modify the value that is about to be committed
        showValue : function() {

        }
    });
})($, _);
(function($){
	$.widget( "xfaWidget.listBox", $.xfaWidget.defaultWidget, {

    _widgetName: "listBoxWidget",

    options : {
        value : [],
        items : [],
        multiSelect : false
    },

    getOptionsMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "width" : function(val) {
                //Bug#3597771. setting the height more than 0.95 brings scrollbar
                this.options.width = val*0.95
                parentOptionsMap.width.apply(this,[this.options.width])
            },
            "access" : function() {},
            "value": function(val) {
                var newValues = this.options.value,
                    self = this,
                    tabSet = false;
                if(!_.isArray(newValues))
                    newValues = [newValues];
                var tabSet
                this.$userControl.children().each(function(){
                    var saveVal = $(this).attr("data-save");

                    // Check if this value is present in options value array
                    if(newValues && _.contains(newValues, saveVal)){
                        self._selectListItem($(this));
                        tabSet = true;

                        // Set the selected data attribute to true.
                        if (!$.data(this, "_xfaInitialized")) {
                            //Initialized data- attributes parse for once using this call.
                            // Next onward don't use this. Instead use $.data which is cheap/
                            $(this).data();
                            $.data(this, "_xfaInitialized", true); //Mark the element to say that data has been initialized.
                        }
                        $.data(this, "selected", true);

                    }
                    else{
                        $(this).removeClass("item-selected");
                        $(this).addClass("item-selectable");
                        $(this).attr("tabIndex", "-1");
                    }
                });
                if(!tabSet) {
                    $(this.$userControl.children().get(0)).attr("tabIndex", this.options.tabIndex);
                }
            },

            "items" : function(val) {
                if(!_.isArray(val))
                    val = [val];
                var viewItems = this.$userControl.children();

                //if number of items are not same in model and view then balance it
                if((viewItems.length) > val.length){
                    for(var i=viewItems.length; i >  val.length; i--){
                        this.deleteItem(i-1);
                    }
                }
                else if((viewItems.length) < val.length){
                    for(var i=val.length; i > (viewItems.length); i--){
                        this.addItem({sDisplayVal: val[i-1].display, sSaveVal: val[i-1].save});
                    }
                }

                _.each(val, function(element, index){
                    var $viewItem = $(viewItems[index]);
                    if( $viewItem.text() != element.display){
                        $viewItem.text(element.display || '');
                    }

                    if( $viewItem.attr("data-save") != element.save){
                        $viewItem.attr("data-save", element.save || '');
                    }
                });

                //Intentionally left the selection check -> I am relying on the fact that "value" sync event is called after "items" sync.
            },

            "displayValue" : function(){;},

            "tabIndex": function() {
                var selectedItem = this.$userControl.children(".item-selected"),
                    children =this.$userControl.children()
                if(selectedItem.length) {
                    selectedItem.eq(0).attr("tabIndex", this.options.tabIndex);
                }
                else if(children.length > 0) {
                    children.eq(0).attr("tabIndex", this.options.tabIndex);
                }
            }
        })
    },

    getEventMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "listboxenter":xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT,
            "listboxexit":xfalib.ut.XfaUtil.prototype.XFA_EXIT_EVENT,
            "listboxchange":xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT,
            "focus":null,
            "blur":null
        })
    },

    showDisplayValue : function() {
        },

    render : function() {
        this.element.addClass( this._widgetName);
        this.element.children().remove();

        //TODO: add a function for geting textStyle
        var textStyle = this.getOrElse(this.$data(this.element.get(0), "xfamodel"), "textstyle", ""),
            that = this,
            //Bug#3597771 width and height are provided by the view itself.
            listElTemplate =
            '<ol style="position:absolute;<%=textStyle%>" role="listbox">' +
                '<% _.each(items, function(item){ %>' +
                '<% var saveItem = item.save ? item.save.replace(/\"/g,"&quot;"):null %>'+
                    '<li role="option" data-save="<% print(saveItem) %>" data-selected="false"><% print(item.display) %></li>'+
                '<%})%>'+
            '</ol>',
            compiledListElTemplate = _.template(listElTemplate),
            templateOptions = _.extend({
                "textStyle" : textStyle
                }, this.options),
            resolvedListEl = compiledListElTemplate(templateOptions);
        that.element.html(xfalib.ut.XfaUtil.prototype.encodeScriptableTags(resolvedListEl));
        var control = $(that.element.children().get(0)).attr("name",this.options.name);
        this._attachEventHandlers(control);
        return control
    },

    focus: function() {
        if(this.$userControl.children(".item-selected").length > 0) {
            this.$userControl.children(".item-selected")[0].focus();
        }
        else if(this.$userControl.children().length > 0) {
            this.$userControl.children()[0].focus();
        }
    },

    addItem : function(itemValues){
        $("<li></li>")
            .attr("data-save", itemValues.sSaveVal || '')
            .text(itemValues.sDisplayVal || '')
            .appendTo(this.$userControl)
            .click($.proxy(this._handleItemClick, this))
            .focus($.proxy(this._handleItemFocus, this));

        // add new item as selected if the value is already present in options
        if (_.contains(this.options.value, itemValues.sSaveVal)) {
            this._selectListItem(this.$userControl.find("[data-save=" + itemValues.sSaveVal+ "]"));
        }
    },

    clearItems : function(){
        $(this.$userControl).empty();
    },

    deleteItem : function(nIndex){
        $(this.$userControl).children('li').each(function(index,element){
            if(index==nIndex){
                $(element).off("click").off("focus").remove();
            }
        })
    },


    _attachEventHandlers : function($control){
        var self = this;
        $control.keydown($.proxy(this._hotKeys,this))
            .children().on("mousedown",function() {
                    if(self.inFocus == true) {
                        self.mouseDown = true;
                    }
                })
            .click($.proxy(this._handleItemClick, this))
            .focus($.proxy(this._handleItemFocus, this))
            .blur($.proxy(this._handleFocusOut,this))

    },

     _hotKeys : function(event){
         if(this.options.access != "open")
             return;
         if(this.itemInFocus){
             switch(event.which) {
                 case 38: //arrow up
                     var prevSibling = $(this.itemInFocus).prev();
                     if(prevSibling){
                         this.keyDown = true;
                         prevSibling.focus();
                         this.keyDown = false;
                     }
                     event.preventDefault();
                     break;
                 case 40: //arrow down
                     var nextSibling = $(this.itemInFocus).next();
                     if(nextSibling){
                         this.keyDown = true;
                         nextSibling.focus();
                         this.keyDown = false;
                     }
                     event.preventDefault();
                     break;
                 case 91: //left arrow
                 case 92: //right arrow
                     event.preventDefault();
                     break;
                 case 32:
                     this._toggleItem(this.itemInFocus);
                     event.preventDefault();
                     break;
                 default:
             }
         }
     },

     _toggleItem: function(item) {
         var $item = $(item),
             multiMode = this.options.multiSelect, // && event.ctrlKey ;
             that = this;
             //toggle selected state of this item
             this.$data(item, "selected", !this.$data(item, "selected"));
         var state = this.$data(item, "selected")

         if(!multiMode) {
             var $selectedItem = this.$userControl.children(".item-selected")
             if($selectedItem.length) {
                 this.$data($selectedItem[0],"selected",false)
                 $selectedItem.removeClass("item-selected").addClass("item-selectable")
             }
         }
         $item.toggleClass("item-selectable",!state).
               toggleClass("item-selected",state)

         this.$userControl.trigger("listboxchange");
     },

     getCommitValue: function() {
         var that = this,
             multiMode = this.options.multiSelect;


         return this.$userControl.children().map(function(){
             // intentionally using $this.attr("data-save") instead of $this.data("data")
             return that.$data(this, "selected") ? $(this).attr("data-save") : null;
         }).get();
     },

      _handleItemFocus : function(event){
          if(this.options.access != "open")
              return;
          var item = event.target;
          this.itemInFocus = item;

          // overriding default widgets handleFocus
          if(!(this.keyDown || this.mouseDown)) {        //we do not need to fire focus event if
              this.$userControl.trigger("listboxenter")  // clicked on another li element or pressed a key to move the selectio
          }
          this.mouseDown = false;
          this.inFocus = true;
      },

     _handleItemClick : function(event){
        // Bug#3501811 If clicked onlistbox entry more than once, exit event is not fired
        // Clicking on the same entry does not call focus and hence we were not resetting the state. Doing it in onClick
        if(this.mouseDown == true)
            this.mouseDown = false;
        if(this.options.access != "open")
             return;
        this._toggleItem(event.target)
    },

    _handleFocusOut: function(){
        if(!(this.keyDown || this.mouseDown)) {
            this.$userControl.trigger("listboxexit");
            this.inFocus = false
        }
    },

    _selectListItem : function ($elem) {
        if ($elem && $elem.length) {
            $elem.removeClass("item-selectable")
                .addClass("item-selected")
                .attr("tabIndex", this.options.tabIndex);
        }
    },

    destroy: function() {
        this.element.
            removeClass(this._widgetName).
            children().remove().
            text("");

        $.xfaWidget.defaultWidget.prototype.destroy.apply(this, arguments);
    }
});
})($);
(function($) {
    $.widget( "xfaWidget.nwkListBox",  $.xfaWidget.dropDownList, {            //non-webkit listbox

        _widgetName : "nwkListBox",

        options : {
            value : [],
            multiSelect : false
        },

        render : function() {
            var $control = $.xfaWidget.dropDownList.prototype.render.apply(this, arguments);
            if($control){
                $control.children("#emptyValue").remove();
                if(this.options.multiSelect)
                    $control.attr("multiple", "multiple");
            }
            this._updateSelectSize($control);
            return $control;
        },

        addItem : function(itemValues){
            $.xfaWidget.dropDownList.prototype.addItem.apply(this, arguments);
            this._updateSelectSize();
        },

        clearItems : function(){
            $.xfaWidget.dropDownList.prototype.clearItems.apply(this, arguments);
            this._updateSelectSize();
        },

        deleteItem : function(nIndex){
            $.xfaWidget.dropDownList.prototype.deleteItem.apply(this, arguments);
            this._updateSelectSize();
        },

        _updateSelectSize : function($control){
            $control = $control || this.$userControl;
            $control.attr("size", (this.options.items || []).length);
        },

        // Bug#3597771
        // focus and commit event happen together hence first selection was modifying the value
        // we do not want focus to modify the value that is about to be committed
        showValue : function() {

        }

  });
})($);
(function ($) {
    $.widget("xfaWidget.xfaButton", $.xfaWidget.defaultWidget, {            //commitEvent: change; commitProperty: value<Array>

        _widgetName: "xfaButton",

        options: {
            value: null,
            svgCaption: false //option to indicate if button already has an SVG caption
        },

        getOptionsMap: function () {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this, arguments);
            return $.extend({}, parentOptionsMap, {
                "access": function (val) {
                    switch (val) {
                        case "open" :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                        case "nonInteractive" :
                        case "protected" :
                        case "readOnly" :
                            this.$userControl.attr("disabled", "disabled");
                            this.$userControl.attr("aria-disabled", "true");
                            break;
                        default  :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                    }
                },
                "value": function () {
                },
                "displayValue": function () {
                },
                "svgCaption": function (val) {
                    if (val) {
                        this.$userControl.removeAttr("value");
                    }
                }
            })
        },

        _attachEventHandlers: function ($control) {
            $control.click(function () {
                this.focus()
            });
        },

        getCommitValue: function () {
            return this.options.value;
        },

        showValue: function () {
        },

        showDisplayValue: function () {
        }
    });
})($);(function ($) {
    $.widget("xfaWidget.XfaCheckBox", $.xfaWidget.defaultWidget, {            //commitEvent: change; commitProperty: value<Array>

        _widgetName: "XfaCheckBox",

        options: {
            value: null,
            state: -1,
            states: 2,
            values: []
        },

        checkedState: false,
        clickPending: false,

        getOptionsMap: function () {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this, arguments);
            return $.extend({}, parentOptionsMap, {
                "access": function (val) {
                    switch (val) {
                        case "open" :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                        case "nonInteractive" :
                        case "protected" :
                        case "readOnly" :
                            this.$userControl.attr("disabled", "disabled");
                            this.$userControl.attr("aria-disabled", "true");
                            break;
                        default  :
                            this.$userControl.removeAttr("disabled");
                            this.$userControl.removeAttr("aria-disabled");
                            break;
                    }
                },

                "displayValue": function (val) {
                    this.$userControl.attr(this.options.commitProperty, this.options.value);
                    this._state(this.dIndexOf(this.options.values, this.options.value));
                    this.$userControl.attr("checked", this.checkedState ? "checked" : null);
                    this.$userControl.prop("checked", this.checkedState ? "checked" : null);
                    //for accessibility
                    this.$userControl.attr("aria-selected", this.checkedState);
                    if (this.options.state == 2)
                        this.$userControl.addClass("neutral");
                    else if (this.options.states == 3)
                        this.$userControl.removeClass("neutral");   // since current state != neutral
                },

                "allowNeutral": function (val) {
                    var intVal = parseInt(val);
                    if (intVal == 0 || intVal == 1) {
                        this.options.states = 2 + intVal;
                    }
                },

                "paraStyles": function (paraStyles) {
                    parentOptionsMap.paraStyles.apply(this, arguments);
                    this._handleVAlignOnExit();
                }
            })
        },

        getEventMap: function () {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this, arguments);
            return $.extend({}, parentOptionsMap, {
                 "xfacheckboxchange" :  xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT,
                 "xfacheckboxclick" :   xfalib.ut.XfaUtil.prototype.XFA_CLICK_EVENT,
                 "change": null,
                 "click" : null
               })
        },

        _attachEventHandlers: function ($control) {
            var that = this;
            var focusFunc = function (evnt) {
                if (!that.inFocus) {
                    that.focus();
                    that.inFocus = true;
                }
            }
            var focusOutFunc = function (evnt) {
                that.inFocus = false;
            }
            $control.click(focusFunc).change(focusFunc).blur(focusOutFunc);
            $control.change($.proxy(this._handleChange,this)).click($.proxy(this._handleClick,this));   //LC-5106
        },

        getCommitValue: function () {
            this._state((this.options.state + 1) % this.options.states);
            this.$userControl.attr("checked", this.checkedState ? "checked" : null);
            //for accessibility
            this.$userControl.attr("aria-selected", this.checkedState)
            if (this.options.state == 2) {
                this.$userControl.addClass("neutral");
            }
            else if (this.options.states == 3)
                this.$userControl.removeClass("neutral"); // since current state != neutral

            return this.options.values[this.options.state];
        },

        _handleVAlignOnExit: function (evnt) {
            //--this is being kept empty as no other browser (i.e Mozilla and Chrome) take the padding-bottom or padding-top into account.
            // the only browser to take it into consideration is IE. And moreover the alignment and padding considerations have already been taken into account in
            // calculations in CheckButtonFieldView.js. And on removing the entire function it takes up the _handleVAlignOnExit() of AbstractWidget.

        },

        _handleChange: function (evnt) {
            this.$userControl.trigger("xfacheckboxchange"); //change is always fired
            if(this.clickPending === true) {
              this.clickPending = false;
              this.$userControl.trigger("xfacheckboxclick");
            } else {
                // handling of this.clickPending is added to handle the case when clicked on checkbox/radiobutton label/caption
                this.clickPending = true;
            }
        },

        _handleClick: function (evnt) {
             var isChrome = xfalib.ut.XfaUtil.prototype.detectChrome(),
                 isIE = xfalib.ut.XfaUtil.prototype.detectIE(),
                 userControlType = this.$userControl.attr("type");
             // click will not be fired if the previous state of the radiobutton is 'on'.
             // CQ-103023 : Click Event on Radio Button not working correctly in Chrome 53
             // CQ-103715 : CQ-103715 : Click Event on Check Box not working correctly in Chrome and Firefox, added handling for checkbox also
             // handling of this.clickPending is added to handle the case when clicked on checkbox/radiobutton label/caption
             if(($.browser.mozilla || isChrome) && !isIE && this.clickPending === false && ((userControlType === "radio" && this.checkedState === false) || (userControlType === "checkbox"))) {
               this.clickPending = true;
             }
             else {
                this.$userControl.trigger("xfacheckboxclick");
                this.clickPending = false;
             }
        },

        _state: function (newState) {
            if (newState == undefined)
                return this.options.state;
            else
                this.options.state = newState;
            this.checkedState = (newState == 0 || newState == 2);
        },

        click: function () {
            // trigger change for check box and for radio only if it is not selected
            // otherwise radio button will go in deselected state
            if (this.$userControl.attr("type") !== "radio" || this.options.state !== 0) {
                this.$userControl.trigger("change");
            }
            //we should call only the handler since calling click will trigger change.
            this.$userControl.triggerHandler("click");
        }
    });
})($);
(function($){
    $.widget( "xfaWidget.textField", $.xfaWidget.defaultWidget, {

        _widgetName: "textField",

        options: {
            curValue : null ,
            pos:0,
            lengthLimitVisible: true,
            maxChars:0 ,
            flag:"",
            // by default html5Type is set to true
            // we leverage pattern, maxLength support from HTML5 browser for mobile forms
            html5Type : "text",
            length : null,
            minLength : 0,
            totalLengthMessage : "",
            minimumLengthMessage : "",
        },

        getOptionsMap: function() {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments);
            return $.extend({},parentOptionsMap,{
                "maxChars": function(maxchars) {
                    if(this._maxCharsReached(this.options.value)) {
                        var value = this.options.value.slice(0,maxchars)
                        this._setOption("value", value);
                        this._setOption("displayValue", value);
                    }

                },

                "multiLine ": function(val) {
                    if(this.options.multiLine)
                        this.$userControl.attr("aria-multiline", "true");
                    else
                        this.$userControl.removeAttr("aria-multiline", "false");
                },

                "height": function(val) {
                    if(val)   {
                        this.$css(this.$userControl[0],{"height" :val})
                        this._handleVAlignOnExit();    // To Handle the case of expandable Fields
                    }
                },
                "width": function(val){
                    parentOptionsMap.width.apply(this,arguments);
                    // handle valign on width change as well
                    // as content height(scrollHeight) varies according to width
                    this._handleVAlignOnExit();
                },
                "paraStyles": function(paraStyles){
                    parentOptionsMap.paraStyles.apply(this,arguments);
                    this._handleVAlignOnExit();
                }

            })
        },

        render : function() {
            var control = $.xfaWidget.defaultWidget.prototype.render.apply(this, arguments);
            // use the control to set HTML5 attributes
            if (control && control.length > 0 && this.options.html5Type) {
                var minLength = this.options.minLength,
                    maxLength = this.options.maxChars,
                    length = this.options.length;
                    isMinLengthSet = minLength != null && minLength > 0,
                    isMaxLengthSet = maxLength != null && maxLength > 0,
                    isLengthSet = length != null && length > 0,
                    isMultiline = this.options.multiLine,
                    minLengthMsg = this.options.minimumLengthMessage,
                    totLengthMsg = this.options.totalLengthMessage,
                    pattern = ""; // html5 pattern is not supported for textarea

                // order of execution matters for the below code snippet
                if (isMinLengthSet) {
                    // add minLength though it is not fully supported in all browsers
                    // hence also adding pattern attribute
                    control.attr("minlength", parseInt(minLength));
                    if(minLengthMsg && minLengthMsg.length > 0) {
                        control.attr("title", this.options.minimumLengthMessage); // html5 supported message on pattern validation failure
                    }
                }

                if (isMaxLengthSet) {
                    control.attr("maxlength", parseInt(maxLength));
                }

                // if both min and max length is set
                if(isMinLengthSet && isMaxLengthSet){
                    pattern += ".{" + minLength + "," + maxLength + "}";
                } else if(isMinLengthSet) {
                    // if only min length set
                    pattern += ".{" + minLength + ",}";
                }

                // if length is set then set min and max length in pattern equal to length
                if (isLengthSet) {
                    if(isMultiline){ // set both min and maxlength as pattern is not supported
                        control.attr("minlength", parseInt(length));
                        control.attr("maxlength", parseInt(length));
                    }
                    if(totLengthMsg && totLengthMsg.length > 0) {
                        control.attr("title", this.options.totalLengthMessage);
                    }
                    // reset the pattern string
                    pattern = ".{" + length + "," + length + "}";
                }
                // if required is set or any of min, max and exact length is set, set the required attribute
                // for html5types, required is necessary else an empty value will be excluded from constraint validation
                if (this.options.required || (isMinLengthSet || isMaxLengthSet || isLengthSet)) {
                    control.attr("required", true);
                }
                // set the pattern if not empty and check if this is not multiline, since pattern is not supported for textarea
                if (pattern && pattern.length > 0 && !isMultiline) {
                    control.attr("pattern", pattern);
                }
            }
            return control;
        },

        /*  This function aligns vAlign when:
         1. parastyles is present and the widget contains a value.
         2. During initial rendering if no content present fallback to the previous logic.
         3. Presence of content in widget.
        */
        _handleVAlignOnExit: function(){
             var value = this.options.displayValue,
                 noContentPresent = _.isEmpty(this.$userControl.val() || this.options.displayValue),
                 contentHeight,widgetHeight,diff,tempCSS;

             //the widget doesn't have value as yet but content exists [ Rendering of widget]
             if (!this.options.paraStyles || noContentPresent) {
                //vAlign has to be handled only if there is paraStyles and widget has content
                return;
             }

             // mozilla results in vAlign regression hence made this change only for textarea
             if($(this.element[0]).find("textarea").length >0 && !noContentPresent)  {
               /* measureExtent not returning correct height of content in textarea even with all
                 css values */
               tempCSS={'height':this.$userControl.css('height'),'padding':this.$userControl.css('padding')};
               this.$css(this.$userControl[0],{'height':'1px','padding':'0px'});

               contentHeight = this._getContentHeight();
               this.$css(this.$userControl[0],tempCSS);
               widgetHeight = this.options.height;
               diff = widgetHeight - contentHeight;
               this._calculatePaddingForVAlign(diff);
             } else {
                // widget has no initial content or is a textfield.Proceed as before.
                $.xfaWidget.defaultWidget.prototype._handleVAlignOnExit.apply(this,arguments);
             }
        },

        getEventMap: function() {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this,arguments);
            return $.extend({},parentOptionsMap,{
                "onKeyInput.textField" : xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT
            })
        },

        _maxCharsReached: function(val) {
            var isMaxLengthSupported = false,
                elementName = this.options.multiLine ? "textarea" : "input";
            // in browsers, where max length is supported, we don't custom javascript checks, we let HTML do the validation of max length
            if(this.options.html5Type && xfalib.view.util.HtmlUtil.elementSupportsAttribute(elementName, "maxLength")){
                isMaxLengthSupported = true;
            }
            return !isMaxLengthSupported && this.options.maxChars
                   && this.options.maxChars!=="0"
                   && val
                   &&  val.length >= this.options.maxChars
        },

        _handleKeyInput : function(event, character, code) {
            if(event.ctrlKey && !_.contains(['paste', 'cut'], event.type)) {
                return true;
            }

            if(!this.options.multiLine) {
                $.xfaWidget.defaultWidget.prototype._handleKeyDown.apply(this, arguments);
                character = (code == 13) ? '' : character ;
            }

            var val =  this.$userControl.val(),
                selectionStart = xfalib.view.util.HtmlUtil.getHTMLSupportedAttr(this.$userControl[0], "selectionStart") || 0,
                selectionEnd = xfalib.view.util.HtmlUtil.getHTMLSupportedAttr(this.$userControl[0], "selectionEnd") || 0,
                pos = selectionStart,
                newVal = (val.substr(0, selectionStart) + character + val.substr(selectionEnd)).replace(/\s/g,"&nbsp;");
            this.options.curValue = val;
            if(!this.options.multiLine) { //TODO:looks like a bug
                this.options.lengthLimitVisible = true;
                this.options.pos = pos;
                if(this.options.hScrollDisabled && !_.contains(['keydown', 'cut'], event.type)) {
                    var expectedWidth = xfalib.view.util.TextMetrics.measureExtent(newVal, {refEl: this.$userControl[0], maxWidth:-1}).width;
                    if(!event.ctrlKey && expectedWidth > this.$userControl.width()){   // Why  allowance of 5 required??
                        this.options.lengthLimitVisible = false;
                        event.preventDefault();
                        return false;
                    }
                }
            } else if (this.options.multiLine && this.options.hScrollDisabled) {  // LC-4656 : wait till user input, if it causes an overflow revert to old text
                var $textArea = this.$userControl;
                $textArea.css("padding", "0px 0px 0px");  // TODO : take care of multiline selection & padding later

                // TODO : find a scheme to avoid attaching and detaching listeners, currently $.val() causes 'input' to fire, resulting in an infinite loop
                $textArea.one("input", function () {
                    if ($textArea.prop('scrollHeight') > $textArea.prop('offsetHeight')) {
                        $textArea.val(val)
                                 .prop("selectionStart", selectionEnd)
                                 .prop("selectionEnd", selectionEnd);  // LC-4656 : reset the cursor pos, afterwards
                        character = null;
                        code = 0;
                    }
                });
            }

            if (!_.contains(['keydown', 'cut'], event.type) && this._maxCharsReached(val) && selectionStart === selectionEnd) {
                event.preventDefault();
                return false;
            }

            this.$userControl.trigger({
                type : "onKeyInput.textField",
                originalType : event.type,
                character : character,  // contains the pasted string or pressed key
                keyCode : event.keyCode || 0,
                charCode : event.charCode || 0,
                which : event.which || 0,
                ctrlKey : event.ctrlKey || event.metaKey || false,
                shiftKey : event.shiftKey || false,
                keyDown: false, // This property is available only for list boxes and drop-down lists
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            });
        },

        _handleKeyDown : function(event){
            if (event) {
                var code = event.charCode || event.which || event.keyCode || 0;
                if(code == 8 || code == 46) // backspace and del
                   this._handleKeyInput(event, "", code);
            }
        },

        _handleKeyPress : function(event){
            if (event) {
                var code = event.charCode || event.which || event.keyCode || 0,
                    character = (code == 13) ? "\n" : String.fromCharCode(code); // modified '\r\n' -> '\n'

            if(xfalib.ut.XfaUtil.prototype.isNonPrintableKey(event.key)) { // mozilla also generates a keypress, along with keydown
                return true;                                               // for all keys, so only handling printable keys in keypress
            }

                this._handleKeyInput(event, character, code);
            }
        },

        _handlePaste : function(event){
            if (event) {
                var pastedChar = undefined;
                if (window.clipboardData && window.clipboardData.getData) { // IE
                    pastedChar = window.clipboardData.getData('Text');
                } else if (event.originalEvent.clipboardData && event.originalEvent.clipboardData.getData) {
                    pastedChar = event.originalEvent.clipboardData.getData('text/plain');
                }
                if(pastedChar) {
                    this._handleKeyInput(event, pastedChar, 0);
                }
            }
        },

        _handleCut : function(event) {
            if (event) {
                this._handleKeyInput(event, "", 0);
            }
        },

        postProcessExit: function(evnt) {
            $.xfaWidget.defaultWidget.prototype.postProcessExit.apply(this,arguments);
            if (this.options.multiLine && this.options.hScrollDisabled) {
                return;
            }
            this._handleVAlignOnExit();
        },

        preProcessEnter: function(evnt) {
            $.xfaWidget.defaultWidget.prototype.preProcessEnter.apply(this,arguments);
            if(this.options.multiLine && this.options.hScrollDisabled)
                return;
            this._handleVAlignOnEnter();
        },

        /**
         * @brief: Select the given field on focus in Internet Explorer
         *
         */
        _selectOnFocusInIE : function(){
            // if the value is not same only then do selection in IE
            // For Issue: LC-9895, we check if value not same
            if($.browser.msie && !this._isValueSame()) {
                this.$userControl.select();
            }
            else {
                //all other browsers behave like a good boy
            }
        },

        showValue : function() {
            $.xfaWidget.defaultWidget.prototype.showValue.apply(this,arguments);
            //IE doesn't show selected text if we focus and set its value all the time so force selection
            this._selectOnFocusInIE();
        },

        getCommitValue: function() {
            var value = $.xfaWidget.defaultWidget.prototype.getCommitValue.apply(this, arguments);

            if(this._maxCharsReached(value)) {
                value = value.slice(0,this.options.maxChars);
            }

            this.$userControl.val(this.options.value);

            //TODO: ask Sharad whether it is right
            if(this.options.multiLine && this.options.hScrollDisabled)  {
                //var str= this._checkLines(value);
                //if(value != str) {
                    return value;
                //}
            }
            return value;
        },

        /*
        ** returns the contentHeight which needs to be considered for padding for valign,
        ** if no contentHeight is present then fontSize is returned.
        */
        _getContentHeight: function () {
            var contentHeight = Math.ceil(this.$userControl.get(0).scrollHeight);
            return contentHeight ? contentHeight : this.options.fontSize;
        }
    });
})($);
(function($){
	$.widget( "xfaWidget.imageField", $.xfaWidget.defaultWidget, {

    _widgetName:"imageField",

    options: {
        tabIndex: 0,
        "role": "img"
    },

    getEventMap: function () {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this, arguments);
        return $.extend({}, parentOptionsMap, {
            "imagechange": xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT
        })
    },

    getOptionsMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "screenReaderText": function(val) {
                if(val)
                    this.$userControl.attr("alt", val)
            },
            "displayValue": function(val) {
                var widgetValue;
                if (this.options.value) {
                    widgetValue = "data:;base64," + this.options.value;
                } else {
                    widgetValue = "";
                }
                this.$userControl.prop(this.options.commitProperty, widgetValue);
                this.$userControl.attr(this.options.commitProperty, widgetValue);
            },
            "access" : function() {},

            // CQ-85514 : use max-ht & max-wd to honor image's intrinsic ht & wd attributes & prevent distortion
            "height" : function (val) {
                // in case aspect is actual then we need to crop the image, which will be not possible if max height and width are set
                if (val && this.options.aspect != "actual") {
                    this.$css(this.$userControl[0], {"max-height": val});
                }
            },
            "width" : function (val) {
                if (val && this.options.aspect != "actual") {
                    this.$css(this.$userControl[0], {"max-width": val});
                }
            },
            "aspect" : function (val) {
                // value of actual turns off scaling, causing the image to be drawn at its native size,
                // as per xfa spec Adobe implementations crop the image
                if(this.options.aspect == "actual") {
                    var right = this.$userControl.attr("width"),
                        bottom = this.$userControl.attr("height");
                    right = right.indexOf("px") >= 0 ? right : right + "px";
                    bottom = bottom.indexOf("px") >= 0 ? bottom : bottom + "px";
                    this._cropImage("0px", right, bottom, "0px");
                    this.$userControl.removeAttr("height width");
                // value of none indicates no aspect ratio
                // as per xfa spec image is independently scaled in the horizontal and vertical directions to exactly fill the field,
                // which are already set to fill the field
                } else if (this.options.aspect != "none") {
                // A value of fit, which is the default, causes the scale to be such that the image fills as much of the field as possible
                // without overflowing it in either dimension.
                    this.$userControl.attr({"height" : "auto", "width" : "auto"});
                }
            }
        });
    },

    // crop the image using top,right, bottom, left coordiantes of the image
    _cropImage : function (top, right, bottom, left) {
        var clipRect = "rect(" + top + "," + right + "," + bottom + "," + left + ")";
        var clipPathPolygon = "polygon( 0px 0px, 0px " + bottom + "," + right + " " + bottom +"," + right + " 0px)";
        // clip property is deprecated but still supported by all the major browsers
        // clip-path replaces the deprecated clip property but still is not fully supported by all major browser
        this.$userControl.css({"clip" : clipRect, "clip-path" : clipPathPolygon});
    },

    render : function() {
        var self = this;
        if (typeof FileReader !== "undefined") {
            this.reader = new FileReader();
        } else {
            xfalib.ut.XfaUtil.prototype.getLogger().error("Image Field is supported only for HTML5 supported browsers.");
        }
        if (this.element) {
            // change event triggered when new image is selected
            this.$widgetInput = this.element.find("input").on("change.imageField", function() {
                self._handleInputChange();
            }).click(function(event) {
                // to stop bubbling of event from input to widget
                event.stopPropagation();
            });
            this.$widgetImg = this.element.on("click.imageField", function() {
                self._imageClick();
            }).find("img");
        }
        if (this.reader) {
            //load event is triggered each time the reading operation is successfully completed
            this.reader.addEventListener("load", function () {
                self.$widgetImg.attr("src",self.reader.result);
                self.$widgetImg.trigger("imagechange");
            }, false);
        }
        return $.xfaWidget.defaultWidget.prototype.render.apply(this, arguments);
    },

    getCommitValue: function() {
        return this._extractData(this.$userControl.attr("src"));
    },

    // hidden input change handler, input change will be triggered on selecting a new image
    _handleInputChange : function() {
        this._displayImage();
    },

    _imageClick : function(clickEvent) {
        //as the input button is hidden we trigger click explicitly on click of the widget
        this.$widgetInput.trigger("click");
    },

    // removes "data\:.*\;base64," from the image base64 string
    _extractData : function(value) {
        return value.replace(/data\:.*\;base64,/, "");
    },

    // previews image in the imagefield widget
    _displayImage : function() {
        var imageFile = this.$widgetInput.get(0).files ? this.$widgetInput.get(0).files[0] : null;
        if (imageFile && this._isFileOfImageType(imageFile.name)) {
            if (this.reader) {
                //readAsDataURL method is used to read the contents of the specified file, result attribute contains  the data as a URL representing the file's data as a base64 encoded string
                this.reader.readAsDataURL(imageFile);
            }
        }
    },

    // Test for supported image file(jpg,jpeg,png,gif,tif,bmp)
    _isFileOfImageType : function(fileName) {
        if (fileName) {
            return (/\.(jpe?g|png|gif|tif|bmp)$/i.test(fileName));
        }
        return false;
    }
});
})($);
/**
 * Created with IntelliJ IDEA.
 * User: rpandey
 * Date: 12/24/12
 * Time: 8:06 PM
 * To change this template use File | Settings | File Templates.
 */


(function($){
    $.widget( "xfaWidget.signatureField", $.xfaWidget.defaultWidget, {

        _widgetName:"signatureField",

        getOptionsMap: function() {
            var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments);
            return $.extend({},parentOptionsMap,{
                "displayValue": function(val) {},
                "access": function(val) {}
            })
        },

        render : function() {
            var $control = $.xfaWidget.defaultWidget.prototype.render.apply(this, arguments);
            //pessimistic checks
            if($control) {
                $control.attr("readOnly","readonly").attr("disabled", true);
            }
            return $control;
        }
    });
})($);
/*
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2011-2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
 
/**
 * widget definition for scribbleable field
 */
(function($,xfalib){

 var TouchUtil=xfalib.ut.TouchUtil;
 var ScribbleUtil=(function(){
      return {
          localeString:function(id){
                    return xfalib.ut.XfaUtil.prototype.encodeScriptableTags($.xfaWidget.abstractWidget.prototype.localeStrings()[id])  || id;
          }
      };
 })();
 var DELETE_KEY = 46;
 var ESC_KEY = 27;
 var ENTER_KEY = 13;
/**
 * Scribble class definition, used for drawing on canvas using mouse or touch
 */
function Scribble( canvasID,image,_width,_height, callback) {
    this._callback = callback;
    this.canvasID = canvasID;
    this._lineWidth=5;
    this.canvas = $("#"+canvasID);
    this.context = this.canvas.get(0).getContext("2d"); 
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    this._enabled=true;
    this.context.strokeStyle = "#000000";
    this.canvasBorderWidth = parseInt(this.canvas.css('border-left-width'),10); // assuming top and left borders are same width
    this.context.lineWidth = this._lineWidth;
    this.lastMousePoint = {x:0, y:0};
    
    this.canvas[0].width = _width;// this.canvas.parent().innerWidth();
    this.canvas[0].height = _height;//this.canvas.parent().innerHeight();
    if(!image){
        this.context.fillStyle   = '#ffffff';
        this.context.clearRect(0,0,_width,_height);
    } else {
        this.context.drawImage(image,0,0);
    }
    this.canvas.bind( TouchUtil.POINTER_DOWN, this.onCanvasMouseDown() );
}
Scribble.prototype.setLineWidth=function(w){
    this._lineWidth=w;
};
Scribble.prototype.onCanvasMouseDown = function () {
    var self = this;
    return function(event) {
        if(TouchUtil.getTouches(event).length < 2){
            self.mouseMoveHandler = self.onCanvasMouseMove();
            self.mouseUpHandler = self.onCanvasMouseUp();
            //CQ-4261765 : Scribble sign scroll issue with ios
            //https://stackoverflow.com/questions/49500339/cant-prevent-touchmove-from-scrolling-window-on-ios
            //https://github.com/jquery/jquery/issues/2871
            document.addEventListener(TouchUtil.POINTER_MOVE, self.mouseMoveHandler,{ passive: false });
            $(document).on(TouchUtil.POINTER_UP, self.mouseUpHandler );
            self.updateMousePosition( event );
            self.updateCanvas( event );
        }
    }
};

Scribble.prototype.onCanvasMouseMove = function () {
    var self = this;
    return function(event) {
        if(TouchUtil.getTouches(event).length < 2){
            self.updateCanvas( event );
            event.preventDefault();
            return false;
        }
    }
};

Scribble.prototype.onCanvasMouseUp = function (event) {
    var self = this;
    return function(event) {
        document.removeEventListener(TouchUtil.POINTER_MOVE, self.mouseMoveHandler,{ passive: false });
        $(document).off(TouchUtil.POINTER_UP, self.mouseUpHandler );
        self.mouseMoveHandler = null;
        self.mouseUpHandler = null;
    }
};

Scribble.prototype.updateMousePosition = function (event) {
    if(!this._enabled) return ;
    var target = TouchUtil.getTouchEvent(event);

    var offset = this.canvas.offset();
    /* In IE>=10 pageX values are incorrect when using zoom
     so calculate them using clientX and scrollLeft */
    this.lastMousePoint.x = target.clientX + $(window).scrollLeft() - offset.left - this.canvasBorderWidth;
    this.lastMousePoint.y = target.clientY + $(window).scrollTop() - offset.top - this.canvasBorderWidth;

};
Scribble.prototype._isInsideCanvas = function(x,y){
    return y>=0 && y<this.canvas[0].height && x>=0 && x < this.canvas[0].width;
};
    Scribble.prototype.updateCanvas = function (event) {
    if(!this._enabled) {
       return;
    }
    var oldX,oldY,dX,dY,canDraw,scaleX,scaleY,cssWidth,cssHeight;
    cssWidth = parseInt(this.canvas[0].style.width,10);
    cssHeight = parseInt(this.canvas[0].style.height,10);
    scaleX =  cssWidth?this.canvas[0].width/cssWidth:1;
    scaleY = cssHeight?this.canvas[0].height/cssHeight:1;

    scaleX /= xfalib.ut.XfaUtil.prototype.formScaleFactor;
    scaleY /= xfalib.ut.XfaUtil.prototype.formScaleFactor;

    oldX = this.lastMousePoint.x*scaleX;
    oldY = this.lastMousePoint.y*scaleY;
   
    this.updateMousePosition( event );

    var newX =  this.lastMousePoint.x*scaleX;
    var newY =  this.lastMousePoint.y*scaleY;

    dX = Math.abs(newX - oldX );
    dY = Math.abs(newY - oldY );

    canDraw = ( dX > 0 || dY > 0 ) && this._isInsideCanvas(oldX,oldY) && this._isInsideCanvas(newX,newY);;

    if(canDraw){
        this.context.beginPath();
        this.context.moveTo( oldX, oldY );
        this.context.lineTo(newX, newY );
        this.context.lineWidth=this._lineWidth;
        this.context.lineCap='round';
        this.context.stroke();
		
        this._callback();
		
    }
};

Scribble.prototype.toString = function () {

    var dataString = this.canvas.get(0).toDataURL("image/png");
    //var index = dataString.indexOf( "," )+1;
    //dataString = dataString.substring( index );

    return dataString;
};
Scribble.prototype.setEnabled=function(enable){
    this._enabled=enable;
};
Scribble.prototype.clear = function () {

    var c = this.canvas[0];
    this.context.clearRect( 0, 0, c.width, c.height );
};


// ImageEdit dialog box
var imageEditDialog=(function(){
  
    // html used to construct dialog box
    var htmlStr=(function(){
         var html=[
             '<div id="iEBox_container" tabindex="0" role="dialog" aria-label="'+ScribbleUtil.localeString("pleaseSignText")+'">',
                  '<div id="iEBox_panel">',
                      '<div  id = "iEBox_Cancel" class="iEBox_button" tabindex="0" role="button" aria-label="'+ScribbleUtil.localeString("cancel")+'" title="'+ScribbleUtil.localeString("cancel")+'" ></div>',
                  '</div>',
                  '<div id="iEBox_content">',
                      '<div id="iEBox_canvases" align=center>',
                          '<div style="display:inline-block;">',
                               '<canvas  id="iEBox_canvas" style="margin:0px;border-bottom:0px;" width="696" height="390" ></canvas>' ,
                               '<fieldset id="iEBox_caption"><legend align="center">'+ScribbleUtil.localeString("pleaseSignText")+'</legend></fieldset>',
                          '</div>',
                          '<canvas id="iEBox_geoCanvasRight" width="0" height="0" ></canvas>',
                          '<div><canvas id="iEBox_geoCanvasBottom" width="0" height="0" ></canvas></div>',
                      '</div>',
                      '<div>',
                          '<div id="iEBox_Brush" class="iEBox_button" tabindex="0"  role="button" aria-label="'+ScribbleUtil.localeString("brushes")+'"  title="'+ScribbleUtil.localeString("brushes")+'"></div>',
                          '<div id="iEBox_Clear" class="iEBox_button" tabindex="0"  role="button" aria-label="'+ScribbleUtil.localeString("clear")+'"  title="'+ScribbleUtil.localeString("clear")+'" ></div>',
                          '<div id="iEBox_Geo" class="iEBox_button" tabindex="0"  role="button" aria-label="'+ScribbleUtil.localeString("geolocation")+'"  title="'+ScribbleUtil.localeString("geolocation")+'" ></div>',
                          '<div id="iEBox_title"></div>',
                          '<div id="iEBox_Ok" class="iEBox_button" tabindex="0"  role="button" aria-label="'+ScribbleUtil.localeString("ok")+'"  title="'+ScribbleUtil.localeString("ok")+'" ></div>',
                      '</div>' ,
                  '</div>' ,
                  '<div id="iEBox_moveframe" ></div>',
                  '<div id="iEBox_brushList" ></div>',
              '</div>'].join("");
           return function(){
              return html;
           };
    });
	
    /**
	 *   
	 */
	
    var dialogObj = {
        verticalOffset: 0, // removing the magic value of -75 since it was not causing any impact
        horizontalOffset: 0,
        repositionOnResize: true,
        overlayOpacity: .75,
        overlayColor: '#CCCCCC',
        draggable: true,
        _brushes:[2,3,4,5,6,7,8,9,10],
		_buttonsEnabled:{},
		_isOpen:false,
        show:function(title,callback){
           this._show(callback);
		   this._buttonsEnabled={Geo:true,Clear:true,Ok:true,Cancel:true,Brush:true};
        },
		setEnabled:function(button,enable){
		    if(this._buttonsEnabled[button]!=enable){
		           this._buttonsEnabled[button]=enable;
				   if(enable){
				       $('#iEBox_'+button).empty('<div style="background:white;width:100%;height:100%;opacity:0.75;"></div>').
				                  removeClass("disable_button");
				   } else {
				       $('#iEBox_'+button).append('<div style="background:white;width:100%;height:100%;opacity:0.75;"></div>').
				                  addClass("disable_button");
				   }
			       
			}
		},
		enableButtons:function(buttons){
		    for(var k in buttons){
				   this.setEnabled(k,buttons[k]);
			}
		},
        toggleBrushList:function(event){
                var that = this;
                if($('#iEBox_brushList').css('display')!='none'){
                    $('#iEBox_brushList').css({display:'none'});
                    return;
                }
                 var tmpFn =  document.onselectstart;
                 document.onselectstart=function(){return false;};
                 $('#iEBox_brushList').css({display:'block',visibility:'hidden'});
                    $('#iEBox_brushList').offset($('#iEBox_Brush').offset());
                    $('#iEBox_brushList').offset({top:$('#iEBox_Brush').offset().top-$('#iEBox_brushList').height()});
                    $('#iEBox_brushList').css({display:'block',visibility:'visible'});
                  //  $('#iEBox_brushList').focus();
                     $('#iEBox_brushList').one('mouseleave',function(event){
                         $('#iEBox_brushList').css({display:'none'});
                          document.onselectstart=tmpFn;
                     });
        },
        _attachCallbacks: function(callback) {
            var that = this;
           _.each("Cancel-Clear-Geo-Ok-Brush".split("-"),function(val,idx){
                    $("#iEBox_"+val).click( function(event) {
				       if(that._buttonsEnabled[val]){
                          event.stopPropagation();
                          callback(val);
				       }
                    });
					$("#iEBox_"+val).keydown( function(event) {
				       if(that._buttonsEnabled[val] && (event.keyCode == ENTER_KEY || event.charCode == ENTER_KEY || event.which == ENTER_KEY) ){
                          event.stopPropagation();
                          callback(val);
				       }
                    });
            });
            _.each($("#iEBox_brushList").children(),function(itm,idx){
                  $(itm).on(TouchUtil.POINTER_UP,function(event){
                         callback("BrushSelect",that._brushes[idx]);
                         $('#iEBox_brushList').css({display:'none'});
                          // $(itm).css({backgroundColor:'#FFFFFF'});
                  });
                  $(itm).on(TouchUtil.POINTER_DOWN,function(event){
                          // $(itm).css({backgroundColor:'#AAAAAA'});
                           event.preventDefault();
                  });
             });
            // capture tab key and escape
			$('#iEBox_container').keydown(function(event){
			   if((event.keyCode == ESC_KEY || event.charCode == ESC_KEY || event.which == ESC_KEY)){
                   event.stopPropagation();
               	   event.preventDefault();
               	   callback("Cancel");
               }
            });

            if(this.draggable){
                this._makeDraggable(TouchUtil.TOUCH_ENABLED);
            }
        },
        _makeDraggable:function(touchEnabled){
              var _isMouseDown=false;
              var _that=this;
              var dX;
              var dY;
              var offsetPos;
              var _mouseMovFun;
              var _mouseUpFun;
              $('#iEBox_panel').on(TouchUtil.POINTER_DOWN,function( event ){
              
                  if(TouchUtil.getTouches(event).length < 2){
                      if($(event.target).is('#iEBox_panel')){
                          $('body')[0].addEventListener(TouchUtil.POINTER_MOVE,_mouseMovFun=function( event ){
                              if(TouchUtil.getTouches(event).length < 2 && _isMouseDown){
                                  event.preventDefault();
                                  var evt = TouchUtil.getTouchEvent(event);
                                  var delX = evt.pageX - dX;
                                  var delY = evt.pageY - dY;
                                  $('#iEBox_moveframe').offset({
                                      top: offsetPos.top+delY,
                                      left: offsetPos.left+delX
                                  });
                              }
                          }, { passive: false });
                          $('body').on(TouchUtil.POINTER_UP,_mouseUpFun=function(event){
                              if(_isMouseDown){
                                  var offsetMove = $('#iEBox_moveframe').offset();
                                  var topEdge  = $(window).scrollTop();
                                  var bottomEdge = topEdge + $(window).height();
                                  if(offsetMove.top - topEdge < 1){
                                      offsetMove.top = topEdge;
                                  }
                                  if(offsetMove.top - bottomEdge + $('#iEBox_panel').height() > 0 ){
                                      offsetMove.top = bottomEdge - $('#iEBox_panel').height();
                                  }
                                  $('#iEBox_container').offset(offsetMove );
                                  $('#iEBox_moveframe').css({display:'none'}).offset(offsetMove);
                                  _isMouseDown=false;
                                  $('body')[0].removeEventListener(TouchUtil.POINTER_MOVE,_mouseMovFun,{ passive: false });
                                  $('body').off(TouchUtil.POINTER_UP,_mouseUpFun);
                              }
                          });

                          var evt = TouchUtil.getTouchEvent(event);
                          _isMouseDown=true; dX = evt.pageX;dY=evt.pageY;
                          offsetPos = $('#iEBox_container').offset();
                          $('#iEBox_moveframe').css({display:'block'});
                          $('#iEBox_moveframe').offset(offsetPos);
                          $('#iEBox_moveframe').css('width',$('#iEBox_container').css('width'));
                          $('#iEBox_moveframe').css('height',$('#iEBox_container').css('height'));
                      }
                  }
              });
             
        },
        _createBrushes:function(){
               var _that=this;
              _.each(this._brushes,function(val,idx){
                  var divel = document.createElement('DIV');
                  var cnv = document.createElement('CANVAS');
                  var ctx = cnv.getContext('2d');
                  cnv.style.border='1px solid #AAAAAA';
                  cnv.width=TouchUtil.TOUCH_ENABLED?200:100;
                  cnv.height=TouchUtil.TOUCH_ENABLED?40:20;;
                  ctx.lineWidth=val;
                  ctx.beginPath();
                  ctx.moveTo(10,cnv.height/2);
                  ctx.lineTo(cnv.width-10,cnv.height/2);
                  ctx.stroke();
                  divel.appendChild(cnv);
                  $('#iEBox_brushList').append(divel);
               });
        },
		getIsOpen:function(){
		    return dialogObj._isOpen;
		},
		setIsOpen:function(open){
		    dialogObj._isOpen = open;
		},
        _show: function(callback) {
            dialogObj.hide();
            dialogObj._overlay('show');
            
            $("BODY").append(htmlStr());
            dialogObj.setIsOpen(true);
            $('#iEBox_container').focus();
            dialogObj._createBrushes();

            dialogObj._reposition();

            // calculate spacing around canvas area
            // this will be used to find canvas dimensions based on available screen area.
            var container_el = $('#iEBox_container');
            var canvas_el =  $('#iEBox_canvas');
            var container_width = $('#iEBox_container').outerWidth(true);
            var container_height = $('#iEBox_container').outerHeight(true);
            var canvas_width = canvas_el[0].width;
            var canvas_height = canvas_el[0].height;
            dialogObj.canvas_spacing = { x:container_width - canvas_width, y:container_height-canvas_height};

            dialogObj._maintainPosition(true);
            
            dialogObj._attachCallbacks(callback);
        },

        hide: function() {
            $("#iEBox_container").remove();
            this._overlay('hide');
            dialogObj.setIsOpen(false);
            this._maintainPosition(false);
        },
        _overlayResize:function(event) {
            if($("#iEBox_overlay").height()!= $(document).height()){
                $("#iEBox_overlay").height( $(document).height() );
            }

        },
        _disableMove:function(event) {
            event.preventDefault();
        },
        _overlay: function(status) {
            switch( status ) {
                case 'show':
                    this._overlay('hide');
                    $("BODY").append('<div id="iEBox_overlay"></div>');
                    $("#iEBox_overlay").css({
                        position: 'fixed',
                        zIndex: 99997,
                        top: '0px',
                        left: '0px',
                        width: '100%',
                        height: $(document).height(),
                        background: this.overlayColor,
                        opacity: this.overlayOpacity
                    });
                    if(xfalib.ut.XfaUtil.prototype.isSafari()) {
                        $("#iEBox_overlay").on('touchmove', this._disableMove);
                    }
                    $(document).on('scroll',this._overlayResize);
                break;
                case 'hide':
                    if(xfalib.ut.XfaUtil.prototype.isSafari()) {
                        $("#iEBox_overlay").off('touchmove');
                    }
                    $("#iEBox_overlay").remove();
                    $(document).off('scroll',this._overlayResize);
                break;
            }
        },
        /**
         * resize dialog based on available screen area
         */
        _resize:function(){
            // available screen area
            var aWidth = $(window).width();
            var aHeight = $(window).height();

            var sigCnv = $('#iEBox_canvas')[0];
            var bGeoCnv = $('#iEBox_geoCanvasBottom')[0];
            var rGeoCnv = $('#iEBox_geoCanvasRight')[0];

            // calculate amount of width height we need to reduce

            var totalCnvWidth = sigCnv.width + rGeoCnv.width;
            var totalCnvHeight = sigCnv.height + bGeoCnv.height;





            var diffW = totalCnvWidth + dialogObj.canvas_spacing.x - aWidth;
            if(diffW < 0) {
                diffW = 0;
            }
            var diffH = totalCnvHeight + dialogObj.canvas_spacing.y - aHeight;
            if(diffH < 0){
                diffH = 0;
            }

            var newTotalCnvHeight, newTotalCnvWidth;
            if( diffW > 0 || diffH > 0 ){ // does any side need resize

                if(diffH * totalCnvWidth > totalCnvHeight * diffW){ // need to reduce height
                   newTotalCnvHeight = totalCnvHeight - diffH;
                   newTotalCnvWidth = (newTotalCnvHeight * totalCnvWidth)/ totalCnvHeight;
                } else {
                   newTotalCnvWidth = totalCnvWidth - diffW;
                   newTotalCnvHeight = (newTotalCnvWidth * totalCnvHeight)/ totalCnvWidth;
                }

                // distribute evenly the new dimensions


                var newSigCnvWidth   = (newTotalCnvWidth*sigCnv.width)/totalCnvWidth;
                var newSigCnvHeight = (newTotalCnvHeight*sigCnv.height)/totalCnvHeight;

                sigCnv.style.width = newSigCnvWidth + "px";
                sigCnv.style.height = newSigCnvHeight + "px";

                bGeoCnv.style.width = newSigCnvWidth +"px";
                bGeoCnv.style.height = (newTotalCnvHeight - newSigCnvHeight) +"px";

                rGeoCnv.style.width = (newTotalCnvWidth - newSigCnvWidth) +"px";
                rGeoCnv.style.height = newSigCnvHeight + "px";


                $('#iEBox_caption').width(Math.floor(newSigCnvWidth));

            } else {
                sigCnv.style.width =  sigCnv.width + "px";
                sigCnv.style.height = sigCnv.height + "px";

                bGeoCnv.style.width =  bGeoCnv.width + "px";
                bGeoCnv.style.height = bGeoCnv.height + "px";

                rGeoCnv.style.width =  rGeoCnv.width + "px";
                rGeoCnv.style.height = rGeoCnv.height + "px";

                $('#iEBox_caption').width(sigCnv.width);

            }
        },
        _reposition: function() {
            var top = (($(window).height() * (1 / xfalib.ut.XfaUtil.prototype.formScaleFactor) / 2) - ($("#iEBox_container").outerHeight() / 2)) + dialogObj.verticalOffset;
            var left = (($(window).width() * (1 / xfalib.ut.XfaUtil.prototype.formScaleFactor) / 2) - ($("#iEBox_container").outerWidth() / 2)) + dialogObj.horizontalOffset;
            if( top < 0 ) top = 0;
            if( left < 0 ) left = 0;

            $("#iEBox_container").css({
                top: top + $(window).scrollTop() * (1 / xfalib.ut.XfaUtil.prototype.formScaleFactor) + 'px',
                left: left + $(window).scrollLeft() * (1 / xfalib.ut.XfaUtil.prototype.formScaleFactor) + 'px'
            });
            $("#iEBox_container").focus();   // scroll up to the canvas
            $("#iEBox_overlay").height( $(document).height() );
        },
        _maintainDialog:function(){
            dialogObj._resize();
            dialogObj._reposition();
        },
        _maintainPosition: function(status) {
            if(dialogObj.repositionOnResize ) {
                switch(status) {
                    case true:
                        $(window).on('orientationchange', dialogObj._maintainDialog); // also reposition if device is tilted
                    break;
                    case false:
                        $(window).off('orientationchange', dialogObj._maintainDialog);
                    break;
                }
            }
        }
        
    };
    return dialogObj;
})();

/**
 * class definition for GeoLocationQueryRequest
 * encapsulated success and error handlers 
 */
function GeoLocQuery(){}
GeoLocQuery.prototype={
    init:function(success,failure){
        this._successHandler = success;
        this._errorHandler = failure;
        this._active=true;
        return this;
    },
    _handleSuccess:function(data){
        this._successHandler(data); 
    },
    _handleError:function(err){
        this._errorHandler(err);   
    },
    query:function(){
         _that=this;
         navigator.geolocation.getCurrentPosition(function(pos){
          if(_that._active){
             _that._handleSuccess(pos);
          }
          _that._active=false;
       },function(err){
          if(_that._active){
             _that._handleError(err);
          }
          _that._active=false;
       },{timeout:10000});
    },
    cancel:function(){
        _that._active=false;
    }

};
// GeoLocQuery definition ends here

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		return output;
 
	}
 
	
 
};

/**
 * Utility Singleton for handling PNG Data
 */
var PNGUtil=(function(){
    var slf={
   _LC_Scribble_MetaDataKey:"LC_SCIBBLE_METADATA",
           _isPng:function(b64data){
               return  b64data && b64data.replace(/\s+/g, "").indexOf("iVBORw0KGgo") == 0;   // LC-5711 : trim any leading WhiteSpace
               // TODO :  base64 encoding may have white spaces even between the magic numbers !! Think of a better way to stop stripping white spaces repeatedly in PNGUtil, and cache the result
           },
           _update_crc:function(crc,data){
               var c = crc;
               var n;
               for(n=0;n<data.length;n++){
                  c = this._XOR(slf._crc_table[(this._XOR(c,data.charCodeAt(n))&0xff)>>>0],(c>>>8));
               }
               return c;
           },
		   _XOR:function(a,b){
		       return (a^b)>>>0;
		   },
           _U32Int2Str:function(n){
                return String.fromCharCode((n>>>24)&0xFF)+String.fromCharCode((n>>>16)&0xFF)+String.fromCharCode((n>>>8)&0xFF)+String.fromCharCode(n>>>0&0xFF);
            },
           _init_crc_table:function(){
               var c=0;
               var n,k;
               slf._crc_table=[];
               for(n=0;n<256;n++){
                   c = n;
                   for(k=0;k<8;k++){
                      if(((c&1)>>>0)>0){
                          c = slf._XOR(0xedb88320 , (c>>>1));
                      } else {
                          c = c>>>1;
                      }
                   }
                   slf._crc_table[n]=c;
                }
           },
           _CRC:function(data){
                if(!this._crc_table) this._init_crc_table();
                return this._XOR(this._update_crc(0xffffffff,data) , 0xffffffff);
          },
          _prepareTextChunk:function(content,pad){
              // pad the data appropriately                      
               var len = content.length;
               var lenStr = slf._U32Int2Str(len);
               var chunkType="tEXt";
               var checkSumStr = slf._U32Int2Str(slf._CRC(chunkType+content));
               return lenStr+chunkType+content+checkSumStr;
           },
        _start:function(str){
           slf._startTime = new Date().getTime();
           slf._startFun=str;
        },
        _end:function(){
           var str = "Time "+slf._startFun+": "+(new Date().getTime()-slf._startTime);
          //  $('BODY').append("<p>"+str+"</p><br/>");
        },
        _readU32Int:function(ctx){
            var val=0;
            var d=ctx.d;
            val=((d.charCodeAt(ctx.p++)<<24)|(d.charCodeAt(ctx.p++)<<16)|(d.charCodeAt(ctx.p++)<<8)|(d.charCodeAt(ctx.p++)))>>>0;
             return val;
        },
       _readChunkType:function(ctx){
          var d = ctx.d;
          var str = d[ctx.p++]+d[ctx.p++]+d[ctx.p++]+d[ctx.p++];
          return str;
       },
        _makeReadOnly:function(b64data){
      slf._start("_makeReadOnly");
      // assume a valid png image encoded in base64;
      var bindata = slf._atob(b64data.replace(/\s+/g, '')); // remove white spaces that might have been inserted
      var pngctx={p:0,d:bindata};
      pngctx.p+=8;// skip pngheader
      // read IHDR
      var size = slf._readU32Int(pngctx);
      slf._readChunkType(pngctx); //IHDR
      pngctx.p+=size; //Data
      slf._readU32Int(pngctx);//CRC
      var metadataChunk = slf._prepareTextChunk(slf._LC_Scribble_MetaDataKey+String.fromCharCode(0)+"true");
      var newdata = pngctx.d.substring(0,pngctx.p)+metadataChunk+pngctx.d.substring(pngctx.p);
      var ret= slf._btoa(newdata);
      slf._end();
      return ret;
   },
   _atob:function(inp){
      if(window.atob){ return atob(inp); }
	  return Base64.decode(inp);
   },
   _btoa:function(inp){
      if(window.btoa){ return btoa(inp); }
	  return Base64.encode(inp);
   },
   _isReadOnly:function(b64data){
    slf._start("_isReadOnly");
       if(slf._isPng(b64data)){
           var testStr = slf._LC_Scribble_MetaDataKey+String.fromCharCode(0)+"true";
           var bindata = slf._atob(b64data.replace(/\s+/g, '')); // strip white spaces
           var pngctx={p:0,d:bindata};
           pngctx.p+=8;// skip header
           while(pngctx.p<pngctx.d.length){
               var size = slf._readU32Int(pngctx);
               var type = slf._readChunkType(pngctx);
               if(type=="tEXt"){
                   if(pngctx.d.indexOf(testStr,pngctx.p)==pngctx.p){
                       slf._end();
                       return true;
                   }
                  
              }
              pngctx.p+=size;
              slf._readU32Int(pngctx);// 
          }// while end
       }
       slf._end();
       return false;
   }
    };
    return slf;
})();

/**
 * JQuery widget definition starts here
 */
$.widget( "xfaWidget.ScribbleImageField", $.xfaWidget.imageField, {

    _widgetName:"ScribbleImageField",
    _geoLocQuery:null,
   _emptyImageVal:null,// should be null, but for now
   _extraInfo:null,
   _defaultStatus:"&nbsp;",
   _enforceGeoLoc:!!navigator.userAgent.match(/iPad/i),
   _sigCanvasWidth:696,
   _sigCanvasHeight:390,
   _geoCanvId:null,
    _geoLocAtBottom:false,
   _geoCanvasHeight:100,
   _geoCanvasWidth:696,
   
    _is_readonly:false,
	
    options: {
        tabIndex: 0,
        "role": "img"
    },

    getOptionsMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getOptionsMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "displayValue": function(val) {
                if(this.options.commitProperty) {
                    if(!val){
                        this._displayValue(this._extractData(this._createEmptyImageData()));
                        this.$userControl.addClass("emptyScribble");
                        this._is_readonly=false;
                    } else {
                        this.$userControl.removeClass("emptyScribble");
                        if(PNGUtil._isPng(val)){
                            var widgetValue = "data:image/png;base64,"+this.options.value;
                        }else {
                            var widgetValue = "data:;base64," + this.options.value;
                        }
                        this._setValue(widgetValue);
                    }
                }
            }
        })
    },

    getEventMap: function() {
        var parentOptionsMap = $.xfaWidget.defaultWidget.prototype.getEventMap.apply(this,arguments);
        return $.extend({},parentOptionsMap,{
            "scribblefocus":xfalib.ut.XfaUtil.prototype.XFA_ENTER_EVENT,
            "click":null,
            "scribbleclick":xfalib.ut.XfaUtil.prototype.XFA_CLICK_EVENT,
            "change":null,
            "scribblechange":xfalib.ut.XfaUtil.prototype.XFA_CHANGE_EVENT,
            "blur":null,
            "scribbleclose":xfalib.ut.XfaUtil.prototype.XFA_EXIT_EVENT
        })
    },

	/**
	 * This function achieves following
	 * 1. Calculate dimensions of canvases to be used
	 * 2. Findout if right or bottom canvas is to be used for geo location
	 */

	 aspectRatioToBeUsed :function(){
        var aspectRatio ;
        if(this.options.aspectRatio && parseFloat(this.options.aspectRatio) > 0){
           aspectRatio = 1/parseFloat(this.options.aspectRatio);  //--in MF ratio is computed as height/width instead of width/height
        } else {
           var imgEl = this.element.children("img"),
               width = imgEl.attr('width'),
               height = imgEl.attr('height'),
               fieldWidth,
               fieldHeight;

           if(width){
              fieldWidth = parseInt(width,10);
           } else {
              fieldWidth = imgEl.width();
           }
           if(height){
              fieldHeight = parseInt(height,10);
           } else {
              fieldHeight = imgEl.height();
           }
           aspectRatio = fieldHeight/fieldWidth;
        }
	    return aspectRatio;
	 },

    _setUpCanvas:function(){
        var aspectRatio ;
		aspectRatio = this.aspectRatioToBeUsed();
       
        // max width, height of generated image
        var maxWidth = 640;
        var maxHeight = 480;
        
        // width of field scaled to fit max image size
        var scaledWidth;
        var scaledHeight;
        
        
		// approx pixels required for rendering geo loc info in 12pt Arial font 
		var approxGeoLocWidth=250;
		var approxGeoLocHeight=84;
        
        scaledWidth = maxWidth;
        scaledHeight = maxWidth*aspectRatio;
        if(scaledHeight>maxHeight){
            scaledHeight = maxHeight;
            scaledWidth = maxHeight/aspectRatio;
        }
        
        // set canvas dimensions
        if(aspectRatio>=1){
			this._geoCanvId='iEBox_geoCanvasBottom';
            this._geoLocAtBottom=true;
          
			
             this._geoCanvasWidth = scaledWidth;
			 // limit height to 30% of full height;
			 this._geoCanvasHeight=Math.min(approxGeoLocHeight,scaledHeight/3);
             this._sigCanvasWidth = scaledWidth;
             this._sigCanvasHeight= scaledHeight-(this._enforceGeoLoc?this._geoCanvasHeight:0);
        } else {
			this._geoCanvId='iEBox_geoCanvasRight';
            this._geoLocAtBottom=false;
           
			
            this._geoCanvasHeight = scaledHeight;
			// limit width to 30% of full width;
			this._geoCanvasWidth=Math.min(approxGeoLocWidth,scaledWidth/3);
            this._sigCanvasHeight= scaledHeight;
            this._sigCanvasWidth= scaledWidth-(this._enforceGeoLoc?this._geoCanvasWidth:0);
        }
       
    },

   render : function() {
       var geoLocMandatoryOnIpad = this.options.geoLocMandatoryOnIpad;
       if(typeof(geoLocMandatoryOnIpad)!="undefined"){
           this._enforceGeoLoc= this._enforceGeoLoc && (/^(true|1)$/i).test($.trim(geoLocMandatoryOnIpad));
       }
       this._wgtId="wid"+~~(Math.random()*2000)+"_"+new Date().getTime();

       var $control = $.xfaWidget.defaultWidget.prototype.render.apply(this, arguments)

       if(this.options.value || this.options.value != this._emptyImageVal){
          this._is_readonly=!!PNGUtil._isReadOnly(this.options.value);
       }
   
       if(this._is_readonly){
          $control.after("<div id='"+this._wgtId+"' class='sc_popUpMenu'></div>");
       } else {
          $control.after("<div id='"+this._wgtId+"' style='display:none;' class='sc_popUpMenu'></div>");
       }
	   
	   this._setUpCanvas();
       return $control;
    },

   click: function() {
        this.focus();
        var tmpEl = this.element.length?this.element[0]:this.element;
        if(this.options.access != "open")
          return;
       if (TouchUtil.POINTER_ENABLED || TouchUtil.TOUCH_ENABLED) {
           // simulate a click event
           tmpEl.dispatchEvent(TouchUtil.getPointerEvent(TouchUtil.POINTER_DOWN));
           tmpEl.dispatchEvent(TouchUtil.getPointerEvent(TouchUtil.POINTER_UP));
        }
        else {
              this.$userControl.triggerHandler("click");
        }
   },

    _attachEventHandlers:function($control){
	     if(TouchUtil.POINTER_ENABLED || TouchUtil.TOUCH_ENABLED){
            this._attachTouchEventHandlers($control);
         } else {
            this._attachMouseEventHandlers($control);
         }
         $control.keydown($.proxy(this._handleKeyDown,this));
    },
	_attachEventHandlerForCrossIcon:function($control){
	    var _that = this;
	    $control.mouseenter(function(event){
             if(_that.options.access != "open")
                    return;
             event.stopPropagation();
             if(_that._is_readonly){
                $('#'+_that._wgtId).css({display:'block'});
                var bodyMoveHandler;
                $('body').on('mousemove',bodyMoveHandler=function(event){
                    if(event.target!=$('#'+_that._wgtId)[0]&&event.target!=_that.$userControl[0]){
                        $('#'+_that._wgtId).css({display:'none'});
                         $('body').off('mousemove',bodyMoveHandler);
                    }
                });
              }
       });

       setTimeout(function(){ $("#"+_that._wgtId).click($.proxy(_that._onCrossClick,_that));},50);  
	},
    _attachTouchEventHandlers:function($control){
        var _timer,_that=this;
        var tmpEl = this.element.length?this.element[0]:this.element;
       tmpEl.addEventListener(TouchUtil.POINTER_DOWN,function(event){
           if(_that.options.access != "open")
              return;
             event.preventDefault();
           _timer = setTimeout(function(){
                _timer=0;
               _that._onCrossClick(event);
            },1000);
        });
       tmpEl.addEventListener(TouchUtil.POINTER_UP,function(event){
            if(_that.options.access != "open")
                return;
            event.preventDefault();
            if(_timer){
               clearTimeout(_timer);
               _that._onImageClick(event);
            } 
        });
		
	   if(TouchUtil.POINTER_ENABLED){
		     this._attachEventHandlerForCrossIcon($control);
			 setTimeout(function(){ $("#"+_that._wgtId).on(TouchUtil.POINTER_UP,function(event){
			        event.stopPropagation();
			 });},50);
	   }
    },

    _attachMouseEventHandlers:function($control){
         var _timer=0,_that=this,_hoverTimer=0;
        $control.dblclick(function(event){
            if(_that.options.access != "open")
                return;
           event.preventDefault();event.stopPropagation();
           if(_timer.val){
             clearTimeout(_timer);_timer =0;
           }
           _that._onCrossClick(event);
        }).click(function(event){
           _that.$userControl.trigger("scribbleclick",event);
           if(_that.options.access != "open")
                return;
           event.preventDefault();
           event.stopPropagation();
           if(_timer){
              clearTimeout(_timer);_timer=0;
            } else {
              _timer = setTimeout(function(){
                 _timer=0;
                 _that._onImageClick(event);
              },500);
            }
       });
	   
	   this._attachEventHandlerForCrossIcon($control);
       
    },

    _onCrossClick:function(event){
        if(!this._is_readonly) return;
        this.$userControl.trigger("scribblefocus",event);
        this.$userControl.trigger("scribbleclick",event);
        event.stopPropagation();
        $.alertBox.yesNo(null,
         this.localeStrings().clearSignatureConfirm,
         this.localeStrings().clearSignature,
         $.proxy(this._removeSigConfirmationHandler,this));
     },

     _removeSigConfirmationHandler:function(isYes){
        if(isYes){
           this._saveValue(this._emptyImageVal);
           this._displayValue(this._extractData(this._createEmptyImageData()));
           this.$userControl.addClass("emptyScribble").trigger("scribbleclose",{});
           this._is_readonly=false;
        }
     },

    _createEmptyImageData:function(){
         if(!this._emptyImageData){
            var emptyCanvasObj = document.createElement('canvas');
            emptyCanvasObj.style.width=this._sigCanvasWidth+'px';
            emptyCanvasObj.style.height=this._sigCanvasHeight+'px';
            emptyCanvasObj.width=this._sigCanvasWidth;
            emptyCanvasObj.height=this._sigCanvasHeight;
            var ctx = emptyCanvasObj.getContext('2d');
            ctx.fillStyle='#ffffff';
            ctx.clearRect(0,0,this._sigCanvasWidth,this._sigCanvasHeight);
            this._emptyImageData = emptyCanvasObj.toDataURL("image/png");
         }
         return this._emptyImageData;
     },

    getCommitValue: function() {
        return this.options.value
    },

    _saveValue:function(val){
        this.options.value=val;
        this.$userControl.trigger('scribblechange');
    },

    _displayValue:function(val){
        if(this.options.commitProperty) {
            //hardcode the widget VALUE by unknown image type
            if(val){
              var widgetValue = "data:image/png;base64,"+val;
                this._setValue(widgetValue);
            }
        }
        else
            this.logger().debug("xfaView","[DefaultWidget._update], User Control or Commit Property is null" );
    },

    _doOk:function(){
        var mainCanvas = document.createElement('CANVAS');
        var geoCnv = $('#'+this._geoCanvId)[0];
        var sigCnv = $('#iEBox_canvas')[0];
        var ctx = mainCanvas.getContext('2d');
       
        if(geoCnv.width>0&&geoCnv.height>0){
            
            if(this._geoLocAtBottom){
                mainCanvas.width=sigCnv.width;
                mainCanvas.height =sigCnv.height+geoCnv.height;
                ctx.drawImage(sigCnv,0,0);
                ctx.drawImage(geoCnv,0,sigCnv.height);
            } else {
                mainCanvas.width=sigCnv.width+geoCnv.width;
                mainCanvas.height =sigCnv.height;
                ctx.drawImage(sigCnv,0,0);
                ctx.drawImage(geoCnv,sigCnv.width,0);
            }
        } else {
             mainCanvas.width=sigCnv.width;
             mainCanvas.height =sigCnv.height;
             ctx.drawImage(sigCnv,0,0);
        }
        imageEditDialog.hide();
        var newdata = mainCanvas.toDataURL("image/png");//(this.myScribbleHandle||"").toString();
        
         var val,val1;
         if((val=/*=*/this._extractData(newdata))){
         //  val1 = PNGUtil._makeReadOnly(val);
            val = PNGUtil._makeReadOnly(val);
            this._saveValue(val);   
            this._is_readonly=true;       
          }
          this._geoLocQuery&&this._geoLocQuery.cancel();// cancel current geo loc request;
        this.$userControl.trigger("scribbleclose")
    },
    _handleOk:function(){
        if(this._enforceGeoLoc){
           this._geoLocQuery = new GeoLocQuery().init($.proxy(function(data){
               this._geoQuerySuccessHandler(data);
               this._doOk();
           },this),$.proxy(this._geoQueryErrorHandler,this));
           this._geoLocQuery.query();
           this._showMessage(this.localeStrings().fetchGeoLocation);
        } else {
          this._doOk();
        }
    },

    _handleCancel:function(){
         imageEditDialog.hide();
         this._geoLocQuery&&this._geoLocQuery.cancel();// cancel current geo loc request;
        this.$userControl.trigger("scribbleclose")
    },

    _handleClear:function(){
        this.myScribbleHandle.setEnabled(true);
        this._is_readonly=false;
        this._makeReadOnly(this._is_readonly);
        $('#iEBox_canvas')[0].width=this._sigCanvasWidth;
         $('#iEBox_caption').width(this._sigCanvasWidth);
		$('#iEBox_canvas')[0].height=this._sigCanvasHeight;
		var geoCanv = $('#'+this._geoCanvId)[0];
        imageEditDialog.enableButtons({Ok:false,Clear:false});
        geoCanv.width=0;
        geoCanv.height=0;
        imageEditDialog._resize();
        this._geoLocQuery&&this._geoLocQuery.cancel();// cancel current geo loc request;
    },
    _makeReadOnly:function(readonly){
       imageEditDialog.enableButtons({Ok:false,Clear:false,Geo:!readonly,Brush:!readonly});
       if(readonly){
		   $('#iEBox_canvas').css({border:'1px solid gray'});
           $('#iEBox_caption').css({display:'none'});

       }
       this._defaultStatus = "&nbsp;";
       this._showMessage(this._defaultStatus);
    },

    _showMessage:function(msg){
        var _that = this;
        if(this._msgTimeout) { clearTimeout(this._msgTimeout); this._msgTimeout=0; }
         $("#iEBox_title").replaceWith('<div id="iEBox_title">'+msg+'</div>');
         this._msgTimeout = window.setTimeout(function(){
             $("#iEBox_title").replaceWith('<div id="iEBox_title">'+_that._defaultStatus+'</div>');
         },15000);
    },

    _geoQueryErrorHandler:function(err){
        this._showMessage(this.localeStrings().errorFetchGeoLocation);
    },

	_getLogMessage:function(key){
		     return this.logMsgs()[key]||key;
	},

    _handleGeo:function(){
          // initiate geolocation 
       if(navigator.geolocation){
           this._geoLocQuery = new GeoLocQuery().init($.proxy(this._geoQuerySuccessHandler,this),$.proxy(this._geoQueryErrorHandler,this));
           this._geoLocQuery.query();
           this._showMessage(this.localeStrings().fetchGeoLocation);
       } else {
           this.logger().debug("xfaView",this._getLogMessage("ALC-FRM-901-011"));
       }
    },

    // This Function is used to fetch the geolocation.
    calculateGeolocation: function(){
      this._handleGeo();
    },

    _handleBrushSelect:function(w){
        if(this.myScribbleHandle&&!this._is_readonly) {
            this.myScribbleHandle.setLineWidth(w);
        }
    },

    _handleBrush:function(evt){
        imageEditDialog.toggleBrushList(evt);
    },
	_handleKeyDown:function(event){
		if(event.keyCode == ENTER_KEY || event.charCode == ENTER_KEY || event.which == ENTER_KEY) { // touch devices may return charCode
		    event.preventDefault();
		    this._onImageClick(event);
		} else if(event.keyCode == DELETE_KEY || event.charCode == DELETE_KEY || event.which == DELETE_KEY) {
		    this._onCrossClick(event);
		}
    },
    _dialogCallback:function(button_val,arg1){
           // add back on click handler
         //  this.$userControl.click($.proxy(this._onImageClick, this));
                     
           switch(button_val){
               case "Ok":
               this._handleOk();
               break;
               case "Cancel":
               this._handleCancel();
               break;
               case "Clear":
               this._handleClear();
               break;
               case "Geo":
               this.calculateGeolocation();
               break;
               case "BrushSelect":
               this._handleBrushSelect(arg1);
               break;
               case "Brush":
               this._handleBrush(arg1);
               break;
              
           }
    },

    _geoQuerySuccessHandler:function(data){
        this._renderPosition(data);
    },

	_fitGeoLocText:function(latStr,longStr,timeStr,ctx,maxWidth,maxHeight){
	    var fontSize=12;
		ctx.font="bold "+fontSize+"pt Arial";
		var width = Math.max(ctx.measureText(latStr).width,ctx.measureText(longStr).width,ctx.measureText(timeStr).width);
		var lineHeight = ctx.measureText("m").width*1.5;
		while((width>maxWidth||3*lineHeight>maxHeight)&&fontSize>1){
		    fontSize--;
		    ctx.font="bold "+fontSize+"pt Arial";
		    width = Math.max(ctx.measureText(latStr).width,ctx.measureText(longStr).width,ctx.measureText(timeStr).width);
		    lineHeight = ctx.measureText("m").width*1.5;
		}
		return {width:width,lineHeight:lineHeight,fontSize:fontSize};
	},

    _renderPosition:function(position){
        if(position&&position.coords){
         this._showMessage("&nbsp;");
            var latStr = this.localeStrings().latitude+": " + position.coords.latitude;
            var longStr = this.localeStrings().longitude+": " + position.coords.longitude;
            var dateObj = new Date();
            var tZone = (dateObj.getTimezoneOffset()/60*-1);
            
            var timeStr = this.localeStrings().time+": "+(dateObj.getMonth()+1)+"/"+dateObj.getDate()+"/"+dateObj.getFullYear()+" "+dateObj.getHours()+":"+dateObj.getMinutes()+":"+dateObj.getSeconds()+((tZone>0)?" +":" ")+(tZone);
            var canvasObj  = $('#'+this._geoCanvId)[0];
			var sigCanvas = $('#iEBox_canvas')[0];
			var dummyCanvas = document.createElement('canvas');
            if(canvasObj){
			   var ctx = canvasObj.getContext('2d');
			   ctx.font="bold 12pt Arial";

			   canvasObj.width=this._geoCanvasWidth;
               canvasObj.height=this._geoCanvasHeight;
			   var layout = this._fitGeoLocText(latStr,longStr,timeStr,ctx,canvasObj.width,canvasObj.height);
               var aspectRatio ;
     		   aspectRatio = this.aspectRatioToBeUsed();
			   if(!this._enforceGeoLoc){
			       if(this._geoLocAtBottom){
                     dummyCanvas.height = this._sigCanvasHeight-canvasObj.height;
                     dummyCanvas.width = dummyCanvas.height/aspectRatio;
                   } else {
                     dummyCanvas.width = this._sigCanvasWidth-canvasObj.width;
					 dummyCanvas.height = dummyCanvas.width*aspectRatio;
				   }
				   // move drawn signature to a temporary canvas and scale it to new dimension
                   dummyCanvas.getContext('2d').drawImage(sigCanvas,0,0,dummyCanvas.width,dummyCanvas.height);
                   if(this._geoLocAtBottom){
                     sigCanvas.height = dummyCanvas.height;
                     sigCanvas.getContext('2d').drawImage(dummyCanvas,(sigCanvas.width-dummyCanvas.width)/2,0);
                   } else {
                     sigCanvas.width = dummyCanvas.width;
                     sigCanvas.getContext('2d').drawImage(dummyCanvas,0,(sigCanvas.height-dummyCanvas.height)/2);
                   }
                   $('#iEBox_caption').width(sigCanvas.width);
				   imageEditDialog.enableButtons({Clear:true});
			   }
			      
			   var fwidth = layout.width;
               var fheight = layout.lineHeight;
			   var bottomMargin=2;
               ctx.fillStyle='#555555';
               ctx.font="bold "+layout.fontSize+"pt Arial";
               ctx.fillText(latStr,0,canvasObj.height-2*fheight-bottomMargin);
               ctx.fillText(longStr,0,canvasObj.height-fheight-bottomMargin);
               ctx.fillText(timeStr,0,canvasObj.height-bottomMargin);
			   
			   imageEditDialog._resize();
            }
        }
    },
    _scribbleCallback:function(){
       imageEditDialog.enableButtons({Clear:true,Ok:true});  //  enable clear and ok buttons
    },
    _onImageClick:function(){
       if(!imageEditDialog.getIsOpen()){
           var _that = this;
           imageEditDialog.show("&nbsp;",$.proxy(this._dialogCallback, this));
           if(!this._enforceGeoLoc){
               $('#iEBox_Geo').css({display:'inline-block'});
           }
           var image = new Image();
           image.onload=function(){
               _that.myScribbleHandle = new Scribble("iEBox_canvas",image,image.width,image.height,$.proxy(_that._scribbleCallback,_that));
               _that.myScribbleHandle.setEnabled(!_that._is_readonly);
               $('#iEBox_caption').width(image.width);
               $('#iEBox_container').css({display:'table'});
               imageEditDialog._resize();
               imageEditDialog._reposition();      // recalculate position, so that the values are updated, esp. in iPad
           }
           if(!this.options.value||this.options.value==this._emptyImageVal){
               this._is_readonly=false;
               this.$userControl.addClass("emptyScribble");
               image.src = this._createEmptyImageData();
           } else {
               this.$userControl.removeClass("emptyScribble");
               if(PNGUtil._isPng(this.options.value)){
                   this._is_readonly = !!PNGUtil._isReadOnly(this.options.value);
			       image.src = "data:image/png;base64,"+this.options.value;//this.createBl _that.$userControl.attr(_that.options.commitProperty);
               } else {
                   image.src = "data:;base64," + this.options.value;//this.createBl _that.$userControl.attr(_that.options.commitProperty);
		       }
           }
           this._makeReadOnly(this._is_readonly);
       }
    },

    _extractData:function(datauri){
        var idx;
        if(datauri!=null&&datauri.length>0&&datauri.indexOf("data:")==0){
            if((idx=datauri.indexOf(","))>0){
                return datauri.substr(idx+1);
            }
        }
    },

    _setValue:function(val){
        this.$userControl.prop(this.options.commitProperty, val);
        this.$userControl.attr(this.options.commitProperty, val);
        if(this._dummyImg){
            this._dummyImg.setAttribute(this.options.commitProperty,val);
        }
    }
});
 //hack for IOS5 touch bug
  $(function(){
         $('body').bind('touchstart', function(e) {});
  });
  
})($,xfalib);
(function ($, window) {

    var _defaults = {
        placeHolderText : "Enter comments here"
    };

    var AdobeFileAttachment = function (element, options) {
        this.options = options;
        this.$elementFileUploadBtn = [];
        this.$elementFileList = [];
        this.$element = $(element);
        this.$parent = this.$element.parent();
    };

    var isBrowserIE9OrIE10 = ($.browser.msie && ($.browser.version === '9.0' || $.browser.version === '10.0')),
        fileLabelsCount = 0;


    AdobeFileAttachment.prototype = {
        _fileIframeName : "guide-fu-iframe",
        _addFile : "Add File",

        clear: function () {
            this.$element.val('');
            this.$elementFileList.empty();
        },

        destroy: function () {
            this.$fileDomElements = $.map(this.$fileDomElements, function(item){
                // since item can be null or object, doing this check
                if(_.isObject(item) && item.val().length === 0) {
                    //TODO: remove item from dom, since there is a memory leak
                    return item;
                }
            });
            this.values = [];
            if(isBrowserIE9OrIE10){
                if(_.last(this.$fileDomElements) == null){
                    this.cloneFileInputAndUpdateIdForIE9();
                } else {
                    this.updateLabelForAttr(_.last(this.$fileDomElements).attr("id"));
                }
            }
            this.$element.trigger("change.fileupload");
        },

        _setUrl : function(url, index){
            this.$elementFileList.find("span.guide-fu-fileName").eq(index).data("key", url);
        },

        _getUrl : function(index) {
            return this.$elementFileList.find("span.guide-fu-fileName").eq(index).data("key");
        },
        getSetFilePathAndReturnNamePathMap: function(valueList) {

            var mapOfObjectsHavingTempPathAndFileNames = {},
                $temp,
                tempPath;

            $.each(this.$elementFileList.children(), function ( index, childLiElement) {
                $temp = $(childLiElement).find("span.guide-fu-fileName");
                tempPath = $temp.data("key");
                if(!tempPath && valueList && valueList[index]) {
                    $temp.data("key", valueList[index]);
                }
                mapOfObjectsHavingTempPathAndFileNames[$temp.html()] = tempPath || $temp.data("key");
            });
            return mapOfObjectsHavingTempPathAndFileNames;
        },


        value : function(value) {
            if(!_.isUndefined(value)) {
                var _self = this,
                    comments = this.comment(),
                    isChange = false,
                    oldUrls = {};
                // Cache the url before deletion
                this.$elementFileList.children().find("span.guide-fu-fileName").each(function(){
                    var url = $(this).data("key");
                    if(!_.isUndefined(url)){
                        var fileName = url.substring(url.lastIndexOf("/") + 1);
                        oldUrls[fileName] = url;
                    }
                });
                this.$elementFileList.empty();
                if(value != null) {
                    var arr = value.split("\n");
                    // Update the value array with the file
                    this.values = _.map(arr, function(fileName, index){
                        // Check if file Name is a path, if yes get the last part after "/"
                        var slash = fileName.lastIndexOf("/"),
                            fileUrl = fileName,
                            fileUploadUrl = null;
                        if(slash !== -1) {
                            // Store the cached url here
                            fileUrl = fileUploadUrl = fileName;
                            fileName = fileName.substring(slash + 1);
                            // case: when you click on save second time
                            if((_.isObject(_self.$fileDomElements[index]) && _self.$fileDomElements[index].val().length > 0) || _.isString(_self.$fileDomElements[index])){
                                isChange = true;
                                _self.$fileDomElements[index] = null;
                            } else if(_self.$fileDomElements[index] !== null) { // create a dummy file dom for the cached value
                                 isChange = true;
                                _self.$fileDomElements.splice(index, 0, null);
                            }
                        } else if (oldUrls[fileName]) {
                            fileUploadUrl = oldUrls[fileName];
                        }
                        _self.showFileList(fileName, comments[index], fileUploadUrl);
                        return fileUrl;
                    });
                    if(isChange){
                        this.$element.trigger("change.fileupload");
                    }
                } else {
                    if(_.isArray(this.values) && this.values.length !== 0){
                        this.destroy();
                    }
                }
            }
            else {
                return this.values;
            }
        },

        fileAttachment: function(){
            return this.values;
        },

        comment : function(value){
            var _self = this,
                $elem = null,
                comments;
            if (!_.isUndefined(value)) {
                if(value != null) {
                    comments = value.split("\n");
                    $elem = this.$elementFileList.find('div.guide-fu-comment');
                    $elem.each(function(index){
                        $(this).text(comments[index]);
                    });
                }
            }
            else {
                $elem = this.$elementFileList.find('div.guide-fu-comment');
                comments = [];
                $elem.each(function(){
                    comments.push($(this).text());
                });
                return comments;
            }
        },

        multiSelect : function(value){
            if(value !== undefined)
                this.options.multiSelect = value;
            else
                return this.options.multiSelect;
        },

        fileSizeLimit : function(value){
            if(value !== undefined)
                this.options.fileSizeLimit = value;
            else
                return this.options.fileSizeLimit;
        },

        access : function(value){
            if(value == "readOnly") {
                this.$element.attr("disabled", "disabled");
                //for readOnly hide the delete icon in file list
                $(this.$parent).addClass('guide-fu-disabled');
            }
            else if(value == "open") {
                this.$element.removeAttr("disabled");
                $(this.$parent).removeClass('guide-fu-disabled');
            }
        },

        fileList : function(value) {
            var filtered,
                _self = this;
            if(value !== undefined){
                this.$fileDomElements = [];
                _.each(value, function(item, index){
                    if((_.isObject(item) && (isBrowserIE9OrIE10 || item.val().length > 0)) || (_.isString(item))){
                         // check if index is within the length
                         // this is written for delete case
                         // if item is a string, then it should be set null
                         if(_.isString(item)){
                             item = null;
                         }
                         _self.$fileDomElements[index] = item;
                    }
                });
                filtered = this.$fileDomElements;
                // In case of IE9, get the last element of fileDom and update the id for label
                if(isBrowserIE9OrIE10 && value !== null){
                    // Case: if it is single select, and then we do a restore and then after attaching another file we click save
                    if(_.last(this.$fileDomElements) == null){
                        this.cloneFileInputAndUpdateIdForIE9();
                    } else {
                        this.updateLabelForAttr(_.last(this.$fileDomElements).attr("id"));
                    }
                }
            }
            else {
                // here filtered is a new array
                // A new array is returned over here so that the user of this API doesn't try to change the widget array directly
                filtered = $.map(this.$fileDomElements, function(item, index){
                    if(!item) {
                        return _self._getUrl(index);
                    } else if((item[0].files && item[0].files.length !== 0)
                            || (_self.options.multiSelect || item[0].value.length > 0)) {
                        return item;
                    }
                });
            }
            return filtered;
        },

        // file preview html
        fileItemPreview: function(){
            return $("<span></span>").addClass("guide-fu-filePreview glyphicon glyphicon-ok");
        },

        // force flag indicates that forcefully set the dom but don't update the options
        buttonText: function (value, force) {
            if (value !== undefined) {
                if(!force)
                    this.options.buttonText = value;
                this.$elementFileUploadBtn.find('span.guide-fu-label').html(value);
            } else {
                return this.options.buttonText;
            }
        },

        // To change the icon of the button, the user should customize the class
        btnIcon: function () {
            return $("<span></span>").addClass("guide-fu-icon glyphicon glyphicon-folder-open");
        },

        btnLabel: function(){
            return $("<span></span>").addClass("guide-fu-label").html(this.options.buttonText);
        },

        fileItemList: function(){
            return this.$parent.find(this.options.fileItemListClass);
        },

        getNewCommentElementSummary : function(text){
            return $("<div title='Click to edit' tabindex='0'></p>").addClass("guide-fu-comment").text(text || _defaults.placeHolderText);
        },

        getNewCommentElement : function(text){
            return $("<div contenteditable='true' tabindex='0'></div>").addClass("guide-fu-comment").text(text || "");
        },

        fileItem: function(fileName, comment, fileUrl){
            var $fileItem = $("<li></li>").addClass("guide-fu-fileItem");
            var nameWithoutMarker = xfalib.ut.Utilities._getNameWithoutMarker(fileName);
            var $elem = $("<span tabindex='0'></span>").addClass("guide-fu-fileName").attr("aria-label", nameWithoutMarker).text(nameWithoutMarker).appendTo($fileItem).keypress(function(e) {
                if (e.keyCode === 13 || e.charCode === 32) {
                    $(e.target).click();
                }
            }).click($.proxy(this.handleFilePreview, this));
            if(this.options.disablePreview) {
               $elem.addClass('non-preview-fileName');
            }
            if(fileUrl != null){
                $elem.attr("data-key", fileUrl);
            }
            $("<span tabindex='0'></span>").addClass("guide-fu-fileClose close").attr("role", "button").attr("aria-label", xfalib.locale.Strings.FileCloseAccessText + nameWithoutMarker).text("x").appendTo($fileItem).keypress(function(e) {
                if (e.keyCode === 13 || e.charCode === 32) {
                    $(e.target).click();
                }
            })
                .click($.proxy(this.handleClick, this));

            this.fileItemPreview().appendTo($fileItem);

            if(this.options.showComment){
                this.getNewCommentElementSummary(comment).appendTo($fileItem).focus($.proxy(this.handleCommentClick, this)).click($.proxy(this.handleCommentClick, this));
            }
            return $fileItem;
        },

        toggleFileUploadBtn: function(){
            if(this.options.multiSelect) {
                // Change the look of file upload button
                if(this.$elementFileList.children().length > 0){
                    // Change the text
                    this.buttonText(this._addFile, true);
                    // Change the icon too
                    this.$elementFileUploadBtn.find('span.guide-fu-icon').removeClass("glyphicon-folder-open").addClass("glyphicon-plus");
                } else {
                    this.buttonText(this.options.buttonText);
                    this.$elementFileUploadBtn.find('span.guide-fu-icon').removeClass("glyphicon-plus").addClass("glyphicon-folder-open");
                }
            }
        },

        showInvalidSize: function(fileName){
            var that = this;
            var IS_IPAD = navigator.userAgent.match(/iPad/i) !== null,
                IS_IPHONE = (navigator.userAgent.match(/iPhone/i) !== null);
            if(IS_IPAD || IS_IPHONE){
                setTimeout(function() {
                  that.invalidMessage(that,fileName);
                }, 0);
            }
            else {
               this.invalidMessage(this,fileName);
            }
        },

        invalidMessage: function(refObj,fileName){
           alert(xfalib.ut.LocalizationUtil.prototype.getLocalizedMessage("",xfalib.locale.Strings["FileSizeGreater"] ,[fileName , refObj.options.fileSizeLimit]));
        },

        /***
         * Finds the value in the array, if the value is a url then it uses the filename in the url to search for the text
         * This is done since our model stores the URL too in case of draft restore or clicking on save in guide
         * @param text          string representing the text of which the index is to be found
         * @param $elem         reference to the jquery element. This is used if there are duplicate file names present in the file upload.
         * @returns {number}
         * @private
         */
        _getIndexOfText : function(text, $elem){
            var index = -1,
                self = this,
                isDuplicatePresent = false;
            _.find(this.values, function(value, iter){
                // if value is a url, then compare with last
                var tempValue = value;
                if(tempValue.match(/\//g) && tempValue.match(/\//g).length > 1){
                    tempValue =  value.substring(value.lastIndexOf("/")+1);
                    tempValue = xfalib.ut.Utilities._getNameWithoutMarker(tempValue);
                }
                if(tempValue === text){
                    index = iter;
                    isDuplicatePresent = self.values.indexOf(value, index + 1) !== -1;
                    if($elem && isDuplicatePresent){
                        // now check if duplicate present and get its correct index
                        // today all files are wrapped under .guide-fu-fileItem node
                        index = $elem.closest(".guide-fu-fileItem").index();
                    }
                    // check if there is a duplicate
                    // this is to just break the loop
                    return value;
                }
            });
            return index;
        },


        /**
         * This event listener gets called on click of close button in file upload
         *
         * @param event
         */
        handleClick: function(event){

            var $elem = $(event.target),
                text = $elem.prev().text(),
                index = this._getIndexOfText(text, $elem),
                url = $elem.prev().data("key"),
                objectUrl = $elem.prev().data("objectUrl")
            if (index != -1) {
                this.values.splice(index, 1);
                this.$fileDomElements.splice(index, 1);
                if (isBrowserIE9OrIE10) {
                    this.cloneFileInputAndUpdateIdForIE9();
                }
                if (url != null) {
                    // remove the data so that others don't use this url
                    $elem.prev().removeData("key");
                }
                if(objectUrl) {
                    // revoke the object URL to avoid memory leaks in browser
                    // since file is anyways getting deleted, remove the object URL's too
                    window.URL.revokeObjectURL(objectUrl);
                }
            }
            // Remove the dom from view
            //All bound events and jQuery data associated with the element are also removed
            $elem.parent().remove();
            // trigger the change event to update the value
            this.$element.trigger("change.fileupload");
            // Set the focus on file upload button after click of close
            this.$elementFileUploadBtn.focus();

        },

        _previewFileUsingObjectUrl : function(input) {
            if (input[0].files && input[0].files[0]) {
                var url = window.URL.createObjectURL(input[0].files[0]);
                window.open(url,'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');
                return url;
            }
        },

        // this function maintains a map for
        handleFilePreview: function(event){
            if(!this.options.disablePreview) {
                var $elem = $(event.target),
                    text = $elem.text(),
                    index = this._getIndexOfText(text, $elem),
                    fileDom = null,
                    fileName = null,
                    fileUrl = null,
                    timeStamp = new Date().getTime();

                // for draft usecase, if text contains "/" in it, it means the file is already uploaded
                // text should contain the path, assuming that the fileUrl is stored in data element

                if(index != -1){
                    // Store the url of file as data
                    if(!_.isUndefined($elem.data("key")))
                        fileUrl = $elem.data("key");

                    if(fileUrl)  {
                        //prepend context path if not already appended
                        if (!(fileUrl.lastIndexOf(this.options._getUrl, 0) === 0)) {
                            fileUrl =  this.options._getUrl + fileUrl;
                        }
                        this.previewFile.apply(this, [null, {"fileUrl" : fileUrl}]);
                    } else {
                        fileDom = this.$fileDomElements[index];
                        var objectUrl = this._previewFileUsingObjectUrl(fileDom);
                        if (objectUrl) {
                            $elem.data("objectUrl", objectUrl);
                        }
                    }
                }
            }
        },

        previewFile: function(event){
            var url = null;
            if(_.isUndefined(arguments[1]))
                url = this.$element[this.options.uploaderPluginName]("getFileUrl");
            else
                url = arguments[1].fileUrl;
            var lastIndex = url.lastIndexOf('/');
            //to make sure url has a slash '/'
            if(lastIndex >= 0) {
                //encode the filename after last slash to ensure the handling of special characters
                url = url.substr(0, lastIndex) +'/'+ encodeURIComponent(url.substr(lastIndex + 1));
            }
            window.open(url,'','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');
        },

        resetIfNotMultiSelect: function(){
            if(!this.options.multiSelect){
                // Reset the value and file array
                this.values = [];
                //this.comments = [];
            }
        },

        showFileList: function(fileName, comment, fileUrl){
            if(!this.options.multiSelect || fileName == null || _.isUndefined(fileName)) {
                // if not multiselect, remove all the children of file list
                this.$elementFileList.empty();
            }

            // Add the file item
            // On click of close, remove the element and update the model
            // handle on click of preview button
            if(fileName != null) {
                this.$fileItem = this.$elementFileList.append(this.fileItem(fileName, comment, fileUrl));
            }
        },

        /**
         * Handles the click on comment field
         *
         * TODO: Implement show/hide behaviour instead of replaceWith
         * This may be cause problem during bubble up of event
         *
         * @param event
         */
        handleCommentClick : function(event){
            var $commentElem = null,
                $elem = $(event.target);
            if ($elem.text() === _defaults.placeHolderText) {
                $commentElem = this.getNewCommentElement()
            } else {
                $commentElem = this.getNewCommentElement($(event.target).text());
            }
            $elem.replaceWith($commentElem);
            // register the event again
            if(isBrowserIE9OrIE10){
                $commentElem.focus().focusout($.proxy(this.handleCommentBlur, this));
            } else {
                $commentElem.focus().blur($.proxy(this.handleCommentBlur, this));
            }
        },

        handleCommentBlur : function(event){
            var $commentSummaryElem = null,
                $elem = $(event.target);
            if ($elem.text() === _defaults.placeHolderText) {
                $commentSummaryElem = this.getNewCommentElementSummary();
            } else {
                $commentSummaryElem = this.getNewCommentElementSummary($(event.target).text());
            }
            $elem.replaceWith($commentSummaryElem);
            $commentSummaryElem.focus($.proxy(this.handleCommentClick,this)).click($.proxy(this.handleCommentClick,this));
            // Add a div with the html
            this.$element.trigger("change.fileupload");
        },

        handleChange: function (evnt) {
            var currFileName = '',
                fileNames = '',
                $elem = $(evnt.target),
                files = $elem[0].files;
            // Initially set the invalid flag to false
            this.isInvalid = false;
            this.resetIfNotMultiSelect();
            // Iterate through all the files
            if(isBrowserIE9OrIE10) { // IE9 doesn't support FileList, hence files variable is undefined
                currFileName = $elem.val().split("\\").pop();
                //update the last element of array
                if(this.$fileDomElements.length > 0){
                    this.$fileDomElements[this.$fileDomElements.length - 1] = $elem;
                }
                this.cloneFileInputAndUpdateIdForIE9();

                // In case of IE9, only do this
                if(_.isUndefined(files)){
                    this.showFileList(currFileName);
                    this.values.push(currFileName);
                    // trigger the change event to update the value
                    this.$element.trigger("change.fileupload");
                }
            }
            if(!_.isUndefined(files)) {
                _.each(files, function (file) {
                    currFileName = file.name.split("\\").pop();
                    // Now size is in MB
                    var size = file.size / 1024 / 1024;
                    // set the invalidsize flag
                    if ((size > parseFloat(this.options.fileSizeLimit))) {
                        this.isInvalid = true;
                        fileNames = currFileName + "," + fileNames;
                    }

                    // if the file is not invalid, show it and push it to internal array
                    if (!this.isInvalid) {
                        this.showFileList(currFileName);
                        this.values.push(currFileName);
                    } else {
                        // Remove the last element from the array
                        this.$fileDomElements.splice(-1, 1);
                        // in case of IE10, create one extra element
                        if(isBrowserIE9OrIE10){
                            this.cloneFileInputAndUpdateIdForIE9();
                        }
                    }

                    // trigger the change event to update the value
                    this.$element.trigger("change.fileupload");
                }, this);
            }

            if(this.isInvalid) {
                this.showInvalidSize(fileNames.substring(0, fileNames.lastIndexOf(',')));
            }
        },

        cloneFileInputAndUpdateIdForIE9 : function(){
            var elem = _.last(this.$fileDomElements),
                elemExists = elem != null,
                elemHasValue = elemExists && elem.val().length > 0,
                elemId = null,
                selector = null;
            // the user has clicked on cancel on the browse dialog and clone only if not multiSelect
            if(!elemExists || (elemHasValue && this.options.multiSelect)) {
                elem = this.$element.clone();
                // copy the data attributes
                elem.data(this.$element.data());
                if(isBrowserIE9OrIE10){
                    elemId = this.$element.attr("id") + (++fileLabelsCount);
                    elem.attr("id", elemId);
                    elem.css({
                        'position' : 'absolute',
                        'top' : '-2000px',
                        'left': '-2000px'
                    });
                    elem.appendTo('body');
                    this.updateLabelForAttr(elemId);
                }
                elem.change($.proxy(this.handleChange, this));
                this.$fileDomElements.push(elem);
            }
            // Case: if it is not multiselect and if the first file dom element is null
            // this case would hit when we restore a single select file attachment and attach a new file
            if(!this.options.multiSelect && this.$fileDomElements[0] === null){
                //Splice null out of it, since we are attaching a new file
                this.$fileDomElements.splice(0, 1);
            }
            // if the browser is not IE9, then click it
            if(!isBrowserIE9OrIE10) {
                elem.click();
            }
            return true;
        },

        /**
         * In case of IE9, get the last element of fileDom and update the id for label
         *
         * @param fileInputId
         */
        updateLabelForAttr : function(fileInputId){
            this.$label.attr("for" , fileInputId);
        },

        createLabelForFileInput : function (fileInputId){
            if(isBrowserIE9OrIE10) {
                this.$label = $("<label></label>").addClass("guide-fu-attach-button button")
                        .text(this.options.buttonText)
                        .attr('for',fileInputId);
                this.$elementFileUploadBtn.replaceWith(this.$label);
                this.$label.parent().attr("tabindex", 0).attr("role", "button").attr("aria-label", this.options.screenReaderText || "");
            }
        },


        constructor: function () {
            // Initialize the self instance
            var _self = this,
                isFirst = true;
            //jquery instance of file upload button
            this.$elementFileUploadBtn = this.$parent.find(this.options.buttonClass);
            this.$elementFileUploadBtn.attr("aria-label", this.options.screenReaderText || "");
            if(isBrowserIE9OrIE10){
                this.elementId = this.$element.attr("id");
                this.createLabelForFileInput(this.$element.attr("id"));
            }

            // html for file list
            this.$elementFileList = $(this.fileItemList());
            // Initialize the value and file(Refer FileList class mdn)
            this.values = [];
            // List of dom elements of input type file
            this.$fileDomElements = [];

            var flag = false,
                $currElem = null;

            $(document).mousedown(function(e) {
                $currElem = $(e.target);
            });
            // Enter key should result in click of button
            this.$elementFileUploadBtn
                .focus(function(){
                    _self.$element.trigger("focus.fileupload");
                })
                .click($.proxy(this.cloneFileInputAndUpdateIdForIE9, this))
                .blur(function(event){
                    // Check if the currElem does not belong to the fileItemList
                    if(!flag && $currElem!= null && $currElem.closest(".guide-fu-fileItemList").length <=0){
                        _self.$element.trigger("focusout.fileupload");
                    }
                    flag = false;
                });
            //Initialize the filePreview Plugin
            this.$element[this.options.uploaderPluginName]({
                iframeContainer: this.options.iframeContainer,
                _filePath: this.options._filePath,
                _uuidGenerator: this.options._uuidGenerator,
                _getUrl: this.options._getUrl

            });
            // Getting input file value
            // listening on fileuploaded event
            this.$element.change($.proxy(this.handleChange, this))
                .on("adobeFileUploader.fileUploaded", $.proxy(this.previewFile, this));
        }
    };

    $.fn.adobeFileAttachment = function (option, value) {
        var get = '',
            element = this.each(function () {
                // in case of input type file
                if ($(this).attr('type') === 'file') {
                    var $this = $(this),
                        data = $this.data('adobeFileAttachment'),
                        options = $.extend({}, AdobeFileAttachment.prototype.defaults, typeof option === 'object' && option);

                    // Save the adobeFileAttachment data in jquery
                    if (!data) {
                        $this.data('adobeFileAttachment', (data = new AdobeFileAttachment(this, options)));
                        data.constructor();
                    }

                    // code to get and set an option
                    if (typeof option === 'string') {
                        get = data[option](value);
                    }
                }
            });

        if (typeof get !== 'undefined') {
            return get;
        } else {
            return element;
        }
    };

    // fileSizeLimit is in MB, default value is 2MB
    AdobeFileAttachment.prototype.defaults = {
        'buttonText': 'Attach',
        'multiSelect': false,
        'fileSizeLimit': 2,
        'uploaderPluginName': "adobeFileUploader"

    };

})($, window);
(function($) {
    var xfaUtil = xfalib.ut.XfaUtil.prototype;
    $.widget( "xfaWidget.fileUpload", $.xfaWidget.abstractWidget, {

        _widgetName:"fileUpload",
        _superPrototype : $.xfaWidget.abstractWidget.prototype,
        getOptionsMap: function(){
            var parentOptionsMap = this._superPrototype.getOptionsMap.apply(this,arguments),
                newMap = $.extend({},parentOptionsMap, $.extend({}, this.options, {
                    "value" : function(value) {
                        this.$userControl.adobeFileAttachment("value", value);
                    },
                    "fileList": function(value){
                        this.$userControl.adobeFileAttachment("fileList", value);
                    },
                    "comment" : function(value){
                        this.$userControl.adobeFileAttachment("comment", value);
                    },
                    // "access" can be either open or readonly
                    "access" : function(value){
                        this.$userControl.adobeFileAttachment("access", value);
                    }

                }));

            return newMap;

        },
        // TODO: Will need to remove this functions
        //  will be tracked by LC-391200

        _initializeOptions: function () {
            _.each(this.optionsHandler, function (value, key) {
                // overriding the behaviour of _initializeOptions
                // only for _uuidGenerator
                // as we font want getUUID to be called at render time
                if (typeof value === "function" && key !== '_uuidGenerator' ) {
                        value.apply(this, [this.options[key]])
                }
            }, this)
        },

        _getFileList: function(){
            return this.$userControl.adobeFileAttachment("fileList");
        },

        _getComment: function(){
            return this.$userControl.adobeFileAttachment("comment");
        },
        _getFileNamePathMap: function (pathList) {
            return this.$userControl.adobeFileAttachment("getSetFilePathAndReturnNamePathMap", pathList);
        },
        getEventMap: function() {
            var parentEventMap = this._superPrototype.getEventMap.apply(this, arguments),
                newMap = $.extend({}, parentEventMap,
                    {
                        "change" : null,
                        "focusout.fileupload" : xfaUtil.XFA_EXIT_EVENT,
                        "focus.fileupload" : xfaUtil.XFA_ENTER_EVENT,
                        "change.fileupload" : xfaUtil.XFA_CHANGE_EVENT
                    });
            return newMap;
        },
        render: function() {
            var $el = this._superPrototype.render.apply(this,arguments);
            $el.adobeFileAttachment(this.getOptionsMap());
            return $el;
        },
        showDisplayValue: function() {
             //since value can't be set in file element input, leaving this fn empty
        },
        showValue: function() {
            //since value can't be set in file element input, leaving this fn empty
        },
        getCommitValue: function() {
            this.options.fileList = this._getFileList();
            this.options.comment = this._getComment();
            return this.$userControl.adobeFileAttachment("value");
        }
    });
})($);

/**
 * Adobe FilePreview Widget Plugin
 *
 * Options expected by file preview is the url
 *
 * Options Required Are:
 *
 *  iframeName: Name of the Iframe
 *  iframeContainer: Container of the iframe(eg Body)
 *  fileUploadPath: Path where the file is to be uploaded
 *  fileUploadServlet: Servlet where the file is to be uploaded
 *
 */
(function ($) {

    var AdobeFileUploader = function (element, options) {
        this.options = options;
        this.$element = $(element);
    };

    AdobeFileUploader.prototype = {

        _fileIframeName: "guide-fu-iframe",

        _filePath: "/tmp/fd/mf",

        _iframeContainer: "body#formBody",


        fileIframe: function (name) {
            return $("<iframe></iframe>").attr({
                style: "display:none",
                name: name
            });
        },

        uploadFile: function (fileObject) {
            var multiple = false,
                fileName = null,
                actionUrl = null,
                fileUploadPath = fileObject.fileUploadPath,
                uuid;

            if (!fileUploadPath) {
                uuid = fileObject._uuidGenerator();
            }

            // if uuid exists only then upload the file in the current  instance
            if (_.isObject(fileObject) && (fileUploadPath || uuid)) {
                var fileDom = fileObject.fileDom,
                    $form = $(this.options.iframeContainer).find(".filePreview");
                fileName = fileObject.fileName;
                multiple = fileObject.multiple;
                if(!fileUploadPath) {
                    fileUploadPath = this.options.fileUploadPath + "/" + uuid;
                }
                if (fileDom !== null) {
                    //prepend contextpath
                    actionUrl = fileObject._getUrl + fileUploadPath;
                    if (!multiple) {
                        if (!(fileUploadPath.lastIndexOf(fileObject._getUrl, 0) === 0)) {
                            this.fileUrl = fileObject._getUrl + fileUploadPath + "/" + fileName;
                        } else {
                            this.fileUrl = fileUploadPath + "/" + fileName;
                        }
                    } else {
                        this.fileUrl = actionUrl;
                    }
                    // done to solve issue LC-5835
                    if($form.length === 0) {
                        $form = $("<form method='post' enctype='multipart/form-data'/>")
                            .addClass("filePreview")
                            // create id so that it does not intercept with other forms in the page
                            .attr({
                                id : "form" + new Date().valueOf(),
                                action : actionUrl,
                                target : this.options.iframeName
                            })
                            .appendTo(this.options.iframeContainer);
                    } else {
                        /// first empty all children, using detach so that data is not clear
                        $form.children().detach();
                        // now update the new attributes
                        $form.attr({
                            action : actionUrl,
                            target : this.options.iframeName
                        });
                    }
                    // this is done so that the other events attached at some other level in DOM Tree don't interfere
                    $form.one("submit", function(evnt){
                        evnt.stopPropagation();
                    });

                     var data = new FormData();

                    if (multiple) {
                        _.each(fileDom, function (fileDomElement, index) {
                            if(fileDomElement !== null) {
                                $(fileDomElement[0]).attr('name', fileName[index]).appendTo($form);
                            }
                            data.append(fileName[index], fileDomElement[0].files[0]);
                        }, this);
                    } else {
                        fileDom.attr('name', fileName).appendTo($form);
                        data.append(fileName, fileDom[0].files[0]);
                    }

                    /* UseCase: Suppose the fileName is in other language, on click of fileName, it tries to upload the file
                     so that it could be preview, this change would ensure that the file is properly previewed supporting
                     the given UTF-8 charset */
                    $("<input type='hidden' name='_charset_' value='UTF-8'/>").appendTo($form);
                    data.append("_charset_", "UTF-8");
                    if (!multiple) {
                        this.fileMap[this.fileUrl] = this.$element;
                    }
                    var self = this;
                    $.ajax({
                        url: $form.attr("action"),
                        data: data,
                        cache: false,
                        contentType: false,
                        processData: false,
                        method: 'POST',
                        type: 'POST',
                        success: function(data){
                            if (!multiple) {
                                self.handleSingleFileUpload(data);
                            } else {
                                self.handleMultipleFileUpload(data);
                            }
                        },
                        error: function() {
                            this.$element.trigger("adobeFileUploader.fileUploadFailed");
                        }
                    });
                }
            }
            return this.fileUrl;
        },

        handleMultipleFileUpload: function (data) {
            this.$element.trigger("adobeFileUploader.multipleFileUploaded");
        },

        getFileUrl: function () {
            return this.fileUrl;
        },

        getUrlContentsFromUploadData: function (data) {
            var temp;
            if(data != null) {
                temp = $(data).find("#ChangeLog").text().split("br", 2)[1];
            } else {
                var selector = this.options.iframeContainer + " iframe[name='" + this.options.iframeName + "']";
                temp = $(selector).contents().find("#ChangeLog").text().split("br", 2)[1];
            }
            
            temp = temp.substring(temp.indexOf("created") + 9, temp.indexOf(";<"));
            temp = temp.substring(0, temp.length - 2);
            var index = temp.indexOf("/jcr:content");
            if (index !== -1)
                temp = temp.substring(0, index);
            return temp;
        },

        handleSingleFileUpload: function (data) {
            var url = this.getUrlContentsFromUploadData(data);

            //prepend context path
            url = this.options._getUrl + url;
            if (url in this.fileMap) {
                this.fileMap[url].trigger("adobeFileUploader.fileUploaded");
            }
        },

        initialize: function () {
            // Put iframe inside the iframe container
            // On the load of iframe, display the contents of file
            // since there is only one iframe for all the file attachments, there may be race condition
            if (this.$iframe == null || this.$iframe.length === 0) {
                this.$iframe = this.fileIframe(this.options.iframeName).appendTo(this.options.iframeContainer);
                // since there is only iframe for the preview of all file attachments
                // this map is added in the closure scope
                // map contains the url(key) vs fileDomElement(value)
                // it helps avoids the race condition
                this.fileMap = {};
            }
        }
    };

    $.fn.adobeFileUploader = function (option, value) {
        var get = '',
            element = this.each(function () {
                // in case of input type file
                if ($(this).attr('type') === 'file') {
                    var $this = $(this),
                        data = $this.data('adobeFileUploader'),
                        options = $.extend({}, AdobeFileUploader.prototype.defaults(option, value), typeof option === 'object' && option);

                    // Save the adobeFileAttachment data in jquery
                    if (!data) {
                        $this.data('adobeFileUploader', (data = new AdobeFileUploader(this, options)));
                        data.initialize();
                    } else {
                        // update elements if not equal, since sometimes one can clone too
                        if(data.$element.get(0) !== this) {
                            data.$element = $(this);
                        }
                    }

                    // code to get and set an option
                    if (typeof option === 'string') {
                        get = data[option](value);
                    }
                }
            });

        if (typeof get !== 'undefined') {
            return get;
        } else {
            return element;
        }
    };


    AdobeFileUploader.prototype.defaults = function (options,value)  {
        var propertyObject = {};
        if(typeof options == 'object') {
            propertyObject._fileIframeName = options._fileIframeName;
            propertyObject._filePath = options._filePath;
            propertyObject.actionUrl = options.actionUrl;
            propertyObject._getUrl = options._getUrl;
        }
        if(typeof  value == 'object') {
            propertyObject._fileIframeName = value._fileIframeName;
            propertyObject._filePath = value._filePath;
            propertyObject.actionUrl = value.actionUrl;
            propertyObject._getUrl = options._getUrl;
        }
        return {
            'fileUploadPath': propertyObject._filePath || AdobeFileUploader.prototype._filePath,
            'iframeName': AdobeFileUploader.prototype._fileIframeName + new Date().valueOf(),
            'fileUploadServlet': propertyObject._filePath || AdobeFileUploader.prototype._filePath,
            'iframeContainer': propertyObject._iframeContainer || AdobeFileUploader.prototype._iframeContainer,
            '_getUrl': propertyObject._getUrl || ""
        };
    };

})($);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/*
 * jQuery Templating Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function( jQuery, undefined ){
    var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

    function newTmplItem( options, parentItem, fn, data ) {
        // Returns a template item data structure for a new rendered instance of a template (a 'template item').
        // The content field is a hierarchical array of strings and nested items (to be
        // removed and replaced by nodes field of dom elements, once inserted in DOM).
        var newItem = {
            data: data || (parentItem ? parentItem.data : {}),
            _wrap: parentItem ? parentItem._wrap : null,
            tmpl: null,
            parent: parentItem || null,
            nodes: [],
            calls: tiCalls,
            nest: tiNest,
            wrap: tiWrap,
            html: tiHtml,
            update: tiUpdate
        };
        if ( options ) {
            jQuery.extend( newItem, options, { nodes: [], parent: parentItem } );
        }
        if ( fn ) {
            // Build the hierarchical content to be used during insertion into DOM
            newItem.tmpl = fn;
            newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
            newItem.key = ++itemKey;
            // Keep track of new template item, until it is stored as jQuery Data on DOM element
            (stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
        }
        return newItem;
    }

    // Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
                parent = this.length === 1 && this[0].parentNode;

            appendToTmplItems = newTmplItems || {};
            if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
                insert[ original ]( this[0] );
                ret = this;
            } else {
                for ( i = 0, l = insert.length; i < l; i++ ) {
                    cloneIndex = i;
                    elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
                    ret = ret.concat( elems );
                }
                cloneIndex = 0;
                ret = this.pushStack( ret, name, insert.selector );
            }
            tmplItems = appendToTmplItems;
            appendToTmplItems = null;
            jQuery.tmpl.complete( tmplItems );
            return ret;
        };
    });

    jQuery.fn.extend({
        // Use first wrapped element as template markup.
        // Return wrapped set of template items, obtained by rendering template against data.
        tmpl: function( data, options, parentItem ) {
            return jQuery.tmpl( this[0], data, options, parentItem );
        },

        // Find which rendered template item the first wrapped DOM element belongs to
        tmplItem: function() {
            return jQuery.tmplItem( this[0] );
        },

        // Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
        template: function( name ) {
            return jQuery.template( name, this[0] );
        },

        domManip: function( args, table, callback, options ) {
            // This appears to be a bug in the appendTo, etc. implementation
            // it should be doing .call() instead of .apply(). See #6227
            if ( args[0] && args[0].nodeType ) {
                var dmArgs = jQuery.makeArray( arguments ), argsLength = args.length, i = 0, tmplItem;
                while ( i < argsLength && !(tmplItem = jQuery.data( args[i++], "tmplItem" ))) {}
                if ( argsLength > 1 ) {
                    dmArgs[0] = [jQuery.makeArray( args )];
                }
                if ( tmplItem && cloneIndex ) {
                    dmArgs[2] = function( fragClone ) {
                        // Handler called by oldManip when rendered template has been inserted into DOM.
                        jQuery.tmpl.afterManip( this, fragClone, callback );
                    };
                }
                oldManip.apply( this, dmArgs );
            } else {
                oldManip.apply( this, arguments );
            }
            cloneIndex = 0;
            if ( !appendToTmplItems ) {
                jQuery.tmpl.complete( newTmplItems );
            }
            return this;
        }
    });

    jQuery.extend({
        // Return wrapped set of template items, obtained by rendering template against data.
        tmpl: function( tmpl, data, options, parentItem ) {
            var ret, topLevel = !parentItem;
            if ( topLevel ) {
                // This is a top-level tmpl call (not from a nested template using {{tmpl}})
                parentItem = topTmplItem;
                tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
                wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
            } else if ( !tmpl ) {
                // The template item is already associated with DOM - this is a refresh.
                // Re-evaluate rendered template for the parentItem
                tmpl = parentItem.tmpl;
                newTmplItems[parentItem.key] = parentItem;
                parentItem.nodes = [];
                if ( parentItem.wrapped ) {
                    updateWrapped( parentItem, parentItem.wrapped );
                }
                // Rebuild, without creating a new template item
                return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
            }
            if ( !tmpl ) {
                return []; // Could throw...
            }
            if ( typeof data === "function" ) {
                data = data.call( parentItem || {} );
            }
            if ( options && options.wrapped ) {
                updateWrapped( options, options.wrapped );
            }
            ret = jQuery.isArray( data ) ?
                jQuery.map( data, function( dataItem ) {
                    return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
                }) :
                [ newTmplItem( options, parentItem, tmpl, data ) ];
            return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
        },

        // Return rendered template item for an element.
        tmplItem: function( elem ) {
            var tmplItem;
            if ( elem instanceof jQuery ) {
                elem = elem[0];
            }
            while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
            return tmplItem || topTmplItem;
        },

        // Set:
        // Use $.template( name, tmpl ) to cache a named template,
        // where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
        // Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

        // Get:
        // Use $.template( name ) to access a cached template.
        // Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
        // will return the compiled template, without adding a name reference.
        // If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
        // to $.template( null, templateString )
        template: function( name, tmpl ) {
            if (tmpl) {
                // Compile template and associate with name
                if ( typeof tmpl === "string" ) {
                    // This is an HTML string being passed directly in.
                    tmpl = buildTmplFn( tmpl )
                } else if ( tmpl instanceof jQuery ) {
                    tmpl = tmpl[0] || {};
                }
                if ( tmpl.nodeType ) {
                    // If this is a template block, use cached copy, or generate tmpl function and cache.
                    tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
                }
                return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
            }
            // Return named compiled template
            return name ? (typeof name !== "string" ? jQuery.template( null, name ):
                (jQuery.template[name] ||
                    // If not in map, treat as a selector. (If integrated with core, use quickExpr.exec)
                    jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null;
        },

        encode: function( text ) {
            // Do HTML encoding replacing < > & and ' and " by corresponding entities.
            return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
        }
    });

    jQuery.extend( jQuery.tmpl, {
        tag: {
            "tmpl": {
                _default: { $2: "null" },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
                // tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
                // This means that {{tmpl foo}} treats foo as a template (which IS a function).
                // Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
            },
            "wrap": {
                _default: { $2: "null" },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            "each": {
                _default: { $2: "$index, $value" },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: { $1: "true" },
                open: "}else if(($notnull_1) && $1a){"
            },
            "html": {
                // Unecoded expression evaluation.
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                // Encoded expression evaluation. Abbreviated form is ${}.
                _default: { $1: "$data" },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                // Comment tag. Skipped by parser
                open: ""
            }
        },

        // This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
        complete: function( items ) {
            newTmplItems = {};
        },

        // Call this from code which overrides domManip, or equivalent
        // Manage cloning/storing template items etc.
        afterManip: function afterManip( elem, fragClone, callback ) {
            // Provides cloned fragment ready for fixup prior to and after insertion into DOM
            var content = fragClone.nodeType === 11 ?
                jQuery.makeArray(fragClone.childNodes) :
                fragClone.nodeType === 1 ? [fragClone] : [];

            // Return fragment to original caller (e.g. append) for DOM insertion
            callback.call( elem, fragClone );

            // Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
            storeTmplItems( content );
            cloneIndex++;
        }
    });

    //========================== Private helper functions, used by code above ==========================

    function build( tmplItem, nested, content ) {
        // Convert hierarchical content into flat string array
        // and finally return array of fragments ready for DOM insertion
        var frag, ret = content ? jQuery.map( content, function( item ) {
            return (typeof item === "string") ?
                // Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
                (tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
                // This is a child template item. Build nested template.
                build( item, tmplItem, item._ctnt );
        }) :
            // If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
            tmplItem;
        if ( nested ) {
            return ret;
        }

        // top-level template
        ret = ret.join("");

        // Support templates which have initial or final text nodes, or consist only of text
        // Also support HTML entities within the HTML markup.
        ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
            frag = jQuery( middle ).get();

            storeTmplItems( frag );
            if ( before ) {
                frag = unencode( before ).concat(frag);
            }
            if ( after ) {
                frag = frag.concat(unencode( after ));
            }
        });
        return frag ? frag : unencode( ret );
    }

    function unencode( text ) {
        // Use createElement, since createTextNode will not render HTML entities correctly
        var el = document.createElement( "div" );
        el.innerHTML = text;
        return jQuery.makeArray(el.childNodes);
    }

    // Generate a reusable function that will serve to render a template against data
    function buildTmplFn( markup ) {
        return new Function("jQuery","$item",
            "var $=jQuery,call,_=[],$data=$item.data;" +

                // Introduce the data as local variables using with(){}
                "with($data){_.push('" +

                // Convert the template into pure JavaScript
                jQuery.trim(markup)
                    .replace( /([\\'])/g, "\\$1" )
                    .replace( /[\r\t\n]/g, " " )
                    .replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
                    .replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                    function( all, slash, type, fnargs, target, parens, args ) {
                        var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
                        if ( !tag ) {
                            throw "Template command not found: " + type;
                        }
                        def = tag._default || [];
                        if ( parens && !/\w$/.test(target)) {
                            target += parens;
                            parens = "";
                        }
                        if ( target ) {
                            target = unescape( target );
                            args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
                            // Support for target being things like a.toLowerCase();
                            // In that case don't call with template item as 'this' pointer. Just evaluate...
                            expr = parens ? (target.indexOf(".") > -1 ? target + parens : ("(" + target + ").call($item" + args)) : target;
                            exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
                        } else {
                            exprAutoFnDetect = expr = def.$1 || "null";
                        }
                        fnargs = unescape( fnargs );
                        return "');" +
                            tag[ slash ? "close" : "open" ]
                                .split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
                                .split( "$1a" ).join( exprAutoFnDetect )
                                .split( "$1" ).join( expr )
                                .split( "$2" ).join( fnargs ?
                                    fnargs.replace( /\s*([^\(]+)\s*(\((.*?)\))?/g, function( all, name, parens, params ) {
                                        params = params ? ("," + params + ")") : (parens ? ")" : "");
                                        return params ? ("(" + name + ").call($item" + params) : all;
                                    })
                                    : (def.$2||"")
                                ) +
                            "_.push('";
                    }) +
                "');}return _;"
        );
    }
    function updateWrapped( options, wrapped ) {
        // Build the wrapped content.
        options._wrap = build( options, true,
            // Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
            jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
        ).join("");
    }

    function unescape( args ) {
        return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
    }
    function outerHtml( elem ) {
        var div = document.createElement("div");
        div.appendChild( elem.cloneNode(true) );
        return div.innerHTML;
    }

    // Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
    function storeTmplItems( content ) {
        var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
        for ( i = 0, l = content.length; i < l; i++ ) {
            if ( (elem = content[i]).nodeType !== 1 ) {
                continue;
            }
            elems = elem.getElementsByTagName("*");
            for ( m = elems.length - 1; m >= 0; m-- ) {
                processItemKey( elems[m] );
            }
            processItemKey( elem );
        }
        function processItemKey( el ) {
            var pntKey, pntNode = el, pntItem, tmplItem, key;
            // Ensure that each rendered template inserted into the DOM has its own template item,
            if ( (key = el.getAttribute( tmplItmAtt ))) {
                while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
                if ( pntKey !== key ) {
                    // The next ancestor with a _tmplitem expando is on a different key than this one.
                    // So this is a top-level element within this template item
                    // Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
                    pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
                    if ( !(tmplItem = newTmplItems[key]) ) {
                        // The item is for wrapped content, and was copied from the temporary parent wrappedItem.
                        tmplItem = wrappedItems[key];
                        tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode], null, true );
                        tmplItem.key = ++itemKey;
                        newTmplItems[itemKey] = tmplItem;
                    }
                    if ( cloneIndex ) {
                        cloneTmplItem( key );
                    }
                }
                el.removeAttribute( tmplItmAtt );
            } else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
                // This was a rendered element, cloned during append or appendTo etc.
                // TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
                cloneTmplItem( tmplItem.key );
                newTmplItems[tmplItem.key] = tmplItem;
                pntNode = jQuery.data( el.parentNode, "tmplItem" );
                pntNode = pntNode ? pntNode.key : 0;
            }
            if ( tmplItem ) {
                pntItem = tmplItem;
                // Find the template item of the parent element.
                // (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
                while ( pntItem && pntItem.key != pntNode ) {
                    // Add this element as a top-level node for this rendered template item, as well as for any
                    // ancestor items between this item and the item of its parent element
                    pntItem.nodes.push( el );
                    pntItem = pntItem.parent;
                }
                // Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
                delete tmplItem._ctnt;
                delete tmplItem._wrap;
                // Store template item as jQuery data on the element
                jQuery.data( el, "tmplItem", tmplItem );
            }
            function cloneTmplItem( key ) {
                key = key + keySuffix;
                tmplItem = newClonedItems[key] =
                    (newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent, null, true ));
            }
        }
    }

    //---- Helper functions for template item ----

    function tiCalls( content, tmpl, data, options ) {
        if ( !content ) {
            return stack.pop();
        }
        stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
    }

    function tiNest( tmpl, data, options ) {
        // nested template, using {{tmpl}} tag
        return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
    }

    function tiWrap( call, wrapped ) {
        // nested template, using {{wrap}} tag
        var options = call.options || {};
        options.wrapped = wrapped;
        // Apply the template, which may incorporate wrapped content,
        return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
    }

    function tiHtml( filter, textOnly ) {
        var wrapped = this._wrap;
        return jQuery.map(
            jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
            function(e) {
                return textOnly ?
                    e.innerText || e.textContent :
                    e.outerHTML || outerHtml(e);
            });
    }

    function tiUpdate() {
        var coll = this.nodes;
        jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
        jQuery( coll ).remove();
    }
})( jQuery );
/*!
 * jQuery Mobile 1.4.1
 * Git HEAD hash: 18c1e32bfc4e0e92756dedc105d799131607f5bb <> Date: Wed Feb 12 2014 22:15:20 UTC
 * http://jquerymobile.com
 *
 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
/*!
 * code snippet for just swipe-right and swipe-left
 */
(function( $, window, undefined ) {
    var $document = $(document),
        TouchUtil = xfalib.ut.TouchUtil,
        touchStartEvent = TouchUtil.POINTER_DOWN,
        touchStopEvent = TouchUtil.POINTER_UP,
        touchMoveEvent = TouchUtil.POINTER_MOVE;

    function triggerCustomEvent( obj, eventType, event, bubble ) {
        var originalType = event.type;
        event.type = eventType;
        if ( bubble ) {
            $.event.trigger( event, undefined, obj );
        } else {
            $.event.dispatch.call( obj, event );
        }
        event.type = originalType;
    }

    $.event.special.swipe = {

        // More than this horizontal displacement, and we will suppress scrolling.
        scrollSupressionThreshold: 30,

        // More time than this, and it isn't a swipe.
        durationThreshold: 1000,

        // Swipe horizontal displacement must be more than this.
        horizontalDistanceThreshold: 30,

        // Swipe vertical displacement must be less than this.
        verticalDistanceThreshold: 30,

        getLocation: function ( event ) {
            var winPageX = window.pageXOffset,
                winPageY = window.pageYOffset,
                x = event.clientX || event.originalEvent.clientX,
                y = event.clientY || event.originalEvent.clientY;

            if ( event.pageY === 0 && Math.floor( y ) > Math.floor( event.pageY ) ||
                event.pageX === 0 && Math.floor( x ) > Math.floor( event.pageX ) ) {

                // iOS4 clientX/clientY have the value that should have been
                // in pageX/pageY. While pageX/page/ have the value 0
                x = x - winPageX;
                y = y - winPageY;
            } else if ( y < ( event.pageY - winPageY) || x < ( event.pageX - winPageX ) ) {

                // Some Android browsers have totally bogus values for clientX/Y
                // when scrolling/zooming a page. Detectable since clientX/clientY
                // should never be smaller than pageX/pageY minus page scroll
                x = event.pageX - winPageX;
                y = event.pageY - winPageY;
            }

            return {
                x: x,
                y: y
            };
        },

        start: function( event ) {
            var data = event.originalEvent.touches ?
                    event.originalEvent.touches[ 0 ] : event,
                location = $.event.special.swipe.getLocation( data );
            return {
                time: ( new Date() ).getTime(),
                coords: [ location.x, location.y ],
                origin: $( event.target )
            };
        },

        stop: function( event ) {
            var data = event.originalEvent.touches ?
                    event.originalEvent.touches[ 0 ] : event,
                location = $.event.special.swipe.getLocation( data );
            return {
                time: ( new Date() ).getTime(),
                coords: [ location.x, location.y ]
            };
        },

        handleSwipe: function( start, stop, thisObject, origTarget ) {
            if ( stop.time - start.time < $.event.special.swipe.durationThreshold &&
                Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.horizontalDistanceThreshold &&
                Math.abs( start.coords[ 1 ] - stop.coords[ 1 ] ) < $.event.special.swipe.verticalDistanceThreshold ) {
                var direction = start.coords[0] > stop.coords[ 0 ] ? "swipeleft" : "swiperight";

                triggerCustomEvent( thisObject, direction,$.Event( direction, { target: origTarget, swipestart: start, swipestop: stop } ), true );
                return true;
            }
            return false;

        },

        // This serves as a flag to ensure that at most one swipe event event is
        // in work at any given time
        eventInProgress: false,

        setup: function() {
            var events,
                thisObject = this,
                $this = $( thisObject ),
                context = {};

            // Retrieve the events data for this element and add the swipe context
            events = $.data( this, "mobile-events" );
            if ( !events ) {
                events = { length: 0 };
                $.data( this, "mobile-events", events );
            }
            events.length++;
            events.swipe = context;

            context.start = function( event ) {
                // If its not a touch event on IE, ignore
                if (event.originalEvent.pointerType !== undefined && !(event.originalEvent.pointerType === 2 || event.originalEvent.pointerType === "touch")) {
                    return;
                }

                // Bail if we're already working on a swipe event
                if ( $.event.special.swipe.eventInProgress ) {
                    return;
                }
                $.event.special.swipe.eventInProgress = true;

                var stop,
                    start = $.event.special.swipe.start( event ),
                    origTarget = event.target,
                    emitted = false;

                context.move = function( event ) {
                    if ( !start ) {
                        return;
                    }

                    stop = $.event.special.swipe.stop( event );
                    if ( !emitted ) {
                        emitted = $.event.special.swipe.handleSwipe( start, stop, thisObject, origTarget );
                        if ( emitted ) {

                            // Reset the context to make way for the next swipe event
                            $.event.special.swipe.eventInProgress = false;
                        }
                    }
                    // prevent scrolling
                    if ( Math.abs( start.coords[ 0 ] - stop.coords[ 0 ] ) > $.event.special.swipe.scrollSupressionThreshold ) {
                        event.preventDefault();
                    }
                };

                context.stop = function() {
                    emitted = true;

                    // Reset the context to make way for the next swipe event
                    $.event.special.swipe.eventInProgress = false;
                    $document.off( touchMoveEvent, context.move );
                    context.move = null;
                };

                $document.on( touchMoveEvent, context.move )
                    .one( touchStopEvent, context.stop );
            };
            $this.on( touchStartEvent, context.start );
        },

        teardown: function() {
            var events, context;

            events = $.data( this, "mobile-events" );
            if ( events ) {
                context = events.swipe;
                delete events.swipe;
                events.length--;
                if ( events.length === 0 ) {
                    $.removeData( this, "mobile-events" );
                }
            }

            if ( context ) {
                if ( context.start ) {
                    $( this ).off( touchStartEvent, context.start );
                }
                if ( context.move ) {
                    $document.off( touchMoveEvent, context.move );
                }
                if ( context.stop ) {
                    $document.off( touchStopEvent, context.stop );
                }
            }
        }
    };
    $.each({
        swipeleft: "swipe",
        swiperight: "swipe"
    }, function( event, sourceEvent ) {
		// Ignoring mouse events, for all browsers except IE 10>, which has pointer events.
        if (TouchUtil.POINTER_DOWN !== "mousedown") {
            $.event.special[ event ] = {
                setup: function() {
                    $( this ).bind( sourceEvent, $.noop );
                },
                teardown: function() {
                    $( this ).unbind( sourceEvent );
                }
            };
        }
    });

})( jQuery, this );

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2017 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

(function (window, $) {

    var DefaultPanelProvider = {

        /**
         * Makes an ajax call and returns an object containing the template json of the template ids
         * @returns {Object}
         * @param options {Object} This object contains the path, the list of templateIds, and success handler
         */
        getMultipleTemplateJson : function (options) {
            var externalizedPath = options.path,
                listOfTemplateIds = options.listOfTemplateIds;
            if (listOfTemplateIds.length > 0) {
                $.ajax({
                    url : externalizedPath,
                    type : "GET",
                    data : {
                        listOfTemplateIds : JSON.stringify(listOfTemplateIds),
                        fetchMultipleJson : true
                    },
                    async : false,
                    success : function (response) {
                        options.success.call(this, JSON.parse(response.multipleJson));
                    },
                    error : function (error) {
                        window.guideBridge._guide().logger().log(error);
                    }
                });
            }
        },

        /**
         * Makes an ajax call and gets json and html of the lazy loaded panel
         * @param options {Object} This object contains the templateId, fetchJson parameter and fetchHtml parameter.
         *                         These can be set to true or false depending on whether the respective content
         *                         needs to be fetched or not. Options object also contains the success, error, and complete handler as well.
         * @returns {JSONObject} The JSON object has two entries, json and html.
         */
        getHtmlJson : function (options) {
            $.ajax({
                url : options.path,
                type : "GET",
                data : {
                    templateId : options.templateId,
                    fetchJSON : options.fetchJSON,
                    fetchHTML : options.fetchHTML
                },
                async : false,
                success : options.success,
                error : options.error,
                complete : options.complete
            });
        }
    };

    window.addEventListener("bridgeInitializeStart", function (evnt) {
        var bridge = evnt.detail.guideBridge;
        if (bridge) {
            bridge.registerPanelProvider(DefaultPanelProvider);
        }
    });

}(window, $));

// jscs:disable requireDotNotation
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

(function ($, _) {
    Function.prototype.bind = Function.prototype.bind || function (ctx) {
            var that = this;
            return function () {
                that.call(ctx, arguments);
            };
        };

    var nValidationContext = 0,
        /**
         * flag to check if adaptive forms is online or not
         * @type {boolean}
         */
        checkAFOffline = false,
        sValidationContext = "";

    /**
     * Class representing the result of {@link GuideBridge} API. This class provides API to access the result of the
     * GuideBridge API and retrieve any error messages the API has thrown.
     * @class GuideResultObject
     * @docStatus review 2016-05-03
     * @since 6.0
     */
    var GuideResultObject = function () {
        var _message = [];
        var _errorCode = [];
        var _somExpression = [];
        /**
         * The value of this property is true if the API succeeded, otherwise false. The
         * {@link GuideResultObject#getNextMessage|getNextMessage} API can be used to retrieve the error messages in
         * case the value of this property is false.
         * @summary whether the API succeeded or failed.
         *
         * @type {boolean}
         * @member errors
         * @memberof GuideResultObject
         * @instance
         * @readonly
         * @since 6.0
         */
        this.errors = false;
        /**
         * The type of the data is specific to the API and documentation of that API provides more details about the
         * data
         * @summary data returned by GuideBridge API
         *
         * @member {*} data
         * @memberof GuideResultObject
         * @instance
         * @readonly
         * @since 6.0
         */
        this.data;

        /**
         * API to add a message in the GuideResultObject
         * @private
         * @memberof GuideResultObject
         * @instance
         * @since 6.0
         */
        this.addMessage = function (code, msg, som) {
            this.errors = true;
            _message.push(msg);
            _somExpression.push(som);
            _errorCode.push(code);
        };

        /**
         * Error Message returned by GuideBridge API
         * @typedef {object} GuideResultObject~ErrorMessage
         * @property {number} code Error Code
         * @property {?string} somExpression Som Expression of the GuideNode the error is related to. It can be null if
         * error is not related to a GuideNode. For example, server failure when submitting the form.
         * @property {string} message User friendly message for the error.
         * @see GuideNode#somExpression
         */
        /**
         * When a GuideBridge API fails, it throws an error message. This is indicated by the
         * {@link GuideResultObject#errors|errors} property. To get the errors, one has to call this API. The API can throw
         * multiple errors and the user has to call this API until it returns null indicating no more errors.
         * @summary Returns the error message thrown by the GuideBridge API.
         * @function getNextMessage
         * @memberof GuideResultObject
         * @instance
         * @return {GuideResultObject~ErrorMessage} object containing the error message
         * @since 6.0
         */
        this.getNextMessage = function () {
            if (_errorCode.length == 0) {
                return null;
            }
            return {
                code : _errorCode.pop(),
                somExpression : _somExpression.pop(),
                message : _message.pop()
            };
        };
    };

    var GUIDE_BRIDGE_VERSION = "1.0";
    /*
     * Callback to accept result of asynchronous GuideBridge APIs.
     * @callback GuideBridge~AsyncAPIResultCallback
     * @param {GuideResultObject} guideResultObject object containing the result of the API
     */
    /*
     * Signature of the input to be passed to GuideBridge asynchronous APIs
     * @typedef {object} GuideBridge~AsyncAPIInput
     * @property {GuideBridge~AsyncAPIResultCallback} [success] callback which receives the result of the API in case of
     * success. The argument this callback will recieve will have its {@link GuideResultObject#errors|errors} property
     * as false.
     * @property {GuideBridge~AsyncAPIResultCallback} [error] callback which receives the result of the API in case of
     * failure. The argument this callback will recieve will have its {@link GuideResultObject#errors|errors} property
     * as true.
     * @param {object} [context] _this_ object inside the _success_ and _error_ callback will point to this
     * object
     */
    /**
     * GuideBridge provides an interface using which, wrapper html (page hosting/embedding adaptive forms) or external
     * window scripts like Parent window javascript (in case form is embedded in an iframe), can communicate with
     * current Adaptive Form and manipulate or query it's current state.
     *
     * Some of the use cases for using this API
     * * Submit Adaptive Form from a custom button present outside the Form.
     * * Get current Adaptive Form state and save it in local storage for restoring it later on.
     * * Plugging in custom widgets.
     * * Manipulate the Adaptive Form component properties, like value, visibility from outside the Form
     * * Listen to bridge events and send data to Analytics server for reporting
     *
     * ### Accessing the Instance of GuideBridge
     * To access the GuideBridge APIs, one needs to get hold of an instance of GuideBridge. The object is
     * available on the window after the GuideBridge script is loaded. One can directly access it by using
     * `window.guideBridge`. But
     * that requires the user script is written after the GuideBridge script is loaded. In certain cases, a user might
     * not be
     * aware of when their script gets loaded, in those cases the recommended approach is to listen to the
     * {@link GuideBridge.event:bridgeInitializeStart|bridgeInitializeStart} event which provides an instance of
     * GuideBridge object.
     *```
     * window.addEventListener("bridgeInitializeStart", function(evnt) {
     *      // get hold of the guideBridge object
     *      var gb = evnt.detail.guideBridge;
     * })
     * ```
     *
     * **Or**, if you are sure that your script will execute after GuideBridge Script is loaded, then you can directly
     * use `window.guideBridge`. In cases like your script is present at the bottom of the page or you are executing on
     * jquery dom ready event.
     * ```
     *    $(function () {
     *          // one can directly access guideBridge object here.
     *          window.guideBridge.connect(function () {
     *              //call guideBridge APIs
     *          })
     *    })
     * ```
     *
     * <a name="wait-form-ready"></a>
     * ### Wait for Form to get ready
     * After getting the GuideBridge object one needs to wait for the Form to get initialized. This can be done by
     * providing a callback to the {@link GuideBridge#connect|connect} API
     * ```
     * guideBridge.connect(function (){
     *    //this callback will be called after adaptive form is initialized
     *    // do your custom processing
     * })
     * ```
     *
     * _**Note:** There is no link between Dom ready events and the connect API. If one wants to access the HTML DOM
     * from inside the connect callback, the recommended approach is to listen on the jQuery
     * [ready](https://api.jquery.com/ready/) event or the native
     * [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) event. Similarly if one
     * wants to access GuideBridge APIs one needs to wait for the connect callback to get fired._
     *
     * <a name="guidebridge-api-usage"></a>
     * ### Using the GuideBridge API
     * APIs are provided for external applications to connect with Adaptive Form and FormDom. The APIs can be
     * loosely divided into two categories, **synchronous** and **asynchronous**.
     *
     * The synchronous getter API returns a {@link GuideResultObject} which represents the result of the API whereas
     * each setter API throws an exception in case of error(s) and it is the responsibility of the API to catch those
     * exceptions. The {@link GuideResultObject} either contains error or the return value of the API and provides easy
     * mechanism to access each of them.
     *
     * ```
     * var result = guideBridge.hideGlobalToolbar()
     * if (result.errors) {
     *     console.error("Unable to hide toolbar");
     *     var msg = guideResultObject.getNextMessage();
     *     while (msg != null) {
     *         console.error(msg.message);
     *         msg = guideResultObject.getNextMessage();
     *    }
     * } else {
     *      console.log("toolbar hidden successfully");
     * }
     * ```
     *
     * Each asynchronous API provides callback mechanism to return the result of the API. Each API takes a Javascript
     * Object having success and error handlers. The success and error handlers receive {@link GuideResultObject} as input.
     * In the success callback, the arguments {@link GuideResultObject#data|data} property is set to the return value
     * of the API, while in the error callback the {@link GuideResultObject#errors|errors} property is set to _true_.
     * Some APIs might need extra input and that will be defined by the API
     * ```
     * guideBridge.getData({
     *     success : function (guideResultObject) {
     *          console.log("data received" + guideResultObject.data);
     *     }
     *     error : function (guideResultObject) {
     *          console.error("API Failed");
     *          var msg = guideResultObject.getNextMessage();
     *          while (msg != null) {
     *              console.error(msg.message);
     *              msg = guideResultObject.getNextMessage();
     *          }
     *     }
     * });
     * ```
     * _**Note:** Some APIs do not follow the above norm and it is mentioned in the documentation of that API_
     *
     * <a name="guidebridge-events"></a>
     * ### GuideBridge Events
     *
     * GuideBridge API triggers a set of events to notify the current action a user has taken. Developers can listen on
     * that event using the {@link GuideBridge#on|on} API and perform some tasks. For example a developer can listen on
     * {@link GuideBridge.event:elementFocusChanged|elementFocusChanged} and capture for how long a user spends time
     * on that field. All the events triggered by GuideBridge are mentioned below.
     *
     * GuideBridge provides an event object which contains extra information about the event. For
     * example _elementFocusChanged_ event provides information about the previous field that was in focus and the
     * current field that came to focus.
     *
     * The {@link GuideBridge#on|on} API takes a {@link GuideBridge~GuideBridgeEventCallback|GuideBridgeEventCallback}
     * as input. The callback is passed two arguments, event and payload where the extra information is passed in the
     * payload argument. The documentation of each event lists the values of different properties of the payload
     * object.
     *
     * ```
     * guideBridge.on(eventName, function (event, payload) {
     *      // access payload properties
     *      ...
     * })
     * ```
     *
     * @class GuideBridge
     * @docStatus review 2016-05-03
     * @since 6.0
     */
    var GuideBridge = function () {
        this._$target = null;
        this._guide = null;
        this._guideView = null;
        this._version = GUIDE_BRIDGE_VERSION;
        this._guideInitHandler = {};
        $(window).bind("guideModelInitialized", this._guideModelInitialized.bind(this));
        $(window).bind("guideInitialized", this._guideInitialized.bind(this));
        $(window).bind("guideInitializationError", this._guideError);
        this.userConfig = {};
        this.panelProvider = null;
        // set the host name whether it is client or server, by default it is client
        this.hostName = "client";
    };

    var _formInstanceUUID;
    var GUIDE_TEMP_STORAGE_PATH = "/tmp/fd/af",
        FM_DAM_ROOT = "/content/dam/formsanddocuments/",
        FM_AF_ROOT = "/content/forms/af/",
        _isAutoSaveEnabled = false,
        LOCAL_METADATA_SELECTOR = "local";
    var createUUIDStorage = function (uuid) {
        var successFlag = true;
        // this is  done so that when one clicks
        // the disabled link anyhow
        // you will not be able to
        // send request
        // More over if hack this too then we
        // have a check to prevent formation of
        // UUID folder at server side too ;)
        if (guideBridge._disablePreview()) {
            return false;
        }
        $.ajax({
            url : guideBridge._getGuidePathUrl(".fd.tempstorageprovider.jsp"),
            type : "POST",
            async : false,
            data : {"uuidPath" : GUIDE_TEMP_STORAGE_PATH + "/" + uuid},
            error : function (message) {
                guideBridge._guide.logger().log(message);
                successFlag = false;
            }
        });
        return successFlag;
    };

    var defaultErrorHandler = function (obj) {
        if (typeof(console) == "undefined") {
            return;
        }
        var d = obj.getNextMessage();
        while (d) {
            this._guide.logger().log(d.message);
            d = obj.getNextMessage();
        }
    };

    /**
     *
     * Default function to check Validations errors after getting the data from the
     * server with getDataXML call.
     * @private
     */
    var defaultValidationChecker = function (validations, obj) {
        if (validations && validations.length > 0) {
            for (var i = 0; i < validations.length; i++) {
                obj.addMessage(0, validations[i], "");
            }
            return false;
        }
        return true;
    };

    function getOrElse() {
        return xfalib.ut.XfaUtil.prototype.getOrElse.apply(null, arguments);
    }

    $.extend(GuideBridge.prototype, {

        /**
         * Dispatched when the instance of GuideBridge is available. The GuideBridge object
         * will be passed to the listener and further communication can be done using that object.
         *
         * _**Note :** bridgeInitializeStart event is dispatched at window_
         *
         * @summary Notifies when the instance of GuideBridge is available.
         *
         * @event bridgeInitializeStart
         * @property {Object} detail an object containing guideBridge
         * @property {GuideBridge} detail.guideBridge GuideBridge Instance
         * @memberof GuideBridge
         * @since 6.0
         * @example
         * window.addEventListener("bridgeInitializeStart", function(evnt) {
         *      // get hold of the guideBridge object
         *      var gb = evnt.detail.guideBridge;
         *      //wait for the completion of adaptive forms
         *      gb.connect(function (){
         *         //this function will be called after adaptive form is initialized
         *      })
         * })
         */
        GUIDE_BRIDGE_INITIALIZE_START : "bridgeInitializeStart",

        /**
         * @summary Dispatched when the initialization of Adaptive Form is complete.
         *
         * @name  bridgeInitializeComplete
         * @event
         * @property {object} payload payload passed to the event listener
         * @property {object} payload.target instance of GuideBridge object
         * @memberof GuideBridge
         * @deprecated since 6.3 this event is deprecated. Please use {@link GuideBridge#connect|connect} API
         * @since 6.0
         * @example
         * guideBridge.on("bridgeInitializeComplete" , function(event, payload) {
         *      var gb = payload.target;
         *      assert(gb === guideBridge)
         * }
         */
        GUIDE_BRIDGE_INITIALIZE_COMPLETE : "bridgeInitializeComplete",

        /**
         * @summary Dispatched when visibility of any Adaptive Form component(Panel or Field) changes.
         * @name elementVisibleChanged
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Scriptable} payload.target Adaptive Form component whose {@link Scriptable#visible|visible} property has
         * changed.
         * @property {boolean} payload.oldText old value of the visible property
         * @property {boolean} payload.newText new value of the visible property
         * @memberof GuideBridge
         * @since 6.0
         * @example
         * guideBridge.on("elementVisibleChanged" , function(event, payload) {
         *      var component = payload.target; // scripting model of the component whose visibility has changed
         *      var newValue = payload.newText;
         *      if (newValue) {
         *          console.log(component.name + " is visible now";
         *      } else {
         *          console.log(component.name + " is hidden now";
         *      }
         * }
         *
         */
        GUIDE_ELEMENT_VISIBLE_CHANGED : "elementVisibleChanged",

        /**
         * @summary Dispatched when any Adaptive Form component is enabled/disabled, i.e.
         * {@link Scriptable#enabled|enabled} property of a component changes.
         * @name elementEnableChanged
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Scriptable} payload.target component whose {@link Scriptable#enabled|enabled} property has changed
         * @property {boolean} payload.oldText old value of the enabled property
         * @property {boolean} payload.newText new value of the enabled property
         * @memberof GuideBridge
         * @since 6.0
         * @example
         * guideBridge.on("elementEnableChanged" , function(event, payload) {
         *      var component = payload.target; // scripting model of the component whose enabled property has changed
         *      var newValue = payload.newText;
         *      if (newValue) {
         *          console.log(component.name + " is enabled now";
         *      } else {
         *          console.log(component.name + " is disabled now";
         *      }
         * }
         */
        GUIDE_ELEMENT_ENABLE_CHANGED : "elementEnableChanged",

        /**
         * @summary Dispatched when value of any Field changes.
         * @name elementValueChanged
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Field} payload.target Field whose {@link Field#value|value} has changed
         * @property {string|number} payload.oldText old value of the Field
         * @property {string|number} payload.newText new value of the Field
         * @memberof GuideBridge
         * @since 6.0
         * @example
         * guideBridge.on("elementValueChanged" , function(event, payload) {
         *      var component = payload.target; // Field whose value has changed
         *      console.log("Value of component " + component.name + " was " + payload.oldText);
         *      console.log("Value of component " + component.name + " is " + payload.newText);
         * }
         */
        GUIDE_ELEMENT_VALUE_CHANGED : "elementValueChanged",

        /**
         * In layouts like Wizard or Tabbed layout, when a user navigates from one tab to another, this event is
         * triggered
         * @summary Event to notify that the user has navigated from one Panel to another.
         *
         * @name elementNavigationChanged
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Panel} payload.target Panel to which the user moved to
         * @property {string} payload.prevText SomExpression of the panel from which user moved
         * @property {string} payload.newText SomExpression of the panel to which user moved
         * @memberof GuideBridge
         * @see GuideNode#somExpression
         * @since 6.0
         * @example
         * guideBridge.on("elementNavigationChanged" , function(event, payload) {
         *      var component = payload.target;
         *      console.log("old panel's SOM Expression: " + payload.oldText);
         *      console.log("new panel's SOM Expression: " + payload.newText);
         * }
         */
        GUIDE_ELEMENT_NAVIGATION_CHANGED : "elementNavigationChanged",

        /**
         * @summary Dispatched whenever a Field/Panel gets Focus
         * @name elementFocusChanged
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Panel|Field} payload.target new focused component
         * @property {string} oldText SOM Expression of  component  that was previously in focus or null
         * @property {string} newText SOM Expression of the component that is currently in focus or null
         * @memberof GuideBridge
         * @see GuideNode#somExpression
         * @see {@link GuideBridge#setFocus|setFocus API}
         * @since 6.0
         * @example
         * guideBridge.on("elementFocusChanged" , function(event, payload) {
         *      var component = payload.target;
         *      console.log("old elements's SOM Expression: " + payload.oldText);
         *      console.log("new elements's SOM Expression: " + payload.newText);
         * }
         */
        GUIDE_ELEMENT_FOCUS_CHANGED : "elementFocusChanged",

        /**
         * @summary Dispatched when a user looks at the help description of any Adaptive Form component(Panel or field)
         * @name elementHelpShown
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Panel|Field} payload.target component whose help is being shown
         * @property {string} payload._property what kind of help is being shown. The value can be
         * * shortDescription (if Short Description becomes visible)
         * * longDescription (if Long Description becomes visible)
         * @property {string} payload.prevText empty string
         * @property {object} payload.newText object containing the help content
         * @property {string} payload.newText.help help content of the component
         * @memberof GuideBridge
         * @since 6.0
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/authoring-in-field-help.html|Help Description in Adaptive Form}
         * @example
         * guideBridge.on("elementHelpShown" , function(event, payload) {
         *      var component = payload.target;
         *      console.log("component whose help is shown " + payload.target.name);
         *      console.log("Help shown: " + payload._property);
         *      console.log("Help Content: " + payload.newText.help);
         * }
         */
        GUIDE_ELEMENT_HELP_SHOWN : "elementHelpShown",

        /**
         * @summary Dispatched when validity of a Field changes.
         * @name elementValidationStatusChanged
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Field} payload.target Field which either became valid/invalid
         * @property {boolean} payload.prevText old validation status
         * @property {boolean} payload.newText new validation status
         * @memberof GuideBridge
         * @see Field#validate
         * @see Field#validationState
         * @since 6.0
         * @example
         * guideBridge.on("elementValidationStatusChanged" , function(event, payload) {
         *      var component = payload.target;
         *      if (payload.prevText) {
         *          console.log("component became invalid" );
         *      } else {
         *         console.log("component became valid" );
         *      }
         * }
         */
        GUIDE_ELEMENT_VALIDATION_STATUS_CHANGED : "elementValidationStatusChanged",

        /**
         * Developers must not modify the Form Fields inside the listener. This is mostly use to update the UI outside
         * the Form or capture some data for analytics. If you want to modify form field value on the click of a button
         * please use the [Click Expression](https://helpx.adobe.com/aem-forms/6-1/adaptive-form-expressions.html#main-pars_header_6)
         * provided in the Forms Authoring.
         *
         * @summary Dispatched when a Button component is clicked.
         *
         * @name elementButtonClicked
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {Button} payload.target Button which was clicked
         * @memberof GuideBridge
         * @since 6.0
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/adaptive-form-expressions.html#main-pars_header_6|Click Expression in Buttons}
         * @example
         * guideBridge.on("elementButtonClicked" , function(event, payload) {
         *      var component = payload.target; // Button which wass clicked
         *      console.log("Button which was clicked " + component.name);
         * }
         */
        GUIDE_ELEMENT_BUTTON_CLICKED : "elementButtonClicked",

        /**
         * Whenever the full form validations are run via the {@link GuideBridge#validate|validate} API, this event is triggered.
         * @summary Dispatched when the validation of all the Adaptive Form fields are completed.
         *
         * @name validationComplete
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {GuideContainerNode} payload.target root Node of the Adaptive Form
         * @property {boolean} payload.prevText result of running the validation. true if validations are successful,
         * false otherwise
         * @property {Field~ValidationError[]} payload.newText List of objects containing error messages.
         * @memberof GuideBridge
         * @since 6.0
         * @example
         * guideBridge.on("validationComplete" , function(event, payload) {
         *      if (payload.prevText) {
         *          console.log("validation success");
         *      } else {
         *          console.log("validation failure");
         *          if (payload.newText.length) {
         *              payload.newText.forEach(function (error) {
         *                 console.log("validation failed for " + error.som + " with message " + error.errorText);
         *              })
         *          }
         *      }
         * }
         */
        GUIDE_VALIDATION_COMPLETE : "validationComplete",

        /**
         * Adaptive Form can be configured to be saved automatically at regular intervals. This can be controlled
         * dynamically based on the values filled in the Form. Authors can write custom scripts which can enable/disable
         * auto save functionality dynamically
         * @summary Dispatched when auto save gets enabled in the Form
         * @name guideAutoSaveStart
         * @event
         * @property {object} payload payload containing more information about the event
         * @property {GuideContainerNode} payload.target root Node of the Adaptive Form
         * @memberof GuideBridge
         * @since 6.1
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/auto-save-an-adaptive-form.html|Auto Save an Adaptive Form}
         * @example
         * guideBridge.on("guideAutoSaveStart" , function(event, payload) {
         *      console.log("Forms is now being saved as draft automatically");
         * }
         */
        GUIDE_AUTO_SAVE_START : "guideAutoSaveStart",

        /**
         * @summary Dispatched when save of adaptive form data has started
         * @name saveStarted
         * @event
         * @memberof GuideBridge
         * @since 6.1
         * @example
         * guideBridge.on("saveStarted" , function(event) {
         *      console.log("Save of Adaptive Form data is about to start");
         * }
         */
        GUIDE_SAVE_START : "saveStarted",

        /**
         * @summary Dispatched when save of adaptive form data is completed
         * @name saveCompleted
         * @event
         * @memberof GuideBridge
         * @since 6.1
         * @example
         * guideBridge.on("saveCompleted" , function(event) {
         *      console.log("Save of Adaptive Form data is completed");
         * }
         */
        GUIDE_SAVE_COMPLETED : "saveCompleted",

        /**
         * Users can add some pre submit code in the listener to this event.
         * @summary Dispatched when the user clicks on the submit button
         * @name submitStart
         * @event
         * @memberof GuideBridge
         * @since 6.0
         * @example
         * guideBridge.on("submitStart" , function(event) {
         *    // do some pre submit processing
         * }
         */
        GUIDE_SUBMIT_START : "submitStart",
        GUIDE_PATH : "guidePath",
        GUIDE_NAME : "guideName",
        GUIDE_DESC : "guideDesc",
        GUIDE_TYPE : "guideType",

        /**
         * @summary Dispatched when an Adaptive Form fragment is lazily loaded successfully
         * @name elementLazyLoaded
         * @property {object} payload payload containing more information about the event
         * @property {Panel} payload.target Adaptive Form Fragment which is lazily loaded
         * @event
         * @memberof GuideBridge
         * @since 6.1 FP1
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/lazy-loading-adaptive-forms.html|Lazy Loading Adaptive Form}
         * @example
         * guideBridge.on("elementLazyLoaded" , function(event, payload) {
         *      var component = payload.target;
         *      console.log("Panel " + component.name + " loaded");
         * }
         */
        GUIDE_ELEMENT_LAZY_LOADED : "elementLazyLoaded",

        /**
         * All GuideBridge APIs (except {@link GuideBridge#connect|connect}) require Adaptive Form to be initialized.
         * Checking the return value of this API is not necessary if guideBridge API is called only after the
         * <a href="#wait-form-ready">Form is initialized</a>
         * @summary Whether the Adaptive Form has been initialized or not
         *
         * @method
         * @memberof GuideBridge
         * @returns {boolean} true if the Adaptive Form is ready for interaction, false otherwise
         * @since 6.0
         * @instance
         */
        isConnected : function () {
            if (this._guide) {
                return true;
            }
            return false;
        },

        /**
         * Specify a callback function which is called/notified when Adaptive Form gets initialized. After Adaptive
         * Form is initialized GuideBridge is ready for interaction and one can call any API.
         *
         * The callback can also be registered after the Form gets initialized. In that case, the callback will be
         * called immediately.
         *
         * @summary Register a callback to be executed when the Adaptive Form gets initialized
         * @param handler {function} function that would be called when guideBridge is ready for interaction. The
         * signature of the callback should be
         * ```
         * function() {
         *     // app specific code here
         * }
         * ```
         * @param {object} [context] _this_ object in the callback function will point to context
         * @since 6.0
         * @instance
         * @method
         * @memberof GuideBridge
         * @example
         * guideBridge.connect(function() {
         *    console.log("Hurrah! Guide Bridge Activated");
         * })
         */
        connect : function (handler, context) {
            context = context || guideBridge;
            if (this.isConnected()) {
                // handle exceptions gracefully since it executes in our thread
                try {
                    handler.call(context);
                } catch (exception) {
                    // guide model should be initialized in bridge in connect, still adding a null check
                    if (this._guide) {
                        this._guide.logger().log(exception);
                    }
                }
            } else {
                this._guideInitHandler.handler = this._guideInitHandler.handler || [];
                this._guideInitHandler.handler.push(handler);
                this._guideInitHandler.context = this._guideInitHandler.context || [];
                this._guideInitHandler.context.push(context);
            }
        },

        _guideModelInitialized : function (e) {
            this._guide = e.guide;
        },

        /*
         *
         * Handler for guideInitialized event which is fired by Adaptive Form library after Adaptive Form Dom is initialized
         *
         * @private
         */
        _guideInitialized : function (e) {
            if (this._guideInitHandler.handler) {
                for (var i = 0; i < this._guideInitHandler.handler.length; i++) {
                    try {
                        this._guideInitHandler.handler[i].call(this._guideInitHandler.context[i]);
                    } catch (exception) {
                        // guide model should be initialized in bridge in connect, still adding a null check
                        if (this._guide) {
                            this._guide.logger().log(exception);
                        }
                    }
                }
            }
            window.guideBridge.trigger("bridgeInitializeComplete",
                guidelib.event.GuideModelEvent.createEvent(
                    "bridgeInitializeComplete",
                    guideBridge
                )
            );
        },
        _setGuideView : function (guideView) {
            this._guideView = guideView;
        },
        _guideError : function (e) {
            this._guide.logger().debug("AF", e);
        },
        _checkGuide : function (obj) {
            if (!this._guide) {
                obj.addMessage(1, "Guide Dom not Initialized", "");
                return false;
            }
            return true;
        },
        /**
         * @summary returns the version of GuideBridge library
         * @returns {string} the version of the GuideBridge library
         * @method getBridgeVersion
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        getBridgeVersion : function () {
            return this._version;
        },

        /**
         * Callback to execute when bridgeInitializeStart is triggered.
         * @callback GuideBridge~postExternalCallback
         * @param {string} name constant string `bridgeInitializeStart`
         * @param {object} data object containing the GuideBridge instance
         * @param {GuideBridge} data.guideBridge instance of GuideBridge
         * @since 6.0
         * @deprecated since 6.3 this callback is deprecated. One must do the handling in
         * {@link GuideBridge.events:bridgeInitializeStart} event
         * @memberof GuideBridge
         * @see GuideBridge#registerConfig
         * @see GuideBridge~postExternalMessageConfig
         */
        /**
         * @typedef {object} GuideBridge~postExternalMessageConfig
         * @property {GuideBridge~postExternalCallback} postExternalHandler callback to be executed when GuideBridge
         * instance is available
         * @since 6.0
         * @deprecated since 6.3 this configuration is deprecated. One must do the handling in
         * {@link GuideBridge.events:bridgeInitializeStart} event
         * @memberof GuideBridge
         * @see GuideBridge#registerConfig
         */
        /**
         * @typedef {object} GuideBridge~submitConfig
         * @property {HTMLFormElement} form During submission Adaptive Form creates a new HTMLFormElement and puts all the
         * value in that Form. One can provide an existing HTMLFormElement that will be reused for submitting the Form. The
         * action and method property of the Form element will be ignored.
         * @property {boolean} useAjax submit the form via a XMLHttpRequest rather than using a HTMLFormElement
         * instance is available
         * @property {function} submitSuccessHandler success Handler to be called post submission. This option is ignored
         * if _useAjax_ is set to false
         * @since 6.0
         * @memberof GuideBridge
         * @see GuideBridge#registerConfig
         */
        /**
         * Adaptive Form uses some default named configurations to provide its default behaviour. This configurations
         * can be modified by providing a new configuration.
         *
         * The API accepts the name of the configuration and updated configuration. Based on value of the new
         * configuration the behaviour of the Form gets changed.
         * Currently supported configurations are:
         * #### postExternalMessageConfig
         *
         * <div class="deprecated"><span class="deprecated-heading">Deprecated :</span><span> since 6.2 this
         * configuration is deprecated. Use the {@link GuideBridge.events:bridgeInitializeStart} event to do the same
         * handling</span>
         * </div>
         * In case Adaptive Form is embedded inside an iframe, this configuration allows developers to provide
         * GuideBridge Instance to parent or child windows.
         *
         * By default, GuideBridge instance is only available to the current window and to the parent window if it
         * doesn't violate the cross-origin policy. Now there may be a case when this doesn't solves the problem, then
         * one can take advantage of this configuration to extend this functionality.
         *
         * For the signature of the configuration see
         * {@link GuideBridge~postExternalMessageConfig|postExternalMessageConfig}
         * ##### Example
         * To provide the GuideBridge instance to a child window
         * ```
         * window.on("bridgeInitializeStart", function (evnt) {
         *      var gb = evnt.detail.guideBridge;
         *      gb.registerConfig("postExternalMessageConfig", {
         *          "postExternalHandler" : function(data) {
         *              // assume we have a child window with an id 'childWindowId'
         *              var childWindow = document.getElementById("#childWindowId").contentWindow;
         *              var tmpEvent = document.createEvent("CustomEvent");
         *              tmpEvent.initCustomEvent(data.name, true, true, data.data);
         *              childWindow.dispatchEvent(tmpEvent);
         *          }
         *      });
         * });
         * ```
         * #### widgetConfig
         * The configuration is used to modify the appearance of a specific Field. Adaptive Form allows developers to
         * [create custom widgets](http://helpx.adobe.com/aem-forms/6-1/custom-appearance-widget-adaptive-form.html) and
         * use them in their Forms.
         *
         * The signature of the config is
         * ```
         * { "<component-identifier> : "<widget-name>"}
         * ```
         * where `<component-identifier>` can be either the name or classname of Adaptive Form Field,
         * while widget name is the name of the jQuery Widget.
         *
         * #### submitConfig
         * To modify the default submit behaviour one can provide this configuration. The signature of the config is
         * defined {@link GuideBridge~submitConfig|below}
         * ```
         * guideBridge.registerConfig("submitConfig", {"useAjax" : true});
         * ```
         * @summary Registers user/portal specific configurations to GuideBridge
         * @returns {GuideResultObject} {@link GuideResultObject} with {@link GuideResultObject#data|data} having the
         * old configuration against the same _key_
         *
         * @param key {string} configuration name. one of the following
         * * postExternalMessageConfig
         * * widgetConfig
         * * submitConfig
         * @param {widgetConfig|GuideBridge~submitConfig|GuideBridge~postExternalMessageConfig} [config] configuration object for the configuration
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         */
        registerConfig : function (key, config) {
            var obj = new GuideResultObject();
            obj.data = this.userConfig[key];
            this.userConfig[key] = config;
            obj.completed = true;
            return obj;
        },

        customContextProperty : function (property, value) {
            var customPropertyMap = getOrElse(guidelib, "runtime.guideContext.customPropertyMap", {});
            if (_.isUndefined(value)) {
                if (_.isObject(property)) {
                    _.extend(customPropertyMap, property);
                    guidelib.runtime.guideContext.customPropertyMap = customPropertyMap;
                } else {
                    return customPropertyMap[property];
                }
            } else {
                var oldValue = customPropertyMap[property];
                customPropertyMap[property] = value;
                guidelib.runtime.guideContext.customPropertyMap = customPropertyMap;
                return oldValue;
            }
        },

        getNavigablePanel : function (somExpression) {
            return this._guideView.getSomOnNavigableAncestor(somExpression);
        },

        /**
         * Sets the value of a property for a set of {@link GuideNode} to a different value. Property must be a valid
         * writable property for that Node
         *
         * Each entry in _somList_ should have a corresponding entry in the _valueList_. Mismatch in the length of these
         * two arguments will make the function do nothing
         * @summary Modify a property for a set of Nodes
         * @method setProperty
         * @param {string[]} somList an array having someExpression for the nodes. Invalid SomExpressions and
         * the corresponding value in the _valueList_ are ignored.
         * @param {string} propertyName name of the property which has to be modified
         * @param {Array.<*>} valueList an array containing value of the _propertyName_ for each element in _somList_
         *
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         * @see GuideNode#somExpression
         * @example <caption>Modifying the value of a set of fields</caption>
         * guideBridge.setProperty(["SOM_OF_FIELD_1", "SOM_OF_FIELD_2"...... "SOM_OF_FIELD_N"]
         *                          "value"
         *                          [VALUE_1, VALUE_2 .... VALUE_N]);
         * @example <caption>Hiding a single field</caption>
         * guideBridge.setProperty(["SOM_OF_FIELD_1"]
         *                          "visibility"
         *                          [false]);
         */
        setProperty : function (somList, propertyName, valueList) {
            if (!propertyName) {
                return;
            }
            if (!_.isArray(somList) || !_.isArray(valueList)) {
                return;
            }
            if (somList.length !== valueList.length) {
                return;
            }
            var gb = this;
            _.each(somList, function (som, index) {
                var node = gb.resolveNode(som);
                if (node) {
                    node[propertyName] = valueList[index];
                } else {
                    gb._guide.logger().log("som not valid:" + som);
                }
            });
            if (!this._guide._currentContext) {
                this._guide.runPendingExpressions();
            }
        },

        /**
         * Used to retrieve the Form data as XML. The API gets the data xml synchronously/asynchronously based on the
         * _async_ option and invokes the success/error handlers passed in the arguments upon completion.
         *
         * In the success callback the {@link GuideResultObject#data|data} parameter contains the xml string.
         *
         * The success and error handlers receive {@link GuideResultObject} as input.
         * @summary Return Form data as XML.
         *
         * @param {object} options input to the getDataXML API
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object
         * @param {boolean} [options.async=true] whether to make the server call asynchronously or not. If false, the
         * browser will wait for the server to return the XML and then execute the success or error callbacks object
         * @see <a href="#guidebridge-api-usage" >GuideBridge API Usage</a>
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @example
         * guideBridge.getDataXML({
         *     success : function (guideResultObject) {
         *          console.log("xml data received" + guideResultObject.data);
         *     }
         *     error : function (guideResultObject) {
         *          console.error("API Failed");
         *          var msg = guideResultObject.getNextMessage();
         *          while (msg != null) {
         *              console.error(msg.message);
         *              msg = guideResultObject.getNextMessage();
         *          }
         *     }
         * });
         *
         * @deprecated since 6.3 this API is deprecated. Use getData API instead.
         * @param options
         */
        getDataXML : function (options) {
            guideBridge.getData(options);
        },

        /**
         * Used to retrieve the Form data as XML or JSON depending on the Schema Type. Only for JSON Schema based Forms
         * and Form Data Model based forms, the data will be in JSON format while for others, the data will be in XML format.
         * The API gets the data synchronously/asynchronously based on the
         * _async_ option and invokes the success/error handlers passed in the arguments upon completion.
         *
         * In the success callback the {@link GuideResultObject#data|data} parameter contains the data string.
         *
         * The success and error handlers receive {@link GuideResultObject} as input.
         * @summary Return Form data as XML or JSON depending on the Schema Type.
         *
         * @param {object} options input to the getData API
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object
         * @param {boolean} [options.async=true] whether to make the server call asynchronously or not. If false, the
         * browser will wait for the server to return the data (XML or JSON) and then execute the success or error callbacks object
         * @see <a href="#guidebridge-api-usage" >GuideBridge API Usage</a>
         * @method
         * @memberof GuideBridge
         * @since 6.3
         * @instance
         * @example
         * guideBridge.getData({
         *     success : function (guideResultObject) {
         *          console.log("data received" + guideResultObject.data);
         *     }
         *     error : function (guideResultObject) {
         *          console.error("API Failed");
         *          var msg = guideResultObject.getNextMessage();
         *          while (msg != null) {
         *              console.error(msg.message);
         *              msg = guideResultObject.getNextMessage();
         *          }
         *     }
         * });
         */
        getData : function (options) {
            options = options || {};

            /* Earlier this API would support boundData for getting data tro be merged in PDF. Now that flag has been renamed to dorData
             *  Earlier, boundData flag now maps to boundData for backward compatibility.
             * */
            options.dorData = options.boundData;

            var resultObject = new GuideResultObject();
            if (!options.guideState && !this._checkGuide(resultObject)) {
                options.error.call(options.context, resultObject);
                return;
            }

            this._submitInternal({
                success : function (data) {
                    var resultJson = data || {};
                    resultObject.completed = true;
                    if (options.dorData) {
                        resultObject.data = resultJson["dorDataXml"];
                    } else {
                        resultObject.data = resultJson["data"];
                    }
                    if (_.isFunction(options.success)) {
                        options.success.call(options.context, resultObject);
                    }
                },
                error : function (xhr, txtStatus, errorThrown) {
                    var msg = "Error in getData API";
                    resultObject.completed = false;
                    resultObject.addMessage(2, msg, "");
                    if (_.isFunction(options.error)) {
                        options.error.call(options.context, resultObject);
                    }
                },
                guideState : options.guideState,
                async : options.async,
                fileUploadPath : options.fileUploadPath,
                excludeFormState : options.excludeFormState || false
            });
        },

        /**
         * @summary Hides all the submit buttons present in the Adaptive Form
         *
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors|errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        hideSubmitButtons : function () {
            return this._hideElements("guideButton", "submit");
        },

        /**
         * This API is designed to evaluate the expression entered by the author.
         * This API is given only to enable Auto Save meta information use case.
         * @returns value obtained after executing the expression.
         * @method
         * @private
         * @memberof GuideBridge
         * @deprecated since 6.3 this API is deprecated
         */
        _evaluateExpression : function (expression) {
            if (this._guide) {
                var compiledExpression = this._guide._compileExpression(expression, null);
                return compiledExpression.apply(this);
            }
        },

        /**
         * Adaptive Form can be configured to save draft automatically. This property indicates whether Adaptive Form is
         * configured to save draft automatically or not.
         *
         * Enabling auto save doesn't mean that AF will create the draft when the Form is loaded. Based on the result of
         * **Auto save start expression** the draft will be created. Once the expression returns true, drafts will be
         * saved at regular interval or at specific events as configured.
         *
         * @summary Whether autoSave is enabled for this Adaptive Form or not
         * @returns {boolean} true if auto save is enabled otherwise false.
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.1 FP1
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/auto-save-an-adaptive-form.html|Saving an adaptive Form}
         */
        getAutoSaveEnabledStatus : function () {
            var _isAutoSaveEnable = false;
            // check if form is loaded or not, if loaded then check for auto save
            if (this.isConnected()) {
                _isAutoSaveEnable = this._guide.enableAutoSave;
            }
            return _isAutoSaveEnable;
        },

        /**
         * This API indicates that auto save is enabled and draft is being saved at the configured location.
         * @summary Whether Adaptive Form data is being saved as draft or not.
         * @returns {Boolean} whether autoSave has started.
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.1 FP1
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/auto-save-an-adaptive-form.html|Saving an adaptive Form}
         **/
        hasAutoSaveStarted : function () {
            return this._guide && this._guide.enableAutoSave && this._guide.autoSaveStart;
        },

        /**
         * @summary the autoSaveinfo that is stored at the guideContainer.
         * @returns {object} object contains the additional meta information stored along with form data
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.1 FP1
         * @deprecated since 6.3
         */
        getAutoSaveInfo : function () {
            return this._guide.autoSaveInfo;
        },

        /**
         * The API is used to provide extra information to be saved in Final data XML. It can also be used to retrieve
         * that information.
         *
         * If _value_ is null then the value of the _property_ is returned
         * @summary store or retrieve submission related information
         * @param {string} property name of the property against which to save the value or retrieve the value of
         * property
         * @param {string} [value] value to save.
         * @returns {*} old value of the property
         * @method
         * @since 6.1 FP1
         * @memberof GuideBridge
         * @instance
         * @deprecated since 6.3
         */
        afSubmissionInfo : function (property, value) {
            var afSubmissionInfo = guidelib.runtime.guideContext.afSubmissionInfo || {};
            if (_.isUndefined(value)) {
                return afSubmissionInfo[property];
            } else {
                var oldValue = afSubmissionInfo[property];
                afSubmissionInfo[property] = value;
                guidelib.runtime.guideContext.afSubmissionInfo = afSubmissionInfo;
                return oldValue;
            }
        },

        /**
         * @summary this API returns the globalMetaInfo stored in global context (in globalMetaInfo tab).
         * @returns {object}
         * @method
         * @memberof GuideBridge
         * @instance
         * @deprecated since 6.3
         */
        getGlobalMetaInfo : function () {
            return this._guide.globalMetaInfo;
        },

        /**
         * @summary this API returns the metadata configured for submission. Value depends on the selection of metadata
         * type, local or global.
         * @returns {Object}
         * @method
         * @since 6.1 FP1
         * @memberof GuideBridge
         * @instance
         * @deprecated since 6.3
         */
        getSubmissionMetadataInfo : function () {
            if (this._guide.submissionMetaInfo && this._guide.submissionMetaInfo.metadataselector === LOCAL_METADATA_SELECTOR) {
                // In order to maintain backward compatibility, this piece of code will always be here.
                // For the cases where metadata selection is being configured for submit actions
                return getOrElse(this._guide, "submissionMetaInfo.metadata", null);
            } else {
                //From 6.2 onwards, we are asking author to provide metadata only at one place, which is global to whole form
                // In case, metadataselector's value is "global" or not configured at all, this block will get executed
                return getOrElse(this._guide, "globalMetaInfo.metadata", null);
            }
        },

        /**
         * @summary returns the globalMetaInfo object after all the computation. This object will be set in guideContext for submission
         * @returns {object} In a format {"key 1": computation result of registered expression, "key 2":...}
         * @method
         * @since 6.1 FP1
         * @memberof GuideBridge
         * @instance
         * @example
         * {
         *   "key 1": computation result of registered expression,
         *   ...
         * }
         * @deprecated since 6.3
         */
        getComputedSubmissionMetadata : function () {
            var computedMetadata = {},
                metadata = this.getSubmissionMetadataInfo();
            if (metadata) {
                if (_.isObject(metadata)) {
                    for (var key in metadata) {
                        try {
                            var currentMetadata = JSON.parse(metadata[key]);
                            computedMetadata[currentMetadata["key"]] = this._guide._compileExpression(currentMetadata["value"])();
                        } catch (exception) {
                            if (this._guide) {
                                this._guide.logger().log(exception);
                            }
                        }
                    }
                } else if (_.isString(metadata)) {
                    try {
                        var currentMetadata = JSON.parse(metadata);
                        computedMetadata[currentMetadata["key"]] = this._guide._compileExpression(currentMetadata["value"])();
                    } catch (exception) {
                        if (this._guide) {
                            this._guide.logger().log(exception);
                        }
                    }
                }
            }
            return computedMetadata;
        },

        /**
         * The API enables auto save in Adaptive Form
         * @summary  enable auto save in Adaptive Form.
         * @param value {boolean} true to enable auto save otherwise false.
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.1 FP1
         * @see {@link GuideBridge#getAutoSaveEnabledStatus|getAutoSaveEnabledStatus}
         * @see {@link https://helpx.adobe.com/aem-forms/6-1/auto-save-an-adaptive-form.html|Auto Save an Adaptive Form}
         */
        setEnabledAutoSave : function (value) {
            this._guide.enableAutoSave = value;
        },

        /**
         * @summary Hides all the file attachment listing buttons present in the Adaptive Form
         *
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        hideFileAttachmentListingButtons : function () {
            return this._hideElements("guideListFileAttachmentButton");
        },

        /**
         * @todo: Function can change as per usecase, it can behave as a wrapper
         * where it can use the configuration provided through registerConfig and invoke any callback if required
         *
         * @returns {boolean} boolean indicating whether Adaptive Form is offline
         * @private
         */
        isOffline : function () {
            return checkAFOffline;
        },

        /**
         * function to set the status of Adaptive Form (online or offline)
         * @type {boolean}
         * @private
         */
        setIsOffline : function (value) {
            checkAFOffline = value;
        },

        /**
         * @summary Hide all the File Attachment component present in the Adaptive Form
         *
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        hideFileAttachments : function () {
            return this._hideElements("guideFileUpload");
        },

        /**
         * @summary Hides the global toolbar of the Adaptive Form.
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        hideGlobalToolbar : function () {
            var resultObject = new GuideResultObject(),
                $toolbar;

            // If guide dom not initialized, return
            if (!this._checkGuide(resultObject)) {
                return resultObject;
            }

            if (guidelib.runtime.guide.toolbar) {
                $toolbar = this._getGuideDomElement(guidelib.runtime.guide.toolbar.somExpression);
                if ($toolbar && $toolbar.length > 0) {
                    $toolbar.hide();
                }
            }

            resultObject.completed = true;
            return resultObject;
        },

        /*
         *
         * This API is designed to return all the toolbar buttons present in the Adaptive Form(except submit, save, reset and file attachment listing)
         *
         * @returns {GuideResultObject} data contains an array of all the tool bar buttons available(except submit, save, reset and file attachment listing)
         * Each element of data property is an object holding model and html property.
         * The html string does not contain any script tags, this is to avoid crosss site scripting attacks
         */
        /*
         getToolbarButtons : function(){
         var resultObject = new GuideResultObject(),
         resultData = [],
         $elem = null;
         // If guide dom not initialized, return
         if (!this._checkGuide(resultObject)) {
         return resultObject;
         }
         resultObject.completed = true;
         this.visit(function(node){
         // Check if this node is a guide button and if it resides inside a guideToolBar
         if(node.className === "guideButton" && node.parent.className === "guideToolbar"){
         if(node.type !== "submit" && node.type !== "save" && node.type !== "fileattachmentlisting" && node.type !== "next" && node.type !=="prev") {
         $elem =  this._getGuideDomElement(node.somExpression);
         // Remove the script tag from the $html, we don't support execution of Adaptive Form Scripts in parent or other domain
         // This is to avoid cross site scripting attacks
         $elem.find("script").remove();
         resultData.push({
         "model" : node,
         "html"  : $elem.html()
         });
         }
         }
         });
         resultObject.data = resultData;
         return resultObject;
         }, */

        /**
         * @summary Hides all the save buttons present in the Adaptive Form
         *
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        hideSaveButtons : function () {
            return this._hideElements("guideButton", "save");
        },

        /**
         * @summary Hides all the reset buttons present in the Adaptive Form
         *
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.3
         */
        hideResetButtons : function () {
            return this._hideElements("guideButton", "reset");
        },

        /**
         * The API can be used to retrieve the value of a specific property for a list of AF components. If the property
         * doesn't exists for a component then the corresponding value in the resulting array will be null.
         *
         * The {@link GuideResultObject#data|data} element of the return object will be an array containing the values
         * of the _property_ for each component in the list of components
         *
         * The API fails if the Form is not initiailzed
         *
         * **_Note:_** If a somExpression provided doesn't points to a valid {@link GuideNode} null is returned for
         * that element and an error message is added in the returned object
         * @summary returns the value of a specific property for a set of Adaptive Form Components
         *
         * @param {object} options input object containing the propertyName and the list of components
         * @param {string} options.propertyName name of the property whose value has to be returned
         * @param {string[]} options.somExpression list of somExpression of the components for which the value is to be
         * returned.
         *
         * @returns {GuideResultObject} The {@link GuideResultObject#data|data} member of the object contains the property
         * values
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @deprecated since 6.3
         * @see GuideNode#somExpression
         * @example
         * var result = guideBridge.getElementProperty({
         *    propertyName: "value",
         *   somExpression: ["somExpression1", "somExpression2"]
         * });
         * if (result.errors) {
         *      console.log("some som expressions were invalid");
         *      var err = result.getNextMessage();
         *     while(err != null) {
         *          //err.somExpression will point to the invalid somExpression in the Field.
         *          console.log(err.message);
         *     }
         * }
         * for(var i = 0; i< result.data.length; i++) {
         *      console.log(result.data[i]);
         * }
         */
        getElementProperty : function (options) {
            var somExpressions = options.somExpressions;
            var propertyName = options.propertyName;
            var resultObject = new GuideResultObject();
            if (!this._checkGuide(resultObject)) {
                return resultObject;
            }
            resultObject.data = [];
            for (var i = 0; i < somExpressions.length; i++) {
                var element = this.resolveNode(somExpressions[i]);
                if (element == null) {
                    resultObject.addMessage(0, "No element " + somExpressions[i] + " exists", somExpressions[i]);
                    resultObject.data.push(null);
                } else {
                    resultObject.completed = true;
                    resultObject.data.push(element[propertyName]);
                }
            }
            return resultObject;
        },

        _getGuideDomElement : function (somExpression, option) {
            if (this._guideView) {
                return this._guideView._getGuideDomElement(somExpression, option);
            } else {
                return null;
            }
        },

        getTempPath : function () {
            return "/tmp/fd/af/" + this._getUUID();
        },

        /**
         * File Attachment object
         * @typedef {object} GuideBridge~FileAttachementObject
         * @property {string} name name of the uploaded File
         * @property {string} path path of the uploaded File
         * @memberof GuideBridge
         * @since 6.0
         */
        /**
         * Success callback that is called from {@link GuideBridge#getFileAttachmentsInfo} with the list of File
         * Attachments
         * @callback GuideBridge~FileAttachmentInfoHandler
         * @param {GuideBridge~FileAttachementObject[]} fileAttachementList list of file attachement objects uploaded
         * in the Form
         */
        /**
         * The API provides a list containing File Names and File URLS for the Files Attached by the user using the
         * File Attachment component. The API is a asynchronous API and takes success handler which is called with
         * the list of File Names and URLs.
         *
         * @param {object} options Object containing the callback which will be invoked with the result of this API
         * @param {function} options.success success callback which will be invoked. The signature of the callback should
         * match the signature of {@link GuideBridge~FileAttachmentInfoHandler|FileAttachmentInfoHandler}
         * @param {object} [options.context] _this_ parameter in the success handler will point to this object
         *
         * @example  <caption>Example usage of the getFileAttachmentsInfo API</caption>
         * guideBridge.getFileAttachmentsInfo({
         *        success:function(list) {
         *             for(var i = 0; i< list.length; i++) {
         *                  console.log(list[i].name + " "+ list[i].path);
         *             }
         *        }
         * });
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         */
        getFileAttachmentsInfo : function (options) {
            var fileAttachmentsList = [],
                list;

            this._getFileAttachmentsList(fileAttachmentsList);
            function collectFileUrls(event) {
                list = [];
                //TODO: need to modularize collectFileUrs()
                // here this is the context of the function who calls it
                _.each(this.attachments, function (att) {
                    list.push({name : att.split("/")[1], path : this.fileUrl + "/" + att});
                }, this);
                if (this.options.success) {
                    this.options.success.call(this.options.context, list);
                }
            }

            this._getGuideAttachments(fileAttachmentsList, this.getTempPath(), collectFileUrls, options);
        },

        /**
         *
         * @param fileAttachmentsList File Attachments Models in the form
         * @param fileUploadPath server url where to upload the file
         * @param {function} callback callback if files are uploaded, the callback will be passed an object having the following
         *        syntax
         *        {
         *           attachments : array containing the file names,
         *           fileUrl : array containing the file urls,
         *           fileAttachmentsList : fileAttachmentsList,
         *           options : options object passed to this function,
         *           obj : value of obj key passed in the options object
         *        }
         * @param options options to be passed to the callback
         * @private
         * @memberof GuideBridge
         * @since 6.0
         */
        _getGuideAttachments : function (fileAttachmentsList, fileUploadPath, callback, options) {

            var fileDoms = [],
                fileNames = [],
                fileUrl = null,
                didSubmit = false,
                contextRoot = this._getContextRoot(),
                fileNameDomMap;

            // In the case of draft, url comes with context root. Need to remove it so that correct
            // value gets stored in model
            if (contextRoot) {
                if (fileUploadPath.indexOf(contextRoot) === 0) {
                    fileUploadPath = fileUploadPath.substring(contextRoot.length);
                }
            }
            // File attachment list is an array containing the list of file attachments
            // We need to fetch the fileNameDomMap even when there's no fileAttachmentsList as there can be
            // lazy loaded file attachment models as well.
            fileNameDomMap = this._juiceOutNameAndFileDomMap(fileAttachmentsList);
            fileDoms = fileNameDomMap.fileDom;
            fileNames = fileNameDomMap.fileName;
            if (fileDoms.length > 0) {
                // since there can be a dom element which is null, in case of draft reload, get the first
                // non null file dom
                var firstNonNullFileDom = _.indexOf(fileDoms, _.find(fileDoms, function (item) {
                    return item !== null;
                }));
                // fileUploadPath doesn't contain the context path and hence we need to to pass the baseURL
                // FileUploader takes a _getUrl option which is baseUrl/contextPath
                if (firstNonNullFileDom !== -1) {
                    var uploaderPluginName = guideBridge.userConfig.uploaderPluginName || "adobeFileUploader";
                    fileUrl = fileDoms[firstNonNullFileDom][uploaderPluginName]("uploadFile", {
                        'fileName' : fileNames,
                        'fileDom' : fileDoms,
                        'fileUploadPath' : fileUploadPath,
                        'multiple' : true,
                        _getUrl : guideBridge._getUrl("")
                    });

                    // The file url returned by file upload widget can contain context root.
                    // Remove it so that correct value gets stored in model.
                    if (contextRoot) {
                        if (fileUrl.indexOf(contextRoot) === 0) {
                            fileUrl = fileUrl.substring(contextRoot.length);
                        }
                    }

                    fileDoms[firstNonNullFileDom].one("adobeFileUploader.multipleFileUploaded",
                        $.proxy(callback, {
                            "attachments" : fileNames,
                            "fileUrl" : fileUrl,
                            "fileAttachmentsList" : fileAttachmentsList,
                            "options" : options
                        })
                    );
                    didSubmit = true;
                }
            }
            if (!didSubmit) {
                // if there are no files attached, still call the callback to submit the json contents
                // if there is only one file attachment component with no files, in this case else is important
                callback.apply({
                    "attachments" : fileNames,
                    "fileUrl" : fileUrl,
                    "fileAttachmentsList" : fileAttachmentsList,
                    "options" : options
                });
            }
        },
        /**
         * Iterates over all the components in the Adaptive Form and invokes its {@link GuideNode#visit|visit} method
         * passing the _callback_ to the API.
         *
         * @summary Traverse all the components in the Adaptive Form and invoke callback function for each of the
         * component
         * @param {function} callback Function to be called for every Adaptive Form Component present
         * in the Form. The signature of the callback matches the signature of
         * {@link GuideNode~VisitorCallback|VisitorCallback}
         * @param {object} [context=window] _this_ object in the callback will point to this object
         *
         * @example <caption>Creating a list of all components having name <i>testName</i></caption>
         * var myList = []
         * guideBridge.visit(function(cmp) {
         *     if(cmp.name === "testName") {
         *          myList.push[cmp];
         *     }
         * }};
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         */
        visit : function (callback, context) {
            this._guide.visit(callback, context || window);
        },

        /**
         *
         * Hides the elements of the specified class name.
         * In case of guideButton, it checks for type too, if no type is specified in "guideButton", then that button
         * cannot be made hidden
         *
         * @param className String representing the classname of the node
         * @param type [optional] type will be used only if the classname is "guideButton"
         * @private
         */
        _hideElements : function (className, type) {
            var resultObject = new GuideResultObject();
            // If guide dom not initialized, return
            if (!this._checkGuide(resultObject)) {
                return resultObject;
            }
            resultObject.completed = true;
            this.visit(function (node) {
                // if the class name is guide button only the use the type
                if (node.className === "guideButton") {
                    if (node.type === type) {
                        node.visible = false;
                    }
                } else {
                    // else just compare the classname and hide it
                    if (node.className === className) {
                        node.visible = false;
                    }
                }
            });
            return resultObject;
        },

        /**
         * In Adaptive Form there is a summary component to show the summary of submission. This API hides the parent
         * panel of the summary component. If the component is not present inside the Form, this operation doesn't do
         * anything
         * @summary Hides the panel that contains the summary component.
         *
         * @returns {GuideResultObject} the data property of GuideResultObject would be undefined. The API will fail if
         * the Form is not initialized which would be indicated by the {@link GuideResultObject#errors} property.
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        hideSummaryPanel : function () {
            var resultObject = new GuideResultObject();
            // If guide dom not initialized, return
            if (!this._checkGuide(resultObject)) {
                return resultObject;
            }
            resultObject.completed = true;
            this.visit(function (node) {
                if (node.className === "guideNode" && node.jsonModel['sling:resourceType'] === "fd/afaddon/components/summary") {
                    node.panel.visible = false;
                }
            });
            return resultObject;
        },

        _getFileAttachmentsList : function (fileAttachmentsList) {
            if (_.isUndefined(fileAttachmentsList)) {
                fileAttachmentsList = [];
            }
            this.visit(function (node) {
                if (node.className === "guideFileUpload") {
                    fileAttachmentsList.push(node);
                }
            });
            return fileAttachmentsList;
        },

        /**
         * @summary the captchaData which will be submitted to server for validation purposes.
         * @param captchaModel
         * @returns {object} object contains the captchaData which includes captcha service provider name, its SOM exp and
         * data coming from OOTB/third-party captcha widget.
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.3
         */
        _getCaptchaData : function (captchaModel) {
            if (captchaModel) {
                return {
                    serviceType : captchaModel.captchaService,
                    somExpression : captchaModel.somExpression,
                    validationMessage : captchaModel.validateExpMessage,
                    mandatoryMessage : captchaModel.mandatoryMessage,
                    data : captchaModel.value
                };
            }
            return {};
        },

        /**
         * This function returns the additional action Field information that is required during submit.
         *
         * @returns {object} object having the action Field information.
         * @memberof GuideBridge
         */
        _getAdditionalSubmitInfo : function () {
            var additionalSubmitInfo = {},
                actionFieldDiv = $("#actionField");
            var thankYouPage = this._getThankYouPageFromConfig();
            if (typeof thankYouPage === "string") {
                document.getElementById(":redirect").value = thankYouPage;
            }
            var actionFields = actionFieldDiv.find('input')
                .each(function () {
                    additionalSubmitInfo[$(this).attr("name")] = $(this).val();
                    if ($(this).attr("name") == "_guideValueMap" && $(this).val() == "yes") {
                        var guideKeyValue = {};
                        window.guideBridge._guide._collectValues(guideKeyValue);
                        additionalSubmitInfo['_guideValuesMap'] = JSON.stringify(guideKeyValue);
                    }
                });
            return additionalSubmitInfo;
        },

        /**
         * Gets the guideDom based on whether reducedJSON option is true or not.
         * If reducedJSON is true, only the white-listed properties are included.
         *
         * @returns {object} guideDom
         * @memberof GuideBridge
         */

        _getGuideDom : function (options) {
            var guideDom;
            if (options.reducedJSON) {
                guideDom = guideBridge._guide._getReducedJSON();
            } else {
                guideDom = guideBridge._guide.jsonModel;
            }
            return guideDom;
        },

        /**
         * Creates the guideState and the liveXml.
         *
         * @param options {object} options should contain a GuideResultObject [{obj:"<GuideResultObject type>"}]
         * @memberof GuideBridge
         * Steps performed by the function -
         * 1) creates the xfaState
         * 2) creates the guideState that consists of guideDom, guideContext and additionalSubmitInfo
         * 3) creates guideLiveData
         * 4) adds xfaState and guideLiveData to the guideState
         *
         * @private
         */
        _createGuideStateAndLiveXml : function (options) {
            var obj = new GuideResultObject();
            // add the guideResultObject to options so that it can be passed to the success handler
            options.obj = obj;

            if (!this._checkGuide(obj)) {
                return;
            }

            obj.data = {};
            var xfaState = null;
            if (this._isXfaGuide() && this._isValidXFAGuide()) {
                var xfaResultObject = null;
                if (options.reducedJSON) {
                    //If reduceJson is asked, then xfaState should also be reduced by passing the diff and bSubmit flag to true
                    xfaResultObject = window.formBridge.getFormState(true, true);
                } else {
                    xfaResultObject = window.formBridge.getFormState();
                }
                if (xfaResultObject.errors) {
                    guideBridge._guide.logger().log("Error in getting Xfa State:" + JSON.stringify(xfaResultObject.getNextMessage()));
                    alert(guidelib.util.getLocalizedMessage("AF", guidelib.i18n.LogMessages["AEM-AF-901-001"]));
                }
                xfaState = xfaResultObject.data;
            }

            var guideDom = guideBridge._getGuideDom(options);

            //adding additionalSubmitInfo in the guideState.
            //additionalSubmitInfo contains the information about action fields.
            var additionalSubmitInfo = guideBridge._getAdditionalSubmitInfo();
            //set the updated file attachment map in the customPropertyMap
            guideBridge.customContextProperty("fileAttachmentMap", JSON.stringify(this.getFileAttachmentMap()));
            var guideState = {
                guideDom : guideDom,
                //save renderContext in guide state to enable deferred submit even if guide is not open
                guideContext : guidelib.runtime.guideContext,
                additionalSubmitInfo : additionalSubmitInfo
            };

            if (guideBridge._guide.allLazyChildren.length > 0) {
                guidelib.internal.liveDataUtils.updateLiveData();
                var listOfDirtyPanels = guidelib.internal.GuideDirtyMarkerAndVisitor.flattenDirtyPanelMapToCSV();
                if (listOfDirtyPanels.length > 0) {
                    this.afSubmissionInfo("afDraft", listOfDirtyPanels);
                }
                // save live xml & xfa state as xml for restoration of lazy model on 'restore'
                guideState.guideLiveData = guidelib.internal.liveDataUtils.getLiveDataStr();
                if (this._isXfaGuide() && this._isValidXFAGuide()) {
                    function saveXfaXml(xfaResultObj) {
                        if (!xfaResultObj.errors && xfaResultObj.completed) {
                            xfaState.currentContext = {'data' : xfaResultObj.data};
                        }
                    }

                    formBridge.getDataXML({"success" : saveXfaXml}); // currently xfa restore relies on formBridge.getDataXML being sync
                }
            }
            obj.data.guideState = guideState;
            if (xfaState) {
                obj.data.guideState.xfaState = xfaState;
            }

        },

        /**
         * Adaptive Form stores its state in the form of JSON. The Files attached in the component are uploaded
         * onto the server and their paths are returned in the JSON state except in certain conditions mentioned below.
         * The API is an asynchronous call which calls the success and error handlers with the data.
         *
         * In the below mentioned scenarios the file will not be uploaded
         * * User doesn't have **write permissions** on the _fileUploadPath_ provided
         * * The _fileUploadPath_ property doesn't point to a node of type _**sling:Folder**_
         *
         * @summary Retrieve the current state of Adaptive Form as json string
         * @param {object} options Input object containing the callbacks that will be invoked
         * to provide the result of the API
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success.
         * {@link GuideResultObject#errors|errors} property as false.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object
         * @param {string} [options.fileUploadPath] controls whether the files in the File Attachment component have to be
         * uploaded or not. If _fileUploadPath_ is non null, only then file gets uploaded and the model's value is
         * updated with the file url
         *
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         */
        getGuideState : function (options) {

            var fileAttachmentsList = [];

            // walk through the model to get the list of file attachment components
            // do this only and only if login!= anonymous
            if (!guideBridge._disablePreview()) {
                this._getFileAttachmentsList(fileAttachmentsList);
            }

            if (!guidelib.runtime.progressive && guideBridge.isGuideLoaded(true)) {
                this.customContextProperty("lastFocusItem", this._guideView.getSomOnNavigableAncestor(this._guideView._previousFocusItemSom));
                this.afSubmissionInfo("lastFocusItem", this._guideView.getSomOnNavigableAncestor(this._guideView._previousFocusItemSom));
            }

            // Let's add all the submission info
            // Add the computed meta data field
            this.afSubmissionInfo("computedMetaInfo", guideBridge.getComputedSubmissionMetadata());
            this.afSubmissionInfo("excludeFromDoR", guideBridge._guide._getExcludeFromDorMap());

            // Add signers to af submission info
            this.afSubmissionInfo("signers", guideBridge._guide._getSigners());

            // Walk through the list of file Attachment components
            // and update the value of every item
            // Get the list of file Attachments
            if (options.fileUploadPath && !guideBridge._disablePreview()) {
                this._getGuideAttachments(fileAttachmentsList, options.fileUploadPath, window.guideBridge._collectFileUrls, options);
            } else {
                this._createGuideStateAndLiveXml(options);
                if (options.success) {
                    options.success.call(options.context, options.obj);
                }
            }

        },

        /**
         * Validates the Adaptive Form or it's specific panel and return the validation status. The API also moves
         * focus to first invalid element
         * @summary validate the entire Form or a component in Adaptive Form
         * @param  {Field~ValidationError[]} errorList Input must be an empty array. The array will be filled with list
         * of Adaptive Form Components that failed validation.
         * @param  {string} [somExpression] SOM Expression of the Guide Node for which validation should be triggered.
         * If not provided, it would validate the entire Adaptive Form
         * @param {boolean} [setFocus=true] If true, set focus to the first invalid element.
         * @returns {boolean} true if the component/form was valid, false otherwise
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @see Field#validate
         * @see Panel#validate
         */
        validate : function (errorList, somExpression, setFocus) {
            var guideNode = null,
                isFocusEnabled = _.isUndefined(setFocus) ? true : setFocus,
                ec = guidelib.util.ErrorConstants,
                validationContext;
            //  get Json of all the dirty , non visited (templateJson missing from cache)
            if (this._guide.allLazyChildren.length > 0) {
                this._guide.guideLazyUtil.putDirtyToTemplateCacheIfMissing();
            }
            if (somExpression) {
                guideNode = this.resolveNode(somExpression);
                // how to know if the panel is navigable from the model. We do not bring the nonNavigable property ?
                if (guideNode instanceof guidelib.model.GuidePanel) {
                    validationContext = ec.CONTEXT_NAVIGATION;
                }
            } else {
                guideNode = this._guide;
                validationContext = ec.CONTEXT_SUBMISSION;
            }
            this.setValidationContext(validationContext);
            var status = false;
            if (!errorList) {
                errorList = [];
            }
            status = guideNode.validate(errorList);

            try {
                // there can be errors in the user script, hence handling the exception gracefully, and resetting the global error state properly
                this._guide._triggerOnBridge("validationComplete", this._guide, status, "", errorList);
                if (!status && isFocusEnabled) {
                    var errorSom = errorList[0]["som"];

                    guideBridge._guide.on(guidelib.event.GuideModelEvent.LAZY_LOADED, function () {
                        var errorField = guideBridge.resolveNode(errorSom);
                        if (errorField) {
                            errorField.validate();
                        }
                    }, {});

                    this.setFocus(errorSom);

                    guideBridge._guide.off(guidelib.event.GuideModelEvent.LAZY_LOADED);
                }

            } catch (exception) {
                this._guide.logger().log(exception);
            } finally {
                // since the errors have been published reset the state back to normal
                //guidelib.runtime.errorManager.setGlobalError(false);
                this.unsetValidationContext(validationContext);
                return status;
            }

        },

        // todo: submit behaviour should make sure that if the value of file upload
        /**
         * Adaptive Form can be restore in three ways
         * * by passing the JSON data obtained from {@link GuideBridge#getGuideState}. This can be done by setting
         * _**data**_ property .
         * * by passing a URL pointing to a resource that returns JSON/XML data that should be used. This can be done by setting
         * _**dataRef**_ property. The data can be obtained by calling the
         * {@link GuideBridge#getData|getData} API.
         * * by passing a URL pointing to a resource that returns JSON data obtained from {@link GuideBridge#getGuideState}.
         * This can be done by setting _**guideStatePathRef**_ property .
         *
         * When restoring from dataRef, only values and other properties, that are dependant on value, are restored. For
         * example, If a Field was hidden based on the click of a Button then
         * when restoring from data XML/JSON the Field will not remain hidden.
         *
         * **NOTE:** The _data_, _dataRef_ and _guideStatePathRef_ must not be null simultaneously and only one property
         * must be specified. Specifying more than one can lead to undesired results.
         * @summary restore/prepopulate the state of Adaptive Form from an earlier saved state
         * @param {object} options object containing the callbacks to be invoked on
         * success/failure and data from where to restore the object.
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success
         * {@link GuideResultObject#errors|errors} property as false.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object.
         * @param {object} [options.data] It must be the value of the {@link GuideResultObject#data|data} property passed to
         * the _success_ handler of {@link GuideBridge#getGuideState|getGuideState} API.
         * @param {string} [options.dataRef] URL pointing to the data XML/JSON.
         * @param {string} [options.guideStatePathRef] URL pointing to the JSON state of Adaptive Form.
         *
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @example <caption>Restoring from JSON data</caption>
         * var jsonData;
         * guideBridge.getGuideState({
         *      success : function (guideResultObj) {
         *          jsonData = guideResultObj.data;
         *      },
         *      error : function (guideResultObj) {
         *          // log error
         *      }
         * });
         *
         * // after some time or on click of a button or reloading the page
         * guideBridge.restoreGuideState({
         *      guideState : jsonData.guideState,
         *      error : function (guideResultObject) {
         *          // log the errors
         *      }
         * })
         *
         * @example <caption>Restoring from data XML/JSON</caption>
         * guideBridge.getData({
         *      success : function (guideResultObj) {
         *          var data = guideResultObj.data;
         *          //post the data to a server that saves it at say http://abc.com/my/data.xml
         *          //or http://abc.com/my/data.json
         *      },
         *      error : function (guideResultObj) {
         *          // log the errors
         *      }
         * });
         *
         * // after some time or on click of a button or reloading the page
         * guideBridge.restoreGuideState({
         *      dataRef : "http://abc.com/my/data.xml",
         *      error : function (guideResultObject) {
         *          // log the errors
         *      }
         * })
         *
         * @example <caption>Restoring from URL to a JSON</caption>
         * guideBridge.getGuideState({
         *      success : function (guideResultObj) {
         *          var json = guideResultObj.data;
         *          //post the JSON to a server that saves it at say http://abc.com/my/data.json
         *      },
         *      error : function (guideResultObj) {
         *          // log the errors
         *      }
         * });
         *
         * // after some time or on click of a button or reloading the page
         * guideBridge.restoreGuideState({
         *      guideStatePathRef : "http://abc.com/my/data.json",
         *      error : function (guideResultObject) {
         *          // log the errors
         *      }
         * })
         **/
        restoreGuideState : function (options) {
            var parameters,
                path;
            if (options && options.dataRef) {
                parameters = {"dataRef" : options.dataRef};
            } else if (options && options.guideStatePathRef) {
                parameters = {"guideStatePathRef" : options.guideStatePathRef};
            }
            // if parameters have DataRef or guideStatePathRef, a recursive call is made to restoreGuideState.
            if (parameters) {
                path = window.guideBridge.getGuidePath();
                path = path + ".guidejson";
                $.ajax({
                    url : path,
                    type : "GET",
                    async : false,
                    cache : false,
                    data : parameters,
                    success : function (response) {
                        //case where section information exist in guideState
                        if (response.guideState && response.guideState.guideContext
                            && response.guideState.guideContext.customPropertyMap
                            && response.guideState.guideContext.customPropertyMap.sections
                            && response.guideState.guideContext.customPropertyMap.sections.length > 0) {
                            // todo: add safe check for string vs array
                            window.guideBridge.customContextProperty.sections = response.guideState.guideContext.customPropertyMap.sections;
                        }
                        //passing the options again, but with DataRef or guideStatePathRef removed from it.
                        window.guideBridge.restoreGuideState(_.extend(
                            {},
                            options,
                            {
                                guideState : response.guideState,
                                dataRef : undefined,
                                guideStatePathRef : undefined
                            }
                        ));
                        if (guidelib.runtime.progressive) {
                            // Initialize the progressive
                            // We are not directly playing json on the model, since may be the json of entire progressive is not brought upfront
                            // Only in case of static service, we bring the entire json, hence creating model if not present
                            guidelib.runtime.progressive._initializeSectionModelAndPlayJson(window.guideBridge.customContextProperty.sections);

                            // Now render the last section
                            guidelib.runtime.progressive.renderLastSection();
                        }
                    },
                    error : function (response) {
                        window.guideBridge._guide.logger().log("Error: " + response);
                    }
                });
                return;
            }

            /*
             * We have to merge the runtime guideContext with the guideContext passed in the guideState
             * so that no custom properties that were set in the guideState.guideContext are ignored.
             */
            guidelib.runtime.guideContext = guidelib.runtime.guideContext || {};
            if (!_.isUndefined(options.guideState.guideContext)) {
                /* Runtime custom property map is set by external application and hence, shallow copy will set the value
                 * as set externally. If no value was set, the guideState custom property map keys stay.
                 */
                _.extend(options.guideState.guideContext.customPropertyMap, guidelib.runtime.guideContext.customPropertyMap);
            }
            _.extend(guidelib.runtime.guideContext, options.guideState.guideContext);

            if (!this._guide) {
                this.storage = {};
                this.storage.guideState = options.guideState;
                //NOCHECKMARX - This is error callback to be provided by the user of this API.
                this.storage.error = options.error;
                this.storage.success = options.success;
                this.storage.context = options.context;
            } else {
                this._playGuideJson(options);
                // Trigger the event
                // If guide has restore state, call sync guide node to html
                // Case 1: If this is called before view gets initialized, there would be no listener present, hence nothing would happen
                // Case 2: If it is called after view gets initialized(using restore guide state in mobile workspace), then the model would sync to view
                // using this event
                // If view is initialized, which means a listener would to MODEL_REFRESH would be set, hence just trigger the event for execution
                if (this._guideView) {
                    this._guide._triggerEvent(guidelib.event.GuideModelEvent.MODEL_REFRESH, "jsonModel", null, null);
                }
            }

        },

        /**
         * Adaptive Form can set data in three ways:
         * * by passing the JSON data obtained from {@link GuideBridge#getGuideState}. This can be done by setting
         * _**data**_ property .
         * * by passing a URL pointing to a resource that returns data JSON/XML that should be used. This can be done by setting
         * _**dataRef**_ property. The data can be obtained by calling the
         * {@link GuideBridge#getData|getData} API.
         * * by passing a URL pointing to a resource that returns JSON data obtained from {@link GuideBridge#getGuideState}.
         * This can be done by setting _**guideStatePathRef**_ property .
         *
         * When setting data from dataRef, only values and other properties, that are dependant on value, are set. For
         * example, If a Field was hidden based on the click of a Button in the data passed then
         * when setting data from XML/JSON the Field will not remain hidden.
         *
         * **NOTE:** The _data_, _dataRef_ and _guideStatePathRef_ must not be null simultaneously and only one property
         * must be specified. Specifying more than one can lead to undesired results.
         * @summary Populate the Adaptive Form from the data.
         * @param {object} options object containing the callbacks to be invoked on
         * success/failure and data from where to restore the object.
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success
         * {@link GuideResultObject#errors|errors} property as false.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object.
         * @param {object} [options.data] It must be the value of the {@link GuideResultObject#data|data} property passed to
         * the _success_ handler of {@link GuideBridge#getGuideState|getGuideState} API.
         * @param {string} [options.dataRef] URL pointing to the data JSON/XML.
         * @param {string} [options.guideStatePathRef] URL pointing to the JSON state of Adaptive Form.
         *
         * @method
         * @memberof GuideBridge
         * @since 6.3
         * @instance
         * @example <caption>Setting data from JSON data</caption>
         * var jsonData;
         * guideBridge.getGuideState({
         *      success : function (guideResultObj) {
         *          jsonData = guideResultObj.data;
         *      },
         *      error : function (guideResultObj) {
         *       // log the errors
         *      }
         * });
         *
         * guideBridge.setData({
         *      guideState : jsonData,
         *      error : function (guideResultObject) {
         *          // log the errors
         *      }
         * })
         *
         * @example <caption>Setting data from XML/JSON</caption>
         * guideBridge.getData({
         *      success : function (guideResultObj) {
         *          var data = guideResultObj.data;
         *          //post the XML/JSON to a server that saves it at say http://abc.com/my/data.xml
         *          //or http://abc.com/my/data.json
         *      },
         *      error : function (guideResultObj) {
         *          // log the errors
         *      }
         * });
         *
         * guideBridge.setData({
         *      dataRef : "http://abc.com/my/data.xml",
         *      error : function (guideResultObject) {
         *          // log the errors
         *      }
         * })
         *
         * @example <caption>Setting data from URL to a JSON</caption>
         * guideBridge.getGuideState({
         *      success : function (guideResultObj) {
         *          var json = guideResultObj.data;
         *          //post the JSON to a server that saves it at say http://abc.com/my/data.json
         *      },
         *      error : function (guideResultObj) {
         *          // log the errors
         *      }
         * });
         *
         * guideBridge.setData({
         *      guideStatePathRef : "http://abc.com/my/data.json",
         *      error : function (guideResultObject) {
         *          // log the errors
         *      }
         * })
         **/
        setData : function (options) {
            guideBridge.restoreGuideState(options);
        },

        /*
         * @private
         */
        _getStorage : function () {
            var storage = null;
            if (this.storage) {
                // Get the storage
                storage = this.storage;
                this.storage = null;
            }
            return storage;
        },

        getGuideContext : function () {
            var obj = new GuideResultObject();
            obj.data = jQuery.extend(true, {}, (window.guidelib ? window.guidelib.runtime.guideContext : null));
            return obj;
        },

        _getContextRoot : function () {
            return this.userConfig["contextPath"];
        },

        _updateAjaxUrl : function (baseUrl) {
            if (this.hostName === "server") {
                $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
                    // 'Rebase' the URL if required.
                    var thisUrl = options.url;
                    if ((thisUrl.lastIndexOf('http://', 0) !== 0) && (thisUrl.lastIndexOf('https://', 0) !== 0)) {
                        // thisUrl is relative.
                        // thisUrl may or may not begin with slash
                        // encoding taken care by the ajax call
                        if (thisUrl.indexOf("/") === 0) {
                            // if begins with slash
                            thisUrl = baseUrl + thisUrl;
                        } else {
                            thisUrl = baseUrl + "/" + thisUrl;
                        }
                        options.url = thisUrl;
                    }
                });
            }
        },

        _getUrl : function (url) {
            var baseUrl = this.userConfig["baseUrl"],
                contextPath = this.userConfig["contextPath"];
            if (baseUrl) {
                return baseUrl + url;
            } else if (contextPath && contextPath !== "/" && url.indexOf(contextPath) !== 0 && (url.length === 0 || url.indexOf("/") === 0)) {
                //if url does not have contextPath and starts with /, pre-pend contextPath
                // Also url.length check because I need to pass "" to getUrl and get context path
                return contextPath + url;
            }
            return url;
        },

        _getGuidePathUrl : function (urlSuffix, guidePath) {
            // guidePath here refers to the path got from json state of guide
            // we use this path, if there is no guidePath set in guidelib.runtime.guideContext, cases where guide is not initialized but
            // guideBridge is present
            var path = guidePath || this.getGuidePath(),
                url = path + (urlSuffix || "");
            return this._getUrl(url);
        },

        getGuidePath : function () {
            var guideContext = this.getGuideContext().data;
            if (guideContext && guideContext.hasOwnProperty("guidePath")) {
                return guideContext["guidePath"];
            }
            return null;
        },

        /**
         * @summary Given a somExpression, return the {@link GuideNode} having the same somExpression.
         * @param {string} somExpression somExpression of the Adaptive Form component
         * @returns {GuideNode} GuideNode matching the som expression or null if not found
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @see GuideNode#somExpression
         */
        resolveNode : function (somExpression) {
            return this._guide.resolveNode(somExpression);
        },
        /*
         * Internal API. Should be used carefully.
         */
        _resolveId : function (id) {
            var node = this._guide._modelTemplateCacheStore.getModel(id);
            return node;
        },

        /**
         * Invokes {@link Field#resetData} API for all the Fields inside the Form to reset their values to default
         * @summary Reset the values of all the Fields to their default values.
         *
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        reset : function () {
            if (window.xfalib && window.xfalib.runtime && window.xfalib.runtime.xfa) {
                var xfa = window.xfalib.runtime.xfa;
                xfa.host.resetData();
            }
            this._guide.resetData();

            if (guidelib.internal.liveDataUtils.isLiveDataInitialized()) {
                guidelib.internal.liveDataUtils.updateLiveData();
            }

            var guideDirtyMarkerAndVisitor = guidelib.internal.GuideDirtyMarkerAndVisitor;
            guideDirtyMarkerAndVisitor.visitMap = guideDirtyMarkerAndVisitor._createMapFromFromList(this._guide.allLazyChildren, 0);
        },

        _getPreviousFocus : function () {
            return this._guideView._previousFocusItemSom;
        },

        /**
         * Returns the somExpression of the current {@link Panel} or current {@link Field} in Focus. The API can also
         * be used to get the somExpression of the Navigable Panel that contains the current Element in Focus.
         *
         * @summary return the somExpression of the {@link Panel} or {@link Field} that is currently in focus
         * @param {object} options configuration to be passed to the API to get the desired result
         * @param {?string} [options.focusOption] Currently the following value of this option are supported
         * * `navigablePanel`: if one wants to get the somExpression of the Navigable Panel
         * @returns {string} somExpression of Adaptive Form component representing the field or panel.
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         * @see {GuideNode#somExpression}
         * @example
         * guideBridge.getFocus({"focusOption": "navigablePanel"})
         */
        getFocus : function (options) {
            var focusOption;
            if (_.isUndefined(options)) {
                return this._guideView.currentFocusItemSom;
            }
            if ((focusOption = getOrElse(options, "focusOption", null)) === "navigablePanel") {
                return this._guideView._lastFocussedPanelForNonActionFields;
            }
            this._guide.logger().log("Invalid Focus option.", focusOption);
        },

        /**
         * The API is equivalent to calling
         * `guideBridge.setFocus(options.somExpression, options.focusOption, options.runCompletionScript)`
         * @summary An alternate signature to the {@link GuideBridge#setFocus|setFocus} API
         * @method setFocus
         * @memberof GuideBridge
         * @instance
         * @since 6.1 FP1
         * @param {object} options options passed to the API
         * @param {string} options.somExpression somExpression to set the focus to
         * @param {string} options.focusOption item inside the Panel to focus to
         * @param {string} options.runCompletionScript whether to run the completion script or not.
         * @return {boolean} true if the focus was set successfully otherwise false.
         */

        /**
         * In Adaptive Form one can focus a Field/Panel. Setting focus on a Panel means setting focus to its first
         * child. This can be controlled using the _focusOption_ provided in this API.
         *
         * The API provides two mechanism to focus a Field/Panel.
         * * **Direct** : By providing the somExpression of the Field/Panel. If the somExpression of Panel is provided,
         * then based on the focusOption one of its child (or their child) is set to Focus
         * * **Indirect** : By providing an item's relative position inside a Panel, first or last item inside of a
         * Panel, sibling of current focussed Item of a Panel, etc. If the item is a Panel then the First Item of
         * that Panel (if that is again a Panel, this process continues until a Field is found) is activated.
         *
         * The first way is trivial, by providing the _somExpression_ of a {@link Field} to the API, the focus will be
         * set to the Field.
         *
         * If that Field is inside a Panel that is not currently open because of tabbed/wizard navigation, then that tab
         * would be opened and focus would be set to the Field/Panel.
         *
         * The API can also execute the
         * [completion expression](https://helpx.adobe.com/aem-forms/6-1/adaptive-form-expressions.html#main-pars_header_8)
         * of the current Panel and only if the expression returns true set focus to the required element.
         *
         * **Note:**
         * * If _focusOption_ is either of nextItemDeep or prevItemDeep then _somExpression_ parameter must not be
         * passed. Otherwise the API will throw an exception
         * * If _somExpression_ points to a {@link Field} and _focusOption_ is not _nextItemDeep_ or _prevItemDeep_ then
         * _focusOption_ is ignored.
         *
         * @summary Sets focus to a {@link Field} or {@link Panel}
         * @param {?string} somExpression SOM Expression of the Adaptive Form Field or Panel which has to be activated.
         * @param {string} [focusOption=firstItem] The option provides the mechanism to focus onto an sibling of the
         * current active item.
         * * **_firstItem_** - Focuses to the first focusable item of the Panel whose _SOM Expression_ is provided
         * * **_lastItem_** - Focuses to the last focusable item of the Panel whose _SOM Expression_ is provided
         *
         * If either the _firstItem_ or _lastItem_ is a Panel, then the _firstItem_ of that Panel (until a Field is
         * found) is set to Focus.
         *
         * * **_nextItem_** - Next sibling component of the current active Item of the Panel whose _somExpression_ is
         * provided. It is equivalent to the result of `panel.navigationContext.nextItem` API.
         * * **prevItem** - Previous sibling component of the current active Item of the Panel show _somExpression_ is
         * provided. It is equivalent to the result of `panel.navigationContext.prevItem` API.
         *
         * * **_nextItemDeep_** - Focus is set to the next Navigable Panel of root Panel in DFS Order
         * * **_prevItemDeep_** - Focus is set to the next Navigable Panel of root Panel in DFS Order
         * @param {boolean} [runCompletionScript=false] indicating whether to execute the completion expression or not.
         * @returns {boolean} true if the focus was set to requested field successfully otherwise false
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @example
         * setFocus(somExpression); // Focus is set to the specified somExpression.
         * setFocus(this.panel.somExpression,'nextItem',true); // Focus is set to next item in the Panel.
         * setFocus(null,'nextItemDeep',true); // Focus is set to next navigable Panel in rootPanel
         */
        setFocus : function (somExpression, focusOption, runCompletionScript) {
            var options,
                focusDone,
                originalSkipFieldFocus;
            if (_.isObject(somExpression)) {
                options = somExpression;
            } else {
                options = {
                    somExpression : somExpression,
                    focusOption : focusOption,
                    runCompletionScript : runCompletionScript
                };
            }
            try {
                originalSkipFieldFocus = this._guideView.skipFieldFocus;
                /**
                 * Setting of this._guideView.skipFieldFocus was added for issue LC-3911361
                 * Here we set a skipFieldFocus property for gudeContainerView, which prevents
                 * actual 'input' / widget focus. This was done to prevent opening of keyboard or dropdown spinner
                 * or date picker.. in case of swipe and use of deep navigators in mobile view of Adaptive Form.
                 */
                this._guideView.skipFieldFocus = options.skipFieldFocus;
                focusDone = this._guideView.setFocus(options);
            } finally {
                this._guideView.skipFieldFocus = originalSkipFieldFocus; //moving back to original state
            }
            //TODO: need a more common place to do that.
            if (!this._guide._currentContext) {
                this._guide.runPendingExpressions();
            }
            return focusDone;
        },

        /**
         * Loads the lazy fragment specified by somExpression
         * @param {string} somExpression somexpression of the lazy loaded fragment
         * @method
         * @memberof GuideBridge
         * @since 6.4
         * @instance
         * @example <caption>Loading a lazy loaded fragment with somexpression x[0].y[0].z[0]. If both y and z form objects are lazy loaded, this API
         * would load both</caption>
         * guideBridge.loadLazyFragment("x[0].y[0].z[0]");
         *
         */
        loadLazyFragment : function (somExpression) {
            if (!_.isUndefined(somExpression)) {
                var relativeSom = guidelib.util.GuideUtil.relativeSom(this._guide.rootPanel.somExpression, somExpression);
                if (relativeSom) {
                    var somTokens = relativeSom.split(".");
                    var currItem = this._guide.rootPanel;
                    _.each(somTokens, function (qName) {
                        if (currItem != null) {
                            var arr = currItem._findChildren(qName, false);
                            if (arr.length > 0) {
                                var node = arr[0];
                                if (node && node._lazyReference && !node._itemsLoaded) {
                                    guidelib.internal.liveDataUtils.updateLiveData();
                                    node._loadLazyFragment();
                                }
                                currItem = node;
                            } else {
                                currItem = null;
                            }
                        }
                    }, this);
                }
            }
        },

        /*
         * Get the download link of signed document set by signing service.
         * @return: url from where the signed document can be accessed, empty in case its not set by signing service.
         */
        getSignedDocDownloadLink : function () {
            var url = "";
            if (!_.isUndefined(FD)
                && !_.isUndefined(FD.AFaddon)
                && !_.isUndefined(FD.AFaddon.Signing)
                && !_.isUndefined(FD.AFaddon.Signing.signedDocDownloadLink)) {
                url = FD.AFaddon.Signing.signedDocDownloadLink;
            }
            return url;
        },

        /*
         If true is passed to the function then it checks for model and view both,
         if false or no parameter is passed, then it checks the model only.
         */
        isGuideLoaded : function (complete) {
            if (complete) {
                return !_.isEmpty(window.guideBridge._guide && window.guideBridge._guideView);
            }
            return !_.isEmpty(window.guideBridge._guide);
        },

        _doInternalSubmit : function (options) {
            if (options.excludeFormState) {
                var submissionInfo = options.guideState.data.guideState.guideContext.afSubmissionInfo;
                if (submissionInfo && submissionInfo.hasOwnProperty('lastFocusItem')) {
                    submissionInfo.lastFocusItem = undefined;
                }
            }
            // Make a clone of options so that original options are not modified.
            // Remove additionalSubmitInfo from the guideState so that no extra information
            // is sent to the server.
            var clonedGuideState = JSON.parse(JSON.stringify(options.guideState));
            if (!_.isEmpty(clonedGuideState.data.guideState.additionalSubmitInfo)) {
                clonedGuideState.data.guideState.additionalSubmitInfo = {};
            }
            var guideState = clonedGuideState,
                strContent = this.getMultipartData({
                    guideState : JSON.stringify(guideState.data),
                    _charset_ : "UTF-8"
                }),
            // check if guide state is present, if yes get guide path from guide state
            // Specifically written for mobile workspace to getDataXML from current json state
                guidePath = ((guideState && guideState.data) ? guideState.data.guideState.guideContext.guidePath : null);

            $.ajax({
                url : this._getGuidePathUrl(".af.internalsubmit.jsp", guidePath),
                type : "POST",
                async : options.async || false,
                contentType : "multipart/form-data; charset=UTF-8; boundary=" + strContent[0],
                data : strContent[1],
                success : options.success,
                error : options.error
            });
        },

        _submitInternal : function (options) {
            var self = this;
            options = options || {};
            if (!options.guideState) {
                this.getGuideState({
                    "diff" : "diff",
                    "fileUploadPath" : options.fileUploadPath,
                    "success" : function (guideState) {
                        self._doInternalSubmit({
                            guideState : guideState,
                            success : options.success,
                            error : options.error,
                            async : options.async,
                            excludeFormState : options.excludeFormState
                        });
                    },
                    "error" : options.error,
                    reducedJSON : true
                });
            } else {
                this._doInternalSubmit({
                    guideState : options.guideState,
                    success : options.success,
                    error : options.error,
                    async : options.async,
                    excludeFormState : options.excludeFormState
                });
            }
        },

        getMultipartData : function (data) {
            //Start multipart formatting
            var initBoundary = this.randomString();
            var strBoundary = "--" + initBoundary;
            var strMultipartBody = "";
            var strCRLF = "\r\n";

            //Create multipart for each element of the form
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var value = _.isObject(data[key]) ? JSON.stringify(data[key]) : data[key];
                    strMultipartBody +=
                        strBoundary +
                        strCRLF +
                        "Content-Disposition: form-data; name=\"" + key + "\"" +
                        strCRLF +
                        strCRLF +
                        value +
                        strCRLF;
                }
            }
            //End the body by delimiting it
            strMultipartBody += strBoundary + "--" + strCRLF;
            //Return boundary without -- and the multipart content
            return [initBoundary, strMultipartBody];
        },

        randomString : function () {
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = 8;
            var randomstring = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum, rnum + 1);
            }
            return randomstring;
        },

        /*
         * Get the file Attachment map that contains a mapping of som expression vs path when files have been uploaded
         * and som expression vs name when the files have not yet been uploaded .
         * @return: map of som expression and paths.
         * @private
         */
        getFileAttachmentMap : function () {
            var fileAttachmentMap = {},
                fileAttachmentsList = [];
            window.guideBridge._getFileAttachmentsList(fileAttachmentsList);
            for (var i = 0; i < fileAttachmentsList.length; i++) {
                var node = fileAttachmentsList[i];
                if (!_.isEmpty(node.fileAttachment.value)) {
                    fileAttachmentMap[node.somExpression] = node.fileAttachment.value;
                }
            }

            var lazyAttachmentMap = guidelib.internal.liveDataUtils._getLazyAttachmentMap();
            _.each(lazyAttachmentMap, function (mapObject, key) {
                fileAttachmentMap[key] = mapObject.value;
            });
            return fileAttachmentMap;
        },

        /*
         * sets the value of the file attachment component based on the map that is passed.
         * @private
         */
        putFileAttachmentMap : function (fileAttachmentMap) {
            _.each(fileAttachmentMap, function (value, som) {
                var node = guideBridge.resolveNode(som);
                node.fileAttachment.value = value;
            });
        },

        doAjaxSubmitWithFileAttachment : function (actionUrl, submitData, options, fileAttachmentsList) {
            var _options = options || {},
            fileDoms = [],
            fileNames = [],
            fileNameDomMap,
            self = this;
            fileNameDomMap = this._juiceOutNameAndFileDomMap(fileAttachmentsList);
            fileDoms = fileNameDomMap.fileDom;
            fileNames = fileNameDomMap.fileName;

            var dataForm = new FormData();

            var index;
            for (index = 0; index < fileNames.length; index++) {
                dataForm.append(fileNames[index], fileDoms[index][0].files[0]);
            }
            dataForm.append("_guideAttachments", fileNames.toString());
            $.each(submitData, function (key, val) {
                if (typeof val == "object") {
                    val = JSON.stringify(val);
                }
                dataForm.append(key, val);
            });

            $.ajax({
                url : actionUrl,
                type : "POST",
                processData : false,
                cache : false,
                contentType : false,
                dataType : 'json',
                data : dataForm,
                success : function (data) {
                    self.doAjaxSubmitSuccess(data, _options);
                },
                error : function (data) {
                    self.doAjaxSubmitError(data, _options);
                }
            });
        },

        doAjaxSubmit : function (actionUrl, submitData, options) {
            var _options = options || {},
            self = this,
            asyncSubmit = _options.async === false ? false : true,
            strContent = this.getMultipartData(submitData);
            $.ajax({
                url : actionUrl,
                type : "POST",
                traditional : true,
                async : asyncSubmit,
                contentType : "multipart/form-data; charset=UTF-8; boundary=" + strContent[0],
                data : strContent[1],
                success : function (data) {
                    self.doAjaxSubmitSuccess(data, _options);
                },
                error : function (data) {
                    self.doAjaxSubmitError(data, _options);
                }
            });
        },

        KEY_AF_SUCCESS_PAYLOAD : "afSuccessPayload",

        doAjaxSubmitSuccess : function (data, options) {
            var guideResultObject = new GuideResultObject();
            guideResultObject.data = data;
            guideResultObject.completed = true;
            if (guidelib.util.GuideUtil) {
                // remove the submitting message too after success of ajax submit
                guidelib.util.GuideUtil.showGuideLoading(false).removeAllMessages();
            }
            if (_.isFunction(options.success)) {
                options.success.call(options.context, guideResultObject);
            } else {
                if (data.hasOwnProperty("signingURL")) {
                    // Adobe sign : FormFiller enabled case.
                    window.location.href = data.signingURL;
                } else {
                    var payload = {};
                    if (data.hasOwnProperty(guideBridge.KEY_AF_SUCCESS_PAYLOAD)) {
                        try {
                            payload = JSON.parse(data[guideBridge.KEY_AF_SUCCESS_PAYLOAD]);
                            payload.data = guidelib.internal.afdata;
                            var schemaType = guidelib.runtime.guideContext.schemaType;
                            if (!schemaType) {
                                //TODO define a constant for schema Type.
                                schemaType = "xmlschema";
                            }
                            payload.contentType = schemaType;
                        } catch (e) {
                            guideBridge._guide.logger().log("Error while parsing AF Success Payload: " + e);
                        }
                    }
                    guideBridge._guide.executeExpression("submitSuccess", payload); // Executing Rule Editor code for submit success.
                }
            }
        },

        doAjaxSubmitError : function (data, options) {
            var guideResultObject = new GuideResultObject();
            guideResultObject.data = data;
            guideResultObject.completed = false;
            guideResultObject.addMessage(2, "Error in Async Submit", "");
            if (guidelib.util.GuideUtil) {
                guidelib.util.GuideUtil.showGuideLoading(false);
            }
            if (_.isFunction(options.error)) {
                options.error.call(options.context, guideResultObject);
            } else {
                var errorPayload = {};
                try {
                    errorPayload = JSON.parse(data.responseText);
                } catch (e) {
                    guideBridge._guide.logger().log("Error while parsing errorPayload." + e);
                }
                guideBridge._guide.executeExpression("submitError", errorPayload); //Executing Rule Editor code for submitError
            }
        },

        handleUpload : function () {
            self = this.self;
            this.submitData['_guideAttachments'] = this.attachments.toString();
            _.each(this.attachments, function (att) {
                this.submitData["_guideFileAttachment." + att] = this.submitData['fileUrl'] + "/" + att;
            }, this);
            delete this.submitData['fileUrl'];
            self.doAjaxSubmit(this.actionUrl, this.submitData, this.options);
        },

        _handleSubmitError : function (data) {
            switch (data.status) {
                case 502:
                    alert(guidelib.util.GuideUtil.getLocalizedMessage("AF", guidelib.i18n.LogMessages["AEM-AF-901-003"]));
                    break;
                default:
                    alert(guidelib.util.GuideUtil.getLocalizedMessage("AF", guidelib.i18n.LogMessages["AEM-AF-901-004"]));
                    break;
            }
            if (guidelib.util.GuideUtil) {
                guidelib.util.GuideUtil.showGuideLoading(false)
                    .removeAllMessages();
            }
        },

        updateSubmitData : function (fileAttachmentsList, submitData, fileList) {
            var fileCount = 0,
                attachments = [],
                name;
            if (fileList.length === 0 && fileAttachmentsList.length > 0 && !guideBridge._disablePreview()) {
                _.each(fileAttachmentsList, function (fileUploadComponentId, index) {
                    var currentCount = 0;
                    var componentInModel = window.guideBridge._resolveId(fileUploadComponentId);
                    var fileNameList = componentInModel["fileAttachment"].value;
                    if (fileNameList) {
                        var fileNames = fileNameList.split("\n");
                        _.each(fileNames, function (fileUrl, index) {
                            name = componentInModel.name + "/" + fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
                            if (name) {
                                attachments[fileCount++] = name;
                                submitData["_guideFileAttachment." + name] = fileUrl;
                            }
                        }, this);
                    }
                }, this);
                submitData['_guideAttachments'] = attachments;
            } else if (fileList.length > 0) {
                _.each(fileList, function (file, index) {
                    name = guideBridge._getRelativeFilePath(file);
                    attachments[fileCount++] = name;
                    submitData["_guideFileAttachment." + name] = file;
                }, this);
                submitData['_guideAttachments'] = attachments;
            }
        },

        _collectFileUrls : function (event) {
            var list = [],
                fileUploadError = false;

            // Populate list to have path of all the uploaded files. The file Attachment component whose model was
            // loaded would have their fileNames first followed by the list of file names of unloaded file upload components.
            _.each(this.attachments, function (att) {
                // check if att is a url and hence push it directly to list
                if (_.isString(att) && att.match(/\//g).length > 1) {
                    list.push(att);
                } else {
                    list.push(this.fileUrl + "/" + att);
                }
            }, this);

            var options = {
                fileUrlList : list,
                fileUploadModelsList : this.fileAttachmentsList,
                lazyAttachmentMap : guidelib.internal.liveDataUtils._getLazyAttachmentMap()
            };
            guidelib.util.GuideUtil._updateFileModelsAndLazyMap(options);

            var submitOptions = this.options.ajaxSubmitObject;
            if (submitOptions && submitOptions.ajaxSubmitDataHandler) {
                submitOptions.ajaxSubmitDataHandler.call(this.options.context, submitOptions.fileAttachmentsList, submitOptions.submitData, list);
                window.guideBridge.doAjaxSubmit(submitOptions.actionUrl, submitOptions.submitData, this.options);
            } else if (this.options.success) {
                //create the guideState now as the model has been updated with the latest values.
                //do this only during getGuideState and not on ajax submit
                guideBridge._createGuideStateAndLiveXml(this.options);
                this.options.success.call(this.options.context, this.options.obj);
            }

        },

        // This function extracts the form name from the guideContainerPath.
        _getFormName : function (guidePath) {
            var formName = "";
            if (guidePath) {
                var index = guidePath.indexOf("/jcr:content/guideContainer");
                guidePath = guidePath.substring(0, index);
                formName = guidePath.substring(guidePath.lastIndexOf("/") + 1);
            }
            return formName;
        },

        // This function creates a UUID that is used for ajax submit
        _getUUIDForAjaxSubmit : function () {
            var uuidSuffix = Math.floor((Math.random() * 10000) + 1),
                uuidCurrentTime = new Date().getTime(),
                successFlag = true;
            var guidePath = window.guideBridge.getGuidePath();
            this._formInstanceUUID = window.guideBridge._getFormName(guidePath) + uuidCurrentTime + uuidSuffix;
            successFlag = createUUIDStorage(this._formInstanceUUID);
            if (successFlag) {
                return this._formInstanceUUID;
            } else {
                return null;
            }
        },

        /**
         * returns the form element to be used for submission in case of non-ajax
         * submit.
         * The function looks in the submitConfig for a form and if not present,
         * creates a new form
         * @returns {object} jQuery object for form element
         * @private
         */
        _getFormForSubmission : function () {
            var submitConfig = this.userConfig.submitConfig || {},
                form = submitConfig.form || $("<form method='post' enctype='multipart/form-data'/>").appendTo($("body"));
            return $(form);
        },

        _getThankYouPageFromConfig : function () {
            var submitConfig = this.userConfig.submitConfig || {};
            return submitConfig.thankyouPage;
        },

        /**
         * This function prepare the guideValueMap and returns it.
         * @returns A map consisting of name and value for all the unbound components
         * @private
         */
        _prepareGuideValueMap : function () {
            var guideValueMap = {}, visitedMap = {};
            this.visit(function (node) {
                if (!node.bindRef && !visitedMap[node.somExpression]) {
                    if (node instanceof guidelib.model.Field && node.value) {
                        visitedMap[node.somExpression] = true;
                        guideValueMap[node.getAttribute("name")] = node.value;
                    } else if (node instanceof guidelib.model.GuideCompositeField) {
                        var obj = guideValueMap[node.getAttribute("name")] = {};
                        _.each(node.items, function (childNode, index) {
                            visitedMap[childNode.somExpression] = true;
                            if (childNode.value) {
                                obj[childNode.getAttribute("name")] = childNode.value;
                            }
                        }, this);
                    }
                }
            });
            return guideValueMap;
        },

        /**
         * Validate and submits the data of the Adaptive Form to the pre-configured submit action.
         *
         * The success handler provided in the argument is executed only if the Adaptive Form is configured to use AJAX
         * for submission using {@link GuideBridge#registerConfig|registerConfig} API
         * @summary submits the Adaptive Form
         * @param {object} options options to control the behaviour of submit API.
         * @param {string} [options.submissionSelector] url selector governs the submission behaviour at server
         * Default value is "submit", other options are "agreement", "signSubmit"
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success.
         * {@link GuideResultObject#errors|errors} property as false.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object
         * @param {boolean} [options.validate=true] whether to validate the form before submission or not
         * @method
         * @memberof GuideBridge
         * @since 6.0
         * @instance
         * @example <caption>Submitting the form without validation</caption>
         * guideBridge.submit({
         *    validate: false,
         *    error : function (guideResultObject) {//log message}
         * });
         * @example <caption>Submitting the form and showing a success message</caption>
         * guideBridge.registerConfig("submitConfig" : {"useAjax" : true});
         * guideBridge.submit({
         *   validate: false,
         *   error : function (guideResultObject) {//log message}
         *   success : function (guideResultObject) {alert("data submitted successfully")
         * });
         */
        submit : function (options) {
            _isAutoSaveEnabled = window.guideBridge.getAutoSaveEnabledStatus();
            //Disable auto save till submission is not completed
            if (_isAutoSaveEnabled) {
                window.guideBridge.setEnabledAutoSave(false);
            }
            var self = this;
            var guideContextFromOptions,
                runtimeGuideContext = guidelib.runtime.guideContext;
            if (getOrElse(options, "guideState", "")) {
                guideContextFromOptions = options.guideState.data.guideState.guideContext;
            }
            var localGuideContext = guideContextFromOptions || runtimeGuideContext;
            // to submit guideContainerForm  which will be stopped so that autocomplete values can be remembered
            $(".guideContainerFormSubmitButton").click();
            function submitError(data) {
                if (options && options.error) {
                    options.error.call(options.context || this, data);
                } else {
                    $.proxy(guideBridge._handleSubmitError(data), guideBridge);
                }
            }

            function submitSuccess(data) {
                var isAjaxSubmit = false;

                if (options) {
                    isAjaxSubmit = options.success ? true : false;
                }
                options = options || {};
                options.success = options.success || (self.userConfig.submitConfig || {}).submitSuccessHandler;
                isAjaxSubmit = isAjaxSubmit || (self.userConfig.submitConfig || {useAjax : false}).useAjax || guideBridge._guide.enableAsyncSubmission;
                var submitData = {};

                if (this.isGuideLoaded()) {
                    var guideCaptchaList = [];
                    this.visit(function (node) {
                        if (node.className === "guideCaptcha") {
                            guideCaptchaList.push(node);
                        }
                    });
                    var captchaModel = guideCaptchaList[0];
                    if (captchaModel) {
                        var captchaData = window.guideBridge._getCaptchaData(captchaModel);
                        submitData['captchaData'] = captchaData;
                    }
                }

                // check if guide state is present, if yes get guide path from guide state
                var guidePath = getOrElse(options, "guideState.data.guideState.guideContext.guidePath", ""),
                    guideContainerPath = guidePath || window.guideBridge.getGuidePath(),
                    aemFormComponentPath = this.userConfig.submitConfig ? this.userConfig.submitConfig.aemFormComponentPath : "",
                    submissionSelector = options.submissionSelector || "submit",
                    actionUrl = window.guideBridge._getGuidePathUrl(".af." + submissionSelector + ".jsp", guideContainerPath);

                submitData['guideContainerPath'] = guideContainerPath;
                submitData['aemFormComponentPath'] = aemFormComponentPath;
                submitData['_asyncSubmit'] = isAjaxSubmit;
                submitData['_charset_'] = "UTF-8";
                var customPropMap = localGuideContext.customPropertyMap || {};
                // need to remove lastFocusItem from being sent as a different property
                // as it being sent in xml and with afSubmissionInfo as well.
                var whiteListedProperties = ["lastFocusItem"];
                for (var prop in customPropMap) {
                    if (customPropMap.hasOwnProperty(prop) && whiteListedProperties.indexOf(prop) < 0) {
                        submitData[prop] = customPropMap[prop];
                    }
                }
                // todo: Have to remove the excludeFromDor map from the submission info, is this required ?
                submitData['afSubmissionInfo'] = guidelib.runtime.guideContext.afSubmissionInfo || {};
                var resultJson = data,
                    guideJson,
                    data,
                    fileAttachmentsList,
                    attachments = [],
                    fileCount = 0;
                if (resultJson.hasOwnProperty("guideValue")) {
                    guideJson = resultJson.guideValue;
                } else if (!_.isUndefined(options.guideValueMap)) {
                    guideJson = options.guideValueMap;
                } else {
                    guideJson = window.guideBridge._prepareGuideValueMap();
                }
                if (resultJson.hasOwnProperty("data")) {
                    data = resultJson["data"];
                }

                if (resultJson.hasOwnProperty("fileAttachmentsList")) {
                    fileAttachmentsList = resultJson["fileAttachmentsList"];
                }

                for (var key in guideJson) {
                    if (guideJson.hasOwnProperty(key)) {
                        submitData[key] = guideJson[key];
                    }
                }

                if (data) {
                    submitData['jcr:data'] = data;
                    submitData['jcr:data@TypeHint'] = "Binary";
                    guidelib.internal.afdata = data;
                }
                if (!_.isUndefined(options.fileAttachmentMap)) {
                    submitData.fileAttachmentMap = options.fileAttachmentMap;
                } else {
                    //send the fileAttachmentMap through submit data to restore submission attachments for read only viewing
                    submitData.fileAttachmentMap = JSON.stringify(guideBridge._getFileAttachmentMapForSubmit());
                }
                // read the additional information from the guideState if it is passed in options
                // otherwise get the additional information from the DOM
                var additionalSubmitInfo = {};
                if (options.guideState && options.guideState.data.guideState.additionalSubmitInfo) {
                    additionalSubmitInfo = options.guideState.data.guideState.additionalSubmitInfo;
                } else {
                    additionalSubmitInfo = guideBridge._getAdditionalSubmitInfo();
                }
                // append additionalSubmitInfo to the submitData
                $.extend(true, submitData, additionalSubmitInfo);

                if (isAjaxSubmit && isAjaxSubmit === true) {
                    // if the fileAttachmentMap is passed in the options, then we don't need to upload the files as the map contains the uploaded path only.
                    // we just update the submitData with the attachment information
                    if (options.fileAttachmentMap) {
                        var attachmentMap = JSON.parse(options.fileAttachmentMap);
                        var keys = _.keys(attachmentMap);
                        for (var i = 0; i < keys.length; i++) {
                            if (attachmentMap[keys[i]]) {
                                var fileNames = attachmentMap[keys[i]].split("\n");
                                for (var j = 0; j < fileNames.length; j++) {
                                    var name = guideBridge._getRelativeFilePath(fileNames[j]);
                                    attachments[fileCount++] = name;
                                    submitData["_guideFileAttachment." + name] = fileNames[j];
                                }
                            }
                        }
                        submitData['_guideAttachments'] = attachments;
                        self.doAjaxSubmit(actionUrl, submitData, options);
                    } else {
                        var attachedFilesList = [];
                        var currentCount = 0;
                        // need to check if the guide is loaded, as it is not available for mobile workspace app use case
                        if (guideBridge.isGuideLoaded()) {
                            window.guideBridge._getFileAttachmentsList(attachedFilesList);
                        }
                        _.each(attachedFilesList, function (object) {
                            var fileNameList = object["fileAttachment"].value;
                            if (fileNameList) {
                                currentCount++;
                            }
                        });
                        // If a file has been attached and isAjaxSubmit is true, then a UUID is generated and
                        // the files are uploaded at temp storage path.
                        // The submit data is updated with the attached files and then
                        // doAjaxSubmit is called.
                        if (currentCount > 0) {
                            self.doAjaxSubmitWithFileAttachment(actionUrl, submitData, options, attachedFilesList);
                        } else {
                            self.doAjaxSubmit(actionUrl, submitData, options);
                        }
                    }
                } else {
                    var $form = self._getFormForSubmission();
                    $form.attr('action', actionUrl);
                    $form.attr('data-name', 'afSubmissionForm');
                    for (var fields in submitData) {
                        if (submitData.hasOwnProperty(fields)) {
                            var value = submitData[fields];
                            $("<input>").attr("type", "hidden")
                                .attr("name", fields)
                                .val(_.isObject(value) ? JSON.stringify(value) : value)
                                .appendTo($form);
                        }
                    }
                    /*
                     * This means we did not do any preprocessing
                     * for file attachments so fileAttachment list won't be present
                     * so posting DOM for the files.
                     * */
                    var attachmentNameDomMap = guideBridge._getFileNameFileDomMap(),
                        fileNameList = [],
                        _guideAttachments = "";
                    // A string containing the names of all the files that are attached is stored in the variable _guideAttachments.
                    // For all the files that have been uploaded already and don't have a dom element are
                    // added to $form with prefix "_guideFileAttachment."
                    if (attachmentNameDomMap && attachmentNameDomMap.fileDom) {
                        fileNameList = attachmentNameDomMap.fileName;
                        _.each(attachmentNameDomMap.fileDom, function (file, index) {
                            if (file) {
                                file.attr("name", fileNameList[index])
                                    .attr("class", "hidden")
                                    .appendTo($form);
                                _guideAttachments += fileNameList[index] + ",";
                            } else {
                                if (fileNameList[index]) {
                                    var name = guideBridge._getRelativeFilePath(fileNameList[index]);
                                    $("<input>").attr("type", "hidden")
                                        .attr("name", "_guideFileAttachment." + name)
                                        .attr("value", fileNameList[index])
                                        .appendTo($form);
                                    _guideAttachments += name + ",";
                                }
                            }
                        });
                    }
                    $("<input>").attr("type", "hidden")
                        .attr("name", "_guideAttachments")
                        .attr("value", _guideAttachments)
                        .appendTo($form);

                    $form.submit();
                }
            }

            if (guidelib.util.GuideUtil) {
                guidelib.util.GuideUtil.showGuideLoading(true).showMessages(guidelib.i18n.strings.validatingForm);
            }
            // since validate is synchronous call, putting this in timeout
            // so that html changes can be display
            setTimeout(function () {
                // update the snapshot just before validating
                // so that we get true state of play before loading panels
                if (guideBridge.isGuideLoaded() && guideBridge._guide.allLazyChildren.length > 0) {
                    guidelib.internal.liveDataUtils.updateLiveData();
                }
                var isValid = false;
                try {
                    isValid = self._performConditionalValidation(options);
                } catch (e) {
                    isValid = false;
                } finally {
                    if (guidelib.util.GuideUtil) {
                        guidelib.util.GuideUtil.removeAllMessages();
                    }
                }
                if (isValid) {
                    if (guidelib.util.GuideUtil) {
                        var msg = guidelib.i18n.strings.submittingForm;
                        if (options && options.submissionSelector === 'agreement') {
                            msg = guidelib.i18n.strings.generatingSignAgreement;
                        }
                        guidelib.util.GuideUtil.showMessages(msg);
                    }
                    // Trigger submitStart before calling internal submit.
                    if (guideBridge.isGuideLoaded()) {
                        self._guide._triggerOnBridge("submitStart", "", "", "", "");
                    }
                    var excludeFormState = true;
                    if (options && options.hasOwnProperty("excludeFormState")) {
                        excludeFormState = options.excludeFormState;
                    }
                    try {
                        var guideState = getOrElse(options, "guideState", null);
                        self._submitInternal({
                            guideState : guideState,
                            success : function () {
                                try {
                                    submitSuccess.apply(self, arguments);
                                } catch (e) {
                                    if (guidelib.util.GuideUtil) {
                                        guidelib.util.GuideUtil.showGuideLoading(false)
                                            .removeAllMessages();
                                    }
                                }
                            },
                            error : function () {
                                try {
                                    submitError.apply(self, arguments);
                                } catch (e) {
                                    //ignoring the error
                                } finally {
                                    if (guidelib.util.GuideUtil) {
                                        guidelib.util.GuideUtil.showGuideLoading(false)
                                            .removeAllMessages();
                                    }
                                }
                            },
                            async : true,
                            excludeFormState : excludeFormState
                        });
                    } catch (e) {
                        if (guidelib.util.GuideUtil) {
                            guidelib.util.GuideUtil.showGuideLoading(false)
                                .removeAllMessages();
                        }
                    }
                } else {
                    window.guideBridge.setEnabledAutoSave(_isAutoSaveEnabled);
                    if (guidelib.util.GuideUtil) {
                        guidelib.util.GuideUtil.showGuideLoading(false)
                            .removeAllMessages();
                    }
                    return;
                }
            }, 1);
        },

        _getFileAttachmentMapForSubmit : function () {
            var fileAttachmentMap = {},
                fileAttachmentsList = [];
            window.guideBridge._getFileAttachmentsList(fileAttachmentsList);
            for (var i = 0; i < fileAttachmentsList.length; i++) {
                var node = fileAttachmentsList[i];
                if (!_.isUndefined(node.value) && node.value.length > 0) {
                    var attachmentList = node.value.split("\n");
                    for (var j = 0; j < attachmentList.length; j++) {
                        attachmentList[j] = node.name + "/" + attachmentList[j];
                    }
                    fileAttachmentMap[node.somExpression] = attachmentList.join('\n');
                }
            }

            var lazyAttachmentMap = guidelib.internal.liveDataUtils._getLazyAttachmentMap();
            _.each(lazyAttachmentMap, function (mapObject, key) {
                var attachmentList = mapObject.value.split("\n");
                for (var j = 0; j < attachmentList.length; j++) {
                    attachmentList[j] = guidelib.util.GuideUtil.guideSomToComponentName(key) + "/" + attachmentList[j];
                }
                fileAttachmentMap[key] = attachmentList.join('\n');
            });
            return fileAttachmentMap;
        },

        ERROR_CAUSED_BY : {
            CAPTCHA_VALIDATION : "CAPTCHA_VALIDATION",
            SERVER_SIDE_VALIDATION : "SERVER_SIDE_VALIDATION",
            FORM_SUBMISSION : "FORM_SUBMISSION",
            AGREEMENT_CREATION : "AGREEMENT_CREATION"
        },

        /* Handle the server side validation failure in case of submission fails.
         * This function handles Captcha validation as well as server side validation.
         */
        _handleServerValidationError : function (errorJson) {
            var self = this;
            window.guideBridge.setEnabledAutoSave(_isAutoSaveEnabled);
            if (errorJson) {
                if (errorJson.errorCausedBy && errorJson.errorCausedBy === this.ERROR_CAUSED_BY.CAPTCHA_VALIDATION) {
                    var errors = errorJson.errors,
                        firstFocusableSom = errors[0].somExpression;
                    _.each(errors, function (object, i) {
                        var somExpression = object.somExpression,
                            errorMessage = object.errorMessage,
                            guideCaptcha;
                        /*Setting focus to load captcha's view.
                         This is required when panel's children get loaded later.
                         Setting focus ensures that view is loaded properly so that model can throw
                         'guide.errorChanged' event and view can listen the same.
                         */
                        self.setFocus(somExpression);
                        guideCaptcha = self.resolveNode(somExpression);
                        if (guideCaptcha) {
                            guideCaptcha.showCaptchaError(errorMessage);
                        }
                    });
                    //Setting focus to the first captcha element.
                    self.setFocus(firstFocusableSom);
                } else if (errorJson.errorCausedBy && errorJson.errorCausedBy === this.ERROR_CAUSED_BY.FORM_SUBMISSION
                    || errorJson.errorCausedBy === this.ERROR_CAUSED_BY.AGREEMENT_CREATION) {
                    var error = errorJson.errors[0],
                        errorMessage = error.errorMessage;
                    $.proxy(guideBridge._handleSubmitError({
                        "status" : "500"
                    }), guideBridge);
                } else {
                    //Everything else is "SERVER_SIDE_VALIDATION". Calling this as it was being called.
                    var errorList = [];
                    window.guideBridge.validate(errorList, null, true);
                }
            }
        },

        SELECTOR_FORM_CONTAINER : "#guideContainerForm",

        THANK_YOU_OPTION : {
            PAGE : "page",
            MESSAGE : "message"
        },
        /*
         *  default Submit Success Handler.
         *  This function handles the Thank You Page/Message
         */
        _defaultSubmitSuccessHandler : function (successPayload) {
            if (successPayload) {
                if (successPayload.thankYouOption === this.THANK_YOU_OPTION.MESSAGE) {
                    $(this.SELECTOR_FORM_CONTAINER).replaceWith("<div class='tyMessage'>" + successPayload.thankYouContent + "</div>");
                } else if (successPayload.thankYouOption === this.THANK_YOU_OPTION.PAGE) {
                    window.location.href = successPayload.thankYouContent;
                }
            }
        },

        // This function gets the relative path of the file.
        // Suppose the component Name is attachment and the file name is a.jpg,
        // then it will return "attachment/a.jpg" as the path
        _getRelativeFilePath : function (fileName) {
            var splitPath = fileName.split("/");
            return splitPath[splitPath.length - 2] + "/" + splitPath[splitPath.length - 1];
        },

        // We do not need to validate if options.validate = false.
        // This function makes sure that validations are not performed when validate flag is false.
        // Validation is performed in all the other cases.
        _performConditionalValidation : function (options) {
            if (getOrElse(options, "validate", true)) {
                return guideBridge.validate(null, null, true, false);
            }
            return true;
        },

        /**
         * This API returns the HTML content of another Adaptive Form and optionally load the Form inside an HTML
         * element
         *
         * The {@link GuideResultObject#data|data} property of the result passed to success handler will contain the HTML of
         * the Form
         * @summary load an Adaptive Form given its path
         * @param {object} options object to pass to the API
         * @param {function} [options.success] callback which receives the result of the API
         * in case of success.
         * {@link GuideResultObject#errors|errors} property as false.
         * @param {function} [options.error] callback which receives the result of the API in
         * case of failure.
         * {@link GuideResultObject#errors|errors} property as true.
         * @param {object} [options.context] _this_ object inside the _success_ and _error_ callback will point to this
         * object
         * @param {string} options.path Path of the Adaptive Form whose HTML is required. If sever is running at a
         * context path, this parameter must have the context path
         * @param {string} [options.dataRef] URL of the resource that returns the XML. The protocol of the URL must
         * match the supported URL protocols
         * @param {string} [options.containerSelector] jquery Selector of the HTML element where to insert the HTML
         * of the form.
         * @method
         * @memberof GuideBridge
         * @since 6.1 FP1
         * @instance
         * @example
         * guideBridge.loadAdaptiveForm({
         *      success : function (guideResultObj) {console.log("html is " + guideResultObj.data)},
         *      error : function (guideResultObj) { //log errors},
         *      dataRef : "http://url/of/the/dataRef",
         *      path : "/contextpath/content/dam/formsanddocuments/form1"
         * })
         * @see {@link https://api.jquery.com/category/selectors/|jQuery selectors}
         * @see <a href="#guidebridge-api-usage" >GuideBridge API Usage</a>
         */
        loadAdaptiveForm : function (options) {
            if (options && options.path) {
                // Let's covert the adaptive form asset path or af path
                // @todo: add notion of channel type in the options to load adaptive form
                var path = options.path.replace(FM_DAM_ROOT, FM_AF_ROOT);
                path += "/jcr:content/guideContainer.html";
                $.ajax({
                    url : path,
                    type : "GET",
                    data : {
                        // lets set the wcmmode to disabled
                        wcmmode : "disabled",
                        // Set the data reference
                        "dataRef" : options.dataRef
                    },
                    async : false,
                    success : function (data) {
                        // Get the container selector and do a replaceWith HTML
                        // not using jquery since jquery create a separate array objects for script, link etc
                        if (options.containerSelector) {
                            //NOCHECKMARX - data is coming from serverside preventing Reflective XSS All Clients.
                            $(options.containerSelector).html(data);
                        }
                        var guideResultObject = new GuideResultObject();
                        // data would here be html
                        guideResultObject.data = data;
                        guideResultObject.completed = true;
                        if (options.success && _.isFunction(options.success)) {
                            options.success.call(options.context, guideResultObject);
                        }
                    },
                    error : function (data) {
                        var guideResultObject = new GuideResultObject();
                        // data is an object containing xhr request, status and error
                        guideResultObject.data = data;
                        guideResultObject.completed = false;
                        guideResultObject.addMessage(2, "Error in getting HTML of Adaptive Form: " + options.path, "");
                        if (options.error && _.isFunction(options.error)) {
                            options.error.call(options.context, guideResultObject);
                        }
                    }
                });
            } else {
                if (typeof(console) !== "undefined") {
                    console.log("Path of Adaptive Form not specified to loadAdaptiveForm API");
                }
            }
        },

        /**
         * Unloads the Form loaded using the {@link GuideBridge#loadAdaptiveForm|loadAdaptiveForm} API
         * @summary Unloads an adaptive Form from the browser, removing all the existing event listeners, data, html.
         * @param containerSelector jQuery Selector of the container, which contains the HTML of the Adaptive Form
         * @method
         * @memberof GuideBridge
         * @since 6.1 FP1
         * @instance
         * @see {@link https://api.jquery.com/category/selectors/|jQuery selectors}
         */
        unloadAdaptiveForm : function (containerSelector) {
            // Let's clear all intervals
            // Never make intervals, which are not cleared
            if (window.guidelib && window.guidelib.intervals) {
                // check for null safe
                window.clearInterval(window.guidelib.intervals.intId);
            }
            // Remove all the child present in the container
            $(containerSelector).children().remove();
            // Clean the date picker html
            // todo: clean other HTML which we add outside Adaptive Form
            $('body').find(".datePickerTarget").remove();

            // todo: what are the even listeners to clean ?
            $(window).off("guideModelInitialized");
            $(window).off("guideInitialized");
            $(window).off("guideInitializationError");
            // todo: What if there is an existing load, scroll or resize listener already present in page ?
            $(window).off("load scroll resize");
            $(window).off("keydown.guides");

            $('.guideContainerWrapperNode').off("swiperight");
            $('.guideContainerWrapperNode').off("swipeleft");

            // Remove all delegated event listeners
            $(document).off('click.guidetab.data-api');
            $(document).off('click.guideAddRemove.data-api');

            // Remove date picker event listeners
            $(window).off("touchstart.datetimepicker mousedown.datetimepicker");

            if (window.guidelib) {
                // Start cleaning data
                window.guidelib.runtime = {
                    guide : null,
                    af : null, // not sure if making it null would impact, since this namespace hold's public functions
                    guideContext : null,
                    _private : {},
                    errorManager : null
                };

                window.guidelib.internal = {
                    liveModel : null,
                    liveDataUtils : null,
                    GuideDirtyMarkerAndVisitor : null
                };
            }

            if (window.guideBridge) {
                // Unload all guideBridge references
                window.guideBridge._guide = null;
                window.guideBridge._guideView = null;
                window.guideBridge._$target = null;
                window.guideBridge._guideDoc = null;
            }
            if (window.xfalib) {
                // We always load ut for logger
                window.xfalib.ut = null;
            }
            // If form bridge exist's call form bridge to destroy form
            if (window.formBridge) {
                window.formBridge.destroyForm();
            }
            // Clear any jquery cache, this should avoid memory leak
            if (window.jQuery) {
                // note: repeatable template marker div was held by jquery fragment
                // Before converting the HTML string to a DOM subtree, there is a lot of process involved
                // To make the process faster there is a "fragment cache" that saves the processed string as DOM nodes
                // Let's clean the fragment cache
                window.jQuery.fragments = {};
            }

            if (window.guidelib && window.guidelib.model) {
                // Clean accessible objects
                window.guidelib.model.GuideNode.guideUtil = null;
            }

            // Lets clean all guidelib object's at first level
            // Let's hope there are no closure objects created or any reference of objects inside guidelib
            _.each(window.guidelib, function (obj, key) {
                // "util", "event", "model", "view", "runtime", "author", "log", "i18n", "guideReplaced" get's cleaned here
                window.guidelib[key] = undefined;
            });

            if ($) {
                // Lets clean all jquery plugin's created
                //window.$.Widget = undefined;
                //window.$.widget = undefined;
                $.xfaWidget = undefined;
                // May be required if we want to unload the entire page.
                // window.$.fn = undefined;
                $.prototype.abstractWidget = undefined;
                $.prototype.adobeDateTimePicker = undefined;
                $.prototype.adobeFileAttachment = undefined;
                $.prototype.adobeFileUploader = undefined;
                $.prototype.dateTimeEdit = undefined;
                $.prototype.dropDownList = undefined;
                $.prototype.defaultWidget = undefined;
                $.prototype.fileUpload = undefined;
                $.prototype.imageField = undefined;
                $.prototype.listBox = undefined;
                $.prototype.nwkListBox = undefined;
                $.prototype.numericInput = undefined;
                $.prototype.signatureField = undefined;
                $.prototype.ScribbleImageField = undefined;
                $.prototype.textField = undefined;
                $.prototype.xfaButton = undefined;
                $.prototype.XfaCheckBox = undefined;
            }
        },

        /**
         * Disables all the fields and global toolbar
         * @private
         */
        _disableForm : function () {
            var rootPanel = guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0]"),
                globalToolbar = guideBridge.resolveNode("guide[0].guide1[0].toolbar[0]");

            // The following API disables the loaded fields
            rootPanel.disableAllFields();
            // The following API disables the form toolbar
            if (globalToolbar) {
                globalToolbar.disableAllFields();
            }
        },

        /**
         * @summary Disables the adaptive form, i.e. it disables all the fields and buttons, including toolbar's button
         * @method
         * @memberof GuideBridge
         * @since 6.3
         */
        disableForm : function () {
            guideBridge._disableForm();
            //Listening on guideBridge for "elementLazyLoaded" event to disable lazily loaded fields
            guideBridge.on("elementLazyLoaded", guideBridge._disableForm);
        },

        _playGuideJson : function (options) {
            this._guide.setGuideState(guidelib.model.GuideSchema.prototype.GuideStateConstants.GUIDE_STATE_MERGE_PROGRESS);
            /*
             * no need to check here since merged json will not have xfaState if
             * xdp is invalid
             */
            if (this._isXfaGuide() && options.guideState.xfaState && options.guideState.xfaState.xfaDom) {
                var that = this;
                window.formBridge.restoreFormState({
                    formState : options.guideState.xfaState,
                    context : this,
                    //NOCHECKMARX - This is error callback to be provided by the user of this API.
                    error : options.error || defaultErrorHandler,
                    success : function () {
                        that._playNonXfaJson(options);
                    }
                });
            } else {
                this._playNonXfaJson(options);
            }
        },

        _playNonXfaJson : function (options) {
            // try to  get xml-s from restore state 1st as they will be more relevant than the prefill state
            var xmlStr = getOrElse(options, "guideState.guideLiveData", null)
                    || getOrElse(options, "guideState.guidePrefillXml", null),
                xfaXmlStr = getOrElse(options, "guideState.xfaState.currentContext.data", null)
                    || JSON.parse(getOrElse(options, "guideState.xfaState.xfaRenderContext", "{}")).data,
                jsonStr = getOrElse(options, "guideState.guidePrefillJson", null);
            if (xmlStr || xfaXmlStr) {
                guidelib.internal.liveDataUtils.initLiveData(xmlStr, xfaXmlStr,
                    _.isString(this._guide.xdpRef), _.isString(this._guide.xsdRef),
                    this._guide.getAttribute("xsdRootElement"));
                guidelib.internal.liveModel.prefillCrossFragFields();
                guidelib.internal.liveDataUtils.dropXfaXml();
            } else if (jsonStr) {
                guidelib.internal.liveDataUtils.initLiveData(jsonStr);
            }

            // If the restore state is not stored in local storage,then use it from the json passed from the server
            if (options.guideState.guideDom) {
                this._guide.playJson(options.guideState.guideDom);
            }
            if (options.guideState.unboundDataMap && options.guideState.unboundDataMap.data) {
                this.visit(function (node) {
                    if ((node instanceof guidelib.model.Field || node instanceof guidelib.model.GuideCompositeField)
                        && !node.getAttribute("bindRef") && options.guideState.unboundDataMap.data[node.name]) {
                        var nodeValue = options.guideState.unboundDataMap.data[node.name];
                        //If the xml had empty tag, an empty object will come in the map, so set to null.
                        if (_.isObject(nodeValue) && _.isEmpty(nodeValue)) {
                            node._setGuideValue(null);
                        } else {
                            node._setGuideValue(nodeValue);
                        }

                        if (node.className === "guideRadioButton") {
                            node.prevOnItem = node.getSelectedIndex(node.jsonModel._value);
                        }
                    }
                });
            }
            this._guide.setGuideState(guidelib.model.GuideSchema.prototype.GuideStateConstants.GUIDE_STATE_MERGE_COMPLETE);
            this._guide.prepare();

            if (options.success) {
                options.success.call(this);
            }
        },

        _postExternalMessage : function (message) {
            if (this.userConfig["postExternalMessageConfig"] && _.isFunction(this.userConfig["postExternalMessageConfig"]["postExternalHandler"])) {
                var externalHandler = this.userConfig["postExternalMessageConfig"]["postExternalHandler"];
                externalHandler(message);
            }
        },

        _isXfaGuide : function () {
            if (this._guide.xdpRef) {
                return true;
            } else {
                return false;
            }
        },
        _readRuntimeLocale : function (runtimeLocale) {
            return this.customContextProperty("runtimeLocale", runtimeLocale);

        },

        /*
         * checks whether xdp present in Adaptive Form is valid or not
         * This is verified by checking the xdpRef property in guideContext
         */
        _isValidXFAGuide : function () {
            return !_.isUndefined(guidelib.runtime.guideContext.xdpRef);
        },

        _isEditDesignMode : function () {
            if (window.CQ && window.CQ.WCM && (window.CQ.WCM.isEditMode() || window.CQ.WCM.isDesignMode())) {
                return true;
            } else {
                return false;
            }
        },

        /**
         *
         * This function does following:
         * a) On first call, it creates the uuid storage and returns the UUID
         * b) On subsequent calls, it just returns the uuid
         * c) if uuid is not created then it returns null
         *
         * @private
         */
        _getUUID : function () {
            if (this._formInstanceUUID) {
                return this._formInstanceUUID;
            }
            //Generate the UUID for the form instance on client side
            var successFlag = true;
            this._formInstanceUUID = guideBridge._produceUUID();
            successFlag = createUUIDStorage(this._formInstanceUUID);
            if (!successFlag) {
                var message = "Could not create UUID storage";
                guideBridge._guide.logger().log(message);
            }
            return this._formInstanceUUID;
        },

        /**
         * This will produce new UUID
         * @returns {string}
         * @private
         */
        _produceUUID : function () {
            var uuid = $('div.guideContainerWrapperNode').data("tmproot"),
                uuidSuffix = Math.floor((Math.random() * 10000) + 1),
                uuidCurrentTime = new Date().getTime();
            return uuid + "_" + uuidCurrentTime + uuidSuffix;
        },

        /**
         * Signature of the callback for the GuideBridgeEvent Listener. It must be passed as handler in the
         * {@link GuideBridge#on|on} API.
         * @callback GuideBridge~GuideBridgeEventCallback
         * @param {jQuery.Event} event jQuery Event Object with target property being the instance of GuideBridge
         * @param {Object} payload Payload containing extra information in the API
         * @see {@link http://api.jquery.com/category/events/event-object/|jQuery.Event}
         * @since 6.0
         */
        /**
         * The API can be used to add an event listener for events triggered by GuideBridge object
         *
         * @summary add a listener on a GuideBridge Event.
         * @param eventName {string} name of the event for which listener has to be added. It must be one of the
         * following events
         * * bridgeInitializeComplete
         * * elementEnableChanged
         * * elementFocusChanged
         * * elementHelpShown
         * * elementLazyLoaded
         * * elementNavigationChanged
         * * elementValidationStatusChanged
         * * elementValueChanged
         * * elementVisibleChanged:
         * * guideAutoSaveStart
         * * submitStart
         * * validationComplete
         * @param {function} handler callback to be invoked whenever the event is triggered. The signature of the
         * callback is {@link GuideBridge~GuideBridgeEventCallback|GuideBridgeEventCallback}
         * @param {object} [context] The _this_ object in the _handler_ will point to _context_
         *
         * @method on
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */
        on : function (eventName, handler, context) {
            this._$target.on(eventName, handler, context);
        },

        /**
         * Unregister the event registered using the {@link GuideBridge#on|on} function
         *
         * @param eventName {string} name of the event to un-register.
         * @param [selector] {string} selector which should match the one originally passed to guideBridge's on() while registering handlers
         * @param [handler] {function} handler which needs to un-registered. If not provided all the event listeners
         * will be unregistered
         *
         * @method off
         * @memberof GuideBridge
         * @instance
         * @since 6.0
         */

        off : function (eventName, selector, handler) {
            this._$target.off(eventName, selector, handler);
        },

        /**
         * Internal API
         * @param extraParamerts
         * @param eventName
         * @private
         */
        trigger : function (eventName, extraParamerts) {
            this._$target.trigger(eventName, extraParamerts);
        },

        /**
         * This will  return information
         * weather the the file attachment preview
         * needs to be enabled or not
         * @private
         * */
        _disablePreview : function () {
            if (guidelib.runtime && guidelib.runtime.guideContext) {
                return guidelib.runtime.guideContext.disablePreview;
            }
        },
        /**
         * If the name of the file attachments have to be made unique then the
         * vaule of this function would be true else false
         * @returns {*}
         * @private
         */
        _makeFileNameUnique : function () {
            if (guidelib.runtime && guidelib.runtime.guideContext) {
                return guidelib.runtime.guideContext.makeFileNameUnique;
            }
        },
        /*this function is used to mince out
         * file attachmenemts name and dom in case of
         * anonymous user
         * */
        _getFileNameFileDomMap : function () {
            var fileAttachmentsList = [];
            this._getFileAttachmentsList(fileAttachmentsList);
            return this._juiceOutNameAndFileDomMap(fileAttachmentsList);
        },

        /**
         * Returns the file attachment name and dom (input type=file) element
         * The returned object contains a list of file Doms and a list of corresponding file Names.
         * If the file is already uploaded, then the file DOM is null and file Name contains the URL.
         * @param fileAttachmentsList object list of file attachment models
         * @returns {{fileName: Array, fileDom: Array}}
         * @private
         */
        _juiceOutNameAndFileDomMap : function (fileAttachmentsList) {
            var fileDoms = [],
                fullFileNames = [],
                fileCount = 0,
                loadedFileDoms = [],
                loadedFileNames = [];

            _.each(fileAttachmentsList, function (fileAttachmentModel, index) {
                var fileName = fileAttachmentModel["fileAttachment"].value,
                    fileAttachmentModelValue = fileAttachmentModel.value,
                    fileNameList = guideBridge._makeFileNameUnique() ? fileAttachmentModelValue : fileName;
                if (fileNameList) {
                    var fileNames = fileNameList.split("\n");
                    var fileList = $.extend(true, [], fileAttachmentModel.fileList);
                    _.each(fileList, function (file, index) {
                        var nameOfFile = fileNames[index],
                            completeNameOfFile = null;
                        if (nameOfFile != null && file != null) {
                            //file can be null when you click save two times continuously without change in
                            //Adaptive Form context
                            completeNameOfFile = fileAttachmentModel.name + "/" + nameOfFile;
                            // case: if there is a file dom
                            if (!_.isString(file)) {
                                // Check if the value exist in the file, this is done because in IE9 and IE10 the list
                                // will have an extra empty dom
                                if ($(file).val().length > 0) {
                                    $(file).attr('name', completeNameOfFile);
                                    loadedFileNames[fileCount] = completeNameOfFile;
                                    loadedFileDoms[fileCount++] = $(file);
                                }
                            } else {
                                // since there is no file dom in case of draft reload, make it null
                                loadedFileNames[fileCount] = file;
                                loadedFileDoms[fileCount++] = null;
                            }
                        }
                    }, this);
                }
            }, this);

            // create the dom and name map for lazy file upload components as well
            var lazyFileMap = guidelib.internal.liveDataUtils._getLazyAttachmentMap(),
                lazyFileDom = [],
                lazyFileName = [];
            _.each(lazyFileMap, function (mapObject, key) {
                var fileList = mapObject.fileList;
                var fileUploadValue = mapObject.value.split("\n");
                _.each(fileList, function (value, index) {
                    if (!_.isString(value)) {
                        var fullName = guidelib.util.GuideUtil.guideSomToComponentName(key) + "/" + fileUploadValue[index];
                        lazyFileDom.push(value);
                        lazyFileName.push(fullName);
                    } else {
                        lazyFileDom.push(null);
                        lazyFileName.push(value);
                    }
                });
            });

            // concatenate the arrays for loaded and unloaded file doms and names
            fileDoms = loadedFileDoms.concat(lazyFileDom);
            fullFileNames = loadedFileNames.concat(lazyFileName);

            return {
                "fileName" : fullFileNames,
                "fileDom" : fileDoms
            };
        },

        setValidationContext : function (context) {
            var ec = guidelib.util.ErrorConstants;
            if (typeof ec[context] === "number") {
                var nContext = ec[context];
                if (nValidationContext < nContext) {
                    nValidationContext = nContext;
                    sValidationContext = context;
                }
            }
        },

        unsetValidationContext : function (context) {
            if (context === sValidationContext) {
                nValidationContext = 0;
                sValidationContext = "";
            }
        },

        getValidationContext : function () {
            return sValidationContext;
        },

        /**
         * @summary Enable/Disable the swipe gesture for navigation on touch devices.
         * @param swiptLeft boolean flag to enable(true)/disable(false) the swipe left gesture to perform next item navigation
         * @param swipeRight boolean flag to enable(true)/disable(false) the swipe right gesture to perform previous item navigation
         * @method
         * @memberof GuideBridge
         * @instance
         * @since 6.3
         */
        enableSwipeGesture : function (swiptLeft, swipeRight) {
            $guideWrapperNode = $('.guideContainerWrapperNode');
            $guideWrapperNode.off('swipeleft', window.guideBridge._performItemDeepNavigationNext);
            $guideWrapperNode.off('swiperight', window.guideBridge._performItemDeepNavigationPrevious);
            if (swiptLeft) {
                $guideWrapperNode.on('swipeleft', window.guideBridge._performItemDeepNavigationNext);
            }
            if (swipeRight) {
                $guideWrapperNode.on('swiperight', window.guideBridge._performItemDeepNavigationPrevious);
            }
        },

        /**
         * Enable the next item navigation (deep) using swipe left gesture
         * @private
         */
        _performItemDeepNavigationNext : function () {
            window.guideBridge.setFocus({
                somExpression : null,
                focusOption : 'nextItemDeep',
                runCompletionScript : true,
                skipFieldFocus : true
            });
        },

        /**
         * Enable the previous item navigation (deep) using swipe right gesture
         * @private
         */
        _performItemDeepNavigationPrevious : function () {
            window.guideBridge.setFocus({
                somExpression : null,
                focusOption : 'prevItemDeep',
                runCompletionScript : true,
                skipFieldFocus : true
            });
        },

        /**
         * Update the model popup that appears at click of file attachment listing button
         * This function is currently run of the clickExp of fileAttachmentListingButton
         * @param node
         * @private
         */
        _updateFileListing : function (node) {
            var somExpression = node.somExpression,
                viewOfListingButton = guideBridge._guideView.getView(somExpression);
            viewOfListingButton._clearFileListing();
            guideBridge.visit($.proxy(viewOfListingButton._updateFileListing, viewOfListingButton));

        },

        registerPanelProvider : function (panelProvider) {
            var resultObj = new GuideResultObject();
            if (this.panelProvider == null) {
                resultObj.data = panelProvider;
                this.panelProvider = panelProvider;
                return resultObj;
            }
            resultObj.addMessage(2, "registrationError: PanelProvider already registered", "");
            return resultObj;
        }
    });

    window.guideBridge = new GuideBridge();
    window.guideBridge._$target = $(window.guideBridge);

    try {
        var evnt = document.createEvent("CustomEvent");
        evnt.initCustomEvent("bridgeInitializeStart", true, true, {"guideBridge" : window.guideBridge});
        window.dispatchEvent(evnt);
    } catch (exception) {
        // written for env rhino to execute(for server side validation)
        // todo: once env rhino implements CustomEvent and initCustomEvent remove this
        // this._guide.logger().log(exception);
    }

    if (!window.guideBridge.userConfig["postExternalMessageConfig"]) {
        if (window !== window.parent) {
            try {
                window.parent.document.getElementById(window.name);
                //We are here means no cross domain issue. So if user has not defined custom postExternalMessageConfig and
                // then we'll create one which would just send event on parent.
                window.guideBridge.registerConfig("postExternalMessageConfig", {
                    "postExternalHandler" : function (message) {
                        try {
                            var tmpEvent = document.createEvent("CustomEvent");
                            tmpEvent.initCustomEvent(message.name, true, true, message.data);
                            window.parent.dispatchEvent(tmpEvent);
                        } catch (exception) {
                            // written for env rhino to execute
                            //this._guide.logger().log(exception);
                        }
                    }
                });
            } catch (e) {
                //ignore the error
            }
        }
    }

    window.guideBridge._postExternalMessage({
        name : "bridgeInitializeStart",
        data : {
            "guideBridge" : window.guideBridge
        }
    });
})($, _);

/**
 * @package guidelib.model.DataNode
 * @version 0.0.1
 */

(function ($, _, guideBridge, guidelib, formBridge, xfalib) {

    var LiveDataUtils = guidelib.model.LiveDataUtils = xfalib.ut.Class.extend({

        constants : {
            SKELETON_XML : '<afData><afUnboundData><data/></afUnboundData><afBoundData><data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/"/></afBoundData></afData>',
            SKELETON_JSON : '{"afData":{"afUnboundData":{"data":{}},"afBoundData":{"data":{}}}}',
            UNBOUND_SKELETON : '<unBound></unBound>',
            UNBOUND_JSON_SKELETON : '{"afUnboundData":{}}',
            INDEXED_XPATH_PAT : new RegExp(/\/[^\/]+\[\d+\]/),
            INDEXED_XPATH_PAT_JSON : new RegExp(/\/[^\/]+\/\d+/),
            XFA_DATA_NODE_ATTR_NAME : "xfa:dataNode",
            XFA_DATA_NODE_ATTR_VALUE : "dataGroup",
            UNKNOWN_XSD_ROOT_ELEMENT : "?",
            AF_ROOT_TAG : "afData",
            BOUND_TAG : "afBoundData",
            UNBOUND_TAG : "afUnboundData",
            XFA_TAG : "xfa",
            DATA_TAG : "data",
            BOUND_DATA_XPATH : "afBoundData/data",
            UNBOUND_DATA_XPATH : "afUnboundData/data",
            AF_DRAFT_TAG : "afSubmissionInfo/afDraft"
        },

        initialize : function () {
            LiveDataUtils._super.initialize.call(this);
            this._boundDataRoot = null;
            this._unboundDataRoot = null;
            this._xfaDataRoot = null;
            this.lazyAttachmentMap = {};
        },

        /**
         * This function updates the lazy attachment Map from the model.
         * It gets the value and fileList from the model and updates the map.
         * If the fileUpload component is not in a lazy panel then it removes
         * its entry form the map(if the entry is already there).
         * @param model
         * @private
         */
        _updateLazyAttachmentMapFromModel : function (model) {
            // add the component in the map only when its in a lazy panel
            // add the entry in map only when its not not empty
            if (model.parent._selfOrAncestorIsLazyReference && model.value && model.fileList) {
                this.lazyAttachmentMap[model.somExpression] = {
                    value : model.value,
                    fileList : model.fileList
                };
            } else {
                if (this.lazyAttachmentMap[model.somExpression]) {
                    delete this.lazyAttachmentMap[model.somExpression];
                }
            }
        },

        /**
         * This function returns the value in the lazy attachment map for the model.
         * It removes the entry from the map as well. This is required so that the map gets
         * updated with the new values when the panel unloads.
         * @param model
         * @returns {*}
         * @private
         */
        _getAttachmentDataForModel : function (model) {
            if (model.somExpression) {
                var data = this.lazyAttachmentMap[model.somExpression];
                delete this.lazyAttachmentMap[model.somExpression];
                return data;
            }
        },

        _getLazyAttachmentMap : function () {
            return this.lazyAttachmentMap;
        },

        dropXfaXml : function () {
            this._xfaDataRoot = null;
        },

        // only called from test framework
        destroy : function () {
            this._liveDataDoc = null;
            this._boundDataRoot = null;
            this._unboundDataRoot = null;
            this._xfaDataRoot = null;
        },

        initLiveData : function (prefillDataStr, xfaPrefillDataStr) {
        },

        isLiveDataInitialized : function () {
        },

        getLiveDataStr : function () {
        },

        getLiveDataDoc : function () {
            return this._liveDataDoc;
        },

        _isNonNaked : function () {
        },

        _getNameAndIndex : function (xpathPart) {
        },

        isIndexedPath : function (xpath) {
        },

        _createElements : function (contextNode, xpathParts) {
        },

        _createRepeatedElements : function (contextNode, xpathParts) {
        },

        _createChildElement : function (parentElement, elemName) {
        },

        _createAttributeNode : function (parentElement, attrName) {
        },

        getContextNode : function (schemaPath, dataSection, createMissingNodes, lastNodeValue) {
        },

        addIndexToPath : function (path, index) {
        },

        _getElement : function (node, xpath, options) {},

        hasChildNodes : function (node) {
        },

        /**
         * Removes a child node from its parent
         * @param parentNode {Node} Parent Node from which to remove the child node
         * @param targetNode {String} Node name of the child to remove
         * @param index Index of the child node to remove
         */
        removeChild : function (parentNode, targetNodeName, index) {
        },

        insertNode : function (parentNode, childNodeName, index) {
        },

        _getDataContext : function (model, bound_indexedXpathSoFar, unBound_indexedXpathSoFar) {
            var bindRef = model.bindRef,
                xmlSec,
                indexedXpath;

            if (model._isXfaNode()) {
                xmlSec = guidelib.internal.liveDataUtils.constants.XFA_TAG;
                indexedXpath = xfalib.ut.XMLUtils.dataSom2xpath(model.dataSom);
            } else if (_.isEmpty(bindRef)) {
                xmlSec = guidelib.internal.liveDataUtils.constants.UNBOUND_TAG;
                indexedXpath = unBound_indexedXpathSoFar + '/' + model.getAttribute("name").replace(/\s+/g, '');
                // use attr 'name' here, as schema might have an elem called 'name'
            } else {
                xmlSec = guidelib.internal.liveDataUtils.constants.BOUND_TAG;

                var xpathMatch = guidelib.internal.liveDataUtils.getMatchingXpathHierarchy(bound_indexedXpathSoFar, bindRef);
                if (xpathMatch.isCrossHierarchy) {
                    indexedXpath = bindRef;
                } else {
                    indexedXpath = bound_indexedXpathSoFar;
                    if (!_.isEmpty(xpathMatch.suffixParts)) {
                        indexedXpath += '/' + xpathMatch.suffixParts.join('/');
                    }
                }
            }

            return {
                'xmlSec' : xmlSec,
                'indexedXpath' : indexedXpath
            };
        },

        /**
         * return true if both xpath parts have same element name and indices
         * absence of index in the templateName is ignored
         * @param indexedName
         * @param templateName
         * @returns {boolean}
         * @private
         * @memberof LiveDataUtils
         */
        _cmpXpathParts : function (indexedName, templateName) {
          },

        /**
         * get a partition of the matching xpath part hierarchy
         * the matching parts have same element names and agreeable indices
         * @param parentXpath
         * @param currentXpath
         * @returns {{prefixParts: Array, suffixParts: (*|Array.<T>|list), isCrossHierarchy: boolean}}
         * @memberof LiveDataUtils
         */
        getMatchingXpathHierarchy : function (parentXpath, currentXpath) {
            var isCrossHierarchy = false,
                prefixParts = [],
                suffixParts = this._sanitizedXpathParts(currentXpath);

            _.find(this._sanitizedXpathParts(parentXpath), function (parentPart) {
                if (this._cmpXpathParts(parentPart, suffixParts[0])) {
                    prefixParts.push(parentPart);
                    suffixParts.shift();
                } else {
                    isCrossHierarchy = true;
                    return true;
                }
            }, this);

            return {
                'prefixParts' : prefixParts,
                'suffixParts' : suffixParts,
                'isCrossHierarchy' : isCrossHierarchy
            };
        },

        _getXpathContext : function (targetPanel) {
            var boundXpath = '',
                unBoundXpath = '',
                ancestors = [],
                panel = targetPanel.parent;

            while (panel instanceof guidelib.model.GuidePanel) {
                if (panel._preserveLazyValue()) {
                    ancestors.unshift(panel);
                }
                panel = panel.parent;
            }

            _.each(ancestors, function (ancestor) {
                var xmlContext = ancestor._syncModelAndData(boundXpath, unBoundXpath);
                boundXpath = xmlContext.bound;
                unBoundXpath = xmlContext.unBound;
            });

            return {
                'bound' : boundXpath,
                'unBound' : unBoundXpath
            };
        },

        _applyOnLiveData : function (action, targetPanel) {
            if (_.isString(targetPanel)) {
                targetPanel = guideBridge.resolveNode(targetPanel);
            }

            if (targetPanel instanceof guidelib.model.GuidePanel) {
                var indexedXpathsFromRoot = guidelib.internal.liveDataUtils._getXpathContext(targetPanel);
                targetPanel[action](indexedXpathsFromRoot.bound, indexedXpathsFromRoot.unBound);
            } else {
                guideBridge._guide.rootPanel[action]('', '');
            }
        },

        /**
         * will capture the currently loaded model hierarchy in a xml doc to be referred to later by lazily loaded panels
         * @private
         * @memberof LiveDataUtils
         */
        updateLiveData : function (targetPanel) {
            this._applyOnLiveData('_updateLiveData', targetPanel);
        },

        /**
         * will replay the model hierarchy from the live xml, for the supplied panel
         * @param targetPanel
         * @private
         * @memberof LiveDataUtils
         */
        playLiveData : function (targetPanel) {
            this._applyOnLiveData('_playLiveData', targetPanel);
        },

        /**
         * Converts the xml info of the draft part to map and returns
         * @param xmlString
         * @private
         * @memberof LiveDataUtils
         */
        convertSubmissionInfoToMap : function (xmlString) {
        },

        addDataNodeInfo : function (contextNode) {
        },

        /**
         * Set the value of the node referred by xpath in the bounded/unbounded
         * section as specified by section. This optionally creates the data nodes
         * if they are not present
         * @param xpath
         * @param section
         * @param createMissingNodes
         * @param value
         */
        setDataValue : function (xpath, section, createMissingNodes, value) {
        },

        /**
         * Set the rich text(html) value of the node referred by xpath in the bounded/unbounded
         * section as specified by section. This optionally creates the data nodes
         * if they are not present
         * @param xpath
         * @param xmlSection
         * @param createMissingNodes
         * @param value
         */
        setRichTextValue : function (xpath, xmlSection, createMissingNodes, value) {
            this.setDataValue(xpath, xmlSection, createMissingNodes, value);
        },

        /**
         * Returns the value of the node referred by xpath in the bounded/unbounded
         * section as specified by section. It returns undefined if the node doesn't
         * exist
         * @param xpath
         * @param section
         */
        getDataValue : function (xpath, section) {
        },

        _convertModelIndexToDataIndex : function (index) {
        },

        getParentRef : function (path) {
        },

        /**
         * returns the parent data node for the context specified by dataNodeContext
         * @param dataNodeContext {object} containing xpath and section
         * @param createIfMissing
         * @returns {*}
         * @param parentNodeValue
         */
        getParentDataNode : function (dataNodeContext, createIfMissing, parentNodeValue) {
            var parentRef = this.getParentRef(dataNodeContext.indexedXpath),
                parentNode;
            if (_.isEmpty(parentRef)) {
                parentNode = this.getContextNode("", dataNodeContext.xmlSec, false);
            } else {
                parentNode = this.getContextNode(parentRef, dataNodeContext.xmlSec, createIfMissing, parentNodeValue);
            }
            return parentNode;
        }

    });

}($, _, window.guideBridge, window.guidelib, window.formBridge, window.xfalib));

/**
 * @package guidelib.model.DataNode
 * @version 0.0.1
 */

(function ($, _, guideBridge, guidelib, formBridge, xfalib) {
    var getOrElse = xfalib.ut.XfaUtil.prototype.getOrElse;

    var LiveJsonUtils = guidelib.model.LiveJsonUtils = guidelib.model.LiveDataUtils.extend({

        initialize : function () {
            LiveJsonUtils._super.initialize.call(this);
            this._liveDataDoc = null;
        },

        initLiveData : function (prefillDataStr) {
            LiveJsonUtils._super.initLiveData.apply(this, arguments);
            prefillDataStr = prefillDataStr || getOrElse(guidelib.runtime, "guideContext.guidePrefillJson", null);

            if (_.isString(prefillDataStr)) {
                var prefillDataDoc = JSON.parse(prefillDataStr);

                if (this._isNonNaked(prefillDataDoc)) {
                    // non naked json, assuming full hierarchy afdata/afbounddata/data
                    this._liveDataDoc = prefillDataDoc;
                    this._boundDataRoot = this._getElement(this._liveDataDoc.afData, this.constants.BOUND_DATA_XPATH);
                    this._unboundDataRoot = this._getElement(this._liveDataDoc.afData, this.constants.UNBOUND_DATA_XPATH);

                } else {
                    // naked json start from prefill data root
                    this._boundDataRoot = prefillDataDoc;
                    this._unboundDataRoot = JSON.parse(this.constants.UNBOUND_JSON_SKELETON)[this.constants.UNBOUND_TAG];  // need this for unbound data fill across lazy
                    this._liveDataDoc = prefillDataDoc;
                }
            } else {
                // init default skeleton for no prefill cases
                this._liveDataDoc = JSON.parse(this.constants.SKELETON_JSON);
                this._boundDataRoot = this._getElement(this._liveDataDoc.afData, this.constants.BOUND_DATA_XPATH);
                this._unboundDataRoot = this._getElement(this._liveDataDoc.afData, this.constants.UNBOUND_DATA_XPATH);
            }
        },

        /*
         * This API gets the element w.r.t to the node.
         * Eg - path is a/b/c, then it converts the path to a.b.c and then searches for c.
         */
        _getElement : function (node, path, options) {
            if (!(node instanceof Object)) {
                return null;
            }

            if (_.isEmpty(path) || !_.isString(path)) {
                return node;
            }
            options = options || {};
            var index = options.index;
            var convertedPath = path.split('/').join('.');
            if (!(_.isUndefined(index) || _.isNull(index))) {
                convertedPath = convertedPath + "." + index;
            }
            return getOrElse(node, convertedPath, null);
        },

        /**
         * This function checks if the data contains naked or non naked json
         * @returns {boolean}
         * @private
         * @memberof LiveJsonUtils
         * @param prefillData
         */
        _isNonNaked : function (prefillData) {
            prefillData = prefillData || this.getLiveDataDoc();
            if (prefillData) {
                return prefillData.hasOwnProperty("afData");
            } else {
                return false;
            }
        },

        isLiveDataInitialized : function () {
            return (this.getLiveDataDoc() instanceof Object);
        },

        getLiveDataStr : function () {
            if (this.isLiveDataInitialized()) {
                return JSON.stringify(this.getLiveDataDoc());
            } else {
                return '';
            }
        },

        /*
         * This API will remove the spaces,"\" from the path.
         * It will return an array after splitting the path.
         * Eg - for a/0/b/c, it will return ["a/0","b","c"]
         */
        _sanitizedXpathParts : function (path) {
            var pathParts = (path || '').replace(/^\//, '').replace(/\s+/g, '');
            pathParts = this._splitForIndex(pathParts);

            return _.filter(pathParts, function (xpathPart) {
                return this._getNameAndIndex(xpathPart) !== null;
            }, this);
        },

        _splitForIndex : function (path) {
            var pathArray = [];
            var pathParts = path.split('/');
            for (var i = 0; i < pathParts.length; i++) {
                var str = pathParts[i];
                if ((i + 1) < pathParts.length && !isNaN(pathParts[i + 1]) && !_.isEmpty(pathParts[i + 1])) {
                    str = str + "/" + pathParts[i + 1];
                    i = i + 1;
                }
                pathArray.push(str);
            }
            return pathArray;
        },

        /**
         * Returns the index associated with the pathPart.
         * Eg - if pathPart is 'a/1', then it returns {name : a, index : 1}
         * @param pathPart
         * @returns {*}
         * @private
         */
        _getNameAndIndex : function (pathPart) {
            if (pathPart) {
                var elName = pathPart.match(/^([^\s\/]+)(?:\/(\d+))?$/);  // match the whole string
                if (elName !== null) {
                    return {
                        name : elName[1],
                        index : elName[2] ? parseInt(elName[2]) : -1
                        // -1 index for depicting non repeatable element
                    };
                }
            }
            return null;
        },

        _cmpXpathParts : function (indexedName, templateName) {
            if (indexedName && templateName) {
                var match1 = this._getNameAndIndex(indexedName),
                    match2 = this._getNameAndIndex(templateName);
                return !_.isEmpty(match1 && match2)
                    && match1.name === match2.name
                    && (match2.index === -1 || match1.index === match2.index);
            }
            return false;
        },

        /**
         * This function gets or creates the node if its not there. The node can be any valid JSON Value
         * null, string, object, array, number, boolean.
         * @param schemaPath
         * @param dataSection
         * @param createMissingNodes
         * @param lastNodeValue
         * @returns {*}
         */
        getContextNode : function (schemaPath, dataSection, createMissingNodes, lastNodeValue) {
            var contextNode,
                baseContextNode,
                basePath = "",
                pathParts = this._sanitizedXpathParts(schemaPath);
            if (dataSection == this.constants.BOUND_TAG) {
                baseContextNode = this._boundDataRoot;
                if (this._isNonNaked(this._liveDataDoc)) {
                    basePath = "afData/" + this.constants.BOUND_DATA_XPATH + "/";
                }
            } else if (dataSection === this.constants.UNBOUND_TAG) {
                baseContextNode = this._unboundDataRoot;
                if (this._isNonNaked(this._liveDataDoc)) {
                    basePath = "afData/" + this.constants.UNBOUND_DATA_XPATH + "/";
                }
            }
            if (!_.isEmpty(pathParts)) {
                var path = (basePath + pathParts.join('/'));

                // return baseContextNode for naked json. path can be "" only for naked json.
                if (path == "" && !this._isNonNaked(this._liveDataDoc)) {
                    return baseContextNode;
                }

                contextNode = this._getElement(this._liveDataDoc, path);
                if (!contextNode && createMissingNodes) {
                    contextNode = this._createElements(baseContextNode, pathParts, lastNodeValue);
                }
            } else {
                contextNode = baseContextNode;
            }
            return contextNode;
        },

        /**
         * This function creates the node at the path.
         *
         * @param contextNode
         * @param pathParts
         * @returns {*}
         * @private
         * @param lastNodeValue
         */
        _createElements : function (contextNode, pathParts, lastNodeValue) {
            if (!(contextNode instanceof Object)) {
                return null;
            }

            if (_.isEmpty(pathParts)) {
                return contextNode;
            }

            // recurse and create one level of tags at a time
            contextNode = this._createRepeatedElements(contextNode, pathParts, lastNodeValue);
            return contextNode;
        },

        // it will always return the parent node after checking the last token
        _createRepeatedElements : function (contextNode, pathParts, lastNodeValue) {
            var childContextNode = contextNode,
                xpathPart = this._getNameAndIndex(pathParts[0]),
                elemName = xpathPart.name,
                index = xpathPart.index || 0,
                i,
                isLastToken = (pathParts.length == 1),
                elementNode = contextNode[elemName];
            // -1 signifies non repeating element
            if (index === -1) {
                if (elementNode == null) {
                    childContextNode = this._createChildElement(contextNode, elemName, isLastToken, lastNodeValue);
                } else {
                    childContextNode = elementNode;
                }
                // if its the last token, then stop recursion here and return the created node
                if (isLastToken) {
                    return childContextNode;
                }
            } else {
                if (elementNode != null) {
                    var numOfChildren = elementNode.length;
                    if (numOfChildren < index + 1) {
                        // create immediate 'extra' children
                        for (i = numOfChildren; i < index + 1; ++i) {
                            childContextNode = {};
                            contextNode[elemName].push(childContextNode);
                        }
                    } else {
                        childContextNode = elementNode[index];
                    }
                } else {
                    contextNode[elemName] = [];
                    for (i = 0; i < index + 1; ++i) {
                        childContextNode = {};
                        contextNode[elemName].push(childContextNode);
                    }
                }
            }
            // recursively create descendants
            return this._createElements(childContextNode, pathParts.slice(1), lastNodeValue);
        },

        _createChildElement : function (parentElement, elemName, isLastToken, nodeValue) {
            if (parentElement instanceof Object) {
                if (isLastToken) {
                    parentElement[elemName] = nodeValue;
                } else {
                    parentElement[elemName] = {};
                }
                return parentElement[elemName];
            }
        },

        isIndexedPath : function (xpath) {
            return (xpath || "").match(this.constants.INDEXED_XPATH_PAT_JSON) !== null;
        },

        /**
         * This function sets the value of the field in the live data document.
         * @param xpath
         * @param xmlSection
         * @private
         * @param createMissingNodes
         * @param value
         */
        setDataValue : function (xpath, xmlSection, createMissingNodes, value) {
            var lastSlash = xpath.lastIndexOf("/"),
                parentPath = xpath.substring(0, lastSlash),
                name = xpath.substring(lastSlash + 1),
                parent = this.getContextNode(parentPath, xmlSection, createMissingNodes, {});
            if (parent instanceof Object) {
                parent[name] = value;
            }
        },

        /**
         * This function sets the value in the model from the live data document.
         * @param node
         * @param field
         * @private
         */
        getDataValue : function (xpath, xmlSection) {
            var lastSlash = xpath.lastIndexOf("/"),
                parentPath = xpath.substring(0, lastSlash),
                name = xpath.substring(lastSlash + 1),
                parent = this.getContextNode(parentPath, xmlSection, false);
            if (parent instanceof Object) {
                return parent[name] === undefined ? null : parent[name];
            }
            return null;
        },

        addIndexToPath : function (path, index) {
            if (path.match(/\/\d+$/) === null) { // only add repeat index if it doesn't already end in one
                path += '/' + (index);
            } else {
                this.logger().debug("AF", "Tried to add index to already indexed JSON path :" + path);
            }
            return path;
        },

        hasChildNodes : function (node) {
            return !_.isEmpty(node);
        },

        removeChild : function (parentNode, targetNodeName, index) {
            parentNode[targetNodeName].splice(index, 1);
        },

        insertNode : function (parentNode, childNodeName, index) {
            if (parentNode[childNodeName] == null) {
                parentNode[childNodeName] = [];
            }
            for (var i = 0; i < index; i++) {
                if (parentNode[childNodeName][i] == null) {
                    parentNode[childNodeName][i] = {};
                }
            }
            parentNode[childNodeName].splice(index, 0, {});
            return parentNode[childNodeName][index];
        },

        getDataInstances : function (dataContext, dataNodeName) {
            return this.getContextNode(dataContext.indexedXpath, dataContext.xmlSec);
        },

        _convertModelIndexToDataIndex : function (index) {
            if (index < 0) {
                return 0;
            }
            return index;
        },

        getParentRef : function (path) {
            return path.replace(/\/[^\/]+(?:\/\d+)?$/, "");
        }

    });

}($, _, window.guideBridge, window.guidelib, window.formBridge, window.xfalib));

/**
 * @package guidelib.model.DataNode
 * @version 0.0.1
 */

(function ($, _, guideBridge, guidelib, formBridge, xfalib) {
    var isXdp, isXsd, isNone;

    var LiveXmlUtils = guidelib.model.LiveXmlUtils = guidelib.model.LiveDataUtils.extend({

        initialize : function () {
            LiveXmlUtils._super.initialize.call(this);

            if (_.isUndefined(document.evaluate)) {
                wgxpath.install();
            }
            this._liveDataDoc = null;
        },

        initLiveData : function (prefillXmlStr, xfaPrefillXmlStr, isXdp, isXsd, xsdRootElement) {
            LiveXmlUtils._super.initLiveData.apply(this, arguments);
            isXdp = isXdp || false;
            isXsd = isXsd || false;
            isNone = !(isXdp || isXsd);
            this.xsdRootElement = xsdRootElement;
            // init default skeleton for no pefill cases
            this._liveDataDoc = $.parseXML(this.constants.SKELETON_XML);
            this._boundDataRoot = this._getElement(this._liveDataDoc.documentElement, this.constants.BOUND_DATA_XPATH);
            this._unboundDataRoot = this._getElement(this._liveDataDoc.documentElement, this.constants.UNBOUND_DATA_XPATH);

            if (_.isString(prefillXmlStr)) {
                var prefillXmlDoc = $.parseXML(prefillXmlStr);

                // find data root
                if (this._isNonNaked(prefillXmlDoc)) {
                    // non naked xml, assuming full hierarchy afdata/afbounddata/data

                    var prefillBoundDataRoot,
                        prefillUnBoundDataRoot,
                        newDataNode;

                    if (!isXdp) { //capture bound data from prefill, for both none(may contain bound form/frag) and xsd
                        prefillBoundDataRoot = this._getElement(prefillXmlDoc.documentElement, this.constants.BOUND_DATA_XPATH);
                        if (null == prefillBoundDataRoot) {
                            prefillBoundDataRoot = this._getElement(prefillXmlDoc.documentElement, this.constants.BOUND_TAG +
                                                                        "/" + guideBridge._guide.jsonModel.xsdRootElement);
                        }
                        if (prefillBoundDataRoot) {
                            newDataNode = this._liveDataDoc.importNode(prefillBoundDataRoot, true);
                            this._boundDataRoot.parentNode.replaceChild(newDataNode, this._boundDataRoot);
                            this._boundDataRoot = newDataNode;
                        }
                    }

                    prefillUnBoundDataRoot = this._getElement(prefillXmlDoc.documentElement, this.constants.UNBOUND_DATA_XPATH);
                    if (prefillUnBoundDataRoot) {
                        newDataNode = this._liveDataDoc.importNode(prefillUnBoundDataRoot, true);
                        this._unboundDataRoot.parentNode.replaceChild(newDataNode, this._unboundDataRoot);
                        this._unboundDataRoot = newDataNode;
                    }

                } else {
                    // naked xml start from prefill data root

                    if (isNone) {
                        this._unboundDataRoot = prefillXmlDoc.documentElement;
                        this._boundDataRoot = null;
                    } else {
                        if (isXsd) {
                            this._boundDataRoot = prefillXmlDoc.documentElement;
                        }

                        var unBoundXmlDoc = $.parseXML(this.constants.UNBOUND_SKELETON);
                        this._unboundDataRoot = unBoundXmlDoc.documentElement;  // need this for unbound data fill across lazy
                    }
                    this._liveDataDoc = prefillXmlDoc;
                }
            }

            if (isXdp) { // don't need the bound data sec, model is always loaded & server will fill during submission
                if (_.isString(xfaPrefillXmlStr) && xfaPrefillXmlStr.length > 0) {
                    this._xfaDataRoot = xfalib.ut.XMLUtils.getXFARootFormElementFromXML($.parseXML(xfaPrefillXmlStr));
                }
                this._boundDataRoot.parentNode.parentNode.removeChild(this._boundDataRoot.parentNode);
                this._boundDataRoot = null;
            }
        },

        isLiveDataInitialized : function () {
            return (this.getLiveDataDoc() instanceof Node);
        },

        getLiveDataStr : function () {
            if (this.isLiveDataInitialized()) {
                return (new XMLSerializer()).serializeToString(this.getLiveDataDoc());
            } else {
                return '';
            }
        },

        _ignoreXpathRoot : function (xpathRoot) {
            return this.xsdRootElement === this.constants.UNKNOWN_XSD_ROOT_ELEMENT
                || this.xsdRootElement === xpathRoot;
        },

        /**
         * will return the apt node, in the AF xml, based on the xml context passed in.
         * Will create nodes if it doesn't exist and createMissingNodes is passed as true
         * @param schemaPath
         * @param dataSection
         * @param createMissingNodes
         * @returns {*}
         * @memberof LiveXmlUtils
         */
        getContextNode : function (schemaPath, dataSection, createMissingNodes) {
            var contextNode,
                baseContextNode,
                xpathParts = this._sanitizedXpathParts(schemaPath);
            if (dataSection === this.constants.BOUND_TAG) {
                baseContextNode = this._boundDataRoot;
            } else if (dataSection === this.constants.UNBOUND_TAG) {
                baseContextNode = this._unboundDataRoot;
            } else if (dataSection === this.constants.XFA_TAG) {
                baseContextNode = this._xfaDataRoot;
            }
            if (!_.isEmpty(xpathParts)) {
                if (dataSection === this.constants.BOUND_TAG) {
                    if (this._ignoreXpathRoot(xpathParts[0])) {
                        xpathParts = xpathParts.slice(1);   // discard xsd schema root
                        if (xpathParts.length === 0) {
                            return baseContextNode;
                        }
                    }
                }

                contextNode = this._getElement(baseContextNode, xpathParts.join('/'));

                if (!contextNode && createMissingNodes) {
                    contextNode = this._createElements(baseContextNode, xpathParts);
                }
            } else if (_.isEmpty(schemaPath)) {
                contextNode = baseContextNode;
            }
            return contextNode;
        },

        addIndexToPath : function (path, index) {
            if (path.match(/\[\d+\]$/) === null) { // only add repeat index if it doesn't already end in one
                path += '[' + (index + 1) + ']'; // indices in xpath 1 based}
            } else {
                this.logger().debug("AF", "Tried to add index to already indexed xpath :" + path);
            }
            return path;
        },

        getDataInstances : function (dataContext, dataNodeName) {
            var node = this.getContextNode(dataContext.indexedXpath, dataContext.xmlSec);
            if (node != null) {
                return _.filter(node.parentNode.childNodes, function (child) {
                    return (child instanceof Element) && child.nodeName === dataNodeName;
                }, this);
            }
            return null;
        },

        _findLastDataNode : function (parentContextNode, dataNodeName) {
            var xmlUtils = xfalib.ut.XMLUtils,
                iterator = xmlUtils.evaluateXPath(dataNodeName, parentContextNode, null, null, null),
                result = xmlUtils.iteratorToArray(iterator);
            if (result.length > 0) {
                return result[result.length - 1];
            }
            return null;
        },

        hasChildNodes : function (node) {
            return node.hasChildNodes();
        },

        removeChild : function (parentNode, targetNodeName, index) {
            var childNode = this._getElement(parentNode, targetNodeName + "[" + (index + 1) + "]", null);
            if (childNode) {
                parentNode.removeChild(childNode);
            }
        },

        insertNode : function (parentNode, childNodeName, index) {
            var childNode = this._getElement(parentNode, childNodeName + "[" + (index + 1) + "]", null),
                node = parentNode.ownerDocument.createElement(childNodeName);
            if (childNode) {
                parentNode.insertBefore(node, childNode);
            } else {
                var lastNode = this._findLastDataNode(parentNode, childNodeName);
                if (lastNode && lastNode.nextSibling) {
                    parentNode.insertBefore(node, lastNode.nextSibling);
                } else if (lastNode && !lastNode.nextSibling) {
                    // for the case when the last node is there but there is no next sibling.
                    // we don't need to create all the nodes for this scenario.
                    parentNode.appendChild(node);
                } else {
                    // we need to create all the nodes till the count reaches the index.
                    for (var i = 0; i <= index; i++) {
                        var newNode = parentNode.ownerDocument.createElement(childNodeName);
                        parentNode.appendChild(newNode);
                    }
                }
            }
            return node;
        },

        /**
         * Form an xpath part returns the index as well as the tagName.
         * Index returned is 0 if not present
         * @param xpathName
         * @returns {*}
         * @private
         * @memberof LiveXmlUtils
         */
        _getNameAndIndex : function (xpathPart) {
            if (xpathPart) {
                var elName = xpathPart.match(/^([^[\s\/]+)(?:\[(\d+)\])?$/);  // match the whole string
                if (elName !== null) {
                    return {
                        name : elName[1],
                        index : elName[2] ? parseInt(elName[2]) : 0
                    };
                }
            }
            return null;
        },

        _cmpXpathParts : function (indexedName, templateName) {
            if (indexedName && templateName) {
                var match1 = this._getNameAndIndex(indexedName),
                    match2 = this._getNameAndIndex(templateName);
                return !_.isEmpty(match1 && match2)
                    && match1.name === match2.name
                    && (match2.index === 0 || match1.index === match2.index);
            }
            return false;
        },

        /**
         * Will split an xpath string into an array containing one xml element/node per part
         * This expects only the simple xpath syntax allowed in bindRefs of xsd bound fields
         * of the form /a/b/c/@d
         * @param xpath
         * @returns {*|Array.<T>|list}
         * @private
         * @memberof LiveXmlUtils
         */
        _sanitizedXpathParts : function (xpath) {
            var xpathParts = (xpath || '').replace(/^\//, '').replace(/\s+/g, '').split('/');

            if (_.last(xpathParts) === "text()") { // ignore "/text()" appended to bindRef for SimpleType schema element
                xpathParts.splice(-1, 1); // drop last element
            }

            return _.filter(xpathParts, function (xpathPart) {
                return this._getNameAndIndex(xpathPart) !== null;
            }, this);
        },

        /**
         * returns true if the xpath uses indices
         * @param xpath
         * @returns {boolean}
         * @memberof LiveXmlUtils
         */
        isIndexedPath : function (xpath) {
            return (xpath || "").match(this.constants.INDEXED_XPATH_PAT) !== null;
        },

        _createElements : function (contextNode, xpathParts) {
            if (!(contextNode instanceof Node)) {
                return null;
            }

            if (_.isEmpty(xpathParts)) {
                return contextNode;
            }

            if (xpathParts[0][0] === '@') { // xpath parts having '@' as 1st char must be and attr
                var attrName = xpathParts[0].slice(1);
                // in bindrefs attributes are the last xpath part, so no need to recurse
                contextNode = this._createAttributeNode(contextNode, attrName);
            } else {
                // recurse and create one level of tags at a time
                contextNode = this._createRepeatedElements(contextNode, xpathParts);
            }

            return contextNode;
        },

        /**
         * This will update the xml with the required tags,
         * and return the context node matching the xpath query.
         * Further if xml has lesser number of tags than the index in each part,
         * it'll fill those gaps with empty tags.
         * @param contextNode node beneath which tags are to be created
         * @param xpathParts
         * @returns {*}
         * @private
         * @memberof LiveXmlUtils
         */
        _createRepeatedElements : function (contextNode, xpathParts) {
            var childContextNode = contextNode,
                xpathPart = this._getNameAndIndex(xpathParts[0]),
                elemName = xpathPart.name,
                index = xpathPart.index || 1,
                i,
                children = _.filter(contextNode.childNodes, function (child) {
                    return (child instanceof Element) && child.nodeName === elemName;
                });

            if (children.length < index) {
                // create immediate 'extra' children
                for (i = children.length; i < index; ++i) {
                    childContextNode = this._createChildElement(contextNode, elemName);
                }
            } else {
                childContextNode = children[index - 1]; // indices are 1 based in xml
            }
            // recursively create descendants
            return this._createElements(childContextNode, xpathParts.slice(1));
        },

        _createChildElement : function (parentElement, elemName) {
            if (parentElement instanceof Element) {
                var childElem = parentElement.ownerDocument.createElement(elemName);
                parentElement.appendChild(childElem);
                return childElem;
            }
        },

        _createAttributeNode : function (parentElement, attrName) {
            if (parentElement instanceof Element) {
                var attrNode = parentElement.ownerDocument.createAttribute(attrName);
                parentElement.setAttributeNode(attrNode);
                return attrNode;
            }
        },

        /**
         * finds xml node/element based on current context node and xpath
         * @param node
         * @param xpath
         * @param options
         * @returns {*}
         * @private
         * @memberof LiveXmlUtils
         */
        _getElement : function (node, xpath, options) {
            if (!(node instanceof Node)) {
                return null;
            }

            if (_.isEmpty(xpath) || !_.isString(xpath)) {
                return node;
            }
            options = options || {};
            var nsResolver = options.nsResolver;
            var index = options.index;
            // in IE singleNodeValue maybe null for attribute queries,
            // so find parent element of attribute, and then explicitly check for attribute node's presence

            var xpathParts = xpath.split('/@'),
                checkAttr = false,
                attributeName;

            if (xpathParts.length > 2) { // more than 1 attr unsupported
                xfalib.ut.XfaUtil.prototype.getLogger().error("BindRefs must be Xpaths ending in atmost one attribute"); // TODO localize
                return null;
            } else if (xpathParts.length === 2) {
                xpath = xpathParts[0]; // find parent el and seek attribute there
                attributeName = xpathParts[1]; // attr can only be in the last part
                checkAttr = true;
            }
            if (!(_.isUndefined(index) || _.isNull(index))) {
                xpath = xpath + "[" + index + "]";
            }
            var result = xfalib.ut.XMLUtils.evaluateXPath(xpath, node, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null),
                el;

            if (result.resultType === XPathResult.FIRST_ORDERED_NODE_TYPE) {
                el = result.singleNodeValue;
                if (el instanceof Node) {
                    if (!checkAttr) {
                        return el;
                    } else if (el.hasAttribute(attributeName)) {
                        el = el.getAttributeNode(attributeName);
                        if (el instanceof Node) {
                            return el;
                        }
                    }
                }
            }
        },

        /**
         * This function checks if the document was naked or non naked xml
         * @param doc
         * @returns {boolean}
         * @private
         * @memberof LiveXmlUtils
         */
        _isNonNaked : function (doc) {
            doc = doc || this.getLiveDataDoc();
            if (doc) {
                return doc.documentElement.tagName === this.constants.AF_ROOT_TAG;
            } else {
                return false;
            }
        },

        /**
         * Converts the xml info of the draft part to map and returns
         * @param xmlString
         * @private
         * @memberof LiveXmlUtils
         */
        convertSubmissionInfoToMap : function (xmlString) {
            if (_.isUndefined(xmlString)) {
                return;
            }
            var livePrefillXmlDoc = $.parseXML(xmlString),
                draftDoc = this._getElement(livePrefillXmlDoc.documentElement, this.constants.AF_DRAFT_TAG),
                map = {};
            // if there was no information about lazy children in xml (fresh render with prefill)
            if (_.isUndefined(draftDoc) || draftDoc.childNodes.length === 0) {
                return;
            }
            _.each(draftDoc.firstChild.textContent.replace(/\"/g, "").split(","), function (templateId) {
                // mark dirty
                map[templateId] = 0;
            });
            return map;
        },

        /**
         * This function sets the rich text value of the field in the live data.
         * @param xpath
         * @param xmlSection
         * @param createMissingNodes
         * @param value
         * @private
         */
        setRichTextValue : function (xpath, xmlSection, createMissingNodes, value) {
            var node = this.getContextNode(xpath, xmlSection, createMissingNodes);
            if (node instanceof Node) {
                var richTextNode = $.parseXML(value);
                node.appendChild(richTextNode.documentElement);
            }
        },

        setDataValue : function (xpath, xmlSection, createMissingNodes, value) {
            var node = this.getContextNode(xpath, xmlSection, createMissingNodes);
            if (node instanceof Node) {
                node.textContent = value;
            }
        },

        getDataValue : function (xpath, xmlSection) {
            var node = this.getContextNode(xpath, xmlSection, false);
            if (node instanceof Node) {
                return node.textContent || null;
            }
            return undefined;
        },

        _convertModelIndexToDataIndex : function (index) {
            if (index < 0) {
                return 1;
            }
            return index + 1;
        },

        getParentRef : function (path) {
            return path.substring(0, path.lastIndexOf("/"));
        }
    });

}($, _, window.guideBridge, window.guidelib, window.formBridge, window.xfalib));

/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 * Copyright 2015 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

/**
 * @package guidelib.model.LiveModel
 * @version 0.0.1
 */

(function ($, _, guideBridge, guidelib) {
    var LiveModel = guidelib.model.LiveModel = xfalib.ut.Class.extend({
        initialize : function () {
            LiveModel._super.initialize.call(this);
            this._crossFragmentFields = {}; // 2 level map: name => { bindRef => abstract model }
            this._dataNodes = {};
        },

        // only called from test framework
        destroy : function () {
            this._crossFragmentFields = {};
            this._dataNodes = {};
        },

        getCrossFragmentFields : function () {
            return this._crossFragmentFields;
        },

        add : function (key, model) {
            if (key) {
                var dn = this._dataNodes[key] || new guidelib.model.DataNode();
                dn.addField(model);
                this._dataNodes[key] = dn;
            }
        },

        isLive : function (key) {
            return _.isString(key) && _.has(this._dataNodes, key);
        },

        remove : function (key, model) {
            if (this.isLive(key)) {
                var dn = this._dataNodes[key];
                dn.removeField(model);
            }
        },

        getAllFieldModels : function (keys) {
            return _.flatten(_.map(keys, function (key) {
                var result,
                    dataNode = this._dataNodes[key];
                if (dataNode) {
                    result = dataNode.getFieldModels();
                }
                return result;
            }, this));
        },

        getAllAbstractFieldModels : function (keys) {
            return _.flatten(_.map(keys, function (key) {
                return this._dataNodes[key].getAbstractFieldModels();
            }, this));
        },

        resetData : function () {
            // all loaded models in data nodes dataNodes will be reset by the respective fields
            // just need to reset the abstract cross frag fields
            _.each(this._crossFragmentFields, function (fields) {
                _.each(fields, function (abstractField) {
                    abstractField.resetData();
                });
            });
        },

        createDataNodes : function (duplicateBindRefs) {
            _.each(duplicateBindRefs, function (bindRef) {
                this.add(bindRef);
            }, this);
        },

        createCrossFragFields : function (crossFragFields) {
            _.each(crossFragFields, function (field) {
                var effectiveBindRef = field.bindRef || field.name,
                    value = field._value || null,// default value, keep null because js is quirky with operations on undefined
                    absModel = new guidelib.model.AbstractField({
                        'name' : field.name,
                        'className' : field.guideNodeClass,
                        'bindRef' : field.bindRef,
                        'dataSom' : field.dataSom,
                        'afDataSom' : field.afDataSom,
                        'jsonModel' : {
                            '_value' : value,
                            "{default}" : value
                        }
                    });

                if (_.isEmpty(this._crossFragmentFields[field.name])) {
                    this._crossFragmentFields[field.name] = {};
                }
                this._crossFragmentFields[field.name][effectiveBindRef] = absModel;

                this.add(effectiveBindRef, absModel); // unbound globals with same name linked together

            }, this);
        },

        prefillCrossFragFields : function () {
            var dataUtils = guidelib.internal.liveDataUtils;
            if (dataUtils.isLiveDataInitialized()) {
                _.each(this._crossFragmentFields, function (fields, name) {
                    _.each(fields, function (absModel, bindRef) {
                        var dataContext = dataUtils._getDataContext(absModel);
                        // fill value from prefill data or saved lazy live data
                        absModel.value = dataUtils.getDataValue(dataContext.indexedXpath, dataContext.xmlSec);
                    }, this);
                }, this);
            }
        }
    });

    guidelib.internal.liveModel = new LiveModel();
}($, _, window.guideBridge, window.guidelib));

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/


(function (_, $) {
    "use strict";

    
    var isBrowserIE = xfalib.ut.XfaUtil.prototype.detectIE();

    var _defaults = {
        'showLink' : false,
        'scrollMode' : 'vertical',
        textAreaClass : ".guide-tnc-content",
        checkBoxClass : ".guide-tnc-checkbox",
        checkBoxDisableClass : ".guide-tnc-checkbox-disabled",
        checkBoxReviewedClass : ".guide-tnc-checkbox-reviewed",
        linkClass     : ".guide-tnc-link",
        documentVisitedClass : ".guide-tnc-document-visited",
        documentUnVisitedClass : ".guide-tnc-document-unvisited"
    };

    var _reviewStatusMap = {
        REVIEWED : "reviewed",
        UNREVIEWD : "unreviewed",
        AGREE : "agree"
    };

    var AfTnc = function (element, options) {
        this.options = options;
        this.$element = $(element);

        
        this.enters = this.leaves = 0;
        this.inside = false;

        
        this.reviewdoc = this.status = _reviewStatusMap.UNREVIEWD;

        
        this.$elementCheckBox = this.$element.find(this.options.checkBoxClass || _defaults.checkBoxClass);
        
        this.$elementTextArea = $(this.textArea());
        
        this.$elementLink =  $(this.link());

        this.isTextContentVisible = false;

        if (this.options.showLink) {
            
            this.$elementLink.find('a').click($.proxy(this.handleReviewStatusChange, this));
        } else {
            var setCheckBoxState = function () {
                if (this.hasScrollBar(this.$elementTextArea.parent().get(0))) {
                    
                    
                    this.$elementTextArea.parent().scroll($.proxy(this.handleReviewStatusChange, this));
                } else {
                    
                    if (this.$elementTextArea.css('display') !== 'none') {
                        this.status = _reviewStatusMap.REVIEWED;
                        this.isTextContentVisible = true;
                        
                        if (!this.options.showAsPopUp) {
                            this.enableCheckBox();
                        }
                        this.reviewDoc = this.$elementTextArea.text();
                    }
                }
            };
            
            
            if (document.readyState === "complete") { 
                setCheckBoxState.call(this);          
            } else {
                
                
                $().ready($.proxy(setCheckBoxState, this));
            }
        }

        
        if (this.options.showAsPopUp) {
            var unvisitedClass = this.options.documentUnVisitedClass || _defaults.documentUnVisitedClass,
                visitedClass = this.options.documentVisitedClass || _defaults.documentVisitedClass;
            var _self = this,
                dialogId = this.$elementCheckBox.find('a')
                .keydown(function (e) {
                    if (e.keyCode === 13 || e.which == 13 || e.charCode === 32) {
                        $(this).click();
                        return false;
                    }
                })
                .click(function (event) {
                    if ($(this).hasClass(unvisitedClass.substring(1))) {
                        $(this).toggleClass(visitedClass.substring(1) + " " + unvisitedClass.substring(1));
                    }
                    
                    
                    if (isBrowserIE || _self.isTextContentVisible) {
                        _self.enableCheckBox();
                    }
                }).attr("href");
            
            $(dialogId).on('hidden.bs.modal', function (e) {
                _self.$elementCheckBox.find('input').focus();
            });
        } else {
            
            this._updateScreenReaderText();
        }

        
        this.$elementCheckBox.find('input').change($.proxy(this.handleCheckBoxChange, this));
    };

    AfTnc.prototype = {

        clear : function () {
            this.$element.val('');
        },

        destroy : function () {
            this.$element.val('');
            this.$element.empty();
        },

        _updateScreenReaderText : function () {
            if (!this.options.showAsPopUp) {
                var _self = this;
                
                this.$element.find(".guide-tnc-sr-only").each(function (i, obj) {
                    $(this).html(_self.options.screenReaderText);
                });
            }
        },

        _restoreClickState : function (value) {
            if (this.options.showLink) {
                var arr = value.split("\n"),
                    linkState = [];
                
                _.each(arr, function (linkText, index) {
                    
                    linkState.push(_.last(linkText.split('=')));
                });
                var unvisitedClass = this.options.documentUnVisitedClass || _defaults.documentUnVisitedClass,
                    visitedClass = this.options.documentVisitedClass || _defaults.documentVisitedClass;
                this.$elementLink.find('a').each(function (index) {
                    $(this).data("clicked", linkState[index]);
                    if (linkState[index] === "1") {
                        $(this).addClass(visitedClass.substring(1));
                    } else {
                        $(this).addClass(unvisitedClass.substring(1));
                    }
                });
            }
        },

        value : function (value) {
            if (value) {
                
                if (this.options.showLink) {
                    this._restoreClickState(value);
                }
                this.reviewDoc = value;
            } else {
                return this.reviewDoc;
            }

        },

        reviewStatus : function (value) {
            var val = this.getClickState();
            if (!_.isUndefined(value)) {
                if (value == "true") {
                    this.enableCheckBox();
                    this.$elementCheckBox.find('input').attr("checked", "checked");
                    this.$elementCheckBox.find('input').prop("checked", true);
                } else if (value == null || value == "false") {
                    
                    this.$elementCheckBox.find('input').removeAttr("checked");
                    this.$elementCheckBox.find('input').removeProp("checked");
                }
                this.approvalStatus = value;
            } else {
                if (this.status == _reviewStatusMap.REVIEWED || this.status == _reviewStatusMap.UNREVIEWD) {
                    return null;
                } else if (this.status == _reviewStatusMap.AGREE) {
                    return true;
                }
            }
        },

        clickStatus : function (value) {
            if (value) {
                if (value === _reviewStatusMap.REVIEWED) {
                    var arr = this.getClickState();
                    if (_.isArray(arr) && arr.length > 0) {
                        arr = arr.join("\n");
                        this._restoreClickState(arr);
                    }
                    this.enableCheckBox();
                }
                this.status = value;
            } else {
                return this.status;
            }
        },

        showLink : function (value) {
            if (value !== undefined) {
                this.options.showLink = value;
            } else {
                return this.options.showLink;
            }
        },

        access : function (value) {
            this.accessOption = value;
            if (value == "readOnly") {
                this.disableCheckBox();
                if (this.options.showLink) {
                    this.$elementLink.find('a').each(function (index, elem) {
                        $(elem).css('pointer-events', 'none');
                        
                        $(elem).attr('disabled', 'disabled');
                    });
                }
            } else if (value == "open") {
                
                
                if ((this.status == _reviewStatusMap.REVIEWED || this.status == _reviewStatusMap.AGREE) && !this.options.showAsPopUp) {
                    this.enableCheckBox();
                }
                if (this.options.showLink) {
                    this.$element.find('a').each(function (index, elem) {
                        $(elem).css('pointer-events', '');
                        $(elem).removeAttr('disabled');
                    });
                }
            }
        },

        link : function () {
            return this.$element.find(this.options.linkClass || _defaults.linkClass);
        },

        textArea : function () {
            return this.$element.find(this.options.textAreaClass || _defaults.textAreaClass);
        },

        getClickState : function () {
            if (this.options.showLink) {
                var arr = [];
                this.$elementLink.find('a').each(function (index) {
                    arr.push({
                        'displayText' : $(this).text(),
                        'linkText' : $(this).attr('href'),
                        'clicked' : $(this).data("clicked")
                    });
                });
                return arr;
            }
        },

        enableCheckBox : function () {
            if (this.accessOption !== "readOnly") {
                this.$elementCheckBox.find('input').removeAttr("disabled");
                this.$elementCheckBox.removeClass(this.options.checkBoxDisableClass.substring(1));
            }
        },

        disableCheckBox : function () {
            this.$elementCheckBox.find('input').attr('disabled', 'disabled');
            this.$elementCheckBox.addClass(this.options.checkBoxDisableClass.substring(1));
        },

        handleReviewStatusChange : function (event) {
            var arr = [],
                visitedClass = this.options.documentVisitedClass || _defaults.documentVisitedClass;
            if (this.options.showLink) {
                this.status = _reviewStatusMap.REVIEWED;
                
                $(event.target).data("clicked", 1);
                $(event.target).addClass(visitedClass.substring(1));
                this.linkStateMap = this.getClickState();
                _.each(this.linkStateMap, function (element, index) {
                    if (!element.clicked) {
                        this.status = _reviewStatusMap.UNREVIEWD;
                    }
                    
                    arr.push(element.displayText + "=" + element.linkText + "=" + (_.isUndefined(element.clicked) ? "0" : "1"));
                }, this);
                if (arr.length > 0) {
                    this.reviewDoc = arr.join("\n");
                }

                if (this.status == _reviewStatusMap.REVIEWED) {
                    this.enableCheckBox();
                }

                
                this.$element.trigger('reviewComplete.tnc');

            } else {
                
                var position = this.getScroll(this.$elementTextArea.get(0)),
                    xy = position[this.options.scrollMode == 'vertical' ? 'y' : 'x'],
                    min = this.getScrollSize(this.$elementTextArea.get(0)).y - this.getSize(this.$elementTextArea.get(0)).y, 
                    max = 0;

                
                this.reviewDoc = this.$elementTextArea.text();

                
                if (xy >= min && (max == 0 || xy <= max)) {
                    
                    if (!this.inside) {
                        
                        this.inside = true;
                        this.enters++;
                        
                        this.status = _reviewStatusMap.REVIEWED;
                        this.enableCheckBox();
                        
                        this.$element.trigger('reviewComplete.tnc', [position,this.enters,event]);

                    }
                }
                
                else if (this.inside) {
                    this.inside = false;
                    this.leaves++;

                }
            }

        },

        handleCheckBoxChange : function (event) {
            if ($(event.target).is(':checked')) {
                this.status = _reviewStatusMap.AGREE;
                this.$elementCheckBox.addClass(this.options.checkBoxReviewedClass.substring(1));
            } else {
                this.status = _reviewStatusMap.UNREVIEWD;
                this.$elementCheckBox.removeClass(this.options.checkBoxReviewedClass.substring(1));
            }
            this.$element.trigger('checkboxStateChange.tnc');
        },

        getScrollSize : function (elem) {
            return {x : elem.scrollWidth, y : elem.scrollHeight};
        },

        getScroll : function (elem) {
            return {x : elem.scrollLeft, y : elem.scrollTop};
        },

        getSize : function (elem) {
            return {x : elem.offsetWidth, y : elem.offsetHeight};
        },

        hasScrollBar : function (container) {
            
            if (isBrowserIE) {
                
                return ((container.scrollHeight - 2) > container.clientHeight) || ((container.scrollWidth - 2) > container.clientWidth);
            } else {
                return container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth;
            }
        }
    };

    $.fn.afTnc = function (option, value) {
        var get = '',
            element = this.each(function () {

                var $this = $(this),
                    data = $this.data('AfTnc'),
                    options = $.extend({}, _defaults, typeof option === 'object' && option);

                
                if (!data) {
                    $this.data('AfTnc', (data = new AfTnc(this, options)));
                }

                
                if (typeof option === 'string') {
                    get = data[option](value);
                }
            });

        if (typeof get !== undefined) {
            return get;
        } else {
            return element;
        }
    };

})(_, $);
(function ($) {
    var xfaUtil = xfalib.ut.XfaUtil.prototype;
    $.widget("xfaWidget.tnc", $.xfaWidget.abstractWidget, {

        _widgetName : "tnc",
        _superPrototype : $.xfaWidget.abstractWidget.prototype,
        getOptionsMap : function () {
            var parentOptionsMap = this._superPrototype.getOptionsMap.apply(this, arguments),
                newMap = $.extend({}, parentOptionsMap, $.extend({}, this.options, {
                    "value" : function (value) {
                        this.$userControl.afTnc("value", value);
                    },
                    "reviewStatus" : function (value) {
                        this.$userControl.afTnc("reviewStatus", value);
                    },

                    "clickStatus" : function (value) {
                        this.$userControl.afTnc("clickStatus", value);
                    },
                    
                    "access" : function (value) {
                        this.$userControl.afTnc("access", value);
                    }
                }));
            return newMap;
        },

        _getReviewStatus : function () {
            return $(this.element).afTnc("reviewStatus");
        },

        _getClickStatus : function () {
            return $(this.element).afTnc("clickStatus");
        },

        getEventMap : function () {
            var parentEventMap = this._superPrototype.getEventMap.apply(this, arguments),
                newMap = $.extend({}, parentEventMap,
                    {
                        "change" : null,
                        "reviewComplete.tnc" : xfaUtil.XFA_CHANGE_EVENT,
                        "checkboxStateChange.tnc" : xfaUtil.XFA_CHANGE_EVENT
                    });
            return newMap;
        },
        render : function () {
            this._superPrototype.render.apply(this, arguments);
            $(this.element).afTnc(this.getOptionsMap());
            return $(this.element);
        },
        showDisplayValue : function () {
            
        },
        showValue : function () {
            
        },
        getCommitValue : function () {
            this.options.reviewStatus = this._getReviewStatus();
            this.options.clickStatus = this._getClickStatus();
            return $(this.element).afTnc("value");
        }
    });
})($);

(function (_, guidelib) {
    var orderGetAttribute = {
        "Guide" : "XFA",
        "XFA" : "Guide"
    },
    
    newlyAddedProperties = ["enabled", "visible"];
    
    var GuideNode = guidelib.model.GuideNode = xfalib.ut.EventClass.extend({
        msClassName : "guideNode",
        guideUtil : guidelib.util.GuideUtil,

        initialize : function () {
            
            
            this.className = this.jsonModel.guideNodeClass || this.msClassName;
            this.parent = null;
            this._isItem = false;
            this._index = 0;
        },

        _postInitialize : function () {
            
        },

        _triggerOnBridge : function (eventName, target, property, oldVal, newVal) {
            if (window.guideBridge) {
                window.guideBridge.trigger(eventName,
                    guidelib.event.GuideModelEvent.createEvent(eventName, target, property,
                                                           oldVal, newVal));
            }
        },

        validate : function (errorList) {

        },

        
        
        _getXFAOptionStringFromGuideItems : function (guideItems) {
            var optionsStr = "", indexOfSeparator = 0;
            if (!_.isEmpty(guideItems) && !_.isArray(guideItems)) {
                guideItems = [guideItems];
            }
            _.each(guideItems, function (item, index, list) {
                indexOfSeparator = item.indexOf('=');
                
                
                if (indexOfSeparator > -1) {
                    optionsStr += item.substring(indexOfSeparator + 1) + "," + item.substring(0, indexOfSeparator);
                } else {
                    optionsStr += item + "," + item;
                }
                if (index < guideItems.length - 1) {
                    optionsStr += ",";
                }
            });
            return optionsStr;
        },

        _compareXFAItemsWithGuideItems : function (xfaItems, guideItems) {
            var match = true;
            if (xfaItems.length !== guideItems.length) {
                match = false;
            }
            if (match) {
                var bndNode = this.bindNode;
                _.each(guideItems, function (item, index, list) {
                    if (item.indexOf('=') > -1) {
                        if ((bndNode.getSaveItem(index) + "=" + bndNode.getDisplayItem(index)) == item) {
                            match = false;
                        }
                    } else {
                        if ((bndNode.getSaveItem(index) + "=" + bndNode.getDisplayItem(index)) == (item + "=" + item)) {
                            match = false;
                        }
                    }
                });
            }
            return match;
        },

        
        syncXFAProps : function () {
            if (this.bindNode) {
                _.each(this._guide()._guideSchema.getAttributes(this.className),
                    function (attr, attrName) {
                        var xfaProp = attr.xfaProp,
                            propChain = (xfaProp || "").split("."),
                            xfaAttr = propChain.length > 0 ? propChain[propChain.length - 1]
                                                           : undefined;
                        
                        
                        
                        
                        
                        
                        if (!xfaAttr || (newlyAddedProperties.indexOf(attrName) != -1 && _.isUndefined(this.jsonModel[attrName]))) {
                            return;
                        }
                        var objChain = propChain.splice(0, propChain.length - 1),
                            obj = _.reduce(objChain,
                                function (obj, prop) {
                                    if (_.isObject(obj)) {
                                        return obj[prop];
                                    }
                                    return undefined;
                                }, this.bindNode),
                            val = this.getGuideProp(attrName, attr),
                            convertor = this._guide()._guideSchema.getConvertor(attrName),
                            cVal = convertor ? convertor.guideToXfa.apply(this, [val]) : val,
                            xfaVal;
                        try {
                            if (obj) {
                                xfaVal = obj[xfaAttr];
                                if (cVal !== undefined) {
                                    if (xfaAttr === "items") {
                                        var match = this._compareXFAItemsWithGuideItems(obj, cVal);
                                        var SET_ITEMS_INSERT_MODE_PAIR = 2;
                                        if (!match) {
                                            var optionsStr = this._getXFAOptionStringFromGuideItems(cVal);
                                            if (optionsStr !== "") {
                                                obj.setItems(optionsStr, SET_ITEMS_INSERT_MODE_PAIR);
                                            } else {
                                                obj.clearItems();
                                            }
                                        }
                                    } else if (cVal !== xfaVal) {
                                        obj[xfaAttr] = cVal;
                                    }
                                }
                            }
                        } catch (e) {
                            this.logger().error("AF", "setting {0}(guide {1}) for {2} is not supported in xfa",
                                [xfaProp, attrName, this.bindNode.somExpression]);
                            if (e.stack) {
                                this.logger().error("AF", e.stack);
                            }
                        }
                    }, this);
            }
        },

        
        prepare : function () {

        },

        
        nakedChildReferences : function(){}