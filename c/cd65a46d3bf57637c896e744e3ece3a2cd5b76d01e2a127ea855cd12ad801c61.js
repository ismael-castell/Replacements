!function(t,e){t.poll_config.forEach(function(t){function l(l,a){var i=e.getElementById("poll-"+t.id);"false"!=i.getAttribute("data-charted")&&1!=a||fetch(t.results).then(function(l){if(200!==l.status)return void console.log("Poll "+t.asset_id+" Status Code: "+l.status);l.json().then(function(l){var r;r="pie"==t.chart?n(l.results):o(l.results),e.getElementById("poll-"+t.id+"-results").innerHTML=r,i.setAttribute("data-charted","true")})}).catch(function(){}