/**
 * @file
 * JavaScript for ajax_example.
 */


 (function ($, Drupal) {

  if( /Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.giftbox_mail').addClass("d-none");
  }
  var gift_token = getUrlParameter('token');
  
  $("body").on("click", ".mysph_signup", function(e){
    gaeventtrack_variant('signup','LetSubshare');
    var userObj={firstname:"",lastname:"",email:"",password:"",phone:""};
    _mySPHObj.openSignUp(userObj);
  });

  $("body").on("click", ".giftContents .mysph_login", function(e){
    _mySPHObj.openLogin();
  });

  if( gift_token != "" && typeof _data !== 'undefined') {
      _data.abVariant = "LetSubshare";
  }

  $("body").on("click", ".verifybtn", function(){}