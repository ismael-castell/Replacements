var xml_request=false;function makeXMLRequest(url,parameters){xml_request=false;if(window.XMLHttpRequest){xml_request=new XMLHttpRequest();if(xml_request.overrideMimeType){xml_request.overrideMimeType('text/plain');}}else if(window.ActiveXObject){try{xml_request=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{xml_request=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}}
if(!xml_request){alert('Cannot create XMLHTTP instance');return false;}
xml_request.onreadystatechange=xml_handler;xml_request.open('GET',url+parameters);xml_request.send(null);}
function xml_handler(){if(xml_request.readyState!=4){return false;}
if(xml_request.status!=200){completed_user_lookup=true;return false;}
var text=xml_request.responseText;if(!text)return false;var lines=text.split("\n");if(!lines)return false;for(var i=0;i<lines.length;i++){if(!lines[i].match(/^<(field|group) ([^>]+)>(.+)/))continue;var type=RegExp.$1;var type_selector=RegExp.$2;var value=RegExp.$3;if(type=='field'){fields[type_selector]=value;}
else if(typeof(groups)=='object'){groups[type_selector]=value;}}
completed_user_lookup=true;is_logged();}
function try_ajax(){this.attempt++;if(this.attempt>this.max_attempt){clearInterval(this.tid);if(typeof(this.no_user_detected_f)=='function')this.no_user_detected_f();}
if(completed_user_lookup){clearInterval(this.tid);if(fields.email){if(typeof(this.user_detected_f)=='function')this.user_detected_f();}
else{if(typeof(this.no_user_detected_f)=='function')this.no_user_detected_f();}}}
function wait(){var myself=this;function callMethod(){myself.try_ajax();}
this.tid=setInterval(callMethod,500);}
function Ajax(user_detected_f,no_user_detected_f){if(logged_out){if(typeof(no_user_detected_f)=='function')no_user_detected_f();return false;}
if((typeof(fields)=='object')&&fields['id']){if(typeof(user_detected_f)=='function')user_detected_f();return false;}
this.user_detected_f=user_detected_f;this.no_user_detected_f=no_user_detected_f;this.tid;this.attempt=0;this.max_attempt=20;this.try_ajax=try_ajax;this.wait=wait;this.wait();}
function addToFavorites(title,url){if(window.sidebar){window.sidebar.addPanel(title,url,"");}
else if(window.opera&&window.print){var elem=document.createElement('a');elem.setAttribute('href',url);elem.setAttribute('title',title);elem.setAttribute('rel','sidebar');elem.click();}
else if(document.all){window.external.AddFavorite(url,title);}}
var pose_box_names=new Array('anatomical','therapeutic','benefits','contraindications','beginners_tip','variations','modifications_and_props','partnering','preparatory_poses','follow_up_poses','deepen_the_pose','did_you_know');var pose_boxes=new Array();for(var i=0;i<pose_box_names.length;i++){var element=document.getElementById(pose_box_names[i]);if(!element){continue;}
pose_boxes[pose_box_names[i]]=0;}
function expand_all(){for(var i=0;i<pose_box_names.length;i++){var element=document.getElementById(pose_box_names[i]);if(!element){continue;}
pose_boxes[pose_box_names[i]]=1;element.style.display='block';document.getElementById('hide_all').style.display='block';document.getElementById('show_all').style.display='none';document.getElementById(pose_box_names[i]+'_hide').style.display='block';document.getElementById(pose_box_names[i]+'_show').style.display='none';}}
function collapse_all(){for(var i=0;i<pose_box_names.length;i++){var element=document.getElementById(pose_box_names[i]);if(!element){continue;}
pose_boxes[pose_box_names[i]]=0;element.style.display='none';document.getElementById('hide_all').style.display='none';document.getElementById('show_all').style.display='block';document.getElementById(pose_box_names[i]+'_hide').style.display='none';document.getElementById(pose_box_names[i]+'_show').style.display='block';}}
function collapse(element_id){document.getElementById(element_id).style.display='none';pose_boxes[element_id]=0;document.getElementById(element_id+'_show').style.display='block';document.getElementById(element_id+'_hide').style.display='none';var all=1;for(var i=0;i<pose_box_names.length;i++){var element=document.getElementById(pose_box_names[i]);if(!element){continue;}
if(pose_boxes[pose_box_names[i]]==1){all=0;break;}}
if(!all){document.getElementById('hide_all').style.display='none';document.getElementById('show_all').style.display='block';}}
function expand(element_id){document.getElementById(element_id).style.display='block';pose_boxes[element_id]=1;document.getElementById(element_id+'_show').style.display='none';document.getElementById(element_id+'_hide').style.display='block';}
var default_text_values=new Array();function restore(obj){if((obj.value=='')&&(default_text_values[obj.name])){obj.value=default_text_values[obj.name];obj.className='text_input_default';if(obj.type=='password'){obj.type='text';}}}
function erase(obj){if(!default_text_values[obj.name]){default_text_values[obj.name]=obj.value;}
if(obj.value==default_text_values[obj.name]){obj.value='';obj.className='text_input_changed';if(default_text_values[obj.name]=='Password'){obj.type='password';}}}
function flip(id){if(document.getElementById(id).style.display=='block'){document.getElementById(id).style.display='none';}else{document.getElementById(id).style.display='block';}}
var formSubmitted=false;var host=window.location.host;var ccLink='<a href="https://'+host+'/ITPS2.cgi">'
function checkSubmit(){if(formSubmitted){alert('Please be patient. Your order may take 10 - 15 seconds to process. Thank you!');return false;}
else{formSubmitted=true;return true;}}
function submitBM(f){now=new Date();var str=now.getFullYear()+"";var year=eval(str.substring(str.length-1,str.length));var kcv=f.NewKey.value;monthly_codes=new Array("A","B","C","D","E","F","G","H","J","K","L","M");f.KeyCode.value=year+monthly_codes[now.getMonth()]+kcv;f.onsubmit();f.submit();}
function submitCC(f,newkey){if(newkey){f.NewKey.value=newkey;f.BonusKey.value=newkey;}
f.iResponse.value="YOGA.BONUS";f.OrderType.value="Reply Only";submitBM(f);}
function doOnload(){country2Select('shipping_countryid','shipping_stateid','ship_us_row','ship_nonus_row');country2Select('billing_countryid','billing_stateid','bill_us_row','bill_nonus_row');}
function country2Select(country_id,state_id,us_id,nonus_id){var blocktype=(checkIE())?'block':'table-row';cntry=document.getElementById(country_id);state=document.getElementById(state_id);usrow=document.getElementById(us_id);nonusrow=document.getElementById(nonus_id);if(cntry.options[cntry.selectedIndex].value=='840'||cntry.selectedIndex==0){nonusrow.style.display='none';usrow.style.display=blocktype;}else{usrow.style.display='none';nonusrow.style.display=blocktype;state.selectedIndex=0;}}
var BrowserDetect={init:function(){}