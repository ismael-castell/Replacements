(window.nojMonomainwebpackJsonpproduction=window.nojMonomainwebpackJsonpproduction||[]).push([[127],{"3Lo6":function(e,t,n){"use strict";n.r(t);var i=n("D57K"),r=(n("UGdZ"),n("5MeN"),n("R4V0"),n("ERkP")),o=n.n(r),a=n("7nmT"),s=n.n(a),d=n("K/af"),l=n("lKcY"),u=n("34li"),c=n("YvpN"),h=n("5Nzd"),_=n("u3dr"),f=n("2wT7"),p=n("BQ33"),v=n.n(p),m=n("9EWH"),y=n("LiEJ"),g=n("0cIN"),b=n("gQst"),E=n("HnWI"),N=n("AouM"),C=n("4HYP"),T=n("Jg5f"),S=n("mhnT"),w=n("RtDN"),O=n("U3QC"),x=n("wUZp"),D=n("B07F"),P={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"videoInfo"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uuid"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UUID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videosVideoInfo"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uuid"},value:{kind:"Variable",name:{kind:"Name",value:"uuid"}}},{kind:"Argument",name:{kind:"Name",value:"fetchType"},value:{kind:"EnumValue",value:"PLAY_AUTH"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playAuth"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videoInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videoId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"videoSize"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"articleChargeType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"canSee"},arguments:[],directives:[]}]}}]}}],loc:{source:{body:"query videoInfo($uuid: UUID!) {\n  videosVideoInfo(uuid: $uuid, fetchType: PLAY_AUTH) {\n    playAuth\n    status\n    videoInfo {\n      videoId\n      coverUrl\n    }\n    videoSize {\n      width\n      height\n    }\n    articleChargeType\n    canSee\n  }\n}\n"}},operationName:"videoInfo",defName:"videosVideoInfo"},M=n("L6nh"),j=24e5,A=[{duration:5e3,nextLevelTime:12e4},{duration:15e3,nextLevelTime:6e5},{duration:18e4,nextLevelTime:j}],L=function(){function e(e){this.level=0,this.intervals=A,this.level=e||this.level,this.startTime=v()()}return e.prototype.next=function(e){var t,n,i=v()(),r=this.intervals[this.level],o=r.nextLevelTime,a=null===(t=this.intervals[this.level+1])||void 0===t?void 0:t.duration;return i.diff(this.startTime)>o&&r.duration!==a&&(this.level++,e(null===(n=this.intervals[this.level])||void 0===n?void 0:n.duration)),this.intervals[this.level]},e}(),k=function(e){function t(t){var n=e.call(this)||this;return n.client=t,n.defaultState={isUpdating:!0,videoId:null,playAuth:null,coverUrl:null,status:null,chargeType:null,videoSize:null,canSee:!1},n.period$=new y.a(5e3),n}var n,r,o,a,s,d,l,c,f;return Object(i.__extends)(t,e),t.prototype.updateVideoInfo=function(e){var t=this,n=new L;return e.pipe(Object(N.a)((function(e){return t.period$.pipe(Object(N.a)((function(i){return Object(g.a)(0,i).pipe(Object(C.b)((function(){return t.fetchVideoInfo(e)}))).pipe(Object(T.a)((function(e){return t.getActions()._updateVideoInfo(e)})),Object(x.a)("\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25"),Object(S.a)(Object(b.a)(Object(g.a)(j),t.dispose$,t.getVideoSuccessed$)),Object(w.a)(t.getActions()._resetVideoStatus()),Object(O.a)((function(){}