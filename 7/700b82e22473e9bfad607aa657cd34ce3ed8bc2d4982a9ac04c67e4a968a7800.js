//import {Socket}		from './websockets/phoenix.js';

var SL_HOST 			= '';
var GRAPH_HOST 		= '';
var SOCKET_HOST 	= '';
var CONSUMER_CONFIG = null;
var ENVIRONMENT 	= {};
var PROVIDER 			= 'MGM';
var PROVIDER_CONFIG = {};

const STYLESHEETS 	= [];
const MODULES 			= {};
const SESS_DURATION = (4 * 60 * 60 * 1000); // 4 hours
const PIPELINE_SUBS = [];
const PROVIDERS 		= ['MGM','UNIBET','BET365','POINTSBET','SUGARHOUSE', 'FANDUEL', 'DRAFTKINGS','SIMULATOR'];
const SCOPE 				= {odds_display:'payout'};
const BOOTSTRAP 		= {};
const DEBUGGING 		= !!localStorage.getItem('sharplink_debugging');

const GLOBAL_CONTEXT 	= {players:[], teams:[], fixtures:[]};
const CONTEXT_SUBS 		= [];

let current_token 	= JSON.parse(sessionStorage.getItem('sharplink_session_jwt') || null);
let known_tokens 		= JSON.parse(sessionStorage.getItem('sharplink_known_jwts') || '{}');

///

function session_key(consumer, user) {
	return `${consumer}-${user}`;
}

function expired(token){
	return Date.now() > token.expires;
}

function get_location() {
	let options = {
		enableHighAccuracy	: false,
		timeout 			: 15000,	
		maximumAge 			: 1800000  // 30 minutes
	};
	return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
}


function session_token() {
	if(current_token) {
		if(!expired(current_token)){
			return current_token.token;
		} else {
			sessionStorage.removeItem('sharplink_session_jwt');
			current_token = null;
			return null;
		}
	} else {
		return null;
	}
}

function session() {
	// checks for expired tokens
	let t = session_token();
	if(t) {
		return current_token;
	} else {
		return null;
	}
}

let utils = {
	session_token : function() {
		return session_token();
	},
	session_options : function() {
		return session().options;
	},
	// INITIALIZATION FUNCTIONS
	/*

		sl__host 		: 'http://delivery.sharplink.us'
		socket_host 	: 'ws://delivery.sharplink.us:8080/socket'
		graph_host 		: `http://delivery.sharplink.us:8080/graphql`

	*/
	set_hosts : function(sl_host){
		SL_HOST 	= `${sl_host}`;
		GRAPH_HOST 	= `${sl_host}/graphql`;
		SOCKET_HOST = `${sl_host.replace('http','ws')}/socket`;
	},

	get_socket_host : function(){
		return SOCKET_HOST;
	},

	sl_host : function() {
		return SL_HOST;
	},

	// configuration
	/*
		{
		  "properties" : [],
		  "sections" : [
		    {
		      "name" : "section-name",
		      "properties" : [],
		      "sections" : []
		    }
		  ],
		  "consumer_id" : "7c6cd9fc-bd16-4e1f-82a9-fc70695c3797",
		  "name" : "sharplink"
		}
	*/
	set_config : function(c) {
		if(c && !CONSUMER_CONFIG){
			let config = {};
			config.name = c.name.toLowerCase();
			config.consumer_id = c.consumer_id;
			config.providers = c.providers;
			config.preferences = (c.config)  ? c.config : {};
			CONSUMER_CONFIG = config;
		}
		return CONSUMER_CONFIG;
	},

	config : function() {
		return CONSUMER_CONFIG || {};
	},

	get_config_section(section_name){
		let p = (CONSUMER_CONFIG.preferences.sections.find((s) => {return s.name === section_name;}) || {}).properties;
		
		let reducer = (props, pair) => {
			props[pair.name] = pair.value; 
			return props;
		};
		return (p || []).reduce(reducer, {}); 
	},
	
	// Bootstrap
	/* 
		save values from bootstrap script element
		{ 
			user_id,		String
			provider, 		['MGM','UNIBET']  
			geo_override, 	['true', 'false'] 
			odds_display  	['american','probability','float','payout']
		}
	*/

	bootstrap : function(){
		return BOOTSTRAP;
	},
	set_bootstrap : function(b) {
		Object.keys(b).forEach((k) => {
			BOOTSTRAP[k] = b[k];
		});
	},

	/*
		SCOPE
			odds_display ['american','probability','float','payout']

	*/
	set_scope(s){
		let d =(s.odds_display && ['american','probability','float','payout'].includes(s.odds_display.toLowerCase())) ? s.odds_display.toLowerCase() : 'payout';
		SCOPE.odds_display = (this.user_preferences() && this.user_preferences().odds_display) ? this.user_preferences().odds_display : d;
		let e = new CustomEvent("sl__odds_display_change", {"detail" : d});
		document.dispatchEvent(e);	
	},
	scope() {
		return SCOPE;
	},
	// environment
	/*
			environment : {
				app 	: 'Netscape',
				appcn 	: 'Mozzilla',
				pdct 	: 'Gecko',
				pltf 	: 'MacIntel',
				vnd 	: 'Google, Inc.',
				setting : 'desktop',
				imports : true
			}
	*/
	set_environment(env) {
		ENVIRONMENT = env;
	},

	environment() {
		return ENVIRONMENT;
	},

	// Session
	/*

			session : {
				options : {
					geo 		: {
						latitude 	: 44.543,
						longitude 	: -91.432,
						state 		: 'MN' 
					},
					location 	: {
						allowed : true,
						state 	: 'NJ'
					}
				},
				expires : 134231222,
				token 	: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJTaGFycGxpbmsiLCJle...'
			}

	*/
	session() {
		return session();
	},

	// PROVIDER 
	// MGM, UNIBET, etc.
	set_provider(p) {
		if(p && PROVIDERS.includes(p.toUpperCase())) PROVIDER = p.toUpperCase();
	},
	provider() {
		return this.user_preferences().provider || PROVIDER;
	},
	async provider_config(provider = 'MGM') {
		let prov = provider.toUpperCase();
		if (!PROVIDER_CONFIG[prov]){
			PROVIDER_CONFIG[prov] = await utils.graph_query(`query provider_info {
			    bettingProfile(provider: ${prov}){
			        id name alias 
			        properties{
			          name value
			        }
			      }
			 }`).then((rsp) => {
			 	return rsp;
			 });
		}
		return PROVIDER_CONFIG[prov];
	},

	//
	//
	set_user_preferences(p){
		this.to_storage('sharplink_preferences', p);
		if(p.odds_display){
			this.set_scope({odds_display:p.odds_display});
		}
		let e = new CustomEvent("sl__preference_change", {detail : p});
		document.dispatchEvent(e);
	},
	user_preferences(){
		return this.from_storage('sharplink_preferences') || {};
	},

	get_user_id(){
		return this.from_storage('sharplink_tracking_user_id', 'text') || null;
	},

	from_storage(item, mime = 'json') {
		return (mime.toLowerCase() === 'json') ? JSON.parse(window.localStorage.getItem(item)) : window.localStorage.getItem(item);
	},
	to_storage(item, value) {
		value = (typeof(value) == 'object') ? JSON.stringify(value) : value;
		window.localStorage.setItem(item, value);
	},

	get_cookie(cn) {
		var name = cn + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},

	set_cookie(c, v, exdays) {
	 	const d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = `${c}=${v};${expires};path=/`;
	},

	delete_cookie(n) {
		this.set_cookie(n, "", -1);
	},

	is_debugging() {
		return DEBUGGING;
	},
	location() {
		return (session() && session().options) ? session().options.location : {allowed:false};
	},
	is_betting_state(scope, config, user) {
		let geo_over = (scope.geo_override == 'true');
		let geo_cook = (this.get_cookie('sl__geo_override') == 'true');
		let geo_user = (user.location && user.location.allowed);
		return (geo_over || geo_cook || geo_user);
	},

	// Module Registration
	register_module(m) {
		MODULES[m.constructor.name] = MODULES[m.constructor.name] || [];
		MODULES[m.constructor.name].push({
							type 		: m.constructor.name, 
							id  		: m.element_id, 
							attributes 	: m.attributes,
							params 		: (m.params || {}),
							root 		: m.mrkp, 
							destroy 	: m.destroy.bind(m), 
							methods 	: (m.public_methods || {}),
							hide		: m.hide,
							show 		: m.show
						});
	},

	remove_module(m) {
		MODULES[m.constructor.name] = (MODULES[m.constructor.name] || []).filter((i) => {
			return (i.id != m.element_id);
		});
	},

	modules() {
		return MODULES;
	},

	module_by_id(id) {
		let matches = Object.keys(MODULES).map((k) => {
			return MODULES[k].filter((m) => {return m.id === id;});
		});
		return (matches.flat(2) || []);
	},
	modules_by_type(type) {
		return MODULES[type] || [];
	},
	hide_all() {
		let all = MODULES;
		Object.keys(all).forEach((k) => {
			if(k !== 'UserPreferencesDisplay') {
				all[k].forEach((m) => {
					m.hide();
				});
			}
		});
	},
	show_all() {
		let all = MODULES;
		Object.keys(all).forEach((k) => {
			all[k].forEach((m) => {
				m.show();
			});
		});
	},
	market_categories (league) {
		const CATEGORIES = {
		"nfl" 		: ['PLAYER','SIXPACK','SCORING','RACE'],
		"nba" 		: ['PLAYER','SIXPACK','SCORING','RACE'],
		"mlb" 		: ['PLAYER','SIXPACK','SCORING','RACE'],
		"cup" 		: ['MAIN','TOP_RANK','TOP_DRIVER','HEAD_TO_HEAD','OTHER'],
		"pga" 		: ['MAIN','TOP_RANK','GROUP_WINNER','PLAYER','TOP_PLAYER','TOP_SCORE','HEAD_TO_HEAD','OTHER'],
		"nbasim" 	: ['PLAYER','SCORING','SPREAD','TOTALS','RACE','OTHER']
		};
		return CATEGORIES[league.toLowerCase()] || [];
	},

	primary_category (league) {
		const CATEGORIES = {
			"cup" 		: 'WINNER',
			"pga" 		: 'WINNER'
		};
		return (CATEGORIES[league.toLowerCase()] || 'MONEYLINE');
	},


	// UTILITIES
	odds_as : {
		american : function(i) {
			if(i == 1) return '&nbsp;';
			let I = parseFloat(i);
			let n = Math.round((I*100) - 100);
			return  (n > 100) ? `+${n}` : `-${Math.ceil(100/(I-1))}`;
		},

		probability : function(i) {
			let I = parseFloat(i);
			return  `${((1/I) * 100).toFixed(2)}%`;
		},

		float : function(i) {
			return parseFloat(i);
		},
		payout : function(i, s = 1){
			let I = parseFloat(i);
			return `$${(I * s).toFixed(2)}`;
		}
	},

	catch_request_errors : (response) => {
		if (!response.ok) {	
			throw Error(response.statusText);
		}
		return response;
	},

	debounce : function (func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	},
	
  find_value (object, path, exec = true) {
    var parts = path.split('.');
    var hsh = object;
    while (parts.length > 0){
      var prt = parts.shift();
      if (prt.indexOf('[') != -1){
        var prop = prt.split('[')[0];
        var index = parseInt(prt.split('[')[1].replace(']', ''));
        var coll = hsh[prop];
        hsh = coll[index];
      } else {
        hsh = hsh[prt];
      }
      if (typeof hsh === 'function') {
      	return (exec) ? hsh() : hsh;
      }
      if (typeof hsh == 'undefined') {
      	return;
      }
    }
    return hsh;
  },

	boolean_value : function(v, d = true) {
		var rsp = d;
		switch (typeof(v)) {
		case 'boolean':
			rsp = v;
			break;
		case 'string':
			rsp = (v === 'true');
			break;
		}
		return rsp;
	},
	csv_value : function(v, type = 'string', d = null) {
		var rsp = d;
		switch (typeof(v)) {
		case 'string':
			rsp = v.split(',').map((i) => {return (type === 'numbers') ? parseFloat(i) : i;});
			break;
		}
		return rsp;
	},

	dom_from_string : function(htmlString, remove_spaces = true) {
		if (typeof htmlString == 'object') return htmlString;
	    var template = document.createElement('template');
	    //var html = htmlString.trim();
	    // Remove all spaces between html tags.
	    var html = (remove_spaces) ? htmlString.replace(/>\s+|\s+</g, function(m) {
		    return m.trim();
			}) : htmlString;
	    template.innerHTML = html;
	    return template.content.firstChild;
	},

	//
	is_actionable : function(el, event = 'click'){
		let keys = ['Enter','Space'];
		el.addEventListener('keydown', (ev) => {
			let key  = ev.code;
			if(keys.includes(key)){
				ev.preventDefault();
				let E = new Event(event);
				el.dispatchEvent(E);
			}
		});
	},


	load_css : function(url) {
		if(STYLESHEETS.includes(url)) return;
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = SL_HOST+url;
	    document.getElementsByTagName("head")[0].append(link);
	    STYLESHEETS.push(url);
	},

	delete_css : function(url) {
		const el = document.querySelector(`link[href=${url}]`);
		if(el) el.parentElement.removeChild(el);
		for( var i = 0; i < STYLESHEETS.length; i++){ 
			if ( arr[i] === url) {
				arr.splice(i, 1); 
			}
		}
	},

	load_class : async function(route, klass='default') {
		return import(route).then((rsp) => {
			return rsp[klass];
		});
	},
	
	in_overlay : function(props, for_module) {
		let b = document.body;
		let on_close = props.on_close || function(){};
		let has_header = (props.title !== 'none');
		let overlay = utils.dom_from_string(`<sl__overlay></sl__overlay>`);
		let modal = utils.dom_from_string(`<sl__offers class="sl__${ENVIRONMENT.setting} ${(!has_header) ? 'sl__hide_header' : ''}" module-origin="sharplink">
											<div class="sl__modal_header">
												<span class="sl__modal_header_left">
													<span class="sl__promotion_message">${(props.message)? props.message : ''}</span>
												</span>
												<span role="button" class="sl__close_button" tabindex="0">
													<svg width="36" height="37"viewBox="0 0 36 37" xmlns="http://www.w3.org/2000/svg">
														<path d="M33.2.472L36.028 3.3 20.83 18.5l15.2 15.2-2.829 2.828L18 21.33l-15.2 15.2L-.028 33.7 15.17 18.5-.029 3.3 2.8.472 18 15.67z" fill="#FFF" fill-rule="nonzero"/>
													</svg>
												</span>
											</div>
											<div class="sl__offers"></div>
										</sl__offers>`);
		let offers_el = modal.querySelector('.sl__offers');

		let close = function() {
			let c = function(){
				b.removeChild(modal);
				b.removeChild(overlay);
			};
			modal.classList.add('closing');
			setTimeout(c, 300);
			let focus_action = (for_module) ? for_module.on_focus() : null;
			on_close();
		};

		b.append(overlay);
		b.append(modal);			

		overlay.addEventListener('mouseup', close);
		let closer = modal.querySelector('.sl__close_button');
		this.is_actionable(closer, 'mouseup');
		closer.focus();
		closer.addEventListener('mouseup', close);
		return {
			add_offer 	: function(off) {
				offers_el.appendChild(off);
			},
			close 		: function(){
				close();
			}
		};
	},

	from_sharplink : async function(url, consumer_id, attempt = 1, method = 'GET'){
		let self 	= this;
		let jwt 	= session_token();
		let u 		= url;
		let id 		= consumer_id || ((utils.config()) ? utils.config().consumer_id : '');
		let retries = 3;
		let m 		= method;
		let att 	= attempt;
		let success = function(rsp) {return rsp.json();};
		let retry 	= function() {
			return (retries > attempt) ? 
				self.get_token(id).then((rsp) => {return self.from_sharplink(u, id, attempt+1, m);}) : Promise.resolve({});
		};
		return fetch(SL_HOST + u, {
			headers : {
					"Authorization": `Bearer ${jwt}`,
					'Content-Type': 'application/json'
			},
			method : m
		}).then(this.catch_request_errors).then((rsp) => {
			switch (rsp.status) {
			case 200:
				return success(rsp);
				break;
			case 401:
				return retry();
				break;
			default:
				return;
			}
		});
	},

	get_token : async function(consumer_id, consumer_reference) {
		//
		let key = session_key(consumer_id, consumer_reference);
		// IF KEY MATCHES CURRENT TOKEN AND ITS NOT EXPIRED
		if(current_token && current_token.key === key && !expired(current_token)){
			return current_token;
		}
		// ELSE IF I HAVE IT STORED AND ITS NOT EXPIRED, RETURN THE STORED TOKEN 
		if(known_tokens[key]) {
			if(!expired(known_tokens[key])){
				current_token = known_tokens[key];
				sessionStorage.setItem('sharplink_session_jwt', JSON.stringify(current_token));
				console.info('Using stored SharpLink session data for', consumer_reference);
				return current_token;
			} else {
				delete known_tokens[key];
				sessionStorage.setItem('sharplink_known_jwts', JSON.stringify(known_tokens));
			}
		}
		// ELSE CREATE A NEW ONE
		console.info('No stored tracking session for', consumer_reference);
		console.info('Creating NEW SharpLink Session for ', consumer_reference);
		//
		var GEO = {};

		let exp 	= new Date(Date.now() + SESS_DURATION).getTime();
		let body 	= {"session": {
						"consumer_id" 	: consumer_id, 
						"reference" 	: consumer_reference,
						"options"		: {}
					}};		
		return fetch(SL_HOST + '/api/sessions', {
		    method: 'post',
		    body: JSON.stringify(body),
			headers: {"Content-Type": "application/json"}
		 }).then((rsp) => {
		 	return rsp.json().then((session) => {
		 		let new_session = {
		 		 	"key" 			: key,
		 			"expires" 		: exp, 
		 			"token" 		: session.jwt, 
		 			"options" 		: session.options,
		 			"consumer_id" 	: consumer_id,
		 			"consumer_ref" 	: consumer_reference
		 		};
		 		current_token = new_session;
		 		known_tokens[key] = new_session;
		 		sessionStorage.setItem('sharplink_session_jwt', JSON.stringify(new_session));
		 		sessionStorage.setItem('sharplink_known_jwts', JSON.stringify(known_tokens));
		 		console.info('New session token created');
		 		return current_token;
		 	});
		 });
	},

	graph_query : function(q, v = {}) {
		let jwt 	= session_token();
		return fetch(`${GRAPH_HOST}`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${jwt}`,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({query: q, variables : v})
		})
		.then(r => r.json(), (err) => {console.log('FAIL', err);});
	},

	condense_market(m) {
		if(!m.market) return m;
		m.market.fixture = m.fixture;
		m.market.options = m.options;
		m.market.event = m.event;
		return m.market;

	},

	time_frame : function(ticks) {
		if(isNaN(ticks)){
			return '';
		}
		let rm 		= 0;
		let secs 	= Math.floor(ticks/1000);
		let d 		= Math.floor(secs/86400);
		rm 			= Math.floor(secs%86400);
		let h 		= Math.floor(rm/3600);
		rm 			= Math.floor(rm%3600);
		let m 		= Math.floor(rm/60);
		rm 			= Math.floor(rm%60);
		let s 		= rm;
		let parts = [[d, 'day'],[h, 'hour'],[m, 'minute'], [s, 'second']].map((p) => {return (p[0] > 0) ? `${p[0]} ${p[1]}${(p[0]==1) ? '' : 's'}` : null;});
		if(d > 0 || h > 0){parts.pop();}
		parts = parts.filter((p) => {return p;});
		return parts.join(' ');
	},
	weekday : function(date) {
		if(!date || !date.getDay) return '';
		let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
		return days[date.getDay()];
	},
	uuid : function() {
		return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, 