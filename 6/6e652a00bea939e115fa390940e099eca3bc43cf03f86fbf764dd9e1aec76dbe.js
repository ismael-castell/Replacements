"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6900],{63544:(e,t,r)=>{r.d(t,{d:()=>s,h:()=>l});var n=r(84044),o=r(51068),i=r(68321),a=r(85893),s=function(e){var t,r,i=e.forceEmbed,s=void 0!==i&&i,l=(0,n.tv)();return!!(0,o.EQ)(["/signup","/auction/:saleName/bid/:bidId","/auction/:saleName/register","/orders/:orderId/offer","/orders/:orderId/status"],{decode:decodeURIComponent})(null==l||null===(t=l.match)||void 0===t||null===(r=t.location)||void 0===r?void 0:r.pathname)||s?(0,a.jsx)(c,{}):null},c=function(){return(0,i.D)({id:"mntn_conversion",removeOnUnmount:!0,text:'(function(){var x=null,p,q,m,o="32548",l="ORDER ID",i="TOTAL ORDER AMOUNT",c="",k="",g="",j="",u="",shadditional="";try{p=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,512)):""}catch(n){p=document.referrer!==null?document.referrer.toString().substring(0,512):""}try{q=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(b){q=document.location}try{m=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,512)):""}catch(z){try{m=q!==null?encodeURIComponent(q.toString().substring(0,512)):""}catch(h){m=""}}var A,y=document.createElement("script"),w=null,v=document.getElementsByTagName("script"),t=Number(v.length)-1,r=document.getElementsByTagName("script")[t];if(typeof A==="undefined"){A=Math.floor(Math.random()*100000000000000000)}w="dx.mountain.com/spx?conv=1&shaid="+o+"&tdr="+p+"&plh="+m+"&cb="+A+"&shoid="+l+"&shoamt="+i+"&shocur="+c+"&shopid="+k+"&shoq="+g+"&shoup="+j+"&shpil="+u+shadditional;y.type="text/javascript";y.src=("https:"===document.location.protocol?"https://":"http://")+w;r.parentNode.insertBefore(y,r)}());'}),null},l=function(){return(0,i.D)({id:"mntn_tracking",removeOnUnmount:!0,text:'(function(){"use strict";var e=null,b="4.0.0",n="32548",additional="term=value",t,r,i;try{t=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,2048)):""}catch(o){t=document.referrer!==null?document.referrer.toString().substring(0,2048):""}try{r=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(u){r=document.location}try{i=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,2048)):""}catch(a){try{i=r!==null?encodeURIComponent(r.toString().substring(0,2048)):""}catch(f){i=""}}var l,c=document.createElement("script"),h=null,p=document.getElementsByTagName("script"),d=Number(p.length)-1,v=document.getElementsByTagName("script")[d];if(typeof l==="undefined"){l=Math.floor(Math.random()*1e17)}h="dx.mountain.com/spx?"+"dxver="+b+"&shaid="+n+"&tdr="+t+"&plh="+i+"&cb="+l+additional;c.type="text/javascript";c.src=("https:"===document.location.protocol?"https://":"http://")+h;v.parentNode.insertBefore(c,v)})()'}),null}},83925:(e,t,r)=>{r.d(t,{r:()=>h});var n=r(4942),o=r(29439),i=r(45987),a=r(71122),s=r(67294),c=r(78384),l=r(82698),u=r(85893);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.scale,r=void 0===t?1.75:t,n=e.scaleDuration,c=void 0===n?.15:n,d=(0,i.Z)(e,["scale","scaleDuration"]),h=(0,s.useRef)(null),m=(0,s.useRef)(null),x=(0,s.useState)(!1),v=(0,o.Z)(x,2),y=v[0],b=v[1],w=(0,s.useState)({x:null,y:null}),j=(0,o.Z)(w,2),k=j[0],O=j[1];return(0,u.jsx)(a.Box,{position:"relative",overflow:"hidden",onMouseOver:function(){l.T||(m.current=setTimeout((function(){b(!0)}),300))},onMouseOut:function(){l.T||(m.current&&clearTimeout(m.current),b(!1))},onMouseMove:function(e){if(h.current&&!l.T){var t=h.current.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;O({x:r,y:n})}},width:"100%",height:"100%",ref:h,children:(0,u.jsx)(f,p(p({},d),{},{title:void 0,style:p(p({},d.style),{},{transformOrigin:g(k),transition:"transform ".concat(c,"s ease, transform-origin 100ms ease, opacity 0.25s"),transform:y?"scale(".concat(r,")"):"scale(1.0)"})}))})},f=(0,c.default)(a.Image).withConfig({displayName:"MagnifyImage__Image",componentId:"sc-1op6lm1-0"})(["display:block;width:100%;height:100%;"]),g=function(e){return null===e.x&&null===e.y?"center center":"".concat(e.x,"px ").concat(e.y,"px")}},99006:(e,t,r)=>{r.d(t,{N:()=>c});r(67294);var n=r(67002),o=r(71584),i=r(87691),a=r(85893),s="https://files.artsy.net/images/og_image.jpeg",c=function(e){var t=e.title,r=e.description,c=e.imageURL,l=e.pathname,u=e.blockRobots,d=null!=t?t:"Artsy — Discover, Buy, and Sell Fine Art",p=null!=r?r:"Artsy is the world’s largest online art marketplace. Browse over 1 million artworks by iconic and emerging artists from 4000+ galleries and top auction houses.",h=null!=c?c:s,f=null!=l?l:"/",g=[(0,o.d)("APP_URL"),f.startsWith("/")?f:"/".concat(f)].join(""),m=h?(0,i.MH)(h,{width:1200,height:630}).src:null,x=m&&h!==s?"summary_large_image":"summary";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Dx,{children:d}),(0,a.jsx)(n.h_,{name:"title",content:d}),(0,a.jsx)(n.h_,{name:"description",content:p}),(0,a.jsx)(n.rU,{rel:"canonical",href:g}),(0,a.jsx)(n.h_,{property:"og:type",content:"website"}),(0,a.jsx)(n.h_,{property:"og:url",content:g}),(0,a.jsx)(n.h_,{property:"og:title",content:d}),(0,a.jsx)(n.h_,{property:"og:site_name",content:"Artsy"}),(0,a.jsx)(n.h_,{property:"og:description",content:p}),(0,a.jsx)(n.h_,{property:"og:image",content:m}),(0,a.jsx)(n.h_,{property:"fb:app_id",content:"308278682573501"}),(0,a.jsx)(n.h_,{property:"twitter:title",content:d}),(0,a.jsx)(n.h_,{property:"twitter:card",content:x}),(0,a.jsx)(n.h_,{property:"twitter:url",content:g}),(0,a.jsx)(n.h_,{property:"twitter:site",content:"@artsy"}),(0,a.jsx)(n.h_,{property:"twitter:description",content:p}),(0,a.jsx)(n.h_,{property:"twitter:image",content:m}),u&&(0,a.jsx)(n.h_,{name:"robots",content:"noindex, nofollow"})]})}},42681:(e,t,r)=>{r.d(t,{FC:()=>n,QL:()=>o,Uk:()=>i});var n=104,o=60,i=110},36748:(e,t,r)=>{r.d(t,{FC:()=>n.FC,Uk:()=>n.Uk,l2:()=>ar});var n=r(42681),o=r(4942),i=r(29439),a=r(67294),s=r(71122),c=r(67250),l=r(45987),u=r(93433),d=r(15671),p=r(43144),h=r(97326),f=r(60136),g=r(82963),m=r(61120),x=r(53229),v=r(23493),y=r.n(v),b=r(41609),w=r.n(b),j=r(36836),k=r(30739),O=r(97054),C=r(21450),S=r(11447),A=r.n(S),P=r(23370),I=r.n(P),B=r(78384),D=r(81410),E=r(85893);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(e){var t=e.href,r=e.isHighlighted,n=e.query;return(0,E.jsx)(F,{bg:r?"black5":"white100",borderBottom:"1px solid",borderBottomColor:"black10",onClick:function(e){e.preventDefault()},to:t,children:(0,E.jsxs)(s.Text,{variant:"sm",children:["See full results for “",n,"”"]})})},R=function(e){var t=e.href,r=e.isHighlighted,n=e.showArtworksButton,o=e.showAuctionResultsButton;return(0,E.jsxs)(F,{bg:r?"black5":"white100",onClick:function(e){e.preventDefault()},to:t,children:[(0,E.jsx)(L,T({},e)),(0,E.jsx)(H,{href:t,showArtworksButton:!!n,showAuctionResultsButton:!!o})]})},F=(0,B.default)(D.rH).attrs({color:"black100",px:2,py:1}).withConfig({displayName:"SuggestionItem__SuggestionItemLink",componentId:"sc-8r9l42-0"})(["display:flex;flex-direction:column;justify-content:center;text-decoration:none;min-height:60px;"]),N="Search by artist, gallery, style, theme, tag, etc.",Z="Search Artsy",L=function(e){var t=e.display,r=e.label,n=e.query,o=A()(t,n),i=I()(t,o).map((function(e,t){var r=e.highlight,n=e.text;return r?(0,E.jsx)("strong",{children:n},t):n}));return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s.Text,{variant:"sm",overflowEllipsis:!0,children:i}),(0,E.jsx)(s.Text,{color:"black60",variant:"xs",overflowEllipsis:!0,children:r})]})},H=function(e){var t=e.href,r=e.showArtworksButton,n=e.showAuctionResultsButton;return r||n?(0,E.jsxs)(s.Flex,{flexWrap:"wrap",children:[!!r&&(0,E.jsx)(V,{to:"".concat(t,"/works-for-sale"),Icon:s.ArtworkIcon,children:"Artworks"}),!!n&&(0,E.jsx)(V,{to:"".concat(t,"/auction-results"),Icon:s.AuctionIcon,children:"Auction Results"})]}):null},V=function(e){var t=e.to,r=(0,l.Z)(e,["to"]);return(0,E.jsx)(s.Pill,T({onClick:function(e){e.stopPropagation(),e.preventDefault(),window.location.assign(t)},mt:1,mr:1},r))},U=r(80129),W=r.n(U),G=r(58808),q=r.n(G),z=r(22578),Q=r(79569),K=r(80569),J=r.n(K),Y=r(2240),$=r(76893),X=r(68817),ee=r(14591),te=r(6335),re=r(50056);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var oe,ie,ae,se,ce,le,ue,de,pe,he,fe=(0,B.default)(s.Clickable).withConfig({displayName:"SearchInputContainer__SearchButton",componentId:"zkywb1-0"})(["width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:50%;&:focus{background:",";outline:none;svg > path{fill:",";}}"],(0,re.themeGet)("colors.purple100"),(0,re.themeGet)("colors.white100")),ge=a.forwardRef((function(e,t){return(0,E.jsx)(s.LabeledInput,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,width:"100%",height:40,label:(0,E.jsx)(fe,{type:"submit",onClick:function(t){t.target.parentElement.blur(),w()(e.value)&&t.preventDefault()},children:(0,E.jsx)(s.MagnifyingGlassIcon,{})})},e))})),me=r(25108);function xe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,m.Z)(e);if(t){var o=(0,m.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,g.Z)(this,r)}}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=(0,ee.Z)("Components/Search/SearchBar"),we=(0,B.default)(s.Box).withConfig({displayName:"SearchBar__AutosuggestWrapper",componentId:"sc-19ysoyr-0"})(["position:relative;ul{list-style-type:none;padding:0;margin:0;}"]),je=function(e){var t=e.children,r=e.containerProps;return(0,E.jsx)(we,ye(ye({},r),{},{children:(0,E.jsx)(s.Box,{width:"100%",mt:.5,border:"1px solid",borderColor:"black10",bg:"white100",position:"absolute",zIndex:2,children:t})}))},ke=B.default.form.withConfig({displayName:"SearchBar__Form",componentId:"sc-19ysoyr-1"})(["width:100%;"]),Oe=(se=(0,k.j)(null,{dispatch:function(e){return Y.Z.postEvent(e)}}),ce=(0,k.j)((function(e,t,r){var n=(0,i.Z)(r,2),o=n[0];return{action_type:n[1]?O.ActionType.SearchedAutosuggestWithResults:O.ActionType.SearchedAutosuggestWithoutResults,query:o}})),le=(0,k.j)({action_type:O.ActionType.FocusedOnAutosuggestInput}),ue=(0,k.j)((function(e,t,r){var n=(0,i.Z)(r,1)[0],o=n.suggestion.node,a=o.href,s=o.displayType,c=o.id,l=o.__typename,u=n.suggestionIndex;return{action_type:O.ActionType.SelectedItemFromSearch,destination_path:"Artist"===l?"".concat(a,"/works-for-sale"):a,item_id:c,item_number:u,item_type:s,query:t.term}})),se((he=function(e){(0,f.Z)(r,e);var t=xe(r);function r(){var e;(0,d.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,o.Z)((0,h.Z)(e),"input",void 0),(0,o.Z)((0,h.Z)(e),"userClickedOnDescendant",void 0),(0,o.Z)((0,h.Z)(e),"removeNavigationListener",void 0),(0,o.Z)((0,h.Z)(e),"state",{entityID:null,entityType:null,focused:!1,term:Pe(window.location)}),(0,o.Z)((0,h.Z)(e),"throttledOnSuggestionHighlighted",(function(t){var r=t.suggestion;if(r){var n=r.node,o=n.displayType,i=n.id;"FirstItem"!==o&&e.setState({entityID:i,entityType:o})}})),(0,o.Z)((0,h.Z)(e),"throttledFetch",(function(t){var r=t.value,n=e.props.relay,o=performance&&performance.now();n.refetch({hasTerm:!0,term:r},null,(function(t){if(t)be.error(t);else{o&&Q.data.VOLLEY_ENDPOINT&&e.reportPerformanceMeasurement(o);var n=e.props.viewer,i=(0,$.U)(n,(function(e){return e.searchConnection.edges}),[]);e.trackSearch(r,i.length>0)}}))})),(0,o.Z)((0,h.Z)(e),"reportPerformanceMeasurement",(function(e){var t=performance.now()-e,r=Q.data.IS_MOBILE?"mobile":"desktop",n={name:"autocomplete-search-response",tags:["device-type:".concat(r),"design:rich"],timing:t,type:"timing"};J().post(Q.data.VOLLEY_ENDPOINT).send({metrics:[n],serviceName:"force"}).end()})),(0,o.Z)((0,h.Z)(e),"searchTextChanged",(function(t,r){var n=r.newValue;e.setState({term:n})})),(0,o.Z)((0,h.Z)(e),"onBlur",(function(t){t.relatedTarget&&t.relatedTarget.form&&t.relatedTarget.form===t.target.form?w()(t.target.value)||(e.userClickedOnDescendant=!0):e.setState({focused:!1})})),(0,o.Z)((0,h.Z)(e),"onSuggestionsClearRequested",(function(){e.userClickedOnDescendant||e.setState({entityID:null,entityType:null})})),(0,o.Z)((0,h.Z)(e),"renderSuggestionsContainer",(function(t){var r=t.containerProps,n=t.children,o=t.query,i=(0,$.U)(e.props,(function(e){return 0===e.viewer.searchConnection.edges.length})),a=e.state.focused;if(i||!a||!o)return null;var s={children:n,containerProps:r,focused:a,query:o};return(0,E.jsx)(je,ye(ye({},s),{},{children:n}))})),(0,o.Z)((0,h.Z)(e),"getSuggestionValue",(function(e){return e.node.displayLabel})),(0,o.Z)((0,h.Z)(e),"getLabel",(function(e){var t=e.displayType,r=e.__typename;return t||("Artist"===r?"Artist":null)})),(0,o.Z)((0,h.Z)(e),"renderSuggestion",(function(t,r){return(t.node.isFirstItem?e.renderFirstSuggestion:e.renderDefaultSuggestion)(t,r)})),(0,o.Z)((0,h.Z)(e),"renderFirstSuggestion",(function(t,r){var n=r.query,o=r.isHighlighted,i=t.node,a=i.displayLabel,s=i.href,c=e.getLabel(t.node);return(0,E.jsx)(M,{display:a,href:s,isHighlighted:o,label:c,query:n})})),(0,o.Z)((0,h.Z)(e),"renderDefaultSuggestion",(function(t,r){var n=r.query,o=r.isHighlighted,i=t.node,a=i.displayLabel,s=i.href,c=i.statuses,l=e.getLabel(t.node),u=!(null==c||!c.artworks),d=!(null==c||!c.auctionLots);return(0,E.jsx)(R,{display:a,href:s,isHighlighted:o,label:l,query:n,showArtworksButton:u,showAuctionResultsButton:d})})),(0,o.Z)((0,h.Z)(e),"renderInputComponent",(function(e){return(0,E.jsx)(ge,ye({},e))})),e}return(0,p.Z)(r,[{key:"trackSearch",value:function(e,t){}},{key:"componentDidMount",value:function(){var e=this;this.throttledFetch=y()(this.throttledFetch,500,{leading:!0}),this.throttledOnSuggestionHighlighted=y()(this.throttledOnSuggestionHighlighted,500,{leading:!0}),this.removeNavigationListener=this.props.router?this.props.router.addNavigationListener((function(t){return t.pathname.startsWith("/search")||e.setState({term:""}),!0})):function(){}}},{key:"componentWillUnmount",value:function(){this.removeNavigationListener()}},{key:"onFocus",value:function(){this.setState({focused:!0})}},{key:"onSuggestionSelected",value:function(e){var t=e.suggestion.node.href;e.method;if(this.userClickedOnDescendant=!0,this.props.router){var r=this.props.router.matcher.routeConfig;!!this.props.router.matcher.matchRoutes(r,t)?(this.props.router.push(t),this.onBlur({})):window.location.assign(t)}else window.location.assign(t)}},{key:"renderAutosuggestComponent",value:function(e){var t=this,r=e.xs,n=this.state.term,o=this.props.viewer,i={"aria-label":"Search Artsy",name:"term",onBlur:this.onBlur,onChange:this.searchTextChanged,onFocus:this.onFocus.bind(this),onKeyDown:function(e){13===e.keyCode&&e.target&&w()(e.target.value)&&e.preventDefault()},placeholder:r?Z:N,value:n},a={node:{displayLabel:n,displayType:"FirstItem",href:"/search?term=".concat(encodeURIComponent(n)),isFirstItem:!0}},s=(0,$.U)(o,(function(e){return e.searchConnection.edges}),[]),c=[a].concat((0,u.Z)(s));return(0,E.jsx)(q(),{focusInputOnSuggestionClick:!1,alwaysRenderSuggestions:this.userClickedOnDescendant,suggestions:c,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionHighlighted:this.throttledOnSuggestionHighlighted,onSuggestionsFetchRequested:this.throttledFetch,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,renderSuggestionsContainer:function(e){return t.renderSuggestionsContainer(e)},inputProps:i,onSuggestionSelected:function(e,r){e.preventDefault(),t.onSuggestionSelected(r)},renderInputComponent:this.renderInputComponent})}},{key:"render",value:function(){var e=this,t=this.props.router;return(0,E.jsxs)(ke,{action:"/search",method:"GET",onSubmit:function(r){if(t){r.preventDefault();var n=encodeURIComponent(e.state.term);window.location.assign("/search?term=".concat(n)),e.onBlur(r)}else me.error("[Components/Search/SearchBar] `router` instance not found.")},children:[(0,E.jsx)(te.pU,{at:"xs",children:this.renderAutosuggestComponent({xs:!0})}),(0,E.jsx)(te.pU,{greaterThan:"xs",children:this.renderAutosuggestComponent({xs:!1})})]})}}]),r}(a.Component),pe=he,(0,x.Z)(pe.prototype,"trackSearch",[ce],Object.getOwnPropertyDescriptor(pe.prototype,"trackSearch"),pe.prototype),(0,x.Z)(pe.prototype,"onFocus",[le],Object.getOwnPropertyDescriptor(pe.prototype,"onFocus"),pe.prototype),(0,x.Z)(pe.prototype,"onSuggestionSelected",[ue],Object.getOwnPropertyDescriptor(pe.prototype,"onSuggestionSelected"),pe.prototype),de=pe))||de),Ce=(0,z.createRefetchContainer)((0,j.CE)(Oe),{viewer:void 0!==oe?oe:oe=r(5756)},void 0!==ie?ie:ie=r(29856)),Se=function(e){var t=e.searchQuery,r=(0,l.Z)(e,["searchQuery"]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(s.Box,ye(ye({display:["block","none"]},r),{},{children:(0,E.jsx)(ge,{placeholder:t||Z,defaultValue:t})})),(0,E.jsx)(s.Box,ye(ye({display:["none","block"]},r),{},{children:(0,E.jsx)(ge,{placeholder:t||N,defaultValue:t})}))]})},Ae=function(e){var t=(0,a.useContext)(j.yk),n=t.relayEnvironment,o=t.searchQuery,i=void 0===o?"":o;return(0,X.H)("undefined"!=typeof window)?(0,E.jsx)(C.M,{environment:n,query:void 0!==ae?ae:ae=r(78918),variables:{hasTerm:!1,term:""},render:function(e){var t=e.props;return t?(0,E.jsx)(Ce,{viewer:t.viewer}):(0,E.jsx)(Se,{searchQuery:i})}}):(0,E.jsx)(Se,ye({searchQuery:i},e))},Pe=function(e){var t,r,n,o=null!==(t=null===(r=W().parse(null===(n=e.search)||void 0===n?void 0:n.slice(1)))||void 0===r?void 0:r.term)&&void 0!==t?t:"";return Array.isArray(o)?o[0]:o},Ie=r(65829),Be=r(48616),De=r(98568),Ee=(0,B.css)(["display:flex;align-items:center;width:100%;text-decoration:none;&:hover{background-color:",";}"],(0,re.themeGet)("colors.black5")),_e=(0,B.default)(D.rH).withConfig({displayName:"NavBarMenuItem__NavBarMenuItemLink",componentId:"sc-774n6m-0"})(["",""],Ee);_e.defaultProps={py:1,px:2};var Te=(0,B.default)(s.Clickable).withConfig({displayName:"NavBarMenuItem__NavBarMenuItemButton",componentId:"sc-774n6m-1"})(["",""],Ee);Te.defaultProps={py:1,px:2};var Me,Re,Fe=function(e){var t=e.menu,r=e.contextModule,n=e.onClick,o=(0,Ie.r)().trackEvent,i=function(e){var t=e.currentTarget,n=t.innerText,i=t.getAttribute("href");o({action_type:j.M4.ActionType.Click,subject:n,destination_path:i,context_module:r})},a=r===j.M4.ContextModule.HeaderArtistsDropdown,c=t.links.length-1,l=t.links[c];return(0,E.jsx)(s.Text,{width:"100vw",variant:["xs","xs","sm"],onClick:n,children:(0,E.jsx)(Be.z,{children:(0,E.jsx)(De.j,{children:(0,E.jsxs)(s.GridColumns,{children:[(0,E.jsxs)(s.Column,{span:2,py:6,display:"flex",flexDirection:"column",justifyContent:"space-between",borderRight:"1px solid",borderColor:"black10",children:[(0,E.jsx)(s.Box,{children:t.links.map((function(e,t){if(!("menu"in e))return!(c===t)&&(0,E.jsx)(_e,{to:e.href,onClick:i,children:e.text},e.text)}))}),(0,E.jsx)(_e,{to:l.href,children:l.text})]}),(0,E.jsxs)(s.Column,{span:10,py:6,display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,E.jsx)(s.Flex,{children:t.links.map((function(e){if("menu"in e)return(0,E.jsxs)(s.Box,{flex:1,children:[(0,E.jsx)(s.Text,{variant:"xs",mb:1,px:2,color:"black60",textTransform:"uppercase",children:e.text}),e.menu&&e.menu.links.map((function(e){return!("menu"in e)&&(0,E.jsx)(_e,{to:e.href,onClick:i,children:e.text},e.text)}))]},e.text)}))}),a&&(0,E.jsxs)(s.Box,{children:[(0,E.jsx)(s.Text,{variant:"xs",py:1,px:2,textTransform:"uppercase",color:"black60",children:"Browse by name"}),(0,E.jsx)(s.Text,{variant:"sm",mx:1,children:Ne.map((function(e){return(0,E.jsx)(D.rH,{to:"/artists/artists-starting-with-".concat(e.toLowerCase()),title:"View artists starting with “".concat(e,"”"),display:"inline-block",textDecoration:"none",p:1,onClick:i,children:e},e)}))})]})]})]})})})})},Ne="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Ze=r(33687),Le=function(e){var t=e.image,r=e.summary,n=e.artists;return(0,E.jsxs)(s.Flex,{alignItems:"center",children:[(0,E.jsx)(s.Box,{width:40,height:40,bg:"black5",mr:1,children:t}),(0,E.jsxs)(s.Box,{children:[r,n]})]})},He=function(){return(0,E.jsx)(s.Skeleton,{px:2,py:1,children:(0,E.jsx)(Le,{image:(0,E.jsx)(s.SkeletonBox,{width:"100%",height:"100%"}),summary:(0,E.jsx)(s.SkeletonText,{variant:"xs",children:"N works added"}),artists:(0,E.jsx)(s.SkeletonText,{variant:"xs",children:"Pending artists"})})})},Ve=(0,z.createFragmentContainer)((function(e){var t,r=e.me,n=(0,Ze.d)(null==r||null===(t=r.followsAndSaves)||void 0===t?void 0:t.notifications),o=(0,Ie.r)().trackEvent,i=function(e,t){o({action_type:k.M4.ActionType.Click,context_module:k.M4.ContextModule.HeaderActivityDropdown,destination_path:e,subject:t})};return(0,E.jsxs)(E.Fragment,{children:[n.map((function(e,t){var r,n=e.artists,o=e.href,a=e.image,c=e.summary;return(0,E.jsx)(_e,{to:"".concat(o,"/works-for-sale"),"aria-label":"".concat(c," by ").concat(n),onClick:function(){}