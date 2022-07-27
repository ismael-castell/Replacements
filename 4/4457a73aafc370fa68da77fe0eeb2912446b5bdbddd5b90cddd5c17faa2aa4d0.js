function(){}

/*
function addUTF8Encoding() {
  var metaTag=document.createElement('meta');
  metaTag.setAttribute('http-equiv', "Content-Type");
  metaTag.content = "text/html; charset=utf-8";
  document.getElementsByTagName('head')[0].appendChild(metaTag);
}
*/
//addUTF8Encoding();

if(!window.jQuery) {
  importJS('https://i.dynspt.com/im_html/jquery-1.4.4.min.js', 'bcimtooljquery', function(){});
} else {
  importJS('https://i.dynspt.com/im_html/jquery.cookie.min.js', 'bcimtoolcookie');
}

function(){}

function(){}

function(){}

if ( document.addEventListener ) {
  DOMContentLoaded = function(){};

} else if ( document.attachEvent ) {
  DOMContentLoaded = function(){}