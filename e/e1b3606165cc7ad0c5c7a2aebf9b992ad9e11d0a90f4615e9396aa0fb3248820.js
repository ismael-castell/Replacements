(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{876:function(e,t,n){"use strict";n.r(t);var o={props:["nickname","is_verified_test_account","writer_nickname_color_code","job_title","is_show_company","is_hidden_company","company_id","company_name","was_companies","bio","from","context_id","company_page","board_name"],methods:{openDm:function(e,t,n){var o="article"===e?"article_alias":"comment_id";this.$modal.show("appDown",{from:"dm",type:e,dmkey:o,context:t}),n&&(this.$refs.profilePopper.doClose(),this.$ga.event("DM","Send-private-message","Ly-app-install"))},activeColor:function(){return this.is_verified_test_account?this.writer_nickname_color_code:""},activeFont:function(){return this.is_verified_test_account?"bold":""},clickProfileCompanyName:function(e){this.$ga.event("Enter-company-page","User-company-".concat(this.from),"".concat(e,"-name"))}},components:{Popper:function(){return Promise.all([n.e(2),n.e(43)]).then(n.bind(null,712))}}},c=n(5),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.is_show_company&&(!e.$store.state.authUser||e.$store.state.authUser&&e.company_id!==e.$store.state.authUser.member_info.company_id)?[e.is_hidden_company?n("span",[e._v("\n             Undisclosed\n            "),e.job_title?[e._v(" / ")]:e._e()],2):e.company_name?n("span",[e.company_page?n("nuxt-link",{staticClass:"tag",attrs:{to:{name:"company-alias",params:{alias:e.company_page.url_alias}}},nativeOn:{click:function(t){return e.clickProfileCompanyName(e.company_name)}}},[e._v(e._s(e.company_name))]):n("span",[e._v(e._s(e.company_name))]),e._v(" "),e.job_title?[e._v(" / ")]:e._e()],2):e._e(),e._v(" "),e.job_title?n("span",[e._v(e._s(e.job_title))]):e._e()]:e._e(),e._v(" "),"list"===e.from?n("span",{staticClass:"name",style:"color:"+e.activeColor()+";font-weight:"+e.activeFont()+";"},[e._v(e._s(e.nickname))]):!e.$store.state.authUser||e.$store.state.authUser&&e.company_id!==e.$store.state.authUser.member_info.company_id?n("span",[n("popper",{ref:"profilePopper",attrs:{trigger:"click",options:{placement:"bottom-start"}}},[n("a",{attrs:{slot:"reference"},on:{click:function(){}