/*

Compiled Tuesday May 14, 2013 at 7:33pm America/New_York

Version: libphonenumber r574

------------------------------------------------------------------------


 Copyright (C) Alan Beebe (alan.beebe@gmail.com).

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 


Usage...

This is the same type of code used by cell phones when you enter
a phone number into your dialer app.  Your phone already knows
what country you are a subscriber in, so it assumes you are entering
a local number, unless of course you prefix the number with a +, or
in the USA you could also prefix the number with 011 to indicate you
wish to dial internationally.  This code functions the same way.

Lets assume your in the United States and you enter the following
phone number: 8646978257

formatE164("US", "8646978257");
 Returns: +18646978257

countryForE164Number("US", "+18646978257");
 Returns: US

formatInternational("US", "8646978257");
 Returns: (864) 697-8257
 Info: This is the format you use if you are displaying this number to users outside the US
 
formatLocal("US", "8646978257");
 Returns: (864) 697-8257
 Info: This is the format you use if you are displaying this number to users inside the US
       (In certain countries, this format will be different then the international format)
 
countryCodeToName("US");
 Returns: United States
	
	

*/


// -------------------------------------------------------------------------
function countryForE164Number(phone) {
	/*
	
	Return the country code for an e164 formatted number
	
	phone (String) phone number in e164 format to return the country code for
	
	*/
	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone);
	    var output = new goog.string.StringBuffer();
	    output = phoneUtil.getRegionCodeForNumber(number);
    	return output.toString();
    } catch (e) {
    	return "";
    }
}

// -------------------------------------------------------------------------
function formatNumberForMobileDialing(country, phone) {
	/*
	
	Returns a number formatted in such a way that it can be dialed from a mobile
	phone in a specific region. If the number cannot be reached from the region
	(e.g. some countries block toll-free numbers from being called outside of the
	country), the method returns an empty string.
	
	*/
	
	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone, country);
	    var output = new goog.string.StringBuffer();
	    output = phoneUtil.formatNumberForMobileDialing(number, country, true);
    	return output.toString();
    } catch (e) {
    	return "";
    }
}

// -------------------------------------------------------------------------
function isValidNumber(phone) {
	/*
	
	Tests whether a phone number matches a valid pattern. Note this doesn't
	verify the number is actually in use, which is impossible to tell by just
	looking at a number itself.
	
	*/
	
	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone, "");
	    return phoneUtil.isValidNumber(number);
    } catch (e) {
    	return false;
    }
}

// -------------------------------------------------------------------------
function formatE164(country, phone) {
	/*
	
	Return the phone number in e164 format
	
	country (String) 2 digit country code
	phone (String) phone number to format
	
	*/
	
	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone, country);
		var PNF = i18n.phonenumbers.PhoneNumberFormat;
	    var output = new goog.string.StringBuffer();
	    output = phoneUtil.format(number, PNF.E164);
    	return output.toString();
    } catch (e) {
    	return phone
    }
}


// -------------------------------------------------------------------------  
function formatInternational(country, phone) {
	/*
	
	Return the phone number in international format
	
	country (String) 2 digit country code
	phone (String) phone number to format
	
	*/
	
	try {
		var phone = cleanPhone(phone);
	    var formatter = new i18n.phonenumbers.AsYouTypeFormatter(country);
	    var output = new goog.string.StringBuffer();
	    for (var i = 0; i < phone.length; ++i) {
			var inputChar = phone.charAt(i);
			output = (formatter.inputDigit(inputChar));
		}
    	return output.toString();
    } catch (e) {
    	return phone;
    }
}

// -------------------------------------------------------------------------
function formatLocal(country, phone) {
	/*
	
	Return the phone number in the format local to the user
	
	country (String) 2 digit country code
	phone (String) phone number to format
	
	*/
	
	try {
		var phone = cleanPhone(phone);
		var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
		var number = phoneUtil.parseAndKeepRawInput(phone, country);
		if (phoneUtil.isValidNumberForRegion(number, country)) {
			var PNF = i18n.phonenumbers.PhoneNumberFormat;
		    var output = new goog.string.StringBuffer();
		    output = phoneUtil.format(number, PNF.NATIONAL);
	    	return output.toString();
		} else {
			return formatInternational(country, phone);
		}
	} catch (e) {
		return formatInternational(country, phone);
	}
}
	
// -------------------------------------------------------------------------
function cleanPhone(phone) {
	/*
	
	Remove any non numeric characters from the phone number but leave any plus sign at the beginning
	
	phone (String) phone number to clean
	
	*/
	
	phone = phone.replace(/[^\d\+]/g,'');
	if (phone.substr(0, 1) == "+") {
		phone = "+" + phone.replace(/[^\d]/g,'');
	} else {
		phone = phone.replace(/[^\d]/g,'');
	}
	return phone;
}

// -------------------------------------------------------------------------
function countryCodeToName(countryCode) {
	/*
	
	Convert the country code to a name
	
	country (String) 2 digit country code
	
	*/
	
	var arrCountry = new Array();
	arrCountry['AF'] = "Afghanistan";
	arrCountry['AL'] = "Albania";
	arrCountry['DZ'] = "Algeria";
	arrCountry['AS'] = "American Samoa";
	arrCountry['AD'] = "Andorra";
	arrCountry['AO'] = "Angola";
	arrCountry['AI'] = "Anguilla";
	arrCountry['AQ'] = "Antarctica";
	arrCountry['AG'] = "Antigua And Barbuda";
	arrCountry['AR'] = "Argentina";
	arrCountry['AM'] = "Armenia";
	arrCountry['AW'] = "Aruba";
	arrCountry['AU'] = "Australia";
	arrCountry['AT'] = "Austria";
	arrCountry['AZ'] = "Azerbaijan";
	arrCountry['BS'] = "Bahamas";
	arrCountry['BH'] = "Bahrain";
	arrCountry['BD'] = "Bangladesh";
	arrCountry['BB'] = "Barbados";
	arrCountry['BY'] = "Belarus";
	arrCountry['BE'] = "Belgium";
	arrCountry['BZ'] = "Belize";
	arrCountry['BJ'] = "Benin";
	arrCountry['BM'] = "Bermuda";
	arrCountry['BT'] = "Bhutan";
	arrCountry['BO'] = "Bolivia";
	arrCountry['BA'] = "Bosnia And Herzegovina";
	arrCountry['BW'] = "Botswana";
	arrCountry['BV'] = "Bouvet Island";
	arrCountry['BR'] = "Brazil";
	arrCountry['IO'] = "British Indian Ocean Territory";
	arrCountry['BN'] = "Brunei";
	arrCountry['BG'] = "Bulgaria";
	arrCountry['BF'] = "Burkina Faso";
	arrCountry['BI'] = "Burundi";
	arrCountry['KH'] = "Cambodia";
	arrCountry['CM'] = "Cameroon";
	arrCountry['CA'] = "Canada";
	arrCountry['CV'] = "Cape Verde";
	arrCountry['KY'] = "Cayman Islands";
	arrCountry['CF'] = "Central African Republic";
	arrCountry['TD'] = "Chad";
	arrCountry['CL'] = "Chile";
	arrCountry['CN'] = "China";
	arrCountry['CX'] = "Christmas Island";
	arrCountry['CC'] = "Cocos (Keeling) Islands";
	arrCountry['CO'] = "Columbia";
	arrCountry['KM'] = "Comoros";
	arrCountry['CG'] = "Congo";
	arrCountry['CK'] = "Cook Islands";
	arrCountry['CR'] = "Costa Rica";
	arrCountry['CI'] = "Cote D'Ivorie (Ivory Coast)";
	arrCountry['HR'] = "Croatia (Hrvatska)";
	arrCountry['CU'] = "Cuba";
	arrCountry['CY'] = "Cyprus";
	arrCountry['CZ'] = "Czech Republic";
	arrCountry['CD'] = "Democratic Republic Of Congo (Zaire)";
	arrCountry['DK'] = "Denmark";
	arrCountry['DJ'] = "Djibouti";
	arrCountry['DM'] = "Dominica";
	arrCountry['DO'] = "Dominican Republic";
	arrCountry['TP'] = "East Timor";
	arrCountry['EC'] = "Ecuador";
	arrCountry['EG'] = "Egypt";
	arrCountry['SV'] = "El Salvador";
	arrCountry['GQ'] = "Equatorial Guinea";
	arrCountry['ER'] = "Eritrea";
	arrCountry['EE'] = "Estonia";
	arrCountry['ET'] = "Ethiopia";
	arrCountry['FK'] = "Falkland Islands (Malvinas)";
	arrCountry['FO'] = "Faroe Islands";
	arrCountry['FJ'] = "Fiji";
	arrCountry['FI'] = "Finland";
	arrCountry['FR'] = "France";
	arrCountry['FX'] = "France, Metropolitan";
	arrCountry['GF'] = "French Guinea";
	arrCountry['PF'] = "French Polynesia";
	arrCountry['TF'] = "French Southern Territories";
	arrCountry['GA'] = "Gabon";
	arrCountry['GM'] = "Gambia";
	arrCountry['GE'] = "Georgia";
	arrCountry['DE'] = "Germany";
	arrCountry['GH'] = "Ghana";
	arrCountry['GI'] = "Gibraltar";
	arrCountry['GR'] = "Greece";
	arrCountry['GL'] = "Greenland";
	arrCountry['GD'] = "Grenada";
	arrCountry['GP'] = "Guadeloupe";
	arrCountry['GU'] = "Guam";
	arrCountry['GT'] = "Guatemala";
	arrCountry['GN'] = "Guinea";
	arrCountry['GW'] = "Guinea-Bissau";
	arrCountry['GY'] = "Guyana";
	arrCountry['HT'] = "Haiti";
	arrCountry['HM'] = "Heard And McDonald Islands";
	arrCountry['HN'] = "Honduras";
	arrCountry['HK'] = "Hong Kong";
	arrCountry['HU'] = "Hungary";
	arrCountry['IS'] = "Iceland";
	arrCountry['IN'] = "India";
	arrCountry['ID'] = "Indonesia";
	arrCountry['IR'] = "Iran";
	arrCountry['IQ'] = "Iraq";
	arrCountry['IE'] = "Ireland";
	arrCountry['IM'] = "Isle of Man";
	arrCountry['IL'] = "Israel";
	arrCountry['IT'] = "Italy";
	arrCountry['JM'] = "Jamaica";
	arrCountry['JP'] = "Japan";
	arrCountry['JO'] = "Jordan";
	arrCountry['KZ'] = "Kazakhstan";
	arrCountry['KE'] = "Kenya";
	arrCountry['KI'] = "Kiribati";
	arrCountry['KW'] = "Kuwait";
	arrCountry['KG'] = "Kyrgyzstan";
	arrCountry['LA'] = "Laos";
	arrCountry['LV'] = "Latvia";
	arrCountry['LB'] = "Lebanon";
	arrCountry['LS'] = "Lesotho";
	arrCountry['LR'] = "Liberia";
	arrCountry['LY'] = "Libya";
	arrCountry['LI'] = "Liechtenstein";
	arrCountry['LT'] = "Lithuania";
	arrCountry['LU'] = "Luxembourg";
	arrCountry['MO'] = "Macau";
	arrCountry['MK'] = "Macedonia";
	arrCountry['MG'] = "Madagascar";
	arrCountry['MW'] = "Malawi";
	arrCountry['MY'] = "Malaysia";
	arrCountry['MV'] = "Maldives";
	arrCountry['ML'] = "Mali";
	arrCountry['MT'] = "Malta";
	arrCountry['MH'] = "Marshall Islands";
	arrCountry['MQ'] = "Martinique";
	arrCountry['MR'] = "Mauritania";
	arrCountry['MU'] = "Mauritius";
	arrCountry['YT'] = "Mayotte";
	arrCountry['MX'] = "Mexico";
	arrCountry['FM'] = "Micronesia";
	arrCountry['MD'] = "Moldova";
	arrCountry['MC'] = "Monaco";
	arrCountry['MN'] = "Mongolia";
	arrCountry['MS'] = "Montserrat";
	arrCountry['MA'] = "Morocco";
	arrCountry['MZ'] = "Mozambique";
	arrCountry['MM'] = "Myanmar (Burma)";
	arrCountry['NA'] = "Namibia";
	arrCountry['NR'] = "Nauru";
	arrCountry['NP'] = "Nepal";
	arrCountry['NL'] = "Netherlands";
	arrCountry['AN'] = "Netherlands Antilles";
	arrCountry['NC'] = "New Caledonia";
	arrCountry['NZ'] = "New Zealand";
	arrCountry['NI'] = "Nicaragua";
	arrCountry['NE'] = "Niger";
	arrCountry['NG'] = "Nigeria";
	arrCountry['NU'] = "Niue";
	arrCountry['NF'] = "Norfolk Island";
	arrCountry['KP'] = "North Korea";
	arrCountry['MP'] = "Northern Mariana Islands";
	arrCountry['NO'] = "Norway";
	arrCountry['OM'] = "Oman";
	arrCountry['PK'] = "Pakistan";
	arrCountry['PW'] = "Palau";
	arrCountry['PA'] = "Panama";
	arrCountry['PG'] = "Papua New Guinea";
	arrCountry['PY'] = "Paraguay";
	arrCountry['PE'] = "Peru";
	arrCountry['PH'] = "Philippines";
	arrCountry['PN'] = "Pitcairn";
	arrCountry['PL'] = "Poland";
	arrCountry['PT'] = "Portugal";
	arrCountry['PR'] = "Puerto Rico";
	arrCountry['QA'] = "Qatar";
	arrCountry['RE'] = "Reunion";
	arrCountry['RO'] = "Romania";
	arrCountry['RU'] = "Russia";
	arrCountry['RW'] = "Rwanda";
	arrCountry['SH'] = "Saint Helena";
	arrCountry['KN'] = "Saint Kitts And Nevis";
	arrCountry['LC'] = "Saint Lucia";
	arrCountry['PM'] = "Saint Pierre And Miquelon";
	arrCountry['VC'] = "Saint Vincent And The Grenadines";
	arrCountry['SM'] = "San Marino";
	arrCountry['ST'] = "Sao Tome And Principe";
	arrCountry['SA'] = "Saudi Arabia";
	arrCountry['SN'] = "Senegal";
	arrCountry['SC'] = "Seychelles";
	arrCountry['SL'] = "Sierra Leone";
	arrCountry['SG'] = "Singapore";
	arrCountry['SK'] = "Slovak Republic";
	arrCountry['SI'] = "Slovenia";
	arrCountry['SB'] = "Solomon Islands";
	arrCountry['SO'] = "Somalia";
	arrCountry['ZA'] = "South Africa";
	arrCountry['GS'] = "South Georgia And South Sandwich Islands";
	arrCountry['KR'] = "South Korea";
	arrCountry['ES'] = "Spain";
	arrCountry['LK'] = "Sri Lanka";
	arrCountry['SD'] = "Sudan";
	arrCountry['SR'] = "Suriname";
	arrCountry['SJ'] = "Svalbard And Jan Mayen";
	arrCountry['SZ'] = "Swaziland";
	arrCountry['SE'] = "Sweden";
	arrCountry['CH'] = "Switzerland";
	arrCountry['SY'] = "Syria";
	arrCountry['TW'] = "Taiwan";
	arrCountry['TJ'] = "Tajikistan";
	arrCountry['TZ'] = "Tanzania";
	arrCountry['TH'] = "Thailand";
	arrCountry['TG'] = "Togo";
	arrCountry['TK'] = "Tokelau";
	arrCountry['TO'] = "Tonga";
	arrCountry['TT'] = "Trinidad And Tobago";
	arrCountry['TN'] = "Tunisia";
	arrCountry['TR'] = "Turkey";
	arrCountry['TM'] = "Turkmenistan";
	arrCountry['TC'] = "Turks And Caicos Islands";
	arrCountry['TV'] = "Tuvalu";
	arrCountry['UG'] = "Uganda";
	arrCountry['UA'] = "Ukraine";
	arrCountry['AE'] = "United Arab Emirates";
	arrCountry['GB'] = "United Kingdom";
	arrCountry['US'] = "United States";
	arrCountry['UM'] = "United States Minor Outlying Islands";
	arrCountry['UY'] = "Uruguay";
	arrCountry['UZ'] = "Uzbekistan";
	arrCountry['VU'] = "Vanuatu";
	arrCountry['VA'] = "Vatican City (Holy See)";
	arrCountry['VE'] = "Venezuela";
	arrCountry['VN'] = "Vietnam";
	arrCountry['VG'] = "Virgin Islands (British)";
	arrCountry['VI'] = "Virgin Islands (US)";
	arrCountry['WF'] = "Wallis And Futuna Islands";
	arrCountry['EH'] = "Western Sahara";
	arrCountry['WS'] = "Western Samoa";
	arrCountry['YE'] = "Yemen";
	arrCountry['YU'] = "Yugoslavia";
	arrCountry['ZM'] = "Zambia";
	arrCountry['ZW'] = "Zimbabwe";
	
	var name = arrCountry[countryCode.toUpperCase()];
	if (name === undefined) {
		return "";
	} else {
		return name;
	}
}


var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,f=0;d=b[f];f++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=
-1==d?c.length:d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('<script type="text/javascript" src="'+
a+'">\x3c/script>');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c){var e=(""+c[d]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};goog.string={};goog.string.StringBuffer=function(a,b){null!=a&&this.append.apply(this,arguments)};goog.string.StringBuffer.prototype.buffer_="";goog.string.StringBuffer.prototype.set=function(a){this.buffer_=""+a};goog.string.StringBuffer.prototype.append=function(a,b,c){this.buffer_+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.buffer_+=arguments[d];return this};goog.string.StringBuffer.prototype.clear=function(){this.buffer_=""};goog.string.StringBuffer.prototype.getLength=function(){return this.buffer_.length};
goog.string.StringBuffer.prototype.toString=function(){return this.buffer_};goog.debug={};goog.debug.Error=function(a){Error.captureStackTrace?Error.captureStackTrace(this,goog.debug.Error):this.stack=Error().stack||"";a&&(this.message=String(a))};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.subs=function(a,b){for(var c=1;c<arguments.length;c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptySafe=function(a){return goog.string.isEmpty(goog.string.makeSafe(a))};goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};
goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};
goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var c=a.toLowerCase().match(goog.string.numerateCompareRegExp_),d=b.toLowerCase().match(goog.string.numerateCompareRegExp_),e=Math.min(c.length,d.length),f=0;f<e;f++){var g=c[f],h=d[f];if(g!=h)return c=parseInt(g,10),!isNaN(c)&&(d=parseInt(h,10),!isNaN(d)&&c-d)?c-d:g<h?-1:1}return c.length!=d.length?c.length-d.length:a<b?-1:1};goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};
goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)return a.replace(goog.string.amperRe_,"&amp;").replace(goog.string.ltRe_,"&lt;").replace(goog.string.gtRe_,"&gt;").replace(goog.string.quotRe_,"&quot;");if(!goog.string.allRe_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.amperRe_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.ltRe_,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.gtRe_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.quotRe_,"&quot;"));return a};
goog.string.amperRe_=/&/g;goog.string.ltRe_=/</g;goog.string.gtRe_=/>/g;goog.string.quotRe_=/\"/g;goog.string.allRe_=/[&<>\"]/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesUsingDom_=function(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c=document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.toMap=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=!0;return b};
goog.string.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&(b<a.length&&0<c)&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};goog.string.removeAll=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};
goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",j=e[g]||"",k=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var l=k.exec(h)||["","",""],m=n.exec(j)||["","",""];if(0==l[0].length&&0==m[0].length)break;var c=0==l[1].length?0:parseInt(l[1],10),p=0==m[1].length?0:parseInt(m[1],10),c=goog.string.compareElements_(c,p)||goog.string.compareElements_(0==
l[2].length,0==m[2].length)||goog.string.compareElements_(l[2],m[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=goog.string.HASHCODE_MAX_;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmpty(a)?NaN:b};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};
goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new goog.asserts.AssertionError(""+e,f||[]);};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.fail=function(a,b){if(goog.asserts.ENABLE_ASSERTS)throw new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};
goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){goog.asserts.ENABLE_ASSERTS&&!(a instanceof b)&&goog.asserts.doAssertFailure_("instanceof check failed.",null,c,Array.prototype.slice.call(arguments,3));return a};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=!0;goog.array.peek=function(a){return a[a.length-1]};goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.indexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return!goog.isString(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.lastIndexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return!goog.isString(b)||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.forEach?function(a,b,c){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.filter?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var j=g[h];b.call(c,j,h,a)&&(e[f++]=j)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.map?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};goog.array.reduce=function(a,b,c,d){if(a.reduce)return d?a.reduce(goog.bind(b,d),c):a.reduce(b,c);var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=function(a,b,c,d){if(a.reduceRight)return d?a.reduceRight(goog.bind(b,d),c):a.reduceRight(b,c);var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.some?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.every?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};
goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.concat=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(goog.isArray(d)||(e=goog.isArrayLike(d))&&d.hasOwnProperty("callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}};goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.splice.apply(a,goog.array.slice(arguments,1))};
goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?goog.array.ARRAY_PROTOTYPE_.slice.call(a,b):goog.array.ARRAY_PROTOTYPE_.slice.call(a,b,c)};goog.array.removeDuplicates=function(a,b){for(var c=b||a,d={},e=0,f=0;f<a.length;){var g=a[f++],h=goog.isObject(g)?"o"+goog.getUid(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=g)}c.length=e};
goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var j=f+g>>1,k;k=c?b.call(e,a[j],j,a):b(d,a[j]);0<k?f=j+1:(g=j,h=!k)}return h?f:~f};goog.array.sort=function(a,b){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.sort.call(a,b||goog.array.defaultCompare)};
goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};goog.array.sortObjectsByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(a[b],c[b])})};
goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare=function(a,b,c){return goog.array.equals(a,b,c)};
goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};
goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};goog.array.bucket=function(a,b){for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e,d,a);goog.isDef(f)&&(c[f]||(c[f]=[])).push(e)}return c};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};
goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];goog.isArray(d)?b.push.apply(b,goog.array.flatten.apply(null,d)):b.push(d)}return b};goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?goog.array.ARRAY_PROTOTYPE_.unshift.apply(a,a.splice(-b,b)):0>b&&goog.array.ARRAY_PROTOTYPE_.push.apply(a,a.splice(0,-b)));return a};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&!(a=a[d[c]],!goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(){}