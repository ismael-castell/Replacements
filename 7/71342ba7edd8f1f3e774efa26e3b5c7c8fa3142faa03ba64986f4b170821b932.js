!function(e) {
e.initAnimationCenter = function() {
function e() {
o.css(t, -(r - a.width()) / 2);
}
function n() {
var e = (_ - l.width()) / 2;
s.css(t, -e), s.css("width", jQuery(window).width() + e - 15);
}
var i = jQuery(window), t = "margin-" + displayLanguageDirection, o = jQuery("#tree_chart_animation"), a = o.parent(), r = o.width(), s = jQuery("#records_animation"), l = s.parent(), _ = s.width();
e(), i.on("resize", function() {
e();
}), n(), i.on("resize", function() {
n();
});
}, e.initBtnAnimation = function() {
var e = jQuery("#slide-up-btn");
e.length > 0 && jQuery(window).on("scroll", function() {
var n = jQuery(e).offset().top, i = jQuery(window).scrollTop();
i + 800 > n && $(e).addClass("slideUp");
});
}, e.initArrowDownScroll = function() {
jQuery(".scroll-down").on("click", function(e) {
e.preventDefault(), jQuery("html, body").animate({
scrollTop:$(".scroll-down").offset().top
}, 1800);
});
}, e.initTextEntrance = function() {
jQuery("#mobile_registration_btn").fadeIn(800), jQuery(window).on("resize", function(){}