(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{289:function(e,r,t){"use strict";var o=t(285);r.a=function(data){var e=!1,r=Array.isArray(data),t=!r&&!!data,c=!!r&&o.RichText.asText(data);return(t||c)&&(e=!0),e}},459:function(e,r,t){var content=t(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("5facd5b7",content,!0,{sourceMap:!1})},588:function(e,r,t){"use strict";t(459)},589:function(e,r,t){var o=t(19)(!1);o.push([e.i,":root{--color-black:#000;--color-white:#fff;--color-red:#f44b34;--color-light-gray:silver;--color-text-gray:#606060;--color-background-gray:#f8f8f8;--color-separator-gray:#d5d5d5}.careers__header{max-width:700px;width:100%;margin:0 auto;padding:4rem 1rem 2rem}@media(min-width:65rem){.careers__header{padding:7rem 1rem 2.5rem}}.careers__header-heading{margin-top:0;font-weight:700;font-size:2rem;line-height:1.1;margin-bottom:1rem}@media(min-width:65rem){.careers__header-heading{font-size:2.8125rem;margin-bottom:.5rem}}.careers__header-copy{font-size:1.1875rem;line-height:1.5;margin-bottom:0;margin-top:1rem}.careers__header-copy>a{margin-bottom:.25rem;display:inline-block}.careers__header-copy+p{margin-top:1rem}.careers__board-select{background:#f8f8f8;background:var(--color-background-gray)}.careers__board-select-container{width:100%;padding:1rem 1rem 0;margin:0 auto;display:grid;max-width:700px;grid-template-columns:1fr;font-size:1.375rem}@media(min-width:40rem){.careers__board-select-container{padding:0 1rem;align-items:center;display:flex;grid-gap:3rem;gap:3rem}}.careers__board-select-btn-wrapper{align-items:center;display:flex;grid-gap:1.5rem;gap:1.5rem}@media(min-width:40rem){.careers__board-select-btn-wrapper{grid-gap:3rem;gap:3rem}}.careers__board-select-button{padding:1rem .25rem 1.25rem;border-bottom:3px solid transparent;transition:border-color .25s ease-out;cursor:pointer;flex:1 0 auto;text-align:center}@media(min-width:40rem){.careers__board-select-button{padding:2.5rem .25rem 2.25rem}}.careers__board-select-button.active,.careers__board-select-button:hover{border-bottom:3px solid #f44b34;border-bottom:3px solid var(--color-red)}.careers__board-select-button.active{font-weight:700}.careers__board-select-separator{width:1px;height:40px;display:block;background:#d5d5d5;background:var(--color-separator-gray)}.careers__board-select-heading{position:relative;top:0;text-align:center}@media(min-width:40rem){.careers__board-select-heading{text-align:left}}.careers__boards{padding:3rem 1rem}.careers__board{margin:0 auto}.careers__board--workday{max-width:950px}.careers__board--workday iframe{width:100%;border:0;height:1000px}",""]),e.exports=o},646:function(e,r,t){"use strict";t.r(r);var o=t(7),c=(t(50),t(322)),d=t(326),n=t(287),l=t(289),m={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(c.a)(e,"careers");case 2:return t=r.sent,r.abrupt("return",{pageData:t});case 4:case"end":return r.stop()}}),r)})))()},data:function(){return{removeParagraphTagSerializer:n.a,hasValue:l.a,activeBoard:null}},head:function(){var e=this.$route.path,r=this.pageData,title=r.seo_title,t=r.seo_description,image=r.social_share_image.url;return{title:"".concat(this.pageData.title," - Dotdash Meredith"),meta:Object(d.a)({title:title,description:t,url:e,image:image})}},mounted:function(){}