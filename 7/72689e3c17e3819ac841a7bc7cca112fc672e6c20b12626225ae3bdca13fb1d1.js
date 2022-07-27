function(){}

function unsubscribeEvent(event, listener, useCapture) {
  if (document.removeEventListener) {
    document.removeEventListener(event, listener, useCapture);
  } else if (document.detachEvent) {
    document.detachEvent(event, listener, useCapture);
  }
}

function(){};

document.documentElement.onmousemove = startActivityHandler;
subscribeEvent("touchstart", startActivityHandler, false);

function(){}

function(){}

function(){}

function getMetatagContent(metatagName) {
  var metas = document.getElementsByTagName('meta');

  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metatagName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

function(){}