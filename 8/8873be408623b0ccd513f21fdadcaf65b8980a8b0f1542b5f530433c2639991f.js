/*!
 * Elevator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

/*********************************************
 * Elevator.js
 *********************************************/

var Elevator = function(options) {

    'use strict';

    // Elements
    var body = null;

    // Scroll vars
    var animation = null;
    var duration = null; // ms
    var customDuration = false;
    var startTime = null;
    var startPosition = null;
    var endPosition = 0;
    var targetElement = null;
    var verticalPadding = null;
    var elevating = false;

    var startCallback;
    var mainAudio;
    var endAudio;
    var endCallback;

    var that = this;

    /**
     * Utils
     */

    // Thanks Mr Penner - http://robertpenner.com/easing/
    function easeInOutQuad( t, b, c, d ) {
        t /= d / 2;
        if ( t < 1 ) return c / 2 * t * t + b;
        t--;
        return -c / 2 * ( t * ( t -2 ) - 1 ) + b;
    }

    function extendParameters(options, defaults){
        for( var option in defaults ){
            var t = options[option] === undefined && typeof option !== "function";
            if(t){
                options[option] = defaults[option];
            }
        }
        return options;
    }

    function getVerticalOffset(element) {
        var verticalOffset = 0;
        while( element ){
            verticalOffset += element.offsetTop || 0;
            element = element.offsetParent;
        }

        if ( verticalPadding ) {
          verticalOffset = verticalOffset - verticalPadding;
        }

        return verticalOffset;
    }

    /**
     * Main
     */

    // Time is passed through requestAnimationFrame, what a world!
    function animateLoop( time ) {
        if ( !startTime ) {
            startTime = time;
        }

        var timeSoFar = time - startTime;
        var easedPosition = easeInOutQuad(timeSoFar, startPosition, endPosition - startPosition, duration);

        window.scrollTo(0, easedPosition);

        if( timeSoFar < duration ) {
            animation = requestAnimationFrame(animateLoop);
        } else {
            animationFinished();
        }
    }

//            ELEVATE!
//              /
//         ____
//       .'    '=====<0
//       |======|
//       |======|
//       [IIIIII[\--()
//       |_______|
//       C O O O D
//      C O  O  O D
//     C  O  O  O  D
//     C__O__O__O__D
//    [_____________]
    this.elevate = function() {

        if( elevating ) {
            return;
        }

        elevating = true;
        startPosition = (document.documentElement.scrollTop || body.scrollTop);
        updateEndPosition();

        // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
        if( !customDuration ) {
            duration = ( Math.abs(endPosition - startPosition) * 1.5);
        }

        requestAnimationFrame( animateLoop );

        // Start music!
        if( mainAudio ) {
            mainAudio.play();
        }

        if( startCallback ) {
            startCallback();
        }
    };

    function browserMeetsRequirements() {
        return window.requestAnimationFrame && window.Audio && window.addEventListener;
    }

    function(){}