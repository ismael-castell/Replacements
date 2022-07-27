/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
function parse_query_string(n){for(var t,f,u=n.split("&"),i={},r=0;r<u.length;r++)t=u[r].split("="),typeof i[t[0]]=="undefined"?i[t[0]]=decodeURIComponent(t[1]):typeof i[t[0]]=="string"?(f=[i[t[0]],decodeURIComponent(t[1])],i[t[0]]=f):i[t[0]].push(decodeURIComponent(t[1]));return i}function openNav(){$(".topnav").toggleClass("responsive")}function ksearchvideo(){var n=$("#s_input").val().trim();return n&&$.ajax({type:"POST",url:k_url_search,data:{q:n,vt:k_page},beforeSend:function(){$("#loader-wrapper").css("display","block");$(".section-search").removeClass("bg-black");$("#search-form").css("display","none");$("#search-result").empty()},success:function(n,t,i){i.status!=200&&setTimeout(function(){window.location.reload()},3e3);n.status=="ok"?(n.p==="search"?renderListVideo(n.items):n.p!=="convert"||n.mess?n.p==="facebook"?n.mess?($("#search-form").css("display","block"),renderFail(n.mess)):(k_vdata=n,renderFacebook(n),loadAddthis()):n.mess&&($("#search-form").css("display","block"),renderFail(n.mess)):(k__token=n.token,k_time=n.timeExpires,renderDetail(n),loadAddthis()),$("#loader-wrapper").css("display","none")):setTimeout(function(){window.location.reload()},3e3)},error:function(){return convertFailed(txt_error_404)}}),!1}function loadAddthis(){typeof addthis!="undefined"&&$.isFunction(addthis.layers.refresh)&&addthis.layers.refresh()}function k_parseDuration(n){var i;if(!n)return"";var r=[],t=0,f=n.match(/(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)W)?(?:(\d*)D)?T(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/i),u=[{pos:1,multiplier:31536e3},{pos:2,multiplier:2592e3},{pos:3,multiplier:604800},{pos:4,multiplier:86400},{pos:5,multiplier:3600},{pos:6,multiplier:60},{pos:7,multiplier:1}];if(null===f)return"";for(i=0;i<u.length;i++)void 0!==f[u[i].pos]&&(t+=parseInt(f[u[i].pos])*u[i].multiplier);return 3599<t&&(r.push(parseInt(t/3600)),t%=3600),r.push(("0"+parseInt(t/60)).slice(-2)),r.push(("0"+t%60).slice(-2)),r.join(":")}function matchYoutubeUrl(n){var t=/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;return n.match(t)?n.match(t)[1]:!1}function fancyTimeFormat(n){var i=~~(n/3600),r=~~(n%3600/60),u=~~n%60,t="";return i>0&&(t+=""+i+":"+(r<10?"0":"")),t+=""+r+":"+(u<10?"0":""),t+(""+u)}function renderFail(n){var t='<div class="error"><p>'+n+"<\/p><\/div>";$("#search-result").html(t)}function renderListVideo(n){var t,i,r,u;if(n.length){for(i=$("<ul>",{"class":"listvideo"}),t=0;t<n.length;++t)item=n[t],r=c_url_tmp+yt_tmp+item.v,u='<li> <a  href="'+r+'" title="'+item.t+'" target="_blank"><div class="img-thumb"><img src="https://i.ytimg.com/vi/'+item.v+'/mqdefault.jpg" width="100%" height="100%"  alt="x2download youtube"/><span class="time">'+item.d+'<\/span><\/div> <div class="content"><div class="clearfix"><h3>'+item.t+"<\/h3><\/div><\/div><\/a><\/li>",i.append(u);$("#search-result").html(i)}}function convertSuccess(n){$("#mesg-convert").addClass("hidden");$("#asuccess").attr("href",n).removeClass("hidden");$("#cnext").removeClass("hidden")}function convertFailed(n){renderFail(n)}function checkTask(n){$.ajax({type:"POST",url:k_url_check_task,data:{vid:$("#video_id").val(),b_id:n},success:function(t,i,r){r.status!=200?checkTask(n):t.c_status=="CONVERTED"?convertSuccess(t.dlink):t.c_status=="FAILED"?convertFailed(t.mess):setTimeout(function(){checkTask(n)},5e3)},error:function(){checkTask(n)}})}function convertFile(n){var n=$("#formatSelect").find(":selected"),t=n.data("format"),i=n.val();$.ajax({type:"POST",url:k_url_convert,headers:{"X-Requested-Key":"de0cfuirtgf67a"},data:{v_id:$("#video_id").val(),ftype:t,fquality:i,token:k__token,timeExpire:k_time,client:k_prefix_name},beforeSend:function(){$("#formatSelect").addClass("hidden");$("#btn-action").addClass("hidden");$("#mesg-convert").removeClass("hidden")},success:function(n){if(typeof n.c_status=="undefined")return convertFailed(txt_error_404);if(n.c_status=="ok"&&typeof n.c_server!="undefined")convert_Server(n.c_server,t,i);else return n.c_status=="ok"&&typeof n.d_url!="undefined"?typeof n.checkLink!="undefined"?getLink_Server(n.d_url):convertSuccess(n.d_url):convertFailed(txt_error_404)},error:function(){return convertFailed(txt_error_500)}})}function getLink_Server(n){$.ajax({type:"GET",url:n,success:function(n){if(typeof n.c_status=="undefined")return convertFailed(txt_error_404);if(n.c_status=="ok")convertSuccess(n.link);else return convertFailed(txt_error_404)},error:function(){return convertFailed(txt_error_500)}})}function convert_Server(n,t,i){$.ajax({type:"POST",url:n+"/api/json/convert",data:{v_id:$("#video_id").val(),ftype:t,fquality:i,fname:$("#video_fn").val(),token:$("#c_token").val(),timeExpire:$("#c_time").val()},success:function(t){return typeof t.status=="undefined"?convertFailed(txt_error_404):t.status=="success"?t.statusCode==200?convertSuccess(t.result):t.statusCode==300&&typeof t.jobId!="undefined"?WSCheckStatus(n,t.jobId):convertFailed(getStatusText(t.statusCode)):convertFailed(txt_error_404)},error:function(){return convertFailed(txt_error_500)}})}function WSCheckStatus(n,t){const i=new URL(n);var r=i.protocol=="https:"?"wss:":"ws:",u=r+"//"+i.host+"/sub/"+t+"?fname="+k_prefix_name;socket=new WebSocket(u);socket.onmessage=function(n){var t=JSON.parse(n.data);t.action=="success"&&convertSuccess(t.url);t.action=="progress"?UpdateProgress(t.value):t.action=="error"&&convertFailed(txt_error_500)};socket.onerror=function(){convertFailed(txt_error_404)}}function UpdateProgress(n){var t=$("#mesg-convert span");t.removeClass("lds-dual-ring");t.text(n+"%")}function getStatusText(n){var t="";return n==500?t=txt_error_500:n==400?t=txt_error_404:n==300&&(t=txt_convert_next),t}function randomIntFromInterval(n,t){return Math.floor(Math.random()*(t-n+1)+n)}function renderDetail(n){var t='<div class="detail"><div class="thumbnail"><input type="hidden" id="video_id" value="'+n.vid+'" /><input type="hidden" id="video_fn" value="'+escapeHtml(n.fn)+'" /><input type="hidden" id="c_token" value="'+n.token+'" /><input type="hidden" id="c_time" value="'+n.timeExpires+'" />\n<img src="https://i.ytimg.com/vi/'+n.vid+'/mqdefault.jpg">\n<div class="content"><div class="clearfix">\n<h3>'+n.title+"<\/h3>\n<p>"+n.a+'<\/p>\n<p class="mag0">'+fancyTimeFormat(n.t)+"<\/p>";t+='<div class="magT10"> <div class="flex">';n.links!=undefined&&n.links!=null?(t+=renderSelectQuality(n.links),t+='<button id="btn-action" class="btn-blue-small form-control btn-ads" type="button" onclick="convertFile(0)">Get link<\/button>'):t+='<div class="error"><p>The live video cannot be processed. Please try again later.<\/p><\/div>';t+='<span id="mesg-convert" class="form-control mesg-convert hidden"> <span class="lds-dual-ring"><\/span> '+txt_processing+'<\/span><a id="asuccess" class="form-control mesg-convert success hidden" rel="nofollow" href="#"> '+txt_download+' <\/a> &nbsp &nbsp<a id="cnext" class="form-control mesg-convert hidden" href="'+k_url_next+'">'+txt_convert_next+'<\/a><\/div><br/><br/><br/> <div class="addthis_inline_share_toolbox"><\/div> <\/div><\/div><\/div><\/div>';$("#search-result").html(t);n.kc!=undefined&&n.kc!=null&&convertFile(n.kc)}function escapeHtml(n){"use strict";return n.replace(/[\"&'\/<>]/g,function(){}