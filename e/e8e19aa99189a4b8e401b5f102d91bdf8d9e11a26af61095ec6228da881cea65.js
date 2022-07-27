!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&module.exports?module.exports=b():a.adblockDetect=b()}(this,function(){function a(e,f){f=d(a.defaults,f||{});var g=b(f.testNodeClasses,f.testNodeStyle),h=0,i=!1,j=setInterval(function(){h++,i=c(g),(i||h===f.testRuns)&&(clearInterval(j),g.parentNode&&g.parentNode.removeChild(g),e(i))},f.testInterval)}function b(a,b){var c=window.document,d=c.createElement("div");return d.innerHTML="&nbsp;",d.setAttribute("class",a),d.setAttribute("style",b),c.body.appendChild(d),d}function c(a){return 0===a.offsetHeight||!document.body.contains(a)||"none"===a.style.display||"hidden"===a.style.visibility}function d(a,b){var c={};for(var d in a)c[d]=a[d],b.hasOwnProperty(d)&&(c[d]=b[d]);return c}return a.defaults={testNodeClasses:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ads ad doubleclick ad-placement carbon-ads",testNodeStyle:"height: 10px !important; font-size: 20px; color: transparent; position: absolute; bottom: 0; left: -10000px;",testInterval:51,testRuns:4},a});
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)
o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)
o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}
o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")
break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")
c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))
return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))
return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))
return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))
return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))
return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))
return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")
return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function($){var hasOwnProperty=Object.prototype.hasOwnProperty;if(!$.fn.detach){$.fn.detach=function(){return this.each(function(){if(this.parentNode){this.parentNode.removeChild(this)}})}}
function Canvas(cls,container){var element=container.children("."+cls)[0];if(element==null){element=document.createElement("canvas");element.className=cls;$(element).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(container);if(!element.getContext){if(window.G_vmlCanvasManager){element=window.G_vmlCanvasManager.initElement(element)}else{throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")}}}
this.element=element;var context=this.context=element.getContext("2d");var devicePixelRatio=window.devicePixelRatio||1,backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;this.pixelRatio=devicePixelRatio/backingStoreRatio;this.resize(container.width(),container.height());this.textContainer=null;this.text={};this._textCache={}}
Canvas.prototype.resize=function(width,height){if(width<=0||height<=0){throw new Error("Invalid dimensions for plot, width = "+width+", height = "+height)}
var element=this.element,context=this.context,pixelRatio=this.pixelRatio;if(this.width!=width){element.width=width*pixelRatio;element.style.width=width+"px";this.width=width}
if(this.height!=height){element.height=height*pixelRatio;element.style.height=height+"px";this.height=height}
context.restore();context.save();context.scale(pixelRatio,pixelRatio)};Canvas.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)};Canvas.prototype.render=function(){var cache=this._textCache;for(var layerKey in cache){if(hasOwnProperty.call(cache,layerKey)){var layer=this.getTextLayer(layerKey),layerCache=cache[layerKey];layer.hide();for(var styleKey in layerCache){if(hasOwnProperty.call(layerCache,styleKey)){var styleCache=layerCache[styleKey];for(var key in styleCache){if(hasOwnProperty.call(styleCache,key)){var positions=styleCache[key].positions;for(var i=0,position;position=positions[i];i++){if(position.active){if(!position.rendered){layer.append(position.element);position.rendered=true}}else{positions.splice(i--,1);if(position.rendered){position.element.detach()}}}
if(positions.length==0){delete styleCache[key]}}}}}
layer.show()}}};Canvas.prototype.getTextLayer=function(classes){var layer=this.text[classes];if(layer==null){if(this.textContainer==null){this.textContainer=$("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)}
layer=this.text[classes]=$("<div></div>").addClass(classes).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)}
return layer};Canvas.prototype.getTextInfo=function(layer,text,font,angle,width){var textStyle,layerCache,styleCache,info;text=""+text;if(typeof font==="object"){textStyle=font.style+" "+font.variant+" "+font.weight+" "+font.size+"px/"+font.lineHeight+"px "+font.family}else{textStyle=font}
layerCache=this._textCache[layer];if(layerCache==null){layerCache=this._textCache[layer]={}}
styleCache=layerCache[textStyle];if(styleCache==null){styleCache=layerCache[textStyle]={}}
info=styleCache[text];if(info==null){var element=$("<div></div>").html(text).css({position:"absolute","max-width":width,top:-9999}).appendTo(this.getTextLayer(layer));if(typeof font==="object"){element.css({font:textStyle,color:font.color})}else if(typeof font==="string"){element.addClass(font)}
info=styleCache[text]={width:element.outerWidth(true),height:element.outerHeight(true),element:element,positions:[]};element.detach()}
return info};Canvas.prototype.addText=function(layer,x,y,text,font,angle,width,halign,valign){var info=this.getTextInfo(layer,text,font,angle,width),positions=info.positions;if(halign=="center"){x-=info.width/2}else if(halign=="right"){x-=info.width}
if(valign=="middle"){y-=info.height/2}else if(valign=="bottom"){y-=info.height}
for(var i=0,position;position=positions[i];i++){if(position.x==x&&position.y==y){position.active=true;return}}
position={active:true,rendered:false,element:positions.length?info.element.clone():info.element,x:x,y:y};positions.push(position);position.element.css({top:Math.round(y),left:Math.round(x),"text-align":halign})};Canvas.prototype.removeText=function(layer,x,y,text,font,angle){if(text==null){var layerCache=this._textCache[layer];if(layerCache!=null){for(var styleKey in layerCache){if(hasOwnProperty.call(layerCache,styleKey)){var styleCache=layerCache[styleKey];for(var key in styleCache){if(hasOwnProperty.call(styleCache,key)){var positions=styleCache[key].positions;for(var i=0,position;position=positions[i];i++){position.active=false}}}}}}}else{var positions=this.getTextInfo(layer,text,font,angle).positions;for(var i=0,position;position=positions[i];i++){if(position.x==x&&position.y==y){position.active=false}}}};function Plot(placeholder,data_,options_,plugins){var series=[],options={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false,zero:true},shadowSize:3,highlightColor:null},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},surface=null,overlay=null,eventHolder=null,ctx=null,octx=null,xaxes=[],yaxes=[],plotOffset={left:0,right:0,top:0,bottom:0},plotWidth=0,plotHeight=0,hooks={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],setupGrid:[],drawOverlay:[],shutdown:[]},plot=this;plot.setData=setData;plot.setupGrid=setupGrid;plot.findNearbyItem=findNearbyItem;plot.draw=draw;plot.getPlaceholder=function(){return placeholder};plot.getCanvas=function(){return surface.element};plot.getPlotOffset=function(){return plotOffset};plot.width=function(){return plotWidth};plot.height=function(){return plotHeight};plot.offset=function(){var o=eventHolder.offset();o.left+=plotOffset.left;o.top+=plotOffset.top;return o};plot.getData=function(){return series};plot.getAxes=function(){var res={},i;$.each(xaxes.concat(yaxes),function(_,axis){if(axis)
res[axis.direction+(axis.n!=1?axis.n:"")+"axis"]=axis});return res};plot.getXAxes=function(){return xaxes};plot.getYAxes=function(){return yaxes};plot.c2p=canvasToAxisCoords;plot.p2c=axisToCanvasCoords;plot.getOptions=function(){return options};plot.highlight=highlight;plot.unhighlight=unhighlight;plot.triggerRedrawOverlay=triggerRedrawOverlay;plot.pointOffset=function(point){return{left:parseInt(xaxes[axisNumber(point,"x")-1].p2c(+point.x)+plotOffset.left,10),top:parseInt(yaxes[axisNumber(point,"y")-1].p2c(+point.y)+plotOffset.top,10)}};plot.shutdown=shutdown;plot.destroy=function(){shutdown();placeholder.removeData("plot").empty();series=[];options=null;surface=null;overlay=null;eventHolder=null;ctx=null;octx=null;xaxes=[];yaxes=[];hooks=null;highlights=[];plot=null};plot.resize=function(){var width=placeholder.width(),height=placeholder.height();surface.resize(width,height);overlay.resize(width,height)};plot.hooks=hooks;initPlugins(plot);parseOptions(options_);setupCanvases();setData(data_);setupGrid();draw();bindEvents();function executeHooks(hook,args){args=[plot].concat(args);for(var i=0;i<hook.length;++i)
hook[i].apply(this,args)}
function initPlugins(){var classes={Canvas:Canvas};for(var i=0;i<plugins.length;++i){var p=plugins[i];p.init(plot,classes);if(p.options)
$.extend(true,options,p.options)}}
function parseOptions(opts){$.extend(true,options,opts);if(opts&&opts.colors){options.colors=opts.colors}
if(options.xaxis.color==null)
options.xaxis.color=$.color.parse(options.grid.color).scale("a",.22).toString();if(options.yaxis.color==null)
options.yaxis.color=$.color.parse(options.grid.color).scale("a",.22).toString();if(options.xaxis.tickColor==null)
options.xaxis.tickColor=options.grid.tickColor||options.xaxis.color;if(options.yaxis.tickColor==null)
options.yaxis.tickColor=options.grid.tickColor||options.yaxis.color;if(options.grid.borderColor==null)
options.grid.borderColor=options.grid.color;if(options.grid.tickColor==null)
options.grid.tickColor=$.color.parse(options.grid.color).scale("a",.22).toString();var i,axisOptions,axisCount,fontSize=placeholder.css("font-size"),fontSizeDefault=fontSize?+fontSize.replace("px",""):13,fontDefaults={style:placeholder.css("font-style"),size:Math.round(.8*fontSizeDefault),variant:placeholder.css("font-variant"),weight:placeholder.css("font-weight"),family:placeholder.css("font-family")};axisCount=options.xaxes.length||1;for(i=0;i<axisCount;++i){axisOptions=options.xaxes[i];if(axisOptions&&!axisOptions.tickColor){axisOptions.tickColor=axisOptions.color}
axisOptions=$.extend(true,{},options.xaxis,axisOptions);options.xaxes[i]=axisOptions;if(axisOptions.font){axisOptions.font=$.extend({},fontDefaults,axisOptions.font);if(!axisOptions.font.color){axisOptions.font.color=axisOptions.color}
if(!axisOptions.font.lineHeight){axisOptions.font.lineHeight=Math.round(axisOptions.font.size*1.15)}}}
axisCount=options.yaxes.length||1;for(i=0;i<axisCount;++i){axisOptions=options.yaxes[i];if(axisOptions&&!axisOptions.tickColor){axisOptions.tickColor=axisOptions.color}
axisOptions=$.extend(true,{},options.yaxis,axisOptions);options.yaxes[i]=axisOptions;if(axisOptions.font){axisOptions.font=$.extend({},fontDefaults,axisOptions.font);if(!axisOptions.font.color){axisOptions.font.color=axisOptions.color}
if(!axisOptions.font.lineHeight){axisOptions.font.lineHeight=Math.round(axisOptions.font.size*1.15)}}}
if(options.xaxis.noTicks&&options.xaxis.ticks==null)
options.xaxis.ticks=options.xaxis.noTicks;if(options.yaxis.noTicks&&options.yaxis.ticks==null)
options.yaxis.ticks=options.yaxis.noTicks;if(options.x2axis){options.xaxes[1]=$.extend(true,{},options.xaxis,options.x2axis);options.xaxes[1].position="top";if(options.x2axis.min==null){options.xaxes[1].min=null}
if(options.x2axis.max==null){options.xaxes[1].max=null}}
if(options.y2axis){options.yaxes[1]=$.extend(true,{},options.yaxis,options.y2axis);options.yaxes[1].position="right";if(options.y2axis.min==null){options.yaxes[1].min=null}
if(options.y2axis.max==null){options.yaxes[1].max=null}}
if(options.grid.coloredAreas)
options.grid.markings=options.grid.coloredAreas;if(options.grid.coloredAreasColor)
options.grid.markingsColor=options.grid.coloredAreasColor;if(options.lines)
$.extend(true,options.series.lines,options.lines);if(options.points)
$.extend(true,options.series.points,options.points);if(options.bars)
$.extend(true,options.series.bars,options.bars);if(options.shadowSize!=null)
options.series.shadowSize=options.shadowSize;if(options.highlightColor!=null)
options.series.highlightColor=options.highlightColor;for(i=0;i<options.xaxes.length;++i)
getOrCreateAxis(xaxes,i+1).options=options.xaxes[i];for(i=0;i<options.yaxes.length;++i)
getOrCreateAxis(yaxes,i+1).options=options.yaxes[i];for(var n in hooks)
if(options.hooks[n]&&options.hooks[n].length)
hooks[n]=hooks[n].concat(options.hooks[n]);executeHooks(hooks.processOptions,[options])}
function setData(d){series=parseData(d);fillInSeriesOptions();processData()}
function parseData(d){var res=[];for(var i=0;i<d.length;++i){var s=$.extend(true,{},options.series);if(d[i].data!=null){s.data=d[i].data;delete d[i].data;$.extend(true,s,d[i]);d[i].data=s.data}else
s.data=d[i];res.push(s)}
return res}
function axisNumber(obj,coord){var a=obj[coord+"axis"];if(typeof a=="object")
a=a.n;if(typeof a!="number")
a=1;return a}
function allAxes(){return $.grep(xaxes.concat(yaxes),function(a){return a})}
function canvasToAxisCoords(pos){var res={},i,axis;for(i=0;i<xaxes.length;++i){axis=xaxes[i];if(axis&&axis.used)
res["x"+axis.n]=axis.c2p(pos.left)}
for(i=0;i<yaxes.length;++i){axis=yaxes[i];if(axis&&axis.used)
res["y"+axis.n]=axis.c2p(pos.top)}
if(res.x1!==undefined)
res.x=res.x1;if(res.y1!==undefined)
res.y=res.y1;return res}
function axisToCanvasCoords(pos){var res={},i,axis,key;for(i=0;i<xaxes.length;++i){axis=xaxes[i];if(axis&&axis.used){key="x"+axis.n;if(pos[key]==null&&axis.n==1)
key="x";if(pos[key]!=null){res.left=axis.p2c(pos[key]);break}}}
for(i=0;i<yaxes.length;++i){axis=yaxes[i];if(axis&&axis.used){key="y"+axis.n;if(pos[key]==null&&axis.n==1)
key="y";if(pos[key]!=null){res.top=axis.p2c(pos[key]);break}}}
return res}
function getOrCreateAxis(axes,number){if(!axes[number-1])
axes[number-1]={n:number,direction:axes==xaxes?"x":"y",options:$.extend(true,{},axes==xaxes?options.xaxis:options.yaxis)};return axes[number-1]}
function fillInSeriesOptions(){var neededColors=series.length,maxIndex=-1,i;for(i=0;i<series.length;++i){var sc=series[i].color;if(sc!=null){neededColors--;if(typeof sc=="number"&&sc>maxIndex){maxIndex=sc}}}
if(neededColors<=maxIndex){neededColors=maxIndex+1}
var c,colors=[],colorPool=options.colors,colorPoolSize=colorPool.length,variation=0;for(i=0;i<neededColors;i++){c=$.color.parse(colorPool[i%colorPoolSize]||"#666");if(i%colorPoolSize==0&&i){if(variation>=0){if(variation<.5){variation=-variation-.2}else
variation=0}else
variation=-variation}
colors[i]=c.scale("rgb",1+variation)}
var colori=0,s;for(i=0;i<series.length;++i){s=series[i];if(s.color==null){s.color=colors[colori].toString();++colori}else if(typeof s.color=="number")
s.color=colors[s.color].toString();if(s.lines.show==null){var v,show=true;for(v in s)
if(s[v]&&s[v].show){show=false;break}
if(show)
s.lines.show=true}
if(s.lines.zero==null){s.lines.zero=!!s.lines.fill}
s.xaxis=getOrCreateAxis(xaxes,axisNumber(s,"x"));s.yaxis=getOrCreateAxis(yaxes,axisNumber(s,"y"))}}
function processData(){var topSentry=Number.POSITIVE_INFINITY,bottomSentry=Number.NEGATIVE_INFINITY,fakeInfinity=Number.MAX_VALUE,i,j,k,m,length,s,points,ps,x,y,axis,val,f,p,data,format;function updateAxis(axis,min,max){if(min<axis.datamin&&min!=-fakeInfinity)
axis.datamin=min;if(max>axis.datamax&&max!=fakeInfinity)
axis.datamax=max}
$.each(allAxes(),function(_,axis){axis.datamin=topSentry;axis.datamax=bottomSentry;axis.used=false});for(i=0;i<series.length;++i){s=series[i];s.datapoints={points:[]};executeHooks(hooks.processRawData,[s,s.data,s.datapoints])}
for(i=0;i<series.length;++i){s=series[i];data=s.data;format=s.datapoints.format;if(!format){format=[];format.push({x:true,number:true,required:true});format.push({y:true,number:true,required:true});if(s.bars.show||s.lines.show&&s.lines.fill){var autoscale=!!(s.bars.show&&s.bars.zero||s.lines.show&&s.lines.zero);format.push({y:true,number:true,required:false,defaultValue:0,autoscale:autoscale});if(s.bars.horizontal){delete format[format.length-1].y;format[format.length-1].x=true}}
s.datapoints.format=format}
if(s.datapoints.pointsize!=null)
continue;s.datapoints.pointsize=format.length;ps=s.datapoints.pointsize;points=s.datapoints.points;var insertSteps=s.lines.show&&s.lines.steps;s.xaxis.used=s.yaxis.used=true;for(j=k=0;j<data.length;++j,k+=ps){p=data[j];var nullify=p==null;if(!nullify){for(m=0;m<ps;++m){val=p[m];f=format[m];if(f){if(f.number&&val!=null){val=+val;if(isNaN(val))
val=null;else if(val==Infinity)
val=fakeInfinity;else if(val==-Infinity)
val=-fakeInfinity}
if(val==null){if(f.required)
nullify=true;if(f.defaultValue!=null)
val=f.defaultValue}}
points[k+m]=val}}
if(nullify){for(m=0;m<ps;++m){val=points[k+m];if(val!=null){f=format[m];if(f.autoscale!==false){if(f.x){updateAxis(s.xaxis,val,val)}
if(f.y){updateAxis(s.yaxis,val,val)}}}
points[k+m]=null}}else{if(insertSteps&&k>0&&points[k-ps]!=null&&points[k-ps]!=points[k]&&points[k-ps+1]!=points[k+1]){for(m=0;m<ps;++m)
points[k+ps+m]=points[k+m];points[k+1]=points[k-ps+1];k+=ps}}}}
for(i=0;i<series.length;++i){s=series[i];executeHooks(hooks.processDatapoints,[s,s.datapoints])}
for(i=0;i<series.length;++i){s=series[i];points=s.datapoints.points;ps=s.datapoints.pointsize;format=s.datapoints.format;var xmin=topSentry,ymin=topSentry,xmax=bottomSentry,ymax=bottomSentry;for(j=0;j<points.length;j+=ps){if(points[j]==null)
continue;for(m=0;m<ps;++m){val=points[j+m];f=format[m];if(!f||f.autoscale===false||val==fakeInfinity||val==-fakeInfinity)
continue;if(f.x){if(val<xmin)
xmin=val;if(val>xmax)
xmax=val}
if(f.y){if(val<ymin)
ymin=val;if(val>ymax)
ymax=val}}}
if(s.bars.show){var delta;switch(s.bars.align){case"left":delta=0;break;case"right":delta=-s.bars.barWidth;break;default:delta=-s.bars.barWidth/2}
if(s.bars.horizontal){ymin+=delta;ymax+=delta+s.bars.barWidth}else{xmin+=delta;xmax+=delta+s.bars.barWidth}}
updateAxis(s.xaxis,xmin,xmax);updateAxis(s.yaxis,ymin,ymax)}
$.each(allAxes(),function(_,axis){if(axis.datamin==topSentry)
axis.datamin=null;if(axis.datamax==bottomSentry)
axis.datamax=null})}
function setupCanvases(){placeholder.css("padding",0).children().filter(function(){return!$(this).hasClass("flot-overlay")&&!$(this).hasClass("flot-base")}).remove();if(placeholder.css("position")=="static")
placeholder.css("position","relative");surface=new Canvas("flot-base",placeholder);overlay=new Canvas("flot-overlay",placeholder);ctx=surface.context;octx=overlay.context;eventHolder=$(overlay.element).unbind();var existing=placeholder.data("plot");if(existing){existing.shutdown();overlay.clear()}
placeholder.data("plot",plot)}
function bindEvents(){if(options.grid.hoverable){eventHolder.bind("mousemove",onMouseMove);eventHolder.bind("mouseleave",onMouseLeave)}
if(options.grid.clickable)
eventHolder.click(onClick);executeHooks(hooks.bindEvents,[eventHolder])}
function shutdown(){if(redrawTimeout)
clearTimeout(redrawTimeout);eventHolder.unbind("mousemove",onMouseMove);eventHolder.unbind("mouseleave",onMouseLeave);eventHolder.unbind("click",onClick);executeHooks(hooks.shutdown,[eventHolder])}
function setTransformationHelpers(axis){function identity(x){return x}
var s,m,t=axis.options.transform||identity,it=axis.options.inverseTransform;if(axis.direction=="x"){s=axis.scale=plotWidth/Math.abs(t(axis.max)-t(axis.min));m=Math.min(t(axis.max),t(axis.min))}else{s=axis.scale=plotHeight/Math.abs(t(axis.max)-t(axis.min));s=-s;m=Math.max(t(axis.max),t(axis.min))}
if(t==identity)
axis.p2c=function(p){return(p-m)*s};else
axis.p2c=function(p){return(t(p)-m)*s};if(!it)
axis.c2p=function(c){return m+c/s};else
axis.c2p=function(c){return it(m+c/s)}}
function measureTickLabels(axis){var opts=axis.options,ticks=axis.ticks||[],labelWidth=opts.labelWidth||0,labelHeight=opts.labelHeight||0,maxWidth=labelWidth||(axis.direction=="x"?Math.floor(surface.width/(ticks.length||1)):null),legacyStyles=axis.direction+"Axis "+axis.direction+axis.n+"Axis",layer="flot-"+axis.direction+"-axis flot-"+axis.direction+axis.n+"-axis "+legacyStyles,font=opts.font||"flot-tick-label tickLabel";for(var i=0;i<ticks.length;++i){var t=ticks[i];if(!t.label)
continue;var info=surface.getTextInfo(layer,t.label,font,null,maxWidth);labelWidth=Math.max(labelWidth,info.width);labelHeight=Math.max(labelHeight,info.height)}
axis.labelWidth=opts.labelWidth||labelWidth;axis.labelHeight=opts.labelHeight||labelHeight}
function allocateAxisBoxFirstPhase(axis){var lw=axis.labelWidth,lh=axis.labelHeight,pos=axis.options.position,isXAxis=axis.direction==="x",tickLength=axis.options.tickLength,axisMargin=options.grid.axisMargin,padding=options.grid.labelMargin,innermost=true,outermost=true,first=true,found=false;$.each(isXAxis?xaxes:yaxes,function(i,a){if(a&&(a.show||a.reserveSpace)){if(a===axis){found=true}else if(a.options.position===pos){if(found){outermost=false}else{innermost=false}}
if(!found){first=false}}});if(outermost){axisMargin=0}
if(tickLength==null){tickLength=first?"full":5}
if(!isNaN(+tickLength))
padding+=+tickLength;if(isXAxis){lh+=padding;if(pos=="bottom"){plotOffset.bottom+=lh+axisMargin;axis.box={top:surface.height-plotOffset.bottom,height:lh}}else{axis.box={top:plotOffset.top+axisMargin,height:lh};plotOffset.top+=lh+axisMargin}}else{lw+=padding;if(pos=="left"){axis.box={left:plotOffset.left+axisMargin,width:lw};plotOffset.left+=lw+axisMargin}else{plotOffset.right+=lw+axisMargin;axis.box={left:surface.width-plotOffset.right,width:lw}}}
axis.position=pos;axis.tickLength=tickLength;axis.box.padding=padding;axis.innermost=innermost}
function allocateAxisBoxSecondPhase(axis){if(axis.direction=="x"){axis.box.left=plotOffset.left-axis.labelWidth/2;axis.box.width=surface.width-plotOffset.left-plotOffset.right+axis.labelWidth}else{axis.box.top=plotOffset.top-axis.labelHeight/2;axis.box.height=surface.height-plotOffset.bottom-plotOffset.top+axis.labelHeight}}
function adjustLayoutForThingsStickingOut(){var minMargin=options.grid.minBorderMargin,axis,i;if(minMargin==null){minMargin=0;for(i=0;i<series.length;++i)
minMargin=Math.max(minMargin,2*(series[i].points.radius+series[i].points.lineWidth/2))}
var margins={left:minMargin,right:minMargin,top:minMargin,bottom:minMargin};$.each(allAxes(),function(_,axis){if(axis.reserveSpace&&axis.ticks&&axis.ticks.length){if(axis.direction==="x"){margins.left=Math.max(margins.left,axis.labelWidth/2);margins.right=Math.max(margins.right,axis.labelWidth/2)}else{margins.bottom=Math.max(margins.bottom,axis.labelHeight/2);margins.top=Math.max(margins.top,axis.labelHeight/2)}}});plotOffset.left=Math.ceil(Math.max(margins.left,plotOffset.left));plotOffset.right=Math.ceil(Math.max(margins.right,plotOffset.right));plotOffset.top=Math.ceil(Math.max(margins.top,plotOffset.top));plotOffset.bottom=Math.ceil(Math.max(margins.bottom,plotOffset.bottom))}
function setupGrid(){var i,axes=allAxes(),showGrid=options.grid.show;for(var a in plotOffset){var margin=options.grid.margin||0;plotOffset[a]=typeof margin=="number"?margin:margin[a]||0}
executeHooks(hooks.processOffset,[plotOffset]);for(var a in plotOffset){if(typeof options.grid.borderWidth=="object"){plotOffset[a]+=showGrid?options.grid.borderWidth[a]:0}else{plotOffset[a]+=showGrid?options.grid.borderWidth:0}}
$.each(axes,function(_,axis){var axisOpts=axis.options;axis.show=axisOpts.show==null?axis.used:axisOpts.show;axis.reserveSpace=axisOpts.reserveSpace==null?axis.show:axisOpts.reserveSpace;setRange(axis)});if(showGrid){var allocatedAxes=$.grep(axes,function(axis){return axis.show||axis.reserveSpace});$.each(allocatedAxes,function(_,axis){setupTickGeneration(axis);setTicks(axis);snapRangeToTicks(axis,axis.ticks);measureTickLabels(axis)});for(i=allocatedAxes.length-1;i>=0;--i)
allocateAxisBoxFirstPhase(allocatedAxes[i]);adjustLayoutForThingsStickingOut();$.each(allocatedAxes,function(_,axis){allocateAxisBoxSecondPhase(axis)})}
plotWidth=surface.width-plotOffset.left-plotOffset.right;plotHeight=surface.height-plotOffset.bottom-plotOffset.top;$.each(axes,function(_,axis){setTransformationHelpers(axis)});if(showGrid){drawAxisLabels()}
insertLegend()
executeHooks(hooks.setupGrid,[]);}
function setRange(axis){var opts=axis.options,min=+(opts.min!=null?opts.min:axis.datamin),max=+(opts.max!=null?opts.max:axis.datamax),delta=max-min;if(delta==0){var widen=max==0?1:.01;if(opts.min==null)
min-=widen;if(opts.max==null||opts.min!=null)
max+=widen}else{var margin=opts.autoscaleMargin;if(margin!=null){if(opts.min==null){min-=delta*margin;if(min<0&&axis.datamin!=null&&axis.datamin>=0)
min=0}
if(opts.max==null){max+=delta*margin;if(max>0&&axis.datamax!=null&&axis.datamax<=0)
max=0}}}
axis.min=min;axis.max=max}
function setupTickGeneration(axis){var opts=axis.options;var noTicks;if(typeof opts.ticks=="number"&&opts.ticks>0)
noTicks=opts.ticks;else
noTicks=.3*Math.sqrt(axis.direction=="x"?surface.width:surface.height);var delta=(axis.max-axis.min)/noTicks,dec=-Math.floor(Math.log(delta)/Math.LN10),maxDec=opts.tickDecimals;if(maxDec!=null&&dec>maxDec){dec=maxDec}
var magn=Math.pow(10,-dec),norm=delta/magn,size;if(norm<1.5){size=1}else if(norm<3){size=2;if(norm>2.25&&(maxDec==null||dec+1<=maxDec)){size=2.5;++dec}}else if(norm<7.5){size=5}else{size=10}
size*=magn;if(opts.minTickSize!=null&&size<opts.minTickSize){size=opts.minTickSize}
axis.delta=delta;axis.tickDecimals=Math.max(0,maxDec!=null?maxDec:dec);axis.tickSize=opts.tickSize||size;if(opts.mode=="time"&&!axis.tickGenerator){throw new Error("Time mode requires the flot.time plugin.")}
if(!axis.tickGenerator){axis.tickGenerator=function(axis){var ticks=[],start=floorInBase(axis.min,axis.tickSize),i=0,v=Number.NaN,prev;do{prev=v;v=start+i*axis.tickSize;ticks.push(v);++i}while(v<axis.max&&v!=prev);return ticks};axis.tickFormatter=function(value,axis){var factor=axis.tickDecimals?Math.pow(10,axis.tickDecimals):1;var formatted=""+Math.round(value*factor)/factor;if(axis.tickDecimals!=null){var decimal=formatted.indexOf(".");var precision=decimal==-1?0:formatted.length-decimal-1;if(precision<axis.tickDecimals){return(precision?formatted:formatted+".")+(""+factor).substr(1,axis.tickDecimals-precision)}}
return formatted}}
if($.isFunction(opts.tickFormatter))
axis.tickFormatter=function(v,axis){return""+opts.tickFormatter(v,axis)};if(opts.alignTicksWithAxis!=null){var otherAxis=(axis.direction=="x"?xaxes:yaxes)[opts.alignTicksWithAxis-1];if(otherAxis&&otherAxis.used&&otherAxis!=axis){var niceTicks=axis.tickGenerator(axis);if(niceTicks.length>0){if(opts.min==null)
axis.min=Math.min(axis.min,niceTicks[0]);if(opts.max==null&&niceTicks.length>1)
axis.max=Math.max(axis.max,niceTicks[niceTicks.length-1])}
axis.tickGenerator=function(axis){var ticks=[],v,i;for(i=0;i<otherAxis.ticks.length;++i){v=(otherAxis.ticks[i].v-otherAxis.min)/(otherAxis.max-otherAxis.min);v=axis.min+v*(axis.max-axis.min);ticks.push(v)}
return ticks};if(!axis.mode&&opts.tickDecimals==null){var extraDec=Math.max(0,-Math.floor(Math.log(axis.delta)/Math.LN10)+1),ts=axis.tickGenerator(axis);if(!(ts.length>1&&/\..*0$/.test((ts[1]-ts[0]).toFixed(extraDec))))
axis.tickDecimals=extraDec}}}}
function setTicks(axis){var oticks=axis.options.ticks,ticks=[];if(oticks==null||typeof oticks=="number"&&oticks>0)
ticks=axis.tickGenerator(axis);else if(oticks){if($.isFunction(oticks))
ticks=oticks(axis);else
ticks=oticks}
var i,v;axis.ticks=[];for(i=0;i<ticks.length;++i){var label=null;var t=ticks[i];if(typeof t=="object"){v=+t[0];if(t.length>1)
label=t[1]}else
v=+t;if(label==null)
label=axis.tickFormatter(v,axis);if(!isNaN(v))
axis.ticks.push({v:v,label:label})}}
function snapRangeToTicks(axis,ticks){if(axis.options.autoscaleMargin&&ticks.length>0){if(axis.options.min==null)
axis.min=Math.min(axis.min,ticks[0].v);if(axis.options.max==null&&ticks.length>1)
axis.max=Math.max(axis.max,ticks[ticks.length-1].v)}}
function draw(){surface.clear();executeHooks(hooks.drawBackground,[ctx]);var grid=options.grid;if(grid.show&&grid.backgroundColor)
drawBackground();if(grid.show&&!grid.aboveData){drawGrid()}
for(var i=0;i<series.length;++i){executeHooks(hooks.drawSeries,[ctx,series[i]]);drawSeries(series[i])}
executeHooks(hooks.draw,[ctx]);if(grid.show&&grid.aboveData){drawGrid()}
surface.render();triggerRedrawOverlay()}
function extractRange(ranges,coord){var axis,from,to,key,axes=allAxes();for(var i=0;i<axes.length;++i){axis=axes[i];if(axis.direction==coord){key=coord+axis.n+"axis";if(!ranges[key]&&axis.n==1)
key=coord+"axis";if(ranges[key]){from=ranges[key].from;to=ranges[key].to;break}}}
if(!ranges[key]){axis=coord=="x"?xaxes[0]:yaxes[0];from=ranges[coord+"1"];to=ranges[coord+"2"]}
if(from!=null&&to!=null&&from>to){var tmp=from;from=to;to=tmp}
return{from:from,to:to,axis:axis}}
function drawBackground(){ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.fillStyle=getColorOrGradient(options.grid.backgroundColor,plotHeight,0,"rgba(255, 255, 255, 0)");ctx.fillRect(0,0,plotWidth,plotHeight);ctx.restore()}
function drawGrid(){var i,axes,bw,bc;ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var markings=options.grid.markings;if(markings){if($.isFunction(markings)){axes=plot.getAxes();axes.xmin=axes.xaxis.min;axes.xmax=axes.xaxis.max;axes.ymin=axes.yaxis.min;axes.ymax=axes.yaxis.max;markings=markings(axes)}
for(i=0;i<markings.length;++i){var m=markings[i],xrange=extractRange(m,"x"),yrange=extractRange(m,"y");if(xrange.from==null)
xrange.from=xrange.axis.min;if(xrange.to==null)
xrange.to=xrange.axis.max;if(yrange.from==null)
yrange.from=yrange.axis.min;if(yrange.to==null)
yrange.to=yrange.axis.max;if(xrange.to<xrange.axis.min||xrange.from>xrange.axis.max||yrange.to<yrange.axis.min||yrange.from>yrange.axis.max)
continue;xrange.from=Math.max(xrange.from,xrange.axis.min);xrange.to=Math.min(xrange.to,xrange.axis.max);yrange.from=Math.max(yrange.from,yrange.axis.min);yrange.to=Math.min(yrange.to,yrange.axis.max);var xequal=xrange.from===xrange.to,yequal=yrange.from===yrange.to;if(xequal&&yequal){continue}
xrange.from=Math.floor(xrange.axis.p2c(xrange.from));xrange.to=Math.floor(xrange.axis.p2c(xrange.to));yrange.from=Math.floor(yrange.axis.p2c(yrange.from));yrange.to=Math.floor(yrange.axis.p2c(yrange.to));if(xequal||yequal){var lineWidth=m.lineWidth||options.grid.markingsLineWidth,subPixel=lineWidth%2?.5:0;ctx.beginPath();ctx.strokeStyle=m.color||options.grid.markingsColor;ctx.lineWidth=lineWidth;if(xequal){ctx.moveTo(xrange.to+subPixel,yrange.from);ctx.lineTo(xrange.to+subPixel,yrange.to)}else{ctx.moveTo(xrange.from,yrange.to+subPixel);ctx.lineTo(xrange.to,yrange.to+subPixel)}
ctx.stroke()}else{ctx.fillStyle=m.color||options.grid.markingsColor;ctx.fillRect(xrange.from,yrange.to,xrange.to-xrange.from,yrange.from-yrange.to)}}}
axes=allAxes();bw=options.grid.borderWidth;for(var j=0;j<axes.length;++j){var axis=axes[j],box=axis.box,t=axis.tickLength,x,y,xoff,yoff;if(!axis.show||axis.ticks.length==0)
continue;ctx.lineWidth=1;if(axis.direction=="x"){x=0;if(t=="full")
y=axis.position=="top"?0:plotHeight;else
y=box.top-plotOffset.top+(axis.position=="top"?box.height:0)}else{y=0;if(t=="full")
x=axis.position=="left"?0:plotWidth;else
x=box.left-plotOffset.left+(axis.position=="left"?box.width:0)}
if(!axis.innermost){ctx.strokeStyle=axis.options.color;ctx.beginPath();xoff=yoff=0;if(axis.direction=="x")
xoff=plotWidth+1;else
yoff=plotHeight+1;if(ctx.lineWidth==1){if(axis.direction=="x"){y=Math.floor(y)+.5}else{x=Math.floor(x)+.5}}
ctx.moveTo(x,y);ctx.lineTo(x+xoff,y+yoff);ctx.stroke()}
ctx.strokeStyle=axis.options.tickColor;ctx.beginPath();for(i=0;i<axis.ticks.length;++i){var v=axis.ticks[i].v;xoff=yoff=0;if(isNaN(v)||v<axis.min||v>axis.max||t=="full"&&(typeof bw=="object"&&bw[axis.position]>0||bw>0)&&(v==axis.min||v==axis.max))
continue;if(axis.direction=="x"){x=axis.p2c(v);yoff=t=="full"?-plotHeight:t;if(axis.position=="top")
yoff=-yoff}else{y=axis.p2c(v);xoff=t=="full"?-plotWidth:t;if(axis.position=="left")
xoff=-xoff}
if(ctx.lineWidth==1){if(axis.direction=="x")
x=Math.floor(x)+.5;else
y=Math.floor(y)+.5}
ctx.moveTo(x,y);ctx.lineTo(x+xoff,y+yoff)}
ctx.stroke()}
if(bw){bc=options.grid.borderColor;if(typeof bw=="object"||typeof bc=="object"){if(typeof bw!=="object"){bw={top:bw,right:bw,bottom:bw,left:bw}}
if(typeof bc!=="object"){bc={top:bc,right:bc,bottom:bc,left:bc}}
if(bw.top>0){ctx.strokeStyle=bc.top;ctx.lineWidth=bw.top;ctx.beginPath();ctx.moveTo(0-bw.left,0-bw.top/2);ctx.lineTo(plotWidth,0-bw.top/2);ctx.stroke()}
if(bw.right>0){ctx.strokeStyle=bc.right;ctx.lineWidth=bw.right;ctx.beginPath();ctx.moveTo(plotWidth+bw.right/2,0-bw.top);ctx.lineTo(plotWidth+bw.right/2,plotHeight);ctx.stroke()}
if(bw.bottom>0){ctx.strokeStyle=bc.bottom;ctx.lineWidth=bw.bottom;ctx.beginPath();ctx.moveTo(plotWidth+bw.right,plotHeight+bw.bottom/2);ctx.lineTo(0,plotHeight+bw.bottom/2);ctx.stroke()}
if(bw.left>0){ctx.strokeStyle=bc.left;ctx.lineWidth=bw.left;ctx.beginPath();ctx.moveTo(0-bw.left/2,plotHeight+bw.bottom);ctx.lineTo(0-bw.left/2,0);ctx.stroke()}}else{ctx.lineWidth=bw;ctx.strokeStyle=options.grid.borderColor;ctx.strokeRect(-bw/2,-bw/2,plotWidth+bw,plotHeight+bw)}}
ctx.restore()}
function drawAxisLabels(){$.each(allAxes(),function(_,axis){var box=axis.box,legacyStyles=axis.direction+"Axis "+axis.direction+axis.n+"Axis",layer="flot-"+axis.direction+"-axis flot-"+axis.direction+axis.n+"-axis "+legacyStyles,font=axis.options.font||"flot-tick-label tickLabel",tick,x,y,halign,valign;surface.removeText(layer);if(!axis.show||axis.ticks.length==0)
return;for(var i=0;i<axis.ticks.length;++i){tick=axis.ticks[i];if(!tick.label||tick.v<axis.min||tick.v>axis.max)
continue;if(axis.direction=="x"){halign="center";x=plotOffset.left+axis.p2c(tick.v);if(axis.position=="bottom"){y=box.top+box.padding}else{y=box.top+box.height-box.padding;valign="bottom"}}else{valign="middle";y=plotOffset.top+axis.p2c(tick.v);if(axis.position=="left"){x=box.left+box.width-box.padding;halign="right"}else{x=box.left+box.padding}}
surface.addText(layer,x,y,tick.label,font,null,null,halign,valign)}})}
function drawSeries(series){if(series.lines.show)
drawSeriesLines(series);if(series.bars.show)
drawSeriesBars(series);if(series.points.show)
drawSeriesPoints(series)}
function drawSeriesLines(series){function plotLine(datapoints,xoffset,yoffset,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize,prevx=null,prevy=null;ctx.beginPath();for(var i=ps;i<points.length;i+=ps){var x1=points[i-ps],y1=points[i-ps+1],x2=points[i],y2=points[i+1];if(x1==null||x2==null)
continue;if(y1<=y2&&y1<axisy.min){if(y2<axisy.min)
continue;x1=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.min}else if(y2<=y1&&y2<axisy.min){if(y1<axisy.min)
continue;x2=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.min}
if(y1>=y2&&y1>axisy.max){if(y2>axisy.max)
continue;x1=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.max}else if(y2>=y1&&y2>axisy.max){if(y1>axisy.max)
continue;x2=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.max}
if(x1<=x2&&x1<axisx.min){if(x2<axisx.min)
continue;y1=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.min}else if(x2<=x1&&x2<axisx.min){if(x1<axisx.min)
continue;y2=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.min}
if(x1>=x2&&x1>axisx.max){if(x2>axisx.max)
continue;y1=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.max}else if(x2>=x1&&x2>axisx.max){if(x1>axisx.max)
continue;y2=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.max}
if(x1!=prevx||y1!=prevy)
ctx.moveTo(axisx.p2c(x1)+xoffset,axisy.p2c(y1)+yoffset);prevx=x2;prevy=y2;ctx.lineTo(axisx.p2c(x2)+xoffset,axisy.p2c(y2)+yoffset)}
ctx.stroke()}
function plotLineArea(datapoints,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize,bottom=Math.min(Math.max(0,axisy.min),axisy.max),i=0,top,areaOpen=false,ypos=1,segmentStart=0,segmentEnd=0;while(true){if(ps>0&&i>points.length+ps)
break;i+=ps;var x1=points[i-ps],y1=points[i-ps+ypos],x2=points[i],y2=points[i+ypos];if(areaOpen){if(ps>0&&x1!=null&&x2==null){segmentEnd=i;ps=-ps;ypos=2;continue}
if(ps<0&&i==segmentStart+ps){ctx.fill();areaOpen=false;ps=-ps;ypos=1;i=segmentStart=segmentEnd+ps;continue}}
if(x1==null||x2==null)
continue;if(x1<=x2&&x1<axisx.min){if(x2<axisx.min)
continue;y1=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.min}else if(x2<=x1&&x2<axisx.min){if(x1<axisx.min)
continue;y2=(axisx.min-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.min}
if(x1>=x2&&x1>axisx.max){if(x2>axisx.max)
continue;y1=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x1=axisx.max}else if(x2>=x1&&x2>axisx.max){if(x1>axisx.max)
continue;y2=(axisx.max-x1)/(x2-x1)*(y2-y1)+y1;x2=axisx.max}
if(!areaOpen){ctx.beginPath();ctx.moveTo(axisx.p2c(x1),axisy.p2c(bottom));areaOpen=true}
if(y1>=axisy.max&&y2>=axisy.max){ctx.lineTo(axisx.p2c(x1),axisy.p2c(axisy.max));ctx.lineTo(axisx.p2c(x2),axisy.p2c(axisy.max));continue}else if(y1<=axisy.min&&y2<=axisy.min){ctx.lineTo(axisx.p2c(x1),axisy.p2c(axisy.min));ctx.lineTo(axisx.p2c(x2),axisy.p2c(axisy.min));continue}
var x1old=x1,x2old=x2;if(y1<=y2&&y1<axisy.min&&y2>=axisy.min){x1=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.min}else if(y2<=y1&&y2<axisy.min&&y1>=axisy.min){x2=(axisy.min-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.min}
if(y1>=y2&&y1>axisy.max&&y2<=axisy.max){x1=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y1=axisy.max}else if(y2>=y1&&y2>axisy.max&&y1<=axisy.max){x2=(axisy.max-y1)/(y2-y1)*(x2-x1)+x1;y2=axisy.max}
if(x1!=x1old){ctx.lineTo(axisx.p2c(x1old),axisy.p2c(y1))}
ctx.lineTo(axisx.p2c(x1),axisy.p2c(y1));ctx.lineTo(axisx.p2c(x2),axisy.p2c(y2));if(x2!=x2old){ctx.lineTo(axisx.p2c(x2),axisy.p2c(y2));ctx.lineTo(axisx.p2c(x2old),axisy.p2c(y2))}}}
ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.lineJoin="round";var lw=series.lines.lineWidth,sw=series.shadowSize;if(lw>0&&sw>0){ctx.lineWidth=sw;ctx.strokeStyle="rgba(0,0,0,0.1)";var angle=Math.PI/18;plotLine(series.datapoints,Math.sin(angle)*(lw/2+sw/2),Math.cos(angle)*(lw/2+sw/2),series.xaxis,series.yaxis);ctx.lineWidth=sw/2;plotLine(series.datapoints,Math.sin(angle)*(lw/2+sw/4),Math.cos(angle)*(lw/2+sw/4),series.xaxis,series.yaxis)}
ctx.lineWidth=lw;ctx.strokeStyle=series.color;var fillStyle=getFillStyle(series.lines,series.color,0,plotHeight);if(fillStyle){ctx.fillStyle=fillStyle;plotLineArea(series.datapoints,series.xaxis,series.yaxis)}
if(lw>0)
plotLine(series.datapoints,0,0,series.xaxis,series.yaxis);ctx.restore()}
function drawSeriesPoints(series){function plotPoints(datapoints,radius,fillStyle,offset,shadow,axisx,axisy,symbol){var points=datapoints.points,ps=datapoints.pointsize;for(var i=0;i<points.length;i+=ps){var x=points[i],y=points[i+1];if(x==null||x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max)
continue;ctx.beginPath();x=axisx.p2c(x);y=axisy.p2c(y)+offset;if(symbol=="circle")
ctx.arc(x,y,radius,0,shadow?Math.PI:Math.PI*2,false);else
symbol(ctx,x,y,radius,shadow);ctx.closePath();if(fillStyle){ctx.fillStyle=fillStyle;ctx.fill()}
ctx.stroke()}}
ctx.save();ctx.translate(plotOffset.left,plotOffset.top);var lw=series.points.lineWidth,sw=series.shadowSize,radius=series.points.radius,symbol=series.points.symbol;if(lw==0)
lw=1e-4;if(lw>0&&sw>0){var w=sw/2;ctx.lineWidth=w;ctx.strokeStyle="rgba(0,0,0,0.1)";plotPoints(series.datapoints,radius,null,w+w/2,true,series.xaxis,series.yaxis,symbol);ctx.strokeStyle="rgba(0,0,0,0.2)";plotPoints(series.datapoints,radius,null,w/2,true,series.xaxis,series.yaxis,symbol)}
ctx.lineWidth=lw;ctx.strokeStyle=series.color;plotPoints(series.datapoints,radius,getFillStyle(series.points,series.color),0,false,series.xaxis,series.yaxis,symbol);ctx.restore()}
function drawBar(x,y,b,barLeft,barRight,fillStyleCallback,axisx,axisy,c,horizontal,lineWidth){var left,right,bottom,top,drawLeft,drawRight,drawTop,drawBottom,tmp;if(horizontal){drawBottom=drawRight=drawTop=true;drawLeft=false;left=b;right=x;top=y+barLeft;bottom=y+barRight;if(right<left){tmp=right;right=left;left=tmp;drawLeft=true;drawRight=false}}else{drawLeft=drawRight=drawTop=true;drawBottom=false;left=x+barLeft;right=x+barRight;bottom=b;top=y;if(top<bottom){tmp=top;top=bottom;bottom=tmp;drawBottom=true;drawTop=false}}
if(right<axisx.min||left>axisx.max||top<axisy.min||bottom>axisy.max)
return;if(left<axisx.min){left=axisx.min;drawLeft=false}
if(right>axisx.max){right=axisx.max;drawRight=false}
if(bottom<axisy.min){bottom=axisy.min;drawBottom=false}
if(top>axisy.max){top=axisy.max;drawTop=false}
left=axisx.p2c(left);bottom=axisy.p2c(bottom);right=axisx.p2c(right);top=axisy.p2c(top);if(fillStyleCallback){c.fillStyle=fillStyleCallback(bottom,top);c.fillRect(left,top,right-left,bottom-top)}
if(lineWidth>0&&(drawLeft||drawRight||drawTop||drawBottom)){c.beginPath();c.moveTo(left,bottom);if(drawLeft)
c.lineTo(left,top);else
c.moveTo(left,top);if(drawTop)
c.lineTo(right,top);else
c.moveTo(right,top);if(drawRight)
c.lineTo(right,bottom);else
c.moveTo(right,bottom);if(drawBottom)
c.lineTo(left,bottom);else
c.moveTo(left,bottom);c.stroke()}}
function drawSeriesBars(series){function plotBars(datapoints,barLeft,barRight,fillStyleCallback,axisx,axisy){var points=datapoints.points,ps=datapoints.pointsize;for(var i=0;i<points.length;i+=ps){if(points[i]==null)
continue;drawBar(points[i],points[i+1],points[i+2],barLeft,barRight,fillStyleCallback,axisx,axisy,ctx,series.bars.horizontal,series.bars.lineWidth)}}
ctx.save();ctx.translate(plotOffset.left,plotOffset.top);ctx.lineWidth=series.bars.lineWidth;ctx.strokeStyle=series.color;var barLeft;switch(series.bars.align){case"left":barLeft=0;break;case"right":barLeft=-series.bars.barWidth;break;default:barLeft=-series.bars.barWidth/2}
var fillStyleCallback=series.bars.fill?function(bottom,top){return getFillStyle(series.bars,series.color,bottom,top)}:null;plotBars(series.datapoints,barLeft,barLeft+series.bars.barWidth,fillStyleCallback,series.xaxis,series.yaxis);ctx.restore()}
function getFillStyle(filloptions,seriesColor,bottom,top){var fill=filloptions.fill;if(!fill)
return null;if(filloptions.fillColor)
return getColorOrGradient(filloptions.fillColor,bottom,top,seriesColor);var c=$.color.parse(seriesColor);c.a=typeof fill=="number"?fill:.4;c.normalize();return c.toString()}
function insertLegend(){if(options.legend.container!=null){$(options.legend.container).html("")}else{placeholder.find(".legend").remove()}
if(!options.legend.show){return}
var fragments=[],entries=[],rowStarted=false,lf=options.legend.labelFormatter,s,label;for(var i=0;i<series.length;++i){s=series[i];if(s.label){label=lf?lf(s.label,s):s.label;if(label){entries.push({label:label,color:s.color})}}}
if(options.legend.sorted){if($.isFunction(options.legend.sorted)){entries.sort(options.legend.sorted)}else if(options.legend.sorted=="reverse"){entries.reverse()}else{var ascending=options.legend.sorted!="descending";entries.sort(function(a,b){return a.label==b.label?0:a.label<b.label!=ascending?1:-1})}}
for(var i=0;i<entries.length;++i){var entry=entries[i];if(i%options.legend.noColumns==0){if(rowStarted)
fragments.push("</tr>");fragments.push("<tr>");rowStarted=true}
fragments.push('<td class="legendColorBox"><div style="border:1px solid '+options.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+entry.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel">'+entry.label+"</td>")}
if(rowStarted)
fragments.push("</tr>");if(fragments.length==0)
return;var table='<table style="font-size:smaller;color:'+options.grid.color+'">'+fragments.join("")+"</table>";if(options.legend.container!=null)
$(options.legend.container).html(table);else{var pos="",p=options.legend.position,m=options.legend.margin;if(m[0]==null)
m=[m,m];if(p.charAt(0)=="n")
pos+="top:"+(m[1]+plotOffset.top)+"px;";else if(p.charAt(0)=="s")
pos+="bottom:"+(m[1]+plotOffset.bottom)+"px;";if(p.charAt(1)=="e")
pos+="right:"+(m[0]+plotOffset.right)+"px;";else if(p.charAt(1)=="w")
pos+="left:"+(m[0]+plotOffset.left)+"px;";var legend=$('<div class="legend">'+table.replace('style="','style="position:absolute;'+pos+";")+"</div>").appendTo(placeholder);if(options.legend.backgroundOpacity!=0){var c=options.legend.backgroundColor;if(c==null){c=options.grid.backgroundColor;if(c&&typeof c=="string")
c=$.color.parse(c);else
c=$.color.extract(legend,"background-color");c.a=1;c=c.toString()}
var div=legend.children();$('<div style="position:absolute;width:'+div.width()+"px;height:"+div.height()+"px;"+pos+"background-color:"+c+';"> </div>').prependTo(legend).css("opacity",options.legend.backgroundOpacity)}}}
var highlights=[],redrawTimeout=null;function findNearbyItem(mouseX,mouseY,seriesFilter){var maxDistance=options.grid.mouseActiveRadius,smallestDistance=maxDistance*maxDistance+1,item=null,foundPoint=false,i,j,ps;for(i=series.length-1;i>=0;--i){if(!seriesFilter(series[i]))
continue;var s=series[i],axisx=s.xaxis,axisy=s.yaxis,points=s.datapoints.points,mx=axisx.c2p(mouseX),my=axisy.c2p(mouseY),maxx=maxDistance/axisx.scale,maxy=maxDistance/axisy.scale;ps=s.datapoints.pointsize;if(axisx.options.inverseTransform)
maxx=Number.MAX_VALUE;if(axisy.options.inverseTransform)
maxy=Number.MAX_VALUE;if(s.lines.show||s.points.show){for(j=0;j<points.length;j+=ps){var x=points[j],y=points[j+1];if(x==null)
continue;if(x-mx>maxx||x-mx<-maxx||y-my>maxy||y-my<-maxy)
continue;var dx=Math.abs(axisx.p2c(x)-mouseX),dy=Math.abs(axisy.p2c(y)-mouseY),dist=dx*dx+dy*dy;if(dist<smallestDistance){smallestDistance=dist;item=[i,j/ps]}}}
if(s.bars.show&&!item){var barLeft,barRight;switch(s.bars.align){case"left":barLeft=0;break;case"right":barLeft=-s.bars.barWidth;break;default:barLeft=-s.bars.barWidth/2}
barRight=barLeft+s.bars.barWidth;for(j=0;j<points.length;j+=ps){var x=points[j],y=points[j+1],b=points[j+2];if(x==null)
continue;if(series[i].bars.horizontal?mx<=Math.max(b,x)&&mx>=Math.min(b,x)&&my>=y+barLeft&&my<=y+barRight:mx>=x+barLeft&&mx<=x+barRight&&my>=Math.min(b,y)&&my<=Math.max(b,y))
item=[i,j/ps]}}}
if(item){i=item[0];j=item[1];ps=series[i].datapoints.pointsize;return{datapoint:series[i].datapoints.points.slice(j*ps,(j+1)*ps),dataIndex:j,series:series[i],seriesIndex:i}}
return null}
function onMouseMove(e){if(options.grid.hoverable)
triggerClickHoverEvent("plothover",e,function(s){return s["hoverable"]!=false})}
function onMouseLeave(e){if(options.grid.hoverable){triggerClickHoverEvent("plotout",e,function(s){return s["hoverable"]!=false});}}
function onClick(e){triggerClickHoverEvent("plotclick",e,function(s){return s["clickable"]!=false})}
function triggerClickHoverEvent(eventname,event,seriesFilter){var offset=eventHolder.offset(),canvasX=event.pageX-offset.left-plotOffset.left,canvasY=event.pageY-offset.top-plotOffset.top,pos=canvasToAxisCoords({left:canvasX,top:canvasY});pos.pageX=event.pageX;pos.pageY=event.pageY;var item=findNearbyItem(canvasX,canvasY,seriesFilter);if(item){item.pageX=parseInt(item.series.xaxis.p2c(item.datapoint[0])+offset.left+plotOffset.left,10);item.pageY=parseInt(item.series.yaxis.p2c(item.datapoint[1])+offset.top+plotOffset.top,10)}
if(options.grid.autoHighlight){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.auto==eventname&&!(item&&h.series==item.series&&h.point[0]==item.datapoint[0]&&h.point[1]==item.datapoint[1]))
unhighlight(h.series,h.point)}
if(item)
highlight(item.series,item.datapoint,eventname)}
placeholder.trigger(eventname,[pos,item])}
function triggerRedrawOverlay(){var t=options.interaction.redrawOverlayInterval;if(t==-1){drawOverlay();return}
if(!redrawTimeout)
redrawTimeout=setTimeout(drawOverlay,t)}
function drawOverlay(){redrawTimeout=null;octx.save();overlay.clear();octx.translate(plotOffset.left,plotOffset.top);var i,hi;for(i=0;i<highlights.length;++i){hi=highlights[i];if(hi.series.bars.show)
drawBarHighlight(hi.series,hi.point);else
drawPointHighlight(hi.series,hi.point)}
octx.restore();executeHooks(hooks.drawOverlay,[octx])}
function highlight(s,point,auto){if(typeof s=="number")
s=series[s];if(typeof point=="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1))}
var i=indexOfHighlight(s,point);if(i==-1){highlights.push({series:s,point:point,auto:auto});triggerRedrawOverlay()}else if(!auto)
highlights[i].auto=false}
function unhighlight(s,point){if(s==null&&point==null){highlights=[];triggerRedrawOverlay();return}
if(typeof s=="number")
s=series[s];if(typeof point=="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1))}
var i=indexOfHighlight(s,point);if(i!=-1){highlights.splice(i,1);triggerRedrawOverlay()}}
function indexOfHighlight(s,p){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.series==s&&h.point[0]==p[0]&&h.point[1]==p[1])
return i}
return-1}
function drawPointHighlight(series,point){var x=point[0],y=point[1],axisx=series.xaxis,axisy=series.yaxis,highlightColor=typeof series.highlightColor==="string"?series.highlightColor:$.color.parse(series.color).scale("a",.5).toString();if(x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max)
return;var pointRadius=series.points.radius+series.points.lineWidth/2;octx.lineWidth=pointRadius;octx.strokeStyle=highlightColor;var radius=1.5*pointRadius;x=axisx.p2c(x);y=axisy.p2c(y);octx.beginPath();if(series.points.symbol=="circle")
octx.arc(x,y,radius,0,2*Math.PI,false);else
series.points.symbol(octx,x,y,radius,false);octx.closePath();octx.stroke()}
function drawBarHighlight(series,point){var highlightColor=typeof series.highlightColor==="string"?series.highlightColor:$.color.parse(series.color).scale("a",.5).toString(),fillStyle=highlightColor,barLeft;switch(series.bars.align){case"left":barLeft=0;break;case"right":barLeft=-series.bars.barWidth;break;default:barLeft=-series.bars.barWidth/2}
octx.lineWidth=series.bars.lineWidth;octx.strokeStyle=highlightColor;drawBar(point[0],point[1],point[2]||0,barLeft,barLeft+series.bars.barWidth,function(){return fillStyle},series.xaxis,series.yaxis,octx,series.bars.horizontal,series.bars.lineWidth)}
function getColorOrGradient(spec,bottom,top,defaultColor){if(typeof spec=="string")
return spec;else{var gradient=ctx.createLinearGradient(0,top,0,bottom);for(var i=0,l=spec.colors.length;i<l;++i){var c=spec.colors[i];if(typeof c!="string"){var co=$.color.parse(defaultColor);if(c.brightness!=null)
co=co.scale("rgb",c.brightness);if(c.opacity!=null)
co.a*=c.opacity;c=co.toString()}
gradient.addColorStop(i/(l-1),c)}
return gradient}}}
$.plot=function(placeholder,data,options){var plot=new Plot($(placeholder),data,options,$.plot.plugins);return plot};$.plot.version="0.8.3";$.plot.plugins=[];$.fn.plot=function(data,options){return this.each(function(){$.plot(this,data,options)})};function floorInBase(n,base){return base*Math.floor(n/base)}})(jQuery);
(function($){var options={xaxis:{timezone:null,timeformat:null,twelveHourClock:false,monthNames:null}};function floorInBase(n,base){return base*Math.floor(n/base)}
function formatDate(d,fmt,monthNames,dayNames){if(typeof d.strftime=="function"){return d.strftime(fmt)}
var leftPad=function(n,pad){n=""+n;pad=""+(pad==null?"0":pad);return n.length==1?pad+n:n};var r=[];var escape=false;var hours=d.getHours();var isAM=hours<12;if(monthNames==null){monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}
if(dayNames==null){dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}
var hours12;if(hours>12){hours12=hours-12}else if(hours==0){hours12=12}else{hours12=hours}
for(var i=0;i<fmt.length;++i){var c=fmt.charAt(i);if(escape){switch(c){case"a":c=""+dayNames[d.getDay()];break;case"b":c=""+monthNames[d.getMonth()];break;case"d":c=leftPad(d.getDate());break;case"e":c=leftPad(d.getDate()," ");break;case"h":case"H":c=leftPad(hours);break;case"I":c=leftPad(hours12);break;case"l":c=leftPad(hours12," ");break;case"m":c=leftPad(d.getMonth()+1);break;case"M":c=leftPad(d.getMinutes());break;case"q":c=""+(Math.floor(d.getMonth()/3)+1);break;case"S":c=leftPad(d.getSeconds());break;case"y":c=leftPad(d.getFullYear()%100);break;case"Y":c=""+d.getFullYear();break;case"p":c=isAM?""+"am":""+"pm";break;case"P":c=isAM?""+"AM":""+"PM";break;case"w":c=""+d.getDay();break}
r.push(c);escape=false}else{if(c=="%"){escape=true}else{r.push(c)}}}
return r.join("")}
function makeUtcWrapper(d){function addProxyMethod(sourceObj,sourceMethod,targetObj,targetMethod){sourceObj[sourceMethod]=function(){return targetObj[targetMethod].apply(targetObj,arguments)}}
var utc={date:d};if(d.strftime!=undefined){addProxyMethod(utc,"strftime",d,"strftime")}
addProxyMethod(utc,"getTime",d,"getTime");addProxyMethod(utc,"setTime",d,"setTime");var props=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"];for(var p=0;p<props.length;p++){addProxyMethod(utc,"get"+props[p],d,"getUTC"+props[p]);addProxyMethod(utc,"set"+props[p],d,"setUTC"+props[p])}
return utc}
function dateGenerator(ts,opts){if(opts.timezone=="browser"){return new Date(ts)}else if(!opts.timezone||opts.timezone=="utc"){return makeUtcWrapper(new Date(ts))}else if(typeof timezoneJS!="undefined"&&typeof timezoneJS.Date!="undefined"){var d=new timezoneJS.Date;d.setTimezone(opts.timezone);d.setTime(ts);return d}else{return makeUtcWrapper(new Date(ts))}}
var timeUnitSize={second:1e3,minute:60*1e3,hour:60*60*1e3,day:24*60*60*1e3,month:30*24*60*60*1e3,quarter:3*30*24*60*60*1e3,year:365.2425*24*60*60*1e3};var baseSpec=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]];var specMonths=baseSpec.concat([[3,"month"],[6,"month"],[1,"year"]]);var specQuarters=baseSpec.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);function init(plot){plot.hooks.processOptions.push(function(plot,options){$.each(plot.getAxes(),function(axisName,axis){var opts=axis.options;if(opts.mode=="time"){axis.tickGenerator=function(axis){var ticks=[];var d=dateGenerator(axis.min,opts);var minSize=0;var spec=opts.tickSize&&opts.tickSize[1]==="quarter"||opts.minTickSize&&opts.minTickSize[1]==="quarter"?specQuarters:specMonths;if(opts.minTickSize!=null){if(typeof opts.tickSize=="number"){minSize=opts.tickSize}else{minSize=opts.minTickSize[0]*timeUnitSize[opts.minTickSize[1]]}}
for(var i=0;i<spec.length-1;++i){if(axis.delta<(spec[i][0]*timeUnitSize[spec[i][1]]+spec[i+1][0]*timeUnitSize[spec[i+1][1]])/2&&spec[i][0]*timeUnitSize[spec[i][1]]>=minSize){break}}
var size=spec[i][0];var unit=spec[i][1];if(unit=="year"){if(opts.minTickSize!=null&&opts.minTickSize[1]=="year"){size=Math.floor(opts.minTickSize[0])}else{var magn=Math.pow(10,Math.floor(Math.log(axis.delta/timeUnitSize.year)/Math.LN10));var norm=axis.delta/timeUnitSize.year/magn;if(norm<1.5){size=1}else if(norm<3){size=2}else if(norm<7.5){size=5}else{size=10}
size*=magn}
if(size<1){size=1}}
axis.tickSize=opts.tickSize||[size,unit];var tickSize=axis.tickSize[0];unit=axis.tickSize[1];var step=tickSize*timeUnitSize[unit];if(unit=="second"){d.setSeconds(floorInBase(d.getSeconds(),tickSize))}else if(unit=="minute"){d.setMinutes(floorInBase(d.getMinutes(),tickSize))}else if(unit=="hour"){d.setHours(floorInBase(d.getHours(),tickSize))}else if(unit=="month"){d.setMonth(floorInBase(d.getMonth(),tickSize))}else if(unit=="quarter"){d.setMonth(3*floorInBase(d.getMonth()/3,tickSize))}else if(unit=="year"){d.setFullYear(floorInBase(d.getFullYear(),tickSize))}
d.setMilliseconds(0);if(step>=timeUnitSize.minute){d.setSeconds(0)}
if(step>=timeUnitSize.hour){d.setMinutes(0)}
if(step>=timeUnitSize.day){d.setHours(0)}
if(step>=timeUnitSize.day*4){d.setDate(1)}
if(step>=timeUnitSize.month*2){d.setMonth(floorInBase(d.getMonth(),3))}
if(step>=timeUnitSize.quarter*2){d.setMonth(floorInBase(d.getMonth(),6))}
if(step>=timeUnitSize.year){d.setMonth(0)}
var carry=0;var v=Number.NaN;var prev;do{prev=v;v=d.getTime();ticks.push(v);if(unit=="month"||unit=="quarter"){if(tickSize<1){d.setDate(1);var start=d.getTime();d.setMonth(d.getMonth()+(unit=="quarter"?3:1));var end=d.getTime();d.setTime(v+carry*timeUnitSize.hour+(end-start)*tickSize);carry=d.getHours();d.setHours(0)}else{d.setMonth(d.getMonth()+tickSize*(unit=="quarter"?3:1))}}else if(unit=="year"){d.setFullYear(d.getFullYear()+tickSize)}else{d.setTime(v+step)}}while(v<axis.max&&v!=prev);return ticks};axis.tickFormatter=function(v,axis){var d=dateGenerator(v,axis.options);if(opts.timeformat!=null){return formatDate(d,opts.timeformat,opts.monthNames,opts.dayNames)}
var useQuarters=axis.options.tickSize&&axis.options.tickSize[1]=="quarter"||axis.options.minTickSize&&axis.options.minTickSize[1]=="quarter";var t=axis.tickSize[0]*timeUnitSize[axis.tickSize[1]];var span=axis.max-axis.min;var suffix=opts.twelveHourClock?" %p":"";var hourCode=opts.twelveHourClock?"%I":"%H";var fmt;if(t<timeUnitSize.day){fmt="%b %d, %Y "+hourCode+":%M"+suffix}else if(t<timeUnitSize.month){fmt="%b %d, %Y"}else if(useQuarters&&t<timeUnitSize.quarter||!useQuarters&&t<timeUnitSize.year){fmt="%b %Y"}else if(useQuarters&&t<timeUnitSize.year){if(span<timeUnitSize.year){fmt="Q%q"}else{fmt="Q%q %Y"}}else{fmt="%Y"}
var rt=formatDate(d,fmt,opts.monthNames,opts.dayNames);return rt}}})})}
$.plot.plugins.push({init:init,options:options,name:"time",version:"1.0"});$.plot.formatDate=formatDate;$.plot.dateGenerator=dateGenerator})(jQuery);
/* Javascript plotting library for jQuery, version 0.8.3.
 
 Copyright (c) 2007-2014 IOLA and Ole Laursen.
 Licensed under the MIT license.
 
 */
(function($){var options = {series:{threshold:null}}; function init(plot){function thresholdData(plot, s, datapoints, below, color){var ps = datapoints.pointsize, i, x, y, p, prevp, thresholded = $.extend({}, s); thresholded.datapoints = {points:[], pointsize:ps, format:datapoints.format}; thresholded.label = null; thresholded.color = color; thresholded.threshold = null; thresholded.originSeries = s; thresholded.data = []; var origpoints = datapoints.points, addCrossingPoints = s.lines.show; var threspoints = []; var newpoints = []; var m; for (i = 0; i < origpoints.length; i += ps){x = origpoints[i]; y = origpoints[i + 1]; prevp = p; if (y < below)p = threspoints; else p = newpoints; if (addCrossingPoints && prevp != p && x != null && i > 0 && origpoints[i - ps] != null){var interx = x + (below - y) * (x - origpoints[i - ps]) / (y - origpoints[i - ps + 1]); prevp.push(interx); prevp.push(below); for (m = 2; m < ps; ++m)prevp.push(origpoints[i + m]); p.push(null); p.push(null); for (m = 2; m < ps; ++m)p.push(origpoints[i + m]); p.push(interx); p.push(below); for (m = 2; m < ps; ++m)p.push(origpoints[i + m])}p.push(x); p.push(y); for (m = 2; m < ps; ++m)p.push(origpoints[i + m])}datapoints.points = newpoints; thresholded.datapoints.points = threspoints; if (thresholded.datapoints.points.length > 0){var origIndex = $.inArray(s, plot.getData()); plot.getData().splice(origIndex + 1, 0, thresholded)}}function processThresholds(plot, s, datapoints){if (!s.threshold)return; if (s.threshold instanceof Array){s.threshold.sort(function(a, b){return a.below - b.below}); $(s.threshold).each(function(i, th){thresholdData(plot, s, datapoints, th.below, th.color)})} else{thresholdData(plot, s, datapoints, s.threshold.below, s.threshold.color)}}plot.hooks.processDatapoints.push(processThresholds)}$.plot.plugins.push({init:init, options:options, name:"threshold", version:"1.2"})})(jQuery);
/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
(function($){var options={xaxis:{categories:null},yaxis:{categories:null}};function processRawData(plot,series,data,datapoints){var xCategories=series.xaxis.options.mode=="categories",yCategories=series.yaxis.options.mode=="categories";if(!(xCategories||yCategories))return;var format=datapoints.format;if(!format){var s=series;format=[];format.push({x:true,number:true,required:true});format.push({y:true,number:true,required:true});if(s.bars.show||s.lines.show&&s.lines.fill){var autoscale=!!(s.bars.show&&s.bars.zero||s.lines.show&&s.lines.zero);format.push({y:true,number:true,required:false,defaultValue:0,autoscale:autoscale});if(s.bars.horizontal){delete format[format.length-1].y;format[format.length-1].x=true}}datapoints.format=format}for(var m=0;m<format.length;++m){if(format[m].x&&xCategories)format[m].number=false;if(format[m].y&&yCategories)format[m].number=false}}function getNextIndex(categories){var index=-1;for(var v in categories)if(categories[v]>index)index=categories[v];return index+1}function categoriesTickGenerator(axis){var res=[];for(var label in axis.categories){var v=axis.categories[label];if(v>=axis.min&&v<=axis.max)res.push([v,label])}res.sort(function(a,b){return a[0]-b[0]});return res}function setupCategoriesForAxis(series,axis,datapoints){if(series[axis].options.mode!="categories")return;if(!series[axis].categories){var c={},o=series[axis].options.categories||{};if($.isArray(o)){for(var i=0;i<o.length;++i)c[o[i]]=i}else{for(var v in o)c[v]=o[v]}series[axis].categories=c}if(!series[axis].options.ticks)series[axis].options.ticks=categoriesTickGenerator;transformPointsOnAxis(datapoints,axis,series[axis].categories)}function transformPointsOnAxis(datapoints,axis,categories){var points=datapoints.points,ps=datapoints.pointsize,format=datapoints.format,formatColumn=axis.charAt(0),index=getNextIndex(categories);for(var i=0;i<points.length;i+=ps){if(points[i]==null)continue;for(var m=0;m<ps;++m){var val=points[i+m];if(val==null||!format[m][formatColumn])continue;if(!(val in categories)){categories[val]=index;++index}points[i+m]=categories[val]}}}function processDatapoints(plot,series,datapoints){setupCategoriesForAxis(series,"xaxis",datapoints);setupCategoriesForAxis(series,"yaxis",datapoints)}function init(plot){plot.hooks.processRawData.push(processRawData);plot.hooks.processDatapoints.push(processDatapoints)}$.plot.plugins.push({init:init,options:options,name:"categories",version:"1.0"})})(jQuery);
/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
(function($){var REDRAW_ATTEMPTS=10;var REDRAW_SHRINK=.95;function init(plot){var canvas=null,target=null,options=null,maxRadius=null,centerLeft=null,centerTop=null,processed=false,ctx=null;var highlights=[];plot.hooks.processOptions.push(function(plot,options){if(options.series.pie.show){options.grid.show=false;if(options.series.pie.label.show=="auto"){if(options.legend.show){options.series.pie.label.show=false}else{options.series.pie.label.show=true}}if(options.series.pie.radius=="auto"){if(options.series.pie.label.show){options.series.pie.radius=3/4}else{options.series.pie.radius=1}}if(options.series.pie.tilt>1){options.series.pie.tilt=1}else if(options.series.pie.tilt<0){options.series.pie.tilt=0}}});plot.hooks.bindEvents.push(function(plot,eventHolder){var options=plot.getOptions();if(options.series.pie.show){if(options.grid.hoverable){eventHolder.unbind("mousemove").mousemove(onMouseMove)}if(options.grid.clickable){eventHolder.unbind("click").click(onClick)}}});plot.hooks.processDatapoints.push(function(plot,series,data,datapoints){var options=plot.getOptions();if(options.series.pie.show){processDatapoints(plot,series,data,datapoints)}});plot.hooks.drawOverlay.push(function(plot,octx){var options=plot.getOptions();if(options.series.pie.show){drawOverlay(plot,octx)}});plot.hooks.draw.push(function(plot,newCtx){var options=plot.getOptions();if(options.series.pie.show){draw(plot,newCtx)}});function processDatapoints(plot,series,datapoints){if(!processed){processed=true;canvas=plot.getCanvas();target=$(canvas).parent();options=plot.getOptions();plot.setData(combine(plot.getData()))}}function combine(data){var total=0,combined=0,numCombined=0,color=options.series.pie.combine.color,newdata=[];for(var i=0;i<data.length;++i){var value=data[i].data;if($.isArray(value)&&value.length==1){value=value[0]}if($.isArray(value)){if(!isNaN(parseFloat(value[1]))&&isFinite(value[1])){value[1]=+value[1]}else{value[1]=0}}else if(!isNaN(parseFloat(value))&&isFinite(value)){value=[1,+value]}else{value=[1,0]}data[i].data=[value]}for(var i=0;i<data.length;++i){total+=data[i].data[0][1]}for(var i=0;i<data.length;++i){var value=data[i].data[0][1];if(value/total<=options.series.pie.combine.threshold){combined+=value;numCombined++;if(!color){color=data[i].color}}}for(var i=0;i<data.length;++i){var value=data[i].data[0][1];if(numCombined<2||value/total>options.series.pie.combine.threshold){newdata.push($.extend(data[i],{data:[[1,value]],color:data[i].color,label:data[i].label,angle:value*Math.PI*2/total,percent:value/(total/100)}))}}if(numCombined>1){newdata.push({data:[[1,combined]],color:color,label:options.series.pie.combine.label,angle:combined*Math.PI*2/total,percent:combined/(total/100)})}return newdata}function draw(plot,newCtx){if(!target){return}var canvasWidth=plot.getPlaceholder().width(),canvasHeight=plot.getPlaceholder().height(),legendWidth=target.children().filter(".legend").children().width()||0;ctx=newCtx;processed=false;maxRadius=Math.min(canvasWidth,canvasHeight/options.series.pie.tilt)/2;centerTop=canvasHeight/2+options.series.pie.offset.top;centerLeft=canvasWidth/2;if(options.series.pie.offset.left=="auto"){if(options.legend.position.match("w")){centerLeft+=legendWidth/2}else{centerLeft-=legendWidth/2}if(centerLeft<maxRadius){centerLeft=maxRadius}else if(centerLeft>canvasWidth-maxRadius){centerLeft=canvasWidth-maxRadius}}else{centerLeft+=options.series.pie.offset.left}var slices=plot.getData(),attempts=0;do{if(attempts>0){maxRadius*=REDRAW_SHRINK}attempts+=1;clear();if(options.series.pie.tilt<=.8){drawShadow()}}while(!drawPie()&&attempts<REDRAW_ATTEMPTS);if(attempts>=REDRAW_ATTEMPTS){clear();target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")}if(plot.setSeries&&plot.insertLegend){plot.setSeries(slices);plot.insertLegend()}function clear(){ctx.clearRect(0,0,canvasWidth,canvasHeight);target.children().filter(".pieLabel, .pieLabelBackground").remove()}function drawShadow(){var shadowLeft=options.series.pie.shadow.left;var shadowTop=options.series.pie.shadow.top;var edge=10;var alpha=options.series.pie.shadow.alpha;var radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius;if(radius>=canvasWidth/2-shadowLeft||radius*options.series.pie.tilt>=canvasHeight/2-shadowTop||radius<=edge){return}ctx.save();ctx.translate(shadowLeft,shadowTop);ctx.globalAlpha=alpha;ctx.fillStyle="#000";ctx.translate(centerLeft,centerTop);ctx.scale(1,options.series.pie.tilt);for(var i=1;i<=edge;i++){ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2,false);ctx.fill();radius-=i}ctx.restore()}function drawPie(){var startAngle=Math.PI*options.series.pie.startAngle;var radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius;ctx.save();ctx.translate(centerLeft,centerTop);ctx.scale(1,options.series.pie.tilt);ctx.save();var currentAngle=startAngle;for(var i=0;i<slices.length;++i){slices[i].startAngle=currentAngle;drawSlice(slices[i].angle,slices[i].color,true)}ctx.restore();if(options.series.pie.stroke.width>0){ctx.save();ctx.lineWidth=options.series.pie.stroke.width;currentAngle=startAngle;for(var i=0;i<slices.length;++i){drawSlice(slices[i].angle,options.series.pie.stroke.color,false)}ctx.restore()}drawDonutHole(ctx);ctx.restore();if(options.series.pie.label.show){return drawLabels()}else return true;function drawSlice(angle,color,fill){if(angle<=0||isNaN(angle)){return}if(fill){ctx.fillStyle=color}else{ctx.strokeStyle=color;ctx.lineJoin="round"}ctx.beginPath();if(Math.abs(angle-Math.PI*2)>1e-9){ctx.moveTo(0,0)}ctx.arc(0,0,radius,currentAngle,currentAngle+angle/2,false);ctx.arc(0,0,radius,currentAngle+angle/2,currentAngle+angle,false);ctx.closePath();currentAngle+=angle;if(fill){ctx.fill()}else{ctx.stroke()}}function drawLabels(){var currentAngle=startAngle;var radius=options.series.pie.label.radius>1?options.series.pie.label.radius:maxRadius*options.series.pie.label.radius;for(var i=0;i<slices.length;++i){if(slices[i].percent>=options.series.pie.label.threshold*100){if(!drawLabel(slices[i],currentAngle,i)){return false}}currentAngle+=slices[i].angle}return true;function drawLabel(slice,startAngle,index){if(slice.data[0][1]==0){return true}var lf=options.legend.labelFormatter,text,plf=options.series.pie.label.formatter;if(lf){text=lf(slice.label,slice)}else{text=slice.label}if(plf){text=plf(text,slice)}var halfAngle=(startAngle+slice.angle+startAngle)/2;var x=centerLeft+Math.round(Math.cos(halfAngle)*radius);var y=centerTop+Math.round(Math.sin(halfAngle)*radius)*options.series.pie.tilt;var html="<span class='pieLabel' id='pieLabel"+index+"' style='position:absolute;top:"+y+"px;left:"+x+"px;'>"+text+"</span>";target.append(html);var label=target.children("#pieLabel"+index);var labelTop=y-label.height()/2;var labelLeft=x-label.width()/2;label.css("top",labelTop);label.css("left",labelLeft);if(0-labelTop>0||0-labelLeft>0||canvasHeight-(labelTop+label.height())<0||canvasWidth-(labelLeft+label.width())<0){return false}if(options.series.pie.label.background.opacity!=0){var c=options.series.pie.label.background.color;if(c==null){c=slice.color}var pos="top:"+labelTop+"px;left:"+labelLeft+"px;";$("<div class='pieLabelBackground' style='position:absolute;width:"+label.width()+"px;height:"+label.height()+"px;"+pos+"background-color:"+c+";'></div>").css("opacity",options.series.pie.label.background.opacity).insertBefore(label)}return true}}}}function drawDonutHole(layer){if(options.series.pie.innerRadius>0){layer.save();var innerRadius=options.series.pie.innerRadius>1?options.series.pie.innerRadius:maxRadius*options.series.pie.innerRadius;layer.globalCompositeOperation="destination-out";layer.beginPath();layer.fillStyle=options.series.pie.stroke.color;layer.arc(0,0,innerRadius,0,Math.PI*2,false);layer.fill();layer.closePath();layer.restore();layer.save();layer.beginPath();layer.strokeStyle=options.series.pie.stroke.color;layer.arc(0,0,innerRadius,0,Math.PI*2,false);layer.stroke();layer.closePath();layer.restore()}}function isPointInPoly(poly,pt){for(var c=false,i=-1,l=poly.length,j=l-1;++i<l;j=i)(poly[i][1]<=pt[1]&&pt[1]<poly[j][1]||poly[j][1]<=pt[1]&&pt[1]<poly[i][1])&&pt[0]<(poly[j][0]-poly[i][0])*(pt[1]-poly[i][1])/(poly[j][1]-poly[i][1])+poly[i][0]&&(c=!c);return c}function findNearbySlice(mouseX,mouseY){var slices=plot.getData(),options=plot.getOptions(),radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius,x,y;for(var i=0;i<slices.length;++i){var s=slices[i];if(s.pie.show){ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,radius,s.startAngle,s.startAngle+s.angle/2,false);ctx.arc(0,0,radius,s.startAngle+s.angle/2,s.startAngle+s.angle,false);ctx.closePath();x=mouseX-centerLeft;y=mouseY-centerTop;if(ctx.isPointInPath){if(ctx.isPointInPath(mouseX-centerLeft,mouseY-centerTop)){ctx.restore();return{datapoint:[s.percent,s.data],dataIndex:0,series:s,seriesIndex:i}}}else{var p1X=radius*Math.cos(s.startAngle),p1Y=radius*Math.sin(s.startAngle),p2X=radius*Math.cos(s.startAngle+s.angle/4),p2Y=radius*Math.sin(s.startAngle+s.angle/4),p3X=radius*Math.cos(s.startAngle+s.angle/2),p3Y=radius*Math.sin(s.startAngle+s.angle/2),p4X=radius*Math.cos(s.startAngle+s.angle/1.5),p4Y=radius*Math.sin(s.startAngle+s.angle/1.5),p5X=radius*Math.cos(s.startAngle+s.angle),p5Y=radius*Math.sin(s.startAngle+s.angle),arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]],arrPoint=[x,y];if(isPointInPoly(arrPoly,arrPoint)){ctx.restore();return{datapoint:[s.percent,s.data],dataIndex:0,series:s,seriesIndex:i}}}ctx.restore()}}return null}function onMouseMove(e){triggerClickHoverEvent("plothover",e)}function onClick(e){triggerClickHoverEvent("plotclick",e)}function triggerClickHoverEvent(eventname,e){var offset=plot.offset();var canvasX=parseInt(e.pageX-offset.left);var canvasY=parseInt(e.pageY-offset.top);var item=findNearbySlice(canvasX,canvasY);if(options.grid.autoHighlight){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.auto==eventname&&!(item&&h.series==item.series)){unhighlight(h.series)}}}if(item){highlight(item.series,eventname)}var pos={pageX:e.pageX,pageY:e.pageY};target.trigger(eventname,[pos,item])}function highlight(s,auto){var i=indexOfHighlight(s);if(i==-1){highlights.push({series:s,auto:auto});plot.triggerRedrawOverlay()}else if(!auto){highlights[i].auto=false}}function unhighlight(s){if(s==null){highlights=[];plot.triggerRedrawOverlay()}var i=indexOfHighlight(s);if(i!=-1){highlights.splice(i,1);plot.triggerRedrawOverlay()}}function indexOfHighlight(s){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.series==s)return i}return-1}function drawOverlay(plot,octx){var options=plot.getOptions();var radius=options.series.pie.radius>1?options.series.pie.radius:maxRadius*options.series.pie.radius;octx.save();octx.translate(centerLeft,centerTop);octx.scale(1,options.series.pie.tilt);for(var i=0;i<highlights.length;++i){drawHighlight(highlights[i].series)}drawDonutHole(octx);octx.restore();function drawHighlight(series){if(series.angle<=0||isNaN(series.angle)){return}octx.fillStyle="rgba(255, 255, 255, "+options.series.pie.highlight.opacity+")";octx.beginPath();if(Math.abs(series.angle-Math.PI*2)>1e-9){octx.moveTo(0,0)}octx.arc(0,0,radius,series.startAngle,series.startAngle+series.angle/2,false);octx.arc(0,0,radius,series.startAngle+series.angle/2,series.startAngle+series.angle,false);octx.closePath();octx.fill()}}}var options={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(label,slice){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+slice.color+";'>"+label+"<br/>"+Math.round(slice.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};$.plot.plugins.push({init:init,options:options,name:"pie",version:"1.1"})})(jQuery);
(function($){'use strict';var browser={getPageXY:function(e){var doc=document.documentElement,pageX=e.clientX+(window.pageXOffset||doc.scrollLeft)-(doc.clientLeft||0),pageY=e.clientY+(window.pageYOffset||doc.scrollTop)-(doc.clientTop||0);return{X:pageX,Y:pageY};},getPixelRatio:function(context){var devicePixelRatio=window.devicePixelRatio||1,backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;return devicePixelRatio/backingStoreRatio;},isSafari:function(){return/constructor/i.test(window.top.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]";})(!window.top['safari']||(typeof window.top.safari!=='undefined'&&window.top.safari.pushNotification));},isMobileSafari:function(){return navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/);},isOpera:function(){return(!!window.opr&&!!opr.addons)||!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;},isFirefox:function(){return typeof InstallTrigger!=='undefined';},isIE:function(){return false||!!document.documentMode;},isEdge:function(){return!browser.isIE()&&!!window.StyleMedia;},isChrome:function(){return!!window.chrome&&!!window.chrome.webstore;},isBlink:function(){return(browser.isChrome()||browser.isOpera())&&!!window.CSS;}};$.plot.browser=browser;})(jQuery);
(function($){'use strict';var options={grid:{hoverable:false,clickable:false}};var browser=$.plot.browser;var eventType={click:'click',hover:'hover'}
function init(plot){var lastMouseMoveEvent;var highlights=[];function bindEvents(plot,eventHolder){var o=plot.getOptions();if(o.grid.hoverable||o.grid.clickable){eventHolder[0].addEventListener('touchevent',triggerCleanupEvent,false);eventHolder[0].addEventListener('tap',generatePlothoverEvent,false);}
if(o.grid.clickable){eventHolder.bind("click",onClick);}
if(o.grid.hoverable){eventHolder.bind("mousemove",onMouseMove);eventHolder.bind("mouseleave",onMouseLeave);}}
function shutdown(plot,eventHolder){eventHolder[0].removeEventListener('tap',generatePlothoverEvent);eventHolder[0].removeEventListener('touchevent',triggerCleanupEvent);eventHolder.unbind("mousemove",onMouseMove);eventHolder.unbind("mouseleave",onMouseLeave);eventHolder.unbind("click",onClick);highlights=[];}
function generatePlothoverEvent(e){var o=plot.getOptions(),newEvent=new CustomEvent('mouseevent');newEvent.pageX=e.detail.changedTouches[0].pageX;newEvent.pageY=e.detail.changedTouches[0].pageY;newEvent.clientX=e.detail.changedTouches[0].clientX;newEvent.clientY=e.detail.changedTouches[0].clientY;if(o.grid.hoverable){doTriggerClickHoverEvent(newEvent,eventType.hover,30);}
return false;}
function doTriggerClickHoverEvent(event,eventType,searchDistance){var series=plot.getData();if(event!==undefined&&series.length>0&&series[0].xaxis.c2p!==undefined&&series[0].yaxis.c2p!==undefined){var eventToTrigger="plot"+eventType;var seriesFlag=eventType+"able";triggerClickHoverEvent(eventToTrigger,event,function(s){return!!s[seriesFlag];},searchDistance);}}
function onMouseMove(e){lastMouseMoveEvent=e;plot.getPlaceholder()[0].lastMouseMoveEvent=e;doTriggerClickHoverEvent(e,eventType.hover);}
function onMouseLeave(e){lastMouseMoveEvent=undefined;plot.getPlaceholder()[0].lastMouseMoveEvent=undefined;triggerClickHoverEvent("plothover",e,function(i){return false;});}
function onClick(e){doTriggerClickHoverEvent(e,eventType.click);}
function triggerCleanupEvent(){plot.unhighlight();plot.getPlaceholder().trigger('plothovercleanup');}
function triggerClickHoverEvent(eventname,event,seriesFilter,searchDistance){var options=plot.getOptions(),offset=plot.offset(),page=browser.getPageXY(event),canvasX=page.X-offset.left,canvasY=page.Y-offset.top,pos=plot.c2p({left:canvasX,top:canvasY}),distance=searchDistance!==undefined?searchDistance:options.grid.mouseActiveRadius;pos.pageX=page.X;pos.pageY=page.Y;var item=plot.findNearbyItem(canvasX,canvasY,seriesFilter,distance);if(item){item.pageX=parseInt(item.series.xaxis.p2c(item.datapoint[0])+offset.left,10);item.pageY=parseInt(item.series.yaxis.p2c(item.datapoint[1])+offset.top,10);}
if(options.grid.autoHighlight){for(var i=0;i<highlights.length;++i){var h=highlights[i];if((h.auto===eventname&&!(item&&h.series===item.series&&h.point[0]===item.datapoint[0]&&h.point[1]===item.datapoint[1]))||!item){unhighlight(h.series,h.point);}}
if(item){highlight(item.series,item.datapoint,eventname);}}
plot.getPlaceholder().trigger(eventname,[pos,item]);}
function highlight(s,point,auto){if(typeof s==="number"){s=plot.getData()[s];}
if(typeof point==="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1));}
var i=indexOfHighlight(s,point);if(i===-1){highlights.push({series:s,point:point,auto:auto});plot.triggerRedrawOverlay();}else if(!auto){highlights[i].auto=false;}}
function unhighlight(s,point){if(s==null&&point==null){highlights=[];plot.triggerRedrawOverlay();return;}
if(typeof s==="number"){s=plot.getData()[s];}
if(typeof point==="number"){var ps=s.datapoints.pointsize;point=s.datapoints.points.slice(ps*point,ps*(point+1));}
var i=indexOfHighlight(s,point);if(i!==-1){highlights.splice(i,1);plot.triggerRedrawOverlay();}}
function indexOfHighlight(s,p){for(var i=0;i<highlights.length;++i){var h=highlights[i];if(h.series===s&&h.point[0]===p[0]&&h.point[1]===p[1]){return i;}}
return-1;}
function processDatapoints(){triggerCleanupEvent();doTriggerClickHoverEvent(lastMouseMoveEvent,eventType.hover);}
function setupGrid(){doTriggerClickHoverEvent(lastMouseMoveEvent,eventType.hover);}
function drawOverlay(plot,octx,overlay){var plotOffset=plot.getPlotOffset(),i,hi;octx.save();octx.translate(plotOffset.left,plotOffset.top);for(i=0;i<highlights.length;++i){hi=highlights[i];if(hi.series.bars.show)drawBarHighlight(hi.series,hi.point,octx);else drawPointHighlight(hi.series,hi.point,octx,plot);}
octx.restore();}
function drawPointHighlight(series,point,octx,plot){var x=point[0],y=point[1],axisx=series.xaxis,axisy=series.yaxis,highlightColor=(typeof series.highlightColor==="string")?series.highlightColor:$.color.parse(series.color).scale('a',0.5).toString();if(x<axisx.min||x>axisx.max||y<axisy.min||y>axisy.max){return;}
var pointRadius=series.points.radius+series.points.lineWidth/2;octx.lineWidth=pointRadius;octx.strokeStyle=highlightColor;var radius=1.5*pointRadius;x=axisx.p2c(x);y=axisy.p2c(y);octx.beginPath();var symbol=series.points.symbol;if(symbol==='circle'){octx.arc(x,y,radius,0,2*Math.PI,false);}else if(typeof symbol==='string'&&plot.drawSymbol&&plot.drawSymbol[symbol]){plot.drawSymbol[symbol](octx,x,y,radius,false);}
octx.closePath();octx.stroke();}
function drawBarHighlight(series,point,octx){var highlightColor=(typeof series.highlightColor==="string")?series.highlightColor:$.color.parse(series.color).scale('a',0.5).toString(),fillStyle=highlightColor,barLeft;var barWidth=series.bars.barWidth[0]||series.bars.barWidth;switch(series.bars.align){case"left":barLeft=0;break;case"right":barLeft=-barWidth;break;default:barLeft=-barWidth/2;}
octx.lineWidth=series.bars.lineWidth;octx.strokeStyle=highlightColor;var fillTowards=series.bars.fillTowards||0,bottom=fillTowards>series.yaxis.min?Math.min(series.yaxis.max,fillTowards):series.yaxis.min;$.plot.drawSeries.drawBar(point[0],point[1],point[2]||bottom,barLeft,barLeft+barWidth,function(){return fillStyle;},series.xaxis,series.yaxis,octx,series.bars.horizontal,series.bars.lineWidth);}
function initHover(plot,options){plot.highlight=highlight;plot.unhighlight=unhighlight;if(options.grid.hoverable||options.grid.clickable){plot.hooks.drawOverlay.push(drawOverlay);plot.hooks.processDatapoints.push(processDatapoints);plot.hooks.setupGrid.push(setupGrid);}
lastMouseMoveEvent=plot.getPlaceholder()[0].lastMouseMoveEvent;}
plot.hooks.bindEvents.push(bindEvents);plot.hooks.shutdown.push(shutdown);plot.hooks.processOptions.push(initHover);}
$.plot.plugins.push({init:init,options:options,name:'hover',version:'0.1'});})(jQuery);
(function (a) {
    function e(h) {
        var k,
                j = this,
                l = h.data || {};
        if (l.elem)
            j = h.dragTarget = l.elem, h.dragProxy = d.proxy || j, h.cursorOffsetX = l.pageX - l.left, h.cursorOffsetY = l.pageY - l.top, h.offsetX = h.pageX - h.cursorOffsetX, h.offsetY = h.pageY - h.cursorOffsetY;
        else if (d.dragging || l.which > 0 && h.which != l.which || a(h.target).is(l.not))
            return;
        switch (h.type) {
            case "mousedown":
                return a.extend(l, a(j).offset(), {
                    elem: j,
                    target: h.target,
                    pageX: h.pageX,
                    pageY: h.pageY
                }),
                        b.add(document, "mousemove mouseup", e, l),
                        i(j, !1),
                        d.dragging = null,
                        !1;
            case !d.dragging && "mousemove":
                if (g(h.pageX - l.pageX) + g(h.pageY - l.pageY) < l.distance)
                    break;
                h.target = l.target,
                        k = f(h, "dragstart", j),
                        k !== !1 && (d.dragging = j, d.proxy = h.dragProxy = a(k || j)[0]);
            case "mousemove":
                if (d.dragging) {
                    if (k = f(h, "drag", j), c.drop && (c.drop.allowed = k !== !1, c.drop.handler(h)), k !== !1)
                        break;
                    h.type = "mouseup"
                }
            case "mouseup":
                b.remove(document, "mousemove mouseup", e),
                        d.dragging && (c.drop && c.drop.handler(h), f(h, "dragend", j)),
                        i(j, !0),
                        d.dragging = d.proxy = l.elem = !1
        }
        return !0
    }
    function f(b, c, d) {
        b.type = c;
        var e = a.event.dispatch.call(d, b);
        return e === !1 ? !1 : e || b.result
    }
    function g(a) {
        return Math.pow(a, 2)
    }
    function h() {
        return d.dragging === !1
    }
    function i(a, b) {
        a && (a.unselectable = b ? "off" : "on", a.onselectstart = function () {
            return b
        }, a.style && (a.style.MozUserSelect = b ? "" : "none"))
    }
    a.fn.drag = function (a, b, c) {
        return b && this.bind("dragstart", a),
                c && this.bind("dragend", c),
                a ? this.bind("drag", b ? b : a) : this.trigger("drag")
    };
    var b = a.event,
            c = b.special,
            d = c.drag = {
                not: ":input",
                distance: 0,
                which: 1,
                dragging: !1,
                setup: function (c) {
                    c = a.extend({
                        distance: d.distance,
                        which: d.which,
                        not: d.not
                    }, c || {}),
                            c.distance = g(c.distance),
                            b.add(this, "mousedown", e, c),
                            this.attachEvent && this.attachEvent("ondragstart", h)
                },
                teardown: function () {
                    b.remove(this, "mousedown", e),
                            this === d.dragging && (d.dragging = d.proxy = !1),
                            i(this, !0),
                            this.detachEvent && this.detachEvent("ondragstart", h)
                }
            };
    c.dragstart = c.dragend = {
        setup: function () {},
        teardown: function () {}
    }
})(jQuery);
(function (d) {
    function e(a) {
        var b = a || window.event,
                c = [].slice.call(arguments, 1),
                f = 0,
                e = 0,
                g = 0,
                a = d.event.fix(b);
        a.type = "mousewheel";
        b.wheelDelta && (f = b.wheelDelta / 120);
        b.detail && (f = -b.detail / 3);
        g = f;
        void 0 !== b.axis && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f);
        void 0 !== b.wheelDeltaY && (g = b.wheelDeltaY / 120);
        void 0 !== b.wheelDeltaX && (e = -1 * b.wheelDeltaX / 120);
        c.unshift(a, f, e, g);
        return (d.event.dispatch || d.event.handle).apply(this, c)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks)
        for (var h = c.length; h; )
            d.event.fixHooks[c[--h]] = d.event.mouseHooks;
    d.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var a = c.length; a; )
                    this.addEventListener(c[--a], e, !1);
            else
                this.onmousewheel = e
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var a = c.length; a; )
                    this.removeEventListener(c[--a], e, !1);
            else
                this.onmousewheel = null
        }
    };
    d.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
(function ($) {
    var options = {
        xaxis: {
            zoomRange: null,
            panRange: null,
            zoomDisabled: false,
            panDisabled: false
        },
        yaxis: {
            zoomRange: null,
            panRange: null,
            zoomDisabled: false,
            panDisabled: false
        },
        zoom: {
            interactive: false,
            trigger: "dblclick",
            amount: 1.5
        },
        pan: {
            interactive: false,
            cursor: "move",
            frameRate: 20
        }
    };
    function init(plot) {
        function onZoomClick(e, zoomOut) {
            var c = plot.offset();
            c.left = e.pageX - c.left;
            c.top = e.pageY - c.top;
            if (zoomOut) {
                return plot.zoomOut({
                    center: c
                });
            } else {
                return plot.zoom({
                    center: c
                });
            }
        }
        function onMouseWheel(e, delta) {
            let shouldPreventDefault = onZoomClick(e, delta < 0);
            return shouldPreventDefault;
        }
        var prevCursor = 'default',
                prevPageX = 0,
                prevPageY = 0,
                panTimeout = null;
        function onDragStart(e) {
            if (e.which != 1)
                return false;
            var c = plot.getPlaceholder().css('cursor');
            if (c)
                prevCursor = c;
            plot.getPlaceholder().css('cursor', plot.getOptions().pan.cursor);
            prevPageX = e.pageX;
            prevPageY = e.pageY;
        }
        function onDrag(e) {
            var frameRate = plot.getOptions().pan.frameRate;
            if (panTimeout || !frameRate)
                return;
            panTimeout = setTimeout(function () {
                if (plot.getOptions().xaxis.panDisabled) {
                    e.pageX = prevPageX;
                }
                if (plot.getOptions().yaxis.panDisabled) {
                    e.pageY = prevPageY;
                }
                plot.pan({
                    left: prevPageX - e.pageX,
                    top: prevPageY - e.pageY
                });
                prevPageX = e.pageX;
                prevPageY = e.pageY;
                panTimeout = null;
            }, 1 / frameRate * 1000);
        }
        function onDragEnd(e) {
            if (panTimeout) {
                clearTimeout(panTimeout);
                panTimeout = null;
            }
            if (plot.getOptions().xaxis.panDisabled) {
                e.pageX = prevPageX;
            }
            if (plot.getOptions().yaxis.panDisabled) {
                e.pageY = prevPageY;
            }
            plot.getPlaceholder().css('cursor', prevCursor);
            plot.pan({
                left: prevPageX - e.pageX,
                top: prevPageY - e.pageY
            });
        }
        function bindEvents(plot, eventHolder) {
            var o = plot.getOptions();
            if (o.zoom.interactive) {
                eventHolder[o.zoom.trigger](onZoomClick);
                eventHolder.mousewheel(onMouseWheel);
            }
            if (o.pan.interactive) {
                eventHolder.bind("dragstart", {
                    distance: 10
                }, onDragStart);
                eventHolder.bind("drag", onDrag);
                eventHolder.bind("dragend", onDragEnd);
            }
        }
        plot.zoomOut = function (args) {
            if (!args)
                args = {};
            if (!args.amount)
                args.amount = plot.getOptions().zoom.amount;
            args.amount = 1 / args.amount;
            return plot.zoom(args);
        };
        plot.zoom = function (args) {
            if (!args)
                args = {};
            var c = args.center,
                    amount = args.amount || plot.getOptions().zoom.amount,
                    w = plot.width(),
                    h = plot.height();
            if (!c) {
                c = {
                    left: w / 2,
                    top: h / 2
                };
            }

            var amountX = plot.getOptions().xaxis.zoomDisabled ? 1 : amount;
            var amountY = plot.getOptions().yaxis.zoomDisabled ? 1 : amount;
            var xf = c.left / w;
            var yf = c.top / h;

            if (xf < 0 || xf > 1 || yf < 0 || yf > 1) {
                return true;
            }

            var minmax = {
                x: {
                    min: c.left - xf * w / amountX,
                    max: c.left + (1 - xf) * w / amountX
                },
                y: {
                    min: c.top - yf * h / amountY,
                    max: c.top + (1 - yf) * h / amountY
                }
            };

            //let limitReachedOnAxisCount = false;

            $.each(plot.getAxes(), function (_, axis) {
                var opts = axis.options;
                var min = minmax[axis.direction].min;
                var max = minmax[axis.direction].max;
                var zr = opts.zoomRange;
                var pr = opts.panRange;

                if (zr === false)
                    return;
                min = axis.c2p(min);
                max = axis.c2p(max);
                if (min > max) {
                    var tmp = min;
                    min = max;
                    max = tmp;
                }

                if (pr) {
                    if (pr[0] != null && min < pr[0]) {
                        min = pr[0];
                    }
                    if (pr[1] != null && max > pr[1]) {
                        max = pr[1];
                    }

              //      limitReachedOnAxisCount = limitReachedOnAxisCount || (min == pr[0] && max == pr[1]);
                }
                var range = max - min;
                if (zr && ((zr[0] != null && range < zr[0] && amount > 1) || (zr[1] != null && range > zr[1] && amount < 1))) {
                    return;
                }

                opts.min = min;
                opts.max = max;
            });


            plot.setupGrid();
            plot.draw();
            if (!args.preventEvent) {
                plot.getPlaceholder().trigger("plotzoom", [plot, args]);
            }

            //return limitReachedOnAxisCount;
            return false;
        };
        plot.pan = function (args) {
            var delta = {
                x: +args.left,
                y: +args.top
            };
            if (isNaN(delta.x))
                delta.x = 0;
            if (isNaN(delta.y))
                delta.y = 0;
            $.each(plot.getAxes(), function (_, axis) {
                var opts = axis.options,
                        min,
                        max,
                        d = delta[axis.direction];
                min = axis.c2p(axis.p2c(axis.min) + d),
                        max = axis.c2p(axis.p2c(axis.max) + d);
                var pr = opts.panRange;
                if (pr === false)
                    return;
                if (pr) {
                    if (pr[0] != null && pr[0] > min) {
                        d = pr[0] - min;
                        min += d;
                        max += d;
                    }
                    if (pr[1] != null && pr[1] < max) {
                        d = pr[1] - max;
                        min += d;
                        max += d;
                    }
                }
                opts.min = min;
                opts.max = max;
            });
            plot.setupGrid();
            plot.draw();
            if (!args.preventEvent)
                plot.getPlaceholder().trigger("plotpan", [plot, args]);
        };
        function shutdown(plot, eventHolder) {
            eventHolder.unbind(plot.getOptions().zoom.trigger, onZoomClick);
            eventHolder.unbind("mousewheel", onMouseWheel);
            eventHolder.unbind("dragstart", onDragStart);
            eventHolder.unbind("drag", onDrag);
            eventHolder.unbind("dragend", onDragEnd);
            if (panTimeout)
                clearTimeout(panTimeout);
        }
        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'navigate',
        version: '1.3'
    });
})(jQuery);

!function(t){"use strict";function e(){var e=this;e.reads=[],e.writes=[],e.raf=o.bind(t)}function n(t){t.scheduled||(t.scheduled=!0,t.raf(i.bind(null,t)))}function i(t){var e,i=t.writes,s=t.reads;try{r(s),r(i)}catch(o){e=o}if(t.scheduled=!1,(s.length||i.length)&&n(t),e){if(!t["catch"])throw e;t["catch"](e)}}function r(t){for(var e;e=t.shift();)e.fn.call(e.ctx)}function s(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}var o=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)};e.prototype={constructor:e,measure:function(t,e){var i={fn:t,ctx:e};return this.reads.push(i),n(this),i},mutate:function(t,e){var i={fn:t,ctx:e};return this.writes.push(i),n(this),i},clear:function(t){return s(this.reads,t)||s(this.writes,t)},extend:function(t){if("object"!=typeof t)throw new Error("expected object");var e=Object.create(this);return Object.assign(e,t),e.fastdom=this,e.initialize&&e.initialize(),e},"catch":null};var exports=t.fastdom=t.fastdom||new e;"f"==(typeof define)[0]?define(function(){return exports}):"o"==(typeof module)[0]&&(module.exports=exports)}(window);

/*! nouislider - 14.1.1 - 12/15/2019 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var lt="14.1.1";function ut(t){t.parentElement.removeChild(t)}function s(t){return null!=t}function ct(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function pt(t,e,r){0<r&&(ht(t,e),setTimeout(function(){mt(t,e)},r))}function ft(t){return Math.max(Math.min(t,100),0)}function dt(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function ht(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function mt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function gt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e){return 100*e/(t[1]-t[0])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),a=t[o-1],s=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[a,s],n[0]<0?i+Math.abs(n[0]):i-n[0])/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,a=f(n,t),s=t[a-1],l=t[a];return r?(l-s)/2<n-s?l:s:e[a-1]?t[a-1]+(i=n-t[a-1],o=e[a-1],Math.round(i/o)*o):n}function o(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' contains invalid value.");if(!i(n="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider ("+lt+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function a(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function l(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)o(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)a(n,this.xNumSteps[n],this)}l.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+lt+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,t)},l.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},l.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],a=t[i],s=e[i-1],l=e[i];return n=[o,a],(r-s)*c(s,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},l.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},l.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},l.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},l.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},l.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function d(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+lt+"): 'format' requires 'to' and 'from' methods.")}function h(t,e){if(!i(e))throw new Error("noUiSlider ("+lt+"): 'step' is not numeric.");t.singleStep=e}function m(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+lt+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+lt+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new l(e,t.snap,t.singleStep)}function g(t,e){if(e=dt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+lt+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function v(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+lt+"): 'snap' option must be a boolean.")}function b(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+lt+"): 'animate' option must be a boolean.")}function S(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+lt+"): 'animationDuration' option must be a number.")}function x(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+lt+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+lt+"): 'orientation' option is invalid.")}}function y(t,e){if(!i(e))throw new Error("noUiSlider ("+lt+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+lt+"): 'margin' option is only supported on linear sliders.")}function E(t,e){if(!i(e))throw new Error("noUiSlider ("+lt+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+lt+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+lt+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+lt+"): 'padding' option must be a positive number(s).");if(100<t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+lt+"): 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+lt+"): 'direction' option was not recognized.")}}function U(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover"),s=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+lt+"): 'fixed' behaviour must be used with 2 handles");y(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider ("+lt+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:a,unconstrained:s}}function P(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=dt(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+lt+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+lt+"): 'tooltips' must be passed a formatter or 'false'.")})}}function V(t,e){d(t.ariaFormat=e)}function k(t,e){d(t.format=e)}function A(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+lt+"): 'keyboardSupport' option must be a boolean.")}function M(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+lt+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function vt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:h},start:{r:!0,t:g},connect:{r:!0,t:x},direction:{r:!0,t:N},snap:{r:!1,t:v},animate:{r:!1,t:b},animationDuration:{r:!1,t:S},range:{r:!0,t:m},orientation:{r:!1,t:w},margin:{r:!1,t:y},limit:{r:!1,t:E},padding:{r:!1,t:C},behaviour:{r:!0,t:U},ariaFormat:{r:!1,t:V},format:{r:!1,t:k},tooltips:{r:!1,t:P},keyboardSupport:{r:!0,t:A},documentElement:{r:!1,t:M},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!s(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+lt+"): '"+t+"' is required.");return!0}n[t].t(r,s(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,a=void 0!==t.style.transform;r.transformRule=a?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function D(t,v,o){var l,u,a,c,i,s,e,p,f=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},d=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h=t,y=v.spectrum,b=[],S=[],m=[],g=0,x={},w=t.ownerDocument,E=v.documentElement||w.documentElement,C=w.body,N=-1,U=0,P=1,V=2,k="rtl"===w.dir||1===v.ort?0:100;function A(t,e){var r=w.createElement("div");return e&&ht(r,e),t.appendChild(r),r}function M(t,e){var r=A(t,v.cssClasses.origin),n=A(r,v.cssClasses.handle);return A(n,v.cssClasses.touchArea),n.setAttribute("data-handle",e),v.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(L()||D(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];v.dir&&!v.ort?r.reverse():v.ort&&!v.dir&&(n.reverse(),i.reverse());var a,s=t.key.replace("Arrow",""),l=s===i[0],u=s===i[1],c=s===n[0]||s===r[0]||l,p=s===n[1]||s===r[1]||u,f=s===o[0],d=s===o[1];if(!(c||p||f||d))return!0;if(t.preventDefault(),p||c){var h=c?0:1,m=st(e),g=m[h];if(null===g)return!1;!1===g&&(g=y.getDefaultStep(S[e],c,10)),(u||l)&&(g*=5),g=Math.max(g,1e-7),g*=c?-1:1,a=b[e]+g}else a=d?v.spectrum.xVal[v.spectrum.xVal.length-1]:v.spectrum.xVal[0];return rt(e,y.toStepping(a),!0,!0),J("slide",e),J("update",e),J("change",e),J("set",e),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",v.ort?"vertical":"horizontal"),0===e?ht(n,v.cssClasses.handleLower):e===v.handles-1&&ht(n,v.cssClasses.handleUpper),r}function O(t,e){return!!e&&A(t,v.cssClasses.connect)}function r(t,e){return!!v.tooltips[e]&&A(t.firstChild,v.cssClasses.tooltip)}function L(){return h.hasAttribute("disabled")}function D(t){return u[t].hasAttribute("disabled")}function z(){i&&(G("update.tooltips"),i.forEach(function(t){t&&ut(t)}),i=null)}function H(){z(),i=u.map(r),$("update.tooltips",function(t,e,r){if(i[e]){var n=t[e];!0!==v.tooltips[e]&&(n=v.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function j(e,i,o){var a=w.createElement("div"),s=[];s[U]=v.cssClasses.valueNormal,s[P]=v.cssClasses.valueLarge,s[V]=v.cssClasses.valueSub;var l=[];l[U]=v.cssClasses.markerNormal,l[P]=v.cssClasses.markerLarge,l[V]=v.cssClasses.markerSub;var u=[v.cssClasses.valueHorizontal,v.cssClasses.valueVertical],c=[v.cssClasses.markerHorizontal,v.cssClasses.markerVertical];function p(t,e){var r=e===v.cssClasses.value,n=r?s:l;return e+" "+(r?u:c)[v.ort]+" "+n[t]}return ht(a,v.cssClasses.pips),ht(a,0===v.ort?v.cssClasses.pipsHorizontal:v.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==N){var n=A(a,!1);n.className=p(r,v.cssClasses.marker),n.style[v.style]=t+"%",U<r&&((n=A(a,!1)).className=p(r,v.cssClasses.value),n.setAttribute("data-value",e),n.style[v.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),a}function F(){c&&(ut(c),c=null)}function R(t){F();var m,g,v,b,e,r,S,x,w,n=t.mode,i=t.density||1,o=t.filter||!1,a=function(t,e,r){if("range"===t||"steps"===t)return y.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+lt+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return y.fromStepping(r?y.getStep(t):t)}):"values"===t?r?e.map(function(t){return y.fromStepping(y.getStep(y.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),s=(m=i,g=n,v=a,b={},e=y.xVal[0],r=y.xVal[y.xVal.length-1],x=S=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),S=!0),v[v.length-1]!==r&&(v.push(r),x=!0),v.forEach(function(t,e){var r,n,i,o,a,s,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=y.xNumSteps[e]),r||(r=d-f),!1!==f&&void 0!==d)for(r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(a=(o=y.toStepping(n))-w)/m,p=a/(c=Math.round(u)),i=1;i<=c;i+=1)b[(s=w+i*p).toFixed(5)]=[y.fromStepping(s),0];l=-1<v.indexOf(n)?P:h?V:U,!e&&S&&(l=0),n===d&&x||(b[o.toFixed(5)]=[n,l]),w=o}}),b),l=t.format||{to:Math.round};return c=h.appendChild(j(s,o,l))}function T(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][v.ort];return 0===v.ort?t.width||l[e]:t.height||l[e]}function B(n,i,o,a){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(s=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||gt(w),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(t,a.pageOffset,a.target||i))&&(!(L()&&!a.doNotReject)&&(e=h,r=v.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!a.doNotReject)&&(!(n===f.start&&void 0!==t.buttons&&1<t.buttons)&&((!a.hover||!t.buttons)&&(d||t.preventDefault(),t.calcPoint=t.points[v.ort],void o(t,a))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!d&&{passive:!0}),r.push([t,e])}),r}function q(t){var e,r,n,i,o,a,s=100*(t-(e=l,r=v.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,a=gt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),r?n.top+a.y-o.clientTop:n.left+a.x-o.clientLeft))/T();return s=ft(s),v.dir?100-s:s}function X(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);var r=(v.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function _(t,e){e.handle&&(mt(e.handle,v.cssClasses.active),g-=1),e.listeners.forEach(function(t){E.removeEventListener(t[0],t[1])}),0===g&&(mt(h,v.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",ct))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(D))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],g+=1,ht(r,v.cssClasses.active));t.stopPropagation();var n=[],i=B(f.move,E,Y,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:T(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:S.slice()}),o=B(f.end,E,_,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),a=B("mouseout",E,X,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,a)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&ht(h,v.cssClasses.drag),C.addEventListener("selectstart",ct,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var i,o,a,e=q(t.calcPoint),r=(i=e,a=!(o=100),u.forEach(function(t,e){if(!D(e)){var r=S[e],n=Math.abs(r-i);(n<o||n<=o&&r<i||100===n&&100===o)&&(a=e,o=n)}}),a);if(!1===r)return!1;v.events.snap||pt(h,v.cssClasses.tap,v.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),v.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=q(t.calcPoint),r=y.getStep(e),n=y.fromStepping(r);Object.keys(x).forEach(function(t){"hover"===t.split(".")[0]&&x[t].forEach(function(t){t.call(s,n)})})}function $(t,e){x[t]=x[t]||[],x[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(x).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete x[t]})}function J(r,n,i){Object.keys(x).forEach(function(t){var e=t.split(".")[0];r===e&&x[t].forEach(function(t){t.call(s,b.map(v.format.to),n,b.slice(),i||!1,S.slice())})})}function K(t,e,r,n,i,o){return 1<u.length&&!v.events.unconstrained&&(n&&0<e&&(r=Math.max(r,t[e-1]+v.margin)),i&&e<u.length-1&&(r=Math.min(r,t[e+1]-v.margin))),1<u.length&&v.limit&&(n&&0<e&&(r=Math.min(r,t[e-1]+v.limit)),i&&e<u.length-1&&(r=Math.max(r,t[e+1]-v.limit))),v.padding&&(0===e&&(r=Math.max(r,v.padding[0])),e===u.length-1&&(r=Math.min(r,100-v.padding[1]))),!((r=ft(r=y.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=v.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],a=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],a[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=a=[!0];var s=!1;e.forEach(function(t,e){s=rt(t,r[t]+n,o[e],a[e])||s}),s&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return v.dir?100-t-e:t}function et(){m.forEach(function(t){var e=50<S[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n){return!1!==(e=K(S,t,e,r,n,!1))&&(function(t,e){S[t]=e,b[t]=y.fromStepping(e);var r="translate("+Q(10*(tt(e,0)-k)+"%","0")+")";u[t].style[v.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(a[t]){var e=0,r=100;0!==t&&(e=S[t-1]),t!==a.length-1&&(r=S[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";a[t].style[v.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?S[e]:("number"==typeof t&&(t=String(t)),t=v.format.from(t),!1===(t=y.toStepping(t))||isNaN(t)?S[e]:t)}function ot(t,e){var r=dt(t),n=void 0===S[0];e=void 0===e||!!e,v.animate&&!n&&pt(h,v.cssClasses.tap,v.animationDuration),m.forEach(function(t){rt(t,it(r[t],t),!0,!1)});for(var i=1===m.length?0:1;i<m.length;++i)m.forEach(function(t){rt(t,S[t],!0,!0)});et(),m.forEach(function(t){J("update",t),null!==r[t]&&e&&J("set",t)})}function at(){var t=b.map(v.format.to);return 1===t.length?t[0]:t}function st(t){var e=S[t],r=y.getNearbySteps(e),n=b[t],i=r.thisStep.step,o=null;if(v.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var a=y.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,i]}return ht(e=h,v.cssClasses.target),0===v.dir?ht(e,v.cssClasses.ltr):ht(e,v.cssClasses.rtl),0===v.ort?ht(e,v.cssClasses.horizontal):ht(e,v.cssClasses.vertical),ht(e,"rtl"===getComputedStyle(e).direction?v.cssClasses.textDirectionRtl:v.cssClasses.textDirectionLtr),l=A(e,v.cssClasses.base),function(t,e){var r=A(e,v.cssClasses.connects);u=[],(a=[]).push(O(r,t[0]));for(var n=0;n<v.handles;n++)u.push(M(e,n)),m[n]=n,a.push(O(r,t[n+1]))}(v.connect,l),(p=v.events).fixed||u.forEach(function(t,e){B(f.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&B(f.start,l,n,{}),p.hover&&B(f.move,l,W,{hover:!0}),p.drag&&a.forEach(function(t,e){if(!1!==t&&0!==e&&e!==a.length-1){var r=u[e-1],n=u[e],i=[t];ht(t,v.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){B(f.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(v.start),v.pips&&R(v.pips),v.tooltips&&H(),$("update",function(t,e,a,r,s){m.forEach(function(t){var e=u[t],r=K(S,t,0,!0,!0,!0),n=K(S,t,100,!0,!0,!0),i=s[t],o=v.ariaFormat.to(a[t]);r=y.fromStepping(r).toFixed(1),n=y.fromStepping(n).toFixed(1),i=y.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),s={destroy:function(){for(var t in v.cssClasses)v.cssClasses.hasOwnProperty(t)&&mt(h,v.cssClasses[t]);for(;h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider},steps:function(){return m.map(st)},on:$,off:G,get:at,set:ot,setHandle:function(t,e,r){if(!(0<=(t=Number(t))&&t<m.length))throw new Error("noUiSlider ("+lt+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0),J("update",t),r&&J("set",t)},reset:function(t){ot(v.start,t)},__moveHandles:function(t,e,r){Z(t,e,S,r)},options:o,updateOptions:function(e,t){var r=at(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=vt(o);n.forEach(function(t){void 0!==e[t]&&(v[t]=i[t])}),y=i.spectrum,v.margin=i.margin,v.limit=i.limit,v.padding=i.padding,v.pips?R(v.pips):F(),v.tooltips?H():z(),S=[],ot(e.start||r,t)},target:h,removePips:F,removeTooltips:z,pips:R}}return{__spectrum:l,version:lt,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+lt+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+lt+"): Slider was already initialized.");var r=D(t,vt(e),e);return t.noUiSlider=r}}});
document.addEventListener("DOMContentLoaded", lazyImageLoad);

function lazyImageLoad() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
}
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($, window, document, undefined) {
  'use strict';

  var header_helpers = function (class_array) {
    var i = class_array.length;
    var head = $('head');

    while (i--) {
      if (head.has('.' + class_array[i]).length === 0) {
        head.append('<meta class="' + class_array[i] + '" />');
      }
    }
  };

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-small-only',
    'foundation-mq-medium',
    'foundation-mq-medium-only',
    'foundation-mq-large',
    'foundation-mq-large-only',
    'foundation-mq-xlarge',
    'foundation-mq-xlarge-only',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);

  // Enable FastClick if present

  $(function () {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont;
        if (context.jquery) {
          cont = context[0];
          if (!cont) {
            return context;
          }
        } else {
          cont = context;
        }
        return $(cont.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  // Namespace functions.

  var attr_name = function (init) {
    var arr = [];
    if (!init) {
      arr.push('data');
    }
    if (this.namespace.length > 0) {
      arr.push(this.namespace);
    }
    arr.push(this.name);

    return arr.join('-');
  };

  var add_namespace = function (str) {
    var parts = str.split('-'),
        i = parts.length,
        arr = [];

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i]);
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i]);
        } else {
          arr.push(parts[i]);
        }
      }
    }

    return arr.reverse().join('-');
  };

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
        bind = function(){
          var $this = S(this),
              should_bind_events = !$this.data(self.attr_name(true) + '-init');
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));

          if (should_bind_events) {
            self.events(this);
          }
        };

    if (S(this.scope).is('[' + this.attr_name() +']')) {
      bind.call(this.scope);
    } else {
      S('[' + this.attr_name() +']', this.scope).each(bind);
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options);
    }

  };

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0]);
    }

    function bindLoad () {
      this.one('load', loaded);

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr( 'src' ),
            param = src.match( /\?/ ) ? '&' : '?';

        param += 'random=' + (new Date()).getTime();
        this.attr('src', src + param);
      }
    }

    if (!image.attr('src')) {
      loaded();
      return;
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded();
    } else {
      bindLoad.call(image);
    }
  };

  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

  window.matchMedia || (window.matchMedia = function() {
      "use strict";

      // For browsers that support matchMedium api such as IE 9 and webkit
      var styleMedia = (window.styleMedia || window.media);

      // For those that don't support matchMedium
      if (!styleMedia) {
          var style       = document.createElement('style'),
              script      = document.getElementsByTagName('script')[0],
              info        = null;

          style.type  = 'text/css';
          style.id    = 'matchmediajs-test';

          script.parentNode.insertBefore(style, script);

          // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
          info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

          styleMedia = {
              matchMedium: function(media) {
                  var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                  // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                  if (style.styleSheet) {
                      style.styleSheet.cssText = text;
                  } else {
                      style.textContent = text;
                  }

                  // Test if media query is true or false
                  return info.width === '1px';
              }
          };
      }

      return function(media) {
          return {
              matches: styleMedia.matchMedium(media || 'all'),
              media: media || 'all'
          };
      };
  }());

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function(jQuery) {


  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];
  }

  function raf() {
    if (animating) {
      requestAnimationFrame(raf);

      if (jqueryFxAvailable) {
        jQuery.fx.tick();
      }
    }
  }

  if (requestAnimationFrame) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true;
          raf();
        }
      };

      jQuery.fx.stop = function () {
        animating = false;
      };
    }
  } else {
    // polyfill
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };

  }

  }( $ ));

  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
    }

    return string;
  }

  window.Foundation = {
    name : 'Foundation',

    version : '{{VERSION}}',

    media_queries : {
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    global : {
      namespace : undefined
    },

    init : function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      this.set_namespace();

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      S(window).load(function () {
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider');
      });

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
            if (typeof this.libs[lib].settings !== 'undefined') {
              $.extend(true, this.libs[lib].settings, args[lib]);
            } else if (typeof this.libs[lib].defaults !== 'undefined') {
              $.extend(true, this.libs[lib].defaults, args[lib]);
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : new Array(args);
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib.namespace = this.global.namespace;
      lib.rtl = this.rtl;
      lib['data_options'] = this.utils.data_options;
      lib['attr_name'] = attr_name;
      lib['add_namespace'] = add_namespace;
      lib['bindings'] = bindings;
      lib['S'] = this.utils.S;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' '),
          i = methods_arr.length;

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]];
        }
      }
    },

    set_namespace : function () {

      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
    },

    libs : {},

    // methods that can be inherited in libraries
    utils : {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S : S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle : function (func, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce : function (func, delay, immediate) {
        var timeout, result;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (callNow) {
            result = func.apply(context, args);
          }
          return result;
        };
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options : function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options';
        var opts = {}, ii, p, opts_arr,
            data_options = function (el) {
              var namespace = Foundation.global.namespace;

              if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name);
              }

              return el.data(data_attr_name);
            };

        var cached_options = data_options(el);

        if (typeof cached_options === 'object') {
          return cached_options;
        }

        opts_arr = (cached_options || ':').split(';');
        ii = opts_arr.length;

        function isNumber (o) {
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;
        }

        function trim (str) {
          if (typeof str === 'string') {
            return $.trim(str);
          }
          return str;
        }

        while (ii--) {
          p = opts_arr[ii].split(':');
          p = [p[0], p.slice(1).join(':')];

          if (/true/i.test(p[1])) {
            p[1] = true;
          }
          if (/false/i.test(p[1])) {
            p[1] = false;
          }
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10);
            } else {
              p[1] = parseFloat(p[1]);
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media : function (media, media_class) {
        if (Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule : function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length);
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded : function (images, callback) {
        var self = this,
            unloaded = images.length;

        function pictures_has_height(images) {
          var pictures_number = images.length;

          for (var i = pictures_number - 1; i >= 0; i--) {
            if(images.attr('height') === undefined) {
              return false;
            };
          };

          return true;
        }

        if (unloaded === 0 || pictures_has_height(images)) {
          callback(images);
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1;
            if (unloaded === 0) {
              callback(images);
            }
          });
        });
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str : function () {
        if (!this.fidx) {
          this.fidx = 0;
        }
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

        return this.prefix + (this.fidx++).toString(36);
      },

      // Description:
      //    Helper for window.matchMedia
      //
      // Arguments:
      //    mq (String): Media query
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not
      match : function (mq) {
        return window.matchMedia(mq).matches;
      },

      // Description:
      //    Helpers for checking Foundation default media queries with JS
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not

      is_small_up : function () {
        return this.match(Foundation.media_queries.small);
      },

      is_medium_up : function () {
        return this.match(Foundation.media_queries.medium);
      },

      is_large_up : function () {
        return this.match(Foundation.media_queries.large);
      },

      is_xlarge_up : function () {
        return this.match(Foundation.media_queries.xlarge);
      },

      is_xxlarge_up : function () {
        return this.match(Foundation.media_queries.xxlarge);
      },

      is_small_only : function () {
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_medium_only : function () {
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_large_only : function () {
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xxlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, window, window.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.equalizer = {
    name : 'equalizer',

    version : '{{VERSION}}',

    settings : {
      use_tallest : true,
      before_height_change : $.noop,
      after_height_change : $.noop,
      equalize_on_stack : false,
      act_on_hidden_el: false
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'image_loaded');
      this.bindings(method, options);
      this.reflow();
    },

    events : function () {
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function (e) {
        this.reflow();
      }.bind(this));
    },

    equalize : function (equalizer) {
      var isStacked = false,
          group = equalizer.data('equalizer'),
          settings = equalizer.data(this.attr_name(true)+'-init') || this.settings,
          vals,
          firstTopOffset;

      if (settings.act_on_hidden_el) {
        vals = group ? equalizer.find('['+this.attr_name()+'-watch="'+group+'"]') : equalizer.find('['+this.attr_name()+'-watch]');
      }
      else {
        vals = group ? equalizer.find('['+this.attr_name()+'-watch="'+group+'"]:visible') : equalizer.find('['+this.attr_name()+'-watch]:visible');
      }
      
      if (vals.length === 0) {
        return;
      }

      settings.before_height_change();
      equalizer.trigger('before-height-change.fndth.equalizer');
      vals.height('inherit');

      if (settings.equalize_on_stack === false) {
        firstTopOffset = vals.first().offset().top;
        vals.each(function () {
          if ($(this).offset().top !== firstTopOffset) {
            isStacked = true;
            return false;
          }
        });
        if (isStacked) {
          return;
        }
      }

      var heights = vals.map(function () { return $(this).outerHeight(false) }).get();

      if (settings.use_tallest) {
        var max = Math.max.apply(null, heights);
        vals.css('height', max);
      } else {
        var min = Math.min.apply(null, heights);
        vals.css('height', min);
      }

      settings.after_height_change();
      equalizer.trigger('after-height-change.fndtn.equalizer');
    },

    reflow : function () {
      var self = this;

      this.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var $eq_target = $(this),
            media_query = $eq_target.data('equalizer-mq'),
            ignore_media_query = true;

        if (media_query) {
          media_query = 'is_' + media_query.replace(/-/g, '_');
          if (Foundation.utils.hasOwnProperty(media_query)) {
            ignore_media_query = false;
          }
        }

        self.image_loaded(self.S('img', this), function () {
          if (ignore_media_query || Foundation.utils[media_query]()) {
            self.equalize($eq_target)
          } else {
            var vals = $eq_target.find('[' + self.attr_name() + '-watch]:visible');
            vals.css('height', 'auto');
          }
        });
      });
    }
  };
})(jQuery, window, window.document);

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.topbar = {
    name : 'topbar',

    version : '{{VERSION}}',

    settings : {
      index : 0,
      start_offset : 0,
      sticky_class : 'sticky',
      custom_back_text : true,
      back_text : 'Back',
      mobile_show_parent_link : true,
      is_hover : true,
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked
      sticky_on : 'all',
      dropdown_autoclose: true
    },

    init : function (section, method, options) {
      Foundation.inherit(this, 'add_custom_rule register_media throttle');
      var self = this;

      self.register_media('topbar', 'foundation-mq-topbar');

      this.bindings(method, options);

      self.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var topbar = $(this),
            settings = topbar.data(self.attr_name(true) + '-init'),
            section = self.S('section, .top-bar-section', this);
        topbar.data('index', 0);
        var topbarContainer = topbar.parent();
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {
          self.settings.sticky_class = settings.sticky_class;
          self.settings.sticky_topbar = topbar;
          topbar.data('height', topbarContainer.outerHeight());
          topbar.data('stickyoffset', topbarContainer.offset().top);
        } else {
          topbar.data('height', topbar.outerHeight());
        }

        if (!settings.assembled) {
          self.assemble(topbar);
        }

        if (settings.is_hover) {
          self.S('.has-dropdown', topbar).addClass('not-click');
        } else {
          self.S('.has-dropdown', topbar).removeClass('not-click');
        }

        // Pad body when sticky (scrolled) or fixed.
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');

        if (topbarContainer.hasClass('fixed')) {
          self.S('body').addClass('f-topbar-fixed');
        }
      });

    },

    is_sticky : function (topbar, topbarContainer, settings) {
      var sticky     = topbarContainer.hasClass(settings.sticky_class);
      var smallMatch = matchMedia(Foundation.media_queries.small).matches;
      var medMatch   = matchMedia(Foundation.media_queries.medium).matches;
      var lrgMatch   = matchMedia(Foundation.media_queries.large).matches;

      if (sticky && settings.sticky_on === 'all') {
        return true;
      }
      if (sticky && this.small() && settings.sticky_on.indexOf('small') !== -1) {
        if (smallMatch && !medMatch && !lrgMatch) { return true; }
      }
      if (sticky && this.medium() && settings.sticky_on.indexOf('medium') !== -1) {
        if (smallMatch && medMatch && !lrgMatch) { return true; }
      }
      if (sticky && this.large() && settings.sticky_on.indexOf('large') !== -1) {
        if (smallMatch && medMatch && lrgMatch) { return true; }
      }

       return false;
    },

    toggle : function (toggleEl) {
      var self = this,
          topbar;

      if (toggleEl) {
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');
      } else {
        topbar = self.S('[' + this.attr_name() + ']');
      }

      var settings = topbar.data(this.attr_name(true) + '-init');

      var section = self.S('section, .top-bar-section', topbar);

      if (self.breakpoint()) {
        if (!self.rtl) {
          section.css({left : '0%'});
          $('>.name', section).css({left : '100%'});
        } else {
          section.css({right : '0%'});
          $('>.name', section).css({right : '100%'});
        }

        self.S('li.moved', section).removeClass('moved');
        topbar.data('index', 0);

        topbar
          .toggleClass('expanded')
          .css('height', '');
      }

      if (settings.scrolltop) {
        if (!topbar.hasClass('expanded')) {
          if (topbar.hasClass('fixed')) {
            topbar.parent().addClass('fixed');
            topbar.removeClass('fixed');
            self.S('body').addClass('f-topbar-fixed');
          }
        } else if (topbar.parent().hasClass('fixed')) {
          if (settings.scrolltop) {
            topbar.parent().removeClass('fixed');
            topbar.addClass('fixed');
            self.S('body').removeClass('f-topbar-fixed');

            window.scrollTo(0, 0);
          } else {
            topbar.parent().removeClass('expanded');
          }
        }
      } else {
        if (self.is_sticky(topbar, topbar.parent(), settings)) {
          topbar.parent().addClass('fixed');
        }

        if (topbar.parent().hasClass('fixed')) {
          if (!topbar.hasClass('expanded')) {
            topbar.removeClass('fixed');
            topbar.parent().removeClass('expanded');
            self.update_sticky_positioning();
          } else {
            topbar.addClass('fixed');
            topbar.parent().addClass('expanded');
            self.S('body').addClass('f-topbar-fixed');
          }
        }
      }
    },

    timer : null,

    events : function (bar) {
      var self = this,
          S = this.S;

      S(this.scope)
        .off('.topbar')
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {
          e.preventDefault();
          self.toggle(this);
        })
        .on('click.fndtn.topbar contextmenu.fndtn.topbar', '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (e) {
            var li = $(this).closest('li'),
                topbar = li.closest('[' + self.attr_name() + ']'),
                settings = topbar.data(self.attr_name(true) + '-init');

            if (settings.dropdown_autoclose && settings.is_hover) {
              var hoverLi = $(this).closest('.hover');
              hoverLi.removeClass('hover');
            }
            if (self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown')) {
              self.toggle();
            }

        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {
          var li = S(this),
              target = S(e.target),
              topbar = li.closest('[' + self.attr_name() + ']'),
              settings = topbar.data(self.attr_name(true) + '-init');

          if (target.data('revealId')) {
            self.toggle();
            return;
          }

          if (self.breakpoint()) {
            return;
          }

         /* if (settings.is_hover && !Modernizr.touch) {
            return;
          }*/

          e.stopImmediatePropagation();

          if (li.hasClass('hover')) {
            li
              .removeClass('hover')
              .find('li')
              .removeClass('hover');

            li.parents('li.hover')
              .removeClass('hover');
          } else {
            li.addClass('hover');

            $(li).siblings().removeClass('hover');

            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {
              e.preventDefault();
            }
          }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {
          if (self.breakpoint()) {

            e.preventDefault();

            var $this = S(this),
                topbar = $this.closest('[' + self.attr_name() + ']'),
                section = topbar.find('section, .top-bar-section'),
                dropdownHeight = $this.next('.dropdown').outerHeight(),
                $selectedLi = $this.closest('li');

            topbar.data('index', topbar.data('index') + 1);
            $selectedLi.addClass('moved');

            if (!self.rtl) {
              section.css({left : -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({left : 100 * topbar.data('index') + '%'});
            } else {
              section.css({right : -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({right : 100 * topbar.data('index') + '%'});
            }

            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));
          }
        });

      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function () {
          self.resize.call(self);
      }, 50)).trigger('resize.fndtn.topbar').load(function () {
          // Ensure that the offset is calculated after all of the pages resources have loaded
          S(this).trigger('resize.fndtn.topbar');
      });

      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {
        var parent = S(e.target).closest('li').closest('li.hover');

        if (parent.length > 0) {
          return;
        }

        S('[' + self.attr_name() + '] li.hover').removeClass('hover');
      });

      // Go up a level on Click
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {
        e.preventDefault();

        var $this = S(this),
            topbar = $this.closest('[' + self.attr_name() + ']'),
            section = topbar.find('section, .top-bar-section'),
            settings = topbar.data(self.attr_name(true) + '-init'),
            $movedLi = $this.closest('li.moved'),
            $previousLevelUl = $movedLi.parent();

        topbar.data('index', topbar.data('index') - 1);

        if (!self.rtl) {
          section.css({left : -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({left : 100 * topbar.data('index') + '%'});
        } else {
          section.css({right : -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({right : 100 * topbar.data('index') + '%'});
        }

        if (topbar.data('index') === 0) {
          topbar.css('height', '');
        } else {
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));
        }

        setTimeout(function () {
          $movedLi.removeClass('moved');
        }, 300);
      });

      // Show dropdown menus when their items are focused
      S(this.scope).find('.dropdown a')
        .focus(function () {
          $(this).parents('.has-dropdown').addClass('hover');
        })
        .blur(function () {
          $(this).parents('.has-dropdown').removeClass('hover');
        });
    },

    resize : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var topbar = self.S(this),
            settings = topbar.data(self.attr_name(true) + '-init');

        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);
        var stickyOffset;

        if (!self.breakpoint()) {
          var doToggle = topbar.hasClass('expanded');
          topbar
            .css('height', '')
            .removeClass('expanded')
            .find('li')
            .removeClass('hover');

            if (doToggle) {
              self.toggle(topbar);
            }
        }

        if (self.is_sticky(topbar, stickyContainer, settings)) {
          if (stickyContainer.hasClass('fixed')) {
            // Remove the fixed to allow for correct calculation of the offset.
            stickyContainer.removeClass('fixed');

            stickyOffset = stickyContainer.offset().top;
            if (self.S(document.body).hasClass('f-topbar-fixed')) {
              stickyOffset -= topbar.data('height');
            }

            topbar.data('stickyoffset', stickyOffset);
            stickyContainer.addClass('fixed');
          } else {
            stickyOffset = stickyContainer.offset().top;
            topbar.data('stickyoffset', stickyOffset);
          }
        }

      });
    },

    breakpoint : function () {
      return !matchMedia(Foundation.media_queries['topbar']).matches;
    },

    small : function () {
      return matchMedia(Foundation.media_queries['small']).matches;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    assemble : function (topbar) {
      var self = this,
          settings = topbar.data(this.attr_name(true) + '-init'),
          section = self.S('section, .top-bar-section', topbar);

      // Pull element out of the DOM for manipulation
      section.detach();

      self.S('.has-dropdown>a', section).each(function () {
        var $link = self.S(this),
            $dropdown = $link.siblings('.dropdown'),
            url = $link.attr('href'),
            $titleLi;

        if (!$dropdown.find('.title.back').length) {

          if (settings.mobile_show_parent_link == true && url) {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');
          }

          // Copy link to subnav
          if (settings.custom_back_text == true) {
            $('h5>a', $titleLi).html(settings.back_text);
          } else {
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());
          }
          $dropdown.prepend($titleLi);
        }
      });

      // Put element back in the DOM
      section.appendTo(topbar);

      // check for sticky
      this.sticky();

      this.assembled(topbar);
    },

    assembled : function (topbar) {
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled : true}));
    },

    height : function (ul) {
      var total = 0,
          self = this;

      $('> li', ul).each(function () {
        total += self.S(this).outerHeight(true);
      });

      return total;
    },

    sticky : function () {
      var self = this;

      this.S(window).on('scroll', function () {
        self.update_sticky_positioning();
      });
    },

    update_sticky_positioning : function () {
      var klass = '.' + this.settings.sticky_class,
          $window = this.S(window),
          self = this;

      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset') + this.settings.start_offset;
        if (!self.S(klass).hasClass('expanded')) {
          if ($window.scrollTop() > (distance)) {
            if (!self.S(klass).hasClass('fixed')) {
              self.S(klass).addClass('fixed');
              self.S('body').addClass('f-topbar-fixed');
            }
          } else if ($window.scrollTop() <= distance) {
            if (self.S(klass).hasClass('fixed')) {
              self.S(klass).removeClass('fixed');
              self.S('body').removeClass('f-topbar-fixed');
            }
          }
        }
      }
    },

    off : function () {
      this.S(this.scope).off('.fndtn.topbar');
      this.S(window).off('.fndtn.topbar');
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));

var SelectPure=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var c={value:"data-value",disabled:"data-disabled",class:"class",type:"type"},r=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e(this,t),this._node=n instanceof HTMLElement?n:document.createElement(n),this._config={i18n:s},this._setAttributes(i),i.textContent&&this._setTextContent(i.textContent),this}return n(t,[{key:"get",value:function(){return this._node}},{key:"append",value:function(e){return this._node.appendChild(e),this}},{key:"addClass",value:function(e){return this._node.classList.add(e),this}},{key:"removeClass",value:function(e){return this._node.classList.remove(e),this}},{key:"toggleClass",value:function(e){return this._node.classList.toggle(e),this}},{key:"addEventListener",value:function(e,t){return this._node.addEventListener(e,t),this}},{key:"removeEventListener",value:function(e,t){return this._node.removeEventListener(e,t),this}},{key:"setText",value:function(e){return this._setTextContent(e),this}},{key:"getHeight",value:function(){return window.getComputedStyle(this._node).height}},{key:"setTop",value:function(e){return this._node.style.top="".concat(e,"px"),this}},{key:"focus",value:function(){return this._node.focus(),this}},{key:"_setTextContent",value:function(e){this._node.textContent=e}},{key:"_setAttributes",value:function(e){for(var t in e)c[t]&&e[t]&&this._setAttribute(c[t],e[t])}},{key:"_setAttribute",value:function(e,t){this._node.setAttribute(e,t)}}]),t}(),u={select:"select-pure__select",dropdownShown:"select-pure__select--opened",multiselect:"select-pure__select--multiple",label:"select-pure__label",placeholder:"select-pure__placeholder",dropdown:"select-pure__options",option:"select-pure__option",optionDisabled:"select-pure__option--disabled",autocompleteInput:"select-pure__autocomplete",selectedLabel:"select-pure__selected-label",selectedOption:"select-pure__option--selected",placeholderHidden:"select-pure__placeholder--hidden",optionHidden:"select-pure__option--hidden"};return function(){function t(n,i){e(this,t),this._config=o(o({},i),{},{classNames:o(o({},u),i.classNames),disabledOptions:[]}),this._state={opened:!1},this._icons=[],this._boundHandleClick=this._handleClick.bind(this),this._boundUnselectOption=this._unselectOption.bind(this),this._boundSortOptions=this._sortOptions.bind(this),this._body=new r(document.body),this._create(n),this._config.value&&this._setValue()}return n(t,[{key:"value",value:function(){return this._config.value}},{key:"reset",value:function(){this._config.value=this._config.multiple?[]:null,this._setValue()}},{key:"_create",value:function(e){var t="string"==typeof e?document.querySelector(e):e;this._parent=new r(t),this._select=new r("div",{class:this._config.classNames.select}),this._label=new r("span",{class:this._config.classNames.label}),this._optionsWrapper=new r("div",{class:this._config.classNames.dropdown}),this._config.multiple&&this._select.addClass(this._config.classNames.multiselect),this._options=this._generateOptions(),this._select.addEventListener("click",this._boundHandleClick),this._select.append(this._label.get()),this._select.append(this._optionsWrapper.get()),this._parent.append(this._select.get()),this._placeholder=new r("span",{class:this._config.classNames.placeholder,textContent:this._config.placeholder}),this._select.append(this._placeholder.get())}},{key:"_generateOptions",value:function(){var e=this;return this._config.autocomplete&&(this._autocomplete=new r("input",{class:this._config.classNames.autocompleteInput,type:"text"}),this._autocomplete.addEventListener("input",this._boundSortOptions),this._optionsWrapper.append(this._autocomplete.get())),this._config.options.map((function(t){var n=new r("div",{class:"".concat(e._config.classNames.option).concat(t.disabled?" "+e._config.classNames.optionDisabled:""),value:t.value,textContent:t.label,disabled:t.disabled});return t.disabled&&e._config.disabledOptions.push(String(t.value)),e._optionsWrapper.append(n.get()),n}))}},{key:"_handleClick",value:function(e){if(e.stopPropagation(),e.target.className!==this._config.classNames.autocompleteInput){if(this._state.opened){var t=this._options.find((function(t){return t.get()===e.target}));return t&&this._setValue(t.get().getAttribute("data-value"),!0),this._select.removeClass(this._config.classNames.dropdownShown),this._body.removeEventListener("click",this._boundHandleClick),this._select.addEventListener("click",this._boundHandleClick),void(this._state.opened=!1)}e.target.className!==this._config.icon&&(this._select.addClass(this._config.classNames.dropdownShown),this._body.addEventListener("click",this._boundHandleClick),this._select.removeEventListener("click",this._boundHandleClick),this._state.opened=!0,this._autocomplete&&this._autocomplete.focus())}}},{key:"_setValue",value:function(e,t,n){var i=this;if(!(this._config.disabledOptions.indexOf(e)>-1)){if(e&&!n&&(this._config.value=this._config.multiple?[].concat(a(this._config.value||[]),[e]):e),e&&n&&(this._config.value=e),this._options.forEach((function(e){e.removeClass(i._config.classNames.selectedOption)})),this._placeholder.removeClass(this._config.classNames.placeholderHidden),this._config.multiple){var s=this._config.value.map((function(e){var t=i._config.options.find((function(t){return t.value===e}));return i._options.find((function(e){return e.get().getAttribute("data-value")===t.value.toString()})).addClass(i._config.classNames.selectedOption),t}));return s.length&&this._placeholder.addClass(this._config.classNames.placeholderHidden),void this._selectOptions(s,t)}var o=this._config.value?this._config.options.find((function(e){return e.value.toString()===i._config.value})):this._config.options[0],l=this._options.find((function(e){return e.get().getAttribute("data-value")===o.value.toString()}));this._config.value?(l.addClass(this._config.classNames.selectedOption),this._placeholder.addClass(this._config.classNames.placeholderHidden),this._selectOption(o,t)):this._label.setText("")}}},{key:"_selectOption",value:function(e,t){this._selectedOption=e,this._label.setText(e.label),this._config.onChange&&t&&this._config.onChange(e.value)}},{key:"_selectOptions",value:function(e,t){var n=this;this._label.setText(""),this._icons=e.map((function(e){var t=new r("span",{class:n._config.classNames.selectedLabel,textContent:e.label}),i=new r(n._config.inlineIcon?n._config.inlineIcon.cloneNode(!0):"i",{class:n._config.icon,value:e.value});return i.addEventListener("click",n._boundUnselectOption),t.append(i.get()),n._label.append(t.get()),i.get()})),t&&this._optionsWrapper.setTop(Number(this._select.getHeight().split("px")[0])+5),this._config.onChange&&t&&this._config.onChange(this._config.value)}},{key:"_unselectOption",value:function(e){var t=a(this._config.value),n=t.indexOf(e.target.getAttribute("data-value"));-1!==n&&t.splice(n,1),this._setValue(t,!0,!0)}},{key:"_sortOptions",value:function(e){var t=this;this._options.forEach((function(n){n.get().textContent.toLowerCase().startsWith(e.target.value.toLowerCase())?n.removeClass(t._config.classNames.optionHidden):n.addClass(t._config.classNames.optionHidden)}))}}]),t}()}();

var a0_0x11f3d7=a0_0x20be;(function(_0x674b43,_0x59008e){var _0x3076dc=a0_0x20be,_0x4c465b=_0x674b43();while(!![]){try{var _0x3a033b=parseInt(_0x3076dc(0x1c9))/0x1*(-parseInt(_0x3076dc(0x4b3))/0x2)+parseInt(_0x3076dc(0x1ff))/0x3*(parseInt(_0x3076dc(0x140))/0x4)+-parseInt(_0x3076dc(0x255))/0x5+-parseInt(_0x3076dc(0x2d5))/0x6+-parseInt(_0x3076dc(0x234))/0x7+parseInt(_0x3076dc(0x19f))/0x8+-parseInt(_0x3076dc(0x2a4))/0x9*(-parseInt(_0x3076dc(0x247))/0xa);if(_0x3a033b===_0x59008e)break;else _0x4c465b['push'](_0x4c465b['shift']());}catch(_0x34bd90){_0x4c465b['push'](_0x4c465b['shift']());}}}(a0_0x3b48,0xe8209));var __extends=this&&this[a0_0x11f3d7(0x416)]||function(){var _0x1c42c9=function(_0x191748,_0x303005){var _0x5e0d95=a0_0x20be;return _0x1c42c9=Object[_0x5e0d95(0x13e)]||{'__proto__':[]}instanceof Array&&function(_0x1bf976,_0x55d4a4){var _0x411b75=_0x5e0d95;_0x1bf976[_0x411b75(0x237)]=_0x55d4a4;}||function(_0xd817f,_0x141909){var _0x44ad94=_0x5e0d95;for(var _0x32db62 in _0x141909)if(Object[_0x44ad94(0x32a)][_0x44ad94(0x2bc)][_0x44ad94(0x595)](_0x141909,_0x32db62))_0xd817f[_0x32db62]=_0x141909[_0x32db62];},_0x1c42c9(_0x191748,_0x303005);};return function(_0x141e4b,_0x9ef10c){var _0x447501=a0_0x20be;if(typeof _0x9ef10c!==_0x447501(0x1b7)&&_0x9ef10c!==null)throw new TypeError(_0x447501(0x2cb)+String(_0x9ef10c)+'\x20is\x20not\x20a\x20constructor\x20or\x20null');_0x1c42c9(_0x141e4b,_0x9ef10c);function _0x6ed2b4(){var _0x41f83b=_0x447501;this[_0x41f83b(0x38b)]=_0x141e4b;}_0x141e4b['prototype']=_0x9ef10c===null?Object[_0x447501(0x19b)](_0x9ef10c):(_0x6ed2b4[_0x447501(0x32a)]=_0x9ef10c[_0x447501(0x32a)],new _0x6ed2b4());};}(),__awaiter=this&&this[a0_0x11f3d7(0x460)]||function(_0x46b040,_0x2ee586,_0x3aec45,_0x225829){function _0x192ecc(_0x35013d){return _0x35013d instanceof _0x3aec45?_0x35013d:new _0x3aec45(function(_0x2f326a){_0x2f326a(_0x35013d);});}return new(_0x3aec45||(_0x3aec45=Promise))(function(_0x3915b0,_0x4f2af2){var _0x11428f=a0_0x20be;function _0x4abbd0(_0x5b4395){var _0x11c9f0=a0_0x20be;try{_0x1dc16a(_0x225829[_0x11c9f0(0x3e5)](_0x5b4395));}catch(_0x7c8552){_0x4f2af2(_0x7c8552);}}function _0x39b806(_0xf95f09){var _0xc868df=a0_0x20be;try{_0x1dc16a(_0x225829[_0xc868df(0x37b)](_0xf95f09));}catch(_0x397224){_0x4f2af2(_0x397224);}}function _0x1dc16a(_0xa24f33){var _0x30cce1=a0_0x20be;_0xa24f33['done']?_0x3915b0(_0xa24f33[_0x30cce1(0x16d)]):_0x192ecc(_0xa24f33[_0x30cce1(0x16d)])[_0x30cce1(0x1f0)](_0x4abbd0,_0x39b806);}_0x1dc16a((_0x225829=_0x225829[_0x11428f(0x505)](_0x46b040,_0x2ee586||[]))[_0x11428f(0x3e5)]());});},__generator=this&&this[a0_0x11f3d7(0x32b)]||function(_0x5dd7c2,_0x3d34d3){var _0x5656e9=a0_0x11f3d7,_0x52344e={'label':0x0,'sent':function(){if(_0x130dc7[0x0]&0x1)throw _0x130dc7[0x1];return _0x130dc7[0x1];},'trys':[],'ops':[]},_0x20be69,_0x1b4230,_0x130dc7,_0x4473fc;return _0x4473fc={'next':_0x263dfb(0x0),'throw':_0x263dfb(0x1),'return':_0x263dfb(0x2)},typeof Symbol===_0x5656e9(0x1b7)&&(_0x4473fc[Symbol[_0x5656e9(0x33d)]]=function(){return this;}),_0x4473fc;function _0x263dfb(_0x5a4043){return function(_0x570c3a){return _0x2e2f4f([_0x5a4043,_0x570c3a]);};}function _0x2e2f4f(_0x240286){var _0x1aaddf=_0x5656e9;if(_0x20be69)throw new TypeError(_0x1aaddf(0x33a));while(_0x52344e)try{if(_0x20be69=0x1,_0x1b4230&&(_0x130dc7=_0x240286[0x0]&0x2?_0x1b4230[_0x1aaddf(0x1cf)]:_0x240286[0x0]?_0x1b4230[_0x1aaddf(0x37b)]||((_0x130dc7=_0x1b4230[_0x1aaddf(0x1cf)])&&_0x130dc7[_0x1aaddf(0x595)](_0x1b4230),0x0):_0x1b4230[_0x1aaddf(0x3e5)])&&!(_0x130dc7=_0x130dc7[_0x1aaddf(0x595)](_0x1b4230,_0x240286[0x1]))[_0x1aaddf(0x452)])return _0x130dc7;if(_0x1b4230=0x0,_0x130dc7)_0x240286=[_0x240286[0x0]&0x2,_0x130dc7[_0x1aaddf(0x16d)]];switch(_0x240286[0x0]){case 0x0:case 0x1:_0x130dc7=_0x240286;break;case 0x4:_0x52344e[_0x1aaddf(0x334)]++;return{'value':_0x240286[0x1],'done':![]};case 0x5:_0x52344e[_0x1aaddf(0x334)]++,_0x1b4230=_0x240286[0x1],_0x240286=[0x0];continue;case 0x7:_0x240286=_0x52344e['ops']['pop'](),_0x52344e[_0x1aaddf(0x34a)][_0x1aaddf(0x3ef)]();continue;default:if(!(_0x130dc7=_0x52344e[_0x1aaddf(0x34a)],_0x130dc7=_0x130dc7[_0x1aaddf(0x593)]>0x0&&_0x130dc7[_0x130dc7[_0x1aaddf(0x593)]-0x1])&&(_0x240286[0x0]===0x6||_0x240286[0x0]===0x2)){_0x52344e=0x0;continue;}if(_0x240286[0x0]===0x3&&(!_0x130dc7||_0x240286[0x1]>_0x130dc7[0x0]&&_0x240286[0x1]<_0x130dc7[0x3])){_0x52344e[_0x1aaddf(0x334)]=_0x240286[0x1];break;}if(_0x240286[0x0]===0x6&&_0x52344e[_0x1aaddf(0x334)]<_0x130dc7[0x1]){_0x52344e['label']=_0x130dc7[0x1],_0x130dc7=_0x240286;break;}if(_0x130dc7&&_0x52344e[_0x1aaddf(0x334)]<_0x130dc7[0x2]){_0x52344e[_0x1aaddf(0x334)]=_0x130dc7[0x2],_0x52344e[_0x1aaddf(0x4d6)]['push'](_0x240286);break;}if(_0x130dc7[0x2])_0x52344e[_0x1aaddf(0x4d6)][_0x1aaddf(0x3ef)]();_0x52344e['trys'][_0x1aaddf(0x3ef)]();continue;}_0x240286=_0x3d34d3['call'](_0x5dd7c2,_0x52344e);}catch(_0x2e104f){_0x240286=[0x6,_0x2e104f],_0x1b4230=0x0;}finally{_0x20be69=_0x130dc7=0x0;}if(_0x240286[0x0]&0x5)throw _0x240286[0x1];return{'value':_0x240286[0x0]?_0x240286[0x1]:void 0x0,'done':!![]};}};jQuery['fn'][a0_0x11f3d7(0x394)]=function(){var _0x47db7b=[]['sort'];return function(_0x38244b,_0x352f94){var _0x3e0ad3=a0_0x20be;_0x352f94=_0x352f94||function(){return this;};var _0x196b79=this[_0x3e0ad3(0x208)](function(){var _0x14ebcc=_0x3e0ad3,_0x38245a=_0x352f94['call'](this),_0x364857=_0x38245a[_0x14ebcc(0x4fd)],_0x7c511c=_0x364857[_0x14ebcc(0x584)](document[_0x14ebcc(0x1fa)](''),_0x38245a[_0x14ebcc(0x3c0)]);return function(){var _0x2ce704=_0x14ebcc;if(_0x364857===this)throw new Error(_0x2ce704(0x29e));_0x364857[_0x2ce704(0x584)](this,_0x7c511c),_0x364857[_0x2ce704(0x1ad)](_0x7c511c);};});return _0x47db7b['call'](this,_0x38244b)[_0x3e0ad3(0x442)](function(_0x264c2a){var _0x5604ca=_0x3e0ad3;_0x196b79[_0x264c2a][_0x5604ca(0x595)](_0x352f94[_0x5604ca(0x595)](this));});};}();$(document)[a0_0x11f3d7(0x32c)]&&$(document)['foundation']({'equalizer':{'equalize_on_stack':!![]}});var isMobile=window[a0_0x11f3d7(0x36e)]<=0x280,isTablet=window[a0_0x11f3d7(0x36e)]>0x280&&window[a0_0x11f3d7(0x36e)]<=0x488,isDesktop=window[a0_0x11f3d7(0x36e)]>0x488,ga,WgHelpers=function(){var _0xaeee48=a0_0x11f3d7;function _0x15fef8(){}return _0x15fef8['scrollTo']=function(_0x164953){var _0x463bc7=a0_0x20be;return $('html,\x20body')[_0x463bc7(0x570)]({'scrollTop':$(_0x164953)[_0x463bc7(0x4bf)]()[_0x463bc7(0x4c5)]-($(_0x463bc7(0x179))['height']()+$(_0x463bc7(0x393))[_0x463bc7(0x363)]())-0xa},0x2ee),![];},_0x15fef8[_0xaeee48(0x470)]=function(_0x122a38){var _0x3ef2f8=_0xaeee48,_0x44a477,_0x32118f,_0x46976e,_0x397f61=document[_0x3ef2f8(0x42e)]['split'](';');for(_0x44a477=0x0;_0x44a477<_0x397f61[_0x3ef2f8(0x593)];_0x44a477++){_0x32118f=_0x397f61[_0x44a477]['substr'](0x0,_0x397f61[_0x44a477]['indexOf']('=')),_0x46976e=_0x397f61[_0x44a477][_0x3ef2f8(0x209)](_0x397f61[_0x44a477][_0x3ef2f8(0x261)]('=')+0x1),_0x32118f=_0x32118f[_0x3ef2f8(0x2b3)](/^\s+|\s+$/g,'');if(_0x32118f==_0x122a38)return unescape(_0x46976e);}return null;},_0x15fef8[_0xaeee48(0x4dc)]=function(_0x5c1b28,_0x1c9143,_0x4c1f51){var _0x40903b=_0xaeee48,_0x3b05de;if(_0x4c1f51){var _0x5a5b78=new Date();_0x5a5b78[_0x40903b(0x472)](_0x5a5b78[_0x40903b(0x18b)]()+_0x4c1f51*0x18*0x3c*0x3c*0x3e8),_0x3b05de=_0x40903b(0x516)+_0x5a5b78[_0x40903b(0x1be)]();}else _0x3b05de='';document[_0x40903b(0x42e)]=_0x5c1b28+'='+_0x1c9143+_0x3b05de+_0x40903b(0x351);},_0x15fef8['sendGaEvent']=function(_0x455c54,_0x5f1a8d,_0x46b227,_0x5b599e){var _0x257566=_0xaeee48;_0x5b599e===void 0x0&&(_0x5b599e=null);_0x5b599e===null&&(_0x5b599e=_0x15fef8[_0x257566(0x3d2)]);var _0x2bd3c3=Math[_0x257566(0x160)]()<_0x5b599e;if(_0x2bd3c3){if(ga)ga(_0x257566(0x536),_0x257566(0x1bb),_0x455c54,_0x5f1a8d||'',_0x46b227||'');else parent&&window[_0x257566(0x44c)]&&parent[_0x257566(0x1ba)]({'type':'ga','method':_0x257566(0x1bb),'args':[_0x455c54,_0x5f1a8d||'',_0x46b227||'']},'*');}return!![];},_0x15fef8['sendGaPageView']=function(_0x37e657){var _0x87247f=_0xaeee48;if(ga)ga(_0x87247f(0x536),'pageview',_0x37e657);else parent&&window[_0x87247f(0x44c)]&&parent[_0x87247f(0x1ba)]({'type':'ga','method':_0x87247f(0x50f),'args':[_0x37e657]},'*');return!![];},_0x15fef8['htmlEncode']=function(_0x1051f9){var _0x5828e0=_0xaeee48;return $(_0x5828e0(0x19d))['text'](_0x1051f9)[_0x5828e0(0x318)]();},_0x15fef8[_0xaeee48(0x259)]=function(){var _0x359537=_0xaeee48,_0x350afb=window[_0x359537(0x199)]['userAgent'],_0x782bac=window['navigator'][_0x359537(0x3fb)],_0x4da05d=[_0x359537(0x2ab),'MacIntel','MacPPC',_0x359537(0x1f2)],_0x315d17=['Win32',_0x359537(0x29f),_0x359537(0x476),'WinCE'],_0x108294=[_0x359537(0x20b),_0x359537(0x485),_0x359537(0x53a)],_0xc9b33e=null;if(_0x4da05d[_0x359537(0x261)](_0x782bac)!==-0x1)_0xc9b33e='MacOS';else{if(_0x108294[_0x359537(0x261)](_0x782bac)!==-0x1)_0xc9b33e=_0x359537(0x325);else{if(_0x315d17[_0x359537(0x261)](_0x782bac)!==-0x1)_0xc9b33e=_0x359537(0x476);else{if(/Android/[_0x359537(0x388)](_0x350afb))_0xc9b33e=_0x359537(0x212);else!_0xc9b33e&&/Linux/['test'](_0x782bac)&&(_0xc9b33e=_0x359537(0x347));}}}return _0xc9b33e;},_0x15fef8['defaultGaEventProbability']=0.4,_0x15fef8;}();function clone(_0xcc462c){var _0x13b1f2=a0_0x11f3d7;if(null==_0xcc462c||_0x13b1f2(0x2e2)!=typeof _0xcc462c)return _0xcc462c;var _0x53c0af=_0xcc462c[_0x13b1f2(0x38b)]();for(var _0x4ce768 in _0xcc462c){if(_0xcc462c[_0x13b1f2(0x2bc)](_0x4ce768))_0x53c0af[_0x4ce768]=_0xcc462c[_0x4ce768];}return _0x53c0af;}function replaceAll(_0x5043eb,_0x42eaed,_0x30ed6c){return _0x30ed6c['replace'](new RegExp(_0x5043eb,'g'),_0x42eaed);};function arrayEquals(_0x4b137e,_0x4c1a8a){var _0x1ad85f=a0_0x11f3d7;if(!_0x4c1a8a)return![];if(_0x4b137e[_0x1ad85f(0x593)]!=_0x4c1a8a[_0x1ad85f(0x593)])return![];for(var _0x3c7b66=0x0,_0x5a03f2=_0x4b137e['length'];_0x3c7b66<_0x5a03f2;_0x3c7b66++){if(_0x4b137e[_0x3c7b66]!=_0x4c1a8a[_0x3c7b66])return![];}return!![];}function numberFormat(_0x2d53c5,_0x406526){var _0xe57ca9=a0_0x11f3d7,_0x2eaa4d=_0x2d53c5[_0xe57ca9(0x2f3)](_0x406526)[_0xe57ca9(0x317)]('.');return _0x2eaa4d[0x0]=_0x2eaa4d[0x0][_0xe57ca9(0x2b3)](/\B(?=(\d{3})+(?!\d))/g,','),_0x2eaa4d[_0xe57ca9(0x4c6)]('.');}function debounce(_0x2dcd54,_0x213233,_0x29383c){var _0x2a35e5;return function(){var _0x392895=a0_0x20be,_0x270393=this,_0x3dafb0=arguments,_0xae0760=function(){var _0x4e29b6=a0_0x20be;_0x2a35e5=null;if(!_0x29383c)_0x2dcd54[_0x4e29b6(0x505)](_0x270393,_0x3dafb0);},_0x11b2ea=_0x29383c&&!_0x2a35e5;clearTimeout(_0x2a35e5),_0x2a35e5=setTimeout(_0xae0760,_0x213233);if(_0x11b2ea)_0x2dcd54[_0x392895(0x505)](_0x270393,_0x3dafb0);};};function randomString(_0xe1fd83){var _0x1400f0=a0_0x11f3d7,_0xc7aa82='',_0x54f6f1=_0x1400f0(0x43d);for(var _0x31e8cc=0x0;_0x31e8cc<_0xe1fd83;_0x31e8cc++)_0xc7aa82+=_0x54f6f1[_0x1400f0(0x12a)](Math[_0x1400f0(0x1d1)](Math[_0x1400f0(0x160)]()*_0x54f6f1[_0x1400f0(0x593)]));return _0xc7aa82;}function htmlEntities(_0x218c0f){var _0x35d776=a0_0x11f3d7;return _0x218c0f[_0x35d776(0x2b3)](/./gm,function(_0x16d865){var _0x145445=_0x35d776;return'&#'+_0x16d865[_0x145445(0x14e)](0x0)+';';});}function getDataFromForm(_0x536727){var _0x30bf37=a0_0x11f3d7,_0xe48f0b={};return $('#'+_0x536727+'\x20.wg-checkbox\x20input')[_0x30bf37(0x442)](function(_0x3c7d7d,_0xbba9b1){var _0x108c96=_0x30bf37;if($(_0xbba9b1)['is'](':checked')){var _0x19883e=$(_0xbba9b1)[_0x108c96(0x279)](_0x108c96(0x15a)),_0x2202f8=$(_0xbba9b1)['attr'](_0x108c96(0x16d));!_0xe48f0b[_0x19883e]&&(_0xe48f0b[_0x19883e]=[]),_0xe48f0b[_0x19883e][_0x108c96(0x559)](_0x2202f8);}}),$('#'+_0x536727+_0x30bf37(0x46f)+_0x536727+'\x20textarea,\x20select')['each'](function(_0x3b8b38,_0x535595){var _0x3310c9=_0x30bf37,_0x4b63a5=$(_0x535595)[_0x3310c9(0x279)](_0x3310c9(0x15a)),_0x1a1923=$(_0x535595)[_0x3310c9(0x358)]();_0xe48f0b[_0x4b63a5]=_0x1a1923;}),$(_0x30bf37(0x3e1))[_0x30bf37(0x442)](function(_0x3ddf84,_0x22f4cc){var _0x2930ba=_0x30bf37,_0x5ed25a=$(_0x22f4cc)[_0x2930ba(0x37c)](_0x2930ba(0x4e6)),_0x52683a=window[$(_0x22f4cc)[_0x2930ba(0x37c)](_0x2930ba(0x253))],_0x1a97e5=_0x52683a[_0x2930ba(0x16d)]();_0xe48f0b[_0x5ed25a]=_0x1a97e5;}),_0xe48f0b;}function setDataToForm(_0x4f26da,_0xd4440f){var _0x2a02fa=a0_0x11f3d7,_0x5080bd={};return $('#'+_0x4f26da+'\x20.wg-checkbox\x20input')['each'](function(_0x34598b,_0x3d631b){var _0xd6f53d=a0_0x20be,_0x3862b6=$(_0x3d631b)['attr'](_0xd6f53d(0x15a)),_0x510c5b=$(_0x3d631b)[_0xd6f53d(0x279)](_0xd6f53d(0x16d));_0xd4440f[_0x3862b6]&&_0xd4440f[_0x3862b6][_0xd6f53d(0x284)](_0x510c5b)&&$(_0x3d631b)['attr'](_0xd6f53d(0x187),'');}),$('#'+_0x4f26da+_0x2a02fa(0x1ab))[_0x2a02fa(0x442)](function(_0xec012e,_0x503e45){var _0x2d3b20=_0x2a02fa,_0x598432=$(_0x503e45)[_0x2d3b20(0x279)](_0x2d3b20(0x15a));$(_0x503e45)[_0x2d3b20(0x444)](_0x2d3b20(0x1ef))[_0x2d3b20(0x442)](function(_0xb5c5d8,_0xb68efb){var _0x49b15b=_0x2d3b20,_0x26e16f=$(_0xb68efb)[_0x49b15b(0x279)](_0x49b15b(0x16d));_0xd4440f[_0x598432]&&_0xd4440f[_0x598432]==_0x26e16f&&!$(_0xb68efb)['is'](_0x49b15b(0x2c8))&&($(_0x503e45)[_0x49b15b(0x444)]('option')[_0x49b15b(0x145)](_0x49b15b(0x43b)),$(_0xb68efb)[_0x49b15b(0x279)](_0x49b15b(0x43b),''));});}),_0x5080bd;}var disableKaspersky=!![];function disableKasperskyInjection(){var _0x26329b=a0_0x11f3d7;$[_0x26329b(0x222)]({'dataFilter':function(_0x49f370,_0x360541){var _0x4de921=_0x26329b;if(disableKaspersky){var _0x789424=_0x49f370[_0x4de921(0x2b3)](/<script.*?kaspersky-labs.com.*?<\/script>/g,'')[_0x4de921(0x2b3)](/<link[^<]*?kaspersky-labs.com.*?\/>/g,'');return _0x789424['length']!=_0x49f370[_0x4de921(0x593)]&&console[_0x4de921(0x225)](_0x4de921(0x2c6)),_0x789424;}else return _0x49f370;}});}function isEmpty(_0x3505d5){var _0xd0dac=a0_0x11f3d7;return _0x3505d5&&Object[_0xd0dac(0x20d)](_0x3505d5)[_0xd0dac(0x593)]===0x0&&_0x3505d5[_0xd0dac(0x38b)]===Object;}function isNumber(_0x46324a){var _0x4d8533=a0_0x11f3d7;return typeof _0x46324a===_0x4d8533(0x3a4)&&isFinite(_0x46324a);}var Carousel=function(){var _0x52836d=a0_0x11f3d7;function _0x4c340a(){var _0x48d62d=a0_0x20be,_0xaf456a=this;this[_0x48d62d(0x557)]=null,this['carouselPosition']=$(_0x48d62d(0x43e))[_0x48d62d(0x501)]('.initial'),$(_0x48d62d(0x531))['on'](_0x48d62d(0x37a),function(){var _0x35050b=_0x48d62d;_0xaf456a[_0x35050b(0x3d3)]();}),$(_0x48d62d(0x531))['on'](_0x48d62d(0x37a),function(){var _0x5e6d84=_0x48d62d;WgHelpers[_0x5e6d84(0x135)](_0x5e6d84(0x30e),_0x5e6d84(0x163),'');}),$(_0x48d62d(0x539))['on']('click',function(){var _0x452596=_0x48d62d;_0xaf456a[_0x452596(0x43a)]();}),$(_0x48d62d(0x539))['on'](_0x48d62d(0x37a),function(){var _0x1d1a68=_0x48d62d;WgHelpers[_0x1d1a68(0x135)]('Homepage',_0x1d1a68(0x412),'');}),$(_0x48d62d(0x356))['click'](function(_0x214e38){var _0xd97c85=_0x48d62d;return WgHelpers[_0xd97c85(0x135)](_0xd97c85(0x30e),_0xd97c85(0x150),$(_0x214e38['target'])[_0xd97c85(0x279)](_0xd97c85(0x4e9))),!![];}),this['resetInterval']();}return _0x4c340a[_0x52836d(0x32a)][_0x52836d(0x43a)]=function(){var _0x22fb4d=_0x52836d,_0x2fd321=$('#carousel\x20.slide')[_0x22fb4d(0x593)],_0x476eee=(this[_0x22fb4d(0x3bb)]+0x1)%_0x2fd321;this[_0x22fb4d(0x544)](_0x476eee),this[_0x22fb4d(0x57b)]();},_0x4c340a[_0x52836d(0x32a)][_0x52836d(0x3d3)]=function(){var _0x4d5ce6=_0x52836d,_0x37f5ac=$(_0x4d5ce6(0x43e))['length'],_0x36cae4=this[_0x4d5ce6(0x3bb)]===0x0?_0x37f5ac-0x1:this['carouselPosition']-0x1;this[_0x4d5ce6(0x544)](_0x36cae4),this[_0x4d5ce6(0x57b)]();},_0x4c340a[_0x52836d(0x32a)]['doSlide']=function(_0x13a87f){var _0x3ef792=_0x52836d,_0x4a2ded=0x320;$($(_0x3ef792(0x43e))[this[_0x3ef792(0x3bb)]])[_0x3ef792(0x341)](!![],!![])[_0x3ef792(0x193)](_0x4a2ded);var _0x5148db=$($(_0x3ef792(0x43e))[_0x13a87f]),_0x55c4b9=_0x5148db[_0x3ef792(0x2df)](_0x3ef792(0x42b));(!_0x55c4b9||_0x55c4b9==='none')&&_0x5148db[_0x3ef792(0x2df)](_0x3ef792(0x42b),_0x3ef792(0x1ed)+_0x5148db[_0x3ef792(0x37c)]('background-image')+'\x27)'),_0x5148db[_0x3ef792(0x341)](!![],!![])[_0x3ef792(0x235)](_0x4a2ded),this[_0x3ef792(0x3bb)]=_0x13a87f;},_0x4c340a[_0x52836d(0x32a)][_0x52836d(0x57b)]=function(){var _0x5bc348=_0x52836d,_0x25545d=this;this[_0x5bc348(0x557)]&&clearTimeout(this[_0x5bc348(0x557)]),this[_0x5bc348(0x557)]=setTimeout(function(){var _0x1c18e2=_0x5bc348;_0x25545d[_0x1c18e2(0x43a)]();},0x1d4c);},_0x4c340a;}();function initPopupButtonOnClick(){var _0xe37bb8=a0_0x11f3d7;$(_0xe37bb8(0x13b))['on'](_0xe37bb8(0x37a),function(){var _0x4e24b1=_0xe37bb8;if(!$(this)['hasClass'](_0x4e24b1(0x42d))){var _0x215625=$(this)[_0x4e24b1(0x37c)]('rel'),_0x519a05=$(this)[_0x4e24b1(0x37c)]('width'),_0x118d33=$(this)['data'](_0x4e24b1(0x4a7)),_0x4c0a4=window[_0x4e24b1(0x44c)]&&_0x118d33?_0x118d33:_0x519a05;window[_0x4e24b1(0x36e)]-0x14<_0x4c0a4&&(_0x4c0a4=window[_0x4e24b1(0x36e)]-0x14),$('#'+_0x215625+'\x20img')[_0x4e24b1(0x442)](function(){var _0x159904=_0x4e24b1;$(this)[_0x159904(0x279)]('src',$(this)[_0x159904(0x37c)]('src'));}),$('#'+_0x215625)[_0x4e24b1(0x235)]()[_0x4e24b1(0x2df)]({'width':_0x4c0a4}),$('#'+_0x215625)[_0x4e24b1(0x444)](_0x4e24b1(0x2a7))[_0x4e24b1(0x54b)](),$('#'+_0x215625)[_0x4e24b1(0x2df)]('transform','translate(-50%,\x20-50%)'),$(_0x4e24b1(0x30b))[_0x4e24b1(0x4cd)](_0x4e24b1(0x34e)),$(_0x4e24b1(0x24e))[_0x4e24b1(0x235)](),parent[_0x4e24b1(0x1ba)]({'type':_0x4e24b1(0x497),'displayed':!![]},'*');}return![];});}$(function(_0xe50757){var _0x59b614=a0_0x11f3d7;initPopupButtonOnClick();function _0x5c7e13(){var _0xdf6934=a0_0x20be;_0xe50757(_0xdf6934(0x379))['fadeOut'](function(){var _0x9c9a28=_0xdf6934;_0xe50757('#fade,\x20a.close')[_0x9c9a28(0x590)]();});var _0x3f6b88=_0xe50757('.popup:visible\x20iframe');return _0x3f6b88[_0xdf6934(0x593)]&&_0x3f6b88[_0xdf6934(0x279)](_0xdf6934(0x543),''),_0xe50757(_0xdf6934(0x336))[_0xdf6934(0x318)](''),parent[_0xdf6934(0x1ba)]({'type':'popup','displayed':![]},'*'),![];}_0xe50757(_0x59b614(0x30b))['on'](_0x59b614(0x37a),_0x59b614(0x141),_0x5c7e13),_0xe50757(document)['keyup'](function(_0x5a9e2c){return _0x5a9e2c['key']==='Escape'&&_0x5c7e13(),!![];});});var graphFunctions;function initGraph(){var _0x144cae=a0_0x11f3d7;if(graphFunctions)for(var _0x423747=0x0;_0x423747<graphFunctions[_0x144cae(0x593)];_0x423747++){try{graphFunctions[_0x423747]();}catch(_0x163f1d){console['log'](_0x163f1d);}}initProgressBars();}initGraph();var textSizeCheckerCanvas,textSizeCheckerCanvasContext,textSizeCheckerCurrentFont;function getTextSize(_0x267d06,_0x194c95,_0x1de679,_0xc5c065,_0x3102b8){var _0x392e99=a0_0x11f3d7;!textSizeCheckerCanvas&&(textSizeCheckerCanvas=document[_0x392e99(0x22d)](_0x392e99(0x254)),textSizeCheckerCanvasContext=textSizeCheckerCanvas[_0x392e99(0x480)]('2d'));var _0x90618a=_0x1de679+'\x20'+_0xc5c065+'\x20'+_0x194c95+'\x20'+_0x267d06;_0x90618a!=textSizeCheckerCurrentFont&&(textSizeCheckerCurrentFont=_0x90618a,textSizeCheckerCanvasContext[_0x392e99(0x305)]=_0x90618a);var _0x4406b4=textSizeCheckerCanvasContext['measureText'](_0x3102b8);return Math[_0x392e99(0x3a1)](_0x4406b4['width']);}function initProgressBars(){var _0x331c3a=a0_0x11f3d7,_0x5cb987=$(window)[_0x331c3a(0x43f)]();$('progressBar:visible')[_0x331c3a(0x442)](function(_0x123d38,_0x15699c){var _0x58007b=_0x331c3a,_0x2aa17e=_0x15699c;if(_0x2aa17e[_0x58007b(0x1e2)][_0x58007b(0x41d)]()[_0x58007b(0x593)]==0x0){var _0x5cbb1a=parseFloat(_0x2aa17e['getAttribute'](_0x58007b(0x538))),_0x4b9bff=_0x2aa17e[_0x58007b(0x450)]('data-color'),_0x5c3e90=parseInt(_0x2aa17e[_0x58007b(0x450)]('data-largedeviceswidth')),_0x5bb2cd=parseInt(_0x2aa17e['getAttribute'](_0x58007b(0x322))),_0x5eae98=parseInt(_0x2aa17e['getAttribute'](_0x58007b(0x335))),_0x5f32be=!!parseInt(_0x2aa17e[_0x58007b(0x450)](_0x58007b(0x277))),_0x1266bb=isDarkMode,_0x4f9c06=parseFloat(_0x2aa17e[_0x58007b(0x450)](_0x58007b(0x1b4))),_0x34ac5b=parseFloat(_0x2aa17e[_0x58007b(0x450)](_0x58007b(0x502))),_0x504b22=!!parseInt(_0x2aa17e[_0x58007b(0x450)](_0x58007b(0x396))),_0x6e6e66=!!parseInt(_0x2aa17e[_0x58007b(0x450)]('data-alwaysshowsign')),_0x51dbdb=!!parseInt(_0x2aa17e[_0x58007b(0x450)](_0x58007b(0x1b2))),_0x4db93d=parseInt(_0x2aa17e[_0x58007b(0x450)](_0x58007b(0x3a9))),_0x3ae435=_0x2aa17e['getAttribute']('data-textoverride'),_0x1f50d3='';_0x6e6e66&&_0x5cbb1a>=0x0&&(_0x1f50d3+='+');_0x504b22&&isDarkMode&&_0x5f32be&&(_0x4f9c06=0x0,_0x34ac5b=0x1);if(_0x51dbdb){_0x5cbb1a>0x15180&&(_0x5cbb1a/=0x3e8,_0x4f9c06/=0x3e8,_0x34ac5b/=0x3e8);var _0x3d2d0f=Math[_0x58007b(0x1d8)](_0x5cbb1a),_0x29652b=Math[_0x58007b(0x1d1)](_0x3d2d0f/0x3c),_0xe6f4b2=_0x3d2d0f%0x3c;_0x1f50d3+=_0x29652b+':'+(_0xe6f4b2<0xa?'0':'')+_0xe6f4b2;}else{var _0x2b1931=_0x5f32be?_0x5cbb1a*0x64:_0x5cbb1a;_0x1f50d3+=numberFormat(_0x2b1931,_0x4db93d)+(_0x5f32be?'%':'');}var _0x517b61=document[_0x58007b(0x22d)](_0x58007b(0x553));_0x517b61[_0x58007b(0x207)]['add'](_0x58007b(0x289));var _0x10e9ac=document['createElement'](_0x58007b(0x553));_0x10e9ac[_0x58007b(0x207)][_0x58007b(0x58c)]('progressBarTxt'),_0x10e9ac[_0x58007b(0x1a8)]=_0x3ae435||_0x1f50d3;var _0x41ccc1=document[_0x58007b(0x22d)](_0x58007b(0x553));_0x41ccc1['classList'][_0x58007b(0x58c)](_0x58007b(0x57e)),_0x4b9bff[0x0]=='#'?_0x41ccc1[_0x58007b(0x4f2)][_0x58007b(0x376)]=_0x4b9bff:_0x41ccc1['classList'][_0x58007b(0x58c)](_0x4b9bff),_0x1266bb?(_0x517b61[_0x58007b(0x419)](_0x41ccc1),_0x2aa17e[_0x58007b(0x419)](_0x517b61),_0x2aa17e[_0x58007b(0x419)](_0x10e9ac)):(_0x517b61[_0x58007b(0x419)](_0x41ccc1),_0x517b61['appendChild'](_0x10e9ac),_0x2aa17e['appendChild'](_0x517b61)),fastdom[_0x58007b(0x177)](function(){var _0x38de2d=_0x58007b,_0x3af559=window[_0x38de2d(0x52d)](_0x10e9ac,null),_0x2b65c8=_0x3af559['getPropertyValue'](_0x38de2d(0x1f5)),_0x266d2d=_0x3af559['getPropertyValue']('font-size'),_0x3fa554=_0x3af559[_0x38de2d(0x391)](_0x38de2d(0x4fb)),_0xca87c7=_0x3af559['getPropertyValue'](_0x38de2d(0x226)),_0x1bf726=getTextSize(_0x2b65c8,_0x266d2d,_0x3fa554,_0xca87c7,_0x1f50d3),_0x56833b=_0x5cb987>largeBreakpoint?_0x5c3e90:_0x5cb987>mediumBreakpoint?_0x5bb2cd:_0x5eae98,_0x4180a6=_0x1bf726+(_0x1266bb?0x0:0x5+0x1),_0x196134=Math[_0x38de2d(0x220)](0x1,Math[_0x38de2d(0x1d8)]((Math['abs'](_0x5cbb1a)-Math[_0x38de2d(0x3a0)](_0x4f9c06))/(Math[_0x38de2d(0x3a0)](_0x34ac5b)-Math[_0x38de2d(0x3a0)](_0x4f9c06))*(_0x1266bb?_0x56833b:_0x56833b-_0x4180a6)));fastdom[_0x38de2d(0x495)](function(){var _0x2b5fea=_0x38de2d;_0x517b61[_0x2b5fea(0x4f2)]['width']=_0x56833b+'px',_0x41ccc1['style'][_0x2b5fea(0x43f)]=_0x196134+'px',_0x2aa17e['style'][_0x2b5fea(0x398)]='';});});}});}$(window)['on']('resize',initProgressBars);function resizePlots(_0x556fec){var _0x5f43ed=a0_0x11f3d7;function _0x285bff(){var _0x2feb70=a0_0x20be,_0x472b57=_0x556fec[_0x2feb70(0x35c)]();if(_0x472b57[_0x2feb70(0x43f)]()===0x0||_0x472b57[_0x2feb70(0x363)]()===0x0)return;_0x556fec['resize'](),_0x556fec['setupGrid'](),_0x556fec[_0x2feb70(0x343)]();}function _0x3e7f18(_0x3166f7,_0x30d362){var _0x38817d=a0_0x20be;new ResizeObserver(_0x285bff)[_0x38817d(0x490)](_0x3166f7[_0x38817d(0x35c)]()[0x0]);}_0x556fec['hooks'][_0x5f43ed(0x147)]['push'](_0x3e7f18);}$[a0_0x11f3d7(0x2b6)][a0_0x11f3d7(0x3f1)][a0_0x11f3d7(0x559)]({'init':resizePlots,'options':{},'name':a0_0x11f3d7(0x20c),'version':a0_0x11f3d7(0x417)});var TooltipManager=function(){var _0x52f360=a0_0x11f3d7;function _0x1b32ab(){}_0x1b32ab[_0x52f360(0x37d)]=function(){var _0x302b75=_0x52f360;$(_0x302b75(0x4d3))[_0x302b75(0x580)](_0x302b75(0x48a)),$('.requireTooltip')[_0x302b75(0x580)](_0x302b75(0x39c)),$(_0x302b75(0x4d3))[_0x302b75(0x580)](_0x302b75(0x2d6)),$('.requireTooltip')['off'](_0x302b75(0x50e)),$(_0x302b75(0x4d3))['off']('touchend.tooltipManager'),$(_0x302b75(0x4d3))['on'](_0x302b75(0x48a),function(_0x30ebbd){var _0x316b47=_0x302b75;return _0x1b32ab[_0x316b47(0x32f)](_0x30ebbd[_0x316b47(0x581)]);}),$('.requireTooltip')['on'](_0x302b75(0x39c),function(_0xf152ab){var _0x495a94=_0x302b75;return _0x1b32ab[_0x495a94(0x52e)](_0xf152ab['currentTarget']);}),$(_0x302b75(0x4d3))['on'](_0x302b75(0x2d6),function(){var _0x5697d4=_0x302b75;_0x1b32ab[_0x5697d4(0x12d)]=![];}),$(_0x302b75(0x4d3))['on'](_0x302b75(0x50e),function(){var _0x3b1d00=_0x302b75;_0x1b32ab[_0x3b1d00(0x12d)]=!![];}),$(_0x302b75(0x4d3))['on'](_0x302b75(0x499),function(_0x33b273){return _0x1b32ab['tooltipFunctionTouch'](_0x33b273['currentTarget']);});},_0x1b32ab['setZoomFactor']=function(_0x5cb35e){var _0x1b4ce0=_0x52f360;_0x1b32ab[_0x1b4ce0(0x403)]=_0x5cb35e;},_0x1b32ab[_0x52f360(0x47e)]=function(){var _0x4ec454=_0x52f360,_0x3f1d77=$(_0x4ec454(0x3b7));!_0x3f1d77['length']&&($('body')[_0x4ec454(0x4cd)](_0x4ec454(0x3e8)),_0x3f1d77=$(_0x4ec454(0x3b7)),_0x3f1d77[_0x4ec454(0x2df)](_0x4ec454(0x294),_0x4ec454(0x273)),_0x3f1d77['on']('touchstart.tooltipManager',_0x1b32ab[_0x4ec454(0x23f)]),_0x3f1d77['css']('position',_0x4ec454(0x352)));},_0x1b32ab[_0x52f360(0x32f)]=function(_0x51e6be){var _0x40fc38=_0x52f360,_0x325d2d=_0x51e6be,_0x5e532f;do{_0x5e532f=_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x2c3)]&&_0x51e6be[_0x40fc38(0x492)]['tooltip'][_0x40fc38(0x184)];if(_0x5e532f)break;var _0x2addcc=_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x264)]&&_0x51e6be['attributes'][_0x40fc38(0x264)]['nodeValue'];if(_0x2addcc){_0x5e532f=tooltipData[_0x2addcc];break;}var _0x2addcc=_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x28e)]&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x28e)][_0x40fc38(0x184)];if(_0x2addcc){_0x5e532f=$('#'+_0x2addcc)['html'](),_0x5e532f=_0x5e532f[_0x40fc38(0x2b3)](/graphDD/g,_0x40fc38(0x436));var _0x5ed61a=/graphFunctions.push\((.*)\)/g,_0x2bcd14=[],_0x554c3f=_0x5ed61a['exec'](_0x5e532f);while(_0x554c3f!=null){_0x2bcd14[_0x40fc38(0x559)](_0x554c3f[0x1][_0x40fc38(0x3b8)]()),_0x554c3f=_0x5ed61a['exec'](_0x5e532f);}_0x2bcd14['forEach'](function(_0x496bb2){var _0x19bb60=_0x40fc38;_0x5e532f=_0x5e532f[_0x19bb60(0x2b3)](new RegExp(_0x496bb2,'g'),_0x19bb60(0x2c3)+_0x496bb2);});break;}_0x51e6be=_0x51e6be[_0x40fc38(0x440)];}while(_0x51e6be);var _0x18d218=$(_0x51e6be)[_0x40fc38(0x312)](_0x40fc38(0x2c0)),_0x1de6f0=_0x51e6be&&_0x51e6be['attributes'][_0x40fc38(0x198)]&&_0x51e6be['attributes'][_0x40fc38(0x198)][_0x40fc38(0x184)],_0x3a7de9=_0x51e6be&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x2b7)]&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x2b7)][_0x40fc38(0x184)],_0x56cccf=parseInt(_0x51e6be&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x201)]&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x201)][_0x40fc38(0x184)]||'10'),_0x3c0afc=_0x51e6be&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x2f6)]&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x2f6)]['nodeValue'],_0x194ab8=_0x51e6be&&_0x51e6be[_0x40fc38(0x492)][_0x40fc38(0x36f)]&&_0x51e6be[_0x40fc38(0x492)]['tooltip-class']['nodeValue'],_0x4f9c29=_0x51e6be&&_0x51e6be['hasAttribute'](_0x40fc38(0x134));if(_0x5e532f){_0x1b32ab[_0x40fc38(0x1c7)][_0x40fc38(0x261)](_0x325d2d)<0x0&&_0x1b32ab[_0x40fc38(0x1c7)]['push'](_0x325d2d);if(_0x325d2d!=_0x1b32ab[_0x40fc38(0x2ce)]())return;_0x1b32ab['currentTooltipElement']=_0x325d2d,_0x1b32ab[_0x40fc38(0x47e)]();var _0x296031=$(_0x40fc38(0x3b7));_0x296031[_0x40fc38(0x4eb)]();_0x194ab8&&_0x296031['addClass'](_0x194ab8);_0x296031[_0x40fc38(0x318)](_0x5e532f),_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x294),_0x40fc38(0x4f3));_0x1de6f0?(_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x43f),isNumber(_0x1de6f0)?_0x1de6f0+'px':_0x1de6f0),_0x296031['css'](_0x40fc38(0x2ec),_0x40fc38(0x308))):(_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x43f),''),_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x2ec),''));_0x3a7de9?(_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x363),_0x3a7de9+'px'),_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x435),_0x40fc38(0x308))):(_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x363),''),_0x296031[_0x40fc38(0x2df)]('max-height',''));var _0x5345f8=_0x1b32ab[_0x40fc38(0x397)](_0x51e6be),_0x3cafea=_0x296031[0x0]['getBoundingClientRect'](),_0x18422a=$(document)[_0x40fc38(0x1af)]()/_0x1b32ab[_0x40fc38(0x403)],_0x5f293f=$(document)[_0x40fc38(0x421)]()/_0x1b32ab['zoomFactor'],_0x33081a=$(window)[_0x40fc38(0x363)]()/_0x1b32ab[_0x40fc38(0x403)],_0x59bfe1=$(window)['width']()/_0x1b32ab[_0x40fc38(0x403)],_0x473be8=_0x3cafea[_0x40fc38(0x43f)],_0x429dad=_0x3cafea['height'],_0x5ca83f=_0x1b32ab['tryVerticalPositionning'](_0x5345f8,_0x5f293f,_0x18422a,_0x473be8,_0x429dad,_0x59bfe1,_0x33081a,_0x56cccf,_0x18d218),_0x5b90b6=_0x5ca83f['x'],_0x4aef2c=_0x5ca83f['y'];if(_0x4aef2c<_0x5345f8[_0x40fc38(0x4c5)]&&_0x4aef2c+_0x429dad>_0x5345f8[_0x40fc38(0x4c5)]||_0x4aef2c+_0x429dad>_0x5345f8['bottom']&&_0x4aef2c<_0x5345f8[_0x40fc38(0x216)]||_0x4f9c29){var _0x383d1f=_0x1b32ab['tryLateralPositionning'](_0x5345f8,_0x5f293f,_0x18422a,_0x473be8,_0x429dad,_0x59bfe1,_0x33081a,_0x56cccf,_0x18d218);_0x5b90b6=_0x383d1f['x'],_0x4aef2c=_0x383d1f['y'];}_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x51d),_0x5b90b6),_0x296031[_0x40fc38(0x2df)](_0x40fc38(0x4c5),Math['max'](0xa,_0x4aef2c)),_0x3c0afc&&eval(_0x3c0afc),_0x5e532f[_0x40fc38(0x349)]()['indexOf'](_0x40fc38(0x340))>=0x0&&setTimeout(function(){return initProgressBars();},0x32);}return!![];};;_0x1b32ab[_0x52f360(0x1fe)]=function(_0x1cb23f,_0x1c05b0,_0xaf5350,_0x9cad74,_0xe6b109,_0x167b74,_0x308b2f,_0x14c580,_0x1ebe84){var _0x438869=_0x52f360,_0x1ae4eb=0xa,_0x294c5=(_0x1cb23f[_0x438869(0x51d)]+_0x1cb23f[_0x438869(0x288)])/0x2-_0x9cad74/0x2;_0x294c5<_0x1c05b0&&(_0x294c5=_0x1c05b0+_0x1ae4eb);_0x294c5+_0x9cad74+_0x1ae4eb>_0x167b74+_0x1c05b0&&(_0x294c5=_0x167b74+_0x1c05b0-_0x9cad74-_0x1ae4eb);_0x1ae4eb=_0x14c580;var _0xfd49de=_0x1cb23f[_0x438869(0x4c5)]-_0xe6b109-_0x1ae4eb;if(_0xfd49de-0xa<_0xaf5350){_0xfd49de=_0x1cb23f[_0x438869(0x216)]+_0x1ae4eb;if(_0xfd49de+_0xe6b109+0xa>_0xaf5350+_0x308b2f){var _0xd100a9=_0x1b32ab['tryLateralPositionning'](_0x1cb23f,_0x1c05b0,_0xaf5350,_0x9cad74,_0xe6b109,_0x167b74,_0x308b2f,_0x14c580,_0x1ebe84);_0x294c5=_0xd100a9['x'],_0xfd49de=_0xd100a9['y'];}}return _0x1ebe84[_0x438869(0x593)]&&(_0x294c5=Math[_0x438869(0x4c4)](_0x294c5,_0x1ebe84[_0x438869(0x4bf)]()[_0x438869(0x51d)]+_0x1ebe84['width']()-_0x9cad74),_0x294c5=Math[_0x438869(0x220)](_0x294c5,_0x1ebe84[_0x438869(0x4bf)]()[_0x438869(0x51d)])),{'x':_0x294c5,'y':_0xfd49de};},_0x1b32ab[_0x52f360(0x1a4)]=function(_0x5e6ccf,_0x306fa9,_0x10fd03,_0x55ef42,_0x35d068,_0x426325,_0x25667d,_0x13aea5,_0x25a298){var _0x3ec2d8=_0x52f360,_0x2db7a3=0xa,_0x420231=_0x5e6ccf['left']-(_0x55ef42+_0x2db7a3);(_0x420231<_0x306fa9||_0x25a298[_0x3ec2d8(0x593)]&&_0x420231<_0x25a298['offset']()[_0x3ec2d8(0x51d)])&&(_0x420231=_0x5e6ccf[_0x3ec2d8(0x288)]+_0x2db7a3);_0x25a298['length']&&(_0x420231=Math[_0x3ec2d8(0x4c4)](_0x420231,_0x25a298[_0x3ec2d8(0x4bf)]()['left']+_0x25a298['width']()-_0x55ef42),_0x420231=Math[_0x3ec2d8(0x220)](_0x420231,_0x25a298['offset']()[_0x3ec2d8(0x51d)]));var _0xbbea3d=(_0x5e6ccf[_0x3ec2d8(0x4c5)]+_0x5e6ccf['bottom'])/0x2-_0x35d068/0x2-_0x2db7a3;return _0xbbea3d<_0x10fd03&&(_0xbbea3d=_0x10fd03+0xa),_0xbbea3d+_0x35d068>_0x10fd03+_0x25667d&&(_0xbbea3d=_0x10fd03+_0x25667d-_0x35d068-0xa),{'x':_0x420231,'y':_0xbbea3d};},_0x1b32ab[_0x52f360(0x263)]=function(_0xb5da78){var _0x2dee57=_0x52f360;!_0x1b32ab[_0x2dee57(0x12d)]&&(_0x1b32ab[_0x2dee57(0x275)]=!![],_0x1b32ab[_0x2dee57(0x268)]==_0xb5da78?(_0x1b32ab[_0x2dee57(0x268)]=null,_0x1b32ab[_0x2dee57(0x23f)]()):(_0x1b32ab[_0x2dee57(0x268)]=_0xb5da78,_0x1b32ab[_0x2dee57(0x23f)](),_0x1b32ab[_0x2dee57(0x32f)](_0xb5da78)));},_0x1b32ab[_0x52f360(0x23f)]=function(){var _0x100830=_0x52f360;return!_0x1b32ab['disabledClosingTooltipOnOut']&&($(_0x100830(0x3b7))[_0x100830(0x2df)](_0x100830(0x294),_0x100830(0x273)),_0x1b32ab['currentTooltipElement']&&(_0x1b32ab[_0x100830(0x1c7)]=_0x1b32ab['tooltipStack'][_0x100830(0x1cc)](function(_0x45750c){var _0x1c212b=_0x100830;return _0x45750c!=_0x1b32ab[_0x1c212b(0x2a5)];})),_0x1b32ab['currentTooltipElement']=null),![];},_0x1b32ab[_0x52f360(0x52e)]=function(_0x455633){var _0x55d28f=_0x52f360;if(!_0x1b32ab['touchModeEnabled']){_0x1b32ab[_0x55d28f(0x23f)]();var _0x402505=function(){var _0x2c6771=_0x55d28f,_0x3d47f9=_0x1b32ab[_0x2c6771(0x1c7)][0x0];if($(_0x3d47f9)['is'](_0x2c6771(0x272)))return _0x1b32ab[_0x2c6771(0x32f)](_0x3d47f9),{'value':void 0x0};else _0x1b32ab[_0x2c6771(0x1c7)]=_0x1b32ab[_0x2c6771(0x1c7)][_0x2c6771(0x1cc)](function(_0x363f13){return _0x363f13!=_0x3d47f9;});};while(_0x1b32ab[_0x55d28f(0x1c7)][_0x55d28f(0x593)]>0x0){var _0x539659=_0x402505();if(typeof _0x539659===_0x55d28f(0x2e2))return _0x539659['value'];}}};;return _0x1b32ab[_0x52f360(0x397)]=function(_0x2992ee){var _0x5f03b6=_0x52f360,_0x3490e5=_0x2992ee[_0x5f03b6(0x408)](),_0x15b134=_0x1b32ab[_0x5f03b6(0x3e2)](_0x2992ee);return{'top':_0x15b134['top'],'left':_0x15b134['left'],'bottom':_0x15b134['top']+_0x3490e5['height'],'right':_0x15b134[_0x5f03b6(0x51d)]+_0x3490e5[_0x5f03b6(0x43f)],'height':_0x3490e5[_0x5f03b6(0x363)],'width':_0x3490e5['width']};},_0x1b32ab[_0x52f360(0x3e2)]=function(_0x5370ac){var _0x27f71d=_0x52f360,_0x3051a4=$(_0x5370ac)[_0x27f71d(0x4bf)](),_0x44c330=$('body')[_0x27f71d(0x4bf)]();return{'left':_0x3051a4['left']-_0x44c330['left'],'top':_0x3051a4[_0x27f71d(0x4c5)]-_0x44c330[_0x27f71d(0x4c5)]};},_0x1b32ab[_0x52f360(0x4f9)]=function(_0x3e6bc2){var _0x22538c=_0x52f360,_0xa20734=0x0;while(_0x3e6bc2[_0x22538c(0x440)]){_0xa20734++,_0x3e6bc2=_0x3e6bc2[_0x22538c(0x440)];}return _0xa20734;},_0x1b32ab[_0x52f360(0x2ce)]=function(){var _0x247ad7=_0x52f360,_0x1bd205=0x0,_0x5937d9=null;return _0x1b32ab[_0x247ad7(0x1c7)][_0x247ad7(0x27e)](function(_0x538fcd){var _0x259baf=_0x247ad7,_0x4a3723=_0x1b32ab[_0x259baf(0x4f9)](_0x538fcd);_0x4a3723>_0x1bd205&&(_0x1bd205=_0x4a3723,_0x5937d9=_0x538fcd);}),_0x5937d9;},_0x1b32ab[_0x52f360(0x275)]=![],_0x1b32ab[_0x52f360(0x12d)]=![],_0x1b32ab[_0x52f360(0x1d3)]=![],_0x1b32ab[_0x52f360(0x403)]=0x1,_0x1b32ab[_0x52f360(0x1c7)]=[],_0x1b32ab[_0x52f360(0x2a5)]=null,_0x1b32ab;}();TooltipManager['initTooltips']();var SpiderChart=function(){var _0x5bb641=a0_0x11f3d7;function _0x18b9c9(_0xae6b6b,_0x5a6b53,_0x4576a9){var _0x7b4d71=a0_0x20be,_0x2705e2=this;this[_0x7b4d71(0x37c)]=_0x5a6b53,this[_0x7b4d71(0x4a6)]=_0x4576a9,this[_0x7b4d71(0x54d)]=_0xae6b6b,$(window)[_0x7b4d71(0x1b5)](function(){var _0x16a393=_0x7b4d71;return _0x2705e2[_0x16a393(0x343)]();});}return _0x18b9c9[_0x5bb641(0x32a)][_0x5bb641(0x343)]=function(){var _0x451603=_0x5bb641,_0x48d226=this['container'][_0x451603(0x16f)](),_0x51a239=this[_0x451603(0x54d)][_0x451603(0x36e)]();if(_0x48d226>0x0&&_0x51a239>0x0){if(!this[_0x451603(0x254)]){var _0x241f67=this[_0x451603(0x54d)][_0x451603(0x444)](_0x451603(0x254));_0x241f67[_0x451603(0x593)]>0x0&&this[_0x451603(0x54d)][_0x451603(0x318)](''),this[_0x451603(0x254)]=document['createElement'](_0x451603(0x254)),this[_0x451603(0x54d)][0x0]['appendChild'](this[_0x451603(0x254)]);}this[_0x451603(0x254)][_0x451603(0x1da)](_0x451603(0x363),String(_0x48d226)),this[_0x451603(0x254)][_0x451603(0x1da)]('width',String(_0x51a239)),this[_0x451603(0x54d)][_0x451603(0x444)]('.spiderChartLegLegend')[_0x451603(0x590)](),this[_0x451603(0x54d)][_0x451603(0x444)](_0x451603(0x2d4))[_0x451603(0x590)]();var _0x5ac264=[Math[_0x451603(0x1d8)](_0x51a239/0x2),Math[_0x451603(0x1d8)](_0x48d226/0x2)],_0x145e76=this[_0x451603(0x254)]['getContext']('2d');_0x145e76[_0x451603(0x1f9)](0.5,0.5),this[_0x451603(0x1d6)](_0x145e76,0x5,_0x48d226,_0x51a239,_0x5ac264),this['drawContent'](_0x145e76,_0x48d226,_0x51a239,_0x5ac264),this[_0x451603(0x2fa)](_0x145e76,_0x48d226,_0x51a239,_0x5ac264),this['drawLegend']();}},_0x18b9c9[_0x5bb641(0x32a)][_0x5bb641(0x1d6)]=function(_0x30ae39,_0x5adf6e,_0x4e42ac,_0x560f26,_0xdd7814){var _0x3bae0f=_0x5bb641,_0x4860ec=this['data'][0x0][_0x3bae0f(0x37c)][_0x3bae0f(0x593)];_0x30ae39[_0x3bae0f(0x3c9)]=this[_0x3bae0f(0x4a6)][_0x3bae0f(0x34b)][_0x3bae0f(0x257)],_0x30ae39[_0x3bae0f(0x4b1)]=this[_0x3bae0f(0x4a6)][_0x3bae0f(0x34b)][_0x3bae0f(0x4b1)];for(var _0x27d1c2=0x1;_0x27d1c2<=_0x5adf6e;_0x27d1c2++){var _0x3727ad=this[_0x3bae0f(0x246)](_0x27d1c2/_0x5adf6e,_0x4e42ac,_0x560f26);_0x30ae39['beginPath']();var _0x52c6b2=this[_0x3bae0f(0x26f)](0x0,_0x4860ec,_0x3727ad,_0xdd7814);_0x30ae39['moveTo'](_0x52c6b2[0x0],_0x52c6b2[0x1]);for(var _0x9956c0=0x1;_0x9956c0<=_0x4860ec;_0x9956c0++){var _0x7b951d=this[_0x3bae0f(0x26f)](_0x9956c0,_0x4860ec,_0x3727ad,_0xdd7814);_0x30ae39[_0x3bae0f(0x1fc)](_0x7b951d[0x0],_0x7b951d[0x1]);}_0x30ae39[_0x3bae0f(0x41b)](),_0x30ae39[_0x3bae0f(0x23a)]();}for(var _0x9956c0=0x0;_0x9956c0<_0x4860ec;_0x9956c0++){_0x30ae39[_0x3bae0f(0x3b0)](),_0x30ae39['moveTo'](_0xdd7814[0x0],_0xdd7814[0x1]);var _0x7b951d=this['getCoordinates'](_0x9956c0,_0x4860ec,_0x3727ad,_0xdd7814);_0x30ae39[_0x3bae0f(0x1fc)](_0x7b951d[0x0],_0x7b951d[0x1]),_0x30ae39[_0x3bae0f(0x41b)](),_0x30ae39[_0x3bae0f(0x23a)]();}},_0x18b9c9['prototype'][_0x5bb641(0x162)]=function(_0x4b3b39,_0x31c38a,_0x343cfa,_0x7bc482){var _0x44b4f6=_0x5bb641,_0x584714=this[_0x44b4f6(0x37c)][0x0]['data'][_0x44b4f6(0x593)];for(var _0x198f2f=0x0;_0x198f2f<this[_0x44b4f6(0x37c)][_0x44b4f6(0x593)];_0x198f2f++){var _0x36f6a5=this[_0x44b4f6(0x4a6)]['reverseDrawOrder']?this['data'][_0x44b4f6(0x593)]-0x1-_0x198f2f:_0x198f2f;_0x4b3b39[_0x44b4f6(0x3b0)]();var _0x52f9ba=this[_0x44b4f6(0x37c)][_0x36f6a5][_0x44b4f6(0x37c)][0x0],_0x1275ea=this[_0x44b4f6(0x4cc)](0x0),_0x41edf4=this[_0x44b4f6(0x246)](_0x52f9ba/_0x1275ea,_0x31c38a,_0x343cfa),_0xd8052=this[_0x44b4f6(0x26f)](0x0,_0x584714,_0x41edf4,_0x7bc482);_0x4b3b39['moveTo'](_0xd8052[0x0],_0xd8052[0x1]);for(var _0x1d3772=0x1;_0x1d3772<=this[_0x44b4f6(0x37c)][_0x36f6a5]['data'][_0x44b4f6(0x593)];_0x1d3772++){var _0x140289=this[_0x44b4f6(0x37c)][_0x36f6a5][_0x44b4f6(0x37c)][_0x1d3772%_0x584714],_0xfdc8af=this[_0x44b4f6(0x4cc)](_0x1d3772%_0x584714),_0x4bbe21=this['getRadius'](_0x140289/_0xfdc8af,_0x31c38a,_0x343cfa),_0x450168=this[_0x44b4f6(0x26f)](_0x1d3772%_0x584714,_0x584714,_0x4bbe21,_0x7bc482);_0x4b3b39[_0x44b4f6(0x1fc)](_0x450168[0x0],_0x450168[0x1]);}_0x4b3b39['strokeStyle']=this[_0x44b4f6(0x37c)][_0x36f6a5][_0x44b4f6(0x257)],_0x4b3b39['fillStyle']=_0x18b9c9[_0x44b4f6(0x496)](this[_0x44b4f6(0x37c)][_0x36f6a5]['color'],this[_0x44b4f6(0x37c)][_0x36f6a5]['fillOpacity']),_0x4b3b39[_0x44b4f6(0x4b1)]=this[_0x44b4f6(0x37c)][_0x36f6a5][_0x44b4f6(0x4b1)],_0x4b3b39[_0x44b4f6(0x41b)](),_0x4b3b39[_0x44b4f6(0x23a)](),_0x4b3b39['fill']();}},_0x18b9c9[_0x5bb641(0x32a)]['drawLegLegends']=function(_0x126981,_0x13dbcf,_0x29c2e6,_0xd70e34){var _0x53d543=_0x5bb641,_0x571386=this[_0x53d543(0x37c)][0x0]['data']['length'];_0x126981[_0x53d543(0x305)]=this[_0x53d543(0x4a6)][_0x53d543(0x34b)][_0x53d543(0x22e)]+_0x53d543(0x57d),_0x126981[_0x53d543(0x448)]=_0x53d543(0x51d),_0x126981[_0x53d543(0x32d)]='middle',_0x126981['fillStyle']=this[_0x53d543(0x4a6)][_0x53d543(0x34b)]['labelTextColor'];for(var _0x4814c7=0x0;_0x4814c7<_0x571386;_0x4814c7++){var _0x89cb94=this[_0x53d543(0x246)](1.15,_0x13dbcf,_0x29c2e6),_0x2f3b7d=this[_0x53d543(0x26f)](_0x4814c7,_0x571386,_0x89cb94,_0xd70e34),_0x28fd9d=this[_0x53d543(0x4a6)]['axis'][_0x53d543(0x245)][_0x4814c7],_0xe01a6=0x96;if(_0x2f3b7d[0x0]>_0xd70e34[0x0]+0x14)this[_0x53d543(0x4b0)](_0x28fd9d,_0x2f3b7d[0x0],_0x2f3b7d[0x1],'text-left');else _0x2f3b7d[0x0]<_0xd70e34[0x0]-0x14?this['drawSoloText'](_0x28fd9d,_0x2f3b7d[0x0]-Math[_0x53d543(0x4c4)](_0xe01a6,_0x126981[_0x53d543(0x12f)](_0x28fd9d)[_0x53d543(0x43f)]),_0x2f3b7d[0x1],_0x53d543(0x31d)):this[_0x53d543(0x4b0)](_0x28fd9d,_0x2f3b7d[0x0]-Math[_0x53d543(0x4c4)](_0xe01a6,_0x126981[_0x53d543(0x12f)](_0x28fd9d)[_0x53d543(0x43f)])/0x2,_0x2f3b7d[0x1],_0x53d543(0x48b));}},_0x18b9c9[_0x5bb641(0x32a)][_0x5bb641(0x2d0)]=function(){var _0x5c5f10=_0x5bb641,_0x258576=_0x5c5f10(0x519);for(var _0x1d521d=0x0;_0x1d521d<this[_0x5c5f10(0x37c)][_0x5c5f10(0x593)];_0x1d521d++){_0x258576+='<td\x20class=\x22legendColorBox\x22>'+_0x5c5f10(0x1f7)+'<div\x20style=\x22width:4px;height:0;border:5px\x20solid\x20'+this['data'][_0x1d521d][_0x5c5f10(0x257)]+_0x5c5f10(0x4a8)+_0x5c5f10(0x399)+_0x5c5f10(0x399)+_0x5c5f10(0x2ee)+_0x5c5f10(0x34f)+WgHelpers[_0x5c5f10(0x248)](this[_0x5c5f10(0x37c)][_0x1d521d]['label'])+_0x5c5f10(0x2ee);}_0x258576+=_0x5c5f10(0x576),this[_0x5c5f10(0x54d)][_0x5c5f10(0x4cd)](_0x258576);},_0x18b9c9[_0x5bb641(0x32a)][_0x5bb641(0x26f)]=function(_0x20f40b,_0x822e2a,_0x26f9df,_0x5a30f2){var _0x5def9b=_0x5bb641,_0x376527=0x2*Math['PI']*_0x20f40b/_0x822e2a;_0x376527=_0x376527-Math['PI']/0x2;var _0xa610be=_0x26f9df*Math['cos'](_0x376527),_0x3d1efb=_0x26f9df*Math[_0x5def9b(0x2e6)](_0x376527);return[_0xa610be+_0x5a30f2[0x0],_0x3d1efb+_0x5a30f2[0x1]];},_0x18b9c9['prototype'][_0x5bb641(0x246)]=function(_0x365fa5,_0x337b51,_0x5ca7be){var _0x52111e=_0x5bb641;return _0x365fa5*Math['min'](_0x337b51,_0x5ca7be)*0.5*this[_0x52111e(0x4a6)][_0x52111e(0x2dc)];},_0x18b9c9[_0x5bb641(0x32a)][_0x5bb641(0x4cc)]=function(_0x4a9dfc){var _0x4c8856=_0x5bb641,_0xabc408=0x0;for(var _0x47c2fb=0x0;_0x47c2fb<this[_0x4c8856(0x37c)][_0x4c8856(0x593)];_0x47c2fb++){_0xabc408=Math['max'](_0xabc408,this[_0x4c8856(0x37c)][_0x47c2fb][_0x4c8856(0x37c)][_0x4a9dfc]);}return _0xabc408;},_0x18b9c9[_0x5bb641(0x32a)][_0x5bb641(0x4b0)]=function(_0x470612,_0x1fd648,_0x4cad7d,_0x340481){var _0x49f4c4=_0x5bb641;this[_0x49f4c4(0x54d)][_0x49f4c4(0x4cd)](_0x49f4c4(0x373)+_0x340481+'\x22\x20style=\x22position:absolute;top:'+(_0x4cad7d-0xa)+'px;left:'+_0x1fd648+_0x49f4c4(0x182)+WgHelpers[_0x49f4c4(0x248)](_0x470612)+_0x49f4c4(0x399));},_0x18b9c9[_0x5bb641(0x496)]=function(_0x14c3ad,_0xc9efa8){var _0x342b27=_0x5bb641,_0x3369cd=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;_0x14c3ad=_0x14c3ad[_0x342b27(0x2b3)](_0x3369cd,function(_0x43c0f7,_0x11329c,_0x39a34f,_0x23abae){return _0x11329c+_0x11329c+_0x39a34f+_0x39a34f+_0x23abae+_0x23abae;});var _0x975b79=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[_0x342b27(0x414)](_0x14c3ad),_0x4b7370={'r':parseInt(_0x975b79[0x1],0x10),'g':parseInt(_0x975b79[0x2],0x10),'b':parseInt(_0x975b79[0x3],0x10)};return _0x342b27(0x36c)+_0x4b7370['r']+','+_0x4b7370['g']+','+_0x4b7370['b']+','+_0xc9efa8+')';},_0x18b9c9[_0x5bb641(0x17b)]=function(_0x354454,_0x114e59,_0x12da56,_0x2df7d3,_0x556450){var _0x2e727c=_0x5bb641,_0xcadd36=$('#'+_0x114e59),_0x349500=$('#'+_0x556450),_0x11280d=$('#'+_0x12da56),_0x3faa0d=$('#'+_0x2df7d3);_0x11280d[_0x2e727c(0x444)]('a')[_0x2e727c(0x442)](function(_0x3871fd,_0x1ff2ae){var _0x2d6cfe=_0x2e727c;$(_0x1ff2ae)[_0x2d6cfe(0x4eb)]('active');}),_0x3faa0d[_0x2e727c(0x42f)](_0x2e727c(0x58e)),_0xcadd36[_0x2e727c(0x444)](_0x2e727c(0x172))['each'](function(_0x34a2c5,_0x51346e){var _0x34b5a3=_0x2e727c;$(_0x51346e)[_0x34b5a3(0x2df)](_0x34b5a3(0x573),'none');}),_0x349500[_0x2e727c(0x2df)]('display',_0x2e727c(0x2e3)),window[_0x354454]();},_0x18b9c9;}(),TabsHelper=function(){var _0x3a25b5=a0_0x11f3d7;function _0x3db741(){}return _0x3db741[_0x3a25b5(0x385)]=function(){var _0x1b35b0=_0x3a25b5;$(_0x1b35b0(0x572))['unbind']('click'),$('.tabs[data-tab]\x20.tab')['click'](function(_0xbf8a20){var _0x239969=_0x1b35b0;return _0x3db741[_0x239969(0x38f)](_0xbf8a20[_0x239969(0x2e4)]),!![];}),$(_0x1b35b0(0x1e7))[_0x1b35b0(0x37a)](function(_0xe0b620){var _0x5eb4f9=_0x1b35b0,_0x421b75=$(_0xe0b620[_0x5eb4f9(0x2e4)])[_0x5eb4f9(0x279)](_0x5eb4f9(0x48e));return $(_0x5eb4f9(0x2d8)+_0x421b75+'\x22]')[_0x5eb4f9(0x37a)](),!![];});if(location[_0x1b35b0(0x395)]){var _0x5cbcd2=$(_0x1b35b0(0x2d8)+location[_0x1b35b0(0x395)]['substring'](0x1)+'\x22]');_0x5cbcd2[_0x1b35b0(0x593)]>0x0&&_0x3db741[_0x1b35b0(0x38f)](_0x5cbcd2);}},_0x3db741[_0x3a25b5(0x38f)]=function(_0x272a1c){var _0x3900ed=_0x3a25b5,_0x470c4a=$(_0x272a1c)[_0x3900ed(0x35e)](_0x3900ed(0x37e))[_0x3900ed(0x279)](_0x3900ed(0x48e)),_0x5183c0=!!$(_0x272a1c)[_0x3900ed(0x35e)]('.tab')[_0x3900ed(0x279)](_0x3900ed(0x303)),_0x314563=!$(_0x272a1c)[_0x3900ed(0x35e)]('.tab')[0x0][_0x3900ed(0x423)](_0x3900ed(0x374)),_0x500867=$(_0x272a1c)[_0x3900ed(0x4bf)](),_0x288e21=$(_0x3900ed(0x3ad)+_0x470c4a+'\x22]');_0x288e21[_0x3900ed(0x35e)](_0x3900ed(0x53e))['find'](_0x3900ed(0x37e))['removeClass'](_0x3900ed(0x58e)),_0x288e21[_0x3900ed(0x35e)]('.tab')['addClass'](_0x3900ed(0x58e)),_0x288e21[_0x3900ed(0x35e)]('.tabs[data-tab]')[_0x3900ed(0x309)]()[_0x3900ed(0x4f4)](_0x3900ed(0x44d))['children'](_0x3900ed(0x362))[_0x3900ed(0x4eb)](_0x3900ed(0x58e)),$(_0x3900ed(0x3b4)+_0x470c4a+_0x3900ed(0x2d2))[_0x3900ed(0x42f)]('active');_0x314563&&(location[_0x3900ed(0x395)]='#'+_0x470c4a);if(_0x5183c0){var _0xf41c07=$(_0x272a1c)[_0x3900ed(0x4bf)]();window['scrollBy'](0x0,_0xf41c07[_0x3900ed(0x4c5)]-_0x500867['top']);}initGraph&&setTimeout(initGraph,0x14);},_0x3db741;}();TabsHelper[a0_0x11f3d7(0x385)]();var WaitableVariable=function(){var _0x193bed=a0_0x11f3d7;function _0x4e20e4(){var _0x201c28=a0_0x20be,_0x12283d=this;this[_0x201c28(0x51f)]=null,this[_0x201c28(0x18e)]=new window['Promise'](function(_0x46f4c4){_0x12283d['_resolver']=_0x46f4c4;});}return _0x4e20e4['prototype'][_0x193bed(0x299)]=function(){var _0xf169e1=_0x193bed;return this[_0xf169e1(0x18e)];},_0x4e20e4[_0x193bed(0x32a)][_0x193bed(0x218)]=function(){var _0x2218e3=_0x193bed;return this[_0x2218e3(0x51f)];},_0x4e20e4[_0x193bed(0x32a)][_0x193bed(0x39e)]=function(_0xebe7f8){var _0x57ca55=_0x193bed;this['_variable']=_0xebe7f8,this['_resolver'](this[_0x57ca55(0x51f)]);},_0x4e20e4;}();function initSortableTables(){var _0x5085d3=a0_0x11f3d7;$(_0x5085d3(0x406))[_0x5085d3(0x442)](function(_0x17644b,_0x582a5b){var _0x54d53f=_0x5085d3,_0x28b6b5=$(_0x582a5b),_0x4db972=$(_0x28b6b5[_0x54d53f(0x444)]('td')[0x0]);_0x4db972['text']()['trim']()=='1.'?_0x28b6b5[_0x54d53f(0x37c)](_0x54d53f(0x50a),0x1):_0x28b6b5[_0x54d53f(0x37c)](_0x54d53f(0x50a),0x0);var _0x16ac49=$(_0x28b6b5['find']('tr.see_more_hidden_button_row'))['length']>0x0?$(_0x28b6b5)[_0x54d53f(0x444)]('tr')[_0x54d53f(0x415)](_0x54d53f(0x4bb))[_0x54d53f(0x593)]-0x2:0x0;_0x28b6b5[_0x54d53f(0x37c)](_0x54d53f(0x4dd),_0x16ac49);}),$(_0x5085d3(0x555))['each'](function(_0x3a3e95,_0xac6d4f){var _0x3d8804=_0x5085d3,_0x477cc7=$(_0xac6d4f)[_0x3d8804(0x312)](_0x3d8804(0x4ac)),_0x1031c5=$(this),_0x3ae544=0x0;_0x1031c5[_0x3d8804(0x49f)]('th')['each'](function(){var _0x327bc8=_0x3d8804;_0x3ae544+=this[_0x327bc8(0x371)];}),_0x1031c5[_0x3d8804(0x28a)]('reverse_order')&&_0x1031c5[_0x3d8804(0x42f)]('reverse_order_by_default'),_0x1031c5[_0x3d8804(0x37a)](function(_0x4636ec){var _0x18ff0c=_0x3d8804,_0x47db2a=!!_0x477cc7['data']('first-column-rank'),_0x52d480=_0x477cc7[_0x18ff0c(0x37c)](_0x18ff0c(0x4dd)),_0x1775d4=!!_0x477cc7[_0x18ff0c(0x444)](_0x18ff0c(0x413))[_0x18ff0c(0x593)],_0xb46604,_0xb24506;$(_0x4636ec['target'])[_0x18ff0c(0x28a)]('current_sort_column')?_0xb46604=!$(_0x4636ec[_0x18ff0c(0x2e4)])['hasClass'](_0x18ff0c(0x169)):_0xb46604=$(_0x4636ec['target'])[_0x18ff0c(0x28a)](_0x18ff0c(0x169));_0xb46604?$(_0x4636ec['target'])[_0x18ff0c(0x42f)](_0x18ff0c(0x169)):$(_0x4636ec[_0x18ff0c(0x2e4)])[_0x18ff0c(0x4eb)]('reverse_order');_0x477cc7[_0x18ff0c(0x444)]('th.current_sort_column')[_0x18ff0c(0x4eb)]('current_sort_column'),$(_0x4636ec[_0x18ff0c(0x2e4)])[_0x18ff0c(0x42f)](_0x18ff0c(0x15c));$(_0x4636ec['target'])['hasClass'](_0x18ff0c(0x366))&&(_0xb24506=!![]);_0x477cc7[_0x18ff0c(0x444)]('td')[_0x18ff0c(0x1cc)](function(_0x36177e){var _0x3dbcf1=_0x18ff0c,_0x92b72d=$(this)['parent']('tr')[_0x3dbcf1(0x28a)]('see_more_hidden_button_row');return $(this)['index']()===_0x3ae544&&!_0x92b72d;})[_0x18ff0c(0x442)](function(_0x4599a5,_0x4c9a45){var _0x58a576=_0x18ff0c,_0x4a04b6=$(_0x4c9a45)['data'](_0x58a576(0x35d));if(typeof _0x4a04b6==_0x58a576(0x507)){var _0x2e230f=$(_0x4c9a45)['find'](_0x58a576(0x2a2));_0x2e230f[_0x58a576(0x593)]>0x0?_0x4a04b6=_0x2e230f['data'](_0x58a576(0x16d)):(_0x4a04b6=$(_0x4c9a45)[_0x58a576(0x178)]()[_0x58a576(0x41d)](),_0x4a04b6=='-'&&(_0x4a04b6='0'),_0x4a04b6[_0x58a576(0x261)]('%')!==-0x1&&(_0x4a04b6=_0x4a04b6[_0x58a576(0x209)](0x0,_0x4a04b6['indexOf']('%'))[_0x58a576(0x41d)]()),_0x4a04b6['indexOf']('+')===0x0&&(_0x4a04b6=_0x4a04b6[_0x58a576(0x209)](0x1)['trim']())),$(_0x4c9a45)[_0x58a576(0x37c)](_0x58a576(0x35d),_0x4a04b6);}})[_0x18ff0c(0x394)](function(_0x232064,_0x3aae3c){var _0x373335=_0x18ff0c,_0x104b94=$(_0x232064)[_0x373335(0x37c)]('sort-value'),_0x22dd19=$(_0x3aae3c)[_0x373335(0x37c)](_0x373335(0x35d));return $[_0x373335(0x3d1)](_0x104b94)&&$[_0x373335(0x3d1)](_0x22dd19)&&(_0x104b94=parseFloat(_0x104b94),_0x22dd19=parseFloat(_0x22dd19),_0xb24506&&(_0x104b94=Math[_0x373335(0x3a0)](_0x104b94),_0x22dd19=Math[_0x373335(0x3a0)](_0x22dd19))),_0x104b94<_0x22dd19?_0xb46604?0x1:-0x1:_0xb46604?-0x1:0x1;},function(){var _0x4a2b07=_0x18ff0c;return this[_0x4a2b07(0x4fd)];});var _0x429064=_0x477cc7[_0x18ff0c(0x444)]('tr');_0x52d480&&_0x1775d4&&_0x429064[_0x18ff0c(0x442)](function(_0x8e17b7,_0x1cc1f3){var _0x4dfc9c=_0x18ff0c;_0x8e17b7>=0x1&&(_0x8e17b7<=_0x52d480?$(_0x1cc1f3)[_0x4dfc9c(0x4eb)]('see_more_hidden'):!$(_0x1cc1f3)[_0x4dfc9c(0x28a)](_0x4dfc9c(0x428))&&!$(_0x1cc1f3)[_0x4dfc9c(0x28a)](_0x4dfc9c(0x251))&&$(_0x1cc1f3)['addClass'](_0x4dfc9c(0x428)));});if(_0x47db2a){var _0x20e3cb=$(_0x4636ec['target'])[_0x18ff0c(0x28a)]('reverse_order_by_default'),_0x4c5a29=_0x429064['length'];_0x429064[_0x18ff0c(0x442)](function(_0x3f5323,_0x26e0df){var _0x4baa85=_0x18ff0c;if(!$(_0x26e0df)[_0x4baa85(0x28a)](_0x4baa85(0x251))){var _0x3e5f1c=$(_0x26e0df)[_0x4baa85(0x444)]('td');if(_0x3e5f1c[_0x4baa85(0x593)]>0x0){var _0x388600=$(_0x3e5f1c[0x0]),_0x3f2fe5;_0x20e3cb?_0x3f2fe5=_0xb46604?_0x3f5323:_0x4c5a29-_0x3f5323-0x1:_0x3f2fe5=_0xb46604?_0x4c5a29-_0x3f5323-0x1:_0x3f5323,_0x388600['text'](_0x3f2fe5+'.');}}});}initProgressBars();});});}initSortableTables();var AjaxState=function(){function _0x13e6c9(){}return _0x13e6c9;}(),AjaxManager=function(){var _0x1ab38a=a0_0x11f3d7;function _0x2ab456(_0x4396ab,_0x24a774){var _0x2a97a8=a0_0x20be;this['pageStatus']=_0x4396ab,this[_0x2a97a8(0x2f2)]=_0x24a774,this['initLinksOnClick'](),this['initOnPrevious']();}return _0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x3f6)]=function(){var _0x4f0cd9=_0x1ab38a,_0x318dbc=this;window[_0x4f0cd9(0x1df)]=function(_0xd9a62b){var _0x3d02b1=_0x4f0cd9;if(_0xd9a62b[_0x3d02b1(0x523)]){var _0x40eebc=_0xd9a62b['state'][_0x3d02b1(0x58f)],_0x289129=_0x3d02b1(0x229)+_0x40eebc,_0x1d8143=$(_0x3d02b1(0x27b)+_0x40eebc+'\x22]');_0x318dbc[_0x3d02b1(0x21c)]=_0xd9a62b[_0x3d02b1(0x523)][_0x3d02b1(0x21c)],_0x318dbc[_0x3d02b1(0x4b7)](),_0x1d8143[_0x3d02b1(0x442)](function(_0x3ddf83,_0x1b615c){var _0x421b85=_0x3d02b1;_0x318dbc[_0x421b85(0x3d0)](_0x1b615c);}),_0x318dbc['updateFiltersVisibility'](),_0x318dbc[_0x3d02b1(0x206)](_0x40eebc),_0x318dbc['doAjax'](_0x289129);}};},_0x2ab456[_0x1ab38a(0x32a)]['initLinksOnClick']=function(){var _0x2b31f8=_0x1ab38a,_0x15dfbd=this;$(_0x2b31f8(0x164))['each'](function(_0x26d395,_0x32cb95){var _0x506e07=_0x2b31f8;$(_0x32cb95)[_0x506e07(0x44a)]('click'),$(_0x32cb95)['click'](function(_0xf47b0a){var _0x518c5c=_0x506e07,_0x15281d=_0x32cb95[_0x518c5c(0x4b6)],_0x1eae55=_0x518c5c(0x229)+_0x15281d;_0x15dfbd[_0x518c5c(0x4c0)](_0x15281d,_0x15dfbd[_0x518c5c(0x127)]()),_0x15dfbd[_0x518c5c(0x47a)](_0x32cb95),_0x15dfbd[_0x518c5c(0x4b7)]();var _0x5393b6=$(_0x518c5c(0x27b)+_0x15281d+'\x22]');_0x5393b6[_0x518c5c(0x442)](function(_0x5199ce,_0x9ccbe6){_0x15dfbd['updateFiltersHeadersAndActive'](_0x9ccbe6);}),_0x15dfbd['sendAdditionalOnClickEvents'](_0x32cb95),_0x15dfbd[_0x518c5c(0x3ba)](),_0x15dfbd[_0x518c5c(0x206)](_0x15281d),_0x15dfbd['doAjax'](_0x1eae55),history[_0x518c5c(0x14c)](_0x15dfbd[_0x518c5c(0x127)](),null,null),_0xf47b0a[_0x518c5c(0x488)]();});});},_0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x582)]=function(_0x1928b5){},_0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x4c0)]=function(_0x40fe93,_0x39975d){var _0x12b374=_0x1ab38a;history&&history[_0x12b374(0x2d1)]?(history[_0x12b374(0x14c)](_0x39975d,null,null),history[_0x12b374(0x2d1)](null,null,_0x40fe93)):window[_0x12b374(0x569)][_0x12b374(0x4e9)]=_0x40fe93;},_0x2ab456['prototype'][_0x1ab38a(0x127)]=function(){var _0x21e952=_0x1ab38a;return{'targetUrl':location['pathname']+location[_0x21e952(0x287)],'pageStatus':clone(this[_0x21e952(0x21c)])};},_0x2ab456['prototype'][_0x1ab38a(0x2f5)]=function(_0x3ae6b6){var _0xa8bccc=_0x1ab38a,_0x4afd08=this;_0x2ab456[_0xa8bccc(0x55b)](),this[_0xa8bccc(0x1f8)]&&this[_0xa8bccc(0x1f8)][_0xa8bccc(0x3cb)](),this[_0xa8bccc(0x1f8)]=$[_0xa8bccc(0x3f8)](_0x3ae6b6)[_0xa8bccc(0x452)](function(_0x57b210,_0x492bb8,_0x3162e1){var _0x4ae7e9=_0xa8bccc,_0x4ca5d9=$(window)['scrollTop']();_0x57b210=_0x57b210[_0x4ae7e9(0x2b3)](/var isPartial([ ]*)=([ ]*)0;/g,_0x4ae7e9(0x355)),$(_0x4ae7e9(0x4f6))[_0x4ae7e9(0x318)](_0x57b210),window[_0x4ae7e9(0x38a)]=!![],_0x4afd08['initAfterUpdate'](),_0x2ab456[_0x4ae7e9(0x422)]();var _0x3458ad=_0x3162e1[_0x4ae7e9(0x563)](_0x4ae7e9(0x13a)),_0x1442eb=_0x3162e1[_0x4ae7e9(0x563)]('X-Matches-Count-Timeframe'),_0x53e95c=_0x3162e1[_0x4ae7e9(0x563)](_0x4ae7e9(0x2f7));_0x3458ad&&(_0x1442eb||_0x53e95c)&&($(_0x4ae7e9(0x1b6))[_0x4ae7e9(0x318)](_0x3458ad[_0x4ae7e9(0x2b3)](/\B(?=(\d{3})+(?!\d))/g,',')),_0x1442eb&&$(_0x4ae7e9(0x236))[_0x4ae7e9(0x318)](_0x2ab456[_0x4ae7e9(0x3ae)](_0x1442eb)),_0x53e95c&&$('#matchesCountDayNumber')[_0x4ae7e9(0x318)](_0x53e95c)),Foundation[_0x4ae7e9(0x210)][_0x4ae7e9(0x39b)][_0x4ae7e9(0x2ef)](),window['scrollBy'](0x0,_0x4ca5d9-$(window)[_0x4ae7e9(0x1af)]());});},_0x2ab456['prototype'][_0x1ab38a(0x47a)]=function(_0x2e4271){var _0x132897=_0x1ab38a,_0x59bf22=$(_0x2e4271),_0x21b40f=_0x59bf22[_0x132897(0x279)]('data-filters-fixed');if(_0x21b40f){var _0x4df2d5=_0x21b40f[_0x132897(0x317)]('=');this['pageStatus'][_0x4df2d5[0x0]['trim']()]=_0x4df2d5[0x1]['trim']();}},_0x2ab456[_0x1ab38a(0x32a)]['updateFiltersHeadersAndActive']=function(_0x4f7812){var _0x5bc1b3=_0x1ab38a,_0x3ffbec=$(_0x4f7812)[_0x5bc1b3(0x312)]('.dropdown')[_0x5bc1b3(0x279)]('id'),_0xb4ab27=$(_0x4f7812)[_0x5bc1b3(0x312)](_0x5bc1b3(0x25a))[_0x5bc1b3(0x444)](_0x5bc1b3(0x153)+_0x3ffbec+'\x22]')[_0x5bc1b3(0x312)](_0x5bc1b3(0x4af))[_0x5bc1b3(0x3a5)](),_0x289d21=_0xb4ab27['find'](_0x5bc1b3(0x15d))[_0x5bc1b3(0x3a5)]();if(_0x289d21[_0x5bc1b3(0x593)]){var _0x252957=$(_0x4f7812)['find']('img'),_0x1c6635=_0x252957['length']?_0x252957[0x0][_0x5bc1b3(0x3c5)]:'',_0x469c6f=_0x1c6635[_0x5bc1b3(0x261)](_0x5bc1b3(0x3fd))>-0x1?_0x1c6635[_0x5bc1b3(0x2b3)](/(champion-[0-9]+)-([0-9]+)/,'$1'+_0x5bc1b3(0x139))[_0x5bc1b3(0x2b3)](/"36"/g,_0x5bc1b3(0x3ec))[_0x5bc1b3(0x2b3)](/"30"/g,_0x5bc1b3(0x3ec)):_0x1c6635['replace'](/36/g,'24')[_0x5bc1b3(0x2b3)](/30/g,'24'),_0xd6bc4d=$(_0x4f7812)[_0x5bc1b3(0x37c)](_0x5bc1b3(0x155)),_0x18b12f=$(_0x4f7812)['text']()[_0x5bc1b3(0x41d)](),_0xc30b8d=_0x289d21[_0x5bc1b3(0x444)]('i')[0x0]['outerHTML'];_0xd6bc4d?_0x289d21[_0x5bc1b3(0x318)](_0xd6bc4d+'\x20'+_0xc30b8d):_0x289d21[_0x5bc1b3(0x318)](_0x469c6f+'\x20'+_0x18b12f+'\x20'+_0xc30b8d);var _0x2e0ce0=$(_0x4f7812)[_0x5bc1b3(0x312)]('ul')[_0x5bc1b3(0x444)](_0x5bc1b3(0x469));_0x2e0ce0['each'](function(){var _0x463d0e=_0x5bc1b3;$(this)[_0x463d0e(0x4eb)]('current');}),$(_0x4f7812)['parent']('li')[_0x5bc1b3(0x42f)](_0x5bc1b3(0x18a));}},_0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x4b7)]=function(){var _0x52e087=_0x1ab38a,_0x4a76f4=this;$(_0x52e087(0x16e))['each'](function(_0x55a695,_0x56c1ba){var _0xe9b7e9=_0x52e087,_0x42650a=$(_0x56c1ba),_0xed108e=clone(_0x4a76f4[_0xe9b7e9(0x21c)]),_0x455ce0=_0x42650a[_0xe9b7e9(0x279)]('data-filters-fixed');if(_0x455ce0){var _0x3b29ba=_0x455ce0[_0xe9b7e9(0x317)]('=');_0xed108e[_0x3b29ba[0x0][_0xe9b7e9(0x41d)]()]=_0x3b29ba[0x1][_0xe9b7e9(0x41d)]();}var _0x1f64b2=!!_0x42650a['attr'](_0xe9b7e9(0x2a9));_0x42650a[_0xe9b7e9(0x279)]('href',_0x4a76f4['getUrl'](_0x4a76f4['pageStatus']['lang'],_0x4a76f4[_0xe9b7e9(0x21c)][_0xe9b7e9(0x477)],_0x4a76f4[_0xe9b7e9(0x21c)]['section'],_0x4a76f4[_0xe9b7e9(0x21c)]['page'],_0x4a76f4[_0xe9b7e9(0x2f2)],_0xed108e,!_0x1f64b2));}),$(_0x52e087(0x433))[_0x52e087(0x442)](function(_0x259cb5,_0x106667){var _0x4c4987=_0x52e087,_0x5e65a5=$(_0x106667),_0x1a9a46=_0x5e65a5[_0x4c4987(0x279)](_0x4c4987(0x53b))||_0x4a76f4['pageStatus'][_0x4c4987(0x477)],_0xe420ee=_0x5e65a5[_0x4c4987(0x279)](_0x4c4987(0x19e))||_0x4a76f4[_0x4c4987(0x21c)][_0x4c4987(0x1a5)],_0x12f7a1=_0x5e65a5['attr'](_0x4c4987(0x47c))||_0x4a76f4['pageStatus'][_0x4c4987(0x337)],_0x49883a=clone(_0x4a76f4[_0x4c4987(0x21c)]),_0x91f2a=_0x5e65a5['attr'](_0x4c4987(0x204)),_0x29ba77=_0x91f2a?_0x91f2a[_0x4c4987(0x2b3)](/[ ]+/g,'')[_0x4c4987(0x317)](','):[];_0x5e65a5[_0x4c4987(0x279)](_0x4c4987(0x4e9),_0x4a76f4[_0x4c4987(0x258)](_0x4a76f4[_0x4c4987(0x21c)]['lang'],_0x1a9a46,_0xe420ee,_0x12f7a1,_0x29ba77,_0x49883a,![]));}),$(_0x52e087(0x58b))[_0x52e087(0x442)](function(_0x3261ee,_0x51adec){var _0x33314b=_0x52e087,_0x1418c6=$(_0x51adec);if(!/^http/['test'](_0x1418c6[_0x33314b(0x279)]('href'))){var _0x2c07d7=_0x1418c6[_0x33314b(0x279)]('data-link-game')||_0x4a76f4[_0x33314b(0x21c)][_0x33314b(0x477)],_0x5c4517=_0x1418c6[_0x33314b(0x279)]('data-link-section')||_0x4a76f4['pageStatus'][_0x33314b(0x1a5)],_0x5cc910=_0x1418c6['attr'](_0x33314b(0x47c))||_0x4a76f4['pageStatus'][_0x33314b(0x337)],_0x1a0416=clone(_0x4a76f4[_0x33314b(0x21c)]),_0xa9df7c=_0x1418c6[_0x33314b(0x279)](_0x33314b(0x129));if(_0xa9df7c){var _0x5d1e38=_0xa9df7c[_0x33314b(0x317)]('=');_0x1a0416[_0x5d1e38[0x0]['trim']()]=_0x5d1e38[0x1][_0x33314b(0x41d)]();}var _0x38d55f=_0x1418c6['attr'](_0x33314b(0x204)),_0x41d6bf=_0x38d55f?_0x38d55f[_0x33314b(0x2b3)](/[ ]+/g,'')[_0x33314b(0x317)](','):[];_0x1418c6[_0x33314b(0x279)](_0x33314b(0x4e9),_0x4a76f4[_0x33314b(0x258)](_0x4a76f4['pageStatus']['lang'],_0x2c07d7,_0x5c4517,_0x5cc910,_0x41d6bf,_0x1a0416,![]));}});},_0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x47d)]=function(){var _0x2e4e45=_0x1ab38a;this[_0x2e4e45(0x4ce)](),initPopupButtonOnClick(),TooltipManager['closeTooltip'](),TooltipManager[_0x2e4e45(0x37d)](),initGraph(),SeeMoreHelper[_0x2e4e45(0x513)](),SeeMoreAjaxHelper['seeMoreInit'](),initSortableTables(),this['initAdditionalModules']();},_0x2ab456['prototype'][_0x1ab38a(0x206)]=function(_0x13b6cb){},_0x2ab456[_0x1ab38a(0x55b)]=function(){var _0x27a048=_0x1ab38a;$(_0x27a048(0x4b2))[_0x27a048(0x42f)](_0x27a048(0x2fe));},_0x2ab456[_0x1ab38a(0x422)]=function(){var _0x2b4762=_0x1ab38a;$(_0x2b4762(0x4b2))[_0x2b4762(0x4eb)](_0x2b4762(0x2fe));},_0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x3db)]=function(){},_0x2ab456[_0x1ab38a(0x32a)][_0x1ab38a(0x258)]=function(_0x34a310,_0x15309f,_0x43820f,_0xc20887,_0x11e6fa,_0x10f6b7,_0x3589ee){return null;},_0x2ab456['prototype'][_0x1ab38a(0x3ba)]=function(){},_0x2ab456[_0x1ab38a(0x3ae)]=function(_0x431100){var _0x172a6f=_0x1ab38a;return decodeURIComponent(atob(_0x431100)[_0x172a6f(0x317)]('')[_0x172a6f(0x208)](function(_0x3099e6){var _0x13d53f=_0x172a6f;return'%'+('00'+_0x3099e6[_0x13d53f(0x14e)](0x0)[_0x13d53f(0x3b8)](0x10))[_0x13d53f(0x508)](-0x2);})[_0x172a6f(0x4c6)](''));},_0x2ab456;}(),DateHelper=function(){var _0x2e0fbf=a0_0x11f3d7;function _0x6b08d5(){}return _0x6b08d5[_0x2e0fbf(0x4be)]=function(){var _0x38d147=_0x2e0fbf;$(_0x38d147(0x3bd))[_0x38d147(0x442)](function(_0xaea9b7,_0x3fe0e8){var _0x54f78c=_0x38d147,_0x463b57=$(_0x3fe0e8),_0xabc4cc=_0x463b57[_0x54f78c(0x37c)](_0x54f78c(0x42c));_0x463b57[_0x54f78c(0x178)](new Date(_0xabc4cc)[_0x54f78c(0x483)]());}),$(_0x38d147(0x36a))[_0x38d147(0x442)](function(_0x5cbd1a,_0x3630c2){var _0x331c63=$(_0x3630c2),_0x493b9f=_0x331c63['data']('timestamp-time');_0x331c63['text'](new Date(_0x493b9f)['toLocaleTimeString']());}),$(_0x38d147(0x270))[_0x38d147(0x442)](function(_0x31d9fa,_0x11d153){var _0x4a0464=_0x38d147,_0x59e33e=$(_0x11d153),_0x37557a=_0x59e33e['data'](_0x4a0464(0x46c));_0x59e33e[_0x4a0464(0x178)](new Date(_0x37557a)['toLocaleDateString']());});},_0x6b08d5;}();DateHelper[a0_0x11f3d7(0x4be)]();var SeeMoreHelper=function(){var _0x33f3f2=a0_0x11f3d7;function _0x319bfa(){}return _0x319bfa[_0x33f3f2(0x513)]=function(){var _0x161428=_0x33f3f2;$(_0x161428(0x35f))[_0x161428(0x442)](function(_0x16805a,_0x118eab){var _0x14f4bf=_0x161428,_0x106718=$(_0x118eab)[_0x14f4bf(0x312)](_0x14f4bf(0x4ac));_0x118eab[_0x14f4bf(0x30f)]=function(_0x32d3f0){var _0x42741f=_0x14f4bf;_0x106718[_0x42741f(0x444)]('.see_more_hidden_button_row')['each'](function(_0x579286,_0x2b310d){var _0x349118=_0x42741f;$(_0x2b310d)[_0x349118(0x2df)](_0x349118(0x573),_0x349118(0x205));}),_0x106718[_0x42741f(0x444)](_0x42741f(0x4bb))[_0x42741f(0x442)](function(_0x106fd5,_0x204b79){var _0x40c8bc=_0x42741f;$(_0x204b79)[_0x40c8bc(0x444)]('img[data-src]')[_0x40c8bc(0x442)](function(_0x3eabde,_0x300f1c){var _0x53ec7d=_0x40c8bc;$(_0x300f1c)[_0x53ec7d(0x279)](_0x53ec7d(0x543),$(_0x300f1c)[_0x53ec7d(0x37c)](_0x53ec7d(0x543)));}),$(_0x204b79)[_0x40c8bc(0x4eb)](_0x40c8bc(0x428));}),initProgressBars(),Foundation[_0x42741f(0x210)][_0x42741f(0x39b)][_0x42741f(0x2ef)]();};});},_0x319bfa;}();SeeMoreHelper[a0_0x11f3d7(0x513)]();function a0_0x3b48(){var _0x314c02=['saveActivatedComps','table\x20tbody','mouseenter.TftOverwolfManager','options','overwolf-width',';overflow:hidden\x22>','newValue',')</span></div>','.lfgListFilterSearchButton','table','#traitBonusList\x20.bonus','allChampions','.filter','drawSoloText','lineWidth','.spinnerContainer','2098gFHApy','onItemClick','.filterHeaderText','pathname','updateLinks','refreshDelay','initMouseBackNextButtons','initSendPageloadEvent\x20done','.see_more_hidden','#selectedChampionList\x20.teamContainer','/champions/items','updateDates','offset','saveState','timeoutCounter','form','tournaments','min','top','join','getRandomNumber','.see_more_ajax_button_row','#tftTeamBuilder\x20.importButton','even','RecentGames\x20Filter\x20button\x20clicked','getMaxValue','append','initLinksOnClick','#lfgListContainer','/lor/overwolf/decks','onkeyup','#itemSummaryDefault','.requireTooltip','/overwolf/save-lfg-invite','updateAddButtonIfExists','ops','initItemsMouseOverEvents','sendGaPageView','loadAd','onFocus','summoner-name','setCookie','see-more-row-counts','FF\x200%,\x20','/api/replay-infos/','summoners','invitesSent','.multiColumnsFilterDropdown\x20li:visible\x20a','/match/','/img/d/lor/cards/','closeDropdowns','pureselect-name','/api/search-lor/','getChampionLink','href','toArray','removeClass','/summoner/behavior/','#tftOverwolfItemsBar\x20.combinedItemContainer','#cardSearchFilters\x20input[type=\x22checkbox\x22]:checked','Adblock\x20IS\x20detected','itemId2','Cannot\x20find\x20data\x20for\x20slug\x20','style','visible','children','/img/d/tft/champions/','#mainContent','<tr>','TFT2:\x20Cannot\x20find\x20data\x20for\x20slug\x20\x27','getElementDepth','updateUrlHash','font-style','.userInviteButton\x20.fa-user-plus','parentNode','.baseItemContainer','changeCardCount','pros','index','data-maxvalue','traitId2','/decks-partial','apply','onChange','undefined','slice','loadDataFromForm','first-column-rank','\x27)\x20this.src\x20=\x20\x27','Search','goToLfgForm','touchmove.tooltipManager','pageview','warn','item_1','platinum','seeMoreInit','.active[data-value]','urlLanguagePrefix',';\x20expires=','/replays/with-high-kda','/champions/runes','<div\x20class=\x22legend\x22><table><tr>','LFG','.dropdown\x20li','/lor','left','sortBy','_variable','(.+?)がロビーに参加しました','data-additional-url-base','champion-id','state','appendTo','\x22\x20title=\x22','proPlayers','startStorageListener','.historyButton','tbody','onChangeDebouced','prop','</table>','getComputedStyle','tooltipFunctionOut','getItemIdBySlug','allCards','#carousel\x20.arrowLeft','startOAuthTokenListener','sortAttributes','[data-value]','deleteProfile','send','updatePlayerLevel','data-value','#carousel\x20.arrowRight','iPod','data-link-game','toLight','querySelectorAll','.tabs[data-tab]','openNotification','currentlySelectedIndex','urlparam','sort','src','doSlide','.dropdown','hideCombinedItemsLine','load','#explanationVideoContainer\x20video','0px','champions','focus','keyCode','container','/tft/reco-api/overwolf/','4C\x2020%,\x20','/tft/reco-api/','/lor/cards','.overflow-container','div','<video\x20loop\x20muted><source\x20src=\x22https://','table.sortable_table\x20.sortable_column','<img\x20src=\x22','carouselTimeout','record_txt','push','height=\x2224\x22','enableSpinner','textContent','spectate-platform','item-id','.vsFilterSecondChampContainer','.bonus','started','Recording\x20asked','getResponseHeader','setItem','.spectatePopupLink','submit','spectate-gameid','positionMenu','location','getAllParents','gameId','.accordion','deployed','maxRecentSearchesLength','.userInviteButton[data-region=\x22','animate','recording_txt','.tabs[data-tab]\x20.tab','display','\x22\x20target=\x22_blank\x22\x20onclick=\x22WgHelpers.sendGaEvent(\x27OverwolfLinkClicked\x27,\x20\x27sidebar160x600\x27,\x20\x27','dropdown-alignment','</tr></table></div>','\x22\x20data-champion-id=\x22','blur','addText','\x27)\x22>','resetInterval','lang','px\x20\x27Open\x20Sans\x27','full-progress-bar','startListeners','off','currentTarget','sendAdditionalOnClickEvents','cleanChampionSlug','insertBefore','#traitBonusList\x20.bonus[data-trait-id=\x22','/overwolf/summoner-champions/','updateVsSwap','localRegion','Exception\x20when\x20handling\x20message\x20','#tftOverwolfItemsBar\x20.baseItemContainer','#sidebar\x20.sidebar-subnavigation\x20a,\x20#topnavbar\x20.sidebar-links\x20a','add','<img\x20src=\x22//','active','targetUrl','remove','isLocalVersionEquals','wg_recentSummoners','length','#tftOverwolfItemsBar\x20.baseItemContainer[data-item-id=\x22','call','computeState','addSummonerSeen','data-filters-fixed','charAt','/overwolf/champions-matchups','.rotatable','isTouchMoveEvent','/tft/overwolf/champions','measureText','normalize','card-cost','message','durations','tooltip-lateral-only','sendGaEvent','onChampionSearch','\x20tooltip-class=\x22no-bg\x22\x20tooltip-width=\x22240\x22\x20data-card-code=\x22','queueIds-tft','-24','X-Matches-Count','.poplight','tftPinnedComps','/lor/decks','setPrototypeOf','#tftTeamBuilder\x20.championsList\x20.goldBlock','668kLoTDV','a.close,\x20#fade','f5pressed','delayBeforeSearch','opacity','removeAttr','[saveProfile]\x20Asking\x20for\x20token\x20request\x20sent','bindEvents','maxChampions','data-current-sort-value','.columns','#spectatePopup\x20#batDownloadIframe','replaceState','unshift','charCodeAt','\x20input','Carousel\x20SlideClick','search-keywords','isRecordingUrl','a[data-dropdown=\x22','Open\x20popup','header-value','stopPropagation','Search\x20button\x20clicked','onPaste','data-additional-friend-name','name','iconUrl','current_sort_column','.filterHeader','/overwolf/replays','post','random','itemId3','drawContent','Carousel\x20LeftArrowClick','a[partial-link=\x27true\x27]','.sliderMinValue,.sliderMaxValue','click.spectate','#tftOverwolfItemsBar\x20.combinedItemsContainer','postFavoriteUpdated','reverse_order','type','border-left-width','class','value','#filters-menu\x20ul\x20a','innerHeight','pageContent','/overwolf/replays-with-high-kda','.spiderChartContainer','drop-vs','Replays','\x20<span\x20class=\x22region\x22>(','JSException','measure','text','#topnavbar','not-visible','switchSpiderCharts','getNamedItem','#lorDeckSearchFilters\x20.region.selected','copyEquivalentUrl','searchAndDisplaySuggestions','unselected','showCombinedItemsLine','px;\x22>','data-spectate-encryptionkey','nodeValue','teamChampionPictureSize','\x22\x20alt=\x22','checked','updatePlayerBoardPieces','serializeArray','current','getTime','#sidebar','#byTierGoldBlocks','_promise','Batfile\x20Download','spectateLink','.dropRateHighlighter\x20.level[data-level=\x22','#tftItemBuilder\x20.championBox','fadeOut','correctHandlingOfReplays','input','.accordion\x20dd.active.sidebar-navigation','sendNotification','tooltip-width','navigator','error','create','wg_visit','<div/>','data-link-section','7862256VEUDRI','data-initial-sort-value','#tftTeamBuilder\x20.championsList\x20.championBox','#rightStaticSlot','NightModeSwitch','tryLateralPositionning','section','always','autocompleteElement','innerText','/lor/overwolf/regions','appVersion','\x20select','.fa-user-plus','removeChild','<div\x20class=\x22txt\x22>','scrollTop','play','traitId3','data-isduration','getRecentChampions','data-minvalue','resize','#matchesCountNumber','function','<div\x20class=\x22img-align-block\x22>','currentRecoCall','postMessage','event','onItemSearch','favorites','toUTCString','onKeyNavigation','[saveProfile]\x20Asking\x20for\x20token','.championListOrder\x20.byCost','reorderOnPin','#spectatePopup\x20#macRunCode','ratings','\x22]\x20.cost','goToLfg','tooltipStack','Dropdown\x20','323nCEqUx','reverse','#equivalentUrl\x20.copied','filter','topChampions','iframeLoadedTimeout','return','values','floor','#owTftCompsContainer\x20.champsTd\x20.championIcon','disabledClosingTooltipOnOut','resetActiveSuggestion','(.+?)\x20님이\x20로비에\x20참가하셨습니다','drawGrid','openLfgPage','round','registerRecordingScheduled','setAttribute','/overwolf/summoner-behavior/','Text','#itemSummary\x20.itemDescription\x20.fromItemsColumn','</a>','onpopstate','daysSinceFirstVisit','success','innerHTML','initFallback','[data-dropdown]','/overwolf/champions-skills','[data-rel=\x22spectatePopup\x22],\x20[data-rel=\x22spectatePopup\x22]\x20button','a[data-tab-target]','POST','sendInvite','replayRefreshInfos','/img/s/all-champions-36.png\x22\x20width=\x2236\x22\x20height=\x2236\x22>','#tftItemBuilder\x20.championBox\x20img','url(\x27','/overwolf/champion-masteries','option','then','#record_button','Mac68K','replayText','.recentGamesFilterContainer\x20a[data-dropdown]','font-family','champion-ids','<div\x20style=\x22border:1px\x20solid\x20#ccc;padding:1px\x22>','currentAjaxCall','translate','createTextNode','/tft/comps','lineTo','region','tryVerticalPositionning','9111sJdYZB','Ad\x20block\x20not\x20detected','tooltip-vertical-offset','onFavoriteButtonClick','updateUrl','data-filters','none','sendPageView','classList','map','substr','<td\x20data-value=\x22','iPhone','wgresize','keys','isMobile','mousePreviousButton','libs','input[name=\x27wg_q\x27]','Android','#favoriteIcon','allTraits','<div><img\x20src=\x22','bottom','clearTeam','getValue','recent','KeyR','url','pageStatus','spectateEndpoint','onresize','/champions/skills-orders','max','deploy','ajaxSetup','(.+?)\x20left\x20the\x20lobby','querySelector','log','font-weight','(.+?)\x20joined\x20the\x20lobby','<table>','/partial','\x22][data-summoner-name=\x22','toggleClass','\x22\x20\x22-GameBaseDir=..\x22\x20-SkipBuild\x20-EnableCrashpad=true\x20-EnableLNP','createElement','labelTextSize','lol','registerRecordingFailed','\x22\x20onclick=\x22WgHelpers.sendGaEvent(\x27AutoComplete\x27,\x27Champion\x20clicked\x27,\x27Length:\x20','/overwolf/champions','Incorrect\x20count:\x20','6770323nMqXkR','fadeIn','#matchesCountTimeframe','__proto__','defaultChampionsCount','championName','stroke','traitId1','(.+?)\x20si\x20è\x20unito\x20alla\x20lobby','250px','(.+?)\x20присоединился\x20к\x20лобби','closeTooltip','tftQueueIds','summonerName','addChampionToTeam','rotate','data-champion-ids','labels','getRadius','24270AVtayP','htmlEncode','#deckListContent','slideToggle','#pageContent','switch','/download?utm_source=log-website&utm_medium=fallbackad','#fade','/summoner/challenges/','getPinnedComps','see_more_hidden_button_row','tftManager','pureselect-var','canvas','7955740ZkDmHI','filtersMenuPosition','color','getUrl','getOS','.filters-dropdown-container','showCombinedItemsDetails','Filters','disableFavorite','initInternal','table-row','recomputeSortValues','indexOf','traitId4','tooltipFunctionTouch','tooltip-var','reorderTable','data-additional-ga-id','\x22]\x20.championIcon','lastTouchedElement','ref','currentTeam','updateReco','lfgCurrentSearch','cardCode','mainContent','getCoordinates','*[data-timestamp-date]','#spectatePopup\x20#windowsPopupContent',':visible','hidden','sent','touchModeEnabled','(.+?)\x20dołącza\x20do\x20pokoju','data-ispercentage','script','attr','replaceAll','#filters-menu\x20ul\x20a[href=\x22','Sidebar','localeStrings','forEach','computeInitialValues','initDropdowns','click.addNavigationIndexToUrlsAndSendIndex','\x20clicked','onChangeInternal','includes','.recentGamesTableHeader.filtersBlock','</tr>','search','right','progress-bar-container','hasClass','mouseNextButton','ctrlKey','queueIds','tooltip-html-id','matchId','regions','getRecentSummoners','.recentGamesFilterContainer\x20.dropdown\x20a','fa-angle-down','visibility','iframeloaded','/tft/champions/','scroll','onInputChange','getPromise','oauthTokenWaitable','#mainContentSuperContainer','bonusStep','spectate-endpoint','You\x20can\x27t\x20sort\x20elements\x20if\x20any\x20one\x20is\x20a\x20descendant\x20of\x20another.','Win64','#spectatePopup\x20#macPopupContent','slug','progressbar','recordUrl','8973vcQmiq','currentTooltipElement','\x22\x20class=\x22champion-','input[autofocus]:eq(0)','isRecording','data-filters-ignore-sort','championId','Macintosh','startReplay','correctHandlingOfSeeMoreButtons','#tftTeamBuilder\x20#suggestionsBox\x20.championBox\x20.championIcon','.fa-pin','responseText','enabled','-default\x22\x20class=\x22itemIcon\x20requireTooltip\x20\x22\x20width=\x22','replace','roles','getData','plot','tooltip-height','[partial-link]','increasesTrait','allItems','sr-ranked','hasOwnProperty','replayRecordInfos','#itemSummary\x20.itemSummaryTable','SeeMoreMatches\x20button\x20clicked','[tooltip-size-limiter]','openTftCompsPage','Favorite','tooltip','\x20.fromItemsColumn:eq(0)','/img/s/lcs/default-36.jpg','Removed\x20KS\x20injection','onKeyPress','[selected]','initF5Button','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cardCost\x22\x20style=\x22background-color:\x20','Class\x20extends\x20value\x20','enableFavorite','isDarkMode','getToDisplayTooltip','Counts','drawLegend','pushState','\x22].content','#selectedChampionList','.legend','370338lUTYDu','touchstart.tooltipManager','darkMode','.tabs[data-tab]\x20.tab[data-tab-target=\x22','URL','isLocalVersionGreaterOrEqualThan','language','contentSizePercentage','/overwolf/probuilds','_160.png','css','data-additional-queue-id','run','object','block','target','key','sin','keydown','/queueId-','#selectedChampionList\x20.addButon','</th>','true','max-width','<div\x20class=\x22card\x20not-visible\x20requireTooltip\x22\x20tooltip=','</td>','reflow','showTooltip','filtersMenuIsVisible','pageFilters','toFixed','#tftOverwolfItemsBar\x20.combinedItemDetailsContainer','doAjax','tooltip-run-ondisplay','X-Matches-Count-Days','\x22\x20data-count=\x22','startWaggle','drawLegLegends','width=\x2236\x22','getDefaultChampions','regexStrings','spinner','/api/search/','fa-star','\x22\x20width=\x22160\x22\x20height=\x22600\x22\x20/></a>','Setting\x20new\x20level\x20','data-tab-scroll','clipboardData','font','onEnter','margin-bottom','initial','parent','doCopyUrl','body','Set','/championId-','Homepage','onclick','now','.fa','parents','getRecentlySeenSummoners','a[href]','searchParams','/overwolf/delete-lfg','split','html','/overwolf/post-lfg','.see_more_ajax_button','scrollTo','/overwolf/champions-stats','text-right','/champions/builds','all','closeAutoSuggest','onreadystatechange','data-mediumdeviceswidth','#selectedChampionList\x20.noChampionSelectedPlaceHolder','generateCardTooltip','iOS','<div><img\x20src=\x22//','err_msg','0.0.5','#selectedChampionList\x20.teamContent','prototype','__generator','foundation','textBaseline','\x22\x20height=\x22','tooltipFunctionOver','concat','Searching\x20for\x20players\x20with\x20filters:\x20','alreadyDisplayedCardIds','#lfgForm\x20#postResultMessage','label','data-smalldeviceswidth','#spectatePopup\x20#explanationVideoContainer','page','tftComp','0.3','Generator\x20is\x20already\x20executing.','#tftTeamBuilder\x20#suggestionsBox','Starting\x20OverwolfFavoriteManager\x20listening','iterator','Object','championsBySlug','<progressbar','stop','GET','draw','border-right-width','cursor','waggle','Linux','cost','toLowerCase','trys','axis','.championBox','[data-rel=\x22spectatePopup\x22]','<div\x20id=\x22fade\x22></div>','<td\x20class=\x22legendLabel\x22>','\x27;\x22></div>',';\x20path=/','absolute','\x22\x20height=\x2248\x22></div>','/champions/spells','var\x20isPartial\x20=\x201;','#carousel\x20.slide\x20a','LeagueHistoryButton\x20clicked','val','updateIsRecordingInfos','(.+?)\x20entrou\x20no\x20saguão','/tft/champions','getPlaceholder','sort-value','closest','.see_more_button','\x27)\x22><img\x20src=\x22//radis2.ovh/overwolf/','.multiColumnsFilterSearchField','.content','height','#filters-menu\x20.dropdown','from','absolute_sort','#itemSummary\x20.itemDescription','reload','.userInviteButton','*[data-timestamp-time]','open','rgba(','openTftChampionPage','innerWidth','tooltip-class','.teamChampion','colSpan','getFormattedPaste','<div\x20class=\x22spiderChartLegLegend\x20','data-tab-no-hash','/summoner/champions/','backgroundColor','/rankings/champion-masteries','/comp-','#fade\x20,\x20.popup_block\x20,\x20.popup','click','throw','data','initTooltips','.tab','allColors','...','addEventListener','data-spectate-link','.png\x22\x20tooltip-var=\x22tft-item-','selectedChampions','init','width=\x2224\x22','string','test','\x22\x20width=\x2236\x22\x20height=\x2236\x22\x20\x20onerror=\x22if\x20(this.src\x20!=\x20\x27','isPartial','constructor','get','Invite\x20sent','Cannot\x20find\x20item\x20with\x20slug\x20','switchTab','fa-angle-up','getPropertyValue','Adblock\x20NOT\x20detected','#filters-menu','sortElements','hash','data-fullwidthforpercentagedarkmode','getWgBoundingRectangle','paddingRight','</div>','token','equalizer','mouseleave.tooltipManager','item_3','setValue','dataset','abs','ceil','lfgListFilters','entries','number','first','<div\x20class=\x22itemIconsContainer\x22>','.multiColumnsFilterSearchField\x20input','\x20in\x20','data-decimalscount','\x22]\x20.cost[data-cost=\x22','openUrlInBrowser','game-creation','.tabs\x20.tab[data-tab-target=\x22','b64DecodeUnicode','itemId1','beginPath','lor','dropdown','/overwolf/summoner-challenges/','.tabs-content\x20[data-tab-id=\x22','overflow-y','#drop-queueids\x20li.notSr','#tooltip','toString','/overwolf/summoners','updateFiltersVisibility','carouselPosition','slideUp','*[data-timestamp]','\x22\x20height=\x220\x22\x20width=\x220\x22\x20/>','-24\x20','nextSibling','getOauthToken','filtersMenu','#recentGamesFilterFriend\x20.dropdown\x20a','button','outerHTML','hideEmptyTeamList','toDark','maxErrorsCount','strokeStyle','current-count','abort','/champions/counters','link','#lorDeckSearchFilters\x20.region','.goldBlock','updateFiltersHeadersAndActive','isNumeric','defaultGaEventProbability','updateCarouselLeft','mouseleave.TftOverwolfManager','img','\x22><span\x20class=\x22x\x22>x</span><span\x20class=\x22count\x22>','.jpg\x27)\x22>','sendRecordEvent','odd','zero-count','initAdditionalModules','isChampion','spectatePlatform','splice','filtersMenuInitialOffset','addNavigationIndexToUrlsAndSendIndex','pureSelect','getWgOffset','.championsList\x20.championBox[data-champion-id=\x22','stringify','next','Spectate','#spectatePopup\x20#replayDownloadLink','<div\x20id=\x22tooltip\x22></div>','/overwolf/lfg-partial','recordId','load.initSendPageloadEvent','\x2224\x22','data-spectate-platform','[deleteProfile]\x20Received\x20token:\x20','pop','item_2','plugins','data-spectate-endpoint','verb','/champions/jungle-paths','/summoner/','initOnPrevious','.card','ajax','\x22\x20width=\x2236\x22\x20height=\x2236\x22></div>','.cardCount','platform','(.+?)\x20ist\x20der\x20Lobby','champion','recentlySeenSummonersCount','(.+?)\x20lobiye\x20katıldı','keySummoners','/champions/builds/','SummonerPage','zoomFactor','initForwardClickEventsToParent','item-','table.sortable_table','#filters-menu\x20.dropdown\x20a[data-filters-fixed]','getBoundingClientRect','restrictNavigationToOverwolfPages','isFirstVisit','.recentGamesFilterContainer\x20.dropdown','https://porofessor.gg/img/empty.png','linkclick','.searchForm\x20input','(.+?)\x20s-a\x20alăturat\x20lobby-ului','<a\x20href=\x22','data-additional-url-run-after','Carousel\x20RightArrowClick','tr.see_more_hidden_button_row:visible','exec','not','__extends','1.1','championSlug','appendChild','keypress','closePath','.recentGamesFilterExpander','trim','isFavorite','#recentGamesFilterQueueType\x20.dropdown\x20a','/rankings/summoners','scrollLeft','disableSpinner','hasAttribute','multisearchHelper','cards','\x22>★</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cardCount\x20','substring','see_more_hidden','default','/img/s/fond_sprite.png?v=5\x22\x20alt=\x22','background-image','timestamp','disabled','cookie','addClass','\x22\x20onclick=\x22WgHelpers.sendGaEvent(\x27AutoComplete\x27,\x27Card\x20clicked\x27,\x27Length:\x20','initSendPageloadEvent','#tftOverwolfItemsBar\x20.combinedItemContainer[data-from=\x22','#filters-menu\x20.tabs\x20.tab\x20a','.recentGamesFilterContainer','max-height','tooltipGraphDD','data-additional-url','has','.card[data-card-code=\x22','updateCarouselRight','selected','spectate-link','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','#carousel\x20.slide','width','parentElement','topNavBarHeight','each','title','find','#byCostGoldBlocks','regexs','i.fa','textAlign','itemId','unbind','.championListOrder\x20.byTier','isOverwolf','.tabs-content','#selectedChampionList\x20.teamChampion','/lor/regions','getAttribute','data-additional-champion-id','done','tft','fa-star-empty','#equivalentUrl\x20.url','\x22\x20onclick=\x22WgHelpers.sendGaEvent(\x27AutoComplete\x27,\x27Recent\x20summoner\x20clicked\x27,\x27Length:\x20','?search=','/overwolf/','click.initForwardClickEventsToParent','currentPlayerLevel','parse','keyChampions','championNameWithBuild','offsetWidth','#filters-menu\x20a[data-dropdown]','__awaiter','spectate-encryptionkey','.pageBanner','#recentGamesFilterChampions\x20.dropdown\x20a','storageKey','<th>','relative','<div><i\x20class=\x22fa\x20fa-history\x22></i></div>','/champions/stats','.current','height=\x2236\x22','errorsCount','timestamp-date','#tftTeamBuilder\x20#suggestionsList','removeChampionFromTeam','\x20input[type=\x22text\x22],#','getCookie','fixed','setTime','#tftOverwolfItemsBar\x20.combinedItemDetailsContainer[data-item-id=\x22','OverwolfPageLayoutManager.run()','oauthToken','Windows','game','searchForm','getFactionColor','updatePageStatusCache','NFD','data-link-page','initAfterUpdate','createTooltipElementIfNeeded','/champions/probuilds','getContext','getItem','#cardSearchFilters\x20input[type=\x22text\x22]','toLocaleString','#cardSearchFilters\x20input','iPad','/with-','onWindowClick','preventDefault','\x22\x20/>','mouseenter.tooltipManager','text-center','javascript:','\x22]\x20.fa-user-plus','data-tab-target','startListener','observe','cardName','attributes','/overwolf/summoner/','\x22\x20data-card-cost=\x22','mutate','hexToRgba','popup','lfgForm','touchend.tooltipManager','.dropdown\x20.swapVs','computeBonusesAndReco','/lor/api/cards-search/','recentlySeenSummoners','partial-link','prevAll','#traitBonusList\x20.bonus\x20.cost','/tft/summoners','Sending\x20iframeloaded\x20message\x20to\x20parent\x20'];a0_0x3b48=function(){return _0x314c02;};return a0_0x3b48();}var SeeMoreAjaxHelper=function(){var _0x49f2fd=a0_0x11f3d7;function _0x4308ee(){}return _0x4308ee[_0x49f2fd(0x513)]=function(){var _0x3c5329=_0x49f2fd;$(_0x3c5329(0x31a))[_0x3c5329(0x44a)]('click'),$('.see_more_ajax_button')[_0x3c5329(0x52b)](_0x3c5329(0x42d),![]),$(_0x3c5329(0x31a))['click'](function(_0x2f7215){var _0x273e34=_0x3c5329;WgHelpers[_0x273e34(0x135)](_0x273e34(0x402),_0x273e34(0x2bf),'');var _0x5160b8=$(_0x2f7215[_0x273e34(0x2e4)])[_0x273e34(0x279)](_0x273e34(0x437)),_0x4461e5=$(_0x2f7215[_0x273e34(0x2e4)])['attr'](_0x273e34(0x411)),_0x23254f=$(_0x2f7215[_0x273e34(0x2e4)])[_0x273e34(0x312)](_0x273e34(0x4ac))['find'](_0x273e34(0x529)),_0x47d484=$(_0x2f7215[_0x273e34(0x2e4)])[_0x273e34(0x312)](_0x273e34(0x4c8));$(_0x2f7215[_0x273e34(0x2e4)])[_0x273e34(0x52b)](_0x273e34(0x42d),!![]),AjaxManager[_0x273e34(0x55b)](),$[_0x273e34(0x3f8)](_0x5160b8)['done'](function(_0x807cd1){var _0x49a4f3=_0x273e34;AjaxManager['disableSpinner'](),_0x47d484[_0x49a4f3(0x590)](),_0x23254f[_0x49a4f3(0x4cd)](_0x807cd1),_0x4308ee[_0x49a4f3(0x513)](),TooltipManager[_0x49a4f3(0x37d)](),initPopupButtonOnClick(),DateHelper[_0x49a4f3(0x4be)](),_0x4461e5&&eval(_0x4461e5),Foundation[_0x49a4f3(0x210)]['equalizer'][_0x49a4f3(0x2ef)]();});});},_0x4308ee;}();SeeMoreAjaxHelper[a0_0x11f3d7(0x513)](),$(a0_0x11f3d7(0x528))[a0_0x11f3d7(0x37a)](function(_0x526e01){var _0x43fa17=a0_0x11f3d7,_0xbebdb5=_0x526e01[_0x43fa17(0x2e4)],_0x22961c=$('#'+$(_0xbebdb5)[_0x43fa17(0x312)]('a')[_0x43fa17(0x37c)](_0x43fa17(0x2e4))),_0x1ec5e9=$(_0xbebdb5)['is'](_0x43fa17(0x447))?$(_0xbebdb5):$(_0xbebdb5)['find'](_0x43fa17(0x447)),_0x163d8c=_0x1ec5e9['attr'](_0x43fa17(0x16c));return $(_0xbebdb5)[_0x43fa17(0x35e)](_0x43fa17(0x12c))[_0x43fa17(0x22b)](_0x43fa17(0x243)),WgHelpers[_0x43fa17(0x135)](_0x43fa17(0x402),_0x43fa17(0x357),_0x163d8c),_0x22961c[_0x43fa17(0x24a)](0x190),initGraph(),![];}),$(a0_0x11f3d7(0x4c2))[a0_0x11f3d7(0x438)](a0_0x11f3d7(0x211))[a0_0x11f3d7(0x566)](function(){var _0x523fc4=a0_0x11f3d7,_0x108bd1=$(this)[_0x523fc4(0x189)](),_0x15a3f1=_0x108bd1[0x0][_0x523fc4(0x16d)];if(_0x15a3f1){var _0x3f7625=$(this)[_0x523fc4(0x279)](_0x523fc4(0x3f3)),_0x11c124=urlLanguagePrefix+(urlGamePrefix||'')+'/'+encodeURIComponent(_0x3f7625)+'/'+encodeURIComponent(_0x15a3f1),_0x1b257a=$(this)[_0x523fc4(0x279)]('id');WgHelpers[_0x523fc4(0x135)](_0x523fc4(0x50c),'Search\x20form:\x20'+_0x1b257a,_0x15a3f1),WgHelpers[_0x523fc4(0x4d8)](_0x11c124+_0x523fc4(0x457)+_0x15a3f1['toLocaleLowerCase']()),window[_0x523fc4(0x569)]=_0x11c124;}return![];});var ABTestHelper=function(){var _0x32e36c=a0_0x11f3d7;function _0x504927(){}return _0x504927[_0x32e36c(0x4c7)]=function(_0x4649cb){var _0xa6f5c7=_0x32e36c;if(localStorage){var _0xb2e889=parseInt(localStorage[_0xa6f5c7(0x481)](_0x504927[_0xa6f5c7(0x2e5)])||'0');return _0xb2e889==0x0&&(_0xb2e889=Math[_0xa6f5c7(0x1d1)](Math[_0xa6f5c7(0x160)]()*0x64*0x3e8*0x3e8),localStorage[_0xa6f5c7(0x564)](_0x504927['key'],_0xb2e889[_0xa6f5c7(0x3b8)]())),_0xb2e889%_0x4649cb;}},_0x504927[_0x32e36c(0x2e5)]='ABTestSeed',_0x504927;}(),VisitManager=function(){var _0x2d93bf=a0_0x11f3d7;function _0x198e82(){}return _0x198e82[_0x2d93bf(0x385)]=function(){var _0x14719d=_0x2d93bf;if(localStorage&&sessionStorage){var _0x51a8d5=Date[_0x14719d(0x310)]();!localStorage[_0x14719d(0x481)](_0x14719d(0x19c))&&localStorage['setItem'](_0x14719d(0x19c),_0x51a8d5['toString']()),!sessionStorage[_0x14719d(0x481)](_0x14719d(0x19c))&&sessionStorage[_0x14719d(0x564)]('wg_visit',_0x51a8d5[_0x14719d(0x3b8)]());}},_0x198e82[_0x2d93bf(0x1e0)]=function(){var _0x1a8512=_0x2d93bf;if(localStorage&&sessionStorage){var _0x26ac44=parseFloat(sessionStorage[_0x1a8512(0x481)]('wg_visit'))-parseFloat(localStorage[_0x1a8512(0x481)]('wg_visit'));return Math[_0x1a8512(0x1d1)](_0x26ac44/0x5265c00);}else return-0x1;},_0x198e82[_0x2d93bf(0x40a)]=function(){var _0x1c3c6b=_0x2d93bf;return localStorage&&sessionStorage?sessionStorage[_0x1c3c6b(0x481)](_0x1c3c6b(0x19c))==localStorage[_0x1c3c6b(0x481)](_0x1c3c6b(0x19c)):![];},_0x198e82;}();VisitManager[a0_0x11f3d7(0x385)]();var AppVersionHelper=function(){var _0x9fb3d8=a0_0x11f3d7;function _0x4398fd(){}return _0x4398fd[_0x9fb3d8(0x2da)]=function(_0x3db9aa){var _0x51eef5=_0x9fb3d8,_0x27bf9a=new URL(location[_0x51eef5(0x4e9)]),_0x2a1207=_0x27bf9a[_0x51eef5(0x315)]['get'](_0x51eef5(0x1aa));if(!_0x2a1207)return![];_0x2a1207==_0x51eef5(0x328)&&(_0x2a1207='9999.9999.9999.9999');var _0x20ab24=_0x2a1207[_0x51eef5(0x317)]('.')['map'](function(_0x2adbed){return parseInt(_0x2adbed);}),_0x7b470c=_0x3db9aa[_0x51eef5(0x317)]('.')[_0x51eef5(0x208)](function(_0x1a5a00){return parseInt(_0x1a5a00);});for(var _0x443280=0x0;_0x443280<0x4;_0x443280++){var _0x4a1bb3=_0x20ab24[_0x443280]||0x0,_0x212601=_0x7b470c[_0x443280]||0x0;if(_0x4a1bb3>_0x212601)return!![];if(_0x4a1bb3<_0x212601)return![];}return!![];},_0x4398fd[_0x9fb3d8(0x591)]=function(_0x25c866){var _0x5a0a08=_0x9fb3d8,_0x58d07c=new URL(location[_0x5a0a08(0x4e9)]),_0x13349c=_0x58d07c['searchParams'][_0x5a0a08(0x38c)](_0x5a0a08(0x1aa));return _0x13349c==_0x25c866;},_0x4398fd;}();disableKasperskyInjection();var DropdownsHelper=function(){var _0x4ab8d3=a0_0x11f3d7;function _0x3a1a4d(){}return _0x3a1a4d[_0x4ab8d3(0x385)]=function(){var _0x445320=_0x4ab8d3;$(document)[_0x445320(0x37a)](_0x3a1a4d[_0x445320(0x4e5)]);},_0x3a1a4d[_0x4ab8d3(0x4e5)]=function(){var _0x3e241a=_0x4ab8d3;$(_0x3e241a(0x364))['each'](function(){var _0x3f54a0=_0x3e241a;$(this)['is'](_0x3f54a0(0x272))&&$(this)[_0x3f54a0(0x2df)]({'display':_0x3f54a0(0x205)});}),$(_0x3e241a(0x40b))[_0x3e241a(0x442)](function(){var _0x51aa14=_0x3e241a;$(this)['is'](':visible')&&$(this)[_0x51aa14(0x2df)]({'display':_0x51aa14(0x205)});}),$(_0x3e241a(0x4af))[_0x3e241a(0x4eb)]('deployed');},_0x3a1a4d;}();DropdownsHelper[a0_0x11f3d7(0x385)](),$(a0_0x11f3d7(0x56c))['on']('click','dd',function(_0xb64aaa){var _0xa5edbf=a0_0x11f3d7,_0xb0f29d=$(_0xb64aaa[_0xa5edbf(0x2e4)]),_0x3e647b=_0xb0f29d['is']('a')?_0xb0f29d:_0xb0f29d[_0xa5edbf(0x4f4)]('a');if(_0x3e647b[_0xa5edbf(0x593)]&&$(_0x3e647b)[_0xa5edbf(0x37c)](_0xa5edbf(0x221))>=0x0){var _0x2f5da6=$(_0x3e647b)[_0xa5edbf(0x37c)]('link-section');return _0x2f5da6&&WgHelpers[_0xa5edbf(0x135)](_0xa5edbf(0x27c),'Accordion\x20expanded',_0x2f5da6),$(this)[_0xa5edbf(0x28a)](_0xa5edbf(0x58e))?$(_0xa5edbf(0x196))['removeClass'](_0xa5edbf(0x58e))[_0xa5edbf(0x444)](_0xa5edbf(0x362))['slideUp'](0x12c):($(_0xa5edbf(0x196))[_0xa5edbf(0x4eb)](_0xa5edbf(0x58e))[_0xa5edbf(0x444)](_0xa5edbf(0x362))[_0xa5edbf(0x3bc)](0x12c),$(this)[_0xa5edbf(0x42f)](_0xa5edbf(0x58e))[_0xa5edbf(0x444)](_0xa5edbf(0x362))['slideToggle'](0x12c)),![];}else return!![];}),$(window)[a0_0x11f3d7(0x547)](function(){var _0x380677=a0_0x11f3d7,_0x55ed42=$(_0x380677(0x18c));_0x55ed42['width'](_0x55ed42['parents'](_0x380677(0x14a))['width']()+(isDarkMode?0x0:0x0));}),$(window)[a0_0x11f3d7(0x1b5)](function(){var _0x597ad8=a0_0x11f3d7,_0x2aa9ef=$('#sidebar');_0x2aa9ef[_0x597ad8(0x43f)](_0x2aa9ef[_0x597ad8(0x312)](_0x597ad8(0x14a))['width']()+(isDarkMode?0x0:0x0));});var FiltersMenuHelper=function(){var _0x58c01c=a0_0x11f3d7;function _0xdd7da3(){}return _0xdd7da3[_0x58c01c(0x385)]=function(){var _0x3df0fe=_0x58c01c;_0xdd7da3['filtersMenu']=$(_0x3df0fe(0x393)),_0xdd7da3[_0x3df0fe(0x2f1)]=$(_0x3df0fe(0x393))['is'](_0x3df0fe(0x272)),_0xdd7da3[_0x3df0fe(0x256)]=null,_0xdd7da3[_0x3df0fe(0x26e)]=$(_0x3df0fe(0x29b)),_0xdd7da3[_0x3df0fe(0x170)]=$(_0x3df0fe(0x24b)),_0xdd7da3[_0x3df0fe(0x441)]=$(_0x3df0fe(0x179))[_0x3df0fe(0x363)](),_0xdd7da3[_0x3df0fe(0x27f)](),_0xdd7da3[_0x3df0fe(0x568)](),$(window)[_0x3df0fe(0x297)](_0xdd7da3[_0x3df0fe(0x568)]),$(window)[_0x3df0fe(0x1b5)](_0xdd7da3[_0x3df0fe(0x21e)]),_0xdd7da3[_0x3df0fe(0x280)]();},_0xdd7da3[_0x58c01c(0x27f)]=function(){var _0x289cee=_0x58c01c;_0xdd7da3['filtersMenuInitialOffset']=_0xdd7da3[_0x289cee(0x441)]+($(_0x289cee(0x462))[_0x289cee(0x363)]()||$('#carousel')[_0x289cee(0x363)]());},_0xdd7da3[_0x58c01c(0x21e)]=function(){var _0x2491ab=_0x58c01c;_0xdd7da3[_0x2491ab(0x27f)](),_0xdd7da3[_0x2491ab(0x568)]();},_0xdd7da3[_0x58c01c(0x568)]=function(){var _0x3610ad=_0x58c01c;_0xdd7da3[_0x3610ad(0x2f1)]&&($(window)['scrollTop']()+_0xdd7da3[_0x3610ad(0x441)]>_0xdd7da3[_0x3610ad(0x3df)]?_0xdd7da3[_0x3610ad(0x256)]!=='fixed'&&(_0xdd7da3[_0x3610ad(0x26e)][_0x3610ad(0x2df)]({'margin-top':_0xdd7da3['filtersMenu'][_0x3610ad(0x363)]()}),_0xdd7da3[_0x3610ad(0x3c2)][_0x3610ad(0x2df)]({'position':_0x3610ad(0x471),'top':_0xdd7da3['topNavBarHeight'],'width':_0xdd7da3[_0x3610ad(0x170)][_0x3610ad(0x2df)](_0x3610ad(0x43f))}),_0xdd7da3[_0x3610ad(0x256)]=_0x3610ad(0x471)):_0xdd7da3[_0x3610ad(0x256)]!=='relative'&&(_0xdd7da3[_0x3610ad(0x3c2)][_0x3610ad(0x2df)]({'position':_0x3610ad(0x466),'top':'','width':''}),_0xdd7da3[_0x3610ad(0x26e)]['css']({'margin-top':''}),_0xdd7da3[_0x3610ad(0x256)]=_0x3610ad(0x466)));},_0xdd7da3[_0x58c01c(0x280)]=function(){var _0x25049f=_0x58c01c;$(_0x25049f(0x45f))['on'](_0x25049f(0x37a),function(_0x554dba){var _0x2c7071=_0x25049f,_0x107a86=$(this)['data'](_0x2c7071(0x3b2)),_0x3bc922=$('#'+_0x107a86);if(!_0x3bc922['is'](':visible')){DropdownsHelper[_0x2c7071(0x4e5)]();var _0x326c45=parseInt($(_0x554dba[_0x2c7071(0x2e4)])['closest'](_0x2c7071(0x4af))['css']('border-left-width')[_0x2c7071(0x2b3)]('px','')),_0x31f974=parseInt(_0x3bc922[_0x2c7071(0x2df)](_0x2c7071(0x16b))[_0x2c7071(0x2b3)]('px','')),_0x4fd8df=parseInt(_0x3bc922[_0x2c7071(0x2df)](_0x2c7071(0x344))[_0x2c7071(0x2b3)]('px','')),_0x50f343=$(_0x554dba[_0x2c7071(0x2e4)])['closest'](_0x2c7071(0x4af))[_0x2c7071(0x4bf)]()['left']-$(_0x554dba[_0x2c7071(0x2e4)])[_0x2c7071(0x35e)]('.overflow-container')['offset']()['left']-(_0x31f974-_0x326c45);$(_0x554dba[_0x2c7071(0x2e4)])[_0x2c7071(0x35e)](_0x2c7071(0x1e4))['data'](_0x2c7071(0x575))&&$(_0x554dba['target'])[_0x2c7071(0x35e)](_0x2c7071(0x1e4))[_0x2c7071(0x37c)](_0x2c7071(0x575))=='right'&&(_0x50f343=_0x50f343-(_0x3bc922['outerWidth']()-(_0x31f974+_0x4fd8df))+$(_0x554dba[_0x2c7071(0x2e4)])[_0x2c7071(0x35e)](_0x2c7071(0x4af))[_0x2c7071(0x43f)]()),$(_0x554dba['target'])['closest'](_0x2c7071(0x552))[_0x2c7071(0x4bf)]()[_0x2c7071(0x51d)]+_0x50f343<0x5&&(_0x50f343=0x5),$(_0x554dba[_0x2c7071(0x2e4)])[_0x2c7071(0x35e)](_0x2c7071(0x552))[_0x2c7071(0x4bf)]()[_0x2c7071(0x51d)]+_0x50f343+_0x3bc922[_0x2c7071(0x43f)]()+0x5>window[_0x2c7071(0x36e)]&&(_0x50f343-=$(_0x554dba[_0x2c7071(0x2e4)])[_0x2c7071(0x35e)](_0x2c7071(0x552))[_0x2c7071(0x4bf)]()[_0x2c7071(0x51d)]+_0x50f343+_0x3bc922[_0x2c7071(0x43f)]()+0x5-window[_0x2c7071(0x36e)]),_0x3bc922[_0x2c7071(0x2df)]({'display':_0x2c7071(0x2e3),'left':_0x50f343+'px'}),$(_0x554dba[_0x2c7071(0x2e4)])['closest'](_0x2c7071(0x4af))[_0x2c7071(0x42f)](_0x2c7071(0x56d)),(isDesktop||isTablet)&&$('#'+_0x107a86+_0x2c7071(0x14f))[_0x2c7071(0x54b)]();}else DropdownsHelper['closeDropdowns']();return![];}),$(_0x25049f(0x407))[_0x25049f(0x415)](_0x25049f(0x2b8))[_0x25049f(0x37a)](function(_0x35fdd8){var _0xf205df=_0x25049f,_0x1ff7c2=$(_0x35fdd8[_0xf205df(0x2e4)])[_0xf205df(0x312)](_0xf205df(0x545))[_0xf205df(0x279)]('id'),_0x59fef4=$(_0x35fdd8[_0xf205df(0x2e4)])['attr'](_0xf205df(0x129));return WgHelpers[_0xf205df(0x135)](_0xf205df(0x25c),'Dropdown\x20'+_0x1ff7c2,_0x59fef4+_0xf205df(0x282)),!![];}),$(_0x25049f(0x361))['on'](_0x25049f(0x37a),function(){return![];}),$(_0x25049f(0x3a7))['on'](_0x25049f(0x195),function(_0x5f5447){var _0x43dbfe=_0x25049f,_0x339b90=$(_0x5f5447['target'])[_0x43dbfe(0x312)](_0x43dbfe(0x545)),_0x5c6407=$(this)[_0x43dbfe(0x358)]()[_0x43dbfe(0x349)]();return _0x339b90[_0x43dbfe(0x444)]('li')[_0x43dbfe(0x442)](function(){var _0x550d1f=_0x43dbfe,_0x46b7c7=$(this)[_0x550d1f(0x37c)]('name')||'',_0x501eb5=_0x46b7c7['toLowerCase']();!_0x5c6407||_0x501eb5[_0x550d1f(0x261)](_0x5c6407)!==-0x1?$(this)['css']({'display':_0x550d1f(0x2e3)}):$(this)[_0x550d1f(0x2df)]({'display':_0x550d1f(0x205)});}),![];}),$(_0x25049f(0x3a7))[_0x25049f(0x41a)](function(_0x40719c){var _0x144826=_0x25049f;if(_0x40719c['which']===0xd){var _0x1f2b0a=$(_0x144826(0x4e2));if(_0x1f2b0a[_0x144826(0x593)]===0x1)return _0x1f2b0a['attr']('href')&&_0x1f2b0a[_0x144826(0x279)]('href')[_0x144826(0x593)]>=0x2?document[_0x144826(0x569)][_0x144826(0x4e9)]=_0x1f2b0a['attr'](_0x144826(0x4e9)):_0x1f2b0a['click'](),![];}});},_0xdd7da3;}();FiltersMenuHelper[a0_0x11f3d7(0x385)]();var ReplayRecorder=function(){var _0x1a7d16=a0_0x11f3d7;function _0x2dd1c7(_0x2c70b5){var _0x122ff0=a0_0x20be;this['refreshDelay']=0x5*0x3e8,this[_0x122ff0(0x2bd)]=_0x2c70b5,this[_0x122ff0(0x359)]();}return _0x2dd1c7[_0x1a7d16(0x32a)]['updateIsRecordingInfos']=function(){var _0x1a6c7d=_0x1a7d16,_0x3ff2f1=this;$[_0x1a6c7d(0x3f8)]({'url':this[_0x1a6c7d(0x2bd)][_0x1a6c7d(0x152)]})[_0x1a6c7d(0x1e1)](function(_0x12c490){var _0x18864a=_0x1a6c7d,_0x2cb842=$(_0x18864a(0x1f1))[0x0];if(_0x12c490){var _0x2f1365=JSON[_0x18864a(0x45b)](_0x12c490);_0x2cb842[_0x18864a(0x1e2)]=_0x2f1365[_0x18864a(0x2a8)]?_0x3ff2f1[_0x18864a(0x2bd)][_0x18864a(0x571)]:_0x3ff2f1[_0x18864a(0x2bd)][_0x18864a(0x558)];}else _0x2cb842[_0x18864a(0x1e2)]=_0x3ff2f1[_0x18864a(0x2bd)]['record_txt'];});},_0x2dd1c7['prototype'][_0x1a7d16(0x1d9)]=function(){var _0x16fc60=_0x1a7d16;$('#record_button')[0x0][_0x16fc60(0x1e2)]=this['replayRecordInfos']['recording_txt'];},_0x2dd1c7[_0x1a7d16(0x32a)][_0x1a7d16(0x230)]=function(){var _0x15bb42=_0x1a7d16;$(_0x15bb42(0x1f1))[0x0][_0x15bb42(0x1e2)]=this[_0x15bb42(0x2bd)][_0x15bb42(0x327)];},_0x2dd1c7[_0x1a7d16(0x32a)][_0x1a7d16(0x3d8)]=function(){var _0x251464=_0x1a7d16,_0x353963=this,_0x857689=$(_0x251464(0x1f1))[0x0];return _0x857689['innerHTML']=this[_0x251464(0x2bd)]['recording_txt'],_0x857689[_0x251464(0x578)](),WgHelpers[_0x251464(0x135)](_0x251464(0x174),_0x251464(0x562),JSON[_0x251464(0x3e4)](this[_0x251464(0x2bd)])),$['ajax']({'url':this[_0x251464(0x2bd)][_0x251464(0x2a3)],'success':function(){var _0x2098b6=_0x251464;return _0x353963[_0x2098b6(0x1d9)]();},'error':function(){var _0x25d427=_0x251464;return _0x353963[_0x25d427(0x230)]();}}),![];},_0x2dd1c7;}(),replayRecorder;typeof replayRecordInfos!=='undefined'&&(replayRecorder=new ReplayRecorder(replayRecordInfos));var ReplayRefreshInfosManager=function(){function _0x1fce2a(_0x15be07){var _0x211097=a0_0x20be,_0x1b40c2=this;this['refreshDelay']=0x1e*0x3e8,this[_0x211097(0x1ea)]=_0x15be07,this[_0x211097(0x21b)]=_0x211097(0x4df)+_0x15be07['region']+'/'+_0x15be07[_0x211097(0x28f)],this[_0x211097(0x46b)]=0x0,this[_0x211097(0x3c8)]=0x14,setTimeout(function(){return _0x1b40c2['updateReplayInfos']();},this[_0x211097(0x4b8)]);}return _0x1fce2a['prototype']['updateReplayInfos']=function(){var _0x1139ca=a0_0x20be,_0x175beb=this;$[_0x1139ca(0x3f8)]({'url':this['url']})[_0x1139ca(0x1e1)](function(_0x6f84a8){var _0x64fe1d=_0x1139ca,_0x52928b=_0x6f84a8[_0x64fe1d(0x37c)],_0x52ed89=$('#disabledReplayButtonArea\x20a');_0x52ed89[_0x64fe1d(0x4eb)]('disabled'),_0x52ed89[_0x64fe1d(0x444)]('button')[_0x64fe1d(0x4eb)]('disabled'),_0x52ed89[_0x64fe1d(0x444)](_0x64fe1d(0x3c4))[_0x64fe1d(0x318)]('<i\x20class=\x22fa\x20fa-play\x22></i>'+_0x175beb[_0x64fe1d(0x1ea)][_0x64fe1d(0x1f3)]),_0x52ed89[_0x64fe1d(0x279)](_0x64fe1d(0x382),_0x52928b[_0x64fe1d(0x190)]),_0x52ed89[_0x64fe1d(0x279)](_0x64fe1d(0x3ed),_0x52928b[_0x64fe1d(0x3dd)]),_0x52ed89['attr']('data-spectate-gameid',_0x52928b[_0x64fe1d(0x56b)]),_0x52ed89[_0x64fe1d(0x279)](_0x64fe1d(0x183),_0x52928b['encryptionKey']),_0x52ed89[_0x64fe1d(0x279)](_0x64fe1d(0x3f2),_0x52928b[_0x64fe1d(0x21d)]);})[_0x1139ca(0x19a)](function(){var _0x2351e4=_0x1139ca;_0x175beb[_0x2351e4(0x46b)]++,_0x175beb['errorsCount']<_0x175beb[_0x2351e4(0x3c8)]&&setTimeout(function(){return _0x175beb['updateReplayInfos']();},_0x175beb[_0x2351e4(0x4b8)]);});},_0x1fce2a;}(),replayRefreshInfosManager;typeof replayRefreshInfos!=='undefined'&&(replayRefreshInfosManager=new ReplayRefreshInfosManager(replayRefreshInfos));function updateSpectateLinks(){var _0x17bfd1=a0_0x11f3d7;$(_0x17bfd1(0x565))[_0x17bfd1(0x580)](_0x17bfd1(0x166)),$('.spectatePopupLink')['on'](_0x17bfd1(0x166),function(){var _0x49558c=_0x17bfd1,_0x24053f=$(this)[_0x49558c(0x37c)](_0x49558c(0x43c)),_0x4d5f62=$(this)[_0x49558c(0x37c)](_0x49558c(0x55d)),_0x2c4d01=$(this)[_0x49558c(0x37c)](_0x49558c(0x567)),_0x4a8f79=$(this)[_0x49558c(0x37c)](_0x49558c(0x461)),_0x5b0c56=$(this)['data'](_0x49558c(0x29d)),_0x2fc174=WgHelpers[_0x49558c(0x259)]()=='MacOS'||WgHelpers[_0x49558c(0x259)]()==_0x49558c(0x325);if(_0x2fc174){$(_0x49558c(0x271))[_0x49558c(0x2df)](_0x49558c(0x573),'none');var _0x2be15f=Math[_0x49558c(0x1d1)](Math[_0x49558c(0x160)]()*0xa*0x3e8*0x3e8),_0x52f109='if\x20test\x20-d\x20\x20/Applications/League\x5c\x20of\x5c\x20Legends.app/Contents/LoL/Game/\x20;\x20then\x20cd\x20/Applications/League\x5c\x20of\x5c\x20Legends.app/Contents/LoL/Game/\x20&&\x20chmod\x20+x\x20./LeagueofLegends.app/Contents/MacOS/LeagueofLegends\x20;\x20else\x20cd\x20/Applications/League\x5c\x20of\x5c\x20Legends.app/Contents/LoL/RADS/solutions/lol_game_client_sln/releases/\x20&&\x20cd\x20$(ls\x20-1vr\x20-d\x20*/\x20|\x20head\x20-1)\x20&&\x20cd\x20deploy\x20&&\x20chmod\x20+x\x20./LeagueofLegends.app/Contents/MacOS/LeagueofLegends\x20;\x20fi\x20&&\x20riot_launched=true\x20./LeagueofLegends.app/Contents/MacOS/LeagueofLegends\x20\x22spectator\x20'+_0x5b0c56+'\x20'+_0x4a8f79+'\x20'+_0x2c4d01+'\x20'+_0x4d5f62+'-'+_0x2be15f+_0x49558c(0x22c);$(_0x49558c(0x1c3))[0x0][_0x49558c(0x55c)]=_0x52f109;}else $(_0x49558c(0x2a0))['css'](_0x49558c(0x573),_0x49558c(0x205)),$(_0x49558c(0x3e7))[_0x49558c(0x52b)](_0x49558c(0x30f),null)[_0x49558c(0x580)](_0x49558c(0x37a)),$(_0x49558c(0x3e7))[_0x49558c(0x37a)](function(){var _0x2693e1=_0x49558c;return $('#explanationVideoContainer')[_0x2693e1(0x318)](_0x2693e1(0x554)+cdnDomain+'/img/s/download-instructions.mp4\x22\x20type=\x22video/mp4\x22></video>'),setTimeout(function(){var _0xf7e416=_0x2693e1;$(_0xf7e416(0x548))[0x0][_0xf7e416(0x1b0)]();},0x3e8),$(_0x2693e1(0x14b))[_0x2693e1(0x590)](),window[_0x2693e1(0x569)]='https://www.leagueofgraphs.com'+_0x24053f,WgHelpers[_0x2693e1(0x135)](_0x2693e1(0x3e6),_0x2693e1(0x18f),_0x4d5f62+'-'+_0x2c4d01),!![];});return WgHelpers[_0x49558c(0x135)](_0x49558c(0x3e6),_0x49558c(0x154),_0x4d5f62+'-'+_0x2c4d01),![];});}updateSpectateLinks();function a0_0x20be(_0x139500,_0x6389fc){var _0x3b485b=a0_0x3b48();return a0_0x20be=function(_0x20bef6,_0x4dcf63){_0x20bef6=_0x20bef6-0x127;var _0x1c5b21=_0x3b485b[_0x20bef6];return _0x1c5b21;},a0_0x20be(_0x139500,_0x6389fc);}var LoLGAjaxManager=function(_0x325585){var _0x37679c=a0_0x11f3d7;__extends(_0x5695ef,_0x325585);function _0x5695ef(){var _0x24fe47=a0_0x20be;return _0x325585!==null&&_0x325585[_0x24fe47(0x505)](this,arguments)||this;}return _0x5695ef[_0x37679c(0x32a)][_0x37679c(0x3db)]=function(){var _0x209406=_0x37679c;updateSpectateLinks(),this['initReplayRecordButton'](),DateHelper[_0x209406(0x4be)](),TabsHelper[_0x209406(0x385)]();},_0x5695ef[_0x37679c(0x32a)][_0x37679c(0x582)]=function(_0xf4e7a3){var _0x2efbfd=_0x37679c;if(typeof $(_0xf4e7a3)[_0x2efbfd(0x279)](_0x2efbfd(0x129))!==typeof undefined&&$(_0xf4e7a3)[_0x2efbfd(0x312)](_0x2efbfd(0x364))[_0x2efbfd(0x593)]>0x0){var _0x4f47fd=$(_0xf4e7a3)[_0x2efbfd(0x312)](_0x2efbfd(0x545))[_0x2efbfd(0x279)]('id'),_0x3b816b=$(_0xf4e7a3)[_0x2efbfd(0x279)]('data-filters-fixed');WgHelpers[_0x2efbfd(0x135)](_0x2efbfd(0x25c),_0x2efbfd(0x1c8)+_0x4f47fd,_0x3b816b+'\x20clicked');};},_0x5695ef['prototype'][_0x37679c(0x3ba)]=function(){var _0x394241=_0x37679c;this['pageStatus']['vs']!==_0x394241(0x31f)?$(_0x394241(0x3b6))['css'](_0x394241(0x573),_0x394241(0x205)):$('#drop-queueids\x20li.notSr')[_0x394241(0x2df)](_0x394241(0x573),'');},_0x5695ef[_0x37679c(0x32a)]['initReplayRecordButton']=function(){var _0x440076=_0x37679c;window[_0x440076(0x2bd)]&&(window['replayRecorder']=new ReplayRecorder(window['replayRecordInfos']));},_0x5695ef['prototype'][_0x37679c(0x3d0)]=function(_0x28a79f){var _0x25233d=_0x37679c;_0x325585[_0x25233d(0x32a)]['updateFiltersHeadersAndActive'][_0x25233d(0x595)](this,_0x28a79f),this[_0x25233d(0x587)](_0x28a79f);},_0x5695ef[_0x37679c(0x32a)][_0x37679c(0x587)]=function(_0xfbbc1){var _0xadfdb7=_0x37679c,_0x3888bd=$(_0xfbbc1)[_0xadfdb7(0x312)]('.dropdown')[_0xadfdb7(0x279)]('id');if(_0x3888bd==_0xadfdb7(0x173)){var _0xd4d751=$('#'+_0x3888bd+_0xadfdb7(0x49a))[_0xadfdb7(0x3a5)](),_0x4c8778=clone(this[_0xadfdb7(0x21c)]),_0x265479=_0x4c8778['vs'];_0x4c8778['vs']=_0x4c8778[_0xadfdb7(0x54a)],_0x4c8778[_0xadfdb7(0x54a)]=_0x265479,_0xd4d751[_0xadfdb7(0x444)]('a')[_0xadfdb7(0x279)](_0xadfdb7(0x4e9),this['getUrl'](this[_0xadfdb7(0x21c)][_0xadfdb7(0x57c)],this[_0xadfdb7(0x21c)][_0xadfdb7(0x477)],this[_0xadfdb7(0x21c)][_0xadfdb7(0x1a5)],this[_0xadfdb7(0x21c)][_0xadfdb7(0x337)],this[_0xadfdb7(0x2f2)],_0x4c8778,!![]));(_0x4c8778[_0xadfdb7(0x54a)]==null||_0x4c8778[_0xadfdb7(0x54a)]=='all')&&(_0x4c8778['vs']==null||_0x4c8778['vs']==_0xadfdb7(0x31f))?_0xd4d751[_0xadfdb7(0x42f)](_0xadfdb7(0x273)):_0xd4d751['removeClass']('hidden');var _0x2ea7da=$(_0xfbbc1)[_0xadfdb7(0x444)](_0xadfdb7(0x3d5)),_0xa9e899=_0x2ea7da['length']?_0x2ea7da[0x0]['outerHTML']:'';if(_0xa9e899){var _0x29107b=_0xa9e899;_0xd4d751[_0xadfdb7(0x444)](_0xadfdb7(0x55f))['html'](_0x29107b);}else{var _0x29107b=_0xadfdb7(0x58d)+cdnDomain+_0xadfdb7(0x1eb);_0xd4d751[_0xadfdb7(0x444)](_0xadfdb7(0x55f))[_0xadfdb7(0x318)](_0x29107b);}}},_0x5695ef[_0x37679c(0x32a)][_0x37679c(0x258)]=function(_0x3dd882,_0x5b0f86,_0x2bde22,_0x2fe093,_0x3b7a17,_0x1448b1,_0x5af976){var _0x148787=_0x37679c,_0x3ac76d='',_0x5df2d8=_0x3b7a17['indexOf']('queueIds')>=0x0&&_0x1448b1[_0x148787(0x28d)]!=null&&_0x1448b1[_0x148787(0x28d)]!==_0x148787(0x429),_0x1ce37c=_0x3b7a17[_0x148787(0x261)](_0x148787(0x28d))<0x0||(_0x1448b1['queueIds']==null||_0x1448b1[_0x148787(0x28d)]=='default'||_0x1448b1[_0x148787(0x28d)]==_0x148787(0x2bb));return _0x3dd882!==null&&_0x3dd882!=='en'&&(_0x3ac76d+='/'+_0x3dd882),_0x5b0f86&&_0x5b0f86!=_0x148787(0x22f)&&(_0x3ac76d+='/'+_0x5b0f86),_0x3ac76d+='/'+_0x2bde22,_0x2fe093&&(_0x3ac76d+='/'+_0x2fe093),_0x1448b1[_0x148787(0x3ea)]&&_0x1448b1[_0x148787(0x3ea)]!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x3ea)]),_0x3b7a17[_0x148787(0x261)](_0x148787(0x54a))>=0x0&&_0x1448b1['champions']&&_0x1448b1[_0x148787(0x54a)]!=='all'&&_0x1448b1['champions']!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x54a)]),_0x3b7a17['indexOf']('champions-tft')>=0x0&&_0x1448b1['champions']&&_0x1448b1[_0x148787(0x54a)]!==_0x148787(0x31f)&&_0x1448b1['champions']!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x54a)]),_0x3b7a17[_0x148787(0x261)]('regions')>=0x0&&_0x1448b1[_0x148787(0x290)]&&_0x1448b1[_0x148787(0x290)]!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x290)]),_0x3b7a17[_0x148787(0x261)](_0x148787(0x2b4))>=0x0&&_0x1448b1[_0x148787(0x2b4)]&&_0x1448b1[_0x148787(0x2b4)]!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x2b4)]['toLowerCase']()),_0x1ce37c&&_0x3b7a17[_0x148787(0x261)]('vs')>=0x0&&_0x1448b1['vs']&&_0x1448b1['vs']!==_0x148787(0x429)&&_0x1448b1['vs']!=='all'&&(_0x3ac76d+='/vs-'+_0x1448b1['vs']),_0x1448b1[_0x148787(0x338)]&&_0x1448b1['tftComp']!==_0x148787(0x429)&&(_0x3ac76d+=_0x148787(0x378)+_0x1448b1['tftComp'][_0x148787(0x349)]()),_0x3b7a17[_0x148787(0x261)](_0x148787(0x1c4))>=0x0&&_0x1448b1[_0x148787(0x1c4)]&&_0x1448b1[_0x148787(0x1c4)]!==_0x148787(0x429)&&_0x1448b1[_0x148787(0x1c4)]!==_0x148787(0x512)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x1c4)]),_0x3b7a17['indexOf'](_0x148787(0x133))>=0x0&&_0x1448b1[_0x148787(0x133)]&&_0x1448b1[_0x148787(0x133)]!=='default'&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x133)]),_0x5df2d8&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x28d)]),_0x3b7a17[_0x148787(0x261)](_0x148787(0x138))>=0x0&&_0x1448b1[_0x148787(0x240)]!=null&&_0x1448b1['tftQueueIds']!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x240)]),_0x5af976&&_0x1448b1[_0x148787(0x51e)]&&_0x1448b1[_0x148787(0x51e)]!==_0x148787(0x429)&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x51e)]),_0x3b7a17[_0x148787(0x261)]('tournaments')>=0x0&&_0x1448b1[_0x148787(0x4c3)]&&_0x1448b1['tournaments']!==_0x148787(0x31f)&&_0x1448b1[_0x148787(0x4c3)]!=='default'&&(_0x3ac76d+='/'+_0x1448b1[_0x148787(0x4c3)]),_0x3ac76d;},_0x5695ef;}(AjaxManager),LolgAnimations=function(){var _0x2d8408=a0_0x11f3d7;function _0x2fcd90(){}return _0x2fcd90[_0x2d8408(0x2f9)]=function(_0x5e4de1,_0x40792f){var _0x513155=_0x2d8408;_0x5e4de1[_0x513155(0x4eb)](_0x513155(0x346)),setTimeout(function(){var _0x5772a6=_0x513155;_0x5e4de1['offsetWidth']=_0x5e4de1[_0x5772a6(0x45e)],_0x5e4de1[_0x5772a6(0x42f)](_0x5772a6(0x346));},0xa+_0x40792f);},_0x2fcd90;}(),RecentSearchesHelper=function(){var _0x5671b2=a0_0x11f3d7;function _0x1858ab(){}return _0x1858ab[_0x5671b2(0x128)]=function(_0x23a91f,_0x35ac22){var _0x5a55a7=_0x5671b2;if(localStorage){var _0x49fe77=JSON['parse'](localStorage[_0x5a55a7(0x481)](_0x1858ab['keySummoners'])||'[]'),_0x55319f=_0x23a91f+'|'+_0x35ac22;for(var _0x323ce1=0x0;_0x323ce1<_0x49fe77[_0x5a55a7(0x593)];_0x323ce1++){_0x49fe77[_0x323ce1][_0x5a55a7(0x349)]()===_0x55319f[_0x5a55a7(0x349)]()&&_0x49fe77[_0x5a55a7(0x3de)](_0x323ce1,0x1);}_0x49fe77[_0x5a55a7(0x559)](_0x55319f),_0x49fe77['length']>_0x1858ab[_0x5a55a7(0x56e)]&&_0x49fe77[_0x5a55a7(0x3de)](0x0,_0x49fe77['length']-_0x1858ab['maxRecentSearchesLength']),localStorage[_0x5a55a7(0x564)](_0x1858ab[_0x5a55a7(0x400)],JSON[_0x5a55a7(0x3e4)](_0x49fe77));}},_0x1858ab['addChampionSeen']=function(_0x1d4ef6){var _0x49f34c=_0x5671b2;if(localStorage){var _0x1dfac8=JSON[_0x49f34c(0x45b)](localStorage[_0x49f34c(0x481)](_0x1858ab[_0x49f34c(0x45c)])||'[]'),_0x4c57fc=_0x1d4ef6[_0x49f34c(0x3b8)]();for(var _0x494cd9=0x0;_0x494cd9<_0x1dfac8[_0x49f34c(0x593)];_0x494cd9++){_0x1dfac8[_0x494cd9]===_0x4c57fc&&_0x1dfac8[_0x49f34c(0x3de)](_0x494cd9,0x1);}_0x1dfac8[_0x49f34c(0x559)](_0x4c57fc),_0x1dfac8[_0x49f34c(0x593)]>_0x1858ab['maxRecentSearchesLength']&&_0x1dfac8[_0x49f34c(0x3de)](0x0,_0x1dfac8[_0x49f34c(0x593)]-_0x1858ab[_0x49f34c(0x56e)]),localStorage['setItem'](_0x1858ab[_0x49f34c(0x45c)],JSON[_0x49f34c(0x3e4)](_0x1dfac8));}},_0x1858ab[_0x5671b2(0x291)]=function(_0x253287,_0x417970){var _0x49e926=_0x5671b2;if(localStorage){var _0x168bef=JSON['parse'](localStorage[_0x49e926(0x481)](_0x1858ab['keySummoners'])||'[]');return _0x168bef=_0x168bef['filter'](function(_0x3887ac){var _0x10e912=_0x49e926;return _0x3887ac[_0x10e912(0x349)]()[_0x10e912(0x317)]('|')[0x1][_0x10e912(0x261)](_0x253287['toLowerCase']())>-0x1;}),_0x168bef[_0x49e926(0x1ca)]()['slice'](0x0,_0x417970);}else return[];},_0x1858ab[_0x5671b2(0x1b3)]=function(_0x503839){var _0x57d73a=_0x5671b2;if(localStorage){var _0x24b20=JSON[_0x57d73a(0x45b)](localStorage[_0x57d73a(0x481)](_0x1858ab[_0x57d73a(0x45c)])||'[]');return _0x24b20[_0x57d73a(0x1ca)]()[_0x57d73a(0x508)](0x0,_0x503839);}else return[];},_0x1858ab[_0x5671b2(0x56e)]=0x64,_0x1858ab[_0x5671b2(0x400)]=_0x5671b2(0x592),_0x1858ab[_0x5671b2(0x45c)]='wg_recentChampions',_0x1858ab;}(),MultiSearchHelper=function(){var _0x1dc414=a0_0x11f3d7;function _0x108aed(){var _0x1652c1=a0_0x20be;this[_0x1652c1(0x446)]=_0x108aed[_0x1652c1(0x2fd)][_0x1652c1(0x208)](function(_0x40164e){return new RegExp(_0x40164e,'g');});}return _0x108aed['prototype'][_0x1dc414(0x372)]=function(_0x28f67c){var _0x29cbc3=_0x1dc414,_0xa25d41=_0x28f67c['clipboardData']||window['clipboardData']||_0x28f67c['originalEvent'][_0x29cbc3(0x304)],_0x9c56a0=_0xa25d41[_0x29cbc3(0x2b5)](_0x29cbc3(0x1dc)),_0x2a2c76=[];this[_0x29cbc3(0x446)]['forEach'](function(_0x3b3232){var _0x308bff=_0x29cbc3,_0x54bb6f;while(_0x54bb6f=_0x3b3232[_0x308bff(0x414)](_0x9c56a0)){_0x54bb6f[0x1]!=_0x308bff(0x380)&&_0x2a2c76[_0x308bff(0x559)](_0x54bb6f[0x1][_0x308bff(0x41d)]());}});var _0xfb4d24=_0x9c56a0['split'](/\r?\n/);return _0xfb4d24[_0x29cbc3(0x27e)](function(_0xa55a6b){var _0xa1a0da=_0x29cbc3,_0x1a99bf=_0xa55a6b[_0xa1a0da(0x317)](':',0x2);if(_0x1a99bf[_0xa1a0da(0x593)]==0x2){var _0x392409=_0x1a99bf[0x0][_0xa1a0da(0x41d)]();_0x2a2c76[_0xa1a0da(0x559)](_0x392409);}}),_0x2a2c76=Array[_0x29cbc3(0x365)](new window[(_0x29cbc3(0x30c))](_0x2a2c76)),_0x2a2c76['length']?_0x2a2c76[_0x29cbc3(0x4c6)](',\x20'):null;},_0x108aed[_0x1dc414(0x2fd)]=[_0x1dc414(0x227),_0x1dc414(0x223),'(.+?)\x20a\x20rejoint\x20le\x20salon',_0x1dc414(0x35a),_0x1dc414(0x3ff),_0x1dc414(0x3fc),_0x1dc414(0x276),'(.+?)\x20se\x20unió\x20a\x20la\x20sala','(.+?)\x20se\x20ha\x20unido\x20a\x20la\x20sala','(.+?)\x20csatlakozott\x20az\x20előszobához',_0x1dc414(0x23c),_0x1dc414(0x23e),_0x1dc414(0x520),_0x1dc414(0x40f),_0x1dc414(0x1d5),'Hráč\x20(.+?)\x20vstoupil\x20do\x20lobby'],_0x108aed;}(),AutoCompleteManager=function(){var _0x299a12=a0_0x11f3d7;function _0x548e7d(_0x51d263,_0x531c33,_0x4befef,_0x565045,_0xdaead3,_0x76adaf,_0x2176e3,_0x4769b8,_0x4451fc){var _0x257bbb=a0_0x20be;_0x4451fc===void 0x0&&(_0x4451fc=![]);var _0x5d26e2=this;this['game']=_0x51d263,this[_0x257bbb(0x515)]=_0x531c33,this[_0x257bbb(0x1cd)]=_0x2176e3,this[_0x257bbb(0x4ae)]=_0x4769b8,this[_0x257bbb(0x27d)]=_0x76adaf,this[_0x257bbb(0x143)]=_0xdaead3,this[_0x257bbb(0x478)]=_0x4befef,this[_0x257bbb(0x20e)]=_0x4451fc,this[_0x257bbb(0x540)]=-0x1,this[_0x257bbb(0x4c1)]=0x0,_0x4befef?(this[_0x257bbb(0x424)]=new MultiSearchHelper(),this[_0x257bbb(0x1a7)]=document[_0x257bbb(0x22d)](_0x257bbb(0x553)),this[_0x257bbb(0x1a7)]['id']=_0x565045,this[_0x257bbb(0x478)]['parentElement']['appendChild'](this[_0x257bbb(0x1a7)]),this['searchForm'][_0x257bbb(0x381)](_0x257bbb(0x54b),function(){var _0x49f5d7=_0x257bbb;return _0x5d26e2[_0x49f5d7(0x4da)]();}),this[_0x257bbb(0x478)][_0x257bbb(0x381)](_0x257bbb(0x2e7),function(_0x366bf3){var _0x49a5e5=_0x5d26e2['onKeyPress'](_0x366bf3);!_0x49a5e5&&_0x366bf3['preventDefault']();}),this[_0x257bbb(0x478)][_0x257bbb(0x381)]('paste',function(_0x5c6524){var _0x258216=_0x257bbb;return _0x5d26e2[_0x258216(0x158)](_0x5c6524);}),window[_0x257bbb(0x381)](_0x257bbb(0x37a),function(_0xf4aa2f){var _0x46d4f1=_0x257bbb;return _0x5d26e2[_0x46d4f1(0x487)](_0xf4aa2f);})):this[_0x257bbb(0x1a7)]=null;}return _0x548e7d[_0x299a12(0x32a)][_0x299a12(0x298)]=function(){var _0x385d5b=_0x299a12,_0x5b3a19=this;!this[_0x385d5b(0x20e)]&&(this[_0x385d5b(0x4c1)]&&clearTimeout(this[_0x385d5b(0x4c1)]),this[_0x385d5b(0x4c1)]=setTimeout(function(){var _0x24b1e4=_0x385d5b;return _0x5b3a19[_0x24b1e4(0x17f)]();},this[_0x385d5b(0x143)]),this[_0x385d5b(0x1d4)]());},_0x548e7d['prototype'][_0x299a12(0x487)]=function(_0x36af02){var _0x1b1b08=_0x299a12;if(this[_0x1b1b08(0x1a7)][_0x1b1b08(0x4f2)][_0x1b1b08(0x573)]==_0x1b1b08(0x2e3)){var _0x1211a2=_0x36af02['target'],_0x132783=_0x548e7d['getAllParents'](_0x1211a2);_0x1211a2!=this[_0x1b1b08(0x1a7)]&&_0x132783[_0x1b1b08(0x261)](this[_0x1b1b08(0x1a7)])<0x0&&_0x1211a2!=this['searchForm']&&_0x132783['indexOf'](this[_0x1b1b08(0x478)])<0x0&&this[_0x1b1b08(0x320)]();}},_0x548e7d['prototype'][_0x299a12(0x4da)]=function(){var _0x1a397f=_0x299a12;!this[_0x1a397f(0x20e)]&&(this[_0x1a397f(0x478)]['value'][_0x1a397f(0x593)]>=0x2?this[_0x1a397f(0x1a7)][_0x1a397f(0x4f2)][_0x1a397f(0x573)]=_0x1a397f(0x2e3):this['onInputChange']());},_0x548e7d['prototype'][_0x299a12(0x2c7)]=function(_0x5d8f16){var _0x259695=_0x299a12;if(_0x5d8f16['keyCode']==0x26)return this['onKeyNavigation'](-0x1),![];else{if(_0x5d8f16[_0x259695(0x54c)]==0x28||_0x5d8f16[_0x259695(0x54c)]==0x9)return this['onKeyNavigation'](0x1),![];else return _0x5d8f16[_0x259695(0x54c)]==0xd?this['onEnter']():(this[_0x259695(0x298)](),!![]);}},_0x548e7d[_0x299a12(0x32a)][_0x299a12(0x1bf)]=function(_0x482ac0){var _0x2142c5=_0x299a12,_0x5f5320=Array[_0x2142c5(0x32a)][_0x2142c5(0x508)][_0x2142c5(0x595)](this['autocompleteElement'][_0x2142c5(0x53d)](_0x2142c5(0x534))),_0x467643=_0x5f5320[_0x2142c5(0x593)];this[_0x2142c5(0x540)]==-0x1&&_0x482ac0==-0x1?this['currentlySelectedIndex']=_0x467643-0x1:this['currentlySelectedIndex']=(_0x467643+this[_0x2142c5(0x540)]+_0x482ac0)%_0x467643,_0x5f5320[_0x2142c5(0x27e)](function(_0x5168d0){var _0xd28818=_0x2142c5;return _0x5168d0['classList'][_0xd28818(0x590)](_0xd28818(0x58e));}),_0x5f5320[this[_0x2142c5(0x540)]][_0x2142c5(0x207)][_0x2142c5(0x58c)]('active'),this[_0x2142c5(0x478)][_0x2142c5(0x16d)]=_0x5f5320[this[_0x2142c5(0x540)]][_0x2142c5(0x39f)][_0x2142c5(0x16d)];},_0x548e7d['prototype'][_0x299a12(0x1d4)]=function(){var _0x5b8b04=_0x299a12,_0x2107ff=Array[_0x5b8b04(0x32a)]['slice'][_0x5b8b04(0x595)](this[_0x5b8b04(0x1a7)]['querySelectorAll'](_0x5b8b04(0x534)));_0x2107ff[_0x5b8b04(0x27e)](function(_0x17009e){var _0x36c3b6=_0x5b8b04;return _0x17009e['classList']['remove'](_0x36c3b6(0x58e));}),this[_0x5b8b04(0x540)]=-0x1;},_0x548e7d[_0x299a12(0x32a)][_0x299a12(0x306)]=function(){var _0x2f5dd8=_0x299a12,_0x45e60=this[_0x2f5dd8(0x1a7)][_0x2f5dd8(0x224)](_0x2f5dd8(0x514));if(_0x45e60){var _0x5f519b=_0x45e60[_0x2f5dd8(0x224)]('a'),_0x139ad5=_0x5f519b[_0x2f5dd8(0x492)][_0x2f5dd8(0x17c)](_0x2f5dd8(0x30f))[_0x2f5dd8(0x16d)];return _0x139ad5&&eval(_0x139ad5),window[_0x2f5dd8(0x569)]=_0x5f519b[_0x2f5dd8(0x492)][_0x2f5dd8(0x17c)](_0x2f5dd8(0x4e9))[_0x2f5dd8(0x16d)],![];}else return!![];},_0x548e7d['prototype'][_0x299a12(0x158)]=function(_0x401420){var _0x3e3911=_0x299a12,_0x39ee54=this[_0x3e3911(0x424)][_0x3e3911(0x372)](_0x401420);return _0x39ee54?(_0x401420[_0x3e3911(0x156)](),_0x401420[_0x3e3911(0x488)](),this[_0x3e3911(0x478)]['value']=_0x39ee54,![]):!![];},_0x548e7d[_0x299a12(0x32a)]['closeAutoSuggest']=function(){var _0x4b4ec7=_0x299a12;this['resetActiveSuggestion'](),this[_0x4b4ec7(0x1a7)][_0x4b4ec7(0x4f2)][_0x4b4ec7(0x573)]=_0x4b4ec7(0x205);},_0x548e7d[_0x299a12(0x32a)][_0x299a12(0x17f)]=function(){var _0x303463=_0x299a12,_0x40ab30=this;if(this[_0x303463(0x478)][_0x303463(0x16d)][_0x303463(0x261)](',')>=0x0){var _0x58456e=new ResponseData();_0x58456e[_0x303463(0x4e0)]=[],_0x58456e[_0x303463(0x54a)]=[],_0x58456e[_0x303463(0x49d)]=[],_0x58456e['pros']=[],this[_0x303463(0x2f0)](_0x58456e);}else{if(this[_0x303463(0x478)][_0x303463(0x16d)][_0x303463(0x593)]>=0x1){var _0xd8110e=new XMLHttpRequest(),_0x478ed3=void 0x0;switch(this['game']){case'lol':_0x478ed3=this[_0x303463(0x515)]+_0x303463(0x2ff)+encodeURIComponent(this[_0x303463(0x478)][_0x303463(0x16d)]);break;case _0x303463(0x453):_0x478ed3=this[_0x303463(0x515)]+'/api/search-tft/'+encodeURIComponent(this[_0x303463(0x478)][_0x303463(0x16d)]);break;case'lor':_0x478ed3=this[_0x303463(0x515)]+_0x303463(0x4e7)+encodeURIComponent(this[_0x303463(0x478)][_0x303463(0x16d)]);break;}_0xd8110e[_0x303463(0x36b)](_0x303463(0x342),_0x478ed3,!![]),_0xd8110e[_0x303463(0x321)]=function(){var _0x5e0119=_0x303463;if(_0xd8110e['readyState']===0x4){var _0x13186c=JSON[_0x5e0119(0x45b)](_0xd8110e[_0x5e0119(0x2b0)]);if(_0x13186c['data']){var _0x42c8f6=_0x13186c[_0x5e0119(0x37c)];_0x42c8f6[_0x5e0119(0x49d)]=_0x40ab30[_0x5e0119(0x477)]=='lor'?[]:_0x40ab30[_0x5e0119(0x313)](_0x40ab30['searchForm'][_0x5e0119(0x16d)]),window['isOverwolf']&&_0x42c8f6['summoners'][_0x5e0119(0x27e)](function(_0x34d22f){var _0x36223c=_0x5e0119;return _0x34d22f[_0x36223c(0x3cd)]=_0x34d22f[_0x36223c(0x3cd)]['replace'](_0x36223c(0x3f5),_0x36223c(0x493));}),_0x40ab30[_0x5e0119(0x2f0)](_0x42c8f6);}}},_0xd8110e['send'](null);}else{var _0x58456e=new ResponseData();_0x58456e[_0x303463(0x4e0)]=[],_0x58456e[_0x303463(0x54a)]=this[_0x303463(0x477)]==_0x303463(0x22f)?this['getDefaultChampions']():[],_0x58456e[_0x303463(0x49d)]=this[_0x303463(0x477)]==_0x303463(0x3b1)?[]:this[_0x303463(0x313)](this[_0x303463(0x478)]['value']),_0x58456e[_0x303463(0x500)]=[],this[_0x303463(0x2f0)](_0x58456e);}}},_0x548e7d[_0x299a12(0x32a)][_0x299a12(0x2fc)]=function(){var _0x5a1cd9=_0x299a12,_0x205154=this,_0x7831dd=RecentSearchesHelper[_0x5a1cd9(0x1b3)](_0x548e7d[_0x5a1cd9(0x238)]);for(var _0x5aa3da=0x0;_0x5aa3da<this[_0x5a1cd9(0x1cd)][_0x5a1cd9(0x593)];_0x5aa3da++){_0x7831dd[_0x5a1cd9(0x593)]<_0x548e7d[_0x5a1cd9(0x238)]&&_0x7831dd[_0x5a1cd9(0x261)](this[_0x5a1cd9(0x1cd)][_0x5aa3da])<0x0&&this[_0x5a1cd9(0x1cd)][_0x5aa3da]&&_0x7831dd[_0x5a1cd9(0x559)](this['topChampions'][_0x5aa3da]);}return _0x7831dd['map'](function(_0x45f3c3){var _0x385f65=_0x5a1cd9;return _0x205154[_0x385f65(0x4ae)][_0x385f65(0x1cc)](function(_0x533d7b){var _0x4750e1=_0x385f65;return _0x533d7b[_0x4750e1(0x2aa)]==_0x45f3c3;})[0x0];})[_0x5a1cd9(0x1cc)](function(_0x439bb1){return!!_0x439bb1;});},_0x548e7d[_0x299a12(0x32a)]['getRecentlySeenSummoners']=function(_0x1246ca){var _0x265db4=_0x299a12,_0x703b24=this,_0x3b3ffb=RecentSearchesHelper[_0x265db4(0x291)](_0x1246ca,_0x548e7d['recentlySeenSummonersCount']),_0xd0cfbf=[];return _0x3b3ffb[_0x265db4(0x27e)](function(_0x359489){var _0x1779ea=_0x265db4,_0x4448cf=_0x359489[_0x1779ea(0x317)]('|'),_0x809468=new SummonerData();_0x809468[_0x1779ea(0x1fd)]=_0x4448cf[0x0]['toUpperCase'](),_0x809468[_0x1779ea(0x241)]=_0x4448cf[0x1],_0x809468[_0x1779ea(0x3cd)]=_0x703b24['urlLanguagePrefix']+_0x1779ea(0x3f5)+_0x809468[_0x1779ea(0x1fd)][_0x1779ea(0x349)]()+'/'+encodeURIComponent(_0x809468[_0x1779ea(0x241)]),_0x703b24[_0x1779ea(0x477)]==_0x1779ea(0x453)&&(_0x809468['link']=_0x809468[_0x1779ea(0x3cd)][_0x1779ea(0x2b3)]('/summoner/','/tft/summoner/')),window[_0x1779ea(0x44c)]&&(_0x809468['link']=_0x809468[_0x1779ea(0x3cd)][_0x1779ea(0x2b3)](_0x1779ea(0x3f5),_0x1779ea(0x493))),_0xd0cfbf[_0x1779ea(0x559)](_0x809468);}),_0xd0cfbf;},_0x548e7d[_0x299a12(0x32a)][_0x299a12(0x2f0)]=function(_0x402e2a){var _0x332395=_0x299a12,_0x387b55=this,_0x106fd6=this[_0x332395(0x478)]['value']&&this['searchForm'][_0x332395(0x16d)][_0x332395(0x593)]||0x0;if(_0x402e2a[_0x332395(0x54a)]&&_0x402e2a[_0x332395(0x54a)][_0x332395(0x593)]||_0x402e2a[_0x332395(0x4e0)]&&_0x402e2a['summoners']['length']||_0x402e2a['recentlySeenSummoners']&&_0x402e2a[_0x332395(0x49d)][_0x332395(0x593)]||_0x402e2a[_0x332395(0x500)]&&_0x402e2a[_0x332395(0x500)][_0x332395(0x593)]||_0x402e2a[_0x332395(0x425)]&&_0x402e2a['cards'][_0x332395(0x593)]){var _0x35f945=_0x332395(0x228);if(_0x402e2a[_0x332395(0x54a)]&&_0x402e2a['champions']['length']>0x0){var _0x15693d=this[_0x332395(0x27d)][_0x332395(0x54a)];_0x35f945+=_0x332395(0x4f7),_0x35f945+=_0x332395(0x465),_0x35f945+=_0x15693d,_0x35f945+=_0x332395(0x2ea),_0x35f945+='</tr>',_0x402e2a['champions']['slice'](0x0,0x5)['forEach'](function(_0x9b4bcd){var _0x4e7b06=_0x332395;_0x35f945+=_0x4e7b06(0x4f7),_0x35f945+=_0x4e7b06(0x20a)+_0x9b4bcd[_0x4e7b06(0x239)]+'\x22>',_0x35f945+='<a\x20href=\x22'+_0x387b55[_0x4e7b06(0x4e8)](_0x9b4bcd)+_0x4e7b06(0x231)+_0x106fd6+_0x4e7b06(0x57a),_0x35f945+=_0x4e7b06(0x1b8),_0x35f945+=_0x4e7b06(0x326)+cdnDomain+_0x4e7b06(0x42a)+_0x9b4bcd[_0x4e7b06(0x239)]+_0x4e7b06(0x525)+_0x9b4bcd['championName']+_0x4e7b06(0x2a6)+_0x9b4bcd['championId']+'-36\x22\x20width=\x2236\x22\x20height=\x2236\x22></div>',_0x35f945+='<div\x20class=\x22txt\x22>'+_0x9b4bcd[_0x4e7b06(0x45d)]+_0x4e7b06(0x399),_0x35f945+=_0x4e7b06(0x399),_0x35f945+=_0x4e7b06(0x1de),_0x35f945+='</td>',_0x35f945+=_0x4e7b06(0x286);});}_0x402e2a[_0x332395(0x49d)]&&_0x402e2a['recentlySeenSummoners']['length']>0x0&&(_0x35f945+=_0x332395(0x4f7),_0x35f945+=_0x332395(0x465),_0x35f945+=this['localeStrings'][_0x332395(0x219)],_0x35f945+='</th>',_0x35f945+=_0x332395(0x286),_0x402e2a[_0x332395(0x49d)]['forEach'](function(_0x1b43db){var _0x32f87b=_0x332395;_0x35f945+='<tr>',_0x35f945+=_0x32f87b(0x20a)+_0x1b43db['summonerName']+'\x22>',_0x35f945+=_0x32f87b(0x410)+_0x1b43db['link']+_0x32f87b(0x456)+_0x106fd6+_0x32f87b(0x57a),_0x35f945+=_0x32f87b(0x1b8),_0x35f945+=_0x32f87b(0x467),_0x35f945+=_0x32f87b(0x1ae)+_0x1b43db[_0x32f87b(0x241)]+'\x20<span\x20class=\x22region\x22>('+_0x1b43db['region']+_0x32f87b(0x4aa),_0x35f945+=_0x32f87b(0x399),_0x35f945+='</a>',_0x35f945+=_0x32f87b(0x2ee),_0x35f945+=_0x32f87b(0x286);}));_0x402e2a[_0x332395(0x425)]&&_0x402e2a[_0x332395(0x425)][_0x332395(0x593)]>0x0&&(_0x35f945+='<tr>',_0x35f945+=_0x332395(0x465),_0x35f945+=this[_0x332395(0x27d)][_0x332395(0x425)],_0x35f945+=_0x332395(0x2ea),_0x35f945+=_0x332395(0x286),_0x402e2a[_0x332395(0x425)][_0x332395(0x27e)](function(_0x5218f4){var _0x195c9a=_0x332395;_0x35f945+=_0x195c9a(0x4f7),_0x35f945+='<td\x20data-value=\x22'+_0x5218f4[_0x195c9a(0x491)]+'\x22>',_0x35f945+=_0x195c9a(0x410)+_0x5218f4[_0x195c9a(0x3cd)]+_0x195c9a(0x430)+_0x106fd6+_0x195c9a(0x57a),_0x35f945+=_0x195c9a(0x1b8),_0x35f945+=_0x195c9a(0x215)+_0x5218f4[_0x195c9a(0x15b)]+_0x195c9a(0x186)+_0x5218f4['cardName']+'\x22\x20title=\x22'+_0x5218f4[_0x195c9a(0x491)]+_0x195c9a(0x353),_0x35f945+=_0x195c9a(0x1ae)+_0x5218f4[_0x195c9a(0x491)]+_0x195c9a(0x399),_0x35f945+=_0x195c9a(0x399),_0x35f945+=_0x195c9a(0x1de),_0x35f945+=_0x195c9a(0x2ee),_0x35f945+='</tr>';}));if(_0x402e2a[_0x332395(0x500)]&&_0x402e2a[_0x332395(0x500)]['length']>0x0){var _0xfb9d61='//'+cdnDomain+_0x332395(0x2c5);_0x35f945+='<tr>',_0x35f945+='<th>',_0x35f945+=this[_0x332395(0x27d)][_0x332395(0x526)],_0x35f945+=_0x332395(0x2ea),_0x35f945+='</tr>',_0x402e2a[_0x332395(0x500)][_0x332395(0x27e)](function(_0xd0078b){var _0x982ef3=_0x332395;_0x35f945+='<tr>',_0x35f945+=_0x982ef3(0x20a)+_0xd0078b[_0x982ef3(0x241)]+'\x22>',_0x35f945+='<a\x20href=\x22'+_0xd0078b[_0x982ef3(0x3cd)]+'\x22\x20onclick=\x22WgHelpers.sendGaEvent(\x27AutoComplete\x27,\x27Pro\x20clicked\x27,\x27Length:\x20'+_0x106fd6+_0x982ef3(0x57a),_0x35f945+=_0x982ef3(0x1b8),_0x35f945+=_0x982ef3(0x215)+_0xd0078b[_0x982ef3(0x15b)]+_0x982ef3(0x186)+_0xd0078b[_0x982ef3(0x241)]+'\x22\x20title=\x22'+_0xd0078b['summonerName']+_0x982ef3(0x389)+_0xfb9d61+_0x982ef3(0x50b)+_0xfb9d61+_0x982ef3(0x350),_0x35f945+=_0x982ef3(0x1ae)+_0xd0078b[_0x982ef3(0x241)]+'</div>',_0x35f945+=_0x982ef3(0x399),_0x35f945+=_0x982ef3(0x1de),_0x35f945+=_0x982ef3(0x2ee),_0x35f945+='</tr>';});}_0x402e2a[_0x332395(0x4e0)]&&_0x402e2a[_0x332395(0x4e0)]['length']>0x0&&(_0x35f945+='<tr>',_0x35f945+=_0x332395(0x465),_0x35f945+=this[_0x332395(0x27d)][_0x332395(0x4e0)],_0x35f945+='</th>',_0x35f945+=_0x332395(0x286),_0x402e2a[_0x332395(0x4e0)]['forEach'](function(_0x4a2749){var _0x40e695=_0x332395;_0x35f945+=_0x40e695(0x4f7),_0x35f945+=_0x40e695(0x20a)+_0x4a2749['summonerName']+'\x22>',_0x35f945+='<a\x20href=\x22'+_0x4a2749[_0x40e695(0x3cd)]+'\x22\x20onclick=\x22WgHelpers.sendGaEvent(\x27AutoComplete\x27,\x27Summoner\x20clicked\x27,\x27Length:\x20'+_0x106fd6+_0x40e695(0x57a),_0x35f945+=_0x40e695(0x1b8),_0x35f945+=_0x40e695(0x215)+_0x4a2749[_0x40e695(0x15b)]+_0x40e695(0x186)+_0x4a2749[_0x40e695(0x241)]+'\x22\x20title=\x22'+_0x4a2749['summonerName']+_0x40e695(0x3f9),_0x35f945+=_0x40e695(0x1ae)+_0x4a2749[_0x40e695(0x241)]+_0x40e695(0x175)+_0x4a2749[_0x40e695(0x1fd)]+_0x40e695(0x4aa),_0x35f945+=_0x40e695(0x399),_0x35f945+=_0x40e695(0x1de),_0x35f945+=_0x40e695(0x2ee),_0x35f945+=_0x40e695(0x286);})),_0x35f945+=_0x332395(0x52c),this['autocompleteElement'][_0x332395(0x1e2)]=_0x35f945,this[_0x332395(0x1a7)][_0x332395(0x4f2)][_0x332395(0x573)]=_0x332395(0x2e3);}else this[_0x332395(0x320)]();},_0x548e7d['prototype'][_0x299a12(0x4e8)]=function(_0x3bd69c){var _0x3f3055=_0x299a12;return this[_0x3f3055(0x477)]==_0x3f3055(0x453)?this['urlLanguagePrefix']+_0x3f3055(0x296)+_0x3bd69c[_0x3f3055(0x418)]:this['urlLanguagePrefix']+_0x3f3055(0x401)+_0x3bd69c[_0x3f3055(0x418)];},_0x548e7d[_0x299a12(0x56a)]=function(_0xb4f26a){var _0x24df8f=_0x299a12,_0x4b719b=[];_0x4b719b['push'](_0xb4f26a);while(_0xb4f26a[_0x24df8f(0x4fd)]){_0x4b719b[_0x24df8f(0x14d)](_0xb4f26a[_0x24df8f(0x4fd)]),_0xb4f26a=_0xb4f26a[_0x24df8f(0x4fd)];}return _0x4b719b;},_0x548e7d['defaultChampionsCount']=0x3,_0x548e7d[_0x299a12(0x3fe)]=0x5,_0x548e7d;}(),ResponseData=function(){function _0x3c0336(){var _0xf96e3f=a0_0x20be;this['champions']=null,this[_0xf96e3f(0x4e0)]=null,this[_0xf96e3f(0x49d)]=null,this[_0xf96e3f(0x500)]=null,this[_0xf96e3f(0x425)]=null;}return _0x3c0336;}(),SummonerData=function(){function _0xe622e4(){var _0x1114e0=a0_0x20be;this[_0x1114e0(0x15b)]=null,this['region']=null,this[_0x1114e0(0x241)]=null,this[_0x1114e0(0x3cd)]=null;}return _0xe622e4;}(),OverwolfPageLayoutManager=function(){var _0x414e90=a0_0x11f3d7;function _0x36d736(){}return _0x36d736['run']=function(){var _0x14c049=a0_0x20be;_0x36d736['restrictNavigationToOverwolfPages'](),_0x36d736[_0x14c049(0x3e0)](),_0x36d736[_0x14c049(0x404)](),_0x36d736[_0x14c049(0x2c9)](),_0x36d736['initMouseBackNextButtons'](),_0x36d736[_0x14c049(0x431)](),_0x36d736[_0x14c049(0x194)](),_0x36d736[_0x14c049(0x2ad)]();},_0x36d736[_0x414e90(0x409)]=function(){var _0x9a8b01=_0x414e90;$('a')[_0x9a8b01(0x442)](function(_0x2d3572,_0x42ce8f){var _0x9bb1b4=_0x9a8b01,_0x25db85=$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9));if(_0x25db85&&!_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x458))&&_0x25db85!='#'&&!_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x48c))){if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x375)))$(_0x42ce8f)['attr']('href',_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x375),_0x9bb1b4(0x586)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x4ec)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)]('/summoner/behavior/',_0x9bb1b4(0x1db)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x24f)))$(_0x42ce8f)['attr'](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)]('/summoner/challenges/',_0x9bb1b4(0x3b3)));else{if(_0x25db85[_0x9bb1b4(0x284)]('/summoner/'))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x3f5),_0x9bb1b4(0x493)));else{if(_0x25db85[_0x9bb1b4(0x284)]('/rankings/summoners'))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x420),_0x9bb1b4(0x3b9)));else{if(_0x25db85['includes'](_0x9bb1b4(0x377)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x377),_0x9bb1b4(0x1ee)));else{if(_0x25db85['includes'](_0x9bb1b4(0x4a1)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x4a1),'/tft/overwolf/summoners'));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x35b)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x35b),_0x9bb1b4(0x12e)));else{if(_0x25db85['includes'](_0x9bb1b4(0x1fb)))$(_0x42ce8f)[_0x9bb1b4(0x279)]('href',_0x25db85['replace'](_0x9bb1b4(0x1fb),'/tft/overwolf/comps'));else{if(_0x25db85['includes'](_0x9bb1b4(0x4e3)))$(_0x42ce8f)[_0x9bb1b4(0x279)]('href',_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x4e3),'/overwolf/match/'));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x31e)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)]('/champions/builds',_0x9bb1b4(0x232)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x468)))$(_0x42ce8f)[_0x9bb1b4(0x279)]('href',_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x468),_0x9bb1b4(0x31c)));else{if(_0x25db85['includes']('/champions/spells'))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x354),'/overwolf/champions-spells'));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x518)))$(_0x42ce8f)['attr'](_0x9bb1b4(0x4e9),_0x25db85['replace']('/champions/runes','/overwolf/champions-runes'));else{if(_0x25db85['includes'](_0x9bb1b4(0x21f)))$(_0x42ce8f)['attr']('href',_0x25db85['replace'](_0x9bb1b4(0x21f),_0x9bb1b4(0x1e5)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x3cc)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)]('/champions/counters',_0x9bb1b4(0x12b)));else{if(_0x25db85['includes'](_0x9bb1b4(0x4bd)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)]('/champions/items','/overwolf/champions-items'));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x47f)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x47f),_0x9bb1b4(0x2dd)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x3f4)))$(_0x42ce8f)['attr']('href',_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x3f4),'/overwolf/champions-jungle-paths'));else{if(_0x25db85['includes']('/replays/all'))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)]('/replays/all',_0x9bb1b4(0x15e)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x517)))$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x517),_0x9bb1b4(0x171)));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x551)))$(_0x42ce8f)['attr'](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x551),'/lor/overwolf/cards'));else{if(_0x25db85[_0x9bb1b4(0x284)](_0x9bb1b4(0x13d)))$(_0x42ce8f)[_0x9bb1b4(0x279)]('href',_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x13d),_0x9bb1b4(0x4d0)));else _0x25db85['includes'](_0x9bb1b4(0x44f))?$(_0x42ce8f)['attr'](_0x9bb1b4(0x4e9),_0x25db85[_0x9bb1b4(0x2b3)](_0x9bb1b4(0x44f),_0x9bb1b4(0x1a9))):($(_0x42ce8f)[_0x9bb1b4(0x145)](_0x9bb1b4(0x4e9)),$(_0x42ce8f)[_0x9bb1b4(0x2df)](_0x9bb1b4(0x345),'default'));}}}}}}}}}}}}}}}}}}}}}}$(_0x42ce8f)[_0x9bb1b4(0x279)](_0x9bb1b4(0x49e),_0x9bb1b4(0x2eb));}}),$('[title]')['removeAttr'](_0x9a8b01(0x443));},_0x36d736[_0x414e90(0x404)]=function(){var _0x4e20c3=_0x414e90;$(document)['off'](_0x4e20c3(0x459)),$(document)['on']('click.initForwardClickEventsToParent',function(){var _0x5d9a22=_0x4e20c3;parent&&parent[_0x5d9a22(0x1ba)]({'type':_0x5d9a22(0x37a)},'*');});},_0x36d736[_0x414e90(0x3e0)]=function(){var _0x258966=_0x414e90;$(_0x258966(0x314))[_0x258966(0x580)](_0x258966(0x281)),$(_0x258966(0x314))['on'](_0x258966(0x281),function(_0x2db0d0){var _0x25a3fc=_0x258966;parent&&parent!=window&&$(_0x2db0d0[_0x25a3fc(0x581)])[_0x25a3fc(0x279)](_0x25a3fc(0x4e9))&&$(_0x2db0d0[_0x25a3fc(0x581)])[_0x25a3fc(0x279)](_0x25a3fc(0x4e9))!=='#'&&(parent[_0x25a3fc(0x1ba)]({'type':_0x25a3fc(0x40d),'href':$(_0x2db0d0[_0x25a3fc(0x581)])['prop'](_0x25a3fc(0x4e9))},'*'),_0x2db0d0[_0x25a3fc(0x488)]());});},_0x36d736['initF5Button']=function(){var _0x2f23d5=_0x414e90;document[_0x2f23d5(0x4d1)]=function(_0x5d917f){var _0xae5c35=_0x2f23d5;(_0x5d917f['code']=='F5'||_0x5d917f[_0xae5c35(0x28c)]&&_0x5d917f['code']==_0xae5c35(0x21a))&&(parent['postMessage']({'type':_0xae5c35(0x142)},'*'),_0x5d917f['preventDefault']());};},_0x36d736[_0x414e90(0x4b9)]=function(){window['addEventListener']('mouseup',function(_0x127dc9){var _0x1e6739=a0_0x20be;_0x127dc9[_0x1e6739(0x3c4)]==0x4&&(_0x127dc9[_0x1e6739(0x488)](),parent[_0x1e6739(0x1ba)]({'type':_0x1e6739(0x28b)},'*')),_0x127dc9['button']==0x3&&(_0x127dc9['preventDefault'](),parent['postMessage']({'type':_0x1e6739(0x20f)},'*'));});},_0x36d736[_0x414e90(0x431)]=function(){var _0x13d245=_0x414e90;console['log'](_0x13d245(0x4ba)),$(window)['off'](_0x13d245(0x3eb)),$(window)['on'](_0x13d245(0x3eb),function(){var _0x2822ce=_0x13d245;console[_0x2822ce(0x225)](_0x2822ce(0x4a2)+!!parent),parent&&_0x36d736['iframeLoadedTimeout']&&(parent['postMessage']({'type':_0x2822ce(0x295)},'*'),clearTimeout(_0x36d736['iframeLoadedTimeout']));}),_0x36d736['iframeLoadedTimeout']=setTimeout(function(){return parent['postMessage']({'type':'iframeloaded'},'*');},0x1388);},_0x36d736[_0x414e90(0x3ab)]=function(_0x1f8e14){var _0x16eee6=_0x414e90;parent&&parent!=window&&parent[_0x16eee6(0x1ba)]({'type':'openExternalUrl','href':_0x1f8e14},'*');},_0x36d736[_0x414e90(0x17e)]=function(_0x36bb29){var _0x1a4284=_0x414e90;_0x36d736[_0x1a4284(0x30a)](_0x36bb29);var _0x4d6904=0x12c;$(_0x1a4284(0x455))['fadeOut'](_0x4d6904),setTimeout(function(){var _0x1e5ba8=_0x1a4284;return $(_0x1e5ba8(0x1cb))[_0x1e5ba8(0x235)](_0x4d6904);},_0x4d6904),setTimeout(function(){var _0x3e1be1=_0x1a4284;$(_0x3e1be1(0x1cb))['fadeOut'](_0x4d6904),setTimeout(function(){var _0x37a29d=_0x3e1be1;return $(_0x37a29d(0x455))[_0x37a29d(0x235)](_0x4d6904);},_0x4d6904);},0xbb8);},_0x36d736[_0x414e90(0x30a)]=function(_0x28415a){var _0x2de144=_0x414e90;parent&&parent!=window&&parent[_0x2de144(0x1ba)]({'type':'placeOnClipboard','url':_0x28415a},'*');},_0x36d736[_0x414e90(0x194)]=function(){var _0x252276=_0x414e90,_0x2ef66c=$(_0x252276(0x34d));_0x2ef66c[_0x252276(0x580)](_0x252276(0x37a)),_0x2ef66c[_0x252276(0x442)](function(_0x1225e0,_0x10c165){var _0x545334=_0x252276,_0x3758f2=$(_0x10c165)[_0x545334(0x37c)]('spectate-encryptionkey'),_0x315102=$(_0x10c165)['data'](_0x545334(0x567)),_0x494ac0=$(_0x10c165)[_0x545334(0x37c)](_0x545334(0x55d)),_0x23dc9=$(_0x10c165)[_0x545334(0x37c)](_0x545334(0x29d));$(_0x10c165)['on']('click',function(_0x16c36d){var _0x4dce66=_0x545334;parent&&parent!=window&&parent[_0x4dce66(0x1ba)]({'type':_0x4dce66(0x2ac),'endpoint':_0x23dc9,'encryptionKey':_0x3758f2,'matchId':_0x315102,'platformId':_0x494ac0},'*'),$('[data-rel=\x22spectatePopup\x22],\x20[data-rel=\x22spectatePopup\x22]\x20button')['attr'](_0x4dce66(0x42d),''),setTimeout(function(){var _0x3c659e=_0x4dce66;return $(_0x3c659e(0x1e6))[_0x3c659e(0x145)](_0x3c659e(0x42d));},0x3a98),_0x16c36d[_0x4dce66(0x488)]();});});},_0x36d736[_0x414e90(0x2ad)]=function(){var _0x4fc0ee=_0x414e90;$(_0x4fc0ee(0x31a))['attr']('data-additional-url-run-after',_0x4fc0ee(0x474));},_0x36d736[_0x414e90(0x1ce)]=0x0,_0x36d736;}(),OverwolfHelpers=function(){var _0x417767=a0_0x11f3d7;function _0x48b067(){}return _0x48b067[_0x417767(0x197)]=function(_0x14757f,_0xbb1144,_0x345d1f,_0x1c2bae,_0x279c01,_0x49544f,_0x4b9904,_0x10b51e){var _0x41e7bd=_0x417767;_0x10b51e===void 0x0&&(_0x10b51e=null),parent[_0x41e7bd(0x1ba)]({'type':_0x41e7bd(0x53f),'notification':{'title':_0x14757f,'txt':_0xbb1144,'clickButtonTxt':_0x345d1f,'onclick':_0x1c2bae,'id':_0x279c01,'notificationDuration':_0x49544f,'maxDisplaysWithoutInteraction':_0x4b9904,'notificationClass':_0x10b51e}},'*');},_0x48b067;}(),OverwolfFavoriteManager=function(){var _0x3a293e=a0_0x11f3d7;function _0x273ffd(_0x5c8f97,_0x5997be,_0x3de6d2,_0x491d6e){var _0x54f2e4=a0_0x20be;(!_0x5c8f97||!_0x5997be)&&console['error']('Incorrect\x20region\x20or\x20summonerName'),this[_0x54f2e4(0x41e)]=![],this[_0x54f2e4(0x1fd)]=_0x5c8f97[_0x54f2e4(0x349)](),this[_0x54f2e4(0x241)]=_0x5997be,this[_0x54f2e4(0x579)]=_0x3de6d2,this['removeText']=_0x491d6e,this[_0x54f2e4(0x48f)]();}return _0x273ffd[_0x3a293e(0x32a)][_0x3a293e(0x48f)]=function(){var _0xffb6cf=_0x3a293e,_0x91b887=this;console[_0xffb6cf(0x225)](_0xffb6cf(0x33c)),window[_0xffb6cf(0x381)](_0xffb6cf(0x132),function(_0x1d369a){var _0x254b83=_0xffb6cf;try{var _0x425539=typeof _0x1d369a[_0x254b83(0x37c)]===_0x254b83(0x387)?JSON[_0x254b83(0x45b)](_0x1d369a[_0x254b83(0x37c)]):_0x1d369a['data'];if(_0x425539['type']==='favoriteProfiles')try{var _0x9ec03b=_0x425539[_0x254b83(0x1bd)];_0x9ec03b[_0x254b83(0x444)](function(_0x2df222){var _0x3848b8=_0x254b83;return _0x2df222[_0x3848b8(0x1fd)]==_0x91b887['region']&&_0x2df222[_0x3848b8(0x241)][_0x3848b8(0x349)]()[_0x3848b8(0x27a)]('\x20','')==_0x91b887[_0x3848b8(0x241)][_0x3848b8(0x349)]()[_0x3848b8(0x27a)]('\x20','');})?(_0x91b887[_0x254b83(0x2cc)](),_0x91b887[_0x254b83(0x41e)]=!![]):(_0x91b887[_0x254b83(0x25d)](),_0x91b887['isFavorite']=![]);}catch(_0x28da79){console[_0x254b83(0x19a)](_0x28da79);}}catch(_0x4eacb7){}},![]);},_0x273ffd[_0x3a293e(0x32a)][_0x3a293e(0x202)]=function(){var _0xd99c7e=_0x3a293e;TooltipManager[_0xd99c7e(0x23f)](),this[_0xd99c7e(0x41e)]?(this[_0xd99c7e(0x25d)](),this['isFavorite']=![],this[_0xd99c7e(0x168)](![])):(this[_0xd99c7e(0x2cc)](),this[_0xd99c7e(0x41e)]=!![],this[_0xd99c7e(0x168)](!![])),WgHelpers[_0xd99c7e(0x135)](_0xd99c7e(0x2c2),'Favorite\x20button\x20click\x20'+this[_0xd99c7e(0x41e)],'');},_0x273ffd['prototype'][_0x3a293e(0x168)]=function(_0x2c2a05){var _0x172b28=_0x3a293e;parent['postMessage']({'type':'favoritesUpdated','add':_0x2c2a05,'region':this[_0x172b28(0x1fd)],'summonerName':this[_0x172b28(0x241)]},'*');},_0x273ffd[_0x3a293e(0x32a)][_0x3a293e(0x2cc)]=function(){var _0x8047d0=_0x3a293e;$(_0x8047d0(0x213))[_0x8047d0(0x4eb)](_0x8047d0(0x454)),$(_0x8047d0(0x213))[_0x8047d0(0x42f)](_0x8047d0(0x300)),$(_0x8047d0(0x213))[_0x8047d0(0x279)]('tooltip',this['removeText']);},_0x273ffd[_0x3a293e(0x32a)][_0x3a293e(0x25d)]=function(){var _0x39bb0f=_0x3a293e;$('#favoriteIcon')['removeClass'](_0x39bb0f(0x300)),$(_0x39bb0f(0x213))[_0x39bb0f(0x42f)](_0x39bb0f(0x454)),$(_0x39bb0f(0x213))[_0x39bb0f(0x279)](_0x39bb0f(0x2c3),this[_0x39bb0f(0x579)]);},_0x273ffd;}(),OverwolfLinkHelper=function(){var _0x50f9ba=a0_0x11f3d7;function _0x4c202b(){}return _0x4c202b[_0x50f9ba(0x36d)]=function(_0x301f29){var _0x44caa7=_0x50f9ba;console[_0x44caa7(0x225)]('Sending\x20msg\x20to\x20open\x20champions\x20page\x20'+_0x301f29),parent[_0x44caa7(0x1ba)]({'type':'openTftChampionPage','championSlug':_0x301f29},'*');},_0x4c202b['openTftCompsPage']=function(_0x3419e7){var _0xfa0bdb=_0x50f9ba;console['log']('Sending\x20msg\x20to\x20open\x20comps\x20page'),parent[_0xfa0bdb(0x1ba)]({'type':_0xfa0bdb(0x2c1),'comp':_0x3419e7},'*');},_0x4c202b[_0x50f9ba(0x1d7)]=function(){var _0x32f5ad=_0x50f9ba;parent[_0x32f5ad(0x1ba)]({'type':_0x32f5ad(0x1c6)},'*');},_0x4c202b;}(),OverwolfTftCompHelper=function(){var _0xe36625=a0_0x11f3d7;function _0x2822ab(){}return _0x2822ab[_0xe36625(0x385)]=function(_0x37366e,_0x2056bd){var _0x83ecac=_0xe36625;_0x2822ab['table']=_0x37366e,_0x2822ab[_0x83ecac(0x1c2)]=_0x2056bd,_0x2822ab[_0x83ecac(0x527)](),_0x2822ab[_0x83ecac(0x25e)]();},_0x2822ab[_0xe36625(0x25e)]=function(){var _0x1e49af=_0xe36625,_0x1ef3f3=_0x2822ab[_0x1e49af(0x250)]();$(_0x2822ab[_0x1e49af(0x4ac)])[_0x1e49af(0x444)]('tr')[_0x1e49af(0x442)](function(_0x569e31,_0x165182){var _0x3100c9=_0x1e49af;$(_0x165182)['attr'](_0x3100c9(0x1a0),_0x569e31),$(_0x165182)[_0x3100c9(0x279)](_0x3100c9(0x149),_0x569e31);var _0x5497a1=$(_0x165182)[_0x3100c9(0x279)](_0x3100c9(0x244)),_0x2c2ccb=$(_0x165182)[_0x3100c9(0x444)](_0x3100c9(0x2af));_0x1ef3f3[_0x3100c9(0x261)](_0x5497a1)>=0x0?_0x2c2ccb[_0x3100c9(0x42f)]('active'):_0x2c2ccb[_0x3100c9(0x4eb)](_0x3100c9(0x58e));}),_0x2822ab[_0x1e49af(0x1c2)]&&(_0x2822ab[_0x1e49af(0x260)](_0x1ef3f3),_0x2822ab[_0x1e49af(0x265)]());},_0x2822ab['toggleCompPin']=function(_0x311c2f){var _0x509fae=_0xe36625,_0x23ba67=$(_0x311c2f)[_0x509fae(0x312)]('tr'),_0x15b33b=$(_0x23ba67)['data'](_0x509fae(0x1f6)),_0x2fb8c8=_0x2822ab['getPinnedComps']();_0x2fb8c8['indexOf'](_0x15b33b)>=0x0?($(_0x311c2f)[_0x509fae(0x4eb)](_0x509fae(0x58e)),_0x2fb8c8=_0x2fb8c8[_0x509fae(0x1cc)](function(_0x1677ee){return _0x1677ee!=_0x15b33b;}),$(_0x23ba67)[_0x509fae(0x279)](_0x509fae(0x149),$(_0x23ba67)['attr'](_0x509fae(0x1a0)))):($(_0x311c2f)[_0x509fae(0x42f)]('active'),_0x2fb8c8[_0x509fae(0x559)](_0x15b33b),_0x2822ab[_0x509fae(0x1c2)]&&_0x2822ab['recomputeSortValues'](_0x2fb8c8)),_0x2822ab[_0x509fae(0x1c2)]&&_0x2822ab['reorderTable'](),_0x2822ab[_0x509fae(0x4a3)](_0x2fb8c8);},_0x2822ab['recomputeSortValues']=function(_0x36babc){var _0x58588e=_0xe36625,_0x3fe936=-0x1;_0x36babc[_0x58588e(0x27e)](function(_0x2186e4){var _0x5cb5e6=_0x58588e,_0x58912d=$(_0x2822ab[_0x5cb5e6(0x4ac)])[_0x5cb5e6(0x444)]('tr[data-champion-ids=\x22'+_0x2186e4+'\x22]');_0x58912d[_0x5cb5e6(0x593)]>0x0&&_0x58912d[_0x5cb5e6(0x279)](_0x5cb5e6(0x149),_0x3fe936),_0x3fe936--;});},_0x2822ab['reorderTable']=function(){var _0x3e9ce5=_0xe36625,_0x30607e=$(_0x2822ab[_0x3e9ce5(0x4ac)])[_0x3e9ce5(0x444)]('tr')['get']();_0x30607e=_0x30607e[_0x3e9ce5(0x1cc)](function(_0x39e3f7){var _0x2db351=_0x3e9ce5;return $(_0x39e3f7)[_0x2db351(0x444)]('th')[_0x2db351(0x593)]==0x0;}),_0x30607e[_0x3e9ce5(0x542)](function(_0x28d4d5,_0x4016de){var _0x3a6736=_0x3e9ce5,_0x40eeba=parseInt($(_0x28d4d5)[_0x3a6736(0x279)](_0x3a6736(0x149))),_0x4c3b99=parseInt($(_0x4016de)[_0x3a6736(0x279)](_0x3a6736(0x149)));if(_0x40eeba<_0x4c3b99)return-0x1;if(_0x40eeba>_0x4c3b99)return 0x1;return 0x0;}),$[_0x3e9ce5(0x442)](_0x30607e,function(_0x50fa28,_0xd5417f){var _0x177282=_0x3e9ce5;$(_0x2822ab[_0x177282(0x4ac)])[_0x177282(0x4f4)](_0x177282(0x529))[_0x177282(0x4cd)](_0xd5417f);});},_0x2822ab[_0xe36625(0x527)]=function(){var _0x3a0435=_0xe36625;window[_0x3a0435(0x381)]('storage',function(_0x6ea0fd){var _0x48bae5=_0x3a0435;_0x6ea0fd['key']==_0x2822ab['storageKey']&&_0x6ea0fd[_0x48bae5(0x4a9)]&&_0x2822ab[_0x48bae5(0x25e)]();});},_0x2822ab['getPinnedComps']=function(){var _0x27c15f=_0xe36625;return JSON[_0x27c15f(0x45b)](localStorage[_0x27c15f(0x481)](_0x2822ab[_0x27c15f(0x464)]))||[];},_0x2822ab[_0xe36625(0x4a3)]=function(_0xf01db1){var _0x2dc891=_0xe36625;localStorage[_0x2dc891(0x564)](_0x2822ab[_0x2dc891(0x464)],JSON[_0x2dc891(0x3e4)](_0xf01db1));},_0x2822ab[_0xe36625(0x464)]=_0xe36625(0x13c),_0x2822ab;}(),RecentGamesFilterHelper=function(){var _0x30af9c=a0_0x11f3d7;function _0x582245(){}return _0x582245[_0x30af9c(0x513)]=function(){var _0xcd6782=_0x30af9c;$(_0xcd6782(0x1f4))['on'](_0xcd6782(0x37a),function(){var _0x4b72a0=_0xcd6782,_0x12ab9b=$(this)[_0x4b72a0(0x37c)]('dropdown'),_0x58f450=$('#'+_0x12ab9b);return!_0x58f450['is'](_0x4b72a0(0x272))?(DropdownsHelper[_0x4b72a0(0x4e5)](),_0x58f450['css']({'display':_0x4b72a0(0x2e3)}),(isDesktop||isTablet)&&$('#'+_0x12ab9b+'\x20input')[_0x4b72a0(0x54b)]()):_0x58f450[_0x4b72a0(0x2df)]({'display':'none'}),![];}),$(_0xcd6782(0x292))[_0xcd6782(0x44a)](_0xcd6782(0x37a)),$(_0xcd6782(0x292))[_0xcd6782(0x37a)](function(_0x1803d1){var _0x4cdba0=_0xcd6782;WgHelpers['sendGaEvent'](_0x4cdba0(0x402),_0x4cdba0(0x4cb),$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('a')[_0x4cdba0(0x279)](_0x4cdba0(0x266))),TooltipManager[_0x4cdba0(0x23f)]();var _0x276fcf=$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('a')[_0x4cdba0(0x279)](_0x4cdba0(0x521)),_0x230e51=parseInt($(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('a')[_0x4cdba0(0x279)](_0x4cdba0(0x451))||'0'),_0x4637de=parseInt($(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('a')[_0x4cdba0(0x279)](_0x4cdba0(0x2e0))||'-1'),_0xf0284e=$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('a')[_0x4cdba0(0x279)](_0x4cdba0(0x159))||_0x4cdba0(0x205),_0x4f6f1f=_0x276fcf+(_0x230e51>0x0?_0x4cdba0(0x30d)+_0x230e51:'')+(_0x4637de>=0x0?_0x4cdba0(0x2e8)+_0x4637de:'')+(_0xf0284e!=_0x4cdba0(0x205)?_0x4cdba0(0x486)+encodeURIComponent(_0xf0284e):'');$(_0x4cdba0(0x463))['attr'](_0x4cdba0(0x2e0),_0x4637de),$(_0x4cdba0(0x463))[_0x4cdba0(0x279)](_0x4cdba0(0x159),_0xf0284e),$(_0x4cdba0(0x41f))['attr'](_0x4cdba0(0x451),_0x230e51),$(_0x4cdba0(0x41f))[_0x4cdba0(0x279)](_0x4cdba0(0x159),_0xf0284e),$(_0x4cdba0(0x3c3))['attr'](_0x4cdba0(0x2e0),_0x4637de),$(_0x4cdba0(0x3c3))['attr']('data-additional-champion-id',_0x230e51);var _0x7b8fc0=$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('a')['html']()[_0x4cdba0(0x2b3)](_0x4cdba0(0x46a),_0x4cdba0(0x55a))[_0x4cdba0(0x2b3)](_0x4cdba0(0x2fb),_0x4cdba0(0x386))[_0x4cdba0(0x2b3)]('-36\x20',_0x4cdba0(0x3bf));$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x312)](_0x4cdba0(0x434))[_0x4cdba0(0x444)](_0x4cdba0(0x4b5))[_0x4cdba0(0x318)](_0x7b8fc0);var _0x4a8c03=$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x312)](_0x4cdba0(0x4a4));return $(_0x1803d1[_0x4cdba0(0x2e4)])['parents'](_0x4cdba0(0x434))[_0x4cdba0(0x444)](_0x4cdba0(0x51b))[_0x4cdba0(0x4eb)](_0x4cdba0(0x18a)),$(_0x1803d1[_0x4cdba0(0x2e4)])[_0x4cdba0(0x35e)]('li')['addClass'](_0x4cdba0(0x18a)),AjaxManager['enableSpinner'](),DropdownsHelper['closeDropdowns'](),$[_0x4cdba0(0x3f8)](_0x4f6f1f)[_0x4cdba0(0x452)](function(_0x5eb4e2){var _0x1618a6=_0x4cdba0;AjaxManager['disableSpinner'](),_0x4a8c03[_0x1618a6(0x444)]('tr:gt(1)')['remove'](),_0x4a8c03[_0x1618a6(0x444)](_0x1618a6(0x278))[_0x1618a6(0x590)](),_0x4a8c03[_0x1618a6(0x4cd)](_0x5eb4e2),SeeMoreAjaxHelper[_0x1618a6(0x513)](),TooltipManager[_0x1618a6(0x23f)](),TooltipManager[_0x1618a6(0x37d)](),initPopupButtonOnClick(),DateHelper['updateDates'](),updateSpectateLinks(),window['isOverwolf']&&OverwolfPageLayoutManager[_0x1618a6(0x2e1)](),Foundation[_0x1618a6(0x210)][_0x1618a6(0x39b)][_0x1618a6(0x2ef)]();}),![];}),$('.recentGamesFilterExpander')['unbind'](_0xcd6782(0x37a)),$(_0xcd6782(0x41c))[_0xcd6782(0x37a)](function(_0x1d9a9a){var _0x341e83=_0xcd6782,_0x17b4cf=$(_0x341e83(0x285));return _0x17b4cf['is'](_0x341e83(0x272))?(_0x17b4cf[_0x341e83(0x2df)](_0x341e83(0x573),_0x341e83(0x205)),$(_0x341e83(0x41c))[_0x341e83(0x444)](_0x341e83(0x311))[_0x341e83(0x4eb)](_0x341e83(0x390))[_0x341e83(0x42f)](_0x341e83(0x293))):(_0x17b4cf[_0x341e83(0x2df)]('display',_0x341e83(0x25f)),$('.recentGamesFilterExpander')[_0x341e83(0x444)](_0x341e83(0x311))[_0x341e83(0x4eb)](_0x341e83(0x293))[_0x341e83(0x42f)](_0x341e83(0x390))),![];});},_0x582245;}();RecentGamesFilterHelper[a0_0x11f3d7(0x513)]();var NightModeSwitch=function(){var _0x453176=a0_0x11f3d7;function _0xe93e96(){}return _0xe93e96[_0x453176(0x24c)]=function(){var _0x69fb0d=_0x453176,_0x1b91d0=_0xe93e96[_0x69fb0d(0x2cd)]();WgHelpers[_0x69fb0d(0x135)](_0x69fb0d(0x1a3),_0x1b91d0?_0x69fb0d(0x53c):_0x69fb0d(0x3c7),''),WgHelpers[_0x69fb0d(0x4dc)](_0x69fb0d(0x2d7),_0x1b91d0?'0':'1',0x16d),location[_0x69fb0d(0x368)]();},_0xe93e96[_0x453176(0x2cd)]=function(){var _0x40bdc5=_0x453176,_0x37666e=WgHelpers['getCookie'](_0x40bdc5(0x2d7));return!!(_0x37666e&&parseInt(_0x37666e));},_0xe93e96;}(),AdBlockHelper=function(){var _0x3d56b1=a0_0x11f3d7;function _0xdbdcdd(){}return _0xdbdcdd[_0x3d56b1(0x1e3)]=function(_0x5bba60,_0x3e0f8b,_0x56813f){var _0x24b62a=_0x3d56b1;(!_0x56813f||(navigator[_0x24b62a(0x2db)]||navigator['userLanguage'])==_0x56813f)&&adblockDetect(function(_0x535b85){var _0x278939=_0x24b62a;_0x535b85?(setTimeout(function(){var _0x1f5f6c=a0_0x20be;$(_0x5bba60)['css'](_0x1f5f6c(0x307),_0x1f5f6c(0x549)),$(_0x5bba60)[_0x1f5f6c(0x309)]()[_0x1f5f6c(0x2df)](_0x1f5f6c(0x363),_0x1f5f6c(0x23d)),$(_0x5bba60)['parent']()[_0x1f5f6c(0x2df)](_0x1f5f6c(0x3b5),_0x1f5f6c(0x273)),$(_0x5bba60)[_0x1f5f6c(0x309)]()[_0x1f5f6c(0x4cd)](_0x3e0f8b);},0x3e8),console[_0x278939(0x225)](_0x278939(0x4ef))):console[_0x278939(0x225)](_0x278939(0x392));});},_0xdbdcdd;}(),OverwolfAdManager=function(){var _0x5d4e7e=a0_0x11f3d7;function _0x5ec22f(){}return _0x5ec22f[_0x5d4e7e(0x4d9)]=function(){setTimeout(function(){adblockDetect(function(_0x26a69f){var _0x433216=a0_0x20be;if(_0x26a69f){console[_0x433216(0x225)]('Ad\x20block\x20detected,\x20OW\x20fallback');if($(_0x433216(0x1a2))[_0x433216(0x593)]>0x0&&$(_0x433216(0x1a2))[_0x433216(0x318)]()[_0x433216(0x41d)]()[_0x433216(0x593)]==0x0){var _0xc8b3c5=Math['floor'](Math[_0x433216(0x160)]()*0x7),_0x407d78='owimg_'+_0xc8b3c5+_0x433216(0x2de),_0x5f4fc9='https://porofessor.gg'+urlLanguagePrefix+_0x433216(0x24d);$(_0x433216(0x1a2))['append']('<a\x20href=\x22'+_0x5f4fc9+_0x433216(0x574)+_0x407d78+_0x433216(0x360)+_0x407d78+_0x433216(0x301));}}else console[_0x433216(0x225)](_0x433216(0x200));});},0x3e8);},_0x5ec22f;}();OverwolfAdManager[a0_0x11f3d7(0x4d9)]();var TftManager=function(){var _0x576497=a0_0x11f3d7;function _0x39affa(_0x487269,_0x3753f1,_0x2e33d7,_0x1d4c87,_0x4b9e2c,_0x4bff71,_0xee7432,_0x15e2a7){var _0x1b75c0=a0_0x20be;_0x4bff71===void 0x0&&(_0x4bff71=!![]);_0xee7432===void 0x0&&(_0xee7432=!![]);_0x15e2a7===void 0x0&&(_0x15e2a7=0x30);var _0x244be6=this;this['selectedChampions']=[],this[_0x1b75c0(0x57c)]=_0x487269[_0x1b75c0(0x349)](),this[_0x1b75c0(0x44c)]=_0x3753f1,this[_0x1b75c0(0x4ae)]=_0x2e33d7,this[_0x1b75c0(0x214)]=_0x1d4c87,this['allItems']=_0x4b9e2c,this[_0x1b75c0(0x1b9)]=null,this[_0x1b75c0(0x3c6)]=_0x4bff71,this[_0x1b75c0(0x4fa)]=_0xee7432,this[_0x1b75c0(0x185)]=_0x15e2a7,$('#tftTeamBuilder\x20.championsList\x20.championBox\x20.championIcon')[_0x1b75c0(0x37a)](function(_0x247aad){return _0x244be6['onChampionListChampionClick'](_0x247aad);}),$(_0x1b75c0(0x1ec))[_0x1b75c0(0x37a)](function(_0x613815){var _0x259e5a=_0x1b75c0;return _0x244be6[_0x259e5a(0x4b4)](_0x613815);});if(this[_0x1b75c0(0x4fa)]&&window[_0x1b75c0(0x569)][_0x1b75c0(0x395)]&&window[_0x1b75c0(0x569)]['hash'][_0x1b75c0(0x593)]>0x1){var _0x28c392=window['location'][_0x1b75c0(0x395)][_0x1b75c0(0x427)](0x1);_0x28c392[_0x1b75c0(0x317)](',')[_0x1b75c0(0x208)](function(_0x229e5a){return parseInt(_0x229e5a);})[_0x1b75c0(0x27e)](function(_0x301e7a){var _0x45d773=_0x1b75c0;return $('#tftTeamBuilder\x20.championsList\x20.championBox[data-champion-id=\x22'+_0x301e7a+_0x45d773(0x267))['click']();});}}return _0x39affa['prototype']['getAllChampions']=function(){}