function browseIt()
{this.ver=navigator.appVersion.toLowerCase();this.verNum=parseInt(this.ver);this.agent=navigator.userAgent.toLowerCase();this.dom=(document.getElementById?1:0);this.opera=(this.agent.indexOf("opera")>-1&&this.dom?1:0);this.opera7=(this.opera&&this.verNum>=7);this.opera9=(this.opera&&this.verNum>=9);this.ie11=window.navigator.appName=='Netscape'&&(new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(window.navigator.userAgent)!=null);this.ie=((this.ver.indexOf("msie")>-1)&&this.dom&&!this.opera?1:0);this.webkit=this.ver.indexOf("applewebkit")>-1;this.chrome=this.ver.indexOf("chrome")>-1;this.safari=this.chrome?false:this.ver.indexOf("safari")>-1;this.ieVer=0;if(this.ie){var pos=this.ver.indexOf("msie");if(pos!=-1)
this.ieVer=parseFloat(this.ver.substr(pos+5));}
this.ie6=(this.ie&&(this.ieVer>=6));this.ie6only=(this.ie&&(this.ieVer>=6)&&(this.ieVer<7));this.ie7=(this.ie&&(this.ieVer>=7));this.ie8=(this.ie&&(this.ieVer>=8));this.ie9=(this.ie&&(this.ieVer>=9));if(this.ie11&&this.ieVer==0){this.ieVer=11;}
this.macOS=(this.agent.indexOf("mac")>-1);this.mac=(this.macOS&&this.verNum>=7?1:0);this.moz=(this.agent.indexOf("gecko")>-1);if(this.ie11){this.moz=0;}
this.ns6=(this.dom&&this.agent.indexOf("netscape")>-1&&this.verNum>=5?1:0);this.ff=(this.agent.indexOf("firefox")>-1);this.b=(this.ie||this.ns6||this.opera7||this.mac||this.moz||this.dom);return this;}
var b=new browseIt();function trim(s,p)
{if(typeof s!='string')
return s;return s.replace(p?p:/^\s*|\s*$/g,'');}
function stripTags(str)
{return str.replace(/(<([^>]*)>)/g,'');}
function checkAll(val,p)
{if(typeof p=='string')
p=document.getElementById(p);if(!p)
p=document.body;var arr=p.getElementsByTagName('INPUT');for(var i=0;i<arr.length;i++){if(arr[i].type=='checkbox')
arr[i].checked=val;}}
function checkDate(month,day,year)
{if(month<1||month>12)return false;if(day<1||day>31)return false;switch(month){case 4:case 6:case 9:case 11:if(day>30)return false;break;case 2:if(year%4){if(day>28)return false;}else{if(day>29)return false;}
break;}
return true;}
function frPr()
{if(parent&&parent!=window)
parent.location.href=window.location.href;}
var toggleDisplay_hiddenObj=[];function toggleDisplay(tag,visibleValue,cont_depriciated,dims)
{var isHide=(visibleValue=='hidden');var sel=[];if(typeof(tag)=='string'){if(!isHide){var tmp=[];for(var i=0;i<toggleDisplay_hiddenObj.length;i++){if(toggleDisplay_hiddenObj[i].tagName==tag)
sel.push(toggleDisplay_hiddenObj[i]);else
tmp.push(toggleDisplay_hiddenObj[i]);}
toggleDisplay_hiddenObj=tmp;}else{sel=document.getElementsByTagName(tag);}}else{sel=tag;}
var changedObj=[];var b=null;for(var i=0;i<sel.length;i++){var obj=sel[i];if(isHide&&(obj.style.visibility=='hidden'||obj.parentNode.style.visibility=='hidden'))
continue;if(dims){b=getPosition(obj);if(!((((dims.x>b.x&&dims.x<(b.x+b.w))||((dims.x+dims.w)>b.x&&(dims.x+dims.w)<(b.x+b.w)))&&((dims.y>b.y&&dims.y<(b.y+b.h))||((dims.y+dims.h)>b.y&&(dims.y+dims.h)<(b.y+b.h))))||(((b.x>dims.x&&b.x<(dims.x+dims.w))||((b.x+b.w)>dims.x&&(b.x+b.w)<(dims.x+dims.w)))&&((b.y>dims.y&&b.y<(dims.y+dims.h))||((b.y+b.h)>dims.y&&(b.y+b.h)<(dims.y+dims.h))))))
continue;}
obj.style.visibility=visibleValue;changedObj.push(obj);if(isHide)
toggleDisplay_hiddenObj.push(obj);}
return changedObj;}
function dce(tag){return document.createElement(tag);}
function dct(text){return document.createTextNode(text);}
function dge(id){return document.getElementById(id);}
function getItemIndex(searchVal,indexCompare,arr){var len=arr.length;for(var i=0;i<len;i++){if(arr[i][indexCompare]==searchVal){return i;}}
return-1;}
function arrayPos(element,arr){var len=arr.length;for(var i=0;i<len;i++){if(arr[i]==element){return i;}}
return-1;}
function peUtilClearContainer(container){if(typeof(container.childNodes)!='undefined'){while(container.childNodes.length){if(typeof(container.firstChild.controller)!='undefined')
container.firstChild.controller=null;peUtilClearContainer(container.firstChild);var tmp=container.firstChild;container.removeChild(tmp);tmp=null;delete tmp;}}}
function strCmp(str1,str2){if(str1==str2)
return 0;var arr=new Array(str1,str2);arr.sort();if(arr[0]==str1)
return-1;else
return 1;}
function striCmp(str1,str2){str1=''+str1;str2=''+str2;if(str1==str2)
return 0;str1=str1.toLowerCase();str2=str2.toLowerCase();var arr=new Array(str1,str2);arr.sort();if(arr[0]==str1)
return-1;else
return 1;}
function DBG(elem)
{var str='';for(var i in elem){str+=i+': '+elem[i]+'; ';}
alert(str)}
nalertCount=0;function nalert(st,max){if(nalertCount<max){alert(st);nalertCount++;}}
function formatStToSafeGET(st){st=''+st;st=st.replace(/%/g,'%25');st=st.replace(/\+/g,'%2B');st=st.replace(/ /g,'+');st=st.replace(/\?/g,'%3F');st=st.replace(/&/g,'%26');st=st.replace(/=/g,'%3D');st=st.replace(/'/g,'%27');st=st.replace(/"/g,'%22');st=st.replace(/\//g,'%2F');st=st.replace(/\\/g,'%5C');st=st.replace(/\x0d/g,'%0D');st=st.replace(/\x0a/g,'%0A');return st;}
function inputLimit(input,maxlen,left)
{inputstr=input.value;strlen=inputstr.length;if(strlen>maxlen)
input.value=inputstr.substring(0,maxlen);if(left)
left=document.getElementById(left);if(left){if(left.tagName=='INPUT')
left.value=maxlen-input.value.length;else
left.innerHTML=maxlen-input.value.length;}
return true;}
function getPosition(elem,checkScroll)
{if(typeof(checkScroll)=='undefined')
checkScroll=false;var left=0;var top=0;var width=elem.offsetWidth;var height=elem.offsetHeight;while(elem.offsetParent){left+=elem.offsetLeft;top+=elem.offsetTop;if(checkScroll){left-=elem.scrollLeft;top-=elem.scrollTop;}
elem=elem.offsetParent;}
left+=elem.offsetLeft;top+=elem.offsetTop;return{x:left,y:top,w:width,h:height};}
function getPosition2(elem,checkScroll)
{if(elem.getBoundingClientRect)
return getOffsetRect(elem);else
return getPosition(elem,checkScroll);}
function getOffsetRect(elem){var width=elem.offsetWidth;var height=elem.offsetHeight;var box=elem.getBoundingClientRect();var body=document.body;var docElem=document.documentElement;var scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop;var scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft;var clientTop=docElem.clientTop||body.clientTop||0;var clientLeft=docElem.clientLeft||body.clientLeft||0;var top=box.top+scrollTop-clientTop;var left=box.left+scrollLeft-clientLeft;return{x:Math.round(left),y:Math.round(top),w:width,h:height};}
function mouseCoords(evt)
{evt=evt||window.event;if(evt.pageX||evt.pageY){return{x:evt.pageX,y:evt.pageY};}
if(b.ie&&b.ieVer>=6)
return{x:evt.clientX+document.documentElement.scrollLeft-document.documentElement.clientLeft,y:evt.clientY+document.documentElement.scrollTop-document.documentElement.clientTop};else
return{x:evt.clientX+document.body.scrollLeft-document.body.clientLeft,y:evt.clientY+document.body.scrollTop-document.body.clientTop};}
function getWindowInfo()
{var ieStyle=document.documentElement&&(typeof(document.documentElement.scrollLeft)!='undefined');var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=='number'){scrOfY=window.pageYOffset;scrOfX=window.pageXOffset;}else if(document.body&&(typeof(document.body.scrollLeft)!='undefined')&&!ieStyle){scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft;}else if(ieStyle){scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft;}
var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight;}else if(document.documentElement&&(typeof(document.documentElement.clientWidth)!='undefined')){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}else if(document.body&&(typeof(document.body.clientWidth)!='undefined')){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight;}
return{top:scrOfY,left:scrOfX,width:myWidth,height:myHeight};}
function itemSpelling(num,form){switch(num%10){case 1:if(num%100!=11)
return form[0];case 2:case 3:case 4:if(num%100<11||num%100>14)
return form[1];default:return form[2];}}
function addToBody(element){if(document.body.firstChild)
document.body.insertBefore(element,document.body.firstChild);else
document.body.appendChild(element);}
function util_htmlspecialchars(st){if(!this.regAmp){this.regAmp=/&/g;this.regLt=/</g;this.regGt=/>/g;this.regQuot=/"/g;}
var result=st+'';var result=result.replace(this.regAmp,'&amp;');result=result.replace(this.regLt,'&lt;');result=result.replace(this.regGt,'&gt;');result=result.replace(this.regQuot,'&quot;');return result;}
function sprintf(str,arg){str=str+'';var arg=arg||[];var re=/%s/;for(var i=0;i<arg.length;i++)
str=str.replace(re,arg[i]);return str;}
function utilSetCookie(name,value,expires,path,domain,secure)
{var expiresString=null;if(expires){if(typeof(expires.getTime)=='undefined'){var date=new Date();date.setTime(date.getTime()+expires);expiresString=date.toGMTString();}else{expiresString=expires.toGMTString();}}
document.cookie=escape(name)+'='+escape(value)
+(expiresString?'; expires='+expiresString:'')
+(path?'; path='+path:'; path=/')
+(domain?'; DOMAIN='+domain:'')
+(secure?'; SECURE':'');}
function utilGetCookie(name){var matches=document.cookie.match(new RegExp('(?:^|; )'+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+'=([^;]*)'));return matches?decodeURIComponent(matches[1]):undefined;}
function(){}