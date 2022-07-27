// used for QA purposes for beta extension builds that point to beta.apollo.io
function isExtensionBeta(location = window.location) {
  try {
    const params = new URL(location).searchParams;
    const beta = params.get('extension_beta');
    return beta === '1';
  } catch (e) {
    return false;
  }
}

function isExtension(location = window.location) {
  try {
    const params = new URL(location).searchParams;
    const windowMode = params.get('window_mode');
    return windowMode === '1';
  } catch (e) {
    return false;
  }
}

// preserve the extension URL search param
function maybeWithExtensionParams$1(destination) {
  if (!isExtension(window.location)) {
    return destination + (destination.indexOf('?') > -1 ? '&' : '?');
  }

  const url = new URL(window.location);
  const currentParams = new URLSearchParams(url.search);
  const extensionKey = currentParams.get('extension_key');
  let params = 'window_mode=1';
  if (extensionKey) {
    params += `&extension_key=${extensionKey}`;
  }
  if (isExtensionBeta()) {
    params += '&extension_beta=1';
  }

  return destination + (destination.indexOf('?') > -1 ? '&' : '?') + params;
}

/* global amplitude growsumo Cookies */

function sendDataToPartnerStack(data) {
  try {
    const gsxid = Cookies.get(`zp__gsxid`);
    const utmGspartnerkey = Cookies.get(`zp__utm_gspartnerkey`);

    if (!growsumo.data.xid && gsxid) {
      growsumo.data.xid = gsxid;
    }

    if (!growsumo.data.partner_key && utmGspartnerkey) {
      growsumo.data.partner_key = utmGspartnerkey;
    }
    growsumo.data.name = data.email;
    growsumo.data.email = data.email;
    growsumo.data.customer_key = data.teamId;
    growsumo.createSignup();
  } catch (e) {
    return false;
  }
}

function getMarketingSiteBaseUrl() {
  return 'https://www.apollo.io';
}

const BASE_COOKIES_KEYS = [
  'utm_content',
  'utm_medium',
  'utm_source',
  'utm_expid',
  'utm_campaign',
];

// for signing up
const COOKIES_TO_SEND_AS_PARAMS = [
  ...BASE_COOKIES_KEYS,
  'referral_code',
  'gspk',
  'gsxid',
  'utm_gspartnerkey',
  'utm_embedded',
  'utm_adgroup',
  'utm_term',
  'initial_utm_content',
  'initial_utm_medium',
  'initial_utm_source',
  'initial_utm_expid',
  'initial_utm_campaign',
  'initial_utm_embedded',
  'initial_utm_adgroup',
  'initial_utm_term',
  'initial_utm_gspartnerkey',
  'initial_referrer',
];

const COOKIES_TO_SEND_AS_RENAMED_PARAMS = {
  ZP_Pricing_Split_Test_Variant: 'pricing_variant',
};

function getParametersFromCookies() {
  let parameters = {};

  COOKIES_TO_SEND_AS_PARAMS.forEach((key) => {
    const value = Cookies.get(`zp__${key}`);
    if (value) {
      parameters[key] = value;
    }
  });

  Object.keys(COOKIES_TO_SEND_AS_RENAMED_PARAMS).forEach((key) => {
    const value = Cookies.get(key);

    if (value) {
      parameters[COOKIES_TO_SEND_AS_RENAMED_PARAMS[key]] = value;
    }
  });

  return parameters;
}

function setCookie(name, value) {
  Cookies.set(name, value, {
    expires: 60,
    domain: getBaseDomainForCookies(),
  });
}

// INCIDENT-424
function clearOutdatedZPPricingCookies() {
  const OUTDATED_COOKIE_KEYS = ['zp__pricing_variant', 'ZP_Pricing_Split_Test_Variant'];
  const OUTDATED_COOKIE_VALUE = '21Q1_N9';
  let cookiesRemoved = false;

  OUTDATED_COOKIE_KEYS.forEach(OUTDATED_KEY => {
    const cookieValue = Cookies.get(OUTDATED_KEY);
    if (cookieValue === OUTDATED_COOKIE_VALUE) {
      Cookies.remove(OUTDATED_KEY, {
        domain: getBaseDomainForCookies(),
      });
      cookiesRemoved = true;
    }
  })

  // reload only if there are cookies removed
  if (cookiesRemoved) {
    console.log('Pricing cookies cleared');
    window.location.reload();
  }
}

function addQueryParams(url, queryParams) {
  const hasQuery = url.indexOf('?') >= 0;
  const queryString = Object.keys(queryParams)
    .map(function makeQueryParam(param) {
      return encodeURIComponent(param) + '=' + encodeURIComponent(queryParams[param]);
    })
    .join('&');

  if (queryString) {
    return `${url}${hasQuery ? '&' : '?'}${queryString}`;
  } else {
    return url;
  }
}

function afterSignupHandler(email) {
  window.location = `/signup-success?email=${encodeURIComponent(email)}`;
}

function signupWithGoogle({ host, data = {} }) {
  amplitude.getInstance().logEvent('Sign Up Submit', { method: 'oauth' });

  const url = window.location.href;
  const parsedURL = new URL(url);
  const edition = parsedURL.searchParams.get('edition');
  const postRedirect = parsedURL.searchParams.get('post_redirect');

  let endpointParams = {
    ...data,
    mode: 'self_serve_website_signup',
    trial_seat_product_id: edition,
  };

  const endpointBase = `${host}/email_accounts/link_gmail`;

  endpointParams = {
    ...endpointParams,
    ...getParametersFromCookies(),
  };

  if (postRedirect) {
    // We need to encode postRedirect twice
    endpointParams.post_redirect = encodeURIComponent(postRedirect);
  }

  if (isExtension()) {
    endpointParams.redirect_to = maybeWithExtensionParams$1(
      `${getMarketingSiteBaseUrl()}/signup-success-with-google-chrome-extension`,
    );
  } else {
    const query = {};

    if (postRedirect) {
      query.post_redirect = postRedirect;
    }

    endpointParams.redirect_to = addQueryParams(
      maybeWithExtensionParams$1(`${getMarketingSiteBaseUrl()}/signup-success-with-google-standard`),
      query,
    );
  }

  const endpoint = addQueryParams(endpointBase, endpointParams);

  if (isExtension()) {
    window.open(
      endpoint,
      'Apollo',
      'width=500,height=600,toolbar=no,resizable=no,status=no,titlebar=no,top=50,left=50,menubar=no',
    );
  } else {
    window.location = endpoint;
  }
}

function signupWithEmail({ host, data = {} }) {
  const url = window.location.href;
  const parsedURL = new URL(url);
  const postRedirect = parsedURL.searchParams.get('post_redirect');
  const edition = parsedURL.searchParams.get('edition');

  const endpoint = `${getApiBaseUrl()}/users/self_serve_signup`;

  data.trial_seat_product_id = edition ? edition : null;
  data.pricing_variant = data.pricing_variant ? data.pricing_variant : '20Q2_A49';

  if (postRedirect) {
    // We need to encode postRedirect
    data.redirect_to = encodeURIComponent(postRedirect);
  }

  data = {
    ...data,
    ...getParametersFromCookies(),
  };
  const myHeaders = new Headers();

  myHeaders.append('Origin', 'https://www.apollo.io');

  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: 'POST',
      body: new URLSearchParams(data),
      headers: myHeaders
    })
      .then((response) => {
        response.json().then((json) => {
          if (json.error) {
            reject(json);
          } else {
            const { user_id: userId, team_id: teamId, email } = json;

            sendDataToPartnerStack({
              email,
              teamId,
            });

            let timeout;

            amplitude.getInstance().setUserId(userId);
            amplitude.getInstance().identify(new amplitude.Identify().set('userId', userId), 