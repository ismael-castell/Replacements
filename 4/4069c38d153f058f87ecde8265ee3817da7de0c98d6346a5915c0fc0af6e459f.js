
$(document).ready(function () {
var $window = $(window);
var $homeHero = $('.home-hero');
function handleHomeHeroHeadline(index, elem) {
var $elem = $(elem);
var $date = $elem.find('.home-hero-headline__date');
var $image = $elem.find('.home-hero-headline__image');
var $title = $elem.find('.home-hero-headline__title');
var delayValue = index * .3;
var scrollCtrl = new ScrollMagic.Controller();
var scrollTL = new TimelineMax({
paused: true,
});
var scrollTL2 = new TimelineMax({
paused: true,
onComplete: function () {
TweenMax.set($date, {clearProps: 'all'});
}
});
if ($elem.hasClass('home-hero-headline--pre-anim-hidden')) {
$elem.removeClass('home-hero-headline--pre-anim-hidden');
}
scrollTL
.add('trigger', delayValue)
.from($title, .35, {autoAlpha: 0, opacity: 0, y: 15, ease: Expo.EaseOut}, 'trigger')
.from($image, .6, {autoAlpha: 0, opacity: 0, ease: Expo.EaseInOut}, 'trigger');
scrollTL2
.from($date, .2, {delay: .7, autoAlpha: 0, opacity: 0, y: 10, ease: Expo.EaseInOut});
function setScrollMagicScene() {
var scrollScene = new ScrollMagic.Scene({
triggerElement: $elem[0],
triggerHook: 1,
reverse: false
})
.on('start', function () {
scrollTL.play(0);
scrollTL2.play(0);
})
.addTo(scrollCtrl);
}
TweenMax.delayedCall(.2, setScrollMagicScene);
}
function handleHomeHeroDetails(elem) {
var $elem = $(elem);
var $icon = $elem.find('.amnh-icon');
var scrollCtrl = new ScrollMagic.Controller();
var scrollTL = new TimelineMax({
paused: true,
});
scrollTL
.add('trigger')
.from($elem, .35, {autoAlpha: 0, opacity: 0, ease: Expo.EaseOut}, 'trigger')
.from($icon, .35, {scale: .2, autoAlpha: 0, opacity: 0, ease: Expo.EaseOut}, 'trigger');
function setScrollMagicScene() {
var scrollScene = new ScrollMagic.Scene({
triggerElement: $elem[0],
triggerHook: .9,
reverse: false
})
.on('start', function () {
scrollTL.play(0);
})
.addTo(scrollCtrl);
}
TweenMax.delayedCall(.2, setScrollMagicScene);
}
if ($homeHero.length) {
var $homeHeroHeadline = $('.home-hero-headline');
var $homeHeroDetails = $('.home-hero__details');
if ($homeHeroHeadline.length) {
$homeHeroHeadline.each(handleHomeHeroHeadline);
}
if($homeHeroDetails.length) {
handleHomeHeroDetails($homeHeroDetails);
}
}
});
$(document).ready(function () {
var $window = $(window);
var $homeMembership = $('.home-membership');
function handleHomeMembership() {
var $homeMembershipIcon = $homeMembership.find('.amnh-icon');
var $homeMembershipImage = $('.home-membership__image');
var scrollCtrl = new ScrollMagic.Controller();
var scrollTL = new TimelineMax({
paused: true,
});
scrollTL
.add('trigger')
.from($homeMembershipImage, .3, {opacity: 0, ease: Expo.EaseOut},'trigger')
.from($homeMembershipImage, 1, {scale: .9, xPercent: -5, yPercent: -25}, 'trigger')
.from($homeMembershipIcon, .3, {scale: .2, autoAlpha: 0, opacity: 0, ease: Expo.EaseOut}, 'trigger');
function setScrollMagicScene() {
var scrollScene = new ScrollMagic.Scene({
triggerElement: $homeMembership[0],
triggerHook: .7,
reverse: false
})
.on('start', function () {
scrollTL.play(0);
})
.addTo(scrollCtrl);
}
TweenMax.delayedCall(.2, setScrollMagicScene);
}
if ($homeMembership.length) {
handleHomeMembership();
}
});
$(document).ready(function () {
var $eventCta = $('.amnh-event-cta');
function handleEventCtaAnimation(index, elem) {
var $elem = $(elem);
var $image = $elem.find('.amnh-event-cta__image');
var $title = $elem.find('.amnh-event-cta__title');
var $label = $elem.find('.amnh-event-cta__label');
$image.append('<span class="border-overlay-container"><span class="border-overlay"></span></span>');
var $overlay = $image.find('.border-overlay');
var elemHasHovered = false;
var hoverTL = new TimelineMax({
paused: true,
onStart: toggleHoverState,
onReverseComplete: toggleHoverState
});
hoverTL
.set($overlay, {autoAlpha: 0, opacity: 0})
.add('trigger')
.from($overlay, .2, {backgroundColor: 'rgba(0,0,0,0)', scale: 1.04, force3D: true, ease: Expo.EaseOut}, 'trigger')
.to($title, .2, {color: '#078071', ease: Expo.EaseOut}, 'trigger');
function toggleHoverState() {
elemHasHovered = !elemHasHovered;
}
function onMouseenter() {
if (!elemHasHovered) {
hoverTL.timeScale(1).play(0);
}
}
function onMouseleave() {
if (elemHasHovered) {
hoverTL.timeScale(1.3).reverse();
}
}
$elem
.mouseenter(onMouseenter)
.mouseleave(onMouseleave)
.focusin(onMouseenter)
.focusout(onMouseleave);
}
if ($eventCta.length) {
$eventCta.each(handleEventCtaAnimation);
}
});
$(document).ready(function () {
var $window = $(window);
var $eventCtaCarousel = $('.amnh-event-cta-carousel');
function handleEventCtaCarousel(index, elem) {
var $carousel = $(elem);
var $slider = $carousel.find('.amnh-event-cta-carousel__slider');
var $carouselSlide = $('.amnh-event-cta-carousel-slide');
var $carouselHeader = $('.amnh-event-cta-carousel__header');
var $carouselContent = $('.amnh-event-cta-carousel__content');
var $carouselArrow = $('.amnh-event-cta-carousel__arrow');
var $carouselArrowPrev = $carousel.find('.amnh-event-cta-carousel__navigation.prev').find($carouselArrow);
var $carouselArrowNext = $carousel.find('.amnh-event-cta-carousel__navigation.next').find($carouselArrow);
$carouseSlidesBorders = $carousel.find('.border-overlay');
var breakPointActiveSmall;
var breakPointActiveMedium;
var breakPointActiveLarge;
var breakPointActiveExtraLarge;
var currentSlideIndex;
function handleCarouselArrows() {
var nextArrowIsShown = false;
var prevArrowIsShown = false;
TweenMax.set($carouselArrowNext, {xPercent: 100});
TweenMax.set($carouselArrowPrev, {xPercent: -100});
function showNextArrow() {
if(!nextArrowIsShown) {
TweenMax.to($carouselArrowNext, .2, {xPercent: 0});
nextArrowIsShown = true;
}
}
function showPrevArrow() {
if(!prevArrowIsShown) {
TweenMax.to($carouselArrowPrev, .2, {xPercent: 0});
prevArrowIsShown = true;
}
}
function hideNextArrow() {
if(nextArrowIsShown) {
TweenMax.to($carouselArrowNext, .2, {xPercent: 100});
nextArrowIsShown = false;
}
}
function hidePrevArrow() {
if(prevArrowIsShown) {
TweenMax.to($carouselArrowPrev, .2, {xPercent: -100});
prevArrowIsShown = false;
}
}
$slider.on('mousemove', function(e) {
var $this = $(this);
var sliderWidth = $slider.outerWidth();
var sliderLeftOffset = $this.offset().left;
var pageX = e.pageX;
if(pageX >= sliderLeftOffset + sliderWidth*.8) {
showNextArrow();
}
if(pageX <= sliderLeftOffset + sliderWidth*.2) {
showPrevArrow();
}
if(pageX <= sliderLeftOffset + sliderWidth*.8) {
hideNextArrow();
}
if(pageX >= sliderLeftOffset + sliderWidth*.2) {
hidePrevArrow();
}
});
$carouselContent.on('mouseleave', function () {
hidePrevArrow();
hideNextArrow();
});
}
function onSlick(slidesToShow, slidesToScroll) {
settings = {
infinite: false,
arrows: true,
nextArrow: $carouselArrowNext,
prevArrow: $carouselArrowPrev,
speed: 700,
slidesToShow: slidesToShow,
slidesToScroll: slidesToScroll,
focusOnSelect: false
};
$slider.slick(settings);
$slider.slick('slickGoTo', currentSlideIndex, true);
setTabbing();
}
function(){}