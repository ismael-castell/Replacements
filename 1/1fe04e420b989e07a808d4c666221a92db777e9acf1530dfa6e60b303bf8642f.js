!function(a){"use strict";var e={BID_REQUEST:"request",COMPLETED:"completed",BID_RESPONSE:"response",ERROR:"error"},t=function(a){function t(a,e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a,e));return n.player=a,n.plugin=apstag||window.apstag,n.adRequestTransformCallback=n.adRequestTransformCallback.bind(n),n}return babelHelpers.inherits(t,a),babelHelpers.createClass(t,[{key:"onready",value:function(){this.plugin&&this.data.transformEnabled!==!1&&(this.init(),this.player.addTransform(akamai.amp.TransformType.AD_REQUEST,this.adRequestTransformCallback))}},{key:"adRequestTransformCallback",value:function(a){var t=this;return this.plugin&&this.data.transformEnabled!==!1?this.getAdTag().then(function(e){return a.request.adTagUrl+="&scp="+e,a}).catch(function(){}