function SetChecked(formName,chkName){var dml=document.forms[formName];
var len=dml.elements.length;
var i=0;
for(i=1;
i<len;
i++){if(dml.elements[i].name==chkName){dml.elements[i].checked=dml.master.checked
}}}function popUpWindow(url,height,width,left,top){window.open(url,"FPU","resizable=yes, copyhistory=no, scrollbars=yes, menubar=no, height="+height+", width="+width+", left="+left+", top="+top+", toolbar=no, location=no, status=no");
return false
}function rePopulate(c,form_id,append_flag){if(form_id=="apn"){opener.document.getElementById(form_id).value=c+"/"
}else{if(append_flag=="append"){opener.document.results.query_txt.focus();
var val=opener.document.results.query_txt.value;
c=c.replace(/ /,"");
opener.document.results.query_txt.value=(val+c)
}else{opener.document.getElementById(form_id).value=c
}}window.close();
if(append_flag=="append"){opener.document.results.query_txt.focus()
}else{opener.document.getElementById(form_id).focus()
}}function toggleMenuSection(unique){toggleDiv("div_"+unique,unique+"_div");
var thisImage=document.getElementById("img_"+unique);
if(document.getElementById("div_"+unique).offsetHeight>0){thisImage.src="/images/menu_tree_open.gif"
}else{thisImage.src="/images/menu_tree_closed.gif"
}}function enable_combo(checkboxName,comboboxName){document.getElementById(comboboxName).disabled=document.getElementById(checkboxName).checked!=true
}function openpopup(popurl){window.open(popurl,"","top=50,left=150,width=570,height=600,scrollbars=yes,resizable=yes")
}function toggleDiv(divName,hiddenBoxName){var thisDiv=document.getElementById(divName);
var i;
if(thisDiv){if(thisDiv.style.display=="none"){thisDiv.style.display="block";
for(i=1;
i<4;
i++){document.getElementById(hiddenBoxName+i).value=true
}}else{thisDiv.style.display="none";
for(i=1;
i<4;
i++){document.getElementById(hiddenBoxName+i).value=false
}}}}function CreateBookmarkLink(hostName){var urlAddress="https://"+hostName;
var pageName="FreePatentsOnline.com";
if(window.sidebar){window.sidebar.addPanel(pageName,urlAddress,0)
}else{if(window.external){window.external.AddFavorite(urlAddress,pageName)
}else{if(window.opera&&window.print){var mbm=document.createElement("a");
mbm.setAttribute("rel","sidebar");
mbm.setAttribute("href",url);
mbm.setAttribute("title",title);
mbm.click()
}else{return true
}}}}function ietruebody(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body
}function ddrivetip(thetext,thecolor,thewidth){document.onmousemove=positiontip;
var ns6=document.getElementById&&!document.all;
if(ns6||ie){if(typeof thewidth!="undefined"){tipobj.style.width=thewidth+"px"
}if(typeof thecolor!="undefined"&&thecolor!=""){tipobj.style.backgroundColor=thecolor
}tipobj.innerHTML=thetext;
enabletip=true;
return false
}}function positiontip(e){var BrowserDetect={init:function(){}