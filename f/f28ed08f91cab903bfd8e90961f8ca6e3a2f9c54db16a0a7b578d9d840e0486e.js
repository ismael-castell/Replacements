
(function($)
{var $formAddRel,$divModal,isViadeo=false;$.copains={core:{init:function()
{$.profile&&console.time('$.copains.core.init');$.note.defaultOptions.delay=1500;isViadeo=($data.app_name=='viadeo');$(document).on('click','a.jSendvalidationmail',$.copains.core.sendValidationMail).on('click','a.jDeleteImageProfile',$.copains.core.deleteImageProfile).on('click','a.jDeleteImageCover',$.copains.core.deleteImageCover).on('click','a.jSendSMS',$.copains.core.sendSMS).on('click','a.jAddRelation',$.copains.core.addRelation).on('click','a.jEditRelation',$.copains.core.editRelation).on('click','a.jRemoveRelation',$.copains.core.removeRelation).on('click','a.jAddEmailToMyRelations',$.copains.core.addEmailToMyRelations).on('click','form#jFormAddRel input.jValidateEditRelation',$.copains.core.validateEditRelation).on('click','form#jFormAddRel input.jTypelien',$.copains.core.selectRencontreOuFamille).on('click','a.jShowCommonRelations',$.copains.core.showCommonRelations).on('click','div#jDivModal a.jCloseDialog','click',function(){$.copains.core.closeDialog();}).on('eventFromUrl-highlight',function(event,tar,val)
{$('#'+val).addClass('ccmcss_highlight');}).tinyProfile($.tinyConfigs.usersOptions);if(typeof $data.common.jdnr=='undefined')
{$(document).tinyProfile($.tinyConfigs.etabsOptions);}
if(window.location.pathname=='/')
{var $inputTxtMail=$('input#txtMail');if($inputTxtMail.length==1)
{$inputTxtMail.focus();}}
$('.dropdownbtnheader').dropDownBtn({anim_duration:$.core.defaultStartOptions.animDuration,ddselector:$('.dropdownlistheader')});if(window.location.pathname=='/p/login/'||window.location.pathname=='/p/login')
{var $inputTxtMail=$('input#txtMail'),$inputPwdPassAuth=$('input#pwdPassAuth');if($inputTxtMail.length==2&&$inputPwdPassAuth.length==2)
{var $inputTxtMailBis=$($inputTxtMail[1]);if($inputTxtMailBis.val()==='')
{$inputTxtMailBis.focus();}
else
{$($inputPwdPassAuth[1]).focus();}}}
$('.jNotification').on('click','a.jBtnIgnoreNotification',$.copains.core.jBtnIgnoreNotification);$.profile&&console.timeEnd('$.copains.core.init');},sendSMS:function()
{$.ajax({type:'POST',url:'/authentication/_xhr_sendSMS/',data:{xhr:'xhr'},complete:function(json)
{window.location.reload();}});},privacyCheckBox:function()
{var $checkBox=$(this),nbCheckbox=0,$form=$(this).closest('form'),$privacySum=$form.find("#privacy_sum"),totalPrivacy=$privacySum.attr("value"),checkboxValue=$checkBox.attr('value');if(checkboxValue==31||checkboxValue==0)
{if($checkBox.prop('checked')==true)
{$form.find("input[type='checkbox']").each(function()
{$(this).prop("checked",false);});$checkBox.prop('checked',true);totalPrivacy=checkboxValue;nbCheckbox++;}}else{totalPrivacy=0;$form.find("input[type='checkbox']").each(function()
{if($(this).attr("value")==31||$(this).attr("value")==0)
{$(this).prop("checked",false);}
else if($(this).prop("checked"))
{totalPrivacy+=parseInt($(this).attr("value"),10);nbCheckbox++;}});}
if(nbCheckbox==0)
{totalPrivacy=0;$form.find('#privacy0').prop('checked',true);}
$privacySum.attr("value",totalPrivacy);},initDivModal:function()
{$divModal=$('div#jDivModal');if($divModal.length==0)
{$divModal=$('<div id="jDivModal" class="modalS_content"></div>');$('div.body').append($divModal);}
return $divModal;},sendValidationMail:function()
{$.profile&&console.time('$.copains.core => sendValidationMail');$.ajax({type:'POST',url:'/p/_xhr_send_validation_mail/',dataType:'json',data:{xhr:'xhr'},complete:function(){$('#mailsendzone').hide();$('#mailsendedzone').show();}});$.profile&&console.timeEnd('$.copains.core => sendValidationMail');},orderRelationsList:function(listRelations)
{$.profile&&console.time('$.copains.core => orderRelationsList');function sortName(a,b)
{if(a.nam<b.nam){return-1;}
if(a.nam>b.nam){return 1;}
return 0;}
var tmpList=[],key=0,max=listRelations.length;for(key;key<max;++key)
{if(typeof $data.copains.users[listRelations[key]]!="undefined")
{tmpList.push({'nam':$data.copains.users[listRelations[key]].nam,'dat':$data.copains.users[listRelations[key]],'id':listRelations[key]});}}
$.profile&&console.timeEnd('$.copains.core => orderRelationsList');return tmpList.sort(sortName);},showCommonRelations:function(e)
{$.profile&&console.time('$.copains.core => showCommonRelations');var listRelations=$(this).attr('data-ids').split(','),idUser=$(this).attr('data-id-user');$.ajax({type:'POST',url:'/p/_xhr_list_commun_relations/',localCache:true,localCacheTimeout:5*60*1000,storageName:'showCommonRelations'+$data.copains.user.uid,dataType:'json',data:{idUser:idUser,xhr:'xhr',listRelations:listRelations},complete:function()
{var data={},dataUser;data.title=$.copains.core.getTemplate('$l{RELATION_COMMUNE_TITLE} <b>${lib}</b>',$data.copains.users[idUser]);data.html='<h2>'+$.copains.core.getTemplate('$l{RELATION_COMMUNE_TITLE} <b>${lib}</b>',$data.copains.users[idUser])+'</h2>';data.html+='<div id="dialog_loading" style="height: 300px;overflow: auto">';data.html+='<ul class="app_list--comon_contact grid_line gutter">';listRelations=$.copains.core.orderRelationsList(listRelations);for(var key=0;key<listRelations.length;key++){dataUser=listRelations[key].dat;if(typeof dataUser=='undefined'){continue;}
data.html+=$.copains.core.getTemplate('<li class="grid_left w50">'
+'<div class="grid_line gutter grid--norwd">'
+'<div class="grid_left">'
+'<a href="${url}">'
+'<figure style="background-image: url(${img})"></figure>'
+'</a>'
+'</div>'
+'<div class="grid_last">'
+'<a href="${url}" class="jTinyProfileUser notip" data-tid="${id}">'
+'${lib}'
+'</a>'
+'</div>'
+'</div>'
+'</li>',$.extend({},{id:listRelations[key].id,lib:dataUser.lib,url:dataUser.url,img:dataUser.img}));}
data.html+='</ul></div>';$.copains.core.showInDialogBox(data);}});$.profile&&console.timeEnd('$.copains.core => showCommonRelations');},deleteImageProfile:function(e)
{$.profile&&console.time('$.copains.core => deleteImageProfile');$divModal=$.copains.core.initDivModal();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].PROFILE_TITLE_CONFIRM_DELETE,$.copains.core.getTemplate('$l{PROFILE_CONFIRM_DELETE}'),function(){$.ajax({type:'POST',url:'/album/_xhr_delete_mainphotoprofile',dataType:'json',data:{xhr:'xhr'},success:function(json){if(json.msg)
{$.note.info(json.msg);}
(json.img)&&($('img.photoUserMedium, img.photoUserLarge').attr('src',json.img))&&($('.photoUserLarge, .photoUserThumb_xs').attr('style','background-image: url('+json.img+')'));}});$.copains.core.closeDialog();});$.profile&&console.timeEnd('$.copains.core => deleteImageProfile');},deleteImageCover:function(e)
{$.profile&&console.time('$.copains.core => deleteImageCover');var id_photo=$(this).attr('data-id'),cle_photo=$(this).attr('data-cle');$divModal=$.copains.core.initDivModal();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].PROFILE_HEADER_TITLE,$.copains.core.getTemplate('$l{PROFILE_HEADER_CONFIRM_DELETE}'),function(){$.ajax({type:'POST',url:'/album/_xhr_delete_photoheader',dataType:'json',data:{xhr:'xhr',photo_id:id_photo,photo_cle:cle_photo},success:function(json){if(json.msg)
{$.note.info(json.msg);}
(json.img)&&($('.copains_box_people').attr('style','background-image: url('+json.img+')'));}});$.copains.core.closeDialog();});$.profile&&console.timeEnd('$.copains.core => deleteImageCover');},addEmailToMyRelations:function(e)
{$.profile&&console.time('$.copains.core => addEmailToMyRelations');var email=$(this).attr('data-email');$.ajax({type:'POST',url:'/p/_xhr_addInvitationFromEmail/',dataType:'json',data:{email:email,xhr:'xhr'},complete:function(a,b,data)
{if(data.success==true)
{$.googleEvents.send('copainsdavant','invitation_from_email','send',undefined,true);var $target=$('div#proposition'+email.replace(new RegExp('[\+@.-]','gi'),""));$target.css({fontStyle:'italic',opacity:0.4,color:'#778793'}).prepend($('<div class="actionDone"></div>').css({height:$target.height(),width:$target.width(),position:'absolute'})).find('a.jAddEmailToMyRelations').hide();}}});$.profile&&console.timeEnd('$.copains.core => addEmailToMyRelations');},removeRelation:function()
{$.profile&&console.time('$.copains.core => removeRelation');var $self=$(this),idUser=$self.attr('data-id'),$line=$self.closest('.jRelationList');$.copains.core.showInVerificationBox($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].RELATION_DELETE_TITLE,{libs:$data.copains.users[idUser].lib}),'<h2>'+$.copains.core.langs[$.copains.core.lang].RELATION_DELETE_TITLE+'</h2>'
+'<div class="ccmcms__modal--content">'+$.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].RELATION_DELETE,{libs:$data.copains.users[idUser].lib})+'</div>',function(){$.copains.core.closeDialog();$line.hide('slow');$.note.info($.copains.core.langs[$.copains.core.lang].RELATION_DELETE_NOTE);$.ajax({type:'POST',url:'/p/_xhr_deleteRelation/',dataType:'json',data:{idUser:idUser,xhr:'xhr',typeR:$line.attr('data-type')},success:function(response){}});},function(){$.copains.core.closeDialog();});$.profile&&console.timeEnd('$.copains.core => removeRelation');},addRelation:function(e){var data={},$this=$(this),idUser=$this.attr('data-id'),addSubmit=false,token=$this.attr('data-token');data.title='';data.html=$.copains.core.getTemplate('<h2>'+$.copains.core.langs[$.copains.core.lang].ADD_TO_MY_CONTACT+'</h2>'
+'<div class="form_info"><em>Afin de vous protéger de sollicitations indésirables, les liens, numéros de téléphone ou adresses mail sont interdits.</em></div>'
+'<span class="ccmcss_form form_whatsup">'
+'<form method="POST" id="formAddRelation" data-user-id="${userId}"><fieldset>'
+'<label id="divMsg" class="ccmcss_form__line jFormLine">'
+'<div class="grid_left">'
+'$l{MESSAGE_TEXTAREA}'
+'</div>'
+'<div class="grid_last">'
+'<textarea class="comments-text jCommentsText" id="description" name="description">$l{MESSAGE_INCITATION}</textarea>'
+'<div class="msg" id="divErrorMsg"></div>'
+'</div>'
+'</label>'
+'</fieldset>'
+'<footer class="ccmcss_form__line--no_col">'
+'<input type="button" class="linter_btn_2 jValidateAddRelation" name="validate" value="$l{RELATION_ADD_TITLE}">'
+'<input type="hidden" name="token" id="token" value="${token}">'
+'<a class="linter_btn_1 jCloseDialog" href="javascript:void(0);">$l{CANCEL}</a>'
+'</footer>'
+'</form>'
+'</div>',$.extend({},$data.copains.users[idUser],{userId:idUser,token:token,libs:$data.copains.users[idUser].lib}));$.copains.core.showInDialogBox(data);$.profile&&console.timeEnd('$.copains.core => addRelation');$('form#formAddRelation').on('click','input.jValidateAddRelation',function()
{$.profile&&console.time('$.copains.core => validateAddRelation');if(addSubmit==true)
{return;}
addSubmit=true;var $form=$('form#formAddRelation'),idUser=$form.attr('data-user-id');$.ajax({type:'POST',url:'/p/_xhr_addDirectRelation/',dataType:'json',data:{idUser:idUser,message:$form.find('#description').val(),xhr:'xhr',token:$form.find('#token').val()},complete:function(a,b,data)
{if(b==='success')
{$.note.info(data.note);if($this.closest('ul#jTopSuggest').length)
{var $topSuggest=$('div#jListPropositions li[data-id-user="'+idUser+'"]'),hrefType=$topSuggest.find('a.jAddRelation').attr('data-link-type'),idsExclude=$('ul#jTopSuggest li').map(function()
{return $(this).attr('data-id-user');}).get();if(typeof hrefType!='undefined'&&hrefType=='proposition'&&$topSuggest!=null)
{$.ajax({type:'POST',url:'/p/_xhr_nextSuggest/',dataType:'json',data:{idsExclude:idsExclude,xhr:'xhr',idOwner:$topSuggest.attr('data-id-owner')},success:function(response)
{if(response==null)
{$topSuggest.remove();}else{$topSuggest.replaceWith(response.html);}}});}}
else
{$this.closest('[data-id-user]').find('a.jIgnore').remove();if(typeof $data.common.jdnr=='undefined')
{$this.replaceWith($.copains.core.getTemplate('<b>$l{RELATION_SEND_NOTE}</b>'
+' (<a href="javascript:void(0);" data-id="${idUser}" class="jEditRelation ud">$l{RELATION_UPDATE_TITLE}</a>)',$.extend({},{idUser:idUser})));}
else{$this.hide();}}}
addSubmit=false;$.copains.core.closeDialog();}});$.profile&&console.timeEnd('$.copains.core => validateAddRelation');});},editRelation:function(e)
{$.profile&&console.time('$.copains.core => editRelation');var idUser=$(this).attr('data-id');$.ajax({type:'POST',url:'/p/_xhr_addFormRelation/',dataType:'json',data:{idUser:idUser,xhr:'xhr'},complete:function(a,b,data)
{data.title=(data.action=='update')?$.copains.core.getTemplate('$l{RELATION_UPDATE_TITLE} <b>${lib}</b>',$data.copains.users[idUser]):$.copains.core.getTemplate('$l{RELATION_ADD_TITLE} <b>${lib}</b>',$data.copains.users[idUser]);$.copains.core.showInDialogBox(data);$formAddRel=$('form#jFormAddRel');$('.comments-text').autoResizeTextAreaQ({"max_rows":8});}});$.profile&&console.timeEnd('$.copains.core => editRelation');},showInVerificationBox:function(title,txt,handlerYes,handlerNo,options,adminCom,idName)
{$.profile&&console.time('$.copains.core => showInVerificationBox');if(typeof adminCom!='undefined'&&(adminCom==true))
{txt=txt+['<form class="jAdminCom">','<div class="line">','<div class="input">','<textarea rows="5" cols="30" name="reason" id="reason"></textarea>','</div>','</div>','<div class="line">','<div class="input">','<label for="sendmail">'+$.copains.core.langs[$.copains.core.lang].SEND_A_MESSAGE_TO_THE_OWNER+'</label>','<input type="checkbox" value="1" name="sendmail">','</div>','</div>','</form>'].join('');}
var data={title:title,html:txt,buttons:[]};typeof idName=='undefined'&&(idName='jDivModal');if(typeof handlerNo!='undefined')
{data.buttons.push({label:'KO',text:$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_NO,click:handlerNo});}
else{data.buttons.push({labe:'KO',text:$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_NO,click:function(){$.copains.core.closeDialog(idName);}});}
if(typeof handlerYes!='undefined')
{data.buttons.push({label:'OK',text:$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_YES,click:handlerYes});}
$.copains.core.showInDialogBox(data,options,idName);$.profile&&console.timeEnd('$.copains.core => showInVerificationBox');},showInDialogBox:function(data,options,idName)
{$.profile&&console.time('$.copains.core => showInDialogBox');var handler;if(data.handler)
{if(data.handler.indexOf('.')!==-1)
{var dest=window,i;handler=data.handler.split('.');for(i=0;i<=handler.length-1;++i)
{dest=dest[handler[i]];}
handler=dest;}
else{handler=(typeof window[data.handler]==='function'?window[data.handler]:function(){});}}
typeof idName=='undefined'&&(idName='jDivModal');$divModal=$('div#'+idName);$divModal.remove();$divModal=$('<div id="'+idName+'" class="modalS_content" title="'+data.title+'"></div>');$('div.body').append($divModal);$divModal.html(data.html).dialog($.extend(true,{width:'600px',resizable:false,dialogClass:'modalS',position:['center','center'],close:data.close||function(){},modal:true,open:(data.handler)?handler:'',buttons:(typeof data.buttons=='undefined')?'':data.buttons},options));$(document).trigger('refresh');$.profile&&console.timeEnd('$.copains.core => showInDialogBox');},closeDialog:function(idName)
{$.profile&&console.time('$.copains.core => closeDialog');typeof idName=='undefined'&&(idName='jDivModal');var $actualModal=$('div#'+idName);$actualModal.dialog('close');},selectRencontreOuFamille:function(e)
{$.profile&&console.time('$.copains.core => selectRencontreOuFamille');var tabType=[1,3,6,4],displayFamille=false,displayRencontre=false,oneCheckboxChecked=false;for(var i=0;i<tabType.length;i++)
{var checkboxName='typelien_'+tabType[i];if(tabType[i]==3)
{if($("input[name='"+checkboxName+"']").prop('checked')){displayFamille=true;oneCheckboxChecked=true;}}else{if(($("input[name='"+checkboxName+"']").prop('checked'))){displayRencontre=true;oneCheckboxChecked=true;}}}
$formButton=$('form#jFormAddRel div.btnWrap');if(displayFamille){$formAddRel.find('div.typefamrenc').show();$formAddRel.find('.type_famille').show();$formAddRel.find('.type_rencontre').hide();}else if(displayRencontre){$formAddRel.find('div.typefamrenc').show();$formAddRel.find('.type_famille').hide();$formAddRel.find('.type_rencontre').show();}else{$formAddRel.find('div.typefamrenc').hide();$formAddRel.find('.type_rencontre').hide();$formAddRel.find('.type_famille').hide();}
$.profile&&console.timeEnd('$.copains.core => selectRencontreOuFamille');},validateEditRelation:function(e)
{$.profile&&console.time('$.copains.core => validateEditRelation');var tabType=[1,3,6,4],tabTypeLien=[],i=0,length=tabType.length;for(;i<length;i++)
{($("input[name='typelien_"+tabType[i]+"']").prop('checked'))&&tabTypeLien.push(tabType[i]);}
if(tabTypeLien.length>0)
{var $textaeraDesc=$formAddRel.find('textarea#description'),idUser=$formAddRel.attr('data-id');$.ajax({type:'POST',url:'/p/_xhr_editRelation/',dataType:'json',data:{idUser:idUser,type:tabTypeLien,xhr:'xhr',desc:($textaeraDesc.val()==$textaeraDesc.data('default'))?'':$textaeraDesc.val(),fam:$formAddRel.find('select[name="flag_typelien"] option:selected').val(),etab:$formAddRel.find('select[name="etablissement"] option:selected').val()},success:function(data)
{var $nav=$('.jNavRelation');$divModal.dialog('close');$.note.info(data);if($nav.length==1)
{$nav.ccmTabs('load',$nav.ccmTabs('option','selected'));}}});}
$.profile&&console.timeEnd('$.copains.core => validateEditRelation');},jBtnIgnoreNotification:function(e)
{e.preventDefault();var $target=$(e.target),tabId=[],$notificationDiv=$target.closest('.jNotification'),notificationId=$notificationDiv.attr('data-id-notification');if($target.attr('data-range')=='all')
{$target.closest('.jNotification').find('[data-id-target]').each(function(){tabId.push($(this).attr('data-id-target'));});$notificationDiv.remove();}
else
{var	$ligne=$target.closest('[data-id-target]'),$notificationList=$target.closest('.jNotificationList');tabId.push($ligne.attr('data-id-target'));$ligne.replaceWith('');if(($notificationList.html().replace(/^\s+/g,'').replace(/\s+$/g,''))==''){$notificationDiv.remove();}};$.ajax({type:'POST',url:'/p/_xhr_jBtnIgnoreNotification/',dataType:'json',data:{tabId:tabId,notificationId:notificationId,xhr:'xhr'}});},initTownAutocomplete:function($target,options)
{var urlXhrLocation='/s/';if(isViadeo){urlXhrLocation=$data.copains.services.geolocation.options.urlGeolocName;}
var autocompleteOptions=$.extend({},{pays:true,paysTarget:'div#jUpdateCareer select#country option:selected',url:urlXhrLocation,hiddenId:true,hiddenIdTarget:'input#idville',minLength:2,preSelectFirst:true,callbackSelect:function(){}},options);$target.ccmComplete({preSelectFirst:autocompleteOptions.preSelectFirst,source:function(request,response)
{var termSearch=$.trim(request['term'].toLowerCase());autocompleteOptions.hiddenId&&$(autocompleteOptions.hiddenIdTarget).attr('value','')&&$(autocompleteOptions.hiddenIdTarget).data('nomVille','');$.ajax({url:autocompleteOptions.url,cache:true,dataType:"json",localCache:true,storageName:'search',localCacheTimeout:2*60*60*1000,data:{q:termSearch,xhr:true,ty:5,pays:autocompleteOptions.pays?$(autocompleteOptions.paysTarget).val():undefined},success:function(data)
{var res=[];if(data!=null)
{if(isViadeo){res=$.map(data.list,function(item)
{if(item.name==undefined)
{return;}
return{label:'<span class="line block">'
+'<span class="block copTheme1">'+item.name
+((item.cp!=null)?' <em>'+item.cp+'</em>':'')
+'</span>'
+'</span>',value:item.name,id:item.id};});}else{res=$.map(data.r,function(item)
{if(item.label==undefined)
{return;}
return{label:'<span class="line block">'
+((item.photo!=null)?'<img src="'+item.photo+'" class="imgS0 bloc marR10">':'')
+'<span class="block copTheme1">'+item.ti
+((item.vi!=null)?' <em>'+item.vi+'</em>':'')
+'</span>'
+((item.label!=null)?('<em>'+item.label+'</em>'):'')
+'</span>',value:item.ti,id:item.id};});}}
response(res);}});},open:function()
{$('div.box3 ul.ui-autocomplete').css({width:'400px','z-index':999999}).parent().css({width:'400px','z-index':999999});},minLength:autocompleteOptions.minLength,select:function(event,ui)
{autocompleteOptions.hiddenId&&$(autocompleteOptions.hiddenIdTarget).attr('value',ui.item.id)&&$(autocompleteOptions.hiddenIdTarget).data('nomVille',ui.item.value);autocompleteOptions.callbackSelect(event,ui);}});},initEtablissementAutocomplete:function($target,options)
{var autocompleteOptions=$.extend({},{url:'/s/',hiddenId:true,hiddenIdTarget:'input#idEtb',minLength:1,preSelectFirst:true,callbackSelect:function(){}},options);$target.ccmComplete({preSelectFirst:autocompleteOptions.preSelectFirst,source:function(request,response)
{var termSearch=$.trim(request['term'].toLowerCase());autocompleteOptions.hiddenId&&$(autocompleteOptions.hiddenIdTarget).attr('value','')&&$(autocompleteOptions.hiddenIdTarget).data('establishmentName','');$.ajax({url:autocompleteOptions.url,cache:true,dataType:"json",localCache:true,storageName:'search',localCacheTimeout:2*60*60*1000,data:{q:termSearch,xhr:true,ty:2},success:function(data)
{var res=[];if(data!=null)
{res=$.map(data.r,function(item)
{return{label:'<span class="line block">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'+item.ti+'</span>'
+((item.label!=null)?('<em>'+item.label+'</em>'):'')
+((item.nb!=null)?('<em> - '+item.nb+' '+$.copains.core.langs[$.copains.core.lang].INSCRITS+'</em>'):'')
+'</span>',value:item.ti+((item.label!=null)?', '+item.label:''),id:item.id};});}
response(res);}});},open:function()
{$('div.box3 ul.ui-autocomplete').css({width:'400px','z-index':999999}).parent().css({width:'400px','z-index':999999});},minLength:autocompleteOptions.minLength,select:function(event,ui)
{autocompleteOptions.hiddenId&&$(autocompleteOptions.hiddenIdTarget).attr('value',ui.item.id)&&$(autocompleteOptions.hiddenIdTarget).data('establishmentName',ui.item.value);autocompleteOptions.callbackSelect(event,ui);}});}}};$.extend($.copains.core,$.microTemplate);$.copains.core.microTemplateInit();$(document).start($.copains.core.init);})(jQuery);(function($)
{'use strict';$.fn.stick=function(options)
{options=$.extend({},$.fn.stick.defaultOptions,options);return this.each(function()
{var sticker=$(this),stickerPosition=null,stopStick=false,isSticked=false,optStickTo=sticker.data('stickto'),optStickPadding=sticker.data('stickpadding')||0,container=typeof optStickTo!=='undefined'?$(sticker.data('stickto')):sticker.parent(),windowPos=$(window).scrollTop(),offset=optStickPadding,STATES={containerTooSmall:0,atBottom:1,sticked:2,atTop:3},currentState=null,getPositionState=function(additionalOffset)
{additionalOffset=additionalOffset||0;var	stickerBottom=stickerPosition.top+sticker.height(),containerBottom=container.offset().top+container.height(),cssPosition=sticker.css('position'),testedOffset=offset+additionalOffset;if(containerBottom<=stickerBottom)
{return STATES.containerTooSmall;}
else if(windowPos>=(stickerPosition.top-testedOffset))
{if(windowPos>(containerBottom-sticker.height()-(testedOffset*2)))
{return cssPosition!=='absolute'?STATES.atBottom:currentState;}
else if(cssPosition!=='fixed')
{return STATES.sticked;}
else
{return currentState;}}
else if(cssPosition!=='relative'&&cssPosition!=='')
{return STATES.atTop;}
else
{return currentState;}};this.setAttribute('data-stickenable',true);var handleAdsDockEvents=function(e)
{if(e.type==='ads.top.docked'){offset+=e.detail.nodeHeight;}
else if(e.type==='ads.top.undocked'){offset-=e.detail.nodeHeight;}
if(isSticked)
{sticker.css({transition:(parseInt(e.detail.delay,10)||0)+'ms ease-in-out',top:offset+'px'});sticker.one('transitionend',function(){sticker.css({transition:''});});}};window.addEventListener("ads.top.docked",handleAdsDockEvents);window.addEventListener("ads.top.undocked",handleAdsDockEvents);if(container.length){sticker.css({'max-width':sticker.width(),width:'100%'});$(window).on('scroll touchmove',function(){if(stopStick===true){return;}
var newWindowPos=$(window).scrollTop();if(windowPos===newWindowPos){return;}
windowPos=newWindowPos;if(stickerPosition===null){stickerPosition=sticker.offset();}
var newState=getPositionState();if(currentState===newState)
{if(currentState===STATES.atTop)
{stickerPosition=sticker.offset();}
return;}
currentState=newState;switch(currentState){case STATES.containerTooSmall:stopStick=true;isSticked=false;sticker.css({position:'',top:''});break;case STATES.atBottom:isSticked=false;sticker.css({position:'absolute',top:'',bottom:offset+'px'});break;case STATES.sticked:isSticked=true;sticker.css({position:'fixed',top:offset+'px',bottom:''});break;case STATES.atTop:isSticked=false;sticker.css({position:'',top:''});stickerPosition=sticker.offset();break;}});}
this.isSticked=function(additionalOffset)
{return getPositionState(additionalOffset)===STATES.sticked;};});};$.fn.stick.defaultOptions={};}(jQuery));(function($){function Tipsy(element,options){this.$element=$(element);this.options=options;this.enabled=true;this.fixTitle();}
Tipsy.prototype={show:function(){var title=this.getTitle();if(title&&this.enabled){var $tip=this.tip();$tip.find('.tipsy-inner')[this.options.html?'html':'text'](title);$tip[0].className='tipsy';$tip.remove().css({left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var pos=$.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;var gravity=(typeof this.options.gravity=='function')?this.options.gravity.call(this.$element[0]):this.options.gravity;var tp;switch(gravity.charAt(0)){case'n':tp={top:pos.top+pos.height+this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case's':tp={bottom:$(window).height()-pos.top-this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case'e':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth-this.options.offset};break;case'w':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width+this.options.offset};break;}
if(gravity.length==2){if(gravity.charAt(1)=='w'){tp.left=pos.left+pos.width/2-15;}else{tp.left=pos.left+pos.width/2-actualWidth+15;}}
$tip.css(tp).addClass('tipsy-'+gravity);if(this.options.fade){$tip.stop().css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:this.options.opacity});}else{$tip.css({visibility:'visible',opacity:this.options.opacity});}}
this.options.onShow.call(this);},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){$(this).remove();});}else{this.tip().remove();}},fixTitle:function(){var $e=this.$element;if($e.attr('title')||typeof($e.attr('original-title'))!='string'){$e.attr('original-title',$e.attr('title')||'').removeAttr('title');}},getTitle:function(){var title,$e=this.$element,o=this.options;this.fixTitle();var title,o=this.options;if(typeof o.title=='string'){title=$e.attr(o.title=='title'?'original-title':o.title);}else if(typeof o.title=='function'){title=o.title.call($e[0]);}
title=(''+title).replace(/(^\s*|\s*$)/,"");return title||o.fallback;},tip:function(){if(!this.$tip){this.$tip=$('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');}
return this.$tip;},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null;}},enable:function(){this.enabled=true;},disable:function(){this.enabled=false;},toggleEnabled:function(){this.enabled=!this.enabled;}};$.fn.tipsy=function(options){if(options===true){return this.data('tipsy');}else if(typeof options=='string'){var tipsy=this.data('tipsy');if(tipsy)tipsy[options]();return this;}
options=$.extend({},$.fn.tipsy.defaults,options);function get(ele){var tipsy=$.data(ele,'tipsy');if(!tipsy){tipsy=new Tipsy(ele,$.fn.tipsy.elementOptions(ele,options));$.data(ele,'tipsy',tipsy);}
return tipsy;}
function enter(){var tipsy=get(this);tipsy.hoverState='in';if(options.delayIn==0){tipsy.show();}else{tipsy.fixTitle();setTimeout(function(){if(tipsy.hoverState=='in')tipsy.show();},options.delayIn);}}
function leave(){var tipsy=get(this);tipsy.hoverState='out';if(options.delayOut==0){tipsy.hide();}else{setTimeout(function(){if(tipsy.hoverState=='out')tipsy.hide();},options.delayOut);}}
this.each(function(){get(this);});if(options.trigger!='manual'){var eventIn=options.trigger=='hover'?'mouseenter':'focus',eventOut=options.trigger=='hover'?'mouseleave':'blur';this.on(eventIn,enter).on(eventOut,leave);}
return this;};$.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:'',gravity:'n',html:false,offset:0,opacity:1,title:'title',trigger:'hover',onShow:function(){}};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options;};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?'s':'n';};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?'e':'w';};})(jQuery);(function($)
{"use strict";$.tinyProfile={defaultOptions:{selector:'',delayIn:300,getSource:function(){return'/';},template:'',getBody:function(){return'';},className:'jTinyProfile'}};$.fn.tinyProfile=function(options)
{options=$.extend({},$.tinyProfile.defaultOptions,options);var openTimer,hideAll=function()
{$('.tipsy.'+options.className).remove();return true;};return this.on('mouseenter',options.selector,function(){var $this=$(this),tid=$this.attr('data-tid'),source=options.getSource.call($this),initProfile=function(data)
{var imageToLoad=0;$this.tipsy({title:function(){return options.getBody.call(this,tid,options,data);},html:true,trigger:'manual',gravity:$.fn.tipsy.autoNS,opacity:0.85,onShow:function()
{this.$tip.addClass(options.className).find('img').each(function()
{if(!this.complete&&!imagePile.cachedUri[this.src])
{++imageToLoad;imagePile.add(this.src,{},function(e,cached){--imageToLoad;if(imageToLoad<=0)
{$this.tipsy('show');}});}});imageToLoad>0&&imagePile.depile();}}).data('tinyProfile',true);clearTimeout(openTimer);openTimer=setTimeout(showProfile,options.delayIn);},showProfile=function(){$this.tipsy("show");};if(tid)
{!$this.data('tinyProfile')&&source&&source[tid]&&initProfile(source[tid]);}
else
{!$this.data('tinyProfile')&&typeof source==='object'&&initProfile(source);}
clearTimeout(openTimer);openTimer=setTimeout(showProfile,options.delayIn);}).on('mouseover',function(e){$.core.$fake[0]=e.target;!$.core.$fake.is((options.selector?options.selector+',':'')+' .tipsy, .tipsy-arrow, .tipsy-inner, .intip')&&hideAll()&&clearTimeout(openTimer);});};})(jQuery);
(function($)
{try{$data.services.contents;}catch(e){typeof $data=='undefined'&&($data={});typeof $data.services=='undefined'&&($data.services={});typeof $data.services.contents=='undefined'&&($data.services.contents={});}
finally{$data.services.contents=$.extend({content:{common:{view:{start:true},form:{start:false},common:{start:false}},top:{view:{start:false},form:{start:false},common:{start:false}},qr:{view:{start:false},form:{start:false},common:{start:false}},blog:{view:{start:false},form:{start:false},common:{start:false}}}},$data.services.contents);}
$.contents={init:function()
{this.microTemplateInit();},users:{settings:{AUTO_FOLLOW:'7',NEVER_FOLLOW:'8'}},type:{POST:'1',JSON:'10',ANSWER:'2',COMMENT:'3'},counter:{FOLLOW:'3'},mode:{INSERT:'0',UPDATE:'1'},confs:{},fields:{},events:{}};$.extend($.contents,$.microTemplate);$.contentForm={defaultConfig:{fields:['title','content'],tagName:'FORM',mode:'0',onlyActive:false,anyHighlight:false,showTag:true,useDefaultTag:true,validateAnyActive:true,suggestFollowContent:false,geolocation:{start:false,options:{}},ccmEditorConfig:{actions:['italic','bold','underline','format','ul','ol','code','image','url'],discreteToolbar:false,history:true,defaultValue:true,magicLinks:{support:false}}},forms:[],form:function(element)
{this.config=null;this.ctype=null;this.title_max_length=150;this.$element=$(element);this.ccmEditorOn=true;this.init=function()
{var self=this,$self=$(this);this.$element.delegate('button[actid],a[actid]','click',function(e)
{e.preventDefault();e.stopPropagation();var $this=$(this);self.$element.trigger($this.attr('actid'),[false,$this]);return false;}).bind('save draft',function(e,data,$originalTarget)
{self.disable();if(!self.validate(e)){self.enable();return false;}
self.$ccmPaginator&&$.extend(data,{orderedItems:self.$ccmPaginator.data('paginatorData').orderedItems});var postData=self.to_struct_val(self.$element,true,data),urlAjax='',urlPost=self.$element.attr('action');if(!postData){return false;}
urlAjax=(urlPost.indexOf('?')==-1)?urlPost+'?xhr&actid='+e.type:urlPost+'&xhr&actid='+e.type;$.ajax({type:'POST',url:urlAjax,data:postData,dataType:'json',error:function(){self.enable();},success:function(r)
{switch(''+self.config.mode){case $.contents.mode.UPDATE:if(r.url){window.location=r.url;}else{if(typeof self.config.success=='function')
{self.config.success.call(self,r);}else{self.restore(r.html,r.id);r.t&&$('div.tagslist').html(r.t).css('visibility','visible');}}
break;case $.contents.mode.INSERT:switch(self.ctype){case $.contents.type.POST:case $.contents.type.JSON:if(r.url){window.location.href=r.url;}else{self.$element.html(r.str.success);}
break;case $.contents.type.ANSWER:case $.contents.type.COMMENT:if(self.config.suggestFollowContent&&($('a#updcounter_'+$.contents.counter.FOLLOW).length>0)&&($('input#invite_follow').length>0)&&($('input#invite_follow').val()==1))
{$.note.info($.contents.langs[$.contents.lang].COMMON_FORM_POPUP_FOLLOW_ACTION,{hide:false,classes:'notify_question'});var id_parentx=$('form.contentForm').attr('parentx');$('button.follow_yes').bind('click',function(){var cid=$.contents.counter.FOLLOW;typeof $.toggleCounterAction=='function'&&$.toggleCounterAction(id_parentx,cid,$('a#updcounter_'+$.contents.counter.FOLLOW));var chk_dont_ask=$('input#chk_dont_ask').attr('checked');$('div.notify_question').fadeOut();if(chk_dont_ask!==undefined){$.ajax({type:'POST',url:'/fr/p/xhr_upd_user_settings',data:{setting:$.contents.users.settings.AUTO_FOLLOW}});}else{$.note.info($.contents.langs[$.contents.lang].COMMON_FORM_POPUP_FOLLOW_INFO,{delay:5000});}});$('a.followNo').bind('click',function(){var chk_dont_ask=$('input#chk_dont_ask').attr('checked');$('div.notify_question').fadeOut();if(chk_dont_ask!==undefined){$.ajax({type:'POST',url:'/fr/p/xhr_upd_user_settings',data:{setting:$.contents.users.settings.NEVER_FOLLOW}});$('input#invite_follow').val('0');$('div.notify_question').fadeOut();}});}
switch(self.ctype){case $.contents.type.ANSWER:if(typeof self.config.success=='function')
{self.config.success.call(self,r,$originalTarget.attr('acttgt'));}
else{self.close();$("div#"+$originalTarget.attr('acttgt')).append(r.str.answer);$("h3#nb_answers").show().html(r.str.nbanswers);}
break;case $.contents.type.COMMENT:if(typeof self.config.success=='function')
{self.config.success.call(self,r,$originalTarget.attr('acttgt'));}
else{self.close();$("div#"+$originalTarget.attr('acttgt')).append(r.str.comment);$("a[actid='toggleCmt']").show();$("h3#nb_comments").show().html(r.str.nbcomment);}
break;}
$self.contentBindBehavior();break;}
if(typeof r.API!='undefined'&&typeof r.API.facebook!='undefined'&&typeof r.API.facebook.enabled!='undefined'&&r.API.facebook.enabled==true&&typeof r.API.facebook.action!='undefined'){$.jet.facebook.openGraph(r.API.facebook.action,r.API.facebook.params,'article',(r.API.facebook.options?r.API.facebook.options:[]));}}
$(document).trigger('refresh');return false;}});return false;}).bind('preview',function(e,data,$originalTarget)
{if($('div[viewbox]:visible').length>0||!self.validate(e)){return;}
var cst=null;switch(self.ctype){case $.contents.type.POST:case $.contents.type.JSON:cst='.box1';case $.contents.type.ANSWER:case $.contents.type.COMMENT:cst===null&&(cst='div.line');$.ajax({type:'POST',url:$originalTarget.attr('url')+'?xhr',data:self.to_struct_val(self.$element),dataType:'json',success:function(html){$('div.preview').remove();var
$p=$(html.preview).addClass('preview'),$b=self.$element.closest(cst);if($b.length>0)
{$b.before($p);}
else
{self.$element.parent().parent().parent().prepend($p);}
$.scrollTo($p,{axis:'y',offset:{top:-100},duration:250});return false;}});return false;default:}}).bind('cancel',function(e,data,$originalTarget)
{switch(self.config.mode)
{case $.contents.mode.UPDATE:var $contentOld=$('div#contentOld');html=($contentOld.length>0)?$contentOld.html():null;self.restore(html);self.ctype==$.contents.type.POST&&$('div.tagslist').css('visibility','visible');break;default:switch(self.ctype){case $.contents.type.POST:var form_elmts=self.to_struct_elmt(self.$element);for(var f in self.config.fields){switch(self.config.fields[f]){case'title':if(form_elmts.title.val()!=form_elmts.title.data('default'))
{form_elmts.title.val('');}
break;case'content':form_elmts.content.ccmEditorHistoryCancel();break;default:typeof self.config.fields[f]==='object'&&typeof self.config.fields[f].cancel==='function'&&self.config.fields[f].cancel.call(self,self.config.fields[f]);break;}}
break;case $.contents.type.ANSWER:case $.contents.type.COMMENT:default:if(self.ctype==$.contents.type.COMMENT){if(self.$element.closest('div.cmtline').children('div.line').attr('id')=='c0'&&(self.$element.closest('div.cmtline').siblings('.cuser:hidden').length!==0||self.$element.closest('div.cmtline').siblings().length===0)){self.$element.closest('div.cmtline').parent().hide();}}
self.close();break;}}});var $external_url=this.$element.find('[name=external_url]');if($external_url.length>0){$external_url.addLinkCrawler({behaveInput:true}).bind('urlValid urlInvalid',function(e){self.hide_error('content');switch(e.type){case'urlInvalid':self.show_error('external_url',$.contents.langs[$.contents.lang].COMMON_FORM_URL_INVALID)&&self.disable();break;case'urlValid':self.hide_error('external_url');break;default:break;}}).bind('crawlerDuplicated',function(){self.$element.find('div.divContent').show();self.config.showTag&&self.$element.find('div.divTagslist').hide();self.hide_error('external_url')&&self.enable();}).bind('crawlerNew',function(){self.config.showTag&&self.$element.find('div.divTagslist').show();self.hide_error('external_url')&&self.enable();}).bind('crawlerCrawling',function(){self.disable();}).bind('crawlerError',function(){self.disable();});this.$element.find('.divUrlDisplayer').addLinkCrawler().linkDisplayer({$commentNode:this.$element.find('.lastCmt'),$commentZone:this.$element.find('#bookmarkCmt'),$allowedInput:$external_url});}else{self.enable();}
this.config.fields.push('ctype');this.ctype=this.$element.find('.ctype').val();if(typeof this.config.editing=='undefined')
{this.config.editing=this.$element.closest('.hasId');}
$("input[type=checkbox]").ccmCheckbox();for(f in this.config.fields)
{var name=(typeof this.config.fields[f]==='object')?this.config.fields[f].name:this.config.fields[f];switch(name){case'tags':$.contents.fields.tags.init.call(this,this.config.fields[f]);break;case'title':$.contents.fields.title.init.call(this,this.config.fields[f]);break;case'content':$.contents.fields.content.init.call(this,this.config.fields[f]);break;case'geolocation':$.contents.fields.geolocation.init.call(this,this.config.fields[f]);break;case'ctype':var cnt=this.$element.find('.content');!cnt.hasClass('contenteditable')&&cnt.ccmEditor(this.config.ccmEditorConfig);if(this.ctype!=$.contents.type.POST){cnt.focus();}
break;default:typeof this.config.fields[f]==='object'&&typeof this.config.fields[f].init==='function'&&this.config.fields[f].init.call(this,this.config.fields[f]);break;}}};this.enable=function(){this.$element.find('[actid=save],[actid=preview],button.saveDraft').removeClass('buttonSel');};this.disable=function(){this.$element.find('[actid=save],[actid=preview],button.saveDraft').addClass('buttonSel');};this.show_error=function(node,msg){msg=msg||'undefined';switch(typeof node)
{case'string':var ucffield=node.charAt(0).toUpperCase()+node.substr(1);this.$element.find('.div'+ucffield).addClass('lineError');this.$element.find('.divError'+ucffield).html(msg);return true;case'object':node.showInputError(msg);return true;default:break;}};this.hide_error=function(node){switch(typeof node)
{case'string':var ucffield=node.charAt(0).toUpperCase()+node.substr(1);this.$element.find('.div'+ucffield).removeClass('lineError');this.$element.find('.divError'+ucffield).html('');return true;case'object':node.hideInputError();return true;default:break;}};this.close=function(){this.$element.contentFormRemove();this.config.editing.find(':visible').remove();(this.config.mode==$.contents.mode.INSERT)&&this.$element.closest('.editing:visible').remove();$("div.preview").remove();};this.restore=function(html,id)
{this.close();if(html!==null)
{if(this.config.editing.hasClass('sliderContainer')&&typeof id!='undefined')
{this.config.editing.removeClass('editing').find('.slideItem[data-id='+id+']').html(html);this.config.editing.find(':hidden').show();}
else{this.config.editing.removeClass('editing').empty().html(html);}}
else{this.config.editing.removeClass('editing').children().show();}
this.config.editing.contentBindBehavior();};this.validate=function(data)
{var errors=[],data=this.to_struct_val(this.$element,true,data),fields=this.config.fields.slice(0);data.external_url&&data.parentx&&fields.push('content');for(var f in fields)
{var name=(typeof fields[f]==='object')?fields[f].name:fields[f];switch(name)
{case'tags':!$.contents.fields.tags.validate.call(this,fields[f])&&errors.push($.contents.fields.tags.validate);break;case'title':!$.contents.fields.title.validate.call(this,fields[f])&&errors.push($.contents.fields.title.validate);break;case'url_title':var $urlTitle=this.$element.find('[name=url_title]'),urlTitle=$.trim($urlTitle.val());if($urlTitle.length>0&&urlTitle==='')
{$urlTitle.css({border:'1px dashed #E01616'}).parent().parent().css({border:'1px solid #E01616'}).find('.titleError').show();errors.push('url_title');}
else
{$urlTitle.css({border:'1px dashed transparent'}).parent().parent().css({border:'1px solid transparent'}).find('.titleError').hide();}
break;case'external_url':if(data.external_url===''||data.external_url==this.$element.find('.external_url').data('default')||data.external_url==this.$element.find('.external_url').attr('defaultstart'))
{this.show_error('external_url',$.contents.langs[$.contents.lang].COMMON_FORM_FIELD_FILLED);errors.push('external_url');}else
{this.hide_error('external_url');}
break;case'content':!$.contents.fields.content.validate.call(this,fields[f])&&errors.push($.contents.fields.content.validate);break;default:typeof fields[f]==='object'&&typeof fields[f].validate==='function'&&!fields[f].validate.call(this,fields[f])&&errors.push(fields[f].validate);break;}}
$.profile&&console.group('content.validate'),console.info('Fields : ',fields),errors.length!==0&&console.warn('Invalid :',errors),console.groupEnd();return errors.length===0;};this.to_struct_val=function(form,save,data){if(save&&typeof this.config.cnt=='object')
{var
cnt=[],instance=this,data2content=function(cnt)
{if(typeof this=='object')
{for(var i=0;i<this.length;++i)
{if(!this.hasOwnProperty(i)){continue;}
typeof this[i].$reference=='function'&&(this[i].$reference=this[i].$reference.apply(form));if(typeof this[i].$reference!='object'||typeof this[i].getContent!='function')
{console.warn('cnt is not formated correctly, see iner doc to get the right format');continue;}
var self=this[i];self.$reference.each(function(j){var z=(cnt.push(self.getContent.call(this,form,instance))-1);typeof self.cnt=="object"&&((typeof cnt[z].cnt=='undefined'&&(cnt[z].cnt=[])),data2content.call(self.cnt,cnt[z].cnt));});}}};data2content.call(this.config.cnt,cnt);return{cnt:$.extend(true,cnt,data)};}
if(typeof this.config.cnt=='function')
{cnt=this.config.cnt.call(this,form,data);if(cnt){return $.extend(true,data,cnt);}
return false;}
var ces=this.to_struct_elmt(form),tagsData='',nbInput=ces.tags_list.length;if(nbInput!=0)
{if(nbInput==1)
{tagsData=ces.tags_list.val();}
else{tagsData={};ces.tags_list.each(function()
{var $this=$(this),idCat=$this.closest('div.input').attr('data-cat');typeof idCat=='undefined'&&(idCat=-1);tagsData[idCat]=$this.val();});}}
return $.extend(true,{id:ces.id.val(),parentx:this.config.parentxupd||((ces.parentx.val()!='')?ces.parentx.val():undefined),parent:ces.parent.val(),module_id:ces.module_id.val(),title:ces.title.val(),external_url:ces.external_url.val()!=''?ces.external_url.val():undefined,content:!ces.content.ccmEditorIsEmpty()?ces.content.html():undefined,email:ces.email.val()!=''?ces.email.val():undefined,password:ces.password.val()!=''?ces.password.val():undefined,referer:ces.referer.val()!=''?ces.referer.val():undefined,content_type:ces.content_type.val(),tags_list:tagsData,url_final:ces.url_final.val(),url_title:ces.url_title.val(),url_resume:ces.url_resume.html()?ces.url_resume.html():undefined,publication_date:(ces.publication_date.val()!='')?ces.publication_date.val():undefined,publication_time:(ces.publication_time.val()!='')?ces.publication_time.val():undefined,url_image_src:ces.url_image_src.val(),url_no_image:ces.url_no_image.length,author_anon:ces.author_anon.length,contentToken:(ces.contentToken.val()!='')?ces.contentToken.val():undefined,typeQuizz:(ces.typeQuizz.val()!='')?ces.typeQuizz.val():undefined,screenName:(ces.screenName.val()!='')?ces.screenName.val():undefined,email:(ces.email.val()!='')?ces.email.val():undefined,player_html:(ces.player_html.val()!='')?ces.player_html.val():undefined,player_height:(ces.player_height.val()!='')?ces.player_height.val():undefined,player_width:(ces.player_width.val()!='')?ces.player_width.val():undefined,player_url:(ces.player_url.val()!='')?ces.player_url.val():undefined,player_provider:(ces.player_provider.val()!='')?ces.player_provider.val():undefined,date_year_event:(ces.date_year_event.val()!='')?ces.date_year_event.val():undefined,location_name:(ces.location_name.val()!='')?ces.location_name.val():undefined,location_id:(ces.location_id.val()!='')?ces.location_id.val():undefined,latitude:(ces.latitude.val()!='')?ces.latitude.val():undefined,longitude:(ces.longitude.val()!='')?ces.longitude.val():undefined},data);};this.toStructVal=function(form,data)
{if(typeof this.config.cnt=='object')
{var
cnt=[],instance=this,data2content=function(cnt)
{if(typeof this=='object')
{for(var i=0;i<this.length;++i)
{if(!this.hasOwnProperty(i)){continue;}
typeof this[i].$reference=='function'&&(this[i].$reference=this[i].$reference.apply(form));if(typeof this[i].$reference!='object'||typeof this[i].getContent!='function')
{console.warn('cnt is not formated correctly, see iner doc to get the right format');continue;}
var self=this[i];self.$reference.each(function(j)
{var z=(cnt.push(self.getContent.call(this,form,instance))-1);typeof self.cnt=="object"&&((typeof cnt[z].cnt=='undefined'&&(cnt[z].cnt=[])),data2content.call(self.cnt,cnt[z].cnt));});}}};data2content.call(this.config.cnt,cnt);return{cnt:$.extend(true,cnt,data)};}
if(typeof this.config.cnt=='function')
{cnt=this.config.cnt.call(this,form,data);if(cnt){return $.extend(true,data,cnt);}
return false;}};this.toStructVal.getValOrUndefined=function(form,search,htmlFunc)
{var $element=form.find(search),funcName=htmlFunc?'html':'val',value;return(($element.length>0&&(value=$element[funcName]())!='')?value:undefined);}
this.to_struct_elmt=function($form){return({id:$form.find('[name=id]'),parentx:$form.find('.parentx'),parent:$form.find('.parent'),module_id:$form.find('.module_id'),title:$form.find('.title'),external_url:$form.find('[name=external_url]'),content:$form.find('.content'),email:$form.find('.email'),password:$form.find('.password'),referer:$form.find('[name=referer]'),content_type:$form.find('.ctype'),tags_list:$form.find('input.tags'),publication_date:$form.find('.publicationDate'),publication_time:$form.find('.publicationTime'),url_final:$form.find('[name=url_final]'),url_title:$form.find('[name=url_title]'),url_resume:$form.find('[name=url_resume]'),url_image_src:$form.find('[name=url_image_src]:checked'),url_no_image:$form.find('[name=url_no_image]:checked'),author_anon:$form.find('[name=author_anon]:checked'),contentToken:$form.find('[name=contentToken]'),screenName:$form.find('[name=screenName]'),typeQuizz:$form.find('[name=typeQuizz]'),email:$form.find('[name=email]'),player_html:$form.find('[name=player_html]'),player_height:$form.find('[name=player_height]'),player_width:$form.find('[name=player_width]'),player_url:$form.find('[name=player_url]'),player_provider:$form.find('[name=player_provider]'),date_year_event:$form.find('[name=date_year_event]'),location_name:$form.find('[name=location_name]'),location_id:$form.find('[name=location_id]'),latitude:$form.find('[name=latitude]'),longitude:$form.find('[name=longitude]')});};}};$.fn.contentFormRemove=function()
{return this.each(function()
{var self=$(this),id=self.attr('formid');if(typeof(id)!='undefined')
{$.contentForm.forms[id].$element.find('.content').trigger('ccmEditorRemove');typeof $ec!='undefined'&&$ec.off('click',$.contentForm.forms[id].idDelegation);delete($.contentForm.forms[id]);}});};$.fn.contentForm=function(config)
{var oConf=config;config=$.extend(true,{},$.contentForm.defaultConfig,config);if($.isArray(oConf.fields)&&oConf.fields.length==0){config.fields=[];}
typeof oConf!='undefined'&&typeof oConf.ccmEditorConfig!='undefined'&&typeof oConf.ccmEditorConfig.actions=='object'&&(config.ccmEditorConfig.actions=oConf.ccmEditorConfig.actions);$.evalOptions(config);return this.each(function()
{if(this.tagName==config.tagName)
{$.profile&&console.log('Start editor form',this);var id=$.contentForm.forms.push(new $.contentForm.form(this))-1;$(this).attr('formId',id);$.contentForm.forms[id].config=config;$.contentForm.forms[id].init();}else{$.profile&&console.warn('Tag does not match',this,config);}});};$.fn.remoteContentForm=function(config)
{var $this=$(this);config=$.extend(true,{before:function(){},after:function(){},destination:$this.closest('.hasId'),url:'',contentFormConf:$.extend(true,{},$.contentForm.defaultConfig,{mode:$.contents.mode.UPDATE})},config);return this.bind('click',function()
{config.before.apply(this);$.ajax({type:'POST',url:config.url,success:function(html){config.after.apply(this);$(config.destination).html(html).find(config.contentFormConf.tagName).contentForm(config.contentFormConf);}});});};$.fn.contentCommonView=function()
{return this.each(function()
{var $this=$(this);$this.contentBindBehavior();$this.find('div.ui-pnotify-closer').bind('click',function(){$(this).closest('div.ui-pnotify').hide('slow');});var $editBtn=$('.editContent[data-id='+$this.attr('data-id')+']');if(!$editBtn.hasClass('binded')){$editBtn.bind('click',function(e){$.ajax({type:'POST',dataType:'json',url:$data.common.baseUrl+'/c/update',data:{'ctype':0,'id':$(this).attr('data-id'),'xhr':1},success:function(data){console.log(data);$editBtn.hide();data.conf.mode=$.contents.mode.UPDATE;data.conf.success=function(res)
{$editBtn.show();$this.html(res.html);};data.conf=$.extend(true,{},$.contentForm.defaultConfig,data.conf);$this.html(data.html).find(data.conf.tagName).contentForm(data.conf);}});}).addClass('binded');}
$(document).bind('codeSnippetReady',function(){$this.find('pre').codeSnippet();}).trigger('contentCommonView',[$this]);});};$.fn.contentUnbindBehavior=function()
{return this.each(function()
{var $this=$(this);$this.find('.content a.edit').unbind('click dblclick',$.fn.contentBindBehavior.showForm);$this.find('.hasId[editable]').unbind('dblclick',$.fn.contentBindBehavior.showForm).tipsy('remove');});};$.fn.contentBindBehavior=function()
{return this.each(function()
{var $this=$(this);if(!$this.hasClass('contentBehavior'))
{$this.addClass('contentBehavior').delegate('.content a.edit','click dblclick',$.fn.contentBindBehavior.showForm).delegate('.hasId[editable]','dblclick',$.fn.contentBindBehavior.showForm).find('.hasId[editable], .content a.edit').tipsy({title:function(){return $.contents.langs[$.contents.lang].COMMON_DBLCLICK_TO_EDIT;},gravity:'s',delayIn:100,fade:false});$this.find('a.icoOptions[title]').tipsy({gravity:'s',delayIn:100,fade:false});}});};$.fn.contentBindBehavior.showForm=function(e)
{var mask=(function(){var $body=$('body');return $('<div class="disabled"></div>').css({'position':'absolute','top':'0px','left':'0px','height':$body.css('height'),'opacity':'0','background-color':'#fff'}).animate({opacity:0.5},100).appendTo($body);})(),$this=$(this),$editing=!$this.hasClass('hasId')?$this.closest('.hasId'):$this,lctype=$editing.attr('id').charAt(0),$target=$(e.target),ctype;if(!$this.hasClass('editing')&&!$target.hasClass('contenteditable'))
{$this.tipsy("hide");switch(lctype)
{case'p':ctype=$.contents.type.POST;$('div.tagslist').css('visibility','hidden');break;case'c':ctype=$.contents.type.COMMENT;break;case'a':ctype=$.contents.type.ANSWER;break;}
$.ajax($.extend({type:'POST',url:$editing.attr('editable')+'?xhr&id='+($editing.attr('id').replace(/[^\d]/g,''))+'&ctype='+ctype,success:function(data)
{$editing.unbind().addClass('editing').children().hide();$.fn.contentBindBehavior.showForm.displayData.call(this,data,$editing);mask.stop().remove();}},$.fn.contentBindBehavior.showForm.ajaxOptions));return false;}};$.fn.contentBindBehavior.showForm.ajaxOptions={corePacket:false,dataType:'json'};$.fn.contentBindBehavior.showForm.displayData=function(data,$editing){$editing.append(data.html).find('.contentForm').contentForm($.extend(data.conf,{mode:$.contents.mode.UPDATE,editing:$editing}));};$.fn.contentCommonForm=function()
{return this.each(function()
{var $this=$(this);$this.find('input[default],textarea[default]').InitInputDefault();typeof $data.services.contents.content.common.form.options=='object'&&$this.contentForm($data.services.contents.content.common.form.options);});};$.fn.contentCommonCommon=function()
{return this.each(function()
{var $this=$(this);$.contents.init();if($this.hasClass('contentCommonCommonReady')){return;}
$this.addClass('contentCommonCommonReady').delegate('button[actid],a[actid]','click',function(e)
{e.preventDefault();var $self=$(this);$.profile&&console.info('false actid on ',$self,$self.attr('actid'));$this.trigger($self.attr('actid'),[false,$self]);}).bind('nextpage prevpage',function(e,data,$target)
{$.contents.events.nextPrevPage(e,data,$target);}).bind('toc_off toc_on',function(e,data,$target)
{$.contents.events.toggleToc(e,data,$target);}).bind('addcomment addanswer',function(e,data,$target)
{$.contents.events.addReply(e,$target);}).bind('loadcom',function(e,data,$target)
{$.contents.events.loadComment(e,data,$target);});$(document).trigger('contentCommonCommon',[$this]);});};$(document).bind('contentsLoaded',function(){$.core.tryOn('services.contents.content.common.common.start',function(){$data.services.contents.content.common.common.start===true&&typeof $data.services.contents.content.common.common.selector=='string'&&$data.services.contents.content.common.common.selector!==''&&$($data.services.contents.content.common.common.selector).contentCommonCommon();});$.core.tryOn('services.contents.content.common.view.start',function(){$data.services.contents.content.common.view.start===true&&typeof $data.services.contents.content.common.view.selector=='string'&&$data.services.contents.content.common.view.selector!==''&&$($data.services.contents.content.common.view.selector).contentCommonView();});$.core.tryOn('services.contents.content.common.form.start',function(){$data.services.contents.content.common.form.start===true&&typeof $data.services.contents.content.common.form.selector=='string'&&$data.services.contents.content.common.form.selector!==''&&$($data.services.contents.content.common.form.selector).contentCommonForm();});});})(jQuery);(function($)
{$.contents.confs.common={cnt:[{$reference:function(){return $($data.services.contents.content.common.form.selector);},getContent:function(form,instance)
{var tagsData='',$tagsList=form.find('.tags'),nbInput=$tagsList.length;if(nbInput!=0)
{if(nbInput==1)
{tagsData=$tagsList.val();}
else{tagsData={};$tagsList.each(function()
{var $this=$(this),idCat=$this.closest('div.input').attr('data-cat');typeof idCat=='undefined'&&(idCat=-1);tagsData[idCat]=$this.val();});}}
return{id:instance.toStructVal.getValOrUndefined(form,'[name=id]'),parentx:instance.config.parentxupd||(instance.toStructVal.getValOrUndefined(form,'.parentx')),parent:instance.toStructVal.getValOrUndefined(form,'.parent'),module_id:instance.toStructVal.getValOrUndefined(form,'.module_id'),title:instance.toStructVal.getValOrUndefined(form,'.title'),content:!form.find('.content').ccmEditorIsEmpty()?form.find('.content').html():undefined,content_type:instance.toStructVal.getValOrUndefined(form,'.ctype'),tags_list:tagsData,publication_date:instance.toStructVal.getValOrUndefined(form,'.publicationDate'),publication_time:instance.toStructVal.getValOrUndefined(form,'.publicationTime')};}}]}})(jQuery);(function($)
{$.contents.confs.geolocation={cnt:[{isPresent:function(form){return form.find('[name=location_id]').length>0;},getContent:function(form,instance)
{return{location_name:instance.toStructVal.getValOrUndefined(form,'[name=location_name]'),location_id:instance.toStructVal.getValOrUndefined(form,'[name=location_id]'),latitude:instance.toStructVal.getValOrUndefined(form,'[name=latitude]'),longitude:instance.toStructVal.getValOrUndefined(form,'[name=longitude]')};}}]}})(jQuery);(function($)
{$.contents.confs.blog={cnt:[{$reference:function()
{return $($data.services.contents.content.common.form.selector);},getContent:function(form,instance)
{return $.extend({},$.contents.confs.common.cnt[0].getContent.call(this,form,instance),{email:instance.toStructVal.getValOrUndefined(form,'.email'),referer:instance.toStructVal.getValOrUndefined(form,'[name=referer]'),url_final:instance.toStructVal.getValOrUndefined(form,'[name=url_final]'),url_title:instance.toStructVal.getValOrUndefined(form,'[name=url_title]'),url_resume:instance.toStructVal.getValOrUndefined(form,'[name=url_resume]',true),url_image_src:instance.toStructVal.getValOrUndefined(form,'[name=url_image_src]:checked'),author_anon:form.find('[name=author_anon]:checked').length,player_html:instance.toStructVal.getValOrUndefined(form,'[name=player_html]'),player_height:instance.toStructVal.getValOrUndefined(form,'[name=player_height]'),player_width:instance.toStructVal.getValOrUndefined(form,'[name=player_width]'),player_url:instance.toStructVal.getValOrUndefined(form,'[name=player_url]'),player_provider:instance.toStructVal.getValOrUndefined(form,'[name=player_provider]'),date_year_event:instance.toStructVal.getValOrUndefined(form,'[name=date_year_event]')},$.contents.confs.geolocation.cnt[0].isPresent.apply(this,arguments)?$.contents.confs.geolocation.cnt[0].getContent.apply(this,arguments):{});}}]}})(jQuery);(function($)
{$.contents.fields.anonymousPost={name:'anonymousPost',selectorEmail:'.email',selectorScreenName:'.screenName',selectorPassword:'.password',selectorDivScreenName:'.divScreenName',selectorDivPassword:'.divPassword',init:function(conf)
{var $email=$(conf.selectorEmail).typeEmail().bind('typeEmailValid',function()
{$.ajax({type:'POST',url:$data.common.baseUrl+'/p/_xhr_check_email',data:{xhr:1,email:$email.attr('value')},dataType:'json',error:function(){},success:function(response)
{if(response.find)
{$(conf.selectorDivScreenName).hide();$(conf.selectorDivPassword).show();}else{$(conf.selectorDivScreenName).show();$(conf.selectorDivPassword).hide();}}});});}}})(jQuery);(function($){$.contents.fields.ccmPaginator={name:'ccmPaginator',selector:false,init:function(conf){var self=this;this.$ccmPaginator=$.ccmPaginator($.extend(this.config.ccmPaginatorOptions,{onAdd:function(e){self.$element.trigger('save',[{addPage:true}]);},sortable:true,updateMode:this.config.id=='new'?'store':'incremental'}));$('.ccmPaginator').append(this.$ccmPaginator);}}})(jQuery);(function($)
{$.contents.fields.content={name:'genericContent',ccmEditorOn:true,init:function()
{this.$element.find('.content').ccmEditor(this.config.ccmEditorConfig);},validate:function(self)
{var $cnt=this.$element.find('.content'),cnt=$cnt.val();if((this.ccmEditorOn&&$cnt.ccmEditorIsEmpty())||(!this.ccmEditorOn&&(/^\s*$/.test(cnt)||cnt==$cnt.data('default'))))
{$cnt.showInputError($.contents.langs[$.contents.lang].COMMON_FORM_FIELD_FILLED);return false;}
$cnt.hideInputError();return true;}}})(jQuery);(function($){$.contents.fields.dateYearEvent={name:'dateYearEvent',validate:function(self){var dateYearEvent=this.$element.find('#dateYearEvent').val();if(dateYearEvent===''){this.show_error('dateYearEvent',$.contents.langs[$.contents.lang].COMMON_FORM_FIELD_FILLED);return false;}
this.hide_error('dateYearEvent');return true;}}})(jQuery);(function($){$.contents.fields.publicationTime={name:'publicationTime',id:'publication_time',selector:'.publicationTime',timePickerConf:{defaultTime:'hh:mm',hours:{starts:0,ends:23},minutes:{starts:0,ends:55,interval:5},showCloseButton:true,closeButtonText:'Done',showNowButton:true,nowButtonText:'Now',showDeselectButton:false,deselectButtonText:'Deselect'},init:function(conf){$(conf.selector).timepicker(conf.timePickerConf);},validate:function(self){this.hide_error('publicationTime');if($(self.selector).val()===''||$(self.selector).val()=="hh:mm")
{this.show_error('publicationTime',$.contents.langs[$.contents.lang].COMMON_FORM_FIELD_FILLED);return false;}
if($('.publicationTime').val().match(/(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])/)===null)
{this.show_error('publicationTime',$.contents.langs[$.contents.lang].COMMON_FORM_INVALID_TIME);return false;}
return true;}}})(jQuery);(function($){$.contents.fields.publicationDate={name:'publicationDate',id:'publication_date',selector:'.publicationDate',datePickerConf:{altFormat:"dd/mm/yy",dateFormat:"dd/mm/yy",minDate:0,maxDate:"+1Y"},init:function(conf){$(conf.selector).datepicker(conf.datePickerConf);},validate:function(self){var matchDate=function(date)
{switch(self.datePickerConf.dateFormat.toLowerCase())
{case'mm/dd/yy':return date.match(/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|30|31)\/([0-9]{4})/)!==null;default:return date.match(/(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/([0-9]{4})/)!==null;}
return false;};this.hide_error('publicationDate');if($('.publicationDate').val()===''||$('.publicationDate').val()=='MM/DD/YY')
{this.show_error('publicationDate',$.contents.langs[$.contents.lang].COMMON_FORM_FIELD_FILLED);return false;}
if(!matchDate($('.publicationDate').val()))
{this.show_error('publicationDate',$.contents.langs[$.contents.lang].COMMON_FORM_INVALID_DATE);return false;}
return true;}}})(jQuery);(function($){$.contents.fields.tags={name:'genericTags',init:function()
{var self=this;this.$tags=this.$element.find('div.tagslistdiv');this.$tagsCloudSuggest=this.$element.find('.tagCloudSuggest');this.$tagsCloudEdito=this.$element.find('.tagCloudEdito');var
inputHiddenParam=this.$tags.find('input[type=hidden][name=paramtags]').val(),_source=this.config.source||$data.common.urlPrefixModule+'suggest_tags'||'/content/suggest_tags',_validateSource=this.config.validateSource||$data.common.urlPrefixModule+'validate_tags'||'/content/validate_tags',_highlightedSource=this.config.highlightedSource||_source+'?p=hs',_editoTagSource=this.config.editoTagSource||_source+'?p=nc',conf=this.config,mainTags=[],onTagUpdate=function(instance)
{mainTags=instance.orderedTags;var mainTag=mainTags[0],tagList=(function(){var r=[];for(var m=mainTags.length,i=0;i<m;++i){r.push(mainTags[i].name);}return r.join(',');})(),i;if(mainTag)
{conf.tagsCloudSuggest&&setTimeout(function(){self.$tagsCloudSuggest.trigger('replaceItem',[tagList]);},100);$.profile&&console.log('update mainTag : ',mainTag.name);if(conf.tagsHighlightFirst&&!(mainTag.priority&&mainTag.priority=='HIGHLIGHT'))
{for(i in instance.orderedTags)
{var t=instance.orderedTags[i];if(t.display&&t.priority&&t.priority=='HIGHLIGHT')
{setTimeout(function()
{$.profile&&console.warn('new highlight tag moved : ',t);t.order=0;instance.$self.trigger('addTag',t);},1000);break;}}}}},config={source:function(){return _source;},validateSource:function(){return _validateSource;},profile:1,main:this.config.useDefaultTag?this.config.groupName||$data.expeert.groupName:'',onlyActive:this.config.onlyActive||false,sortable:typeof this.config.tagsSortable=='undefined'?true:this.config.tagsSortable,onChange:(this.config.tagsHighlightFirst||this.config.tagsCloudParent)?onTagUpdate:function(){},onStarted:(this.config.tagsHighlightFirst||this.config.tagsCloudParent)?onTagUpdate:function(){}};inputHiddenParam.length!==0&&($.extend(config,(inputHiddenParam?$.parseJSON(inputHiddenParam):{})));this.$tags.inputTags(config);this.config.tagsCloudSuggest&&this.$tagsCloudSuggest.tagCloud({url:function(){return _highlightedSource;},paramName:'q',paramNameExclude:false,beforeTemplate:'',sortable:true,sortableOptions:{containment:'.divTagslist',connectWith:'.tagsList',delay:100},template:'<a class="tag tagS mar5 valid ACTIVE ${priority}" href="javascript:void(0);" title="$l{TAG_CLOUD_ACCEPT}">'
+'${name}'
+'<span class="marL5 valid icoValid-3" title="$l{TAG_CLOUD_ACCEPT}" href="javascript:void(0);"></span>'
+'<span class="marL5 cancel icoCancel-3" title="$l{TAG_CLOUD_REFUSE}" href="javascript:void(0);"></span>'
+'</a>',renderTag:function(tag,config)
{return $($.tagCloud.getTemplate(config.template,{name:tag.name,priority:tag.priority}));}}).bind('mousedown',function()
{var instanceId=self.$tags.attr('tagid');instanceId&&$.inputTags.showVisualDisplay(instanceId,true);}).trigger('registerClientNode',[this.$tags]);this.config.tagsCloudEdito&&this.$tagsCloudEdito.tagCloud({url:function(){return _editoTagSource;},paramName:'q',paramNameExclude:false,beforeTemplate:'',sortable:true,sortableOptions:{containment:'.divTagslist',connectWith:'.tagsList',delay:100},template:'<a class="tag tagS mar5 valid ACTIVE" href="javascript:void(0);" title="$l{TAG_CLOUD_ACCEPT}">'
+'${name}'
+'<span class="marL5 valid icoValid-3" title="$l{TAG_CLOUD_ACCEPT}" href="javascript:void(0);"></span>'
+'<span class="marL5 cancel icoCancel-3" title="$l{TAG_CLOUD_REFUSE}" href="javascript:void(0);"></span>'
+'</a>'}).bind('mousedown',function()
{var instanceId=self.$tags.attr('tagid');instanceId&&$.inputTags.showVisualDisplay(instanceId,true);}).trigger('registerClientNode',[this.$tags]).trigger('replaceItem',[[]]);},validate:function(self)
{var valid=true,current=this;this.$tags.each(function()
{var $this=$(this);if(!current.config.validateAnyActive||$this.data('anyActive'))
{$this.hideInputError();}
else
{$this.showInputError($.contents.langs[$.contents.lang].COMMON_FORM_FIELD_ACTIVE_TAG_MISSING);valid=false;}
if(current.config.anyHighlight)
{if($this.data('anyHighlight'))
{$this.hideInputError();}
else
{$this.showInputError($.contents.langs[$.contents.lang].COMMON_FORM_FIELD_HIGHLIGHT_TAG_MISSING);valid=false;}}});return valid;}}})(jQuery);(function($)
{$.contents.fields.geolocation={name:'geolocalisation',init:function(conf)
{var self=this;$(document).bind('geolocationLoaded',function(e)
{$('.blocGeoLoc').geolocation(self.config.geolocation);});$(document).trigger('refresh',[{services:{geolocation:self.config.geolocation}}]);}}})(jQuery);(function($)
{$.contents.fields.answerLight={name:'answerLight',init:function(){this.$element.find('.answerLight').ccmEditor(this.config.ccmEditorConfigAnswerLight);},validate:function(self){var valid=true;this.$element.find('.answerLight').each(function(){$.core.$fake[0]=this;if($.core.$fake.ccmEditorIsEmpty())
{$.core.$fake.showInputError($.contents.langs[$.contents.lang].TOP_MIN_ANSWER);valid=false;}
else
{$.core.$fake.hideInputError();}});return valid;}}})(jQuery);(function($)
{$.contents.fields.title={name:'genericTitle',init:function()
{var self=this;this.$element.find('.title').trigger('focus',true).bind('keyup',function(){self.$ccmPaginator&&self.$ccmPaginator.trigger('updateItemContent',[self.config.id,$(this).val()]);}).keydown(function(event){var l=$(this).val().length;if((event.which||event.keyCode)!=8&&(event.which||event.keyCode)!=46&&(event.which||event.keyCode)!=37&&(event.which||event.keyCode)!=39&&(event.which||event.keyCode)!=35&&(event.which||event.keyCode)!=36){if(l>=self.title_max_length){self.show_error('title',self.title_max_length+$.contents.langs[$.contents.lang].COMMON_FORM_CHAR_MAX);return false;}}
if(l<=self.title_max_length){self.hide_error('title');}}).change(function(){var l=$(this).val().length;if(l>self.title_max_length){$(this).val($(this).val().substring(0,self.title_max_length));}
if(l<=self.title_max_length){self.hide_error('title');}}).blur(function(){self.hide_error('title');});},validate:function(self)
{var
$title=this.$element.find('.title'),title=$title.val();if(title===''||title==$title.data('default'))
{$title.showInputError($.contents.langs[$.contents.lang].COMMON_FORM_FIELD_FILLED);return false;}
$title.hideInputError();return true;}}})(jQuery);(function($){$.contentTop={instanceArray:{},defaultOptions:{speed:250,contentFormOptions:{ccmEditorConfigAnswerLight:{actions:['image','url'],discreteToolbar:true,history:false,magicLinks:{support:false},defaultValue:true}}}};$.fn.contentTopCommon=function(options)
{options=$.extend({},$.contentTop.defaultOptions,options);return this;};$.fn.contentTopForm=function(options)
{options=$.extend(true,{},$.contentTop.defaultOptions,options);$.contentForm.defaultConfig.ccmEditorConfig.defaultValue=true;$.evalOptions(options.contentFormOptions.ccmEditorConfigAnswerLight.image);return this.each(function(){var $self=$(this);$self.find('#content').contentForm($.extend(true,{},{cnt:[{$reference:$self.find('.content'),getContent:function(form,instance)
{var $this=$(this);return $.extend({title:form.find('.title').val(),content:$this.ccmEditorIsEmpty()?'':$this.html(),content_type:1,module_id:8,tags_list:form.find('.tags').val()},$.contents.confs.geolocation.cnt[0].isPresent.apply(this,arguments)?$.contents.confs.geolocation.cnt[0].getContent.apply(this,arguments):{});},cnt:[{$reference:function(form){return $(this).find('.answerLight');},getContent:function(){return{content:$(this).html(),content_type:2};}}]}],fields:['title','content','tags',$.contents.fields.answerLight],mode:$.contents.type.INSERT},options.contentFormOptions));$self.find('.addTopAnswerLight').bind('click',function(e){var $self=$(this);$self.siblings('.answerLightTemplate:first').clone().removeClass('addTopAnswerLight').show().insertBefore($self).find('.edito').addClass('answerLight').ccmEditor(options.contentFormOptions.ccmEditorConfigAnswerLight).focus();});});};$.fn.contentTopView=function(options)
{options=$.extend({},$.contentTop.defaultOptions,options);return this.each(function()
{var
$self=$(this),$first=$self.find('.totalBar:first'),id=parseInt($first.attr('data-id'),10);typeof $.contentTop.instanceArray[id]=='undefined'&&($.contentTop.instanceArray[id]={total:parseInt($first.attr('data-total'),10),max:0})&&$self.find('.totalBar').each(function(){var dataValue=parseInt($(this).attr('data-value'));if(dataValue>$.contentTop.instanceArray[id].max){$.contentTop.instanceArray[id].max=dataValue;}});$self.find('div.content').each(function()
{var $this,$cmtsZone,$cmts,initNodeScope=function($node)
{$this=$node;$cmtsZone=$this.find('div.toggleCmt');$cmts=$cmtsZone.find('.comments');},tryBindForm=function($node)
{if(!$node.hasClass('formBinded'))
{$node.find('.newComment form').addClass('formBinded').contentForm({fields:['content'],ccmEditorConfig:$.contentForm.defaultConfig.ccmEditorConfig,success:function(data,target)
{$cmts.append($(data.str.comment).slideDown('slow'));this.enable();this.$element.find('.content').html('').blur();$this.find('.nbComent').trigger('counterChange',{value:'+1'});}});}},unbindForm=function($node)
{$node.removeClass('formBinded').find('.newComment form').contentFormRemove();};initNodeScope($(this));if(!$this.hasClass('contentBinded'))
{tryBindForm($cmtsZone);$this.addClass('contentBinded').bind('helpfulChange',function(e,typeAction){var $this=$(this);if((typeof(typeAction)!="undefined")&&((typeAction=='+1')||(typeAction=='-1'))){$this.find('div.totalBar').trigger('counterChange',{value:typeAction});}
if(typeAction=='+1')
{$cmtsZone.find('.newComment').slideDown('slow');}
else
{$cmtsZone.find('.newComment').slideUp('slow');}});$this.find('.totalBar').bind('click',function(){$cmtsZone.toggle('blind');}).each(function(i)
{var $this=$(this).counter({getValue:function(){return parseInt(this.attr('data-value'),10);},beforeChange:function(valueBefore,valueAfter,options)
{$.contentTop.instanceArray[id].total+=(valueAfter-valueBefore);var $this=$(this),ratio=0;if(valueAfter>=$.contentTop.instanceArray[id].max){ratio=85;$.contentTop.instanceArray[id].max=valueAfter;}else{ratio=valueAfter*85/$.contentTop.instanceArray[id].max}
$(this).attr('data-value',valueAfter);$this.find('.nbVote').trigger('counterChange',{value:valueAfter});$this.find('.bar').trigger('counterChange',{value:ratio});$self.find('.totalBar').trigger('refreshBars');}}).bind('refreshBars',function()
{var $this=$(this),ratio=0;var valueAfter=parseInt($this.attr('data-value'),10);if(valueAfter>=$.contentTop.instanceArray[id].max){ratio=85;$.contentTop.instanceArray[id].max=valueAfter;}else{ratio=valueAfter*85/$.contentTop.instanceArray[id].max}
isNaN(ratio)&&(ratio=0);$this.find('.bar').trigger('counterChange',{value:ratio});});$this.find('.nbVote').counter({limit:{min:0}}).bind('counterChanged',function(e,v1,v2)
{var $this=$(this),$current=$this.closest('.content').parent('.line'),getSibling,changeSibling,moveNode=function($node,$dest,mode)
{unbindForm($cmtsZone);var $clone=$node.clone(true,true).hide();switch(mode){case'after':$clone.insertAfter($dest);break;case'before':$clone.insertBefore($dest);break;case'append':$clone.appendTo($dest);break;case'prepend':$clone.prependTo($dest);break;}
$clone.slideDown(250);initNodeScope($clone);tryBindForm($cmtsZone);$node.slideUp(250,function(){$(this).remove();});},moveMode='after',moveFirstOrLast="prepend";if(v1<v2)
{getSibling=function($node){var $ret=$node.prev();while($ret.length>0&&$ret[0].tagName=='A'){$ret=$ret.prev();}
return $ret;};changeSibling=function($current,$other)
{return $current.find('.nbVote').counterValue()>$other.find('.nbVote').counterValue();};moveMode='after';moveFirstOrLast="prepend";}
else
{getSibling=function($node){var $ret=$node.next();while($ret.length>0&&$ret[0].tagName=='A'){$ret=$ret.next();}
return $ret;};changeSibling=function($current,$other)
{return $current.find('.nbVote').counterValue()<$other.find('.nbVote').counterValue();};moveMode='before';moveFirstOrLast="append";}
setTimeout(function()
{var
$other=getSibling($current),moved=false,top=1,prevVote=null;while($other.length===1&&changeSibling($current,$other))
{moved=true;$other=getSibling($other);}
moved&&typeof $other!='undefined'&&$other.length>0&&moveNode($current,$other,moveMode);moved&&$other.length==0&&moveNode($current,$current.parent(),moveFirstOrLast);setTimeout(function()
{$self.find('.content').not('.deleted').find('.icoTaupe').each(function(i)
{var
$this=$(this),$content=$this.closest('.contentBinded'),nbVote=parseInt($content.find('.nbVote').counterValue());prevVote===null&&(prevVote=nbVote);prevVote>=nbVote&&(top=i+1,prevVote=nbVote);$this.html(top);if(nbVote>0)
{if(top<=3){$this.removeClass('icoClass icoClassEmpty').addClass('icoClassTop');$content.find('.bar').removeClass('greyBar').addClass('redBar');}
else{$this.removeClass('icoClassTop icoClassEmpty').addClass('icoClass');$content.find('.bar').removeClass('redBar').addClass('greyBar');}}
else{$this.removeClass('icoClassTop icoClass').addClass('icoClassEmpty');}});},300);},1500);});$this.find('.bar').counter({getValue:function(){return 0;},limit:{min:0},beforeChange:function(valueBefore,valueAfter,options)
{$.core.$fake[0]=this;$(this).animate({width:(options.value<=100?options.value:100)+'%'},options.speed);}});$this.find('.nbComent').counter({limit:{min:0}});});}});});};$(document).bind('contentsLoaded',function(){$.core.tryOn('services.contents.content.top.common.start',function(){$data.services.contents.content.top.common.start===true&&typeof $data.services.contents.content.top.common.selector=='string'&&$data.services.contents.content.top.common.selector!==''&&$($data.services.contents.content.top.common.selector).contentTopCommon();});$.core.tryOn('services.contents.content.top.view.start',function(){$data.services.contents.content.top.view.start===true&&typeof $data.services.contents.content.top.view.selector=='string'&&$data.services.contents.content.top.view.selector!==''&&$($data.services.contents.content.top.view.selector).contentTopView();});$.core.tryOn('services.contents.content.top.form.start',function(){$data.services.contents.content.top.form.start===true&&typeof $data.services.contents.content.top.form.selector=='string'&&$data.services.contents.content.top.form.selector!==''&&$($data.services.contents.content.top.form.selector).contentTopForm($data.services.contents.content.top.form.options);});});})(jQuery);(function($){$.tagsForm={config:{ccmeditorConf:{actions:['bold','italic'],discreteToolbar:false,history:true,defaultValue:true,magicLinks:{support:false}}}},$.fn.tagsForm=function(config)
{$.extend(true,$.tagsForm.config,config);return this.each(function(){var $self=$(this);$self.find('.modify').remoteContentForm({contentFormConf:{cnt:[{$reference:function(){return $self.find('.desc');},getContent:function(form){var $this=$(this);return{id:$self.find('[name=id]').val(),desc:$this.html()};}}],fields:[{name:'desc',$nodes:$self.find('.desc'),init:function(conf){$self.find('.desc').ccmEditor($.tagsForm.config.ccmeditorConf);$('div#groupDescForm').addClass('editing');},validate:function(conf){var form=this,valid=true;conf.$nodes.each(function(){$.core.$fake[0]=this;var description=$.core.$fake.html();description=description.replace(/<\/?(?!\!)[^>]*>/gi,'');if(description===''){$.core.$fake.showInputError('empty field');valid=false;}else{if(description.length>200){$.core.$fake.showInputError('char max');valid=false;}else{$.core.$fake.hideInputError();}}});return valid;}}],mode:$.contents.mode.UPDATE},url:$self.attr('url')});});};$(document).bind('contentsLoaded',function(){$.core.tryOn('services.contents.tag.common.start',function(){$data.services.contents.tag.common.start===true&&typeof $data.services.contents.tag.common.selector=='string'&&$data.services.contents.tag.common.selector!==''&&$($data.services.contents.tag.common.selector).tagsForm($data.services.contents.tag.common.config);});});})(jQuery);(function($){$.tagCloud={defaultConfig:{url:{},beforeTemplate:'<a class="buttonS-T mar5 validAll"><span class="icoValid-2"></span>&nbsp;$l{TAG_CLOUD_ACCEPT_ALL}</a>',template:'<a class="tag tagS mar5 valid" href="javascript:void(0);" title="$l{TAG_CLOUD_ACCEPT}">'
+'${name}'
+'<span class="marL5 valid icoValid-3" title="$l{TAG_CLOUD_ACCEPT}" href="javascript:void(0);"></span>'
+'<span class="marL5 cancel icoCancel-3" title="$l{TAG_CLOUD_REFUSE}" href="javascript:void(0);"></span>'
+'</a>',selectorAcceptAllTag:'.validAll',selectorAcceptTag:'.valid',selectorRejectTag:'.cancel',paramName:'listWords',paramNameExclude:'excludeWords',deleteTagOnValidate:true,onTagRendered:function(tags,excludedTags,config,$clientNodes){},onSortStart:function(e,ui){},localCache:false,sortable:false,sortableOptions:{items:'.tag'},parseExcludeData:function(data){var ret=[],k;for(k in data)
{ret.push(data[k].name);}
return ret.join(',');},parseTagSended:function(tag)
{!tag.order&&(tag.order=0);tag.display=true;tag.validated=true;return tag;},renderTag:function(tag,config){return $($.tagCloud.getTemplate(config.template,{'name':tag.name}));}},getTagByName:function(name,tags)
{for(var i in tags)
{if(tags[i].name==name){return tags[i];}}
return false;},removeTagByName:function(name,tags)
{for(var i in tags)
{if(tags[i].name==name){delete tags[i];break;}}
return tags;}};$.extend($.tagCloud,$.microTemplate);$.fn.tagCloud=function(config)
{config=$.extend(true,{},$.tagCloud.defaultConfig,config);$.tagCloud.microTemplateInit();return this.each(function()
{var
$clientNodes=[],tags=[],excludedTags=false,triggerToClients=function(eventName,options)
{for(var i=0;i<$clientNodes.length;++i)
{$clientNodes[i].trigger(eventName,options);}},$self=$(this).bind('replaceItem addItem',function(e,data)
{var dataObject={};switch(typeof data)
{case'object':dataObject=data;break;default:case'string':dataObject[config.paramName]=data;}
config.paramNameExclude&&excludedTags&&(dataObject[config.paramNameExclude]=config.parseExcludeData(excludedTags));data&&$.ajax({type:'POST',async:true,data:dataObject,url:config.url(),localCache:config.localCache,dataType:'json',success:function(json)
{if(json)
{tags=json;$self.trigger('renderTags');}}});}).bind('renderTags',function()
{var $this=$(this),i;$this.empty();!$.isEmptyObject(tags)&&$this.append($.tagCloud.getTemplate(config.beforeTemplate),{});for(i in tags)
{$this.append(config.renderTag.call($this,tags[i],config));}
config.onTagRendered.call(this,tags,excludedTags,config,$clientNodes);}).bind('removeItem',function(e,tagName)
{!excludedTags&&(excludedTags=[]);var tag=$.tagCloud.getTagByName(tagName,tags);if(tag)
{excludedTags.push(tag);tags=$.tagCloud.removeTagByName(tagName,tags);$self.trigger('renderTags');}}).bind('sortstart',config.onSortStart).delegate(config.selectorRejectTag,'click',function(e)
{e.stopPropagation();$self.trigger('removeItem',[$.trim($(e.target).closest(config.selectorAcceptTag).text())]);}).delegate(config.selectorAcceptTag,'click',function()
{var
$this=$(this),name=$.trim($this.hasClass('.tag')?$this.text():$this.closest('.tag').text()),tag=$.tagCloud.getTagByName(name,tags);if(tag){tag=config.parseTagSended(tag);triggerToClients('addTag',tag);$this.trigger('renderTags');config.deleteTagOnValidate&&$self.trigger('removeItem',[tag.name]);}}).delegate(config.selectorAcceptAllTag,'click',function()
{var
$this=$(this),tag,i;for(i in tags)
{triggerToClients('addTag',config.parseTagSended(tags[i]));config.deleteTagOnValidate&&$self.trigger('removeItem',[tags[i].name]);}
$this.trigger('renderTags');}).bind('registerClientNode',function(e,$clientNode){$clientNodes.push($clientNode);}).bind('transfert',function(e,$clientNode,name,order)
{var tag=$.tagCloud.getTagByName(name,tags);if(tag){tag.order=order;$clientNode.trigger('addTag',[config.parseTagSended(tag)]);config.deleteTagOnValidate&&$self.trigger('removeItem',[name]);}});config.sortable&&$self.sortable(config.sortableOptions);});};})(jQuery);(function($){$.ccmPaginator=function(options){options=$.extend(true,{getController:function(){return[$data.common.baseUrl,'/c/xhr_updateposition'].join('');},updateMode:'incremental',templateList:'<ol/>',templateItem:'<li/>',templateLink:'<a/>',templateImg:'<img/>',templateBody:'<div/>',templateAdd:'<li class="add"><a href="javascript:void(0);">+</a></li>',onAdd:function(e){console.log('defaultAdd function');},itemMarker:'pageItem',dataName:'paginatorData',data:[],titleLength:20,overFlowChar:'&hellip;',tipsyOptions:{gravity:$.fn.tipsy.autoNS,delayIn:100,fade:false,opacity:0.75},sortable:true,firstNotSortable:true,sortableOptions:{},orderedItems:[]},options);var $this=$(options.templateList),i,item,$item,$href,$itemBody,_trimTitle=function(title){return title.substring(0,options.titleLength)+(title.length>options.titleLength?options.overFlowChar:'');};for(i=0;i<options.data.length;++i)
{item=options.data[i];$item=$(options.templateItem);if(i===0&&options.firstNotSortable){$item.bind('dragstart',function(e){e.preventDefault();});}else{$item.addClass(options.itemMarker);}
(item.href&&($href=$(options.templateLink).attr('href',item.href)))||($href=false);if(item.src){$itemBody=$(options.templateImg).attr('src',item.src);}
else{$itemBody=$(options.templateBody).html(item.title?_trimTitle(item.title):i);}
item.title&&$item.attr('title',item.title).tipsy(options.tipsyOptions);item.data&&$item.data(options.dataName,item.data);$href&&$item.append($href);$href&&$itemBody&&$href.append($itemBody);$this.append($item);}
$this.data(options.dataName,options).append($(options.templateAdd).bind('click',options.onAdd));$this.bind('updateItemContent',function(e,id,title){$this.find('.'+options.itemMarker).each(function(){$.core.$fake[0]=this;$.core.$fake.data(options.dataName).id==id&&$.core.$fake.find(options.templateBody.replace(/\W*/gi,'')).html(_trimTitle(title));});});options.sortable&&$this.sortable($.extend(options.sortableOptions,{items:'.'+options.itemMarker})).bind('sortupdate',function(e,ui){$('.tipsy').remove();switch(options.updateMode)
{case'store':var orderedItems=[];$this.find('.'+options.itemMarker).each(function(i)
{$.core.$fake[0]=this;orderedItems.push($.core.$fake.data(options.dataName).id);});$this.data(options.dataName,$.extend($this.data(options.dataName),{orderedItems:orderedItems}));break;default:case'incremental':var ret={prev:null,id:null,pos:null};$this.find('.'+options.itemMarker).each(function(i)
{$.core.$fake[0]=this;if($.core.$fake[0]==ui.item[0])
{ret.id=$.core.$fake.data(options.dataName).id;ret.pos=i;return false;}
ret.prev=$.core.$fake.data(options.dataName).id;});$.ajax({url:options.getController(),dataType:"json",localCache:false,data:ret});break;}});return $this;};})(jQuery);(function($)
{$.linkCrawler={defaultOptions:{getSource:function(){return[$data.common.baseUrl,'/c/suggest_attachment'].join('');},behaveInput:false,delayInput:400,completeSearch:false,groupName:'default',beforeCrawl:function(){return true;}},clientsNodes:{},currentXhr:null,submit:function(e,link,groupName)
{for(var key in $.linkCrawler.clientsNodes[groupName])
{if(!$.linkCrawler.clientsNodes[groupName].hasOwnProperty(key)){continue;}
$.linkCrawler.clientsNodes[groupName][key].trigger('crawlerCrawling',[e]).data('crawlerResult','crawling');}
$.ajaxSettings.discrete=true;$.linkCrawler.currentXhr=$.ajax({url:e.data.options.getSource(),cache:true,dataType:"json",localCache:false,global:false,data:{url:link},success:function(data){if(!data){return;}
for(var key in $.linkCrawler.clientsNodes[groupName])
{if(!$.linkCrawler.clientsNodes[groupName].hasOwnProperty(key)){continue;}
if(typeof data.result!='undefined'&&(''+data.http_response_code).substr(0,1)in{2:1,3:1})
{switch(data.result)
{case'duplicated':$.linkCrawler.clientsNodes[groupName][key].trigger('crawlerDuplicated',[data,e]).data('crawlerResult','duplicated');break;case'new':$.linkCrawler.clientsNodes[groupName][key].trigger('crawlerNew',[data,e]).data('crawlerResult','new');break;}}
else{$.linkCrawler.clientsNodes[groupName][key].trigger('crawlerError',[data,e]).data('crawlerResult','error');}}}});}};$.fn.addLinkCrawler=function(options)
{options=$.extend({},$.linkCrawler.defaultOptions,options);return this.each(function()
{var $this=$(this).bind('crawlerSubmit',{options:options},function(e,link){$.linkCrawler.submit(e,link,options.groupName);});options.behaveInput&&$this.typeUrl({delay:options.delayInput,completeSearch:options.completeSearch}).bind('typeUrlValid',function(e,url)
{e.stopPropagation();$.linkCrawler.currentXhr!==null&&$.linkCrawler.currentXhr.abort();options.beforeCrawl.call(this,e,url)&&$this.trigger('crawlerSubmit',[url]).trigger('urlValid');}).bind('typeUrlInvalid',function(e,url)
{$this.trigger('urlInvalid');});typeof $.linkCrawler.clientsNodes[options.groupName]=='undefined'&&($.linkCrawler.clientsNodes[options.groupName]=[]);$.linkCrawler.clientsNodes[options.groupName].push($this);});};})(jQuery);(function($)
{$.fn.imageSelector=function(options)
{options=$.extend({displayPositionTotal:true,imgStyle:'display:none;max-width:100px;max-height:100px;',$selectorContainer:$('<div></div>')},options);return this.each(function()
{var $this=$(this),$sel,list=$this.find('input[type=radio]'),container=$this,selected=0,sliding=false,previous=function(){if(sliding){return;}
if(selected===0)selected=list.length;selected--;select(selected);},next=function(){if(sliding){return;}
if(selected===list.length-1)selected=-1;selected++;select(selected);},select=function(i){$sel&&$sel.children('.position').html(i+1);$(list[i]).attr("checked","checked");var $ctn=$(container),$img=$ctn.find('img');if($img.length>=1)
{sliding=true;var pos=$img.position();$img.stop().css({position:"relative",top:0,left:0}).after($('<img src="'+$(list[i]).attr('value')+'" style="'+options.imgStyle+'">').css({position:"absolute",top:pos.top,left:pos.left}).fadeIn(250,function(){$(this).css({position:'inherit',top:'auto',left:'auto'});})).fadeOut(250,function(){$(this).remove();sliding=false;});}
else{$('<img src="'+$(list[i]).attr('value')+'" style="'+options.imgStyle+'">').prependTo($ctn).fadeIn();}};$(list).css('display','none');select(0);(list.length>1)&&($sel=options.$selectorContainer.append($('<a href="javascript:void(0);" class="icoUp"></a>').bind('click',function(){previous();}),$('<a href="javascript:void(0);" class="icoDown"></a>').bind('click',function(){next();}),options.displayPositionTotal&&'&nbsp;&nbsp;<span class="position ft85">1</span>/<span class="total ft75">'+list.length+'</span>').prependTo($this));});};$.linkDisplayer={options:{},templateDisplay:['<div class="box1 pad10 line" style="min-height:110px">','<input type="hidden" name="url_final" value="${final_url}">','<input type="hidden" name="url_title" value="${title}">','<input type="hidden" name="player_height" value="${player_height}">','<input type="hidden" name="player_width" value="${player_width}">','<input type="hidden" name="player_url" value="${player_url}">','<input type="hidden" name="player_html" value="${player_html}">','<input type="hidden" name="player_provider" value="${player_provider}">','<input type="hidden" name="parentx" value="${parentx}" class="parentx">','<div class="description lastBloc">','<a target="_blank" href="${final_url}">${final_url}</a>','<h5 data-destination="url_title" maxLength="255">${title}</h5>','<p data-destination="url_resume" maxLength="1024">${resume}</p>','</div>','<div class="titleError txtR" style="color:#E01616;display:none;">$l{NO_TITLE}</div>','</div>'].join(''),templateImage:['<div class="bloc size1of4 txtC marR5"></div>'].join(''),templateImageReadOnly:['<img src="${imgSrc}" style="max-width:100px;max-height:100px;">'].join(''),templateImageRadio:['<input type=radio name="url_image_src" value="${imgSrc}">'].join(''),templateNoImage:['<div class="txtC">','<input type="checkbox" name="url_no_image"> $l{NO_IMAGE}','</div>'].join(''),templateDuplicate:'<div class="marB20 infoMsg">$l{DUPLICATE_TEXT} <a href="${content_url}">$l{DUPLICATE_LINK}</a></div>',templateCmts:'<div class="pad10 line">${HEAD_CMTS} ${cmts} ${FOOT_CMTS}</div>',templateError:'<div class="marB20 infoMsg error"></span>$l{DUPLICATE_ERROR}</div>',templateLinkMore:'<a href="${content_url}" class="floatRight">${MORE}</a>',templateImgContainer:'<div class="pad5"></div>',templateLoading:'<div class="box1 pad10 line"><img alt="loading" src="/skin/common/img/loadingS.gif" class="inlineBlock" style="margin-left:250px"></div>',generateDisplay:function(data,newUrl)
{var $ret=$(this.getTemplate(this.templateDisplay,data));if(data.images.length>0)
{if(data.result=='new')
{($radio=$(this.templateImgContainer));for(var image in data.images){$radio.append($(this.getTemplate(this.templateImageRadio,{imgSrc:data.images[image]})));}
$img=$(this.getTemplate(this.templateImage)).append($($radio).imageSelector($.extend({$select:$ret},$.linkDisplayer.options))).append($(this.getTemplate(this.templateNoImage)));}else{$img=$(this.getTemplate(this.templateImage)).append($(this.getTemplate(this.templateImageReadOnly,{imgSrc:data.images[0]})));}
var $resume=$('<div name=url_resume/>').html(data.resume);$ret.prepend($img).find('p').replaceWith($('<div class="line"/>').html($('<div class="input"/>').html($resume)));$resume.ccmEditor({actions:['italic','bold','underline','code'],discreteToolbar:true,history:true,defaultValue:true,magicLinks:{support:false}});}
return $ret.fadeIn();},generateDuplicated:function(data)
{return $(this.getTemplate(this.templateDuplicate,data)).effect('pulsate',{times:1},1000);},generateError:function(data)
{return $(this.getTemplate(this.templateError,data)).effect('pulsate',{times:1},1000);},generateLoading:function(data)
{return $(this.getTemplate(this.templateLoading,data));},generateCmts:function(data)
{var nbDiff=data.nbcmts-data.nbcmtsdisp;$.extend(data,{nbDiff:nbDiff});return $(this.getTemplate(this.templateCmts,$.extend({HEAD_CMTS:this.getTemplate(this.langs[this.lang][(data.nbcmtsdisp>1?'HEAD_CMTS':'HEAD_CMT')],data),FOOT_CMTS:(nbDiff<1?'':this.getTemplate(this.templateLinkMore,$.extend(data,{MORE:this.getTemplate(this.langs[this.lang][(nbDiff>1?'FOOT_CMTS':'FOOT_CMT')],data)})))},data))).slideDown();},applyEdition:function($this)
{$this.find('[data-destination]').each(function()
{$.core.$fake[0]=this;var name=$.core.$fake.attr('data-destination'),length=$.core.$fake.attr('maxLength');if(name!='url_title')return;$this.find('input[name='+name+']').remove();$.core.$fake.after($('<textarea></textearea>').val($.core.$fake.text().substr(0,length)).attr('maxLength',length).maxLength().addClass('highlight').css({height:$.core.$fake.height()+5,minHeight:20,fontWeight:(name=='url_title'?'bold':'')}).attr('name',name).bind('focus',function(){$(this).removeClass('highlight').addClass('edit');}).bind('blur',function(){$(this).removeClass('edit').addClass('highlight');})).remove();});}};$.extend($.linkDisplayer,$.microTemplate);$.linkDisplayer.microTemplateInit();$.fn.linkDisplayer=function(options)
{options=$.extend({$commentNode:null,$commentZone:null,$allowedInput:false,displayMessageOnDuplicated:true},options);return this.each(function()
{var $this=$(this).bind('crawlerDuplicated',function(e,data,originalEvent)
{if(!options.$allowedInput||(typeof originalEvent!='undefined'&&originalEvent.target==options.$allowedInput[0]))
{$this.empty().append($.linkDisplayer.generateDisplay.apply($.linkDisplayer,[data]))&&options.displayMessageOnDuplicated&&$this.append($.linkDisplayer.generateDuplicated.apply($.linkDisplayer,[data]));options.$commentNode&&data.cmts&&options.$commentNode.length>=1&&options.$commentNode.empty().append($.linkDisplayer.generateCmts.apply($.linkDisplayer,[data]));options.$commentZone&&options.$commentZone.length>=1&&options.$commentZone.slideDown();}}).bind('crawlerNew',function(e,data,originalEvent)
{if(!options.$allowedInput||(typeof originalEvent!='undefined'&&originalEvent.target==options.$allowedInput[0]))
{options.$commentNode&&options.$commentNode.length>=1&&options.$commentNode.empty();$this.empty().append($.linkDisplayer.generateDisplay.apply($.linkDisplayer,[data]));$.linkDisplayer.applyEdition($this);options.$commentZone&&options.$commentZone.length>=1&&options.$commentZone.slideDown();}}).bind('crawlerError',function(e,data,originalEvent)
{if(!options.$allowedInput||(typeof originalEvent!='undefined'&&originalEvent.target==options.$allowedInput[0]))
{options.$commentNode&&options.$commentNode.length>=1&&options.$commentNode.empty();$this.empty().append($.linkDisplayer.generateError.apply($.linkDisplayer,[data]));options.$commentZone&&options.$commentZone.length>=1&&options.$commentZone.slideUp();}}).bind('crawlerCrawling',function(e,originalEvent)
{if(!options.$allowedInput||(typeof originalEvent!='undefined'&&originalEvent.target==options.$allowedInput[0]))
{options.$commentNode&&options.$commentNode.length>=1&&options.$commentNode.empty();$this.empty().append($.linkDisplayer.generateLoading.apply($.linkDisplayer));options.$commentZone&&options.$commentZone.length>=1&&options.$commentZone.slideUp();}});});};})(jQuery);(function($){'use strict';$.fn.ajaxOn=function(eventName,handler,options)
{options=$.extend(true,{},$.fn.ajaxOn.defaultOptions,options);handler=handler||function(){};return this.bind(eventName,function()
{var $this=$(this),args=[options],m=arguments.length,i=0;for(;i<m;++i){args.push(arguments[i]);}
$.ajax($.extend({url:$this.attr(options.dataKeys.url),data:$.extend(true,{},$.parseJSON($this.attr(options.dataKeys.params)),arguments[options.dataIndex]),success:function()
{$this.trigger(''+eventName+"Success",args);handler.apply($this,args);}},options.ajaxOptions));});};$.fn.ajaxOn.defaultOptions={dataKeys:{url:'data-url',params:'data-params'},dataIndex:1,ajaxOptions:{dataType:'json'}};}(jQuery));;if(window.jQuery)(function($){if($.browser.msie)try{document.execCommand("BackgroundImageCache",false,true)}catch(e){};$.fn.rating=function(options){if(this.length==0)return this;if(typeof arguments[0]=='string'){if(this.length>1){var args=arguments;return this.each(function(){$.fn.rating.apply($(this),args);});};$.fn.rating[arguments[0]].apply(this,$.makeArray(arguments).slice(1)||[]);return this;};var options=$.extend({},$.fn.rating.options,options||{});$.fn.rating.calls++;this.not('.star-rating-applied').addClass('star-rating-applied').each(function(){var control,input=$(this),eid=(this.name||'unnamed-rating').replace(/\[|\]/g,'_').replace(/^\_+|\_+$/g,''),context=$(this.form||document.body),$eventTarget=options.eventTargetSelector?input.closest(options.eventTargetSelector):false,raters=context.data('rating');if(!raters||raters.call!=$.fn.rating.calls)raters={count:0,call:$.fn.rating.calls};var rater=raters[eid];if(rater)control=rater.data('rating');if(rater&&control)
control.count++;else{control=$.extend({},options||{},(function(options)
{return!options?{}:$.parseJSON(options)}(input.attr('data-ratingOptions'))),{count:0,stars:[],inputs:[]});control.serial=raters.count++;rater=$('<span class="star-rating-control"/>');input.before(rater);rater.addClass('rating-to-be-drawn');if(input.attr('disabled')||input.hasClass('disabled'))control.readOnly=true;if(input.hasClass('required'))control.required=true;options.cancel!==false&&rater.append(control.cancel=$('<div class="rating-cancel"><a title="'+control.cancel+'">'+control.cancelValue+'</a></div>').mouseover(function(){$(this).rating('drain');$(this).addClass('star-rating-hover');}).mouseout(function(){$(this).rating('draw');$(this).removeClass('star-rating-hover');}).click(function(){$(this).rating('select');}).data('rating',control));};var star=$('<div class="star-rating rater-'+control.serial+'"><a title="'+(input.attr('title')||input.attr('original-title')||input.val())+'">'+input.val()+'</a></div>');rater.append(star);if(this.id)star.attr('id',this.id);if(this.className)star.addClass(this.className);if(control.half)control.split=2;if(typeof control.split=='number'&&control.split>0){var stw=control.starWidth||($.fn.width?star.width():0),spi=(control.count%control.split),spw=Math.floor(stw/control.split);star.width(spw).find('a').css({'margin-left':'-'+(spi*spw)+'px'})};if(control.readOnly)
star.addClass('star-rating-readonly');else
star.addClass('star-rating-live').mouseover(function(){$(this).rating('fill');$(this).rating('focus');}).mouseout(function(){$(this).rating('draw');$(this).rating('blur');}).click(function(){var $this=$(this);$eventTarget&&$eventTarget.trigger('ratingClick',[{value:$this.data('rating.input').val()},$this]);$this.rating('select');});if(this.checked)control.current=star;if(this.nodeName=="A"){if($(this).hasClass('selected'))
control.current=star;};input.hide();input.change(function(){$(this).rating('select');});star.data('rating.input',input.data('rating.star',star));control.stars[control.stars.length]=star[0];control.inputs[control.inputs.length]=input[0];control.rater=raters[eid]=rater;control.context=context;input.data('rating',control);rater.data('rating',control);star.data('rating',control);context.data('rating',raters);});$('.rating-to-be-drawn').rating('draw').removeClass('rating-to-be-drawn');return this;};$.extend($.fn.rating,{calls:0,focus:function(){var control=this.data('rating');if(!control)return this;if(!control.focus)return this;var input=$(this).data('rating.input')||$(this.tagName=='INPUT'?this:null);if(control.focus)control.focus.apply(input[0],[input.val(),$('a',input.data('rating.star'))[0]]);},blur:function(){var control=this.data('rating');if(!control)return this;if(!control.blur)return this;var input=$(this).data('rating.input')||$(this.tagName=='INPUT'?this:null);if(control.blur)control.blur.apply(input[0],[input.val(),$('a',input.data('rating.star'))[0]]);},fill:function(){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;this.rating('drain');this.prevAll().andSelf().filter('.rater-'+control.serial).addClass('star-rating-hover');},drain:function(){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;control.rater.children().filter('.rater-'+control.serial).removeClass('star-rating-on').removeClass('star-rating-hover');},draw:function(){var control=this.data('rating');if(!control)return this;this.rating('drain');if(control.current){control.current.data('rating.input').attr('checked','checked');control.current.prevAll().andSelf().filter('.rater-'+control.serial).addClass('star-rating-on');}
else
$(control.inputs).removeAttr('checked');control.cancel!==false&&control.cancel[control.readOnly||control.required?'hide':'show']();this.siblings()[control.readOnly?'addClass':'removeClass']('star-rating-readonly');},select:function(value,wantCallBack){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;control.current=null;if(typeof value!='undefined'){if(typeof value=='number')
return $(control.stars[value]).rating('select',undefined,wantCallBack);if(typeof value=='string')
$.each(control.stars,function(){if($(this).data('rating.input').val()==value)$(this).rating('select',undefined,wantCallBack);});}
else
control.current=this[0].tagName=='INPUT'?this.data('rating.star'):(this.is('.rater-'+control.serial)?this:null);this.data('rating',control);this.rating('draw');var input=$(control.current?control.current.data('rating.input'):null);if((wantCallBack||wantCallBack==undefined)&&control.callback)control.callback.apply(input[0],[input.val(),$('a',control.current)[0]]);},readOnly:function(toggle,disable){var control=this.data('rating');if(!control)return this;control.readOnly=toggle||toggle==undefined?true:false;if(disable)$(control.inputs).attr("disabled","disabled");else	$(control.inputs).removeAttr("disabled");this.data('rating',control);this.rating('draw');},disable:function(){this.rating('readOnly',true,true);},enable:function(){this.rating('readOnly',false,false);}});$.fn.rating.options={cancel:false,cancelValue:'',split:0,starWidth:17,eventTargetSelector:false};}(jQuery));(function($,undefined){$.extend($.ui,{timepicker:{version:"0.2.9"}});var PROP_NAME='timepicker';var tpuuid=new Date().getTime();function Timepicker(){this.debug=true;this._curInst=null;this._isInline=false;this._disabledInputs=[];this._timepickerShowing=false;this._inDialog=false;this._dialogClass='ui-timepicker-dialog';this._mainDivId='ui-timepicker-div';this._inlineClass='ui-timepicker-inline';this._currentClass='ui-timepicker-current';this._dayOverClass='ui-timepicker-days-cell-over';this.regional=[];this.regional['']={hourText:'Hour',minuteText:'Minute',amPmText:['AM','PM'],closeButtonText:'Done',nowButtonText:'Now',deselectButtonText:'Deselect'};this._defaults={showOn:'focus',button:null,showAnim:'fadeIn',showOptions:{},appendText:'',beforeShow:null,onSelect:null,onClose:null,timeSeparator:':',periodSeparator:' ',showPeriod:false,showPeriodLabels:true,showLeadingZero:true,showMinutesLeadingZero:true,altField:'',defaultTime:'now',myPosition:'left top',atPosition:'left bottom',onHourShow:null,onMinuteShow:null,hours:{starts:0,ends:23},minutes:{starts:0,ends:55,interval:5},rows:4,showHours:true,showMinutes:true,optionalMinutes:false,showCloseButton:false,showNowButton:false,showDeselectButton:false};$.extend(this._defaults,this.regional['']);this.tpDiv=$('<div id="'+this._mainDivId+'" class="ui-timepicker ui-widget ui-helper-clearfix ui-corner-all " style="display: none"></div>');}
$.extend(Timepicker.prototype,{markerClassName:'hasTimepicker',log:function(){if(this.debug)
console.log.apply('',arguments);},_widgetTimepicker:function(){return this.tpDiv;},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this;},_attachTimepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute('time:'+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue);}catch(err){inlineSettings[attrName]=attrValue;}}}
var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=='div'||nodeName=='span');if(!target.id){this.uuid+=1;target.id='tp'+this.uuid;}
var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=='input'){this._connectTimepicker(target,inst);this._setTimeFromField(inst);}else if(inline){this._inlineTimepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,'\\\\$1');return{id:id,input:target,inline:inline,tpDiv:(!inline?this.tpDiv:$('<div class="'+this._inlineClass+' ui-timepicker ui-widget  ui-helper-clearfix"></div>'))};},_connectTimepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}
this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keyup(this._doKeyUp).bind("setData.timepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.timepicker",function(event,key){return this._get(inst,key);});$.data(target,PROP_NAME,inst);},_doKeyDown:function(event){var inst=$.timepicker._getInst(event.target);var handled=true;inst._keyEvent=true;if($.timepicker._timepickerShowing){switch(event.keyCode){case 9:$.timepicker._hideTimepicker();handled=false;break;case 13:$.timepicker._updateSelectedValue(inst);$.timepicker._hideTimepicker();return false;break;case 27:$.timepicker._hideTimepicker();break;default:handled=false;}}
else if(event.keyCode==36&&event.ctrlKey){$.timepicker._showTimepicker(this);}
else{handled=false;}
if(handled){event.preventDefault();event.stopPropagation();}},_doKeyUp:function(event){var inst=$.timepicker._getInst(event.target);$.timepicker._setTimeFromField(inst);$.timepicker._updateTimepicker(inst);},_attachments:function(input,inst){var appendText=this._get(inst,'appendText');var isRTL=this._get(inst,'isRTL');if(inst.append){inst.append.remove();}
if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+'</span>');input[isRTL?'before':'after'](inst.append);}
input.unbind('focus.timepicker',this._showTimepicker);if(inst.trigger){inst.trigger.remove();}
var showOn=this._get(inst,'showOn');if(showOn=='focus'||showOn=='both'){input.bind("focus.timepicker",this._showTimepicker);}
if(showOn=='button'||showOn=='both'){var button=this._get(inst,'button');$(button).bind("click.timepicker",function(){if($.timepicker._timepickerShowing&&$.timepicker._lastInput==input[0]){$.timepicker._hideTimepicker();}
else{$.timepicker._showTimepicker(input[0]);}
return false;});}},_inlineTimepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))
return;divSpan.addClass(this.markerClassName).append(inst.tpDiv).bind("setData.timepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.timepicker",function(event,key){return this._get(inst,key);});$.data(target,PROP_NAME,inst);this._setTimeFromField(inst);this._updateTimepicker(inst);inst.tpDiv.show();},_showTimepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!='input'){input=$('input',input.parentNode)[0];}
if($.timepicker._isDisabledTimepicker(input)||$.timepicker._lastInput==input){return;}
$.timepicker._hideTimepicker();var inst=$.timepicker._getInst(input);if($.timepicker._curInst&&$.timepicker._curInst!=inst){$.timepicker._curInst.tpDiv.stop(true,true);}
var beforeShow=$.timepicker._get(inst,'beforeShow');extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));inst.lastVal=null;$.timepicker._lastInput=input;$.timepicker._setTimeFromField(inst);if($.timepicker._inDialog){input.value='';}
if(!$.timepicker._pos){$.timepicker._pos=$.timepicker._findPos(input);$.timepicker._pos[1]+=input.offsetHeight;}
var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css('position')=='fixed';return!isFixed;});if(isFixed&&$.browser.opera){$.timepicker._pos[0]-=document.documentElement.scrollLeft;$.timepicker._pos[1]-=document.documentElement.scrollTop;}
var offset={left:$.timepicker._pos[0],top:$.timepicker._pos[1]};$.timepicker._pos=null;inst.tpDiv.css({position:'absolute',display:'block',top:'-1000px'});$.timepicker._updateTimepicker(inst);if((!inst.inline)&&(typeof $.ui.position=='object')){inst.tpDiv.position({of:inst.input,my:$.timepicker._get(inst,'myPosition'),at:$.timepicker._get(inst,'atPosition'),collision:'flip'});var offset=inst.tpDiv.offset();$.timepicker._pos=[offset.top,offset.left];}
inst._hoursClicked=false;inst._minutesClicked=false;offset=$.timepicker._checkOffset(inst,offset,isFixed);inst.tpDiv.css({position:($.timepicker._inDialog&&$.blockUI?'static':(isFixed?'fixed':'absolute')),display:'none',left:offset.left+'px',top:offset.top+'px'});if(!inst.inline){var showAnim=$.timepicker._get(inst,'showAnim');var duration=$.timepicker._get(inst,'duration');var postProcess=function(){$.timepicker._timepickerShowing=true;var borders=$.timepicker._getBorders(inst.tpDiv);inst.tpDiv.find('iframe.ui-timepicker-cover').css({left:-borders[0],top:-borders[1],width:inst.tpDiv.outerWidth(),height:inst.tpDiv.outerHeight()});};inst.tpDiv.css('zIndex',$.timepicker._getZIndex(input)+1);if($.effects&&$.effects[showAnim]){inst.tpDiv.show(showAnim,$.timepicker._get(inst,'showOptions'),duration,postProcess);}
else{inst.tpDiv[showAnim||'show']((showAnim?duration:null),postProcess);}
if(!showAnim||!duration){postProcess();}
if(inst.input.is(':visible')&&!inst.input.is(':disabled')){inst.input.focus();}
$.timepicker._curInst=inst;}},_getZIndex:function(target){var elem=$(target),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}},_updateTimepicker:function(inst){inst.tpDiv.empty().append(this._generateHTML(inst));this._rebindDialogEvents(inst);},_rebindDialogEvents:function(inst){var borders=$.timepicker._getBorders(inst.tpDiv),self=this;inst.tpDiv.find('iframe.ui-timepicker-cover').css({left:-borders[0],top:-borders[1],width:inst.tpDiv.outerWidth(),height:inst.tpDiv.outerHeight()}).end().find('.ui-timepicker-minute-cell').unbind().bind("click",{fromDoubleClick:false},$.proxy($.timepicker.selectMinutes,this)).bind("dblclick",{fromDoubleClick:true},$.proxy($.timepicker.selectMinutes,this)).end().find('.ui-timepicker-hour-cell').unbind().bind("click",{fromDoubleClick:false},$.proxy($.timepicker.selectHours,this)).bind("dblclick",{fromDoubleClick:true},$.proxy($.timepicker.selectHours,this)).end().find('.ui-timepicker td a').unbind().bind('mouseout',function(){$(this).removeClass('ui-state-hover');if(this.className.indexOf('ui-timepicker-prev')!=-1)$(this).removeClass('ui-timepicker-prev-hover');if(this.className.indexOf('ui-timepicker-next')!=-1)$(this).removeClass('ui-timepicker-next-hover');}).bind('mouseover',function(){if(!self._isDisabledTimepicker(inst.inline?inst.tpDiv.parent()[0]:inst.input[0])){$(this).parents('.ui-timepicker-calendar').find('a').removeClass('ui-state-hover');$(this).addClass('ui-state-hover');if(this.className.indexOf('ui-timepicker-prev')!=-1)$(this).addClass('ui-timepicker-prev-hover');if(this.className.indexOf('ui-timepicker-next')!=-1)$(this).addClass('ui-timepicker-next-hover');}}).end().find('.'+this._dayOverClass+' a').trigger('mouseover').end().find('.ui-timepicker-now').bind("click",function(e){$.timepicker.selectNow(e);}).end().find('.ui-timepicker-deselect').bind("click",function(e){$.timepicker.deselectTime(e);}).end().find('.ui-timepicker-close').bind("click",function(e){$.timepicker._hideTimepicker();}).end();},_generateHTML:function(inst){var h,m,row,col,html,hoursHtml,minutesHtml='',showPeriod=(this._get(inst,'showPeriod')==true),showPeriodLabels=(this._get(inst,'showPeriodLabels')==true),showLeadingZero=(this._get(inst,'showLeadingZero')==true),showHours=(this._get(inst,'showHours')==true),showMinutes=(this._get(inst,'showMinutes')==true),amPmText=this._get(inst,'amPmText'),rows=this._get(inst,'rows'),amRows=0,pmRows=0,amItems=0,pmItems=0,amFirstRow=0,pmFirstRow=0,hours=Array(),hours_options=this._get(inst,'hours'),hoursPerRow=null,hourCounter=0,hourLabel=this._get(inst,'hourText'),showCloseButton=this._get(inst,'showCloseButton'),closeButtonText=this._get(inst,'closeButtonText'),showNowButton=this._get(inst,'showNowButton'),nowButtonText=this._get(inst,'nowButtonText'),showDeselectButton=this._get(inst,'showDeselectButton'),deselectButtonText=this._get(inst,'deselectButtonText'),showButtonPanel=showCloseButton||showNowButton||showDeselectButton;for(h=hours_options.starts;h<=hours_options.ends;h++){hours.push(h);}
hoursPerRow=Math.ceil(hours.length/rows);if(showPeriodLabels){for(hourCounter=0;hourCounter<hours.length;hourCounter++){if(hours[hourCounter]<12){amItems++;}
else{pmItems++;}}
hourCounter=0;amRows=Math.floor(amItems/hours.length*rows);pmRows=Math.floor(pmItems/hours.length*rows);if(rows!=amRows+pmRows){if(amItems&&(!pmItems||!amRows||(pmRows&&amItems/amRows>=pmItems/pmRows))){amRows++;}else{pmRows++;}}
amFirstRow=Math.min(amRows,1);pmFirstRow=amRows+1;hoursPerRow=Math.ceil(Math.max(amItems/amRows,pmItems/pmRows));}
html='<table class="ui-timepicker-table ui-widget-content ui-corner-all"><tr>';if(showHours){html+='<td class="ui-timepicker-hours">'+'<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">'+
hourLabel+'</div>'+'<table class="ui-timepicker">';for(row=1;row<=rows;row++){html+='<tr>';if(row==amFirstRow&&showPeriodLabels){html+='<th rowspan="'+amRows.toString()+'" class="periods" scope="row">'+amPmText[0]+'</th>';}
if(row==pmFirstRow&&showPeriodLabels){html+='<th rowspan="'+pmRows.toString()+'" class="periods" scope="row">'+amPmText[1]+'</th>';}
for(col=1;col<=hoursPerRow;col++){if(showPeriodLabels&&row<pmFirstRow&&hours[hourCounter]>=12){html+=this._generateHTMLHourCell(inst,undefined,showPeriod,showLeadingZero);}else{html+=this._generateHTMLHourCell(inst,hours[hourCounter],showPeriod,showLeadingZero);hourCounter++;}}
html+='</tr>';}
html+='</tr></table>'+'</td>';}
if(showMinutes){html+='<td class="ui-timepicker-minutes">';html+=this._generateHTMLMinutes(inst);html+='</td>';}
html+='</tr>';if(showButtonPanel){var buttonPanel='<tr><td colspan="3"><div class="ui-timepicker-buttonpane ui-widget-content">';if(showNowButton){buttonPanel+='<button type="button" class="ui-timepicker-now ui-state-default ui-corner-all" '
+' data-timepicker-instance-id="#'+inst.id.replace(/\\\\/g,"\\")+'" >'
+nowButtonText+'</button>';}
if(showDeselectButton){buttonPanel+='<button type="button" class="ui-timepicker-deselect ui-state-default ui-corner-all" '
+' data-timepicker-instance-id="#'+inst.id.replace(/\\\\/g,"\\")+'" >'
+deselectButtonText+'</button>';}
if(showCloseButton){buttonPanel+='<button type="button" class="ui-timepicker-close ui-state-default ui-corner-all" '
+' data-timepicker-instance-id="#'+inst.id.replace(/\\\\/g,"\\")+'" >'
+closeButtonText+'</button>';}
html+=buttonPanel+'</div></td></tr>';}
html+='</table>';html+=($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-timepicker-cover" frameborder="0"></iframe>':'');return html;},_updateMinuteDisplay:function(inst){var newHtml=this._generateHTMLMinutes(inst);inst.tpDiv.find('td.ui-timepicker-minutes').html(newHtml);this._rebindDialogEvents(inst);},_generateHTMLMinutes:function(inst){var m,row,html='',rows=this._get(inst,'rows'),minutes=Array(),minutes_options=this._get(inst,'minutes'),minutesPerRow=null,minuteCounter=0,showMinutesLeadingZero=(this._get(inst,'showMinutesLeadingZero')==true),onMinuteShow=this._get(inst,'onMinuteShow'),minuteLabel=this._get(inst,'minuteText');if(!minutes_options.starts){minutes_options.starts=0;}
if(!minutes_options.ends){minutes_options.ends=59;}
for(m=minutes_options.starts;m<=minutes_options.ends;m+=minutes_options.interval){minutes.push(m);}
minutesPerRow=Math.round(minutes.length/rows+0.49);if(onMinuteShow&&(onMinuteShow.apply((inst.input?inst.input[0]:null),[inst.hours,inst.minutes])==false)){for(minuteCounter=0;minuteCounter<minutes.length;minuteCounter+=1){m=minutes[minuteCounter];if(onMinuteShow.apply((inst.input?inst.input[0]:null),[inst.hours,m])){inst.minutes=m;break;}}}
html+='<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">'+
minuteLabel+'</div>'+'<table class="ui-timepicker">';minuteCounter=0;for(row=1;row<=rows;row++){html+='<tr>';while(minuteCounter<row*minutesPerRow){var m=minutes[minuteCounter];var displayText='';if(m!==undefined){displayText=(m<10)&&showMinutesLeadingZero?"0"+m.toString():m.toString();}
html+=this._generateHTMLMinuteCell(inst,m,displayText);minuteCounter++;}
html+='</tr>';}
html+='</table>';return html;},_generateHTMLHourCell:function(inst,hour,showPeriod,showLeadingZero){var displayHour=hour;if((hour>12)&&showPeriod){displayHour=hour-12;}
if((displayHour==0)&&showPeriod){displayHour=12;}
if((displayHour<10)&&showLeadingZero){displayHour='0'+displayHour;}
var html="";var enabled=true;var onHourShow=this._get(inst,'onHourShow');if(hour==undefined){html='<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>';return html;}
if(onHourShow){enabled=onHourShow.apply((inst.input?inst.input[0]:null),[hour]);}
if(enabled){html='<td class="ui-timepicker-hour-cell" data-timepicker-instance-id="#'+inst.id.replace(/\\\\/g,"\\")+'" data-hour="'+hour.toString()+'">'+'<a class="ui-state-default '+
(hour==inst.hours?'ui-state-active':'')+'">'+
displayHour.toString()+'</a></td>';}
else{html='<td>'+'<span class="ui-state-default ui-state-disabled '+
(hour==inst.hours?' ui-state-active ':' ')+'">'+
displayHour.toString()+'</span>'+'</td>';}
return html;},_generateHTMLMinuteCell:function(inst,minute,displayText){var html="";var enabled=true;var onMinuteShow=this._get(inst,'onMinuteShow');if(onMinuteShow){enabled=onMinuteShow.apply((inst.input?inst.input[0]:null),[inst.hours,minute]);}
if(minute==undefined){html='<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>';return html;}
if(enabled){html='<td class="ui-timepicker-minute-cell" data-timepicker-instance-id="#'+inst.id.replace(/\\\\/g,"\\")+'" data-minute="'+minute.toString()+'" >'+'<a class="ui-state-default '+
(minute==inst.minutes?'ui-state-active':'')+'" >'+
displayText+'</a></td>';}
else{html='<td>'+'<span class="ui-state-default ui-state-disabled" >'+
displayText+'</span>'+'</td>';}
return html;},_enableTimepicker:function(target){var $target=$(target),target_id=$target.attr('id'),inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=false;inst.trigger.filter('button').each(function(){this.disabled=false;}).end();}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);inline.children().removeClass('ui-state-disabled');}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target_id?null:value);});},_disableTimepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=true;inst.trigger.filter('button').each(function(){this.disabled=true;}).end();}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);inline.children().addClass('ui-state-disabled');}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});this._disabledInputs[this._disabledInputs.length]=$target.attr('id');},_isDisabledTimepicker:function(target_id){if(!target_id){return false;}
for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target_id){return true;}}
return false;},_checkOffset:function(inst,offset,isFixed){var tpWidth=inst.tpDiv.outerWidth();var tpHeight=inst.tpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();offset.left-=(this._get(inst,'isRTL')?(tpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+tpWidth>viewWidth&&viewWidth>tpWidth)?Math.abs(offset.left+tpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+tpHeight>viewHeight&&viewHeight>tpHeight)?Math.abs(tpHeight+inputHeight):0);return offset;},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,'isRTL');while(obj&&(obj.type=='hidden'||obj.nodeType!=1)){obj=obj[isRTL?'previousSibling':'nextSibling'];}
var position=$(obj).offset();return[position.left,position.top];},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value;};return[parseFloat(convert(elem.css('border-left-width'))),parseFloat(convert(elem.css('border-top-width')))];},_checkExternalClick:function(event){if(!$.timepicker._curInst){return;}
var $target=$(event.target);if($target[0].id!=$.timepicker._mainDivId&&$target.parents('#'+$.timepicker._mainDivId).length==0&&!$target.hasClass($.timepicker.markerClassName)&&!$target.hasClass($.timepicker._triggerClass)&&$.timepicker._timepickerShowing&&!($.timepicker._inDialog&&$.blockUI))
$.timepicker._hideTimepicker();},_hideTimepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return;}
if(this._timepickerShowing){var showAnim=this._get(inst,'showAnim');var duration=this._get(inst,'duration');var postProcess=function(){$.timepicker._tidyDialog(inst);this._curInst=null;};if($.effects&&$.effects[showAnim]){inst.tpDiv.hide(showAnim,$.timepicker._get(inst,'showOptions'),duration,postProcess);}
else{inst.tpDiv[(showAnim=='slideDown'?'slideUp':(showAnim=='fadeIn'?'fadeOut':'hide'))]((showAnim?duration:null),postProcess);}
if(!showAnim){postProcess();}
var onClose=this._get(inst,'onClose');if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():''),inst]);}
this._timepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});if($.blockUI){$.unblockUI();$('body').append(this.tpDiv);}}
this._inDialog=false;}},_tidyDialog:function(inst){inst.tpDiv.removeClass(this._dialogClass).unbind('.ui-timepicker');},_getInst:function(target){try{return $.data(target,PROP_NAME);}
catch(err){throw'Missing instance data for this timepicker';}},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setTimeFromField:function(inst){if(inst.input.val()==inst.lastVal){return;}
var defaultTime=this._get(inst,'defaultTime');var timeToParse=defaultTime=='now'?this._getCurrentTimeRounded(inst):defaultTime;if((inst.inline==false)&&(inst.input.val()!='')){timeToParse=inst.input.val()}
if(timeToParse instanceof Date){inst.hours=timeToParse.getHours();inst.minutes=timeToParse.getMinutes();}else{var timeVal=inst.lastVal=timeToParse;if(timeToParse==''){inst.hours=-1;inst.minutes=-1;}else{var time=this.parseTime(inst,timeVal);inst.hours=time.hours;inst.minutes=time.minutes;}}
$.timepicker._updateTimepicker(inst);},_optionTimepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=='string'){return(name=='defaults'?$.extend({},$.timepicker._defaults):(inst?(name=='all'?$.extend({},inst.settings):this._get(inst,name)):null));}
var settings=name||{};if(typeof name=='string'){settings={};settings[name]=value;}
if(inst){if(this._curInst==inst){this._hideTimepicker();}
extendRemove(inst.settings,settings);this._updateTimepicker(inst);}},_setTimeTimepicker:function(target,time){var inst=this._getInst(target);if(inst){this._setTime(inst,time);this._updateTimepicker(inst);this._updateAlternate(inst,time);}},_setTime:function(inst,time,noChange){var origHours=inst.hours;var origMinutes=inst.minutes;var time=this.parseTime(inst,time);inst.hours=time.hours;inst.minutes=time.minutes;if((origHours!=inst.hours||origMinutes!=inst.minuts)&&!noChange){inst.input.trigger('change');}
this._updateTimepicker(inst);this._updateSelectedValue(inst);},_getCurrentTimeRounded:function(inst){var currentTime=new Date(),currentMinutes=currentTime.getMinutes(),adjustedMinutes=Math.round(currentMinutes/5)*5;currentTime.setMinutes(adjustedMinutes);return currentTime;},parseTime:function(inst,timeVal){var retVal=new Object();retVal.hours=-1;retVal.minutes=-1;var timeSeparator=this._get(inst,'timeSeparator'),amPmText=this._get(inst,'amPmText'),showHours=this._get(inst,'showHours'),showMinutes=this._get(inst,'showMinutes'),optionalMinutes=this._get(inst,'optionalMinutes'),showPeriod=(this._get(inst,'showPeriod')==true),p=timeVal.indexOf(timeSeparator);if(p!=-1){retVal.hours=parseInt(timeVal.substr(0,p),10);retVal.minutes=parseInt(timeVal.substr(p+1),10);}
else if((showHours)&&(!showMinutes||optionalMinutes)){retVal.hours=parseInt(timeVal,10);}
else if((!showHours)&&(showMinutes)){retVal.minutes=parseInt(timeVal,10);}
if(showHours){var timeValUpper=timeVal.toUpperCase();if((retVal.hours<12)&&(showPeriod)&&(timeValUpper.indexOf(amPmText[1].toUpperCase())!=-1)){retVal.hours+=12;}
if((retVal.hours==12)&&(showPeriod)&&(timeValUpper.indexOf(amPmText[0].toUpperCase())!=-1)){retVal.hours=0;}}
return retVal;},selectNow:function(e){var id=$(e.target).attr("data-timepicker-instance-id"),$target=$(id),inst=this._getInst($target[0]);var currentTime=new Date();inst.hours=currentTime.getHours();inst.minutes=currentTime.getMinutes();this._updateSelectedValue(inst);this._updateTimepicker(inst);this._hideTimepicker();},deselectTime:function(e){var id=$(e.target).attr("data-timepicker-instance-id"),$target=$(id),inst=this._getInst($target[0]);inst.hours=-1;inst.minutes=-1;this._updateSelectedValue(inst);this._hideTimepicker();},selectHours:function(event){var $td=$(event.currentTarget),id=$td.attr("data-timepicker-instance-id"),newHours=$td.attr("data-hour"),fromDoubleClick=event.data.fromDoubleClick,$target=$(id),inst=this._getInst($target[0]),showMinutes=(this._get(inst,'showMinutes')==true);if($.timepicker._isDisabledTimepicker($target.attr('id'))){return false}
$td.parents('.ui-timepicker-hours:first').find('a').removeClass('ui-state-active');$td.children('a').addClass('ui-state-active');inst.hours=newHours;var onMinuteShow=this._get(inst,'onMinuteShow');if(onMinuteShow){this._updateMinuteDisplay(inst);}
this._updateSelectedValue(inst);inst._hoursClicked=true;if((inst._minutesClicked)||(fromDoubleClick)||(showMinutes==false)){$.timepicker._hideTimepicker();}
return false;},selectMinutes:function(event){var $td=$(event.currentTarget),id=$td.attr("data-timepicker-instance-id"),newMinutes=$td.attr("data-minute"),fromDoubleClick=event.data.fromDoubleClick,$target=$(id),inst=this._getInst($target[0]),showHours=(this._get(inst,'showHours')==true);if($.timepicker._isDisabledTimepicker($target.attr('id'))){return false}
$td.parents('.ui-timepicker-minutes:first').find('a').removeClass('ui-state-active');$td.children('a').addClass('ui-state-active');inst.minutes=newMinutes;this._updateSelectedValue(inst);inst._minutesClicked=true;if((inst._hoursClicked)||(fromDoubleClick)||(showHours==false)){$.timepicker._hideTimepicker();return false;}
return false;},_updateSelectedValue:function(inst){var newTime=this._getParsedTime(inst);if(inst.input){inst.input.val(newTime);inst.input.trigger('change');}
var onSelect=this._get(inst,'onSelect');if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[newTime,inst]);}
this._updateAlternate(inst,newTime);return newTime;},_getParsedTime:function(inst){if(inst.hours==-1&&inst.minutes==-1){return'';}
if((inst.hours<0)||(inst.hours>23)){inst.hours=12;}
if((inst.minutes<0)||(inst.minutes>59)){inst.minutes=0;}
var period="",showPeriod=(this._get(inst,'showPeriod')==true),showLeadingZero=(this._get(inst,'showLeadingZero')==true),showHours=(this._get(inst,'showHours')==true),showMinutes=(this._get(inst,'showMinutes')==true),optionalMinutes=(this._get(inst,'optionalMinutes')==true),amPmText=this._get(inst,'amPmText'),selectedHours=inst.hours?inst.hours:0,selectedMinutes=inst.minutes?inst.minutes:0,displayHours=selectedHours?selectedHours:0,parsedTime='';if(showPeriod){if(inst.hours==0){displayHours=12;}
if(inst.hours<12){period=amPmText[0];}
else{period=amPmText[1];if(displayHours>12){displayHours-=12;}}}
var h=displayHours.toString();if(showLeadingZero&&(displayHours<10)){h='0'+h;}
var m=selectedMinutes.toString();if(selectedMinutes<10){m='0'+m;}
if(showHours){parsedTime+=h;}
if(showHours&&showMinutes&&(!optionalMinutes||m!=0)){parsedTime+=this._get(inst,'timeSeparator');}
if(showMinutes&&(!optionalMinutes||m!=0)){parsedTime+=m;}
if(showHours){if(period.length>0){parsedTime+=this._get(inst,'periodSeparator')+period;}}
return parsedTime;},_updateAlternate:function(inst,newTime){var altField=this._get(inst,'altField');if(altField){$(altField).each(function(i,e){$(e).val(newTime);});}},_getTimeTimepicker:function(input){var inst=this._getInst(input);return this._getParsedTime(inst);},_getHourTimepicker:function(input){var inst=this._getInst(input);if(inst==undefined){return-1;}
return inst.hours;},_getMinuteTimepicker:function(input){var inst=this._getInst(input);if(inst==undefined){return-1;}
return inst.minutes;}});$.fn.timepicker=function(options){if(!$.timepicker.initialized){$(document).mousedown($.timepicker._checkExternalClick).find('body').append($.timepicker.tpDiv);$.timepicker.initialized=true;}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=='string'&&(options=='getTime'||options=='getHour'||options=='getMinute'))
return $.timepicker['_'+options+'Timepicker'].apply($.timepicker,[this[0]].concat(otherArgs));if(options=='option'&&arguments.length==2&&typeof arguments[1]=='string')
return $.timepicker['_'+options+'Timepicker'].apply($.timepicker,[this[0]].concat(otherArgs));return this.each(function(){typeof options=='string'?$.timepicker['_'+options+'Timepicker'].apply($.timepicker,[this].concat(otherArgs)):$.timepicker._attachTimepicker(this,options);});};function extendRemove(target,props){$.extend(target,props);for(var name in props)
if(props[name]==null||props[name]==undefined)
target[name]=props[name];return target;};$.timepicker=new Timepicker();$.timepicker.initialized=false;$.timepicker.uuid=new Date().getTime();$.timepicker.version="0.2.9";window['TP_jQuery_'+tpuuid]=$;})(jQuery);
(function($){'use strict';$.googleAnalyticsEvents=function(options)
{options=$.extend({},$.googleAnalyticsEvents.defaultOptions,options);var eventName='',data='',dataObject=_$(options.pathGAEvents)._,i=0,l=0,targets=[],uaObject=options.uaObject;dataObject=$.evalOptions(dataObject);for(eventName in dataObject)
{targets=[];if(typeof dataObject[eventName].length!=='undefined')
{for(i=0,l=dataObject[eventName].length;i<l;++i){typeof dataObject[eventName][i].target!='undefined'&&targets.push(dataObject[eventName][i].target);}}else
{typeof dataObject[eventName].target!='undefined'&&targets.push(dataObject[eventName].target);}
$(document).on(eventName,targets.join(','),function(e)
{var $target=$(e.target),push=function(eventName,conf)
{var etype=function(e){return e.type+'';};conf=$.extend({category:etype,action:etype,label:etype,value:0,noninteraction:false,complete:null,preventDefault:false,type:'ga'},conf);if(typeof conf.complete=='function')
{var callBackDone=0,callBackNeeded=($.isArray(conf.type)?conf.type.length:1),callBackResponded=false,allBackFunction=function(target,e)
{callBackDone++;if(callBackDone==callBackNeeded)
{!callBackResponded&&conf.complete.call(target,e);callBackResponded=true;}};setTimeout(function()
{!callBackResponded&&conf.complete.call(e.target,e);},options.timeout);}
if(conf.type=='ga'||($.isArray(conf.type)&&conf.type.indexOf('ga')!=-1))
{if(typeof _gaq!=='undefined')
{if(typeof conf.complete=='function')
{_gaq.push(['_set','hitCallback',function()
{allBackFunction(e.target,e);}]);}else
{_gaq.push(['_set','hitCallback',false]);}
_gaq.push([eventName,(typeof conf.category=='function'?conf.category.call(e.target,e,conf):conf.category).toString(),(typeof conf.action=='function'?conf.action.call(e.target,e,conf):conf.action).toString(),(typeof conf.label=='function'?conf.label.call(e.target,e,conf):conf.label).toString(),parseInt((typeof conf.value=='function'?conf.value.call(e.target,e,conf):conf.value),10),!!(typeof conf.noninteraction=='function'?conf.noninteraction.call(e.target,e,conf):conf.noninteraction)]);conf.preventDefault&&e.preventDefault();}}
if(conf.type=='ua'||($.isArray(conf.type)&&conf.type.indexOf('ua')!=-1))
{if(typeof uaObject=='function')
{uaObject('send','event',(typeof conf.category=='function'?conf.category.call(e.target,e,conf):conf.category).toString(),(typeof conf.action=='function'?conf.action.call(e.target,e,conf):conf.action).toString(),(typeof conf.label=='function'?conf.label.call(e.target,e,conf):conf.label).toString(),parseInt((typeof conf.value=='function'?conf.value.call(e.target,e,conf):conf.value),10),(typeof conf.complete=='function'?{'hitCallback':function(){allBackFunction(e.target,e);}}:conf.noninteraction));conf.preventDefault&&e.preventDefault();}}};for(i=0,l=dataObject[e.type].length;i<l;++i)
{if($target.is(dataObject[e.type][i].target))
{push('_trackEvent',dataObject[e.type][i]);if((typeof ua_supp)!='undefined')
{for(var key in ua_supp)
{ua_supp.hasOwnProperty(key)&&push(key+'._trackEvent',dataObject[e.type][i]);}}}}});}};$.googleAnalyticsEvents.pushEvent=function(app,action,label){$.jet.dev&&console.warn('$.googleAnalyticsEvents.pushEvent is deprecated. Please use $.googleEvents.send (with the same parameters)');$.googleEvents.send(app,action,label);};$.googleAnalyticsEvents.defaultOptions={pathGAEvents:'$data.common.GAEvents',uaObject:undefined,timeout:2e3};}(jQuery));
(function($){var
$numberDiv=1,$dataCareer={},$BirthdayYear=$data.copains.user.birthdayYear,$typeList=['ec','c','l','u','en'],templateValidationDialog='<div style="text-align:center">'
+'<div class="marB10">$l{DELETING_CAREER_VALIDATION_TXT}</div>'
+'<div>${year}</div>'
+'<div>${etablissement}</div>'
+'</div>';$.addCareer={init:function(){$.profile&&console.time('addCareer > init');($data.copains.user.parcours!=undefined)&&$.addCareer.initDataFromUser();$(document).on('click','a.jValidateRegister',$.addCareer.sendForm);$('div#jUpdateCareer').on('click','a.initAutocompleteCity',function(){$.updateCareer.reInitAutocomplete($(this),'cityName','jAutocompleteCityDiv',false);});$('div#ajout_parcours').on('click','input.jCurrently',function(){$.addCareer.currentlyAction($(this));}).on('click','a.jAdd',$.addCareer.addCareer).on('click','a.jSupp',$.addCareer.deleteInputCareer).on('change','select',$.addCareer.selectChange).on('click','a.jInitAutocompleteCity',function(event){$.addCareer.reInitAutocompleteCity(event.target);});for(var type in $typeList)
{$typeList.hasOwnProperty(type)&&$('#divB'+$typeList[type]+'').length>0&&$.addCareer.createAutocomplete($('#divB'+$typeList[type]+''),$typeList[type],$typeList[type]+$numberDiv,true);}
$.addCareer.initAutocompleteCity();$.profile&&console.timeEnd('addCareer > init');},selectChange:function(){$.profile&&console.time('addCareer > selectChange');var $this=$(this),dataL=$dataCareer[$this.closest('div.jCareerDatas').attr('id')];dataL[$this.attr('data-name')]=$this.val();dataL.ip&&(dataL.m=1);$.profile&&console.timeEnd('addCareer > selectChange');},deleteInputCareer:function(){$.profile&&console.time('addCareer > deleteInputCareer');var div=$(this).closest('div.jCareerDatas'),dataL=$dataCareer[div.attr('id')],years;if(typeof dataL.ad!='undefined'&&dataL.ad!=0)
{years+=dataL.ad;if(typeof dataL.af!='undefined'&&dataL.af!=0)
{years+=' - '+dataL.af;}}else{years+=dataL.af;}
$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].DELETING_CAREER_VALIDATION_TITLE,$.copains.core.getTemplate(templateValidationDialog,$.extend({},{year:years,etablissement:dataL.ne})),function(){dataL.ip&&$.addCareer.deleteDataCareer(dataL.ip);delete $dataCareer[div.attr('id')];div.remove();$.note.info($.copains.core.langs[$.copains.core.lang].DELETING_CAREER_OK);$.copains.core.closeDialog();});$.profile&&console.timeEnd('addCareer > deleteInputCareer');},addCareer:function()
{$.profile&&console.time('addCareer > addCareer');var div=$(this).closest('div.jListTypeCareer'),type=div.attr('data-type');$.addCareer.createAutocomplete(div,type,type+$numberDiv,true);$.addCareer.initAutocompleteCity();$(this).parent().remove();$.profile&&console.timeEnd('addCareer > addCareer');},currentlyAction:function(checkbox){$.profile&&console.time('addCareer > currentlyAction');checkbox=checkbox||$(this);var careerElement=$dataCareer[checkbox.closest('div.jCareerDatas').attr('id')],$dateData=checkbox.closest('div.jCareerDatas').find('div.jDateData'),$dateElement=$dateData.find('select.monthE, select.yearE'),$currentlyElement=$dateData.find('span.jCurrentlyToday')
if(typeof checkbox.attr('checked')!='undefined'){(typeof careerElement.tj!='undefined')&&(careerElement.tj==0)&&(careerElement.m=1);$dateElement.hide();$currentlyElement.show();careerElement.tj=1;}else{(typeof careerElement.tj!='undefined')&&(careerElement.tj==1)&&(careerElement.m=1);$dateElement.show();$currentlyElement.hide();careerElement.tj=0;}
$.profile&&console.timeEnd('addCareer > currentlyAction');},deleteDataCareer:function(idCareer)
{$.profile&&console.time('addCareer > deleteDataCareer');$.ajax({type:'POST',url:'/parcours/_xhr_deleteCareer/',dataType:'json',data:({idCareer:idCareer,xhr:'xhr'}),success:function(response){}});$.profile&&console.timeEnd('addCareer > deleteDataCareer');},initDataFromUser:function(data){$.profile&&console.time('addCareer > initDataFromUser');$numberDiv=$data.copains.user.parcours.infos.im;for(var type in $typeList){if($typeList.hasOwnProperty(type)&&typeof $data.copains.user.parcours.list[$typeList[type]]!='undefined'){for(var i in etab=$data.copains.user.parcours.list[$typeList[type]]){if(!$typeList.hasOwnProperty(type)){continue;}
if($('div#divB'+$typeList[type]+'').length==0){continue;}
var name=$typeList[type]+etab[i].ip,monthBegin=etab[i].md,yearBegin=etab[i].ad,monthEnd=etab[i].mf,yearEnd=etab[i].af,idParcours=etab[i].ip,nomEtablissement=etab[i].ne,idEtablissement=etab[i].ie;$.addCareer.createAutocomplete($('div#divB'+$typeList[type]+''),$typeList[type],name,false);$.addCareer.displayField(name);$dataCareer[name]={ie:idEtablissement,ne:nomEtablissement,t:$typeList[type],ip:idParcours,md:monthBegin,ad:yearBegin};$('#txt'+name).val(nomEtablissement);$('#'+name+' select.monthB option[value='+monthBegin+']').attr('selected','selected');$('#'+name+' select.yearB option[value='+yearBegin+']').attr('selected','selected');if(typeof yearEnd=='undefined'){$('#'+name+' input.jCurrently').attr('checked','checked');$dataCareer[name].af=0;$dataCareer[name].mf=0;$dataCareer[name].tj=1;}else{$('#'+name+' select.monthE option[value='+monthEnd+']').attr('selected','selected');$('#'+name+' select.yearE option[value='+yearEnd+']').attr('selected','selected');$dataCareer[name].af=yearEnd;$dataCareer[name].mf=monthEnd;$dataCareer[name].tj=0;}
$.addCareer.currentlyAction($('#'+name+' input.jCurrently'));}}}
$.profile&&console.timeEnd('addCareer > initDataFromUser');},getTemplateAutocomplete:function(add,data)
{$.profile&&console.time('addCareer > getTemplateAutocomplete');var
list_add={ec:'$l{ADD_NEW_SCHOOL}',c:'$l{ADD_NEW_SECONDARY_SCHOOL}',l:'$l{ADD_NEW_HIGH_SCHOOL}',u:'$l{ADD_NEW_UNIVERSITY}',en:'$l{ADD_NEW_EMPLOYER}'},btn_list_add={ec:'$l{ADD_NEW_SCHOOL}',c:'$l{ADD_NEW_SECONDARY_SCHOOL}',l:'$l{ADD_NEW_HIGH_SCHOOL}',u:'$l{BTN_ADD_NEW_UNIVERSITY}',en:'$l{ADD_NEW_EMPLOYER}'},list_month={1:'$l{JANV}',2:'$l{FEVR}',3:'$l{MARS}',4:'$l{AVRIL}',5:'$l{MAI}',6:'$l{JUIN}',7:'$l{JUIL}',8:'$l{AOUT}',9:'$l{SEPT}',10:'$l{OCT}',11:'$l{NOV}',12:'$l{DEC}'},template;data.listYear='<option value="0">$l{YEAR}</option>';data.listMonth='<option value="0">$l{MONTH}</option>';var templateAutocompleteAlias='',templateAutocompleteCity='';if(typeof $data.common.jdnr!=='undefined'){templateAutocompleteCity='<label class="ccmcss_form__line grid_line jFormLine jAutocompleteCityDiv" style="display:none">'
+'<div class="grid_left">$l{CITY}</div>'
+'<div class="grid_last">'
+'<div class="cityName marL20 marT10" style="display:none;">'
+'<span class="name"></span>'
+'&nbsp;<a href="javascript:void(0);" class="jInitAutocompleteCity ud">$l{MODIFICATION}</a>'
+'</div>'
+'<input class="jAutocompleteCity inputTxt" autocomplete="off" placeholder="$l{SEARCH_CITY}" type="text" />'
+'<div id="divErrorCity" class="msg txtR divError" style="display: none;"></div>'
+'</div>'
+'</label>';templateAutocompleteAlias='<label class="ccmcss_form__line grid_line jFormLine jAlias" style="display:none">'
+'<div class="grid_left">$l{OLD_ORGANIZATION_NAME}</div>'
+'<div class="grid_last">'
+'<select class="input bloc" data-name="alias">'
+'</select>'
+'</div>'
+'</label>';}
template='<div class="jCareerDatas jFormLine" id="${name}">'
+'<input autocomplete="off" type="text" name="txt${name}" id="txt${name}" placeholder="${txtAjout}" />'
+templateAutocompleteAlias
+templateAutocompleteCity
+'<div class="ccmcss_form ccmcss_form--inline">'
+'<div class="ccmcss_form__line jDateData" style="display: none;">'
+'<div class="grid_line gutter">'
+'<div class="grid_left">'
+'<div class="ccmcss_form__msg">Début</div>'
+'<select class="jCustomSelect monthB" style="width:120px;" data-name="md">'
+'${listMonth}'
+'</select>'
+'<select class="jCustomSelect yearB" style="width:83px;" data-name="ad">'
+'${listYear}'
+'</select>'
+'</div>'
+'<div class="grid_left">'
+'<div class="ccmcss_form__msg">$l{TO}</div>'
+'<select class="jCustomSelect monthE" data-name="mf">'
+'${listMonth}'
+'</select>'
+'<select class="jCustomSelect yearE" data-name="af">'
+'${listYear}'
+'</select>'
+'<span style="display: none;" class="jCurrentlyToday">$l{TODAY}</span>'
+'</div>'
+'</div>'
+'<div class="jDateHelp ccmcss_form__msg" style="display: none;"></div>'
+'</div>'
+'<div class="ccmcss_form__line grid_line jStillData" style="display: none;">'
+'<div class="grid_left">'
+'<input id="cpStill" type="checkbox" class="jCurrently">'
+'<label for="cpStill">$l{STILL_HERE}</label>'
+'</div>'
+'</div>'
+'<div class="jMsg txtR divError" style="display: none;"></div>'
+'<div class="copains_actions_moderate" style="position: absolute; right: -30px; top: 0">'
+'<a href="javascript:void(0);" aria-hidden="true" data-icon="&#x22;" class="jSupp" style="display:none;"></a>'
+'</div>'
+'</div>'
+'</div>';if(add)
{template+='<p class="ccmcss_align_r"><a class="jAdd" href="javascript:void(0);" style="display:none;" class="icon_ud" aria-hidden="true" data-icon="&#x26;"><span class="icon_text">${btnTxtAjout}</span></a></p>';data.txtAjout=list_add[data.type],data.btnTxtAjout=btn_list_add[data.type];}
for(var i=$BirthdayYear;i<=(new Date).getFullYear();++i)
{data.listYear+='<option value="'+i+'">'+i+'</option>';}
for(var j=1;j<=12;++j)
{data.listMonth+='<option value="'+j+'">'+list_month[j]+'</option>';}
$.profile&&console.timeEnd('addCareer > getTemplateAutocomplete');return $.copains.core.getTemplate(template,data);},createAutocomplete:function(div,type,name,infos)
{$.profile&&console.time('addCareer > createAutocomplete');div.append($.addCareer.getTemplateAutocomplete(infos,{name:name,type:type}));$.addCareer.initAutocomplete($('input#txt'+name));$numberDiv++;$.profile&&console.timeEnd('addCareer > createAutocomplete');},initAutocomplete:function(element){$.profile&&console.time('addCareer > initAutocomplete');var type=element.closest('div.jListTypeCareer').attr('data-type'),parent=element.closest('div.jCareerDatas'),prev=parent.prev(),$dateHelp=parent.find('.jDateHelp'),mois=prev.find('select.monthE option:selected').val(),annee=prev.find('select.yearE option:selected').val();switch(type)
{case'ec':$dateHelp.html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_SCHOOL,$.extend({},{yearBegin:$data.copains.user.birthdayYear+3,yearEnd:$data.copains.user.birthdayYear+11,yearBirth:$data.copains.user.birthdayYear})));break;case'c':$dateHelp.html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_SECONDARY_SCHOOL,$.extend({},{yearBegin:$data.copains.user.birthdayYear+11,yearEnd:$data.copains.user.birthdayYear+15,yearBirth:$data.copains.user.birthdayYear})));break;case'l':$dateHelp.html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_HIGH_SCHOOL,$.extend({},{yearBegin:$data.copains.user.birthdayYear+15,yearEnd:$data.copains.user.birthdayYear+18,yearBirth:$data.copains.user.birthdayYear})));break;case'u':$dateHelp.html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_UNIVERSITY,$.extend({},{yearBegin:$data.copains.user.birthdayYear+18,yearBirth:$data.copains.user.birthdayYear})));break;}
element.ccmComplete({preSelectFirst:true,source:function(request,response){var termSearch=$.trim(request['term'].toLowerCase());$.ajax({url:'/s/',cache:true,dataType:"json",localCache:true,storageName:'search',localCacheTimeout:2*60*60*1000,data:{q:termSearch,xhr:true,ty:2,type_etablissement:type,byType:true},success:function(data)
{if(data==null){response([]);return;}
var map=$.map(data.r,function(item)
{if(item==undefined)return;if(typeof item.alias_name!="undefined"&&item.alias_name!=null&&item.alias_name.length>0){item.ti=item.alias_name+' ('+item.ti+')';}
if(item.id!=null){var ret=[{label:'<span class="line block">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'+item.ti+'</span>'
+((item.label!=null)?('<em>'+item.label+'</em>'):'')
+((item.nb!=null)?('<em> - '+item.nb+' '+$.copains.core.langs[$.copains.core.lang].INSCRITS+'</em>'):'')
+'</span>',value:item.ti,id:item.id,ville_id:item.v,alias_id:item.alias_id,alias_name:item.alias_name}];}
return ret;});response(map);}});},open:function(){var $autoComp=$('div.box3 ul.ui-autocomplete');$autoComp.css({width:$autoComp.width(),'z-index':999999}).parent().css({width:$autoComp.width(),'z-index':999999});},minLength:1,select:function(event,ui)
{var name=parent.attr('id'),dataL=$dataCareer[name];if(typeof dataL!='undefined'){dataL.ie=ui.item.id;(typeof dataL.ip!='undefined')&&(dataL.m=1);}else{$dataCareer[name]={ie:ui.item.id,t:type};}
if(typeof mois!='undefined'){parent.find('select.monthB option[value='+mois+']').attr('selected','selected');$dataCareer[name]['md']=mois;}
if(typeof annee!='undefined'){parent.find('select.yearB option[value='+annee+']').attr('selected','selected');$dataCareer[name]['ad']=annee;}
$.addCareer.displayField(name);if(typeof ui.item.alias_name!="undefined"&&ui.item.alias_name!=null&&ui.item.alias_name.length>0){$.ajax({url:'/s/alias/',cache:true,dataType:"json",localCache:true,storageName:'searchAlias',localCacheTimeout:2*60*60*1000,data:{etbId:ui.item.id},success:function(data){var $divAlias=$('#'+name+' .jAlias');var aliasSelect='';for(var key in data){if(!data.hasOwnProperty(key)){continue;}
aliasSelect+='<option value="'+key+'">'+data[key]+'</option>';}
if(aliasSelect.length>0){$divAlias.find('select').html(aliasSelect);$divAlias.show();if(typeof ui.item.aliasId!=='undefined'&&ui.item.aliasId>0){$('[data-name=alias]').val(ui.item.aliasId);}}
$divAlias.show();}});}
if(ui.item.ville_id==0){$('#'+name+' .jAutocompleteCityDiv').show();}else{$('#'+name+' .jAutocompleteCityDiv').hide();delete $dataCareer[name]['vi'];delete $dataCareer[name]['v'];}}});$.profile&&console.timeEnd('addCareer > initAutocomplete');},reInitAutocompleteCity:function(elt){var $divParent=$(elt).parents('.jCareerDatas');var name=$divParent.attr('id')
delete $dataCareer[name]['vi'];delete $dataCareer[name]['v'];$divParent.find('div.cityName').hide();$divParent.find('input').val('').blur().show();},initAutocompleteCity:function(){function setAutocompleteCity(divParent)
{var $divCity=divParent.find('.jAutocompleteCity')
var name=divParent.attr('id')
var dataCareer=$dataCareer[name];$divCity.hide();divParent.find('div.cityName').show().find('span.name').html(dataCareer.v);}
$('input.jAutocompleteCity').ccmComplete({source:function(req,res){var termSearch=req['term'].toLowerCase();$.ajax({type:'POST',url:'/v/_xhr_search_ville/',dataType:"json",localCache:true,data:{recherche:termSearch,xhr:'xhr'},success:function(data){res($.map(data,function(item){return{label:item.label,value:item.value,id:item.id};}));}});},open:function(){$('div.box3 ul.ui-autocomplete').css({width:'600px','z-index':999999}).parent().css({width:'600px','z-index':999999});},minLength:3,select:function(event,ui)
{var $divParent=$(this).parents('.jCareerDatas')
var name=$divParent.attr('id')
var dataCareer=$dataCareer[name];if(!jQuery.isEmptyObject(dataCareer))
{dataCareer.vi=ui.item.id;dataCareer.v=ui.item.value;}else{dataCareer={vi:ui.item.id,v:ui.item.value};}
setAutocompleteCity($divParent);}});},displayField:function(name){$.profile&&console.time('addCareer > displayField');var element=$('#'+name+'');element.closest('div.jListTypeCareer').find('.jAdd').show();element.find('a.jSupp, div.jDateData, div.jStillData').show();element.find('div.jDateHelp').show();$.profile&&console.timeEnd('addCareer > displayField');},sendForm:function(e){$.profile&&console.time('addCareer > sendForm');$('div#ajout_parcours').hideFormError();$.each($dataCareer,function(key,career){var aliasId=parseInt($('#'+key+' .jAlias [data-name=alias]').val())
if(aliasId>0){$dataCareer[key].aliasId=aliasId;}});$.ajax({type:'POST',url:'/parcours/_xhr_addCareer/',dataType:'json',data:({data:$dataCareer,xhr:'xhr'}),success:function(json)
{$.googleEvents.send('copainsdavant','organization','register',undefined,true);if(json.success==true)
{window.location='/r/photo/';$.profile&&console.timeEnd('addCareer > sendForm');return;}
$.each(json.errors,function(p,vp)
{$.each(vp,function(k,v)
{switch(k)
{case'ad':case'af':case'md':case'mf':case'ie':$('#'+p).showInputError(v);break;}});});}});$.profile&&console.timeEnd('addCareer > sendForm');return;}};if(_$('$data.copains.services')._.addCareer)
{$(document).start($.addCareer.init);}})(jQuery);(function($)
{'use strict';var initialized={},historyUsed=false,groupUsed=false,defaultGroupValue=0;$.dropDownActions={init:function()
{$.dropDownActions.initMultiCircles();$.dropDownActions.initMultiPrivacy();$.dropDownActions.initMultiTypes();},initSelectGroups:function($dropDown)
{$(document).on('change select','.jSelectGroup',function()
{if($('.jSelectGroup').val()>0)
{var $publicElt=$dropDown.find('.jListPrivacy input[type=\'checkbox\'][value=\'31\']');$dropDown.find('.jListPrivacy input[type=\'checkbox\']').prop("checked",false);$publicElt.prop("checked",true);$('.jTitleFeedGroup').show();$.dropDownActions.putIcon($publicElt);}
else{$('.jTitleFeedGroup').hide();}});},initMultiCircles:function()
{var $jDropdownbtnMultiCircles=$('.jDropdownbtnMultiCircles');($jDropdownbtnMultiCircles.length>0)&&($.dropDownActions.bindMultiChoiceDropDown($jDropdownbtnMultiCircles),typeof initialized.initMultiCircles=='undefined'&&$(document).bind('wallRefreshing',function()
{$('.jListCircles').hide();}),(historyUsed&&$.dropDownActions.initHistory('jFormCircles')),typeof initialized.initMultiCircles=='undefined'&&$(document).on('click','.jListCircles .jSubmitFormCircles',$.dropDownActions.submitFormFilter).on('click','.jListCircles input[type=\'checkbox\']',$.dropDownActions.checkBox),initialized.initMultiCircles=true);},initMultiTypes:function()
{var $jDropdownbtnMultiTypes=$('.jDropdownbtnMultiTypes');($jDropdownbtnMultiTypes.length>0)&&($.dropDownActions.bindMultiChoiceDropDown($jDropdownbtnMultiTypes),typeof initialized.initMultiTypes=='undefined'&&$(document).bind('wallRefreshing',function()
{$('.jListTypes').hide();}),(historyUsed&&$.dropDownActions.initHistory('jFormTypes')),typeof initialized.initMultiTypes=='undefined'&&$(document).on('click','.jListTypes .jSubmitFormTypes',$.dropDownActions.submitFormFilter).on('click','.jListTypes input[type=\'checkbox\']',$.dropDownActions.checkBox),initialized.initMultiTypes=true);},initMultiPrivacy:function()
{var $jDropdownbtnMultiPrivacy=$('.jDropdownbtnMultiPrivacy');($jDropdownbtnMultiPrivacy.length>0)&&($.dropDownActions.bindMultiChoiceDropDown($jDropdownbtnMultiPrivacy),groupUsed=$('.jSelectGroup').length>0,groupUsed&&$.dropDownActions.initSelectGroups($jDropdownbtnMultiPrivacy),typeof initialized.initMultiPrivacy=='undefined'&&($(document).on('click','.jListPrivacy input[type=\'checkbox\']',{checkboxContainer:'.jListPrivacy',type:2},$.dropDownActions.checkBox),initialized.initMultiPrivacy=true));},initHistory:function(formId)
{var filterUrl='',newHref='',searchList={},firstElement=true;$('#'+formId).find('input[type="checkbox"]').each(function()
{$(this).attr('checked')&&(filterUrl+='&filter[]='+parseInt($(this).val()));});newHref=window.location.pathname;searchList=document.location.search.split('&');for(var key in searchList)
{if(!searchList.hasOwnProperty(key))
{continue;}
if(searchList[key]!=''&&searchList[key].indexOf('filter[]')==-1)
{if(firstElement==true)
{newHref+=$.trim(searchList[key]);firstElement=false;}
else{newHref+='&'+$.trim(searchList[key]);}}}
(firstElement==true)&&(newHref+='?');History.replaceState({},History.options.initialTitle,newHref+filterUrl);},checkBox:function(event)
{var $checkBox=$(this),$jPrivacyIcon=$('.jPrivacyIcon'),$checkboxContainer=_$('data',event)._.checkboxContainer?$(_$('data',event)._.checkboxContainer):$checkBox.closest('form'),checkboxType=_$('data',event)._.type?_$('data',event)._.type:1,checkboxValue=$checkBox.attr('value'),listCheckbox=$checkboxContainer.find("input[type='checkbox']"),checkCounter=0,allCheckboxFunction=function($actualCheckBox)
{$jPrivacyIcon.find('span[data-id]').remove();listCheckbox.each(function()
{$(this).prop("checked",false);});$actualCheckBox.prop('checked',true);$.dropDownActions.putIcon($actualCheckBox);};if(checkboxValue==0||(checkboxType==2&&checkboxValue==31))
{if($checkBox.prop('checked')==true)
{allCheckboxFunction($checkBox);checkCounter++;}}else{listCheckbox.each(function()
{if($(this).attr("value")==0||(checkboxType==2&&$(this).attr("value")==31))
{$(this).prop("checked",false);$jPrivacyIcon.find('span[data-id='+$(this).attr('value')+']').remove();}
else{if($(this).prop('checked')==true){checkCounter++;}}});$.dropDownActions.putIcon(event.target);}
checkboxValue!=31&&groupUsed&&$('.jSelectGroup').val(defaultGroupValue);if(checkboxType==2&&checkCounter==0)
{$checkboxContainer.find("input[type='checkbox'][value=0]").prop('checked',true);}},putIcon:function(elt)
{var $jPrivacyIcon=$('.jPrivacyIcon'),$eventTarget=$(elt),iconClass='',eventVal=$eventTarget.attr('value');switch(eventVal)
{case'0':iconClass='icone-me';break;case'1':iconClass='icone-friends';break;case'2':iconClass='icone-family';break;case'4':iconClass='icone-pro';break;case'8':iconClass='icone-acquaintance';break;case'31':iconClass='icone-public';break;}
if($eventTarget.prop('checked')==true){$jPrivacyIcon.append('<span aria-hidden="true" class="'+iconClass+'" data-id="'+eventVal+'"></span>');}else{$jPrivacyIcon.find('span[data-id='+eventVal+']').remove();}},bindMultiChoiceDropDown:function(ddElement)
{ddElement.each(function()
{var $this=$(this);$this.dropDownBtn({anim_duration:$.core.defaultStartOptions.animDuration,beforeClose:function(options)
{return!$.contains($this[0],this);}});});},submitFormFilter:function(event)
{var $form=$(this).closest('form'),atLeastOne=false;$form.find('input[type=\'checkbox\']').each(function()
{if($(this).prop('checked')==true)
{atLeastOne=true;return true;}});if(atLeastOne)
{var filterList=[],filterUrl='';$form.find('input[type="checkbox"]').each(function()
{$(this).attr('checked')&&filterList.push($(this).val())&&(filterUrl+='&filter[]='+parseInt($(this).val()));});if($form.find('input[name="myPage"]').val()==1)
{$form.ajaxSubmit({type:'POST',url:$form.attr('action'),dataType:'json',data:{xhr:1},success:function(json)
{if(json.result==true)
{$(document).trigger('wallRefreshing',{filter:json.filter});}}});}
else{$(document).trigger('wallRefreshing',{filter:filterList});}
historyUsed&&History.replaceState({},History.options.initialTitle,window.location.pathname+'?type=wall'+filterUrl);}}};$(document).start($.dropDownActions.init);})(jQuery);(function($)
{'use strict';$.jet.services.reportDialog={start:true,options:{},init:function(){$('.jBtnReport:not(.jBtnReportLoaded)').reportDialog(this.options);}};$.fn.reportDialog=function(options)
{options=$.extend(true,{},$.fn.reportDialog.defaultOptions,options);return this.each(function()
{$(this).on('click',function()
{$.reportDialog.init(this,options);}).addClass('jBtnReportLoaded');});};$.reportDialog={dialogDiv:null,delegationDone:false,typeReport:null,idReport:null,idUser:null,positionRight:true,modaleSubmit:false,options:{},init:function(elementClicked,options)
{var self=this,$elementClicked=$(elementClicked);self.typeReport=$elementClicked.attr('data-type');self.idReport=$elementClicked.attr('data-id');self.idUser=$elementClicked.attr('data-idUser');self.positionRight=typeof $elementClicked.attr('data-positionleft')=='undefined';self.options=options;typeof self.typeReport!='undefined'&&typeof self.idReport!='undefined'&&$.ajax({type:'POST',dataType:'json',url:self.options.urlForm,data:{xhr:'xhr',typeReport:self.typeReport,idReport:self.idReport,idUser:self.idUser,url:window.location.href,positionRight:self.positionRight},success:function(data)
{self.dialogDiv===null&&(self.dialogDiv=$(self.options.dialogDivSelector));if(self.dialogDiv)
{var pos=$elementClicked.findPos();(self.dialogDiv.attr('data-init')!='true')&&self.dialogDiv.css('position','absolute').attr('data-init','true').on('click',{self:self},self.onClick).on('close',self.onClose);self.dialogDiv.css({top:pos.y,left:(self.positionRight)?pos.x+28:pos.x-428}).addClass((self.positionRight)?'':'copains_box_moderate--left').html(data.html).fadeIn(100);if(self.delegationDone==false)
{self.delegationDone=true;$('body').on('click',{self:self},self.closeHandler);}}}});},onClick:function(event)
{var $target=$(event.target),typeAction=$target.attr('data-action'),self=event.handleObj.data.self;if(typeof typeAction!='undefined')
{switch(typeAction)
{case'close':self.dialogDiv.trigger('close');break;case'submit':if(self.modaleSubmit==true)
{return;}
self.modaleSubmit=true;var $form=self.dialogDiv.find('.jReportForm');$form.hideFormError();$form.ajaxSubmit({type:'POST',url:self.options.urlSubmit,dataType:'json',data:{xhr:1},success:function(json)
{if(json.success==true)
{$.note.info(json.msg);self.dialogDiv.trigger('close');}
else if(json.error)
{$('body').scrollTo(self.dialogDiv,0,{axis:'y'});$.each(json.error,function(p,vp)
{$form.find('[name=\''+p+'\']').showInputError(vp);});}
self.modaleSubmit=false;}});break;case'':default:break;}}},onClose:function(event)
{var $this=$(this);$this.fadeOut(100,function()
{$this.html('');});},closeHandler:function(event)
{var self=event.handleObj.data.self;if($(event.target).closest('.jOptionsDialogDiv').length==0)
{$('body').off('click',self.closeHandler);self.delegationDone=false;self.dialogDiv&&self.dialogDiv.trigger('close');}}};$.extend($.reportDialog,$.microTemplate);$.reportDialog.microTemplateInit();$.fn.reportDialog.defaultOptions={urlForm:'/rp/_xhr_showReportForm',urlSubmit:'/rp/_xhr_submitReportForm',dialogDiv:null,dialogDivSelector:'div.jOptionsDialogDiv'};})(jQuery);(function($)
{'use strict';$.jet.services.whereIveBeen={start:true,options:{},init:function(){$('.jWhereIveBeenMap').whereIveBeenActionsListener(this.options);}};$.fn.whereIveBeenActionsListener=function(options)
{options=$.extend(true,{},$.fn.whereIveBeenActionsListener.defaultOptions,options);return this.each(function()
{$.whereIveBeenActionsListener.init(this,options);$(this).removeClass('jWhereIveBeenMap');});};$.whereIveBeenActionsListener={modif:{},$mapElement:{},init:function(mapElement,options)
{this.$mapElement=$(mapElement);if(this.$mapElement.hasClass('jMapUpdate'))
{this.$mapElement.on('mapaelClick',function(e,params,conf,id,mapElem,textElem){$.whereIveBeenActionsListener.onClick(e,conf,id,mapElem,textElem,options);});}},onClick:function(e,conf,id,mapElem,textElem,options)
{var actualValue=(typeof this.modif!='undefined'&&typeof this.modif[id]!='undefined')?this.modif[id]:((typeof conf.areas[id]!='undefined'&&typeof conf.areas[id].value!='undefined')?conf.areas[id].value:0),newValue=0;actualValue=parseInt(actualValue);if(actualValue<2)
{newValue=actualValue+1;}
this.modif[id]=newValue;var newData={'areas':{}};newData.areas[id]={value:this.modif[id]};this.$mapElement.trigger('update',[newData,false,false,0]);this.$mapElement.data('modif',this.modif);}};$.fn.whereIveBeenActionsListener.defaultOptions={urlForm:'/rp/_xhr_showReportForm',urlSubmit:'/rp/_xhr_submitReportForm',dialogDiv:null,dialogDivSelector:'div.jOptionsDialogDiv'};})(jQuery);(function($)
{'use strict';$.ProfileReminder={init:function()
{$(document).on('click','.jDontWantToComplete',$.ProfileReminder.stopProposition).on('click','.jHideComplete',$.ProfileReminder.hideProposition).on('click','.jSkipComplete',$.ProfileReminder.skipProposition);},stopProposition:function()
{var $profileReminder=$('.jProfilRemind'),id=$profileReminder.attr('data-id');$.ajax({type:'POST',url:'/pr/_xhr_stop_proposition',dataType:'json',data:{xhr:'xhr',id:id},success:function(result)
{if(result.html)
{$('.tipsy').remove();$profileReminder.replaceWith(result.html);$($.jet.services.tipsy.options.selector).not($.jet.services.tipsy.options.exceptionSelector).tipsy($.jet.services.tipsy.options.options);}}});},skipProposition:function()
{var $profileReminder=$('.jProfilRemind'),id=$profileReminder.attr('data-id');$.ajax({type:'POST',url:'/pr/_xhr_skip_proposition',dataType:'json',data:{xhr:'xhr',id:id},success:function(result)
{if(result.html)
{$('.tipsy').remove();$profileReminder.replaceWith(result.html);$($.jet.services.tipsy.options.selector).not($.jet.services.tipsy.options.exceptionSelector).tipsy($.jet.services.tipsy.options.options);}}});},hideProposition:function()
{$.ajax({type:'POST',url:'/pr/_xhr_hide_proposition',dataType:'json',data:{xhr:'xhr'},success:function(result)
{if(result.result)
{$('.tipsy').remove();$('.jProfilRemind').remove();}}});}};$(document).start($.ProfileReminder.init);})(jQuery);(function($)
{'use strict';$.eventActions={init:function()
{$(document).on('click','.jRefuseEvent',$.eventActions.refuseEvent).on('click','.jDeleteEvent',$.eventActions.deleteEvent);},refuseEvent:function(e)
{e.preventDefault();var $this=$(this),eventId=$this.attr('data-eventId'),$line=$this.closest('.jEventProposition'),$contener=$this.closest('.jNotification');$.ajax({type:'POST',url:'/event/_xhr_refuseEvent',dataType:'json',data:{xhr:'xhr',event_id:eventId,p:2},success:function(json)
{if(json.msg)
{$.note.info(json.msg);}
if($contener.find('.jEventProposition').length>=2)
{$line.remove();}
else
{$contener.remove();}}});},deleteEvent:function()
{var $this=$(this),userId=parseInt($this.attr('data-userid'),10);$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].DELETE_EVENT_CONFIRMATION_TITLE,$.copains.core.getTemplate('$l{DELETE_EVENT_CONFIRMATION_MESSAGE}'),function()
{var ajaxData={event_id:$this.attr('data-id'),xhr:'xhr'},$jAdminCom=$('.jAdminCom');if($jAdminCom.length>0)
{ajaxData.adminCom=$jAdminCom.find('textarea[name=\'reason\']').val();ajaxData.adminSendMail=($jAdminCom.find('input[name=\'sendmail\']').attr('checked')=='checked')?1:undefined;}
$.ajax({type:'POST',url:'/event/_xhr_deleteEvent/',dataType:'json',data:ajaxData,success:function(response)
{typeof response.success!='undefined'&&typeof response.redirect!='undefined'&&(window.location.href=response.redirect);}});$.copains.core.closeDialog();},undefined,undefined,typeof $data.common.moderator!='undefined'&&(userId!=$data.copains.user.uid));}};$(document).start($.eventActions.init);})(jQuery);(function($)
{var imageType,params;$.CropActions={initForm:function(type)
{imageType=type||'header';var options={header:{funcFileUpload:$.CropActions.initFileUpload2,crop:{ratio:1,dialog:{text:undefined},preview:{css:{width:'100px',height:'100px'}}},minWidthForPreview:300,minHeightForPreview:300},avatar:{funcFileUpload:$.CropActions.initFileUpload,funcUpdateSucceeded:$.CropActions.succeededUpdateAvatar,crop:{dialog:{text:$('<div>').addClass('cropMsg').html('Pour recadrer, sélectionnez la zone avec votre souris')},img:{jcrop:{aspectRatio:1}},preview:{css:{width:'100px',height:'100px'},className:'cropPreview crop__preview--circle'}},minWidthForPreview:300,minHeightForPreview:300}};if(typeof options[imageType]=='undefined')
{return;}
params=options[imageType];var $uploadContainer=$('.jCropUploadContainer');if($uploadContainer.length>0)
{if($.jet.services.fileUpload.isLoaded())
{params.funcFileUpload.call($uploadContainer);}
else{$(document).one('fileUploadLoaded',function(){params.funcFileUpload.call($uploadContainer);}).trigger('refresh',[{services:{fileUpload:{start:true}}}]);}};},succeededUpdateAvatar:function(response)
{$.ImageActions.updateUserLogo(response.thumbnail_url,response.url);if(typeof response.html!='undefined')
{$('.jListProfile').html(response.html);$.CropActions.initForm(imageType);}},initFileUpload:function()
{var $uploadContainer=$(this),initFileuploadFunc=function()
{$uploadContainer.fileupload({autoUpload:true,url:'/media/_xhr_upload_image_album?xhr=plaintext',acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,previewMaxWidth:60,previewMaxHeight:60,maxFileSize:20000000,singleFileUploads:true,downloadTemplate:null}).bind('fileuploadprogress',function(e,data){}).bind('fileuploaddone',function(e,data)
{var funcAddImage=function()
{imagePile.add(data.result[0].url,{},function(event,cached)
{var srcToCrop=this.src,previewDisplay=false;$('<div>').croppable($.extend(true,{},{img:{src:srcToCrop},preview:{css:{display:'none'},position:{offset:'10 -15',my:'right bottom',at:'right bottom'},funcUpdatePreview:function(crop,size,options)
{if(previewDisplay===false)
{$('.cropMsg').show();}},funcRefreshPreview:function($img,options,jcropApi)
{this.position($.extend({of:$img[0]},options.preview.position));jcropApi.focus();}},dialog:{options:{dialogClass:'dialogCrop',title:'Astuce : pour recadrer, cliquez sur la photo.'},saveLabel:'sauvegarder',cancelLabel:'annuler'},save:function(crop,dimThumb,coor,dimOriginal)
{$.ajax({type:'POST',url:'/media/_xhr_uploadCropedImage',dataType:'json',data:{type:imageType,xhr:'xhr',crop:coor,path:srcToCrop,page:_$('$data')._.pageType},success:function(response)
{params.funcUpdateSucceeded.call(undefined,response);if(typeof response.msg!='undefined')
{$.note.info(response.msg);}}});}},params.crop)).trigger('showCrop');});imagePile.depile();};if(!$.jet.services.croppable.isLoaded())
{$(document).trigger('refresh',[{services:{croppable:{start:true}}}]).bind('croppableReady',function(){funcAddImage();});}
else{funcAddImage();}});};initFileuploadFunc();}};if(_$('$data')._.imgUploadInit)
{$(document).start(function()
{$.CropActions.initForm($data.imgUploadInit);});}})(jQuery);(function($)
{'use strict';$.wanted={establishmentData:{},count:0,edit:false,wantedSubmit:false,estabTemplate:function(id,name,yb,ye)
{return'<div class="JWantedEtablishmentContainer" data-id="'+id+'">'+name+' de '+yb+' à '+ye+' <button type="button" class="jWantedEstablishmentDelete">X</button></div>';},init:function()
{$(document).on('click','.jWantedSearchHomonym',$.wanted.searchHomonym).on('click','.jWantedHomonymMore',$.wanted.searchOtherHomonyms).on('click','.jWantedHomonymNoOne',$.wanted.displaySecondPartForm).on('click','#JWantedSubmitForm',$.wanted.submitWantedForm).on('click','.jWantedEstablishmentAdd',$.wanted.submitEstablishmentAdd).on('click','.jWantedEstablishmentDelete',$.wanted.submitEstablishmentDelete).on('click','.jWantedDelete',$.wanted.deleteWanted).on('click','.jWantedChangeState',$.wanted.changeState).on('click','.jValidateRecognizeMe',$.wanted.validateRecognizeMe).on('click','.jValidateIKnowHim',$.wanted.validateIKnowHim).on('click','#jFrmListWanted #jBtnSubmit',$.wanted.searchListWanted).on('click','.jFoldUnfold',$.wanted.foldUnfoldDiv).on('click','.jRemoveWantedImg',$.wanted.removeImg);if($('#jFrmListWanted').length>0)
{$.copains.core.initTownAutocomplete($('#jFrmListWanted .txtVille'),{ajaxPays:false,minLength:1});}
if($('#jWantedForm').length>0)
{if(_$('$data.copains.wantedData')._.count)
{$.wanted.count=$data.copains.wantedData.count;}
if(_$('$data.copains.wantedData')._.edit)
{$.wanted.edit=$data.copains.wantedData.edit;}
if($.wanted.edit==true)
{$.wanted.displaySecondPartForm();$('#JWantedThirdPart').show();}
if(_$('$data.copains.wantedData')._.establishmentList)
{var i=0,nb=$data.copains.wantedData.establishmentList.length;for(;i<nb;++i)
{var estDatas=$data.copains.wantedData.establishmentList[i];$('#JWantedEtablishmentInputs').append($.wanted.estabTemplate(i,estDatas.lib,estDatas.yb,estDatas.ye));$.wanted.establishmentData[i]={idEstablishment:estDatas.id,yearBeginVal:estDatas.yb,yearEndVal:estDatas.ye};}}
if($('.jWantedFirstnameGET').val()!=''&&$('.jWantedSurnameGET').val()!=''){$.wanted.displaySecondPartForm();$('#jWantedFirstname').val($('.jWantedFirstnameGET').val());$('#jWantedSurname').val($('.jWantedSurnameGET').val());}}},foldUnfoldDiv:function()
{var $this=$(this),$divToFold=$this.closest('.jWantedBox').find('.jFoldUnfoldDiv');if($divToFold.is(":visible"))
{$divToFold.hide();$this.removeClass('icon-arrow-t').addClass('icon-arrow-b');}
else{$divToFold.show();$this.removeClass('icon-arrow-b').addClass('icon-arrow-t');}},emulateStringify:function()
{var dataStringified={};for(var key in $.wanted.establishmentData)
{if(!$.wanted.establishmentData.hasOwnProperty(key)){continue;}
dataStringified['establishment['+key+'][id]']=$.wanted.establishmentData[key].idEstablishment;dataStringified['establishment['+key+'][yb]']=$.wanted.establishmentData[key].yearBeginVal;dataStringified['establishment['+key+'][ye]']=$.wanted.establishmentData[key].yearEndVal;}
return dataStringified;},changeState:function()
{$.ajax({type:'POST',url:'/recherche-amis/_xhr_changeState',dataType:'json',data:{xhr:'xhr',idWanted:$(this).attr('data-id'),typeAction:$(this).attr('data-action')},success:function(data)
{if(typeof data.note!='undefined')
{$.note.info(data.note);}
if(typeof data.url!='undefined')
{window.location=data.url;}}});},submitEstablishmentDelete:function()
{var $container=$(this).closest('.JWantedEtablishmentContainer'),etablishmentId=$container.attr('data-id');$container.remove();delete $.wanted.establishmentData[etablishmentId];},submitEstablishmentAdd:function()
{var $jEstablishmentData=$('.jEstablishmentData'),$form=$('#jWantedForm'),$establishmentId=$jEstablishmentData.find('.establishmentId'),$yearBegin=$jEstablishmentData.find('.yearB'),$yearEnd=$jEstablishmentData.find('.yearE'),yearEndVal=$yearEnd.val();$form.hideFormError();if($establishmentId.val()=="")
{$('#jEstablishmentAutocomplete').showInputError('Etablissement manquant');return false;}
if($yearBegin.val()==0||$yearEnd.val()==0)
{$('#jEstablishmentAutocomplete').showInputError('Année de début ou de fin manquante');return false;}
if($yearBegin.val()>$yearEnd.val())
{$('#jEstablishmentAutocomplete').showInputError('L\'année de début ne peut pas être aprés l\'année de fin');return false;}
$.wanted.establishmentData[$.wanted.count]={idEstablishment:$establishmentId.val(),yearBeginVal:$yearBegin.val(),yearEndVal:$yearEnd.val()};$('#JWantedEtablishmentInputs').append($.wanted.estabTemplate($.wanted.count,$establishmentId.data('establishmentName'),$yearBegin.val(),$yearEnd.val()));$.wanted.count++;$jEstablishmentData.remove();$('#JWantedThirdPart').show();$('#JWantedEtablishmentInputs').append($.wanted.displayEstablishmentInput());return true;},searchListWanted:function(event)
{event.stopPropagation();var $form=$('#jFrmListWanted'),counter=0;$form.hideFormError();($form.find('#txtville').val()=='')&&$form.find('#idville').val('');($form.find('#txtPrenom').val().trim()!='')&&counter++;($form.find('#txtNom').val().trim()!='')&&counter++;($form.find('#idville').val().trim()!='')&&counter++;if(counter<2)
{$('.jFormLine').showInputError('Au moins deux de ces champs sont obligatoires');return false;}
return true;},submitWantedForm:function()
{if($.wanted.wantedSubmit==true)
{return;}
$.wanted.wantedSubmit=true;var $form=$('#jWantedForm');$form.hideFormError();if($('#jEstablishmentAutocomplete').val()!='')
{if($.wanted.submitEstablishmentAdd()==false)
{return;}}
$form.ajaxSubmit({type:'POST',url:'/recherche-amis/_xhr_validateForm',dataType:'json',data:$.extend({},{xhr:1},$.wanted.emulateStringify()),success:function(data)
{if(typeof data.note!='undefined')
{$.note.info(data.note);}
if(typeof data.infos!='undefined')
{$.each(data.infos,function(k,v)
{$('#'+k).attr('value',v);});}
if(typeof data.errors!='undefined')
{$.each(data.errors,function(k,v)
{$('#'+k).showInputError(v);});}
if(typeof data.url!='undefined')
{window.location=data.url;}else{$.wanted.wantedSubmit=false;}},error:function(error)
{$.wanted.wantedSubmit=false;}});},displayEstablishmentInput:function()
{var	data={listYear:'<option value="0">$l{YEAR}</option>'},template='<div class="jEstablishmentData jFormLine">'
+'<div class="ccmcss_form ccmcss_form--inline">'
+'<div class="ccmcss_form__line grid_line">'
+'<div class="grid_left w50">'
+'<input id="jEstablishmentAutocomplete" type="text" placeholder="Établissement fréquenté " />'
+'<input type="hidden" class="establishmentId" />'
+'</div>'
+'<div class="grid_left">'
+'De '
+'<select class="yearB" data-name="ad">'
+'${listYear}'
+'</select>'
+'</div>'
+'<div class="grid_left">'
+'à '
+'<select class="yearE" data-name="af">'
+'${listYear}'
+'</select>'
+'</div>'
+'<div class="grid_last">'
+'<button type="button" class="jWantedEstablishmentAdd linter_btn_2 linter_btn--s">Ajouter</button>'
+'</div>'
+'</div>'
+'<div class="jMsg txtR divError" style="display: none;"></div>'
+'</div>'
+'</div>';for(var i=$data.copains.user.birthdayYear;i<=(new Date).getFullYear();++i)
{data.listYear+='<option value="'+i+'">'+i+'</option>';}
var $template=$($.copains.core.getTemplate(template,data));$.copains.core.initEtablissementAutocomplete($template.find('#jEstablishmentAutocomplete'),{hiddenIdTarget:'.establishmentId'});return $template;},displaySecondPartForm:function()
{$('#JWantedSecondPart').show();$('#jWantedListHomonym').hide();$('.jUpdatableField').updatable().bind('updated',function()
{$('#JWantedThirdPart').show();});$.copains.core.initTownAutocomplete($('#jWantedTown'),{ajaxPays:false,minLength:1,hiddenIdTarget:'#jWantedTownId'});if(typeof $.fn.fileupload=='function')
{$.wanted.initFileUpload();}
else
{$(document).bind('fileUploadLoaded',function(){$.wanted.initFileUpload();}).trigger('refresh',[{services:{fileUpload:{start:true}}}]);}
$.wanted.establishmentData={};$('#JWantedEtablishmentInputs').empty().append($.wanted.displayEstablishmentInput());},hideSecondPartForm:function()
{$('#JWantedSecondPart').hide();$('#JWantedThirdPart').hide();},searchOtherHomonyms:function(firstname,surname)
{if(typeof firstname=='object')
{var $form=$('#jWantedForm');firstname=$form.find('#jWantedFirstname').val();surname=$form.find('#jWantedSurname').val();}
window.location='/s/?ty=1&prenom='+encodeURIComponent(firstname)+'&nom='+encodeURIComponent(surname);},initFileUpload:function()
{$('.jUploadSystem').fileupload({autoUpload:true,url:'/media/_xhr_upload_image_album?xhr=plaintext',acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,previewMaxWidth:60,previewMaxHeight:60,maxFileSize:20000000}).bind('fileuploadsend',function(e,data)
{$('.jNoticeImage').remove();$('#JWantedSecondPart .template-download').empty();}).bind('fileuploaddone',function(e,data)
{$('#JWantedThirdPart').show();}).on('click','a.jRemoveImg',function(e)
{$(this).closest('.template-download').remove();});},removeImg:function()
{$(this).closest('.jWantedImg').remove();},searchHomonym:function(firstname,surname)
{var $form=$('#jWantedForm');if(typeof firstname=='object')
{firstname=$form.find('#jWantedFirstname').val();surname=$form.find('#jWantedSurname').val();}
$.ajax({type:'POST',url:'/recherche-amis/_xhr_searchHomonym',dataType:'json',data:{xhr:'xhr',firstname:firstname,surname:surname},success:function(data)
{$form.hideFormError();if(typeof data.errors!='undefined')
{$.each(data.errors,function(k,v)
{$('#'+k).showInputError(v);});}
if(typeof data.success!='undefined')
{if(data.success==true)
{$.wanted.hideSecondPartForm();var text='',$jWantedListHomonym=$('#jWantedListHomonym');for(var key in data.users)
{if(!data.users.hasOwnProperty(key)){continue;}
text+='<li class="grid_left w33"><div class="grid_line gutter grid--norwd">';text+='<div class="grid_left"><figure><img src="'+data.users[key].p+'"></figure></div>';text+='<div class="grid_last"><h3 class="linter_box_1__title">';text+='<a href="'+data.users[key].l+'">'+data.users[key].t;text+='<br />';if(data.users[key].a!=0)
{text+=data.users[key].a+' ans - ';}
text+=data.users[key].v;text+='</a></h3></div></div></li>';}
$jWantedListHomonym.find('.jWantedList').empty().append(text);if(data.more==true)
{$('.jWantedHomonymMore').show();}
$jWantedListHomonym.show();}
else{$.wanted.displaySecondPartForm();}}}});},deleteWanted:function(e)
{var wantedId=$(this).attr('data-id'),$divModal=$.copains.core.initDivModal();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].DELETE,$.copains.core.getTemplate('$l{CONFIRMATION}'),function(){$.ajax({type:'POST',url:'/recherche-amis/_xhr_deleteWanted',dataType:'json',data:{xhr:'xhr',id:wantedId},success:function(json)
{if(json.msg)
{$.note.info(json.msg);}
window.location='/recherche-amis/add';}});$.copains.core.closeDialog();});},validateRecognizeMe:function()
{$.ajax({type:'POST',url:'/recherche-amis/_xhr_recognizeMeValidate',dataType:'json',data:{xhr:'xhr',idWanted:$(this).attr('data-id'),text:$('.jFormRecognizeMeTextarea').val()!=$('.jFormRecognizeMeTextarea').attr('default')?$('.jFormRecognizeMeTextarea').val():''},success:function(data)
{if(data.success===true)
{if(typeof data.msg!='undefined')
{$.note.info(data.msg);}
window.location='/p/relations/list/ask';}}});},validateIKnowHim:function()
{var $this=$(this),emailVal=$('.jFormIKnowHimEmail').val(),textVal=$('.jFormIKnowHimTextarea').val();$this.hideFormError();$.ajax({type:'POST',url:'/recherche-amis/_xhr_iKnowHimValidate',dataType:'json',data:{xhr:'xhr',idWanted:$this.attr('data-id'),email:emailVal!=$('.jFormIKnowHimEmail').attr('default')?emailVal:'',text:textVal!=$('.jFormIKnowHimTextarea').attr('default')?textVal:''},success:function(data)
{if(typeof data.errors!='undefined')
{$.each(data.errors,function(p,v)
{$('#'+p).showInputError(v);});}
if(data.success===true)
{if(typeof data.msg!='undefined')
{$.note.info(data.msg);}
if(typeof data.url!='undefined')
{window.location=data.url;}}}});}};if(_$('$data.copains.services')._.wanted)
{$(document).start($.wanted.init);}})(jQuery);(function($)
{'use strict';var GAEvents={'pathGAEvents':{'click':[],'emulatedClick':[],'change':[]}};if(typeof ga!='undefined')
{GAEvents.uaObject=ga;}
var listType=['ga','ua'],listEvent=[{target:'eventWedding',action:'event-wedding'},{target:'eventBirthday',action:'event-birthday'},{target:'eventBorn',action:'event-born'},{target:'eventReligion',action:'event-religion'},{target:'eventFamily',action:'event-family'},{target:'eventFree',action:'event-free'},{target:'contenulibreFree',action:'qdn-text'},{target:'contenulibrePicture',action:'qdn-picture'},{target:'prederMood',action:'qdn-mood'},{target:'prederMovie',action:'qdn-movie'},{target:'prederTv',action:'qdn-tv'},{target:'prederWeekend',action:'qdn-weekend'},{target:'eventFree',action:'qdn-memory'}],listLinkEvent=[{target:'jTrackDiaryNav',action:'diary',label:'nav'},{target:'jTrackProfilNav',action:'profile',label:'nav'},{target:'jTrackPhotoNav',action:'picture',label:'nav'},{target:'jTrackFriendNav',action:'friends',label:'nav'},{target:'jTrackWantedNav',action:'wanted',label:'nav'},{target:'jTrackSearchShortcut',action:'search',label:'shortcut'},{target:'jTrackWantedAddShortcut',action:'wantedSee',label:'shortcut'},{target:'jTrackWantedSeeShortcut',action:'wantedAdd',label:'shortcut'},{target:'jTrackProfilShortcut',action:'profile',label:'shortcut'},{target:'jTrackPhotoShortcut',action:'picture',label:'shortcut'},{target:'jTrackMsgShortcut',action:'message',label:'shortcut'},{target:'jTrackPrivacyShortcut',action:'privacy',label:'shortcut'},{target:'jTrackProfilHeader a',action:'profile',label:'header'},{target:'jTrackFriendHeader a',action:'friend',label:'header'},{target:'jTrackPictureHeader a',action:'picture',label:'header'},{target:'jTrackInviteHeader a',action:'invite',label:'header'},{target:'jTrackDiscussHeader a',action:'passion',label:'header'},{target:'jTrackSearchHeader a',action:'search',label:'header'},{target:'jTrackLifeHeader a',action:'life',label:'header'},{target:'jTrackNewsHeader a',action:'news',label:'header'},{target:'menuitemmessage a',action:'message',label:'header'}],listCustomEvent=[{target:'[data-event="clickDeleteAccount"]',action:'counter-deletion',value:1}],listEventDynamicLabel=[{target:'.jTrackGroupAccess',action:'group-access'},{target:'.jTrackFeedGroupAccess',action:'group-feed-access'},{target:'.jTrackNewFeedGroup',action:'group-new-feed'},{target:'.jTrackGroupAnswer',action:'group-answer'},{target:'.jTrackGroupAdd',action:'group-add'}],key,datas,uniqueID=0;for(key=0;key<listEvent.length;++key)
{GAEvents.pathGAEvents.click.push({target:'#'+listEvent[key].target,category:'copainsdavant',action:listEvent[key].action,label:'home',value:1,type:listType,preventDefault:true});GAEvents.pathGAEvents.emulatedClick.push({target:'#jDivModal a[data-key=\''+listEvent[key].target+'\']',category:'copainsdavant',action:listEvent[key].action,label:'modale',value:1,type:listType,preventDefault:true});}
for(key=0;key<listLinkEvent.length;++key)
{GAEvents.pathGAEvents.click.push({target:'#'+listLinkEvent[key].target,category:'copainsdavant',action:listLinkEvent[key].action,label:listLinkEvent[key].label,value:1,type:listType,preventDefault:true,complete:function()
{var $this=$(this),redirect=(typeof $this.attr('href')!='undefined')?$this.attr('href'):$this.closest('a').attr('href');window.location.href=redirect;}});}
for(key=0;key<listEventDynamicLabel.length;++key)
{$(listEventDynamicLabel[key].target).each(function(){$(this).attr('id','jTrack'+uniqueID);GAEvents.pathGAEvents.click.push({target:'#'+$(this).attr('id'),category:'copainsdavant',action:listEventDynamicLabel[key].action,label:$(this).data('label'),value:1,type:listType,preventDefault:true,complete:function()
{var $this=$(this),redirect=(typeof $this.attr('href')!='undefined')?$this.attr('href'):$this.closest('a').attr('href');if(redirect!="javascript:void(0);"){window.location.href=redirect;}}});uniqueID++;});}
for(key=0;key<listCustomEvent.length;++key)
{GAEvents.pathGAEvents.click.push({target:listCustomEvent[key].target,category:'copainsdavant',action:listCustomEvent[key].action,value:listCustomEvent[key].value,type:listType,preventDefault:false});}
GAEvents.pathGAEvents.change.push({target:'.jTrackNewFeedGroup[data-label=clic_addfeed_modale]',category:'copainsdavant',action:'group-new-feed',label:'clic_addfeed_modale',value:1,type:listType,preventDefault:true,complete:function(){}});$(document).start(function()
{typeof $.googleAnalyticsEvents=='function'&&$.googleAnalyticsEvents(GAEvents);});})(jQuery);(function($)
{$.groups={init:function()
{$(document).on('click','.jAddGroup',$.groups.addGroup);if($('div.jGroupsList').length>0)
{$('div.jGroupsList').sudoSlider({slideCount:6,autowidth:false,autoheight:false,controlsAttr:'id="recoControls"',nextHtml:'<a class="nextBtn" href="#" aria-hidden="true" data-icomoon="&#59186;"></a>',prevHtml:'<a class="prevBtn" href="#" aria-hidden="true" data-icomoon="&#59190;"></a>'});}},addGroup:function()
{var addGroupAjax=function(){var	$this=$(this),data={id_question:$this.attr('data-idCat'),xhr:'xhr'};data['id_r_q_'+data.id_question+'[]']=$this.attr('data-id');$.ajax({type:'POST',url:'/g/_xhr_addGroup',dataType:'json',data:data,success:function(json)
{if(typeof json.success!='undefined')
{$this.addClass('app_btn--disabled').removeClass('jAddGroup');}
$.note.info('Vous faites à présent parti du groupe "'+$this.attr('data-title')+'"');}});}.bind(this);if(_$('$data.copains.modale.subscribeNl')._.allow){$.subscribeNl.subscribeNl({onClose:addGroupAjax});}else{addGroupAjax();}}};if(_$('$data.copains.services')._.groups)
{$(document).start($.groups.init);}})(jQuery);(function($)
{'use strict';$.fn.paginator=function(options)
{options=$.extend(true,{},$.fn.paginator.defaultOptions,options);$(document).on('click',this.selector+' '+options.itemSelector,function(e)
{e.preventDefault();var $this=$(this);$.ajax({type:'GET',url:$this.attr('href'),data:{xhr:'xhr'},dataType:'json',success:function(ret)
{if(typeof ret.html!='undefined')
{$this.closest(options.listSelector).html(ret.html);}}});});return this;};$.fn.paginator.defaultOptions={itemSelector:'a',listSelector:'.jListContainer > ul'};})(jQuery);(function($)
{'use strict';$.feeds={getDataFromLine:function(e,options)
{var $this=$(e.target),$line=$this.closest(options.itemSelector),$list=$line.closest(options.listSelector),data=jQuery.parseJSON($line.attr('data-action'));data.list=jQuery.parseJSON($list.attr('data-infos'));return data;},updateItem:function(e,options)
{e.preventDefault();var data=$.feeds.getDataFromLine(e,options);$.ajax({type:'POST',url:'/f/_xhr_updateForm',dataType:'json',data:data,success:function(response)
{if(typeof response.html!=='undefined')
{$('<div>').html(response.html).dialog({minWidth:900,minHeight:450,height:'auto',dialogClass:'jModalDialog copains_dialog_tastes',position:['center','center'],modal:true});}}});},deleteItem:function(e,options)
{e.preventDefault();$.copains.core.initDivModal();var $list=$(e.target).closest(options.listSelector),data=$.feeds.getDataFromLine(e,options);$.copains.core.showInVerificationBox('','Etes vous sûr de vouloir supprimer cet élément ? ',function()
{$.ajax({type:'POST',url:'/f/_xhr_deleteFeed',dataType:'json',data:data,success:function(response)
{if(typeof response.html!=='undefined')
{$list.find('ul').html(response.html);$.note.info(response.msg);}}});$.copains.core.closeDialog();});}};$.fn.feeds=function(options)
{options=$.extend(true,{},$.fn.feeds.defaultOptions,options);$(this.selector).on('click',options.itemSelector+' .jBtnUpdate',function(e){$.feeds.updateItem(e,options);}).on('click',options.itemSelector+' .jBtnDelete',function(e){$.feeds.deleteItem(e,options);}).commentsList();return this;};$.fn.feeds.defaultOptions={itemSelector:'.jFeed',listSelector:'.jListContainer'};})(jQuery);(function($)
{$.ImageActions={updateUserLogo:function(thumbUrl,imageUrl,deleteLogo)
{var domain=$data.common.env==='prod'?'':$data.common.env+'.';domain+='linternaute.com';$.cookie('uimage',thumbUrl,{expires:30,path:'/',domain:domain});window.location.reload();exit();deleteLogo=deleteLogo||false;$('div.photoUserThumb_s, div.photoUserThumb_xs').attr('style','background-image: url('+thumbUrl+')');$('.jImageProfile').attr({src:imageUrl});$('.jLogo').find('img').attr({src:imageUrl}).closest('a').attr({href:imageUrl});$('#header_user_media').css({backgroundImage:'url('+thumbUrl+')'});}};})(jQuery);(function($)
{var isViadeo=($data.app_name=='viadeo'),isCda=($data.app_name=='copainsdavant');var templateDialog='<div id="jUpdateCareer" class="" style="max-height: 650px;">'
+'${titleDialog}'
+'<div class="ccmcss_form form_whatsup form formError">'
+'<form>'
+'<fieldset class="jMainForm">'
+'${dataDialog}'
+'</fieldset>';if(isViadeo){templateDialog=templateDialog+'<div class="form_info">Afin de vous protéger de sollicitations indésirables, les liens, numéros de téléphone ou adresses mail sont interdits.</div>';}
templateDialog=templateDialog+'<footer class="ccmcss_form__line--no_col jValidationBtn" style="display:none">'+'<a class="linter_btn_2 btnSubmit" href="javascript:void(0);">$l{VALIDATION}</a>'
+'<a class="linter_btn_1 jCloseDialog" href="javascript:void(0);">$l{CANCEL}</a>'
+'</footer>'
+'</form>'
+'</div>'
+'</div>';var templateForm='${autocomplete}'
+'<div id="addOrganization" style="display:none">'
+'<label class="ccmcss_form__line grid_line jFormLine">'
+'<div class="grid_left">$l{ADD_ORGANIZATION_NAME}</div>'
+'<div class="grid_last">'
+'<input type="text" id="txtName" name="txtName" class="inputTxt">'
+'<div id="divErrorName" class="msg txtR divError" style="display: none;"></div>'
+'</div>'
+'</label>'
+'<label class="ccmcss_form__line grid_line jFormLine">'
+'<div class="grid_left">$l{ADD_ORGANIZATION_COUNTRY}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select id="country"></select></span>'
+'</div>'
+'</label>'
+'<label class="ccmcss_form__line grid_line jFormLine">'
+'<div class="grid_left">$l{ADD_ORGANIZATION_TOWN}</div>'
+'<div class="grid_last" id="autocompleteTownDiv">'
+'<input class="inputTxt" autocomplete="off" placeholder="$l{SEARCH_TOWN}" type="text" id="autocompleteTown" />'
+'<div id="divErrorTown" class="msg txtR divError" style="display: none;"></div>'
+'</div>'
+'</label>'
+'<div class="initOrganization txtR"><a href="javascript:void(0);" class="initOrganization">$l{LABEL_CANCEL}</a></div>'
+'</div>'
+'${autocompleteCity}'
+'<label for="jCurrently" class="ccmcss_form__line ccmcss_form__line--no_col jFormLine jStillData">'
+'<input type="checkbox" id="jCurrently"> $l{STILL_HERE}'
+'</label>'
+'<div class="grid_line ccmcss_form__line ccmcss_form__line--date jFormLine jDateData">'
+'<div class="grid_left">$l{DATES}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="monthB jSelectChange" style="width:105px;" data-name="md">'
+'<option value="0">$l{MONTH}</option>${listMonth}'
+'</select></span><span class="ccmcss_form__select_wrapper"><select class="yearB jSelectChange" style="width:95px;" data-name="ad">'
+'<option value="0">$l{YEAR}</option>${listYear}'
+'</select></span><span>$l{TO}</span><span class="ccmcss_form__select_wrapper"><select class="monthE jSelectChange" style="width: 105px;" data-name="mf">'
+'<option value="0">$l{MONTH}</option>${listMonth}'
+'</select></span><span class="ccmcss_form__select_wrapper"><select class="yearE jSelectChange" style="width: 95px" data-name="af">'
+'<option value="0">$l{YEAR}</option>${listYear}'
+'</select></span><span style="display: none;" class="jCurrentlyToday">$l{TODAY}</span>'
+'<div id="jDateHelp" class="copTheme2 clearL padT5" style="display: block;"></div>'
+'<div id="divErrorDate" class="jMsg txtR divError" style="display: none;"></div>'
+'</div>'
+'</div>'
+'${extraForm}'
+'<div class="grid_line ccmcss_form__line jFormLine jAddCareerMessage" style="display:none">'
+'<div class="grid_left">$l{ADD_CAREER_MESSAGE}</div>'
+'<div class="grid_last">'
+'<textarea  rows="4" id="detailFct" autocomplete="off" placeholder="$l{CAREER_MORE_DETAILS}">${careerDetails}</textarea>'
+'</div>'
+'</div>',templateAutocompleteOrganization='<label class="ccmcss_form__line grid_line jFormLine jAutocompleteDiv">'
+'<div class="grid_left">${organizationName}</div>'
+'<div class="grid_last">'
+'<div class="careerName marL20 marT10" style="display:none;">'
+'<span class="name"></span>'
+'&nbsp;<a href="javascript:void(0);" class="initAutocomplete ud">$l{MODIFICATION}</a>'
+'</div>'
+'<input class="inputTxt" autocomplete="off" placeholder="${searchText}" type="text" id="autocomplete" />'
+'<div id="divErrorEtablissement" class="msg txtR divError" style="display: none;"></div>'
+'</div>'
+'</label>',templateAutocompleteProfession='<label class="ccmcss_form__line grid_line jFormLine jAutocompleteProfessionDiv">'
+'<div class="grid_left">$l{ADD_PROFESSION_NAME}</div>'
+'<div class="grid_last">'
+'<div class="professionName" style="display:none;">'
+'<span class="name"></span>'
+'&nbsp;<a href="javascript:void(0);" class="initAutocompleteProfession a_hover">$l{MODIFICATION}</a>'
+'</div>'
+'<input class="inputTxt" autocomplete="off" placeholder="$l{SEARCH_PROFESSION}" type="text" id="autocompleteProfession" />'
+'<div id="divErrorProfession" class="msg txtR divError" style="display: none;"></div>'
+'</div>'
+'</label>',templateAutocompleteOrganizationJDNR=templateAutocompleteOrganization
+'<label class="ccmcss_form__line grid_line jFormLine jAlias" style="display:none">'
+'<div class="grid_left">$l{OLD_ORGANIZATION_NAME}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="input bloc" data-name="alias">'
+'</select></span>'
+'</div>'
+'</label>',templateAutocompleteCity='<label class="ccmcss_form__line grid_line jFormLine jAutocompleteCityDiv">'
+'<div class="grid_left">$l{CITY}</div>'
+'<div class="grid_last">'
+'<div class="cityName marL20 marT10" style="display:none;">'
+'<span class="name"></span>'
+'&nbsp;<a href="javascript:void(0);" class="initAutocompleteCity ud a_hover">$l{MODIFICATION}</a>'
+'</div>'
+'<input class="inputTxt" autocomplete="off" placeholder="$l{SEARCH_CITY}" type="text" id="autocompleteCity" />'
+'<div id="divErrorCity" class="msg txtR divError" style="display: none;"></div>'
+'</div>'
+'</label>',templateChooseType='<label class="ccmcss_form__line grid_line jFormLine jTypeSelector">'
+'<div class="grid_left">$l{CAREER_TYPE}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="input bloc jSelectType" data-name="type">'
+'<option value="0">$l{PICK_A_CAREER_TYPE}</option>'
+'<option value="ec">$l{ADD_NEW_SCHOOL}</option>'
+'<option value="c">$l{ADD_NEW_SECONDARY_SCHOOL}</option>'
+'<option value="l">$l{ADD_NEW_HIGH_SCHOOL}</option>'
+'<option value="u">$l{ADD_NEW_UNIVERSITY}</option>'
+'<option value="en">$l{ADD_NEW_EMPLOYER}</option>'
+'<option value="a">$l{ADD_NEW_ASSOCIATION}</option>'
+'<option value="m">$l{ADD_NEW_MILITARY}</option>'
+'<option value="h">$l{ADD_NEW_HOLIDAY}</option>'
+'</select></span>'
+'</div>'
+'</label>',templateChooseTypeJDNR='<label class="ccmcss_form__line grid_line jFormLine jTypeSelector">'
+'<div class="grid_left">$l{CAREER_TYPE}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="input bloc jSelectType" data-name="type">'
+'<option value="0">$l{PICK_A_CAREER_TYPE}</option>'
+'<option value="u">$l{ADD_NEW_UNIVERSITY}</option>'
+'<option value="en">$l{ADD_NEW_EMPLOYER}</option>'
+'</select></span>'
+'</div>'
+'</label>',templateChooseSectorHighSchool='<label class="ccmcss_form__line grid_line jFormLine">'
+'<div class="grid_left">$l{SECTOR}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="jSelectChange" id="typeHighSchool" data-name="f">'
+'<option value="0">$l{PICK_A_SECTOR_HS}</option>'
+'<option value="62">$l{SECTOR_HS_GENERAL}</option>'
+'<option value="63">$l{SECTOR_HS_PRO}</option>'
+'<option value="64">$l{SECTOR_HS_BTS}</option>'
+'<option value="65">$l{SECTOR_HS_MATHSUP}</option>'
+'<option value="66">$l{SECTOR_HS_HEC}</option>'
+'<option value="67">$l{SECTOR_HS_KHAGNE}</option>'
+'<option value="68">$l{SECTOR_HS_PREPABIO}</option>'
+'<option value="69">$l{SECTOR_HS_OTHERPREPA}</option>'
+'</select></span>'
+'</div>'
+'</label>',templateChooseTypeSchool='<label class="ccmcss_form__line grid_line jFormLine">'
+'<div class="grid_left">$l{FONCTION}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="jSelectChange" id="typeSchool" data-name="pi">'
+'<option value="400">$l{TYPE_SCHOOL_STUDENT}</option>'
+'<option value="320">$l{TYPE_SCHOOL_TEACHER}</option>'
+'</select></span>'
+'</div>'
+'</label>',templateValidationDialog='<h2>$l{DELETING_CAREER_VALIDATION_TXT}</h2>'
+'<div class="ccmcss_form">'
+'<p>${year}</p>'
+'<p>${etablissement} - ${town}</p>'
+'</div>',templateChooseSectorUniversity='<label class="ccmcss_form__line grid_line jFormLine">'
+'<div class="grid_left">$l{SECTOR}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="jSelectChange" id="typeUniversity" data-name="f">'
+'<option value="0">$l{PICK_A_SECTOR_UNIVERSITY}</option>'
+'<option value="41">$l{SECTOR_UNIVERSITY_OTHER}</option>'
+'<option value="12">$l{SECTOR_UNIVERSITY_ADMIN}</option>'
+'<option value="43">$l{SECTOR_UNIVERSITY_ARCHEO}</option>'
+'<option value="1">$l{SECTOR_UNIVERSITY_ART}</option>'
+'<option value="2">$l{SECTOR_UNIVERSITY_BEAUXARTS}</option>'
+'<option value="42">$l{SECTOR_UNIVERSITY_BIOLOGY}</option>'
+'<option value="26">$l{SECTOR_UNIVERSITY_CHEMISTRY}</option>'
+'<option value="3">$l{SECTOR_UNIVERSITY_CINEMA}</option>'
+'<option value="5">$l{SECTOR_UNIVERSITY_SELL}</option>'
+'<option value="6">$l{SECTOR_UNIVERSITY_COMMUNICATION}</option>'
+'<option value="13">$l{SECTOR_UNIVERSITY_ACCOUNTING}</option>'
+'<option value="8">$l{SECTOR_UNIVERSITY_LAW}</option>'
+'<option value="14">$l{SECTOR_UNIVERSITY_ECONOMY}</option>'
+'<option value="27">$l{SECTOR_UNIVERSITY_ELECTRONIC}</option>'
+'<option value="10">$l{SECTOR_UNIVERSITY_TEACHING}</option>'
+'<option value="15">$l{SECTOR_UNIVERSITY_FINANCE}</option>'
+'<option value="11">$l{SECTOR_UNIVERSITY_PUBLIC}</option>'
+'<option value="16">$l{SECTOR_UNIVERSITY_GESTION}</option>'
+'<option value="28">$l{SECTOR_UNIVERSITY_HIGHWAY_ENGINEERING}</option>'
+'<option value="18">$l{SECTOR_UNIVERSITY_GEOGRAPHY}</option>'
+'<option value="19">$l{SECTOR_UNIVERSITY_HISTORY}</option>'
+'<option value="29">$l{SECTOR_UNIVERSITY_COMPUTING}</option>'
+'<option value="30">$l{SECTOR_UNIVERSITY_ENGINEERING}</option>'
+'<option value="20">$l{SECTOR_UNIVERSITY_MEDIA_STUDIES}</option>'
+'<option value="21">$l{SECTOR_UNIVERSITY_FOREIGN_LANGUAGE}</option>'
+'<option value="22">$l{SECTOR_UNIVERSITY_LETTER}</option>'
+'<option value="31">$l{SECTOR_UNIVERSITY_MATH}</option>'
+'<option value="32">$l{SECTOR_UNIVERSITY_MECANIC}</option>'
+'<option value="23">$l{SECTOR_UNIVERSITY_MEDECINE}</option>'
+'<option value="4">$l{SECTOR_UNIVERSITY_MUSIC}</option>'
+'<option value="45">$l{SECTOR_UNIVERSITY_ODONTOLOGY}</option>'
+'<option value="24">$l{SECTOR_UNIVERSITY_PHARMACY}</option>'
+'<option value="35">$l{SECTOR_UNIVERSITY_PHILOSOPHY}</option>'
+'<option value="33">$l{SECTOR_UNIVERSITY_PHYSICAL}</option>'
+'<option value="36">$l{SECTOR_UNIVERSITY_PSYCOLOGY}</option>'
+'<option value="7">$l{SECTOR_UNIVERSITY_PUBLICITY}</option>'
+'<option value="17">$l{SECTOR_UNIVERSITY_HUMAN_ENGINEERING}</option>'
+'<option value="44">$l{SECTOR_UNIVERSITY_SCIENCES}</option>'
+'<option value="34">$l{SECTOR_UNIVERSITY_EARTH_SCIENCES}</option>'
+'<option value="37">$l{SECTOR_UNIVERSITY_HUMAN_SCIENCES}</option>'
+'<option value="25">$l{SECTOR_UNIVERSITY_SOCIAL}</option>'
+'<option value="38">$l{SECTOR_UNIVERSITY_SOCIO}</option>'
+'<option value="39">$l{SECTOR_UNIVERSITY_SPORT}</option>'
+'<option value="40">$l{SECTOR_UNIVERSITY_THEOLOGY}</option>'
+'</select></span>'
+'</div>'
+'</label>',templateDepartment='<label class="ccmcss_form__line grid_line jFormLine jDepartmentSelectBox">'
+'<div class="grid_left">$l{SERVICE}</div>'
+'<div class="grid_last">'
+'<span class="ccmcss_form__select_wrapper"><select class="jSelectChange" id="typeDepartment" data-name="f">'
+'<option value="0">$l{PICK_A_SECTOR_DEPARTMENT}</option>'
+'<option value="99">$l{SECTOR_DEPARTMENT_OTHER}</option>'
+'<option value="85">$l{SECTOR_DEPARTMENT_OFFICE_WORKER}</option>'
+'<option value="86">$l{SECTOR_DEPARTMENT_MARKETING_WORKER}</option>'
+'<option value="87">$l{SECTOR_DEPARTMENT_COMMUNICATION}</option>'
+'<option value="88">$l{SECTOR_DEPARTMENT_COMPTABILITY}</option>'
+'<option value="89">$l{SECTOR_DEPARTMENT_GESTION_CONTROL}</option>'
+'<option value="90">$l{SECTOR_DEPARTMENT_GENERAL_MANAGEMENT}</option>'
+'<option value="91">$l{SECTOR_DEPARTMENT_FINANCE}</option>'
+'<option value="92">$l{SECTOR_DEPARTMENT_IT}</option>'
+'<option value="93">$l{SECTOR_DEPARTMENT_LEGAL}</option>'
+'<option value="94">$l{SECTOR_DEPARTMENT_MARKETING}</option>'
+'<option value="95">$l{SECTOR_DEPARTMENT_PRODUCTION}</option>'
+'<option value="96">$l{SECTOR_DEPARTMENT_LIBERAL}</option>'
+'<option value="97">$l{SECTOR_DEPARTMENT_HUMAN_RESOURCE}</option>'
+'<option value="98">$l{SECTOR_DEPARTMENT_TECHNIC}</option>'
+'</select></span>'
+'</div>'
+'</label>'
+'${autocompleteProfession}',list_month={1:'$l{JANV}',2:'$l{FEVR}',3:'$l{MARS}',4:'$l{AVRIL}',5:'$l{MAI}',6:'$l{JUIN}',7:'$l{JUIL}',8:'$l{AOUT}',9:'$l{SEPT}',10:'$l{OCT}',11:'$l{NOV}',12:'$l{DEC}'},listYear='',listMonth='',type,dataCareer={},$formButton,typePage='profil',initDone=false,initFormDone=false,dataExist=false,$divNav=$('#jCareerList');$.updateCareer={init:function()
{$.updateCareer.autocompleteSelected=false;if(initDone===false)
{$divNav.on('click','a.jModifCareer',$.updateCareer.updateCareer).on('click','a.jAddCareer',$.updateCareer.addCareer).on('click','a.jDeleteCareer',$.updateCareer.deleteCareer);$(document).on('OpenCareerModale',$.updateCareer.addCareer);$('body').on('click','a.jAddCareerFromEtab',$.updateCareer.updateCareer);initDone=true;}},displayButton:function()
{if(!jQuery.isEmptyObject(dataCareer))
{$formButton.removeClass('app_btn--disabled');}},hideButton:function()
{$formButton.addClass('app_btn--disabled');},addCareer:function()
{var data={},$type=$(this).attr('data-type'),dataDialog='',titleDialog='<h2>Ajouter un établissement</h2>';dataDialog=$.copains.core.getTemplate(typeof $data.common.jdnr!=='undefined'?templateChooseTypeJDNR:templateChooseType);if(typeof $type!='undefined')
{dataDialog=$('<div>').append($(dataDialog).hide()).html();switch($type)
{case'en':titleDialog='<h2>Ajouter une entreprise</h2>';break;case'u':titleDialog='<h2>Ajouter une formation</h2>';break;}}
data.title='<b>'+$.copains.core.langs[$.copains.core.lang].ADD_NEW_CAREER+'</b>';data.html=$($.copains.core.getTemplate(templateDialog,$.extend({},{dataDialog:dataDialog,titleDialog:titleDialog})));data.html.find('form').submit(function(){return false;});$.copains.core.showInDialogBox(data);$('#jDivModal select.jSelectType').blur();$.updateCareer.delegateDialog();if(typeof $type!='undefined')
{$.updateCareer.selectTypeChange($type);}},deleteCareer:function()
{var $this=$(this),$contener=$this.closest('.jModerateCareer'),$line=$this.closest('li'),idCareer=$contener.attr('data-id');$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].DELETING_CAREER_VALIDATION_TITLE,$.copains.core.getTemplate(templateValidationDialog,$.extend({},{year:$line.find('.jCareerDate').html(),etablissement:$line.find('.jCareerLabel').html(),town:$line.find('.jCcareerTown').html()})),function()
{$.ajax({type:'POST',url:'/parcours/_xhr_deleteCareer/',dataType:'json',data:{idCareer:idCareer,xhr:'xhr'},success:function(response)
{$divNav.html(response.html);$.note.info($.copains.core.langs[$.copains.core.lang].DELETING_CAREER_OK);$.googleEvents.send('copainsdavant','organization','delete_career',undefined,true);}});$.copains.core.closeDialog();});},currentlyAction:function(checkbox)
{checkbox=checkbox||$(this);var $dateData=$('.jMainForm .jDateData'),$dateElement=$dateData.find('select.monthE, select.yearE'),$dateElementParent=$dateElement.parent('.ccmcss_form__select_wrapper'),$currentlyElement=$dateData.find('.jCurrentlyToday');if(typeof checkbox.attr('checked')!='undefined')
{(typeof dataCareer.tj!='undefined')&&(dataCareer.tj==0)&&(dataCareer.m=1);$dateElement.hide();$dateElementParent.hide();$currentlyElement.show();dataCareer.tj=1;}else
{(typeof dataCareer.tj!='undefined')&&(dataCareer.tj==1)&&(dataCareer.m=1);$dateElement.show();$dateElementParent.show();$currentlyElement.hide();dataCareer.tj=0;}},selectChange:function()
{var $this=$(this);if($this.attr('data-name')=='pi')
{delete dataCareer.pi;delete dataCareer.p;}
dataCareer[$this.attr('data-name')]=$this.val();dataCareer.ip&&(dataCareer.m=1);$.updateCareer.displayButton();},selectTypeChange:function(typeChanged)
{if(typeof typeChanged!='object')
{var typeSelected=typeChanged;}
else{var	$this=$(this),typeSelected=$this.val();}
var	$jMainForm=$('div#jUpdateCareer fieldset.jMainForm'),$typeSelector=$jMainForm.find('.jTypeSelector');dataExist=false;dataCareer={};if(typeSelected!=='0')
{type=typeSelected;$.updateCareer.initForm();var templatesList={listMonth:listMonth,listYear:listYear,extraForm:$.updateCareer.displayExtraForm(),careerDetails:(typeof dataCareer.d!='undefined')?dataCareer.d:''},organizationName='Nom de l\'établissement';searchText='Indiquez le nom de l\'établissement et la ville';switch(type)
{case'en':organizationName='Nom de l\'entreprise';searchText='Indiquez le nom de l\'entreprise et la ville';break;}
templatesList.autocomplete=$.copains.core.getTemplate(templateAutocompleteOrganization,$.extend({},{organizationName:organizationName,searchText:searchText}));if(type=='en'||isViadeo)
{templatesList.autocompleteCity=$.copains.core.getTemplate(templateAutocompleteCity);if(isViadeo){templatesList.autocomplete=$.copains.core.getTemplate(templateAutocompleteOrganizationJDNR,$.extend({},{organizationName:organizationName,searchText:searchText}));}}
$jMainForm.empty().append($typeSelector,$.copains.core.getTemplate(templateForm,$.extend({},templatesList)));if(isViadeo){$.updateCareer.initCityAutocomplete(true);}
switch(type)
{case'en':$.updateCareer.initProfessionAutocomplete();if(!isViadeo){$.updateCareer.initCityAutocomplete();}
if(isViadeo){$jMainForm.find('.jAddCareerMessage').show();}
break;case'ec':$('#jDateHelp').html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_SCHOOL,$.extend({},{yearBegin:$data.copains.user.birthdayYear+3,yearEnd:$data.copains.user.birthdayYear+11,yearBirth:$data.copains.user.birthdayYear})));break;case'c':$('#jDateHelp').html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_SECONDARY_SCHOOL,$.extend({},{yearBegin:$data.copains.user.birthdayYear+11,yearEnd:$data.copains.user.birthdayYear+15,yearBirth:$data.copains.user.birthdayYear})));break;case'l':$('#jDateHelp').html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_HIGH_SCHOOL,$.extend({},{yearBegin:$data.copains.user.birthdayYear+15,yearEnd:$data.copains.user.birthdayYear+18,yearBirth:$data.copains.user.birthdayYear})));break;case'u':$('#jDateHelp').html($.copains.core.getTemplate($.copains.core.langs[$.copains.core.lang].DATE_HELP_UNIVERSITY,$.extend({},{yearBegin:$data.copains.user.birthdayYear+18,yearBirth:$data.copains.user.birthdayYear})));if(isCda||isViadeo){$jMainForm.find('.jAddCareerMessage').show();}
break;}
$('div#jUpdateCareer .jValidationBtn').show();$.updateCareer.initAutocomplete();$.updateCareer.hideButton();}
else{$('div#jUpdateCareer .jValidationBtn').hide();}
$(".ui-dialog-content").dialog("option","position",['center','center']);},delegateDialog:function()
{$('div#jUpdateCareer').on('change','select.jSelectType',$.updateCareer.selectTypeChange).on('change','select.jSelectChange',$.updateCareer.selectChange).on('click','input#jCurrently',function(){$.updateCareer.currentlyAction($(this));}).on('click','input#autocompleteCity',function(){$.updateCareer.resetCity()}).on('click','a.btnSubmit',$.updateCareer.sendForm).on('click','a.initAutocomplete',function(){$.updateCareer.reInitAutocomplete($(this),'careerName','jAutocompleteDiv',true);}).on('click','a.initOrganization',function(){$.updateCareer.cancelCreation();}).on('click','a.initAddOrganization',function(){$.updateCareer.initAddOrganization($(this).attr('data-name'));}).on('click','a.initAutocompleteProfession',function(){$.updateCareer.reInitAutocomplete($(this),'professionName','jAutocompleteProfessionDiv',false);}).on('focus','textarea#detailFct',$.updateCareer.displayButton);$('div#jUpdateCareer').on('click','a.initAutocompleteCity',function(){$.updateCareer.reInitAutocomplete($(this),'cityName','jAutocompleteCityDiv',false);});$formButton=$('div#jUpdateCareer div.btnWrap');},resetCity:function()
{if(isViadeo){delete dataCareer.v;delete dataCareer.vi;}},updateCareer:function()
{var $contener=$(this).closest('.jModerateCareer');$.updateCareer.updateCareerForm($contener.attr('data-id'),$contener.attr('data-ide'));},updateCareerForm:function(idCareer,idEtab)
{var $oldDiv=$('div#jUpdateCareer');dataExist=(typeof idEtab!="undefined"||typeof idCareer!="undefined");if($oldDiv.length>0)
{$oldDiv.remove();}
$.ajax({type:'POST',url:'/parcours/_xhr_getCareerData/',dataType:'json',data:{idCareer:idCareer,idEtab:idEtab,xhr:'xhr'},complete:function(a,b,data)
{if(b==='success')
{dataCareer=data.html;$.updateCareer.initForm();type=dataCareer.ty;var params={listMonth:listMonth,listYear:listYear,autocomplete:'',extraForm:$.updateCareer.displayExtraForm(),careerDetails:(typeof dataCareer.d!='undefined')?dataCareer.d:''};if(typeof dataCareer.vi!='undefined'){params['autocompleteCity']=templateAutocompleteCity;}
data.title=$.copains.core.getTemplate('<b>'+dataCareer.ne+'</b>');data.html=$.copains.core.getTemplate(templateDialog,$.extend({},{dataDialog:$.copains.core.getTemplate(templateForm,$.extend({},params))}));$.copains.core.showInDialogBox(data);(type=='en')&&$.updateCareer.initProfessionAutocomplete();var $updateCareer=$('div#jUpdateCareer');$updateCareer.find('select.monthB option[value='+dataCareer.md+']').attr('selected','selected');$updateCareer.find('select.yearB option[value='+dataCareer.ad+']').attr('selected','selected');if(typeof dataCareer.af=='undefined')
{$updateCareer.find('input#jCurrently').attr('checked','checked');dataCareer.af=0;dataCareer.mf=0;dataCareer.tj=1;}
else{$updateCareer.find('select.monthE option[value='+dataCareer.mf+']').attr('selected','selected');$updateCareer.find('select.yearE option[value='+dataCareer.af+']').attr('selected','selected');dataCareer.tj=0;}
if(typeof dataCareer.p!='undefined')
{var $professionDiv=$updateCareer.find('div.professionName');$professionDiv.show().find('span.name').html(dataCareer.p);$professionDiv.closest('div.input').removeClass('input');$updateCareer.find('input#autocompleteProfession').val(dataCareer.p).hide();}
if(typeof dataCareer.pi!='undefined')
{$updateCareer.find('select.jSelectChange[data-name=pi] option[value='+dataCareer.pi+']').attr('selected','selected');}
if(typeof dataCareer.f!='undefined')
{$updateCareer.find('select.jSelectChange[data-name=f] option[value='+dataCareer.f+']').attr('selected','selected');}
$.updateCareer.currentlyAction($updateCareer.find('input#jCurrently'));$.updateCareer.delegateDialog();$.updateCareer.initAutocomplete();if(typeof dataCareer.vi!='undefined'||isViadeo){$.updateCareer.initCityAutocomplete(true);}
$updateCareer.find('input#autocomplete').val(dataCareer.ne);$updateCareer.find('.jValidationBtn').show();dataExist&&$.updateCareer.displayButton();if(isCda||isViadeo){$updateCareer.find('.jAddCareerMessage').show();}else if(dataCareer.ty=='u'){$updateCareer.find('.jDepartmentSelectBox').hide();$updateCareer.find('.jAutocompleteProfessionDiv').hide();}}}});},displayExtraForm:function()
{var txt='';switch(type)
{case'ec':case'c':txt+=$.copains.core.getTemplate(templateChooseTypeSchool);break;case'l':txt+=$.copains.core.getTemplate(templateChooseTypeSchool);txt+=$.copains.core.getTemplate(templateChooseSectorHighSchool);break;case'u':if(isCda){txt+=$.copains.core.getTemplate(templateChooseTypeSchool);txt+=$.copains.core.getTemplate(templateChooseSectorUniversity);}
break;case'en':txt+=$.copains.core.getTemplate(templateDepartment,$.extend({},{autocompleteProfession:$.copains.core.getTemplate(templateAutocompleteProfession)}));break;}
return txt;},initForm:function()
{if(initFormDone===false)
{for(var $i=$data.copains.user.birthdayYear;$i<=(new Date).getFullYear();$i++)
{listYear+='<option value="'+$i+'">'+$i+'</option>';}
for(var $j=1;$j<=12;$j++)
{listMonth+='<option value="'+$j+'">'+list_month[$j]+'</option>';}
initFormDone=true;}},initCityAutocomplete:function(show)
{$.profile&&console.time('$.updateCareer => initCityAutocomplete');$autocompleteCity=$('div#jUpdateCareer input#autocompleteCity');function setAutocompleteCity()
{var $divParent=$('#autocompleteCity');$divParent.hide();$divParent.closest('div.input').removeClass('input');$('div#jUpdateCareer div.cityName').show().find('span.name').html(dataCareer.v);$autocompleteCity.val(dataCareer.v);}
if(typeof dataCareer.v!="undefined"){setAutocompleteCity();}
$autocompleteCity.ccmComplete({source:function(req,res){var termSearch=req['term'].toLowerCase(),urlXhrLocation='/s/',ajaxData={recherche:termSearch,xhr:'xhr'};if(isViadeo){urlXhrLocation=$data.copains.services.geolocation.options.urlGeolocName;ajaxData={q:termSearch,xhr:'xhr',type:'ccmcomplete'}}
$.ajax({type:'POST',url:urlXhrLocation,dataType:"json",localCache:true,data:ajaxData,success:function(data){if(isViadeo){res($.map(data.list,function(item){return{label:item.name,value:item.name,id:item.id};}));}else{res($.map(data,function(item){return{label:item.label,value:item.value,id:item.id};}));}}});},open:function(){$('div.box3 ul.ui-autocomplete').css({width:'600px','z-index':999999}).parent().css({width:'600px','z-index':999999});},minLength:3,select:function(event,ui)
{if(!jQuery.isEmptyObject(dataCareer))
{dataCareer.vi=ui.item.id;dataCareer.v=ui.item.value;}else{dataCareer={vi:ui.item.id,v:ui.item.value};}
setAutocompleteCity();}});$(".ui-dialog-content").dialog("option","position",['center','center']);if(show!=true){$('#jUpdateCareer .jAutocompleteCityDiv').hide();}
$.profile&&console.timeEnd('$.updateCareer => initCityAutocomplete');},initProfessionAutocomplete:function()
{$.profile&&console.time('$.updateCareer => initProfessionAutocomplete');$('div#jUpdateCareer input#autocompleteProfession').ccmComplete({source:function(req,res){var termSearch=req['term'].toLowerCase();$.ajax({type:'POST',url:'/pro/_xhr_search_profession/',dataType:"json",localCache:true,data:{recherche:termSearch,xhr:'xhr'},success:function(data){res($.map(data,function(item){return{label:item.label,value:item.value,id:item.id};}));}});},open:function(){$('div.box3 ul.ui-autocomplete').css({width:'600px','z-index':999999}).parent().css({width:'600px','z-index':999999});},minLength:3,select:function(event,ui)
{var $divParent=$('#autocompleteProfession');if(!jQuery.isEmptyObject(dataCareer))
{dataCareer.pi=ui.item.id;dataCareer.p=ui.item.value;(typeof dataCareer.ip!='undefined')&&(dataCareer.m=1);}else{dataCareer={pi:ui.item.id,p:ui.item.value};}
$divParent.hide();$divParent.closest('div.input').removeClass('input');$('div#jUpdateCareer div.professionName').show().find('span.name').html(dataCareer.p);}});$(".ui-dialog-content").dialog("option","position",['center','center']);$.profile&&console.timeEnd('$.updateCareer => initProfessionAutocomplete');},initAutocomplete:function()
{$.profile&&console.time('$.updateCareer => initAutocomplete');$('div#jUpdateCareer input#autocomplete').ccmComplete({preSelectFirst:true,source:function(request,response){$.ajax({url:'/s/',cache:($data.common.env!='local'),dataType:"json",localCache:($data.common.env!='local'),storageName:'search',localCacheTimeout:2*60*60*1000,data:{q:$.trim(request.term.toLowerCase()),xhr:true,ty:2,type_etablissement:type,byType:true},success:function(data)
{var res=[];if(data!=null){res=$.map(data.r,function(item)
{if(typeof item.label=="undefined")return;if(typeof item.alias_name!="undefined"&&item.alias_name!=null&&item.alias_name.length>0){item.ti=item.alias_name+' ('+item.ti+')';}
if(isViadeo){var label='<span class="line block">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'+item.ti+'</span>'
+((item.nb!=null)?('<em>- '+item.nb+' '+$.copains.core.langs[$.copains.core.lang].INSCRITS+'</em>'):'')
+'</span>';}else{var label='<span class="line block">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'+item.ti+'</span>'
+((item.label!=null&&item.label!='Aucune')?('<em>'+item.label+'</em>'):'')
+((item.nb!=null)?('<em> - '+item.nb+' '+$.copains.core.langs[$.copains.core.lang].INSCRITS+'</em>'):'')
+'</span>';}
var itemParams={label:label,value:item.ti,id:item.id};if(typeof item.alias_id!="undefined"&&item.alias_id!=null){itemParams.aliasId=item.alias_id;}
if(type==='en'&&typeof item.vi!=='undefined'){itemParams.vi=item.vi;}
return itemParams;});}
var addItemLabel=isViadeo?'':'<span class="addUserPopup">'+$.copains.core.getTemplate('$l{CREATE_NEW_ORGANIZATION}')+' <span class="copTheme1">'+request.term+'</span></span>';if(!isViadeo){res.push({label:'<span class="line block">'
+'<div class="bloc imgW26Cter imgS0Cter marR5">'
+'<div class="imgS0">'
+'<div class="imgW26 sizeSquare" style="background-image: url(\''+$data.common.assetUrl+'/copainsdavant.linternaute.com/skin/common/img/category/Inscription.jpg\');"></div>'
+'</div>'
+'</div>'
+addItemLabel
+'</span>',value:request.term,id:null});}
response(res);}});},open:function()
{$autoComp=$('div.box3 ul.ui-autocomplete');$autoComp.css({width:$autoComp.width(),'z-index':999999}).parent().css({width:$autoComp.width(),'z-index':999999});},minLength:1,select:function(event,ui)
{$.updateCareer.autocompleteSelected=true;var $divParent=$('#autocomplete');if(ui.item.id==null)
{$.updateCareer.initAddOrganization(ui.item.value);}
else
{if(ui.item.vi=='Aucune'||ui.item.vi==''){$.ajax({url:'/s/alias/',cache:true,dataType:"json",localCache:true,storageName:'searchAlias',localCacheTimeout:2*60*60*1000,data:{etbId:ui.item.id},success:function(data){var $divAlias=$('.jAlias');var aliasSelect='';for(var key in data){if(!data.hasOwnProperty(key)){continue;}
aliasSelect+='<option value="'+key+'">'+data[key]+'</option>';}
if(aliasSelect.length>0){$divAlias.find('select').html(aliasSelect);$divAlias.show();if(typeof ui.item.aliasId!=='undefined'&&ui.item.aliasId>0){$('[data-name=alias]').val(ui.item.aliasId);}}}});}
$divParent.hide();if(!jQuery.isEmptyObject(dataCareer))
{dataCareer.ie=ui.item.id;dataCareer.ne=ui.item.value;(typeof dataCareer.ip!='undefined')&&(dataCareer.m=1);}else{dataCareer={ie:ui.item.id,t:type,ne:ui.item.value};}
$.updateCareer.displayButton();$divParent.closest('div.input').removeClass('input');$('div#jUpdateCareer div.careerName').show().find('span.name').html(dataCareer.ne);if(type==='en'){if(typeof ui.item.vi==='undefined'||ui.item.vi===''||ui.item.vi=='Aucune'){$('#jUpdateCareer .jAutocompleteCityDiv').show();}else{$('#jUpdateCareer .jAutocompleteCityDiv').hide();}}}},close:function(event){if(!isViadeo&&$.updateCareer.autocompleteSelected===false){$.updateCareer.initAddOrganization($('div#jUpdateCareer input#autocomplete').val());}}});$(".ui-dialog-content").dialog("option","position",['center','center']);$.profile&&console.timeEnd('$.updateCareer => initAutocomplete');},initAddOrganization:function(organizationName)
{var $divCreateOrg=$('div#jUpdateCareer div#addOrganization'),$selectCountry=$divCreateOrg.find('select#country'),countrySelect='';$('div#jUpdateCareer input#autocomplete').val('').closest('.jAutocompleteDiv').hide();$('div#jUpdateCareer').hideFormError();$.ajax({type:'POST',url:'/country/_xhr_return_country/',data:{xhr:'xhr'},dataType:'json',success:function(json){for(var index in json){var country=json[index];countrySelect+='<option value="'+country.key+'">'+country.name+'</option>';}
$selectCountry.html(countrySelect);$selectCountry.find('option[value=\'297\']').attr('selected','selected');$divCreateOrg.on('change','select#country',function(){$divCreateOrg.find('input#autocompleteTown').val('');});$divCreateOrg.show();$divCreateOrg.find('input#txtName').val(organizationName);$.copains.core.initTownAutocomplete($('div#jUpdateCareer input#autocompleteTown'),{paysTarget:'div#jUpdateCareer select#country option:selected',callbackSelect:function(event,ui){dataCareer.it=ui.item.id;},hiddenId:false});$(".ui-dialog-content").dialog("option","position",['center','center']);}});},cancelCreation:function()
{$.profile&&console.time('$.updateCareer => cancelCreation');$('div#jUpdateCareer div#addOrganization').hide();$('div#jUpdateCareer input#txtName').val('');$('div#jUpdateCareer input#autocompleteTown').val('');$('div#jUpdateCareer div.jAutocompleteDiv').find('input').val('').blur().closest('div.jAutocompleteDiv').show();$(".ui-dialog-content").dialog("option","position",['center','center']);$.profile&&console.timeEnd('$.updateCareer => cancelCreation');},reInitAutocomplete:function(self,divName,autocompleteName,career)
{var careerDiv=self.closest('div.'+divName);if(career==true)
{delete dataCareer.ie;delete dataCareer.ne;}else{delete dataCareer.pi;delete dataCareer.p;}
careerDiv.closest('.jFormLine').find('input').val('').blur().show();careerDiv.hide();$.updateCareer.hideButton();$.updateCareer.displayButton();$.updateCareer.autocompleteSelected=false;$(".ui-dialog-content").dialog("option","position",['center','center']);},sendForm:function(e)
{$('div#jUpdateCareer').hideFormError();var $autoPro=$('div#jUpdateCareer input#autocompleteProfession'),$autoCar=$('div#jUpdateCareer input#autocomplete'),$inputOrg=$('div#jUpdateCareer input#txtName'),$careerDetails=$('textarea#detailFct'),$formCareer=$('div#jUpdateCareer'),$autoCity=$('div#jUpdateCareer input#autocompleteCity');($autoPro.length>0)&&$autoPro.val()!=$autoPro.data('default')&&(dataCareer.pt=$autoPro.val())&&(dataCareer.m=1);if($autoCity.length>0){dataCareer.v=$autoCity.val();}
dataCareer.d=($careerDetails.val()!=$careerDetails.data('default'))?$careerDetails.val():'';dataCareer.m=1;($inputOrg.length>0)&&(dataCareer.no=$inputOrg.val())&&(dataCareer.ty=type)&&(dataCareer.m=1);($autoCar.length>0)&&$autoCar.is(":visible")&&$autoCar.val()!=$autoCar.data('default')&&(dataCareer.no=$autoCar.val());dataCareer.ty=type;var aliasId=parseInt($('.jAlias [data-name=alias]').val())
if(aliasId>0){dataCareer.aliasId=aliasId;}
$formCareer.loading('On');$formCareer.data("loadingNode").$spin.css({display:'inline'});$.ajax({type:'POST',url:'/parcours/_xhr_addCareer/',dataType:'json',data:{data:{0:dataCareer},xhr:'xhr'},success:function(response)
{$formCareer.loading('Off');if(response.success==true)
{$(document).trigger('careerCreated',[dataCareer]);$divNav.html(response.html);$.copains.core.closeDialog();if(typeof dataCareer.ip=='undefined')
{$.note.info($.copains.core.langs[$.copains.core.lang].ADDING_CAREER_OK);$.googleEvents.send('copainsdavant','organization','register',undefined,true);}
else{$.note.info($.copains.core.langs[$.copains.core.lang].UPDATING_CAREER_OK);$.googleEvents.send('copainsdavant','organization','update_career',undefined,true);}
return;}
$.each(response.errors,function(p,vp)
{$.each(vp,function(k,v){switch(k){case'ad':case'af':case'md':case'mf':$('div#divErrorDate').showInputError(v);break;case'no':$('input#txtName').showInputError(v);break;case'it':$('input#autocompleteTown').showInputError(v);if(isViadeo){$('input#autocompleteCity').showInputError(v);}
break;case'pt':$('div#divErrorProfession').showInputError(v);break;case'ie':$('input#autocomplete').showInputError(v);break;}});});}});return;}};if(_$('$data.copains.services')._.updateCareer)
{$(document).start($.updateCareer.init);}})(jQuery);(function($)
{var initDone=false;$.addReview={init:function()
{if(initDone===false)
{$.addReview.initProfessionAutocomplete();initDone=true;}},initProfessionAutocomplete:function()
{$.profile&&console.time('$.updateCareer => initProfessionAutocomplete');$('div#jUpdateCareer input#autocompleteProfession').ccmComplete({source:function(req,res){var termSearch=req['term'].toLowerCase();$.ajax({type:'POST',url:'/pro/_xhr_search_profession/',dataType:"json",localCache:true,data:{recherche:termSearch,xhr:'xhr'},success:function(data){res($.map(data,function(item){return{label:item.label,value:item.value,id:item.id};}));}});},open:function(){$('div.box3 ul.ui-autocomplete').css({width:'600px','z-index':999999}).parent().css({width:'600px','z-index':999999});},minLength:3,select:function(event,ui)
{$('#autocompleteProfession').val(ui.item.value);}});$(".ui-dialog-content").dialog("option","position",['center','center']);$.profile&&console.timeEnd('$.updateCareer => initProfessionAutocomplete');}};if(_$('$data.copains.services')._.addReview)
{$(document).start($.addReview.init);}})(jQuery);(function($)
{var
isViadeo=($data.app_name=='viadeo'),$tabEtab=$(isViadeo?'.jTabEtablissement #ui-nav':'#jTabEtablissement #ui-nav'),$formFilter=$('#jFrmFiltersEtab'),$formTri=$tabEtab.find('#jFrmTriEtab'),originalStart=$('#jOrganizationArrivalYear').val(),originalEnd=$('#jOrganizationDepartureYear').val(),originalNameSort=$('.jTriEtab').val(),defaultTab='inscrits',isCda=($data.app_name=='copainsdavant'),etablissements={init:function()
{$(document).on('careerCreated',function()
{$('#jInscriptionButton').hide();$('.jAddPhotoButton').show();});var ccmUiTabParams={};if(isViadeo)
{var avisFunc=function()
{$('.jButton').css('display','none');$('.jButton.jButtonReview').css('display','inline-block');$('#jFrmTriEtab').parent().hide();},recitsFunc=function()
{$('.jButton').css('display','none');$('.jButton.jButtonJobInterview').css('display','inline-block');$('#jFrmTriEtab').parent().hide();},photosFunc=function()
{$('.jButton').css('display','none');$('.jButton.jButtonPicture').css('display','inline-block');$('input#orgsearchbox').parent().hide();$('#jFrmTriEtab').parent().hide();},infosFunc=function()
{$('.jButton').css('display','none');$('#jFrmTriEtab').parent().hide();$('input#orgsearchbox').parent().hide();},inscritFunc=function()
{$('.jButton').css('display','none');$('input#orgsearchbox').parent().show();$('#jFrmTriEtab').parent().show();},salaryFunc=function()
{$('.jButton').css('display','none');$('#jFrmTriEtab').parent().hide();$('.jCompareSalary').css('display','inline-block');$('.jSalariesByProfession select[name="order"]').on('change',function(){var url=$(this).attr('data-url');url=url.replace('%order%',$(this).val());document.location.href=url;});$(document).trigger('refresh',[{services:{reportDialog:{start:true}}}]);$('.jActivateSalaryAction').editSalary();};ccmUiTabParams={tabHandlers:{select:{'avis':function()
{avisFunc();},'recits':function()
{recitsFunc();},'photos':function()
{photosFunc();},'inscrits':function()
{inscritFunc();},'infos':function()
{infosFunc();},'salaires':salaryFunc},load:{'avis':function()
{avisFunc();$('#avisWall').feeds();$('.jAvisPaginator').paginator();$(document).trigger('refresh',[{services:{reportDialog:{start:true}}}]);},'recits':function()
{recitsFunc();$('#jobWall').feeds();$('.jJobPaginator').paginator();$(document).trigger('refresh',[{services:{reportDialog:{start:true}}}]);},'photos':function()
{photosFunc();$(document).trigger('refresh',[{services:{fancybox:{start:true}}}]);},'inscrits':function()
{inscritFunc();},'infos':function()
{infosFunc();},'salaires':salaryFunc}}};$('.jAvisPaginator').paginator();}
$tabEtab.ccmUITabs(ccmUiTabParams);if(isViadeo){defaultTab='infos';}
$formFilter.on('change','.jFilterEtab',etablissements.refreshCurrentTabs);$formTri.on('change','.jTriEtab',etablissements.refreshCurrentTabs);$('input#orgsearchbox').updatable({delay:200}).bind('updated',function(e){etablissements.updatePage();});$formTri.submit(function(){return false;});History.Adapter.bind(window,'statechange',function()
{var State=History.getState(),url=State.data.url,type=State.data.type;type=='etablissement'&&etablissements.pagination(url);});},pagination:function(url)
{var typeVal=$tabEtab.ccmTabs('getAnchorByPosition').attr('data-key'),searchVal=$('#orgsearchbox').val();$tabEtab.ccmTabs('getContainerByPosition').ajaxUpdate(url,{organization_arrival_year:$('#jOrganizationArrivalYear').val(),organization_departure_year:$('#jOrganizationDepartureYear').val(),tri_nom:$('#tri_par_nom').val(),query:searchVal==$('#orgsearchbox').attr('default')?undefined:searchVal,type:typeVal==defaultTab?undefined:typeVal,xhr:'xhr'},{type:'POST',dataType:'json',scroll:false,anim:false,complete:function()
{$('body').scrollTo($('#col_middle'),0,{axis:'y'});},beforeDomManip:function(){}});},refreshCurrentTabs:function(e,ui)
{var $target=$(e.target),valDepart=$formFilter.find('select#jOrganizationDepartureYear').val(),valArrive=$formFilter.find('select#jOrganizationArrivalYear').val();$target.is('#tri_par_date')&&$('#tri_par_nom').find('option:first').attr('selected','selected');$target.is('#tri_par_nom')&&$('#tri_par_date').find('option:first').attr('selected','selected');if(valDepart<valArrive)
{$target.is('#jOrganizationDepartureYear')&&$formFilter.find('select#jOrganizationArrivalYear').val(valDepart);$target.is('#jOrganizationArrivalYear')&&$formFilter.find('select#jOrganizationDepartureYear').val(valArrive);}
etablissements.updatePage();},updatePage:function()
{etablissements.updateTabs($tabEtab.find('a[data-key]'));$tabEtab.ccmTabs('load',$tabEtab.ccmTabs('option','selected'));},updateData:function(tabs)
{var url,type,modified=false,newStart=$('select#jOrganizationArrivalYear').val(),newEnd=$('select#jOrganizationDepartureYear').val(),nameSort=$formTri.find('select#tri_par_nom').val(),query=($formTri.find('input#orgsearchbox').val()==$formTri.find('input#orgsearchbox').data('default'))?'':$formTri.find('input#orgsearchbox').val();tabs.each(function()
{type=($(this).attr('data-key')==defaultTab?'':$(this).attr('data-key'));modified=(originalStart!=newStart||originalEnd!=newEnd||originalNameSort!=nameSort);url=$data.common.selfurl+'?'
+(type?'&type='+type:'')
+(modified?'&organization_arrival_year='+newStart:'')
+(modified?'&organization_departure_year='+newEnd:'')
+(nameSort?'&tri_nom='+nameSort:'')
+(query?'&q='+query:'');$(this).data('href.tabs',url).data('load.tabs',url);});},updateTabs:function(tabs)
{etablissements.updateData(tabs);tabs.data('cache.tabs',false);}};$(document).start(etablissements.init);})(jQuery);(function($)
{$.imageEtablissement={init:function()
{$(document).on('click','a.jAddImageEtab',$.imageEtablissement.showForm).on('click','a.jDelImageEtab',$.imageEtablissement.delImageEtab).on('click','a.initAutocomplete',function(){$.imageEtablissement.reInitAutocomplete($(this),'etabName','autocompleteDiv');});},delImageEtab:function(e)
{var $this=$(this),etabId=$this.attr('data-id'),$jManImg=$this.closest('.jManageImg'),$divModal=$.copains.core.initDivModal();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].CONTENT_TITLE_CONFIRM_DELETE_IMAGE_ETAB,$.copains.core.getTemplate('$l{CONTENT_CONFIRM_DELETE_IMAGE_ETAB}'),function()
{$.ajax({type:'POST',url:'/e/_xhr_delete_logo',dataType:'json',data:{etabId:etabId,xhr:'xhr'},success:function(data)
{if(data.success===true)
{$.note.info(data.msg);$jManImg.replaceWith(data.html);}}});$.copains.core.closeDialog();});},showForm:function(e)
{e.preventDefault();$.imageEtablissement.sendForm($(this).attr('data-id'),$(this).attr('data-type'));},sendForm:function(idEtab,photoType)
{$.ajax({type:'POST',url:'/e/addphoto',dataType:'json',data:{xhr:'xhr',id:idEtab,photoType:photoType},complete:function(a,b,data)
{data.title=(typeof(idEtab)!='undefined')?$.copains.core.getTemplate('$l{ETAB_ADD_PHOTO} - <b>${lib}</b>',$data.copains.etabs[idEtab]):$.copains.core.getTemplate('$l{ETAB_ADD_PHOTO}');$.copains.core.showInDialogBox(data);$.imageEtablissement.fileUploadInit();(typeof(idEtab)=='undefined')&&$.imageEtablissement.initAutocomplete();}});},initAutocomplete:function()
{$('div#ajout_photo input#autocomplete').ccmComplete({preSelectFirst:true,source:function(request,response){$.ajax({url:'/s/',cache:true,dataType:"json",localCache:true,storageName:'search',localCacheTimeout:2*60*60*1000,data:{q:$.trim(request.term.toLowerCase()),xhr:true,ty:2},success:function(data)
{var res=[];if(data!=null){res=$.map(data.r,function(item)
{if(item.label==undefined)return;return{label:'<span class="line block">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'+item.ti+'</span>'
+((item.label!=null)?('<em>'+item.label+'</em>'):'')
+((item.nb!=null)?('<em> - '+item.nb+' '+$.copains.core.langs[$.copains.core.lang].INSCRITS+'</em>'):'')
+'</span>',value:item.ti,id:item.id};});}
response(res);}});},open:function()
{$autoComp=$('div.box3 ul.ui-autocomplete');$autoComp.css({width:$autoComp.width(),'z-index':999999}).parent().css({width:$autoComp.width(),'z-index':999999});},minLength:1,select:function(event,ui)
{var $divParent=$('#autocomplete');$divParent.hide();$('div#ajout_photo #id').val(ui.item.id);$divParent.closest('div.input').removeClass('input');$('div#ajout_photo div.etabName').show().find('span.name').html(ui.item.value);}});},reInitAutocomplete:function(self,divName,autocompleteName)
{var etabDiv=self.closest('div.'+divName);$('div#ajout_photo #id').val('');etabDiv.closest('div.line').find('input').val('').blur().show().parent().addClass('input');etabDiv.hide();},fileUploadInit:function()
{var dataFile,$flagErrors;$("#btnCancelAddPhoto").click(function(){$.copains.core.closeDialog();});var year=typeof $data.copains.page.actualYear!="undefined"?$data.copains.page.actualYear:'';if(year!=''){$('#annee').val(year);}
$('#frmPhotoEtab').submit(function(){$flagErrors=0;$(this).hideFormError();if($('#frmPhotoEtab select#annee').val()=="")
{$('#annee').showInputError('Le champ "année"  n\'est pas selectionné.');$flagErrors=1;}
if($('#frmPhotoEtab #photo_titre').val()=="")
{$('#photo_titre').showInputError('Le libellé est vide.');$flagErrors=1;}
if($('#frmPhotoEtab #id').val()=="")
{$('#autocomplete').showInputError('L\'établissement est inconnu');$flagErrors=1;}
if($flagErrors==0){$fileUpload.fileupload('send',dataFile);return false;}
else{return false;}});var $fileUpload=$('div#ajout_photo').fileupload
({acceptFileTypes:/(\.|\/)(gif|jpeg|png|jpg)$/i,autoUpload:false,singleFileUploads:true,dropZone:$('form#frmPhotoEtab div.dragDropZone'),dataType:'json',url:'/e/addphoto?xhr=plaintext&upload'}).bind('fileuploadstart',function(e,data)
{var $formPhotoEtab=$('form#frmPhotoEtab');$formPhotoEtab.loading('On');$formPhotoEtab.data("loadingNode").$spin.css({display:'inline'});}).bind('fileuploadadd',function(e,data)
{dataFile=data;$('form#frmPhotoEtab table.files').html('');$('#fromComp').show("slow");}).bind('fileuploaddone',function(e,data){$('form#frmPhotoEtab').loading('Off');if(data.result.success==true)
{if($('input:hidden[name=photo_type]').val()==335)
{window.location.reload();return;}
$.copains.core.closeDialog();window.location=data.result.url;return;}
$.each(data.result.errors,function(k,v)
{switch(k){case'photo_annee':$('#annee').showInputError(v);break;case'photo_titre':$('#photo_titre').showInputError(v);break;case'image':$('input#filImage').showInputError(v);break;default:break;}});});$(".photoType").click(function()
{if($(this).val()=="332")
{$('.jId322').show();$('.jOther').hide("fast");}
else
{$('.jOther').show();$('.jId322').hide("fast");}});}};if(_$('$data.copains.services')._.imageEtablissement)
{$(document).start($.imageEtablissement.init);}})(jQuery);(function($)
{$.createAccount={init:function()
{$(document).on('click','.jDeleteProfile',$.createAccount.deleteAccount).on('click','#frmPasswd input#btnSubmitPass',$.createAccount.sendForm).on('change','#frmPrivacy input:checkbox,#frmAlert input:checkbox,#frmAlert input:radio',$.createAccount.sendForm).on('click','input#FakeBtnSubmitDisplayNote',function()
{$.note.info($.copains.core.langs[$.copains.core.lang].MODIFICATION_OK);});($('#action').val()=='inscription')&&$.createAccount.initAccountFormInscription();},deleteAccount:function(event)
{$.copains.core.initDivModal();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].CONTENT_TITLE_CONFIRM_DELETE_ACCOUNT,$.copains.core.getTemplate('$l{CONTENT_CONFIRM_DELETE_ACCOUNT}'),function()
{$.ajax({type:'POST',url:'/p/_xhr_delete_account',dataType:'json',data:{xhr:'xhr',token:$(event.target).data('token')},success:function(data)
{if(data.success===true)
{$.note.info(data.msg);window.location='/';}}});$.copains.core.closeDialog();});$('#jDivModal').parent().find("[label=OK]").attr('data-event','clickDeleteAccount');},initAccountFormInscription:function()
{$.copains.core.initTownAutocomplete($('input#txtVille'),{minLength:1,paysTarget:'select#idPays option:selected'});var $form=$('.jRecaptcha');$form.ccmGoogleRecaptcha({apiOptions:{sitekey:$form.data('recaptcha_key')},placeholder:'.placeholder',successCallback:function($form,recaptchaData){$.createAccount.sendForm($form,recaptchaData);return false;}});},sendForm:function(e,recaptchaData)
{var $form=$(this).closest('form');$form.hideFormError();if($form.attr('id')=='frmPrivacy'){var $checkbox=$(this);if($checkbox.attr('name')=='privacy_view_profile_information[]'||$checkbox.attr('name')=='privacy_view_contact_list[]'||$checkbox.attr('name')=='privacy_send_message[]'){var checkboxValue=$checkbox.attr('value'),checkboxName=$checkbox.attr('name'),total_privacy=0,total_checkbox=0;if(checkboxValue==31||checkboxValue==0){if($checkbox.prop('checked')==true){$("#frmPrivacy input[name='"+checkboxName+"']").each(function(){$(this).prop("checked",false);});$checkbox.prop('checked',true);total_privacy=checkboxValue;total_checkbox++;}}else{$("#frmPrivacy input[name='"+checkboxName+"']").each(function(){if($(this).attr("value")==31||$(this).attr("value")==0){$(this).prop("checked",false);}else if($(this).prop("checked")){total_privacy+=parseInt($(this).attr("value"));total_checkbox++;}});}
if(total_checkbox==0){total_privacy=0;}
$checkbox.attr('name')=='privacy_view_profile_information[]'&&$("input#view_profile_information").attr("value",total_privacy);$checkbox.attr('name')=='privacy_view_contact_list[]'&&$("input#view_contact_list").attr("value",total_privacy);$checkbox.attr('name')=='privacy_send_message[]'&&$("input#send_message").attr("value",total_privacy);}}
var url='/p/_xhr_validate_user/';if($form.attr('id')=='frmPasswd'){url='/p/_xhr_validate_user_password/';}else if($form.attr('id')=='frmPrivacy'){if($(e.target).prop('name')=='maskedActivities'){url='/ds/_xhr_change_display_setting/';}else{url='/p/_xhr_validate_user_privacy/';}}else if($form.attr('id')=='frmAlert'){url='/p/_xhr_validate_user_alert/';}
var getData=function(selector,handler)
{var $sel=$(selector);if($sel.is(':visible')||(selector=='input#idville'&&$form.attr('id')=='frmAccount')||(selector=='select#idPays option:selected'&&$form.attr('id')=='frmAccount')||(selector=='input#view_profile_information'&&$form.attr('id')=='frmPrivacy')||(selector=='input#view_contact_list'&&$form.attr('id')=='frmPrivacy')||(selector=='input#send_message'&&$form.attr('id')=='frmPrivacy')){return handler.call($sel);}
return undefined;},thisVal=function()
{return this.val();},thisChecked=function()
{return this.prop('checked')?1:0;};var flagAlertGroup=[];$('.jAlertGroup').each(function(){if($(this).prop('checked')==true){flagAlertGroup.push($(this).val());}});$('.jMsg').html('');$('.jFormLineError').removeClass('jFormLineError');var data={civilite:getData('input[name=txtCivilite]:checked',thisVal),xhr:'xhr',nom:getData('input#txtNom',thisVal),prenom:getData('input#txtPrenom',thisVal),nom_de_jeune_fille:getData('input#txtNomDeJeuneFille',thisVal),password:getData('input#pwdPass',thisVal),password_confirmation:getData('input#pwdPassConf',thisVal),password_old:getData('input#pwdPassOld',thisVal),email:getData('input#txtEmail',thisVal),tel:getData('input#txtTel',thisVal),jour_de_naissance:getData('select#jourDeNaissance',thisVal),mois_de_naissance:getData('select#moisDeNaissance',thisVal),annee_de_naissance:getData('select#anneeDeNaissance',thisVal),flag_accepte_message_partenaire:getData('input[name=flagAccepteMessagePartenaire]:checked',thisVal),flag_affichage_ville:getData('input#displayVille',thisChecked),flag_affichage_date_de_naissance:getData('input#displayAge',thisChecked),flag_affiche_profil_pour_non_membre:getData('input#displayProfileForNonMember',function(){return this.prop('checked')?0:1;}),flag_indexation_autorisee:getData('input#displayInSearchEngine',thisChecked),flag_alerte_condition:getData('input[name=alertInscriptionCondition]:checked',thisVal),flag_alerte_condition_jdnr:getData('input[name=alertInscriptionConditionJDNR]:checked',thisVal),flag_alerte_notification:getData('input#alertNotification',thisChecked),flag_alerte_identification_sur_photo:getData('input#alertTagPhoto',thisChecked),flag_alerte_identification_autres_sur_photo:getData('input#alertTagOthersPhoto',thisChecked),flag_alerte_new_event:getData('input#alertFriendEvent',thisChecked),flag_alerte_friend_qdn:getData('input#alertFriendQDN',thisChecked),flag_alerte_wanted:getData('input#alertWanted',thisChecked),flag_alerte_friend_news_recap:getData('input#alertFriendNewsRecap',thisChecked),flag_alerte_inscription_recap:getData('input#alertInscriptionRecap',thisChecked),flag_alerte_fete:getData('input#alertFeastDay',thisChecked),flag_alerte_anniversaire:getData('input#alertBirthday',thisChecked),flag_alerte_setcareer:getData('input#alertSetCareer',thisChecked),add_to_relation:getData('input[name=addToRelation]',function(){return this.prop('checked')?this.prop('value'):0;}),view_profile_information:getData('input#view_profile_information',thisVal),view_contact_list:getData('input#view_contact_list',thisVal),send_message:getData('input#send_message',thisVal),flag_view_contact_list:getData('input#flag_view_contact_list',thisChecked),flag_view_profile_information:getData('input#flag_view_profile_information',thisChecked),id_pays:getData('select#idPays option:selected',thisVal),ville:getData('input#txtVille',thisVal),id_ville:$('input#idville').val(),invitationMail:$('input#invitationMail').val(),url:$('input#url').val(),action:$('input#action').val(),token:$('input#token').val(),'token-subscribe':$('input#token-subscribe').val(),flag_alerte_group:flagAlertGroup.join(','),act:getData('input[name=maskedActivities]',function(){return'showMasquedActivity';}),g_recaptcha_response:recaptchaData!==undefined?recaptchaData.token:null};if($data.app_name=='viadeo'){data.viadeo_newsletters=getData('input#viadeoNewsletters',thisChecked);}
$.ajax({type:'POST',url:url,dataType:'json',data:(data),success:function(json)
{if(json.result==true)
{if($('input#action').val()=='inscription')
{if(json.action=='inscription')
{$.googleEvents.send('copainsdavant','inscription',undefined,undefined,true);if(_$('$data')._.listeningInscription){var birthYear=0;if(json.birthYear){birthYear=json.birthYear;}
$(document).trigger('inscriptionComplete',[birthYear]);return;}
if(typeof json.url!='undefined')
{window.location=json.url;return;}
window.location='/validate/';return;}
window.location='/';return;}
$.googleEvents.send('copainsdavant','profile','update',undefined,true);$('input#pwdPass').attr('value','');$('input#pwdPassOld').attr('value','');$('input#pwdPassConf').attr('value','');$.note.info($.copains.core.langs[$.copains.core.lang].MODIFICATION_OK);return;}
$.each(json.infos,function(k,v){switch(k){case'id_ville':$('input#idville').attr('value',v);break;}});var $_elementToGoTo=$_firstElement=$_default={length:0};$.each(json.errors,function(k,v){switch(k){case'jour_de_naissance':case'mois_de_naissance':case'annee_de_naissance':$_elementToGoTo=$('#jourDeNaissance');$_elementToGoTo.showInputError(v);break;case'civilite':$_elementToGoTo=$('#txtCivilite1');$_elementToGoTo.showInputError(v);break;case'nom':$_elementToGoTo=$('#txtNom');$_elementToGoTo.showInputError(v);break;case'prenom':$_elementToGoTo=$('#txtPrenom');$_elementToGoTo.showInputError(v);break;case'nom_de_jeune_fille':$_elementToGoTo=$('#txtNomDeJeuneFille');$_elementToGoTo.showInputError(v);break;case'email':$_elementToGoTo=$('#txtEmail');$_elementToGoTo.showInputError(v);break;case'tel':$_elementToGoTo=$('#txtTel');$_elementToGoTo.showInputError(v);break;case'password':$_elementToGoTo=$('#pwdPass');$_elementToGoTo.showInputError(v);$('#pwdPassConf').showInputError('');break;case'password_confirmation':$_elementToGoTo=$('#pwdPassConf');$_elementToGoTo.showInputError(v);break;case'password_old':$_elementToGoTo=$('#pwdPassOld');$_elementToGoTo.showInputError(v);break;case'pays':$_elementToGoTo=$('#idPays');$_elementToGoTo.showInputError(v);break;case'ville':case'id_ville':$_elementToGoTo=$('#txtVille');$_elementToGoTo.showInputError(v);break;default:break;}
if(($_firstElement==$_default&&$_elementToGoTo!=$_default)||($_elementToGoTo.offset().top<$_firstElement.offset().top)){$_firstElement=$_elementToGoTo;}});$_firstElement.length>0&&$('body').scrollTo($_firstElement,0,{axis:'y'});}});}};if(_$('$data.copains.services')._.createAccount)
{$(document).start($.createAccount.init);}})(jQuery);(function($)
{$.advancedSearch={init:function()
{this.initSearch();$('#ui-nav').ccmUITabs({history:true});},initSearch:function()
{$.copains.core.initTownAutocomplete($('input#txtVille'),{minLength:1,pays:false});$.copains.core.initEtablissementAutocomplete($('input#txtEtb'));}};if(_$('$data.copains.services')._.advancedSearch)
{$(document).start(function(){$.advancedSearch.init();});}})(jQuery);(function($){var
$txtProfession=$('input#txtProfession'),$idProfession=$('input#idProfession'),$body=$('body'),$form,optionTab={history:true,tabHandlers:{load:{'informations':function()
{$form=$('form#frmMyLife').submit(function(){return false;});var $txtProfession=$('input#txtProfession'),$idProfession=$('input#idProfession');$('textarea#txtIntroduction').focusout(function(){$body.trigger('sendForm');});$txtProfession.ccmComplete({source:function(req,res)
{var termSearch=req.term.toLowerCase();$.ajax({type:'POST',url:'/pro/_xhr_search_profession/',dataType:'json',localCache:true,data:{recherche:termSearch,xhr:'xhr'},success:function(data)
{res($.map(data,function(item)
{return{label:item.value,value:item.value,id:item.id};}));}});},minLength:3,select:function(event,ui){$idProfession.attr('value',ui.item.id).data('nomProfession',ui.item.value);$txtProfession.attr('value',ui.item.value);$body.trigger('sendForm');}}).updatable({delay:2000}).bind('updated',function(e){($idProfession.data('nomProfession')!=$txtProfession.val())&&$idProfession.attr('value','');$body.trigger('sendForm');});}}}},myLife={init:function()
{$('#ui-nav, .ui-sub-nav').ccmUITabs(optionTab);$body.bind('sendForm',myLife.sendForm).on('change','#frmMyLife select',myLife.sendForm).on('change','#frmMyLife input:checkbox',myLife.sendForm);},sendForm:function(e)
{$form.ajaxSubmit({beforeSubmit:function(){$form.hideFormError();},success:function(json){if(json===true){if($('#emploi').val()!=''||$('#divProfession #txtProfession').val()!=''||$('#divProfession #idProfession').val()!=''){$('#divProfession').show();}else{$('#divProfession').hide();}
$.note.info($.copains.core.langs[$.copains.core.lang].MODIFICATION_OK);return;}},error:function(){console.log("Erreur");}});}};if(_$('$data.copains.services')._.myLife)
{$(document).start(myLife.init);}})(jQuery);(function($)
{var $divImport=$('#jImportContact'),$divResult=$('.jSearchResult'),$btnToModP=$('.jImportStepTwo'),$btnToModR=$('a.btnSubmit'),nbCopains,nbNonCopains;$.imports={getTextEmailError:function(emailList)
{var email,txt=$.copains.core.langs[$.copains.core.lang].IMPORT_FOLLOWING_EMAILS+' : <ul>';for(var i in emailList)
{if(emailList.hasOwnProperty(i))
{txt+='<li> - '+emailList[i]+'</li>';}}
txt+='</ul>'+$.copains.core.langs[$.copains.core.lang].IMPORT_VERIFICATION_EMAILS;return txt;},getTextEmailExist:function(emailList)
{var email,txt=$.copains.core.langs[$.copains.core.lang].IMPORT_ALLREADY_EMAILS+' : <ul>';for(var i in emailList)
{if(emailList.hasOwnProperty(i))
{txt+='<li> - '+emailList[i]+'</li>';}}
return txt;},init:function()
{($btnToModP.length>0)&&$btnToModP.attr('value',$.copains.core.langs[$.copains.core.lang].BTN_NEXT);$('.jFrmImport').submit(function()
{$.imports.sendForm($(this));return false;});$('.jPageImport').on('click','.jImportStepTwo, btnSubmit',function()
{if(!$divResult.is(':visible'))
{if($divImport.data('type')=='undefined')
{return false;}
$.imports.sendForm($('form#jFrmImport'+$divImport.data('type')));return false;}
var $contactCopains=$divResult.find('div.jContactCopains'),$btn=$(this);if($contactCopains.is(':visible')&&(nbCopains!=0)&&(nbNonCopains>0))
{$btn.hasClass('jImportStepTwo')?$btn.attr('value',$.copains.core.langs[$.copains.core.lang].BTN_BACK):$btn.html($.copains.core.langs[$.copains.core.lang].BTN_NEXT);$contactCopains.hide();$('.jTitleContactCopains').hide();$divResult.find('div.jContactNonCopains').show();$('.jTitleContactNonCopains').show();$('body').scrollTo(0);}
else
{if(window.document.URL.match(/\/r\//i))
{window.location='/r/parcours/';return;}
$divResult.hide();$divImport.closest('div.jSearchFriends').show();$('div.jValidStep').hide();$('body').scrollTo(0);}});$divResult.on('click','a.jNext',$.imports.nextContacts);},nextContacts:function()
{var $this=$(this);$this.closest('.jContactList').find('.jPropositionLine:hidden:lt(20001)').show();$this.remove();},sendForm:function(form)
{$divImport.hideFormError();var typeImport='mail',$form=$(form),$btn=$form.find('div.btnWrap');typeof typeImport!='undefined'&&$divImport.spin()&&$.ajax({type:'POST',url:'/p/_xhr_imports/',dataType:'json',data:({type_import:typeImport,xhr:'xhr',password:$form.find('input.txtPassword').val(),email:$form.find('input.txtEmail').val()}),complete:function(a,b,json)
{$divImport.spin();if(b==='success')
{if(typeof json.errors=='undefined')
{nbCopains=json.nbC;nbNonCopains=json.nbNC;$divImport.parent().hide();$divResult.html(json.datas);if(nbCopains>0)
{if(nbNonCopains>0)
{($btnToModP.length>0)?$btnToModP.attr('value',$.copains.core.langs[$.copains.core.lang].BTN_NEXT):$btnToModR.html($.copains.core.langs[$.copains.core.lang].BTN_NEXT);}
else{($btnToModP.length>0)?$btnToModP.attr('value',$.copains.core.langs[$.copains.core.lang].BTN_BACK):$btnToModR.html($.copains.core.langs[$.copains.core.lang].BTN_NEXT);}
$divResult.find('div.jContactCopains').show();}
if(nbCopains==0&&nbNonCopains>0)
{($btnToModP.length>0)?$btnToModP.attr('value',$.copains.core.langs[$.copains.core.lang].BTN_BACK):$btnToModR.html($.copains.core.langs[$.copains.core.lang].BTN_NEXT);$('.jTitleContactNonCopains').show();$divResult.find('div.jContactNonCopains').show();}
$divResult.show();$('div.jValidStep').show();}
else{$.each(json.errors,function(k,v){switch(k){case'listEmails':$form.find('input.txtEmail').showInputError(v[0]);var data={};data.buttons={};data.buttons[$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_OK]=function(){$.copains.core.closeDialog();};data.title=$.copains.core.langs[$.copains.core.lang].IMPORT_EMAILS_ERROR_TITLE;data.html=$.imports.getTextEmailError(v[1]);$.copains.core.showInDialogBox(data);break;case'listEmailsA':var data={};data.buttons={};data.buttons[$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_OK]=function(){$.copains.core.closeDialog();};data.title=$.copains.core.langs[$.copains.core.lang].IMPORT_EMAILS_ERROR_TITLE;data.html=$.imports.getTextEmailExist(v);$.copains.core.showInDialogBox(data);break;case'txtEmailPassword':$form.find('input.txtEmail').showInputError(' ');$form.find('input.txtPassword').showInputError(v);break;case'txtEmail':case'txtPassword':$form.find('input.'+k).showInputError(v);break;}});}}}});return false;}};if(_$('$data.copains.services')._.imports)
{$(document).start($.imports.init);}})(jQuery);(function($)
{var $wall,wall={verificationBox:true,init:function()
{$wall=$('.jCommentsList');$(document).bind('wallRefreshing',wall.refreshWall);$(document).on('click','.jStopBlocPhoto',wall.stopBlocPhoto).on('click','.jStopBlocFriendsProposal',wall.stopBlocFriendsProposal);$('.jWall').on('click','.jBtnDelete',wall.deleteActionButtonClick).on('click','.jBtnHide',wall.hideActionButtonClick).on('click','.jDeleteSelectedWall',wall.multipleDelete).on('click','.jEditContent',wall.showEditContentUI).on('click','.jSaveContent',wall.saveContent).on('mouseover','.jTlAction',function dropDownOptionsShow(e)
{var $target=$(e.currentTarget);$target.find('.jBtnDelete').show();$target.find('.jBtnHide').show();$target.find('.jBtnReport').show();$target.find('.jEditTitle').show();$target.find('.jEditContent').show();}).on('mouseout','.jTlAction',function dropDownOptionsHide(e)
{var $target=$(e.currentTarget);!$target.hasClass('deleted')&&$target.find('.jBtnDelete').hide()&&$target.find('.jBtnHide').hide()&&$target.find('.jBtnReport').hide()&&$target.find('.jEditContent').hide()&&$target.find('.jEditTitle').hide();});$('.jCommentsText').autoResizeTextAreaQ({"max_rows":8});$.profile&&console.timeEnd('wall => init');},multipleDelete:function(e)
{wall.verificationBox=false;$("input:checkbox[data-form='wall']:checked").closest('.jTlAction').find('.jBtnDelete').each(function(){this.click()});wall.verificationBox=true;},deleteActionButtonClick:function(e)
{e.preventDefault();var $self=$(this),$timelineAction=$self.closest('.jTlAction'),data=jQuery.parseJSON($timelineAction.attr('data-action')),userId=parseInt($timelineAction.attr('data-userid'),10);function deleteRequest(){var ajaxData={id:data.id,xhr:'xhr',type_ressource:data.type_ressource,id_ressource:data.id_ressource,page:data.page},$jAdminCom=$('.jAdminCom');if($jAdminCom.length>0)
{ajaxData.adminCom=$jAdminCom.find('textarea[name=\'reason\']').val();ajaxData.adminSendMail=($jAdminCom.find('input[name=\'sendmail\']').attr('checked')=='checked')?1:undefined;}
$.ajax({type:'POST',url:'/f/_xhr_delete_action/',dataType:'json',data:ajaxData,success:function(ret)
{$timelineAction.remove();$.note.info(ret.msg);}});$.copains.core.closeDialog();}
if(wall.verificationBox){$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].WALL_DELETE_ACTION_CONFIRMATION_TITLE,'<h2>'+$.copains.core.langs[$.copains.core.lang].WALL_DELETE_ACTION_CONFIRMATION_TITLE+'</h2>'
+'<div class="ccmcms__modal--content">'+$.copains.core.langs[$.copains.core.lang].WALL_DELETE_ACTION_CONFIRMATION_MESSAGE+'</div>',deleteRequest,undefined,undefined,typeof $data.common.moderator!='undefined'&&(userId!=$data.copains.user.uid));}
else{deleteRequest();}},hideActionButtonClick:function(e)
{e.preventDefault();var $self=$(this),$timelineAction=$self.closest('.jTlAction'),data=jQuery.parseJSON($timelineAction.attr('data-action')),dataIshide=$timelineAction.attr('data-ishide'),titre='',htmlModals='',confirmButtonLabel='',dataDialog={};if(dataIshide=="true")
{titre=$.copains.core.langs[$.copains.core.lang].WALL_SUBSCRIBE_CONFIRMATION_TITLE;htmlModals=$.copains.core.getTemplate('$l{WALL_SUBSCRIBE_CONFIRMATION_MESSAGE}')+' ?';confirmButtonLabel=$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_YES;cancelButtonLabel=$.copains.core.langs[$.copains.core.lang].CONFIRMATION_WORD_NO;}
else
{titre=$.copains.core.langs[$.copains.core.lang].WALL_UNSUBSCRIBE_CONFIRMATION_TITLE;confirmButtonLabel=$.copains.core.langs[$.copains.core.lang].WALL_UNSUBSCRIBE_CONFIRMATION_BUTTON_OK+' '+$data.copains.users[data.id_ressource].fnam;htmlModals=$.copains.core.getTemplate('$l{WALL_UNSUBSCRIBE_CONFIRMATION_MESSAGE}');cancelButtonLabel=$.copains.core.langs[$.copains.core.lang].WALL_UNSUBSCRIBE_CONFIRMATION_BUTTON_CANCEL;}
dataDialog.title=titre;dataDialog.html=htmlModals;dataDialog.buttons={};dataDialog.buttons[cancelButtonLabel]=function(event){$.copains.core.closeDialog();};dataDialog.buttons[confirmButtonLabel]=function()
{$.ajax({type:'POST',url:'/f/_xhr_hide_action/',dataType:'json',data:{id:data.id,xhr:'xhr',type_ressource:data.type_ressource,id_ressource:data.id_ressource},success:function(resp){switch(resp.action)
{case'hide':if(dataIshide=="true"){$wall.find('article[data-ressourceid='+data.id_ressource+']').removeClass('deleted');$wall.find('article[data-ressourceid='+data.id_ressource+']').attr('data-ishide','false');}
else
{$wall.find('article[data-ressourceid='+data.id_ressource+']').addClass('deleted');$wall.find('article[data-ressourceid='+data.id_ressource+']').attr('data-ishide','true');}
break;case'remove':$wall.find('article[data-ressourceid='+data.id_ressource+']').remove();break;}}});$.copains.core.closeDialog();};$.copains.core.showInDialogBox(dataDialog);},stopBlocPhoto:function()
{var	$blocPhoto=$('.jBlocPhoto');$.ajax({type:'POST',url:'/p/_xhr_stop_blocphoto',dataType:'json',data:{xhr:'xhr'},success:function(result)
{if(result.success)
{$('.tipsy').remove();$blocPhoto.hide();$($.jet.services.tipsy.options.selector).not($.jet.services.tipsy.options.exceptionSelector).tipsy($.jet.services.tipsy.options.options);}}});},stopBlocFriendsProposal:function()
{var	$blocFriendsProposal=$('.jBlocFriendsProposal');$.ajax({type:'POST',url:'/p/_xhr_stop_blocfriendsproposal',dataType:'json',data:{xhr:'xhr'},success:function(result)
{if(result.success)
{$blocFriendsProposal.hide();}}});},refreshWall:function(e,extraDatas)
{$wall.ajaxUpdate('',$.extend(true,{xhr:1,lght:1,type:'wall'},extraDatas),{dataType:'json',scroll:false,anim:false,complete:function()
{$(document).trigger('refresh').trigger('wallRefreshed');}});},saveContent:function()
{var title=$('.jTlAction').find('h3'),$content=$('.jTlAction').find('.jContentContainer'),textAreaVal=$content.find('textarea').val(),inputVal=$('.jEditedTitle').val(),oldValue=$content.find('textarea').data('old'),ajaxData={id:$('.jTlAction').data('action').id,content:textAreaVal,title:inputVal,page:$('.jTlAction').data('action').page};$.ajax({type:'POST',url:'/f/_xhr_edit_content',dataType:'json',data:ajaxData,success:function(json){if(json.success){content=textAreaVal;}else{content=oldValue;}
$content.find('textarea').remove();$content.html('<p>'+content+'</p>');title.find('input').remove();title.html(title.html()+'<a>'+inputVal+'</a>');}});},showEditContentUI:function(e)
{var title=$(this).closest('.grid_line').find('div.grid_last h3');if(title.length===0){title=$(this).closest('.jTlAction').find('.jFeedTitleContainer');}
var titleLabel=title.find('a:last-child').text(),length=$(e.currentTarget).data('length'),page=$(e.currentTarget).data('page');if(titleLabel!=''){title.find('a:last-child').remove();$input=$('<input>').addClass('jEditedTitle').attr({'type':'text','style':'width:275px;','maxlength':length,'data-page':page}).val(titleLabel);title.append($input);}
var $content=$(this).closest('.jTlAction').find('.jContentContainer')
contentHtml=$content.find('p').html().trim(),contentText=$content.find('p').text().trim();if(contentText!=null){$content.find('p').remove();$textarea=$('<textarea>').addClass('jEditedContent').attr({'style':'width:80%;height:100px;','data-old':contentHtml.replace('"','\"')}).val(contentText);$button=$('<button>').text('Mettre à jour').addClass('jSaveContent');$content.append($textarea).append($('<br>')).append($button);}}};if(_$('$data.copains.services')._.wall)
{$(document).start(function()
{$.updateCareer.init();wall.init();$(this).find('div.ui-sub-nav').ccmUITabs();$('input#usersearchbox').copainsdavantSearchEngine({ty:1});});}})(jQuery);(function($)
{var	$counter=$('.jInvitationsCounter');var isViadeo=($data.app_name=='viadeo');$.gestionRelations={init:function()
{$('div#jListInvitations').on('click','a.jDelete',$.gestionRelations.deleteRelation).on('click','a.jAccept',$.gestionRelations.acceptRelation).on('click','a.jReapply',$.gestionRelations.reapplyRelation).on('click','a.jBlacklist',$.gestionRelations.blacklistRelation);$('div#jListPropositions').on('click','a.jIgnore',$.gestionRelations.ignoreRelation);$counter.bind('counterChanged',$.gestionRelations.handlerCounterChanged);},handlerCounterChanged:function(e,valueBefore,valueAfter,options)
{valueAfter>0&&$(this).show()&&$(this).parent().addClass('ftBold');valueAfter<=0&&$(this).hide()&&$(this).parent().removeClass('ftBold');},deleteRelation:function()
{var $this=$(this),$ligne=$this.closest('[data-id-user]'),$bl=$ligne.find('.jBlacklist');if(isViadeo){$ligne.find('.grid_right').html('<em>'+$.copains.core.langs[$.copains.core.lang].DELETE_RELATION+'</em>');}
else{$this.replaceWith($.copains.core.langs[$.copains.core.lang].DELETE_RELATION);}
$bl.remove();$ligne.attr('data-type')=='wait'&&$counter.trigger('counterChange',{limit:{min:0},value:'decr'});window.setTimeout(function(){$ligne.remove();},3000);$.ajax({type:'POST',url:'/p/_xhr_deleteRelation/',dataType:'json',data:{idUser:$ligne.attr('data-id-user'),xhr:'xhr',typeR:$ligne.attr('data-type')}});},blacklistRelation:function()
{var $this=$(this),$ligne=$this.closest('[data-id-user]'),$accept=$ligne.find('.jAccept'),$delete=$ligne.find('.jDelete');if(isViadeo){$ligne.find('.grid_right').html('<em>'+$.copains.core.langs[$.copains.core.lang].DELETE_RELATION+'</em>');}
else{$this.replaceWith($.copains.core.langs[$.copains.core.lang].DELETE_RELATION);$accept.remove();$delete.remove();}
$ligne.attr('data-type')=='wait'&&$counter.trigger('counterChange',{limit:{min:0},value:'decr'});window.setTimeout(function(){$ligne.remove();},3000);$.ajax({type:'POST',url:'/p/_xhr_deleteRelation/',dataType:'json',data:{idUser:$ligne.attr('data-id-user'),xhr:'xhr',typeR:$ligne.attr('data-type'),bl:'1'}});},ignoreRelation:function()
{var $this=$(this),$ligne=$this.closest('[data-id-user]'),requestNext=($this.closest('ul').attr('id')=='jTopSuggest')||($ligne.attr('data-type')=='jTopSuggest'),idsExclude=null;if(requestNext)
{idsExclude=$this.closest('ul').children('li').map(function()
{return $(this).attr('data-id-user');}).get();}
$.ajax({type:'POST',url:(requestNext)?'/p/_xhr_nextSuggest/':'/p/_xhr_ignoreSuggest/',dataType:'json',data:{idUser:$ligne.attr('data-id-user'),xhr:'xhr',idOwner:$ligne.attr('data-id-owner'),idsExclude:idsExclude},success:function(response)
{if(response.html=='')
{$ligne.remove();}
else
{$ligne.replaceWith(response.html);}}});},getProposition:function()
{var $this=$(this);},reapplyRelation:function(){var $this=$(this),$ligne=$this.closest('[data-id-user]');if(isViadeo){$ligne.find('.grid_right').html('<em>'+$.copains.core.langs[$.copains.core.lang].REAPPLY_RELATION+'</em>');}
else{$this.parent().replaceWith($.copains.core.langs[$.copains.core.lang].REAPPLY_RELATION);}
$.ajax({type:'POST',url:'/p/_xhr_reapply_relation/',dataType:'json',data:{idUser:$ligne.attr('data-id-user'),xhr:'xhr'},success:function(response){}});},acceptRelation:function()
{var $this=$(this),$ligne=$this.closest('[data-id-user]');if(isViadeo){$ligne.find('.grid_right').html('<em>'+$.copains.core.langs[$.copains.core.lang].ADD_RELATION+'</em>');}
else{$this.parent().replaceWith($.copains.core.langs[$.copains.core.lang].ADD_RELATION);}
$.ajax({type:'POST',url:'/p/_xhr_acceptRelation/',dataType:'json',data:{idUser:$ligne.attr('data-id-user'),xhr:'xhr',typeR:$ligne.attr('data-type')},success:function(response)
{$ligne.attr('data-type')=='wait'&&$counter.trigger('counterChange',{limit:{min:0},value:'decr'});$ligne.remove();$.googleEvents.send('copainsdavant','relation','accept_demand',undefined,true);}});}};if(_$('$data.copains.services')._.gestionRelations)
{$(document).start($.gestionRelations.init);}})(jQuery);(function($)
{image={idImage:null,idParent:null,listImage:[],parent:[],idImagePrevious:null,idImageNext:null,$imagedisplay:null,$prevBtn:null,$nextBtn:null,$displayPicture:null,$labelForm:null,$label:null,actualYear:null,firstTime:true,parents:null,init:function()
{image.$imagedisplay=$('#imagedisplay');image.$displayPicture=$('.jDisplayPicture');image.$labelForm=image.$displayPicture.find('div.jUpdateLabelForm');image.$label=image.$displayPicture.find('div.jPublishable h1');image.idImage=image.$imagedisplay.attr('data-id-image');switch($data.copains.page.imageApplication)
{case 2:if(typeof $data.copains.albumsimages=='undefined')
{return;}
image.listImage=$data.copains.albumsimages;image.idParent=image.listImage[image.idImage].id_album;parents=$data.copains.albums;image.parent=parents[image.idParent];break;case 1:if(typeof $data.copains.etablissementsimages=='undefined')
{return;}
image.listImage=$data.copains.etablissementsimages;image.idParent=image.listImage[image.idImage].id_etablissement;parents=$data.copains.etablissements;image.parent=parents[image.idParent];break;case 3:if(typeof $data.copains.albumsimages=='undefined')
{return;}
image.listImage=$data.copains.albumsimages;image.idParent=image.listImage[image.idImage].id_album;parents=$data.copains.albums;image.parent=parents[image.idParent];break;}
var albumData,newIdRessource;image.$displayPicture.on('click','div.jPublishable h1',image.displayUpdateLabel).on('submit','div.jUpdateLabelForm form',image.updateLabel).on('click','a.jHideUpdateLabel',image.hideUpdateLabel).on('click','a.jBtnUpdateLabel',image.updateLabel);if(typeof image.parent!='undefined')
{image.listIdsImage=image.parent.list_image_ids;}
else
{for(albumData in parents)
{if(parents.hasOwnProperty(albumData))
{image.listIdsImage=parents[albumData].list_image_ids;}}}
image.$labelForm.length>0&&image.listImage[image.idImage].owner==false&&image.$label.parent().removeClass('publishable');image.actualYear=image.listImage[image.idImage].ddp;image.$prevBtn=$('a.jActImagePrev');image.$nextBtn=$('a.jActImageNext');image.calcPreviousNext();History.replaceState({id:image.idImage},History.options.initialTitle,decodeURIComponent(window.location.href));image.$prevBtn.bind('click',function(event)
{event.preventDefault();var imageData=image.listImage[image.idImagePrevious];if(typeof imageData!='undefined')
{History.pushState({id:image.idImagePrevious},History.options.initialTitle,decodeURIComponent(imageData.url+window.location.search));}});image.$nextBtn.bind('click',function(event)
{event.preventDefault();var imageData=image.listImage[image.idImageNext];if(typeof imageData!='undefined')
{History.pushState({id:image.idImageNext},History.options.initialTitle,decodeURIComponent(imageData.url+window.location.search));}});History.Adapter.bind(window,'statechange',function()
{var State=History.getState();image.changePreviousNext(State.data.id);if($data.copains.services.comments.start===true)
{var $jCommentsZone=$(".jCommentsZone"),attrComments=jQuery.parseJSON($jCommentsZone.attr('data-comment'));newIdRessource=State.data.id;attrComments.id_externe=newIdRessource;$jCommentsZone.attr('data-comment',JSON.stringify(attrComments));}});image.$imagedisplay.load(function()
{image.$imagedisplay.show();($data.copains.services.imageTags===true&&!image.firstTime)&&$(document).trigger('refreshImageTags');if($data.copains.services.comments.start===true&&!image.firstTime)
{if(typeof newIdRessource!='undefined')
{$('.jCommentsList').trigger('refreshComments',[newIdRessource]);}
else{$('.jCommentsList').trigger('refreshComments');}}});},calcPreviousNext:function()
{var find=false,idImageEach,elm;image.idImagePrevious=null;image.idImageNext=null;for(elm in image.listIdsImage)
{if(image.listIdsImage.hasOwnProperty(elm))
{idImageEach=image.listIdsImage[elm];if(typeof image.listImage[idImageEach]!='undefined')
{if(idImageEach==image.idImage)
{find=true;}
else if(find)
{image.idImageNext=idImageEach;break;}
else
{image.idImagePrevious=idImageEach;}}}}},setValue:function(idImage)
{image.idImage=idImage;image.$imagedisplay.attr('data-id-image',image.idImage);$data.copains.page.idImage=image.idImage;$data.copains.page.idExterneRessourceCommentary=image.idImage;},changePreviousNext:function(id)
{image.firstTime=false;image.setValue(id);image.calcPreviousNext();image.$labelForm.length>0&&image.$labelForm.find('form').is(':visible')&&image.hideUpdateLabel();if(image.listImage[image.idImage].desc=='')
{$(document).find('#descPhoto').hide();}else{$(document).find('#descPhoto').html(image.listImage[image.idImage].desc).show();}
if(image.$labelForm.length>0)
{if(image.listImage[image.idImage].owner==true)
{image.$label.parent().addClass('publishable');}
else
{image.$label.parent().removeClass('publishable');}}
$('.jBtnReportLoaded').attr('data-id',image.idImage);$('.jChangePhotoLegend').attr('data-id',image.idImage);if(image.listImage[image.idImage].ddp!=image.actualYear)
{image.actualYear=image.listImage[image.idImage].ddp;($data.copains.page.imageApplication==1)&&image.$labelForm.attr('data-date',image.listImage[image.idImage].ddp);}
$('div#descPhoto .profileBox').html(image.listImage[image.idImage].desc);image.displayImage();},displayImage:function()
{var dateDePrise='',titleData='',libelDateDePrise='',libelle,formateLabel=image.listImage[image.idImage].formatedLabel;(image.listImage[image.idImage].ddp!='')&&(dateDePrise=image.listImage[image.idImage].ddp)&&(libelDateDePrise=dateDePrise+' - ');if(image.listImage[image.idImage].owner==true&&image.listImage[image.idImage].libelle==null)
{libelle=$.copains.core.langs[$.copains.core.lang].GIVE_A_LABEL;}
else
{libelle=libelDateDePrise+formateLabel;}
switch($data.copains.page.imageApplication)
{case 1:if(typeof($data.copains.etabs[image.listImage[image.idImage].id_etablissement])!='undefined'){libelle+=' - '+$data.copains.etabs[image.listImage[image.idImage].id_etablissement].lib;}
titleData=image.listImage[image.idImage].title;break;case 2:titleData='La photo'+' "'+libelle+'" de l\'album "'+image.parent.libelle+'"';break;default:break;}
document.title=$.htmlEntitiesDecode(titleData);$('h1').html(libelle);var $fb=$('div.btnLikeFb');if($fb.length>0)
{var fb='<iframe src="https://www.facebook.com/plugins/like.php?href='+encodeURIComponent('http://'+window.location.hostname+image.listImage[image.idImage].url)+'&amp;send=false&amp;layout=button_count&amp;width=85&amp;show_faces=false&amp;action=J\'aime&amp;colorscheme=light&amp;font=arial&amp;height=20" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:85px; height:20px;" allowTransparency="true"></iframe>';$fb.html(fb);}
var $jtags=image.$imagedisplay.closest('.jTags');if($jtags.length>0)
{$jtags.css({width:'750px',height:'750px'});}
image.$imagedisplay.hide();image.$imagedisplay.attr('src',image.listImage[image.idImage].large_xl);if(image.idImagePrevious!=null)
{image.$prevBtn.attr('title',$.htmlEntitiesDecode(image.listImage[image.idImagePrevious].formatedLabel)).attr('href',image.listImage[image.idImagePrevious].url).removeClass('app_btn--inactive').removeClass('jInactive');}
else
{image.$prevBtn.attr('title','').attr('href','javascript:void(0);').addClass('app_btn--inactive').addClass('jInactive');}
if(image.idImageNext!=null)
{image.$nextBtn.attr('title',$.htmlEntitiesDecode(image.listImage[image.idImageNext].formatedLabel)).attr('href',image.listImage[image.idImageNext].url).removeClass('app_btn--inactive').removeClass('jInactive');}
else
{image.$nextBtn.attr('title','').attr('href','javascript:void(0);').addClass('app_btn--inactive').addClass('jInactive');}
($data.copains.services.comments===true)&&$(document).trigger('refreshComments');},displayUpdateLabel:function()
{image.$label.hide();;var labelWith=image.$label.width(),labelParentWith=image.$label.parent().width(),biggestValue,newLabel;biggestValue=(labelWith>labelParentWith)?labelWith:labelParentWith;(biggestValue<200)&&(biggestValue=200);newLabel=$.trim(image.$label.html());($data.copains.page.imageApplication==1)&&(newLabel=newLabel.replace(image.$labelForm.attr('data-date')+' - ',''));image.$labelForm.show().find('input').css('width',biggestValue).focus().val(newLabel);},hideUpdateLabel:function()
{image.$label.show();image.$labelForm.hide();},updateLabel:function(event)
{event.preventDefault();var $labelInput=image.$displayPicture.find('input#photoLabel'),idImage=$data.copains.page.idImage;$.ajax({type:'POST',url:'/i/_xhr_updateLabel/',dataType:'json',data:{idImage:idImage,xhr:'xhr',label:$labelInput.val(),type:$data.copains.page.imageApplication},complete:function(a,b,data)
{if(b==='success')
{$.note.info($.copains.core.langs[$.copains.core.lang].UPDATE_LABEL_OK);switch($data.copains.page.imageApplication)
{case 1:$data.copains.etablissementsimages[idImage].formatedLabel=data.label;$data.copains.etablissementsimages[idImage].libelle=data.label;break;case 2:$data.copains.albumsimages[idImage].formatedLabel=data.label;$data.copains.albumsimages[idImage].libelle=data.label;break;case 3:break;}
($data.copains.page.imageApplication==1)&&(data.label=image.$labelForm.attr('data-date')+' - '+data.label);image.$label.html(data.label);image.$label.show();image.$labelForm.hide();}}});}};if(_$('$data.copains.services')._.image)
{$(document).start(image.init);}})(jQuery);(function($)
{var	templateValidationDialog='<div style="text-align:center">'
+'<div class="marB10">$l{IMAGETAG_TITLE_CONFIRM_DELETE}</div>'
+'</div>',xhr,imageId=$('.jqueryImageTags').attr('data-id-image'),$application=$data.copains.page.imageApplication;$.imageTags={slider:null,init:function()
{this.microTemplateInit();this.imageTags();$('body').on('click','li.ui-menu-item',this.addUserPopupDirect).on('click','div#recoSlider a.jDeleteTag',this.deleteTag);},moveAll:function()
{var $input=$('#personne_auto');if($input.length>0)
{var pos=$input.offset(),$autocomplete=$('div.box3 ul.ui-autocomplete'),$autoHeight=$autocomplete.height(),height=$autoHeight>0?$autoHeight+24:$input.height()+12;$('#tagAddActions').css({top:pos.top+height+'px',left:pos.left+1});$autocomplete.closest('div.box3').css({left:pos.left,top:pos.top+$input.height()+12});}},refresh:function()
{$('.jqueryImageTags #imagedisplay').trigger('refreshListTag');},addUserPopupDirect:function(e)
{if(typeof e!='undefined'&&$(this).find('span.addUserPopup').length==0)
{return;}
var $personneAuto=$('#personne_auto');$personneAuto.ccmComplete('close');$('#tagAddActions, div.tag.select').hide();$.imageTags.showFormAddUser($personneAuto.val());},deleteTag:function()
{var	$id=$(this).attr("data-tagId");$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].IMAGETAG_DELETING_VALIDATION_TITLE,$.copains.core.getTemplate(templateValidationDialog),function()
{$.ajax({type:'POST',url:'/imagetag/_xhr_deltag/',dataType:"json",cache:false,localCache:false,data:{xhr:"xhr",idTag:$id,application:$application},success:function()
{$('.jqueryImageTags div#n_1-'+$id).parent().remove();$('div#listImageTag li').each(function(i)
{if($(this).attr('data-tagId')==$id)
{$.imageTags.slider.removeSlide(i+1);return false;}});if($('div#listImageTag li').length==0)
{$.imageTags.slider.destroy();$('div#recoSlider ul').html('<div class="marL10">'+$.copains.core.langs[$.copains.core.lang].IMAGETAG_NO_IDENTIFICATION+'</div>');}}});$.note.info($.copains.core.langs[$.copains.core.lang].IMAGETAG_DELETING_OK);$.googleEvents.send('copainsdavant','tag_photo','delete',undefined,true);$.copains.core.closeDialog();});},imageHover:function(e)
{$('.user_link').live('mouseenter mouseleave',function(e)
{var $this=$(this),id=$this.attr('data-tagId');if(e.type=='mouseenter')
{$this.addClass('active');$('div#n_1-'+id).removeClass("offFocus").addClass("onFocus");$('span#t_1-'+id).show();$('.jqueryImageTags-container .jTags .tag').css('display','block');}
else{$this.removeClass('active');$('div#n_1-'+id).removeClass("onFocus").addClass("offFocus");$('span#t_1-'+id).hide();$('.jqueryImageTags-container .jTags .tag').css('display','none');}});},imageTags:function(e)
{this.imageHover();var tag_size=($application==2)?150:50;$('.jqueryImageTags').ccmImageTags({hide:false,allowAdd:$data.copains.page.authorizedTag,defaultWidth:tag_size,defaultHeight:tag_size,action:'/imagetag/_xhr_get_tags',moveAll:function()
{$.imageTags.moveAll();},onTagCreated:function(pointer,id,label)
{id=id||'';label=label||'';this.append($('<input type="hidden" id="personne_id" name="personne_id" value="'+id+'" /><input type="hidden" id="personne_type" name="personne_type" />'));var $input=$('<input type="text"  placeholder="Entrez le nom de la personne à identifier" id="personne_auto" name="personne_auto" value="'+label+'" style="width:290px;" />').appendTo(this),$footer=$('<div id="tagAddActions" style="display:none;" />').append($('<a href="javascript:void(0);" class="a_hover cancel cancel-tag">'+$.copains.core.getTemplate('$l{LABEL_CANCEL}')+'</a>').bind('click',function()
{$('.jqueryImageTags #imagedisplay').trigger('stopAddTag');})).append($('<a id="addTagButton" class="linter_btn_2" href="javascript:void(0);">Valider</a>').bind('click',function()
{if($('#addTagButton').attr('disabled')!='disabled')
{if($('#personne_id').attr('value')=='0')
{$.imageTags.addUserPopupDirect();}else{$('.jqueryImageTags #imagedisplay').trigger('saveTag');}}})).appendTo('body');$input.ccmComplete({anchor:$input,className:'acPhoto',width:'300px',minLength:2,delay:150,preSelectFirst:true,close:function()
{var pos=$input.offset();$footer.is(':visible')&&$footer.css({top:pos.top+$input.height()+10+'px',left:pos.left+1,display:'inline'});},create:function()
{$.imageTags.moveAll();},open:function()
{var $auto=$('div.box3 ul.ui-autocomplete').css({'width':300}).parent().css({'width':300}),pos=$auto.position();$footer.css({top:pos.top+$auto.height()+'px',left:pos.left+1});},source:function(request,response)
{xhr&&xhr.abort();var $addTagButton=$('#addTagButton');$addTagButton.attr('disabled','disabled');xhr=$.ajax({url:'/s/',cache:true,dataType:"json",localCache:false,data:{q:$.trim(request.term.toLowerCase()),xhr:true,ty:1,id_image:$('#imagedisplay').attr('data-id-image'),application:$application},success:function(data)
{var res=[],unknownPersonTitle={label:$('<div class="app_ac_unknown--title">').html('<div class="acType"><strong>'+$.copains.core.langs[$.copains.core.lang].IMAGETAG_TITLE_UNKOWN_USER+'</strong></div>').bind('click',function(e)
{e.stopPropagation();})},unknownPersonAction={label:'<div class="line acItem app_ac_unknown--action">'
+'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url(\''+$data.common.assetUrl+'/copainsdavant.linternaute.com/skin/common/img/cop_avatarA26.jpg\');"></div></div></div>'
+'<div class="lastBlock">'
+'<span class="addUserPopup"><span class="copains_a_ico" data-icomoon="&#59138;" aria-hidden="true"><span class="icon_text">'+$.copains.core.getTemplate('$l{INVITATION_LINE_TITLE}')+'</span></span> '+request.term+'</span>'
+'</div>'
+'</div>',value:request.term,id:null};$addTagButton.removeAttr('disabled');if(data!=null)
{res=$.map(data.r,function(item)
{if(typeof item.label=='undefined')
{return;}
var label;if(typeof item.noLink=='undefined')
{label='<div class="line acItem">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5 relative"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<div class="lastBlock">'
+'<span class="block copTheme1">'+item.ti+'</span>'
+((item.label!=null)?('<em>'+item.label+'</em>'):'')
+'<span class="ico icoMoreB"></span>'
+'</div>'
+'</div>';}
else{label=$('<div>').html('<div class="acType">'+item.label+'</div>').bind('click',function(e)
{e.stopPropagation();});}
return{label:label,value:item.ti,id:item.id,type:item.ty};});}
res.push(unknownPersonTitle,unknownPersonAction);response(res);}});},select:function(event,ui)
{$('#personne_auto').attr('value',ui.item.value);$('#personne_id').attr('value',ui.item.id);$('#personne_type').attr('value',ui.item.type);$footer.css({display:'inline'});if(event.which==13)
{if(ui.item.id==null)
{$.imageTags.addUserPopupDirect();}else{$('.jqueryImageTags #imagedisplay').trigger('saveTag');}}}});$input.keypress(function(e)
{if(e.keyCode==27)
{$('.jqueryImageTags #imagedisplay').trigger('stopAddTag');}});},getTagData:function()
{var $personneIdVal=this.find('input#personne_id').val(),$personneTypeVal=this.find('input#personne_type').val();return{id_personne:$personneIdVal==''?0:$personneIdVal,label:this.find('input#personne_auto').val(),type:$personneTypeVal==''?0:$personneTypeVal};},onTagSaved:function(json)
{$('div #listImageTag').html(json.html);$.note.info($.copains.core.langs[$.copains.core.lang].MODIFICATION_OK);$.imageTags.imageHover();$.imageTags.initSlider();$.googleEvents.send('copainsdavant','photo','recognize_someone_on',undefined,true);},onLoad:function()
{var $self=$(this);$.imageTags.initSlider();if($data.copains.page.authorizedTag==true&&$data.copains.user.uid!=null&&$data.copains.user.uid!=0)
{$('.jOldTags').on("click",function()
{var $this=$(this),id=$this.prop('id'),label=$this.attr('data-name');$self.trigger('addDirectTag',[id,label]);$('#tagAddActions, div.tag.select').show();});$('.jAddTag').on("click",function()
{$self.trigger('addDirectTag',[0,'']);});if($data.copains.page.addDirectTag==true)
{$self.trigger('addDirectTag',[$data.copains.user.uid,$data.copains.users[$data.copains.user.uid].lib]);}}},onTagFocusOn:function(tag){var nbSlide=$.imageTags.slider.getOption('slideCount');$('div#listImageTag li').each(function(i){$ligne=$(this);if($ligne.attr('data-tagId')==tag){$ligne.addClass('active');$.imageTags.slider.goToSlide((Math.floor(i/nbSlide)*nbSlide)+1);}else{$ligne.removeClass('active');}});},onTagFocusOff:function(tag)
{$('div#listImageTag li').each(function(i)
{var $ligne=$(this);if($ligne.attr('data-tagId')==tag)
{$ligne.removeClass('active');}});}}).bind('tagsReloaded',function(e,data)
{$('#listImageTag').html(data.html);$(document).trigger('refresh');$.imageTags.initSlider();});},initSlider:function()
{var	pid=$('.jqueryImageTags').closest('.jqueryImageTags-container').attr('id'),pointer=pid.substr(pid.indexOf('_')+1),imageHeight=$('#jqueryImageTags_'+pointer+' img').height(),minHeight='233',minSlider='162',nbDisplayTag;if(imageHeight>minHeight)
{$('div#recoSlider').height(Math.floor((imageHeight-71)/81)*81);$('div#listImageTag').height(imageHeight);}
else
{$('div#recoSlider').height(minSlider);$('div#listImageTag').height(minHeight);}
nbDisplayTag=Math.floor((imageHeight-71)/81);if($('div#listImageTag li').length>0)
{$.imageTags.slider=$('div#recoSlider').sudoSlider({autowidth:false,autoheight:false,slideCount:nbDisplayTag,moveCount:1,vertical:true,controlsFade:true,speed:'500',controlsAttr:'id="recoControls"',nextHtml:'<a class="nextBtn" href="#" aria-hidden="true" data-icon="&#x24;"></a>',prevHtml:'<a class="prevBtn" href="#" aria-hidden="true" data-icon="&#x28;"></a>',mouseWheel:true,overflow:false});}},showFormAddUser:function(userLibelle)
{$.copains.core.showInDialogBox({title:$.copains.core.getTemplate('$l{INVITATION_SEND_TITLE} <b>${libelle}</b>',{libelle:userLibelle}),html:$.copains.core.getTemplate('<h2>$l{INVITATION_SEND_TITLE} <b>${libelle}</b></h2><div class="ccmcss_form ccmcss_form--w20">'
+'<form method="POST" id="jFormAddUser" data-id="${id}"><fieldset>'
+'<div class="ccmcss_form__line grid_line" id="divUserName">'
+'<input type="text" id="userName" value="${libelle}">'
+'<div class="msg" id="divErrorUserName" style="display: none;"></div>'
+'</div>'
+'<div class="ccmcss_form__line grid_line" id="divUserEmail">'
+'<input type="text" id="userEmail" placeholder="$l{INVITATION_EMAIL}">'
+'<div class="msg" id="divErrorUserEmail" style="display: none;"></div>'
+'</div>'
+'<footer class="ccmcss_form__line">'
+'<input type="button" class="linter_btn_2 btn btnM jValidateAddUser" name="validate" value="$l{MESSAGE_SEND}">'
+'<a class="a_hover jCloseDialog" href="javascript:void(0);">$l{INVITATION_CANCEL}</a>'
+'</footer>'
+'</fieldset></form></div>',$.extend({},{libelle:userLibelle})),close:function()
{setTimeout($.imageTags.moveAll,1000);}});$('#jFormAddUser input.jValidateAddUser').on('click',function()
{var $formUser=$('form#jFormAddUser');$formUser.loading('On');$formUser.data("loadingNode").$spin.css({display:'inline'});$.imageTags.validateFormAddUser();});},validateFormAddUser:function(e)
{var $formAddUser=$('form#jFormAddUser'),$inputUserName=$formAddUser.find('input#userName'),$inputUserEmail=$formAddUser.find('input#userEmail'),pid=$('.jqueryImageTags').closest('.jqueryImageTags-container').attr('id'),pointer=pid.substr(pid.indexOf('_')+1),position=$.ccmImageTags.getTagPosition(pointer),imageId=$('#jqueryImageTags_'+pointer+' img').attr('data-id-image');$formAddUser.hideFormError();$.ajax({type:'POST',url:'/imagetag/_xhr_get_tags',dataType:'json',data:{add:true,coordonnees:position.left+','+position.top+','+position.width+','+position.height,id_image:imageId,xhr:'xhr',application:$application,label:$inputUserName.val(),name:$inputUserName.val(),email:($inputUserEmail.val()==$inputUserEmail.data('default'))?'':$inputUserEmail.val(),authorized_tag:$data.copains.page.authorizedTag,imageOwnerId:$data.copains.page.imageOwnerId},success:function(data)
{var $formUser=$('form#jFormAddUser');$formUser.loading('Off');if(data.success==true)
{$('.jqueryImageTags #imagedisplay').trigger('stopAddTag');$.ccmImageTags.addTagData=data;$('.jqueryImageTags #imagedisplay').trigger('addTag');$divModal=$('div#jDivModal');$divModal.dialog('close');$('#jqueryImageTags_'+pointer).trigger('mouseenter');$.imageTags.initSlider();}else{$.each(data.errors,function(k,v){switch(k){case'name':$inputUserName.showInputError(v);break;case'email':$inputUserEmail.showInputError(v);break;}});}}});}};$.extend($.imageTags,$.microTemplate);if(_$('$data.copains.services')._.imageTags)
{$(document).start(function(){$.imageTags.init.call($.imageTags);}).bind('refreshImageTags',$.imageTags.refresh);}})(jQuery);(function($)
{'use strict';var	commentSubmit=false,verificationBox=true;$.comments={options:{},submitCommentText:function(e,options)
{if(commentSubmit==true)
{return;}
commentSubmit=true;e.preventDefault();var $self=$(e.target).closest('.ccmcss_form').find('.jCommentsText'),$commentBloc=$self.closest('.jCommentsZone'),$commentList=$commentBloc.find('.jCommentsZoneList'),data=new FormData(),image=$('#filImage')[0].files[0],txtComment=jQuery.trim($self.attr('value'));if(image!==undefined){data.append('image',image);}
if(txtComment.length>0&&txtComment.length<=1000&&txtComment!==$self.attr('default'))
{if(typeof options.fakeComment!=='undefined')
{var $lastComment=$(options.fakeComment);$lastComment.find(".lastBloc a").after("&nbsp;"+txtComment.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'));$commentList.append($lastComment);}
var dataComment=jQuery.parseJSON($commentBloc.attr('data-comment'));data.append('text',txtComment);data.append('xhr','xhr');data.append('id_typeressource',dataComment.id_typeressource);data.append('id_externe',dataComment.id_externe);if(typeof dataComment.idGroup!=='undefined'){data.append('idGroup',dataComment.idGroup);}
$.ajax({type:'POST',url:'/c/_xhr_add_comment',dataType:'json',data:data,processData:false,contentType:false,success:function(ret)
{$.googleEvents.send('copainsdavant',options._gaqTarget,'add_comment',undefined,true);if(typeof options.fakeComment!=='undefined')
{$commentList.children().last().replaceWith(ret.html);}
else
{$commentList.children().last().append(ret.render);}
$.note&&$.note.info('Commentaire ajouté avec succès');$('#filImage').val('');$('label[for=filImage]').find('.ccmcss_form__msg')[0].innerHTML='Formats autorisés : jpg, png, gif';commentSubmit=false;},error:function(error)
{$commentList.children().last().remove();commentSubmit=false;}});$self.val('');}
else{commentSubmit=false;}},initDisplayComments:function(e,options)
{$(e.target).find(".jCommentsZoneList").ajaxUpdate('/c/_xhr_display_comments',{xhr:'jCommentsZoneMore',init:'true',id_typeressource:options.typeRessource,id_externe:options.idRessource},{dataType:'json',type:'POST',scroll:false,anim:false,complete:function()
{$.profile&&console.timeEnd('comments.initDisplayComments');},beforeDomManip:function()
{$('a.jCommentsZoneMore').remove();}});},multipleDelete:function()
{verificationBox=false;$("input:checkbox[data-form='comments']:checked").closest('.jTlAction').find('.jBtnDeleteComment').each(function(){this.click();});verificationBox=true;},editCommentText:function(e){e.preventDefault();var $self=$(e.target),block=$self.closest('.jCommentsZoneItem'),content=block.find('.jCommentContent');if(content.text()!==null){var $textarea=$('<textarea>').attr({style:"width:90%;height:50px"}).addClass('jContent').val(content.text()),$button=$('<button>').html('Modifier').addClass('jBtnUpdateComment'),$form=$('<span>').attr('old',content.html().replace('"','\"')).append($textarea).append('<br/>').append($button),parent=content.parent();parent.append($form);content.remove();}},editCommentAction:function(e)
{e.preventDefault();var $self=$(e.target),block=$self.closest('.jCommentsZoneItem'),id=block.attr('data-id'),textarea=block.find('textarea'),data={},externe=jQuery.parseJSON(block.closest('.jCommentsZone').attr('data-comment')),spanTextarea=textarea.parent(),parent=spanTextarea.parent(),$time=parent.find('time'),$link=parent.find('a');data={id:id,type_ressource:externe.id_typeressource,id_externe:externe.id_externe,commentaire:textarea.val(),xhr:'xhr'};$.ajax({type:"POST",url:"/c/_xhr_edit_comment",dataType:"json",data:data,success:function(json){var $span=$('<span>').addClass('jCommentContent');if(json.success){$span.html(' '+json.html);}else{$span.html(' '+spanTextarea.attr('old'));}
parent.append($link).append($span).append($time);spanTextarea.remove();}});},deleteComActionButtonClick:function(e,options)
{e.preventDefault();var $self=$(e.target),block=$self.closest('.jCommentsZoneItem'),id=block.attr('data-id'),data={};;if(options.useDatasInline)
{var article=jQuery.parseJSON(block.closest('.jTlAction').attr('data-action')),externe=jQuery.parseJSON(block.closest('.jCommentsZone').attr('data-comment'));data={id:id,type_ressource_dependant:article.type_ressource,xhr:'xhr',id_ressource_dependant:article.id_ressource,type_ressource:externe.id_typeressource,id_externe:externe.id_externe};}
else
{data={id:id,xhr:'xhr',type_ressource_dependant:1,id_ressource_dependant:options.idRessource,type_ressource:options.typeRessource,id_externe:options.idRessource};}
function deleteRequest()
{$.ajax({type:'POST',url:'/c/_xhr_delete_com_action/',dataType:'json',data:data,success:function()
{block.remove();$.note&&$.note.info($.copains.core.getTemplate('$l{WALL_DELETE_COMMENT_CONFIRMATION_OK}'));}});$.copains.core.closeDialog();}
if(verificationBox)
{$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].WALL_DELETE_COMMENT_CONFIRMATION_TITLE,'<h2>'+$.copains.core.langs[$.copains.core.lang].WALL_DELETE_COMMENT_CONFIRMATION_TITLE+'</h2>'
+'<div class="ccmcms__modal--content">'+$.copains.core.langs[$.copains.core.lang].WALL_DELETE_COMMENT_CONFIRMATION_MESSAGE+'</div>',deleteRequest);}
else
{deleteRequest();}},commentButtonClick:function(e)
{e.preventDefault();var $jCommentsZone=$(this).closest('.jCommentsZone');$jCommentsZone.find('.jBtnComment').hide();$jCommentsZone.find('.jCommentsZoneAdd').show().find(".jCommentsText").focus();},displayMoreComments:function(e,options)
{e.preventDefault();var $self=$(e.target),dataComments={};if(options.useDatasInline)
{var $liste=$self.closest(".jTlAction").find(".jCommentsZoneList"),proprioId=$self.closest(".jTlAction").attr('data-userid');dataComments=jQuery.parseJSON($liste.parentsUntil('.jCommentsZone').parent().attr('data-comment'));}
else
{var $liste=$self.closest(".jCommentsZone").find(".jCommentsZoneList");dataComments={'id_externe':options.idRessource,'id_typeressource':options.typeRessource};}
$liste.ajaxUpdate('/c/_xhr_display_comments',{xhr:'jCommentsZoneMore',id_typeressource:dataComments.id_typeressource,id_externe:dataComments.id_externe,proprioId:(options.useOwnerId?proprioId:undefined)},{dataType:'json',type:'POST',scroll:false,anim:false,complete:function()
{$.jet.services.reportDialog.init();$.profile&&console.timeEnd('comments.displayMoreComments');},beforeDomManip:function()
{$self.remove();}});}};$.fn.commentsList=function(options)
{options=$.extend(true,{},$.fn.commentsList.defaultOptions,$data.copains.services.comments.options,options);return this.each(function()
{var $node=$(this);$node.on('click','a.jCommentsZoneMore',function(e){$.comments.displayMoreComments(e,options);}).on('click','a.jBtnComment',$.comments.commentButtonClick).on('keypress','.jCommentsText',function(e){if(e.keyCode===13&&e.shiftKey===false){$.comments.submitCommentText(e,options);}}).on('click','a.jBtnAddComment',function(e){$.comments.submitCommentText(e,options);}).on('click','.jBtnDeleteComment',function(e){$.comments.deleteComActionButtonClick(e,options);}).on('click','.jBtnEditComment',function(e){$.comments.editCommentText(e);}).on('click','.jBtnUpdateComment',function(e){$.comments.editCommentAction(e);}).on('click','.jDeleteSelectedComments',function(e){$.comments.multipleDelete(e,options);}).bind('refreshComments',function(e,newIdRessource)
{if(typeof newIdRessource!='undefined')
{options.idRessource=newIdRessource;}
$.comments.initDisplayComments(e,options);}).find('.jCommentsText').autoResizeTextAreaQ({"max_rows":8});if(location.hash=='#reply')
{$node.find('.jCommentsZone .jBtnComment').hide();$node.find('.jCommentsZoneAdd').show().find('.jCommentsText').focus();}});};if(_$('$data.copains.services.comments')._.start)
{$(document).start(function(){$('.jCommentsList').commentsList();});}
$.fn.commentsList.defaultOptions={_gaqTarget:'image',typeRessource:0,idRessource:0,fakeComment:undefined,useOwnerId:false,useDatasInline:false};})(jQuery);(function($)
{$.albumCreate={init:function()
{$('body').on('click','a.jEditAlbum',$.albumCreate.showForm).on('click','a.jAddPhoto',$.albumCreate.showUploadPhoto).on('click','a.jDeleteAlbum',$.albumCreate.deleteAlbum);},showForm:function(e)
{e.preventDefault();var id_album=$(this).attr('data-id'),action='modification';$.albumCreate.sendForm(null,id_album,action);},sendForm:function(year_album,id_album,action)
{$.ajax({type:'POST',url:'/album/_xhr_display_form',dataType:'json',data:{xhr:'xhr',id:id_album,year:year_album,action:action},complete:function(a,b,data){data.title=$.copains.core.getTemplate('$l{ALBUM_ADD_TITLE}');$.copains.core.showInDialogBox(data);$("#btnCancelCreateAlbum").click(function(){if(action=='creation')
{var $album_id=$('form#frmCreate_Album input[name="id"]').val(),$album_cle=$('form#frmCreate_Album input[name="cle"]').val();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].ALBUMPHOTO_ALBUM_TITLE_CONFIRM_CANCEL,$.copains.core.getTemplate('$l{ALBUMPHOTO_ALBUM_CONFIRM_CANCEL}'),function(){$.ajax({type:'POST',url:'/album/_xhr_delete_album',dataType:'json',data:{xhr:'xhr',album_id:$album_id,album_cle:$album_cle},success:function(json){if(json.msg){$.note.info(json.msg);}}});$.copains.core.closeDialog();},function(){$.albumCreate.sendForm(null,$album_id,'creation');});}else{$.copains.core.closeDialog();}});$("#frmCreate_Album").on('click','input[type=\'checkbox\']',$.copains.core.privacyCheckBox);var $form=$('form#frmCreate_Album');$form.ajaxForm({beforeSubmit:function(){$form.loading('On');$form.data("loadingNode").$spin.css({display:'inline'});$form.hideFormError();},success:function(json){$form.loading('Off');if(json.id>0)
{if(id_album>0){location.href=json.url_album;$.copains.core.closeDialog();return;}
$.albumCreate.sendUploadPhoto(json.id);return;}
$.each(json.errors,function(k,v){switch(k){case'album_name':$('#frmCreate_Album #album_name').showInputError(v);break;case'album_description':$('#frmCreate_Album #album_description').showInputError(v);break;case'privacy_sum':$('#frmCreate_Album #privacy31').showInputError(v);break;case'month_album':$('#frmCreate_Album #monthAlbum').showInputError(v);break;case'year_album':$('#frmCreate_Album #yearAlbum').showInputError(v);break;default:break;}});}});}});},showUploadPhoto:function(e)
{e.preventDefault();var $this=$(this),id_album=$this.attr('data-id'),year_album=$this.attr('data-year');$.albumCreate.sendUploadPhoto(id_album,year_album);},sendUploadPhoto:function(id_album,year_album){$.ajax({type:'POST',url:'/album/_xhr_upload_photo',dataType:'json',data:{xhr:'xhr'},complete:function(a,b,data){data.title=$.copains.core.getTemplate('$l{ALBUM_ADD_TITLE}');$.copains.core.showInDialogBox(data);$('#btnSubmitUploadPhoto').attr('disabled',true).closest('div.btnWrap');$("#btnCancelCreateAlbum").click(function(){$.copains.core.closeDialog();});$("#btnSubmitUploadPhoto").click(function(e){e.preventDefault();var data=[];$('.template-download').each(function(){$.core.$fake[0]=this;data.push($.core.$fake.data('tmplItem').data);});var $form=$('form#frmCreate_Album');$form.loading('On');$form.data("loadingNode").$spin.css({display:'inline'});$.ajax({type:'POST',url:'/album/_xhr_insert_photo',dataType:'json',data:{xhr:'xhr',id_album:id_album,year_album:year_album,data:data},success:function(json){if(json.errors){$.note.info(json.errors);}else{$form.loading('Off');if(typeof id_album!='undefined'){$.copains.core.closeDialog();location.href=json.url_album;}else{$.albumCreate.sendForm(json.year_album,json.id_album,'creation');}}}});});$('form#frmCreate_Album').fileupload({autoUpload:true,url:'/album/?xhr=plaintext&id_album='+id_album,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,previewMaxWidth:60,previewMaxHeight:60,maxFileSize:20000000}).bind('fileuploadstart',function(e,data){$('#btnSubmitUploadPhoto').attr('disabled',true).closest('div.btnWrap');}).bind('fileuploadprogress',function(e,data){var progress=parseInt(data.loaded/data.total*100,10);data.context.find('.inProgBar .dwnldProgress').attr('style','width:'+progress+'px');}).bind('fileuploadstop',function(e,data)
{$('#btnSubmitUploadPhoto').removeAttr('disabled').closest('div.btnWrap');}).on('click','a.jRemoveImg',function(e){$(this).closest('.template-download').remove();});}});},deleteAlbum:function(e,json)
{var $self=$(this),$img=$self.parent().find('.jAlbumImage'),$divModal=$.copains.core.initDivModal(),userId=parseInt($self.attr('data-userid'),10),userUrl=$self.attr('data-url');$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].ALBUMPHOTO_ALBUM_TITLE_CONFIRM_DELETE,$.copains.core.getTemplate('$l{ALBUMPHOTO_ALBUM_CONFIRM_DELETE}'),function()
{var	ajaxData={album_id:$img.attr('album_id'),album_cle:$img.attr('album_cle'),xhr:'xhr'},$jAdminCom=$('.jAdminCom');if($jAdminCom.length>0)
{ajaxData.adminCom=$jAdminCom.find('textarea[name=\'reason\']').val();ajaxData.adminSendMail=($jAdminCom.find('input[name=\'sendmail\']').attr('checked')=='checked')?1:undefined;}
if(typeof ajaxData.album_id=='undefined')
{ajaxData.album_id=$self.attr('album_id');ajaxData.album_cle=$self.attr('album_cle');}
$.ajax({type:'POST',url:'/album/_xhr_delete_album',dataType:'json',data:ajaxData,success:function(json)
{json.msg&&$.note.info(json.msg);$self.closest('.jAlbumItem').html("&nbsp;");if(typeof userUrl!='undefined')
{window.location=userUrl;return;}}});$.copains.core.closeDialog();},undefined,undefined,typeof $data.common.moderator!='undefined'&&(userId!=$data.copains.user.uid));}};if(_$('$data.copains.services')._.albumCreate)
{$(document).start($.albumCreate.init);}})(jQuery);(function($)
{$.albumPhoto={init:function()
{$('div.jListProfile').on('click','a.jDeleteImageAlbum',$.albumPhoto.deleteImageProfile).on('click','a.jSelectImageProfile',$.albumPhoto.selectImageProfile);$('div.jListPhoto').sortable({cursor:'move',items:'.jManageImg',containment:'.jListPhoto',update:function(event,ui)
{var i=1,old_order='',new_order='',album_id,$photo;$(this).find('.jManageImg').each(function()
{$photo=$(this).find('.jImgAlbum');old_order=$data.copains.albumsimages[$photo.attr('photo_id')].ordre_de_tri;if(old_order!=i){if(new_order===''){new_order=$photo.attr('photo_id')+'_'+i;}else{new_order=new_order+','+$photo.attr('photo_id')+'_'+i;}}
i++;});album_id=$photo.attr('album_id');if(new_order!=''){$.ajax({type:'POST',url:'/album/_xhr_order_photo',dataType:'json',data:{xhr:'xhr',ordre:new_order,album_id:album_id},success:function(json){if(json.msg){$.note.info(json.msg);}}});}}}).on('click','a.jDeleteImageAlbum',function(e)
{var $self=$(this),$img=$self.closest('.jManageImg').find('.jImgAlbum'),$divModal=$.copains.core.initDivModal(),userId=parseInt($self.attr('data-userid'),10),albumUrl=$img.attr('data-url');$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].ALBUMPHOTO_TITLE_CONFIRM_DELETE,$.copains.core.getTemplate('$l{ALBUMPHOTO_CONFIRM_DELETE}'),function()
{var ajaxData={photo_id:$img.attr('photo_id'),photo_cle:$img.attr('photo_cle'),album_id:$img.attr('album_id'),xhr:'xhr'},$jAdminCom=$('.jAdminCom');if($jAdminCom.length>0)
{ajaxData.adminCom=$jAdminCom.find('textarea[name=\'reason\']').val();ajaxData.adminSendMail=($jAdminCom.find('input[name=\'sendmail\']').attr('checked')=='checked')?1:undefined;}
$.ajax({type:'POST',url:'/album/_xhr_delete_photo',dataType:'json',data:ajaxData,success:function(json)
{json.msg&&$.note.info(json.msg);$self.closest('.jManageImg').remove();if(typeof albumUrl!='undefined')
{window.location=albumUrl;return;}}});$.copains.core.closeDialog('deleteImgModale');},undefined,undefined,typeof $data.common.moderator!='undefined'&&(userId!=$data.copains.user.uid),'deleteImgModale');});$('div.jListCompanyPhotos').on('click','a.jDeleteImageAlbum',function()
{var $self=$(this),$img=$self.closest('.jManageImg').find('.jImgAlbum'),userId=parseInt($self.attr('data-userid'),10);$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].ALBUMPHOTO_TITLE_CONFIRM_DELETE,$.copains.core.getTemplate('$l{ALBUMPHOTO_CONFIRM_DELETE}'),function()
{var ajaxData={photo_id:$img.attr('photo_id'),photo_cle:$img.attr('photo_cle'),etabId:$img.attr('etabl_id')};$.ajax({type:'POST',url:'/e/_xhr_delete_photo',dataType:'json',data:ajaxData,success:function(json)
{json.msg&&$.note.info(json.msg);$self.closest('.jManageImg').remove();}});$.copains.core.closeDialog('deleteImgModale');},undefined,undefined,typeof $data.common.moderator!='undefined'&&(userId!=$data.copains.user.uid),'deleteImgModale');});$('.jInfoMsg').on('click','a.jClose',function(e){$(this).closest('.jInfoMsg').remove();});},selectImageProfile:function()
{$.profile&&console.time('$.albumPhoto => selectImageProfile');var $self=$(this),$img=$self.closest('.jManageImg').find('.jImgAlbum'),$divModal=$.copains.core.initDivModal();$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].ALBUMPHOTO_TITLE_CONFIRM_SELECT,$.copains.core.getTemplate('$l{ALBUMPHOTO_CONFIRM_SELECT}'),function(){$.ajax({type:'POST',url:'/album/_xhr_choose_photoprofile',dataType:'json',data:{xhr:'xhr',photo_id:$img.attr('photo_id'),photo_cle:$img.attr('photo_cle')},success:function(data)
{if(data.msg)
{$.note.info(data.msg);}
if(data.img&&data.url)
{$.ImageActions.updateUserLogo(data.img,data.url);}
if(data.id_old&&data.id_new)
{$('.jDeleteImageAlbum[data-photoid="'+data.id_old+'"]').attr("style","");$('.jDeleteImageAlbum[data-photoid="'+data.id_new+'"]').hide();}}});$.copains.core.closeDialog();});$.profile&&console.timeEnd('$.albumPhoto => selectImageProfile');},deleteImageProfile:function()
{$.profile&&console.time('$.albumPhoto => deleteImageProfile');var $self=$(this),$img=$self.closest('.jManageImg').find('.jImgAlbum'),userId=parseInt($self.attr('data-userid'),10),albumUrl=$img.attr('data-url');$.copains.core.showInVerificationBox($.copains.core.langs[$.copains.core.lang].ALBUMPHOTO_TITLE_CONFIRM_DELETE,$.copains.core.getTemplate('$l{ALBUMPHOTO_CONFIRM_DELETE}'),function()
{var ajaxData={photo_id:$img.attr('photo_id'),photo_cle:$img.attr('photo_cle'),xhr:'xhr'},$jAdminCom=$('.jAdminCom');if($jAdminCom.length>0)
{ajaxData.adminCom=$jAdminCom.find('textarea[name=\'reason\']').val();ajaxData.adminSendMail=($jAdminCom.find('input[name=\'sendmail\']').attr('checked')=='checked')?1:undefined;}
$.ajax({type:'POST',url:'/album/_xhr_delete_photoprofile',dataType:'json',data:ajaxData,success:function(json)
{(json.msg)&&$.note.info(json.msg);if(typeof albumUrl!='undefined')
{window.location=albumUrl;return;}
if(json.main&&json.img)
{$.ImageActions.updateUserLogo(json.img,json.img,true);}
$self.closest('.jManageImg').remove();}});$.copains.core.closeDialog();},undefined,undefined,typeof $data.common.moderator!='undefined'&&(userId!=$data.copains.user.uid));$.profile&&console.timeEnd('$.albumPhoto => deleteImageProfile');}};if(_$('$data.copains.services')._.albumPhoto)
{$(document).start($.albumPhoto.init);}})(jQuery);(function($){var faq={init:function()
{$(".jToggleDisplay").css("display","none");$("a.toggleLink").bind("click",function(){$(this).next(".jToggleDisplay").slideToggle("normal");});}};($data.copains.services.faq===true)&&$(document).start(faq.init);})(jQuery);(function($)
{'use strict';$.AdvSearchEtablissement={init:function()
{$(document).on('change','.jTypeEtablissement',$.AdvSearchEtablissement.typeEtablissementChange);},typeEtablissementChange:function()
{if($data.copains.services.allowSearchCompaniesByCity==false)
{var $this=$(this);var $cityField=$this.parents('.jFrmAdvsrchEtablissement').find('.jCityField');if($this.val()=='en')
{$cityField.hide();}
else
{$cityField.show();}}}}
if(_$('$data.copains.services')._.initAdvSearchEtablissement)
{$(document).start($.AdvSearchEtablissement.init);}})(jQuery);(function(glob){var version="0.4.2",has="hasOwnProperty",separator=/[\.\/]/,comaseparator=/\s*,\s*/,wildcard="*",fun=function(){},numsort=function(a,b){return a-b;},current_event,stop,events={n:{}},firstDefined=function(){for(var i=0,ii=this.length;i<ii;i++){if(typeof this[i]!="undefined"){return this[i];}}},lastDefined=function(){var i=this.length;while(--i){if(typeof this[i]!="undefined"){return this[i];}}},eve=function(name,scope){name=String(name);var e=events,oldstop=stop,args=Array.prototype.slice.call(arguments,2),listeners=eve.listeners(name),z=0,f=false,l,indexed=[],queue={},out=[],ce=current_event,errors=[];out.firstDefined=firstDefined;out.lastDefined=lastDefined;current_event=name;stop=0;for(var i=0,ii=listeners.length;i<ii;i++)if("zIndex"in listeners[i]){indexed.push(listeners[i].zIndex);if(listeners[i].zIndex<0){queue[listeners[i].zIndex]=listeners[i];}}
indexed.sort(numsort);while(indexed[z]<0){l=queue[indexed[z++]];out.push(l.apply(scope,args));if(stop){stop=oldstop;return out;}}
for(i=0;i<ii;i++){l=listeners[i];if("zIndex"in l){if(l.zIndex==indexed[z]){out.push(l.apply(scope,args));if(stop){break;}
do{z++;l=queue[indexed[z]];l&&out.push(l.apply(scope,args));if(stop){break;}}while(l)}else{queue[l.zIndex]=l;}}else{out.push(l.apply(scope,args));if(stop){break;}}}
stop=oldstop;current_event=ce;return out;};eve._events=events;eve.listeners=function(name){var names=name.split(separator),e=events,item,items,k,i,ii,j,jj,nes,es=[e],out=[];for(i=0,ii=names.length;i<ii;i++){nes=[];for(j=0,jj=es.length;j<jj;j++){e=es[j].n;items=[e[names[i]],e[wildcard]];k=2;while(k--){item=items[k];if(item){nes.push(item);out=out.concat(item.f||[]);}}}
es=nes;}
return out;};eve.on=function(name,f){name=String(name);if(typeof f!="function"){return function(){};}
var names=name.split(comaseparator);for(var i=0,ii=names.length;i<ii;i++){(function(name){var names=name.split(separator),e=events,exist;for(var i=0,ii=names.length;i<ii;i++){e=e.n;e=e.hasOwnProperty(names[i])&&e[names[i]]||(e[names[i]]={n:{}});}
e.f=e.f||[];for(i=0,ii=e.f.length;i<ii;i++)if(e.f[i]==f){exist=true;break;}
!exist&&e.f.push(f);}(names[i]));}
return function(zIndex){if(+zIndex==+zIndex){f.zIndex=+zIndex;}};};eve.f=function(event){var attrs=[].slice.call(arguments,1);return function(){eve.apply(null,[event,null].concat(attrs).concat([].slice.call(arguments,0)));};};eve.stop=function(){stop=1;};eve.nt=function(subname){if(subname){return new RegExp("(?:\\.|\\/|^)"+subname+"(?:\\.|\\/|$)").test(current_event);}
return current_event;};eve.nts=function(){return current_event.split(separator);};eve.off=eve.unbind=function(name,f){if(!name){eve._events=events={n:{}};return;}
var names=name.split(comaseparator);if(names.length>1){for(var i=0,ii=names.length;i<ii;i++){eve.off(names[i],f);}
return;}
names=name.split(separator);var e,key,splice,i,ii,j,jj,cur=[events];for(i=0,ii=names.length;i<ii;i++){for(j=0;j<cur.length;j+=splice.length-2){splice=[j,1];e=cur[j].n;if(names[i]!=wildcard){if(e[names[i]]){splice.push(e[names[i]]);}}else{for(key in e)if(e[has](key)){splice.push(e[key]);}}
cur.splice.apply(cur,splice);}}
for(i=0,ii=cur.length;i<ii;i++){e=cur[i];while(e.n){if(f){if(e.f){for(j=0,jj=e.f.length;j<jj;j++)if(e.f[j]==f){e.f.splice(j,1);break;}
!e.f.length&&delete e.f;}
for(key in e.n)if(e.n[has](key)&&e.n[key].f){var funcs=e.n[key].f;for(j=0,jj=funcs.length;j<jj;j++)if(funcs[j]==f){funcs.splice(j,1);break;}
!funcs.length&&delete e.n[key].f;}}else{delete e.f;for(key in e.n)if(e.n[has](key)&&e.n[key].f){delete e.n[key].f;}}
e=e.n;}}};eve.once=function(name,f){var f2=function(){eve.unbind(name,f2);return f.apply(this,arguments);};return eve.on(name,f2);};eve.version=version;eve.toString=function(){return"You are running Eve "+version;};(typeof module!="undefined"&&module.exports)?(module.exports=eve):(typeof define==="function"&&define.amd?(define("eve",[],function(){return eve;})):(glob.eve=eve));})(this);(function(glob,factory){if(typeof define==="function"&&define.amd){define(["eve"],function(eve){return factory(glob,eve);});}else{factory(glob,glob.eve);}}(this,function(window,eve){var mina=(function(eve){var animations={},requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,16);},isArray=Array.isArray||function(a){return a instanceof Array||Object.prototype.toString.call(a)=="[object Array]";},idgen=0,idprefix="M"+(+new Date).toString(36),ID=function(){return idprefix+(idgen++).toString(36);},diff=function(a,b,A,B){if(isArray(a)){res=[];for(var i=0,ii=a.length;i<ii;i++){res[i]=diff(a[i],b,A[i],B);}
return res;}
var dif=(A-a)/(B-b);return function(bb){return a+dif*(bb-b);};},timer=Date.now||function(){return+new Date;},sta=function(val){var a=this;if(val==null){return a.s;}
var ds=a.s-val;a.b+=a.dur*ds;a.B+=a.dur*ds;a.s=val;},speed=function(val){var a=this;if(val==null){return a.spd;}
a.spd=val;},duration=function(val){var a=this;if(val==null){return a.dur;}
a.s=a.s*val/a.dur;a.dur=val;},stopit=function(){var a=this;delete animations[a.id];a.update();eve("mina.stop."+a.id,a);},pause=function(){var a=this;if(a.pdif){return;}
delete animations[a.id];a.update();a.pdif=a.get()-a.b;},resume=function(){var a=this;if(!a.pdif){return;}
a.b=a.get()-a.pdif;delete a.pdif;animations[a.id]=a;},update=function(){var a=this,res;if(isArray(a.start)){res=[];for(var j=0,jj=a.start.length;j<jj;j++){res[j]=+a.start[j]+
(a.end[j]-a.start[j])*a.easing(a.s);}}else{res=+a.start+(a.end-a.start)*a.easing(a.s);}
a.set(res);},frame=function(){var len=0;for(var i in animations)if(animations.hasOwnProperty(i)){var a=animations[i],b=a.get(),res;len++;a.s=(b-a.b)/(a.dur/a.spd);if(a.s>=1){delete animations[i];a.s=1;len--;(function(a){setTimeout(function(){eve("mina.finish."+a.id,a);});}(a));}
a.update();}
len&&requestAnimFrame(frame);},mina=function(a,A,b,B,get,set,easing){var anim={id:ID(),start:a,end:A,b:b,s:0,dur:B-b,spd:1,get:get,set:set,easing:easing||mina.linear,status:sta,speed:speed,duration:duration,stop:stopit,pause:pause,resume:resume,update:update};animations[anim.id]=anim;var len=0,i;for(i in animations)if(animations.hasOwnProperty(i)){len++;if(len==2){break;}}
len==1&&requestAnimFrame(frame);return anim;};mina.time=timer;mina.getById=function(id){return animations[id]||null;};mina.linear=function(n){return n;};mina.easeout=function(n){return Math.pow(n,1.7);};mina.easein=function(n){return Math.pow(n,.48);};mina.easeinout=function(n){if(n==1){return 1;}
if(n==0){return 0;}
var q=.48-n/1.04,Q=Math.sqrt(.1734+q*q),x=Q-q,X=Math.pow(Math.abs(x),1/3)*(x<0?-1:1),y=-Q-q,Y=Math.pow(Math.abs(y),1/3)*(y<0?-1:1),t=X+Y+.5;return(1-t)*3*t*t+t*t*t;};mina.backin=function(n){if(n==1){return 1;}
var s=1.70158;return n*n*((s+1)*n-s);};mina.backout=function(n){if(n==0){return 0;}
n=n-1;var s=1.70158;return n*n*((s+1)*n+s)+1;};mina.elastic=function(n){if(n==!!n){return n;}
return Math.pow(2,-10*n)*Math.sin((n-.075)*(2*Math.PI)/.3)+1;};mina.bounce=function(n){var s=7.5625,p=2.75,l;if(n<(1/p)){l=s*n*n;}else{if(n<(2/p)){n-=(1.5/p);l=s*n*n+.75;}else{if(n<(2.5/p)){n-=(2.25/p);l=s*n*n+.9375;}else{n-=(2.625/p);l=s*n*n+.984375;}}}
return l;};window.mina=mina;return mina;})(typeof eve=="undefined"?function(){}:eve);var Snap=(function(){Snap.version="0.3.0";function Snap(w,h){if(w){if(w.tagName){return wrap(w);}
if(is(w,"array")&&Snap.set){return Snap.set.apply(Snap,w);}
if(w instanceof Element){return w;}
if(h==null){w=glob.doc.querySelector(w);return wrap(w);}}
w=w==null?"100%":w;h=h==null?"100%":h;return new Paper(w,h);}
Snap.toString=function(){return"Snap v"+this.version;};Snap._={};var glob={win:window,doc:window.document};Snap._.glob=glob;var has="hasOwnProperty",Str=String,toFloat=parseFloat,toInt=parseInt,math=Math,mmax=math.max,mmin=math.min,abs=math.abs,pow=math.pow,PI=math.PI,round=math.round,E="",S=" ",objectToString=Object.prototype.toString,ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,colourRegExp=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,bezierrg=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,reURLValue=/^url\(#?([^)]+)\)$/,spaces="\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029",separator=Snap._.separator=new RegExp("[,"+spaces+"]+"),whitespace=new RegExp("["+spaces+"]","g"),commaSpaces=new RegExp("["+spaces+"]*,["+spaces+"]*"),hsrg={hs:1,rg:1},pathCommand=new RegExp("([a-z])["+spaces+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+spaces+"]*,?["+spaces+"]*)+)","ig"),tCommand=new RegExp("([rstm])["+spaces+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+spaces+"]*,?["+spaces+"]*)+)","ig"),pathValues=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+spaces+"]*,?["+spaces+"]*","ig"),idgen=0,idprefix="S"+(+new Date).toString(36),ID=function(){return idprefix+(idgen++).toString(36);},xlink="http://www.w3.org/1999/xlink",xmlns="http://www.w3.org/2000/svg",hub={},URL=Snap.url=function(url){return"url('#"+url+"')";};function $(el,attr){if(attr){if(el=="#text"){el=glob.doc.createTextNode(attr.text||"");}
if(typeof el=="string"){el=$(el);}
if(typeof attr=="string"){if(attr.substring(0,6)=="xlink:"){return el.getAttributeNS(xlink,attr.substring(6));}
if(attr.substring(0,4)=="xml:"){return el.getAttributeNS(xmlns,attr.substring(4));}
return el.getAttribute(attr);}
for(var key in attr)if(attr[has](key)){var val=Str(attr[key]);if(val){if(key.substring(0,6)=="xlink:"){el.setAttributeNS(xlink,key.substring(6),val);}else if(key.substring(0,4)=="xml:"){el.setAttributeNS(xmlns,key.substring(4),val);}else{el.setAttribute(key,val);}}else{el.removeAttribute(key);}}}else{el=glob.doc.createElementNS(xmlns,el);}
return el;}
Snap._.$=$;Snap._.id=ID;function getAttrs(el){var attrs=el.attributes,name,out={};for(var i=0;i<attrs.length;i++){if(attrs[i].namespaceURI==xlink){name="xlink:";}else{name="";}
name+=attrs[i].name;out[name]=attrs[i].textContent;}
return out;}
function is(o,type){type=Str.prototype.toLowerCase.call(type);if(type=="finite"){return isFinite(o);}
if(type=="array"&&(o instanceof Array||Array.isArray&&Array.isArray(o))){return true;}
return(type=="null"&&o===null)||(type==typeof o&&o!==null)||(type=="object"&&o===Object(o))||objectToString.call(o).slice(8,-1).toLowerCase()==type;}
Snap.format=(function(){var tokenRegex=/\{([^\}]+)\}/g,objNotationRegex=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,replacer=function(all,key,obj){var res=obj;key.replace(objNotationRegex,function(all,name,quote,quotedName,isFunc){name=name||quotedName;if(res){if(name in res){res=res[name];}
typeof res=="function"&&isFunc&&(res=res());}});res=(res==null||res==obj?all:res)+"";return res;};return function(str,obj){return Str(str).replace(tokenRegex,function(all,key){return replacer(all,key,obj);});};})();function clone(obj){if(typeof obj=="function"||Object(obj)!==obj){return obj;}
var res=new obj.constructor;for(var key in obj)if(obj[has](key)){res[key]=clone(obj[key]);}
return res;}
Snap._.clone=clone;function repush(array,item){for(var i=0,ii=array.length;i<ii;i++)if(array[i]===item){return array.push(array.splice(i,1)[0]);}}
function cacher(f,scope,postprocessor){function newf(){var arg=Array.prototype.slice.call(arguments,0),args=arg.join("\u2400"),cache=newf.cache=newf.cache||{},count=newf.count=newf.count||[];if(cache[has](args)){repush(count,args);return postprocessor?postprocessor(cache[args]):cache[args];}
count.length>=1e3&&delete cache[count.shift()];count.push(args);cache[args]=f.apply(scope,arg);return postprocessor?postprocessor(cache[args]):cache[args];}
return newf;}
Snap._.cacher=cacher;function angle(x1,y1,x2,y2,x3,y3){if(x3==null){var x=x1-x2,y=y1-y2;if(!x&&!y){return 0;}
return(180+math.atan2(-y,-x)*180/PI+360)%360;}else{return angle(x1,y1,x3,y3)-angle(x2,y2,x3,y3);}}
function rad(deg){return deg%360*PI/180;}
function deg(rad){return rad*180/PI%360;}
function x_y(){return this.x+S+this.y;}
function x_y_w_h(){return this.x+S+this.y+S+this.width+" \xd7 "+this.height;}
Snap.rad=rad;Snap.deg=deg;Snap.angle=angle;Snap.is=is;Snap.snapTo=function(values,value,tolerance){tolerance=is(tolerance,"finite")?tolerance:10;if(is(values,"array")){var i=values.length;while(i--)if(abs(values[i]-value)<=tolerance){return values[i];}}else{values=+values;var rem=value%values;if(rem<tolerance){return value-rem;}
if(rem>values-tolerance){return value-rem+values;}}
return value;};Snap.getRGB=cacher(function(colour){if(!colour||!!((colour=Str(colour)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:rgbtoString};}
if(colour=="none"){return{r:-1,g:-1,b:-1,hex:"none",toString:rgbtoString};}
!(hsrg[has](colour.toLowerCase().substring(0,2))||colour.charAt()=="#")&&(colour=toHex(colour));if(!colour){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:rgbtoString};}
var res,red,green,blue,opacity,t,values,rgb=colour.match(colourRegExp);if(rgb){if(rgb[2]){blue=toInt(rgb[2].substring(5),16);green=toInt(rgb[2].substring(3,5),16);red=toInt(rgb[2].substring(1,3),16);}
if(rgb[3]){blue=toInt((t=rgb[3].charAt(3))+t,16);green=toInt((t=rgb[3].charAt(2))+t,16);red=toInt((t=rgb[3].charAt(1))+t,16);}
if(rgb[4]){values=rgb[4].split(commaSpaces);red=toFloat(values[0]);values[0].slice(-1)=="%"&&(red*=2.55);green=toFloat(values[1]);values[1].slice(-1)=="%"&&(green*=2.55);blue=toFloat(values[2]);values[2].slice(-1)=="%"&&(blue*=2.55);rgb[1].toLowerCase().slice(0,4)=="rgba"&&(opacity=toFloat(values[3]));values[3]&&values[3].slice(-1)=="%"&&(opacity/=100);}
if(rgb[5]){values=rgb[5].split(commaSpaces);red=toFloat(values[0]);values[0].slice(-1)=="%"&&(red/=100);green=toFloat(values[1]);values[1].slice(-1)=="%"&&(green/=100);blue=toFloat(values[2]);values[2].slice(-1)=="%"&&(blue/=100);(values[0].slice(-3)=="deg"||values[0].slice(-1)=="\xb0")&&(red/=360);rgb[1].toLowerCase().slice(0,4)=="hsba"&&(opacity=toFloat(values[3]));values[3]&&values[3].slice(-1)=="%"&&(opacity/=100);return Snap.hsb2rgb(red,green,blue,opacity);}
if(rgb[6]){values=rgb[6].split(commaSpaces);red=toFloat(values[0]);values[0].slice(-1)=="%"&&(red/=100);green=toFloat(values[1]);values[1].slice(-1)=="%"&&(green/=100);blue=toFloat(values[2]);values[2].slice(-1)=="%"&&(blue/=100);(values[0].slice(-3)=="deg"||values[0].slice(-1)=="\xb0")&&(red/=360);rgb[1].toLowerCase().slice(0,4)=="hsla"&&(opacity=toFloat(values[3]));values[3]&&values[3].slice(-1)=="%"&&(opacity/=100);return Snap.hsl2rgb(red,green,blue,opacity);}
red=mmin(math.round(red),255);green=mmin(math.round(green),255);blue=mmin(math.round(blue),255);opacity=mmin(mmax(opacity,0),1);rgb={r:red,g:green,b:blue,toString:rgbtoString};rgb.hex="#"+(16777216|blue|(green<<8)|(red<<16)).toString(16).slice(1);rgb.opacity=is(opacity,"finite")?opacity:1;return rgb;}
return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:rgbtoString};},Snap);Snap.hsb=cacher(function(h,s,b){return Snap.hsb2rgb(h,s,b).hex;});Snap.hsl=cacher(function(h,s,l){return Snap.hsl2rgb(h,s,l).hex;});Snap.rgb=cacher(function(r,g,b,o){if(is(o,"finite")){var round=math.round;return"rgba("+[round(r),round(g),round(b),+o.toFixed(2)]+")";}
return"#"+(16777216|b|(g<<8)|(r<<16)).toString(16).slice(1);});var toHex=function(color){var i=glob.doc.getElementsByTagName("head")[0]||glob.doc.getElementsByTagName("svg")[0],red="rgb(255, 0, 0)";toHex=cacher(function(color){if(color.toLowerCase()=="red"){return red;}
i.style.color=red;i.style.color=color;var out=glob.doc.defaultView.getComputedStyle(i,E).getPropertyValue("color");return out==red?null:out;});return toHex(color);},hsbtoString=function(){return"hsb("+[this.h,this.s,this.b]+")";},hsltoString=function(){return"hsl("+[this.h,this.s,this.l]+")";},rgbtoString=function(){return this.opacity==1||this.opacity==null?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")";},prepareRGB=function(r,g,b){if(g==null&&is(r,"object")&&"r"in r&&"g"in r&&"b"in r){b=r.b;g=r.g;r=r.r;}
if(g==null&&is(r,string)){var clr=Snap.getRGB(r);r=clr.r;g=clr.g;b=clr.b;}
if(r>1||g>1||b>1){r/=255;g/=255;b/=255;}
return[r,g,b];},packageRGB=function(r,g,b,o){r=math.round(r*255);g=math.round(g*255);b=math.round(b*255);var rgb={r:r,g:g,b:b,opacity:is(o,"finite")?o:1,hex:Snap.rgb(r,g,b),toString:rgbtoString};is(o,"finite")&&(rgb.opacity=o);return rgb;};Snap.color=function(clr){var rgb;if(is(clr,"object")&&"h"in clr&&"s"in clr&&"b"in clr){rgb=Snap.hsb2rgb(clr);clr.r=rgb.r;clr.g=rgb.g;clr.b=rgb.b;clr.opacity=1;clr.hex=rgb.hex;}else if(is(clr,"object")&&"h"in clr&&"s"in clr&&"l"in clr){rgb=Snap.hsl2rgb(clr);clr.r=rgb.r;clr.g=rgb.g;clr.b=rgb.b;clr.opacity=1;clr.hex=rgb.hex;}else{if(is(clr,"string")){clr=Snap.getRGB(clr);}
if(is(clr,"object")&&"r"in clr&&"g"in clr&&"b"in clr&&!("error"in clr)){rgb=Snap.rgb2hsl(clr);clr.h=rgb.h;clr.s=rgb.s;clr.l=rgb.l;rgb=Snap.rgb2hsb(clr);clr.v=rgb.b;}else{clr={hex:"none"};clr.r=clr.g=clr.b=clr.h=clr.s=clr.v=clr.l=-1;clr.error=1;}}
clr.toString=rgbtoString;return clr;};Snap.hsb2rgb=function(h,s,v,o){if(is(h,"object")&&"h"in h&&"s"in h&&"b"in h){v=h.b;s=h.s;h=h.h;o=h.o;}
h*=360;var R,G,B,X,C;h=(h%360)/60;C=v*s;X=C*(1-abs(h%2-1));R=G=B=v-C;h=~~h;R+=[C,X,0,0,X,C][h];G+=[X,C,C,X,0,0][h];B+=[0,0,X,C,C,X][h];return packageRGB(R,G,B,o);};Snap.hsl2rgb=function(h,s,l,o){if(is(h,"object")&&"h"in h&&"s"in h&&"l"in h){l=h.l;s=h.s;h=h.h;}
if(h>1||s>1||l>1){h/=360;s/=100;l/=100;}
h*=360;var R,G,B,X,C;h=(h%360)/60;C=2*s*(l<.5?l:1-l);X=C*(1-abs(h%2-1));R=G=B=l-C/2;h=~~h;R+=[C,X,0,0,X,C][h];G+=[X,C,C,X,0,0][h];B+=[0,0,X,C,C,X][h];return packageRGB(R,G,B,o);};Snap.rgb2hsb=function(r,g,b){b=prepareRGB(r,g,b);r=b[0];g=b[1];b=b[2];var H,S,V,C;V=mmax(r,g,b);C=V-mmin(r,g,b);H=(C==0?null:V==r?(g-b)/C:V==g?(b-r)/C+2:(r-g)/C+4);H=((H+360)%6)*60/360;S=C==0?0:C/V;return{h:H,s:S,b:V,toString:hsbtoString};};Snap.rgb2hsl=function(r,g,b){b=prepareRGB(r,g,b);r=b[0];g=b[1];b=b[2];var H,S,L,M,m,C;M=mmax(r,g,b);m=mmin(r,g,b);C=M-m;H=(C==0?null:M==r?(g-b)/C:M==g?(b-r)/C+2:(r-g)/C+4);H=((H+360)%6)*60/360;L=(M+m)/2;S=(C==0?0:L<.5?C/(2*L):C/(2-2*L));return{h:H,s:S,l:L,toString:hsltoString};};Snap.parsePathString=function(pathString){if(!pathString){return null;}
var pth=Snap.path(pathString);if(pth.arr){return Snap.path.clone(pth.arr);}
var paramCounts={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},data=[];if(is(pathString,"array")&&is(pathString[0],"array")){data=Snap.path.clone(pathString);}
if(!data.length){Str(pathString).replace(pathCommand,function(a,b,c){var params=[],name=b.toLowerCase();c.replace(pathValues,function(a,b){b&&params.push(+b);});if(name=="m"&&params.length>2){data.push([b].concat(params.splice(0,2)));name="l";b=b=="m"?"l":"L";}
if(name=="o"&&params.length==1){data.push([b,params[0]]);}
if(name=="r"){data.push([b].concat(params));}else while(params.length>=paramCounts[name]){data.push([b].concat(params.splice(0,paramCounts[name])));if(!paramCounts[name]){break;}}});}
data.toString=Snap.path.toString;pth.arr=Snap.path.clone(data);return data;};var parseTransformString=Snap.parseTransformString=function(TString){if(!TString){return null;}
var paramCounts={r:3,s:4,t:2,m:6},data=[];if(is(TString,"array")&&is(TString[0],"array")){data=Snap.path.clone(TString);}
if(!data.length){Str(TString).replace(tCommand,function(a,b,c){var params=[],name=b.toLowerCase();c.replace(pathValues,function(a,b){b&&params.push(+b);});data.push([b].concat(params));});}
data.toString=Snap.path.toString;return data;};function svgTransform2string(tstr){var res=[];tstr=tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(all,name,params){params=params.split(/\s*,\s*|\s+/);if(name=="rotate"&&params.length==1){params.push(0,0);}
if(name=="scale"){if(params.length>2){params=params.slice(0,2);}else if(params.length==2){params.push(0,0);}
if(params.length==1){params.push(params[0],0,0);}}
if(name=="skewX"){res.push(["m",1,0,math.tan(rad(params[0])),1,0,0]);}else if(name=="skewY"){res.push(["m",1,math.tan(rad(params[0])),0,1,0,0]);}else{res.push([name.charAt(0)].concat(params));}
return all;});return res;}
Snap._.svgTransform2string=svgTransform2string;Snap._.rgTransform=new RegExp("^[a-z]["+spaces+"]*-?\\.?\\d","i");function transform2matrix(tstr,bbox){var tdata=parseTransformString(tstr),m=new Snap.Matrix;if(tdata){for(var i=0,ii=tdata.length;i<ii;i++){var t=tdata[i],tlen=t.length,command=Str(t[0]).toLowerCase(),absolute=t[0]!=command,inver=absolute?m.invert():0,x1,y1,x2,y2,bb;if(command=="t"&&tlen==2){m.translate(t[1],0);}else if(command=="t"&&tlen==3){if(absolute){x1=inver.x(0,0);y1=inver.y(0,0);x2=inver.x(t[1],t[2]);y2=inver.y(t[1],t[2]);m.translate(x2-x1,y2-y1);}else{m.translate(t[1],t[2]);}}else if(command=="r"){if(tlen==2){bb=bb||bbox;m.rotate(t[1],bb.x+bb.width/2,bb.y+bb.height/2);}else if(tlen==4){if(absolute){x2=inver.x(t[2],t[3]);y2=inver.y(t[2],t[3]);m.rotate(t[1],x2,y2);}else{m.rotate(t[1],t[2],t[3]);}}}else if(command=="s"){if(tlen==2||tlen==3){bb=bb||bbox;m.scale(t[1],t[tlen-1],bb.x+bb.width/2,bb.y+bb.height/2);}else if(tlen==4){if(absolute){x2=inver.x(t[2],t[3]);y2=inver.y(t[2],t[3]);m.scale(t[1],t[1],x2,y2);}else{m.scale(t[1],t[1],t[2],t[3]);}}else if(tlen==5){if(absolute){x2=inver.x(t[3],t[4]);y2=inver.y(t[3],t[4]);m.scale(t[1],t[2],x2,y2);}else{m.scale(t[1],t[2],t[3],t[4]);}}}else if(command=="m"&&tlen==7){m.add(t[1],t[2],t[3],t[4],t[5],t[6]);}}}
return m;}
Snap._.transform2matrix=transform2matrix;function extractTransform(el,tstr){if(tstr==null){var doReturn=true;if(el.type=="linearGradient"||el.type=="radialGradient"){tstr=el.node.getAttribute("gradientTransform");}else if(el.type=="pattern"){tstr=el.node.getAttribute("patternTransform");}else{tstr=el.node.getAttribute("transform");}
if(!tstr){return new Snap.Matrix;}
tstr=svgTransform2string(tstr);}else{if(!Snap._.rgTransform.test(tstr)){tstr=svgTransform2string(tstr);}else{tstr=Str(tstr).replace(/\.{3}|\u2026/g,el._.transform||E);}
if(is(tstr,"array")){tstr=Snap.path?Snap.path.toString.call(tstr):Str(tstr);}
el._.transform=tstr;}
var m=transform2matrix(tstr,el.getBBox(1));if(doReturn){return m;}else{el.matrix=m;}}
Snap._unit2px=unit2px;var contains=glob.doc.contains||glob.doc.compareDocumentPosition?function(a,b){var adown=a.nodeType==9?a.documentElement:a,bup=b&&b.parentNode;return a==bup||!!(bup&&bup.nodeType==1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b){b=b.parentNode;if(b==a){return true;}}}
return false;};function getSomeDefs(el){var p=(el.node.ownerSVGElement&&wrap(el.node.ownerSVGElement))||(el.node.parentNode&&wrap(el.node.parentNode))||Snap.select("svg")||Snap(0,0),pdefs=p.select("defs"),defs=pdefs==null?false:pdefs.node;if(!defs){defs=make("defs",p.node).node;}
return defs;}
function getSomeSVG(el){return el.node.ownerSVGElement&&wrap(el.node.ownerSVGElement)||Snap.select("svg");}
Snap._.getSomeDefs=getSomeDefs;Snap._.getSomeSVG=getSomeSVG;function unit2px(el,name,value){var svg=getSomeSVG(el).node,out={},mgr=svg.querySelector(".svg---mgr");if(!mgr){mgr=$("rect");$(mgr,{x:-9e9,y:-9e9,width:10,height:10,"class":"svg---mgr",fill:"none"});svg.appendChild(mgr);}
function getW(val){if(val==null){return E;}
if(val==+val){return val;}
$(mgr,{width:val});try{return mgr.getBBox().width;}catch(e){return 0;}}
function getH(val){if(val==null){return E;}
if(val==+val){return val;}
$(mgr,{height:val});try{return mgr.getBBox().height;}catch(e){return 0;}}
function set(nam,f){if(name==null){out[nam]=f(el.attr(nam)||0);}else if(nam==name){out=f(value==null?el.attr(nam)||0:value);}}
switch(el.type){case"rect":set("rx",getW);set("ry",getH);case"image":set("width",getW);set("height",getH);case"text":set("x",getW);set("y",getH);break;case"circle":set("cx",getW);set("cy",getH);set("r",getW);break;case"ellipse":set("cx",getW);set("cy",getH);set("rx",getW);set("ry",getH);break;case"line":set("x1",getW);set("x2",getW);set("y1",getH);set("y2",getH);break;case"marker":set("refX",getW);set("markerWidth",getW);set("refY",getH);set("markerHeight",getH);break;case"radialGradient":set("fx",getW);set("fy",getH);break;case"tspan":set("dx",getW);set("dy",getH);break;default:set(name,getW);}
svg.removeChild(mgr);return out;}
Snap.select=function(query){return wrap(glob.doc.querySelector(query));};Snap.selectAll=function(query){var nodelist=glob.doc.querySelectorAll(query),set=(Snap.set||Array)();for(var i=0;i<nodelist.length;i++){set.push(wrap(nodelist[i]));}
return set;};function add2group(list){if(!is(list,"array")){list=Array.prototype.slice.call(arguments,0);}
var i=0,j=0,node=this.node;while(this[i])delete this[i++];for(i=0;i<list.length;i++){if(list[i].type=="set"){list[i].forEach(function(el){node.appendChild(el.node);});}else{node.appendChild(list[i].node);}}
var children=node.childNodes;for(i=0;i<children.length;i++){this[j++]=wrap(children[i]);}
return this;}
setInterval(function(){for(var key in hub)if(hub[has](key)){var el=hub[key],node=el.node;if(el.type!="svg"&&!node.ownerSVGElement||el.type=="svg"&&(!node.parentNode||"ownerSVGElement"in node.parentNode&&!node.ownerSVGElement)){delete hub[key];}}},1e4);function Element(el){if(el.snap in hub){return hub[el.snap];}
var id=this.id=ID(),svg;try{svg=el.ownerSVGElement;}catch(e){}
this.node=el;if(svg){this.paper=new Paper(svg);}
this.type=el.tagName;this.anims={};this._={transform:[]};el.snap=id;hub[id]=this;if(this.type=="g"){this.add=add2group;}
if(this.type in{"g":1,"mask":1,"pattern":1}){for(var method in Paper.prototype)if(Paper.prototype[has](method)){this[method]=Paper.prototype[method];}}}
(function(elproto){elproto.attr=function(params,value){var el=this,node=el.node;if(!params){return el;}
if(is(params,"string")){if(arguments.length>1){var json={};json[params]=value;params=json;}else{return eve("snap.util.getattr."+params,el).firstDefined();}}
for(var att in params){if(params[has](att)){eve("snap.util.attr."+att,el,params[att]);}}
return el;};elproto.getBBox=function(isWithoutTransform){if(!Snap.Matrix||!Snap.path){return this.node.getBBox();}
var el=this,m=new Snap.Matrix;if(el.removed){return Snap._.box();}
while(el.type=="use"){if(!isWithoutTransform){m=m.add(el.transform().localMatrix.translate(el.attr("x")||0,el.attr("y")||0));}
if(el.original){el=el.original;}else{var href=el.attr("xlink:href");el=el.original=el.node.ownerDocument.getElementById(href.substring(href.indexOf("#")+1));}}
var _=el._,pathfinder=Snap.path.get[el.type]||Snap.path.get.deflt;try{if(isWithoutTransform){_.bboxwt=pathfinder?Snap.path.getBBox(el.realPath=pathfinder(el)):Snap._.box(el.node.getBBox());return Snap._.box(_.bboxwt);}else{el.realPath=pathfinder(el);el.matrix=el.transform().localMatrix;_.bbox=Snap.path.getBBox(Snap.path.map(el.realPath,m.add(el.matrix)));return Snap._.box(_.bbox);}}catch(e){return Snap._.box();}};var propString=function(){return this.string;};elproto.transform=function(tstr){var _=this._;if(tstr==null){var papa=this,global=new Snap.Matrix(this.node.getCTM()),local=extractTransform(this),ms=[local],m=new Snap.Matrix,i,localString=local.toTransformString(),string=Str(local)==Str(this.matrix)?Str(_.transform):localString;while(papa.type!="svg"&&(papa=papa.parent())){ms.push(extractTransform(papa));}
i=ms.length;while(i--){m.add(ms[i]);}
return{string:string,globalMatrix:global,totalMatrix:m,localMatrix:local,diffMatrix:global.clone().add(local.invert()),global:global.toTransformString(),total:m.toTransformString(),local:localString,toString:propString};}
if(tstr instanceof Snap.Matrix){this.matrix=tstr;}else{extractTransform(this,tstr);}
if(this.node){if(this.type=="linearGradient"||this.type=="radialGradient"){$(this.node,{gradientTransform:this.matrix});}else if(this.type=="pattern"){$(this.node,{patternTransform:this.matrix});}else{$(this.node,{transform:this.matrix});}}
return this;};elproto.parent=function(){return wrap(this.node.parentNode);};elproto.append=elproto.add=function(el){if(el){if(el.type=="set"){var it=this;el.forEach(function(el){it.add(el);});return this;}
el=wrap(el);this.node.appendChild(el.node);el.paper=this.paper;}
return this;};elproto.appendTo=function(el){if(el){el=wrap(el);el.append(this);}
return this;};elproto.prepend=function(el){if(el){if(el.type=="set"){var it=this,first;el.forEach(function(el){if(first){first.after(el);}else{it.prepend(el);}
first=el;});return this;}
el=wrap(el);var parent=el.parent();this.node.insertBefore(el.node,this.node.firstChild);this.add&&this.add();el.paper=this.paper;this.parent()&&this.parent().add();parent&&parent.add();}
return this;};elproto.prependTo=function(el){el=wrap(el);el.prepend(this);return this;};elproto.before=function(el){if(el.type=="set"){var it=this;el.forEach(function(el){var parent=el.parent();it.node.parentNode.insertBefore(el.node,it.node);parent&&parent.add();});this.parent().add();return this;}
el=wrap(el);var parent=el.parent();this.node.parentNode.insertBefore(el.node,this.node);this.parent()&&this.parent().add();parent&&parent.add();el.paper=this.paper;return this;};elproto.after=function(el){el=wrap(el);var parent=el.parent();if(this.node.nextSibling){this.node.parentNode.insertBefore(el.node,this.node.nextSibling);}else{this.node.parentNode.appendChild(el.node);}
this.parent()&&this.parent().add();parent&&parent.add();el.paper=this.paper;return this;};elproto.insertBefore=function(el){el=wrap(el);var parent=this.parent();el.node.parentNode.insertBefore(this.node,el.node);this.paper=el.paper;parent&&parent.add();el.parent()&&el.parent().add();return this;};elproto.insertAfter=function(el){el=wrap(el);var parent=this.parent();el.node.parentNode.insertBefore(this.node,el.node.nextSibling);this.paper=el.paper;parent&&parent.add();el.parent()&&el.parent().add();return this;};elproto.remove=function(){var parent=this.parent();this.node.parentNode&&this.node.parentNode.removeChild(this.node);delete this.paper;this.removed=true;parent&&parent.add();return this;};elproto.select=function(query){return wrap(this.node.querySelector(query));};elproto.selectAll=function(query){var nodelist=this.node.querySelectorAll(query),set=(Snap.set||Array)();for(var i=0;i<nodelist.length;i++){set.push(wrap(nodelist[i]));}
return set;};elproto.asPX=function(attr,value){if(value==null){value=this.attr(attr);}
return+unit2px(this,attr,value);};elproto.use=function(){var use,id=this.node.id;if(!id){id=this.id;$(this.node,{id:id});}
if(this.type=="linearGradient"||this.type=="radialGradient"||this.type=="pattern"){use=make(this.type,this.node.parentNode);}else{use=make("use",this.node.parentNode);}
$(use.node,{"xlink:href":"#"+id});use.original=this;return use;};function fixids(el){var els=el.selectAll("*"),it,url=/^\s*url\(("|'|)(.*)\1\)\s*$/,ids=[],uses={};function urltest(it,name){var val=$(it.node,name);val=val&&val.match(url);val=val&&val[2];if(val&&val.charAt()=="#"){val=val.substring(1);}else{return;}
if(val){uses[val]=(uses[val]||[]).concat(function(id){var attr={};attr[name]=URL(id);$(it.node,attr);});}}
function linktest(it){var val=$(it.node,"xlink:href");if(val&&val.charAt()=="#"){val=val.substring(1);}else{return;}
if(val){uses[val]=(uses[val]||[]).concat(function(id){it.attr("xlink:href","#"+id);});}}
for(var i=0,ii=els.length;i<ii;i++){it=els[i];urltest(it,"fill");urltest(it,"stroke");urltest(it,"filter");urltest(it,"mask");urltest(it,"clip-path");linktest(it);var oldid=$(it.node,"id");if(oldid){$(it.node,{id:it.id});ids.push({old:oldid,id:it.id});}}
for(i=0,ii=ids.length;i<ii;i++){var fs=uses[ids[i].old];if(fs){for(var j=0,jj=fs.length;j<jj;j++){fs[j](ids[i].id);}}}}
var rgNotSpace=/\S+/g,rgBadSpace=/[\t\r\n\f]/g,rgTrim=/(^\s+|\s+$)/g;elproto.addClass=function(value){var classes=(value||"").match(rgNotSpace)||[],elem=this.node,className=elem.className.baseVal,curClasses=className.match(rgNotSpace)||[],j,pos,clazz,finalValue;if(classes.length){j=0;while((clazz=classes[j++])){pos=curClasses.indexOf(clazz);if(!~pos){curClasses.push(clazz);}}
finalValue=curClasses.join(" ");if(className!=finalValue){elem.className.baseVal=finalValue;}}
return this;};elproto.removeClass=function(value){var classes=(value||"").match(rgNotSpace)||[],elem=this.node,className=elem.className.baseVal,curClasses=className.match(rgNotSpace)||[],j,pos,clazz,finalValue;if(curClasses.length){j=0;while((clazz=classes[j++])){pos=curClasses.indexOf(clazz);if(~pos){curClasses.splice(pos,1);}}
finalValue=curClasses.join(" ");if(className!=finalValue){elem.className.baseVal=finalValue;}}
return this;};elproto.hasClass=function(value){var elem=this.node,className=elem.className.baseVal,curClasses=className.match(rgNotSpace)||[];return!!~curClasses.indexOf(value);};elproto.toggleClass=function(value,flag){if(flag!=null){if(flag){return this.addClass(value);}else{return this.removeClass(value);}}
var classes=(value||"").match(rgNotSpace)||[],elem=this.node,className=elem.className.baseVal,curClasses=className.match(rgNotSpace)||[],j,pos,clazz,finalValue;j=0;while((clazz=classes[j++])){pos=curClasses.indexOf(clazz);if(~pos){curClasses.splice(pos,1);}else{curClasses.push(clazz);}}
finalValue=curClasses.join(" ");if(className!=finalValue){elem.className.baseVal=finalValue;}
return this;};elproto.clone=function(){var clone=wrap(this.node.cloneNode(true));if($(clone.node,"id")){$(clone.node,{id:clone.id});}
fixids(clone);clone.insertAfter(this);return clone;};elproto.toDefs=function(){var defs=getSomeDefs(this);defs.appendChild(this.node);return this;};elproto.pattern=elproto.toPattern=function(x,y,width,height){var p=make("pattern",getSomeDefs(this));if(x==null){x=this.getBBox();}
if(is(x,"object")&&"x"in x){y=x.y;width=x.width;height=x.height;x=x.x;}
$(p.node,{x:x,y:y,width:width,height:height,patternUnits:"userSpaceOnUse",id:p.id,viewBox:[x,y,width,height].join(" ")});p.node.appendChild(this.node);return p;};elproto.marker=function(x,y,width,height,refX,refY){var p=make("marker",getSomeDefs(this));if(x==null){x=this.getBBox();}
if(is(x,"object")&&"x"in x){y=x.y;width=x.width;height=x.height;refX=x.refX||x.cx;refY=x.refY||x.cy;x=x.x;}
$(p.node,{viewBox:[x,y,width,height].join(S),markerWidth:width,markerHeight:height,orient:"auto",refX:refX||0,refY:refY||0,id:p.id});p.node.appendChild(this.node);return p;};function slice(from,to,f){return function(arr){var res=arr.slice(from,to);if(res.length==1){res=res[0];}
return f?f(res):res;};}
var Animation=function(attr,ms,easing,callback){if(typeof easing=="function"&&!easing.length){callback=easing;easing=mina.linear;}
this.attr=attr;this.dur=ms;easing&&(this.easing=easing);callback&&(this.callback=callback);};Snap._.Animation=Animation;Snap.animation=function(attr,ms,easing,callback){return new Animation(attr,ms,easing,callback);};elproto.inAnim=function(){var el=this,res=[];for(var id in el.anims)if(el.anims[has](id)){(function(a){res.push({anim:new Animation(a._attrs,a.dur,a.easing,a._callback),mina:a,curStatus:a.status(),status:function(val){return a.status(val);},stop:function(){a.stop();}});}(el.anims[id]));}
return res;};Snap.animate=function(from,to,setter,ms,easing,callback){if(typeof easing=="function"&&!easing.length){callback=easing;easing=mina.linear;}
var now=mina.time(),anim=mina(from,to,now,now+ms,mina.time,setter,easing);callback&&eve.once("mina.finish."+anim.id,callback);return anim;};elproto.stop=function(){var anims=this.inAnim();for(var i=0,ii=anims.length;i<ii;i++){anims[i].stop();}
return this;};elproto.animate=function(attrs,ms,easing,callback){if(typeof easing=="function"&&!easing.length){callback=easing;easing=mina.linear;}
if(attrs instanceof Animation){callback=attrs.callback;easing=attrs.easing;ms=easing.dur;attrs=attrs.attr;}
var fkeys=[],tkeys=[],keys={},from,to,f,eq,el=this;for(var key in attrs)if(attrs[has](key)){if(el.equal){eq=el.equal(key,Str(attrs[key]));from=eq.from;to=eq.to;f=eq.f;}else{from=+el.attr(key);to=+attrs[key];}
var len=is(from,"array")?from.length:1;keys[key]=slice(fkeys.length,fkeys.length+len,f);fkeys=fkeys.concat(from);tkeys=tkeys.concat(to);}
var now=mina.time(),anim=mina(fkeys,tkeys,now,now+ms,mina.time,function(val){var attr={};for(var key in keys)if(keys[has](key)){attr[key]=keys[key](val);}
el.attr(attr);},easing);el.anims[anim.id]=anim;anim._attrs=attrs;anim._callback=callback;eve("snap.animcreated."+el.id,anim);eve.once("mina.finish."+anim.id,function(){delete el.anims[anim.id];callback&&callback.call(el);});eve.once("mina.stop."+anim.id,function(){delete el.anims[anim.id];});return el;};var eldata={};elproto.data=function(key,value){var data=eldata[this.id]=eldata[this.id]||{};if(arguments.length==0){eve("snap.data.get."+this.id,this,data,null);return data;}
if(arguments.length==1){if(Snap.is(key,"object")){for(var i in key)if(key[has](i)){this.data(i,key[i]);}
return this;}
eve("snap.data.get."+this.id,this,data[key],key);return data[key];}
data[key]=value;eve("snap.data.set."+this.id,this,value,key);return this;};elproto.removeData=function(key){if(key==null){eldata[this.id]={};}else{eldata[this.id]&&delete eldata[this.id][key];}
return this;};elproto.outerSVG=elproto.toString=toString(1);elproto.innerSVG=toString();function toString(type){return function(){var res=type?"<"+this.type:"",attr=this.node.attributes,chld=this.node.childNodes;if(type){for(var i=0,ii=attr.length;i<ii;i++){res+=" "+attr[i].name+'="'+
attr[i].value.replace(/"/g,'\\"')+'"';}}
if(chld.length){type&&(res+=">");for(i=0,ii=chld.length;i<ii;i++){if(chld[i].nodeType==3){res+=chld[i].nodeValue;}else if(chld[i].nodeType==1){res+=wrap(chld[i]).toString();}}
type&&(res+="</"+this.type+">");}else{type&&(res+="/>");}
return res;};}}(Element.prototype));Snap.parse=function(svg){var f=glob.doc.createDocumentFragment(),full=true,div=glob.doc.createElement("div");svg=Str(svg);if(!svg.match(/^\s*<\s*svg(?:\s|>)/)){svg="<svg>"+svg+"</svg>";full=false;}
div.innerHTML=svg;svg=div.getElementsByTagName("svg")[0];if(svg){if(full){f=svg;}else{while(svg.firstChild){f.appendChild(svg.firstChild);}}}
div.innerHTML=E;return new Fragment(f);};function Fragment(frag){this.node=frag;}
Fragment.prototype.select=Element.prototype.select;Fragment.prototype.selectAll=Element.prototype.selectAll;Snap.fragment=function(){var args=Array.prototype.slice.call(arguments,0),f=glob.doc.createDocumentFragment();for(var i=0,ii=args.length;i<ii;i++){var item=args[i];if(item.node&&item.node.nodeType){f.appendChild(item.node);}
if(item.nodeType){f.appendChild(item);}
if(typeof item=="string"){f.appendChild(Snap.parse(item).node);}}
return new Fragment(f);};function make(name,parent){var res=$(name);parent.appendChild(res);var el=wrap(res);return el;}
function Paper(w,h){var res,desc,defs,proto=Paper.prototype;if(w&&w.tagName=="svg"){if(w.snap in hub){return hub[w.snap];}
var doc=w.ownerDocument;res=new Element(w);desc=w.getElementsByTagName("desc")[0];defs=w.getElementsByTagName("defs")[0];if(!desc){desc=$("desc");desc.appendChild(doc.createTextNode("Created with Snap"));res.node.appendChild(desc);}
if(!defs){defs=$("defs");res.node.appendChild(defs);}
res.defs=defs;for(var key in proto)if(proto[has](key)){res[key]=proto[key];}
res.paper=res.root=res;}else{res=make("svg",glob.doc.body);$(res.node,{height:h,version:1.1,width:w,xmlns:xmlns});}
return res;}
function wrap(dom){if(!dom){return dom;}
if(dom instanceof Element||dom instanceof Fragment){return dom;}
if(dom.tagName&&dom.tagName.toLowerCase()=="svg"){return new Paper(dom);}
if(dom.tagName&&dom.tagName.toLowerCase()=="object"&&dom.type=="image/svg+xml"){return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);}
return new Element(dom);}
Snap._.make=make;Snap._.wrap=wrap;Paper.prototype.el=function(name,attr){var el=make(name,this.node);attr&&el.attr(attr);return el;};eve.on("snap.util.getattr",function(){var att=eve.nt();att=att.substring(att.lastIndexOf(".")+1);var css=att.replace(/[A-Z]/g,function(letter){return"-"+letter.toLowerCase();});if(cssAttr[has](css)){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,null).getPropertyValue(css);}else{return $(this.node,att);}});var cssAttr={"alignment-baseline":0,"baseline-shift":0,"clip":0,"clip-path":0,"clip-rule":0,"color":0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,"cursor":0,"direction":0,"display":0,"dominant-baseline":0,"enable-background":0,"fill":0,"fill-opacity":0,"fill-rule":0,"filter":0,"flood-color":0,"flood-opacity":0,"font":0,"font-family":0,"font-size":0,"font-size-adjust":0,"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,"kerning":0,"letter-spacing":0,"lighting-color":0,"marker":0,"marker-end":0,"marker-mid":0,"marker-start":0,"mask":0,"opacity":0,"overflow":0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,"stroke":0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,"visibility":0,"word-spacing":0,"writing-mode":0};eve.on("snap.util.attr",function(value){var att=eve.nt(),attr={};att=att.substring(att.lastIndexOf(".")+1);attr[att]=value;var style=att.replace(/-(\w)/gi,function(all,letter){return letter.toUpperCase();}),css=att.replace(/[A-Z]/g,function(letter){return"-"+letter.toLowerCase();});if(cssAttr[has](css)){this.node.style[style]=value==null?E:value;}else{$(this.node,attr);}});(function(proto){}(Paper.prototype));Snap.ajax=function(url,postData,callback,scope){var req=new XMLHttpRequest,id=ID();if(req){if(is(postData,"function")){scope=callback;callback=postData;postData=null;}else if(is(postData,"object")){var pd=[];for(var key in postData)if(postData.hasOwnProperty(key)){pd.push(encodeURIComponent(key)+"="+encodeURIComponent(postData[key]));}
postData=pd.join("&");}
req.open((postData?"POST":"GET"),url,true);if(postData){req.setRequestHeader("X-Requested-With","XMLHttpRequest");req.setRequestHeader("Content-type","application/x-www-form-urlencoded");}
if(callback){eve.once("snap.ajax."+id+".0",callback);eve.once("snap.ajax."+id+".200",callback);eve.once("snap.ajax."+id+".304",callback);}
req.onreadystatechange=function(){if(req.readyState!=4)return;eve("snap.ajax."+id+"."+req.status,scope,req);};if(req.readyState==4){return req;}
req.send(postData);return req;}};Snap.load=function(url,callback,scope){Snap.ajax(url,function(req){var f=Snap.parse(req.responseText);scope?callback.call(scope,f):callback(f);});};var getOffset=function(elem){var box=elem.getBoundingClientRect(),doc=elem.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(g.win.pageYOffset||docElem.scrollTop||body.scrollTop)-clientTop,left=box.left+(g.win.pageXOffset||docElem.scrollLeft||body.scrollLeft)-clientLeft;return{y:top,x:left};};Snap.getElementByPoint=function(x,y){var paper=this,svg=paper.canvas,target=glob.doc.elementFromPoint(x,y);if(glob.win.opera&&target.tagName=="svg"){var so=getOffset(target),sr=target.createSVGRect();sr.x=x-so.x;sr.y=y-so.y;sr.width=sr.height=1;var hits=target.getIntersectionList(sr,null);if(hits.length){target=hits[hits.length-1];}}
if(!target){return null;}
return wrap(target);};Snap.plugin=function(f){f(Snap,Element,Paper,glob,Fragment);};glob.win.Snap=Snap;return Snap;}());Snap.plugin(function(Snap,Element,Paper,glob,Fragment){var objectToString=Object.prototype.toString,Str=String,math=Math,E="";function Matrix(a,b,c,d,e,f){if(b==null&&objectToString.call(a)=="[object SVGMatrix]"){this.a=a.a;this.b=a.b;this.c=a.c;this.d=a.d;this.e=a.e;this.f=a.f;return;}
if(a!=null){this.a=+a;this.b=+b;this.c=+c;this.d=+d;this.e=+e;this.f=+f;}else{this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0;}}
(function(matrixproto){matrixproto.add=function(a,b,c,d,e,f){var out=[[],[],[]],m=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],matrix=[[a,c,e],[b,d,f],[0,0,1]],x,y,z,res;if(a&&a instanceof Matrix){matrix=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]];}
for(x=0;x<3;x++){for(y=0;y<3;y++){res=0;for(z=0;z<3;z++){res+=m[x][z]*matrix[z][y];}
out[x][y]=res;}}
this.a=out[0][0];this.b=out[1][0];this.c=out[0][1];this.d=out[1][1];this.e=out[0][2];this.f=out[1][2];return this;};matrixproto.invert=function(){var me=this,x=me.a*me.d-me.b*me.c;return new Matrix(me.d/x,-me.b/x,-me.c/x,me.a/x,(me.c*me.f-me.d*me.e)/x,(me.b*me.e-me.a*me.f)/x);};matrixproto.clone=function(){return new Matrix(this.a,this.b,this.c,this.d,this.e,this.f);};matrixproto.translate=function(x,y){return this.add(1,0,0,1,x,y);};matrixproto.scale=function(x,y,cx,cy){y==null&&(y=x);(cx||cy)&&this.add(1,0,0,1,cx,cy);this.add(x,0,0,y,0,0);(cx||cy)&&this.add(1,0,0,1,-cx,-cy);return this;};matrixproto.rotate=function(a,x,y){a=Snap.rad(a);x=x||0;y=y||0;var cos=+math.cos(a).toFixed(9),sin=+math.sin(a).toFixed(9);this.add(cos,sin,-sin,cos,x,y);return this.add(1,0,0,1,-x,-y);};matrixproto.x=function(x,y){return x*this.a+y*this.c+this.e;};matrixproto.y=function(x,y){return x*this.b+y*this.d+this.f;};matrixproto.get=function(i){return+this[Str.fromCharCode(97+i)].toFixed(4);};matrixproto.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")";};matrixproto.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)];};function norm(a){return a[0]*a[0]+a[1]*a[1];}
function normalize(a){var mag=math.sqrt(norm(a));a[0]&&(a[0]/=mag);a[1]&&(a[1]/=mag);}
matrixproto.determinant=function(){return this.a*this.d-this.b*this.c;};matrixproto.split=function(){var out={};out.dx=this.e;out.dy=this.f;var row=[[this.a,this.c],[this.b,this.d]];out.scalex=math.sqrt(norm(row[0]));normalize(row[0]);out.shear=row[0][0]*row[1][0]+row[0][1]*row[1][1];row[1]=[row[1][0]-row[0][0]*out.shear,row[1][1]-row[0][1]*out.shear];out.scaley=math.sqrt(norm(row[1]));normalize(row[1]);out.shear/=out.scaley;if(this.determinant()<0){out.scalex=-out.scalex;}
var sin=-row[0][1],cos=row[1][1];if(cos<0){out.rotate=Snap.deg(math.acos(cos));if(sin<0){out.rotate=360-out.rotate;}}else{out.rotate=Snap.deg(math.asin(sin));}
out.isSimple=!+out.shear.toFixed(9)&&(out.scalex.toFixed(9)==out.scaley.toFixed(9)||!out.rotate);out.isSuperSimple=!+out.shear.toFixed(9)&&out.scalex.toFixed(9)==out.scaley.toFixed(9)&&!out.rotate;out.noRotation=!+out.shear.toFixed(9)&&!out.rotate;return out;};matrixproto.toTransformString=function(shorter){var s=shorter||this.split();if(!+s.shear.toFixed(9)){s.scalex=+s.scalex.toFixed(4);s.scaley=+s.scaley.toFixed(4);s.rotate=+s.rotate.toFixed(4);return(s.dx||s.dy?"t"+[+s.dx.toFixed(4),+s.dy.toFixed(4)]:E)+
(s.scalex!=1||s.scaley!=1?"s"+[s.scalex,s.scaley,0,0]:E)+
(s.rotate?"r"+[+s.rotate.toFixed(4),0,0]:E);}else{return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)];}};})(Matrix.prototype);Snap.Matrix=Matrix;Snap.matrix=function(a,b,c,d,e,f){return new Matrix(a,b,c,d,e,f);};});Snap.plugin(function(Snap,Element,Paper,glob,Fragment){var has="hasOwnProperty",make=Snap._.make,wrap=Snap._.wrap,is=Snap.is,getSomeDefs=Snap._.getSomeDefs,reURLValue=/^url\(#?([^)]+)\)$/,$=Snap._.$,URL=Snap.url,Str=String,separator=Snap._.separator,E="";eve.on("snap.util.attr.mask",function(value){if(value instanceof Element||value instanceof Fragment){eve.stop();if(value instanceof Fragment&&value.node.childNodes.length==1){value=value.node.firstChild;getSomeDefs(this).appendChild(value);value=wrap(value);}
if(value.type=="mask"){var mask=value;}else{mask=make("mask",getSomeDefs(this));mask.node.appendChild(value.node);}
!mask.node.id&&$(mask.node,{id:mask.id});$(this.node,{mask:URL(mask.id)});}});(function(){}(function(value){if(value instanceof Element||value instanceof Fragment){eve.stop();if(value.type=="clipPath"){var clip=value;}else{clip=make("clipPath",getSomeDefs(this));clip.node.appendChild(value.node);!clip.node.id&&$(clip.node,{id:clip.id});}
$(this.node,{"clip-path":URL(clip.id)});}}));function fillStroke(name){return function(value){eve.stop();if(value instanceof Fragment&&value.node.childNodes.length==1&&(value.node.firstChild.tagName=="radialGradient"||value.node.firstChild.tagName=="linearGradient"||value.node.firstChild.tagName=="pattern")){value=value.node.firstChild;getSomeDefs(this).appendChild(value);value=wrap(value);}
if(value instanceof Element){if(value.type=="radialGradient"||value.type=="linearGradient"||value.type=="pattern"){if(!value.node.id){$(value.node,{id:value.id});}
var fill=URL(value.node.id);}else{fill=value.attr(name);}}else{fill=Snap.color(value);if(fill.error){var grad=Snap(getSomeDefs(this).ownerSVGElement).gradient(value);if(grad){if(!grad.node.id){$(grad.node,{id:grad.id});}
fill=URL(grad.node.id);}else{fill=value;}}else{fill=Str(fill);}}
var attrs={};attrs[name]=fill;$(this.node,attrs);this.node.style[name]=E;};}
eve.on("snap.util.attr.fill",fillStroke("fill"));eve.on("snap.util.attr.stroke",fillStroke("stroke"));var gradrg=/^([lr])(?:\(([^)]*)\))?(.*)$/i;eve.on("snap.util.grad.parse",function parseGrad(string){string=Str(string);var tokens=string.match(gradrg);if(!tokens){return null;}
var type=tokens[1],params=tokens[2],stops=tokens[3];params=params.split(/\s*,\s*/).map(function(el){return+el==el?+el:el;});if(params.length==1&&params[0]==0){params=[];}
stops=stops.split("-");stops=stops.map(function(el){el=el.split(":");var out={color:el[0]};if(el[1]){out.offset=parseFloat(el[1]);}
return out;});return{type:type,params:params,stops:stops};});eve.on("snap.util.attr.d",function(value){eve.stop();if(is(value,"array")&&is(value[0],"array")){value=Snap.path.toString.call(value);}
value=Str(value);if(value.match(/[ruo]/i)){value=Snap.path.toAbsolute(value);}
$(this.node,{d:value});})(-1);eve.on("snap.util.attr.#text",function(value){eve.stop();value=Str(value);var txt=glob.doc.createTextNode(value);while(this.node.firstChild){this.node.removeChild(this.node.firstChild);}
this.node.appendChild(txt);})(-1);eve.on("snap.util.attr.path",function(value){eve.stop();this.attr({d:value});})(-1);eve.on("snap.util.attr.class",function(value){eve.stop();this.node.className.baseVal=value;})(-1);eve.on("snap.util.attr.viewBox",function(value){var vb;if(is(value,"object")&&"x"in value){vb=[value.x,value.y,value.width,value.height].join(" ");}else if(is(value,"array")){vb=value.join(" ");}else{vb=value;}
$(this.node,{viewBox:vb});eve.stop();})(-1);eve.on("snap.util.attr.transform",function(value){this.transform(value);eve.stop();})(-1);eve.on("snap.util.attr.r",function(value){if(this.type=="rect"){eve.stop();$(this.node,{rx:value,ry:value});}})(-1);eve.on("snap.util.attr.textpath",function(value){eve.stop();if(this.type=="text"){var id,tp,node;if(!value&&this.textPath){tp=this.textPath;while(tp.node.firstChild){this.node.appendChild(tp.node.firstChild);}
tp.remove();delete this.textPath;return;}
if(is(value,"string")){var defs=getSomeDefs(this),path=wrap(defs.parentNode).path(value);defs.appendChild(path.node);id=path.id;path.attr({id:id});}else{value=wrap(value);if(value instanceof Element){id=value.attr("id");if(!id){id=value.id;value.attr({id:id});}}}
if(id){tp=this.textPath;node=this.node;if(tp){tp.attr({"xlink:href":"#"+id});}else{tp=$("textPath",{"xlink:href":"#"+id});while(node.firstChild){tp.appendChild(node.firstChild);}
node.appendChild(tp);this.textPath=wrap(tp);}}}})(-1);eve.on("snap.util.attr.text",function(value){if(this.type=="text"){var i=0,node=this.node,tuner=function(chunk){var out=$("tspan");if(is(chunk,"array")){for(var i=0;i<chunk.length;i++){out.appendChild(tuner(chunk[i]));}}else{out.appendChild(glob.doc.createTextNode(chunk));}
out.normalize&&out.normalize();return out;};while(node.firstChild){node.removeChild(node.firstChild);}
var tuned=tuner(value);while(tuned.firstChild){node.appendChild(tuned.firstChild);}}
eve.stop();})(-1);function setFontSize(value){eve.stop();if(value==+value){value+="px";}
this.node.style.fontSize=value;}
eve.on("snap.util.attr.fontSize",setFontSize)(-1);eve.on("snap.util.attr.font-size",setFontSize)(-1);eve.on("snap.util.getattr.transform",function(){eve.stop();return this.transform();})(-1);eve.on("snap.util.getattr.textpath",function(){eve.stop();return this.textPath;})(-1);(function(){function getter(end){return function(){eve.stop();var style=glob.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+end);if(style=="none"){return style;}else{return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));}};}
function setter(end){return function(value){eve.stop();var name="marker"+end.charAt(0).toUpperCase()+end.substring(1);if(value==""||!value){this.node.style[name]="none";return;}
if(value.type=="marker"){var id=value.node.id;if(!id){$(value.node,{id:value.id});}
this.node.style[name]=URL(id);return;}};}
eve.on("snap.util.getattr.marker-end",getter("end"))(-1);eve.on("snap.util.getattr.markerEnd",getter("end"))(-1);eve.on("snap.util.getattr.marker-start",getter("start"))(-1);eve.on("snap.util.getattr.markerStart",getter("start"))(-1);eve.on("snap.util.getattr.marker-mid",getter("mid"))(-1);eve.on("snap.util.getattr.markerMid",getter("mid"))(-1);eve.on("snap.util.attr.marker-end",setter("end"))(-1);eve.on("snap.util.attr.markerEnd",setter("end"))(-1);eve.on("snap.util.attr.marker-start",setter("start"))(-1);eve.on("snap.util.attr.markerStart",setter("start"))(-1);eve.on("snap.util.attr.marker-mid",setter("mid"))(-1);eve.on("snap.util.attr.markerMid",setter("mid"))(-1);}());eve.on("snap.util.getattr.r",function(){if(this.type=="rect"&&$(this.node,"rx")==$(this.node,"ry")){eve.stop();return $(this.node,"rx");}})(-1);function textExtract(node){var out=[];var children=node.childNodes;for(var i=0,ii=children.length;i<ii;i++){var chi=children[i];if(chi.nodeType==3){out.push(chi.nodeValue);}
if(chi.tagName=="tspan"){if(chi.childNodes.length==1&&chi.firstChild.nodeType==3){out.push(chi.firstChild.nodeValue);}else{out.push(textExtract(chi));}}}
return out;}
eve.on("snap.util.getattr.text",function(){if(this.type=="text"||this.type=="tspan"){eve.stop();var out=textExtract(this.node);return out.length==1?out[0]:out;}})(-1);eve.on("snap.util.getattr.#text",function(){return this.node.textContent;})(-1);eve.on("snap.util.getattr.viewBox",function(){eve.stop();var vb=$(this.node,"viewBox");if(vb){vb=vb.split(separator);return Snap._.box(+vb[0],+vb[1],+vb[2],+vb[3]);}else{return;}})(-1);eve.on("snap.util.getattr.points",function(){var p=$(this.node,"points");eve.stop();if(p){return p.split(separator);}else{return;}})(-1);eve.on("snap.util.getattr.path",function(){var p=$(this.node,"d");eve.stop();return p;})(-1);eve.on("snap.util.getattr.class",function(){return this.node.className.baseVal;})(-1);function getFontSize(){eve.stop();return this.node.style.fontSize;}
eve.on("snap.util.getattr.fontSize",getFontSize)(-1);eve.on("snap.util.getattr.font-size",getFontSize)(-1);});Snap.plugin(function(Snap,Element,Paper,glob,Fragment){var operators={"+":function(x,y){return x+y;},"-":function(x,y){return x-y;},"/":function(x,y){return x/y;},"*":function(x,y){return x*y;}},Str=String,reUnit=/[a-z]+$/i,reAddon=/^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;function getNumber(val){return val;}
function getUnit(unit){return function(val){return+val.toFixed(3)+unit;};}
eve.on("snap.util.attr",function(val){var plus=Str(val).match(reAddon);if(plus){var evnt=eve.nt(),name=evnt.substring(evnt.lastIndexOf(".")+1),a=this.attr(name),atr={};eve.stop();var unit=plus[3]||"",aUnit=a.match(reUnit),op=operators[plus[1]];if(aUnit&&aUnit==unit){val=op(parseFloat(a),+plus[2]);}else{a=this.asPX(name);val=op(this.asPX(name),this.asPX(name,plus[2]+unit));}
if(isNaN(a)||isNaN(val)){return;}
atr[name]=val;this.attr(atr);}})(-10);eve.on("snap.util.equal",function(name,b){var A,B,a=Str(this.attr(name)||""),el=this,bplus=Str(b).match(reAddon);if(bplus){eve.stop();var unit=bplus[3]||"",aUnit=a.match(reUnit),op=operators[bplus[1]];if(aUnit&&aUnit==unit){return{from:parseFloat(a),to:op(parseFloat(a),+bplus[2]),f:getUnit(aUnit)};}else{a=this.asPX(name);return{from:a,to:op(a,this.asPX(name,bplus[2]+unit)),f:getNumber};}}})(-10);});Snap.plugin(function(Snap,Element,Paper,glob,Fragment){var proto=Paper.prototype,is=Snap.is;proto.rect=function(x,y,w,h,rx,ry){var attr;if(ry==null){ry=rx;}
if(is(x,"object")&&x=="[object Object]"){attr=x;}else if(x!=null){attr={x:x,y:y,width:w,height:h};if(rx!=null){attr.rx=rx;attr.ry=ry;}}
return this.el("rect",attr);};proto.circle=function(cx,cy,r){var attr;if(is(cx,"object")&&cx=="[object Object]"){attr=cx;}else if(cx!=null){attr={cx:cx,cy:cy,r:r};}
return this.el("circle",attr);};var preload=(function(){function onerror(){this.parentNode.removeChild(this);}
return function(src,f){var img=glob.doc.createElement("img"),body=glob.doc.body;img.style.cssText="position:absolute;left:-9999em;top:-9999em";img.onload=function(){f.call(img);img.onload=img.onerror=null;body.removeChild(img);};img.onerror=onerror;body.appendChild(img);img.src=src;};}());proto.image=function(src,x,y,width,height){var el=this.el("image");if(is(src,"object")&&"src"in src){el.attr(src);}else if(src!=null){var set={"xlink:href":src,preserveAspectRatio:"none"};if(x!=null&&y!=null){set.x=x;set.y=y;}
if(width!=null&&height!=null){set.width=width;set.height=height;}else{preload(src,function(){Snap._.$(el.node,{width:this.offsetWidth,height:this.offsetHeight});});}
Snap._.$(el.node,set);}
return el;};proto.ellipse=function(cx,cy,rx,ry){var attr;if(is(cx,"object")&&cx=="[object Object]"){attr=cx;}else if(cx!=null){attr={cx:cx,cy:cy,rx:rx,ry:ry};}
return this.el("ellipse",attr);};proto.path=function(d){var attr;if(is(d,"object")&&!is(d,"array")){attr=d;}else if(d){attr={d:d};}
return this.el("path",attr);};proto.group=proto.g=function(first){var attr,el=this.el("g");if(arguments.length==1&&first&&!first.type){el.attr(first);}else if(arguments.length){el.add(Array.prototype.slice.call(arguments,0));}
return el;};proto.svg=function(x,y,width,height,vbx,vby,vbw,vbh){var attrs={};if(is(x,"object")&&y==null){attrs=x;}else{if(x!=null){attrs.x=x;}
if(y!=null){attrs.y=y;}
if(width!=null){attrs.width=width;}
if(height!=null){attrs.height=height;}
if(vbx!=null&&vby!=null&&vbw!=null&&vbh!=null){attrs.viewBox=[vbx,vby,vbw,vbh];}}
return this.el("svg",attrs);};proto.mask=function(first){var attr,el=this.el("mask");if(arguments.length==1&&first&&!first.type){el.attr(first);}else if(arguments.length){el.add(Array.prototype.slice.call(arguments,0));}
return el;};proto.ptrn=function(x,y,width,height,vx,vy,vw,vh){if(is(x,"object")){var attr=x;}else if(!arguments.length){attr={patternUnits:"userSpaceOnUse"};}else{attr={};if(x!=null){attr.x=x;}
if(y!=null){attr.y=y;}
if(width!=null){attr.width=width;}
if(height!=null){attr.height=height;}
if(vx!=null&&vy!=null&&vw!=null&&vh!=null){attr.viewBox=[vx,vy,vw,vh];}}
return this.el("pattern",attr);};proto.use=function(id){if(id!=null){var el=make("use",this.node);if(id instanceof Element){if(!id.attr("id")){id.attr({id:ID()});}
id=id.attr("id");}
return this.el("use",{"xlink:href":id});}else{return Element.prototype.use.call(this);}};proto.text=function(x,y,text){var attr={};if(is(x,"object")){attr=x;}else if(x!=null){attr={x:x,y:y,text:text||""};}
return this.el("text",attr);};proto.line=function(x1,y1,x2,y2){var attr={};if(is(x1,"object")){attr=x1;}else if(x1!=null){attr={x1:x1,x2:x2,y1:y1,y2:y2};}
return this.el("line",attr);};proto.polyline=function(points){if(arguments.length>1){points=Array.prototype.slice.call(arguments,0);}
var attr={};if(is(points,"object")&&!is(points,"array")){attr=points;}else if(points!=null){attr={points:points};}
return this.el("polyline",attr);};proto.polygon=function(points){if(arguments.length>1){points=Array.prototype.slice.call(arguments,0);}
var attr={};if(is(points,"object")&&!is(points,"array")){attr=points;}else if(points!=null){attr={points:points};}
return this.el("polygon",attr);};(function(){var $=Snap._.$;function Gstops(){return this.selectAll("stop");}
function GaddStop(color,offset){var stop=$("stop"),attr={offset:+offset+"%"};color=Snap.color(color);attr["stop-color"]=color.hex;if(color.opacity<1){attr["stop-opacity"]=color.opacity;}
$(stop,attr);this.node.appendChild(stop);return this;}
function GgetBBox(){if(this.type=="linearGradient"){var x1=$(this.node,"x1")||0,x2=$(this.node,"x2")||1,y1=$(this.node,"y1")||0,y2=$(this.node,"y2")||0;return Snap._.box(x1,y1,math.abs(x2-x1),math.abs(y2-y1));}else{var cx=this.node.cx||.5,cy=this.node.cy||.5,r=this.node.r||0;return Snap._.box(cx-r,cy-r,r*2,r*2);}}
function gradient(defs,str){var grad=eve("snap.util.grad.parse",null,str).firstDefined(),el;if(!grad){return null;}
grad.params.unshift(defs);if(grad.type.toLowerCase()=="l"){el=gradientLinear.apply(0,grad.params);}else{el=gradientRadial.apply(0,grad.params);}
if(grad.type!=grad.type.toLowerCase()){$(el.node,{gradientUnits:"userSpaceOnUse"});}
var stops=grad.stops,len=stops.length,start=0,j=0;function seed(i,end){var step=(end-start)/(i-j);for(var k=j;k<i;k++){stops[k].offset=+(+start+step*(k-j)).toFixed(2);}
j=i;start=end;}
len--;for(var i=0;i<len;i++)if("offset"in stops[i]){seed(i,stops[i].offset);}
stops[len].offset=stops[len].offset||100;seed(len,stops[len].offset);for(i=0;i<=len;i++){var stop=stops[i];el.addStop(stop.color,stop.offset);}
return el;}
function gradientLinear(defs,x1,y1,x2,y2){var el=Snap._.make("linearGradient",defs);el.stops=Gstops;el.addStop=GaddStop;el.getBBox=GgetBBox;if(x1!=null){$(el.node,{x1:x1,y1:y1,x2:x2,y2:y2});}
return el;}
function gradientRadial(defs,cx,cy,r,fx,fy){var el=Snap._.make("radialGradient",defs);el.stops=Gstops;el.addStop=GaddStop;el.getBBox=GgetBBox;if(cx!=null){$(el.node,{cx:cx,cy:cy,r:r});}
if(fx!=null&&fy!=null){$(el.node,{fx:fx,fy:fy});}
return el;}
proto.gradient=function(str){return gradient(this.defs,str);};proto.gradientLinear=function(x1,y1,x2,y2){return gradientLinear(this.defs,x1,y1,x2,y2);};proto.gradientRadial=function(cx,cy,r,fx,fy){return gradientRadial(this.defs,cx,cy,r,fx,fy);};proto.toString=function(){var doc=this.node.ownerDocument,f=doc.createDocumentFragment(),d=doc.createElement("div"),svg=this.node.cloneNode(true),res;f.appendChild(d);d.appendChild(svg);Snap._.$(svg,{xmlns:"http://www.w3.org/2000/svg"});res=d.innerHTML;f.removeChild(f.firstChild);return res;};proto.clear=function(){var node=this.node.firstChild,next;while(node){next=node.nextSibling;if(node.tagName!="defs"){node.parentNode.removeChild(node);}else{proto.clear.call({node:node});}
node=next;}};}());});Snap.plugin(function(Snap,Element,Paper,glob){var elproto=Element.prototype,is=Snap.is,clone=Snap._.clone,has="hasOwnProperty",p2s=/,?([a-z]),?/gi,toFloat=parseFloat,math=Math,PI=math.PI,mmin=math.min,mmax=math.max,pow=math.pow,abs=math.abs;function paths(ps){var p=paths.ps=paths.ps||{};if(p[ps]){p[ps].sleep=100;}else{p[ps]={sleep:100};}
setTimeout(function(){for(var key in p)if(p[has](key)&&key!=ps){p[key].sleep--;!p[key].sleep&&delete p[key];}});return p[ps];}
function box(x,y,width,height){if(x==null){x=y=width=height=0;}
if(y==null){y=x.y;width=x.width;height=x.height;x=x.x;}
return{x:x,y:y,width:width,w:width,height:height,h:height,x2:x+width,y2:y+height,cx:x+width/2,cy:y+height/2,r1:math.min(width,height)/2,r2:math.max(width,height)/2,r0:math.sqrt(width*width+height*height)/2,path:rectPath(x,y,width,height),vb:[x,y,width,height].join(" ")};}
function toString(){return this.join(",").replace(p2s,"$1");}
function pathClone(pathArray){var res=clone(pathArray);res.toString=toString;return res;}
function getPointAtSegmentLength(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,length){if(length==null){return bezlen(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y);}else{return findDotsAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,getTotLen(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,length));}}
function getLengthFactory(istotal,subpath){function O(val){return+(+val).toFixed(3);}
return Snap._.cacher(function(path,length,onlystart){if(path instanceof Element){path=path.attr("d");}
path=path2curve(path);var x,y,p,l,sp="",subpaths={},point,len=0;for(var i=0,ii=path.length;i<ii;i++){p=path[i];if(p[0]=="M"){x=+p[1];y=+p[2];}else{l=getPointAtSegmentLength(x,y,p[1],p[2],p[3],p[4],p[5],p[6]);if(len+l>length){if(subpath&&!subpaths.start){point=getPointAtSegmentLength(x,y,p[1],p[2],p[3],p[4],p[5],p[6],length-len);sp+=["C"+O(point.start.x),O(point.start.y),O(point.m.x),O(point.m.y),O(point.x),O(point.y)];if(onlystart){return sp;}
subpaths.start=sp;sp=["M"+O(point.x),O(point.y)+"C"+O(point.n.x),O(point.n.y),O(point.end.x),O(point.end.y),O(p[5]),O(p[6])].join();len+=l;x=+p[5];y=+p[6];continue;}
if(!istotal&&!subpath){point=getPointAtSegmentLength(x,y,p[1],p[2],p[3],p[4],p[5],p[6],length-len);return point;}}
len+=l;x=+p[5];y=+p[6];}
sp+=p.shift()+p;}
subpaths.end=sp;point=istotal?len:subpath?subpaths:findDotsAtSegment(x,y,p[0],p[1],p[2],p[3],p[4],p[5],1);return point;},null,Snap._.clone);}
var getTotalLength=getLengthFactory(1),getPointAtLength=getLengthFactory(),getSubpathsAtLength=getLengthFactory(0,1);function findDotsAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t){var t1=1-t,t13=pow(t1,3),t12=pow(t1,2),t2=t*t,t3=t2*t,x=t13*p1x+t12*3*t*c1x+t1*3*t*t*c2x+t3*p2x,y=t13*p1y+t12*3*t*c1y+t1*3*t*t*c2y+t3*p2y,mx=p1x+2*t*(c1x-p1x)+t2*(c2x-2*c1x+p1x),my=p1y+2*t*(c1y-p1y)+t2*(c2y-2*c1y+p1y),nx=c1x+2*t*(c2x-c1x)+t2*(p2x-2*c2x+c1x),ny=c1y+2*t*(c2y-c1y)+t2*(p2y-2*c2y+c1y),ax=t1*p1x+t*c1x,ay=t1*p1y+t*c1y,cx=t1*c2x+t*p2x,cy=t1*c2y+t*p2y,alpha=(90-math.atan2(mx-nx,my-ny)*180/PI);return{x:x,y:y,m:{x:mx,y:my},n:{x:nx,y:ny},start:{x:ax,y:ay},end:{x:cx,y:cy},alpha:alpha};}
function bezierBBox(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y){if(!Snap.is(p1x,"array")){p1x=[p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y];}
var bbox=curveDim.apply(null,p1x);return box(bbox.min.x,bbox.min.y,bbox.max.x-bbox.min.x,bbox.max.y-bbox.min.y);}
function isPointInsideBBox(bbox,x,y){return x>=bbox.x&&x<=bbox.x+bbox.width&&y>=bbox.y&&y<=bbox.y+bbox.height;}
function isBBoxIntersect(bbox1,bbox2){bbox1=box(bbox1);bbox2=box(bbox2);return isPointInsideBBox(bbox2,bbox1.x,bbox1.y)||isPointInsideBBox(bbox2,bbox1.x2,bbox1.y)||isPointInsideBBox(bbox2,bbox1.x,bbox1.y2)||isPointInsideBBox(bbox2,bbox1.x2,bbox1.y2)||isPointInsideBBox(bbox1,bbox2.x,bbox2.y)||isPointInsideBBox(bbox1,bbox2.x2,bbox2.y)||isPointInsideBBox(bbox1,bbox2.x,bbox2.y2)||isPointInsideBBox(bbox1,bbox2.x2,bbox2.y2)||(bbox1.x<bbox2.x2&&bbox1.x>bbox2.x||bbox2.x<bbox1.x2&&bbox2.x>bbox1.x)&&(bbox1.y<bbox2.y2&&bbox1.y>bbox2.y||bbox2.y<bbox1.y2&&bbox2.y>bbox1.y);}
function base3(t,p1,p2,p3,p4){var t1=-3*p1+9*p2-9*p3+3*p4,t2=t*t1+6*p1-12*p2+6*p3;return t*t2-3*p1+3*p2;}
function bezlen(x1,y1,x2,y2,x3,y3,x4,y4,z){if(z==null){z=1;}
z=z>1?1:z<0?0:z;var z2=z/2,n=12,Tvalues=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],Cvalues=[0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],sum=0;for(var i=0;i<n;i++){var ct=z2*Tvalues[i]+z2,xbase=base3(ct,x1,x2,x3,x4),ybase=base3(ct,y1,y2,y3,y4),comb=xbase*xbase+ybase*ybase;sum+=Cvalues[i]*math.sqrt(comb);}
return z2*sum;}
function getTotLen(x1,y1,x2,y2,x3,y3,x4,y4,ll){if(ll<0||bezlen(x1,y1,x2,y2,x3,y3,x4,y4)<ll){return;}
var t=1,step=t/2,t2=t-step,l,e=.01;l=bezlen(x1,y1,x2,y2,x3,y3,x4,y4,t2);while(abs(l-ll)>e){step/=2;t2+=(l<ll?1:-1)*step;l=bezlen(x1,y1,x2,y2,x3,y3,x4,y4,t2);}
return t2;}
function intersect(x1,y1,x2,y2,x3,y3,x4,y4){if(mmax(x1,x2)<mmin(x3,x4)||mmin(x1,x2)>mmax(x3,x4)||mmax(y1,y2)<mmin(y3,y4)||mmin(y1,y2)>mmax(y3,y4)){return;}
var nx=(x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4),ny=(x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4),denominator=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);if(!denominator){return;}
var px=nx/denominator,py=ny/denominator,px2=+px.toFixed(2),py2=+py.toFixed(2);if(px2<+mmin(x1,x2).toFixed(2)||px2>+mmax(x1,x2).toFixed(2)||px2<+mmin(x3,x4).toFixed(2)||px2>+mmax(x3,x4).toFixed(2)||py2<+mmin(y1,y2).toFixed(2)||py2>+mmax(y1,y2).toFixed(2)||py2<+mmin(y3,y4).toFixed(2)||py2>+mmax(y3,y4).toFixed(2)){return;}
return{x:px,y:py};}
function inter(bez1,bez2){return interHelper(bez1,bez2);}
function interCount(bez1,bez2){return interHelper(bez1,bez2,1);}
function interHelper(bez1,bez2,justCount){var bbox1=bezierBBox(bez1),bbox2=bezierBBox(bez2);if(!isBBoxIntersect(bbox1,bbox2)){return justCount?0:[];}
var l1=bezlen.apply(0,bez1),l2=bezlen.apply(0,bez2),n1=~~(l1/8),n2=~~(l2/8),dots1=[],dots2=[],xy={},res=justCount?0:[];for(var i=0;i<n1+1;i++){var p=findDotsAtSegment.apply(0,bez1.concat(i/n1));dots1.push({x:p.x,y:p.y,t:i/n1});}
for(i=0;i<n2+1;i++){p=findDotsAtSegment.apply(0,bez2.concat(i/n2));dots2.push({x:p.x,y:p.y,t:i/n2});}
for(i=0;i<n1;i++){for(var j=0;j<n2;j++){var di=dots1[i],di1=dots1[i+1],dj=dots2[j],dj1=dots2[j+1],ci=abs(di1.x-di.x)<.001?"y":"x",cj=abs(dj1.x-dj.x)<.001?"y":"x",is=intersect(di.x,di.y,di1.x,di1.y,dj.x,dj.y,dj1.x,dj1.y);if(is){if(xy[is.x.toFixed(4)]==is.y.toFixed(4)){continue;}
xy[is.x.toFixed(4)]=is.y.toFixed(4);var t1=di.t+abs((is[ci]-di[ci])/(di1[ci]-di[ci]))*(di1.t-di.t),t2=dj.t+abs((is[cj]-dj[cj])/(dj1[cj]-dj[cj]))*(dj1.t-dj.t);if(t1>=0&&t1<=1&&t2>=0&&t2<=1){if(justCount){res++;}else{res.push({x:is.x,y:is.y,t1:t1,t2:t2});}}}}}
return res;}
function pathIntersection(path1,path2){return interPathHelper(path1,path2);}
function pathIntersectionNumber(path1,path2){return interPathHelper(path1,path2,1);}
function interPathHelper(path1,path2,justCount){path1=path2curve(path1);path2=path2curve(path2);var x1,y1,x2,y2,x1m,y1m,x2m,y2m,bez1,bez2,res=justCount?0:[];for(var i=0,ii=path1.length;i<ii;i++){var pi=path1[i];if(pi[0]=="M"){x1=x1m=pi[1];y1=y1m=pi[2];}else{if(pi[0]=="C"){bez1=[x1,y1].concat(pi.slice(1));x1=bez1[6];y1=bez1[7];}else{bez1=[x1,y1,x1,y1,x1m,y1m,x1m,y1m];x1=x1m;y1=y1m;}
for(var j=0,jj=path2.length;j<jj;j++){var pj=path2[j];if(pj[0]=="M"){x2=x2m=pj[1];y2=y2m=pj[2];}else{if(pj[0]=="C"){bez2=[x2,y2].concat(pj.slice(1));x2=bez2[6];y2=bez2[7];}else{bez2=[x2,y2,x2,y2,x2m,y2m,x2m,y2m];x2=x2m;y2=y2m;}
var intr=interHelper(bez1,bez2,justCount);if(justCount){res+=intr;}else{for(var k=0,kk=intr.length;k<kk;k++){intr[k].segment1=i;intr[k].segment2=j;intr[k].bez1=bez1;intr[k].bez2=bez2;}
res=res.concat(intr);}}}}}
return res;}
function isPointInsidePath(path,x,y){var bbox=pathBBox(path);return isPointInsideBBox(bbox,x,y)&&interPathHelper(path,[["M",x,y],["H",bbox.x2+10]],1)%2==1;}
function pathBBox(path){var pth=paths(path);if(pth.bbox){return clone(pth.bbox);}
if(!path){return box();}
path=path2curve(path);var x=0,y=0,X=[],Y=[],p;for(var i=0,ii=path.length;i<ii;i++){p=path[i];if(p[0]=="M"){x=p[1];y=p[2];X.push(x);Y.push(y);}else{var dim=curveDim(x,y,p[1],p[2],p[3],p[4],p[5],p[6]);X=X.concat(dim.min.x,dim.max.x);Y=Y.concat(dim.min.y,dim.max.y);x=p[5];y=p[6];}}
var xmin=mmin.apply(0,X),ymin=mmin.apply(0,Y),xmax=mmax.apply(0,X),ymax=mmax.apply(0,Y),bb=box(xmin,ymin,xmax-xmin,ymax-ymin);pth.bbox=clone(bb);return bb;}
function rectPath(x,y,w,h,r){if(r){return[["M",+x+(+r),y],["l",w-r*2,0],["a",r,r,0,0,1,r,r],["l",0,h-r*2],["a",r,r,0,0,1,-r,r],["l",r*2-w,0],["a",r,r,0,0,1,-r,-r],["l",0,r*2-h],["a",r,r,0,0,1,r,-r],["z"]];}
var res=[["M",x,y],["l",w,0],["l",0,h],["l",-w,0],["z"]];res.toString=toString;return res;}
function ellipsePath(x,y,rx,ry,a){if(a==null&&ry==null){ry=rx;}
x=+x;y=+y;rx=+rx;ry=+ry;if(a!=null){var rad=Math.PI/180,x1=x+rx*Math.cos(-ry*rad),x2=x+rx*Math.cos(-a*rad),y1=y+rx*Math.sin(-ry*rad),y2=y+rx*Math.sin(-a*rad),res=[["M",x1,y1],["A",rx,rx,0,+(a-ry>180),0,x2,y2]];}else{res=[["M",x,y],["m",0,-ry],["a",rx,ry,0,1,1,0,2*ry],["a",rx,ry,0,1,1,0,-2*ry],["z"]];}
res.toString=toString;return res;}
var unit2px=Snap._unit2px,getPath={path:function(el){return el.attr("path");},circle:function(el){var attr=unit2px(el);return ellipsePath(attr.cx,attr.cy,attr.r);},ellipse:function(el){var attr=unit2px(el);return ellipsePath(attr.cx||0,attr.cy||0,attr.rx,attr.ry);},rect:function(el){var attr=unit2px(el);return rectPath(attr.x||0,attr.y||0,attr.width,attr.height,attr.rx,attr.ry);},image:function(el){var attr=unit2px(el);return rectPath(attr.x||0,attr.y||0,attr.width,attr.height);},line:function(el){return"M"+[el.attr("x1")||0,el.attr("y1")||0,el.attr("x2"),el.attr("y2")];},polyline:function(el){return"M"+el.attr("points");},polygon:function(el){return"M"+el.attr("points")+"z";},deflt:function(el){var bbox=el.node.getBBox();return rectPath(bbox.x,bbox.y,bbox.width,bbox.height);}};function pathToRelative(pathArray){var pth=paths(pathArray),lowerCase=String.prototype.toLowerCase;if(pth.rel){return pathClone(pth.rel);}
if(!Snap.is(pathArray,"array")||!Snap.is(pathArray&&pathArray[0],"array")){pathArray=Snap.parsePathString(pathArray);}
var res=[],x=0,y=0,mx=0,my=0,start=0;if(pathArray[0][0]=="M"){x=pathArray[0][1];y=pathArray[0][2];mx=x;my=y;start++;res.push(["M",x,y]);}
for(var i=start,ii=pathArray.length;i<ii;i++){var r=res[i]=[],pa=pathArray[i];if(pa[0]!=lowerCase.call(pa[0])){r[0]=lowerCase.call(pa[0]);switch(r[0]){case"a":r[1]=pa[1];r[2]=pa[2];r[3]=pa[3];r[4]=pa[4];r[5]=pa[5];r[6]=+(pa[6]-x).toFixed(3);r[7]=+(pa[7]-y).toFixed(3);break;case"v":r[1]=+(pa[1]-y).toFixed(3);break;case"m":mx=pa[1];my=pa[2];default:for(var j=1,jj=pa.length;j<jj;j++){r[j]=+(pa[j]-((j%2)?x:y)).toFixed(3);}}}else{r=res[i]=[];if(pa[0]=="m"){mx=pa[1]+x;my=pa[2]+y;}
for(var k=0,kk=pa.length;k<kk;k++){res[i][k]=pa[k];}}
var len=res[i].length;switch(res[i][0]){case"z":x=mx;y=my;break;case"h":x+=+res[i][len-1];break;case"v":y+=+res[i][len-1];break;default:x+=+res[i][len-2];y+=+res[i][len-1];}}
res.toString=toString;pth.rel=pathClone(res);return res;}
function pathToAbsolute(pathArray){var pth=paths(pathArray);if(pth.abs){return pathClone(pth.abs);}
if(!is(pathArray,"array")||!is(pathArray&&pathArray[0],"array")){pathArray=Snap.parsePathString(pathArray);}
if(!pathArray||!pathArray.length){return[["M",0,0]];}
var res=[],x=0,y=0,mx=0,my=0,start=0,pa0;if(pathArray[0][0]=="M"){x=+pathArray[0][1];y=+pathArray[0][2];mx=x;my=y;start++;res[0]=["M",x,y];}
var crz=pathArray.length==3&&pathArray[0][0]=="M"&&pathArray[1][0].toUpperCase()=="R"&&pathArray[2][0].toUpperCase()=="Z";for(var r,pa,i=start,ii=pathArray.length;i<ii;i++){res.push(r=[]);pa=pathArray[i];pa0=pa[0];if(pa0!=pa0.toUpperCase()){r[0]=pa0.toUpperCase();switch(r[0]){case"A":r[1]=pa[1];r[2]=pa[2];r[3]=pa[3];r[4]=pa[4];r[5]=pa[5];r[6]=+pa[6]+x;r[7]=+pa[7]+y;break;case"V":r[1]=+pa[1]+y;break;case"H":r[1]=+pa[1]+x;break;case"R":var dots=[x,y].concat(pa.slice(1));for(var j=2,jj=dots.length;j<jj;j++){dots[j]=+dots[j]+x;dots[++j]=+dots[j]+y;}
res.pop();res=res.concat(catmullRom2bezier(dots,crz));break;case"O":res.pop();dots=ellipsePath(x,y,pa[1],pa[2]);dots.push(dots[0]);res=res.concat(dots);break;case"U":res.pop();res=res.concat(ellipsePath(x,y,pa[1],pa[2],pa[3]));r=["U"].concat(res[res.length-1].slice(-2));break;case"M":mx=+pa[1]+x;my=+pa[2]+y;default:for(j=1,jj=pa.length;j<jj;j++){r[j]=+pa[j]+((j%2)?x:y);}}}else if(pa0=="R"){dots=[x,y].concat(pa.slice(1));res.pop();res=res.concat(catmullRom2bezier(dots,crz));r=["R"].concat(pa.slice(-2));}else if(pa0=="O"){res.pop();dots=ellipsePath(x,y,pa[1],pa[2]);dots.push(dots[0]);res=res.concat(dots);}else if(pa0=="U"){res.pop();res=res.concat(ellipsePath(x,y,pa[1],pa[2],pa[3]));r=["U"].concat(res[res.length-1].slice(-2));}else{for(var k=0,kk=pa.length;k<kk;k++){r[k]=pa[k];}}
pa0=pa0.toUpperCase();if(pa0!="O"){switch(r[0]){case"Z":x=+mx;y=+my;break;case"H":x=r[1];break;case"V":y=r[1];break;case"M":mx=r[r.length-2];my=r[r.length-1];default:x=r[r.length-2];y=r[r.length-1];}}}
res.toString=toString;pth.abs=pathClone(res);return res;}
function l2c(x1,y1,x2,y2){return[x1,y1,x2,y2,x2,y2];}
function q2c(x1,y1,ax,ay,x2,y2){var _13=1/3,_23=2/3;return[_13*x1+_23*ax,_13*y1+_23*ay,_13*x2+_23*ax,_13*y2+_23*ay,x2,y2];}
function a2c(x1,y1,rx,ry,angle,large_arc_flag,sweep_flag,x2,y2,recursive){var _120=PI*120/180,rad=PI/180*(+angle||0),res=[],xy,rotate=Snap._.cacher(function(x,y,rad){var X=x*math.cos(rad)-y*math.sin(rad),Y=x*math.sin(rad)+y*math.cos(rad);return{x:X,y:Y};});if(!recursive){xy=rotate(x1,y1,-rad);x1=xy.x;y1=xy.y;xy=rotate(x2,y2,-rad);x2=xy.x;y2=xy.y;var cos=math.cos(PI/180*angle),sin=math.sin(PI/180*angle),x=(x1-x2)/2,y=(y1-y2)/2;var h=(x*x)/(rx*rx)+(y*y)/(ry*ry);if(h>1){h=math.sqrt(h);rx=h*rx;ry=h*ry;}
var rx2=rx*rx,ry2=ry*ry,k=(large_arc_flag==sweep_flag?-1:1)*math.sqrt(abs((rx2*ry2-rx2*y*y-ry2*x*x)/(rx2*y*y+ry2*x*x))),cx=k*rx*y/ry+(x1+x2)/2,cy=k*-ry*x/rx+(y1+y2)/2,f1=math.asin(((y1-cy)/ry).toFixed(9)),f2=math.asin(((y2-cy)/ry).toFixed(9));f1=x1<cx?PI-f1:f1;f2=x2<cx?PI-f2:f2;f1<0&&(f1=PI*2+f1);f2<0&&(f2=PI*2+f2);if(sweep_flag&&f1>f2){f1=f1-PI*2;}
if(!sweep_flag&&f2>f1){f2=f2-PI*2;}}else{f1=recursive[0];f2=recursive[1];cx=recursive[2];cy=recursive[3];}
var df=f2-f1;if(abs(df)>_120){var f2old=f2,x2old=x2,y2old=y2;f2=f1+_120*(sweep_flag&&f2>f1?1:-1);x2=cx+rx*math.cos(f2);y2=cy+ry*math.sin(f2);res=a2c(x2,y2,rx,ry,angle,0,sweep_flag,x2old,y2old,[f2,f2old,cx,cy]);}
df=f2-f1;var c1=math.cos(f1),s1=math.sin(f1),c2=math.cos(f2),s2=math.sin(f2),t=math.tan(df/4),hx=4/3*rx*t,hy=4/3*ry*t,m1=[x1,y1],m2=[x1+hx*s1,y1-hy*c1],m3=[x2+hx*s2,y2-hy*c2],m4=[x2,y2];m2[0]=2*m1[0]-m2[0];m2[1]=2*m1[1]-m2[1];if(recursive){return[m2,m3,m4].concat(res);}else{res=[m2,m3,m4].concat(res).join().split(",");var newres=[];for(var i=0,ii=res.length;i<ii;i++){newres[i]=i%2?rotate(res[i-1],res[i],rad).y:rotate(res[i],res[i+1],rad).x;}
return newres;}}
function findDotAtSegment(p1x,p1y,c1x,c1y,c2x,c2y,p2x,p2y,t){var t1=1-t;return{x:pow(t1,3)*p1x+pow(t1,2)*3*t*c1x+t1*3*t*t*c2x+pow(t,3)*p2x,y:pow(t1,3)*p1y+pow(t1,2)*3*t*c1y+t1*3*t*t*c2y+pow(t,3)*p2y};}
function curveDim(x0,y0,x1,y1,x2,y2,x3,y3){var tvalues=[],bounds=[[],[]],a,b,c,t,t1,t2,b2ac,sqrtb2ac;for(var i=0;i<2;++i){if(i==0){b=6*x0-12*x1+6*x2;a=-3*x0+9*x1-9*x2+3*x3;c=3*x1-3*x0;}else{b=6*y0-12*y1+6*y2;a=-3*y0+9*y1-9*y2+3*y3;c=3*y1-3*y0;}
if(abs(a)<1e-12){if(abs(b)<1e-12){continue;}
t=-c/b;if(0<t&&t<1){tvalues.push(t);}
continue;}
b2ac=b*b-4*c*a;sqrtb2ac=math.sqrt(b2ac);if(b2ac<0){continue;}
t1=(-b+sqrtb2ac)/(2*a);if(0<t1&&t1<1){tvalues.push(t1);}
t2=(-b-sqrtb2ac)/(2*a);if(0<t2&&t2<1){tvalues.push(t2);}}
var x,y,j=tvalues.length,jlen=j,mt;while(j--){t=tvalues[j];mt=1-t;bounds[0][j]=(mt*mt*mt*x0)+(3*mt*mt*t*x1)+(3*mt*t*t*x2)+(t*t*t*x3);bounds[1][j]=(mt*mt*mt*y0)+(3*mt*mt*t*y1)+(3*mt*t*t*y2)+(t*t*t*y3);}
bounds[0][jlen]=x0;bounds[1][jlen]=y0;bounds[0][jlen+1]=x3;bounds[1][jlen+1]=y3;bounds[0].length=bounds[1].length=jlen+2;return{min:{x:mmin.apply(0,bounds[0]),y:mmin.apply(0,bounds[1])},max:{x:mmax.apply(0,bounds[0]),y:mmax.apply(0,bounds[1])}};}
function path2curve(path,path2){var pth=!path2&&paths(path);if(!path2&&pth.curve){return pathClone(pth.curve);}
var p=pathToAbsolute(path),p2=path2&&pathToAbsolute(path2),attrs={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},attrs2={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},processPath=function(path,d,pcom){var nx,ny;if(!path){return["C",d.x,d.y,d.x,d.y,d.x,d.y];}
!(path[0]in{T:1,Q:1})&&(d.qx=d.qy=null);switch(path[0]){case"M":d.X=path[1];d.Y=path[2];break;case"A":path=["C"].concat(a2c.apply(0,[d.x,d.y].concat(path.slice(1))));break;case"S":if(pcom=="C"||pcom=="S"){nx=d.x*2-d.bx;ny=d.y*2-d.by;}
else{nx=d.x;ny=d.y;}
path=["C",nx,ny].concat(path.slice(1));break;case"T":if(pcom=="Q"||pcom=="T"){d.qx=d.x*2-d.qx;d.qy=d.y*2-d.qy;}
else{d.qx=d.x;d.qy=d.y;}
path=["C"].concat(q2c(d.x,d.y,d.qx,d.qy,path[1],path[2]));break;case"Q":d.qx=path[1];d.qy=path[2];path=["C"].concat(q2c(d.x,d.y,path[1],path[2],path[3],path[4]));break;case"L":path=["C"].concat(l2c(d.x,d.y,path[1],path[2]));break;case"H":path=["C"].concat(l2c(d.x,d.y,path[1],d.y));break;case"V":path=["C"].concat(l2c(d.x,d.y,d.x,path[1]));break;case"Z":path=["C"].concat(l2c(d.x,d.y,d.X,d.Y));break;}
return path;},fixArc=function(pp,i){if(pp[i].length>7){pp[i].shift();var pi=pp[i];while(pi.length){pcoms1[i]="A";p2&&(pcoms2[i]="A");pp.splice(i++,0,["C"].concat(pi.splice(0,6)));}
pp.splice(i,1);ii=mmax(p.length,p2&&p2.length||0);}},fixM=function(path1,path2,a1,a2,i){if(path1&&path2&&path1[i][0]=="M"&&path2[i][0]!="M"){path2.splice(i,0,["M",a2.x,a2.y]);a1.bx=0;a1.by=0;a1.x=path1[i][1];a1.y=path1[i][2];ii=mmax(p.length,p2&&p2.length||0);}},pcoms1=[],pcoms2=[],pfirst="",pcom="";for(var i=0,ii=mmax(p.length,p2&&p2.length||0);i<ii;i++){p[i]&&(pfirst=p[i][0]);if(pfirst!="C")
{pcoms1[i]=pfirst;i&&(pcom=pcoms1[i-1]);}
p[i]=processPath(p[i],attrs,pcom);if(pcoms1[i]!="A"&&pfirst=="C")pcoms1[i]="C";fixArc(p,i);if(p2){p2[i]&&(pfirst=p2[i][0]);if(pfirst!="C"){pcoms2[i]=pfirst;i&&(pcom=pcoms2[i-1]);}
p2[i]=processPath(p2[i],attrs2,pcom);if(pcoms2[i]!="A"&&pfirst=="C"){pcoms2[i]="C";}
fixArc(p2,i);}
fixM(p,p2,attrs,attrs2,i);fixM(p2,p,attrs2,attrs,i);var seg=p[i],seg2=p2&&p2[i],seglen=seg.length,seg2len=p2&&seg2.length;attrs.x=seg[seglen-2];attrs.y=seg[seglen-1];attrs.bx=toFloat(seg[seglen-4])||attrs.x;attrs.by=toFloat(seg[seglen-3])||attrs.y;attrs2.bx=p2&&(toFloat(seg2[seg2len-4])||attrs2.x);attrs2.by=p2&&(toFloat(seg2[seg2len-3])||attrs2.y);attrs2.x=p2&&seg2[seg2len-2];attrs2.y=p2&&seg2[seg2len-1];}
if(!p2){pth.curve=pathClone(p);}
return p2?[p,p2]:p;}
function mapPath(path,matrix){if(!matrix){return path;}
var x,y,i,j,ii,jj,pathi;path=path2curve(path);for(i=0,ii=path.length;i<ii;i++){pathi=path[i];for(j=1,jj=pathi.length;j<jj;j+=2){x=matrix.x(pathi[j],pathi[j+1]);y=matrix.y(pathi[j],pathi[j+1]);pathi[j]=x;pathi[j+1]=y;}}
return path;}
function catmullRom2bezier(crp,z){var d=[];for(var i=0,iLen=crp.length;iLen-2*!z>i;i+=2){var p=[{x:+crp[i-2],y:+crp[i-1]},{x:+crp[i],y:+crp[i+1]},{x:+crp[i+2],y:+crp[i+3]},{x:+crp[i+4],y:+crp[i+5]}];if(z){if(!i){p[0]={x:+crp[iLen-2],y:+crp[iLen-1]};}else if(iLen-4==i){p[3]={x:+crp[0],y:+crp[1]};}else if(iLen-2==i){p[2]={x:+crp[0],y:+crp[1]};p[3]={x:+crp[2],y:+crp[3]};}}else{if(iLen-4==i){p[3]=p[2];}else if(!i){p[0]={x:+crp[i],y:+crp[i+1]};}}
d.push(["C",(-p[0].x+6*p[1].x+p[2].x)/6,(-p[0].y+6*p[1].y+p[2].y)/6,(p[1].x+6*p[2].x-p[3].x)/6,(p[1].y+6*p[2].y-p[3].y)/6,p[2].x,p[2].y]);}
return d;}
Snap.path=paths;Snap.path.getTotalLength=getTotalLength;Snap.path.getPointAtLength=getPointAtLength;Snap.path.getSubpath=function(path,from,to){if(this.getTotalLength(path)-to<1e-6){return getSubpathsAtLength(path,from).end;}
var a=getSubpathsAtLength(path,to,1);return from?getSubpathsAtLength(a,from).end:a;};elproto.getTotalLength=function(){if(this.node.getTotalLength){return this.node.getTotalLength();}};elproto.getPointAtLength=function(length){return getPointAtLength(this.attr("d"),length);};elproto.getSubpath=function(from,to){return Snap.path.getSubpath(this.attr("d"),from,to);};Snap._.box=box;Snap.path.findDotsAtSegment=findDotsAtSegment;Snap.path.bezierBBox=bezierBBox;Snap.path.isPointInsideBBox=isPointInsideBBox;Snap.path.isBBoxIntersect=isBBoxIntersect;Snap.path.intersection=pathIntersection;Snap.path.intersectionNumber=pathIntersectionNumber;Snap.path.isPointInside=isPointInsidePath;Snap.path.getBBox=pathBBox;Snap.path.get=getPath;Snap.path.toRelative=pathToRelative;Snap.path.toAbsolute=pathToAbsolute;Snap.path.toCubic=path2curve;Snap.path.map=mapPath;Snap.path.toString=toString;Snap.path.clone=pathClone;});Snap.plugin(function(Snap,Element,Paper,glob){var mmax=Math.max,mmin=Math.min;var Set=function(items){this.items=[];this.bindings={};this.length=0;this.type="set";if(items){for(var i=0,ii=items.length;i<ii;i++){if(items[i]){this[this.items.length]=this.items[this.items.length]=items[i];this.length++;}}}},setproto=Set.prototype;setproto.push=function(){var item,len;for(var i=0,ii=arguments.length;i<ii;i++){item=arguments[i];if(item){len=this.items.length;this[len]=this.items[len]=item;this.length++;}}
return this;};setproto.pop=function(){this.length&&delete this[this.length--];return this.items.pop();};setproto.forEach=function(callback,thisArg){for(var i=0,ii=this.items.length;i<ii;i++){if(callback.call(thisArg,this.items[i],i)===false){return this;}}
return this;};setproto.animate=function(attrs,ms,easing,callback){if(typeof easing=="function"&&!easing.length){callback=easing;easing=mina.linear;}
if(attrs instanceof Snap._.Animation){callback=attrs.callback;easing=attrs.easing;ms=easing.dur;attrs=attrs.attr;}
var args=arguments;if(Snap.is(attrs,"array")&&Snap.is(args[args.length-1],"array")){var each=true;}
var begin,handler=function(){if(begin){this.b=begin;}else{begin=this.b;}},cb=0,callbacker=callback&&function(){if(cb++==this.length){callback.call(this);}};return this.forEach(function(el,i){eve.once("snap.animcreated."+el.id,handler);if(each){args[i]&&el.animate.apply(el,args[i]);}else{el.animate(attrs,ms,easing,callbacker);}});};setproto.remove=function(){while(this.length){this.pop().remove();}
return this;};setproto.bind=function(attr,a,b){var data={};if(typeof a=="function"){this.bindings[attr]=a;}else{var aname=b||attr;this.bindings[attr]=function(v){data[aname]=v;a.attr(data);};}
return this;};setproto.attr=function(value){var unbound={};for(var k in value){if(this.bindings[k]){this.bindings[k](value[k]);}else{unbound[k]=value[k];}}
for(var i=0,ii=this.items.length;i<ii;i++){this.items[i].attr(unbound);}
return this;};setproto.clear=function(){while(this.length){this.pop();}};setproto.splice=function(index,count,insertion){index=index<0?mmax(this.length+index,0):index;count=mmax(0,mmin(this.length-index,count));var tail=[],todel=[],args=[],i;for(i=2;i<arguments.length;i++){args.push(arguments[i]);}
for(i=0;i<count;i++){todel.push(this[index+i]);}
for(;i<this.length-index;i++){tail.push(this[index+i]);}
var arglen=args.length;for(i=0;i<arglen+tail.length;i++){this.items[index+i]=this[index+i]=i<arglen?args[i]:tail[i-arglen];}
i=this.items.length=this.length-=count-arglen;while(this[i]){delete this[i++];}
return new Set(todel);};setproto.exclude=function(el){for(var i=0,ii=this.length;i<ii;i++)if(this[i]==el){this.splice(i,1);return true;}
return false;};setproto.insertAfter=function(el){var i=this.items.length;while(i--){this.items[i].insertAfter(el);}
return this;};setproto.getBBox=function(){var x=[],y=[],x2=[],y2=[];for(var i=this.items.length;i--;)if(!this.items[i].removed){var box=this.items[i].getBBox();x.push(box.x);y.push(box.y);x2.push(box.x+box.width);y2.push(box.y+box.height);}
x=mmin.apply(0,x);y=mmin.apply(0,y);x2=mmax.apply(0,x2);y2=mmax.apply(0,y2);return{x:x,y:y,x2:x2,y2:y2,width:x2-x,height:y2-y,cx:x+(x2-x)/2,cy:y+(y2-y)/2};};setproto.clone=function(s){s=new Set;for(var i=0,ii=this.items.length;i<ii;i++){s.push(this.items[i].clone());}
return s;};setproto.toString=function(){return"Snap\u2018s set";};setproto.type="set";Snap.set=function(){var set=new Set;if(arguments.length){set.push.apply(set,Array.prototype.slice.call(arguments,0));}
return set;};});Snap.plugin(function(Snap,Element,Paper,glob){var names={},reUnit=/[a-z]+$/i,Str=String;names.stroke=names.fill="colour";function getEmpty(item){var l=item[0];switch(l.toLowerCase()){case"t":return[l,0,0];case"m":return[l,1,0,0,1,0,0];case"r":if(item.length==4){return[l,0,item[2],item[3]];}else{return[l,0];}
case"s":if(item.length==5){return[l,1,1,item[3],item[4]];}else if(item.length==3){return[l,1,1];}else{return[l,1];}}}
function equaliseTransform(t1,t2,getBBox){t2=Str(t2).replace(/\.{3}|\u2026/g,t1);t1=Snap.parseTransformString(t1)||[];t2=Snap.parseTransformString(t2)||[];var maxlength=Math.max(t1.length,t2.length),from=[],to=[],i=0,j,jj,tt1,tt2;for(;i<maxlength;i++){tt1=t1[i]||getEmpty(t2[i]);tt2=t2[i]||getEmpty(tt1);if((tt1[0]!=tt2[0])||(tt1[0].toLowerCase()=="r"&&(tt1[2]!=tt2[2]||tt1[3]!=tt2[3]))||(tt1[0].toLowerCase()=="s"&&(tt1[3]!=tt2[3]||tt1[4]!=tt2[4]))){t1=Snap._.transform2matrix(t1,getBBox());t2=Snap._.transform2matrix(t2,getBBox());from=[["m",t1.a,t1.b,t1.c,t1.d,t1.e,t1.f]];to=[["m",t2.a,t2.b,t2.c,t2.d,t2.e,t2.f]];break;}
from[i]=[];to[i]=[];for(j=0,jj=Math.max(tt1.length,tt2.length);j<jj;j++){j in tt1&&(from[i][j]=tt1[j]);j in tt2&&(to[i][j]=tt2[j]);}}
return{from:path2array(from),to:path2array(to),f:getPath(from)};}
function getNumber(val){return val;}
function getUnit(unit){return function(val){return+val.toFixed(3)+unit;};}
function getColour(clr){return Snap.rgb(clr[0],clr[1],clr[2]);}
function getPath(path){var k=0,i,ii,j,jj,out,a,b=[];for(i=0,ii=path.length;i<ii;i++){out="[";a=['"'+path[i][0]+'"'];for(j=1,jj=path[i].length;j<jj;j++){a[j]="val["+(k++)+"]";}
out+=a+"]";b[i]=out;}
return Function("val","return Snap.path.toString.call(["+b+"])");}
function path2array(path){var out=[];for(var i=0,ii=path.length;i<ii;i++){for(var j=1,jj=path[i].length;j<jj;j++){out.push(path[i][j]);}}
return out;}
Element.prototype.equal=function(name,b){return eve("snap.util.equal",this,name,b).firstDefined();};eve.on("snap.util.equal",function(name,b){var A,B,a=Str(this.attr(name)||""),el=this;if(a==+a&&b==+b){return{from:+a,to:+b,f:getNumber};}
if(names[name]=="colour"){A=Snap.color(a);B=Snap.color(b);return{from:[A.r,A.g,A.b,A.opacity],to:[B.r,B.g,B.b,B.opacity],f:getColour};}
if(name=="transform"||name=="gradientTransform"||name=="patternTransform"){if(b instanceof Snap.Matrix){b=b.toTransformString();}
if(!Snap._.rgTransform.test(b)){b=Snap._.svgTransform2string(b);}
return equaliseTransform(a,b,function(){return el.getBBox(1);});}
if(name=="d"||name=="path"){A=Snap.path.toCubic(a,b);return{from:path2array(A[0]),to:path2array(A[1]),f:getPath(A[0])};}
if(name=="points"){A=Str(a).split(Snap._.separator);B=Str(b).split(Snap._.separator);return{from:A,to:B,f:function(val){return val;}};}
aUnit=a.match(reUnit);var bUnit=Str(b).match(reUnit);if(aUnit&&aUnit==bUnit){return{from:parseFloat(a),to:parseFloat(b),f:getUnit(aUnit)};}else{return{from:this.asPX(name),to:this.asPX(name,b),f:getNumber};}});});Snap.plugin(function(Snap,Element,Paper,glob){var elproto=Element.prototype,has="hasOwnProperty",supportsTouch="createTouch"in glob.doc,events=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],touchMap={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},getScroll=function(xy,el){var name=xy=="y"?"scrollTop":"scrollLeft",doc=el&&el.node?el.node.ownerDocument:glob.doc;return doc[name in doc.documentElement?"documentElement":"body"][name];},preventDefault=function(){this.returnValue=false;},preventTouch=function(){return this.originalEvent.preventDefault();},stopPropagation=function(){this.cancelBubble=true;},stopTouch=function(){return this.originalEvent.stopPropagation();},addEvent=(function(){if(glob.doc.addEventListener){return function(obj,type,fn,element){var realName=supportsTouch&&touchMap[type]?touchMap[type]:type,f=function(e){var scrollY=getScroll("y",element),scrollX=getScroll("x",element);if(supportsTouch&&touchMap[has](type)){for(var i=0,ii=e.targetTouches&&e.targetTouches.length;i<ii;i++){if(e.targetTouches[i].target==obj||obj.contains(e.targetTouches[i].target)){var olde=e;e=e.targetTouches[i];e.originalEvent=olde;e.preventDefault=preventTouch;e.stopPropagation=stopTouch;break;}}}
var x=e.clientX+scrollX,y=e.clientY+scrollY;return fn.call(element,e,x,y);};if(type!==realName){obj.addEventListener(type,f,false);}
obj.addEventListener(realName,f,false);return function(){if(type!==realName){obj.removeEventListener(type,f,false);}
obj.removeEventListener(realName,f,false);return true;};};}else if(glob.doc.attachEvent){return function(obj,type,fn,element){var f=function(e){e=e||element.node.ownerDocument.window.event;var scrollY=getScroll("y",element),scrollX=getScroll("x",element),x=e.clientX+scrollX,y=e.clientY+scrollY;e.preventDefault=e.preventDefault||preventDefault;e.stopPropagation=e.stopPropagation||stopPropagation;return fn.call(element,e,x,y);};obj.attachEvent("on"+type,f);var detacher=function(){obj.detachEvent("on"+type,f);return true;};return detacher;};}})(),drag=[],dragMove=function(e){var x=e.clientX,y=e.clientY,scrollY=getScroll("y"),scrollX=getScroll("x"),dragi,j=drag.length;while(j--){dragi=drag[j];if(supportsTouch){var i=e.touches&&e.touches.length,touch;while(i--){touch=e.touches[i];if(touch.identifier==dragi.el._drag.id||dragi.el.node.contains(touch.target)){x=touch.clientX;y=touch.clientY;(e.originalEvent?e.originalEvent:e).preventDefault();break;}}}else{e.preventDefault();}
var node=dragi.el.node,o,next=node.nextSibling,parent=node.parentNode,display=node.style.display;x+=scrollX;y+=scrollY;eve("snap.drag.move."+dragi.el.id,dragi.move_scope||dragi.el,x-dragi.el._drag.x,y-dragi.el._drag.y,x,y,e);}},dragUp=function(e){Snap.unmousemove(dragMove).unmouseup(dragUp);var i=drag.length,dragi;while(i--){dragi=drag[i];dragi.el._drag={};eve("snap.drag.end."+dragi.el.id,dragi.end_scope||dragi.start_scope||dragi.move_scope||dragi.el,e);}
drag=[];};for(var i=events.length;i--;){(function(eventName){Snap[eventName]=elproto[eventName]=function(fn,scope){if(Snap.is(fn,"function")){this.events=this.events||[];this.events.push({name:eventName,f:fn,unbind:addEvent(this.node||document,eventName,fn,scope||this)});}
return this;};Snap["un"+eventName]=elproto["un"+eventName]=function(fn){var events=this.events||[],l=events.length;while(l--)if(events[l].name==eventName&&(events[l].f==fn||!fn)){events[l].unbind();events.splice(l,1);!events.length&&delete this.events;return this;}
return this;};})(events[i]);}
elproto.hover=function(f_in,f_out,scope_in,scope_out){return this.mouseover(f_in,scope_in).mouseout(f_out,scope_out||scope_in);};elproto.unhover=function(f_in,f_out){return this.unmouseover(f_in).unmouseout(f_out);};var draggable=[];elproto.drag=function(onmove,onstart,onend,move_scope,start_scope,end_scope){if(!arguments.length){var origTransform;return this.drag(function(dx,dy){this.attr({transform:origTransform+(origTransform?"T":"t")+[dx,dy]});},function(){origTransform=this.transform().local;});}
function start(e,x,y){(e.originalEvent||e).preventDefault();this._drag.x=x;this._drag.y=y;this._drag.id=e.identifier;!drag.length&&Snap.mousemove(dragMove).mouseup(dragUp);drag.push({el:this,move_scope:move_scope,start_scope:start_scope,end_scope:end_scope});onstart&&eve.on("snap.drag.start."+this.id,onstart);onmove&&eve.on("snap.drag.move."+this.id,onmove);onend&&eve.on("snap.drag.end."+this.id,onend);eve("snap.drag.start."+this.id,start_scope||move_scope||this,x,y,e);}
this._drag={};draggable.push({el:this,start:start});this.mousedown(start);return this;};elproto.undrag=function(){var i=draggable.length;while(i--)if(draggable[i].el==this){this.unmousedown(draggable[i].start);draggable.splice(i,1);eve.unbind("snap.drag.*."+this.id);}
!draggable.length&&Snap.unmousemove(dragMove).unmouseup(dragUp);return this;};});Snap.plugin(function(Snap,Element,Paper,glob){var elproto=Element.prototype,pproto=Paper.prototype,rgurl=/^\s*url\((.+)\)/,Str=String,$=Snap._.$;Snap.filter={};pproto.filter=function(filstr){var paper=this;if(paper.type!="svg"){paper=paper.paper;}
var f=Snap.parse(Str(filstr)),id=Snap._.id(),width=paper.node.offsetWidth,height=paper.node.offsetHeight,filter=$("filter");$(filter,{id:id,filterUnits:"userSpaceOnUse"});filter.appendChild(f.node);paper.defs.appendChild(filter);return new Element(filter);};eve.on("snap.util.getattr.filter",function(){eve.stop();var p=$(this.node,"filter");if(p){var match=Str(p).match(rgurl);return match&&Snap.select(match[1]);}});eve.on("snap.util.attr.filter",function(value){if(value instanceof Element&&value.type=="filter"){eve.stop();var id=value.node.id;if(!id){$(value.node,{id:value.id});id=value.id;}
$(this.node,{filter:Snap.url(id)});}
if(!value||value=="none"){eve.stop();this.node.removeAttribute("filter");}});Snap.filter.blur=function(x,y){if(x==null){x=2;}
var def=y==null?x:[x,y];return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>',{def:def});};Snap.filter.blur.toString=function(){return this();};Snap.filter.shadow=function(dx,dy,blur,color,opacity){if(typeof blur=="string"){color=blur;opacity=color;blur=4;}
if(typeof color!="string"){opacity=color;color="#000";}
color=color||"#000";if(blur==null){blur=4;}
if(opacity==null){opacity=1;}
if(dx==null){dx=0;dy=2;}
if(dy==null){dy=dx;}
color=Snap.color(color);return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:color,dx:dx,dy:dy,blur:blur,opacity:opacity});};Snap.filter.shadow.toString=function(){return this();};Snap.filter.grayscale=function(amount){if(amount==null){amount=1;}
return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:0.2126+0.7874*(1-amount),b:0.7152-0.7152*(1-amount),c:0.0722-0.0722*(1-amount),d:0.2126-0.2126*(1-amount),e:0.7152+0.2848*(1-amount),f:0.0722-0.0722*(1-amount),g:0.2126-0.2126*(1-amount),h:0.0722+0.9278*(1-amount)});};Snap.filter.grayscale.toString=function(){return this();};Snap.filter.sepia=function(amount){if(amount==null){amount=1;}
return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:0.393+0.607*(1-amount),b:0.769-0.769*(1-amount),c:0.189-0.189*(1-amount),d:0.349-0.349*(1-amount),e:0.686+0.314*(1-amount),f:0.168-0.168*(1-amount),g:0.272-0.272*(1-amount),h:0.534-0.534*(1-amount),i:0.131+0.869*(1-amount)});};Snap.filter.sepia.toString=function(){return this();};Snap.filter.saturate=function(amount){if(amount==null){amount=1;}
return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-amount});};Snap.filter.saturate.toString=function(){return this();};Snap.filter.hueRotate=function(angle){angle=angle||0;return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:angle});};Snap.filter.hueRotate.toString=function(){return this();};Snap.filter.invert=function(amount){if(amount==null){amount=1;}
return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:amount,amount2:1-amount});};Snap.filter.invert.toString=function(){return this();};Snap.filter.brightness=function(amount){if(amount==null){amount=1;}
return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:amount});};Snap.filter.brightness.toString=function(){return this();};Snap.filter.contrast=function(amount){if(amount==null){amount=1;}
return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:amount,amount2:.5-amount/2});};Snap.filter.contrast.toString=function(){return this();};});return Snap;}));(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)");}
var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c);};addClass=function(elem,c){elem.classList.add(c);};removeClass=function(elem,c){elem.classList.remove(c);};}
else{hasClass=function(elem,c){return classReg(c).test(elem.className);};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c;}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ');};}
function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c);}
var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie);}else{window.classie=classie;}})(window);(function($)
{if($(window).width()>=1044)
{$.fn.stickyMenu=function(opts)
{opts=$.extend({},$.fn.stickyMenu.defaultOptions,opts);return $(this).each(function(){var $menu=$(this),menuBCRect=$menu[0].getBoundingClientRect(),menuTop=menuBCRect.top+window.scrollY-opts.offset,$placeholderMenu=$('<div>'),isStick=false,resizeTimeout=0,update=function(){var scrollTop=$(this).scrollTop();if(!isStick&&scrollTop>=menuTop)
{isStick=true;$placeholderMenu.height(menuBCRect.height);$menu.before($placeholderMenu).addClass(opts.class);}
else if(isStick&&scrollTop<menuTop)
{isStick=false;$placeholderMenu.remove();$menu.removeClass(opts.class);}};$(window).on('scroll touchmove ready',update).on('resize',function(){clearTimeout(resizeTimeout);resizeTimeout=setTimeout(update,opts.resizeTimeout);});});};var isViadeo=($data.app_name=='viadeo');$.fn.stickyMenu.defaultOptions={offset:0,class:'',resizeTimeout:500};if(!isViadeo){var $headerMenu=$('.header_menu').stickyMenu({class:'header_menu--fixed'});$('.jTabDeconnected').stickyMenu({offset:$headerMenu.height(),class:'app_nav_tab--fixed'});}}
$('.jSearchResp').on('click',function()
{$('.ccmcss_rwd_search').toggle().find('input').focus();});})(jQuery);(function(){var bodyEl=document.body,content=document.querySelector('body'),openbtnBurger=document.getElementById('jOpenAppBurger'),isOpen=false,isOpenBurger=false,menuBurger=document.getElementById('jOpenAppBurger');if(openbtnBurger===null){return;}
function init(){initEvents();}
function initEvents(){if(openbtnBurger){openbtnBurger.addEventListener('click',toggleMenuBurger);}
content.addEventListener('click',function(ev){var target=ev.target;if(isOpenBurger&&target!==openbtnBurger){toggleMenuBurger();}});}
function toggleMenu(){if(isOpen){classie.remove(bodyEl,'jShowAppUserBox');}
else{classie.add(bodyEl,'jShowAppUserBox');}
isOpen=!isOpen;}
function toggleMenuBurger(){if(isOpenBurger){classie.remove(bodyEl,'jShowMenuResp');classie.remove(menuBurger,'opened');}
else{classie.add(bodyEl,'jShowMenuResp');classie.add(menuBurger,'opened');}
isOpenBurger=!isOpenBurger;}
init();})();(function($){var templateDialog='<div id="jSubscribeNl" class="copains_popup--nls_subscribe" style="max-height: 550px;text-align: center;">'
+'<h2>${titleDialog}</h2>'
+'<div class="ccmcss_form form_whatsup form formError">'
+'<form>'
+'<fieldset class="jMainForm">'
+'${dataDialog}'
+'</fieldset>'
+'<footer class="jValidationBtn">'
+'<a class="linter_btn_2 btnSubmit" href="javascript:void(0);">${validateDialog}</a>'
+'<br /><a class="jCloseDialog" href="javascript:void(0);">${cancelDialog}</a>'
+'</footer>'
+'</form>'
+'</div>'
+'</div>',initDone=false;$.subscribeNl={init:function(){if(initDone===false)
{$(document).on('SubscribeNlModale',$.subscribeNl.subscribeNl);initDone=true;}},subscribeNl:function(options){options=options||{};var data={};var isViadeo=($data.app_name==='viadeo');if(_$('$data.copains.modale.subscribeNl')._.allow){data.title='<b>'+$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_PASSION_TITLE+'</b>';data.html=$($.copains.core.getTemplate(templateDialog,$.extend({},{dataDialog:$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_PASSION_TXT+$data.copains.modale.subscribeNl.title,titleDialog:$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_PASSION_TITLE,validateDialog:$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_PASSION_BUTTON,cancelDialog:$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_NO})));}else{var title=$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_TITLE;var dialog=$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_TXT;if(isViadeo){title=$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_TITLE_VIADEO;dialog=$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_TXT_VIADEO;}
data.title='<b>'+title+'</b>';data.html=$($.copains.core.getTemplate(templateDialog,$.extend({},{dataDialog:dialog,titleDialog:title,validateDialog:$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_BUTTON,cancelDialog:$.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_NO})));}
data.html.find('form').submit(function(){return false;});if(typeof options.onClose==='function'){data.close=options.onClose;}
$.copains.core.showInDialogBox(data);$.subscribeNl.delegateDialog();},delegateDialog:function()
{$('div#jSubscribeNl').on('click','a.btnSubmit',$.subscribeNl.sendForm);},sendForm:function(e)
{$.ajax({type:'POST',url:'/mail/_xhr_subscribe_nl/',dataType:'json',data:{listName:$data.copains.modale.subscribeNl.mailingConf,xhr:'xhr'},success:function(response)
{$.note.info($.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_OK);$.googleEvents.send('copainsdavant','organization','subscribe_nl_general');},error:function(error)
{$.note.error($.copains.core.langs[$.copains.core.lang].SUBSCRIBE_NL_NOK);}});$.copains.core.closeDialog();}};if(_$('$data.copains.services')._.subscribeNl)
{$(document).start($.subscribeNl.init);}})(jQuery);(function($)
{'use strict';var collapseLink='<a href="#" class="jMailboxCollapseToggle">Voir les messages précédents</a>';$.mailboxCollapse={init:function()
{var $collapsedEls=$('div.jMailboxCollapse');$collapsedEls.each(function(){var $el=$(this);var $toggleLink=$(collapseLink);$toggleLink.on('click',function(e){e.preventDefault();$el.toggleClass('open');if($el.hasClass('open')){console.log($(this));$(this).text('Cacher les messages précédents');}else{$(this).text('Voir les messages précédents');}});$toggleLink.insertBefore($el);});}};$(document).start($.mailboxCollapse.init);})(jQuery);
(function($)
{'use strict';$.CommonModale={checkOpenDirectModale:function()
{var modaleValue=$.getParamFromUrl('modale');if(typeof modaleValue==='undefined'){if(_$('$data.copains.modale')._.modaleOutsideUrl){modaleValue=$data.copains.modale.modaleOutsideUrl;}}
if(typeof modaleValue!='undefined')
{if(_$('$data.copains.modale')._[modaleValue])
{var _modalData=$data.copains.modale[modaleValue];if(typeof _modalData['trigger']!='undefined')
{$(document).trigger(_modalData['trigger'],(typeof _modalData['datas']!='undefined')?_modalData['datas']:null);}}}},closeModale:function()
{$('.jModalDialog').dialog('destroy').remove();},initDatePicker:function()
{$('.jDatePicker').datepicker({changeMonth:true,changeYear:true,dateFormat:'dd-mm-yy',yearRange:'1900:2100',monthNames:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Ao&ucric;t','Septembre','Octobre','Novembre','Decembre'],monthNamesShort:['Jan','Fev','Mar','Avr','Mai','Jun','Jul','Aou','Sep','Oct','Nov','Dec'],dayNames:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],dayNamesMin:['Di','Lu','Ma','Me','Je','Ve','Sa']});},initPlusBtn:function()
{$(document).on('click','.copains_form_more__btn',function()
{$(".copains_form_more").show();});}};$(document).ready(function()
{if($.jet.started==true)
{$.CommonModale.checkOpenDirectModale();}
else{$(document).bind('startEnd',$.CommonModale.checkOpenDirectModale);}});})(jQuery);(function($)
{'use strict';$.WhatSUpModale={modaleOpened:false,modaleSubmit:false,init:function()
{$(document).on('click','.jWhatSUpModale',$.WhatSUpModale.displayModaleFromIcone).on('submit','.jWhatSUpContainer form',$.WhatSUpModale.submit).on('OpenDirectWhatSUpModale',function(e,datas){$.WhatSUpModale.displayModale(datas['type'],datas['hometype']);});if($('.jSettingsContainer .jWhatSUpGeoloc').length>0){$.ModaleGeoloc.init.call(this,$data.copains.services.geolocation.options);}},displayModaleFromIcone:function()
{var $this=$(this);if($this.attr('href')!==undefined&&$this.attr('href').substr(0,'/authentication/validate'.length)==='/authentication/validate'){window.location=$this.attr('href');return;}
$.WhatSUpModale.displayModale($this.attr('data-qdntype'),$this.attr('data-hometype'),$this.attr('data-id'),$this.attr('id'),$this.attr('data-title'));},displayModale:function(type,home,id,qdnname,title)
{if($.WhatSUpModale.modaleOpened==true)
{return;}
$.WhatSUpModale.modaleOpened=true;($('.jModalDialog').length>0)&&$.CommonModale.closeModale();$.ajax({type:'POST',url:'/whatsup/_xhr_getModal/',dataType:'json',data:{type:type,home:home,id:id,title:title,xhr:'xhr'},success:function(response)
{var dialog=$('<div>').addClass('jCcmTabsModal').html(response.html).dialog({minWidth:700,minHeight:(home==='group')?300:450,height:'auto',dialogClass:'jModalDialog',position:['center','center'],modal:true}).ccmUITabs({load:function(event,ui)
{$.WhatSUpModale.functionElementDefault();$.WhatSUpModale.emulateClick(event,ui);},tabHandlers:{load:{'contenulibrePicture':function()
{$.ModaleUpload.init.call(this);$.CommonModale.initDatePicker();},'prederMood':function()
{var $this=$(this);$this.on('click','#manualmood',function()
{$this.find('#autre').prop('checked',true);});},'prederMovie':function()
{$.ModaleAutocomplete.init.call(this,'autocompleteMovie');},'prederTv':function()
{$.ModaleAutocomplete.init.call(this,'autocompleteTv');},'prederWeekend':function()
{$.ModaleAutocomplete.init.call(this,'autocompleteWeekend');},'eventWedding':function()
{$.WhatSUpModale.functionElementEventDefault.call(this);$.ModaleAutocompleteUsers.init.call(this,'autocompleteMasterOfCeremony');$.ModaleAutocompleteUsers.init.call(this,'autocompleteMayor');$.ModaleAutocompleteUsers.init.call(this,'autocompleteBestmans');$.ModaleAutocompleteUsers.init.call(this,'autocompleteCouple');},'eventBorn':function()
{$.WhatSUpModale.functionElementEventDefault.call(this);$.ModaleAutocompleteUsers.init.call(this,'autocompleteNewBorns');},'eventReligion':function()
{$.WhatSUpModale.functionElementEventDefault.call(this);$.ModaleAutocompleteUsers.init.call(this,'autocompleteParents');},'eventBirthday':function()
{$.WhatSUpModale.functionElementEventDefault.call(this);$.ModaleAutocompleteUsers.init.call(this,'autocompleteName');},'eventFamily':function()
{$.WhatSUpModale.functionElementEventDefault.call(this);},'eventFree':function()
{$.WhatSUpModale.functionElementEventDefault.call(this);}}}});if(response.loadUpload==true){$.ModaleUpload.init.call(dialog);}
if(typeof id!='undefined')
{var list=[],i=0,size=$('.jCcmTabsModal ul:first li').size();for(;i<=size;i++)
{list.push(i);}
dialog.ccmUITabs({disabled:list});}
var $button=$('#'+qdnname);if($button.length>0)
{$button.effect("transfer",{to:dialog.dialog('widget'),className:"ui-effects-transfer"},500,function()
{$('.jModalDialog').css('opacity',1);$.WhatSUpModale.modaleOpened=false;});}
else{$.WhatSUpModale.modaleOpened=false;}
$.WhatSUpModale.functionElementDefault();}});},functionElementDefault:function()
{$.dropDownActions.initMultiPrivacy();var $tipsy=$($.jet.services.tipsy.options.selector).not($.jet.services.tipsy.options.exceptionSelector).tipsy($.jet.services.tipsy.options.options);$tipsy.on('tipsyEnter',function(e,tipsy){tipsy.$tip.css('zIndex',$('.jModalDialog').css('zIndex')+1);});},emulateClick:function(e,ui)
{$(ui.tab).trigger('emulatedClick');},functionElementEventDefault:function()
{$.ModaleAutocompleteUsers.init.call(this,'autocompleteParticipant');$.ModaleAutocompleteUsers.init.call(this,'autocompleteOrganizer');$.ModaleUpload.init.call(this);$.albumPhoto.init.call(this);$.ModaleGeoloc.init.call(this);$.CommonModale.initDatePicker();$.CommonModale.initPlusBtn();},submit:function(event)
{event.preventDefault();if($.WhatSUpModale.modaleSubmit==true)
{return;}
$.WhatSUpModale.modaleSubmit=true;var $form=$(this).closest('.jWhatSUpContainer').find('form'),onError=false;$form.hideFormError();$form.find('.jAutocompleteUsers').each(function(){$.ModaleAutocompleteUsers.preValidationTraitments.call(this,$form);});$form.find('.jWhatSUpGeoloc').each(function(){$.ModaleGeoloc.preValidationTraitments.call(this,$form);});var $jWhatSUpUrlPictureField=$form.find('#jWhatSUpUrlPictureField'),$jFileUploadContainer=$form.find('.jFileUploadContainer');if($jWhatSUpUrlPictureField.length>0)
{if($form.find('.jImported').length==0&&($jFileUploadContainer.length==0||$jFileUploadContainer.find('.jRemoveImg').length==0))
{$form.find('[name=\'upload\']').showInputError('il faut au moins uploader une photo');onError=true;}}
if(onError==false)
{$form.ajaxSubmit({type:'POST',url:$form.attr('action'),dataType:'json',data:{xhr:1},success:function(json)
{if(json.success==true)
{if(typeof json.reload!='undefined')
{if(typeof json.reloadUrl=='undefined'){window.location.reload();}else{window.location=json.reloadUrl;}}
else
{$(document).trigger('wallRefreshing',{filter:json.filter});typeof json.note!='undefined'&&json.note!=''&&$.note.info(json.note);$.WhatSUpModale.modaleSubmit=false;$.CommonModale.closeModale();$(document).bind('wallRefreshed',function()
{var $jCommentsList=$('.jCommentsList');$('body').scrollTo($jCommentsList,0,{axis:'y',offset:-50});var $firstLine=$jCommentsList.find('li:first');if(parseInt($firstLine.attr('data-userid'),10)==$data.copains.user.uid)
{$firstLine.effect('pulsate',{time:3});}});}}
else{$('body').scrollTo($('.jCcmTabsModal'),0,{axis:'y'});$.each(json.error,function(p,vp)
{$form.find('[name=\''+p+'\']').showInputError(vp);});$.WhatSUpModale.modaleSubmit=false;}}});}
else{$.WhatSUpModale.modaleSubmit=false;}}};$(document).start($.WhatSUpModale.init);})(jQuery);(function($)
{'use strict';$.ModaleUpload={uploadedPictures:0,$uploadField:undefined,$importUrlField:undefined,$albumNameField:undefined,init:function()
{var $self=$(this),$formUpload=$self.find('.jUploadSystem');$.ModaleUpload.uploadedPictures=0;if($formUpload.length>0)
{if(typeof $.fn.fileupload=='function'){$.ModaleUpload.initFileUpload($self,$formUpload);}
else{$(document).bind('fileUploadLoaded',function(){$.ModaleUpload.initFileUpload($self,$formUpload);}).trigger('refresh',[{services:{fileUpload:{start:true}}}]);}}},initFileUpload:function($self,$formUpload)
{$.ModaleUpload.$uploadField=$self.find('#jWhatSUpUploadField');$.ModaleUpload.$importUrlField=$self.find('#jWhatSUpUrlPictureField');$.ModaleUpload.$albumNameField=$self.find('.jWhatSUpAlbumField');$self.on('click','.jWhatSUpUrlPicture',$.ModaleUpload.initImportUrl).on('click','.jWhatSUpUploadPicture',$.ModaleUpload.initUploadPicture).on('click','.jWhatSUpUrlPictureSubmit',$.ModaleUpload.importUrlSubmit);$.ModaleUpload.uploadPicture($formUpload);},uploadPicture:function($formUpload)
{$formUpload.fileupload({autoUpload:true,url:'/media/_xhr_upload_image_album?xhr=plaintext',acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,previewMaxWidth:60,previewMaxHeight:60,maxFileSize:20000000}).bind('fileuploadprogress',function(e,data)
{data.context.find('.inProgBar .dwnldProgress').attr('style','width:'+parseInt(data.loaded/data.total*100,10)+'px');}).bind('fileuploaddone',function(e,data)
{$.ModaleUpload.uploadedPictures+=1;if($.ModaleUpload.uploadedPictures>1)
{$.ModaleUpload.$albumNameField.show();}}).on('click','a.jRemoveImg',function(e)
{var $this=$(this),nbImg;nbImg=$this.closest('.jFileUploadContainer').find('.template-download').size();$(this).closest('.template-download').remove();$.ModaleUpload.uploadedPictures-=1;if(nbImg<3)
{$.ModaleUpload.$albumNameField.hide();$.ModaleUpload.$albumNameField.find('input[type="text"]').val('');}});},initImportUrl:function()
{$.ModaleUpload.$uploadField.hide();$.ModaleUpload.$uploadField.find('.template-download').remove();$.ModaleUpload.$albumNameField.hide();$.ModaleUpload.$albumNameField.find('input[type="text"]').val('');$.ModaleUpload.$importUrlField.show();},initUploadPicture:function()
{$.ModaleUpload.$importUrlField.hide();$.ModaleUpload.$importUrlField.find('input[type="text"]').val('');$.ModaleUpload.$importUrlField.find('.jImported').remove();$.ModaleUpload.$uploadField.show();},importUrlSubmit:function()
{var $container=$(this).closest('.jWhatSUpContainer'),$inputUrl=$.ModaleUpload.$importUrlField.find('input[type="text"]');$container.on('click','a.jRemoveImg',function(e){$(this).closest('.jImported').remove();});if($inputUrl.val().length==0)
{$inputUrl.showInputError('Le champs est vide');}else{$.ajax({type:'GET',url:'/media/_xhr_download_image/',dataType:'json',data:{downloadImage:$inputUrl.val(),xhr:'xhr'},success:function(response)
{if(response[0].code!=1){$inputUrl.showInputError(response[0].resultat);}else{$inputUrl.hideInputError();$container.find('.jWhatSUpPicturePreview').html('<div class="jImported">'
+'<a class="jRemoveImg" href="javascript:void(0);" aria-hidden="true" data-icon="&#x22;"></a>'
+'<figure style="background-image:url(\''+response[0].resultat+'\');width:36px;height:36px;background-size: 36px 36px;background-clip: content-box;"></figure>'
+'</div>');}}});}}};})(jQuery);(function($)
{'use strict';$.ModaleUrlSearch={init:function()
{var $urlDisplayer=$('.divWhatSUpUrlDisplayer');$.linkDisplayer.options={displayPositionTotal:false,imgStyle:'',$selectorContainer:$('<div style="line-height: 0; height: 0pt;"></div>')}
$.linkDisplayer.templateLoading='<div class="box1 pad10 line"><img alt="loading" src="'+$data.common.assetUrl+'/copainsdavant.linternaute.com/skin/common/img/ajax-loaderForum.gif" class="inlineBlock" style="margin-left:250px"></div>'
$.linkDisplayer.templateError='<div class="marB20 infoMsg error"><a href="javascript:void(0);" style="top: 5px; right: 5px;" class="ico icoClose abs"></a></span>$l{DUPLICATE_ERROR}</div>';$.linkDisplayer.templateImgContainer='<div class="imgW140Cter imgS2Cter"></div>';$.linkDisplayer.templateImage=['<div class="itemImg bloc"></div>'].join('');$.linkDisplayer.templateNoImage=['<div class="txtC radio">','<input type="checkbox" id="noPic" name="url_no_image"> <label for="noPic">$l{NO_IMAGE}</label>','</div>'].join('');$.linkDisplayer.templateDisplay=['<div class="item line">','<a href="javascript:void(0);" style="top: 5px; right: 5px;" class="ico icoClose abs"></a>','<input type="hidden" name="url_final" value="${final_url}">','<input type="hidden" name="url_title" value="${title}">','<input type="hidden" name="player_height" value="${player_height}">','<input type="hidden" name="player_width" value="${player_width}">','<input type="hidden" name="player_url" value="${player_url}">','<input type="hidden" name="player_html" value="${player_html}">','<input type="hidden" name="player_provider" value="${player_provider}">','<input type="hidden" name="parentx" value="${parentx}" class="parentx">','<input type="hidden" name="url_resume" value="${resume}">','<div class="description itemTxt bloc">','<a target="_blank" rel="noopener noreferrer" href="${final_url}">${final_url}</a>','<h5 data-destination="url_title" maxLength="255">${title}</h5>','<p data-destination="url_resume" maxLength="1024">${resume}</p>','</div>','<div class="titleError txtR" style="color:#E01616;display:none;">$l{NO_TITLE}</div>','</div>'].join('');var urlDisplayerLastUrl='';$('#frmWhatSUpText').addLinkCrawler({behaveInput:true,completeSearch:true,groupName:'WhatSUp',getSource:function()
{return'/wu/_xhr_suggest_attachment?xhr';},beforeCrawl:function(e,url)
{return(urlDisplayerLastUrl!=url);}}).bind('urlInvalid',function()
{urlDisplayerLastUrl='';}).bind('crawlerSubmit',function(e,url)
{urlDisplayerLastUrl=url;});$urlDisplayer.addLinkCrawler({groupName:'WhatSUp'}).linkDisplayer({displayMessageOnDuplicated:false}).bind('crawlerCrawling',function()
{$('div#whatSUpAddUrl').show();$('div.divWhatSUpUrlDisplayer').show();}).on('click','a.icoClose',function()
{$urlDisplayer.find('div#whatSUpAddUrl').hide();$urlDisplayer.empty().hide();});}};})(jQuery);(function($)
{'use strict';$.ModaleAutocomplete={init:function(id)
{var $this=$(this),$inputAutocomplete=$this.find('#'+id),$displayArea=$this.find('#'+id+'_display');if($inputAutocomplete.length>0)
{var $inputId=$this.find('#'+id+'_id'),$inputDesc=$this.find('#'+id+'_desc'),$inputUrl=$this.find('#'+id+'_url'),$inputImage=$this.find('#'+id+'_image');$inputAutocomplete.ccmComplete({anchor:$inputAutocomplete,source:function(req,res)
{var termSearch=req.term.toLowerCase();$.ajax({type:'POST',url:$inputAutocomplete.attr('data-url'),dataType:'json',localCache:true,data:{q:termSearch,xhr:'xhr'},success:function(data)
{res($.map(data.results,function(item)
{return{label:item.title,value:item.title,id:item.id,desc:item.description,url:item.url,image:item.url_image};}));}});},minLength:3,select:function(event,ui)
{$inputId.attr('value',ui.item.id);$inputDesc.attr('value',ui.item.desc);$inputUrl.attr('value',ui.item.url);$inputImage.attr('value',ui.item.image);$displayArea.find('._desc').html(ui.item.desc);$displayArea.find('._image').attr('src',ui.item.image);$displayArea.find('._url').attr('href',ui.item.url);$displayArea.css('display','block');},search:function()
{$displayArea.css('display','none');$inputId.attr('value','');$inputDesc.attr('value','');$inputUrl.attr('value','');$inputImage.attr('value','');$('div.box3 ul.ui-autocomplete').css({'z-index':999999}).parent().css({'z-index':999999});}}).updatable({delay:2000});}}};})(jQuery);(function($)
{'use strict';$.ModaleAutocompleteUsers={init:function(id)
{var $inputAutocomplete=$(this).find('#'+id);$inputAutocomplete.closest('.jAutocompleteUsersContener').on('click','a.jDeleteSelection',$.ModaleAutocompleteUsers.jDeleteSelection);if($inputAutocomplete.length>0)
{if(typeof $inputAutocomplete.attr('data-idusers')!='undefined'&&typeof $inputAutocomplete.attr('data-matchingusers')!='undefined')
{$.ModaleAutocompleteUsers.traitmentExistentValues.call($inputAutocomplete);}
$inputAutocomplete.ccmComplete({anchor:$inputAutocomplete,source:function(req,res)
{var termSearch=req.term.toLowerCase();$.ajax({type:'POST',url:$inputAutocomplete.attr('data-url'),dataType:'json',localCache:true,data:{q:termSearch,xhr:'xhr',ty:1,wpm:true},success:function(data)
{if(data==null||data.r==null)
{var map=[];}
else{var map=$.map(data.r,function(item)
{if(item==undefined)return;var
ret=[{label:'<div class="line acItem">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'
+((item.ti!=null)?item.ti:'')
+((item.vi!=null)?' <em>'+item.vi+'</em>':'')
+'</span>'
+'<em>'+((item.label!=null)?item.label:'')+'</em>'
+'<span class="ico icoSearchG"></span>'
+'</div>',value:item.ti,url:item.li,id:item.id}];return ret;});}
map.push({id:termSearch,label:'Ajouter',value:termSearch});res(map);}});},minLength:3,select:function(event,ui)
{$inputAutocomplete.val('');$inputAutocomplete.before($.CCMMailBox.getTemplate('<a class="user jDeleteSelection" data-id="${id}" data-label="${label}" href="javascript:void(0);" data-icon="&#x22;" aria-hidden="true">${label}</a>',$.extend({},{label:ui.item.value,id:ui.item.id})));var valData=$inputAutocomplete.data('idUsers'),matchingData=$inputAutocomplete.data('matchingUsers');valData=(typeof valData=='undefined')?[]:valData;matchingData=(typeof matchingData=='undefined')?{}:matchingData;valData.push(ui.item.id);matchingData[''+ui.item.id+'']=ui.item.value;$inputAutocomplete.data('idUsers',valData);$inputAutocomplete.data('matchingUsers',matchingData);return false;},open:function()
{$('div.box3 ul.ui-autocomplete').css({'z-index':999999}).parent().css({'z-index':999999});}}).updatable({delay:2000});}},traitmentExistentValues:function()
{this.data('idUsers',$.parseJSON(this.attr('data-idusers')));this.data('matchingUsers',$.parseJSON(this.attr('data-matchingusers')));this.attr('data-idusers','');this.attr('data-matchingusers','');},jDeleteSelection:function()
{var $this=$(this),$inputUser=$this.nextAll('input'),valData=$inputUser.data('idUsers'),key=0,size=valData.length;for(;key<size;key++)
{(valData[key]==$this.attr('data-id'))&&valData.splice(key,1);}
$inputUser.data('idUsers',valData);$this.remove();},preValidationTraitments:function($form)
{var $this=$(this),valData=$this.data('idUsers'),matchingData=$this.data('matchingUsers'),key=0,size=typeof(valData)=='undefined'?0:valData.length,name=$this.attr('name');$this.parent().find('.jAutoConnectDatas').remove();for(;key<size;key++)
{var inputName=(typeof valData[key]=='number')?name+'[id]['+valData[key]+']':name+'[name]['+valData[key]+']';$this.after('<input type = "hidden" class = "jAutoConnectDatas" value = "'+matchingData[valData[key]]+'" name ="'+inputName+'">');}}};})(jQuery);(function($)
{'use strict';$.ModaleGeoloc={geoLocOptions:null,init:function(geoLocOptions)
{var $self=$(this);if(typeof geoLocOptions!=='undefined'){$.ModaleGeoloc.geoLocOptions=geoLocOptions;}else{$.ModaleGeoloc.geoLocOptions=$data.copains.services.geolocation.options;}
if(typeof $.fn.geolocation=='function')
{$.ModaleGeoloc.initGeolocation($self);}
else{$(document).bind('geolocationLoaded',function()
{$.ModaleGeoloc.initGeolocation($self);}).trigger('refresh',[{services:{geolocation:{start:true}}}]);}},initGeolocation:function($div)
{$div.find('.jWhatSUpGeoloc').geolocation($.extend(true,{activateLink:false,userNoLocation:false,displayGeolocateNoMoreInSelect:false},$.ModaleGeoloc.geoLocOptions));},preValidationTraitments:function($form)
{var $this=$(this),$inputLocationName=$this.find('[name=\'location_name\']');if($inputLocationName.val()=="")
{$inputLocationName.val($this.find('.inputgeoloc input').val());}}};})(jQuery);(function($)
{'use strict';var isViadeo=($data.app_name=='viadeo');$.UserProfileModale={modaleOpened:false,modaleSubmit:false,init:function()
{$(document).on('click','.jUserProfileModale',$.UserProfileModale.displayModaleFromIcone).on('submit','.jSettingsContainer form',$.UserProfileModale.submit);},displayModaleFromIcone:function()
{var $this=$(this);$.UserProfileModale.displayModale($this.attr('data-type'),$this.attr('id'));},displayModale:function(type,name)
{if($.UserProfileModale.modaleOpened==true)
{return;}
$.UserProfileModale.modaleOpened=true;($('.jModalDialog').length>0)&&$.CommonModale.closeModale();$.ajax({type:'POST',url:'/whatsup/_xhr_getModal/',dataType:'json',data:{type:type,xhr:'xhr'},success:function(response)
{var dialog=$('<div>').addClass('jCcmTabsModal').html(response.html).dialog({minWidth:900,minHeight:450,height:'auto',dialogClass:'jModalDialog copains_dialog_tastes',position:['center','center'],modal:true}).ccmUITabs({load:function(event,ui)
{$.dropDownActions.initMultiPrivacy();},tabHandlers:{load:{'main':function()
{$.CommonModale.initDatePicker();$.ModaleGeoloc.init.call(this,response.$data.copains.services.geolocation.options);},'myLife':function()
{$.UserProfileModale.initMyLife();}}}});var $button=$('#'+name);if($button.length>0)
{$button.effect("transfer",{to:dialog.dialog('widget'),className:"ui-effects-transfer"},500,function()
{$('.jModalDialog').css('opacity',1);$.UserProfileModale.modaleOpened=false;});}
else{$.UserProfileModale.modaleOpened=false;}
$.dropDownActions.initMultiPrivacy();$('.jNavForTabs').ccmtabResponsiveTransformer();$('.jMailChecker').on('blur',function(){var $self=$(this);$self.mailcheck({suggested:function(element,suggestion){var $msg=$self.parent().find('.jMsg');$msg.text("Vouliez-vous dire "+suggestion.full+" ?").on('click',function(){$self.val(suggestion.full);$msg.text('');});},empty:function(element){$self.parent().find('.jMsg').text('');}});});}});},submit:function(event)
{event.preventDefault();if($.UserProfileModale.modaleSubmit==true)
{return;}
$.UserProfileModale.modaleSubmit=true;var $form=$(this).closest('.jSettingsContainer').find('form');$form.hideFormError();$form.ajaxSubmit({type:'POST',url:$form.attr('action'),dataType:'json',data:{xhr:1},success:function(json)
{if(json.success==true&&json.reload!='undefined')
{window.location.reload();}
else if(json.errors){$('body').scrollTo($('.jCcmTabsModal'),0,{axis:'y'});$.each(json.errors,function(p,vp)
{$form.find('[name=\''+p+'\']').showInputError(vp);});}
$.UserProfileModale.modaleSubmit=false;}});},initMyLife:function()
{var $container=$('.jSettingsContainer'),$txtProfession=$container.find('input#txtProfession'),$idProfession=$container.find('input#idProfession');$txtProfession.ccmComplete({source:$.UserProfileModale.getProfessionAutoComplete,minLength:3,select:function(event,ui){$idProfession.attr('value',ui.item.id).data('nomProfession',ui.item.value);$txtProfession.attr('value',ui.item.value);},search:function()
{$('div.box3 ul.ui-autocomplete').css({'z-index':999999}).parent().css({'z-index':999999});}}).updatable({delay:2000}).bind('updated',function(e){($idProfession.data('nomProfession')!=$txtProfession.val())&&$idProfession.attr('value','');});$container.find('textarea[warnlength]').maxLength().on('warnlengthin',function(e,length,warn,max)
{var nbRemainingChars=max-(length+1),label=nbRemainingChars+" ";if(nbRemainingChars==0){label+="caractère restant.";}else{label+="caractères restants.";}
$(this).parent().find('.jMsg').html(label);});},getProfessionAutoComplete:function(req,res)
{var termSearch=req.term.toLowerCase();$.ajax({type:'POST',url:'/pro/_xhr_search_profession/',dataType:'json',localCache:true,data:{recherche:termSearch,xhr:'xhr'},success:function(data){res($.map(data,function(item){return{label:item.value,value:item.value,id:item.id};}));}});}};$(document).start($.UserProfileModale.init);})(jQuery);(function($)
{'use strict';$.WhereIveBeenModale={modaleOpened:false,modaleSubmit:false,init:function()
{$(document).on('click','.jWhereIveBeenModale',$.WhereIveBeenModale.displayModaleFromIcone).on('submit','.jWhereIveBeenContainer form',$.WhereIveBeenModale.submit).on('OpenWhereIveBeenModale',function(e,$element){$.WhereIveBeenModale.displayModaleFromIcone.call($element);});},displayModaleFromIcone:function()
{if($.WhereIveBeenModale.modaleOpened==true)
{return;}
$.WhereIveBeenModale.modaleOpened=true;var $this=$(this);($('.jModalDialog').length>0)&&$.CommonModale.closeModale();$.ajax({type:'POST',url:'/up/_xhr_getModalWhereIveBeen/',dataType:'json',data:{xhr:'xhr'},success:function(response)
{var dialog=$('<div>').html(response.html).dialog({minWidth:700,minHeight:450,height:'auto',dialogClass:'jModalDialog',position:['center','center'],modal:true,open:function()
{var $jMap1=$('.jMap1'),testAndRefresh=function()
{if(typeof $.fn.mapael!='undefined'&&typeof $.fn.mapael.maps!='undefined'&&typeof $.fn.mapael.maps["world_countries_miller"]!='undefined'&&($jMap1.find('script').length==0))
{$(document).trigger('refresh');}
else{setTimeout(testAndRefresh,250);}};testAndRefresh();}});$this.effect("transfer",{to:dialog.dialog('widget'),className:"ui-effects-transfer"},500,function()
{$('.jModalDialog').css('opacity',1);$.WhereIveBeenModale.modaleOpened=false;});}});},submit:function(event)
{event.preventDefault();if($.WhereIveBeenModale.modaleSubmit==true)
{return;}
$.WhereIveBeenModale.modaleSubmit=true;var $divModal=$(this).closest('.jWhereIveBeenContainer'),$form=$divModal.find('form');$form.ajaxSubmit({type:'POST',url:$form.attr('action'),dataType:'json',data:{xhr:1,value:$divModal.find('.jMapUpdate').data('modif')},success:function(json)
{if(typeof json.html!='undefined')
{$('.jAllreadyBeen, .jWishBeen').remove();$('.jMap1').replaceWith(json.html);$(document).trigger('refresh');}
if(json.success==true)
{location.reload();}
$.WhereIveBeenModale.modaleSubmit=false;}});}};$(document).start($.WhereIveBeenModale.init);})(jQuery);(function($)
{'use strict';$.EtablissementFeedModale={modaleOpened:false,modaleSubmit:false,init:function()
{$(document).on('click','.jEtablissementFeedModale',$.EtablissementFeedModale.displayModaleFromIcone).on('submit','.jEtablissementFeedModal form',$.EtablissementFeedModale.submit);},displayModaleFromIcone:function()
{var $this=$(this);$.EtablissementFeedModale.displayModale($this.attr('data-eid'),$this.attr('data-feedtype'),$this.attr('id'));},displayModale:function(etablissementId,feedType,name)
{if($.EtablissementFeedModale.modaleOpened==true)
{return;}
$.EtablissementFeedModale.modaleOpened=true;if($('.jModalDialog').length>0){$.CommonModale.closeModale();}
$.ajax({type:'POST',url:'/e/_xhr_getModalFeeds/',dataType:'json',data:{feedType:feedType,eid:etablissementId,xhr:'xhr'},success:function(response)
{var dialog=$('<div>').addClass('jCcmTabsModal').html(response.html).dialog({minWidth:900,minHeight:450,height:'auto',dialogClass:'jModalDialog copains_dialog_tastes',position:['center','center'],modal:true});var $button=$('#'+name);if($button.length>0)
{$button.effect("transfer",{to:dialog.dialog('widget'),className:"ui-effects-transfer"},500,function()
{$('.jModalDialog').css('opacity',1);$.EtablissementFeedModale.modaleOpened=false;});}
else{$.EtablissementFeedModale.modaleOpened=false;}}});},submit:function(event)
{event.preventDefault();if($.UserProfileModale.modaleSubmit==true)
{return;}
$.UserProfileModale.modaleSubmit=true;var $form=$(this).closest('.jEtablissementFeedModal').find('form');$form.hideFormError();$form.ajaxSubmit({type:'POST',url:$form.attr('action'),dataType:'json',data:{xhr:1},success:function(json)
{if(json.success==true)
{if(typeof json.html!='undefined')
{if($form.attr('data-type')=='avis')
{$('#avisWall').commentsList().closest('.ui-tabs-panel').html(json.html);}
else{$('#jobWall').commentsList().closest('.ui-tabs-panel').html(json.html);}
$.CommonModale.closeModale();}}
else if(json.errors){$('body').scrollTo($('.jCcmTabsModal'),0,{axis:'y'});$.each(json.errors,function(p,vp)
{$form.find('[name=\''+p+'\']').showInputError(vp);});}
$.UserProfileModale.modaleSubmit=false;}});}};$(document).start($.EtablissementFeedModale.init);})(jQuery);
if(!window.JSON){window.JSON={};}
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());(function(window,undefined){"use strict";var
document=window.document,setTimeout=window.setTimeout||setTimeout,clearTimeout=window.clearTimeout||clearTimeout,setInterval=window.setInterval||setInterval,History=window.History=window.History||{};if(typeof History.initHtml4!=='undefined'){throw new Error('History.js HTML4 Support has already been loaded...');}
History.initHtml4=function(){if(typeof History.initHtml4.initialized!=='undefined'){return false;}
else{History.initHtml4.initialized=true;}
History.enabled=true;History.savedHashes=[];History.isLastHash=function(newHash){var oldHash=History.getHashByIndex(),isLast;isLast=newHash===oldHash;return isLast;};History.saveHash=function(newHash){if(History.isLastHash(newHash)){return false;}
History.savedHashes.push(newHash);return true;};History.getHashByIndex=function(index){var hash=null;if(typeof index==='undefined'){hash=History.savedHashes[History.savedHashes.length-1];}
else if(index<0){hash=History.savedHashes[History.savedHashes.length+index];}
else{hash=History.savedHashes[index];}
return hash;};History.discardedHashes={};History.discardedStates={};History.discardState=function(discardedState,forwardState,backState){var discardedStateHash=History.getHashByState(discardedState),discardObject;discardObject={'discardedState':discardedState,'backState':backState,'forwardState':forwardState};History.discardedStates[discardedStateHash]=discardObject;return true;};History.discardHash=function(discardedHash,forwardState,backState){var discardObject={'discardedHash':discardedHash,'backState':backState,'forwardState':forwardState};History.discardedHashes[discardedHash]=discardObject;return true;};History.discardedState=function(State){var StateHash=History.getHashByState(State),discarded;discarded=History.discardedStates[StateHash]||false;return discarded;};History.discardedHash=function(hash){var discarded=History.discardedHashes[hash]||false;return discarded;};History.recycleState=function(State){var StateHash=History.getHashByState(State);if(History.discardedState(State)){delete History.discardedStates[StateHash];}
return true;};if(History.emulated.hashChange){History.hashChangeInit=function(){History.checkerFunction=null;var lastDocumentHash='',iframeId,iframe,lastIframeHash,checkerRunning;if(History.isInternetExplorer()){iframeId='historyjs-iframe';iframe=document.createElement('iframe');iframe.setAttribute('id',iframeId);iframe.style.display='none';document.body.appendChild(iframe);iframe.contentWindow.document.open();iframe.contentWindow.document.close();lastIframeHash='';checkerRunning=false;History.checkerFunction=function(){if(checkerRunning){return false;}
checkerRunning=true;var documentHash=History.getHash()||'',iframeHash=History.unescapeHash(iframe.contentWindow.document.location.hash)||'';if(documentHash!==lastDocumentHash){lastDocumentHash=documentHash;if(iframeHash!==documentHash){lastIframeHash=iframeHash=documentHash;iframe.contentWindow.document.open();iframe.contentWindow.document.close();iframe.contentWindow.document.location.hash=History.escapeHash(documentHash);}
History.Adapter.trigger(window,'hashchange');}
else if(iframeHash!==lastIframeHash){lastIframeHash=iframeHash;History.setHash(iframeHash,false);}
checkerRunning=false;return true;};}
else{History.checkerFunction=function(){var documentHash=History.getHash();if(documentHash!==lastDocumentHash){lastDocumentHash=documentHash;History.Adapter.trigger(window,'hashchange');}
return true;};}
History.intervalList.push(setInterval(History.checkerFunction,History.options.hashChangeInterval));return true;};History.Adapter.onDomLoad(History.hashChangeInit);}
if(History.emulated.pushState){History.onHashChange=function(event){var currentUrl=((event&&event.newURL)||document.location.href),currentHash=History.getHashByUrl(currentUrl),currentState=null,currentStateHash=null,currentStateHashExits=null,discardObject;if(History.isLastHash(currentHash)){History.busy(false);return false;}
History.doubleCheckComplete();History.saveHash(currentHash);if(currentHash&&History.isTraditionalAnchor(currentHash)){History.Adapter.trigger(window,'anchorchange');History.busy(false);return false;}
currentState=History.extractState(History.getFullUrl(currentHash||document.location.href,false),true);if(History.isLastSavedState(currentState)){History.busy(false);return false;}
currentStateHash=History.getHashByState(currentState);discardObject=History.discardedState(currentState);if(discardObject){if(History.getHashByIndex(-2)===History.getHashByState(discardObject.forwardState)){History.back(false);}else{History.forward(false);}
return false;}
History.pushState(currentState.data,currentState.title,currentState.url,false);return true;};History.Adapter.bind(window,'hashchange',History.onHashChange);History.pushState=function(data,title,url,queue){if(History.getHashByUrl(url)){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.pushState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url),newStateHash=History.getHashByState(newState),oldState=History.getState(false),oldStateHash=History.getHashByState(oldState),html4Hash=History.getHash();History.storeState(newState);History.expectedStateId=newState.id;History.recycleState(newState);History.setTitle(newState);if(newStateHash===oldStateHash){History.busy(false);return false;}
if(newStateHash!==html4Hash&&newStateHash!==History.getShortUrl(document.location.href)){History.setHash(newStateHash,false);return false;}
History.saveState(newState);History.Adapter.trigger(window,'statechange');History.busy(false);return true;};History.replaceState=function(data,title,url,queue){if(History.getHashByUrl(url)){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.replaceState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url),oldState=History.getState(false),previousState=History.getStateByIndex(-2);History.discardState(oldState,newState,previousState);History.pushState(newState.data,newState.title,newState.url,false);return true;};}
if(History.emulated.pushState){if(History.getHash()&&!History.emulated.hashChange){History.Adapter.onDomLoad(function(){History.Adapter.trigger(window,'hashchange');});}}};if(typeof History.init!=='undefined'){History.init();}})(window);(function(window,undefined){"use strict";var
console=window.console||undefined,document=window.document,navigator=window.navigator,sessionStorage=window.sessionStorage||false,setTimeout=window.setTimeout,clearTimeout=window.clearTimeout,setInterval=window.setInterval,clearInterval=window.clearInterval,JSON=window.JSON,alert=window.alert,History=window.History=window.History||{},history=window.history;JSON.stringify=JSON.stringify||JSON.encode;JSON.parse=JSON.parse||JSON.decode;if(typeof History.init!=='undefined'){throw new Error('History.js Core has already been loaded...');}
History.init=function(){if(typeof History.Adapter==='undefined'){return false;}
if(typeof History.initCore!=='undefined'){History.initCore();}
if(typeof History.initHtml4!=='undefined'){History.initHtml4();}
return true;};History.initCore=function(){if(typeof History.initCore.initialized!=='undefined'){return false;}
else{History.initCore.initialized=true;}
History.options=History.options||{};History.options.hashChangeInterval=History.options.hashChangeInterval||100;History.options.safariPollInterval=History.options.safariPollInterval||500;History.options.doubleCheckInterval=History.options.doubleCheckInterval||500;History.options.storeInterval=History.options.storeInterval||1000;History.options.busyDelay=History.options.busyDelay||250;History.options.debug=History.options.debug||false;History.options.initialTitle=History.options.initialTitle||document.title;History.intervalList=[];History.clearAllIntervals=function(){var i,il=History.intervalList;if(typeof il!=="undefined"&&il!==null){for(i=0;i<il.length;i++){clearInterval(il[i]);}
History.intervalList=null;}};History.debug=function(){if((History.options.debug||false)){History.log.apply(History,arguments);}};History.log=function(){var
consoleExists=!(typeof console==='undefined'||typeof console.log==='undefined'||typeof console.log.apply==='undefined'),textarea=document.getElementById('log'),message,i,n,args,arg;if(consoleExists){args=Array.prototype.slice.call(arguments);message=args.shift();if(typeof console.debug!=='undefined'){console.debug.apply(console,[message,args]);}
else{console.log.apply(console,[message,args]);}}
else{message=("\n"+arguments[0]+"\n");}
for(i=1,n=arguments.length;i<n;++i){arg=arguments[i];if(typeof arg==='object'&&typeof JSON!=='undefined'){try{arg=JSON.stringify(arg);}
catch(Exception){}}
message+="\n"+arg+"\n";}
if(textarea){textarea.value+=message+"\n-----\n";textarea.scrollTop=textarea.scrollHeight-textarea.clientHeight;}
else if(!consoleExists){alert(message);}
return true;};History.getInternetExplorerMajorVersion=function(){var result=History.getInternetExplorerMajorVersion.cached=(typeof History.getInternetExplorerMajorVersion.cached!=='undefined')?History.getInternetExplorerMajorVersion.cached:(function(){var v=3,div=document.createElement('div'),all=div.getElementsByTagName('i');while((div.innerHTML='<!--[if gt IE '+(++v)+']><i></i><![endif]-->')&&all[0]){}
return(v>4)?v:false;})();return result;};History.isInternetExplorer=function(){var result=History.isInternetExplorer.cached=(typeof History.isInternetExplorer.cached!=='undefined')?History.isInternetExplorer.cached:Boolean(History.getInternetExplorerMajorVersion());return result;};History.emulated={pushState:!Boolean(window.history&&window.history.pushState&&window.history.replaceState&&!((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent)||(/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent))),hashChange:Boolean(!(('onhashchange'in window)||('onhashchange'in document))||(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<8))};History.enabled=!History.emulated.pushState;History.bugs={setHash:Boolean(!History.emulated.pushState&&navigator.vendor==='Apple Computer, Inc.'&&/AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),safariPoll:Boolean(!History.emulated.pushState&&navigator.vendor==='Apple Computer, Inc.'&&/AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),ieDoubleCheck:Boolean(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<7)};History.isEmptyObject=function(obj){for(var name in obj){return false;}
return true;};History.cloneObject=function(obj){var hash,newObj;if(obj){hash=JSON.stringify(obj);newObj=JSON.parse(hash);}
else{newObj={};}
return newObj;};History.getRootUrl=function(){var rootUrl=document.location.protocol+'//'+(document.location.hostname||document.location.host);if(document.location.port||false){rootUrl+=':'+document.location.port;}
rootUrl+='/';return rootUrl;};History.getBaseHref=function(){var
baseElements=document.getElementsByTagName('base'),baseElement=null,baseHref='';if(baseElements.length===1){baseElement=baseElements[0];baseHref=baseElement.href.replace(/[^\/]+$/,'');}
baseHref=baseHref.replace(/\/+$/,'');if(baseHref)baseHref+='/';return baseHref;};History.getBaseUrl=function(){var baseUrl=History.getBaseHref()||History.getBasePageUrl()||History.getRootUrl();return baseUrl;};History.getPageUrl=function(){var
State=History.getState(false,false),stateUrl=(State||{}).url||document.location.href,pageUrl;pageUrl=stateUrl.replace(/\/+$/,'').replace(/[^\/]+$/,function(part,index,string){return(/\./).test(part)?part:part+'/';});return pageUrl;};History.getBasePageUrl=function(){var basePageUrl=document.location.href.replace(/[#\?].*/,'').replace(/[^\/]+$/,function(part,index,string){return(/[^\/]$/).test(part)?'':part;}).replace(/\/+$/,'')+'/';return basePageUrl;};History.getFullUrl=function(url,allowBaseHref){var fullUrl=url,firstChar=url.substring(0,1);allowBaseHref=(typeof allowBaseHref==='undefined')?true:allowBaseHref;if(/[a-z]+\:\/\//.test(url)){}
else if(firstChar==='/'){fullUrl=History.getRootUrl()+url.replace(/^\/+/,'');}
else if(firstChar==='#'){fullUrl=History.getPageUrl().replace(/#.*/,'')+url;}
else if(firstChar==='?'){fullUrl=History.getPageUrl().replace(/[\?#].*/,'')+url;}
else{if(allowBaseHref){fullUrl=History.getBaseUrl()+url.replace(/^(\.\/)+/,'');}else{fullUrl=History.getBasePageUrl()+url.replace(/^(\.\/)+/,'');}}
return fullUrl.replace(/\#$/,'');};History.getShortUrl=function(url){var shortUrl=url,baseUrl=History.getBaseUrl(),rootUrl=History.getRootUrl();if(History.emulated.pushState){shortUrl=shortUrl.replace(baseUrl,'');}
shortUrl=shortUrl.replace(rootUrl,'/');if(History.isTraditionalAnchor(shortUrl)){shortUrl='./'+shortUrl;}
shortUrl=shortUrl.replace(/^(\.\/)+/g,'./').replace(/\#$/,'');return shortUrl;};History.store={};History.idToState=History.idToState||{};History.stateToId=History.stateToId||{};History.urlToId=History.urlToId||{};History.storedStates=History.storedStates||[];History.savedStates=History.savedStates||[];History.normalizeStore=function(){History.store.idToState=History.store.idToState||{};History.store.urlToId=History.store.urlToId||{};History.store.stateToId=History.store.stateToId||{};};History.getState=function(friendly,create){if(typeof friendly==='undefined'){friendly=true;}
if(typeof create==='undefined'){create=true;}
var State=History.getLastSavedState();if(!State&&create){State=History.createStateObject();}
if(friendly){State=History.cloneObject(State);State.url=State.cleanUrl||State.url;}
return State;};History.getIdByState=function(newState){var id=History.extractId(newState.url),str;if(!id){str=History.getStateString(newState);if(typeof History.stateToId[str]!=='undefined'){id=History.stateToId[str];}
else if(typeof History.store.stateToId[str]!=='undefined'){id=History.store.stateToId[str];}
else{while(true){id=(new Date()).getTime()+String(Math.random()).replace(/\D/g,'');if(typeof History.idToState[id]==='undefined'&&typeof History.store.idToState[id]==='undefined'){break;}}
History.stateToId[str]=id;History.idToState[id]=newState;}}
return id;};History.normalizeState=function(oldState){var newState,dataNotEmpty;if(!oldState||(typeof oldState!=='object')){oldState={};}
if(typeof oldState.normalized!=='undefined'){return oldState;}
if(!oldState.data||(typeof oldState.data!=='object')){oldState.data={};}
newState={};newState.normalized=true;newState.title=oldState.title||'';newState.url=History.getFullUrl(History.unescapeString(oldState.url||document.location.href));newState.hash=History.getShortUrl(newState.url);newState.data=History.cloneObject(oldState.data);newState.id=History.getIdByState(newState);newState.cleanUrl=newState.url.replace(/\??\&_suid.*/,'');newState.url=newState.cleanUrl;dataNotEmpty=!History.isEmptyObject(newState.data);if(newState.title||dataNotEmpty){newState.hash=History.getShortUrl(newState.url).replace(/\??\&_suid.*/,'');if(!/\?/.test(newState.hash)){newState.hash+='?';}
newState.hash+='&_suid='+newState.id;}
newState.hashedUrl=History.getFullUrl(newState.hash);if((History.emulated.pushState||History.bugs.safariPoll)&&History.hasUrlDuplicate(newState)){newState.url=newState.hashedUrl;}
return newState;};History.createStateObject=function(data,title,url){var State={'data':data,'title':title,'url':url};State=History.normalizeState(State);return State;};History.getStateById=function(id){id=String(id);var State=History.idToState[id]||History.store.idToState[id]||undefined;return State;};History.getStateString=function(passedState){var State,cleanedState,str;State=History.normalizeState(passedState);cleanedState={data:State.data,title:passedState.title,url:passedState.url};str=JSON.stringify(cleanedState);return str;};History.getStateId=function(passedState){var State,id;State=History.normalizeState(passedState);id=State.id;return id;};History.getHashByState=function(passedState){var State,hash;State=History.normalizeState(passedState);hash=State.hash;return hash;};History.extractId=function(url_or_hash){var id,parts,url;parts=/(.*)\&_suid=([0-9]+)$/.exec(url_or_hash);url=parts?(parts[1]||url_or_hash):url_or_hash;id=parts?String(parts[2]||''):'';return id||false;};History.isTraditionalAnchor=function(url_or_hash){var isTraditional=!(/[\/\?\.]/.test(url_or_hash));return isTraditional;};History.extractState=function(url_or_hash,create){var State=null,id,url;create=create||false;id=History.extractId(url_or_hash);if(id){State=History.getStateById(id);}
if(!State){url=History.getFullUrl(url_or_hash);id=History.getIdByUrl(url)||false;if(id){State=History.getStateById(id);}
if(!State&&create&&!History.isTraditionalAnchor(url_or_hash)){State=History.createStateObject(null,null,url);}}
return State;};History.getIdByUrl=function(url){var id=History.urlToId[url]||History.store.urlToId[url]||undefined;return id;};History.getLastSavedState=function(){return History.savedStates[History.savedStates.length-1]||undefined;};History.getLastStoredState=function(){return History.storedStates[History.storedStates.length-1]||undefined;};History.hasUrlDuplicate=function(newState){var hasDuplicate=false,oldState;oldState=History.extractState(newState.url);hasDuplicate=oldState&&oldState.id!==newState.id;return hasDuplicate;};History.storeState=function(newState){History.urlToId[newState.url]=newState.id;History.storedStates.push(History.cloneObject(newState));return newState;};History.isLastSavedState=function(newState){var isLast=false,newId,oldState,oldId;if(History.savedStates.length){newId=newState.id;oldState=History.getLastSavedState();oldId=oldState.id;isLast=(newId===oldId);}
return isLast;};History.saveState=function(newState){if(History.isLastSavedState(newState)){return false;}
History.savedStates.push(History.cloneObject(newState));return true;};History.getStateByIndex=function(index){var State=null;if(typeof index==='undefined'){State=History.savedStates[History.savedStates.length-1];}
else if(index<0){State=History.savedStates[History.savedStates.length+index];}
else{State=History.savedStates[index];}
return State;};History.getHash=function(){var hash=History.unescapeHash(document.location.hash);return hash;};History.unescapeString=function(str){var result=str,tmp;while(true){tmp=window.unescape(result);if(tmp===result){break;}
result=tmp;}
return result;};History.unescapeHash=function(hash){var result=History.normalizeHash(hash);result=History.unescapeString(result);return result;};History.normalizeHash=function(hash){var result=hash.replace(/[^#]*#/,'').replace(/#.*/,'');return result;};History.setHash=function(hash,queue){var adjustedHash,State,pageUrl;if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.setHash,args:arguments,queue:queue});return false;}
adjustedHash=History.escapeHash(hash);History.busy(true);State=History.extractState(hash,true);if(State&&!History.emulated.pushState){History.pushState(State.data,State.title,State.url,false);}
else if(document.location.hash!==adjustedHash){if(History.bugs.setHash){pageUrl=History.getPageUrl();History.pushState(null,null,pageUrl+'#'+adjustedHash,false);}
else{document.location.hash=adjustedHash;}}
return History;};History.escapeHash=function(hash){var result=History.normalizeHash(hash);result=window.escape(result);if(!History.bugs.hashEscape){result=result.replace(/\%21/g,'!').replace(/\%26/g,'&').replace(/\%3D/g,'=').replace(/\%3F/g,'?');}
return result;};History.getHashByUrl=function(url){var hash=String(url).replace(/([^#]*)#?([^#]*)#?(.*)/,'$2');hash=History.unescapeHash(hash);return hash;};History.setTitle=function(newState){var title=newState.title,firstState;if(!title){firstState=History.getStateByIndex(0);if(firstState&&firstState.url===newState.url){title=firstState.title||History.options.initialTitle;}}
try{document.getElementsByTagName('title')[0].innerHTML=title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');}
catch(Exception){}
document.title=title;return History;};History.queues=[];History.busy=function(value){if(typeof value!=='undefined'){History.busy.flag=value;}
else if(typeof History.busy.flag==='undefined'){History.busy.flag=false;}
if(!History.busy.flag){clearTimeout(History.busy.timeout);var fireNext=function(){var i,queue,item;if(History.busy.flag)return;for(i=History.queues.length-1;i>=0;--i){queue=History.queues[i];if(queue.length===0)continue;item=queue.shift();History.fireQueueItem(item);History.busy.timeout=setTimeout(fireNext,History.options.busyDelay);}};History.busy.timeout=setTimeout(fireNext,History.options.busyDelay);}
return History.busy.flag;};History.busy.flag=false;History.fireQueueItem=function(item){return item.callback.apply(item.scope||History,item.args||[]);};History.pushQueue=function(item){History.queues[item.queue||0]=History.queues[item.queue||0]||[];History.queues[item.queue||0].push(item);return History;};History.queue=function(item,queue){if(typeof item==='function'){item={callback:item};}
if(typeof queue!=='undefined'){item.queue=queue;}
if(History.busy()){History.pushQueue(item);}else{History.fireQueueItem(item);}
return History;};History.clearQueue=function(){History.busy.flag=false;History.queues=[];return History;};History.stateChanged=false;History.doubleChecker=false;History.doubleCheckComplete=function(){History.stateChanged=true;History.doubleCheckClear();return History;};History.doubleCheckClear=function(){if(History.doubleChecker){clearTimeout(History.doubleChecker);History.doubleChecker=false;}
return History;};History.doubleCheck=function(tryAgain){History.stateChanged=false;History.doubleCheckClear();if(History.bugs.ieDoubleCheck){History.doubleChecker=setTimeout(function(){History.doubleCheckClear();if(!History.stateChanged){tryAgain();}
return true;},History.options.doubleCheckInterval);}
return History;};History.safariStatePoll=function(){var
urlState=History.extractState(document.location.href),newState;if(!History.isLastSavedState(urlState)){newState=urlState;}
else{return;}
if(!newState){newState=History.createStateObject();}
History.Adapter.trigger(window,'popstate');return History;};History.back=function(queue){if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.back,args:arguments,queue:queue});return false;}
History.busy(true);History.doubleCheck(function(){History.back(false);});history.go(-1);return true;};History.forward=function(queue){if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.forward,args:arguments,queue:queue});return false;}
History.busy(true);History.doubleCheck(function(){History.forward(false);});history.go(1);return true;};History.go=function(index,queue){var i;if(index>0){for(i=1;i<=index;++i){History.forward(queue);}}
else if(index<0){for(i=-1;i>=index;--i){History.back(queue);}}
else{throw new Error('History.go: History.go requires a positive or negative integer passed.');}
return History;};if(History.emulated.pushState){var emptyFunction=function(){};History.pushState=History.pushState||emptyFunction;History.replaceState=History.replaceState||emptyFunction;}
else{History.onPopState=function(event,extra){var stateId=false,newState=false,currentHash,currentState;History.doubleCheckComplete();currentHash=History.getHash();if(currentHash){currentState=History.extractState(currentHash||document.location.href,true);if(currentState){History.replaceState(currentState.data,currentState.title,currentState.url,false);}
else{History.Adapter.trigger(window,'anchorchange');History.busy(false);}
History.expectedStateId=false;return false;}
stateId=History.Adapter.extractEventData('state',event,extra)||false;if(stateId){newState=History.getStateById(stateId);}
else if(History.expectedStateId){newState=History.getStateById(History.expectedStateId);}
else{newState=History.extractState(document.location.href);}
if(!newState){newState=History.createStateObject(null,null,document.location.href);}
History.expectedStateId=false;if(History.isLastSavedState(newState)){History.busy(false);return false;}
History.storeState(newState);History.saveState(newState);History.setTitle(newState);History.Adapter.trigger(window,'statechange');History.busy(false);return true;};History.Adapter.bind(window,'popstate',History.onPopState);History.pushState=function(data,title,url,queue){if(History.getHashByUrl(url)&&History.emulated.pushState){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.pushState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url);if(History.isLastSavedState(newState)){History.busy(false);}
else{History.storeState(newState);History.expectedStateId=newState.id;history.pushState(newState.id,newState.title,newState.url);History.Adapter.trigger(window,'popstate');}
return true;};History.replaceState=function(data,title,url,queue){if(History.getHashByUrl(url)&&History.emulated.pushState){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.replaceState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url);if(History.isLastSavedState(newState)){History.busy(false);}
else{History.storeState(newState);History.expectedStateId=newState.id;history.replaceState(newState.id,newState.title,newState.url);History.Adapter.trigger(window,'popstate');}
return true;};}
if(sessionStorage){try{History.store=JSON.parse(sessionStorage.getItem('History.store'))||{};}
catch(err){History.store={};}
History.normalizeStore();}
else{History.store={};History.normalizeStore();}
History.Adapter.bind(window,"beforeunload",History.clearAllIntervals);History.Adapter.bind(window,"unload",History.clearAllIntervals);History.saveState(History.storeState(History.extractState(document.location.href,true)));if(sessionStorage){History.onUnload=function(){var	currentStore,item;try{currentStore=JSON.parse(sessionStorage.getItem('History.store'))||{};}
catch(err){currentStore={};}
currentStore.idToState=currentStore.idToState||{};currentStore.urlToId=currentStore.urlToId||{};currentStore.stateToId=currentStore.stateToId||{};for(item in History.idToState){if(!History.idToState.hasOwnProperty(item)){continue;}
currentStore.idToState[item]=History.idToState[item];}
for(item in History.urlToId){if(!History.urlToId.hasOwnProperty(item)){continue;}
currentStore.urlToId[item]=History.urlToId[item];}
for(item in History.stateToId){if(!History.stateToId.hasOwnProperty(item)){continue;}
currentStore.stateToId[item]=History.stateToId[item];}
History.store=currentStore;History.normalizeStore();sessionStorage.setItem('History.store',JSON.stringify(currentStore));};History.intervalList.push(setInterval(History.onUnload,History.options.storeInterval));History.Adapter.bind(window,'beforeunload',History.onUnload);History.Adapter.bind(window,'unload',History.onUnload);}
if(!History.emulated.pushState){if(History.bugs.safariPoll){History.intervalList.push(setInterval(History.safariStatePoll,History.options.safariPollInterval));}
if(navigator.vendor==='Apple Computer, Inc.'||(navigator.appCodeName||'')==='Mozilla'){History.Adapter.bind(window,'hashchange',function(){History.Adapter.trigger(window,'popstate');});if(History.getHash()){History.Adapter.onDomLoad(function(){History.Adapter.trigger(window,'hashchange');});}}}};History.init();})(window);(function(window,undefined){"use strict";var
History=window.History=window.History||{},jQuery=window.jQuery;if(typeof History.Adapter!=='undefined'){throw new Error('History.js Adapter has already been loaded...');}
History.Adapter={bind:function(el,event,callback){jQuery(el).bind(event,callback);},trigger:function(el,event,extra){jQuery(el).trigger(event,extra);},extractEventData:function(key,event,extra){var result=(event&&event.originalEvent&&event.originalEvent[key])||(extra&&extra[key])||undefined;return result;},onDomLoad:function(callback){jQuery(callback);}};if(typeof History.init!=='undefined'){History.init();}})(window);
(function($){$.loading={defaultOptions:{padding:10,label:'LOADING',speedFadeIn:'slow',speedFadeOut:'slow',template:'<div id="loading"></div>',dataName:'loadingNode',timeout:100,css:{opacity:1,backgroundColor:'none',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat',zindex:1000}}};$.fn.loading=function(action,config,dimension,handler){action=action||'on';config=config||{};dimension=dimension||null;handler=handler||function(){};config=$.extend(true,{},$.loading.defaultOptions,config);var $lastNode=this;this.each(function(){var $this=$(this),position,isInit=typeof $this.data(config.dataName)!='undefined',data=(isInit?$this.data(config.dataName):{$loading:$(config.template).appendTo($this),counter:[]});switch(action.toLowerCase()){case'on':$.profile&&console.time('loading.on : '+config.label);position=$this.position();data.$spin=data.$loading.css($.extend({height:$this.height()+config.padding,width:$this.width()+config.padding,position:'absolute',top:position.top-(config.padding/2),left:position.left-(config.padding/2)},config.css)).fadeIn(config.speedFadeIn).spin();data.counter++;$lastNode=data.$loading;$.profile&&console.timeEnd('loading.on : '+config.label);break;case'update':$.profile&&console.time('loading.update');if(dimension!==null)
{var paramAnim={};if(typeof dimension.diffWidth!='undefined'){paramAnim.width=(dimension.diffWidth>0?"+="+(dimension.diffWidth+config.padding)+"px":"-="+-(dimension.diffWidth+config.padding)+"px");}
if(typeof dimension.diffHeight!='undefined'){paramAnim.height=(dimension.diffHeight>0?"+="+(dimension.diffHeight+config.padding)+"px":"-="+-(dimension.diffHeight+config.padding)+"px");}
$lastNode=data.$loading.animate(paramAnim,{complete:handler});}
$.profile&&console.timeEnd('loading.update');break;case'off':$.profile&&console.time('loading.off'),console.time('loading.offTimeout');data.counter--;data.counter<0&&console.warn('haven\'t you missed something ? (off before on)');setTimeout(function(){data.counter===0&&data.$loading.fadeOut(config.speedFadeOut).spin();$.profile&&console.timeEnd('loading.offTimeout');},config.timeout);$.profile&&console.timeEnd('loading.off');break;}
$this.data(config.dataName,data);});return $lastNode;};})(jQuery);
(function($)
{var actualPage=1,actualPosition=1,nbByPage=1,nbTotal=0,nbTotalPage=0,startList=0,endList=0,enabledBackMsgList=false,enabledNextMsgList=true,enabledBackMsg=false,enabledNextMsg=true,typeList=null,idMessage=null,idDiscution=null,listMsg={},usersListForMsg={},nbUserlistMsg=3,msgAnonymous=false;$.CCMMailBox={config:{onInit:function(){},msgList:{useCheckbox:true,getInitData:function(){return(typeof $data.copains.user.msgs.init=='undefined')?false:$data.copains.user.msgs.init;},getUrlBinImg:function(){return $.coredata.user.COMMON_RESOURCE_HOST+'copainsdavant/img/cop_basketM.png';},getUrlSentImg:function(){return null;},getUrlArchiveImg:function(){return $.coredata.user.COMMON_RESOURCE_HOST+'copainsdavant/img/cop_archiveM.png';},deleteInitData:function(){delete $data.copains.user.msgs.init;},getUrlRead:function(){return'/m/_xhr_list_messages/';},template:function(){return'<li class="${ifUnread} jMsgListLine" id=line${typ}${id}>'
+'<div class="inlb padR10 padT20 padB15 inputBox"><input type="checkbox" name="msg${typ}${id}" value=${typ}${id}></div>'
+'<div class="inlb line resumeBox">'
+'${userImg}'
+'<div class="lastBlock">'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage uppercase ft90" title="$l{MESSAGE_READ}">${userLbl}</a>'
+'${listOfUsers}'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage msgTitle ft115 block" title="$l{MESSAGE_READ}">${suj}</a>'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage copNeutre ft90 block" title="$l{MESSAGE_READ}">${ext}</a>'
+'</div>'
+'</div>'
+'<div class="inlb dateBox"><span class="copNeutre uppercase ft90">${dat}</span></div>'
+'</li>';},templateUserImg:function(){return'<div class="bloc imgW50Cter imgS1Cter marR15"><div class="imgS1"><div class="imgW50 sizeSquare" style="background-image: url(${imgSrc})"></div></div></div>';},templateUserLbl:function(){return'${userLbl}';},hookAfterDisplay:function(){}},msg:{allowToAddDest:false,orderAsc:true,includeSubjectInMsg:true,getUrlRead:function(){return'/m/_xhr_read/';},getUrlLogicalDelete:function(){return'/m/_xhr_delete/';},getUrlPhysicalDelete:function(){return'/m/_xhr_delete_physically/';},getUrlDeleteOneMsg:function(){return'';},getUrlSend:function(){return'/m/_xhr_send/';},getUrlBackFromDelete:function(){return'/m/_xhr_back_from_delete/';},getUrlchangeArchive:function(){return'/m/_xhr_update_archive/';},getUrlChangeState:function(){return'/m/_xhr_update_lu/';},getData:function(id){if(typeof id=='undefined'){return $data.copains.user.msgs;}
return $data.copains.user.msgs[id];},updateState:function(id,value){$data.copains.user.msgs[id].unr=value;},templateFormAddDest:function(){return'<form id="newMsg" class="form"><div class="line">'
+'<div class="input multi-user">'
+'<input id="txtUsers" type="text" default="$l{ADD_DEST}" class="inputTxt focus">'
+'</div>'
+'<div style="display: none;" id="divErrorUsers" class="msg txtR"></div>'
+'</div></form>';},templateFormAdd:function(usersListForMsg){nbUser=0;for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{nbUser++;}}
if(nbUser>1){message_reply="$l{MESSAGE_REPLIES}";}else{message_reply="$l{MESSAGE_REPLY}";}
return'<div class="copBox790 pad10 copSepLigneB copSepLigneT line formReply">'
+'<div class="form formError copForm"><form action="#" enctype="">'
+'<fieldset>'
+'<legend>'+message_reply+'</legend>'
+'<div class="input reply line">'
+'<textarea rows="0" cols="20" class="inputTxt focus inlineTxta autoresize inputdefault" default="$l{YOUR_MESSAGE}" id="txtReplyMsg" style="resize: none; overflow-y: hidden;"></textarea>'
+'<div class="btnWrap blueBtn">'
+'<a class="btn replyMsg" href="javascript:void(0);" title="'+message_reply+'">'+message_reply+'</a>'
+'</div>'
+'<div style="display: none;" id="divErrorReplyMsg" class="msg txtR"></div>'
+'</div>'
+'</fieldset>'
+'</form></div>'
+'</div>';},template:function(){return'<li class="jMsgListLine" id=line${typ}${id}>'
+'<div class="right marL15"><span class="copNeutre uppercase ft90">${dat}</span></div>'
+'<div class="lastBlock">'
+'<a href="${userUrl}">'
+'<div class="bloc imgW50Cter imgS1Cter marR15">'
+'<div class="imgS1">'
+'<div class="imgW50 sizeSquare" style="background-image: url(${userImg})"></div>'
+'</div>'
+'</div>'
+'</a>'
+'<div class="lastBlock">'
+'<a class="tinyProfile notip uppercase ft90 msgUser" data-tid=${idu} href="${userUrl}" title="${userLbl}">${userLbl}</a><br>'
+'${listOfUsers}'
+'<h2 class="h5 strong marB5 msgSubject">${suj}</h2>'
+'<p class="marB15">${cor}</p>'
+'</div>'
+'</div>'
+'</li>';},templateDeleteMsg:function(){return'';},templateListUsers:function(){return'<span class="copBox8 block pad5">$l{TO} : ${listUser}</span>';},hookAfterShowData:function(){}},autocomplete:{template:function(){return'<a class="user deleteSelection" data-id="${id}" href="javascript:void(0);">${label} <span class="deleteSelection ico icoClose"></span></a>';},getUrl:function(){return'/m/_xhr_search_users/';}},counter:{handler:function(e,valueBefore,valueAfter,options)
{var $this=$(this);if(valueAfter>0)
{$this.show().parent().addClass('ftBold');}
else{$this.hide().parent().removeClass('ftBold');}}},getDataUser:function(id){if(typeof id=='undefined'){return $data.copains.users;}
if(typeof $data.copains.users[id]=='undefined'){return $.CCMMailBox.config.getUserDefault();}
return $data.copains.users[id];},getUserLib:function(id){if(typeof $data.copains.users[id]=='undefined'){return'';}
return $data.copains.users[id].lib;},getUserUrl:function(id){if(typeof $data.copains.users[id]=='undefined'){return'';}
return $data.copains.users[id].url;},getDataDialog:function(id){if(typeof id=='undefined'){return $data.copains.user.dialog;}
if(typeof $data.copains.user.dialog[id]=='undefined'){return null;}
return $data.copains.user.dialog[id];},updateDataDialog:function(id,value){$data.copains.user.dialog[id]=value;},getIdUser:function(){return $data.copains.user.uid;},getUserDefault:function(){return{img:'/skin/common/img/anonymousS.png',lib:'anonymous',url:'/'};},messageSelector:'div#msgDetails',emptySelector:'div#msgEmpty',unreadCounterSelector:'span.msgNonLu',pageSelector:'div#CCMMailbox',newMsgSelector:'div#newMsg',newMsgForm:'form#newMsg, form#formSendMsg',sentMsgSelector:'div#msgSent',recipientSelector:'div#msgDetails H1',subjectSelector:'',googleAnalyticsEvents:true},$divMsg:null,$divList:null,$divCnt:null,$divEmpty:null,$divNew:null,$formNew:null,$counter:null,$divSent:null,$ulMsgList:null,init:function()
{this.$ulMsgList.loading('On');this.microTemplateInit();var self=this;typeList===null&&(typeList=this.$divList.attr('data-typelist'));this.$divList.delegate('input.checkAll','change',this.msgList.checkAll).delegate('a.action','click',this.msg.actions).delegate('div.inputBox','click',this.msgList.checkLine).delegate('input[type=checkbox][class!=checkAll]','change',this.msgList.checkOne).delegate('a.readMessage, a.nextPage, a.previousPage','click',function(e)
{e.preventDefault();self.dispatch($(this).attr('href'));});this.$divMsg.delegate('a.action','click',this.msg.actions).delegate('a.replyMsg','click',this.msg.reply).delegate('a.backList, a.nextMessage, a.previousMessage','click',function(e)
{e.preventDefault();self.dispatch($(this).attr('href'));});this.$divNew.delegate('a.sendMsg','click',this.msg.send);if(this.$divNew.is(':visible')||this.$formNew.length>0)
{this.autocomplete.initCCMComplete();this.$ulMsgList.loading('Off');this.$formNew.delegate('a.deleteSelection','click',this.autocomplete.deleteSelection);}
this.$counter.bind('counterChanged',this.config.counter.handler);var msgInit=$.CCMMailBox.config.msgList.getInitData();actualPosition=msgInit.page;nbByPage=msgInit.ppage;nbTotal=msgInit.total;nbTotalPage=msgInit.totalpage;if(!this.$divNew.is(':visible')&&this.$formNew.length==0)
{History.Adapter.bind(window,'statechange stateinit',function(e)
{var State=History.getState(),action=State.data.action,id=State.data.id,type=State.data.type,refresh=function()
{if(e.type!=='stateinit')
{$(document).trigger('refresh').trigger('clearTips');}};if(type=='mailbox')
{switch(action)
{case'read':idMessage=id;self.msg.read.call(self,refresh);break;case'page':actualPage=parseInt(id,10);(isNaN(actualPage)||actualPage<1)&&(actualPage=1);self.msgList.read.call(self,refresh);break;case'back':self.msg.back();refresh();break;}}});}
this.msgList.updateData($.CCMMailBox.config.msgList.getInitData());$.CCMMailBox.config.msgList.deleteInitData();var loadFirstPage=true;if(window.location.search.length>0)
{loadFirstPage=this.dispatch(window.location.search,true);}
else{History.replaceState({action:'page',id:1,type:'mailbox'},History.options.initialTitle,window.location.pathname+window.location.search);}
if(loadFirstPage===true)
{var key=(actualPosition-1)*nbByPage,listMsgData=$.CCMMailBox.config.msg.getData();for(var idMsgData in listMsgData)
{if(listMsgData.hasOwnProperty(idMsgData))
{listMsg[key]=idMsgData;key++;}}
$.CCMMailBox.msgList.showData(true);}
$(window).trigger('stateinit');this.config.onInit.call(this);},explodeUrl:function(url)
{var explodedGetDataAnd=url.split('&'),action,id;for(var key in explodedGetDataAnd)
{if(explodedGetDataAnd.hasOwnProperty(key))
{var explodedGetDataEqual=explodedGetDataAnd[key].split('=');explodedGetDataEqual[0]=='action'&&(typeof explodedGetDataEqual[1]!='undefined')&&(action=explodedGetDataEqual[1]);explodedGetDataEqual[0]=='id'&&(typeof explodedGetDataEqual[1]!='undefined')&&(id=explodedGetDataEqual[1]);}}
if(typeof action!='undefined'&&typeof id!='undefined')
{return[action,id];}
return null;},reorderListMsg:function()
{var newListMsg={},newArrayMsg=[];for(var key in listMsg)
{if(listMsg.hasOwnProperty(key))
{newArrayMsg.push(key);}}
newArrayMsg.sort(function sortInteger(a,b)
{return(a-b);});for(var i in newArrayMsg)
{if(newArrayMsg.hasOwnProperty(i))
{newListMsg[newArrayMsg[i]]=listMsg[newArrayMsg[i]];}}
listMsg=newListMsg;},recalculateListMsg:function()
{var newListMsg={},i;for(var key in listMsg)
{if(listMsg.hasOwnProperty(key))
{if(typeof i=='undefined')
{i=(key>=startList)?startList:key;}
else{i++;}
newListMsg[i]=listMsg[key];}}
listMsg=newListMsg;if(typeof i=='undefined'||i<endList)
{$.CCMMailBox.msgList.read();}
else{$.CCMMailBox.msgList.showData();}
$.CCMMailBox.msg.back();},indexOfObject:function(obj,key)
{for(var i in obj)
{if(obj.hasOwnProperty(i))
{if(obj[i]==key)
{return i;}}}
return null;},dispatch:function(url,withReplace)
{url=url.replace(/^(http:\/\/)?([\.a-zA-Z0-9\/])*\??/,'');withReplace=withReplace||false;var fn=withReplace===false?'pushState':'replaceState';if(url.length===0||url=='#')
{History[fn]({action:'back',id:1,type:'mailbox'},History.options.initialTitle,window.location.pathname);return true;}
var dataUrl=$.CCMMailBox.explodeUrl(url);if(dataUrl!==null)
{if(dataUrl[0]=='read'||dataUrl[0]=='page')
{History[fn]({action:dataUrl[0],id:dataUrl[1],type:'mailbox'},History.options.initialTitle,window.location.pathname+'?'+url);return false;}}
History[fn]({action:'back',id:1,type:'mailbox'},History.options.initialTitle,window.location.pathname+window.location.search);return true;},autocomplete:{initCCMComplete:function()
{var $item,$inputUser=$.CCMMailBox.$formNew.find('input#txtUsers').InitInputDefault({isEmpty:function(options){$.core.$fake[0]=this;if($.core.$fake.data('idUsers')&&$.core.$fake.data('idUsers').length>0){return false;}
return options.getValue.call(this,options)===""||options.isDefault.call(this,options);}});$inputUser.keydown(function(event)
{if(event.keyCode===8&&$inputUser.val()==='')
{$item=$('a.deleteSelection:last',$inputUser.parent());if($item)
{$item.click();}}});$inputUser.ccmComplete({anchor:$inputUser.parent(),source:function(req,res)
{var termSearch=req.term.toLowerCase();$.ajax({type:'POST',url:$.CCMMailBox.config.autocomplete.getUrl(),dataType:'json',localCache:true,data:{search:termSearch,xhr:'xhr',listId:$inputUser.data('idUsers')},success:function(data)
{res($.map(data,function(item)
{return{label:item.label,value:item.value,id:item.id};}));}});},minLength:3,select:function(event,ui)
{$.CCMMailBox.autocomplete.addSelection(ui.item.id,ui.item.value);return false;}});},addSelection:function(id,name)
{var $inputUser=$.CCMMailBox.$formNew.find('input#txtUsers');$inputUser.val('');$inputUser.before($.CCMMailBox.getTemplate($.CCMMailBox.config.autocomplete.template(),$.extend({},{label:name,id:id})));var valData=$inputUser.data('idUsers');valData=(typeof valData=='undefined')?[]:valData;valData.push(id);$inputUser.data('idUsers',valData);$.CCMMailBox.autocomplete.refreshInput.call($inputUser);},deleteSelection:function()
{var $this=$(this),$inputUser=$.CCMMailBox.$formNew.find('input#txtUsers'),valData=$inputUser.data('idUsers');for(var key=0;key<valData.length;key++){(valData[key]==$this.attr('data-id'))&&valData.splice(key,1);}
$inputUser.data('idUsers',valData);$this.remove();$.CCMMailBox.autocomplete.refreshInput.call(this);},refreshInput:function()
{var $this=$(this),$parent=$this.parent(),$item=$('a.deleteSelection:last',$parent),childPosition=0,availWidth;if($item&&$item.length>0)
{childPosition=$item.offset().left-$parent.offset().left+$item.outerWidth(true);}
availWidth=$parent.width()-childPosition;$this.width(availWidth);$this.focus();}},msg:{getChecked:function(element)
{var listIds=[];if($.CCMMailBox.$divList.is(':visible'))
{if($.CCMMailBox.config.msgList.useCheckbox)
{$.CCMMailBox.$divList.find('input[name!="select_all"][type=checkbox]:checked').each(function(e,s)
{listIds.push($(s).attr('value'));});}else{listIds=[$(element).closest('.hasId').data('id')];}}
else{listIds=[idMessage];}
return listIds;},loadUserListForMsg:function(msg)
{for(var j in msg.idr)
{!usersListForMsg[msg.idr[j]]&&msg.idr[j]!=$.CCMMailBox.config.getIdUser()&&(usersListForMsg[msg.idr[j]]=true);}},reply:function()
{$.CCMMailBox.$divCnt.loading('On',{label:$.CCMMailBox.getTemplate('$l{ACTION_REPLY}')});$.CCMMailBox.$formNew.hideFormError();var $lastLi=$.CCMMailBox.$divMsg.find('.jMessageList .jMsgListLine .msgUser[data-tid!='+$.CCMMailBox.config.getIdUser()+']').eq(-1).closest('.jMsgListLine'),$textareaMsg=$.CCMMailBox.$divMsg.find('#txtReplyMsg'),dialog=$.CCMMailBox.config.getDataDialog(idDiscution),users='',contentVal;if($lastLi.length===0){$lastLi=$.CCMMailBox.$divMsg.find('.jMessageList .jMsgListLine').eq(-1);}
if($.CCMMailBox.config.msg.allowToAddDest)
{users=$.CCMMailBox.$formNew.find('input#txtUsers').data('idUsers');}else
{users=$lastLi.find('.msgUser').attr('data-tid');}
if($textareaMsg.parent().parent().hasClass('ccmeditorParent')){contentVal=($textareaMsg.ccmEditorIsEmpty())?'':$textareaMsg.html();}else{contentVal=($textareaMsg.val()==$textareaMsg.data('default'))?'':$textareaMsg.val();}
$.ajax({type:'POST',url:$.CCMMailBox.config.msg.getUrlSend(),dataType:'json',data:{users:users,xhr:'xhr',obj:null,msg:contentVal,idDiscution:idDiscution,idMsg:(idDiscution==0)?idMessage:null},complete:function(a,b,response)
{if(b==='success')
{$.CCMMailBox.$divCnt.loading('Off');if(response.success==true)
{if(typeof response.idDiscution!="undefined"){idDiscution=response.idDiscution;dialog=$.CCMMailBox.config.getDataDialog(idDiscution);}
var msg,user=$.CCMMailBox.config.getDataUser($.CCMMailBox.config.getIdUser());$textareaMsg.val('');for(var key=0;key<response.newMsg.length;key++)
{dialog!==null&&dialog.push(response.newMsg[key]);if(typeof user=='undefined'){user=$.CCMMailBox.config.getUserDefault();}
msg=$.CCMMailBox.config.msg.getData(response.newMsg[key]);}
msg.suj='';listUser='';for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{if(id!=msg.idu){listUser+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:id,userLbl:$.CCMMailBox.config.getUserLib(id),userUrl:$.CCMMailBox.config.getUserUrl(id)}))+', ';}
else if(id==$.CCMMailBox.config.getIdUser()){}}}
if(msg.idu!=$.CCMMailBox.config.getIdUser()){listUser+=$.CCMMailBox.langs[$.CCMMailBox.lang].ME+', ';}
var newMsg=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.template(),$.extend({},msg,{userImg:user.img,userLbl:$.CCMMailBox.config.getUserLib(msg.idu),userUrl:$.CCMMailBox.config.getUserUrl(msg.idu),deleteLink:(msg.idu==$.CCMMailBox.config.getIdUser())?$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateDeleteMsg(),$.extend({msgId:msg.id})):'',listOfUsers:$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateListUsers(),$.extend({},{listUser:listUser.slice(0,-2)}))}));if($.CCMMailBox.config.msg.orderAsc){$.CCMMailBox.$divMsg.find('.jMessageList').append(newMsg);}else{$.CCMMailBox.$divMsg.find('.jMessageList').prepend(newMsg);}
if($.CCMMailBox.config.msg.allowToAddDest)
{var $txtUsers=$.CCMMailBox.$formNew.find('input#txtUsers');$.CCMMailBox.msg.loadUserListForMsg(msg);$.CCMMailBox.$divRecipient.html($.CCMMailBox.msg.displayUsersList());$txtUsers.data('idUsers',[]);$.CCMMailBox.$formNew.find('a').remove();$txtUsers.addClass('defaultValue');}
dialog!==null&&$.CCMMailBox.config.updateDataDialog(idDiscution,dialog);}
else{var msgNoSent='';$.each(response.errors,function(k,v)
{$.isArray(v)&&(msgNoSent+='<br>'+v[1]);if(k=='msg')
{$textareaMsg.showInputError(v);}});msgNoSent&&$.note.info($.CCMMailBox.getTemplate('$l{MESSAGE_NOSENT}')+msgNoSent);}}}});},send:function()
{$.CCMMailBox.$divCnt.loading('On',{label:$.CCMMailBox.getTemplate('$l{ACTION_SEND}')});$.CCMMailBox.$formNew.hideFormError();var $inputUsers=$.CCMMailBox.$divNew.find('input#txtUsers'),$inputObj=$.CCMMailBox.$divNew.find('input#txtSubject'),$textareaMsg=$.CCMMailBox.$divNew.find('#txtContent'),contentVal;if($textareaMsg.parent().parent().hasClass('ccmeditorParent')){contentVal=($textareaMsg.ccmEditorIsEmpty())?'':$textareaMsg.html();}else{contentVal=($textareaMsg.val()==$textareaMsg.data('default'))?'':$textareaMsg.val();}
$.ajax({type:'POST',url:$.CCMMailBox.config.msg.getUrlSend(),dataType:'json',data:{users:$inputUsers.data('idUsers'),xhr:'xhr',obj:($inputObj.val()==$inputObj.data('default'))?'':$inputObj.val(),msg:contentVal},complete:function(a,b,response)
{if(b==='success')
{$.CCMMailBox.$divCnt.loading('Off');if($.CCMMailBox.config.googleAnalyticsEvents===true)
{$.googleEvents.send('CCMmailBox','send');}
if(response.success==true)
{$textareaMsg.val('');$.CCMMailBox.$divSent.show();$.CCMMailBox.$divNew.hide();}
else
{var msgNoSent='';$.each(response.errors,function(k,v)
{$.isArray(v)&&(msgNoSent+='<br>'+v[1]);switch(k)
{case'users':$inputUsers.showInputError(v);break;case'obj':$inputObj.showInputError(v);break;case'msg':$textareaMsg.showInputError(v);break;}});msgNoSent&&$.note.info($.CCMMailBox.getTemplate('$l{MESSAGE_NOSENT}')+msgNoSent);}}}});},actions:function()
{var listIds=$.CCMMailBox.msg.getChecked(this),msg='',idMsg=0,url='',label='',changeUnread='no',changeList=false,changeMsg=false,needValidation=false,extraData={},action=$(this).attr('data-action'),newValueUnread=0,match,txtValidation,titleValidation,dialog;switch(action)
{case'deleteOneMsg':url=$.CCMMailBox.config.msg.getUrlDeleteOneMsg();label='$l{ACTION_DELETE_ONE_MSG}';needValidation=true;txtValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TXT_VALIDATION_PHYSICALDELETE;titleValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TITLE_VALIDATION_DELETE;extraData={msgIdToDel:$(this).attr('data-msgid')};changeMsg=true;break;case'delete':url=$.CCMMailBox.config.msg.getUrlLogicalDelete();changeUnread='-';label='$l{ACTION_DELETE}';needValidation=true;txtValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TXT_VALIDATION_DELETE;titleValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TITLE_VALIDATION_DELETE;changeList=true;break;case'physicalDelete':url=$.CCMMailBox.config.msg.getUrlPhysicalDelete();changeUnread='-';label='$l{ACTION_PHYSICALDELETE}';needValidation=true;txtValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TXT_VALIDATION_PHYSICALDELETE;titleValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TITLE_VALIDATION_DELETE;changeList=true;break;case'archive':url=$.CCMMailBox.config.msg.getUrlchangeArchive();changeUnread='+';label='$l{ACTION_ARCHIVE}';extraData={'toArchive':true};changeList=true;break;case'unread':url=$.CCMMailBox.config.msg.getUrlChangeState();changeUnread='+';label='$l{ACTION_UNREAD}';extraData={'toRead':false};break;case'read':url=$.CCMMailBox.config.msg.getUrlChangeState();changeUnread='-';label='$l{ACTION_READ}';extraData={'toRead':true};break;case'backDelete':url=$.CCMMailBox.config.msg.getUrlBackFromDelete();changeUnread='+';label='$l{ACTION_BACKDELETE}';changeList=true;break;case'backArchive':url=$.CCMMailBox.config.msg.getUrlchangeArchive();changeUnread='+';label='$l{ACTION_BACKARCHIVE}';extraData={'toArchive':false};changeList=true;break;default:return'Error';}
listIds.length==0&&$.note.info($.CCMMailBox.getTemplate('$l{CHECKBOX_EMPTY}'),{delay:3000});if(listIds.length>=1)
{var functionAction=function()
{$.CCMMailBox.$divCnt.loading('On',{label:$.CCMMailBox.getTemplate(label)});$.ajax({type:'POST',url:url,dataType:'json',data:$.extend({idsMessage:listIds,xhr:'xhr'},extraData),complete:function(a,b,response)
{if(b==='success'&&response!==false)
{$.CCMMailBox.$divCnt.loading('Off');for(var key=0;key<listIds.length;key++)
{idMsg=listIds[key];msg=$.CCMMailBox.config.msg.getData(idMsg);if(changeUnread!='no'&&(msg.unr==true||(msg.unr==false&&action=='unread'))&&$.CCMMailBox.$counter.length!=0)
{newValueUnread++;msg.unr=(changeUnread==='+');$.CCMMailBox.msg.updateStateDOM(changeUnread==='-',idMsg);}
if(changeList===true)
{delete listMsg[parseInt($.CCMMailBox.indexOfObject(listMsg,idMsg),10)];nbTotal--;}
if(changeMsg&&idDiscution!==null)
{dialog=$.CCMMailBox.config.getDataDialog(idDiscution);for(var i in dialog)
{dialog[i]==extraData.msgIdToDel&&delete dialog[i];}}}
if(typeof response.um!='undefined')
{$.CCMMailBox.$counter.counterValue()!=response.um&&$.CCMMailBox.$counter.trigger('counterChange',{limit:{min:0},value:response.um});}
if(changeList===true)
{nbTotalPage=Math.ceil(nbTotal/nbByPage);actualPage=(actualPage>nbTotalPage)?nbTotalPage:actualPage;$.CCMMailBox.msgList.getStartAndEnd();$.CCMMailBox.recalculateListMsg();}
if(changeMsg){$.CCMMailBox.msg.read.apply($.CCMMailBox);}}}});};if(needValidation==false)
{functionAction();}
else{var $divModal=$('div#divModal');$divModal.remove();var buttons={};buttons[$.CCMMailBox.langs[$.CCMMailBox.lang].CONFIRMATION_WORD_NO]=function(){$divModal.dialog('close');};buttons[$.CCMMailBox.langs[$.CCMMailBox.lang].CONFIRMATION_WORD_YES]=function(){functionAction();$divModal.dialog('close');};$divModal=$('<div id="divModal" class="modalS_content" title="'+titleValidation+'"></div>');$('div.body').append($divModal);$divModal.html(txtValidation).dialog({width:'600px',resizable:false,dialogClass:'modalS',modal:true,buttons:buttons});}}},updateState:function(uToR,idMsg)
{uToR=uToR||true;idMsg=idMsg||idMessage;var dialog=$.CCMMailBox.config.getDataDialog(idDiscution),msgData=$.CCMMailBox.config.msg.getData(),newValue=0,msg,counterValue;for(var i in dialog)
{if(dialog.hasOwnProperty(i))
{msg=msgData[dialog[i]];if(msg.typ=='r'&&msg.unr==uToR)
{$.CCMMailBox.config.msg.updateState(dialog[i],!uToR);$.CCMMailBox.msg.updateStateDOM(uToR,dialog[i]);}}}
if($.CCMMailBox.$counter.length!=0)
{counterValue=$.CCMMailBox.$counter.counterValue();$.CCMMailBox.$counter.trigger('counterChange',{limit:{min:0},value:(uToR===true)?counterValue-1:counterValue+1});}},updateStateDOM:function(uToR,idMsg)
{if(uToR==true)
{$('#line'+idMsg).removeClass('noRead');}else{$('#line'+idMsg).addClass('noRead');}},read:function(handler)
{handler=handler||function(){};var msgData=this.config.msg.getData(),self=this,previousNextLinks=true;$('body').scrollTo(0);actualPosition=parseInt(this.indexOfObject(listMsg,idMessage),10);if(isNaN(actualPosition))
{var key=0,listMsgData=$.CCMMailBox.config.msg.getData();for(var idMsgData in listMsgData)
{if(listMsgData.hasOwnProperty(idMsgData))
{listMsg[key]=idMsgData;key++;}}
previousNextLinks=false;}
else
{if(actualPosition>endList||actualPosition<startList)
{actualPosition>endList&&actualPage++;actualPosition<startList&&actualPage--;}}
this.msgList.showData();if(msgData.hasOwnProperty(idMessage)===false||msgData[idMessage].hasOwnProperty('cor')===false)
{this.$divCnt.loading('On',{label:this.getTemplate('$l{ACTION_READ_MSG}')});$.ajax({type:'POST',url:this.config.msg.getUrlRead(),dataType:'json',data:{idMessage:idMessage,xhr:'xhr'},complete:function(a,b,response)
{if(b==='success')
{self.$divCnt.loading('Off');self.msg.showData(previousNextLinks);}
handler();}});}
else
{this.msg.showData(previousNextLinks);handler();}},displayUsersList:function(nb,extra)
{nb=nb||2;var list={},i=1,text='',userSup=0,idUser=$.CCMMailBox.config.getIdUser();if(!$.isEmptyObject(usersListForMsg))
{list=usersListForMsg;}
else
{list[idUser]=$.CCMMailBox.config.getDataUser(idUser);}
for(var id in list)
{if(list.hasOwnProperty(id))
{if(i<=nb)
{text+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:id,userLbl:$.CCMMailBox.config.getUserLib(id),userUrl:$.CCMMailBox.config.getUserUrl(id)}))+', ';}
else
{userSup++;}
i++;}}
text=text.slice(0,-2);if(userSup>0)
{text+=$.CCMMailBox.getTemplate(userSup>1?$.CCMMailBox.langs[$.CCMMailBox.lang].OTHERS_USERS:$.CCMMailBox.langs[$.CCMMailBox.lang].OTHER_USER,{nbUser:userSup});}
return text;},showData:function(previousNextMessage)
{var msgData=$.CCMMailBox.config.msg.getData(),listMsg=$.CCMMailBox.$divMsg.find('.jMessageList');usersListForMsg={};if($.CCMMailBox.$divList.is(':visible'))
{$.CCMMailBox.$divList.hide();$.CCMMailBox.$divMsg.show();}
idDiscution=(msgData[idMessage].idm==null)?msgData[idMessage].id:msgData[idMessage].idm;$.CCMMailBox.msgList.getStartAndEnd();listMsg.find('.jMsgListLine').remove();$.CCMMailBox.$divMsg.find('div.formReply').remove();$.CCMMailBox.config.msg.allowToAddDest&&$.CCMMailBox.$divMsg.find('form#newMsg').remove();listMsg.html($($.CCMMailBox.msg.display()));if(msgData[idMessage].hasOwnProperty('idu')!==false)
{$.CCMMailBox.$divRecipient.html($.CCMMailBox.msg.displayUsersList());}
$.CCMMailBox.config.subjectSelector&&msgData[idDiscution].suj&&$.CCMMailBox.$divMsg.find($.CCMMailBox.config.subjectSelector).html(msgData[idDiscution].suj);if(typeList=='inbox'&&msgAnonymous!==true)
{var replyForm='';$.CCMMailBox.config.msg.allowToAddDest&&(replyForm=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateFormAddDest()));replyForm+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateFormAdd(usersListForMsg),{idu:$.CCMMailBox.config.getIdUser(),userLbl:$.CCMMailBox.config.getUserLib($.CCMMailBox.config.getIdUser()),userUrl:$.CCMMailBox.config.getUserUrl($.CCMMailBox.config.getIdUser()),userImg:$.CCMMailBox.config.getDataUser($.CCMMailBox.config.getIdUser()).img});if($.CCMMailBox.config.msg.orderAsc){listMsg.after(replyForm);}else{listMsg.before(replyForm);}
if($.CCMMailBox.config.msg.allowToAddDest){$.CCMMailBox.$formNew=$.CCMMailBox.$divMsg.find($.CCMMailBox.config.newMsgForm);$.CCMMailBox.autocomplete.initCCMComplete();$.CCMMailBox.$formNew.delegate('a.deleteSelection','click',$.CCMMailBox.autocomplete.deleteSelection);}}
if(nbTotal==1||previousNextMessage==false)
{$('div.actualMessage').hide();}
else{$('div.actualMessage').show();var $previousMsg=$('a.previousMessage'),$nextMsg=$('a.nextMessage');enabledBackMsg=(actualPosition!=0);enabledNextMsg=(actualPosition!=(nbTotal-1));if(enabledBackMsg)
{$previousMsg.removeClass('disabled');$.CCMMailBox.msg.previousIdMessage(function(idPrevious)
{typeof idPrevious!='undefined'&&$previousMsg.attr('href','?action=read&id='+idPrevious);});}else{$previousMsg.addClass('disabled');}
if(enabledNextMsg)
{$nextMsg.removeClass('disabled');$.CCMMailBox.msg.nextIdMessage(function(idNext)
{typeof idNext!='undefined'&&$nextMsg.attr('href','?action=read&id='+idNext);});}else{$nextMsg.addClass('disabled');}}
if(typeList=='inbox'&&msgData[idMessage].hasOwnProperty('unr')!==false&&msgData[idMessage].unr===true)
{$.CCMMailBox.msg.updateState(true);}
$.CCMMailBox.config.msg.hookAfterShowData();},back:function()
{if($.CCMMailBox.$divMsg.is(':visible'))
{$.CCMMailBox.$divList.show();$.CCMMailBox.$divMsg.hide();}},nextIdMessage:function(handler)
{handler=handler||function(){};var newIdMessage;if(enabledNextMsg)
{if(typeof listMsg[parseInt(actualPosition+1,10)]=='undefined')
{$.CCMMailBox.msgList.load(actualPage+1,function()
{newIdMessage=listMsg[parseInt(actualPosition+1,10)];handler.call(this,newIdMessage);},{loadMsg:true});return;}
newIdMessage=listMsg[parseInt(actualPosition+1,10)];handler.call(this,newIdMessage);}
return newIdMessage;},previousIdMessage:function(handler)
{handler=handler||function(){};var previousIdMessage;if(enabledBackMsg)
{if(typeof listMsg[parseInt(actualPosition-1,10)]=='undefined')
{$.CCMMailBox.msgList.load(actualPage-1,function()
{previousIdMessage=listMsg[parseInt(actualPosition+1,10)];handler.call(this,previousIdMessage);},{loadMsg:true});return;}
previousIdMessage=listMsg[parseInt(actualPosition-1,10)];handler.call(this,previousIdMessage);}
return previousIdMessage;},display:function()
{var msg=$.CCMMailBox.config.msg.getData(),user=$.CCMMailBox.config.getDataUser(),dialog,msgTmp,titleUsed=false,display='';idDiscution!==null&&(dialog=$.CCMMailBox.config.getDataDialog(idDiscution));if(typeof dialog=='undefined'||dialog===null)
{dialog=[];dialog[0]=idMessage;}
for(var i in dialog)
{msgTmp=msg[dialog[i]];if(typeof msgTmp!='undefined')
{$.CCMMailBox.msg.loadUserListForMsg(msgTmp);if(msgTmp.typ=='r'||(msgTmp.typ=='e'&&msgTmp.idu!=msgTmp.ido))
{if(typeof user[msgTmp.idu]=='undefined')
{user[msgTmp.idu]=$.CCMMailBox.config.getUserDefault();msgAnonymous=true;}else{msgAnonymous=false;}
if($.CCMMailBox.config.msg.includeSubjectInMsg){if(titleUsed===false)
{titleUsed=true;}
else
{msgTmp.suj='';}}
listUser='';for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{if(id!=msgTmp.idu){listUser+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:id,userLbl:$.CCMMailBox.config.getUserLib(id),userUrl:$.CCMMailBox.config.getUserUrl(id)}))+', ';}
else if(id==$.CCMMailBox.config.getIdUser()){}}}
if(msgTmp.idu!=$.CCMMailBox.config.getIdUser()){listUser+=$.CCMMailBox.langs[$.CCMMailBox.lang].ME+', ';}
display+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.template(),$.extend({},msgTmp,{userImg:user[msgTmp.idu].img,userLbl:$.CCMMailBox.config.getUserLib(msgTmp.idu),userUrl:$.CCMMailBox.config.getUserUrl(msgTmp.idu),deleteLink:(msgTmp.idu==$.CCMMailBox.config.getIdUser())?$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateDeleteMsg(),$.extend({msgId:msgTmp.id})):'',listOfUsers:$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateListUsers(),$.extend({},{listUser:listUser.slice(0,-2)}))}));}}}
return display;}},msgList:{checkLine:function()
{var $li=$(this).closest('.jMsgListLine'),$checkbox=$li.find('input[type=checkbox]');if($li.hasClass('itemChecked'))
{$checkbox.removeAttr('checked');$li.removeClass('itemChecked');}
else{$checkbox.attr('checked','checked');$li.addClass('itemChecked');}},showData:function(trustCounter)
{trustCounter=trustCounter||false;$.CCMMailBox.msgList.getStartAndEnd();if(nbTotal==0)
{$.CCMMailBox.$divMsg.hide();$.CCMMailBox.$divList.hide();$.CCMMailBox.$divEmpty.show();}
if(trustCounter===false)
{var $counterTotal=$.CCMMailBox.$divList.find('span.pageTotale');$.CCMMailBox.$divList.find('span.pageActuelle').trigger('counterChange',{limit:{min:1,max:nbTotalPage},value:actualPage});if(parseInt($counterTotal.html(),10)!=nbTotalPage)
{$counterTotal.trigger('counterChange',{limit:{min:1,max:nbTotalPage},value:nbTotalPage});}}
$.CCMMailBox.msgList.updateDOM();},load:function(page,handler,data)
{handler=handler||function(){};data=data||{};page=page||actualPage;(isNaN(page)||page<1)&&(page=1);if(typeof listMsg[(page*nbByPage)-1]=='undefined')
{$.ajax({type:'POST',url:$.CCMMailBox.config.msgList.getUrlRead(),dataType:'json',data:$.extend({typeL:typeList,xhr:'xhr',page:page},data),complete:function(a,b,response)
{if(b==='success')
{$.CCMMailBox.msgList.updateData(response);handler.call(this,response);}}});}else{handler.call();}},read:function(handler)
{handler=handler||function(){};$('body').scrollTo(0);$.CCMMailBox.msg.back();$.CCMMailBox.msgList.load(actualPage,function(){$.CCMMailBox.msgList.showData();handler();});},getStartAndEnd:function()
{startList=((actualPage)-1)*(nbByPage);endList=(actualPage)*(nbByPage)>nbTotal?nbTotal-1:((actualPage)*(nbByPage))-1;},updateData:function(response)
{nbTotalPage=response.totalpage;nbTotal=response.total;nbByPage=response.ppage;typeof response.listMsg!='undefined'&&$.extend(listMsg,response.listMsg)&&$.CCMMailBox.reorderListMsg();},updateDOM:function()
{var $previousPage=$('a.previousPage'),$nextPage=$('a.nextPage');$.CCMMailBox.$ulMsgList.find('.jMsgListLine').remove();$.CCMMailBox.$ulMsgList.html($.CCMMailBox.msgList.display());$.CCMMailBox.config.msgList.hookAfterDisplay();$.CCMMailBox.$divList.find('input[type=checkbox]').removeAttr('checked');enabledBackMsgList=(actualPage!=1);enabledNextMsgList=(actualPage!=nbTotalPage);if(enabledBackMsgList)
{$previousPage.removeClass('disabled');$previousPage.attr('href','?action=page&id='+(actualPage-1));}else{$previousPage.addClass('disabled');}
if(enabledNextMsgList)
{$nextPage.removeClass('disabled');$nextPage.attr('href','?action=page&id='+(actualPage+1));}else{$nextPage.addClass('disabled');}
nbTotalPage==1&&$('div.actualPage').hide();},display:function()
{var user=null,msg=null,imgTag=null,imgSrc=null,html='';for(var key=startList;key<=endList;key++)
{msg=$.CCMMailBox.config.msg.getData(listMsg[key]);user=$.CCMMailBox.config.getDataUser(msg.idu);typeof user=='undefined'&&(user=$.CCMMailBox.config.getUserDefault());var userLbl=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:msg.idu,userLbl:$.CCMMailBox.config.getUserLib(msg.idu),userUrl:$.CCMMailBox.config.getUserUrl(msg.idu)}));if(msg.idr)
{var i=0,max=0;for(max=msg.idr.length,i=0;(i<nbUserlistMsg&&i<max);++i)
{if(msg.idr[i]==msg.idu){continue;}
userLbl+=', '+$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:msg.idr[i],userLbl:$.CCMMailBox.config.getUserLib(msg.idr[i]),userUrl:$.CCMMailBox.config.getUserUrl(msg.idr[i])}));}
max>nbUserlistMsg&&(userLbl+='...');}
imgSrc=user.img;typeList=='bin'&&(imgSrc=$.CCMMailBox.config.msgList.getUrlBinImg());typeList=='sent'&&(imgSrc=$.CCMMailBox.config.msgList.getUrlSentImg());typeList=='archive'&&(imgSrc=$.CCMMailBox.config.msgList.getUrlArchiveImg());imgTag=(imgSrc!=null)?$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserImg(),$.extend({},{imgSrc:imgSrc})):'';html+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.template(),$.extend({},msg,{userImg:imgTag,userLbl:userLbl,userUrl:$.CCMMailBox.config.getUserUrl(msg.idu),ifUnread:msg.unr==true?'noRead':''}));}
return html;},checkAll:function()
{var $itemCheckList=$(this).closest('.cntMsg').find('input[type=checkbox]');if(typeof $(this).attr('checked')!='undefined')
{$itemCheckList.attr('checked','checked').closest('.jMsgListLine').addClass('itemChecked');}
else{$itemCheckList.removeAttr('checked').closest('.jMsgListLine').removeClass('itemChecked');}},checkOne:function()
{$(this).closest('.cntMsg').find('input.checkAll').removeAttr('checked');}}};$.extend($.CCMMailBox,$.microTemplate);$.fn.CCMMailBox=function(config)
{$.extend(true,$.CCMMailBox.config,config);$.CCMMailBox.$divList=$(this);$.CCMMailBox.$divMsg=$($.CCMMailBox.config.messageSelector);$.CCMMailBox.$divRecipient=$($.CCMMailBox.config.recipientSelector);$.CCMMailBox.$divCnt=$($.CCMMailBox.config.pageSelector);$.CCMMailBox.$counter=$($.CCMMailBox.config.unreadCounterSelector);$.CCMMailBox.$divEmpty=$($.CCMMailBox.config.emptySelector);$.CCMMailBox.$divNew=$($.CCMMailBox.config.newMsgSelector);$.CCMMailBox.$formNew=$($.CCMMailBox.config.newMsgForm);$.CCMMailBox.$divSent=$($.CCMMailBox.config.sentMsgSelector);$.CCMMailBox.$ulMsgList=$.CCMMailBox.$divList.find('.jMessageList');$.CCMMailBox.init();return this;};})(jQuery);(function($)
{var actualPage=1,actualPosition=1,nbByPage=1,nbTotal=0,nbTotalPage=0,startList=0,endList=0,enabledBackMsgList=false,enabledNextMsgList=true,enabledBackMsg=false,enabledNextMsg=true,typeList=null,idMessage=null,idDiscution=null,listMsg={},usersListForMsg={},nbUserlistMsg=3,msgAnonymous=false;$.CCMMailBox={config:{onInit:function(){},msgList:{useCheckbox:true,getInitData:function(){return(typeof $data.copains.user.msgs.init=='undefined')?false:$data.copains.user.msgs.init;},getUrlBinImg:function(){return $.coredata.user.COMMON_RESOURCE_HOST+'copainsdavant/img/cop_basketM.png';},getUrlSentImg:function(){return null;},getUrlArchiveImg:function(){return $.coredata.user.COMMON_RESOURCE_HOST+'copainsdavant/img/cop_archiveM.png';},deleteInitData:function(){delete $data.copains.user.msgs.init;},getUrlRead:function(){return'/m/_xhr_list_messages/';},template:function(){return'<li class="${ifUnread} jMsgListLine" id=line${typ}${id}>'
+'<div class="inlb padR10 padT20 padB15 inputBox"><input type="checkbox" name="msg${typ}${id}" value=${typ}${id}></div>'
+'<div class="inlb line resumeBox">'
+'${userImg}'
+'<div class="lastBlock">'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage uppercase ft90" title="$l{MESSAGE_READ}">${userLbl}</a>'
+'${listOfUsers}'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage msgTitle ft115 block" title="$l{MESSAGE_READ}">${suj}</a>'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage copNeutre ft90 block" title="$l{MESSAGE_READ}">${ext}</a>'
+'</div>'
+'</div>'
+'<div class="inlb dateBox"><span class="copNeutre uppercase ft90">${dat}</span></div>'
+'</li>';},templateUserImg:function(){return'<div class="bloc imgW50Cter imgS1Cter marR15"><div class="imgS1"><div class="imgW50 sizeSquare" style="background-image: url(${imgSrc})"></div></div></div>';},templateUserLbl:function(){return'${userLbl}';},hookAfterDisplay:function(){}},msg:{allowToAddDest:false,orderAsc:true,includeSubjectInMsg:true,getUrlRead:function(){return'/m/_xhr_read/';},getUrlLogicalDelete:function(){return'/m/_xhr_delete/';},getUrlPhysicalDelete:function(){return'/m/_xhr_delete_physically/';},getUrlDeleteOneMsg:function(){return'';},getUrlSend:function(){return'/m/_xhr_send/';},getUrlBackFromDelete:function(){return'/m/_xhr_back_from_delete/';},getUrlchangeArchive:function(){return'/m/_xhr_update_archive/';},getUrlChangeState:function(){return'/m/_xhr_update_lu/';},getData:function(id){if(typeof id=='undefined'){return $data.copains.user.msgs;}
return $data.copains.user.msgs[id];},updateState:function(id,value){$data.copains.user.msgs[id].unr=value;},templateFormAddDest:function(){return'<form id="newMsg" class="form"><div class="line">'
+'<div class="input multi-user">'
+'<input id="txtUsers" type="text" placeholder="$l{ADD_DEST}" class="inputTxt focus">'
+'</div>'
+'<div style="display: none;" id="divErrorUsers" class="msg txtR"></div>'
+'</div></form>';},templateFormAdd:function(usersListForMsg){nbUser=0;for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{nbUser++;}}
if(nbUser>1){message_reply="$l{MESSAGE_REPLIES}";}else{message_reply="$l{MESSAGE_REPLY}";}
return'<div class="copBox790 pad10 copSepLigneB copSepLigneT line formReply">'
+'<div class="form formError copForm"><form action="#" enctype="">'
+'<fieldset>'
+'<legend>'+message_reply+'</legend>'
+'<div class="input reply line">'
+'<textarea rows="0" cols="20" class="inputTxt focus inlineTxta autoresize" placeholder="$l{YOUR_MESSAGE}" id="txtReplyMsg" style="resize: none; overflow-y: hidden;"></textarea>'
+'<div class="btnWrap blueBtn">'
+'<a class="btn replyMsg" href="javascript:void(0);" title="'+message_reply+'">'+message_reply+'</a>'
+'</div>'
+'<div style="display: none;" id="divErrorReplyMsg" class="msg txtR"></div>'
+'</div>'
+'</fieldset>'
+'</form></div>'
+'</div>';},template:function(){return'<li class="jMsgListLine" id=line${typ}${id}>'
+'<div class="right marL15"><span class="copNeutre uppercase ft90">${dat}</span></div>'
+'<div class="lastBlock">'
+'<a href="${userUrl}">'
+'<div class="bloc imgW50Cter imgS1Cter marR15">'
+'<div class="imgS1">'
+'<div class="imgW50 sizeSquare" style="background-image: url(${userImg})"></div>'
+'</div>'
+'</div>'
+'</a>'
+'<div class="lastBlock">'
+'<a class="tinyProfile notip uppercase ft90 msgUser" data-tid=${idu} href="${userUrl}" title="${userLbl}">${userLbl}</a><br>'
+'${listOfUsers}'
+'<h2 class="h5 strong marB5 msgSubject">${suj}</h2>'
+'<p class="marB15">${cor}</p>'
+'</div>'
+'</div>'
+'</li>';},templateDeleteMsg:function(){return'';},templateListUsers:function(){return'<span class="copBox8 block pad5">$l{TO} : ${listUser}</span>';},hookAfterShowData:function(){}},autocomplete:{template:function(){return'<a class="user deleteSelection" data-id="${id}" href="javascript:void(0);">${label} <span class="deleteSelection ico icoClose"></span></a>';},getUrl:function(){return'/m/_xhr_search_users/';}},counter:{handler:function(e,valueBefore,valueAfter,options)
{var $this=$(this);if(valueAfter>0)
{$this.show().parent().addClass('ftBold');}
else{$this.hide().parent().removeClass('ftBold');}}},getDataUser:function(id){if(typeof id=='undefined'){return $data.copains.users;}
if(typeof $data.copains.users[id]=='undefined'){return $.CCMMailBox.config.getUserDefault();}
return $data.copains.users[id];},getUserLib:function(id){if(typeof $data.copains.users[id]=='undefined'){return'';}
return $data.copains.users[id].lib;},getUserUrl:function(id){if(typeof $data.copains.users[id]=='undefined'){return'';}
return $data.copains.users[id].url;},getDataDialog:function(id){if(typeof id=='undefined'){return $data.copains.user.dialog;}
if(typeof $data.copains.user.dialog[id]=='undefined'){return null;}
return $data.copains.user.dialog[id];},updateDataDialog:function(id,value){$data.copains.user.dialog[id]=value;},getIdUser:function(){return $data.copains.user.uid;},getUserDefault:function(){return{img:'/skin/common/img/anonymousS.png',lib:'anonymous',url:'/'};},messageSelector:'div#msgDetails',emptySelector:'div#msgEmpty',unreadCounterSelector:'span.msgNonLu',pageSelector:'div#CCMMailbox',newMsgSelector:'div#newMsg',newMsgForm:'form#newMsg, form#formSendMsg',sentMsgSelector:'div#msgSent',recipientSelector:'div#msgDetails H1',subjectSelector:'',googleAnalyticsEvents:true},$divMsg:null,$divList:null,$divCnt:null,$divEmpty:null,$divNew:null,$formNew:null,$counter:null,$divSent:null,$ulMsgList:null,init:function()
{this.$ulMsgList.loading('On');this.microTemplateInit();var self=this;typeList===null&&(typeList=this.$divList.attr('data-typelist'));this.$divList.delegate('input.checkAll','change',this.msgList.checkAll).delegate('a.action','click',this.msg.actions).delegate('div.inputBox','click',this.msgList.checkLine).delegate('input[type=checkbox][class!=checkAll]','change',this.msgList.checkOne).delegate('a.readMessage, a.nextPage, a.previousPage','click',function(e)
{e.preventDefault();self.dispatch($(this).attr('href'));});this.$divMsg.delegate('a.action','click',this.msg.actions).delegate('a.replyMsg','click',this.msg.reply).delegate('a.backList, a.nextMessage, a.previousMessage','click',function(e)
{e.preventDefault();self.dispatch($(this).attr('href'));});this.$divNew.delegate('a.sendMsg','click',this.msg.send);if(this.$divNew.is(':visible')||this.$formNew.length>0)
{this.autocomplete.initCCMComplete();this.$ulMsgList.loading('Off');this.$formNew.delegate('a.deleteSelection','click',this.autocomplete.deleteSelection);}
this.$counter.bind('counterChanged',this.config.counter.handler);var msgInit=$.CCMMailBox.config.msgList.getInitData();actualPosition=msgInit.page;nbByPage=msgInit.ppage;nbTotal=msgInit.total;nbTotalPage=msgInit.totalpage;if(!this.$divNew.is(':visible')&&this.$formNew.length==0)
{History.Adapter.bind(window,'statechange stateinit',function(e)
{var State=History.getState(),action=State.data.action,id=State.data.id,type=State.data.type,refresh=function()
{if(e.type!=='stateinit')
{$(document).trigger('refresh').trigger('clearTips');}};if(type=='mailbox')
{switch(action)
{case'read':idMessage=id;self.msg.read.call(self,refresh);break;case'page':actualPage=parseInt(id,10);(isNaN(actualPage)||actualPage<1)&&(actualPage=1);self.msgList.read.call(self,refresh);break;case'back':self.msg.back();refresh();break;}}});}
this.msgList.updateData($.CCMMailBox.config.msgList.getInitData());$.CCMMailBox.config.msgList.deleteInitData();var loadFirstPage=true;if(window.location.search.length>0)
{loadFirstPage=this.dispatch(window.location.search,true);}
else{History.replaceState({action:'page',id:1,type:'mailbox'},History.options.initialTitle,window.location.pathname+window.location.search);}
if(loadFirstPage===true)
{var key=(actualPosition-1)*nbByPage,listMsgData=$.CCMMailBox.config.msg.getData();for(var idMsgData in listMsgData)
{if(listMsgData.hasOwnProperty(idMsgData))
{listMsg[key]=idMsgData;key++;}}
$.CCMMailBox.msgList.showData(true);}
$(window).trigger('stateinit');this.config.onInit.call(this);},explodeUrl:function(url)
{var explodedGetDataAnd=url.split('&'),action,id;for(var key in explodedGetDataAnd)
{if(explodedGetDataAnd.hasOwnProperty(key))
{var explodedGetDataEqual=explodedGetDataAnd[key].split('=');explodedGetDataEqual[0]=='action'&&(typeof explodedGetDataEqual[1]!='undefined')&&(action=explodedGetDataEqual[1]);explodedGetDataEqual[0]=='id'&&(typeof explodedGetDataEqual[1]!='undefined')&&(id=explodedGetDataEqual[1]);}}
if(typeof action!='undefined'&&typeof id!='undefined')
{return[action,id];}
return null;},reorderListMsg:function()
{var newListMsg={},newArrayMsg=[];for(var key in listMsg)
{if(listMsg.hasOwnProperty(key))
{newArrayMsg.push(key);}}
newArrayMsg.sort(function sortInteger(a,b)
{return(a-b);});for(var i in newArrayMsg)
{if(newArrayMsg.hasOwnProperty(i))
{newListMsg[newArrayMsg[i]]=listMsg[newArrayMsg[i]];}}
listMsg=newListMsg;},recalculateListMsg:function()
{var newListMsg={},i;for(var key in listMsg)
{if(listMsg.hasOwnProperty(key))
{if(typeof i=='undefined')
{i=(key>=startList)?startList:key;}
else{i++;}
newListMsg[i]=listMsg[key];}}
listMsg=newListMsg;if(typeof i=='undefined'||i<endList)
{$.CCMMailBox.msgList.read();}
else{$.CCMMailBox.msgList.showData();}
$.CCMMailBox.msg.back();},indexOfObject:function(obj,key)
{for(var i in obj)
{if(obj.hasOwnProperty(i))
{if(obj[i]==key)
{return i;}}}
return null;},dispatch:function(url,withReplace)
{url=url.replace(/^(http:\/\/)?([\.a-zA-Z0-9\/])*\??/,'');withReplace=withReplace||false;var fn=withReplace===false?'pushState':'replaceState';if(url.length===0||url=='#')
{History[fn]({action:'back',id:1,type:'mailbox'},History.options.initialTitle,window.location.pathname);return true;}
var dataUrl=$.CCMMailBox.explodeUrl(url);if(dataUrl!==null)
{if(dataUrl[0]=='read'||dataUrl[0]=='page')
{History[fn]({action:dataUrl[0],id:dataUrl[1],type:'mailbox'},History.options.initialTitle,window.location.pathname+'?'+url);return false;}}
History[fn]({action:'back',id:1,type:'mailbox'},History.options.initialTitle,window.location.pathname+window.location.search);return true;},autocomplete:{initCCMComplete:function()
{var $item,$inputUser=$.CCMMailBox.$formNew.find('input#txtUsers');$inputUser.keydown(function(event)
{if(event.keyCode===8&&$inputUser.val()==='')
{$item=$('a.deleteSelection:last',$inputUser.parent());if($item)
{$item.click();}}});$inputUser.ccmComplete({anchor:$inputUser.parent(),source:function(req,res)
{var termSearch=req.term.toLowerCase();$.ajax({type:'POST',url:$.CCMMailBox.config.autocomplete.getUrl(),dataType:'json',localCache:true,data:{search:termSearch,xhr:'xhr',listId:$inputUser.data('idUsers')},success:function(data)
{res($.map(data,function(item)
{return{label:item.label,value:item.value,id:item.id};}));}});},minLength:3,select:function(event,ui)
{$.CCMMailBox.autocomplete.addSelection(ui.item.id,ui.item.value);return false;}});},addSelection:function(id,name)
{var $inputUser=$.CCMMailBox.$formNew.find('input#txtUsers');$inputUser.val('');$inputUser.before($.CCMMailBox.getTemplate($.CCMMailBox.config.autocomplete.template(),$.extend({},{label:name,id:id})));var valData=$inputUser.data('idUsers');valData=(typeof valData=='undefined')?[]:valData;valData.push(id);$inputUser.data('idUsers',valData);$.CCMMailBox.autocomplete.refreshInput.call($inputUser);},deleteSelection:function()
{var $this=$(this),$inputUser=$.CCMMailBox.$formNew.find('input#txtUsers'),valData=$inputUser.data('idUsers');for(var key=0;key<valData.length;key++){(valData[key]==$this.attr('data-id'))&&valData.splice(key,1);}
$inputUser.data('idUsers',valData);$this.remove();$.CCMMailBox.autocomplete.refreshInput.call(this);},refreshInput:function()
{var $this=$(this),$parent=$this.parent(),$item=$('a.deleteSelection:last',$parent),childPosition=0,availWidth;if($item&&$item.length>0)
{childPosition=$item.offset().left-$parent.offset().left+$item.outerWidth(true);}
availWidth=$parent.width()-childPosition;$this.width(availWidth);$this.focus();}},msg:{getChecked:function(element)
{var listIds=[];if($.CCMMailBox.$divList.is(':visible'))
{if($.CCMMailBox.config.msgList.useCheckbox)
{$.CCMMailBox.$divList.find('input[name!="select_all"][type=checkbox]:checked').each(function(e,s)
{listIds.push($(s).attr('value'));});}else{listIds=[$(element).closest('.hasId').data('id')];}}
else{listIds=[idMessage];}
return listIds;},loadUserListForMsg:function(msg)
{for(var j in msg.idr)
{!usersListForMsg[msg.idr[j]]&&msg.idr[j]!=$.CCMMailBox.config.getIdUser()&&(usersListForMsg[msg.idr[j]]=true);}},reply:function()
{$.CCMMailBox.$divCnt.loading('On',{label:$.CCMMailBox.getTemplate('$l{ACTION_REPLY}')});$.CCMMailBox.$formNew.hideFormError();var $lastLi=$.CCMMailBox.$divMsg.find('.jMessageList .jMsgListLine .msgUser[data-tid!='+$.CCMMailBox.config.getIdUser()+']').eq(-1).closest('.jMsgListLine'),$textareaMsg=$.CCMMailBox.$divMsg.find('#txtReplyMsg'),dialog=$.CCMMailBox.config.getDataDialog(idDiscution),users='',contentVal;if($lastLi.length===0){$lastLi=$.CCMMailBox.$divMsg.find('.jMessageList .jMsgListLine').eq(-1);}
if($.CCMMailBox.config.msg.allowToAddDest)
{users=$.CCMMailBox.$formNew.find('input#txtUsers').data('idUsers');}else
{users=$lastLi.find('.msgUser').attr('data-tid');}
if($textareaMsg.parent().parent().hasClass('ccmeditorParent')){contentVal=($textareaMsg.ccmEditorIsEmpty())?'':$textareaMsg.html();}else{contentVal=($textareaMsg.val()==$textareaMsg.data('default'))?'':$textareaMsg.val();}
$.ajax({type:'POST',url:$.CCMMailBox.config.msg.getUrlSend(),dataType:'json',data:{users:users,xhr:'xhr',obj:null,msg:contentVal,idDiscution:idDiscution,idMsg:(idDiscution==0)?idMessage:null},complete:function(a,b,response)
{if(b==='success')
{$.CCMMailBox.$divCnt.loading('Off');if(response.success==true)
{if(typeof response.idDiscution!="undefined"){idDiscution=response.idDiscution;dialog=$.CCMMailBox.config.getDataDialog(idDiscution);}
var msg,user=$.CCMMailBox.config.getDataUser($.CCMMailBox.config.getIdUser());$textareaMsg.val('');for(var key=0;key<response.newMsg.length;key++)
{dialog!==null&&dialog.push(response.newMsg[key]);if(typeof user=='undefined'){user=$.CCMMailBox.config.getUserDefault();}
msg=$.CCMMailBox.config.msg.getData(response.newMsg[key]);}
msg.suj='';listUser='';for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{if(id!=msg.idu){listUser+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:id,userLbl:$.CCMMailBox.config.getUserLib(id),userUrl:$.CCMMailBox.config.getUserUrl(id)}))+', ';}
else if(id==$.CCMMailBox.config.getIdUser()){}}}
if(msg.idu!=$.CCMMailBox.config.getIdUser()){listUser+=$.CCMMailBox.langs[$.CCMMailBox.lang].ME+', ';}
var newMsg=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.template(),$.extend({},msg,{userImg:user.img,userLbl:$.CCMMailBox.config.getUserLib(msg.idu),userUrl:$.CCMMailBox.config.getUserUrl(msg.idu),deleteLink:(msg.idu==$.CCMMailBox.config.getIdUser())?$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateDeleteMsg(),$.extend({msgId:msg.id})):'',listOfUsers:$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateListUsers(),$.extend({},{listUser:listUser.slice(0,-2)}))}));if($.CCMMailBox.config.msg.orderAsc){$.CCMMailBox.$divMsg.find('.jMessageList').append(newMsg);}else{$.CCMMailBox.$divMsg.find('.jMessageList').prepend(newMsg);}
if($.CCMMailBox.config.msg.allowToAddDest)
{var $txtUsers=$.CCMMailBox.$formNew.find('input#txtUsers');$.CCMMailBox.msg.loadUserListForMsg(msg);$.CCMMailBox.$divRecipient.html($.CCMMailBox.msg.displayUsersList());$txtUsers.data('idUsers',[]);$.CCMMailBox.$formNew.find('a').remove();}
dialog!==null&&$.CCMMailBox.config.updateDataDialog(idDiscution,dialog);}
else{var msgNoSent='';$.each(response.errors,function(k,v)
{$.isArray(v)&&(msgNoSent+='<br>'+v[1]);if(k=='msg')
{$textareaMsg.showInputError(v);}});msgNoSent&&$.note.info($.CCMMailBox.getTemplate('$l{MESSAGE_NOSENT}')+msgNoSent);}}}});},send:function()
{$.CCMMailBox.$divCnt.loading('On',{label:$.CCMMailBox.getTemplate('$l{ACTION_SEND}')});$.CCMMailBox.$formNew.hideFormError();var $inputUsers=$.CCMMailBox.$divNew.find('input#txtUsers'),$inputObj=$.CCMMailBox.$divNew.find('input#txtSubject'),$textareaMsg=$.CCMMailBox.$divNew.find('#txtContent'),contentVal;if($textareaMsg.parent().parent().hasClass('ccmeditorParent')){contentVal=($textareaMsg.ccmEditorIsEmpty())?'':$textareaMsg.html();}else{contentVal=($textareaMsg.val()==$textareaMsg.data('default'))?'':$textareaMsg.val();}
$.ajax({type:'POST',url:$.CCMMailBox.config.msg.getUrlSend(),dataType:'json',data:{users:$inputUsers.data('idUsers'),xhr:'xhr',obj:($inputObj.val()==$inputObj.data('default'))?'':$inputObj.val(),msg:contentVal},complete:function(a,b,response)
{if(b==='success')
{$.CCMMailBox.$divCnt.loading('Off');if($.CCMMailBox.config.googleAnalyticsEvents===true)
{$.googleEvents.send('CCMmailBox','send');}
if(response.success==true)
{$textareaMsg.val('');$.CCMMailBox.$divSent.show();$.CCMMailBox.$divNew.hide();}
else
{var msgNoSent='';$.each(response.errors,function(k,v)
{$.isArray(v)&&(msgNoSent+='<br>'+v[1]);switch(k)
{case'users':$inputUsers.showInputError(v);break;case'obj':$inputObj.showInputError(v);break;case'msg':$textareaMsg.showInputError(v);break;}});msgNoSent&&$.note.info($.CCMMailBox.getTemplate('$l{MESSAGE_NOSENT}')+msgNoSent);}}}});},actions:function()
{var listIds=$.CCMMailBox.msg.getChecked(this),msg='',idMsg=0,url='',label='',changeUnread='no',changeList=false,changeMsg=false,needValidation=false,extraData={},action=$(this).attr('data-action'),newValueUnread=0,match,txtValidation,titleValidation,dialog;switch(action)
{case'deleteOneMsg':url=$.CCMMailBox.config.msg.getUrlDeleteOneMsg();label='$l{ACTION_DELETE_ONE_MSG}';needValidation=true;txtValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TXT_VALIDATION_PHYSICALDELETE;titleValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TITLE_VALIDATION_DELETE;extraData={msgIdToDel:$(this).attr('data-msgid')};changeMsg=true;break;case'delete':url=$.CCMMailBox.config.msg.getUrlLogicalDelete();changeUnread='-';label='$l{ACTION_DELETE}';needValidation=true;txtValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TXT_VALIDATION_DELETE;titleValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TITLE_VALIDATION_DELETE;changeList=true;break;case'physicalDelete':url=$.CCMMailBox.config.msg.getUrlPhysicalDelete();changeUnread='-';label='$l{ACTION_PHYSICALDELETE}';needValidation=true;txtValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TXT_VALIDATION_PHYSICALDELETE;titleValidation=$.CCMMailBox.langs[$.CCMMailBox.lang].TITLE_VALIDATION_DELETE;changeList=true;break;case'archive':url=$.CCMMailBox.config.msg.getUrlchangeArchive();changeUnread='+';label='$l{ACTION_ARCHIVE}';extraData={'toArchive':true};changeList=true;break;case'unread':url=$.CCMMailBox.config.msg.getUrlChangeState();changeUnread='+';label='$l{ACTION_UNREAD}';extraData={'toRead':false};break;case'read':url=$.CCMMailBox.config.msg.getUrlChangeState();changeUnread='-';label='$l{ACTION_READ}';extraData={'toRead':true};break;case'backDelete':url=$.CCMMailBox.config.msg.getUrlBackFromDelete();changeUnread='+';label='$l{ACTION_BACKDELETE}';changeList=true;break;case'backArchive':url=$.CCMMailBox.config.msg.getUrlchangeArchive();changeUnread='+';label='$l{ACTION_BACKARCHIVE}';extraData={'toArchive':false};changeList=true;break;default:return'Error';}
listIds.length==0&&$.note.info($.CCMMailBox.getTemplate('$l{CHECKBOX_EMPTY}'),{delay:3000});if(listIds.length>=1)
{var functionAction=function()
{$.CCMMailBox.$divCnt.loading('On',{label:$.CCMMailBox.getTemplate(label)});$.ajax({type:'POST',url:url,dataType:'json',data:$.extend({idsMessage:listIds,xhr:'xhr'},extraData),complete:function(a,b,response)
{if(b==='success'&&response!==false)
{$.CCMMailBox.$divCnt.loading('Off');for(var key=0;key<listIds.length;key++)
{idMsg=listIds[key];msg=$.CCMMailBox.config.msg.getData(idMsg);if(changeUnread!='no'&&(msg.unr==true||(msg.unr==false&&action=='unread'))&&$.CCMMailBox.$counter.length!=0)
{newValueUnread++;msg.unr=(changeUnread==='+');$.CCMMailBox.msg.updateStateDOM(changeUnread==='-',idMsg);}
if(changeList===true)
{delete listMsg[parseInt($.CCMMailBox.indexOfObject(listMsg,idMsg),10)];nbTotal--;}
if(changeMsg&&idDiscution!==null)
{dialog=$.CCMMailBox.config.getDataDialog(idDiscution);for(var i in dialog)
{dialog[i]==extraData.msgIdToDel&&delete dialog[i];}}}
if(typeof response.um!='undefined')
{$.CCMMailBox.$counter.counterValue()!=response.um&&$.CCMMailBox.$counter.trigger('counterChange',{limit:{min:0},value:response.um});}
if(changeList===true)
{nbTotalPage=Math.ceil(nbTotal/nbByPage);actualPage=(actualPage>nbTotalPage)?nbTotalPage:actualPage;$.CCMMailBox.msgList.getStartAndEnd();$.CCMMailBox.recalculateListMsg();}
if(changeMsg){$.CCMMailBox.msg.read.apply($.CCMMailBox);}}}});};if(needValidation==false)
{functionAction();}
else{var $divModal=$('div#divModal');$divModal.remove();var buttons={};buttons[$.CCMMailBox.langs[$.CCMMailBox.lang].CONFIRMATION_WORD_NO]=function(){$divModal.dialog('close');};buttons[$.CCMMailBox.langs[$.CCMMailBox.lang].CONFIRMATION_WORD_YES]=function(){functionAction();$divModal.dialog('close');};$divModal=$('<div id="divModal" class="modalS_content" title="'+titleValidation+'"></div>');$('div.body').append($divModal);$divModal.html(txtValidation).dialog({width:'600px',resizable:false,dialogClass:'modalS',modal:true,buttons:buttons});}}},updateState:function(uToR,idMsg)
{uToR=uToR||true;idMsg=idMsg||idMessage;var dialog=$.CCMMailBox.config.getDataDialog(idDiscution),msgData=$.CCMMailBox.config.msg.getData(),newValue=0,msg,counterValue;for(var i in dialog)
{if(dialog.hasOwnProperty(i))
{msg=msgData[dialog[i]];if(msg.typ=='r'&&msg.unr==uToR)
{$.CCMMailBox.config.msg.updateState(dialog[i],!uToR);$.CCMMailBox.msg.updateStateDOM(uToR,dialog[i]);}}}
if($.CCMMailBox.$counter.length!=0)
{counterValue=$.CCMMailBox.$counter.counterValue();$.CCMMailBox.$counter.trigger('counterChange',{limit:{min:0},value:(uToR===true)?counterValue-1:counterValue+1});}},updateStateDOM:function(uToR,idMsg)
{if(uToR==true)
{$('#line'+idMsg).removeClass('noRead');}else{$('#line'+idMsg).addClass('noRead');}},read:function(handler)
{handler=handler||function(){};var msgData=this.config.msg.getData(),self=this,previousNextLinks=true;$('body').scrollTo(0);actualPosition=parseInt(this.indexOfObject(listMsg,idMessage),10);if(isNaN(actualPosition))
{var key=0,listMsgData=$.CCMMailBox.config.msg.getData();for(var idMsgData in listMsgData)
{if(listMsgData.hasOwnProperty(idMsgData))
{listMsg[key]=idMsgData;key++;}}
previousNextLinks=false;}
else
{if(actualPosition>endList||actualPosition<startList)
{actualPosition>endList&&actualPage++;actualPosition<startList&&actualPage--;}}
this.msgList.showData();if(msgData.hasOwnProperty(idMessage)===false||msgData[idMessage].hasOwnProperty('cor')===false)
{this.$divCnt.loading('On',{label:this.getTemplate('$l{ACTION_READ_MSG}')});$.ajax({type:'POST',url:this.config.msg.getUrlRead(),dataType:'json',data:{idMessage:idMessage,xhr:'xhr'},complete:function(a,b,response)
{if(b==='success')
{self.$divCnt.loading('Off');self.msg.showData(previousNextLinks);$.mailboxCollapse.init();}
handler();}});}
else
{this.msg.showData(previousNextLinks);handler();}},displayUsersList:function(nb,extra)
{nb=nb||2;var list={},i=1,text='',userSup=0,idUser=$.CCMMailBox.config.getIdUser();if(!$.isEmptyObject(usersListForMsg))
{list=usersListForMsg;}
else
{list[idUser]=$.CCMMailBox.config.getDataUser(idUser);}
for(var id in list)
{if(list.hasOwnProperty(id))
{if(i<=nb)
{text+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:id,userLbl:$.CCMMailBox.config.getUserLib(id),userUrl:$.CCMMailBox.config.getUserUrl(id)}))+', ';}
else
{userSup++;}
i++;}}
text=text.slice(0,-2);if(userSup>0)
{text+=$.CCMMailBox.getTemplate(userSup>1?$.CCMMailBox.langs[$.CCMMailBox.lang].OTHERS_USERS:$.CCMMailBox.langs[$.CCMMailBox.lang].OTHER_USER,{nbUser:userSup});}
return text;},showData:function(previousNextMessage)
{var msgData=$.CCMMailBox.config.msg.getData(),listMsg=$.CCMMailBox.$divMsg.find('.jMessageList');usersListForMsg={};if($.CCMMailBox.$divList.is(':visible'))
{$.CCMMailBox.$divList.hide();$.CCMMailBox.$divMsg.show();}
idDiscution=(msgData[idMessage].idm==null)?msgData[idMessage].id:msgData[idMessage].idm;$.CCMMailBox.msgList.getStartAndEnd();listMsg.find('.jMsgListLine').remove();$.CCMMailBox.$divMsg.find('div.formReply').remove();$.CCMMailBox.config.msg.allowToAddDest&&$.CCMMailBox.$divMsg.find('form#newMsg').remove();listMsg.html($($.CCMMailBox.msg.display()));if(msgData[idMessage].hasOwnProperty('idu')!==false)
{$.CCMMailBox.$divRecipient.html($.CCMMailBox.msg.displayUsersList());}
$.CCMMailBox.config.subjectSelector&&msgData[idDiscution].suj&&$.CCMMailBox.$divMsg.find($.CCMMailBox.config.subjectSelector).html(msgData[idDiscution].suj);if(typeList=='inbox'&&msgAnonymous!==true)
{var replyForm='';$.CCMMailBox.config.msg.allowToAddDest&&(replyForm=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateFormAddDest()));replyForm+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateFormAdd(usersListForMsg),{idu:$.CCMMailBox.config.getIdUser(),userLbl:$.CCMMailBox.config.getUserLib($.CCMMailBox.config.getIdUser()),userUrl:$.CCMMailBox.config.getUserUrl($.CCMMailBox.config.getIdUser()),userImg:$.CCMMailBox.config.getDataUser($.CCMMailBox.config.getIdUser()).img});if($.CCMMailBox.config.msg.orderAsc){listMsg.after(replyForm);}else{listMsg.before(replyForm);}
if($.CCMMailBox.config.msg.allowToAddDest){$.CCMMailBox.$formNew=$.CCMMailBox.$divMsg.find($.CCMMailBox.config.newMsgForm);$.CCMMailBox.autocomplete.initCCMComplete();$.CCMMailBox.$formNew.delegate('a.deleteSelection','click',$.CCMMailBox.autocomplete.deleteSelection);}}
if(nbTotal==1||previousNextMessage==false)
{$('div.actualMessage').hide();}
else{$('div.actualMessage').show();var $previousMsg=$('a.previousMessage'),$nextMsg=$('a.nextMessage');enabledBackMsg=(actualPosition!=0);enabledNextMsg=(actualPosition!=(nbTotal-1));if(enabledBackMsg)
{$previousMsg.removeClass('disabled');$.CCMMailBox.msg.previousIdMessage(function(idPrevious)
{typeof idPrevious!='undefined'&&$previousMsg.attr('href','?action=read&id='+idPrevious);});}else{$previousMsg.addClass('disabled');}
if(enabledNextMsg)
{$nextMsg.removeClass('disabled');$.CCMMailBox.msg.nextIdMessage(function(idNext)
{typeof idNext!='undefined'&&$nextMsg.attr('href','?action=read&id='+idNext);});}else{$nextMsg.addClass('disabled');}}
if(typeList=='inbox'&&msgData[idMessage].hasOwnProperty('unr')!==false&&msgData[idMessage].unr===true)
{$.CCMMailBox.msg.updateState(true);}
$.CCMMailBox.config.msg.hookAfterShowData();},back:function()
{if($.CCMMailBox.$divMsg.is(':visible'))
{$.CCMMailBox.$divList.show();$.CCMMailBox.$divMsg.hide();}},nextIdMessage:function(handler)
{handler=handler||function(){};var newIdMessage;if(enabledNextMsg)
{if(typeof listMsg[parseInt(actualPosition+1,10)]=='undefined')
{$.CCMMailBox.msgList.load(actualPage+1,function()
{newIdMessage=listMsg[parseInt(actualPosition+1,10)];handler.call(this,newIdMessage);},{loadMsg:true});return;}
newIdMessage=listMsg[parseInt(actualPosition+1,10)];handler.call(this,newIdMessage);}
return newIdMessage;},previousIdMessage:function(handler)
{handler=handler||function(){};var previousIdMessage;if(enabledBackMsg)
{if(typeof listMsg[parseInt(actualPosition-1,10)]=='undefined')
{$.CCMMailBox.msgList.load(actualPage-1,function()
{previousIdMessage=listMsg[parseInt(actualPosition+1,10)];handler.call(this,previousIdMessage);},{loadMsg:true});return;}
previousIdMessage=listMsg[parseInt(actualPosition-1,10)];handler.call(this,previousIdMessage);}
return previousIdMessage;},display:function()
{var msg=$.CCMMailBox.config.msg.getData(),user=$.CCMMailBox.config.getDataUser(),dialog,msgTmp,titleUsed=false,display='';idDiscution!==null&&(dialog=$.CCMMailBox.config.getDataDialog(idDiscution));if(typeof dialog=='undefined'||dialog===null)
{dialog=[];dialog[0]=idMessage;}
for(var i in dialog)
{msgTmp=msg[dialog[i]];if(typeof msgTmp!='undefined')
{$.CCMMailBox.msg.loadUserListForMsg(msgTmp);if(msgTmp.typ=='r'||(msgTmp.typ=='e'&&msgTmp.idu!=msgTmp.ido))
{if(typeof user[msgTmp.idu]=='undefined')
{user[msgTmp.idu]=$.CCMMailBox.config.getUserDefault();msgAnonymous=true;}else{msgAnonymous=false;}
if($.CCMMailBox.config.msg.includeSubjectInMsg){if(titleUsed===false)
{titleUsed=true;}
else
{msgTmp.suj='';}}
listUser='';for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{if(id!=msgTmp.idu){listUser+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:id,userLbl:$.CCMMailBox.config.getUserLib(id),userUrl:$.CCMMailBox.config.getUserUrl(id)}))+', ';}
else if(id==$.CCMMailBox.config.getIdUser()){}}}
if(msgTmp.idu!=$.CCMMailBox.config.getIdUser()){listUser+=$.CCMMailBox.langs[$.CCMMailBox.lang].ME+', ';}
display+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.template(),$.extend({},msgTmp,{userImg:user[msgTmp.idu].img,userLbl:$.CCMMailBox.config.getUserLib(msgTmp.idu),userUrl:$.CCMMailBox.config.getUserUrl(msgTmp.idu),deleteLink:(msgTmp.idu==$.CCMMailBox.config.getIdUser())?$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateDeleteMsg(),$.extend({msgId:msgTmp.id})):'',listOfUsers:$.CCMMailBox.getTemplate($.CCMMailBox.config.msg.templateListUsers(),$.extend({},{listUser:listUser.slice(0,-2)}))}));}}}
return display;}},msgList:{checkLine:function()
{var $li=$(this).closest('.jMsgListLine'),$checkbox=$li.find('input[type=checkbox]');if($li.hasClass('itemChecked'))
{$checkbox.removeAttr('checked');$li.removeClass('itemChecked');}
else{$checkbox.attr('checked','checked');$li.addClass('itemChecked');}},showData:function(trustCounter)
{trustCounter=trustCounter||false;$.CCMMailBox.msgList.getStartAndEnd();if(nbTotal==0)
{$.CCMMailBox.$divMsg.hide();$.CCMMailBox.$divList.hide();$.CCMMailBox.$divEmpty.show();}
if(trustCounter===false)
{var $counterTotal=$.CCMMailBox.$divList.find('span.pageTotale');$.CCMMailBox.$divList.find('span.pageActuelle').trigger('counterChange',{limit:{min:1,max:nbTotalPage},value:actualPage});if(parseInt($counterTotal.html(),10)!=nbTotalPage)
{$counterTotal.trigger('counterChange',{limit:{min:1,max:nbTotalPage},value:nbTotalPage});}}
$.CCMMailBox.msgList.updateDOM();},load:function(page,handler,data)
{handler=handler||function(){};data=data||{};page=page||actualPage;(isNaN(page)||page<1)&&(page=1);if(typeof listMsg[(page*nbByPage)-1]=='undefined')
{$.ajax({type:'POST',url:$.CCMMailBox.config.msgList.getUrlRead(),dataType:'json',data:$.extend({typeL:typeList,xhr:'xhr',page:page},data),complete:function(a,b,response)
{if(b==='success')
{$.CCMMailBox.msgList.updateData(response);handler.call(this,response);}}});}else{handler.call();}},read:function(handler)
{handler=handler||function(){};$('body').scrollTo(0);$.CCMMailBox.msg.back();$.CCMMailBox.msgList.load(actualPage,function(){$.CCMMailBox.msgList.showData();handler();});},getStartAndEnd:function()
{startList=((actualPage)-1)*(nbByPage);endList=(actualPage)*(nbByPage)>nbTotal?nbTotal-1:((actualPage)*(nbByPage))-1;},updateData:function(response)
{nbTotalPage=response.totalpage;nbTotal=response.total;nbByPage=response.ppage;typeof response.listMsg!='undefined'&&$.extend(listMsg,response.listMsg)&&$.CCMMailBox.reorderListMsg();},updateDOM:function()
{var $previousPage=$('a.previousPage'),$nextPage=$('a.nextPage');$.CCMMailBox.$ulMsgList.find('.jMsgListLine').remove();$.CCMMailBox.$ulMsgList.html($.CCMMailBox.msgList.display());$.CCMMailBox.config.msgList.hookAfterDisplay();$.CCMMailBox.$divList.find('input[type=checkbox]').removeAttr('checked');enabledBackMsgList=(actualPage!=1);enabledNextMsgList=(actualPage!=nbTotalPage);if(enabledBackMsgList)
{$previousPage.removeClass('disabled');$previousPage.attr('href','?action=page&id='+(actualPage-1));}else{$previousPage.addClass('disabled');}
if(enabledNextMsgList)
{$nextPage.removeClass('disabled');$nextPage.attr('href','?action=page&id='+(actualPage+1));}else{$nextPage.addClass('disabled');}
nbTotalPage==1&&$('div.actualPage').hide();},display:function()
{var user=null,msg=null,imgTag=null,imgSrc=null,html='';for(var key=startList;key<=endList;key++)
{msg=$.CCMMailBox.config.msg.getData(listMsg[key]);user=$.CCMMailBox.config.getDataUser(msg.idu);typeof user=='undefined'&&(user=$.CCMMailBox.config.getUserDefault());var userLbl=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:msg.idu,userLbl:$.CCMMailBox.config.getUserLib(msg.idu),userUrl:$.CCMMailBox.config.getUserUrl(msg.idu)}));if(msg.idr)
{var i=0,max=0;for(max=msg.idr.length,i=0;(i<nbUserlistMsg&&i<max);++i)
{if(msg.idr[i]==msg.idu){continue;}
userLbl+=', '+$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserLbl(),$.extend({},{idu:msg.idr[i],userLbl:$.CCMMailBox.config.getUserLib(msg.idr[i]),userUrl:$.CCMMailBox.config.getUserUrl(msg.idr[i])}));}
max>nbUserlistMsg&&(userLbl+='...');}
imgSrc=user.img;typeList=='bin'&&(imgSrc=$.CCMMailBox.config.msgList.getUrlBinImg());typeList=='sent'&&(imgSrc=$.CCMMailBox.config.msgList.getUrlSentImg());typeList=='archive'&&(imgSrc=$.CCMMailBox.config.msgList.getUrlArchiveImg());imgTag=(imgSrc!=null)?$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.templateUserImg(),$.extend({},{imgSrc:imgSrc})):'';html+=$.CCMMailBox.getTemplate($.CCMMailBox.config.msgList.template(),$.extend({},msg,{userImg:imgTag,userLbl:userLbl,userUrl:$.CCMMailBox.config.getUserUrl(msg.idu),ifUnread:msg.unr==true?'noRead':''}));}
return html;},checkAll:function()
{var $itemCheckList=$(this).closest('.cntMsg').find('input[type=checkbox]');if(typeof $(this).attr('checked')!='undefined')
{$itemCheckList.attr('checked','checked').closest('.jMsgListLine').addClass('itemChecked');}
else{$itemCheckList.removeAttr('checked').closest('.jMsgListLine').removeClass('itemChecked');}},checkOne:function()
{$(this).closest('.cntMsg').find('input.checkAll').removeAttr('checked');}}};$.extend($.CCMMailBox,$.microTemplate);$.fn.CCMMailBox=function(config)
{$.extend(true,$.CCMMailBox.config,config);$.CCMMailBox.$divList=$(this);$.CCMMailBox.$divMsg=$($.CCMMailBox.config.messageSelector);$.CCMMailBox.$divRecipient=$($.CCMMailBox.config.recipientSelector);$.CCMMailBox.$divCnt=$($.CCMMailBox.config.pageSelector);$.CCMMailBox.$counter=$($.CCMMailBox.config.unreadCounterSelector);$.CCMMailBox.$divEmpty=$($.CCMMailBox.config.emptySelector);$.CCMMailBox.$divNew=$($.CCMMailBox.config.newMsgSelector);$.CCMMailBox.$formNew=$($.CCMMailBox.config.newMsgForm);$.CCMMailBox.$divSent=$($.CCMMailBox.config.sentMsgSelector);$.CCMMailBox.$ulMsgList=$.CCMMailBox.$divList.find('.jMessageList');$.CCMMailBox.init();return this;};})(jQuery);(function($)
{$.CCMMailBox.copainsMail={init:function()
{var self=this;self.$divNew.on('click','a.groupList',function(){self.copainsMail.initGroup.call(this,self);});},msgList:{template:function()
{return'<li class="${ifUnread} jMsgListLine" id=line${typ}${id}>'
+'<div class="app_webmail__input"><input type="checkbox" name="msg${typ}${id}" value=${typ}${id}></div>'
+'<div class="app_webmail__resume">'
+'${userImg}'
+'<div class="grid_last">'
+'<div class="app_webmail__people">'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage" title="$l{MESSAGE_READ}">${userLbl}</a>'
+'${listOfUsers}'
+'</div>'
+'<strong>'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage" title="$l{MESSAGE_READ}">${suj}</a>'
+'</strong>'
+'<p>'
+'<a data-id="${typ}${id}" href="?action=read&id=${typ}${id}" class="readMessage" title="$l{MESSAGE_READ}">${ext}</a>'
+'</p>'
+'</div>'
+'</div>'
+'<div class="app_webmail__date">${dat}</div>'
+'</li>';},templateUserImg:function(){return'<div class="grid_left"><figure style="background-image: url(${imgSrc})"></figure></div>';}},msg:{templateFormAddDest:function(){return'<form id="newMsg" class="form"><div class="line">'
+'<div class="input multi-user">'
+'<input id="txtUsers" type="text" placeholder="$l{ADD_DEST}" class="inputTxt focus">'
+'</div>'
+'<div style="display: none;" id="divErrorUsers" class="msg txtR"></div>'
+'</div></form>';},templateFormAdd:function(usersListForMsg)
{nbUser=0;for(var id in usersListForMsg)
{if(usersListForMsg.hasOwnProperty(id))
{nbUser++;}}
if(nbUser>1){message_reply="$l{MESSAGE_REPLIES}";}else{message_reply="$l{MESSAGE_REPLY}";}
var lastMessageId=$('.jMsgListLine:last').attr('id').substr(4);if($data.copains.user.msgs[lastMessageId].hasRelation===false){return'<div class="ccmcss_form formReply"><hr />'
+'<p>Pour pouvoir répondre vous devez être en relation avec au moins un destinataire du message.</p>'
+'</div>';}
return'<div class="ccmcss_form formReply">'
+'<form action="#" enctype="">'
+'<fieldset>'
+'<legend>'+message_reply+'</legend>'
+'<div class="ccmcss_form__line jFormLine">'
+'<textarea class="focus autoresize" placeholder="$l{YOUR_MESSAGE}" id="txtReplyMsg"></textarea>'
+'<div id="divErrorReplyMsg" class="jMsg"></div>'
+'</div>'
+'<div><em>Afin de vous protéger de sollicitations indésirables, les liens ou adresses mail sont interdits.</em></div>'
+'<footer>'
+'<a class="linter_btn_2 replyMsg" href="javascript:void(0);" title="'+message_reply+'">'+message_reply+'</a>'
+'</footer>'
+'</fieldset>'
+'</form>'
+'</div>';},template:function()
{return'<li class="jMsgListLine" id=line${typ}${id}>'
+'<div class="app_webmail__resume">'
+'<div class="grid_left">'
+'<a href="${userUrl}">'
+'<figure style="background-image: url(${userImg})">'
+'</figure>'
+'</a>'
+'</div>'
+'<div class="grid_last">'
+'<div class="app_webmail__people">'
+'<a class="jTinyProfileUser notip uppercase msgUser" data-tid=${idu} href="${userUrl}" title="${userLbl}">${userLbl}</a>'
+'<br />${listOfUsers}'
+'</div>'
+'<strong>${suj}</strong>'
+'<p>${cor}</p>'
+'</div>'
+'</div>'
+'<div class="app_webmail__date">${dat}</div>'
+'</li>';},templateListUsers:function(){return'$l{TO} : ${listUser}';}},autocomplete:{template:function(){return'<a class="app_webmail__addressee icon_default deleteSelection" data-id="${id}" href="javascript:void(0);"><span class="icon_text">${label}</span><span aria-hidden="true" class="icon-cancel"></span></a>';}},counter:{handler:function(e,valueBefore,valueAfter,options)
{var $this=$(this);if(valueAfter>0)
{$this.show();}
else{$this.hide();}}},sendMessagePopup:function(idUser,senderId,threadId,itemId)
{var data={};data.title=$.copains.core.getTemplate('$l{MESSAGE_SEND_TITLE} <b>${lib}</b>',$data.copains.users[idUser]);var template='<h2>Envoyer un message</h2>';if($data.app_name!='viadeo'){template=template+'<div><em>Afin de vous protéger de sollicitations indésirables, les liens ou adresses mail sont interdits.</em></div>';}
template=template+'<div class="ccmcss_form form_whatsup">'
+'<form method="POST" id="formSendMsg" data-id="${id}" data-senderid="${sId}" data-threadid="${tId}" data-itemId="${iId}"><fieldset>'
+'<label id="divObj" class="ccmcss_form__line jFormLine">'
+'<div class="grid_left">'
+'$l{MESSAGE_INPUT}'
+'</div>'
+'<div class="grid_last">'
+'<input type="text" id="objMsg" />'
+'<div class="msg" id="divErrorObj" ></div>'
+'</div>'
+'</label>'
+'<label id="divMsg" class="ccmcss_form__line jFormLine">'
+'<div class="grid_left">'
+'$l{MESSAGE_TEXTAREA}'
+'</div>'
+'<div class="grid_last">'
+'<textarea class="comments-text jCommentsText" id="description" name="description"></textarea>'
+'<div class="msg" id="divErrorMsg"></div>'
+'</div>'
+'</label>'
+'</fieldset>'
+'<footer class="ccmcss_form__line--no_col">'
+'<input type="button" class="linter_btn_2 jValidateSendMessage" name="validate" value="$l{MESSAGE_SEND}">'
+'<a class="linter_btn_1 jCloseDialog" href="javascript:void(0);">$l{MESSAGE_CANCEL}</a>'
+'</footer>'
+'</form>'
+'</div>';data.html=$.copains.core.getTemplate(template,$.extend({},$data.copains.users[idUser],{id:idUser,sId:senderId,tId:threadId,iId:itemId}));$.copains.core.showInDialogBox(data);},validateSendMessage:function(e)
{var $formSendMsg=$('form#formSendMsg'),$textaeraMsg=$formSendMsg.find('textarea#description'),$inputObj=$formSendMsg.find('input#objMsg'),urlFeedBack=$formSendMsg.attr('data-url'),senderId=$formSendMsg.attr('data-senderid'),threadid=$formSendMsg.attr('data-threadid'),itemId=$formSendMsg.attr('data-itemId'),data={users:$formSendMsg.attr('data-id'),xhr:'xhr',obj:($inputObj.val()==$inputObj.data('default'))?'':$inputObj.val(),msg:($textaeraMsg.val()==$textaeraMsg.data('default'))?'':$textaeraMsg.val()+(typeof urlFeedBack!='undefined'?'\r\nUrl : '+urlFeedBack:''),idDiscution:(typeof threadid!='undefined'?threadid:''),senderId:(typeof senderId!='undefined'?senderId:'')};if(data.users==0)
{data.users=$('input#txtUsers',$formSendMsg).data('idUsers');}
$formSendMsg.hideFormError();$.ajax({type:'POST',url:'/m/_xhr_send/',dataType:'json',data:data,success:function(data)
{if(data.success==true)
{$('div#jDivModal').dialog('close');$.note.info($.copains.core.langs[$.copains.core.lang].MESSAGE_SENT);if(typeof $data.copains.user.msgs.callback!='undefined')
{var dataToSend=data;dataToSend.xhr=1;if(typeof itemId!='undefined'&&typeof $data.copains.user.msgs.callback.data[itemId]!='undefined'){dataToSend.cbResult=$data.copains.user.msgs.callback.data[itemId];}
$.ajax({type:'POST',url:$data.copains.user.msgs.callback.call,dataType:'json',data:dataToSend,success:function(data)
{if(data.success==true&&typeof data.threadId!='undefined'&&typeof $('.jSendMessage_'+itemId)!='undefined'){$('.jSendMessage_'+itemId).attr('data-threadid',data.threadId);}}});}
$.googleEvents.send('copainsdavant','share',undefined,undefined,true);}
else
{var msgNoSent='';$.each(data.errors,function(k,v)
{$.isArray(v)&&(msgNoSent+='<br>'+v[1]);switch(k){case'obj':$inputObj.showInputError(v);break;case'msg':$textaeraMsg.showInputError(v);break;case'users':$formSendMsg.find('input#txtUsers').showInputError(v);break;default:break;}});msgNoSent&&$.note.info($.copains.core.langs[$.copains.core.lang].MESSAGE_NOSENT+msgNoSent);}}});},initGroup:function(mailbox)
{$.profile&&console.time('mailbox => initGroup');var groupType=$(this).attr('data-id'),$inputTxtUser=mailbox.$formNew.find('input#txtUsers'),valData=$inputTxtUser.data('idUsers');$.ajax({type:'POST',url:'/m/_xhr_groupUsers/',dataType:'json',data:{groupType:groupType,xhr:'xhr',idsUser:valData},complete:function(a,b,data)
{if(b==='success')
{for(var key in data)
{if(!data.hasOwnProperty(key)){continue;}
if(typeof data[key].value=='undefined'){continue;}
mailbox.autocomplete.addSelection(data[key].id,data[key].value);}}}});$.profile&&console.timeEnd('mailbox => initGroup');}};$(document).start(function()
{if($('div#CCMMailbox').length!=0)
{$('div#msgList').CCMMailBox({onInit:$.CCMMailBox.copainsMail.init,msgList:$.CCMMailBox.copainsMail.msgList,msg:$.CCMMailBox.copainsMail.msg,autocomplete:$.CCMMailBox.copainsMail.autocomplete,counter:$.CCMMailBox.copainsMail.counter});}
$(document).on('click','.jSendMessage','click',function()
{$.CCMMailBox.copainsMail.sendMessagePopup($(this).attr('data-id'),$(this).attr('data-senderid'),$(this).attr('data-threadid'),$(this).attr('data-itemId'));}).on('click','.jValidateSendMessage',$.CCMMailBox.copainsMail.validateSendMessage).on('eventFromUrl-sendMessage',function(event,tar,val,datas)
{$.CCMMailBox.copainsMail.sendMessagePopup(datas.id);});});})(jQuery);
(function(root,factory){if(typeof exports=='object')module.exports=factory()
else if(typeof define=='function'&&define.amd)define(factory)
else root.Spinner=factory()}
(this,function(){"use strict";var prefixes=['webkit','Moz','ms','O'],animations={},useCssAnimations
function createEl(tag,prop){var el=document.createElement(tag||'div'),n
for(n in prop)el[n]=prop[n]
return el}
function ins(parent){for(var i=1,n=arguments.length;i<n;i++)
parent.appendChild(arguments[i])
return parent}
var sheet=(function(){var el=createEl('style',{type:'text/css'})
ins(document.getElementsByTagName('head')[0],el)
return el.sheet||el.styleSheet}())
function addAnimation(alpha,trail,i,lines){var name=['opacity',trail,~~(alpha*100),i,lines].join('-'),start=0.01+i/lines*100,z=Math.max(1-(1-alpha)/trail*(100-start),alpha),prefix=useCssAnimations.substring(0,useCssAnimations.indexOf('Animation')).toLowerCase(),pre=prefix&&'-'+prefix+'-'||''
if(!animations[name]){sheet.insertRule('@'+pre+'keyframes '+name+'{'+'0%{opacity:'+z+'}'+
start+'%{opacity:'+alpha+'}'+
(start+0.01)+'%{opacity:1}'+
(start+trail)%100+'%{opacity:'+alpha+'}'+'100%{opacity:'+z+'}'+'}',sheet.cssRules.length)
animations[name]=1}
return name}
function vendor(el,prop){var s=el.style,pp,i
if(s[prop]!==undefined)return prop
prop=prop.charAt(0).toUpperCase()+prop.slice(1)
for(i=0;i<prefixes.length;i++){pp=prefixes[i]+prop
if(s[pp]!==undefined)return pp}}
function css(el,prop){for(var n in prop)
el.style[vendor(el,n)||n]=prop[n]
return el}
function merge(obj){for(var i=1;i<arguments.length;i++){var def=arguments[i]
for(var n in def)
if(obj[n]===undefined)obj[n]=def[n]}
return obj}
function pos(el){var o={x:el.offsetLeft,y:el.offsetTop}
while((el=el.offsetParent))
o.x+=el.offsetLeft,o.y+=el.offsetTop
return o}
var defaults={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:'#000',direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:'spinner',top:'auto',left:'auto',position:'relative'}
function Spinner(o){if(typeof this=='undefined')return new Spinner(o)
this.opts=merge(o||{},Spinner.defaults,defaults)}
Spinner.defaults={}
merge(Spinner.prototype,{spin:function(target){this.stop()
var self=this,o=self.opts,el=self.el=css(createEl(0,{className:o.className}),{position:o.position,width:0,zIndex:o.zIndex}),mid=o.radius+o.length+o.width,ep,tp
if(target){target.insertBefore(el,target.firstChild||null)
tp=pos(target)
ep=pos(el)
css(el,{left:(o.left=='auto'?tp.x-ep.x+(target.offsetWidth>>1):parseInt(o.left,10)+mid)+'px',top:(o.top=='auto'?tp.y-ep.y+(target.offsetHeight>>1):parseInt(o.top,10)+mid)+'px'})}
el.setAttribute('role','progressbar')
self.lines(el,self.opts)
if(!useCssAnimations){var i=0,start=(o.lines-1)*(1-o.direction)/2,alpha,fps=o.fps,f=fps/o.speed,ostep=(1-o.opacity)/(f*o.trail/100),astep=f/o.lines;(function anim(){i++;for(var j=0;j<o.lines;j++){alpha=Math.max(1-(i+(o.lines-j)*astep)%f*ostep,o.opacity)
self.opacity(el,j*o.direction+start,alpha,o)}
self.timeout=self.el&&setTimeout(anim,~~(1000/fps))})()}
return self},stop:function(){var el=this.el
if(el){clearTimeout(this.timeout)
if(el.parentNode)el.parentNode.removeChild(el)
this.el=undefined}
return this},lines:function(el,o){var i=0,start=(o.lines-1)*(1-o.direction)/2,seg
function fill(color,shadow){return css(createEl(),{position:'absolute',width:(o.length+o.width)+'px',height:o.width+'px',background:color,boxShadow:shadow,transformOrigin:'left',transform:'rotate('+~~(360/o.lines*i+o.rotate)+'deg) translate('+o.radius+'px'+',0)',borderRadius:(o.corners*o.width>>1)+'px'})}
for(;i<o.lines;i++){seg=css(createEl(),{position:'absolute',top:1+~(o.width/2)+'px',transform:o.hwaccel?'translate3d(0,0,0)':'',opacity:o.opacity,animation:useCssAnimations&&addAnimation(o.opacity,o.trail,start+i*o.direction,o.lines)+' '+1/o.speed+'s linear infinite'})
if(o.shadow)ins(seg,css(fill('#000','0 0 4px '+'#000'),{top:2+'px'}))
ins(el,ins(seg,fill(o.color,'0 0 1px rgba(0,0,0,.1)')))}
return el},opacity:function(el,i,val){if(i<el.childNodes.length)el.childNodes[i].style.opacity=val}})
function initVML(){function vml(tag,attr){return createEl('<'+tag+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',attr)}
sheet.addRule('.spin-vml','behavior:url(#default#VML)')
Spinner.prototype.lines=function(el,o){var r=o.length+o.width,s=2*r
function grp(){return css(vml('group',{coordsize:s+' '+s,coordorigin:-r+' '+-r}),{width:s,height:s})}
var margin=-(o.width+o.length)*2+'px',g=css(grp(),{position:'absolute',top:margin,left:margin}),i
function seg(i,dx,filter){ins(g,ins(css(grp(),{rotation:360/o.lines*i+'deg',left:~~dx}),ins(css(vml('roundrect',{arcsize:o.corners}),{width:r,height:o.width,left:o.radius,top:-o.width>>1,filter:filter}),vml('fill',{color:o.color,opacity:o.opacity}),vml('stroke',{opacity:0}))))}
if(o.shadow)
for(i=1;i<=o.lines;i++)
seg(i,-2,'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
for(i=1;i<=o.lines;i++)seg(i)
return ins(el,g)}
Spinner.prototype.opacity=function(el,i,val,o){var c=el.firstChild
o=o.shadow&&o.lines||0
if(c&&i+o<c.childNodes.length){c=c.childNodes[i+o];c=c&&c.firstChild;c=c&&c.firstChild
if(c)c.opacity=val}}}
var probe=css(createEl('group'),{behavior:'url(#default#VML)'})
if(!vendor(probe,'transform')&&probe.adj)initVML()
else useCssAnimations=vendor(probe,'animation')
return Spinner}));(function($){$.spin={defaultConfig:{lines:12,length:10,width:4,radius:10,color:'#000',speed:1.0,trail:50,shadow:false}};$.fn.spin=function(opts){opts=$.extend({},$.spin.defaultConfig,opts);this.each(function(){var $this=$(this),data=$this.data();if(data.spinner){data.spinner.stop();delete data.spinner;return $this;}
if(opts!==false){data.spinner=new Spinner($.extend({color:$this.css('color')},opts)).spin(this);$.core.$fake[0]=data.spinner.el;$.core.$fake.css({zIndex:1000});}});return $.core.$fake;};})(jQuery);
(function($){var history_handle_top,timer;var body;var jwindow;$.extend({pnotify_remove_all:function(){var body_data=body.data("pnotify");if(body_data&&body_data.length){$.each(body_data,function(){if(this.pnotify_remove)
this.pnotify_remove();});}},pnotify_position_all:function(){if(timer)
clearTimeout(timer);timer=null;try{var body_data=body.data("pnotify");}
catch(e){return;}
if(!body_data||!body_data.length)
return;$.each(body_data,function(){var s=this.opts.pnotify_stack;if(!s)return;if(!s.nextpos1)
s.nextpos1=s.firstpos1;if(!s.nextpos2)
s.nextpos2=s.firstpos2;if(!s.addpos2)
s.addpos2=0;if(this.css("display")!="none"){var curpos1,curpos2;var animate={};var csspos1;switch(s.dir1){case"down":csspos1="top";break;case"up":csspos1="bottom";break;case"left":csspos1="right";break;case"right":csspos1="left";break;}
curpos1=parseInt(this.css(csspos1));if(isNaN(curpos1))
curpos1=0;if(typeof s.firstpos1=="undefined"){s.firstpos1=curpos1;s.nextpos1=s.firstpos1;}
var csspos2;switch(s.dir2){case"down":csspos2="top";break;case"up":csspos2="bottom";break;case"left":csspos2="right";break;case"right":csspos2="left";break;}
curpos2=parseInt(this.css(csspos2));if(isNaN(curpos2))
curpos2=0;if(typeof s.firstpos2=="undefined"){s.firstpos2=curpos2;s.nextpos2=s.firstpos2;}
if((s.dir1=="down"&&s.nextpos1+this.height()>jwindow.height())||(s.dir1=="up"&&s.nextpos1+this.height()>jwindow.height())||(s.dir1=="left"&&s.nextpos1+this.width()>jwindow.width())||(s.dir1=="right"&&s.nextpos1+this.width()>jwindow.width())){s.nextpos1=s.firstpos1;s.nextpos2+=s.addpos2+10;s.addpos2=0;}
if(s.animation&&s.nextpos2<curpos2){switch(s.dir2){case"down":animate.top=s.nextpos2+"px";break;case"up":animate.bottom=s.nextpos2+"px";break;case"left":animate.right=s.nextpos2+"px";break;case"right":animate.left=s.nextpos2+"px";break;}}else
this.css(csspos2,s.nextpos2+"px");switch(s.dir2){case"down":case"up":if(this.outerHeight(true)>s.addpos2)
s.addpos2=this.height();break;case"left":case"right":if(this.outerWidth(true)>s.addpos2)
s.addpos2=this.width();break;}
if(typeof s.nextpos1==="number"){if(s.animation&&(curpos1>s.nextpos1||animate.top||animate.bottom||animate.right||animate.left)){switch(s.dir1){case"down":animate.top=s.nextpos1+"px";break;case"up":animate.bottom=s.nextpos1+"px";break;case"left":animate.right=s.nextpos1+"px";break;case"right":animate.left=s.nextpos1+"px";break;}}else
this.css(csspos1,s.nextpos1+"px");}
if(animate.top||animate.bottom||animate.right||animate.left)
this.animate(animate,{duration:500,queue:false});switch(s.dir1){case"down":case"up":s.nextpos1+=this.height()+10;break;case"left":case"right":s.nextpos1+=this.width()+10;break;}}});$.each(body_data,function(){var s=this.opts.pnotify_stack;if(!s)return;s.nextpos1=s.firstpos1;s.nextpos2=s.firstpos2;s.addpos2=0;s.animation=true;});},pnotify:function(options){if(!body)
body=$("body");if(!jwindow)
jwindow=$(window);var animating;var opts;if(typeof options!="object"){opts=$.extend({},$.pnotify.defaults);opts.pnotify_text=options;}else{opts=$.extend({},$.pnotify.defaults,options);}
if(opts.pnotify_before_init){if(opts.pnotify_before_init(opts)===false)
return null;}
var nonblock_last_elem;var nonblock_pass=function(e,e_name){pnotify.css("display","none");var element_below=document.elementFromPoint(e.clientX,e.clientY);pnotify.css("display","block");var jelement_below=$(element_below);var cursor_style=jelement_below.css("cursor");pnotify.css("cursor",cursor_style!="auto"?cursor_style:"default");if(!nonblock_last_elem||nonblock_last_elem.get(0)!=element_below){if(nonblock_last_elem){dom_event.call(nonblock_last_elem.get(0),"mouseleave",e.originalEvent);dom_event.call(nonblock_last_elem.get(0),"mouseout",e.originalEvent);}
dom_event.call(element_below,"mouseenter",e.originalEvent);dom_event.call(element_below,"mouseover",e.originalEvent);}
dom_event.call(element_below,e_name,e.originalEvent);nonblock_last_elem=jelement_below;};var pnotify=$("<div />",{"class":"ui-pnotify "+opts.pnotify_addclass,"css":{"display":"none"},"mouseenter":function(e){if(opts.pnotify_nonblock)e.stopPropagation();if(opts.pnotify_mouse_reset&&animating=="out"){pnotify.stop(true);animating="in";pnotify.css("height","auto").animate({"width":opts.pnotify_width,"opacity":opts.pnotify_nonblock?opts.pnotify_nonblock_opacity:opts.pnotify_opacity},"fast");}
if(opts.pnotify_nonblock){pnotify.animate({"opacity":opts.pnotify_nonblock_opacity},"fast");}
if(opts.pnotify_hide&&opts.pnotify_mouse_reset)pnotify.pnotify_cancel_remove();if(opts.pnotify_closer&&!opts.pnotify_nonblock)pnotify.closer.show();},"mouseleave":function(e){if(opts.pnotify_nonblock)e.stopPropagation();nonblock_last_elem=null;pnotify.css("cursor","auto");if(opts.pnotify_nonblock&&animating!="out")
pnotify.animate({"opacity":opts.pnotify_opacity},"fast");if(opts.pnotify_hide&&opts.pnotify_mouse_reset)pnotify.pnotify_queue_remove();pnotify.closer.hide();$.pnotify_position_all();},"mouseover":function(e){if(opts.pnotify_nonblock)e.stopPropagation();},"mouseout":function(e){if(opts.pnotify_nonblock)e.stopPropagation();},"mousemove":function(e){if(opts.pnotify_nonblock){e.stopPropagation();nonblock_pass(e,"onmousemove");}},"mousedown":function(e){if(opts.pnotify_nonblock){e.stopPropagation();e.preventDefault();nonblock_pass(e,"onmousedown");}},"mouseup":function(e){if(opts.pnotify_nonblock){e.stopPropagation();e.preventDefault();nonblock_pass(e,"onmouseup");}},"click":function(e){if(opts.pnotify_nonblock){e.stopPropagation();nonblock_pass(e,"onclick");}},"dblclick":function(e){if(opts.pnotify_nonblock){e.stopPropagation();nonblock_pass(e,"ondblclick");}}});pnotify.opts=opts;if(opts.pnotify_shadow&&!$.browser.msie)
pnotify.shadow_container=$("<div />",{"class":"ui-widget-shadow ui-corner-all ui-pnotify-shadow"}).prependTo(pnotify);pnotify.container=$("<div />",{"class":"ui-widget ui-widget-content ui-corner-all ui-pnotify-container "+(opts.pnotify_type=="error"?"ui-state-error":"ui-state-highlight")}).appendTo(pnotify);pnotify.pnotify_version="1.0.1";pnotify.pnotify=function(options){var old_opts=opts;if(typeof options=="string")
opts.pnotify_text=options;else
opts=$.extend({},opts,options);pnotify.opts=opts;if(opts.pnotify_shadow!=old_opts.pnotify_shadow){if(opts.pnotify_shadow&&!$.browser.msie)
pnotify.shadow_container=$("<div />",{"class":"ui-widget-shadow ui-pnotify-shadow"}).prependTo(pnotify);else
pnotify.children(".ui-pnotify-shadow").remove();}
if(opts.pnotify_addclass===false)
pnotify.removeClass(old_opts.pnotify_addclass);else if(opts.pnotify_addclass!==old_opts.pnotify_addclass)
pnotify.removeClass(old_opts.pnotify_addclass).addClass(opts.pnotify_addclass);if(opts.pnotify_title===false)
pnotify.title_container.hide("fast");else if(opts.pnotify_title!==old_opts.pnotify_title)
pnotify.title_container.html(opts.pnotify_title).show(200);if(opts.pnotify_text===false){pnotify.text_container.hide("fast");}else if(opts.pnotify_text!==old_opts.pnotify_text){if(opts.pnotify_insert_brs)
opts.pnotify_text=opts.pnotify_text.replace(/\n/g,"<br />");pnotify.text_container.html(opts.pnotify_text).show(200);}
pnotify.pnotify_history=opts.pnotify_history;if(opts.pnotify_type!=old_opts.pnotify_type)
pnotify.container.toggleClass("ui-state-error ui-state-highlight");if((opts.pnotify_notice_icon!=old_opts.pnotify_notice_icon&&opts.pnotify_type=="notice")||(opts.pnotify_error_icon!=old_opts.pnotify_error_icon&&opts.pnotify_type=="error")||(opts.pnotify_type!=old_opts.pnotify_type)){pnotify.container.find("div.ui-pnotify-icon").remove();if((opts.pnotify_error_icon&&opts.pnotify_type=="error")||(opts.pnotify_notice_icon)){$("<div />",{"class":"ui-pnotify-icon"}).append($("<span />",{"class":opts.pnotify_type=="error"?opts.pnotify_error_icon:opts.pnotify_notice_icon})).prependTo(pnotify.container);}}
if(opts.pnotify_width!==old_opts.pnotify_width)
pnotify.animate({width:opts.pnotify_width});if(opts.pnotify_min_height!==old_opts.pnotify_min_height)
pnotify.container.animate({minHeight:opts.pnotify_min_height});if(opts.pnotify_opacity!==old_opts.pnotify_opacity)
pnotify.fadeTo(opts.pnotify_animate_speed,opts.pnotify_opacity);if(!opts.pnotify_hide)
pnotify.pnotify_cancel_remove();else if(!old_opts.pnotify_hide)
pnotify.pnotify_queue_remove();pnotify.pnotify_queue_position();return pnotify;};pnotify.pnotify_queue_position=function(){if(timer)
clearTimeout(timer);timer=setTimeout($.pnotify_position_all,10);};pnotify.pnotify_display=function(){if(!pnotify.parent().length)
pnotify.appendTo(body);if(opts.pnotify_before_open){if(opts.pnotify_before_open(pnotify)===false)
return;}
pnotify.pnotify_queue_position();if(opts.pnotify_animation=="fade"||opts.pnotify_animation.effect_in=="fade"){pnotify.show().fadeTo(0,0).hide();}else{if(opts.pnotify_opacity!=1)
pnotify.show().fadeTo(0,opts.pnotify_opacity).hide();}
pnotify.animate_in(function(){if(opts.pnotify_after_open)
opts.pnotify_after_open(pnotify);pnotify.pnotify_queue_position();if(opts.pnotify_hide)
pnotify.pnotify_queue_remove();});};pnotify.pnotify_remove=function(){if(pnotify.timer){window.clearTimeout(pnotify.timer);pnotify.timer=null;}
if(opts.pnotify_before_close){if(opts.pnotify_before_close(pnotify)===false)
return;}
pnotify.animate_out(function(){if(opts.pnotify_after_close){if(opts.pnotify_after_close(pnotify)===false)
return;}
pnotify.pnotify_queue_position();if(opts.pnotify_remove)
pnotify.detach();});};pnotify.animate_in=function(callback){animating="in";var animation;if(typeof opts.pnotify_animation.effect_in!="undefined")
animation=opts.pnotify_animation.effect_in;else
animation=opts.pnotify_animation;if(animation=="none"){pnotify.show();callback();}else if(animation=="show")
pnotify.show(opts.pnotify_animate_speed,callback);else if(animation=="fade")
pnotify.show().fadeTo(opts.pnotify_animate_speed,opts.pnotify_opacity,callback);else if(animation=="slide")
pnotify.slideDown(opts.pnotify_animate_speed,callback);else if(typeof animation=="function")
animation("in",callback,pnotify);else if(pnotify.effect)
pnotify.effect(animation,{},opts.pnotify_animate_speed,callback);};pnotify.animate_out=function(callback){animating="out";var animation;if(typeof opts.pnotify_animation.effect_out!="undefined")
animation=opts.pnotify_animation.effect_out;else
animation=opts.pnotify_animation;if(animation=="none"){pnotify.hide();callback();}else if(animation=="show")
pnotify.hide(opts.pnotify_animate_speed,callback);else if(animation=="fade")
pnotify.fadeOut(opts.pnotify_animate_speed,callback);else if(animation=="slide")
pnotify.slideUp(opts.pnotify_animate_speed,callback);else if(typeof animation=="function")
animation("out",callback,pnotify);else if(pnotify.effect)
pnotify.effect(animation,{},opts.pnotify_animate_speed,callback);};pnotify.pnotify_cancel_remove=function(){if(pnotify.timer)
window.clearTimeout(pnotify.timer);};pnotify.pnotify_queue_remove=function(){pnotify.pnotify_cancel_remove();pnotify.timer=window.setTimeout(function(){pnotify.pnotify_remove();},(isNaN(opts.pnotify_delay)?0:opts.pnotify_delay));};pnotify.closer=$("<div />",{"class":"ui-pnotify-closer","css":{"cursor":"pointer","display":"none"},"click":function(){pnotify.pnotify_remove();pnotify.closer.hide();}}).append($("<span />",{"class":"ui-icon ui-icon-circle-close"})).appendTo(pnotify.container);if((opts.pnotify_error_icon&&opts.pnotify_type=="error")||(opts.pnotify_notice_icon)){$("<div />",{"class":"ui-pnotify-icon"}).append($("<span />",{"class":opts.pnotify_type=="error"?opts.pnotify_error_icon:opts.pnotify_notice_icon})).appendTo(pnotify.container);}
pnotify.title_container=$("<div />",{"class":"ui-pnotify-title","html":opts.pnotify_title}).appendTo(pnotify.container);if(opts.pnotify_title===false)
pnotify.title_container.hide();if(opts.pnotify_insert_brs&&typeof opts.pnotify_text=="string")
opts.pnotify_text=opts.pnotify_text.replace(/\n/g,"<br />");pnotify.text_container=$("<div />",{"class":"ui-pnotify-text","html":opts.pnotify_text}).appendTo(pnotify.container);if(opts.pnotify_text===false)
pnotify.text_container.hide();if(typeof opts.pnotify_width=="string")
pnotify.css("width",opts.pnotify_width);if(typeof opts.pnotify_min_height=="string")
pnotify.container.css("min-height",opts.pnotify_min_height);pnotify.pnotify_history=opts.pnotify_history;var body_data=body.data("pnotify");if(body_data==null||typeof body_data!="object")
body_data=[];if(opts.pnotify_stack.push=="top")
body_data=$.merge([pnotify],body_data);else
body_data=$.merge(body_data,[pnotify]);body.data("pnotify",body_data);if(opts.pnotify_after_init)
opts.pnotify_after_init(pnotify);if(opts.pnotify_history){var body_history=body.data("pnotify_history");if(typeof body_history=="undefined"){body_history=$("<div />",{"class":"ui-pnotify-history-container ui-state-default ui-corner-bottom","mouseleave":function(){body_history.animate({top:"-"+history_handle_top+"px"},{duration:100,queue:false});}}).append($("<div />",{"class":"ui-pnotify-history-header","text":"Redisplay"})).append($("<button />",{"class":"ui-pnotify-history-all ui-state-default ui-corner-all","text":"All","mouseenter":function(){$(this).addClass("ui-state-hover");},"mouseleave":function(){$(this).removeClass("ui-state-hover");},"click":function(){$.each(body_data,function(){if(this.pnotify_history&&this.pnotify_display)
this.pnotify_display();});return false;}})).append($("<button />",{"class":"ui-pnotify-history-last ui-state-default ui-corner-all","text":"Last","mouseenter":function(){$(this).addClass("ui-state-hover");},"mouseleave":function(){$(this).removeClass("ui-state-hover");},"click":function(){var i=1;while(!body_data[body_data.length-i]||!body_data[body_data.length-i].pnotify_history||body_data[body_data.length-i].is(":visible")){if(body_data.length-i===0)
return false;i++;}
var n=body_data[body_data.length-i];if(n.pnotify_display)
n.pnotify_display();return false;}})).appendTo(body);var handle=$("<span />",{"class":"ui-pnotify-history-pulldown ui-icon ui-icon-grip-dotted-horizontal","mouseenter":function(){body_history.animate({top:"0"},{duration:100,queue:false});}}).appendTo(body_history);history_handle_top=handle.offset().top+2;body_history.css({top:"-"+history_handle_top+"px"});body.data("pnotify_history",body_history);}}
opts.pnotify_stack.animation=false;pnotify.pnotify_display();return pnotify;}});var re_on=/^on/;var re_mouse_events=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/;var re_ui_events=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/;var re_html_events=/^(scroll|resize|(un)?load|abort|error)$/;var dom_event=function(e,orig_e){var event_object;e=e.toLowerCase();if(document.createEvent&&this.dispatchEvent){e=e.replace(re_on,'');if(e.match(re_mouse_events)){$(this).offset();event_object=document.createEvent("MouseEvents");event_object.initMouseEvent(e,orig_e.bubbles,orig_e.cancelable,orig_e.view,orig_e.detail,orig_e.screenX,orig_e.screenY,orig_e.clientX,orig_e.clientY,orig_e.ctrlKey,orig_e.altKey,orig_e.shiftKey,orig_e.metaKey,orig_e.button,orig_e.relatedTarget);}else if(e.match(re_ui_events)){event_object=document.createEvent("UIEvents");event_object.initUIEvent(e,orig_e.bubbles,orig_e.cancelable,orig_e.view,orig_e.detail);}else if(e.match(re_html_events)){event_object=document.createEvent("HTMLEvents");event_object.initEvent(e,orig_e.bubbles,orig_e.cancelable);}
if(!event_object)return;this.dispatchEvent(event_object);}else{if(!e.match(re_on))e="on"+e;event_object=document.createEventObject(orig_e);this.fireEvent(e,event_object);}};$.pnotify.defaults={pnotify_title:false,pnotify_text:false,pnotify_addclass:"",pnotify_nonblock:false,pnotify_nonblock_opacity:.2,pnotify_history:true,pnotify_width:"300px",pnotify_min_height:"16px",pnotify_type:"notice",pnotify_notice_icon:"ui-icon ui-icon-info",pnotify_error_icon:"ui-icon ui-icon-alert",pnotify_animation:"fade",pnotify_animate_speed:"slow",pnotify_opacity:1,pnotify_shadow:false,pnotify_closer:true,pnotify_hide:true,pnotify_delay:8000,pnotify_mouse_reset:true,pnotify_remove:true,pnotify_insert_brs:true,pnotify_stack:{"dir1":"down","dir2":"left","push":"bottom"}};})(jQuery);(function($){$.jet.services.ajaxStartNote={start:false,options:{label:'loading...',closeable:false,show:function(){return true;}},init:function(){var $node={},self=this;$(document).ajaxStart(function(){if(!$.ajaxSettings.discrete&&self.options.show.call(this,arguments))
{typeof $node.remove=='function'&&$node.remove();$node=$.note.flash(self.options.label,self.options);}
$.ajaxSettings.discrete=false;}).ajaxStop(function(){typeof $node.remove=='function'&&$node.remove();});}};$.note={defaultOptions:{title:false,type:'info',delay:5000,onClose:function(){},ghost:false,hide:true,closeable:true,classes:'',width:50},note:function(note,options)
{$.pnotify.defaults.pnotify_stack.firstpos1=0;$.pnotify.defaults.pnotify_stack.firstpos2=0;options=$.extend({},this.defaultOptions,options);var opt={pnotify_text:note,pnotify_title:options.title,pnotify_history:false,pnotify_type:(function(){switch(options.type){case'warn':return'error';default:return'notice';}})(),pnotify_nonblock:options.ghost,pnotify_before_close:options.onClose,pnotify_delay:options.delay,pnotify_hide:options.hide,pnotify_addclass:options.classes,pnotify_width:options.width,pnotify_closer:options.closeable};$.inArray(options.type,['warn','stick'])!==-1&&(opt.pnotify_stack={animation:true,dir1:'up',dir2:'left',firstpos1:15,firstpos2:5,nextpos1:15,nextpos2:5,push:'bottom'});options.type=='flash'&&(opt.pnotify_stack={animation:true,dir1:'down',dir2:'right',firstpos1:50,firstpos2:5,nextpos1:50,nextpos2:5,push:'bottom'});return $.pnotify(opt);},info:function(note,options)
{return this.note(note,$.extend(options,{type:'info'}));},warn:function(note,options)
{return this.note(note,$.extend({hide:false,classes:'warn'},options,{type:'warn'}));},stick:function(note,options)
{return this.note(note,$.extend({hide:false,classes:'stick',closeable:true},options,{type:'stick'}));},flash:function(note,options)
{return this.note(note,$.extend({hide:false,classes:'flash',closeable:false},options,{type:'flash'}));}};$.note.log=$.note.info;$.note.error=$.note.warn;})(jQuery);(function($)
{$.counter={defaultOptions:{speed:250,countSpeed:25,from:null,value:'incr',limit:{min:null,max:null},limitState:{min:false,max:false},getValue:function()
{match=this.html().match(/[^\d]*(\d+)[^\d]*/);if(match!==null&&match.length>1)
{return parseInt(match[1]);}
return 0;},onLimit:null,afterChange:function(valueBefore,valueAfter,options)
{options.onLimit&&(options.limitState.min||options.limitState.max)&&options.onLimit.apply(this,[valueBefore,valueAfter,options]);$.core.$fake[0]=this;$.core.$fake.effect('pulsate',{times:2},options.speed);},beforeChange:function(valueBefore,valueAfter,options)
{var $this=$(this);if(options.from!==null)
{var $from=$(options.from);if($from.length===0||$from.length>1)
{console.warn('From is empty or contain more than one node so it can\'t be executed correctly');}
else{$from.effect('transfer',{to:$this,className:"ui-effects-transfer"},options.speed,function()
{$this.trigger('doChange',[valueBefore,valueAfter,options]);});}}
else{$this.trigger('doChange',[valueBefore,valueAfter,options]);}}},doChange:function(e,valueBefore,valueAfter,options)
{e.stopPropagation();var
$this=$(this),html=$this.html(),self=this,value=valueBefore,labelSingle=$this.attr('data-label-single'),labelMulti=$this.attr('data-label-multi'),changeValue=function()
{if(value!=valueAfter)
{value=(valueAfter>value?value+1:value-1);$this.data('counterValue',value);if(labelSingle&&labelMulti)
{$this.html(value>1?value+' '+labelMulti:value+' '+labelSingle);}
else{$this.html(html.replace(/\d+/,value));}
if(value!=valueAfter)
{return setTimeout(changeValue,options.countSpeed);}
options.afterChange.apply(self,[valueBefore,valueAfter,options]);}
$this.trigger('counterChanged',[valueBefore,valueAfter,options]);};changeValue();},beforeChange:function(e,options)
{e.stopPropagation();options.limitState={min:false,max:false};$.core.$fake[0]=this;options=$.extend({},$.core.$fake.data('counterOptions'),options);var valueBefore=options.getValue.apply($.core.$fake),valueAfter;if(typeof valueBefore=='number'&&!isNaN(valueBefore))
{valueAfter=(function(){switch(options.value)
{case'incr':case'+1':case'++':return valueBefore+1;case'decr':case'--':case'-1':return valueBefore-1;default:return options.value;}})();options.limit.min!==null&&valueAfter<=options.limit.min&&(valueAfter=options.limit.min,options.limitState.min=true);options.limit.max!==null&&valueAfter>=options.limit.max&&(valueAfter=options.limit.max,options.limitState.max=true);}
options.beforeChange.apply(this,[valueBefore,valueAfter,options]);}};$.fn.counter=function(options)
{options=$.extend({},$.counter.defaultOptions,options);return this.data('counterOptions',options).bind('counterChange',$.counter.beforeChange).bind('doChange',$.counter.doChange).each(function(){$.core.$fake[0]=this;$.core.$fake.data('counterValue',options.getValue.apply($.core.$fake));});};$.fn.counterValue=function()
{return this.first().data('counterValue');};})(jQuery);(function($){$.ccmUIEvent={defaultOptions:{noteOptions:{text:false,type:'info',delay:5000},counterOptions:{to:null,from:null,value:'incr'},redirectOptions:{url:null,delay:5000}},readEvent:function(name,options)
{options=$.extend(true,{},$.ccmUIEvent.defaultOptions,options);options.noteOptions.text!==false&&$.note.note(options.noteOptions.text,options.noteOptions);options.counterOptions.to!==null&&$(options.counterOptions.to).trigger('counterChange',[options.counterOptions]);options.redirectOptions.url!==null&&setTimeout(function()
{window.location=options.redirectOptions.url;},options.redirectOptions.delay);$.profile&&console.log('ccmUIEvent',name,options);},readFromData:function()
{if(typeof $data!='undefined'&&typeof $data.ccmUIEvent!='undefined')
{for(var i in $data.ccmUIEvent)
{$data.ccmUIEvent.hasOwnProperty(i)&&$.ccmUIEvent.readEvent(i,$data.ccmUIEvent[i]);}}},start:function(){$.ccmUIEvent.readFromData();}};$(document).bind('ccmUIEvent',function(e,name,options)
{(!name||!options)&&(console.error('you need to specify a name and options when you fire a ccmUIEvent.'));$.ccmUIEvent.readEvent(name,options);}).ready(function(){setTimeout($.ccmUIEvent.start,250);});})(jQuery);
(function($){$.copainsdavantSearchEngine={type:{1:{label:'$l{LIB_PERSONNE}'},2:{label:'$l{LIB_ETABLISSEMENT}'},4:{label:'$l{LIB_ARTICLE}'},5:{label:'$l{LIB_VILLE}'}},initMark:function(query)
{$('h3.h5 a').mark(query);$('li.separ1-10 p.marT5').mark(query);}};$.fn.copainsdavantSearchEngine=function(config)
{$.copainsdavantSearchEngine.microTemplateInit();config=$.extend(true,{},{width:400,onSelectItemGotoPage:true},config);return this.each(function()
{var self=$(this),button=self.siblings('button.submit'),defaultValue=escape($.trim(self.data('default'))),xhr,$uinav=$('div#results div.ui-sub-nav'),selectData={},loadingData={3:function()
{}},optionCCMUITabs={history:true,tabHandlers:{load:loadingData,select:selectData}};$uinav.ccmUITabs(optionCCMUITabs);self.tipsy({title:function()
{var self=$(this);if(escape($.trim(self.val()))==defaultValue)
{return self.attr('original-title');}
return'';},gravity:'n',delayIn:100,fade:false,opacity:0.75}).bind('focus',function(){$(this).tipsy("hide");}).ccmComplete({delay:250,minLength:2,preSelectFirst:config.preSelectFirst,cache:true,dataType:"json",select:function(event,ui)
{if(config.onSelectItemGotoPage)
{window.location=ui.item.url;event.preventDefault();event.stopPropagation();}else{self.attr('value',ui.item.value);self.closest('form').submit();}},open:function()
{$('div.box3 ul.ui-autocomplete').css("width",config.width).css("z-index",111).parent().css("width",config.width).css("z-index",2111).find('.parentMoreResults').parent().addClass('moreResults');},source:function(request,response)
{$.profile&&(console.groupCollapsed('searchengine complete')||console.time('total'));$.ajaxSettings.discrete=true;$.profile&&console.time('search : ajax to success');xhr&&xhr.abort();xhr=$.ajax({url:'/s/',cache:true,dataType:"json",localCache:true,storageName:'search_v2_'+$data.copains.user.uid,localCacheTimeout:2*60*60*1000,data:{q:request.term.toLowerCase(),xhr:true,ty:function()
{if(typeof self.attr('data-type')!='undefined')
{return self.attr('data-type');}
if(typeof config.ty!='undefined'){return config.ty;}
return'';},year:$data.copains.page.actualYear!='undefined'?$data.copains.page.actualYear:''},success:function(data)
{if(data==null){response([]);return;}
$.profile&&console.timeEnd('search : ajax to success'),console.time('success ccmcomplete');var map=$.map(data.r,function(item)
{if(item==undefined)return;if(item.id==null){var ret=[{label:item.ti,value:request.term,url:item.li,className:'parentMoreResults'}];}else{var
ret=[{label:'<div class="line acItem">'
+((item.photo!=null)?'<div class="bloc imgW26Cter imgS0Cter marR5"><div class="imgS0"><div class="imgW26 sizeSquare" style="background-image: url('+item.photo+')"></div></div></div>':'')
+'<span class="block copTheme1">'
+((item.ti!=null)?item.ti:'')
+((item.vi!=null)?' <em>'+item.vi+'</em>':'')
+'</span>'
+'<em>'+((item.label!=null)?item.label:((item.ty!=null)?$.copainsdavantSearchEngine.getTemplate($.copainsdavantSearchEngine.type[item.ty].label):''))+'</em>'
+'<span class="ico icoSearchG"></span>'
+'</div>',value:item.ti,url:item.li}];}
return ret;});response(map);$.profile&&(console.timeEnd('success ccmcomplete')||console.timeEnd('total')||console.groupEnd());}});}});button.bind('click',function(e)
{e.preventDefault();var term=$.halfEscape($.trim(self.val()));if(term===''||term==defaultValue)
{self.extendedTipsy({title:$.copainsdavantSearchEngine.getTemplate('$l{TIP_EMPTY}'),timeout:2000});return;}
window.location='/s/?q='+term;});});};$.extend($.copainsdavantSearchEngine,$.microTemplate);})(jQuery);(function($)
{$.fn.moreResults=function(options)
{$.profile&&console.time('moreResults.init');options=$.extend({},$.fn.moreResults.defaultOptions,options);var self=this;$('body').on('click',self.selector,function()
{$.profile&&console.time('moreResults.load');var $self=$(this).addClass('loading');$self.click(function(){return false;});var url=options.source||$self.attr('data-source')||$self.attr('href'),$tgt=(function()
{var $destination=$(options.destination);if($destination.length>0)
{return $destination;}
$destination=$($self.attr('data-destination'));if($destination.length>0)
{return $destination;}
return $self.closest('.jListContainer');})();if(url&&$tgt)
{$.ajax({url:url,data:{xhr:1},dataType:'json',success:function(data){options.success.call($self,data,$tgt);$(document).trigger('refresh');$.profile&&console.timeEnd('moreResults.load');},error:function(error,text)
{$.note&&$.note.error(text);$self.removeClass('loading').addClass('error');}});}
return false;});$.profile&&console.timeEnd('moreResults.init');};$.fn.moreResults.defaultOptions={destination:null,source:null,success:function(data,$target){$target.append(data.html);this.closest('.jMore').remove();if(typeof data.copains!='undefined')
{$.extend(true,$data.copains,data.copains);}}};})(jQuery);(function($){$.fn.autoResizeTextAreaQ=function(options){var opts=$.extend({max_rows:10,extra_rows:1,rows:null,cols:null,debug:false},options);if($.browser.msie){opts.extra_rows+=1;}else if($.browser.webkit){opts.extra_rows+=1;}return $(this).filter('textarea').each(function(index){var ta=$(this);var orig={};if(opts.cols!=null&&opts.cols>0){ta.attr('cols',opts.cols);}orig.cols=ta.attr('cols');if(opts.rows!=null&&opts.rows>0){ta.attr('rows',opts.rows);}orig.rows=ta.attr('rows');if(opts.max_rows==null||opts.max_rows<orig.rows){opts.max_rows=orig.rows;}if(opts.extra_rows==null||opts.extra_rows<0){opts.extra_rows=0;}if(opts.debug){console.log('opts: ',opts,' orig: ',orig);}resize(ta,orig);ta.bind('keyup',function(e){resize(ta,orig);});});function resize(ta,orig){var nl_rows=ta.val().split('\n');var nbr_ta_rows=0;for(index in nl_rows){nbr_ta_rows+=Math.floor((nl_rows[index].length/orig.cols))+1;}var final_nbr_ta_rows=nbr_ta_rows-1;final_nbr_ta_rows+=opts.extra_rows;if(final_nbr_ta_rows>=opts.max_rows){ta.attr('rows',opts.max_rows);}else if(final_nbr_ta_rows>=orig.rows){ta.attr('rows',final_nbr_ta_rows);}else{ta.attr('rows',orig.rows);}if(opts.debug){console.log('rows: ',ta.attr('rows'),' nbr nl_rows: ',nl_rows.length,' nbr_ta_rows: ',nbr_ta_rows,' final_nbr_ta_rows: ',final_nbr_ta_rows);}}};})(jQuery);(function($)
{$.ccmImageTags={defaultOptions:{defaultWidth:50,defaultHeight:50,minWidth:50,minHeight:50,maxWidth:'',maxHeight:'',allowAdd:true,maxTags:null,action:null,hide:false,onTagCreated:function(){},getTagData:function(){},onTagSaved:function(){},onTagFocusOn:function(){},onTagFocusOff:function(){},onLoad:function(){},toActualize:function(){},moveAll:function(){}},addTagData:{},getTagPosition:function(pointer)
{var $node=$('#jqueryImageTags_'+pointer+' .jTags .select');return{'left':$.ccmImageTags.pixelToPercent(pointer,$node.css('left'),'left'),'top':$.ccmImageTags.pixelToPercent(pointer,$node.css('top'),'top'),'width':$.ccmImageTags.pixelToPercent(pointer,$node.css('width'),'width'),'height':$.ccmImageTags.pixelToPercent(pointer,$node.css('height'),'height')};},pixelToPercent:function(pointer,pixel,type)
{pixel=parseInt(pixel.toString().replace('px',''),10);var $image=$('#jqueryImageTags_'+pointer+' img'),percent;switch(type){case'left':case'width':percent=(100/$image.width())*pixel;break;case'top':case'height':percent=(100/$image.height())*pixel;break;}
return percent;},percentToPixel:function(pointer,percent,type)
{percent=parseFloat(percent.toString().replace('%',''));var $image=$('#jqueryImageTags_'+pointer+' img'),pixel;switch(type){case'left':case'width':pixel=(percent/100)*$image.width();break;case'top':case'height':pixel=(percent/100)*$image.height();break;}
return pixel;}};$.fn.ccmImageTags=function(options){options=jQuery.extend({},$.ccmImageTags.defaultOptions,options);var prop={},$self=$(this),_getProperties=function(pointer)
{prop.firstLoad=false;prop.add=false;prop.edit=false;prop.set=false;prop.move=false;prop.hover=false;var image=$('#jqueryImageTags_'+pointer+' img'),url_decoupe=image.attr('src').split('/'),without_ext=url_decoupe[url_decoupe.length-1].split('.');prop.imageId=without_ext[0];prop.application=$data.copains.page.imageApplication;prop.authorizedTag=$data.copains.page.authorizedTag;prop.imageOwnerId=$data.copains.page.imageOwnerId;prop.tagsData=$data.copains.page.tagsData;prop.width=image.width();prop.height=image.height();prop.left=image.offset().left;prop.top=image.offset().top;if(options.defaultWidth>prop.width){options.defaultWidth=options.minWidth;}
if(options.defaultHeight>prop.height){options.defaultHeight=options.minHeight;}},_configSettings=function(pointer)
{prop.minWidth=(options.minWidth.toString().match('%'))?_percentToPixel(pointer,options.minWidth,'width'):prop.minWidth=options.minWidth;if(prop.minWidth>prop.width){prop.minWidth=prop.width;prop.maxWidth='';}else{prop.maxWidth=(options.maxWidth.toString().match('%'))?_percentToPixel(pointer,options.maxWidth,'width'):prop.maxWidth=options.maxWidth;prop.maxWidth=(prop.maxWidth>prop.width)?prop.width:prop.maxWidth;}
prop.minHeight=(options.minHeight.toString().match('%'))?_percentToPixel(pointer,options.minHeight,'height'):prop.minHeight=options.minHeight;if(prop.minHeight>prop.height){prop.minHeight=prop.height;prop.maxHeight='';}else{prop.maxHeight=(options.maxHeight.toString().match('%'))?_percentToPixel(pointer,options.maxHeight,'height'):prop.maxHeight=options.maxHeight;prop.maxHeight=(prop.maxHeight>prop.height)?prop.height:prop.maxHeight;}},_initPlugin=function(matchedObj)
{var src=$(matchedObj).attr('src'),pointer=$('.jqueryImageTags-container').length;pointer++;prop={};imagePile.add(src,null,function(){_setContainer(matchedObj,pointer);_getProperties(pointer);_configSettings(pointer);_createHtml(pointer);$.each(prop.tagsData,function(){}