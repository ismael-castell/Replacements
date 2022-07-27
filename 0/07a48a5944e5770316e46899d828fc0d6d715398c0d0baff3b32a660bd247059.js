var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,c,b,e){if(c){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var p=a[e];p in b||(b[p]={});b=b[p]}a=a[a.length-1];e=b[a];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};$jscomp.polyfill("Object.setPrototypeOf",function(a){return a?a:"object"!=typeof"".__proto__?null:function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}},"es6","es5");
$jscomp.owns=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};$jscomp.polyfill("Object.assign",function(a){return a?a:function(a,b){for(var e=1;e<arguments.length;e++){var c=arguments[e];if(c)for(var k in c)$jscomp.owns(c,k)&&(a[k]=c[k])}return a}},"es6-impl","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;
$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};
$jscomp.arrayIterator=function(a){var c=0;return $jscomp.iteratorPrototype(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var c=a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};$jscomp.EXPOSE_ASYNC_EXECUTOR=!0;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function c(){this.batch_=null}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;c.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};c.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var b=$jscomp.global.setTimeout;c.prototype.asyncExecuteFunction=function(a){b(a,0)};c.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=
this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var l=a[b];delete a[b];try{l()}catch(w){this.asyncThrow_(w)}}}this.batch_=null};c.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var e=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}};e.prototype.createResolveAndReject_=function(){function a(a){return function(c){l||(l=!0,a.call(b,c))}}var b=this,l=
!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};e.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof e)this.settleSameAsPromise_(a);else{var b;a:switch(typeof a){case "object":b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};e.prototype.resolveToNonPromiseObj_=function(a){var b=void 0;try{b=a.then}catch(l){this.reject_(l);return}"function"==
typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};e.prototype.reject_=function(a){this.settle_(2,a)};e.prototype.fulfill_=function(a){this.settle_(1,a)};e.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};e.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=this.onSettledCallbacks_,b=0;b<a.length;++b)a[b].call(),
a[b]=null;this.onSettledCallbacks_=null}};var p=new c;e.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};e.prototype.settleSameAsThenable_=function(a,b){var l=this.createResolveAndReject_();try{a.call(b,l.resolve,l.reject)}catch(w){l.reject(w)}};e.prototype.then=function(a,b){function l(a,b){return"function"==typeof a?function(b){try{c(a(b))}catch(S){x(S)}}:b}var c,x,y=new e(function(a,b){c=a;x=b});this.callWhenSettled_(l(a,c),
l(b,x));return y};e.prototype["catch"]=function(a){return this.then(void 0,a)};e.prototype.callWhenSettled_=function(a,b){function l(){switch(c.state_){case 1:a(c.result_);break;case 2:b(c.result_);break;default:throw Error("Unexpected state: "+c.state_);}}var c=this;null==this.onSettledCallbacks_?p.asyncExecute(l):this.onSettledCallbacks_.push(function(){p.asyncExecute(l)})};e.resolve=function(a){return a instanceof e?a:new e(function(b,l){b(a)})};e.reject=function(a){return new e(function(b,l){l(a)})};
e.race=function(a){return new e(function(b,l){for(var c=$jscomp.makeIterator(a),x=c.next();!x.done;x=c.next())e.resolve(x.value).callWhenSettled_(b,l)})};e.all=function(a){var b=$jscomp.makeIterator(a),l=b.next();return l.done?e.resolve([]):new e(function(a,c){function x(b){return function(c){w[b]=c;y--;0==y&&a(w)}}var w=[],y=0;do w.push(void 0),y++,e.resolve(l.value).callWhenSettled_(x(w.length-1),c),l=b.next();while(!l.done)})};$jscomp.EXPOSE_ASYNC_EXECUTOR&&(e.$jscomp$new$AsyncExecutor=function(){return new c});
return e},"es6-impl","es3");$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(a,c){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var b=0,e={next:function(){if(b<a.length){var p=b++;return{value:c(p,a[p]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};
$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3");$jscomp.checkStringArgs=function(a,c,b){if(null==a)throw new TypeError("The 'this' value for String.prototype."+b+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(a,b){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,b||0)}},"es6-impl","es3");
$jscomp.polyfill("WeakMap",function(a){function c(a){$jscomp.owns(a,e)||$jscomp.defineProperty(a,e,{value:{}})}function b(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),e=new a([[b,2],[c,3]]);if(2!=e.get(b)||3!=e.get(c))return!1;e["delete"](b);e.set(c,4);return!e.has(b)&&4==e.get(c)}catch(x){return!1}}())return a;var e="$jscomp_hidden_"+Math.random().toString().substring(2);b("freeze");b("preventExtensions");
b("seal");var p=0,k=function(a){this.id_=(p+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};k.prototype.set=function(a,b){c(a);if(!$jscomp.owns(a,e))throw Error("WeakMap key fail: "+a);a[e][this.id_]=b;return this};k.prototype.get=function(a){return $jscomp.owns(a,e)?a[e][this.id_]:void 0};k.prototype.has=function(a){return $jscomp.owns(a,e)&&$jscomp.owns(a[e],this.id_)};k.prototype["delete"]=
function(a){return $jscomp.owns(a,e)&&$jscomp.owns(a[e],this.id_)?delete a[e][this.id_]:!1};return k},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.polyfill("Map",function(a){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var e=c.entries(),k=e.next();if(k.done||k.value[0]!=b||"s"!=k.value[1])return!1;k=e.next();return k.done||4!=k.value[0].x||"t"!=k.value[1]||!e.next().done?!1:!0}catch(I){return!1}}())return a;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var c=new WeakMap,b=function(a){this.data_={};this.head_=k();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};b.prototype.set=function(a,b){var c=e(this,a);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=b:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},c.list.push(c.entry),this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};b.prototype["delete"]=
function(a){a=e(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};b.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=k();this.size=0};b.prototype.has=function(a){return!!e(this,a).entry};b.prototype.get=function(a){return(a=e(this,a).entry)&&a.value};b.prototype.entries=function(){return p(this,function(a){return[a.key,
a.value]})};b.prototype.keys=function(){return p(this,function(a){return a.key})};b.prototype.values=function(){return p(this,function(a){return a.value})};b.prototype.forEach=function(a,b){for(var c=this.entries(),e;!(e=c.next()).done;)e=e.value,a.call(b,e[1],e[0],this)};b.prototype[Symbol.iterator]=b.prototype.entries;var e=function(a,b){var e;e=b&&typeof b;"object"==e||"function"==e?c.has(b)?e=c.get(b):(e=""+ ++y,c.set(b,e)):e="p_"+b;var l=a.data_[e];if(l&&$jscomp.owns(a.data_,e))for(var k=0;k<
l.length;k++){var p=l[k];if(b!==b&&p.key!==p.key||b===p.key)return{id:e,list:l,index:k,entry:p}}return{id:e,list:l,index:-1,entry:void 0}},p=function(a,b){var c=a.head_;return $jscomp.iteratorPrototype(function(){if(c){for(;c.head!=a.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})},k=function(){var a={};return a.previous=a.next=a.head=a},y=0;return b},"es6-impl","es3");$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.polyfill("Set",function(a){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([b]));if(!c.has(b)||1!=c.size||c.add(b)!=c||1!=c.size||c.add({x:4})!=c||2!=c.size)return!1;var p=c.entries(),k=p.next();if(k.done||k.value[0]!=b||k.value[1]!=b)return!1;k=p.next();return k.done||k.value[0]==b||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:p.next().done}catch(y){return!1}}())return a;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var c=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};c.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};c.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};c.prototype.clear=function(){this.map_.clear();this.size=0};c.prototype.has=function(a){return this.map_.has(a)};c.prototype.entries=
function(){return this.map_.entries()};c.prototype.values=function(){return this.map_.values()};c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(a,c){var b=this;this.map_.forEach(function(e){return a.call(c,e,e,b)})};return c},"es6-impl","es3");$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,b){return b})}},"es6","es3");
!function(a,c){"object"==typeof exports&&"undefined"!=typeof module?c(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],c):c((a||self).firebase)}(this,function(a){try{(function(){function c(a,f,b,c){return new (b=b||Promise)(function(){}