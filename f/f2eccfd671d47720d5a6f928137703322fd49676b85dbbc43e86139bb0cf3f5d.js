!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=43)}([function(e,t,n){"use strict";e.exports=n(44)},function(e,t,n){"use strict";e.exports=n(55)},function(e,t,n){"use strict";e.exports=n(49)},function(e,t,n){"use strict";e.exports=n(53)},function(e,t){var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";function r(){for(var e,t=[],n=0;n<arguments.length;n++)if(e=arguments[n]){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var a=r.apply(null,e);a&&t.push(a)}}else if("object"===i)if(e.toString===Object.prototype.toString)for(var u in e)o.call(e,u)&&e[u]&&t.push(u);else t.push(e.toString())}return t.join(" ")}var o={}.hasOwnProperty;e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t,n){e.exports=n(63)},function(e,t,n){"use strict";e.exports=n(52)},function(e,t,n){"use strict";e.exports=n(56)},function(e,t,n){n(60),e.exports=n(61)},function(e,t){"use strict";var n,r,o,i,a,u;Object.defineProperty(t,"__esModule",{value:!0}),t.GroupType=t.DataType=t.AlignType=t.DirectionType=t.ScriptType=t.ListType=t.NewLine=void 0,t.NewLine="\n",function(e){e.Ordered="ordered",e.Bullet="bullet",e.Checked="checked",e.Unchecked="unchecked"}(n||(n={})),t.ListType=n,function(e){e.Sub="sub",e.Super="super"}(r||(r={})),t.ScriptType=r,function(e){e.Rtl="rtl"}(o||(o={})),t.DirectionType=o,function(e){e.Left="left",e.Center="center",e.Right="right",e.Justify="justify"}(i||(i={})),t.AlignType=i,function(e){e.Image="image",e.Video="video",e.Formula="formula",e.Text="text"}(a||(a={})),t.DataType=a,function(e){e.Block="block",e.InlineGroup="inline-group",e.List="list",e.Video="video",e.Table="table"}(u||(u={})),t.GroupType=u},function(e,t,n){"use strict";e.exports=n(80)},function(e,t,n){"use strict";e.exports=n(96)},function(e,t,n){"use strict";e.exports=n(50)},function(e,t,n){"use strict";e.exports=n(62)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.find=t.intersperse=t.sliceFromReverseWhile=t.groupConsecutiveElementsWhile=t.flatten=t.preferSecond=void 0,t.preferSecond=function(e){return 0===e.length?null:2<=e.length?e[1]:e[0]},t.flatten=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])},t.find=function(e,t){if(Array.prototype.find)return Array.prototype.find.call(e,t);for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]},t.groupConsecutiveElementsWhile=function(e,t){for(var n,r=[],o=0;o<e.length;o++)n=e[o],0<o&&t(n,e[o-1])?r[r.length-1].push(n):r.push([n]);return r.map((function(e){return 1===e.length?e[0]:e}))},t.sliceFromReverseWhile=function(e,t,n){for(var r={elements:[],sliceStartsAt:-1},o=t;0<=o&&n(e[o]);o--)r.sliceStartsAt=o,r.elements.unshift(e[o]);return r},t.intersperse=function(e,t){return e.reduce((function(n,r,o){return n.push(r),o<e.length-1&&n.push(t),n}),[])}},function(e,t){"use strict";var n=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.TableCell=t.TableRow=t.TableGroup=t.ListItem=t.ListGroup=t.BlockGroup=t.InlineGroup=t.BlotBlock=t.VideoItem=void 0;var r=function(e){this.ops=e};t.InlineGroup=r;var o=function(e){this.op=e},i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o);t.VideoItem=i;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o);t.BlotBlock=a;var u=function(e,t){this.op=e,this.ops=t};t.BlockGroup=u;var l=function(e){this.items=e};t.ListGroup=l;var c=function(e,t){void 0===t&&(t=null),this.item=e,this.innerList=t};t.ListItem=c;var s=function(e){this.rows=e};t.TableGroup=s;var f=function(e){this.cells=e};t.TableRow=f;var d=function(e){this.item=e};t.TableCell=d},function(e,t,n){e.exports=n(87)},function(e,t,n){"use strict";e.exports=n(92)},function(e,t,n){"use strict";e.exports=n(57)},function(e,t,n){"use strict";e.exports=n(79)},function(e,t,n){"use strict";e.exports=n(113)},function(e,t,n){"use strict";e.exports=n(58)},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DeltaInsertOp=void 0;var o=n(9),i=n(23),a=r(n(69)),u=function(){function e(e,t){"string"==typeof e&&(e=new i.InsertDataQuill(o.DataType.Text,e+"")),this.insert=e,this.attributes=t||{}}return e.createNewLineOp=function(){return new e(o.NewLine)},e.prototype.isContainerBlock=function(){return this.isBlockquote()||this.isList()||this.isTable()||this.isCodeBlock()||this.isHeader()||this.isBlockAttribute()||this.isCustomTextBlock()},e.prototype.isBlockAttribute=function(){var e=this.attributes;return!!(e.align||e.direction||e.indent)},e.prototype.isBlockquote=function(){return!!this.attributes.blockquote},e.prototype.isHeader=function(){return!!this.attributes.header},e.prototype.isTable=function(){return!!this.attributes.table},e.prototype.isSameHeaderAs=function(e){return e.attributes.header===this.attributes.header&&this.isHeader()},e.prototype.hasSameAdiAs=function(e){return this.attributes.align===e.attributes.align&&this.attributes.direction===e.attributes.direction&&this.attributes.indent===e.attributes.indent},e.prototype.hasSameIndentationAs=function(e){return this.attributes.indent===e.attributes.indent},e.prototype.hasSameAttr=function(e){return a.default(this.attributes,e.attributes)},e.prototype.hasHigherIndentThan=function(e){return(+this.attributes.indent||0)>(+e.attributes.indent||0)},e.prototype.isInline=function(){}