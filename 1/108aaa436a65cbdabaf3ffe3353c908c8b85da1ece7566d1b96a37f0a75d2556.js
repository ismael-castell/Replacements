"use strict";(self.webpackChunkug_react_es6=self.webpackChunkug_react_es6||[]).push([[5555],{67268:(e,t,o)=>{o.d(t,{u3:()=>r,jQ:()=>i,pT:()=>n,GA:()=>a,gk:()=>d,bw:()=>l,fd:()=>c});var s=o(66173);const r=(0,s.PH)(!1),i=(0,s.PH)(!1),n=(0,s.PH)(!1),a=(0,s.PH)(!1),d=(0,s.PH)(!1),l=(0,s.PH)(!1),c=(0,s.PH)(!1)},58849:(e,t,o)=>{o.d(t,{PK:()=>r,Bl:()=>i,qP:()=>n,tB:()=>a,c0:()=>l,Sv:()=>c,yK:()=>u,$y:()=>h});var s=o(66173);const r="system:notification:show",i="system:notification:hide",n="system:notification:followBottomPanel",a=(0,s.PH)(r);let d;const l=({content:e,state:t,hideTimeout:o=0,actions:s=[]})=>r=>{d=s,r(a({content:e,state:t,hideTimeout:o}))},c=()=>d,u=(0,s.PH)(i),h=(0,s.PH)(n)},45714:(e,t,o)=>{o.d(t,{Bv:()=>r,nz:()=>i,ES:()=>n,WI:()=>a,n5:()=>d,S_:()=>l,oE:()=>c,qN:()=>u,mN:()=>h,fh:()=>p,M2:()=>g,H4:()=>m,ZS:()=>v,Gr:()=>w});const s=e=>e.user,r=e=>s(e).access.pro,i=e=>s(e).access.hasProTrial,n=e=>s(e).access.isTrialActive,a=e=>s(e).access.trialDuration,d=e=>s(e).id,l=e=>s(e).access.proPaymentPeriod,c=e=>s(e).accessEdu.pro,u=e=>s(e).accessEdu.hasProTrial,h=e=>s(e).accessEdu.isTrialActive,p=e=>s(e).accessEdu.trialDuration,g=e=>s(e).access.accessUntil,m=e=>s(e).accessEdu.accessUntil,v=e=>(e=>g(e)||m(e))(e)||(e=>r(e)||c(e))(e),w=e=>s(e).tabTry},97434:(e,t,o)=>{o.d(t,{Z:()=>r});const s=()=>o.e(4819).then(o.bind(o,37896)),r={set:(e,t)=>s().then((({set:o})=>o(e,t))),get:e=>s().then((({get:t})=>t(e))),remove:e=>s().then((({remove:t})=>t(e)))}},35402:(e,t,o)=>{o.d(t,{Z:()=>i});var s=o(55581);const r=window.UGAPP.helpers?window.UGAPP.helpers.countryList:[],i={getValues:()=>Object.values(r),getKeys:()=>Object.keys(r),getKey:e=>(0,s.LF)(r)[e],getValue:e=>r[e]}},12702:(e,t,o)=>{o.d(t,{Z:()=>r});var s=o(80323);const r=({id:e=4,defaultName:t="d",time:o=0})=>{const r=e.toString().split("").reverse();return`${s.Z.server.static}/users/${r[0]}/${r[1]||0}/${r[2]||0}/${e}.gif?${t}=${t}${o?"&h="+o:""}`}},54029:(e,t,o)=>{o.d(t,{Z:()=>n});var s=o(92972),r=o(15646);function i(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var s=o.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}const n={getNormalizedData({data:e,schema:t,key:o=""}){const n=(0,r.Fv)(e,t),a=n.entities,d=a[o],l=void 0===d?{}:d,c=(0,s.Z)(a,[o].map(i));return{ids:n.result,byIds:l,...c}}}},55581:(e,t,o)=>{function s(e){const t={};for(let o in e)e.hasOwnProperty(o)&&(t[e[o]]=o);return t}o.d(t,{LF:()=>s})},36258:(e,t,o)=>{o.d(t,{Z:()=>a});var s=o(34005),r=o(80323);const i="tabs_history_v2",n=window.UGAPP.store.tab,a={update(e=this.currentTab){const t=this.cookieHistory;t.some((t=>t.id===e.id))||(this.cookieHistory=JSON.stringify([e,...t.slice(0,5)]))},get cookieHistory(){const e=s.Z.get(i);return e?JSON.parse(e):[]},set cookieHistory(e){s.Z.set(i,e,7)},get currentTab(){return{id:n.id,artist:n.artist_name,name:n.song_name,url:location.pathname,v:n.version,type:n.type,tabAccess:n.tab_access_type}},get history(){return this.cookieHistory.map((e=>({...e,ver:e.v-1,fullUrl:`//tabs.${r.Z.server.main}${e.url}`})))}}},97839:(e,t,o)=>{o.d(t,{Z:()=>u});var s=o(34005),r=o(99591),i=o(97434),n=o(36258),a=o(70816);const d="ug_react_recently_viewed",l="ugapp:tabViewedHistory",c=a.G6||a.j3||a.op||a.Uf||a.T,u={get history(){const e=s.Z.get(d);return e?JSON.parse(e):[]},set history(e){s.Z.set(d,JSON.stringify(e),365)},get searchHistory(){return r.Z.get(l)||[]},getAsyncSearchHistory({async:e}){return c?window.Promise.resolve(n.Z.cookieHistory):e?i.Z.get(l).then((e=>e||[])):window.Promise.resolve(this.searchHistory)},set searchHistory(e){r.Z.set(l,e)},pushSearchHistory(e){if(c)return void n.Z.update(e);const t=this.searchHistory.filter((t=>t.id!==e.id));this.searchHistory=[e,...t.splice(-6)]},pushFromStore(){const e=window.UGAPP.store.recentlyViewed;e&&e.object&&this.push(e.object)},push(e){const t=this.history.filter((t=>t!==e));this.history=[...t.splice(-20),e]}}},30205:(e,t,o)=>{o.d(t,{gb:()=>r,d7:()=>n,jK:()=>a,vg:()=>d,Zy:()=>l,fW:()=>c,cJ:()=>u,Vg:()=>h,ku:()=>p});var s=o(66173);const r=()=>Promise.all([o.e(4736),o.e(3449)]).then(o.bind(o,58221)),i=(0,s.oU)(r),n=i("showAuth"),a=i("hideAuth"),d=i("authSuccess"),l=i("updateUserPassword"),c=i("updateUserUsername"),u=i("updateUserEmail"),h=i("updateAuthSource"),p=i("setAuthSignUpTitle")},29139:(e,t,o)=>{o.d(t,{ZN:()=>r,fv:()=>i,Im:()=>n,$6:()=>a,qn:()=>d,rf:()=>l,zv:()=>c,Jm:()=>u,Sh:()=>h});const s=(0,o(66173).oU)((()=>Promise.all([o.e(4736),o.e(1423)]).then(o.bind(o,36098)))),r=s("follow"),i=s("unfollow"),n=s("loadProfileFollowers"),a=s("loadProfileFollowing"),d=s("loadFollowing"),l=s("blockUser"),c=s("unblockUser"),u=s("blockUsers"),h=s("addUsers")},26952:(e,t,o)=>{o.d(t,{o$:()=>r,PE:()=>i,cl:()=>n,Kz:()=>a,w_:()=>d,dF:()=>l});var s=o(66173);const r="page:hide",i="page:show",n="page:toggleNavigationDrawer",a="page:permanentBanner:close",d="page:permanentEduBanner:close",l=(0,s.PH)("page:permanentBanner:setContext")},8525:(e,t,o)=>{o.d(t,{VY:()=>s,HB:()=>r,u3:()=>i,v$:()=>n,fm:()=>a,H:()=>d,eV:()=>l,UJ:()=>c,tC:()=>u,iM:()=>h,Ig:()=>p,$T:()=>g,DC:()=>m,Br:()=>v,rb:()=>w,we:()=>f,gk:()=>$,E$:()=>b,pm:()=>P,D_:()=>y,dI:()=>S,St:()=>_,te:()=>Z,lW:()=>k,rE:()=>I,tm:()=>C,Jq:()=>U,Y0:()=>O,kR:()=>x,_N:()=>A,aB:()=>H,MQ:()=>B,uo:()=>T});const s="gears",r="profile:edit",i="profile:edit:info",n="user:blocked:settings",a="gear:preview",d="shot:delete",l="shot:report",c="user:blocked:notify",u="profile:followers",h="profile:following",p="tab:submit:success",g="shot:drag-n-drop",m="shot:feedback",v="playlist:rename",w="playlist:move",f="playlist:create",$="strumming:voteExtplain",b="tab:create-personal",P="tab:report:bad",y="tab:personal:share",S="tab:voteLayer",_="tab:rating:explain",Z="tab:tuner",k="tab:export",I="chat:create",C="recommendation:feedback",U="floatingActionsList:filter",O="floatingActionsList:sort",x="floatingActionsList:tags",A="restart-membership:marketing",H="complete-registration",B="edu:marketing:splash",T="tab:freeOfficialTab"},34055:(e,t,o)=>{o.d(t,{Z:()=>n});var s=o(54680),r=o.n(s),i=o(30205);const n=(e,t,o=(()=>r()),s)=>(...n)=>(a,d)=>new Promise(((l,c)=>d().user.id?(a(e(...n)),void l()):(t&&"function"==typeof t&&a(t()),(0,i.gb)().then((({authOnlyActions:t})=>{t.afterLogin=()=>(l(),e(...n)),t.afterNoLogin=()=>(c(),o&&"function"==typeof o?o(...n):()=>r())})),s&&a((0,i.Vg)(s)),void a((0,i.d7)()))))},67112:(e,t,o)=>{o.d(t,{JX:()=>l,Xj:()=>u,Su:()=>h,m_:()=>m,iC:()=>v});var s=o(92972),r=o(15646),i=o(54029),n=o(95465);if(/^(3938|7316)$/.test(o.j))var a=o(23565);const d=["user"],l=(e,t,o,s)=>{const r=o.toLowerCase(),i=0===Object.keys(e.byIds).length?{[r]:{videos:[]}}:e.byIds;return{...e,byIds:{...i,[r]:{...i[r],page:s,videos:(n=[...i[r].videos,...t.byIds[r].videos],n.filter(((e,t)=>n.indexOf(e)===t)))}},entities:{...e.entities,...t.entities}};var n},c=e=>{const t=new r.fK.Entity("images"),o=new r.fK.Entity("entities",{images:[t]},{idAttribute:"type"});return i.Z.getNormalizedData({data:e,schema:[o]})},u=(e,t)=>({title:t,name:t.toLowerCase(),count:e.length,videos:e}),h=e=>{const t=Object.keys(e),o={[a.JJ]:a.Re,[a.Rs]:a.ek,[a.Tl]:a.Lx,[a.rU]:a.Bv};return t.map((t=>u(e[t],o[t])))},p=e=>e.map((({link:e,size:t,width:o,height:s})=>({url:e,size:t,width:o,height:s}))),g=({artist_name:e,artist_id:t,avatar:o,comments_count:s,date:r,duration:i,likes:n,tab:a,tab_url:d,tab_id:l,url:u,files:h,name:g,images:m,image_id:v,hits_total:w,user_id:f,username:$,vimeo_id:b,status:P,access:y,is_original_song:S})=>{return{artistId:t,artist:e,likes:n,tab:{id:l,url:(null==a?void 0:a.tab_url)||d},songName:g,imageId:v,views:w,user:{id:f,username:$,avatar:o},images:c((_=m,_.map((({link:e,preset:t})=>({url:e,type:t}))))),files:p(h),commentsCount:s,date:r,url:u,id:+b,duration:i,status:P,access:y,isOriginalSong:!!S};var _},m=e=>{const t=g(e),o=t.user;return{shot:{...(0,s.Z)(t,d),user:o.id},user:o}},v=e=>(e=>{const t=new r.fK.Entity("users"),o=new r.fK.Entity("entities",{user:t},{idAttribute:"id"}),s=new r.fK.Entity("sections",{videos:[o]},{idAttribute:"name"});return i.Z.getNormalizedData({data:e,schema:[s],key:"sections"})})(e.map((({count:e,name:t,title:o,videos:s,total_count:r,artist_total_count:i})=>{const a=s.map((e=>g(e,(0,n.zf)(t))));return{count:e,name:t,title:o,totalCount:r,artistTotalCount:i,currentPage:1,activeItemIndex:0,videos:a}})))},70800:(e,t,o)=>{o.d(t,{a0:()=>r,ry:()=>i,pS:()=>n,Dx:()=>a,Ud:()=>d,Bl:()=>l,Rl:()=>c,rr:()=>u,yY:()=>h,pI:()=>p,sG:()=>g,x9:()=>m,ec:()=>v,Do:()=>w,tG:()=>f,fG:()=>$,jC:()=>b,dF:()=>P,qi:()=>y,DY:()=>S,Ax:()=>_,FF:()=>Z,$y:()=>k,xp:()=>I,pf:()=>C,w0:()=>U});var s=o(66173);const r="shot:open",i="shot:activeId:change",n="shot:comments:open",a="shot:comments:back",d="shot:like",l="shot:dislike",c="shot:user:follow",u="shot:user:unfollow",h="shot:viewed",p="shot:meta:get",g="shot:delete",m="shots:load",v="shot:close",w="shots:viewed:load",f="shot:setSingle",$="shot:setRestrictions",b="shot:clearRestrictions",P="shot:playerSetPaused",y="shot:playerSetMuted",S="shot:playerSetLoop",_="shots:setActiveFeedIndex",Z="shots:setActiveFeedItemIndex",k="shots:incrementActiveFeedPage",I="shots:setIsLoading",C=(0,s.PH)("shots:setCurrentTime"),U=(0,s.PH)("shots:incrementViewedIndex")},70553:(e,t,o)=>{o.r(t),o.d(t,{openComments:()=>O,backToShot:()=>A,clearShotRestrictions:()=>H,setShotRestrictions:()=>B,getUserBlockStatus:()=>T,changeActiveId:()=>L,setShotsIsLoading:()=>N,loadShots:()=>j,reportShot:()=>F,closeShot:()=>G,deleteShot:()=>R,openShot:()=>q,getShotMeta:()=>E,setShotViewed:()=>K,hitShot:()=>V,followUser:()=>D,unfollowUser:()=>M,likeShot:()=>J,dislikeShot:()=>z,shareShot:()=>W,loadViewedShots:()=>X,setSingleShot:()=>Q,setShotPlayerPause:()=>Y,setShotPlayerMute:()=>ee,setShotPlayerLoop:()=>te,setShotsActiveFeedIndex:()=>oe,setShotsActiveFeedItemIndex:()=>re,incrementShotsActiveFeedPage:()=>ie,incrementShotViewedVideoCount:()=>ne});var s=o(92972),r=o(66173),i=o(18354),n=o(87578),a=o(99591),d=o(39637),l=o(58849),c=o(7913),u=o(67268),h=o(23439),p=o(29139),g=o(70800),m=o(34055),v=o(72798),w=o(35051),f=o(68764),$=o(53318),b=o(8525),P=o(23565),y=o(67112),S=o(7714),_=o(70097),Z=o(81607),k=o(72528);const I=["users"],C=["users"],U=["users"],O=e=>t=>t((0,r.PH)(g.pS)({activeId:e})),x=(0,r.PH)(g.ec),A=(0,r.PH)(g.Dx),H=(0,r.PH)(g.jC),B=e=>t=>t((0,r.PH)(g.fG)({restrictions:e})),T=e=>t=>w.Z.isBlockedUser(e).then((({restrictions:e})=>{const o={isBlockedByCurrentUser:(null==e?void 0:e.blocked_by_me)||!1,isBlocked:(null==e?void 0:e.blocked_me)||!1};t(B(o)),(o.isBlockedByCurrentUser||o.isBlocked)&&t((0,u.u3)(b.UJ))})).catch(n.Z.error),L=e=>t=>{t((0,h.pQ)(d.tRk,{item:"shots slider"})),t((0,r.PH)(g.ry)({activeId:e}))},N=e=>(0,r.PH)(g.xp)(e),j=({type:e,page:t,tabId:o})=>(i,a)=>{const d=a().shots,l=e=>{const t=(0,y.iC)(e),o=t.users;return{data:(0,s.Z)(t,I),users:o}};if(e===P.MR){const o=(0,v.Tg)(a()),l=e=>{const t=(0,y.iC)(e),o=t.users;return{data:(0,s.Z)(t,C),users:o}};f.Z.loadOwned(t,o).then((o=>{const s=l(o),n=s.users,a=s.data;i((0,p.Sh)(n)),i((0,r.PH)(g.x9)(1<t?(0,y.JX)(d,a,e,t):a))})).catch(n.Z.error)}if((e===P.at||e===P.ek)&&(i(N(!0)),f.Z.loadTop(t).then((o=>{const s=l([(0,y.Xj)(o,e)]),n=s.users,a=s.data;i((0,p.Sh)(n)),i((0,r.PH)(g.x9)((0,y.JX)(d,a,e,t))),i(N(!1))})).catch(n.Z.error)),(e===P.A0||e===P.Lx)&&f.Z.loadNew(t).then((o=>{const s=l([(0,y.Xj)(o,e)]),n=s.users,a=s.data;i((0,p.Sh)(n)),i((0,r.PH)(g.x9)((0,y.JX)(d,a,e,t)))})).catch(n.Z.error),e===P.Tp&&f.Z.loadFeed().then((e=>{const t=l(e),o=t.users,s=t.data;i((0,p.Sh)(o)),i((0,r.PH)(g.x9)(s))})).catch(n.Z.error),e===P.IF){const a=e=>{const t=(0,y.iC)(e),o=t.users;return{data:(0,s.Z)(t,U),users:o}};i(N(!0)),f.Z.loadByTab(o,t).then((o=>{const s=a([o]),n=s.users,l=s.data;i((0,p.Sh)(n)),i((0,r.PH)(g.x9)(0===Object.keys(d.byIds).length?l:(0,y.JX)(d,l,e,t))),i(N(!1))})).catch(n.Z.error)}},F=(e,t,o)=>s=>{f.Z.reportShot(e,t,o).then((()=>s((0,l.c0)({content:"Success"})))).catch((()=>s((0,l.c0)({content:"Failed"}))))},G=()=>(e,t)=>{if("shots_intro"===(0,i.Z2)().source)return void(0,i.UO)(`${c.hB}/article/blog/ug-shots-intro`);return t().shots.isSharedShot?void(0,i.UO)(`${c.hB}/shots/explore`):void e(x())},R=e=>(t,o)=>{const s=o().shots.isSharedShot;f.Z.deleteShot(e).then((()=>{s?(0,i.UO)(`${c.hB}/shots/explore`):(t(G()),t((0,r.PH)(g.sG)({id:e})),t((0,l.c0)({content:"Success"})))})).catch((()=>(t((0,l.c0)({content:"Failed"})),n.Z.error)))},q=(e,t)=>(o,s)=>{var i;const n="0"===e||e?e:null===(i=(0,S.hS)(s()))||void 0===i?void 0:i.videos[0];o((0,h.pQ)(d.tRk,{item:t})),o((0,r.PH)(g.a0)({activeId:n}))},E=e=>(t,o)=>{f.Z.getMeta(e).then((s=>{t((0,_.q9)(s.meta)),t((0,r.PH)(g.pI)({activeId:e,isLiked:s.liked,isFollowed:s.followed})),t(B({isDeleteComment:(0,S.BB)(o(),e)}))})).catch(n.Z.error)},K=(e,t)=>(o,s)=>{s().content.profile?o((0,h.pQ)(d.Oni)):o((0,h.pQ)(d.hI0)),f.Z.setViewed(e).then((()=>{o((0,r.PH)(g.yY)({activeId:e,views:t+1}))})).catch(n.Z.error)},V=e=>()=>f.Z.hitShot(e).catch(n.Z.error),D=(0,m.Z)(((e,t)=>o=>{o((0,h.pQ)(d.qx$)),o((0,r.PH)(g.Rl)({activeId:t})),$.Z.follow(e).catch(n.Z.error)}),null,null,"Shots Follow"),M=(e,t)=>o=>{o((0,h.pQ)(d.OzD)),o((0,r.PH)(g.rr)({activeId:t})),$.Z.unfollow(e).catch(n.Z.error)},J=(0,m.Z)(((e,t)=>(o,s)=>{o((0,Z.Sv)(s())?(0,h.pQ)(d.Obm):(0,h.pQ)(d.Lao)),o((0,r.PH)(g.Ud)({activeId:e,likes:t+1})),f.Z.like(e).catch(n.Z.error)}),null,null,"Shots Like"),z=(e,t)=>o=>{o((0,r.PH)(g.Bl)({activeId:e,likes:t-1})),f.Z.dislike(e).catch(n.Z.error)},W=e=>(t,o)=>{const s=o(),r=(0,S.h)(s,e),a=(0,S.mM)(s,e);navigator.share({title:a?`${a} by ${r}`:"",url:(0,i.Gr)({url:window.location.href,params:{app_utm_source:"UltimateGuitar",app_utm_medium:"Shot"}})}).then((()=>{t((0,h.pQ)(d.H9w))})).catch(n.Z.warn)},X=()=>e=>{const t=a.Z.get("ugapp:viewedShots")||[];return e((0,r.PH)(g.Do)({viewed:t}))},Q=e=>t=>{const o=(0,y.m_)(e.object),s={[e.id]:o.shot},i={[o.user.id]:o.user};return t((0,p.Sh)(i)),t((0,r.PH)(g.tG)({id:e.id,shotEntity:s}))},Y=e=>(0,r.PH)(g.dF)(e),ee=e=>(0,r.PH)(g.qi)(e),te=e=>(0,r.PH)(g.DY)(e),oe=