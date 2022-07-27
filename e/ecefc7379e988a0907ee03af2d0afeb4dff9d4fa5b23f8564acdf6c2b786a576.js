//@charset "utf-8";
/*
 * 在jQuery或Zepto文件之后引入该js，若无亦可。
 * */

;(function (window, document, undefined) {
    "use strict";
    var defaults = {
        flags: false,
        float: false,
        closeBtn:['append','right'],
        thumb: false,
        thumburl: '',
        thumbheight: 0,
        thumbwidth: 0,
        code_script: false,
        m_tag: null,
        m_href : null,
        m_target: null,
        m_cont : null,
        staytime: null,
        appendId: null,
        style: {
            display: 'inline-block',
            width: 0,
            height: 0
        }
    };
    var refreshCount = 0;
    var firstEnter = true;
    var loaded = false;
    var $;
    function _cmsad(options){
        var CmsadObjName = 'CmsadObjName_' + options.adb_id;
        return window[CmsadObjName] = new Cmsad(options);
    }
    window.advertiseCallback = function(res1,res2){
        var result = arguments[0];
        var CmsadObjName = 'CmsadObjName_' + result.adb_id;
        window[CmsadObjName].options = $.extend({}, window[CmsadObjName].options, result || {});
        window[CmsadObjName].handleInfo();
        window[CmsadObjName].refreshTimer();
    }
    function Cmsad(options){
        var _this = this;
        if(firstEnter){
            firstEnter = false;
            this.firstEnter();
        }
        var timer = setInterval(function(){
            if(loaded && $){
                _this.init(options);
                clearInterval(timer);
            }
        },10);
    }
    //记得去掉注释！！！
    function setCookie(name, value, expires){
        var exp = new Date();
        exp.setTime(exp.getTime() + expires);
        document.cookie = name+'='
        + value
        +';expires='
        + exp.toGMTString()
        + ';path=/;domain='
        + window.location.host;
    }
    function getCookie(name) {
        var cookieValue = "";
        var search = name + "=";
        var offset,end;
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search);
            if (offset != -1)    {
                offset += search.length;
                end = document.cookie.indexOf(";", offset);
                if (end == -1) end = document.cookie.length;
                cookieValue = unescape(document.cookie.substring(offset, end))
            }
        }
        return cookieValue;
    }
    function userBrowser() {
        var ua = navigator.userAgent.toLowerCase();
        if (!!window.ActiveXObject && !window.XMLHttpRequest){
            return 'IE6';
        }else if(/msie/i.test(ua) && !/opera/.test(ua)){
            return 'IE';
        }else if(/firefox/i.test(ua)){
            return 'Firefox';
        }else if(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua)){
            return 'Chrome';
        }else if(/opera/i.test(ua)){
            return 'Opera';
        }else if(/webkit/i.test(ua) &&!(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))){
            return 'Safari';
        }else{
            return 'Other';
        }
        return browser;
    }
    function(){}