var targetHostname="https://group.accor.com",restURI="https://platform-eu.cloud.coveo.com/rest/search",targetPage="/"+getLanguagePopin()+"/Search/Search-Coveo",targetURI=getHostnamePopin()+targetPage,tokenPage="/coveo/rest/token",tokenURI=getHostnamePopin()+tokenPage,accessToken="",searchBoxRoot,timerFocus;function getHostnamePopin(){return window.location.hostname.includes("press")?targetHostname:""}function(){}