(function(){var d=this;
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var l="closure_uid_"+(1E9*Math.random()>>>0),m=0;var n=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function p(a,b){return a<b?-1:a>b?1:0};function q(a){var b=t,c=u;c=void 0===c?window:c;a=c.navigator.userAgent.match(a);return!a||a&&parseInt(a[1],10)>b}var v={m:"ie",j:"android",o:"ios"},w=/MSIE\s(\d+)\.(\d+);\sWindows\sNT/,x=/Windows\sNT.+Trident.+rv:(\d+)(?:.(\d+))?/,y={m:w,v:x,o:/(?:iPhone|iPad)?;.+OS\s(\d+)_\d+/,j:/Android\s(\d+)\.(\d+)/},z=/\bglue-app-?\w*\b/;function A(a){"array"==k(a)||(a=[a]);for(var b=document.documentElement,c=0,e;e=a[c];c++){var h=e.isSupported;e=e.FEATURE_ID;if(!h||!e)throw Error(aa.cannotDecorate);h()&&(b.className+=" glue-"+e)}}var aa={cannotDecorate:"Cannot decorate for the specified feature."};var B="flexWrap WebkitFlexWrap MozFlexWrap OFlexWrap msFlexWrap boxDirection WebkitBoxDirection MozBoxDirection OBoxDirection msBoxDirection".split(" "),C=document.documentElement.style,ba={FEATURE_ID:"flexbox",A:B,B:C,isSupported:function(a){a=a||C;for(var b=B.slice(0);0<b.length&&!(b.shift()in a););return 0<b.length}};function(){}