/*
 * Suning Site Analyse Code.
 *
 * @author zhanhe sangqiang
 * @email h91zhan@outlook.com 14101110@cnsuning.com  20190604
 */
//#########################################################################################
var sa = sa || {};
/**
 * 全局 公用工具类 88388897 2018-03-15 开始
 * @private
 */
//#########################################################################################
(function (window, document) {
    var _win = window,
        _doc = document,
        _loc = 'location',
        _dom = 'domain',
        _str_sub = 'substring',
        _str_split = 'split',
        _str_indexOf = 'indexOf',
        _str_match = 'match',
        _ps = 'push',
        _empty = '-',
        _split = '|';

    var __conf = {
        isSaPrd: (function () {
            // js执行环境判断 自动获取
            function getJsUrl(jsName) {
                var jsObjs = document.scripts;
                var jsPath = "";
                for (var i = 0; i < jsObjs.length; i++) {
                    jsPath = jsObjs[i] ? jsObjs[i].src : "";
                    if (jsPath.indexOf(jsName) > -1) {
                        return jsPath;
                    }
                }
                return "";
            }

            var _url = getJsUrl('sa-analytics.js');
            if (!_url) {
                // 本地测试时使用
                return false;
            }
            if (_url && (_url.indexOf('//sitres.suning') > -1 ||
                _url.indexOf('//preres.suning') > -1 ||
                _url.indexOf('//preresdmz.cnsuning') > -1 ||
                _url.indexOf('//sitsslres.suning') > -1 ||
                _url.indexOf('//presslres.suning') > -1 ||
                _url.indexOf('//resprexg.suning') > -1 ||
                _url.indexOf('loc/static')) > -1) {
                return false;
            }
            return true;
        })()
    };
    var __ut = {
        _getFromUrl: function () {
            var fromUrl = document.referrer;
            var toUrl = document.location.href; // 不能使用全局变量，因为此处可能需要根据锚点的值获取来自页面
            var _protocol = location.protocol;
            var httpsUrl = this._getCookie("_snml");
            if ((_protocol == "https:" && fromUrl != "" && httpsUrl && httpsUrl.substring(0, 6) == "https:" && httpsUrl != fromUrl) || // https
                (_protocol == "http:" && fromUrl == "" && httpsUrl && httpsUrl.substring(0, 6) == "https:") ||
                (_protocol == "https:" && fromUrl == "" && httpsUrl && httpsUrl.substring(0, 6) == "https:") ||
                (fromUrl != "" && httpsUrl && httpsUrl != fromUrl) // 页面使用iframe
            ) {
                fromUrl = httpsUrl;
            }
            if (httpsUrl) {
                this._delCookie("_snml");
            }
            if (toUrl != "" && (toUrl.indexOf("sourceUrl4Sa") != -1)) {
                var sourceUrl4Sa = this.SaPick(toUrl, "sourceUrl4Sa", "&");
                fromUrl = decodeURIComponent(sourceUrl4Sa);
            } else if ((!fromUrl || fromUrl == null || fromUrl == "") && toUrl != "" && (toUrl.indexOf("returnUrl") != -1)) {
                var parms = toUrl.substring(toUrl.indexOf("?") + 1, toUrl.length);
                var parmsArr = parms.split("&");
                for (var i = 0; i < parmsArr.length; i++) {
                    var parmArr = parmsArr[i].split("=");
                    if (parmArr[0] == "returnUrl") {
                        fromUrl = parmArr[1];
                    }
                }
            }
            return fromUrl;
        },
        // 获取cookie
        _getCookie: function (name) {
            try {
                var arrStr = document.cookie.split("; ");
                for (var i = 0; i < arrStr.length; i++) {
                    var temp = arrStr[i].split("=");
                    if (temp[0] == name) return decodeURIComponent(temp[1] ? temp[1] : "-");
                }
            } catch (e) {
                return '';
            }
        },
        // 删除cookie
        _delCookie: function (name) {
            this._addCookie(name, "", '/', -10000, "");
        },
        // 添加cookie，name=value，expire为过期毫秒数
        _addCookie: function (name, value, path, expires, domain) {
            var str = name + "=" + escape(value);
            if (expires != "") {
                var date = new Date();
                date.setTime(date.getTime() + expires);
                str += ";expires=" + date.toGMTString();
            }
            if (path != "") {
                str += ";path=" + path; // 指定可访问cookie的目录
            }
            var dm = this.getTopDomain();
            str += ";domain=" + dm;
            document.cookie = str;
        },
        //截取一级域名
        getTopDomain: function (webUrl) {
            var d = webUrl || location.hostname;
            var c = d.split('.');
            if (d.indexOf('localhost') > -1) {
                return 'localhost';
            }
            if (c instanceof Array) {
                var b = c.length,
                    num = 2, // 根域名
                    s = '',
                    e = c.splice(b - num, b); // 处理 三级四级域名
                if (d.indexOf('.com.cn') != -1) { // 处理 .com.cn的域名
                    e = d.split('.').splice(b - num - 1, b);
                }
                for (var i = 0; i < e.length; i++) {
                    s += '.' + e[i];
                }
                return s;
            }
        },
        _encode: function (s) {
            return null != s ? encodeURIComponent(s) : "";
        },
        SaPick: function (map, key, separator) {
            var result = "-",
                idx;
            if (!this.IsEmpty(map) && !this.IsEmpty(key) && !this.IsEmpty(separator)) {
                idx = map.indexOf(key);
                if (idx > -1) {
                    var endIdx = map.indexOf(separator, idx);
                    if (endIdx < 0) {
                        endIdx = map.length;
                    }
                    result = map.substring(idx + key.length + 1, endIdx);
                }
            }
            return result;
        },
        IsEmpty: function (o) {
            return (undefined == o || '' == o || '-' == o);
        },
        getJsUrl: function (jsName) {
            var jsObjs = document.scripts;
            var jsPath = "";
            for (var i = 0; i < jsObjs.length; i++) {
                jsPath = jsObjs[i] ? jsObjs[i].src : "";
                if (jsPath.indexOf(jsName) > -1) {
                    return jsPath;
                }
            }
            return "";
        },
        // 获取meta值，解决ie下多个meta的问题
        getMetaVal: function (key) {
            return document.getElementsByTagName("meta") && document.getElementsByTagName("meta")[key] &&
                (document.getElementsByTagName("meta")[key]["content"] ||
                    (document.getElementsByTagName("meta")[key][0] &&
                        document.getElementsByTagName("meta")[key][0]["content"]));
        }
    };
    var _Set = function () {

        // null can also be an element of the set, but needs
        // a separate indication to differentiate it from
        // the string "null" as well
        this.isNullAdded = false;

        // private member variable hence no 'this'
        var map = {};

        //  Scope for optimization
        //  could be cached instead of generating each time
        //  this.uniqueList = [];

        //  returns true if the element is in this set, false otherwise
        this.contains = function (key) {

            if (key === null)
                return this.isNullAdded;
            else if (key === undefined)
                return false;
            else
                return map[key] ? true : false;
        };

        //  adds the element to the set
        this.add = function (val) {

            if (val === null)
                this.isNullAdded = true;
            else if (val !== undefined)
                map[val] = true;
            return this;
        };

        //  adds all the elements of the array to the set
        this.addAll = function (val) {

            if (val !== null && val !== undefined && val instanceof Array) {
                for (var idx = 0; idx < val.length; idx++) {
                    this.add(val[idx]);
                }
            }
            return this;
        };

        //  removes the specified element from the set
        this.remove = function (val) {
            if (val === null)
                this.isNullAdded = false;
            else if (val !== undefined)
                delete map[val];
            return this;
        };

        //  removes all the element in the array from the set
        this.removeAll = function (val) {

            if (val !== null && val !== undefined && val instanceof Array) {
                for (var idx = 0; idx < val.length; idx++) {
                    this.remove(val[idx]);
                }
            }
            return this;
        };

        //  empties the set of all values
        this.clear = function () {

            this.isNullAdded = false;
            map = {};
            return this;
        };

        //  returns the number of elements in the set
        this.size = function () {

            return this.list().length;
        };

        //  returns true if the set is empty, false otherwise
        this.isEmpty = function () {

            return this.list().length > 0 ? false : true;
        };

        //  returns the elements of the set as a list
        this.list = function () {
            var arr = [];

            if (this.isNullAdded)
                arr.push(null);
            // map {}
            for (o in map) {
                // protect from inherited properties such as
                //  Object.prototype.test = 'inherited property';
                if (map.hasOwnProperty(o))
                    arr.push(o);
            }
            return arr;
        };
    };

    var HashMap = function () {
        var size = 0;

        var entry = new Object();

        this.getThis = function () {
            return entry;
        }

        //add
        this.put = function (key, value) {
            if (!this.containsKey(key)) {
                size++;
            }
            entry[key] = value;
        }

        //get
        this.get = function (key) {
            if (this.containsKey(key)) {
                return entry[key];
            } else {
                return null;
            }
        }

        //delete
        this.remove = function (key) {
            if (delete entry[key]) {
                size--;
            }
        }

        //containsKey
        this.containsKey = function (key) {
            return (key in entry);
        }

        //containsValue
        this.containsValue = function (value) {
            // entry {}
            for (var prop in entry) {
                if (entry[prop] == value) {
                    return true;
                }
            }
            return false;
        }

        //get all values
        this.values = function () {
            var values = new Array(size);
            for (var prop in entry) {
                values.push(entry[prop]);
            }
            return values;
        }

        //get all keys
        this.keys = function () {
            var keys = new Array(size);
            for (var prop in entry) {
                keys.push(prop);
            }
            return keys;
        }

        //size
        this.size = function () {
            return size;
        }
    }

    //标签的默认配置
    var TagDefaultConfig = function () {
        var oThis = this;

        //标签的默认配置
        var tagDefaultConfig = initDefaultConfig();

        oThis.getDefaultConfig = function () {
            return tagDefaultConfig;
        }

        //取得某个标签的默认配置
        oThis.getDefaultConfigById = function (id) {
            if (id == undefined || id == null || id == "") {
                return null;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return null;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }

            return tagDefaultConfig.get(tagName);
        }

        //取得某个标签的默认事件名
        oThis.getDefaultEvent = function (id) {
            if (id == undefined || id == null || id == "") {
                return null;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return null;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }
            var defaultConfig = tagDefaultConfig.get(tagName);
            if (defaultConfig == null) {
                return null;
            }

            return defaultConfig.event;
        }

        //取得某个标签的默认采集属性名
        oThis.getDefaultAttr = function (id) {
            if (id == undefined || id == null || id == "") {
                return null;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return null;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }
            var defaultConfig = tagDefaultConfig.get(tagName);
            if (defaultConfig == null) {
                return null;
            }

            return defaultConfig.attr;
        }

        oThis.initDefaultConfig = function () {
            var isEventConfigDefined = true;
            var isFunctionConfigDefined = true;

            if (sa.events == undefined || sa.events == null || sa.events.length == 0) {
                sa.events = [];
                isEventConfigDefined = false;
            }

            if (sa.customs == undefined || sa.customs == null || sa.customs.length == 0) {
                sa.customs = [];
                isFunctionConfigDefined = false;
            }

            //如果用户自定义了sa的配置，则系统不会进行默认配置
            if (isEventConfigDefined && isFunctionConfigDefined) {
                return false;
            }

            //绑定所有的<input>标签
            setTagConfig("input", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<select>标签
            setTagConfig("select", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<textarea>标签
            setTagConfig("textarea", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<button>标签
            setTagConfig("button", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<div>标签
            setTagConfig("div", true, isFunctionConfigDefined);

            //绑定所有的<span>标签
            setTagConfig("span", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<img>标签
            setTagConfig("img", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<a>标签
            setTagConfig("a", isEventConfigDefined, isFunctionConfigDefined);
        }

        function initDefaultConfig() {
            var tagDefaultConfig = new HashMap();
            tagDefaultConfig.put("text", {
                event: "blur",
                attr: "value"
            });
            tagDefaultConfig.put("password", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("select", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("radio", {
                event: "click,change",
                attr: "value"
            });
            tagDefaultConfig.put("button", {
                event: "click,keypress",
                attr: "value"
            });
            tagDefaultConfig.put("checkbox", {
                event: "click,change",
                attr: "value"
            });
            tagDefaultConfig.put("color", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("date", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("datetime", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("datetime-local", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("file", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("image", {
                event: "click,change",
                attr: "value"
            });
            tagDefaultConfig.put("month", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("number", {
                event: "blur",
                attr: "value"
            });
            tagDefaultConfig.put("range", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("reset", {
                event: "click,keypress",
                attr: "value"
            });
            tagDefaultConfig.put("search", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("submit", {
                event: "click,keypress",
                attr: "value"
            });
            tagDefaultConfig.put("tel", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("time", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("url", {
                event: "blur",
                attr: "value"
            });
            tagDefaultConfig.put("week", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("div", {
                event: "click",
                attr: "innerHTML"
            });
            tagDefaultConfig.put("span", {
                event: "click",
                attr: "innerHTML"
            });
            tagDefaultConfig.put("a", {
                event: "mousedown",
                attr: "innerHTML"
            });
            tagDefaultConfig.put("img", {
                event: "click",
                attr: "src"
            });
            tagDefaultConfig.put("select", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("textarea", {
                event: "blur,change",
                attr: "value"
            });
            //TODO 其他标签的设置.......

            return tagDefaultConfig;
        }

        function setTagConfig(tagName, isEventConfigDefined, isFunctionConfigDefined) {

            //sa.bid.default=${bid};  //所有的采集数据都使用同一个bid
            //sa.bid.event=${bid};    //所有基于HTML标签事件采集的数据都使用同一个bid
            //sa.bid.event.${eventName}=${bid}; //指定基于具体某个HTML标签事件采集的数据都使用同一个bid
            //sa.bid.fun=${bid};  //所有基于JQuery方法采集的数据都使用同一个bid
            //sa.bid.fun.${functionName}=${bid}; //指定基于具体某个JQuery方法采集的数据都使用同一个bid
            var eventBid = sa && sa.bid && sa.bid.event ? sa.bid.event : sa.bid;
            var functionBid = sa && sa.bid && sa.bid.fun ? sa.bid.fun : sa.bid;

            var isEventBidDefined = true;
            var isFunctionBidDefined = true;
            if (eventBid == undefined || eventBid == null || eventBid == "") {
                isEventBidDefined = false;
            }
            if (functionBid == undefined || functionBid == null || functionBid == "") {
                isFunctionBidDefined = false;
            }

            //必须指定bid
            if (!isEventBidDefined && !isFunctionBidDefined) {
                return false;
            }


            var tags = document.getElementsByTagName(tagName);
            var tag;
            var tagConfig;
            for (var i = 0; i < tags.length; i++) {
                tag = tags[i];

                //目前的采集方案只适用于HTML标签设置id属性的情况
                //如果被采集的HTML标签对象没有设置ID属性，该HTML标签的信息将不被采集。
                if (tag.id == undefined || tag.id == null || tag.id == "") {
                    continue;
                }

                if (tagName == "input") {
                    tagConfig = tagDefaultConfig.get(tag.type);
                } else {
                    tagConfig = tagDefaultConfig.get(tagName);
                }

                if (tagConfig == undefined || tagConfig == null) {
                    continue;
                }

                if (!isEventConfigDefined && isEventBidDefined) {
                    var eventNames = tagConfig.event.split(",");
                    // eventNames is Array ,改成for循环,
                    // author 唐少波 88391756 2018-1-12
                    for (var j = 0; j < eventNames.length; j++) {
                        var eventName = eventNames[j];
                        if (eventName == undefined || eventName == null || eventName == "") {
                            continue;
                        }
                        sa.events.push({
                            id: tag.id,
                            event: eventName,
                            attr: tagConfig.attr,
                            bid: eventBid
                        });
                    }
                    // for (x in eventNames) {
                    //     var eventName = eventNames[x];
                    //     if (eventName == undefined || eventName == null || eventName == "") {
                    //         continue;
                    //     }
                    //     sa.events.push({
                    //         id: tag.id,
                    //         event: eventName,
                    //         attr: tagConfig.attr,
                    //         bid: eventBid
                    //     });
                    // }
                }

                if (!isFunctionConfigDefined && isFunctionBidDefined) {
                    sa.customs.push({
                        id: tag.id,
                        attr: tagConfig.attr,
                        bid: functionBid
                    });
                }
            }
        }
    }

    //事件绑定、解除、触发操作
    //【注意事项】这里约定自定义事件带有 'custom' 的前缀（例如：customTest，customAlert）
    var EventManager = function () {
        var oThis = this;

        /**
         * 添加事件监听
         *
         * @param {String} type 事件监听的类型，只在 mouseenter 和 mouseleave 两个事件时需要填写
         *     方法内部需要对此作出处理以实现这两个虚拟事件的判断
         * @param {Function} callback 回调函数
         */
        oThis.addEvent = function (element, type, callback) {
            var _that = this;
            if (element.addEventListener) {
                //supported For Modern Browers and IE9+
                element.addEventListener(type, callback, false);
            } else if (element.attachEvent) {
                //supported For IE5+
                //自定义事件处理
                if (type.indexOf('custom') != -1) {
                    if (isNaN(element[type])) {
                        element[type] = 0;
                    }

                    var fnEv = function (event) {
                        event = event ? event : window.event
                        if (event.propertyName == type) {
                            callback.call(element);
                        }
                    };

                    element.attachEvent('onpropertychange', fnEv);
                    //在元素上存储绑定的 propertychange 的回调，方便移除事件绑定
                    if (!element['callback' + callback]) {
                        element['callback' + callback] = fnEv;
                    }
                } else {
                    //标准事件处理
                    element.attachEvent('on' + type, callback);
                }
            } else {
                //supported For Others
                element['on' + type] = callback;
            }
            return _that;
        }

        /**
         * 移除事件监听
         *
         * @param {String} type 事件监听的类型，只在 mouseenter 和 mouseleave 两个事件时需要填写
         *     方法内部需要对此作出处理以实现这两个虚拟事件的判断
         * @param {Function} callback 回调函数
         */
        oThis.removeEvent = function (element, type, callback) {
            var _that = this;
            if (element.removeEventListener) {
                //supported For Modern Browers and IE9+
                element.removeEventListener(type, callback, false);
            } else if (element.detachEvent) {
                //supported For IE5+
                //自定义事件处理
                if (type.indexOf('custom') != -1) {
                    //移除对相应的自定义属性的监听
                    element.detachEvent('onpropertychange', element['callback' + callback]);

                    //删除储存在 DOM 上的自定义事件的回调
                    element['callback' + callback] = null;
                } else {
                    //标准事件的处理
                    element.detachEvent('on' + type, callback);
                }
            } else {
                //supported For Others
                element['on' + type] = null;
            }

            return _that;
        }

        /**
         * 模拟触发事件
         * @param {String} type 模拟触发事件的事件类型
         * @return {Object} 返回当前的 Kjs 对象
         */
        oThis.triggerEvent = function (element, type) {
            var _that = this;
            try {
                if (element.dispatchEvent) {
                    var evt = document.createEvent('Event');
                    evt.initEvent(type, true, true);
                    element.dispatchEvent(evt);

                } else if (element.fireEvent) {
                    if (type.indexOf('custom') != -1) {
                        element[type]++;
                    } else {
                        element.fireEvent('on' + type);
                    }
                }
            } catch (e) {

            }
            ;

            return _that;
        }
    }

    var Config = function (sa) {
        var oThis = this;

        var utils = new Utils();
        var tagDefaultConfig = new TagDefaultConfig();
        tagDefaultConfig.initDefaultConfig();

        oThis.version = 'SA-1.0.1';
        oThis.PID = (new Date()).getTime();
        oThis.server = sa && sa.server ? sa.server : 'auto';
        oThis.domainName = sa && sa.domainName ? sa.domainName : 'auto';
        oThis.events = sa && sa.events ? sa.events : []; // Synchronous defined events.
        oThis.customs = sa && sa.customs ? sa.customs : [];
        oThis.eventWiths = null;
        oThis.customWiths = null;
        oThis.maxLength = sa && sa.maxLength ? sa.maxLength : 80; //send message's maxLength
        oThis.securityTags = sa && sa.securityTags ? sa.securityTags : ["password"];
        oThis.securityTagIds = sa && sa.securityTagIds ? sa.securityTagIds : [];
        oThis.ignoreTags = sa && sa.ignoreTags ? sa.ignoreTags : [];
        oThis.ignoreTagIds = sa && sa.ignoreTagIds ? sa.ignoreTagIds : [];
        oThis.regEvents = sa && sa.regEvents ? sa.regEvents : [];

        oThis.sync = sa && sa.sync ? true : false;
        oThis.cusVar = sa && sa.cusVar ? sa.cusVar : []; // Synchronous defined var.
        oThis.openAPI = sa && sa.openAPI ? true : false;

        initEventConfig();
        initCustomConfig();

        oThis.isSecurityTag = function (id) {
            if (utils.isEmpty(id)) {
                return false;
            }

            if (utils.isArrayEmpty(oThis.securityTagIds) && utils.isArrayEmpty(oThis.securityTags)) {
                return false;
            }

            //先根据Id进行判断
            if (!utils.isArrayEmpty(oThis.securityTagIds)) {
                var securityTagId;
                //oThis.securityTagIds 是数组不推荐用for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var i = 0; i < oThis.securityTagIds.length; i++) {
                    securityTagId = oThis.securityTagIds[i];
                    if (utils.isEmpty(securityTagId)) {
                        continue;
                    }

                    if (securityTagId == id) {
                        return true;
                    }
                }


                // for (var x in oThis.securityTagIds) {
                //     securityTagId = oThis.securityTagIds[x];
                //     if (utils.isEmpty(securityTagId)) {
                //         continue;
                //     }

                //     if (securityTagId == id) {
                //         return true;
                //     }
                // }
            }

            //再根据tagName进行判断
            if (utils.isArrayEmpty(oThis.securityTags)) {
                return false;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return false;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }

            var securityTagName;
            //oThis.securityTags 是数组不推荐用for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            for (var i = 0; i < oThis.securityTags.length; i++) {
                securityTagName = oThis.securityTags[i];
                if (utils.isEmpty(securityTagName)) {
                    continue;
                }

                if (tagName == securityTagName) {
                    return true;
                }
            }
            // for (var x in oThis.securityTags) {
            //     securityTagName = oThis.securityTags[x];
            //     if (utils.isEmpty(securityTagName)) {
            //         continue;
            //     }

            //     if (tagName == securityTagName) {
            //         return true;
            //     }
            // }

            return false;
        }

        oThis.isIgnoreTag = function (id) {
            if (utils.isEmpty(id)) {
                return false;
            }

            if (utils.isArrayEmpty(oThis.ignoreTagIds) && utils.isArrayEmpty(oThis.ignoreTags)) {
                return false;
            }

            //先根据Id进行判断
            //oThis.ignoreTagIds 是数组不推荐用for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            if (!utils.isArrayEmpty(oThis.ignoreTagIds)) {
                var ignoreTagId;
                for (var i = 0; i < oThis.ignoreTagIds.length; i++) {
                    ignoreTagId = oThis.ignoreTagIds[i];
                    if (utils.isEmpty(ignoreTagId)) {
                        continue;
                    }

                    if (ignoreTagId == id) {
                        return true;
                    }
                }

            }
            // if (!utils.isArrayEmpty(oThis.ignoreTagIds)) {
            //     var ignoreTagId;
            //     for (var x in oThis.ignoreTagIds) {
            //         ignoreTagId = oThis.ignoreTagIds[x];
            //         if (utils.isEmpty(ignoreTagId)) {
            //             continue;
            //         }

            //         if (ignoreTagId == id) {
            //             return true;
            //         }
            //     }
            // }

            //再根据tagName进行判断
            if (utils.isArrayEmpty(oThis.ignoreTags)) {
                return false;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return false;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }

            var ignoreTagName;

            //oThis.ignoreTags 是数组不推荐用for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            for (var j = 0; j < oThis.ignoreTags.length; j++) {
                ignoreTagName = oThis.ignoreTags[j];
                if (utils.isEmpty(ignoreTagName)) {
                    continue;
                }

                if (tagName == ignoreTagName) {
                    return true;
                }
            }
            // for (var x in oThis.ignoreTags) {
            //     ignoreTagName = oThis.ignoreTags[x];
            //     if (utils.isEmpty(ignoreTagName)) {
            //         continue;
            //     }

            //     if (tagName == ignoreTagName) {
            //         return true;
            //     }
            // }

            return false;
        }

        //标准事件的配置
        function initEventConfig() {
            var eventHashMap = new HashMap();
            var eventWithHashMap = new HashMap();
            if (!utils.isArrayEmpty(oThis.events)) {
                var eventConfig;
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var x = 0; x < oThis.events.length; x++) {
                    eventConfig = oThis.events[x];
                    if (eventConfig.id == undefined || eventConfig.id == null || eventConfig.id == "") {
                        continue;
                    }

                    var ids = eventConfig.id.split(",");
                    var eventNames = eventConfig.event;
                    var attrName = eventConfig.attr;
                    var bid = eventConfig.bid ? eventConfig.bid : (sa && sa.bid && sa.bid.event ? sa.bid.event : sa.bid);
                    var withElements = eventConfig.withs;

                    var id;
                    //将for in遍历，改成for
                    //author:唐少波 88391756 2018-1-12
                    for (var i = 0; i < ids.length; i++) {
                        id = ids[i];
                        if (utils.isEmpty(id)) {
                            continue;
                        }

                        if (eventHashMap.containsKey(id)) {
                            if (utils.isEmpty(eventNames)) {
                                eventNames = tagDefaultConfig.getDefaultEvent(id);
                            }

                            if (utils.isEmpty(eventNames)) {
                                continue;
                            }

                            var _eventNameList = new _Set();
                            var _events = null;
                            var eventNamesArr = eventNames.split(",");
                            //将for in遍历，改成for
                            //author:唐少波 88391756 2018-1-12
                            for (var y = 0; y < eventNamesArr.length; y++) {
                                if (utils.isEmpty(eventNamesArr[y])) {
                                    continue;
                                }
                                if (!_eventNameList.contains(eventNamesArr[y])) {
                                    _eventNameList.add(eventNamesArr[y]);
                                    if (_events == null) {
                                        _events = eventNamesArr[y];
                                    } else {
                                        _events = _events + "," + eventNamesArr[y];
                                    }
                                }
                            }

                            if (_eventNameList.size() > 0) {
                                var _eventConfig = eventHashMap.get(id);
                                var _eventNames = _eventConfig.event;
                                var _eventNamesArr = _eventNames.split(",");
                                for (var z = 0; z < _eventNamesArr.length; z++) {
                                    if (utils.isEmpty(_eventNamesArr[z])) {
                                        continue;
                                    }
                                    if (!_eventNameList.contains(_eventNamesArr[z])) {
                                        _eventNameList.add(_eventNamesArr[z]);
                                        if (_events == null) {
                                            _events = _eventNamesArr[z];
                                        } else {
                                            _events = _events + "," + _eventNamesArr[z];
                                        }
                                    }
                                }

                                if (_events != null) {
                                    if (utils.isEmpty(attrName)) {
                                        attrName = tagDefaultConfig.getDefaultAttr(id);
                                    }
                                    eventHashMap.put(id, {
                                        id: id,
                                        event: _events,
                                        attr: attrName,
                                        bid: bid
                                    });
                                }
                            }
                        } else {
                            if (utils.isEmpty(eventNames)) {
                                eventNames = tagDefaultConfig.getDefaultEvent(id);
                            }

                            if (utils.isEmpty(eventNames)) {
                                continue;
                            }

                            if (utils.isEmpty(attrName)) {
                                attrName = tagDefaultConfig.getDefaultAttr(id);
                            }

                            eventHashMap.put(id, {
                                id: id,
                                event: eventNames,
                                attr: attrName,
                                bid: bid
                            });
                        }

                        //附带采集信息
                        if (!utils.isEmpty(withElements) && !utils.isEmpty(eventNames)) {
                            var eventNamesArr = eventNames.split(",");
                            var eventName, key;
                            //将for in遍历，改成for
                            //author:唐少波 88391756 2018-1-12
                            for (var l = 0; l < eventNamesArr.length; l++) {
                                eventName = eventNamesArr[l];
                                if (utils.isEmpty(eventName)) {
                                    continue;
                                }
                                key = id + "&" + eventName;
                                getWithElementsConfig(eventWithHashMap, key, withElements);
                            }
                        }

                    }
                }
            }
            oThis.events = eventHashMap;
            oThis.eventWiths = eventWithHashMap;
            sa.events = null;
        }

        //自定义（JQuery）方法配置
        function initCustomConfig() {
            var customHashMap = new HashMap();
            var customWithHashMap = new HashMap();
            if (!utils.isArrayEmpty(oThis.customs)) {
                var customConfig;
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var x = 0; x < oThis.customs.length; x++) {
                    customConfig = oThis.customs[x];
                    if (utils.isEmpty(customConfig.id)) {
                        continue;
                    }

                    var ids = customConfig.id.split(",");
                    var attrName = customConfig.attr;
                    var bid = customConfig.bid ? customConfig.bid : (sa && sa.bid && sa.bid.fun ? sa.bid.fun : sa.bid);
                    var withElements = customConfig.withs;
                    var id;
                    //将for in遍历，改成for
                    //author:唐少波 88391756 2018-1-12
                    for (var y = 0; y < ids.length; y++) {
                        id = ids[y];
                        if (utils.isEmpty(id)) {
                            continue;
                        }

                        if (utils.isEmpty(attrName)) {
                            attrName = tagDefaultConfig.getDefaultAttr(id);
                        }

                        if (utils.isEmpty(attrName)) {
                            continue;
                        }

                        customHashMap.put(id, {
                            id: id,
                            attr: attrName,
                            bid: bid
                        });

                        //附带采集信息
                        if (!utils.isEmpty(withElements)) {
                            getWithElementsConfig(customWithHashMap, id, withElements);
                        }
                    }
                }
            }
            oThis.customs = customHashMap;
            oThis.customWiths = customWithHashMap;
            sa.customs = null;
        }

        //取得附带采集的配置信息
        function getWithElementsConfig(withHashMap, key, withElements) {
            if (withHashMap.containsKey(key)) {
                var withElementIdList = new _Set();
                var withConfig = _getWithElementsConfig(withElements, withElementIdList);

                if (withConfig != null) {
                    var withConfigArr = new Array();
                    if (utils.isObject(withConfig.config)) {
                        withConfigArr.push(withConfig.config);
                    } else {
                        withConfigArr = withConfig.config;
                    }
                    var _withElements = withHashMap.get(key);
                    var _withConfig = _getWithElementsConfig(_withElements, withConfig.idList);
                    if (_withConfig != null) {
                        if (utils.isObject(_withConfig.config)) {
                            withConfigArr.push(_withConfig.config);
                        } else {
                            for (j in _withConfig.config) {
                                withConfigArr.push(_withConfig.config[j]);
                            }
                        }
                    }

                    withHashMap.put(key, withConfigArr);
                }
            } else {
                var withElementIdList = new _Set();
                var withElementIds = null;
                var withConfig = _getWithElementsConfig(withElements, withElementIdList);

                if (withConfig != null) {
                    var withConfigArr = new Array();
                    if (utils.isObject(withConfig.config)) {
                        withConfigArr.push(withConfig.config);
                    } else {
                        withConfigArr = withConfig.config;
                    }
                    withHashMap.put(key, withConfigArr);
                }
            }
        }

        function _getWithElementsConfig(withElements, withElementIdList) {
            if (withElements == undefined || withElements == null) {
                return null;
            }

            var withElementsConfig = new Array();
            if (withElementIdList == undefined || withElementIdList == null) {
                withElementIdList = new _Set();
            }

            var withElementArr = new Array();
            if (utils.isObject(withElements)) {
                withElementArr.push(withElements);
            } else if (utils.isArray(withElements)) {
                withElementArr = withElements;
            } else {
                return null;
            }
            var withElement, withElementIdsArr, withElementIds = null,
                withElementId, withElementAttr;
            //将for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            for (var j = 0; j < withElementArr.length; j++) {
                withElementIds = null;
                withElement = withElementArr[j];
                if (utils.isEmpty(withElement)) {
                    continue;
                }

                if (utils.isEmpty(withElement.id)) {
                    continue;
                }

                withElementAttr = withElement.attr;
                withElementIdsArr = withElement.id.split(",");
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var k = 0; k < withElementIdsArr.length; k++) {
                    withElementId = withElementIdsArr[k];
                    if (utils.isEmpty(withElementId)) {
                        continue;
                    }

                    if (!withElementIdList.contains(withElementId)) {
                        withElementIdList.add(withElementId);
                        if (withElementIds == null) {
                            withElementIds = withElementId;
                        } else {
                            withElementIds = withElementIds + "," + withElementId;
                        }
                        if (utils.isEmpty(withElementAttr)) {
                            withElementAttr = tagDefaultConfig.getDefaultAttr(withElementId);
                        }
                    }
                }

                if (withElementIds != null) {
                    withElementsConfig.push({
                        id: withElementIds,
                        attr: withElementAttr
                    });
                }
            }

            if (utils.isArrayEmpty(withElementIdList)) {
                return null;
            }

            return {config: withElementsConfig, idList: withElementIdList, ids: withElementIds};
        }
    };

    var Utils = function () {
        var oThis = this;
        oThis.isNull = function (obj) {
            return (undefined == obj || '' == obj || _empty == obj);
        }

        oThis.isEmpty = function(){}