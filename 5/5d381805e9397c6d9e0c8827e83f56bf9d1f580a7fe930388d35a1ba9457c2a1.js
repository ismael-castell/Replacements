(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[5],{1155:function(e,n,a){"use strict";var t=a(79),i=a.n(t),l=a(1152),r=a(78),o=a.n(r),c=a(22),s=a.n(c),u=a(0),m=a.n(u),d=a(231),p=a(1147),g=a(175),f=a(345),h=a(1156),v=function(e){var n=s()(e,"node.speakingId");return s()(e,"node.url")||"/".concat(n,"/")},b=function(e){var n=e.item,a=e.node,t=e.className,i=e.reportEvent,l=e.handleCollapse;if(s()(n,"relationNode.speakingId"))return function(e){var n=e.item,a=(e.node,e.className,e.reportEvent),t=e.handleCollapse,i=s()(n,"relationNode.speakingId"),l=s()(n,"node.speakingId"),r=o()(h.menuButton,h["".concat(i)]),c=s()(n,"node.displayName.text"),u=v(n),b=Object(g.a)(),k=Object(f.a)().session;"become-a-member-hamburger"===l&&(b&&(u+="&referrer_url=".concat(encodeURIComponent(b.toString()))),k&&k.originatingReferrer&&""!==k.originatingReferrer&&(u+="&originating_referrer=".concat(encodeURIComponent(k.originatingReferrer))));return m.a.createElement("li",{className:h.listItem,key:n.node.speakingId},m.a.createElement(d.a,{href:u,onClick:function(e){"/source/"!==u&&"/brasil/fontes/"!==u&&("function"==typeof a&&a({action:"click",label:"".concat(c)}),"function"==typeof t&&t())}},m.a.createElement("div",{className:r},c,m.a.createElement(p.a,{className:h.arrow,type:"Arrow_02_Right"}))))}({item:n,node:a,className:t,reportEvent:i,handleCollapse:l});var r=o()(h.menuLink,t),c=s()(n,"node.displayName.text"),u=v(n);return m.a.createElement("li",{key:n.node.speakingId,className:h.listItem},m.a.createElement(d.a,{className:r,href:u,onClick:function(e){"/source/"!==u&&("function"==typeof i&&i({action:"click",label:"".concat(c)}),"function"==typeof l&&l())}},c))};n.a=l.EventTracking.createContainer({label:"list-items"})((function(e){var n=e.node,a=e.className,t=e.reportEvent,l=e.handleCollapse,r=s()(n,"members.edges");return m.a.createElement("ul",{className:h.menuItems},i()(r).call(r,(function(){}