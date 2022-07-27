window.fool = window.fool || {};

window.fool.shimConsoleMethods = function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
};
window.fool.insertScript = function (id, src, async) {
    if (document.getElementById(id)) return;

    var fjs = document.getElementsByTagName('script')[0];

    var js = document.createElement('script');
    js.id = id;
    js.src = src;
    js.type = 'text/javascript';
    if (async) js.async = true;

    fjs.parentNode.insertBefore(js, fjs);
};
window.fool.settings = {
    isEnabled: function (feature) {
        if (!window.settings) {
            console.log('Fool settings not loaded');
            return;
        }

        if (typeof (window.settings[feature]) === 'undefined') {
            console.log('feature %s not defined', feature);

            return;
        }
        return window.settings[feature];
    }
};
window.fool.ui = {
    init: function () {
        fontAwesomeTags = document.querySelectorAll("i.far, i.fas, i.fal")
        for(var tagIndex in fontAwesomeTags){
            const fontAwesomeItalicsTag = fontAwesomeTags[tagIndex]
            if(typeof(fontAwesomeItalicsTag) === "object"){
                const iconName = fontAwesomeItalicsTag.classList[1].substr(3)
                const svgns = "http://www.w3.org/2000/svg";
                const xlinkns = "http://www.w3.org/1999/xlink";
                const fontAwesomeSVGTag = document.createElementNS(svgns, 'svg')
                fontAwesomeSVGTag.setAttribute('viewBox', "0 0 512 512")
                fontAwesomeSVGTag.classList.add("fa-svg-icon")
                fontAwesomeSVGTag.setAttribute("height", "12")
                fontAwesomeSVGTag.setAttribute("width", "12")
                const use = document.createElementNS(svgns, 'use')
                if(fontAwesomeItalicsTag.classList.contains("fas")){
                    use.setAttributeNS(xlinkns, "href", "#" + iconName +"-solid");
                }else if(fontAwesomeItalicsTag.classList.contains("fal")){
                    use.setAttributeNS(xlinkns, "href", "#" + iconName +"-light");
                }else{
                    use.setAttributeNS(xlinkns, "href", "#" + iconName);
                }
                fontAwesomeSVGTag.appendChild(use)

                const tagId = fontAwesomeItalicsTag.getAttribute('id')
                if(tagId){
                   fontAwesomeSVGTag.setAttribute("id", tagId)
                }

                fontAwesomeItalicsTag.parentNode.replaceChild(fontAwesomeSVGTag, fontAwesomeItalicsTag)
            }
        }

        this.applyFooterCopyrightText();
        this.buildDisclosure();
    },
    onFirstScroll: function (f) {
        var handler = function(){}