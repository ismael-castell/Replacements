(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{"2ARt":function(e,t,i){},"39fM":function(e,t){},"9BQm":function(){},gBVj:function(){},r2RH:function(e,t,i){"use strict";i.r(t);var r,l=i("mwIZ"),a=i.n(l),n=i("E+oP"),s=i.n(n),o=i("YKMj"),c=i("NGjJ"),v=i("v8uZ"),m=i("ZZ7T"),d=i("ERJl"),u=i("m+AH"),p=i("HOYG"),_=i.n(p),h=i("grO+"),y=i("n9T4"),f=i("pRu2"),g=i("zQm3"),b=i("39fM"),A=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),w=function(e,t,i,r){var l,a=arguments.length,n=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(n=(a<3?l(n):a>3?l(t,i,n):l(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},z=function(){return i.e(123).then(i.bind(null,"KwBJ"))},O=function(){return Promise.all([i.e(0),i.e(1),i.e(6),i.e(7),i.e(4),i.e(5),i.e(3),i.e(2),i.e(11),i.e(34),i.e(206)]).then(i.bind(null,"A9PJ"))},x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lazyLoadedWatcher=null,t}var i;return A(t,e),Object.defineProperty(t.prototype,"leftColumnArticlesProps",{get:function(){return this.contents.slice(0,this.haveNativeAd?7:8).map((function(e){return Object(f.g)(e)}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rightColumnArticlesProps",{get:function(){return this.haveNativeAd?this.contents.slice(7).map((function(e){return Object(f.g)(e)})):this.contents.slice(8).map((function(e){return Object(f.g)(e)}))},enumerable:!0,configurable:!0}),t.prototype.onLazyLoaded=function(e,t){!1===t&&!0===e&&this.lazyLoadedWatcher&&this.lazyLoadedWatcher()},t.prototype.mounted=function(){this.lazyLoadedWatcher=this.$watch("loaded",this.onLazyLoaded)},t.prototype.isAdShow=function(e){return 4===e},t.prototype.isArticleLevelFive=function(e){return 0===e||5===e},t.prototype.isShowArticleType=function(e){return!e.isLiveArticle&&!s()(e.articleType)},t.prototype.getImageUrl=function(e){var t=a()(e,"size_540x360.url");return t?Object(y.i)(t,269):h.hb},w([Object(o.c)({required:!0}),C("design:type",Array)],t.prototype,"contents",void 0),w([Object(o.c)({default:!1}),C("design:type",Boolean)],t.prototype,"loaded",void 0),w([Object(o.c)({default:!1}),C("design:type",Boolean)],t.prototype,"haveNativeAd",void 0),w([Object(o.c)({default:function(){}}),C("design:type","function"==typeof(i=void 0!==b.CustomParameters&&b.CustomParameters)?i:Object)],t.prototype,"queryString",void 0),t=w([Object(o.a)({components:{Lazyload:m.a,RouterLinkCustom:d.a,datetime:v.a,"article-level-three":c.h,"article-level-five":c.i,"small-type-icon":u.a,"svg-icon-video":_.a,"body-parser":O,LiveFlag:z},mixins:[g.a]})],t)}(o.d),S=(i("tzD5"),i("KHd+")),H=Object(S.a)(x,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"topstories-container"},[i("div",{staticClass:"topstories-container__left-column-container left-column-container"},[e._m(0),e._v(" "),i("div",{staticClass:"left-column-container__items-container items-container"},[e.isTabletUpUI?[e._l(e.leftColumnArticlesProps,(function(t){return i("div",{key:t.entityId,staticClass:"items-container__item-cell item-cell",class:{"item-cell--tablet":!e.isDesktopUI,"item-cell--desktop":e.isDesktopUI}},[i("router-link-custom",{staticClass:"item-cell__link link",attrs:{to:t.urlAlias,id:t.entityUuid,type:t.type,queryString:e.queryString,applicationId:t.applicationId}},[i("div",{staticClass:"link__img-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.getImageUrl(t.image),expression:"getImageUrl(content.image)"}],staticClass:"link__img img",attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAAEElEQVR42mN8+p8BCBghFAAiEQPLD3901QAAAABJRU5ErkJggg==",alt:t.headline}}),e._v(" "),i("div",{staticClass:"img__layer layer"},[i("div",{staticClass:"layer__icon"},[t.isVideo?i("svg-icon-video",{staticClass:"icon__svg icon__svg--video",attrs:{width:"47",height:"47"}}):e._e(),e._v(" "),!t.isVideo&&t.iconType?i("small-type-icon",{staticClass:"icon__svg icon__svg--article",attrs:{type:t.iconType,size:"large"}}):e._e()],1),e._v(" "),i("div",{staticClass:"layer__main layer-main"},[t.isVideo&&t.videoDuration?i("div",{staticClass:"img__video-length video-length"},[e._v(e._s(t.videoDuration))]):e._e()])])]),e._v(" "),t.isLiveArticle&&t.isLive?i("div",{staticClass:"item-cell__live live"},[i("LiveFlag")],1):e._e(),e._v(" "),i("div",{staticClass:"link__headline headline"},[e.isShowArticleType(t)?i("span",[i("span",{staticClass:"headline__article-type article-type",class:{"headline__article-type article-type--opinion":t.isOpinionArticle}},[e._v(e._s(t.articleType)+" | ")])]):e._e(),e._v("\n                    "+e._s(t.headline)+"\n                  ")]),e._v(" "),e._l(t.summary,(function(e,t){return i("div",{key:t,staticClass:"article__summary summary"},[i("body-parser",{key:t,attrs:{entityId:e.entityId,body:e,index:t,type:"article-level-five__summary"}})],1)}))],2),e._v(" "),i("datetime",{staticClass:"item-cell__datetime datetime",attrs:{date:t.updatedDate,theme:"grey",urlAlias:t.urlAlias,entityId:t.entityId,entityUuid:t.entityUuid,commentRouteType:"Article",commentCount:t.commentCount}})],1)})),e._v(" "),i("div",{staticClass:"items-container__item-cell item-cell advertisement-native-desktop",class:{"item-cell--tablet":!e.isDesktopUI,"item-cell--desktop":e.isDesktopUI}},[e.isTabletUpUI?e._t("advertisement-native-desktop"):e._e()],2)]:e._e(),e._v(" "),e.isMobileUIOnly?e._l(e.leftColumnArticlesProps,(function(t,r){return i("div",{key:t.entityUuid,staticClass:"items-container__item-cell item-cell--mobile"},[e.isArticleLevelFive(r)?i("article-level-five",e._b({staticClass:"item-cell__article-level article-level--five",attrs:{imageStyleSizeName:"size_1200x800",progressiveImageStyleName:"size_120x80",imageWidth:"1200",imageHeight:"800",queryString:e.queryString}},"article-level-five",t,!1)):i("article-level-three",e._b({staticClass:"item-cell__article-level article-level--three",class:["article-level--item-"]+(r+1),attrs:{showTopic:!1,showSummary:!1,thumb:"small",imageStyleSizeName:"size_118x118",queryString:e.queryString}},"article-level-three",t,!1)),e._v(" "),e.isAdShow(r)?i("div",{staticClass:"item-cell__advertisement advertisement--mobile"},[e.isMobileUIOnly?e._t("advertisement-mobile"):e._e()],2):e._e(),e._v(" "),e.isAdShow(r)?i("div",{staticClass:"items-container__item-cell item-cell--mobile advertisement-native-mobile"},[e.isMobileUIOnly?e._t("advertisement-native-mobile"):e._e()],2):e._e()],1)})):e._e()],2)]),e._v(" "),i("div",{staticClass:"topstories-container__right-column-container right-column-container"},[i("div",{staticClass:"right-column-container__advertisement-wrapper advertisement-wrapper"},[e.isTabletUpUI?e._t("advertisement-tablet-up"):e._e()],2),e._v(" "),e._l(e.rightColumnArticlesProps,(function(t,r){return i("div",{key:t.entityId,staticClass:"right-column-container__item-cell-wrapper item-cell-wrapper"},[i("article-level-three",e._b({staticClass:"item-cell-wrapper__article-level article-level-three",class:["article-level--item-"+(r+1),{"article-level-three__isLive":t.isLiveArticle&&t.isLive}],attrs:{showTopic:!1,showSummary:!1,thumb:"small",queryString:e.queryString,imageStyleSizeName:"size_118x118"}},"article-level-three",t,!1))],1)})),e._v(" "),e._t("subscription")],2)])}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left-column-container__header-wrapper header-wrapper"},[i("h2",{staticClass:"header-wrapper__title title"},[e._v("\n        MORE TOP STORIES\n      ")])])}],!1,null,"50ea8573",null);t.default=H.exports},tzD5:function(e,t,i){"use strict";i("2ARt")},x6L3:function(module,exports){module.exports={render:function(){}