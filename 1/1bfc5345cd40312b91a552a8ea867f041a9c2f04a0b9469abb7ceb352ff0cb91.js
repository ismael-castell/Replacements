(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{1061:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n(9),i=n(10),r=n(18),a=n(17),c=n(19),u=n(0),s=n.n(u),l=n(62),d=n(538),f=(n(861),n(1061),n(346),n(847),n(920)),p=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"resize",value:function(){clearTimeout(this.timer),this.timer=setTimeout((function(){document.documentElement.clientWidth<=640?document.documentElement.style.fontSize=document.documentElement.clientWidth/6.4+"px":document.documentElement.style.fontSize="100px"}),150)}},{key:"componentDidMount",value:function(){this.resize(),Object(d.b)(window,"resize",this.resize.bind(this))}},{key:"componentWillUnmount",value:function(){Object(d.a)(window,"resize",this.resize.bind(this))}},{key:"render",value:function(){return s.a.createElement("div",{className:"indexMain"},Object(l.a)(this.props.route.routes),s.a.createElement(f.a,null))}}]),t}(s.a.Component)},346:function(){}