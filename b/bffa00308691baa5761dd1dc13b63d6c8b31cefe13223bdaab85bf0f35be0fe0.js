/*!
 * Chart.js v3.8.0
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Chart=e()}(this,(function(){"use strict";const t="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function e(e,i,s){const n=s||(t=>Array.prototype.slice.call(t));let o=!1,a=[];return function(...s){a=n(s),o||(o=!0,t.call(window,(()=>{o=!1,e.apply(i,a)})))}}function i(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}const s=t=>"start"===t?"left":"end"===t?"right":"center",n=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,o=(t,e,i,s)=>t===(s?"left":"right")?i:"center"===t?(e+i)/2:e;var a=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const n=e.listeners[s],o=e.duration;n.forEach((s=>s({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)})))}_refresh(){this._request||(this._running=!0,this._request=t.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,s)=>{if(!i.running||!i.items.length)return;const n=i.items;let o,a=n.length-1,r=!1;for(;a>=0;--a)o=n[a],o._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=!0):(n[a]=n[n.length-1],n.pop());r&&(s.draw(),this._notify(s,i,t,"progress")),n.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function r(t){return t+.5|0}const l=(t,e,i)=>Math.max(Math.min(t,i),e);function h(t){return l(r(2.55*t),0,255)}function c(t){return l(r(255*t),0,255)}function d(t){return l(r(t/2.55)/100,0,1)}function u(t){return l(r(100*t),0,100)}const f={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},g=[..."0123456789ABCDEF"],p=t=>g[15&t],m=t=>g[(240&t)>>4]+g[15&t],b=t=>(240&t)>>4==(15&t);function x(t){var e=(t=>b(t.r)&&b(t.g)&&b(t.b)&&b(t.a))(t)?p:m;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const _=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function y(t,e,i){const s=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function v(t,e,i){const s=(s,n=(s+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[s(5),s(3),s(1)]}function w(t,e,i){const s=y(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)s[n]*=1-e-i,s[n]+=e;return s}function M(t){const e=t.r/255,i=t.g/255,s=t.b/255,n=Math.max(e,i,s),o=Math.min(e,i,s),a=(n+o)/2;let r,l,h;return n!==o&&(h=n-o,l=a>.5?h/(2-n-o):h/(n+o),r=function(t,e,i,s,n){return t===n?(e-i)/s+(e<i?6:0):e===n?(i-t)/s+2:(t-e)/s+4}(e,i,s,h,n),r=60*r+.5),[0|r,l||0,a]}function k(t,e,i,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(c)}function S(t,e,i){return k(y,t,e,i)}function P(t){return(t%360+360)%360}function D(t){const e=_.exec(t);let i,s=255;if(!e)return;e[5]!==i&&(s=e[6]?h(+e[5]):c(+e[5]));const n=P(+e[2]),o=+e[3]/100,a=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return k(w,t,e,i)}(n,o,a):"hsv"===e[1]?function(t,e,i){return k(v,t,e,i)}(n,o,a):S(n,o,a),{r:i[0],g:i[1],b:i[2],a:s}}const C={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},O={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let A;function T(t){A||(A=function(){const t={},e=Object.keys(O),i=Object.keys(C);let s,n,o,a,r;for(s=0;s<e.length;s++){for(a=r=e[s],n=0;n<i.length;n++)o=i[n],r=r.replace(o,C[o]);o=parseInt(O[a],16),t[r]=[o>>16&255,o>>8&255,255&o]}return t}(),A.transparent=[0,0,0,0]);const e=A[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const L=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const R=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,E=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function I(t,e,i){if(t){let s=M(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=S(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function z(t,e){return t?Object.assign(e||{},t):t}function F(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=c(t[3]))):(e=z(t,{r:0,g:0,b:0,a:1})).a=c(e.a),e}function B(t){return"r"===t.charAt(0)?function(t){const e=L.exec(t);let i,s,n,o=255;if(e){if(e[7]!==i){const t=+e[7];o=e[8]?h(t):l(255*t,0,255)}return i=+e[1],s=+e[3],n=+e[5],i=255&(e[2]?h(i):l(i,0,255)),s=255&(e[4]?h(s):l(s,0,255)),n=255&(e[6]?h(n):l(n,0,255)),{r:i,g:s,b:n,a:o}}}(t):D(t)}class V{constructor(t){if(t instanceof V)return t;const e=typeof t;let i;var s,n,o;"object"===e?i=F(t):"string"===e&&(o=(s=t).length,"#"===s[0]&&(4===o||5===o?n={r:255&17*f[s[1]],g:255&17*f[s[2]],b:255&17*f[s[3]],a:5===o?17*f[s[4]]:255}:7!==o&&9!==o||(n={r:f[s[1]]<<4|f[s[2]],g:f[s[3]]<<4|f[s[4]],b:f[s[5]]<<4|f[s[6]],a:9===o?f[s[7]]<<4|f[s[8]]:255})),i=n||T(t)||B(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=z(this._rgb);return t&&(t.a=d(t.a)),t}set rgb(t){this._rgb=F(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${d(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0;var t}hexString(){return this._valid?x(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=M(t),i=e[0],s=u(e[1]),n=u(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${n}%, ${d(t.a)})`:`hsl(${i}, ${s}%, ${n}%)`}(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let n;const o=e===n?.5:e,a=2*o-1,r=i.a-s.a,l=((a*r==-1?a:(a+r)/(1+a*r))+1)/2;n=1-l,i.r=255&l*i.r+n*s.r+.5,i.g=255&l*i.g+n*s.g+.5,i.b=255&l*i.b+n*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){const s=E(d(t.r)),n=E(d(t.g)),o=E(d(t.b));return{r:c(R(s+i*(E(d(e.r))-s))),g:c(R(n+i*(E(d(e.g))-n))),b:c(R(o+i*(E(d(e.b))-o))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new V(this.rgb)}alpha(t){return this._rgb.a=c(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=r(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return I(this._rgb,2,t),this}darken(t){return I(this._rgb,2,-t),this}saturate(t){return I(this._rgb,1,t),this}desaturate(t){return I(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=M(t);i[0]=P(i[0]+e),i=S(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function N(t){return new V(t)}function W(t){if(t&&"object"==typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function H(t){return W(t)?t:N(t)}function j(t){return W(t)?t:N(t).saturate(.5).darken(.1).hexString()}function $(){}const Y=function(){let t=0;return function(){return t++}}();function U(t){return null==t}function X(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function q(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const K=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function G(t,e){return K(t)?t:e}function Z(t,e){return void 0===t?e:t}const J=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,Q=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function tt(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function et(t,e,i,s){let n,o,a;if(X(t))if(o=t.length,s)for(n=o-1;n>=0;n--)e.call(i,t[n],n);else for(n=0;n<o;n++)e.call(i,t[n],n);else if(q(t))for(a=Object.keys(t),o=a.length,n=0;n<o;n++)e.call(i,t[a[n]],a[n])}function it(t,e){let i,s,n,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,s=t.length;i<s;++i)if(n=t[i],o=e[i],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function st(t){if(X(t))return t.map(st);if(q(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let n=0;for(;n<s;++n)e[i[n]]=st(t[i[n]]);return e}return t}function nt(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function ot(t,e,i,s){if(!nt(t))return;const n=e[t],o=i[t];q(n)&&q(o)?at(n,o,s):e[t]=st(o)}function at(t,e,i){const s=X(e)?e:[e],n=s.length;if(!q(t))return t;const o=(i=i||{}).merger||ot;for(let a=0;a<n;++a){if(!q(e=s[a]))continue;const n=Object.keys(e);for(let s=0,a=n.length;s<a;++s)o(n[s],t,e,i)}return t}function rt(t,e){return at(t,e,{merger:lt})}function lt(t,e,i){if(!nt(t))return;const s=e[t],n=i[t];q(s)&&q(n)?rt(s,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=st(n))}function ht(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function ct(t,e){if(""===e)return t;let i=0,s=ht(e,i);for(;t&&s>i;)t=t[e.slice(i,s)],i=s+1,s=ht(e,i);return t}function dt(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ut=t=>void 0!==t,ft=t=>"function"==typeof t,gt=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};function pt(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const mt=Object.create(null),bt=Object.create(null);function xt(t,e){if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;e<s;++e){const s=i[e];t=t[s]||(t[s]=Object.create(null))}return t}function _t(t,e,i){return"string"==typeof e?at(xt(t,e),i):at(xt(t,""),e)}var yt=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>j(e.backgroundColor),this.hoverBorderColor=(t,e)=>j(e.borderColor),this.hoverColor=(t,e)=>j(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return _t(this,t,e)}get(t){return xt(this,t)}describe(t,e){return _t(bt,t,e)}override(t,e){return _t(mt,t,e)}route(t,e,i,s){const n=xt(this,t),o=xt(this,i),a="_"+e;Object.defineProperties(n,{[a]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=o[s];return q(t)?Object.assign({},e,t):Z(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function vt(t,e,i){i=i||(i=>t[i]<e);let s,n=t.length-1,o=0;for(;n-o>1;)s=o+n>>1,i(s)?o=s:n=s;return{lo:o,hi:n}}const wt=(t,e,i)=>vt(t,i,(s=>t[s][e]<i)),Mt=(t,e,i)=>vt(t,i,(s=>t[s][e]>=i));function kt(t,e,i){let s=0,n=t.length;for(;s<n&&t[s]<e;)s++;for(;n>s&&t[n-1]>i;)n--;return s>0||n<t.length?t.slice(s,n):t}const St=["push","pop","shift","splice","unshift"];function Pt(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),St.forEach((e=>{const i="_onData"+dt(e),s=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const n=s.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"==typeof t[i]&&t[i](...e)})),n}})})))}function Dt(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(e);-1!==n&&s.splice(n,1),s.length>0||(St.forEach((e=>{delete t[e]})),delete t._chartjs)}function Ct(t){const e=new Set;let i,s;for(i=0,s=t.length;i<s;++i)e.add(t[i]);return e.size===s?t:Array.from(e)}const Ot=Math.PI,At=2*Ot,Tt=At+Ot,Lt=Number.POSITIVE_INFINITY,Rt=Ot/180,Et=Ot/2,It=Ot/4,zt=2*Ot/3,Ft=Math.log10,Bt=Math.sign;function Vt(t){const e=Math.round(t);t=Ht(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Ft(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function Nt(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s==0&&(e.push(s),e.push(t/s));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}function Wt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Ht(t,e,i){return Math.abs(t-e)<i}function jt(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function $t(t,e,i){let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s][i],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function Yt(t){return t*(Ot/180)}function Ut(t){return t*(180/Ot)}function Xt(t){if(!K(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function qt(t,e){const i=e.x-t.x,s=e.y-t.y,n=Math.sqrt(i*i+s*s);let o=Math.atan2(s,i);return o<-.5*Ot&&(o+=At),{angle:o,distance:n}}function Kt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Gt(t,e){return(t-e+Tt)%At-Ot}function Zt(t){return(t%At+At)%At}function Jt(t,e,i,s){const n=Zt(t),o=Zt(e),a=Zt(i),r=Zt(o-n),l=Zt(a-n),h=Zt(n-o),c=Zt(n-a);return n===o||n===a||s&&o===a||r>l&&h<c}function Qt(t,e,i){return Math.max(e,Math.min(i,t))}function te(t){return Qt(t,-32768,32767)}function ee(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function ie(){return"undefined"!=typeof window&&"undefined"!=typeof document}function se(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function ne(t,e,i){let s;return"string"==typeof t?(s=parseInt(t,10),-1!==t.indexOf("%")&&(s=s/100*e.parentNode[i])):s=t,s}const oe=t=>window.getComputedStyle(t,null);function ae(t,e){return oe(t).getPropertyValue(e)}const re=["top","right","bottom","left"];function le(t,e,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const o=re[n];s[o]=parseFloat(t[e+"-"+o+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}function he(t,e){if("native"in t)return t;const{canvas:i,currentDevicePixelRatio:s}=e,n=oe(i),o="border-box"===n.boxSizing,a=le(n,"padding"),r=le(n,"border","width"),{x:l,y:h,box:c}=function(t,e){const i=t.touches,s=i&&i.length?i[0]:t,{offsetX:n,offsetY:o}=s;let a,r,l=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(n,o,t.target))a=n,r=o;else{const t=e.getBoundingClientRect();a=s.clientX-t.left,r=s.clientY-t.top,l=!0}return{x:a,y:r,box:l}}(t,i),d=a.left+(c&&r.left),u=a.top+(c&&r.top);let{width:f,height:g}=e;return o&&(f-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/f*i.width/s),y:Math.round((h-u)/g*i.height/s)}}const ce=t=>Math.round(10*t)/10;function de(t,e,i,s){const n=oe(t),o=le(n,"margin"),a=ne(n.maxWidth,t,"clientWidth")||Lt,r=ne(n.maxHeight,t,"clientHeight")||Lt,l=function(t,e,i){let s,n;if(void 0===e||void 0===i){const o=se(t);if(o){const t=o.getBoundingClientRect(),a=oe(o),r=le(a,"border","width"),l=le(a,"padding");e=t.width-l.width-r.width,i=t.height-l.height-r.height,s=ne(a.maxWidth,o,"clientWidth"),n=ne(a.maxHeight,o,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:s||Lt,maxHeight:n||Lt}}(t,e,i);let{width:h,height:c}=l;if("content-box"===n.boxSizing){const t=le(n,"border","width"),e=le(n,"padding");h-=e.width+t.width,c-=e.height+t.height}return h=Math.max(0,h-o.width),c=Math.max(0,s?Math.floor(h/s):c-o.height),h=ce(Math.min(h,a,l.maxWidth)),c=ce(Math.min(c,r,l.maxHeight)),h&&!c&&(c=ce(h/2)),{width:h,height:c}}function ue(t,e,i){const s=e||1,n=Math.floor(t.height*s),o=Math.floor(t.width*s);t.height=n/s,t.width=o/s;const a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==s||a.height!==n||a.width!==o)&&(t.currentDevicePixelRatio=s,a.height=n,a.width=o,t.ctx.setTransform(s,0,0,s,0,0),!0)}const fe=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function ge(t,e){const i=ae(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function pe(t){return!t||U(t.size)||U(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function me(t,e,i,s,n){let o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>s&&(s=o),s}function be(t,e,i,s){let n=(s=s||{}).data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==e&&(n=s.data={},o=s.garbageCollect=[],s.font=e),t.save(),t.font=e;let a=0;const r=i.length;let l,h,c,d,u;for(l=0;l<r;l++)if(d=i[l],null!=d&&!0!==X(d))a=me(t,n,o,a,d);else if(X(d))for(h=0,c=d.length;h<c;h++)u=d[h],null==u||X(u)||(a=me(t,n,o,a,u));t.restore();const f=o.length/2;if(f>i.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return a}function xe(t,e,i){const s=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*s)/s+n}function _e(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function ye(t,e,i,s){let n,o,a,r,l;const h=e.pointStyle,c=e.rotation,d=e.radius;let u=(c||0)*Rt;if(h&&"object"==typeof h&&(n=h.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,s),t.rotate(u),t.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),void t.restore();if(!(isNaN(d)||d<=0)){switch(t.beginPath(),h){default:t.arc(i,s,d,0,At),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(u)*d,s-Math.cos(u)*d),u+=zt,t.lineTo(i+Math.sin(u)*d,s-Math.cos(u)*d),u+=zt,t.lineTo(i+Math.sin(u)*d,s-Math.cos(u)*d),t.closePath();break;case"rectRounded":l=.516*d,r=d-l,o=Math.cos(u+It)*r,a=Math.sin(u+It)*r,t.arc(i-o,s-a,l,u-Ot,u-Et),t.arc(i+a,s-o,l,u-Et,u),t.arc(i+o,s+a,l,u,u+Et),t.arc(i-a,s+o,l,u+Et,u+Ot),t.closePath();break;case"rect":if(!c){r=Math.SQRT1_2*d,t.rect(i-r,s-r,2*r,2*r);break}u+=It;case"rectRot":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+a,s-o),t.lineTo(i+o,s+a),t.lineTo(i-a,s+o),t.closePath();break;case"crossRot":u+=It;case"cross":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a),t.moveTo(i+a,s-o),t.lineTo(i-a,s+o);break;case"star":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a),t.moveTo(i+a,s-o),t.lineTo(i-a,s+o),u+=It,o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a),t.moveTo(i+a,s-o),t.lineTo(i-a,s+o);break;case"line":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a);break;case"dash":t.moveTo(i,s),t.lineTo(i+Math.cos(u)*d,s+Math.sin(u)*d)}t.fill(),e.borderWidth>0&&t.stroke()}}function ve(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function we(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Me(t){t.restore()}function ke(t,e,i,s,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y)}else"after"===n!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function Se(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function Pe(t,e,i,s,n,o={}){const a=X(e)?e:[e],r=o.strokeWidth>0&&""!==o.strokeColor;let l,h;for(t.save(),t.font=n.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);U(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,o),l=0;l<a.length;++l)h=a[l],r&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),U(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(h,i,s,o.maxWidth)),t.fillText(h,i,s,o.maxWidth),De(t,i,s,h,o),s+=n.lineHeight;t.restore()}function De(t,e,i,s,n){if(n.strikethrough||n.underline){const o=t.measureText(s),a=e-o.actualBoundingBoxLeft,r=e+o.actualBoundingBoxRight,l=i-o.actualBoundingBoxAscent,h=i+o.actualBoundingBoxDescent,c=n.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(a,c),t.lineTo(r,c),t.stroke()}}function Ce(t,e){const{x:i,y:s,w:n,h:o,radius:a}=e;t.arc(i+a.topLeft,s+a.topLeft,a.topLeft,-Et,Ot,!0),t.lineTo(i,s+o-a.bottomLeft),t.arc(i+a.bottomLeft,s+o-a.bottomLeft,a.bottomLeft,Ot,Et,!0),t.lineTo(i+n-a.bottomRight,s+o),t.arc(i+n-a.bottomRight,s+o-a.bottomRight,a.bottomRight,Et,0,!0),t.lineTo(i+n,s+a.topRight),t.arc(i+n-a.topRight,s+a.topRight,a.topRight,0,-Et,!0),t.lineTo(i+a.topLeft,s)}function Oe(t,e=[""],i=t,s,n=(()=>t[0])){ut(s)||(s=Ne("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:s,_getTarget:n,override:n=>Oe([n,...t],e,i,s)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,s)=>Ee(i,s,(()=>function(t,e,i,s){let n;for(const o of e)if(n=Ne(Le(o,t),i),ut(n))return Re(t,n)?Be(i,s,t,n):n}(s,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>We(t).includes(e),ownKeys:t=>We(t),set(t,e,i){const s=t._storage||(t._storage=n());return t[e]=s[e]=i,delete t._keys,!0}})}function Ae(t,e,i,s){const n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:Te(t,s),setContext:e=>Ae(t,e,i,s),override:n=>Ae(t.override(n),e,i,s)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Ee(t,e,(()=>function(t,e,i){const{_proxy:s,_context:n,_subProxy:o,_descriptors:a}=t;let r=s[e];ft(r)&&a.isScriptable(e)&&(r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+t);r.add(t),e=e(o,a||s),r.delete(t),Re(t,e)&&(e=Be(n._scopes,n,t,e));return e}(e,r,t,i));X(r)&&r.length&&(r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_descriptors:r}=i;if(ut(o.index)&&s(t))e=e[o.index%e.length];else if(q(e[0])){const i=e,s=n._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=Be(s,n,t,l);e.push(Ae(i,o,a&&a[t],r))}}return e}(e,r,t,a.isIndexable));Re(e,r)&&(r=Ae(r,n,o&&o[e],a));return r}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],!0)})}function Te(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:s,isScriptable:ft(i)?i:()=>i,isIndexable:ft(s)?s:()=>s}}const Le=(t,e)=>t?t+dt(e):e,Re=(t,e)=>q(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Ee(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const s=i();return t[e]=s,s}function Ie(t,e,i){return ft(t)?t(e,i):t}const ze=(t,e)=>!0===t?e:"string"==typeof t?ct(e,t):void 0;function Fe(t,e,i,s,n){for(const o of e){const e=ze(i,o);if(e){t.add(e);const o=Ie(e._fallback,i,n);if(ut(o)&&o!==i&&o!==s)return o}else if(!1===e&&ut(s)&&i!==s)return null}return!1}function Be(t,e,i,s){const n=e._rootScopes,o=Ie(e._fallback,i,s),a=[...t,...n],r=new Set;r.add(s);let l=Ve(r,a,i,o||i,s);return null!==l&&((!ut(o)||o===i||(l=Ve(r,a,o,l,s),null!==l))&&Oe(Array.from(r),[""],n,o,(()=>function(t,e,i){const s=t._getTarget();e in s||(s[e]={});const n=s[e];if(X(n)&&q(i))return i;return n}(e,i,s))))}function Ve(t,e,i,s,n){for(;i;)i=Fe(t,e,i,s,n);return i}function Ne(t,e){for(const i of e){if(!i)continue;const e=i[t];if(ut(e))return e}}function We(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function He(t,e,i,s){const{iScale:n}=t,{key:o="r"}=this._parsing,a=new Array(s);let r,l,h,c;for(r=0,l=s;r<l;++r)h=r+i,c=e[h],a[r]={r:n.parse(ct(c,o),h)};return a}const je=Number.EPSILON||1e-14,$e=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ye=t=>"x"===t?"y":"x";function Ue(t,e,i,s){const n=t.skip?e:t,o=e,a=i.skip?e:i,r=Kt(o,n),l=Kt(a,o);let h=r/(r+l),c=l/(r+l);h=isNaN(h)?0:h,c=isNaN(c)?0:c;const d=s*h,u=s*c;return{previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+u*(a.x-n.x),y:o.y+u*(a.y-n.y)}}}function Xe(t,e="x"){const i=Ye(e),s=t.length,n=Array(s).fill(0),o=Array(s);let a,r,l,h=$e(t,0);for(a=0;a<s;++a)if(r=l,l=h,h=$e(t,a+1),l){if(h){const t=h[e]-l[e];n[a]=0!==t?(h[i]-l[i])/t:0}o[a]=r?h?Bt(n[a-1])!==Bt(n[a])?0:(n[a-1]+n[a])/2:n[a-1]:n[a]}!function(t,e,i){const s=t.length;let n,o,a,r,l,h=$e(t,0);for(let c=0;c<s-1;++c)l=h,h=$e(t,c+1),l&&h&&(Ht(e[c],0,je)?i[c]=i[c+1]=0:(n=i[c]/e[c],o=i[c+1]/e[c],r=Math.pow(n,2)+Math.pow(o,2),r<=9||(a=3/Math.sqrt(r),i[c]=n*a*e[c],i[c+1]=o*a*e[c])))}(t,n,o),function(t,e,i="x"){const s=Ye(i),n=t.length;let o,a,r,l=$e(t,0);for(let h=0;h<n;++h){if(a=r,r=l,l=$e(t,h+1),!r)continue;const n=r[i],c=r[s];a&&(o=(n-a[i])/3,r[`cp1${i}`]=n-o,r[`cp1${s}`]=c-o*e[h]),l&&(o=(l[i]-n)/3,r[`cp2${i}`]=n+o,r[`cp2${s}`]=c+o*e[h])}}(t,o,e)}function qe(t,e,i){return Math.max(Math.min(t,i),e)}function Ke(t,e,i,s,n){let o,a,r,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Xe(t,n);else{let i=s?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)r=t[o],l=Ue(i,r,t[Math.min(o+1,a-(s?0:1))%a],e.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,i=r}e.capBezierPoints&&function(t,e){let i,s,n,o,a,r=ve(t[0],e);for(i=0,s=t.length;i<s;++i)a=o,o=r,r=i<s-1&&ve(t[i+1],e),o&&(n=t[i],a&&(n.cp1x=qe(n.cp1x,e.left,e.right),n.cp1y=qe(n.cp1y,e.top,e.bottom)),r&&(n.cp2x=qe(n.cp2x,e.left,e.right),n.cp2y=qe(n.cp2y,e.top,e.bottom)))}(t,i)}const Ge=t=>0===t||1===t,Ze=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*At/i),Je=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*At/i)+1,Qe={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Et),easeOutSine:t=>Math.sin(t*Et),easeInOutSine:t=>-.5*(Math.cos(Ot*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>Ge(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Ge(t)?t:Ze(t,.075,.3),easeOutElastic:t=>Ge(t)?t:Je(t,.075,.3),easeInOutElastic(t){const e=.1125;return Ge(t)?t:t<.5?.5*Ze(2*t,e,.45):.5+.5*Je(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Qe.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*Qe.easeInBounce(2*t):.5*Qe.easeOutBounce(2*t-1)+.5};function ti(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function ei(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?i<1?t.y:e.y:i>0?e.y:t.y}}function ii(t,e,i,s){const n={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=ti(t,n,i),r=ti(n,o,i),l=ti(o,e,i),h=ti(a,r,i),c=ti(r,l,i);return ti(h,c,i)}const si=new Map;function ni(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let s=si.get(i);return s||(s=new Intl.NumberFormat(t,e),si.set(i,s)),s}(e,i).format(t)}const oi=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),ai=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function ri(t,e){const i=(""+t).match(oi);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}function li(t,e){const i={},s=q(e),n=s?Object.keys(e):e,o=q(t)?s?i=>Z(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=+o(t)||0;return i}function(){}