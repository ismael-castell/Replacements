 /*
 * # Semantic UI - 2.3.1
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(p,h,v,b){p.site=p.fn.site=function(e){var s,l,i=(new Date).getTime(),o=[],t=e,n="string"==typeof t,c=[].slice.call(arguments,1),u=p.isPlainObject(e)?p.extend(!0,{},p.site.settings,e):p.extend({},p.site.settings),a=u.namespace,d=u.error,r="module-"+a,f=p(v),m=this,g=f.data(r);return s={initialize:function(){s.instantiate()},instantiate:function(){s.verbose("Storing instance of site",s),g=s,f.data(r,s)},normalize:function(){s.fix.console(),s.fix.requestAnimationFrame()},fix:{console:function(){s.debug("Normalizing window.console"),console!==b&&console.log!==b||(s.verbose("Console not available, normalizing events"),s.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(s.verbose("Console group not available, normalizing events"),h.console.group=function(){},h.console.groupEnd=function(){},h.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(s.verbose("Mark timeline not available, normalizing events"),h.console.markTimeline=function(){})},consoleClear:function(){s.debug("Disabling programmatic console clearing"),h.console.clear=function(){}},requestAnimationFrame:function(){s.debug("Normalizing requestAnimationFrame"),h.requestAnimationFrame===b&&(s.debug("RequestAnimationFrame not available, normalizing event"),h.requestAnimationFrame=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(e){return p.fn[e]!==b&&p.fn[e].settings!==b},enabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)||n.push(t)}),n}},change:{setting:function(o,a,e,r){e="string"==typeof e?"all"===e?u.modules:[e]:e||u.modules,r=r===b||r,p.each(e,function(e,t){var n,i=!s.moduleExists(t)||(p.fn[t].settings.namespace||!1);s.moduleExists(t)&&(s.verbose("Changing default setting",o,a,t),p.fn[t].settings[o]=a,r&&i&&0<(n=p(":data(module-"+i+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",o,a)))})},settings:function(i,e,o){e="string"==typeof e?[e]:e||u.modules,o=o===b||o,p.each(e,function(e,t){var n;s.moduleExists(t)&&(s.verbose("Changing default setting",i,t),p.extend(!0,p.fn[t].settings,i),o&&a&&0<(n=p(":data(module-"+a+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",i)))})}},enable:{console:function(){s.console(!0)},debug:function(e,t){e=e||u.modules,s.debug("Enabling debug for modules",e),s.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Enabling verbose debug for modules",e),s.change.setting("verbose",!0,e,t)}},disable:{console:function(){s.console(!1)},debug:function(e,t){e=e||u.modules,s.debug("Disabling debug for modules",e),s.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Disabling verbose debug for modules",e),s.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(g.cache.console===b)return void s.error(d.console);s.debug("Restoring console function"),h.console=g.cache.console}else s.debug("Disabling console function"),g.cache.console=h.console,h.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){s.verbose("Destroying previous site for",f),f.removeData(r)},cache:{},setting:function(e,t){if(p.isPlainObject(e))p.extend(!0,u,e);else{if(t===b)return u[e];u[e]=t}},internal:function(e,t){if(p.isPlainObject(e))p.extend(!0,s,e);else{if(t===b)return s[e];s[e]=t}},debug:function(){u.debug&&(u.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,u.name+":"),s.debug.apply(console,arguments)))},verbose:function(){u.verbose&&u.debug&&(u.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),s.verbose.apply(console,arguments)))},error:function(){s.error=Function.prototype.bind.call(console.error,console,u.name+":"),s.error.apply(console,arguments)},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(i||t),i=t,o.push({Element:m,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=u.name+":",n=0;i=!1,clearTimeout(s.performance.timer),p.each(o,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",(console.group!==b||console.table!==b)&&0<o.length&&(console.groupCollapsed(e),console.table?console.table(o):p.each(o,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||c,t=m||t,"string"==typeof i&&r!==b&&(i=i.split(/[\. ]/),o=i.length-1,p.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(p.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==b)return a=r[n],!1;if(!p.isPlainObject(r[t])||e==o)return r[t]!==b?a=r[t]:s.error(d.method,i),!1;r=r[t]}})),p.isFunction(a)?n=a.apply(t,e):a!==b&&(n=a),p.isArray(l)?l.push(n):l!==b?l=[l,n]:n!==b&&(l=n),a}},n?(g===b&&s.initialize(),s.invoke(t)):(g!==b&&s.destroy(),s.initialize()),l!==b?l:this},p.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},p.extend(p.expr[":"],{data:p.expr.createPseudo?p.expr.createPseudo(function(t){return function(e){return!!p.data(e,t)}}):function(e,t,n){return!!p.data(e,n[3])}})}(jQuery,window,document),function(F,e,O,D){"use strict";e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.form=function(x){var C,w=F(this),S=w.selector||"",k=(new Date).getTime(),T=[],A=x,R=arguments[1],E="string"==typeof A,P=[].slice.call(arguments,1);return w.each(function(){var n,l,t,e,d,c,u,f,m,i,s,o,a,g,p,h,r=F(this),v=this,b=[],y=!1;(h={initialize:function(){h.get.settings(),E?(p===D&&h.instantiate(),h.invoke(A)):(p!==D&&p.invoke("destroy"),h.verbose("Initializing form validation",r,d),h.bindEvents(),h.set.defaults(),h.instantiate())},instantiate:function(){h.verbose("Storing instance of module",h),p=h,r.data(a,h)},destroy:function(){h.verbose("Destroying previous module",p),h.removeEvents(),r.removeData(a)},refresh:function(){h.verbose("Refreshing selector cache"),n=r.find(f.field),l=r.find(f.group),t=r.find(f.message),r.find(f.prompt),e=r.find(f.submit),r.find(f.clear),r.find(f.reset)},submit:function(){h.verbose("Submitting form",r),r.submit()},attachEvents:function(e,t){t=t||"submit",F(e).on("click"+g,function(e){h[t](),e.preventDefault()})},bindEvents:function(){h.verbose("Attaching form events"),r.on("submit"+g,h.validate.form).on("blur"+g,f.field,h.event.field.blur).on("click"+g,f.submit,h.submit).on("click"+g,f.reset,h.reset).on("click"+g,f.clear,h.clear),d.keyboardShortcuts&&r.on("keydown"+g,f.field,h.event.field.keydown),n.each(function(){var e=F(this),t=e.prop("type"),n=h.get.changeEvent(t,e);F(this).on(n+g,h.event.field.change)})},clear:function(){n.each(function(){var e=F(this),t=e.parent(),n=e.closest(l),i=n.find(f.prompt),o=e.data(u.defaultValue)||"",a=t.is(f.uiCheckbox),r=t.is(f.uiDropdown);n.hasClass(m.error)&&(h.verbose("Resetting error on field",n),n.removeClass(m.error),i.remove()),r?(h.verbose("Resetting dropdown value",t,o),t.dropdown("clear")):a?e.prop("checked",!1):(h.verbose("Resetting field value",e,o),e.val(""))})},reset:function(){n.each(function(){var e=F(this),t=e.parent(),n=e.closest(l),i=n.find(f.prompt),o=e.data(u.defaultValue),a=t.is(f.uiCheckbox),r=t.is(f.uiDropdown),s=n.hasClass(m.error);o!==D&&(s&&(h.verbose("Resetting error on field",n),n.removeClass(m.error),i.remove()),r?(h.verbose("Resetting dropdown value",t,o),t.dropdown("restore defaults")):a?(h.verbose("Resetting checkbox value",t,o),e.prop("checked",o)):(h.verbose("Resetting field value",e,o),e.val(o)))})},determine:{isValid:function(){var n=!0;return F.each(c,function(e,t){h.validate.field(t,e,!0)||(n=!1)}),n}},is:{bracketedRule:function(e){return e.type&&e.type.match(d.regExp.bracket)},shorthandFields:function(e){var t=e[Object.keys(e)[0]];return h.is.shorthandRules(t)},shorthandRules:function(e){return"string"==typeof e||F.isArray(e)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):h.is.blank(e))},blank:function(e){return""===F.trim(e.val())},valid:function(e){var n=!0;return e?(h.verbose("Checking if field is valid",e),h.validate.field(c[e],e,!1)):(h.verbose("Checking if form is valid"),F.each(c,function(e,t){h.is.valid(e)||(n=!1)}),n)}},removeEvents:function(){r.off(g),n.off(g),e.off(g),n.off(g)},event:{field:{keydown:function(e){var t=F(this),n=e.which,i=t.is(f.input),o=t.is(f.checkbox),a=0<t.closest(f.uiDropdown).length,r=13;n==27&&(h.verbose("Escape key pressed blurring field"),t.blur()),e.ctrlKey||n!=r||!i||a||o||(y||(t.one("keyup"+g,h.event.field.keyup),h.submit(),h.debug("Enter pressed on input submitting form")),y=!0)},keyup:function(){y=!1},blur:function(e){var t=F(this),n=t.closest(l),i=h.get.validation(t);n.hasClass(m.error)?(h.debug("Revalidating field",t,i),i&&h.validate.field(i)):"blur"==d.on&&i&&h.validate.field(i)},change:function(e){var t=F(this),n=t.closest(l),i=h.get.validation(t);i&&("change"==d.on||n.hasClass(m.error)&&d.revalidate)&&(clearTimeout(h.timer),h.timer=setTimeout(function(){h.debug("Revalidating field",t,h.get.validation(t)),h.validate.field(i)},d.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!h.is.bracketedRule(e))&&(e.value!==D?e.value:e.type.match(d.regExp.bracket)[1]+"")},ruleName:function(e){return h.is.bracketedRule(e)?e.type.replace(e.type.match(d.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":h.get.inputEvent()},inputEvent:function(){return O.createElement("input").oninput!==D?"input":O.createElement("input").onpropertychange!==D?"propertychange":"keyup"},fieldsFromShorthand:function(e){var i={};return F.each(e,function(n,e){"string"==typeof e&&(e=[e]),i[n]={rules:[]},F.each(e,function(e,t){i[n].rules.push({type:t})})}),i},prompt:function(e,t){var n,i,o=h.get.ruleName(e),a=h.get.ancillaryValue(e),r=h.get.field(t.identifier),s=r.val(),l=F.isFunction(e.prompt)?e.prompt(s):e.prompt||d.prompt[o]||d.text.unspecifiedRule,c=-1!==l.search("{value}"),u=-1!==l.search("{name}");return c&&(l=l.replace("{value}",r.val())),u&&(i=1==(n=r.closest(f.group).find("label").eq(0)).length?n.text():r.prop("placeholder")||d.text.unspecifiedField,l=l.replace("{name}",i)),l=(l=l.replace("{identifier}",t.identifier)).replace("{ruleValue}",a),e.prompt||h.verbose("Using default validation prompt for type",l,o),l},settings:function(){if(F.isPlainObject(x)){var e=Object.keys(x);0<e.length&&(x[e[0]].identifier!==D&&x[e[0]].rules!==D)?(d=F.extend(!0,{},F.fn.form.settings,R),c=F.extend({},F.fn.form.settings.defaults,x),h.error(d.error.oldSyntax,v),h.verbose("Extending settings from legacy parameters",c,d)):(x.fields&&h.is.shorthandFields(x.fields)&&(x.fields=h.get.fieldsFromShorthand(x.fields)),d=F.extend(!0,{},F.fn.form.settings,x),c=F.extend({},F.fn.form.settings.defaults,d.fields),h.verbose("Extending settings",c,d))}else d=F.fn.form.settings,c=F.fn.form.settings.defaults,h.verbose("Using default form validation",c,d);o=d.namespace,u=d.metadata,f=d.selector,m=d.className,i=d.regExp,s=d.error,a="module-"+o,g="."+o,p=r.data(a),h.refresh()},field:function(e){return h.verbose("Finding field with identifier",e),e=h.escape.string(e),0<n.filter("#"+e).length?n.filter("#"+e):0<n.filter('[name="'+e+'"]').length?n.filter('[name="'+e+'"]'):0<n.filter('[name="'+e+'[]"]').length?n.filter('[name="'+e+'[]"]'):0<n.filter("[data-"+u.validate+'="'+e+'"]').length?n.filter("[data-"+u.validate+'="'+e+'"]'):F("<input/>")},fields:function(e){var n=F();return F.each(e,function(e,t){n=n.add(h.get.field(t))}),n},validation:function(n){var i,o;return!!c&&(F.each(c,function(e,t){o=t.identifier||e,h.get.field(o)[0]==n[0]&&(t.identifier=o,i=t)}),i||!1)},value:function(e){var t=[];return t.push(e),h.get.values.call(v,t)[e]},values:function(e){var t=F.isArray(e)?h.get.fields(e):n,c={};return t.each(function(e,t){var n=F(t),i=(n.prop("type"),n.prop("name")),o=n.val(),a=n.is(f.checkbox),r=n.is(f.radio),s=-1!==i.indexOf("[]"),l=!!a&&n.is(":checked");i&&(s?(i=i.replace("[]",""),c[i]||(c[i]=[]),a?l?c[i].push(o||!0):c[i].push(!1):c[i].push(o)):r?c[i]!==D&&0!=c[i]||(c[i]=!!l&&(o||!0)):c[i]=a?!!l&&(o||!0):o)}),c}},has:{field:function(e){return h.verbose("Checking for existence of a field with identifier",e),"string"!=typeof(e=h.escape.string(e))&&h.error(s.identifier,e),0<n.filter("#"+e).length||(0<n.filter('[name="'+e+'"]').length||0<n.filter("[data-"+u.validate+'="'+e+'"]').length)}},escape:{string:function(e){return(e=String(e)).replace(i.escape,"\\$&")}},add:{rule:function(e,t){h.add.field(e,t)},field:function(n,e){var i={};h.is.shorthandRules(e)?(e=F.isArray(e)?e:[e],i[n]={rules:[]},F.each(e,function(e,t){i[n].rules.push({type:t})})):i[n]=e,c=F.extend({},c,i),h.debug("Adding rules",i,c)},fields:function(e){var t;t=e&&h.is.shorthandFields(e)?h.get.fieldsFromShorthand(e):e,c=F.extend({},c,t)},prompt:function(e,t){var n=h.get.field(e).closest(l),i=n.children(f.prompt),o=0!==i.length;t="string"==typeof t?[t]:t,h.verbose("Adding field error state",e),n.addClass(m.error),d.inline&&(o||(i=d.templates.prompt(t)).appendTo(n),i.html(t[0]),o?h.verbose("Inline errors are disabled, no inline error added",e):d.transition&&F.fn.transition!==D&&r.transition("is supported")?(h.verbose("Displaying error with css transition",d.transition),i.transition(d.transition+" in",d.duration)):(h.verbose("Displaying error with fallback javascript animation"),i.fadeIn(d.duration)))},errors:function(e){h.debug("Adding form error messages",e),h.set.error(),t.html(d.templates.error(e))}},remove:{rule:function(n,e){var i=F.isArray(e)?e:[e];if(e==D)return h.debug("Removed all rules"),void(c[n].rules=[]);c[n]!=D&&F.isArray(c[n].rules)&&F.each(c[n].rules,function(e,t){-1!==i.indexOf(t.type)&&(h.debug("Removed rule",t.type),c[n].rules.splice(e,1))})},field:function(e){var t=F.isArray(e)?e:[e];F.each(t,function(e,t){h.remove.rule(t)})},rules:function(e,n){F.isArray(e)?F.each(fields,function(e,t){h.remove.rule(t,n)}):h.remove.rule(e,n)},fields:function(e){h.remove.field(e)},prompt:function(e){var t=h.get.field(e).closest(l),n=t.children(f.prompt);t.removeClass(m.error),d.inline&&n.is(":visible")&&(h.verbose("Removing prompt for field",e),d.transition&&F.fn.transition!==D&&r.transition("is supported")?n.transition(d.transition+" out",d.duration,function(){n.remove()}):n.fadeOut(d.duration,function(){n.remove()}))}},set:{success:function(){r.removeClass(m.error).addClass(m.success)},defaults:function(){n.each(function(){var e=F(this),t=0<e.filter(f.checkbox).length?e.is(":checked"):e.val();e.data(u.defaultValue,t)})},error:function(){r.removeClass(m.success).addClass(m.error)},value:function(e,t){var n={};return n[e]=t,h.set.values.call(v,n)},values:function(e){F.isEmptyObject(e)||F.each(e,function(e,t){var n,i=h.get.field(e),o=i.parent(),a=F.isArray(t),r=o.is(f.uiCheckbox),s=o.is(f.uiDropdown),l=i.is(f.radio)&&r;0<i.length&&(a&&r?(h.verbose("Selecting multiple",t,i),o.checkbox("uncheck"),F.each(t,function(e,t){n=i.filter('[value="'+t+'"]'),o=n.parent(),0<n.length&&o.checkbox("check")})):l?(h.verbose("Selecting radio value",t,i),i.filter('[value="'+t+'"]').parent(f.uiCheckbox).checkbox("check")):r?(h.verbose("Setting checkbox value",t,o),!0===t?o.checkbox("check"):o.checkbox("uncheck")):s?(h.verbose("Setting dropdown value",t,o),o.dropdown("set selected",t)):(h.verbose("Setting field value",t,i),i.val(t)))})}},validate:{form:function(e,t){var n=h.get.values();if(y)return!1;if(b=[],h.determine.isValid()){if(h.debug("Form has no validation errors, submitting"),h.set.success(),!0!==t)return d.onSuccess.call(v,e,n)}else if(h.debug("Form has errors"),h.set.error(),d.inline||h.add.errors(b),r.data("moduleApi")!==D&&e.stopImmediatePropagation(),!0!==t)return d.onFailure.call(v,b,n)},field:function(n,e,t){t=t===D||t,"string"==typeof n&&(h.verbose("Validating field",n),n=c[e=n]);var i=n.identifier||e,o=h.get.field(i),a=!!n.depends&&h.get.field(n.depends),r=!0,s=[];return n.identifier||(h.debug("Using field name as identifier",i),n.identifier=i),o.prop("disabled")?(h.debug("Field is disabled. Skipping",i),r=!0):n.optional&&h.is.blank(o)?(h.debug("Field is optional and blank. Skipping",i),r=!0):n.depends&&h.is.empty(a)?(h.debug("Field depends on another value that is not present or empty. Skipping",a),r=!0):n.rules!==D&&F.each(n.rules,function(e,t){h.has.field(i)&&!h.validate.rule(n,t)&&(h.debug("Field is invalid",i,t.type),s.push(h.get.prompt(t,n)),r=!1)}),r?(t&&(h.remove.prompt(i,s),d.onValid.call(o)),!0):(t&&(b=b.concat(s),h.add.prompt(i,s),d.onInvalid.call(o,s)),!1)},rule:function(e,t){var n=h.get.field(e.identifier),i=(t.type,n.val()),o=h.get.ancillaryValue(t),a=h.get.ruleName(t),r=d.rules[a];if(F.isFunction(r))return i=i===D||""===i||null===i?"":F.trim(i+""),r.call(n,i,o);h.error(s.noRule,a)}},setting:function(e,t){if(F.isPlainObject(e))F.extend(!0,d,e);else{if(t===D)return d[e];d[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,h,e);else{if(t===D)return h[e];h[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,d.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),h.verbose.apply(console,arguments)))},error:function(){d.silent||(h.error=Function.prototype.bind.call(console.error,console,d.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var e=d.name+":",n=0;k=!1,clearTimeout(h.performance.timer),F.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",S&&(e+=" '"+S+"'"),1<w.length&&(e+=" ("+w.length+")"),(console.group!==D||console.table!==D)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):F.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=p;return e=e||P,t=v||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==D&&(a=r[t]),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),F.isArray(C)?C.push(n):C!==D?C=[C,n]:n!==D&&(C=n),a}}).initialize()}),C!==D?C:this},F.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(e){var n='<ul class="list">';return F.each(e,function(e,t){n+="<li>"+t+"</li>"}),F(n+="</ul>")},prompt:function(e){return F("<div/>").addClass("ui basic red pointing prompt label").html(e[0])}},rules:{empty:function(e){return!(e===D||""===e||F.isArray(e)&&0===e.length)},checked:function(){return 0<F(this).filter(":checked").length},email:function(e){return F.fn.form.settings.regExp.email.test(e)},url:function(e){return F.fn.form.settings.regExp.url.test(e)},regExp:function(e,t){if(t instanceof RegExp)return e.match(t);var n,i=t.match(F.fn.form.settings.regExp.flags);return i&&(t=2<=i.length?i[1]:t,n=3<=i.length?i[2]:""),e.match(new RegExp(t,n))},integer:function(e,t){var n,i,o,a=F.fn.form.settings.regExp.integer;return t&&-1===["",".."].indexOf(t)&&(-1==t.indexOf("..")?a.test(t)&&(n=i=t-0):(o=t.split("..",2),a.test(o[0])&&(n=o[0]-0),a.test(o[1])&&(i=o[1]-0))),a.test(e)&&(n===D||n<=e)&&(i===D||e<=i)},decimal:function(e){return F.fn.form.settings.regExp.decimal.test(e)},number:function(e){return F.fn.form.settings.regExp.number.test(e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return(e="string"==typeof e?e.toLowerCase():e)!=(t="string"==typeof t?t.toLowerCase():t)},notExactly:function(e,t){return e!=t},contains:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t))},doesntContain:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t,"i"))},doesntContainExactly:function(e,t){return t=t.replace(F.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t))},minLength:function(e,t){return e!==D&&e.length>=t},length:function(e,t){return e!==D&&e.length>=t},exactLength:function(e,t){return e!==D&&e.length==t},maxLength:function(e,t){return e!==D&&e.length<=t},match:function(e,t){var n;F(this);return 0<F('[data-validate="'+t+'"]').length?n=F('[data-validate="'+t+'"]').val():0<F("#"+t).length?n=F("#"+t).val():0<F('[name="'+t+'"]').length?n=F('[name="'+t+'"]').val():0<F('[name="'+t+'[]"]').length&&(n=F('[name="'+t+'[]"]')),n!==D&&e.toString()==n.toString()},different:function(e,t){var n;F(this);return 0<F('[data-validate="'+t+'"]').length?n=F('[data-validate="'+t+'"]').val():0<F("#"+t).length?n=F("#"+t).val():0<F('[name="'+t+'"]').length?n=F('[name="'+t+'"]').val():0<F('[name="'+t+'[]"]').length&&(n=F('[name="'+t+'[]"]')),n!==D&&e.toString()!==n.toString()},creditCard:function(n,e){var t,i,o={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},a={},r=!1,s="string"==typeof e&&e.split(",");if("string"==typeof n&&0!==n.length){if(n=n.replace(/[\-]/g,""),s&&(F.each(s,function(e,t){(i=o[t])&&(a={length:-1!==F.inArray(n.length,i.length),pattern:-1!==n.search(i.pattern)}).length&&a.pattern&&(r=!0)}),!r))return!1;if((t={number:-1!==F.inArray(n.length,o.unionPay.length),pattern:-1!==n.search(o.unionPay.pattern)}).number&&t.pattern)return!0;for(var l=n.length,c=0,u=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;l--;)d+=u[c][parseInt(n.charAt(l),10)],c^=1;return d%10==0&&0<d}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(S,k,e,T){"use strict";k=void 0!==k&&k.Math==Math?k:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.accordion=function(a){var v,r=S(this),b=(new Date).getTime(),y=[],x=a,C="string"==typeof x,w=[].slice.call(arguments,1);k.requestAnimationFrame||k.mozRequestAnimationFrame||k.webkitRequestAnimationFrame||k.msRequestAnimationFrame;return r.each(function(){var e,c,u=S.isPlainObject(a)?S.extend(!0,{},S.fn.accordion.settings,a):S.extend({},S.fn.accordion.settings),d=u.className,t=u.namespace,f=u.selector,s=u.error,n="."+t,i="module-"+t,o=r.selector||"",m=S(this),g=m.find(f.title),p=m.find(f.content),l=this,h=m.data(i);c={initialize:function(){c.debug("Initializing",m),c.bind.events(),u.observeChanges&&c.observeChanges(),c.instantiate()},instantiate:function(){h=c,m.data(i,c)},destroy:function(){c.debug("Destroying previous instance",m),m.off(n).removeData(i)},refresh:function(){g=m.find(f.title),p=m.find(f.content)},observeChanges:function(){"MutationObserver"in k&&((e=new MutationObserver(function(e){c.debug("DOM tree modified, updating selector cache"),c.refresh()})).observe(l,{childList:!0,subtree:!0}),c.debug("Setting up mutation observer",e))},bind:{events:function(){c.debug("Binding delegated events"),m.on(u.on+n,f.trigger,c.event.click)}},event:{click:function(){c.toggle.call(this)}},toggle:function(e){var t=e!==T?"number"==typeof e?g.eq(e):S(e).closest(f.title):S(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active),a=o&&!i,r=!o&&i;c.debug("Toggling visibility of content",t),a||r?u.collapsible?c.close.call(t):c.debug("Cannot close accordion content collapsing is disabled"):c.open.call(t)},open:function(e){var t=e!==T?"number"==typeof e?g.eq(e):S(e).closest(f.title):S(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating);n.hasClass(d.active)||i?c.debug("Accordion already open, skipping",n):(c.debug("Opening accordion content",t),u.onOpening.call(n),u.onChanging.call(n),u.exclusive&&c.closeOthers.call(t),t.addClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(S.fn.transition!==T&&m.transition("is supported")?n.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration}):n.children().stop(!0,!0).animate({opacity:1},u.duration,c.resetOpacity)),n.slideDown(u.duration,u.easing,function(){n.removeClass(d.animating).addClass(d.active),c.reset.display.call(this),u.onOpen.call(this),u.onChange.call(this)}))},close:function(e){var t=e!==T?"number"==typeof e?g.eq(e):S(e).closest(f.title):S(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active);!o&&!(!o&&i)||o&&i||(c.debug("Closing accordion content",n),u.onClosing.call(n),u.onChanging.call(n),t.removeClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(S.fn.transition!==T&&m.transition("is supported")?n.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration}):n.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),n.slideUp(u.duration,u.easing,function(){n.removeClass(d.animating).removeClass(d.active),c.reset.display.call(this),u.onClose.call(this),u.onChange.call(this)}))},closeOthers:function(e){var t,n,i,o=e!==T?g.eq(e):S(this).closest(f.title),a=o.parents(f.content).prev(f.title),r=o.closest(f.accordion),s=f.title+"."+d.active+":visible",l=f.content+"."+d.active+":visible";u.closeNested?i=(t=r.find(s).not(a)).next(p):(t=r.find(s).not(a),n=r.find(l).find(s).not(a),i=(t=t.not(n)).next(p)),0<t.length&&(c.debug("Exclusive enabled, closing other content",t),t.removeClass(d.active),i.removeClass(d.animating).stop(!0,!0),u.animateChildren&&(S.fn.transition!==T&&m.transition("is supported")?i.children().transition({animation:"fade out",useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration}):i.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),i.slideUp(u.duration,u.easing,function(){S(this).removeClass(d.active),c.reset.display.call(this)}))},reset:{display:function(){c.verbose("Removing inline display from element",this),S(this).css("display",""),""===S(this).attr("style")&&S(this).attr("style","").removeAttr("style")},opacity:function(){c.verbose("Removing inline opacity from element",this),S(this).css("opacity",""),""===S(this).attr("style")&&S(this).attr("style","").removeAttr("style")}},setting:function(e,t){if(c.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,u,e);else{if(t===T)return u[e];S.isPlainObject(u[e])?S.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(c.debug("Changing internal",e,t),t===T)return c[e];S.isPlainObject(e)?S.extend(!0,c,e):c[e]=t},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;b=!1,clearTimeout(c.performance.timer),S.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",o&&(e+=" '"+o+"'"),(console.group!==T||console.table!==T)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):S.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||w,t=l||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==T?a=r[t]:c.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),S.isArray(v)?v.push(n):v!==T?v=[v,n]:n!==T&&(v=n),a}},C?(h===T&&c.initialize(),c.invoke(x)):(h!==T&&h.invoke("destroy"),c.initialize())}),v!==T?v:this},S.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onClosing:function(){},onChanging:function(){},onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},S.extend(S.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(T,A,R,E){"use strict";A=void 0!==A&&A.Math==Math?A:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.checkbox=function(v){var b,e=T(this),y=e.selector||"",x=(new Date).getTime(),C=[],w=v,S="string"==typeof w,k=[].slice.call(arguments,1);return e.each(function(){var e,s,i=T.extend(!0,{},T.fn.checkbox.settings,v),t=i.className,n=i.namespace,o=i.selector,l=i.error,a="."+n,r="module-"+n,c=T(this),u=T(this).children(o.label),d=T(this).children(o.input),f=d[0],m=!1,g=!1,p=c.data(r),h=this;s={initialize:function(){s.verbose("Initializing checkbox",i),s.create.label(),s.bind.events(),s.set.tabbable(),s.hide.input(),s.observeChanges(),s.instantiate(),s.setup()},instantiate:function(){s.verbose("Storing instance of module",s),p=s,c.data(r,s)},destroy:function(){s.verbose("Destroying module"),s.unbind.events(),s.show.input(),c.removeData(r)},fix:{reference:function(){c.is(o.input)&&(s.debug("Behavior called on <input> adjusting invoked element"),c=c.closest(o.checkbox),s.refresh())}},setup:function(){s.set.initialLoad(),s.is.indeterminate()?(s.debug("Initial value is indeterminate"),s.indeterminate()):s.is.checked()?(s.debug("Initial value is checked"),s.check()):(s.debug("Initial value is unchecked"),s.uncheck()),s.remove.initialLoad()},refresh:function(){u=c.children(o.label),d=c.children(o.input),f=d[0]},hide:{input:function(){s.verbose("Modifying <input> z-index to be unselectable"),d.addClass(t.hidden)}},show:{input:function(){s.verbose("Modifying <input> z-index to be selectable"),d.removeClass(t.hidden)}},observeChanges:function(){"MutationObserver"in A&&((e=new MutationObserver(function(e){s.debug("DOM tree modified, updating selector cache"),s.refresh()})).observe(h,{childList:!0,subtree:!0}),s.debug("Setting up mutation observer",e))},attachEvents:function(e,t){var n=T(e);t=T.isFunction(s[t])?s[t]:s.toggle,0<n.length?(s.debug("Attaching checkbox events to element",e,t),n.on("click"+a,t)):s.error(l.notFound)},event:{click:function(e){var t=T(e.target);t.is(o.input)?s.verbose("Using default check action on initialized checkbox"):t.is(o.link)?s.debug("Clicking link inside checkbox, skipping toggle"):(s.toggle(),d.focus(),e.preventDefault())},keydown:function(e){var t=e.which,n=13,i=32;t==27?(s.verbose("Escape key pressed blurring field"),d.blur(),g=!0):e.ctrlKey||t!=i&&t!=n?g=!1:(s.verbose("Enter/space key pressed, toggling checkbox"),s.toggle(),g=!0)},keyup:function(e){g&&e.preventDefault()}},check:function(){s.should.allowCheck()&&(s.debug("Checking checkbox",d),s.set.checked(),s.should.ignoreCallbacks()||(i.onChecked.call(f),i.onChange.call(f)))},uncheck:function(){s.should.allowUncheck()&&(s.debug("Unchecking checkbox"),s.set.unchecked(),s.should.ignoreCallbacks()||(i.onUnchecked.call(f),i.onChange.call(f)))},indeterminate:function(){s.should.allowIndeterminate()?s.debug("Checkbox is already indeterminate"):(s.debug("Making checkbox indeterminate"),s.set.indeterminate(),s.should.ignoreCallbacks()||(i.onIndeterminate.call(f),i.onChange.call(f)))},determinate:function(){s.should.allowDeterminate()?s.debug("Checkbox is already determinate"):(s.debug("Making checkbox determinate"),s.set.determinate(),s.should.ignoreCallbacks()||(i.onDeterminate.call(f),i.onChange.call(f)))},enable:function(){s.is.enabled()?s.debug("Checkbox is already enabled"):(s.debug("Enabling checkbox"),s.set.enabled(),i.onEnable.call(f),i.onEnabled.call(f))},disable:function(){s.is.disabled()?s.debug("Checkbox is already disabled"):(s.debug("Disabling checkbox"),s.set.disabled(),i.onDisable.call(f),i.onDisabled.call(f))},get:{radios:function(){var e=s.get.name();return T('input[name="'+e+'"]').closest(o.checkbox)},otherRadios:function(){return s.get.radios().not(c)},name:function(){return d.attr("name")}},is:{initialLoad:function(){return m},radio:function(){return d.hasClass(t.radio)||"radio"==d.attr("type")},indeterminate:function(){return d.prop("indeterminate")!==E&&d.prop("indeterminate")},checked:function(){return d.prop("checked")!==E&&d.prop("checked")},disabled:function(){return d.prop("disabled")!==E&&d.prop("disabled")},enabled:function(){return!s.is.disabled()},determinate:function(){return!s.is.indeterminate()},unchecked:function(){return!s.is.checked()}},should:{allowCheck:function(){return s.is.determinate()&&s.is.checked()&&!s.should.forceCallbacks()?(s.debug("Should not allow check, checkbox is already checked"),!1):!1!==i.beforeChecked.apply(f)||(s.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return s.is.determinate()&&s.is.unchecked()&&!s.should.forceCallbacks()?(s.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!1!==i.beforeUnchecked.apply(f)||(s.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return s.is.indeterminate()&&!s.should.forceCallbacks()?(s.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!1!==i.beforeIndeterminate.apply(f)||(s.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return s.is.determinate()&&!s.should.forceCallbacks()?(s.debug("Should not allow determinate, checkbox is already determinate"),!1):!1!==i.beforeDeterminate.apply(f)||(s.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},forceCallbacks:function(){}