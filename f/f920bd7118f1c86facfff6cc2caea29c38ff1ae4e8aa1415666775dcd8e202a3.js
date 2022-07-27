FP2_HASH = 'fphash';
var ua = navigator.userAgent || navigator.vendor || window.opera;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i) || !!ua.match(/iPod/i);
var webkit = !!ua.match(/WebKit/i) || !!ua.match(/FBAN/i) || !!ua.match(/FBAV/i);
var iOSSafari = iOS && webkit;
var __fingerprint_id = '';
var ___cur__script___ = document.currentScript;

function(){}

findCategory()

if (iOSSafari === false) {
    __show_4333abs(__fingerprint_id, ___cur__script___);
} else if (iOSSafari === true && typeof (Storage) !== "undefined" && localStorage.getItem(FP2_HASH) !== null) {
    __fingerprint_id = "data-revive-fphash=\"" + localStorage.getItem(FP2_HASH) + '"';
    __show_4333abs(__fingerprint_id, ___cur__script___);
} else {
            if (typeof (FingerprintJS) == 'undefined') {
        var adviad_script = document.createElement('SCRIPT');
                adviad_script.setAttribute('src', 'https://adviad.com/nativebanner/fp.min-v3.js');
        adviad_script.onload = function(){}