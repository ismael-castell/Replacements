/*global tarteaucitron, ga, Shareaholic, stLight, clicky, top, google, Typekit, FB, ferankReady, IN, stButtons, twttr, PCWidget*/
/*jslint regexp: true, nomen: true*/

// generic iframe
tarteaucitron.services.iframe = {
    "key": "iframe",
    "type": "other",
    "name": "Web content",
    "uri": "",
    "needConsent": true,
    "cookies": [],
    "js": function () {
        "use strict";
        tarteaucitron.fallback(['tac_iframe'], function (x) {
            var width = x.getAttribute("width"),
                height = x.getAttribute("height"),
                url = x.getAttribute("data-url");

            return '<iframe src="' + url + '" width="' + width + '" height="' + height + '" scrolling="no" allowtransparency allowfullscreen></iframe>';
        });
    },
    "fallback": function () {
        "use strict";
        var id = 'iframe';
        tarteaucitron.fallback(['tac_iframe'], function (elem) {
            elem.style.width = elem.getAttribute('width') + 'px';
            elem.style.height = elem.getAttribute('height') + 'px';
            return tarteaucitron.engage(id);
        });
    }
};

// xandr
tarteaucitron.services.xandr = {
    "key": "xandr",
    "type": "ads",
    "name": "Xandr",
    "uri": "https://www.xandr.com/privacy/cookie-policy/",
    "needConsent": true,
    "cookies": ['uuid2', 'uids', 'sess', 'icu', 'anj', 'usersync'],
    "js": function () {
        "use strict";
        if (tarteaucitron.user.xandrId === undefined) {
            return;
        }

        if (!window.pixie) {
            var n = window.pixie = function(){}