!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)n(r,i)&&(e[i]=r[i])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,r,i,n){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+i),n);else for(var a=0;a<i;a++)e[n+a]=t[r+a]},flattenChunks:function(e){var t,r,i,n,a,s;for(i=0,t=0,r=e.length;t<r;t++)i+=e[t].length;for(s=new Uint8Array(i),n=0,t=0,r=e.length;t<r;t++)a=e[t],s.set(a,n),n+=a.length;return s}},s={arraySet:function(e,t,r,i,n){for(var a=0;a<i;a++)e[n+a]=t[r+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,a)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,s))},t.setTyped(i)},function(e,t,r){(function(e){!function(e,t){"use strict";var i={},n=function(){return z.__string_rec(this,"")};function a(e,t){function r(){}r.prototype=e;var i=new r;for(var n in t)i[n]=t[n];return t.toString!==Object.prototype.toString&&(i.toString=t.toString),i}var s=e.Apptimize=function(){};(i["apptimize.Apptimize"]=s).__name__=["apptimize","Apptimize"],s._isInitialized=function(){return O._isInitialized()},s.setCustomerUserId=e.setCustomerUserId=function(e){var t=s.getCustomerUserId();if(null!=t&&t==e||""==e)I.w("Not setting customerUserId if ID already set or string is empty.",{fileName:"Apptimize.hx",lineNumber:72,className:"apptimize.Apptimize",methodName:"setCustomerUserId"});else{var r=s.getApptimizeAnonUserId(),i=new _e(t,r,je.loadObject(je.kCustomPropertiesKey),x.getAppKey(),He.sharedInstance()),n=new _e(e,r,null,x.getAppKey(),He.sharedInstance()),a=x.sharedInstance();s._isInitialized()&&a.dispatchUnenrollmentsForUserChanged(i),je.saveString(je.kUserIDKey,e),s.setCustomAttributes(null);var l=x.sharedInstance().getMetaData(x.getAppKey());null!=l&&l.clearAlterationCache(),s._isInitialized()&&(a.logUserTransition(i,n),a.dispatchEnrollmentsForUserChanged(n)),I.v("Customer User ID set to: "+e,{fileName:"Apptimize.hx",lineNumber:102,className:"apptimize.Apptimize",methodName:"setCustomerUserId"})}},s.getCustomerUserId=e.getCustomerUserId=function(){return je.loadString(je.kUserIDKey)},s.getApptimizeAnonUserId=e.getApptimizeAnonUserId=function(){return s._getApptimizeAnonUserId()},s.setCustomAttributes=e.setCustomAttributes=function(e){var t=st.nativeObjectToStringMap(e);je.saveStringMap(je.kCustomPropertiesKey,t);var r=je.loadStringMap(je.kCustomPropertiesKey);I.v("Custom Attributes:\n"+r.toString(),{fileName:"Apptimize.hx",lineNumber:139,className:"apptimize.Apptimize",methodName:"setCustomAttributes"}),x.sharedInstance().onEnvPropsChanged(x.getAppKey())},s.getCustomAttributes=e.getCustomAttributes=function(){return st.stringMapToNativeDictionary(je.loadStringMap(je.kCustomPropertiesKey))},s.setPilotTargetingId=e.setPilotTargetingId=function(e){We.sharedInstance().setPropertyForNamespace("pilot_targeting_id",e,Je.ApptimizeLocal),x.sharedInstance().onEnvPropsChanged(x.getAppKey())},s.setOnEnrolledInExperimentCallback=e.setOnEnrolledInExperimentCallback=function(e){$.setOnEnrolledInExperimentCallback(e),I.v("OnEnrolledInExperimentCallback set!",{fileName:"Apptimize.hx",lineNumber:182,className:"apptimize.Apptimize",methodName:"setOnEnrolledInExperimentCallback"})},s.setOnUnenrolledInExperimentCallback=e.setOnUnenrolledInExperimentCallback=function(e){$.setOnUnenrolledInExperimentCallback(e),I.v("OnUnenrolledInExperimentCallback set!",{fileName:"Apptimize.hx",lineNumber:193,className:"apptimize.Apptimize",methodName:"setOnUnenrolledInExperimentCallback"})},s._getApptimizeAnonUserId=function(){var e=je.loadString(je.kAnonymousGuidKey);return null!=e&&""!=e&&X.isValidGuid(e)||(e=X.generateUserGuid(),je.saveString(je.kAnonymousGuidKey,e)),e},s.setAppVersion=e.setAppVersion=function(e){He.sharedInstance().setProperty("app_version",e);var t=He.sharedInstance().valueForProperty("app_version");I.v("App Version set to: "+t,{fileName:"Apptimize.hx",lineNumber:216,className:"apptimize.Apptimize",methodName:"setAppVersion"})},s.setAppName=e.setAppName=function(e){He.sharedInstance().setProperty("app_name",e);var t=He.sharedInstance().valueForProperty("app_name");I.v("App Name set to: "+t,{fileName:"Apptimize.hx",lineNumber:227,className:"apptimize.Apptimize",methodName:"setAppName"})},s.setOnParticipationCallback=e.setOnParticipationCallback=function(e){$.setOnParticipationCallback(e),I.w("setOnParticipationCallback is deprecated - please use setOnParticipatedInExperimentCallback.",{fileName:"Apptimize.hx",lineNumber:248,className:"apptimize.Apptimize",methodName:"setOnParticipationCallback"})},s.setOnMetadataUpdatedCallback=e.setOnMetadataUpdatedCallback=function(e){$.setOnMetadataUpdatedCallback(e),I.v("OnMetadataProcessedCallback set!",{fileName:"Apptimize.hx",lineNumber:267,className:"apptimize.Apptimize",methodName:"setOnMetadataUpdatedCallback"})},s.setOnApptimizeInitializedCallback=e.setOnApptimizeInitializedCallback=function(e){$.setOnApptimizeInitializedCallback(e),I.v("OnApptimizeInitializedCallback set!",{fileName:"Apptimize.hx",lineNumber:286,className:"apptimize.Apptimize",methodName:"setOnApptimizeInitializedCallback"})},s.setOnParticipatedInExperimentCallback=e.setOnParticipatedInExperimentCallback=function(e){$.setOnParticipatedInExperimentCallback(e),I.v("OnParticipatedInExperimentCallback set!",{fileName:"Apptimize.hx",lineNumber:304,className:"apptimize.Apptimize",methodName:"setOnParticipatedInExperimentCallback"})},s.setup=e.setup=function(e,t){null!=e&&""!=e?null==x.getAppKey()||x.getAppKey()!=e?O._setup(e,t,(function(){null!=x.getAppKey()&&x.getAppKey()!=e&&x.clear(),I.v("Set Anonymous User ID: "+s._getApptimizeAnonUserId(),{fileName:"Apptimize.hx",lineNumber:361,className:"apptimize.Apptimize",methodName:"setup"}),I.i("Apptimize "+s.getApptimizeSDKPlatform()+" SDK initialized.\nApptimize SDK Version: "+s.getApptimizeSDKVersion(),{fileName:"Apptimize.hx",lineNumber:362,className:"apptimize.Apptimize",methodName:"setup"}),s._initialize(e)})):I.w('Apptimize is already initialized with app key: "'+e+'".',{fileName:"Apptimize.hx",lineNumber:350,className:"apptimize.Apptimize",methodName:"setup"}):I.c("Unable to initialize Apptimize due to missing app key.",{fileName:"Apptimize.hx",lineNumber:347,className:"apptimize.Apptimize",methodName:"setup"})},s.updateApptimizeMetadataOnce=e.updateApptimizeMetadataOnce=function(){x.checkForUpdatedMetaData(!0)},s.flushTracking=e.flushTracking=function(){s._isInitialized()?x.sharedInstance().flushTracking():I.w("Tracking can only be flushed after setup().",{fileName:"Apptimize.hx",lineNumber:405,className:"apptimize.Apptimize",methodName:"flushTracking"})},s.getApptimizeSDKVersion=e.getApptimizeSDKVersion=function(){return"1.2.14"},s.getApptimizeSDKPlatform=e.getApptimizeSDKPlatform=function(){return"JavaScript"},s._initialize=function(e){x.sharedInstance().loadMetaData(e),O.setState(2),x.sharedInstance().hasMetadata(x.getAppKey())&&O._trySetReady()&&$.dispatchOnApptimizeInitialized(),I.i('Apptimize initialized with app key "'+e+'".',{fileName:"Apptimize.hx",lineNumber:462,className:"apptimize.Apptimize",methodName:"_initialize"})},s._getAlterations=function(e,t){if(x._checkForUpdatedMetadataIfNecessary(),s._isInitialized()){var r=new _e(e,s._getApptimizeAnonUserId(),t,x.getAppKey(),He.sharedInstance());return O._getAlterations(r)}return[]},s._getCodeBlockMethod=function(e,t,r){x._checkForUpdatedMetadataIfNecessary();var i=new _e(t,s._getApptimizeAnonUserId(),r,x.getAppKey(),He.sharedInstance());return O._getCodeBlockMethod(i,e)},s.runCodeBlock=e.runCodeBlock=function(e,t,r,i){null!=r&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"runCodeBlock"}),r=null==r?s.getCustomerUserId():r,null!=i&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"runCodeBlock"}),i=null==i?s.getCustomAttributes():i;var n=st.nativeObjectToStringMap(i),a=s._getCodeBlockMethod(e,r,n),l=st.nativeObjectToStringMap(t);if(null!=a&&""!=a)if(null==t||null==(null!=or[a]?l.getReserved(a):l.h[a])){var o=f.getProperty(t,a);null!=o?o.apply(t,[]):I.w("Supplied callbacks do not include method: "+a,{fileName:"Apptimize.hx",lineNumber:564,className:"apptimize.Apptimize",methodName:"runCodeBlock"})}else{I.v("Calling callback method: "+a,{fileName:"Apptimize.hx",lineNumber:567,className:"apptimize.Apptimize",methodName:"runCodeBlock"});var u=null!=or[a]?l.getReserved(a):l.h[a];if(!f.isFunction(u))return void I.e("runCodeBlock() called with callback that isn't a function/method.",{fileName:"Apptimize.hx",lineNumber:571,className:"apptimize.Apptimize",methodName:"runCodeBlock"});u()}else I.w("No Code Block with variable name "+e+" found, skipping callback.",{fileName:"Apptimize.hx",lineNumber:556,className:"apptimize.Apptimize",methodName:"runCodeBlock"})},s.isFeatureFlagEnabled=e.isFeatureFlagEnabled=function(e,t,r){return s.getBool(e,!1,t,r)},s.getString=e.getString=function(e,t,r,i){var n=s._getValue(e,r,b.String,null,i);return null==n?t:n},s.getBool=e.getBool=function(e,t,r,i){var n=s._getValue(e,r,b.Boolean,null,i);return null==n?t:n},s.getInt=e.getInt=function(e,t,r,i){var n=s._getValue(e,r,b.Integer,null,i);return null==n?t:n},s.getDouble=e.getDouble=function(e,t,r,i){var n=s._getValue(e,r,b.Double,null,i);return null==n?t:n},s.getStringArray=e.getStringArray=function(e,t,r,i){var n=s._getValue(e,r,b.Array,b.String,i);return null==n?t:at.toNativeArray(n,nt.String)},s.getBoolArray=e.getBoolArray=function(e,t,r,i){var n=s._getValue(e,r,b.Array,b.Boolean,i);return null==n?t:at.toNativeArray(n,nt.Bool)},s.getIntArray=e.getIntArray=function(e,t,r,i){var n=s._getValue(e,r,b.Array,b.Integer,i);return null==n?t:at.toNativeArray(n,nt.Int)},s.getDoubleArray=e.getDoubleArray=function(e,t,r,i){var n=s._getValue(e,r,b.Array,b.Double,i);return null==n?t:at.toNativeArray(n,nt.Double)},s.getStringDictionary=e.getStringDictionary=function(e,t,r,i){var n=s._getValue(e,r,b.Dictionary,b.String,i);return null==n?t:n},s.getBoolDictionary=e.getBoolDictionary=function(e,t,r,i){var n=s._getValue(e,r,b.Dictionary,b.Boolean,i);return null==n?t:n},s.getIntDictionary=e.getIntDictionary=function(e,t,r,i){var n=s._getValue(e,r,b.Dictionary,b.Integer,i);return null==n?t:n},s.getDoubleDictionary=e.getDoubleDictionary=function(e,t,r,i){var n=s._getValue(e,r,b.Dictionary,b.Double,i);return null==n?t:n},s._getValue=function(e,t,r,i,n){if(!s._isInitialized())return null;null!=t&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"_getValue"}),t=null==t?s.getCustomerUserId():t,null!=n&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"_getValue"}),n=null==n?s.getCustomAttributes():n;var a=st.nativeObjectToStringMap(n),l=new _e(t,s._getApptimizeAnonUserId(),a,x.getAppKey(),He.sharedInstance());return w.getValue(l,e,r,i)},s.getVariantInfo=e.getVariantInfo=function(e,t){null!=e&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"getVariantInfo"}),e=null==e?s.getCustomerUserId():e,null!=t&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"getVariantInfo"}),t=null==t?s.getCustomAttributes():t;for(var r=[],i=s._getApptimizeAnonUserId(),n=st.nativeObjectToStringMap(t),a=new _e(e,i,n,x.getAppKey(),He.sharedInstance()),l=0,u=O._getVariants(a);l<u.length;){var h=u[l];++l,r.push(o.initWithVariant(h,e,i))}return at.toNativeArray(r,nt.VariantInfo)},s._getVariantInfoForAlteration=function(e,t,r){for(var i=s._getApptimizeAnonUserId(),n=0,a=s._getAlterations(t,r);n<a.length;){var l=a[n];if(++n,l.getKey()==e)return o.initWithVariant(l.getVariant(),t,i)}return null},s._getVariantInfoForDynamicVariable=function(e,t,r){null!=t&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"_getVariantInfoForDynamicVariable"}),t=null==t?s.getCustomerUserId():t,null!=r&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"_getVariantInfoForDynamicVariable"}),r=null==r?s.getCustomAttributes():r;var i=st.nativeObjectToStringMap(r);return s._getVariantInfoForAlteration(e,t,i)},s._getVariantInfoForExperiment=function(e,t,r){null!=t&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"_getVariantInfoForExperiment"}),t=null==t?s.getCustomerUserId():t,null!=r&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"_getVariantInfoForExperiment"}),r=null==r?s.getCustomAttributes():r;for(var i=s._getApptimizeAnonUserId(),n=st.nativeObjectToStringMap(r),a=new _e(t,i,n,x.getAppKey(),He.sharedInstance()),l=0,u=O._getVariants(a);l<u.length;){var h=u[l];if(++l,h.getExperimentName()==e)return o.initWithVariant(h,t,i)}return null},s.track=e.track=function(e,t,r){if(s._isInitialized()){null!=t&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"track"}),t=null==t?s.getCustomerUserId():t,null!=r&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"track"}),r=null==r?s.getCustomAttributes():r;var i=st.nativeObjectToStringMap(r),n=new _e(t,s._getApptimizeAnonUserId(),i,x.getAppKey(),He.sharedInstance());O.generateTrackEvent(n,e,null)}else I.w("Events can only be tracked after setup() has been called.",{fileName:"Apptimize.hx",lineNumber:1157,className:"apptimize.Apptimize",methodName:"track"})},s.trackValue=e.trackValue=function(e,t,r,i){if(s._isInitialized()){if(null!=r&&I.w("The `userID` argument is deprecated. Please use the `setCustomerUserId()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:18,className:"apptimize.Apptimize",methodName:"trackValue"}),r=null==r?s.getCustomerUserId():r,null!=i&&I.w("The `customAttributes` argument is deprecated. Please use the `setCustomAttributes()` method instead.",{fileName:"ABTClientMacro.hx",lineNumber:26,className:"apptimize.Apptimize",methodName:"trackValue"}),i=null==i?s.getCustomAttributes():i,"number"!=typeof t&&!z.__instanceof(t,nt.Int))return void I.w("trackValue() called with a non-float value. Event not logged.",{fileName:"Apptimize.hx",lineNumber:1188,className:"apptimize.Apptimize",methodName:"trackValue"});var n=st.nativeObjectToStringMap(i),a=new _e(r,s._getApptimizeAnonUserId(),n,x.getAppKey(),He.sharedInstance());O.generateTrackEvent(a,e,t)}else I.w("Events can only be tracked after setup() has been called.",{fileName:"Apptimize.hx",lineNumber:1196,className:"apptimize.Apptimize",methodName:"trackValue"})};var l=function(){};(i.Apptimize=l).__name__=["Apptimize"],l.__super__=s,l.prototype=a(s.prototype,{__class__:l});var o=e.VariantInfo=function(e,t,r,i,n,a,s,l,u,h,c){this._variantId=e,this._variantName=t,this._experimentId=r,this._experimentName=i,this._experimentType=o.apptimizeExperimentTypeForString(n),this._experimentTypeName=n,this._cycle=a,this._currentPhase=s,this._participationPhase=l,this._userId=u,this._anonymousUserId=h,this._userHasParticipated=c};(i["apptimize.VariantInfo"]=o).__name__=["apptimize","VariantInfo"],o.initWithVariant=function(e,t,r){var i=0,n="v"+e.getVariantID()+"_"+e.getCycle(),a=!1;return We.sharedInstance().isNamespacedPropertyAvailable(n,Je.ApptimizeInternal)&&(i=We.sharedInstance().valueForNamespacedProperty(n,Je.ApptimizeInternal),a=!0),new o(e.getVariantID(),e.getVariantName(),e.getExperimentID(),e.getExperimentName(),e.getExperimentType(),e.getCycle(),e.getPhase(),i,t,r,a)},o.apptimizeExperimentTypeForString=function(e){switch(e.toLowerCase()){case"code-block":return C.CodeBlock;case"double-value":return C.DynamicVariables;case"feature-flag":return C.FeatureFlag;case"int-value":case"string-value":case"variables":return C.DynamicVariables;case"wysiwyg":return C.Visual;default:return C.Unknown}},o.prototype={getVariantId:function(){return this._variantId},getVariantName:function(){return this._variantName},getExperimentId:function(){return this._experimentId},getExperimentName:function(){return this._experimentName},getExperimentType:function(){return this._experimentType},getExperimentTypeName:function(){return this._experimentTypeName},getCurrentPhase:function(){return this._currentPhase},getParticipationPhase:function(){return this._participationPhase},getCycle:function(){return this._cycle},getUserId:function(){return this._userId},getAnonymousUserId:function(){return this._anonymousUserId},getUserHasParticipated:function(){return this._userHasParticipated},__class__:o};var u=function(e,t,r,i,n,a,s,l,u,h,c){o.call(this,e,t,r,i,n,a,s,l,u,h,c)};(i.VariantInfo=u).__name__=["VariantInfo"],u.__super__=o,u.prototype=a(o.prototype,{__class__:u});var h=function(e,t){this.r=new RegExp(e,t.split("u").join(""))};(i.EReg=h).__name__=["EReg"],h.prototype={match:function(e){return this.r.global&&(this.r.lastIndex=0),this.r.m=this.r.exec(e),this.r.s=e,null!=this.r.m},matched:function(e){if(null!=this.r.m&&0<=e&&e<this.r.m.length)return this.r.m[e];throw new Jt("EReg::matched")},matchedPos:function(){if(null==this.r.m)throw new Jt("No string matched");return{pos:this.r.m.index,len:this.r.m[0].length}},matchSub:function(e,t,r){if(null==r&&(r=-1),this.r.global){this.r.lastIndex=t;var i=this.r,n=r<0?e:c.substr(e,0,t+r);this.r.m=i.exec(n);var a=null!=this.r.m;return a&&(this.r.s=e),a}var s=this.match(r<0?c.substr(e,t,null):c.substr(e,t,r));return s&&(this.r.s=e,this.r.m.index+=t),s},split:function(e){var t="#__delim__#";return e.replace(this.r,t).split(t)},map:function(e,t){for(var r=0,i="";!(r>=e.length);){if(!this.matchSub(e,r)){i+=v.string(c.substr(e,r,null));break}var n=this.matchedPos();if(i+=v.string(c.substr(e,r,n.pos-r)),i+=v.string(t(this)),0==n.len?(i+=v.string(c.substr(e,n.pos,1)),r=n.pos+1):r=n.pos+n.len,!this.r.global)break}return!this.r.global&&0<r&&r<e.length&&(i+=v.string(c.substr(e,r,null))),i},__class__:h};var c=function(){};(i.HxOverrides=c).__name__=["HxOverrides"],c.dateStr=function(e){var t=e.getMonth()+1,r=e.getDate(),i=e.getHours(),n=e.getMinutes(),a=e.getSeconds();return e.getFullYear()+"-"+(t<10?"0"+t:""+t)+"-"+(r<10?"0"+r:""+r)+" "+(i<10?"0"+i:""+i)+":"+(n<10?"0"+n:""+n)+":"+(a<10?"0"+a:""+a)},c.strDate=function(e){switch(e.length){case 8:var t=e.split(":"),r=new Date;return r.setTime(0),r.setUTCHours(t[0]),r.setUTCMinutes(t[1]),r.setUTCSeconds(t[2]),r;case 10:var i=e.split("-");return new Date(i[0],i[1]-1,i[2],0,0,0);case 19:var n=e.split(" "),a=n[0].split("-"),s=n[1].split(":");return new Date(a[0],a[1]-1,a[2],s[0],s[1],s[2]);default:throw new Jt("Invalid date format : "+e)}},c.cca=function(e,t){var r=e.charCodeAt(t);if(r==r)return r},c.substr=function(e,t,r){if(null==r)r=e.length;else if(r<0){if(0!=t)return"";r=e.length+r}return e.substr(t,r)},c.remove=function(e,t){var r=e.indexOf(t);return-1!=r&&(e.splice(r,1),!0)},c.iter=function(e){return{cur:0,arr:e,hasNext:function(){return this.cur<this.arr.length},next:function(){return this.arr[this.cur++]}}};var p=function(){};(i.Lambda=p).__name__=["Lambda"],p.array=function(e){for(var t=[],r=$t(e)();r.hasNext();){var i=r.next();t.push(i)}return t},p.map=function(e,t){for(var r=new _,i=$t(e)();i.hasNext();){var n=i.next();r.add(t(n))}return r},p.flatten=function(e){for(var t=new _,r=$t(e)();r.hasNext();)for(var i=$t(r.next())();i.hasNext();){var n=i.next();t.add(n)}return t},p.flatMap=function(e,t){return p.flatten(p.map(e,t))},p.exists=function(e,t){for(var r=$t(e)();r.hasNext();)if(t(r.next()))return!0;return!1};var _=function(){this.length=0};(i.List=_).__name__=["List"],_.prototype={add:function(e){var t=new m(e,null);null==this.h?this.h=t:this.q.next=t,this.q=t,this.length++},pop:function(){if(null==this.h)return null;var e=this.h.item;return this.h=this.h.next,null==this.h&&(this.q=null),this.length--,e},isEmpty:function(){return null==this.h},remove:function(e){for(var t=null,r=this.h;null!=r;){if(r.item==e)return null==t?this.h=r.next:t.next=r.next,this.q==r&&(this.q=t),this.length--,!0;r=(t=r).next}return!1},iterator:function(){return new d(this.h)},filter:function(e){for(var t=new _,r=this.h;null!=r;){var i=r.item;r=r.next,e(i)&&t.add(i)}return t},__class__:_};var m=function(e,t){this.item=e,this.next=t};(i["_List.ListNode"]=m).__name__=["_List","ListNode"],m.prototype={__class__:m};var d=function(e){this.head=e};(i["_List.ListIterator"]=d).__name__=["_List","ListIterator"],d.prototype={hasNext:function(){return null!=this.head},next:function(){var e=this.head.item;return this.head=this.head.next,e},__class__:d},Math.__name__=["Math"];var f=function(){};(i.Reflect=f).__name__=["Reflect"],f.field=function(e,t){try{return e[t]}catch(e){return ut.lastException=e,null}},f.getProperty=function(e,t){var r;return null==e?null:e.__properties__&&(r=e.__properties__["get_"+t])?e[r]():e[t]},f.fields=function(e){var t=[];if(null!=e){var r=Object.prototype.hasOwnProperty;for(var i in e)"__id__"!=i&&"hx__closures__"!=i&&r.call(e,i)&&t.push(i)}return t},f.isFunction=function(e){return"function"==typeof e&&!(e.__name__||e.__ename__)},f.deleteField=function(e,t){return!!Object.prototype.hasOwnProperty.call(e,t)&&(delete e[t],!0)};var v=function(){};(i.Std=v).__name__=["Std"],v.string=function(e){return z.__string_rec(e,"")},v.parseInt=function(e){var t=parseInt(e,10);return 0!=t||120!=c.cca(e,1)&&88!=c.cca(e,1)||(t=parseInt(e)),isNaN(t)?null:t};var g=function(){this.b=""};(i.StringBuf=g).__name__=["StringBuf"],g.prototype={__class__:g};var A=function(){};(i.StringTools=A).__name__=["StringTools"],A.isSpace=function(e,t){var r=c.cca(e,t);return 8<r&&r<14||32==r},A.ltrim=function(e){for(var t=e.length,r=0;r<t&&A.isSpace(e,r);)++r;return 0<r?c.substr(e,r,t-r):e},A.rtrim=function(e){for(var t=e.length,r=0;r<t&&A.isSpace(e,t-r-1);)++r;return 0<r?c.substr(e,0,t-r):e},A.trim=function(e){return A.ltrim(A.rtrim(e))},A.lpad=function(e,t,r){if(t.length<=0)return e;for(;e.length<r;)e=t+e;return e},A.replace=function(e,t,r){return e.split(t).join(r)},A.hex=function(e,t){for(var r="";r="0123456789ABCDEF".charAt(15&e)+r,0<(e>>>=4););if(null!=t)for(;r.length<t;)r="0"+r;return r};var T=i.ValueType={__ename__:["ValueType"],__constructs__:["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"]};T.TNull=["TNull",0],T.TNull.toString=n,(T.TNull.__enum__=T).TInt=["TInt",1],T.TInt.toString=n,(T.TInt.__enum__=T).TFloat=["TFloat",2],T.TFloat.toString=n,(T.TFloat.__enum__=T).TBool=["TBool",3],T.TBool.toString=n,(T.TBool.__enum__=T).TObject=["TObject",4],T.TObject.toString=n,(T.TObject.__enum__=T).TFunction=["TFunction",5],T.TFunction.toString=n,(T.TFunction.__enum__=T).TClass=function(e){var t=["TClass",6,e];return t.__enum__=T,t.toString=n,t},T.TEnum=function(e){var t=["TEnum",7,e];return t.__enum__=T,t.toString=n,t},T.TUnknown=["TUnknown",8],T.TUnknown.toString=n,T.TUnknown.__enum__=T;var y=function(){};(i.Type=y).__name__=["Type"],y.getClassName=function(e){var t=e.__name__;return null==t?null:t.join(".")},y.getEnumName=function(e){return e.__ename__.join(".")},y.resolveClass=function(e){var t=i[e];return null!=t&&t.__name__?t:null},y.resolveEnum=function(e){var t=i[e];return null!=t&&t.__ename__?t:null},y.createInstance=function(e,t){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6]);case 8:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]);case 9:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]);case 10:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]);case 11:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10]);case 12:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11]);case 13:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12]);case 14:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13]);default:throw new Jt("Too many arguments")}},y.createEmptyInstance=function(e){function t(){}return t.prototype=e.prototype,new t},y.createEnum=function(e,t,r){var i=f.field(e,t);if(null==i)throw new Jt("No such constructor "+t);if(f.isFunction(i)){if(null==r)throw new Jt("Constructor "+t+" need parameters");return i.apply(e,r)}if(null!=r&&0!=r.length)throw new Jt("Constructor "+t+" does not need parameters");return i},y.typeof=function(e){switch(typeof e){case"boolean":return T.TBool;case"function":return e.__name__||e.__ename__?T.TObject:T.TFunction;case"number":return Math.ceil(e)==e%2147483648?T.TInt:T.TFloat;case"object":if(null==e)return T.TNull;var t=e.__enum__;if(null!=t)return T.TEnum(t);var r=z.getClass(e);return null!=r?T.TClass(r):T.TObject;case"string":return T.TClass(String);case"undefined":return T.TNull;default:return T.TUnknown}};var b=i["apptimize.ABTApptimizeVariableType"]={__ename__:["apptimize","ABTApptimizeVariableType"],__constructs__:["Invalid","String","Double","Integer","Boolean","Array","Dictionary"]};b.Invalid=["Invalid",0],b.Invalid.toString=n,(b.Invalid.__enum__=b).String=["String",1],b.String.toString=n,(b.String.__enum__=b).Double=["Double",2],b.Double.toString=n,(b.Double.__enum__=b).Integer=["Integer",3],b.Integer.toString=n,(b.Integer.__enum__=b).Boolean=["Boolean",4],b.Boolean.toString=n,(b.Boolean.__enum__=b).Array=["Array",5],b.Array.toString=n,(b.Array.__enum__=b).Dictionary=["Dictionary",6],b.Dictionary.toString=n,b.Dictionary.__enum__=b;var w=function(){};(i["apptimize.ABTApptimizeVariable"]=w).__name__=["apptimize","ABTApptimizeVariable"],w.getValue=function(e,t,r,i){x._checkForUpdatedMetadataIfNecessary();var n=x.sharedInstance().getMetaData(e.appkey);if(null==n)return null;for(var a=n.makeEnvironment(e),s=n.selectAlterationsIntoArray(a),l=0;l<s.length;){var o=s[l];++l;try{if(o.getKey()==t){var u=z.__cast(o,be),h=w.apptimizeVariableTypeForString(u.getType()),c=null;if(null!=u.getNestedType()&&(c=w.apptimizeVariableTypeForString(u.getNestedType())),h==r&&c==i){var p=u.getVariant();if(x.sharedInstance().incrementVariantRunCount(e,p),!u.useDefaultValue())return u.getValue()}}}catch(e){if((ut.lastException=e)instanceof Jt&&(e=e.val),z.__instanceof(e,String))return I.v('Alteration found for key "'+o.getKey()+"\" isn't a value alteration.",{fileName:"ABTApptimizeVariable.hx",lineNumber:57,className:"apptimize.ABTApptimizeVariable",methodName:"getValue"}),null;throw e}}return I.v('No alteration found for dynamic variable "'+t+'".',{fileName:"ABTApptimizeVariable.hx",lineNumber:62,className:"apptimize.ABTApptimizeVariable",methodName:"getValue"}),null},w.apptimizeVariableTypeForString=function(e){var t=e.toLowerCase();return"string"==t?b.String:"double"==t?b.Double:"int"==t?b.Integer:"boolean"==t?b.Boolean:"list"==t?b.Array:"dictionary"==t?b.Dictionary:b.Invalid};var N=function(){this.availableProperties=new K,this.availableProperties=new K,this.setPropertyDefaults()};(i["apptimize.support.properties.ABTProperties"]=N).__name__=["apptimize","support","properties","ABTProperties"],N.prototype={setPropertyDefaults:function(){},isPropertyAvailable:function(e){var t=this.availableProperties;return null!=(null!=or[e]?t.getReserved(e):t.h[e])},valueForProperty:function(e){var t=this.availableProperties;return null!=or[e]?t.getReserved(e):t.h[e]},setProperty:function(e,t){var r=this.availableProperties,i=t;null!=or[e]?r.setReserved(e,i):r.h[e]=i},setProperties:function(e){for(var t=e.keys();t.hasNext();){var r=t.next();this.setProperty(r,null!=or[r]?e.getReserved(r):e.h[r])}},__class__:N};var S=function(){N.call(this)};(i["apptimize.support.properties.ABTConfigProperties"]=S).__name__=["apptimize","support","properties","ABTConfigProperties"],S.sharedInstance=function(){return null==S._instance&&(S._instance=new S),S._instance},S.__super__=N,S.prototype=a(N.prototype,{setPropertyDefaults:function(){var e=S.META_DATA_URL_LL_KEY,t=this.availableProperties;null!=or[e]?t.setReserved(e,"https://md-ll.apptimize.com/api/metadata/v4/"):t.h[e]="https://md-ll.apptimize.com/api/metadata/v4/";var r=S.META_DATA_URL_HL_KEY,i=this.availableProperties;null!=or[r]?i.setReserved(r,"https://md-hl.apptimize.com/api/metadata/v4/"):i.h[r]="https://md-hl.apptimize.com/api/metadata/v4/";var n=S.META_DATA_URL_KEY,a=this.availableProperties;null!=or[n]?a.setReserved(n,null):a.h[n]=null;var s=S.LOG_LEVEL_KEY,l=this.availableProperties;null!=or[s]?l.setReserved(s,"LOG_LEVEL_WARN"):l.h[s]="LOG_LEVEL_WARN";var o=S.FOREGROUND_PERIOD_MS_KEY,u=this.availableProperties;null!=or[o]?u.setReserved(o,1e4):u.h[o]=1e4;var h=S.RESULT_POST_DELAY_MS_KEY,c=this.availableProperties;null!=or[h]?c.setReserved(h,6e4):c.h[h]=6e4;var p=S.ALTERATION_CACHE_SIZE_KEY,_=this.availableProperties;null!=or[p]?_.setReserved(p,10):_.h[p]=10;var m=S.RESULTS_CACHE_SIZE_KEY,d=this.availableProperties;null!=or[m]?d.setReserved(m,10):d.h[m]=10;var f=S.MAXIMUM_RESULT_ENTRIES_KEY,v=this.availableProperties;null!=or[f]?v.setReserved(f,1e3):v.h[f]=1e3;var g=S.MAXIMUM_PENDING_RESULTS_KEY,A=this.availableProperties;null!=or[g]?A.setReserved(g,1e3):A.h[g]=1e3;var T=S.METADATA_POLLING_INTERVAL_MS_KEY,y=this.availableProperties;null!=or[T]?y.setReserved(T,6e4):y.h[T]=6e4;var b=S.MAXIMUM_RESULT_POST_FAILURE_KEY,w=this.availableProperties;null!=or[b]?w.setReserved(b,3):w.h[b]=3;var N=S.MAXIMUM_RESULT_POST_SENDER_TIMEOUT_MS_KEY,B=this.availableProperties;null!=or[N]?B.setReserved(N,3e3):B.h[N]=3e3;var E=S.METADATA_POLLING_BACKGROUND_INTERVAL_MS_KEY,I=this.availableProperties;null!=or[E]?I.setReserved(E,864e5):I.h[E]=864e5;var k=S.STORAGE_TYPE_KEY,z=this.availableProperties;null!=or[k]?z.setReserved(k,null):z.h[k]=null;var F=S.APPTIMIZE_ENVIRONMENT_KEY,x=this.availableProperties;null!=or[F]?x.setReserved(F,null):x.h[F]=null;var O=S.AUTOMATIC_SHUTDOWN_HOOK,C=this.availableProperties;null!=or[O]?C.setReserved(O,!0):C.h[O]=!0;var R=S.GROUPS_BASE_URL_KEY,P=this.availableProperties;null!=or[R]?P.setReserved(R,"https://mapi.apptimize.com"):P.h[R]="https://mapi.apptimize.com";var D=S.LOCAL_DISK_STORAGE_PATH_KEY,L=this.availableProperties;null!=or[D]?L.setReserved(D,"data/apptimize/"):L.h[D]="data/apptimize/";var U=S.REACT_NATIVE_STORAGE_KEY,M=this.availableProperties;null!=or[U]?M.setReserved(U,null):M.h[U]=null;var K=S.THREADING_ENABLED_KEY,V=this.availableProperties;null!=or[K]?V.setReserved(K,!1):V.h[K]=!1;var q=S.RESULT_POST_THREAD_POOL_SIZE_KEY,G=this.availableProperties;null!=or[q]?G.setReserved(q,1):G.h[q]=1;var Y=S.EXCEPTIONS_ENABLED_KEY,j=this.availableProperties;null!=or[Y]?j.setReserved(Y,!1):j.h[Y]=!1;var H=S.COMPRESS_PERSISTENCE_STORE_KEY,J=this.availableProperties;null!=or[H]?J.setReserved(H,!0):J.h[H]=!0},__class__:S});var B=function(){};(i["apptimize.util.PlatformLock"]=B).__name__=["apptimize","util","PlatformLock"],B.prototype={__class__:B};var E=function(){};(i["apptimize.util.DefaultPlatformLock"]=E).__name__=["apptimize","util","DefaultPlatformLock"],E.__interfaces__=[B],E.prototype={acquire:function(){return!0},release:function(){},hxUnserialize:function(e){},__class__:E};var I=function(){};(i["apptimize.ABTLogger"]=I).__name__=["apptimize","ABTLogger"],I.logLevelFromString=function(e){var t=e.toUpperCase();return"LOG_LEVEL_VERBOSE"==t?I.LOG_LEVEL_VERBOSE:"LOG_LEVEL_DEBUG"==t?I.LOG_LEVEL_DEBUG:"LOG_LEVEL_INFO"==t?I.LOG_LEVEL_INFO:"LOG_LEVEL_WARN"==t?I.LOG_LEVEL_WARN:"LOG_LEVEL_ERROR"==t?I.LOG_LEVEL_ERROR:I.LOG_LEVEL_NONE},I.setLogLevel=function(e){I.logLevel=e},I.c=function(e,t){I.log_out(e,t),Qe.throwException(e)},I.e=function(e,t){I.logLevel<=I.LOG_LEVEL_ERROR&&I.log_out(e,t)},I.w=function(e,t){I.logLevel<=I.LOG_LEVEL_WARN&&I.log_out(e,t)},I.i=function(e,t){I.logLevel<=I.LOG_LEVEL_INFO&&I.log_out(e,t)},I.d=function(e,t){I.logLevel<=I.LOG_LEVEL_DEBUG&&I.log_out(e,t)},I.v=function(e,t){I.logLevel<=I.LOG_LEVEL_VERBOSE&&I.log_out(e,t)},I.log_out=function(e,t){I.useTraceForLogging&&k.trace!=I.trace?k.trace(e,t):I.traceInternal("Apptimize: "+e,t)},I.redirectTraceStatements=function(){k.trace=I.trace},I.traceInternal=function(e,t){"undefined"!=typeof console&&null!=console.log&&console.log(e)},I.trace=function(e,t){var r=v.string(e);I.v(r,t)};var k=function(){};(i["haxe.Log"]=k).__name__=["haxe","Log"],k.trace=function(e,t){z.__trace(e,t)};var z=function(){};(i["js.Boot"]=z).__name__=["js","Boot"],z.__unhtml=function(){}