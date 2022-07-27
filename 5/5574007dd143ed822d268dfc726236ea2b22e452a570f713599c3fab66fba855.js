// *********************************************
// Google Tag Manager DataLayer
// *********************************************

try{
	dataLayer = window.dataLayer || [];
} catch (err) {}

// *********************************************
// GTM Functions
// *********************************************

function gtmGetParam(param) {
	if ((typeof (param) != "undefined") && (param != "")) {
		return param;
	}

	return '';
}

// Check if str contains any of the substrings in arr list
function gtmStrIncludes(str, arr) {
	if (str && Array.isArray(arr) && arr.length) {
		for(i=0; i<arr.length; i++) {
			if (str.includes(arr[i])) {
				return true;
			}
		}
	}

	return false;
}

function gtmRegEx(str, target) {
	var strLocation = str.search(target);
	if (strLocation > 0)
		return true;

	return false;
}

function gtmSetEmptyToUnknown(str) {
	if (!str) {
		return 'Unknown';
	}

	return str;
}

function gtmGetDomain() {
	try {
		var url = window.location.href;
		var urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
	
		return urlParts[0];
	} catch (err) {}
}

function gtmGetDay() {
        return new Date().getDay();
}

function gtmGetWeekdayWeekend() {
        var day = new Date().getDay();
        return ((day === 6) || (day === 0)) ? 'Weekend' : 'Weekday';
}

function gtmGetHour() {
        return new Date().getHours();
}

function gtmGetFullUrl() {
	try {
		// Remove email address
		var filteredUrl = gtmFilterStr(window.location.href);
		if (filteredUrl) {
			return filteredUrl;
		}
	} catch (err) {}

	return window.location.href;
}

function gtmGetURLParam(strParamName) {
	var strReturn = '';
	try {
	        var strHref = window.location.href;
	        if (strHref.indexOf("?") > -1) {
	                var strQueryString = '';
	                if (strHref.indexOf("#") > strHref.indexOf("?")) {
	                        strQueryString = strHref.substr(strHref.indexOf("?")+1, strHref.indexOf("#")-strHref.indexOf("?")-1);
	                } else {
	                        strQueryString = strHref.substr(strHref.indexOf("?")+1);
	                }
	                var aQueryString = strQueryString.split("&");
	                for (var iParam = 0; iParam < aQueryString.length; iParam++) {
	                        if (aQueryString[iParam].toLowerCase().indexOf(strParamName.toLowerCase() + "=") == 0) {
	                                var aParam = aQueryString[iParam].split("=");
	                                strReturn = aParam[1];
	                                break;
	                        }
	                }
	        }
	} catch (err) {}

        return decodeURIComponent(strReturn);
}

function gtmSetCookie(name, value, expires, path, domain, secure) {
	try {
	        var today = new Date();
	        today.setTime(today.getTime());
	        if (expires) {
	                expires = expires * 1000 * 60 * 60 * 24;
	        }
	
	        var expires_date = new Date(today.getTime() + (expires));
	
	        document.cookie = name + '=' + escape(value) +
	                ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
	                ((path) ? ';path=' + path : '') +
	                ((domain) ? ';domain=' + domain : '') +
	                ((secure) ? ';secure' : '');
	} catch (err) {}
}

function gtmGetCookie(name) {
	try {
		var start = document.cookie.indexOf(name + "=");
		var len = start + name.length + 1;
		if ((!start) && (name != document.cookie.substring(0, name.length))) {
			return null;
		}

		if (start == -1) return null;
		var end = document.cookie.indexOf(';', len);
		if (end == -1) end = document.cookie.length;

		return unescape(document.cookie.substring(len, end));
	} catch (err) {}
}

function gtmGetCampaignCode() {
	var vCampaignLegacy = '';
	var gtmReferrerURL = '';
	try {	
		var gtmReferrer = document.referrer;
		var gtmCampaignCode = gtmGetURLParam('cpid');
		vCampaignLegacy = gtmCampaignCode;
		if (gtmCampaignCode == "") {
			// check if there is a legacy Webtrends Campaign Code
			gtmCampaignCode = getURLParam('WT.mc_id');
			if (gtmCampaignCode != "") {
				vCampaignLegacy = "Campaign_WT_" + gtmCampaignCode;
			} else {
				// there is still no campaign code - is this an organic search / referral result?
				gtmReferrerURL = gtmReferrer.toLowerCase();
				if ((gtmReferrerURL.indexOf(".google.c") > -1) || (gtmReferrerURL.indexOf("com.google") > -1)) {
					vCampaignLegacy = "Organic_Google";
	
					// store in cookie (accessed via s_code_community). only works for cbn.com domains
	                		gtmSetCookie("omSearch", "Google", .5, "/",".cbn.com");
				} else if (gtmReferrerURL.indexOf(".bing.c") > -1) {
					vCampaignLegacy = "Organic_Bing";
	
	                		gtmSetCookie("omSearch", "Bing", .5, "/",".cbn.com");
	            		} else if (gtmReferrerURL.indexOf("search.yahoo.com") > -1) {
					vCampaignLegacy = "Organic_Yahoo";
	
					gtmSetCookie("omSearch", "Yahoo", .5, "/",".cbn.com");
				} else if (gtmReferrerURL.indexOf("facebook.com") > -1) {
					vCampaignLegacy = "Organic_Facebook";
	
					gtmSetCookie("omSearch", "Facebook", .5, "/",".cbn.com");
				} else if (gtmReferrerURL.indexOf("youtube.com") > -1) {
					vCampaignLegacy = "Organic_YouTube";
	
					gtmSetCookie("omSearch", "YouTube", .5, "/",".cbn.com");
				}
			}
		}
	} catch (err) {}

	return vCampaignLegacy;
}

function gtmGetLoginStatus() {
	try {
		return gtmGetParam(sOm_ContactLoggedIn);
	} catch (err) {}
}

function gtmGetContactSource() {
        try {   
                return gtmGetParam(sOm_ContactSource);
        } catch (err) {}
}

function gtmGetCbnContact() {
        try {
		var gtmCbnContact = gtmGetParam(sOm_ContactLoggedIn);
		if (gtmCbnContact != '' && gtmCbnContact != 'Value_Not_Set') {
			return true;
		}
        } catch (err) {}

	return false;
}

function gtmGetUserId() {
        try {
                return gtmGetParam(sOm_ContactID);
        } catch (err) {}
}

function gtmGetCbnObj() {
        try {
                return gtmGetParam(cbn_obj);
        } catch (err) {}
}

function gtmSaveMotivation(motivation) {
	gtmSetCookie('gtmMotivation', motivation, 365, "/");
}

function gtmSaveInternalCampaign(id) {
	try {
		var domain = gtmGetDomain();
		if (gtmStrIncludes(domain, ['.cbn.com'])) {
			gtmSetCookie('gtmIntcmp', id, 0, "/", ".cbn.com");
		} else if (gtmStrIncludes(domain, ['.cbn.local'])) {
			gtmSetCookie('gtmIntcmp', id, 0, "/", ".cbn.local");
		} else {
			gtmSetCookie('gtmIntcmp', id, 0, "/");
		}
	} catch (err) {}
}

function gtmCheckStrContains(str, target) {
	try {
		if (str.includes(target)) {
			return true;
		}
	} catch (err) {}

	return false;
}

function gtmCheckStrWithout(str, target) {
	try {
		if (!str.includes(target)) {
			return true;
		}
	} catch (err) {}

	return false;
}

function(){}