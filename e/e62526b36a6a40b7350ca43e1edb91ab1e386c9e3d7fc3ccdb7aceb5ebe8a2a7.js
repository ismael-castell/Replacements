(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"0zAF":function(e,t,n){},"1Wo5":function(e,t,n){"use strict";n.r(t);n("0zAF"),n("rB9j"),n("UxlC"),n("R5XZ"),n("QWBl"),n("FZtP"),n("+2oP"),n("sMBO"),n("pNMO"),n("4Brf"),n("yq1k"),n("JTJg"),n("TeQF"),n("ma9I"),n("SYor");var r=null,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null===r&&l(),null!==r&&r[e]?r[e]:t},a=function(e,t){try{null===r&&l(),r[e]=t,s()}catch(e){}},l=function(){try{r=null===(r=localStorage.getItem("state"))?{}:JSON.parse(r)}catch(e){}return r},s=function(){try{localStorage.setItem("state",JSON.stringify(r))}catch(e){}};n("LKBx"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){if(dataLayer&&e.hasOwnProperty("eventName")){var t={};for(var n in e)e.hasOwnProperty(n)&&n.startsWith("event")&&("eventName"===n?t.event=e.eventName:t[n]=e[n]);dataLayer.push(t)}},u=function(e,t){"function"==typeof gtag&&(t||(t={}),gtag("event",e,t))},m=function(e){if(e.hasOwnProperty("eventSection")){var t={};for(var n in e)e.hasOwnProperty(n)&&n.startsWith("event")&&"eventSection"!==n&&(t[n]=e[n]);"function"==typeof gtag&&gtag("event",e.eventSection,t),"object"===("undefined"==typeof amplitude?"undefined":c(amplitude))&&amplitude.getInstance().logEvent(e.eventSection,t)}},v=function(e){var t=e.target.closest("a").dataset;t&&t.eventLabel&&t.eventAction&&ga("send","event",t.eventAction,t.eventLabel)},f=function(e){ga("set","page",e),ga("send","pageview")},p=function(){!function(){var e=document.getElementsByClassName("tm-event");if(e&&e.length>0)for(var t=function(t){e[t].removeEventListener("click",(function(){d(e[t].dataset)})),e[t].addEventListener("click",(function(){d(e[t].dataset)}))},n=0;n<e.length;n++)t(n)}(),function(){var e=document.getElementsByClassName("ga4-event");if(e&&e.length>0)for(var t=function(t){e[t].removeEventListener("click",(function(){m(e[t].dataset)})),e[t].addEventListener("click",(function(){m(e[t].dataset)}))},n=0;n<e.length;n++)t(n)}(),function(){if("function"==typeof ga){var e=document.getElementsByClassName("ga-event");if(e&&e.length>0)for(var t=0;t<e.length;t++)e[t].removeEventListener("click",v),e[t].addEventListener("click",v)}}()},g=document.getElementById("feed-mode-select"),y=function(e){var t=e.currentTarget;!1===t.classList.contains("active")&&(L(t),E(b(t.dataset.mode)),q(t),h(t.dataset.mode),a("feed_mode",t.dataset.mode)),U(g)},h=function(e){u("toggle_feed_mode",{feedMode:e});var t=document.getElementsByClassName("link");if(t&&t.length>0)for(var n=0;n<t.length;n++){var r=t[n].querySelector(".body");if(r)if("card"===e){t[n].querySelector(".body").classList.remove("horizontal");var o=r.querySelector(".content.thumb");o&&r.querySelector(".link-header").insertBefore(o,r.querySelector(".link-preview"))}else if(0===r.querySelectorAll(".embed").length&&r.querySelectorAll("img").length>0){t[n].querySelector(".body").classList.add("horizontal");var a=r.querySelector(".content.thumb");a&&r.querySelector(".link-header").insertBefore(a,r.querySelector(".link-header").children[0])}}},b=function(e){return S("list"===e?"card":"list")},S=function(e){var t=null,n=g.querySelectorAll(".options > ul > li");if(n&&n.length>0)for(var r=0;r<n.length;r++)n[r].dataset.mode===e&&(t=n[r]);return t},L=function(e){e.classList.add("active");var t=e.querySelector("svg > path");t&&t.setAttribute("fill",g.dataset.mainColor)},E=function(e){e.classList.remove("active");var t=e.querySelector("svg > path");t&&t.setAttribute("fill","#878a8c")},q=function(e){var t=g.querySelector(".selected");if(t){t.dataset.mode=e.dataset.mode;var n=t.querySelector("svg");n&&n.remove();var r=e.querySelector("svg").cloneNode(!0);t.insertBefore(r,t.firstChild)}},w=function(){if(g){var e=S(o("feed_mode","list"));L(e),q(e),!0===lo()&&h(e.dataset.mode);var t=g.querySelectorAll(".options > ul > li");if(t&&t.length>0)for(var n=0;n<t.length;n++)t[n].addEventListener("click",(function(e){y(e)}))}},k=(n("oVuX"),n("5s+n"),function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}),T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o,a){var i=new XMLHttpRequest,l={};if(i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(200===i.status){var e="";try{e=JSON.parse(i.responseText)}catch(t){e=i.responseText}e.status&&(e&&"success"!==e.status&&a({error:e.message}),e&&e.error&&a({error:e.error})),o(e)}else a({error:"Generic API error calling "+t})},n)if(n.length>0){var s=[];for(var c in n)n.hasOwnProperty(c)&&s.push(encodeURIComponent(c)+"="+encodeURIComponent(n[c]));t+="?"+s.join("&")}else n instanceof FormData?l=n:t+="?"+k(n);!1===t.startsWith("http")&&!1===r&&(t="https://www.meneame.net/"+t),"?"===t.slice(-1)&&(t=t.slice(0,-1)),i.open(e,t,!0),!0===r&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(l)}))},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=new XMLHttpRequest,l={};if(i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(200===i.status){var e="";try{e=JSON.parse(i.responseText)}catch(t){e=i.responseText}if(e&&e.error&&o&&o instanceof Function)return void o(e);r&&r instanceof Function&&r(e)}else o&&o instanceof Function&&o({error:"Generic API error calling "+t})},n)if(n.length>0){var s=[];for(var c in n)n.hasOwnProperty(c)&&s.push(encodeURIComponent(c)+"="+encodeURIComponent(n[c]));t+="?"+s.join("&")}else n instanceof FormData?l=n:t+="?"+k(n);!1===t.startsWith("http")&&!1===a&&(t="https://www.meneame.net/"+t),"?"===t.slice(-1)&&(t=t.slice(0,-1)),i.open(e,t,!0),!0===a&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(l)},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!0===t?'<div class="loader-dots dark"><div></div><div></div><div></div></div>':'<div class="loader-dots"><div></div><div></div><div></div></div>';e.dataset.previousState=e.innerHTML;var o=e.offsetWidth;!0===n?e.querySelector("div")?e.querySelector("div").innerHTML=e.querySelector("div").innerHTML+r:e.innerHTML=e.innerHTML+r:(e.style.width=o+"px",e.querySelector("div")?e.querySelector("div").innerHTML=r:e.innerHTML=r)},C=function(e){e.querySelector(".loader-dots")&&(e.style.width=null,e.innerHTML=e.dataset.previousState)},B=[],H=1,x=-1,M=function(e){U(e.currentTarget)},N=function(e,t){if(!1===e.classList.contains("active")){P(e);var n=t.querySelectorAll(".option");if(n)for(var r=0;r<n.length;r++)n[r].classList.remove("active");e.classList.add("active")}D(t)},_=function(e){var t=e.currentTarget,n=t.closest(".select");N(t,n)},P=function(e){var t=e.closest(".select"),n=t.querySelector(".selected");if(n){var r=e.querySelector(".option-name").innerHTML;r=r.charAt(0).toUpperCase()+r.slice(1);var o=e.querySelector(".option-image-container"),a=e.querySelector("svg"),i=e.querySelector("i");if(n.dataset.selectedValue=e.dataset.optionValue,n.querySelector("input[name="+t.getAttribute("id")+"-value]").value=e.dataset.optionValue,n.querySelector("input[name="+t.getAttribute("id")+"-text]").value=r,o){o=o.cloneNode(!0);var l=n.querySelector(".option-image");if(l)l.outerHTML=o.innerHTML;else{n.insertBefore(o,n.firstChild);var s=n.querySelector("svg");if(s)s.remove();else{var c=n.querySelector("i");c&&c.remove()}}}if(a){var d=n.querySelector("svg");if(d)d.outerHTML=a.outerHTML;else{n.insertBefore(a,n.firstChild);var u=n.querySelector(".option-image");if(u)u.remove();else{var m=n.querySelector("i");m&&m.remove()}}}if(i){var v=n.querySelector("i");if(v)v.outerHTML=i.outerHTML;else{n.insertBefore(i,n.firstChild);var f=n.querySelector(".option-image");if(f)f.remove();else{var p=n.querySelector("svg");p&&p.remove()}}}if(n.querySelector("span:not(.option-initial)").innerHTML=r,"createEvent"in document){var g=document.createEvent("HTMLEvents");g.initEvent("change",!1,!0),n.querySelector("input[name="+t.getAttribute("id")+"-value]").dispatchEvent(g)}else n.querySelector("input[name="+t.getAttribute("id")+"-value]").fireEvent("onchange")}},D=function(e){e.querySelector(".triangle").classList.remove("up"),e.querySelector(".triangle").classList.add("down"),e.querySelector(".options").classList.add("hidden"),document.getElementById("main-wrap")&&e.classList.contains("wrapped")&&(document.getElementById("main-wrap").style.opacity=0,document.getElementById("main-wrap").style.display="none",document.getElementById("main-wrap").style.zIndex=null);var t=e.closest("form");if(t){var n=t.querySelectorAll("input[autofocus], textarea[autofocus]");n&&n.length>0&&n[0].focus()}},U=function(e){var t=(e=e.classList.contains("select")?e:e.closest(".select")).querySelector(".options");t&&(!0===t.classList.contains("hidden")?function(e){e.querySelector(".triangle").classList.remove("down"),e.querySelector(".triangle").classList.add("up");var t=e.querySelector(".options");t.classList.remove("hidden");var n=t.querySelector(".select-filter > input");n&&(n.value="",n.focus()),e.dataset.url&&0===e.querySelectorAll(".option:not(.main-option)").length&&V(e),document.getElementById("main-wrap")&&e.classList.contains("wrapped")&&(document.getElementById("main-wrap").style.display="block",document.getElementById("main-wrap").style.opacity=.65,document.getElementById("main-wrap").style.zIndex=99)}(e):D(e))},j=function(e){var t=document.createElement("li");if(t.classList.add("option"),t.dataset.optionValue=e.value,t.dataset.optionName=e.name,e.image&&""!==e.image){var n=document.createElement("div");if(n.classList.add("option-image-container"),"null"!==e.image&&"undefined"!==e.image){var r=document.createElement("img");r.setAttribute("src",e.image),r.setAttribute("loading","lazy"),r.classList.add("option-image"),n.appendChild(r)}else{var o=document.createElement("div");o.classList.add("initial"),o.classList.add("option-image");var a=document.createElement("span");a.classList.add("option-initial"),a.innerText=e.name.charAt(0),o.appendChild(a),n.appendChild(o)}t.appendChild(n)}e.svg&&""!==e.svg&&t.appendChild(e.svg),e.icon&&""!==e.icon&&t.appendChild(e.icon);var i=document.createElement("div");i.classList.add("option-info");var l=document.createElement("div");if(l.classList.add("option-name"),l.innerText=e.name,i.appendChild(l),e.description&&""!==e.description){var s=document.createElement("div");s.classList.add("option-description"),s.innerText=e.description,i.appendChild(s)}if(t.appendChild(i),e.action&&""!==e.action){var c=document.createElement("a");c.setAttribute("href",e.action),c.innerHTML=t.innerHTML,t.innerHTML=null,t.appendChild(c)}return t},O=function(e,t){var n=document.createElement("div");if(n.classList.add("select-section"),t&&""!==t){var r=document.createElement("div");r.classList.add("select-section-title"),r.innerText=t,n.appendChild(r)}var o,a=document.createElement("ul");if(e.length>0)for(var i=0;i<e.length;i++)a.appendChild(j(e[i]));else a.appendChild(((o=document.createElement("li")).classList.add("option-no-results"),o.innerHTML="No hay resultados",o));return n.appendChild(a),n},R=function(e){var t=e.querySelectorAll(".select-section:not(.main-option-section)");if(t&&t.length>0)for(var n=0;n<t.length;n++)t[n].remove()},z=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},l=n&&!r;clearTimeout(r),r=setTimeout(i,t),l&&e.apply(o,a)}},W=function(e){var t=e.querySelectorAll(".option"),n=[];if(t&&t.length>0)for(var r=0;r<t.length;r++){var o=t[r].dataset.optionValue,a=t[r].dataset.optionName,i=t[r].querySelector(".option-description")?t[r].querySelector(".option-description").innerHTML:null,l=t[r].querySelector(".option-image")?t[r].querySelector(".option-image").getAttribute("src"):null,s=t[r].querySelector("a")?t[r].querySelector("a").getAttribute("href"):null,c=t[r].querySelector("svg")?t[r].querySelector("svg"):null,d=t[r].querySelector("i")?t[r].querySelector("i"):null;!1===F(n,o)&&n.push({value:o,name:a,description:i,image:l,action:s,svg:c,icon:d})}return n},F=function(e,t){for(var n=!1,r=0;r<e.length;r++)if(e[r].value===t){n=!0;break}return n},V=function(e,t){t=t||H;var n=e.dataset.url;n.includes("{page}")&&(n=n.replace("{page}",t)),$(e),I("get",n,[],(function(t){var n=[],r=[];if(t.data)for(var o=t.data.subs,a=0;a<o.length;a++){var i="";void 0!==e.dataset.imagesUrl&&(i=e.dataset.imagesUrl),i+=o[a].logo_url,e.dataset.filter&&!0===o[a][e.dataset.filter]?r.push({value:o[a].id,name:o[a].name,description:o[a].followers+" seguidores",image:i}):n.push({value:o[a].id,name:o[a].name,description:o[a].followers+" seguidores",image:i})}var l=e.querySelector(".options");R(e),r.length>0&&l.appendChild(O(r,e.dataset.filteredSection?e.dataset.filteredSection:"Resultados filtrados")),l.appendChild(O(n,e.dataset.mainSection?e.dataset.mainSection:"Resultados")),Y(e),G(e),ee(e)}),(function(){ee(e)}),!0)},X=function(e){var t=e.querySelectorAll(".option");if(t.length>0&&x<t.length&&x>=-1)for(var n=0;n<t.length;n++)n===x?(t[n].classList.add("focused"),e.querySelector(".options").scrollTop=48*x):t[n].classList.remove("focused")},J=function(e){var t=e.value.toLowerCase(),n=e.closest(".select"),r=[];if(t&&""!==t){var o=[],a=Q(n);if(a)for(var i=0;i<a.sections.length;i++)o=o.concat(a.sections[i].options);for(var l=0;l<o.length;l++)(o[l].name.toLowerCase().includes(t)||o[l].value.toLowerCase().includes(t))&&r.push(o[l]);if(0===r.length)n.dataset.searchUrl&&function(e,t){var n=t.dataset.searchUrl+e;$(t),I("get",n,[],(function(e){var n=[];if(e.data){var r=e.data.subs,o="";void 0!==t.dataset.imagesUrl&&(o=t.dataset.imagesUrl);for(var a=0;a<r.length;a++)r[a].logo_url&&(o=r[a].logo_url).replace("cache/","img/cache/"),n.push({value:r[a].id,name:r[a].name,description:r[a].followers+" seguidores",image:o})}var i=t.querySelector(".options");R(t),i.appendChild(O(n,"resultados")),Y(t),ee(t)}),null,!0)}(t,n);else{var s=n.querySelector(".options");R(n),s.appendChild(O(r,"resultados")),Y(n)}}else{var c=Q(n),d=n.querySelector(".options");R(n);for(var u=0;u<c.sections.length;u++)"main"!==c.sections[u].name&&d.appendChild(O(c.sections[u].options,c.sections[u].name));Y(n)}},Y=function(e){var t=e.querySelectorAll(".option");if(t&&t.length>0)for(var n=0;n<t.length;n++)t[n].removeEventListener("click",_),t[n].addEventListener("click",_)},G=function(e){var t=K(e);if(Z(e))for(var n=0;n<B.length;n++)e.getAttribute("id")===B[n].id&&(B[n]=t);else B.push(t)},K=function(e){var t={id:e.getAttribute("id"),sections:[]};if(e.querySelector(".options")){var n=e.querySelector(".options").querySelectorAll(".select-section");if(n&&n.length>0)for(var r=0;r<n.length;r++){var o=n[r].querySelector(".select-section-title")?n[r].querySelector(".select-section-title").innerHTML.trim():n[r].classList.contains("main-option-section")?"main":null;t.sections.push({name:o,options:W(n[r])})}}return t},Q=function(e){for(var t=0;t<B.length;t++)if(e.getAttribute("id")===B[t].id)return B[t];return!1},Z=function(e){return!1!==Q(e)},$=function(e){var t=e.querySelector(".loader-container");t&&t.classList.remove("hidden")},ee=function(e){var t=e.querySelector(".loader-container");t&&t.classList.add("hidden")},te=document.getElementById("main-burger-button");te&&te.addEventListener("click",(function(){document.getElementById("hamburger-menu").style.width&&"0px"!==document.getElementById("hamburger-menu").style.width?document.getElementById("hamburger-menu").style.width="0px":(document.getElementById("hamburger-menu").style.width="350px",document.getElementById("mobile-search")&&!1===lo()&&document.getElementById("mobile-search").focus())}));var ne=document.getElementById("hamburger-close-button");ne&&ne.addEventListener("click",(function(){u("main-burger_menu"),document.getElementById("hamburger-menu").style.width="0px"}));n("4l63"),n("fbCW"),n("rNhl");var re=[],oe=function(e){ae(e.currentTarget.closest(".flash-message"))},ae=function(e){e&&(e.style.opacity=0,setTimeout((function(){e.remove()}),500))},ie=function(e){var t=re.find((function(t){return t.id===parseInt(e.dataset.id)}));null===t.timer&&!1===t.shown&&(t.timer=setInterval((function(){t.time>=6&&(ae(e),clearInterval(t.timer)),e.querySelector(".flash-message-indicator").style.width=100-parseFloat(100*t.time/6)+"%",t.time=t.time+.1}),100),e.style.display="block",e.style.opacity=1)},le=function(e){var t=document.createElement("div");t.classList.add("flash-message"),t.classList.add(e.type);var n=document.createElement("div");n.classList.add("flash-message-indicator");var r=document.createElement("div");r.classList.add("flash-message-container");var o=document.createElement("div");o.classList.add("flash-message-content");var a=document.createElement("div");a.classList.add("flash-message-title"),a.innerHTML=e.title,o.append(a);var i=document.createElement("p");i.innerHTML=e.text,o.append(i);var l=document.createElement("div");l.classList.add("flash-message-close");var s=document.createElement("i");return s.classList.add("fas"),s.classList.add("fa-times"),l.append(s),r.append(o),r.append(l),t.append(n),t.append(r),t.dataset.id=e.id,t},se=function(){var e=document.getElementsByClassName("flash-message-close");if(e&&e.length>0)for(var t=0;t<e.length;t++)e[t].addEventListener("click",oe)},ce=function(e,t,n){re.push({id:re.length,type:e,title:t,text:n,time:0,timer:null,shown:!1}),function(){var e=document.getElementById("flash-messenger");if(re.length>0)for(var t=0;t<re.length;t++)!1===re[t].shown&&e.append(le(re[t]));var n=document.getElementsByClassName("flash-message");if(n&&n.length>0)for(var r=0;r<n.length;r++)ie(n[r]);se()}()},de=function(){!function(){var e=document.getElementsByClassName("flash-message");if(e&&e.length>0)for(var t=0;t<e.length;t++){var n=e[t].dataset;document.getElementById("flash-messenger").removeChild(e[t]),ce(n.type,n.title,n.text)}}()},ue=(n("toAj"),null),me=function(e,t){var n=e.innerHTML;e.innerHTML=null;var r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-undo");var o=document.createElement("div");o.innerText="deshacer",e.classList.add("undo-vote"),e.appendChild(r),e.appendChild(o),function(){var e=document.getElementsByClassName("undo-vote");if(e&&e.length>0)for(var t=0;t<e.length;t++){var n=e[t];n.removeEventListener("click",ve),n.addEventListener("click",fe)}}();var a=e.closest(".link").querySelector(".button-item-options.open-modal");a&&a.classList.add("disabled"),setTimeout((function(){e.innerHTML!==ue&&(e.innerHTML=n,e.classList.remove("undo-vote"),pe(e,t))}),7e3)},ve=function(e){e.currentTarget.closest(".link");var t=e.currentTarget;ue=t.innerHTML,ye(t);var n="backend/menealo",r=!1,o=t.dataset,a="GET";0!==parseInt(t.dataset.user)&&(n="/story/"+t.dataset.id+"/vote",r=!0,o=[],a="POST"),I(a,n,o,(function(e){e.status&&"error"===e.status||e.data&&e.data.error?ge(t,e):me(t,e)}),(function(e){ge(t,e)}),r)},fe=function e(t){t.currentTarget.closest(".link");var n=t.currentTarget;ye(n);var r="backend/menealo_undo",o=!1,a=n.dataset,i="GET";0!==parseInt(n.dataset.user)&&(r="/story/"+n.dataset.id+"/vote",o=!0,a=[],i="PUT"),I(i,r,a,(function(t){n.innerHTML=ue;var r=n.closest(".link").querySelector(".button-item-options.open-modal");r&&r.classList.remove("disabled"),n.addEventListener("click",ve),n.removeEventListener("click",e)}),(function(e){ge(n,e)}),o)},pe=function(e,t){var n,r,o=t.data?t.data:t,a=(n=parseInt(o.votes)+parseInt(o.anonymous))>999?parseFloat(n/1e3).toFixed(1)+"k":n;e.outerHTML&&(r=o.value<0?'<div class="votes negative"><span>negativo '+a+"</span></div>":'<div class="votes"><span>meneado '+a+"</span></div>",e.outerHTML=r)},ge=function(e,t){var n="Error meneando";t.status&&"error"===t.status&&(n=t.message),t.status&&"success"===t.status&&t.data&&t.data.error&&(n=t.data.error),t.error&&(n=t.error),ce("error","error",n),e.innerHTML=ue},ye=function(e){var t='<div class="button-loading"><div></div><div></div><div></div></div>';e.style.width=e.offsetWidth+"px",e.querySelector("div")?e.querySelector("div").innerHTML=t:e.innerHTML=t},he=function(e){if(!(e.target.closest("a.disabled")||e.target.classList.contains("disabled"))){var t=e.currentTarget.querySelector(".button-options");t&&(t.classList.contains("hidden")?function(e){var t=e.querySelector(".button-options");if(t){var n=document.querySelectorAll(".with-options");if(n&&n.length>0)for(var r=0;r<n.length;r++){var o=n[r].querySelector(".button-options");o&&o.classList.add("hidden")}t.classList.contains("hidden")&&t.classList.remove("hidden")}}(e.currentTarget):function(e){if(e.querySelector(".button-options")){var t=document.querySelectorAll(".with-options");if(t&&t.length>0)for(var n=0;n<t.length;n++){var r=t[n].querySelector(".button-options");r&&r.classList.add("hidden")}}}(e.currentTarget))}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e?e.querySelectorAll(".button.with-options"):document.querySelectorAll(".button.with-options");if(t&&t.length>0)for(var n=0;n<t.length;n++){t[n].removeEventListener("click",he),t[n].addEventListener("click",he);var r=t[n].querySelectorAll(".button-item-options"),o=t[n].querySelector(".close-options");if(o&&(o.removeEventListener("click",he),o.addEventListener("click",he)),r&&r.length>0)for(var a=0;a<r.length;a++)r[a].removeEventListener("click",he),r[a].addEventListener("click",he)}},Se=function(){!function(){var e=document.getElementsByClassName("button-vote");if(e&&e.length>0)for(var t=0;t<e.length;t++)!1===e[t].classList.contains("voted")&&e[t].addEventListener("click",ve)}(),be()},Le=function(e,t,n){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t&&ce("success","Copiado",t)}),(function(){n&&ce("error","Error",n)})):function(e,t,n){var r=document.createElement("textarea");r.value=e,r.style.top="0",r.style.left="0",r.style.position="fixed",document.body.appendChild(r),r.focus(),r.select();try{document.execCommand("copy"),ce("success","<i class='fas fa-copy'></i> Copiado",t||"Tienes el contenido en el cortapapeles.")}catch(e){ce("error","Error",n||"Ha habido un error copiando el contenido en el cortapapeles.")}document.body.removeChild(r)}(e,t,n)},Ee=function(){var e=document.getElementsByClassName("copy-to-clipboard");if(e&&e.length>0)for(var t=0;t<e.length;t++)e[t].addEventListener("click",(function(){}