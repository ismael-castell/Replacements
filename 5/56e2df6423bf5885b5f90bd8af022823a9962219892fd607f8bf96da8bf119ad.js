(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{"1AUC":function(e,t,n){"use strict";var r=n("VrFO"),i=n.n(r),a=n("Y9Ll"),o=n.n(a),c=n("1Pcy"),l=n.n(c),s=n("5Yy7"),u=n.n(s),d=n("2VqO"),m=n.n(d),f=n("KEM+"),b=n.n(f),h=(n("2G9S"),n("1t7P"),n("jQ/y"),n("ho0z"),n("ERkP")),p=n.n(h),v=n("iPch"),g=n("1YZw"),y=n("wqZ5"),w=n("kHBp"),E=n("P1r1"),k=n("G6rE"),P=n("rxPX"),C=n("0KEI"),L=function(){},I=function(e,t){var n=L(e,t),r=null==n?void 0:n.user;return r?k.e.select(e,r):void 0},S=function(e,t){var n=t.listId;return v.h(e,n)},x=Object(P.a)().propsFromState((function(){return{list:L,user:I,dataSaverMode:E.j,couldPinList:y.b,media:S}})).adjustStateProps((function(e){var t=e.couldPinList,n=e.dataSaverMode,r=e.list,i=e.media;return{list:r,author:e.user,media:i,dataSaverMode:n,couldPinList:t}})).propsFromActions((function(){return{pinOrUnpinList:w.a.togglePinList,createLocalApiErrorHandler:Object(C.createLocalApiErrorHandlerWithContextFactory)("LIST_CELL"),addToast:g.b,subscribe:w.a.subscribe,unsubscribe:w.a.unsubscribe}})).withAnalytics(),j=n("f5/l"),M=n("3XMw"),O=n.n(M),B=n("mN6z"),H=(n("uFXj"),n("0mK8")),R=n("xZmF"),A=n("5S/X"),_=n("2My+"),F=n("Tp1h"),z=n("Jkc4"),D="cellThumbnail",T="listCell",N=n("MWbm"),K=n("t62R"),U=n("/yvb"),W=n("CGyZ"),Y=n("htQn"),X=n("rHpw"),J=n("a5gf"),Q=n("IMYl"),V=(O.a.d58baa7f,O.a.j681933e),Z=X.a.create((function(e){return{root:{backgroundColor:e.colors.cellBackground,paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},bottomBorder:{borderBottomColor:e.colors.borderColor,borderBottomWidth:e.borderWidths.small},followButton:{marginLeft:e.spaces.space12},listContainer:{flexDirection:"row"},leftColumn:{alignItems:"center",flexDirection:"row",flex:1,flexShrink:1},rightColumn:{flexShrink:0,justifyContent:"center"},iconCheckmark:{color:e.colors.primary,paddingHorizontal:e.spaces.space12},iconLock:{color:e.colors.text},listAttribution:{flex:1,alignItems:"flex-start"},name:{marginBottom:e.spaces.space2,flexDirection:"row"},description:{marginBottom:e.spaces.space2},icon:{paddingLeft:e.spaces.space4},thumbnailImage:{alignItems:"flex-start",height:"100%",marginRight:e.spaces.space16}}})),q=function(e){var t=e.accessibilityRole,n=e.dataSaverMode,r=e.description,i=e.hoverLabel,a=e.icon,o=e.isFollowing,c=e.isSelected,l=e.listId,s=e.media,u=e.mode,d=e.name,m=e.onClick,f=e.onFollow,b=e.onIconClick,h=e.onUnfollow,v=e.user,g=e.withBottomBorder,y=e.withDescription,w=e.withHoverCard,E=e.withSubscribe,k=void 0!==E&&E,P="/i/lists/".concat(l),C=function(e){return e?p.a.createElement(_.a,{basePath:P,listId:l},e):null},L=p.a.useMemo((function(){return c?p.a.createElement(Q.a,{accessibilityRole:"img",style:Z.iconCheckmark}):a?p.a.createElement(U.a,{hoverLabel:i?{label:i}:void 0,icon:a,onPress:b,type:"brandText"}):k?p.a.createElement(z.a,{customText:d,displayMode:F.a.subscribe,userFullName:v?v.name:void 0},(function(e){return p.a.createElement(W.a,{isFollowing:o,onFollow:e(f),onUnfollow:e(h),showRelationshipChangeConfirmation:!1,size:"small",style:Z.followButton,type:"list"})})):void 0}),[i,a,o,c,f,b,h,d,v,k]);return p.a.createElement(Y.a,{accessibilityChecked:c,accessibilityRole:t,link:{pathname:P,anchorless:!A.b},onPress:m,style:[Z.root,g&&Z.bottomBorder],testID:T},p.a.createElement(N.a,{style:Z.listContainer},p.a.createElement(N.a,{style:Z.leftColumn},C(p.a.createElement(N.a,{style:Z.thumbnailImage,testID:D},p.a.createElement(R.a,{cropCandidates:s.crop,dataSaverMode:n,icon:"lists",image:s.image,type:"fixed"}))),p.a.createElement(N.a,{style:Z.listAttribution},C(p.a.createElement(N.a,{style:Z.name},p.a.createElement(K.b,{weight:"bold"},d),"private"===u?p.a.createElement(K.b,{size:"body",style:Z.icon},p.a.createElement(J.a,{accessibilityLabel:V,style:Z.iconLock})):null)),y&&r?p.a.createElement(K.b,{color:"gray700",numberOfLines:2,size:"subtext2",style:Z.description},r):null,v?p.a.createElement(H.a,{author:v,withHoverCard:w,withLink:!0,withScreenName:!0}):null)),p.a.createElement(N.a,{style:Z.rightColumn},L)))},G=n("sYiQ"),$=n("LtQU"),ee=n("FITr"),te=n("ShJ/"),ne=O.a.c5d23126,re=O.a.j44ec610,ie=O.a.b01c0d14,ae=O.a.fa816a0a,oe=O.a.ac832ae4,ce=O.a.cdb33880,le=function(e){u()(n,e);var t=m()(n);function n(){var e;i()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),b()(l()(e),"_renderHoverLabel",(function(){var t=e.props,n=t.list;if(t.mode===G.a.Pinning)return null!=n&&n.pinning?re:ne})),b()(l()(e),"_renderIcon",(function(){var t=e.props,n=t.couldPinList,r=t.list,i=t.mode;return i===G.a.Reordering?p.a.createElement($.a,{accessibilityLabel:ae}):i===G.a.Pinning?null!=r&&r.pinning?p.a.createElement(ee.a,{accessibilityLabel:ce}):p.a.createElement(te.a,{accessibilityLabel:oe,style:n?null:se.disabledPin}):void 0})),b()(l()(e),"_handleClick",(function(t){var n=e.props,r=n.list,i=n.onClick;r&&(e._scribeAction("click"),i&&i(t,r))})),b()(l()(e),"_handleFollowClick",(function(){var t=e.props,n=t.createLocalApiErrorHandler,r=t.list,i=t.subscribe,a=t.unsubscribe;if(r){var o=r.following,c=r.id_str;Object(j.a)(n,o,c,i,a),e._scribeAction(o?"unfollow":"follow")}})),b()(l()(e),"_scribeAction",(function(t){var n=e.props.analytics;n.contextualScribeNamespace.element?n.scribeAction(t):n.scribe({component:"list",action:t})})),b()(l()(e),"_handlePinClick",(function(t){var n=e.props,r=n.addToast,i=n.analytics,a=n.couldPinList,o=n.list,c=n.pinOrUnpinList;if(t.preventDefault(),o)if(a||o.pinning){var l=o.pinning?"unpin_button":"pin_button";i.scribe({element:l,action:"click"}),c(o.id_str,{isPinned:!!o.pinning})}else r({text:ie}),i.scribe({element:"unpinnable_button",action:"click"})})),e}return o()(n,[{key:"shouldComponentUpdate",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.accessibilityRole,n=e.author,r=e.dataSaverMode,i=e.isMember,a=e.list,o=e.media,c=e.mode,l=e.withBottomBorder,s=e.withDescription,u=e.withSubscribe,d=e.withUserInfo,m=c===G.a.Pinning?this._handlePinClick:void 0,f=a||{},b=f.description,h=f.following,v=f.id_str,g=f.mode,y=f.name;return a?p.a.createElement(q,{accessibilityRole:t,dataSaverMode:r,description:b,hoverLabel:this._renderHoverLabel(),icon:this._renderIcon(),isFollowing:h||!1,isSelected:i,listId:v,media:o,mode:g,name:y,onClick:this._handleClick,onFollow:this._handleFollowClick,onIconClick:m,onUnfollow:this._handleFollowClick,user:d?n:void 0,withBottomBorder:l,withDescription:s,withSubscribe:u}):null}}]),n}(p.a.Component);b()(le,"defaultProps",{withUserInfo:!0});var se=X.a.create((function(e){return{disabledPin:{color:e.colors.gray300}}})),ue=x(le);t.a=ue},"1Ws7":function(e,t,n){"use strict";n.r(t);var r=n("yiKp"),i=n.n(r),a=n("ezF+"),o=n("VPAj"),c=n("97Jx"),l=n.n(c),s=n("m3Bd"),u=n.n(s),d=n("ERkP"),m=n.n(d),f=n("1AUC"),b=n("sYiQ"),h=["entry","feedbackItems","module","renderEntry","shouldDisplayPin"],p=function(e){var t=e.entry,n=(e.feedbackItems,e.module,e.renderEntry,e.shouldDisplayPin),r=u()(e,h),i=n?b.a.Pinning:void 0;return m.a.createElement(f.a,l()({isMember:t.content.isMember,listId:t.content.id,mode:i},r))},v=m.a.memo(p),g=n("Rp9C");t.default=function(e){return a.b({component:v,isFocusable:Object(o.a)(!0),getScribeDataItem:function(e){var t=e.content.id;return g.a.forList(t)}}).getHandler((function(){return i()({},e)}))}},"2My+":function(e,t,n){"use strict";var r=n("ERkP"),i=n.n(r),a=n("ZUOq"),o=(n("lTEL"),n("7x/C"),n("JtPf"),n("87if"),n("kYxP"),n("zb92")),c=Object(o.a)({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(269)]).then(n.bind(null,"ehWl"))}}),l=n("MWbm"),s=n("E4xM");function u(e){var t=e.basePath,n=e.children,r=e.listId,a=e.wrapperStyle;return i.a.createElement(s.a,{renderContent:function(){return i.a.createElement(l.a,{style:d.root},i.a.createElement(c,{basePath:t,listId:r,withEditButton:!1,withRoundedCorners:!0}))},wrapperStyle:a},n)}var d=n("rHpw").a.create((function(e){return{root:{minHeight:130,width:a.a.cardWidth.normal}}}));t.a=i.a.memo(u)},LtQU:function(e,t,n){"use strict";var r=n("yiKp"),i=n.n(r),a=n("ERkP"),o=n.n(a),c=n("Lsrn"),l=n("k/Ka"),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)("svg",i()(i()({},e),{},{accessibilityHidden:void 0===e.accessibilityLabel,style:[c.a.root,e.style],viewBox:"0 0 24 24"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z"})))};s.metadata={width:24,height:24},t.a=s},O4YN:function(e,t,n){"use strict";n.r(t);var r=n("ezF+"),i=n("VPAj"),a=(n("ho0z"),n("tVqn"),n("ERkP")),o=n.n(a),c=n("xZmF"),l=n("iPch"),s=n("kHBp"),u=n("P1r1"),d=n("rxPX"),m=function(e,t){return t.entry.content.id},f=function(){},b=function(){},h=Object(d.a)().propsFromState((function(){return{list:f,listId:m,dataSaverMode:u.j,media:b}})).adjustStateProps((function(e){var t=e.dataSaverMode,n=e.list,r=e.listId,i=e.media;return{name:null==n?void 0:n.name,isPrivate:"private"===(null==n?void 0:n.mode),listId:r,dataSaverMode:t,media:i}})).withAnalytics(),p=n("3XMw"),v=n.n(p),g=n("a5gf"),y=n("2My+"),w=n("MWbm"),E=n("htQn"),k=n("t62R"),P=n("rHpw"),C=v.a.j681933e,L=function(e){var t=e.analytics,n=e.dataSaverMode,r=e.isPrivate,i=e.listId,a=e.media,l=e.name,s="/i/lists/".concat(i),u=o.a.useCallback((function(){t.scribeAction("click")}),[t]);return o.a.createElement(y.a,{basePath:s,listId:i},o.a.createElement(E.a,{link:s,onPress:u,style:I.root},o.a.createElement(c.a,{cropCandidates:a.crop,dataSaverMode:n,icon:"lists",image:a.image}),o.a.createElement(w.a,{style:I.name},o.a.createElement(k.b,{align:"center",numberOfLines:1,size:"subtext2"},l?l.trim():null),r?o.a.createElement(g.a,{accessibilityLabel:C,style:I.iconLock}):null)))},I=P.a.create((function(e){return{root:{alignItems:"center",backgroundColor:e.colors.cellBackground,padding:e.spaces.space12},name:{alignSelf:"stretch",paddingTop:e.spaces.space4,flexDirection:"row",justifyContent:"center",width:e.spaces.space80},iconLock:{color:e.colors.text,marginHorizontal:e.spaces.space4}}})),S=h(o.a.memo(L)),x=n("Rp9C"),j=r.b({component:S,isFocusable:Object(i.a)(!0),getScribeDataItem:function(e){var t=e.content.id;return x.a.forList(t)},shouldDisplayBorder:Object(i.a)(!1)}).getHandler();t.default=j},Ox2E:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f}));n("LW0h"),n("7x/C");var r=n("1YZw"),i=n("k49u"),a=n("3XMw"),o=n.n(a),c=o.a.add55942,l=o.a.ib8f5f3c,s=o.a.e20fc756,u=o.a.hae1c934,d={customErrorHandler:function(){return Object(r.b)({text:c})},showToast:!0},m={customErrorHandler:function(){return Object(r.b)({text:l})},showToast:!0},f={customErrorHandler:function(e){var t=e.errors;if(t&&t.filter((function(e){return(null==e?void 0:e.code)===i.a.ListAdminRightsError})).length)return Object(r.b)({text:s});return Object(r.b)({text:u})},showToast:!0}},"ShJ/":function(){},"f5/l":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n("Ox2E"),i=function(e,t,n,i,a,o){t?(a(n).catch(e(r.c)),o&&o({element:"unsubscribed",action:"click"})):(i(n).catch(e(r.b)),o&&o({element:"subscribed",action:"click"}))},a=function(e,t){return e&&e.id_str===t||!1}},gNWl:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n("KEM+"),i=n.n(r),a=n("yiKp"),o=n.n(a),c=(n("yH/f"),n("7x/C"),n("JtPf"),n("kHBp")),l=n("Ssj5"),s=n("RqPI"),u="rweb.channelsTimelineBehavior",d="channelsTimelineBehavior",m=Object.freeze({});var f=function(e){return e[d]},b="rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",h=function(e){return{payload:e,type:b}},p=function(e){var t=e.listId,n=e.useRanked;return function(e,r,a){var l=a.userPersistence,s=r(),d=f(s),m=o()(o()({},d),{},i()({},t,{useRanked:n}));e(h(m));var b=c.a.select(s,t);return b&&b.following?l.get(u).then((function(e){return l.set(u,o()(o()({},e),{},i()({},t,{useRanked:n})))})):Promise.resolve()}};l.a.register(i()({},d,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return o()({},t.payload);default:return e}})),(function(){return function(e,t,n){var r=n.userPersistence;return Object(s.o)(t())?r.get(u).then((function(t){t&&e(h(t))})):Promise.resolve()}}))},iPch:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return v})),n.d(t,"j",(function(){return g})),n.d(t,"l",(function(){return y})),n.d(t,"m",(function(){return w})),n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return P})),n.d(t,"n",(function(){return C})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return I}));n("2G9S"),n("KqXw"),n("WNMA"),n("ho0z");var r=n("qKWj"),i=n("kGix"),a=n("tI3i"),o=n.n(a),c=n("kHBp"),l=n("gNWl"),s=n("G6rE"),u={url:"https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png",width:1125,height:375},d=function(e,t){var n=h(e,t),r=y(e,t),i=w(e,t);return n?"/i/lists/".concat(n):r&&i?"/".concat(r,"/lists/").concat(i):""},m=function(){},f=function(e,t){var n=t.match.params.listId;return o()(n,"listId should always be specified"),n},b=function(e,t){var n=p(e,t);return n&&n.id_str},h=function(e,t){return m(0,t)||b(e,t)},p=function(e,t){var n=m(0,t);return n?c.a.select(e,n):c.a.selectByKey(e,E(e,t))},v=function(e,t){var n=p(e,t);return n&&n.following},g=function(e,t){var n=p(e,t);return n&&n.name},y=function(e,t){var n=m(0,t);return t.match.params.screenName||void 0||n&&c.a.selectListAuthorScreenName(e,n)},w=function(e,t){var n=p(e,t);return t.match.params.slug||n&&n.slug},E=function(e,t){var n=t.match.params.slug,i=t.match.params.screenName;return n&&i?Object(r.a)(i,n):""},k=function(e,t){var n=h(e,t)||function(e,t){var n=w(e,t),i=y(e,t);return n&&i?Object(r.a)(i,n):""}(e,t);return c.a.selectFetchStatus(e,n)||i.a.NONE},P=function(){}