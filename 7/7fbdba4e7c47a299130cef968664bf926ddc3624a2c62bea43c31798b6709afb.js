function LoginDialog(option,regster_data){function init(){tabLogin=J.g("tabBtnLogin"),cLogin=J.g("tab_Login"),cRegister=J.g("tab_Register"),tabRegister=J.g("tabBtnRegister"),LOGIN=new Login,REGISTER=new Register,tabLogin.on("click",function(){LOGIN.show()}),tabRegister.on("click",function(){REGISTER.show()})}function postJSONP(e){var t="J__ID"+J.getTime().toString(16),n=D.createElement("div"),r=D.createElement("form"),i=[],s=e.data;GUID&&GUID.parentElement.removeChild(GUID),GUID=n;var o=document.head||document.getElementsByTagName("head")[0];n.innerHTML='<iframe id="'+t+'" name="'+t+'"></iframe>',n.style.display="none";for(var u in s)i.push("<input type='hidden' name='"+u+"' value='"+s[u]+"' />");e.callback&&i.push("<input type='hidden' name='callback' value='"+e.callback+"' />"),r.innerHTML=i.join(""),r.action=e.url,r.method="post",r.target=t,n.appendChild(r),o.insertBefore(n,o.firstChild),r.submit(),r=null}function showLogin(e){for(var t in e)e[t]&&(customEvent[t]=e[t]);isLogin=!0,show()}function showRegister(){isRegister=!0,show()}function show(){html='<div class="dialog_c register_c" style="border: 1px solid #999"><div class="t">\u60a8\u5c1a\u672a\u767b\u5f55<a class="close"></a></div><div class="l"><div class="tab clearfix"><span '+(isLogin?'class="on"':"")+'id="tabBtnLogin">\u767b\u5f55</span><span id="tabBtnRegister" class="'+(isRegister?"on":"")+'" style="margin-left: -1px;">\u6ce8\u518c</span></div><ul '+(isLogin?'style="display:block"':'style="display:none"')+'id="tab_Login">'+'<li><label>\u767b\u5f55\u540d\uff1a</label><input maxlength="40" type="text" id="iptLoginName" placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1/\u624b\u673a\u53f7/\u7528\u6237\u540d" name="userName"/><span style="display: none" class="v_tooltip v_success"></span>'+'<div class="li_error" style=""><label class="v_error" id="info_iptLoginName" style="display: none">\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef</label></div></li>'+'<li style=""><label>\u5bc6\u7801\uff1a</label><input name="pwd" maxlength="50" placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801" id="iptLoginPwd" type="password"/><span style="display: none" class="v_tooltip v_success"></span>'+'<div style="height: 25px;position: relative;"><label id="info_iptLoginPwd" style="display: none" class="v_error">\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a</label></div></li>'+'<li id="codeBox" style="display:none"  class="clearfix codeHeight"><label>\u9a8c\u8bc1\u7801\uff1a</label> <div class="clearfix"><input type="hidden" name="source" value="pc_web" /><input type="text" id="iptLoginCode" maxlength="5" name="logincode" class="captcha_txt"  /><img class="captcha_img" id="iptLoginCodeImg" src="" width="90" height="26"><a class="captcha_click" id="iptLoginCodeBtn">\u6362\u4e00\u5f20</a></div>'+'<div style="height: 25px;position: relative;"><label id="info_iptLoginCode" style="display: none" class="v_error">dddd</label></div></li>'+'<p style="height:0px; border:0px; line-height:1px; overflow:hidden;zoom:0.08;"><p><li class="clearfix" style="clear:both"><input class="btnLogin" type="button" value="\u7acb\u5373\u767b\u5f55"/><a style="margin-left: 12px;line-height: 32px;display: inline-block;" href="'+opts.userDomain+"/pass?type=forget"+'">\u5fd8\u8bb0\u5bc6\u7801\uff1f</a></li>'+"</ul><ul "+(isRegister?'style="display:block"':'style="display:none"')+' id="tab_Register">'+'<li style="z-index: 10"><label>\u767b\u5f55\u540d\uff1a</label><input type="text" maxlength="50" id="iptUserName" name="userName"><span style="display: none" class="v_tooltip v_success"></span></li>'+'<li  class="li_error"><label id="info_userName" style="display: none" class="v_error">\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef</label></li><li><label>\u8bbe\u7f6e\u5bc6\u7801\uff1a</label><input maxlength="50" type="password" id="iptPassWord"><span style="display: none" class="v_tooltip v_success"></span></li>'+'<li class="li_error"><label id="info_PassWord" style="display: none" class="v_error">\u8bf7\u8f93\u5165\u5bc6\u7801</label></li>'+'<li class="li_code" id="b_mail" style="display: none"><label>\u9a8c\u8bc1\u7801\uff1a</label><input id="verify_pic" type="text" maxlength="5" name="code"><img id="iptRegCodeImg" style="display:inline;height: 32px;width: 93px;cursor:pointer;vertical-align: top;" src=""/><a style="line-height: 32px;" href="#" onclick="return false;">\u4e0b\u4e00\u5f20</a><span style="display:none" class="v_tooltip v_success"></span><div style="position: relative;left:0;height: 25px;" class="mail_error">'+'<label class="v_error" style="display: none;left: 0">\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a</label></div></li>'+'<li class="li_code" id="b_tel" style="display: none" ><label>\u9a8c\u8bc1\u7801\uff1a</label><input type="text" maxlength="5" name="code"><input class="cik_code" type="button" value="\u83b7\u53d6\u9a8c\u8bc1\u7801"/><div style="height: 25px;position: relative">'+'<label class="v_error" style="display: none;left: 0">\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a</label></div></li>'+'<li style="height: 16px;position: static"><label>&nbsp;</label><input id="ipt_ckb" class="ipt_ckb" checked="checked" type="checkbox" name="ckb"/> \u6211\u5df2\u9605\u8bfb\u5e76\u63a5\u53d7\u300a<a href="'+opts.userDomain+'/user-agreement.html">\u7528\u6237\u670d\u52a1\u534f\u8bae</a>\u300b</li>'+'<li class="li_error"><label id="info_agg" style="display: none" class="v_error">\u8bf7\u52fe\u9009\u62a5\u52a1\u534f\u8bae</label></li>'+'<li><input class="btnLogin" type="button" value="\u63d0\u4ea4\u6ce8\u518c"></li>'+"</ul></div>"+'<div class="r"><div class="r_t">\u60a8\u4e5f\u53ef\u4ee5\u7528\u5408\u4f5c\u7f51\u7ad9\u5e10\u53f7\u767b\u5f55\uff1a</div><div class="r_c"><a class="qq" href="'+opts.qq+'">QQ</a><a class="twitter" href="'+opts.weibo+'">\u65b0\u6d6a\u5fae\u535a</a></div></div></div>',objDialog=new J.ui.panel({autoClose:"",scroll:!1,mask:!1,modal:!0,title:"",content:html,close:!0,ok:"",cancel:"",width:620,height:"",position:{},drag:!1,fixed:"",onClose:null,onOk:null,onCancel:null,custom:null,tpl:"panel_login"}),init()}function Login(){function UserName(){function n(){e.val().trim()?e.val().trim().length<4?(t.html("\u8bf7\u8f93\u5165\u81f3\u5c114\u4e2a\u5b57\u7b26").show(),USERNAME.success=!1):(USERNAME.success=!0,(!saveUsername||saveUsername!=e.val())&&codeBox.hide(),e.next().show()):(t.html("\u8bf7\u8f93\u5165\u90ae\u7bb1/\u624b\u673a\u53f7/\u7528\u6237\u540d").show(),USERNAME.success=!1)}var e=J.g("iptLoginName"),t=J.g("info_iptLoginName");return e.on("blur",n),e.on("focus",function(){e.next().hide(),t.hide()}),{dom:e,validate:n}}function Pwd(){function n(){if(!e.val()){t.html("\u8bf7\u8f93\u5165\u5bc6\u7801").show(),PWD.success=!1;return}PWD.success=!0,e.next().show()}var e=J.g("iptLoginPwd"),t=J.g("info_iptLoginPwd");return e.on("blur",n),e.on("focus",function(){e.next().hide(),t.hide()}),{dom:e,dom_info:t,validate:n}}function Code(){var e=J.g("iptLoginCodeBtn");e.on("click",function(){codeDom_img.attr("src",opts.memberDomain+"/captcha?r="+Math.random())}),codeDom.on("focus",function(){codeDom_info.hide()})}function show(){tabRegister.removeClass("on"),tabLogin.addClass("on"),cRegister.hide(),cLogin.show()}function submitHandler(){USERNAME.validate(),PWD.validate(),USERNAME.success&&PWD.success&&(global.loginDailog.callbackLoginSuccess=function(ret){ret.error=="402"&&(codeDom_info.html("\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a").show(),codeBox.show()),ret.error=="403"&&(codeDom_img.attr("src",opts.memberDomain+"/captcha?r="+Math.random()),codeDom_info.html("\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e").show(),codeBox.show());if(!ret.result){var data=ret.data;if(data){var userid=data.USERID,usertype=data.USERTYPE;typeof customEvent.callback=="string"?eval(customEvent.callback):customEvent.callback(data),objDialog.close(),loginObj&&loginObj.refresh()}}else USERNAME.dom.next().hide(),PWD.dom.next().hide(),PWD.dom_info.html("\u767b\u9646\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165").show()},saveUsername=USERNAME.dom.val(),postJSONP({type:"jsonp",data:{url:opts.base64UrlLogin,history:opts.url,sid:"anjuke",isp:1,username:USERNAME.dom.val(),password:PWD.dom.val(),source:"pc_web",captcha:codeDom.val(),callback:"window.parent.global.loginDailog.callbackLoginSuccess"},url:opts.memberDomain+"/login"}))}var USERNAME,PWD,CODE,saveUsername,codeBox=J.g("codeBox"),codeDom=J.g("iptLoginCode"),codeDom_info=J.g("info_iptLoginCode"),codeDom_img=J.g("iptLoginCodeImg");return cLogin.s(".btnLogin").eq(0).on("click",submitHandler),USERNAME=new UserName,PWD=new Pwd,CODE=new Code,codeDom_img.attr("src",opts.memberDomain+"/captcha?r="+Math.random()),{show:show}}function Register(){function Stack(e){function r(e){!s(e)&&t.push(e)}function i(e){t.unshift(e)}function s(e){var n=0,r=t.length;for(;n<t.length;n++)if(t[n]===e)return!0;return!1}function o(e){var n=0,r=t.length;for(;n<r;n++)t[n]===e&&(delete t[n],t.splice(n,1));return!1}function u(e){t.length&&t.shift()(e)!==!1&&u()}var t=[],n={duplicate:!1,callback:function(){}};return{run:u,push:r,unShift:i,remove:o,stack:t}}function show(){tabLogin.removeClass("on"),tabRegister.addClass("on"),cLogin.hide(),cRegister.show()}function submitHandler(){BTN.get().disabled=!0,setTimeout(function(){BTN.get().disabled=!1},2e3);var data={formhash:"3bd8bc0a",useraction:1,referer:"index.php",history:opts.url,reg:0,register:1,type:"register",cityid:J.getCookie("ctid")||11,sid:"anjuke",url:opts.base64Register,service_term:1,history:opts.url,isp:1,from_register_page:"ok"};stack=new Stack;var timer=(new Date).getTime(),funName="beforeRegister"+timer;global.loginDailog[funName]=function(e){stack.run(e)},global.loginDailog.callbackRegisterSuccess=function(ret){if(!ret.result){if(typeof customEvent.callback=="string"){var data=ret.data,userid=data.USERID;eval(customEvent.callback)}else customEvent.callback(ret.data);objDialog.close();try{loginObj&&loginObj.refresh()}catch(e){}}else alert("\u6ce8\u518c\u5931\u8d25");delete global.loginDailog[funName]},stack.push(USERNAME.validate);if(submitType=="mail"){data.registerfrom="anjuke_email",data.email=USERNAME.dom.val(),data.password=PWD.dom.val(),data.verifycode=J.g("b_mail").s("input").eq(0).val(),stack.push(function(){return J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"email",email:USERNAME.dom.val(),r:Math.random()},callback:"global.loginDailog."+funName}),stack.unShift(function(e){var t=J.g("iptUserName"),n=J.g("info_userName");return e.result=="norepeat_email"?(t.next().show(),n.hide(),!0):e.result=="repeat_email"?(n.html("\u8be5\u90ae\u7bb1\u5df2\u6ce8\u518c\uff0c<a href="+opts.userDomain+"/my/login"+">\u70b9\u51fb\u767b\u5f55</a>"),n.show(),!1):(n.html("\u8f93\u5165\u5185\u5bb9\u683c\u5f0f\u6709\u8bef"),n.show(),!1)}),!1}),stack.push(PWD.validate),stack.push(function(){return J.get({type:"jsonp",url:opts.validateSuccessMail,data:{action:"ajax_times",r:Math.random(),callback:"global.loginDailog."+funName}}),stack.unShift(function(e){if(e.code==-1){var t=J.g("b_mail");t.show(),stack.unShift(function(){var e=J.g("b_mail").s("input").eq(0).val();return e?(stack.unShift(function(e){if(e.result=="success")return!0;var t=J.g("b_mail").s("label").eq(1);return t.html("\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e").show(),cRegister.s(".li_code").eq(0).s("img").eq(0).attr("src",opts.imgMailCode.replace(/(?:r=).*/,"r="+Math.random())),!1}),J.get({type:"jsonp",url:opts.validateSuccessMail,data:{action:"check_code",_r:Math.random(),code:e},callback:"global.loginDailog."+funName}),!1):(J.g("b_mail").s("label").eq(1).html("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801").show(),!1)})}}),!1}),stack.push(AGREEMENT.validate),stack.push(function(){return postJSONP({type:"jsonp",data:data,callback:"window.parent.global.loginDailog.callbackRegisterSuccess",url:opts.memberDomain+"/register"}),!1}),stack.run();return}data.registerfrom="anjuke_mobile",data.regtype="phone",data.tel=USERNAME.dom.val(),data.password=PWD.dom.val(),data.getcod=J.g("b_tel").s("input").eq(0).val(),stack.push(function(){return J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"mobile",phone:USERNAME.dom.val(),r:Math.random()},callback:"global.loginDailog."+funName}),!1}),stack.push(function(e){var t=J.g("iptUserName"),n=J.g("info_userName");return e.result=="normal"?(n.html('\u60a8\u7684\u624b\u673a\u5df2\u88ab\u6ce8\u518c\uff0c<a href="'+e.url+'">\u70b9\u51fb\u627e\u56de\u5bc6\u7801</a>').show(),t.next().hide(),!1):e.result=="broker"?(n.html('\u60a8\u5df2\u6ce8\u518c\u7ecf\u7eaa\u4eba\u5e10\u53f7\uff0c<a href="'+e.url+'">\u70b9\u6b64\u767b\u5f55</a>').show(),!1):e.result=="error"?(n.html("\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165").show(),!1):e.result=="success"?(t.next().show(),J.g("b_mail").show(),J.g("b_tel").show(),!0):!1}),stack.push(PWD.validate),stack.push(function(){var e=J.g("b_tel").s("input").eq(0);return e.val()?(J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"checkVerifyCode",_r:Math.random(),verifycode:e.val(),referer:opts.url,phone:J.g("iptUserName").val()},callback:"global.loginDailog."+funName}),!1):(J.g("b_tel").s(".v_error").eq(0).html("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801").show(),!1)}),stack.push(function(e){var t=J.g("b_tel").s(".v_error").eq(0);return e.result=="nocode"?(t.html("\u8bf7\u83b7\u53d6\u9a8c\u8bc1\u7801").show(),!1):e.result=="success"?!0:(t.html("\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e").show(),!1)}),stack.push(AGREEMENT.validate),stack.push(function(){return postJSONP({type:"jsonp",data:data,callback:"window.parent.global.loginDailog.callbackRegisterSuccess",url:opts.memberDomain+"/register"}),!1}),stack.run();return}function getPosition(e,t){var n={x:0,y:0},r=e.currentStyle||document.defaultView.getComputedStyle(e,null);if(!t)r.position=="absolute"?(n.x=e.offsetLeft-(parseInt(r.marginLeft)||0),n.y=e.offsetTop-(parseInt(r.marginTop)||0)):r.position=="relative"&&(n.x=parseInt(r.left)||0,n.y=parseInt(r.top)||0);else{for(var i=e;i.offsetParent&&i!=t;i=i.offsetParent)n.x+=i.offsetLeft,n.y+=i.offsetTop;r.position=="static"&&e.currentStyle&&(n.x+=(parseInt(document.body.currentStyle.marginLeft)||0)*2,n.y+=(parseInt(document.body.currentStyle.marginTop)||0)*2)}return n}function UserName(){function l(t){var n=t||eleUseName.val();return submitType=null,n?i.test(n)?(submitType="tel",J.g("b_tel").hide(),J.g("b_mail").show(),global.loginDailog.callbackTelValidate=h,!0):s.test(n)?(e.next().show(),submitType="mail",J.g("b_mail").show(),global.loginDailog.callbackMailValidate=c,!0):(VERIFICATION=null,r.html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u6216\u624b\u673a\u53f7\u683c\u5f0f"),r.show(),!1):(VERIFICATION=null,r.html("\u8bf7\u8f93\u5165\u90ae\u7bb1\u6216\u624b\u673a\u53f7"),r.show(),!1)}function c(t){return t.result=="norepeat_email"?(submitType="mail",e.next().show(),r.hide(),!0):t.result=="repeat_email"?(e.next().hide(),r.html("\u8be5\u90ae\u7bb1\u5df2\u6ce8\u518c\uff0c<a href="+opts.userDomain+"/my/login"+">\u70b9\u51fb\u767b\u5f55</a>"),r.show(),!1):(r.html("\u8f93\u5165\u5185\u5bb9\u683c\u5f0f\u6709\u8bef"),r.show(),!1)}function h(t){var n=J.g("b_tel").s(".v_error").eq(0);n.hide().html("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(t.result=="normal")return r.html('\u60a8\u7684\u624b\u673a\u5df2\u88ab\u6ce8\u518c\uff0c<a href="'+t.url+'">\u70b9\u51fb\u627e\u56de\u5bc6\u7801</a>').show(),e.next().hide(),!1;if(t.result=="broker")return r.html('\u60a8\u5df2\u6ce8\u518c\u7ecf\u7eaa\u4eba\u5e10\u53f7\uff0c<a href="'+t.url+'">\u70b9\u6b64\u767b\u5f55</a>').show(),!1;if(t.result=="error")return r.html("\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165").show(),!1;t.result=="success"&&(submitType="tel",r.html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u6216\u624b\u673a\u53f7\u683c\u5f0f").hide(),e.next().show())}var e=eleUseName,t,n,r=J.g("info_userName").hide(),i=/^1[3|4|5|8][0-9]\d{4,8}$/,s=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,o=!1,u=!1,a="";e.autocomplete({url:"",tpl:"autocomplete_ajk",width:"198",offset:{x:65,y:0},autoSubmit:!1,offsetTarget:J.g("body"),boxTarget:function(){return e.up(0)},forceClear:!1,source:function(e,t){var n=[{mail:"@qq.com"},{mail:"@163.com"},{mail:"@126.com"},{mail:"@hotmail.com"},{mail:"@gmail.com"},{mail:"@263.com"},{mail:"@sina.com"},{mail:"@sohu.com"}];/^\d+$/.test(e.userName)&&n.unshift({mail:""}),t(n)},dataMap:function(e){return e.l=e.mail,e.v=e.mail,e},itemBuild:function(e){var t=e.l,n=eleUseName.val(),r=n.indexOf("@");if(r>-1){var i=n.substr(r+1),s=new RegExp("@"+i);if(!s.test(t))return{l:"",v:""};n=n.replace(/@.*/g,"")}return{l:n+t,v:n+e.v}},onFocus:function(t){e.next().hide(),r.hide(),eleUseName.addClass("green_clolr")},onBlur:function(t){var n=e.val()!=a;a=n?e.val():a,J.on(document,"click",function(){l(),submitType=="mail"&&(J.g("b_mail").show(),J.g("b_tel").hide(),global.loginDailog.callbackMailValidate=c,J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"email",email:e.val(),r:Math.random()},callback:"global.loginDailog.callbackMailValidate"})),submitType=="tel"&&(J.g("b_mail").show(),J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"mobile",phone:e.val(),r:Math.random()},callback:"global.loginDailog.callbackTelValidate"})),J.un(document,"click",arguments.callee)})},onForceClear:function(){},onSelect:function(t){eleUseName.val(t.l);var n=e.val()!=a;a=n?e.val():a,l(t.l);if(submitType=="mail"){var r=J.g("b_mail");r.hide(),J.g("b_tel").hide(),r.s(".v_error").eq(0).hide(),r.s("label").eq(0).html("\u9a8c\u8bc1\u7801\uff1a"),global.loginDailog.callbackMailValidate=c,J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"email",email:t.l,r:Math.random()},callback:"global.loginDailog.callbackMailValidate"})}n&&submitType=="tel"&&(J.g("b_tel").show(),J.get({type:"jsonp",url:opts.userDomain+"/register",data:{chktype:"mobile",phone:t.l,r:Math.random()},callback:"global.loginDailog.callbackTelValidate"}))},onResult:function(){}