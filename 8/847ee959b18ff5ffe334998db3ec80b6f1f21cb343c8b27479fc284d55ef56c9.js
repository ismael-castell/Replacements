(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{e5HP:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var n=r("VrFO"),o=r.n(n),c=r("Y9Ll"),i=r.n(c),a=r("5Yy7"),s=r.n(a),l=r("2VqO"),u=r.n(l),d=r("KEM+"),h=r.n(d),f=r("ERkP"),p=r.n(f),v=r("t62R"),y=r("3XMw"),b=r.n(y),m=r("rHpw"),S=r("MWbm"),w=r("yiKp"),k=r.n(w),C=r("Lsrn"),g=r("k/Ka"),I=function(){};I.metadata={width:24,height:24};var P=I,L=r("uFYP"),O=b.a.f1a1b791,E=b.a.if2bf8b4,R=b.a.f3624b5c,_=b.a.b4b3b113,M=b.a.be222050,N=b.a.hcbbe447,A=function(e){s()(r,e);var t=u()(r);function r(){return o()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.color,r=e.nativeID,n=e.style,o=e.withCircleIcon?P:L.a;return p.a.createElement(S.a,{style:[F.root,n]},p.a.createElement(o,{style:[F.icon,t&&F[t]]}),p.a.createElement(v.b,{color:t,nativeID:r,size:"subtext2"},this._getPromotedLabel()))}},{key:"_getPromotedLabel",value:function(){var e=this.props,t=e.contentAuthorId,r=e.label,n=e.promotedContent,o=n.adMetadataContainer,c=n.advertiser,i=n.advertiser_name,a=n.disclosure_type,s=t&&c&&t===c.id_str,l="string"==typeof a&&"political"===a.toLowerCase(),u="string"==typeof a&&"issue"===a.toLowerCase(),d=!(!o||"POLITICAL"!==o.disclaimerType)||l,h=!(!o||"ISSUE"!==o.disclaimerType)||u,f=(o||{}).removePromotedAttributionForPreroll;return r||(!i||s||f?d?R:h?M:E:d?_({fullName:i}):h?N({fullName:i}):O({fullName:i}))}}]),r}(p.a.Component);h()(A,"defaultProps",{color:"gray700",withCircleIcon:!1});var F=m.a.create((function(e){return{root:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.gray700,height:"1em",marginRight:e.spaces.space4,flexShrink:0},gray700:{color:e.colors.gray700},white:{color:e.colors.white}}}))},lX7a:function(e,t,r){"use strict";r.r(t);r("jQ3i"),r("x4t0");var n=r("ezF+"),o=r("VPAj"),c=function(e){return e?{disclosure_type:e.disclosureType,impression_id:e.impressionId}:void 0},i=r("Rp9C"),a=r("ERkP"),s=r.n(a),l=r("wtjx"),u=r("rxPX"),d=Object(u.a)().propsFromActions((function(e){var t=e.module;return{saveAsRecentSearch:l.a,applyReactionInstructions:t.applyReactionInstructions}})).withAnalytics(),h=r("cFuS"),f=r("pbku"),p=r("88ay"),v=function(e){var t=e.analytics,r=e.applyReactionInstructions,n=e.cellClickable,o=e.decoration,i=e.entry,a=e.onClick,l=e.saveAsRecentSearch,u=e.shouldScribeImpression,d=e.shouldScribeProfileClick,v=e.shouldStoreTypeaheadItem,y=e.withFollowsYou,b=e.withLink,m=i.content,S=m.id,w=m.promotedMetadata,k=m.socialContext,C=o||p.e,g=c(w),I=k&&k.generalContext||void 0,P=e.displayMode,L=s.a.useCallback((function(){r({entry:i,triggerName:f.a.ON_FOLLOW})}),[r,i]);return s.a.createElement(p.a,{cellClickable:n,decoration:C,displayMode:P,onClick:a,onFollowClick:L,promotedContent:g,promotedItemType:h.c.USER,saveAsRecentSearch:l,scribeData:t.contextualScribeData,scribeNamespace:t.contextualScribeNamespace,shouldScribeImpression:u,shouldScribeProfileClick:d,shouldStoreTypeaheadItem:v,socialContext:I,userId:S,withFollowsYou:y,withLink:b})},y=d(s.a.memo(v)),b=r("Re5t"),m=[p.e,p.f];t.default=function(e){var t=e.cellClickable,r=void 0===t||t,a=e.decoration,s=e.displayMode,l=void 0===s?b.a.UserCompact:s,u=e.onClick,d=e.shouldScribeProfileClick,h=void 0===d||d,f=e.shouldScribeImpression,p=void 0!==f&&f,v=e.shouldStoreTypeaheadItem,S=e.withLink,w=void 0===S||S;return n.b({component:y,defaultScribeNamespace:{element:"user"},getScribeDataItem:function(e){var t=e.content,r=t.id,n=t.promotedMetadata,o=e.cursor,a=e.itemMetadata,s=e.position,l=a.clientEventInfo,u=c(n);return i.a.getUserItem({id_str:r,promoted_content:u},void 0,s,o,l)},isFocusable:Object(o.a)(!0)}).getHandler((function(){return{cellClickable:r,decoration:a,displayMode:l,onClick:u,shouldScribeProfileClick:h,shouldScribeImpression:p,shouldStoreTypeaheadItem:v,withLink:w,withFollowsYou:!a||m.includes(a)}}))}},pbku:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("yH/f");var n=Object.freeze({ON_BLOCK_AUTHOR:"onBlockAuthor",ON_LINGER:"onLinger",ON_IS_RELEVANT:"onIsRelevant",ON_SHOW_MORE:"onShowMore",ON_LIKE:"onLike",ON_FOLLOW:"onFollow"})},uFYP:function(){}