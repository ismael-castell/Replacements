(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{"0Bjv":function(e,t,n){"use strict";var o=n("yiKp"),i=n.n(o),a=n("ERkP"),r=n.n(a),c=n("Lsrn"),l=n("k/Ka"),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)("svg",i()(i()({},e),{},{accessibilityHidden:void 0===e.accessibilityLabel,style:[c.a.root,e.style],viewBox:"0 0 24 24"}),r.a.createElement("g",null,r.a.createElement("path",{d:"M17.931 2.508c0 .42-.34.75-.75.75h-8.39l1.38 2.08-.56 5.78-.47.16c-1.5.49-3.1 2.07-3.37 3.31-.07.35-.39.59-.73.59-.05 0-.11 0-.16-.01-.4-.09-.66-.49-.58-.89.39-1.81 2.24-3.52 3.91-4.25l.42-4.3-1.35-2.02c-.26-.38-.29-.87-.07-1.29.24-.41.66-.66 1.11-.66h8.86c.41 0 .75.34.75.75zm3.09 12.76c-.14.17-.46.46-1.05.46h-3.86l-2.64 6.1c-.12.28-.39.45-.69.45s-.57-.17-.69-.45l-1.96-4.53c-.16-.38.01-.82.39-.98.38-.17.82.01.99.39l1.27 2.93 1.69-3.91h-1.61c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.81c-.41-1.06-1.64-2.26-2.91-2.82-.09-.04-.16-.09-.22-.16-.22-.21-.3-.54-.17-.83.17-.38.61-.55.99-.39 1.59.7 3.5 2.43 3.89 4.25.06.25.03.66-.23.99zm.839-12.259L3.2 21.659c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.29-.29-.29-.76 0-1.06L20.8 1.939c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07z"})))};s.metadata={width:24,height:24},t.a=s},"86D9":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("ddV6"),i=n.n(o),a=(n("5BYb"),n("7x/C"),n("0zG9"),n("ERkP")),r=n.n(a);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.a.useState(!1),o=i()(n,2),a=o[0],c=o[1],l="IntersectionObserver"in window,s=t.root,d=void 0===s?null:s,u=t.rootMargin,m=void 0===u?"0%":u,v=t.threshold,p=void 0===v?0:v,h=r.a.useCallback((function(e){c(e.some((function(e){return e.isIntersecting})))}),[]),b=l?new IntersectionObserver(h,{root:d,rootMargin:m,threshold:p}):void 0;return r.a.useEffect((function(){return requestAnimationFrame((function(){var t=null==e?void 0:e.current;b&&t&&b.observe(t)})),function(){b&&b.disconnect()}}),[e,d,m,JSON.stringify(p)]),a}},CwxE:function(e,t,n){"use strict";var o=n("yiKp"),i=n.n(o),a=n("ERkP"),r=n.n(a),c=n("Lsrn"),l=n("k/Ka"),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)("svg",i()(i()({},e),{},{accessibilityHidden:void 0===e.accessibilityLabel,style:[c.a.root,e.style],viewBox:"0 0 24 24"}),r.a.createElement("g",null,r.a.createElement("path",{d:"M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"})))};s.metadata={width:24,height:24},t.a=s},MzK7:function(e,t,n){"use strict";n.r(t),n.d(t,"CONVERSATION_CONTROLS_ANALYTICS",(function(){return Wn})),n.d(t,"TweetCurationActionMenu",(function(){return Vn}));var o=n("RhWx"),i=n.n(o),a=n("yiKp"),r=n.n(a),c=n("ddV6"),l=n.n(c),s=n("VrFO"),d=n.n(s),u=n("Y9Ll"),m=n.n(u),v=n("1Pcy"),p=n.n(v),h=n("5Yy7"),b=n.n(h),f=n("2VqO"),_=n.n(f),w=n("KEM+"),y=n.n(w),C=(n("yH/f"),n("2G9S"),n("IAdD"),n("jwue"),n("7x/C"),n("LW0h"),n("jQ3i"),n("x4t0"),n("ERkP")),T=n.n(C),g=n("d4kb"),E=function(e){var t=e.scribeAction,n=e.user;return Object(g.a)(n,(function(){t({element:"add_to_list"})}))},k=n("3XMw"),x=n.n(k),A=n("SNyS"),I=x.a.fb4ee11c,O=function(e){var t=e.promotedContent;if(t&&t.impression_id){var n=t.impression_id;return{behavioralEventContext:{viewType:"ad_info"},text:I,Icon:A.a,link:{pathname:"/i/about-this-ad/".concat(n)}}}},R=n("xrkw"),S=x.a.e6901eec,L=function(e){var t=e.scribeAction,n=e.tweet;return{text:S,onClick:function(){t({element:"analytics"})},link:"/".concat(n.user.screen_name,"/status/").concat(n.id_str,"/analytics"),Icon:R.a}},D=n("2qZs"),H=x.a.e2dc4394,M=function(e,t){var n=t.scribeAction,o=t.tweetId;return{text:e.isTrue("responsive_web_birdwatch_hcomp_user")?"Write a note [research]":H,onClick:function(){n({element:"contribute_to_birdwatch"})},link:{pathname:"/i/birdwatch/contribute/".concat(o)},Icon:D.a}},j=n("EbOo"),z=n("xZGM"),U=n("dFWS"),F=x.a.bae0cbc0,B=x.a.f8393bda,N=function(e){var t=e.onChangeConversationControls,n=!!e.tweet.exclusivity_info;return{disabled:n,onClick:n?void 0:t,subText:n?B:void 0,text:F,Icon:U.a}},P={defaultToast:{text:x.a.ae0c5fbe},showToast:!0},W=(n("lTEL"),n("JtPf"),n("87if"),n("kYxP"),n("j7tW")),V=n("1YZw"),K=n("0pUJ"),q=n("XOJV"),G=n("G6rE"),Y=n("rxPX"),J=n("ymux"),Z=n("0KEI"),X=n("eSoz"),Q=n("RqPI"),$=function(e,t){return Object(z.E)(e,z.p)},ee=function(e,t){return Object(z.E)(e,z.n)},te=function(e){return Object(z.E)(e,z.d)},ne=function(e,t){return Object(X.h)(e,t.tweet)},oe=function(e,t){return Object(X.g)(e,t.tweet)},ie=function(e){return function(t,n,o){var i=o.featureSwitches;return Promise.all([t(q.a.delete(e)),t(Object(J.a)({focalTweetId:e,featureSwitches:i}).deleteTimeline())])}},ae=Object(Y.a)().propsFromState((function(){return{userCountry:Q.A,userLanguage:Q.q,shouldShowMuteEducationTip:$,shouldShowHideReplyTip:ee,shouldShowConversationControlsTip:te,disableRemoveFromCommunity:ne,community:oe}})).propsFromActions((function(){return{addFlag:z.A,addToast:V.b,block:G.e.block,changeConversationControls:q.a.changeConversationControls,createLocalApiErrorHandler:Object(Z.createLocalApiErrorHandlerWithContextFactory)("TWEET_CURATION_ACTION_SHEET_CONTAINER"),deleteTweet:ie,dismissUserFromConversation:J.b,follow:G.e.follow,hideReply:q.a.hideReply,unmentionUserFromConversation:q.a.unmentionUserFromConversation,mute:K.a,muteTweet:q.a.mute,pin:W.a,removeConversationControls:q.a.removeConversationControls,removeTag:q.a.removeTag,unblock:G.e.unblock,unfollow:G.e.unfollow,unhideReply:q.a.unhideReply,unmute:G.e.unmute,unmuteTweet:q.a.unmute,unpin:W.c}})).withAnalytics(),re=n("H7Rt"),ce=n("v6aA"),le=function(e){return Object(z.E)(e,z.d)},se=Object(Y.a)().propsFromState((function(){return{shouldShowConversationControlsTip:le}})).propsFromActions((function(){return{addFlag:z.A}})),de=n("86D9"),ue=n("MWbm"),me=n("4zmP"),ve=n("rHpw"),pe=x.a.bae0cbc0,he=ve.a.create((function(e){return{inlineCallout:{position:"absolute",right:e.spaces.space32,marginTop:e.spaces.space2,zIndex:1},textStyle:{whiteSpace:"nowrap"}}})),be=se((function(e){var t=e.addFlag,n=e.shouldShowConversationControlsTip,o=T.a.useRef(),i=Object(de.a)(o),a=T.a.useRef(!1),r=T.a.useContext(ce.a).featureSwitches.isTrue("conversation_controls_change_tooltip_enabled"),c=n&&r;return T.a.useEffect((function(){i&&(a.current=!0,setTimeout((function(){t(z.d)}),5e3))}),[i,t]),T.a.useEffect((function(){return function(){a.current&&t(z.d)}}),[]),T.a.createElement(ue.a,{ref:o,style:he.inlineCallout},i&&c?T.a.createElement(me.a,{text:pe,textStyle:he.textStyle,withRightArrow:!0}):null)})),fe=n("yZqq"),_e=n("hiGS"),we=x.a.d96cf7ce,ye=x.a.dd211108,Ce=x.a.c55d72d0,Te=x.a.a1aa840e,ge=x.a.c189f2de,Ee=function(e){var t=e.addToast,n=e.behavioralEventEntityToken,o=e.createLocalApiErrorHandler,i=e.deleteTweet,a=e.onDeleteTweet,r=e.scribeAction,c=e.tweet;return{confirmation:{label:we,headline:ye,text:Ce,confirmButtonType:"destructiveFilled"},isEmphasized:!0,text:we,onClick:function(){i(c.id_str).then((function(){t({text:Te,behavioralEventEntityToken:n})}),o({defaultToast:{text:ge},showToast:!0})),r({element:"delete"}),a&&a(c.id_str)},Icon:_e.a}},ke=n("CwxE"),xe=x.a.e6c84638,Ae=function(e){var t=e.permalink,n=e.scribeAction;return{behavioralEventContext:{viewType:"embed"},text:xe,onClick:function(){var e="https://publish.twitter.com/?url=https://twitter.com".concat(t);window.open(e,"_blank"),n({element:"embed_tweet"})},Icon:ke.a}},Ie=n("mWGE"),Oe=(n("5BYb"),Object.freeze({all:x.a.baffe39a,community:x.a.af293dc2,by_invitation:x.a.cf7f7e3a})),Re=x.a.bf994ab2,Se=function(e,t){var n,o,i=Oe[t];t===re.a.by_invitation&&(!(null!==(n=e.entities)&&void 0!==n&&null!==(o=n.user_mentions)&&void 0!==o&&o.some((function(t){return t.id_str!==e.user.id_str})))&&(i=Re));return T.a.createElement(x.a.I18NFormatMessage,{$i18n:"f8ea2809",selection:i})},Le=n("feu+"),De=n("eb3s"),He=n("lUZE"),Me=n("5cUs"),je=x.a.ge5067bc,ze=x.a.ea626ab4,Ue=x.a.fc716886,Fe=x.a.f2a2a06e,Be=x.a.f82c0bb0,Ne="".concat(Fe,"\n\n").concat(Be),Pe=x.a.b2615c6d,We=x.a.i62a03aa,Ve=x.a.cfd2f35e,Ke=x.a.a6450e84,qe=x.a.hb279a11,Ge=function(e){var t=e.addFlag,n=e.addToast,o=e.behavioralEventEntityToken,i=e.createLocalApiErrorHandler,a=e.hideReply,r=e.onBlock,c=e.onTweetDismiss,l=e.scribeAction,s=e.shouldShowHideReplyTip,d=e.tweet,u=function(){l({element:"moderated_replies_prompt",action:"impression"})};return{confirmation:s?{render:function(e,t){return function(e){var t=e.onConfirm,n=e.onCancel,o=e.onHideReplyImpression,i=void 0===o?function(){}:o;return T.a.createElement(Le.a,{actionLabel:je,graphic:He.a,headline:Ue,onAction:t,onClose:n,onImpression:i,onTertiaryAction:n,subtext:Ne,supportUrl:"https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply",tertiaryActionLabel:Ve})}({onConfirm:e,onCancel:t,onHideReplyImpression:u})}}:{render:function(e,t){var n=d.user.screen_name;return T.a.createElement(De.a,{cancelButtonLabel:We,confirmButtonLabel:Ke,confirmButtonType:"destructiveFilled",headline:Pe({screenName:n}),onCancel:e,onConfirm:function(){r(),e()},text:qe({screenName:n})})}},text:je,onClick:function(){t(z.n),a(d.id_str,{conversation_id:d.conversation_id_str}).then((function(e){c&&c(),n({text:ze,behavioralEventEntityToken:o})}),i({showToast:!0})),l({element:"moderate_reply"})},Icon:Me.a}},Ye=n("n5fo"),Je=n("fz3c"),Ze=x.a.f20b040e,Xe=n("jQy5"),Qe=n("NTtI"),$e=n("qz6Z"),et=n("w02m"),tt=x.a.e2d6c17e,nt=x.a.cd1942f4,ot=x.a.bbd8bed6,it=x.a.c13af432,at=x.a.gf5e9ea6,rt=x.a.df744bda,ct=x.a.j9552760,lt=x.a.cfd2f35e,st=x.a.d751694c,dt=function(e){var t=e.addFlag,n=e.addToast,o=e.behavioralEventEntityToken,i=e.createLocalApiErrorHandler,a=e.muteTweet,r=e.scribeAction,c=e.shouldShowMuteEducationTip,l=e.tweet,s=e.unmuteTweet,d=function(){t(z.p)},u=function(){s(l.id_str).then((function(){n({text:it,behavioralEventEntityToken:o})}),(function(e){i({showToast:!0})(e),r({element:"unmute_conversation_error"})})),r({element:"unmute_conversation"})},m={behavioralEventContext:{viewType:"mute_conversation",viewState:{type:"toggleable",toggledTo:!0}},text:tt,onClick:function(){a(l.id_str).then((function(){n({action:{label:at,onAction:u,behavioralEventViewType:"unmute_conversation"},behavioralEventEntityToken:o,text:ot})}),(function(e){i({showToast:!0})(e),r({element:"mute_conversation_error"})})),r({element:"mute_conversation"})},confirmation:c?{render:function(e,t){return T.a.createElement(Le.a,{actionLabel:rt,graphic:Qe.a,graphicDisplayMode:"illustration",headline:ct,onAction:e,onClose:t,onImpression:d,onTertiaryAction:t,subtext:st,supportUrl:"https://support.twitter.com/articles/20175032",tertiaryActionLabel:lt})}}:void 0,Icon:$e.a},v={behavioralEventContext:{viewType:"mute_conversation",viewState:{type:"toggleable",toggledTo:!1}},text:nt,onClick:u,Icon:et.a};return l.conversation_muted?v:m},ut=n("ShJ/"),mt="block",vt="pin",pt="unpin",ht="report",bt=x.a.ha35a1d2,ft=x.a.afac3b9e,_t=x.a.e2d44cea,wt=x.a.c5d23126,yt=x.a.aaef1b48,Ct=function(e){var t=e.addToast,n=e.behavioralEventEntityToken,o=e.createLocalApiErrorHandler,i=e.pin,a=e.scribeAction,r=e.tweetId;return{confirmation:{text:_t,headline:ft,label:wt},testID:vt,text:bt,onClick:function(){i(r).then((function(){t({text:yt,behavioralEventEntityToken:n})}),o({showToast:!0})),a({element:"pin"})},Icon:ut.a}},Tt=n("zb92"),gt=x.a.d1c1e2c2,Et=Object(Tt.a)({loader:function(){return n.e(255).then(n.bind(null,"34Fi"))}}),kt=x.a.f5cdcc2c,xt=function(e){var t=e.onTweetDismiss;return{text:kt,onClick:t,Icon:A.a}},At=(n("KqXw"),n("WNMA"),n("24HD")),It=n("Bwid"),Ot=x.a.jcba15d2,Rt=function(e){var t=e.history,n=e.removeAutoblockAction,o=e.user,i=Object(At.i)(o.screen_name);return{text:Ot,onClick:function(){n(i);t.location.pathname.match(/actioned_tweets\/\d+/)&&t.goBack()},confirmation:i,Icon:It.a}},St=n("5oT/"),Lt=x.a.b99364a5,Dt=n("Rp9C"),Ht=n("4bW+"),Mt=n("u0B7"),jt=n("qiIT"),zt=n("Lsrn"),Ut=n("k/Ka"),Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Ut.a)("svg",r()(r()({},e),{},{accessibilityHidden:void 0===e.accessibilityLabel,style:[zt.a.root,e.style],viewBox:"0 0 24 24"}),T.a.createElement("g",null,T.a.createElement("path",{d:"M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z"}),T.a.createElement("path",{d:"M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z"})))};Ft.metadata={width:24,height:24};var Bt=Ft,Nt=x.a.i31dfa4c,Pt=x.a.j8e56ba2,Wt=function(e){var t=e.addToast,n=e.behavioralEventEntityToken,o=e.createLocalApiErrorHandler,i=e.scribeAction,a=e.tweet,r=e.unhideReply;return{text:Nt,onClick:function(){r(a.id_str,{conversation_id:a.conversation_id_str}).then((function(e){t({ariaOnly:!0,text:Pt,behavioralEventEntityToken:n})}),o({showToast:!0})),i({element:"unmoderate_reply"})},Icon:Bt}},Vt=x.a.ic030338,Kt=x.a.j1b8c868,qt=x.a.eb2d59f4,Gt=x.a.j44ec610,Yt=x.a.i0086d6c,Jt=function(e){var t=e.addToast,n=e.behavioralEventEntityToken,o=e.createLocalApiErrorHandler,i=e.scribeAction,a=e.tweetId,r=e.unpin;return{confirmation:{text:qt,headline:Kt,label:Gt},testID:pt,text:Vt,onClick:function(){r(a).then((function(){t({text:Yt,behavioralEventEntityToken:n})}),o({showToast:!0})),i({element:"unpin"})},Icon:ut.a}},Zt=n("0Bjv"),Xt=x.a.b5bb710e,Qt=Object(Tt.a)({loader:function(){return n.e(255).then(n.bind(null,"KT6t"))}}),$t=x.a.f9478972,en=function(e){var t=e.permalink,n=e.scribeAction;return{text:$t,link:"".concat(t,"/hidden"),onClick:function(){n({element:"view_moderated_replies"})},Icon:Me.a}},tn=n("TnY3"),nn=n("mqpi"),on=n("4hQ9"),an=n("Ig1G"),rn=n("ACNv"),cn=(n("Blm6"),n("7xRU"),n("z84I"),n("TW8A")),ln=n("Q0VY"),sn=n("FiRh"),dn=x.a.ea41975c,un=function(e,t,n){var o,i,a=null===(o=e.edit_control)||void 0===o||!o.editable_until_msecs||new Date>new Date(parseInt(e.edit_control.editable_until_msecs,10)),r=!(null===(i=e.edit_control)||void 0===i||!i.is_edit_eligible),c="Twitter Web App"===e.source_name;return n&&t&&!a&&!e.isStaleEdit&&r&&c},mn=function(e){e.scribeAction;var t,n,o=e.tweet,i=null!=o.full_text?ln.a.tweetTextParts(o.full_text,o.display_text_range,o.entities).map((function(e){switch(e.entityType){case"cashtag":case"emoji":case"hashtag":case"mention":case"text":return"".concat(e.prefix||"").concat(Object(sn.e)(e.text));case"media":case"url":return e.expandedUrl;default:return""}})).join(""):"";return{onClick:function(){},text:dn,Icon:cn.a,link:{pathname:"/compose/tweet",state:{previousTweetId:o.id_str,defaultText:i,quotedStatusId:null===(t=o.quoted_status)||void 0===t?void 0:t.id_str,convoCardData:o.card?{cardUrl:o.card.url}:null,hideUnsentTweetsButton:!0,editableUntil:null===(n=o.edit_control)||void 0===n?void 0:n.editable_until_msecs}}}},vn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Ut.a)("svg",r()(r()({},e),{},{accessibilityHidden:void 0===e.accessibilityLabel,style:[zt.a.root,e.style],viewBox:"0 0 24 24"}),T.a.createElement("g",null,T.a.createElement("path",{d:"M10.478 22.065c-.124 0-.248-.03-.36-.092-.24-.132-.39-.384-.39-.658v-4.562c0-.414.336-.75.75-.75s.75.336.75.75v3.187c1.912-1.238 5.64-3.684 6.772-4.644 1.57-1.33 2.51-3.265 2.512-5.175 0-1.075-.266-2.13-.767-3.05-.197-.364-.063-.82.3-1.018.367-.196.82-.062 1.02.3.617 1.138.945 2.437.947 3.76v.02c-.005 2.344-1.142 4.7-3.043 6.31-1.616 1.37-7.825 5.34-8.09 5.508-.12.078-.262.117-.402.117zM2.75 20.5c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.72.72c.293-.294.768-.294 1.06 0s.294.767 0 1.06l-18.5 18.5c-.146.147-.338.22-.53.22zm1.326-5.993c-.243 0-.48-.117-.625-.335-.777-1.17-1.188-2.57-1.188-4.056 0-4.374 3.427-7.8 7.8-7.8h4.34c.415 0 .75.335.75.75s-.335.75-.75.75h-4.34c-3.532 0-6.3 2.767-6.3 6.3 0 1.205.315 2.29.938 3.226.23.345.137.81-.21 1.04-.127.084-.27.125-.414.125z"})))};vn.metadata={width:24,height:24};var pn=vn,hn=Object(Tt.a)({loader:function(){return n.e(275).then(n.bind(null,"cM6C"))}}),bn=x.a.bb16cc76,fn=x.a.de21174c,_n=function(e,t){return T.a.createElement(hn,{onCancel:t,onConfirm:e})},wn=function(e,t){var n,o,i;if(!e)return!1;var a=null===(n=t.entities)||void 0===n||null===(o=n.user_mentions)||void 0===o?void 0:o.some((function(t){return t.id_str===e})),r=t.in_reply_to_user_id_str===e,c=a||r,l=null===(i=t.unmentioned_user_ids)||void 0===i?void 0:i.includes(e);return c&&!l},yn=function(e){var t=e.addToast,n=e.behavioralEventEntityToken,o=e.createLocalApiErrorHandler,i=e.scribeAction,a=e.tweet,r=e.unmentionUserFromConversation;return{behavioralEventContext:{viewType:"leave_conversation"},confirmation:{render:_n},text:bn,onClick:function(){r(a.id_str).then((function(){t({behavioralEventEntityToken:n,text:fn})}),o({showToast:!0})),i({element:"leave_conversation"})},Icon:pn}},Cn=(n("ho0z"),n("0zG9"),n("zIWA")),Tn=n("6s7X"),gn=x.a.f1824804,En=x.a.ff9bd692,kn=x.a.e3fd237e,xn=x.a.d1e21610,An=function(e){var t=e.analytics,n=e.featureSwitches,o=e.history,i=e.isAppealTweetWarning,a=void 0!==i&&i,r=e.promotedContent,c=(e.reporterCountry,e.reporterLanguage,e.scribeAction),l=e.tweet,s={element:"report_tweet"},d="/i/report/status",u=Je.a.Tweet,m=Cn.a,v=r?kn:En;a&&(s={element:"appeal_tweet_warning"},d="/i/report/appeal_tweet_warning",u=Je.a.AppealTweetWarning,m=Tn.a,v=gn);return{behavioralEventContext:{viewType:"report"},Icon:m,onClick:function(){var e,i,a,m,v,p=t.contextualScribeData,h=((null==l||null===(e=l.extended_entities)||void 0===e||null===(i=e.media)||void 0===i?void 0:i.length)||0)>0,b=p.items&&p.items[0]&&(null===(a=p.items[0].conversation_details)||void 0===a?void 0:a.conversation_section);if(c(s),!(l.community_id_str||"745291183405076480:broadcast"===(null===(m=l.card)||void 0===m?void 0:m.name)||"3691233323:periscope_broadcast"===(null===(v=l.card)||void 0===v?void 0:v.name)||r)&&Object(Je.g)(n,u)){var f=Object(Je.d)({clientReferer:window.location.pathname,conversationSection:b,isMedia:h,isPromoted:void 0!==r,reportType:u,reportedTweet:l,reportedUser:l.user.id_str,scribeNamespace:t.contextualScribeNamespace});o.push({pathname:"/i/safety/report_story_start",state:{input:{requested_variant:JSON.stringify(f)}}})}else o.push({pathname:"".concat(d,"/").concat(l.id_str),state:{clientReferer:window.location.pathname,conversationSection:b,isMedia:h,promotedContent:r,scribeNamespace:t.contextualScribeNamespace}})},testID:ht,text:v}},In=function(e){var t=e.promotedContent,n=e.scribeAction;return{behavioralEventContext:{viewType:"report"},Icon:Cn.a,link:"https://help.twitter.com/forms",onClick:function(){n({element:"report_tweet"})},testID:ht,text:t?kn:En}},On=function(e){return{Icon:Cn.a,link:"https://help.twitter.com/forms/netzwerkdurchsetzungsgesetz?tweet_id=".concat(e),text:xn}},Rn=n("Z6aJ"),Sn=n("IG7M"),Ln=n("0wXR"),Dn=n("1wVr"),Hn=x.a.e68b09b4,Mn=x.a.g9425e30,jn=x.a.jfc76958,zn=function(e,t){var n,o,i,a=(null===(n=t.extended_entities)||void 0===n?void 0:n.media)&&t.extended_entities.media[0]&&(null===(o=t.extended_entities.media[0].features)||void 0===o||null===(i=o.all)||void 0===i?void 0:i.tags);return!!a&&Object(Dn.a)(a,(function(t){return t.user_id===e}))},Un=function(e){var t=e.createLocalApiErrorHandler,n=e.loggedInUserId,o=e.removeTag,i=e.tweet;return{behavioralEventContext:{viewType:"remove_tag"},confirmation:{label:Hn,headline:Mn},text:jn,onClick:function(){var e,a,r=null===(e=i.extended_entities)||void 0===e||null===(a=e.media)||void 0===a?void 0:a.map((function(e){return e.id_str})).join(",");o(i.id_str,{status_id:i.id_str,media_ids:r,tagged_user_ids:n}).catch(t({showToast:!0}))},Icon:Ln.a}},Fn=x.a.e133be4e,Bn=x.a.a9fd20be,Nn=["hideTweet","removeCommunityMember","delete","appealTweetWarning","pinOrUnpin","promotedTweetDismiss","adInfo","removeTag","feedbackOptions","followOrUnfollow","addOrRemoveFromList","muteOrUnmute","muteOrUnmuteConversation","leaveConversation","changeConversationControls","blockOrUnblock","removeAutoblock","hideReply","unhideReply","embed","report","reportNetzDG","analytics","edit","viewHiddenReplies","birdwatch","pinCommunityTweet","unpinCommunityTweet"],Pn=function(e){return"DE"===e.toUpperCase()},Wn=Object.freeze({all:"change_conversation_control_to_everyone",community:"change_conversation_control_to_community",by_invitation:"change_conversation_control_to_mentioned",followers:"change_conversation_control_to_followers",community_members:"community_members",community_hidden_tweet:"community_hidden_tweet",super_followers_exclusive:"super_followers_exclusive",community_tweet_member_removed:"community_tweet_member_removed",trusted_friends_tweet:"trusted_friends_tweet"}),Vn=function(e){b()(n,e);var t=_()(n);function n(){var e;d()(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),y()(p()(e),"state",{showModerationBlockConfirmation:!1}),y()(p()(e),"_shouldDisable",nn.b.bind(null,e.context.featureSwitches)),y()(p()(e),"_birdwatchAction",M.bind(null,e.context.featureSwitches)),y()(p()(e),"_shouldRenderSectionDividers",e.context.featureSwitches.isTrue("responsive_web_menu_section_divider_enabled")),y()(p()(e),"_editTweetCompositionEnabled",(e.context.userClaims.isTrueAndEnabled("subscriptions_feature_labs_1004")||e.context.featureSwitches.isTrue("responsive_web_edit_tweet_enabled"))&&e.context.featureSwitches.isTrue("responsive_web_edit_tweet_composition_enabled")),y()(p()(e),"_authorModeratedReplies",e.context.featureSwitches.isTrue("author_moderated_replies_urt_container_enabled")),y()(p()(e),"_birdwatchNoteWritingEnabled",e.context.featureSwitches.isTrue("responsive_web_birdwatch_note_writing_enabled")),y()(p()(e),"_convoControlsEnabled",e.context.featureSwitches.isTrue("conversation_controls_change_enabled")),y()(p()(e),"_shouldHandleBlockTrigger",e.context.featureSwitches.isTrue("responsive_web_drew_timeline_block_enabled")),y()(p()(e),"_onMenuClick",(function(){var t=e.props,n=t.addFlag,o=t.onMenuClick,i=t.shouldShowConversationControlsTip,a=t.withChangeConversationControlsTooltip;i&&a&&n(z.d),o&&o()})),y()(p()(e),"_handleOnChangeConversationControls",(function(t){var n,o=e.props,i=o.addToast,a=o.analytics,r=o.behavioralEventEntityToken,c=o.changeConversationControls,l=o.createLocalApiErrorHandler,s=o.removeConversationControls,d=o.tweet,u=Se(d,t);t===re.a.all?s&&s(d.id_str).then((function(){i({text:u,behavioralEventEntityToken:r}),a.scribe({element:Wn.all,action:"click",data:{items:[Dt.a.getChangeConversationControlsItem(d,t)]}})}),l(P)):c&&c(d.id_str,{policy:t,screenName:null===(n=d.user)||void 0===n?void 0:n.screen_name}).then((function(){i({text:u,behavioralEventEntityToken:r}),a.scribe({element:Wn[t],action:"click",data:{items:[Dt.a.getChangeConversationControlsItem(d,t)]}})}),l(P))})),y()(p()(e),"_renderCurationActionMenu",(function(t){return function(n){var o=e._getActionItemsAndDividerIndices(t),i=l()(o,2),a=i[0],r=i[1];return T.a.createElement(rn.default,{actionItems:a,dividerIndices:e._shouldRenderSectionDividers?r:void 0,onClose:n})}})),y()(p()(e),"_getMuteOrUnmuteAction",(function(){var t=e.props,n=t.addToast,o=t.behavioralEventEntityToken,i=t.createLocalApiErrorHandler,a=t.dismissUserFromConversation,c=t.mute,l=t.promotedContent,s=t.tweet,d=t.unmute,u=s.user,m={addToast:n,behavioralEventEntityToken:o,createLocalApiErrorHandler:i,scribeAction:e._scribeAction};return Object(Xe.a)(r()(r()({},m),{},{mute:c,unmute:d,user:u,dismissUserFromConversation:a,promotedContent:l}))})),y()(p()(e),"_getActionItemsAndDividerIndices",(function(t){var n=e.props,o=n.deleteTweet,a=n.follow,c=n.hideReply,l=n.muteTweet,s=n.pin,d=n.removeTag,u=n.unmentionUserFromConversation,m=n.unmuteTweet,v=n.unpin,p=e.props,h=p.addFlag,b=p.addToast,f=p.analytics,_=p.behavioralEventEntityToken,w=p.createLocalApiErrorHandler,y=p.feedbackItems,C=p.history,T=p.isPinned,g=p.onDeleteTweet,k=p.onTweetDismiss,x=p.promotedContent,A=p.shouldShowHideReplyTip,I=p.shouldShowMuteEducationTip,R=p.tweet,S=p.userCountry,D=p.userLanguage,H=p.withChangeConversationControls,M=p.withHideReply,j=p.withMuteConversation,z=p.withUnhideReply,U=p.withViewHiddenReplies,F=e.context,B=F.featureSwitches,P=F.loggedInUserId,W=R.user,V=[],K=Rn.a.isPromoted(x),q={},G=[],Y=e._scribeAction,J={addToast:b,behavioralEventEntityToken:_,createLocalApiErrorHandler:w,scribeAction:Y},Z=W.id_str===P;if(Object.assign(q,e._getCommunityActions()),K&&(q.adInfo=O({promotedContent:x})),Z&&!e._shouldDisable(R,nn.a.Analytics)&&(q.analytics=L({tweet:R,scribeAction:Y})),W.protected||e._shouldDisable(R,nn.a.Embed)||(q.embed=Ae({permalink:R.permalink,scribeAction:Y})),un(R,e._editTweetCompositionEnabled,Z)&&!Object(nn.b)(B,R,nn.a.Edit)&&(q.edit=mn({scribeAction:Y,tweet:R})),U&&R.conversation_id_str===R.id_str&&!e._shouldDisable(R,nn.a.ViewHiddenReplies)&&(q.viewHiddenReplies=en({permalink:R.permalink,scribeAction:Y})),zn(P,R)&&(q.removeTag=Un({createLocalApiErrorHandler:w,loggedInUserId:P,removeTag:d,tweet:R})),wn(P,R)&&B.isTrue("dont_mention_me_enabled")&&(q.leaveConversation=yn(r()(r()({},J),{},{unmentionUserFromConversation:u,tweet:R}))),P)if(W.blocking||e._shouldDisable(R,nn.a.ListsAddRemove,void 0,Z)||(q.addOrRemoveFromList=E({user:W,scribeAction:Y})),e._birdwatchNoteWritingEnabled&&(q.birdwatch=e._birdwatchAction({scribeAction:Y,tweetId:R.id_str})),Z)T?q.pinOrUnpin=Jt(r()(r()({},J),{},{tweetId:R.id_str,unpin:v})):e._shouldDisable(R,nn.a.PinToProfile)||(q.pinOrUnpin=Ct(r()(r()({},J),{},{pin:s,tweetId:R.id_str}))),e._shouldIncludeTweetAppealOption()&&(q.appealTweetWarning=An({analytics:f,history:C,isAppealTweetWarning:!0,promotedContent:x,scribeAction:Y,tweet:R,featureSwitches:B,reporterCountry:S,reporterLanguage:D})),j&&!e._shouldDisable(R,nn.a.MuteConversation)&&(q.muteOrUnmuteConversation=dt(r()(r()({},J),{},{addFlag:h,muteTweet:l,shouldShowMuteEducationTip:I,tweet:R,unmuteTweet:m}))),H&&e._convoControlsEnabled&&!e._shouldDisable(R,nn.a.ConversationControls)&&(q.changeConversationControls=N({tweet:R,onChangeConversationControls:t})),e._shouldDisable(R,nn.a.Delete)||(q.delete=Ee(r()(r()({},J),{},{deleteTweet:o,onDeleteTweet:g,tweet:R})));else{k&&K&&(q.promotedTweetDismiss=xt({onTweetDismiss:k})),W.blocking||e._shouldDisable(R,nn.a.FollowAuthor)||(q.followOrUnfollow=W.following?Object(jt.a)(r()(r()({},J),{},{unfollow:e.props.unfollow,promotedContent:x,user:W})):Object(Ie.a)(r()(r()({},J),{},{follow:a,promotedContent:x,user:W})),q.muteOrUnmute=e._getMuteOrUnmuteAction()),j&&(q.muteOrUnmuteConversation=dt(r()(r()({},J),{},{addFlag:h,muteTweet:l,shouldShowMuteEducationTip:I,tweet:R,unmuteTweet:m}))),M&&!e._authorModeratedReplies&&(q.hideReply=Ge(r()(r()({},J),{},{addFlag:h,hideReply:c,onBlock:e._handleBlock,onTweetDismiss:k,shouldShowHideReplyTip:A,tweet:R}))),z&&(q.unhideReply=Wt(r()(r()({},J),{},{tweet:R,unhideReply:e.props.unhideReply})));var X={user:W,source:At.k.TWEET_CARET,testID:mt,blockAction:e._handleBlock,unblockAction:e._handleUnblock};if(q.blockOrUnblock=Object(At.g)(X),W.smart_blocking){var Q={history:C,user:W,removeAutoblockAction:e._handleUnblock};q.removeAutoblock=Rt(Q)}}var $=P&&!Z;return $?q.report=An({analytics:f,history:C,promotedContent:x,scribeAction:Y,tweet:R,featureSwitches:B,reporterCountry:S,reporterLanguage:D}):!P&&S&&Pn(S)&&(q.report=In({promotedContent:x,scribeAction:Y}),q.reportNetzDG=On(R.id_str)),Nn.forEach((function(e){if("feedbackOptions"!==e||R.isStaleEdit){if(q[e]){$&&("embed"===e||"report"===e&&!q.embed)&&G.push(V.length-1),V.push(q[e])}}else{var t=y?y.filter((function(e){return!e.excludeFromActionMenu})):[];V.push.apply(V,i()(t)),$&&V.length&&G.push(V.length-1)}})),[V,G]})),y()(p()(e),"_handleBlock",(function(){var t=e.props,n=t.addToast,o=t.behavioralEventEntityToken,i=t.block,a=t.createLocalApiErrorHandler,r=t.dismissUserFromConversation,c=t.handleBlockTrigger,l=t.promotedContent,s=t.tweet;i(s.user.id_str,{promotedContent:l}).then((function(){r({userId:s.user.id_str,feedbackKeys:["UnfollowEntity"]}),n({action:{label:Fn,onAction:e._handleUnblock,behavioralEventViewType:"unblock"},text:Bn,behavioralEventEntityToken:o}),c&&e._shouldHandleBlockTrigger&&c()}),a(j.a)),e._scribeAction({element:"block"})})),y()(p()(e),"_handleUnblock",(function(){var t=e.props,n=t.createLocalApiErrorHandler,o=t.promotedContent,i=t.tweet;(0,t.unblock)(i.user.id_str,{promotedContent:o}).catch(n(Mt.a)),e._scribeAction({element:"unblock"})})),y()(p()(e),"_scribeAction",(function(t){var n=t.action,o=t.additionalData,i=t.element,a=e.props,c=a.analytics,l=a.promotedContent,s=a.tweet,d=c.contextualScribeData,u=null!=d&&d.items?d:r()(r()({},d||{}),{},{items:[Dt.a.getTweetItem(s,l)]});return o&&(u=r()(r()({},u),o)),c.scribe({element:i,action:n||"click",data:u})})),e}return m()(n,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.isDisabled,i=n.tweet,a=n.withChangeConversationControlsTooltip,r=(null===(e=i.conversation_control)||void 0===e?void 0:e.policy)||re.a.all;return T.a.createElement(ue.a,{style:Kn.overflowMenu},a?T.a.createElement(be,null):null,T.a.createElement(fe.a,{controlled:!0,midConversationTweet:i,onChange:this._handleOnChangeConversationControls,value:r},(function(e){var n=e.openPopover;return T.a.createElement(Sn.a,{isDisabled:o,onClick:t._onMenuClick,renderActionMenu:t._renderCurationActionMenu(n),testID:Ht.a.caret})})))}},{key:"_getCommunityActions",value:function(){var e={},t=this.props.tweet,n=t.community_id_str,o=t.id_str,i=this.context,a=i.featureSwitches,c=i.loggedInUserId;if(!n||!c)return e;var l=this.props,s=l.analytics.contextualScribeNamespace,d=l.community,u=l.disableRemoveFromCommunity,m=l.withCommunityModerationAuthority,v=t.community_relationship,p=t.user,h=a.isTrue("c9s_highlight_tweet_enabled"),b=a.isTrue("c9s_moderation_enabled"),f=a.isTrue("c9s_remove_member_enabled"),_=!u&&b&&m;if(p.id_str!==c&&_&&(this._shouldDisable(t,nn.a.HideCommunityTweet)||(e.hideTweet=function(e,t){return{text:Ze,Icon:Ye.a,link:{pathname:"/i/report/".concat(Je.a.HideCommunityTweet,"/").concat(e),state:{scribeNamespace:t}}}}(o,r()(r()({},s),{},{element:"hide_tweet"}))),f&&!this._shouldDisable(t,nn.a.RemoveCommunityMember)&&(e.removeCommunityMember=function(e,t,n){return{text:Lt({screenName:e.screen_name}),Icon:St.a,link:{pathname:"/i/report/".concat(Je.a.RemoveCommunityMember,"/").concat(e.id_str,"?community_id=").concat(t),state:{scribeNamespace:n}}}}(p,n,r()(r()({},s),{},{element:"remove_community_member"})))),h){if(an.a.includes(null==v?void 0:v.actions.pin_action_result.__typename)&&!this._shouldDisable(t,nn.a.PinCommunityTweet)){var w,y,C="CommunityTweetPinActionReplace"===(null==d||null===(w=d.actions)||void 0===w||null===(y=w.pin_action_result)||void 0===y?void 0:y.__typename);e.pinCommunityTweet=function(e,t,n,o){return{text:gt,Icon:ut.a,onClick:function(){},confirmation:{render:function(o,i){return T.a.createElement(Et,{communityId:t,isReplacing:n,onCancel:i,onConfirm:o,tweetId:e})}}}}(o,n,C,r()(r()({},s),{},{element:"pin_community_tweet"}))}an.b.includes(null==v?void 0:v.actions.unpin_action_result.__typename)&&!this._shouldDisable(t,nn.a.UnpinCommunityTweet)&&(e.unpinCommunityTweet=function(e,t,n){return{text:Xt,Icon:Zt.a,onClick:function(){},confirmation:{render:function(n,o){return T.a.createElement(Qt,{communityId:t,onCancel:o,onConfirm:n,tweetId:e})}}}}(o,n,r()(r()({},s),{},{element:"unpin_community_tweet"})))}return e}},{key:"_shouldIncludeTweetAppealOption",value:function(){var e=this.props,t=e.forwardPivotDisplayType,n=e.isNsfwUser,o=e.tweet,i=e.userCountry,a=e.userLanguage,r=this.context,c=r.featureSwitches,l=r.loggedInUserId;return Object(on.b)({loggedInUserId:l,featureSwitches:c,forwardPivotDisplayType:t,tweet:o,userCountry:i,userLanguage:a})||Object(on.a)({loggedInUserId:l,featureSwitches:c,isNsfwUser:n,tweet:o,userCountry:i,userLanguage:a})}}]),n}(T.a.Component);y()(Vn,"defaultProps",{withRemoveFromBookmarks:!1}),y()(Vn,"contextType",ce.a);t.default=Object(tn.a)(ae(Vn));var Kn=ve.a.create((function(e){return{overflowMenu:{display:"flex",flexDirection:"row",alignItems:"center"}}}))},NTtI:function(e,t,n){"use strict";var o=n("yiKp"),i=n.n(o),a=n("ERkP"),r=n.n(a),c=n("Lsrn"),l=n("k/Ka"),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)("svg",i()(i()({},e),{},{accessibilityHidden:void 0===e.accessibilityLabel,style:[c.a.root,e.style],viewBox:"0 0 200 200"}),r.a.createElement("g",null,r.a.createElement("circle",{cx:"100",cy:"100",fill:"#97E3FF",r:"100"}),r.a.createElement("path",{d:"M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z",fill:"#005FD1"}),r.a.createElement("path",{d:"M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z",fill:"#1DA1F2"}),r.a.createElement("ellipse",{cx:"123.283",cy:"100.225",fill:"#97E3FF",rx:"6.567",ry:"45.075"}),r.a.createElement("path",{d:"M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z",fill:"#71C9F8"}),r.a.createElement("path",{d:"M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267",fill:"#005FD1"}),r.a.createElement("path",{d:"M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z",fill:"#1DA1F2"})))};s.metadata={width:200,height:200},t.a=s},"ShJ/":function(){},yZqq:function(e,t,n){"use strict";var o=n("97Jx"),i=n.n(o),a=n("m3Bd"),r=n.n(a),c=n("ddV6"),l=n.n(c),s=n("ERkP"),d=n.n(s),u=(n("5BYb"),n("7x/C"),n("uFXj"),n("H7Rt")),m=n("3XMw"),v=n.n(m),p=n("MWbm"),h=n("t62R"),b=n("CKsB"),f=n("/yvb"),_=n("rHpw"),w=n("Zg3A"),y=n("yiKp"),C=n.n(y),T=n("Lsrn"),g=n("k/Ka"),E=function(){}