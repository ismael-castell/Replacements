/*globals window, console, Drupal, document, fyre, janrain, Backplane, jQuery, location, SBS*/
(function ($) {
  "use strict";

  var envsPrefix = {
      dev: "drupal.vmdev",
      qa: "www.qa",
      stage: "www.stg",
      prod: "www"
    },
    getSiteName = function () {
      var sitename = 'home';
      if (location.hostname.indexOf('theworldgame') >= 0){
        sitename = 'theworldgame';
      } else {
        (location.pathname.split('/')[1] === '') ? 'home' : location.pathname.split('/')[1];

        // Set Tourtracker in the context
        if(location.pathname.split('/')[2] === 'TourTracker'){
          sitename = 'tourtracker';
        }
      }

      return sitename;
    },
    getEnvPrefix = function () {
      return (Drupal !== "undefined" && Drupal.settings !== "undefined" && Drupal.settings.SBS !== "undefined" &&
      Drupal.settings.SBS.environment !== "undefined") ? envsPrefix[Drupal.settings.SBS.environment] : "www";
    },
    mysbsHref = function () {
      return "//" + getEnvPrefix() + ".sbs.com.au/mysbs/";
    },
    checkLoggedIn = function(){
      return SBS.userSession.isLoggedIn();
    },
    janrainCreateAccount = function(){
      // check if we are in mobile view, then set iframe modal to be 100%
      var options = {};
      if (SBS.globals.getDisplaymode() !== 'desktop' && SBS.globals.getDisplaymode() !== 'hires'){
        options.width = '100%';
        options.height = '100%';
        options.top = '0';
        options.left = '0';
        options.marginLeft = '0';
        options.marginTop = '0';
      }
      SBS.overlay.open('//' + window.location.host + '/app-views/login/createAccount.html?mode=web&device=web&site=' + getSiteName(), options);
    },
    janrainSignIn = function(){
      // check if we are in mobile view, then set iframe modal to be 100%
      var options = {};
      if (SBS.globals.getDisplaymode() !== 'desktop' && SBS.globals.getDisplaymode() !== 'hires'){
        options.width = '100%';
        options.height = '100%';
        options.top = '0';
        options.left = '0';
        options.marginLeft = '0';
        options.marginTop = '0';
      }
      SBS.overlay.open('//' + window.location.host + '/app-views/login/signin.html?mode=web&device=web&site=' + getSiteName(), options);
    },
    janrainSignOut = function () {
      var key;

      SBS.userSession.logout().then(
        function(){
          //Removing all Livefyre Local Storage
          window.localStorage.removeItem('fyre-auth');
          window.localStorage.removeItem('fyre-authentication-creds');

          if (Drupal.settings.basePath === "/mysbs/") {
            window.location = '/mysbs/';
          } else {
            window.location.reload();
          }
        },
        function(error){
          console.log('unable to logout. Cause: ',error);
        }
      );
    };

  window.janrainCaptureWidgetOnLoad = function () {
    if(window.location.pathname === '/mysbs'){
      janrain.capture.ui.start();
    }
  };

  // TODO: we should separate the following object for livefyre into its own livefyre service file, also do not use 'janrainCapture' name
  Drupal.janrainCapture = {
    networkConfig : {
      network: 'sbs.fyre.co'
    },
    livefyreAccessToken: '',
    getLivefyreAccessToken: function (janrainAccessToken){
      if (Livefyre !== null || Livefyre !== undefined) {
        if (!window.localStorage.hasOwnProperty('fyre-auth') && !window.localStorage.hasOwnProperty("fyre-authentication-creds")) {
          $.ajax({
            url: "/api/v3/livefyre/token",
            method: "GET",
            data: {
              janrain_access_code: janrainAccessToken
            }
          }).done(function (data) {
            Drupal.janrainCapture.livefyreAccessToken = data.token.response.livefyre_encoded_json_web_token;

            //let livefyreStart function know the livefyre access token is ready
            var event = new Event('userAuthenticated');
            window.dispatchEvent(event);
          });
        }
      }
    },
    livefyreStart: function (conversationObj) {

      if (Livefyre !== null || Livefyre !== undefined) {
        //Editor Styling
        conversationObj['editorCss'] = {
          'color': '#d8dcdc',
          'font-size': '14px',
          'line-height': '18px'
        };
        conversationObj.authPageReload = true;

        Livefyre.require(['fyre.conv#3', 'auth'], function (Conv, auth) {
          new Conv(Drupal.janrainCapture.networkConfig, [conversationObj], function (widget) {
            widget.on('commentCountUpdated', function (data) {
              $(document).trigger("livefyre:commentCountUpdated", [widget, data]);
            });
            widget.on('initialRenderComplete', function () {
              $('#' + conversationObj.el).find('.spinner').remove();
            });
          });

          var authDelegate = {
            login: function (finishLogin) {
              janrainSignIn();
            },
            logout: function (finishLogout) {
              janrainSignOut();
              finishLogout(null);
            },
            viewProfile: function () {
              window.open("/mysbs/", "mysbs");
            },
            editProfile: function () {
              window.open("/mysbs/", "mysbs");
            }
          };

          authDelegate.forEachAuthentication = function (authenticate) {
            window.addEventListener('userAuthenticated', function () {
              authenticate({livefyre: Drupal.janrainCapture.livefyreAccessToken});
            });
          };

          auth.delegate(authDelegate);

        });
      }
    }

  };


  $(document).ready(function () {
    if (typeof window.janrain !== 'object') {
      window.janrain = {};
    }
    window.janrain.settings = {};
    window.janrain.settings.capture = {};
    janrain.settings = Drupal.settings.janrain;

    // DOM already ready, so set janrain ready to roll.
    janrain.ready = true;

    var e = document.createElement('script'),
      url,
      protocol = document.location.protocol,
      s = document.getElementsByTagName('script')[0],
      signinLink = document.getElementById('capture_signin_link') ? document.getElementById('capture_signin_link') : document.createElement("div"),
      signoutLink = document.getElementById('capture_signout_link') ? document.getElementById('capture_signout_link') : document.createElement("div"),
      myProfileLink = (document.getElementsByClassName('capture_username').length > 0) ? document.getElementsByClassName('capture_username')[0] : document.createElement("div"),
      janrainAccessToken;

    //Need this js file for the share widget
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';
    if (protocol === 'https:') {
      url = 'https://rpxnow.com/load/account.sbs.com.au';
    } else if (protocol === 'http:') {
      url = 'http://widget-cdn.rpxnow.com/load/account.sbs.com.au';
    }
    e.src = url;
    s.parentNode.insertBefore(e, s);

    // handle display for signin/signout/mysbs links based on state
    if(checkLoggedIn()){
      SBS.userSession.getUserData().then(
        function(data){
          var profileData = data,
            displayName = (profileData.displayName === undefined || profileData.displayName === 'false') ? 'My profile' : profileData.displayName,
            expiryDate = new Date (Date.now() + (24 * 60 * 60 * 1000));
          myProfileLink.innerHTML = '<a href="' + mysbsHref() + '" target="mysbs">' + displayName + '</a>';
          signoutLink.style.display = 'inline';
          myProfileLink.style.display = 'inline';
          signinLink.style.display = 'none';

          SBS.userSession.displayName = displayName;
          SBS.userSession.uuid = profileData.uuid;
          window.accessToken = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent("core_t").replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
          window.localStorage.setItem('janrainCaptureToken', window.accessToken);
          window.localStorage.setItem('janrainCaptureTokenRefresh', expiryDate);
          window.localStorage.setItem('janrainCaptureToken_Expires', expiryDate);

          $(window).trigger($.extend(SBS.userSession, {type: 'SBS.userSessionFound'}));
        },
        function(){
          signinLink.style.display = 'block';
          signoutLink.style.display = 'none';
          myProfileLink.style.display = 'none';

          $(window).trigger($.extend(SBS.userSession, {type: 'SBS.userSessionNotFound'}));
        }
      );

    } else {
      signinLink.style.display = 'block';
      signoutLink.style.display = 'none';
      myProfileLink.style.display = 'none';

      $(window).trigger($.extend(SBS.userSession, {type: 'SBS.userSessionNotFound'}));
    }

    // Attach click handler event for signin & register link
    signinLink.addEventListener(
      'click',
      function(event){
        event.preventDefault();
        janrainSignIn();
      },
      false
    );

    // Attach click handler for logout link
    signoutLink.addEventListener(
      'click',
      function(event){
        event.preventDefault();
        janrainSignOut();
      },
      false
    );
    Drupal.janrainCapture.janrainSignIn = janrainSignIn;
    Drupal.janrainCapture.janrainCreateAccount = janrainCreateAccount;

    // TODO: we should separate the following part for livefyre into its own livefyre service file
    window.isJanrainBackplaneReady = true;
    if(Drupal.settings.livefyre !== undefined && Drupal.settings.livefyre.conversations !== undefined){
      if (checkLoggedIn()) {
        janrainAccessToken = window.localStorage.getItem("janrainCaptureToken");
        Drupal.janrainCapture.getLivefyreAccessToken(janrainAccessToken);
      }
      Drupal.settings.livefyre.conversations.forEach(Drupal.janrainCapture.livefyreStart);
    }

  });

  Drupal.behaviors.janrainCaptureLoad = {
    attach: function (context, settings) {

      console.log('Janrain Capture: loading settings');
      if (typeof window.janrain !== 'object') {
        window.janrain = {};
      }
      window.janrain.settings = {};
      window.janrain.settings.capture = {};
      janrain.settings = settings.janrain;

      // DOM already ready, so set janrain ready to roll.
      janrain.ready = true;

      var e = document.createElement('script'),
        url,
        protocol = document.location.protocol,
        s;
      e.type = 'text/javascript';
      e.id = 'janrainAuthWidget';

      if ((janrain.settings.editProfilePage !== null) && (janrain.settings.editProfilePage !== undefined) && (janrain.settings.editProfilePage === true)) {
        janrain.settings.capture.flowName = 'EditProfileProd';
        janrain.settings.capture.flowVersion = '';  // If flow is not specified,  it will use the latest version
      }

      if (protocol === 'https:') {
        url = 'https://rpxnow.com/load/account.sbs.com.au';
      } else if (protocol === 'http:') {
        url = 'http://widget-cdn.rpxnow.com/load/account.sbs.com.au';
      }
      e.src = url;

      console.log('Janrain Capture: loading external js library: ' + e.src);

      s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(e, s);

      Drupal.behaviors.janrainCaptureLoad.injectCaptureWidget();
    },

    injectCaptureWidget: function () {
      var widgetHtml,
        s;
      if ((janrain.settings.editProfilePage !== null) && (janrain.settings.editProfilePage !== undefined) && (janrain.settings.editProfilePage === true)) {
        widgetHtml = '<div id="captureEditWidget">' +
          '  <div style="display:none;" id="editProfile">' +
          '    <div class="capture_grid_block">' +
          '      <div class="capture_col_4">' +
          '        <h3>Profile Photo</h3>' +
          '        <div class="contentBoxWhiteShadow">' +
          '          {* photoManager *}' +
          '        </div>' +
          '        <h3>Linked Accounts</h3>' +
          '        <div class="contentBoxWhiteShadow">' +
          '          {* linkedAccounts *}' +
          '          {* linkAccountContainer *}' +
          '          <div class="capture_header">' +
          '            <h1>Link your accounts</h1>' +
          '          </div>' +
          '          <h2>Allows you to sign in to your account using that provider in the future.</h2>' +
          '          <div class="capture_signin">' +
          '            {* loginWidget *}' +
          '          </div>' +
          '          {* /linkAccountContainer *}' +
          '        </div>' +
          '        <!-- Only show this if it was from a traditional login !-->' +
          '        <h3>Password</h3>' +
          '        <div class="janrain_traditional_account_only">' +
          '          <a href="#" data-capturescreen="changePassword">Change Password</a>' +
          '        </div>' +

          '      </div>' +
          '      <div class="capture_col_8">' +
          '        <h3>Account Info</h3>' +
          '        <div class="contentBoxWhiteShadow">' +
          '          <div class="capture_grid_block">' +
          '            <div class="capture_center_col capture_col_8">' +
          '              <div class="capture_editCol">' +
          '                {* editProfileForm *}' +
          '                {* displayName *}' +
          '                {* profileBlurb *}' +
          '<div class="capture_form_item capture_nameBlock"><label for="capture_editProfile_name">Name</label>' +
          '                {* firstname *}' +
          '                {* middlename *}' +
          '                {* lastname *}</div>' +
          '                {* email *}' +
          '                {* phone *}' +
          '<div class="capture_form_item capture_addressBlock"><label for="capture_editProfile_addressDrop">Address</label>' +
          '                {* streetaddress *}' +
          '                {* streetaddress2 *}' +
          '                {* city *}' +
          '                {* stateprovince *}' +
          '                {* zippostalcode *}' +
          '                {* country *}</div>' +
          '                {* gender *}' +
          '                {* birthdate *}' +
          '                <div class="capture_form_item">' +
          '                  <div class="privacy">Your privacy is important to us. Your information will be collected, used and disclosed in accordance with the <a target="_blank" href="https://www.sbs.com.au/privacy-policy">SBS Privacy Policy</a>.</div>' +
          '                  {* saveButton *}' +
          '                  {* savedProfileMessage *}' +
          '                </div>' +
          '                {* /editProfileForm *}' +
          '              </div>' +
          '            </div>' +
          '          </div>' +
          '        </div>' +
          '      </div>' +
          '    </div>' +
          '  </div>' +
          '  <div style="display:none;" id="changePassword">' +
          '    <div class="capture_header">' +
          '      <h1>Change password</h1>' +
          '    </div>' +
          '    {* newPasswordForm *}' +
          '    {* oldpassword *}' +
          '    {* newpassword *}' +
          '    {* newpasswordConfirm *}' +
          '    <div class="capture_footer">' +
          '      {* saveButton *}' +
          '    </div>' +
          '    {* /newPasswordForm *}' +
          '  </div>' +
          '  <div style="display:none;" id="changePasswordSuccess">' +
          '    <div class="capture_header">' +
          '      <h1>You did it!</h1>' +
          '    </div>' +
          '    <p>Your password has been successfully changed.</p>' +
          '    <div class="capture_footer">' +
          '      <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>' +
          '    </div>' +
          '  </div>' +
          '  <div style="display:none;" id="addLinkedAccount">' +
          '    <div class="capture_header">' +
          '      <h1>Link another account</h1>' +
          '    </div>' +
          '    <h3>Link any of these providers with your account.<br />Allows you to sign in to your {* siteName *} account using that provider in the future.</h3>' +
          '    {* loginWidget *}' +
          '  </div>' +
          '  <div style="display: none;" id="publicProfileModal">' +
          '    <div class="capture_header">' +
          '      <h1>My profile</h1>' +
          '    </div>' +
          '    <div class="capture_grid_block">' +
          '      <div class="capture_col_6">' +
          '        <div class="capture_profile_pic">' +
          '          <div id="profile_pic" class="capture_default">' +
          '            {* profilePhotoCustom *}' +
          '          </div>' +
          '        </div>' +
          '      </div>' +
          '      <div class="capture_col_6">' +
          '        <h2>{* public_displayName *}</h2>' +
          '        {* public_profileBlurb *}' +
          '      </div>' +
          '    </div>' +
          '    {* public_name *}' +
          '    {* public_emailAddress *}' +
          '    {* public_phoneNumber *}' +
          '    {* public_address *}' +
          '    {* public_gender *}' +
          '    {* public_birthdate *}' +
          '    <div class="capture_footer">' +
          '      <div class="capture_right">' +
          '        <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>' +
          '      </div>' +
          '    </div>' +
          '  </div>' +
          '</div>';

        s = document.getElementById('user-profile-form');

        if (s !== null) {
          s.outerHTML = widgetHtml;
        }
      } else {
        widgetHtml = '<div style="display:none;" id="returnSocial">' +
          '  <div class="capture_header">' +
          '    <h1>Sign In</h1>' +
          '  </div>' +
          '  <div class="capture_body">' +
          '    <div class="capture_signin">' +
          '      <h2>Welcome Back {* welcomeName *}</h2>' +
          '      {* loginWidget *}' +
          '      <div class="capture_centerText switchLink">' +
          '        <a href="#" data-cancelcapturereturnexperience="true">Use another account</a>' +
          '      </div>' +
          '    </div>' +
          '  </div>' +
          '</div>' +
          '<div style="display:none;" id="returnTraditional">' +
          '  <div class="capture_header">' +
          '    <h1>Sign In</h1>' +
          '  </div>' +
          '  {* #userInformationForm *}' +
          '  <div class="capture_body">' +
          '    <h2 class="capture_centerText">Welcome back {*  displayNameStorageData *}!</h2>' +
          '    <div class="capture_backgroundColor">' +
          '      {* traditionalSignIn_emailAddress *}' +
          '      {* traditionalSignIn_password *}' +
          '      <div class="capture_form_item capture_rightText">' +
          '        {* traditionalSignIn_signInButton *}' +
          '      </div>' +
          '      <div class="capture_centerText switchLink">' +
          '        <a href="#" data-cancelcapturereturnexperience="true">Use another account</a>' +
          '      </div>' +
          '    </div>' +
          '  </div>' +
          '  {* /userInformationForm *}' +
          '</div>' +
          '<div style="display:none;" id="socialRegistration">' +
          '  <div class="capture_header">' +
          '    <h1>Almost Done!</h1>' +
          '  </div>' +
          '  {* #socialRegistrationForm *}' +
          '  <div class="capture_body">' +
          '    <h2>Please confirm the information below before signing in.</h2>' +
          '    {* socialRegistration_firstName *}' +
          '    {* socialRegistration_lastName *}' +
          '    {* socialRegistration_displayName *}' +
          '    {* socialRegistration_emailAddress *}' +
          '    By clicking "Sign in", you confirm that you accept our' +
          '    <a href="https://www.sbs.com.au/aboutus/corporate/view/id/114/h/Terms-and-Conditions" target="_blank">terms of service</a> and have read and understand' +
          '    <a href="https://www.sbs.com.au/aboutus/corporate/view/id/113/h/SBS-Privacy-Statement" target="_blank">privacy policy</a>.' +
          '  </div>' +
          '  <div class="capture_footer">' +
          '    <div class="capture_left">' +
          '      {* backButton *}' +
          '    </div>' +
          '    <div class="capture_right">' +
          '      {* socialRegistration_signInButton *}' +
          '    </div>' +
          '  </div>' +
          '  {* /socialRegistrationForm *}' +
          '</div>' +
          '<div style="display:none;" id="registrationNewVerification">' +
          '  <div class="capture_header">' +
          '    <h1>Thank you for registering!</h1>' +
          '  </div>' +
          '  <duv class="capture_body">' +
          '    <p>We have sent a confirmation email to {* emailAddressData *}. Please check your' +
          '      email and click on the link to activate your account.</p>' +
          '  </duv>' +
          '  <div class="capture_footer">' +
          '    <a href="#" onclick="window.location.reload()" class=' +
          '    "capture_btn capture_primary">Close</a>' +
          '  </div>' +
          '</div>' +
          '<div style="display:none;" id="traditionalRegistration">' +
          '  <div class="capture_header">' +
          '    <h1>Almost Done!</h1>' +
          '  </div>' +
          '  {* #registrationForm *}' +
          '  <div class="capture_body">' +
          '    <p>Please confirm the information below before signing in. Already have an account?' +
          '    <a href="#" data-capturescreen="signIn">Sign In.</a></p>' +
          '    {* traditionalRegistration_firstName *}' +
          '    {* traditionalRegistration_lastName *}' +
          '    {* traditionalRegistration_emailAddress *}' +
          '    {* traditionalRegistration_displayName *}' +
          '    {* traditionalRegistration_password *}' +
          '    {* traditionalRegistration_passwordConfirm *}' +
          '    By clicking "Create Account", you confirm that you accept our' +
          '    <a href="https://www.sbs.com.au/aboutus/corporate/view/id/114/h/Terms-and-Conditions" target="_blank">terms of service</a> and have read and understand' +
          '    <a href="https://www.sbs.com.au/aboutus/corporate/view/id/113/h/SBS-Privacy-Statement" target="_blank">privacy policy</a>.' +
          '  </div>' +
          '  <div class="capture_footer">' +
          '    <div class="capture_left">' +
          '      {*  backButton *}' +
          '    </div>' +
          '    <div class="capture_right">' +
          '      {*  createAccountButton *}' +
          '    </div>' +
          '  </div>' +
          '  {* /registrationForm *}' +
          '</div>' +
          '<div style="display:none;" id="forgotPassword">' +
          '  <div class="capture_header">' +
          '    <h1>Create a new password</h1>' +
          '  </div>' +
          '  {* #forgotPasswordForm *}' +
          '  <div class="capture_body">' +
          '    <h2>We\'ll send you a link to create a new password.</h2>' +
          '     {* traditionalSignIn_emailAddress *}' +
          '  </div>' +
          '  <div class="capture_footer">' +
          '    <div class="capture_left">' +
          '      {* backButton *}' +
          '    </div>' +
          '    <div class="capture_right">' +
          '      {* forgotPassword_sendButton *}' +
          '    </div>' +
          '  </div>' +
          '  {* /forgotPasswordForm *}' +
          '</div>' +
          '<div style="display:none;" id="forgotPasswordSuccess">' +
          '  <div class="capture_header">' +
          '    <h1>Create a new password</h1>' +
          '  </div>' +
          '  <div class="capture_body">' +
          '    <p>We\'ve sent an email with instructions to create a new password. Your existing' +
          '      password has not been changed.</p>' +
          '  </div>' +
          '  <div class="capture_footer">' +
          '    <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>' +
          '  </div>' +
          '</div>' +
          '<div style="display:none;" id="mergeAccounts">' +
          '  <div class="capture_header">' +
          '    <h1>Merge accounts</h1>' +
          '  </div>' +
          '  <div class="capture_body">' +
          '  {*  mergeAccounts *}' +
          '  </div>' +
          '</div>' +
          '<div style="display:none;" id="traditionalAuthenticateMerge">' +
          '  <div class="capture_header">' +
          '    <h1>Sign in to complete account merge</h1>' +
          '  </div>' +
          '  {* #tradAuthenticateMergeForm *}' +
          '  <div class="capture_body">' +
          '    <div class="capture_signin">' +
          '      {* traditionalSignIn_emailAddress *}' +
          '      {* mergePassword *}' +
          '    </div>' +
          '  </div>' +
          '  <div class="capture_footer">' +
          '    <div class="capture_left">' +
          '      {* backButton *}' +
          '    </div>' +
          '    <div class="capture_right">' +
          '      {* traditionalSignIn_signInButton *}' +
          '    </div>' +
          '  </div>' +
          '    {* /tradAuthenticateMergeForm *}' +
          '</div>';


        // Reset Password
        widgetHtml += '<div style="display:none;" id="resetPassword">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>Change password</h1>\n' +
          '    </div>\n' +
          '    {* newPasswordForm *}\n' +
          '        {* newpassword *}\n' +
          '        {* newpasswordConfirm *}\n' +
          '        <div class="capture_footer">\n' +
          '            {* submitButton *}\n' +
          '        </div>\n' +
          '    {* /newPasswordForm *}\n' +
          '</div>\n' +
          '<div style="display:none;" id="resetPasswordSuccess">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>Your password has been changed</h1>\n' +
          '    </div>\n' +
          '    <p>Password has been successfully updated.</p>\n' +
          '    <div class="capture_footer">\n' +
          '        <a onclick="signinRedirect();" class="capture_btn capture_primary">Sign in</a>\n' +
          '    </div>\n' +
          '</div>\n' +
          '<div style="display:none;" id="resetPasswordRequestCode">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>Create a new password</h1>\n' +
          '    </div>\n' +
          '    <p>We didn\'t recognize that password reset code. Enter your email address to get a new one.</p>\n' +
          '    {* #resetPasswordForm *}\n' +
          '        {* traditionalSignIn_emailAddress *}\n' +
          '        <div class="capture_footer">\n' +
          '            {* forgotPassword_sendButton *}\n' +
          '        </div>\n' +
          '    {* /resetPasswordForm *}\n' +
          '</div>\n' +
          '<div style="display:none;" id="resetPasswordRequestCodeSuccess">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>Create a new password</h1>\n' +
          '    </div>\n' +
          '      <p>We\'ve sent an email with instructions to create a new password. Your existing password has not been changed.</p>\n' +
          '    <div class="capture_footer">\n' +
          '        <a href="#" onclick="janrain.capture.ui.modal.close()" class="capture_btn capture_primary">Close</a>\n' +
          '    </div>\n' +
          '</div>';

        widgetHtml += '<div style="display:none;" id="verifyEmail">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>Resend Email Verification</h1>\n' +
          '    </div>\n' +
          '    <p>Sorry we could not verify that email address. Enter your email below and we\'ll send you another email.</p>\n' +
          '    {* #resendVerificationForm *}\n' +
          '        {* traditionalSignIn_emailAddress *}\n' +
          '        <div class="capture_footer">\n' +
          '            {* submitButton *}\n' +
          '        </div>\n' +
          '     {* /resendVerificationForm *}\n' +
          '</div>\n' +
          '<div style="display:none;" id="resendVerificationSuccess">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>Your Verification Email Has Been Sent</h1>\n' +
          '    </div>\n' +
          '    <div class="hr"></div>\n' +
          '    <p>Check your email for a link to reset your password.</p>\n' +
          '    <div class="capture_footer">\n' +
          '        <a href="#" data-capturescreen="signIn" class="capture_btn capture_primary">Sign in</a>\n' +
          '    </div>\n' +
          '</div>\n' +
          '<div style="display:none;" id="verifyEmailSuccess">\n' +
          '    <div class="capture_header">\n' +
          '        <h1>You did it!</h1>\n' +
          '    </div>\n' +
          '    <p>Thank you for verifiying your email address.\n' +
          '    <div class="capture_footer">\n' +
          '        <a onclick="signinRedirect();" class="capture_btn capture_primary">Sign in</a>\n' +
          '    </div>\n' +
          '</div>';

        s = document.getElementById('janrainCaptureWidget');

        if (s !== null) {
          s.innerHTML = widgetHtml;
        }
      }
    }
  };

}(jQuery));;
/*globals Drupal, jQuery, window*/
(function ($) {
  "use strict";

  window.Drupal = window.Drupal || {};
  window.Drupal.settings = window.Drupal.settings || {};
  window.Drupal.settings.field_reference_finder_admin = window.Drupal.settings.field_reference_finder_admin || {};

  Drupal.settings.field_reference_finder_admin.fieldName = false;

  Drupal.behaviors.field_reference_finder_admin = {
    attach: function (context, settings) {
      var $findRelatedLinks = $(context).find(".ctools-modal-entityfinder-modal-style");

      function clickHandler(e) {
        var elem = e.data.elem;

        Drupal.settings.field_reference_finder_admin.input = $(elem).parent().find("input[type=text]");

        // required because drupal caching of ajaxViews is broken
        // see http://drupal.org/node/1877238
        if (Drupal.settings.views && Drupal.settings.views.ajaxViews) {
          Drupal.settings.views.ajaxViews = {};
        }
      }

      $findRelatedLinks.each(function (index, elem) {
        $(elem).unbind("click", clickHandler);
        $(elem).bind("click", {elem: elem}, clickHandler);
      });
    }
  };
}(jQuery));
;
/*globals window, document, Modernizr, jQuery*/
/*jslint nomen: true*/

(function ($, underscore) {
  "use strict";

  $(document).ready(function () {


    var getContentHeight = function (target) {
      var contentHeight = 0;
      $(target).each(function () {
        contentHeight += $(this).outerHeight();
      });
      return contentHeight;
    },

      explainerMenu = $('.explainer_menu'),
      menuTitle = '.explainer_title',
      menuTitleHeight = getContentHeight(menuTitle),
      menuContent = '.explainer_menu > div',
      menuContentHeight = getContentHeight(menuContent),
      bigMenu = false,
      scrollSpeed = 400,
      scrollingMenu = '.explainer_card_previews',
      scrollingMenuHeight = ($(window).height() - menuTitleHeight),
      card = $('.field-name-field-card'),
      cardWrapperOffset =  60,
      firstCard = $('.field-collection-main.cards'),
      lastCard = $('.field-name-field-card:last'),
      backToTop = $('.back-to-top'),
      scrollStart,
      scrollEnd,
      currentActiveCard = 1,
      currentPersistentCard = 0,
      contentHeight = getContentHeight(menuContent),
      html = $('html'),
      pageMask = '.explainer_mask',
      burger = '.explainer_burger',
      mobileMenuState = false,
      newMobileMenuState,


      getScrollValue = function (target) {
        return $(target).scrollTop();
      },


      getStart = function (target) {
        return (target.offset() ? target.offset().top : 0);
      },


      navigateTo = function (cardAnchor, speed) {
        if (speed === 0) {
          $('html, body').stop().animate({ scrollTop: cardAnchor }, speed).stop(true, true);
        } else {
          $('html, body').stop().animate({ scrollTop: cardAnchor }, speed);
        }
      },


      anchorMenuLinks = function (speed) {
        var cardAnchor,
          cardAnchorStart;

        if (speed !== 0 && speed === undefined) {
          speed =  400;
        }

        explainerMenu.find('.link-underlay').bind('click', function () {
          cardAnchor = $(this).attr('href');
          cardAnchorStart = getStart($(cardAnchor));
          // reset progress on navigate
          $('.card .title-container .progress').css({'width': '0'});
          navigateTo(cardAnchorStart, speed);

          return false;
        });
        backToTop.bind('click', function () {
          navigateTo(0, speed);

          return false;
        });
      },


      menuCaddy = function () {
        if (menuTitleHeight !== getContentHeight(menuTitle)) {
          menuTitleHeight = getContentHeight(menuTitle);
        }
        if (menuContentHeight !== getContentHeight(menuContent)) {
          menuContentHeight = getContentHeight(menuContent);
        }
        if (menuContentHeight > ($(window).height() - menuTitleHeight)) {
          bigMenu = true;
        }
        if (scrollingMenuHeight !== ($(window).height() - menuTitleHeight)) {
          scrollingMenuHeight = ($(window).height() - menuTitleHeight);
        }

        scrollStart = (getStart(firstCard) + cardWrapperOffset);
        if (html.hasClass('displaymode-mobile') || html.hasClass('displaymode-tablet')) {
          scrollStart = 96;
        }
        scrollEnd   = getStart(lastCard) + (lastCard.outerHeight() - contentHeight);

        if (getScrollValue(window) >= scrollStart) {
          explainerMenu.addClass('fixed');
          if (bigMenu) {
            $(scrollingMenu).css({'height': scrollingMenuHeight});
          }
          if (getScrollValue(window) >= scrollEnd) {
            explainerMenu.removeClass('fixed').addClass('bottom-locked');
            if (bigMenu) {
              $(scrollingMenu).css({'height': ''});
            }
          } else {
            explainerMenu.removeClass('bottom-locked').css({'top': ''});
          }
        } else {
          explainerMenu.removeClass('fixed');
          if (bigMenu) {
            $(scrollingMenu).css({'height': ''});
          }
        }
      },


      activeCard = function () {

        var newActiveCard,
          newPersistentCard,
          clearPersistent = false,
          persistentOffset,
          cardOffset = 120,
          cardTitle = '.title-container',
          defaultCardTitleHeight = 70,
          newAdjustTitlePadding;
        scrollStart = (getStart(firstCard) + cardWrapperOffset);

        if (html.hasClass('displaymode-mobile') || html.hasClass('displaymode-tablet')) {
          cardOffset = 40;
        }

        if (html.hasClass('displaymode-mobile')) {
          persistentOffset  = cardOffset;
        } else if (html.hasClass('displaymode-tablet')) {
          persistentOffset  = cardOffset + 9;
        } else {
          persistentOffset = cardOffset + 60;
        }

        $(card).each(function (i) {
          var cardNumber = i + 1,
            cardName = '.field-name-field-card.card_' + cardNumber,
            cardStart = (getStart($(cardName)) - cardOffset),
            cardHeight = $(cardName).outerHeight(),
            nextCard = cardStart + cardHeight,
            currentPosition = getScrollValue(window),
            currentCardTitleHeight = $(cardName).find(cardTitle).outerHeight(),
            cardProgress;

          if (nextCard === 0) {
            nextCard = cardStart + cardHeight;
          }

          if (currentPosition >= cardStart && currentPosition <= nextCard) {
            localStorage.newActiveCard = cardNumber;
            newActiveCard = cardNumber;

            if(currentPosition <= getStart($(cardName)) + cardHeight && currentPosition >= getStart($(cardName))) {
              cardProgress = Math.round((window.pageYOffset - getStart($(cardName))) / cardHeight * 100);
            // menu
              $('.explainer_card_previews .card_' + newActiveCard + ' .progress').css({'width': cardProgress + '%'});
            // card
              $('.card_' + newActiveCard + ' .title-container .progress').css({'width': cardProgress + '%'});
            }

            if (!Modernizr.csssticky || html.hasClass('displaymode-desktop') || html.hasClass('displaymode-hires')) { // only do it if css position:sticky is not supporeted
              if (currentPosition >= (cardStart + persistentOffset) && currentPosition <= (nextCard - cardOffset)) {
                newPersistentCard = cardNumber;
                // increasing the content padding where large titles persistent titles appear on the mobile display mode
                // - stops snapping when persistence is added/removed
                if (currentCardTitleHeight > defaultCardTitleHeight) {
                  newAdjustTitlePadding = currentCardTitleHeight + (persistentOffset - cardOffset);
                }
              } else {
                clearPersistent = true;
              }
            }

          } else {

            if (cardNumber !== parseInt(localStorage.newActiveCard)) {
              $('.explainer_card_previews .card_' + cardNumber + ' .progress').css({'width': ''});
            }

            if (getScrollValue(window) < scrollStart) {
              // reset inline styles when at the top of the page - fixes rapid scrolling bugs.
              clearPersistent = true;
              localStorage.newActiveCard = '';
              $('.card .progress').css({'width': ''});
            }
          }
        });

        // Active Card Highlight
        if (newActiveCard !== undefined && currentActiveCard !== newActiveCard) {
          $(window).trigger("changeActiveCard", newActiveCard);
          currentActiveCard = newActiveCard;
        }

        // Persistent elements for Highlighted Card
        if (newPersistentCard !== undefined) {
          if (currentPersistentCard !== newPersistentCard) {
            if (newPersistentCard !== 0) {
              currentPersistentCard = newPersistentCard;
              $(window).trigger("changePersistentCard", newPersistentCard);
            }
          }
        } else {
          clearPersistent = true;
        }

        if (clearPersistent) {
          card.removeClass('persistent').removeAttr('style');
          currentPersistentCard = undefined;
        }

        // Content padding management for abnormally long titles when Persistent on low-res mobile
        if (newAdjustTitlePadding !== undefined && html.hasClass('displaymode-mobile')) {
          $('.field-name-field-card.card_' + currentPersistentCard + '.persistent').css({
            'padding-top': newAdjustTitlePadding + 10
          });
        }
      },

      intervalID,
      intervalFunc = function () {
        if (window._ !== undefined) {
          underscore = window._;
          window.clearInterval(intervalID);
          $(window).trigger("underscoreReady");
        }
      };

    // necessary because the underscore js lib is called after this file in DOM
    // so waiting for underscore js to be ready and resetting the underscore local variable

    $(window).bind("underscoreReady", function () {
      if($('body').hasClass('node-type-explainer')) {
        var throttleMobileMenu = underscore.throttle(function () {
            if (html.hasClass('displaymode-mobile') || html.hasClass('displaymode-tablet')) {
              $(window).trigger("toggleMobileButton");
            }
          }, 16),
          throttleManageMedia = underscore.throttle(function () {
            $('.node-type-explainer').manageAllMedia();
          }, 16),
          throttleMenuCaddy = underscore.throttle(menuCaddy, 16),
          throttleActiveCard = underscore.throttle(activeCard, 16);


        $(document).on('scroll', throttleMenuCaddy);
        $(document).on('scroll', throttleActiveCard);
        $(document).on('scroll', throttleMobileMenu);
        $(document).on('scroll', throttleManageMedia);

        $(window).on('resize', throttleMenuCaddy);
        $(window).on('resize', throttleActiveCard);
        $(window).on('resize', throttleMobileMenu);
        $(window).on('resize', throttleManageMedia);
      }
    });

    intervalID = window.setInterval(intervalFunc, 100);


    $(window).on('changeActiveCard', function (e, activeCardNum) {
    // progress bar
      var previousCards = (activeCardNum > 1) ? activeCardNum -1 : 0;

      $('.card:lt(' + previousCards +')').addClass('completed');
      $('.card:gt(' + previousCards +'), .card:eq(' + previousCards +')').removeClass('completed');

    // active Cards
      $('.card, .field-name-field-card').removeClass('active');
      $('.card_' + activeCardNum).addClass('active');
    });


    $(window).on('changePersistentCard', function (e, activeCardNum) {
      card.removeClass('persistent');
      $('.field-name-field-card.card_' + activeCardNum).addClass('persistent');
    });


    $(window).on('hideShowMobileMenu', function (e, hideShow) {
      if (hideShow === 'hide') {
        $(pageMask).removeClass('active');
        explainerMenu.removeClass('mobile-active');
      } else {
        $(pageMask).addClass('active');
        explainerMenu.addClass('mobile-active');
      }
    });


    $(window).on('toggleMobileButton', function (e) {
      if ($(burger).length) {
        if (!Modernizr.csssticky || html.hasClass('displaymode-tablet') || html.hasClass('displaymode-mobile')) { // only do it if css position:sticky is not supporeted
          var menuStart = getStart($('.field-name-field-card.card_1')),
            menuStop = (lastCard.outerHeight() + getStart(lastCard)) - 40;

          if (getScrollValue(window) >= menuStart && getScrollValue(window) <= menuStop) {
            newMobileMenuState = true;
            if ($(burger).hasClass('hidden')) {
              $(burger).removeClass('hidden');
            }
          } else {
            if (getScrollValue(window) >= menuStop) {
              $(burger).addClass('hidden');
            }
            newMobileMenuState = false;
          }
          if (mobileMenuState !== newMobileMenuState) {
            $(burger).toggleClass('active').toggleClass('static');
            mobileMenuState = newMobileMenuState;
          }
        }
      } else {
        if (firstCard.length) {
          $('.field-collection-container').prepend('<a class="explainer_burger static" href="#" title="Explainer Menu"></a><div class="explainer_mask"></div>');
          $(window).trigger('mobileMenuFunctionality', burger);
        }
      }
    });


    $(window).on('mobileMenuFunctionality', function (e, burger) {
      $(burger).bind('click', function () {
        $(window).trigger('hideShowMobileMenu', 'show');

        // add function to existing bind
        backToTop.unbind('.backToTop').bind('click.backToTop', function () {
          $(window).trigger('hideShowMobileMenu', 'hide');
          $(window).trigger("changeActiveCard", 1);
        });

        // add function to existing bind
        explainerMenu.find('.link-underlay').unbind('.menuItems').bind('click.menuItems', function () {
          $(window).trigger('hideShowMobileMenu', 'hide');
        });

        // close when clicking the page mask
        $(pageMask).unbind('click').bind('click', function () {
          $(window).trigger('hideShowMobileMenu', 'hide');
        });

        // add close button (first time only)
        if (explainerMenu.find('.close_btn').length === 0) {
          explainerMenu.prepend('<a class="close_btn" href="#" title="Close Menu"></a>');
        }
        // close when using close button
        explainerMenu.find('.close_btn').unbind('click').bind('click', function () {
          $(window).trigger('hideShowMobileMenu', 'hide');
          return false;
        });

        return false;
      });
    });


    if (card.length !== 0) {
      $(window).trigger("toggleMobileButton");
      $(window).trigger("changeActiveCard", currentActiveCard);
      card.removeClass('persistent');
    }

    if (html.hasClass('displaymode-mobile') || html.hasClass('displaymode-tablet')) {
      scrollSpeed = 0; // the 0 is an animation speed value disables animations on menu click events
    }

    anchorMenuLinks(scrollSpeed);

    window.onload = function () {
      // solution to fix persistent element bug.
      // this bug occurs when the page loads anchored (in the native browser) to your last view position
      // simple fix is to fake a window resize to force the methods to execute and the page to update
      // - The methods are not triggered if values attained from the window/document remain the same.
      $(window).resize();
    };

  });

}(jQuery, window._));;
/*global Drupal, jQuery, SBS, window*/
(function (Drupal, $, window) {
  "use strict";

  var cookie_options = {
    domain  : '.sbs.com.au', // work across subdomains
    path    : '/',           // cookie path
    expires : null           // this session only
  };

  Drupal.behaviors = Drupal.behaviors || {};
  Drupal.behaviors.ensighten = Drupal.behaviors.ensighten || {};

  Drupal.behaviors.ensighten.attach = function (context, settings) {
    if (window.SBS && $.cookie) {
      SBS.tokenValues = SBS.tokenValues || {};
      // merge click data into tokenValues and expire the cookie
      var info = JSON.parse($.cookie('ensighten_click'));
      $.cookie('ensighten_click', null, cookie_options);
      $.extend(SBS.tokenValues, info);

      // set up links to save click info
      settings.ensighten = settings.ensighten || {selectors : []};
      $.each(settings.ensighten.selectors, function (i, selector) {
        $(context).find(selector).each(function () {
          var that = this;
          that.selector = selector;
          $(this).once('ensighten', function () {
            var instance = new Drupal.Ensighten(that);
          });
        });
      });
    }
  };

  Drupal.Ensighten = function (element) {
    var that = this;
    $(element).click(function (e) {
      that.info = {
        clickedTop:            Math.round($(element).offset().top),
        clickedLeft:           Math.round($(element).offset().left),
        clickedDisplay:        SBS.displaymode.get(),
        clickedGrid:           SBS.displaymode.getGridMode(),
        clickedPageX:          e.pageX,
        clickedPageY:          e.pageY,
        clickedSelector:       element.selector,
        clickedSourceClass:    $(element).parents(element.selector.split(/\s+/)[0]).attr('class'),
        clickedPositionClass:  $(element).parents(element.selector.split(/\s+/)[1]).attr('class'),
        clickedWidth:          ($(element).width()  > 0 ? $(element).width()  : $(element).parents(element.selector.split(/\s+/)[1]).width()),
        clickedHeight:         ($(element).height() > 0 ? $(element).height() : $(element).parents(element.selector.split(/\s+/)[1]).height()),
        clickedCurrent:        window.location.href,
        clickedTarget:         $(element).attr('href')
      };

      // store the click info
      $.cookie('ensighten_click', JSON.stringify(that.info), cookie_options);
    });
  };

}(Drupal, jQuery, window));
;
(function ($) {
  $(document).ready(function(){
    function getQueryString (){
      var result = $('#edit-search-form').val()
        .replace(/(<([^>]+)>)/ig,'')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
      return result;
    }

    function getMaxDisplay(){
      return 5;
    }

    function getBaseUrl (){
      return '/api/gss/search/';
    }

    function getCurrentUrl (){
      return window.location.origin + window.location.pathname;
    }

    function buildSearchUrl(baseUrl, queryString, pageNumber, sortByDate){
      if(sortByDate){
        return baseUrl + '?query=' + encodeURIComponent(queryString).replace(/\'/g, "%27") + '&p=' + pageNumber + '&sort=date:d';
      }
      else{
        return baseUrl + '?query=' + encodeURIComponent(queryString).replace(/\'/g, "%27") + '&p=' + pageNumber;
      }
    }

    function generateMetaDataInfoHtml(item){
      var itemHtml = '<span class="metadata-info">';

      itemHtml = itemHtml + item.siteName;

      itemHtml = itemHtml + '</span>';

      return itemHtml;
    }
    
    function generateItemHtml (item) {
      var itemHtml =
        '<div class="search-item">' +
          '<a class="link-underlay" href="' + item.link + '"></a>' +
          '<div class="content">' +
            '<div class="details">' +
              generateMetaDataInfoHtml(item) +
            '</div>' +
            '<h3>' + item.title + '</h3>' +
            '<div class="abstract">' + item.htmlSnippet + '</div>' +
          '</div>' +
        '</div>';

      //use this if in stage 2 we decide to put back images
      /*  var itemHtml =
        '<div class="search-item clearfix">' +
        '<a class="link-underlay" href="' + item.link + '"></a>' +
        '<div class="content">' +
        '<div class="details">' +
        '<span class="date">28 July 2016</span>' + ' | ' +
        '<span class="metadata-info">' + item.siteName.toUpperCase() + '</span>' +
        '</div>' +
        '<h3>' + item.title + '</h3>' +
        '<div class="snippet">' + item.htmlSnippet + '</div>' +
        '</div>' +
        '<div class="image">';

      if(item.siteName === 'On Demand'){
        temHtml = itemHtml +
          '<img src="' + item.thumbnail + '" alt="' + item.title + '">';
      }

      itemHtml = itemHtml +
        '</div>' +
        '</div>';*/

      return itemHtml;
    }

    function buildResultHeader (queryString, sortByDate){
      var rawHtml = '';


      rawHtml = rawHtml +
        '<div class="result-header">' +
          '<div class="result-header-title">Showing results for  "' + queryString + '"</div>' +
          '<div class="result-header-sort">';

      if(sortByDate){
        rawHtml = rawHtml +
            '<button type="button" class="sort-by selected" id="by-date" disabled>by date</button>' +
            '<span> | </span>' +
            '<button type="button" class="sort-by" id="by-relevance">by relevance</button>';
      }
      else{
        rawHtml = rawHtml +
            '<button type="button" class="sort-by" id="by-date">by date</button>' +
            '<span> | </span>' +
            '<button type="button" class="sort-by selected" id="by-relevance" disabled>by relevance</button>';
      }

      rawHtml = rawHtml +
          '</div>' +
        '</div>';

      return rawHtml;
    }
    
    function buildResults (result, sortByDate){
      var queryString = getQueryString ();
      var rawHtml = '<div id="search_result">';

      if(result.results.length > 0){
        rawHtml = rawHtml + buildResultHeader(queryString, sortByDate);

        rawHtml = rawHtml + '<div class="result-list">';

        result.results.forEach(function(item){
          rawHtml = rawHtml + generateItemHtml(item);
        });

        rawHtml = rawHtml + '</div>';
      }
      else{
        rawHtml = rawHtml +
          '<div class="result-header">' +
            '<div class="result-header-title">No results found for "' + queryString + '"</div>' +
          '</div>';
      }

      rawHtml = rawHtml + '<div/>';

      $('#search_result').replaceWith(rawHtml);
    }

    function generatePageHtml (currentPage, selectedPage, queryString, linkText, sortByDate){
      var searchUrl = buildSearchUrl(getCurrentUrl(), queryString, currentPage, sortByDate);
      var pageHtml = '';

      if(currentPage === selectedPage){
        pageHtml = '<li class="pager-current">' + currentPage + '</li>'
      }
      else{
        pageHtml =
          '<li class="pager-item">' +
            '<a title="Go to page ' + currentPage + '" href="' + searchUrl + '" page="' + currentPage + '">' + linkText + '</a>' +
          '</li>';
      }


      return pageHtml;
    }

    function buildPagination (result, queryString, sortByDate){

      if(result.results.length > 0){
        var totalPage = Math.min(Math.ceil(result.totalResults / result.perPage), 100);
        var maxDisplay = getMaxDisplay();

        var minPage = Math.max(1, (parseInt(result.page) - Math.floor(maxDisplay/2)));
        var maxPage = Math.min(totalPage, (parseInt(result.page) + Math.floor(maxDisplay/2)));

        if(totalPage > maxDisplay){
          maxPage = Math.max(maxDisplay, maxPage);
          minPage = Math.min(minPage, totalPage-maxDisplay);
        }

        var rawHtml = '<div id="pagination"><ul class="pager pager-paged">';

        // Previous
        if(totalPage > maxDisplay){
          /*if(minPage > 2){
           rawHtml = rawHtml + generatePageHtml(1, parseInt(result.page), queryString, 'First', sortByDate);
           }*/
          if(minPage >= 2){
            rawHtml = rawHtml + generatePageHtml(minPage - 1, parseInt(result.page), queryString, 'Prev', sortByDate);
          }
        }

        for(var i = minPage; i <= maxPage; i++){
          rawHtml = rawHtml + generatePageHtml(i, parseInt(result.page), queryString, i, sortByDate);
        }

        // Next
        if(totalPage > maxDisplay){
          if(maxPage <= totalPage - 1){
            rawHtml = rawHtml + generatePageHtml(maxPage + 1, parseInt(result.page), queryString, 'Next', sortByDate);
          }
          /*if(maxPage <= totalPage - 2){
           rawHtml = rawHtml + generatePageHtml(totalPage, parseInt(result.page), queryString, 'Last', sortByDate);
           }*/
        }

        rawHtml = rawHtml + '</ul><div/>';
      }
      else{
        var rawHtml = '<div id="pagination"></div>';
      }


      $('#pagination').replaceWith(rawHtml);
    }

    function updateCurrentUrl (queryString, pageNumber, sortByDate){
      var newUrl = buildSearchUrl('', queryString, pageNumber, sortByDate);

      window.history.pushState({},'Search SBS', newUrl);
    }

    function trackSearchClick(queryString){
      var s = {};
      if (window.sbs_s !== undefined) {
        s = window.sbs_s;
        s.manageVars('clearVars');
      } else {
        return;
      }

      // need to set pageURL so s.eVar11 & e.prop11 is not cached
      s.pageURL = getCurrentUrl () + '?query=' + encodeURI(queryString);
      s.linkTrackVars = "events,eVar11,prop11";
      s.linkTrackEvents = "event2";
      s.events = "event2";
      s.eVar11 = queryString;
      s.prop11 = queryString;

      s.tl(true, "o", "{s:search}");
    }

    function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }

    function doSearch (queryString, searchUrl, byDate){
      var sortByDate = (typeof byDate === 'undefined' || byDate === null || byDate === '') ? false : byDate;

      $.ajax({
        url: searchUrl,
        headers: { 'X-Search': 'sbs' },
        success: function(result){
          setTimeout(updateCurrentUrl(queryString, result.page, sortByDate), 0);
          setTimeout(buildResults(result, sortByDate), 0);
          setTimeout(buildPagination(result, queryString, sortByDate), 0);
        }
      }).done(function(){
        //attach onclick event for each pagination links
        $('#pagination a').click(function(event){
          event.preventDefault();
          var queryString = getQueryString();
          var pageNum = $(event.target).attr('page');
          var searchUrl = buildSearchUrl(getBaseUrl(), queryString, pageNum, sortByDate);
          doSearch (queryString, searchUrl, sortByDate);
        });

        $('.sort-by#by-relevance').click(function(event){
          event.preventDefault();
          var queryString = getQueryString();
          var searchUrl = buildSearchUrl(getBaseUrl(), queryString, 1);
          doSearch (queryString, searchUrl);
        });

        $('.sort-by#by-date').click(function(event){
          event.preventDefault();
          var queryString = getQueryString();
          var searchUrl = buildSearchUrl(getBaseUrl(), queryString, 1, true);
          doSearch (queryString, searchUrl, true);
        });
      });
    }

    // get initial search arguments from URL
    var queryString = getURLParameter('query');
    var sortByDate = (getURLParameter('sort') === 'date:d') ? true : false;
    var pageNum = getURLParameter('p');
    pageNum = (pageNum === null) ? 1 : pageNum;
    var searchUrl = buildSearchUrl(getBaseUrl(), queryString, pageNum, sortByDate);
    if(queryString !== null && queryString !== ''){
      $('#edit-search-form').val(queryString);
      doSearch (queryString, searchUrl, sortByDate);
    }

    $('#add-component-form').submit(function(event) {
      event.preventDefault();
      var queryString = getQueryString();
      var searchUrl = buildSearchUrl(getBaseUrl(), queryString, 1);
      doSearch (queryString, searchUrl);
      trackSearchClick(queryString);
    });

    $('#edit-cancel').click(function(event){
      event.preventDefault();
      $('#edit-search-form').val('');
    });
  });
})(jQuery);
;
/* MediaMatch v.2.0.1 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===
b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));
k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=
d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),
m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,media:a,addListener:function(a){l[c].listeners||
(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));;
!function(t,e,i){var o=["webkit","Moz","ms","O"],r={},n;function a(t,i){var o=e.createElement(t||"div"),r;for(r in i)o[r]=i[r];return o}function s(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var f=function(){var t=a("style",{type:"text/css"});s(e.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function l(t,e,i,o){var a=["opacity",e,~~(t*100),i,o].join("-"),s=.01+i/o*100,l=Math.max(1-(1-t)/e*(100-s),t),p=n.substring(0,n.indexOf("Animation")).toLowerCase(),u=p&&"-"+p+"-"||"";if(!r[a]){f.insertRule("@"+u+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+s+"%{opacity:"+t+"}"+(s+.01)+"%{opacity:1}"+(s+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",f.cssRules.length);r[a]=1}return a}function p(t,e){var r=t.style,n,a;if(r[e]!==i)return e;e=e.charAt(0).toUpperCase()+e.slice(1);for(a=0;a<o.length;a++){n=o[a]+e;if(r[n]!==i)return n}}function u(t,e){for(var i in e)t.style[p(t,i)||i]=e[i];return t}function c(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)if(t[r]===i)t[r]=o[r]}return t}function d(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function m(t){if(!this.spin)return new m(t);this.opts=c(t||{},m.defaults,h)}m.defaults={};c(m.prototype,{spin:function(t){this.stop();var e=this,i=e.opts,o=e.el=u(a(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex}),r=i.radius+i.length+i.width,s,f;if(t){t.insertBefore(o,t.firstChild||null);f=d(t);s=d(o);u(o,{left:(i.left=="auto"?f.x-s.x+(t.offsetWidth>>1):parseInt(i.left,10)+r)+"px",top:(i.top=="auto"?f.y-s.y+(t.offsetHeight>>1):parseInt(i.top,10)+r)+"px"})}o.setAttribute("aria-role","progressbar");e.lines(o,e.opts);if(!n){var l=0,p=i.fps,c=p/i.speed,h=(1-i.opacity)/(c*i.trail/100),m=c/i.lines;(function y(){l++;for(var t=i.lines;t;t--){var r=Math.max(1-(l+t*m)%c*h,i.opacity);e.opacity(o,i.lines-t,r,i)}e.timeout=e.el&&setTimeout(y,~~(1e3/p))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=i}return this},lines:function(t,e){var i=0,o;function r(t,o){return u(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:o,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;i<e.lines;i++){o=u(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:n&&l(e.opacity,e.trail,i,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)s(o,u(r("#000","0 0 4px "+"#000"),{top:2+"px"}));s(t,s(o,r(e.color,"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});(function(){function t(t,e){return a("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=u(a("group"),{behavior:"url(#default#VML)"});if(!p(e,"transform")&&e.adj){f.addRule(".spin-vml","behavior:url(#default#VML)");m.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function n(){return u(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",f=u(n(),{position:"absolute",top:a,left:a}),l;function p(e,r,a){s(f,s(u(n(),{rotation:360/i.lines*e+"deg",left:~~r}),s(u(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(l=1;l<=i.lines;l++)p(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)p(l);return s(e,f)};m.prototype.opacity=function(t,e,i,o){var r=t.firstChild;o=o.shadow&&o.lines||0;if(r&&e+o<r.childNodes.length){r=r.childNodes[e+o];r=r&&r.firstChild;r=r&&r.firstChild;if(r)r.opacity=i}}}else n=p(e,"animation")})();if(typeof define=="function"&&define.amd)define(function(){return m});else t.Spinner=m}(window,document);;
/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(['#modernizr:after{content:"',l,'";visibility:hidden}'].join(""),function(b){a=b.offsetHeight>=1}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);;
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);;

(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);;
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);
;
// jquery.royalslider v9.4.92
(function(l){function t(b,f){var c,g,a=this,e=navigator.userAgent.toLowerCase();a.uid=l.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,j=["webkit","Moz","ms","O"],h="",k=0;for(c=0;c<j.length;c++)g=j[c],!h&&g+"Transform"in d&&(h=g),g=g.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[g+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g+"CancelAnimationFrame"]||window[g+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-k)),d=window.setTimeout(function(){a(b+c)},c);k=b+c;return d});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=e.match(/(ipad)/);j=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];c=j[1]||"";g=j[2]||"0";
j={};c&&(j[c]=!0,j.version=g);j.chrome&&(j.webkit=!0);a._a=j;a.isAndroid=-1<e.indexOf("android");a.slider=l(b);a.ev=l(a);a._b=l(document);a.st=l.extend({},l.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;if(a.st.allowCSS3&&(!j.webkit||a.st.allowCSS3OnWebkit))e=h+(h?"T":"t"),a._e=e+"ransform"in d&&e+"ransition"in d,a._e&&(a._f=h+(h?"P":"p")+"erspective"in d);h=h.toLowerCase();a._g="-"+h+"-";a._h="vertical"===a.st.slidesOrientation?!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";
a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;l.each(l.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?l(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return 0.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>a.numSlides-1&&(a.st.startSlideId=a.numSlides-
1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.msTouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=
[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(l('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=l(d+"</div></div>");h=a.ns;a.msEnabled=window.navigator.msPointerEnabled;a.msEnabled?(a.msTouch=Boolean(1<window.navigator.msMaxTouchPoints),a.hasTouch=!1,a._n1=0.2,a._j1="MSPointerDown"+h,a._k1="MSPointerMove"+h,a._l1="MSPointerUp"+h,a._m1="MSPointerCancel"+h):(a._j1="mousedown"+h,a._k1="mousemove"+h,a._l1="mouseup"+h,a._m1="mouseup"+h,"ontouchstart"in
window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+h,a._k1+=" touchmove"+h,a._l1+=" touchend"+h,a._m1+=" touchcancel"+h,a._n1=0.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=0.2));a.st.sliderDrag&&(a._f1=!0,j.msie||j.opera?a._g1=a._h1="move":j.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):j.webkit&&-1!=navigator.platform.indexOf("Mac")&&(a._g1="-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");
a.msEnabled&&a._p1.css("-ms-touch-action",a._h?"pan-y":"pan-x");a._q1=l('<div class="rsPreloader"></div>');d=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(j.webkit&&!j.chrome&&a.slider.addClass("rsWebkit3d"),/iphone|ipad|ipod/gi.test(navigator.appVersion),a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),
a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,d.css(h))):(a._x1="left",a._w1="top");var n;l(window).on("resize"+a.ns,function(){n&&clearTimeout(n);n=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();if(a.st.arrowsNavHideOnTouch&&(a.hasTouch||a.msTouch))a.st.arrowsNav=!1;a.st.arrowsNav&&(d=a._o1,l('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d),
a._c2=d.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=d.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),d.one("mousemove.arrowshover",function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),d.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),
a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a._f1)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var m=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=l(b.target).attr("class");if(-1!==l.inArray(c,m)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(l(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick")}}).on("click.rs","a",function(){if(a.dragSuccess)return!1;
a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}l.rsModules||(l.rsModules={uid:0});t.prototype={constructor:t,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-
1)/2)));this._y=b},_s:function(b,f){function c(a,b){b?e.images.push(a.attr(b)):e.images.push(a.text());if(j){j=!1;e.caption="src"===b?a.attr("alt"):a.contents();e.image=e.images[0];e.videoURL=a.attr("data-rsVideo");var c=a.attr("data-rsw"),d=a.attr("data-rsh");"undefined"!==typeof c&&!1!==c&&"undefined"!==typeof d&&!1!==d?(e.iW=parseInt(c,10),e.iH=parseInt(d,10)):g.st.imgWidth&&g.st.imgHeight&&(e.iW=g.st.imgWidth,e.iH=g.st.imgHeight)}}var g=this,a,e={},d,j=!0;b=l(b);g._k2=b;g.ev.trigger("rsBeforeParseNode",
[b,e]);if(!e.stopParsing)return b=g._k2,e.id=g._r,e.contentAdded=!1,g._r++,e.images=[],e.isBig=!1,e.hasCover||(b.hasClass("rsImg")?(d=b,a=!0):(d=b.find(".rsImg"),d.length&&(a=!0)),a?(e.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=l(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(e.caption=d.remove()),e.content=b,g.ev.trigger("rsAfterParseNode",[b,e]),f&&g.slides.push(e),0===
e.images.length&&(e.isLoaded=!0,e.isRendered=!1,e.isLoading=!1,e.images=null),e},_b2:function(){var b=this,f,c,g=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(a){if(!b._l2&&(c=a.keyCode,(37===c||39===c)&&!f))g(c),f=setInterval(function(){g(c)},700)}).on("keyup"+b.ns,function(){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+
this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);l.removeData(this.slider,"royalSlider");l(window).off("resize"+this.ns);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,e,f){c.isAdded?(g(e,c),a(e,c)):(f||(f=d.slidesJQ[e]),c.holder?f=c.holder:(f=d.slidesJQ[e]=l(f),c.holder=f),c.appendOnLoaded=!1,a(e,c,f),g(e,c),d._p2(c,f,b),c.isAdded=!0)}function g(a,c){c.contentAdded||(d.setItemHtml(c,
b),b||(c.contentAdded=!0))}function a(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function e(a){if(k){if(a>n-1)return e(a-n);if(0>a)return e(n+a)}return a}var d=this,j,h,k=d._z,n=d.numSlides;if(!isNaN(f))return e(f);var m=d.currSlideId,p,q=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,r=Math.min(2,q),u=!1,t=!1,s;for(h=m;h<m+1+r;h++)if(s=e(h),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){u=!0;break}for(h=m-1;h>m-1-r;h--)if(s=e(h),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){t=
!0;break}if(u)for(h=m;h<m+q+1;h++)s=e(h),p=Math.floor((d._u-(m-h))/d.numSlides)*d.numSlides,(j=d.slides[s])&&c(j,s);if(t)for(h=m-1;h>m-1-q;h--)s=e(h),p=Math.floor((d._u-(m-h))/n)*n,(j=d.slides[s])&&c(j,s);if(!b){r=e(m-q);m=e(m+q);q=r>m?0:r;for(h=0;h<n;h++)if(!(r>m&&h>r-1)&&(h<q||h>m))if((j=d.slides[h])&&j.holder)j.holder.detach(),j.isAdded=!1}},setItemHtml:function(b,f){var c=this,g=function(){if(b.images){if(!b.isLoading){var e,f;b.content.hasClass("rsImg")?(e=b.content,f=!0):e=b.content.find(".rsImg:not(img)");
e&&!e.is("img")&&e.each(function(){var a=l(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=l(c):a.replaceWith(c)});e=f?b.content:b.content.find("img.rsImg");h();e.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)l("<img />").on("load.rs error.rs",function(){l(this).off("load.rs error.rs");a([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;e=function(){l(this).off("load.rs error.rs");b.loaded.push(this);
b.loaded.length===b.numStartedLoad&&a(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var j=l("<img />");b.numStartedLoad++;j.on("load.rs error.rs",e).attr("src",b.images[g])}}}}else b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0)},a=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&k();else if(b.iW&&b.iH)e();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)e();else{var f=new Image;f.onload=function(){f.width?(b.iW=f.width,b.iH=f.height,e()):setTimeout(function(){f.width&&
(b.iW=f.width,b.iH=f.height);e()},1E3)};f.src=d.src}}else e()},e=function(){b.isLoaded=!0;b.isLoading=!1;d();k();j()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;if(!f&&!b.appendOnLoaded&&c.st.fadeinLoadedSlide&&(0===d||(a||c._r2||c._l2)&&(-1===d||1===d)))a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16);b.holder.find(".rsPreloader").length?b.holder.append(b.content):
b.holder.html(b.content);b.isAppended=!0;b.isLoaded&&(c._q2(b),j());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},j=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},h=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},k=function(){if(c.st.usePreloader){var a=b.holder.find(".rsPreloader");a.length&&a.remove()}};b.isLoaded?d():f?!c._l&&b.images&&
b.iW&&b.iH?g():(b.holder.isWaiting=!0,h(),b.holder.slideId=-99):g()},_p2:function(b){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,g,a="touchstart"===b.type;c._s2=a;c.ev.trigger("rsDragStart");if(l(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)a&&(c._v2=!0);else{a&&(c._v2=!1);c._w2();if(a){var e=b.originalEvent.touches;if(e&&0<e.length)g=e[0],1<e.length&&(c._v2=!0);else return}else b.preventDefault(),
g=b,c.msEnabled&&(g=g.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=g.pageX;c._c3=g.pageY;c._d3=c._v=(!f?c._h:c._e3)?g.pageX:g.pageY;c._f3=0;c._g3=0;c._h3=!f?c._p:c._i3;c._j3=(new Date).getTime();if(a)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,g=b.pageX-this._b3,a=b.pageY-this._c3,e=this._h3+g,d=this._h3+a,j=!f?this._h:this._e3,e=j?e:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=
b.pageY;"x"===d&&0!==g?this._f3=0<g?1:-1:"y"===d&&0!==a&&(this._g3=0<a?1:-1);d=j?this._b3:this._c3;g=j?g:a;f?e>this._n3?e=this._h3+g*this._n1:e<this._o3&&(e=this._h3+g*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(e=this._h3+g*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(e=this._h3+g*this._n1));this._h3=e;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,g,a="touchmove"===b.type;if(!c._s2||a){if(a){if(c._r3)return;
var e=b.originalEvent.touches;if(e){if(1<e.length)return;g=e[0]}else return}else g=b,c.msEnabled&&(g=g.originalEvent);c._a3||(c._e&&(!f?c._p1:c._s3).css(c._g+c._u1,"0s"),function j(){c._l2&&(c._t3=requestAnimationFrame(j),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=g;else if(e=!f?c._h:c._e3,g=Math.abs(g.pageX-c._b3)-Math.abs(g.pageY-c._c3)-(e?-7:7),7<g){if(e)b.preventDefault(),c._z2="x";else if(a){c._v3();return}c._l3=!0}else if(-7>g){if(e){if(a){c._v3();
return}}else b.preventDefault(),c._z2="y";c._l3=!0}}},_v3:function(){this._r3=!0;this._a3=this._l2=!1;this._y2()},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function g(b,d){if(a._l||f)j=(-a._u-a._d1)*a._w,h=Math.abs(a._p-j),a._c=h/d,b&&(a._c+=250),a._c=c(a._c),a._x3(j,!1)}var a=this,e,d,j,h;d="touchend"===b.type||"touchcancel"===b.type;if(!a._s2||d)if(a._s2=!1,a.ev.trigger("rsDragRelease"),a._u3=null,a._l2=!1,a._r3=!1,a._l3=!1,a._m3=0,cancelAnimationFrame(a._t3),a._a3&&(f?a._q3(a._h3):
a._l&&a._p3(a._h3)),a._b.off(a._k1).off(a._l1),d&&a._e1.off(a._m1),a._i1(),!a._a3&&!a._v2&&f&&a._w3){var k=l(b.target).closest(".rsNavItem");k.length&&a.goTo(k.index())}else{e=!f?a._h:a._e3;if(!a._a3||"y"===a._z2&&e||"x"===a._z2&&!e)if(!f&&a._t2){a._t2=!1;if(a.st.navigateByClick){a._i2(a.msEnabled?b.originalEvent:b);a.dragSuccess=!0;return}a.dragSuccess=!0}else{a._t2=!1;a.dragSuccess=!1;return}else a.dragSuccess=!0;a._t2=!1;a._z2="";var n=a.st.minSlideOffset;d=d?b.originalEvent.changedTouches[0]:
a.msEnabled?b.originalEvent:b;var m=e?d.pageX:d.pageY,p=a._d3;d=a._v;var q=a.currSlideId,r=a.numSlides,u=e?a._f3:a._g3,t=a._z;Math.abs(m-p);e=m-d;d=(new Date).getTime()-a._j3;d=Math.abs(e)/d;if(0===u||1>=r)g(!0,d);else{if(!t&&!f)if(0>=q){if(0<u){g(!0,d);return}}else if(q>=r-1&&0>u){g(!0,d);return}if(f){j=a._i3;if(j>a._n3)j=a._n3;else if(j<a._o3)j=a._o3;else{n=d*d/0.006;k=-a._i3;m=a._y3-a._z3+a._i3;0<e&&n>k?(k+=a._z3/(15/(0.003*(n/d))),d=d*k/n,n=k):0>e&&n>m&&(m+=a._z3/(15/(0.003*(n/d))),d=d*m/n,n=
m);k=Math.max(Math.round(d/0.003),50);j+=n*(0>e?-1:1);if(j>a._n3){a._a4(j,k,!0,a._n3,200);return}if(j<a._o3){a._a4(j,k,!0,a._o3,200);return}}a._a4(j,k,!0)}else p+n<m?0>u?g(!1,d):a._m2("prev",c(Math.abs(a._p-(-a._u-a._d1+1)*a._w)/d),!1,!0,!0):p-n>m?0<u?g(!1,d):a._m2("next",c(Math.abs(a._p-(-a._u-a._d1-1)*a._w)/d),!1,!0,!0):g(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,
c;if(this.st.autoScaleSlider){var g=this.st.autoScaleSliderWidth,a=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",f*(a/g)),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",c*(g/a)),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");
this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&(b.images&&b.isLoaded)&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-
this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,'<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>');f<this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=
this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(){var b=this,f=b.numSlides,f=0>=b._u?0:Math.floor(b._u/f);b.numSlides=b.slides.length;0===b.numSlides?(b.currSlideId=b._d1=b._u=0,b.currSlide=b._g4=null):b._u=f*b.numSlides+b.currSlideId;for(f=0;f<b.numSlides;f++)b.slides[f].id=f;b.currSlide=
b.slides[b.currSlideId];b._r1=b.slidesJQ[b.currSlideId];b.currSlideId>=b.numSlides?b.goTo(b.numSlides-1):0>b.currSlideId&&b.goTo(0);b._t();b._l&&b._z&&b._p1.css(b._g+b._u1,"0ms");b._h4&&clearTimeout(b._h4);b._h4=setTimeout(function(){b._l&&b._p3((-b._u-b._d1)*b._w);b._n2();b._l||b._r1.css({display:"block",opacity:1})},14);b.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},
_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,g,a){var e=this,d,j,h;e.ev.trigger("rsBeforeMove",[b,g]);h="next"===b?e.currSlideId+1:"prev"===b?e.currSlideId-1:b=parseInt(b,10);if(!e._z){if(0>h){e._i4("left",!g);return}if(h>=e.numSlides){e._i4("right",
!g);return}}e._r2&&(e._u2(!0),c=!1);j=h-e.currSlideId;h=e._o2=e.currSlideId;var k=e.currSlideId+j;g=e._u;var l;e._z?(k=e._n2(!1,k),g+=j):g=k;e._o=k;e._g4=e.slidesJQ[e.currSlideId];e._u=g;e.currSlideId=e._o;e.currSlide=e.slides[e.currSlideId];e._r1=e.slidesJQ[e.currSlideId];var k=e.st.slidesDiff,m=Boolean(0<j);j=Math.abs(j);var p=Math.floor(h/e._y),q=Math.floor((h+(m?k:-k))/e._y),p=(m?Math.max(p,q):Math.min(p,q))*e._y+(m?e._y-1:0);p>e.numSlides-1?p=e.numSlides-1:0>p&&(p=0);h=m?p-h:h-p;h>e._y&&(h=e._y);
if(j>h+k){e._d1+=(j-(h+k))*(m?-1:1);f*=1.4;for(h=0;h<e.numSlides;h++)e.slides[h].positionSet=!1}e._c=f;e._n2(!0);a||(l=!0);d=(-g-e._d1)*e._w;l?setTimeout(function(){e._j4=!1;e._x3(d,b,!1,c);e.ev.trigger("rsOnUpdateNav")},0):(e._x3(d,b,!1,c),e.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),!this._z&&!this.st.loopRewind&&(0===this.currSlideId?
this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,g,a){function e(){var a;if(j&&(a=j.data("rsTimeout")))j!==h&&j.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),j.data("rsTimeout","");if(a=h.data("rsTimeout"))clearTimeout(a),h.data("rsTimeout","")}var d=this,j,h,k={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");
d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,k[d._g+d._u1]=d._c+"ms",k[c]=g?l.rsCSS3Easing[d.st.easeInOut]:l.rsCSS3Easing[d.st.easeOut],d._p1.css(k),g||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,j=d._g4,h=d._r1,h.data("rsTimeout")&&h.css("opacity",0),e(),j&&j.data("rsTimeout",setTimeout(function(){k[d._g+d._u1]="0ms";k.zIndex=0;k.display="none";j.data("rsTimeout","");j.css(k);setTimeout(function(){j.css("opacity",0)},16)},d._c+60)),k.display="block",k.zIndex=
d._m,k.opacity=0,k[d._g+d._u1]="0ms",k[d._g+d._v1]=l.rsCSS3Easing[d.st.easeInOut],h.css(k),h.data("rsTimeout",setTimeout(function(){h.css(d._g+d._u1,d._c+"ms");h.data("rsTimeout",setTimeout(function(){h.css("opacity",1);h.data("rsTimeout","")},20))},20))):d._l?(k[d._h?d._x1:d._w1]=b+"px",d._p1.animate(k,d._c,g?d.st.easeInOut:d.st.easeOut)):(j=d._g4,h=d._r1,h.stop(!0,!0).css({opacity:0,display:"block",zIndex:d._m}),d._c=d.st.transitionSpeed,h.animate({opacity:1},d._c,d.st.easeInOut),e(),j&&j.data("rsTimeout",
setTimeout(function(){j.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=a?setTimeout(function(){d.loadingTimeout=null;a.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(this._e){if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._x1),10);else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:b},_k4:function(){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;
this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,g=(-c._u-c._d1)*c._w;if(!(0===c.numSlides||c._r2))if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var a=function(){c._r2=!1};c._x3(g+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(g,"",!1,!0,a)})}},_q2:function(b){if(!b.isRendered){var f=b.content,c="rsMainSlideImage",g,a=this.st.imageAlignCenter,e=this.st.imageScaleMode,d;b.videoURL&&(c="rsVideoContainer","fill"!==e?g=
!0:(d=f,d.hasClass(c)||(d=d.find("."+c)),d.css({width:"100%",height:"100%"}),c="rsMainSlideImage"));f.hasClass(c)||(f=f.find("."+c));if(f){var j=b.iW,c=b.iH;b.isRendered=!0;if("none"!==e||a){b="fill"!==e?this._d4:0;d=this._b4-2*b;var h=this._c4-2*b,k,l,m={};if("fit-if-smaller"===e&&(j>d||c>h))e="fit";if("fill"===e||"fit"===e)k=d/j,l=h/c,k="fill"==e?k>l?k:l:"fit"==e?k<l?k:l:1,j=Math.ceil(j*k,10),c=Math.ceil(c*k,10);"none"!==e&&(m.width=j,m.height=c,g&&f.find(".rsImg").css({width:"100%",height:"100%"}));
a&&(m.marginLeft=Math.floor((d-j)/2)+b,m.marginTop=Math.floor((h-c)/2)+b);f.css(m)}}}}};l.rsProto=t.prototype;l.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=l(this);if("object"===typeof b||!b)c.data("royalSlider")||c.data("royalSlider",new t(c,b));else if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,Array.prototype.slice.call(f,1))})};l.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",
transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,
autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};l.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};l.extend(jQuery.easing,{easeInOutSine:function(b,f,c,g,a){return-g/2*(Math.cos(Math.PI*f/a)-1)+c},easeOutSine:function(b,f,c,g,a){return g*Math.sin(f/a*(Math.PI/2))+c},easeOutCubic:function(b,f,c,g,a){return g*((f=f/a-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(j){j.extend(j.rsProto,{_p4:function(){function l(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=j.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){l()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=j(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(d.animBlocks=b.hasClass("rsABlock")?b.css("display","none"):!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){l()},a.st.fadeinLoadedSlide?300:0)});
a.ev.on("rsAfterSlideChange",function(){l()})},_v4:function(j,a){setTimeout(function(){j.css(a)},6)},_u4:function(l){var a=this,b,g,f,d,h,e,m;a._s4=[];l.each(function(l){b=j(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&("top"!==e&&"bottom"!==e&&"right"!==e)&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var n;n="right"===e||"left"===
e?!0:!1;var k;m=!1;a._e?(k=0,h=a._x1):(n?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",m=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",m=!0),h="margin-"+h,m&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,n);g[h]=a._m4(k,n)}if(c=b.attr("data-fade-effect")){if("none"===c.toLowerCase()||"false"===c.toLowerCase())c=!1}else c=a.st.block.fadeEffect;
c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=j.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*l);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,f);a._s4.push(setTimeout(function(b,
d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,l),6>=d.delay?12:d.delay))})}});j.rsModules.animatedBlocks=j.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.2
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,d,e,c=function(c){e=a.slides[a.currSlideId];if(b=e.holder)if((d=b.height())&&void 0!==d)a._c4=d,a._e||!c?a._e1.css("height",d):a._e1.stop(!0,!0).animate({height:d},a.st.transitionSpeed)};a.ev.on("rsMaybeSizeReady.rsAutoHeight",function(a,b){e===b&&c()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&c()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){c(!1);
setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>');a._e&&a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16)},16)});a.ev.on("rsBeforeAnimStart",function(){c(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){c(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){!a._l2&&(!a._r2&&a._a5&&e===a.currSlide)&&a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;!a._f5&&!a._e5&&(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;!a._z&&!a.st.loopRewind&&(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},!a.currSlide.customDelay?a.st.autoPlay.delay:a.currSlide.customDelay))},_d5:function(){!this._f5&&!this._e5&&(this._g5=!1,this._h5&&
(clearTimeout(this._h5),this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,g,c,e;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var h=a.st.deeplinking.change,d="#"+a.st.deeplinking.prefix,f=function(){var a=window.location.hash;return a&&(a=parseInt(a.substring(d.length),10),0<=a)?a-1:-1},j=f();-1!==j&&(a.st.startSlideId=j);h&&(b(window).on("hashchange"+a.ns,function(){if(!g){var b=f();0>b||(b>a.numSlides-1&&(b=a.numSlides-1),a.goTo(b))}}),
a.ev.on("rsBeforeAnimStart",function(){c&&clearTimeout(c);e&&clearTimeout(e)}),a.ev.on("rsAfterSlideChange",function(){c&&clearTimeout(c);e&&clearTimeout(e);e=setTimeout(function(){g=!0;window.location.replace((""+window.location).split("#")[0]+d+(a.currSlideId+1));c=setTimeout(function(){g=!1;c=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){c=e=null;h&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,g){function c(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var e=document,h,d=b.event.special,f=e.documentMode,j="onhashchange"in a&&(f===g||7<f);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;d.hashchange=b.extend(d.hashchange,{setup:function(){if(j)return!1;b(h.start)},teardown:function(){if(j)return!1;b(h.stop)}});var p=function(){var e=c(),d=r(n);e!==n?(q(n=e,d),b(a).trigger("hashchange")):
d!==n&&(location.href=location.href.replace(/#.*/,"")+d);l=setTimeout(p,b.fn.hashchange.delay)},d={},l,n=c(),q=f=function(a){return a},r=f;d.start=function(){l||p()};d.stop=function(){l&&clearTimeout(l);l=g};if(a.attachEvent&&!a.addEventListener&&!j){var k,m;d.start=function(){k||(m=(m=b.fn.hashchange.src)&&m+c(),k=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){m||q(c());p()}).attr("src",m||"javascript:0").insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{"title"===
event.propertyName&&(k.document.title=e.title)}catch(a){}})};d.stop=f;r=function(){return c(k.location.href)};q=function(a,d){var c=k.document,f=b.fn.hashchange.domain;a!==d&&(c.title=e.title,c.open(),f&&c.write('<script>document.domain="'+f+'"\x3c/script>'),c.close(),k.location.hash=a)}}h=d})(jQuery,this);
// jquery.rs.fullscreen v1.0.5
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){a._u5={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""};var b=["webkit","moz","o","ms","khtml"];if(!a.isAndroid)if("undefined"!=typeof document.cancelFullScreen)a._u5.supportsFullScreen=!0;else for(var d=0;d<b.length;d++)if(a._u5.prefix=b[d],"undefined"!=typeof document[a._u5.prefix+"CancelFullScreen"]){a._u5.supportsFullScreen=!0;break}a._u5.supportsFullScreen?(a.nativeFS=!0,a._u5.fullScreenEventName=a._u5.prefix+"fullscreenchange"+a.ns,a._u5.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;
default:return document[this.prefix+"FullScreen"]}},a._u5.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},a._u5.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},
enterFullscreen:function(a){var b=this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");
c("body, html").css({overflow:"hidden",height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=
!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=
a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a){var b=
!a.isLoaded&&!a.isLoading?'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>':'<img class="rsImg rsMainSlideImage" src="'+a.image+'"/>';a.content.hasClass("rsImg")?a.content=c(b):a.content.find(".rsImg").eq(0).replaceWith(b);!a.isLoaded&&(!a.isLoading&&a.holder)&&a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(!a.st.globalCaptionInside?a.slider:a._e1);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function(b){b.extend(b.rsProto,{_e6:function(){var a=this;if(a.st.navAutoHide&&!a.hasTouch)a.ev.one("rsAfterInit",function(){if(a._k5){a._k5.addClass("rsHidden");var b=a.slider;b.one("mousemove.controlnav",function(){a._k5.removeClass("rsHidden")});b.hover(function(){a._k5.removeClass("rsHidden")},function(){a._k5.addClass("rsHidden")})}})}});b.rsModules.autoHideNav=b.rsProto._e6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.thumbnails v1.0.5
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,c,b){c=f(c);b.thumbnail=c.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=f(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=c.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=c.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,c,b){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+c.thumbnail+"</div>";b>=a.numSlides?a._s3.append(e):a._l5.eq(b).before(e);a._l5=a._s3.children();a.updateThumbsSize()}),a.ev.on("rsOnRemoveSlide",function(e,c){var b=a._l5.eq(c);b&&(b.remove(),a._l5=a._s3.children(),a.updateThumbsSize())}))},_k6:function(){var a=this,e="rsThumbs",c=a.st.thumbs,
b="",g,d,h=c.spacing;a._j5=!0;a._e3="vertical"===c.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=c.arrows&&c.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);b+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=c.appendSpan?'<span class="thumbIco"></span>':"";for(var j=0;j<a.numSlides;j++)d=a.slides[j],b+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+
"</div>";b=f(b+"</div></div>");g={};c.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=c.paddingTop);c.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=c.paddingBottom);b.css(g);a._s3=f(b).find("."+e+"Container");a._q6&&(e+="Arrow",c.arrowLeft?a._r6=c.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),b.append(a._r6)),c.arrowRight?a._s6=c.arrowRight:(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),b.append(a._s6)),a._r6.click(function(){var b=
(Math.floor(a._i3/a._t6)+a._u6)*a._t6;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6;a._a4(b<a._o3?a._o3:b)}),c.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),b.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),b.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=b;a._l5=a._s3.children();
a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(b);a._w3=!0;a._v6=h;c.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)})},updateThumbsSize:function(){var a=this,e=a._l5.first(),c={},b=a._l5.length;a._t6=(a._e3?e.outerWidth():
e.outerHeight())+a._v6;a._y3=b*a._t6-a._v6;c[a._e3?"width":"height"]=a._y3+a._v6;a._z3=a._e3?a._k5.width():a._k5.height();a._o3=-(a._y3-a._z3)-a.st.thumbs.firstMargin;a._n3=a.st.thumbs.firstMargin;a._u6=Math.floor(a._z3/a._t6);if(a._y3<a._z3)a.st.thumbs.autoCenter&&a._q3((a._z3-a._y3)/2),a.st.thumbs.arrows&&a._r6&&(a._r6.addClass("rsThumbsArrowDisabled"),a._s6.addClass("rsThumbsArrowDisabled")),a._l6=!1,a._m5=!1,a._k5.off(a._j1);else if(a.st.thumbs.navigation&&!a._l6&&(a._l6=!0,!a.hasTouch&&a.st.thumbs.drag||
a.hasTouch&&a.st.thumbs.touch))a._m5=!0,a._k5.on(a._j1,function(b){a._g2(b,!0)});a._e&&(c[a._g+"transition-duration"]="0ms");a._s3.css(c);if(a._w3&&(a.isFullscreen||a.st.thumbs.fitInViewport))a._e3?a._c4=a._w6-a._k5.outerHeight():a._b4=a._w6-a._k5.outerWidth()},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=
a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,c,b,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),c=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=c?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,
e,c?"easeOutCubic":d.st.easeInOut));b&&(d._i3=b);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(b,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var c=0,b,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,
this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(c=1),d=-a+this._u6-2+c,b=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(b=(-a+1)*this._t6+this._n3):b=this._n3,b!==this._i3&&(c=void 0===b?this._i3:b,c>this._n3?this._q3(this._n3):c<this._o3?this._q3(this._o3):void 0!==b&&(e?this._q3(b):this._a4(b))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.video v1.1.1
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=
f.extend({},a._a7,a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var c=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,e,d){b=f(e);if(d.videoURL){a.st.video.disableCSS3inFF&&c&&(a._e=a._f=!1);e=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
b.hasClass("rsImg")?d.content=e.append(b).append(g):d.content.find(".rsImg").wrap(e).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var c=a.currSlide;if(!c.videoURL)return!1;var b=a._d7=c.content,c=c.videoURL,e,d;c.match(/youtu\.be/i)||c.match(/youtube\.com/i)?(d=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(d=c.match(d))&&11==
d[7].length&&(e=d[7]),void 0!==e&&(a._c7=a.st.video.youTubeCode.replace("%id%",e))):c.match(/vimeo\.com/i)&&(d=/(www\.)?vimeo.com\/(\d+)($|\/)/,(d=c.match(d))&&(e=d[2]),void 0!==e&&(a._c7=a.st.video.vimeoCode.replace("%id%",e)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[c]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),
b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._e7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),
a._e7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",[a.videoObj]);var c=a._c7.find("iframe");if(c.length)try{c.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_e7:function(a){var c=[],b=this.st.video;b.autoHideArrows&&(this._c2&&(c.push(this._c2,this._d2),this._e2=!a),this._v5&&c.push(this._v5));b.autoHideControlNav&&this._k5&&c.push(this._k5);b.autoHideBlocks&&this.currSlide.animBlocks&&c.push(this.currSlide.animBlocks);b.autoHideCaption&&
this.globalCaption&&c.push(this.globalCaption);if(c.length)for(b=0;b<c.length;b++)a?c[b].removeClass("rsHidden"):c[b].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._f7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._g7={enabled:!0,centerArea:0.6,center:!0,breakpoint:0,breakpointCenterArea:0.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._g7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._h7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._h7.css("overflow","visible");a._o1=a.st.controlsInside?
a._h7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._h7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._h7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._f7})(jQuery);
;
/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2013 Happyworm Ltd
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Mark J Panaghiston
 * Version: 2.5.0
 * Date: 7th November 2013
 */

(function(b,f){"function"===typeof define&&define.amd?define(["jquery"],f):b.jQuery?f(b.jQuery):f(b.Zepto)})(this,function(b,f){b.fn.jPlayer=function(a){var c="string"===typeof a,d=Array.prototype.slice.call(arguments,1),e=this;a=!c&&d.length?b.extend.apply(null,[!0,a].concat(d)):a;if(c&&"_"===a.charAt(0))return e;c?this.each(function(){var c=b(this).data("jPlayer"),h=c&&b.isFunction(c[a])?c[a].apply(c,d):c;if(h!==c&&h!==f)return e=h,!1}):this.each(function(){var c=b(this).data("jPlayer");c?c.option(a||
{}):b(this).data("jPlayer",new b.jPlayer(a,this))});return e};b.jPlayer=function(a,c){if(arguments.length){this.element=b(c);this.options=b.extend(!0,{},this.options,a);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()});this._init()}};"function"!==typeof b.fn.stop&&(b.fn.stop=function(){});b.jPlayer.emulateMethods="load play pause";b.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate";b.jPlayer.emulateOptions="muted volume";b.jPlayer.reservedEvent=
"ready flashreset resize repeat error warning";b.jPlayer.event={};b.each("ready flashreset resize repeat click error warning loadstart progress suspend abort emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange".split(" "),function(){b.jPlayer.event[this]="jPlayer_"+this});b.jPlayer.htmlEvent="loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough".split(" ");b.jPlayer.pause=
function(){b.each(b.jPlayer.prototype.instances,function(a,c){c.data("jPlayer").status.srcSet&&c.jPlayer("pause")})};b.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""};var m=function(){this.init()};m.prototype={init:function(){this.options={timeFormat:b.jPlayer.timeFormat}},time:function(a){var c=new Date(1E3*(a&&"number"===typeof a?a:0)),b=c.getUTCHours();a=this.options.timeFormat.showHour?c.getUTCMinutes():c.getUTCMinutes()+60*
b;c=this.options.timeFormat.showMin?c.getUTCSeconds():c.getUTCSeconds()+60*a;b=this.options.timeFormat.padHour&&10>b?"0"+b:b;a=this.options.timeFormat.padMin&&10>a?"0"+a:a;c=this.options.timeFormat.padSec&&10>c?"0"+c:c;b=""+(this.options.timeFormat.showHour?b+this.options.timeFormat.sepHour:"");b+=this.options.timeFormat.showMin?a+this.options.timeFormat.sepMin:"";return b+=this.options.timeFormat.showSec?c+this.options.timeFormat.sepSec:""}};var n=new m;b.jPlayer.convertTime=function(a){return n.time(a)};
b.jPlayer.uaBrowser=function(a){a=a.toLowerCase();var c=/(opera)(?:.*version)?[ \/]([\w.]+)/,b=/(msie) ([\w.]+)/,e=/(mozilla)(?:.*? rv:([\w.]+))?/;a=/(webkit)[ \/]([\w.]+)/.exec(a)||c.exec(a)||b.exec(a)||0>a.indexOf("compatible")&&e.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}};b.jPlayer.uaPlatform=function(a){var c=a.toLowerCase(),b=/(android)/,e=/(mobile)/;a=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(c)||[];c=/(ipad|playbook)/.exec(c)||!e.exec(c)&&b.exec(c)||
[];a[1]&&(a[1]=a[1].replace(/\s/g,"_"));return{platform:a[1]||"",tablet:c[1]||""}};b.jPlayer.browser={};b.jPlayer.platform={};var k=b.jPlayer.uaBrowser(navigator.userAgent);k.browser&&(b.jPlayer.browser[k.browser]=!0,b.jPlayer.browser.version=k.version);k=b.jPlayer.uaPlatform(navigator.userAgent);k.platform&&(b.jPlayer.platform[k.platform]=!0,b.jPlayer.platform.mobile=!k.tablet,b.jPlayer.platform.tablet=!!k.tablet);b.jPlayer.getDocMode=function(){var a;b.jPlayer.browser.msie&&(document.documentMode?
a=document.documentMode:(a=5,document.compatMode&&"CSS1Compat"===document.compatMode&&(a=7)));return a};b.jPlayer.browser.documentMode=b.jPlayer.getDocMode();b.jPlayer.nativeFeatures={init:function(){var a=document,c=a.createElement("video"),b={w3c:"fullscreenEnabled fullscreenElement requestFullscreen exitFullscreen fullscreenchange fullscreenerror".split(" "),moz:"mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "),
webkit:" webkitCurrentFullScreenElement webkitRequestFullScreen webkitCancelFullScreen webkitfullscreenchange ".split(" "),webkitVideo:"webkitSupportsFullscreen webkitDisplayingFullscreen webkitEnterFullscreen webkitExitFullscreen  ".split(" ")},e=["w3c","moz","webkit","webkitVideo"],g,h;this.fullscreen=c={support:{w3c:!!a[b.w3c[0]],moz:!!a[b.moz[0]],webkit:"function"===typeof a[b.webkit[3]],webkitVideo:"function"===typeof c[b.webkitVideo[2]]},used:{}};g=0;for(h=e.length;g<h;g++){var f=e[g];if(c.support[f]){c.spec=
f;c.used[f]=!0;break}}if(c.spec){var l=b[c.spec];c.api={fullscreenEnabled:!0,fullscreenElement:function(c){c=c?c:a;return c[l[1]]},requestFullscreen:function(a){return a[l[2]]()},exitFullscreen:function(c){c=c?c:a;return c[l[3]]()}};c.event={fullscreenchange:l[4],fullscreenerror:l[5]}}else c.api={fullscreenEnabled:!1,fullscreenElement:function(){return null},requestFullscreen:function(){},exitFullscreen:function(){}},c.event={}}};b.jPlayer.nativeFeatures.init();b.jPlayer.focus=null;b.jPlayer.keyIgnoreElementNames=
"INPUT TEXTAREA";var p=function(a){var c=b.jPlayer.focus,d;c&&(b.each(b.jPlayer.keyIgnoreElementNames.split(/\s+/g),function(c,b){if(a.target.nodeName.toUpperCase()===b.toUpperCase())return d=!0,!1}),d||b.each(c.options.keyBindings,function(d,g){if(g&&a.which===g.key&&b.isFunction(g.fn))return a.preventDefault(),g.fn(c),!1}))};b.jPlayer.keys=function(a){b(document.documentElement).unbind("keydown.jPlayer");a&&b(document.documentElement).bind("keydown.jPlayer",p)};b.jPlayer.keys(!0);b.jPlayer.prototype=
{count:0,version:{script:"2.5.0",needFlash:"2.5.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",preload:"metadata",volume:0.8,muted:!1,playbackRate:1,defaultPlaybackRate:1,minPlaybackRate:0.5,maxPlaybackRate:4,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",
volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",playbackRateBar:".jp-playback-rate-bar",playbackRateBarValue:".jp-playback-rate-bar-value",currentTime:".jp-current-time",duration:".jp-duration",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},smoothPlayBar:!1,fullScreen:!1,fullWindow:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1E3},loop:!1,repeat:function(a){a.jPlayer.options.loop?
b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){b(this).jPlayer("play")}):b(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},noFullWindow:{msie:/msie [0-6]\./,ipad:/ipad.*?os [0-4]\./,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3]\.(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,
android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,iemobile:/iemobile/,webos:/webos/,playbook:/playbook/},timeFormat:{},keyEnabled:!1,audioFullScreen:!1,keyBindings:{play:{key:32,fn:function(a){a.status.paused?a.play():a.pause()}},fullScreen:{key:13,fn:function(a){(a.status.video||a.options.audioFullScreen)&&a._setOption("fullScreen",!a.options.fullScreen)}},muted:{key:8,fn:function(a){a._muted(!a.options.muted)}},volumeUp:{key:38,fn:function(a){a.volume(a.options.volume+
0.1)}},volumeDown:{key:40,fn:function(a){a.volume(a.options.volume-0.1)}}},verticalVolume:!1,verticalPlaybackRate:!1,globalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,consoleAlerts:!0,errorAlerts:!1,warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",
media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,videoWidth:0,videoHeight:0,readyState:0,networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,flash:!0},format:{mp3:{codec:'audio/mpeg; codecs="mp3"',flashCanPlay:!1,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!1,media:"audio"},m3u8a:{codec:'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
flashCanPlay:!1,media:"audio"},m3ua:{codec:"audio/mpegurl",flashCanPlay:!1,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis, opus"',flashCanPlay:!1,media:"audio"},flac:{codec:"audio/x-flac",flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!1,media:"audio"},rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!1,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
flashCanPlay:!1,media:"video"},m3u8v:{codec:'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!1,media:"video"},m3uv:{codec:"audio/mpegurl",flashCanPlay:!1,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!1,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!1,media:"video"}},_init:function(){var a=
this;this.element.empty();this.status=b.extend({},this.status);this.internal=b.extend({},this.internal);this.options.timeFormat=b.extend({},b.jPlayer.timeFormat,this.options.timeFormat);this.internal.cmdsIgnored=b.jPlayer.platform.ipad||b.jPlayer.platform.iphone||b.jPlayer.platform.ipod;this.internal.domNode=this.element.get(0);this.options.keyEnabled&&!b.jPlayer.focus&&(b.jPlayer.focus=this);this.formats=[];this.solutions=[];this.require={};this.htmlElement={};this.html={};this.html.audio={};this.html.video=
{};this.flash={};this.css={};this.css.cs={};this.css.jq={};this.ancestorJq=[];this.options.volume=this._limitValue(this.options.volume,0,1);b.each(this.options.supplied.toLowerCase().split(","),function(c,d){var e=d.replace(/^\s+|\s+$/g,"");if(a.format[e]){var f=!1;b.each(a.formats,function(a,c){if(e===c)return f=!0,!1});f||a.formats.push(e)}});b.each(this.options.solution.toLowerCase().split(","),function(c,d){var e=d.replace(/^\s+|\s+$/g,"");if(a.solution[e]){var f=!1;b.each(a.solutions,function(a,
c){if(e===c)return f=!0,!1});f||a.solutions.push(e)}});this.internal.instance="jp_"+this.count;this.instances[this.internal.instance]=this.element;this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count);this.internal.self=b.extend({},{id:this.element.attr("id"),jq:this.element});this.internal.audio=b.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:f});this.internal.video=b.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:f});this.internal.flash=
b.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:f,swf:this.options.swfPath+(".swf"!==this.options.swfPath.toLowerCase().slice(-4)?(this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"Jplayer.swf":"")});this.internal.poster=b.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:f});b.each(b.jPlayer.event,function(c,b){a.options[c]!==f&&(a.element.bind(b+".jPlayer",a.options[c]),a.options[c]=f)});this.require.audio=!1;this.require.video=!1;b.each(this.formats,function(c,
b){a.require[a.format[b].media]=!0});this.options=this.require.video?b.extend(!0,{},this.optionsVideo,this.options):b.extend(!0,{},this.optionsAudio,this.options);this._setSize();this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow);this.status.noVolume=this._uaBlocklist(this.options.noVolume);b.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled&&this._fullscreenAddEventListeners();this._restrictNativeVideoControls();
this.htmlElement.poster=document.createElement("img");this.htmlElement.poster.id=this.internal.poster.id;this.htmlElement.poster.onload=function(){a.status.video&&!a.status.waitForPlay||a.internal.poster.jq.show()};this.element.append(this.htmlElement.poster);this.internal.poster.jq=b("#"+this.internal.poster.id);this.internal.poster.jq.css({width:this.status.width,height:this.status.height});this.internal.poster.jq.hide();this.internal.poster.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)});
this.html.audio.available=!1;this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio));this.html.video.available=!1;this.require.video&&(this.htmlElement.video=document.createElement("video"),this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video));
this.flash.available=this._checkForFlash(10.1);this.html.canPlay={};this.flash.canPlay={};b.each(this.formats,function(c,b){a.html.canPlay[b]=a.html[a.format[b].media].available&&""!==a.htmlElement[a.format[b].media].canPlayType(a.format[b].codec);a.flash.canPlay[b]=a.format[b].flashCanPlay&&a.flash.available});this.html.desired=!1;this.flash.desired=!1;b.each(this.solutions,function(c,d){if(0===c)a[d].desired=!0;else{var e=!1,f=!1;b.each(a.formats,function(c,b){a[a.solutions[0]].canPlay[b]&&("video"===
a.format[b].media?f=!0:e=!0)});a[d].desired=a.require.audio&&!e||a.require.video&&!f}});this.html.support={};this.flash.support={};b.each(this.formats,function(c,b){a.html.support[b]=a.html.canPlay[b]&&a.html.desired;a.flash.support[b]=a.flash.canPlay[b]&&a.flash.desired});this.html.used=!1;this.flash.used=!1;b.each(this.solutions,function(c,d){b.each(a.formats,function(c,b){if(a[d].support[b])return a[d].used=!0,!1})});this._resetActive();this._resetGate();this._cssSelectorAncestor(this.options.cssSelectorAncestor);
this.html.used||this.flash.used?this.css.jq.noSolution.length&&this.css.jq.noSolution.hide():(this._error({type:b.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SOLUTION,hint:b.jPlayer.errorHint.NO_SOLUTION}),this.css.jq.noSolution.length&&this.css.jq.noSolution.show());if(this.flash.used){var c,d="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+
"&muted="+this.options.muted;if(b.jPlayer.browser.msie&&(9>Number(b.jPlayer.browser.version)||9>b.jPlayer.browser.documentMode)){d=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+d+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+'" />'];c=document.createElement('<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
for(var e=0;e<d.length;e++)c.appendChild(document.createElement(d[e]))}else e=function(a,c,b){var d=document.createElement("param");d.setAttribute("name",c);d.setAttribute("value",b);a.appendChild(d)},c=document.createElement("object"),c.setAttribute("id",this.internal.flash.id),c.setAttribute("name",this.internal.flash.id),c.setAttribute("data",this.internal.flash.swf),c.setAttribute("type","application/x-shockwave-flash"),c.setAttribute("width","1"),c.setAttribute("height","1"),c.setAttribute("tabindex",
"-1"),e(c,"flashvars",d),e(c,"allowscriptaccess","always"),e(c,"bgcolor",this.options.backgroundColor),e(c,"wmode",this.options.wmode);this.element.append(c);this.internal.flash.jq=b(c)}this.status.playbackRateEnabled=this.html.used&&!this.flash.used?this._testPlaybackRate("audio"):!1;this._updatePlaybackRate();this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=b("#"+this.internal.audio.id)),
this.html.video.available&&(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=b("#"+this.internal.video.id),this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):this.internal.video.jq.css({width:"0px",height:"0px"}),this.internal.video.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)})));this.options.emulateHtml&&this._emulateHtmlBridge();
this.html.used&&!this.flash.used&&setTimeout(function(){a.internal.ready=!0;a.version.flash="n/a";a._trigger(b.jPlayer.event.repeat);a._trigger(b.jPlayer.event.ready)},100);this._updateNativeVideoControls();this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();b.jPlayer.prototype.count++},destroy:function(){this.clearMedia();this._removeUiClass();this.css.jq.currentTime.length&&this.css.jq.currentTime.text("");this.css.jq.duration.length&&this.css.jq.duration.text("");b.each(this.css.jq,function(a,
c){c.length&&c.unbind(".jPlayer")});this.internal.poster.jq.unbind(".jPlayer");this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer");this._fullscreenRemoveEventListeners();this===b.jPlayer.focus&&(b.jPlayer.focus=null);this.options.emulateHtml&&this._destroyHtmlBridge();this.element.removeData("jPlayer");this.element.unbind(".jPlayer");this.element.empty();delete this.instances[this.internal.instance]},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{return a.canPlayType(this.format.mp3.codec),
!0}catch(c){return!1}},_testPlaybackRate:function(a){a=document.createElement("string"===typeof a?a:"audio");try{return"playbackRate"in a?(a.playbackRate=0.5,0.5===a.playbackRate):!1}catch(c){return!1}},_uaBlocklist:function(a){var c=navigator.userAgent.toLowerCase(),d=!1;b.each(a,function(a,b){if(b&&b.test(c))return d=!0,!1});return d},_restrictNativeVideoControls:function(){this.require.audio&&this.status.nativeVideoControls&&(this.status.nativeVideoControls=!1,this.status.noFullWindow=!0)},_updateNativeVideoControls:function(){this.html.video.available&&
this.html.used&&(this.htmlElement.video.controls=this.status.nativeVideoControls,this._updateAutohide(),this.status.nativeVideoControls&&this.require.video?(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})):this.status.waitForPlay&&this.status.video&&(this.internal.poster.jq.show(),this.internal.video.jq.css({width:"0px",height:"0px"})))},_addHtmlEventListeners:function(a,c){var d=this;a.preload=this.options.preload;a.muted=this.options.muted;
a.volume=this.options.volume;this.status.playbackRateEnabled&&(a.defaultPlaybackRate=this.options.defaultPlaybackRate,a.playbackRate=this.options.playbackRate);a.addEventListener("progress",function(){c.gate&&(d.internal.cmdsIgnored&&0<this.readyState&&(d.internal.cmdsIgnored=!1),d._getHtmlStatus(a),d._updateInterface(),d._trigger(b.jPlayer.event.progress))},!1);a.addEventListener("timeupdate",function(){c.gate&&(d._getHtmlStatus(a),d._updateInterface(),d._trigger(b.jPlayer.event.timeupdate))},!1);
a.addEventListener("durationchange",function(){c.gate&&(d._getHtmlStatus(a),d._updateInterface(),d._trigger(b.jPlayer.event.durationchange))},!1);a.addEventListener("play",function(){c.gate&&(d._updateButtons(!0),d._html_checkWaitForPlay(),d._trigger(b.jPlayer.event.play))},!1);a.addEventListener("playing",function(){c.gate&&(d._updateButtons(!0),d._seeked(),d._trigger(b.jPlayer.event.playing))},!1);a.addEventListener("pause",function(){c.gate&&(d._updateButtons(!1),d._trigger(b.jPlayer.event.pause))},
!1);a.addEventListener("waiting",function(){c.gate&&(d._seeking(),d._trigger(b.jPlayer.event.waiting))},!1);a.addEventListener("seeking",function(){c.gate&&(d._seeking(),d._trigger(b.jPlayer.event.seeking))},!1);a.addEventListener("seeked",function(){c.gate&&(d._seeked(),d._trigger(b.jPlayer.event.seeked))},!1);a.addEventListener("volumechange",function(){c.gate&&(d.options.volume=a.volume,d.options.muted=a.muted,d._updateMute(),d._updateVolume(),d._trigger(b.jPlayer.event.volumechange))},!1);a.addEventListener("ratechange",
function(){c.gate&&(d.options.defaultPlaybackRate=a.defaultPlaybackRate,d.options.playbackRate=a.playbackRate,d._updatePlaybackRate(),d._trigger(b.jPlayer.event.ratechange))},!1);a.addEventListener("suspend",function(){c.gate&&(d._seeked(),d._trigger(b.jPlayer.event.suspend))},!1);a.addEventListener("ended",function(){c.gate&&(b.jPlayer.browser.webkit||(d.htmlElement.media.currentTime=0),d.htmlElement.media.pause(),d._updateButtons(!1),d._getHtmlStatus(a,!0),d._updateInterface(),d._trigger(b.jPlayer.event.ended))},
!1);a.addEventListener("error",function(){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(clearTimeout(d.internal.htmlDlyCmdId),d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:b.jPlayer.error.URL,context:d.status.src,message:b.jPlayer.errorMsg.URL,
hint:b.jPlayer.errorHint.URL})))},!1);b.each(b.jPlayer.htmlEvent,function(e,g){a.addEventListener(this,function(){c.gate&&d._trigger(b.jPlayer.event[g])},!1)})},_getHtmlStatus:function(a,c){var b=0,e=0,g=0,f=0;isFinite(a.duration)&&(this.status.duration=a.duration);b=a.currentTime;e=0<this.status.duration?100*b/this.status.duration:0;"object"===typeof a.seekable&&0<a.seekable.length?(g=0<this.status.duration?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100,f=0<this.status.duration?
100*a.currentTime/a.seekable.end(a.seekable.length-1):0):(g=100,f=e);c&&(e=f=b=0);this.status.seekPercent=g;this.status.currentPercentRelative=f;this.status.currentPercentAbsolute=e;this.status.currentTime=b;this.status.videoWidth=a.videoWidth;this.status.videoHeight=a.videoHeight;this.status.readyState=a.readyState;this.status.networkState=a.networkState;this.status.playbackRate=a.playbackRate;this.status.ended=a.ended},_resetStatus:function(){this.status=b.extend({},this.status,b.jPlayer.prototype.status)},
_trigger:function(a,c,d){a=b.Event(a);a.jPlayer={};a.jPlayer.version=b.extend({},this.version);a.jPlayer.options=b.extend(!0,{},this.options);a.jPlayer.status=b.extend(!0,{},this.status);a.jPlayer.html=b.extend(!0,{},this.html);a.jPlayer.flash=b.extend(!0,{},this.flash);c&&(a.jPlayer.error=b.extend({},c));d&&(a.jPlayer.warning=b.extend({},d));this.element.trigger(a)},jPlayerFlashEvent:function(a,c){if(a===b.jPlayer.event.ready)if(!this.internal.ready)this.internal.ready=!0,this.internal.flash.jq.css({width:"0px",
height:"0px"}),this.version.flash=c.version,this.version.needFlash!==this.version.flash&&this._error({type:b.jPlayer.error.VERSION,context:this.version.flash,message:b.jPlayer.errorMsg.VERSION+this.version.flash,hint:b.jPlayer.errorHint.VERSION}),this._trigger(b.jPlayer.event.repeat),this._trigger(a);else if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media);this.volumeWorker(this.options.volume);0<d&&(e?this.pause(d):this.play(d))}this._trigger(b.jPlayer.event.flashreset)}if(this.flash.gate)switch(a){case b.jPlayer.event.progress:this._getFlashStatus(c);
this._updateInterface();this._trigger(a);break;case b.jPlayer.event.timeupdate:this._getFlashStatus(c);this._updateInterface();this._trigger(a);break;case b.jPlayer.event.play:this._seeked();this._updateButtons(!0);this._trigger(a);break;case b.jPlayer.event.pause:this._updateButtons(!1);this._trigger(a);break;case b.jPlayer.event.ended:this._updateButtons(!1);this._trigger(a);break;case b.jPlayer.event.click:this._trigger(a);break;case b.jPlayer.event.error:this.status.waitForLoad=!0;this.status.waitForPlay=
!0;this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"});this._validString(this.status.media.poster)&&this.internal.poster.jq.show();this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show();this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media);this._updateButtons(!1);this._error({type:b.jPlayer.error.URL,context:c.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL});break;case b.jPlayer.event.seeking:this._seeking();
this._trigger(a);break;case b.jPlayer.event.seeked:this._seeked();this._trigger(a);break;case b.jPlayer.event.ready:break;default:this._trigger(a)}return!1},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent;this.status.currentPercentRelative=a.currentPercentRelative;this.status.currentPercentAbsolute=a.currentPercentAbsolute;this.status.currentTime=a.currentTime;this.status.duration=a.duration;this.status.videoWidth=a.videoWidth;this.status.videoHeight=a.videoHeight;this.status.readyState=
4;this.status.networkState=0;this.status.playbackRate=1;this.status.ended=!1},_updateButtons:function(a){a===f?a=!this.status.paused:this.status.paused=!a;this.css.jq.play.length&&this.css.jq.pause.length&&(a?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide()));this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length&&(this.status.noFullWindow?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.hide()):this.options.fullWindow?(this.css.jq.fullScreen.hide(),
this.css.jq.restoreScreen.show()):(this.css.jq.fullScreen.show(),this.css.jq.restoreScreen.hide()));this.css.jq.repeat.length&&this.css.jq.repeatOff.length&&(this.options.loop?(this.css.jq.repeat.hide(),this.css.jq.repeatOff.show()):(this.css.jq.repeat.show(),this.css.jq.repeatOff.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%");this.css.jq.playBar.length&&(this.options.smoothPlayBar?this.css.jq.playBar.stop().animate({width:this.status.currentPercentAbsolute+
"%"},250,"linear"):this.css.jq.playBar.width(this.status.currentPercentRelative+"%"));this.css.jq.currentTime.length&&this.css.jq.currentTime.text(this._convertTime(this.status.currentTime));this.css.jq.duration.length&&this.css.jq.duration.text(this._convertTime(this.status.duration))},_convertTime:m.prototype.time,_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg")},
_resetGate:function(){this.html.audio.gate=!1;this.html.video.gate=!1;this.flash.gate=!1},_resetActive:function(){this.html.active=!1;this.flash.active=!1},_escapeHtml:function(a){return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")},_qualifyURL:function(a){var c=document.createElement("div");c.innerHTML='<a href="'+this._escapeHtml(a)+'">x</a>';return c.firstChild.href},_absoluteMediaUrls:function(a){var c=this;b.each(a,function(b,e){c.format[b]&&
(a[b]=c._qualifyURL(e))});return a},setMedia:function(a){var c=this,d=!1,e=this.status.media.poster!==a.poster;this._resetMedia();this._resetGate();this._resetActive();a=this._absoluteMediaUrls(a);b.each(this.formats,function(e,f){var k="video"===c.format[f].media;b.each(c.solutions,function(b,e){if(c[e].support[f]&&c._validString(a[f])){var g="html"===e;k?(g?(c.html.video.gate=!0,c._html_setVideo(a),c.html.active=!0):(c.flash.gate=!0,c._flash_setVideo(a),c.flash.active=!0),c.css.jq.videoPlay.length&&
c.css.jq.videoPlay.show(),c.status.video=!0):(g?(c.html.audio.gate=!0,c._html_setAudio(a),c.html.active=!0):(c.flash.gate=!0,c._flash_setAudio(a),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.hide(),c.status.video=!1);d=!0;return!1}});if(d)return!1});d?(this.status.nativeVideoControls&&this.html.video.gate||!this._validString(a.poster)||(e?this.htmlElement.poster.src=a.poster:this.internal.poster.jq.show()),this.status.srcSet=!0,this.status.media=b.extend({},a),this._updateButtons(!1),
this._updateInterface()):this._error({type:b.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SUPPORT,hint:b.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus();this._updateButtons(!1);this._updateInterface();this._seeked();this.internal.poster.jq.hide();clearTimeout(this.internal.htmlDlyCmdId);this.html.active?this._html_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia();
this.html.active?this._html_clearMedia():this.flash.active&&this._flash_clearMedia();this._resetGate();this._resetActive()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},focus:function(){this.options.keyEnabled&&(b.jPlayer.focus=this)},play:function(a){a="number"===typeof a?a:NaN;this.status.srcSet?(this.focus(),this.html.active?this._html_play(a):this.flash.active&&this._flash_play(a)):this._urlNotSetError("play")},
videoPlay:function(){this.play()},pause:function(a){a="number"===typeof a?a:NaN;this.status.srcSet?this.html.active?this._html_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},tellOthers:function(a,c){var d=this,e="function"===typeof c,g=Array.prototype.slice.call(arguments);"string"===typeof a&&(e&&g.splice(1,1),b.each(this.instances,function(){d.element!==this&&(e&&!c.call(this.data("jPlayer"),d)||this.jPlayer.apply(this,g))}))},pauseOthers:function(a){this.tellOthers("pause",
function(){return this.status.srcSet},a)},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100);this.status.srcSet?this.html.active?this._html_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.mutedWorker(a);this.options.globalVolume&&this.tellOthers("mutedWorker",function(){return this.options.globalVolume},
a)},mutedWorker:function(a){this.options.muted=a;this.html.used&&this._html_setProperty("muted",a);this.flash.used&&this._flash_mute(a);this.html.video.gate||this.html.audio.gate||(this._updateMute(a),this._updateVolume(this.options.volume),this._trigger(b.jPlayer.event.volumechange))},mute:function(a){a=a===f?!0:!!a;this._muted(a)},unmute:function(a){a=a===f?!0:!!a;this._muted(!a)},_updateMute:function(a){a===f&&(a=this.options.muted);this.css.jq.mute.length&&this.css.jq.unmute.length&&(this.status.noVolume?
(this.css.jq.mute.hide(),this.css.jq.unmute.hide()):a?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(a){this.volumeWorker(a);this.options.globalVolume&&this.tellOthers("volumeWorker",function(){return this.options.globalVolume},a)},volumeWorker:function(a){a=this._limitValue(a,0,1);this.options.volume=a;this.html.used&&this._html_setProperty("volume",a);this.flash.used&&this._flash_volume(a);this.html.video.gate||this.html.audio.gate||
(this._updateVolume(a),this._trigger(b.jPlayer.event.volumechange))},volumeBar:function(a){if(this.css.jq.volumeBar.length){var c=b(a.currentTarget),d=c.offset(),e=a.pageX-d.left,g=c.width();a=c.height()-a.pageY+d.top;c=c.height();this.options.verticalVolume?this.volume(a/c):this.volume(e/g)}this.options.muted&&this._muted(!1)},volumeBarValue:function(){},_updateVolume:function(a){a===f&&(a=this.options.volume);a=this.options.muted?0:a;this.status.noVolume?(this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide(),
this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide(),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()):(this.css.jq.volumeBar.length&&this.css.jq.volumeBar.show(),this.css.jq.volumeBarValue.length&&(this.css.jq.volumeBarValue.show(),this.css.jq.volumeBarValue[this.options.verticalVolume?"height":"width"](100*a+"%")),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show())},volumeMax:function(){this.volume(1);this.options.muted&&this._muted(!1)},_cssSelectorAncestor:function(a){var c=
this;this.options.cssSelectorAncestor=a;this._removeUiClass();this.ancestorJq=a?b(a):[];a&&1!==this.ancestorJq.length&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT});this._addUiClass();b.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)});this._updateInterface();this._updateButtons();this._updateAutohide();this._updateVolume();
this._updateMute()},_cssSelector:function(a,c){var d=this;"string"===typeof c?b.jPlayer.prototype.options.cssSelector[a]?(this.css.jq[a]&&this.css.jq[a].length&&this.css.jq[a].unbind(".jPlayer"),this.options.cssSelector[a]=c,this.css.cs[a]=this.options.cssSelectorAncestor+" "+c,this.css.jq[a]=c?b(this.css.cs[a]):[],this.css.jq[a].length&&this.css.jq[a].bind("click.jPlayer",function(c){c.preventDefault();d[a](c);b(this).blur()}),c&&1!==this.css.jq[a].length&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,
context:this.css.cs[a],message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[a].length+" found for "+a+" method.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT})):this._warning({type:b.jPlayer.warning.CSS_SELECTOR_METHOD,context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:b.jPlayer.warningHint.CSS_SELECTOR_METHOD}):this._warning({type:b.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:b.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:b.jPlayer.warningHint.CSS_SELECTOR_STRING})},
seekBar:function(a){if(this.css.jq.seekBar.length){var c=b(a.currentTarget),d=c.offset();a=a.pageX-d.left;c=c.width();this.playHead(100*a/c)}},playBar:function(){},playbackRate:function(a){this._setOption("playbackRate",a)},playbackRateBar:function(a){if(this.css.jq.playbackRateBar.length){var c=b(a.currentTarget),d=c.offset(),e=a.pageX-d.left,g=c.width();a=c.height()-a.pageY+d.top;c=c.height();this.playbackRate((this.options.verticalPlaybackRate?a/c:e/g)*(this.options.maxPlaybackRate-this.options.minPlaybackRate)+
this.options.minPlaybackRate)}},playbackRateBarValue:function(){},_updatePlaybackRate:function(){var a=(this.options.playbackRate-this.options.minPlaybackRate)/(this.options.maxPlaybackRate-this.options.minPlaybackRate);this.status.playbackRateEnabled?(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.show(),this.css.jq.playbackRateBarValue.length&&(this.css.jq.playbackRateBarValue.show(),this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate?"height":"width"](100*a+"%"))):
(this.css.jq.playbackRateBar.length&&this.css.jq.playbackRateBar.hide(),this.css.jq.playbackRateBarValue.length&&this.css.jq.playbackRateBarValue.hide())},repeat:function(){this._loop(!0)},repeatOff:function(){this._loop(!1)},_loop:function(a){this.options.loop!==a&&(this.options.loop=a,this._updateButtons(),this._trigger(b.jPlayer.event.repeat))},currentTime:function(){},duration:function(){},gui:function(){},noSolution:function(){},option:function(a,c){var d=a;if(0===arguments.length)return b.extend(!0,
{},this.options);if("string"===typeof a){var e=a.split(".");if(c===f){for(var d=b.extend(!0,{},this.options),g=0;g<e.length;g++)if(d[e[g]]!==f)d=d[e[g]];else return this._warning({type:b.jPlayer.warning.OPTION_KEY,context:a,message:b.jPlayer.warningMsg.OPTION_KEY,hint:b.jPlayer.warningHint.OPTION_KEY}),f;return d}for(var g=d={},h=0;h<e.length;h++)h<e.length-1?(g[e[h]]={},g=g[e[h]]):g[e[h]]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(a,b){c._setOption(a,
b)});return this},_setOption:function(a,c){var d=this;switch(a){case "volume":this.volume(c);break;case "muted":this._muted(c);break;case "globalVolume":this.options[a]=c;break;case "cssSelectorAncestor":this._cssSelectorAncestor(c);break;case "cssSelector":b.each(c,function(a,c){d._cssSelector(a,c)});break;case "playbackRate":this.options[a]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate);this.html.used&&this._html_setProperty("playbackRate",c);this._updatePlaybackRate();
break;case "defaultPlaybackRate":this.options[a]=c=this._limitValue(c,this.options.minPlaybackRate,this.options.maxPlaybackRate);this.html.used&&this._html_setProperty("defaultPlaybackRate",c);this._updatePlaybackRate();break;case "minPlaybackRate":this.options[a]=c=this._limitValue(c,0.1,this.options.maxPlaybackRate-0.1);this._updatePlaybackRate();break;case "maxPlaybackRate":this.options[a]=c=this._limitValue(c,this.options.minPlaybackRate+0.1,16);this._updatePlaybackRate();break;case "fullScreen":if(this.options[a]!==
c){var e=b.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;if(!e||e&&!this.status.waitForPlay)e||(this.options[a]=c),c?this._requestFullscreen():this._exitFullscreen(),e||this._setOption("fullWindow",c)}break;case "fullWindow":this.options[a]!==c&&(this._removeUiClass(),this.options[a]=c,this._refreshSize());break;case "size":this.options.fullWindow||this.options[a].cssClass===c.cssClass||this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "sizeFull":this.options.fullWindow&&
this.options[a].cssClass!==c.cssClass&&this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "autohide":this.options[a]=b.extend({},this.options[a],c);this._updateAutohide();break;case "loop":this._loop(c);break;case "nativeVideoControls":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this._restrictNativeVideoControls();this._updateNativeVideoControls();break;case "noFullWindow":this.options[a]=
b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullWindow=this._uaBlocklist(this.options.noFullWindow);this._restrictNativeVideoControls();this._updateButtons();break;case "noVolume":this.options[a]=b.extend({},this.options[a],c);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._updateVolume();this._updateMute();break;case "emulateHtml":this.options[a]!==c&&((this.options[a]=c)?this._emulateHtmlBridge():
this._destroyHtmlBridge());break;case "timeFormat":this.options[a]=b.extend({},this.options[a],c);break;case "keyEnabled":this.options[a]=c;c||this!==b.jPlayer.focus||(b.jPlayer.focus=null);break;case "keyBindings":this.options[a]=b.extend(!0,{},this.options[a],c);break;case "audioFullScreen":this.options[a]=c}return this},_refreshSize:function(){this._setSize();this._addUiClass();this._updateSize();this._updateButtons();this._updateAutohide();this._trigger(b.jPlayer.event.resize)},_setSize:function(){this.options.fullWindow?
(this.status.width=this.options.sizeFull.width,this.status.height=this.options.sizeFull.height,this.status.cssClass=this.options.sizeFull.cssClass):(this.status.width=this.options.size.width,this.status.height=this.options.size.height,this.status.cssClass=this.options.size.cssClass);this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&this.ancestorJq.removeClass(this.status.cssClass)},
_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height});!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&this.flash.active&&this.status.video&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},_updateAutohide:function(){var a=this,
c=function(){a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId);a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};this.css.jq.gui.length&&(this.css.jq.gui.stop(!0,!0),clearTimeout(this.internal.autohideId),this.element.unbind(".jPlayerAutohide"),this.css.jq.gui.unbind(".jPlayerAutohide"),this.status.nativeVideoControls?this.css.jq.gui.hide():this.options.fullWindow&&this.options.autohide.full||
!this.options.fullWindow&&this.options.autohide.restored?(this.element.bind("mousemove.jPlayer.jPlayerAutohide",c),this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide",c),this.css.jq.gui.hide()):this.css.jq.gui.show())},fullScreen:function(){this._setOption("fullScreen",!0)},restoreScreen:function(){this._setOption("fullScreen",!1)},_fullscreenAddEventListeners:function(){var a=this,c=b.jPlayer.nativeFeatures.fullscreen;c.api.fullscreenEnabled&&c.event.fullscreenchange&&("function"!==typeof this.internal.fullscreenchangeHandler&&
(this.internal.fullscreenchangeHandler=function(){a._fullscreenchange()}),document.addEventListener(c.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1))},_fullscreenRemoveEventListeners:function(){var a=b.jPlayer.nativeFeatures.fullscreen;this.internal.fullscreenchangeHandler&&document.addEventListener(a.event.fullscreenchange,this.internal.fullscreenchangeHandler,!1)},_fullscreenchange:function(){this.options.fullScreen&&!b.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()&&
this._setOption("fullScreen",!1)},_requestFullscreen:function(){var a=this.ancestorJq.length?this.ancestorJq[0]:this.element[0],c=b.jPlayer.nativeFeatures.fullscreen;c.used.webkitVideo&&(a=this.htmlElement.video);c.api.fullscreenEnabled&&c.api.requestFullscreen(a)},_exitFullscreen:function(){var a=b.jPlayer.nativeFeatures.fullscreen,c;a.used.webkitVideo&&(c=this.htmlElement.video);a.api.fullscreenEnabled&&a.api.exitFullscreen(c)},_html_initMedia:function(a){var c=b(this.htmlElement.media).empty();
b.each(a.track||[],function(a,b){var g=document.createElement("track");g.setAttribute("kind",b.kind?b.kind:"");g.setAttribute("src",b.src?b.src:"");g.setAttribute("srclang",b.srclang?b.srclang:"");g.setAttribute("label",b.label?b.label:"");b.def&&g.setAttribute("default",b.def);c.append(g)});this.htmlElement.media.src=this.status.src;"none"!==this.options.preload&&this._html_load();this._trigger(b.jPlayer.event.timeupdate)},_html_setFormat:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&
a[e])return c.status.src=a[e],c.status.format[e]=!0,c.status.formatType=e,!1})},_html_setAudio:function(a){this._html_setFormat(a);this.htmlElement.media=this.htmlElement.audio;this._html_initMedia(a)},_html_setVideo:function(a){this._html_setFormat(a);this.status.nativeVideoControls&&(this.htmlElement.video.poster=this._validString(a.poster)?a.poster:"");this.htmlElement.media=this.htmlElement.video;this._html_initMedia(a)},_html_resetMedia:function(){this.htmlElement.media&&(this.htmlElement.media.id!==
this.internal.video.id||this.status.nativeVideoControls||this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause())},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.src="about:blank",this.htmlElement.media.load())},_html_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.htmlElement.media.load());clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this,d=this.htmlElement.media;this._html_load();if(isNaN(a))d.play();
else{this.internal.cmdsIgnored&&d.play();try{if(!d.seekable||"object"===typeof d.seekable&&0<d.seekable.length)d.currentTime=a,d.play();else throw 1;}catch(e){this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},250);return}}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this,d=this.htmlElement.media;0<a?this._html_load():clearTimeout(this.internal.htmlDlyCmdId);d.pause();if(!isNaN(a))try{if(!d.seekable||"object"===typeof d.seekable&&0<d.seekable.length)d.currentTime=a;else throw 1;
}catch(e){this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},250);return}0<a&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this,d=this.htmlElement.media;this._html_load();try{if("object"===typeof d.seekable&&0<d.seekable.length)d.currentTime=a*d.seekable.end(d.seekable.length-1)/100;else if(0<d.duration&&!isNaN(d.duration))d.currentTime=a*d.duration/100;else throw"e";}catch(e){this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},250);return}this.status.waitForLoad||
this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_setProperty:function(a,b){this.html.audio.available&&(this.htmlElement.audio[a]=b);this.html.video.available&&(this.htmlElement.video[a]=b)},_flash_setAudio:function(a){var c=this;try{b.each(this.formats,
function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4a":case "fla":c._getMovie().fl_setAudio_m4a(a[d]);break;case "mp3":c._getMovie().fl_setAudio_mp3(a[d]);break;case "rtmpa":c._getMovie().fl_setAudio_rtmp(a[d])}c.status.src=a[d];c.status.format[d]=!0;c.status.formatType=d;return!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_setVideo:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&
a[d]){switch(d){case "m4v":case "flv":c._getMovie().fl_setVideo_m4v(a[d]);break;case "rtmpv":c._getMovie().fl_setVideo_rtmp(a[d])}c.status.src=a[d];c.status.format[d]=!0;c.status.formatType=d;return!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"});this._flash_pause(NaN)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},
_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=!1},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=!1;this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}0<a&&(this.status.waitForLoad=!1,this._flash_checkWaitForPlay())},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||
this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},
_getFlashPluginVersion:function(){var a=0,b;if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){var d=b.GetVariable("$version");d&&(d=d.split(" ")[1].split(","),a=parseInt(d[0],10)+"."+parseInt(d[1],10))}}catch(e){}else navigator.plugins&&0<navigator.mimeTypes.length&&(b=navigator.plugins["Shockwave Flash"])&&(a=navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1"));return 1*a},_checkForFlash:function(a){var b=!1;this._getFlashPluginVersion()>=
a&&(b=!0);return b},_validString:function(a){return a&&"string"===typeof a},_limitValue:function(a,b,d){return a<b?b:a>d?d:a},_urlNotSetError:function(a){this._error({type:b.jPlayer.error.URL_NOT_SET,context:a,message:b.jPlayer.errorMsg.URL_NOT_SET,hint:b.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(a){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH";this._error({type:b.jPlayer.error[c],context:this.internal.flash.swf,message:b.jPlayer.errorMsg[c]+a.message,hint:b.jPlayer.errorHint[c]});
this.internal.flash.jq.css({width:"1px",height:"1px"})},_error:function(a){this._trigger(b.jPlayer.event.error,a);this.options.errorAlerts&&this._alert("Error!"+(a.message?"\n"+a.message:"")+(a.hint?"\n"+a.hint:"")+"\nContext: "+a.context)},_warning:function(a){this._trigger(b.jPlayer.event.warning,f,a);this.options.warningAlerts&&this._alert("Warning!"+(a.message?"\n"+a.message:"")+(a.hint?"\n"+a.hint:"")+"\nContext: "+a.context)},_alert:function(a){a="jPlayer "+this.version.script+" : id='"+this.internal.self.id+
"' : "+a;this.options.consoleAlerts?console&&console.log&&console.log(a):alert(a)},_emulateHtmlBridge:function(){var a=this;b.each(b.jPlayer.emulateMethods.split(/\s+/g),function(b,d){a.internal.domNode[d]=function(b){a[d](b)}});b.each(b.jPlayer.event,function(c,d){var e=!0;b.each(b.jPlayer.reservedEvent.split(/\s+/g),function(a,b){if(b===c)return e=!1});e&&a.element.bind(d+".jPlayer.jPlayerHtml",function(){a._emulateHtmlUpdate();var b=document.createEvent("Event");b.initEvent(c,!1,!0);a.internal.domNode.dispatchEvent(b)})})},
_emulateHtmlUpdate:function(){var a=this;b.each(b.jPlayer.emulateStatus.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.status[d]});b.each(b.jPlayer.emulateOptions.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.options[d]})},_destroyHtmlBridge:function(){var a=this;this.element.unbind(".jPlayerHtml");b.each((b.jPlayer.emulateMethods+" "+b.jPlayer.emulateStatus+" "+b.jPlayer.emulateOptions).split(/\s+/g),function(b,d){delete a.internal.domNode[d]})}};b.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",
NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"};b.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",
URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+b.jPlayer.prototype.version.script+" needs Jplayer.swf version "+b.jPlayer.prototype.version.needFlash+" but found "};b.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",
URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."};b.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"};b.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
OPTION_KEY:"The option requested in jPlayer('option') is undefined."};b.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}});;
// from http://www.blangdon.com/writing/about/detect-flash-with-javascript/
function detectflash() {
  if (navigator.plugins != null && navigator.plugins.length > 0) {
    if (navigator.plugins["Shockwave Flash"]) {
      return navigator.plugins["Shockwave Flash"] && true;
    }
  }

  if (~navigator.userAgent.toLowerCase().indexOf("webtv")) {
    return true;
  }

  if (~navigator.appVersion.indexOf("MSIE") && !~navigator.userAgent.indexOf("Opera")) {
    try {
      return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true;
    } catch (e) {}
  }
  return false;
};
/*! iFrame Resizer (iframeSizer.min.js ) - v2.6.2 - 2014-10-11
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!w;a+=1)w=window[b[a]+"RequestAnimationFrame"];w||c(" RequestAnimationFrame not supported")}function c(a){y.log&&"object"==typeof console&&console.log(s+"[Host page"+u+"]"+a)}function d(a){function b(){function a(){h(z),f(),y.resizedCallback(z)}i(a,z,"resetPage")}function d(a){var b=a.id;c(" Removing iFrame: "+b),a.parentNode.removeChild(a),y.closedCallback(b),c(" --")}function e(){var a=x.substr(t).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(a){var b=Number(y["max"+a]),d=Number(y["min"+a]),e=a.toLowerCase(),f=Number(z[e]);if(d>b)throw new Error("Value for min"+a+" can not be greater than max"+a);c(" Checking "+e+" is in range "+d+"-"+b),d>f&&(f=d,c(" Set "+e+" to min value")),f>b&&(f=b,c(" Set "+e+" to max value")),z[e]=""+f}function k(){var b=a.origin,d=z.iframe.src.split("/").slice(0,3).join("/");if(y.checkOrigin&&(c(" Checking connection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpected message received from: "+b+" for "+z.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function l(){return s===(""+x).substr(0,t)}function m(){var a=z.type in{"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function n(){var a=x.substr(x.indexOf(":")+r+6);c(" MessageCallback passed: {iframe: "+z.iframe.id+", message: "+a+"}"),y.messageCallback({iframe:z.iframe,message:a}),c(" --")}function o(){if(null===z.iframe)throw new Error("iFrame ("+z.id+") does not exist on "+u);return!0}function q(){c(" Reposition requested from iFrame"),v={x:z.width,y:z.height},f()}function w(){switch(z.type){case"close":d(z.iframe),y.resizedCallback(z);break;case"message":n();break;case"scrollTo":q();break;case"reset":g(z);break;case"init":b(),y.initCallback(z.iframe);break;default:b()}}var x=a.data,z={};l()&&(c(" Received: "+x),z=e(),j("Height"),j("Width"),!m()&&o()&&k()&&(w(),p=!1))}function e(){null===v&&(v={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+v.x+","+v.y))}function f(){null!==v&&(window.scrollTo(v.x,v.y),c(" Set position: "+v.x+","+v.y),v=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}y.sizeHeight&&b("height"),y.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&w?(c(" Requesting animation frame"),w(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(s+b,"*")}function k(){function b(){function a(a){1/0!==y[a]&&0!==y[a]&&(k.style[a]=y[a]+"px",c(" Set "+a+" = "+y[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(k.id=a="iFrameResizer"+o++,c(" Added missing iframe ID: "+a+" ("+k.src+")")),a}function e(){c(" IFrame scrolling "+(y.scrolling?"enabled":"disabled")+" for "+l),k.style.overflow=!1===y.scrolling?"hidden":"auto",k.scrolling=!1===y.scrolling?"no":"yes"}function f(){("number"==typeof y.bodyMargin||"0"===y.bodyMargin)&&(y.bodyMarginV1=y.bodyMargin,y.bodyMargin=""+y.bodyMargin+"px")}function h(){return l+":"+y.bodyMarginV1+":"+y.sizeWidth+":"+y.log+":"+y.interval+":"+y.enablePublicMethods+":"+y.autoResize+":"+y.bodyMargin+":"+y.heightCalculationMethod+":"+y.bodyBackground+":"+y.bodyPadding+":"+y.tolerance}function i(b){a(k,"load",function(){var a=p;j("iFrame.onload",b,k),!a&&y.heightCalculationMethod in x&&g({iframe:k,height:0,width:0,type:"init"})}),j("init",b,k)}var k=this,l=d(k.id);e(),b(),f(),i(h())}function l(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function m(){function a(a){if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");k.call(a)}function b(a){a=a||{},l(a);for(var b in z)z.hasOwnProperty(b)&&(y[b]=a.hasOwnProperty(b)?a[b]:z[b])}return function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function n(a){a.fn.iFrameResize=function(b){return b=b||{},l(b),y=a.extend({},z,b),this.filter("iframe").each(k).end()}}var o=0,p=!0,q="message",r=q.length,s="[iFrameSizer]",t=s.length,u="",v=null,w=window.requestAnimationFrame,x={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},y={},z={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){}};b(),a(window,"message",d),window.jQuery&&n(jQuery),"function"==typeof define&&define.amd?define(function(){return m()}):window.iFrameResize=m()}();;
!function e(t,n,r){function o(u,c){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!c&&s)return s(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[u]={exports:{}};t[u][0].call(a.exports,function(e){var n=t[u][1][e];return o(n?n:e)},a,a.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,e!==r&&s(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function u(e,t,n){v(function(){var r;try{r=t(n)}catch(t){return d.reject(e,t)}r===e?d.reject(e,new TypeError("Cannot resolve promise with itself")):d.resolve(e,r)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function s(e,t){function n(t){i||(i=!0,d.reject(e,t))}function r(t){i||(i=!0,d.resolve(e,t))}function o(){t(r,n)}var i=!1,u=f(o);"error"===u.status&&n(u.value)}function f(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function a(e){return e instanceof this?e:d.resolve(new this(r),e)}function l(e){var t=new this(r);return d.reject(t,e)}function h(e){function t(e,t){function r(e){u[t]=e,++c!==o||i||(i=!0,d.resolve(f,u))}n.resolve(e).then(r,function(e){i||(i=!0,d.reject(f,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var u=new Array(o),c=0,s=-1,f=new this(r);++s<o;)t(e[s],s);return f}function p(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,d.resolve(c,e))},function(e){i||(i=!0,d.reject(c,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var u=-1,c=new this(r);++u<o;)t(e[u]);return c}var v=e(2),d={},y=["REJECTED"],m=["FULFILLED"],w=["PENDING"];t.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===m||"function"!=typeof t&&this.state===y)return this;var n=new this.constructor(r);if(this.state!==w){var o=this.state===m?e:t;u(n,o,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){d.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){u(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){d.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){u(this.promise,this.onRejected,e)},d.resolve=function(e,t){var n=f(c,t);if("error"===n.status)return d.reject(e,n.value);var r=n.value;if(r)s(e,r);else{e.state=m,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},d.reject=function(e,t){e.state=y,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},o.resolve=a,o.reject=l,o.all=h,o.race=p},{2:2}],2:[function(e,t,n){(function(e){"use strict";function n(){a=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}a=!1}function r(e){1!==l.push(e)||a||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var u=0,c=new i(n),s=e.document.createTextNode("");c.observe(s,{characterData:!0}),o=function(){s.data=u=++u%2}}else if(e.setImmediate||"undefined"==typeof e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var f=new e.MessageChannel;f.port1.onmessage=n,o=function(){f.port2.postMessage(0)}}var a,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(1))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}]},{},[3]);
;
/*globals window, document, jQuery, Drupal, SBS */
// SHIM for safe usage of requestAnimationFrame
// see http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
(function ($) {
  "use strict";

  window.SBS = window.SBS || {};
  window.SBS.requestAnimationFrame = function () {
    return (window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      });
  };

}(jQuery));
;
/*globals window, jQuery, document, SBS*/
/*jslint nomen: true*/

/*
Abstraction for sending analytics data
- see sbs.audio.js for example usage
 */

window.SBS = window.SBS || {};
window.SBS.analyticsSender = (function ($, underscore) {
  "use strict";

  // public
  var init,
    Analytics,
    pathPrefix = "contextData.";

  init = function ($el, options) {
    var instance = new Analytics($el, options);
    return instance;
  };

  Analytics = function ($el, options) {
    var prop,
      option,
      defaults = {
        throttle: {
          leading: true,
          trailing: false
        }
      },
      throttleSettings;

    this.$el = $el;
    this.options = options;
    this.values = options.fixed;
    this.counters = {};
    this.valuesPaths = [];

    for (prop in options.fixed) {
      if (options.fixed.hasOwnProperty(prop)) {
        this.valuesPaths.push(pathPrefix + prop);
      }
    }

    // set event based values to initially be null
    for (prop in options.eventBased) {
      if (options.eventBased.hasOwnProperty(prop)) {
        option = options.eventBased[prop];
        this.values[prop] = null;
        this.valuesPaths.push(pathPrefix + prop);

        if (option.hasOwnProperty("type") && option.type === "counter") {
          this.counters[prop] = 0;
        }

        if (option.hasOwnProperty("throttle") && option.hasOwnProperty("throttleDuration") && option.throttle) {
          throttleSettings = option.hasOwnProperty("throttleOptions") ? option.throttleOptions : defaults.throttle;
          this.$el.bind(prop, underscore.throttle(Analytics.handler, option.throttleDuration, throttleSettings));
        } else {
          this.$el.bind(prop, Analytics.handler);
        }
      }
    }
  };

  // currently setup to send data to omniture
  // could just change this later to send to a different analytics package
  Analytics.prototype.send = function () {
    var s,
      prop;

    if (window.sbs_s !== undefined) {
      s = window.sbs_s;
    } else {
      return;
    }

    // only add values that aren't null
    s.contextData = {};
    for (prop in this.values) {
      if (this.values.hasOwnProperty(prop) && this.values[prop] !== null) {
        s.contextData[prop] = this.values[prop];
      }
    }

    s.linkTrackVars = this.valuesPaths.join();
    s.tl(true, "o", "Audio Tracking");
  };

  // updates relevant values and sends them
  Analytics.handler = function (e, value, instance) {
    var namespace = e.type + "." + e.namespace,
      config = instance.options.eventBased[namespace],
      send;

    if (config.hasOwnProperty("type") && config.type === "counter") {
      instance.values[namespace] = value.toString() + instance.counters[namespace].toString();
      instance.counters[namespace] = instance.counters[namespace] + 1;
    } else {
      instance.values[namespace] = value;
    }

    send = config.hasOwnProperty("send") ? config.send : true;

    if (send) {
      instance.send();
    }
  };

  return {
    init: init
  };

}(jQuery, window._));
;
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
/*globals document, window*/
/*jslint nomen: true*/

(function (w, underscore, $) {

  // Enable strict mode
  "use strict";

  var isFirstTime = true,
    resizeHandler = underscore.throttle(function (e) {
      w.picturefill();
    }, 200);

  w.picturefill = function () {
    var ps = w.document.getElementsByTagName("div"),
      eventName = isFirstTime ? "picturefill_ready" : "picturefill_update",
      memo,
      i,
      j,
      jl,
      il,
      media,
      picImg,
      matches,
      sources,
      myevent;

    // Loop the pictures
    for (i = 0, il = ps.length; i < il; i = i + 1) {
      if (ps[i].getAttribute("data-picture") !== null) {

        sources = ps[i].getElementsByTagName("div");
        matches = [];

        // See if which sources match
        for (j = 0, jl = sources.length; j < jl; j = j + 1) {
          media = sources[j].getAttribute("data-media");
          // if there's no media specified, OR w.matchMedia is supported
          if (!media || (w.matchMedia && w.matchMedia(media).matches)) {
            matches.push(sources[j]);
          }
        }

        // Find any existing img element in the picture element
        picImg = ps[i].getElementsByTagName("img")[0];

        if (matches.length) {
          if (!picImg) {
            picImg = w.document.createElement("img");
            if (ps[i].getAttribute("data-alt") !== null) {
              picImg.alt = ps[i].getAttribute("data-alt");
            }
            if (ps[i].getAttribute("alt") !== null) {
              picImg.alt = ps[i].getAttribute("alt");
            }
            if (ps[i].getAttribute("data-title") !== null) {
              picImg.title = ps[i].getAttribute("data-title");
            }
            if (ps[i].getAttribute("title") !== null) {
              picImg.title = ps[i].getAttribute("title");
            }
            ps[i].appendChild(picImg);
          }

          picImg.src =  matches.pop().getAttribute("data-src");
        } else if (picImg) {
          ps[i].removeChild(picImg);
        }
      }
    }

    $(document).trigger(eventName);

    /* This code removed because fireEvent doesn't work in IE for custom events
    // fire custom event
    if (document.createEvent) {
      myevent = document.createEvent("HTMLEvents");
      myevent.initEvent(eventName, true, true);
    } else {
      myevent = document.createEventObject();
      myevent.eventType = eventName;
    }

    myevent.eventName = eventName;
    myevent.memo = memo || {};

    if (document.createEvent) {
      document.dispatchEvent(myevent);
    } else {
      alert("on" + myevent.eventType);
      document.fireEvent("on" + myevent.eventType); // doesn't work with custom events in IE
    }
    */

    isFirstTime = false;
  };

  // Run on resize and domready (w.load as a fallback)
  if (w.addEventListener) {
    w.addEventListener("resize", resizeHandler, false);
    w.addEventListener("DOMContentLoaded", function () {
      w.picturefill();
      // Run once only
      w.removeEventListener("load", w.picturefill, false);
    }, false);
    w.addEventListener("load", w.picturefill, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", w.picturefill);
  }

}(this, window._, window.jQuery));
;
/**
 * @license
 * jQuery Tools 1.2.7 Scrollable - New wave UI design
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/scrollable.html
 *
 * Since: March 2008
 * Date: @DATE
 */
(function ($) {
  "use strict";

  var cssTransition = ($.support.transition) ? true : false;

  // fallback to normal jquery animation
  if (!cssTransition) {
    $.fn.transition = $.fn.animate;
  }

  // static constructs
  $.tools = $.tools || {
    version: '1.2.7'
  };

  $.tools.scrollable = {

    conf: {
      activeClass: 'on',
      circular: true,
      clonedClass: 'cloned',
      disabledClass: 'disabled',
      easing: (cssTransition) ? 'in-out' : 'swing',
      initialIndex: 0,
      item: 'li',
      items: 'ul',
      keyboard: true,
      mousewheel: false,
      next: '.next',
      prev: '.previous',
      size: 1,
      speed: 600,
      vertical: false,
      touch: false,
      wheelSpeed: 0
    }
  };

  // get hidden element's width or height even though it's hidden
  function dim(el, key) {
    var v = parseInt(el.css(key), 10);
    if (v) {
      return v;
    }
    var s = el[0].currentStyle;
    return s && s.width && parseInt(s.width, 10);
  }

  function find(root, query) {
    var el = $(query);
    return el.length < 2 ? el : root.parent().find(query);
  }

  var current;

  // constructor
  function Scrollable(root, conf) {

    // current instance
    var self = this,
      fire = root.add(self),
      itemWrap = root.children(),
      index = 0,
      vertical = conf.vertical;

    if (!current) {
      current = self;
    }
    if (itemWrap.length > 1) {
      itemWrap = $(conf.items, root);
    }


    // in this version circular not supported when size > 1
    if (conf.size > 1) {
      conf.circular = false;
    }

    // methods
    $.extend(self, {

      getConf: function () {
        return conf;
      },

      getIndex: function () {
        return index;
      },

      getSize: function () {
        return self.getItems().size();
      },

      getNaviButtons: function () {
        return prev.add(next);
      },

      getRoot: function () {
        return root;
      },

      getItemWrap: function () {
        return itemWrap;
      },

      getItems: function () {
        return itemWrap.find(conf.item).not("." + conf.clonedClass);
      },

      move: function (offset, time) {
        return self.seekTo(index + offset, time);
      },

      next: function (time) {
        return self.move(conf.size, time);
      },

      prev: function (time) {
        return self.move(-conf.size, time);
      },

      begin: function (time) {
        return self.seekTo(0, time);
      },

      end: function (time) {
        return self.seekTo(self.getSize() - 1, time);
      },

      focus: function () {
        current = self;
        return self;
      },

      addItem: function (item) {
        item = $(item);

        if (!conf.circular) {
          itemWrap.append(item);
          next.removeClass("disabled");

        } else {
          itemWrap.children().last().before(item);
          itemWrap.children().first().replaceWith(item.clone().addClass(conf.clonedClass));
        }

        fire.trigger("onAddItem", [item]);
        return self;
      },


      /* all seeking functions depend on this */
      seekTo: function (i, time, fn) {
        var items, activeClass;
        // ensure numeric index
        if (!i.jquery) {
          i *= 1;
        }

        // avoid seeking from end clone to the beginning
        if (conf.circular && i === 0 && index == -1 && time !== 0) {
          return self;
        }

        // check that index is sane
        if (!conf.circular && i < 0 || i > self.getSize() || i < -1) {
          return self;
        }

        var item = i;

        if (i.jquery) {
          i = self.getItems().index(i);

        } else {
          item = self.getItems().eq(i);
        }

        // onBeforeSeek
        var e = $.Event("onBeforeSeek");
        items = self.getItems();
        activeClass = self.getConf().activeClass;

        for (var k = items.length - 1; k >= 0; k--) {
          items.eq(k).removeClass(activeClass);
        }

        if (!fn) {
          fire.trigger(e, [i, time]);
          if (e.isDefaultPrevented() || !item.length) {
            return self;
          }
        }

        var props = vertical ? {
          top: -item.position().top
        } : {
          left: -item.position().left
        };

        /*
         if (cssTransition) {
         var props = vertical ? {
         y: -item.position().top
         } : {
         x: -item.position().left
         };
         } else {
         var props = vertical ? {
         top: -item.position().top
         } : {
         left: -item.position().left
         };
         }
         */

        index = i;
        current = self;
        if (time === undefined) {
          time = conf.speed;
        }

        items.eq(i).addClass(activeClass);

        itemWrap.transition(props, time, conf.easing, fn || function () {
          fire.trigger("onSeek", [i]);
        });

        return self;
      }

    });

    // callbacks
    $.each(['onBeforeSeek', 'onSeek', 'onAddItem'], function (i, name) {

      // configuration
      if ($.isFunction(conf[name])) {
        $(self).bind(name, conf[name]);
      }

      self[name] = function (fn) {
        if (fn) {
          $(self).bind(name, fn);
        }
        return self;
      };
    });

    // circular loop

    // this may need to be extend to allow more then one clone if the size
    // increase past 1, which is the case on the front page.
    // however at the present time, i'm not 100% sure that it will fix the seek issues
    if (conf.circular) {

      var cloned1 = self.getItems().slice(-1).clone().prependTo(itemWrap),
        cloned2 = self.getItems().eq(1).clone().appendTo(itemWrap);

      cloned1.add(cloned2).addClass(conf.clonedClass);

      self.onBeforeSeek(function (e, i, time) {
        if (e.isDefaultPrevented()) {
          return;
        }

        /*
         1. animate to the clone without event triggering
         2. seek to correct position with 0 speed
         */
        if (i == -1) {
          self.seekTo(cloned1, time, function () {
            self.end(0);
          });
          return e.preventDefault();

        } else if (i == self.getSize()) {
          self.seekTo(cloned2, time, function () {
            self.begin(0);
          });
        }

      });

      // seek over the cloned item

      // if the scrollable is hidden the calculations for seekTo position
      // will be incorrect (eg, if the scrollable is inside an overlay).
      // ensure the elements are shown, calculate the correct position,
      // then re-hide the elements. This must be done synchronously to
      // prevent the hidden elements being shown to the user.

      // See: https://github.com/jquerytools/jquerytools/issues#issue/87

      var hidden_parents = root.parents().add(root).filter(function () {
        if ($(this).css('display') === 'none') {
          return true;
        }
      });
      if (hidden_parents.length) {
        hidden_parents.show();
        self.seekTo(0, 0, function () {});
        hidden_parents.hide();
      } else {
        self.seekTo(0, 0, function () {});
      }

    }

    // next/prev buttons
    var prev = find(root, conf.prev).click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass(conf.disabledClass)) {
          return;
        }
        self.prev();
      }),
      next = find(root, conf.next).click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass(conf.disabledClass)) {
          return;
        }
        self.next();
      });

    if (!conf.circular) {
      self.onBeforeSeek(function (e, i) {
        setTimeout(function () {
          if (!e.isDefaultPrevented()) {
            prev.toggleClass(conf.disabledClass, i <= 0);
            next.toggleClass(conf.disabledClass, i >= self.getSize() - 1);
          }
        }, 1);
      });

      if (!conf.initialIndex) {
        prev.addClass(conf.disabledClass);
      }
    }

    if (self.getSize() < 2) {
      prev.add(next).addClass(conf.disabledClass);
    }

    // mousewheel support
    if (conf.mousewheel && $.fn.mousewheel) {
      root.mousewheel(function (e, delta) {
        if (conf.mousewheel) {
          self.move(delta < 0 ? 1 : -1, conf.wheelSpeed || 50);
          return false;
        }
      });
    }

    // touch event
    if (conf.touch) {
      var touch = {};

      itemWrap[0].ontouchstart = function (e) {
        var t = e.touches[0];
        touch = {};
        touch.x = t.clientX;
        touch.y = t.clientY;
        touch.startx = t.clientX;
        touch.starty = t.clientY;
        // touch action is set on the first
        // touchmove based on the movement vector
        e.preventDefault();
      };
      itemWrap[0].ontouchmove = function (e) {
        var t = e.touches[0];
        touch.dx = t.clientX - touch.x;
        touch.dy = t.clientY - touch.y;
        touch.x = t.clientX;
        touch.y = t.clientY;
        //console.log(touch.dx);
        if (!touch.action) {
          touch.action = (Math.abs(touch.dy) > Math.abs(touch.dx) ? 'vertical' : 'horizontal');
        }
        if(touch.action == 'horizontal') {
          // only deal with one finger
          if (e.touches.length == 1) {
            itemWrap.css('left', itemWrap.position().left + touch.dx);
            /*
             if (cssTransition) {
             itemWrap.css('x', itemWrap.position().left + touch.dx);
             } else {
             itemWrap.css('left', itemWrap.position().left + touch.dx);
             }
             */
          }
        } else if (touch.action == 'vertical') {
          window.scroll(0, $(window).scrollTop() - touch.dy);
        }
      };
      itemWrap[0].ontouchend = function (e) {
        if(touch.action == 'horizontal') {
          var deltaX = touch.x - touch.startx;
          var xor = ((deltaX > 0) ^ (touch.dx > 0));
          if (!xor && Math.abs(deltaX) > 50) {
            self[deltaX < 0 ? 'next' : 'prev']();
          } else {
            self.seekTo(index);
          }
        }
      };
    }

    if (conf.keyboard) {

      $(document).bind("keydown.scrollable", function (evt) {

        // skip certain conditions
        if (!conf.keyboard || evt.altKey || evt.ctrlKey || evt.metaKey || $(evt.target).is(":input")) {
          return;
        }

        // does this instance have focus?
        if (conf.keyboard != 'static' && current != self) {
          return;
        }

        var key = evt.keyCode;

        if (vertical && (key == 38 || key == 40)) {
          self.move(key == 38 ? -1 : 1);
          return evt.preventDefault();
        }

        if (!vertical && (key == 37 || key == 39)) {
          self.move(key == 37 ? -1 : 1);
          return evt.preventDefault();
        }

      });
    }

    // initial index
    if (conf.initialIndex) {
      self.seekTo(conf.initialIndex, 0, function () {});
    }
  }

  // jQuery plugin implementation
  $.fn.scrollable = function (conf) {
    // already constructed --> return API
    var el = this.data("scrollable");
    if (el) {
      return el;
    }

    conf = $.extend({}, $.tools.scrollable.conf, conf);

    this.each(function () {
      el = new Scrollable($(this), conf);
      $(this).data("scrollable", el);
    });

    return conf.api ? el : this;

  };


})(jQuery);


/**
 * @license
 * jQuery Tools 1.2.7 / Scrollable Navigator
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/scrollable/navigator.html
 *
 * Since: September 2009
 * Date: @DATE
 */ (function ($) {
  "use strict";
  var t = $.tools.scrollable;

  t.navigator = {

    conf: {
      navi: '.navi',
      naviItem: null,
      activeClass: 'on',
      indexed: false,
      idPrefix: null,

      // 1.2
      history: false
    }
  };

  function find(root, query) {
    var el = $(query);
    return el.length < 2 ? el : root.parent().find(query);
  }

  // jQuery plugin implementation
  $.fn.navigator = function (conf) {

    // configuration
    if (typeof conf == 'string') {
      conf = {
        navi: conf
      };
    }
    conf = $.extend({}, t.navigator.conf, conf);

    var ret;

    this.each(function () {

      var api = $(this).data("scrollable"),
        navi = conf.navi.jquery ? conf.navi : find(api.getRoot(), conf.navi),
        buttons = api.getNaviButtons(),
        cls = conf.activeClass,
        hashed = conf.history && !! history.pushState,
        size = api.getConf().size;


      // @deprecated stuff
      if (api) {
        ret = api;
      }

      api.getNaviButtons = function () {
        return buttons.add(navi);
      };


      if (hashed) {
        history.pushState({
          i: 0
        }, '');

        $(window).bind("popstate", function (evt) {
          var s = evt.originalEvent.state;
          if (s) {
            api.seekTo(s.i);
          }
        });
      }

      function doClick(el, i, e) {
        api.seekTo(i);
        e.preventDefault();
        if (hashed) {
          history.pushState({
            i: i
          }, '');
        }
      }

      function els() {
        return navi.find(conf.naviItem || '> *');
      }

      function addItem(i) {

        var item = $("<" + (conf.naviItem || 'a') + "/>").click(function (e) {
          doClick($(this), i, e);
        });

        // index number / id attribute
        if (i === 0) {
          item.addClass(cls);
        }
        if (conf.indexed) {
          item.text(i + 1);
        }
        if (conf.idPrefix) {
          item.attr("id", conf.idPrefix + i);
        }

        return item.appendTo(navi);
      }


      // generate navigator
      if (els().length) {
        els().each(function (i) {
          $(this).click(function (e) {
            doClick($(this), i, e);
          });
        });

      } else {
        $.each(api.getItems(), function (i) {
          if (i % size === 0) addItem(i);
        });
      }

      // activate correct entry
      api.onBeforeSeek(function (e, index) {
        setTimeout(function () {
          if (!e.isDefaultPrevented()) {
            var i = index / size,
              el = els().eq(i);
            if (el.length) {
              els().removeClass(cls).eq(i).addClass(cls);
            }
          }
        }, 1);
      });

      // new item being added
      api.onAddItem(function (e, item) {
        var i = api.getItems().index(item);
        if (i % size === 0) addItem(i);
      });

    });

    return conf.api ? ret : this;

  };

})(jQuery);


/**
 * @license
 * jQuery Tools 1.2.7 / Scrollable Autoscroll
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/scrollable/autoscroll.html
 *
 * Since: September 2009
 * Date: @DATE
 */ (function ($) {
  "use strict";
  var t = $.tools.scrollable;

  t.autoscroll = {

    conf: {
      autoplay: true,
      interval: 10000,
      autopause: true
    }
  };

  // jQuery plugin implementation
  $.fn.autoscroll = function (conf) {

    if (typeof conf == 'number') {
      conf = {
        interval: conf
      };
    }

    var opts = $.extend({}, t.autoscroll.conf, conf),
      ret;

    this.each(function () {

      var api = $(this).data("scrollable"),
        root = api.getRoot(),
      // interval stuff
        timer, stopped = false;

      /**
       *
       *   Function to run autoscroll through event binding rather than setInterval
       *   Fixes this bug: http://flowplayer.org/tools/forum/25/72029
       */
      function scroll() {
        // Fixes https://github.com/jquerytools/jquerytools/issues/591
        if (timer) clearTimeout(timer); // reset timeout, especially for onSeek event
        timer = setTimeout(function () {
          api.next();
        }, opts.interval);
      }

      if (api) {
        ret = api;
      }

      api.play = function () {

        // do not start additional timer if already exists
        if (timer) {
          return;
        }

        stopped = false;
        root.bind('onSeek', scroll);
        scroll();
      };

      api.pause = function () {
        timer = clearTimeout(timer); // clear any queued items immediately
        root.off('onSeek', scroll);
      };

      // resume playing if not stopped
      api.resume = function () {
        stopped || api.play();
      };

      // when stopped - mouseover won't restart
      api.stop = function () {
        stopped = true;
        api.pause();
      };

      /* when mouse enters, autoscroll stops */
      if (opts.autopause) {
        root.add(api.getNaviButtons()).hover(api.pause, api.resume);
      }

      if (opts.autoplay) {
        api.play();
      }

    });

    return opts.api ? ret : this;

  };

})(jQuery);
;
/**
 * Prototypes
 */

/**
 * Make a slug from a string (consistent with slug style from framework)
 * @return {String}
 */
String.prototype.slug = function () {
    var maxlength = 50;
    var string = this.replace(/&mdash;/gi, '-').replace(/&/g, 'and').replace(/[^A-Za-z0-9\s-]/g, '');
    string = string.trim(string.replace(/[\s-]+/g, ' '));
    string = string.trim(string.substr(0, maxlength));
    string = string.replace(/\s/g, '-');
    string = string.replace(/--*/g, '-');
    return string;
};

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Trim whitespace from a string
 * @return {String}
 */
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

/**
 * Return ID from a url
 * @return {int}
 */
String.prototype.parseID = function () {
    var parts = this.split("/");
    var part = parts[parts.length - 1];
    if (!isNaN(part)) return part;
    for (var i = parts.length; i > 0; --i) {
        if (!isNaN(parts[i])) return parts[i];
    }
    return null;
}

/**
 * truncate a string to the character limit length and add ellipsis (optionally set ellipsis to false to prevent ellipsizing)
 * @param characterLimit
 * @param ellipsize
 * @return {string} truncatedString
 */
String.prototype.truncate = function (characterLimit, ellipsize) {
    ellipsize = ellipsize || true;
    var string = this;

    if (string.length > characterLimit) {
        string = this.substr(0, characterLimit);
        if (string.lastIndexOf(' ') != -1) {
            string = string.substr(0, string.lastIndexOf(' '));
        }
        if (ellipsize) string = string + '...';
    }
    return string;
}

/**
 * replace urls in string with links
 * @return {String}
 */
String.prototype.replaceUrlsWithLinks = function () {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
        urls = this.match(exp),
        string = this;

    if (urls == null) return string;

    for (var i = 0; i < urls.length; i++) {
        string = string.replace(urls[i], '<a href="' + urls[i] + '">' + urls[i].replace(/http:\/\//i, '') + '</a>');
    }

    return string;
}

String.prototype.parseHashtag = function() {
  return this.replace(/\s[#]+[A-Za-z0-9-_]+/g, function(t) {
    var tag = t.replace("#","%23").trim();
    return t.link("http://twitter.com/search?q="+tag).replace('<a', '<a class="sbs-hashtag" target="_blank" ');
  });
};

String.prototype.parseUsername = function() {
  return this.replace(/\s[@]+[A-Za-z0-9-_]+/g, function(u) {
    var username = u.replace("@","").trim();
    return u.link("http://twitter.com/"+username);
  });
};


/**
 * IE fixes
 */

// Add ECMA262-5 method binding if not supported natively
if (!('bind' in Function.prototype)) {
    Function.prototype.bind = function (owner) {
        var that = this;
        if (arguments.length <= 1) {
            return function () {
                return that.apply(owner, arguments);
            };
        } else {
            var args = Array.prototype.slice.call(arguments, 1);
            return function () {
                return that.apply(owner, arguments.length === 0 ? args : args.concat(Array.prototype.slice.call(arguments)));
            };
        }
    };
}

// Add ECMA262-5 string trim if not supported natively
if (!('trim' in String.prototype)) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    };
}

// Add ECMA262-5 Array methods if not supported natively
if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf = function (find, i) {
        if (i === undefined) i = 0;
        if (i < 0) i += this.length;
        if (i < 0) i = 0;
        for (var n = this.length; i < n; i++)
            if (i in this && this[i] === find)
                return i;
        return -1;
    };
}
if (!('lastIndexOf' in Array.prototype)) {
    Array.prototype.lastIndexOf = function (find, i) {
        if (i === undefined) i = this.length - 1;
        if (i < 0) i += this.length;
        if (i > this.length - 1) i = this.length - 1;
        for (i++; i-- > 0;) /* i++ because from-argument is sadly inclusive */
            if (i in this && this[i] === find)
                return i;
        return -1;
    };
}
if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach = function (action, that) {
        for (var i = 0, n = this.length; i < n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
}
if (!('map' in Array.prototype)) {
    Array.prototype.map = function (mapper, that) {
        var other = new Array(this.length);
        for (var i = 0, n = this.length; i < n; i++)
            if (i in this)
                other[i] = mapper.call(that, this[i], i, this);
        return other;
    };
}
if (!('filter' in Array.prototype)) {
    Array.prototype.filter = function (filter, that) {
        var other = [], v;
        for (var i = 0, n = this.length; i < n; i++)
            if (i in this && filter.call(that, v = this[i], i, this))
                other.push(v);
        return other;
    };
}
if (!('every' in Array.prototype)) {
    Array.prototype.every = function (tester, that) {
        for (var i = 0, n = this.length; i < n; i++)
            if (i in this && !tester.call(that, this[i], i, this))
                return false;
        return true;
    };
}
if (!('some' in Array.prototype)) {
    Array.prototype.some = function (tester, that) {
        for (var i = 0, n = this.length; i < n; i++)
            if (i in this && tester.call(that, this[i], i, this))
                return true;
        return false;
    };
}

if (typeof console == 'undefined') {
    var console = {log:function () {
    }};
};
/*globals window, navigator */
/* ^_^ User: harleym Date: 25/03/13 Time: 12:04 PM */

window.SBS = window.SBS || {};
window.SBS.agent = (function () {
  "use strict";
  var agent = null,
    devices = {
      //iOS
      'iPhone': {format: 'mobile', OS: 'iOS'},
      'iPad': {format: 'tablet', OS: 'iOS'},
      'iPod': {format: 'mobile', OS: 'iOS'},
      // Android
      'GT-I9\\d{3}': {format: 'mobile', family: 'Galaxy S', OS: 'Android'},
      'GT-N8\\d{3}': {format: 'tablet', family: 'Galaxy Note', OS: 'Android'},
      'GT-N7\\d{3}': {format: 'mobile', family: 'Galaxy Note', OS: 'Android'},
      'GT-P\\d{4}': {format: 'tablet', family: 'Galaxy Tab', OS: 'Android'},
      'GP-P\\d{4}': {format: 'tablet', family: 'Galaxy Tab', OS: 'Android'},
      'Nexus 7': {format: 'tablet', OS: 'Android'},
      'Nexus 10': {format: 'tablet', OS: 'Android'},
      'Nexus': {format: 'mobile', OS: 'Android'},
      'SCH-I800': {format: 'tablet', family: 'Galaxy Tab', OS: 'Android'},
      'Transformer': {format: 'tablet', family: 'Asus Transformer', OS: 'Android'},
      'a200': {format: 'tablet', family: 'Acer Picasso', OS: 'Android'},
      'a50\\d': {format: 'tablet', family: 'Acer Picasso', OS: 'Android'},
      'MZ60\\d': {format: 'tablet', family: 'Motorola Xoom', OS: 'Android'},
      'Kindle': {format: 'tablet', family: 'Kindle', OS: 'Android'},
      'AT100': {format: 'tablet', family: 'Toshiba', OS: 'Android'},
      // android failsafe
      'Android': {format: 'mobile', OS: 'Android'},
      'Mobile Safari': {format: 'mobile', OS: 'Android'},
      // microsoft surface and windows tablets running IE10
      'MSIE 1\\d.*Trident.*Touch.*Tablet': {format: 'tablet', OS: 'Windows 8'},
      // other
      'BlackBerry': {format: 'mobile', OS: 'BlackBerry'},
      'Windows Phone': {format: 'mobile', OS: 'Windows Phone'}
    },
    OS = {
      Android: 'Android (\\d(\\.\\d){0,2});',
      iOS: '\\((iPad|iPod|iPhone);( U;)? CPU (iPhone )?OS \\d(_\\d){0,2} like Mac OS X.*?\\)'
    },
    findInAgent = function (needle) {
      return (navigator.userAgent.match(new RegExp(needle, 'gi')));
    },
    device,
    match,
    version;

  for (device in devices) {
    if (typeof device === 'string') {
      match = findInAgent(device);
      if (match !== null) {
        agent = devices[device];
        agent.device = match[0];
        if (agent.family === undefined) {
          agent.family = agent.device;
        }
        break;
      }
    }
  }

  if (agent) {
    switch (agent.OS) {
    case 'Android':
      version = findInAgent(OS[agent.OS]);
      if (version !== null) {
        version = version[0].replace('Android ', '').replace(';', '');
      }
      break;
    case 'iOS':
      version = findInAgent(OS[agent.OS]);
      if (version !== null) {
        version = version[0].substring(version[0].indexOf(' OS ') + 4, version[0].indexOf('like Mac') - 1).replace(/_/g, '.');
      }
      break;
    }
    agent.version = version || 'unknown';
  } else {
    agent = {device: 'unknown', format: 'desktop', family: 'unknown'};
  }

  return agent;
}());
;
/*globals window, jQuery, document, Modernizr, SBS*/
/*jslint nomen: true*/

window.SBS = window.SBS || {};
window.SBS.globals = (function ($, namespace, global, underscore) {
  "use strict";

  // public
  var getClickOrTouchEvent,
    getHoverOrTouchEvent,
    getDisplaymode,
    getGridmode,
    getUrlParams,
    getUrlParam,
    getDayName,
    getMonthName,
    getDaySuffix,
    getAmPm,
    getTime,
    isElementInViewport,
    intervalTimers,
    popupCentre,

    // private
    clickOrTouchEvent,
    hoverOrTouchEvent,
    queryString;

  // check dependencies exist
  if (!namespace || !global.Modernizr || !$) {
    return;
  }

  clickOrTouchEvent = (Modernizr && Modernizr.touch) ? "touchstart" : "click";
  hoverOrTouchEvent = (Modernizr && Modernizr.touch) ? "touchstart" : "hover";

  // make mustache syntax work for underscore js
  // - discuss with others before activating this
  /*
  underscore.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,
    evaluate: /\{\[([\s\S]+?)\]\}/g
  };
  */

  intervalTimers = [];

  queryString = (function () {
    var query_string = {},
      query = global.location.search.substring(1),
      vars = query.split("&"),
      varsLen = vars.length,
      i,
      pair,
      arr;

    for (i = 0; i < varsLen; i = i + 1) {
      pair = vars[i].split("=");

      if (query_string[pair[0]] === undefined) {
        query_string[pair[0]] = pair[1];
      } else if (typeof query_string[pair[0]] === "string") {
        arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    }
    return query_string;
  }());

  if ($.browser.msie && parseInt($.browser.version, 10) === 10) {
    $("html").addClass("ie ie10");
  }

  getClickOrTouchEvent = function () {
    return clickOrTouchEvent;
  };

  getHoverOrTouchEvent = function () {
    return hoverOrTouchEvent;
  };

  getDisplaymode = function () {
    return (namespace.displaymode) ? namespace.displaymode.get() : false;
  };

  getGridmode = function () {
    return (namespace.displaymode) ? namespace.displaymode.getGridMode() : false;
  };

  getUrlParams = function () {
    return queryString;
  };

  getUrlParam = function (key) {
    return queryString[key] || false;
  };

  getDayName = function (dateObj, type) {
    var index = dateObj.getDay(),
      names = {
        normal: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        short: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ]
      };

    return names[type || "normal"][index];
  };

  getMonthName = function (dateObj, type) {
    var index = dateObj.getMonth(),
      names = {
        normal: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        short: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      };

    return names[type || "normal"][index];
  };

  getDaySuffix = function (dateObj) {
    var index = dateObj.getDate(),
      normal = "th",
      st = [1, 21, 31],
      nd = [2, 22],
      rd = [3, 23],
      rtn = normal;

    rtn = ($.inArray(index, st) > -1) ? "st" : rtn;
    rtn = ($.inArray(index, nd) > -1) ? "nd" : rtn;
    rtn = ($.inArray(index, rd) > -1) ? "rd" : rtn;

    return rtn;
  };

  getAmPm = function (dateObj) {
    var h = dateObj.getHours();
    return (h >= 12) ? "pm" : "am";
  };

  getTime = function (dateObj, options) {
    var h = dateObj.getHours(),
      m = dateObj.getMinutes(),
      rtn,
      defaults = {
        format: "12hr",
        includeAmPm: true
      },
      settings = $.extend(true, {}, defaults, options);

    m = (m < 10) ? '0' + m : m;

    if (settings.format === "12hr") {
      h = (h === 0) ? 12 : h;
      h = (h > 12) ? h - 12 : h;
      rtn = h + ":" + m;
      rtn = (settings.includeAmPm) ? rtn + SBS.globals.getAmPm(dateObj) : rtn;
    } else {
      rtn = h + ":" + m;
    }

    return rtn;
  };

  isElementInViewport = function (el, options) {
    var defaults = {
        type: "whole",
        threshold: 0, // how much in pixels needs to be visible
        method: null,
        thresholdBottom: 0 // modification of the viewTop (for use in directional scrolling - 'up' being most common source of issue)
      },
      settings = $.extend(true, {}, defaults, options),
      methods = {

        // whole element must be visible in window
        whole: function (elem) {
          var rect = elem.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        },

        // only part of the element needs to be visible
        // threshold defaults to 0
        part: function (elem) {
          var rect = elem.getBoundingClientRect(),
            viewTop = $(window).scrollTop() + settings.thresholdBottom,
            viewBottom = viewTop + $(window).height(),
            elemTop = $(elem).offset().top + settings.threshold,
            elemHeight = $(elem).height(),
            elemBottom = elemTop + elemHeight - settings.threshold;
          return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            ((viewTop < elemTop && elemTop < viewBottom) || (viewTop < elemBottom && elemBottom < viewBottom))
          );
        }
      },
      method = (settings.method !== null) ? settings.method : methods[settings.type];

    return method(el);
  };

  popupCentre = function (url, name, w, h) {
    var screen = window.screen,
      dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left,
      dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top,
      width = window.innerWidth || (document.documentElement.clientWidth || screen.width),
      height = window.innerHeight || (document.documentElement.clientHeight || screen.height),
      left = ((width / 2) - (w / 2)) + dualScreenLeft,
      top = ((height / 2) - (h / 2)) + dualScreenTop,
      newWindow;

    newWindow = window.open(url, name, 'height=100, width=500, top=' + top + ', left=' + left + ', toolbar=0, titlebar=0, menubar=0, status=0, scrollbars=0, location=0, scrollable=0, menubar=0, resizable=0');
    return newWindow;
  };

  // Public interface
  return {
    getClickOrTouchEvent: getClickOrTouchEvent,
    getHoverOrTouchEvent: getHoverOrTouchEvent,
    getDisplaymode: getDisplaymode,
    getGridmode: getGridmode,
    getUrlParams: getUrlParams,
    getUrlParam: getUrlParam,
    isElementInViewport: isElementInViewport,
    intervalTimers: intervalTimers,
    getDayName: getDayName,
    getMonthName: getMonthName,
    getDaySuffix: getDaySuffix,
    getAmPm: getAmPm,
    getTime: getTime,
    popupCentre: popupCentre,
    getAB: function () {
      return (Math.floor(Math.random() * 2) === 0) ? "a" : "b";
    }
  };

}(jQuery, window.SBS, window, window._));
;
/*globals window, jQuery, document, SBS*/
(function ($, global) {
  "use strict";

  var domreadyArray = [];

  global.SBS = global.SBS || {};

  /*
   * Queues all domready calls and fires them in order
   * - meant to be used instead of drupal behaviors when only domready is intended
   * - keeps decoupled from drupal
   *
   * @this {window.SBS}
   * @param {callback} callback function to call after domready
   * @param {scope} optional parameter to define scope for callback, if not set callback's value of this will be undefined
   */
  global.SBS.domready = function (callback, scope) {
    domreadyArray.push({
      callback: callback,
      scope: scope
    });
  };

  // single document ready call loops through domreadyArray and calls each in turn
  $(document).bind("displaymode_ready", function () {
    var i,
      iLen = domreadyArray.length,
      callback,
      scope;

    for (i = 0; i < iLen; i = i + 1) {
      callback = domreadyArray[i].callback;
      scope = domreadyArray[i].scope;
      callback.call(scope);
    }
  });

}(jQuery, window));;
/*globals window, document, jQuery*/
/*jslint nomen: true*/

window.SBS = window.SBS || {};
window.SBS.displaymode = (function ($, underscore) {
  "use strict";

  // public
  var get,
    set,

    // private
    isDocumentReadyCall = false,
    $html,
    hasGrid,
    init,
    update,
    getMode,
    modeClasses = [],
    notModeClasses = [],
    notModeClassesLen,
    modes = [],
    gridClasses = ["displaymode-grid-3", "displaymode-grid-4", "displaymode-grid-5", "displaymode-grid-6"],
    classPrefix = "displaymode-",
    modesConfig = {
      hires: function () {
        var config = {
            normal: {
              min: 1580,
              grid: function () {
                var config = {
                    normal: {
                      "grid-5": {
                        min: 1580
                      }
                    },
                    noSidebar: {
                      "grid-6": {
                        min: 1520
                      },
                      "grid-5": {
                        min: 1280,
                        max: 1519
                      }
                    }
                  },
                  hasSidebar = ($("#sidebar-first").length > 0) ? true : false;

                return hasSidebar ? config.normal : config.noSidebar;
              }
            },
            iframe: {
              min: 1580,
              grid: {
                "grid-6": {
                  min: 1580
                },
                "grid-5": {
                  min: 1280,
                  max: 1579
                }
              }
            }
          },
          isIframe = ($("body.iframecomponent").length > 0) ? true : false;

        return isIframe ? config.iframe : config.normal;
      },
      desktop: function () {
        var config = {
            normal: {
              min: 1101,
              max: 1579,

              // desktop mode can have grid of 3, 4, 5 or 6 columns
              // ** note config changes based on whether or not sidebar exists **
              grid: function () {
                var config = {
                    normal: {
                      "grid-4" : {
                        min: 1339,
                        max: 1579
                      },
                      "grid-3": {
                        min: 1101,
                        max: 1338
                      }
                    },
                    noSidebar: {
                      "grid-6" : {
                        min: 1520
                      },
                      "grid-5" : {
                        min: 1280,
                        max: 1519
                      },
                      "grid-4" : {
                        min: 1101,
                        max: 1279
                      }
                    }
                  },
                  hasSidebar = ($("#sidebar-first").length > 0) ? true : false;

                return hasSidebar ? config.normal : config.noSidebar;
              }
            },
            iframe: {
              min: 960,
              max: 1440,
              grid: {
                "grid-6" : {
                  min: 1440
                },
                "grid-5" : {
                  min: 1200,
                  max: 1439
                },
                "grid-4" : {
                  min: 960,
                  max: 1199
                }
              }
            }
          },
          isIframe = ($("body.iframecomponent").length > 0) ? true : false;

        return isIframe ? config.iframe : config.normal;
      },
      tablet: function () {
        var config = {
            normal: {
              min: 768,
              max: 1100,
              grid: {
                "grid-4": {
                  min: 1008,
                  max: 1100
                },
                "grid-3": {
                  min: 768,
                  max: 1007
                }
              }
            },
            iframe: {
              min: 700,
              max: 959,
              grid: {
                "grid-4": {
                  min: 868,
                  max: 959
                },
                "grid-3": {
                  min: 700,
                  max: 867
                }
              }
            }
          },
          isIframe = ($("body.iframecomponent").length > 0) ? true : false;

        return isIframe ? config.iframe : config.normal;
      },
      mobile: function () {
        var config = {
            normal: {
              max: 767
            },
            iframe: {
              max: 699
            }
          },
          isIframe = ($("body.iframecomponent").length > 0) ? true : false;

        return isIframe ? config.iframe : config.normal;
      }
    },
    currentMode,
    currentWidth,
    getDisplayWidth,
    gridMode,
    setGridMode,
    getGridMode;

  // public
  get = function () {
    return currentMode;
  };

  set = function (mode, config, classes, updateCurrentMode, type) {
    var removeClasses,
      addClasses = "",
      notModes = [],
      removeNotMode = "",
      i;

    // support for adding displaymode-not- classes
    if (updateCurrentMode) {
      for (i = 0; i < notModeClassesLen; i = i + 1) {
        if (notModeClasses[i] !== classPrefix + "not-" + mode) {
          notModes.push(notModeClasses[i]);
        } else {
          removeNotMode = notModeClasses[i];
        }
      }

      classes.push(removeNotMode);
    }

    if (config.hasOwnProperty(mode)) {

      removeClasses = classes.join(" ").replace(classPrefix + mode, "");
      addClasses = ([classPrefix + mode].concat(notModes)).join(" ");

      // first time doesn't have $html but doesn't need it
      // as doesn't need to remove previous class
      if ($html) {
        $html.removeClass(removeClasses);
        $html.addClass(addClasses);
        if (type === "device") {
          $html.attr('id', classPrefix + mode); // need to move or remove entirely because there are multiple modes at the same time eg not- grid- etc
        }
      } else {
        if (type === "device") {
          document.documentElement.id = classPrefix + mode;
        }
        document.documentElement.className = document.documentElement.className + " " + addClasses;
      }

      if (updateCurrentMode) {
        currentMode = mode;
      }
    }
  };

  // public
  getGridMode = function () {
    return gridMode;
  };

  // private
  init = function () {

    var modeProp,
      resizeHandler;

    resizeHandler = underscore.throttle(function (e) {
      update();
    }, 200);

    // generate the modeClasses arrays from modesConfig
    for (modeProp in modesConfig) {
      if (modesConfig.hasOwnProperty(modeProp)) {
        modeClasses.push(classPrefix + modeProp);
        modes.push(modeProp);
        notModeClasses.push(classPrefix + "not-" + modeProp);
      }
    }

    notModeClassesLen = notModeClasses.length;

    update();

    $(window).bind("resize", resizeHandler);
  };

  update = function () {
    var candidateMode,
      gridMode,
      config,
      modesconfig,
      transitionFromMobile = false;

    currentWidth = getDisplayWidth();
    config = modesConfig;
    candidateMode = getMode(currentWidth, config);

    if ((currentMode !== candidateMode) || isDocumentReadyCall) {
      transitionFromMobile = candidateMode === 'tablet' && currentMode === 'mobile';
      set(candidateMode, config, modeClasses, true, "device");
      $(document).trigger('displaymode', [candidateMode], [currentMode]);
    }

    // update grid class if relevant
    if (hasGrid) {
      modesconfig = ($.isFunction(modesConfig[candidateMode])) ? modesConfig[candidateMode]() : modesConfig[candidateMode];
      if (modesconfig.hasOwnProperty("grid")) {
        config = ($.isFunction(modesconfig.grid)) ? modesconfig.grid() : modesconfig.grid;
        gridMode = getMode(currentWidth, config);
        if (gridMode !== getGridMode() || transitionFromMobile) {
          set(gridMode, config, gridClasses, false, "grid");
          setGridMode(gridMode);
          $(document).trigger('displaygrid', [gridMode]);
        }
      } else {
        $html.removeClass(gridClasses.join(" ").replace(classPrefix + gridMode, ""));
        setGridMode("");
      }
    }

    if (isDocumentReadyCall) {
      $(document).trigger('displaymode_ready');
    }
  };

  getMode = function (width, config) {
    var modeName = "desktop",
      prop,
      mode,
      min,
      max;

    for (prop in config) {
      if (config.hasOwnProperty(prop)) {

        mode = ($.isFunction(config[prop])) ? config[prop]() : config[prop];
        min = ($.isFunction(mode.min)) ? mode.min() : mode.min;
        max = ($.isFunction(mode.max)) ? mode.max() : mode.max;

        if (min && max) {
          if ((width >= min) && (width <= max)) {
            modeName = prop;
            break;
          }
        } else if (min) {
          if (width >= min) {
            modeName = prop;
            break;
          }
        } else if (max) {
          if (width <= max) {
            modeName = prop;
            break;
          }
        }
      }
    }

    return modeName;
  };

  getDisplayWidth = function () {
    return $html ? $("html").outerWidth() : window.innerWidth;
  };

  setGridMode = function (mode) {
    gridMode = mode;
  };

  // we limit FOUC
  // by running init before domready
  init();

  $(document).ready(function () {
    $html = $("html");
    //hasGrid = ($("#block-system-main .grid, #block-system-main .grid-responsive").length > 0) ? true : false;
    hasGrid = true;
    isDocumentReadyCall = true;
    update();
    isDocumentReadyCall = false;
  });

  return {
    get: get,
    set: set,
    getGridMode: getGridMode
  };

}(jQuery, window._));
;
/*globals window, jQuery, document, SBS*/
window.SBS = window.SBS || {};
window.SBS.truncate = (function ($) {
  "use strict";

  // public
  var init,

    // private
    recursivelyTruncate,
    truncateNode,
    truncateText,
    squeeze,
    trailing_whitespace = true;

  recursivelyTruncate = function (node, max_length) {
    return (node.nodeType === 3) ? truncateText(node, max_length) : truncateNode(node, max_length);
  };

  truncateNode = function (node, max_length) {
    var $node = $(node),
      $new_node = $node.clone().empty(),
      truncatedChild;

    $node.contents().each(function (index, elem) {
      var remaining_length = max_length - $new_node.text().length;

      if (remaining_length === 0) {
        return;
      }

      truncatedChild = recursivelyTruncate(this, remaining_length);

      if (truncatedChild) {
        $new_node.append(truncatedChild);
      }
    });
    return $new_node;
  };

  truncateText = function (node, max_length) {
    var text = squeeze(node.data);

    if (trailing_whitespace) {
      text = text.replace(/^ /, '');
    }

    trailing_whitespace = !!text.match(/ $/);
    text = text.slice(0, max_length);

    // Ensure HTML entities are encoded
    // http://debuggable.com/posts/encode-html-entities-with-jquery:480f4dd6-13cc-4ce9-8071-4710cbdd56cb
    text = $('<div/>').text(text).html();
    return text;
  };

  squeeze = function (string) {
    return string.replace(/\s+/g, ' ');
  };

  init = function (options) {
    var defaults = {},
      settings = $.extend(true, {}, defaults, options);

    if (!settings.length || !settings.selector) {
      return;
    }

    $(settings.selector).each(function (index, elem) {
      var $newElem;

      if ($(elem).text().length < settings.length) {
        return;
      }

      $newElem = recursivelyTruncate(elem, settings.length);
      $newElem.text($newElem.text() + "...");

      $(elem).replaceWith($newElem);
    });
  };

  return {
    init: init
  };

}(jQuery));
;
/*globals window, jQuery, document, SBS, Drupal, cX*/
/*jslint nomen: true, regexp: true*/
window.SBS = window.SBS || {};
window.SBS.responsiveads = (function ($, drupalSettings, underscore, rtp) {
  "use strict";

  // public
  var load,

    // private
    defaults = {
      dfp: {
        adWrappers: [], // Push $adWrapper's to this so we can re-append `ADVERTISEMENT` slugs
        wrapperClass: "dfp-tag-wrapper",
        wrapperSelector: ".dfp-tag-wrapper>.dfp-tag"
      },
      displayModeMatrix: {
        desktop: {
          slot1 : [[970, 250], [970, 90], [728, 90]],
          slot2 : [[300, 250], [300, 600]],
          slot3 : [[300, 250], [300, 600]],
          slot4 : [[300, 250], [300, 600]],
          slot5 : [[970, 250], [970, 90], [728, 90]],
          slot6 : [[970, 250], [970, 90], [728, 90]],
          slot7 : [[970, 90], [728, 90]]
        },
        tablet: {
          slot1 : [728, 90],
          slot2 : [728, 90],
          slot3 : [728, 90],
          slot4 : [728, 90],
          slot5 : [728, 90],
          slot6 : [728, 90],
          slot7 : [728, 90]
        },
        mobile: {
          slot1 : [320, 50],
          slot2 : [320, 50],
          slot3 : [320, 50],
          slot4 : [320, 50],
          slot5 : [300, 250],
          slot6 : [300, 250],
          slot7 : [300, 250]
        }
      },
      rubiconDisplayModeMatrix: {
        desktop: {
          slot1 : [[728, 90]],
          slot2 : [[300, 250], [300, 600]],
          slot3 : [[300, 250], [300, 600]],
          slot4 : [[300, 250], [300, 600]],
          slot5 : [[728, 90]],
          slot6 : [[728, 90]],
          slot7 : [[728, 90]]
        },
        tablet: {
          slot1 : [728, 90],
          slot2 : [728, 90],
          slot3 : [728, 90],
          slot4 : [728, 90],
          slot5 : [728, 90],
          slot6 : [728, 90],
          slot7 : [728, 90]
        },
        mobile: {
          slot1 : [320, 50],
          slot2 : [320, 50],
          slot3 : [320, 50],
          slot4 : [320, 50],
          slot5 : [300, 250],
          slot6 : [300, 250],
          slot7 : [300, 250]
        }
      },
      // TODO: get rid of this hack
      gridModeOverride: {
        700 : {
          slot1 : [320, 50],
          slot5 : [320, 50],
          slot6 : [320, 50],
          slot7 : [320, 50]
        },
        // The sweet spot to switch a billboard to a leaderboard. Tablet & Small desktop
        1000 : {
          slot1 : [728, 90],
          slot5 : [728, 90],
          slot6 : [728, 90],
          slot7 : [728, 90]
        }
      }
    },
    setupRubicon,
    gptRun,
    gptRan = false,
    setSite,
    // If we ever add more slots in DFP module, we need to amend this.
    settings,
    getSlots,
    getValidSizes,
    getValidRubiconSizes,
    slotsTotal,
    slotsRenderedCount = 0,
    defineSlot,
    defineSlots,
    defineRubiconSlot,
    defineRubiconSlots,
    displayAd,
    displayAds,
    updateName,
    updateTargeting,
    updateSectionTargeting,
    reAppendSlugs,
    renderEndedHandler,
    debugOn = false,
    getDebugValues,
    debugValues = {
      sbs: {},
      targeting_processed: {}
    },
    debugOnKeys = [
      'addebug',
      'adDebug',
      'adsdebug',
      'adsDebug',
      'debugad',
      'debugAd',
      'debugads',
      'debugAds'
    ],
    debugKeys = {
      'sbs': [
        'site',
        'section',
        'pos' // we call them slots as well
      ],
      'targeting_processed': [
        'uuid',
        'ingredients',
        'cuisine',
        'article_type',
        'social_tags',
        'industry_term',
        'country',
        'region',
        'city',
        'person',
        'pagetype'
      ]
    };

  getSlots = function ($adWrappers, device) {
    var myslots = [],
      i;

    for (i in drupalSettings.dfp) {
      if (drupalSettings.dfp.hasOwnProperty(i)) {
        myslots.push(i);
      }
    }

    return myslots;
  };

  defineSlots = function (slotNames, deviceType) {
    var i,
      p,
      name,
      pos,
      foundPos = false;

    slotsTotal = slotNames.length;

    for (i = 0; i < slotsTotal; i = i + 1) {
      name = slotNames[i];
      pos = i + 1;

      if (!debugValues.sbs.hasOwnProperty('pos')) {
        defineSlot(name, deviceType, true);
      } else {
        foundPos = false;

        for (p = 0; p < debugValues.sbs.pos.length; p = p + 1) {
          if (name === debugValues.sbs.pos[p]) {
            foundPos = true;
            break;
          }
        }

        if (foundPos) {
          defineSlot(name, deviceType, true);
        } else {
          defineSlot(name, deviceType, false);
        }
      }
    }
  };

  defineRubiconSlots = function (slotNames, deviceType) {
    var i,
      p,
      name,
      pos,
      foundPos = false;

    slotsTotal = slotNames.length;

    for (i = 0; i < slotsTotal; i = i + 1) {
      name = slotNames[i];
      pos = i + 1;

      if (!debugValues.sbs.hasOwnProperty('pos')) {
        defineRubiconSlot(name, deviceType, true);
      } else {
        foundPos = false;

        for (p = 0; p < debugValues.sbs.pos.length; p = p + 1) {
          if (name === debugValues.sbs.pos[p]) {
            foundPos = true;
            break;
          }
        }

        if (foundPos) {
          defineRubiconSlot(name, deviceType, true);
        } else {
          defineRubiconSlot(name, deviceType, false);
        }
      }
    }
  };


  updateName = function (name, type, value) {
    var regex = {
        site: /(?:\/[\d]*\/)([\w]*)(?:\.)/i,
        section: /(?:\/[\d]*\/[\w]*\.[\w]*\/)([\w\-]*)/i
      },
      result = name.match(regex[type]);

    if (result.length > 1) {
      name = name.replace(result[1], value);
    }

    return name;
  };

  updateSectionTargeting = function (obj) {
    var keyName = "section",
      myprop,
      currentKey,
      value = debugValues.sbs[keyName];

    for (myprop in obj.targeting_processed) {
      if (obj.targeting_processed.hasOwnProperty(myprop)) {
        currentKey = obj.targeting_processed[myprop].target;
        if (currentKey === keyName) {
          obj.targeting_processed[myprop].value = value;
        }
      }
    }

    return obj;
  };

  updateTargeting = function (obj) {
    var prop,
      myprop,
      value,
      currentKey;

    for (prop in debugValues.targeting_processed) {
      if (debugValues.targeting_processed.hasOwnProperty(prop)) {
        value = debugValues.targeting_processed[prop];

        for (myprop in obj.targeting) {
          if (obj.targeting.hasOwnProperty(myprop)) {
            currentKey = obj.targeting[myprop].target;

            if (currentKey === prop) {

              obj.targeting_processed[currentKey] = {target: currentKey, value: value};
            }
          }
        }
      }
    }

    return obj;
  };

  defineSlot = function (adName, deviceType, overrideOn) {
    window.googletag.cmd.push(function () {
      // Ad unit defined by DFP module, then exposed into Drupal.settings.dfp
      var googleAdSlot,
        rubiconAccountId,
        rubitest,
        i,
        target,
        value,
        name = drupalSettings.dfp[adName].adunit + '_' + deviceType,
        sizes = getValidSizes(adName, deviceType),
        id = drupalSettings.dfp[adName].placeholder_id,
        targeting_processed,
        posRegex = /[\d]*$/i,
        posNum,
        userData;

      posNum = (adName.match(posRegex).length > 0) ? (adName.match(posRegex)[0]).toString() : false;

      // update ad name string & targeting based on url params
      if (overrideOn) {

        if (debugValues.sbs.hasOwnProperty("site")) {
          name = updateName(name, "site", debugValues.sbs.site);
        }

        if (debugValues.sbs.hasOwnProperty("section")) {
          name = updateName(name, "section", debugValues.sbs.section);
          drupalSettings.dfp[adName] = updateSectionTargeting(drupalSettings.dfp[adName]);
        }

        // only done to make for easy reading of Drupal.settings.dfp object
        // we already have the correct value for the name var in this scope
        if (debugValues.sbs.hasOwnProperty("site") || debugValues.sbs.hasOwnProperty("section")) {
          drupalSettings.dfp[adName].adunit = name;
        }

        drupalSettings.dfp[adName] = updateTargeting(drupalSettings.dfp[adName]);
      }

      // remove special characters from the slot name
      name = name.replace(/[^0-9a-z_\.\/\-]/gi, "");
      googleAdSlot = window.googletag.defineSlot(name, sizes, id);
      rubitest = googleAdSlot.addService(window.googletag.pubads());
      googleAdSlot.setTargeting('device', deviceType);

      rubiconAccountId = drupalSettings.rubiconAccountId;
      if (rubiconAccountId !== undefined) {
        window.rubicontag.setTargetingForGPTSlot(rubitest);
      }

      if (posNum !== false) {
        googleAdSlot.setTargeting('pos', posNum);
      }

      // Set the keywords from the tokens on the page
      if (drupalSettings.dfp[adName].targeting_processed) {
        targeting_processed = drupalSettings.dfp[adName].targeting_processed;

        for (i in targeting_processed) {
          if (targeting_processed.hasOwnProperty(i)) {
            target = targeting_processed[i].target;
            value = targeting_processed[i].value;
            googleAdSlot.setTargeting(target, value);
          }
        }
      }
    });
  };

  defineRubiconSlot = function (adName, deviceType, overrideOn) {
    window.rubicontag.cmd.push(function () {
      var rubiconAdSlot,
        name = drupalSettings.dfp[adName].adunit + '_' + deviceType,
        sizes = getValidRubiconSizes(adName, deviceType),
        id = drupalSettings.dfp[adName].placeholder_id;

      // update ad name string & targeting based on url params
      if (overrideOn) {
        if (debugValues.sbs.hasOwnProperty("site")) {
          name = updateName(name, "site", debugValues.sbs.site);
        }

        if (debugValues.sbs.hasOwnProperty("section")) {
          name = updateName(name, "section", debugValues.sbs.section);
          drupalSettings.dfp[adName] = updateSectionTargeting(drupalSettings.dfp[adName]);
        }

        // only done to make for easy reading of Drupal.settings.dfp object
        // we already have the correct value for the name var in this scope
        if (debugValues.sbs.hasOwnProperty("site") || debugValues.sbs.hasOwnProperty("section")) {
          drupalSettings.dfp[adName].adunit = name;
        }

        drupalSettings.dfp[adName] = updateTargeting(drupalSettings.dfp[adName]);
      }

      // remove special characters from the slot name
      name = name.replace(/[^0-9a-z_\.\/\-]/gi, "");
      rubiconAdSlot = window.rubicontag.defineSlot(name, sizes, id).setPosition('atf');
    });
  };

  displayAds = function (slotNames, deviceType) {
    var i,
      name;

    slotsTotal = slotNames.length;

    for (i = 0; i < slotsTotal; i = i + 1) {
      name = slotNames[i];
      displayAd(name, deviceType);
    }
  };

  getValidSizes = function (adName, deviceType) {
    var validSizes = settings.displayModeMatrix[deviceType][adName],
      i,
      blockMainElem = $("#main #block-system-main .content"),
      hasContentElem = (blockMainElem.length > 0),
      contentElemWidth;

    // mobile doesn't use overrides as it always has the same ads no matter what
    // relies on the existence of #main #block-system-main .content
    if (deviceType !== "mobile" && hasContentElem) {
      contentElemWidth = blockMainElem.width();
      for (i in settings.gridModeOverride) {
        if (settings.gridModeOverride.hasOwnProperty(i) && contentElemWidth < i) {
          if (settings.gridModeOverride[i].hasOwnProperty(adName)) {
            validSizes = settings.gridModeOverride[i][adName];
            break;
          }
        }
      }
    }

    return validSizes;
  };

  getValidRubiconSizes = function (adName, deviceType) {
    var validSizes = settings.rubiconDisplayModeMatrix[deviceType][adName],
      i,
      blockMainElem = $("#main #block-system-main .content"),
      hasContentElem = (blockMainElem.length > 0),
      contentElemWidth;

    // mobile doesn't use overrides as it always has the same ads no matter what
    // relies on the existence of #main #block-system-main .content
    if (deviceType !== "mobile" && hasContentElem) {
      contentElemWidth = blockMainElem.width();
      for (i in settings.gridModeOverride) {
        if (settings.gridModeOverride.hasOwnProperty(i) && contentElemWidth < i) {
          if (settings.gridModeOverride[i].hasOwnProperty(adName)) {
            validSizes = settings.gridModeOverride[i][adName];
            break;
          }
        }
      }
    }

    return validSizes;
  };

  displayAd = function (adName, deviceType) {
    window.googletag.cmd.push(function () {
      var $adWrapper = $('#' + drupalSettings.dfp[adName].placeholder_id);
      settings.dfp.adSlug = settings.dfp.adSlug || $adWrapper.find('.slug');
      window.googletag.display(drupalSettings.dfp[adName].placeholder_id);
      $adWrapper.parents("." + settings.dfp.wrapperClass + ":first").addClass("active");
      settings.dfp.adWrappers.push($adWrapper);
      //$adWrapper.parents(".dfp-tag-wrapper:first").addClass("active");
    });
  };

  getDebugValues = function () {
    var i,
      j,
      posArray;

    for (i = 0; i < debugKeys.sbs.length; i = i + 1) {
      if (debugKeys.sbs[i] === 'pos' && SBS.getUrlParameter(debugKeys.sbs[i]) !== null) { // create an array of positions if defined.
        posArray = SBS.getUrlParameter(debugKeys.sbs[i]).split(",");

        for (j = 0; j < posArray.length; j = j + 1) {
          posArray[j] = 'slot' + posArray[j];
        }

        debugValues.sbs[debugKeys.sbs[i]] = posArray;
      } else if (SBS.getUrlParameter(debugKeys.sbs[i]) !== null) { // default single string data
        debugValues.sbs[debugKeys.sbs[i]] = SBS.getUrlParameter(debugKeys.sbs[i]);
      }
    }

    for (i = 0; i < debugKeys.targeting_processed.length; i = i + 1) {
      if (SBS.getUrlParameter(debugKeys.targeting_processed[i]) !== null) {
        debugValues.targeting_processed[debugKeys.targeting_processed[i]] = SBS.getUrlParameter(debugKeys.targeting_processed[i]);
      }
    }
  };

  reAppendSlugs = function() {
    var slug = settings.dfp.adSlug[0].outerHTML;
    var ads = settings.dfp.adWrappers;
    for(var i = 0; i<ads.length; i++) {
      $(ads[i]).append(slug); // TVOC-146 Advertisement labels vanish...
    }
  };

  renderEndedHandler = function (event) {
    var slotId = event.slot.getAdUnitPath().split('/').pop().split('_')[0];

    if (slotId === 'slot1' && !event.isEmpty) {
      $('.region-ad-takeover').show();
    }

    slotsRenderedCount = slotsRenderedCount + 1;
    if (slotsRenderedCount >= slotsTotal) {
      window.setTimeout(function () {
        $(document).trigger('ads_ready');
        reAppendSlugs();
      }, 500);
    }
  };

  setupRubicon = function (rubiconAccountId) {
    var rctJs,
      rctNode;

    rctJs = document.createElement('script');
    rctJs.type = 'text/javascript';
    rctJs.async = true;
    rctJs.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//ads.rubiconproject.com/header/' + rubiconAccountId + '.js';
    rctNode = document.getElementsByTagName('script')[0];
    rctNode.parentNode.appendChild(rctJs);
  };

  gptRun = function () {
    var gptJs,
      gptNode;

    if (gptRan) {
      return;
    }
    gptRan = true;

    gptJs = document.createElement("script");
    gptJs.async = true;
    gptJs.type = "text/javascript";
    gptJs.src = document.location.protocol + "//www.googletagservices.com/tag/js/gpt.js";
    gptNode = document.getElementsByTagName("script")[0];
    gptNode.parentNode.insertBefore(gptJs, gptNode);
  };

  setSite = function (uri) {
    var site, parser;
    if (typeof(uri) === 'undefined' || uri === '' || uri.indexOf('http') < 0) {
      uri = window.document.location.href;
    }
    parser = window.document.createElement('a');
    parser.href = uri;
    site = parser.hostname;
    return site;
  };

  load = function (options) {
    var deviceType = SBS.globals.getDisplaymode(),
      $adDivs,
      slots,
      gptJs,
      gptNode,
      i,
      rubiconAccountId;

      // match debugging mode parameter
      for (i = 0; i < debugOnKeys.length; i = i + 1) {
        debugOn = (SBS.getUrlParameter(debugOnKeys[i]) !== null) ? true : debugOn;
      }

      if (debugOn) {
        getDebugValues();
      }

      // get debug key/val pairs
      // and add to debugValues object

      rubiconAccountId = drupalSettings.rubiconAccountId;
      if (rubiconAccountId !== undefined) {
        window.rubicontag = window.rubicontag || {};
        window.rubicontag.cmd = window.rubicontag.cmd || [];

        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];

        setupRubicon(rubiconAccountId);

        settings = underscore.extend(defaults, options);

        deviceType = (deviceType === "hires") ? "desktop" : deviceType;
        $adDivs = $(settings.dfp.wrapperSelector);

        slots = getSlots($adDivs, deviceType);

        window.rubicontag.cmd.push(function() {
          defineRubiconSlots(slots, deviceType);

          window.rubicontag.addKW('fastlane-prototype-test');
          window.rubicontag.setFPI('domain', setSite());
          window.rubicontag.run(gptRun);
        });

        window.googletag.cmd.push(function() {
          defineSlots(slots, deviceType);

          window.googletag.pubads().enableAsyncRendering();
          window.googletag.pubads().collapseEmptyDivs();
          window.googletag.pubads().addEventListener('slotRenderEnded', renderEndedHandler);
          window.googletag.enableServices();
          displayAds(slots, deviceType);

        });

        setTimeout(gptRun, 1000);

      }

  };

  return {
    load: load
  };

}(jQuery, Drupal.settings, window._));
;
/*globals window, jQuery, document, SBS*/
(function ($) {
  "use strict";

  $(function () {
    $('.embed_resource_coveritlive').each(function () {
      var width = $(this).width(),
        height = $(this).height(),
        src;

      if ($('html').hasClass('displaymode-not-mobile')) {
        src = $('iframe', this).attr('src')
          .replace(/width=[0-9]+/, 'width=' + width)
          .replace(/height=[0-9]+/, 'height=' + height)
          .replace(/ipod=y/, '');
        $('iframe', this).attr('src', src);
      }
    });
  });
}(jQuery));

;
/*globals window, jQuery, document, SBS*/
/*jslint nomen: true*/
window.SBS = window.SBS || {};
window.SBS.audio = (function ($) {
  "use strict";

  // public
  var load;

  load = function (options) {
    var defaults = {
        supplied: (SBS.agent !== undefined && SBS.agent.OS !== undefined && SBS.agent.OS === 'Android') ? "m4a,mp3" : "mp3",
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: false,
        errorAlerts: false,
        consoleAlerts: false,
        warningAlerts: false,
        //errorAlerts: true,
        //consoleAlerts: true,
        //warningAlerts: true,
        containerSelectorPrefix: "#container-"
      },
      settings = $.extend(true, {}, defaults, options),
      mediaElement,
      $mediaElement,
      jplayerOptions = settings,
      analyticsInstance,
      analyticsOptions,
      $jplayer,
      hasPlayed = false,
      hasCompleted = false;

    // fail silently if required params are missing
    if (!settings.id || !settings.url || !settings.swfPath) {
      return;
    }

    $jplayer = $("#" + settings.id);

    if (settings.id.match(/ondemandplayer-/i)) {
      var audioName = '';
      if (settings.channel !== '' && settings.channel !== undefined) {
        audioName += settings.channel;
      }
      if (settings.genre !== '' && settings.genre !== undefined) {
        if (settings.channel !== '' && settings.channel !== undefined) {
          audioName += ' - ';
        }
        audioName += settings.genre + ' - catchup - ';
      }
      audioName += settings.title + ' ' + settings.description;

      analyticsOptions = {
        fixed: {
          "audio.playername": settings.id,
          "audio.name": audioName
        },
        eventBased: {
          "audio.play": {send: false},
          "audio.segment": {throttle: true, throttleDuration: 120 * 1000, type: "counter"}, // only send segment updates every 2 minutes
          "audio.complete": {},
          "audio.length": {send: false}
        }
      };

    } else {
      analyticsOptions = {
        fixed: {
          "audio.playername": settings.id,
          "audio.name": settings.title
        },
        eventBased: {
          "audio.play": {send: false},
          "audio.segment": {throttle: true, throttleDuration: 120 * 1000, type: "counter"}, // only send segment updates every 2 minutes
          "audio.complete": {},
          "audio.length": {send: false}
        }
      };
    }

    // add program value if available
    if (settings.hasOwnProperty("config") && settings.config.hasOwnProperty("program")) {
      analyticsOptions.fixed["audio.program"] = settings.config.program;
    }

    analyticsInstance = SBS.analyticsSender.init($jplayer, analyticsOptions);

    jplayerOptions.ready = function () {
      var setMediaOpts = {},
        suppliedArray = settings.supplied.split(","),
        suppliedLen = suppliedArray.length,
        i;

      for (i = 0; i < suppliedLen; i = i + 1) {
        setMediaOpts[suppliedArray[i]] = settings.url;
      }
      $(this).jPlayer("setMedia", setMediaOpts);
    };

    jplayerOptions.play = function () {
      if (!hasPlayed) {
        $jplayer.trigger("audio.play", ["true", analyticsInstance]);
        hasPlayed = true;
      }
    };

    jplayerOptions.ended = function () {
      if (!hasCompleted) { // first reset the play value to false
        $jplayer.trigger("audio.play", ["false", analyticsInstance])
                .trigger("audio.complete", ["true", analyticsInstance]);

        hasCompleted = true;
      }
    };

    jplayerOptions.loadeddata = function (event) {
      $jplayer.trigger("audio.length", [event.jPlayer.status.duration, analyticsInstance]);
    };

    jplayerOptions.timeupdate = function (event) {
      if (hasPlayed) {
        $jplayer.trigger("audio.segment", ["2|", analyticsInstance]);
      }
    };

    jplayerOptions.cssSelectorAncestor = settings.containerSelectorPrefix + settings.id;
    $jplayer.jPlayer(jplayerOptions);

    // Update the amount buffered indicator
    $mediaElement = $("#" + settings.id + " audio:first");
    if ($mediaElement.length > 0) {
      mediaElement = $mediaElement[0];
      (function updateBuffer() {
        if (mediaElement.buffered.length > 0) {
          var buffered = (mediaElement.buffered.end(0) / mediaElement.duration) * 100 + "%";
          $(settings.cssSelectorAncestor).find(".jp-buffer-bar").width(buffered);
        }

        SBS.requestAnimationFrame(updateBuffer);
      }());
    }

    $(settings.cssSelectorAncestor).find(".sbs-jp-title").html(settings.title);
    $(settings.cssSelectorAncestor).find(".sbs-jp-description").html(settings.description);
  };

  return {
    load: load
  };

}(jQuery));
;
/*globals window, document, jQuery, SBS, s*/

window.SBS = window.SBS || {};
window.SBS.omniture = (function ($) {
  "use strict";

  // public
  var setup,
    get;

  // public
  setup = function (tokenValues, s) {
    var t = tokenValues || false;

    if (t !== false) {
      if (t.nodeId !== "") {
        s.pageName = t.siteMachinename + ":" + t.urlArgs1 + ":" + t.nodeContentType + ":" + t.nodeTitle;
      } else {
        s.pageName = t.siteMachinename + ":" + t.urlArgs1 + ":index:" + t.pageTitle;
      }

      s.prop1 = t.siteMachinename; // site / vertical. eg naca, food, sport

      // Add in division if it's set. eg news, in naca:news
      if (t.omnitureDivision !== "") {
        s.prop1 = s.prop1 + ':' + t.omnitureDivision;
      }

      if (t.nodeId !== "") {
        s.prop2 = s.prop1 + ':' + t.urlArgs1; // subsection 1
        s.prop6 = t.nodeTitle; // pageTitle
        s.prop7 = t.nodeUuid; // pageId
        s.prop8 = t.nodeContentType; // contentType
      } else {
        s.prop2 = s.prop1 + ':' + t.urlArgs1; // subsection 1
        s.prop3 = s.prop2 + ':' + t.urlArgs2; // subsection 2
        s.prop4 = s.prop3 + ':' + t.urlArgs3; // subsection 3
        s.prop5 = s.prop4 + ':' + t.urlArgs4; // subsection 4
        s.prop6 = t.pageTitle; // pageTitle
        s.prop8 = 'index';
      }

      if (t.query === "latest" || t.query === "home") {
        s.prop8 = 'homepage';
      }

      if (t.nodeContentType === "video") {
        s.prop10 = t.nodeTitle; // mediaTitle
      }

      s.prop20 = t.siteMachinename; // division

      if (t.nodeContentType === "blog") {
        s.prop21 = t.nodeArticleType; // blog group
        s.prop22 = t.nodeAuthor; // blog author
        s.prop23 = t.nodeTitle; // blog title
      }
    }

    if (SBS.omniture[t.siteMachinename] && SBS.omniture[t.siteMachinename].setup) {
      SBS.omniture[t.siteMachinename].setup(t, s);
    }
  };

  get = function () {
    var propRegex = /^pagename|^prop/i,
      prop,
      matches,
      results = {};

    for (prop in s) {
      if (s.hasOwnProperty(prop)) {
        matches = prop.match(propRegex);
        if (matches && matches.length > 0) {
          results[prop] = s[prop];
        }
      }
    }

    return results;
  };

  // private
  return {
    setup: setup,
    get: get
  };

}(jQuery));
;
/*globals document, Drupal, jQuery*/
(function ($) {
  "use strict";

  var promptClass = "prompt";

  $.fn.prompt = function (options) {

    var defaults = {
        preventSubmit: true
      };

    this.each(function (index, elem) {

      var $elem = $(elem),
        promptText = $elem.attr("title") || "",
        $parentForm = $elem.closest("form"),
        settings = $.extend(true, {}, defaults, options);

      // allows override by class
      settings.preventSubmit = ($elem.hasClass("force-submit")) ? false : true;

      if (promptText) {
        $elem.addClass(promptClass);

        $elem.focus(function () {
          promptText = $elem.attr("title");
          if ($elem.val() === promptText) {
            $elem.val("");
            $elem.removeClass(promptClass + "-active");
          }
        });

        $elem.bind("blur change", function () {
          promptText = $elem.attr("title");
          if ($elem.val() === '') {
            $elem.val(promptText);
            $elem.addClass(promptClass + "-active");
          }
        });

        $parentForm.submit(function (e) {
          promptText = $elem.attr("title");
          if ($elem.val() === promptText) {
            if (settings.preventSubmit) {
              e.preventDefault();
            } else {
              $elem.val("");
            }
          }
        });

        $parentForm.bind("reset", function (e) {
          promptText = $elem.attr("title");
          if ($elem.val() === '') {
            $elem.val(promptText);
            $elem.addClass(promptClass + "-active");
          }
        });

        if (promptText && $elem.val() === "") {
          promptText = $elem.attr("title");
          $elem.val(promptText);
          $elem.addClass(promptClass + "-active");
        }
      }
    });
  };

}(jQuery));;
/*globals window, jQuery*/
(function ($) {
  "use strict";

  $.fn.hoverDelay = function (options) {

    var defaults = {
        delay: 250,
        className: "hover"
      },
      settings = $.extend(true, {}, defaults, options);

    this.each(function (index, elem) {

      var $elem = $(elem),
        active = false;

      $elem.bind("mouseenter", function (e) {
        active = true;
        window.setTimeout(function () {
          if (active) {
            $elem.addClass(settings.className);
          }
        }, settings.delay);
      });

      $elem.bind("mouseleave", function (e) {
        active = false;
        $elem.removeClass(settings.className);
      });

    });
  };

}(jQuery));;
/*globals jQuery, window*/
(function (global, $) {
  "use strict";

  var special = $.event.special,
    uid = 'D' + (+new Date());

  // add new events called scrollstart & scrollstop to jQuery
  special.scrollstart = {
    setup: function () {

      var timer,
        handler;

      handler =  function (e) {

        var myargs = arguments;

        if (timer) {
          global.clearTimeout(timer);
        } else {
          e.type = 'scrollstart';
          $.event.handle.apply(this, myargs);
        }

        timer = global.setTimeout(function () {
          timer = null;
        }, special.scrollstop.latency);

      };

      $(this).bind('scroll', handler).data(uid, handler);

    },
    teardown: function () {
      $(this).unbind('scroll', $(this).data(uid));
    }
  };

}(window, jQuery));
;
/*globals jQuery, window, document, SBS*/
(function (global, $) {
  "use strict";

  var special = $.event.special,
    uid = 'D' + (+new Date() + 1);

  special.scrollstop = {
    latency: 300,
    setup: function () {

      var timer,
        handler;

      handler = function (e) {

        var that = this,
          myargs = arguments;

        if (timer) {
          global.clearTimeout(timer);
        }

        timer = global.setTimeout(function () {
          timer = null;
          e.type = 'scrollstop';
          $.event.handle.apply(that, myargs);
        }, special.scrollstop.latency);

      };

      $(this).bind('scroll', handler).data(uid, handler);

    },
    teardown: function () {
      $(this).unbind('scroll', $(this).data(uid));
    }
  };

}(window, jQuery));
;
/*globals jQuery, window, document, SBS*/
(function (global, $) {
  "use strict";

  var special = $.event.special,
    uid = 'D' + (+new Date() + 2);

  // make sure dependencies exist
  if (!global || !$) {
    return;
  }

  special.resizestop = {
    latency: 300,
    setup: function () {

      var timer,
        handler;

      handler = function (e) {

        var that = this,
          $that = $(that),
          myargs = arguments,
          data = {};

        if (timer) {
          global.clearTimeout(timer);
        }

        timer = global.setTimeout(function () {
          timer = null;
          e.type = 'resizestop';
          data = {
            width: $that.width(),
            height: $that.height()
          };

          $that.data("size", data);
          $.event.handle.apply(that, myargs);
        }, special.scrollstop.latency);

      };

      $(this).bind('resize', handler).data(uid, handler);

    },
    teardown: function () {
      $(this).unbind('resize', $(this).data(uid));
    }
  };

}(window, jQuery));
;
/*globals window, jQuery, document*/

(function ($, namespace) {
  "use strict";

  if (!namespace || !namespace.globals) {
    return;
  }

  /**
   * Adds active classes to appropriate elements
   *
   * @this {window.SBS}
   * @param {selector} jQuery selector for elements user interacts with
   * @param {options} configuration options
   *  Defaults are:
   *  preventDefault: true                (defaults to preventDefault behaviour)
   *  parentSelector: false               (defaults to apply active class to element acted upon)
   *  childSelector: false                (defaults to apply active class to element acted upon)
   *  clickOutDisable: false              whether or not clicking out of element deactivates (defaults to false)
   *  activeClass: "active"               class to be used on active element (defaults to string "active")
   *  clickOutIgnoreSelector: false       selector to tell which clicked elements to ignore for triggering clickout (defaults to false)
   */
  namespace.activeClasses = function (selector, options) {
    var defaults = {
        preventDefault: true,
        parentSelector: false,
        clickOutIgnoreSelector: false,
        activateSelector: false,
        clickOutDisable: false,
        activeClass: "active",
        inactiveClass: "inactive"
      },
      settings = $.extend(true, {}, defaults, options),
      clickOrTouchEvent = namespace.globals.getClickOrTouchEvent(),
      $elems = $(selector);

    $elems.each(function (index, elem) {
      var $elem = $(elem),
        bindEvent,
        mode = "inactive";

      bindEvent = function (eventName, $elem) {

        var $targetElements,
          $clickOutIgnoreTarget,
          disableUI = false,
          addRemoveClasses;

        addRemoveClasses = function (e, targetElements) {

          var i,
            iLen = targetElements.length,
            $targetElement,
            $others;

          if (settings.preventDefault) {
            e.preventDefault();
          }

          if (disableUI) {
            disableUI = false;
            return;
          }

          e.stopPropagation();

          for (i = 0; i < iLen; i = i + 1) {
            $targetElement = $(targetElements[i]);

            if ($targetElement.hasClass(settings.activeClass)) {
              $targetElement.removeClass(settings.activeClass);
              $targetElement.addClass(settings.inactiveClass);
              mode = "inactive";
            } else if ($targetElement.hasClass(settings.inactiveClass)) {
              $targetElement.removeClass(settings.inactiveClass);
              $targetElement.addClass(settings.activeClass);
              mode = "active";
            } else {
              $targetElement.addClass(settings.activeClass);
              mode = "active";
            }
          }

          if (settings.parentSelector) {
            $others = $elems.closest(settings.parentSelector).not($targetElement);
            $others.removeClass(settings.activeClass);
            $others.addClass(settings.inactiveClass);
          }
        };

        $targetElements = [$elem[0]];

        if (settings.activateSelector) {
          $targetElements = $(settings.activateSelector);
        }

        if (settings.parentSelector) {
          $targetElements = $elem.closest(settings.parentSelector);
        }

        if (settings.clickOutIgnoreSelector) {
          if (settings.parentSelector) {
            $clickOutIgnoreTarget = $elem.closest(settings.parentSelector).find(settings.clickOutIgnoreSelector);
          } else {
            $clickOutIgnoreTarget = $(settings.clickOutIgnoreSelector);
          }
        }

        if (eventName === "touchstart") {

          $elem.bind('click', function (e) {
            e.preventDefault();
          });

          $elem.bind("touchmove", function (e) {
            disableUI = true;
          });

          $elem.bind("touchend", function (e) {
            addRemoveClasses(e, $targetElements);
          });

        } else {
          $elem.bind(eventName, function (e) {
            addRemoveClasses(e, $targetElements);
          });
        }

        if (settings.clickOutDisable) {
          $(document).bind(eventName, function (e) {
            if ($clickOutIgnoreTarget.has(e.target).length === 0 && mode === "active") {
              if (settings.parentSelector) {
                $clickOutIgnoreTarget.closest(settings.parentSelector).removeClass(settings.activeClass);
                $clickOutIgnoreTarget.closest(settings.parentSelector).addClass(settings.inactiveClass);
              } else {
                $clickOutIgnoreTarget.removeClass(settings.activeClass);
                $clickOutIgnoreTarget.addClass(settings.inactiveClass);
              }

              mode = "inactive";
            }
          });
        }
      };

      bindEvent(clickOrTouchEvent, $elem);
    });
  };

}(jQuery, window.SBS));;
/*globals window, jQuery*/
// usage
// var pinJanrain = $(element).pin([
//     [ condCallback, cssCallback ],
// ]);
// methods:
// - activate
// - deactivate
// - evaluate
(function ($) {
  "use strict";
  $.prototype.pin = function (conditions) {
    var withDataAndEvents = true,
      original = this,
      id = original[0].id,
      clone = this.clone(withDataAndEvents),
      activated = false;

    // public functions
    this.activate = function () { return undefined; };
    this.deactivate = function () { return undefined; };
    this.evaluate = function () { return undefined; };
    // handle element not exist
    if (!this.attr('id')) {
      return this;
    }

    // run through conditions. apply css for first
    // condition evaluating true, and break
    function evaluate() {
      var i,
        conditionFunction,
        cssFunction;

      for (i = 0; i < conditions.length; i = i + 1) {
        conditionFunction = conditions[i][0];
        cssFunction = conditions[i][1];

        if (conditionFunction()) {
          clone.css(cssFunction());
          break;
        }
      }
    }

    // activating takes element out of normal
    // dom order and makes it child of body
    // so we can use position absolute.
    // it uses a cloned element because we need
    // to keep the original
    function activate() {
      if (!activated) {
        original[0].id = '';
        original.hide();
        $('body').append(clone);
        evaluate();
        activated = true;
      }
    }
    // deactivating detaches the cloned element
    // and restores the original element
    function deactivate() {
      if (activated) {
        clone.detach();
        original[0].id = id;
        original.show();
        activated = false;
      }
    }

    $(window).scroll(function () {
      evaluate();
    });
    // activate on instantiation
    activate();
    // make these methods public
    this.activate = activate;
    this.deactivate = deactivate;
    // user can evaluate on their
    // own conditions
    this.evaluate = evaluate;
    return this;
  };
}(jQuery));
;
/*globals Spinner, Drupal, jQuery*/
(function ($) {
  "use strict";
  var opts = {
      lines: 17,
      length: 0,
      width: 2,
      radius: 12,
      corners: 1,
      rotate: 0,
      color: 'black',
      speed: 1.5,
      trail: 84,
      shadow: false,
      hwaccel: true,
      className: 'spinner',
      zIndex: 2e9,
      top: 'auto',
      left: 'auto'
    },
    activateSpinner,
    elem,
    target,
    spinner,
    beforeSend;

  activateSpinner = function () {
    elem = $('li.pager-next.first.last a.progress-disabled');
    if (elem[0]) {
      target = elem[0];
      spinner = new Spinner(opts).spin(target);
    }
  };

  // Need to check if Drupal.ajax is in the current context
  if (Drupal.ajax) {
    // Default Drupal ajax beforeSend
    beforeSend = Drupal.ajax.prototype.beforeSend;
    // Extend Drupal ajax beforeSend
    Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
      beforeSend.call(this, xmlhttprequest, options);
      activateSpinner();
    };
  }
}(jQuery));
;
window.SBS = window.SBS || {};
window.SBS.relatedVis = (function ($, underscore) {
    "use strict";

    // public
    let init,

    // private
    env,
    cxensewidgetid,
    nodeLanguage,
    siteName,
    setup,
    load,
    render,
    bind,
    pin,
    updateImages,
    convertFromSec,
    getRelated,
    getRelatedModel,
    getData,
    truncate,
    settings,
    basePath,
    styles = {
      video: {
        list: "thumbsmall",
        grid: "small"
      },
      content: {
        list: "thumb_small",
        grid: "single"
      }
    },
    defaults = {
      showTab: 0, // show the first tab by default
      args: [],
      jsPath: "profiles/sbsdistribution/themes/global/js/",
      template: "sbs.related",
      parentSelector: "#block-system-main > .content",
      wrapperID: "sbs-at-related",
      action: "after",
      type: "node",
      truncate: {
        title: 55,
        abstract: 165
      }
    },
    currentGridMode,
    isLoaded = false;

  // private

  /**
   * Call with no options for default behavior
   * This will show the tab of the current type (content or video)
   *
   * Customise
   * set showTab to 0 to show video tab on load, set to 1 to show
   * content tab on load. If only one tab available showTab has no effect.
   */
  init = function (options) {

    // Move the sidebar div up to its desired spot
    let $sidebarDiv = $("#sbs-sidebar");
    $sidebarDiv.detach();
    $sidebarDiv.appendTo( "#block-system-main > .content" );

    // Removing Recommended side panel
    var url = window.location.href;
    var date = new window.Date;
    // if(url.indexOf("programs/eurovision") !== -1 && date.getMonth() == 1 && (date.getDate() > 6  && date.getDate() < 12) ){
    //     return;
    // }

    //   var id,
    //   classification = (document.querySelector('meta[name="cXenseParse:sba-classification"]')) ? document.querySelector('meta[name="cXenseParse:sba-classification"]').getAttribute("content") : '',
    //   metaSiteName = (document.querySelector('meta[property="og:site_name"]')) ? document.querySelector('meta[property="og:site_name"]').getAttribute("content") : '';

    // env = window.Drupal.settings.SBS.environment;

    // if (metaSiteName === 'NITV' && classification === "g") {
    //   cxensewidgetid = '1e85770e2a00a99517da10ca0bc750a0bdcbb02c';
    // } else {
    //   cxensewidgetid = (Drupal && Drupal.settings && Drupal.settings.SBS && Drupal.settings.SBS.cxensewidgetid) ? window.Drupal.settings.SBS.cxensewidgetid : "5a6c3d66913fb2d27038e58f653492ee59fed369";
    // }

    basePath = Drupal.settings.basePath;
    settings = $.extend(true, {}, defaults, options);

    currentGridMode = SBS.globals.getGridmode();
    load();

    $(document).bind("displaymode", function (e, mode) {
      if (mode === "mobile") {
        currentGridMode = "";
        // updateImages(mode); // Forcing the correct preset image to be used for cXense Recs (currently uses Gridmode instead of displayMode, and cannot detect the mobile mode switch)
      } else {
        currentGridMode = SBS.globals.getGridmode();
      }
      load();
      pin(currentGridMode);
    });

    $(window).bind("scroll", function () {
      pin(currentGridMode);
    });

    $(document).bind('displaygrid', function (e, mode) {
      if (mode !== currentGridMode) {
        // updateImages(mode);
        pin(mode);
        currentGridMode = mode;
      }
    });
  };

  pin = function (mode) {
    var $related = $("#" + settings.wrapperID),
      $content = $(settings.parentSelector),
      contentHeight = $content.height(),
      relatedHeight = $related.outerHeight(),
      maxScroll = contentHeight - relatedHeight + 40,
      diff,
      isAbove = function () {
        var scrollTop = $(window).scrollTop(),
          eTop = $content.offset().top;

        diff = eTop - scrollTop - 40;
        //console.log(eTop, scrollTop, eTop - scrollTop - 40, contentHeight, relatedHeight);
        return (diff < 0) ? true : false; // -40 because main-related has -40 top position
      };


    if (mode === "grid-5" || mode === "grid-4") {
      if (isAbove()) {
        if (maxScroll + diff - 40 < 0) {
          $related.removeClass("pin");
          $related.addClass("pinBottom");
        } else {
          $related.removeClass("pinBottom");
          $related.addClass("pin");
        }
      } else {
        $related.removeClass("pin pinBottom");
      }
    } else {
      $related.removeClass("pin pinBottom");
    }
  };

  load = function () {
    if (settings.args.length > 0 && !isLoaded) {
      isLoaded = true;
      setup();
    }
  };

  // updateImages = function (mode) {
  //   var $images = $("." + settings.wrapperID).find(".at-table-column img"),
  //     styleVideos = (mode === "grid-3") ? styles.video.grid : styles.video.list,
  //     styleStories = (mode === "grid-3") ? styles.content.grid : styles.content.list;

  //   if ($('body').hasClass('node-type-gallery') && (mode === "grid-4" || mode === "grid-5")) {
  //     styleStories = styles.content.grid;
  //     styleVideos =  styles.video.grid;
  //   }

  //   $images.each(function (index, elem) {
  //     var imgRegex = /styles\/[\w]*/gi,
  //       vidRegex = /thumbsmall\.|small\./gi,
  //       $img = $(elem),
  //       src = $img.attr('src');

  //     if (src.search(/-thumbsmall|_thumbsmall|-small|_small/gi) !== -1) {
  //       $img.attr("src", $img.attr("src").replace(vidRegex, styleVideos + "."));
  //     }
  //     $img.attr("src", $img.attr("src").replace(imgRegex, "styles/" + styleStories));
  //     src = '';
  //   });
  // };

  getRelatedModel = function (list, type) {

    var maxItems = 6,
      i,
      iLen = list.length,
      item,
      relatedItem,
      imageStyle = styles[type].list,
      imageStyleMpx = styles.video.list,
      pattern = /styles\/[a-zA-Z0-9_\-]*\//gi,
      patternMpx = "large.",
      oldSrc,
      patternHasStyles = /styles\//i,
      patternHasStylesMpx = "large.",
      rtn = [],
      datetime,
      newItemUrl,
      urlSplit = [],
      numListItem = 0;

    if ($('body').hasClass('node-type-gallery') && (currentGridMode === "grid-4" || currentGridMode === "grid-5")) {
      imageStyle = styles[type].grid;
      imageStyleMpx =  styles.video.grid;
    }

    for (i = 0; i < iLen; i = i + 1) {
      if (i >= (maxItems + numListItem)) {
        break;
      }

      item = list[i];

      //Check if it's list item and skip.
      if(item['sba-contenttype'] == 'List Item') {
        numListItem++;
        continue;
      }

      relatedItem = {};

      newItemUrl = item.url;
      urlSplit = [];
      if ((item.url.split("?").length - 1) > 1) {
        urlSplit = item.url.split("?");
        newItemUrl = urlSplit[0];
        for (var i = 1; i < urlSplit.length; i++) {
          if (i == 1) {
            newItemUrl = newItemUrl + '?' + urlSplit[i];
          } else{
            newItemUrl = newItemUrl + '&' + urlSplit[i];
          }
        }
      }

      relatedItem.url = newItemUrl;
      relatedItem.dataurl = item.hasOwnProperty("click_url") ? item.click_url + "?cx_navSource=related-side-cx" : newItemUrl;
      relatedItem.id = item.id || item.nid || "";
      relatedItem.title = item.title;

      if (item.hasOwnProperty("sba-food-cuisine")) {
        relatedItem.subtitle = item['sba-food-cuisine'];
      } else if (item.hasOwnProperty("publishtime")) {
        datetime = new Date(item.publishtime);
        relatedItem.subtitle = datetime.getDate() + " " + SBS.globals.getMonthName(datetime, "short") + " " + datetime.getFullYear() + " - " + SBS.globals.getTime(datetime);
      } else {
        relatedItem.subtitle = null;
      }

      relatedItem.duration = (item.duration) ? convertFromSec(item.duration) : null;
      relatedItem.abstract = item.abstract || null;

      // handle various differences between image values
      if (item.hasOwnProperty("og-image")) {
        oldSrc = $.isArray(item["og-image"]) ? item["og-image"][0] : item["og-image"];
        relatedItem.imgsrc = oldSrc.replace('http://', "//");
        if (oldSrc.search(patternHasStyles) !== -1) {
          relatedItem.imgsrc = oldSrc.replace(pattern, "styles/" + imageStyle + "/");
        } else {
          if(oldSrc.search(patternHasStylesMpx) !== -1) {
            relatedItem.imgsrc = oldSrc;
          } else {
            relatedItem.imgsrc = oldSrc.replace(/files\//gi, "files/styles/" + imageStyle + "/public/");
          }
        }
      } else {
        relatedItem.imgsrc = null;
      }
      relatedItem.contenttype = item.hasOwnProperty("sba-contenttype") && ((item["sba-contenttype"] === 'Video') || (item["sba-contenttype"].indexOf("Video") !== -1)) ? "video" : "article";
      relatedItem.style = ($('body').hasClass('news') && relatedItem.imgsrc === null ? 'style-text' + ' type_' + relatedItem.contenttype : 'style-media' + ' type_' + relatedItem.contenttype);
      relatedItem.imgalt = item.title;

      rtn.push(relatedItem);
    }

    return rtn;
  };

  convertFromSec = function (sec) {
    var h = parseInt(sec / 3600, 10),
      m = parseInt((sec - h * 3600) / 60, 10),
      s = parseInt(sec % 60, 10);
    m = m > 9 ? m : ('0' + m);
    s = s > 9 ? s : ('0' + s);
    return (h > 0 ? h + ':' + m + ':' + s : m + ':' + s);
  };

  setup = function () {
    var data,
        keywords;

    keywords = (Drupal && Drupal.settings && Drupal.settings.SBS && Drupal.settings.SBS.node_keywords)? Drupal.settings.SBS.node_keywords : [];
    data = {
      articles: [],
      wrapperID: settings.wrapperID,
      keywords: keywords,
    };
    SBS.template(settings.template, data, function (html) {
      render(html);
    });
    //Place the keywords-wrapper in its correct position within the related-div
    $(document).ready(function(){
      $('.keywords-wrapper').appendTo('#sbs-sidebar');
     });
  };


  render = function (html) {
    $(settings.parentSelector)[settings.action](html);
    bind();
    truncate();
    Drupal.attachBehaviors();
  };

  truncate = function () {
    // TODO: figure out a better way to do this truncation
    if (currentGridMode === "grid-3") {
      SBS.truncate.init({
        selector: "." + settings.wrapperID + " .stories .abstract",
        length: settings.truncate.abstract
      });

      SBS.truncate.init({
        selector: "." + settings.wrapperID + " .stories .title h3 a",
        length: settings.truncate.title
      });
    }
  };

  bind = function () {
    var $tabs = $("#" + settings.wrapperID).find(".at-tab-list .tab"),
      $tabContents = $("#" + settings.wrapperID).find(".at-tab-content .tab"),
      bindClick;

    bindClick = function ($tab, index) {
      $tab.click(function (e) {
        e.preventDefault();

        $tabs.removeClass("active");
        $tab.addClass("active");
        $tab.closest(".at-tab-list").removeClass("tab-0-active tab-1-active").addClass("tab-" + index + "-active");

        $tabContents.removeClass("active");
        $($tabContents[index]).addClass("active");
      });
    };

    $tabs.each(function (index, elem) {
      var $tab = $(elem);
      bindClick($tab, index);
      if (currentGridMode === 'grid-4') {
        $tab.html($tab.html().replace(/Related\s*/g, ''));
      }
      // set active tab
      $tab.filter(function () { return (index === settings.showTab || $tabs.length === 1); }).click();
    });
  };

  return {
    init: init
  };

}(jQuery, window._));
;
/*globals jQuery, Drupal, window, document */
(function ($, Drupal, SBS) {
  "use strict";

  // make sure dependencies exist
  if (!$ || !Drupal || !SBS || !SBS.globals) {
    return;
  }

  // mobile and tablet adslot #2 is moved below the content header in the #main content block

  SBS.moveAds = function () {
    var moveConfig = {
        defaults: {
          action: "prepend"
        },
        tablet: {
          slot2: {
            element: "#block-dfp-slot2",
            moveTo: "#main"
          },
          slot3: {
            element: "#block-dfp-slot3",
            moveTo: ".region-sidebar-first"
          },
          slot7: {
            element: "#block-dfp-slot7",
            moveTo: ".region-sidebar-first",
            action: "append"
          }
        },
        mobile: {
          slot2: {
            element: "#block-dfp-slot2",
            moveTo: "#main"
          },
          slot3: {
            element: "#block-dfp-slot3",
            moveTo: ".region-sidebar-first"
          },
          slot7: {
            element: "#block-dfp-slot7",
            moveTo: ".region-sidebar-first",
            action: "append"
          }
        }
      },
      mode = SBS.globals.getDisplaymode(),
      modeConfig,
      settings,
      slotName;

    modeConfig = moveConfig[mode] || false;
    settings = moveConfig.defaults;

    if (modeConfig !== false) {
      for (slotName in modeConfig) {
        if (modeConfig.hasOwnProperty(slotName)) {
          settings = (modeConfig.defaults) ? $.extend(settings, modeConfig.defaults) : settings;
          settings = $.extend(settings, modeConfig[slotName]);
          $(settings.moveTo)[settings.action]($(settings.element));
        }
      }
    }
  };

}(jQuery, window.Drupal, window.SBS));
;
/*globals window, document, jQuery, Drupal, SBS */

(function ($, SBS) {
  "use strict";

  SBS = SBS || {};
  SBS.sizeSidebar = (function () {

    var fixHeight = function () {
      var rhcHeight,
        mainHeight,
        sidebar = $('#sidebar-first'),
        hairline = sidebar.find(".hairline"),
        sidebarMarginTop,
        displaymode = SBS.globals.getDisplaymode();

      if ((displaymode === "hires" || displaymode === "desktop") && sidebar.length > 0) {
        hairline.removeAttr("style");
        sidebarMarginTop = parseInt(sidebar.css("marginTop").replace("px", ""), 10);
        rhcHeight = sidebar.outerHeight() + sidebarMarginTop;
        mainHeight = $('#main').outerHeight();
        if (sidebarMarginTop < 0) { // check to see if the right column has been repositioned with a negative top margin and adjust accordingly
          mainHeight = mainHeight + (sidebarMarginTop * -1);
        }

        if (mainHeight > rhcHeight) {
          hairline.height(mainHeight); // have to change size of hairline because it has borders on it
        }
      }
    };

    $(document).bind("ads_ready update_sidebar_height", function () {
      fixHeight();
    });
  }());

}(jQuery, window.SBS));
;
/*globals window, document, jQuery*/
window.SBS = window.SBS || {};
window.SBS.jumpMenu = (function ($) {
  "use strict";

  // public
  var init,

    // private
    defaults = {
      changeEvent: "scroll",
      selectorPrefix: "#",
      regexPrefix: "#",
      selectorRegex: /#[\w\-\_]*/gi
    };

  // public
  init = function (options) {

    var settings = $.extend(true, {}, defaults, options),
      $selectElems;

    if (!settings.selector) {
      return;
    }

    $selectElems = $(settings.selector);
    $selectElems.each(function (index, elem) {

      $(elem).change(function () {
        var value = this.value,
          match,
          selectorString,
          $scrollTo,
          scrollTop;

        if (settings.hasOwnProperty("preprocess")) {
          settings.preprocess(this);
        }

        //console.log(this.value, this.value.match(settings.selectorRegex));
        if (settings.changeEvent === "scroll") {
          match = value.match(settings.selectorRegex);

          if (match.length > 0) {
            selectorString = match[0].replace(settings.regexPrefix, "");
            $scrollTo = $(settings.selectorPrefix + selectorString);
            scrollTop = $scrollTo.offset().top;
            $("html, body").animate({
              scrollTop: scrollTop
            });
          }
        } else if (settings.changeEvent === "navigate") {
          window.location.href = this.value;
        }
      });
    });
  };

  return {
    init: init
  };

}(jQuery));
;
/*globals window, document, jQuery*/
window.SBS = window.SBS || {};
window.SBS.tabJumpMenu = (function ($) {
  "use strict";

  // public
  var init,

    // private
    defaults = {

    };

  // public
  init = function (options) {

    var settings = $.extend(true, {}, defaults, options),
      $selectElems;

    if (!settings.selector) {
      return;
    }

    $selectElems = $(settings.selector);
    $selectElems.each(function (index, elem) {

      $('select', elem).change(function (e) {
        var value = this.value;

        e.preventDefault();
        // simulating same behaviour as clicking the real tab
        $('#' + value).click();
      });
    });
  };

  return {
    init: init
  };

}(jQuery));
;
/*globals window, document, jQuery*/
window.SBS = window.SBS || {};
window.SBS.anchorLinks = (function ($) {
  "use strict";

  // public
  var init,

    // private
    defaults = {
      selectorPrefix: "#",
      regexPrefix: "#",
      selectorRegex: /#[\w\-\_]*/gi,
      targetSelector: false
    };

  // public
  init = function (options) {

    var settings = $.extend(true, {}, defaults, options),
      $scrollTo,
      scrollTop,
      $anchorElems;

    function bind(elem, $scrollTo, scrollTop) {
      $(elem).bind("click", function (e) {
        e.preventDefault();
        scrollTop = $scrollTo.offset().top;
        $("html, body").animate({
          scrollTop: scrollTop
        });
      });
    }

    if (!settings.selector) {
      return;
    }

    $anchorElems = $(settings.selector);

    if (settings.targetSelector !== false) {
      $anchorElems.each(function (index, elem) {
        $scrollTo = $(settings.targetSelector);
        bind(elem, $scrollTo, scrollTop);
      });
    } else {
      $anchorElems.each(function (index, elem) {
        var href = $(elem).attr("href"),
          hrefMatch = href.match(settings.selectorRegex),
          selectorString;

        if (hrefMatch && hrefMatch.length > 0) {
          selectorString = hrefMatch[0].replace(settings.regexPrefix, "");
          $scrollTo = $(settings.selectorPrefix + selectorString);

          if ($scrollTo.length === 0) {
            $scrollTo = $(settings.selectorPrefix + selectorString.toLowerCase());
          }

          bind(elem, $scrollTo, scrollTop);
        }
      });

    }
  };

  return {
    init: init
  };

}(jQuery));
;
/*globals jQuery, Drupal, window, document */
(function ($, SBS, global) {
  "use strict";

  var cssTransition = ($.support.transition) ? true : false;

  // make sure dependencies exist
  if (!$ || !SBS || !SBS.globals) {
    return;
  }

  function getChildText(node) {
    var text = "",
      child;

    for (child = node.firstChild; !!child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        text += child.nodeValue;
      }
    }
    return text;
  }

  // mobile and tablet adslot #2 is moved below the content header in the #main content block

  SBS.facets = (function () {
    // public
    var init,

      // private
      loaded = false,
      setupActivation,
      setupCheckboxes,
      setupControls,
      setupOverlays,
      setupTags,
      defaults = {
        facetsSelector: "#facets .block-facetapi",
        activeSelector: ".facetapi-active",
        activateSelector: "h2",
        tagSelector: "#facets",
        tagAction: "before"
      },
      settings,
      $facets,
      $activeFacets,
      activeFacetsLen;

    init = function (options) {

      if (loaded) {
        return;
      }

      loaded = true;

      settings = $.extend(true, {}, defaults, options);
      $facets = $(settings.facetsSelector);
      $activeFacets = $facets.find(settings.activeSelector);
      activeFacetsLen = $activeFacets.length;

      setupActivation();
      setupControls();
      setupCheckboxes();
      setupOverlays();

      if (activeFacetsLen > 0) {
        setupTags($activeFacets);
      }
    };


    setupActivation = function () {
      // setup open/close facets
      global.SBS.activeClasses(settings.facetsSelector + " " + settings.activateSelector, {
        parentSelector: ".block-facetapi",
        clickOutDisable: true,
        clickOutIgnoreSelector: ".content"
      });
    };

    setupOverlays = function () {
      var overlayHeight = $(".region-facets").outerHeight() - 6, // due to padding on wrapper of item-list
        style = ".displaymode-not-mobile #facets .block-facetapi.active .content .item-list {min-height: " + overlayHeight + "px;}";

      $("head").append('<style type="text/css">' + style + '</style>');

      $facets.find(".item-list li").each(function (index, elem) {
        var $input = $(elem).find(".facetapi-checkbox"),
          $link = $(elem).find("a");

        $link.bind("click", function (e) {
          var $parent = $(this).closest(".block-facetapi");
          $parent.removeClass("active");
          $parent.removeClass("inactive");
          $input.click();
        });
      });
    };

    setupCheckboxes = function () {
      $activeFacets.each(function (index, elem) {
        var $elem = $(elem),
          $input = $elem.closest("li").find(".facetapi-checkbox"),
          $parent = $(this).closest(".block-facetapi"),
          $item = $elem.closest("li");

        $item.addClass("active");
        $parent.addClass("selected");
        $item.wrapInner('<div class="term-wrap" />');

        $item.bind("click", function (e) {
          $parent.removeClass("active");
          $parent.removeClass("inactive");
          $input.click();
        });
      });
    };

    setupControls = function () {
      $facets.each(function (index, elem) {
        var $elem = $(elem),
          visibleCount = 10,
          pageNum = 0,
          $items = $elem.find(".item-list li"),
          itemsNum = $items.length,
          pageCount = Math.ceil(itemsNum / visibleCount);

        function animate($facet, pageNum) {
          var $items = $facet.find(".item-list li"),
            itemHeight = $($items[0]).outerHeight(),
            duration = 750,
            easing = cssTransition ? 'in-out' : 'swing';

          $facet.find(".item-list ul").transition(
            {
              marginTop: "-" + (visibleCount * pageNum * itemHeight) + "px"
            },
            duration,
            easing
          );
        }

        function updateButtons() {
          if (pageNum === 0) {
            $(".button-previous").addClass("disabled");
          } else {
            $(".button-previous").removeClass("disabled");
          }

          if (pageNum === pageCount - 1) {
            $(".button-next").addClass("disabled");
          } else {
            $(".button-next").removeClass("disabled");
          }
        }

        function makeButton($facet) {
          var btnTemplate = [
            '<div class="content-footer">',
            '<a href="#" class="button button-previous disabled">Previous</a>',
            '<a href="#" class="button button-next">Next</a>',
            '</div>'
          ];

          $facet.addClass("multiple-page");
          $facet.find(".content").append(btnTemplate.join(""));

          $facet.find(".button-next").bind("click", function (e) {
            e.preventDefault();

            if ($(this).hasClass("disabled")) {
              return;
            }

            pageNum = pageNum + 1;

            if (pageNum < pageCount) {
              animate($facet, pageNum);
            } else {
              pageNum = pageCount - 1;
            }

            updateButtons();
          });

          $facet.find(".button-previous").bind("click", function (e) {
            e.preventDefault();

            if ($(this).hasClass("disabled")) {
              return;
            }

            pageNum = pageNum - 1;

            if (pageNum >= 0) {
              animate($facet, pageNum);
            } else {
              pageNum = 0;
            }

            updateButtons();
          });
        }

        if (itemsNum > visibleCount) {
          makeButton($elem);
        }
      });
    };

    setupTags = function ($activeFacets) {
      var setupTag,
        $tagsWrapper,
        $tags,
        tagsTemplate = [
          '<div class="facet-tags">',
          '<h3 class="title">Containing</h3>',
          '<ul class="facet-tag-list">',
          '</ul>',
          '</div>'
        ],
        tagTemplate = [
          '<li class="facet-tag">',
          '<span class="facet-name">NAME</span>',
          '<a href="#" class="facet-remove" title="NAME">remove</a>',
          '</li>'
        ];

      setupTag = function ($activeFacet,index) {
        var name = getChildText($activeFacet.closest("li .term-wrap")[0]),
          $tag;

        $tag = tagTemplate.join("").replace(/NAME/g, name);
        $tag = $tag.replace(/#/g, $($activeFacets[index]).attr('href'));
        $tagsWrapper.find(".facet-tag-list").append($tag);
      };

      $tagsWrapper = $(tagsTemplate.join(""));
      $(settings.tagSelector)[settings.tagAction]($tagsWrapper);

      $activeFacets.each(function (index, elem) {
        setupTag($(elem),index);
      });
    };

    return {
      init: init
    };
  }());

}(jQuery, window.SBS, window));
;
/*globals window, document, jQuery*/
window.SBS = window.SBS || {};
window.SBS.languagesMenu = (function ($, SBS) {
  "use strict";

  // public
  var init,

    // private
    settings,
    loaded = false,
    $elem,
    get,
    render,
    setup,
    cookieName = 'sbslanguage',
    cookieVal,
    defaults = {
      ajaxEndpoint: "/global/sharedblocks_html/menu/menu-languages",
      selector: "#languages .language_bar > .first",
      contentSelector: ".language_bar > .first > span",
      event: "mouseenter",
      action: "append"
    };

  // public
  init = function (options) {
    var handler,
      cookieData;

    if (loaded) {
      return;
    }

    handler = function (e) {
      get(function (html) {
        render(html, function () {
          setup();
        });
      });
      $elem.unbind(settings.event, handler);
    };

    SBS.languagesMenuOptions = SBS.languagesMenuOptions || {};
    settings = $.extend(true, {}, defaults, options, SBS.languagesMenuOptions);
    $elem = $(settings.selector);
    $elem.bind(settings.event, handler);
    cookieVal  = $.cookie(cookieName);

    $elem.find("a").click(function (e) {
      e.preventDefault();
    });

    if (cookieVal) {
      cookieData = cookieVal.split(",");
      $elem.after('<li class="leaf"><a href="' + cookieData[1] + '" title="' + cookieData[0] + '">' + cookieData[0] + '</a></li>');
      $("#languages ul.language_bar > li.last").html('');
    }

    loaded = true;
  };

  get = function (callback) {
    $.ajax({
      url: settings.ajaxEndpoint,
      success: function (data) {
        var $content = $(data).find(settings.contentSelector),
          rtnHTML = false;

        if ($content.length > 0) {
          rtnHTML = $content[0].outerHTML;
        }

        callback(rtnHTML);
      }
    });
  };

  render = function (html, callback) {
    if (html !== false) {
      $elem[settings.action](html);
      callback();
    }
  };

  setup = function () {
    /**
     * Sets the languagecookie if a user has clicked through
     * the globalnav to that language page...
     *
     * the setting of the cookie might need to be set up on the individual
     * language pages instead...
     */
    $("#languages ul.language_bar li span ul li a").click(function () {
      var languageLabel = $(this).attr('title'),
        languageUrl   = $(this).attr('href');

      $.cookie(cookieName, languageLabel + ',' + languageUrl, {path: '/', domain: '.sbs.com.au'});
    });
  };

  return {
    init: init
  };

}(jQuery, window.SBS));
;
/*globals window, document, jQuery*/
/*jslint nomen: true*/
window.SBS = window.SBS || {};
window.SBS.analytics = (function ($) {
  "use strict";

  var init,
    trackEvent,
    setupClickTrack,
    setupQuickTabClick,
    setupBasicEventTracking,
    setupShowMoreTracking,
    trackElement;

  // public
  init = function (options) {
    setupBasicEventTracking();
    setupClickTrack();
    setupQuickTabClick();
    setupShowMoreTracking();
  };

  // public
  trackEvent = function (eventCategory, eventAction, eventLabel, eventValue) {

    // Google analytics - async
    if (window._gaq !== undefined) {
      if (eventValue !== null && eventValue !== undefined) {
        window._gaq.push(['_trackEvent', eventCategory, eventAction, eventLabel, eventValue]);
      } else {
        window._gaq.push(['_trackEvent', eventCategory, eventAction, eventLabel]);
      }
    }

    // Omniture

  };

  // private
  setupBasicEventTracking = function () {
    //data-track-event="click" data-track-cat="" data-track-action="" data-track-label="" data-track-value=""
    $("*[data-track-event]").each(function () {

      switch ($(this).attr('data-track-event')) {
      case 'click':
        $(this).live('click', function () {
          trackElement(this);
        });
        break;
      case 'dblclick':
        $(this).live('dblclick', function () {
          trackElement(this);
        });
        break;
      }

    });
  };

  trackElement = function (element) {
    trackEvent(
      $(element).attr('data-track-cat'),
      $(element).attr('data-track-action'),
      $(element).attr('data-track-label'),
      $(element).attr('data-track-value')
    );
  };

  // private
  setupClickTrack = function () {

    var defaultSelectors = ".node-network-list-item a",
      videoSelectors = ".mpx-videos .video a",
      promoSelectors = ".bean-promo-shop .field-name-field-promo-link a",
      socialSubscribeSelectors = ".bean-social-subscribers .field-group-tab a"
        + ",.bean-social-subscribers a.social-subscribers";

    if (window._gaq === undefined) {
      return;
    }

    $(defaultSelectors).live("click", function () {
      trackEvent('link', 'click', $(this).attr('href'));
    });

    $(videoSelectors).live("click", function () {
      trackEvent('video link', 'click', $(this).attr('href'));
    });

    $(promoSelectors).live("click", function () {
      trackEvent('promo link', 'click', $(this).attr('href'));
    });

    $(socialSubscribeSelectors).live("click", function () {
      trackEvent('social subscribe link', 'click', $(this).attr('href'));
    });
  };

  setupQuickTabClick = function () {
    var tabsSelector,
      tabWrapper;

    tabsSelector = ".quicktabs-tabs li a";
    $(tabsSelector).bind('click', function () {
      tabWrapper = $(this).closest('.quicktabs-wrapper');
      trackEvent('quickTabs', tabWrapper.attr('id') + ' - change tab', $(this).html());
    });
  };

  setupShowMoreTracking = function () {
    var viewId;

    $('.pager-load-more a').live('mousedown', function () {
      viewId = $(this).closest('.view').attr('class').match(/view-id-([^\s]+)/g);
      trackEvent('show more', viewId + ' - load page', $(this).attr('href'));
    });
  };

  return {
    init: init,
    trackEvent: trackEvent
  };

}(jQuery));
;
/*globals window, document, jQuery*/
window.SBS = window.SBS || {};
window.SBS.trackExternalLinks = (function ($, SBS) {
  "use strict";

  // public
  var init;

  // public
  init = function (linkSelectors) {

    // Keeping for compatibility with code that already uses this
    if (linkSelectors) {
      $(linkSelectors).bind("click", function () {
        // Call the analytics wrapper for tracking events
        SBS.analytics.trackEvent('link', 'click', $(this).attr('href'));
      });
    }

  };

  return {
    init: init
  };

}(jQuery, window.SBS));
;
/*globals jQuery, window, document, SBS */
(function ($) {
  "use strict";

  $(document).bind("livefyre:initialRenderComplete", function (widget, data) {
    var intervalID,
      intervalID2,
      handler,
      handlerLiveBlog,
      init;

    handler = function () {
      var $stream = $(".fyre").not(".fyre-liveblog"),
        iframesLength = $stream.find(".fyre-editor-container iframe").length,
        commentCountLen = $stream.find(".fyre-comment-count").length,
        mode = SBS.globals.getDisplaymode();

      if (((mode === "mobile" || mode === "tablet") && commentCountLen > 0) || (iframesLength > 0 && commentCountLen > 0)) {
        window.clearInterval(intervalID);
        window.setTimeout(function () {
          init($stream);
        }, 2000);
      }
    };

    handlerLiveBlog = function () {
      var $stream = $(".fyre-liveblog"),
        iframesLength = $stream.find(".fyre-editor-container iframe").length,
        mode = SBS.globals.getDisplaymode();

      if (((mode === "mobile" || mode === "tablet")) || iframesLength > 0) {
        window.clearInterval(intervalID2);
        window.setTimeout(function () {
          init($stream);
        }, 2000);
      }
    };

    init = function ($widget) {
      var editorIframes = $widget.find(".fyre-editor-container iframe"),
        styleString = '<style type="text/css">body.editable, div.editable {background: rgba(255,255,255,0.7);} body.editable:focus, div.editable:focus, body.editable:hover, div.editable:hover {background: white; -webkit-box-shadow: inset 0 0 6px 0 #95a0ab; -moz-box-shadow: inset 0 0 6px 0 #95a0ab; box-shadow: inset 0 0 6px 0 #95a0ab;} body.editable, div.editable {margin: 0; padding: 20px 10px; color: #525e6e; font-family: "HelveticaNeue-55-Roman", "Helvetica", Arial, "times new roman", serif;font-weight: normal;font-style: normal;font-size: 14px;line-height: 16px;letter-spacing: 0px;}</style>';

      editorIframes.each(function (index, iframe) {
        $(iframe).contents().find("head").append(styleString);
      });

      $widget.addClass("fyre-ready");
    };

    intervalID = window.setInterval(handler, 500);
    intervalID2 = window.setInterval(handlerLiveBlog, 500);
    $(".fyre-comment-reply").live("click", function (e) {
      init($(".fyre-liveblog"));
      init($(".fyre").not(".fyre-liveblog"));
    });
  });
}(jQuery));
;
/*globals window, document, jQuery, Drupal, SBS, Kinetic, Image, Modernizr, Spinner*/
/*jslint nomen: true*/

window.SBS = window.SBS || {};
window.SBS.social = (function ($) {
  "use strict";

  // public
  var init,
    template,
    setup,
    load,

    // private
    defaults = {};

  init = function (options) {
    var settings = $.extend(true, {}, defaults, options),
      setup,
      load;

    try{
      settings.url = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
      setup =  window.SBS.social[settings.provider]? window.SBS.social[settings.provider].setup : window.SBS.social.setup;
      load =  window.SBS.social[settings.provider] ? window.SBS.social[settings.provider].load : window.SBS.social.load;

      setup(settings, function () {
        load(settings);
      });
    }
    catch (err){

    }
  };

  template = function (options) {
    //console.log("SBS.social.template");
    return undefined;
  };

  setup = function (options) {
    //console.log("SBS.social.setup");
    return undefined;
  };

  load = function (options) {
    //console.log("SBS.social.load");
    return undefined;
  };

  return {
    init: init,
    template: template,
    setup: setup,
    load: load
  };

}(jQuery));
;
/*globals window, document, jQuery, SBS*/
/*jslint nomen: true*/

window.SBS = window.SBS || {};
window.SBS.social = window.SBS.social || {};
window.SBS.social.facebook = (function ($, underscore, SBS) {
  "use strict";

  // public
  var setup,
    load,
    template,

    // private
    loaded = false,
    defaults = {
      shared: {
        layout: "standard",
        colorscheme: "light",
        tag: "fb"
      },
      like: {
        "show-faces": "true",
        send: "false",
        action: "like",
        layout: "button_count"
      },
      share: {
        layout: "button",
        namespace: "share-button"
      },
      send: {},
      follow: {
        "show-faces": "true"
      },
      recommendations: {
        action: "likes, recommends",
        header: "true"
      },
      "recommendations-bar": {
        "read-time": "30",
        side: "right",
        action: "like"
      },
      "like-box": {
        "show-faces": "true",
        header: "true",
        "show-border": "true",
        stream: "false"
      },
      facepile: {
        action: "likes, recommends",
        "max-rows": "1",
        size: "medium",
        "show-count": "true"
      }
    };

  setup = function (options, callback) {
    //console.log("SBS.social.facebook.setup");
    var selector = options.selector,
      widget = options.widget,
      widgetOptions = options.widgetOptions || {},
      widgetConfig = $.extend(true, {}, defaults.shared, defaults[widget], widgetOptions),
      template;

    widgetConfig.namespace = widgetConfig.namespace || widget;

    if (widget === "like" || widget === "share") {
      widgetConfig.href = options.url;
    } else if (widget === "follow") {
      widgetConfig.href = options.profileUrl;
    }

    template = SBS.social.facebook.template(widgetConfig);

    $(selector).append(template);
    callback(options);
  };

  load = function (options, callback) {
    //console.log("SBS.social.facebook.load");

    if (loaded) {
      if (callback) {
        callback();
      }
      return;
    }

    // Set the data-width of fb-post elements
    $('.fb-post').each(function() {
      var width = $(this).parent().width();
      $(this).attr('data-width', width + 'px');
    });

    $('body').prepend('<div id="fb-root"></div>');
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    loaded = true;

    if (callback) {
      callback();
    }
  };

  template = function (options) {
    //console.log("SBS.social.facebook.template");

    var templateString = '<div class="' + options.tag + "-" + options.namespace + '"',
      key,
      value;

    delete options.tag;
    delete options.namespace;

    for (key in options) {
      if (options.hasOwnProperty(key)) {
        value = options[key];
        templateString = templateString + ' data-' + key + '="' + value + '"';
      }
    }

    templateString = templateString + '></div>';
    return templateString;
  };

  return {
    setup: setup,
    load: load,
    template: template
  };

}(jQuery, window._, window.SBS));
;
/*globals window, document, jQuery, Drupal*/

// don't show pinterest hover button on excluded images
window.SBS = window.SBS || {};
window.SBS.social = window.SBS.social || {};
window.SBS.social.pinterest = (function ($) {
    "use strict";

    var loaded = false,
        init,
        defaults = {
            excluded: [],
            height: 28,
            shape: 'rect',
            color: 'red'
        };

    init = function () {
        var drupalOptsExists = Drupal && Drupal.settings && Drupal.settings.SBS && Drupal.settings.SBS.pinterest_hover,
            settings;

        if (!loaded && drupalOptsExists) {
            settings = $.extend(true, {}, defaults, Drupal.settings.SBS.pinterest_hover);

            // Disable the Pin It button on all items specified by the selectors
            for (var i = 0; i < settings.excluded.length; i++) {
                $(settings.excluded[i]).attr('data-pin-no-hover', 'true');
            }

            var f = document.getElementsByTagName('SCRIPT')[0], p = document.createElement('SCRIPT');
            p.type = 'text/javascript';
            p.async = true;
            p.src = '//assets.pinterest.com/js/pinit.js';
            p.setAttribute('data-pin-hover', true);
            p.setAttribute('data-pin-height', settings.height);
            p.setAttribute('data-pin-shape', settings.shape);
            p.setAttribute('data-pin-color', settings.color);
            f.parentNode.insertBefore(p, f);
            loaded = true;
        }
    };

    return {
        init: init
    };

}(jQuery));
;
/*globals window, document, jQuery, SBS*/
/*jslint nomen: true*/

window.SBS = window.SBS || {};
window.SBS.social = window.SBS.social || {};
window.SBS.social.twitter = (function ($, underscore, SBS) {
  "use strict";

  // public
  var setup,
    load,
    template,

    // private
    loaded = false,
    defaults = {
      shared: {
        size: "medium"
      },
      tweet: {
        href: "https://twitter.com/share",
        klass: "twitter-share-button",
        ctaText: "Tweet",
        count: "horizontal"
      },
      follow: {
        "show-count": true,
        width: "200px",
        align: "left",
        "show-screen-name": true,
        ctaText: "Follow"
      }
    };

  setup = function (options, callback) {
    //console.log("SBS.social.twitter.setup");
    var drupalOptsExists = {"via": Drupal.settings.SBS.site_twitter_handle || ''};
    var selector = options.selector,
      widget = options.widget,
      widgetOptions = options.widgetOptions || {},
      widgetConfig = $.extend(true, {}, defaults.shared, defaults[widget], widgetOptions, drupalOptsExists),
      template;

    widgetConfig.namespace = widgetConfig.namespace || widget;
    template = SBS.social.twitter.template(widgetConfig);
    $(selector).append(template);
    callback(options);
  };

  load = function (options, callback) {
    //console.log("SBS.social.twitter.load", options, callback);

    // could be loaded by something else, thus the checks to see if the twttr widget namespace already exists
    if (loaded || (window.twttr !== undefined && window.twttr.widgets !== undefined)) {
      if (callback) {
        callback();
      }
      return;
    }

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];

      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, "script", "twitter-wjs"));

    loaded = true;

    if (callback) {
      callback();
    }
  };

  template = function (options) {
    //console.log("SBS.social.twitter.template");
    var templateString = '<a class="' + options.klass + '"',
      key,
      value,
      ctaText = options.ctaText;

    delete options.tag;
    delete options.namespace;
    delete options.ctaText;
    delete options.klass;

    for (key in options) {
      if (options.hasOwnProperty(key)) {
        value = options[key];
        templateString = templateString + ' data-' + key + '="' + value + '"';
      }
    }

    templateString = templateString + '>' + ctaText + '</a>';
    return templateString;
  };

  return {
    setup: setup,
    load: load,
    template: template
  };

}(jQuery, window._, window.SBS));
;
/*globals window, document, jQuery, SBS, janrain*/

// making anything a share button
window.SBS = window.SBS || {};
window.SBS.social = window.SBS.social || {};
window.SBS.social.share = (function ($, SBS) {
  "use strict";

  var init,
    defaults = {
      selector: ".share-cta"
    },
    bound = false,
    base = "http://" + window.location.hostname;

  init = function (options) {
    var settings = $.extend(true, {}, defaults, options),
      $btns = $(settings.selector);

    $btns.each(function (index, elem) {
      var $elem = $(elem),
        share,
        anchorRegex = /^#/i,
        networkRegex = /share-network-[\w]*/,
        networkMatch = $elem.attr("class").match(networkRegex),
        relativeRegex = /^\//i,
        networkMatchLen = (networkMatch && networkMatch.length > 0) ? networkMatch.length : 0,
        network = options && options.hasOwnProperty("network") ? options.network : false,
        match,
        title,
        description = false,
        image = false,
        message = false;

      if (networkMatchLen > 0) {
        network = networkMatch[0];
        network = network.replace("share-network-", "");
      }

      if ($elem.data("share")) {
        share = $elem.data("share");
      } else if ($elem.attr("href") !== undefined && $elem.attr("href") !== false) {
        share = $elem.attr("href");
      }

      if ($elem.data("title")) {
        title = $elem.data("title");
      } else if ($elem.attr("title") !== undefined && $elem.attr("title") !== false) {
        title = $elem.attr("title");
      } else {
        title = document.title;
      }

      if ($elem.data("description")) {
        description = $elem.data("description");
      } else if ($("meta[name=description]").length > 0) {
        description = $("meta[name=description]").attr('content').substring(0, 147) + "...";
      } else {
        description = '';
      }

      if ($elem.data("image")) {
        image = (relativeRegex.test($elem.data("image"))) ? base + $elem.data("image") : $elem.data("image");
      } else if ($("meta[property='og:image']").length > 0) {
        image = $("meta[property='og:image']").attr('content');
      }

      if (options && options.hasOwnProperty("message")) {
        message = options.message;
      }

      if ((network !== false) && options && options.hasOwnProperty(network) && options[network].hasOwnProperty("message")) {
        message = options[network].message;
      }

      if (share !== undefined) {
        match = share.match(anchorRegex);

        if (match && match.length > 0) {
          share = window.location.protocol + "//" + window.location.hostname + window.location.pathname + share;
        }
      }

      $elem.bind("click", function (e) {
        e.preventDefault();
        janrain.engage.share.reset();
        janrain.engage.share.setTitle(title);

        if (share !== undefined) {
          janrain.engage.share.setUrl(share);
        }

        if (message !== false) {
          janrain.engage.share.setMessage(message);
        } else {
          janrain.engage.share.setMessage("");
        }

        if (network) {
          janrain.engage.share.showProvider(network);
        }

        if (SBS.globals.getDisplaymode() === "tablet") {
          janrain.engage.share.setMobile(false);
        }

        if (description !== false) {
          janrain.engage.share.setDescription(description);
        }

        if (image !== false) {
          janrain.engage.share.setImage(image);
        }

        // hack to force landscape mode on tablet
        if (window.SBS.globals.getDisplaymode() === "tablet") {
          janrain.events.onShareCustomizationChange.addHandler(function (response) {
            var $share = $("#janrain-share");
            if ($share.hasClass("janrain-share-portrait")) {
              $share.removeClass("janrain-share-portrait");
              $share.addClass("janrain-share-landscape");
            }
          });
          bound = true;
        }

        janrain.engage.share.show();
      });
    });
  };

  $(document).ready(function () {
    init();
  });

  return {
    init: init
  };

}(jQuery, window.SBS));
;
/*globals window, jQuery, Spinner*/
/*jslint nomen: true*/

(function ($) {
  "use strict";

  $(window).bind("quicktabs:loading", function (e, tab) {
    var spinner = new Spinner({top: "auto", left: "auto"}).spin();
    tab.container.height(tab.container.height());
    tab.container.append(spinner.el);
  });

  $(window).bind("quicktabs:loaded", function (e, tab) {
    tab.container.height("auto");
    tab.container.find(".spinner").remove();
    //re-run the sidebar size script
    $(document).trigger("update_sidebar_height");
  });
}(jQuery));
;
/*globals jQuery, window, document, SBS*/
/*jslint nomen: true, plusplus: true*/
(function ($, global, underscore, Drupal, analytics) {
  "use strict";

  global.SBS = global.SBS || {};
  global.SBS.overlay = (function () {
    // public
    var loadContent,
      close,
      open,

      // private
      getTemplate,
      mask,
      overlay,
      showContent,
      updateSize,
      render,
      basePath,
      defaults = {
        jsPath: "profiles/sbsdistribution/themes/global/js/template/",
        html: false,
        template: false,
        data: false,
        contentParent: ".overlay-content"
      },
      settings;

    getTemplate = function (path, callback) {
      $.ajax({
        url: path,
        success: function (tmpl) {
          callback(tmpl);
        }
      });
    };

    // load overlay with given options
    // callback is fired when overlay is loaded
    loadContent = function (options, callback) {
      var templatePath;
      settings = $.extend(true, {}, defaults, options);
      console.log(settings);

      // need either html fragment or
      // reference to template and data
      if (!settings.html && (!settings.template && !settings.data)) {
        return;
      }

      if (settings.html) {
        render(settings.html, callback);
      } else if (settings.data && settings.template) {
        basePath = (Drupal && Drupal.settings && Drupal.settings.basePath) ? Drupal.settings.basePath : "/global/";
        templatePath = basePath + settings.jsPath + settings.template;
        getTemplate(templatePath, function (templateString) {
          var tmpl = underscore.template(templateString),
            html = tmpl(settings.data);

          render(html, callback);
        });
      } else {
        return;
      }
    };

    mask = function () {
      //console.log("sbs.overlay mask method...");
      var $mask = $('<div class="sbs-mask"/>');
      $mask.css({
        backgroundColor: "#000000",
        opacity: 0.9,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1002
      });
      $("body").append($mask);
      $mask.bind("click", function () {
        close();
      });
    };

    overlay = function (options) {
      //console.log("sbs.overlay overlay method...");
      var $overlay = $('<div class="sbs-overlay sbs-overlay-loading"><a class="overlay-close">close</a><div class="loader"></div></div>'),
        defaults = {
          width: "700px",
          height: "730px",
          zIndex: 1003,
          position: "absolute",
          top: "50%",
          left: "50%"
        },
        settings = $.extend(true, {}, defaults, options),
        units = settings.width.replace(/[\d]*/gi, ""),
        regex = new RegExp(units, "i"),
        width = settings.width.replace(regex, ""),
        height = settings.height.replace(regex, "");

      settings.marginLeft =  options.marginLeft ? options.marginLeft : -(width / 2) + units;
      settings.marginTop = options.marginTop ? options.marginTop : (units === "%") ? -(Math.ceil($(window).height() * (width / 100) / 2)) + "px" : -(height / 2) + units;

      $overlay.css(settings);
      $("body").append($overlay);

      // we need to set both html and body to make it works in iOS
      var overlay_style = {
        overflow: "hidden",
        maxHeight: "100vh"
      };

      $("html").css(overlay_style);
      $("body").css(overlay_style);

      $(".overlay-close").bind("click", close);
    };

    render = function (html, callback) {
      //console.log("sbs.overlay render", html);
      $(settings.contentParent).append(html);
      if (callback) {
        callback();
      }
    };

    showContent = function (options) {
      var defaults = {},
        settings = $.extend(true, {}, defaults, options),
        $content,
        $overlay = $(".sbs-overlay");

      if (options.url) {
        $content = $('<iframe id="iframe-content" ALLOWTRANSPARENCY="true" style="visibility: hidden;" onload="this.style.visibility = \'visible\';" src="' + settings.url + '" width="100%" height="100%" frameborder="0" allowfullscreen />');
        $overlay.append($content);
        $('#iframe-content').load(function(){
          $overlay.removeClass("sbs-overlay-loading");
          $('.loader').remove();
        });

      } else if (options.html) {
        $content = $(options.html);
        $overlay.append($content).removeClass("sbs-overlay-loading");
        $('.loader').remove();
      }
    };

    open = function (url, options) {
      //console.log("sbs.overlay open");
      var opts = options || {};
      opts.url = url;
      mask();
      overlay(options);
      showContent(opts);

      // Analytics
      if (analytics !== undefined) {
        analytics.trackEvent("overlay", "open", url);
      }
    };

    // close active overlay
    close = function () {
      //console.log("sbs.overlay close method...");
      $('.sbs-mask,.sbs-overlay').remove();

      // reset the body styling from the login overlay
      // we need to set both html and body to make it works in iOS
      var overlay_style = {
        overflow: "auto",
        maxHeight: "none"
      };

      $("html").css(overlay_style);
      $("body").css(overlay_style);

      // Analytics
      if (analytics !== undefined) {
        analytics.trackEvent("overlay", "close");
      }
    };

    updateSize = function (cssObj) {
      $(".sbs-overlay").css($.parseJSON(cssObj));
    };

    // allow for cross document messaging
    // first usage of this is the video overlay
    $(document).ready(function () {

      function messageHandler(e) {
        var data,
          type,
          source = e.source;

        try {
          data = $.parseJSON(e.data);
        } catch (err) {
          return;
        }

        if (data && data.hasOwnProperty("sbsevent")) {
          // prefixed with sbs to avoid name conflicts
          // since we are relying on these properties
          // having certain values
          type = data.sbsevent;
          data = data.sbsdata;

          // assuming reply means send data back to the initiator window
          if (data.reply) {
            if (type === "overlay:displaymode") {
              // send initial displaymode information
              source.postMessage(JSON.stringify({
                sbsevent: "overlay:displaymode",
                sbsdata: window.SBS.globals.getDisplaymode()
              }), "*");

              // send updates as displaymode changes
              $(document).bind("displaymode", function (e, mode) {
                source.postMessage(JSON.stringify({
                  sbsevent: "overlay:displaymode",
                  sbsdata: mode
                }), "*");
              });
            }
          } else {
            $(window).trigger(type, [data]);
          }
        }
      }

      if (window.addEventListener) {
        window.addEventListener("message", messageHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('message', messageHandler);
      }

      $(window).bind("overlay:update:css", function (e, data) {
        updateSize(data);
      });
    });

    return {
      open: open,
      close: close,
      loadContent: loadContent
    };
  }());

}(jQuery, window, window._, window.Drupal, window.SBS.analytics));
;
/*globals jQuery, window, Drupal */
(function ($, SBS) {
  "use strict";

  SBS = SBS || {};
  SBS.overlay = SBS.overlay || {};
  SBS.overlay.video = (function () {
    // public
    var open,
      loadContent,
      close = SBS.overlay.close,

      // private
      defaults = {
        endpoint: "//" + window.location.host + "/api/video_feed/f/Bgtm9B/sbs-video/{{id}}?form=json",
        iframeSrc: "/global/profiles/sbsdistribution/themes/global/js/template/overlayVideo.html?videoid={{id}}&env={{env}}&vertical={{vertical}}",
        source: "drupal",
        vertical: "network",
        env: "prod",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "videoCallback",
        template: "overlayVideoDetails.html"
      },
      i,
      updateOverlaySize,
      setup,
      settings,
      getModel,
      getVideo,
      findGenre = function (categories) {
        var i,
          iLen = categories.length,
          category,
          rtn = "";

        for (i = 0; i < iLen; i = i + 1) {
          category = categories[i];
          if (category.media$scheme === 'Genre') {
            rtn = category.media$name;
            break;
          }
        }

        // normalise genres
        if (rtn === 'Factual') {
          rtn = 'Documentary';
        } else if (rtn === 'News and Current Affairs') {
          rtn = 'News';
        } else if (rtn === 'Film') {
          rtn = 'Movies';
        }

        return rtn;
      },
      findChannel = function (categories) {
        var channelMap = {
            'SBS1': 'SBS',
            'SBS2': 'SBS 2'
          },
          i,
          iLen = categories.length,
          category,
          rtn = "";

        for (i = 0; i < iLen; i = i + 1) {
          category = categories[i];
          if (category.media$scheme === 'Channel' && category.media$name.indexOf('/') !== -1) {
            if (category.media$name !== "Channel/Web Exclusive") {
              rtn = channelMap[category.media$name.replace('Channel/', '')];
              break;
            }
          }
        }

        // failsafe if the channel find failed
        if (rtn === undefined) {
          rtn = "";
        }
        return rtn;
      },
      convertFromSec = function (sec) {
        var h = ~~(sec / 3600),
          m = ~~((sec - h * 3600) / 60),
          s = ~~((sec % 60));
        m = m > 9 ? m : ('0' + m);
        s = s > 9 ? s : ('0' + s);
        return (h > 0 ? h + ':' + m + ':' + s : m + ':' + s);
      },
      formatDateTime = function (dateObj) {
        var rtn,
          months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        // d mmm yyyy - hh:mm
        rtn = dateObj.getDate() + " " + months[dateObj.getMonth()] + " " + dateObj.getFullYear() + " - ";
        rtn = (dateObj.getHours() === 0) ? rtn + "0" + dateObj.getHours() : rtn + dateObj.getHours();
        rtn = rtn + ":";
        rtn = (dateObj.getMinutes() === 0) ? rtn + "0" + dateObj.getMinutes() : rtn + dateObj.getMinutes();
        return rtn;
      };

    getVideo = function (id, callback) {
      var url;

      url = settings.endpoint.replace("{{id}}", id);
      url = url.replace("{{callback}}", settings.jsonpCallback);

      $.ajax({
        url: url,
        dataType: settings.dataType,
        jsonp: settings.jsonp,
        jsonpCallback: settings.jsonpCallback,
        cache: true,
        success: function (data) {
          if (data.f && data.f.status && data.f.status === "failed") {
            callback({status: "failed"});
          } else {
            data.status = "success";
            callback(data);
          }
        }
      });
    };

    updateOverlaySize = function (parentWindow, cssObj) {
      var messageObj = {
        sbsevent: "overlay:update:css",
        sbsdata: JSON.stringify(cssObj)
      };

      messageObj = JSON.stringify(messageObj);
      parentWindow.postMessage(messageObj, "*");
    };

    getModel = function (feedData) {
      var rtnObj = {},
        today = new Date();
      rtnObj.title = feedData.title;
      rtnObj.tx = (new Date(feedData.pubDate) > today) ? "Air - " + formatDateTime(new Date(feedData.pubDate)) : "Aired - " + formatDateTime(new Date(feedData.pubDate));
      rtnObj.expiry = (feedData.media$expirationDate) ? formatDateTime(new Date(feedData.media$expirationDate)) : "";
      rtnObj.description = feedData.description || "";
      rtnObj.description = (rtnObj.description.length > 400) ? rtnObj.description.substring(0, 397) + "..." : rtnObj.description;
      rtnObj.genre = (feedData.media$categories) ? findGenre(feedData.media$categories) : "";
      rtnObj.channel = (feedData.media$categories) ? findChannel(feedData.media$categories) : "";
      rtnObj.duration = (feedData.media$content && feedData.media$content[0].plfile$duration) ? convertFromSec(feedData.media$content[0].plfile$duration) : "";
      rtnObj.contentLinks = [];
      for (i = 1; i <= 3; i = i + 1) {
        if (feedData.hasOwnProperty('pl1$contentLink' + i) && feedData['pl1$contentLink' + i].href !== undefined && feedData['pl1$contentLink' + i].href !== "") {
          rtnObj.contentLinks.push({
            'href': feedData['pl1$contentLink' + i].href,
            'title': feedData['pl1$contentLink' + i].title
          });
        }
      }

      return rtnObj;
    };

    // setup for the iframe
    // window is the iframe window (confusing!)
    setup = function (model) {

      function messageHandler(e) {
        var data = $.parseJSON(e.data);
        if (data.hasOwnProperty("sbsevent")) {
          if (data.sbsevent === "overlay:displaymode") {
            $("body").attr("id", data.sbsdata);
            if ($("body").hasClass("hasRelated")) {
              if (data.sbsdata === "mobile" || data.sbsdata === "tablet") {
                updateOverlaySize(window.parent, {
                  width: "700px",
                  marginLeft: "-350px"
                });
              } else {
                updateOverlaySize(window.parent, {
                  width: "940px",
                  marginLeft: "-470px"
                });
              }
            }
          }
        }
      }

      // respond to overlay displaymode event triggered by parent window
      if (window.addEventListener) {
        window.addEventListener("message", messageHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('message', messageHandler);
      }

      // close button
      $(".overlay-close").bind("click", function () {
        close();
      });

      // make all links in the iframe redirect parent window
      // also make video links load the new video in the overlay
      $(".overlay-content a").each(function (index, elem) {
        var $link = $(this),
          regex = /(onceuponatimein|ouat)\/[\w]*\/([\d]*)/i,
          href = this.href,
          matches = href.match(regex),
          matchesLen = (matches && matches.length) ? matches.length : 0;

        $link.bind("click", function (e) {
          e.preventDefault();

          if (matchesLen > 0) {
            window.parent.postMessage(JSON.stringify({
              sbsevent: "overlay:video:load",
              sbsdata: parseInt(matches[2], 10)
            }), "*");
          } else {
            window.parent.location = href;
          }
        });
      });

      // add a class for styling related content
      if (model.hasOwnProperty("contentLinks") && model.contentLinks.length > 0) {
        $("body").addClass("hasRelated");
        updateOverlaySize(window.parent, {
          width: "940px",
          marginLeft: "-470px"
        });
      }

      // trigger overlay displaymode event so we can get initial displaymode of the parent
      window.parent.postMessage(JSON.stringify({
        sbsevent: "overlay:displaymode",
        sbsdata: {
          reply: true
        }
      }), "*");
    };

    // load video overlay content
    loadContent = function (id, options, callback) {
      if (!id) {
        return;
      }

      settings = $.extend(true, {}, defaults, options);
      console.log(settings);

      getVideo(id, function (feedData) {
        var model,
          opts = {};

        if (feedData.status !== "failed") {
          model = getModel(feedData);
          model.id = id;
          model.env = settings.env;
          model.vertical = settings.vertical;
          opts.data = model;
          opts.template = settings.template;

          SBS.overlay.loadContent(opts, function () {
            setup(model);

            if (callback) {
              callback();
            }
          });
        } else {
          SBS.overlay.loadContent({html: '<p class="error">The video was not found...</p>'}, function () {
            if (callback) {
              callback();
            }
            $(".overlay-close").bind("click", function () {
              close();
            });
          });
        }
      });
    };

    open = function (id, options, callback) {
      var iframeUrl,
        env,
        vertical;

      env = Drupal.settings.SBS.environment;
      vertical = Drupal.settings.basePath.replace(/\//g, '');

      settings = $.extend(true, {}, defaults, options);
      iframeUrl = "//" + window.location.hostname + settings.iframeSrc.replace("{{id}}", id);
      iframeUrl = iframeUrl.replace("{{env}}", env);
      iframeUrl = iframeUrl.replace("{{vertical}}", vertical);
      SBS.overlay.open(iframeUrl, settings);
    };

    $(window).bind("overlay:video:load", function (e, id) {
      close();
      open(id);
    });

    return {
      open: open,
      close: close,
      loadContent: loadContent
    };
  }());

}(jQuery, window.SBS));
;
/*globals window */
(function () {
  "use strict";

  window.SBS = window.SBS || {};
  window.SBS.getUrlParameter = function (key) {
    return decodeURIComponent((new RegExp('[?|&]' + key + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [undefined, ""])[1].replace(/\+/g, '%20')) || null;
  };

}());;
/*globals jQuery, document, window, Drupal*/
/*jslint nomen: true*/
(function ($, underscore) {
  "use strict";

  var cache = {};

  window.SBS = window.SBS || {};
  window.SBS.template = function (templateString, data, callback) {
    var template,
      basePath,
      templatePath = 'profiles/sbsdistribution/themes/global/js/template/',
      getTemplate,
      html;

    getTemplate = function (path, callback) {
      $.ajax({
        url: path,
        success: function (tmpl) {
          callback(tmpl);
        }
      });
    };

    // use generated templates if they exist
    if (window.SBStemplates && window.SBStemplates[templateString]) {
      html = (underscore.template(window.SBStemplates[templateString]))(data);
      callback(html);
    } else {
      if (cache.hasOwnProperty(templateString)) {
        template = cache[templateString];
        html = (underscore.template(template))(data);
        callback(html);
      } else {
        basePath = Drupal.settings.basePath;
        getTemplate(basePath + templatePath + templateString + ".html", function (template) {
          cache[templateString] = template;
          html = (underscore.template(template))(data);
          callback(html);
        });
      }
    }
  };
}(jQuery, window._));
;
var SBStemplates = {"sbs.worldcupshootout":"<ul><% _.each(playlist, function (video, index) { %><li class=\"item\" data-videoid=\"<%= video.id %>\" title=\"<%= video.title %>\"><span class=\"image\"><img src=\"<%= video.image %>\" alt=\"<%= video.title %>\"/></span><span class=\"title\"><%= video.title %></span></li><% }); %></ul>","sbs.widget.spotlight":"<% if (data.type && data.type === \"update\" || data.type === \"more\") {if (data.type === \"update\") {data.reverse();}_.each(data, function (item) { %><div class=\"stream-item network-<%= item.user.network %>\" data-entity=\"<%= item.entity_id %>\"><div class=\"text\"><%= item.text %></div><div class=\"date\"><%= item.date %></div><a class=\"user\" target=\"_blank\" href=\"<%= item.user.link %>\"><span class=\"avatar\"><img src=\"<%= item.user.image %>\" alt=\"<%= item.user.name %>\"/></span><span class=\"details\"><span class=\"name\"><%= item.user.name %></span><span class=\"username\"><%= item.user.username %></span><span class=\"network network-<%= item.user.network %>\"><%= item.user.network %></span></span></a><%if (item.user.network === \"twitter\") {%><div class=\"actions\"><ul><li class=\"first\"><a class=\"action-reply\" href=\"https://twitter.com/intent/tweet?in_reply_to=<%= item.id %>&original_referer=\" target=\"_blank\">reply</a></li><li><a class=\"action-retweet\" href=\"https://twitter.com/intent/retweet?tweet_id=<%= item.id %>&original_referer=\" target=\"_blank\">retweet</a></li><li class=\"last\"><a class=\"action-favourite\" href=\"https://twitter.com/intent/favorite?tweet_id=<%= item.id %>&original_referer=\" target=\"_blank\">favourite</a></li></ul></div><%}%></div><%}); } else { %><div class=\"intro\"><%= data.intromessage %></div><div class=\"feature-mask\"><div class=\"stream\"><div class=\"stream-item network-<%= data[0].user.network %>\" data-entity=\"<%= data[0].entity_id %>\"><div class=\"text\"><%= data[0].text %></div><div class=\"date\"><%= data[0].date %></div><a class=\"user\" target=\"_blank\" href=\"<%= data[0].user.link %>\"><span class=\"avatar\"><img src=\"<%= data[0].user.image %>\" alt=\"<%= data[0].user.name %>\"/></span><span class=\"details\"><span class=\"name\"><%= data[0].user.name %></span><span class=\"username\"><%= data[0].user.username %></span><span class=\"network network-<%= data[0].user.network %>\"><%= data[0].user.network %></span></span></a><%if (data[0].user.network === \"twitter\") {%><div class=\"actions\"><ul><li class=\"first\"><a class=\"action-reply\" href=\"https://twitter.com/intent/tweet?in_reply_to=<%= data[0].id %>&original_referer=\" target=\"_blank\">reply</a></li><li><a class=\"action-retweet\" href=\"https://twitter.com/intent/retweet?tweet_id=<%= data[0].id %>&original_referer=\" target=\"_blank\">retweet</a></li><li class=\"last\"><a class=\"action-favourite\" href=\"https://twitter.com/intent/favorite?tweet_id=<%= data[0].id %>&original_referer=\" target=\"_blank\">favourite</a></li></ul></div><%}%></div></div></div><div class=\"stream-mask-wrapper\"><div class=\"stream-mask\"><div class=\"stream\"><%var spotlightFirst = true;_.each(data, function (item) {if (!spotlightFirst) {%><div class=\"stream-item network-<%= item.user.network %>\" data-entity=\"<%= item.entity_id %>\"><div class=\"text\"><%= item.text %></div><div class=\"date\"><%= item.date %></div><a class=\"user\" target=\"_blank\" href=\"<%= item.user.link %>\"><span class=\"avatar\"><img src=\"<%= item.user.image %>\" alt=\"<%= item.user.name %>\"/></span><span class=\"details\"><span class=\"name\"><%= item.user.name %></span><span class=\"username\"><%= item.user.username %></span><span class=\"network network-<%= item.user.network %>\"><%= item.user.network %></span></span></a><%if (item.user.network === \"twitter\") {%><div class=\"actions\"><ul><li class=\"first\"><a class=\"action-reply\" href=\"https://twitter.com/intent/tweet?in_reply_to=<%= item.id %>&original_referer=\" target=\"_blank\">reply</a></li><li><a class=\"action-retweet\" href=\"https://twitter.com/intent/retweet?tweet_id=<%= item.id %>&original_referer=\" target=\"_blank\">retweet</a></li><li class=\"last\"><a class=\"action-favourite\" href=\"https://twitter.com/intent/favorite?tweet_id=<%= item.id %>&original_referer=\" target=\"_blank\">favourite</a></li></ul></div><%}%></div><%}spotlightFirst = false;});%></div><div class=\"more\"><a href=\"#\">Show More</a></div></div></div><div class=\"buttons\"><h3>Queue your comment</h3><div class=\"janrainsocial\"></div></div><% } %>","sbs.select":"<select name=\"<%= name %>\" class=\"<%= classes %>\"><% if (prompt !== undefined) { %><option value=\"\"><%= prompt %></option><% } %><%_.each(items, function (item, index) {%><option value=\"<%= item.value %>\"><%= item.label %></option><% }); %></select>","sbs.related":"<% if (keywords.length > 0) { %><div class=\"keywords-wrapper\"><h2>Browse by</h2><ul class=\"items keywords\"><% _.each(keywords, function (keyword) { %><li class=\"item tid-<%= keyword.tid %>\"><a class=\"link-underlay\" href=\"<%= keyword.url %>\" title=\"<%= keyword.name %>\" target=\"<%= keyword.target %>\"></a><div><a href=\"<%= keyword.url %>\" target=\"<%= keyword.target %>\"><%= keyword.name %></a></div><span></span></li><% }); %></ul></div><% } %> ","sbs.matchCommentary":"<% _.each(items, function (item, index) {var oddEven = (((index + 1) % 2) === 0) ? \"even\" : \"odd\"; %><tr class=\"<%= oddEven %> row gsm-id-<%= item.gsm_id %> event-code-<%= item.code %>\"><td class=\"views-field views-field-minute\"><%= item.minute %>&nbsp;</td><td class=\"views-field views-field-code\"><%= item.code %></td><td class=\"views-field views-field-event\"><%switch (item.code) {case \"PSG\":print(\"Penalty shootout goal \" + item.person + \" of \" + item.club_name);break;case \"PSM\":print(\"Penalty shootout miss \" + item.person + \" of \" + item.club_name);break;case \"G\":print(\"<strong>GOAL</strong> (\" + item.club_name + \"): Scored by \" + item.person);break;case \"AS\":print(\"Assist by \" + item.person + \" (\" + item.club_name + \")\");break;case \"YC\":print(\"Yellow card awarded to \" + item.person + \" of \" + item.club_name);break;case \"RC\":print(\"Red card awarded to \" + item.person + \" of \" + item.club_name);break;case \"OG\":print(\"<strong>OWN GOAL</strong> (\" + item.club_name + \"): Scored by \" + item.person);break;case \"PG\":print(\"<strong>GOAL</strong> (\" + item.club_name + \"): Penalty scored by \" + item.person);break;case \"SO\":print(\"Substitute out \" + item.person + \" of \" + item.club_name);break;case \"SI\":print(\"Substitute in \" + item.person + \" of \" + item.club_name);break;case \"Y2C\":print(\"Second Yellow card awarded to \" + item.person + \" of \" + item.club_name);break;case \"COMMENT\":print(item.event);break;default:print(item.event);}%></td></tr><% }); %> ","sbs.listJiras":"<div class=\"field jira-issues\"><h3 class=\"title\"><%= title %></h3><%_.each(data.issues, function(issue, key) {%><div class=\"jira type-<%= issue.type %>\"><span class=\"priority priority-<%= issue.priority %>\"></span><a href=\"<%= settings.jiraBaseUrl %>/browse/<%= issue.key %>\"><span class=\"key\"><%= issue.key %></span>&nbsp;<span class=\"summary\"><%= issue.fields.summary %></span></a></div><%}); %><%if (data.total > data.maxResults) {%>...<% } %></div>","sbs.Radioplayer.tuning":"<h3 class=\"title\">Tuning information</h3><div class=\"rp-group rp-group-1\"><div class=\"item rp-location first\"><h4 class=\"title\">How to listen in</h4><div class=\"sbs-form-select select-wrapper\"><select name=\"location\" class=\"form-select\"><% if (!tuned) { %><option selected=\"selected\" value=\"\">Select location</option><% } %><optgroup label=\"Capital Cities\"><option value=\"SA/sublocation/Adelaide\">Adelaide</option><option value=\"QLD/sublocation/Brisbane\">Brisbane</option><option value=\"ACT/sublocation/Canberra\">Canberra</option><option value=\"TAS/sublocation/Hobart\">Hobart</option><option value=\"VIC/sublocation/Melbourne\">Melbourne</option><option value=\"WA/sublocation/Perth\">Perth</option><option value=\"NSW/sublocation/Sydney\">Sydney</option></optgroup><% _.each(locations, function (group, groupIndex) { %><optgroup label=\"<%= group.state %>\"><% _.each(group.regions, function (location, index) { %><% if (group.state + \"/sublocation/\" + location === locationPreference && tuned) { %><option selected=\"selected\" value=\"<%= group.state %>/sublocation/<%= location %>\"><%= location %></option><% } else { %><option value=\"<%= group.state %>/sublocation/<%= location %>\"><%= location %></option><% } %><% }); %></optgroup><% }); %></select></div></div><div class=\"item analogue\"><h4 class=\"title\">Analogue</h4><div class=\"value analogueFrequency\"><% if (analogueFrequency !== false) { %><%= analogueFrequency %><% } else { %>--<% } %></div></div><div class=\"item digital\"><h4 class=\"title\">Digital</h4><div class=\"value channelName\"><% if (onDigitalRadio !== false) { %><%= channelName %><% } else { %>--<% } %></div></div></div><div class=\"rp-group rp-group-2\"><div class=\"item available\"><h5 class=\"title\">Listen on</h5><ul class=\"items\"><li class=\"item radio first\"><a href=\"<%= tuningUrls.radio %>\">Radio</a></li><% if (onDigitalTv !== false) { %><li class=\"item tv\"><a href=\"<%= tuningUrls.tv %>\">TV</a></li><% } %><li class=\"item online\"><a href=\"<%= tuningUrls.online %>\">Online*</a></li><li class=\"item mobileapp last\"><a href=\"<%= tuningUrls.mobileapp %>\">Mobile app*</a></li></ul></div><div class=\"item timezones last\"><h4 class=\"title\">Timezones</h4><p>* Broadcasts on these digital channels are in <span class=\"bold\">Australian Eastern Standard Time (AEST)</span>, all other channels are in local time.</p></div></div>","sbs.Radioplayer.schedule":"<h3 class=\"title\"><%= title %></h3><h4 class=\"subtitle channel channel-<%= subtitleName %>\"><%= subtitleTitle %></h4><% if (mode === \"on_air\") { %><ul class=\"tracks items\"><%_.each(programs, function (track, index) {%><li class=\"track item item-<%= track.state %><%= track.classes %><%= track.hasUrl %><%= track.hasCover %>\"><% if (track.cover !== \"none\") { %><div class=\"cover\"><img src=\"<%= track.cover %>\" alt=\"<%= track.title %>\"/></div><% } else { %><div class=\"cover no-cover\">No track image available.</div><% } %><div class=\"state\"><%= track.stateLabel %></div><div class=\"artist\"><%= track.artist %></div><div class=\"title\"><%= track.title %></div><% if (track.buyUrl !== \"none\") { %><div class=\"item-url\"><a href=\"<%= track.buyUrl %>\" target=\"_blank\">Buy</a></div><% } %></li><% }); %></ul><% } else { %><ul class=\"programs items\"><%_.each(programs, function (program, index) {%><% if (program.hasOwnProperty(\"blank\")) { %><li class=\"program item item-blank <%= program.classes %>\">There was no previous program today.</li><% } else { %><li class=\"program item item-<%= program.state %><%= program.classes %><%= program.hasUrl %>\"><div class=\"state\"><%= program.stateLabel %></div><% if (program.time !== false) { %><div class=\"time\"><%= program.time %></div><% } %><div class=\"title\"><%= program.title %></div><% if (program.siteUrl !== \"none\") { %><div class=\"item-url\"><a href=\"<%= program.siteUrl %>\" target=\"_blank\">View site</a></div><% } %></li><% } %><% }); %></ul><% } %><div class=\"guideUrl\"><a href=\"<%= guideUrl %>\">View Guide</a></div><% if (isEmbed === true) { %><div class=\"rp-branding\"><a target=\"_blank\" href=\"<%= brandingUrl %>\" title=\"SBS Radio\"><img src=\"/radio/profiles/sbsdistribution/themes/global/images/components/bean/radioplayer/channel-sbsradio.jpg\" alt=\"SBS Radio\"></a></div><% } %><% if (embedUrl !== false) { %><div class=\"rp-overlay\"><a class=\"close\" title=\"Close\" href=\"#\">Close</a><p>Select embed width then copy and paste code into your website.</p><div class=\"sbs-form-select-dark\"><select name=\"embedWidth\" class=\"embedWidth\"><option value=\"100%\">Flexible width</option><option value=\"320\">320</option><option value=\"900\">900</option></select></div><input name=\"embedCode\" class=\"embedCode sbs-form-text-dark\" type=\"text\" value=\"<%= iframeHTML %>\" /></div><% } %><div class=\"rp-buttons\"><% if (embedUrl !== false) { %><div class=\"rp-button rp-button-embed\"><a href=\"<%= embedUrl %>\" title=\"Embed\" target=\"_blank\">Embed player</a></div><% } %><div class=\"rp-button rp-button-popup\"><a href=\"<%= popupUrl %>\" title=\"Pop-up\" target=\"_blank\">Pop-up player</a></div><% if (podcastUrl !== false) { %><div class=\"rp-button rp-button-podcast\"><a href=\"<%= podcastUrl %>\" title=\"Podcast RSS\" target=\"_blank\">Subscribe to podcast</a></div><% } %></div>","sbs.Poll.results":"<h3 class=\"title\">Poll results</h3><ul><% _.each(results, function (result, index) { %><li class=\"item option-<%= index %>\" title=\"<% print(result.percentagedecimal || result.percentage + \"% \") %><%= result.text %>\"><span class=\"poll-bg hover-background-color-in\" style=\"width: <% print(result.percentage / largest * 100) %>%;\"></span><span class=\"label\"><%= result.text %></span><span class=\"value\"><%= result.percentagedecimal || result.percentage %>%</span></li><% }); %></ul>","sbs.Poll.options":"<h3 class=\"title\">Poll options</h3><ul><% _.each(options, function (option, index) { %><li class=\"item sbs-form-radio-wrapper\" title=\"<%= option.text %>\"><input class=\"sbs-form-radio poll-option\" id=\"<%= name %>-<%= index %>\" type=\"radio\" name=\"<%= name %>\" value=\"<%- option.text %>\" /><label for=\"<%= name %>-<%= index %>\"><%= option.text %></label></li><% }); %></ul>","prod_outage":"<!DOCTYPE html><!--[if lt IE 7]><html class=\"no-js ie lt-ie10 lt-ie9 lt-ie8 lt-ie7\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if IE 7]><html class=\"no-js ie lt-ie10 ie7 lt-ie9 lt-ie8\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if IE 8]><html class=\"no-js ie lt-ie10 ie8 lt-ie9\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if IE 9]><html class=\"no-js ie lt-ie10 ie9\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if gt IE 9]><!--><html class=\"no-js\"lang=\"en\" dir=\"ltr\"><!--<![endif]--><head><meta charset=\"UTF-8\"><title>Production Outages</title><link rel=\"stylesheet\" href=\"/global/profiles/sbsdistribution/themes/global/css/global/jiras.css\"/><style type=text/css>html,body {background: transparent;}</style></head><body><div class=\"prod-outages\"></div><script src=\"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js\"></script><script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/thirdparty/spin.min.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/sbs.listJiras.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/sbs.template.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/compiled/template/SBStemplates.js\"></script><script type=\"text/javascript\">(function () {$(\"html.no-js\").removeClass(\"no-js\").addClass(\"js\");var spinner = new Spinner({color: \"#ffffff\"}).spin();$(\".prod-outages\")[0].appendChild(spinner.el);SBS.listJiras.init(\".prod-outages\", {}, function () {spinner.stop();});}())</script></body></html> ","overlayVideoDetails":"<div class=\"details\"><div class=\"info\"><% if (genre !== \"\") { %><span class=\"genre <%= genre %>\"><%= genre %></span><% } %><% if (tx !== \"\") { %><span class=\"tx\"><%= tx %></span><% } %><% if (channel !== \"\") { %><span class=\"channel\">on <%= channel %></span><% } %><% if (expiry !== \"\") { %><span class=\"expiry\">Expires - <%= expiry %></span><% } %></div><h3><%= title %></h3></div><iframe class=\"video-player\" style=\"visibility: hidden;\" onload=\"this.style.visibility = \"visible\";\" src=\"//www.sbs.com.au/edsweb/video-player/<%= id %>\" width=\"700\" height=\"426\" frameborder=\"0\" allowfullscreen></iframe><% if (description !== \"\") { %><div class=\"description\"><%= description %></div><% } %><% if (contentLinks.length > 0) { %><div class=\"related\"><h4>Related</h4><ul><%var sbsOverLayVideoDetails = {};sbsOverLayVideoDetails.contentLinksLen = contentLinks.length;_.each(contentLinks, function(contentLink, key) {var firstLast = (key === 0) ? \"first\" : \"\";firstLast = (key === sbsOverLayVideoDetails.contentLinksLen - 1) ? \"last\" : \"\";%><li class=\"<%= firstLast %>\"><a href=\"<%- contentLink.href %>\" target=\"_blank\"><%- contentLink.title %></a></li><% }); %></ul></div><% } %> ","overlayVideo":"<!DOCTYPE html><!--[if lt IE 7]><html class=\"no-js ie lt-ie10 lt-ie9 lt-ie8 lt-ie7\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if IE 7]><html class=\"no-js ie lt-ie10 ie7 lt-ie9 lt-ie8\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if IE 8]><html class=\"no-js ie lt-ie10 ie8 lt-ie9\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if IE 9]><html class=\"no-js ie lt-ie10 ie9\"lang=\"en\" dir=\"ltr\"><![endif]--><!--[if gt IE 9]><!--><html class=\"no-js\"lang=\"en\" dir=\"ltr\"><!--<![endif]--><head><meta charset=\"UTF-8\"><title>Overlay Video</title><link rel=\"stylesheet\" href=\"/global/profiles/sbsdistribution/themes/global/css/modules/overlay/video.css\"/><style type=text/css>html,body {background: transparent;}</style></head><body><div class=\"overlay-content\"></div><script src=\"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js\"></script><script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/thirdparty/spin.min.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/sbs.getUrlParameter.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/overlay/sbs.overlay.js\"></script><script src=\"/global/profiles/sbsdistribution/themes/global/js/overlay/sbs.overlay.video.js\"></script><script type=\"text/javascript\">(function () {$(\"html.no-js\").removeClass(\"no-js\").addClass(\"js\");var spinner = new Spinner({color: \"#ffffff\"}).spin();$(\".overlay-content\")[0].appendChild(spinner.el);SBS.overlay.video.loadContent(SBS.getUrlParameter(\"videoid\"), {\"env\" : SBS.getUrlParameter(\"env\"), \"vertical\" : SBS.getUrlParameter(\"vertical\")}, function () {spinner.stop();});}())</script></body></html> "};;
/*globals jQuery, window, document, SBS*/
/*jslint nomen: true*/
window.SBS = window.SBS || {};
window.SBS.globalNavMobileTablet = (function ($, SBS, underscore) {
  "use strict";

  var init,
    update,
    loaded = false,
    globalNav,
    initialDisplaymode,
    globalSearch,
    globalSearchInput,
    siteMenu,
    commonElements,
    allElements,
    globalNavExists,
    menuButton,
    searchButton,
    allButtons,
    activeClass,
    expandedClass,
    clickOrTouchEvent,
    menuSetup,
    searchSetup,
    closeSetup;

  update = function (displaymode) {
    allButtons.unbind(clickOrTouchEvent);
    if (displaymode === 'mobile' || displaymode === 'tablet') {
      // Collapse if the menu is expanded when switching display modes
      if (globalNav.hasClass(expandedClass) || globalSearch.hasClass(expandedClass)) {
        allElements.removeClass(expandedClass).removeClass(activeClass);
      }

      menuSetup();
      searchSetup();
      closeSetup();
    } else {
      // All non specified display Modes
      allElements.removeClass(expandedClass).removeClass(activeClass);
      globalSearchInput.blur();
    }
  };

  init = function () {

    if (loaded) {
      return;
    }

    globalNav         = $(".header .sbs_gnav");
    globalNavExists   = globalNav.length > 0;

    if (globalNavExists) {
      initialDisplaymode  = SBS.globals.getDisplaymode();
      globalSearch        = $("#block-sbs-global-widgets-gsa-search");
      globalSearchInput   = $("#page > .header #edit-query");
      siteMenu            = $(".region.region-menu");
      commonElements      = $("#page .header, .gnav_mask");
      allElements         = $(".header .sbs_gnav, #block-sbs-global-widgets-gsa-search, .region.region-menu, #page .header, .gnav_mask, a.mobile_menu, a.mobile_search");
      menuButton          = globalNav.children('a.mobile_menu');
      searchButton        = globalNav.children('a.mobile_search');
      allButtons          = globalNav.children('a.mobile_menu, a.mobile_search');
      activeClass         = 'active';
      expandedClass       = 'expanded-menu';
      clickOrTouchEvent   = SBS.globals.getClickOrTouchEvent();

      $('body').append('<div class="gnav_mask"></div>');
      update(initialDisplaymode);

      $(document).bind('displaymode', function (e, mode) {
        update(mode);
      });
    }

    loaded = true;
  };

  menuSetup = function () {
    menuButton.bind(clickOrTouchEvent, function () {
      // button
      menuButton.toggleClass(activeClass);
      searchButton.removeClass(activeClass);
      // containers
      globalNav.toggleClass(expandedClass);
      siteMenu.toggleClass(expandedClass);
      globalSearch.removeClass(expandedClass);
      globalSearchInput.blur();

      if (globalNav.hasClass(expandedClass) || globalSearch.hasClass(expandedClass)) {
        commonElements.addClass(expandedClass);
      } else {
        commonElements.toggleClass(expandedClass);
      }

      return false;
    });
  };

  searchSetup = function () {
    searchButton.bind(clickOrTouchEvent, function () {
      // button
      searchButton.toggleClass(activeClass);
      menuButton.removeClass(activeClass);

      // containers
      globalSearch.toggleClass(expandedClass);
      globalNav.removeClass(expandedClass);
      siteMenu.removeClass(expandedClass);

      // focus condition for the global Search
      if (globalSearch.hasClass(expandedClass)) {
        globalSearchInput.focus();
      } else {
        globalSearchInput.blur();
      }

      if (globalNav.hasClass(expandedClass) || globalSearch.hasClass(expandedClass)) {
        commonElements.addClass(expandedClass);
      } else {
        commonElements.toggleClass(expandedClass);
      }

      return false;
    });
  };

  closeSetup = function () {
    $('#main-wrapper, #highlighted, .gnav_mask').bind(clickOrTouchEvent, function () {
      if (globalNav.hasClass(expandedClass) || siteMenu.hasClass(expandedClass) || globalSearch.hasClass(expandedClass)) {

        allElements.removeClass(expandedClass).removeClass(activeClass);
        globalSearchInput.blur();

        return false;
      }
    });
  };

  $(document).ready(function () {
    init();
  });
}(jQuery, window.SBS, window._));;
window.SBS = window.SBS || {};
window.SBS.featuredThirdpartyEmbed = (function ($) {
  "use strict";
  // public
  var init;

  init = function () {
    if ($(".page-node").length > 0) {
      var mediaContainer = $(".field-media-container.row"),
        newHeroMedia,
        nodeContainer = $(".node.node-article.node-page"),
        embedContainer= $(".node.node-article.node-page .field-name-body");

      if(embedContainer.find("p:first-child + div[class^='embed_']").length > 0) {
        newHeroMedia = embedContainer.find("p:first-child + div[class^='embed_']");

        $('body').addClass('featured_thirdparty_embed');
        mediaContainer.hide(); // not removing at this stage because it causes JS errors to do with the carousel in the media container that stop javascript working.
        nodeContainer.prepend(newHeroMedia);
        //adding a generic class to the embed container to avoid CSS regression, and adding a custom class to the body for fixes.
        newHeroMedia.addClass('thirdparty_embed_media').removeClass (function (index, css) {
          $('body').addClass('featured_'+css.match(/\bembed_\S+/g));
          return (css.match (/\bembed_\S+/g) || []).join(' ');
        });
      }
    }
  };

  return {
    init: init
  };

}(jQuery, Drupal.settings, window._));
;
/*globals window, document, jQuery, Drupal, SBS, Kinetic, Image, Modernizr*/
/*jslint nomen: true, plusplus: true*/

window.SBS = window.SBS || {};
(function ($) {
  "use strict";
  $.fn.managePictureFillImages = function (options) {
    if (options.doUnload === 'undefined') {
      options.doUnload = true;
    }
    $(this).each(function (i, elm) {
      var needsToDisplay = $(elm).visible(true) && !$(elm).attr('data-picture');
      if (needsToDisplay) {
        $(elm).attr('data-picture', '');
      } else if (options.doUnload) {
        $(elm).find('img').remove();
        $(elm).removeAttr('data-picture');
      }
    });
    window.picturefill();
  };

  $.fn.manageIframes = function (options) {
    if (options.doUnload === 'undefined') {
      options.doUnload = true;
    }
    $(this).each(function (i, elm) {
      var datasrc, src, isVisible;
      datasrc = $(elm).attr('data-src');
      src = $(elm).attr('src');
      isVisible = $(elm).visible(true);
      if (isVisible) {
        if (src !== datasrc) {
          $(elm).attr('src', datasrc);
        }
      } else if (options.doUnload && src && src !== 'about:blank') {
        $(elm).attr('data-src', src);
        $(elm).attr('src', 'about:blank');
      }
    });
  };

  $.fn.manageAllMedia = function () {
    this.find('.field-name-field-description .lazyload').managePictureFillImages({'doUnload': false});
    this.find('.field-name-field-description iframe').manageIframes({'doUnload': true});
  };

}(jQuery, window._));;
/*globals window, document, jQuery, Modernizr, SBS, getComputedStyle */
/*jslint nomen: true*/
window.SBS = window.SBS || {};
(function ($) {
  "use strict";
  Modernizr.addTest('csssticky', function () {
    var bool = false;
    Modernizr.testStyles("#modernizr { position: -webkit-sticky;position: -moz-sticky;position: -o-sticky; position: -ms-sticky; position: sticky;}", function (elem, rule) {
      bool = ((window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle).position).indexOf("sticky") !== -1;
    });
    return bool;
  });

}(jQuery, window.SBS, window));
;
/**
 * Created by markho on 31/05/2016.
 * NET-3271:
 * This file was added to fix PDF download tracking.
 * It can be removed entirely if the omniture functionality
 * in the drupal sites is fixed or replaced at any point.
 * Run in global-init.js
 */
/*globals window, document, Modernizr, jQuery, SBS, console */
/*jslint nomen: true*/
window.SBS = window.SBS || {};
window.SBS.omniturePdfTracking = (function ($, underscore) {
  "use strict";

  var intervalID,
    intervalFunc = function () {
      if (window._ !== undefined) {
        underscore = window._;
        window.clearInterval(intervalID);
        $(window).trigger("underscoreReady");
      }
    },
    trackLink = function (link) {
      link.attr('onclick', "sbs_s.tl(this, 'd', '" + link.attr('href') + "')").addClass('pdf-tracking');
    },
    init = function () {
      var linkHref;
      $("#page").find('a').each(function () {
        if (!$(this).hasClass('omniture-processed')) {
          linkHref = $(this).attr('href');
          if (linkHref && linkHref !== undefined && linkHref !== '#') {
            if (linkHref.match(/.pdf$/g)) {
              trackLink($(this));
            }
          }
        }
        $(this).addClass('omniture-processed');
      });
    };

  $(window).bind("underscoreReady", function () {
    var throttlePdfTracking = underscore.throttle(init, 400);
    $(document).on('scroll', throttlePdfTracking);
    $(window).on('resize', throttlePdfTracking);
  });

  intervalID = window.setInterval(intervalFunc, 100);

  return {
    init: init
  };

}(jQuery, window._));
;
/**
 * Created by markho on 25/05/2017.
 *  AUD-49 adding transcript functionality to yourlanguage
 *  Consolidating site-based script (news) to be available globally.
 *  @TODO replace this with newer code - css animations not js... simpler, modular... smaller... better.
 */

/*globals window, document, Modernizr, jQuery, SBS, console */
/*jslint nomen: true*/
window.SBS = window.SBS || {};
window.SBS.transcript = (function ($) {
  "use strict";

  var init = function () {

    var cssTransition = !!$.support.transition,
      buttonHTML = "<ul class='pager pager-load-more transcript'><li class='pager-next first last'><a class='toggleTranscript' href='javascript:void(0)' title=''>Show all</a></li></ul>", // re-using existing markup & css
      transcript = $("h3:contains('Transcript') + div");


    // fallback to normal jquery animation
    if (!cssTransition) {
      $.fn.transition = $.fn.animate;
    }

    transcript.each(function () {
      $.data(this, "realHeight", $(this).height());
    }).css({ overflow: "hidden", height: "50px" }).after(buttonHTML);

    // - animate transcript container on click
    $("a.toggleTranscript").toggle(function () {
      transcript.transition({ height: transcript.data("realHeight") }, 300, 'ease').parents('.content').addClass('view-reverse');
      $(this).html('Hide all');
    }, function () {
      transcript.transition({ height: '50px' }, 300, 'ease').parents('.content').removeClass('view-reverse');
      $(this).html('Show all');
      location.hash = "#transcript_anchor";
    });

  };


  return {
    init: init
  };


}(jQuery));






;
/*globals document, window*/
(function (window) {
  "use strict";

  var userSession = (function () {

    var instance;

    function init() {
      var sessionData = {},
        profileData = {};

      /**
       * Populate session object with session data and user profile data if user is logged in
       *
       * @method
       * @access private
       * @return {void}
       */
      var initSession = function (){
        setSession(getSessionData());
        getUserData().then(
          function(data){
            setUserData(data);
          },
          function(){
            clearSession();
          }
        );

        //extend session if needed
        checkSession().then(
          function(){},
          function(error){
            clearSession();
          }
        );
      };

      /**
       * Set sbs_session string dependent on environment
       *
       * @method
       * @access private
       * @param  {object}
       * @return {void}
       */
       function getSbsSessionCookieName() {
        const matchSbs = window.location.hostname.match(/(local|qa|stg).sbs.com.au$/);
        if (matchSbs) {
          return `${matchSbs[1]}.sbs_session`;
        }
        return 'sbs_session';
      }

      /**
       * Grab domain name to be used to set the cookie later
       *
       * @method
       * @access private
       * @param  {object}
       * @return {void}
       */
      function getCookieDomain (){
        if (window.location.hostname === 'www.sbs.com.au') {
          return '.sbs.com.au';
        }
        const matchSbs = window.location.hostname.match(/(local|qa|stg).sbs.com.au$/);
        if (matchSbs) {
          return matchSbs[0];
        }
      }

      /**
       * Set session details to cookies and this usersession object
       *
       * @method
       * @access private
       * @param  {object}   tempSessionData   object containing sessionid and sessionchecktime
       * @return {void}
       */
      var setSession = function (tempSessionData) {
        sessionData = tempSessionData;
        docCookies.setItem(getSbsSessionCookieName(), sessionData.sessionid, Infinity, '/', getCookieDomain ());
        docCookies.setItem('sbs_session_checktime', sessionData.sessionchecktime, Infinity, '/', getCookieDomain ());
      };

      /**
       * Extend the session by 24 hrs
       *
       * @method
       * @access private
       * @return {void}
       */
      var extendSession = function (){
        sessionData.sessionchecktime = Date.now() + 24 * 60 * 60 * 1000;
        docCookies.setItem('sbs_session_checktime', sessionData.sessionchecktime, Infinity, '/', getCookieDomain());

      };

      /**
       * Destroy profile data and session data from cookies, localstorage and this usersession object
       *
       * @method
       * @access private
       * @return {void}
       */
      var clearSession = function (){
        docCookies.removeItem(getSbsSessionCookieName(), '/', getCookieDomain());
        docCookies.removeItem('sbs_session_checktime', '/', getCookieDomain());
        docCookies.removeItem('core_t', '/', getCookieDomain());
        localStorage.removeItem('janrainCaptureProfileData');

        sessionData = {};
        profileData = {};

        //TODO: remove this when we're no longer using localStorage for janrain stuff
        docCookies.removeItem('janrainCaptureTokenRefresh_session', '/', getCookieDomain());
        docCookies.removeItem('janrainFailedLogins_session', '/', getCookieDomain());
        docCookies.removeItem('janrainSSO_session', '/', getCookieDomain());
        localStorage.removeItem('janrainCaptureToken');

        return true;
      };

      /**
       * Check if the user is logged in
       *
       * @method
       * @access public
       * @return {bool}   return true if user is logged in, false otherwise
       */
      var isLoggedIn = function () {
        return (docCookies.getItem(getSbsSessionCookieName()) !== null && docCookies.getItem(getSbsSessionCookieName()) !== 'undefined');
      };

      /**
       * Get session data from cookies, return empty object otherwise if not exist
       *
       * @method
       * @access public
       * @return {object}  Object containing sessionid and sessionchecktime
       */
      var getSessionData = function () {
        return isLoggedIn() ? {'sessionid': docCookies.getItem(getSbsSessionCookieName()),'sessionchecktime': docCookies.getItem('sbs_session_checktime')} : {};
      };

      /**
       * Get logged in user data, if data is not cached in local storage try to get it from REST endpoint
       * Flattened the result data so it is uniform with data stored by login widget
       *
       * @method
       * @access public
       * @return {prom}   the profile data stored in Janrain
       */
      var getUserData = function () {
        return new Promise(function(resolve, reject) {
          var userData = {};
          if (isLoggedIn()){
              userData = localStorage.getItem('janrainCaptureProfileData');
              resolve(JSON.parse(userData));
          } else {
            reject(Error('User is not logged in'));
          }
        });
      };

      /**
       * Set user profile data to localstorage and this usersession object
       *
       * @param  {object}   profileData   object containing logged in user detail
       * @method
       * @access public
       * @return {void}
       */
      var setUserData = function (tempProfileData) {
        profileData = tempProfileData;
        localStorage.setItem('janrainCaptureProfileData', JSON.stringify(tempProfileData));
      };

      /**
       * Check if session is valid.
       * It checks if we should revalidate the session and extend the sessionchecktime after revalidation
       *
       * @method
       * @access public
       * @return {prom}   resolved to bool, true for valid and false otherwise
       */
      var checkSession = function () {
        return new Promise(function(resolve, reject) {
          if (isLoggedIn()) {
              resolve(true);
          } else {
            clearSession();
            reject(false);
          }
        });
      };

      /**
       * Destroy session in the backend
       *
       * @method
       * @access public
       * @return {prom}
       */
      var logout = function(){
        return ajaxPostRequest(getEndpointBaseUrl() + 'logout', {'sessionid': sessionData.sessionid, 'context': 'web2'})
          .then(function(){
            clearSession();
          });
      };

      initSession();

      return {
        isLoggedIn: isLoggedIn,
        getSessionData: getSessionData,
        setUserData: setUserData,
        getUserData: getUserData,
        logout: logout
      }

    };

    return {
      getInstance: function () {
        if (!instance) {
          instance = init();
        }

        return instance;
      }
    };
  })();

  function createSession() {
    return userSession.getInstance();
  }



  /*\
   |*|
   |*|  :: cookies helper functions::
   |*|
   |*|  A complete cookies reader/writer framework with full unicode support.
   |*|
   |*|  Revision #3 - July 13th, 2017
   |*|
   |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
   |*|  https://developer.mozilla.org/User:fusionchess
   |*|  https://github.com/madmurphy/cookies.js
   |*|
   |*|  This framework is released under the GNU Public License, version 3 or later.
   |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
   |*|
   |*|  Syntaxes:
   |*|
   |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
   |*|  * docCookies.getItem(name)
   |*|  * docCookies.removeItem(name[, path[, domain]])
   |*|  * docCookies.hasItem(name)
   |*|  * docCookies.keys()
   |*|
   \*/

  var docCookies = {
    getItem: function (sKey) {
      if (!sKey) { return null; }
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            /*
             Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
             version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
             the end parameter might not work as expected. A possible solution might be to convert the the
             relative time to an absolute time. For instance, replacing the previous line with:
             */
            /*
             sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
             */
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
      if (!this.hasItem(sKey)) { return false; }
      document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  };

  function ajaxPostRequest(url, payload){
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(Error("XMLHttpRequest failed; error code:" + xhr.statusText));
          }
        }
      };

      xhr.onerror = reject;
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(payload));
    });
  }


  function getEndpointBaseUrl (){
    var hostname = window.location.hostname,
      baseUrl = '//www.sbs.com.au/api/v3/member/';

    if(hostname.indexOf('dev.sbs.com.au') >= 0 ){
      baseUrl = '//www.vmdev.sbs.com.au/api/v3/member/';
    } else if(hostname.indexOf('qa.sbs.com.au') >= 0 ){
      baseUrl = '//www.qa.sbs.com.au/api/v3/member/';
    } else if (hostname.indexOf('stg.sbs.com.au') >= 0){
      baseUrl = '//www.stg.sbs.com.au/api/v3/member/';
    }else if (hostname.indexOf('local.sbs.com.au') >= 0){
      baseUrl = '//www.stg.sbs.com.au/api/v3/member/';
    }
    return baseUrl;
  }

  window.SBS = window.SBS || {};
  window.SBS.userSession = window.SBS.userSession ? window.SBS.userSession : createSession();

}(window));
;
/*globals jQuery, Drupal*/
(function ($) {
  "use strict";

  $(function () {
    var fn = Drupal.ajaxError;
    Drupal.ajaxError = function (xmlhttp, uri) {
      // interrupts drupal error throwing
      // so ajax alert is not shown
      throw {name: 'DrupalAjaxError', message: fn(xmlhttp, uri)};
    };
  });
}(jQuery));
;
/*globals jQuery, Drupal, SBS, document, window */
(function ($) {
  "use strict";

  // mobile is meant to have collapsible containers start as collapsed
  if (window.Drupal && window.Drupal.behaviors && window.SBS && window.SBS.displaymode) {
    Drupal.behaviors.collapseMobile = {
      attach: function (context, settings) {
        $(context).find("body").once("collapseMobile", function () {
          var $collapsibles = $("fieldset.collapsible"),
            collapsibleExists = $collapsibles.length > 0;

          if (collapsibleExists) {
            // put load more inside collapsible
            // so it shows/hides like everything else
            $collapsibles.each(function (index, elem) {
              var $elem = $(elem),
                $pager = $elem.next();

              $elem.append($pager);
            });

            $(document).bind('displaymode', function (e, mode) {
              var collapsed = $("fieldset.collapsible:first").hasClass("collapsed");

              if (mode === 'mobile' && !collapsed) {
                Drupal.toggleFieldset("fieldset.collapsible");
              }
            });
          }
        });
      }
    };
  }

}(jQuery));;
/*globals Drupal, window*/
(function (w) {
  "use strict";

  Drupal.behaviors.picturefill = {
    attach: w.picturefill
  };
}(window));;
/*globals Drupal, window, Modernizr, jQuery*/
(function ($) {
  "use strict";

  var filtersSelector = ".views-filter-area",
    viewTotalSelector = ".view-total",
    resultsCountSelector = ".view-search .view-header .view-total",
    noResultsSelector = ".view-search .view-empty";

  Drupal.behaviors.moveResultCount = {
    attach: function (context, settings) {
      var containerClass = "view-search",
        $filters = $(filtersSelector),
        $filtersViewTotal = $filters.find(viewTotalSelector),
        $resultsCount = $(resultsCountSelector),
        $noResults = $(noResultsSelector),
        inContext = ($(context).hasClass(containerClass) || $(context).find("." + containerClass).length > 0) ? true : false,
        filtersExist = ($filters.length > 0) ? true : false,
        resultCountExists = ($resultsCount.length > 0) ? true : false,
        noResultsExists = ($noResults.length > 0) ? true : false;

      if (inContext && filtersExist && resultCountExists) {
        $filtersViewTotal.remove();
        $filters.prepend($resultsCount);
      }

      // markup is different when 0 results
      if (inContext && filtersExist && noResultsExists) {
        $filtersViewTotal.remove();
        $filters.prepend('<div class="view-total">0<span class="text-small">results</span></div>');
      }
    }
  };
}(jQuery));
;
/*globals Drupal, window, Modernizr, jQuery*/
(function ($) {
  "use strict";

  var filtersWrapperSelector = ".views-filter-area",
    itemSelector = ".form-item",
    inputsSelector = "select",
    beforeSubmit;

  Drupal.behaviors.filtersAutoSubmit = {
    attach: function (context, settings) {
      var $filtersWrapper = $(filtersWrapperSelector),
        $form = $filtersWrapper.closest("form"),
        $filters = $filtersWrapper.find(itemSelector).find(inputsSelector);

      $filters.bind("change", function (e) {
        $form.find(".form-submit").click();
      });
    }
  };
  // dont search for the hint text
  if (Drupal.ajax && Drupal.ajax.prototype.beforeSubmit) {
    beforeSubmit = Drupal.ajax.prototype.beforeSubmit;
    Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
      beforeSubmit(form_values, element, options);
      var fulltext = form_values[0].value,
        title = $(element.context[0]).attr('title');
      if (fulltext === title) {
        form_values[0].value = "";
      }
    };
  }
}(jQuery));
;
;
/*globals window, Drupal*/
window.SBS = window.SBS || {};
window.SBS.drupal = window.SBS.drupal || {};
window.SBS.drupal.audio = (function (SBS, drupalSettings) {
  "use strict";

  // public
  var load;

  load = function (options) {
    var playerId,
      item,
      config;

    if (drupalSettings.jplayer && drupalSettings.jplayer.players && drupalSettings.jplayer.config && drupalSettings.jplayer.config.swfPath) {
      for (playerId in drupalSettings.jplayer.players) {
        if (drupalSettings.jplayer.players.hasOwnProperty(playerId)) {

          item = drupalSettings.jplayer.players[playerId];
          config = drupalSettings.jplayer.config;

          SBS.audio.load({
            id: playerId,
            swfPath: config.swfPath,
            url: item.url,
            title: item.title,
            description: item.description
          });
        }
      }
    }
  };

  return {
    load: load
  };

}(window.SBS, Drupal.settings));;
/*globals jQuery, Drupal, window, document */
(function ($, Drupal, SBS) {
  "use strict";

  // make sure dependencies exist
  if (!$ || !Drupal || !SBS || !SBS.globals) {
    return;
  }

  // mobile is meant to have a slide in/out global navigation
  if (Drupal && Drupal.behaviors && SBS && SBS.displaymode) {
    Drupal.behaviors.searchLabelMobile = {
      attach: function (context, settings) {

        $(context).find("body").once('searchLabelMobile', function () {
          var searchLabel       = $("#edit-search-api-views-fulltext"),
            searchTitle = '',
            videoSearchLabel = $("#views-exposed-form-mpx-video-search-videos-search .form-item-content input"),
            programsSearchLabel = $("#views-exposed-form-mediacentre-programs-search-page--search-results #edit-search-api-views-fulltext");

          if (searchLabel) {
            $(document).bind('displaymode', function (e, mode) {
              if (mode === 'mobile') {
                if (searchLabel.attr('title')) {
                  searchTitle = searchLabel.attr('title').search(/search.+recipes/i) !== -1 ? 'Search recipes' : 'Search';
                  searchLabel.attr('title', searchTitle).attr('value', searchTitle).addClass('prompt-active');
                }
                videoSearchLabel.attr('title', 'Search videos').attr('value', 'Search videos').addClass('prompt-active');
                programsSearchLabel.attr('title', 'Search programs').attr('value', 'Search programs').addClass('prompt-active');
              }
            });
          }
        });
      }
    };
  }

}(jQuery, window.Drupal, window.SBS));
;
/*globals Drupal, window, jQuery*/
(function (global, SBS, $) {
  "use strict";

  Drupal.behaviors.modalOverlay = {
    attach: function (context, settings) {
      var modalTypes = ['video', 'galleryKslide'],
        modalType,
        $modalElements,
        setup,
        i;

      setup = function (type, $elems) {
        if ($elems.length > 0) {
          $elems.each(function (index, elem) {
            var classes = elem.className,
              rgxp = new RegExp(type + "-[0-9]*", "i"),
              match = classes.match(rgxp),
              $anchor = $(elem).find("a");

            if (match && match.length > 0) {
              match = match[0].replace(type + "-", "");

              $anchor.unbind();
              $anchor.bind("click", function (e) {
                var mode = SBS.globals.getDisplaymode();

                // turning off overlay for kslide on tablet too
                // as was having memory issues
                if (type === "galleryKslide") {
                  if (mode !== "mobile" && mode !== "tablet") {
                    e.preventDefault();
                    SBS.overlay[type].open(match);
                  }
                } else {
                  if (mode !== "mobile") {
                    e.preventDefault();
                    SBS.overlay[type].open(match);
                  }
                }
              });
            }
          });
        }
      };

      for (i = 0; i < modalTypes.length; i = i + 1) {
        modalType = modalTypes[i];
        $modalElements = $(".modal-" + modalType);
        setup(modalType, $modalElements);
      }
    }
  };
}(window, window.SBS, jQuery));;
/*globals Drupal, SBS, jQuery, window, document*/
(function ($) {
  "use strict";
  if (Drupal && Drupal.behaviors) {
    Drupal.behaviors.backtotop = {
      attach: function (context, settings) {
        $(context).find("body").once('backtotop', function () {
          var fadeStart = 800,
            $fading = $('.backtotop');

          $(window).bind('scroll', function () {
            var scrollTop,
              offset;

            if (SBS.globals.getDisplaymode() !== "mobile") {
              scrollTop = $(document).scrollTop();
              offset = scrollTop - fadeStart;

              if (offset < 0) {

                // fix for z-index that transitions doesn't handle properly
                if (scrollTop === 0) {
                  $fading.hide();
                } else {
                  $fading.show();
                }

                // transitions handled with CSS3
                $fading.removeClass('visible');
              } else {
                $fading.addClass('visible');
              }
            }
          });
        });
      }
    };
  }
}(jQuery));
;
/*globals jQuery, Drupal*/
(function ($) {
  "use strict";

  // Define selectors
  var searchBoxSelector = '#edit-search-api-views-fulltext, [name="search_api_views_fulltext"], [name="search_api_multi_fulltext"]',
    twgVideoSsearchBoxSelector = '#views-exposed-form-mpx-video-search-videos-search .form-item-content input',
    cancelSearchSelector = '#edit-cancel-search',
    found;

  // attach click handler to any .cancel-search
  // added to the dom at any time.
  $(cancelSearchSelector).live('click', function (e) {
    e.preventDefault();
    $(cancelSearchSelector).parents('.views-exposed-form').find(searchBoxSelector).val('');
    $(cancelSearchSelector).parents('.views-exposed-form').find(searchBoxSelector).focus();
    $(cancelSearchSelector).parents('.views-exposed-form').find(searchBoxSelector).blur();

    $(twgVideoSsearchBoxSelector).val('');
    $(twgVideoSsearchBoxSelector).focus();
    $(twgVideoSsearchBoxSelector).blur();
  });

  // Define the ajax autocomplete matches class
  function Matches() { return undefined; }

  // Simple method to reduce matches count
  Matches.prototype.limit = function (limit) {
    var count = 1,
      key;

    for (key in this) {
      if (this.hasOwnProperty(key)) {
        if (count > limit) {
          delete this[key];
        }
        count = count + 1;
      }
    }
  };

  // Static create Matches object from plain object
  Matches.fromObject = function (oMatches) {
    var m = new Matches();

    $.extend(m, oMatches);
    return m;
  };

  // Prepend Drupal.jsAC.found
  // Limit matches before rendering
  if (Drupal.jsAC) {
    found = Drupal.jsAC.prototype.found;
    Drupal.jsAC.prototype.found = function (matches) {
      if ($('body').hasClass('displaymode-tablet')) {
        matches = Matches.fromObject(matches);
        matches.limit(3);
      }
      found.call(this, matches);
    };
  }
  /**
  * Closes autocomplete popup and allows submit form even
  * when autocomplete popup open.
  * This overwrite misc/autocomplete.js as part of fix #401
  */
  Drupal.autocompleteSubmit = function () {
    $('#autocomplete').each(function () {
      this.owner.hidePopup();
    });
    return true;
  };
  if (Drupal.jsAC) {
    /**
    * Highlights a suggestion.
    */
    Drupal.jsAC.prototype.highlight = function (node) {
      if (this.selected) {
        $(this.selected).removeClass('selected');
      }
      $(node).addClass('selected');
      this.selected = node;
      $(this.ariaLive).html($(this.selected).html());
      this.input.value = $(node).data('autocompleteValue');
    };
    /**
    * Puts the currently highlighted suggestion into the autocomplete field.
    */
    Drupal.jsAC.prototype.select = function (node) {
      this.input.value = $(node).data('autocompleteValue');
      if (this.input.form.id.indexOf('views-exposed-form') !== -1) {
        $('.form-submit', this.input.form).click();
      }
    };
  }
}(jQuery));
;
/*globals jQuery, window, document, SBS, janrain, Drupal*/
(function (global, $, SBS) {
  "use strict";

  // make sure dependencies exist
  if (!global || !$ || !SBS || !SBS.globals) {
    return;
  }

  SBS.domready(function () {

    if($('#admin-menu-account').length > 0) {
      if (window.Drupal.settings.SBS.userlink != null) {
        $('li.admin-menu-account').html('<a href="' + window.Drupal.settings.SBS.userlink + '">Hello ' + window.Drupal.settings.SBS.username + '</a>');
      }
    }

    var $scroller = $(".scroller-bean-feature"),
      $revealScrollers = $(".scroller-bean-reveal,.scroller-view-reveal"),
      $shareBtns,
      $shareIcons,
      scrollerApi,
      scrollerIndex,
      clickOrTouchEvent = SBS.globals.getClickOrTouchEvent(),
      nid,
      mpxid,
      hasNid = (Drupal && Drupal.settings && Drupal.settings.SBS && Drupal.settings.SBS.page && Drupal.settings.SBS.page.nid),
      hasMpxid = (Drupal && Drupal.settings && Drupal.settings.SBS && Drupal.settings.SBS.page && Drupal.settings.SBS.page.mpxid);

    // Back to top link
    $('.backtotop a').bind(clickOrTouchEvent, function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: "0" });
    });

    // make sure scroller is in the right position
    // necessary because of picturefill etc
    if ($scroller.length > 0) {
      scrollerApi = $scroller.data("scrollable");
      scrollerIndex = scrollerApi.getIndex();
      scrollerApi.seekTo(scrollerIndex, "fast");
      $(document).bind('displaymode', function (e, mode) {
        scrollerIndex = scrollerApi.getIndex();
        scrollerApi.seekTo(scrollerIndex, "fast");
      });
    }

    $revealScrollers.each(function (index, elem) {
      var $scroller = $(elem),
        api = $scroller.data("scrollable"),
        $items,
        itemsCount,
        itemsVisible,
        item,
        itemWidth;

      if (api) {
        $items = api.getItems();
        itemsCount = $items.length;

        itemWidth = $($items[0]).outerWidth();
        itemsVisible = Math.floor(($scroller.outerWidth() - 40) / itemWidth); // each item is 230px wide, subtract buttons

        api.onSeek(function (e, index) {
          itemsVisible = Math.floor(($scroller.outerWidth() - 40) / itemWidth);
          if (index + itemsVisible >= itemsCount) {
            $scroller.find(".next").addClass("disabled");
          } else {
            $scroller.find(".next").removeClass("disabled");
          }

          // Analytics Event tracking
          if (SBS.analytics !== undefined) {
            item = $items.eq(index);
            SBS.analytics.trackEvent("carousel", item.context.id + " - seekTo", item[0].firstChild.id);
          }
        });
      }
    });

    $("input[type=text][title]").prompt();

    global.SBS.activeClasses("#breadcrumb .item.last a, #active_trail_menu h2 ", {
      activateSelector: "#breadcrumb, #active_trail_menu",
      clickOutDisable: true,
      clickOutIgnoreSelector: "body #active_trail_menu, body #breadcrumb",
      preventDefault: true
    });

    $(".language_bar .expanded").hoverDelay();
    $(".sbs_gnav_bars .expanded").hoverDelay();
    $(".sbs_menu .expanded").hoverDelay();

    SBS.drupal.audio.load();

    SBS.jumpMenu.init({
      selector: ".ctools-jump-menu-select"
    });

    SBS.jumpMenu.init({
      selector: ".jump-menu-class",
      selectorPrefix: ".",
      regexPrefix: "#class_",
      selectorRegex: /#class_[\w\-\_]*/gi
    });

    SBS.tabJumpMenu.init({
      selector: ".quicktabs-wrapper"
    });

    SBS.anchorLinks.init({
      selector: "a.anchor,.view-az-index .views-summary a"
    });

    SBS.analytics.init();

    SBS.languagesMenu.init();

    SBS.anchorLinks.init({
      selector: ".view-az-index a",
      selectorPrefix: ".",
      regexPrefix: "#class_",
      selectorRegex: /#class_[\w\-\_]*/gi
    });

    SBS.social.init({
      provider: "facebook"
    });

    SBS.social.init({
      provider: "twitter"
    });

    if ($("#facets").length > 0) {
      SBS.facets.init();
    }

    if ($(".btn-share").length > 0) {
      $shareBtns = $(".btn-share");

      $shareBtns.each(function (index, elem) {
        var $btn = $(elem),
          $node = $btn.closest(".node").length > 0 ? $btn.closest(".node") : $btn.closest(".views-row").find(".node"),
          url = $node.find("a.link-underlay:first").attr("href"),
          title = $node.find(".title a").text(),
          description = $node.find(".abstract").text();

        url = (url.match(/http/i)) ? url : window.location.protocol + "//" + window.location.hostname + url;

        if (url && title && description) {
          $btn.bind("click", function (e) {
            e.preventDefault();
            janrain.engage.share.reset();
            janrain.engage.share.setUrl(url);
            janrain.engage.share.setTitle(title);
            janrain.engage.share.setDescription(description.substring(0, 147) + "...");
            janrain.engage.share.show();
          });
        }
      });
    }

    if ($(".icon-janrain-share").length > 0) {
      $shareIcons = $(".icon-janrain-share");

      $shareIcons.each(function (index, elem) {
        var $icon = $(elem),
          $node = $icon.closest(".node"),
          url = $node.find(".icon-janrain-share a").attr("href"),
          title = $node.find(".field-name-field-title").text(),
          description = $node.find(".field-name-body").text();

        url = (url.match(/http/i)) ? url : window.location.protocol + "//" + window.location.hostname + url;

        if (url && title && description) {
          $icon.bind("click", function (e) {
            e.preventDefault();
            janrain.engage.share.reset();
            janrain.engage.share.setUrl(url);
            janrain.engage.share.setTitle(title);
            janrain.engage.share.setDescription(description.substring(0, 147) + "...");
            janrain.engage.share.show();
          });
        }
      });
    }



    if ($(".legacy-social-placeholder").length > 0) {
      SBS.social.init({
        provider: "twitter",
        widget: "tweet",
        selector: ".legacy-social-placeholder"
      });

      SBS.social.init({
        provider: "facebook",
        widget: "like",
        selector: ".legacy-social-placeholder",
        widgetOptions: {
          action: ($("body").hasClass("food") || $("body").hasClass("feast")) ? "like" : "recommend"
        }
      });
    }

    // NET-936: social bar at the bottom of content
    if (($(".page-node").length > 0 && $("body.page-node").not(".sbsinternational, .mediacentre, .node-type-shorthand").length > 0) || $(".page-match").length > 0) {
      $('body').once('socialBarBottom', function() {
        $(this).find('.node-full').filter(':first').append('<div class="social-bar-bottom"><div class="share-facebook"></div><div class="share-twitter"></div></div>');
      });

      var facebookWidgetSettings = {
        provider: "facebook",
        widget: "like",
        widgetOptions: {
          size: 'small'
        }
      };

      // Use share button for SBS topics, movies, guide, program & home.
      if ($("body").hasClass("topics") ||
          $("body").hasClass("film") ||
          $("body").hasClass("guide") ||
          $("body").hasClass("programs") ||
          $("body").hasClass("home") ) {
            facebookWidgetSettings.widget = "share";
            facebookWidgetSettings.url = window.location.href;
      } else if ( !($("body").hasClass("food") || $("body").hasClass("feast"))) {
        // Sites other than SBS food will use 'recommend' button
        facebookWidgetSettings.widgetOptions.action =  "recommend";
      }

      facebookWidgetSettings.selector = ".social-bar-bottom .share-facebook";
      SBS.social.init(facebookWidgetSettings);

      facebookWidgetSettings.selector = ".social-bar-top .share-facebook";
      SBS.social.init(facebookWidgetSettings);

      facebookWidgetSettings.selector = ".field-social-inner .fb-like";
      SBS.social.init(facebookWidgetSettings);

      SBS.social.init({
        provider: "twitter",
        widget: "tweet",
        selector: ".social-bar-bottom .share-twitter"
      });

      SBS.social.init({
        provider: "twitter",
        widget: "tweet",
        selector: ".social-bar-top .share-twitter",
        widgetOptions: {
          size: 'large'
        }
      });
    }


    //Janrain Sharing Version 3
    if ($(".janrainSocialPlaceholder").length > 0) {
      $(".janrainSocialPlaceholder").each(function () {
        var meta_description, meta_image, share_title;
        if (!$(this).attr('data-janrain-description')) {
          if ($("meta[name='og:description']").length > 0) {
            meta_description = $("meta[name='og:description']").attr('content').substring(0, 147) + "...";
            $(this).attr('data-janrain-description', meta_description);
          } else if ($("meta[name='description']").length > 0) {
            meta_description = $("meta[name='description']").attr('content').substring(0, 147) + "...";
            $(this).attr('data-janrain-description', meta_description);
          }
        }

        if (!$(this).attr('data-janrain-image')) {
          if ($("meta[property='og:image']").length > 0) {
            meta_image = $("meta[property='og:image']").attr('content');
            $(this).attr('data-janrain-image', meta_image);
          }
        }

        if (!$(this).attr('data-janrain-title')) {
          share_title = document.title;
          if ($("meta[name='title']").length > 0) {
            share_title = $("meta[name='title']").attr('content');
            $(this).attr('data-janrain-title', share_title);
          } else if ($("meta[property='og:title']").length > 0) {
            share_title = $("meta[property='og:title']").attr('content');
            $(this).attr('data-janrain-title', share_title);
          }
        }
        if (!$(this).attr('data-janrain-url')) {
          $(this).attr('data-janrain-url', window.location);
        }
      });

      //Using addWidgetTo conflicts with ad serving
      /*
       janrain.social.addWidgetTo($("div.janrainSocialPlaceholder"), {
       url: ,
       title: document.title
       });
       */
    }


    // content bar social buttons
    (function () {
      if ($('.content-bar').length > 0) {
        var $mobileFieldInformation = $('<div class="mobile-field-information row"></div>'),
          $social = $('.field-social').clone();

        $mobileFieldInformation.append($social.children());
        $('.node-full').before($mobileFieldInformation);
      }
    }());

    // @todo: since TWG is ported to a new framework, do we still need this in 
    if ($(".view-match-commentary").length > 0) {
      $(".view-match-commentary").each(function (index, elem) {
        var matchid = $(elem).find(".matchid").data("matchid"),
          matchstatus = $(elem).find(".matchstatus").data("matchstatus");

        SBS.matchCommentary.init(elem);
        SBS.liveupdate.init({
          elem: elem,
          url: "/theworldgamestats/match/" + matchid + "/event.json",
          event: "twg.match.event.update"
        });
      });
    }

    if ($(".match-info.state-live").length > 0) {
      $(".match-info.state-live").each(function (index, elem) {
        SBS.matchLive.init(elem);
      });
    }

    if ($(".match-info.state-live.status-playing").length > 0) {
      $(".match-info.state-live.status-playing").each(function (index, elem) {
        var matchid = $(".match-info.state-live").find(".matchid").data("matchid"),
          timerID = 'matchInfoTimer';

        SBS.liveupdate.init({
          dataType: "html",
          elem: elem,
          url: "/match/" + matchid + "/info",
          event: "twg.match.event.info",
          timerID: timerID
        }, function (response) {
          // fetch previous minute...
          var prevMinute = $(".match-info.state-live .progress-vis").find(".animation").data("minutes");

          if ($(".match-info.state-live.status-playing").length > 0) {
            $(".match-info.state-live.status-playing").replaceWith(response);
            $(".match-info.state-live").each(function (index, elem) {
              //console.log("Update matchinfo executed at ", new Date().toTimeString());
              SBS.matchLive.init(elem, {update: true, prev_minute: prevMinute});
              window.picturefill();
            });
          } else {
            //console.log('clearing matchinfo interval timer');
            window.clearInterval(SBS.globals.intervalTimers[timerID]);
          }
        });
      });
    }


    if ($(".match-info.state-report").length > 0) {
      $(".match-info.state-report").each(function (index, elem) {
        SBS.matchReport.init(elem);
      });
    }

    if ($(".view-match-stats-metrics").length > 0) {
      $(".view-match-stats-metrics").each(function (index, elem) {

        // required so we can have a wrapper for the match stats component
        var $elem = $(elem),
          matchid = $elem.find(".matchid").data("matchid"),
          $metricsPanel = $elem.closest(".panel-pane"),
          $teamApanel = $metricsPanel.prev(),
          $teamBpanel = $metricsPanel.next(),
          $panels = $metricsPanel.add([$teamApanel[0], $teamBpanel[0]]),
          $wrapper;

        $panels.wrapAll('<div class="view-match-stats-wrapper not-visible" />');
        $wrapper = $panels.parent();

        SBS.matchStats.init($wrapper[0]);
        SBS.liveupdate.init({
          elem: $wrapper[0],
          url: "/theworldgamestats/match/" + matchid + "/stats.json",
          event: "twg.match.stats.update"
        });
      });
    }

    if ($(".radioplayer").length > 0) {
      $(".radioplayer").each(function (index, elem) {
        var radioPlayer = new SBS.Radioplayer(elem);
      });
    }

    if ($(".guidewidget").length > 0) {
      $(".guidewidget").each(function (index, elem) {
        var guideWidget = new SBS.Guidewidget(elem);
      });
    }

    if ($(".view-language-top20").length > 0) {
      $(".view-language-top20").each(function (index, elem) {
        SBS.languageTop20.init(elem);
      });
    }

    if ($(".view-language-list").length > 0) {
      $(".view-language-list").each(function (index, elem) {
        SBS.languageList.init(elem);
      });
    }

    if ($(".bean-sbs-poll").length > 0) {
      $(".bean-sbs-poll").each(function (index, elem) {
        // initialised in bean poll module
        // var poll = new SBS.Poll(elem);
      });
    }

    if ($("body.page-node").not(".node-type-network-list-item, .page-node-fragment, .node-type-explainer, .node-type-topic, .node-type-person, .sbsinternational, .mediacentre, .node-type-shorthand").length > 0) {
      nid = hasNid ? Drupal.settings.SBS.page.nid[0] : null;
      SBS.relatedVis.init({
        showTab: 1,
        endpoint: 'search/related/',
        args: [nid],
        truncate: {
          title: 50
        }
      });
    }

    if ($("body.page-match").length > 0) {
      nid = hasNid ? Drupal.settings.SBS.page.nid[0] : null;
      if (nid !== null) {
        SBS.relatedVis.init({
          parentSelector: "#block-system-main > .content .node-full",
          action: 'append',
          showTab: 1,
          endpoint: 'search/related/',
          args: [nid],
          truncate: {
            title: 50
          }
        });
      }
    }

    if ($("body.page-mpx").length > 0) {
      mpxid = hasMpxid ? Drupal.settings.SBS.page.mpxid : null;
      SBS.relatedVis.init({
        showTab: 0,
        endpoint: 'search/mpx_related/',
        args: [mpxid],
        truncate: {
          title: 50
        }
      });
    }

    // Add Pinterest hover button - options are managed in admin area
    if ($(".page-node").length > 0 && typeof SBS.social.pinterest !== 'undefined') {
      SBS.social.pinterest.init();
    }

    if ($(".bean-top-stories").length > 0) { // flipping the dom order of the title/abstract in top stories without impacting SEO
      $('.bean-top-stories .field-item .node .content').each(function () {
        var abstract = $(this).find('.abstract');
        abstract.prependTo($(this));
      });
    }

    //Tracking ability on Recommended Reading links NET-3508
    var recommendedReadingLinks = $('.field-type-text-with-summary.cXenseParse .view-image-list-with-abstract-wrapper');
    if (recommendedReadingLinks.length > 0) {
      recommendedReadingLinks.each( function () {

        var recommendedReadingLinksView = $(this).find('.view-image-list-with-abstract .view-content .views-row');
        if (recommendedReadingLinksView.length > 0) {
          recommendedReadingLinksView.each( function () {

            var recommendedLink = $(this).find('a.link-underlay');
            var recommendedLinkHref = recommendedLink.attr('href');
            var articleTitle = $('#page-title').text();
            var articleTitleFormatted = articleTitle.toLowerCase().trim().replace(/[&\/\\#,=|+()`$~%.'":;*?<>{}!@^-]/g, '').split(" ").join("-");

            if (recommendedLinkHref && articleTitle) {
              var recommendedLinkNew = recommendedLinkHref + '?cid=inbody:' + articleTitleFormatted;
              if (recommendedLinkHref.indexOf('?') > -1) {
                recommendedLinkNew = recommendedLinkHref + '&cid=inbody:' + articleTitleFormatted;
              }
              recommendedLink.attr('href', recommendedLinkNew);
            }

          });
        }

      });
    }

    // enable transcript functionality on any node page that has a transcript section (title)
    if ($('body').hasClass('page-node') && $("h3:contains('Transcript')").length > 0) {
      SBS.transcript.init();
    }


    SBS.omniturePdfTracking.init();

  }, this);

}(window, jQuery, window.SBS));
;
!function r(i,o,s){function a(t,e){if(!o[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=o[t]={exports:{}},i[t][0].call(n.exports,function(e){return a(i[t][1][e]||e)},n,n.exports,r,i,o,s)}return o[t].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)a(s[e]);return a}({1:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addBehavior("video-mode-popup.behavior",function(r){var i=new RegExp(/([0-9]{12})/),t=void 0,o=void 0;return{init:function(){t=r.getElement();try{o=function(e){var t={},n=+e.dataset.videoId;n=n||+i.exec(e.href)[0];if(isNaN(n))throw new Error("Could not determine video ID.");return t.videoId=n,t.title=e.title,t.href=e.href,t.videoDescription=e.dataset.videoDescription,t.duration=e.dataset.videoDuration,t.imagePlaceholder=e.dataset.videoImage,t.shareUrl=e.dataset.shareUrl,t.videoModePopupEl=e,t}(t)}catch(e){console.warn("T3 video-mode-popup.behavior module: Could not determine video data from trigger.",t),t=void 0}},onclick:function(e,t,n){o&&(e.preventDefault(),r.broadcast("video-mode-open",o))}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],2:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addModule("app-banner.module",function(t){var n=void 0;function r(){n=document.querySelector(".app-banner"),document.getElementById("app-banner").removeChild(n),sessionStorage.showBanner=!1,document.body.classList.remove("is-banner-open")}return{init:function(){t.getElement(),n=document.querySelector(".app-banner"),sessionStorage.showBanner=sessionStorage.showBanner||(sessionStorage.showBanner=!0);var e=!!document.querySelectorAll(".group-applications .field-name-field-applications-link")&&document.querySelectorAll(".group-applications .field-name-field-applications-link");e&&[].forEach.call(e,function(e){-1!==e.textContent.indexOf("iOS")?e.setAttribute("onclick","sbs_s.linkTrackVars='None';sbs_s.linkTrackVars='contextData.marketing-module';sbs_s.contextData['marketing-module']='marketing-module.alc.app.appStore.rhp';sbs_s.tl(true,'o','Marketing-Module');"):e.setAttribute("onclick","sbs_s.linkTrackVars='None';sbs_s.linkTrackVars='contextData.marketing-module';sbs_s.contextData['marketing-module'] = 'marketing-module.alc.app.googlePlay.rhp';sbs_s.tl(true,'o','Marketing-Module');")}),"true"===sessionStorage.showBanner?(n.classList.add("active"),document.body.classList.add("is-banner-open"),n.querySelector(".close").addEventListener("click",function(){sbs_s.linkTrackVars="None",sbs_s.linkTrackVars="contextData.marketing-module",sbs_s.contextData["marketing-module"]="marketing-module.alc.app.close.custom-banner",sbs_s.tl(!0,"o","Marketing-Module"),r()})):r()}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],3:[function(t,e,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("../services/calculation.service"),t("../services/analytics.service"),t("../services/throttle.service"),t("../services/state-handler.service"),n.default=e.Application.addModule("audio-player.module",function(i){function o(){var e=void 0!==(e=l.getElementsByClassName("show_hide")[0])&&e.getElementsByClassName("embed")[0],t=l.getElementsByClassName("audio__player-embed")[0],n=t.getElementsByTagName("input")[0],r=t.getElementsByTagName("a")[0];e&&(e.addEventListener("click",function(e){s.toggleStates(e,"is-hidden",!1,t)}),r.addEventListener("click",function(e){s.toggleStates(e,"is-hidden",!1,t)}),n.addEventListener("click",function(e){n.select()}))}function n(){var e=l.getElementsByTagName("audio")[0],t=l.getElementsByClassName("download")[0],n=b.eventBased;e.addEventListener("play",c(function(){n.hasOwnProperty("audio.play")&&!0!==n["audio.play"]&&(n["audio.play"]=!0,n.hasOwnProperty("audio.segment")&&(n["audio.segment"]="2|"+e.buffered.length),r(b))},100)),e.addEventListener("ended",function(){n.hasOwnProperty("audio.complete")&&(n["audio.complete"]=!0,n["audio.play"]={send:!1},r(b))},!1),t.addEventListener("click",function(e){e.preventDefault(),void 0!==window.sbs_s&&a.omniture.audio.trackingObj(window.sbs_s,"d",this.href),window.open(this.href)})}function t(){var e=(t=l.getElementsByTagName("audio")[0]).buffered.end(t.buffered.length-1),t=t.duration;l.getElementsByClassName("buffer")[0].style.width=e/t*100+"%"}var l=void 0,s=void 0,u=void 0,a=void 0,c=void 0,f=function(){var t=l.getElementsByClassName("audio__player-controls")[0],e=l.getElementsByClassName("btn")[0],n=l.getElementsByTagName("audio")[0],r=document.querySelectorAll(".audio__player");l.getElementsByClassName("show_hide-toggle")[0]&&o(),l.classList.add("loaded"),e.addEventListener("click",function(e){t.classList.contains("pause")?(t.classList.remove("pause"),n.classList.add("clear_timeout"),n.pause()):(1<r.length&&[].forEach.call(r,function(e){e.getElementsByTagName("audio")[0].pause(),e.getElementsByClassName("audio__player-controls")[0].classList.remove("pause")}),n.play(),l.getElementsByClassName("audio__player-seek")[0].addEventListener("click",g,!1),t.classList.add("pause"),n.classList.remove("clear_timeout")),e.preventDefault()})},d=function(){var e=l.getElementsByTagName("audio")[0];e.addEventListener("timeupdate",g,!1),e.addEventListener("progress",t,!1),e.addEventListener("waiting",function(){l.classList.contains("buffered")||l.classList.remove("loaded")}),e.addEventListener("playing",function(){l.classList.contains("loaded")||l.classList.add("loaded")})},p=function(){var e=l.getElementsByTagName("source")[0].src,t=new RegExp("([^/]+$)"),e=e.match(t)[0];b.fixed.hasOwnProperty("audio.name")&&(b.fixed["audio.name"]=e),n()},r=function(e){var t=void 0,n=void 0,r=e.eventBased,i=e.fixed,o=[];if(void 0!==window.sbs_s){for(n in(t=window.sbs_s).contextData={},r)r.hasOwnProperty(n)&&null!==r[n]&&(!r[n].hasOwnProperty("send")||r[n].send)&&(t.contextData[n]=r[n]),o.push(e.pathPrefix+n);for(n in i)i.hasOwnProperty(n)&&null!==i[n]&&(t.contextData[n]=i[n]),o.push(e.pathPrefix+n);a.omniture.audio.trackingVars(t,o.join()),a.omniture.audio.trackingObj(t,"o","Audio Tracking")}},h=function(e){var t=Math.floor(e/3600),n=Math.floor(e/60),e=Math.floor(e-60*n),n=n<10?"0"+n:n,e=e<10?"0"+e:e;return 1<t?t+":"+n+":"+e:n+":"+e},g=function(e){var e=e||"preload",t=l.getElementsByTagName("audio")[0],n=l.getElementsByClassName("audio__player-seek")[0],r=u.element.width(n),i=l.getElementsByClassName("progress")[0],o=i.getElementsByClassName("progress_time")[0],s=l.getBoundingClientRect().left,s=0<s?e.clientX-s:e.clientX,s="click"===e.type?(s-u.element.position.left(n))/r:t.currentTime/t.duration,n=100*s,r=void 0,a=1<=t.buffered.length?t.buffered.end(t.buffered.length-1):0;Math.round(a)!==Math.round(t.duration)||l.classList.contains("buffered")||l.classList.add("buffered"),o.childNodes[0].textContent=h(t.currentTime),o.childNodes[1].textContent=h(t.duration),i.style.width!==n+"%"&&(i.style.width=n+"%"),100==n&&(r=l.getElementsByClassName("audio__player-controls")[0],t.classList.add("clear_timeout"),r.classList.remove("pause")),"click"===e.type&&(t.currentTime=t.duration*s)},b={pathPrefix:"contextData.",fixed:{"audio.playername":"","audio.name":""},eventBased:{"audio.play":{send:!1},"audio.segment":{throttleDuration:12e4,send:!1},"audio.complete":{send:!1},"audio.length":{send:!1}}};return{storage:b,init:function(){var e,t,n=(l=i.getElement()).getElementsByClassName("btn")[0],r=l.getElementsByClassName("more_links-toggle")[0];n.addEventListener("click",function(e){e.preventDefault()}),r&&r.addEventListener("click",function(e){e.preventDefault()}),u=i.getService("calculation.service"),a=i.getService("analytics.service"),c=i.getService("throttle.service"),s=i.getService("state-handler.service"),e=l.getElementsByTagName("audio")[0],t=void 0,t=setInterval(function(){e.duration&&(g(),f(),d(),p(),b.eventBased.hasOwnProperty("audio.length")&&(b.eventBased["audio.length"]=e.duration),b.fixed.hasOwnProperty("audio.playername")&&(b.fixed["audio.playername"]=e.id),clearInterval(t))},500)}}})}.call(this)}.call(this,t("t3js/dist/t3"))},{"../services/analytics.service":14,"../services/calculation.service":15,"../services/state-handler.service":18,"../services/throttle.service":19,"t3js/dist/t3":266}],4:[function(e,t,n){!function(v){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("../services/calculation.service"),e("../services/throttle.service"),e("../services/progress.service"),n.default=v.Application.addModule("carousel.module",function(d){function e(){"hires"!==window.SBS.displaymode.get()?"horizontal"!==p.dataset.orientation&&(p.dataset.orientation="horizontal"):"vertical"===p.dataset.orientation||p.classList.contains("slidelist-images")||(p.dataset.orientation="vertical"),p.dataset.orientation!==b.carousel.orientation&&(b.carousel.orientation=p.dataset.orientation,v.Application.broadcast("orientationChanged",{localModule:p,orientation:p.dataset.orientation}))}function l(e){var t,n=p.getElementsByClassName("carousel__content")[0],r=p.getElementsByClassName("carousel__content__item"),i=n.querySelectorAll(".carousel__content__item:last-child")[0],o=n.style.transform,s=new RegExp(/\(([^)]+)\)/),a=e.orientation||"horizontal",l=e.direction||"",u=void 0,c=0,f=void 0;e.reset?(n.style.transform="translate3d(0,0,0)",b.carousel.start=!0,b.carousel.end=!1,v.Application.broadcast("resettingCarousel",{localModule:p})):(t="backward"===l?"":"-",u="vertical"===a?h.element.height(n):h.element.width(n),i=("vertical"===a?h.element.height(i)+h.element.position.top(i):h.element.width(i)+h.element.position.left(i))-u,void 0!==e.distance&&(u=e.distance),o&&(o=s.exec(o)[1],o=-1!==((o="vertical"===a?parseInt(o.split(",")[1]):parseInt(o.split(",")[0]))+"").indexOf("-")?-1*o:o,b.carousel.start=!1,b.carousel.end=!1,"backward"===l?(f=u===o?o-u:-1*(o-u),u=u<=o?f:0,c="vertical"===a?"0, "+t+u+"px, 0":t+u+"px, 0, 0",n.style.transform="translate3d("+c+")",0===u&&(b.carousel.start=!0)):(u=(f=u+o)<i?f:i,c="vertical"===a?"0, "+t+u+"px, 0":t+u+"px, 0, 0",n.style.transform="translate3d("+c+")",u===i&&(b.carousel.end=!0)),b.carousel.prevMove=u,[].forEach.call(r,function(e){g.enteringViewport(e,n,{orientation:a,move:u})?e.classList.contains("in-viewport")||e.classList.add("in-viewport"):e.classList.remove("in-viewport")}),d.broadcast("carouselMoved",{id:p.getAttribute("id")})))}function n(e){var n=e.localModule||n,t=n.getElementsByClassName("carousel__controls")[0],r=t?n.getElementsByClassName("carousel__controls")[0]:document.createElement("div"),i=t?r.getElementsByTagName("div"):["next","previous"],o=void 0,s=void 0;if(!t){for(var a in r.classList.add("carousel__controls"),i)(o=document.createElement("div")).classList.add(i[a]),r.appendChild(o);i=r.getElementsByTagName("div")}[].forEach.call(i,function(t){b.carousel.end&&t.classList.contains("next")||b.carousel.start&&t.classList.contains("previous")?t.classList.add("is-disabled"):t.classList.remove("is-disabled"),e.reset||t.addEventListener("click",function(e){s=t.classList.contains("next")?"forward":"backward",l({orientation:n.dataset.orientation,direction:s}),[].forEach.call(r.getElementsByTagName("div"),function(e){e.classList.remove("is-disabled")}),b.carousel.end?r.classList.add("is-slim"):r.classList.remove("is-slim"),(b.carousel.end||b.carousel.start)&&t.classList.add("is-disabled")})}),t||n.appendChild(r)}var p=void 0,h=void 0,g=void 0,r=void 0,i=function(){var t=p.getElementsByClassName("carousel__content")[0];document.addEventListener("DOMContentLoaded",function(){t.hasChildNodes()&&n({localModule:p})}),window.addEventListener("resize",r(e,16)),t.addEventListener("touchstart",function(e){o(e,t)}),t.addEventListener("touchmove",function(e){s(e,t)}),t.addEventListener("touchend",function(e){a(e,t)})},o=function(e,t){p.classList.add("is-touching")},s=function(e,t){var n=void 0,r=void 0,i=void 0,n="vertical"===p.dataset.orientation?e.touches[0].clientY:(t=Math.round(h.element.window.position.left(t)),e.touches[0].clientX-t);b.touch.prevPos=0===b.touch.prevPos?n:b.touch.prevPos,b.touch.prevPos!==n&&(i=n-b.touch.prevPos<0?(r="forward",-1*(n-b.touch.prevPos)):(r="backward",n-b.touch.prevPos),p.classList.contains("is-touching")&&(l({orientation:p.dataset.orientation,direction:r,distance:2*i}),d.broadcast("disableArrows",{$moduleEl:p,saved:b})),b.touch.prevPos=n),e.preventDefault()},a=function(e,t){p.classList.remove("is-touching"),b.touch.prevPos=0},b={touch:{start:0,prevPos:0,end:0},carousel:{id:0,orientation:"horizontal",end:!1,start:!0,size:0,dots:0,prevMove:""}};return{onmessage:{disableArrows:function(t){var e,n;p===t.$moduleEl&&(e=(n=p.getElementsByClassName("carousel__controls")[0])?p.getElementsByClassName("carousel__controls")[0]:document.createElement("div"),n=n?e.getElementsByTagName("div"):["next","previous"],[].forEach.call(n,function(e){t.saved.carousel.end&&e.classList.contains("next")||t.saved.carousel.start&&e.classList.contains("previous")?e.classList.add("is-disabled"):e.classList.remove("is-disabled")}))},orientationChanged:function(e){l({localModule:e.localModule,orientation:e.orientation,reset:!0})},resettingCarousel:function(e){n({localModule:e.localModule,reset:!0})}},saved:b,init:function(){var e,t;p=d.getElement(),window.SBS=window.SBS||{},p.classList.contains("slidelist-images")?(p.dataset.orientation="horizontal",b.orientation=p.dataset.orientation):"hires"===window.SBS.displaymode.get()&&(p.dataset.orientation="vertical",b.orientation=p.dataset.orientation),h=d.getService("calculation.service"),d.getService("progress-bar.service"),r=d.getService("throttle.service"),g=d.getService("progress.service"),e=p.getElementsByClassName("carousel__content")[0],t=e.getElementsByClassName("carousel__content__item"),e.style.transform="translate3d(0, 0, 0)",h.element.addCount(t),b.carousel.start=!0,b.carousel.end=!1,p.dataset.orientation&&(b.carousel.orientation=p.dataset.orientation),i(),p.classList.remove("is-hidden")}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"../services/calculation.service":15,"../services/progress.service":17,"../services/throttle.service":19,"t3js/dist/t3":266}],5:[function(e,t,n){!function(C){!function(){"use strict";e("lie"),e("lie/polyfill"),e("../services/fetch.service"),t.exports=C.Application.addModule("live-social-tugowar.module",function(n){function r(e,t){h||(E(),h=!0,j(),S(),clearTimeout(t),setTimeout(function(){h=!1,j(),S()},v))}function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return e<=-100?e=-100:100<=e&&(e=100),Math.round(e/100*t)}var o=void 0,s=void 0,a=void 0,l=void 0,u=void 0,c={yes:0,no:0},f=void 0,d=void 0,p=void 0,h=!1,g=0,b=[],v=1e4,t=112,m=500,y=10,w=t+y/2,x=-w,k=5,_=5,j=function(){[].forEach.call(o,function(e){h?e.setAttribute("disabled",!0):e.removeAttribute("disabled"),e.checked=!1})},S=function(){var e=u.querySelector(".live-social-tugowar__title-subheading");h?e.classList.add("animated"):e.classList.remove("animated")},E=function(){d.post(f+"/rater_vote",c).then(function(e){c={yes:0,no:0}})},O=function(e){Number.isNaN=Number.isNaN||function(e){return e!=e};var e=e?2*y:y,e=Math.floor(Math.random()*e)+1,t=(Number.isNaN(g),w<(t="yes"===p?g+e:g-e)?w:t<=x?x:t),n=(a.setAttribute("style","transform: rotateZ("+(Number.isNaN(t)?e:t)+"deg);"),window.performance.now()),e=(b=b.filter(function(e){return e.time>n-1e3*_})).reduce(function(e,t){return e+t.sentiment},0),t=w<(t=w*(e/(k*_)))?w:t<=x?x:t;l.setAttribute("style","transform: rotateZ("+t+"deg);")},L=function(){var e=performance.now().toString();d.getJSON(f+"/rater_result?"+e).then(function(e){var t=Math.max(e.yes,e.no),n=Math.min(e.yes,e.no),r=0,r=e.yes>e.no?t-n:n-t;g=i(r)})};return{destroy:function(){return c={yes:0,no:0},g=h=p=d=f=l=a=s=o=null,!(b=[])},init:function(){var e,t;u=n.getElement(),s=u.getElementsByClassName("live-social-tugowar__gauge")[0],o=u.querySelectorAll("input[name=score]"),f=u.getAttribute("data-endpoint"),s&&o.length&&f&&(p=0===Math.floor(2*Math.random())?"no":"yes",d=n.getService("fetch.service"),a=s.getElementsByClassName("live-social-tugowar__gauge-dial")[0],l=s.getElementsByClassName("live-social-tugowar__gauge-user-dial")[0],L(),clearInterval(e),e=setInterval(function(){C.Application.isStarted(u)?L():clearInterval(e)},v),clearInterval(t),t=setInterval(function(){C.Application.isStarted(u)?O():clearInterval(t)},m),[].forEach.call(o,function(t){t.addEventListener("change",r),["keydown","keyup"].forEach(function(e){return t.addEventListener(e,function(e){e.preventDefault()})})}))},onclick:function(e,t,n){"vote"===n&&(p=t.textContent.toLowerCase().trim(),c[p]++,b.push({sentiment:"yes"===p?1:-1,time:window.performance.now()}),O(!0))}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"../services/fetch.service":16,lie:257,"lie/polyfill":258,"t3js/dist/t3":266}],6:[function(e,t,n){!function(s){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("../services/throttle.service"),e("../services/calculation.service"),n.default=s.Application.addModule("mpx-inline.module",function(t){function e(){var e=u.getElementsByClassName("mpxInline__videos-sbsondemand")[0],t=e?r.element.width(e):0,n=e.getElementsByTagName("iframe")[0];"mobile"===window.SBS.displaymode.get()?(e.classList.add("mobile--scaling"),n.style.height=9*t/16+"px"):e.classList.contains("mobile--scaling")&&(n.style="")}var u=void 0,n=void 0,r=void 0,i=function(){s.Application.broadcast("carouselMoved",{})},o=function(){document.addEventListener("DOMContentLoaded",function(){e()}),window.addEventListener("resize",n(function(){e()},16))},c={content:{list:"",wrapperIndex:""}};return{init:function(){var e;window.SBS=window.SBS||{},u=t.getElement(),n=t.getService("throttle.service"),r=t.getService("calculation.service"),o(),i(),e=u.getElementsByClassName("carousel__content__item"),[].forEach.call(e,function(e){e.addEventListener("click",function(){s.Application.broadcast("changeVideo",{el:e})})})},onmessage:{changeContentList:function(e){c.content.list=e.list,c.content.wrapperIndex=e.index},changeVideo:function(e){var t=e.el.dataset.count,n=e.el.dataset.id,r=u.getElementsByClassName("mpxInline__videos-sbsondemand")[0].getElementsByTagName("iframe")[0],i=r.getAttribute("src"),o=new RegExp(/[^/]+$/),s=""!==c.content.list&&c.content.list,t=!!s&&window.Drupal.settings.SBS[s][t],a=u.getElementsByClassName("carousel__content__item"),l=window.Drupal.settings.SBS.site;[].forEach.call(a,function(e){e.classList.remove("is-active")}),e.el.classList.add("is-active"),r.src=i.replace(o,"")+(n+"?autoPlay=1&vertical=")+l+"&noendcard",s&&(e=(a=u.getElementsByClassName("mpxInline__videos-sbsondemand")[0]).getElementsByClassName("content__meta-data")[0],r=a.getElementsByClassName("headline")[0],i=a.getElementsByClassName("description")[0],o=a.getElementsByClassName("twitter")[0],n=a.getElementsByClassName("facebook")[0],e.textContent=t.duration,r.textContent=t.title,i.textContent=""!==t.description?t.description:"",n.src="https://www.facebook.com/plugins/share_button.php?&href="+encodeURIComponent(t.shareUrl)+"&layout=button&size=small&mobile_iframe=false&width=59&height=20&appId",o.src="https://platform.twitter.com/widgets/tweet_button.html?size=s&url="+encodeURIComponent(t.shareUrl)+"&related=twitterapi%2Ctwitter")},"video-mode-open":function(){var e=u.getElementsByClassName("mpxInline__videos-sbsondemand")[0].getElementsByTagName("iframe")[0],t=e.getAttribute("src");-1!==t.indexOf("autoPlay=1")?e.src=t.replace("autoPlay=1","autoPlay=0"):e.src=t}}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"../services/calculation.service":15,"../services/throttle.service":19,"t3js/dist/t3":266}],7:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addModule("promo-template.module",function(n){var r=void 0,i=void 0;return{messages:["video-mode-claim-video"],behaviors:[],onmessage:function(e,t){"video-mode-claim-video"===e&&r.contains(t.videoModePopupEl)&&n.broadcast("video-mode-decorate-feed",{title:i})},init:function(){r=n.getElement(),i=r.closest(".mpx-carousel").getElementsByClassName("field-name-field-title")[0].textContent,document.body,r.dataset.notReady&&n.stop()},destroy:function(){r=void 0}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],8:[function(n,e,r){!function(t){!function(){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n("@sbs/sbs-login"),m=(e=e)&&e.__esModule?e:{default:e};r.default=t.Application.addModule("sbs-login.module",function(e){var t,n=void 0,r=void 0,i=void 0,o=void 0,s=void 0,a=void 0,l=void 0,u=void 0,c=void 0,f=void 0,d=void 0,p=void 0,h=void 0;switch(window.Drupal.settings.SBS.environment){case"prod":h="https://auth.sbs.com.au",p="https://www.sbs.com.au";break;case"stage":h="https://auth.stg.sbs.com.au",p="https://www.stg.sbs.com.au";break;case"qa":h="https://auth.stg.sbs.com.au",p="https://www.qa.sbs.com.au";break;default:p="https://www.stg.sbs.com.au",h="https://auth.stg.sbs.com.au",0}function g(){u.classList.add("is-hidden"),s.classList.remove("is-hidden"),f.classList.remove("is-hidden")}function b(){d.open(),i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function v(){r="399908920106464",window.FB&&(console.log("initiate facebook"),window.FB.init({appId:r,version:"v7.0",cookie:!0,xfbml:!0}))}return{init:function(){t="undefined"!=window.SBS.tourTracker&&null!=window.SBS.tourTracker,o=t?"tourtracker":"web",d=new m.default({htmlEl:"#sbs-login",enableDataLayer:!1,apiHost:p,authApiHost:h,context:o}),u=document.querySelector(".sbs-signout-link"),document.querySelector(".sbs-login-close-button"),i=document.querySelector(".modal-container"),s=document.querySelector(".sbs-signin-link"),a=document.querySelector(".loginbar input"),l=document.getElementById("capture_signin_link_tour_tracker"),n=document.getElementById("capture_signup_link_tour_tracker"),f=document.querySelector(".user_status"),d.on("ready",function(){var e;d.isLoggedIn()?(e=d.getUserName(),c=document.querySelector(".sbs-login-username"),e&&(c.innerHTML=" / "+e),u.classList.remove("is-hidden"),s.classList.add("is-hidden"),f.classList.remove("is-hidden")):g()}),d.on("signInSuccess",function(){d.close(),window.location.reload()}),d.on("signOutSuccess",function(){g(),window.location.reload()}),d.on("close",function(){document.body.style.overflow="auto",i.classList.add("is-hidden")}),void 0!==a&&null!=a&&(a.onclick=function(){b()}),t&&(l.onclick=function(){v(),b()},n.onclick=function(){v(),d.openCreateAccount(),i.classList.remove("is-hidden"),document.body.style.overflow="hidden"})},onclick:function(e,t,n){switch(n){case"signin":v(),b();break;case"signout":d.signOut(),signInButtonToggle();break;case"username":window.location.href="https://myaccount.sbs.com.au/"}}}})}.call(this)}.call(this,n("t3js/dist/t3"))},{"@sbs/sbs-login":52,"t3js/dist/t3":266}],9:[function(t,e,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("../services/state-handler.service"),n.default=e.Application.addModule("show-hide.module",function(r){var i=void 0,o=void 0;return{init:function(){var t,e,n=(i=r.getElement()).getElementsByClassName("show_hide-toggle")[0];n&&(n.addEventListener("click",function(e){e.preventDefault()}),o=r.getService("state-handler.service"),n=i.getElementsByClassName("show_hide-toggle")[0],t=i.getElementsByClassName("show_hide")[0],e=t.getElementsByTagName("a"),n&&(n.addEventListener("click",function(e){o.toggleStates(e,"is-hidden",!1,t)}),[].forEach.call(e,function(e){e.addEventListener("click",function(e){o.toggleStates(!1,"is-hidden",!1,t)})})))}}})}.call(this)}.call(this,t("t3js/dist/t3"))},{"../services/state-handler.service":18,"t3js/dist/t3":266}],10:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addModule("slidelist.module",function(e){function t(e){i!==e&&(n.querySelector('div.slidelist-text[data-slide-index="'+i+'"]').classList.remove("active"),n.querySelector('div.slidelist-text[data-slide-index="'+e+'"]').classList.add("active"),n.querySelector('span.slidelist-dots__item[data-slide-index="'+i+'"]').classList.remove("active"),n.querySelector('span.slidelist-dots__item[data-slide-index="'+e+'"]').classList.add("active"),i=e)}var n=void 0,r=void 0,i=void 0;return{init:function(){n=e.getElement(),r=n.getElementsByClassName("carousel")[0],i=1,n.querySelector('div.slidelist-text[data-slide-index="'+i+'"]').classList.add("active"),n.querySelector('span.slidelist-dots__item[data-slide-index="'+i+'"]').classList.add("active"),t(i)},onmessage:{carouselMoved:function(e){e.id===r.getAttribute("id")&&(e=n.getElementsByClassName("in-viewport")[0].dataset.slideIndex,t(e))}}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],11:[function(e,t,n){!function(l){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e("../services/state-handler.service"),e("../services/calculation.service"),n.default=l.Application.addModule("tabs.module",function(r){var i=void 0,o=void 0,s=void 0,a=function(){var e=i.getElementsByClassName("tabs__control")[0],t=i.getElementsByClassName("tab__content"),e=e.getElementsByTagName("li");[].forEach.call(e,function(e){e.classList.remove("is-active")}),[].forEach.call(t,function(e){e.classList.add("is-hidden")})};return{init:function(){var n,e,t;i=r.getElement(),s=r.getService("state-handler.service"),o=r.getService("calculation.service"),e=i.getElementsByClassName("tabs__control")[0],t=e.getElementsByTagName("li"),e&&(n=i.getElementsByClassName("tab__content"),o.element.addCount(t),o.element.addCount(n),[].forEach.call(t,function(t){t.classList.contains("is-active")&&(n[t.dataset.count].classList.remove("is-hidden"),t.dataset.list&&t.dataset.count&&l.Application.broadcast("changeContentList",{list:t.dataset.list,index:t.dataset.count})),t.addEventListener("click",function(e){t.classList.contains("is-active")||(a(),s.toggleStates(e,"is-active",!1,t),s.toggleStates(e,"is-hidden",!1,n[t.dataset.count]),t.dataset.list&&l.Application.broadcast("changeContentList",{list:t.dataset.list,index:t.dataset.count}))})}))}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"../services/calculation.service":15,"../services/state-handler.service":18,"t3js/dist/t3":266}],12:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addModule("video-mode-trigger.module",function(e){return{behaviors:["video-mode-popup.behavior"],init:function(){e.getElement()}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],13:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addModule("video-mode.module",function(i){var t=void 0;switch(window.Drupal.settings.SBS.environment){case"prod":t="www.sbs.com.au";break;case"stage":t="www.stg.sbs.com.au";break;default:t="www.qa.sbs.com.au"}var e=window.Drupal.settings.SBS.site,o=function(e){return"//"+t+"/edsweb/video-player/"+ +e},n=e?e.replace(/(^sbs\s)+/gi,""):void 0,s=function(e){return"SBS"+(n?" "+n:"")+(e?" "+e:"")},r="keyup",a=void 0,l=void 0,u=void 0,c=void 0,f=void 0,d=void 0,p=void 0,h=void 0,g=void 0,b=void 0,v=void 0,m=void 0,y=!0;function w(e){var t,n;y&&(t=Object.freeze((t=e.origin,(n=document.createElement("a")).href=t,n)),/sbs\.com\.au$/g.test(t.host)&&(console.log("video-mode.module:: VOD player message: ",e.data),y&&(h.classList.toggle("video-mode__placeholder--fade-out",!0),y=!1)))}function x(){var e=+m.scrollTop;a.classList.toggle("video-mode--is-active",!0),g.classList.toggle("video-mode__modal--is-active",!0),m.classList.toggle("video-mode--is-active",!0),m.dataset.preVideoModeScroll=e,m.style.top=0-e+"px",window.addEventListener("message",w),window.addEventListener(r,k),l.addEventListener("click",k)}function k(e){e.type===r&&27!==e.keyCode||"click"===e.type&&e.currentTarget!==l||_()}function _(){var e=+m.dataset.preVideoModeScroll;m.style.top=0-e+"px",a.classList.toggle("video-mode--is-active",!1),g.classList.toggle("video-mode__modal--is-active",!1),m.classList.toggle("video-mode--is-active",!1),isNaN(e)||(m.scrollTop=e,m.removeAttribute("data-pre-video-mode-scroll"),m.style.top=0),p.src="",window.removeEventListener("message",w),window.removeEventListener(r,k),l.removeEventListener("click",k)}return{messages:["video-mode-open","video-mode-decorate-feed","open","close"],onmessage:function(e,t){switch(e){case"video-mode-open":var n=t,r=n.shareUrl||n.href;c.textContent=n.title,f.textContent=n.videoDescription||"",p.src=o(n.videoId),h.src=n.imagePlaceholder,b.src="https://www.facebook.com/plugins/share_button.php?&href="+encodeURIComponent(r)+"&layout=button&size=small&mobile_iframe=false&width=59&height=20&appId",v.src="https://platform.twitter.com/widgets/tweet_button.html?size=s&url="+encodeURIComponent(r)+"&related=twitterapi%2Ctwitter",n.duration?d.textContent=function(e){var t=parseInt(e/3600,10),n=parseInt((e-3600*t)/60,10),e=parseInt(e%60,10);return n=9<n?n:"0"+n,e=9<e?e:"0"+e,0<t?t+":"+n+":"+e:n+":"+e}(n.duration):d.textContent="",u.textContent=s(),i.broadcast("video-mode-claim-video",n),h.classList.toggle("video-mode__placeholder--cover-video",!0),h.classList.toggle("video-mode__placeholder--fade-out",!1),y=!0,x();break;case"video-mode-decorate-feed":(r=t).title&&(u.textContent=s(r.title));break;case"open":x();break;case"close":_()}},onclick:function(e,t,n){"video-mode-close"===n&&_()},behaviors:[],init:function(){var e,t;a=i.getElement(),u=a.getElementsByClassName("video-mode__header-heading")[0],c=a.getElementsByClassName("video-mode__video-title")[0],f=a.getElementsByClassName("video-mode__video-description")[0],d=a.getElementsByClassName("video-mode__duration")[0],g=a.getElementsByClassName("video-mode__modal")[0],l=a.getElementsByClassName("video-mode__overlay")[0],p=a.getElementsByClassName("video-mode__iframe")[0],b=a.getElementsByClassName("video-mode__share-link--facebook")[0],v=a.getElementsByClassName("video-mode__share-link--twitter")[0],(h=a.getElementsByClassName("video-mode__placeholder")[0]).addEventListener("transitionend",function(){h.classList.toggle("video-mode__placeholder--fade-out",!1),h.classList.toggle("video-mode__placeholder--cover-video",!1)}),m=document.body,a&&(t=(e=a).parentNode)&&(t.removeChild(e),m.appendChild(e))}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],14:[function(e,t,n){!function(e){!function(){"use strict";t.exports=e.Application.addService("analytics.service",function(e){return{omniture:{audio:{trackingVars:function(e,t){e.linkTrackVars=t},trackingObj:function(e,t,n){e.tl(!0,t,n)}}}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],15:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addService("calculation.service",function(e){var t={height:function(e){return e.offsetHeight},width:function(e){return e.offsetWidth},addCount:function(e){var t=-1;[].forEach.call(e,function(e){return t++,e.setAttribute("data-count",t)})},position:{top:function(e){return e.offsetTop},right:function(e){return e.offsetRight},bottom:function(e){return e.offsetBottom},left:function(e){return e.offsetLeft},start:function(e){return e.offsetTop},end:function(e){return t.position.start(e)+t.height(e)}},window:{position:{top:function(e){return e.getBoundingClientRect().top},right:function(e){return e.getBoundingClientRect().right},bottom:function(e){return e.getBoundingClientRect().bottom},left:function(e){return e.getBoundingClientRect().left}}}};return{element:t}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],16:[function(n,e,r){!function(t){!function(){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n("browsernizr"),l=(e=e)&&e.__esModule?e:{default:e};r.default=t.Application.addService("fetch.service",function(e){function n(e,t,n){return o(3<arguments.length&&void 0!==arguments[3]?arguments[3]:"GET",e,n).catch(function(e){console.error(e)}).then(function(e){return"raw"===t?e:"text"===t?e.responseText:JSON.parse(e.response)})}function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"json";return l.default.fetch&&!(2<arguments.length&&void 0!==arguments[2]&&arguments[2])?function(e,t){return fetch(e).then(i).then(function(e){return"raw"===t?e:e[t]()}).then(function(e){return e}).catch(function(e){console.error(e)})}(s(e),t,"GET"):n(s(e),t,{},"GET")}function r(e){return t(e,"text")}var i=function(e){if(e.ok)return e;throw new Error(e.status+" - "+e.statusText)},o=function(r,i,o){return new Promise(function(e,t){var n=new XMLHttpRequest;n.open(r,i),n.onreadystatechange=function(){4===n.readyState&&(200===n.status?e(n):t(Error("XMLHttpRequest failed; error code: "+n.statusText)))},n.onerror=t,"GET"===r?n.send():(n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(o)))})};a=0;function s(e){return e.replace(/\b\/\//g,"/")}var a;return{get:t,post:function(e){return n(e,"json",1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},"POST")},getHTML:r,getJSON:function(e){return t(e,"json")},getJSONP:function(e){return new Promise(function(t){var n=document.createElement("script"),r="_jsonp_"+a++;e+=(e.match(/\?/)?"&":"?")+"callback="+r,n.src=e,window[r]=function(e){t(new Response(JSON.stringify(e))),n.remove(),delete window[r]},document.body.appendChild(n)})},getTEXT:r}})}.call(this)}.call(this,n("t3js/dist/t3"))},{browsernizr:77,"t3js/dist/t3":266}],17:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addService("progress.service",function(e){var i={Y:window.pageYOffset,X:window.pageYOffset},o={Y:"",X:""};return{direction:function(e){var t=i.Y,n=o.Y,r=void 0,r=t!==e?t<=e?"down":"up":n;return i.Y=e,n!==r&&(o.Y=r)},percent:function(e,t){return 0<(t=Math.round((t.pageYOffset-e.offsetTop)/e.offsetHeight*100))?100<=t?100:t:0},infocus:function(e,t){return t.pageYOffset>=e.offsetTop&&t.pageYOffset<=e.offsetTop+e.offsetHeight},enteringViewport:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=e.offsetTop,i=e.offsetLeft,o=e.offsetHeight,e=e.offsetWidth,s=t!==window?t.offsetHeight:window.innerHeight,a=t!==window?t.offsetWidth:window.innerWidth,l=t!==window?t.scrollTop:t.pageYOffset,t=t!==window?t.scrollLeft:t.pageXOffset;return n&&(n.move=-1!==(n.move+"").indexOf("-")?-1*n.move:n.move,t="vertical"===n.orientation?0:n.move,l="horizontal"===n.orientation?0:n.move),r<l+s&&l<r+o&&i<t+a&&t<i+e},savedScrollDirection:o,savedWindowposition:i}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],18:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addService("state-handler.service",function(e){function i(e,t,n){t&&r(e,"string"==typeof t&&t,n)}var o=document.body,s=new RegExp(/(is-)(.*?)(?=\s|$)/g),r=function(e,t,n,r){r=r||o;e&&e.preventDefault(),t?(t=n?t.replace(n,""):t)&&r.classList.remove(t):(t=function(e){e=e||o;return!1!==e.matches("[class]")&&e.getAttribute("class").match(s)}())&&(t=t.join(" "),(t=n?t.replace(n,""):t)&&r.classList.remove(t))};return{clearStates:r,setStates:function(e,t,n,r){r=r||o;e&&e.preventDefault(),i(e,n,t),r.classList.add(t)},toggleStates:function(e,t,n,r){r=r||o;e&&e.preventDefault(),i(e,n,t),r.classList.toggle(t)}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],19:[function(e,t,n){!function(e){!function(){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e.Application.addService("throttle.service",function(e){return function(r,i){i=i||200;var o=void 0,s=void 0;return function(){var e=this,t=+new Date,n=arguments;o&&t<o+i?(clearTimeout(s),e.classList&&e.classList.contains("clear_timeout")||(s=setTimeout(function(){o=t,r.apply(e,n)},i))):(o=t,r.apply(e,n))}}})}.call(this)}.call(this,e("t3js/dist/t3"))},{"t3js/dist/t3":266}],20:[function(t,n,e){!function(e){!function(){"use strict";t("lie/polyfill"),t("./modules/live-social-tugowar.module"),t("./modules/audio-player.module"),t("./modules/show-hide.module"),t("./modules/carousel.module"),t("./modules/tabs.module"),t("./modules/mpx-inline.module"),t("./behaviors/video-mode-popup.behavior"),t("./modules/video-mode-trigger.module"),t("./modules/video-mode.module"),t("./modules/promo-template.module"),t("./modules/slidelist.module"),t("./modules/app-banner.module"),t("./modules/sbs-login.module"),n.exports=window.Box=e}.call(this)}.call(this,t("t3js/dist/t3"))},{"./behaviors/video-mode-popup.behavior":1,"./modules/app-banner.module":2,"./modules/audio-player.module":3,"./modules/carousel.module":4,"./modules/live-social-tugowar.module":5,"./modules/mpx-inline.module":6,"./modules/promo-template.module":7,"./modules/sbs-login.module":8,"./modules/show-hide.module":9,"./modules/slidelist.module":10,"./modules/tabs.module":11,"./modules/video-mode-trigger.module":12,"./modules/video-mode.module":13,"lie/polyfill":258,"t3js/dist/t3":266}],21:[function(e,t,n){t.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},{}],22:[function(e,t,n){t.exports=function(e){if(Array.isArray(e))return e},t.exports.__esModule=!0,t.exports.default=t.exports},{}],23:[function(e,t,n){var r=e("./arrayLikeToArray.js");t.exports=function(e){if(Array.isArray(e))return r(e)},t.exports.__esModule=!0,t.exports.default=t.exports},{"./arrayLikeToArray.js":21}],24:[function(e,t,n){t.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},t.exports.__esModule=!0,t.exports.default=t.exports},{}],25:[function(e,t,n){t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},{}],26:[function(e,r,t){var i=e("./setPrototypeOf.js"),o=e("./isNativeReflectConstruct.js");function s(e,t,n){return o()?r.exports=s=Reflect.construct.bind():r.exports=s=function(e,t,n){var r=[null];r.push.apply(r,t);t=new(Function.bind.apply(e,r));return n&&i(t,n.prototype),t},r.exports.__esModule=!0,r.exports.default=r.exports,s.apply(null,arguments)}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},{"./isNativeReflectConstruct.js":35,"./setPrototypeOf.js":44}],27:[function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},t.exports.__esModule=!0,t.exports.default=t.exports},{}],28:[function(e,t,n){t.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},t.exports.__esModule=!0,t.exports.default=t.exports},{}],29:[function(e,t,n){function r(){return t.exports=r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.exports.__esModule=!0,t.exports.default=t.exports,r.apply(this,arguments)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},{}],30:[function(e,t,n){var i=e("./superPropBase.js");function r(){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=r=Reflect.get.bind():t.exports=r=function(e,t,n){var r=i(e,t);if(r)return r=Object.getOwnPropertyDescriptor(r,t),r.get?r.get.call(arguments.length<3?e:n):r.value},t.exports.__esModule=!0,t.exports.default=t.exports,r.apply(this,arguments)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},{"./superPropBase.js":46}],31:[function(e,t,n){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},{}],32:[function(e,t,n){var r=e("./setPrototypeOf.js");t.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports},{"./setPrototypeOf.js":44}],33:[function(e,t,n){var r=e("./setPrototypeOf.js");t.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports},{"./setPrototypeOf.js":44}],34:[function(e,t,n){t.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},t.exports.__esModule=!0,t.exports.default=t.exports},{}],35:[function(e,t,n){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],36:[function(e,t,n){t.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},t.exports.__esModule=!0,t.exports.default=t.exports},{}],37:[function(e,t,n){t.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}},t.exports.__esModule=!0,t.exports.default=t.exports},{}],38:[function(e,t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},{}],39:[function(e,t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},{}],40:[function(e,t,n){var i=e("./defineProperty.js");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.forEach(function(e){i(t,e,n[e])})}return t},t.exports.__esModule=!0,t.exports.default=t.exports},{"./defineProperty.js":28}],41:[function(e,t,n){t.exports=function(e,t){if(null==e)return{};for(var n,r={},i=Object.keys(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r},t.exports.__esModule=!0,t.exports.default=t.exports},{}],42:[function(e,t,n){var r=e("./typeof.js").default,i=e("./assertThisInitialized.js");t.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)},t.exports.__esModule=!0,t.exports.default=t.exports},{"./assertThisInitialized.js":24,"./typeof.js":48}],43:[function(e,_,t){var j=e("./typeof.js").default;function n(){"use strict";_.exports=function(){return s},_.exports.__esModule=!0,_.exports.default=_.exports;var s={},e=Object.prototype,l=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},r=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",i=t.toStringTag||"@@toStringTag";function o(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,n){return e[t]=n}}function a(e,t,n,r){var i,o,s,a,t=t&&t.prototype instanceof f?t:f,t=Object.create(t.prototype),r=new w(r||[]);return t._invoke=(i=e,o=n,s=r,a="suspendedStart",function(e,t){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===e)throw t;return k()}for(s.method=e,s.arg=t;;){var n=s.delegate;if(n){n=function e(t,n){var r=t.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,e(t,n),"throw"===n.method))return c;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}r=u(r,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,c;r=r.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,c):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,c)}(n,s);if(n){if(n===c)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===a)throw a="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);a="executing";n=u(i,o,s);if("normal"===n.type){if(a=s.done?"completed":"suspendedYield",n.arg===c)continue;return{value:n.arg,done:s.done}}"throw"===n.type&&(a="completed",s.method="throw",s.arg=n.arg)}}),t}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}s.wrap=a;var c={};function f(){}function d(){}function p(){}var t={},h=(o(t,r,function(){return this}),Object.getPrototypeOf),h=h&&h(h(x([]))),g=(h&&h!==e&&l.call(h,r)&&(t=h),p.prototype=f.prototype=Object.create(t));function b(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function v(s,a){var t;this._invoke=function(n,r){function e(){return new a(function(e,t){!function t(e,n,r,i){var o,e=u(s[e],s,n);if("throw"!==e.type)return(n=(o=e.arg).value)&&"object"==j(n)&&l.call(n,"__await")?a.resolve(n.__await).then(function(e){t("next",e,r,i)},function(e){t("throw",e,r,i)}):a.resolve(n).then(function(e){o.value=e,r(o)},function(e){return t("throw",e,r,i)});i(e.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function m(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function y(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(m,this),this.reset(!0)}function x(t){if(t){var n,e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return n=-1,(e=function e(){for(;++n<t.length;)if(l.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:k}}function k(){return{value:void 0,done:!0}}return o(g,"constructor",d.prototype=p),o(p,"constructor",d),d.displayName=o(p,i,"GeneratorFunction"),s.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,o(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},s.awrap=function(e){return{__await:e}},b(v.prototype),o(v.prototype,n,function(){return this}),s.AsyncIterator=v,s.async=function(e,t,n,r,i){void 0===i&&(i=Promise);var o=new v(a(e,t,n,r),i);return s.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},b(g),o(g,i,"Generator"),o(g,r,function(){return this}),o(g,"toString",function(){return"[object Generator]"}),s.keys=function(n){var e,r=[];for(e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},s.values=x,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(y),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return o.type="throw",o.arg=n,r.next=e,t&&(r.method="next",r.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var s=l.call(i,"catchLoc"),a=l.call(i,"finallyLoc");if(s&&a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}var o=(i=i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc?null:i)?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),y(n),c}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n,r,i=this.tryEntries[t];if(i.tryLoc===e)return"throw"===(n=i.completion).type&&(r=n.arg,y(i)),r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},s}_.exports=n,_.exports.__esModule=!0,_.exports.default=_.exports},{"./typeof.js":48}],44:[function(e,n,t){function r(e,t){return n.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n.exports.__esModule=!0,n.exports.default=n.exports,r(e,t)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},{}],45:[function(e,t,n){var r=e("./arrayWithHoles.js"),i=e("./iterableToArrayLimit.js"),o=e("./unsupportedIterableToArray.js"),s=e("./nonIterableRest.js");t.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},{"./arrayWithHoles.js":22,"./iterableToArrayLimit.js":37,"./nonIterableRest.js":38,"./unsupportedIterableToArray.js":49}],46:[function(e,t,n){var r=e("./getPrototypeOf.js");t.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e},t.exports.__esModule=!0,t.exports.default=t.exports},{"./getPrototypeOf.js":31}],47:[function(e,t,n){var r=e("./arrayWithoutHoles.js"),i=e("./iterableToArray.js"),o=e("./unsupportedIterableToArray.js"),s=e("./nonIterableSpread.js");t.exports=function(e){return r(e)||i(e)||o(e)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},{"./arrayWithoutHoles.js":23,"./iterableToArray.js":36,"./nonIterableSpread.js":39,"./unsupportedIterableToArray.js":49}],48:[function(e,t,n){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},{}],49:[function(e,t,n){var r=e("./arrayLikeToArray.js");t.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},{"./arrayLikeToArray.js":21}],50:[function(e,t,n){var r=e("./getPrototypeOf.js"),i=e("./setPrototypeOf.js"),o=e("./isNativeFunction.js"),s=e("./construct.js");function a(e){var n="function"==typeof Map?new Map:void 0;return t.exports=a=function(e){if(null===e||!o(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return s(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports,a(e)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},{"./construct.js":26,"./getPrototypeOf.js":31,"./isNativeFunction.js":34,"./setPrototypeOf.js":44}],51:[function(t,e,n){t=t("../helpers/regeneratorRuntime")();e.exports=t;try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},{"../helpers/regeneratorRuntime":43}],52:[function(en,tn,e){!function(Qt){!function(){"use strict";en("core-js/modules/es.array.slice.js"),en("core-js/modules/es.function.name.js"),en("core-js/modules/es.array.from.js"),en("core-js/modules/es.string.iterator.js"),en("core-js/modules/es.symbol.js"),en("core-js/modules/es.symbol.description.js"),en("core-js/modules/es.symbol.iterator.js"),en("core-js/modules/es.array.iterator.js"),en("core-js/modules/web.dom-collections.iterator.js"),en("core-js/modules/es.reflect.construct.js");var e=en("@babel/runtime/helpers/get"),t=en("@babel/runtime/helpers/inherits"),n=en("@babel/runtime/helpers/possibleConstructorReturn"),M=en("@babel/runtime/helpers/getPrototypeOf"),B=en("@babel/runtime/helpers/classCallCheck"),F=en("@babel/runtime/helpers/createClass"),r=(en("core-js/modules/es.array.splice.js"),en("core-js/modules/es.object.assign.js"),en("core-js/modules/es.object.to-string.js"),en("core-js/modules/es.promise.js"),en("core-js/modules/es.promise.finally.js"),en("core-js/modules/es.object.keys.js"),en("core-js/modules/es.array.filter.js"),en("core-js/modules/es.array.concat.js"),en("core-js/modules/es.regexp.exec.js"),en("core-js/modules/es.string.match.js"),en("core-js/modules/es.array.includes.js"),en("core-js/modules/es.string.includes.js"),en("pristinejs")),D=(en("core-js/modules/web.dom-collections.for-each.js"),en("i18next")),i=en("axios"),q=en("@babel/runtime/helpers/slicedToArray"),U=en("@babel/runtime/helpers/toConsumableArray"),z=(en("core-js/modules/es.object.entries.js"),en("core-js/modules/es.array.map.js"),en("jss")),V=en("jss-preset-default"),H=en("jss-rtl"),W=en("@babel/runtime/helpers/wrapNativeSuper"),G=en("@babel/runtime/regenerator"),$=(en("core-js/modules/es.string.replace.js"),en("core-js/modules/es.string.split.js"),en("tslib")),J=en("lodash"),Y=en("@babel/runtime/helpers/assertThisInitialized"),K=(en("core-js/modules/es.object.get-own-property-descriptor.js"),en("core-js/modules/es.object.get-own-property-descriptors.js"),en("@babel/runtime/helpers/defineProperty")),X=(en("core-js/modules/es.array.join.js"),en("custom-event")),Z=(en("core-js/modules/es.string.sub.js"),en("jwt-decode"));function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var Q=o(e),e=o(t),ee=o(n),s=o(M),a=o(B),t=o(F),te=o(r),c=o(D),l=o(i),ne=o(q),re=o(U),ie=o(V),oe=o(H),n=o(W),se=o(G),u=o(J),ae=o(Y),le=o(K),ue=o(X),ce=o(Z),fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Qt?Qt:"undefined"!=typeof self?self:{};function de(e,t){return e(t={exports:{}},t.exports),t.exports}!function(){function i(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var s="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var e,a=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof fe&&fe];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function t(e,t){if(t)e:{for(var n=a,r=e.split("."),i=0;i<r.length-1;i++){var o=r[i];if(!(o in n))break e;n=n[o]}(o=t(i=n[r=r[r.length-1]]))!=i&&null!=o&&s(n,r,{configurable:!0,writable:!0,value:o})}}function o(e){var t="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return t?t.call(e):{next:i(e)}}if(t("Symbol",function(e){function n(e,t){this.A=e,s(this,"description",{configurable:!0,writable:!0,value:t})}if(e)return e;n.prototype.toString=function(){return this.A};var r="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",i=0;return function e(t){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new n(r+(t||"")+"_"+i++,t)}}),t("Symbol.iterator",function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var t="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),n=0;n<t.length;n++){var r=a[t[n]];"function"==typeof r&&"function"!=typeof r.prototype[e]&&s(r.prototype,e,{configurable:!0,writable:!0,value:function(){return(e={next:e=i(this)})[Symbol.iterator]=function(){return this},e;var e}})}return e}),"function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{e:{var n={};try{n.__proto__={a:!0},e=n.a;break e}catch(e){}e=!1}y=e?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var r=y;function l(){this.m=!1,this.j=null,this.v=void 0,this.h=1,this.u=this.C=0,this.l=null}function u(e){if(e.m)throw new TypeError("Generator is already running");e.m=!0}function c(e,t){return e.h=3,{value:t}}function f(e){this.g=new l,this.G=e}function d(t,e,n,r){try{var i=e.call(t.g.j,n);if(!(i instanceof Object))throw new TypeError("Iterator result "+i+" is not an object");if(!i.done)return t.g.m=!1,i;var o=i.value}catch(e){return t.g.j=null,t.g.s(e),p(t)}return t.g.j=null,r.call(t.g,o),p(t)}function p(t){for(;t.g.h;)try{var e=t.G(t.g);if(e)return t.g.m=!1,{value:e.value,done:!1}}catch(e){t.g.v=void 0,t.g.s(e)}if(t.g.m=!1,t.g.l){if(e=t.g.l,t.g.l=null,e.F)throw e.D;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function h(r){this.next=function(e){return r.o(e)},this.throw=function(e){return r.s(e)},this.return=function(e){return e=e,u((t=r).g),(n=t.g.j)?d(t,"return"in n?n.return:function(e){return{value:e,done:!0}},e,t.g.return):(t.g.return(e),p(t));var t,n},this[Symbol.iterator]=function(){return this}}function g(e,t){t=new h(new f(t));return r&&e.prototype&&r(t,e.prototype),t}if(l.prototype.o=function(e){this.v=e},l.prototype.s=function(e){this.l={D:e,F:!0},this.h=this.C||this.u},l.prototype.return=function(e){this.l={return:e},this.h=this.u},f.prototype.o=function(e){return u(this.g),this.g.j?d(this,this.g.j.next,e,this.g.o):(this.g.o(e),p(this))},f.prototype.s=function(e){return u(this.g),this.g.j?d(this,this.g.j.throw,e,this.g.o):(this.g.s(e),p(this))},"undefined"!=typeof Blob&&("undefined"==typeof FormData||!FormData.prototype.keys)){var b=function(e,t){for(var n=0;n<e.length;n++)t(e[n])},v=function(e,t,n){return t instanceof Blob&&(n=void 0!==n?String(n+""):"string"==typeof t.name?t.name:"blob",t.name!==n||"[object Blob]"===Object.prototype.toString.call(t))?(t=new File([t],n),[String(n),t]):[String(e),String(t)]},m=function(e,t){if(e.length<t)throw new TypeError(t+" argument required, but only "+e.length+" present.")},y="object"==typeof globalThis?globalThis:"object"==typeof window?window:"object"==typeof self?self:this,w=y.FormData,x=y.XMLHttpRequest&&y.XMLHttpRequest.prototype.send,k=y.Request&&y.fetch,_=y.navigator&&y.navigator.sendBeacon,j=y.Element&&y.Element.prototype,S=y.Symbol&&Symbol.toStringTag;S&&(Blob.prototype[S]||(Blob.prototype[S]="Blob"),"File"in y&&!File.prototype[S]&&(File.prototype[S]="File"));try{new File([],"")}catch(e){y.File=function(e,t,n){return e=new Blob(e,n),n=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date,Object.defineProperties(e,{name:{value:t},lastModifiedDate:{value:n},lastModified:{value:+n},toString:{value:function(){return"[object File]"}}}),S&&Object.defineProperty(e,S,{value:"File"}),e}}var E,O,L=function(e){this.i=[];var n=this;e&&b(e.elements,function(t){var e;!t.name||t.disabled||"submit"===t.type||"button"===t.type||t.matches("form fieldset[disabled] *")||("file"===t.type?(e=t.files&&t.files.length?t.files:[new File([],"",{type:"application/octet-stream"})],b(e,function(e){n.append(t.name,e)})):"select-multiple"===t.type||"select-one"===t.type?b(t.options,function(e){!e.disabled&&e.selected&&n.append(t.name,e.value)}):"checkbox"===t.type||"radio"===t.type?t.checked&&n.append(t.name,t.value):(e="textarea"===t.type?t.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):t.value,n.append(t.name,e)))})};(O=L.prototype).append=function(e,t,n){m(arguments,2),this.i.push(v(e,t,n))},O.delete=function(t){m(arguments,1);var n=[];t=String(t),b(this.i,function(e){e[0]!==t&&n.push(e)}),this.i=n},O.entries=function e(){var t,n=this;return g(e,function(e){if(1==e.h&&(t=0),3!=e.h)return e=t<n.i.length?c(e,n.i[t]):void(e.h=0);t++,e.h=2})},O.forEach=function(e,t){m(arguments,1);for(var n=o(this),r=n.next();!r.done;r=n.next()){var r=(i=o(r.value)).next().value,i=i.next().value;e.call(t,i,r,this)}},O.get=function(e){m(arguments,1);var t=this.i;e=String(e);for(var n=0;n<t.length;n++)if(t[n][0]===e)return t[n][1];return null},O.getAll=function(t){m(arguments,1);var n=[];return t=String(t),b(this.i,function(e){e[0]===t&&n.push(e[1])}),n},O.has=function(e){m(arguments,1),e=String(e);for(var t=0;t<this.i.length;t++)if(this.i[t][0]===e)return!0;return!1},O.keys=function e(){var t,n,r,i=this;return g(e,function(e){if(1==e.h&&(t=o(i),n=t.next()),3!=e.h)return n.done?void(e.h=0):(r=n.value,r=o(r),c(e,r.next().value));n=t.next(),e.h=2})},O.set=function(t,e,n){m(arguments,2),t=String(t);var r=[],i=v(t,e,n),o=!0;b(this.i,function(e){e[0]===t?o=o&&!r.push(i):r.push(e)}),o&&r.push(i),this.i=r},O.values=function e(){var t,n,r,i=this;return g(e,function(e){if(1==e.h&&(t=o(i),n=t.next()),3!=e.h)return n.done?void(e.h=0):(r=n.value,(r=o(r)).next(),c(e,r.next().value));n=t.next(),e.h=2})},L.prototype._asNative=function(){for(var e=new w,t=o(this),n=t.next();!n.done;n=t.next()){var n=(r=o(n.value)).next().value,r=r.next().value;e.append(n,r)}return e},L.prototype._blob=function(){for(var e="----formdata-polyfill-"+Math.random(),t=[],n=o(this),r=n.next();!r.done;r=n.next()){var r=(i=o(r.value)).next().value,i=i.next().value;t.push("--"+e+"\r\n"),i instanceof Blob?t.push('Content-Disposition: form-data; name="'+r+'"; filename="'+i.name+'"\r\nContent-Type: '+(i.type||"application/octet-stream")+"\r\n\r\n",i,"\r\n"):t.push('Content-Disposition: form-data; name="'+r+'"\r\n\r\n'+i+"\r\n")}return t.push("--"+e+"--"),new Blob(t,{type:"multipart/form-data; boundary="+e})},L.prototype[Symbol.iterator]=function(){return this.entries()},L.prototype.toString=function(){return"[object FormData]"},j&&!j.matches&&(j.matches=j.matchesSelector||j.mozMatchesSelector||j.msMatchesSelector||j.oMatchesSelector||j.webkitMatchesSelector||function(e){for(var t=(e=(this.document||this.ownerDocument).querySelectorAll(e)).length;0<=--t&&e.item(t)!==this;);return-1<t}),S&&(L.prototype[S]="FormData"),x&&(E=y.XMLHttpRequest.prototype.setRequestHeader,y.XMLHttpRequest.prototype.setRequestHeader=function(e,t){E.call(this,e,t),"content-type"===e.toLowerCase()&&(this.B=!0)},y.XMLHttpRequest.prototype.send=function(e){e instanceof L&&(e=e._blob(),this.B||this.setRequestHeader("Content-Type",e.type)),x.call(this,e)}),k&&(y.fetch=function(e,t){return t&&t.body&&t.body instanceof L&&(t.body=t.body._blob()),k.call(this,e,t)}),_&&(y.navigator.sendBeacon=function(e,t){return t instanceof L&&(t=t._asNative()),_.call(this,e,t)}),y.FormData=L}}();var pe=!1;function f(){if(pe){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log("SbsLogin [info]",t)}}var d={en:{title:"English"},ar:{title:"عربي"},"zh-Hans":{title:"简体中文"},"zh-Hant":{title:"繁體中文"},hi:{title:"हिन्दी"},ko:{title:"한국어"},vi:{title:"Tiếng Việt"}},he={en:{translation:{loginForm:{header:"Sign In",forgotPasswordLink:"Forgot password?"},resetPasswordForm:{header:"Reset your password",p:"Enter your email address below, and we'll email you a link to reset your password"},resetPasswordSuccess:{p1:"If you have an active SBS account we have sent instructions on how to create a new password to {{- email}}.",p2:"Please check your spam folder if you can’t see an email from us."},createAccountForm:{header:"Create an SBS Account",p:"By creating an account, you agree to SBS's {{- termsLink}} and {{- privacyLink}} including receiving email updates and offers from SBS. You may unsubscribe at any time.",termsLink:"terms of service",privacyLink:"privacy policy",why:"Why do I need an account?"},socialLogin:{title:"Or sign in with:",signInWithApple:"Sign in with Apple",signInWithFacebook:"Sign in with Facebook",signInWithGoogle:"Sign in with Google"},linkAccount:{heading:"It looks like you already have an SBS account set up with this email address.",p:"Sign in below to link the account"},socialAskEmail:{heading:"You're almost done!",p:"Please enter your email address to continue"},accountNotVerified:{heading:"Your account hasn't been validated",p1:"We need to confirm your email address is correct before you can sign in",p2:"When you created your account, we sent a validation email. If you can find the email, please follow the link contained within",p3:"If you can't find the email, press the Resend button and we'll send another"},genericError:{header:"Error",p:"Sorry, we couldn't complete your request. Please try again shortly."},missingFieldsForm:{header:"Almost there!",p:"Please provide the following information below to complete your SBS account."},formFields:{firstName:"First Name",email:"Email",password:"Password",showPassword:"SHOW",hidePassword:"HIDE",showPasswordLabel:"Show password",hidePasswordLabel:"Hide password",birthYear:"Birth Year",gender:"Gender"},formOptions:{gender:{male:"Male",female:"Female",nonBinary:"Non-binary",none:"I don't identify with the above"}},verificationRequired:{heading:"Nearly done!",p1:"We've sent a confirmation email to {{- email}}.",p2:"You will need to click on the link in the email to validate your account before you can sign in."},error:{generic:"Sorry, we can't complete your request. Please try again in a moment.",invalidLogin:"Sorry, this email and password combination is not valid.",existingUserTraditional:"It looks like you already have an SBS account. Please sign in with your email and password.",existingUserSocial:"It looks like you already have an SBS account. Please sign in with {{provider}}."},formError:{invalidEmail:"Please enter a valid email address",emailRequired:"Email address is required",emailUnavailable:"Email address is already taken",firstNameRequired:"First name is required",passwordRequired:"Password is required",passwordStrength:"Password must be at least 5 characters with a number",birthYearRequired:"Birth year is required",genderRequired:"Gender is required",linkFailed:"Unable to link the account"},button:{createAccount:"Create Account",continue:"Continue",linkAccount:"Link Account",resend:"Resend",resetPassword:"Reset Password",signIn:"Sign in",close:"Close"},footer:{alreadyHaveAccount:"Already have an account?",signInLink:"Sign in",createAccount:"Create an Account"},geoBlockingMessage:"You appear to be outside Australia. Due to publishing rights most of our videos are only available in Australia."}},ar:{translation:{loginForm:{header:"تسجيل الدخول",forgotPasswordLink:"هل نسيت كلمة السر؟"},resetPasswordForm:{header:"إعادة تعيين كلمة السر",p:"أدخل عنوان بريدك الإلكتروني أو اسم المستخدم أدناه، وسنرسل لك رابطًا لإعادة تعيين كلمة سرك."},createAccountForm:{header:"انشئ حساب",p:"بإنشاء الحساب، توافق على {{- termsLink}} و {{- privacyLink}} الخاصة بـ SBS، بما في ذلك تلقي تحديثات البريد الإلكتروني والعروض من SBS. يمكنك إلغاء الاشتراك في أي وقت.",termsLink:"شروط الخدمة",privacyLink:"الخصوصية",why:"لماذا أحتاج إلى حساب؟"},socialLogin:{title:"أو تسجيل الدخول باستخدام:"},linkAccount:{heading:"مرحبًا، يبدو أن لديك بالفعل حساب SBS تم إعداده باستخدام عنوان البريد الإلكتروني هذا.",p:"سجل الدخول أدناه لربط الحساب"},socialAskEmail:{heading:"أنت على وشك الإنتهاء!",p:"الرجاء إدخال عنوان البريد الإلكتروني الخاص بك."},accountNotVerified:{heading:"لم يتم التحقق من حسابك",p1:"نحتاج إلى تأكيد صحة عنوان بريدك الإلكتروني قبل أن تتمكن من تسجيل الدخول.",p2:"عندما أنشأت حسابك، أرسلنا رسالة تحقق من الصحة.",p3:"إذا تمكنت من العثور على البريد الإلكتروني، فيرجى اتباع الرابط الموجود به."},genericError:{header:"خطأ",p:"عذرا، لم نتمكن من استكمال طلبك. يرجى المحاولة مرة أخرى بعد قليل."},missingFieldsForm:{header:"اوشكنا على الانتهاء!",p:"يرجى تقديم المعلومات التالية أدناه لإكمال حساب SBS الخاص بك."},formFields:{firstName:"الإسم الأول",email:"البريد الإلكتروني",password:"كلمة السر",showPassword:"إظهار",hidePassword:"إخفاء",birthYear:"سنة الميلاد",gender:"الجنس"},formOptions:{gender:{male:"ذكر",female:"أنثى",nonBinary:"غير عن الجنسين",none:"آخر"}},verificationRequired:{heading:"اوشكنا على الانتهاء!",p1:"لقد أرسلنا للتو رسالة تأكيد بالبريد الإلكتروني إلى {{- email}}",p2:"ستحتاج إلى النقر على الرابط للتحقق من الصحة."},error:{generic:"عذرا، لم نتمكن من استكمال طلبك. يرجى معاودة المحاولة  بعد قليل.",invalidLogin:"تفاصيل تسجيل الدخول غير صالحة",existingUserTraditional:"يبدو أن لديك حساب على SBS. الرجاء تسجيل الدخول باستخدام بريدك الإلكتروني وكلمة السر.",existingUserSocial:"يبدو أن لديك حساب على SBS. الرجاء تسجيل الدخول عبر {{provider}}."},formError:{invalidEmail:"مطلوب بريد ألكتروني صالح",emailRequired:"البريد الإلكتروني مطلوب",emailUnavailable:"البريد الإلكتروني هذا موجود مسبقا",firstNameRequired:"الإسم الأول مطلوب",passwordRequired:"مطلوب كلمة السر",passwordStrength:"يجب أن تتكون كلمة المرور من 5 أحرف على الأقل مع رقم",birthYearRequired:"مطلوب سنة الولادة",genderRequired:"نوع الجنس مطلوب",linkFailed:"تعذر ربط الحساب"},button:{createAccount:"انشئ حساب",continue:"تابع",linkAccount:"ربط الحساب",resend:"أعد الإرسال",resetPassword:"إعادة تعيين كلمة السر",signIn:"تسجيل الدخول",close:"أقفل"},footer:{alreadyHaveAccount:"هل لديك حساب؟",signInLink:"سجل الدخول",createAccount:"انشئ حساب"}}},"zh-Hans":{translation:{loginForm:{header:"登录",forgotPasswordLink:"忘了密码?"},resetPasswordForm:{header:"你的密码重置",p:"输入你的电子邮件地址或名下，我们将电子邮件你一个链接到你的密码重置"},createAccountForm:{header:"创建一个新帐户",p:"通过创建一个账户，你将同意SBS的 {{- termsLink}}和{{- privacyLink}}，包括了接收来自SBS的邮件更新和提议。你可以在任何时候取消订阅。",termsLink:"服务条款",privacyLink:"隐私政策",why:"我为什么需要一个账号？"},socialLogin:{title:"或者登录："},linkAccount:{heading:"它看起来像你已经有一个SBS账户设立这个电子邮件地址。",p:"登录下面的链接的帐户"},socialAskEmail:{heading:"你几乎完成了！",p:"请输入你的电子邮件地址继续"},accountNotVerified:{heading:"你的帐户还没有被验证过的",p1:"我们需要确认你的电子邮件地址是正确之前，你可以登录",p2:"当你创造了你的帐户时，我们发一个验证的电子邮件。 如果你能找到的电子邮件，请按照链接包含在",p3:"如果你不能找到电子邮件，按下重新发送按钮，我们将发送给另一个"},genericError:{header:"错误",p:"对不起，我们无法完成你的请求。 请再试一次。"},missingFieldsForm:{header:"几乎没有！",p:"请提供以下信息下来完成你的SBS帐户。"},formFields:{firstName:"名字",email:"电子邮件",password:"密码",showPassword:"显示",hidePassword:"隐藏",birthYear:"出生年份",gender:"性别"},formOptions:{gender:{male:"男性",female:"女性",nonBinary:"非二元性别",none:"我不以以上选项认定自己的身份"}},verificationRequired:{heading:"即将完成！",p1:"我们已经发送确认的电子邮件到{{- email}}。",p2:"在登陆前，你需要点击邮件中的链接以完成你的账号认证。"},error:{generic:"对不起，我们不能完成你的请求。 请再试一次在一个时刻。",invalidLogin:"对不起，这个邮箱和密码组合不是有效的。",existingUserTraditional:"看来您已经有一个SBS帐户。请使用您的电子邮件和密码登录。",existingUserSocial:"看来您已经有一个SBS帐户。请使用{{provider}}登录。"},formError:{invalidEmail:"请输入一个有效的电子邮件地址",emailRequired:"电子邮件地址是必需的",emailUnavailable:"电子邮件地址已经采取的",firstNameRequired:"第一名是必需的",passwordRequired:"需要密码",passwordStrength:"密码必须至少有5个字符数",birthYearRequired:"出生年份是必需的",genderRequired:"性别是必需的",linkFailed:"无法连接帐户"},button:{createAccount:"创建的帐户",continue:"继续",linkAccount:"链路帐户",resend:"重新发送",resetPassword:"密码重置",signIn:"登录",close:"关闭"},footer:{alreadyHaveAccount:"已经有一个帐户吗？",signInLink:"登录",createAccount:"创建一个帐户"}}},"zh-Hant":{translation:{loginForm:{header:"登入",forgotPasswordLink:"忘記密碼？"},resetPasswordForm:{header:"重設密碼",p:"在下面輸入您的電郵地址, 我們將通過電子郵件向您發送連結以重設密碼。"},createAccountForm:{header:"建立SBS帳戶",p:"建立帳戶即表示您同意SBS的{{- termsLink}} 和{{- privacyLink}}包括從SBS接收電子郵件更新和優惠。您可以隨時取消訂閱。",termsLink:"服務條款",privacyLink:"私隱政策",why:"為何我需要一個帳戶？"},socialLogin:{title:"或利用 登入："},linkAccount:{heading:"您似乎已經使用此電子郵件地址建立了SBS帳戶。",p:"登入以連結帳戶"},socialAskEmail:{heading:"快要完成了",p:"請輸入您的電郵地址以繼續"},accountNotVerified:{heading:"您的帳戶尚未通過驗證",p1:"我們需要先確認您的電子郵件地址正確無誤，然後您才能登入",p2:"當您建立帳戶時，我們發送了一封驗證電子郵件。如果您找到該電子郵件，請點擊其中包含的連結",p3:"如果您找不到該電子郵件，請按重發按鈕，我們將再次發送"},genericError:{header:"錯誤",p:"抱歉，我們無法完成您的請求。請稍後重試。"},missingFieldsForm:{header:"快將完成!",p:"請在下面提供以下資料以完成您的SBS帳戶建立"},formFields:{firstName:"名字",email:"電子郵件地址",password:"密碼",showPassword:"顯示",hidePassword:"隱藏",showPasswordLabel:"顯示",hidePasswordLabel:"隱藏",birthYear:"出生年份",gender:"性別"},formOptions:{gender:{male:"男",female:"女",nonBinary:"非二元性別",none:"我不認同上述內容"}},verificationRequired:{heading:"快將完成!",p1:"我們已經向發送了一封確認電子郵件 {{- email}}。",p2:"您需要先點擊電子郵件中的連結以驗證您的帳戶，然後才能登入。"},error:{generic:"抱歉，我們無法完成您的請求。請稍後重試。",invalidLogin:"抱歉，此電子郵件和密碼組合無效",existingUserTraditional:"看來您已經有一個SBS帳戶。請使用您的電子郵件和密碼登入。",existingUserSocial:"看來您已經有一個SBS帳戶。請使用您的 {{provider}}登入。"},formError:{invalidEmail:"請輸入有效的電子郵件地址",emailRequired:"必須輸入電子郵件地址",emailUnavailable:"該電子郵件地址已被使用",firstNameRequired:"必須輸入名字",passwordRequired:"必須輸入密碼",passwordStrength:"您的密碼必須至少5個字符和一個數字",birthYearRequired:"必須輸入出生年份",genderRequired:"必須輸入性別",linkFailed:"無法連結帳戶"},button:{createAccount:"建立一個SBS帳戶",continue:"繼續",linkAccount:"連結帳戶",resend:"重發",resetPassword:"重設密碼",signIn:"登入",close:"關閉"},footer:{alreadyHaveAccount:"已經有帳戶了？",signInLink:"登入",createAccount:"建立帳戶"}}},hi:{translation:{loginForm:{header:"साइन इन करें",forgotPasswordLink:"पासवर्ड भूल गए?"},resetPasswordForm:{header:"अपना पासवर्ड रीसेट करें",p:"अपना ईमेल आईडी नीचे दर्ज करें, और हम आपको अपना पासवर्ड रीसेट करने के लिए एक लिंक ईमेल करेंगे"},resetPasswordSuccess:{p1:"अगर आपके पास एक सक्रिय SBS अकाउंट है, तो हमने {{- email}} पर नया पासवर्ड सेट करने के निर्देश भेजे हैं",p2:"अगर आपको हमारा ईमेल नहीं मिला है, तो कृपया अपना स्पैम फोल्डर देखें"},createAccountForm:{header:"SBS अकाउंट बनाएं",p:"एक अकाउंट बनाकर आप SBS के {{- termsLink}} और {{- privacyLink}} से सहमति व्यक्त करते हैं। इसमें SBS से ईमेल अपडेट और पेशकशें प्राप्त करना शामिल है। आप किसी भी समय सदस्यता छोड़ सकते हैं।",termsLink:"सेवा के नियम",privacyLink:"गोपनीयता नीति",why:"मुझे अकाउंट की ज़रूरत क्यों है?"},socialLogin:{title:"या इसके साथ साइन इन करें",signInWithApple:"ऐपल आईडी से साइन इन करें",signInWithFacebook:"फेसबुक आईडी से साइन इन करें",signInWithGoogle:"गूगल आईडी से साइन इन करें"},linkAccount:{heading:"लगता हैं कि आपका इस ईमेल आईडी से सेटअप किया हुआ एक SBSअकाउंट पहले से है",p:"अकाउंट लिंक करे के लिए साइन करें"},socialAskEmail:{heading:"आपका काम पूरा होने को है",p:"जारी रखने के लिए कृपया अपनी ईमेल आईडी दर्ज करें"},accountNotVerified:{heading:"आपके अकाउंट का पुष्टिकरण नहीं किया गया हैै",p1:"इससे पहले की आप साइन इन करें हमें पुष्टि करनी है कि आपकी ईमेल आईडी सही है।",p2:"जब आपने अकाउंट बनाया था, तब हमने आपको एक पुष्टिकरण ईमेल भेजा था। यदि आपको वह ईमेल मिल जाए, तो कृपया उसमें दिए लिंक पर जाएं",p3:"यदि आपको ईमेल न मिले, तो कृपया दोबारा भेजें बटन दबाएं और हम एक और ईमेल भेज देंगे"},genericError:{header:"त्रुटि",p:"क्षमा करें, हम आपका अनुरोध पूरा नहीं कर सके। कृपया थोड़ी देर में दोबारा प्रयास करें।"},missingFieldsForm:{header:"बस हो गया!",p:"अपना SBS अकाउंट पूरा करने के लिए कृपया नीचे लिखी जानकारी दीजिये"},formFields:{firstName:"पहला नाम",email:"ईमेल आईडी",password:"पासवर्ड",showPassword:"पासवर्ड दिखाएं",hidePassword:"पासवर्ड छिपाएं",birthYear:"जन्म वर्ष",gender:"लिंग"},formOptions:{gender:{male:"पुरुष",female:"महिला",nonBinary:"नॉन-बाइनरी",none:"मैं उपरोक्त में से नहीं हूँ"}},verificationRequired:{heading:"लगभग हो गया!",p1:"हमने निम्नलिखित ईमेल आईडी पर एक पुष्टिकरण ईमेल भेजा है {{- email}}",p2:"साइन इन करने से पहले आपको अपने अकाउंट का पुष्टिकरण करने के लिए ईमेल में मौजूद लिंक पर क्लिक करना होगा।"},error:{generic:"क्षमा करें, हम आपका अनुरोध पूरा नहीं कर सकते। कृपया कुछ देर में दोबारा प्रयास करें।",invalidLogin:"क्षमा करें, यह ईमेल और पासवर्ड संयोजन मान्य नहीं है",existingUserTraditional:"ऐसा लगता है कि आपके पास पहले से एक SBS अकाउंट है। कृपया अपने ईमेल और पासवर्ड से साइन इन करें।",existingUserSocial:"ऐसा लगता है कि आपके पास पहले से ही एक SBS अकाउंट है। कृपया {{provider}} से साइन इन करें।"},formError:{invalidEmail:"कृपया एक मान्य ईमेल आईडी दर्ज करें",emailRequired:"ईमेल आईडी आवश्यक है",emailUnavailable:"यह ईमेल आईडी पहले ही दर्ज है",firstNameRequired:"पहला नाम आवश्यक है",passwordRequired:"एक पासवर्ड आवश्यक है",passwordStrength:"आपके पासवर्ड में कम से कम 5 वर्ण और एक अंक होना चाहिए",birthYearRequired:"जन्म वर्ष आवश्यक है",genderRequired:"लिंग आवश्यक है",linkFailed:"अकाउंट जोड़ने में असमर्थ हैं"},button:{createAccount:"SBS अकाउंट बनाएं",continue:"जारी रखें",linkAccount:"अकाउंट जोड़ें",resend:"दोबारा भेजें",resetPassword:"पासवर्ड रीसेट करें",signIn:"साइन इन करें",close:"बंद करें"},footer:{alreadyHaveAccount:"पहले से कोई अकाउंट है?",signInLink:"साइन इन करें",createAccount:"अकाउंट बनाएं"}}},ko:{translation:{loginForm:{header:"로그인",forgotPasswordLink:"비밀번호를 잊어버리셨습니까?"},resetPasswordForm:{header:"비밀번호를 재설정하십시오",p:"아래에 이메일 주소 또는 사용자 이름을 입력해주십시오. 비밀번호를 재설정할 수 있는 링크를 보내드리겠습니다"},createAccountForm:{header:"SBS 계정 생성",p:"계정을 생성함으로써 귀하는 SBS로부터 이메일 업데이트 및 혜택 수신을 포함하여 SBS의 {{- termsLink}} 및 {{- privacyLink}}에 동의하시게 됩니다. 언제든지 수신거부하실 수 있습니다.",termsLink:"서비스 이용 약관",privacyLink:"개인정보 보호정책",why:"계정이 필요한 이유는 무엇입니까?"},socialLogin:{title:"또는 다음으로 로그인:"},linkAccount:{heading:"이 이메일 주소로 이미 SBS 계정을 생성하셨습니다.",p:"로그인하여 계정 링크하기"},socialAskEmail:{heading:"다 되어갑니다!",p:"계속하시려면 이메일 주소를 입력해주십시오"},accountNotVerified:{heading:"계정이 확인되지 않았습니다",p1:"계속 진행하려면 이메일 주소가 올바른지 확인해야 합니다",p2:"계정 생성을 눌렀을 때 확인 이메일을 보내드렸습니다. 이메일을 확인하시고 이메일에 있는 링크를 따라가시기 바랍니다",p3:"이메일을 받지 못하셨다면 재전송 버튼을 클릭하십시오. 다시 보내드리겠습니다"},genericError:{header:"오류",p:"죄송합니다. 요청을 처리할 수 없었습니다. 잠시 후에 다시 시도해주십시오."},missingFieldsForm:{header:"거의 다 끝났습니다!",p:"SBS 계정 생성을 완료하려면 아래에 요청된 정보를 입력하십시오."},formFields:{firstName:"이름",email:"이메일 주소",password:"비밀번호",showPassword:"공개",hidePassword:"비공개",birthYear:"출생 연도",gender:"성별"},formOptions:{gender:{male:"남성",female:"여성",nonBinary:"논바이너리",none:"위에 해당하는 성 정체성이 아님"}},verificationRequired:{heading:"거의 다 끝났습니다!",p1:"(으)로 확인 이메일을 전송해드렸습니다 {{- email}}.",p2:"로그인하기 전에 이메일에 포함된 링크를 클릭하여 귀하의 계정을 확인해야 합니다."},error:{generic:"죄송합니다. 요청을 처리할 수 없습니다. 잠시 후에 다시 시도해주십시오..",invalidLogin:"죄송합니다. 이메일과 비밀번호 조합이 유효하지 않습니다",existingUserTraditional:"이미 SBS 계정이 있습니다. 이메일과 비밀번호로 로그인하시기 바랍니다.",existingUserSocial:"이미 SBS 계정이 있습니다. {{provider}}(으)로 로그인하시기 바랍니다."},formError:{invalidEmail:"유효한 이메일 주소를 입력하십시오",emailRequired:"이메일 주소는 필수 항목입니다",emailUnavailable:"이미 사용 중인 이메일 주소입니다",firstNameRequired:"이름은 필수 항목입니다",passwordRequired:"비밀번호는 필수 항목입니다",passwordStrength:"비밀번호는 최소 글자 5자와 숫자 1자의 조합이어야 합니다",birthYearRequired:"출생연도는 필수 항목입니다",genderRequired:"성별은 필수 항목입니다",linkFailed:"계정에 링크할 수 없습니다"},button:{createAccount:"SBS 계정 생성",continue:"계속",linkAccount:"계정 링크",resend:"재전송",resetPassword:"비밀번호 재설정",signIn:"로그인",close:"닫기"},footer:{alreadyHaveAccount:"이미 계정이 있으십니까?",signInLink:"로그인",createAccount:"계정 생성"}}},vi:{translation:{loginForm:{header:"Đăng nhập",forgotPasswordLink:"Quên mật khẩu?"},resetPasswordForm:{header:"Đặt lại mật khẩu của bạn",p:"Nhập địa chỉ email hoặc tên người dùng của bạn bên dưới, chúng tôi sẽ gửi bạn một liên kết qua email để đặt lại mật khẩu"},createAccountForm:{header:"Tạo tài khoản SBS",p:"Khi tạo một tài khoản, bạn đồng ý với SBS {{- termsLink}} và {{- privacyLink}} bao gồm nhận thông tin cập nhật qua email và ưu đãi từ SBS. Bạn có thể hủy đăng ký theo dõi vào bất cứ lúc nào.",termsLink:"Điều khoản dịch vụ",privacyLink:"Chính sách quyền riêng tư",why:"Tại sao tôi cần có tài khoản?"},socialLogin:{title:"hoặc đăng nhập bằng:"},linkAccount:{heading:"Có vẻ như bạn đã có một tài khoản SBS được lập bằng địa chỉ email này.",p:"Đăng nhập để liên kết tài khoản"},socialAskEmail:{heading:"Bạn sắp thực hiện xong rồi!",p:"Hãy nhập địa chỉ email của bạn để tiếp tục"},accountNotVerified:{heading:"Tài khoản của bạn chưa được xác thực",p1:"Chúng tôi cần xác nhận địa chỉ email của bạn là chính xác trước khi bạn có thể đăng nhập",p2:"Khi bạn tạo tài khoản, chúng tôi đã gửi một email xác thực. Nếu bạn có thể tìm thấy email, vui lòng theo liên kết có trong đó",p3:"Nếu bạn không thể tìm thấy email, hãy nhấn nút Gửi lại và chúng tôi sẽ gửi một email khác"},genericError:{header:"Lỗi",p:"Xin lỗi, chúng tôi không thể hoàn thành yêu cầu của bạn. Vui lòng thử lại sau giây lát."},missingFieldsForm:{header:"Gần xong rồi!",p:"Vui lòng cung cấp các thông tin sau để hoàn tất tài khoản SBS của bạn."},formFields:{firstName:"Tên",email:"Địa chỉ email",password:"Mật khẩu",showPassword:"Hiện",hidePassword:"Ẩn",birthYear:"Năm sinh",gender:"Giới tính"},formOptions:{gender:{male:"Nam",female:"Nữ",nonBinary:"Phi nhị giới",none:"Tôi không xác định với những mục trên"}},verificationRequired:{heading:"Gần xong rồi!",p1:"Chúng tôi đã gửi một email xác nhận đến {{- email}}.",p2:"Bạn cần nhấp vào liên kết trong email để xác thực tài khoản của mình trước khi có thể đăng nhập."},error:{generic:"Xin lỗi, chúng tôi không thể hoàn thành yêu cầu của bạn. Vui lòng thử lại sau giây lát.",invalidLogin:"Xin lỗi, kết hợp email và mật khẩu này không hợp lệ.",existingUserTraditional:"Có vẻ như bạn đã có tài khoản SBS. Vui lòng đăng nhập bằng email và mật khẩu của bạn.",existingUserSocial:"Có vẻ như bạn đã có tài khoản SBS. Vui lòng đăng nhập bằng {{provider}}."},formError:{invalidEmail:"Vui lòng nhập một địa chỉ email hợp lệ",emailRequired:"Địa chỉ email là bắt buộc",emailUnavailable:"Địa chỉ email này đã tồn tại",firstNameRequired:"Yêu cầu nhập tên",passwordRequired:"Yêu cầu nhập mật khẩu",passwordStrength:"Mật khẩu của bạn phải bao gồm ít nhất 5 ký tự và một con số",birthYearRequired:"Yêu cầu nhập năm sinh",genderRequired:"Yêu cầu nhập giới tính",linkFailed:"Không thể liên kết các tài khoản"},button:{createAccount:"Tạo tài khoản SBS",continue:"Tiếp tục",linkAccount:"Liên kết Tài khoản",resend:"Gửi lại",resetPassword:"Đặt lại mật khẩu",signIn:"Đăng nhập",close:"Đóng"},footer:{alreadyHaveAccount:"Bạn đã có sẵn tài khoản?",signInLink:"Đăng nhập",createAccount:"Tạo tài khoản"}}}};function p(e){return"ar"===e}var h={instance:l.default.create(),authInstance:l.default.create(),init:function(){this.instance=l.default.create(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})},initAuth:function(){this.authInstance=l.default.create(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})}};function ge(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s.default(n);return e=r?(e=s.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),ee.default(this,e)}}M=n.default(Error),e.default(b,M),be=ge(b);var be,g=b;function b(e,t){return a.default(this,b),t=be.call(this,t),Object.setPrototypeOf(ae.default(t),(this instanceof b?this.constructor:void 0).prototype),Error.captureStackTrace&&Error.captureStackTrace(ae.default(t),b),t.name="SbsLoginError",t.code=e,t}B=n.default(Error),e.default(v,B),ve=ge(v);var ve,me,ye=v;function v(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return a.default(this,v),t=ve.call(this,t),Object.setPrototypeOf(ae.default(t),(this instanceof v?this.constructor:void 0).prototype),Error.captureStackTrace&&Error.captureStackTrace(ae.default(t),g),t.name="SbsLoginErrorI18N",t.code=e,t.options=n,t}function we(e,t){return h.instance.get("/api/v3/member/availability",{params:{type:e,data:t}}).then(function(e){e=e.data;return u.default.get(e,"availability.response.available",!1)})}function xe(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s.default(n);return e=r?(e=s.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),ee.default(this,e)}}function ke(i){return $.__awaiter(this,void 0,void 0,se.default.mark(function e(){var t,n,r;return se.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=function(e){return"".concat(e).concat(Math.floor(1e4+9e4*Math.random())).replace(/[\W_]+/g,"")},n=i.replace(/[\W_]+/g,""),n=t(n=""===n?"sbsuser":n),r=0;case 5:return e.next=7,we("username",n);case 7:if(e.t0=e.sent,!0===e.t0){e.next=15;break}if(10<=++r)throw new Error("Unable to generate username after 10x retries");e.next=12;break;case 12:n=t(i),e.next=5;break;case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}},e)}))}function _e(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]}function je(e,t,n){var n=2<arguments.length&&void 0!==n?n:document.body,r=document.createElement("script");r.src=e,t&&(r.onload=t),n.appendChild(r)}function Se(e,t){e.addEventListener("click",t)}function Ee(e,t){var n=["Enter"];"button"===e.getAttribute("role")&&n.push("Space"),e.addEventListener("keypress",function(e){-1!==n.indexOf(e.code)&&t()})}function m(e,t){Se(e,t),Ee(e,t)}function y(e){P().dispatchEvent(e)}function w(e){return P().querySelector(e)}function x(){return P().getElementsByTagName("form")[0]}function Oe(e,t){if("SbsLoginError"===e.name)return e.message;var n={};return 1<arguments.length&&void 0!==t&&t&&(n.lng="en"),"SbsLoginErrorI18N"===e.name?c.default.t(e.message,Object.assign(Object.assign({},n),e.options)):c.default.t("error.generic",n)}function Le(e,t){e=w(e);e&&(e.innerHTML=Oe(t))}function k(e){Le(".sbs-login-form-error",e)}function Ce(e){for(var t="".concat(e,"="),n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r+=1){for(var i=n[r];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""}function Ae(e){e=e.match(/(local|qa|stg).sbs.com.au$/);return e?"".concat(e[1],".sbs_session"):"sbs_session"}function Re(e){var r;return a.default(this,Re),(r=me.call(this,function(t,n){return e(function(e){t(e),r._status="Resolved"},function(e){n(e),r._status="Rejected"})}))._status="Pending",r}F=n.default(Promise),e.default(Re,F),me=xe(Re),t.default(Re,[{key:"status",get:function(){return this._status}},{key:"isPending",value:function(){return"Pending"===this._status}},{key:"isResolved",get:function(){return"Resolved"===this._status}},{key:"isRejected",get:function(){return"Rejected"===this._status}}]);var r=de(function(e,t){function y(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/g,"")}function w(e,t,n){if(t.charAt(n)==e.charAt(0)){for(var r=1,i=e.length;r<i;r++)if(t.charAt(n+r)!=e.charAt(r))return;return 1}}function l(e,t,n,r){for(var i=[],o=null,s=null,a=n[n.length-1];0<e.length;){if(s=e.shift(),a&&"<"==a.tag&&!(s.tag in g))throw new Error("Illegal content in < super tag.");if(x.tags[s.tag]<=x.tags.$||function(e,t){for(var n=0,r=t.length;n<r;n++)if(t[n].o==e.n)return e.tag="#"}(s,r))n.push(s),s.nodes=l(e,s.tag,n,r);else{if("/"==s.tag){if(0===n.length)throw new Error("Closing tag without opener: /"+s.n);if(o=n.pop(),s.n==o.n||function(e,t,n){for(var r=0,i=n.length;r<i;r++)if(n[r].c==e&&n[r].o==t)return 1}(s.n,o.n,r))return o.end=s.i,i;throw new Error("Nesting error: "+o.n+" vs. "+s.n)}"\n"==s.tag&&(s.last=0==e.length||"\n"==e[0].tag)}i.push(s)}if(0<n.length)throw new Error("missing closing tag: "+n.pop().n);return i}function r(e){var t,n=[];for(t in e.partials)n.push('"'+i(t)+'":{name:"'+i(e.partials[t].name)+'", '+r(e.partials[t])+"}");return"partials: {"+n.join(",")+"}, subs: "+function(e){var t,n=[];for(t in e)n.push('"'+i(t)+'": function(c,p,t,i) {'+e[t]+"}");return"{ "+n.join(",")+" }"}(e.subs)}function i(e){return e.replace(d,"\\\\").replace(u,'\\"').replace(c,"\\n").replace(f,"\\r").replace(p,"\\u2028").replace(h,"\\u2029")}function n(e){return~e.indexOf(".")?"d":"f"}function o(e,t){var n="<"+(t.prefix||"")+e.n+b++;return t.partials[n]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+i(n)+'",c,p,"'+(e.indent||"")+'"));',n}function s(e,t){t.code+="t.b(t.t(t."+n(e.n)+'("'+i(e.n)+'",c,p,0)));'}function a(e){return"t.b("+e+");"}var x,k,u,c,f,d,p,h,g,b;k=/\S/,u=/\"/g,c=/\n/g,f=/\r/g,d=/\\/g,p=/\u2028/,h=/\u2029/,(x=t).tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},x.scan=function(e,t){var n,r,i,o,s,a=e.length,l=0,u=null,c="",f=[],d=!1,p=0,h=0,g="{{",b="}}";function v(){0<c.length&&(f.push({tag:"_t",text:new String(c)}),c="")}function m(e,t){if(v(),e&&function(){for(var e=!0,t=h;t<f.length;t++)if(!(e=x.tags[f[t].tag]<x.tags._v||"_t"==f[t].tag&&null===f[t].text.match(k)))return;return e}())for(var n,r=h;r<f.length;r++)f[r].text&&((n=f[r+1])&&">"==n.tag&&(n.indent=f[r].text.toString()),f.splice(r,1));else t||f.push({tag:"\n"});d=!1,h=f.length}for(t&&(t=t.split(" "),g=t[0],b=t[1]),p=0;p<a;p++)0==l?w(g,e,p)?(--p,v(),l=1):"\n"==e.charAt(p)?m(d):c+=e.charAt(p):1==l?(p+=g.length-1,l="="==(u=(n=x.tags[e.charAt(p+1)])?e.charAt(p+1):"_v")?(i=p,s=o=void 0,o="="+b,s=(r=e).indexOf(o,i),r=y(r.substring(r.indexOf("=",i)+1,s)).split(" "),g=r[0],b=r[r.length-1],p=s+o.length-1,0):(n&&p++,2),d=p):w(b,e,p)?(f.push({tag:u,n:y(c),otag:g,ctag:b,i:"/"==u?d-g.length:p+b.length}),c="",p+=b.length-1,l=0,"{"==u&&("}}"==b?p++:"}"===(i=f[f.length-1]).n.substr(i.n.length-1)&&(i.n=i.n.substring(0,i.n.length-1)))):c+=e.charAt(p);return m(d,!0),f},g={_t:!0,"\n":!0,$:!0,"/":!0},x.stringify=function(e,t,n){return"{code: function (c,p,i) { "+x.wrapMain(e.code)+" },"+r(e)+"}"},b=0,x.generate=function(e,t,n){b=0;var r={code:"",subs:{},partials:{}};return x.walk(e,r),n.asString?this.stringify(r,t,n):this.makeTemplate(r,t,n)},x.wrapMain=function(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"},x.template=x.Template,x.makeTemplate=function(e,t,n){var r=this.makePartials(e);return r.code=new Function("c","p","i",this.wrapMain(e.code)),new this.template(r,t,this,n)},x.makePartials=function(e){var t,n={subs:{},partials:e.partials,name:e.name};for(t in n.partials)n.partials[t]=this.makePartials(n.partials[t]);for(t in e.subs)n.subs[t]=new Function("c","p","t","i",e.subs[t]);return n},x.codegen={"#":function(e,t){t.code+="if(t.s(t."+n(e.n)+'("'+i(e.n)+'",c,p,1),c,p,0,'+e.i+","+e.end+',"'+e.otag+" "+e.ctag+'")){t.rs(c,p,function(c,p,t){',x.walk(e.nodes,t),t.code+="});c.pop();}"},"^":function(e,t){t.code+="if(!t.s(t."+n(e.n)+'("'+i(e.n)+'",c,p,1),c,p,1,0,0,"")){',x.walk(e.nodes,t),t.code+="};"},">":o,"<":function(e,t){var n={partials:{},code:"",subs:{},inPartial:!0},e=(x.walk(e.nodes,n),t.partials[o(e,t)]);e.subs=n.subs,e.partials=n.partials},$:function(e,t){var n={subs:{},code:"",partials:t.partials,prefix:e.n};x.walk(e.nodes,n),t.subs[e.n]=n.code,t.inPartial||(t.code+='t.sub("'+i(e.n)+'",c,p,i);')},"\n":function(e,t){t.code+=a('"\\n"'+(e.last?"":" + i"))},_v:function(e,t){t.code+="t.b(t.v(t."+n(e.n)+'("'+i(e.n)+'",c,p,0)));'},_t:function(e,t){t.code+=a('"'+i(e.text)+'"')},"{":s,"&":s},x.walk=function(e,t){for(var n,r=0,i=e.length;r<i;r++)(n=x.codegen[e[r].tag])&&n(e[r],t);return t},x.parse=function(e,t,n){return l(e,0,[],(n=n||{}).sectionTags||[])},x.cache={},x.cacheKey=function(e,t){return[e,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelGet].join("||")},x.compile=function(e,t){var n=x.cacheKey(e,t=t||{}),r=this.cache[n];if(r){var i,o=r.partials;for(i in o)delete o[i].instance;return r}return r=this.generate(this.parse(this.scan(e,t.delimiters),e,t),e,t),this.cache[n]=r}}),D=de(function(e,t){function c(e,t,n){var r;return t&&"object"==typeof t&&(void 0!==t[e]?r=t[e]:n&&t.get&&"function"==typeof t.get&&(r=t.get(e))),r}function s(e){return String(null==e?"":e)}var n,r,i,o,a,l,f;(t=t).Template=function(e,t,n,r){this.r=(e=e||{}).code||this.r,this.c=n,this.options=r||{},this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.buf=""},t.Template.prototype={r:function(e,t,n){return""},v:function(e){return e=s(e),l.test(e)?e.replace(n,"&amp;").replace(r,"&lt;").replace(i,"&gt;").replace(o,"&#39;").replace(a,"&quot;"):e},t:s,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){return this.r(e,t,n)},ep:function(e,t){var n=this.partials[e],r=t[n.name];if(n.instance&&n.base==r)return n.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[e].base=r,n.subs){for(key in t.stackText||(t.stackText={}),n.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[this.activeSub]?t.stackText[this.activeSub]:this.text);r=function(e,t,n,r,i,o){function s(){}function a(){}a.prototype=(s.prototype=e).subs;var l,u=new s;for(l in u.subs=new a,u.subsText={},u.buf="",r=r||{},u.stackSubs=r,u.subsText=o,t)r[l]||(r[l]=t[l]);for(l in r)u.subs[l]=r[l];for(l in i=i||{},u.stackPartials=i,n)i[l]||(i[l]=n[l]);for(l in i)u.partials[l]=i[l];return u}(r,n.subs,n.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=r},rp:function(e,t,n,r){e=this.ep(e,n);return e?e.ri(t,n,r):""},rs:function(e,t,n){var r=e[e.length-1];if(f(r))for(var i=0;i<r.length;i++)e.push(r[i]),n(e,t,this),e.pop();else n(e,t,this)},s:function(e,t,n,r,i,o,s){return(!f(e)||0!==e.length)&&(n=!!(e="function"==typeof e?this.ms(e,t,n,r,i,o,s):e),!r&&n&&t&&t.push("object"==typeof e?e:t[t.length-1]),n)},d:function(e,t,n,r){var i,o=e.split("."),s=this.f(o[0],t,n,r),a=this.options.modelGet,l=null;if("."===e&&f(t[t.length-2]))s=t[t.length-1];else for(var u=1;u<o.length;u++)s=void 0!==(i=c(o[u],s,a))?(l=s,i):"";return!(r&&!s)&&(r||"function"!=typeof s||(t.push(l),s=this.mv(s,t,n),t.pop()),s)},f:function(e,t,n,r){for(var i=!1,o=!1,s=this.options.modelGet,a=t.length-1;0<=a;a--)if(void 0!==(i=c(e,t[a],s))){o=!0;break}return o?r||"function"!=typeof i?i:this.mv(i,t,n):!r&&""},ls:function(e,t,n,r,i){var o=this.options.delimiters;return this.options.delimiters=i,this.b(this.ct(s(e.call(t,r)),t,n)),this.options.delimiters=o,!1},ct:function(e,t,n){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",e},ms:function(e,t,n,r,i,o,s){t=t[t.length-1],e=e.call(t);return"function"==typeof e?!!r||(r=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(e,t,n,r.substring(i,o),s)):e},mv:function(e,t,n){t=t[t.length-1],e=e.call(t);return"function"==typeof e?this.ct(s(e.call(t)),t,n):e},sub:function(e,t,n,r){var i=this.subs[e];i&&(this.activeSub=e,i(t,n,this,r),this.activeSub=!1)}},n=/&/g,r=/</g,i=/>/g,o=/\'/g,a=/\"/g,l=/[&<>\"\']/,f=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}),i=(r.Template=D.Template,r.template=r.Template,r),Pe=new i.Template({code:function(e,t,r){var n=this;return n.b(r=r||""),n.b('<div class="sbs-login-content" dir="auto">'),n.b("\n"+r),n.b('    <div class="sbs-login-header" data-testid="sbs-login-header"></div>'),n.b("\n"+r),n.s(n.f("showCloseButton",e,t,1),e,t,0,139,254,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('    <button class="sbs-login-close-button" data-i18n="[title]button.close;[aria-label]button.close"></button>'),n.b("\n"+r)}),e.pop()),n.b('    <div id="sbs-login-lang-switcher" class="sbs-login-lang-switcher"></div>'),n.b("\n"+r),n.b('    <div id="sbs-login-body" class="sbs-login-body" dir="auto"></div>'),n.b("\n"+r),n.b('    <div class="sbs-login-loading-overlay">'),n.b("\n"+r),n.b('        <div class="spinner center">'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b('            <div class="spinner-blade"></div>'),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b("    </div>"),n.b("\n"+r),n.b("</div>"),n.b("\n"),n.fl()},partials:{},subs:{}}),Te=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p><strong data-i18n="accountNotVerified.heading">Your account hasn\'t been validated</strong></p>'),r.b("\n"+n),r.b('        <p data-i18n="accountNotVerified.p1">We need to confirm your email address is correct before you can sign in</p>'),r.b("\n"+n),r.b('        <p data-i18n="accountNotVerified.p2">When you created your account, we sent a validation email. If you can find the email, please follow the link contained within</p>'),r.b("\n"+n),r.b("        <p data-i18n=\"accountNotVerified.p3\">If you can't find the email, press the Resend button and we'll send another</p>"),r.b("\n"+n),r.b('        <button class="sbs-login-button sbs-login-button-primary" id="sbs-login-resend-verification" data-i18n="button.resend">Resend</button>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b('<div class="sbs-login-footer">'),r.b("\n"+n),r.b('    <span data-i18n="footer.alreadyHaveAccount">Already have an account?</span> <span data-i18n="footer.signInLink" class="sbs-login-link" data-on-click="renderSignIn" role="link">Sign in</span>'),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),Ie=new i.Template({code:function(e,t,r){var n=this;return n.b(r=r||""),n.b('<div class="sbs-login-body-content sbs-login-center">'),n.b("\n"+r),n.b('    <div class="sbs-login-inner-container">'),n.b("\n"+r),n.b('        <p data-i18n="missingFieldsForm.p">Please provide the following information below to complete your SBS account.</p>'),n.b("\n"+r),n.b("        <br/>"),n.b("\n"+r),n.b("    </div>"),n.b("\n"+r),n.b('    <form class="sbs-login-form sbs-login-inner-container">'),n.b("\n"+r),n.s(n.d("fields.birthday",e,t,1),e,t,0,335,1156,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-birth-year" data-i18n="formFields.birthYear">Birth Year</label>'),n.b("\n"+r),n.b('                    <div class="sbs-login-form-group-chevron"></div>'),n.b("\n"+r),n.b('                    <select name="birthyear" id="sbs-login-birth-year" required'),n.b("\n"+r),n.b('                            data-i18n="[data-pristine-required-message]formError.birthYearRequired">'),n.b("\n"+r),n.b('                        <option value=""></option>'),n.b("\n"+r),n.s(n.f("birthYearOptions",e,t,1),e,t,0,945,1039,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("                        <option value="),n.b(n.t(n.f("value",e,t,0))),n.b(">"),n.b(n.v(n.f("label",e,t,0))),n.b("</option>"),n.b("\n"+r)}),e.pop()),n.b("                    </select>"),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r)}),e.pop()),n.b("\n"+r),n.s(n.d("fields.gender",e,t,1),e,t,0,1204,2016,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-gender" data-i18n="formFields.gender">Gender</label>'),n.b("\n"+r),n.b('                    <div class="sbs-login-form-group-chevron"></div>'),n.b("\n"+r),n.b('                    <select name="gender" id="sbs-login-gender" required'),n.b("\n"+r),n.b('                            data-i18n="[data-pristine-required-message]formError.genderRequired">'),n.b("\n"+r),n.b('                        <option value=""></option>'),n.b("\n"+r),n.s(n.f("genderOptions",e,t,1),e,t,0,1790,1902,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("                        <option value="),n.b(n.t(n.f("value",e,t,0))),n.b(" data-i18n="),n.b(n.t(n.f("i18nextKey",e,t,0))),n.b("></option>"),n.b("\n"+r)}),e.pop()),n.b("                    </select>"),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r)}),e.pop()),n.b("\n"+r),n.b('        <button class="sbs-login-button sbs-login-button-primary" type="submit" data-i18n="button.continue">Continue</button>'),n.b("\n"+r),n.b("    </form>"),n.b("\n"+r),n.b("</div>"),n.b("\n"),n.fl()},partials:{},subs:{}}),Ne=new i.Template({code:function(e,t,r){var n=this;return n.b(r=r||""),n.b('<div class="sbs-login-body-content  sbs-login-center">'),n.b("\n"+r),n.b('    <form class="sbs-login-form sbs-login-inner-container">'),n.b("\n"+r),n.b('        <input id="sbs-login-username" type="hidden" name="username">'),n.b("\n"+r),n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-firstname" data-i18n="formFields.firstName">First name</label>'),n.b("\n"+r),n.b('                    <input name="givenName" id="sbs-login-firstname" type="text" required'),n.b("\n"+r),n.b('                           data-i18n="[data-pristine-required-message]formError.firstNameRequired"/>'),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-email" data-i18n="formFields.email">Email</label>'),n.b("\n"+r),n.b('                    <input name="email" id="sbs-login-email" type="email" required'),n.b("\n"+r),n.b('                           data-i18n="[data-pristine-required-message]formError.emailRequired;[data-pristine-email-message]formError.invalidEmail"/>'),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-password" data-i18n="formFields.password">Password</label>'),n.b("\n"+r),n.b('                    <input name="password" id="sbs-login-password" type="password" required'),n.b("\n"+r),n.b("                           data-pristine-password-strength"),n.b("\n"+r),n.b('                           data-i18n="[data-pristine-required-message]formError.passwordRequired;[data-pristine-password-strength-message]formError.passwordStrength"/>'),n.b("\n"+r),n.b('                    <div tabindex="0" class="sbs-login-password-toggle" role="button" data-i18n="formFields.showPassword;[aria-label]formFields.showPasswordLabel"></div>'),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-birth-year" data-i18n="formFields.birthYear">Birth year</label>'),n.b("\n"+r),n.b('                    <div class="sbs-login-form-group-chevron"></div>'),n.b("\n"+r),n.b('                    <select name="birthyear" id="sbs-login-birth-year" required'),n.b("\n"+r),n.b('                            data-i18n="[data-pristine-required-message]formError.birthYearRequired">'),n.b("\n"+r),n.b('                        <option value=""></option>'),n.b("\n"+r),n.s(n.f("birthYearOptions",e,t,1),e,t,0,2646,2740,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("                        <option value="),n.b(n.t(n.f("value",e,t,0))),n.b(">"),n.b(n.v(n.f("label",e,t,0))),n.b("</option>"),n.b("\n"+r)}),e.pop()),n.b("                    </select>"),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b('        <div class="sbs-login-form-group-container">'),n.b("\n"+r),n.b('            <div class="sbs-login-form-group">'),n.b("\n"+r),n.b('                <div class="sbs-login-form-input-group">'),n.b("\n"+r),n.b('                    <label for="sbs-login-gender" data-i18n="formFields.gender">Gender</label>'),n.b("\n"+r),n.b('                    <div class="sbs-login-form-group-chevron"></div>'),n.b("\n"+r),n.b('                    <select name="gender" id="sbs-login-gender" required'),n.b("\n"+r),n.b('                            data-i18n="[data-pristine-required-message]formError.genderRequired">'),n.b("\n"+r),n.b('                        <option value=""></option>'),n.b("\n"+r),n.s(n.f("genderOptions",e,t,1),e,t,0,3434,3546,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("                        <option value="),n.b(n.t(n.f("value",e,t,0))),n.b(" data-i18n="),n.b(n.t(n.f("i18nextKey",e,t,0))),n.b("></option>"),n.b("\n"+r)}),e.pop()),n.b("                    </select>"),n.b("\n"+r),n.b("                </div>"),n.b("\n"+r),n.b("            </div>"),n.b("\n"+r),n.b('            <div class="sbs-login-form-error sbs-login-error-message"></div>'),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b('        <button type="submit" class="sbs-login-button sbs-login-button-primary" data-i18n="button.createAccount">Create Account</button>'),n.b("\n"+r),n.b("    </form>"),n.b("\n"+r),n.b('    <div class="sbs-login-inner-container">'),n.b("\n"+r),n.b("        <div>"),n.b("\n"+r),n.b('            <p class="sbs-login-help-text sbs-login-text-small" data-i18n="[html]createAccountForm.p" i18n-options="'),n.b(n.v(n.f("pI18nOptions",e,t,0))),n.b('">'),n.b("\n"+r),n.b("                <span>By creating an account, you agree to SBS’s </span>"),n.b("\n"+r),n.b('                <a target="_blank" href="https://www.sbs.com.au/aboutus/terms-and-conditions" data-i18n="createAccountForm.termsLink">terms of service</a>'),n.b("\n"+r),n.b("                <span> and </span>"),n.b("\n"+r),n.b('                <a target="_blank" href="https://www.sbs.com.au/privacy-policy" data-i18n="createAccountForm.privacyLink">privacy policy</a>'),n.b("\n"+r),n.b("                <span> including receiving email updates and offers from SBS. You may unsubscribe at any time.</span>"),n.b("\n"+r),n.b("            </p>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b("        <div>"),n.b("\n"+r),n.b("            <strong>"),n.b("\n"+r),n.b('                <a class="sbs-login-text-small" target="_blank" href="https://help.sbs.com.au/hc/en-au/articles/360002024815-Why-do-I-have-to-create-an-account-to-watch-SBS-On-Demand-" data-i18n="createAccountForm.why">Why do I need an account?</a>'),n.b("\n"+r),n.b("            </strong>"),n.b("\n"+r),n.b("        </div>"),n.b("\n"+r),n.b("    </div>"),n.b("\n"+r),n.b("    <br/>"),n.b("\n"+r),n.b(n.rp("<socialLogin0",e,t,"    ")),n.b("</div>"),n.b("\n"+r),n.b('<div class="sbs-login-footer sbs-login-text-small">'),n.b("\n"+r),n.b('    <span data-i18n="footer.alreadyHaveAccount">Already have an account?</span> <span'),n.b("\n"+r),n.b('        data-i18n="footer.signInLink" class="sbs-login-link" data-on-click="renderSignIn" role="link">Sign in</span>'),n.b("\n"+r),n.b("</div>"),n.b("\n"),n.fl()},partials:{"<socialLogin0":{name:"socialLogin",partials:{},subs:{}}},subs:{}}),Me=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b("        <p>"),r.b("\n"+n),r.b('            <span data-i18n="createAccountForm.p.part1">By creating an account, you agree to SBS’s</span>'),r.b("\n"+n),r.b('            <a target="_blank" href="https://www.sbs.com.au/aboutus/terms-and-conditions"'),r.b("\n"+n),r.b('               data-i18n="createAccountForm.termsLink">terms of service</a>'),r.b("\n"+n),r.b('            <span data-i18n="createAccountForm.p.part2">and</span>'),r.b("\n"+n),r.b('            <a target="_blank" href="https://www.sbs.com.au/privacy-policy"'),r.b("\n"+n),r.b('               data-i18n="createAccountForm.privacyLink">privacy policy</a>'),r.b("\n"+n),r.b('            <span data-i18n="createAccountForm.p.part3">including receiving email updates and offers from SBS. You may unsubscribe at any time.</span>'),r.b("\n"+n),r.b("        </p>"),r.b("\n"+n),r.b('        <div class="sbs-login-form-error sbs-login-error-message"></div>'),r.b("\n"+n),r.b('        <div class="sbs-login-button sbs-login-button-primary" data-i18n="button.createAccount" id="sbs-login-create-account-social" role="button">Create Account</div>'),r.b("\n"+n),r.b("        <br/><br/>"),r.b("\n"+n),r.b("        <strong>"),r.b("\n"+n),r.b('            <a class="sbs-login-text-small" target="_blank" href="https://help.sbs.com.au/hc/en-au/articles/360002024815-Why-do-I-have-to-create-an-account-to-watch-SBS-On-Demand-" data-i18n="createAccountForm.why">Why do I need an account?</a>'),r.b("\n"+n),r.b("        </strong>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),Be=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p data-i18n="genericError.p">Sorry, we couldn\'t complete your request. Please try again shortly.</p>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <div class="sbs-login-button sbs-login-button-primary" data-on-click="renderSignIn" data-i18n="button.signIn" role="button">Sign in</div>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b('<div class="sbs-login-footer">'),r.b("\n"+n),r.b('    <span data-i18n="footer.alreadyHaveAccount">Already have an account?</span> <span data-i18n="footer.signInLink" class="sbs-login-link" data-on-click="renderSignIn" role="link">Sign in</span>'),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),Fe=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div id="sbs-login-geo-blocking-message" class="sbs-login-message" data-i18n="geoBlockingMessage">'),r.b("\n"+n),r.b("    You appear to be outside Australia. Due to publishing rights most of our videos are only available in Australia."),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),De=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-screen-sign-in sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p><strong data-i18n="linkAccount.heading">It looks like you already have an SBS account set up with this email address.</strong></p>'),r.b("\n"+n),r.b('        <p data-i18n="linkAccount.p">Sign in below to link the account</p>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <form class="sbs-login-form sbs-login-inner-container">'),r.b("\n"+n),r.b('        <div class="sbs-login-form-group-container">'),r.b("\n"+n),r.b('            <div class="sbs-login-form-group">'),r.b("\n"+n),r.b('                <div class="sbs-login-form-input-group">'),r.b("\n"+n),r.b('                    <label for="sbs-login-email" data-i18n="formFields.email">Email</label>'),r.b("\n"+n),r.b('                    <input name="username" id="sbs-login-email" type="email" required'),r.b("\n"+n),r.b('                           data-i18n="[data-pristine-required-message]formError.emailRequired;[data-pristine-email-message]formError.invalidEmail"/>'),r.b("\n"+n),r.b("                </div>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b('        <div class="sbs-login-form-group-container">'),r.b("\n"+n),r.b('            <div class="sbs-login-form-group">'),r.b("\n"+n),r.b('                <div class="sbs-login-form-input-group">'),r.b("\n"+n),r.b('                    <label for="sbs-login-password" data-i18n="formFields.password">Password</label>'),r.b("\n"+n),r.b('                    <input name="password" id="sbs-login-password" type="password" required'),r.b("\n"+n),r.b('                           data-i18n="[data-pristine-required-message]formError.passwordRequired"/>'),r.b("\n"+n),r.b('                    <div tabindex="0" class="sbs-login-password-toggle" role="button"'),r.b("\n"+n),r.b('                         data-i18n="formFields.showPassword;[aria-label]formFields.showPasswordLabel"></div>'),r.b("\n"+n),r.b("                </div>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b('            <div class="sbs-login-form-error sbs-login-error-message"></div>'),r.b("\n"+n),r.b('            <div class="sbs-login-text-align-right">'),r.b("\n"+n),r.b('                <span tabindex="0"'),r.b("\n"+n),r.b('                    data-i18n="loginForm.forgotPasswordLink"'),r.b("\n"+n),r.b('                    class="sbs-login-link sbs-login-text-smaller sbs-login-forgot-password"'),r.b("\n"+n),r.b('                    role="link"'),r.b("\n"+n),r.b("                >Forgot password?</span>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("        <br/>"),r.b("\n"+n),r.b('        <button class="sbs-login-button sbs-login-button-primary" type="submit" data-i18n="button.signIn">Link Account</button>'),r.b("\n"+n),r.b("    </form>"),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),qe=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p data-i18n="resetPasswordForm.p">'),r.b("\n"+n),r.b("            Enter your email address or username below, and we'll email you a link to reset your password"),r.b("\n"+n),r.b("        </p>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <form class="sbs-login-form sbs-login-inner-container">'),r.b("\n"+n),r.b('        <div class="sbs-login-form-group-container">'),r.b("\n"+n),r.b('            <div class="sbs-login-form-group">'),r.b("\n"+n),r.b('                <div class="sbs-login-form-input-group">'),r.b("\n"+n),r.b('                    <label for="sbs-login-email" data-i18n="formFields.email">Email</label>'),r.b("\n"+n),r.b('                    <input name="email" id="sbs-login-email" type="email" required'),r.b("\n"+n),r.b('                           data-i18n="[data-pristine-required-message]formError.emailRequired;[data-pristine-email-message]formError.invalidEmail"/>'),r.b("\n"+n),r.b("                </div>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b('            <div class="sbs-login-form-error sbs-login-error-message"></div>'),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b('        <button class="sbs-login-button sbs-login-button-primary" type="submit" data-i18n="button.resetPassword">Reset Password</button>'),r.b("\n"+n),r.b("    </form>"),r.b("\n"+n),r.b("</div>"),r.b("\n"+n),r.b('<div class="sbs-login-footer">'),r.b("\n"+n),r.b('    <span data-i18n="footer.alreadyHaveAccount">Already have an account?</span> <span data-i18n="footer.signInLink" class="sbs-login-link" data-on-click="renderSignIn" role="link">Sign in</span>'),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),Ue=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p data-i18n="[html]resetPasswordSuccess.p1" i18n-options="'),r.b(r.v(r.f("p1I18nOptions",e,t,0))),r.b('">'),r.b("\n"+n),r.b("            If you have an active SBS On Demand account we have sent instructions on how to create a new password."),r.b("\n"+n),r.b("        </p>"),r.b("\n"+n),r.b('        <p data-i18n="resetPasswordSuccess.p2">'),r.b("\n"+n),r.b("            Please check your spam folder if you can’t see an email from us. We've sent you an email with instructions on how to create a new password."),r.b("\n"+n),r.b("        </p>"),r.b("\n"+n),r.b('        <div class="sbs-login-button sbs-login-button-primary" data-on-click="renderSignIn" data-i18n="button.signIn" role="button">Sign in</div>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),ze=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-screen-sign-in sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <form class="sbs-login-form sbs-login-inner-container">'),r.b("\n"+n),r.b('        <div class="sbs-login-form-group-container">'),r.b("\n"+n),r.b('            <div class="sbs-login-form-group">'),r.b("\n"+n),r.b('                <div class="sbs-login-form-input-group">'),r.b("\n"+n),r.b('                    <label for="sbs-login-email" data-i18n="formFields.email">Email</label>'),r.b("\n"+n),r.b('                    <input name="username" id="sbs-login-email" type="email" required'),r.b("\n"+n),r.b('                           data-i18n="[data-pristine-required-message]formError.emailRequired;[data-pristine-email-message]formError.invalidEmail"/>'),r.b("\n"+n),r.b("                </div>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b('        <div class="sbs-login-form-group-container">'),r.b("\n"+n),r.b('            <div class="sbs-login-form-group">'),r.b("\n"+n),r.b('                <div class="sbs-login-form-input-group">'),r.b("\n"+n),r.b('                    <label for="sbs-login-password" data-i18n="formFields.password">Password</label>'),r.b("\n"+n),r.b('                    <input name="password" id="sbs-login-password" type="password" required'),r.b("\n"+n),r.b('                           data-i18n="[data-pristine-required-message]formError.passwordRequired"/>'),r.b("\n"+n),r.b('                    <div tabindex="0" class="sbs-login-password-toggle" role="button"'),r.b("\n"+n),r.b('                         data-i18n="formFields.showPassword;[aria-label]formFields.showPasswordLabel"></div>'),r.b("\n"+n),r.b("                </div>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b('            <div class="sbs-login-form-error sbs-login-error-message"></div>'),r.b("\n"+n),r.b('            <div class="sbs-login-text-align-right">'),r.b("\n"+n),r.b('                <span tabindex="0"'),r.b("\n"+n),r.b('                      data-i18n="loginForm.forgotPasswordLink"'),r.b("\n"+n),r.b('                      class="sbs-login-link sbs-login-text-smaller sbs-login-forgot-password"'),r.b("\n"+n),r.b('                      role="link"'),r.b("\n"+n),r.b("                >Forgot password?</span>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("        <br/>"),r.b("\n"+n),r.b('        <button class="sbs-login-button sbs-login-button-primary" type="submit" data-i18n="button.signIn">Sign in</button>'),r.b("\n"+n),r.b('        <div class="sbs-login-signin-generic-error sbs-login-error-message"></div>'),r.b("\n"+n),r.b("    </form>"),r.b("\n"+n),r.b(r.rp("<socialLogin0",e,t,"    ")),r.b("</div>"),r.b("\n"),r.b("\n"+n),r.b('<div class="sbs-login-footer">'),r.b("\n"+n),r.b('    <span data-i18n="footer.createAccount" class="sbs-login-link" data-on-click="renderCreateAccount" role="link">Create an Account</span>'),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{"<socialLogin0":{name:"socialLogin",partials:{},subs:{}}},subs:{}}),Ve=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p><strong data-i18n="socialAskEmail.heading">You\'re almost done!</strong></p>'),r.b("\n"+n),r.b('        <p data-i18n="socialAskEmail.p">Please enter your email address to continue</p>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b('    <form class="sbs-login-form sbs-login-inner-container">'),r.b("\n"+n),r.b('        <div class="sbs-login-form-group-container">'),r.b("\n"+n),r.b('            <div class="sbs-login-form-group">'),r.b("\n"+n),r.b('                <div class="sbs-login-form-input-group">'),r.b("\n"+n),r.b('                    <label for="sbs-login-email" data-i18n="formFields.email">Email</label>'),r.b("\n"+n),r.b('                    <input name="username" id="sbs-login-email" type="email" required'),r.b("\n"+n),r.b('                           data-i18n="[data-pristine-required-message]formError.emailRequired;[data-pristine-email-message]formError.invalidEmail"/>'),r.b("\n"+n),r.b("                </div>"),r.b("\n"+n),r.b("            </div>"),r.b("\n"+n),r.b("        </div>"),r.b("\n"),r.b("\n"+n),r.b('        <button type="submit" class="sbs-login-button sbs-login-button-primary" data-i18n="button.continue" role="button">Continue</button>'),r.b("\n"+n),r.b("    </form>"),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),He=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-social-container">'),r.b("\n"+n),r.b('    <div class="sbs-login-social-title" data-i18n="socialLogin.title">Or sign in with:</div>'),r.b("\n"+n),r.b('    <div class="sbs-login-social-buttons">'),r.b("\n"+n),r.b('        <div role="link" data-i18n="[aria-label]socialLogin.signInWithApple" aria-label="Sign in with Apple" id="sbs-login-apple-button" class="sbs-login-link" tabindex="0" aria-label="apple">'),r.b("\n"+n),r.b('            <svg focusable="false" aria-hidden="true" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"'),r.b("\n"+n),r.b('                 xmlns:xlink="http://www.w3.org/1999/xlink">'),r.b("\n"+n),r.b('                <g id="Web:-Create-Account" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'),r.b("\n"+n),r.b('                    <g id="Create-Account:-375px-(English)" transform="translate(-71.000000, -505.000000)">'),r.b("\n"+n),r.b('                        <g id="Group-7" transform="translate(71.000000, 505.000000)">'),r.b("\n"+n),r.b('                            <g id="Group-6">'),r.b("\n"+n),r.b('                                <g id="Group">'),r.b("\n"+n),r.b('                                    <circle id="Oval-Copy-2" fill="#000000" cx="24" cy="24" r="24"></circle>'),r.b("\n"+n),r.b('                                    <path d="M32.6437063,28.3653762 C32.3384889,29.0990576 31.9772108,29.7744072 31.5586265,30.3953147 C30.988056,31.2417693 30.5208863,31.827678 30.160854,32.1530389 C29.6027419,32.6870967 29.0047644,32.9606067 28.36443,32.9761621 C27.904735,32.9761621 27.3503599,32.8400545 26.7050426,32.5639531 C26.0576077,32.2891448 25.46262,32.1530389 24.9185849,32.1530389 C24.3480148,32.1530389 23.7360843,32.2891448 23.0815483,32.5639531 C22.4260149,32.8400545 21.8979264,32.9839399 21.4941668,32.9981987 C20.8801187,33.0254199 20.2680643,32.7441322 19.6571302,32.1530389 C19.2671994,31.7991602 18.7794742,31.1925116 18.1952,30.3330929 C17.5683205,29.4153443 17.0529387,28.3511173 16.6491793,27.1378208 C16.2167668,25.8273049 16,24.5582693 16,23.3296774 C16,21.9223313 16.2922615,20.7085162 16.8776565,19.6913432 C17.3377254,18.8743128 17.9497802,18.2298137 18.715814,17.7566796 C19.4818483,17.2835462 20.3095489,17.0424425 21.2009092,17.0270167 C21.6886342,17.0270167 22.3282214,17.1839934 23.1230329,17.4925027 C23.9156022,17.8020489 24.4245061,17.9590256 24.6476261,17.9590256 C24.8144368,17.9590256 25.3797747,17.7754753 26.3381583,17.4095424 C27.2444683,17.0701823 28.0093809,16.9296675 28.6360114,16.9850177 C30.3340185,17.127606 31.6097037,17.8240851 32.4580844,19.0788618 C30.9394709,20.0362774 30.1882615,21.3772551 30.2032108,23.0975176 C30.2169145,24.4374582 30.6840842,25.5524983 31.6022288,26.4378424 C32.0183212,26.8487552 32.4829999,27.1663382 33,27.3918872 C32.8878808,27.7302101 32.7695311,28.0542745 32.6437063,28.3653762 Z M28.7493784,12.4201196 C28.7493784,13.4703593 28.380625,14.4509652 27.6456116,15.3586039 C26.758611,16.4376087 25.6857403,17.061108 24.5223001,16.9627223 C24.5074754,16.8367259 24.4988794,16.7041191 24.4988794,16.5647716 C24.4988794,15.5565425 24.9207028,14.4775383 25.6697945,13.5953057 C26.0437789,13.1486159 26.5194202,12.7771994 27.0962195,12.4809134 C27.6717727,12.1890482 28.2161815,12.0276404 28.7281993,12 C28.7431498,12.1404006 28.7493784,12.2808101 28.7493784,12.4201059 L28.7493784,12.4201196 Z"'),r.b("\n"+n),r.b('                                          id="path4" fill="#FFFFFF" fill-rule="nonzero"></path>'),r.b("\n"+n),r.b("                                </g>"),r.b("\n"+n),r.b("                            </g>"),r.b("\n"+n),r.b("                        </g>"),r.b("\n"+n),r.b("                    </g>"),r.b("\n"+n),r.b("                </g>"),r.b("\n"+n),r.b("            </svg>"),r.b("\n"+n),r.b('            <div class="sbs-login-social-button-label">Apple</div>'),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b('        <div role="link" data-i18n="[aria-label]socialLogin.signInWithFacebook" aria-label="Sign in with Facebook" id="sbs-login-facebook-button" class="sbs-login-link" tabindex="0" aria-label="facebook">'),r.b("\n"+n),r.b('            <svg focusable="false" aria-hidden="true" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"'),r.b("\n"+n),r.b('                 xmlns:xlink="http://www.w3.org/1999/xlink">'),r.b("\n"+n),r.b('                <g id="Web:-Create-Account" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'),r.b("\n"+n),r.b('                    <g id="Create-Account:-375px-(English)" transform="translate(-163.000000, -505.000000)">'),r.b("\n"+n),r.b('                        <g id="Group-7" transform="translate(71.000000, 505.000000)">'),r.b("\n"+n),r.b('                            <g id="Group-5" transform="translate(83.000000, 0.000000)">'),r.b("\n"+n),r.b('                                <g id="Facebook" transform="translate(9.000000, 0.000000)">'),r.b("\n"+n),r.b('                                    <circle id="Oval" fill="#2553B4" cx="24" cy="24" r="24"></circle>'),r.b("\n"+n),r.b('                                    <path d="M19,20.1922913 L19,23.9529029 L21.2689098,23.9529029 L21.2689098,35 L25.6319753,35 L25.6319753,23.9059126 L28.6759452,23.9059126 L29,20.1922913 L25.6319753,20.1922913 L25.6319753,18.0769272 C25.6319753,17.2013058 25.8056249,16.8546456 26.6389013,16.8546456 L28.9999474,16.8546456 L28.9999474,13 L25.9791694,13 C22.7326258,13 21.2689098,14.4513058 21.2689098,17.2307816 L21.2689098,20.1922913 L19,20.1922913 Z"'),r.b("\n"+n),r.b('                                          id="facebook-icon" fill="#FFFFFF"></path>'),r.b("\n"+n),r.b("                                </g>"),r.b("\n"+n),r.b("                            </g>"),r.b("\n"+n),r.b("                        </g>"),r.b("\n"+n),r.b("                    </g>"),r.b("\n"+n),r.b("                </g>"),r.b("\n"+n),r.b("            </svg>"),r.b("\n"+n),r.b('            <div class="sbs-login-social-button-label">Facebook</div>'),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b('        <div role="link" data-i18n="[aria-label]socialLogin.signInWithGoogle" aria-label="Sign in with Google" id="sbs-login-google-button" class="sbs-login-link" tabindex="0" aria-label="google">'),r.b("\n"+n),r.b('            <svg focusable="false" aria-hidden="true" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"'),r.b("\n"+n),r.b('                 xmlns:xlink="http://www.w3.org/1999/xlink">'),r.b("\n"+n),r.b('                <g id="Web:-Create-Account" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'),r.b("\n"+n),r.b('                    <g id="Create-Account:-375px-(English)" transform="translate(-256.000000, -505.000000)">'),r.b("\n"+n),r.b('                        <g id="Group-7" transform="translate(71.000000, 505.000000)">'),r.b("\n"+n),r.b('                            <g id="Group-4" transform="translate(183.000000, 0.000000)">'),r.b("\n"+n),r.b('                                <g id="Google" transform="translate(2.000000, 0.000000)">'),r.b("\n"+n),r.b('                                    <circle id="Oval-Copy" fill="#FFFFFF" cx="24" cy="24" r="24"></circle>'),r.b("\n"+n),r.b('                                    <g id="i6_ic_googleLogo" transform="translate(14.000000, 16.000000)">'),r.b("\n"+n),r.b('                                        <g id="ic_googleLogo" transform="translate(0.593750, -1.000000)">'),r.b("\n"+n),r.b('                                            <path d="M9,3.48 C10.69,3.48 11.83,4.21 12.48,4.82 L15.02,2.34 C13.46,0.89 11.43,0 9,0 C5.48,0 2.44,2.02 0.96,4.96 L3.87,7.22 C4.6,5.05 6.62,3.48 9,3.48 L9,3.48 Z"'),r.b("\n"+n),r.b('                                                  id="Shape" fill="#EA4335"></path>'),r.b("\n"+n),r.b('                                            <path d="M17.64,9.2 C17.64,8.46 17.58,7.92 17.45,7.36 L9,7.36 L9,10.7 L13.96,10.7 C13.86,11.53 13.32,12.78 12.12,13.62 L14.96,15.82 C16.66,14.25 17.64,11.94 17.64,9.2 L17.64,9.2 Z"'),r.b("\n"+n),r.b('                                                  id="Shape" fill="#4285F4"></path>'),r.b("\n"+n),r.b('                                            <path d="M3.88,10.78 C3.69,10.22 3.58,9.62 3.58,9 C3.58,8.38 3.69,7.78 3.87,7.22 L0.96,4.96 C0.35,6.18 0,7.55 0,9 C0,10.45 0.35,11.82 0.96,13.04 L3.88,10.78 L3.88,10.78 Z"'),r.b("\n"+n),r.b('                                                  id="Shape" fill="#FBBC05"></path>'),r.b("\n"+n),r.b('                                            <path d="M9,18 C11.43,18 13.47,17.2 14.96,15.82 L12.12,13.62 C11.36,14.15 10.34,14.52 9,14.52 C6.62,14.52 4.6,12.95 3.88,10.78 L0.97,13.04 C2.45,15.98 5.48,18 9,18 L9,18 Z"'),r.b("\n"+n),r.b('                                                  id="Shape" fill="#34A853"></path>'),r.b("\n"+n),r.b('                                            <polygon id="Shape" points="0 0 18 0 18 18 0 18"></polygon>'),r.b("\n"+n),r.b("                                        </g>"),r.b("\n"+n),r.b("                                    </g>"),r.b("\n"+n),r.b("                                </g>"),r.b("\n"+n),r.b("                            </g>"),r.b("\n"+n),r.b("                        </g>"),r.b("\n"+n),r.b("                    </g>"),r.b("\n"+n),r.b("                </g>"),r.b("\n"+n),r.b("            </svg>"),r.b("\n"+n),r.b('            <div class="sbs-login-social-button-label">Google</div>'),r.b("\n"+n),r.b("        </div>"),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}}),We=new i.Template({code:function(e,t,n){var r=this;return r.b(n=n||""),r.b('<div class="sbs-login-body-content sbs-login-center">'),r.b("\n"+n),r.b('    <div class="sbs-login-inner-container">'),r.b("\n"+n),r.b('        <p><strong data-i18n="verificationRequired.heading">Nearly done!</strong></p>'),r.b("\n"+n),r.b('        <p data-i18n="[html]verificationRequired.p1" i18n-options="'),r.b(r.v(r.f("p1I18nOptions",e,t,0))),r.b("\">We've sent a confirmation email to your email address.</p>"),r.b("\n"+n),r.b('        <p data-i18n="verificationRequired.p2">You will need to click on the link in the email to validate your account before you can sign in.</p>'),r.b("\n"+n),r.b('        <div class="sbs-login-button sbs-login-button-primary" data-i18n="button.signIn" data-on-click="renderSignIn" role="button">Sign in</div>'),r.b("\n"+n),r.b("    </div>"),r.b("\n"+n),r.b("</div>"),r.b("\n"),r.fl()},partials:{},subs:{}});function Ge(e,t){return function(e){switch(e){case"Layout":return Pe;case"AccountNotVerified":return Te;case"CompleteMissingProfile":return Ie;case"CreateAccount":return Ne;case"CreateAccountSocial":return Me;case"GenericError":return Be;case"LinkAccount":return De;case"ResetPassword":return qe;case"ResetPasswordSuccess":return Ue;case"SignIn":return ze;case"SocialAskEmail":return Ve;case"VerificationRequired":return We;case"GeoBlockingMessage":return Fe;default:throw new Error("template ".concat(e," is not defined"))}}(e).render(t,function(e){switch(e){case"SignIn":case"CreateAccount":return{socialLogin:He};default:return{}}}(e))}function $e(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$e(Object(n),!0).forEach(function(e){le.default(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Je={init:function(l){function u(e,t){return c.parseDefaultValueFromContent?_(_({},e),{defaultValue:t}):e}var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=_(_({},{selectorAttr:"data-i18n",targetAttr:"i18n-target",optionsAttr:"i18n-options",useOptionsAttr:!1,parseDefaultValueFromContent:!0,document:document}),c);function f(e,t,n){var r,i,o="text";if(0==t.indexOf("[")&&(t=(r=t.split("]"))[1],o=r[0].substr(1,r[0].length-1)),t=t.indexOf(";")==t.length-1?t.substr(0,t.length-2):t,"html"===o){e.innerHTML=l.t(t,u(n,e.innerHTML));for(var s=e.children,a=0;a<s.length;a++)d(s[a],n)}else"text"===o?e.textContent=l.t(t,u(n,e.textContent)):"prepend"===o?(r=e.innerHTML.indexOf("<loc-i18n>"),i=e.innerHTML.indexOf("</loc-i18n>")+11,-1<r&&6<i&&(e.innerHTML=[e.innerHTML.substring(0,r),e.innerHTML.slice(i)].join("")),e.innerHTML=["<loc-i18n>",l.t(t,u(n,e.innerHTML)),"</loc-i18n>",e.innerHTML].join("")):"append"===o?(r=e.innerHTML.indexOf("<loc-i18n>"),i=e.innerHTML.indexOf("</loc-i18n>")+11,-1<r&&6<i&&(e.innerHTML=[e.innerHTML.substring(0,r),e.innerHTML.slice(i)].join("")),e.innerHTML=[e.innerHTML,"<loc-i18n>",l.t(t,u(n,e.innerHTML),"</loc-i18n>")].join("")):0===o.indexOf("data-")?(r=o.substr("data-".length),i=l.t(t,u(n,e.getAttribute(r))),e.setAttribute(r,i),e.setAttribute(o,i)):e.setAttribute(o,l.t(t,u(n,e.getAttribute(o))))}function d(e,t){var n=e.getAttribute(c.selectorAttr);if(n){var r=e,i=e.getAttribute(c.targetAttr);if(null!=i&&(r=e.querySelector(i)||e),t||!0!==c.useOptionsAttr||(i=e.getAttribute(c.optionsAttr)||"{}",t=JSON.parse(i)),t=t||{},0<=n.indexOf(";"))for(var o=n.split(";"),s=0,a=o.length;s<a;s++)""!=o[s]&&f(r,o[s],t);else f(r,n,t);!0===c.useOptionsAttr&&0<Object.keys(t).length&&(delete(i=_({},t)).lng,e.setAttribute(c.optionsAttr,JSON.stringify(i)))}}return function(e,t){for(var n=c.document.querySelectorAll(e),r=0;r<n.length;r++){for(var i=n[r],o=i.querySelectorAll("["+c.selectorAttr+"]"),s=o.length-1;-1<s;s--)d(o[s],t);d(i,t)}}}};function Ye(e,t){var n=new FormData;return n.append("user",e),n.append("pass",t),n.append("express","1"),n.append("lang",c.default.language),h.instance.post("/api/v3/janrain/auth_native_traditional",n).then(function(e){var t,e=e.data;if("error"===u.default.get(e,"stat"))throw t="error.generic","invalid_credentials"===u.default.get(e,"error")&&(t="error.invalidLogin"),new ye("LOGIN_ERROR",t);if(u.default.get(e,"access_token"))return{token:u.default.get(e,"access_token"),email:u.default.get(e,"capture_user.email"),sessionId:u.default.get(e,"user_state.sessiontoken"),profile:{uuid:u.default.get(e,"capture_user.uuid"),displayName:u.default.get(e,"capture_user.displayName"),givenName:u.default.get(e,"capture_user.givenName")}};throw new ye("ERROR","error.generic")})}function Ke(i,e){var t=new FormData;return t.append("social",i),t.append("token",e),t.append("express","1"),t.append("lang",c.default.language),h.instance.post("/api/v3/janrain/social_authenticate",t).then(function(e){var t,n,r,e=e.data;if("failed"===u.default.get(e,"social_authenticate.response.result"))throw"existing_user"===u.default.get(e,"social_authenticate.response.error.type")?(n="error.generic",r={},"email"===(t=function(e){switch(e){case"googleplus":return"Google";case"facebook":return"Facebook";case"apple":return"Apple";default:return e}}(u.default.get(e,"social_authenticate.response.error.existing_provider.provider_id")))?n="error.existingUserTraditional":t&&(n="error.existingUserSocial",r[i]=t),new ye("EXISTING_USER",n,r)):new g("NO_ACCOUNT","Account does not exist");return{token:u.default.get(e,"social_authenticate.response.access_token"),email:u.default.get(e,"social_authenticate.response.user.email"),profile:{uuid:u.default.get(e,"social_authenticate.response.user.uuid"),displayName:u.default.get(e,"social_authenticate.response.user.displayName"),givenName:u.default.get(e,"social_authenticate.response.user.givenName")}}})}function Xe(e,t){return e=e,t=t,(n=new FormData).append("social",e),n.append("token",t),n.append("lang",c.default.language),h.instance.post("/api/v3/janrain/social_info",n).then(function(e){e=e.data;return u.default.get(e,"social_info.response.data")}).then(function(e){return!!u.default.get(e,"email")});var n}var j={id:void 0,name:void 0,accessToken:void 0};function Ze(){var e=S();return e?h.authInstance.post("/exchange",{sessionId:e},{withCredentials:!0}).then(function(e){e=e.data;return{idToken:e.idToken,accessToken:e.accessToken}}).then(function(e){var t=ce.default(e.idToken);if(et().uuid!==t.sub)throw new g("MISMATCHED_USER_ID","User id is mismatched");return j.id=t.sub,j.name=t.given_name||t.preferred_username,j.accessToken=e.accessToken,{accessToken:e.accessToken}}):Promise.reject(void 0)}function Qe(){return h.authInstance.post("/refresh",{},{withCredentials:!0}).then(function(e){e=e.data;return{idToken:e.idToken,accessToken:e.accessToken}}).then(function(e){var t=ce.default(e.idToken);if(et().uuid!==t.sub)throw new g("MISMATCHED_USER_ID","User id is mismatched");return j.id=t.sub,j.name=t.given_name,j.accessToken=e.accessToken,{accessToken:e.accessToken}})}function et(){var e=JSON.parse(localStorage.getItem("janrainCaptureProfileData")||"{}"),t=JSON.parse(localStorage.getItem("janrainCaptureReturnExperienceData")||"{}");return Object.assign(Object.assign({},e),t)}function S(){return Ce(Ae(document.location.hostname))||void 0}function tt(){return!!S()}function nt(){if(S())return j.id||et().uuid}var rt=null;function it(n){return rt||(S()?!j.accessToken||!j.accessToken||ce.default(j.accessToken).exp<Math.floor(Date.now()/1e3)?rt="true"!==Ce("auth.authenticated")?(f("User has not been authenticated, exchange session id with tokens"),e().finally(function(){rt=null})):(f("User has been authenticated, refreshing tokens"),Qe().then(function(e){return e.accessToken}).catch(function(){return f("Refresh failed, exchange session id with tokens"),e()}).finally(function(){rt=null})):Promise.resolve(j.accessToken):Promise.resolve(void 0));function e(){return Ze().then(function(e){var t,e=e.accessToken;return t=(t=n)?"domain=".concat(t):"",document.cookie="auth.authenticated=true; path=/; ".concat(t),e}).catch(function(e){if(e.response&&400===e.response.status)throw f("Error: user session is invalid"),new g("INVALID_SESSION","Session is invalid");throw e})}}function ot(e){j.id=void 0,j.name=void 0,j.accessToken=void 0,e=(e=e)?"domain=".concat(e):"",document.cookie="auth.authenticated=false; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ".concat(e),h.authInstance.delete("/refresh",{withCredentials:!0}).then(function(){}).catch(function(e){if(!e.response||400!==e.response.status)throw e;f("Unable to delete the refresh token due to missing cookie.")})}var st=Object.assign({events:[],user:{},environments:{}});var at={};function lt(e){var t=u.default.get(e,"pageName",""),n=t.split(":");at=Object.assign({pageName:t,primaryCategory:u.default.get(n,"1",""),siteSubSection1:u.default.get(n,"2",""),siteSubSection2:u.default.get(n,"3",""),siteSubSection3:u.default.get(n,"4",""),siteSubSection4:u.default.get(n,"5","")},e)}function E(e,t,n,r){n=2<arguments.length&&void 0!==n?n:{},r=3<arguments.length&&void 0!==r?r:{},e={event:e,eventAttribute:Object.assign(Object.assign({},n),{action:t}),additionalInfo:Object.assign({page:Object.assign(Object.assign({},at),{language:c.default.language||"en",siteName:u.default.get(st,"page.pageInfo.siteName","")}),user:{loggedIn:tt(),userID:nt()||""},environment:u.default.get(st,"environment",{})},r)};st.events.push(e),f("SbsLogin DataLayer: add event",e)}function O(e){return"apple"===e?"appleId":e}function ut(e){E("login","loginInitiated",{method:O(e)})}function L(e,t){E("login","loginFailed",{method:O(e),failMessage:t})}function ct(e){E("login","createAccountSuccess",{method:O(e)})}var ft,C,A,dt,pt,ht,gt,R,bt={};function vt(e,t){var n,r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return mt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mt(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return r&&(e=r),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function mt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yt(a,e,l){var t={},u=(e.forEach(function(e){t[e]=!0}),T("missingFieldsForm.header","CompleteMissingProfile",{fields:t,birthYearOptions:Vt(),genderOptions:Ht()}),x());I(u,function(){var e,t,n,r=new FormData(u),i=(Wt(r),{}),o=vt(r.entries());try{for(o.s();!(e=o.n()).done;){var s=e.value;"string"==typeof s[1]&&(i[s[0]]=s[1])}}catch(e){o.e(e)}finally{o.f()}r=a.token,t=i,n=c.default.language,h.instance.get("/api/v3/member/profileupdate?lang=".concat(n),{params:Object.assign({auth_token:r},t)}).then(function(){wt(a,l)}).catch(function(){T("genericError.header","GenericError")})}),Ut()}function wt(i,o){var e,t;e=i.token,t=c.default.language,h.instance.get("/api/v3/member/profilestatus?lang=".concat(t),{params:{auth_token:e}}).then(function(e){e=e.data;if(!0===u.default.get(e,"profilestatus.response.complete"))return{complete:!0};if(!1===u.default.get(e,"profilestatus.response.complete"))return{complete:!1,missing:u.default.get(e,"profilestatus.response.missing")};throw new g("ERROR",c.default.t("error.generic"))}).then(function(e){var t,n,r=e.complete,e=e.missing,e=void 0===e?[]:e;r?(r=i.token,t=new FormData,n=c.default.language,t.append("auth_token",r),t.append("lang",n),h.instance.post("/api/v3/member/completelogin",t).then(function(e){e=e.data;return u.default.get(e,"completelogin.response.sessionid")}).then(function(e){i.sessionId=e,Pt(i,o)})):yt(i,e,o)})}function xt(n,t,e){var r,i=2<arguments.length&&void 0!==e&&e;e=n.token,r=c.default.language,h.instance.get("/api/v3/member/verificationstatus?lang=".concat(r),{params:{auth_token:e}}).then(function(e){e=e.data;return!0===u.default.get(e,"verificationstatus.response.emailVerified")}).then(function(e){e?wt(n,t):i?kt(n.email):(T("loginForm.header","AccountNotVerified"),L(t,"User account is not validated"),(e=w("#sbs-login-resend-verification"))&&e.addEventListener("click",function(){var e,t;e=n.token,t=c.default.language,h.instance.get("/api/v3/member/resendverification?lang=".concat(t),{params:{auth_token:e}}).then(function(e){e=e.data;if(!0!==u.default.get(e,"resendverification.response.verificationSent"))throw new g("ERROR",c.default.t("error.generic"));return!0}).then(function(){T("loginForm.header","VerificationRequired",{p1I18nOptions:JSON.stringify({email:"<strong>".concat(u.default.escape(n.email),"</strong>")})})}).catch(function(){T("genericError.header","GenericError")})}))})}function kt(e){T("loginForm.header","VerificationRequired",{p1I18nOptions:JSON.stringify({email:"<strong>".concat(u.default.escape(e),"</strong>")})})}function _t(e,t,n){var n=2<arguments.length&&void 0!==n&&n,r=w(e),i=!0,o=!0;if(!r)throw new Error("Email element is not found");function s(){return o?r.value?we("email",r.value).then(function(e){return t&&!e&&t.addError(r,c.default.t("formError.emailUnavailable")),o=!1,i=e}):Promise.resolve(!1):(t&&!i&&t.addError(r,c.default.t("formError.emailUnavailable")),new Promise(function(e){e(i)}))}return r.addEventListener("change",function(){o=!0}),n&&r.addEventListener("blur",function(){t?(t.validate(r),0===t.getErrors(r).length&&s()):s()}),r.checkAvailability=s,r}function jt(o,s,e){T("createAccountForm.header","LinkAccount");var t=w("#sbs-login-email"),n=(t&&(t.value=e),w("#sbs-login-email"));if(!n)throw new Error("Email input getRootElement() is not defined");var r=w("#sbs-login-password");if(!r)throw new Error("Password input getRootElement() is not defined");I(x(),function(){Ye(n.value,r.value).then(function(e){var t,n,r,i;t=o,n=s,r=e.token,(i=new FormData).append("social",t),i.append("social_token",n),i.append("access_token",r),i.append("lang",c.default.language),h.instance.post("/api/v3/janrain/social_link",i).then(function(e){e=e.data;if(!0===u.default.get(e,"social_link.response.link_result"))return!0;throw new g("SOCIAL_LINK_FAILED",c.default.t("formError.linkFailed"))}).then(function(){Rt(e,o)}).catch(function(e){k(e)})}).catch(function(e){k(e)})})}function St(i,o,s){T("createAccountForm.header","CreateAccountSocial");var e=w("#sbs-login-create-account-social");e&&m(e,function(){var e,t,n,r;e=i,t=o,n=s,(r=new FormData).append("social",e),r.append("token",t),r.append("lang",c.default.language),n&&(n.email&&r.append("override_email",n.email),n.user&&r.append("user",n.user)),h.instance.post("/api/v3/janrain/social_process",r).then(function(e){e=e.data;return{token:u.default.get(e,"social_process.response.access_token"),email:u.default.get(e,"social_process.response.user.email"),profile:{uuid:u.default.get(e,"social_process.response.user.uuid"),displayName:u.default.get(e,"social_process.response.user.displayName"),givenName:u.default.get(e,"social_process.response.user.givenName")}}}).then(function(e){ct(i),xt(e,i,!0)}).catch(function(e){k(e)})})}function Et(){T("createAccountForm.header","CreateAccount",{birthYearOptions:Vt(),genderOptions:Ht(),pI18nOptions:JSON.stringify({termsLink:'<a target="_blank" href="https://www.sbs.com.au/aboutus/terms-and-conditions" data-i18n="createAccountForm.termsLink">'.concat(c.default.t("createAccountForm.termsLink"),"</a>"),privacyLink:'<a target="_blank" href="https://www.sbs.com.au/privacy-policy" data-i18n="createAccountForm.privacyLink">'.concat(c.default.t("createAccountForm.privacyLink"),"</a>")})},{pageName:"s:login:create-account"}),E("login","createAccountInitiated",{method:"email"});var t,e,n,i=x();i&&(t=_t("#sbs-login-email",I(i,function(r,e){t.checkAvailability(e,t).then(function(e){var t,n;e&&r&&(Wt(t=new FormData(i)),e=t,n=c.default.language,e.append("newsletter","1"),e.append("lang",n),h.instance.post("/api/v3/member/register",e).then(function(){return!0}).catch(function(e){var e=e.response.data,t=c.default.t("error.generic"),e=u.default.get(e,"register.response.message");throw"Email taken"==e&&(t=c.default.t("formError.emailUnavailable")),"Invalid password"==e&&(t=c.default.t("formError.passwordStrength")),new g("REGISTER_ERROR",t)}).then(function(){var e=t.get("email");ct("email"),kt(e)}).catch(function(e){var t,n;t="email",n=Oe(e,!0),E("login","createAccountFailed",{method:O(t),failMessage:n}),k(e)}))})},!1).validator,!0),e=w("#sbs-login-firstname"),n=w("#sbs-login-username"),e&&n&&e.addEventListener("change",function(){y(new Event("SbsLogin_GeneratingUsername")),ke(e.value).then(function(e){n.value=e,y(new Event("SbsLogin_FinishGeneratingUsername"))})})),zt(),Ut(),Ct()}function Ot(t,o,s){Xe(t,o).then(function(e){var n,r,i;e?St(t,o,s):(n=t,r=o,T("createAccountForm.header","SocialAskEmail"),I(x(),function(t){i.checkAvailability().then(function(e){t&&(e?St(n,r,{email:i.value}):jt(n,r,i.value))})}),i=_t("#sbs-login-email"))})}function Lt(t,n,r){Ke(t,n).then(function(e){xt(e,t)}).catch(function(e){"NO_ACCOUNT"===e.code?Ot(t,n,r):(L(t,Oe(e,!0)),Tt(),Le(".sbs-login-signin-generic-error",e))})}function Ct(){function e(){var e=document.getElementById("sbs-login-facebook-button");e&&m(e,function(){ut("facebook"),window.FB.login(function(e){var t=e.status,e=e.authResponse;"connected"===t?Lt("facebook",e.accessToken):L("facebook","User exited login")},{scope:"email,user_birthday"})})}function t(){window.gapi.load("auth2",function(){var e=window.gapi.auth2.init({client_id:"925996687353-lnd10r1euedigg571o8k2l22724gs39a.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"profile email https://www.googleapis.com/auth/user.birthday.read"}),t=document.getElementById("sbs-login-google-button");t&&m(t,function(){ut("google"),e.signIn().then(function(e){e=u.default.get(e.getAuthResponse(),"access_token");e&&Lt("google",e)}).catch(function(){L("google","User exited login")})})})}function n(){var e=document.getElementById("sbs-login-apple-button");e&&m(e,function(){ut("apple"),window.AppleID.auth.signIn().then(function(e){var t=e.authorization.id_token,e=e.user;e?Lt("apple",t,{user:JSON.stringify(e)}):Lt("apple",t)}).catch(function(){L("apple","User exited login")})})}window.FB?e():je("https://connect.facebook.net/en_US/sdk.js",function(){window.fbAsyncInit=function(){window.FB.init({appId:"399908920106464",version:"v7.0",cookie:!0,xfbml:!0})},e()}),window.gapi?t():je("https://apis.google.com/js/api:client.js",t),window.AppleID?n():je("https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",function(){window.AppleID.auth.init({clientId:"au.com.sbs.ondemand.website-services",scope:"name email",usePopup:!0,redirectURI:"".concat(window.location.origin,"/")}),n()})}function At(e){T("resetPasswordForm.header","ResetPassword",{},{pageName:"s:login:password-retrieval"});var t=w("#sbs-login-email");t&&(t.value=e),I(x(),function(){E("login","forgotPassword"),function(e,t){return h.instance.get("/api/v3/member/forgotpassword?lang=".concat(1<arguments.length&&void 0!==t?t:"en"),{params:{detail:e}}).then(function(e){e=e.data;if(u.default.get(e,"forgotpassword.response.emailSent",!1))return!0;throw new Error("Email not sent")}).catch(function(e){if("User not found"===u.default.get(e,"response.data.forgotpassword.response.message"))return!0;throw new g("ERROR",c.default.t("error.generic"))})}(u.default.get(t,"value",""),c.default.language).then(function(){T("resetPasswordForm.header","ResetPasswordSuccess",{p1I18nOptions:JSON.stringify({email:"<strong>".concat(u.default.escape(u.default.get(t,"value","")),"</strong>")})})}).catch(function(e){k(e)})})}function Rt(e,t){e.sessionId?Pt(e,t):xt(e,"email")}function Pt(e,t){y(new ue.default("SbsLogin_SignInSuccess",{detail:{loginData:e}})),E("login","loginSuccess",{method:O(t)},{user:{loggedIn:!0,userID:e.profile.uuid,loggedInType:O(t)},page:window.digitalData.page.pageInfo})}function Tt(){T("loginForm.header","SignIn",{},{pageName:"s:login:sign-in"});var t=w("#sbs-login-email");if(!t)throw new Error("Email input element is not defined");var n=w("#sbs-login-password");if(!n)throw new Error("Password input element is not defined");var e,r=x(),i=(I(r,function(e){f("Submit sign in form"),ut("email"),e&&Ye(t.value,n.value).then(function(e){r.reset(),Rt(e,"email")}).catch(function(e){L("email",Oe(e,!0)),k(e)})},!1),w(".sbs-login-forgot-password"));i&&(Se(i,e=function(){var e=w("#sbs-login-email"),t="";At(t=e?e.value:t)}),Ee(i,e)),zt(),Ct()}function It(){return(ft=ft||h.instance.get("/api/v3/network").then(function(e){return e.data.get.response.country_code}).catch(function(){throw new Error("Unable to get the country code")})).then(function(e){return["AU","CX","NF"].includes(e)})}function Nt(e,n){var r,t=A.querySelector("#sbs-login-lang-switcher");t&&((r=document.createElement("div")).setAttribute("tabindex","0"),r.classList.add("sbs-login-lang-button"),n===c.default.language&&r.classList.add("sbs-login-lang-button-active"),r.innerHTML=e,r.setAttribute("role","button"),Se(r,e=function(){var e=document.querySelectorAll(".sbs-login-lang-button-active"),t=([].forEach.call(e,function(e){e.classList.remove("sbs-login-lang-button-active")}),r.classList.add("sbs-login-lang-button-active"),e=n,t=p(c.default.language)!==p(e),c.default.changeLanguage(e),t&&(dt&&(pt.detach(),(pt=R.createStyleSheet(dt,{flip:p(e)})).attach()),ht&&(gt.detach(),(gt=R.createStyleSheet(ht,{flip:p(e)})).attach())),C(".sbs-login-container"),A.getElementsByTagName("form")[0]);t&&t.dispatchEvent(new Event("SbsLogin_LangChanged"))}),Ee(r,e),t.appendChild(r))}function P(){if(A)return A;throw new Error("Screen has not been initialised")}function Mt(){return A.querySelector(".sbs-login-body")}function T(e,t,n,r){r=3<arguments.length&&void 0!==r?r:{},t=Ge(t,n),n=e,(e=A.querySelector(".sbs-login-header"))&&(e.innerHTML=c.default.t(n),e.setAttribute("data-i18n",n)),e=t,(n=Mt())&&(n.innerHTML=e,C(".sbs-login-body")),t=Mt();t&&!function(e){var r=this,e=e.querySelectorAll("[data-on-click]");e&&e.forEach(function(e){e.setAttribute("tabindex","0");var t=e.getAttribute("data-on-click"),n=JSON.parse(e.getAttribute("data-on-click-args")||"[]");e.removeAttribute("data-on-click"),e.removeAttribute("data-on-click-args"),t&&"function"==typeof Gt[t]&&(e.addEventListener("click",function(e){e.preventDefault(),Gt[t].apply(r,n)}),e.addEventListener("keypress",function(e){e.preventDefault(),"Enter"===e.key&&Gt[t].apply(r,n)}))})}(t),lt(r)}function Bt(){P().classList.remove("sbs-login-hide"),y(new Event("SbsLogin_Show"))}function Ft(){P().classList.add("sbs-login-hide"),y(new Event("SbsLogin_Hide"))}function Dt(e){var t=new te.default(e,{classTo:"sbs-login-form-group",errorClass:"has-error",errorTextParent:"sbs-login-form-group",errorTextClass:"sbs-login-error-message"},!1);return e.querySelectorAll("input, select").forEach(function(e){e.addEventListener("blur",function(){t.validate(e)})}),e.querySelectorAll("select").forEach(function(e){e.addEventListener("change",function(){t.validate(e)})}),t}function qt(e){e.parentElement&&(""===e.value?e.parentElement.classList.remove("is-filled"):e.parentElement.classList.add("is-filled"))}function Ut(){var e=Mt();e&&(e=e.querySelectorAll(".sbs-login-form-input-group input, .sbs-login-form-input-group select"))&&e.forEach(function(e){qt(e),e.addEventListener("focus",function(){e.parentElement&&e.parentElement.classList.add("is-focus")}),e.addEventListener("blur",function(){e.parentElement&&e.parentElement.classList.remove("is-focus")}),e.addEventListener("change",function(){qt(e)})})}function I(t,n,e){var r=!(2<arguments.length&&void 0!==e)||e,i=(Ut(),Dt(t));return t.addEventListener("submit",function(e){e.preventDefault(),r&&!i.validate()||n(i.validate(),i)}),t.addEventListener("SbsLogin_LangChanged",function(e){i.reset(),i=Dt(t)}),{validator:i}}function zt(e){var n=A.querySelector(0<arguments.length&&void 0!==e?e:".sbs-login-password-toggle");n&&m(n,function(){var e,t;n.parentElement&&(e=n.parentElement.querySelector("input"))&&("password"===e.type?(t=at.pageName||"",bt[t]||(bt[t]=0),bt[t]<1&&E("login","showPassword"),bt[t]++,e.type="text",n.setAttribute("data-i18n","formFields.hidePassword;[aria-label]formFields.hidePasswordLabel")):(e.type="password",n.setAttribute("data-i18n","formFields.showPassword;[aria-label]formFields.showPasswordLabel")),C(".sbs-login-password-toggle"))})}function Vt(){var t=new Date;return re.default(Array(100).keys()).map(function(e){e=t.getFullYear()-e;return{label:String(e),value:String(e)}})}function Ht(){return[{value:"Male",i18nextKey:"formOptions.gender.male"},{value:"Female",i18nextKey:"formOptions.gender.female"},{value:"Non-binary",i18nextKey:"formOptions.gender.nonBinary"},{value:'"None of the above"',i18nextKey:"formOptions.gender.none"}]}function Wt(e){e.has("birthyear")&&(e.append("birthday","".concat(e.get("birthyear"),"-12-31")),e.delete("birthyear"))}var Gt={renderSignIn:Tt,renderCreateAccount:Et};function $t(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s.default(n);return e=r?(e=s.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),ee.default(this,e)}}function Jt(e,t){var n,r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return Yt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yt(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return r&&(e=r),n=0,{s:t=function(){},n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function Yt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Kt={apiHost:"https://www.sbs.com.au",authApiHost:"https://auth.sbs.com.au",context:"web",cookieDomain:void 0,htmlEl:null,language:"en",includeLanguages:null,excludeLanguages:[],stylesJss:{"@global":{".sbs-login-container":{fontFamily:"Roboto, sans-serif",fontSize:"16px",lineHeight:1.43,width:"100%",backgroundColor:"#f5f5f5",display:"flex",color:"black",boxSizing:"border-box",position:"relative"},".sbs-login-container a, .sbs-login-link":{cursor:"pointer",textDecoration:"underline"},".sbs-login-hide":{display:"none !important"},".sbs-login-close-button":{position:"absolute",right:"25px",top:"30px",width:"20px",height:"20px",cursor:"pointer",background:"none",border:"none","&:before, &:after":{position:"absolute",top:0,left:9,height:20,width:2,content:'" "',backgroundColor:"#fff"},"&:before":{transform:"rotate(45deg)"},"&:after":{transform:"rotate(-45deg)"}},".sbs-login-container a, .sbs-login-container a:visited":{color:"inherit"},".sbs-login-container input::-ms-reveal, .sbs-login-container input::-ms-clear":{display:"none"},".sbs-login-loading-overlay":{position:"absolute",width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"none"},".sbs-login-loading-overlay.show":{display:"block"},".spinner":{fontSize:"50px",position:"relative",display:"inline-block",width:"1em",height:"1em"},".spinner.center":{position:"absolute",left:"0",right:"0",top:"0",bottom:"0",margin:"auto"},".spinner .spinner-blade":{position:"absolute",left:".4629em",bottom:"0",width:".074em",height:".2777em",borderRadius:".0555em",backgroundColor:"transparent",transformOrigin:"center -.2222em",animation:"spinner-fade 1s infinite linear"},".spinner .spinner-blade:nth-child(1)":{animationDelay:"0s",transform:"rotate(0deg)"},".spinner .spinner-blade:nth-child(2)":{animationDelay:"0.083s",transform:"rotate(30deg)"},".spinner .spinner-blade:nth-child(3)":{animationDelay:"0.166s",transform:"rotate(60deg)"},".spinner .spinner-blade:nth-child(4)":{animationDelay:"0.249s",transform:"rotate(90deg)"},".spinner .spinner-blade:nth-child(5)":{animationDelay:"0.332s",transform:"rotate(120deg)"},".spinner .spinner-blade:nth-child(6)":{animationDelay:"0.415s",transform:"rotate(150deg)"},".spinner .spinner-blade:nth-child(7)":{animationDelay:"0.498s",transform:"rotate(180deg)"},".spinner .spinner-blade:nth-child(8)":{animationDelay:"0.581s",transform:"rotate(210deg)"},".spinner .spinner-blade:nth-child(9)":{animationDelay:"0.664s",transform:"rotate(240deg)"},".spinner .spinner-blade:nth-child(10)":{animationDelay:"0.747s",transform:"rotate(270deg)"},".spinner .spinner-blade:nth-child(11)":{animationDelay:"0.83s",transform:"rotate(300deg)"},".spinner .spinner-blade:nth-child(12)":{animationDelay:"0.913s",transform:"rotate(330deg)"},"@keyframes spinner-fade":{"0%":{backgroundColor:"#69717d"},"100%":{backgroundColor:"transparent"}},".sbs-login-container *, .sbs-login-container *:before, .sbs-login-container *:after":{boxSizing:"border-box"},".sbs-login-container p":{color:"#525e6e",marginTop:"1.25em",marginBottom:"1.25em"},".sbs-login-container p:first-child":{marginTop:"0"},".sbs-login-content":{flex:1,display:"flex",flexDirection:"column"},".sbs-login-header":{fontFamily:"Ubuntu, sans-serif",fontWeight:700,background:"black",color:"white",height:"80px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px"},".sbs-login-lang-switcher":{background:"rgb(215, 219, 219)",display:"flex",flexWrap:"wrap",justifyContent:"center",fontSize:"0.8125em",alignItems:"center",paddingTop:16,paddingBottom:7},".sbs-login-lang-button":{marginBottom:9,padding:"4px 13px",height:24,lineHeight:"24px",paddingTop:0,paddingBottom:0,cursor:"pointer",color:"#1b2024",backgroundColor:"white",borderRadius:12,"&:not(:first-child)":{marginLeft:8}},".sbs-login-lang-button-active":{fontWeight:"bold",backgroundColor:"#1b2024",color:"white",opacity:1},".sbs-login-body":{display:"flex",flexDirection:"column",marginTop:"40px",paddingBottom:"80px"},".sbs-login-body-content":{display:"flex",flexDirection:"column",minHeight:"430px"},".sbs-login-inner-container":{maxWidth:"430px",padding:"0 20px",marginLeft:"auto",marginRight:"auto"},".sbs-login-help-text":{opacity:.7,color:"#525e6e"},".sbs-login-text-small":{fontSize:"0.8125em"},".sbs-login-text-smaller":{fontSize:"0.6875em"},".sbs-login-text-align-right":{textAlign:"right"},".sbs-login-form":{display:"flex",flexDirection:"column",maxWidth:"320px",width:"100%",padding:"0 20px",textAlign:"left",marginBottom:"1em"},".sbs-login-form-group-container":{minHeight:"75px"},".sbs-login-form-input-group":{backgroundColor:"#fff",border:"1px solid #f5f5f5",borderRadius:"3px",height:"50px",position:"relative"},".sbs-login-form-input-group label":{display:"block",cursor:"text",color:"#6d7785",padding:"0 0 0 20px",position:"absolute",top:"0",height:"50px",lineHeight:"50px",width:"100%",fontSize:"1em"},".sbs-login-form-input-group.is-focus":{borderColor:"#1bf1fe"},".sbs-login-form-input-group.is-focus label, .sbs-login-form-input-group.is-filled label":{fontSize:"0.75em",height:"24px",lineHeight:"24px",paddingTop:"4px"},".sbs-login-form-input-group input":{border:"0",color:"#525e6e",lineHeight:"1em",height:"50px",padding:"0 0 0 20px",width:"100%",outline:"0",background:"transparent",fontSize:"0.8125em"},".sbs-login-form-input-group input:-webkit-autofill,\n.sbs-login-form-input-group input:-webkit-autofill:hover,\n.sbs-login-form-input-group input:-webkit-autofill:focus,\n.sbs-login-form-input-group input:-webkit-autofill:active":{WebkitBoxShadow:"0 0 0 30px white inset"},".sbs-login-form-input-group.is-focus input,\n.sbs-login-form-input-group.is-filled input":{position:"relative",top:"22px",height:"25px"},".sbs-login-form-input-group select":{fontFamily:"Roboto, sans-serif",fontWeight:700,fontSize:"0.9375em",cursor:"pointer",position:"absolute",top:"0",width:"100%",height:"100%",paddingTop:"17px",paddingLeft:"19px",color:"#525e6e",background:"transparent",border:"0",appearance:"none",WebkitAppearance:"none",MozAppearance:"none"},".sbs-login-container select option":{color:"#000"},".sbs-login-form-group-chevron":{opacity:.7,pointerEvents:"none",position:"absolute",right:"15px",top:"21px",width:"0",height:"0",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"6px solid #1b2024"},".sbs-login-password-toggle":{color:"#4b4b4b",cursor:"pointer",fontSize:"0.875em",position:"absolute",top:"15px",right:"15px",zIndex:2,letterSpacing:"0.5px",opacity:.8},".sbs-login-form-group.has-error":{borderColor:"#d21248"},".sbs-login-error-message":{color:"#d21248",fontSize:"0.6875em",marginTop:"4px",marginBottom:"4px",lineHeight:1.33},".sbs-login-signin-generic-error":{paddingTop:"8px",textAlign:"center",fontSize:"0.75em"},".sbs-login-center":{textAlign:"center"},".sbs-login-button":{fontFamily:"Roboto, sans-serif",fontSize:"0.8125em",lineHeight:1,width:"100%",borderRadius:"3px",letterSpacing:"0.5px",fontWeight:700,display:"inline-block",cursor:"pointer",textAlign:"center",padding:"0.92em 1em",border:"1px solid #1b2024",backgroundColor:"#f5f5f5",color:"#1b2024"},".sbs-login-button-primary":{border:"1px solid #00a0ff",backgroundColor:"#00a0ff",color:"#fff"},".sbs-login-social-container":{borderTop:"1px solid rgba(159, 169, 179, 0.6)",paddingTop:"24px",textAlign:"center"},".sbs-login-social-title":{fontSize:"0.8125em",fontWeight:700},".sbs-login-social-buttons":{display:"flex",justifyContent:"center",paddingTop:"10px"},".sbs-login-social-buttons .sbs-login-link":{fontWeight:"normal",textDecoration:"none"},".sbs-login-social-buttons > div":{padding:"10px 20px"},".sbs-login-social-button-label":{paddingTop:"8px",fontSize:"0.8125em"},".sbs-login-footer":{position:"absolute",bottom:"0",width:"100%",padding:"20px 0",fontSize:"0.8125em",fontWeight:700,letterSpacing:"0.25px",borderTop:"1px solid rgba(159, 169, 179, 0.6)",textAlign:"center"},".sbs-login-screen-sign-in .sbs-login-form":{minHeight:"336px"},"@media only screen and (max-width: 320px)":{".sbs-login-screen-sign-in .sbs-login-form":{minHeight:"236px"},".sbs-login-body-content":{minHeight:"330px"}},".sbs-login-message":{background:"#fff",textAlign:"center",padding:"0.75rem 2rem",color:"#0b0d0f"}}},additionalStylesJss:"",loadFonts:!0,enableDataLayer:!0,showLanguageSwitcher:!0,showGeoBlockWarning:!1,persistLegacy:!0,debug:!1,renderSignInForm:!1},q=(t.default(Xt,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){f("Emit Event ".concat(e)),this._callbacks=this._callbacks||{};e=this._callbacks[e];if(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i,o=Jt(e);try{for(o.s();!(i=o.n()).done;)i.value.apply(this,n)}catch(e){o.e(e)}finally{o.f()}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var r=0;r<n.length;r++)if(n[r]===t){n.splice(r,1);break}return this}}]),Xt);function Xt(){a.default(this,Xt)}e.default(N,q),Zt=$t(N),t.default(N,[{key:"on",value:function(e,t){return"ready"===e&&this.ready&&t(),Q.default(s.default(N.prototype),"on",this).call(this,e,t)}},{key:"initTranslationLibrary",value:function(){var t,n,e=Object.keys(d),r=this.getOption("includeLanguages"),i=this.getOption("excludeLanguages");r&&(e=e.filter(function(e){return-1!==r.indexOf(e)})),i&&0<i.length&&(e=e.filter(function(e){return-1===i.indexOf(e)})),n={},(t=e)&&Object.keys(d).forEach(function(e){-1===t.indexOf(e)&&delete d[e]}),Object.keys(d).forEach(function(e){he[e]&&(n[e]=he[e])}),f("init i18n with the following languages",t),c.default.init({lng:"en",fallbackLng:"en",resources:n})}},{key:"initHttpClient",value:function(){h.init({baseURL:this.getOption("apiHost"),params:{context:this.getOption("context")}}),h.initAuth({baseURL:this.getOption("authApiHost")})}},{key:"enableLoadingOverlayOnAjaxRequest",value:function(){var t=this;"number"!=typeof this.loadingOverlayInterceptorId&&(this.loadingOverlayInterceptorId=h.instance.interceptors.request.use(function(e){return t.showLoadingOverlay(),e}))}},{key:"disableLoadingOverlayOnAjaxRequest",value:function(){"number"==typeof this.loadingOverlayInterceptorId&&(h.instance.interceptors.request.eject(this.loadingOverlayInterceptorId),delete this.loadingOverlayInterceptorId)}},{key:"getLoadingElement",value:function(){return this.element.querySelector(".sbs-login-loading-overlay")}},{key:"showLoadingOverlay",value:function(){var e=this.getLoadingElement();e&&e.classList.add("show")}},{key:"hideLoadingOverlay",value:function(){var e=this.getLoadingElement();e&&e.classList.remove("show")}},{key:"persistLogin",value:function(e){var t,n,r,i;e.sessionId&&(t=new Date,n=new Date(t.setFullYear(t.getFullYear()+1)),this.getOption("persistLegacy")&&(r=(r=this.getCookieDomain())?"domain=".concat(r):"",i=e.token,document.cookie="janrainCaptureTokenRefresh_session=session; expires=".concat(n.toUTCString(),"; path=/;").concat(r),document.cookie="janrainFailedLogins_session=session; expires=".concat(n.toUTCString(),"; path=/;").concat(r),document.cookie="janrainSSO_session=session; path=/; expires=".concat(n.toUTCString(),";").concat(r),document.cookie="core_t=".concat(i,"; path=/;").concat(r),document.cookie="sbs_session_checktime=".concat(t.getTime()+864e5,"; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;").concat(r),document.cookie="".concat(Ae(document.location.hostname),"=").concat(e.sessionId,"; path=/; expires=").concat(n.toUTCString(),";").concat(r),localStorage.setItem("janrainCaptureToken",e.token),localStorage.setItem("janrainCaptureToken_Expires",t.toUTCString()),localStorage.setItem("janrainCaptureTokenRefresh",t.toUTCString()),localStorage.setItem("janrainCaptureReturnExperienceData",JSON.stringify(e.profile)),localStorage.setItem("janrainCaptureReturnExperienceData_Expires ",n.toUTCString()),localStorage.setItem("janrainCaptureProfileData",JSON.stringify(e.profile)),localStorage.setItem("janrainCaptureProfileData_Expires",t.toUTCString()),localStorage.setItem("janrainLastAuthMethod","traditionalSignin"),localStorage.setItem("janrainLastAuthMethod_Expires",n.toUTCString()),localStorage.setItem("janrainFailedLogins","0")))}},{key:"initUi",value:function(){var t=this;if(!this.element)throw new Error("Invalid login element.");this.enableLoadingOverlayOnAjaxRequest(),h.instance.interceptors.response.use(function(e){return t.hideLoadingOverlay(),e},function(e){return t.hideLoadingOverlay(),Promise.reject(e)}),this.initTranslationLibrary(),this.setupCustomValidators(),n=this.getOption("debug"),pe=n,function(e){0<arguments.length&&void 0!==e&&!e||(st=window.digitalData)}(this.getOption("enableDataLayer")),this.setLanguage(this.getOption("language"));var e,n=!this.getOption("renderSignInForm");!function(e,t){t=1<arguments.length&&void 0!==t?t:{};f("initScreen");var n=void 0===(n=t.showLanguageSwitcher)||n,r=void 0===(r=t.showCloseButton)||r,i=void 0!==(i=t.showGeoBlockWarning)&&i,o=t.stylesJss,t=t.additionalStylesJss,e=((A=e).innerHTML="",C=Je.init(c.default,{useOptionsAttr:!0}),A.classList.add("sbs-login-container"),A.classList.add("sbs-login-hide"),A.appendChild(_e(Ge("Layout",{showCloseButton:r}))),i&&It().then(function(e){e||(document.getElementById("sbs-login-body").insertAdjacentHTML("beforebegin",Ge("GeoBlockingMessage")),C("#sbs-login-geo-blocking-message"))}),A.appendChild(_e('<div id="sbs-login-styles">')),re.default(ie.default().plugins));if(e.push(oe.default({opt:"in"})),R=z.create({plugins:e,insertionPoint:document.getElementById("sbs-login-styles")||void 0}),o&&(dt=o,(pt=R.createStyleSheet(o,{flip:p(c.default.language)})).attach()),t&&(ht=t,(gt=R.createStyleSheet(t,{flip:p(c.default.language)})).attach()),n)for(var s=0,a=Object.entries(d);s<a.length;s++){var l=ne.default(a[s],2),u=l[0];Nt(l[1].title,u)}(r=w(".sbs-login-close-button"))&&m(r,function(){Ft()}),C(".sbs-login-container")}(this.element,{showLanguageSwitcher:this.getOption("showLanguageSwitcher"),showCloseButton:n,showGeoBlockWarning:this.getOption("showGeoBlockWarning"),stylesJss:this.getOption("stylesJss"),additionalStylesJss:this.getOption("additionalStylesJss")}),this.element.addEventListener("SbsLogin_SignInSuccess",function(e){t.persistLogin(e.detail.loginData),t.emit("signInSuccess")}),this.element.addEventListener("SbsLogin_Show",function(){t.emit("open")}),this.element.addEventListener("SbsLogin_Hide",function(){t.emit("close")}),this.element.addEventListener("SbsLogin_GeneratingUsername",function(e){t.disableLoadingOverlayOnAjaxRequest()}),this.element.addEventListener("SbsLogin_FinishGeneratingUsername",function(e){t.enableLoadingOverlayOnAjaxRequest()}),this.getOption("loadFonts")&&this.element.appendChild((n="@import url('".concat("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@700&display=swap","');"),(e=document.createElement("style")).innerHTML=n,e)),this.getOption("renderSignInForm")&&(Tt(),Bt())}},{key:"getOption",value:function(e){return this.options[e]}},{key:"setupCustomValidators",value:function(){te.default.addValidator("password-strength",function(e){return e&&5<=e.length&&e.match("[0-9]")},c.default.t("formError.passwordStrength"))}},{key:"setLanguage",value:function(e){Object.keys(d).includes(e)?c.default.changeLanguage(e):c.default.changeLanguage("en")}},{key:"getCookieDomain",value:function(){var e,t,n=this.getOption("cookieDomain");return void 0===n&&(e=document.location.hostname,n=(t=e.match(/(local|qa|stg).sbs.com.au$/))?t[0]:e.match(/.sbs.com.au$/)?".sbs.com.au":(t=e.match(/(dev|qa|stg|pr).sbsod.com$/))?t[0]:""),n}},{key:"attach",value:function(e){var t;"string"==typeof e?(t=document.querySelector(e))&&(this.element=t):e&&(this.element=e),this.element.innerHTML="",(this.element.login=this).initUi()}},{key:"getAccessToken",value:function(){var t=this;return it(this.getCookieDomain()).catch(function(e){throw"INVALID_SESSION"!==e.code&&"MISMATCHED_USER_ID"!==e.code||(f("Error getting access token due to invalid session, sign out user"),t.signOut()),e})}},{key:"getLanguage",value:function(){return c.default.language}},{key:"open",value:function(){if(!this.element)throw new Error("sbs-login is not attached to an element");if(this.getOption("renderSignInForm"))throw new Error("Unable to perform open() because the sign in form is rendered inline");Tt(),Bt()}},{key:"openCreateAccount",value:function(){if(!this.element)throw new Error("sbs-login is not attached to an element");if(this.getOption("renderSignInForm"))throw new Error("Unable to perform openCreateAccount() because the sign in form is rendered inline");Et(),Bt()}},{key:"close",value:function(){if(!this.element)throw new Error("sbs-login is not attached to an element");if(this.getOption("renderSignInForm"))throw new Error("Unable to perform close() because the sign in form is rendered inline");Ft()}},{key:"isLoggedIn",value:tt},{key:"getUserName",value:function(){if(S()){if(j.name)return j.name;var e=et();return e.givenName||e.displayName}}},{key:"getUserId",value:nt},{key:"getSessionId",value:S},{key:"destroy",value:function(){delete this.element.login,this.element.innerHTML=""}},{key:"cleanUpPersistedData",value:function(){localStorage.removeItem("janrainCaptureToken"),localStorage.removeItem("janrainCaptureToken_Expires"),localStorage.removeItem("janrainCaptureTokenRefresh"),localStorage.removeItem("janrainCaptureReturnExperienceData"),localStorage.removeItem("janrainCaptureReturnExperienceData_Expires "),localStorage.removeItem("janrainCaptureProfileData"),localStorage.removeItem("janrainCaptureProfileData_Expires"),localStorage.removeItem("janrainLastAuthMethod"),localStorage.removeItem("janrainLastAuthMethod_Expires"),localStorage.removeItem("janrainFailedLogins");var e=this.getCookieDomain(),e=e?"domain=".concat(e):"";document.cookie="janrainCaptureTokenRefresh_session= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ".concat(e),document.cookie="janrainFailedLogins_session= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ".concat(e),document.cookie="janrainSSO_session= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ".concat(e),document.cookie="core_t= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ".concat(e),document.cookie="sbs_session_checktime= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ".concat(e),document.cookie="".concat(Ae(document.location.hostname),"= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ").concat(e),document.cookie="".concat(Ae(document.location.hostname),"= ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}},{key:"signOut",value:function(){var e=this.getSessionId();e&&h.instance.post("/api/v3/member/logout",{},{headers:{Authorization:"Bearer ".concat(e)}}).then(function(){return!0}),this.cleanUpPersistedData(),ot(this.getCookieDomain()),lt({}),E("login","signOut"),this.emit("signOutSuccess")}},{key:"isInAustralia",value:It}],[{key:"create",value:function(){return new N(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})}}]);var Zt,U=N;function N(){var t,n,r,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=(a.default(this,N),(t=Zt.call(this)).ready=!1,t.options=Object.assign({},Kt,e),t.initHttpClient(),t.getOption("htmlEl"));return e&&t.attach(e),t.on("ready",function(){t.ready=!0}),localStorage.removeItem("sbs_login_data"),t.isLoggedIn()?(e=t.getUserId(),n=function(){return e=t.getSessionId(),h.instance.post("/api/v3/member/profiledisplay",{},{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){e=e.data.profiledisplay.response.profile;return{uuid:e.uuid,displayName:e.username,givenName:e.givenName}}).then(function(e){localStorage.setItem("janrainCaptureReturnExperienceData",JSON.stringify(e)),localStorage.setItem("janrainCaptureProfileData",JSON.stringify(e))}).catch(function(){t.cleanUpPersistedData()});var e},e?(e=t.getSessionId(),r=t.getUserId(),h.instance.post("/api/v3/member/loginstatus",{},{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){var e=e.data.loginstatus,t=e.status,e=e.response,n=e.active,e=e.memberId;if(t&&n){if(e!==r)throw new g("LOGINSTATUS_MISMATCHED_USER_ID","User id is mismatched");return e===r}return!1}).catch(function(e){if(e.response&&401===e.response.status)return!1;throw e}).then(function(e){e||t.cleanUpPersistedData()}).catch(function(e){if("LOGINSTATUS_MISMATCHED_USER_ID"===e.code)return n();throw e}).finally(function(){t.emit("ready")})):n().finally(function(){t.emit("ready")})):t.emit("ready"),t}tn.exports=U}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@babel/runtime/helpers/assertThisInitialized":24,"@babel/runtime/helpers/classCallCheck":25,"@babel/runtime/helpers/createClass":27,"@babel/runtime/helpers/defineProperty":28,"@babel/runtime/helpers/get":30,"@babel/runtime/helpers/getPrototypeOf":31,"@babel/runtime/helpers/inherits":32,"@babel/runtime/helpers/possibleConstructorReturn":42,"@babel/runtime/helpers/slicedToArray":45,"@babel/runtime/helpers/toConsumableArray":47,"@babel/runtime/helpers/wrapNativeSuper":50,"@babel/runtime/regenerator":51,axios:53,"core-js/modules/es.array.concat.js":203,"core-js/modules/es.array.filter.js":204,"core-js/modules/es.array.from.js":205,"core-js/modules/es.array.includes.js":206,"core-js/modules/es.array.iterator.js":207,"core-js/modules/es.array.join.js":208,"core-js/modules/es.array.map.js":209,"core-js/modules/es.array.slice.js":210,"core-js/modules/es.array.splice.js":211,"core-js/modules/es.function.name.js":212,"core-js/modules/es.object.assign.js":213,"core-js/modules/es.object.entries.js":214,"core-js/modules/es.object.get-own-property-descriptor.js":215,"core-js/modules/es.object.get-own-property-descriptors.js":216,"core-js/modules/es.object.keys.js":217,"core-js/modules/es.object.to-string.js":218,"core-js/modules/es.promise.finally.js":219,"core-js/modules/es.promise.js":220,"core-js/modules/es.reflect.construct.js":221,"core-js/modules/es.regexp.exec.js":222,"core-js/modules/es.string.includes.js":223,"core-js/modules/es.string.iterator.js":224,"core-js/modules/es.string.match.js":225,"core-js/modules/es.string.replace.js":226,"core-js/modules/es.string.split.js":227,"core-js/modules/es.string.sub.js":228,"core-js/modules/es.symbol.description.js":229,"core-js/modules/es.symbol.iterator.js":230,"core-js/modules/es.symbol.js":231,"core-js/modules/web.dom-collections.for-each.js":232,"core-js/modules/web.dom-collections.iterator.js":233,"custom-event":235,i18next:237,jss:255,"jss-preset-default":253,"jss-rtl":254,"jwt-decode":256,lodash:259,pristinejs:260,tslib:268}],53:[function(e,t,n){t.exports=e("./lib/axios")},{"./lib/axios":55}],54:[function(l,e,t){"use strict";var u=l("./../utils"),c=l("./../core/settle"),f=l("./../helpers/buildURL"),d=l("./../helpers/parseHeaders"),p=l("./../helpers/isURLSameOrigin"),h=l("../core/createError");e.exports=function(a){return new Promise(function(t,n){var e,r,i=a.data,o=a.headers,s=(u.isFormData(i)&&delete o["Content-Type"],new XMLHttpRequest);if(a.auth&&(e=a.auth.username||"",r=a.auth.password||"",o.Authorization="Basic "+btoa(e+":"+r)),s.open(a.method.toUpperCase(),f(a.url,a.params,a.paramsSerializer),!0),s.timeout=a.timeout,s.onreadystatechange=function(){var e;s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))&&(e="getAllResponseHeaders"in s?d(s.getAllResponseHeaders()):null,e={data:a.responseType&&"text"!==a.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:e,config:a,request:s},c(t,n,e),s=null)},s.onerror=function(){n(h("Network Error",a,null,s)),s=null},s.ontimeout=function(){n(h("timeout of "+a.timeout+"ms exceeded",a,"ECONNABORTED",s)),s=null},u.isStandardBrowserEnv()&&(e=l("./../helpers/cookies"),(r=(a.withCredentials||p(a.url))&&a.xsrfCookieName?e.read(a.xsrfCookieName):void 0)&&(o[a.xsrfHeaderName]=r)),"setRequestHeader"in s&&u.forEach(o,function(e,t){void 0===i&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)}),a.withCredentials&&(s.withCredentials=!0),a.responseType)try{s.responseType=a.responseType}catch(e){if("json"!==a.responseType)throw e}"function"==typeof a.onDownloadProgress&&s.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",a.onUploadProgress),a.cancelToken&&a.cancelToken.promise.then(function(e){s&&(s.abort(),n(e),s=null)}),void 0===i&&(i=null),s.send(i)})}},{"../core/createError":61,"./../core/settle":64,"./../helpers/buildURL":68,"./../helpers/cookies":70,"./../helpers/isURLSameOrigin":72,"./../helpers/parseHeaders":74,"./../utils":76}],55:[function(e,t,n){"use strict";var r=e("./utils"),i=e("./helpers/bind"),o=e("./core/Axios"),s=e("./defaults");function a(e){var e=new o(e),t=i(o.prototype.request,e);return r.extend(t,o.prototype,e),r.extend(t,e),t}var l=a(s);l.Axios=o,l.create=function(e){return a(r.merge(s,e))},l.Cancel=e("./cancel/Cancel"),l.CancelToken=e("./cancel/CancelToken"),l.isCancel=e("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=e("./helpers/spread"),t.exports=l,t.exports.default=l},{"./cancel/Cancel":56,"./cancel/CancelToken":57,"./cancel/isCancel":58,"./core/Axios":59,"./defaults":66,"./helpers/bind":67,"./helpers/spread":75,"./utils":76}],56:[function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},{}],57:[function(e,t,n){"use strict";var r=e("./Cancel");function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});var t,n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},{"./Cancel":56}],58:[function(e,t,n){"use strict";t.exports=function(e){return!(!e||!e.__CANCEL__)}},{}],59:[function(e,t,n){"use strict";var r=e("./../defaults"),i=e("./../utils"),o=e("./InterceptorManager"),s=e("./dispatchRequest");function a(e){this.defaults=e,this.interceptors={request:new o,response:new o}}a.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(n){a.prototype[n]=function(e,t){return this.request(i.merge(t||{},{method:n,url:e}))}}),i.forEach(["post","put","patch"],function(r){a.prototype[r]=function(e,t,n){return this.request(i.merge(n||{},{method:r,url:e,data:t}))}}),t.exports=a},{"./../defaults":66,"./../utils":76,"./InterceptorManager":60,"./dispatchRequest":62}],60:[function(e,t,n){"use strict";var r=e("./../utils");function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},{"./../utils":76}],61:[function(e,t,n){"use strict";var o=e("./enhanceError");t.exports=function(e,t,n,r,i){e=new Error(e);return o(e,t,n,r,i)}},{"./enhanceError":63}],62:[function(e,t,n){"use strict";var r=e("./../utils"),i=e("./transformData"),o=e("../cancel/isCancel"),s=e("../defaults"),a=e("./../helpers/isAbsoluteURL"),l=e("./../helpers/combineURLs");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=l(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return u(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(u(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},{"../cancel/isCancel":58,"../defaults":66,"./../helpers/combineURLs":69,"./../helpers/isAbsoluteURL":71,"./../utils":76,"./transformData":65}],63:[function(e,t,n){"use strict";t.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e}},{}],64:[function(e,t,n){"use strict";var i=e("./createError");t.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(i("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},{"./createError":61}],65:[function(e,t,n){"use strict";var r=e("./../utils");t.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},{"./../utils":76}],66:[function(a,l,e){!function(s){!function(){"use strict";var n=a("./utils"),r=a("./helpers/normalizeHeaderName"),t={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var e,o={adapter:("undefined"!=typeof XMLHttpRequest?e=a("./adapters/xhr"):void 0!==s&&(e=a("./adapters/http")),e),transformRequest:[function(e,t){return r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){o.headers[e]={}}),n.forEach(["post","put","patch"],function(e){o.headers[e]=n.merge(t)}),l.exports=o}.call(this)}.call(this,a("_process"))},{"./adapters/http":54,"./adapters/xhr":54,"./helpers/normalizeHeaderName":73,"./utils":76,_process:261}],67:[function(e,t,n){"use strict";t.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},{}],68:[function(e,t,n){"use strict";var i=e("./../utils");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(e,t,n){if(!t)return e;var r,n=n?n(t):i.isURLSearchParams(t)?t.toString():(r=[],i.forEach(t,function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),r.push(o(t)+"="+o(e))}))}),r.join("&"));return n&&(e+=(-1===e.indexOf("?")?"?":"&")+n),e}},{"./../utils":76}],69:[function(e,t,n){"use strict";t.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},{}],70:[function(e,t,n){"use strict";var a=e("./../utils");t.exports=a.isStandardBrowserEnv()?{write:function(e,t,n,r,i,o){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),a.isString(r)&&s.push("path="+r),a.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){e=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},{"./../utils":76}],71:[function(e,t,n){"use strict";t.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},{}],72:[function(e,t,n){"use strict";var r,i,o,s=e("./../utils");function a(e){return i&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}t.exports=s.isStandardBrowserEnv()?(i=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a"),r=a(window.location.href),function(e){e=s.isString(e)?a(e):e;return e.protocol===r.protocol&&e.host===r.host}):function(){return!0}},{"./../utils":76}],73:[function(e,t,n){"use strict";var i=e("../utils");t.exports=function(n,r){i.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},{"../utils":76}],74:[function(e,t,n){"use strict";var i=e("./../utils"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(e){var t,n,r={};return e&&i.forEach(e.split("\n"),function(e){n=e.indexOf(":"),t=i.trim(e.substr(0,n)).toLowerCase(),n=i.trim(e.substr(n+1)),!t||r[t]&&0<=o.indexOf(t)||(r[t]="set-cookie"===t?(r[t]||[]).concat([n]):r[t]?r[t]+", "+n:n)}),r}},{"./../utils":76}],75:[function(e,t,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},{}],76:[function(e,t,n){"use strict";var i=e("./helpers/bind"),e=e("is-buffer"),r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function s(e){return null!==e&&"object"==typeof e}function a(e){return"[object Function]"===r.call(e)}function l(e,t){if(null!=e)if(o(e="object"!=typeof e?[e]:e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}t.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:e,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:a,isStream:function(e){return s(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]=e}for(var t=0,i=arguments.length;t<i;t++)l(arguments[t],e);return r},extend:function(n,e,r){return l(e,function(e,t){n[t]=r&&"function"==typeof e?i(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},{"./helpers/bind":67,"is-buffer":239}],77:[function(e,t,n){var r=e("./lib/Modernizr"),i=e("./lib/ModernizrProto"),o=e("./lib/classes"),s=e("./lib/testRunner"),e=e("./lib/setClasses");s(),e(o),delete i.addTest,delete i.addAsyncTest;for(var a=0;a<r._q.length;a++)r._q[a]();t.exports=r},{"./lib/Modernizr":78,"./lib/ModernizrProto":79,"./lib/classes":80,"./lib/setClasses":84,"./lib/testRunner":85}],78:[function(e,t,n){var e=e("./ModernizrProto.js"),r=function(){};r.prototype=e,r=new r,t.exports=r},{"./ModernizrProto.js":79}],79:[function(e,t,n){var r=e("./tests.js");t.exports={_version:"3.6.0 (browsernizr 2.3.0)",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}}},{"./tests.js":86}],80:[function(e,t,n){t.exports=[]},{}],81:[function(e,t,n){var r=document.documentElement;t.exports=r},{}],82:[function(e,t,n){t.exports=function(e,t){return typeof e===t}},{}],83:[function(e,t,n){e="svg"===e("./docElement.js").nodeName.toLowerCase();t.exports=e},{"./docElement.js":81}],84:[function(e,t,n){var i=e("./Modernizr.js"),o=e("./docElement.js"),s=e("./isSVG.js");t.exports=function(e){var t,n=o.className,r=i._config.classPrefix||"";s&&(n=n.baseVal),i._config.enableJSClass&&(t=new RegExp("(^|\\s)"+r+"no-js(\\s|$)"),n=n.replace(t,"$1"+r+"js$2")),i._config.enableClasses&&(0<e.length&&(n+=" "+r+e.join(" "+r)),s?o.className.baseVal=n:o.className=n)}},{"./Modernizr.js":78,"./docElement.js":81,"./isSVG.js":83}],85:[function(e,t,n){var a=e("./tests.js"),l=e("./Modernizr.js"),u=e("./classes.js"),c=e("./is.js");t.exports=function(){var e,t,n,r,i,o,s;for(s in a)if(a.hasOwnProperty(s)){if(e=[],(t=a[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=c(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(o=e[i].split(".")).length?l[o[0]]=r:(!l[o[0]]||l[o[0]]instanceof Boolean||(l[o[0]]=new Boolean(l[o[0]])),l[o[0]][o[1]]=r),u.push((r?"":"no-")+o.join("-"))}}},{"./Modernizr.js":78,"./classes.js":80,"./is.js":82,"./tests.js":86}],86:[function(e,t,n){t.exports=[]},{}],87:[function(e,t,n){t.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},{}],88:[function(e,t,n){var r=e("../internals/is-object");t.exports=function(e){if(r(e)||null===e)return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},{"../internals/is-object":143}],89:[function(e,t,n){var r=e("../internals/well-known-symbol"),i=e("../internals/object-create"),e=e("../internals/object-define-property"),o=r("unscopables"),s=Array.prototype;null==s[o]&&e.f(s,o,{configurable:!0,value:i(null)}),t.exports=function(e){s[o][e]=!0}},{"../internals/object-create":157,"../internals/object-define-property":159,"../internals/well-known-symbol":202}],90:[function(e,t,n){"use strict";var r=e("../internals/string-multibyte").charAt;t.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},{"../internals/string-multibyte":190}],91:[function(e,t,n){t.exports=function(e,t,n){if(e instanceof t)return e;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},{}],92:[function(e,t,n){var r=e("../internals/is-object");t.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},{"../internals/is-object":143}],93:[function(e,t,n){"use strict";var r=e("../internals/array-iteration").forEach,e=e("../internals/array-method-is-strict")("forEach");t.exports=e?[].forEach:function(e){return r(this,e,1<arguments.length?arguments[1]:void 0)}},{"../internals/array-iteration":96,"../internals/array-method-is-strict":98}],94:[function(e,t,n){"use strict";var p=e("../internals/function-bind-context"),h=e("../internals/to-object"),g=e("../internals/call-with-safe-iteration-closing"),b=e("../internals/is-array-iterator-method"),v=e("../internals/to-length"),m=e("../internals/create-property"),y=e("../internals/get-iterator-method");t.exports=function(e){var t,n,r,i,o,s,a=h(e),e="function"==typeof this?this:Array,l=arguments.length,u=1<l?arguments[1]:void 0,c=void 0!==u,f=y(a),d=0;if(c&&(u=p(u,2<l?arguments[2]:void 0,2)),null==f||e==Array&&b(f))for(n=new e(t=v(a.length));d<t;d++)s=c?u(a[d],d):a[d],m(n,d,s);else for(o=(i=f.call(a)).next,n=new e;!(r=o.call(i)).done;d++)s=c?g(i,u,[r.value,d],!0):r.value,m(n,d,s);return n.length=d,n}},{"../internals/call-with-safe-iteration-closing":100,"../internals/create-property":111,"../internals/function-bind-context":126,"../internals/get-iterator-method":129,"../internals/is-array-iterator-method":140,"../internals/to-length":195,"../internals/to-object":196}],95:[function(e,t,n){function r(a){return function(e,t,n){var r,i=l(e),o=u(i.length),s=c(n,o);if(a&&t!=t){for(;s<o;)if((r=i[s++])!=r)return!0}else for(;s<o;s++)if((a||s in i)&&i[s]===t)return a||s||0;return!a&&-1}}var l=e("../internals/to-indexed-object"),u=e("../internals/to-length"),c=e("../internals/to-absolute-index");t.exports={includes:r(!0),indexOf:r(!1)}},{"../internals/to-absolute-index":192,"../internals/to-indexed-object":193,"../internals/to-length":195}],96:[function(){},{"../internals/array-species-create":99,"../internals/function-bind-context":126,"../internals/indexed-object":137,"../internals/to-length":195,"../internals/to-object":196}],97:[function(e,t,n){var r=e("../internals/fails"),i=e("../internals/well-known-symbol"),o=e("../internals/engine-v8-version"),s=i("species");t.exports=function(t){return 51<=o||!r(function(){var e=[];return(e.constructor={})[s]=function(){return{foo:1}},1!==e[t](Boolean).foo})}},{"../internals/engine-v8-version":121,"../internals/fails":124,"../internals/well-known-symbol":202}],98:[function(e,t,n){"use strict";var r=e("../internals/fails");t.exports=function(e,t){var n=[][e];return!!n&&r(function(){n.call(null,t||function(){throw 1},1)})}},{"../internals/fails":124}],99:[function(e,t,n){var r=e("../internals/is-object"),i=e("../internals/is-array"),o=e("../internals/well-known-symbol")("species");t.exports=function(e,t){var n;return new(void 0===(n=i(e)&&("function"==typeof(n=e.constructor)&&(n===Array||i(n.prototype))||r(n)&&null===(n=n[o]))?void 0:n)?Array:n)(0===t?0:t)}},{"../internals/is-array":141,"../internals/is-object":143,"../internals/well-known-symbol":202}],100:[function(e,t,n){var i=e("../internals/an-object"),o=e("../internals/iterator-close");t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){throw o(t),e}}},{"../internals/an-object":92,"../internals/iterator-close":147}],101:[function(e,t,n){var i=e("../internals/well-known-symbol")("iterator"),o=!1;try{var r=0,s={next:function(){return{done:!!r++}},return:function(){o=!0}};s[i]=function(){return this},Array.from(s,function(){throw 2})}catch(e){}t.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}},{"../internals/well-known-symbol":202}],102:[function(e,t,n){var r={}.toString;t.exports=function(e){return r.call(e).slice(8,-1)}},{}],103:[function(e,t,n){var r=e("../internals/to-string-tag-support"),i=e("../internals/classof-raw"),o=e("../internals/well-known-symbol")("toStringTag"),s="Arguments"==i(function(){return arguments}());t.exports=r?i:function(){}},{"../internals/classof-raw":102,"../internals/to-string-tag-support":198,"../internals/well-known-symbol":202}],104:[function(e,t,n){var a=e("../internals/has"),l=e("../internals/own-keys"),u=e("../internals/object-get-own-property-descriptor"),c=e("../internals/object-define-property");t.exports=function(e,t){for(var n=l(t),r=c.f,i=u.f,o=0;o<n.length;o++){var s=n[o];a(e,s)||r(e,s,i(t,s))}}},{"../internals/has":132,"../internals/object-define-property":159,"../internals/object-get-own-property-descriptor":160,"../internals/own-keys":171}],105:[function(e,t,n){var r=e("../internals/well-known-symbol")("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(e){}}return!1}},{"../internals/well-known-symbol":202}],106:[function(e,t,n){e=e("../internals/fails");t.exports=!e(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},{"../internals/fails":124}],107:[function(e,t,n){var o=e("../internals/require-object-coercible"),s=/"/g;t.exports=function(e,t,n,r){var e=String(o(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(s,"&quot;")+'"'),i+">"+e+"</"+t+">"}},{"../internals/require-object-coercible":181}],108:[function(e,t,n){"use strict";function r(){return this}var i=e("../internals/iterators-core").IteratorPrototype,o=e("../internals/object-create"),s=e("../internals/create-property-descriptor"),a=e("../internals/set-to-string-tag"),l=e("../internals/iterators");t.exports=function(e,t,n){t+=" Iterator";return e.prototype=o(i,{next:s(1,n)}),a(e,t,!1,!0),l[t]=r,e}},{"../internals/create-property-descriptor":110,"../internals/iterators":149,"../internals/iterators-core":148,"../internals/object-create":157,"../internals/set-to-string-tag":184}],109:[function(e,t,n){var r=e("../internals/descriptors"),i=e("../internals/object-define-property"),o=e("../internals/create-property-descriptor");t.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},{"../internals/create-property-descriptor":110,"../internals/descriptors":114,"../internals/object-define-property":159}],110:[function(e,t,n){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],111:[function(){}