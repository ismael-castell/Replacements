(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{"3Rb8":function(e,t,n){"use strict";n.r(t);var r=n("yiKp"),a=n.n(r),o=n("ezF+"),i=n("VPAj"),c=n("ERkP"),s=n.n(c),l=(n("yH/f"),Object.freeze({Classic:"Classic",ContextEmphasis:"ContextEmphasis"}),Object.freeze({Classic:"Classic",Footnote:"Footnote",Button:"Button"})),u=n("caTy"),d=n("ywYn"),m=n("Irs7"),p=n("/yvb"),b=n("rC8y"),f=function(e){var t=e.entry,n=(e.feedbackItems,e.isInSidebar),r=(e.module,Object(m.b)());s.a.useEffect((function(){r.scribe({element:"footer",action:"impression"})}),[]);var a=s.a.useCallback((function(){return r.scribe({element:"footer",action:"click"})}),[r]),o=t.content,i=o.displayType,c=o.landingUrl,f=o.text,h=o.url,y=c||h&&{urlType:d.a.DeepLink,url:h},v=y&&Object(u.b)(y);switch(i){case l.Button:return s.a.createElement(p.a,{children:f,link:v,onPress:a,style:w.containerStyle,type:"brandOutlined"});case l.Classic:return s.a.createElement(b.a,{link:v,onPress:a,text:f,withDarkerInteractiveBackground:n});default:return null}},w=n("rHpw").a.create((function(e){return{containerStyle:{width:"90%",marginVertical:e.spaces.space12,marginHorizontal:"auto"}}})),h=s.a.memo(f),y=Object(i.a)(!1),v={viewType:"module_footer"},g={element:"footer"};t.default=function(e){return o.b({shouldDisplayBorder:e.isInSidebar?y:void 0,component:h,defaultScribeNamespace:g,isFocusable:Object(i.a)(!0),getBehavioralEventContextOverride:function(){return v}}).getHandler((function(){return a()({},e)}))}},rC8y:function(){}