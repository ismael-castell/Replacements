// (c) by Gemius SA - gemius main script
// pro
// ver. 3.14

if (typeof gemius_cmpclient == "undefined") {
	gemius_cmpclient = {
		gemius_vendor_id : 328,
		cmp_frame : null,
		cmp_callbacks : {},
		add_event : function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		},
		find_cmp: function() {
			if (typeof window.__cmp == 'function')
				return true;
			var f = window;
			while (!gemius_cmpclient.cmp_frame) {
				try { if(f.frames["__cmpLocator"]) gemius_cmpclient.cmp_frame = f; } catch(e) {}
				if (f === window.top) break;
				f = f.parent;
			}
			if (gemius_cmpclient.cmp_frame == null)
				return false;
			gemius_cmpclient.add_event(window,"message",function(event) {
				try {
					var json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
					if (json.__cmpReturn) {
						var i = json.__cmpReturn;
						gemius_cmpclient.cmp_callbacks[i.callId](i.returnValue, i.success);
						delete gemius_cmpclient.cmp_callbacks[i.callId];
					}
				} catch(e) {}
			});
			return true;
		},
		get_consent: function(callback,purposes) {
			var called = false;
			var cmp_callback = function(data, success) {
				if (called) return;
				called = true;
				try {
					if (!success || !data.vendorConsents[gemius_cmpclient.gemius_vendor_id]) {
						callback(false);
						return;
					}
					for (var i=0; i<purposes.length; i++) {
						if (!data.purposeConsents[purposes[i]]) {
							callback(false);
							return;
						}
					}
				} catch(e) {
					callback(false);
					return;
				}
				callback(true);
			}
			if (typeof window.__cmp == 'function') {
				window.__cmp('getVendorConsents', [gemius_cmpclient.gemius_vendor_id], cmp_callback);
				return;
			}
			if (!gemius_cmpclient.cmp_frame) {
				callback(false);
				return;
			}
			var callId = Math.random() + "";
			var msg = {__cmpCall: {
					command: 'getVendorConsents',
					parameter: [gemius_cmpclient.gemius_vendor_id],
					callId: callId
				}};
			gemius_cmpclient.cmp_callbacks[callId] = cmp_callback;
			gemius_cmpclient.cmp_frame.postMessage(msg, '*');
		}
	}
}


if (typeof gemius_hcconn == "undefined") {
	gemius_hcconn = {
		lsdata : "",
		fpdata : "",
		gdprdata : [],
		event_identifier : null,
		current_receiver : null,
		waiting_for_fpdata : 1,
		waiting_for_lsdata : 1,
		params_ready_called : 0,
		waiting_on_prerender : 1,
		waiting_for_consent: 1,
		has_consent : null,
		closing : 0,
		visapi_s : "",
		visapi_h : "",
		visapi_c : "",
		loadinit : 0,
		fto : null,
		addto : null,
		sto : null,
		cmpto : null,
		ltime : 0,
		lsgetframe : null,
		sonar_data : [],
		timerevents : [],
		requests : [],
		images : [],
		state : 0,
		flashv : "",
		ssl : (document.location && document.location.protocol && document.location.protocol=='https:')?1:0,
		hc : (typeof gemius_hitcollector != 'undefined')?gemius_hitcollector:(typeof pp_gemius_hitcollector != 'undefined')?pp_gemius_hitcollector:'pro.hit.gemius.pl',
		dnt : (((typeof gemius_dnt != 'undefined') && gemius_dnt) || ((typeof pp_gemius_dnt != 'undefined') && pp_gemius_dnt))?1:0,
		use_cmp : (((typeof gemius_use_cmp != 'undefined') && gemius_use_cmp) || ((typeof pp_gemius_use_cmp != 'undefined') && pp_gemius_use_cmp))?1:0,
		cmp_purposes : (typeof gemius_cmp_purposes != 'undefined')?gemius_cmp_purposes:(typeof pp_gemius_cmp_purposes != 'undefined')?pp_gemius_cmp_purposes:[1,5],
		gdpr_applies : (typeof gemius_gdpr_applies != 'undefined')?gemius_gdpr_applies:(typeof pp_gemius_gdpr_applies != 'undefined')?pp_gemius_gdpr_applies:null,
		gdpr_consent : (typeof gemius_gdpr_consent != 'undefined')?gemius_gdpr_consent:(typeof pp_gemius_gdpr_consent != 'undefined')?pp_gemius_gdpr_consent:null,
		add_event : function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		},
		remove_script : function(){},
		append_script : function(){},
		xdot_loaded : function(){},
		sendhits : function(lsadd) {
			var i,j;
			if (gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
				for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
					var robj = gemius_hcconn.requests[i];
					var url = (gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/_';
					var d = new Date().getTime();
					var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
					var params = '&ltime='+gemius_hcconn.ltime+'&lsdata='+gemius_hcconn.lsdata+'&fpdata='+gemius_hcconn.fpdata+'&vis='+vis;
					if (gemius_hcconn.ssl==0 && lsadd!==null) {
						params += '&lsadd='+lsadd;
					}
					if (gemius_hcconn.has_consent!==true) {
						params += '&nc=1';
					}
					if (gemius_hcconn.closing) {
						url += (d+i)+'/redot.gif?l='+robj.vers+robj.req+params;
						if (typeof navigator.sendBeacon == "function") {
							navigator.sendBeacon(url);
						} else {
							var images_l = gemius_hcconn.images.length;
							gemius_hcconn.images[images_l]=new Image();
							gemius_hcconn.images[images_l].src = url;
						}
					} else if (gemius_hcconn.state>0 || robj.allowaddscript==0 || typeof gemius_open != 'undefined') {
						url += (d+i)+'/redot.js?l='+robj.vers+robj.req+params;
						gemius_hcconn.append_script(url,null,1);
					} else {
						url += (d+i)+'/rexdot.js?l='+robj.vers+robj.req+params;
						gemius_hcconn.state = 1;
						gemius_hcconn.append_script(url,gemius_hcconn.xdot_loaded,1);
					}
				}
				gemius_hcconn.requests = [];
			}
		},
		latehits : function() {
			if (gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
				if (gemius_hcconn.closing==0 && gemius_hcconn.ssl==0 && gemius_hcconn.lsdata!='' && gemius_hcconn.lsdata[0]!='-' && gemius_hcconn.lsgetframe) {
					if (gemius_hcconn.addto==null) {
						try {
							gemius_hcconn.lsgetframe.contentWindow.postMessage("_xx_gemius_get_add_xx_","*");
							gemius_hcconn.addto = setTimeout(gemius_hcconn.lsaddto,250);
						} catch (e) {
							gemius_hcconn.sendhits(null);
						}
					}
				} else {
					gemius_hcconn.sendhits(null);
				}
			}
		},
		lsaddto : function(){},
		paramsready : function() {
			if (gemius_hcconn.params_ready_called==0 && gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0) {
				var data = {'lsdata' : gemius_hcconn.lsdata, 'fpdata' : gemius_hcconn.fpdata};
				gemius_hcconn.params_ready_called = 1;
				try {
					if (typeof gemius_params_ready != 'undefined') {
						gemius_params_ready(data);
					} else if (typeof pp_gemius_params_ready != 'undefined') {
						pp_gemius_params_ready(data);
					}
				} catch (e) {}
			}
		},
		visibilitychanged : function() {
			if (document[gemius_hcconn.visapi_s]!='prerender' && gemius_hcconn.waiting_on_prerender) {
				gemius_hcconn.waiting_on_prerender = 0;
				setTimeout(gemius_hcconn.latehits,100);
			}
			gemius_hcconn.sonar_update();
		},
		unloadhit : function(robj,nr) {
			var url = (gemius_hcconn.ssl?'https://':'http://')+gemius_hcconn.hc+'/_';
			var d = new Date().getTime();
			var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
			var params = '&vis='+vis;
			params += '&fpdata='+((gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.has_consent)?gemius_hcconn.fpdata:"-UNLOAD");
			params += '&lsdata='+((gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.has_consent)?(gemius_hcconn.lsdata+'&ltime='+gemius_hcconn.ltime):"-UNLOAD");
			if (gemius_hcconn.has_consent!==true) {
				params += '&nc=1';
			}
			if (gemius_hcconn.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+params+robj.req;
				if (typeof navigator.sendBeacon == "function") {
					navigator.sendBeacon(url);
				} else {
					var images_l = gemius_hcconn.images.length;
					gemius_hcconn.images[images_l]=new Image();
					gemius_hcconn.images[images_l].src = url;
				}
			} else {
				url += (d+nr)+'/redot.js?l='+robj.vers+robj.req+params;
				gemius_hcconn.append_script(url,null,1);
			}
		},
		unload : function(closing) {
			try {
				var i;
				var uhits = gemius_hcconn.requests.length;
				var last = (!gemius_hcconn.closing && closing);
				gemius_hcconn.closing = (gemius_hcconn.closing>0 || closing)?1:0;
				if (gemius_hcconn.waiting_on_prerender==0) {
					for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
						gemius_hcconn.unloadhit(gemius_hcconn.requests[i],i+10);
					}
					gemius_hcconn.requests = [];
				}
				if (last) {
					gemius_hcconn.sonar_update();
					if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
						gemius_hcconn.sonar_save();
					}
					if (typeof navigator.sendBeacon != "function" && uhits > 0) {
						var start = (new Date()).getTime();
						while (start+200>(new Date()).getTime());
					}
				}
			} catch (e) {}
		},
		getfpcookie : function() {
			gemius_hcconn.fpdata = '-TURNEDOFF';
			try {
				var cookies = document.cookie.split(';');
				var cookie_arr;
				for (var i=0; i<cookies.length ; i++) {
					cookie_arr = cookies[i].split('=');
					if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_64b') {
						gemius_hcconn.fpdata = cookie_arr[1].replace(/^\s+|\s+$/g,'');
						return;
					}
				}
			} catch (e) {}
		},
		setfpcookie : function() {
			var now = (new Date()).getTime();
			var exp = now+86400000000;
			if (gemius_hcconn.fpdata!='') {
				try { document.cookie = "__gfp_64b="+gemius_hcconn.fpdata+"; path=/"+((gemius_hcconn.fpcdomain)?("; domain="+gemius_hcconn.fpcdomain):"")+"; expires="+(new Date(exp)).toGMTString(); } catch (e) {}
			}
		},
		fpdata_loaded : function(){},
		addframe : function(){},
		frameto : function(){},
		scriptto : function(){},
		last_datareceiver : function(){},
		second_datareceiver : function(){},
		first_datareceiver : function(){},
		msgreceiver : function(e) {
			if (typeof e.data=="string" && e.data.substr(0,15)=="_xx_gemius_xx_/") {
				if (gemius_hcconn.fto!=null) {
					clearTimeout(gemius_hcconn.fto);
					gemius_hcconn.fto = null;
					gemius_hcconn.ltime = (new Date()).getTime() - gemius_hcconn.loadinit;
				}
				if (gemius_hcconn.current_receiver!=null) {
					gemius_hcconn.current_receiver(e.data.substr(15));
				}
			}
			if (typeof e.data=="string" && e.data.substr(0,19)=="_xx_gemius_add_xx_/") {
				if (gemius_hcconn.addto!=null) {
					clearTimeout(gemius_hcconn.addto);
					gemius_hcconn.addto = null;
				}
				var lsadd = e.data.substr(19);
				gemius_hcconn.sendhits((lsadd=="-GETERR")?null:lsadd);
			}
		},
		getflashv : function(){},
		gdpr_params : function(){},
		parameters : function() {
			var d=document;
			var w=window;
			var href=new String(d.location.href);
			var ref;
			var f=0;
			var dd;
			if (d.referrer) { ref=new String(d.referrer); } else { ref=''; }
			if (typeof Error!='undefined') {
				try { f=(d==top.document)?1:2; if (typeof top.document.referrer=="string") { ref=top.document.referrer; } } catch(e) {f=3;}
			}
			try { if (ref=="" && typeof ia_document != "undefined" && ia_document.referrer) ref="https://" + (new String(ia_document.referrer));} catch(e) {}
			var url='&fr='+f+'&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(gemius_hcconn.flashv)+'&href='+encodeURIComponent(href.substring(0,499))+'&ref='+encodeURIComponent(ref.substring(0,499));
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			return url;
		},
		array_to_string : function(){},
		internal_hit : function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra) {
			var req = "";
			if (gemius_hcconn.event_identifier==null && id) {
				gemius_hcconn.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+et;
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			if (sonar) {
				req += '&initsonar=1';
				if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
					var cdata=gemius_hcconn.sonar_load(id,1);
					if (cdata[0]>=1) {
						var addparams=["_cnt="+cdata[0],"_dur="+cdata[1],"_vis="+cdata[2],"_freq="+cdata[3],"_evid="+cdata[4]];
						for (var i=0; i<addparams.length; i++) {
							if (extra.length>0) extra += '|';
							extra += ((new String(addparams[i])).replace(/\|/g,'_'));
						}
					}
				}
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+gemius_hcconn.parameters();
			gemius_hcconn.requests[gemius_hcconn.requests.length] = {req:req,allowaddscript:allowaddscript,vers:vers};
			gemius_hcconn.latehits();
		},
		timer : function(){},
		gtimer_add : function(){},
		sonar_update : function() {
			var i;
			for (i=0; i<gemius_hcconn.sonar_data.length; i++) {
				var data=gemius_hcconn.sonar_data[i];
				var time=((new Date()).getTime()) - data["lvchange"];
				if (time < 0) time = 0;
				if (data["dur"] + time > 24*3600*1000) time = 24*3600*1000 - data["dur"];
				if (data["lvstate"] == "visible") {
					data["dur"] += time;
					if (time < 4000) data["vdur"] += time;
				} else if (data["lvstate"] == "hidden" || !data["lvstate"]) {
					data["dur"] += time;
				}
				data["lvchange"] = ((new Date()).getTime());
				data["lvstate"] = (gemius_hcconn.visapi_s?document[gemius_hcconn.visapi_s]:"");
			}
		},
		sonar_add : function(identifier,evid,freq,extra) {
			gemius_hcconn.sonar_update();
			var data={};
			data["id"]=identifier;
			data["evid"]=evid;
			data["freq"]=freq;
			data["extra"]=extra;
			data["to"]=null;
			data["dur"]=((gemius_hcconn.sonar_data.length>0)?gemius_hcconn.sonar_data[0]["dur"]:0);
			data["vdur"]=((gemius_hcconn.sonar_data.length>0)?gemius_hcconn.sonar_data[0]["vdur"]:0);
			data["lvchange"] = ((new Date()).getTime());
			data["lvstate"] = (gemius_hcconn.visapi_s?document[gemius_hcconn.visapi_s]:"");
			data["linterval"] = ((new Date()).getTime());
			data["sdur"] = 0;
			if (identifier && evid && freq>0) {
				var fun=(function(sid){return function(){gemius_hcconn.sonar(sid);};}(gemius_hcconn.sonar_data.length));
				data["to"]=setInterval(fun, 1000);
			}
			gemius_hcconn.sonar_data[gemius_hcconn.sonar_data.length] = data;
		},
		sonar : function(sid) {
			var data, prob;
			gemius_hcconn.sonar_update();
			data=gemius_hcconn.sonar_data[sid];
			prob=(((new Date()).getTime()) - data["linterval"])/1000;
			data["linterval"]=((new Date()).getTime());
			while (prob>0) {
				if (data["sdur"]<24*3600 && prob<=4 && data["lvstate"]=="visible" && Math.random() < prob/data["freq"]) {
					gemius_hcconn.internal_hit(0,99,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
				}
				data["sdur"] += Math.min(prob,data["freq"]);
				prob -= data["freq"];
			}
		},
		sonar_save : function() {
			var exp = ((new Date()).getTime())+7200000;
			for (var i=0; i<gemius_hcconn.sonar_data.length; i++) {
				var data=gemius_hcconn.sonar_data[i];
				var cdata=gemius_hcconn.sonar_load(data["id"], 0);
				if (data["id"] && gemius_hcconn.fpcdomain) {
					var value = "__gfp_"+data["id"]+"="+(1+cdata[0])+"|"+(data["dur"]+cdata[1])+"|"+(data["vdur"]+cdata[2])+"|"+data["freq"]+"|"+data["evid"]+"|"+gemius_hcconn.fpcdomain;
					try { document.cookie = value + "; path=/; domain="+gemius_hcconn.fpcdomain+"; expires="+(new Date(exp)).toGMTString(); } catch (e) {}
				}
			}
		},
		sonar_load : function(id,del) {
			try {
				var cookies = document.cookie.split(';');
				for (var i=0; i<cookies.length ; i++) {
					var cookie_arr = cookies[i].split('=');
					if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_'+id) {
						var data = cookie_arr[1].replace(/^\s+|\s+$/g,'').split('|',6);
						if (data.length == 6) {
							if (del) try{document.cookie = "__gfp_"+id+"=~; path=/; domain="+data[5]+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;";} catch(e) {}
							return [parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), parseInt(data[3]), parseInt(data[4])];
						}
					}
				}
			} catch (e) {
			}
			return [0,0,0,0,0];
		},
		gdprdata_loaded : function() {
			try {
				for (var i=0; i<gemius_hcconn.cmp_purposes.length; ++i) {
					if (!gemius_hcconn.gdprdata[gemius_hcconn.cmp_purposes[i]-1]) {
						gemius_hcconn.consent_loaded(false);
						return;
					}
				}
			} catch (e) {
				gemius_hcconn.consent_loaded(false);
				return;
			}
			gemius_hcconn.consent_loaded(true);
		},
		consent_loaded : function(consent) {
			if (gemius_hcconn.cmpto!=null) {
				clearTimeout(gemius_hcconn.cmpto);
				gemius_hcconn.cmpto = null;
				gemius_hcconn.waiting_for_consent = 0;
				gemius_hcconn.has_consent = consent?true:false;
				if (gemius_hcconn.has_consent) {
					if (gemius_hcconn.waiting_for_fpdata) {
						gemius_hcconn.load_fpdata();
					}
					if (gemius_hcconn.waiting_for_lsdata) {
						gemius_hcconn.load_lsdata();
					}
				} else {
					gemius_hcconn.fpdata = '-NOCONSENT';
					gemius_hcconn.lsdata = '-NOCONSENT';
					gemius_hcconn.waiting_for_fpdata = 0;
					gemius_hcconn.waiting_for_lsdata = 0;
					gemius_hcconn.paramsready();
				}
				gemius_hcconn.latehits();
			}
		},
		consentto : function() {
			if (gemius_hcconn.cmpto!=null) {
				gemius_hcconn.cmpto = null;
				gemius_hcconn.waiting_for_consent = 0;
				gemius_hcconn.has_consent = false;
				gemius_hcconn.fpdata = '-CMPTIMEDOUT';
				gemius_hcconn.lsdata = '-CMPTIMEDOUT';
				gemius_hcconn.waiting_for_fpdata = 0;
				gemius_hcconn.waiting_for_lsdata = 0;
				gemius_hcconn.paramsready();
				gemius_hcconn.latehits();
			}
		},
		ghit : function(){},
		gevent : function(){},
		addscripthit : function() { gemius_hcconn.ghit(1,96,arguments,0,2,0); },
		plainhit : function() { gemius_hcconn.ghit(0,97,arguments,0,2,0); },
		addscriptevent : function() { gemius_hcconn.gevent(1,96,arguments,0,3,0); },
		plainevent : function() { gemius_hcconn.gevent(0,97,arguments,0,3,0); },
		pendingdata : function(){},
		sendpendingdata : function(){},
		findvisapi : function(){}