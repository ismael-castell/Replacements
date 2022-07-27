function addWindowOnLoadEvent(fn){let oldOnLoad;if(typeof fn!=='function'){throw'Parameter "fn" must be a function: '+typeof fn;}
if(typeof window.onload==='function'){oldOnLoad=window.onload;window.onload=function(){if(oldOnLoad){oldOnLoad();}
fn();};}else{window.onload=fn;}}
function jsonp(url,callback){let callbackName='jp_'+Math.round(100000*Math.random()),d=document,script;window[callbackName]=function(data){delete window[callbackName];d.body.removeChild(script);callback(data);};script=d.createElement('script');script.src=url+(url.indexOf('?')>=0?'&':'?')+'c='+callbackName;d.body.appendChild(script);}
function setIntervalRedirect(countDown,redirectUri,className,redirectText){if(typeof countDown!=='number'){throw'timeOut is not a number';}
if(redirectUri===undefined){throw'redirectUri is undefined';}
let d=document,w=window,parentElement=d.querySelector(className)?d.querySelector(className):d.body,overlayDiv=d.createElement('div'),textDiv=d.createElement('div'),countDownFn;overlayDiv.className='nfyf-community-user-kicked-overlay';textDiv.className='nfyf-community-user-kicked-info';overlayDiv.appendChild(textDiv);parentElement.appendChild(overlayDiv);countDownFn=function(){if(countDown>=0){if(textDiv!==null){if(textDiv.innerText===undefined){textDiv.textContent=redirectText.replace('{countDown}',countDown.toString());}else{textDiv.innerText=redirectText.replace('{countDown}',countDown.toString());}}
countDown--;if(countDown===0){w.location.href=redirectUri;}}};countDownFn();w.setInterval(countDownFn,1000);}
function openLinkWindow(link,width,height,left,top,scrollbars,resizable,status){let linkPopUp=window.open(link,'LinkPopUp','toolbar=no,scrollbars='+scrollbars+',status='+status+',menubar=no,location=no,resizable='+resizable+',width='+width+',height='+height+',left='+left+',top='+top);if(linkPopUp.opener===null){linkPopUp.opener=self;}
linkPopUp.focus();}
function(){}