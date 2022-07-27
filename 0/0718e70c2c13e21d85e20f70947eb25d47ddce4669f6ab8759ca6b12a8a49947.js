(function(require, define, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery', 'uuid'], factory);
    } else {
        factory(window.jQuery, window.UUID);
    }
} (PBS.KIDS.require, PBS.KIDS.define, function($, UUID) {
    PBS.KIDS.utils = {
        /*************************************************************************/
        /*
         /* Takes: null
         /* Returns: UUID
         /*
         /*Functions to generate unique GUID, based on UUID.js
         /*
         /*************************************************************************/
        uuid: function() {
            return UUID.genV4().hexString;
        },

        /***************************************************************/
        // Set a cookie with name and value which expires in specified milliseconds
        // name: cookie name
        // value: cookie value
        // expireInMilliSeconds: cookie expire time in milliseconds
        // Returns: null
        /***************************************************************/
        setCookie: function(name, value, expireInMilliSeconds) {
            if (expireInMilliSeconds) {
                var date = new Date();
                date.setTime(date.getTime() + expireInMilliSeconds);
                var expires = '; expires=' + date.toGMTString();
            } else {
                var expires = '';
            }
            document.cookie = name + '=' + value + expires + '; path=/';
        },

        /***************************************************************/
        // deletes the cookie
        // name: cookie name
        // Returns: null
        /***************************************************************/
        deleteCookie: function(name) {
            PBS.KIDS.utils.setCookie(name, '', -1);
            PBS.KIDS.utils.log("cookie deleted",name);
        },

        /***************************************************************/
        //Get cookie value for the specified name
        // name: cookie name
        // Returns: cookie value if cookie exists else 'null'
        /***************************************************************/
        getCookie: function(name) {
            var cookies = document.cookie.split(";");
            for(var i=0;i<cookies.length;i++) {
                var keyValue = cookies[i].split("=");
                if($.trim(keyValue[0]) === $.trim(name))
                    return keyValue[1];
            }
            return null;
        },

        /***************************************************************/
        //Logger class
        /***************************************************************/
        log: function() {
            var PBS_kids_debug = false;

            if(PBS_kids_debug){
                if(window.console){
                    if (window.console.log.apply === undefined){ // For IE
                        var str='';
                        for(var i=0; i<arguments.length; i++){
                            str += arguments[i] + " ";
                        }
                        window.console.log(str);
                    }
                    else // For chrome, FF and Safari
                        window.console.log.apply(window.console, arguments);
                }
                else if (window.debug){ // For older version of IE
                    window.debug.log.apply(debug, arguments);
                }
            }
        },
        platformIdentify :  {
            init: function(){}