/* WebUploader 0.1.5 */!function(a,b){var c,d={},e=function(a,b){var c,d,e;if("string"==typeof a)return h(a);for(c=[],d=a.length,e=0;d>e;e++)c.push(h(a[e]));return b.apply(null,c)},f=function(a,b,c){2===arguments.length&&(c=b,b=null),e(b||[],function(){g(a,c,arguments)})},g=function(a,b,c){var f,g={exports:b};"function"==typeof b&&(c.length||(c=[e,g.exports,g]),f=b.apply(null,c),void 0!==f&&(g.exports=f)),d[a]=g.exports},h=function(b){var c=d[b]||a[b];if(!c)throw new Error("`"+b+"` is undefined");return c},i=function(a){var b,c,e,f,g,h;h=function(a){return a&&a.charAt(0).toUpperCase()+a.substr(1)};for(b in d)if(c=a,d.hasOwnProperty(b)){for(e=b.split("/"),g=h(e.pop());f=h(e.shift());)c[f]=c[f]||{},c=c[f];c[g]=d[b]}return a},j=function(c){return a.__dollar=c,i(b(a,f,e))};"object"==typeof module&&"object"==typeof module.exports?module.exports=j():"function"==typeof define&&define.amd?define(["jquery"],j):(c=a.WebUploader,a.WebUploader=j(),a.WebUploader.noConflict=function(){a.WebUploader=c})}(window,function(a,b,c){return b("dollar-third",[],function(){var b=a.__dollar||a.jQuery||a.Zepto;if(!b)throw new Error("jQuery or Zepto not found!");return b}),b("dollar",["dollar-third"],function(a){return a}),b("promise-third",["dollar"],function(a){return{Deferred:a.Deferred,when:a.when,isPromise:function(a){return a&&"function"==typeof a.then}}}),b("promise",["promise-third"],function(a){return a}),b("base",["dollar","promise"],function(b,c){function d(a){return function(){return h.apply(a,arguments)}}function e(a,b){return function(){return a.apply(b,arguments)}}function f(a){var b;return Object.create?Object.create(a):(b=function(){},b.prototype=a,new b)}var g=function(){},h=Function.call;return{version:"0.1.5",$:b,Deferred:c.Deferred,isPromise:c.isPromise,when:c.when,browser:function(a){var b={},c=a.match(/WebKit\/([\d.]+)/),d=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),e=a.match(/MSIE\s([\d\.]+)/)||a.match(/(?:trident)(?:.*rv:([\w.]+))?/i),f=a.match(/Firefox\/([\d.]+)/),g=a.match(/Safari\/([\d.]+)/),h=a.match(/OPR\/([\d.]+)/);return c&&(b.webkit=parseFloat(c[1])),d&&(b.chrome=parseFloat(d[1])),e&&(b.ie=parseFloat(e[1])),f&&(b.firefox=parseFloat(f[1])),g&&(b.safari=parseFloat(g[1])),h&&(b.opera=parseFloat(h[1])),b}(navigator.userAgent),os:function(a){var b={},c=a.match(/(?:Android);?[\s\/]+([\d.]+)?/),d=a.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);return c&&(b.android=parseFloat(c[1])),d&&(b.ios=parseFloat(d[1].replace(/_/g,"."))),b}(navigator.userAgent),inherits:function(a,c,d){var e;return"function"==typeof c?(e=c,c=null):e=c&&c.hasOwnProperty("constructor")?c.constructor:function(){return a.apply(this,arguments)},b.extend(!0,e,a,d||{}),e.__super__=a.prototype,e.prototype=f(a.prototype),c&&b.extend(!0,e.prototype,c),e},noop:g,bindFn:e,log:function(){return a.console?e(console.log,console):g}(),nextTick:function(){return function(a){setTimeout(a,1)}}(),slice:d([].slice),guid:function(){var a=0;return function(b){for(var c=(+new Date).toString(32),d=0;5>d;d++)c+=Math.floor(65535*Math.random()).toString(32);return(b||"wu_")+c+(a++).toString(32)}}(),formatSize:function(a,b,c){var d;for(c=c||["B","K","M","G","TB"];(d=c.shift())&&a>1024;)a/=1024;return("B"===d?a:a.toFixed(b||2))+d}}}),b("mediator",["base"],function(a){function b(a,b,c,d){return f.grep(a,function(a){return!(!a||b&&a.e!==b||c&&a.cb!==c&&a.cb._cb!==c||d&&a.ctx!==d)})}function c(a,b,c){f.each((a||"").split(h),function(a,d){c(d,b)})}function d(a,b){for(var c,d=!1,e=-1,f=a.length;++e<f;)if(c=a[e],c.cb.apply(c.ctx2,b)===!1){d=!0;break}return!d}var e,f=a.$,g=[].slice,h=/\s+/;return e={on:function(a,b,d){var e,f=this;return b?(e=this._events||(this._events=[]),c(a,b,function(a,b){var c={e:a};c.cb=b,c.ctx=d,c.ctx2=d||f,c.id=e.length,e.push(c)}),this):this},once:function(a,b,d){var e=this;return b?(c(a,b,function(a,b){var c=function(){return e.off(a,c),b.apply(d||e,arguments)};c._cb=b,e.on(a,c,d)}),e):e},off:function(a,d,e){var g=this._events;return g?a||d||e?(c(a,d,function(a,c){f.each(b(g,a,c,e),function(){delete g[this.id]})}),this):(this._events=[],this):this},trigger:function(a){var c,e,f;return this._events&&a?(c=g.call(arguments,1),e=b(this._events,a),f=b(this._events,"all"),d(e,c)&&d(f,arguments)):this}},f.extend({installTo:function(a){return f.extend(a,e)}},e)}),b("uploader",["base","mediator"],function(a,b){function c(a){this.options=d.extend(!0,{},c.options,a),this._init(this.options)}var d=a.$;return c.options={},b.installTo(c.prototype),d.each({upload:"start-upload",stop:"stop-upload",getFile:"get-file",getFiles:"get-files",addFile:"add-file",addFiles:"add-file",sort:"sort-files",removeFile:"remove-file",cancelFile:"cancel-file",skipFile:"skip-file",retry:"retry",isInProgress:"is-in-progress",makeThumb:"make-thumb",md5File:"md5-file",getDimension:"get-dimension",addButton:"add-btn",predictRuntimeType:"predict-runtime-type",refresh:"refresh",disable:"disable",enable:"enable",reset:"reset"},function(a,b){c.prototype[a]=function(){return this.request(b,arguments)}}),d.extend(c.prototype,{state:"pending",_init:function(a){var b=this;b.request("init",a,function(){b.state="ready",b.trigger("ready")})},option:function(a,b){var c=this.options;return arguments.length>1?void(d.isPlainObject(b)&&d.isPlainObject(c[a])?d.extend(c[a],b):c[a]=b):a?c[a]:c},getStats:function(){var a=this.request("get-stats");return a?{successNum:a.numOfSuccess,progressNum:a.numOfProgress,cancelNum:a.numOfCancel,invalidNum:a.numOfInvalid,uploadFailNum:a.numOfUploadFailed,queueNum:a.numOfQueue,interruptNum:a.numofInterrupt}:{}},trigger:function(a){var c=[].slice.call(arguments,1),e=this.options,f="on"+a.substring(0,1).toUpperCase()+a.substring(1);return b.trigger.apply(this,arguments)===!1||d.isFunction(e[f])&&e[f].apply(this,c)===!1||d.isFunction(this[f])&&this[f].apply(this,c)===!1||b.trigger.apply(b,[this,a].concat(c))===!1?!1:!0},destroy:function(){this.request("destroy",arguments),this.off()},request:a.noop}),a.create=c.create=function(a){return new c(a)},a.Uploader=c,c}),b("runtime/runtime",["base","mediator"],function(a,b){function c(b){this.options=d.extend({container:document.body},b),this.uid=a.guid("rt_")}var d=a.$,e={},f=function(a){for(var b in a)if(a.hasOwnProperty(b))return b;return null};return d.extend(c.prototype,{getContainer:function(){var a,b,c=this.options;return this._container?this._container:(a=d(c.container||document.body),b=d(document.createElement("div")),b.attr("id","rt_"+this.uid),b.css({position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),a.append(b),a.addClass("webuploader-container"),this._container=b,this._parent=a,b)},init:a.noop,exec:a.noop,destroy:function(){this._container&&this._container.remove(),this._parent&&this._parent.removeClass("webuploader-container"),this.off()}}),c.orders="html5,flash",c.addRuntime=function(a,b){e[a]=b},c.hasRuntime=function(a){return!!(a?e[a]:f(e))},c.create=function(a,b){var g,h;if(b=b||c.orders,d.each(b.split(/\s*,\s*/g),function(){return e[this]?(g=this,!1):void 0}),g=g||f(e),!g)throw new Error("Runtime Error");return h=new e[g](a)},b.installTo(c.prototype),c}),b("runtime/client",["base","mediator","runtime/runtime"],function(a,b,c){function d(b,d){var f,g=a.Deferred();this.uid=a.guid("client_"),this.runtimeReady=function(a){return g.done(a)},this.connectRuntime=function(b,h){if(f)throw new Error("already connected!");return g.done(h),"string"==typeof b&&e.get(b)&&(f=e.get(b)),f=f||e.get(null,d),f?(a.$.extend(f.options,b),f.__promise.then(g.resolve),f.__client++):(f=c.create(b,b.runtimeOrder),f.__promise=g.promise(),f.once("ready",g.resolve),f.init(),e.add(f),f.__client=1),d&&(f.__standalone=d),f},this.getRuntime=function(){return f},this.disconnectRuntime=function(){f&&(f.__client--,f.__client<=0&&(e.remove(f),delete f.__promise,f.destroy()),f=null)},this.exec=function(){if(f){var c=a.slice(arguments);return b&&c.unshift(b),f.exec.apply(this,c)}},this.getRuid=function(){return f&&f.uid},this.destroy=function(a){return function(){a&&a.apply(this,arguments),this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()}}(this.destroy)}var e;return e=function(){var a={};return{add:function(b){a[b.uid]=b},get:function(b,c){var d;if(b)return a[b];for(d in a)if(!c||!a[d].__standalone)return a[d];return null},remove:function(b){delete a[b.uid]}}}(),b.installTo(d.prototype),d}),b("lib/dnd",["base","mediator","runtime/client"],function(a,b,c){function d(a){a=this.options=e.extend({},d.options,a),a.container=e(a.container),a.container.length&&c.call(this,"DragAndDrop")}var e=a.$;return d.options={accept:null,disableGlobalDnd:!1},a.inherits(c,{constructor:d,init:function(){var a=this;a.connectRuntime(a.options,function(){a.exec("init"),a.trigger("ready")})}}),b.installTo(d.prototype),d}),b("widgets/widget",["base","uploader"],function(a,b){function c(a){if(!a)return!1;var b=a.length,c=e.type(a);return 1===a.nodeType&&b?!0:"array"===c||"function"!==c&&"string"!==c&&(0===b||"number"==typeof b&&b>0&&b-1 in a)}function d(a){this.owner=a,this.options=a.options}var e=a.$,f=b.prototype._init,g=b.prototype.destroy,h={},i=[];return e.extend(d.prototype,{init:a.noop,invoke:function(a,b){var c=this.responseMap;return c&&a in c&&c[a]in this&&e.isFunction(this[c[a]])?this[c[a]].apply(this,b):h},request:function(){return this.owner.request.apply(this.owner,arguments)}}),e.extend(b.prototype,{_init:function(){var a=this,b=a._widgets=[],c=a.options.disableWidgets||"";return e.each(i,function(d,e){(!c||!~c.indexOf(e._name))&&b.push(new e(a))}),f.apply(a,arguments)},request:function(b,d,e){var f,g,i,j,k=0,l=this._widgets,m=l&&l.length,n=[],o=[];for(d=c(d)?d:[d];m>k;k++)f=l[k],g=f.invoke(b,d),g!==h&&(a.isPromise(g)?o.push(g):n.push(g));return e||o.length?(i=a.when.apply(a,o),j=i.pipe?"pipe":"then",i[j](function(){var b=a.Deferred(),c=arguments;return 1===c.length&&(c=c[0]),setTimeout(function(){b.resolve(c)},1),b.promise()})[e?j:"done"](e||a.noop)):n[0]},destroy:function(){g.apply(this,arguments),this._widgets=null}}),b.register=d.register=function(b,c){var f,g={init:"init",destroy:"destroy",name:"anonymous"};return 1===arguments.length?(c=b,e.each(c,function(a){return"_"===a[0]||"name"===a?void("name"===a&&(g.name=c.name)):void(g[a.replace(/[A-Z]/g,"-$&").toLowerCase()]=a)})):g=e.extend(g,b),c.responseMap=g,f=a.inherits(d,c),f._name=g.name,i.push(f),f},b.unRegister=d.unRegister=function(a){if(a&&"anonymous"!==a)for(var b=i.length;b--;)i[b]._name===a&&i.splice(b,1)},d}),b("widgets/filednd",["base","uploader","lib/dnd","widgets/widget"],function(a,b,c){var d=a.$;return b.options.dnd="",b.register({name:"dnd",init:function(b){if(b.dnd&&"html5"===this.request("predict-runtime-type")){var e,f=this,g=a.Deferred(),h=d.extend({},{disableGlobalDnd:b.disableGlobalDnd,container:b.dnd,accept:b.accept});return this.dnd=e=new c(h),e.once("ready",g.resolve),e.on("drop",function(a){f.request("add-file",[a])}),e.on("accept",function(a){return f.owner.trigger("dndAccept",a)}),e.init(),g.promise()}},destroy:function(){this.dnd&&this.dnd.destroy()}})}),b("lib/filepaste",["base","mediator","runtime/client"],function(a,b,c){function d(a){a=this.options=e.extend({},a),a.container=e(a.container||document.body),c.call(this,"FilePaste")}var e=a.$;return a.inherits(c,{constructor:d,init:function(){var a=this;a.connectRuntime(a.options,function(){a.exec("init"),a.trigger("ready")})}}),b.installTo(d.prototype),d}),b("widgets/filepaste",["base","uploader","lib/filepaste","widgets/widget"],function(a,b,c){var d=a.$;return b.register({name:"paste",init:function(b){if(b.paste&&"html5"===this.request("predict-runtime-type")){var e,f=this,g=a.Deferred(),h=d.extend({},{container:b.paste,accept:b.accept});return this.paste=e=new c(h),e.once("ready",g.resolve),e.on("paste",function(a){f.owner.request("add-file",[a])}),e.init(),g.promise()}},destroy:function(){this.paste&&this.paste.destroy()}})}),b("lib/blob",["base","runtime/client"],function(a,b){function c(a,c){var d=this;d.source=c,d.ruid=a,this.size=c.size||0,this.type=!c.type&&this.ext&&~"jpg,jpeg,png,gif,bmp".indexOf(this.ext)?"image/"+("jpg"===this.ext?"jpeg":this.ext):c.type||"application/octet-stream",b.call(d,"Blob"),this.uid=c.uid||this.uid,a&&d.connectRuntime(a)}return a.inherits(b,{constructor:c,slice:function(a,b){return this.exec("slice",a,b)},getSource:function(){return this.source}}),c}),b("lib/file",["base","lib/blob"],function(a,b){function c(a,c){var f;this.name=c.name||"untitled"+d++,f=e.exec(c.name)?RegExp.$1.toLowerCase():"",!f&&c.type&&(f=/\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type)?RegExp.$1.toLowerCase():"",this.name+="."+f),this.ext=f,this.lastModifiedDate=c.lastModifiedDate||(new Date).toLocaleString(),b.apply(this,arguments)}var d=1,e=/\.([^.]+)$/;return a.inherits(b,c)}),b("lib/filepicker",["base","runtime/client","lib/file"],function(b,c,d){function e(a){if(a=this.options=f.extend({},e.options,a),a.container=f(a.id),!a.container.length)throw new Error("按钮指定错误");a.innerHTML=a.innerHTML||a.label||a.container.html()||"",a.button=f(a.button||document.createElement("div")),a.button.html(a.innerHTML),a.container.html(a.button),c.call(this,"FilePicker",!0)}var f=b.$;return e.options={button:null,container:null,label:null,innerHTML:null,multiple:!0,accept:null,name:"file"},b.inherits(c,{constructor:e,init:function(){var c=this,e=c.options,g=e.button;g.addClass("webuploader-pick"),c.on("all",function(a){var b;switch(a){case"mouseenter":g.addClass("webuploader-pick-hover");break;case"mouseleave":g.removeClass("webuploader-pick-hover");break;case"change":b=c.exec("getFiles"),c.trigger("select",f.map(b,function(a){return a=new d(c.getRuid(),a),a._refer=e.container,a}),e.container)}}),c.connectRuntime(e,function(){c.refresh(),c.exec("init",e),c.trigger("ready")}),this._resizeHandler=b.bindFn(this.refresh,this),f(a).on("resize",this._resizeHandler)},refresh:function(){var a=this.getRuntime().getContainer(),b=this.options.button,c=b.outerWidth?b.outerWidth():b.width(),d=b.outerHeight?b.outerHeight():b.height(),e=b.offset();c&&d&&a.css({bottom:"auto",right:"auto",width:c+"px",height:d+"px"}).offset(e)},enable:function(){var a=this.options.button;a.removeClass("webuploader-pick-disable"),this.refresh()},disable:function(){var a=this.options.button;this.getRuntime().getContainer().css({top:"-99999px"}),a.addClass("webuploader-pick-disable")},destroy:function(){var b=this.options.button;f(a).off("resize",this._resizeHandler),b.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")}}),e}),b("widgets/filepicker",["base","uploader","lib/filepicker","widgets/widget"],function(a,b,c){var d=a.$;return d.extend(b.options,{pick:null,accept:null}),b.register({name:"picker",init:function(a){return this.pickers=[],a.pick&&this.addBtn(a.pick)},refresh:function(){d.each(this.pickers,function(){this.refresh()})},addBtn:function(b){var e=this,f=e.options,g=f.accept,h=[];if(b)return d.isPlainObject(b)||(b={id:b}),d(b.id).each(function(){var i,j,k;k=a.Deferred(),i=d.extend({},b,{accept:d.isPlainObject(g)?[g]:g,swf:f.swf,runtimeOrder:f.runtimeOrder,id:this}),j=new c(i),j.once("ready",k.resolve),j.on("select",function(a){e.owner.request("add-file",[a])}),j.init(),e.pickers.push(j),h.push(k.promise())}),a.when.apply(a,h)},disable:function(){d.each(this.pickers,function(){this.disable()})},enable:function(){d.each(this.pickers,function(){this.enable()})},destroy:function(){d.each(this.pickers,function(){this.destroy()}),this.pickers=null}})}),b("lib/image",["base","runtime/client","lib/blob"],function(a,b,c){function d(a){this.options=e.extend({},d.options,a),b.call(this,"Image"),this.on("load",function(){this._info=this.exec("info"),this._meta=this.exec("meta")})}var e=a.$;return d.options={quality:90,crop:!1,preserveHeaders:!1,allowMagnify:!1},a.inherits(b,{constructor:d,info:function(a){return a?(this._info=a,this):this._info},meta:function(a){return a?(this._meta=a,this):this._meta},loadFromBlob:function(a){var b=this,c=a.getRuid();this.connectRuntime(c,function(){b.exec("init",b.options),b.exec("loadFromBlob",a)})},resize:function(){var b=a.slice(arguments);return this.exec.apply(this,["resize"].concat(b))},crop:function(){var b=a.slice(arguments);return this.exec.apply(this,["crop"].concat(b))},getAsDataUrl:function(a){return this.exec("getAsDataUrl",a)},getAsBlob:function(a){var b=this.exec("getAsBlob",a);return new c(this.getRuid(),b)}}),d}),b("widgets/image",["base","uploader","lib/image","widgets/widget"],function(a,b,c){var d,e=a.$;return d=function(a){var b=0,c=[],d=function(){for(var d;c.length&&a>b;)d=c.shift(),b+=d[0],d[1]()};return function(a,e,f){c.push([e,f]),a.once("destroy",function(){b-=e,setTimeout(d,1)}),setTimeout(d,1)}}(5242880),e.extend(b.options,{thumb:{width:110,height:110,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"},compress:{width:1600,height:1600,quality:90,allowMagnify:!1,crop:!1,preserveHeaders:!0}}),b.register({name:"image",makeThumb:function(a,b,f,g){var h,i;return a=this.request("get-file",a),a.type.match(/^image/)?(h=e.extend({},this.options.thumb),e.isPlainObject(f)&&(h=e.extend(h,f),f=null),f=f||h.width,g=g||h.height,i=new c(h),i.once("load",function(){a._info=a._info||i.info(),a._meta=a._meta||i.meta(),1>=f&&f>0&&(f=a._info.width*f),1>=g&&g>0&&(g=a._info.height*g),i.resize(f,g)}),i.once("complete",function(){b(!1,i.getAsDataUrl(h.type)),i.destroy()}),i.once("error",function(a){b(a||!0),i.destroy()}),void d(i,a.source.size,function(){a._info&&i.info(a._info),a._meta&&i.meta(a._meta),i.loadFromBlob(a.source)})):void b(!0)},beforeSendFile:function(b){var d,f,g=this.options.compress||this.options.resize,h=g&&g.compressSize||0,i=g&&g.noCompressIfLarger||!1;return b=this.request("get-file",b),!g||!~"image/jpeg,image/jpg".indexOf(b.type)||b.size<h||b._compressed?void 0:(g=e.extend({},g),f=a.Deferred(),d=new c(g),f.always(function(){d.destroy(),d=null}),d.once("error",f.reject),d.once("load",function(){var a=g.width,c=g.height;b._info=b._info||d.info(),b._meta=b._meta||d.meta(),1>=a&&a>0&&(a=b._info.width*a),1>=c&&c>0&&(c=b._info.height*c),d.resize(a,c)}),d.once("complete",function(){var a,c;try{a=d.getAsBlob(g.type),c=b.size,(!i||a.size<c)&&(b.source=a,b.size=a.size,b.trigger("resize",a.size,c)),b._compressed=!0,f.resolve()}catch(e){f.resolve()}}),b._info&&d.info(b._info),b._meta&&d.meta(b._meta),d.loadFromBlob(b.source),f.promise())}})}),b("file",["base","mediator"],function(a,b){function c(){return f+g++}function d(a){this.name=a.name||"Untitled",this.size=a.size||0,this.type=a.type||"application/octet-stream",this.lastModifiedDate=a.lastModifiedDate||1*new Date,this.id=c(),this.ext=h.exec(this.name)?RegExp.$1:"",this.statusText="",i[this.id]=d.Status.INITED,this.source=a,this.loaded=0,this.on("error",function(a){this.setStatus(d.Status.ERROR,a)})}var e=a.$,f="WU_FILE_",g=0,h=/\.([^.]+)$/,i={};return e.extend(d.prototype,{setStatus:function(a,b){var c=i[this.id];"undefined"!=typeof b&&(this.statusText=b),a!==c&&(i[this.id]=a,this.trigger("statuschange",a,c))},getStatus:function(){return i[this.id]},getSource:function(){return this.source},destroy:function(){this.off(),delete i[this.id]}}),b.installTo(d.prototype),d.Status={INITED:"inited",QUEUED:"queued",PROGRESS:"progress",ERROR:"error",COMPLETE:"complete",CANCELLED:"cancelled",INTERRUPT:"interrupt",INVALID:"invalid"},d}),b("queue",["base","mediator","file"],function(a,b,c){function d(){this.stats={numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0,numofDeleted:0,numofInterrupt:0},this._queue=[],this._map={}}var e=a.$,f=c.Status;return e.extend(d.prototype,{append:function(a){return this._queue.push(a),this._fileAdded(a),this},prepend:function(a){return this._queue.unshift(a),this._fileAdded(a),this},getFile:function(a){return"string"!=typeof a?a:this._map[a]},fetch:function(a){var b,c,d=this._queue.length;for(a=a||f.QUEUED,b=0;d>b;b++)if(c=this._queue[b],a===c.getStatus())return c;return null},sort:function(a){"function"==typeof a&&this._queue.sort(a)},getFiles:function(){for(var a,b=[].slice.call(arguments,0),c=[],d=0,f=this._queue.length;f>d;d++)a=this._queue[d],(!b.length||~e.inArray(a.getStatus(),b))&&c.push(a);return c},removeFile:function(a){var b=this._map[a.id];b&&(delete this._map[a.id],a.destroy(),this.stats.numofDeleted++)},_fileAdded:function(a){var b=this,c=this._map[a.id];c||(this._map[a.id]=a,a.on("statuschange",function(a,c){b._onFileStatusChange(a,c)}))},_onFileStatusChange:function(a,b){var c=this.stats;switch(b){case f.PROGRESS:c.numOfProgress--;break;case f.QUEUED:c.numOfQueue--;break;case f.ERROR:c.numOfUploadFailed--;break;case f.INVALID:c.numOfInvalid--;break;case f.INTERRUPT:c.numofInterrupt--}switch(a){case f.QUEUED:c.numOfQueue++;break;case f.PROGRESS:c.numOfProgress++;break;case f.ERROR:c.numOfUploadFailed++;break;case f.COMPLETE:c.numOfSuccess++;break;case f.CANCELLED:c.numOfCancel++;break;case f.INVALID:c.numOfInvalid++;break;case f.INTERRUPT:c.numofInterrupt++}}}),b.installTo(d.prototype),d}),b("widgets/queue",["base","uploader","queue","file","lib/file","runtime/client","widgets/widget"],function(a,b,c,d,e,f){var g=a.$,h=/\.\w+$/,i=d.Status;return b.register({name:"queue",init:function(b){var d,e,h,i,j,k,l,m=this;if(g.isPlainObject(b.accept)&&(b.accept=[b.accept]),b.accept){for(j=[],h=0,e=b.accept.length;e>h;h++)i=b.accept[h].extensions,i&&j.push(i);j.length&&(k="\\."+j.join(",").replace(/,/g,"$|\\.").replace(/\*/g,".*")+"$"),m.accept=new RegExp(k,"i")}return m.queue=new c,m.stats=m.queue.stats,"html5"===this.request("predict-runtime-type")?(d=a.Deferred(),this.placeholder=l=new f("Placeholder"),l.connectRuntime({runtimeOrder:"html5"},function(){m._ruid=l.getRuid(),d.resolve()}),d.promise()):void 0},_wrapFile:function(a){if(!(a instanceof d)){if(!(a instanceof e)){if(!this._ruid)throw new Error("Can't add external files.");a=new e(this._ruid,a)}a=new d(a)}return a},acceptFile:function(a){var b=!a||!a.size||this.accept&&h.exec(a.name)&&!this.accept.test(a.name);return!b},_addFile:function(a){var b=this;return a=b._wrapFile(a),b.owner.trigger("beforeFileQueued",a)?b.acceptFile(a)?(b.queue.append(a),b.owner.trigger("fileQueued",a),a):void b.owner.trigger("error","Q_TYPE_DENIED",a):void 0},getFile:function(a){return this.queue.getFile(a)},addFile:function(a){var b=this;a.length||(a=[a]),a=g.map(a,function(a){return b._addFile(a)}),b.owner.trigger("filesQueued",a),b.options.auto&&setTimeout(function(){b.request("start-upload")},20)},getStats:function(){return this.stats},removeFile:function(a,b){var c=this;a=a.id?a:c.queue.getFile(a),this.request("cancel-file",a),b&&this.queue.removeFile(a)},getFiles:function(){return this.queue.getFiles.apply(this.queue,arguments)},fetchFile:function(){return this.queue.fetch.apply(this.queue,arguments)},retry:function(a,b){var c,d,e,f=this;if(a)return a=a.id?a:f.queue.getFile(a),a.setStatus(i.QUEUED),void(b||f.request("start-upload"));for(c=f.queue.getFiles(i.ERROR),d=0,e=c.length;e>d;d++)a=c[d],a.setStatus(i.QUEUED);f.request("start-upload")},sortFiles:function(){return this.queue.sort.apply(this.queue,arguments)},reset:function(){this.owner.trigger("reset"),this.queue=new c,this.stats=this.queue.stats},destroy:function(){this.reset(),this.placeholder&&this.placeholder.destroy()}})}),b("widgets/runtime",["uploader","runtime/runtime","widgets/widget"],function(a,b){return a.support=function(){return b.hasRuntime.apply(b,arguments)},a.register({name:"runtime",init:function(){if(!this.predictRuntimeType())throw Error("Runtime Error")},predictRuntimeType:function(){var a,c,d=this.options.runtimeOrder||b.orders,e=this.type;if(!e)for(d=d.split(/\s*,\s*/g),a=0,c=d.length;c>a;a++)if(b.hasRuntime(d[a])){this.type=e=d[a];break}return e}})}),b("lib/transport",["base","runtime/client","mediator"],function(a,b,c){function d(a){var c=this;a=c.options=e.extend(!0,{},d.options,a||{}),b.call(this,"Transport"),this._blob=null,this._formData=a.formData||{},this._headers=a.headers||{},this.on("progress",this._timeout),this.on("load error",function(){c.trigger("progress",1),clearTimeout(c._timer)})}var e=a.$;return d.options={server:"",method:"POST",withCredentials:!1,fileVal:"file",timeout:12e4,formData:{},headers:{},sendAsBinary:!1},e.extend(d.prototype,{appendBlob:function(a,b,c){var d=this,e=d.options;d.getRuid()&&d.disconnectRuntime(),d.connectRuntime(b.ruid,function(){d.exec("init")}),d._blob=b,e.fileVal=a||e.fileVal,e.filename=c||e.filename},append:function(a,b){"object"==typeof a?e.extend(this._formData,a):this._formData[a]=b},setRequestHeader:function(a,b){"object"==typeof a?e.extend(this._headers,a):this._headers[a]=b},send:function(a){this.exec("send",a),this._timeout()},abort:function(){return clearTimeout(this._timer),this.exec("abort")},destroy:function(){this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()},getResponse:function(){return this.exec("getResponse")},getResponseAsJson:function(){return this.exec("getResponseAsJson")},getStatus:function(){return this.exec("getStatus")},_timeout:function(){var a=this,b=a.options.timeout;b&&(clearTimeout(a._timer),a._timer=setTimeout(function(){a.abort(),a.trigger("error","timeout")},b))}}),c.installTo(d.prototype),d}),b("widgets/upload",["base","uploader","file","lib/transport","widgets/widget"],function(a,b,c,d){function e(a,b){var c,d,e=[],f=a.source,g=f.size,h=b?Math.ceil(g/b):1,i=0,j=0;for(d={file:a,has:function(){return!!e.length},shift:function(){return e.shift()},unshift:function(a){e.unshift(a)}};h>j;)c=Math.min(b,g-i),e.push({file:a,start:i,end:b?i+c:g,total:g,chunks:h,chunk:j++,cuted:d}),i+=c;return a.blocks=e.concat(),a.remaning=e.length,d}var f=a.$,g=a.isPromise,h=c.Status;f.extend(b.options,{prepareNextFile:!1,chunked:!1,chunkSize:5242880,chunkRetry:2,threads:3,formData:{}}),b.register({name:"upload",init:function(){var b=this.owner,c=this;this.runing=!1,this.progress=!1,b.on("startUpload",function(){c.progress=!0}).on("uploadFinished",function(){c.progress=!1}),this.pool=[],this.stack=[],this.pending=[],this.remaning=0,this.__tick=a.bindFn(this._tick,this),b.on("uploadComplete",function(a){a.blocks&&f.each(a.blocks,function(a,b){b.transport&&(b.transport.abort(),b.transport.destroy()),delete b.transport}),delete a.blocks,delete a.remaning})},reset:function(){this.request("stop-upload",!0),this.runing=!1,this.pool=[],this.stack=[],this.pending=[],this.remaning=0,this._trigged=!1,this._promise=null},startUpload:function(b){var c=this;if(f.each(c.request("get-files",h.INVALID),function(){c.request("remove-file",this)}),b)if(b=b.id?b:c.request("get-file",b),b.getStatus()===h.INTERRUPT)f.each(c.pool,function(a,c){c.file===b&&c.transport&&c.transport.send()}),b.setStatus(h.QUEUED);else{if(b.getStatus()===h.PROGRESS)return;b.setStatus(h.QUEUED)}else f.each(c.request("get-files",[h.INITED]),function(){this.setStatus(h.QUEUED)});if(!c.runing){c.runing=!0;var d=[];f.each(c.pool,function(a,b){var e=b.file;e.getStatus()===h.INTERRUPT&&(d.push(e),c._trigged=!1,b.transport&&b.transport.send())});for(var b;b=d.shift();)b.setStatus(h.PROGRESS);b||f.each(c.request("get-files",h.INTERRUPT),function(){this.setStatus(h.PROGRESS)}),c._trigged=!1,a.nextTick(c.__tick),c.owner.trigger("startUpload")}},stopUpload:function(b,c){var d=this;if(b===!0&&(c=b,b=null),d.runing!==!1){if(b){if(b=b.id?b:d.request("get-file",b),b.getStatus()!==h.PROGRESS&&b.getStatus()!==h.QUEUED)return;return b.setStatus(h.INTERRUPT),f.each(d.pool,function(a,c){c.file===b&&(c.transport&&c.transport.abort(),d._putback(c),d._popBlock(c))}),a.nextTick(d.__tick)}d.runing=!1,this._promise&&this._promise.file&&this._promise.file.setStatus(h.INTERRUPT),c&&f.each(d.pool,function(a,b){b.transport&&b.transport.abort(),b.file.setStatus(h.INTERRUPT)}),d.owner.trigger("stopUpload")}},cancelFile:function(a){a=a.id?a:this.request("get-file",a),a.blocks&&f.each(a.blocks,function(a,b){var c=b.transport;c&&(c.abort(),c.destroy(),delete b.transport)}),a.setStatus(h.CANCELLED),this.owner.trigger("fileDequeued",a)},isInProgress:function(){return!!this.progress},_getStats:function(){return this.request("get-stats")},skipFile:function(a,b){a=a.id?a:this.request("get-file",a),a.setStatus(b||h.COMPLETE),a.skipped=!0,a.blocks&&f.each(a.blocks,function(a,b){var c=b.transport;c&&(c.abort(),c.destroy(),delete b.transport)}),this.owner.trigger("uploadSkip",a)},_tick:function(){var b,c,d=this,e=d.options;return d._promise?d._promise.always(d.__tick):void(d.pool.length<e.threads&&(c=d._nextBlock())?(d._trigged=!1,b=function(b){d._promise=null,b&&b.file&&d._startSend(b),a.nextTick(d.__tick)},d._promise=g(c)?c.always(b):b(c)):d.remaning||d._getStats().numOfQueue||d._getStats().numofInterrupt||(d.runing=!1,d._trigged||a.nextTick(function(){d.owner.trigger("uploadFinished")}),d._trigged=!0))},_putback:function(a){var b;a.cuted.unshift(a),b=this.stack.indexOf(a.cuted),~b||this.stack.unshift(a.cuted)},_getStack:function(){for(var a,b=0;a=this.stack[b++];){if(a.has()&&a.file.getStatus()===h.PROGRESS)return a;(!a.has()||a.file.getStatus()!==h.PROGRESS&&a.file.getStatus()!==h.INTERRUPT)&&this.stack.splice(--b,1)}return null},_nextBlock:function(){var a,b,c,d,f=this,h=f.options;return(a=this._getStack())?(h.prepareNextFile&&!f.pending.length&&f._prepareNextFile(),a.shift()):f.runing?(!f.pending.length&&f._getStats().numOfQueue&&f._prepareNextFile(),b=f.pending.shift(),c=function(b){return b?(a=e(b,h.chunked?h.chunkSize:0),f.stack.push(a),a.shift()):null},g(b)?(d=b.file,b=b[b.pipe?"pipe":"then"](c),b.file=d,b):c(b)):void 0},_prepareNextFile:function(){var a,b=this,c=b.request("fetch-file"),d=b.pending;c&&(a=b.request("before-send-file",c,function(){return c.getStatus()===h.PROGRESS||c.getStatus()===h.INTERRUPT?c:b._finishFile(c)}),b.owner.trigger("uploadStart",c),c.setStatus(h.PROGRESS),a.file=c,a.done(function(){var b=f.inArray(a,d);~b&&d.splice(b,1,c)}),a.fail(function(a){c.setStatus(h.ERROR,a),b.owner.trigger("uploadError",c,a),b.owner.trigger("uploadComplete",c)}),d.push(a))},_popBlock:function(a){var b=f.inArray(a,this.pool);this.pool.splice(b,1),a.file.remaning--,this.remaning--},_startSend:function(b){var c,d=this,e=b.file;return e.getStatus()!==h.PROGRESS?void(e.getStatus()===h.INTERRUPT&&d._putback(b)):(d.pool.push(b),d.remaning++,b.blob=1===b.chunks?e.source:e.source.slice(b.start,b.end),c=d.request("before-send",b,function(){e.getStatus()===h.PROGRESS?d._doSend(b):(d._popBlock(b),a.nextTick(d.__tick))}),void c.fail(function(){1===e.remaning?d._finishFile(e).always(function(){b.percentage=1,d._popBlock(b),d.owner.trigger("uploadComplete",e),a.nextTick(d.__tick)}):(b.percentage=1,d.updateFileProgress(e),d._popBlock(b),a.nextTick(d.__tick))}))},_doSend:function(b){var c,e,g=this,i=g.owner,j=g.options,k=b.file,l=new d(j),m=f.extend({},j.formData),n=f.extend({},j.headers);b.transport=l,l.on("destroy",function(){delete b.transport,g._popBlock(b),a.nextTick(g.__tick)}),l.on("progress",function(a){b.percentage=a,g.updateFileProgress(k)}),c=function(a){var c;return e=l.getResponseAsJson()||{},e._raw=l.getResponse(),c=function(b){a=b},i.trigger("uploadAccept",b,e,c)||(a=a||"server"),a},l.on("error",function(a,d){b.retried=b.retried||0,b.chunks>1&&~"http,abort".indexOf(a)&&b.retried<j.chunkRetry?(b.retried++,l.send()):(d||"server"!==a||(a=c(a)),k.setStatus(h.ERROR,a),i.trigger("uploadError",k,a),i.trigger("uploadComplete",k))}),l.on("load",function(){var a;return(a=c())?void l.trigger("error",a,!0):void(1===k.remaning?g._finishFile(k,e):l.destroy())}),m=f.extend(m,{id:k.id,name:k.name,type:k.type,lastModifiedDate:k.lastModifiedDate,size:k.size}),b.chunks>1&&f.extend(m,{chunks:b.chunks,chunk:b.chunk}),i.trigger("uploadBeforeSend",b,m,n),l.appendBlob(j.fileVal,b.blob,k.name),l.append(m),l.setRequestHeader(n),l.send()},_finishFile:function(a,b,c){var d=this.owner;return d.request("after-send-file",arguments,function(){a.setStatus(h.COMPLETE),d.trigger("uploadSuccess",a,b,c)}).fail(function(b){a.getStatus()===h.PROGRESS&&a.setStatus(h.ERROR,b),d.trigger("uploadError",a,b)
}).always(function(){d.trigger("uploadComplete",a)})},updateFileProgress:function(a){var b=0,c=0;a.blocks&&(f.each(a.blocks,function(a,b){c+=(b.percentage||0)*(b.end-b.start)}),b=c/a.size,this.owner.trigger("uploadProgress",a,b||0))}})}),b("widgets/validator",["base","uploader","file","widgets/widget"],function(a,b,c){var d,e=a.$,f={};return d={addValidator:function(a,b){f[a]=b},removeValidator:function(a){delete f[a]}},b.register({name:"validator",init:function(){var b=this;a.nextTick(function(){e.each(f,function(){this.call(b.owner)})})}}),d.addValidator("fileNumLimit",function(){var a=this,b=a.options,c=0,d=parseInt(b.fileNumLimit,10),e=!0;d&&(a.on("beforeFileQueued",function(a){return c>=d&&e&&(e=!1,this.trigger("error","Q_EXCEED_NUM_LIMIT",d,a),setTimeout(function(){e=!0},1)),c>=d?!1:!0}),a.on("fileQueued",function(){c++}),a.on("fileDequeued",function(){c--}),a.on("reset",function(){c=0}))}),d.addValidator("fileSizeLimit",function(){var a=this,b=a.options,c=0,d=parseInt(b.fileSizeLimit,10),e=!0;d&&(a.on("beforeFileQueued",function(a){var b=c+a.size>d;return b&&e&&(e=!1,this.trigger("error","Q_EXCEED_SIZE_LIMIT",d,a),setTimeout(function(){e=!0},1)),b?!1:!0}),a.on("fileQueued",function(a){c+=a.size}),a.on("fileDequeued",function(a){c-=a.size}),a.on("reset",function(){c=0}))}),d.addValidator("fileSingleSizeLimit",function(){var a=this,b=a.options,d=b.fileSingleSizeLimit;d&&a.on("beforeFileQueued",function(a){return a.size>d?(a.setStatus(c.Status.INVALID,"exceed_size"),this.trigger("error","F_EXCEED_SIZE",d,a),!1):void 0})}),d.addValidator("duplicate",function(){function a(a){for(var b,c=0,d=0,e=a.length;e>d;d++)b=a.charCodeAt(d),c=b+(c<<6)+(c<<16)-c;return c}var b=this,c=b.options,d={};c.duplicate||(b.on("beforeFileQueued",function(b){var c=b.__hash||(b.__hash=a(b.name+b.size+b.lastModifiedDate));return d[c]?(this.trigger("error","F_DUPLICATE",b),!1):void 0}),b.on("fileQueued",function(){}