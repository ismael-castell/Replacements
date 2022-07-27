/*
 Highcharts JS v9.0.0 (2021-02-02)

 Accessibility module

 (c) 2010-2019 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/accessibility",["highcharts"],function(t){b(t);b.Highcharts=t;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function t(b,k,m,p){b.hasOwnProperty(k)||(b[k]=p.apply(null,m))}b=b?b._modules:{};t(b,"Accessibility/Utils/HTMLUtilities.js",[b["Core/Globals.js"],b["Core/Utilities.js"]],function(b,k){var y=b.doc,p=b.win,q=
k.merge;return{addClass:function(b,f){b.classList?b.classList.add(f):0>b.className.indexOf(f)&&(b.className+=f)},escapeStringForHTML:function(b){return b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},getElement:function(b){return y.getElementById(b)},getFakeMouseEvent:function(b){if("function"===typeof p.MouseEvent)return new p.MouseEvent(b);if(y.createEvent){var g=y.createEvent("MouseEvent");if(g.initMouseEvent)return g.initMouseEvent(b,
!0,!0,p,"click"===b?1:0,0,0,0,0,!1,!1,!1,!1,0,null),g}return{type:b}},removeElement:function(b){b&&b.parentNode&&b.parentNode.removeChild(b)},reverseChildNodes:function(b){for(var g=b.childNodes.length;g--;)b.appendChild(b.childNodes[g])},setElAttrs:function(b,f){Object.keys(f).forEach(function(g){var r=f[g];null===r?b.removeAttribute(g):b.setAttribute(g,r)})},stripHTMLTagsFromString:function(b){return"string"===typeof b?b.replace(/<\/?[^>]+(>|$)/g,""):b},visuallyHideElement:function(b){q(!0,b.style,
{position:"absolute",width:"1px",height:"1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(1px, 1px, 1px, 1px)",marginTop:"-3px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",filter:"alpha(opacity=1)",opacity:"0.01"})}}});t(b,"Accessibility/Utils/ChartUtilities.js",[b["Accessibility/Utils/HTMLUtilities.js"],b["Core/Utilities.js"]],function(b,k){function y(a){var c=a.chart,e={},l="Seconds";e.Seconds=((a.max||0)-(a.min||0))/1E3;e.Minutes=e.Seconds/60;e.Hours=e.Minutes/60;e.Days=
e.Hours/24;["Minutes","Hours","Days"].forEach(function(a){2<e[a]&&(l=a)});var d=e[l].toFixed("Seconds"!==l&&"Minutes"!==l?1:0);return c.langFormat("accessibility.axis.timeRange"+l,{chart:c,axis:a,range:d.replace(".0","")})}function p(a){var c,e,l=a.chart,d=(null===(e=null===(c=l.options)||void 0===c?void 0:c.accessibility)||void 0===e?void 0:e.screenReaderSection.axisRangeDateFormat)||"";c=function(c){return a.dateTime?l.time.dateFormat(d,a[c]):a[c]};return l.langFormat("accessibility.axis.rangeFromTo",
{chart:l,axis:a,rangeFrom:c("min"),rangeTo:c("max")})}function q(a){var c,e;if(null===(c=a.points)||void 0===c?0:c.length)return a=h(a.points,function(a){return!!a.graphic}),null===(e=null===a||void 0===a?void 0:a.graphic)||void 0===e?void 0:e.element}function g(a){var c=q(a);return c&&c.parentNode||a.graph&&a.graph.element||a.group&&a.group.element}function f(a,c){c.setAttribute("aria-hidden",!1);c!==a.renderTo&&c.parentNode&&(Array.prototype.forEach.call(c.parentNode.childNodes,function(a){a.hasAttribute("aria-hidden")||
a.setAttribute("aria-hidden",!0)}),f(a,c.parentNode))}var u=b.stripHTMLTagsFromString,r=k.defined,h=k.find,d=k.fireEvent;return{getChartTitle:function(a){return u(a.options.title.text||a.langFormat("accessibility.defaultChartTitle",{chart:a}))},getAxisDescription:function(a){return a&&(a.userOptions&&a.userOptions.accessibility&&a.userOptions.accessibility.description||a.axisTitle&&a.axisTitle.textStr||a.options.id||a.categories&&"categories"||a.dateTime&&"Time"||"values")},getAxisRangeDescription:function(a){var c=
a.options||{};return c.accessibility&&"undefined"!==typeof c.accessibility.rangeDescription?c.accessibility.rangeDescription:a.categories?(c=a.chart,a=a.dataMax&&a.dataMin?c.langFormat("accessibility.axis.rangeCategories",{chart:c,axis:a,numCategories:a.dataMax-a.dataMin+1}):"",a):!a.dateTime||0!==a.min&&0!==a.dataMin?p(a):y(a)},getPointFromXY:function(a,c,e){for(var l=a.length,d;l--;)if(d=h(a[l].points||[],function(a){return a.x===c&&a.y===e}))return d},getSeriesFirstPointElement:q,getSeriesFromName:function(a,
c){return c?(a.series||[]).filter(function(a){return a.name===c}):a.series},getSeriesA11yElement:g,unhideChartElementFromAT:f,hideSeriesFromAT:function(a){(a=g(a))&&a.setAttribute("aria-hidden",!0)},scrollToPoint:function(a){var c=a.series.xAxis,e=a.series.yAxis,l=(null===c||void 0===c?0:c.scrollbar)?c:e;if((c=null===l||void 0===l?void 0:l.scrollbar)&&r(c.to)&&r(c.from)){e=c.to-c.from;if(r(l.dataMin)&&r(l.dataMax)){var n=l.toPixels(l.dataMin),b=l.toPixels(l.dataMax);a=(l.toPixels(a["xAxis"===l.coll?
"x":"y"]||0)-n)/(b-n)}else a=0;c.updatePosition(a-e/2,a+e/2);d(c,"changed",{from:c.from,to:c.to,trigger:"scrollbar",DOMEvent:null})}}}});t(b,"Accessibility/KeyboardNavigationHandler.js",[b["Core/Utilities.js"]],function(b){function k(b,k){this.chart=b;this.keyCodeMap=k.keyCodeMap||[];this.validate=k.validate;this.init=k.init;this.terminate=k.terminate;this.response={success:1,prev:2,next:3,noHandler:4,fail:5}}var y=b.find;k.prototype={run:function(b){var k=b.which||b.keyCode,g=this.response.noHandler,
f=y(this.keyCodeMap,function(b){return-1<b[0].indexOf(k)});f?g=f[1].call(this,k,b):9===k&&(g=this.response[b.shiftKey?"prev":"next"]);return g}};return k});t(b,"Accessibility/Utils/DOMElementProvider.js",[b["Core/Globals.js"],b["Accessibility/Utils/HTMLUtilities.js"],b["Core/Utilities.js"]],function(b,k,m){var y=b.doc,q=k.removeElement;b=m.extend;k=function(){this.elements=[]};b(k.prototype,{createElement:function(){var b=y.createElement.apply(y,arguments);this.elements.push(b);return b},destroyCreatedElements:function(){this.elements.forEach(function(b){q(b)});
this.elements=[]}});return k});t(b,"Accessibility/Utils/EventProvider.js",[b["Core/Globals.js"],b["Core/Utilities.js"]],function(b,k){var y=k.addEvent;k=k.extend;var p=function(){this.eventRemovers=[]};k(p.prototype,{addEvent:function(){var k=y.apply(b,arguments);this.eventRemovers.push(k);return k},removeAddedEvents:function(){this.eventRemovers.forEach(function(b){b()});this.eventRemovers=[]}});return p});t(b,"Accessibility/AccessibilityComponent.js",[b["Accessibility/Utils/ChartUtilities.js"],
b["Accessibility/Utils/DOMElementProvider.js"],b["Accessibility/Utils/EventProvider.js"],b["Core/Globals.js"],b["Accessibility/Utils/HTMLUtilities.js"],b["Core/Utilities.js"]],function(b,k,m,p,q,g){function f(){}var u=b.unhideChartElementFromAT,r=p.doc,h=p.win,d=q.removeElement,a=q.getFakeMouseEvent;b=g.extend;var c=g.fireEvent,e=g.merge;f.prototype={initBase:function(a){this.chart=a;this.eventProvider=new m;this.domElementProvider=new k;this.keyCodes={left:37,right:39,up:38,down:40,enter:13,space:32,
esc:27,tab:9}},addEvent:function(){return this.eventProvider.addEvent.apply(this.eventProvider,arguments)},createElement:function(){return this.domElementProvider.createElement.apply(this.domElementProvider,arguments)},fireEventOnWrappedOrUnwrappedElement:function(a,e){var l=e.type;r.createEvent&&(a.dispatchEvent||a.fireEvent)?a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(l,e):c(a,l,e)},fakeClickEvent:function(c){if(c){var e=a("click");this.fireEventOnWrappedOrUnwrappedElement(c,e)}},addProxyGroup:function(a){this.createOrUpdateProxyContainer();
var c=this.createElement("div");Object.keys(a||{}).forEach(function(e){null!==a[e]&&c.setAttribute(e,a[e])});this.chart.a11yProxyContainer.appendChild(c);return c},createOrUpdateProxyContainer:function(){var a=this.chart,c=a.renderer.box;a.a11yProxyContainer=a.a11yProxyContainer||this.createProxyContainerElement();c.nextSibling!==a.a11yProxyContainer&&a.container.insertBefore(a.a11yProxyContainer,c.nextSibling)},createProxyContainerElement:function(){var a=r.createElement("div");a.className="highcharts-a11y-proxy-container";
return a},createProxyButton:function(a,c,d,b,h){var l=a.element,n=this.createElement("button"),g=e({"aria-label":l.getAttribute("aria-label")},d);Object.keys(g).forEach(function(a){null!==g[a]&&n.setAttribute(a,g[a])});n.className="highcharts-a11y-proxy-button";h&&this.addEvent(n,"click",h);this.setProxyButtonStyle(n);this.updateProxyButtonPosition(n,b||a);this.proxyMouseEventsForButton(l,n);c.appendChild(n);g["aria-hidden"]||u(this.chart,n);return n},getElementPosition:function(a){var c=a.element;
return(a=this.chart.renderTo)&&c&&c.getBoundingClientRect?(c=c.getBoundingClientRect(),a=a.getBoundingClientRect(),{x:c.left-a.left,y:c.top-a.top,width:c.right-c.left,height:c.bottom-c.top}):{x:0,y:0,width:1,height:1}},setProxyButtonStyle:function(a){e(!0,a.style,{"border-width":0,"background-color":"transparent",cursor:"pointer",outline:"none",opacity:.001,filter:"alpha(opacity=1)","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=1)",zIndex:999,overflow:"hidden",padding:0,margin:0,display:"block",
position:"absolute"})},updateProxyButtonPosition:function(a,c){c=this.getElementPosition(c);e(!0,a.style,{width:(c.width||1)+"px",height:(c.height||1)+"px",left:(c.x||0)+"px",top:(c.y||0)+"px"})},proxyMouseEventsForButton:function(a,c){var e=this;"click touchstart touchend touchcancel touchmove mouseover mouseenter mouseleave mouseout".split(" ").forEach(function(l){var d=0===l.indexOf("touch");e.addEvent(c,l,function(c){var l=d?e.cloneTouchEvent(c):e.cloneMouseEvent(c);a&&e.fireEventOnWrappedOrUnwrappedElement(a,
l);c.stopPropagation();c.preventDefault()},{passive:!1})})},cloneMouseEvent:function(c){if("function"===typeof h.MouseEvent)return new h.MouseEvent(c.type,c);if(r.createEvent){var e=r.createEvent("MouseEvent");if(e.initMouseEvent)return e.initMouseEvent(c.type,c.bubbles,c.cancelable,c.view||h,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget),e}return a(c.type)},cloneTouchEvent:function(a){var c=function(a){for(var c=[],e=0;e<a.length;++e){var d=
a.item(e);d&&c.push(d)}return c};if("function"===typeof h.TouchEvent)return c=new h.TouchEvent(a.type,{touches:c(a.touches),targetTouches:c(a.targetTouches),changedTouches:c(a.changedTouches),ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey,metaKey:a.metaKey,bubbles:a.bubbles,cancelable:a.cancelable,composed:a.composed,detail:a.detail,view:a.view}),a.defaultPrevented&&c.preventDefault(),c;c=this.cloneMouseEvent(a);c.touches=a.touches;c.changedTouches=a.changedTouches;c.targetTouches=a.targetTouches;
return c},destroyBase:function(){d(this.chart.a11yProxyContainer);this.domElementProvider.destroyCreatedElements();this.eventProvider.removeAddedEvents()}};b(f.prototype,{init:function(){},getKeyboardNavigation:function(){},onChartUpdate:function(){},onChartRender:function(){},destroy:function(){}});return f});t(b,"Accessibility/KeyboardNavigation.js",[b["Core/Globals.js"],b["Core/Utilities.js"],b["Accessibility/Utils/HTMLUtilities.js"],b["Accessibility/Utils/EventProvider.js"]],function(b,k,m,p){function y(d,
a){this.init(d,a)}var g=b.doc,f=b.win,u=k.addEvent,r=k.fireEvent,h=m.getElement;u(g,"keydown",function(d){27===(d.which||d.keyCode)&&b.charts&&b.charts.forEach(function(a){a&&a.dismissPopupContent&&a.dismissPopupContent()})});b.Chart.prototype.dismissPopupContent=function(){var d=this;r(this,"dismissPopupContent",{},function(){d.tooltip&&d.tooltip.hide(0);d.hideExportMenu()})};y.prototype={init:function(d,a){var c=this,e=this.eventProvider=new p;this.chart=d;this.components=a;this.modules=[];this.currentModuleIx=
0;this.update();e.addEvent(this.tabindexContainer,"keydown",function(a){return c.onKeydown(a)});e.addEvent(this.tabindexContainer,"focus",function(a){return c.onFocus(a)});["mouseup","touchend"].forEach(function(a){return e.addEvent(g,a,function(){return c.onMouseUp()})});["mousedown","touchstart"].forEach(function(a){return e.addEvent(d.renderTo,a,function(){c.isClickingChart=!0})});e.addEvent(d.renderTo,"mouseover",function(){c.pointerIsOverChart=!0});e.addEvent(d.renderTo,"mouseout",function(){c.pointerIsOverChart=
!1});this.modules.length&&this.modules[0].init(1)},update:function(d){var a=this.chart.options.accessibility;a=a&&a.keyboardNavigation;var c=this.components;this.updateContainerTabindex();a&&a.enabled&&d&&d.length?(this.modules=d.reduce(function(a,d){d=c[d].getKeyboardNavigation();return a.concat(d)},[]),this.updateExitAnchor()):(this.modules=[],this.currentModuleIx=0,this.removeExitAnchor())},onFocus:function(d){var a,c=this.chart;d=d.relatedTarget&&c.container.contains(d.relatedTarget);this.isClickingChart||
d||(null===(a=this.modules[0])||void 0===a?void 0:a.init(1))},onMouseUp:function(){delete this.isClickingChart;if(!this.keyboardReset&&!this.pointerIsOverChart){var d=this.chart,a=this.modules&&this.modules[this.currentModuleIx||0];a&&a.terminate&&a.terminate();d.focusElement&&d.focusElement.removeFocusBorder();this.currentModuleIx=0;this.keyboardReset=!0}},onKeydown:function(d){d=d||f.event;var a,c=this.modules&&this.modules.length&&this.modules[this.currentModuleIx];this.keyboardReset=!1;if(c){var e=
c.run(d);e===c.response.success?a=!0:e===c.response.prev?a=this.prev():e===c.response.next&&(a=this.next());a&&(d.preventDefault(),d.stopPropagation())}},prev:function(){return this.move(-1)},next:function(){return this.move(1)},move:function(d){var a=this.modules&&this.modules[this.currentModuleIx];a&&a.terminate&&a.terminate(d);this.chart.focusElement&&this.chart.focusElement.removeFocusBorder();this.currentModuleIx+=d;if(a=this.modules&&this.modules[this.currentModuleIx]){if(a.validate&&!a.validate())return this.move(d);
if(a.init)return a.init(d),!0}this.currentModuleIx=0;0<d?(this.exiting=!0,this.exitAnchor.focus()):this.tabindexContainer.focus();return!1},updateExitAnchor:function(){var d=h("highcharts-end-of-chart-marker-"+this.chart.index);this.removeExitAnchor();d?(this.makeElementAnExitAnchor(d),this.exitAnchor=d):this.createExitAnchor()},updateContainerTabindex:function(){var d=this.chart.options.accessibility;d=d&&d.keyboardNavigation;d=!(d&&!1===d.enabled);var a=this.chart,c=a.container;a.renderTo.hasAttribute("tabindex")&&
(c.removeAttribute("tabindex"),c=a.renderTo);this.tabindexContainer=c;var e=c.getAttribute("tabindex");d&&!e?c.setAttribute("tabindex","0"):d||a.container.removeAttribute("tabindex")},makeElementAnExitAnchor:function(d){var a=this.tabindexContainer.getAttribute("tabindex")||0;d.setAttribute("class","highcharts-exit-anchor");d.setAttribute("tabindex",a);d.setAttribute("aria-hidden",!1);this.addExitAnchorEventsToEl(d)},createExitAnchor:function(){var d=this.chart,a=this.exitAnchor=g.createElement("div");
d.renderTo.appendChild(a);this.makeElementAnExitAnchor(a)},removeExitAnchor:function(){this.exitAnchor&&this.exitAnchor.parentNode&&(this.exitAnchor.parentNode.removeChild(this.exitAnchor),delete this.exitAnchor)},addExitAnchorEventsToEl:function(d){var a=this.chart,c=this;this.eventProvider.addEvent(d,"focus",function(e){e=e||f.event;e.relatedTarget&&a.container.contains(e.relatedTarget)||c.exiting?c.exiting=!1:(c.tabindexContainer.focus(),e.preventDefault(),c.modules&&c.modules.length&&(c.currentModuleIx=
c.modules.length-1,(e=c.modules[c.currentModuleIx])&&e.validate&&!e.validate()?c.prev():e&&e.init(-1)))})},destroy:function(){this.removeExitAnchor();this.eventProvider.removeAddedEvents();this.chart.container.removeAttribute("tabindex")}};return y});t(b,"Accessibility/Components/LegendComponent.js",[b["Core/Globals.js"],b["Core/Legend.js"],b["Core/Utilities.js"],b["Accessibility/AccessibilityComponent.js"],b["Accessibility/KeyboardNavigationHandler.js"],b["Accessibility/Utils/HTMLUtilities.js"]],
function(b,k,m,p,q,g){function f(a){var c=a.legend&&a.legend.allItems,e=a.options.legend.accessibility||{};return!(!c||!c.length||a.colorAxis&&a.colorAxis.length||!1===e.enabled)}var u=m.addEvent,r=m.extend,h=m.find,d=m.fireEvent,a=g.removeElement,c=g.stripHTMLTagsFromString;b.Chart.prototype.highlightLegendItem=function(a){var c=this.legend.allItems,e=this.highlightedLegendItemIx;if(c[a]){c[e]&&d(c[e].legendGroup.element,"mouseout");e=this.legend;var b=e.allItems[a].pageIx,h=e.currentPage;"undefined"!==
typeof b&&b+1!==h&&e.scroll(1+b-h);this.setFocusToElement(c[a].legendItem,c[a].a11yProxyElement);d(c[a].legendGroup.element,"mouseover");return!0}return!1};u(k,"afterColorizeItem",function(a){var c=a.item;this.chart.options.accessibility.enabled&&c&&c.a11yProxyElement&&c.a11yProxyElement.setAttribute("aria-pressed",a.visible?"true":"false")});b=function(){};b.prototype=new p;r(b.prototype,{init:function(){var a=this;this.proxyElementsList=[];this.recreateProxies();this.addEvent(k,"afterScroll",function(){this.chart===
a.chart&&(a.updateProxiesPositions(),a.updateLegendItemProxyVisibility(),this.chart.highlightLegendItem(a.highlightedLegendItemIx))});this.addEvent(k,"afterPositionItem",function(c){this.chart===a.chart&&this.chart.renderer&&a.updateProxyPositionForItem(c.item)})},updateLegendItemProxyVisibility:function(){var a=this.chart.legend,c=a.currentPage||1,d=a.clipHeight||0;(a.allItems||[]).forEach(function(e){var b=e.pageIx||0,l=e._legendItemPos?e._legendItemPos[1]:0,n=e.legendItem?Math.round(e.legendItem.getBBox().height):
0;b=l+n-a.pages[b]>d||b!==c-1;e.a11yProxyElement&&(e.a11yProxyElement.style.visibility=b?"hidden":"visible")})},onChartRender:function(){f(this.chart)?this.updateProxiesPositions():this.removeProxies()},onChartUpdate:function(){this.updateLegendTitle()},updateProxiesPositions:function(){for(var a=0,c=this.proxyElementsList;a<c.length;a++){var d=c[a];this.updateProxyButtonPosition(d.element,d.posElement)}},updateProxyPositionForItem:function(a){var c=h(this.proxyElementsList,function(c){return c.item===
a});c&&this.updateProxyButtonPosition(c.element,c.posElement)},recreateProxies:function(){this.removeProxies();f(this.chart)&&(this.addLegendProxyGroup(),this.proxyLegendItems(),this.updateLegendItemProxyVisibility())},removeProxies:function(){a(this.legendProxyGroup);this.proxyElementsList=[]},updateLegendTitle:function(){var a,d,b=this.chart,h=c(((null===(d=null===(a=b.legend)||void 0===a?void 0:a.options.title)||void 0===d?void 0:d.text)||"").replace(/<br ?\/?>/g," "));a=b.langFormat("accessibility.legend.legendLabel"+
(h?"":"NoTitle"),{chart:b,legendTitle:h});this.legendProxyGroup&&this.legendProxyGroup.setAttribute("aria-label",a)},addLegendProxyGroup:function(){this.legendProxyGroup=this.addProxyGroup({"aria-label":"_placeholder_",role:"all"===this.chart.options.accessibility.landmarkVerbosity?"region":null})},proxyLegendItems:function(){var a=this;(this.chart.legend&&this.chart.legend.allItems||[]).forEach(function(c){c.legendItem&&c.legendItem.element&&a.proxyLegendItem(c)})},proxyLegendItem:function(a){if(a.legendItem&&
a.legendGroup){var e=this.chart.langFormat("accessibility.legend.legendItem",{chart:this.chart,itemName:c(a.name)}),d=a.legendGroup.div?a.legendItem:a.legendGroup;a.a11yProxyElement=this.createProxyButton(a.legendItem,this.legendProxyGroup,{tabindex:-1,"aria-pressed":a.visible,"aria-label":e},d);this.proxyElementsList.push({item:a,element:a.a11yProxyElement,posElement:d})}},getKeyboardNavigation:function(){var a=this.keyCodes,c=this;return new q(this.chart,{keyCodeMap:[[[a.left,a.right,a.up,a.down],
function(a){return c.onKbdArrowKey(this,a)}],[[a.enter,a.space],function(){return c.onKbdClick(this)}]],validate:function(){return c.shouldHaveLegendNavigation()},init:function(a){return c.onKbdNavigationInit(a)}})},onKbdArrowKey:function(a,c){var e=this.keyCodes,d=a.response,b=this.chart,l=b.options.accessibility,h=b.legend.allItems.length;c=c===e.left||c===e.up?-1:1;return b.highlightLegendItem(this.highlightedLegendItemIx+c)?(this.highlightedLegendItemIx+=c,d.success):1<h&&l.keyboardNavigation.wrapAround?
(a.init(c),d.success):d[0<c?"next":"prev"]},onKbdClick:function(a){var c=this.chart.legend.allItems[this.highlightedLegendItemIx];c&&c.a11yProxyElement&&d(c.a11yProxyElement,"click");return a.response.success},shouldHaveLegendNavigation:function(){var a=this.chart,c=a.colorAxis&&a.colorAxis.length,d=(a.options.legend||{}).accessibility||{};return!!(a.legend&&a.legend.allItems&&a.legend.display&&!c&&d.enabled&&d.keyboardNavigation&&d.keyboardNavigation.enabled)},onKbdNavigationInit:function(a){var c=
this.chart,d=c.legend.allItems.length-1;a=0<a?0:d;c.highlightLegendItem(a);this.highlightedLegendItemIx=a}});return b});t(b,"Accessibility/Components/MenuComponent.js",[b["Core/Globals.js"],b["Core/Utilities.js"],b["Accessibility/AccessibilityComponent.js"],b["Accessibility/KeyboardNavigationHandler.js"],b["Accessibility/Utils/ChartUtilities.js"],b["Accessibility/Utils/HTMLUtilities.js"]],function(b,k,m,p,q,g){function(){}