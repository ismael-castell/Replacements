(function(C,n,r){function v(){g.contentWindow.postMessage({action:"enableUsableNetAssistive",clientToken:r},"https://"+n)}function w(){g.contentWindow.postMessage({action:"disableUsableNetAssistive",clientToken:r},"https://"+n)}function q(a,b){return"background-image:url('https://a40.usablenet.com/pt/c/img/usntA40"+(a?"On":"Off")+b+".svg')"}function D(a,b,c){var d=document.getElementById("usntA40start");if(d){var e=d.getAttribute("breakpoint")||d.dataset.breakpoint||"",f=d.getAttribute("mobile-color")||
d.dataset.mobileColor||"",p=d.getAttribute("mobile-position")||d.dataset.mobilePosition||"";e&&(e=parseInt(e),isNaN(e)||"top-right"!==p&&"top-left"!==p&&"bottom-right"!==p&&"bottom-left"!==p||(d=function(h){window.innerWidth<=e&&(!a.classList.contains("usntA40mobile")||!0===h)?(a.classList.remove("usntA40"+c),a.classList.add("usntA40"+p,"usntA40mobile"),h=a.classList.contains("usntA40Enabled"),"dark"===f?(a.classList.add("usntA40Dark"),a.querySelector("#usntA40Icon").setAttribute("style",q(h,"D"))):
"dark"!==f&&(a.classList.remove("usntA40Dark"),a.querySelector("#usntA40Icon").setAttribute("style",q(h,"L")))):window.innerWidth>e&&(a.classList.contains("usntA40mobile")||!0===h)&&(a.classList.remove("usntA40"+p,"usntA40mobile"),a.classList.add("usntA40"+c),h=a.classList.contains("usntA40Enabled"),"dark"===b?(a.classList.add("usntA40Dark"),a.querySelector("#usntA40Icon").setAttribute("style",q(h,"D"))):"dark"!==b&&a.classList.contains("usntA40Dark")&&(a.classList.remove("usntA40Dark"),a.querySelector("#usntA40Icon").setAttribute("style",
q(h,"L"))))},d(!0),window.removeEventListener("resize",d),window.addEventListener("resize",d)))}}function x(a){var b=document.getElementById("usntA40Toggle");if(!b){var c=document.createElement("style");c.styleSheet?c.styleSheet.cssText='#usntA40Toggle{background:#f5f5f5;box-shadow:0 1px 2px #0000003D;border-radius:28px;display:inline-block!important;position:fixed;bottom:20px;left:20px;z-index:9999}#usntA40Toggle.usntA40top-left{top:20px;left:20px;bottom:auto;right:auto}#usntA40Toggle.usntA40top-right{top:20px;right:20px;left:auto;bottom:auto}#usntA40Toggle.usntA40bottom-right{right:20px;left:auto}#usntA40Toggle a#usntA40Link{display:block;text-decoration:none;padding:13px 0 13px 44px;box-sizing:border-box;position:relative;width:48px;height:48px;overflow:hidden;border-radius:90px;box-sizing:border-box;line-height:18px;background-color:#ebebf0;text-decoration:underline;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);border:2px solid #f5f5f5}#usntA40Toggle a#usntA40Link:focus{box-shadow:0 0 0 3px rgba(235,235,240,.87);outline:0;border-color:#0040dd}#usntA40Toggle i#usntA40Icon{background-color:#f5f5f5;position:absolute;width:44px;height:44px;left:0;top:0;overflow:hidden;background-size:34px;background-repeat:no-repeat;background-position:6px center;border-radius:90px;box-shadow:0 1px 2px #0000003D}#usntA40Toggle a#usntA40Link:focus,#usntA40Toggle a#usntA40Link:hover,#usntA40Toggle.usntA40Expanded a#usntA40Link{min-width:44px;min-height:44px;width:auto;height:auto}#usntA40Toggle div#usntA40Txt{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif;font-size:14px;font-weight:400;padding-right:12px;transition:margin-left .35s cubic-bezier(.19,1,.22,1);-webkit-transition:margin-left .35s cubic-bezier(.19,1,.22,1);margin-left:-200px;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0)}#usntA40Toggle a#usntA40Link{color:#363638}#usntA40Link:hover div#usntA40Txt{margin-left:6px}#usntA40Toggle.usntA40Touch div#usntA40Txt{margin-left:-200px}#usntA40Link:focus div#usntA40Txt,#usntA40Toggle.usntA40Expanded div#usntA40Txt{margin-left:6px}#usntA40Toggle.usntA40Dark a#usntA40Link{background-color:#242426;border-color:#444446}#usntA40Toggle.usntA40Dark a#usntA40Link:focus{border-color:#409cff;box-shadow:0 0 0 3px rgba(36,36,38,.87)}#usntA40Toggle.usntA40Dark i#usntA40Icon{background-color:#444446}#usntA40Toggle.usntA40Dark a#usntA40Link{color:#d8d8dc}#usntA40Toggle.usntA40bottom-right a#usntA40Link,#usntA40Toggle.usntA40top-right a#usntA40Link{padding:13px 44px 13px 0}#usntA40Toggle.usntA40bottom-right i#usntA40Icon,#usntA40Toggle.usntA40top-right i#usntA40Icon{left:auto;right:0}#usntA40Toggle.usntA40bottom-right div#usntA40Txt,#usntA40Toggle.usntA40top-right div#usntA40Txt{padding-right:0;padding-left:12px}':
c.appendChild(document.createTextNode('#usntA40Toggle{background:#f5f5f5;box-shadow:0 1px 2px #0000003D;border-radius:28px;display:inline-block!important;position:fixed;bottom:20px;left:20px;z-index:9999}#usntA40Toggle.usntA40top-left{top:20px;left:20px;bottom:auto;right:auto}#usntA40Toggle.usntA40top-right{top:20px;right:20px;left:auto;bottom:auto}#usntA40Toggle.usntA40bottom-right{right:20px;left:auto}#usntA40Toggle a#usntA40Link{display:block;text-decoration:none;padding:13px 0 13px 44px;box-sizing:border-box;position:relative;width:48px;height:48px;overflow:hidden;border-radius:90px;box-sizing:border-box;line-height:18px;background-color:#ebebf0;text-decoration:underline;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);border:2px solid #f5f5f5}#usntA40Toggle a#usntA40Link:focus{box-shadow:0 0 0 3px rgba(235,235,240,.87);outline:0;border-color:#0040dd}#usntA40Toggle i#usntA40Icon{background-color:#f5f5f5;position:absolute;width:44px;height:44px;left:0;top:0;overflow:hidden;background-size:34px;background-repeat:no-repeat;background-position:6px center;border-radius:90px;box-shadow:0 1px 2px #0000003D}#usntA40Toggle a#usntA40Link:focus,#usntA40Toggle a#usntA40Link:hover,#usntA40Toggle.usntA40Expanded a#usntA40Link{min-width:44px;min-height:44px;width:auto;height:auto}#usntA40Toggle div#usntA40Txt{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif;font-size:14px;font-weight:400;padding-right:12px;transition:margin-left .35s cubic-bezier(.19,1,.22,1);-webkit-transition:margin-left .35s cubic-bezier(.19,1,.22,1);margin-left:-200px;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0)}#usntA40Toggle a#usntA40Link{color:#363638}#usntA40Link:hover div#usntA40Txt{margin-left:6px}#usntA40Toggle.usntA40Touch div#usntA40Txt{margin-left:-200px}#usntA40Link:focus div#usntA40Txt,#usntA40Toggle.usntA40Expanded div#usntA40Txt{margin-left:6px}#usntA40Toggle.usntA40Dark a#usntA40Link{background-color:#242426;border-color:#444446}#usntA40Toggle.usntA40Dark a#usntA40Link:focus{border-color:#409cff;box-shadow:0 0 0 3px rgba(36,36,38,.87)}#usntA40Toggle.usntA40Dark i#usntA40Icon{background-color:#444446}#usntA40Toggle.usntA40Dark a#usntA40Link{color:#d8d8dc}#usntA40Toggle.usntA40bottom-right a#usntA40Link,#usntA40Toggle.usntA40top-right a#usntA40Link{padding:13px 44px 13px 0}#usntA40Toggle.usntA40bottom-right i#usntA40Icon,#usntA40Toggle.usntA40top-right i#usntA40Icon{left:auto;right:0}#usntA40Toggle.usntA40bottom-right div#usntA40Txt,#usntA40Toggle.usntA40top-right div#usntA40Txt{padding-right:0;padding-left:12px}'));
document.head.appendChild(c);b=document.createElement("div");b.setAttribute("id","usntA40Toggle");b.setAttribute("style","display:none;");b.addEventListener("touchstart",function(){}