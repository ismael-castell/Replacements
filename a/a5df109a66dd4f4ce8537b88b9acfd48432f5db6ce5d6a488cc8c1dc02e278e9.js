!function(t) {
function e(n) {
if (i[n]) return i[n].exports;
var o = i[n] = {
i: n,
l: !1,
exports: {}
};
t[n].call(o.exports, o, o.exports, e);
o.l = !0;
return o.exports;
}
var i = {};
e.m = t;
e.c = i;
e.d = function(t, i, n) {
e.o(t, i) || Object.defineProperty(t, i, {
enumerable: !0,
get: n
});
};
e.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
});
Object.defineProperty(t, "__esModule", {
value: !0
});
};
e.t = function(t, i) {
1 & i && (t = e(t));
if (8 & i) return t;
if (4 & i && "object" == typeof t && t && t.__esModule) return t;
var n = Object.create(null);
e.r(n);
Object.defineProperty(n, "default", {
enumerable: !0,
value: t
});
if (2 & i && "string" != typeof t) for (var o in t) e.d(n, o, function(e) {
return t[e];
}.bind(null, o));
return n;
};
e.n = function(t) {
var i = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
e.d(i, "a", i);
return i;
};
e.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
};
e.p = "";
e.__strings = [ "<hours>:<minutes>", "<hours>:<minutes> am", "<hours>:<minutes> pm", "<agent_name> was disconnected and has left the chat", "Back", "View more", "Zendesk Support agent not found", "Zendesk Chat requires cookies to function. Enable cookies?", "Powered by Zendesk Chat", "Please wait for an agent. There are <number> visitor(s) waiting to be served.", "Online", "Away", "Offline", "Complete this field", "Enter a valid email address", "Complete this field", "Select an option", "Select an option", "Check this option to continue", "Select at least one option", "Select a department", "This field is invalid", "Phone number", "Are you sure you want to end this chat?", "Facebook", "Twitter", "Google", "<name> joined the chat", "<name> left the chat", "<old_name> is now known as <new_name>", "Chat started", "Chat ended", "Comment submitted", "Chat rated Good", "Chat rated Bad", "Chat rating removed", "<name> is typing...", "<name> are typing...", "Agents are typing...", "Type your message here", "Send", "<number> new message", "<number> new messages", "<number> new message", "<number> new messages", "Chat", "Message", "1 new attachment", "Reconnecting", "Click to reconnect", "Reconnecting", "Resuming session", "Loading", "Chat disabled", "Disabled", "Privacy Policy", "Unlink from <name>", "Send message", "Start chatting", "Any department", "Choose a department", "Close", "Closed", "<start_time> to <end_time>", "File size too large. Maximum total size is limited to <size>.", "The file you are trying to send is not supported.", "File sending is temporary disabled. Please try again later.", "Failed to send. Please try again.", "Failed to save assignee", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Weekdays", "Weekends", "Daily", "All day", "Chat With Us", "Leave a Message", "Chat with us", "support", "We're online.", "We're away.", "We're offline.", "Live Support", "Ask us anything", "Hi, welcome to our website!", "Questions?", "Click here to chat with us", "Choose a department", "Message", "Phone", "Sorry, we aren't online at the moment. Leave a message and we'll get back to you.", "Sorry, we aren't online at the moment.", "Thanks for the message! We'll get back to you as soon as we can.", "Message", "Phone", "Nice chatting with you!", "How would you rate the chat experience you just had?", "Thanks for the good rating! Would you like to leave a comment?", "What did you like about this chat?", "Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.", "What did you dislike about this chat?", "File size too large. Maximum limit is <size>.", "The file you are trying to send is not supported.", "File sending is temporarily disabled. Please try again later.", "<size> bytes", "<size> KB", "<size> MB", "Failed to send. Please try again.", "Reply", "Dismiss", "Minimize", "Send", "Type your message here", "Submit", "Cancel", "Back to chat", "Back to chat", "Leave a comment", "(Optional)", "Send", "Cancel", "How would you rate this chat?", "Chat rated Good", "Chat rated Bad", "Chat rating removed", "Cancel", "Skip", "Send chat transcript to", "Email", "This isn't a valid email.", "Send", "Cancel", "Close", "End", "Cancel", "Email will be sent to @@@@<email>@@@@ when the chat ends", "An email of the last chat will be sent to @@@@<email>@@@@", "Drop files here", "Submit", "Skip", "Send another", "Choose a department", "Operating hours", "Back", "http://zop.im/prem-offline-form", "Learn more", "Our operating hours", "Back", "You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.", "You may disable the chat anytime.", "Enable cookies and chat", "Zendesk Chat requires cookies to function", "If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.", "You may re-enable chat anytime.", "Disable chat", "Cancel", "Zendesk Chat requires cookies to function", "Introduce yourself", "Hello there!", "Name, Email", "Edit", "Sign out", "Please update your profile", "Name", "Please provide your name", "Email", "Please provide a valid email", "or sign in with", "Phone number", "Please provide a valid phone", "Name", "Email", "Sound", "Sign in", "Hi, <name>", "Hi there!", "About", "Cookies", "Send a file", "End this chat", "Email transcript", "Edit contact details", "Name", "Enter your name", "Email", "Enter your email", "Phone", "Enter your phone", "Save", "Cancel", "Queue position: <number>", "Open in new window", "Minimize", "This widget uses @cookies@.", "Connect with", "Use name and email", "Sign out", "Edit", "Reconnecting", "Offline", "Options", "Sign in", "Hi, <name>", "Hi there!", "View past chats", "Contact us here", "Customer support", "Good", "Bad", "Remove", "Good", "Bad", "Remove", "Leave a comment", "Rate this chat", "You", "You — Please update your info", "Message not sent", "Resend", "This attachment was deleted.", 'Uploading "<file_name>"', '"<file_name>" sent.', "show original", "show translated", "Open image" ];
e.__languages = {
ar: "__$$__stringtable_lang_ar",
az: "__$$__stringtable_lang_az",
bg: "__$$__stringtable_lang_bg",
ca: "__$$__stringtable_lang_ca",
cs: "__$$__stringtable_lang_cs",
da: "__$$__stringtable_lang_da",
de: "__$$__stringtable_lang_de",
el: "__$$__stringtable_lang_el",
es: "__$$__stringtable_lang_es",
et: "__$$__stringtable_lang_et",
eu: "__$$__stringtable_lang_eu",
fa: "__$$__stringtable_lang_fa",
fi: "__$$__stringtable_lang_fi",
fr: "__$$__stringtable_lang_fr",
fr_CA: "__$$__stringtable_lang_fr_CA",
he: "__$$__stringtable_lang_he",
hi: "__$$__stringtable_lang_hi",
hr: "__$$__stringtable_lang_hr",
hu: "__$$__stringtable_lang_hu",
id: "__$$__stringtable_lang_id",
is: "__$$__stringtable_lang_is",
it: "__$$__stringtable_lang_it",
ja: "__$$__stringtable_lang_ja",
ka: "__$$__stringtable_lang_ka",
ko: "__$$__stringtable_lang_ko",
ku: "__$$__stringtable_lang_ku",
lt: "__$$__stringtable_lang_lt",
lv: "__$$__stringtable_lang_lv",
mk: "__$$__stringtable_lang_mk",
ms: "__$$__stringtable_lang_ms",
nb: "__$$__stringtable_lang_nb",
nl: "__$$__stringtable_lang_nl",
pl: "__$$__stringtable_lang_pl",
pt: "__$$__stringtable_lang_pt",
pt_BR: "__$$__stringtable_lang_pt_BR",
ro: "__$$__stringtable_lang_ro",
ru: "__$$__stringtable_lang_ru",
sk: "__$$__stringtable_lang_sk",
sl: "__$$__stringtable_lang_sl",
sq: "__$$__stringtable_lang_sq",
sr: "__$$__stringtable_lang_sr",
sv: "__$$__stringtable_lang_sv",
th: "__$$__stringtable_lang_th",
tl: "__$$__stringtable_lang_tl",
tr: "__$$__stringtable_lang_tr",
uk: "__$$__stringtable_lang_uk",
ur: "__$$__stringtable_lang_ur",
vi: "__$$__stringtable_lang_vi",
zh_CN: "__$$__stringtable_lang_zh_CN",
zh_TW: "__$$__stringtable_lang_zh_TW"
};
e(e.s = 390);
}([ function(t, e) {
function i() {}
function n(t) {
i.prototype = t;
return new i();
}
t.exports = n;
}, function(t, e) {
function i(t) {
return t.name + "-" + Math.round(1e4 * Math.random());
}
function n(t, e, n) {
if ("function" != typeof t) throw new Error("klass should be a function");
if (!t.prototype) throw new Error("klass should have prototype");
n = n || {};
n.skip_fqname || (t.prototype.__jx__fqname = n.fqname || i(t));
t.prototype.__jx__super = e;
t.prototype.__jx__constructor = t;
}
t.exports = n;
}, function(t, e, i) {
function n(t, e) {
if (isNaN(t)) {
var i = new o();
i.add("_", t);
return i;
}
-1 == t && (t = b.length);
var n = b[t];
n || (b[t] = n = new o());
if ("string" == typeof e) n.add("_", e); else for (var r in e) e.hasOwnProperty(r) && n.add(r, e[r]);
return n;
}
function o() {
function t(t, e) {
l[t] = e;
}
function e(t) {
r(t, u);
}
function i(t) {
d.push(t);
}
function n() {
return a();
}
function a(t) {
return l[t || w] || l._;
}
function s(t) {
var e, i = a(t);
for (e = 0; e < d.length; e++) d[e](i);
}
function _(t, e) {
var i, n = new o();
b[l._] = n;
for (var r in l) if (l.hasOwnProperty(r)) {
i = l[r];
if ("string" != typeof i) continue;
i = i[t].apply(i, e);
n.add(r, i);
}
return n;
}
for (var l = {}, d = [], u = {
add: t,
bind: e,
onTranslate: i,
toJSON: n,
toString: a,
update: s
}, c = [ "concat", "replace", "toLowerCase", "toUpperCase" ], h = 0; h < c.length; h++) u[c[h]] = function(t) {
return function() {
return _(t, arguments);
};
}(c[h]);
return u;
}
function r(t, e) {
for (var i = 0; i < x.length; i++) if (x[i] == t) {
v[i] = e;
return;
}
x.push(t);
v.push(e);
}
function a(t) {
for (var e = 0; e < x.length; e++) if (x[e] == t) {
x.splice(e, 1);
v.splice(e, 1);
return;
}
}
function s(t) {
t = t.split(/-|_/).slice(0, 2);
var e = t[0] = t[0].toLowerCase();
t[1] && (t[1] = t[1].toUpperCase());
t = t.join("_");
return p.languages ? t in p.languages ? t : e in p.languages ? e : null : null;
}
function _(t) {
var e, i, o, r, a, _;
t = s(t);
if (t) {
a = p.languages[t];
if (a) {
_ = m[p.languages[t]];
if (_) {
n.language = w = t;
$.ensureLoaded(_, function(n) {
n && l(t);
if (t == w) {
for (e = 0, i = b.length; e < i; e++) b[e].update instanceof Function && b[e].update(t);
for (e = 0, i = x.length; e < i; e++) {
o = x[e];
r = v[e].toString();
if (j) o.textContent = r; else if ("string" == typeof o.innerText) o.innerText = r; else if ("string" == typeof o.nodeValue) try {
o.data = r;
} catch (t) {}
}
y._active = !0;
i = y.length;
for (e = 0; e < i; e++) try {
y[e] && y[e](t);
} catch (t) {}
y._active = !1;
if (y._dirty) {
for (e = 0; e < i; e++) if (!y[e]) {
e == i - 1 ? y.pop() : y[e--] = y.pop();
i--;
}
y._dirty = !1;
}
}
});
}
}
}
}
function l(t) {
var e, i = m[p.languages[t]];
for (e = 0; e < i.length; e++) 0 !== i[e] && b[e].add(t, i[e]);
}
function d(t) {
y.push(t);
}
function u(t) {
for (var e = 0, i = y.length; e < i; e++) if (y[e] == t) {
y._active ? (y[e] = null, y._dirty = !0) : e == i - 1 ? y.pop() : y[e] = y.pop();
break;
}
}
function c() {
return !(-1 == w.search(C));
}
function h(t) {
return c() ? t.replace(/left/, "%left%").replace(/right/, "left").replace(/%left%/, "right").replace(/ltr/, "%ltr%").replace(/rtl/, "ltr").replace(/%ltr%/, "rtl") : t;
}
function f() {
var t = p.strings;
if (t) for (var e = 0; e < t.length; e++) n(e, t[e]);
}
var g = i(8), p = i(45), m = i(5), $ = i(186), b = [], w = "_", x = [], v = [], y = [], j = g.isTextContent, C = /^ar|^fa|^he|^ur/;
n.bind = r;
n.flip = h;
n.onLanguage = d;
n.unLanguage = u;
n.update = _;
n.unbind = a;
n.rtl = c;
n.findClosestLanguage = s;
n.loadDefaultStrings = f;
f();
t.exports = n;
}, function(t, e, i) {
var n = i(97), o = i(14), r = i(384), a = i(382), s = i(181), _ = i(178), l = i(96), d = i(28), u = n.REGEX, c = {};
o.extend(c);
c.generateAll = r.generateAll;
c.generate = r.generate;
c.writeChanges = r.writeChanges;
c.setPalette = a.setPalette;
c.delPalette = a.delPalette;
c.delPalettes = a.delPalettes;
c.appendPalette = a.appendPalette;
c.getPalette = a.getPalette;
a.initDefaultPalette();
c.setIFrameOnly = s.setIFrameOnly;
c.bindIFrame = s.bindIFrame;
c.unbindIFrame = s.unbindIFrame;
c.transform2CSS = _;
c.getVariable = function(t) {
for (var e = l.palettes, i = l.priorities, n = i.length - 1; n >= 0; n--) if (i[n] && e[i[n]] && (e[i[n]][t] || d(e[i[n]][t]))) return u.isVariable.test(e[i[n]][t]) ? c.getVariable(e[i[n]][t].toString().slice(2)) : e[i[n]][t];
};
c.reload = function() {
c.writeChanges(!0);
};
t.exports = c;
}, function(t, e, i) {
function n(t, e, i) {
try {
t.style[I(e)] = i;
} catch (t) {}
}
function o() {}
function r() {}
function a() {
return "___$_" + B++;
}
function s(t, e) {
var i = e.getAttribute(D);
i = i ? i.split(" ") : [];
t || (t = a());
E[t] = e;
i.push(t);
e.setAttribute(D, i.join(" "));
}
function _(t) {
var e = t.getAttribute(D);
if (e) {
e = e.split(" ");
for (var i = 0; i < e.length; i++) delete E[e[i]];
}
}
function l(t) {
return E[t];
}
function d(t, e) {
for (var i, n = 0; n < e.length; n++) {
i = e[n];
if ("string" != typeof i) {
i[1] && (i[1] = t + "__" + i[1]);
i[3] && d(t, i[3]);
}
}
return e;
}
function u(t) {
var e = function(i, n, o, r, s) {
n = n || a();
var _ = i.ownerDocument, l = N.create(_, t, n);
l.__jx__constructor = e;
l.__jx__native = !0;
var d = !1;
l.appendToParent = function(t) {
N.hasParentNode(l) || N.appendChild(i, l);
if (t && !d) {
i.appendToParent && i.appendToParent(!0);
d = !0;
}
};
l.setStyle(o);
l.setAttributes(s);
N.addChildren(l, r);
l.appendToParent();
return l;
};
return e;
}
function c(t) {
for (;t.defaultPlacement; ) t = t.defaultPlacement;
return t;
}
function h(t) {
return t.createElement ? t : c(t).ownerDocument;
}
function f(t, e, i, n) {
var r = h(t).createElement(e);
x.isSafari && "textarea" == e.toLowerCase() && (r.style.resize = "none");
switch (e.toLowerCase()) {
case "textarea":
case "input":
r.style.outlineStyle = "none";
}
o(r);
s(i, r);
w(r);
v.extend(r);
r.setStyle(n);
x.buggyCSS && r.setOverflow("auto");
return r;
}
function g(t) {
return t.parentNode && t.parentNode.nodeType && 11 != t.parentNode.nodeType;
}
function p(t, e) {
if (t != document.body || "absolute" != e.style.position && "fixed" != e.style.position) {
for (var i = t; i.defaultPlacement; ) i = i.defaultPlacement;
i.appendChild(e);
e.applyConstraints();
} else {
t.insertBefore(e, t.firstChild);
e.applyConstraints();
}
}
function m(t, e) {
if (e && e.length) {
t = c(t);
for (var i, n, o, r = t.ownerDocument, a = 0; a < e.length; a++) {
n = e[a];
if (y(n)) i = n[0](t, n[1], n[2], n[3], n[4]); else {
o = r.createTextNode(n);
t.appendChild(o);
"function" == typeof n.bind && n.bind(o);
}
}
return i;
}
}
function $(t) {
var e = t.ownerDocument;
return e.defaultView && e.defaultView.getComputedStyle ? e.defaultView.getComputedStyle(t, null) || {} : t.currentStyle ? t.currentStyle : {};
}
function b(t, e) {
return $(t)[e];
}
function w(t, e) {
function i(e) {
var i;
for (var n in e) if (e.hasOwnProperty(n)) {
i = "set" + n.substr(0, 1).toUpperCase() + n.substr(1);
"function" == typeof t[i] && t[i](e[n]);
}
}
function n() {
return t.textContent || t.innerText || "";
}
function o(e) {
j && j.unbind && j.unbind(t);
e && "function" == typeof e.bind && e.bind(t);
O ? t.textContent = e : t.innerText = e;
}
function r(e) {
function i(e, i) {
var n = I("set-" + e);
"function" == typeof t[n] ? t[n](i) : T(t, e, i);
}
var n, o;
if (1 == arguments.length && C(e)) {
if (!e) return;
e = e.split(";");
for (n = 0; n < e.length; n++) if (!e[n].match(/^\s*$/)) {
o = e[n].match(/\s*([^:]+):\s*(.*?)\s*$/);
!o && e[n].length || i(o[1], o[2]);
}
} else if (1 == arguments.length && "object" == typeof e) for (var r in e) e.hasOwnProperty(r) && i(r, e[r]); else if (arguments.length > 1) for (n = 0; n < arguments.length; n += 2) i(arguments[n], arguments[n + 1]);
}
function a(e) {
function i() {
x.isIE ? ot.styleFloat = e : ot.cssFloat = e;
}
j && j.onLanguage && j.onLanguage(i);
i();
return t;
}
function s(e) {
X = h(e);
g();
return t;
}
function _(e) {
K = h(e);
g();
return t;
}
function l(e) {
Z = h(e);
g();
return t;
}
function d(e) {
Q = h(e);
g();
return t;
}
function u(e) {
J = h(e);
g();
return t;
}
function c(e) {
tt = h(e);
g();
return t;
}
function h(t) {
return C(t) && "%" == t.substr(t.length - 1) ? parseInt(t, 10) + "%" : parseInt(t, 10);
}
function f(e) {
switch (e) {
case "static":
case "relative":
case "absolute":
case "fixed":
et = e;
}
null !== et && T(t, "position", _t && "fixed" == et ? "absolute" : et);
return t;
}
function g() {
isNaN(X) || isNaN(tt) || (Z = NaN);
isNaN(K) || isNaN(J) || (Q = NaN);
J < 0 && (J = 0);
tt < 0 && (tt = 0);
p();
}
function p() {
N.hasParentNode(t) && (x.bugs.ie.cssFixed && "fixed" == et ? S(m, t, !0) : !x.bugs.ie.cssBottomRight || (isNaN(K) || isNaN(Q)) && (isNaN(X) || isNaN(Z)) ? D() : B());
}
function m() {
v();
t.appendToParent && t.appendToParent(!0);
Z < 0 && (Z = 0);
Q < 0 && (Q = 0);
A.ok(isNaN(K) != isNaN(Q), "One and only one of left/right must be set");
A.ok(isNaN(X) != isNaN(Z), "One and only one of top/bottom must be set");
A.ok(!isNaN(J), "Width must be set");
A.ok(!isNaN(tt), "Height must be set");
A.ok(t.ownerDocument == document, "Fixed element must be top level element");
if (tt != nt) {
ot.height = tt + "px";
nt = tt;
}
if (J != it) {
ot.width = J + "px";
it = J;
}
var e, i, n, o;
if (x.isQuirks) {
o = "document.body.clientHeight";
n = "document.body.clientWidth";
e = "(dummye34cf6=document.body.scrollLeft)+";
i = "(dummye34cf6=document.body.scrollTop )+";
} else {
o = "document.documentElement.clientHeight";
n = "document.documentElement.clientWidth";
e = "(dummye34cf6=document.documentElement.scrollLeft)+";
i = "(dummye34cf6=document.documentElement.scrollTop )+";
}
isNaN(K) ? C(K) ? e += parseInt(K, 10) / 100 * (x.isQuirks ? document.body : document.documentElement).clientWidth : e += n + "-" + (J + Q) : e += K;
isNaN(X) ? C(X) ? i += parseInt(X, 10) / 100 * (x.isQuirks ? document.body : document.documentElement).clientHeight : i += o + "-" + (tt + Z) : i += X;
x.isIE6 && "rtl" == document.body.currentStyle.direction && (x.isQuirks ? e += "-(document.body.scrollWidth-document.body.clientWidth)" : e += "-(document.documentElement.scrollWidth-document.documentElement.clientWidth)");
ot.setExpression("left", e + '+"px"');
ot.setExpression("top", i + '+"px"');
}
function v() {
if (!v.alreadyHacked) {
v.alreadyHacked = 1;
if (x.isStrict) document.body.parentNode.style.background = "#fff url(https://) fixed"; else if ("fixed" != document.body.currentStyle.backgroundAttachment) {
if ("none" != document.body.currentStyle.backgroundImage) {
var t = document.createElement("div"), e = t.style, i = document.body.currentStyle;
e.backgroundAttachment = i.backgroundAttachment;
e.backgroundColor = i.backgroundColor;
e.backgroundImage = i.backgroundImage;
e.backgroundPositionX = i.backgroundPositionX;
e.backgroundPositionY = i.backgroundPositionY;
e.backgroundRepeat = i.backgroundRepeat;
e.position = "absolute";
e.zIndex = -1;
e.top = e.left = 0;
e.width = "100%";
document.body.insertBefore(t, document.body.firstChild);
var n, o, r = !1, a = 0, s = function() {
if (!r && a) {
n += document.body.clientWidth - a;
e.width = n + "px";
a = document.body.clientWidth;
}
o || (o = setTimeout(function() {
e.width = 0;
document.body.className = document.body.className;
n = Math.max(document.body.scrollWidth, document.body.clientWidth);
e.width = n + "px";
a = document.body.clientWidth;
r = document.body.scrollWidth > document.body.clientWidth;
o = null;
}, 0));
};
setTimeout(s, 0);
e.setExpression("height", 'document.body.scrollHeight+"px"');
s();
}
document.body.style.backgroundImage = "url(https://)";
document.body.style.backgroundAttachment = "fixed";
}
}
}
function B() {
function e(t, e) {
ot[t] = "";
ot.removeExpression(t);
"number" == typeof e ? ot[t] = e + "px" : C(e) && "%" == e.substr(e.length - 1) ? ot[t] = e : C(e) && e.length && ot.setExpression(t, e);
}
t.appendToParent && t.appendToParent(!0);
v();
var i, n, o = isNaN(K) ? "" : K, r = isNaN(Q) ? "" : Q, a = isNaN(J) ? "" : J, s = isNaN(X) ? "" : X, _ = isNaN(Z) ? "" : Z, l = isNaN(tt) ? "" : tt, d = "BackCompat" == t.ownerDocument.compatMode;
if ("fixed" == et && t.ownerDocument == document) if (d) {
n = "document.body.clientHeight";
i = "document.body.clientWidth";
} else {
n = "document.documentElement.clientHeight";
i = "document.documentElement.clientWidth";
} else {
n = "this.offsetParent.clientHeight";
i = "this.offsetParent.clientWidth";
}
if (x.isIE6) {
if (!isNaN(K) && !isNaN(Q)) {
r = "";
a = [ i, K, Q ].join("-");
}
if (!isNaN(X) && !isNaN(Z)) {
_ = "";
l = [ n, X, Z ].join(" - ");
}
}
if ("fixed" == et && t.ownerDocument == document) if (d) {
if (!isNaN(K) || isNaN(Q)) o += "+(dummye34cf6=document.body.scrollLeft)"; else {
o += "+(dummye34cf6=document.body.scrollLeft)+document.body.clientWidth-this.offsetWidth-" + Q;
r = "";
}
if (!isNaN(X) || isNaN(Z)) s += "+(dummye34cf6=document.body.scrollTop)"; else {
s += "+(dummye34cf6=document.body.scrollTop)+document.body.clientHeight-this.offsetHeight-" + Z;
_ = "";
}
} else {
if (!isNaN(K) || isNaN(Q)) o += "+(dummye34cf6=document.documentElement.scrollLeft)"; else if (x.isIE6) {
o += "+(dummye34cf6=document.documentElement.scrollLeft)+document.documentElement.clientWidth-this.offsetWidth-" + Q;
r = "";
} else r += "+document.documentElement.scrollWidth-(dummye34cf6=document.documentElement.scrollLeft)-document.documentElement.clientWidth";
if (!isNaN(X) || isNaN(Z)) s += "+(dummye34cf6=document.documentElement.scrollTop)"; else if (x.isIE6) {
s += "+(dummye34cf6=document.documentElement.scrollTop)+document.documentElement.clientHeight-this.offsetHeight-" + Z;
_ = "";
} else _ += "+document.documentElement.scrollHeight - (dummye34cf6=document.documentElement.scrollTop) - document.documentElement.clientHeight";
}
e("left", o);
e("right", r);
e("width", a);
e("top", s);
e("bottom", _);
e("height", l);
}
function D() {
W();
E();
}
function E() {
ot.top = C(X) ? X : isNaN(X) ? "" : X + "px";
ot.bottom = C(Z) ? Z : isNaN(Z) ? "" : Z + "px";
if (tt != nt) {
ot.height = C(tt) ? tt : isNaN(tt) ? "" : tt + "px";
nt = tt;
}
}
function W() {
ot.left = C(K) ? K : isNaN(K) ? "" : K + "px";
ot.right = C(Q) ? Q : isNaN(Q) ? "" : Q + "px";
if (J != it) {
ot.width = C(J) ? J : isNaN(J) ? "" : J + "px";
it = J;
}
}
function P() {
var e, i, n, o, r, a, s = isNaN(J) ? t.offsetWidth : J, _ = isNaN(tt) ? t.offsetHeight : tt;
e = i = n = o = NaN;
r = a = 0;
switch (lt.charAt(0)) {
case "t":
e = 0;
break;

case "m":
e = "50%";
break;

case "b":
i = 0;
}
switch (lt.charAt(1)) {
case "l":
n = 0;
break;

case "c":
n = "50%";
break;

case "r":
o = 0;
}
"50%" == e && (r = -_ / 2);
"50%" == n && (a = -s / 2);
var l = 0;
ut >= 0 || !isNaN(e) || "string" == typeof e ? r += ut : l = -ut;
a += dt;
t.setMargin([ r + "px", 0, l + "px", a + "px" ].join(" ")).setTop(e).setBottom(i).setLeft(n).setRight(o);
}
function R(e) {
if (!y(e)) {
e = e.split(" ");
e[0] = parseInt(e[0], 10);
e[1] = parseInt(e[1], 10);
e[2] = parseInt(e[2], 10);
e[3] = parseInt(e[3], 10);
}
if (_t) {
e[1] = Math.max(0, e[1]);
e[2] = Math.max(0, e[2]);
}
ct = e;
return t;
}
function F(e) {
if (!y(e)) {
e = e.split(" ");
e[0] = parseInt(e[0], 10);
e[1] = parseInt(e[1], 10);
e[2] = parseInt(e[2], 10);
e[3] = parseInt(e[3], 10);
}
ht = [ Math.max(0, e[0]), Math.max(0, e[1]), Math.max(0, e[2]), Math.max(0, e[3]) ];
return t;
}
function M() {
if (ct) {
K < ct[3] + ht[3] && (K = ct[3]);
Q < ct[1] + ht[1] && (Q = ct[1]);
X < ct[0] + ht[0] && (X = ct[0]);
Z < ct[2] + ht[2] && (Z = ct[2]);
var e = x.isQuirks ? document.body : document.documentElement, i = isNaN(J) ? t.offsetWidth : J, n = e.clientWidth - i, o = e.clientHeight - t.offsetHeight;
n - K <= ct[1] + ht[1] && (K = n - ct[1]);
n - Q <= ct[3] + ht[3] && (Q = n - ct[3]);
o - X <= ct[2] + ht[2] && (X = o - ct[2]);
o - Z <= ct[0] + ht[0] && (Z = o - ct[0]);
}
}
function V(e, i) {
Z = Q = NaN;
X = i;
K = e;
M();
p();
return t;
}
function H(t, e) {
isNaN(K) && isNaN(Q) && (K = 0);
isNaN(X) && isNaN(Z) && (X = 0);
isNaN(K) || (K += t);
isNaN(Q) || (Q -= t);
isNaN(X) || (X += e);
isNaN(Z) || (Z -= e);
M();
p();
}
function q(e, i, n, o) {
if (e) {
isNaN(J) && (J = t.offsetWidth);
J = Math.max(n || 0, J + e);
}
if (i) {
isNaN(tt) && (tt = t.offsetHeight);
tt = Math.max(o || 0, tt + i);
}
M();
p();
t.fire("jx:resize");
return t;
}
function z(e) {
"none" != e && "block" != e || (ft = !0);
"none" != e && "hidden" != e && "false" != e && e ? Y() : U();
return t;
}
function U() {
if (ft) {
if ("none" != ot.display) {
ot.display = "none";
t.fire("hide");
}
} else if ("hidden" != ot.visibility) {
ot.visibility = "hidden";
t.fire("hide");
}
return t;
}
function G() {
return ft ? "none" != t.getStyle("display") : "visible" == t.getStyle("visibility");
}
function Y() {
if (ft) {
if ("block" != ot.display) {
ot.display = "block";
t.fire("show");
}
} else if ("visible" != ot.visibility) {
ot.visibility = "visible";
t.fire("show");
}
return t;
}
var X, Z, K, Q, J, tt, et, it, nt, ot = t.style, rt = t.ownerDocument, at = "BackCompat" == rt.compatMode, st = !(!rt.documentElement || !rt.documentElement.style.setExpression), _t = x.isIE6 || x.isIE && at && st;
X = Z = K = Q = J = tt = NaN;
et = null;
var lt = "", dt = 0, ut = 0;
t.dock = function(e, i, n) {
lt = e;
k(i) && (dt = i);
k(n) && (ut = n);
P();
t.on("jx:resize", P);
};
var ct, ht = [ 0, 0, 0, 0 ], ft = !1;
t.getStyles = function() {
return $(t);
};
t.getStyle = function(e) {
return b(t, e);
};
t.setAttributes = i;
t.getText = n;
t.setText = o;
t.setStyle = r;
t.setFloat = a;
t.setPosition = f;
t.setTop = s;
t.setBottom = l;
t.setLeft = _;
t.setRight = d;
t.setHeight = c;
t.setWidth = u;
t.applyConstraints = p;
t.setVisible = z;
t.setBounds = R;
t.setSnaps = F;
t.move = H;
t.moveTo = V;
t.resizeBy = q;
t.hide = U;
t.show = Y;
t.isVisible = G;
for (var gt in L) L.hasOwnProperty(gt) && (t[gt] = L[gt]);
if (e) for (var pt = t.firstChild; pt; ) {
w(pt, !0);
pt = pt.nextSibling;
}
return t;
}
var x = i(8), v = i(14), y = i(21), j = i(2), C = i(22), S = i(16), A = i(98), k = i(28), I = i(184).toCamelCase, N = {
create: f,
extend: w,
appendChild: p,
addChildren: m,
hasParentNode: g,
id: a,
get: l,
set: s,
unset: _,
mangleIDs: d,
generateID: a,
nativeGenerator: u,
getStyles: $,
processDeferredStyles: r
}, T = n, B = 1, D = "__JX__ID", E = {};
x.bugs.leaksMemory && x.bugs.leaksMemory(function() {
for (var t, e = 0, i = E.length; e < i; e++) {
t = E[e];
t.plugLeakage && t.plugLeakage();
}
});
var O = x.isTextContent, L = N.proto = {
$: function(t) {
return l(this.id + "__" + t);
},
destroy: function() {
if (this._destructors) for (var t = this._destructors, e = t.length, i = 0; i < e; i++) t[i].call(this);
this.parentNode && this.parentNode.removeChild(this);
this._autobinds && this.autounbind();
"function" == typeof this.empty && this.empty();
"function" == typeof this.unextendEvents && this.unextendEvents();
_(this);
x.bugs.leaksMemory && "function" == typeof this.plugLeakage && this.plugLeakage();
},
empty: function() {
for (var t; t = this.firstChild; ) "function" == typeof t.destroy ? t.destroy() : t.jx_wrapper ? t.jx_wrapper.destroy() : 1 == t.nodeType ? L.destroy.call(t) : this.removeChild(t);
},
onDestruction: function(t) {
(this._destructors || (this._destructors = [])).push(t);
},
autobind: function(t, e, i) {
t.on(e, i);
this._autobinds || (this._autobinds = []);
this._autobinds.push([ t, e, i ]);
},
autounbind: function(t, e, i) {
var n, o, r = this._autobinds;
if (t && e && i) for (n = r.length - 1; n >= 0; n--) {
o = r[n];
if (o[0] == t && o[1] == e && o[2] == i) {
r.splice(n, 1);
o[0].un(o[1], o[2]);
return;
}
} else if (t || e || i) ; else {
if (!r) return;
for (n = r.length - 1; n >= 0; n--) {
o = r[n];
o[0].un(o[1], o[2]);
}
}
},
getXY: function() {
var t, e, i = this.offsetParent;
t = this.offsetLeft;
e = this.offsetTop;
for (;i; ) {
t += i.offsetLeft;
e += i.offsetTop;
i = i.offsetParent;
}
return [ t, e ];
},
getFixedXY: function() {
var t = 0, e = 0, i = this;
if ("getBoundingClientRect" in this) {
var n = this.ownerDocument, o = n.body, r = n.defaultView || i.parentWindow || !1, a = i.getBoundingClientRect(), s = n.clientTop || o.clientTop || 0, _ = n.clientLeft || o.clientLeft || 0, l = r.pageYOffset || o.scrollTop, d = r.pageXOffset || o.scrollLeft;
e = a.top + l - s;
t = a.left + d - _;
} else {
e = i.offsetTop;
t = i.offsetLeft;
for (;i = i.offsetParent; ) {
e -= i.scrollTop, t -= i.scrollLeft;
e += i.offsetTop, t += i.offsetLeft;
}
}
return [ t, e ];
},
toggle: function() {
this.isVisible() ? this.hide() : this.show();
return this;
},
setOpacity: function(t) {
t = Math.max(Math.min(t, 1), 0);
x.isIE ? this.style.filter = (this.style.filter || "").replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi, "") + (t >= 1 ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * t + "), ") : this.style.opacity = t;
return this;
},
setBackgroundImage: function(t) {
var e = t;
e && x.isIE ? this.style.filter += 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + e + '",sizingMethod="scale"), ' : this.style.backgroundImage = 'url("' + t + '")';
return this;
},
setClass: function(t) {
this.className = t;
return this;
},
addClass: function(t) {
this.removeClass(t);
this.className += " " + t;
return this;
},
removeClass: function(t) {
for (var e = this.className.split(" "), i = 0; i < e.length; i++) e[i] == t && (e[i] = "");
this.className = e.join(" ");
return this;
},
setRotation: function(t) {
if (x.isFF) this.style.MozTransform = t ? "rotate(" + t + "deg)" : ""; else if (x.isSafari) this.style.WebkitTransform = t ? "rotate(" + t + "deg)" : ""; else if (x.isIE) {
this.style.filter = t ? "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + Math.round(t / 90) + ")" : "";
if (x.isIE8 && t) {
var e = this.getElementsByTagName("iframe");
if (x.isIE8 && e.length) {
e[0].style.filter = t ? "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + Math.round(t / 90) + ")" : "";
this.style.overflow = "visible";
}
}
}
return this;
},
setSelectable: function(t) {
function e() {
return !1;
}
if (t && "false" != t) {
this.unselectable = "on";
void 0 !== this.style.MozUserSelect ? this.style.MozUserSelect = "none" : void 0 !== this.style.WebkitUserSelect ? this.style.WebkitUserSelect = "none" : void 0 !== this.onselectstart && this.un("selectstart", e);
} else {
this.unselectable = "on";
void 0 !== this.style.MozUserSelect ? this.style.MozUserSelect = "none" : void 0 !== this.style.WebkitUserSelect ? this.style.WebkitUserSelect = "none" : void 0 !== this.onselectstart && this.on("selectstart", e);
}
return this;
},
setScrollTop: function(t) {
this.scrollTop = t;
return this;
}
};
x.leaksMemory && (L.plugLeakage = function() {
this.unextendEvents && this.unextendEvents();
this.$ = this.plugLeakage = this.destroy = this.empty = this.autobind = this.autounbind = this._autobinds = this._destructors = this.onDestruction = this.getXY = this.appendToParent = this.defaultPlacement = this.getStyles = this.getStyle = this.setAttributes = this.getText = this.setText = this.setStyle = this.setFloat = this.setPosition = this.setTop = this.setBottom = this.setLeft = this.setRight = this.setHeight = this.setWidth = this.applyConstraints = this.setVisible = this.setBounds = this.setSnaps = this.move = this.moveTo = this.resizeBy = this.hide = this.show = this.isVisible = this.toggle = this.setOpacity = this.setBackgroundImage = this.setClass = this.addClass = this.removeClass = this.setRotation = this.setSthisectable = this.setScrollTop = this.setBackground = this.setBackgroundPosition = this.setBorder = this.setBorderColor = this.setBorderStyle = this.setBorderWidth = this.setBorderTop = this.setBorderRight = this.setBorderBottom = this.setBorderLeft = this.setClear = this.setColor = this.setPadding = this.setMargin = this.setMarginTop = this.setMarginRight = this.setMarginBottom = this.setMarginLeft = this.setDisplay = this.setLineHeight = this.setLetterSpacing = this.setVisibility = this.setOutline = this.setOverflow = this.setOverflowX = this.setOverflowY = this.setFontFamily = this.setFontSize = this.setFontWeight = this.setFontStyle = this.setTextAlign = this.setTextDecoration = this.setTextTransform = this.setVerticalAlign = this.setZIndex = this.setCursor = this.setHref = this.setSrc = this.setChecked = this.setMedia = this.setName = this.setType = this.setValue = this.setDataNode = this.__jx__constructor = this.__jx__native = null;
});
var W, P;
W = "background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor".split(" ");
for (P = 0; P < W.length; P++) L[I("set-" + W[P])] = function(t) {
return function(e) {
try {
this.style[t] = e;
} catch (t) {}
return this;
};
}(I(W[P]));
W = "checked href media name src target type value".split(" ");
for (P = 0; P < W.length; P++) L[I("set-" + W[P])] = function(t) {
return function(e) {
this.setAttribute(t, e);
return this;
};
}(W[P]);
x.isIE && document.execCommand("BackgroundImageCache", !1, !0);
t.exports = N;
}, function(t, e, i) {
var n = i(45), o = {};
o.$Data = n;
t.exports = o;
}, function(t, e, i) {
function n(t, e, i) {
P = !0;
V.root = $ = t instanceof S ? t : new S("root");
w = i;
if (A.ACCOUNT_KEY || e) {
if (e) {
b = e;
$.$$("livechat.ui.mockup$bool").update(!0);
}
if (D.isMobileBrowser) {
$.$$("livechat.ui.mobile$bool").update(!0);
D.isMobileWhitelist && $.$$("livechat.ui.mobile_whitelist$bool").update(!0);
D.isMobileTablet && $.$$("livechat.ui.tablet$bool").update(!0);
}
window.$zopim_popout ? $.$$("livechat.ui.popout$bool").update(!0) : e || x.setIFrameOnly(!0);
var n, o = m(k);
if (!b) for (var r in O) if (Object.prototype.hasOwnProperty.call(O, r)) {
var a = I.DOM.getVariable(r);
"log" == r && a && "object" == typeof a && $.$("livechat").$("temp").update({
prev_log: a
});
"settings" == r && a && B.getKeys(a).length && $.$("livechat").$("settings").update({
cached$bool: !0
});
if ("object" == typeof a) {
n = B.getKeys(a);
n && n.length && B.fullyExtend(B.descendsObj(o, O[r]), a);
} else B.insertObj(O[r], a, o);
}
$.update(o);
if (!b && !g()) {
var s = v.isIOS ? "unload" : "beforeunload";
y.window.on(s, function() {
try {
p();
} catch (t) {}
});
}
var _ = I.getAllowCookieLaw();
"boolean" == typeof _ && $.$$("livechat.profile").update({
allow_cookies$bool: _
});
$.$$("livechat.settings.package").on("value", function(t) {
if (t) {
"color_customization_enabled$int" in t && t.color_customization_enabled$int && (W = 1);
"widget_customization_enabled$int" in t && t.widget_customization_enabled$int && (W = 2);
}
});
V.fire("init");
}
}
function o(t) {
j(t) && (P ? t() : V.on("init", t));
}
function r(t, e) {
T.sendChatMsg(t, e);
}
function a(t) {
var e = parseInt(w.getServerTime().toFixed(0), 10), i = e + "";
$.$("livechat").$("channel").$("log").$(i).write({
timestamp$int: e,
nick$string: $.$("livechat").$("profile").$("nick$string").getValue() || "",
display_name$string: $.$("livechat").$("profile").$("display_name$string").getValue() || "",
type$string: "chat.file.upload",
file_name$string: t.file_name || "",
file_type$string: t.file_type || "",
file_size$int: t.file_size || 0,
unverified$bool: !0,
__client$bool: !0
});
return e;
}
function s(t) {
if (t) {
var e = {};
"name" in t && (e.display_name$string = t.name + "");
"email" in t && (e.email$string = t.email + "");
"phone" in t && (e.phone$string = t.phone + "");
"department_id" in t && (e.department_id$int = t.department_id);
$.$$("livechat.profile").write(e);
return !0;
}
}
function _() {
N.clearIdentity();
I.clearAll();
$.$("livechat").$("ui").$("chat_button").$("unread_count$int").update(0);
$.$$("livechat.channel").update(null);
$.$$("profile").update(null);
}
function l() {
var t = $.$$("livechat.settings.cookie_law.enabled$bool").getValue(), e = $.$$("livechat.profile.allow_cookies$bool").getValue();
return !t || !1 !== e;
}
function d() {
$.$$("connection").update({
reconnect$bool: !0
});
}
function u(t) {
if (!b) {
var e = $.$$("livechat.account.key$string").getValue(), i = $.$$("livechat.profile.mid$string").getValue(), n = $.$("livechat").$("system").$("urls").$("social_signin_template$string").getValue();
t && e && i && window.open(B.getAuthLoginUrl(t, e, i, n), F + e, $.$$("livechat.ui.mobile$bool").getValue() ? "" : M);
}
}
function c() {
if ($.$$("livechat.profile.auth.type$string").getValue()) {
$.$$("livechat.profile.auth").write({
type$string: null
});
$.$$("livechat.profile").update({
display_name$string: "",
email$string: ""
});
} else $.$$("livechat.profile").write({
display_name$string: "",
email$string: ""
});
}
function h() {
$.$$("livechat.channel").write({
chatting$bool: !1
});
}
function f() {
return $.$$("livechat.ui.mockup$bool").getValue() ? 100 : W;
}
function g() {
var t = $.$("livechat").$("account").$("status$string").getValue();
return C(t, E) > -1;
}
function p() {
if (R.canStoreCookie()) {
var t = $.$("connection").getValue();
if (t && "status$string" in t) {
var e = new S("root");
e.update($.getValue());
for (var i = 0, n = L.length; i < n; i++) e.$$(L[i]).update(null);
var o, r;
for (o in O) if (Object.prototype.hasOwnProperty.call(O, o)) {
switch (o) {
case "settings":
r = w.getServerSettings("settings");
break;

case "log":
r = e.$("livechat").$("channel").$("chatting$bool").getValue() ? B.getLastLogEntries($.$$(O[o]), A.CHAT_LOG_REMEMBER_COUNT) : null;
break;

default:
r = e.$$(O[o]).getValue();
}
I.DOM.saveVariable(o, r);
}
e = null;
}
}
}
function m(t) {
if ("object" != typeof t || !t) return t;
var e = {};
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = m(t[i]));
Object.prototype.hasOwnProperty.call(t, H) && (e[H] = m(t[H]));
return e;
}
var $, b, w, x = i(3), v = i(8), y = i(14), j = i(20), C = i(31), S = i(95), A = i(18), k = i(94), I = i(93), N = i(44), T = i(176), B = i(11), D = i(35), E = [ "banned", "invalid_account_key" ], O = {
last_host: "connection.server$string",
chatting: "livechat.channel.chatting$bool",
account_status: "livechat.account.status$string",
settings: "livechat.settings",
ui: "livechat.ui",
notification: "livechat.profile.notification",
departments: "livechat.departments",
log: "livechat.channel.log",
read: "livechat.channel.read",
features: "livechat.features",
gates: "livechat.gates"
}, L = [ "livechat.settings.cached$bool", "livechat.ui.chat_window.menu_stack_name$string", "livechat.ui.chat_window.pre_chat_form.submitted$bool", "livechat.ui.post_chat_form.stack_index$int", "livechat.ui.offline_form.stack_index$int", "livechat.ui.theme_reload$bool", "livechat.ui.theme_loaded$bool", "livechat.ui.popout$bool", "livechat.ui.mobile$bool", "livechat.ui.mobile_overlay$bool", "livechat.ui.mobile_notifications$bool", "livechat.ui.chat_button.fully_visible$bool", "livechat.ui.chat_window.chat_panel.file_toast.error$string", "livechat.ui.departments", "livechat.ui.visitor.authenticated$bool", "livechat.ui.visitor.auth_status$string", "livechat.ui.history" ], W = 0, P = !1, R = {
sendChatMsg: r,
sendFile: a,
updateProfile: s,
clearAll: _,
reconnect: d,
canStoreCookie: l,
doExternalLogin: u,
doExternalLogout: c,
endChat: h,
getLimit: f,
isAccountError: g
}, F = "zlivechatexternallogin_", M = "width=500,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no", V = y.extend({
init: n,
root: $,
livechat: R,
afterInit: o
}), H = "toString";
t.exports = V;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "div");
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_Widget"
});
t.exports = n;
}, function(t, e, i) {
function n() {
function t(t) {
return t.replace(/^http:/, O ? "https:" : "http:");
}
function e() {
if (void 0 !== window.innerHeight) return window.innerHeight;
if (document.documentElement) return document.documentElement.offsetHeight;
var t = document.getElementsByTagName("body");
return t.length ? t[0].clientHeight : 0;
}
function i() {
if (void 0 !== window.innerWidth) return window.innerWidth;
if (document.documentElement) return document.documentElement.offsetWidth;
var t = document.getElementsByTagName("body");
return t.length ? t[0].clientWidth : 0;
}
function n() {
if (!r(a)) return a;
var t = document.createElement("div"), e = document.createElement("div"), i = t.style, n = e.style;
i.overflow = "auto";
i.width = i.height = "100px";
i.position = "absolute";
i.top = "-1000px";
n.width = "100%";
n.height = "200px";
t.appendChild(e);
document.body.appendChild(t);
a = t.offsetWidth - t.clientWidth;
document.body.removeChild(t);
return a;
}
var a, s, _ = navigator, l = _.userAgent.toLowerCase(), d = +(/trident.*rv:? *([0-9]+)/.exec(l) || [])[1] || !1, u = function() {
for (var t = 3, e = document.createElement("div"), i = e.getElementsByTagName("i"); e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", 
i[0]; ) ;
return t > 4 ? t : document.documentMode;
}(), c = 8 === u, h = 7 === u, f = 6 === u, g = !!window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera), p = l.indexOf("edge") > -1, m = "Google Inc." === _.vendor, $ = "Apple Computer, Inc." === _.vendor, b = !p && !u && !g && (m || $ || /webkit|khtml/.test(l)), w = +/\d+/.exec(/firefox\/\d+/i.exec(_.userAgent) || ""), x = -1 !== l.indexOf("iphone"), v = -1 !== l.indexOf("ipod"), y = -1 !== l.indexOf("ipad"), j = x || y || v, C = -1 !== l.indexOf("android"), S = -1 !== l.indexOf("wp7"), A = j || C || S, k = u && "msie" || w && "firefox" || g && "opera" || m && "chrome" || $ && "safari", I = "CSS1Compat" === document.compatMode, N = !I, T = u && N && document.documentElement && !!document.documentElement.style.setExpression, B = document.documentMode || u, D = -1 !== l.indexOf("windows") || -1 !== l.indexOf("win32"), E = -1 !== l.indexOf("macintosh") || -1 !== l.indexOf("mac os x"), O = "https:" === document.location.protocol, L = _.language || _.browserLanguage || _.userLanguage || _.systemLanguage, W = {
noBoxSizing: B <= 7,
ie: {
cssBottomRight: f,
cssFixed: f || T,
buggyCSS: f || T
}
}, P = "textContent" in document.createElement("div"), R = !1, F = null;
try {
if (window.CustomEvent && /\[native code\]|\[object CustomEventConstructor\]/.test(window.CustomEvent.toString())) {
new window.CustomEvent("testevent", {
bubbles: !1,
cancelable: !0,
detail: !0
});
R = !0;
F = window.CustomEvent;
}
} catch (t) {}
switch (k) {
case "msie":
case "firefox":
case "chrome":
s = +/\d+/.exec(new RegExp(k + "[ /]\\d+").exec(l) || "");
break;

default:
s = +/\d+/.exec(/version[ \/]\d+/.exec(l) || "");
}
var M = !1;
try {
var V = {
get passive() {
M = !0;
}
}, H = function() {};
window.addEventListener("test", H, V);
window.removeEventListener("test", H, V);
} catch (t) {
M = !1;
}
if (f) {
var q = [];
W.leaksMemory = function(t) {
o.isFunction(t);
q.push(t);
};
var z = function() {
for (var t = 0; t < q.length; t++) q[t]();
};
W.leaksMemory.remove = function(t) {
for (var e = q.length - 1; e >= 0; e--) t == q[e] && q.splice(e, 1);
};
window.attachEvent("onunload", z);
}
var U = "Shockwave Flash", G = "ShockwaveFlash.ShockwaveFlash", Y = "application/x-shockwave-flash", X = "application/x-java-vm";
return {
browser: k,
version: s,
isStrict: I,
isQuirks: N,
isOpera: g,
isSafari: $,
isWebKit: b,
isChrome: m,
isAndroid: C,
isIPhone: x,
isIPod: v,
isIPad: y,
isIOS: j,
isWP7: S,
isMobile: A,
isNewIE: d,
isEdge: p,
isIE: u,
isIE6: f,
isIE7: h,
isIE8: c,
isFF: w,
isCustomEvents: R,
CustomEvent: F,
engineIE: B,
bugs: W,
isWindows: D,
isMac: E,
isSecure: O,
secureURL: t,
hasFlash: function() {
var t, e = _.plugins && _.plugins[U];
if (e) {
t = _.mimeTypes && _.mimeTypes[Y];
return t && !t.enabledPlugin ? null : e.description;
}
if (window.ActiveXObject) try {
e = new window.ActiveXObject(G);
e.AllowScriptAccess = "always";
return e.GetVariable("$version");
} catch (t) {}
}(),
hasJava: function() {
var t = _.mimeTypes;
return u ? !S && ("javaEnabled" in _ && _.javaEnabled()) : t && (t = t[X]) && (t = t.enabledPlugin) ? t.name : void 0;
}(),
language: L,
getScrollbarSize: n,
getWindowClientHeight: e,
getWindowClientWidth: i,
isTextContent: P,
hasPassiveListeners: M
};
}
var o = i(98), r = i(25), a = n();
a.sniffBrowser = n;
t.exports = a;
}, function(t, e, i) {
function n() {
var t = l.root, e = t.$("livechat").$("ui").$("mobile$bool"), i = t.$("livechat").$("ui").$("popout$bool"), n = t.$("livechat").$("ui").$("mockup$bool"), r = t.$("livechat").$("ui").$("tablet$bool");
d.popout = a(i);
d.mockup = a(n);
d.tablet = a(r);
d.mobile = function(t) {
if (e.getValue()) {
t.addClass("mobile");
t.removeClass("desktop");
} else {
t.addClass("desktop");
t.removeClass("mobile");
}
};
d.rtl = function(t) {
function e() {
_.unLanguage(i);
}
function i() {
if (_.rtl()) {
t.addClass("rtl");
t.removeClass("ltr");
} else {
t.addClass("ltr");
t.removeClass("rtl");
}
}
if (_ && _.onLanguage) {
_.onLanguage(i);
i();
t.onDestruction(e);
} else t.addClass("ltr");
};
d.windowPosition = o(t.$("livechat").$("settings").$("theme").$("chat_window").$("position$string"));
d.windowPositionMobile = o(t.$("livechat").$("settings").$("theme").$("chat_window").$("position_mobile$string"));
d.windowSize = o(t.$("livechat").$("settings").$("theme").$("chat_window").$("size$string"));
d.buttonPosition = o(t.$("livechat").$("settings").$("theme").$("chat_button").$("position$string"));
}
function o(t, e) {
e = e || "";
return function(i, n, o) {
n = n || "";
i.autobind(t, "value", r(i, e + n, o));
};
}
function r(t, e, i) {
var n;
return function(o) {
if (n != o) {
n && t.removeClass(e + n);
n = o;
n && t.addClass(e + n);
"function" == typeof i && i(n);
}
};
}
function a(t, e) {
e = e || t.name.split("$")[0];
return function(i, n) {
i.autobind(t, "value", s(i, e, n));
};
}
function s(t, e, i) {
return function(n) {
t[n ? "addClass" : "removeClass"](e);
"function" == typeof i && i(n);
};
}
var _ = i(2), l = i(6), d = {};
l.afterInit(n);
t.exports = d;
}, function(t, e, i) {
var n, o = i(2), r = i(6), a = i(94), s = i(11), _ = i(95), l = o(3), d = o(4), u = o(5), c = o(6), h = o(7), f = o(8), g = o(9);
n = {
get: function(t) {
if (!t) return "";
var e, i;
if (t instanceof _) {
e = t.getValue();
i = s.descendsObj(a, t.path().slice(1).join("."));
} else {
e = r.root.$$(t).getValue();
i = s.descendsObj(a, t);
}
return (e && e.toString(10)) == (i && i.toString(10)) ? i : e || "";
},
status: {
online: o(10),
away: o(11),
offline: o(12)
},
error_message: {
text: o(13),
email: o(14),
textarea: o(15),
select: o(16),
radio: o(17),
checkbox: o(18),
checkbox_multiple: o(19),
department: o(20),
default: o(21)
},
placeholder: {
phone: o(22)
},
end_chat_menu_message: o(23),
external_login: {
facebook: o(24),
twitter: o(25),
google: o(26)
},
chat_log: {
agent_disconnected: l,
"chat.memberjoin": o(27),
"chat.memberleave": o(28),
"chat.changename": o(29),
"chat.visitorjoin": o(30),
"chat.visitorleave": o(31),
"chat.comment": o(32),
"chat.rating": {
good: o(33),
bad: o(34),
cancel: o(35)
}
},
chat_panel: {
name_is_typing: o(36),
names_are_typing: o(37),
agents_are_typing: o(38),
chattextarea_placeholder: o(39),
sendbutton_text: o(40),
new_message_below: o(41),
new_messages_below: o(42)
},
chat_button: {
unread_one: o(43),
unread_many: o(44),
mobile_greeting: {
online: o(45),
offline: o(46)
}
},
chat_notification: {
attachment: o(47)
},
connection_status: {
reconnecting: o(48),
idle_disconnect: o(49),
disconnected: o(50),
resuming: o(51),
fast_init: o(52)
},
cookie_law: {
disabled: o(53),
disabled_mobile: o(54),
privacy_policy: o(55),
request_use_cookies_golion: h
},
profile: {
unlink: o(56)
},
system_msg: {
queue: g
},
branding: {
title_zendesk: "Zendesk",
title_golion: f
},
pre_chat_offline_form: {
button_message: o(57),
button_chat: o(58),
department_any: o(59),
department_any_required: o(60),
button_disabled: o(61),
operating_hours: {
closed: o(62),
period: o(63)
}
},
file_upload: {
error: {
size: o(64),
type: o(65),
disabled: o(66),
default: o(67)
}
},
set_assignee: {
error: {
default: o(68),
zendesk_agent_not_found: c
}
},
datetime: {
days: [ o(69), o(70), o(71), o(72), o(73), o(74), o(75) ],
weekday: o(76),
weekend: o(77),
everyday: o(78),
all_day: o(79)
},
back: d,
history: {
view_more: u
}
};
t.exports = n;
}, function(t, e, i) {
function n(t, e) {
for (var i, n = document.createElement("div"), o = 0, r = L.length; o < r; o++) if (void 0 !== n.style[L[o]]) {
i = e[o];
break;
}
return i ? t ? function(t, e, n) {
t.autobind(e, i, n);
} : function(t, e, n) {
W && t.autounbind(e, i, n);
} : function() {};
}
function o(t, e) {
for (var i = {}, n = 0, o = e.length; n < o; n++) {
var r = e[n];
r in t && (i[r] = t[r]);
}
return i;
}
function r() {
for (var t, e, i = arguments.length, n = 1, o = arguments[0] || {}; n < i; n++) if (null != (t = arguments[n])) for (e in t) Object.prototype.hasOwnProperty.call(t, e) && o !== t[e] && (o[e] = t[e]);
return o;
}
function a(t, e) {
for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) if (e[i] && e[i].constructor && e[i].constructor === Object) {
t[i] = t[i] || {};
a(t[i], e[i]);
} else t[i] = e[i];
return t;
}
function s(t, e) {
for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
if (!(i in t)) continue;
e[i] && e[i].constructor && e[i].constructor === Object ? s(t[i], e[i]) : delete t[i];
}
return t;
}
function _() {
if (void 0 === k) try {
k = l();
} catch (t) {}
return k;
}
function l() {
if (!window.getComputedStyle) return !1;
var t = document.createElement("div"), e = "border-box";
document.body.appendChild(t);
t.style.height = "10px";
t.style.padding = "5px";
t.style.boxSizing = e;
t.style.webkitBoxSizing = e;
t.style.mozBoxSizing = e;
var i = parseInt(window.getComputedStyle(t).height, 10);
document.body.removeChild(t);
return 10 != i;
}
function d(t) {
var e = t.getComputedStyle();
if ("auto" == e.height) return t.getHeight();
var i = parseInt(e.height, 10) || 0;
R.computedHeightBoxSizingBug() && (i += (parseInt(e.paddingTop, 10) || 0) + (parseInt(e.paddingBottom, 10) || 0) + (parseInt(e.borderTopWidth, 10) || 0) + (parseInt(e.borderBottomWidth, 10) || 0));
return i + "px";
}
function u(t) {
function e() {
this.addClass("hover");
}
function i() {
this.removeClass("hover");
}
if (I.bugs.noBoxSizing) {
t.on("mouseover", e);
t.on("mouseout", i);
}
}
function c(t, e) {
for (var i, n = e.split("."); n.length; ) {
i = n.shift();
N(t[i], !0) && (t[i] = {});
t = t[i];
}
return t;
}
function h(t, e) {
if (0 === e.indexOf(t.path)) {
for (var i, n = t.path.split(".").length, o = e.split(".").slice(n), r = t.update; o.length; ) {
i = o.shift();
if (!(i in r)) return;
r = r[i];
}
return r;
}
}
function f(t, e, i) {
t = t.split(".");
var n = t.pop();
if (n) {
for (var o = 0, r = t.length; o < r; o++) {
t[o] in i || (i[t[o]] = {});
i = i[t[o]];
}
i[n] = e;
}
}
function g(t) {
for (var e = t.split("."), i = "." + e.splice(e.length - 2, 2).join("."); e.length; ) {
var n = {
domain: i,
path: "/"
};
B.set("zte2095", "1", n);
if ("1" == B.get("zte2095")) {
B.remove("zte2095", n);
break;
}
i = "." + e.pop() + i;
}
return i;
}
function p(t) {
return M.test(t);
}
function m(t) {
return F.test(t);
}
function $(t) {
if (t && "object" == typeof t) {
var e = [];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
return e;
}
}
function b(t) {
if (window.Image) try {
var e = new window.Image();
e.onload = e.onerror = function() {
t(!(1 != this.width || 1 != this.height));
};
e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
} catch (e) {
t();
} else t();
}
function w(t, e) {
t = parseInt(t, 10);
isNaN(t) && (t = 0);
var i = t < 0;
t = Math.abs(t).toString().split("");
for (var n = Math.max(e - t.length, 0); n--; ) t.unshift("0");
i && t.unshift("-");
return t.join("");
}
function x(t, e) {
function i(t, e, i) {
return i.replace("<hours>", t).replace("<minutes>", e);
}
var n = T(0), o = T(1), r = T(2), a = "24" === e ? 24 : 12, s = function(t, e) {
return t - Math[t > 0 ? "floor" : "ceil"](t / e) * e;
}(Math[t > 0 ? "floor" : "ceil"](t / 60), a), _ = R.pad(Math.abs(t) % 60, 2);
if (24 === a) return i(R.pad(s, 2), _, n);
var l = 0 === s ? 12 : s;
return Math.abs(t / 60) % 24 < 12 ? i(l, _, o) : i(l, _, r);
}
function v(t) {
return t && t.replace(D.FILE_REPLACE_SOURCE, D.FILE_REPLACE_RESULT);
}
function y(t, e) {
e = parseInt(e, 10);
if (!e) return t.getValue();
var i = t.getKeys(), n = i.length, o = {};
if (n <= e) return t.getValue() || o;
for (var r = 0; r < n; r++) i[r] = parseInt(i[r], 10);
i = i.sort().slice(-e);
var a, s = t.getValue();
if (!s) return o;
for (r = 0, n = i.length; r < n; r++) {
a = i[r];
o[a] = s[a];
}
return o;
}
function j(t, e) {
var i;
if (t.leaf && t.parentNode) {
i = {};
i[t.name] = e;
t.parentNode.write(i);
} else t.write(e);
}
function C() {
if (I.isNewIE) try {
"body" !== document.activeElement.nodeName.toLowerCase() && document.activeElement.focus();
} catch (t) {}
}
function S() {
window.console && window.console.warn && window.console.warn("The Zopim widget embed code is invalid. Please email chat@zendesk.com with your account key: " + D.ACCOUNT_KEY);
}
function A(t, e, i, n) {
return (n || D.AUTH_URL).replace("$NAME", t).replace("$KEY", e).replace("$MID", i);
}
var k, I = i(8), N = i(25), T = i(2), B = i(177), D = i(18), E = "-webkit- -moz- -o- -ms- ".split(" "), O = "webkit Moz O ms ".split(" "), L = [ "transition", "MozTransition", "OTransition", "WebkitTransition" ], W = [ "transitionend", "transitionend", "otransitionend", "webkitTransitionEnd" ], P = [ "animationend", "animationend", "oanimationend", "webkitAnimationEnd" ], R = {
contains: function() {
var t = document.documentElement;
return t.compareDocumentPosition ? function(t, e) {
t = t.dom || t;
e = e.dom || e;
return !!(16 & t.compareDocumentPosition(e));
} : t.contains ? function(t, e) {
t = t.dom || t;
e = e.dom || e;
var i = 9 === t.nodeType ? t.documentElement : t, n = e.parentNode;
return t === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n));
} : function(t, e) {
t = t.dom || t;
e = e.dom || e;
for (;e = e.parentNode; ) if (e === t) return !0;
return !1;
};
}(),
onTransitionEnd: n(!0, W),
unTransitionEnd: n(!1, W),
onAnimationEnd: n(!0, P),
unAnimationEnd: n(!1, P),
css_prefixes: E,
cssom_prefixes: O,
isStyleSupported: function() {
function t(t) {
for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = (t + " " + O.join(e + " ") + e).split(" "), o = 0; o < n.length; o++) if (void 0 !== i[n[o]]) return !0;
return !1;
}
var e = document.createElement("div"), i = e.style;
return t;
}(),
pick: o,
shallowExtend: r,
fullyExtend: a,
fullyDelete: s,
computedHeightBoxSizingBug: _,
getComputedHeight: d,
hoverFix: u,
getEffectiveTLD: g,
descendsObj: c,
insertObj: f,
getValueByReference: h,
isDefaultName: m,
getKeys: $,
supportsDataURI: b,
isIE: function() {
return I.isIE || /Trident\//.test(window.navigator.userAgent);
}(),
pad: w,
formatMinutesAsHours: x,
replaceFileHostname: v,
getLastLogEntries: y,
writeNode: j,
isAgentNick: p,
refocusActiveElement: C,
warnBadEmbed: S,
getAuthLoginUrl: A
}, F = /^Visitor [0-9]{3,}$/, M = /^agent:[0-9]+/i;
t.exports = R;
}, function(t, e) {
function i(t) {
return !!t && "false" != t;
}
t.exports = i;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "div";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_div"
});
t.exports = n;
}, function(t, e, i) {
function n(t, e) {
var i = {}, n = {}, o = function(e) {
return !t.nodeType && t != window && t != document || ("FORM" != t.tagName || "submit" != e) && (!u.isCustomEvents && (u.isFF && u.isFF < 9 ? !document.createEvent("event")[e.toUpperCase()] : void 0 === t["on" + e]));
}, r = function(e, n) {
if (!e && "function" != typeof n) throw "bad arguments to on / addEventListener";
if (!(e in i)) {
i[e] = [];
o(e) || a(e);
}
i[e].push(n);
return t;
}, a = function(e) {
if (!(e in n)) {
n[e] = function(n) {
n && (n.stopPropagation || h(n));
var o, r = i[e], a = r.length, s = !0;
r._active = !0;
for (o = 0; o < a; o++) try {
if (!r[o]) continue;
!1 === r[o].call(t, u.isCustomEvents && n instanceof u.CustomEvent ? n.detail : n) && (s = !1);
} catch (t) {
c.fire("error", t);
}
r._active = !1;
if (r._dirty) {
for (o = 0; o < a; o++) if (!r[o]) {
o == a - 1 ? r.pop() : r[o--] = r.pop();
a--;
}
r._dirty = !1;
}
if (!1 === s) {
if (n) {
n.preventDefault();
n.returnValue = !1;
}
return !1;
}
};
t.attachEvent ? t.attachEvent("on" + e, n[e]) : t.addEventListener && t.addEventListener(e, n[e], !1);
}
}, s = function(e) {
var o = n[e];
if (o) {
t.attachEvent ? t.detachEvent("on" + e, o) : t.addEventListener && t.removeEventListener(e, o, !1);
delete n[e];
delete i[e];
}
}, _ = function(e, o) {
var r = i[e];
if (r) {
for (var a = 0, _ = r.length; a < _; a++) if (r[a] === o) {
1 == r.length ? n[e] ? s(e) : delete i[e] : r._active ? (r[a] = null, r._dirty = !0) : a == _ - 1 ? r.pop() : r[a] = r.pop();
break;
}
return t;
}
}, l = function() {
if (i && n) {
for (var t in n) n.hasOwnProperty(t) && s(t);
i = n = null;
}
}, d = function(e, n) {
if (!u.isCustomEvents || o(e)) {
var r = i[e], a = !0;
if (r && r.length) {
r._active = !0;
var s, _, l;
for (s = 0, _ = r.length; s < _; s++) try {
if (!r[s]) continue;
l = r[s].call(t, n);
!1 === l && (a = !1);
} catch (t) {
c.fire("error", t);
}
r._active = !1;
if (r._dirty) {
for (s = 0; s < _; s++) if (!r[s]) {
s == _ - 1 ? r.pop() : r[s--] = r.pop();
_--;
}
r._dirty = !1;
}
}
return a;
}
return t.dispatchEvent(new u.CustomEvent(e, {
bubbles: !1,
cancelable: !0,
detail: n
}));
}, h = function(t) {
t.preventDefault = h.preventDefault;
t.stopPropagation = h.stopPropagation;
t.target = t.srcElement;
};
h.preventDefault = function() {
this.returnValue = !1;
};
h.stopPropagation = function() {
this.cancelBubble = !0;
};
var f = {
fire: d,
on: r,
un: _,
unextendEvents: l
};
if (e) return f;
for (var g in f) f.hasOwnProperty(g) && (t[g] = f[g]);
u.bugs.leaksMemory && u.bugs.leaksMemory(function() {
for (var e in f) f.hasOwnProperty(e) && (t[e] = null);
});
return t;
}
function o(t) {
s(0, t);
}
function r(t) {
s(1, t);
}
function a(t) {
s(2, t);
}
function s(t, e) {
t <= h ? e() : f[t].push(e);
}
function _(t) {
for (;h < t; ) {
h++;
for (var e = 0; e < f[h].length; e++) f[h][e]();
f[h] = null;
}
}
function l() {
h > 0 || (document.body && document.body.firstChild ? _(1) : window.setTimeout(l, 200));
}
function d() {
_(2);
}
var u = i(8), c = {
extend: n,
body: n(document.body, !0),
window: n(window, !0),
document: n(document, !0),
runAfterScriptReady: o,
runAfterFirstChildReady: r,
runAfterDomReady: a
};
c.extend(c);
var h = 0, f = [ [], [], [], [] ];
l();
!function() {
var t;
if (u.isSafari) t = window.setInterval(function() {
if (/loaded|complete/i.test(document.readyState)) {
window.clearInterval(t);
d();
}
}, 20); else if (document.addEventListener) /loaded|complete/i.test(document.readyState) ? d() : document.addEventListener("DOMContentLoaded", d, !1); else if (u.isIE) {
window.attachEvent("onload", d);
var e = document.createElement("document:ready");
t = window.setInterval(function() {
if (/loaded|complete/i.test(document.readyState)) {
e = null;
window.clearInterval(t);
d();
} else {
try {
e.doScroll("left");
} catch (t) {
return;
}
e = null;
window.clearInterval(t);
d();
}
}, 200);
}
}();
t.exports = c;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
selectable: "false",
class: "icon_font"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var c = function() {
var t = {
zopim: "&#xe000;",
message: "&#x1f4ac;",
tick: "&#x2714;",
cross: "&#x2716;",
popout: "&#x2197;",
popin: "&#x2199;",
minimize: "&#x2212;",
plus: "&#x002b;",
smiley: "&#x263a;",
happy: "&#xe001;",
happier: "&#xe002;",
sad: "&#xe003;",
thumbsup: "&#x1f44d;",
thumbsdown: "&#x1f44e;",
sadder: "&#xe004;",
brand: "&#xe005;",
brand_suffix: "&#xe006;",
brand_extended: "&#xe005;&#xe006;",
avatar_placeholder: "&#xe007;",
email: "&#x1f4e7;",
facebook: "&#xe008;",
twitter: "&#xe009;",
google: "&#xe00a;",
facebook_out: "&#xe00d;",
twitter_out: "&#xe00c;",
google_out: "&#xe00b;",
badge_default: "&#xe00e;",
warning_sign: "&#x26a0;",
arrow_left: "&#x2190;",
arrow_up: "&#x2191;",
arrow_down: "&#x2193;",
arrow_down_long: "&#x21e9;",
arrow_right: "&#x2192;",
pencil: "&#x270e;",
dustbin: "&#xe00f;",
sound_on: "&#x1f50a;",
sound_off: "&#x1f507;",
send: "&#x000BB;",
upload: "&#x21e7;",
exclamation: "&#x0021;",
brand_zendesk: "&#xe010;",
google_2016: "&#xe011;",
google_2016_out: "&#xe012;",
paperclip: "&#x1f4ce;",
picture: "&#x1f5bc;",
zendesk_2016: "&#xe013;",
zendesk_chat_2016: "&#xe014;",
messenger_squircle: "&#xe015;",
twitter_squircle: "&#xe016;",
messenger_round: "&#xe017;",
twitter_round: "&#xe018;",
clock_stroke: "&#x1f550;",
google_2019_r: "&#xe019;",
google_2019_y: "&#xe020;",
google_2019_g: "&#xe021;",
google_2019_b: "&#xe022;"
};
u.setIcon = function(e) {
u.setHTML(t[e] || e || "");
};
u.setFont = function(t) {
u.setFontFamily(t || "");
};
}();
for (var h in c) u[h] = c[h];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontFamily: 'zopim, "Segoe UI Symbol", "Arial Unicode MS", "Lucida Sans Unicode", sans-serif',
speak: "none",
fontStyle: "normal",
fontWeight: "normal",
lineHeight: 1,
WebkitFontSmoothing: "antialiased"
},
"&:focus": {
outline: "none"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_IconFont"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i) {
a.ok("function" == typeof t, "1st argument to nextTick must be a function");
if (i) for (var n = l.length; n-- > 0; ) if (l[n][0] === t && l[n][1] === e) return;
l.push([ t, e ]);
r || (r = setTimeout(o, 0));
}
function o() {
var t = +new Date() + _, e = l;
l = [];
r && (r = clearTimeout(r));
for (var i = 0, n = e.length; i < n; i++) {
try {
e[i][0].apply(e[i][1]);
} catch (t) {
s.fire("error", t);
}
if (+new Date() > t) {
if (i < n - 1) {
e.splice(0, i + 1);
if (l.length) l = e.concat(l); else {
l = e;
r = setTimeout(o, 0);
}
}
break;
}
}
}
var r, a = i(98), s = i(14), _ = 100, l = [];
n.tick = o;
t.exports = n;
}, function(t, e, i) {
var n = i(1), o = i(3), r = i(2), a = i(0), s = i(69), _ = s, l = i(7), d = i(6), u = i(9);
s = function(t, e, i, n, a) {
function l() {
c.fixOverflowTitle();
}
if (!(this instanceof s)) return new s(t, e, i, n, a);
if (!s.__jx__jcss_generated) {
o.generate(this, s.prototype.__jx__fqname, s.__jx__jcss, null, s);
s.__jx__jcss_generated = !0;
}
a || (a = {});
a.type || (a.type = "button");
_.call(this, t, e, i, n, a);
u.mobile(this);
u.rtl(this);
var c = this;
if (n && 1 == n.length && ("string" == typeof n[0] || n[0].bind)) {
if (r && r.onLanguage) {
r.onLanguage(l);
this.onDestruction(function() {
r.unLanguage(l);
});
}
this.autobind(d.root.$("livechat").$("ui").$("theme_loaded$bool"), "value", function(t) {
t && c.fixOverflowTitle();
});
}
};
s.__jx__jcss = {
"**self": {
appearance: "none",
width: "48%",
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap",
color: "$$buttonColor",
background: "$$buttonBg",
"paddingTop, paddingBottom": "$$buttonPadding",
"paddingLeft, paddingRight": "$$buttonPaddingHorizontal",
borderWidth: "$$buttonBorderWidth",
borderStyle: "$$buttonBorderStyle",
borderColor: "$$buttonBorderColor",
borderRadius: "$$buttonRadius",
boxShadow: "$$buttonShadow",
fontWeight: "$$buttonFontWeight",
wordWrap: "normal",
"*overflow": "visible",
cursor: "pointer",
"&:hover, &:focus": {
color: "$$buttonHoverColor",
background: "$$buttonHoverBg",
borderColor: "$$buttonHoverBorderColor",
boxShadow: "$$buttonHoverShadow"
},
"&:active": {
color: "$$buttonActiveColor",
background: "$$buttonActiveBg",
borderColor: "$$buttonActiveBorderColor",
boxShadow: "$$buttonActiveShadow"
}
},
"&.secondary": {
color: "$$buttonSecColor",
background: "$$buttonSecBg",
borderColor: "$$buttonSecBorderColor",
boxShadow: "$$buttonSecShadow",
"&:hover, &:focus": {
color: "$$buttonSecHoverColor",
background: "$$buttonSecHoverBg",
borderColor: "$$buttonSecHoverBorderColor",
boxShadow: "$$buttonSecHoverShadow"
},
"&:active": {
color: "$$buttonSecActiveColor",
background: "$$buttonSecActiveBg",
borderColor: "$$buttonSecActiveBorderColor",
boxShadow: "$$buttonSecActiveShadow"
}
},
"&.disabled": {
opacity: "0.5",
cursor: "default",
"&:hover, &:focus": {
color: "$$buttonColor",
background: "$$buttonBg",
borderColor: "$$buttonBorderColor",
boxShadow: "$$buttonShadow"
}
},
"&.fit": {
width: "auto",
"paddingLeft, paddingRight": "$$buttonPadding"
},
"&.wide": {
width: "100%"
},
"&.short": {
"paddingTop, paddingBottom": "$$buttonShortPadding"
},
"&.short.mobile": {
"paddingTop, paddingBottom": "$$buttonPadding"
},
"&.short.mobile.short_mobile": {
"paddingTop, paddingBottom": "$$buttonShortPadding"
}
};
s.prototype = a(_.prototype);
n(s, _, {
fqname: "meshim_widget_widgets_Button"
});
var c = [ "fontFamily", "fontSize", "fontWeight", "fontStyle" ];
s.prototype.fixOverflowTitle = function() {
if ("en" != r.language) {
s.dummy || (s.dummy = new l(this.doc.body, null, null, null, {
position: "absolute",
visibility: "hidden"
}));
var t = this.getText(), e = this.getComputedStyle();
if (e) {
for (var i = 0, n = c.length; i < n; i++) s.dummy.style[c[i]] = e[c[i]];
s.dummy.setText(t);
var o = s.dummy.getWidth(), a = parseInt(e.width, 10) || 0 - (parseInt(e.paddingLeft, 10) || 0) - (parseInt(e.paddingRight, 10) || 0) - (parseInt(e.borderLeftWidth, 10) || 0) - (parseInt(e.borderRightWidth, 10) || 0);
this.setTitle(o > 0 && a > 0 && o > a ? t : "");
}
} else this.setTitle("");
};
s.prototype.__jx__super = _;
t.exports = s;
}, function(t, e, i) {
function n() {
if (window.$zopim && window.$zopim.s) return window.$zopim.s.src;
for (var t, e = document.getElementsByTagName("script"), i = /.*zopim.(com|net|org)\//, n = 0, o = e.length; n < o; n++) {
t = e[n].src || "";
if (i.test(t)) return t;
}
return "";
}
function o(t) {
t && !g.test(t) && (t = null);
var e = "id." + (u.brandDomain || "zopim.com");
return "https://" + (t || e) + "/authenticated/web/jwt";
}
function r(t) {
if (t) {
if (p.test(t)) return t.replace(p, "$1.zopim.com$2");
g.test(t) || (t = null);
}
var e = "widget-mediator." + (u.brandDomain && u.brandDomain.replace(/:[0-9]+/, "") || "zopim.com");
return t || e;
}
var a = i(25), s = i(45), _ = i(8), l = i(381), d = i(64), u = function() {
for (var t = n(), e = [ /\/?[?]/, /\/livechat\// ], i = [], o = 0; o < e.length; o++) {
i = t.split(e[o]);
if (i.length) break;
}
var r = i[1], a = i[0], s = /^(https?:)?\/\/[^\/]+/.exec(a), _ = a.replace(/^(https?:)?\/\//i, "").split("/")[0], l = _.replace(/(.+\.)(?=.+\..+)/, ""), d = i[0].split("/");
d = d.pop() == _ ? i[0] : d.join("/");
s = s && "zopim.com" !== _ ? s[0] : "https://v2.zopim.com";
return {
accountKey: r,
brandDomain: l,
baseURL: d,
rootURL: s
};
}(), c = "https://v2.zopim.com/widget", h = c + "/images", f = l.map([ ".zopim.com", ".zopim.org", ".zdch.at", ".zd-dev.com", ".bre-zd.com", ".zendesk-dev.com" ], d.escape), g = new RegExp("^[a-z][a-z0-9_-]*(\\.[a-z][a-z0-9_-]*)*(" + f.join("|") + ")(:\\d+)?$", "i"), p = /^([a-z][a-z0-9_-]*)(:\d+)?$/i;
a(s.baseURL, !0) && (s.baseURL = _.secureURL(u.baseURL));
var m = {
ASSETS_URL: c,
IMAGES_URL: h,
SOUNDS_URL: "https://v2.zopim.com/widget/sounds",
FONTS_URL: "https://v2.zopim.com/widget/fonts",
ASSETS_LEGACY: document.location.protocol + "//cdn.zopim.com/assets",
BRANDING_URL: "https://www.zopim.com",
AVATARS: {
CONCIERGE: h + "/avatar_simple_agent.png",
AGENT: h + "/avatar_simple_agent.png",
VISITOR: h + "/avatar_simple_visitor.png",
DEFAULT: h + "/avatar_simple_visitor.png"
},
ACCOUNT_KEY: u.accountKey,
BRAND_DOMAIN: u.brandDomain,
COUNTRY_CODE: function() {
var t = 'ES'.toUpperCase();
"<" == t.charAt(0) && (t = "geo");
return t;
}(),
AUTH_URL: "https://www.zopim.com/auth/$NAME/$KEY-$MID",
AUTH_LOGOUT_URL: "https://www.zopim.com/auth/logout/$KEY-$MID",
AUTH_SERVER_URL: o(),
IS_POPOUT: window.$zopim_popout,
POPOUT_WINDOW_PREFIX: "zlivechatpopout_",
POPOUT_URL: u.rootURL + "/widget/livechat.html",
CALLBACK_FILE_UPLOAD_PATH: "/client/widget/upload",
FILE_UPLOAD_PATH: "/client/widget/uploads",
FILE_UPLOAD_MAX: 20971520,
RESEND_MSG_TIMEOUT: 5e3,
FILE_REPLACE_SOURCE: /^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,
FILE_REPLACE_RESULT: "$1io$2",
CHAT_LOG_REMEMBER_COUNT: 10,
getAuthServerURL: o,
getMediatorHost: r
};
t.exports = m;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "label");
a.call(this, t, e, i, o, r);
null == r.selectable && this.setSelectable(!1);
}
var o = i(1), r = i(0), a = i(7);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_Label"
});
t.exports = n;
}, function(t, e) {
function i(t) {
return "function" == typeof t;
}
t.exports = i;
}, function(t, e) {
function i(t) {
return "[object Array]" == Object.prototype.toString.call(t);
}
t.exports = i;
}, function(t, e) {
function i(t) {
return "string" == typeof t;
}
t.exports = i;
}, function(t, e, i) {
function n(t) {
return l(t) && "%" == t.substr(t.length - 1) ? parseInt(t, 10) + "%" : parseInt(t, 10);
}
function o() {
if (!o.alreadyHacked) {
o.alreadyHacked = 1;
if (_.isStrict) {
document.body.parentNode.style.background = "#fff url(https://) fixed";
document.body.className = document.body.className;
} else if ("fixed" != document.body.currentStyle.backgroundAttachment) {
if ("none" != document.body.currentStyle.backgroundImage) {
var t, e, i = document.createElement("div"), n = i.style, r = document.body.currentStyle, a = !1, s = 0;
n.backgroundAttachment = r.backgroundAttachment;
n.backgroundColor = r.backgroundColor;
n.backgroundImage = r.backgroundImage;
n.backgroundPositionX = r.backgroundPositionX;
n.backgroundPositionY = r.backgroundPositionY;
n.backgroundRepeat = r.backgroundRepeat;
n.position = "absolute";
n.zIndex = -1;
n.top = n.left = 0;
n.width = "100%";
document.body.insertBefore(i, document.body.firstChild);
var l = function() {
if (!a && s) {
t += document.body.clientWidth - s;
n.width = t + "px";
s = document.body.clientWidth;
}
e || (e = setTimeout(function() {
n.width = 0;
document.body.className = document.body.className;
t = Math.max(document.body.scrollWidth, document.body.clientWidth);
n.width = t + "px";
s = document.body.clientWidth;
a = document.body.scrollWidth > document.body.clientWidth;
e = null;
}, 0));
};
setTimeout(l, 0);
n.setExpression("height", 'document.body.scrollHeight+"px"');
l();
}
document.body.style.backgroundImage = "url(https://)";
document.body.style.backgroundAttachment = "fixed";
}
}
}
function r(t) {
for (;t.defaultPlacement; ) t = t.defaultPlacement;
return t;
}
function a(t, e, i, n, o) {
if (!(this instanceof a)) return new a(t, e, i, n, o);
if (t) {
o || (o = {});
this.jx_id = e = e || d.generateID();
this._top = this._bottom = this._left = this._right = this._width = this._height = NaN;
this._position = null;
this.pos = "";
this.offsetx = 0;
this.offsety = 0;
this._snaps = [ 0, 0, 0, 0 ];
this.useDisplay = !1;
this.doc = this.ownerDocument = t.ownerDocument;
this.parentNode = t;
this.attributes = o;
this.tagName = o.tagName;
this.isNew = !0;
this.dom = this.doc.createElement(this.tagName);
this.dom.jx_wrapper = this;
this.style = this.dom.style;
this.children = [];
this._autobinds = [];
x.call(this);
n && this.addChildren(n);
t.appendChild(t instanceof a ? this : this.dom);
this.setStyle(i);
this.setAttributes(o);
this.__jx__fqname && this.addClass(this.__jx__fqname);
e && d.set(e, this);
}
}
var s = i(1), _ = i(8), l = i(22), d = i(4), u = i(0), c = i(21), h = i(31), f = i(2), g = i(16), p = i(98), m = i(28), $ = i(12), b = i(25), w = i(184).toCamelCase, x = i(183);
_.isIE && document.execCommand("BackgroundImageCache", !1, !0);
var v = "background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor min-height min-width max-height max-width".split(" "), y = "title checked href media name src target dir data-test-id".split(" "), j = _.bugs.ie.cssFixed;
a.prototype = u(x.prototype);
s(a, x, {
skip_fqname: !0,
fqname: "jx_ui_HTMLElement"
});
a.prototype.addChildren = function(t) {
var e = t && t.length;
if (t && e) for (var i, n, o = r(this), a = o.ownerDocument, s = 0; s < e; s++) {
i = t[s];
if (c(i)) o.appendChild(i); else {
n = a.createTextNode(i);
o.appendChild(n);
"function" == typeof i.bind && i.bind(n);
}
}
};
a.prototype.appendChild = function(t) {
if (c(t)) return t[0](this, t[1], t[2], t[3], t[4]);
-1 == h(t, this.children) && 3 != t.nodeType && this.children.push(t);
t.parentNode && t.parentNode != this && t.parentNode.removeChild(t.parentNode instanceof a ? t : t.dom || t);
t.dom && (t.parentNode = this);
this.dom.appendChild(t.dom || t);
return t;
};
a.prototype.removeChild = function(t) {
try {
if (t.dom) {
this.dom.removeChild(t.dom);
t.parentNode = null;
} else this.dom.removeChild(t);
var e = h(t, this.children);
if (-1 != e) return this.children.splice(e, 1);
} catch (t) {}
};
a.prototype.insertBefore = function(t, e) {
var i = h(e, this.children);
e && -1 == i && (e = null);
if (t.parentNode) {
var n = h(t, this.children);
if (-1 != n) {
this.children.splice(n, 1);
i > n && i--;
} else t.parentNode.removeChild(t);
}
t.dom && (t.parentNode = this);
e ? this.children.splice(i, 0, t) : this.children.push(t);
this.dom.insertBefore(t.dom || t, e ? e.dom || e : null);
};
a.prototype.insertAfter = function(t, e) {
this.insertBefore(t, e && e.getNextSibling());
};
a.prototype.prependTo = function() {};
a.prototype.cloneNode = function(t) {
return this.dom.cloneNode(t);
};
a.prototype.getNextSibling = function() {
return this.dom.nextSibling && this.dom.nextSibling.jx_wrapper;
};
a.prototype.getPreviousSibling = function() {
return this.dom.previousSibling && this.dom.previousSibling.jx_wrapper;
};
a.prototype.getFirstChild = function() {
return this.dom.firstChild && this.dom.firstChild.jx_wrapper;
};
a.prototype.getLastChild = function() {
return this.dom.lastChild && this.dom.lastChild.jx_wrapper;
};
var C = _.isTextContent;
a.prototype.getText = function() {
return this.dom.textContent || this.dom.innerText || "";
};
a.prototype.setText = function(t) {
if (this.dom) {
f && f.unbind && f.unbind(this.dom);
t && "function" == typeof t.bind && t.bind(this.dom);
C ? this.dom.textContent = t : this.dom.innerText = t;
return this;
}
};
a.prototype.getHTML = function() {
return this.dom.innerHTML;
};
a.prototype.setHTML = function(t) {
this.dom.innerHTML = t;
return this;
};
a.prototype.destroy = function() {
if (this._destructors) for (var t = this._destructors, e = t.length, i = 0; i < e; i++) t[i].call(this);
this._autobinds && this.autounbind();
this.dom.jx_wrapper = null;
"function" == typeof this.empty && this.empty();
this.parentNode && this.parentNode.removeChild(this.parentNode instanceof a ? this : this.dom);
this.parentNode = null;
d.unset(this);
};
a.prototype.empty = function() {
for (var t; this.children.length; ) {
t = this.children.pop();
"function" == typeof t.destroy ? t.destroy() : 1 == t.nodeType && d.proto.destroy.call(t);
}
};
a.prototype.onDestruction = function(t) {
(this._destructors || (this._destructors = [])).push(t);
};
a.prototype.getClassName = a.prototype.getClass = function() {
return this.dom.className;
};
a.prototype.setClassName = a.prototype.setClass = function(t, e) {
this.dom.className = (e ? t : this.__jx__fqname + " " + t) + (this._pseudo ? " " + this._pseudo : "");
return this;
};
a.prototype.setAddClass = a.prototype.addClass = function(t) {
if (!t) return this;
this.dom.className ? this.hasClass(t) || (this.dom.className += " " + t) : this.dom.className = t;
return this;
};
a.prototype.removeClass = function(t) {
if (!t || !this.dom.className || !this.hasClass(t)) return this;
this.dom.className = (" " + this.dom.className + " ").replace(" " + t + " ", " ").slice(1, -1);
return this;
};
a.prototype.hasClass = function(t) {
return !!t && !!this.dom.className && -1 != (" " + this.dom.className + " ").indexOf(" " + t + " ");
};
a.prototype.autobind = function(t, e, i) {
if (this._autobinds) {
this._autobinds.push([ t, e, i ]);
t.on(e, i);
}
};
a.prototype.autounbind = function(t, e, i) {
if (this._autobinds) {
var n, o, r = this._autobinds;
if (t && e && i) for (n = r.length - 1; n >= 0; n--) {
o = r[n];
if (o[0] == t && o[1] == e && o[2] == i) {
r.splice(n, 1);
o[0].un(o[1], o[2]);
return;
}
} else if (t || e || i) ; else {
if (!r) return;
for (n = r.length - 1; n >= 0; n--) {
o = r[n];
o[0].un(o[1], o[2]);
}
delete this._autobinds;
}
}
};
a.prototype.getAttribute = function(t) {
return this.dom.getAttribute(t) || this.dom[t];
};
a.prototype.setAttribute = function(t, e) {
this.dom.setAttribute(t, e);
return this;
};
a.prototype.removeAttribute = function(t) {
this.dom.removeAttribute(t);
return this;
};
a.prototype.setAttributes = function(t) {
var e, i;
for (i in t) if (t.hasOwnProperty(i)) {
e = w("set-" + i);
"function" == typeof this[e] && this[e](t[i]);
}
return this;
};
a.prototype.getStyle = function(t) {
return this.dom.style[w(t)];
};
a.prototype.getComputedStyle = function(t) {
t = t && w(t);
var e;
if (window.getComputedStyle) e = window.getComputedStyle(this.dom, null); else {
if (!this.dom.currentStyle) return;
e = this.dom.currentStyle;
}
return t ? e[t] : e;
};
a.prototype.setStyle = function(t) {
var e, i;
if (1 == arguments.length && l(t)) {
if (!t) return this;
t = t.split(";");
for (e = 0; e < t.length; e++) if (!t[e].match(/^\s*$/)) {
i = t[e].match(/\s*([^:]+):\s*(.*?)\s*$/);
!i && t[e].length || this.setOneStyle(i[1], i[2]);
}
} else if (1 == arguments.length && "object" == typeof t) for (var n in t) t.hasOwnProperty(n) && this.setOneStyle(n, t[n]); else if (arguments.length > 1) for (e = 0; e < arguments.length; e += 2) this.setOneStyle(arguments[e], arguments[e + 1]);
return this;
};
a.prototype.setOneStyle = function(t, e) {
var i = w("set-" + t);
"function" == typeof this[i] ? this[i](e) : this.setCSSStyle(t, e);
return this;
};
a.prototype.setCSSStyle = function(t, e) {
try {
this.dom.style[w(t)] = e;
} catch (t) {}
return this;
};
a.prototype.getScrollWidth = function() {
return this.dom.scrollWidth;
};
a.prototype.getScrollHeight = function() {
return this.dom.scrollHeight;
};
a.prototype.getClientWidth = function() {
return this.dom.clientWidth;
};
a.prototype.getClientHeight = function() {
return this.dom.clientHeight;
};
a.prototype.getTop = function() {
return this.dom.offsetTop;
};
a.prototype.getLeft = function() {
return this.dom.offsetLeft;
};
a.prototype.getWidth = function() {
return this.dom.offsetWidth;
};
a.prototype.getHeight = function() {
return this.dom.offsetHeight;
};
a.prototype.setTop = function(t) {
this._top = n(t);
this.solveConstraints();
return this;
};
a.prototype.setLeft = function(t) {
this._left = n(t);
this.solveConstraints();
return this;
};
a.prototype.setBottom = function(t) {
this._bottom = n(t);
this.solveConstraints();
return this;
};
a.prototype.setRight = function(t) {
this._right = n(t);
this.solveConstraints();
return this;
};
a.prototype.setWidth = function(t) {
this._width = n(t);
this.solveConstraints();
return this;
};
a.prototype.setHeight = function(t) {
this._height = n(t);
this.solveConstraints();
return this;
};
a.prototype.getScrollLeft = function() {
return this.dom.scrollLeft;
};
a.prototype.setScrollLeft = function(t) {
this.dom.scrollLeft = t;
return this;
};
a.prototype.getScrollTop = function() {
return this.dom.scrollTop;
};
a.prototype.setScrollTop = function(t) {
this.dom.scrollTop = t;
return this;
};
a.prototype.setFloat = function(t) {
function e() {
_.isIE ? i.dom.style.styleFloat = t : i.dom.style.cssFloat = t;
}
var i = this;
if (f && f.onLanguage && !this._onLanguageFloat) {
f.onLanguage && f.onLanguage(e);
this.onDestruction(function() {
f.unLanguage && f.unLanguage(e);
});
this._onLanguageFloat = !0;
}
e();
return this;
};
a.prototype.solveConstraints = function() {
isNaN(this._top) || isNaN(this._height) || (this._bottom = NaN);
isNaN(this._left) || isNaN(this._width) || (this._right = NaN);
this._width < 0 && (this._width = 0);
this._height < 0 && (this._height = 0);
this.applyConstraints();
};
a.prototype.applyConstraints = function() {
var t = this.dom.style, e = this;
if (d.hasParentNode(this.dom)) if (_.bugs.ie.cssFixed && "fixed" == this._position) g(function() {
e.dom && e.hackFixed();
}); else {
if (_.bugs.ie.cssBottomRight && (!isNaN(this._left) && !isNaN(this._right) || !isNaN(this._top) && !isNaN(this._bottom))) {
this.appendToParent && this.appendToParent(!0);
o();
var i, n, r = isNaN(this._left) ? "" : this._left, a = isNaN(this._right) ? "" : this._right, s = isNaN(this._width) ? "" : this._width, u = isNaN(this._top) ? "" : this._top, c = isNaN(this._bottom) ? "" : this._bottom, h = isNaN(this._height) ? "" : this._height, f = "BackCompat" == this.dom.ownerDocument.compatMode;
if ("fixed" == this._position && this.dom.ownerDocument == document) if (f) {
n = "document.body.clientHeight";
i = "document.body.clientWidth";
} else {
n = "document.documentElement.clientHeight";
i = "document.documentElement.clientWidth";
} else {
n = "this.offsetParent.clientHeight";
i = "this.offsetParent.clientWidth";
}
if (_.isIE6) {
if (!isNaN(this._left) && !isNaN(this._right)) {
a = "";
s = [ i, this._left, this._right ].join("-");
}
if (!isNaN(this._top) && !isNaN(this._bottom)) {
c = "";
h = [ n, this._top, this._bottom ].join(" - ");
}
}
var p = function(e, i) {
t[e] = "";
t.removeExpression(e);
"number" == typeof i ? t[e] = i + "px" : l(i) && "%" == i.substr(i.length - 1) ? t[e] = i : l(i) && i.length && t.setExpression(e, i);
};
p("left", r);
p("right", a);
p("width", s);
p("top", u);
p("bottom", c);
p("height", h);
}
!function() {
t.left = l(e._left) ? e._left : isNaN(e._left) ? "" : e._left + "px";
t.right = l(e._right) ? e._right : isNaN(e._right) ? "" : e._right + "px";
if (e._width != e.__width) {
t.width = l(e._width) ? e._width : isNaN(e._width) ? "" : e._width + "px";
e.__width = e._width;
}
}();
!function() {
t.top = l(e._top) ? e._top : isNaN(e._top) ? "" : e._top + "px";
t.bottom = l(e._bottom) ? e._bottom : isNaN(e._bottom) ? "" : e._bottom + "px";
if (e._height != e.__height) {
t.height = l(e._height) ? e._height : isNaN(e._height) ? "" : e._height + "px";
e.__height = e._height;
}
}();
}
};
a.prototype.hackFixed = function() {
var t = this.dom.style;
o();
this.appendToParent && this.appendToParent(!0);
this._bottom < 0 && (this._bottom = 0);
this._right < 0 && (this._right = 0);
p.ok(isNaN(this._left) != isNaN(this._right), "One and only one of left/right must be set");
p.ok(isNaN(this._top) != isNaN(this._bottom), "One and only one of top/bottom must be set");
p.ok(!isNaN(this._width), "Width must be set");
p.ok(!isNaN(this._height), "Height must be set");
p.ok(this.ownerDocument == document, "Fixed element must be top level element");
if (this._height != this.__height) {
t.height = this._height + "px";
this.__height = this._height;
}
if (this._width != this.__width) {
t.width = this._width + "px";
this.__width = this._width;
}
var e, i, n, r, a = this.getHeight(), s = this.getWidth();
if (_.isQuirks) {
r = "document.body.clientHeight";
n = "document.body.clientWidth";
e = "(dummye34cf6=document.body.scrollLeft)+";
i = "(dummye34cf6=document.body.scrollTop )+";
} else {
r = "document.documentElement.clientHeight";
n = "document.documentElement.clientWidth";
e = "(dummye34cf6=document.documentElement.scrollLeft)+";
i = "(dummye34cf6=document.documentElement.scrollTop )+";
}
isNaN(this._left) ? l(this._left) ? e += parseInt(this._left, 10) / 100 * (_.isQuirks ? document.body : document.documentElement).clientWidth : e += n + "-" + (s + this._right) : e += this._left;
isNaN(this._top) ? l(this._top) ? i += parseInt(this._top, 10) / 100 * (_.isQuirks ? document.body : document.documentElement).clientHeight : i += r + "-" + (a + this._bottom) : i += this._top;
_.isIE6 && "rtl" == document.body.currentStyle.direction && (_.isQuirks ? e += "-(document.body.scrollWidth-document.body.clientWidth)" : e += "-(document.documentElement.scrollWidth-document.documentElement.clientWidth)");
t.setExpression("left", e + '+"px"');
t.setExpression("top", i + '+"px"');
};
a.prototype.dock = function(t, e, i) {
this.pos = t;
m(e) && (this.offsetx = e);
m(i) && (this.offsety = i);
this.doDock();
this.on("jx:resize", this.doDock);
};
a.prototype.doDock = function() {
var t, e, i, n, o, r, a, s = isNaN(this._width) ? this.dom.offsetWidth : this._width, _ = isNaN(this._height) ? this.dom.offsetHeight : this._height;
t = e = i = n = NaN;
o = r = a = 0;
switch (this.pos.charAt(0)) {
case "t":
t = 0;
break;

case "m":
t = "50%";
break;

case "b":
e = 0;
}
switch (this.pos.charAt(1)) {
case "l":
i = 0;
break;

case "c":
i = "50%";
break;

case "r":
n = 0;
}
"50%" == t && (o = -_ / 2);
"50%" == i && (r = -s / 2);
this.offsety >= 0 || !isNaN(t) || "string" == typeof t ? o += this.offsety : a = -this.offsety;
r += this.offsetx;
this.setMargin([ o + "px", 0, a + "px", r + "px" ].join(" ")).setTop(t).setBottom(e).setLeft(i).setRight(n);
};
a.prototype.setBounds = function(t) {
if (!c(t)) {
t = t.split(" ");
t[0] = parseInt(t[0], 10);
t[1] = parseInt(t[1], 10);
t[2] = parseInt(t[2], 10);
t[3] = parseInt(t[3], 10);
}
if (j) {
t[1] = Math.max(0, t[1]);
t[2] = Math.max(0, t[2]);
}
this._bounds = t;
return this;
};
a.prototype.setSnaps = function(t) {
if (!c(t)) {
t = t.split(" ");
t[0] = parseInt(t[0], 10);
t[1] = parseInt(t[1], 10);
t[2] = parseInt(t[2], 10);
t[3] = parseInt(t[3], 10);
}
this._snaps = [ Math.max(0, t[0]), Math.max(0, t[1]), Math.max(0, t[2]), Math.max(0, t[3]) ];
return this;
};
a.prototype.applyBounds = function() {
if (this._bounds) {
this._left < this._bounds[3] + this._snaps[3] && (this._left = this._bounds[3]);
this._right < this._bounds[1] + this._snaps[1] && (this._right = this._bounds[1]);
this._top < this._bounds[0] + this._snaps[0] && (this._top = this._bounds[0]);
this._bottom < this._bounds[2] + this._snaps[2] && (this._bottom = this._bounds[2]);
var t = _.isQuirks ? document.body : document.documentElement, e = isNaN(this._width) ? this.dom.offsetWidth : this._width, i = t.clientWidth - e, n = t.clientHeight - this.dom.offsetHeight;
i - this._left <= this._bounds[1] + this._snaps[1] && (this._left = i - this._bounds[1]);
i - this._right <= this._bounds[3] + this._snaps[3] && (this._right = i - this._bounds[3]);
n - this._top <= this._bounds[2] + this._snaps[2] && (this._top = n - this._bounds[2]);
n - this._bottom <= this._bounds[0] + this._snaps[0] && (this._bottom = n - this._bounds[0]);
}
};
a.prototype.moveTo = function(t, e) {
this._bottom = this._right = NaN;
this._top = e;
this._left = t;
this.applyBounds();
this.applyConstraints();
return this;
};
a.prototype.move = function(t, e) {
isNaN(this._left) && isNaN(this._right) && (this._left = 0);
isNaN(this._top) && isNaN(this._bottom) && (this._top = 0);
isNaN(this._left) || (this._left += t);
isNaN(this._right) || (this._right -= t);
isNaN(this._top) || (this._top += e);
isNaN(this._bottom) || (this._bottom -= e);
this.applyBounds();
this.applyConstraints();
};
a.prototype.resizeBy = function(t, e, i, n) {
if (t) {
isNaN(this._width) && (this._width = this.dom.offsetWidth);
this._width = Math.max(i || 0, this._width + t);
}
if (e) {
isNaN(this._height) && (this._height = this.dom.offsetHeight);
this._height = Math.max(n || 0, this._height + e);
}
this.applyBounds();
this.applyConstraints();
this.fire("jx:resize");
return this;
};
a.prototype.setVisible = function(t) {
"none" != t && "block" != t || (this.useDisplay = !0);
"none" != t && "hidden" != t && "false" != t && t ? this.show() : this.hide();
return this;
};
a.prototype.isVisible = function() {
var t = this.dom.style;
return this.useDisplay ? "none" != t.display : "visible" == t.visibility;
};
a.prototype.show = function() {
var t = this.dom.style;
if (this.useDisplay) {
if (t.display != (this._initialDisplay || "block")) {
t.display = this._initialDisplay || "block";
this.fire("show");
}
} else if ("visible" != t.visibility) {
t.visibility = "visible";
this.fire("show");
}
return this;
};
a.prototype.hide = function() {
var t = this.dom.style;
if (this.useDisplay) {
if ("none" != t.display) {
this._initialDisplay = "none" != t.display && t.display;
t.display = "none";
this.fire("hide");
}
} else if ("hidden" != t.visibility) {
t.visibility = "hidden";
this.fire("hide");
}
return this;
};
a.prototype.toggle = function() {
return this.isVisible() ? this.hide() : this.show();
};
a.prototype.getXY = function() {
var t, e, i = this.dom.offsetParent;
t = this.dom.offsetLeft;
e = this.dom.offsetTop;
for (;i; ) {
t += i.offsetLeft;
e += i.offsetTop;
i = i.offsetParent;
}
return [ t, e ];
};
a.prototype.getFixedXY = function() {
var t, e, i = this.dom, n = this.dom.ownerDocument, o = n.documentElement, r = n.defaultView || i.parentWindow || !1, a = {
top: 0,
left: 0
}, s = o.clientTop || 0, _ = o.clientLeft || 0, l = r.pageYOffset || o.scrollTop, d = r.pageXOffset || o.scrollLeft;
"getBoundingClientRect" in i && (a = i.getBoundingClientRect());
e = a.top + l - s;
t = a.left + d - _;
return [ t, e ];
};
a.prototype.setOpacity = function(t) {
t = Math.max(Math.min(t, 1), 0);
_.isIE < 9 ? this.dom.style.filter = (this.dom.style.filter || "").replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi, "") + (t >= 1 ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * t + "), ") : this.dom.style.opacity = t;
return this;
};
a.prototype.setPosition = function(t) {
switch (t) {
case "static":
case "relative":
case "absolute":
case "fixed":
this._position = t;
}
null !== this._position && this.setCSSStyle("position", j && "fixed" == this._position ? "absolute" : this._position);
return this;
};
a.prototype.setBackgroundImage = function(t) {
this.dom.style.backgroundImage = 'url("' + t + '")';
return this;
};
a.prototype.setRotation = function(t) {
if (_.isFF) this.dom.style.MozTransform = t ? "rotate(" + t + "deg)" : ""; else if (_.isSafari) this.dom.style.WebkitTransform = t ? "rotate(" + t + "deg)" : ""; else if (_.isIE) {
this.dom.style.filter = t ? "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + Math.round(t / 90) + ")" : "";
if (_.isIE8 && t) {
var e = this.parentNode.getElementsByTagName("iframe");
if (_.isIE8 && e.length) {
e[0].style.filter = t ? "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + Math.round(t / 90) + ")" : "";
this.dom.style.overflow = "visible";
}
}
}
return this;
};
a.prototype.appendToParent = function(t) {
d.hasParentNode(this.dom) || this.parentNode.appendChild(this.parentNode instanceof a ? this : this.dom);
this.parentNode != document.body || "absolute" != this.style.position && "fixed" != this.style.position || this.parentNode.insertBefore(this.dom, this.parentNode.firstChild);
if (t && !this.inDOM) {
this.parentNode.appendToParent && this.parentNode.appendToParent(t);
this.inDOM = !0;
}
};
a.prototype.focus = function() {
try {
this.dom.focus();
} catch (t) {}
return this;
};
a.prototype.blur = function() {
try {
this.dom.blur();
} catch (t) {}
return this;
};
a.prototype.click = function() {
this.dom.click && this.dom.click();
return this;
};
a.prototype.validate = function(t) {
for (var e = !0, i = 0, n = this.children.length; i < n; i++) {
var o = this.children[i];
o instanceof a && "function" == typeof o.validate && (o.validate(!!t && e) || (e = !1));
}
return e;
};
a.prototype.getSelectable = function() {
return this.selectable;
};
a.prototype.setSelectable = function(t) {
function e() {
return !1;
}
if ($(t)) {
this.selectable = !0;
this.setStyle("user-select", "text");
_.isFF && this.setStyle("-moz-user-select", "text");
_.isWebKit && this.setStyle("-webkit-user-select", "text");
_.isIE > 9 && this.setStyle("-ms-user-select", "text");
(_.isIE < 10 || _.isOpera) && this.un("selectstart", e);
} else {
this.selectable = !1;
this.setStyle("user-select", "none");
_.isFF && this.setStyle("-moz-user-select", "none");
_.isWebKit && this.setStyle("-webkit-user-select", "none");
_.isIE > 9 && this.setStyle("-ms-user-select", "none");
(_.isIE < 10 || _.isOpera) && this.on("selectstart", e);
}
return this;
};
a.prototype.getDisabled = function() {
return this.dom.disabled;
};
a.prototype.setDisabled = function(t) {
t = $(t);
for (var e = 0, i = this.children.length; e < i; e++) this.children[e] instanceof a && this.children[e].setDisabled(t);
this[t ? "addClass" : "removeClass"]("disabled");
this.dom.disabled = t;
return this;
};
a.prototype.getReadOnly = function() {
return this.dom.readOnly;
};
a.prototype.setReadOnly = function(t) {
t = $(t);
for (var e = 0, i = this.children.length; e < i; e++) this.children[e] instanceof a && this.children[e].setReadOnly(t);
this.dom.readOnly = t;
return this;
};
a.prototype.getValue = function() {
return this.dom.value;
};
a.prototype.setValue = function(t) {
this.dom.value = b(t, "allowNull") ? "" : t;
return this;
};
a.prototype.getType = function() {
return this.getAttribute("type");
};
a.prototype.setType = function(t) {
try {
this.dom.setAttribute("type", t);
} catch (t) {}
return this;
};
a.prototype.getName = function() {
return this.getAttribute("name");
};
a.prototype.setName = function(t) {
return this.setAttribute("name", t);
};
a.prototype.getTabIndex = a.prototype.getTabindex = function() {
try {
return this.dom.tabIndex;
} catch (t) {}
};
a.prototype.setTabIndex = a.prototype.setTabindex = function(t) {
try {
this.dom.tabIndex = t;
} catch (t) {}
return this;
};
a.prototype.setPlacement = function(t) {
if (t && this.parentNode && this.parentNode instanceof a) {
var e = this.parentNode.getContainer(t);
if (e) {
if (!$(this.attributes.discardPlacement)) {
e.appendChild(e instanceof a ? this : this.dom);
return this;
}
for (;this.children.length; ) e.appendChild(this.children[0]);
this.destroy();
}
}
};
a.prototype.setContainer = function(t) {
this.attributes.container = t;
return this;
};
a.prototype.getContainer = function(t) {
if (t) {
if (this.attributes.container == t) return this;
for (var e, i = this.children.length, n = 0; n < i; n++) if ("function" == typeof this.children[n].getContainer) {
e = this.children[n].getContainer(t);
if (e) return e;
}
}
};
a.prototype.getPseudo = function() {
return this._pseudo;
};
a.prototype.setPseudo = function(t) {
this._pseudo && this.removeClass(t);
this._pseudo = t;
this._pseudo && this.addClass(t);
return this;
};
a.prototype.setUseDisplay = function(t) {
this.useDisplay = $(t);
return this;
};
a.prototype.getElement = function(t) {
return d.get(this.jx_id + "__" + t);
};
a.prototype.setLabel = function(t) {
this.label = t;
return this;
};
a.prototype.getLabel = function() {
return this.label || "";
};
for (var S = 0; S < v.length; S++) a.prototype[w("set-" + v[S])] = function(t) {
return function(e) {
try {
this.dom.style[t] = e;
} catch (t) {}
return this;
};
}(w(v[S]));
for (S = 0; S < y.length; S++) a.prototype[w("set-" + y[S])] = function(t) {
return function(e) {
this.dom.setAttribute(t, e);
return this;
};
}(y[S]);
t.exports = a;
}, function(t, e, i) {
function n() {
H("UIController init");
oe.mobile && oe.popout && Jt();
Qt();
o();
ae.userShowBadgeOrWindow = h;
ae.userShowWindow = f;
ae.userHideWindow = g;
ae.userHideBanner = p;
ae.userHideBubble = m;
ae.userDismissMobileNotification = se;
ae.userReplyMobileNotification = $;
ae.showWindow = b;
ae.hideWindow = w;
ae.toggleWindow = x;
ae.showBanner = v;
ae.hideBanner = y;
ae.showButton = j;
ae.hideButton = C;
ae.showMobileNotification = N;
ae.hideMobileNotification = T;
ae.disableMobileNotifications = B;
ae.hideAll = S;
ae.showBubble = A;
ae.hideBubble = k;
ae.resetBubble = I;
ae.setWindowUserHidden = E;
ae.setBannerUserHidden = O;
ae.setBubbleUserHidden = L;
ae.resetBubbleUserHidden = W;
ae.setHideWhenOffline = P;
ae.mobileNotificationsIgnoreChatButtonVisibility = D;
ae.showMenu = R;
ae.showProfileMenu = F;
ae.getAPIState = M;
ae.resetState = z;
}
function o() {
nt = !1;
U = Zt.root;
G = U.$("livechat");
Y = G.$("settings");
X = Y.$("theme");
Z = G.$("ui");
K = Z.$("chat_window");
Q = Z.$("chat_button");
Et = G.$("profile").$("logged_in$bool");
Ot = G.$("profile").$("auth").$("type$string");
Lt = Y.$("login").$("allowed_types_count$int");
Wt = G.$("settings").$("login").$("restrict_profile$bool");
Bt = K.$("menu_stack_name$string");
Dt = K.$("profile_menu").$("index$int");
J = Z.$("popout$bool");
tt = Z.$("mobile$bool");
et = Z.$("mockup$bool");
it = Z.$("mobile_overlay$bool");
Ht = Z.$("current_display$string");
Vt = Z.$("previous_display$string");
V(J, "popout", function() {
l();
_();
});
V(tt, "mobile", function() {
l();
_();
});
V(it, "mobile_overlay", _);
V(et, "mockup");
ft = U.$("connection").$("message$string");
V(ft, "connection_message", _);
gt = U.$("connection").$("status$string");
V(gt, "connection_status", function() {
r();
_();
});
pt = G.$("account").$("status$string");
V(pt, "account_status", function() {
l();
_();
});
mt = G.$("channel").$("chatting$bool");
It = Z.$("chat_window").$("pre_chat_form").$("submitted$bool");
V(mt, "chatting", function() {
r();
_();
});
$t = G.$("channel").$("served$bool");
V($t, "chat_served", _);
bt = Y.$("behavior").$("do_not_display$bool");
wt = Y.$("banner").$("enabled$bool");
vt = Y.$("bubble").$("enabled$bool");
Ct = Y.$("chat_button").$("hide_when_offline$bool");
St = K.$("user_hidden$bool");
At = K.$("user_hidden_banner$bool");
kt = K.$("user_hidden_bubble$bool");
xt = X.$("chat_window").$("use_banner$bool");
jt = Q.$("bubble").$("display$bool");
yt = X.$("chat_button").$("use_bubble$bool");
V(bt, "do_not_display", _);
V(wt, "banner_enabled", _);
V(vt, "bubble_enabled", _);
V(Ct, "hide_when_offline", _);
V(St, "chat_window_user_hidden", _);
V(At, "banner_user_hidden", _);
V(kt, "bubble_user_hidden", l);
V(xt, "use_banner", _);
V(jt, "bubble_display", l);
V(yt, "use_bubble", l);
Nt = G.$("settings").$("forms").$("pre_chat_form").$("required$bool");
Nt.bindValue(a);
It.bindValue(a);
Pt = Q.$("display$bool");
Rt = K.$("display$bool");
Ft = K.$("main_stack_name$string");
Mt = Z.$("chat_notification").$("display$bool");
Pt.bindValue(s);
Rt.bindValue(s);
Ft.bindValue(s);
Mt.bindValue(s);
nt = !0;
}
function r() {
if (oe.chatting && oe.connection_status == ie.REATTACHED) {
H("UIController: setting pre_chat_form_submitted to true");
It.update(!0);
}
}
function a() {
var t = Nt.getValue(), e = It.getValue(), i = t && !e;
if (i != Tt) {
Tt = i;
_();
}
}
function s() {
var t, e, i = Pt.getValue(), n = Rt.getValue(), o = Ft.getValue(), r = Mt.getValue();
t = Gt(i) && Gt(n) && Gt(r) ? te.UNDEFINED : n ? o == ee.NEW_CHAT_FORM ? te.BANNER : te.WINDOW : i ? te.BUTTON : r ? te.NOTIFICATION : te.NONE;
e = o;
if (t != qt || e != zt) {
qt = t;
zt = e;
_();
}
}
function _() {
function t() {
if (Tt) {
q(e, "pre_chat_form_required");
u([ ee.PRE_CHAT_OFFLINE_FORM ]);
} else {
q(e, "!pre_chat_form_required");
u([ ee.CHAT_PANEL, ee.AGENT_LIST, ee.CARD_FORM, ee.POST_CHAT_FORM, ee.ABOUT_PANEL, ee.COOKIE_FORM ]);
}
}
if (nt) if (_t) H("UIController update: abort - display settings updating"); else if (at) H("UIController update: abort - api updating"); else if (st) H("UIController update: abort - user updating"); else if (ot) H("UIController update: abort - updating loop"); else {
ot = !0;
var e = [];
if (oe.account_status == ne.BANNED) {
q(e, ne.BANNED);
if (oe.popout) {
q(e, "popout");
d(te.WINDOW);
u([ ee.PRE_CHAT_OFFLINE_FORM ]);
} else {
q(e, "!popout");
d(te.UNDEFINED);
}
} else if (re.api_display && re.api_stack) q(e, "api_display && api_stack"); else if (!oe.do_not_display || oe.popout || re.api_display || oe.chatting || qt != te.UNDEFINED) if (!oe.mobile || oe.mobile_overlay || oe.popout) {
if (oe.connection_status == ie.COOKIE_LAW) {
q(e, "cookie_law");
if (re.api_display) q(e, "api_display"); else if (qt == te.NONE) q(e, "none"); else if (oe.popout) {
q(e, "popout");
d(te.WINDOW);
} else {
q(e, "!popout");
if (qt == te.UNDEFINED) {
q(e, "undefined");
d(te.BUTTON);
} else q(e, "!undefined");
}
u([ ee.COOKIE_FORM ]);
} else if (oe.connection_status == ie.REGISTERED || oe.connection_status == ie.REATTACHED || oe.connection_message == ie.FAST_INIT) {
q(e, "registered/reattached/fast_init");
if (oe.chatting) {
q(e, "chatting");
if (re.api_display) {
q(e, "api_display");
if (oe.mobile_overlay && (qt === te.BUTTON || re.mobile_notifications_ignore_chat_button_visibility && qt !== te.WINDOW) && ut) {
q(e, "overlay && (displaying button || ignoring chat button visibility && not displaying window) && has mobile notification");
d(te.NOTIFICATION);
} else {
q(e, "!overlay || !displaying button && !(ignoring chat button visibility && not displaying window) || !has mobile notification");
if (qt !== te.NOTIFICATION || ut) q(e, "!displaying notification || has mobile notification"); else {
q(e, "displaying notification && !has mobile notification");
d(re.api_display);
}
}
} else {
q(e, "!api_display");
if (oe.mobile_overlay) {
q(e, "overlay");
if (oe.chat_window_user_hidden) {
q(e, "user hidden");
if (ut) {
q(e, "has mobile notification");
d(te.NOTIFICATION);
} else {
q(e, "!has mobile notification");
d(te.BUTTON);
}
} else {
q(e, "!user hidden");
if (dt) {
q(e, "user_shown_window_before");
d(te.WINDOW);
} else {
q(e, "!user_shown_window_before");
if (ut) {
q(e, "has mobile notification");
d(te.NOTIFICATION);
} else {
q(e, "!has mobile notification");
d(te.BUTTON);
}
}
}
} else {
q(e, "!overlay");
if (oe.chat_window_user_hidden) {
q(e, "user hidden");
if (oe.popout) {
q(e, "popout");
d(te.WINDOW);
} else {
q(e, "!popout");
if (qt == te.UNDEFINED) {
q(e, "undefined");
d(te.BUTTON);
} else q(e, "!undefined");
}
} else {
q(e, "!user hidden");
d(te.WINDOW);
}
}
}
u(oe.chat_served ? [ ee.CHAT_PANEL, ee.AGENT_LIST, ee.CARD_FORM, ee.ABOUT_PANEL, ee.RATING_PANEL, ee.COOKIE_FORM ] : [ ee.CHAT_PANEL, ee.AGENT_LIST, ee.CARD_FORM, ee.ABOUT_PANEL, ee.COOKIE_FORM ]);
} else if (oe.account_status == ne.ONLINE || oe.account_status == ne.AWAY) {
q(e, "online/away");
if (re.api_display) {
q(e, "api_display");
t();
} else if (oe.popout || qt == te.WINDOW) {
q(e, "popout/window");
if (oe.popout) {
q(e, "popout");
d(te.WINDOW);
} else q(e, "window");
t();
} else if (qt == te.NONE) q(e, "none"); else if (oe.banner_enabled && oe.use_banner) {
q(e, "show banner");
switch (qt) {
case te.UNDEFINED:
q(e, "none");
if (oe.banner_user_hidden) {
q(e, "user hidden");
d(te.BUTTON);
} else {
q(e, "!user hidden");
d(te.BANNER);
}
break;

case te.BUTTON:
q(e, "button");
if (oe.banner_user_hidden) q(e, "user hidden"); else {
q(e, "!user hidden");
d(te.BANNER);
}
break;

case te.BANNER:
q(e, "banner");
}
} else {
q(e, "!show banner");
if (qt === te.BUTTON) q(e, "button"); else {
q(e, qt);
d(te.BUTTON);
}
}
} else if (oe.account_status == ne.OFFLINE) {
q(e, ne.OFFLINE);
if (re.api_display) q(e, "api_display"); else if (oe.popout) {
q(e, "popout");
d(te.WINDOW);
} else if (qt == te.NONE) q(e, "none"); else if (oe.hide_when_offline) {
q(e, "hide when offline");
d(te.UNDEFINED);
} else {
q(e, "!hide when offline");
if (qt == te.WINDOW) q(e, "window"); else {
q(e, "!window");
d(te.BUTTON);
}
}
u([ ee.PRE_CHAT_OFFLINE_FORM ]);
}
}
} else {
q(e, "mobile");
if (re.api_display) q(e, "api_display"); else {
q(e, "!api_display");
if (qt == te.NONE) q(e, "none"); else {
q(e, "!none");
if (oe.do_not_display || oe.account_status == ne.OFFLINE && oe.hide_when_offline) {
q(e, "do_not_display || (account_status == offline && hide_when_offline)");
if (oe.chatting) {
q(e, "chatting");
d(te.BUTTON);
} else {
q(e, "!chatting");
d(te.UNDEFINED);
}
} else {
q(e, "!(do_not_display || (account_status == offline && hide_when_offline))");
d(te.BUTTON);
}
}
}
} else q(e, "do not display, !popout, !api_display");
H("UIController update: " + (e.join(" > ") || "no path"));
ot = !1;
} else H("UIController update: abort - binding not complete");
}
function l() {
if (nt) if (lt) H("UIController Bubble update: abort - bubble settings updating"); else if (at) H("UIController Bubble update: abort - api updating"); else if (st) H("UIController Bubble update: abort - user updating"); else if (rt) H("UIController Bubble update: abort - updating loop"); else {
rt = !0;
var t = [];
if (oe.mobile || oe.popout) {
q(t, "mobile || popout");
c(!1);
} else {
q(t, "!mobile && !popout");
if (oe.use_bubble) {
q(t, "use_bubble");
if (re.api_bubble) q(t, "bubble_api"); else {
q(t, "!bubble_api");
if (oe.bubble_enabled) {
q(t, "bubble_enabled");
if (oe.account_status == ne.ONLINE || oe.account_status == ne.AWAY) {
q(t, "online || away");
if (oe.bubble_user_hidden) {
q(t, "user_hidden_bubble");
c(!1);
} else {
q(t, "!user_hidden_bubble");
if (Gt(oe.bubble_display)) {
q(t, "undefined");
c(!0);
} else q(t, "!undefined");
}
} else {
q(t, ne.OFFLINE);
c(void 0);
}
} else {
q(t, "!bubble_enabled");
c(!1);
}
}
} else {
q(t, "!use_bubble");
c(void 0);
}
}
H("UIController Bubble update: " + (t.join(" > ") || "no path"));
rt = !1;
} else H("UIController Bubble update: abort - binding not complete");
}
function d(t) {
H("UIController setDisplay: " + t);
ct = Rt.getValue();
_t = !0;
var e = Ht.getValue();
if (e !== t) {
Vt.update(e);
Ht.update(t);
}
switch (t) {
case te.UNDEFINED:
Pt.update(void 0);
Rt.update(void 0);
Mt.update(void 0);
break;

case te.NONE:
Pt.update(!1);
Rt.update(!1);
Mt.update(!1);
break;

case te.BUTTON:
Pt.update(!0);
Rt.update(!1);
Mt.update(!1);
break;

case te.BANNER:
if (Ft.getValue() != ee.NEW_CHAT_FORM) {
ht = Ft.getValue();
Ft.update(ee.NEW_CHAT_FORM);
}
Pt.update(!1);
Rt.update(!0);
Mt.update(!1);
break;

case te.NOTIFICATION:
Pt.update(!1);
Rt.update(!1);
Mt.update(!0);
break;

case te.WINDOW:
if (Ft.getValue() == ee.NEW_CHAT_FORM) {
u(ht ? [ ht ] : [ ee.PRE_CHAT_OFFLINE_FORM, ee.CHAT_PANEL, ee.POST_CHAT_FORM, ee.COOKIE_FORM, ee.CARD_FORM, ee.AGENT_LIST, ee.RATING_PANEL ]);
ht = null;
}
Pt.update(!1);
Mt.update(!1);
Rt.update(!0);
}
at || (ct && t != te.WINDOW ? ae.fire("API:window:hide") : ct || t != te.WINDOW || ae.fire("API:window:show"));
_t = !1;
}
function u(t) {
if (t && t.length) {
-1 == Yt(zt, t) && Ft.update(t[0]);
}
}
function c(t) {
H("UIController setBubble: " + t);
lt = !0;
jt.update(t);
lt = !1;
}
function h() {
if (!oe.mobile) {
st = !0;
var t = Ft.getValue();
d(oe.banner_enabled && t == ee.NEW_CHAT_FORM && oe.use_banner ? te.BANNER : te.WINDOW);
re.api_display = !1;
re.api_stack = !1;
st = !1;
_();
}
}
function f() {
if ((!oe.mobile || oe.mobile_overlay) && qt != te.WINDOW) {
st = !0;
St.update(!1);
dt = !0;
d(te.WINDOW);
re.api_display = !1;
re.api_stack = !1;
st = !1;
_();
}
}
function g() {
if ((!oe.mobile || oe.mobile_overlay) && qt != te.BUTTON) {
st = !0;
ae.setWindowUserHidden();
d(oe.do_not_display ? te.NONE : te.BUTTON);
re.api_display = !1;
re.api_stack = !1;
st = !1;
_();
}
}
function p() {
if (!oe.mobile && qt != te.BUTTON) {
st = !0;
ae.setBannerUserHidden();
d(oe.do_not_display ? te.NONE : te.BUTTON);
re.api_display = !1;
re.api_stack = !1;
st = !1;
_();
}
}
function m() {
if (!oe.mobile) {
st = !0;
ae.setBubbleUserHidden();
c(!1);
re.api_bubble = !1;
st = !1;
l();
}
}
function(){}
function b() {
H("API update: showWindow");
if (oe.mobile && !oe.mobile_overlay) Kt.openPopout(!0); else {
at = !0;
ut && (ut = !1);
d(te.WINDOW);
re.api_display = te.WINDOW;
at = !1;
_();
}
}
function w() {
if (!oe.mobile || oe.mobile_overlay) {
H("API update: hideWindow");
at = !0;
if (oe.do_not_display) {
d(te.NONE);
re.api_display = te.NONE;
} else {
d(te.BUTTON);
re.api_display = te.BUTTON;
}
at = !1;
_();
}
}
function x() {
if (!oe.mobile || oe.mobile_overlay) {
H("API update: toggleWindow");
qt == te.WINDOW ? ae.hideWindow() : ae.showWindow();
}
}
function v() {
if (!oe.mobile && oe.use_banner) {
H("API update: showBanner");
at = !0;
d(te.BANNER);
re.api_display = te.BANNER;
re.api_stack = te.BANNER;
at = !1;
_();
}
}
function y() {
if (!oe.mobile) {
H("API update: hideBanner");
at = !0;
if (oe.do_not_display) {
d(te.NONE);
re.api_display = te.NONE;
} else {
d(te.BUTTON);
re.api_display = te.BUTTON;
}
re.api_stack = !1;
at = !1;
_();
}
}
function j() {
H("API update: showButton");
at = !0;
d(te.BUTTON);
re.api_display = te.BUTTON;
at = !1;
_();
}
function C() {
H("API update: hideButton");
at = !0;
if (oe.mobile) {
ut && (ut = !1);
re.api_display = te.NONE;
d(te.NONE);
} else {
re.api_display = te.WINDOW;
d(te.WINDOW);
}
at = !1;
_();
}
function S() {
H("API update: hideAll");
at = !0;
d(te.NONE);
re.api_display = te.NONE;
ut && (ut = !1);
at = !1;
_();
}
function A() {
if (!oe.mobile) {
H("API update: showBubble");
at = !0;
c(!0);
re.api_bubble = !0;
at = !1;
l();
}
}
function k() {
if (!oe.mobile) {
H("API update: hideBubble");
at = !0;
c(!1);
re.api_bubble = !0;
at = !1;
l();
}
}
function I() {
if (!oe.mobile) {
H("API update: resetBubble");
at = !0;
ae.resetBubbleUserHidden();
c(!0);
re.api_bubble = !0;
at = !1;
l();
}
}
function N() {
if ((qt === te.BUTTON || re.mobile_notifications_ignore_chat_button_visibility && qt !== te.WINDOW) && !re.disable_mobile_notifications) {
ut = !0;
_();
}
}
function T() {
ut = !1;
_();
}
function B(t) {
Gt(t) && (t = !0);
re.disable_mobile_notifications = t;
}
function D(t) {
Gt(t) && (t = !0);
re.mobile_notifications_ignore_chat_button_visibility = t;
}
function E() {
St.update(!0);
}
function O() {
At.update(!0);
}
function L() {
kt.update(!0);
}
function W() {
kt.update(!1);
}
function P(t) {
Ct.update(t);
}
function R(t) {
Bt.update(t);
}
function F() {
if (!Wt.getValue()) {
ae.showMenu("profile_menu");
Dt.update(Et.getValue() ? Ot.getValue() ? 1 : 2 : oe.mobile ? 2 : Lt.getValue() ? 0 : 2);
}
}
function M() {
return re;
}
function V(t, e, i) {
t && Xt(t.bindValue) && t.bindValue(function(t) {
if (oe[e] != t) {
oe[e] = t;
Xt(i) && i();
}
});
}
function H(t) {}
function q(t, e) {}
function z() {
dt = void 0;
ut = void 0;
re = {
api_display: !1,
api_stack: !1,
api_bubble: !1
};
}
var U, G, Y, X, Z, K, Q, J, tt, et, it, nt, ot, rt, at, st, _t, lt, dt, ut, ct, ht, ft, gt, pt, mt, $t, bt, wt, xt, vt, yt, jt, Ct, St, At, kt, It, Nt, Tt, Bt, Dt, Et, Ot, Lt, Wt, Pt, Rt, Ft, Mt, Vt, Ht, qt, zt, Ut = i(14), Gt = i(25), Yt = i(31), Xt = i(20), Zt = i(6), Kt = i(70), Qt = i(355), Jt = i(354), te = {
UNDEFINED: "undefined",
NONE: "none",
BUTTON: "button",
BANNER: "banner",
WINDOW: "window",
NOTIFICATION: "notification"
}, ee = {
NEW_CHAT_FORM: "new_chat_form",
PRE_CHAT_OFFLINE_FORM: "pre_chat_offline_form",
CHAT_PANEL: "chat_panel",
POST_CHAT_FORM: "post_chat_form",
COOKIE_FORM: "cookie_form",
CARD_FORM: "card_form",
AGENT_LIST: "agent_list",
ABOUT_PANEL: "about_panel",
RATING_PANEL: "rating_panel"
}, ie = {
COOKIE_LAW: "cookie_law",
REATTACHED: "reattached",
REGISTERED: "registered",
FAST_INIT: "fast_init"
}, ne = {
ONLINE: "online",
AWAY: "away",
OFFLINE: "offline",
BANNED: "banned"
}, oe = {}, re = {
api_display: !1,
api_stack: !1,
api_bubble: !1
}, ae = Ut.extend({
init: n
}), se = T;
t.exports = ae;
}, function(t, e) {
var i = function(t) {
return function(t, e) {
return e ? null == t : void 0 === t;
};
}();
t.exports = i;
}, function(t, e, i) {
function n() {
S = A = k = !1;
I = [];
N = [];
T = [];
B = [];
D = [];
E = [];
O = [];
W = {};
C = H.root;
C.$("connection").$("status$string").bindValue(o);
C.$("connection").$("message$string").bindValue(r);
L = C.$("tmp").$("api_settings");
P = C.$("tmp").$("server_settings");
G.bindToConnectionStatus(C.$("connection").$("status$string"));
R = window.zE ? "web_widget" : "standalone";
}
function o(t) {
if ("reattached" == t) {
k = !0;
_();
} else if ("registered" == t || "cookie_law" == t) {
A = !0;
s();
}
}
function r(t) {
if ("fast_init" == t) {
S = !0;
a();
}
}
function a() {
c(I);
I.length = 0;
c(B);
}
function s() {
c(N);
N.length = 0;
c(D);
}
function _() {
c(T);
T.length = 0;
c(E);
}
function l(t, e) {
e && B.push(t);
S ? h(t) : e || I.push(t);
}
function d(t, e) {
e && D.push(t);
A ? h(t) : e || N.push(t);
}
function u(t, e) {
e && E.push(t);
k ? h(t) : e || T.push(t);
}
function c(t) {
if (t && F(t)) for (var e = 0; e < t.length; e++) h(t[e]);
}
function h(t) {
var e = Z.call(arguments, 1);
try {
t.apply(null, e);
} catch (e) {
if (!window.console) return;
if (!M(window.console.log)) return;
var i = "Error in LiveChatAPI call", n = [];
e.name && n.push(e.name);
e.message && n.push(e.message);
n.length && (i += ": " + n.join(" - "));
window.console.log(i);
M(window.console.dir) && window.console.dir(e);
window.console.log(t.toString());
}
}
function f(t) {
return function() {
var e = Array.prototype.slice.call(arguments);
setTimeout(function() {
t.apply(null, e);
}, 0);
};
}
function g(t) {
return K.test(t);
}
function p(t) {
q.fullyExtend(W, t);
L && L.update(W);
}
function m(t) {
q.fullyDelete(W, t);
if (L) {
L.update(null);
L.update(W);
}
}
function $(t) {
return t ? P.getValue(t) : P.getValue();
}
function b(t, e) {
O.push([ t, e ]);
}
function w() {
return O;
}
function x() {
var t;
try {
t = U.parse(V().get("api_calls"));
} catch (t) {}
return F(t) ? t : [];
}
function v() {
return Y;
}
function y(t, e, i) {
return z.rateLimit(t, {
interval: i.interval,
limit: i.limit,
callback: function() {
window.console && window.console.log && window.console.log(X.getPrefix() + ": " + e + " has been ratelimited. This call has been ignored.");
}
});
}
function j(t) {
G.increment("jsapi.usage", [ "source:" + R, "method:" + t ]);
}
var C, S, A, k, I, N, T, B, D, E, O, L, W, P, R, F = i(21), M = i(20), V = i(36), H = i(6), q = i(11), z = i(357), U = i(56), G = i(356), Y = "Zendesk Chat", X = {
init: n,
callNow: h,
handleDelayed: c,
callOnFastInit: l,
callOnRegistered: d,
callOnReattached: u,
isHexColor: g,
getCallbackCaller: f,
saveAPISettings: p,
resetAPISettings: m,
getServerSettings: $,
savePopoutAPICalls: b,
getPopoutAPICalls: w,
parseAPIFromQuery: x,
getPrefix: v,
rateLimit: y,
instrument: j
}, Z = Array.prototype.slice, K = /^#[0-9A-F]{6}$/i;
t.exports = X;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_AbsolutePaddingContainer = i(164);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_AbsolutePaddingContainer, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(6), e = i(9), n = t.root.$("livechat").$("ui").$("mobile$bool").getValue(), o = c.setAbsPaddingBottom;
c.setAbsPaddingBottom = function() {
n || o.apply(c, arguments);
};
!function() {
e.mobile(c);
e.tablet(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_AbsolutePaddingContainer.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {},
"&.mobile": {
margin: "0 auto",
height: "auto",
border: "none",
maxWidth: "$$mobileMaxWidthS"
},
"&.tablet": {
maxWidth: "$$mobileMaxWidth"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_AbsolutePaddingContainer, {
fqname: "meshim_widget_widgets_ChatWindowContent"
});
return t;
}();
}, function(t, e) {
function i(t) {
return "number" == typeof t;
}
t.exports = i;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "inner", "", [], {
id: "inner",
addClass: "scrollable_inner",
container: "default"
} ], [ n.__$$__jx_ui_Widget, "", "", [], {
addClass: "scrollable_fixed_top"
} ], [ n.__$$__jx_ui_Widget, "", "", [], {
addClass: "scrollable_fixed_bottom"
} ] ], {
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__inner");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
c.defaultPlacement = h;
var f = function() {
function t() {
a && window.clearTimeout(a);
a = window.setTimeout(e, 10);
}
function e() {
a && window.clearTimeout(a);
a = null;
if (c.dom) {
c[n() ? "addClass" : "removeClass"]("scroll_top");
c[o() ? "addClass" : "removeClass"]("scroll_bottom");
c[r() ? "addClass" : "removeClass"]("scrollable");
}
}
function n() {
return !h.getScrollTop();
}
function o() {
return h.getScrollTop() + h.getHeight() >= h.getScrollHeight();
}
function r() {
return h.getScrollHeight() > h.getHeight();
}
var a, s = i(6), _ = i(9), l = s.root.$("livechat").$("ui").$("theme_loaded$bool"), d = s.root.$$("livechat.ui.mobile$bool");
h.on("scroll", t);
c.updateScrollStyles = t;
c.getScrollHeight = function() {
return h.getScrollHeight();
};
c.getScrollTop = function() {
return h.getScrollTop();
};
c.getHeight = function() {
return h.getHeight();
};
c.setScrollTop = function(t) {
return h.setScrollTop(t);
};
!function() {
c.autobind(l, "value", t);
t();
_.mobile(c);
_.popout(c);
_.windowSize(c, "sf_");
d.getValue() && c.addClass("mobile");
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self, .scrollable_inner": {
position: "relative",
"width, height": "100%"
},
".scrollable_inner": {
overflowX: "hidden",
overflowY: "auto",
paddingBottom: "0 !important"
},
".scrollable_fixed_top, .scrollable_fixed_bottom": {
position: "absolute",
"left, right": 0,
pointerEvents: "none"
},
".scrollable_fixed_top": {
top: 0,
height: "$$scrollableFrameTopHeight",
background: "$$scrollableFrameTopBackground",
backgroundColor: "$$scrollableFrameTopBackgroundColor"
},
".scrollable_fixed_bottom": {
bottom: 0,
height: "$$scrollableFrameBottomHeight",
background: "$$scrollableFrameBottomBackground",
backgroundColor: "$$scrollableFrameBottomBackgroundColor"
},
"&.scroll_top .scrollable_fixed_top": {
display: "none"
},
"&.scroll_bottom .scrollable_fixed_bottom": {
display: "none"
},
"&.scroll .scrollable_inner": {},
"&.sf_small": {
padding: "$$scrollableFramePaddingSmall",
".scrollable_inner": {
padding: "$$scrollableFrameInnerPaddingSmall"
}
},
"&.sf_medium": {
padding: "$$scrollableFramePaddingMedium",
".scrollable_inner": {
padding: "$$scrollableFrameInnerPaddingMedium"
}
},
"&.sf_large": {
padding: "$$scrollableFramePaddingLarge",
".scrollable_inner": {
padding: "$$scrollableFrameInnerPaddingLarge"
}
},
"&.popout": {
"@media only screen and (max-width: 300px)": {
padding: "$$scrollableFramePaddingSmall",
".scrollable_inner": {
padding: "$$scrollableFrameInnerPaddingSmall"
}
},
"@media only screen and (min-width: 300px) and (max-width: 500px)": {
padding: "$$scrollableFramePaddingMedium",
".scrollable_inner": {
padding: "$$scrollableFrameInnerPaddingMedium"
}
},
"@media only screen and (min-width: 500px)": {
padding: "$$scrollableFramePaddingLarge",
".scrollable_inner": {
padding: "$$scrollableFrameInnerPaddingLarge"
}
}
},
"&.mobile": {
borderBottom: "none",
".scrollable_inner": {
padding: "10px"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_ScrollableFrame"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "span";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_span"
});
t.exports = n;
}, function(t, e) {
function i(t) {
"use strict";
if (null == this) throw new TypeError();
var e = Object(this), i = e.length >>> 0;
if (0 === i) return -1;
var n = 0;
if (arguments.length > 0) {
n = Number(arguments[1]);
n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n)));
}
if (n >= i) return -1;
for (var o = n >= 0 ? n : Math.max(i - Math.abs(n), 0); o < i; o++) if (o in e && e[o] === t) return o;
return -1;
}
function n(t, e, i) {
return o.call(e, t, i);
}
var o = Array.prototype.indexOf;
"function" == typeof o && /\[native code\]/.test(o.toString()) || (o = i);
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
addClass: "bottom"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(9);
!function() {
t.mobile(c);
t.windowSize(c, "bottom_");
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
"bottom, left": 0,
width: "100%",
textAlign: "center",
"*overflow": "hidden",
paddingTop: "$$margin",
paddingBottom: 0,
height: "$$bottomHeight",
borderWidth: "$$bottomBorderWidth",
borderStyle: "$$bottomBorderStyle",
borderColor: "$$bottomBorderColor",
"&.bottom_padding_bottom": {
paddingBottom: "$$margin",
height: "$$bottomHeightBottomPadding"
},
"&.bottom_small": {
"paddingLeft, paddingRight": "10px"
},
"&.bottom_medium": {
"paddingLeft, paddingRight": "20px"
},
"&.bottom_large": {
"paddingLeft, paddingRight": "50px"
}
},
"&.note": {
height: "auto",
fontSize: "$$fontSizeXS",
padding: "$$margin",
borderWidth: "$$bottomNoteBorderWidth",
borderStyle: "$$bottomNoteBorderStyle",
borderColor: "$$bottomNoteBorderColor"
},
"&.padding_bottom": {
height: "$$bottomHeightBottomPadding"
},
"&.mobile": {
position: "relative",
padding: "$$margin",
height: "auto"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Bottom"
});
return t;
}();
}, function(t, e, i) {
function n() {
m = O.throttle(r, 2e3);
$ = O.debounce(a, 100);
b = L.root.$("livechat");
w = b.$("channel");
x = w.$("chatting$bool");
y = w.$("log");
v = w.$("last_read");
S = b.$("profile").$("nick$string");
C = b.$("ui").$("chat_button").$("unread_count$int");
k = 0;
T = 0;
I = 0;
N = [];
w.on("value", function(t) {
null === t && (D = B = void 0);
});
S.on("value", function(t) {
if (t && t !== A) {
A && v.$(A).$("timestamp$int").un("value", l);
A = t;
v.$(t).$("timestamp$int").on("value", l);
}
});
x.on("value", d);
y.on("value", function(t) {
j = t;
});
y.on("keys", o);
}
function o(t) {
if (t && t.length && A) {
for (var e, i, n, o, r = 0, a = t.length; r < a; r++) {
e = j[t[r]];
if (e) {
i = e.timestamp$int;
n = e.type$string;
o = e.nick$string;
i > T && (T = i);
switch (n) {
case "chat.comment":
w.update({
last_comment_ts$int: i
});
break;

case "chat.rating":
w.update({
last_rating_ts$int: i
});
break;

case "chat.memberjoin":
case "chat.join":
W.isAgentNick(o) && u(i);
break;

case "chat.memberleave":
W.isAgentNick(o) ? c(i) : f();
break;

case "chat.mention":
case "chat.msg":
o != A && -1 === N.indexOf(i) && N.push(i);
_(i, o, t[r]);

default:
W.isAgentNick(o) && 0 === k && u(i);
}
}
}
$();
}
}
function r() {
x.getValue() && b.$("ui").$("chat").write({
read_ts$int: T
});
}
function a() {
for (;N[0] <= I; ) N.shift();
C.update(N.length);
}
function s() {
C.update(0);
N = [];
m();
}
function _(t, e, i) {
if (e != A) {
if (!B) {
B = t;
w.update({
first_account_msg_id$string: i,
first_account_msg_ts$int: t
});
}
} else if (!D) {
D = t;
w.update({
first_visitor_msg_ts$int: t
});
}
}
function l(t) {
if (!E(t, !0)) {
I = t;
T > 0 && $();
}
}
function d(t) {
if (!1 === t) {
s();
w.getValue("served$bool") && g();
}
}
function u(t) {
k++;
h(t);
}
function c(t) {
k = Math.max(k - 1, 0);
h(t);
}
function h(t) {
if (0 === k) w.update({
last_agent_leave_ts$int: t
}); else {
1 === k && w.update({
served$bool: !0
});
w.getValue("last_agent_leave_ts$int") && w.update({
last_agent_leave_ts$int: null
});
}
}
function f() {
g();
}
function g() {
k = 0;
w.update({
served$bool: !1,
first_visitor_msg_ts$int: null,
first_account_msg_ts$int: null,
first_account_msg_id$string: null,
last_agent_leave_ts$int: null,
last_comment_ts$int: null,
last_rating_ts$int: null
});
D = B = void 0;
T = I = 0;
N = [];
}
function p() {
g();
A = void 0;
}
var m, $, b, w, x, v, y, j, C, S, A, k, I, N, T, B, D, E = i(25), O = i(34), L = i(6), W = i(11), P = {
init: n,
resetUnreadCount: s,
updateUnreadCount: $,
resetState: p
};
t.exports = P;
}, function(t, e) {
function i(t, e) {
function i() {
s = !s;
t.apply(o, n);
}
var n, o, r, a, s = !0;
return function() {
n = Array.prototype.slice.call(arguments);
o = this;
if (s) {
a = setTimeout(function() {
s = !0;
}, e);
return i();
}
a && clearTimeout(a);
r && clearTimeout(r);
r = setTimeout(i, e);
};
}
function n(t, e) {
function i() {
t.apply(o, n);
}
var n, o, r;
return function() {
r && clearTimeout(r);
n = Array.prototype.slice.call(arguments);
o = this;
r = setTimeout(i, e);
};
}
function o(t, e) {
function i() {
a = +new Date();
r = null;
t.apply(o, n);
}
var n, o, r, a = 0;
return function() {
n = Array.prototype.slice.call(arguments);
o = this;
if (!r) {
var t = +new Date() - a;
t >= e ? i() : r = setTimeout(i, e - t);
}
};
}
function r(t, e) {
function i() {
a = +new Date();
n = o.length > 1 ? setTimeout(i, e) : null;
t.apply(r.shift(), o.shift());
}
var n, o = [], r = [], a = 0;
return function() {
o.push(Array.prototype.slice.call(arguments));
r.push(this);
if (!n) {
var t = +new Date() - a;
t >= e ? i() : n = setTimeout(i, e - t);
}
};
}
var a = {
debounceExceptFirst: i,
debounce: n,
throttle: o,
queue: r
};
t.exports = a;
}, function(t, e, i) {
function n() {
return window.document.documentElement.clientWidth > window.document.documentElement.clientHeight;
}
function o(t) {
}
function r() {
return y && p.test(v);
}
function a() {
return y && /(iemobile|windows phone)/i.test(x);
}
function s() {
return y && f.test(v) && !g.test(x);
}
function _() {
var t = window.document.documentElement.clientWidth, e = window.document.documentElement.clientHeight, i = t / e > b, n = window.screen.width, o = window.screen.height;
if (i && n < o) {
n = window.screen.height;
o = window.screen.width;
}
var r = window.innerWidth, _ = t / n;
window.devicePixelRatio && s() && !d.isIOS ? _ *= window.devicePixelRatio : a() && (_ *= 1.5);
var l = t / r / _;
l = (l / j.MOBILE_ZOOM_ADDITIONAL).toFixed(2);
return l;
}
function l() {
var t = window, e = t.document.documentElement, i = t.document.body, n = null, o = {
top: 0,
left: 0
};
u(e.getBoundingClientRect) && (u(t.getComputedStyle) ? "relative" == t.getComputedStyle(i).position ? n = i : "relative" == t.getComputedStyle(e).position && (n = e) : i.currentStyle ? "relative" == i.currentStyle.position ? n = i : "relative" == e.currentStyle.position && (n = e) : "relative" == i.style.position ? n = i : "relative" == e.style.position && (n = e));
if (n) {
var r = n.getBoundingClientRect();
o.top = r.top + t.pageYOffset - e.clientTop;
o.left = r.left + t.pageXOffset - e.clientLeft;
}
return o;
}
var d = i(8), u = i(20), c = i(175), h = i(379), f = /google inc\./i, g = /chrome/i, p = /apple computer, inc\./i, m = /crios/i, $ = /OS ([_0-9]+) like Mac OS X/i, b = 1.45, w = c.getVariable("navigator"), x = w.userAgent || "", v = w.vendor || "", y = h(), j = {
isMobileBrowser: y,
isMobileWhitelist: function() {
for (var t = !1, e = [ /(android (?:[2-9]|[1-9][0-9]+))|(iemobile\/(?![5-9]))|(ucbrowser)|(Webkit.+Chrome)|(ipod|iphone|ipad).+applewebkit.+(CriOS|Version\/[5-9]|Mobile)/i ], i = 0, n = e.length; i < n; i++) if (e[i].test(x)) {
t = !0;
break;
}
/android.+ucbrowser/i.test(x) && (t = !1);
return t;
}(),
isMobileTablet: function() {
var t, e = window.document.documentElement.clientWidth;
t = n() ? e > C : e > S;
return t;
}(),
isAndroid: function() {
return y && f.test(v);
}(),
isIOS: r(),
isWP: a(),
isIEMobile: a(),
isChromeIOSMobile: function() {
return y && p.test(v) && m.test(x);
}(),
isSafariIOSMobile: function() {
return y && p.test(v) && !m.test(x);
}(),
isChromeAndroidMobile: function() {
return y && f.test(v) && g.test(x);
}(),
isOperaAndroidMobile: function() {
return y && /(opera|opr).*android|android.*(opera|opr)/i.test(x);
}(),
isNativeAndroidMobile: s(),
isUCBrowserMobile: function() {
return y && /ucbrowser/i.test(x);
}(),
iOSVersion: function() {
if (r()) {
var t = x.match($);
return t && parseFloat(t[1].split("_").slice(0, 2).join("."));
}
}(),
hideVirtualKeyboard: o,
checkLandscape: n,
getZoomLevel: _,
getOffset: l,
MOBILE_ZOOM_ADDITIONAL: 1.2
}, C = 640, S = 320;
t.exports = j;
}, function(t, e, i) {
function n(t) {
if (!(this instanceof n)) {
_ || n._initSingleton(window);
return _;
}
if (t) return n.parseQuery(t);
this.store = {};
}
function o(t, e, i) {
if (void 0 === e && void 0 === i) return t;
void 0 === e && (e = "string");
if (!(e in s)) throw "invalid type requested";
return void 0 === t ? void 0 !== i ? i : s[e] : "boolean" === e ? a.test(t) : "integer" === e ? !0 === t ? 1 : parseInt(t, 10) : "float" === e ? !0 === t ? 1 : parseFloat(t) : t;
}
var r = i(21), a = /^(1|on|true)$/i, s = {
boolean: !1,
integer: 0,
float: 0,
string: ""
}, _ = null;
n._initSingleton = function(t) {
_ = new n(t.location.search);
};
n.buildQuery = function(t) {
var e, i, n, o, a, s, _ = [], l = [];
for (a in t) Object.prototype.hasOwnProperty.call(t, a) && _.push(a);
_.sort();
for (e = 0, n = _.length; e < n; e++) {
a = _[e];
s = t[a];
a = window.encodeURIComponent(a);
if (r(s)) if (1 !== s.length || !0 !== s[0]) for (i = 0, o = s.length; i < o; i++) l.push(a + "=" + window.encodeURIComponent(s[i] + "")); else l.push(a); else l.push(a + "=" + window.encodeURIComponent(s + ""));
}
return l.join("&");
};
n.parseQuery = function(t) {
var e, i, o = new n();
t = t.replace(/^\?|\/+$/g, "");
var r, a, s = t.split("&");
for (e = 0, i = s.length; e < i; e++) {
var _ = s[e];
if (_.length) {
var l = _.indexOf("=");
if (l <= -1) {
r = _;
a = !0;
} else {
r = _.slice(0, l);
a = window.decodeURIComponent(_.slice(l + 1));
}
o.add(window.decodeURIComponent(r), a);
}
}
return o;
};
n.getHash = function(t, e) {
var i = e || window.location.hash;
return n.parseQuery(i.replace(/^#/, "")).get(t);
};
var l = n.prototype;
l.add = function(t, e) {
this.has(t) ? this.store[t].push(e) : this.store[t] = [ e ];
};
l.has = function(t) {
return Object.prototype.hasOwnProperty.call(this.store, t);
};
l.getLast = function(t, e, i) {
return this.has(t) ? this.getAt(t, this.store[t].length - 1, e, i) : o(void 0, e, i);
};
l.getFirst = function(t, e, i) {
return this.getAt(t, 0, e, i);
};
l.getAt = function(t, e, i, n) {
return o(this.has(t) ? this.store[t][e] : void 0, i, n);
};
l.getRaw = function(t) {
return this.has(t) ? this.store[t].concat() : [];
};
l.get = l.getLast;
l.toString = function() {
return n.buildQuery(this.store);
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
type: "button"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(9);
!function() {
t.mobile(c);
t.rtl(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
background: "transparent",
border: "none",
position: "relative",
width: "100%",
overflow: "hidden",
cursor: "pointer",
"*zoom": 1,
textAlign: "left",
padding: "$$menuItemPadding",
"*": {
cursor: "pointer"
}
},
"&.rtl": {
textAlign: "right"
},
"&:hover": {
background: "$$menuItemHoverBg"
},
"&.mobile": {
borderTopWidth: "$$menuBorderWidth",
borderTopStyle: "$$menuBorderStyle",
borderTopColor: "$$menuBorderColor"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_menu_Item"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, o, a);
}
var o = i(1), r = i(3), a = i(0), s = i(7);
n.__jx__jcss = {
"**self": {
lineHeight: "1.2",
marginBottom: "$$marginL"
},
"&.short": {
marginBottom: "0"
}
};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_Body"
});
n.prototype.__jx__super = s;
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Branding = i(89);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "container_and_brand_wrapper", "", [ [ n.__$$__jx_ui_Widget, "$$defaultplacement$$", "", [], {
container: "default",
addClass: "container",
id: "$$defaultplacement$$"
} ], [ n.__$$__meshim_widget_widgets_Branding, "branding", "", [], {
id: "branding",
addClass: "chat_window_panel_branding",
hideOnDesktop: "true"
} ] ], {
id: "container_and_brand_wrapper",
addClass: "container_and_brand_wrapper"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__container_and_brand_wrapper"), f = s.get(o + "__$$defaultplacement$$"), g = s.get(o + "__branding");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
c.defaultPlacement = f;
var p = function() {
function t() {
var i;
if (v) {
i = "free_flow_with_fixed_titlebar_layout";
if (d.isStyleSupported("overflow-scrolling")) {
e();
l(h);
}
} else i = w ? "free_flow_layout" : "full_frame_layout";
if (i !== t.lastClassName) {
c.removeClass(t.lastClassName);
c.addClass(i);
t.lastClassName = i;
}
}
function e() {
function t() {
h.setCSSStyle("webkitOverflowScrolling", "auto");
setTimeout(function() {
h.setCSSStyle("webkitOverflowScrolling", "touch");
}, 50);
}
c.autobind(b.$("chat_window").$("display$bool"), "value", function(e) {
e && t();
});
}
function n() {
var t;
t = o ? "cwp_mini" : w || x ? "cwp_full" : "cwp_" + y.getValue();
if (t !== n.lastClassName) {
c.removeClass(n.lastClassName);
c.addClass(t);
n.lastClassName = t;
}
}
var o, r = i(31), a = i(12), s = i(6), _ = i(9), l = i(359), d = i(11), u = i(169), f = i(167), p = i(166), m = i(353), $ = s.root, b = $.$("livechat").$("ui"), w = b.getValue("mobile$bool"), x = b.getValue("popout$bool"), v = b.getValue("mobile_overlay$bool"), y = $.$("livechat").$("settings").$("theme").$("chat_window").$("size$string");
c.setTitleBar = function(t) {
if (!c.titleBar) {
var e = t.split(",");
if (-1 == r("none", e)) {
c.titleBar = new u(c);
c.addClass("has_title_bar");
for (var i = 0, n = e.length; i < n; i++) switch (e[i]) {
case "hidePopout":
c.titleBar.setHidePopout(!0);
}
} else {
c.titleBar = !0;
c.removeClass("has_title_bar");
}
}
};
c.getDraggableNode = function() {
return c.titleBar instanceof u ? c.titleBar : null;
};
c.setActionBar = function(t) {
if (!c.actionBar) {
var e = t.split(",");
if (-1 == r("none", e)) if (w) {
if (-1 != r("default", e)) {
c.actionBar = new p(c);
c.actionBar.addClass("mobile_options_menu_icon");
}
} else {
c.addClass("has_action_bar_at_bottom");
-1 != r("default", e) ? c.actionBar = new m(c) : c.actionBar = new f(c);
} else {
c.actionBar = !0;
c.removeClass("has_action_bar_at_bottom");
}
}
};
c.setMiniSize = function(t) {
o = a(t);
n();
};
c.setHideBrandingMobile = function(t) {
t = a(t);
w && t ? g.addClass("hidden") : g.removeClass("hidden");
};
!function() {
_.rtl(c);
c.autobind(y, "value", n);
t();
}();
}();
for (var m in p) c[m] = p[m];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
margin: "$$chatWindowPanelMargin"
},
".container": {
position: "relative",
background: "$$windowContentBg",
borderWidth: "$$windowContentBorderWidth",
borderStyle: "$$windowContentBorderStyle",
borderColor: "$$windowContentBorderColor"
},
".mobile_options_menu_icon": {
position: "absolute",
zIndex: "102"
},
".chat_window_panel_branding": {
display: "block",
padding: "5px",
margin: "10px 0",
textAlign: "center",
"&.hidden": {
display: "none !important"
}
},
".container_and_brand_wrapper": {
"width, height": "100%"
},
"&.full_frame_layout": {
overflow: "hidden",
"width, height": "100%",
".container": {
"width, height": "100%",
overfow: "hidden"
}
},
"&.free_flow_layout": {
overflow: "auto",
"width, height": "auto",
".container": {
"width, height": "auto"
}
},
"&.free_flow_with_fixed_titlebar_layout": {
overflow: "hidden",
"width, height": "100%",
".container_and_brand_wrapper": {
overflow: "auto",
"-webkit-overflow-scrolling": "touch"
},
".container": {
"width, height": "auto"
}
},
"&.has_title_bar": {
paddingTop: "$$titleBarHeight"
},
"&.has_action_bar_at_bottom": {
paddingBottom: "$$actionBarHeight"
},
"&.cwp_small": {
width: "$$windowSmallWidth",
height: "$$windowSmallHeight"
},
"&.cwp_medium": {
width: "$$windowMediumWidth",
height: "$$windowMediumHeight"
},
"&.cwp_large": {
width: "$$windowLargeWidth",
height: "$$windowLargeHeight"
},
"&.cwp_full": {
"width, height": "100%"
},
"&.cwp_mini": {
width: "$$windowMiniWidth",
height: "$$windowMiniHeight"
},
"&.ltr": {
".mobile_options_menu_icon": {
"top, left": 0
}
},
"&.rtl": {
".mobile_options_menu_icon": {
"top, right": 0
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_ChatWindowPanel"
});
return t;
}();
}, function(t, e, i) {
function n() {
c = b.root;
h = c.$("livechat").$("settings").$("cookie_law");
f = h.$("enabled$bool");
g = c.$("livechat").$("profile");
p = g.$("allow_cookies$bool");
var t = $.getAllowCookieLaw();
"boolean" == typeof t && g.write({
allow_cookies$bool: t
});
}
function o() {
c.$("connection").$("status$string").getValue() ? window.console && window.console.log && window.console.log("Zendesk Chat: Cookie Law mode must be enabled immediately after embedding script") : h.write({
enabled$bool: !0
});
}
function r(t) {
t = m(t);
var e = s(), i = _();
if (t !== e) {
$.setAllowCookieLaw(t);
g.write({
allow_cookies$bool: t
});
if (a()) {
!1 === t && b.livechat.clearAll();
t !== i && b.livechat.reconnect();
}
}
}
function a() {
return !!f.getValue();
}
function s() {
return p.getValue();
}
function _() {
var t = s();
return "boolean" != typeof t || t;
}
function l() {
var t = a(), e = _();
return t && !1 === e;
}
function d() {
"boolean" != typeof s() && r(!1);
}
function u() {
if (x.isCookieDenied()) {
var t = w.cookie_law.request_use_cookies_golion + "\n\n" + w.cookie_law.privacy_policy + ": https://www.zendesk.com/privacy";
if (window.confirm(t)) {
x.setUserChoice(!0);
return !0;
}
return !1;
}
return !0;
}
var c, h, f, g, p, m = i(12), $ = i(93), b = i(6), w = i(10), x = {
init: n,
enableCookieLaw: o,
setUserChoice: r,
isCookieDenied: l,
setDefaultImplicitConsent: d,
requestPermission: u
};
t.exports = x;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "form");
r.method || (r.method = "post");
s.call(this, t, e, i, o, r);
this.on("submit", function(t) {
this.validate() || t.preventDefault();
});
this.on("reset", function(t) {
t.preventDefault();
this.reset();
});
}
var o = i(1), r = i(0), a = i(12), s = i(7);
n.prototype = r(s.prototype);
o(n, s, {
fqname: "jx_ui_Form"
});
n.prototype.submit = function() {
this.dom.submit();
return this;
};
n.prototype.reset = function() {
for (var t = this.getElements(), e = 0; e < t.length; e++) t[e].reset && t[e].reset();
return this;
};
n.prototype.getElements = function() {
for (var t = [], e = 0, i = this.dom.elements.length; e < i; e++) t.push(this.dom.elements[e].jx_wrapper || this.dom.elements[e]);
return t;
};
n.prototype.getAutocomplete = n.prototype.getAutoComplete = function() {
return this.dom.autocomplete;
};
n.prototype.setAutocomplete = n.prototype.setAutoComplete = function(t) {
if (void 0 === this.dom.autocomplete) return this;
var e = "";
if ("boolean" == typeof t) {
this.dom.autocomplete = t ? "on" : "off";
return this;
}
switch (t) {
case "false":
e = "off";
break;

case "true":
e = "on";
break;

default:
e = t;
}
this.dom.autocomplete = e;
return this;
};
n.prototype.getNoValidate = function() {
return this.dom.noValidate;
};
n.prototype.setNoValidate = function(t) {
this.dom.noValidate = a(t);
return this;
};
n.prototype.getMethod = function() {
return this.dom.method;
};
n.prototype.setMethod = function(t) {
this.dom.method = t;
return this;
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
a || (a = {});
a.tagName || (a.tagName = "input");
d.call(this, t, e, i, o, a);
if (r.engineIE <= 8 && a.type && a.tagName && "input" == a.tagName.toLowerCase()) {
var s = this.parentNode;
this.parentNode.removeChild(this.parentNode instanceof c ? this : this.dom);
this.dom = t.doc.createElement("<" + a.tagName + ' type="' + a.type + '" name="' + (a.name || "") + '"/>');
this.dom.jx_wrapper = this;
this.style = this.dom.style;
s.appendChild(s instanceof c ? this : this.dom);
this.setStyle(i);
this.setAttributes(a);
this.addClass(this.__jx__fqname);
}
a.initialValue && this.setValue(a.initialValue);
this.setAttribute("id", this.jx_id);
a.label && this.setLabel(a.label);
a.errorMessage && this.setErrorMessage(a.errorMessage);
this.on("blur", function() {
this.onAutoValidate();
});
}
var o = i(1), r = i(8), a = i(0), s = i(12), _ = i(31), l = i(19), d = i(7), u = i(41), c = i(23), h = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-z0-9][a-z0-9-]*[a-z0-9])$/i, f = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i, g = {
required: 1,
pattern: 2,
maxlength: 4,
min: 8,
max: 16,
step: 32
}, p = {
button: 1,
checkbox: 1,
email: 7,
hidden: 0,
number: 57,
password: 3,
radio: 1,
range: 25,
reset: 0,
search: 7,
select: 1,
submit: 0,
tel: 7,
text: 63,
textarea: 1,
url: 7
};
n.prototype = a(d.prototype);
o(n, d, {
fqname: "jx_ui_Input"
});
n.prototype.getLabel = function() {
return this.label && this.label.getText();
};
n.prototype.setLabel = function(t) {
t && this.createLabel(t);
this.label && this.label.setText(t);
return this;
};
n.prototype.createLabel = function(t) {
if (this.label instanceof c) return this;
if (!this.dom.parentNode) return this;
this.label = new l(this.parentNode, null, null, null, {
tagName: "label"
});
this.getNextSibling() != this.label && this.parentNode.insertBefore(this.label, this.getNextSibling());
this.label.setAttribute("for", this.jx_id || "");
this.label.addClass("label");
this.label.addClass(this.attributes.type || this.getInputType() || "");
this.label.setText(t || this.attributes.label || "");
this.defaultLabel = !0;
return this;
};
n.prototype.getLabelElement = function() {
return this.label;
};
n.prototype.setLabelElement = function(t) {
if (!(t instanceof c)) return this;
this.defaultLabel && this.label.destroy();
this.label = t;
this.label.setAttribute("for", this.jx_id || "");
this.defaultLabel = !1;
return this;
};
n.prototype.getErrorMessage = function() {
return this.errorMessage && this.errorMessage.getText();
};
n.prototype.setErrorMessage = function(t) {
t && this.createErrorMessage(t);
this.errorMessage && this.errorMessage.setText(t);
return this;
};
n.prototype.showErrorMessage = function() {
this.errorMessage && this.errorMessage.setVisible(!0).setDisplay("");
return this;
};
n.prototype.hideErrorMessage = function() {
this.errorMessage && this.errorMessage.setVisible(!1);
return this;
};
n.prototype.createErrorMessage = function(t) {
if (this.errorMessage instanceof c) return this;
if (!this.dom.parentNode) return this;
this.errorMessage = new l(this.parentNode, null, null, null, {
tagName: "label"
});
(this.label ? this.label.getNextSibling() : this.getNextSibling()) != this.errorMessage && this.parentNode.insertBefore(this.errorMessage, this.label ? this.label.getNextSibling() : this.getNextSibling());
this.errorMessage.setAttribute("for", this.jx_id || "");
this.errorMessage.addClass("error_message");
this.errorMessage.addClass(this.attributes.type || this.getInputType() || "");
this.setErrorMessage(t || this.attributes.errorMessage || "");
this.hideErrorMessage();
this.defaultErrorMessage = !0;
return this;
};
n.prototype.getErrorMessageElement = function() {
return this.errorMessage;
};
n.prototype.setErrorMessageElement = function(t) {
if (!(t instanceof c)) return this;
this.defaultErrorMessage && this.errorMessage.destroy();
this.errorMessage = t;
this.errorMessage.setAttribute("for", this.jx_id || "");
this.defaultErrorMessage = !1;
return this;
};
n.prototype.validate = function(t) {
var e = this.getInputType(), i = this.getValue(), n = p[e], o = this.dom, r = (!(n & g.required) || !o.required || "" !== (i || "").trim() && null != i) && (!(n & g.pattern) || !o.pattern || new RegExp(o.pattern).test(i)) && (!(n & g.maxlength) || !(o.maxLength && o.maxLength >= 0) || i.length <= o.maxLength) && (!(n & g.min) || !o.min || parseFloat(i) >= parseFloat(o.min)) && (!(n & g.max) || !o.max || parseFloat(i) <= parseFloat(o.max)) && ("email" != e || (o.required ? h.test(i) : "" === i || h.test(i))) && ("url" != e || (o.required ? f.test(i) : "" === i || f.test(i)));
!r && t && this.focus();
this.setValidity(r);
return r;
};
n.prototype.getValidity = function() {
return this.validity;
};
n.prototype.setValidity = function(t) {
this.validity = s(t);
this.validity ? (this.hideErrorMessage(), this.addClass("valid"), this.removeClass("invalid")) : (this.showErrorMessage(), 
this.removeClass("valid"), this.addClass("invalid"));
return this;
};
n.prototype.getAutoValidate = function() {
return this.autoValidate;
};
n.prototype.setAutoValidate = function(t) {
this.autoValidate = s(t);
return this;
};
n.prototype.onAutoValidate = function() {
if (this.autoValidate && !this.getDisabled() && !this.getReadOnly()) return this.validate();
};
n.prototype.reset = function() {
var t = this.getType();
if ("submit" == t || "reset" == t) return this;
this.setValue(this.getInitialValue() || "").setValidity(!0);
return this;
};
var m = "textarea button select".split(" ");
n.prototype.getInputType = function() {
return -1 != _(this.tagName, m) ? this.tagName : this.getType();
};
n.prototype.getType = function() {
return this.validationType || d.prototype.getType.call(this);
};
n.prototype.setType = function(t) {
this.validationType = t;
d.prototype.setType.call(this, t);
};
n.prototype.getInitialValue = function() {
return r.engineIE <= 8 ? this._initialValue : this.dom.getAttribute("value");
};
n.prototype.setInitialValue = function(t) {
r.engineIE <= 8 ? this._initialValue = t && (t.toString ? t.toString() : t) : this.setAttribute("value", t);
return this;
};
n.prototype.getRequired = function() {
return this.dom.required;
};
n.prototype.setRequired = function(t) {
this.dom.required = s(t);
return this;
};
n.prototype.getPattern = function() {
return this.dom.pattern;
};
n.prototype.setPattern = function(t) {
this.dom.pattern = t;
return this;
};
n.prototype.getMin = function() {
return this.dom.min;
};
n.prototype.setMin = function(t) {
this.dom.min = t;
return this;
};
n.prototype.getMax = function() {
return this.dom.max;
};
n.prototype.setMax = function(t) {
this.dom.max = t;
return this;
};
n.prototype.getMaxLength = function() {
return this.dom.maxLength;
};
n.prototype.setMaxLength = function(t) {
this.dom.maxLength = parseInt(t, 10);
return this;
};
n.prototype.getStep = function() {
return this.dom.step;
};
n.prototype.setStep = function(t) {
this.dom.step = t;
return this;
};
n.prototype.getMultiple = function() {
return this.dom.multiple;
};
n.prototype.setMultiple = function(t) {
this.dom.multiple = s(t);
return this;
};
n.prototype.getAutocomplete = n.prototype.getAutoComplete = u.prototype.getAutocomplete;
n.prototype.setAutocomplete = n.prototype.setAutoComplete = u.prototype.setAutocomplete;
n.prototype.select = function() {
this.dom.select && this.dom.select();
return this;
};
n.prototype.getForm = function() {
return this.dom.form && (this.dom.form.jx_wrapper || this.dom.form);
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "a";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_a"
});
t.exports = n;
}, function(t, e, i) {
function n(t) {
f = t;
}
function o(t) {
y = t ? $.getAuthServerURL(t) : $.AUTH_SERVER_URL;
}
function r(t) {
c = t;
}
function a() {
return c;
}
function s(t) {
if (h) {
+new Date() - h.issued_at >= h.expires_in - 6e4 ? b.authenticate(function(e) {
if (e) {
f && f.$("visitor").$("auth_status$string").update("failed");
t(e, null);
} else t(null, h.id_token);
}) : t(null, h.id_token);
} else t(null, null);
}
function _() {
c = void 0;
h = void 0;
f && f.$("visitor").$("authenticated$bool").update(!1);
}
function l() {
return !!h;
}
function d(t) {
c && c(p.once(function(e) {
e && g(e) ? b.exchangeToken({
account_key: $.ACCOUNT_KEY,
auth_url: y,
site_jwt: e,
state: h && h.state ? h.state : null
}, function(e, i) {
h = i;
f && f.$("visitor").$("authenticated$bool").update(!e);
t(e);
}) : t({
reason: "invalid jwt in callback"
});
}));
}
function u(t, e) {
var i = new XMLHttpRequest();
i.open("POST", t.auth_url, !0);
i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
i.onload = function() {
if (e) {
var t;
try {
var n = i.response;
if ("" === n) throw w;
t = JSON.parse(n);
} catch (t) {
e({
reason: w
});
return;
}
200 === i.status ? e(void 0, {
issued_at: +new Date(),
id_token: t.id_token,
expires_in: 1e3 * t.expires_in,
state: t.state
}) : e({
reason: v,
details: t.details
});
}
};
i.onerror = function() {
e && e({
reason: x
});
};
var n = {
account_key: t.account_key,
token: t.site_jwt,
format: "json"
};
t.state && (n.state = t.state);
var o = m.buildQuery(n);
i.send(o);
}
var c, h, f, g = i(22), p = i(55), m = i(36), $ = i(18), b = {
authenticate: d,
isAuthenticated: l,
getSiteJWTFunc: a,
retrieveIDToken: s,
clearIdentity: _,
setOverrideHost: o,
setSiteJWTFunc: r,
setDataNode: n,
exchangeToken: u
}, w = "format error", x = "network/security error", v = "jwt verification error", y = $.AUTH_SERVER_URL;
t.exports = b;
}, function(t, e) {
var i = {
build_number: "20220524.074445",
git_commit: "884177891bc619f249180c0593fe96008838e370",
release_tag: "!ERR"
};
t.exports = i;
}, function(t, e, i) {
function n(t, e, i, o, r) {
function a(e) {
if (e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && i in h && h[i](e[i], t);
}
if (!(this instanceof n)) return new n(t, e, i, o, r);
c.root.$("tmp").$("api_settings").$("settings").$("theme").$("custom_fonts").$("config$json").on("value", a);
}
function o(t, e) {
for (var i = 0, n = t.urls.length; i < n; i++) d(e, null, null, null, {
href: t.urls[i]
});
}
function r(t, e) {
d(e, null, null, null, {
href: l(t.families, t.text)
});
}
function a(t, e) {
var i = t.projectId, n = t.version;
new u(e, null, null, null, {
src: "//fast.fonts.net/jsapi/" + i + ".js" + (n ? "?v=" + n : "")
});
}
function s(t, e) {
var i = e.ownerDocument;
0 === i.documentElement.getElementsByTagName("script").length && new u(e);
var n = t.api || "https://use.typekit.net";
!function(e) {
var i, o = {
kitId: t.id,
scriptTimeout: 3e3
}, r = e.documentElement, a = setTimeout(function() {
r.className = r.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
}, o.scriptTimeout), s = e.createElement("script"), _ = !1, l = e.getElementsByTagName("script")[0];
r.className += " wf-loading";
s.src = n + "/" + o.kitId + ".js";
s.async = !0;
s.onload = s.onreadystatechange = function() {
i = this.readyState;
if (!(_ || i && "complete" != i && "loaded" != i)) {
_ = !0;
clearTimeout(a);
try {
(e.defaultView ? e.defaultView : e.parentWindow).Typekit.load(o);
} catch (t) {}
}
};
l.parentNode.insertBefore(s, l);
}(i);
}
function _(t, e) {
var i = window.location.hostname, n = t.id;
new u(e, null, null, null, {
src: "//f.fontdeck.com/s/css/js/" + i + "/" + n + ".js"
});
}
function l(t, e) {
for (var i = "//fonts.googleapis.com/css?family=", n = [], o = [], r = 0, a = t.length; r < a; r++) {
var s = t[r].split(":");
3 === s.length && o.push(s.pop().replace(/ /g, "+"));
var _ = 2 == s.length && "" != s[1] ? ":" : "";
n.push(s.join(_).replace(/ /g, "+"));
}
i += n.join("%7C");
o.length > 0 && (i += "&subset=" + o.join(","));
e && e.length > 0 && (i += "&text=" + window.encodeURIComponent(e));
return i;
}
var d = i(253), u = i(252), c = i(6), h = {
custom: o,
google: r,
monotype: a,
typekit: s,
fontdeck: _
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(9);
!function() {
t.mobile(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
padding: "5px 0",
borderTopWidth: "$$menuBorderWidth",
borderTopStyle: "$$menuBorderStyle",
borderTopColor: "$$menuBorderColor",
"*borderTop": "none",
"*zoom": 1,
"*position": "relative"
},
"&:first-child": {
borderTop: "none"
},
"&.flow": {
padding: "0",
margin: "10px"
},
"&.mobile": {
padding: "0",
borderTop: "0 none"
},
"&.border_top": {
borderTopWidth: "$$menuBorderWidth",
borderTopStyle: "$$menuBorderStyle",
borderTopColor: "$$menuBorderColor"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_menu_Section"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "primary", "", [], {
id: "primary",
addClass: "button_container left",
container: "primary"
} ], [ n.__$$__jx_ui_Widget, "secondary", "", [], {
id: "secondary",
addClass: "button_container right",
container: "secondary"
} ], [ n.__$$__jx_ui_Widget, "", "", [], {
addClass: "clear_both"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__primary"), f = s.get(o + "__secondary");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t() {
var t = !!(e && e.rtl && e.rtl()), i = o != t;
h.addClass(i ? "right" : "left");
h.removeClass(i ? "left" : "right");
f.addClass(i ? "left" : "right");
f.removeClass(i ? "right" : "left");
}
var e = i(2), n = i(6), o = n.root.$("livechat").$("ui").$("mobile$bool").getValue() || !1;
!function() {
t();
if (e && e.onLanguage) {
e.onLanguage(t);
c.onDestruction(function() {
e.unLanguage(t);
});
}
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".button_container": {
width: "48%"
},
".left": {
float: "left"
},
".right": {
float: "right"
},
".clear_both": {
clear: "both"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Controls"
});
return t;
}();
}, function(t, e, i) {
var n = i(20), o = i(21), r = i(25), a = function() {
function t() {
if (d || u) return !0;
var t, e = window[window.GoogleAnalyticsObject || "ga"];
if (n(e)) {
u = e;
t = !0;
}
if (window._gaq && window._gat) {
d = window._gaq;
c = window._gat;
t = !0;
}
return t;
}
function e(t) {
var e;
t == f.NEW && u ? n(u.getAll) && (e = u.getAll()) : t == f.OLD && c && (n(c._getTrackers) ? e = c._getTrackers() : n(c._getTrackerByName) && (e = [ c._getTrackerByName() ]));
return o(e) ? e : [];
}
function i(t, e, i, n) {
try {
a(t, e, i, n);
} catch (t) {}
}
function a(e, i, n, o) {
if (!p && t() && e) {
u && s(e, i, n, o);
d && _(e, i, n, o);
}
}
function s(t, i, o, a) {
h = e(f.NEW);
var s = {
hitType: "event",
eventCategory: o || g,
eventAction: t
};
r(i, !0) || (s.eventLabel = i);
r(a, !0) || (s.eventValue = a);
if (h.length) for (var _ = 0, l = h.length; _ < l; _++) n(h[_].send) && h[_].send("event", s); else u("send", s);
}
function _(t, i, o, a) {
h = e(f.OLD);
d.push(function() {
for (var e = 0, s = h.length; e < s; e++) if (n(h[e]._trackEvent)) {
r(i, !0) && (i = void 0);
r(a, !0) && (a = void 0);
h[e]._trackEvent(o || g, t, i, a);
}
});
}
function l(t) {
p = t;
}
var d, u, c, h, f = {
OLD: "ga.js",
NEW: "analytics.js"
}, g = "Zopim Livechat", p = !1;
return {
trackEvent: i,
setDisabled: l
};
}();
t.exports = a;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "td";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_td"
});
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "tr";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_tr"
});
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "tbody";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_tbody"
});
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "table";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_table"
});
t.exports = n;
}, function(t, e, i) {
var n = i(1), o = i(3), r = i(0), a = i(172), s = a;
a = function(t, e, i, n, r) {
if (!(this instanceof a)) return new a(t, e, i, n, r);
if (!a.__jx__jcss_generated) {
o.generate(this, a.prototype.__jx__fqname, a.__jx__jcss, null, a);
a.__jx__jcss_generated = !0;
}
r || (r = {});
s.call(this, t, e, i, n, r);
};
a.__jx__jcss = {
"**self": {
"width, height": "100%"
}
};
a.prototype = r(s.prototype);
n(a, s, {
fqname: "meshim_widget_widgets_ViewStack"
});
a.prototype.__jx__super = s;
t.exports = a;
}, function(t, e, i) {
function n(t, e) {
if (!r(t)) throw new TypeError("FunctionUtils.bind - what is trying to be bound is not callable");
if (r(t.bind) && !("prototype" in t.bind)) return t.bind.apply(t, s.call(arguments, 1));
var i = s.call(arguments, 2), n = function() {}, o = function() {
return t.apply(this instanceof n && e ? this : e, i.concat(s.call(arguments)));
};
n.prototype = o.prototype;
o.prototype = new n();
return o;
}
function o(t) {
var e;
return function() {
if (!e) {
e = !0;
return t.apply(this, s.call(arguments));
}
};
}
var r = i(20), a = {
bind: n,
once: o
}, s = Array.prototype.slice;
t.exports = a;
}, function(t, e, i) {
function n(t) {
return '"' + t.replace(u, o) + '"';
}
function o(t) {
return c[t] || "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
}
function r(t) {
switch (typeof t) {
case "string":
return n(t);

case "number":
return isFinite(t) ? t.toString() : "null";

case "boolean":
return String(t);

case "object":
if (!t) return "null";
var e, i, o = [];
if (l(t)) {
for (e = 0, i = t.length; e < i; e++) o[e] = r(t[e]) || "null";
return "[" + o.join(",") + "]";
}
var a, s, _ = [];
for (a in t) t.hasOwnProperty(a) && _.push(a);
_.sort();
for (e = 0, i = _.length; e < i; e++) {
a = _[e];
s = r(t[a]);
s && o.push(n(a) + ":" + s);
}
if (o.length) return "{" + o.join(",") + "}";
}
}
function a(t, e, i) {
return e ? g[e] : String.fromCharCode(parseInt(i, 16));
}
function s(t) {
var e, i, n, o, r, s = t.match(h), _ = s.length, l = s[0];
"{" == l ? (e = {}, r = 1) : "[" == l ? (e = [], r = 1) : (e = [], r = 0, i = !0);
var d = [ e ];
for (_ = s.length; r < _; ++r) {
l = s[r];
switch (l.charCodeAt(0)) {
case 91:
o = d[0];
d.unshift(o[n || o.length] = []);
n = void 0;
break;

case 93:
d.shift();
break;

case 123:
o = d[0];
d.unshift(o[n || o.length] = {});
n = void 0;
break;

case 125:
d.shift();
break;

case 102:
o = d[0];
o[n || o.length] = !1;
n = void 0;
break;

case 110:
o = d[0];
o[n || o.length] = null;
n = void 0;
break;

case 116:
o = d[0];
o[n || o.length] = !0;
n = void 0;
break;

case 34:
l = l.substring(1, l.length - 1);
-1 !== l.indexOf(m) && (l = l.replace(f, a));
o = d[0];
if (void 0 == n) {
if (!(o instanceof Array)) {
n = l || p;
break;
}
n = o.length;
}
o[n] = l;
n = void 0;
break;

default:
o = d[0];
o[n || o.length] = +l;
n = void 0;
}
}
if (i) {
if (1 == d.length) return e[0];
} else if (!d.length) return e;
throw "error";
}
var _ = i(25), l = i(21), d = !_(window) && window.JSON || {
parse: s,
stringify: r
};
d = {
parse: s,
stringify: r
};
var u = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, c = {
"\b": "\\b",
"\t": "\\t",
"\n": "\\n",
"\f": "\\f",
"\r": "\\r",
"\\": "\\\\",
'"': '\\"'
}, h = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), f = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), g = {
'"': '"',
"/": "/",
"\\": "\\",
b: "\b",
f: "\f",
n: "\n",
r: "\r",
t: "\t"
}, p = new String(""), m = "\\";
t.exports = d;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t, e, n, o, r, a, s, _ = i(16), l = i(6), d = i(92), u = i(378), h = i(364), f = i(243), g = i(229), p = i(221), m = i(219), $ = i(210), b = i(209), w = i(35), x = i(11), v = l.root, y = v.$("livechat").$("ui"), j = y.$("theme_loaded$bool"), C = y.$("mobile$bool"), S = y.$("mobile_overlay$bool"), A = y.$("popout$bool"), k = y.$("mockup$bool");
!function() {
function i() {
if (!e) {
e = new h(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetWindow"
});
T || e.iframe.setTitle("Zendesk Chat widget window");
}
}
u.init();
j.bindValue(function(i) {
if (i && !t) {
t = !0;
_(function() {
e && e.setVisibility("");
n && n.setVisibility("");
o && o.setVisibility("");
r && r.setVisibility("");
a && a.setVisibility("");
s && s.setVisibility("");
x.refocusActiveElement();
});
}
});
var l = window.document.body, v = k.getValue(), I = C.getValue(), N = S.getValue(), T = A.getValue();
(v || T) && (l = c);
if (T) {
var B = w.iOSVersion;
if (I && B && B >= 11.2) {
!function() {
s || (s = new $(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetPopoutMobileWindow"
}));
}();
c.addClass("popout");
} else {
i();
c.addClass("popout");
}
} else if (I) {
d.init();
!function() {
if (!n) {
n = new g(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetMobileButton"
});
n.iframe.setTitle("Zendesk Chat widget button");
}
}();
!function() {
if (!o) {
o = new p(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetMobileUnreadCountBadge"
});
o.iframe.setTitle("Zendesk Chat widget unread count badge");
}
}();
if (N) {
!function() {
if (!a) {
a = new m(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetMobileWindow"
});
a.setTitle("Zendesk Chat widget window");
}
}();
y.$("mobile_notifications$bool").getValue() && function() {
if (!r) {
r = new b(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetMobileNotification"
});
r.iframe.setTitle("Zendesk Chat widget notification");
}
}();
}
} else {
i();
!function() {
if (!n) {
n = new f(l, null, null, null, {
visibility: "hidden",
dataTestId: "ChatWidgetButton"
});
n.iframe.setTitle("Zendesk Chat widget button");
}
}();
}
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self, textarea, input, button": {
fontFamily: [ "$$fontFamily", "$$customFontFamily" ],
fontSize: "$$fontSize"
},
":lang(ja), :lang(ko), :lang(zh_CN), :lang(zh_TW)": {
"*": {
fontWeight: "normal !important",
fontStyle: "normal !important"
},
"::placeholder": {
fontStyle: "normal !important"
}
},
"&.popout": {
position: "absolute",
"top, left": 0,
"width, height": "100%"
},
"*": {
WebkitTapHighlightColor: "transparent"
},
"input, select, textarea, button": {
"&:focus": {
outline: "none"
}
},
img: {
MsInterpolationMode: "bicubic"
},
"input, textarea": {
"&:-moz-placeholder, &::-moz-placeholder": {
opacity: 1
}
},
"input, button": {
"&::-moz-focus-inner": {
padding: 0,
border: 0
}
},
table: {
fontSize: "100%",
color: "inherit",
borderCollapse: "collapse",
borderSpacing: 0
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_Widget"
});
return t;
}();
}, function(t, e, i) {
function n(t, e) {
if (!t._vmlstyled) {
var i = t.createElement("style");
i.setAttribute("type", "text/css");
i.styleSheet.cssText = "v\\:*{behavior:url(#default#VML); display: inline-block;} .vml{behavior:url(#default#VML); display: inline-block;}";
t.getElementsByTagName("head")[0].appendChild(i);
i = null;
t._vmlstyled = !0;
}
return t.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml">');
}
function o(t) {
var e = t.split(/\s+/);
if (4 !== e.length) throw "bad viewBox: " + t;
for (var i = 0; i < 4; i++) {
e[i] = parseInt(e[i], 10);
if (isNaN(e[i])) throw "bad viewBox: " + t;
}
return {
x: e[0],
y: e[1],
width: e[2],
height: e[3]
};
}
function r(t) {
var e = t.split(" ");
return {
offsetX: parseInt(e[0], 10),
offsetY: parseInt(e[1], 10),
blurRadius: parseInt(e[2], 10),
color: e[3],
opacity: parseFloat(e[4]),
rgba: "rgba(" + C(e[3]).toArray().join(",") + "," + e[4] + ")"
};
}
function a(t) {
var e = /from\(([^)]+\){0,1})\)/.exec(t), i = /to\(([^)]+\){0,1})\)/.exec(t), n = [];
e && n.push({
stop: "0%",
color: new C(e[1])
});
t.replace(/color-stop\(([^)]+\){0,1})\)/g, function(t, e) {
e = s(e);
n.push({
stop: e.substring(0, e.indexOf(" ")),
color: new C(e.substring(e.indexOf(" ")))
});
});
i && n.push({
stop: "100%",
color: new C(i[1])
});
return n;
}
function s(t) {
return t.replace(/[,\s]+/g, " ").trim();
}
function _(t, e) {
function i(t, e, i, n) {
for (var o = 0; o < arguments.length; o++) arguments[o] = parseFloat(arguments[o]);
var r = (n - e) / (i - t);
return Math.round(270 - 180 * Math.atan(r) / Math.PI);
}
e = s(e);
var n, o, r, _ = e.split(" "), l = [];
_.shift();
switch (_[0]) {
case "left":
_.shift();
n = "270";
break;

case "top":
_.shift();
n = "180";
break;

case "right":
_.shift();
n = "90";
break;

case "bottom":
_.shift();
n = "0";
break;

default:
n = i.apply(null, _.splice(0, 4));
}
o = a(e);
for (var d = 0, u = o.length; d < u; d++) {
r = o[d];
l.push(r.stop + " " + r.color.toStrRGB());
}
var c = j.createVMLNode(t, "fill");
c.className = "vml";
c.setAttribute("on", "true");
c.setAttribute("type", "gradient");
c.setAttribute("angle", n);
c.setAttribute("colors", l.join(","));
c.setAttribute("method", "sigma");
r && 1 !== r.color.alpha && c.setAttribute("opacity", r.color.alpha);
return c;
}
function l(t, e) {
e = s(e);
var i, n = e.split(" ");
n.shift();
switch (n[0]) {
case "left":
n.shift();
i = "0% 0% 100% 0%".split(" ");
break;

case "top":
n.shift();
i = "0% 0% 0% 100%".split(" ");
break;

case "right":
n.shift();
i = "100% 0% 0% 0%".split(" ");
break;

case "bottom":
n.shift();
i = "0% 100% 0% 0%".split(" ");
break;

default:
i = n.splice(0, 4);
}
var o = t.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), r = "grad_" + new Date().getTime() + Math.round(1001 * Math.random());
o.setAttribute("id", r);
o.setAttribute("x1", i[0]);
o.setAttribute("y1", i[1]);
o.setAttribute("x2", i[2]);
o.setAttribute("y2", i[3]);
o.setAttribute("gradientUnits", "objectBoundingBox");
for (var _, l, d = a(e), u = 0; u < d.length; u++) {
l = d[u];
l.stop.indexOf("%") > -1 ? l.stop = parseFloat(l.stop) / 100 : l.stop = parseFloat(l.stop);
_ = t.createElementNS("http://www.w3.org/2000/svg", "stop");
_.setAttribute("offset", l.stop);
_.setAttribute("stop-color", l.color.toStrRGB());
_.setAttribute("stop-opacity", l.color.alpha);
o.appendChild(_);
}
return o;
}
function d(t) {
function e(t) {
for (var e = t.length; e--; ) t[e] += s[e % 2];
n(t);
return t;
}
function i(t, e) {
_.push({
command: S[t],
coords: e
});
}
function n(t) {
if (2 == t.length) {
h.x.push(t[0]);
h.y.push(t[1]);
} else {
if (6 != t.length) throw "problem with updateBBox";
var e = o(s.concat(t));
h.x.push(e.minX, e.maxX);
h.y.push(e.minY, e.maxY);
}
}
function o(t) {
var e = t[0], i = t[1], n = t[2], o = t[3], a = t[4], s = t[5], _ = t[6], l = t[7], d = [ e, _ ].concat(r(e, n, a, _)), u = [ i, l ].concat(r(i, o, s, l));
return {
minX: Math.min.apply(null, d),
minY: Math.min.apply(null, u),
maxX: Math.max.apply(null, d),
maxY: Math.max.apply(null, u)
};
}
function r(t, e, i, n) {
var o, r, a, s = [], _ = [];
if (t - 3 * e + 3 * i - n != 0) {
r = (Math.sqrt(-t * i + t * n + e * e - e * i - e * n + i * i) - t + 2 * e - i) / (3 * e - t - 3 * i + n);
a = (-Math.sqrt(-t * i + t * n + e * e - e * i - e * n + i * i) - t + 2 * e - i) / (3 * e - t - 3 * i + n);
s.push(r, a);
} else if (t - 3 * e + 3 * i - n == 0 && t - 2 * e + i !== 0) {
o = (t - e) / (2 * (t - 2 * e + i));
s.push(o);
}
for (var l = 0; l < s.length; l++) {
o = s[l];
o < 0 || o > 1 || _.push(Math.pow(1 - o, 3) * t + 3 * (1 - o) * (1 - o) * o * e + 3 * (1 - o) * o * o * i + o * o * o * n);
}
return _;
}
t = t.replace(/[A-Za-z]/g, " $& ").replace(/,/g, " ").replace(/-/g, " -").replace(/\s+/g, " ").trim();
for (var a = t.split(" "), s = [ 0, 0 ], _ = [ {
command: "beginPath"
} ], l = 0, d = a.length; l < d; l++) if (!/^[A-Za-z]/.test(a[l])) {
a[l] = parseFloat(a[l]);
if (isNaN(a[l])) throw new window.Error("Bad path after " + a.slice(0, l).join(" "));
}
for (var u, c = [], h = {
x: [],
y: []
}; a.length; ) {
/^[a-z]$/i.test(a[0]) && (u = a.shift());
switch (u) {
case "M":
c = a.splice(0, 2);
n(c);
i("M", c);
s = c;
break;

case "m":
c = e(a.splice(0, 2));
i("M", c);
s = c;
break;

case "Z":
case "z":
i("Z", []);
break;

case "l":
c = e(a.splice(0, 2));
i("L", c);
s = c;
break;

case "L":
c = a.splice(0, 2);
n(c);
i("L", c);
s = c;
break;

case "c":
c = e(a.splice(0, 6));
i("C", c);
s = [ c[4], c[5] ];
break;

default:
throw new window.Error("Unknown canvas command: " + u);
}
}
var f = function(t) {
for (var e = 0, i = _.length; e < i; e++) {
var n = _[e];
t[n.command].apply(t, n.coords);
}
};
f.bBox = {
minX: Math.min.apply(null, h.x),
minY: Math.min.apply(null, h.y),
maxX: Math.max.apply(null, h.x),
maxY: Math.max.apply(null, h.y)
};
return f;
}
function u(t) {
function e(t, n) {
t = new t.constructor(t, i);
t.id && !n && y.set(t.id, t);
t.attributes && t.setAttributes(t.attributes);
if (t.childrens) for (var o = 0, r = t.childrens.length; o < r; o++) t.childrens[o] = e(t.childrens[o]);
return t;
}
var i = new c(t);
v.extend(i);
e(i, "ignore-id");
return i;
}
function c(t, e) {
t || (t = {});
this.id = t.id;
e && (this.root = e);
this.attributes = t.attributes;
this.childrens = t.childrens;
}
function h(t) {
return t.replace(/^\w/, function(t) {
return t.toUpperCase();
});
}
function f(t, e) {
switch (t) {
case "viewBox":
return o(e);

case "path":
return d(e);

case "fill":
return g(e);

case "shadow":
return r(e);

default:
return e;
}
}
function g(t) {
t = s(t);
return /linear/.test(t) ? function(e, i) {
return p(t, e, i);
} : function() {
return t;
};
}
function p(t, e, i) {
t = t.replace(/,/g, " ").replace(/\s+/g, " ");
var n, o = t.split(" ");
o.shift();
switch (o.shift()) {
case "left":
n = e.createLinearGradient(i.minX, i.minY, i.maxX, i.minY);
break;

case "top":
n = e.createLinearGradient(i.minX, i.minY, i.minX, i.maxY);
break;

case "right":
n = e.createLinearGradient(i.maxX, i.minY, i.minX, i.minY);
break;

case "bottom":
n = e.createLinearGradient(i.minX, i.maxY, i.minX, i.minY);
}
for (var r, s = a(t), _ = 0; _ < s.length; _++) {
r = s[_];
r.stop.indexOf("%") > -1 ? r.stop = parseFloat(r.stop) / 100 : r.stop = parseFloat(r.stop);
n.addColorStop(r.stop, r.color.toStrRGBA());
}
return n;
}
function m(t) {
var e = $(t);
if (t.border) {
var i = {}, n = t.border;
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
i.x += n;
i.y += n;
i.width -= 2 * n;
i.height -= 2 * n;
i.rx && (i.rx = Math.max(i.rx - n, 1));
i.ry && (i.ry = Math.max(i.ry - n, 1));
e += $(i, "CCW");
}
return e;
}
function $(t, e) {
var i = t.rx, n = t.ry, o = t.width, r = t.height, a = t.x, s = t.y, _ = Math.round(s + r / 2), l = "";
if (i || n) {
var d = .5522848 * i, u = .5522848 * n, c = o - 2 * i, h = r - 2 * n;
l = e ? w("M", a + o, s + n) + (t.corner2 ? b(-i, -n, d, u, 1) : w("l", 0, -n, -i, 0)) + w("l", -c, 0) + (t.corner1 ? b(-i, n, d, u, 1) : w("l", -i, 0, 0, n)) + w("l", 0, h) + (t.corner4 ? b(i, n, d, u, 1) : w("l", 0, n, i, 0)) + w("l", c, 0) + (t.corner3 ? b(i, -n, d, u, 1) : w("l", i, 0, 0, -n)) + "z" : w("M", a, s + n) + (t.corner1 ? b(i, -n, d, u) : w("l", 0, -n, i, 0)) + w("l", c, 0) + (t.corner2 ? b(i, n, d, u) : w("l", i, 0, 0, n)) + w("l", 0, h) + (t.corner3 ? b(-i, n, d, u) : w("l", 0, n, -i, 0)) + w("l", -c, 0) + (t.corner4 ? b(-i, -n, d, u) : w("l", -i, 0, 0, -n)) + "z";
} else {
e && (r = -r);
l = w("M", a, _) + w("l", 0, e ? s - r - _ : s - _) + w("l", o, 0) + w("l", 0, r) + w("l", -o, 0) + "z";
}
return l;
}
function b(t, e, i, n, o) {
var r = t > 0 ? 1 : -1, a = e > 0 ? 1 : -1, s = o ? -r * a : r * a;
return w("c", 1 == s ? r * i : 0, 1 == s ? 0 : a * n, 1 == s ? t : t - r * i, 1 == s ? e - a * n : e, t, e);
}
function w(t) {
var e = " ", i = Array.prototype.slice.apply(arguments);
if ("string" == typeof i[0] && /^[A-Za-z]$/.test(i[0])) {
e += t;
i.shift();
}
for (var n = 0, o = i.length; n < o; n++) e += Math.round(i[n]) + " ";
return e;
}
var x = i(8), v = i(14), y = i(4), j = {
parseViewBox: o,
parseShadow: r,
detectedGraphicType: function() {
var t = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
return document.createElement("canvas").getContext ? "canvas" : document.createElementNS && t ? "svg" : x.isIE ? "vml" : "none";
}(),
getGradColors: a,
parseCanvasData: u,
CanvasData: c,
generateVmlLinearGradient: _,
generateSvgLinearGradient: l,
generateCanvasGradient: p,
generate_drawing_function: d,
generateRectPath: m,
createVMLNode: n
}, C = i(119), S = {
M: "moveTo",
L: "lineTo",
C: "bezierCurveTo",
Z: "closePath"
};
c.prototype.setAttribute = function(t, e) {
this.attributes[t] = f(t, e);
this.refresh();
return this;
};
c.prototype.setAttributes = function(t) {
for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
var i = "set" + h(e);
"function" == typeof this[i] && this[i](t[e]);
}
};
c.prototype.refresh = function() {
this.root ? this.root.fire("update") : this.fire("update");
return this;
};
c.prototype.getAttribute = function(t) {
return this.attributes[t];
};
c.prototype.destroy = function() {
this.id && y.unset(this);
this.root = null;
var t = this.childrens;
if (t) for (var e = 0, i = t.length; e < i; e++) t[e] instanceof c && t[e].destroy();
};
for (var A = "opacity fill stroke strokeWidth d path shadow viewBox".split(" "), k = 0; k < A.length; k++) {
var I = A[k];
c.prototype["set" + h(I)] = function(t) {
return function(e) {
return this.setAttribute(t, e);
};
}(I);
}
t.exports = j;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
s.call(this, t, e, i, o, r);
this.setBase64(a);
this.setFont("zopim");
}
var o = i(1), r = i(0), a = {
woff: "d09GRgABAAAAADLAABEAAAAASHgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAciKDgmUdERUYAAAGcAAAAHAAAAB4AJwBBT1MvMgAAAbgAAABAAAAAVldBZCxjbWFwAAAB+AAAATgAAAMOugkDoWN2dCAAAAMwAAAACgAAAAoAkwCIZnBnbQAAAzwAAAGxAAACZVO0L6dnYXNwAAAE8AAAAAgAAAAIAAAAEGdseWYAAAT4AAAp/QAAOpQVbp9JaGVhZAAALvgAAAAxAAAANi9dvExoaGVhAAAvLAAAAB4AAAAkI2YeimhtdHgAAC9MAAAAeQAAAMztXAb7bG9jYQAAL8gAAAB4AAAAeFWnY1htYXhwAAAwQAAAACAAAAAgAWgDM25hbWUAADBgAAABMAAAAigGp1xtcG9zdAAAMZAAAAD2AAAChg+LvwNwcmVwAAAyiAAAAC4AAAAusPIrFHdlYmYAADK4AAAABgAAAAaL7Fw9AAAAAQAAAADX2mhSAAAAANhjO90AAAAA2GM8aXjaY2BkYGDgAWIxIGZiYARCKyBmAfMYAAYcAGl42mNgZLVmnMDAysDC1Ml0hoGBoR9CM75mMGLkYGBgYmBlZsAKAtJcUxgcGBT//2cB81kYGLmBFCOIDQDFJwkheNrN0k1KAzEYBuA37VSl6lT7B91Nhk5nUUEQf4snEBSvooLnKHRRuusBvEE9griUjuAwuCnd624wvsk3bgQRXBl45k1CQvKFAVABUKYd8ugBil+U1jir3HwZVTfvYcrsImDPg0YfMz3SYz3RC70M61HeG/SmsR8343bWyUJjuFpWDX9YhSwwxryaxJylt+lNep1Gafclf24kT8lV4s3N/CNoBTW50a9tw37UaTHquNOFra9fsDXOCqxdD2nE/gpzLGy9eiKwzlwIe4JeCmwCYV3AB6JcoAb0BgJbzKnANhD7AtwTNwUazLYAxxkjs3dvMQMK2d+FejunC/b3mHcOsM98dIAD5sIBDqHeVx3giFl1gGPmpQOcMO8dgHdVrP/rmVXJ/gDfXlcV7yjNwz9ulT/u+wT/pmAUAAAAPQBbAEsAOAAAeNpdUbtOW0EQ3Q0PA4HE2CA52hSzmZDGe6EFCcTVjWJkO4XlCGk3cpGLcQEfQIFEDdqvGaChpEibBiEXSHxCPiESM2uIojQ7O7NzzpkzS8qRqnfpa89T5ySQwt0GzTb9Tki1swD3pOvrjYy0gwdabGb0ynX7/gsGm9GUO2oA5T1vKQ8ZTTuBWrSn/tH8Cob7/B/zOxi0NNP01DoJ6SEE5ptxS4PvGc26yw/6gtXhYjAwpJim4i4/plL+tzTnasuwtZHRvIMzEfnJNEBTa20Emv7UIdXzcRRLkMumsTaYmLL+JBPBhcl0VVO1zPjawV2ys+hggyrNgQfYw1Z5DB4ODyYU0rckyiwNEfZiq8QIEZMcCjnl3Mn+pED5SBLGvElKO+OGtQbGkdfAoDZPs/88m01tbx3C+FkcwXe/GUs6+MiG2hgRYjtiKYAJREJGVfmGGs+9LAbkUvvPQJSA5fGPf50ItO7YRDyXtXUOMVYIen7b3PLLirtWuc6LQndvqmqo0inN+17OvscDnh4Lw0FjwZvP+/5Kgfo8LK40aA4EQ3o3ev+iteqIq7wXPrIn07+xWgAAAAABAAH//wAPeNqNewl4G9d17twZAIMdM4NlsO8YkFjJwTIAF4CkKImbKIqkKEoiJdGy9t2Sl8SSZdeyIyVeE6dJ7CxuP0dZnLYDKnZSJ22Vvr4kfi0+Ny99eu2XOkmTNnWcpX6ta8euCb1zZ0BaVtz3SoKDO3dm7tx7zn/O/c+5lwRFENTfEgz1CqEnWMJHEIzDJZaLQiyqK5YLosuhi0qFUqyU7Aogh1an1VKURoP/dKSGQtRPoUanNengXKNDWgQfaJAwE17qR9QvCTvhJ8JEjpA1ednXlPm8HGgiOZKXiWtQkh2iHGAaYZSW3aJsaDaiKE10dUuOICpExBoqscUcikWiVuQkimXcl1iUYgusOVKJki9HqhH4rMSilQi6VJmqVjs6Kt96IlKJwIf8ofq9chTqpyqIQx9rHSOga9db1CvUzwgTQbARaClSirAxNoIe+y56rHXyu62T6BH4U88IuJ8i3NTfUD8ntAQhGZDdgijqe+/kfw99tnWLG/0U/bq1Y6SA7/sOtBuFdu0EwTl4hCWYNCA4QP91NPpOAH00MNsbbD2PNgQCtqSjI9A6TQZnA63jgd6ZIBqD6tmAzYagmoD2rl8nXqb+maqARgiyKKGyCG3i0UOjuigKoofhdmiytzMFbbZeCMwiP1Q8HAy2TgRnegNovPVCEPfrL6BfIegXtCMVYQRCUW2KhmaEv1Dv64MOPNR+cm8qgDuD22idDs7gyl7cDkH8COTWg9thlPFBnzBGaGgy+j7dId+GZ08Hbhw2HhdxmjhFnaRuI4wEUUMSSkbYJLKi04YIOv8aOfz3rYcjk/JcBB36ycofvt66P6LFz9xFnKFup87gZySWRzXkAonyd/09Oh2ZrOujrfteO0NOv47ORTS1uWjrE/8AIoN3dUB/nwZM8wSh6piNOTidqxeB1gtiWQBJUq+cfOfNE1/UBUOXf/iFYEjnar3YerEDXWj9Ajn/HB2KOVqvgqhiLiS1XoR+uK//lPoe9RK0yBFIdudl7TXZ3Gx4FMxyQg2FEItR6mSlchBBH60oiSKGrsnQP0iT0k9Dk3lTuPW4e1Oo9TCSJvuNHpk8npSk5MqTX+ZN9U3u1q+CBjeKK3Ii0CPUK+Qc4I8jZCIvU2A1mnxDq7wLo5Z65R03euS7qm7WfroJQGoGdP5NDQG2LBEDxCgxTTQJ2ZyXs015OC+PNuVNeblekLc05R5RjuZlHtqeUSzS35T9TKMK5tjflPuZxjiUNjflzUwjCSWu2ZiFr7L3hbr81h8SzrTRKmsYmbraENFbcuEqcYXSiIUc/KC1kjzgRY2qn+VkfVXuZ5/nI8au/OC6OF+Vx7nlrHm4Wq3Km9llV3QDlIjGcJblGl0lqBxlG2UWvjdxV/xJYhA/sYWVuWpXt93h4ildEIl15CqIUlkCMxOSQpTW0Tq+iM9F3sW7nA5cASYj2JBUBkMsK8oBf0bDs2UpEo2VV11dpivrRQYrp//TsU1nDx/oq9f7Dhz+DS70l4s7Fq4t7CiWceHI2Eab5eNOpE9lX46L8bioN0wfmTa0fk5qvo3PPR6yMvZIb+ttPWPQfcgHrRx58/CB/lqt/8Dhs0fWWjmysL1U9uuMh14yG0v3fKAQi3k98ROl9euL3ynE44UYViV1/R3Q46vUBcIKiPMRXmIZdJoGbckc9qVI9ucbAQUPQttdJlEOw06juEpaF6UKVExD94sUJfbRntZ5z/A6b+s8+nKwErTZpOBpdsvpsXR6LE1+Oh0KpVdupSV/oGRj0L+0/hL7cOL6CvVL6odgTTrCQxDOBAIHkpR4LGEQKIicVmROowOtNwrIgP7ptdSvLYyJ0emNpmih3xdwuRgrtYAM3a230Nu/7viVze4I+OMRIVpAJr3VaCYUX7dCPAnv2QcjJMga6QohbOK8YkE2bENCHiGBMgiVXkDqZb6/x+E0O/hW3KRls564W9P6BU8KFcHgVC47zA5nbx9cNugZk1bj1iKHW3kPsQ98z/3UwwSItyyU6wggobwO4wXeZkPKO3XRPKKtSDhttTp+8AOHxdJRKkEhOBd0qDVwhBMolEqXlUtQ6LBY8D1Bx2qFIxhUHibW5pwfw/hCxLIH69DeXLZ7jOkrA3bKkEayL9/wq4ZdJMIwfIzed38l6FOYQB3o009oWq/paKMVPLAvGE10ZrtL9nNPtPa2/g69+r9R6DFN64e0wWAx2yw2k5nWI1J/+QOPohDWZZKIU9+l/h3m4gxRAUnIOmz3cjwvlwtyqil3iUiutn3AlYif0KdlQXEGWbD4YvMKW8xCFXi7HpRuCBGw52BVzoLd8jpswUVOtoH1xnmWu0KYrUGwVmynuPuqhZaKQlSnWmQUI0c5t2Pz60fKJW0JoxYoBsxLycHaoWNnzx071D/gE3wFcXbbd7fNikVv0lcsT5ThQ/5OCX+XSOKek0cG1g3WDx+/1+HzOQ7MzxWKpeK2HfvtbjdKC6WSsKAcFlaLWBY7iQT1MeoNwgb6SIN/lF2YlchUXu4swBDlGMgio8iCEWW6KdMqQ0k2sTAaNAGDD1TlMNtwumDoSa7h84PrUvxSL1IHlEYwJHX86vCTkS4a3TDEneUEwn1CiTJVKS/u/uGeBalCvvPXiLwHxgWjo+pCuSwsJMrlRKvz1J5dUrUq7Vo6adag00rlAlyGsQgwlu9Qb4Jeu4g+Yp6QTQrPAr32FLDDL8JY+pWxaEGvWqzXjqasZRrdMKJK8wpT6YYqZ7NRg6F1YL1SVbmbXTaafFivFQ48rsLIQFOlG32rco41GVN8wM1jv1GdAiiu0D277UWsRFDoQB20e8/RQ7V6EQSgSEEorap01u7z2Q9sb+vxgN3t4c6fPDowBDo+QR5VZHKjRkEI2FcSOwgBdPom8DofYB10alHwDTpNFIBYyiGQQ4ciB7MIosASAJOTY81GJwxci3Vqqcp+tuHiYdgxrsEyqzpdg6idj3SVpHfnmhv1uaOtNUR1I6zPH+1eLFewLjFcqYE1JL7zCYtWv6ZO8jPvAlNPzF83mI9RLcJAOMBHFYkhYobYRnwQkcQyjDF9pWN+/6k4X8CQHBCXOexIPE35jvwyWT1SKBTkxWZDsySKcldTLojyIiNbwtfYxsIuuBSB6eLuvGy8JruasovB84Zsa8o2phGHUqLZEEvwYIJp9MFppilnmMY8lD7YlHeI8geZxm1wcqopn2IaB6C0v9k4C1ILuFhu2WLmACiNvgTM2x1dUJrPgA9YNzq7FXxA47YPgmAXq/IpVt5dlQ9w8hJ4CYKDytmq7GGXkbAVP30HzXLPG21OVyDThx9bBCA+rxPntm3fuVtxJXwJAedxoojTXiyH8SQeiwplh+pdMA4BhajA3nhaitlLSgCDvQ7cjRyKKepAfeD6sfeR2BiQQSfcw+M/4G0xVol7aN1a0cnOI3frdfS91q+Qe/gZhJ753IOXnnosEJ895jP5ErPjSfTOpYX1d22ojY3fub1y6dJCYmw2l5sKzaIvHfpYMUsP5XkTP0YWP3bo2MWLiH1wbmnn4M4j+4fGLtalzg02w8X+anma2osOfOCW1pN3o8i9zz5774OXn/lfn073LcRKm9P90soxFMnsmTv3ganNW7e2Hn40Ojw7Pp3L9pAfHd1fSPcavBabZ5Is7H9n3yh6c+UqObB+c18lX761dT8aqYxlEg5L64u4NFZpfZ3A/HD++v/R1ygevF8PsZs4QjyIniCWFwFOy77Z+zCQ9jblGXH5HlwTzu3ENeea8gFR1uevGKSjpzEGjzWXdcIpURSXj+nxRHbspCEt6xnZhCFXGoZHNM1GxwRc15jwdU0ET3QfUr1qU2aYBg0Iwm61pylHRbmHaeThJNeUc0yjF0pLTXmJaRyEmwYOATSnmvIU03gALhwX5dub8klx+fYHcMO3nzaklx+4HRcfOGpINy4qDFUWgHbq6dyLRIPW517EnPWt+65uxZxVi7tpuGoFty5rr76g6766CVdr5IGcVa5f1TQOUW9Z5cNXteAjrui0tD1NEVfqA4cOq8RWZ6gfbhPbRpgBA9C4sads5HsA1B3VxlIvGMKGjeBEDrLLwxOL2ItOcfJ8VX6AbczMYo577h6wELdz/oOY0+rZrxEMX+3dvGUJnx7jlmP4aTx9FmuoIIYQnWxj0gH8BADOK3BOCloIZLBDBoi3sYuDTeyZ2AR46jq4J2wHyfY9TjaIeBpPviotBvNRzAXuo3WJUqFUcBacsfZL6kh5Sw4i8Pn8/tnYUJ+2W/L2D1rNJsvgQGqe6huOzt/qcpLWQ95wsDM8Mc3aDur12UxS8jvQP2ZTOz+dzm66oBXyqZ6OhZ2kz6ftDkV9/lisK715+khC8Hf4Q57H0uip8UPPPKPRBML2jrg2lXfXh4PIv//uqsGwU6uNdSY2TCYzCcOCwdA3VJcpT2tFb9IZqrXK/tbLKLI+2pmw6OjW8O/PdMRpW2c+bZmi9Vp6x67Wb3g3NW0wuE0WvWnHfbN5vVZPP2PV/M3uL3xh979JfJAnqZ00nZifRibiXY72BnGCyKneFskn8zJzTd7TXN7DYHTtOQHoOgV43IO1nu9dqioThBOLt47KUvu3u5gnQTmgCuCtpCCVeQmIuYCnTqxOCHrLBUlc43Zl5duJPRp2ZrzLhino6iGAdKt3hhD+QkhLA9W0eWOZ/vtpRJKMw+YyOewakkQUqdHYtFodiUgNw49pNRarVm8dsVoNVoNWp6NNDj5k1pEUTWs0HK1FJGXQOTlbiDFTlMbm31HLxL2Mw2w3akky1hHoNFtdJqeVNTgmtfaA18RwvqDepteaTb6Q3YcQaTSFFhyhYMpK6knSbNLZjJQOIUqj1UXtScbdkQtpSa8j6LMZdBZTSrAb/QFa43d1WA2szWF2WdiReJhQYvV2TsYObAyiXV9etjYxA8N0CyRcep9sEAK8FjGssXkA5AOoQMfABKLVKPlrOMBnhYMDev5cIrsQjXip2ajZ+Jju0rm71aurd7XGz902limS1FnEmEO3nG1dQne+t0/jRLYdeY01ZUnt20Retl8D8iCnxcYmgETMDkbvcCmAeL/u2kG1ZQkggS0uh/oRZoZgXEUJKxXIMIaGi4fZicZ/jtXQ9ebh/MBq6RgNCb0mk9FhS3azVtYdtKX76xuoUCnkSTPJmDURDfNRoWPj5L49Nw115W+Rx42yUVKjr6dInUaDmEIg4imFIpTVHC6FHKze0clrbHG3nt48NpkrEIRmTQ4uiBuOEPcTf9yWxVRBZpvLrAZbBrvdkP5qyqfZbknjUOK2vJwpyPdg7imLeXlXQT4AIruQl49ek+8CaoFnCCILM0S0Kd+lOvudTXkn05iE0lZw+yL28427jrLc11hbIJkaGNqAXWMv+7y2qC/VR0bx2U5OngJf6mPB7Y5W5RS7HB0awc72Nq6RrMP3PezXsvneuYXFPUsKhVD1IrVZax6pHI4uKVZbUGMSbMkxnDJgFTuN0DHXu5kEWgdaC5GrNaqKY85YKaY6z9Kauvn3BD4qSbYiiHwAkHOUlrNFHSXRnI1JyeFQrBYb8hkpu96iIXUkGbTu2AD2dOhxVJjebuT9Jjbuqdr1VoueLVlSjijrtKAhaOcb9W/AZxUXVc6RSPcMhTmT3uESshV/JUprsfppqzHo471sPEZqaIunc8ZvAhvVeG1ev82qt2mpXrSXtKD5OhdM8In8qCRk7WZnijPaOk0xRzTSme4KYAiJ+G3fOKcC6clysS/WGXcF3Fy1byiZ96VCLsDK9evXVwArh4kyMQa8dS/xMLGsxVgZacq9ebnQxEEV6DeUlycV5e8BTn5rXk5ea3Qp2SWZY3AyrbEP/rqSMEdmpMoE1jXHflWbE/tHcNnDfdUaCg9PQ5lo9I6AK0aECU/AmQKUrVwXxsBWVs5V5RD3nDO5Y9fuWxT9C+3pUw1GVX2Xb9BQQYqos6yqOjzd4snUhW2z7X1XqSTO9QUpK04gJLDicXocgICSifMTM/WeSCgFbt3rCMccLqPJ7vRt62u91nc8HCvmu/oNjBXkPNDrk3YWY2FXyubWaTLiweI0Z3aX1g9kzO5iLDaArjw28uijI4+9dEsingz4chmxb7PA8n7WFfT6EslUPJ7kvfFyNl+Udnh9yOvuiAd8v7tpSEBGm9/m8lmtg7HOJNmxYzxF5iZ2jqcRyh189NHRRx+Fuc4Ievox5SPqOB/RhzVENpfJPmzKpIBp2kC+Magm4lUQrzouUnVcqqnc5LkA39h1rdkKzrsZva4Ng7XS4EG73R725jZ2hLyBTo/XO3H4+N3a8oKUnvAP95ly4b5KZx8ShJGJA6cemJ3aNE/xrk402a/RGyqzXZSJppE/ky1UM4vlqs7tkhbKkaAlFqvaaU8tbTXtv/Xglm1dRTeP5/E3rrfI16i/IXgiTyy78NgI8NUFGTVlVsTBMd1UUreuazIpQtwLIX47gWtfnVJ4mFF0704pbzxR7LtzuEzuC/g11Ff0z7yAfvzEh3ZVh3SfRSxn9t/2RCuIfgLzmKXtK/cDgygTNWIjMUucJO4An/kY8Rniy8S3iZcIgsXo6kW8CxgWhJUgVFEq6STMC3CQmWx7ENqpMj6gDL0IyiQEMhFnJCoUy72ARJAtLuD1EAi2BUkBMsw5QYSDURoq6ZISh+cQHpWTVp5Xcp/Q/Hue7UM3XHGpV5zKpbIAjUJv19SZQwqHSQrYKNqZ1FQ8kVn3xxqTpoM2Gy0aq+ZPbhHnCtW8f0Os9Z3ubUVUKe7yh0Z8G+KV/SJt0KGDrU/qDAbdlyzMt/H3/vbhp7lkRx5VMus7hEg8t/8yp3PkNucXXBxlpBFLG41061/wcf/aYa32aSN9ABcP0DKwnGjJ5mD0LjutAVZDa0mTz66jmRxtNjEmE4PGs9Nu76coKqilT1BGRD1RWpQe793Jc470KJDXaCK/08nzreesxug+q9FhPaozGi1GY/rx1ATvzoznHk9vcnnOH6DZ3KbWltPoEIu+ZYV308aj0AUo7bSaAK6mKbVyq8VCmY0uv9fGWDgToiy012FhDDxDfR56o9dj6gnxWB/Y41eoHwHP6AG2MU/sI+4kls0Yu3NNea+oFqsQAOXl8WbDl4ZwaJwB7C5T4iJEYPJQXhYA1fuVBQmIoFIiDqLK4FN7RXmiKU8wjRk42d6UR0V5O9NYghO/KDuaOJgnGkNTQF6QG4ccHM7isCrhBFio1BavlmA0lZKK10yTeOJ00lE7q4bXLM5/2NXkkFRQng2gGNVeClEidenGW/tCLqCJOr2FdZNn3KxFr6NI5AoGXSeBmxqA0nz3OxmnkTzpejDmckSTnaETIEq98U0DUH/9ZSmaikadzujL+BDvjJA/yUZXvmQE9OmNRr0FCuS2eDZ40cJY7EZr2um8iFbuQT91+f2uVsCViJNPQtCt11CYqeoNtg0r96F/dIbDzpbfGYmwazcGg1g3Thwrsz8BxsMRcaKPmCSmiGliBjR0B/ER4lHii2DVTeIXSIs41I0q6C70JEHYIc4C+lAC7i+tZceUOUWZcYQkpgJ2JWrjsecsqXYfhXpnl5ozxM/jAAJ+dbzULdkll5MG24SW1ekqFqXKinNuT0nYOBWOWVbcdR454SVwzc5Hk6BU0KWiQjue+sDQdVjPVBwzIrG8ljFRwsoIzuvlUFQHfYAuRrXtBJiS+Aug9hnuL3ZQq02o+UBWSZOxykWXOjOomZob36TGqP/Jq9QpGohVUaFoScyRcVS01k2VSjlVKQVRe/S4905du6sQ3SGliTxaHZoNqV2b15fSodkcCvkyQ+NuTzmfqRrqG6NRo89TseUnPeHbjZX9QsQXZNlQVza5R9STMeF33HxHoqtr3FWcdPoCmViIoyjbZ9cjlqWiffYOpyOm2bthQ1noHhsKG4ZGopHytns4LjcvpP1efXBrt1EX9VJ1cDYveFgksm43+/3XjT5n6/usx8N+/1/Rc/WjA6X9Ease4jpD77g0oUE1m6v34PkjGf3wvvX0PUgKpIP+4OFgIJgKVG/p6VnyB9FbPfsG85NOqAmkgvbNXUP7s9H+jv7RUTigL0OT5f1hm55mDYyhZ0Ia16B+aPPAvYcz+nX71uvPo7DFFN+R7MumctnolCFldXLzvT203uLUUv54OJkXp3LR0LoePuCK+NND/QaTy6hB/xzoDBS+TNuNnNf0+cftZsZhtVyDOvJzhZ2RVMlgKAtRk6AxBvytfQkhZkgI2dl4X51bl6uhv0wJJMuF41ZD7/GOWAwJS6WVH/eVCgAOx1i3c3O31R4I930dYtqevx69ndGgSGBok1ToFlY2CF22eP+GeCymtww8TQYD0a5sMSmBg+8c9TPMVqSj0Eoq4vNEPShkZuw+d9TT+vG1+47WUzGr3WxiDdXhot06dLi/fkHsr3f9xBkIOF+SorFYVHoJl7/fe4skdYm9qQeP9Hcm3LiK3IGPrTfj6f5rU+uS0wP1meRXlBZtnNmkN9zU5J+ZnLTTbedqQjnq9VIWnYFjsn7KZtbrPBZObwhWE/lwkHcazE7GZzPHdTwyxvAb7uz4Fm1AyMtxlj+5zea02ljj59FRZzDoVPPa+PAK9QrEoWViiPgUsczgycDblIU8ptARZVUXoiwtTADrlOwacBon00iBj4frUaYRhJIEkSuDl27kGpCgpmxi5L6m3JdvDAPVjqaAanuFrIjpdZBtxLpwkioqAJ12VnswnY6wA4ZgZ0qq9PbXlIXYLHfFka8P4KLIyl04umKxvWMKAk7eillMDnHtMEgx54izANVQq/gFvu0ZtTfQ57AUIX8TkcLwvaKH741JYXDdpulzw9rWv37aMFvPbc7BZyi7ZerkpnWDAlndMbJ9+8iOu97zUFhCr/zuYC0hrL97cyBwVKznJndM5lKTI0Ki9kdzcxvm5ggl5wBi1H6E+gLRSZSIrcSyDksVJBfMywmQZDkvo2tYyl6mYQOpmZoNCSRl84KkdM5gAg/cxDaYCJZU0Mlyz0MQYglnFBEmWDmizKXtILA9/Ah2+4qnVtgaFkF78QTdIARmoHb42PkHDuw7aWiNENeNw6XK8MTgwPj4wODE4fH7a5u2LJw/drhG/f5Hb/8ofMiZFpwN9Pa89IDY9bw05/Z0CPd/8n6I/+/vDYXrtcOtv8O3fRTGbMQDt99LfZMwwFyWJgZg3LcQ54gLxLdgDiP60WqGvVxUMlXgRekIHoGrLPFtQm+P4LUPHSq0J/dCO+eIpwKt+piLh9pYCesa7i2D41f0j9285v/fsASuW7whRl8L03icMqPVuaPt/Quu967y43woKlBAPWgneqB1gexq3Y0+MpPNfGrx0KbRcW2LtoiFWXExNt/Vu37+8PTmIbRk7Mw8sYc8+NC2pzY/lEpemp65lEyRf5XLfHzrwJn4pUuJMwMzH8/kP1zedXqxXN512y7yYDb95OKhibFxXYu2dhdnxYU4bm77oRuaW3/Os71YCQcdbNQp2tZ1SIFITeod2z48mDzjGu8qhfx2Js73oGGhGoj5glJ9297RDeSdH0bxL6wgzadfPGY6jz5y9nzr9rP/9GeT49sL3fKpkY5OFIvt6fYEM2nUvT6Z3tzqRwc379g+1fok+sDcYH14fW1wrnzr5rGZUgade2fL9rw0Ozr12TN7KpWlanVPRfqP/0dT3x7IFJCXj/OM2agzUjaGj6VqxR1eP4qGewdiSd4VdtksJp3FxrhiqXpXrhAAeQ9Qf7TyCTTQ+kXrURS684sYXjZ8CB2k/gQwlgA+O0RsA650H3EJeNL/JP4dmVEEuMnIjWiz3wCKdnzOr8UbEcVE/ot406l4I6VVvGn/K01L6hLtbyOu8FuIuyEJQOuSupsQV5Te85AVOW5+J75duQc7SXV9CagMi1YHUrppIHgcilng7LyEs/Os6lOcMXUNnUUXWg8AzM+iD89lM08uHp4YHwNcGvdt7enuDM139Q1vB5hv+wTaa+rITowskYdXgT4DQO8EoKc/vq1+WvjwhxOnB2Y/ns1fknad7sqVFKQfxS0e2qQgXW0xOJ/vUwxHabEzMzG6hxw56+/MnAgH7GzE2W0fBqxHAevjGOunXRO5UtDP2iKOsm2ooxKM+wHrc/vGAOuXkKBi/QR1NJeZmFw4PDMlnHUv1SoLpfJiZUDM8ec7N00f37V5Yjv5+ocjhVL/ljvqD23elBtLkfVc+om5gdviSrenn8jkH5IWTy0Wi7n8bYvk8ImHLn3EYAz4ao5bSxW3a82W0MbdkxPzha7GybFpJxfa3e0NZNKf+sQGIT3VqqFDii19At01N1QbHq4NzZX3bR6bLmbRPe9s2dFVRjNjmz93eklCft9ST3WpIj31nzf23wezbg+2JpsFrElrYV3xTmxNgWi4vx7rAGNy2sxgTJRVsbNubE0IwfwE9vRxNNj6VesRFLzzC2hocfNEOiuVdhQrQ5Xdp3ZX4tFKcbFUzWWeepVabj2Q9njXnZ9vXURHZnZmZ6TWU2i92ufZlbvXuryngqSlnp49fr+UOvupTT8727pe8waMhvvd7h7pANJgjkHC4VWFY2SIArGxzTH8TTmp8oqiMhs6mrKDwRs0ZWOzUcK8wQFxY1YhC36G5WRPVU6yV9zebJeSb5PehxEo0Y1TunHXlhog8RIv0bEkGem5MeHdE/lGOFg+ksltHdnYmU53bhyd3ToKpYN/NPO5P0TT5+DWngg8ssLBIdoDDKivp+NEr6VDGFr3meFBoaNDGBx+8qmRsadG8Jz/7jhHibH2KF0QLudlHYxyTBllb1MuiXKvujsABjoOA4WQmJMdeHfAc65osrJeyUMauUY4oST832+g0lr2t4SzYhDO6dpeAVyJEtY5cB4NJxuxbwBPgSdM8uZ8/zeXznxg99bubKdfSLnC+lTeXgoIAwnN3PhY0R71RwP1LiCOFsvGLMxC7M3y+G/1WmXX/B6DIZhitZYOt9vg4BMDAmPTgPOOjPbbEYPETUYNmSoHQjfgwEEIgITJNisKN2VPXmZAQtkb+GVAZUU5vA0A+M9XdVommVJysmEdSCuGV/efN5qIaFypXt0MFMZCYdphHMkrXDCIsNSiSbqUQwoOkuTwulNnEHP7qaHh4aFTt1/c+/WHJ95ed3p4+PQ6OCZiW9PizL1DD907hF6/eOY2fNNtcPuZU+uGJx7++lTtSK125NyRmjG/PbyL7q3e3VNVOR8iEPVz6ucwvo3Egbb++abcifW/3KnD+c/OPM5/jihQqCrbKKprYx2FsVYxFJxVOQCMWKflmahQXqcsTpgADnFsCp08SAPByEVl2ByDRxzGY2dWiUpyFR39aHXFZw0bEPXfDA0eSwdhQSAbiGT9eih96CKUvjK1a+/k+o5ElA9FE5aYYEu7Q8UQteGDKcbn9ruLSStjNJl6EoHRpBkdUwWEJdt6rS20SqGQ3TQ6aXPHrBpXp5Nm7fC8xULVS74+0YYsqLOu15DRDOK9OLdaIw9T66n/IFjCq+wfwythXL5hx0kkK9a6EeuZV5ZOYDqT2sF67bJjWqoOlJeER4am55YWv3KJfPXenkWvL5F4pBaJDp3FbRtRlvhH8lVCT/gJJBsUBWibDSPenAMyb5B6xdaAVEtCUSrFjMXLDHOZvO8Xh+7N787fq6zh1ggfNYT+QO2fJg86e7d/Jo2yBRX6FyQV4SfVOTkZq6UufWXxlq3T9ac3Lg1UpWnHZZSdObsuHOo5m/d5F3uUvYPobeIJ6hq5nzDDCWbyzoJK69HbyKgvJJ/euMnQyqLLuUnv2cFvnCyKauw2DbHbl4kiMazs4sG7kZiCPNSUT+C9FPL6prw7j9NyG8LXWLzrZn9eDjbxNrxuJdkXUzftgM2VwCsxeIuWTDcbmfWiiPekCXCqZve2QgkeDDKNwwjvCcK7c/CWh9ovXt+g7m0Qcla546qmMaF5yyqPXX2hxry2pF45DFeOXG24NW/J/FXia7xb6BibOHwk1/5BX+XdHWPqqbKXV6BBG5a7ICqcYBt33IkXW7jl2M7dOE4MsvI+MAH9EMj6zqq8npXvqjaC++GBrfuqyhJce5PY2t5GOAVd2CXga2mk5mp0asK5ncHWOXGaUclKs2rGOsGurbUXlJQUvtmK1hZ3JB6Dj1LS4NE1UifGn42JAQ/LW2jOw/n/rZwMW0YR+NKGxbM+36slTTZ3MCXGno2LVdb8rIllTc+aWRQYzUdYIyKNlkDYqNeZOY/JRFE2g0bT6edMmka4G43q7e7QP3vMdpPWiIKuxBfjohgnNVajw6y1ajWpWBFF6eRQ8ukuvyhmU121VNG8J1YoxFauk8jMsuaV63AcQSnL5srWXMRhsLJW4c9tVqeecpoMZmSOOD2oO9r6h6jbj0i9xoi8Zmc7N7AF8PUs4Gs3cYL4FSEb83ifDHjrY01Zm2/othYK8kIT5wUSTbknL99awHvDIqKyt2ENVmNre8FcYG2JdYCuPU15D9M4BBcCTbznQQET9VpGhUwJIFO+2ihq8KbvF+q1N3Lqvhod1NNXtY2tGGSzV4nn6AJMf7NtID2vg9Py7NY2sBQwjZUAG8Z5gI6NbdTwqq2Lk1MAIc8Uyy0ztjG8sLduAW5yDkOpB28yw7d1dbcXUmiHGmEnVUQ4VYDhRCTGDi0k2780xhXF2+GmXlTGGy4AfawCtHcDyKSkZLqVCVx7M+qCkeT/8AC1jZgtJMDB6UsoYAFcRUXk9zC8jbbw1vgb3ePW0Qpggg+/kTOZAQ+p4XTIZiApnS3itdmRL2RmGHPrZVecJx9XQKbAjTTER5zu3+tdl7BEzLnicFev/b6YKMZIMiZ2xTSM0WnRmkgSrau2fgIIiDq9iDYhn8Wlab1unx/YVUqQWlrHmGzCZZZn/enPkCTG8EoLjqv7W16l/pYIEQTeBwRickprC9TtxGpEoWJOaqI2OBb52ZWJwYGEQAqJgcGJ1ohygn4zdjaW+OUvlTqW+YxSqZwoPlJHGMhXqCbRTZxR/K9VyVIFmnh/bQ58maiAjm3KrMojQ005xDS8UOqEWZjBzh77twLmlnhZHy/hsstWJ4V9i5e74koIWTzXdrINiwbPta4Ay10x6MMRZapNtHMNEFoBoVD2LgG/UGmZLioo9e07cHiId5HoBo9fOD44lJ/aM5UPFHrFoDfuHQqKfWKwa2r3lvzbQ8cHB48Pod+09F1T+fxUFxkPFALwaRU5r5dDT7f2BMUgfNBf5bfk4aPyDIK4CHZ5B/BML97Pwqj8cm2TtwcCPuUfaFw3EGMDwvLn0XNsjkXP8YU5ceXRwlzhDLoX3RtNrDwqoGF0Zybd+l2bDR1OZ1qX4GJhjtzW+haqW5V3Pkz9E3WKyBPjeJVRDVexf2wHrcpCjmIJq9uLlGVC1QI0DrweyeP/hcA586IQtSk7JB0hRJuNjNlm3pBNcMbOfIBlrBajnqb1RouVYQP5LqOJsbs8G+AWxmgmM6G07cL9TDpou3DBFkwz91+wAfgvXEB/4Oeseh1CHrMlW0g4tBpaY9STz+oNWh2ldSSKRSONl3lJrd5q9/3st563Ke2qPu9hkO0p4KczxGNEGrjC43l5/Fo7w/kgIOhAs/FRQJA0znLPPTZ/+9lzj2Baij0GSOFmiYj/iUSQujSztuiQVOvbjyoew0aqe7Ok8o2/xaTw7m8e6WI3Ptd+UnlWsDtuEipi3l+oWcrGxVhXxpfsCGR51sqYWa3eZGVtDpPNZnLYWKtG8yBlZaNGq9Vhdzs9Dp7hjPDDMbzD43TbHVarkaZZM6elTQ4PH/YEWYeDDXrCvMeh0aA/EDnDzYph308vrX/nTFZkYCOp3qF1fakYZ6A0ehPrDNBGq50PrA+4nVaT3mL7JNxGamjcR4fbq/yjwi3ZTiES9PEOzmLW67SIpA2MI2i0cp5AItV9vJASgl671WSxqjp2U69AZOogUsDpjitcM9mUc3msZb8ai9QVhqhuZk6rGW6fiCEQVcn6AEAg7QInoq3KEiszVTnKNXQi9hq5JMwtRifCXgUuiRDYcVdMLqJX8SJudHOcAgoj1eROSVQWnRS+AdcSQdSLXDWkkJf2dmE1clll2hcvQknb27N3/5137t/b04v6oPhrKMGDnOUHepsePt+0Wywc+QSw8vZTa8+3Hv71e55SSn9q4RBwBJseVS2c3Yz3aBHnwCaOEDbwOG4iQiwpu98Z5b8rQVyRpmzPyxoQWvSG7bfeNQfMQsnQbMRAYl5GjXRDrOyuynja5VfD+wbvVlYCZJea7Ve3DbDKvgFBirARewRRSQHPx9iBpALUjkAqFXjnciC1kdrxzuU4xbX+7Xu7jpQSgKqxb5H7/R0d/pUn8ZHcv/Ikern1/NNPbRTFjUCd/y+bFtVaAAAAeNpjYGRgYABipYtaO+L5bb4yyLMwgMCNZOu7ENom8/+f/5zyGWBxDgYmEAUAO2ALZQAAAHjaY2BkYGBh+PeVgUE+8/8fIJnBABRBAdoAgJ8FLwAAeNpjYYAAxlAGBhYGBh4gBtHMQHycheH/fyB9BCpWDMQVULYEiGb8AmbrANX9gYj//wukU6Fq1IE4GojVgDiKJ5chgsOOIQIqh4TBdnAB8TeomI3gI4g61h4GAeEGBgb5TLA4ExgyMtgxcDHYMf6CupuNAQ4A7Y8VOAAAAAAAACoAKgAqAHYAjgCiAMoA7gESATYBUAFqAZQBygHgAegCzAMMA0ADdAOwA/IEeATeBWIFxAb4CIIJQAmKCg4LJAv4DGYMpA3ADo4QzhF6EfQTJhUAFXQWBBZ0FxQXQhdkF5IXrBjcGfIaJBqoGuIbVhxIHOAdSgABAAAAOwGbABUAAAAAAAIAAQACABYAAAEAAZQAAAAAeNplkM1OwkAUhU8tmogJcWFcsOrCuDEppWpUlsZg4hINblxYpGANIlYw6pIH4jn8eQF9GeM37dAYXdzJN2fOvXNmJFU0kyuntCypSuXsqMwu5wU8G5ZdrSq0XMJxaHlR67qwvIQntVxWW1PLK9rUp+VX/N+W3xQ4a5bfVXGOLH/ArZy/XFWdSyW6VaS+YtX0oEdoS09oA73oTqPsvMVpXxO0iBQ99KHG2lad2v/l8/442+xSpiZZh4ffV/Cv/xjXMHNGqLG6ODt6Zs3zhKhjujwqpdfc07QzYm4awB4JzNkNyhW6r+usa6QG76oVd879Pi4z6RylU5zOE57xgpjdCYny3LusAUka1AHrjvZQQrQ6+y7uHl7zbnOn+YOI9BOqWcw+1T1KQs7U5PgBnNNPKnjabZHJTsQwEETzwpJh2Pcdhn2H2G5nBnFE4lcACSEuHPh7kHD1AWEpcqXd9bosV3X1u/rV/+vh56OqqRljnAkmaegxRZ9pZphljnkWWGSJZVZYZY11Nthki2122GWPfQYccMgRx5xwyhnnXHDJFdfccMsdLYFIwsh0DBlx33t++/p4GaTcFKGCFRFViV7JEl0xBRUkzEUsLbH5fH+N+emx/I/+WlJbThQptBJiWNmVVeOHapQ1ulXhg8IHhQ+dmmWPnsk5UeE8pVxJPaZZJrKpx0Q2kU2uLFfWiKyoWVGzgEmcJE5wsl9QR8lf0Mn+GPYN8+Kb6AAAuAH/hbABjQBLsAhQWLEBAY5ZsUYGK1ghsBBZS7AUUlghsIBZHbAGK1xYWbAUKwAAAAFcPYvrAAA="
}, s = i(254);
n.prototype = r(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_fontLoader_ZopimFont"
});
t.exports = n;
}, function(t, e, i) {
function n() {
v = Y.root;
y = v.$("livechat");
j = y.$("ui").$("chat_button");
C = y.$("ui").$("chat_window");
k = y.$("channel").$("typing");
N = y.$("channel").$("log");
S = C.$("chat_panel");
A = S.$("textarea");
I = S.$("scrollable");
T = y.$("ui").$("chat_button").$("button_clicked$bool");
B = C.$("display$bool");
D = C.$("main_stack_name$string");
E = S.$("served_by").$("visible$bool");
E.update(!0);
D.on("value", function(t) {
"chat_panel" === t && a(Z.INSTANT);
});
q.window.on("resize", c);
N.on("keys", u);
T.on("value", g);
O = !0;
P = 0;
H = 0;
M = !1;
V = !1;
R = !0;
}
function o(t) {
A.update({
value$string: t
});
if (t) {
L || _();
clearTimeout(W);
W = setTimeout(l, X);
} else if (!1 !== L) {
W = clearTimeout(W);
l();
}
}
function r() {
return P <= 5;
}
function a(t, e) {
if (R) {
t = t || Z.SMOOTH;
var i = I.$(t).getValue() || 0, n = {};
n[t] = i + 1;
I.update(n);
if (void 0 === e) {
clearTimeout(F);
F = setTimeout(function() {
a(t, !0);
}, 250);
}
}
}
function s(t) {
r() && a(t);
}
function _() {
L = !0;
k.write({
typing$bool: !0
});
G.setUserChoice(!0);
}
function l() {
L = !1;
k.write({
typing$bool: !1
});
}
function d(t) {
var e = t.trim();
if (e) {
Y.livechat.sendChatMsg({
msg: e
});
o("");
a(Z.SMOOTH);
}
}
function u() {
s(Z.SMOOTH);
}
function c() {
P = void 0;
a(Z.INSTANT);
}
function h(t) {
P = t;
M && (V = !0);
R && I.$("scrolled_to_bottom$bool").update(r());
V && p();
K();
}
function f() {
m(!1);
a(Z.SMOOTH);
}
function g() {
a(Z.INSTANT);
}
function p() {
R && r() && "chat_panel" === D.getValue() && !0 === B.getValue() && 0 !== j.$("unread_count$int").getValue() && U.resetUnreadCount();
}
function m(t) {
if (O !== t) {
E.update(!!t);
O = t;
}
}
function $(t) {
M = !0;
H = t.touches[0].clientY;
p();
}
function b(t) {
t.touches[0].clientY - H > 0 ? m(!0) : t.touches[0].clientY - H < 0 && m(!1);
}
function w() {
M = !1;
}
function x() {
W = clearTimeout(W);
F = clearTimeout(F);
N.un("keys", u);
T.un("value", g);
v = y = j, C = S = A = k = I = N = T = B = D = L = P = R = M = V = void 0;
}
var v, y, j, C, S, A, k, I, N, T, B, D, E, O, L, W, P, R, F, M, V, H, q = i(14), z = i(34), U = i(33), G = i(40), Y = i(6), X = 12e4, Z = {
SMOOTH: "smooth_scroll_count$int",
INSTANT: "instant_scroll_count$int"
}, K = z.debounce(function() {
V = !1;
}, 80), Q = {
TYPING_TIMEOUT: X,
SCROLL_TYPES: Z,
init: n,
scrollToBottom: a,
userFocusTextArea: f,
userInputValue: o,
userChangeOrientation: c,
userClickChatButton: g,
userDistFromBottom: h,
userSendMessage: d,
userReceiveMessage: u,
userTouchStart: $,
userTouchMove: b,
userTouchEnd: w,
resetState: x
};
t.exports = Q;
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, o, a);
}
var o = i(1), r = i(3), a = i(0), s = i(38);
n.__jx__jcss = {
"**self": {
fontWeight: "bold"
}
};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_Header"
});
n.prototype.__jx__super = s;
t.exports = n;
}, function(t, e, i) {
var n = i(1), o = i(3), r = i(0), a = i(42), s = a, _ = i(7), l = i(6), d = i(349), u = i(9);
a = function(t, e, i, n, r) {
if (!(this instanceof a)) return new a(t, e, i, n, r);
if (!a.__jx__jcss_generated) {
o.generate(this, a.prototype.__jx__fqname, a.__jx__jcss, null, a);
a.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, n, r);
a.__constructor.call(this);
};
a.__constructor = function() {
u.mobile(this);
u.rtl(this);
if (l.root.$("livechat").$("ui").$("mobile$bool").getValue() && this.hasClass("mobile_error_icon")) {
this.pContainer = new _(this.parentNode, null, null, null, {
position: "relative"
});
this.pContainer.appendChild(this);
var t = new d(this.pContainer), e = this.showErrorMessage, i = this.hideErrorMessage, n = this;
this.showErrorMessage = function() {
t.setDisplay("");
return e.call(n);
};
this.hideErrorMessage = function() {
t.setDisplay("none");
return i.call(n);
};
}
};
a.__jx__jcss = {
"**self": {
display: "block",
appearance: "none",
"*overflow": "visible",
width: "100%",
color: "$$inputColor",
background: "$$inputBg",
padding: "$$inputPadding",
borderWidth: "$$inputBorderWidth",
borderStyle: "$$inputBorderStyle",
borderColor: "$$inputBorderColor",
borderRadius: "$$inputRadius",
boxShadow: "$$inputShadow"
},
"&:focus, &.focus": {
color: "$$inputFocusColor",
background: "$$inputFocusBg",
borderColor: "$$inputFocusBorderColor",
boxShadow: "$$inputFocusShadow",
outline: "none"
},
"&::placeholder": {
color: "$$inputPlaceholderColor",
fontStyle: "$$inputPlaceholderFontStyle"
},
"&.invalid": {
color: "$$inputInvalidColor",
background: "$$inputInvalidBg",
borderColor: "$$inputInvalidBorderColor",
boxShadow: "$$inputInvalidShadow"
},
"&.invalid.mobile": {
paddingRight: "30px"
},
"&.invalid.rtl.mobile": {
paddingRight: "$$inputPadding",
paddingLeft: "30px"
},
"&.unstyled": {
border: "none",
background: "transparent",
boxShadow: "none"
},
"&.standalone": {
marginTop: "10px",
marginBottom: "5px"
}
};
a.prototype = r(s.prototype);
n(a, s, {
fqname: "meshim_widget_widgets_Input"
});
a.prototype.__jx__super = s;
t.exports = a;
}, function(t, e, i) {
var n = i(2), o = i(31), r = i(25), a = n(106), s = n(107), _ = n(108), l = n(109), d = n(110), u = n(111), c = {};
c.ERR_SIZE = "TOO_LARGE";
c.ERR_FORMAT = "ILLEGAL_TYPE";
c.ERR_DISABLED = "FILE_UPLOADS_TEMPORARILY_DISABLED";
var h = /^(x-|vnd\.)/i, f = [ "png", "jpg", "jpeg", "gif", "txt", "pdf" ], g = {}, p = n(112);
g[c.ERR_SIZE] = a;
g[c.ERR_FORMAT] = s;
g[c.ERR_DISABLED] = _;
c.prettySize = function() {
var t = [ l, d, u ], e = [ 0, 1, 2 ];
return function(i, n) {
i = Math.max(parseInt(i, 10) || 0, 0);
n = n || {};
for (var o, r = n.base2 ? 1024 : 1e3, a = t.length; a--; ) {
o = Math.pow(r, a);
if (i >= o) return t[a].replace("<size>", (i / o).toFixed(e[a]));
}
};
}();
c.prettyType = function(t, e, i) {
i = i || window.Infinity;
var n = t.split("/")[1];
n = n && n.replace(h, "");
if (n && n.length < i) return n.toLowerCase();
n = e.split(".").pop();
return (n || "").toLowerCase();
};
c.isValidType = function(t, e) {
if (t) {
e = e || f;
var i = t.substr(t.lastIndexOf(".") + 1).toLowerCase();
return -1 !== o(i, e);
}
};
c.prettyError = function(t, e) {
var i = t in g ? g[t] : p;
r(e) || (i = i.replace("<size>", c.prettySize(e || 5e6)));
return i;
};
c.blobToFile = function(t, e, i) {
t.lastModifiedDate = new Date();
t.name = e;
return new window.File([ t ], e, {
type: i
});
};
c.getExtension = function(t) {
var e = t.lastIndexOf(".");
return -1 === e ? null : t.substr(e + 1).toLowerCase();
};
t.exports = c;
}, function(t, e) {
var i = "[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9][a-z0-9-]*[a-z0-9])", n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", o = {
email: new RegExp("^" + i + "$", "i"),
ip_token: new RegExp("^" + n + "$"),
ip: new RegExp("^(?:" + n + "\\.){3}" + n + "$"),
tld: /^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,
search: {
email: new RegExp(i, "ig"),
email_lws: new RegExp("(^|\\s+)" + i, "ig"),
hurl: /(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/gi,
url: /(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g,
phone_number: /(?:^|\s+)(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi
},
escape: function(t) {
return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
};
t.exports = o;
}, function(t, e, i) {
function n(t, e) {
if (!(this instanceof n)) return new n(t, e);
this.elm = t;
this.currStyle = d({}, e);
this.applyStyle(this.currStyle);
var i = this;
this.elm.onDestruction(function() {
i.destroy();
});
}
var o = i(28), r = i(226), a = i(225), s = i(224), _ = i(11), l = i(222), d = _.shallowExtend, u = function() {};
n.prototype.animate = function(t, e) {
var i = d({}, t.endStyle), n = o(t.duration) ? t.duration : 300, r = o(t.delay) ? t.delay : 0, a = t.easeType || "easeQuadInOut", s = o(t.startTime) ? t.startTime : +new Date(), _ = 0;
e = e || u;
if (o(window.animateDebug)) {
n *= window.animateDebug;
r *= window.animateDebug;
}
r < 0 ? _ = -r : s += r;
this.stop();
this.cb = e || u;
this._animate({
startStyle: this.currStyle,
endStyle: i,
duration: n,
startTime: s,
elapsedOffset: _,
easeType: a
});
};
n.prototype.stop = function() {
if (this.timer) {
this.timer.stop();
this.timer = null;
this.cb.call(this.elm, "stopped");
}
};
n.prototype.destroy = function() {
this.stop();
this.elm = this.currStyle = this.cb = this.timer = null;
};
n.prototype.isAnimating = function() {
return !!this.timer;
};
n.prototype._animate = function(t) {
function e(t) {
t += _;
if (t >= o) {
h.stop();
f.timer = null;
f.currStyle = n;
f.applyStyle(n);
f.cb.call(f.elm, null);
} else {
var e = c(t / o), i = u(e);
f.currStyle = i;
f.applyStyle(i);
}
}
var i = t.startStyle, n = t.endStyle, o = t.duration, _ = t.elapsedOffset, l = t.startTime, d = t.easeType, u = s.interpolateObject(i, n), c = a[d], h = r.timer(e, 0, l), f = this;
f.timer = h;
};
n.prototype.applyStyle = function(t) {
t = l(t);
for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && this.elm.setCSSStyle(e, t[e]);
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(9);
!function() {
t.mobile(c);
t.tablet(c);
t.rtl(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
minWidth: "180px",
maxWidth: "360px",
zIndex: "100",
bottom: "$$actionBarHeight",
marginBottom: "-2px",
"left, right": "10px",
color: "$$menuColor",
background: "$$menuBg",
borderWidth: "$$menuBorderWidth",
borderStyle: "$$menuBorderStyle",
borderColor: "$$menuBorderColor",
borderRadius: "$$menuRadius",
boxShadow: "$$menuShadow"
},
"&.rtl": {
"left, right": "10px"
},
"&.mobile": {
left: "0",
top: "$$titleBarHeight",
bottom: "auto",
width: "100%",
maxWidth: "$$mobileMaxWidth",
borderTop: "0 none"
},
"&.mobile.rtl": {
right: 0
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Menu"
});
return t;
}();
}, function(t, e, i) {
function n(t) {
if (k.isAuthenticated()) {
D = !0;
_ = t.$("livechat");
l = _.$("history");
d = _.$("ui").$("history");
u = _.$("channel");
c = u.$("log");
h = _.$("profile").$("has_history$bool");
f = d.$("state$string");
g = d.$("log");
p = d.$("log_length$int");
m = d.$("scroller_at_top$bool");
$ = d.$("spinner_visibility");
b = l.$("log");
w = l.$("has_more$bool");
x = l.$("in_progress$bool");
v = l.$("cursor$string");
b.bindValue(function(t) {
t && (B = S.extend(B, t));
});
x.bindValue(function(t) {
!1 === t && setTimeout(function() {
f.update("rendering");
g.update(B);
B = {};
}, I);
});
v.bindValue(function(t) {
if (void 0 !== t && t !== y) {
y = t;
f.update("fetched");
}
});
c.bindKeys(function() {
var t = c.getKeys();
if (0 !== t.length) {
var e = c.$(t[0]).$("first$bool");
e.getValue() || e.update(!0);
}
});
h.bindValue(function(t) {
t && L.fetchChatHistory(!0);
});
p.bindValue(function(t) {
void 0 !== t && f.update("rendered");
});
o();
}
}
function o() {
function t() {
var t = w.getValue(), e = c.getKeys().length > 0, i = p.getValue() > 0, n = f.getValue(), o = n && "rendered" !== n, r = m.getValue(), a = !(e || i);
$.update({
large$bool: a && o,
small$bool: !a && !1 !== t && r && o
});
}
if (D) {
j && j();
c.bindKeys(t);
w.bindValue(t);
p.bindValue(t);
f.bindValue(t);
m.bindValue(t);
t();
j = function() {
c.unbindKeys(t);
w.unbindValue(t);
p.unbindValue(t);
f.unbindValue(t);
m.unbindValue(t);
};
}
}
function r(t, e, i) {
D && t.autobind($, "value", function(t) {
if (t) {
"large$bool" in t && i.setVisible(t.large$bool);
"small$bool" in t && e.setVisible(t.small$bool);
}
});
}
function a(t, e) {
function i() {
var e = t.getScrollHeight(), o = e - E, r = E > 0 ? O + o : e;
t.setScrollTop(r);
n || C.un("write", i);
}
if (D) {
e = e || 0;
var n = !1;
f.bindValue(function(e) {
if ("rendering" === e) {
n = p.getValue() > 0;
E = t.getScrollHeight();
O = t.getScrollTop();
} else "rendered" === e && (n ? i() : C.on("write", i));
});
t.on("scroll", A.debounce(function() {
var i = t.getScrollTop(), n = i < T + e;
n && L.fetchChatHistory();
m.getValue() !== n && m.update(n);
}, N));
}
}
function s(t) {
if (D && !x.getValue() && !1 !== w.getValue()) {
t && g.update(null);
f.update("fetching");
l.write({
cursor$string: t ? "" : v.getValue() || ""
});
}
}
var _, l, d, u, c, h, f, g, p, m, $, b, w, x, v, y, j, C = i(3), S = i(73), A = i(141), k = i(44), I = 500, N = 100, T = 20, B = {}, D = !1, E = 0, O = 0, L = {
init: n,
fetchChatHistory: s,
setupSpinner: o,
bindSpinnerUI: r,
setupScrollListener: a
};
t.exports = L;
}, function(t, e, i) {
function n(t, e, i, o, s) {
if (!(this instanceof n)) return new n(t, e, i, o, s);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s || (s = {});
s.tagName || (s.tagName = "input");
s.type || (s.type = "submit");
_.call(this, t, e, i, o, s);
this.setValue(this._value);
var l = this;
this._setValue = function() {
l.setValue(l._value);
};
a && a.onLanguage && a.onLanguage(this._setValue);
}
var o = i(1), r = i(3), a = i(2), s = i(0), _ = i(17);
n.__jx__jcss = {
"**self": {}
};
n.prototype = s(_.prototype);
o(n, _, {
fqname: "meshim_widget_widgets_Submit"
});
n.prototype.__jx__super = _;
n.prototype.setValue = function(t) {
this._value = t;
return _.prototype.setValue.call(this, t);
};
n.prototype.destroy = function() {
a && a.unLanguage && a.unLanguage(this._setValue);
_.prototype.destroy.call(this);
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "button");
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(42);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_Button"
});
t.exports = n;
}, function(t, e, i) {
var n = i(8), o = i(56), r = i(36), a = i(18), s = i(6), _ = i(26), l = i(35), d = {};
d.init = function() {
var t, e = s.root, i = e.$("connection").$("status$string"), u = e.$("livechat").$("ui").$("popout$bool"), c = e.$("livechat").$("ui").$("mobile$bool"), h = e.$("livechat").$("ui").$("mockup$bool"), f = e.$("livechat").$("account").$("key$string"), g = e.$("livechat").$("profile").$("mid$string"), p = e.$("livechat").$("settings").$("language").$("language$string"), m = c.getValue() ? "dialog=no,fullscreen=yes" : "width=400,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no";
d.openPopout = function(e) {
if (!n.bugs.noBoxSizing) {
var i = f.getValue() || a.ACCOUNT_KEY, o = c.getValue();
if (!h.getValue() && !u.getValue() && i && !l.isIEMobile) {
var r = d.getPopoutURL();
if (t && !t.closed && t.focus) {
if (!o && n.isChrome || l.isNativeAndroidMobile || l.isSafariIOSMobile) t.focus(); else {
t.close();
t = window.open(r, a.POPOUT_WINDOW_PREFIX + i + new Date(), m);
if (!t || t.closed) return;
}
return !0;
}
if (o || e) {
try {
t = window.open(r, a.POPOUT_WINDOW_PREFIX + i, m);
} catch (t) {}
if (l.isChromeIOSMobile) return !0;
if (!t || t.closed) return;
try {
t.focus();
} catch (t) {}
return !0;
}
}
}
};
d.getPopoutURL = function() {
var t = {
key: f.getValue() || a.ACCOUNT_KEY,
mid: g.getValue() || "",
lang: p.getValue() || "",
hostname: window.location.hostname,
api_calls: o.stringify(_.getPopoutAPICalls())
}, e = [ a.POPOUT_URL, "?", r.buildQuery(t) ], i = r.getHash("__zopim_widget_proxy");
i && e.push("#", r.buildQuery({
__zopim_widget_proxy: i
}));
return e.join("");
};
d.isReady = function() {
var t = i.getValue();
return "registered" == t || "reattached" == t || "cookie_law" == t;
};
};
t.exports = d;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
var s = this;
this._onAutoResize = function() {
s.onAutoResize();
};
d.call(this, t, e, i, null, r);
d.prototype.setMargin.call(this, "0");
d.prototype.setPadding.call(this, "0");
d.prototype.setBorder.call(this, "0");
d.prototype.setBackground.call(this, "transparent");
d.prototype.setOverflow.call(this, "hidden");
d.prototype.setPosition.call(this, "fixed");
this.appendToParent();
this.iframe = new u(this, null, null, null, {
tagName: "iframe",
position: "relative",
width: "100%",
height: "100%",
minWidth: "100%",
minHeight: "100%",
maxWidth: "100%",
maxHeight: "100%",
border: "0",
margin: "0",
padding: "0",
background: "transparent",
overflow: "hidden",
display: "block"
});
this.iwin = this.iframe.iwin;
this.idoc = this.iframe.idoc;
this.ibody = this.iframe.ibody;
this.ihead = this.iframe.ihead;
this.content = new c(this.iframe.defaultPlacement);
this.content.setOverflow("hidden");
this.wrapper = new d(this.content, null, null, null, {
display: "inline-block"
});
this.wrapper.__jx__fqname = this.__jx__fqname;
if (a.bugs.noBoxSizing) {
this.wrapper.style.display = "inline";
this.wrapper.style.zoom = "1";
}
this.setAttributes(r);
this.defaultPlacement = this.wrapper;
this.addChildren(o);
if (a.isIE < 9) {
this.on("hide", function() {
s.iframe.setDisplay("none");
});
this.on("show", function() {
s.iframe.setDisplay("block");
});
}
this.raise();
}
var o, r = i(1), a = i(8), s = i(0), _ = i(4), l = i(12), d = i(7), u = i(173), c = i(90), h = 16e6;
!function() {
for (var t = [ "", "WebKit" ], e = "MutationObserver", i = 0; i < t.length; i++) t[i] + e in window && (o = window[t[i] + e]);
}();
n.prototype = s(d.prototype);
r(n, d, {
fqname: "jx_ui_FloatingFrame"
});
n.prototype.fire = function(t, e) {
d.prototype.fire.call(this, t, e);
this.iframe && this.iframe.fire(t, e);
this.wrapper && this.wrapper.fire(t, e);
};
n.prototype.on = function(t, e) {
"init" == t ? d.prototype.on.call(this, t, e) : this.wrapper && this.wrapper.on(t, e);
};
n.prototype.raise = function(t) {
t = parseInt(t, 10) || 1;
this.setZIndex(h += t);
};
n.prototype.normalize = function() {
var t = this.getXY();
this.moveTo(t[0], t[1]).setMargin(0);
};
n.prototype.getXY = function() {
var t = this.dom.offsetLeft, e = this.dom.offsetTop;
if (a.isIE) if (a.isStrict) {
if (a.isIE6) {
t -= document.documentElement.scrollLeft;
e -= document.documentElement.scrollTop;
}
} else {
t -= document.body.scrollLeft;
e -= document.body.scrollTop;
} else if (a.isSafari) {
var i = _.getStyles(this.iframe.offsetParent);
t += parseInt(i.borderLeftWidth, 10);
e += parseInt(i.borderTopWidth, 10);
}
return [ t, e ];
};
n.prototype.fitToContents = function(t, e, i) {
t = t || this;
for (var n = 0, o = 0; t.defaultPlacement; ) t = t.defaultPlacement;
t.dom && (t = t.dom);
o = t.scrollWidth - t.clientWidth;
n = t.scrollHeight - t.clientHeight;
this.resizeBy(o, n, i || 0, e || 0);
};
n.prototype.destroy = function() {
this.setAutoResize(!1);
d.prototype.destroy.call(this);
this.iframe = this.iwin = this.idoc = this.ibody = this.ihead = this.content = null;
};
n.prototype.setBackground = function(t) {
return this.iframe && this.iframe.setBackground(t);
};
n.prototype.setBackgroundImage = function(t) {
return this.iframe && this.iframe.setBackgroundImage(t);
};
n.prototype.setBorder = function(t) {
return this.iframe && this.iframe.setBorder(t);
};
n.prototype.setBorderColor = function(t) {
return this.iframe && this.iframe.setBorderColor(t);
};
n.prototype.setBorderStyle = function(t) {
return this.iframe && this.iframe.setBorderStyle(t);
};
n.prototype.setBorderWidth = function(t) {
return this.iframe && this.iframe.setBorderWidth(t);
};
n.prototype.setCursor = function(t) {
return this.iframe && this.iframe.setCursor(t);
};
n.prototype.setOpacity = function(t) {
return this.iframe && this.iframe.setOpacity(t);
};
n.prototype.setSelectable = function(t) {
return this.iframe && this.iframe.setSelectable(t);
};
n.prototype.setColor = function(t) {
return this.content && this.content.setColor(t);
};
n.prototype.setPadding = function(t) {
return this.content && this.content.setPadding(t);
};
n.prototype.setFontFamily = function(t) {
return this.content && this.content.setFontFamily(t);
};
n.prototype.setFontSize = function(t) {
return this.content && this.content.setFontSize(t);
};
n.prototype.setFontWeight = function(t) {
return this.content && this.content.setFontWeight(t);
};
n.prototype.setTextAlign = function(t) {
return this.content && this.content.setTextAlign(t);
};
n.prototype.setLetterSpacing = function(t) {
return this.content && this.content.setLetterSpacing(t);
};
n.prototype.setLineHeight = function(t) {
return this.content && this.content.setLineHeight(t);
};
n.prototype.setOverflow = function(t) {
return this.content && this.content.setOverflow(t);
};
n.prototype.getAutoResize = function() {
return this.autoResize;
};
n.prototype.setAutoResize = function(t) {
t = l(t);
this.autoResize = t;
if (this.wrapper) {
var e = this;
if (this.autoResize) {
if (o) {
this._autoResizer = new o(function() {
e.onAutoResize();
});
this._autoResizer.observe(this.wrapper.dom, {
childList: !0,
attributes: !0,
characterData: !0,
subtree: !0
});
} else {
this._autoResizer && window.clearInterval(this._autoResizer);
this._autoResizer = window.setInterval(this._onAutoResize, 200);
}
this.onAutoResize();
} else if (this._autoResizer) if (o) {
this._autoResizer.disconnect();
this._autoResizer = null;
} else {
window.clearInterval(this._autoResizer);
this._autoResizer = null;
}
return this;
}
};
n.prototype.onAutoResize = function() {
if (a.bugs.noBoxSizing) {
this.style.width = "10px";
this.style.height = "10px";
}
var t = this.wrapper.getWidth(), e = this.wrapper.getHeight();
this.setWidth(t);
this.setHeight(e);
if (a.bugs.noBoxSizing) {
this.style.width = t + "px";
this.style.height = e + "px";
this.iframe.dom.className = this.iframe.dom.className;
}
};
n.prototype.setDataTestId = function(t) {
this.iframe && this.iframe.setDataTestId(t + "-iframe");
return d.prototype.setDataTestId.call(this, t);
};
t.exports = n;
}, function(t, e, i) {
function n(t) {
nt = t.isCookieDenied;
Y = ct.getMediatorHost(t.overrideProxy);
ot = t.source;
rt = t.source_ver;
at = t.gd_compatible;
H = t.activity_window || window;
q = H.document;
z = t.root;
Z = z.$("tmp").$("api_settings");
K = z.$("tmp").$("server_settings");
Q = z.$("livechat").$("settings").$("cached$bool");
U = z.$("connection");
J = U.$("server_retired$bool");
et = U.$("server_ready$bool");
et.bindValue(_);
J.bindValue(s);
X = z.$("livechat").$("ui").$("mockup$bool").getValue();
if (X) U.$("status$string").update("reattached"); else {
z.$("livechat").$("profile").bindValue(a);
U.$("status$string").bindValue(r);
U.$("socket_status$string").bindValue(A);
z.bindWrite(E);
U.$("reconnect$bool").bindValue(p);
if (window.__z_sdk) M = !0; else {
M = !1;
"visibilityState" in document && "prerender" == document.visibilityState ? document.addEventListener("visibilitychange", o) : St.connect();
}
}
}
function o() {
if ("prerender" != document.visibilityState) {
document.removeEventListener("visibilitychange", o);
St.connect();
}
}
function r(t) {
wt = "reattached" == t;
if (wt) {
U.update({
client_reattached_timestamp$int: +new Date()
});
E();
}
wt && !1 === M && k();
if ("idle_disconnect" == t || "shutdown" == t || "error" == t) {
var e = z.$("livechat").$("account").$("status$string").getValue(), i = z.$("connection").$("backoff"), n = i.$("active$int").getValue() || 0, o = i.$("max_seconds$int").getValue();
"invalid_account_key" == e ? gt.warnBadEmbed() : "widget_v2" == ot && "shutdown" == t && n && o && f(o);
c();
}
A();
}
function a(t) {
t && (nt() || ct.IS_POPOUT || t.mid$string && ht.setIdentity(t.mid$string));
}
function s(t) {
tt = !0 === t;
}
function _(t) {
it = !1 !== t;
if (it) {
yt = !1;
l();
}
}
function l() {
for (var t = 0, e = vt.length; t < e; t++) {
var i = vt[t];
_t(i) && i();
}
vt = [];
}
function d(t) {
if (!it || tt) {
U.update({
server_ready$bool: !1
});
vt.push(t);
if (!yt) {
yt = !0;
G.reconnect();
}
} else t();
}
function u(t) {
G && G.send(t);
}
function c(t) {
G && G.close();
V = !t;
G = null;
}
function h() {
window.clearTimeout(St.reconnectTimer);
c(!0);
St.connect();
}
function f(t) {
window.clearTimeout(St.reconnectTimer);
St.reconnectTimer = window.setTimeout(function() {
St.reconnect();
}, 1e3 * t);
}
function g() {
U.update({
status$string: "idle_disconnect"
});
}
function p(t) {
t && St.reconnect();
}
function m(t) {
return st || new mt(t, "W", null, bt);
}
function $() {
if (!G && !V) {
G = m(Y);
G.on("break", x);
G.on("message", w);
G.on("reopen", y);
G.on("resume", v);
G.on("open", b);
}
}
function b() {
if (!X) {
U.update({
socket_open_timestamp$int: +new Date(),
socket_status$string: null,
disconnection_status$string: null
});
C();
}
}
function w(t) {
if (t) {
if (t.raw && t.raw.__messageID in Ct) {
var e = Ct[t.raw.__messageID];
delete Ct[t.raw.__messageID];
e(t);
}
var i = z;
if ("update" in t) {
var n = gt.getValueByReference(t, "livechat.account");
if (n) {
K.$("account").update(n);
gt.fullyExtend(n, Z.getValue("account"));
}
var o = gt.getValueByReference(t, "livechat.settings");
if (o) {
K.$("settings").update(o);
gt.fullyExtend(o, Z.getValue("settings"));
}
var r = gt.getValueByReference(t, "livechat.profile.mid$string");
if (r && r !== ht.getIdentity()) {
z.$("livechat").$("channel").update(null);
z.$("livechat").$("profile").update(null);
z.$("livechat").$("ui").$("chat_button").$("unread_count$int").update(0);
}
t.path && (i = i.descend(t.path));
i.update(t.update);
St.fire("message", t);
}
}
}
function x() {
U.update({
socket_status$string: "break"
});
}
function v() {
U.update({
socket_resume_timestamp$int: +new Date(),
socket_status$string: "resume"
});
}
function y() {
U.update({
socket_open_timestamp$int: +new Date(),
socket_status$string: "reconnect"
});
wt = !1;
C();
}
function j() {
var t = ht.getIdentity(), e = nt(), i = z.$("livechat").$("ui").getValue("mobile$bool") ? "mobile" : "desktop", n = z.$("livechat").$("settings").$("theme").getValue("name$string"), o = {
__type: "register",
accountKey: ct.ACCOUNT_KEY,
mID: t,
ua: H.navigator.userAgent,
dt: i,
theme: n,
cookie_law: e,
rev: lt.git_commit,
source: ot,
source_ver: rt,
country_code: ct.COUNTRY_CODE,
multisession: !0,
gd_compatible: at
};
if (z.$("livechat").$("ui").$("popout$bool").getValue()) o.popout = !0; else {
o.title = q.title;
o.url = H.location.href;
o.ref = H.document.referrer;
}
var r = St._register;
if (r) for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
return o;
}
function C() {
if (ct.ACCOUNT_KEY) {
var t = j();
ft.retrieveIDToken(function(e, i) {
if (e) R(); else {
if (i) {
delete t.mID;
t.idt = i;
}
u(t);
}
});
}
}
function S() {
return !!Q.getValue();
}
function A() {
var t = U.getValue("status$string"), e = U.getValue("socket_status$string");
window.clearTimeout(I.timer);
if ("error" != t) if ("break" == e) if ("idle_disconnect" == t) U.update({
message$string: "idle_disconnect"
}); else {
U.update({
message$string: "reconnecting"
});
I.timer = window.setTimeout(I, 6e4);
} else if (null === e && "registered" == t) U.update({
message$string: "resuming"
}); else if (dt(t) && dt(e)) {
var i = S() ? "fast_init" : "first_init";
U.update({
message$string: i
});
} else U.update({
message$string: null
}); else I.timer = window.setTimeout(I, 5e3);
}
function k() {
G && z.$("livechat").$("profile").write({
disconnect_timeout$int: L(G.rtt)
});
}
function I() {
U.update({
message$string: "disconnected"
});
}
function N() {
return pt.getConnectionStats(G);
}
function T() {
return Y;
}
function B() {
return pt.getServerTime(G);
}
function D(t) {
jt += 1;
Ct[jt] = t;
return jt;
}
function E(t) {
if (t) {
var e = {};
e.path = t.path;
e.value = t.value;
_t(t.func) && (e.__messageID = D(t.func));
xt.push(e);
}
if (G && wt) for (;xt.length; ) G.send(xt.shift());
}
function O(t) {
return t ? K.getValue(t) : K.getValue();
}
function L(t) {
var e, i, n = 10 * $t.SECOND, o = 1 * $t.SECOND, r = 120 * $t.SECOND, a = 20 * $t.SECOND;
t = Math.round(t) || 0;
t = Math.max(o, Math.min(t, n));
e = (t - o) / (n - o);
i = a + function(t) {
return t;
}(e) * (r - a);
return Math.floor(i / 1e3);
}
function W(t) {
st = t;
}
function P() {
return G ? G.id : null;
}
function R() {
U.update({
disconnection_status$string: "disconnecting"
});
c();
I.timer = clearTimeout(I.timer);
U.update({
disconnection_status$string: "disconnected"
});
}
function F() {
et.unbindValue(_);
J.unbindValue(s);
z.$("livechat").$("profile").unbindValue(a);
U.$("status$string").unbindValue(r);
U.$("socket_status$string").unbindValue(A);
U.$("reconnect$bool").unbindValue(p);
R();
wt = !1, xt = [], vt = [], yt = !1, jt = 0, Ct = {}, M = V = z = U = G = X = Z = K = Q = J = tt = et = it = nt = ot = rt = at = st = null;
}
var M, V, H, q, z, U, G, Y, X, Z, K, Q, J, tt, et, it, nt, ot, rt, at, st, _t = i(20), lt = i(45), dt = i(25), ut = i(14), ct = i(18), ht = i(93), ft = i(44), gt = i(11), pt = i(377), mt = i(376), $t = i(371), bt = {
FLUSH_DELAY_MS: 0,
RECONNECT_DELAY_MS: 1e4
}, wt = !1, xt = [], vt = [], yt = !1, jt = 0, Ct = {}, St = ut.extend({
init: n,
send: u,
connect: $,
reconnect: h,
clientDisconnect: R,
destroy: F,
disconnect: g,
getConnectionStats: N,
getHost: T,
getServerTime: B,
getServerSettings: O,
reconnectIfServerRetired: d,
registerCallback: D,
getSocketID: P,
getDCTimeoutValue: L,
setSocket: W,
reset: F
});
t.exports = St;
}, function(t, e) {
var i = function(t, e) {
return t === e || t && e && "object" == typeof t && "object" == typeof e && n(t, e);
}, n = function(t, e) {
var n;
for (n in t) if (!i(t[n], e[n])) return !1;
for (n in e) if (!i(t[n], e[n])) return !1;
return !0;
}, o = function(t) {
if ("object" != typeof t || !t) return t;
var e = {};
for (var i in t) t.hasOwnProperty(i) && (e[i] = o(t[i]));
return e;
}, r = function(t) {
if (t) for (var e = 1, i = arguments.length; e < i; e++) {
var n = arguments[e];
if (n) for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
}
return t;
}, a = {
equal: i,
clone: o,
extend: r
};
t.exports = a;
}, function(t, e, i) {
function n(t) {
var e;
h = $.root.$("livechat").$("account").$("key$string");
u = (f.isIE || f.isNewIE) && ("language" in window.navigator && !C.test(window.navigator.language) || "userLanguage" in window.navigator && !C.test(window.navigator.userLanguage) || "browserLanguage" in window.navigator && !C.test(window.navigator.browserLanguage)), 
c = t;
g.on("error", s);
h.bindValue(function(t) {
if (-1 != p(t, A)) {
g.window.on("error", a);
g.window.on("unload", function() {
g.window.un("error", a);
});
}
});
e = {
ignoreErrors: j,
logger: "widget",
release: m.info.gitCommit,
shouldSendCallback: function(t) {
x.submitToServer(t);
return !1;
}
};
e.whitelistUrls = [ S ];
v.config("https://0@0/0", e);
}
function o(t) {
t && (t.onerror = s);
}
function r(t, e, i, n, o) {
try {
x.handleErrorEvent(t, e, i, n, o);
} catch (t) {}
}
function a(t, e, i, n, o) {
r(t, e, i, n, o);
return !1;
}
function s(t, e, i, n, o) {
r(t, e, i, n, o);
return !0;
}
function _(t, e, i, n, o) {
if ((t || o) && !u) {
var r = o || t, a = r.stack ? [ r.toString(), r.stack ].join("\n") : r.toString(), s = [ a, e, i ].join(" ");
if (!(r.name && y.indexOf(r.name) > -1 || I[s])) {
I[s] = !0;
x.post(r);
}
}
}
function l(t) {
if (!(Math.random() > k) && t && c) {
var e = $.root, i = e.$("livechat").$("account").getValue(), n = e.$("livechat").$("profile").$("mid$string").getValue(), o = {
key: i.key$string,
is_voltron: i.is_voltron$bool,
status: i.status$string,
mid: n
};
v.setUserContext({
id: o.key
}).captureException(t, {
extra: {
system: m.info,
connection: c.getConnectionStats(),
account: o
}
});
}
}
function d(t) {
var e = c.getHost();
if (t && e) {
try {
var i = t.exception.values[0], n = i.type, o = i.stacktrace.frames, r = o[o.length - 1].lineno;
t.fingerprint = [ n, r + "" ];
} catch (t) {}
w.post("https://" + e + "/client/widget/errors", {
params: {
sentry_data: b.stringify(t)
}
});
}
}
var u, c, h, f = i(8), g = i(14), p = i(31), m = i(251), $ = i(6), b = i(56), w = i(250), x = {
init: n,
post: l,
bind: o,
handleErrorEvent: _,
submitToServer: d
}, v = i(249), y = [ "SyntaxError" ], j = [ "Out of memory", "too much recursion" ], C = /^en/i, S = /^($|about:blank$|(https?:\/\/)?([\w_-]+\.)*zopim\.(?:com|org))/i, A = [ "zopim" ], k = .1, I = {};
t.exports = x;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Button = i(69);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Button, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Button.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
background: "transparent",
border: "0px none",
color: "$$menuColor",
textAlign: "inherit"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Button, {
fqname: "meshim_widget_widgets_menu_ButtonLabel"
});
return t;
}();
}, function(t, e, i) {
function n(t) {
t.bindValue(o);
}
function o(t) {
if ("registered" == t || "reattached" == t || "cookie_law" == t) {
_ = !0;
s.flush();
} else _ = !1;
}
function r() {
if (_ && this.queue.length) {
f.root.$("livechat").$("ui").$("mockup$bool").getValue() || l(s.send) && s.send({
__type: "instrumentation",
metrics: this.queue
});
this.queue = [];
}
}
function a() {
var t = [];
t.push("client_country_code:" + g.COUNTRY_CODE);
t.push("browser:" + d.browser);
var e, i;
if (h.isMobileBrowser) {
e = h.isMobileTablet ? "tablet" : "mobile";
i = h.isAndroid ? "android" : h.isIOS ? "ios" : h.isWP ? "wp" : "other";
} else {
e = "desktop";
i = d.isWindows ? "win" : d.isMac ? "mac" : "other";
}
t.push("device:" + e);
t.push("platform:" + i);
t.push("rev:" + u.git_commit);
return t;
}
var s, _, l = i(20), d = i(8), u = i(45), c = i(168), h = i(35), f = i(6), g = i(18);
!function() {
s = new c();
s.setTags(a());
s.bindToConnectionStatus = n;
s.flush = r;
}();
t.exports = s;
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, o, a);
var l = _.root.$("connection").$("message$string"), d = this;
d.autobind(l, "value", function(t) {
d.setDisabled(!!t);
});
}
var o = i(1), r = i(3), a = i(0), s = i(68), _ = i(6);
n.__jx__jcss = {};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_ConnAwareSubmit"
});
n.prototype.__jx__super = s;
t.exports = n;
}, function(t, e, i) {
var n = i(1), o = i(3), r = i(0), a = i(154), s = a, _ = i(62);
a = function(t, e, i, n, r) {
if (!(this instanceof a)) return new a(t, e, i, n, r);
if (!a.__jx__jcss_generated) {
o.generate(this, a.prototype.__jx__fqname, a.__jx__jcss, null, a);
a.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, n, r);
_.__constructor.call(this);
};
a.__jx__jcss = {};
a.prototype = r(s.prototype);
n(a, s, {
fqname: "meshim_widget_widgets_TextArea"
});
a.prototype.__jx__super = _;
t.exports = a;
}, function(t, e, i) {
var n = i(1), o = i(3), r = i(0), a = i(337), s = a, _ = i(62);
a = function(t, e, i, n, r) {
if (!(this instanceof a)) return new a(t, e, i, n, r);
if (!a.__jx__jcss_generated) {
o.generate(this, a.prototype.__jx__fqname, a.__jx__jcss, null, a);
a.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, n, r);
_.__constructor.call(this);
};
a.__jx__jcss = {};
a.prototype = r(s.prototype);
n(a, s, {
fqname: "meshim_widget_widgets_EmailField"
});
a.prototype.__jx__super = _;
t.exports = a;
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, o, a);
}
var o = i(1), r = i(3), a = i(0), s = i(7);
n.__jx__jcss = {
"**self": {
marginTop: "$$marginS",
marginBottom: "$$margin",
color: "$$errorMessageColor",
fontWeight: "$$errorMessageFontWeight",
fontStyle: "$$errorMessageFontStyle"
}
};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_ErrorMessage"
});
n.prototype.__jx__super = s;
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(341), e = i(12), n = c.setIcon;
c.setIcon = function(e) {
"google_2019" !== e ? n(e) : new t(c, null, null, null, {});
};
c.setHoverable = function(t) {
var i = e(t);
c[i ? "addClass" : "removeClass"]("hoverable");
};
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_IconFont.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"&.facebook": {
color: "$$facebook"
},
"&.twitter": {
color: "$$twitter"
},
"&.hoverable": {
"&:hover, &:focus, &:active": {
"&.facebook": {
color: "$$facebookActive"
},
"&.twitter": {
color: "$$twitterActive"
},
"&.google": {
opacity: "0.8"
}
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_IconFont, {
fqname: "meshim_widget_widgets_iconFont_Auth"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_html_img = i(112);
n.__$$__meshim_widget_widgets_iconFont_Auth = i(81);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_html_img, "img", "", [], {
id: "img",
class: "img"
} ], [ n.__$$__meshim_widget_widgets_iconFont_Auth, "auth_type", "", [], {
id: "auth_type",
addClass: "auth_type"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__img"), f = s.get(o + "__auth_type");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t(t) {
e();
_ && c.autounbind(_, "value", n);
_ = t;
_ && c.autobind(_, "value", n);
}
function e() {
w = x = y = "";
f.setDisplay("none");
}
function n() {
if (_) {
switch (_.name) {
case "profile":
l = "visitor";
break;

case "concierge":
l = "concierge";
break;

default:
l = "agent";
}
var t = _.getValue() || {};
t.nick$string && (v = t.nick$string);
t.display_name$string && !p.isDefaultName(t.display_name$string) && o(t.display_name$string);
var e;
e = t.auth && t.auth.avatar$string ? t.auth.avatar$string : t.avatar_data$string ? t.avatar_data$string : t.avatar_path$string ? t.avatar_path$string : "";
r(e);
var i;
i = t.auth && "type$string" in t.auth ? t.auth.type$string : "";
a(i);
}
}
function o(t) {
if (t && t != w) {
c.setTitle(t);
w = t;
}
}
function r(t) {
var e = t || s();
if (e && e != x) {
h.setSrc(p.replaceFileHostname(e));
x = e;
}
}
function a(t) {
if (t !== y) {
f.removeClass(y);
y = t;
f.addClass(y);
f.setIcon("google" === y ? "google_2019" : y);
f.setDisplay(y ? "" : "none");
}
}
function s() {
var t = m.getValue(), e = b.getValue() || {};
d = t;
var i;
switch (l) {
case "visitor":
i = e.visitor$string || u.AVATARS.VISITOR;
break;

case "concierge":
i = e.concierge$string || u.AVATARS.CONCIERGE;
break;

case "agent":
i = $.getValue() || e.agent$string || u.AVATARS.AGENT;
}
return i || u.AVATARS.DEFAULT;
}
var _, l, d, u = i(18), g = i(6), p = i(11), m = g.root.$("livechat").$("settings").$("theme").$("name$string"), $ = g.root.$("livechat").$("settings").$("concierge").$("avatar_path$string"), b = g.root.$("livechat").$("settings").$("theme"), w = "", x = "", v = "", y = "";
c.setDataNode = t;
!function() {
c.autobind(m, "value", function(t) {
d && t != d && n();
});
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative"
},
".img": {
"width, height": "100%"
},
".auth_type": {
position: "absolute",
"bottom, left": 0,
background: "#FFF",
"fontSize, width, height": "12px",
"line-height": "16px",
overflow: "hidden",
borderRadius: "2px",
"&.facebook": {
color: "$$facebook"
},
"&.twitter": {
color: "$$twitter"
},
"&.google": {
fontSize: "9px",
paddingTop: "3px",
paddingRight: "1px",
paddingLeft: "1px"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_gravatar_GravatarImage"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
c[h(t) ? "addClass" : "removeClass"]("hide_auth_type");
return c;
}
function e(t) {
c.autounbind();
"agents" == t.name ? o(t) : n(t);
}
function n(t) {
_([ t ]).setNodes([ t ]);
}
function o(t) {
l && c.autounbind(l, "keys", r);
l = t;
l && c.autobind(l, "keys", r);
}
function r() {
for (var t = l.getKeys(), e = [], i = 0, n = Math.min(3, t.length); i < n; i++) e.push(l.$(t[i]));
a(e);
}
function a(t) {
var e = _(t);
e && e.setNodes(t);
}
function s(t) {
var e = _(t);
e && e.setImages(t);
}
function _(t) {
if (t instanceof Array && t.length) {
var e = Math.min(t.length, 4), i = $[e - 1];
if (e !== u) {
c.empty();
d = new i(c);
u = e;
}
return d;
}
}
var l, d, u, h = i(12), f = i(342), g = i(340), p = i(339), m = i(338), $ = [ f, g, p, m ];
!function() {
c.setImages = s;
c.setDataNode = e;
c.setMemberNode = n;
c.setGroupNode = o;
c.setHideAuthType = t;
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "60px",
height: "60px",
position: "relative",
overflow: "hidden",
borderWidth: "$$avatarBorderWidth",
borderStyle: "$$avatarBorderStyle",
borderColor: "$$avatarBorderColor",
borderRadius: "$$avatarRadius",
boxShadow: "$$avatarShadow",
".avatar": {
background: "#FFF"
},
"&.hide_auth_type": {
".auth_type": {
display: "none !important"
}
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_Gravatar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_toast_Disconnected = i(348);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_toast_Disconnected, "", "", [], {
addClass: "toast"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(9);
!function() {
t.mobile(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
zIndex: "1000",
top: "40px",
left: "0",
width: "100%",
height: "0",
textAlign: "center",
".toast": {
display: "inline-block",
maxWidth: "80%"
}
},
"**self.mobile": {
position: "fixed",
top: "60px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_ChatWindowDisconnectedToast"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
a = d.extend({}, u, a);
"input" != a.tagName || a.type || (a.type = "text");
l.call(this, t, e, i, o, a);
this.getValue() || this.showPlaceholder();
this.on("blur", this.handlePlaceholderBlur);
this.on("focus", this.handlePlaceholderFocus);
this.on("click", this.handleAutoSelect);
var s = this;
this._handlePlaceholder = function() {
s.setPlaceholder(s.getPlaceholder());
};
r && r.onLanguage && r.onLanguage(this._handlePlaceholder);
}
var o = i(1), r = i(2), a = i(0), s = i(8), _ = i(12), l = i(42), d = i(73), u = {
tagName: "input",
autoValidate: !0
};
n.prototype = a(l.prototype);
o(n, l, {
fqname: "jx_ui_TextField"
});
n.prototype.getPlaceholder = function() {
return this.internalPlaceholder || "";
};
n.prototype.setPlaceholder = function(t) {
"placeholder" in this.dom || (this.emulatePlaceholder = !0);
this.internalPlaceholder = t;
this.emulatePlaceholder || (this.dom.placeholder = t);
this.placeholderActive && this.showPlaceholder();
return this;
};
n.prototype.handlePlaceholderFocus = function() {
this.placeholderActive && this.hidePlaceholder();
};
n.prototype.handlePlaceholderBlur = function() {
this.getValue() || this.showPlaceholder();
};
n.prototype.showPlaceholder = function() {
this.addClass("placeholder");
this.placeholderActive = !0;
var t = this;
if (this.emulatePlaceholder) {
this._setValueOverride = !0;
this.setValue(this.getPlaceholder());
this._setValueOverride = !1;
if ("password" == this.getType()) {
this.realTypePassword = !0;
if (s.engineIE < 9) {
if (!this.fakePlaceholderPasswordIE) {
var e = {
class: this.getClass(),
type: "text",
visible: "none",
value: this.getPlaceholder(),
autoValidate: !1,
tabIndex: this.attributes.tabIndex
};
this.fakePlaceholderPasswordIE = new l(this.parentNode, null, null, null, e);
this.parentNode.insertAfter(this.fakePlaceholderPasswordIE, this);
this.autobind(this.fakePlaceholderPasswordIE, "focus", function() {
t.hidePlaceholder();
});
}
"none" != this.getComputedStyle("display") && (this.originalDisplay = this.getComputedStyle("display"));
this.fakePlaceholderPasswordIE.show().setOneStyle("display", this.originalDisplay).setClass(this.getClass());
this.setVisible("none");
} else this.setType("text", !0);
}
}
};
n.prototype.hidePlaceholder = function() {
this.removeClass("placeholder");
this.placeholderActive = !1;
if (this.emulatePlaceholder) {
this._setValueOverride = !0;
this.setValue("");
this._setValueOverride = !1;
if (this.realTypePassword) {
this.realTypePassword = !1;
if (s.engineIE < 9) {
this.fakePlaceholderPasswordIE instanceof l && this.setVisible("block").setOneStyle("display", this.originalDisplay);
this.fakePlaceholderPasswordIE.setVisible("none");
this.focus();
} else this.setType("password", !0);
}
}
};
n.prototype.setValue = function(t) {
var e = 0 === t || !!t;
this._setValueOverride || e && this.hidePlaceholder();
l.prototype.setValue.call(this, t);
if (!this._setValueOverride) try {
this.doc.activeElement.jx_wrapper != this && (e || this.showPlaceholder());
} catch (t) {}
return this;
};
n.prototype.getValue = function() {
return this.placeholderActive && this.emulatePlaceholder ? "" : l.prototype.getValue.call(this);
};
n.prototype.setAutocomplete = n.prototype.setAutoComplete = function(t) {
if (!("autocomplete" in this.dom)) return this;
var e = "";
if ("boolean" == typeof t) {
this.dom.autocomplete = t ? "on" : "off";
return this;
}
switch (t) {
case "false":
e = "off";
break;

case "true":
e = "on";
break;

default:
e = t;
}
this.dom.autocomplete = e;
return this;
};
n.prototype.getAutocomplete = n.prototype.getAutoComplete = function() {
return this.dom.autocomplete;
};
n.prototype.getAutoSelect = function() {
return this.autoSelect;
};
n.prototype.setAutoSelect = function(t) {
this.autoSelect = _(t);
return this;
};
n.prototype.handleAutoSelect = function() {
this.autoSelect && this.dom.select();
};
n.prototype.destroy = function() {
r && r.unLanguage && r.unLanguage(this._updatePlaceholder);
this.un("blur", this.handlePlaceholderBlur);
this.un("focus", this.handlePlaceholderFocus);
this.un("click", this.handleAutoSelect);
if (this.fakePlaceholderPasswordIE instanceof l) {
this.fakePlaceholderPasswordIE.destroy();
this.fakePlaceholderPasswordIE = null;
}
l.prototype.destroy.call(this);
};
n.prototype.reset = function() {
l.prototype.reset.call(this);
this.handlePlaceholderBlur();
return this;
};
n.prototype.insertAtCaret = function(t) {
if (t) {
this.placeholderActive && this.hidePlaceholder();
if (void 0 !== this.dom.selectionStart && 9 != s.engineIE) {
var e = this.dom.selectionStart, i = this.dom.selectionEnd, n = this.getScrollTop(), o = this.getValue();
this.setValue(o.substring(0, e) + t + o.substring(i, o.length));
this.focus();
this.dom.selectionStart = this.dom.selectionEnd = e + t.length;
this.setScrollTop(n);
} else if (document.selection) {
this.focus();
var r = document.selection.createRange();
r.text = t;
this.focus();
} else {
this.setValue(this.getValue() + t);
this.focus();
}
}
};
n.prototype.getCaret = function() {
var t = 0;
if (void 0 !== this.dom.selectionStart) t = this.dom.selectionStart; else if (document.selection) {
this.focus();
var e = document.selection.createRange();
e.moveStart("character", -this.getValue().length);
t = e.text.length;
}
return t;
};
n.prototype.setCaret = function(t) {
if (void 0 !== this.dom.selectionStart) {
this.dom.selectionStart = t;
this.dom.selectionEnd = t;
this.focus();
} else if (document.selection) {
this.focus();
var e = document.selection.createRange();
e.moveStart("character", -this.getValue().length);
e.moveEnd("character", -this.getValue().length);
e.moveStart("character", t);
e.moveEnd("character", 0);
e.select();
}
return this;
};
t.exports = n;
}, function(t, e, i) {
var n = i(1), o = i(3), r = i(0), a = i(85), s = a, _ = i(62);
a = function(t, e, i, n, r) {
if (!(this instanceof a)) return new a(t, e, i, n, r);
if (!a.__jx__jcss_generated) {
o.generate(this, a.prototype.__jx__fqname, a.__jx__jcss, null, a);
a.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, n, r);
_.__constructor.call(this);
};
a.__jx__jcss = {};
a.prototype = r(s.prototype);
n(a, s, {
fqname: "meshim_widget_widgets_TextField"
});
a.prototype.__jx__super = _;
t.exports = a;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
this.childConstructors = [];
this.childAttributes = [];
this.delimiter = "@";
l.call(this, t, e, i, o, r);
var s = this;
this._updateContent = function() {
s.updateContent();
};
a && a.onLanguage && a.onLanguage(this._updateContent);
this.onDestruction(function() {
a && a.unLanguage && a.unLanguage(s._updateContent);
});
}
function o(t) {
return t.replace(/&#([0-9]{1,4});/g, function(t, e) {
return String.fromCharCode(e);
});
}
var r = i(1), a = i(2), s = i(0), _ = i(21), l = i(7);
n.prototype = s(l.prototype);
r(n, l, {
fqname: "jx_ui_Localizer"
});
n.prototype.appendChild = function(t) {
if (_(t)) {
this.childConstructors.push(t[0]);
this.childAttributes.push(t[4]);
this._localizer_appendchild_override || this.updateContent();
} else l.prototype.appendChild.call(this, t);
};
n.prototype.updateContent = function() {
this.setContent(this.getContent());
};
n.prototype.getContent = function() {
return this.content;
};
n.prototype.setContent = function(t) {
this.content = t;
this.empty();
if (t) {
t.toString && (t = t.toString());
for (var e, i = t, n = i.length, r = 0, a = this.delimiter, s = a.length, _ = 0; r < n && -1 != r; ) {
e = i.indexOf(a, r);
-1 == e && (e = n);
if (e > r) {
this._localizer_appendchild_override = !0;
l.prototype.appendChild.call(this, [ l, null, null, [ o(i.slice(r, e)) ], {
tagName: "label",
display: "inline"
} ]);
this._localizer_appendchild_override = !1;
r = e;
}
if (e == r && e != n) {
var d = i.indexOf(a, e + s);
-1 == d && (d = n);
this._localizer_appendchild_override = !0;
l.prototype.appendChild.call(this, [ this.childConstructors[_] || l, null, null, [ o(i.slice(r + s, d)) ], this.childAttributes[_] || {
tagName: "label",
display: "inline"
} ]);
this._localizer_appendchild_override = !1;
r = d + s;
_++;
}
}
return this;
}
};
n.prototype.setChildProperties = function(t, e, i) {
this.childConstructors[t] = e;
this.childAttributes[t] = i;
};
n.prototype.clearChildProperties = function() {
this.childConstructors.length = this.childAttributes.length = 0;
};
n.prototype.getDelimiter = function() {
return this.delimiter;
};
n.prototype.setDelimiter = function(t) {
this.delimiter = t;
this.updateContent();
return this;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
addClass: "border_overlay"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
"top, left": 0,
"width, height": "100%",
borderRadius: "inherit"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_BorderOverlay"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
var t = g.getValue(), e = u[t];
if (e && !(o instanceof e)) {
o && o.destroy();
o = new e(c);
}
}
function e() {
var t = f.getValue();
t && r ? c.setDisplay("none") : t || !a ? c.setDisplay("") : c.setDisplay("none");
}
function n(t) {
c.setVisibility(t ? "hidden" : "");
}
var o, r, a, s = i(12), _ = i(6), l = i(361), d = i(360), u = {
icon_font_zopim: l,
icon_font_zendesk: d
}, h = _.root.$("livechat"), f = h.$("ui").$("mobile$bool"), g = h.$("settings").$("theme").$("branding").$("type$string"), p = h.$("settings").$("branding").$("hide_branding$bool");
c.setHideOnMobile = function(t) {
r = s(t);
e();
};
c.setHideOnDesktop = function(t) {
a = s(t);
e();
};
!function() {
c.autobind(g, "value", t);
c.autobind(f, "value", e);
c.autobind(p, "value", n);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
display: "inline-block",
color: "$$brandingLinkColor"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Branding"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, s) {
if (!(this instanceof n)) return new n(t, e, i, o, s);
if (r.bugs.noBoxSizing) {
var l = this.table = new _(t, null, null, null, {
tagName: "table"
}), d = this.tbody = new _(l, null, null, null, {
tagName: "tbody"
}), u = this.tr = new _(d, null, null, null, {
tagName: "tr"
}), c = this.td = new _(u, null, null, null, {
tagName: "td"
}), h = this;
this.table.destroy = function() {
h.destroy();
};
this.table.empty = function() {
h.empty();
};
this.setPadding = function(t) {
this.td.setPadding(t);
return this;
};
this.show = function() {
this.table && this.table.show();
return this;
};
this.hide = function() {
this.table && this.table.hide();
return this;
};
_.call(this, c, e, i, o, s);
l.style.tableLayout = "fixed", l.style.borderCollapse = "collapse";
d.style.height = d.style.width = this.style.height = this.style.width = "100%";
l.setTop(0).setLeft(0).setWidth("100%").setHeight("100%").setPosition("absolute").applyConstraints();
this.style.position = "relative", this.style.overflow = "auto";
l.defaultPlacement = this;
} else {
this.setPadding = function(t) {
if (!a(t)) return this;
t = t.split(" ");
t[0] = parseInt(t[0], 10);
t[1] = parseInt(t[1], 10);
t[2] = parseInt(t[2], 10);
t[3] = parseInt(t[3], 10);
if (isNaN(t[0])) t[3] = t[2] = t[1] = t[0] = 0; else if (isNaN(t[3])) if (isNaN(t[1])) t[3] = t[2] = t[1] = t[0]; else if (isNaN(t[2])) {
t[3] = t[1];
t[2] = t[0];
} else t[3] = t[1];
this.setTop(parseInt(t[0], 10)).setRight(parseInt(t[1], 10)).setBottom(parseInt(t[2], 10)).setLeft(parseInt(t[3], 10));
return this;
};
_.call(this, t, e, i, o, s);
this.setStyle({
top: 0,
bottom: 0,
left: 0,
right: 0,
overflow: "auto",
position: "absolute"
});
}
this.setStyle(i);
this.setAttributes(s);
}
var o = i(1), r = i(8), a = i(22), s = i(0), _ = i(7);
n.prototype = s(_.prototype);
o(n, _, {
fqname: "jx_ui_FullFrame"
});
n.prototype.destroy = function() {
_.prototype.destroy.call(this);
if (this.table) {
_.prototype.empty.call(this.table);
this.table.empty = null;
_.prototype.destroy.call(this.table);
this.table = this.tbody = this.tr = this.td = null;
}
};
t.exports = n;
}, function(t, e, i) {
var n = i(113), o = i(114), r = i(174), a = {};
a._super = r;
a.defaults = {
colors: {
primary$string: "#555555",
banner$string: "#EEEEEE",
bubble$string: "#E59341"
}
};
a.generate = function(t) {
function e(t) {
var e = {}, i = t.luminance(), r = t.darken(10), a = t.lighten(10), s = n.interpolate(t, o.black, .5, "rgb"), d = n.interpolate(t, o.black, .7, "rgb");
e.color = new n.ColorScale({
colors: [ o.white, o.white, s.darken(10), s, s ],
positions: [ 0, _ - .001, _ + .001, l, 1 ],
mode: "rgb"
}).get(i).hex();
e.bg = new n.ColorScale({
colors: [ t, t, t.darken(10) ],
positions: [ 0, l, 1 ],
mode: "rgb"
}).get(i).hex();
e.iconColor = new n.ColorScale({
colors: [ t, t, d, d.lighten(10) ],
positions: [ 0, _ - .001, _ + .001, 1 ],
mode: "rgb"
}).get(i).hex();
e.borderColor = new n.ColorScale({
colors: [ r, r, t.darken(20) ],
positions: [ 0, l, 1 ],
mode: "rgb"
}).get(i).hex();
e.hoverBg = new n.ColorScale({
colors: [ a, t, t.darken(5) ],
positions: [ 0, l, 1 ],
mode: "rgb"
}).get(i).hex();
return e;
}
function i(t, e) {
var i = {}, r = t.luminance(), a = n.interpolate(t, o.black, e ? .7 : .5, "rgb"), s = e ? n.color(o.white) : n.interpolate(t, o.white, .5, "rgb");
i.color = new n.ColorScale({
colors: [ s, s.lighten(50), a, a.lighten(10) ],
positions: [ 0, h - .001, h + .001, 1 ],
mode: "rgb"
}).get(r).hex();
i.bg = t.hex();
return i;
}
var r = n.hex(t.colors.primary$string), a = r.luminance(), s = n.hex(t.colors.banner$string || t.colors.primary$string), _ = 120 / 255, l = 200 / 255, d = e(r), u = e(r.lighten(15)), c = e(s), h = 120 / 255, f = i(r), g = i(s, !0);
return {
standard: {
borderColor: "#DDD",
headColor: f.color,
headBg: r,
contentColor: "#444",
contentBlockBg: "#EEE",
placeholderColor: "#AAA",
inputColor: "#666",
inputBorderColor: "#DDD",
inputFocusBorderColor: o.clampLuminance(r, .2, .4).hex(),
buttonColor: d.color,
buttonBg: d.bg,
buttonBorderColor: d.borderColor,
buttonHoverBg: d.hoverBg,
buttonShadow: "0px 1px 2px rgba(0,0,0,0.1), inset 0px 1px 0px rgba(255,255,255,0.25)",
buttonSecColor: u.color,
buttonSecBg: u.bg,
buttonSecBorderColor: u.borderColor,
buttonSecHoverBg: u.hoverBg,
scrollableFrameTopHeight: "5px",
scrollableFrameTopBackground: "gradient top rgba(0,0,0,0.05) rgba(0,0,0,0)",
scrollableFrameTopBackgroundColor: "transparent",
scrollableFrameBottomHeight: "5px",
scrollableFrameBottomBackground: "gradient top rgba(0,0,0,0) rgba(0,0,0,0.05)",
scrollableFrameBottomBackgroundColor: "transparent",
toastColor: "#666",
toastBg: "rgba(255, 255, 255, 0.95)",
toastBorderColor: "#DDD",
toastShadow: "$$windowShadow",
avatarBorderColor: "#DDD",
profileCardAvatarBorderWidth: 0,
profileCardAvatarShadow: "0px 1px 2px rgba(0,0,0,0.2)",
profileCardNameColor: o.clampLuminance(r, 0, .2).hex(),
profileCardTitleColor: "#AAA",
bottomBorderWidth: "1px 0 0",
bottomBorderColor: "#EEE",
chatMotifHill: "#EEE",
chatMotifBubble: "#BBB",
chatButtonColor: d.color,
chatButtonBg: r.hex(),
chatButtonBorderWidth: a > l ? "" : 0,
chatButtonBorderColor: a > l ? "#DDD" : "",
faviconBg: new n.ColorScale({
colors: [ r.lighten(15), r.lighten(5), r.darken(5), r.darken(5) ],
positions: [ 0, .05, .0501, 1 ],
mode: "rgb"
}).get(a).hex(),
windowColor: "#666",
windowPadding: "3px",
windowShadow: "0px 0px 3px 2px rgba(0,0,0,0.1)",
windowContentBorderWidth: "0 1px",
windowContentBorderColor: "#DDD",
menuBorderColor: "#DDD",
menuItemHoverBg: "#EEE",
titleBarColor: f.color,
titleBarBg: f.bg,
titleBarBorderWidth: a > 220 / 255 ? "1px" : 0,
titleBarBorderColor: a > 220 / 255 ? "#DDD" : "",
titleBarIconsColor: "",
actionBarColor: "#999",
actionBarBorderWidth: "0 1px 1px 1px",
actionBarBorderColor: "#DDD",
actionBarHoverColor: "#666",
chatPanelProfileCardContainerBorderWidth: "0 0 1px",
chatPanelProfileCardContainerBorderColor: "#EEE",
chatLogVisitorBubbleBg: "#FBFBFB",
chatLogVisitorBubbleBorderColor: "#EEE",
chatLogAgentBubbleBg: n.interpolate(o.clampLuminance(r, .4, .8), o.white, .8, "rgb").hex(),
chatLogAgentBubbleBorderColor: n.interpolate(o.clampLuminance(r, .4, .8), o.white, .4, "rgb").hex(),
chatLogAvatarBorderWidth: "$$borderWidth",
chatLogFileProgressBg: f.bg,
chatLogDateDividerLineHeight: "0.1em",
chatLogDateDividerBorderBottom: "1px solid #DDD",
chatTranslationSwitchColor: "#999",
chatTextAreaBorderWidth: "1px 0 0",
chatTextAreaBorderColor: "#EEE",
chatTextAreaInputShadow: "inset 0px 1px 3px rgba(0,0,0,0.1)",
chatTextAreaInputFocusShadow: "inset 0px 1px 3px " + n.interpolate(o.clampLuminance(r, .2, .4), o.white, .5, "rgb").hex(),
chatTextAreaDropColor: "#444",
chatTextAreaDropBg: "#EEE",
chatTextAreaDropBorderWidth: "1px",
chatTextAreaDropBorderStyle: "dashed",
chatTextAreaDropBorderColor: "#444",
badgeBg: g.bg,
badgeBorderWidth: 0,
badgeContentColor: g.color,
badgeContentBg: g.bg,
badgeContentBorderWidth: 0,
badgeFormBg: o.white,
badgeFormBorderWidth: "1px 0",
badgeFormBorderColor: "#DDD",
badgeIconColor: c.iconColor
},
mobile: {
authButtonBg: "$$inputBg",
authButtonBorderColor: "$$inputBorderColor",
authButtonShadow: "none",
bottomBorderWidth: 0,
menuBg: "#FBFBFB",
menuHeaderColor: "#999",
menuItemHoverBg: "#DDD",
menuRadius: "0 0 10px 10px",
menuShadow: "none",
actionBarColor: f.color,
actionBarBg: r.darken(10).hex(),
actionBarBorderWidth: 0,
actionBarHoverColor: f.color,
chatPanelProfileCardContainerBorderColor: "#DDD",
chatTextAreaBorderColor: "#DDD",
chatTextAreaInputShadow: "none",
chatTextAreaInputBorderWidth: 0,
chatTextAreaInputRadius: 0,
chatTextAreaInputFocusShadow: "none",
brandingLinkColor: "#999"
}
};
};
t.exports = a;
}, function(t, e, i) {
function n() {
l = C.root;
d = l.$("livechat");
u = d.$("ui");
h = u.$("chat_notification").$("display$bool");
f = u.$("chat_window").$("display$bool");
g = u.$("chat_button").$("display$bool");
p = u.$("mobile_notifications$bool");
c = u.$("mobile_overlay$bool");
h.on("value", k);
f.on("value", k);
g.on("value", k);
p.on("value", k);
}
function o() {
if (!0 === v) return !0;
v = p.getValue() ? $ && b && m && !y(f.getValue()) && !y(h.getValue()) && !y(g.getValue()) : c.getValue() ? $ && b && !y(f.getValue()) && !y(g.getValue()) : b && !y(g.getValue());
return v;
}
function r() {
if (w === b && x === $) {
w = $;
$.moveUp(A);
b.moveDown(A);
} else if (w) w.moveDown(function(t) {
if (!t) if (x) {
w = x;
x.moveUp();
} else w = null;
}); else {
w = x;
x && x.moveUp();
}
}
function a(t) {
$ = t;
k();
}
function s(t) {
m = t;
k();
}
function _(t) {
b = t;
k();
}
var l, d, u, c, h, f, g, p, m, $, b, w, x, v, y = i(25), j = i(34), C = i(6), S = {
init: n,
registerChatButton: _,
registerChatNotification: s,
registerChatWindow: a
}, A = function() {}, k = j.debounce(function() {
if (o()) {
var t = f.getValue(), e = h.getValue(), i = g.getValue(), n = t && $ || e && m || i && b || null;
if (!(t + e + i > 1) && x !== n) {
x = n;
r();
}
}
});
t.exports = S;
}, function(t, e, i) {
function n(t) {
x.setActivityWindow(t);
C = v.ACCOUNT_KEY;
p = (t || window).location.hostname;
m = /\b(?:\d{1,3}\.){3}\d{1,3}/.test(p) ? p : y.getEffectiveTLD(p);
}
function o() {
if (v.IS_POPOUT) return x.get(k) || b().get("mid");
var t = u();
return t || (x.get(A) || "");
}
function r(t) {
x.set(A, t, {
path: "/",
ttl: 365,
domain: m
});
}
function a() {
x.remove(A, {
path: "/",
domain: m
});
}
function s() {
var t = c();
if ("boolean" == typeof t) return t;
var e = x.get(I);
e = parseInt(e, 10);
return 0 !== e && (1 === e || void 0);
}
function _() {
x.remove(I, {
path: "/",
domain: m
});
}
function l(t) {
t = $(t);
t = t ? 1 : 0;
x.set(I, t, {
path: "/",
ttl: 365,
domain: m
});
}
function d() {
a();
w.remove(S);
}
function u() {
var t = x.getJSONCookie("__zlcid");
x.remove("__zlcid", {
path: "/"
});
if (t.mID) return t.mID;
var e = h("__zlcstore");
x.remove("__zlcstore", {
path: "/",
domain: m
});
return e && e.mID ? e.mID : void 0;
}
function c() {
var t, e = h("__zlcprivacy");
if ("boolean" == typeof e) {
t = e;
l(e);
}
return t;
}
function h(t) {
return x.getJSONCookie(t)[C];
}
function f(t, e) {
var i = w.get(S) || {};
i[C] || (i[C] = {});
var n = i[C];
n[t] = e;
n.timestamp = +new Date();
w.set(S, i);
}
function g(t) {
var e = w.get(S) || {};
if (!e[C]) return {};
var i = e[C];
return i.timestamp ? +new Date() - i.timestamp > j ? {} : i[t] : i[t] || {};
}
var p, m, $ = i(12), b = i(36), w = i(380), x = i(177), v = i(18), y = i(11), j = 48e4, C = v.ACCOUNT_KEY, S = "__zlcstore", A = "__zlcmid", k = "__zlcpomid", I = "__zlcprivacy", N = {
init: n,
DOM: {
saveVariable: f,
getVariable: g
},
Cookie: x,
clearAll: d,
setIdentity: r,
getIdentity: o,
clearIdentity: a,
clearAllowCookieLaw: _,
getAllowCookieLaw: s,
setAllowCookieLaw: l
};
t.exports = N;
}, function(t, e, i) {
var n = i(2), o = {
livechat: {
timestamp$int: +new Date(),
settings: {
file_sending: {
enabled$bool: !0
},
behavior: {
do_not_display$bool: !1
},
theme: {
name$string: "simple",
message_type$string: "bubble_avatar",
colors: {
placeholder$string: "_"
},
chat_button: {
position$string: "br",
position_mobile$string: "br"
},
chat_window: {
position$string: "br",
size$string: "medium",
profile_card: {
display_avatar$bool: !0,
display_rating$bool: !0,
display_title_name$bool: !0
},
use_banner$bool: !0,
title_bar: {
hide_minimize$bool: !1,
hide_popout$bool: !1
}
},
branding: {
type$string: "icon_font_zopim"
}
},
greetings: {
online$string: n(80),
offline$string: n(81)
},
banner: {
enabled$bool: !0,
layout$string: "image_right",
text$string: n(82),
image_path$string: "",
image_data$string: ""
},
chat_button: {
hide_when_offline$bool: !1
},
chat_window: {
mobile_mode$string: "popout",
title_bar: {
title$string: n(83),
status_messages: {
online$string: n(84),
away$string: n(85),
offline$string: n(86)
}
}
},
login: {
allowed_types: {
email$bool: !0,
facebook$bool: !0,
twitter$bool: !1,
google$bool: !0
},
phone_display$bool: !1,
restrict_profile$bool: !1
},
concierge: {
display_name$string: n(87),
title$string: n(88),
avatar_path$string: "",
avatar_data$string: "",
greeting: {
enabled$bool: !1,
message$string: n(89)
}
},
branding: {
hide_branding$bool: !1,
hide_favicon$bool: !1,
custom_favicon_path$string: ""
},
language: {
language$string: "--"
},
cookie_law: {
enabled$bool: !1
},
sound: {
disabled$bool: !1
},
popout: {
enabled$bool: !0
},
rating: {
enabled$bool: !0
},
end_chat_menu: {
enabled$bool: !0,
message$string: ""
},
emoticons: {
enabled$bool: !1
},
bubble: {
enabled$bool: !0,
title$string: n(90),
text$string: n(91)
},
forms: {
pre_chat_form: {
required$bool: !1,
profile_required$bool: !1,
message$string: "",
form: {
0: {
name$string: "name",
required$bool: 0
},
1: {
name$string: "email",
required$bool: 0
},
2: {
label$string: n(92),
name$string: "department",
required$bool: 0,
type$string: "department"
},
3: {
label$string: n(93),
name$string: "message",
required$bool: 0,
type$string: "textarea"
},
4: {
label$string: n(94),
name$string: "phone",
required$bool: 0,
type$string: "text",
hidden$bool: !0
}
}
},
offline_form: {
message$string: n(95),
message_disabled$string: n(96),
post_submit_message$string: n(97),
profile_required$bool: !0,
form: {
0: {
name$string: "name",
required$bool: 1
},
1: {
name$string: "email",
required$bool: 1
},
2: {
label$string: n(98),
name$string: "message",
required$bool: 1,
type$string: "textarea"
},
3: {
label$string: n(99),
name$string: "phone",
required$bool: 0,
type$string: "text",
hidden$bool: !0
}
}
},
post_chat_form: {
header$string: n(100),
message$string: n(101),
comments_enabled$bool: !0,
comments_messages: {
good: {
message$string: n(102),
placeholder$string: n(103)
},
bad: {
message$string: n(104),
placeholder$string: n(105)
}
}
},
card_form: {}
}
}
}
};
t.exports = o;
}, function(t, e, i) {
function n(t, e) {
this.name = t;
this.leaf = /\$[a-z]+$/.test(t);
this.parentNode = e;
this.listeners_value = [];
this.listeners_write = [];
if (!this.leaf) {
this.listeners_keys = [];
this.childNodes = {};
this.keys = {};
}
}
function o(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function r(t) {
for (var e = "", i = 0; i < t.length; i++) /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(t[i]) ? e += "." + t[i] : e += "[" + JSON.stringify(t[i]) + "]";
return e.substr(1);
}
var a = i(14);
n.prototype.fqname = function() {
return r(this.path());
};
n.prototype.path = function() {
for (var t = this, e = [ this.name ]; t = t.parentNode; ) e.unshift(t.name);
return e;
};
n.prototype.descend = function(t) {
var e, i, r, a = this;
"string" == typeof t && (t = t.split("."));
for (i = 0, r = t.length; i < r; i++) {
e = t[i];
o(a.childNodes, e) || (a.childNodes[e] = new n(e, a));
a = a.childNodes[e];
}
return a;
};
n.prototype.$$ = n.prototype.descend;
n.prototype.$ = function(t) {
return o(this.childNodes, t) ? this.childNodes[t] : this.childNodes[t] = new n(t, this);
};
n.prototype.update = function(t, e, i) {
var n, o;
if (null !== t) {
delete this.deleted;
o = this.parentNode;
for (;o && o.deleted; ) {
delete o.deleted;
o = o.parentNode;
}
}
if (this.leaf) {
this.value = t;
this.notifyListeners(t, e, i);
} else {
if (null == t) {
this.deleted = !0;
for (n in this.childNodes) this.childNodes.hasOwnProperty(n) && this.childNodes[n].update(null, !0, i);
} else for (n in t) t.hasOwnProperty(n) && this.$(n).update(t[n], !0, i);
this.notifyListeners(t, e, i);
}
};
n.prototype.write = function(t, e, i) {
if ("function" == typeof e) {
i = e;
e = !1;
}
var n = {
path: this.path(),
value: t
};
"function" == typeof i && (n.func = i);
this.update(t, e || !1, n);
};
n.prototype.bindWrite = function(t) {
this.listeners_write.push(t);
};
n.prototype.bindValue = function(t) {
this.listeners_value.push(t);
try {
t.call(this, this.getValue());
} catch (t) {
a.fire("error", t);
}
};
n.prototype.bindKeys = function(t) {
if (!this.leaf) {
this.listeners_keys.push(t);
try {
t.call(this, this.getKeys(), []);
} catch (t) {
a.fire("error", t);
}
}
};
n.prototype.unbindValue = function(t) {
for (var e = this.listeners_value.length; e--; ) if (this.listeners_value[e] == t) {
this.listeners_value.splice(e, 1);
return;
}
};
n.prototype.unbindKeys = function(t) {
if (!this.leaf) for (var e = this.listeners_keys.length; e--; ) if (this.listeners_keys[e] == t) {
this.listeners_keys.splice(e, 1);
return;
}
};
n.prototype.on = function(t, e) {
switch (t) {
case "value":
this.bindValue(e);
break;

case "keys":
this.bindKeys(e);
}
};
n.prototype.un = function(t, e) {
switch (t) {
case "value":
this.unbindValue(e);
break;

case "keys":
this.unbindKeys(e);
}
};
n.prototype.addListener = function(t, e) {
this.listeners[t].push(e);
};
n.prototype.removeListener = function(t, e) {
for (var i = this.listeners[t], n = i.length; n--; ) i[n] == e && i.splice(n, 1);
};
n.prototype.notifyListeners = function(t, e, i) {
var n, r, s;
if (!this.leaf) {
n = [];
r = [];
if (t) {
for (s in t) if (t.hasOwnProperty(s)) if (null !== t[s]) {
if (!o(this.keys, s)) {
this.keys[s] = 1;
n.push(s);
}
} else if (o(this.keys, s)) {
delete this.keys[s];
r.push(s);
}
} else for (s in this.keys) if (this.keys.hasOwnProperty(s)) {
delete this.keys[s];
r.push(s);
}
}
for (var _ = 0; _ < this.listeners_value.length; _++) try {
this.listeners_value[_].call(this, t);
} catch (t) {
a.fire("error", t);
}
if (i) for (_ = 0; _ < this.listeners_write.length; _++) try {
this.listeners_write[_].call(this, i);
} catch (t) {
a.fire("error", t);
}
if (!this.leaf) {
for (_ = 0; _ < this.listeners_keys.length; _++) try {
this.listeners_keys[_].call(this, n, r);
} catch (t) {
a.fire("error", t);
}
if (!e && this.parentNode) {
var l = {};
l[this.name] = t;
this.parentNode.notifyListeners(l, e, i);
}
}
};
n.prototype.getValue = function(t) {
if (t) return this.descend(t).getValue();
if (this.leaf) return this.value;
if (this.deleted) return null;
var e, i, n = {};
for (var o in this.childNodes) if (this.childNodes.hasOwnProperty(o) && null != (i = this.childNodes[o].getValue())) {
n[o] = i;
e = !0;
}
return e ? n : null;
};
n.prototype.hasKey = function(t) {
return o(this.keys, t);
};
n.prototype.getKeys = function() {
if (this.leaf) return null;
var t = [];
for (var e in this.keys) this.keys.hasOwnProperty(e) && t.push(e);
return t;
};
n.prototype.gc = function() {
var t = !0;
for (var e in this.childNodes) if (this.childNodes.hasOwnProperty(e)) {
var i = this.childNodes[e];
t = i.leaf ? !i.listeners_value.length && null == i.value && (delete this.keys[e], 
delete this.childNodes[e]) && t : i.gc() && (delete this.keys[e], delete this.childNodes[e]) && t;
}
return t && this.deleted && !this.listeners_keys.length && !this.listeners_value.length;
};
n.DataNode = n;
t.exports = n;
}, function(t, e) {
var i = {
cached_fqname: {},
cache: {},
cache_replaced: {},
palettes: {},
priorities: []
};
t.exports = i;
}, function(t, e) {
function i(t) {
return t.join("");
}
var n = {
space: / /g,
repeatingLinearGradient: /^\s*repeating-linear-gradient/,
prependFQName: /^(\*\*self|)(?!.+?keyframes)/,
prePrependFQName: /^(?!\*\*self)/g,
replacePseudo: /\:\:\:([A-Za-z_\-.]+)/g,
replaceAppend: / +?&/g,
placeholder: /::placeholder$/,
replaceVariables: /(?:(?:([A-Za-z\-]+):)??(?:& *:)?\$\$([A-Za-z0-9_\.]+))(?=;)/g,
replaceLeftovers: /(?:(?:[A-Za-z\-]+:)??(?:& *:)?(\$\$[A-Za-z0-9_\.]*?)??)(?=;)/g,
replaceMedia: /(.*)(@media.*)@mediaend(.*)/,
commaStart: /^,/,
selectorCase: /([A-Z]+)/g,
removePrefix: /^\$\$/,
isVariable: /\$\$[A-Za-z0-9_]+/
}, o = {
REGEX: n,
join: i
};
t.exports = o;
}, function(t, e, i) {
function n(t, e) {
t || r.log(e);
}
var o = i(20), r = {
ok: n,
isFunction: function(t, e) {
n(o(t), e);
}
};
r.log = function() {};
t.exports = r;
}, function(t, e) {
var i;
i = function() {
return this;
}();
try {
i = i || Function("return this")() || (0, eval)("this");
} catch (t) {
"object" == typeof window && (i = window);
}
t.exports = i;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
marginBottom: "$$margin",
color: "$$menuHeaderColor"
},
"&.item": {
margin: "$$menuItemPadding"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_menu_Header"
});
return t;
}();
}, function(t, e, i) {
function n() {
if (!a.isWebKit || a.isChrome) return !1;
var t = document.activeElement;
return t && "select" === t.tagName.toLowerCase();
}
function o() {
if (a.isIE && document.documentMode && !(a.isStrict && document.documentMode > 7)) for (var t = document.getElementsByTagName("select"), e = t.length; e--; ) {
var i = t[e].style, n = i.display;
i.display = "none";
i.display = n;
}
}
function r() {
o();
}
var a = i(8), s = {
testSafariFocusBug: n,
ieQuirksModeFix: r
};
t.exports = s;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_ratingBar_emoticon_Emoticon = i(294);
n.__$$__meshim_widget_widgets_ratingBar_thumb_Thumb = i(290);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_ratingBar_emoticon_Emoticon, "emoticon_rating_options", "", [], {
id: "emoticon_rating_options",
addClass: "button_bar",
visible: "none"
} ], [ n.__$$__meshim_widget_widgets_ratingBar_thumb_Thumb, "thumb_rating_options", "", [], {
id: "thumb_rating_options",
addClass: "button_bar",
visible: "none"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
var c = s.get(i + "__emoticon_rating_options"), h = s.get(i + "__thumb_rating_options");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t(t) {
s && u.autounbind(s, "value", n);
s = t;
s && u.autobind(s, "value", n);
}
function e() {
return d;
}
function i(t) {
d = t;
l.setValue(t);
l.updateTitle(d);
}
function n(t) {
d !== t && i(t);
}
function o() {
var t = l.getValue();
d === t && (t = null);
i(t);
u.fire("change", t);
}
function r() {
_ = "thumb";
if ("thumb" === _) {
h.show();
c.hide();
l = h;
} else if ("emoticon" === _) {
h.hide();
c.show();
l = c;
} else {
h.hide();
c.hide();
l = null;
}
}
function a(t) {
l.addClass(t);
}
var s, _, l, d;
!function() {
u.setDataNode = t;
u.getValue = e;
u.setValue = i;
u.setSize = a;
r();
l.on("change", o);
}();
}();
for (var g in f) u[g] = f[g];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
".button_bar": {
width: "100%",
textAlign: "center"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_RatingBar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
n.__$$__meshim_widget_widgets_chatLogRenderer_ChatName = i(322);
n.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage = i(321);
n.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage = i(318);
n.__$$__jx_ui_html_span = i(30);
n.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption = i(317);
n.__$$__meshim_widget_widgets_chatLogRenderer_TranslationSwitch = i(315);
n.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile = i(314);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__meshim_widget_widgets_chatLogRenderer_ChatName, "chat_name", "", [], {
id: "chat_name",
addClass: "chat_name"
} ], [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage, "chat_msg", "", [], {
id: "chat_msg",
addClass: "chat_msg"
} ], [ n.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage, "resend", "", [], {
id: "resend",
addClass: "resend_chat_msg"
} ] ], {
class: "chat_msg_holder"
} ], [ n.__$$__jx_ui_html_span, "", "", [], {
text: " "
} ], [ n.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption, "chat_option", "", [], {
id: "chat_option",
addClass: "chat_option"
} ], [ n.__$$__meshim_widget_widgets_chatLogRenderer_TranslationSwitch, "translation_switch", "", [], {
id: "translation_switch"
} ], [ n.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile, "chat_file", "", [], {
id: "chat_file",
addClass: "chat_file"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui",
"xmlns:logRenderer": "meshim.widget.widgets.chatLogRenderer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__chat_name"), f = s.get(o + "__chat_msg"), g = s.get(o + "__resend"), p = s.get(o + "__chat_option"), m = s.get(o + "__translation_switch"), $ = s.get(o + "__chat_file");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
function t(t) {
if (n !== t) {
if (n) {
c.autounbind(n, "value", e);
c.autounbind(o, "value", e);
o = null;
}
n = t;
if (n) {
o = a.$(t.name).$("show_original$bool");
c.autobind(n, "value", e);
c.autobind(o, "value", e);
}
g.setDataNode(t);
h.setDataNode(t);
$.setDataNode(t);
}
}
function e() {
var t = n.$("msg$string"), e = n.$("options$string"), i = null;
if (n.hasKey("translation")) {
i = o;
if (!i.getValue()) {
t = n.$("translation").$("msg$string");
e = n.$("translation").$("options$string");
}
}
f.setDataNode(t);
p.setDataNode(e);
m.setDataNode(i);
}
var n, o, r = i(6), a = r.root.$("livechat").$("ui").$("channel").$("log");
!function() {
c.setDataNode = t;
}();
}();
for (var w in b) c[w] = b[w];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
marginTop: "10px",
".chat_name": {
fontWeight: "bold",
"&": "$$chatLogName"
},
"&.visitor .chat_name": {
color: "$$chatLogVisitorNameColor"
},
"&.agent .chat_name": {
color: "$$chatLogAgentNameColor"
},
".chat_msg_holder": {
whiteSpace: "pre-wrap",
wordWrap: "break-word",
display: "inline",
".chat_msg": {
"&": "$$chatLogMsg"
},
".resend_chat_msg": {
marginLeft: "6px"
}
},
".chat_option": {
wordBreak: "break-all",
input: {
margin: "2px 5px"
}
},
".chat_file": {
"marginTop, marginBottom": "5px",
"&": "$$chatLogFile"
}
},
"**self.group_children": {
marginTop: "0px",
".chat_name": {
display: "none"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_chatLogRenderer_BasicRenderer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog = i(148);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:jx": "jx.controls",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatPanel": "meshim.widget.components.chatWindow.chatPanel"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(6), e = t.root.$("livechat").$("ui").$("history"), n = e.$("log"), o = e.$("log_length$int");
!function() {
c.getElement("list").on("jx:list:length", function(t) {
o.update(t);
});
c.setDataNode(n);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog, {
fqname: "meshim_widget_components_chatWindow_chatPanel_HistoryLog"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_html_div, "inner", "", [], {
id: "inner",
addClass: "inner",
useDisplay: "true"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__inner");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
var t = i(12), e = {
SMALL: 16,
BIG: 30
}, n = c.setVisible;
c.setVisible = function(e) {
e = t(e);
n.call(c, e);
h.setVisible(e);
};
c.setSize = function(t) {
var i = "big" === t ? e.BIG : e.SMALL;
c.setWidth(i);
c.setHeight(i);
};
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"@keyframes": {
spinner: {
to: {
transform: "rotate(360deg)"
}
}
},
"**self": {
width: "16px",
height: "16px",
margin: "auto"
},
".inner": {
width: "100%",
height: "100%",
borderRadius: "50%",
border: "2px solid transparent",
borderTopColor: "#ddd",
borderRightColor: "#ddd",
animation: "spinner .6s linear infinite"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatWindow_chatPanel_Spinner"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
a || (a = {});
a.tagName || (a.tagName = "input");
a.type || (a.type = "checkbox");
_.call(this, t, e, i, o, a);
this.on("click", function() {
this.onAutoValidate();
});
r.engineIE < 9 && this.on("click", function() {
this.fire("change");
});
}
var o = i(1), r = i(8), a = i(0), s = i(12), _ = i(42);
n.prototype = a(_.prototype);
o(n, _, {
fqname: "jx_ui_CheckBox"
});
n.prototype.getChecked = function() {
return this.dom.checked;
};
n.prototype.setChecked = function(t) {
this.dom.checked = s(t);
return this;
};
n.prototype.toggleChecked = function() {
this.setChecked(!this.getChecked());
return this;
};
n.prototype.getInitialChecked = function() {
return r.engineIE <= 8 ? this._initialChecked : this.dom.getAttribute("checked");
};
n.prototype.setInitialChecked = function(t) {
r.engineIE <= 8 ? this._initialChecked = t : this.setAttribute("checked", t);
return this;
};
n.prototype.reset = function() {
this.setChecked(this.getInitialChecked()).setValidity(!0);
_.prototype.reset.call(this);
};
n.prototype.validate = function(t) {
var e = !this.dom.required || this.getChecked();
!e && t && this.focus();
this.setValidity(e);
return e;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "container", "", [], {
id: "container"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets",
class: "generated_form"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__container");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t() {
var t, i, a, l;
t = e.getValue();
if (!w.equal(n, t)) {
h.empty();
S = {};
A = {};
n = t;
var d, u, c, f, g;
for (a in t) if (t.hasOwnProperty(a)) {
i = t[a];
c = null;
if (C[i.name$string]) continue;
if (!j[i.type$string]) continue;
if (!i.name$string) continue;
if (!i.label$string) continue;
if (o && !i.value_user$string || "checkbox" == i.type$string && !i.checked$bool) continue;
d = A[i.name$string] = new _(h, null, null, null, {
className: "field field_" + i.type$string
});
d.label = u = new v(d, null, null, null, {
className: "label"
});
d.label_name = new v(u, null, null, [ b.get(e.$$(a + ".label$string")) ]);
d.label_required = new v(u, null, null, [ i.required$bool && !o ? " *" : "" ]);
d.input = S[i.name$string] = c = new j[i.type$string](d, null, null, null, {
name: i.name$string,
required: i.required$bool,
autoValidate: !0,
readOnly: o
});
(c.container || c).addClass("input input_" + i.type$string);
c && c.setLabelElement(u);
switch (i.type$string) {
case "checkbox_multiple":
case "radio":
i.options && c.setOptions(i.options);
break;

case "text":
case "email":
case "textarea":
i.placeholder$string && c.setPlaceholder(i.placeholder$string);
if (o) if (r.isIE <= 7) {
c.style.overflow = "visible";
c.style.height = 0;
} else s(function(t) {
return function() {
t.setMinHeight("0");
t.setHeight("0");
t.setHeight(t.getScrollHeight());
};
}(c));
break;

case "checkbox":
i.checked$bool && c.setChecked(i.checked$bool).setInitialChecked(i.checked$bool);
d.insertBefore(c.container || c, u);
o && c.setDisabled(!0);
break;

case "select":
for (l in i.options) if (i.options.hasOwnProperty(l)) {
g = new y(c, null, null, [ i.options[l].label$string || i.options[l].value$string ], {
value: i.options[l].value$string
});
(i.value$string == i.options[l].value$string || i.options[l].checked$bool) && g.setSelected(!0);
}
o && c.setDisabled(!0);
break;

case "department":
c.setSelectedIndex(0);
}
if (!o) {
d.error_message = f = new $(d, null, null, [ i.error_message$string || b.error_message[i.type$string] || b.error_message.default ], {
className: "error_message"
});
f.setUseDisplay(!0);
c && c.setErrorMessageElement(f).hideErrorMessage();
f.setVisible("none");
}
if (o && i.value_user$string) {
c.setValue && c.setValue(i.value_user$string || "");
c.setInitialValue && c.setInitialValue(i.value_user$string || "");
} else if (i.value$string) {
c.setValue && c.setValue(i.value$string);
c.setInitialValue && c.setInitialValue(i.value$string);
}
if (i.hidden$bool) {
d.setDisplay("none");
d.setRequired(!1);
}
}
var p = h.getLastChild();
p && p.addClass("last-child");
}
}
var e, n, o, r = i(8), a = i(12), s = i(16), _ = i(336), l = i(335), d = i(334), u = i(157), f = i(86), g = i(78), p = i(79), m = i(156), $ = i(80), b = i(10), w = i(73), x = i(106), v = i(19), y = i(155), j = {
text: f,
email: p,
textarea: r.isIE < 9 ? f : g,
checkbox: x,
select: m,
checkbox_multiple: l,
radio: d,
department: u
}, C = {
name: 1,
email: 1,
phone: 1
}, S = {}, A = {};
c.submitSelf = function() {
if (e) {
var t, i = {};
for (var o in n) if (n.hasOwnProperty(o)) {
if (n[o].hidden$bool) continue;
t = S[n[o].name$string];
if (!t) continue;
i[o] = {
value_user$string: t.getValue()
};
t.getChecked && (i[o].checked_user$bool = t.getChecked());
!t.getOptions || t instanceof u || (i[o].options = t.getOptions(!0));
}
e.update(i);
}
};
c.submit = function(t, e, i, o) {
if (t) {
var r, a, s = {};
for (a in n) if (n.hasOwnProperty(a)) {
if (n[a].hidden$bool) continue;
if (o && "department_id" == n[a].name$string) continue;
r = S[n[a].name$string];
if (!r) continue;
if (i) {
s[a] = {
value_user$string: r.getValue()
};
r.getChecked && (s[a].checked_user$bool = r.getChecked());
!r.getOptions || r instanceof u || (s[a].options = r.getOptions(!0));
} else {
s[a] = {
name$string: n[a].name$string,
value$string: r.getValue()
};
r.getChecked && (s[a].checked$bool = r.getChecked());
!r.getOptions || r instanceof u || (s[a].options = r.getOptions());
}
}
if (e) {
var _ = e.getValue();
for (a in _) if (_.hasOwnProperty(a)) {
if (!_[a] || !C[a]) continue;
s[a] = {
name$string: a,
value$string: _[a]
};
}
}
t.write(s);
}
};
c.setReadOnly = function(t) {
o = a(t);
c[o ? "addClass" : "removeClass"]("read_only");
return c;
};
c.setDataNode = function(i) {
if (e != i) {
e && c.autounbind(e, "value", t);
e = i;
e && c.autobind(e, "value", t);
}
};
c.populateSelf = function() {
if (e) {
var t, i = e.getValue();
for (var o in i) if (i.hasOwnProperty(o)) {
t = S[n[o].name$string];
if (!t) continue;
t.setValue(i[o].value_user$string);
t.setChecked && t.setChecked(i[o].checked_user$bool);
t.setOptions && t.setOptions(i[o].options, !0);
}
}
};
c.reset = function() {
if (e) {
var t, i = e.getValue();
for (var o in i) if (i.hasOwnProperty(o)) {
t = S[n[o].name$string];
if (!t) continue;
t.reset && t.reset();
}
}
};
c.getField = function(t) {
return A[t];
};
c.getInput = function(t) {
return S[t];
};
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
"*zoom": 1
},
".input_text, .input_email, textarea, select": {
width: "100%"
},
".label, .error_message, .option_label": {
display: "block"
},
".input_checkbox, .input_input_radio, .input_input_checkbox": {
display: "inline-block",
float: "left",
clear: "both"
},
".field": {
marginBottom: "15px",
"&.field_radio .input, &.field_department .input": {
input: {
"width, height": "16px"
},
label: {
paddingLeft: "20px",
lineHeight: "16px"
},
"label.disabled": {
color: "#ccc",
"&": "$$inputDisabled"
}
},
"&.field_checkbox, &.field_checkbox_multiple .input": {
input: {
"width, height": "16px"
},
label: {
paddingLeft: "20px",
lineHeight: "15px"
}
},
"&.field_checkbox, &.field_checkbox_multiple, &.field_radio": {
"&.invalid": {}
}
},
".label": {
marginBottom: "5px",
fontWeight: "bold"
},
textarea: {
"minHeight, *height": "70px",
resize: "vertical"
},
".option_label": {
marginBottom: "5px",
"&:last-child": {
marginBottom: 0
}
},
".error_message": {
paddingBottom: "5px"
},
"&.read_only": {
".field_radio, .field_checkbox_multiple": {
".input_input_radio, .input_input_checkbox": {
display: "none"
}
},
textarea: {
overflow: "hidden"
},
".input_checkbox_multiple": {
label: {
display: "inline",
marginRight: "0.5em",
"&:after": {
content: "','"
},
"&.last-checked": {
marginRight: 0,
"&:after": {
content: "none"
}
}
}
},
".field": {
padding: "6px",
marginBottom: 0
},
".input_text, .input_email, textarea, .fake_input": {
border: "none",
padding: 0,
resize: "none",
background: "transparent"
},
select: {
padding: 0,
border: "none",
height: "auto",
background: "transparent"
},
".option_label": {
marginBottom: 0,
paddingLeft: "0 !important"
},
".label": {
display: "none"
},
button: {
position: "relative",
background: "transparent"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Form"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Gravatar = i(83);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Gravatar, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
r.test(t) ? c.setDataNode(a.$("settings").$("concierge")) : n.test(t) ? c.setDataNode(a.$("ui").$("cache_agents").$(t)) : o.test(t) ? c.setDataNode(a.$("profile")) : c.setDataNode(a.$("settings").$("concierge"));
return c;
}
var e = i(6), n = /^agent/i, o = /^visitor/i, r = /^agent:trigger$/, a = e.root.$("livechat");
!function() {
c.setMemberId = t;
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Gravatar.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Gravatar, {
fqname: "meshim_widget_widgets_Avatar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_Label = i(19);
n.__$$__meshim_widget_widgets_FakeInput = i(162);
n.__$$__meshim_widget_widgets_Avatar = i(108);
n.__$$__meshim_widget_widgets_iconFont_Button = i(161);
n.__$$__meshim_widget_widgets_ErrorMessage = i(80);
n.__$$__meshim_widget_widgets_TextField = i(86);
n.__$$__meshim_widget_widgets_EmailField = i(79);
n.__$$__meshim_widget_widgets_PhoneField = i(160);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(162), c = s(163), h = s(164), f = s(165), g = s(166), p = s(167), m = s(168), $ = s(169), b = s(170), w = s(171), x = s(172), v = s(173), y = s(174), j = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "available_types_el", "", [ [ n.__$$__jx_ui_Label, "label_logged_out", "", [ u, [ n.__$$__jx_ui_Label, "label_logged_out_required", "", [], {
id: "label_logged_out_required"
} ] ], {
id: "label_logged_out",
addClass: "label label_logged_out"
} ], [ n.__$$__jx_ui_Label, "label_logged_in", "", [ c ], {
id: "label_logged_in",
addClass: "label label_logged_in"
} ], [ n.__$$__meshim_widget_widgets_FakeInput, "fake_input", "", [ [ n.__$$__meshim_widget_widgets_Avatar, "avatar", "", [], {
id: "avatar",
addClass: "avatar"
} ], [ n.__$$__jx_ui_Label, "internal_placeholder", "", [ h ], {
id: "internal_placeholder",
addClass: "internal_placeholder"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Label, "logged_in_name", "", [], {
id: "logged_in_name",
addClass: "logged_in_name"
} ], [ n.__$$__jx_ui_Label, "logged_in_email", "", [], {
id: "logged_in_email",
addClass: "logged_in_email"
} ], [ n.__$$__jx_ui_Label, "logged_in_phone", "", [], {
id: "logged_in_phone",
addClass: "logged_in_phone"
} ], [ n.__$$__jx_ui_Widget, "logged_in_actions", "", [ [ n.__$$__meshim_widget_widgets_iconFont_Button, "logged_in_edit", "", [], {
id: "logged_in_edit",
icon: "pencil",
title: f
} ], [ n.__$$__meshim_widget_widgets_iconFont_Button, "logged_in_clear", "", [], {
id: "logged_in_clear",
icon: "dustbin",
title: g
} ] ], {
id: "logged_in_actions",
addClass: "logged_in_actions"
} ] ], {
addClass: "floater_inner_seriously"
} ] ], {
addClass: "floater_inner"
} ] ], {
addClass: "floater"
} ] ], {
id: "fake_input",
addClass: "fake_input",
tabIndex: "0"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "error_message", "", [ p ], {
id: "error_message",
addClass: "error_message",
useDisplay: "true"
} ] ], {
id: "available_types_el",
addClass: "field profile_field"
} ], [ n.__$$__jx_ui_Widget, "editing_el", "", [ [ n.__$$__jx_ui_Label, "label_edit_internal", "", [ u, [ n.__$$__jx_ui_Label, "label_edit_internal_required", "", [], {
id: "label_edit_internal_required"
} ] ], {
id: "label_edit_internal",
addClass: "label label_edit_internal"
} ], [ n.__$$__meshim_widget_widgets_TextField, "name", "", [], {
id: "name",
placeholder: m,
maxLength: "255",
addClass: "input_name standalone mobile_error_icon"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "name_error", "", [ $ ], {
id: "name_error",
addClass: "error_message",
useDisplay: "true"
} ], [ n.__$$__meshim_widget_widgets_EmailField, "email", "", [], {
id: "email",
placeholder: b,
addClass: "input_email standalone mobile_error_icon"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "email_error", "", [ w ], {
id: "email_error",
addClass: "error_message",
useDisplay: "true"
} ] ], {
id: "editing_el",
addClass: "editing field profile_field"
} ], [ n.__$$__jx_ui_Widget, "edit_external", "", [ [ n.__$$__jx_ui_Label, "", "", [ x ], {
addClass: "edit_external_label"
} ], [ n.__$$__jx_ui_Widget, "edit_external_types", "", [], {
id: "edit_external_types",
addClass: "edit_external_types"
} ] ], {
id: "edit_external",
addClass: "edit_external"
} ], [ n.__$$__jx_ui_Widget, "phone_field", "", [ [ n.__$$__jx_ui_Label, "phone_label", "", [ v, [ n.__$$__jx_ui_Label, "phone_required", "", [], {
id: "phone_required"
} ] ], {
id: "phone_label",
addClass: "label"
} ], [ n.__$$__meshim_widget_widgets_PhoneField, "phone", "", [], {
id: "phone",
maxLength: "25",
addClass: "input_phone mobile_error_icon"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "phone_error", "", [ y ], {
id: "phone_error",
addClass: "error_message",
useDisplay: "true"
} ] ], {
id: "phone_field",
addClass: "field field_phone"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets",
class: "profile_form"
} ], C = j[0].call(this, e, o, null, _.mangleIDs(o, j[3]), j[4]), S = C || this;
_.set(o, S);
var A = _.get(o + "__available_types_el"), k = _.get(o + "__label_logged_out"), I = _.get(o + "__label_logged_out_required"), N = _.get(o + "__label_logged_in"), T = _.get(o + "__fake_input"), B = _.get(o + "__avatar"), D = _.get(o + "__internal_placeholder"), E = _.get(o + "__logged_in_name"), O = _.get(o + "__logged_in_email"), L = _.get(o + "__logged_in_phone"), W = _.get(o + "__logged_in_actions"), P = _.get(o + "__logged_in_edit"), R = _.get(o + "__logged_in_clear"), F = _.get(o + "__error_message"), M = _.get(o + "__editing_el"), V = _.get(o + "__label_edit_internal"), H = _.get(o + "__label_edit_internal_required"), q = _.get(o + "__name"), z = _.get(o + "__name_error"), U = _.get(o + "__email"), G = _.get(o + "__email_error"), Y = _.get(o + "__edit_external"), X = _.get(o + "__edit_external_types"), Z = _.get(o + "__phone_field"), K = _.get(o + "__phone_label"), Q = _.get(o + "__phone_required"), J = _.get(o + "__phone"), tt = _.get(o + "__phone_error");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var et = function() {
function t() {
var t, e, i, n = h.getValue();
for (e in n) if (n.hasOwnProperty(e)) {
t = n[e];
i = it[t.name$string];
if (!i) continue;
i.setRequired(!("required$bool" in t) || t.required$bool);
i.setPlaceholder(t.placeholder$string || et[t.name$string]);
}
}
function e() {
var t = ot.getValue();
at = 0;
if (t) {
d = t.email$bool;
for (var e in j) if (j.hasOwnProperty(e)) if (t[e + "$bool"]) {
at++;
e;
j[e].setDisplay("");
} else j[e].setDisplay("none");
a();
}
}
function n(t) {
g = t;
a();
}
function o(t) {
p = t;
a();
}
function r(t) {
if (t) {
if ("display_name$string" in t) if (w.isDefaultName(t.display_name$string)) {
E.setText("");
q.setValue("");
} else {
E.setText(t.display_name$string || "");
q.setValue(t.display_name$string || "");
}
if ("email$string" in t) {
O.setText(t.email$string || "");
U.setValue(t.email$string || "");
}
if ("phone$string" in t) {
L.setText(t.phone$string || "");
J.setValue(t.phone$string || "");
}
a();
}
}
function a() {
p && (u = !1);
k.setDisplay(g ? "none" : "");
N.setDisplay(g ? "" : "none");
A.setDisplay(u ? "none" : "");
B.setDisplay(g ? "" : "none");
D.setDisplay(!g && d ? "" : "none");
M.setDisplay(u ? "" : "none");
Y.setDisplay(!g && at ? "" : "none");
if (!g && at) u ? M.addClass("zero_margin") : A.addClass("zero_margin"); else {
A.removeClass("zero_margin");
M.removeClass("zero_margin");
}
if (f) {
k.setDisplay("none");
N.setDisplay("none");
V.setDisplay("none");
}
E.setDisplay(g ? "" : "none");
O.setDisplay(g ? "" : "none");
L.setDisplay(g && S.disabled ? "" : "none");
W.setDisplay(!g || S.disabled || ht.getValue() ? "none" : "");
g && !S.disabled ? E.addClass("buttons_pad") : E.removeClass("buttons_pad");
P.setDisplay(p ? "none" : "");
S.setClass("profile_form");
S.disabled && S.addClass("disabled");
c && S.addClass("mobile");
m && m.onLanguage && _();
S.addClass(g ? "logged_in" : "logged_out");
S.addClass(d ? "internal_enabled" : "internal_disabled");
S.addClass(u ? "editing" : "available_types");
at ? 1 == at ? S.addClass("external_one") : S.addClass("external_many") : S.addClass("external_none");
}
function s() {
var t = !ht.getValue() && !1 !== rt.getValue() && !S.disabled;
l = t;
Z.setDisplay(t ? "" : "none");
}
function _() {
S[m.rtl() ? "addClass" : "removeClass"]("rtl");
}
var l, d, u, c, h, f, g, p, m = i(2), $ = i(12), b = i(6), w = i(11), x = i(10), v = i(81), y = i(159), j = {
facebook: void 0,
twitter: void 0,
google: void 0
}, C = {
facebook: "facebook",
twitter: "twitter",
google: "google_2019"
}, et = {
name: m(175),
email: m(176)
}, it = {
name: q,
email: U,
phone: J
}, nt = b.root.$("livechat").$("settings").$("login"), ot = nt.$("allowed_types"), rt = nt.$("phone_display$bool"), at = 0, st = b.root, _t = st.$("livechat").$("ui"), lt = st.$("livechat").$("profile"), dt = lt.$("logged_in$bool"), ut = lt.$("auth").$("type$string"), ct = _t.$("mobile$bool"), ht = _t.$("visitor").$("authenticated$bool");
S.submit = function() {
var t = q.getValue().trim(), e = U.getValue().trim(), i = J.getValue().trim(), n = {};
if (!g || t || e) {
n.name = t;
n.email = e;
}
l && (n.phone = i);
b.livechat.updateProfile(n);
u = !1;
a();
};
S.setHideLabel = function() {
f = !0;
a();
};
S.setDisabled = function(t) {
t = $(t);
S.disabled = t;
S[t ? "addClass" : "removeClass"]("disabled");
q.setDisabled(t);
U.setDisabled(t);
s();
};
S.validate = function(t) {
for (var e = !0, i = [ q, U ], n = 0, o = i.length; n < o; n++) i[n].validate(!!t && e) || (e = !1);
e ? A.removeClass("invalid") : A.addClass("invalid");
F.setDisplay(e ? "none" : "");
l && !J.validate(!!t && e) && (e = !1);
return e;
};
S.setDataNode = function(e) {
if (h != e) {
h && S.autounbind(h, "value", t);
h = e;
h && S.autobind(h, "value", t);
}
};
S.getValue = function() {
var t = {}, e = q.getValue();
w.isDefaultName(e) || (t.name = e);
t.email = U.getValue();
t.phone = J.getValue();
return t;
};
S.setRequired = function(t) {
t = $(t);
q.setRequired(t);
U.setRequired(t);
I.setText(t ? " *" : "");
H.setText(t ? " *" : "");
if (!t) {
var e = q.validate(!1);
e = U.validate(!1) && e;
F.setDisplay(e ? "none" : "");
}
};
S.setPhoneRequired = function(t) {
t = $(t);
J.setRequired(t);
Q.setText(t ? " *" : "");
t || J.validate(!1);
};
!function() {
function t(t) {
if (t && (!t.keyCode || 13 == t.keyCode)) {
var e = t.target.jx_wrapper;
if (e != X) {
for (;e.parentNode != X; ) e = e.parentNode;
var i = e.getName && e.getName();
i && b.livechat.doExternalLogin(i);
}
}
}
function i(t) {
t && t.preventDefault();
q.setValidity(!0);
U.setValidity(!0);
u = !0;
a();
q.focus();
}
function l(t) {
t && t.preventDefault();
b.livechat.doExternalLogout();
T.blur();
ct.getValue() && i();
}
var h;
c = ct.getValue();
c && S.addClass("mobile");
B.setDataNode(lt);
F.setDisplay("none");
S.removeClass("editing").addClass("available_types");
for (h in j) j.hasOwnProperty(h) && (j[h] = new (c ? y : v)(X, null, null, c ? [ x.external_login[h] ] : null, c ? {
name: h,
addClass: "float profile_form_edit_external " + h,
icon: C[h]
} : {
name: h,
addClass: "profile_form_icon " + h,
icon: C[h],
title: x.external_login[h] || h,
hoverable: !0,
tabIndex: 0
}));
X.on("keyup", t);
X.on(c ? "touchend" : "click", t);
T.on("focus", function() {
g || S.disabled || d && i();
});
P.on("click", i);
R.on("click", l);
J.setLabelElement(K);
q.setErrorMessageElement(z).hideErrorMessage();
U.setErrorMessageElement(G).hideErrorMessage();
J.setErrorMessageElement(tt).hideErrorMessage();
S.autobind(ot, "value", e);
S.autobind(dt, "value", n);
S.autobind(lt, "value", r);
S.autobind(ut, "value", o);
if (m && m.onLanguage) {
m.onLanguage(_);
_();
}
S.autobind(ht, "value", function() {
s();
a();
});
S.autobind(rt, "value", function() {
s();
});
}();
}();
for (var it in et) S[it] = et[it];
S.fire && S.fire("init");
S.setStyle && S.setStyle(r);
S.setAttributes && S.setAttributes(d);
"function" == typeof S.addChildren ? S.addChildren(l) : _.addChildren(S, l);
if (S !== this) {
S.__jx__constructor = this.__jx__constructor;
S.__jx__native = this.__jx__native;
}
return S;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".label_logged_out": {},
".label_logged_in": {},
".fake_input": {
position: "relative",
overflow: "hidden",
transform: "translateZ(0)",
"*zoom": 1
},
".avatar": {
float: "left",
"width, height": "32px",
marginRight: "5px",
"&": "$$profileFormLoggedIn"
},
"&.rtl .avatar": {
float: "right",
marginRight: 0,
marginLeft: "5px"
},
".internal_placeholder": {
float: "left",
"vertical-align": "top",
cursor: "pointer"
},
"&.rtl .internal_placeholder": {
float: "right"
},
".profile_divider": {
"vertical-align": "top",
marginRight: "5px"
},
"&.rtl .profile_divider": {
marginRight: 0,
marginLeft: "5px"
},
".internal_placeholder, .profile_divider": {
lineHeight: "18px",
"*lineHeight": "18px !important"
},
".editing": {
".input_name": {},
".input_email": {},
".input_phone": {}
},
".edit_external": {
marginTop: "5px",
color: "$$menuHeaderColor",
marginBottom: "15px",
".edit_external_label": {
verticalAlign: "middle"
},
".edit_external_types": {
display: "inline-block",
verticalAlign: "middle",
".profile_form_edit_external": {
display: "inline-block"
}
}
},
"&.rtl .edit_external": {
".edit_external_types": {
".profile_form_edit_external": {
marginLeft: 0,
marginRight: "5px"
}
}
},
".logged_in_name": {
fontWeight: "bold"
},
".logged_in_name.buttons_pad": {
paddingRight: "40px"
},
".logged_in_name, .logged_in_email": {
display: "block",
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis"
},
"&.rtl .logged_in_name": {
paddingRight: 0
},
"&.rtl .logged_in_name.buttons_pad": {
paddingLeft: "40px"
},
".logged_in_actions": {
position: "absolute",
"top, right": 0,
color: "$$menuHeaderColor",
marginTop: "5px",
marginRight: "5px",
button: {
marginLeft: "5px",
"&:hover, &:focus": {
color: "$$menuColor"
}
},
".divider": {
fontSize: "$$fontSizeXS",
lineHeight: "1.5",
margin: "0 5px",
cursor: "default",
opacity: .5
}
},
"&.rtl .logged_in_actions": {
right: "auto",
left: 0
},
".floater": {
display: "block",
overflow: "hidden",
"*position": "relative !important",
".floater_inner": {
display: "table",
".floater_inner_seriously": {
display: "table-cell",
verticalAlign: "middle"
}
}
},
"&.internal_enabled": {
".floater": {
float: "right",
"*float": "right !important"
}
},
"&.rtl.internal_enabled": {
".floater": {
float: "left"
}
},
"&.logged_in, &.internal_disabled": {
".floater": {
".floater_inner": {
tableLayout: "fixed",
width: "100%",
height: "32px"
}
}
},
"&.logged_in": {
".fake_input": {
background: "$$formSubmittedBg",
borderRadius: "$$formSubmittedRadius",
borderWidth: "$$formSubmittedBorderWidth",
borderStyle: "$$formSubmittedBorderStyle",
borderColor: "$$formSubmittedBorderColor"
},
".floater": {
float: "none !important"
}
},
"&.logged_out.internal_disabled, &.logged_in": {
".fake_input": {}
},
".profile_form_icon": {
cursor: "pointer",
display: "inline-block",
marginLeft: "8px",
"height, fontSize": "17px",
lineHeight: "21px",
"*padding": "0 !important",
"*marginLeft": "8px !important"
},
"&.rtl .profile_form_icon": {
marginLeft: 0,
marginRight: "8px"
},
".field": {
marginBottom: "15px",
"&.last-child": {
marginBottom: 0
},
"&.profile_field": {
"*padding": "0 !important",
"&.invalid": {},
"&.zero_margin": {
marginBottom: "0"
}
}
},
".label": {
display: "block",
marginBottom: "5px",
fontWeight: "bold"
},
"&.mobile": {
".avatar": {
"width, height": "36px"
},
"&.available_types": {
".fake_input": {
".internal_placeholder": {
lineHeight: "25px"
},
".profile_divider": {
lineHeight: "44px",
marginRight: "10px"
}
},
".floater": {
position: "absolute",
top: 0,
right: "-2px",
height: "100%"
},
".profile_form_icon": {
"marginLeft, marginRight": 0,
width: "auto",
height: "46px",
padding: "13px 12px 10px",
borderWidth: "0 0 0 1px",
borderRadius: "0",
".icon_font": {
textAlign: "center"
},
"&.google": {
"paddingLeft, paddingRight": "8px"
}
},
"&.logged_in": {
".fake_input": {},
".floater": {
position: "relative",
"top, right, left": 0
}
}
},
".logged_in_name, .logged_in_email": {
paddingRight: "80px"
},
".logged_in_actions": {
margin: "0px",
height: "100%",
button: {
height: "100%",
padding: "0 5px"
}
},
".editing": {
".name_container, .email_container": {
position: "relative",
"input.invalid ~ .error_icon": {
display: "block"
}
}
},
".edit_external": {
marginBottom: "15px",
".edit_external_types": {
display: "block",
marginTop: "10px"
}
}
},
"&.rtl.mobile": {
".floater": {
right: "auto",
left: "-2px"
},
".profile_divider": {
marginRight: 0,
marginLeft: "10px"
},
".logged_in_name, .logged_in_email": {
paddingRight: 0,
paddingLeft: "80px"
},
"&.available_types": {
".profile_form_icon": {
borderWidth: "0 1px 0 0"
}
}
},
"&.disabled": {
".field": {
marginBottom: 0
},
".fake_input": {
border: "none",
background: "transparent"
},
".field_phone": {
display: "none"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_form_Profile"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, o, a);
var l = this;
this.$connection_message = _.root.$("connection").$("message$string");
this.connected_submits = [];
this.on("submit", function(t) {
l.handleSubmit(t);
});
this.onDestruction(function() {
l.connected_submits = null;
});
}
var o = i(1), r = i(3), a = i(0), s = i(41), _ = i(6);
n.__jx__jcss = {};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_ConnAwareForm"
});
n.prototype.__jx__super = s;
n.prototype.onConnectedAndSubmit = function(t) {
this.connected_submits.push(t);
};
n.prototype.handleSubmit = function(t) {
if (!this.$connection_message.getValue()) for (var e = 0; e < this.connected_submits.length; e++) this.connected_submits[e](t); else t.preventDefault();
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
selectable: "false"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
color: "$$toastColor",
background: "$$toastBg",
padding: "$$toastPadding",
borderWidth: "$$toastBorderWidth",
borderStyle: "$$toastBorderStyle",
borderColor: "$$toastBorderColor",
borderRadius: "$$toastRadius",
boxShadow: "$$toastShadow"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Toast"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "img";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_img"
});
t.exports = n;
}, function(t, e, i) {
(function(t) {
(function() {
var i, n, o, r, a, s, _, l, d, u, c, h, f, g, p, m, $, b, w, x, v, y, j, C, S, A, k, I, N, T, B, D, E, O, L, W, P, R, F;
B = void 0 !== e && null !== e ? e : this;
l = null != (W = B.chroma) ? W : B.chroma = {};
void 0 !== t && null !== t && (t.exports = l);
i = function() {
function t(t, e, i, n) {
var o, r;
o = this;
null == t && null == e && null == i && null == n && (t = [ 255, 0, 255 ]);
if ("array" === D(t) && 3 === t.length) {
null == n && (n = e);
r = t, t = r[0], e = r[1], i = r[2];
}
"string" === D(t) ? n = "hex" : null == n && (n = "rgb");
"rgb" === n ? o._rgb = [ t, e, i ] : "hsl" === n ? o._rgb = g(t, e, i) : "hsv" === n ? o._rgb = p(t, e, i) : "hex" === n ? o._rgb = h(t) : "lab" === n ? o._rgb = $(t, e, i) : "lch" === n ? o._rgb = x(t, e, i) : "hsi" === n && (o._rgb = f(t, e, i));
d(o._rgb);
}
t.prototype.rgb = function() {
return this._rgb;
};
t.prototype.hex = function() {
return C(this._rgb);
};
t.prototype.toString = function() {
return this.hex();
};
t.prototype.hsl = function() {
return A(this._rgb);
};
t.prototype.hsv = function() {
return k(this._rgb);
};
t.prototype.lab = function() {
return I(this._rgb);
};
t.prototype.lch = function() {
return N(this._rgb);
};
t.prototype.hsi = function() {
return S(this._rgb);
};
t.prototype.luminance = function() {
return y(this._rgb);
};
t.prototype.name = function() {
var t, e;
t = this.hex();
for (e in l.colors) if (l.colors.hasOwnProperty(e) && t === l.colors[e]) return e;
return t;
};
t.prototype.interpolate = function(e, i, n) {
var o, r, a, s, _, l, d, u, c, h, f, g, p;
u = this;
null == n && (n = "rgb");
"string" === D(i) && (i = new t(i));
if ("hsl" === n || "hsv" === n || "lch" === n || "hsi" === n) {
if ("hsl" === n) {
g = u.hsl();
p = i.hsl();
} else if ("hsv" === n) {
g = u.hsv();
p = i.hsv();
} else if ("hsi" === n) {
g = u.hsi();
p = i.hsi();
} else if ("lch" === n) {
g = u.lch();
p = i.lch();
}
if ("h" === n.substr(0, 1)) {
a = g[0], h = g[1], l = g[2];
s = p[0], f = p[1], d = p[2];
} else {
l = g[0], h = g[1], a = g[2];
d = p[0], f = p[1], s = p[2];
}
if (isNaN(a) || isNaN(s)) if (isNaN(a)) if (isNaN(s)) r = void 0; else {
r = s;
1 !== l && 0 !== l || (c = f);
} else {
r = a;
1 !== d && 0 !== d || (c = h);
} else {
o = s > a && s - a > 180 ? s - (a + 360) : s < a && a - s > 180 ? s + 360 - a : s - a;
r = a + e * o;
}
null == c && (c = h + e * (f - h));
_ = l + e * (d - l);
return "h" === n.substr(0, 1) ? new t(r, c, _, n) : new t(_, c, r, n);
}
if ("rgb" === n) {
g = u._rgb;
p = i._rgb;
return new t(g[0] + e * (p[0] - g[0]), g[1] + e * (p[1] - g[1]), g[2] + e * (p[2] - g[2]), n);
}
if ("lab" === n) {
g = u.lab();
p = i.lab();
return new t(g[0] + e * (p[0] - g[0]), g[1] + e * (p[1] - g[1]), g[2] + e * (p[2] - g[2]), n);
}
throw "color mode " + n + " is not supported";
};
t.prototype.darken = function(t) {
var e, i;
null == t && (t = 20);
i = this;
e = i.lch();
e[0] -= t;
return l.lch(e);
};
t.prototype.darker = function(t) {
return this.darken(t);
};
t.prototype.brighten = function(t) {
null == t && (t = 20);
return this.darken(-t);
};
t.prototype.brighter = function(t) {
return this.brighten(t);
};
t.prototype.saturate = function(t) {
var e, i;
null == t && (t = 20);
i = this;
e = i.lch();
e[1] += t;
return l.lch(e);
};
t.prototype.desaturate = function(t) {
null == t && (t = 20);
return this.saturate(-t);
};
return t;
}();
h = function(t) {
var e, i, n, o, r;
if (t.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
4 !== t.length && 7 !== t.length || (t = t.substr(1));
if (3 === t.length) {
t = t.split("");
t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
}
r = parseInt(t, 16);
n = r >> 16;
i = r >> 8 & 255;
e = 255 & r;
return [ n, i, e ];
}
if (o = c(t)) return o;
throw "unknown color: " + t;
};
c = function(t) {
var e, i, n, o;
if (null != l.colors && l.colors[t]) return h(l.colors[t]);
if (n = t.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) return n.slice(1, 4);
if (n = t.match(/rgb\(\s*(\-?\d+)%,\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)) {
o = n.slice(1, 4);
for (i in o) o.hasOwnProperty(i) && (o[i] = Math.round(2.55 * o[i]));
return o;
}
if (n = t.match(/hsl\(\s*(\-?\d+),\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)) {
e = n.slice(1, 4);
e[1] *= .01;
e[2] *= .01;
return g(e);
}
};
C = function() {
var t, e, i, n, o, r;
r = E(arguments), i = r[0], e = r[1], t = r[2];
o = i << 16 | e << 8 | t;
n = "000000" + o.toString(16);
return "#" + n.substr(n.length - 6);
};
p = function() {
var t, e, i, n, o, r, a, s, _, l, d, u, c, h, f, g, p, m;
u = E(arguments), n = u[0], _ = u[1], d = u[2];
d *= 255;
if (0 === _) s = i = t = d; else {
360 === n && (n = 0);
n > 360 && (n -= 360);
n < 0 && (n += 360);
n /= 60;
o = Math.floor(n);
e = n - o;
r = d * (1 - _);
a = d * (1 - _ * e);
l = d * (1 - _ * (1 - e));
switch (o) {
case 0:
c = [ d, l, r ], s = c[0], i = c[1], t = c[2];
break;

case 1:
h = [ a, d, r ], s = h[0], i = h[1], t = h[2];
break;

case 2:
f = [ r, d, l ], s = f[0], i = f[1], t = f[2];
break;

case 3:
g = [ r, a, d ], s = g[0], i = g[1], t = g[2];
break;

case 4:
p = [ l, r, d ], s = p[0], i = p[1], t = p[2];
break;

case 5:
m = [ d, r, a ], s = m[0], i = m[1], t = m[2];
}
}
s = Math.round(s);
i = Math.round(i);
t = Math.round(t);
return [ s, i, t ];
};
k = function() {
var t, e, i, n, o, r, a, s, _, l;
l = E(arguments), a = l[0], i = l[1], t = l[2];
r = Math.min(a, i, t);
o = Math.max(a, i, t);
e = o - r;
_ = o / 255;
if (0 === o) {
n = void 0;
s = 0;
} else {
s = e / o;
a === o && (n = (i - t) / e);
i === o && (n = 2 + (t - a) / e);
t === o && (n = 4 + (a - i) / e);
n *= 60;
n < 0 && (n += 360);
}
return [ n, s, _ ];
};
g = function() {
var t, e, i, n, o, r, a, s, _, l, d, u, c, h;
c = E(arguments), n = c[0], s = c[1], r = c[2];
if (0 === s) a = i = t = 255 * r; else {
d = [ 0, 0, 0 ];
e = [ 0, 0, 0 ];
l = r < .5 ? r * (1 + s) : r + s - r * s;
_ = 2 * r - l;
n /= 360;
d[0] = n + 1 / 3;
d[1] = n;
d[2] = n - 1 / 3;
for (o = u = 0; u <= 2; o = ++u) {
d[o] < 0 && (d[o] += 1);
d[o] > 1 && (d[o] -= 1);
6 * d[o] < 1 ? e[o] = _ + 6 * (l - _) * d[o] : 2 * d[o] < 1 ? e[o] = l : 3 * d[o] < 2 ? e[o] = _ + (l - _) * (2 / 3 - d[o]) * 6 : e[o] = _;
}
h = [ Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2]) ], 
a = h[0], i = h[1], t = h[2];
}
return [ a, i, t ];
};
A = function(t, e, i) {
var n, o, r, a, s, _;
void 0 !== t && 3 === t.length && (_ = t, t = _[0], e = _[1], i = _[2]);
t /= 255;
e /= 255;
i /= 255;
a = Math.min(t, e, i);
r = Math.max(t, e, i);
o = (r + a) / 2;
if (r === a) {
s = 0;
n = void 0;
} else s = o < .5 ? (r - a) / (r + a) : (r - a) / (2 - r - a);
t === r ? n = (e - i) / (r - a) : e === r ? n = 2 + (i - t) / (r - a) : i === r && (n = 4 + (t - e) / (r - a));
n *= 60;
n < 0 && (n += 360);
return [ n, s, o ];
};
18;
a = .95047;
s = 1;
_ = 1.08883;
$ = function(t, e, i) {
var n, o, r, l, d, u, c;
void 0 !== t && 3 === t.length && (u = t, t = u[0], e = u[1], i = u[2]);
void 0 !== t && 3 === t.length && (c = t, t = c[0], e = c[1], i = c[2]);
l = (t + 16) / 116;
r = l + e / 500;
d = l - i / 200;
r = b(r) * a;
l = b(l) * s;
d = b(d) * _;
o = L(3.2404542 * r - 1.5371385 * l - .4985314 * d);
n = L(-.969266 * r + 1.8760108 * l + .041556 * d);
i = L(.0556434 * r - .2040259 * l + 1.0572252 * d);
return [ v(o, 0, 255), v(n, 0, 255), v(i, 0, 255) ];
};
I = function() {
var t, e, i, n, o, r, l;
l = E(arguments), i = l[0], e = l[1], t = l[2];
i = T(i);
e = T(e);
t = T(t);
n = O((.4124564 * i + .3575761 * e + .1804375 * t) / a);
o = O((.2126729 * i + .7151522 * e + .072175 * t) / s);
r = O((.0193339 * i + .119192 * e + .9503041 * t) / _);
return [ 116 * o - 16, 500 * (n - o), 200 * (o - r) ];
};
w = function() {
var t, e, i, n;
n = E(arguments), i = n[0], t = n[1], e = n[2];
e = e * Math.PI / 180;
return [ i, Math.cos(e) * t, Math.sin(e) * t ];
};
x = function(t, e, i) {
var n, o, r, a, s, _, l;
_ = w(t, e, i), n = _[0], o = _[1], r = _[2];
l = $(n, o, r), s = l[0], a = l[1], r = l[2];
return [ v(s, 0, 255), v(a, 0, 255), v(r, 0, 255) ];
};
b = function(t) {
return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037;
};
O = function(t) {
return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29;
};
L = function(t) {
return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055));
};
T = function(t) {
return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
};
m = function() {
var t, e, i, n, o, r;
r = E(arguments), o = r[0], t = r[1], e = r[2];
i = Math.sqrt(t * t + e * e);
n = Math.atan2(e, t) / Math.PI * 180;
return [ o, i, n ];
};
N = function() {
var t, e, i, n, o, r, a;
r = E(arguments), o = r[0], i = r[1], e = r[2];
a = I(o, i, e), n = a[0], t = a[1], e = a[2];
return m(n, t, e);
};
S = function() {
var t, e, i, n, o, r, a, s, _;
_ = E(arguments), a = _[0], i = _[1], e = _[2];
t = 2 * Math.PI;
a /= 255;
i /= 255;
e /= 255;
r = Math.min(a, i, e);
o = (a + i + e) / 3;
s = 1 - r / o;
if (0 === s) n = 0; else {
n = (a - i + (a - e)) / 2;
n /= Math.sqrt((a - i) * (a - i) + (a - e) * (i - e));
n = Math.acos(n);
e > i && (n = t - n);
n /= t;
}
return [ 360 * n, s, o ];
};
f = function(t, e, i) {
var n, a, s, _;
_ = E(arguments), t = _[0], e = _[1], i = _[2];
t /= 360;
if (t < 1 / 3) {
n = (1 - e) / 3;
s = (1 + e * u(r * t) / u(o - r * t)) / 3;
a = 1 - (n + s);
} else if (t < 2 / 3) {
t -= 1 / 3;
s = (1 - e) / 3;
a = (1 + e * u(r * t) / u(o - r * t)) / 3;
n = 1 - (s + a);
} else {
t -= 2 / 3;
a = (1 - e) / 3;
n = (1 + e * u(r * t) / u(o - r * t)) / 3;
s = 1 - (a + n);
}
s = v(i * s * 3);
a = v(i * a * 3);
n = v(i * n * 3);
return [ 255 * s, 255 * a, 255 * n ];
};
d = function(t) {
var e;
for (e in t) if (t.hasOwnProperty(e)) {
t[e] < 0 && (t[e] = 0);
t[e] > 255 && (t[e] = 255);
}
return t;
};
y = function(t, e, i) {
var n;
n = E(arguments), t = n[0], e = n[1], i = n[2];
t = j(t);
e = j(e);
i = j(i);
return .2126 * t + .7152 * e + .0722 * i;
};
j = function(t) {
t /= 255;
return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
};
l.Color = i;
l.color = function(t, e, n, o) {
return new i(t, e, n, o);
};
l.hsl = function(t, e, n) {
return new i(t, e, n, "hsl");
};
l.hsv = function(t, e, n) {
return new i(t, e, n, "hsv");
};
l.rgb = function(t, e, n) {
return new i(t, e, n, "rgb");
};
l.hex = function(t) {
return new i(t);
};
l.css = function(t) {
return new i(t);
};
l.lab = function(t, e, n) {
return new i(t, e, n, "lab");
};
l.lch = function(t, e, n) {
return new i(t, e, n, "lch");
};
l.hsi = function(t, e, n) {
return new i(t, e, n, "hsi");
};
l.interpolate = function(t, e, n, o) {
if (null == t || null == e) return "#000";
"string" === D(t) && (t = new i(t));
"string" === D(e) && (e = new i(e));
return t.interpolate(n, e, o);
};
l.contrast = function(t, e) {
var n, o;
"string" === D(t) && (t = new i(t));
"string" === D(e) && (e = new i(e));
n = t.luminance();
o = e.luminance();
return n > o ? (n + .05) / (o + .05) : (o + .05) / (n + .05);
};
B = void 0 !== e && null !== e ? e : this;
l = null != (P = B.chroma) ? P : B.chroma = {};
i = l.Color;
n = function() {
function t(t) {
var e, i, n;
null == t && (t = {});
e = this;
e.range(t.colors, t.positions);
e._mode = null != (i = t.mode) ? i : "rgb";
e._nacol = l.hex(null != (n = t.nacol) ? n : l.hex("#ccc"));
e._spread = 0;
e._fixed = !1;
e.domain([ 0, 1 ]);
}
t.prototype.range = function(t, e) {
var n, o, r, a, s, _, d, u;
r = this;
null == t && (t = [ "#ddd", "#222" ]);
null != t && "string" === D(t) && null != (null != (_ = l.brewer) ? _[t] : void 0) && (t = l.brewer[t].slice(0));
for (n = a = 0, d = t.length - 1; 0 <= d ? a <= d : a >= d; n = 0 <= d ? ++a : --a) {
o = t[n];
"string" === D(o) && (t[n] = new i(o));
}
r._colors = t;
if (null != e) r._pos = e; else {
r._pos = [];
for (n = s = 0, u = t.length - 1; 0 <= u ? s <= u : s >= u; n = 0 <= u ? ++s : --s) r._pos.push(n / (t.length - 1));
}
return r;
};
t.prototype.domain = function(t) {
var e;
null == t && (t = []);
e = this;
e._domain = t;
e._min = t[0];
e._max = t[t.length - 1];
2 === t.length ? e._numClasses = 0 : e._numClasses = t.length - 1;
return e;
};
t.prototype.get = function(t) {
var e, i, n;
n = this;
if (isNaN(t)) return n._nacol;
if (n._domain.length > 2) {
e = n.getClass(t);
i = e / (n._numClasses - 1);
} else {
i = (t - n._min) / (n._max - n._min);
i = Math.min(1, Math.max(0, i));
}
return n.fColor(i);
};
t.prototype.fColor = function(t) {
var e, i, n, o, r, a, s;
o = this;
i = o._colors;
for (n = a = 0, s = o._pos.length - 1; 0 <= s ? a <= s : a >= s; n = 0 <= s ? ++a : --a) {
r = o._pos[n];
if (t <= r) {
e = i[n];
break;
}
if (t >= r && n === o._pos.length - 1) {
e = i[n];
break;
}
if (t > r && t < o._pos[n + 1]) {
t = (t - r) / (o._pos[n + 1] - r);
e = l.interpolate(i[n], i[n + 1], t, o._mode);
break;
}
}
return e;
};
t.prototype.classifyValue = function(t) {
var e, i, n, o, r, a, s;
o = this;
e = o._domain;
s = t;
if (e.length > 2) {
a = e.length - 1;
i = o.getClass(t);
r = e[0] + (e[1] - e[0]) * (0 + .5 * o._spread);
n = e[a - 1] + (e[a] - e[a - 1]) * (1 - .5 * o._spread);
s = o._min + (e[i] + .5 * (e[i + 1] - e[i]) - r) / (n - r) * (o._max - o._min);
}
return s;
};
t.prototype.getClass = function(t) {
var e, i, n, o;
o = this;
e = o._domain;
if (null != e) {
n = e.length - 1;
i = 0;
for (;i < n && t >= e[i]; ) i++;
return i - 1;
}
return 0;
};
t.prototype.validValue = function(t) {
return !isNaN(t);
};
return t;
}();
l.ColorScale = n;
l.scale = function(t, e) {
var i, n, o;
i = new l.ColorScale();
i.range(t, e);
o = !1;
n = function(t) {
var e;
e = i.get(t);
return o && e[o] ? e[o]() : e;
};
n.domain = function(t, e, o, r) {
var a;
null == o && (o = "e");
if (!arguments.length) return i._domain;
if (null != e) {
a = l.analyze(t, r);
t = 0 === e ? [ a.min, a.max ] : l.limits(a, o, e);
}
i.domain(t);
return n;
};
n.mode = function(t) {
if (!arguments.length) return i._mode;
i._mode = t;
return n;
};
n.range = function(t, e) {
i.range(t, e);
return n;
};
n.out = function(t) {
o = t;
return n;
};
n.getColor = function(t) {
return n(t);
};
n.spread = function(t) {
if (!arguments.length) return i._spread;
i._spread = t;
return n;
};
return n;
};
null == l.scales && (l.scales = {});
l.scales.cool = function() {
return l.scale([ l.hsl(180, 1, .9), l.hsl(250, .7, .4) ]);
};
l.scales.hot = function() {
return l.scale([ "#000", "#f00", "#ff0", "#fff" ], [ 0, .25, .75, 1 ]).mode("rgb");
};
l.analyze = function(t, e, i) {
var n, o, r, a, s, _, d;
r = {
min: Number.MAX_VALUE,
max: -1 * Number.MAX_VALUE,
sum: 0,
values: [],
count: 0
};
null == i && (i = function() {
return !0;
});
n = function(t) {
if (null != t && !isNaN(t)) {
r.values.push(t);
r.sum += t;
t < r.min && (r.min = t);
t > r.max && (r.max = t);
r.count += 1;
}
};
s = function(t, o) {
if (i(t, o)) return n(null != e && "function" === D(e) ? e(t) : null != e && "string" === D(e) || "number" === D(e) ? t[e] : t);
};
if ("array" === D(t)) for (_ = 0, d = t.length; _ < d; _++) {
a = t[_];
s(a);
} else for (o in t) if (t.hasOwnProperty(o)) {
a = t[o];
s(a, o);
}
r.domain = [ r.min, r.max ];
r.limits = function(t, e) {
return l.limits(r, t, e);
};
return r;
};
l.limits = function(t, e, i) {
var n, o, r, a, s, _, d, u, c, h, f, g, p, m, $, b, w, x, v, y, j, C, S, A, k, I, N, T, B, D, E, O, L, W, P, R, F, M, V, H, q, z, U, G, Y, X, Z, K, Q, J, tt, et, it, nt, ot;
null == e && (e = "equal");
null == i && (i = 7);
null == t.values && (t = l.analyze(t));
p = t.min;
f = t.max;
t.sum;
k = t.values.sort(function(t, e) {
return t - e;
});
h = [];
if ("c" === e.substr(0, 1)) {
h.push(p);
h.push(f);
}
if ("e" === e.substr(0, 1)) {
h.push(p);
for (d = I = 1, G = i - 1; 1 <= G ? I <= G : I >= G; d = 1 <= G ? ++I : --I) h.push(p + d / i * (f - p));
h.push(f);
} else if ("l" === e.substr(0, 1)) {
if (p <= 0) throw "Logarithmic scales are only possible for values > 0";
m = Math.LOG10E * Math.log(p);
g = Math.LOG10E * Math.log(f);
h.push(p);
for (d = N = 1, Y = i - 1; 1 <= Y ? N <= Y : N >= Y; d = 1 <= Y ? ++N : --N) h.push(Math.pow(10, m + d / i * (g - m)));
h.push(f);
} else if ("q" === e.substr(0, 1)) {
h.push(p);
for (d = T = 1, X = i - 1; 1 <= X ? T <= X : T >= X; d = 1 <= X ? ++T : --T) {
v = k.length * d / i;
y = Math.floor(v);
if (y === v) h.push(k[y]); else {
j = v - y;
h.push(k[y] * j + k[y + 1] * (1 - j));
}
}
h.push(f);
} else if ("k" === e.substr(0, 1)) {
b = k.length;
n = new Array(b);
s = new Array(i);
C = !0;
w = 0;
r = null;
r = [];
r.push(p);
for (d = B = 1, Z = i - 1; 1 <= Z ? B <= Z : B >= Z; d = 1 <= Z ? ++B : --B) r.push(p + d / i * (f - p));
r.push(f);
for (;C; ) {
for (u = D = 0, K = i - 1; 0 <= K ? D <= K : D >= K; u = 0 <= K ? ++D : --D) s[u] = 0;
for (d = E = 0, Q = b - 1; 0 <= Q ? E <= Q : E >= Q; d = 0 <= Q ? ++E : --E) {
A = k[d];
$ = Number.MAX_VALUE;
for (u = O = 0, J = i - 1; 0 <= J ? O <= J : O >= J; u = 0 <= J ? ++O : --O) {
_ = Math.abs(r[u] - A);
if (_ < $) {
$ = _;
o = u;
}
}
s[o]++;
n[d] = o;
}
x = new Array(i);
for (u = L = 0, R = i - 1; 0 <= R ? L <= R : L >= R; u = 0 <= R ? ++L : --L) x[u] = null;
for (d = W = 0, F = b - 1; 0 <= F ? W <= F : W >= F; d = 0 <= F ? ++W : --W) {
a = n[d];
null === x[a] ? x[a] = k[d] : x[a] += k[d];
}
for (u = P = 0, M = i - 1; 0 <= M ? P <= M : P >= M; u = 0 <= M ? ++P : --P) x[u] *= 1 / s[u];
C = !1;
for (u = tt = 0, V = i - 1; 0 <= V ? tt <= V : tt >= V; u = 0 <= V ? ++tt : --tt) if (x[u] !== r[d]) {
C = !0;
break;
}
r = x;
w++;
w > 200 && (C = !1);
}
c = {};
for (u = et = 0, H = i - 1; 0 <= H ? et <= H : et >= H; u = 0 <= H ? ++et : --et) c[u] = [];
for (d = it = 0, q = b - 1; 0 <= q ? it <= q : it >= q; d = 0 <= q ? ++it : --it) {
a = n[d];
c[a].push(k[d]);
}
S = [];
for (u = nt = 0, z = i - 1; 0 <= z ? nt <= z : nt >= z; u = 0 <= z ? ++nt : --nt) {
S.push(c[u][0]);
S.push(c[u][c[u].length - 1]);
}
S = S.sort(function(t, e) {
return t - e;
});
h.push(S[0]);
for (d = ot = 1, U = S.length - 1; ot <= U; d = ot += 2) isNaN(S[d]) || h.push(S[d]);
}
return h;
};
B = void 0 !== e && null !== e ? e : this;
D = function() {
var t, e, i, n, o;
t = {};
o = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
for (i = 0, n = o.length; i < n; i++) {
e = o[i];
t["[object " + e + "]"] = e.toLowerCase();
}
return function(e) {
var i;
i = Object.prototype.toString.call(e);
return t[i] || "object";
};
}();
null == B.type && (B.type = D);
Array.max = function(t) {
return Math.max.apply(Math, t);
};
Array.min = function(t) {
return Math.min.apply(Math, t);
};
v = function(t, e, i) {
null == e && (e = 0);
null == i && (i = 1);
t < e && (t = e);
t > i && (t = i);
return t;
};
E = function(t) {
return 3 === t.length ? t : t[0];
};
r = 2 * Math.PI;
o = Math.PI / 3;
u = Math.cos;
B = void 0 !== e && null !== e ? e : this;
l = null != (R = B.chroma) ? R : B.chroma = {};
l.brewer = {
OrRd: [ "#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000" ],
PuBu: [ "#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858" ],
BuPu: [ "#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b" ],
Oranges: [ "#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704" ],
BuGn: [ "#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b" ],
YlOrBr: [ "#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506" ],
YlGn: [ "#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529" ],
Reds: [ "#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d" ],
RdPu: [ "#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a" ],
Greens: [ "#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b" ],
YlGnBu: [ "#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58" ],
Purples: [ "#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d" ],
GnBu: [ "#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081" ],
Greys: [ "#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000" ],
YlOrRd: [ "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026" ],
PuRd: [ "#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f" ],
Blues: [ "#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b" ],
PuBuGn: [ "#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636" ],
Spectral: [ "#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2" ],
RdYlGn: [ "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837" ],
RdBu: [ "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061" ],
PiYG: [ "#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419" ],
PRGn: [ "#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b" ],
RdYlBu: [ "#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695" ],
BrBG: [ "#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30" ],
RdGy: [ "#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a" ],
PuOr: [ "#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b" ],
Set2: [ "#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3" ],
Accent: [ "#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666" ],
Set1: [ "#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999" ],
Set3: [ "#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f" ],
Dark2: [ "#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666" ],
Paired: [ "#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928" ],
Pastel2: [ "#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc" ],
Pastel1: [ "#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2" ]
};
B = void 0 !== e && null !== e ? e : this;
l = null != (F = B.chroma) ? F : B.chroma = {};
l.colors = {
indigo: "#4b0082",
gold: "#ffd700",
hotpink: "#ff69b4",
firebrick: "#b22222",
indianred: "#cd5c5c",
yellow: "#ffff00",
mistyrose: "#ffe4e1",
darkolivegreen: "#556b2f",
olive: "#808000",
darkseagreen: "#8fbc8f",
pink: "#ffc0cb",
tomato: "#ff6347",
lightcoral: "#f08080",
orangered: "#ff4500",
navajowhite: "#ffdead",
lime: "#00ff00",
palegreen: "#98fb98",
darkslategrey: "#2f4f4f",
greenyellow: "#adff2f",
burlywood: "#deb887",
seashell: "#fff5ee",
mediumspringgreen: "#00fa9a",
fuchsia: "#ff00ff",
papayawhip: "#ffefd5",
blanchedalmond: "#ffebcd",
chartreuse: "#7fff00",
dimgray: "#696969",
black: "#000000",
peachpuff: "#ffdab9",
springgreen: "#00ff7f",
aquamarine: "#7fffd4",
white: "#ffffff",
orange: "#ffa500",
lightsalmon: "#ffa07a",
darkslategray: "#2f4f4f",
brown: "#a52a2a",
ivory: "#fffff0",
dodgerblue: "#1e90ff",
peru: "#cd853f",
lawngreen: "#7cfc00",
chocolate: "#d2691e",
crimson: "#dc143c",
forestgreen: "#228b22",
darkgrey: "#a9a9a9",
lightseagreen: "#20b2aa",
cyan: "#00ffff",
mintcream: "#f5fffa",
silver: "#c0c0c0",
antiquewhite: "#faebd7",
mediumorchid: "#ba55d3",
skyblue: "#87ceeb",
gray: "#808080",
darkturquoise: "#00ced1",
goldenrod: "#daa520",
darkgreen: "#006400",
floralwhite: "#fffaf0",
darkviolet: "#9400d3",
darkgray: "#a9a9a9",
moccasin: "#ffe4b5",
saddlebrown: "#8b4513",
grey: "#808080",
darkslateblue: "#483d8b",
lightskyblue: "#87cefa",
lightpink: "#ffb6c1",
mediumvioletred: "#c71585",
slategrey: "#708090",
red: "#ff0000",
deeppink: "#ff1493",
limegreen: "#32cd32",
darkmagenta: "#8b008b",
palegoldenrod: "#eee8aa",
plum: "#dda0dd",
turquoise: "#40e0d0",
lightgrey: "#d3d3d3",
lightgoldenrodyellow: "#fafad2",
darkgoldenrod: "#b8860b",
lavender: "#e6e6fa",
maroon: "#800000",
yellowgreen: "#9acd32",
sandybrown: "#f4a460",
thistle: "#d8bfd8",
violet: "#ee82ee",
navy: "#000080",
magenta: "#ff00ff",
dimgrey: "#696969",
tan: "#d2b48c",
rosybrown: "#bc8f8f",
olivedrab: "#6b8e23",
blue: "#0000ff",
lightblue: "#add8e6",
ghostwhite: "#f8f8ff",
honeydew: "#f0fff0",
cornflowerblue: "#6495ed",
slateblue: "#6a5acd",
linen: "#faf0e6",
darkblue: "#00008b",
powderblue: "#b0e0e6",
seagreen: "#2e8b57",
darkkhaki: "#bdb76b",
snow: "#fffafa",
sienna: "#a0522d",
mediumblue: "#0000cd",
royalblue: "#4169e1",
lightcyan: "#e0ffff",
green: "#008000",
mediumpurple: "#9370db",
midnightblue: "#191970",
cornsilk: "#fff8dc",
paleturquoise: "#afeeee",
bisque: "#ffe4c4",
slategray: "#708090",
darkcyan: "#008b8b",
khaki: "#f0e68c",
wheat: "#f5deb3",
teal: "#008080",
darkorchid: "#9932cc",
deepskyblue: "#00bfff",
salmon: "#fa8072",
darkred: "#8b0000",
steelblue: "#4682b4",
palevioletred: "#db7093",
lightslategray: "#778899",
aliceblue: "#f0f8ff",
lightslategrey: "#778899",
lightgreen: "#90ee90",
orchid: "#da70d6",
gainsboro: "#dcdcdc",
mediumseagreen: "#3cb371",
lightgray: "#d3d3d3",
mediumturquoise: "#48d1cc",
lemonchiffon: "#fffacd",
cadetblue: "#5f9ea0",
lightyellow: "#ffffe0",
lavenderblush: "#fff0f5",
coral: "#ff7f50",
purple: "#800080",
aqua: "#00ffff",
whitesmoke: "#f5f5f5",
mediumslateblue: "#7b68ee",
darkorange: "#ff8c00",
mediumaquamarine: "#66cdaa",
darksalmon: "#e9967a",
beige: "#f5f5dc",
blueviolet: "#8a2be2",
azure: "#f0ffff",
lightsteelblue: "#b0c4de",
oldlace: "#fdf5e6"
};
}).call(this);
e.chroma.Color.prototype.lighten = function(t) {
return this.brighten(t);
};
}).call(this, i(369)(t));
}, function(t, e, i) {
var n = i(113), o = {
white: "#FFF",
black: "#000",
grey: "#808080"
};
o.clampLuminance = function(t, e, i) {
t = o.getChromaObj(t);
if (t) {
e < 0 && (e = 0);
i > 1 && (i = 1);
var n = t.luminance(), r = n < e ? e : n > i ? i : n;
return n === r ? t : o.getColorAtLuminance(t, r);
}
};
o.lighten = function(t, e, i) {
return n.interpolate(t, o.white, e, i || "rgb");
};
o.darken = function(t, e, i) {
return n.interpolate(t, o.black, e, i || "rgb");
};
o.getColorAtLuminance = function(t, e) {
if (!(e < 0 || e > 1)) {
t = o.getChromaObj(t);
if (t) {
var i = 0;
if (t.luminance() >= e) for (;;) {
i++;
if (t.luminance() <= e + .05 || i >= 100) return t;
t = o.darken(t, .05);
} else for (;;) {
i++;
if (t.luminance() >= e - .05 || i >= 100) return t;
t = o.lighten(t, .05);
}
}
}
};
o.getColorAtContrast = function(t, e, i) {
if (!(i < 1)) {
t = o.getChromaObj(t);
e = o.getChromaObj(e);
if (t && e) {
var r = 0;
if (n.contrast(t, e) >= i) for (;;) {
r++;
if (n.contrast(t, e) <= i + .5 || r >= 100) return e;
e = e.luminance() >= t.luminance() ? o.darken(e, .05) : o.lighten(e, .05);
} else for (var a = n.contrast(t, o.white), s = n.contrast(t, o.black); ;) {
r++;
if (n.contrast(t, e) >= i - .5 || r >= 100) return e;
if (e.luminance() >= t.luminance()) if (a >= i - .5) e = o.lighten(e, .05); else {
if (!(s >= i - .5)) return a > s ? o.getChromaObj(o.white) : o.getChromaObj(o.black);
e = o.darken(e, .05);
} else if (s >= i - .5) e = o.darken(e, .05); else {
if (!(a >= i - .5)) return a > s ? o.getChromaObj(o.white) : o.getChromaObj(o.black);
e = o.lighten(e, .05);
}
}
}
}
};
o.getContrastColor = function(t, e, i, n, r, a, s) {
t = o.getChromaObj(t);
e = o.getChromaObj(e);
i = o.getChromaObj(i);
if (t && e && i) {
var _ = t.luminance();
return "bright" === r ? _ < n ? e : o.getColorAtContrast(t, i, s || 2.5) : "dark" === r ? _ > n ? i : o.getColorAtContrast(t, e, a || 4.5) : void 0;
}
};
o.isHexColor = function(t) {
return !("string" != typeof t || !/^#[0-9A-F]{3}([0-9A-F]{3})?$/i.test(t));
};
o.getChromaObj = function(t) {
return o.isHexColor(t) ? n.hex(t) : t instanceof n.constructor && t;
};
o.rgbaColor = function(t, e) {
t = o.getChromaObj(t);
if (t) {
if (void 0 === e) e = 1; else {
e = parseFloat(e);
(isNaN(e) || e > 1) && (e = 1);
e < 0 && (e = 0);
}
return "rgba(" + o.toRGB(t).join(",") + "," + e + ")";
}
};
o.toRGB = function(t) {
t = o.getChromaObj(t);
if (t) {
var e = t.rgb();
e[0] = parseInt(e[0], 10);
e[1] = parseInt(e[1], 10);
e[2] = parseInt(e[2], 10);
return e;
}
};
t.exports = o;
}, function(t, e, i) {
var n, o, r, a, s = i(22), _ = i(25), l = i(21), d = i(6), u = i(26), c = {};
c.init = function(t) {
function e(t, e) {
if (t && u.isHexColor(t)) {
e = e || "";
var i = {};
i[e] = t;
c.setColors(i);
} else window.console && window.console.log(u.getPrefix() + ': theme.setColor() Invalid color argument. Color must be in hexadecimal format ("#AABBCC")');
}
function i(t) {
function e() {
var e, i = {};
for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
e = n || "primary";
if (!d.livechat.getLimit() && "primary" != e) continue;
"badge" == e && (e = "banner");
e += "$string";
t[n] && s(t[n]) && u.isHexColor(t[n]) && (i[e] = t[n]);
}
u.saveAPISettings({
settings: {
theme: {
colors: i
}
}
});
o.$("livechat").$("settings").$("theme").update({
colors: i
});
}
if (t && "object" == typeof t) {
u.savePopoutAPICalls("theme.setColors", [ t ]);
u.callOnFastInit(e, !0);
u.callOnRegistered(e, !0);
u.instrument("theme.setColors");
} else window.console && window.console.log(u.getPrefix() + ": theme.setColors() Invalid argument. Argument must be an object containing the desired colors in hexadecimal format (#AABBCC)");
}
function h(t, e) {
function i() {
a.getValue() ? u.saveAPISettings({
settings: {
theme: {
custom_fonts: {
config$json: t,
font_family$string: e
}
}
}
}) : r(u.getPrefix() + ": theme.setFontConfig() API requires your account to be on the Chat Professional/Enterprise or Advanced/Premium (Legacy) plan. Please upgrade your account.");
}
var n = o.$("connection.status$string").getValue(), r = window.console && window.console.log && window.console.log.bind && window.console.log.bind(window.console) || window.console && window.console.log || function() {};
if (n) r(u.getPrefix() + ": theme.setFontConfig() must be called immediately after embedding script"); else if (f(t) && "string" == typeof e) if (/[^A-Za-z0-9\'\"\-_, ]/.test(e)) r(u.getPrefix() + ": theme.setFontConfig() error: Invalid characters in font-family."); else if (function(t) {
for (var e, i = [], n = 0, o = t.length; n < o; n++) {
e = t.charAt(n);
"'" !== e && '"' !== e || (i[0] === e ? i.shift() : i.unshift(e));
}
return 0 === i.length;
}(e)) {
u.callOnFastInit(i);
u.callOnRegistered(i);
u.instrument("theme.setFontConfig");
} else r(u.getPrefix() + ": theme.setFontConfig() error: Malformed font-family string."); else r(u.getPrefix() + ": theme.setFontConfig() error: Invalid arguments.");
}
function f(t) {
function e(t) {
if (_(t)) return null;
if (!l(t) || 0 === t.length) return "is of invalid type";
for (var e = 0, i = t.length; e < i; e++) if ("string" != typeof t[e]) return "is of invalid type";
return null;
}
function i(t) {
return _(t) ? "is required" : null;
}
var n = {
custom: {
urls: [ i, e ]
},
fontdeck: {
id: [ i, "string" ]
},
monotype: {
projectId: [ i, "string" ]
},
google: {
families: [ i, e ],
text: [ "string" ]
},
typekit: {
id: [ i, "string" ],
api: [ "string" ]
}
}, o = [], r = window.console && window.console.log && window.console.log.bind && window.console.log.bind(window.console) || window.console && window.console.log || function() {};
for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
if (!n[a]) {
r(u.getPrefix() + ': theme.setFontConfig() error: unknown font provider "' + a + '"');
return !1;
}
var s, d = n[a], c = t[a];
for (s in d) if (Object.prototype.hasOwnProperty.call(d, s)) {
var h = d[s], f = function(t, e, i, n) {
for (var o = 'attribute "' + e + '" of provider "' + t + '" ', r = 0, a = n.length; r < a; r++) {
var s = n[r];
if ("string" == typeof s) {
if (void 0 !== i && typeof i !== s) return o + "is of invalid type";
} else {
var _ = s(i);
if (_) return o + _;
}
}
return null;
}(a, s, c[s], h);
if (f) {
r(u.getPrefix() + ": theme.setFontConfig() error: " + f);
return !1;
}
}
for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (d[s] || o.push(a + "." + s));
}
o.length > 0 && r(u.getPrefix() + ": theme.setFontConfig() warning: unused paths in web_font_config: " + o.join(", "));
return !0;
}
function g() {
function t() {
u.savePopoutAPICalls("theme.reload", []);
o.$("livechat").$("ui").update({
theme_reload$bool: !0
});
}
u.callOnFastInit(t);
u.callOnRegistered(t);
u.instrument("theme.reload");
}
function p(t) {
if (m(t)) {
u.instrument("theme.setProfileCardConfig");
$(t);
} else window.console && window.console.log(u.getPrefix() + ": setProfileCardConfig() Invalid argument. Please refer to the API documentation.");
}
function m(t) {
if (!t || "object" != typeof t) return !1;
for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e) && "boolean" != typeof t[e]) return !1;
return !0;
}
function $(t) {
var e = {};
"avatar" in t && (e.display_avatar$bool = t.avatar);
"title" in t && (e.display_title_name$bool = t.title);
"rating" in t && (e.display_rating$bool = t.rating);
b(e);
u.savePopoutAPICalls("theme.setProfileCardConfig", [ t ]);
}
function b(t) {
function e() {
u.saveAPISettings({
settings: {
theme: {
chat_window: {
profile_card: t
}
}
}
});
r.update(t);
}
u.callOnFastInit(e);
u.callOnRegistered(e);
u.instrument("theme.setProfileCardDisplay");
}
n = t;
o = d.root;
r = o.$("livechat").$("settings").$("theme").$("chat_window").$("profile_card");
a = o.$("livechat").$("gates").$("set_font_config$bool");
c.setTheme = n.generateLimitedFunction("theme.setTheme", 2, function(t) {
function e() {
u.saveAPISettings({
settings: {
theme: {
name$string: t.toString()
}
}
});
o.$("livechat").$("settings").$("theme").update({
name$string: t.toString()
});
}
u.savePopoutAPICalls("theme.setTheme", [ t.toString() ]);
u.callOnFastInit(e, !0);
u.callOnRegistered(e, !0);
u.instrument("theme.setTheme");
});
c.setColor = e;
c.setColors = n.generateLimitedFunction("theme.setColors", 1, i);
c.setFontConfig = h;
c.validateConfig = f;
c.reload = g;
c.setProfileCardConfig = p;
};
t.exports = c;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatWindow_MenuStack = i(124);
n.__$$__meshim_widget_widgets_ViewStack = i(54);
n.__$$__meshim_widget_components_chatWindow_NewChatForm = i(171);
n.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm = i(163);
n.__$$__meshim_widget_components_mobileChatWindow_ChatPanel = i(218);
n.__$$__meshim_widget_components_chatWindow_PostChatForm = i(131);
n.__$$__meshim_widget_components_chatWindow_CookieForm = i(129);
n.__$$__meshim_widget_components_chatWindow_CardForm = i(128);
n.__$$__meshim_widget_components_chatWindow_AgentList = i(127);
n.__$$__meshim_widget_components_chatWindow_AboutPanel = i(126);
n.__$$__meshim_widget_components_chatWindow_RatingPanel = i(125);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_MenuStack, "menu_stack", "", [], {
id: "menu_stack",
addClass: "popout"
} ], [ n.__$$__meshim_widget_widgets_ViewStack, "main_stack", "", [ [ n.__$$__meshim_widget_components_chatWindow_NewChatForm, "", "", [], {
name: "new_chat_form"
} ], [ n.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm, "", "", [], {
name: "pre_chat_offline_form"
} ], [ n.__$$__meshim_widget_components_mobileChatWindow_ChatPanel, "", "", [], {
name: "chat_panel"
} ], [ n.__$$__meshim_widget_components_chatWindow_PostChatForm, "", "", [], {
name: "post_chat_form"
} ], [ n.__$$__meshim_widget_components_chatWindow_CookieForm, "", "", [], {
name: "cookie_form"
} ], [ n.__$$__meshim_widget_components_chatWindow_CardForm, "", "", [], {
name: "card_form"
} ], [ n.__$$__meshim_widget_components_chatWindow_AgentList, "", "", [], {
name: "agent_list"
} ], [ n.__$$__meshim_widget_components_chatWindow_AboutPanel, "", "", [], {
name: "about_panel"
} ], [ n.__$$__meshim_widget_components_chatWindow_RatingPanel, "", "", [], {
name: "rating_panel"
} ] ], {
id: "main_stack",
onChildHide: "-1"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:chatWindow": "meshim.widget.components.chatWindow",
"xmlns:mobileChatWindow": "meshim.widget.components.mobileChatWindow",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__menu_stack"), f = s.get(o + "__main_stack");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t() {
a.update("");
}
var e = i(6), n = e.root.$("livechat"), o = n.$("ui").$("chat_window"), r = o.$("main_stack_name$string"), a = o.$("menu_stack_name$string");
!function() {
t();
f.on("click", t);
f.on("indexChange", t);
c.autobind(r, "value", function() {
f.setName(r.getValue());
});
c.autobind(a, "value", function() {
h.setName(a.getValue());
});
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
"top, left, right, bottom": 0,
backgroundColor: "$$windowBg",
boxShadow: "$$windowShadow",
"-webkit-text-size-adjust, -moz-text-size-adjust, -ms-text-size-adjust, text-size-adjust": "100%"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatWindow_MainScreen"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_a = i(43);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_a, "", "", [], {
xmlns: "jx.ui.html",
position: "absolute",
top: "0",
left: "0",
width: "100%",
height: "100%"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
o.trackEvent("Button Clicked");
u.write({
button_clicked$bool: !0
});
if (h.getValue()) r.userShowWindow(); else if (_.requestPermission()) if (l.isIEMobile) {
c.setAttribute("href", s.getPopoutURL());
c.setAttribute("target", e.POPOUT_WINDOW_PREFIX + f.getValue());
} else {
a.resetUnreadCount();
s.openPopout(!0);
}
}
var e = i(18), n = i(6), o = i(49), r = i(24), a = i(33), s = i(70), _ = i(40), l = i(35), d = n.root.$("livechat").$("ui"), u = d.$("chat_button"), h = d.$("mobile_overlay$bool"), f = n.root.$("livechat").$("account").$("key$string");
!function() {
c.on("click", t);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_a.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_html_a, {
fqname: "meshim_widget_components_mobileChatButton_TappingScreen"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_Image = i(230);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Image, "image", "", [], {
id: "image",
addClass: "custom_icon"
} ], [ n.__$$__meshim_widget_widgets_IconFont, "icon", "", [], {
id: "icon",
addClass: "default_icon"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "dots", "", [], {
id: "dots",
addClass: "dots",
selectable: "false"
} ] ], {
addClass: "dots_container"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__image"), f = s.get(o + "__icon"), g = s.get(o + "__dots");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function t() {
function t(t) {
d = !t;
if (t) {
h.setDisplay("none");
f.setDisplay("");
} else {
h.setDisplay("");
f.setDisplay("none");
}
e();
}
if (l) try {
l.abort();
} catch (t) {}
l = null;
if (a) {
if (s) {
h.setSrc(s);
t(!1);
return;
}
var i = function() {
for (var t = window.document.getElementsByTagName("head")[0], e = t.getElementsByTagName("link"), i = 0, n = e.length; i < n; i++) if ("icon" == e[i].rel || "shortcut icon" == e[i].rel) return e[i].href;
}();
if (i) {
h.setSrc(i);
t(!1);
return;
}
l = function(t) {
var e, i = window.location.protocol + "//" + window.location.host + "/favicon.ico";
try {
if (window.ActiveXObject) {
e = new window.ActiveXObject("Msxml2.XMLHTTP");
e || (e = new window.ActiveXObject("Microsoft.XMLHTTP"));
}
} catch (t) {}
e || void 0 === window.XMLHttpRequest || (e = new window.XMLHttpRequest());
if (e) {
e.onreadystatechange = function() {
4 === e.readyState && (200 === e.status || e.status >= 300 && e.status < 400 ? t(i) : t());
};
e.open("HEAD", i, !0);
e.send(null);
}
return e;
}(function(e) {
if (e) {
h.setSrc(e);
t(!1);
} else t(!0);
});
} else t(!0);
}
function e() {
if (r || "offline" != o) {
f.setIcon("message");
f.removeClass("default_icon_offline");
f.addClass("default_icon_online");
} else {
f.setIcon("email");
f.removeClass("default_icon_online");
f.addClass("default_icon_offline");
}
if (_ && r && !d) {
if (!u) {
n();
u = window.setInterval(n, m);
}
g.setDisplay("");
} else {
if (u) {
window.clearInterval(u);
u = null;
}
g.setDisplay("none");
}
}
function n() {
var t = g.getText();
g.setText(t.length == $ ? "" : t + ".");
}
var o, r, a, s, _, l, d, u, p = i(6), m = 1e3, $ = 3, b = p.root.$("livechat").$("account"), w = p.root.$("livechat").$("settings").$("branding"), x = b.$("status$string"), v = p.root.$("livechat").$("channel").$("chatting$bool"), y = w.$("hide_favicon$bool"), j = w.$("custom_favicon_path$string"), C = p.root.$("livechat").$("ui").$("chat_button").$("unread_count$int");
!function() {
c.autobind(y, "value", function(e) {
a = e;
t();
});
c.autobind(j, "value", function(e) {
s = e;
t();
});
c.autobind(v, "value", function(t) {
if (r !== t) {
r = t;
e();
}
});
c.autobind(x, "value", function(t) {
if (t != o) {
o = t;
e();
}
});
c.autobind(C, "value", function(t) {
if (t != _) {
_ = t;
e();
}
});
}();
}();
for (var m in p) c[m] = p[m];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".custom_icon": {
"width, height": "16px"
},
".default_icon": {
fontSize: "16px",
width: "16px",
display: "inline-block",
"&.default_icon_online": {
lineHeight: "20px",
verticalAlign: "top",
color: "$$faviconOnlineColor"
},
"&.default_icon_offline": {
lineHeight: "18px",
verticalAlign: "top",
color: "$$faviconOfflineColor"
}
},
".dots_container": {
fontFamily: "Arial",
position: "absolute",
width: "100%",
textAlign: "center",
fontSize: "20px",
letterSpacing: "-2px",
top: "-3px",
left: "-1px",
lineHeight: "24px"
},
".dots": {
display: "inline-block",
width: "12px",
lineHeight: "22px",
textAlign: "left",
color: [ "$$chatButtonBg", "$$faviconBg", "$$faviconDotsColor" ],
background: "transparent"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Favicon"
});
return t;
}();
}, function(t, e) {
function i(t) {
if (!(this instanceof i)) return new i(t);
var e = "";
"object" == typeof t ? e = "object" : /#/.test(t) ? e = "hex" : /hsl\(.+\)/.test(t) ? e = "hsl" : /hsv\(.+\)/.test(t) ? e = "hsv" : /rgba\(.+\)/.test(t) && (e = "rgba");
switch (e) {
case "object":
o.call(this, t);
break;

case "hex":
n.call(this, t);
break;

case "hsl":
r.call(this, t);
break;

case "hsv":
_.call(this, t);
break;

case "rgba":
s.call(this, t);
}
"number" != typeof this.alpha && (this.alpha = 1);
}
function n(t) {
t = t.replace(/#/g, "").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
/^\w{3}/.test(t) && (t = t.replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3"));
this.red = parseInt(t.substr(0, 2), 16);
this.green = parseInt(t.substr(2, 2), 16);
this.blue = parseInt(t.substr(4, 2), 16);
}
function o(t) {
if ("red" in t && "green" in t && "blue" in t) {
this.red = t.red;
this.green = t.green;
this.blue = t.blue;
this.alpha = t.alpha;
} else "h" in t && "s" in t && "l" in t ? a.call(this, t) : "h" in t && "s" in t && "v" in t && l.call(this, t);
}
function r(t) {
t = t.replace(/[A-Za-z]+|\(|\)/g, "").replace(/,/g, " ").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
var e = t.split(" "), i = {
h: parseFloat(e[0]) < 0 ? 360 + parseFloat(e[0]) % 360 : parseFloat(e[0]) % 360,
s: e[1].indexOf("%") < 0 ? parseFloat(e[1]) : parseInt(e[1], 10) / 100,
l: e[2].indexOf("%") < 0 ? parseFloat(e[2]) : parseInt(e[2], 10) / 100
};
a.call(this, i);
}
function a(t) {
var e, i = t.h, n = t.s, o = t.l, r = (1 - Math.abs(2 * o - 1)) * n, a = i / 60, s = r * (1 - Math.abs(a % 2 - 1)), _ = o - .5 * r;
switch (Math.floor(a)) {
case 0:
e = [ r, s, 0 ];
break;

case 1:
e = [ s, r, 0 ];
break;

case 2:
e = [ 0, r, s ];
break;

case 3:
e = [ 0, s, r ];
break;

case 4:
e = [ s, 0, r ];
break;

case 5:
e = [ r, 0, s ];
}
this.red = Math.round(255 * (e[0] + _));
this.green = Math.round(255 * (e[1] + _));
this.blue = Math.round(255 * (e[2] + _));
}
function s(t) {
t = t.replace(/[A-Za-z(,]+/g, " ").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
var e = t.split(" ");
this.red = parseInt(e[0], 10);
this.green = parseInt(e[1], 10);
this.blue = parseInt(e[2], 10);
this.alpha = parseFloat(e[3]);
}
function _(t) {
t = t.replace(/[A-Za-z%]+|\(|\)/g, "").replace(/,/g, " ").replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
var e = t.split(" "), i = {
h: parseFloat(e[0]) < 0 ? (360 + parseFloat(e[0])) % 360 : parseFloat(e[0]) % 360,
s: e[1].indexOf("%") < 0 ? parseFloat(e[1]) : parseInt(e[1], 10) / 100,
v: e[2].indexOf("%") < 0 ? parseFloat(e[2]) : parseInt(e[2], 10) / 100
};
l.call(this, i);
}
function l(t) {
var e, i = t.h, n = t.s, o = t.v, r = o * n, a = i / 60, s = r * (1 - Math.abs(a % 2 - 1)), _ = o - r;
switch (Math.floor(a)) {
case 0:
e = [ r, s, 0 ];
break;

case 1:
e = [ s, r, 0 ];
break;

case 2:
e = [ 0, r, s ];
break;

case 3:
e = [ 0, s, r ];
break;

case 4:
e = [ s, 0, r ];
break;

case 5:
e = [ r, 0, s ];
}
this.red = Math.round(255 * (e[0] + _));
this.green = Math.round(255 * (e[1] + _));
this.blue = Math.round(255 * (e[2] + _));
}
var d = [ "red", "green", "blue" ];
i.prototype.lighten = function(t) {
var e = this.toHSL();
e.l = e.l + (1 - e.l) * t;
return new i(e);
};
i.prototype.darken = function(t) {
var e = this.toHSL();
e.l = e.l - e.l * t;
return new i(e);
};
i.prototype.blend = function(t, e) {
t instanceof i || (t = new i(t));
for (var n = {}, o = 0; o < 3; o++) {
var r = this[d[o]], a = t[d[o]];
n[d[o]] = Math.round(r + (a - r) * e);
}
return new i(n);
};
i.prototype.complement = function() {
var t = this.red, e = this.blue, n = this.green, o = Math.max(t, e, n), r = Math.min(t, e, n), a = {};
a.red = o + r - t;
a.green = o + r - n;
a.blue = o + r - e;
return new i(a);
};
i.prototype.toStrRGB = i.prototype.toRGB = function() {
for (var t = [], e = 0; e < 3; e++) {
var i = this[d[e]].toString(16);
t[e] = i.length < 2 ? "0" + i : i;
}
return "#" + t.join("");
};
i.prototype.toStrRGBA = function() {
return "rgba(" + [ this.red, this.green, this.blue, this.alpha ].join(",") + ")";
};
i.prototype.toHSL = function() {
var t, e, i, n, o = this.red / 255, r = this.green / 255, a = this.blue / 255, s = Math.max(o, r, a), _ = Math.min(o, r, a), l = s - _;
0 === l ? n = 0 : s == o ? n = (r - a) / l % 6 : s == r ? n = (a - o) / l + 2 : s == a && (n = (o - r) / l + 4);
t = 60 * n;
t = t < 0 ? 360 + t % 360 : t % 360;
i = .5 * (s + _);
e = 0 === l ? 0 : l / (1 - Math.abs(2 * i - 1));
return {
h: t,
s: e,
l: i
};
};
i.prototype.toHSV = function() {
var t, e, i, n, o = this.red / 255, r = this.green / 255, a = this.blue / 255, s = Math.max(o, r, a), _ = Math.min(o, r, a), l = s - _;
0 === l ? n = 0 : s == o ? n = (r - a) / l % 6 : s == r ? n = (a - o) / l + 2 : s == a && (n = (o - r) / l + 4);
t = 60 * n;
t = t < 0 ? 360 + t % 360 : t % 360;
i = s;
e = 0 === l ? 0 : l / i;
return {
h: t,
s: e,
v: i
};
};
i.prototype.toArray = function() {
return [ this.red, this.green, this.blue ];
};
i.prototype.clone = function() {
return new i(this);
};
i.prototype.validate = function() {
for (var t = 0; t < 3; t++) {
var e = this[d[t]];
if (!("number" == typeof e && e >= 0 && e <= 255)) return !1;
}
return "number" == typeof this.alpha && this.alpha >= 0 && this.alpha <= 1;
};
t.exports = i;
}, function(t, e, i) {
"use strict";
function n(t) {
return "object" == typeof t && null !== t;
}
function o(t) {
switch ({}.toString.call(t)) {
case "[object Error]":
case "[object Exception]":
case "[object DOMException]":
return !0;

default:
return t instanceof Error;
}
}
function r(t) {
function e(e, i) {
var n = t(e) || e;
return i ? i(n) || n : n;
}
return e;
}
t.exports = {
isObject: n,
isError: o,
wrappedCallback: r
};
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_FileUploader = i(265);
n.__$$__jx_ui_Input = i(42);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_FileUploader, "file_form", "", [ [ n.__$$__jx_ui_Input, "file_input", "", [], {
id: "file_input",
name: "file[]",
type: "file",
multiple: "true",
addClass: "file_input"
} ] ], {
id: "file_form"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__file_form"), f = s.get(o + "__file_input");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t() {
if (a && f.getValue()) {
var t = [], i = [], n = 0, o = f.dom.files, s = u.getHost();
if (s) {
if (o) {
for (var m = 0, $ = o.length; m < $; m++) {
if (!l.isValidType(o[m].name, r)) {
C.update({
error$string: "type"
});
f.setValue("");
return;
}
t.push(o[m].name);
i.push(o[m].type);
n += o[m].size || 0;
}
if (n > _.FILE_UPLOAD_MAX) {
C.update({
error$string: "size"
});
f.setValue("");
return;
}
t = t.join(", ");
i = i.join(", ");
} else {
o = f.dom.value || "";
if (!o) return;
t = o.substr(o.lastIndexOf("\\") + 1);
i = t.substr(t.lastIndexOf(".") + 1);
if (!l.isValidType(t, r)) {
C.update({
error$string: "type"
});
f.setValue("");
return;
}
}
var x = g.livechat.sendFile({
file_name: t,
file_type: i,
file_size: n
}), v = {
ts: x,
mid: b.getValue(),
uid: w.getValue()
}, y = "https://" + s + _.FILE_UPLOAD_PATH + "?" + d.buildQuery(v);
h.setPath(y);
c.fire("before_submit");
o && "FormData" in window ? e(s, x, o) : h.submit();
p.increment("file_upload");
f.setValue("");
}
}
}
function e(t, e, i) {
for (var n = new window.XMLHttpRequest(), o = new window.FormData(), r = {
ts: e
}, a = "https://" + t + _.FILE_UPLOAD_PATH + "?" + d.buildQuery(r), s = 0, l = i.length; s < l; s++) o.append("file_" + i[s].name, i[s]);
n.open("POST", a, !0);
n.setRequestHeader("X-Zopim-MID", b.getValue());
n.setRequestHeader("X-Zopim-UID", w.getValue());
n.send(o);
}
function n() {
var t = v.getValue(), e = S.getValue("color_customization_enabled$int") || S.getValue("widget_customization_enabled$int");
a = !!e && !1 !== t;
}
function o() {
var t = y.getValue() || "";
r = t.trim().replace(/\s*,\s*/g, ",").split(",");
}
var r, a, s, _ = i(18), l = i(63), d = i(36), u = i(72), g = i(6), p = i(76), m = g.root, $ = m.$("livechat"), b = $.$("profile").$("mid$string"), w = $.$("profile").$("uid$string"), x = $.$("settings").$("file_sending"), v = x.$("enabled$bool"), y = x.$("allowed_extensions$string"), j = $.$("ui").$("chat_window"), C = j.$("chat_panel").$("file_toast"), S = $.$("settings").$("package");
!function() {
f.on("change", function() {
if (!s) {
s = !0;
u.reconnectIfServerRetired(function() {
s = !1;
t();
});
}
});
c.autobind(v, "value", n);
c.autobind(S, "value", n);
c.autobind(y, "value", o);
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".file_input": {
fontSize: "1000px",
outline: "none",
opacity: "0"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_SendFile"
});
return t;
}();
}, function(t, e, i) {
function n() {
a = g.root.$$("livechat.settings.sound.disabled$bool");
s = g.root.$$("livechat.profile.notification.sound$bool");
_ = g.root.$$("connection.reattached_timestamp$int");
d = g.root.$$("livechat.ui.sounds");
c = g.root.$("livechat").$("ui").$("mobile$bool");
c.getValue() && s.update(!1);
h.runAfterFirstChildReady(function() {
if (!u) {
u = new p(m);
d.bindValue(o);
}
});
}
function o(t) {
if (t && r()) {
l = _.getValue() || 0;
if (0 !== l) for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
if (!t[e] || t[e] < l) continue;
e = e.substring(0, e.indexOf("$"));
u.hasSound(e) || u.create(e, $[e]);
u.play(e, 1);
}
}
}
function r() {
var t = a.getValue(), e = s.getValue();
return "boolean" == typeof e ? e : "boolean" != typeof t || !t;
}
var a, s, _, l, d, u, c, h = i(14), f = i(18), g = i(6), p = i(272), m = f.SOUNDS_URL, $ = {
new_message: "triad_gbd"
}, b = {
init: n,
isSoundEnabled: r,
play: function() {}
};
t.exports = b;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(12), e = i(9), n = {
true: "tick",
false: "cross"
}, o = c.setIcon;
c.setIcon = function(e, i) {
i || (e = t(e).toString());
return o.call(c, n[e] || e);
};
!function() {
e.rtl(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_IconFont.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
float: "right",
lineHeight: 1,
position: "relative",
top: "3px",
verticalAlign: "middle",
"&.rtl": {
float: "left"
}
},
"&.left": {
float: "left",
"&.rtl": {
float: "right"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_IconFont, {
fqname: "meshim_widget_widgets_menu_IconFont"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ViewStack = i(54);
n.__$$__meshim_widget_components_chatWindow_SettingsMenu = i(275);
n.__$$__meshim_widget_components_chatWindow_ProfileMenu = i(262);
n.__$$__meshim_widget_components_chatWindow_EndChatMenu = i(257);
n.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu = i(256);
n.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification = i(255);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ViewStack, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_SettingsMenu, "", "", [], {
name: "settings_menu"
} ], [ n.__$$__meshim_widget_components_chatWindow_ProfileMenu, "", "", [], {
name: "profile_menu"
} ], [ n.__$$__meshim_widget_components_chatWindow_EndChatMenu, "", "", [], {
name: "end_chat_menu"
} ], [ n.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu, "", "", [], {
name: "email_transcript_menu"
} ], [ n.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification, "", "", [], {
name: "email_transcript_notification"
} ] ], {
"xmlns:ui": "jx.ui",
"xmlns:chatWindow": "meshim.widget.components.chatWindow",
"xmlns:widgets": "meshim.widget.widgets",
onChildHide: "-1"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
i(9).popout(c);
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ViewStack.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
overflow: "visible"
},
"&.popout": {
position: "absolute"
},
"&.mobile": {}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ViewStack, {
fqname: "meshim_widget_components_chatWindow_MenuStack"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast = i(84);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_RatingBar = i(102);
n.__$$__meshim_widget_widgets_TextArea = i(78);
n.__$$__meshim_widget_widgets_Bottom = i(32);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_ConnAwareSubmit = i(77);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(122), c = s(123), h = s(124), f = s(125), g = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast, "", "", [], {} ], [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__jx_ui_Widget, "rating_desc", "", [], {
id: "rating_desc",
addClass: "rating_desc"
} ], [ n.__$$__meshim_widget_widgets_RatingBar, "rating_bar", "", [], {
id: "rating_bar",
addClass: "rating_bar"
} ], [ n.__$$__jx_ui_Widget, "", "", [ u ], {
addClass: "comment_intro"
} ], [ n.__$$__meshim_widget_widgets_TextArea, "comment_area", "", [], {
id: "comment_area",
addClass: "comment_area",
rows: "4",
placeholder: c
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_ConnAwareSubmit, "send", "", [], {
placement: "primary",
id: "send",
addClass: "send wide",
value: h
} ], [ n.__$$__meshim_widget_widgets_Button, "cancel", "", [ f ], {
placement: "secondary",
id: "cancel",
addClass: "cancel secondary wide"
} ] ], {} ] ], {} ] ], {
absPaddingBottom: "bottomHeight"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
titleBar: "hidePopout",
actionBar: ""
} ], p = g[0].call(this, e, o, null, _.mangleIDs(o, g[3]), g[4]), m = p || this;
_.set(o, m);
var $ = _.get(o + "__rating_desc"), b = _.get(o + "__rating_bar"), w = _.get(o + "__comment_area"), x = _.get(o + "__send"), v = _.get(o + "__cancel");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var y = function() {
function t(t) {
_ = t;
v.setText(t ? g.END_CHAT : g.DURING_CHAT);
}
function e(t) {
t ? o(t) : $.setText(f.NOT_RATED);
}
function n() {
var t = b.getValue();
t ? o(t) : $.setText(f.UNRATED);
}
function o(t) {
$.setText("good" == t ? f.RATED_GOOD : f.RATED_BAD);
}
function r() {
var t, e = {
good: "Good",
bad: "Bad"
}, i = "rating_panel" + (_ ? "_end_chat" : "_during_chat"), n = b.getValue(), o = j && j.getValue();
if (n !== o) {
j && c.writeNode(j, n);
u.trackEvent("Chat_Rating_" + (e[n] || "Removed"), i);
t = !0;
}
var r = w.getValue().trim();
if (r) {
y.write({
comment$string: r
});
u.trackEvent("Chat_Comment_Submitted", i);
t = !0;
}
a(!t);
}
function a(t) {
S.update("chat_panel");
window.setTimeout(function() {
if (_) {
d.livechat.endChat();
A.update(null);
}
}, t ? 0 : 2e3);
}
function s() {
b.setValue(j.getValue());
e(j.getValue());
w.setValue(C.getValue() || "").focus();
}
var _, l = i(2), d = i(6), u = i(49), c = i(11), h = l(126), f = {
NOT_RATED: h,
RATED_GOOD: l(127),
RATED_BAD: l(128),
UNRATED: l(129)
}, g = {
DURING_CHAT: l(130),
END_CHAT: l(131)
}, p = d.root.$("livechat"), y = p.$("channel"), j = y.$("rating$string"), C = y.$("comment$string"), S = p.$("ui").$("chat_window").$("main_stack_name$string"), A = p.$("ui").$("chat_window").$("rating_panel").$("end_chat$bool");
!function() {
$.setText(f.NOT_RATED);
m.autobind(A, "value", t);
b.setDataNode(j);
b.setSize("big");
x.on("click", r);
v.on("click", function() {
a(!0);
});
m.on("show", s);
m.autobind(j, "value", e);
b.on("change", n);
}();
}();
for (var j in y) m[j] = y[j];
m.fire && m.fire("init");
m.setStyle && m.setStyle(r);
m.setAttributes && m.setAttributes(d);
"function" == typeof m.addChildren ? m.addChildren(l) : _.addChildren(m, l);
if (m !== this) {
m.__jx__constructor = this.__jx__constructor;
m.__jx__native = this.__jx__native;
}
return m;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".rating_desc": {
textAlign: "center",
marginBottom: "15px"
},
".rating_bar": {
marginBottom: "25px"
},
".comment_intro": {
fontWeight: "700"
},
".comment_area": {
overflow: "auto",
marginTop: "15px"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_RatingPanel"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Header = i(61);
n.__$$__meshim_widget_widgets_Body = i(38);
n.__$$__meshim_widget_widgets_Button = i(17);
n.__$$__meshim_widget_widgets_Bottom = i(32);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(121), c = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [], {
text: "Zendesk Chat"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Copyright © 2016 Zendesk, Inc. All Rights Reserved."
} ], [ n.__$$__meshim_widget_widgets_Button, "back_top", "", [ u ], {
id: "back_top",
addClass: "back_top wide"
} ], [ n.__$$__meshim_widget_widgets_Header, "", "", [], {
text: "Open Source Licenses"
} ] ], {} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [], {
text: "chroma.js - JavaScript library for color conversions"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Copyright © 2011-2013, Gregor Aisch. All rights reserved."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "3. The name Gregor Aisch may not be used to endorse or promote products derived from this software without specific prior written permission."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
} ] ], {
class: "break_top"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [], {
text: "store.js"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Copyright © 2010-2013 Marcus Westin"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
} ] ], {
class: "break_top"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [], {
text: "d3-timer, d3-interpolate"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Copyright 2010-2015 Mike Bostock"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "All rights reserved."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "* Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
} ] ], {
class: "break_top"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [], {
text: "d3-ease"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Copyright 2010-2015 Mike Bostock"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Copyright 2001 Robert Penner"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "All rights reserved."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: "* Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission."
} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [], {
addClass: "body_text",
text: 'THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
} ] ], {
class: "break_top"
} ] ], {
addClass: "ltr"
} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "back", "", [ u ], {
id: "back",
addClass: "back wide"
} ] ], {} ] ], {
absPaddingBottom: "bottomHeight"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
titleBar: "hidePopout",
actionBar: ""
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__back_top"), p = _.get(o + "__back");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
var t = i(6), e = i(9), n = t.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
e.mobile(f);
p.on("click", function() {
n.update("chat_panel");
});
g.on("click", function() {
n.update("chat_panel");
});
}();
}();
for (var $ in m) f[$] = m[$];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".break_top": {
padding: "10px 0",
borderTop: "1px solid",
borderColor: "$$inputColor",
fontSize: "$$fontSizeXS",
".body_text": {
color: "$$inputColor",
marginBottom: "$$marginS"
}
},
".back_top": {
display: "none",
"&.mobile": {
marginBottom: "18px",
display: "block"
}
},
".ltr": {
direction: "ltr"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_AboutPanel"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__jx_controls_List = i(147);
n.__$$__meshim_widget_widgets_motif_Chat = i(130);
n.__$$__meshim_widget_widgets_Bottom = i(32);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(120), c = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "scrollable_frame", "", [ [ n.__$$__jx_controls_List, "list", "", [], {
id: "list",
addClass: "list"
} ], [ n.__$$__meshim_widget_widgets_motif_Chat, "chat_motif", "", [], {
id: "chat_motif",
addClass: "chat_motif"
} ] ], {
id: "scrollable_frame"
} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "back", "", [ u ], {
id: "back",
addClass: "back wide"
} ] ], {
addClass: "padding_bottom"
} ] ], {
absPaddingBottom: "bottomHeightBottomPadding"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:jx": "jx.controls",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatWindow": "meshim.widget.components.chatWindow",
titleBar: "hidePopout",
actionBar: "none"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__scrollable_frame"), p = _.get(o + "__list"), m = _.get(o + "__chat_motif"), $ = _.get(o + "__back");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
var t = i(16), e = i(6), n = i(276), o = e.root.$("livechat").$("agents"), r = e.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
p.setRenderer(n);
p.setDataNode(o);
f.autobind(o, "keys", function() {
t(function() {
if (f.dom) {
var t = p.offsetHeight, e = g.getHeight(), i = m.getHeight();
t <= e && e - t > i ? f.removeClass("many_agents") : f.addClass("many_agents");
}
});
});
$.on("click", function() {
r.update("chat_panel");
});
}();
}();
for (var w in b) f[w] = b[w];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {},
".list": {
position: "relative",
"width, height": "100%"
},
".chat_motif": {
position: "absolute",
"bottom, left": 0,
transition: "opacity 0.5s",
opacity: 1
},
"&.many_agents .chat_motif": {
opacity: 0
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_AgentList"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__jx_ui_Form = i(41);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__meshim_widget_widgets_Body = i(38);
n.__$$__meshim_widget_widgets_form_Profile = i(109);
n.__$$__meshim_widget_widgets_Form = i(107);
n.__$$__meshim_widget_widgets_Bottom = i(32);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_Submit = i(68);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(118), c = s(119), h = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__jx_ui_Form, "form", "", [ [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__meshim_widget_widgets_Body, "message", "", [], {
id: "message"
} ], [ n.__$$__meshim_widget_widgets_form_Profile, "profile", "", [], {
id: "profile"
} ], [ n.__$$__meshim_widget_widgets_Form, "form_generator", "", [], {
id: "form_generator"
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_Submit, "", "", [], {
placement: "primary",
addClass: "wide",
value: u
} ], [ n.__$$__meshim_widget_widgets_Button, "cancel", "", [ c ], {
placement: "secondary",
id: "cancel",
addClass: "secondary wide"
} ] ], {} ] ], {} ] ], {
absPaddingBottom: "bottomHeight"
} ] ], {
id: "form",
noValidate: "true"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:components": "meshim.widget.components",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatWindow": "meshim.widget.components.chatWindow",
titleBar: "hidePopout",
actionBar: ""
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__form"), m = _.get(o + "__message"), $ = _.get(o + "__profile"), b = _.get(o + "__form_generator"), w = _.get(o + "__cancel");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var x = function() {
var t, e = i(6), n = e.root.$("livechat").$("settings").$("forms").$("card_form"), o = n.$("message$string"), r = n.$("form"), a = n.$("form_submitted"), s = n.$("profile_required$bool"), _ = e.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
b.setDataNode(r);
$.setDataNode(r);
g.autobind(o, "value", function(t) {
m.setText(t || "");
});
g.autobind(s, "value", function(e) {
t = e;
$.setDisplay(e ? "" : "none");
$.setDisabled(e);
});
p.on("submit", function(t) {
t.preventDefault();
if (p.validate(!0)) {
$.submit();
b.submit(a, $);
_.update("chat_panel");
}
});
w.on("click", function() {
_.update("chat_panel");
});
}();
}();
for (var v in x) g[v] = x[v];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_CardForm"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ViewStack = i(54);
n.__$$__meshim_widget_components_chatWindow_cookieForm_Accept = i(278);
n.__$$__meshim_widget_components_chatWindow_cookieForm_Decline = i(277);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ViewStack, "vs", "", [ [ n.__$$__meshim_widget_components_chatWindow_cookieForm_Accept, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_cookieForm_Decline, "", "", [], {} ] ], {
id: "vs"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:cookieForm": "meshim.widget.components.chatWindow.cookieForm",
titleBar: "hidePopout",
actionBar: ""
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__vs");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
var t = i(6), e = t.root.$("livechat").$("profile").$("allow_cookies$bool");
!function() {
c.autobind(e, "value", function(t) {
h.setIndex(!1 === t ? 0 : 1);
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
a: {
color: "inherit"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_CookieForm"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Motif = i(280);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Motif, "", "", [], {
"xmlns:widgets": "meshim.widget.widgets",
items: "hill, bubble b1, bubble b2, bubble b3, bubble b4, bubble b5"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
var e = c.dom.getElementsByClassName(t)[0];
if (e) {
e.style.OTransform = "none";
e.style.transform = "none";
}
}
var e = i(8);
if (e.isOpera) {
t("b3");
t("b4");
t("b5");
}
e.isIE8 && c.setDisplay("none");
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Motif.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "100%",
height: "50px",
fontFamily: 'zopim, "Segoe UI Symbol", "Arial Unicode MS", "Lucida Sans Unicode", sans-serif',
"*display": "none"
},
"*": {
position: "absolute"
},
".hill": {
width: "95%",
height: "20px",
bottom: 0,
left: "2.5%",
borderTopLeftRadius: "50% 100%",
borderTopRightRadius: "50% 100%",
background: "$$chatMotifHill"
},
".bubble": {
top: 0,
color: "$$chatMotifBubble",
"&:before": {
content: "'\\1f4ac'"
}
},
".b1": {
fontSize: "24px",
top: "12px",
left: "10%",
opacity: .4
},
".b2": {
fontSize: "16px",
top: "16px",
left: "21%"
},
".b3": {
fontSize: "16px",
top: "13px",
right: "33.5%",
opacity: .4
},
".b4": {
fontSize: "16px",
top: "14px",
right: "26%"
},
".b5": {
fontSize: "35px",
top: 0,
right: "11%",
opacity: .2
},
".b3, .b4, .b5": {
transform: "scale(-1, 1)"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Motif, {
fqname: "meshim_widget_widgets_motif_Chat"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ViewStack = i(54);
n.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm = i(281);
n.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm = i(279);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ViewStack, "vs", "", [ [ n.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm, "", "", [], {} ] ], {
id: "vs"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:postChatForm": "meshim.widget.components.chatWindow.postChatForm",
titleBar: "hidePopout",
actionBar: "none"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__vs");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
var t, e = i(6), n = e.root.$("livechat").$("ui").$("chat_window").$("post_chat_form").$("stack_index$int"), o = e.root.$$("livechat.channel.rating$string");
!function() {
c.autobind(n, "value", function(e) {
0 == e && t ? n.update(1) : 1 != e || t ? h.setIndex(e || 0) : n.update(0);
});
c.autobind(o, "value", function(e) {
t = e;
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_PostChatForm"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(195), c = [ n.__$$__jx_ui_html_div, "", "", [ " {str_queue_position} " ], {
xmlns: "jx.ui.html"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t() {
var t = r.getValue(), e = !0;
if (t && t > 0) {
t > 99 && (t = 99);
f.setText(u.replace("<number>", t));
} else e = !1;
f[e ? "removeClass" : "addClass"]("hidden");
}
var e = i(2), n = i(6), o = n.root.$("livechat"), r = o.$("channel").$("queue_position$int");
o.$("ui").$("mobile$bool").getValue();
!function() {
f.autobind(r, "value", t);
if (e && e.onLanguage) {
e.onLanguage(t);
f.onDestruction(function() {
e.unLanguage(t);
});
}
}();
}();
for (var p in g) f[p] = g[p];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontSize: "$$fontSizeS",
color: "$$chatLogSystemMsgColor",
background: "$$chatLogSystemMsgBg",
borderWidth: "$$chatLogSystemMsgBorderWidth",
borderStyle: "$$chatLogSystemMsgBorderStyle",
borderColor: "$$chatLogSystemMsgBorderColor",
padding: "$$chatLogSystemMsgPadding",
textAlign: "center"
},
"&.hidden": {
display: "none"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_components_chatWindow_chatPanel_QueueMessage"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:jx": "jx.controls"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
if ("fast_init" == n) {
if (!r) {
r = new _(c);
r.setDataNode(u);
c.autobind(d, "value", e);
c.fire("fast_log_appended");
}
} else if ("registered" == o || "reattached" == o) {
if (r instanceof _) {
c.autounbind(d, "value", e);
r.destroy();
}
r = !0;
if (!a) {
a = new _(c);
a.setDataNode(d);
c.fire("chat_log_appended");
}
}
}
function e(t) {
if (t) {
var e;
for (var i in t) if (t.hasOwnProperty(i)) {
e = t[i];
if (!e) continue;
if (e.unverified$bool && !e.nick$string) {
e.nick$string = "visitor:local";
u.$(i).update(e);
}
}
}
}
var n, o, r, a, s = i(6), _ = i(148), l = s.root.$("livechat"), d = l.$("channel").$("log"), u = l.$("temp").$("prev_log"), h = s.root.$("connection"), f = h.$("message$string"), g = h.$("status$string");
!function() {
c.autobind(f, "value", function(e) {
if (n != e) {
n = e;
t();
}
});
c.autobind(g, "value", function(e) {
if (o != e) {
o = e;
t();
}
});
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatWindow_chatPanel_FastInitChatLog"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_span = i(30);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_span, "", "", [ [ n.__$$__jx_ui_html_span, "", "", [], {
class: "default_value",
container: "default_value"
} ], [ n.__$$__jx_ui_html_span, "", "", [], {
class: "selected_value",
container: "selected_value"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(11), e = i(6);
t.hoverFix(c);
!function() {
var t = e.root.$("livechat").$("ui").$("mobile$bool");
c.autobind(t, "value", function(t) {
t || c.addClass("desktop");
});
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_span.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "50%",
display: "inline-block",
".default_value": {
display: "inline"
},
".selected_value": {
display: "none"
},
"&.desktop.hover, &.desktop:hover, &.active": {
".default_value": {
display: "none"
},
".selected_value": {
display: "inline"
}
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_span, {
fqname: "meshim_widget_widgets_ratingBar_emoticon_Button"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_ButtonBar = i(293);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_ButtonBar, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
selectable: "false"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_ButtonBar.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".option": {
cursor: "pointer",
display: "inline-block",
textAlign: "center",
"&:first-child": {},
"&:last-child": {},
"&.active": {
cursor: "default"
},
"&:hover": {},
"&.disabled": {
cursor: "default",
"&.active": {
cursor: "default"
},
"&:hover": {
cursor: "default"
}
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_ButtonBar, {
fqname: "meshim_widget_widgets_ButtonBar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:widget": "meshim.widget",
"xmlns:mui": "meshim.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
c.setText(o.get(n));
}
function e(e) {
if (n !== e) {
n && c.autounbind(n, "value", t);
n = e;
n && c.autobind(n, "value", t);
}
}
var n, o = i(10);
c.setDataNode = e;
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
whiteSpace: "inherit",
overflow: "hidden",
textOverflow: "ellipsis",
fontWeight: "bold",
lineHeight: "1.2",
paddingBottom: "2px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_profileCard_MemberName"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
n.__$$__jx_ui_html_table = i(53);
n.__$$__jx_ui_html_tbody = i(52);
n.__$$__jx_ui_html_tr = i(51);
n.__$$__jx_ui_html_td = i(50);
n.__$$__meshim_widget_widgets_Gravatar = i(83);
n.__$$__meshim_widget_widgets_profileCard_MemberName = i(136);
n.__$$__meshim_widget_widgets_profileCard_TitleHolder = i(297);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__jx_ui_html_table, "", "", [ [ n.__$$__jx_ui_html_tbody, "", "", [ [ n.__$$__jx_ui_html_tr, "", "", [ [ n.__$$__jx_ui_html_td, "", "", [ [ n.__$$__meshim_widget_widgets_Gravatar, "gravatar", "", [], {
id: "gravatar",
addClass: "profile_avatar"
} ] ], {
class: "avatar_cell"
} ], [ n.__$$__jx_ui_html_td, "content_cell", "", [ [ n.__$$__meshim_widget_widgets_profileCard_MemberName, "name_holder", "", [], {
id: "name_holder",
addClass: "profile_name"
} ], [ n.__$$__meshim_widget_widgets_profileCard_TitleHolder, "title_holder", "", [], {
id: "title_holder",
addClass: "profile_title"
} ] ], {
pseudo: "content_cell",
id: "content_cell"
} ] ], {} ] ], {} ] ], {
class: "profile_table"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:widget": "meshim.widget"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__gravatar"), f = s.get(o + "__content_cell"), g = s.get(o + "__name_holder"), p = s.get(o + "__title_holder");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function t(t) {
h.setMemberNode(t);
if (t) {
n = t.$("display_name$string");
g.setDataNode(n);
o = t.$("title$string");
e(o);
} else {
g.setDataNode(null);
e(null);
}
}
function e(t) {
o = t;
p.setDataNode(o);
}
var n, o, r = i(6), a = r.root.$("livechat"), s = a.$("settings").$("theme").$("chat_window").$("profile_card").$("display_avatar$bool"), _ = a.$("settings").$("theme").$("chat_window").$("profile_card").$("display_title_name$bool"), l = a.$("ui").$("mobile$bool");
!function() {
h.on("click", function() {
c.onGravatarClick && c.onGravatarClick();
});
f.on("click", function() {
c.onContentClick && c.onContentClick();
});
l.getValue() && c.addClass("mobile");
c.autobind(s, "value", function(t) {
c[t ? "removeClass" : "addClass"]("no_avatar");
});
c.autobind(_, "value", function(t) {
c[t ? "removeClass" : "addClass"]("no_title_name");
});
c.setDataNode = t;
c.setTitleNode = e;
}();
}();
for (var $ in m) c[$] = m[$];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "100%",
position: "relative",
".profile_table": {
width: "100%",
tableLayout: "fixed",
fontSize: "100%",
borderSpacing: "0px",
borderCollapse: "collapse",
td: {
padding: "0px"
}
},
".profile_avatar": {
width: "32px",
height: "32px",
borderWidth: "$$profileCardAvatarBorderWidth",
borderStyle: "$$profileCardAvatarBorderStyle",
borderColor: "$$profileCardAvatarBorderColor",
borderRadius: "$$profileCardAvatarRadius",
boxShadow: "$$profileCardAvatarShadow"
},
".profile_name": {
fontWeight: "bold",
color: "$$profileCardNameColor"
},
".profile_title": {
color: "$$profileCardTitleColor"
},
".profile_name, .profile_title": {
lineHeight: "1.2"
}
},
"**self.no_avatar .profile_table": {
".avatar_cell": {
display: "none"
},
".content_cell": {
paddingLeft: "0px"
}
},
"**self.no_title_name .profile_table": {
".content_cell": {
visibility: "hidden"
}
},
"**self.mobile": {
".profile_table": {
height: "100%"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_ProfileCard"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ProfileCard = i(137);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ProfileCard, "", "", [], {
xmlns: "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
e.call(c, t);
if (t && t !== _) {
var i = t.$("title$string"), n = new a(i, l);
c.setTitleNode(n);
}
}
var e, n = i(2), o = n(211), r = i(6), a = i(296), s = i(95), _ = r.root.$$("livechat.settings.concierge"), l = new s("title$string");
l.update(o);
!function() {
e = c.setDataNode || function() {};
c.setDataNode = t;
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ProfileCard.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ProfileCard, {
fqname: "meshim_widget_widgets_AgentProfileCard"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
n.__$$__jx_ui_html_table = i(53);
n.__$$__jx_ui_html_tbody = i(52);
n.__$$__jx_ui_html_tr = i(51);
n.__$$__jx_ui_html_td = i(50);
n.__$$__jx_ui_ViewStack = i(172);
n.__$$__meshim_widget_widgets_AgentProfileCard = i(138);
n.__$$__meshim_widget_widgets_MultiProfilesCard = i(295);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__jx_ui_html_table, "", "", [ [ n.__$$__jx_ui_html_tbody, "", "", [ [ n.__$$__jx_ui_html_tr, "", "", [ [ n.__$$__jx_ui_html_td, "", "", [ [ n.__$$__jx_ui_ViewStack, "stack", "", [ [ n.__$$__meshim_widget_widgets_AgentProfileCard, "agent_card", "", [], {
id: "agent_card",
addClass: "card"
} ], [ n.__$$__meshim_widget_widgets_MultiProfilesCard, "multi_agents_card", "", [], {
id: "multi_agents_card",
addClass: "card cursor_pointer"
} ] ], {
id: "stack"
} ] ], {
pseudo: "served_by_cell"
} ], [ n.__$$__jx_ui_html_td, "rating_cell", "", [], {
pseudo: "rating_cell",
id: "rating_cell",
class: "display_none"
} ] ], {} ] ], {} ] ], {
class: "profile_table"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__stack"), f = s.get(o + "__agent_card"), g = s.get(o + "__multi_agents_card"), p = s.get(o + "__rating_cell");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function t() {
var t = v.getKeys().length;
if (t > 1) {
if (1 === h.getIndex()) return;
h.setIndex(1);
f.setDataNode(null);
g.setDataNode(v);
} else {
if (0 !== h.getIndex()) {
h.setIndex(0);
g.setDataNode(null);
}
var e;
if (1 === t) {
e = v.$(v.getKeys()[0]);
f.addClass("cursor_pointer");
} else {
e = C;
f.removeClass("cursor_pointer");
}
f.setDataNode(e);
}
}
function e() {
I.getValue() && _.resetUnreadCount();
v.getKeys().length && k.update("agent_list");
}
function n() {
var t = s(S.getValue()), e = s(y.getValue()), i = s(A.getValue());
o(t && e && i);
}
function o(t) {
if (t) {
b || r();
p.removeClass("display_none");
} else p.addClass("display_none");
}
function r() {
b = new $(p).setPseudo("rating_bar");
b.setDataNode(j);
b.setSize("small");
b.on("change", a);
}
function a(t) {
T && l.scrollToBottom();
j && m.writeNode(j, t);
var e = {
good: "Good",
bad: "Bad"
};
u.trackEvent("Chat_Rating_" + (e[t] || "Removed"), "chat_panel");
}
var s = i(12), _ = i(33), l = i(60), d = i(6), u = i(49), m = i(11), $ = i(102), b = null, w = d.root.$("livechat"), x = w.$("channel"), v = w.$("agents"), y = x.$("served$bool"), j = x.$("rating$string"), C = w.$("settings").$("concierge"), S = w.$("settings").$("rating").$("enabled$bool"), A = w.$("settings").$("theme").$("chat_window").$("profile_card").$("display_rating$bool"), k = w.$("ui").$("chat_window").$("main_stack_name$string"), I = w.$("ui").$("popout$bool"), N = w.$("ui").$("mobile$bool").getValue(), T = w.$("ui").$("mobile_overlay$bool").getValue();
!function() {
h.on("instantiate", function(t) {
var i = h.children[t];
i.onGravatarClick = e;
i.onContentClick = e;
0 === t ? f = i : g = i;
});
h.setIndex(0);
c.autobind(v, "keys", t);
c.autobind(S, "value", n);
c.autobind(y, "value", n);
c.autobind(A, "value", n);
N && c.addClass("mobile");
}();
}();
for (var $ in m) c[$] = m[$];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
height: "100%",
".profile_table": {
width: "100%"
},
".card": {
".avatar_cell": {
width: "50px",
verticalAlign: "bottom",
".profile_avatar": {
position: "absolute",
bottom: "0",
"width, height": "50px",
borderWidth: "$$chatPanelProfileCardAvatarBorderWidth",
borderStyle: "$$chatPanelProfileCardAvatarBorderStyle",
borderColor: "$$chatPanelProfileCardAvatarBorderColor",
borderRadius: "$$chatPanelProfileCardAvatarRadius",
boxShadow: "$$chatPanelProfileCardAvatarShadow"
}
},
".content_cell": {
padding: "0 10px",
verticalAlign: "middle",
width: "100%",
height: "32px",
".profile_name, .profile_title": {
overflow: "hidden",
width: "100%",
whiteSpace: "nowrap"
}
}
},
".rating_cell": {
width: "52px",
verticalAlign: "middle"
},
".cursor_pointer": {
cursor: "pointer"
},
".display_none": {
display: "none"
}
},
"&.mobile": {
".card": {
".avatar_cell": {
width: "40px",
verticalAlign: "middle",
".profile_avatar": {
position: "relative",
"width, height": "40px"
}
},
".content_cell": {
verticalAlign: "middle",
".profile_name": {
marginTop: "3px"
}
}
},
".rating_cell": {
width: "88px"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Toast = i(111);
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Toast, "", "", [ [ n.__$$__jx_ui_html_div, "message", "", [], {
id: "message"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__message");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t() {
c.setDisplay("none");
}
var e = i(8), n = i(14), o = i(16), r = i(6), a = i(63), s = i(18), _ = i(11), l = i(10), d = l.file_upload.error, u = a.prettySize(s.FILE_UPLOAD_MAX, {
base2: !0
}), f = 3100, g = _.isStyleSupported("transition");
e.isFF && (g = !1);
var p, m = r.root.$("livechat").$("ui").$("chat_window").$("chat_panel").$("file_toast").$("error$string"), $ = r.root.$("livechat").$("ui").$("popout$bool");
!function() {
_.onTransitionEnd(c, c, t);
$ && n.window.on("click", t);
c.onDestruction(function() {
$ && n.window.un("click", t);
});
c.autobind(m, "value", function(e) {
if (e) {
"size" == e ? h.setText(d[e].replace("<size>", u)) : h.setText(d[e] || d.default);
p && window.clearTimeout(p);
g && c.removeClass("fade_out");
c.setDisplay("");
g && c.dom.offsetHeight;
g && o(function() {
c.addClass("fade_out");
});
p = window.setTimeout(t, f);
} else t();
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Toast.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
zIndex: "1000",
top: "50%",
left: "50%",
width: "160px",
height: "auto",
marginTop: "-32px",
marginLeft: "-80px",
padding: "10px",
textAlign: "center",
fontWeight: "bold",
transition: "opacity 0.5s linear 2.5s",
opacity: 1,
"&": "$$fileToast",
"&.fade_out": {
opacity: 0
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Toast, {
fqname: "meshim_widget_components_chatWindow_chatPanel_File"
});
return t;
}();
}, function(t, e) {
function i(t, e) {
function i() {
Date.now() - n >= e ? t.call() : o.id = window.requestAnimationFrame(i);
}
var n = Date.now(), o = new Object();
o.id = window.requestAnimationFrame(i);
return o;
}
function n(t) {
window.cancelAnimationFrame(t.id);
}
function o(t, e) {
function o() {
t.apply(a, r);
}
var r, a, s;
return function() {
s && n(s);
r = Array.prototype.slice.call(arguments);
a = this;
s = i(o, e);
};
}
var r = {
debounce: o
};
t.exports = r;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
r && c.autounbind(r, "value", e);
a = t;
r = a.$("type$string");
c.autobind(r, "value", e);
}
function e(t) {
if (t && !s) {
switch (t) {
case "chat.memberjoin":
s = new d(c);
break;

case "chat.memberleave":
s = new d(c);
_ = new g(c);
_.setDataNode(a);
break;

case "chat.changename":
s = new u(c);
break;

case "chat.rating":
s = new h(c);
break;

case "chat.comment":
s = new f(c);
}
n();
}
}
function n() {
if (a) {
s && s.setDataNode(a);
_ && _.setDataNode(a);
}
}
function o() {
l.unLanguage && l.unLanguage(n);
}
var r, a, s, _, l = i(2), d = i(305), u = i(304), h = i(303), f = i(302), g = i(301);
!function() {
c.setDataNode = t;
c.onDestruction(o);
l.onLanguage && l.onLanguage(n);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontSize: "$$fontSizeS",
color: "$$chatLogSystemMsgColor",
background: "$$chatLogSystemMsgBg",
borderWidth: "$$chatLogSystemMsgBorderWidth",
borderStyle: "$$chatLogSystemMsgBorderStyle",
borderColor: "$$chatLogSystemMsgBorderColor",
padding: "$$chatLogSystemMsgPadding",
textAlign: "center"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__meshim_widget_widgets_Button, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:widgets": "meshim.widget.widgets",
addClass: "secondary chat_log_button"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Button.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self.chat_log_button": {
width: "auto",
maxWidth: "100%",
padding: "6px"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Button, {
fqname: "meshim_widget_widgets_chatLogRenderer_Button"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_html_div = i(13);
n.__$$__meshim_widget_widgets_chatLogRenderer_Button = i(143);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(219), c = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__meshim_widget_widgets_chatLogRenderer_Button, "rate_this_chat", "", [ u ], {
id: "rate_this_chat"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__rate_this_chat");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function e() {
o.update("rating_panel");
}
var n = i(6), o = n.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
t.last_instance && t.last_instance.destroy();
t.last_instance = f;
f.autobind(g, "click", e);
}();
}();
for (var m in p) f[m] = p[m];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
marginTop: "5px",
marginBottom: "5px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_chatLogRenderer_RatingPrompt"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble = i(309);
n.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer = i(103);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble, "", "", [ [ n.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer, "content", "", [], {
id: "content",
class: "content"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:logRenderer": "meshim.widget.widgets.chatLogRenderer",
addClass: "chat_bubble"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
var c = s.get(i + "__content");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
i || c.setDataNode(t);
i && u.autounbind(i, "value", e);
i = t.$("nick$string");
u.autobind(i, "value", e);
}
function e(t) {
if (t) if (n.test(t)) {
u.setArrowPointing("left");
u.removeClass("visitor_bubble");
u.addClass("agent_bubble");
} else if (o.test(t)) {
u.setArrowPointing("right");
u.removeClass("agent_bubble");
u.addClass("visitor_bubble");
}
}
var i, n = /^agent/, o = /^visitor:/;
!function() {
u.setDataNode = t;
}();
}();
for (var f in h) u[f] = h[f];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
maxWidth: "90%",
clear: "both",
padding: "5px 10px",
margin: "0px 5px",
borderRadius: "4px",
".arrow_border": {},
".arrow_background": {},
".arrow_border": {
top: "auto !important",
bottom: "5px",
marginTop: "0px",
borderWidth: "6px"
},
".arrow_background": {
top: "auto !important",
bottom: "6px",
marginTop: "0px",
borderWidth: "5px"
},
".content": {
marginTop: "0px"
},
"&.agent_bubble": {
float: "left"
},
"&.rtl.agent_bubble": {
float: "right"
},
"&.visitor_bubble": {
float: "right"
},
"&.rtl.visitor_bubble": {
float: "left"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble, {
fqname: "meshim_widget_widgets_chatLogRenderer_ChatBubble"
});
return t;
}();
}, function(t, e, i) {
var n = i(4), o = n.nativeGenerator("div");
t.exports = o;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__div = i(146);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__div, "", "", [ [ n.__$$__div, "template", "", [ [ n.__$$__div, "", "", [], {} ] ], {
id: "template",
container: "default",
display: "none"
} ], [ n.__$$__div, "content", "", [], {
id: "content"
} ] ], {} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__template"), f = s.get(o + "__content");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
c.defaultPlacement = h;
var g = function() {
function t(t) {
S && c.autounbind(S, "keys", n);
S = t;
e();
c.autobind(S, "keys", n);
}
function e() {
f.empty();
I = {};
B = [];
if (D) {
D = 0;
c.fire("jx:list:length", D);
}
}
function n(t, e) {
var i = t.length + e.length > 2;
i && c.removeChild(f);
var n, r, a, s, _ = D;
for (r = 0; r < t.length; r++) {
n = t[r];
if (!(n in I)) {
var l = O(f), d = S.$(n);
I[n] = l;
D++;
C.applySetDataNode(l);
a = A ? $(n) : n;
s = x(a, l);
l.setAttribute("jx:list:rowID", n);
l.setDataNode(d);
o(s);
}
}
for (r = 0; r < e.length; r++) {
n = e[r];
if (n in I) {
a = A ? $(n, !0) : n;
s = w(a);
delete N[a];
I[n] === L && (L = null);
I[n].destroy();
delete I[n];
o(s);
D--;
}
}
i && c.appendChild(f);
_ != D && c.fire("jx:list:length", D);
t.length && c.fire("jx:list:added", t);
}
function o(t) {
if (!(t < 0) && B[t]) {
var e, i, n = B[t], o = I[n];
if (o) {
if (B[t + 1]) {
o.setAttribute("jx:list:nextID", B[t + 1]);
e = I[B[t + 1]];
e.setAttribute("jx:list:prevID", n);
o.fire("update.neighbour", {
next: B[t + 1]
});
e.fire("update.neighbour", {
prev: n
});
} else {
o.removeAttribute("jx:list:nextID");
o.fire("update.neighbour", {
next: null
});
}
if (B[t - 1]) {
o.setAttribute("jx:list:prevID", B[t - 1]);
i = I[B[t - 1]];
i.setAttribute("jx:list:nextID", n);
o.fire("update.neighbour", {
prev: B[t - 1]
});
i.fire("update.neighbour", {
next: n
});
} else {
o.removeAttribute("jx:list:prevID");
o.fire("update.neighbour", {
prev: null
});
}
}
}
}
function r(t) {
for (;t.parentNode && t != c; ) {
var e = t.getAttribute("jx:list:nextID");
if (e) return e;
t = t.parentNode;
}
}
function a(t) {
for (;t.parentNode && t != c; ) {
var e = t.getAttribute("jx:list:prevID");
if (e) return e;
t = t.parentNode;
}
}
function s(t) {
for (;t.parentNode && t != c; ) {
var e = t.getAttribute("jx:list:rowID");
if (e) return e;
t = t.parentNode;
}
}
function _() {
var t, e, i = [];
for (t in I) if (I.hasOwnProperty(t)) {
e = I[t].getAttribute("jx:list:rowID");
e && i.push(e);
}
return i;
}
function l(t) {
var e = I[t];
if (e) return e.jx_wrapper || e;
}
function d(t) {
u(t.target);
}
function u(t) {
var e, i;
if (j(t)) {
i = t;
e = I[i];
} else if ("number" == typeof t) {
e = f.childNodes[t];
e && (i = e.getAttribute("jx:list:rowID"));
} else {
e = t;
for (;e.parentNode && e != f; ) {
i = e.getAttribute("jx:list:rowID");
if (i) {
e.jx_wrapper && (e = e.jx_wrapper);
break;
}
e = e.parentNode;
}
}
if (e && e != L) {
g();
L = e.jx_wrapper || e;
L.addClass("active");
L.fire("jx:list:selected");
c.fire("jx:list:select", i);
}
}
function g() {
L && L.removeClass("active");
L && L.fire("jx:list:deselected");
L = null;
}
function p(t, e) {
if (A != t || k != e) {
k = e;
A = t;
if (A) {
if (!E) {
c.autobind(S, "value", b);
E = !0;
}
} else {
if (E) {
c.autounbind(S, "value", b);
E = !1;
}
k = !1;
}
N = {};
T = {};
D > 1 && m();
}
}
function m() {
var t, e, i;
f.innerHTML = "";
B = [];
for (e in I) if (I.hasOwnProperty(e)) {
if (!I.hasOwnProperty(e)) return;
t = A ? $(e) : e;
i = x(t, I[e]);
T[e] = t;
N[t] = e;
o(i);
}
}
function $(t, e) {
return e ? T[t] : (S.$(t).getValue(A) + "\0" + t).replace(/ /g, "").toLowerCase();
}
function b(t) {
if (A) {
var e, i, n, r, a, s;
for (n in t) if (t.hasOwnProperty(n)) {
if (!t.hasOwnProperty(n)) return;
i = t[n];
if (T[n] && i && i[A]) {
e = I[n];
f.removeChild(e);
a = T[n];
r = $(n);
delete N[a];
s = w(a);
o(s);
N[r] = n;
T[n] = r;
s = x(r, e, i[A]);
o(s);
}
}
}
}
function w(t) {
var e = v(B, t);
if (e < 0) return e;
B.splice(e, 1);
return e;
}
function x(t, e) {
var i = (-v(B, t) >> 0) - 1;
i < 0 && "undefined" != typeof console && "log" in console && console.log(t + " is already in List");
B.splice(i, 0, t);
k && (i = B.length - i - 1);
f.insertBefore(e.dom || e, f.childNodes[i] || null);
return i;
}
function v(t, e) {
for (var i, n, o = t.length, r = 0, a = o - 1; r <= a; ) {
i = (r + a) / 2 >> 0;
n = t[i];
if (n < e) r = i + 1; else {
if (!(n > e)) return i;
a = i - 1;
}
}
return -(r + 1);
}
var y = i(4), j = i(22), C = i(324);
c.setDataNode = t;
c.setRenderer = function(t) {
O = t;
};
c.getID = s;
c.getNextID = r;
c.getPrevID = a;
c.getRowIDs = _;
c.getByID = l;
c.clearList = e;
c.select = u;
c.deselect = g;
c.setSort = p;
var S, A, k, I = {}, N = {}, T = {}, B = [], D = 0, E = !1, O = function(t) {
if (h.lastChild.__jx__native) {
var e = h.lastChild.cloneNode(!0);
y.extend(e, !0);
return e;
}
return h.lastChild.__jx__constructor(t);
}, L = null;
f.on("click", d);
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__div, {
fqname: "jx_controls_List"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_controls_List = i(147);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_controls_List, "list", "", [], {
id: "list"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:jx": "jx.controls",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:renderer": "meshim.widget.widgets.chatLogRenderer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__list");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
var t, e, n, o = i(6), r = i(323), a = o.root.$("livechat"), s = a.$("settings").$("theme").$("chat_window").$("size$string"), _ = a.$("settings").$("theme").$("message_type$string");
c.setDataNode = function(e) {
if (e) {
t = e;
h.setDataNode(t);
}
};
!function() {
c.autobind(s, "value", function(t) {
e && c.removeClass("chat_log_" + e);
e = t;
e && c.addClass("chat_log_" + e);
});
c.autobind(_, "value", function(e) {
if (e && n != e) {
n = e;
c.setDataNode(t);
}
});
h.setRenderer(r);
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative"
},
".visitor .chat_bubble": {
background: "$$chatLogVisitorBubbleBg",
borderWidth: "$$chatLogVisitorBubbleBorderWidth",
borderStyle: "$$chatLogVisitorBubbleBorderStyle",
borderColor: "$$chatLogVisitorBubbleBorderColor",
".arrow_border": {
borderColor: "$$chatLogVisitorBubbleBorderColor"
},
".arrow_background": {
borderColor: "$$chatLogVisitorBubbleBg"
},
".image_file_border": {
borderColor: "$$chatLogVisitorBubbleBorderColor"
},
".generic_file_border": {
borderColor: "$$chatLogVisitorBubbleBorderColor"
}
},
".agent .chat_bubble": {
background: "$$chatLogAgentBubbleBg",
borderWidth: "$$chatLogAgentBubbleBorderWidth",
borderStyle: "$$chatLogAgentBubbleBorderStyle",
borderColor: "$$chatLogAgentBubbleBorderColor",
".arrow_border": {
borderColor: "$$chatLogAgentBubbleBorderColor"
},
".arrow_background": {
borderColor: "$$chatLogAgentBubbleBg"
},
".image_file_border": {
borderColor: "$$chatLogAgentBubbleBorderColor"
},
".generic_file_border": {
borderColor: "$$chatLogAgentBubbleBorderColor"
}
},
".log_avatar": {
borderWidth: "$$chatLogAvatarBorderWidth",
borderStyle: "$$chatLogAvatarBorderStyle",
borderColor: "$$chatLogAvatarBorderColor",
borderRadius: "$$chatLogAvatarRadius",
boxShadow: "$$chatLogAvatarShadow"
},
".group_head, .card, .group_children.bubble_avatar, .group_children.bubble": {
marginTop: "$$margin"
},
a: {
color: "inherit"
},
".card": {
"marginLeft, marginRight": "auto"
},
"&.chat_log_small": {
".card": {}
},
"&.chat_log_medium": {
".card": {
maxWidth: "220px"
}
},
"&.chat_log_large": {
".card": {
maxWidth: "260px"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatWindow_chatPanel_ChatLog"
});
return t;
}();
}, function(t, e, i) {
function n(t) {
for (var e, i, n = o.search.url, l = 0, d = []; null !== (i = n.exec(t)); ) {
var u = i[0].trim(), c = i[2], h = n.lastIndex - u.length;
if (o.tld.test(c)) {
h > l && d.push(t.substring(l, h));
e = r.parseURL("//" + u).hostname === s ? _ : "http://";
d.push({
jxmlConstructor: a,
attributes: {
href: e + u
},
children: [ u ]
});
l = n.lastIndex;
}
}
l < t.length && d.push(t.substring(l));
return d;
}
var o = i(64), r = i(330), a = i(150), s = window.location.hostname, _ = window.location.protocol + "//";
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_a = i(43);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_a, "", "", [], {
xmlns: "jx.ui.html"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
t && t.preventDefault();
var e, i;
e = c.getAttribute("href");
if (e) {
i = window.open();
i.opener = null;
i.location.href = e;
}
}
var e = i(8);
!function() {
c.setAttribute("rel", "noreferrer");
c.setAttribute("target", "_blank");
e.isIE && c.on("click", t);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_a.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_html_a, {
fqname: "meshim_common_stringParser_SafeAnchor"
});
return t;
}();
}, function(t, e, i) {
function n(t) {
for (var e, i = o.search.hurl, n = 0, a = []; null !== (e = i.exec(t)); ) {
var s = e[0].trim(), _ = i.lastIndex - s.length;
_ > n && a.push(t.substring(n, _));
a.push({
jxmlConstructor: r,
attributes: {
href: s
},
children: [ s ]
});
n = i.lastIndex;
}
n < t.length && a.push(t.substring(n));
return a;
}
var o = i(64), r = i(150);
t.exports = n;
}, function(t, e) {
function i(t) {
for (var e, i = /\r?\n/g, n = 0, o = []; null !== (e = i.exec(t)); ) {
var r = e[0], a = i.lastIndex - r.length;
a > n && o.push(t.substring(n, a));
o.push({
tagName: "br"
});
n = i.lastIndex;
}
n < t.length && o.push(t.substring(n));
return o;
}
t.exports = i;
}, function(t, e, i) {
function n(t, e, i) {
var n = o(e, i);
t.addChildren(n);
}
function o(t, e) {
t += "";
s(e) || (e = [ e ]);
var i, n, o = [], _ = [ t ];
for (i = 0, n = e.length; i < n; i++) _ = a(_, e[i]);
for (i = 0, n = _.length; i < n; i++) o[i] = r(_[i]);
return o;
}
function r(t) {
if ("string" == typeof t) return t;
var e, i = t.children, n = [];
e = l.extend({}, t.attributes, t.tagName ? {
tagName: t.tagName
} : null);
if (i) for (var o = 0, a = i.length; o < a; o++) n[o] = r(i[o]); else n = null;
return [ t.jxmlConstructor || _, null, null, n, e ];
}
function a(t, e) {
var i = [];
t = t.slice();
for (var n = 0; n < t.length; n++) {
var o, r = t[n];
if ("string" == typeof r) {
o = e(r);
s(o) ? i = i.concat(o) : i.push(o);
} else {
r.children && (r.children = a(r.children, e));
i.push(r);
}
}
return i;
}
var s = i(21), _ = i(7), l = i(73), d = {
appendTo: n,
toJXMLElements: o,
parseChildrenText: a
};
t.exports = d;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "textarea");
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(85);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_TextArea"
});
n.prototype.setCols = function(t) {
this.dom.cols = t;
return this;
};
n.prototype.getCols = function() {
return this.dom.cols;
};
n.prototype.setRows = function(t) {
this.dom.rows = t;
return this;
};
n.prototype.getRows = function() {
return this.dom.rows;
};
n.prototype.setResize = function(t) {
"resize" in this.style && (this.style.resize = t);
};
n.prototype.getInitialValue = function() {
return this._initialValue;
};
n.prototype.setInitialValue = function(t) {
this._initialValue = t && (t.toString ? t.toString() : t);
return this;
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "option");
s.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(12), s = i(42);
n.prototype = r(s.prototype);
o(n, s, {
fqname: "jx_ui_Option"
});
n.prototype.getLabel = function() {
return this.getAttribute("label") || this.dom.label;
};
n.prototype.setLabel = function(t) {
this.setAttribute("label", t);
return this;
};
n.prototype.getSelected = function() {
return this.dom.defaultSelected;
};
n.prototype.setSelected = function(t) {
this.dom.defaultSelected = a(t);
return this;
};
n.prototype.getPlaceholder = function() {
return this.placeholder;
};
n.prototype.setPlaceholder = function(t) {
this.placeholder = t;
return this;
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
a || (a = {});
a.tagName || (a.tagName = "select");
_.call(this, t, e, i, o, a);
if (this.container) {
this.container.addClass(this.__jx__fqname);
this.iconFont = new d(this.container, null, null, null, {
addClass: "select_icon",
icon: "arrow_down"
});
this.container.insertBefore(this.iconFont, this.container.getFirstChild());
u.mobile(this.container);
u.rtl(this.container);
}
l.__constructor.call(this);
}
var o = i(1), r = i(3), a = i(0), s = i(12), _ = i(332), l = i(62), d = i(15), u = i(9);
n.__jx__jcss = {
"&.mobile.invalid, &.rtl.mobile.invalid": {
"paddingRight, paddingLeft": "$$inputPadding"
},
".select_placeholder": {
overflow: "hidden",
whiteSpace: "nowrap",
textOverflow: "ellipsis"
},
".select_icon": {
float: "right",
marginTop: "3px"
},
"&.rtl .select_icon": {
float: "left"
},
"&.mobile": {
".select_placeholder": {
lineHeight: "26px"
},
".select_icon": {
marginTop: "8px"
}
}
};
n.prototype = a(_.prototype);
o(n, _, {
fqname: "meshim_widget_widgets_Select"
});
n.prototype.__jx__super = l;
n.prototype.setValidity = function(t) {
if (this.container) {
t = s(t);
this.container[t ? "removeClass" : "addClass"]("invalid");
}
return _.prototype.setValidity.apply(this, arguments);
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, r, a) {
if (!(this instanceof n)) return new n(t, e, i, r, a);
if (!n.__jx__jcss_generated) {
s.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
a || (a = {});
a.prompt = a.prompt || String.fromCharCode(160);
h.call(this, t, e, i, r, a);
this.inputSuffix = "select";
this.departments_label_path = "livechat.settings.forms.pre_chat_form.form.2.label$string";
this.default_departments_label = f.descendsObj(c, this.departments_label_path);
this.$departments = u.root.$("livechat").$("departments");
this.$departments_ui = u.root.$("livechat").$("ui").$("departments").$("options");
this.$profile_department_id = u.root.$("livechat").$("profile").$("department_id$int");
this.$departments_label = u.root.$$(this.departments_label_path);
this.$filter_enabled = u.root.$("livechat").$("ui").$("departments").$("filter_enabled$bool");
this.$hide_when_offline = u.root.$("livechat").$("settings").$("chat_button").$("hide_when_offline$bool");
this.prev_value = null;
this.avail_departments = {};
var _ = this;
this.autobind(this.$departments, "value", function() {
_.setOptions();
});
this.autobind(this.$departments_ui, "value", function() {
_.setOptions();
});
this.autobind(this.$filter_enabled, "value", function() {
_.setOptions();
});
this.autobind(this.$hide_when_offline, "value", function() {
_.setOptions();
});
this.autobind(this.$profile_department_id, "value", function(t) {
o.call(_, t);
});
this.autobind(this.$departments_label, "value", function() {
_.updateBlankOption();
});
this.onDestruction(function() {
if (_.blank_option) {
_.blank_option.destroy();
_.blank_option = null;
}
});
this.on("change", function() {
this.userSelected = !0;
});
this.reset();
}
function o(t) {
this.profile_department = t;
this.updateSelectedDepartment();
}
function r(t) {
function e(t, e) {
return t.name$string < e.name$string ? -1 : t.name$string > e.name$string ? 1 : 0;
}
var i = [], n = [];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && Object.prototype.hasOwnProperty.call(t, o) && ("offline" == t[o].status$string ? n.push({
id$int: o,
name$string: t[o].name$string,
status$string: "offline"
}) : i.push({
id$int: o,
name$string: t[o].name$string,
status$string: "online"
}));
i.sort(e);
n.sort(e);
return i.concat(n);
}
var a = i(1), s = i(3), _ = i(0), l = i(12), d = i(2), u = i(6), c = i(94), h = i(156), f = i(11), g = i(10), p = i(155);
n.__jx__jcss = {};
n.prototype = _(h.prototype);
a(n, h, {
fqname: "meshim_widget_widgets_form_DepartmentSelect"
});
n.prototype.__jx__super = h;
n.prototype.validate = function() {
if (this.isBlank) {
this.setValidity(!0);
return !0;
}
return h.prototype.validate.call(this);
};
n.prototype.reset = function() {
var t = this.$profile_department_id.getValue();
t && this.avail_departments[t] ? this.setValue(t) : this.setSelectedIndex(0);
this.userSelected = !1;
};
n.prototype.setHide = function(t) {
this.isHide = l(t);
this.setOptions();
};
n.prototype.setDisableWhenOffline = function(t) {
this.overrideDisable = !l(t);
this.setOptions();
};
n.prototype.isHidden = function() {
return this.isBlank || this.isHide;
};
n.prototype.setRequired = function() {
var t = h.prototype.setRequired.apply(this, arguments);
this.updateBlankOption();
return t;
};
n.prototype.updateBlankOption = function() {
if (this.blank_option) if (this.getRequired()) this.children[0] == this.blank_option && this.removeChild(this.blank_option); else {
this.blank_option.setText(g.get(this.$departments_label) == this.default_departments_label ? g.pre_chat_offline_form.department_any : "—");
this.children[0] !== this.blank_option && this.insertBefore(this.blank_option, this.children[0]);
}
};
n.prototype.setOptions = function() {
if (this.$departments) {
var t = this.$departments.getValue(), e = this.$departments_ui.getValue(), i = this.$filter_enabled.getValue(), n = this.$hide_when_offline.getValue(), o = {}, a = "";
if (t) if (null !== this.prev_value) {
a = this.prev_value;
this.prev_value = null;
} else a = this.getValue(); else this.prev_value = this.getValue();
this.isBlank = !0;
for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
if (i && !(e && e[s] && e[s].display$bool)) continue;
if (t[s]) {
this.isBlank = !1;
o[s] = t[s];
}
}
if (this.isBlank || this.isHide) (this.container || this).parentNode.setDisplay("none"); else {
(this.container || this).parentNode.setDisplay("");
this.empty();
var _, l = this.getName();
this.blank_option = _ = new p(this, null, null, null, {
name: "",
value: "",
className: "input_input_" + this.inputSuffix
});
(_.container || _).addClass("input");
this.avail_departments = o;
o = r(o);
for (var u = 0, c = o.length; u < c; u++) {
var h = "online" == o[u].status$string;
_ = new p(this, null, null, [ o[u].name$string + (h ? "" : " (" + d(204) + ")") ], {
name: l,
value: o[u].id$int,
disabled: !this.overrideDisable && n && !h,
className: "input_input_" + this.inputSuffix
});
(_.container || _).addClass("input");
a != _.getValue() || _.getDisabled() || this.setValue(a);
}
this.updateBlankOption();
this.updateSelectedDepartment();
}
}
};
n.prototype.updateSelectedDepartment = function() {
var t = this.profile_department;
t && parseInt(this.getValue(), 10) !== t && (this.userSelected || this.avail_departments[t] && this.setValue(t));
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "div";
this.options = [];
this.labels = [];
_.call(this, t, e, i, o, r);
this.on("click", function() {
this.validate();
});
}
var o = i(1), r = i(0), a = i(12), s = i(19), _ = i(42);
n.prototype = r(_.prototype);
o(n, _, {
fqname: "meshim_widget_widgets_form_InputMultiple"
});
n.prototype.getRequired = function() {
return this.required;
};
n.prototype.setRequired = function(t) {
this.required = a(t);
return this;
};
n.prototype.setReadOnly = function(t) {
this.readOnly = a(t);
return _.prototype.setReadOnly.call(this, t);
};
n.prototype.setOptions = function(t, e) {
this.empty();
this.options.length = this.labels.length = 0;
var i, n, o = this.getName();
for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
i = new this.optionConstructor(this, null, null, null, {
name: o,
value: t[r].value$string,
checked: t[r].checked$bool,
initialChecked: t[r].checked$bool,
disabled: this.readOnly,
display: this.readOnly && !t[r].checked$bool ? "none" : "",
className: "input_input_" + this.inputSuffix
});
(i.container || i).addClass("input");
n = new s(this, null, null, [ t[r].label$string || t[r].value$string ], {
className: "option_label",
display: this.readOnly && !t[r].checked$bool ? "none" : ""
});
e && i.setChecked(t[r].checked_user$bool);
i.setLabelElement(n);
this.options.push(i);
this.labels.push(n);
}
return this;
};
n.prototype.getOptions = function(t) {
for (var e = {}, i = t ? "checked_user$bool" : "checked$bool", n = 0, o = this.options.length; n < o; n++) {
e[n] = {};
e[n][i] = this.options[n].getChecked();
}
return e;
};
n.prototype.focus = function() {
this.options[0] && this.options[0].focus();
return this;
};
n.prototype.validate = function(t) {
if (this.required) {
for (var e = 0, i = this.options.length; e < i; e++) if (this.options[e].getChecked()) {
this.hideErrorMessage();
return !0;
}
t && this.options[0] && this.options[0].focus();
this.showErrorMessage();
return !1;
}
this.hideErrorMessage();
return !0;
};
n.prototype.reset = function() {
for (var t = 0, e = this.options.length; t < e; t++) this.options[t].reset();
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Button = i(17);
n.__$$__meshim_widget_widgets_iconFont_Auth = i(81);
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Button, "", "", [ [ n.__$$__meshim_widget_widgets_iconFont_Auth, "i", "", [], {
id: "i",
addClass: "auth_icon_font"
} ], [ n.__$$__jx_ui_Widget, "$$defaultplacement$$", "", [], {
addClass: "text",
container: "default",
id: "$$defaultplacement$$"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__i"), f = s.get(o + "__$$defaultplacement$$");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
c.defaultPlacement = f;
var g = function() {
var t = i(9);
c.setIcon = function() {
h.setIcon.apply(h, arguments);
};
t.rtl(c);
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Button.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
overflow: "hidden",
paddingTop: "8px",
paddingBottom: "8px",
paddingLeft: "40px",
paddingRight: "8px",
fontWeight: "normal",
width: "initial",
textAlign: "left",
background: "$$authButtonBg",
borderColor: "$$authButtonBorderColor",
boxShadow: "$$authButtonShadow",
"&.facebook": {
color: "$$facebook"
},
"&.twitter": {
color: "$$twitter"
},
".text": {
color: "rgba(0, 0, 0, 0.54)"
},
"&.rtl": {
textAlign: "right",
paddingRight: "40px",
paddingLeft: "8px"
}
},
"&:hover, &:focus, &:active": {
".auth_icon_font": {
color: "#FFFFFF"
},
"&.facebook": {
background: "$$facebook",
".text": {
color: "#fff"
}
},
"&.twitter": {
background: "$$twitter"
},
"&.google": {
background: "#eee"
}
},
"&.float": {
margin: "0 3% 0 0"
},
"&.mobile": {
".auth_icon_font": {
position: "absolute",
top: "10px",
left: "8px",
display: "inline-block",
fontSize: "18px"
},
"&.rtl .auth_icon_font": {
left: "initial",
right: "8px"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Button, {
fqname: "meshim_widget_widgets_iconFont_AuthButton"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
a || (a = {});
a.pattern || (a.pattern = "(^$|[0-9]+)");
a.type || (a.type = "tel");
s.call(this, t, e, i, o, a);
_.__constructor.call(this);
}
var o = i(1), r = i(3), a = i(0), s = i(85), _ = i(62);
n.__jx__jcss = {};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_PhoneField"
});
n.prototype.__jx__super = _;
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Button = i(69);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Button, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "i", "", [], {
id: "i"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__i");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
i(9).mobile(c);
var t;
c.setIcon = function(e) {
t && h.removeClass(t);
t = e;
t && h.addClass(t);
return h.setIcon.apply(h, arguments);
};
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Button.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
background: "transparent",
border: "none",
color: "inherit",
".icon_font": {
display: "inline",
lineHeight: "inherit",
verticalAlign: "middle",
fontSize: "$$fontSizeL"
}
},
"&.mobile": {
".icon_font": {
position: "relative",
fontSize: "$$fontSizeXXL"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Button, {
fqname: "meshim_widget_widgets_iconFont_Button"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
a || (a = {});
a.tagName || (a.tagName = "div");
s.call(this, t, e, i, o, a);
_.__constructor.call(this);
}
var o = i(1), r = i(3), a = i(0), s = i(7), _ = i(62);
n.__jx__jcss = {};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_FakeInput"
});
n.prototype.__jx__super = _;
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast = i(84);
n.__$$__meshim_widget_widgets_ViewStack = i(54);
n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form = i(345);
n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit = i(329);
n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours = i(328);
n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_HistoryPanel = i(325);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast, "disconnected_toast", "", [], {
id: "disconnected_toast",
addClass: "disconnected_toast hide"
} ], [ n.__$$__meshim_widget_widgets_ViewStack, "vs", "", [ [ n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form, "", "", [], {
name: "form"
} ], [ n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit, "", "", [], {
name: "post_submit"
} ], [ n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours, "", "", [], {
name: "operating_hours"
} ], [ n.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_HistoryPanel, "", "", [], {
name: "history_panel"
} ] ], {
id: "vs"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:preChatOfflineForm": "meshim.widget.components.chatWindow.preChatOfflineForm",
titleBar: "hidePopout",
actionBar: ""
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__disconnected_toast"), f = s.get(o + "__vs");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t(t) {
t && h.removeClass("hide");
}
var e = i(6), n = i(9), o = e.root, r = o.$("livechat").$("ui").$("chat_window").$("pre_chat_offline_form"), a = o.$("connection").$("reattached_timestamp$int"), s = r.$("stack_index$int"), _ = 8e3;
!function() {
n.mobile(c);
c.autobind(s, "value", function(t) {
f.setIndex(t || 0);
r.write({
name$string: f.getName()
});
});
c.autobind(a, "value", t);
setTimeout(function() {
t(!0);
}, _);
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".disconnected_toast.hide": {
display: "none"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_PreChatOfflineForm"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
var t = r.getVariable(n);
c.setStyle("padding-top", n && t || "");
}
function e() {
var t = r.getVariable(o);
c.setStyle("padding-bottom", o && t || "");
}
var n, o, r = i(3), a = i(6), s = a.root.$("livechat").$("ui").$("theme_loaded$bool");
c.setAbsPaddingTop = function(e) {
n = e;
t();
};
c.setAbsPaddingBottom = function(t) {
o = t;
e();
};
!function() {
c.autobind(s, "value", function(i) {
if (i) {
t();
e();
}
});
c.updatePaddingTop = t;
c.updatePaddingBottom = e;
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
"*overflow": "visible",
width: "100%",
height: "100%"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_AbsolutePaddingContainer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_html_div = i(13);
n.__$$__jx_ui_Localizer = i(87);
n.__$$__jx_ui_html_a = i(43);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(198), c = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__jx_ui_Localizer, "localizer", "", [ [ n.__$$__jx_ui_html_a, "", "", [], {
class: "cookie_link"
} ] ], {
id: "localizer",
content: u
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__localizer");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
var t = i(6), e = t.root.$$("livechat.ui.chat_window");
!function() {
g.on("click", function(t) {
t.target.jx_wrapper.hasClass("cookie_link") && e.update({
main_stack_name$string: "cookie_form"
});
});
}();
}();
for (var m in p) f[m] = p[m];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".cookie_link": {
textDecoration: "underline",
cursor: "pointer"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_CookieLawNotice"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_Label = i(19);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Label, "", "", [], {
text: "≡"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
t ? c.addClass("isActive") : c.removeClass("isActive");
}
function e(t) {
t.stopPropagation();
o.update("settings_menu" === o.getValue() ? "" : "settings_menu");
}
var n = i(6), o = n.root.$("livechat").$("ui").$("chat_window").$("menu_stack_name$string");
!function() {
c.autobind(o, "value", t);
c.on("click", e);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
"width, height": "$$titleBarHeight",
lineHeight: "$$titleBarHeight",
textAlign: "center",
color: "$$actionBarColor",
fontSize: "30px",
"&.isActive": {
backgroundColor: "$$actionBarBg"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_MobileOptionsMenuIcon"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_BorderOverlay = i(88);
n.__$$__meshim_widget_widgets_Branding = i(89);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_BorderOverlay, "", "", [], {} ], [ n.__$$__jx_ui_Widget, "$$defaultplacement$$", "", [], {
addClass: "actions",
container: "default",
id: "$$defaultplacement$$"
} ], [ n.__$$__meshim_widget_widgets_Branding, "", "", [], {
addClass: "branding",
hideOnMobile: "true"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
class: "action_bar",
selectable: "false"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__$$defaultplacement$$");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
c.defaultPlacement = h;
var f = function() {
var t = i(9);
!function() {
t.mobile(c);
t.rtl(c);
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
"bottom, left": 0,
overflow: "hidden",
zIndex: 10,
width: "$$actionBarWidth",
height: "$$actionBarHeight",
color: "$$actionBarColor",
background: "$$actionBarBg",
"paddingLeft, paddingRight": "$$actionBarPadding"
},
".border_overlay": {
borderWidth: "$$actionBarBorderWidth",
borderStyle: "$$actionBarBorderStyle",
borderColor: "$$actionBarBorderColor"
},
".actions": {
float: "left"
},
".branding": {
position: "relative",
float: "right",
color: "$$actionBarColor",
lineHeight: "$$actionBarHeight",
".icon_font": {
"*color": "$$actionBarColor",
"*lineHeight": "$$actionBarHeight",
"*textDecoration": "none"
},
"&:hover": {
color: "$$actionBarHoverColor"
}
},
"&.rtl": {
".actions": {
float: "right"
},
".branding": {
float: "left"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_ActionBar"
});
return t;
}();
}, function(t, e, i) {
function n() {
var t = +new Date(), e = t - h;
Math.abs(e - d) > u && r();
h = t;
}
function o() {
for (var t = g.length; t--; ) {
for (var e = g[t], i = e.queue.length; i--; ) {
"histogram" === e.queue[i].method && e.queue.splice(i, 1);
}
e.start_ts = {};
}
}
function r() {
f = clearInterval(f);
c = !1;
o();
}
function a() {
this.ref_ts = null;
this.from_ref_ts = {};
this.start_ts = {};
this.tags = [];
this.queue = [];
g.push(this);
}
var s = i(21), _ = i(22), l = i(28), d = 15e3, u = .2 * d, c = !0, h = +new Date(), f = setInterval(n, d), g = [], p = a.prototype;
p.flush = function() {};
p.setTags = function(t) {
s(t) && (this.tags = t.concat());
};
p.addTag = function(t) {
_(t) && t && this.tags.push(t);
};
p.setRefTime = function(t) {
l(this.ref_ts) || l(t) && (this.ref_ts = t);
};
p.fromRefTime = function(t, e, i) {
if (c && l(this.ref_ts) && _(t) && t && !this.from_ref_ts[t]) {
this.from_ref_ts[t] = !0;
var n = +new Date();
n < this.ref_ts ? r() : this.histogram(t, (n - this.ref_ts) / 1e3, e, i);
}
};
p.start = function(t, e) {
c && _(t) && t && (t in this.start_ts || (this.start_ts[t] = l(e) ? e : +new Date()));
};
p.end = function(t, e, i) {
if (c && _(t) && t && t in this.start_ts) {
var n = +new Date();
if (n < this.start_ts[t]) r(); else {
this.histogram(t, (n - this.start_ts[t]) / 1e3, e, i);
delete this.start_ts[t];
}
}
};
p.restart = function(t, e) {
delete this.start_ts[t];
this.start(t, e);
};
p.increment = function(t, e, i, n) {
this._queue("increment", t, 1, e, i, n);
this.flush();
};
p.histogram = function(t, e, i, n, o) {
this._queue("histogram", t, e, i, n, o);
this.flush();
};
p.distribution = function(t, e, i, n, o) {
this._queue("distribution", t, e, i, n, o);
this.flush();
};
p._queue = function(t, e, i, n, o, r) {
if (s(n)) {
o = n;
n = void 0;
}
var a = {
method: t,
name: e,
value: i,
tags: this.tags.concat(o || [])
};
r && (a.metadata = r);
l(n) && (a.sample_rate = n);
this.queue.push(a);
};
t.exports = a;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_BorderOverlay = i(88);
n.__$$__jx_ui_Label = i(19);
n.__$$__meshim_widget_widgets_IconFont = i(15);
n.__$$__meshim_widget_widgets_titleBar_MinimizeButton = i(358);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(196), c = s(197), h = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_BorderOverlay, "", "", [], {} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Label, "title_text", "", [], {
id: "title_text",
addClass: "title_text"
} ], [ n.__$$__jx_ui_Label, "status_text", "", [], {
id: "status_text",
addClass: "status_text",
display: "none"
} ] ], {
addClass: "title"
} ], [ n.__$$__jx_ui_Widget, "icons", "", [ [ n.__$$__jx_ui_Widget, "popout_container", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "popout_button", "", [], {
id: "popout_button",
icon: "popout",
title: u
} ] ], {
id: "popout_container",
addClass: "button_container"
} ], [ n.__$$__jx_ui_Widget, "minimize_container", "", [ [ n.__$$__meshim_widget_widgets_titleBar_MinimizeButton, "minimize_button", "", [], {
id: "minimize_button"
} ] ], {
id: "minimize_container",
addClass: "button_container last_child",
title: c
} ] ], {
id: "icons",
addClass: "icons"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:titleBar": "meshim.widget.widgets.titleBar",
class: "title_bar",
selectable: "false"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__title_text"), m = _.get(o + "__status_text"), $ = _.get(o + "__icons"), b = _.get(o + "__popout_container"), w = _.get(o + "__popout_button"), x = _.get(o + "__minimize_container"), v = _.get(o + "__minimize_button");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var y = function() {
function t() {
var t = r && !a && !s && !d && !c.bugs.noBoxSizing;
w.setDisplay(t ? "" : "none");
}
function e() {
var t = l || s;
x.setDisplay(t ? "none" : "");
t ? b.addClass("last_child") : b.removeClass("last_child");
}
function n() {
o && m.setText(j.get(I.$$(_ + "$string")));
}
var o, r, a, s, _, l, d, u = i(12), c = i(8), h = i(6), f = i(70), y = i(24), j = i(10), C = i(9), S = h.root.$("livechat"), A = S.$("settings").$("chat_window").$("title_bar").$("title$string"), k = S.$("ui").$("theme_loaded$bool"), I = S.$("settings").$("chat_window").$("title_bar").$("status_messages"), N = S.$("settings").$("popout").$("enabled$bool"), T = S.$("ui").$("popout$bool"), B = S.$("ui").$("mobile$bool").getValue(), D = S.$("account").$("status$string"), E = S.$("settings").$("theme").$("chat_window").$("title_bar").$("hide_minimize$bool"), O = S.$("settings").$("theme").$("chat_window").$("title_bar").$("hide_popout$bool");
g.setHidePopout = function(e) {
a = u(e);
t();
};
!function() {
C.mobile(g);
C.rtl(g);
C.windowPosition(g);
g.autobind(T, "value", function(i) {
s = i;
t();
e();
g[i ? "addClass" : "removeClass"]("title_bar_popout");
});
g.autobind(A, "value", function() {
p.setText(j.get(A));
});
B && g.autobind(k, "value", function(t) {
t && v.setMobile(!0);
});
g.autobind(I, "value", function() {
o = I.getValue();
n();
});
g.autobind(D, "value", function(t) {
_ = t;
n();
});
g.autobind(N, "value", function(e) {
r = e;
t();
});
g.autobind(E, "value", function(t) {
l = t;
e();
});
g.autobind(O, "value", function(e) {
d = e;
t();
});
$.on("mousedown", function(t) {
t.stopPropagation();
});
b.on("click", function() {
f.openPopout(!0);
y.userHideWindow();
});
x.on("click", function() {
y.userHideWindow();
});
}();
}();
for (var j in y) g[j] = y[j];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
"top, left": 0,
width: "100%",
overflow: "hidden",
zIndex: 10,
height: "$$titleBarHeight",
color: "$$titleBarColor",
background: "$$titleBarBg",
"&.title_bar_popout": {
cursor: "default"
}
},
".border_overlay": {
borderWidth: "$$titleBarBorderWidth",
borderStyle: "$$titleBarBorderStyle",
borderColor: "$$titleBarBorderColor"
},
".title": {
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis",
cursor: "inherit",
textAlign: "$$titleBarTextAlign",
fontSize: "$$titleBarFontSize",
lineHeight: "$$titleBarHeight",
fontWeight: "$$titleBarFontWeight",
".title_text, .status_text": {
cursor: "inherit"
},
".title_text": {
display: [ "inline", "$$titleBarTitleDisplay" ]
},
".status_text": {
display: [ "none", "$$titleBarStatusDisplay" ]
}
},
"&.ltr .title": {
paddingLeft: "$$titleBarPaddingBefore",
paddingRight: "$$titleBarPaddingAfter"
},
"&.rtl .title": {
paddingLeft: "$$titleBarPaddingAfter",
paddingRight: "$$titleBarPaddingBefore"
},
".icons": {
position: "absolute",
cursor: "default",
color: "$$titleBarIconsColor",
fontSize: "$$fontSizeXS",
".icon_font": {
display: "inline-block",
textAlign: "center",
"paddingRight, paddingLeft": "6px",
lineHeight: "$$titleBarHeight",
"&:hover": {
"&": "$$titleBarItemHover"
}
},
".button_container": {
display: "inline-block",
verticalAlign: "middle",
cursor: "pointer",
paddingTop: "2px"
}
},
"&.ltr .icons": {
"top, right": 0,
".button_container": {
"&.last_child": {
paddingRight: "3px"
}
}
},
"&.rtl .icons": {
"top, left": 0,
".button_container": {
"&.last_child": {
paddingLeft: "3px"
}
}
},
"&.br, &.bm, &.bl": {
"borderTopLeftRadius, borderTopRightRadius": "$$windowRadius"
},
"&.tr, &.tm, &.tl": {},
"&.mobile": {
zIndex: 101,
borderRadius: "0",
".title": {
fontSize: "$$fontSizeXL"
},
"&.ltr .icons, &.rtl .icons": {
".button_container": {
padding: 0,
"&.last_child": {
padding: 0
}
}
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_TitleBar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_a = i(43);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_a, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
target: "_blank"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(6), e = i(9), n = t.root.$("livechat"), o = n.$("ui").$("mobile$bool");
!function() {
e.mobile(c);
o.getValue() && c.on("click", function(t) {
t.preventDefault();
window.open(c.getAttribute("href"));
});
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_a.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
color: "inherit",
textDecoration: "inherit"
},
"&.mobile": {}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_a, {
fqname: "meshim_widget_widgets_branding_Link"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_AbsolutePaddingContainer = i(164);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatWindow_newChatForm_Banner = i(352);
n.__$$__meshim_widget_components_chatWindow_newChatForm_Branding = i(351);
n.__$$__meshim_widget_widgets_IconFont = i(15);
n.__$$__jx_ui_Form = i(41);
n.__$$__meshim_widget_components_chatWindow_newChatForm_TextField = i(350);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(115), c = s(116), h = s(117), f = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_AbsolutePaddingContainer, "", "", [ [ n.__$$__jx_ui_Widget, "content", "", [ [ n.__$$__meshim_widget_components_chatWindow_newChatForm_Banner, "banner", "", [], {
id: "banner",
addClass: "banner"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_newChatForm_Branding, "", "", [], {
addClass: "branding"
} ] ], {
addClass: "branding_container"
} ], [ n.__$$__meshim_widget_widgets_IconFont, "close", "", [], {
id: "close",
addClass: "close",
icon: "minimize",
title: u
} ] ], {
id: "content",
addClass: "content"
} ], [ n.__$$__jx_ui_Form, "form", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "submit", "", [], {
id: "submit",
icon: "send",
addClass: "send",
title: c
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_newChatForm_TextField, "input", "", [], {
id: "input",
addClass: "input",
autocomplete: "false",
placeholder: h,
tabIndex: "10"
} ] ], {
class: "input_wrapper"
} ] ], {
id: "form",
addClass: "form",
noValidate: "true"
} ], [ n.__$$__jx_ui_Widget, "disabled_overlay", "", [], {
id: "disabled_overlay",
class: "disabled_overlay",
visible: "none"
} ] ], {
absPaddingBottom: "badgeFormHeight"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:components": "meshim.widget.components",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatWindow": "meshim.widget.components.chatWindow",
"xmlns:newChatForm": "meshim.widget.components.chatWindow.newChatForm",
miniSize: "true",
titleBar: "none",
actionBar: "none",
addClass: "mini"
} ], g = f[0].call(this, e, o, null, _.mangleIDs(o, f[3]), f[4]), p = g || this;
_.set(o, p);
var m = _.get(o + "__content"), $ = _.get(o + "__banner"), b = _.get(o + "__close"), w = _.get(o + "__form"), x = _.get(o + "__submit"), v = _.get(o + "__input"), y = _.get(o + "__disabled_overlay");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var j = function() {
function t() {
if (!w.getDisabled()) {
var t = v.getValue().trim();
if (t) {
v.reset();
n(t);
} else v.focus();
}
}
function e() {
var t = v.getValue().trim();
t && (o ? j : h).update(t);
v.reset();
f.write({
button_clicked$bool: !0
});
n();
}
function n(t) {
t && h.update("");
s.setBannerUserHidden();
if (o && !r) {
t && j.update(t);
S.update(!0);
c.update("pre_chat_offline_form");
} else {
t && a.livechat.sendChatMsg({
msg: t
});
c.update("chat_panel");
}
}
var o, r, a = i(6), s = i(24), _ = i(11), l = i(9), d = a.root, u = d.$("livechat"), c = u.$("ui").$("chat_window").$("main_stack_name$string"), h = u.$("ui").$("chat_window").$("chat_panel").$("textarea").$("value$string"), f = u.$("ui").$("chat_button"), g = u.$("settings").$("forms").$("pre_chat_form").$("required$bool"), j = u.$("settings").$("forms").$("pre_chat_form").$("form").$("3").$("value_user$string"), C = u.$("ui").$("chat_window").$("pre_chat_form").$("submitted$bool"), S = u.$("ui").$("chat_window").$("pre_chat_form").$("form_populate$bool"), A = u.$("settings").$("branding").$("hide_branding$bool"), k = u.$("settings").$("banner").$("layout$string"), I = d.$("connection").$("status$string");
!function() {
l.rtl(p);
l.windowPosition(p);
_.hoverFix(p);
p.autobind(g, "value", function(t) {
o = t;
});
p.autobind(C, "value", function(t) {
r = t;
});
p.autobind(A, "value", function(t) {
$[t ? "addClass" : "removeClass"]("hide_branding");
});
p.autobind(k, "value", function(t) {
"image_only" == t ? $.addClass("image_only") : $.removeClass("image_only");
});
v.on("input", function() {
h.update(v.getValue().trim());
});
w.on("submit", function(e) {
e.preventDefault();
t();
});
x.on("click", function() {
t();
});
b.on("click", function(t) {
t.stopPropagation();
s.userHideBanner();
});
m.on("click", e);
y.on("click", e);
p.autobind(I, "value", function(t) {
if ("idle_disconnect" === t) {
w.setDisabled(!0);
y.show();
} else {
w.setDisabled(!1);
y.hide();
}
});
}();
}();
for (var C in j) p[C] = j[C];
p.fire && p.fire("init");
p.setStyle && p.setStyle(r);
p.setAttributes && p.setAttributes(d);
"function" == typeof p.addChildren ? p.addChildren(l) : _.addChildren(p, l);
if (p !== this) {
p.__jx__constructor = this.__jx__constructor;
p.__jx__native = this.__jx__native;
}
return p;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".container": {
background: "$$badgeBg",
borderWidth: "$$badgeBorderWidth",
borderStyle: "$$badgeBorderStyle",
borderColor: "$$badgeBorderColor"
},
".content": {
width: "100%",
height: "100%",
overflow: "hidden",
color: "$$badgeContentColor",
background: "$$badgeContentBg",
borderWidth: "$$badgeContentBorderWidth",
borderStyle: "$$badgeContentBorderStyle",
borderColor: "$$badgeContentBorderColor"
},
".banner": {
width: "100%",
height: "100%",
position: "relative",
cursor: "pointer",
fontSize: "1.5em",
padding: "20px 10px 10px",
"&.hide_branding": {
paddingTop: "10px"
},
"&.image_only": {
padding: "0"
}
},
".branding_container": {
position: "absolute",
top: "6px",
left: 0,
width: "100%",
textAlign: "center",
cursor: "pointer",
".branding": {
cursor: "pointer"
}
},
".close": {
position: "absolute",
cursor: "pointer",
opacity: 0,
transition: "opacity 0.2s",
"top, right": 0,
padding: "9px 10px 2px 2px"
},
"&.rtl .close": {
left: "6px",
right: "auto",
padding: "3px 2px 2px 4px"
},
"&.hover, &:hover": {
".close": {
opacity: 1
}
},
".send": {
float: "right",
fontSize: "$$fontSizeXXL",
padding: "5px",
margin: "5px",
color: "$$badgeIconColor",
opacity: "0.8",
cursor: "pointer",
"&:hover": {
opacity: "1"
},
"&.disabled": {
cursor: "default",
"&:hover": {
opacity: "0.8"
}
}
},
".form, .disabled_overlay": {
position: "absolute",
"bottom, left": "0",
width: "100%",
height: "$$badgeFormHeight"
},
".disabled_overlay": {
cursor: "pointer"
},
".form": {
overflow: "hidden",
"*zoom": 1,
background: "$$badgeFormBg",
borderWidth: "$$badgeFormBorderWidth",
borderStyle: "$$badgeFormBorderStyle",
borderColor: "$$badgeFormBorderColor",
"&.disabled": {
opacity: "0.5"
},
".input_wrapper": {
display: "block",
overflow: "hidden",
"*width": "165px",
".input": {
width: "100%",
height: "100%",
position: "relative",
"*width": "165px",
"*overflow": "hidden"
}
},
".button": {
"*width": "60px"
}
},
"&.ltr .form": {
".input": {
paddingRight: 0
},
".button": {
float: "right"
}
},
"&.rtl .form": {
".input": {
paddingLeft: 0
},
".button": {
float: "left"
}
},
"&.br, &.bm, &.bl": {
".content": {
"borderTopLeftRadius, borderTopRightRadius": "$$windowRadius"
}
},
"&.tr, &.tm, &.tl": {}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_NewChatForm"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
d.call(this, t, e, i, o, r);
this.index = void 0;
this.length = 0;
this.currentChild = null;
var a = this;
this._onChildHide = function() {
switch (a.onChildHide) {
case "next":
a.next(!0);
break;

case "prev":
a.prev(!0);
break;

case "first":
a.first(!0);
break;

case "last":
a.last(!0);
break;

default:
var t = parseInt(a.onChildHide, 10);
if (isNaN(t)) break;
a.setIndex(t, !0);
}
};
this.onDestruction(function() {
a.currentChild = null;
});
}
var o = i(1), r = i(0), a = i(21), s = i(12), _ = i(31), l = i(25), d = i(7);
n.prototype = r(d.prototype);
o(n, d, {
fqname: "jx_ui_ViewStack"
});
n.prototype.addChildren = function(t) {
var e = t && t.length;
if (t && e) for (var i = 0; i < e; i++) a(t[i]) && this.appendChild(t[i]);
};
n.prototype.appendChild = function(t) {
var e = !1;
if (a(t)) {
this.children.push(t);
t[4] && (e = s(t[4].forceInstantiate));
} else if (t.dom) {
d.prototype.appendChild.call(this, t);
t.setVisible("none");
} else this.dom.appendChild(t);
e && this.instantiateChild(t);
return t;
};
n.prototype.removeChild = function(t) {
try {
if (a(t)) ; else if (t.dom) {
this.dom.removeChild(t.dom);
t.parentNode = null;
} else this.dom.removeChild(t);
var e = _(t, this.children);
-1 != e && this.children.splice(e, 1);
} catch (t) {}
};
n.prototype.setIndex = function(t, e) {
t = parseInt(t, 10);
if (this.validIndex(t) && t != this.index) {
var i, n = this.currentChild;
if (!e && (n ? n.fire("beforeIndexChange", t) : 1) + this.fire("beforeIndexChange", t) < 2) return !1;
if (n) {
this.autounbind(n, "hide", this._onChildHide);
n.setVisible("none");
}
this.fire("indexChanging", t);
if (-1 == t) {
this.currentChild = null;
this.index = t;
this.fire("indexChange", t);
return !0;
}
n = this.children[t];
if (a(n)) {
n = this.instantiateChild(n);
i = !0;
}
n.setVisible("block");
this.autobind(n, "hide", this._onChildHide);
this.currentChild = n;
this.index = t;
i && this.fire("instantiate", t);
this.fire("indexChange", t);
return !0;
}
};
n.prototype.instantiateChild = function(t) {
if (a(t)) {
var e = _(t, this.children);
if (-1 != e) {
t = new t[0](this, t[1], t[2], t[3], t[4]);
this.children[e] = t;
this.children.pop();
return t;
}
}
};
n.prototype.validIndex = function(t) {
return null != t && t < this.getLength() && t >= -1;
};
n.prototype.next = function(t) {
return l(this.index, !0) ? this.setIndex(0, t) : this.setIndex(this.index + 1, t);
};
n.prototype.prev = function(t) {
return l(this.index, !0) ? this.setIndex(this.getLength() - 1, t) : this.setIndex(Math.max(this.index - 1, 0), t);
};
n.prototype.first = function(t) {
return this.setIndex(0, t);
};
n.prototype.last = function(t) {
return this.setIndex(this.getLength() - 1, t);
};
n.prototype.getName = function() {
return this.currentChild && this.currentChild.getName();
};
n.prototype.setName = function(t) {
if (!t) return this.setIndex(-1);
for (var e = 0, i = this.children.length; e < i; e++) if (a(this.children[e])) {
if (this.children[e][4] && this.children[e][4].name === t) return this.setIndex(e);
} else if (this.children[e].getName && this.children[e].getName() === t) return this.setIndex(e);
};
n.prototype.isFirst = function() {
return this.index <= 0;
};
n.prototype.isLast = function() {
return this.index >= this.getLength() - 1;
};
n.prototype.getLength = function() {
return this.children.length;
};
n.prototype.getChildren = function() {
return this.children;
};
n.prototype.getCurrentChild = function() {
return this.currentChild;
};
n.prototype.getIndex = function() {
return this.index;
};
n.prototype.getOnChildHide = function() {
return this.onChildHide;
};
n.prototype.setOnChildHide = function(t) {
this.onChildHide = t;
return this;
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, l) {
function f(t) {
$.parentNode.setAttribute("lang", t);
$.parentNode.setAttribute("dir", _.flip("ltr"));
}
if (!(this instanceof n)) return new n(t, e, i, o, l);
l || (l = {});
l.tagName || (l.tagName = "iframe");
this._top = this._bottom = this._left = this._right = this._width = this._height = NaN;
this._position = null;
this.pos = "";
this.offsetx = 0;
this.offsety = 0;
this._snaps = [ 0, 0, 0, 0 ];
this.useDisplay = !1;
this.doc = this.ownerDocument = t.ownerDocument;
this.parentNode = t;
this.attributes = l;
this.tagName = l.tagName;
this.isNew = !0;
this.dom = this.doc.createElement(this.tagName);
this.dom.jx_wrapper = this;
this.style = this.dom.style;
this.children = [];
this._autobinds = [];
c.call(this);
void 0 !== this.dom.seamless && (this.dom.seamless = !0);
this.dom.allowTransparency = "true";
this.dom.frameBorder = "0";
this.style.backgroundColor = "transparent";
this.style.verticalAlign = "text-bottom";
this.style.visibility = "hidden";
t.appendChild(t instanceof h ? this : this.dom);
e && r.set(e, this);
var g;
g = a.bugs.noBoxSizing ? "<html><head><style>html,body{height:100%;width:100%;background:none} *{border:0;padding:0;margin:0;}</style></head><body></body></html>" : "<!DOCTYPE html><html><head><style>html,body{height:100%;width:100%;} *{border:0;padding:0;margin:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}</style></head><body></body></html>";
this.dom.src = "about:blank";
this.appendToParent(!0);
var p = this.iwin = this.dom.contentWindow, m = this.idoc = s.extend(p.document);
m.write(g);
m.close();
this.ihead = m.getElementsByTagName("head")[0];
var $ = this.ibody = s.extend(m.body);
_ && _.onLanguage && _.onLanguage(f);
_ && _.language && f(_.language);
$.style.position = "relative";
$.parentNode.style.overflowY = $.style.overflowY = "hidden";
var b, w;
if (a.bugs.noBoxSizing) {
b = new u($, null, null, null, {
position: "relative",
width: "100%",
height: "100%",
overflow: "hidden"
});
b.applyConstraints();
b.setPadding = function(t) {
$.style.padding = t;
};
} else {
b = new u($, null, null, null, {
position: "absolute",
top: 0,
right: 0,
bottom: 0,
left: 0,
overflow: "hidden"
});
b.applyConstraints();
}
for (var x = "Background BackgroundImage Border BorderColor BorderStyle BorderWidth Color Cursor FontFamily FontSize FontWeight LetterSpacing LineHeight Opacity Padding Selectable TextAlign".split(" "); w = x.pop(); ) this["set" + w] = function(t) {
return function(e) {
b["set" + t](e);
return this;
};
}(w);
this.defaultPlacement = b;
this.addChildren(o);
this.style.visibility = "";
this.setStyle(i);
this.setAttributes(l);
d.bindIFrame(this);
}
var o = i(1), r = i(4), a = i(8), s = i(14), _ = i(2), l = i(0), d = i(3), u = i(7), c = i(183), h = i(23);
n.prototype = l(u.prototype);
o(n, u, {
fqname: "jx_ui_IFrame"
});
n.prototype.destroy = function() {
d.unbindIFrame(this);
this.defaultPlacement && this.defaultPlacement.destroy();
u.prototype.destroy.call(this);
};
t.exports = n;
}, function(t, e, i) {
var n = i(18), o = i(114), r = {};
r._super = null;
r.defaults = {
colors: {
primary$string: "#000000",
banner$string: "#000000",
bubble$string: "#000000"
}
};
r.overrides = {
avatars: {
concierge$string: n.IMAGES_URL + "/avatar_simple_agent.png",
agent$string: n.IMAGES_URL + "/avatar_simple_agent.png",
visitor$string: n.IMAGES_URL + "/avatar_simple_visitor.png"
},
chat_button: {
display_status$bool: !1,
use_bubble$bool: !1
},
chat_window: {
profile_card: {
display_avatar$bool: !0
},
use_banner$bool: !0
}
};
r.generate = function(t) {
var e = t.custom_fonts && t.custom_fonts.font_family$string || "";
return {
standard: {
fontFamily: "Verdana, Geneva, sans-serif",
customFontFamily: e ? e + ", Verdana, Geneva, sans-serif" : "Verdana, Geneva, sans-serif",
fontSizeXS: "10px",
fontSizeS: "11px",
fontSize: "12px",
fontSizeL: "14px",
fontSizeXL: "16px",
fontSizeXXL: "18px",
marginXS: "3px",
marginS: "5px",
margin: "10px",
marginL: "15px",
marginXL: "20px",
paddingS: "3px",
padding: "6px",
paddingL: "8px",
paddingXL: "10px",
borderWidth: "1px",
borderStyle: "solid",
borderColor: o.black,
radiusS: "3px",
radius: "5px",
headColor: o.white,
headBg: o.black,
headLowContrastColor: o.grey,
contentColor: o.black,
contentHeaderColor: o.black,
contentBg: o.white,
contentBlockBg: o.grey,
contentBlockRadius: "$$radius",
placeholderColor: o.grey,
inputMenuBg: o.white,
errorColor: "#CC0000",
dividerColor: o.grey,
inputColor: o.black,
inputBg: "$$inputMenuBg",
inputBorderWidth: "$$borderWidth",
inputBorderStyle: "$$borderStyle",
inputBorderColor: "$$borderColor",
inputPadding: "$$padding",
inputRadius: "$$radius",
inputShadow: "",
inputFocusColor: "",
inputFocusBg: "",
inputFocusBorderColor: "",
inputFocusShadow: "",
inputPlaceholderColor: "$$placeholderColor",
inputPlaceholderFontStyle: "italic",
inputInvalidColor: "",
inputInvalidBg: "",
inputInvalidBorderColor: "$$errorColor",
inputInvalidShadow: "",
buttonColor: o.white,
buttonBg: o.black,
buttonBorderWidth: "$$borderWidth",
buttonBorderStyle: "$$borderStyle",
buttonBorderColor: "",
buttonPadding: "$$padding",
buttonPaddingHorizontal: "$$paddingS",
buttonRadius: "$$radiusS",
buttonShadow: "",
buttonFontWeight: "bold",
buttonHoverColor: "",
buttonHoverBg: "",
buttonHoverBorderColor: "",
buttonHoverShadow: "",
buttonActiveColor: "",
buttonActiveBg: "",
buttonActiveBorderColor: "",
buttonActiveShadow: "",
buttonSecColor: o.white,
buttonSecBg: o.grey,
buttonSecBorderColor: "",
buttonSecShadow: "",
buttonSecHoverColor: "",
buttonSecHoverBg: "",
buttonSecHoverBorderColor: "",
buttonSecHoverShadow: "",
buttonSecActiveColor: "",
buttonSecActiveBg: "",
buttonSecActiveBorderColor: "",
buttonSecActiveShadow: "",
buttonShortPadding: "$$paddingS",
formSubmittedBg: "$$contentBlockBg",
formSubmittedRadius: "$$radius",
formSubmittedBorderWidth: 0,
formSubmittedBorderStyle: "",
formSubmittedBorderColor: "",
errorMessageColor: "$$errorColor",
errorMessageFontWeight: "bold",
errorMessageFontStyle: "italic",
scrollableFrameInnerPaddingSmall: "$$margin",
scrollableFrameInnerPaddingMedium: "$$marginXL",
scrollableFrameInnerPaddingLarge: "$$marginXL",
scrollableFrameTopHeight: "",
scrollableFrameTopBackground: "",
scrollableFrameTopBackgroundColor: "",
scrollableFrameBottomHeight: "",
scrollableFrameBottomBackground: "",
scrollableFrameBottomBackgroundColor: "",
toastColor: o.white,
toastBg: o.black,
toastPadding: "$$paddingXL",
toastBorderWidth: "$$borderWidth",
toastBorderStyle: "$$borderStyle",
toastBorderColor: "$$borderColor",
toastRadius: "$$radius",
toastShadow: "",
avatarBorderWidth: 0,
avatarBorderStyle: "$$borderStyle",
avatarBorderColor: "$$borderColor",
avatarRadius: "$$radiusS",
avatarShadow: "",
profileCardAvatarBorderWidth: "",
profileCardAvatarBorderStyle: "",
profileCardAvatarBorderColor: "",
profileCardAvatarRadius: "",
profileCardAvatarShadow: "",
profileCardNameColor: o.black,
profileCardTitleColor: o.grey,
bottomHeight: "40px",
bottomHeightBottomPadding: "50px",
bottomBorderWidth: "",
bottomBorderStyle: "$$borderStyle",
bottomBorderColor: "$$borderColor",
bottomNoteBorderWidth: 0,
bottomNoteBorderStyle: "$$borderStyle",
bottomNoteBorderColor: "$$borderColor",
brandingLinkColor: "$$actionBarColor",
chatMotifHill: "",
chatMotifBubble: "",
facebook: "#3B5998",
facebookActive: "#637BAD",
twitter: "#00ACEE",
twitterActive: "#7EB2D4",
google: "#DD4B39",
googleActive: "#E0736F",
externalIconColor: "$$placeholderColor",
authButtonBg: "",
authButtonBorderColor: "",
authButtonShadow: "",
chatRatingsEmoticonColor: "#999",
chatRatingsEmoticonActive: "#DDD",
chatRatingsEmoticonHover: "#EEE",
chatRatingsThumbLight: "#999",
chatRatingsThumbDark: "#666",
chatRatingsThumbActive: "#EEE",
chatRatingsThumbBGHover: "#DDD",
chatButtonMinWidth: "180px",
chatButtonMaxWidth: "300px",
chatButtonHeight: "30px",
chatButtonColor: "$$headColor",
chatButtonBg: "$$headBg",
chatButtonBorderWidth: "$$borderWidth",
chatButtonBorderStyle: "$$borderStyle",
chatButtonBorderColor: "$$dividerColor",
chatButtonRadius: "$$radius",
chatButtonShadow: "",
chatButtonPadding: "$$paddingXL",
chatButtonPaddingFavicon: "$$chatButtonPadding",
chatButtonFontWeight: "bold",
chatButtonStatusFontWeight: "bold",
faviconWidth: "36px",
faviconColor: "$$chatButtonColor",
faviconOnlineColor: "",
faviconOfflineColor: "",
faviconBg: "$$chatButtonBg",
faviconDotsColor: "",
chatBubbleTitle: "",
chatBubbleText: "",
chatBubbleClose: "",
windowMiniWidth: "240px",
windowMiniHeight: "200px",
windowSmallWidth: "240px",
windowSmallHeight: "335px",
windowMediumWidth: "290px",
windowMediumHeight: "400px",
windowLargeWidth: "350px",
windowLargeHeight: "450px",
windowColor: "$$contentColor",
windowBg: "$$contentBg",
windowPadding: "",
windowRadius: "$$radius",
windowShadow: "",
windowContentBg: "$$contentBg",
windowContentBorderWidth: "$$borderWidth",
windowContentBorderStyle: "$$borderStyle",
windowContentBorderColor: "$$dividerColor",
historyClockColor: "#999",
historyClockHoverColor: "#666",
menuColor: "$$contentColor",
menuBg: "$$inputMenuBg",
menuBorderWidth: "$$borderWidth",
menuBorderStyle: "$$borderStyle",
menuBorderColor: "$$dividerColor",
menuRadius: "$$radius",
menuShadow: "$$windowShadow",
menuHeaderColor: "$$placeholderColor",
menuItemPadding: "3px 20px",
menuItemHoverBg: o.grey,
titleBarHeight: "24px",
titleBarPaddingBefore: "60px",
titleBarPaddingAfter: "60px",
titleBarFontSize: "$$fontSizeS",
titleBarColor: "$$headLowContrastColor",
titleBarBg: "$$headBg",
titleBarBorderWidth: "",
titleBarBorderStyle: "$$borderStyle",
titleBarBorderColor: "$$borderColor",
titleBarFontWeight: "bold",
titleBarTextAlign: "center",
actionBarWidth: "100%",
actionBarHeight: "24px",
actionBarColor: o.grey,
actionBarColorDiabled: "#AAA",
actionBarBg: "$$windowContentBg",
actionBarBorderWidth: "",
actionBarBorderStyle: "$$borderStyle",
actionBarBorderColor: "$$borderColor",
actionBarPadding: "10px",
actionBarHoverColor: "",
chatPanelProfileCardContainerHeight: "50px",
chatPanelProfileCardContainerBackground: "",
chatPanelProfileCardContainerBorderWidth: "",
chatPanelProfileCardContainerBorderStyle: "$$borderStyle",
chatPanelProfileCardContainerBorderColor: "$$borderColor",
chatPanelProfileCardAvatarBorderWidth: "",
chatPanelProfileCardAvatarBorderStyle: "",
chatPanelProfileCardAvatarBorderColor: "",
chatPanelProfileCardAvatarRadius: "",
chatPanelProfileCardAvatarShadow: "",
chatLogMargin: "$$margin",
chatLogVisitorNameColor: "$$contentHeaderColor",
chatLogVisitorBubbleBg: "",
chatLogVisitorBubbleBorderWidth: "$$borderWidth",
chatLogVisitorBubbleBorderStyle: "$$borderStyle",
chatLogVisitorBubbleBorderColor: "$$borderColor",
chatLogAgentNameColor: "$$contentHeaderColor",
chatLogAgentBubbleBg: "",
chatLogAgentBubbleBorderWidth: "$$borderWidth",
chatLogAgentBubbleBorderStyle: "$$borderStyle",
chatLogAgentBubbleBorderColor: "$$borderColor",
chatLogAvatarBorderWidth: "",
chatLogAvatarBorderStyle: "",
chatLogAvatarBorderColor: "",
chatLogAvatarRadius: "",
chatLogAvatarShadow: "",
chatLogSystemMsgColor: "$$placeholderColor",
chatLogSystemMsgBg: "",
chatLogSystemMsgBorderWidth: 0,
chatLogSystemMsgBorderStyle: "$$borderStyle",
chatLogSystemMsgBorderColor: "$$borderColor",
chatLogSystemMsgPadding: "",
chatLogDateDividerColor: "$$placeholderColor",
chatLogDateDividerFontWeight: "",
chatLogFileProgressBg: "$$headBg",
chatTextAreaBorderWidth: "",
chatTextAreaBorderStyle: "$$borderStyle",
chatTextAreaBorderColor: "$$borderColor",
chatTextAreaPadding: "10px 10px 0",
chatTextAreaInputFontSize: "",
chatTextAreaInputMinHeight: "42px",
chatTextAreaInputMaxHeight: "64px",
chatTextAreaInputLineHeight: "",
chatTextAreaInputColor: "",
chatTextAreaInputBg: "",
chatTextAreaInputBorderWidth: "",
chatTextAreaInputBorderStyle: "",
chatTextAreaInputBorderColor: "",
chatTextAreaInputPadding: "",
chatTextAreaInputRadius: "",
chatTextAreaInputShadow: "",
chatTextAreaInputFocusColor: "",
chatTextAreaInputFocusBg: "",
chatTextAreaInputFocusBorderColor: "",
chatTextAreaInputFocusShadow: "",
chatTextAreaSubmitMargin: "6px",
chatTextAreaSubmitPadding: "5px 10px",
chatTranslationSwitchColor: o.grey,
chatTextAreaDropColor: "",
chatTextAreaDropBg: "",
chatTextAreaDropBorderWidth: "",
chatTextAreaDropBorderStyle: "",
chatTextAreaDropBorderColor: "",
agentBubbleBg: "",
visitorBubbleBg: "",
badgeBg: "",
badgeBorderWidth: "",
badgeBorderStyle: "$$borderStyle",
badgeBorderColor: "$$borderColor",
badgeContentColor: "$$headColor",
badgeContentBg: "",
badgeContentBorderWidth: "$$borderWidth",
badgeContentBorderStyle: "$$borderStyle",
badgeContentBorderColor: "$$borderColor",
badgeFormHeight: "36px",
badgeFormBg: "",
badgeFormBorderWidth: "$$borderWidth",
badgeFormBorderStyle: "$$borderStyle",
badgeFormBorderColor: "$$borderColor",
badgeInputColor: "",
badgeInputBorderWidth: "",
badgeInputBorderStyle: "",
badgeInputBorderColor: "",
badgeInputPadding: "$$paddingXL",
badgeInputRadius: "$$radius",
badgeInputShadow: "",
badgeInputFocusColor: "",
badgeInputFocusBg: "",
badgeInputFocusBorderColor: "",
badgeInputFocusShadow: "",
badgeInputPlaceholderColor: "",
badgeIconColor: ""
},
popout: {
windowRadius: 0
},
mobile: {
fontSizeXS: "12px",
fontSizeS: "13px",
fontSize: "14px",
fontSizeL: "16px",
fontSizeXL: "18px",
fontSizeXXL: "20px",
mobileMaxWidthS: "360px",
mobileMaxWidth: "480px",
mobileMaxWidthL: "640px",
inputPadding: "$$paddingXL",
buttonPadding: "$$paddingXL",
menuItemPadding: "14px",
titleBarHeight: "44px",
actionBarWidth: "$$titleBarHeight",
actionBarHeight: "$$titleBarHeight",
menuRadius: 0,
brandingLinkColor: o.grey
}
};
};
t.exports = r;
}, function(t, e) {
function i(t) {
return window[t];
}
var n = {
getVariable: i
};
t.exports = n;
}, function(t, e, i) {
function n(t, e) {
c = t;
h = e;
c.$("livechat").$("channel").$("department_id$int").on("value", function(t) {
t && (f = t);
});
}
function o() {
f = void 0;
}
function r(t, e, i) {
var n = parseInt(e, 10) || parseInt(h.getServerTime().toFixed(0), 10), o = n + "", r = c.$("livechat").$("profile"), a = f, s = (t.msg || "") + "";
"department" in t && (a = t.department);
c.$("livechat").$("channel").$("log").$(o).write({
timestamp$int: n,
type$string: "chat.msg",
msg$string: s,
nick$string: r.$("nick$string").getValue() || "",
display_name$string: r.$("display_name$string").getValue() || "",
department_id$int: a,
unverified$bool: !0,
__client$bool: !0
}, i);
}
function a(t, e) {
var i = parseInt(e, 10) || parseInt(h.getServerTime().toFixed(0), 10), n = i + "";
c.$("livechat").$("channel").$("log").$(n).write({
timestamp$int: i,
nick$string: c.$("livechat").$("profile").$("nick$string").getValue() || "",
display_name$string: c.$("livechat").$("profile").$("display_name$string").getValue() || "",
type$string: "chat.file.upload",
file_name$string: t.file_name || "",
file_type$string: t.file_type || "",
file_size$int: t.file_size || 0,
unverified$bool: !0,
__client$bool: !0
});
return i;
}
function s(t, e) {
function i(t) {
if ("ok" !== t.raw.__status) return e(new window.Error(u(t.raw.error)));
if (!t.raw.data || "chat.file" !== t.raw.data.type) return e(new window.Error("INTERNAL_ERROR"));
e(null, x.pick(t.raw.data, [ "mime_type", "name", "size", "url", "metadata" ]));
}
var n = j._validateAndPrepareData([ t ]);
e = m.once(e);
if (g(n)) p(function() {
e(new window.Error(n));
}); else {
var o = h.registerCallback(i), r = "https://" + n.host + $.CALLBACK_FILE_UPLOAD_PATH, a = {
ts: parseInt(h.getServerTime().toFixed(0), 10),
__messageID: o,
__socketID: h.getSocketID()
}, s = {
"X-Zopim-MID": n.mid,
"X-Zopim-UID": n.uid
}, _ = {
error: function() {
e(new window.Error("CONN_ERROR"));
},
load: function() {
if (200 !== this.status) {
var t;
try {
t = JSON.parse(this.responseText);
} catch (t) {}
e(t && t.error ? new window.Error(u(t.error)) : new window.Error("INTERNAL_ERROR"));
}
}
};
j._uploadFiles(n.form_data, r, a, s, _);
}
}
function _(t, e) {
var i = j._validateAndPrepareData(t);
if (g(i)) return i;
var n = a({
file_name: i.name,
file_type: i.type,
file_size: i.size
}, e), o = "https://" + i.host + $.FILE_UPLOAD_PATH, r = {
ts: n
}, s = {
"X-Zopim-MID": i.mid,
"X-Zopim-UID": i.uid
};
j._uploadFiles(i.form_data, o, r, s);
}
function l(t) {
if (!window.FormData) return "NOT_SUPPORTED";
var e = c.$("livechat"), i = e.$("settings").$("file_sending"), n = e.$("settings").$("package"), o = i.$("enabled$bool").getValue(), r = (i.$("allowed_extensions$string").getValue() || "").trim().replace(/\s*,\s*/g, ",").split(","), a = n.$("color_customization_enabled$int").getValue() || n.$("widget_customization_enabled$int").getValue(), s = e.$("profile").$("mid$string").getValue(), _ = e.$("profile").$("uid$string").getValue(), l = h.getHost(), d = new window.FormData(), u = [], f = [], g = 0;
if (!l) return "CONN_ERROR";
if (!a) return "INVALID_PLAN";
if (!o) return "NOT_ALLOWED";
for (var p = 0, m = t.length; p < m; p++) {
if (!b.isValidType(t[p].name, r)) return "INVALID_EXTENSION";
u.push(t[p].name);
f.push(t[p].type);
g += t[p].size || 0;
d.append("file_" + t[p].name, t[p]);
}
return g > $.FILE_UPLOAD_MAX ? "EXCEED_SIZE_LIMIT" : {
form_data: d,
name: u.join(", "),
type: f.join(", "),
size: g,
host: l,
mid: s,
uid: _
};
}
function d(t, e, i, n, o) {
var r = new window.XMLHttpRequest(), a = e + (Object.keys(i).length ? "?" + w.buildQuery(i) : "");
if (r.upload) {
r.open("POST", a, !0);
for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && r.setRequestHeader(s, n[s]);
for (var _ in o) Object.prototype.hasOwnProperty.call(o, _) && r.addEventListener(_, o[_]);
r.send(t);
}
}
function u(t) {
return y[t] || "UNKNOWN_ERROR";
}
var c, h, f, g = i(22), p = i(16), m = i(55), $ = i(18), b = i(63), w = i(36), x = i(11), v = {
NOT_SUPPORTED: "NOT_SUPPORTED",
NOT_ALLOWED: "NOT_ALLOWED",
CONN_ERROR: "CONN_ERROR",
INVALID_EXTENSION: "INVALID_EXTENSION",
INVALID_PLAN: "INVALID_PLAN",
EXCEED_SIZE_LIMIT: "EXCEED_SIZE_LIMIT",
INTERNAL_ERROR: "INTERNAL_ERROR",
UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, y = {
TOO_LARGE: "EXCEED_SIZE_LIMIT",
ILLEGAL_TYPE: "INVALID_EXTENSION",
NO_SESSION: "INTERNAL_ERROR",
UNEXPECTED_ERROR: "INTERNAL_ERROR",
UNABLE_TO_GET_SETTINGS: "INTERNAL_ERROR",
S3_UPLOAD_ERROR: "INTERNAL_ERROR",
NO_GATES: "INTERNAL_ERROR",
FILE_UPLOADS_DISABLED: "NOT_ALLOWED",
FILE_UPLOADS_TEMPORARILY_DISABLED: "INVALID_PLAN"
}, j = {
FILE_SENDING_ERRORS: v,
init: n,
sendChatMsg: r,
sendFiles: _,
sendFileWithCallback: s,
clearChatDepartmentID: o,
_validateAndPrepareData: l,
_uploadFiles: d
};
t.exports = j;
}, function(t, e, i) {
function n(t) {
g = t || window;
h = g.encodeURIComponent;
f = g.decodeURIComponent;
}
function o(t) {
return "string" == typeof t && "" != t;
}
function r() {
var t, e, i, n, o = g.document.cookie, r = {};
if (!o || "string" != typeof o) return {};
o = o.split(/;\s/);
for (t = o.length; t--; ) try {
e = o[t].match(/^([^=]+)(=(.*))?$/);
if (!e) continue;
i = f(e[1]);
n = f(e[3] || "");
r[i] = n;
} catch (t) {}
return r;
}
function a(t) {
return o(t) ? r()[t] || null : null;
}
function s(t) {
var e = a(t), i = {};
try {
i = u.parse(e);
} catch (t) {}
return i && "object" == typeof i ? i : {};
}
function _(t, e, i) {
i = i || {};
var n = h(t) + "=" + h(e);
if ("ttl" in i) {
var o = new Date(), r = 24 * i.ttl * 60 * 60 * 1e3;
o.setTime(o.getTime() + r);
n += "; expires=" + o.toGMTString();
}
"path" in i && (n += "; path=" + i.path);
"domain" in i && (n += "; domain=" + i.domain);
i.secure && (n += "; secure");
n += "; SameSite=" + (i.samesite || "Lax");
g.document.cookie = n;
}
function l(t, e, i) {
"object" != typeof e && (e = {});
_(t, u.stringify(e), i);
}
function d(t, e) {
e = e || {};
e.ttl = -1;
_(t, "", e);
}
var u = i(56), c = {
set: _,
get: a,
getJSONCookie: s,
setJSONCookie: l,
remove: d,
setActivityWindow: n
}, h = window.encodeURIComponent, f = window.decodeURIComponent, g = window;
t.exports = c;
}, function(t, e, i) {
function n(t, e, i, o, u) {
var c, h, f, g, p, m, $ = [], b = [];
for (c in t) if (t.hasOwnProperty(c)) {
h = t[c];
f = void 0;
if ("@keyframes" == c) {
for (var w in h) if (h.hasOwnProperty(w)) {
m = w + " { " + n(h[w]).join(" ") + " } ";
b.push("@-webkit-keyframes " + m, "@-moz-keyframes " + m, "@-ms-keyframes " + m, "@-o-keyframes " + m, "@keyframes " + m);
}
continue;
}
"@media" == c.slice(0, 6) && (c = [ c, "@mediaend" ].join(""));
switch (typeof h) {
case "boolean":
case "number":
case "string":
f = c.split(",");
for (g = 0, p = f.length; g < p; g++) $.push(r.toStyle(f[g], h));
break;

default:
if (a(h)) {
for (g = 0, p = h.length; g < p; g++) $.push(r.toStyle(c, h[g]));
break;
}
if (_.placeholder.test(c)) {
m = c.replace(_.placeholder, "");
f = [];
for (g = 0, p = l.placeholder.length; g < p; g++) f.push(d([ m, l.placeholder[g] ]));
}
a(f) || (f = c.split(","));
for (g = 0, p = f.length; g < p; g++) b = b.concat(n(h, f[g].trim()));
}
}
if ($.length) {
if (!u) {
$.unshift("{");
$.push("}");
}
b.push($.join(""));
}
if (e || i || o && !(s.isIE < 9)) for (g = 0, p = b.length; g < p; g++) {
e && (b[g] = [ e.replace(_.replacePseudo, ".$1"), " ", b[g] ].join(""));
i && (b[g] = b[g].replace(_.prePrependFQName, " ").replace(_.prependFQName, i));
o && (b[g] = b[g].replace(_.replaceAppend, ""));
o && -1 !== b[g].indexOf("@media") && (b[g] = b[g].replace(_.replaceMedia, "$2 { $1 $3 }"));
}
return b;
}
var o = i(97), r = i(179), a = i(21), s = i(8), _ = o.REGEX, l = {
placeholder: [ "::-webkit-input-placeholder", ":-moz-placeholder", "::-moz-placeholder", ":-ms-input-placeholder", ".placeholder" ]
}, d = o.join;
t.exports = n;
}, function(t, e, i) {
function n() {
n = function() {};
for (var t = [ "Moz", "webkit", "ms" ], e = document.createElement("div").style, i = p.length; i--; ) {
var r = p[i];
m[r] = function(i) {
if (i in e) return i;
for (var n = i.charAt(0).toUpperCase() + i.slice(1), r = t.length; r--; ) {
if (t[r] + n in e) return "-" + t[r].toLowerCase() + "-" + o(i);
}
return i;
}(r);
}
}
function o(t) {
return t.replace(f.selectorCase, "-$1").replace(f.commaStart, "").toLowerCase();
}
function r(t, e) {
n();
var i;
e += "";
if (f.isVariable.test(e)) return t + ":" + e + ";";
if ("!important" === e.substr(-10)) {
i = !0;
e = e.substr(0, e.length - 10).trim();
}
switch (!0) {
case "background" === t:
return s(e, i);

case "display" === t:
return h.bugs.noBoxSizing && "inline-block" == e ? "" + a("display", "inline", i) + a("zoom", "1", i) : a("display", e, i);

case t in m:
return a(m[t], e, i);

default:
return a(o(t), e, i);
}
}
function a(t, e, i) {
return t + ":" + e + (i ? "!important;" : ";");
}
function s(t, e) {
var i, n = [];
i = t.split(" ");
switch (i[0]) {
case "linear-gradient":
i.splice(0, 1);
t = i.join(" ");
n.push(a("background", "-webkit-linear-gradient" + t, e), a("background", "-o-linear-gradient" + t, e), a("background", "-moz-linear-gradient" + t, e), a("background", "-ms-linear-gradient" + t, e), a("background", "-linear-gradient" + t, e));
break;

case "gradient":
var o, r;
n.push(a("background", _(i[2], i[3]), e));
"top" == i[1] && (o = "bottom");
"left" == i[1] && (o = "right");
"right" == i[1] && (o = "left");
"bottom" == i[1] && (o = "top");
r = $([ "(", i[1], ",", i[2], ",", i[3], ")" ]);
n.push(a("background", "-o-linear-gradient" + r, e), a("background", "-moz-linear-gradient" + r, e), a("background", "-ms-linear-gradient" + r, e), a("background", "linear-gradient" + r, e));
if ("left" == i[1] || "right" == i[1]) {
n.push(a("background", $([ "-webkit-gradient(linear,", i[1], " center,", o, " center,", "from(", i[2], "),to(", i[3], "))" ])));
r = $([ "progid:DXImageTransform.Microsoft.gradient(startColorstr=", l(i[2]), ", endColorstr=", l(i[3]), ", GradientType=1)" ]);
n.push(a("filter", r, e), a("-ms-filter", r, e));
} else {
n.push(a("background", $([ "-webkit-gradient(linear,", "center ", i[1], ",", "center ", o, ",", "from(", i[2], "),to(", i[3], "))" ])));
r = $([ "progid:DXImageTransform.Microsoft.gradient(startColorstr=", l(i[2]), ", endColorstr=", l(i[3]), ")" ]);
n.push(a("filter", r, e), a("-ms-filter", r, e));
}
break;

default:
n.push(a("background", t, e));
}
return n.join("");
}
function _(t, e) {
function i(i) {
return (16 * Math.round((parseInt(t.substring(i, i + 2), 16) + parseInt(e.substring(i, i + 2), 16)) / 32)).toString(16);
}
"rgb" == t.slice(0, 3) && (t = d(t, !0));
"rgb" == e.slice(0, 3) && (e = d(e, !0));
t = l(t).substring(1);
e = l(e).substring(1);
return "#" + i(0) + i(2) + i(4);
}
function l(t) {
if ("string" != typeof t) return "";
var e;
e = "#" == t.charAt(0) ? t.substring(1) : t;
if ("rgb" == e.slice(0, 3)) return d(e);
3 == e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2));
return "#" + e;
}
function d(t, e) {
t = t.slice(5, -1);
t = t.split(",");
if (3 == t.length || e) return "#" + u(t[0]) + u(t[1]) + u(t[2]);
t[3] = (255 * parseFloat(t[3], 10)).toFixed();
return "#" + u(t[3]) + u(t[0]) + u(t[1]) + u(t[2]);
}
function u(t) {
t = parseInt(t, 10).toString(16);
1 == t.length && (t = "0" + t);
return t;
}
var c = i(97), h = i(8), f = c.REGEX, g = {
toStyle: r
}, p = [ "animation", "userSelect", "appearance", "transform", "transformOrigin" ], m = {}, $ = c.join;
t.exports = g;
}, function(t, e, i) {
function n(t, e, i, n) {
t || (t = document);
var r = o(t, e);
if (r) if (n) r.styleSheet ? r.styleSheet.cssText = i : r[s ? "textContent" : "innerText"] = i; else if (r.styleSheet) r.styleSheet.cssText = [ r.styleSheet.cssText, i ].join(""); else {
var a = t.createTextNode(i);
r.appendChild(a);
} else {
r = t.createElement("style");
t.getElementsByTagName("head")[0].appendChild(r);
r.type = "text/css";
e && r.setAttribute("__jx__stylesheet_id", e);
if (void 0 !== r.styleSheet) {
if (!r.styleSheet) {
t.getElementsByTagName("head")[0].removeChild(r);
r = null;
return;
}
r.styleSheet.cssText = i;
} else r[s ? "textContent" : "innerText"] = i;
}
}
function o(t, e) {
if (e) {
t || (t = document);
for (var i = 0, n = t.styleSheets.length; i < n; i++) if ((t.styleSheets[i].ownerNode && t.styleSheets[i].ownerNode.getAttribute("__jx__stylesheet_id") || t.styleSheets[i].owningElement && t.styleSheets[i].owningElement.getAttribute("__jx__stylesheet_id")) == e) return t.styleSheets[i].ownerNode && t.styleSheets[i].ownerNode || t.styleSheets[i].owningElement && t.styleSheets[i].owningElement;
}
}
var r = i(8), a = {
setStyleSheet: n
}, s = r.isTextContent;
t.exports = a;
}, function(t, e, i) {
function n(t) {
for (var e = 0, i = h.length; e < i; e++) if (t === h[e]) return;
h.push(t);
for (var n in l.cache) l.cache.hasOwnProperty(n) && d.setStyleSheet(t.idoc, "jcss" + n, l.cache_replaced[n]);
}
function o(t) {
for (var e = 0, i = h.length; e < i; e++) t === h[e] && h.splice(e, 1);
}
function r(t) {
_ = u(t);
}
function a() {
return _;
}
function s() {
return h;
}
var _, l = i(96), d = i(180), u = i(12), c = {
bindIFrame: n,
unbindIFrame: o,
setIFrameOnly: r,
getIFrameOnly: a,
getIFrames: s
}, h = [];
t.exports = c;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
var s = t.ownerDocument;
r || (r = {});
r.tagName || (r.tagName = "style");
a.call(this, s.getElementsByTagName("head")[0], e, i, null, r);
this.dom.type = "text/css";
this.addChildren(o);
}
var o = i(1), r = i(0), a = i(7);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_StyleSheet"
});
n.prototype.getText = function() {
return this.dom.styleSheet ? this.dom.styleSheet.cssText : a.prototype.getText.call(this);
};
n.prototype.addChildren = function(t) {
if (t && t.length) if ("styleSheet" in this.dom) {
if (!this.dom.styleSheet) {
this.destroy();
return;
}
this.dom.styleSheet.cssText += t.join("");
} else a.prototype.addChildren.call(this, [ t.join("") ]);
};
t.exports = n;
}, function(t, e, i) {
function n(t) {
t.preventDefault = n.preventDefault;
t.stopPropagation = n.stopPropagation;
t.target = t.srcElement;
}
function o() {
this.allCallbacks = {};
this.nativeHandlers = {};
}
var r = i(8), a = i(14);
n.preventDefault = function() {
this.returnValue = !1;
};
n.stopPropagation = function() {
this.cancelBubble = !0;
};
var s = {};
o.prototype.useCustomHandling = function(t) {
if (!this.dom.nodeType && this.dom != window && this.dom != document) return !0;
if ("form" == this.tagName.toLowerCase() && "submit" == t) return !1;
var e = s[this.tagName];
e || (e = s[this.tagName] = {});
"boolean" != typeof e[t] && (e[t] = void 0 === this.dom["on" + t]);
return e[t];
};
o.prototype.addEventListener = function(t, e) {
if (!t && "function" != typeof e) throw "bad arguments to on / addEventListener";
if (!(t in this.allCallbacks)) {
this.allCallbacks[t] = [];
this.useCustomHandling(t) || this.setupNativeEventListener(t);
}
this.allCallbacks[t].push(e);
return this;
};
o.prototype.setupNativeEventListener = function(t) {
if (!(t in this.nativeHandlers)) {
var e = this;
this.nativeHandlers[t] = function(i) {
i && (i.stopPropagation || n(i));
var o, s = e.allCallbacks[t], _ = s.length, l = !0;
s._active = !0;
for (o = 0; o < _; o++) try {
if (!s[o]) continue;
!1 === s[o].call(e, r.isCustomEvents && i instanceof r.CustomEvent ? i.detail : i) && (l = !1);
} catch (t) {
a.fire("error", t);
}
s._active = !1;
if (s._dirty) {
for (o = 0; o < _; o++) if (!s[o]) {
o == _ - 1 ? s.pop() : s[o--] = s.pop();
_--;
}
s._dirty = !1;
}
if (!1 === l) {
if (i) {
i.preventDefault();
i.returnValue = !1;
}
return !1;
}
};
this.dom.attachEvent ? this.dom.attachEvent("on" + t, this.nativeHandlers[t]) : this.dom.addEventListener && this.dom.addEventListener(t, this.nativeHandlers[t], !1);
}
};
o.prototype.teardownNativeEventListener = function(t) {
var e = this.nativeHandlers[t];
if (e) {
this.dom.attachEvent ? this.dom.detachEvent("on" + t, e) : this.dom.addEventListener && this.dom.removeEventListener(t, e, !1);
delete this.nativeHandlers[t];
delete this.allCallbacks[t];
}
};
o.prototype.removeEventListener = function(t, e) {
var i = this.allCallbacks[t];
if (i) {
for (var n = 0, o = i.length; n < o; n++) if (i[n] === e) {
1 == i.length ? this.nativeHandlers[t] ? this.teardownNativeEventListener(t) : delete this.allCallbacks[t] : i._active ? (i[n] = null, 
i._dirty = !0) : n == o - 1 ? i.pop() : i[n] = i.pop();
break;
}
return this;
}
};
o.prototype.unextendEvents = function() {
if (this.allCallbacks && this.nativeHandlers) {
for (var t in this.nativeHandlers) this.nativeHandlers.hasOwnProperty(t) && this.teardownNativeEventListener(t);
this.allCallbacks = this.nativeHandlers = null;
}
};
o.prototype.fireCustomEvent = function(t, e) {
if (!r.isCustomEvents || this.useCustomHandling(t)) {
var i = this.allCallbacks[t], n = !0;
if (i && i.length) {
i._active = !0;
var o, s, _;
for (o = 0, s = i.length; o < s; o++) try {
if (!i[o]) continue;
_ = i[o].call(this, e);
!1 === _ && (n = !1);
} catch (t) {
a.fire("error", t);
}
i._active = !1;
if (i._dirty) {
for (o = 0; o < s; o++) if (!i[o]) {
o == s - 1 ? i.pop() : i[o--] = i.pop();
s--;
}
i._dirty = !1;
}
}
return n;
}
return this.dom.dispatchEvent(new r.CustomEvent(t, {
bubbles: !1,
cancelable: !0,
detail: e
}));
};
o.prototype.fire = o.prototype.fireCustomEvent;
o.prototype.on = o.prototype.addEventListener;
o.prototype.un = o.prototype.removeEventListener;
t.exports = o;
}, function(t, e) {
function i(t) {
t = t.split(/[^a-zA-Z0-9]/);
for (var e = 1; e < t.length; e++) t[e].length && (t[e] = t[e].substr(0, 1).toUpperCase() + t[e].substr(1));
return t.join("");
}
var n = {
toCamelCase: i
};
t.exports = n;
}, function(t, e, i) {
function n(t) {
var e, i, n = r.extend(this);
try {
e = new window.ActiveXObject("htmlfile");
e.open();
e.write("<script>document.win = window</script>");
e.close();
i = e.win;
} catch (t) {}
if (!i) {
var o = this.iframe = document.createElement("iframe"), s = o.style;
n.allowTransparency = "true";
n.frameBorder = "0";
s.backgroundColor = "transparent";
s.position = "absolute";
s.width = s.height = "1px";
s.left = s.top = "-9999px";
s.border = 0;
document.body.appendChild(o);
try {
i = o.contentWindow;
e = i.document;
e.open();
e.close();
} catch (t) {
n.fire("error");
n.destroy();
return;
}
}
n.doc = e;
n.win = i;
n.$Loader = {
cleanup: function() {
a(function() {
n.$Loader.payload ? n.fire("success", n.$Loader.payload) : n.fire("error");
n.$Loader.payload = null;
t || n.destroy();
});
}
};
n.reusable = t;
}
function o(t) {
return t && t.replace(s, function(t) {
return "&#" + t.charCodeAt(0) + ";";
});
}
var r = i(14), a = i(16);
n.prototype.setScope = function(t) {
this.scope = t;
};
var s = /[&<>"']/g;
n.prototype.load = function(t) {
if (/^(?:https?:)?\/\//i.test(t)) {
t = o(t);
try {
this.doc.open();
this.win.$Loader = this.$Loader;
this.win.$Loader.scope = this.scope || {};
this.doc.write('<html><head><script src="' + t + '"></script><script>document.addEventListener && document.addEventListener("DOMContentLoaded", function() {try { $Loader.cleanup() } catch(e) {}})</script></head><body></body></html>');
this.doc.close();
} catch (t) {
this.$Loader.cleanup();
}
} else this.$Loader.cleanup();
};
n.prototype.destroy = function() {
try {
this.iframe && document.body.removeChild(this.iframe);
this.doc = this.win = this.iframe = this.win.$Loader = null;
} catch (t) {}
};
t.exports = n;
}, function(t, e, i) {
function n(t, e) {
var i = s[t];
i.module_function = new Function("$Modules", e.toString().replace(u, "$1"));
i.ready();
}
function o(t) {
var e, i, n, o;
for (e = d.length - 1; e >= 0; e--) {
n = d[e];
o = n.dependencies;
for (i = o.length - 1; i >= 0; i--) if (o[i] == t) {
o.splice(i, 1);
break;
}
n.ready();
}
}
function r() {
var t = Array.prototype.slice.call(arguments), e = t.shift();
this.fqname = e;
this.name = e.split(".").pop();
this.callbacks = [];
this.dependencies = t;
d.push(this);
}
function a(t) {
t();
}
var s = i(5), _ = i(45), l = i(388), d = [], u = /^function *\( *\) *{ *([\s\S]*) *}$/;
r.ensureLoaded = function(t, e) {
t instanceof r ? t.ensureLoaded(e) : e();
};
r.prototype.ensureLoaded = function(t) {
this.ifLoaded(t);
this.load();
};
r.prototype.ifLoaded = function(t) {
this.callbacks.push(t);
};
r.prototype.load = function() {
function t(t) {
n(t[0], t[1]);
}
var e, i, o = this.getDependencies();
for (e = 0; e < o.length; e++) {
i = o[e];
i.loader || (i.loader = new l(_.baseURL + "/lib/" + _.build_number + "/" + i.fqname + ".js", s, t));
}
};
r.prototype.getDependencies = function() {
var t, e = this.dependencies, i = [ this ];
for (t = 0; t < e.length; t++) {
var n = s[e[t]];
i = i.concat(n.getDependencies());
}
return i;
};
r.prototype.ready = function() {
if (!this.dependencies.length && this.module_function) {
for (t = d.length - 1; t >= 0; t--) if (d[t] == this) {
d.splice(t, 1);
break;
}
this.module_function(s);
var t, e = s[this.fqname];
e.ifLoaded = e.ensureLoaded = a;
for (t = 0; t < this.callbacks.length; t++) this.callbacks[t](e);
o(this.fqname);
delete this.callbacks;
delete this.fqname;
delete this.name;
delete this.dependencies;
delete this.loader;
}
};
s.Module = r;
t.exports = r;
}, function(t, e, i) {
function n() {
if (!d) {
a = c.root.$("livechat");
s = a.$("settings").$("theme").$("chat_window").$("profile_card");
_ = a.$("ui").$("chat_window").$("display_profile_card$bool");
l = a.$("settings").$("rating").$("enabled$bool");
s.bindValue(o);
l.bindValue(o);
d = !0;
}
}
function o() {
var t = u(s.getValue("display_avatar$bool")), e = u(s.getValue("display_title_name$bool")), i = u(s.getValue("display_rating$bool")) && u(l.getValue()), n = t || i || e;
_.update(n);
}
function r() {
d = !1;
}
var a, s, _, l, d, u = i(12), c = i(6), h = {
init: n,
resetState: r
};
t.exports = h;
}, function(t, e) {
function i(t, e) {
var i = e.match(t);
return i ? i.length : 0;
}
function n(t, e, n, o) {
return Math.pow(i(t, e) / n, 1 / o);
}
function o(t) {
var e, i = 1 - t[0];
for (e = 1; e < t.length; e++) i *= 1 - t[e];
return 1 - i;
}
function r(t, e, r) {
r || (r = i(/ /g, e));
for (var a, s, _, d, u = e.length, c = [], h = 0; h < l[t].length; h += 2) {
a = l[t][h];
s = l[t][h + 1];
_ = "\\\\b" == a.toString().substr(1, 2) ? r : u;
d = n(a, e, _, s);
c.push(d);
}
"en" == t && c.push(.6 / e.length);
return o(c);
}
function a(t, e) {
var n = document.body.getAttribute("lang") || document.documentElement.getAttribute("lang");
if (n) return n;
t || (t = _);
e || (e = document.body.innerHTML.replace(/\s+/g, " ").replace(/<script[^>]*?>.*?<\/script>/gi, " ").replace(/<style[^>]*?>.*?<\/style>/gi, " ").replace(/<!--.*?-->/g, " ").replace(/<\/?[^>]+?>/g, " ").replace(/[-_a-z0-9.@]+[.@][-_a-z0-9.@]+/gi, "").replace(/[\s\d!'#$%&'()*+,-.\/:;<=>?@^_{|}~\[\]\/]+/g, " "));
e = e.replace(/\s+/g, " ");
var o, a, s = i(/ +/g, e), l = [];
for (o = 0; o < t.length; o++) l.push([ t[o], r(t[o], e, s) ]);
l.sort(function(t, e) {
return e[1] - t[1];
});
a = l[0][0];
a.scores = l;
window.__$z_results = s + " " + e.length + " " + e.length / s + "\n" + l.join("\n");
window.__$z_innerText = e;
return a;
}
var s = {
guess: a
}, _ = [], l = {
en: [ /\b(up|me|submit|offers?|about|rights?|more|contact|all|downloads?|how|search|to|do|i[nst]?|your?|that|was|one?|are|with|[bw]e|have|this|f?or|had|by|[hn]ot?|[bo]ut|so|some|what|can|[tw]here|why|other|over|die|ten)\b/gi, 4, /\b(inn|set|end|about|pro|the|of|from|and|a|as|at)\b/gi, 6 ],
cs: [ /[\u00e1\u010d\u010f\u00e9\u011b\u00ed\u0148\u00f3\u0159\u0161\u0165\u00fa\u016f\u00fd\u017e]/gi, 5, /\b(by|do|to|[aikosvz])\b/gi, 3, /\b(na|za|se|je|\u017ee|ve|jako|jsem|pro|tak|po|u\u017e|jsou|byl)\b/gi, 6 ],
de: [ /[\u00df]/g, 10, /[\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc]/g, 7, /\b(de[mrs]|vo[nm]|zu[mr]?|da[s\u00df]?|eine[mnrs]?|a[lu]s|wir|[sw]ie|n[ao]ch|vor[ms]?|(\u00fcb|od|ab)er|und|im|mit|sich|auf|f\u00fcr|nicht|auch|es|bei|nur|bis|mehr|durch)\b/gi, 6 ],
es: [ /[\u00f1]/g, 10, /[\xE1\xE9\xED\xF3\xFA]/gi, 6, /\b(que|nuestro|ingresar|inicio|qu[e\u00e9]|[dt]e|ser?|[ms]i|l?a|e[lns]|y|tu|los?|una?|por|con|para|est(\u00e1|ar))\b/gi, 6 ],
fr: [ /[\u0153]/gi, 15, /[\u00e0\u00e2\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00fb\u00f9\u00fc\u00ff]/gi, 7, /\b(son)\b/gi, 4, /\b(en)\b/gi, 5, /\b([ado]u|aux?|[do]u|la|[cdls]es|es?t|une?|ne|qu[ei]|sur|dans|pa[rs]|il|sont|avec|voir)\b/gi, 6 ],
hr: [ /[\u010d\u0107\u0111\u0161\u017e]/gi, 10, /d\u017e|lj|nj/gi, 3, /\b(ali|ja|je|mene|na|ne|od|ovo|se|sve|ti|u|za|znati)\b/gi, 6 ],
ms: [ /\b(and)\b/gi, 4, /\b((se)?(biji|buah|orang)|ada|anda|atau|boleh|bukan|dalam|dan|dari|di|ini|kami|ke|lagi|sila|tidak|tinggi|telah|untuk)\b/gi, 6 ],
da: [ /[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g, 10, /\b(de)\b/gi, 5, /\b(ind|l\u00e6s|nyheder|[vt]il|s?om|og|[mv]ed|kan|har|var|tager|af|d?et|de[tn]{2}e|skal|den|set|noget|nogle|mange|hadde|eller|efter|end|blive|er|sekund|viser|ud|(a|vi|sku)lle)\b/gi, 6 ],
nb: [ /[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g, 10, /\b(de)\b/gi, 5, /\b(passord|nyheter|inn|[vt]il|s?om|og|[mv]ed|kan|[htv]ar|av|d?et|de[tn]{2}e|skal|se(g|tt)|noen?|mange|hadde|e[lt]{2}er|enn|blir?|ble|andre|viser|ut|(a|vi|sku)lle)\b/gi, 6 ],
nl: [ /\b(in|die)\b/gi, 4, /\b(de|en)\b/gi, 5, /\b(het|dat|van|ik|te|een|hij|niet|zijn)\b/gi, 6 ],
pt: [ /[\u00e1\u00e2\u00e3\u00e0\u00e7\u00e9\u00ea\u00ed\u00f3\u00f4\u00f5\u00fa]/gi, 7, /\b(gr\u00e1fico|ao|como|das?|de|dos|ele|em?|mai?s|na|n\u00e3o|os?|para|por|que|se|uma?)\b/gi, 6 ],
sk: [ /\u00e1\u00e4\u010d\u010f\u00e9\u00ed\u013e\u013a\u0148\u00f3\u00f4\u0155\u0161\u0165\u00fa\u00fd\u017e/gi, 10, /dz|d\u017e/gi, 5, /\b(ten|to|do|so)\b/gi, 4, /\b(ja|na|za|c\u030co|t\u00e1|po|vo|zo|n\u00e1[s\u030cs])\b/gi, 6 ],
tr: [ /[\u00c7\u011e\u0130\u00d6\u015e\u00dc\u00e7\u011f\u0131\u00f6\u015f\u00fc]/g, 7, /\b(son)\b/gi, 4, /\b(formu|bir|ve|ne|bu|i\u00e7in|o|b?en|\u00e7ok|(al|\u00e7\u0131k|ol|yap)mak|(de|gel|git|g\u00f6r|iste|ver)mek|gibi|daha|kendi|ile|ama|sonra|kadar|yer|insan|de\u011fil|y\u0131l|g\u00fcn|biz)\b/gi, 6 ],
vi: [ /[\u00e0\u1ea3\u00e3\u00e1\u1ea1\u0103\u1eb1\u1eb3\u1eb5\u1eaf\u1eb7\u00e2\u1ea7\u1ea9\u1eab\u1ea5\u1ead\u0111\u00e8\u1ebb\u1ebd\u00e9\u1eb9\u00ea\u1ec1\u1ec3\u1ec5\u1ebf\u1ec7\u00ec\u1ec9\u0129\u00ed\u1ecb\u00f2\u1ecf\u00f5\u00f3\u1ecd\u00f4\u1ed3\u1ed5\u1ed7\u1ed1\u1ed9\u01a1\u1edd\u1edf\u1ee1\u1edb\u1ee3\u00f9\u1ee7\u0169\u00fa\u1ee5\u01b0\u1eeb\u1eed\u1eef\u1ee9\u1ef1\u1ef3\u1ef7\u1ef9\u00fd\u1ef5]/gi, 8, /\b(v\u00e0|c\u00e1c|c\u1ee7a|c\u00f3|\u0111\u0103ng|\u0111\u00e2y|ho\u1eb7c|kh\u1ea9u|k\u00fd|m\u1ed9t|ng\u00e0y|l\u00e0|trong|cho)\b/gi, 6 ],
ja: [ /[\u3041-\u30ff]/g, 10 ],
ko: [ /[\uAC00-\uD7A3\u1100-\u11FF\u3131-\u318E\uFFA1-\uFFDC]/g, 10 ],
th: [ /[\u0E00-\u0E7F]/g, 10 ],
zh_CN: [ /[\u4e00-\u9fb4]/g, 1, /[\u7684\u662f\u8fd9\u6709\u5728\u4e0d\u4e86\u6765\u4e2a\u5230\u4e3a\u548c\u9053\u4e5f\u65f6\u5f97\u5c31\u90a3\u8981\u4ee5\u7740\u53bb\u4e4b\u8fc7\u5bb6\u5bf9\u53ef\u91cc\u540e\u4e48\u591a\u800c\u80fd\u90fd\u7136\u6ca1\u8d77\u8fd8]/g, 7 ],
ru: [ /[\u0410-\u042f\u0430-\u044f\u0401\u0451]/g, 3 ],
ar: [ /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/g, 1 ]
};
for (var d in l) l.hasOwnProperty(d) && _.push(d);
t.exports = s;
}, function(t, e) {
function i(t) {
"string" != typeof t && (t = "");
return t.replace(/^[A-Za-z]{4}$/, function(t) {
return t.slice(0, 2).toLowerCase() + "_" + t.slice(2).toUpperCase();
});
}
var n = {
"en-us": "en",
"en-ca": "en",
"en-gb": "en",
"es-419": "es",
"es-es": "es",
fil: "tl",
"fr-ca": "fr",
no: "nb",
pt: "pt_BR",
"pt-br": "pt_BR",
uk: "ru",
"zh-cn": "zh_CN",
"zh-tw": "zh_TW"
}, o = {
en: "en-us",
ms: "en-us",
tl: "en-us",
nb: "no",
pt_BR: "pt-br",
zh_CN: "zh-cn",
zh_TW: "zh-tw"
}, r = [ "pt", "uk" ], a = {};
a.zendeskToZopim = function(t, e) {
if (!e || -1 === r.indexOf(t)) {
var o = "string" == typeof t ? t.toLowerCase() : t, a = n[o];
if (a) return a;
}
return i(t);
};
a.zopimToZendesk = function(t) {
return "string" != typeof t ? "" : o[t] || t;
};
t.exports = a;
}, function(t, e, i) {
function n(t) {
"--" !== t && t || (t = _.guess());
return s.zendeskToZopim(t, !0);
}
var o = i(2), r = i(6), a = i(36), s = i(189), _ = i(188), l = {};
l.init = function() {
var t, e = r.root.$("livechat").$("ui").$("mockup$bool"), i = r.root.$("livechat").$("ui").$("popout$bool"), s = r.root.$("livechat").$("ui").$("lang_dir$string"), _ = r.root.$("livechat").$("settings").$("language").$("language$string");
if (!e.getValue()) if (i.getValue()) {
t = a().get("lang");
t = n(t);
_.update(t);
o && o.update && o.update(t);
o && o.rtl && s.update(o.rtl() ? "rtl" : "ltr");
} else _.bindValue(function(t) {
if ("--" !== t && t) {
t = n(t);
o && o.update && o.update(t);
o && o.rtl && s.update(o.rtl() ? "rtl" : "ltr");
} else {
t = n(t);
_.update(t);
}
});
};
t.exports = l;
}, function(t, e, i) {
function n() {
var t = c.root;
u = t.$("connection").$("status$string");
a = t.$("livechat");
s = a.$("agents");
_ = a.$("channel").$("chatting$bool");
l = a.$("account").$("status$string");
d = a.$("ui").$("mockup$bool");
s.bindKeys(r);
}
function o() {
s.unbindKeys(r);
a = s = _ = null;
l = d = u = null;
}
function r() {
if (!d.getValue() && "reattached" === u.getValue()) {
var t = l.getValue(), e = s.getKeys().length;
_.getValue() && !e && "offline" == t && c.livechat.endChat();
}
}
var a, s, _, l, d, u, c = i(6), h = {
init: n,
reset: o
};
t.exports = h;
}, function(t, e, i) {
function n(t, e) {
e = e || window;
r = t.$("livechat").$("profile");
var i = {
window: a.extend(e, !0),
document: a.extend(e.document, !0)
}, n = s.throttle(o, l);
i.document.on("mousemove", n);
i.window.on("click", n);
i.window.on("scroll", n);
i.window.on("keypress", n);
n();
}
function o() {
r.write({
active$int: +new Date()
});
}
var r, a = i(14), s = i(34), _ = {
init: n
}, l = 3e5;
t.exports = _;
}, function(t, e, i) {
function n() {
a = m.root.$("livechat").$("profile");
s = a.$("display_name$string");
l = a.$("email$string");
u = a.$("auth").$("type$string");
h = a.$("logged_in$bool");
s.on("value", function(t) {
_ = t;
o();
});
l.on("value", function(t) {
d = t;
o();
});
u.on("value", function(t) {
c = t;
o();
});
f = m.root.$("livechat").$("settings");
g = f.$("login").$("allowed_types");
p = f.$("login").$("allowed_types_count$int");
g.on("value", function() {
var t = g.getValue(), e = 0;
for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
if ("email$bool" == i) continue;
t[i] && e++;
}
e != p.getValue() && p.update(e);
});
}
function o() {
h.update(r());
}
function r() {
return !!c || (!(!d || !(d + "").trim()) || (!(!_ || !(_ + "").trim() || $.isDefaultName(_)) || void 0));
}
var a, s, _, l, d, u, c, h, f, g, p, m = i(6), $ = i(11), b = {
init: n
};
t.exports = b;
}, function(t, e, i) {
function n(t) {
function e() {
a.disableMobileNotifications(t);
}
if ("boolean" == typeof t) {
r.callOnFastInit(e);
r.callOnRegistered(e);
r.instrument("mobileNotifications.setDisabled");
} else window.console && window.console.log(r.getPrefix() + ": mobileNotifications.setDisabled() expects argument passed to be a boolean");
}
function o(t) {
function e() {
a.mobileNotificationsIgnoreChatButtonVisibility(t);
}
if ("boolean" == typeof t) {
r.callOnFastInit(e);
r.callOnRegistered(e);
r.instrument("mobileNotifications.setIgnoreChatButtonVisibility");
} else window.console && window.console.log(r.getPrefix() + ": mobileNotifications.setIgnoreChatButtonVisibility() expects argument passed to be a boolean");
}
var r = i(26), a = i(24), s = {};
s.setDisabled = n;
s.setIgnoreChatButtonVisibility = o;
t.exports = s;
}, function(t, e, i) {
function n(t) {
function e() {
if (r(t)) {
s.saveAPISettings({
settings: {
forms: {
offline_form: {
message$string: t
}
}
}
});
o.$("livechat").$("settings").$("forms").$("offline_form").update({
message$string: t
});
} else window.console && window.console.log(s.getPrefix() + ": offlineForm.setGreetings() expects passed argument to be a string");
}
function i() {
s.resetAPISettings({
settings: {
forms: {
offline_form: {
message$string: null
}
}
}
});
var t = s.getServerSettings("settings.forms.offline_form.message$string");
t && o.$("livechat").$("settings").$("forms").$("offline_form").update({
message$string: t
});
}
var n = null === t ? i : e;
s.savePopoutAPICalls("offlineForm.setGreetings", [ t ]);
s.callOnFastInit(n, !0);
s.callOnRegistered(n, !0);
s.instrument("offlineForm.setGreetings");
}
var o, r = i(22), a = i(6), s = i(26), _ = {};
_.init = function() {
o = a.root;
};
_.setGreetings = n;
t.exports = _;
}, function(t, e, i) {
function n(t) {
function e() {
s.saveAPISettings({
settings: {
forms: {
pre_chat_form: {
message$string: t
}
}
}
});
o.$("livechat").$("settings").$("forms").$("pre_chat_form").update({
message$string: t
});
}
if (r(t)) {
s.savePopoutAPICalls("prechatForm.setGreetings", [ t ]);
s.callOnFastInit(e, !0);
s.callOnRegistered(e, !0);
s.instrument("prechatForm.setGreetings");
} else window.console && window.console.log(s.getPrefix() + ": prechatForm.setGreetings() expects passed argument to be a string");
}
var o, r = i(22), a = i(6), s = i(26), _ = {};
_.init = function() {
o = a.root;
};
_.setGreetings = n;
t.exports = _;
}, function(t, e, i) {
var n = i(8), o = i(56), r = i(6), a = {};
a.init = function() {
function t(t) {
window.console && window.console.log(i ? o.stringify(t) : t);
}
var e = r.root, i = n.isIE || n.isNewIE;
a.connection = function() {
t(e.$("connection").getValue());
};
a.livechat = function() {
t(e.$("livechat").getValue());
};
a.all = function() {
t(e.getValue());
};
};
t.exports = a;
}, function(t, e, i) {
function n(t) {
if (g(t)) {
v.instrument("window.onShow");
var e = v.getCallbackCaller(t);
x.on("API:window:show", e);
} else window.console && window.console.log(v.getPrefix() + ": window.onShow() expects a callback function to be provided");
}
function o(t) {
if (g(t)) {
v.instrument("window.onHide");
var e = v.getCallbackCaller(t);
x.on("API:window:hide", e);
} else window.console && window.console.log(v.getPrefix() + ": window.onHide() expects a callback function to be provided");
}
function r(t) {
function e() {
v.saveAPISettings({
settings: {
chat_window: {
title_bar: {
title$string: t
}
}
}
});
h.$("livechat").$("settings").$("chat_window").$("title_bar").update({
title$string: t
});
}
t = t && t.toString();
if (f(t)) {
v.savePopoutAPICalls("window.setTitle", [ t ]);
v.callOnFastInit(e);
v.callOnRegistered(e);
v.instrument("window.setTitle");
} else window.console && window.console.log(v.getPrefix() + ": window.setTitle expects passed argument to be a string");
}
function a() {
v.callOnRegistered(function() {
x.toggleWindow();
});
v.instrument("window.toggle");
}
function s() {
v.instrument("window.getDisplay");
return h.$("livechat").$("ui").$("chat_window").$("display$bool").getValue();
}
function _(t) {
function e() {
v.saveAPISettings({
settings: {
theme: {
chat_window: {
v_offset$int: t
}
}
}
});
h.$("livechat").$("settings").$("theme").$("chat_window").update({
v_offset$int: t
});
}
t = parseInt(t, 10);
if (isNaN(t) || t < 0) window.console && window.console.log(v.getPrefix() + ': window.setOffsetVertical() Invalid argument. Argument must be a number (20) or in pixels ("20px") and not smaller than 0'); else {
v.callOnFastInit(e, !0);
v.callOnRegistered(e, !0);
v.instrument("window.setOffsetVertical");
}
}
function l(t) {
function e() {
v.saveAPISettings({
settings: {
theme: {
chat_window: {
h_offset$int: t
}
}
}
});
h.$("livechat").$("settings").$("theme").$("chat_window").update({
h_offset$int: t
});
}
t = parseInt(t, 10);
if (isNaN(t) || t < 0) window.console && window.console.log(v.getPrefix() + ': window.setOffsetHorizontal() Invalid argument. Argument must be a number (20) or in pixels ("20px") and not smaller than 0'); else {
v.callOnFastInit(e, !0);
v.callOnRegistered(e, !0);
v.instrument("window.setOffsetHorizontal");
}
}
function d(t) {
function e() {
v.saveAPISettings({
settings: {
theme: {
chat_window: {
position$string: t
}
}
}
});
h.$("livechat").$("settings").$("theme").$("chat_window").update({
position$string: t
});
}
if (f(t)) {
v.callOnFastInit(e, !0);
v.callOnRegistered(e, !0);
v.instrument("window.setPosition");
} else window.console && window.console.log(v.getPrefix() + ": window.setPosition() expects passed argument to be a string");
}
function u() {
if (b.isAuthenticated()) {
window.console && window.console.log(v.getPrefix() + ": openPopout API ignored for authenticated visitors. Falling back to window.show()...");
y.show();
return !1;
}
if (g(w.isReady) && w.isReady() && m.requestPermission()) {
v.instrument("window.openPopout");
return w.openPopout(!0);
}
return !1;
}
var c, h, f = i(22), g = i(20), p = i(55), m = i(40), $ = i(6), b = i(44), w = i(70), x = i(24), v = i(26), y = {};
y.init = function(t) {
function e() {
function t() {
x.showWindow();
}
var e = p.once(t);
v.callOnFastInit(e);
v.callOnRegistered(e);
v.instrument("window.show");
}
function i() {
function t() {
x.hideWindow();
}
var e = p.once(t);
v.callOnFastInit(e);
v.callOnRegistered(e);
v.instrument("window.hide");
}
c = t;
h = $.root;
y.setColor = c.generateDeprecatedFunction("window.setColor", "$zopim.livechat.theme.setColor", function() {
v.instrument("window.setColor");
return c.theme.setColor.apply(this, arguments);
});
y.setSize = c.generateLimitedFunction("window.setSize", 1, function(t) {
function e() {
v.saveAPISettings({
settings: {
theme: {
chat_window: {
size$string: t
}
}
}
});
h.$("livechat").$("settings").$("theme").$("chat_window").update({
size$string: t
});
}
if (f(t) && t) {
v.callOnFastInit(e);
v.callOnRegistered(e);
v.instrument("window.setSize");
} else window.console && window.console.log(v.getPrefix() + ": window.setSize expects passed argument to be a non-empty string");
});
y.show = e;
y.hide = i;
};
y.onShow = n;
y.onHide = o;
y.setTitle = r;
y.toggle = a;
y.getDisplay = s;
y.setOffsetBottom = y.setOffsetVertical = _;
y.setOffsetHorizontal = l;
y.setPosition = d;
y.openPopout = u;
t.exports = y;
}, function(t, e, i) {
function n() {
var t = Array.prototype.slice.call(arguments);
v.savePopoutAPICalls("departments.filter", t);
v.instrument("departments.filter");
if (arguments.length) {
b = t;
if (j) r(); else {
$.update(!0);
g.bindValue(r);
j = !0;
}
} else {
$.update(!1);
g.unbindValue(r);
j = !1;
}
}
function o(t) {
var e, i = {}, n = g.getValue();
if (!n) return i;
for (var o = t.length; o--; ) {
e = t[o];
"number" != typeof e && (e = c(e));
n[e] && (i[e] = !0);
}
return i;
}
function r() {
if (!w && b) {
var t = {}, e = g.getValue(), i = o(b);
if (e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = {
display$bool: n in i
});
w = !0;
p.update(t);
w = !1;
}
}
}
function a(t) {
function e() {
s(t);
}
v.callOnFastInit(e);
v.callOnRegistered(e, !0);
v.instrument("departments.setVisitorDepartment");
}
function s(t) {
"number" != typeof t && (t = c(t));
t && m.parentNode.write({
department_id$int: t
});
}
function _() {
v.callOnFastInit(l);
v.callOnRegistered(l, !0);
v.instrument("departments.clearVisitorDepartment");
}
function l() {
m.parentNode.write({
department_id$int: null
});
}
function d(t) {
"number" != typeof t && (t = c(t));
if (t) {
var e = g.$(t).getValue();
if (e) {
v.instrument("departments.getDepartment");
return {
id: t,
name: e.name$string,
status: e.status$string
};
}
}
}
function u() {
var t = g.getValue(), e = [];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push({
id: parseInt(i, 10),
name: t[i].name$string,
status: t[i].status$string
});
v.instrument("departments.getAllDepartments");
return e;
}
function c(t) {
t = t && t.toString();
if (t) {
var e = g.getValue();
for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i) && e[i].name$string == t) return parseInt(i, 10);
}
}
function h(t) {
function e() {
v.saveAPISettings({
settings: {
forms: {
pre_chat_form: {
form: {
2: {
label$string: t
}
}
}
}
}
});
f.$("livechat").$("settings").$("forms").$("pre_chat_form").$("form").$("2").update({
label$string: t
});
}
if (t && "string" == typeof t) {
v.savePopoutAPICalls("departments.setLabel", [ t ]);
v.callOnFastInit(e, !0);
v.callOnRegistered(e, !0);
v.instrument("departments.setLabel");
} else window.console && window.console.log(v.getPrefix() + ": departments.setLabel() expects passed argument to be a non-empty string");
}
var f, g, p, m, $, b, w, x = i(6), v = i(26), y = {};
y.init = function() {
f = x.root;
g = f.$("livechat").$("departments");
p = f.$("livechat").$("ui").$("departments").$("options");
m = f.$("livechat").$("profile").$("department_id$int");
$ = f.$("livechat").$("ui").$("departments").$("filter_enabled$bool");
};
var j;
y.filter = n;
y.setVisitorDepartment = a;
y.clearVisitorDepartment = _;
y.getDepartment = d;
y.getAllDepartments = u;
y.setLabel = h;
t.exports = y;
}, function(t, e, i) {
function n() {
r.enableCookieLaw();
a.instrument("cookieLaw.comply");
}
function o() {
r.setDefaultImplicitConsent();
a.instrument("cookieLaw.setDefaultImplicitConsent");
}
var r = i(40), a = i(26), s = {};
s.init = function() {};
s.comply = n;
s.setDefaultImplicitConsent = o;
t.exports = s;
}, function(t, e, i) {
function n(t) {
function e() {
_.saveAPISettings({
settings: {
concierge: t
}
});
r.$("livechat").$("settings").$("concierge").update(t);
}
_.callOnFastInit(e, !0);
_.callOnRegistered(e, !0);
}
var o, r, a = i(22), s = i(6), _ = i(26), l = {};
l.init = function(t) {
function e(t) {
t = t || "";
if (a(t)) {
n({
display_name$string: t
});
_.savePopoutAPICalls("concierge.setName", [ t ]);
_.instrument("concierge.setName");
} else window.console && window.console.log(_.getPrefix() + ": concierge.setName() expects passed argument to be a string");
}
function i(t) {
t = t || "";
if (a(t)) {
n({
title$string: t
});
_.savePopoutAPICalls("concierge.setTitle", [ t ]);
_.instrument("concierge.setTitle");
} else window.console && window.console.log(_.getPrefix() + ": concierge.setTitle() expects passed argument to be a string");
}
o = t;
r = s.root;
l.setAvatar = o.generateLimitedFunction("concierge.setAvatar", 1, function(t) {
t = t || "";
if (a(t)) {
n({
avatar_path$string: t
});
_.savePopoutAPICalls("concierge.setAvatar", [ t ]);
_.instrument("concierge.setAvatar");
} else window.console && window.console.log(_.getPrefix() + ": concierge.setAvatar() expects passed argument to be a string");
});
l.setName = e;
l.setTitle = i;
};
t.exports = l;
}, function(t, e, i) {
function n() {
function t() {
$.hideButton();
}
var e = p.once(t);
w.callOnFastInit(e);
w.callOnRegistered(e);
w.instrument("button.hide");
}
function o() {
function t() {
$.showButton();
}
var e = p.once(t);
w.callOnFastInit(e);
w.callOnRegistered(e);
w.instrument("button.show");
}
function r(t) {
function e() {
w.saveAPISettings({
settings: {
theme: {
chat_button: {
v_offset$int: t
}
}
}
});
c.$("livechat").$("settings").$("theme").$("chat_button").update({
v_offset$int: t
});
}
t = parseInt(t, 10);
if (isNaN(t) || t < 0) window.console && window.console.log(w.getPrefix() + ': button.setOffsetVertical() Invalid argument. Argument must be a number (20) or in pixels ("20px") and not smaller than 0'); else {
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setOffsetVertical");
}
}
function a(t) {
function e() {
w.saveAPISettings({
settings: {
theme: {
chat_button: {
v_offset_mobile$int: t
}
}
}
});
c.$("livechat").$("settings").$("theme").$("chat_button").update({
v_offset_mobile$int: t
});
}
t = parseInt(t, 10);
if (isNaN(t) || t < 0) window.console && window.console.log(w.getPrefix() + ': button.setOffsetVerticalMobile() Invalid argument. Argument must be a number (20) or in pixels ("20px") and not smaller than 0'); else {
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setOffsetVerticalMobile");
}
}
function s(t) {
function e() {
w.saveAPISettings({
settings: {
theme: {
chat_button: {
h_offset$int: t
}
}
}
});
c.$("livechat").$("settings").$("theme").$("chat_button").update({
h_offset$int: t
});
}
t = parseInt(t, 10);
if (isNaN(t) || t < 0) window.console && window.console.log(w.getPrefix() + ': button.setOffsetHorizontal() Invalid argument. Argument must be a number (20) or in pixels ("20px") and not smaller than 0'); else {
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setOffsetHorizontal");
}
}
function _(t) {
function e() {
w.saveAPISettings({
settings: {
theme: {
chat_button: {
h_offset_mobile$int: t
}
}
}
});
c.$("livechat").$("settings").$("theme").$("chat_button").update({
h_offset_mobile$int: t
});
}
t = parseInt(t, 10);
if (isNaN(t) || t < 0) window.console && window.console.log(w.getPrefix() + ': button.setOffsetHorizontalMobile() Invalid argument. Argument must be a number (20) or in pixels ("20px") and not smaller than 0'); else {
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setOffsetHorizontalMobile");
}
}
function l(t) {
function e() {
w.saveAPISettings({
settings: {
theme: {
chat_button: {
position$string: t
}
}
}
});
c.$("livechat").$("settings").$("theme").$("chat_button").update({
position$string: t
});
}
if (!h) if (g(t)) {
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setPosition");
} else window.console && window.console.log(w.getPrefix() + ": button.setPosition() expects passed argument to be a string");
}
function d(t) {
function e() {
w.saveAPISettings({
settings: {
theme: {
chat_button: {
position_mobile$string: t
}
}
}
});
c.$("livechat").$("settings").$("theme").$("chat_button").update({
position_mobile$string: t
});
}
if (g(t)) {
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setPositionMobile");
} else window.console && window.console.log(w.getPrefix() + ": button.setPositionMobile() expects passed argument to be a string");
}
var u, c, h, f = i(12), g = i(22), p = i(55), m = i(6), $ = i(24), b = i(115), w = i(26), x = {};
x.init = function(t) {
function e(t) {
function e() {
$.setHideWhenOffline(t);
}
t = f(t);
w.callOnFastInit(e, !0);
w.callOnRegistered(e, !0);
w.instrument("button.setHideWhenOffline");
}
u = t;
c = m.root;
h = c.$("livechat").$("ui").$("mobile$bool").getValue();
x.setColor = u.generateDeprecatedFunction("button.setColor", "$zopim.livechat.theme.setColor", function() {
w.instrument("button.setColor");
return b.setColor.apply(this, arguments);
});
x.setHideWhenOffline = u.generateLimitedFunction("button.setHideWhenOffline", 1, e);
};
x.hide = n;
x.show = o;
x.setOffsetBottom = x.setOffsetVertical = r;
x.setOffsetVerticalMobile = a;
x.setOffsetHorizontal = s;
x.setOffsetHorizontalMobile = _;
x.setPosition = l;
x.setPositionMobile = d;
t.exports = x;
}, function(t, e, i) {
function n() {
function t() {
c.showBubble();
}
h.callOnFastInit(t);
h.callOnRegistered(t);
h.instrument("bubble.show");
}
function o() {
function t() {
c.hideBubble();
}
h.callOnFastInit(t);
h.callOnRegistered(t);
h.instrument("bubble.hide");
}
function r() {
function t() {
c.resetBubble();
}
h.callOnFastInit(t);
h.callOnRegistered(t);
h.instrument("bubble.reset");
}
function a(t) {
function e() {
h.saveAPISettings({
settings: {
bubble: {
title$string: t
}
}
});
l.$("livechat").$("settings").$("bubble").update({
title$string: t
});
}
if (t && d(t)) {
h.callOnFastInit(e, !0);
h.callOnRegistered(e, !0);
h.instrument("bubble.setTitle");
} else window.console && window.console.log(h.getPrefix() + ": bubble.setTitle() expects passed argument to be a non-empty string");
}
function s(t) {
function e() {
h.saveAPISettings({
settings: {
bubble: {
text$string: t
}
}
});
l.$("livechat").$("settings").$("bubble").update({
text$string: t
});
}
if (t && d(t)) {
h.callOnFastInit(e, !0);
h.callOnRegistered(e, !0);
h.instrument("bubble.setText");
} else window.console && window.console.log(h.getPrefix() + ": bubble.setText() expects passed argument to be a non-empty string");
}
var _, l, d = i(22), u = i(6), c = i(24), h = i(26), f = {};
f.init = function(t) {
_ = t;
l = u.root;
f.setColor = _.generateLimitedFunction("bubble.setColor", 1, function(t) {
h.instrument("bubble.setColor");
return _.theme.setColor(t, "bubble");
});
};
f.show = n;
f.hide = o;
f.reset = r;
f.setTitle = a;
f.setText = s;
t.exports = f;
}, function(t, e, i) {
function n(t) {
function e() {
d.saveAPISettings({
settings: {
banner: t
}
});
r.$("livechat").$("settings").$("banner").update(t);
}
d.callOnFastInit(e, !0);
d.callOnRegistered(e, !0);
}
var o, r, a = i(31), s = i(22), _ = i(6), l = i(24), d = i(26), u = {};
u.init = function(t) {
function e(t) {
function e() {
t = t || "";
s(t) ? n({
text$string: t
}) : window.console && window.console.log(d.getPrefix() + ": badge.setText() expects passed argument to be a string");
}
d.callOnFastInit(e, !0);
d.callOnRegistered(e, !0);
d.instrument("badge.setText");
}
function i() {
function t() {
l.showBanner();
}
d.callOnFastInit(t);
d.callOnRegistered(t);
d.instrument("badge.show");
}
function c() {
function t() {
l.hideBanner();
}
d.callOnFastInit(t);
d.callOnRegistered(t);
d.instrument("badge.hide");
}
o = t;
r = _.root;
u.setLayout = function() {
var t = [ "image_right", "image_left", "text_only", "image_only" ], e = t.join(", ");
return o.generateLimitedFunction("badge.setLayout", 1, function(i) {
function o() {
i && -1 != a(i, t) ? n({
layout$string: i
}) : window.console && window.console.log("Invalid layout. Valid layouts: " + e);
}
d.callOnFastInit(o, !0);
d.callOnRegistered(o, !0);
d.instrument("badge.setLayout");
});
}();
u.setImage = o.generateLimitedFunction("badge.setImage", 1, function(t) {
function e() {
t = t || "";
s(t) ? n({
image_path$string: t
}) : window.console && window.console.log(d.getPrefix() + ": badge.setImage() expects passed argument to be a string");
}
d.callOnFastInit(e, !0);
d.callOnRegistered(e, !0);
d.instrument("badge.setImage");
});
u.setColor = o.generateLimitedFunction("badge.setColor", 1, function(t) {
d.instrument("badge.setColor");
return o.theme.setColor(t, "badge");
});
u.setText = e;
u.show = i;
u.hide = o.generateLimitedFunction("badge.hide", 1, c);
};
t.exports = u;
}, function(t, e, i) {
function n() {
V = et.root;
if (!V.$("livechat").$("ui").$("mockup$bool").getValue()) {
var t = this;
nt.init(t);
ot.init(t);
rt.init(t);
at.init(t);
st.init(t);
_t.init(t);
lt.init(t);
dt.init(t);
ut.init(t);
ct.init(t);
ht.init(t);
ft.init(t);
O();
V.$("livechat").$("ui").$("popout$bool").getValue() && W();
}
}
function o() {
nt.instrument("livechat.getName");
return V.$("livechat").$("profile").$("display_name$string").getValue() || "";
}
function r() {
nt.instrument("livechat.getEmail");
return V.$("livechat").$("profile").$("email$string").getValue() || "";
}
function a() {
nt.instrument("livechat.getPhone");
return V.$("livechat").$("profile").$("phone$string").getValue() || "";
}
function s() {
nt.instrument("livechat.isChatting");
return V.$("livechat").$("channel").$("chatting$bool").getValue() || !1;
}
function _(t) {
if ("object" == typeof t) {
var e, i, n = this;
for (i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
e = "set" + F(i);
U(n[e]) && n[e](t[i]);
}
nt.instrument("livechat.set");
return n;
}
}
function l(t) {
function e() {
z.isAuthenticated() ? window.console && window.console.log(nt.getPrefix() + ": setName API ignored for authenticated visitors.") : et.livechat.updateProfile({
name: t
});
}
t = t && t.toString();
if (V.$("livechat").$("profile").$("display_name$string").getValue() !== t) if (t && t.length > 255) window.console && window.console.warn && window.console.warn(nt.getPrefix() + ": setName(): the provided name cannot exceed 255 characters"); else {
nt.callOnFastInit(e);
nt.callOnReattached(e);
nt.instrument("livechat.setName");
}
}
function d(t) {
function e() {
z.isAuthenticated() ? window.console && window.console.log(nt.getPrefix() + ": setEmail API ignored for authenticated visitors.") : et.livechat.updateProfile({
email: t
});
}
t = t && t.toString().trim();
if (V.$("livechat").$("profile").$("email$string").getValue() !== t) if (tt.email.test(t)) {
nt.callOnFastInit(e);
nt.callOnReattached(e);
nt.instrument("livechat.setEmail");
} else window.console && window.console.log(nt.getPrefix() + ": setEmail(): the email provided is not valid: [" + t + "]");
}
function u(t) {
function e() {
et.livechat.updateProfile({
phone: t
});
}
t = t && t.toString();
if (V.$("livechat").$("profile").$("phone$string").getValue() !== t) if (t && t.length > 25) window.console && window.console.warn && window.console.warn(nt.getPrefix() + ": setPhone(): the provided phone number cannot exceed 25 characters"); else {
nt.callOnFastInit(e);
nt.callOnReattached(e);
nt.instrument("livechat.setPhone");
}
}
function c() {
function t() {
V.$("livechat").$("channel").$("tags").write({
added$string: n.join(",")
});
}
if (arguments.length) {
for (var e, i = arguments, n = [], o = 0, r = i.length; o < r; o++) {
e = (i[o] + "").trim();
e && n.push(e);
}
nt.callOnFastInit(t);
nt.callOnReattached(t);
nt.instrument("livechat.addTags");
}
}
function h(t) {
function e() {
V.$("livechat").$("session").$("page_path").write({
url$string: i,
title$string: n
});
}
var i, n;
if ("object" == typeof t && t && (i = M(t.url))) n = t.title || $t.title || ""; else {
if (!G(t)) {
window.console && window.console.log(nt.getPrefix() + ": sendVisitorPath(): the parameters provided are not valid. Please refer to the API documentation.");
return;
}
i = bt + "";
n = $t.title || "";
}
nt.callOnReattached(e);
nt.instrument("livechat.sendVisitorPath");
}
function f() {
function t() {
V.$("livechat").$("channel").$("tags").write({
removed$string: n.join(",")
});
}
if (arguments.length) {
for (var e, i = arguments, n = [], o = 0, r = i.length; o < r; o++) {
e = (i[o] + "").trim();
e && n.push(e);
}
nt.callOnFastInit(t);
nt.callOnReattached(t);
nt.instrument("livechat.removeTags");
} else window.console && window.console.log(nt.getPrefix() + ": removeTags(): Please provide at least one tag");
}
function g(t) {
function e() {
V.$("livechat").$("profile").$("notification").update({
sound$bool: !t
});
}
if ("boolean" == typeof t) {
nt.callOnFastInit(e);
nt.callOnRegistered(e);
nt.instrument("livechat.setDisableSound");
} else window.console && window.console.log(nt.getPrefix() + ": setDisableSound() expects passed argument to be true/false");
}
function p(t) {
function e() {
q.setDisabled(t);
}
if ("boolean" == typeof t) {
nt.callOnFastInit(e);
nt.callOnRegistered(e);
nt.instrument("livechat.setDisableGoogleAnalytics");
} else window.console && window.console.log(nt.getPrefix() + ": setDisableGoogleAnalytics() expects passed argument to be true/false");
}
function m(t) {
function e() {
nt.saveAPISettings({
settings: {
language: {
language$string: t
}
}
});
V.$("livechat").$("settings").$("language").update({
language$string: t
});
}
if (Y(t) && t) {
nt.callOnFastInit(e);
nt.callOnRegistered(e);
nt.instrument("livechat.setLanguage");
} else window.console && window.console.log(nt.getPrefix() + ": setLanguage() expects passed argument to be a non-empty string");
}
function $(t) {
function e(t) {
if (o[t] && Y(o[t])) {
var e = {};
e[t + "$string"] = o[t];
nt.saveAPISettings({
settings: {
greetings: e
}
});
V.$("livechat").$("settings").$("greetings").update(e);
} else window.console && window.console.log(nt.getPrefix() + ': setGreetings() expects a non-empty string to be provided for "' + t + '"');
}
function i(t) {
var e = {};
e[t + "$string"] = null;
nt.resetAPISettings({
settings: {
greetings: e
}
});
var i = nt.getServerSettings("settings.greetings." + t + "$string");
if (i) {
e[t + "$string"] = i;
V.$("livechat").$("settings").$("greetings").update(e);
}
}
function n(t, e) {
if (e in t) return X(t[e]) ? t[e][0] : t[e];
}
if (t && "object" == typeof t) {
var o = {
online: n(t, "online"),
offline: n(t, "offline")
}, r = function() {
(null === o.online ? i : e)("online");
(null === o.offline ? i : e)("offline");
};
nt.callOnFastInit(r, !0);
nt.callOnReattached(r, !0);
nt.instrument("livechat.setGreetings");
}
}
function b() {
function t() {
et.livechat.clearAll();
et.livechat.reconnect();
}
nt.callOnRegistered(t);
nt.instrument("livechat.clearAll");
}
function w() {
function t() {
it.hideAll();
}
var e = J.once(t);
nt.callOnFastInit(e);
nt.callOnRegistered(e);
nt.instrument("livechat.hideAll");
}
function x(t) {
if (t && "string" == typeof t) {
nt.callOnReattached(function() {
var e = V.$("livechat").$("profile").$("department_id$int").getValue(), i = {
msg: t
};
e && (i.department = e);
et.livechat.sendChatMsg(i);
mt.window.show();
});
nt.instrument("livechat.say");
} else window.console && window.console.log(nt.getPrefix() + ": say() expects a non-empty string to be provided as an argument");
}
function v(t) {
if (U(t)) {
nt.callOnReattached(nt.getCallbackCaller(t), !0);
nt.instrument("livechat.setOnConnected");
} else window.console && window.console.log(nt.getPrefix() + ": setOnConnected() expects a callback function to be provided");
}
function y(t) {
var e = xt.last_chatting_state, i = Z(t);
if (i !== xt.last_chatting_state) {
xt.last_chatting_state = i;
i ? xt.start_ready && xt.fire("chat_start") : e && xt.fire("chat_end");
}
}
function j() {
if (!xt.listening) {
xt.listening = !0;
V.$("livechat").$("channel").$("chatting$bool").bindValue(y);
}
}
function C(t) {
if (U(t)) {
xt.on("chat_start", nt.getCallbackCaller(t));
j();
nt.instrument("livechat.setOnChatStart");
if (!xt.start_settled) {
xt.start_settled = !0;
nt.callOnReattached(function() {
xt.last_chatting_state = Z(V.$("livechat").$("channel").$("chatting$bool").getValue());
xt.start_ready = !0;
});
}
} else window.console && window.console.log(nt.getPrefix() + ": setOnChatStart() expects a callback function to be provided");
}
function S(t) {
if (U(t)) {
xt.on("chat_end", nt.getCallbackCaller(t));
j();
nt.instrument("livechat.setOnChatEnd");
} else window.console && window.console.log(nt.getPrefix() + ": setOnChatEnd() expects a callback function to be provided");
}
function A(t) {
U(t) ? nt.callOnRegistered(nt.getCallbackCaller(t), !0) : window.console && window.console.log(nt.getPrefix() + ": setOnFlashReady() expects a callback function to be provided");
}
function k(t) {
function e() {
i(n.getValue());
}
if (U(t)) {
var i = nt.getCallbackCaller(t), n = V.$("livechat").$("account").$("status$string"), o = V.$("livechat").$("departments"), r = H.debounce(e);
n.bindValue(r);
o.bindValue(r);
nt.instrument("livechat.setOnStatus");
} else window.console && window.console.log(nt.getPrefix() + ": setOnStatus() expects a callback function to be provided");
}
function I(t) {
if (U(t)) {
var e;
t = nt.getCallbackCaller(t);
V.$("livechat").$("ui").$("chat_button").$("unread_count$int").bindValue(function(i) {
if (K(i) && e != i) {
e = i;
nt.callNow(t, e);
}
});
nt.instrument("livechat.setOnUnreadMsgs");
} else window.console && window.console.log(nt.getPrefix() + ": setOnUnreadMsgs() expects a callback function to be provided");
}
function N() {
et.livechat.endChat();
nt.instrument("livechat.endChat");
}
function T(t) {
function e() {
if (Y(t) && t) {
t = t.toLowerCase();
if ("online" === t || "offline" === t) {
nt.saveAPISettings({
account: {
status$string: t
}
});
V.$("livechat").$("account").update({
status$string: t
});
} else window.console && window.console.log(nt.getPrefix() + ': setStatus() only accepts "online" or "offline" as a valid status');
} else window.console && window.console.log(nt.getPrefix() + ": setStatus() expects passed argument to be a non-empty string");
}
function i() {
nt.resetAPISettings({
account: {
status$string: null
}
});
var t = nt.getServerSettings("account.status$string");
t && V.$("livechat").$("account").update({
status$string: t
});
}
var n = null === t ? i : e;
nt.savePopoutAPICalls("setStatus", [ t ]);
nt.callOnFastInit(n);
nt.callOnReattached(n);
nt.instrument("livechat.setStatus");
}
function B(t) {
function e() {
V.$("livechat").$("profile").write({
notes$string: t
});
}
if (Y(t)) {
nt.callOnFastInit(e);
nt.callOnReattached(e);
nt.instrument("livechat.setNotes");
} else window.console && window.console.log(nt.getPrefix() + ": setNotes() expects passed argument to be a string");
}
function D(t) {
function e() {
V.$("livechat").$("profile").write({
notes_append$string: t
});
}
if (Y(t)) {
nt.callOnReattached(e);
nt.instrument("livechat.appendNotes");
} else window.console && window.console.log(nt.getPrefix() + ": appendNotes() expects passed argument to be a string");
}
function E(t) {
if ("object" == typeof t && U(t.jwtFn)) {
nt.instrument("livechat.authenticate");
V.$("connection").$("status$string").getValue() ? window.console && window.console.log(nt.getPrefix() + ": visitor authentication must be initiated immediately after embedding script") : z.setSiteJWTFunc(t.jwtFn);
} else window.console && window.console.log(nt.getPrefix() + ": authenticate(): the parameters provided are not valid. Please refer to the API documentation.");
}
function O() {
var t = window.$zopim;
window.$zopim = nt.callNow;
window.$zopim.livechat = mt;
nt.handleDelayed(t && t._);
}
function L() {
var t = window.$zopim, e = t && t.onError;
if ("function" == typeof e) {
e = nt.getCallbackCaller(e);
nt.callNow(e);
}
}
function W() {
wt = {
"departments.filter": lt.filter,
"departments.setLabel": lt.setLabel,
"prechatForm.setGreetings": ht.setGreetings,
"offlineForm.setGreetings": ft.setGreetings,
"theme.setColors": dt.setColors,
"theme.reload": dt.reload,
"theme.setTheme": dt.setTheme,
"theme.setProfileCardConfig": dt.setProfileCardConfig,
"concierge.setName": st.setName,
"concierge.setTitle": st.setTitle,
"concierge.setAvatar": st.setAvatar,
"window.setTitle": ut.setTitle,
setStatus: mt.setStatus
};
for (var t = nt.parseAPIFromQuery(), e = this, i = 0, n = t.length; i < n; i++) {
var o = t[i][0], r = t[i][1];
o in wt && wt[o].apply(e, r);
}
}
function P(t, e, i) {
return function() {
window.console && window.console.log(nt.getPrefix() + ': LiveChatAPI call "' + t + '" is deprecated and may be removed in the future. ' + (e ? 'Use "' + e + '" instead.' : "Refer to http://api.zopim.com/ for the latest API documentation."));
return i.apply(this, arguments);
};
}
function R(t, e, i) {
return function() {
var t = Array.prototype.slice.call(arguments, 0);
return i.apply(this, t);
};
}
function F(t) {
t += "";
return t.charAt(0).toUpperCase() + t.substring(1);
}
function M(t) {
if ("string" != typeof t) return "";
var e, i = tt.search.hurl;
i.lastIndex = 0;
e = i.exec(t);
i.lastIndex = 0;
return e ? e[0].trim() : "";
}
var V, H = i(34), q = i(49), z = i(44), U = i(20), G = i(25), Y = i(22), X = i(21), Z = i(12), K = i(28), Q = i(14), J = i(55), tt = i(64), et = i(6), it = i(24), nt = i(26), ot = i(204), rt = i(203), at = i(202), st = i(201), _t = i(200), lt = i(199), dt = i(115), ut = i(198), ct = i(197), ht = i(196), ft = i(195), gt = i(194), pt = {
interval: 500,
limit: 10
}, mt = {
badge: ot,
bubble: rt,
button: at,
concierge: st,
cookieLaw: _t,
departments: lt,
theme: dt,
window: ut,
debug: ct,
prechatForm: ht,
offlineForm: ft,
mobileNotifications: gt,
generateDeprecatedFunction: P,
generateLimitedFunction: R,
authenticate: E,
init: n,
handleInitError: L,
isChatting: s,
set: _,
getName: o,
getEmail: r,
getPhone: a,
setName: l,
setEmail: d,
setPhone: u,
addTags: c,
sendVisitorPath: h,
removeTags: f,
setDisableSound: g,
setLanguage: m,
setGreetings: $,
clearAll: b,
hideAll: w,
say: x,
setOnConnected: v,
setOnChatStart: C,
setOnChatEnd: S,
setOnFlashReady: A,
setOnStatus: k,
setOnUnreadMsgs: I,
endChat: N,
setStatus: nt.rateLimit(T, "setStatus", pt),
setNotes: B,
appendNotes: D,
setDisableGoogleAnalytics: p
}, $t = document, bt = window.location, wt = {}, xt = {
listening: !1,
last_chatting_state: null,
start_settled: !1,
start_ready: !1
};
Q.extend(xt);
var vt = {
global: "fire freeze setOnGreeting".split(" "),
bubble: "setImage".split(" "),
button: "setImage setTheme useFavicon".split(" "),
window: "getSettings setBg".split(" "),
cookieLaw: "showPrivacyPanel".split(" "),
unreadflag: "disable enable".split(" ")
};
for (var yt in vt) if (Object.prototype.hasOwnProperty.call(vt, yt)) {
var jt, Ct = vt[yt];
if ("global" == yt) jt = mt; else {
mt[yt] || (mt[yt] = {});
jt = mt[yt];
}
for (var St = 0; St < Ct.length; St++) {
var At = Ct[St];
jt[At] = function(t) {
return function() {
window.console && window.console.log(nt.getPrefix() + ': LiveChatAPI call "' + t + '" is obsolete. Refer to http://api.zopim.com/ for the latest API documentation.');
};
}(At);
}
}
t.exports = mt;
}, function(t, e, i) {
function n() {
s = d.root.$("livechat");
_ = s.$("agents");
l = s.$("ui").$("cache_agents");
_.bindValue(r);
}
function o() {
_.unbindValue(r);
s = _ = l = null;
}
function r(t) {
t && l.update(a(t));
}
function a(t) {
var e, i, n = {};
if (!t) return {};
for (e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
i = t[e];
if (null === i) continue;
n[e] = "object" == typeof i ? a(i) : i;
}
return n;
}
var s, _, l, d = i(6), u = {
init: n,
reset: o
};
t.exports = u;
}, function(t, e, i) {
function n() {
a = d.root.$("livechat");
s = a.$("agents");
_ = a.$("triggers").$("agents");
l = a.$("ui").$("chat_window").$("typing_info");
s.on("value", o);
_.on("value", o);
}
function o() {
var t = [];
s.getKeys().forEach(function(e) {
var i = s.$(e);
i.$("typing$bool").getValue() && t.push(i.$("display_name$string").getValue());
});
_.getKeys().forEach(function(e) {
_.$(e).$("typing$bool").getValue() && t.push(e);
});
var e = t.join(u);
l.$("agent_names$string").getValue() !== e && l.update({
agent_typing$bool: t.length > 0,
agent_names$string: e,
num_typing_agents$int: t.length
});
}
function r() {
_.un("value", o);
s.un("value", o);
a = s = _ = l = void 0;
}
var a, s, _, l, d = i(6), u = ", ", c = {
SEPARATOR: u,
init: n,
resetState: r
};
t.exports = c;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Gravatar = i(83);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(113), c = s(114), h = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [], {
addClass: "paper"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Gravatar, "gravatar", "", [], {
id: "gravatar",
addClass: "rounded_avatar"
} ], [ n.__$$__jx_ui_Widget, "", "", [], {
addClass: "agent_profile_spacer"
} ], [ n.__$$__jx_ui_Widget, "agent_name", "", [], {
id: "agent_name",
addClass: "agent_name"
} ] ], {
addClass: "agent_profile"
} ], [ n.__$$__jx_ui_Widget, "chat_msg", "", [], {
id: "chat_msg",
addClass: "text_container"
} ], [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "reply_btn", "", [ u ], {
placement: "primary",
id: "reply_btn",
addClass: "wide"
} ], [ n.__$$__meshim_widget_widgets_Button, "dismiss_btn", "", [ c ], {
placement: "secondary",
id: "dismiss_btn",
addClass: "wide secondary"
} ] ], {
addClass: "controls_container"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileChatNotification": "meshim.widget.components.mobileChatNotification"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__gravatar"), m = _.get(o + "__agent_name"), $ = _.get(o + "__chat_msg"), b = _.get(o + "__reply_btn"), w = _.get(o + "__dismiss_btn");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var x = function() {
function t(t) {
p.setMemberNode(t);
}
function e(t) {
o && g.autounbind(o, "value", n);
o = t;
o && g.autobind(o, "value", n);
}
function n(t) {
if (t) {
"attachment" in t ? $.setText(r.chat_notification.attachment) : "msg$string" in t && $.setText(t.msg$string);
"display_name$string" in t && m.setText(t.display_name$string);
}
}
var o, r = i(10), a = i(6), s = i(24), _ = a.root.$("livechat").$("ui").$("chat_notification");
g.setAgentDataNode = t;
g.setLogDataNode = e;
!function() {
w.on("click", function() {
s.userDismissMobileNotification();
_.write({
dismiss_clicked$bool: !0
});
});
b.on("click", function() {
s.userReplyMobileNotification();
_.write({
reply_clicked$bool: !0
});
});
}();
}();
for (var v in x) g[v] = x[v];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".paper": {
position: "absolute",
top: "14px",
"bottom, left, right": 0,
backgroundColor: "white",
opacity: "0.9",
zIndex: "-1",
boxShadow: "0 0 2px rgba(0, 0, 0, 0.5);",
borderRadius: "5px",
margin: "0 2px 2px"
},
".agent_profile": {
width: "100%",
display: [ "flex", "-webkit-flex" ],
"alignItems, -webkit-align-items": "flex-end",
position: "relative",
padding: "0 14px"
},
".rounded_avatar": {
"flexShrink, -webkit-flex-shrink": "0",
borderRadius: "50%",
"width, height": "40px",
border: "1px solid #ddd"
},
".agent_profile_spacer": {
"flexShrink, -webkit-flex-shrink": "0",
width: "8px"
},
".agent_name": {
"flexGrow, -webkit-flex-grow": "1",
position: "relative",
bottom: "4px",
color: "$$profileCardNameColor",
fontWeight: "bold",
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap"
},
".controls_container": {
position: "absolute",
"bottom, left, right": 0,
padding: "10px"
},
".text_container": {
width: "100%",
padding: "10px",
paddingTop: "6px",
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatNotification_NotificationCard"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_FloatingFrame = i(71);
n.__$$__jx_ui_FullFrame = i(90);
n.__$$__meshim_widget_components_mobileChatNotification_NotificationCard = i(208);
n.__$$__meshim_widget_widgets_fontLoader_ZopimFont = i(59);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_FloatingFrame, "", "", [ [ n.__$$__jx_ui_FullFrame, "notification_card_container", "", [ [ n.__$$__meshim_widget_components_mobileChatNotification_NotificationCard, "notification_card", "", [], {
id: "notification_card",
addClass: "notification_card"
} ] ], {
id: "notification_card_container",
addClass: "notification_card_container",
overflow: "hidden"
} ], [ n.__$$__meshim_widget_widgets_fontLoader_ZopimFont, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileChatNotification": "meshim.widget.components.mobileChatNotification",
position: "fixed",
bottom: "0",
left: "0",
right: "0",
width: "100%",
height: "132px",
minWidth: "220px",
maxWidth: "350px",
marginLeft: "auto",
marginRight: "auto",
zIndex: "16000004",
useDisplay: "true",
visible: "false",
addClass: "zopim"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__notification_card_container"), f = s.get(o + "__notification_card");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t() {
var t = window.innerWidth;
if (!(t < w)) {
var e = parseFloat(B.getValue()), i = e * g.MOBILE_ZOOM_ADDITIONAL;
b / i > t && (i = (b + 4) / t);
c.setStyle({
maxWidth: b / i + "px",
height: $ / i + "px"
});
h.setStyle({
transform: "scale(" + 1 / i + ")",
"-webkit-transform": "scale(" + 1 / i + ")",
transformOrigin: "top left",
"-webkit-transform-origin": "top left",
width: b + "px",
height: $ + "px"
});
}
}
function e(e) {
if (e && !(parseFloat(B.getValue()) > 1)) {
var i = A.getValue();
if (!(i > e || void 0 === i) && (e < k.getValue() || !k.getValue())) {
var n = N.getValue(), o = C.$("log").$(n), r = o.getValue(), a = r.nick$string, s = j.$("agents").$(a);
null === s.getValue() && (s = j.$("settings").$("concierge"));
t();
f.setAgentDataNode(s);
f.setLogDataNode(o);
d.showMobileNotification();
}
}
}
function n(t) {
c.setVisible(!0);
r = clearTimeout(r);
a.animate({
endStyle: v,
duration: 200
}, function(e) {
if (!e) {
T.write({
shown$bool: !0
});
r = setTimeout(d.hideMobileNotification, m);
}
t && t(e);
});
}
function o(t) {
r = clearTimeout(r);
a.animate({
endStyle: x,
duration: 200
}, function(e) {
e || c.setVisible(!1);
t && t(e);
});
}
var r, a, s = i(6), _ = i(57), l = i(92), d = i(24), u = i(65), g = i(35), p = i(46), m = 7200, $ = 132, b = 350, w = 980, x = {
opacity: 0,
translateY: "100%"
}, v = {
opacity: 1,
translateY: "0%"
}, y = s.root, j = y.$("livechat"), C = j.$("channel"), S = j.$("ui"), A = y.$("connection").$("reattached_timestamp$int"), k = C.$("first_visitor_msg_ts$int"), I = C.$("first_account_msg_ts$int"), N = C.$("first_account_msg_id$string"), T = S.$("chat_notification"), B = S.$("chat_button").$("mobile").$("calculated_styles").$("zoom$string");
!function() {
c.defaultPlacement.addClass(c.__jx__fqname);
c.defaultPlacement.addClass(_.prototype.__jx__fqname);
c.setCSSStyle("willChange", "transform");
p(c.ibody);
a = new u(c, x);
c.autobind(I, "value", e);
c.moveDown = o;
c.moveUp = n;
l.registerChatNotification(c);
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_FloatingFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".notification_card": {
position: "relative",
height: "122px",
width: "100%"
},
".notification_card_container": {
paddingLeft: "5px",
paddingRight: "5px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_FloatingFrame, {
fqname: "meshim_widget_components_MobileChatNotification"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_FullFrame = i(90);
n.__$$__meshim_widget_components_mobileChatWindow_MainScreen = i(116);
n.__$$__meshim_widget_widgets_fontLoader_ZopimFont = i(59);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_FullFrame, "", "", [ [ n.__$$__meshim_widget_components_mobileChatWindow_MainScreen, "", "", [], {} ], [ n.__$$__meshim_widget_widgets_fontLoader_ZopimFont, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileWindow": "meshim.widget.components.mobileChatWindow"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(60), e = i(46);
!function() {
e(c);
t.init();
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_FullFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_FullFrame, {
fqname: "meshim_widget_components_PopoutMobileChatWindow"
});
return t;
}();
}, function(t, e, i) {
function n() {
var t = u.getDocumentScrollElement();
_ = t.scrollTop;
l = t.scrollLeft;
}
function o() {
if (void 0 !== _) {
var t = u.getDocumentScrollElement();
t.scrollTop = _;
t.scrollLeft = l;
}
}
function r() {
if (s) return s;
s = document.scrollingElement ? document.scrollingElement : !d.isWebKit && d.isStrict ? document.documentElement : document.body || document.documentElement;
return s;
}
function a() {
_ = l = s = void 0;
}
var s, _, l, d = i(8), u = {
store: n,
restore: o,
resetState: a,
getDocumentScrollElement: r
};
t.exports = u;
}, function(t, e) {
function i(t) {
var e, i, s;
if (document.body && document.body.style) {
n = document.body.style, t = !!t;
if (t && !o) {
for (e = 0, i = r.length; e < i; e++) {
s = r[e];
a[s] = n[s];
}
n.position = "fixed";
n.overflowY = "hidden";
n.webkitTextSizeAdjust = "100%";
n.width = "100%";
n.minHeight = "100%";
n.margin = "0px";
o = !0;
} else if (!t && o) {
for (e = 0, i = r.length; e < i; e++) {
s = r[e];
n[s] = a[s];
}
o = !1;
}
}
}
var n, o, r = [ "position", "overflowY", "webkitTextSizeAdjust", "width", "minHeight", "margin" ], a = {};
i.resetState = function() {
o = void 0;
a = {};
};
t.exports = i;
}, function(t, e) {
function i(t) {
var e;
if (t && !s) {
e = n();
r = e.getAttribute("content") || "";
e.setAttribute("content", _);
s = !0;
} else if (!t && s) {
e = n();
e.setAttribute("content", r);
s = !1;
}
}
function n() {
if (a) return a;
var t = document.head.querySelectorAll("meta[name=viewport]");
a = t[t.length - 1] || o();
return a;
}
function o() {
var t = document.createElement("meta");
t.setAttribute("name", "viewport");
document.head.appendChild(t);
return t;
}
var r, a, s, _ = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
i.resetState = function() {
a && a.parentNode.removeChild(a);
r = a = s = void 0;
};
t.exports = i;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Toast = i(111);
n.__$$__jx_ui_html_div = i(13);
n.__$$__meshim_widget_widgets_IconFont = i(15);
n.__$$__jx_ui_html_span = i(30);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Toast, "", "", [ [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "arrow_down_long",
addClass: "arrow_down_long"
} ] ], {
addClass: "arrow_container"
} ], [ n.__$$__jx_ui_html_span, "message", "", [], {
id: "message"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
display: "inline-block",
useDisplay: "true",
visible: "false"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__message");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t(t) {
t && n();
}
function e() {
r = !0;
c.setVisible(!0);
o.animate({
endStyle: f,
duration: 300,
delay: 500
});
}
function n() {
if (r) {
r = !1;
o.animate({
endStyle: u,
duration: 100
}, function(t) {
t || c.setVisible(!1);
});
}
}
var o, r, a = i(33), s = i(60), _ = i(6), l = i(65), d = i(10), u = {
opacity: 0
}, f = {
opacity: 1
}, g = _.root.$("livechat").$("ui"), p = g.$("chat_button").$("unread_count$int"), m = g.$("chat_window").$("chat_panel").$("scrollable"), $ = m.$("scrolled_to_bottom$bool"), b = m.$("smooth_scroll_count$int");
!function() {
o = new l(c, u);
c.autobind($, "value", t);
c.autobind(b, "value", t);
c.autobind(p, "value", function(t) {
if (t > 0) {
e();
h.setText(d.chat_panel[1 == t ? "new_message_below" : "new_messages_below"].replace("<number>", t));
} else n();
});
c.on("click", function() {
a.resetUnreadCount();
s.scrollToBottom();
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Toast.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontWeight: "bold"
},
".arrow_container": {
display: "inline-block",
paddingRight: "4px",
verticalAlign: "bottom"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Toast, {
fqname: "meshim_widget_components_mobileChatWindow_chatPanel_NewMessagesToast"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_TextArea = i(78);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_TextArea, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
addClass: "unstyled"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
t = n(t, "checkNull") ? "" : t;
t !== c.getValue() && a.call(c, t);
e();
}
function e() {
c.setHeight(0).setHeight(c.getScrollHeight());
}
var n = i(25), o = i(6), r = o.root.$("livechat").$("ui").$("theme_loaded$bool"), a = c.setValue;
!function() {
c.setValue = t;
c.autobind(r, "value", function(t) {
t && e();
});
c.on("input", e);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_TextArea.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
overflowX: "hidden"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_TextArea, {
fqname: "meshim_widget_components_mobileChatWindow_chatPanel_AutoResizeTextArea"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Button = i(17);
n.__$$__meshim_widget_widgets_IconFont = i(15);
n.__$$__meshim_widget_widgets_SendFile = i(121);
n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_AutoResizeTextArea = i(215);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "send", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "send",
addClass: "send"
} ] ], {
id: "send",
addClass: "send_button primary fit"
} ], [ n.__$$__meshim_widget_widgets_Button, "upload", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "upload",
addClass: "upload"
} ], [ n.__$$__meshim_widget_widgets_SendFile, "", "", [], {
addClass: "send_file"
} ] ], {
id: "upload",
addClass: "upload_button primary fit"
} ] ], {
addClass: "send_wrapper"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_AutoResizeTextArea, "textarea", "", [], {
id: "textarea",
addClass: "textarea"
} ] ], {
addClass: "textarea_wrapper"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileChatWindow": "meshim.widget.components.mobileChatWindow"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__send"), f = s.get(o + "__upload"), g = s.get(o + "__textarea");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function t() {
v.$("chat_window").update({
menu_stack_name$string: ""
});
}
function e() {
u.resetUnreadCount();
}
function n() {
d.isIOS && "ja" === s && _ && g.dom.scrollIntoViewIfNeeded();
p.userInputValue(g.getValue());
}
function o(t, e) {
if (a !== t || l !== e) {
a = t;
l = e;
if (l && a === I.FILE) {
h.setDisplay("none");
f.setDisplay("");
} else {
h.setDisplay("");
f.setDisplay("none");
}
}
}
function r() {
var t = A.getValue(), e = j.getValue("color_customization_enabled$int") || j.getValue("widget_customization_enabled$int"), i = !0;
e ? !1 === t && (i = !1) : i = !1;
o(a, i);
}
var a, s, _, l, d = i(8), u = i(33), p = i(60), m = i(6), $ = i(10), b = i(35), w = m.root, x = w.$("livechat"), v = x.$("ui"), y = v.$("chat_window").$("chat_panel").$("textarea").$("value$string"), j = x.$("settings").$("package"), C = x.$("settings").$("language").$("language$string"), S = x.$("settings").$("file_sending"), A = S.$("enabled$bool"), k = w.$("connection").$("status$string"), I = {
TEXT: 0,
FILE: 1
};
!function() {
g.setPlaceholder($.chat_panel.chattextarea_placeholder);
_ = !!g.dom.scrollIntoViewIfNeeded;
c.autobind(C, "value", function(t) {
s = t;
});
c.autobind(y, "value", function(t) {
g.setValue(t);
o(t ? I.TEXT : I.FILE, l);
});
c.autobind(A, "value", r);
c.autobind(j, "value", r);
g.on("input", n);
g.on("focus", function() {
e();
t();
p.userFocusTextArea();
});
g.on("keydown", function(t) {
if (13 === t.keyCode && !t.shiftKey && !t.ctrlKey && !t.altKey) {
t.preventDefault();
p.userSendMessage(g.getValue());
}
});
h.on("mousedown", function(i) {
b.isChromeIOSMobile || d.isIOS && "ja" === s || i.preventDefault();
d.isAndroid && g.dom.setSelectionRange && g.dom.setSelectionRange(0, 1);
p.userSendMessage(g.getValue());
e();
t();
});
c.autobind(k, "value", function(t) {
c.setDisabled("idle_disconnect" === t);
});
}();
}();
for (var m in p) c[m] = p[m];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "100%",
display: [ "flex", "-webkit-flex" ],
borderWidth: "$$chatTextAreaBorderWidth",
borderStyle: "$$chatTextAreaBorderStyle",
borderColor: "$$chatTextAreaBorderColor",
"&.disabled": {
opacity: "0.5"
}
},
".textarea": {
width: "100%",
lineHeight: "1.3em",
maxHeight: "3.9em",
minHeight: "2em",
padding: "10px",
paddingBottom: "0px",
resize: "none"
},
".textarea_wrapper": {
"flexGrow, -webkit-flex-grow": "1",
"order, -webkit-order": "1"
},
".send_button, .upload_button": {
fontSize: "$$fontSizeXXL",
margin: "$$chatTextAreaSubmitMargin",
padding: "$$chatTextAreaSubmitPadding",
width: "44px",
height: "32px",
boxShadow: "inset 0px 2px 0px 0px rgba(255,255,255,0.30)",
borderRadius: "4px",
".send": {
paddingLeft: "3px",
paddingTop: "4px"
},
".upload": {
paddingTop: "3px"
}
},
".send_button.rtl .send": {
direction: "ltr"
},
".upload_button": {
position: "relative"
},
".send_file": {
position: "absolute",
"top, left": 0
},
".send_wrapper": {
"flexShrink, -webkit-flex-shrink": "0",
"order, -webkit-order": "2",
marginTop: "auto"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatWindow_chatPanel_ChatTextArea"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
var t = a.$("num_typing_agents$int").getValue();
if (t >= 1) {
c.setText((1 == t ? o.chat_panel.name_is_typing : o.chat_panel.agents_are_typing).replace("<name>", a.$("agent_names$string").getValue()));
c.setDisplay("");
} else c.setDisplay("none");
}
var e = i(2), n = i(6), o = i(10), r = n.root.$("livechat"), a = r.$("ui").$("chat_window").$("typing_info");
!function() {
c.autobind(a.$("num_typing_agents$int"), "value", t);
if (e && e.onLanguage) {
e.onLanguage(t);
c.onDestruction(function() {
e.unLanguage(t);
});
}
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontSize: "$$fontSizeS",
color: "$$chatLogSystemMsgColor",
background: "$$chatLogSystemMsgBg",
textAlign: "center"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatWindow_chatPanel_AgentTypingStatus"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader = i(139);
n.__$$__meshim_widget_components_chatWindow_chatPanel_Spinner = i(105);
n.__$$__meshim_widget_components_chatWindow_chatPanel_HistoryLog = i(104);
n.__$$__meshim_widget_components_chatWindow_chatPanel_FastInitChatLog = i(133);
n.__$$__meshim_widget_widgets_Branding = i(89);
n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_AgentTypingStatus = i(217);
n.__$$__meshim_widget_widgets_CookieLawNotice = i(165);
n.__$$__meshim_widget_components_chatWindow_chatPanel_QueueMessage = i(132);
n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_ChatTextArea = i(216);
n.__$$__meshim_widget_widgets_TitleBar = i(169);
n.__$$__meshim_widget_widgets_MobileOptionsMenuIcon = i(166);
n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast = i(84);
n.__$$__meshim_widget_components_chatWindow_chatPanel_File = i(140);
n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_NewMessagesToast = i(214);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "served_by_container", "", [ [ n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader, "", "", [], {} ] ], {
id: "served_by_container",
addClass: "served_by_container"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "scrollable", "", [ [ n.__$$__meshim_widget_components_chatWindow_chatPanel_Spinner, "large_spinner", "", [], {
id: "large_spinner",
addClass: "large_spinner",
size: "big",
visible: "false"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_chatPanel_Spinner, "small_spinner", "", [], {
id: "small_spinner",
visible: "false"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_HistoryLog, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_FastInitChatLog, "", "", [], {} ] ], {
addClass: "chat_log_wrapper"
} ] ], {
addClass: "chatlog_container"
} ], [ n.__$$__jx_ui_Widget, "branding_and_agent_typing_container", "", [ [ n.__$$__meshim_widget_widgets_Branding, "chatpanel_branding", "", [], {
id: "chatpanel_branding",
addClass: "chatpanel_branding"
} ], [ n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_AgentTypingStatus, "agent_typing", "", [], {
id: "agent_typing",
class: "agent_typing"
} ] ], {
id: "branding_and_agent_typing_container",
addClass: "branding_and_agent_typing_container"
} ], [ n.__$$__meshim_widget_widgets_CookieLawNotice, "cookie_law_notice", "", [], {
id: "cookie_law_notice",
addClass: "cookie_law_notice"
} ] ], {
id: "scrollable",
addClass: "scrollable"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_QueueMessage, "queue_message", "", [], {
id: "queue_message",
addClass: "queue_message"
} ] ], {
addClass: "scrollable_container"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_ChatTextArea, "", "", [], {} ] ], {
addClass: "textarea_container"
} ] ], {
addClass: "main_flexbox"
} ], [ n.__$$__meshim_widget_widgets_TitleBar, "", "", [], {} ], [ n.__$$__meshim_widget_widgets_MobileOptionsMenuIcon, "", "", [], {
addClass: "mobile_options_menu_icon"
} ], [ n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_File, "", "", [], {} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_mobileChatWindow_chatPanel_NewMessagesToast, "", "", [], {
addClass: "new_messages_toast"
} ] ], {
addClass: "new_messages_toast_parent"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatPanel": "meshim.widget.components.chatWindow.chatPanel",
"xmlns:mobileChatPanel": "meshim.widget.components.mobileChatWindow.chatPanel"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__served_by_container"), f = s.get(o + "__scrollable"), g = s.get(o + "__large_spinner"), p = s.get(o + "__small_spinner"), m = s.get(o + "__branding_and_agent_typing_container"), $ = s.get(o + "__chatpanel_branding"), b = (s.get(o + "__agent_typing"), 
s.get(o + "__cookie_law_notice")), w = s.get(o + "__queue_message");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var x = function() {
function t() {
if (R.getValue() && !P.getValue()) {
m.setDisplay("none");
b.setDisplay("");
w.setDisplay("none");
} else {
m.setDisplay("");
b.setDisplay("none");
w.setDisplay("");
}
}
function e(t) {
$[t ? "addClass" : "removeClass"]("hide");
}
function n(t) {
h[t ? "removeClass" : "addClass"]("hide");
}
function o() {
F.getValue() > 0 ? $.setDisplay("none") : $.setDisplay("");
}
function r(t) {
if (!V || !0 === t) {
var e = _();
if (e <= I) V = !1; else {
var i = Math.floor(Math.max(e * A, k));
M.scrollTop = M.scrollTop + i;
if (e - i > 0) {
V = !0;
H(function() {
r(!0);
});
} else V = !1;
}
}
}
function a() {
M.scrollTop = 99999999999;
x.userDistFromBottom(0);
}
function s() {
return M.scrollHeight - M.offsetHeight - M.scrollTop;
}
function _() {
var t = s();
x.userDistFromBottom(t);
d && q(t);
return t;
}
function l() {
function t() {
var t = O.getValue(), i = E.getValue();
"chat_panel" === t && !0 === i && e();
}
function e() {
f.setCSSStyle("webkitOverflowScrolling", "auto");
setTimeout(function() {
f.setCSSStyle("webkitOverflowScrolling", "touch");
}, 50);
}
c.autobind(E, "value", t);
c.autobind(O, "value", t);
}
var d, u = i(16), x = i(60), v = i(67), y = i(6), j = i(9), C = i(11), S = i(34), A = .25, k = 5, I = 1, N = y.root.$("livechat"), T = N.$("ui").$("chat_window").$("chat_panel").$("scrollable"), B = N.$("ui").$("chat_window").$("typing_info").$("agent_typing$bool"), D = N.$("ui").$("chat_window"), E = D.$("display$bool"), O = D.$("main_stack_name$string"), L = D.$("display_profile_card$bool"), W = D.$("chat_panel").$("served_by").$("visible$bool"), P = N.$("profile").$("allow_cookies$bool"), R = N.$("settings").$("cookie_law").$("enabled$bool"), F = N.$("channel").$("queue_position$int"), M = (N.$("ui").$("history").$("spinner_visibility"), 
f.dom), V = !1, H = window.requestAnimationFrame || u, q = S.debounce(function(t) {
M.scrollHeight - M.offsetHeight != 1 && (0 === t ? M.scrollTop = M.scrollHeight - M.offsetHeight - I : 0 === M.scrollTop && (M.scrollTop = I));
}, 50);
!function() {
j.rtl(c);
v.setupScrollListener(f, 60);
v.bindSpinnerUI(c, p, g);
f.on("scroll", _);
c.on("touchstart", x.userTouchStart);
c.on("touchmove", x.userTouchMove);
c.on("touchend", x.userTouchEnd);
c.autobind(B, "value", e);
c.autobind(F, "value", o);
c.autobind(T.$("smooth_scroll_count$int"), "value", r);
c.autobind(T.$("instant_scroll_count$int"), "value", a);
c.autobind(R, "value", t);
c.autobind(P, "value", t);
c.autobind(W, "value", n);
d = C.isStyleSupported("overflow-scrolling");
d && l();
c.autobind(L, "value", function(t) {
h.setDisplay(t ? "block" : "none");
});
}();
}();
for (var v in x) c[v] = x[v];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
height: "100%"
},
".mobile_options_menu_icon": {
position: "absolute",
zIndex: "102"
},
"&.ltr": {
".mobile_options_menu_icon": {
"top, left": 0
}
},
"&.rtl": {
".mobile_options_menu_icon": {
"top, right": 0
}
},
".main_flexbox": {
paddingTop: "$$titleBarHeight",
position: "relative",
height: "100%",
display: [ "flex", "-webkit-flex" ],
"flexDirection, -webkit-flex-direction": "column"
},
".scrollable_container": {
position: "relative",
"flexGrow, -webkit-flex-grow": "1",
display: [ "flex", "-webkit-flex" ],
overflow: "hidden"
},
".scrollable": {
"flexGrow, -webkit-flex-grow": "1",
display: [ "flex", "-webkit-flex" ],
"flexDirection, -webkit-flex-direction": "column",
overflowY: "auto",
"-webkit-overflow-scrolling": "touch"
},
".served_by_container": {
"flexShrink, -webkit-flex-shrink": "0",
transition: "transform 0.3s",
position: "absolute",
zIndex: 1,
width: "100%",
padding: "10px",
background: "white",
borderWidth: "$$chatPanelProfileCardContainerBorderWidth",
borderStyle: "$$chatPanelProfileCardContainerBorderStyle",
borderColor: "$$chatPanelProfileCardContainerBorderColor",
"&.hide": {
transform: "translateY(-60px)"
}
},
".chatlog_container": {
position: "relative",
marginTop: "auto",
"flexShrink, -webkit-flex-shrink": "0"
},
".chat_log_wrapper": {
paddingTop: "60px",
margin: "$$chatLogMargin"
},
".branding_and_agent_typing_container": {
position: "relative",
"flexShrink, -webkit-flex-shrink": "0",
height: "1.5em",
width: "100%"
},
".chatpanel_branding": {
position: "absolute",
transition: "opacity 2.5s 0.5s",
padding: "0px 15px 5px"
},
".chatpanel_branding.hide": {
visibility: "hidden",
transition: "none",
opacity: 0
},
".agent_typing": {
paddingTop: "2px",
width: "100%",
whiteSpace: "nowrap",
overflow: "hidden",
textOverflow: "ellipsis"
},
".cookie_law_notice": {
"flexShrink, -webkit-flex-shrink": "0",
fontSize: "$$fontSizeS",
color: "$$chatLogSystemMsgColor",
textAlign: "center",
height: "21px"
},
".textarea_container": {
position: "relative",
"flexShrink, -webkit-flex-shrink": "0"
},
".new_messages_toast_parent": {
position: "absolute",
bottom: "115px",
width: "100%",
height: "0px",
textAlign: "center"
},
".new_messages_toast": {
maxWidth: "80%"
},
".large_spinner": {
position: "absolute",
margin: "auto",
"top, left, right": "0",
bottom: "40px"
},
".queue_message": {
position: "absolute",
bottom: "0px",
left: "10px",
right: "10px",
background: "white",
height: "30px",
padding: "7px 0"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatWindow_ChatPanel"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_IFrame = i(173);
n.__$$__meshim_widget_components_mobileChatWindow_MainScreen = i(116);
n.__$$__meshim_widget_widgets_fontLoader_ZopimFont = i(59);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_IFrame, "", "", [ [ n.__$$__meshim_widget_components_mobileChatWindow_MainScreen, "", "", [], {} ], [ n.__$$__meshim_widget_widgets_fontLoader_ZopimFont, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileWindow": "meshim.widget.components.mobileChatWindow",
top: "0",
left: "0",
width: "100%",
height: "100%",
position: "fixed",
zIndex: "16000003",
minWidth: "100%",
maxWidth: "100%",
minHeight: "100%",
maxHeight: "100%",
useDisplay: "true",
visible: "false"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
c.setVisible(!0);
d.store();
_(!0);
o.animate({
endStyle: g,
duration: 500
}, function(e) {
e || l(!0);
t && t(e);
});
}
function e(t) {
l(!1);
_(!1);
d.restore();
o.animate({
endStyle: f,
duration: 300
}, function(e) {
e || c.setVisible(!1);
t && t(e);
});
}
function n() {
var t = c.idoc.createElement("meta");
t.setAttribute("name", "viewport");
t.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
c.idoc.head.appendChild(t);
}
var o, r = i(57), a = i(60), s = i(92), _ = i(213), l = i(212), d = i(211), u = i(65), h = i(46), f = {
opacity: 0,
translateY: "100%"
}, g = {
opacity: 1,
translateY: "0%"
};
!function() {
c.defaultPlacement.addClass(c.__jx__fqname);
c.defaultPlacement.addClass(r.prototype.__jx__fqname);
h(c.ibody);
a.init();
n();
o = new u(c, f);
c.moveDown = e;
c.moveUp = t;
s.registerChatWindow(c);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_IFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_IFrame, {
fqname: "meshim_widget_components_MobileChatWindow"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_Label = i(19);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [], {
addClass: "unread_badge"
} ], [ n.__$$__jx_ui_Label, "unread_badge_text", "", [], {
id: "unread_badge_text",
addClass: "unread_badge_text"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
var c = s.get(i + "__unread_badge_text");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = 0;
u.updateUnread = function(e) {
var i = Math.min(e, 99);
if (i !== t) {
t = i;
if (t) {
c.setText(t);
u.setOpacity(1);
} else u.setOpacity(0);
}
};
}();
for (var f in h) u[f] = h[f];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
width: "22px",
height: "22px"
},
".unread_badge": {
position: "absolute",
top: "0",
left: "0",
height: "100%",
width: "100%",
background: "#EF4444",
border: "1px solid #AF1E1E",
boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.6)",
borderRadius: "50%"
},
".unread_badge_text": {
position: "absolute",
top: "0",
left: "0",
width: "100%",
height: "100%",
fontWeight: "700",
fontSize: "12px",
color: "#FFF",
lineHeight: "22px",
textAlign: "center"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatUnreadCountBadge_UnreadCount"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_FloatingFrame = i(71);
n.__$$__meshim_widget_components_mobileChatUnreadCountBadge_UnreadCount = i(220);
n.__$$__meshim_widget_components_mobileChatButton_TappingScreen = i(117);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_FloatingFrame, "", "", [ [ n.__$$__meshim_widget_components_mobileChatUnreadCountBadge_UnreadCount, "mobile_unread", "", [], {
id: "mobile_unread",
opacity: "0"
} ], [ n.__$$__meshim_widget_components_mobileChatButton_TappingScreen, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:components": "meshim.widget.components",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileChatButton": "meshim.widget.components.mobileChatButton",
"xmlns:mobileChatUnreadCountBadge": "meshim.widget.components.mobileChatUnreadCountBadge",
useDisplay: "true",
visible: "false",
cursor: "pointer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__mobile_unread");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t() {
if (v && n && w > 0 && o) {
c.setDisplay("");
r.animate({
endStyle: u,
duration: 200
});
} else r.animate({
endStyle: d,
duration: 200
}, function(t) {
t || c.setDisplay("none");
});
}
function e() {
var t = p.getValue();
if (t && 0 != t.width$string && 0 != t.height$string) {
for (var e, i, n, o, r = t.zoom$string, a = t.scale$string, s = 0, _ = l.cssom_prefixes.length; s < _; s++) {
c.wrapper.setStyle(l.cssom_prefixes[s] + "Transform", "scale(" + a + ")");
c.wrapper.setStyle(l.cssom_prefixes[s] + "TransformOrigin", "0 0");
}
if ("auto" === t.left$string) {
e = "auto";
i = parseFloat(t.right$string) - 14 * a;
} else {
i = "auto";
e = parseFloat(t.left$string) + parseFloat(t.width$string) - 14 * a;
}
if ("auto" === t.bottom$string) {
o = "auto";
n = parseFloat(t.top$string) - 14 * a;
} else {
n = "auto";
o = parseFloat(t.bottom$string) + parseFloat(t.height$string) - 14 * a;
}
c.setStyle({
top: "",
right: "",
bottom: "",
left: ""
});
c.setStyle({
position: t.position$string,
top: n,
right: i,
left: e,
bottom: o,
height: c.wrapper.getHeight() / r,
width: c.wrapper.getWidth() / r
});
}
}
var n, o, r, a = i(6), s = i(57), _ = i(65), l = i(11), d = {
opacity: 0
}, u = {
opacity: 1
}, f = a.root.$("livechat"), g = f.$("ui").$("chat_button"), p = g.$("mobile").$("calculated_styles"), m = f.$("settings").$("theme").$("chat_button").$("position_mobile$string"), $ = g.$("fully_visible$bool"), b = g.$("unread_count$int"), w = 0, x = f.$("channel").$("chatting$bool"), v = f.$("ui").$("mobile$bool").getValue();
!function() {
if (v) {
r = new _(c, d);
c.dom.className = "zopim";
c.content.setStyle("textAlign", "left");
c.content.addClass(s.prototype.__jx__fqname);
c.wrapper.addClass(c.__jx__fqname);
c.iframe.style.verticalAlign = "top";
c.autobind(p, "value", e);
c.autobind(m, "value", e);
c.autobind($, "value", function(e) {
if (n !== e) {
n = e;
t();
}
});
c.autobind(b, "value", function(i) {
if (w !== i) {
w = i;
t();
e();
h.updateUnread(w);
}
});
c.autobind(x, "value", function(e) {
if (o !== e) {
o = e;
t();
}
});
}
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_FloatingFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
padding: "3px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_FloatingFrame, {
fqname: "meshim_widget_components_MobileChatUnreadCountBadge"
});
return t;
}();
}, function(t, e, i) {
function n(t) {
t = a.shallowExtend({}, t);
for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e) && o(e, r) > -1) {
for (var i = "", n = 0, s = r.length; n < s; n++) {
var _ = r[n];
if (_ in t) {
i += _ + "(" + t[_] + ")";
delete t[_];
}
}
t.transform = i;
t.webkitTransform = i;
}
return t;
}
var o = i(31), r = [ "matrix", "translate", "translateX", "translateY", "scale", "scaleX", "scaleY", "rotate", "skew", "skewX", "skewY", "matrix3d", "translate3d", "translateZ", "scale3d", "scaleZ", "rotate3d", "rotateX", "rotateY", "rotateZ", "perspective" ], a = i(11);
t.exports = n;
}, function(t, e, i) {
!function(t, i) {
!function(t) {
"use strict";
function e() {}
function i(t) {
var e;
t = (t + "").trim().toLowerCase();
return (e = b.exec(t)) ? (e = parseInt(e[1], 16), new r(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e)) : (e = w.exec(t)) ? n(parseInt(e[1], 16)) : (e = x.exec(t)) ? new r(e[1], e[2], e[3]) : (e = v.exec(t)) ? new r(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100) : (e = y.exec(t)) ? new s(e[1], e[2] / 100, e[3] / 100) : j.hasOwnProperty(t) ? n(j[t]) : null;
}
function n(t) {
return new r(t >> 16 & 255, t >> 8 & 255, 255 & t);
}
function o(t, n, o) {
if (1 === arguments.length) {
t instanceof e || (t = i(t));
if (t) {
t = t.rgb();
o = t.b;
n = t.g;
t = t.r;
} else t = n = o = NaN;
}
return new r(t, n, o);
}
function r(t, e, i) {
this.r = +t;
this.g = +e;
this.b = +i;
}
function a(t, n, o) {
if (1 === arguments.length) if (t instanceof s) {
o = t.l;
n = t.s;
t = t.h;
} else {
t instanceof e || (t = i(t));
if (t) {
if (t instanceof s) return t;
t = t.rgb();
var r = t.r / 255, a = t.g / 255, _ = t.b / 255, l = Math.min(r, a, _), d = Math.max(r, a, _), u = d - l;
o = (d + l) / 2;
if (u) {
n = o < .5 ? u / (d + l) : u / (2 - d - l);
t = r === d ? (a - _) / u + 6 * (a < _) : a === d ? (_ - r) / u + 2 : (r - a) / u + 4;
t *= 60;
} else {
t = NaN;
n = o > 0 && o < 1 ? 0 : t;
}
} else t = n = o = NaN;
}
return new s(t, n, o);
}
function s(t, e, i) {
this.h = +t;
this.s = +e;
this.l = +i;
}
function _(t, e, i) {
return 255 * (t < 60 ? e + (i - e) * t / 60 : t < 180 ? i : t < 240 ? e + (i - e) * (240 - t) / 60 : e);
}
function l(t, e, i) {
if (1 === arguments.length) if (t instanceof d) {
i = t.b;
e = t.a;
t = t.l;
} else if (t instanceof p) {
var n = t.h * A;
i = Math.sin(n) * t.c;
e = Math.cos(n) * t.c;
t = t.l;
} else {
t instanceof r || (t = o(t));
i = f(t.r);
e = f(t.g);
t = f(t.b);
var a = u((.4124564 * i + .3575761 * e + .1804375 * t) / I), s = u((.2126729 * i + .7151522 * e + .072175 * t) / N), _ = u((.0193339 * i + .119192 * e + .9503041 * t) / T);
i = 200 * (s - _);
e = 500 * (a - s);
t = 116 * s - 16;
}
return new d(t, e, i);
}
function d(t, e, i) {
this.l = +t;
this.a = +e;
this.b = +i;
}
function u(t) {
return t > O ? Math.pow(t, 1 / 3) : t / E + B;
}
function c(t) {
return t > D ? t * t * t : E * (t - B);
}
function h(t) {
return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
}
function f(t) {
return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
}
function g(t, e, i) {
if (1 === arguments.length) if (t instanceof p) {
i = t.l;
e = t.c;
t = t.h;
} else {
t instanceof d || (t = l(t));
i = t.l;
e = Math.sqrt(t.a * t.a + t.b * t.b);
t = Math.atan2(t.b, t.a) * k;
t < 0 && (t += 360);
}
return new p(t, e, i);
}
function p(t, e, i) {
this.h = +t;
this.c = +e;
this.l = +i;
}
function m(t, e, i) {
if (1 === arguments.length) if (t instanceof $) {
i = t.l;
e = t.s;
t = t.h;
} else {
t instanceof r || (t = o(t));
var n = t.r / 255, a = t.g / 255, s = t.b / 255;
i = (z * s + H * n - q * a) / (z + H - q);
var _ = s - i, l = (V * (a - i) - F * _) / M;
e = Math.sqrt(l * l + _ * _) / (V * i * (1 - i));
t = e ? Math.atan2(l, _) * k - 120 : NaN;
t < 0 && (t += 360);
}
return new $(t, e, i);
}
function $(t, e, i) {
this.h = +t;
this.s = +e;
this.l = +i;
}
var b = /^#([0-9a-f]{3})$/, w = /^#([0-9a-f]{6})$/, x = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/, v = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, y = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, j = {
aliceblue: 15792383,
antiquewhite: 16444375,
aqua: 65535,
aquamarine: 8388564,
azure: 15794175,
beige: 16119260,
bisque: 16770244,
black: 0,
blanchedalmond: 16772045,
blue: 255,
blueviolet: 9055202,
brown: 10824234,
burlywood: 14596231,
cadetblue: 6266528,
chartreuse: 8388352,
chocolate: 13789470,
coral: 16744272,
cornflowerblue: 6591981,
cornsilk: 16775388,
crimson: 14423100,
cyan: 65535,
darkblue: 139,
darkcyan: 35723,
darkgoldenrod: 12092939,
darkgray: 11119017,
darkgreen: 25600,
darkgrey: 11119017,
darkkhaki: 12433259,
darkmagenta: 9109643,
darkolivegreen: 5597999,
darkorange: 16747520,
darkorchid: 10040012,
darkred: 9109504,
darksalmon: 15308410,
darkseagreen: 9419919,
darkslateblue: 4734347,
darkslategray: 3100495,
darkslategrey: 3100495,
darkturquoise: 52945,
darkviolet: 9699539,
deeppink: 16716947,
deepskyblue: 49151,
dimgray: 6908265,
dimgrey: 6908265,
dodgerblue: 2003199,
firebrick: 11674146,
floralwhite: 16775920,
forestgreen: 2263842,
fuchsia: 16711935,
gainsboro: 14474460,
ghostwhite: 16316671,
gold: 16766720,
goldenrod: 14329120,
gray: 8421504,
green: 32768,
greenyellow: 11403055,
grey: 8421504,
honeydew: 15794160,
hotpink: 16738740,
indianred: 13458524,
indigo: 4915330,
ivory: 16777200,
khaki: 15787660,
lavender: 15132410,
lavenderblush: 16773365,
lawngreen: 8190976,
lemonchiffon: 16775885,
lightblue: 11393254,
lightcoral: 15761536,
lightcyan: 14745599,
lightgoldenrodyellow: 16448210,
lightgray: 13882323,
lightgreen: 9498256,
lightgrey: 13882323,
lightpink: 16758465,
lightsalmon: 16752762,
lightseagreen: 2142890,
lightskyblue: 8900346,
lightslategray: 7833753,
lightslategrey: 7833753,
lightsteelblue: 11584734,
lightyellow: 16777184,
lime: 65280,
limegreen: 3329330,
linen: 16445670,
magenta: 16711935,
maroon: 8388608,
mediumaquamarine: 6737322,
mediumblue: 205,
mediumorchid: 12211667,
mediumpurple: 9662683,
mediumseagreen: 3978097,
mediumslateblue: 8087790,
mediumspringgreen: 64154,
mediumturquoise: 4772300,
mediumvioletred: 13047173,
midnightblue: 1644912,
mintcream: 16121850,
mistyrose: 16770273,
moccasin: 16770229,
navajowhite: 16768685,
navy: 128,
oldlace: 16643558,
olive: 8421376,
olivedrab: 7048739,
orange: 16753920,
orangered: 16729344,
orchid: 14315734,
palegoldenrod: 15657130,
palegreen: 10025880,
paleturquoise: 11529966,
palevioletred: 14381203,
papayawhip: 16773077,
peachpuff: 16767673,
peru: 13468991,
pink: 16761035,
plum: 14524637,
powderblue: 11591910,
purple: 8388736,
rebeccapurple: 6697881,
red: 16711680,
rosybrown: 12357519,
royalblue: 4286945,
saddlebrown: 9127187,
salmon: 16416882,
sandybrown: 16032864,
seagreen: 3050327,
seashell: 16774638,
sienna: 10506797,
silver: 12632256,
skyblue: 8900331,
slateblue: 6970061,
slategray: 7372944,
slategrey: 7372944,
snow: 16775930,
springgreen: 65407,
steelblue: 4620980,
tan: 13808780,
teal: 32896,
thistle: 14204888,
tomato: 16737095,
turquoise: 4251856,
violet: 15631086,
wheat: 16113331,
white: 16777215,
whitesmoke: 16119285,
yellow: 16776960,
yellowgreen: 10145074
};
i.prototype = e.prototype = {
displayable: function() {
return this.rgb().displayable();
},
toString: function() {
return this.rgb() + "";
}
};
var C = o.prototype = r.prototype = new e();
C.brighter = function(t) {
t = null == t ? 1 / .7 : Math.pow(1 / .7, t);
return new r(this.r * t, this.g * t, this.b * t);
};
C.darker = function(t) {
t = null == t ? .7 : Math.pow(.7, t);
return new r(this.r * t, this.g * t, this.b * t);
};
C.rgb = function() {
return this;
};
C.displayable = function() {
return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255;
};
C.toString = function() {
var t = Math.round(this.r), e = Math.round(this.g), i = Math.round(this.b);
return "#" + (isNaN(t) || t <= 0 ? "00" : t < 16 ? "0" + t.toString(16) : t >= 255 ? "ff" : t.toString(16)) + (isNaN(e) || e <= 0 ? "00" : e < 16 ? "0" + e.toString(16) : e >= 255 ? "ff" : e.toString(16)) + (isNaN(i) || i <= 0 ? "00" : i < 16 ? "0" + i.toString(16) : i >= 255 ? "ff" : i.toString(16));
};
var S = a.prototype = s.prototype = new e();
S.brighter = function(t) {
t = null == t ? 1 / .7 : Math.pow(1 / .7, t);
return new s(this.h, this.s, this.l * t);
};
S.darker = function(t) {
t = null == t ? .7 : Math.pow(.7, t);
return new s(this.h, this.s, this.l * t);
};
S.rgb = function() {
var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, i = this.l, n = i + (i < .5 ? i : 1 - i) * e, o = 2 * i - n;
return new r(_(t >= 240 ? t - 240 : t + 120, o, n), _(t, o, n), _(t < 120 ? t + 240 : t - 120, o, n));
};
S.displayable = function() {
return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1;
};
var A = Math.PI / 180, k = 180 / Math.PI, I = .95047, N = 1, T = 1.08883, B = 4 / 29, D = 6 / 29, E = 3 * D * D, O = D * D * D, L = l.prototype = d.prototype = new e();
L.brighter = function(t) {
return new d(this.l + 18 * (null == t ? 1 : t), this.a, this.b);
};
L.darker = function(t) {
return new d(this.l - 18 * (null == t ? 1 : t), this.a, this.b);
};
L.rgb = function() {
var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, i = isNaN(this.b) ? t : t - this.b / 200;
t = N * c(t);
e = I * c(e);
i = T * c(i);
return new r(h(3.2404542 * e - 1.5371385 * t - .4985314 * i), h(-.969266 * e + 1.8760108 * t + .041556 * i), h(.0556434 * e - .2040259 * t + 1.0572252 * i));
};
var W = g.prototype = p.prototype = new e();
W.brighter = function(t) {
return new p(this.h, this.c, this.l + 18 * (null == t ? 1 : t));
};
W.darker = function(t) {
return new p(this.h, this.c, this.l - 18 * (null == t ? 1 : t));
};
W.rgb = function() {
return l(this).rgb();
};
var P = -.14861, R = 1.78277, F = -.29227, M = -.90649, V = 1.97294, H = V * M, q = V * R, z = R * F - M * P, U = m.prototype = $.prototype = new e();
U.brighter = function(t) {
t = null == t ? 1 / .7 : Math.pow(1 / .7, t);
return new $(this.h, this.s, this.l * t);
};
U.darker = function(t) {
t = null == t ? .7 : Math.pow(.7, t);
return new $(this.h, this.s, this.l * t);
};
U.rgb = function() {
var t = isNaN(this.h) ? 0 : (this.h + 120) * A, e = +this.l, i = isNaN(this.s) ? 0 : this.s * e * (1 - e), n = Math.cos(t), o = Math.sin(t);
return new r(255 * (e + i * (P * n + R * o)), 255 * (e + i * (F * n + M * o)), 255 * (e + i * (V * n)));
};
t.version = "0.3.4";
t.color = i;
t.rgb = o;
t.hsl = a;
t.lab = l;
t.hcl = g;
t.cubehelix = m;
}(e);
}();
}, function(t, e, i) {
!function(t, n) {
!function(t, e) {
"use strict";
function i(t, i) {
t = e.rgb(t);
i = e.rgb(i);
var n = t.r, o = t.g, r = t.b, a = i.r - n, s = i.g - o, _ = i.b - r;
return function(e) {
t.r = n + a * e;
t.g = o + s * e;
t.b = r + _ * e;
return t + "";
};
}
function n(t, e) {
var i, n = [], o = [], r = t ? t.length : 0, a = e ? e.length : 0, s = Math.min(r, a);
for (i = 0; i < s; ++i) n.push(l(t[i], e[i]));
for (;i < r; ++i) o[i] = t[i];
for (;i < a; ++i) o[i] = e[i];
return function(t) {
for (i = 0; i < s; ++i) o[i] = n[i](t);
return o;
};
}
function o(t, e) {
return t = +t, e -= t, function(i) {
return t + e * i;
};
}
function r(t, e) {
var i, n = {}, o = {};
null !== t && "object" == typeof t || (t = {});
null !== e && "object" == typeof e || (e = {});
for (i in t) i in e ? n[i] = l(t[i], e[i]) : o[i] = t[i];
for (i in e) i in t || (o[i] = e[i]);
return function(t) {
for (i in n) o[i] = n[i](t);
return o;
};
}
function a(t) {
return function() {
return t;
};
}
function s(t) {
return function(e) {
return t(e) + "";
};
}
function _(t, e) {
var i, n, r, _ = L.lastIndex = W.lastIndex = 0, l = -1, d = [], u = [];
t += "", e += "";
for (;(i = L.exec(t)) && (n = W.exec(e)); ) {
if ((r = n.index) > _) {
r = e.slice(_, r);
d[l] ? d[l] += r : d[++l] = r;
}
if ((i = i[0]) === (n = n[0])) d[l] ? d[l] += n : d[++l] = n; else {
d[++l] = null;
u.push({
i: l,
x: o(i, n)
});
}
_ = W.lastIndex;
}
if (_ < e.length) {
r = e.slice(_);
d[l] ? d[l] += r : d[++l] = r;
}
return d.length < 2 ? u[0] ? s(u[0].x) : a(e) : (e = u.length, function(t) {
for (var i, n = 0; n < e; ++n) d[(i = u[n]).i] = i.x(t);
return d.join("");
});
}
function l(t, e) {
for (var i, n = P.length; --n >= 0 && !(i = P[n](t, e)); ) ;
return i;
}
function d(t, e) {
return t = +t, e -= t, function(i) {
return Math.round(t + e * i);
};
}
function u(t) {
O || (O = document.createElementNS("http://www.w3.org/2000/svg", "g"));
t && (O.setAttribute("transform", t), e = O.transform.baseVal.consolidate());
var e, i = e ? e.matrix : F, n = [ i.a, i.b ], o = [ i.c, i.d ], r = h(n), a = c(n, o), s = h(f(o, n, -a)) || 0;
if (n[0] * o[1] < o[0] * n[1]) {
n[0] *= -1;
n[1] *= -1;
r *= -1;
a *= -1;
}
this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-o[0], o[1])) * R;
this.translate = [ i.e, i.f ];
this.scale = [ r, s ];
this.skew = s ? Math.atan2(a, s) * R : 0;
}
function c(t, e) {
return t[0] * e[0] + t[1] * e[1];
}
function h(t) {
var e = Math.sqrt(c(t, t));
e && (t[0] /= e, t[1] /= e);
return e;
}
function f(t, e, i) {
t[0] += i * e[0];
t[1] += i * e[1];
return t;
}
function g(t) {
return t.length ? t.pop() + "," : "";
}
function p(t, e, i, n) {
if (t[0] !== e[0] || t[1] !== e[1]) {
var r = i.push("translate(", null, ",", null, ")");
n.push({
i: r - 4,
x: o(t[0], e[0])
}, {
i: r - 2,
x: o(t[1], e[1])
});
} else (e[0] || e[1]) && i.push("translate(" + e + ")");
}
function m(t, e, i, n) {
if (t !== e) {
t - e > 180 ? e += 360 : e - t > 180 && (t += 360);
n.push({
i: i.push(g(i) + "rotate(", null, ")") - 2,
x: o(t, e)
});
} else e && i.push(g(i) + "rotate(" + e + ")");
}
function $(t, e, i, n) {
t !== e ? n.push({
i: i.push(g(i) + "skewX(", null, ")") - 2,
x: o(t, e)
}) : e && i.push(g(i) + "skewX(" + e + ")");
}
function b(t, e, i, n) {
if (t[0] !== e[0] || t[1] !== e[1]) {
var r = i.push(g(i) + "scale(", null, ",", null, ")");
n.push({
i: r - 4,
x: o(t[0], e[0])
}, {
i: r - 2,
x: o(t[1], e[1])
});
} else 1 === e[0] && 1 === e[1] || i.push(g(i) + "scale(" + e + ")");
}
function w(t, e) {
var i = [], n = [];
t = new u(t), e = new u(e);
p(t.translate, e.translate, i, n);
m(t.rotate, e.rotate, i, n);
$(t.skew, e.skew, i, n);
b(t.scale, e.scale, i, n);
t = e = null;
return function(t) {
for (var e, o = -1, r = n.length; ++o < r; ) i[(e = n[o]).i] = e.x(t);
return i.join("");
};
}
function x(t) {
return ((t = Math.exp(t)) + 1 / t) / 2;
}
function v(t) {
return ((t = Math.exp(t)) - 1 / t) / 2;
}
function y(t) {
return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
function j(t, e) {
var i, n, o = t[0], r = t[1], a = t[2], s = e[0], _ = e[1], l = e[2], d = s - o, u = _ - r, c = d * d + u * u;
if (c < q) {
n = Math.log(l / a) / M;
i = function(t) {
return [ o + t * d, r + t * u, a * Math.exp(M * t * n) ];
};
} else {
var h = Math.sqrt(c), f = (l * l - a * a + H * c) / (2 * a * V * h), g = (l * l - a * a - H * c) / (2 * l * V * h), p = Math.log(Math.sqrt(f * f + 1) - f), m = Math.log(Math.sqrt(g * g + 1) - g);
n = (m - p) / M;
i = function(t) {
var e = t * n, i = x(p), s = a / (V * h) * (i * y(M * e + p) - v(p));
return [ o + s * d, r + s * u, a * i / x(M * e + p) ];
};
}
i.duration = 1e3 * n;
return i;
}
function C(t, e) {
var i = t - e;
return i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i;
}
function S(t, i) {
t = e.hsl(t);
i = e.hsl(i);
var n = isNaN(t.h) ? i.h : t.h, o = isNaN(t.s) ? i.s : t.s, r = t.l, a = isNaN(i.h) ? 0 : C(i.h, n), s = isNaN(i.s) ? 0 : i.s - o, _ = i.l - r;
return function(e) {
t.h = n + a * e;
t.s = o + s * e;
t.l = r + _ * e;
return t + "";
};
}
function A(t, i) {
t = e.hsl(t);
i = e.hsl(i);
var n = isNaN(t.h) ? i.h : t.h, o = isNaN(t.s) ? i.s : t.s, r = t.l, a = isNaN(i.h) ? 0 : i.h - n, s = isNaN(i.s) ? 0 : i.s - o, _ = i.l - r;
return function(e) {
t.h = n + a * e;
t.s = o + s * e;
t.l = r + _ * e;
return t + "";
};
}
function k(t, i) {
t = e.lab(t);
i = e.lab(i);
var n = t.l, o = t.a, r = t.b, a = i.l - n, s = i.a - o, _ = i.b - r;
return function(e) {
t.l = n + a * e;
t.a = o + s * e;
t.b = r + _ * e;
return t + "";
};
}
function I(t, i) {
t = e.hcl(t);
i = e.hcl(i);
var n = isNaN(t.h) ? i.h : t.h, o = isNaN(t.c) ? i.c : t.c, r = t.l, a = isNaN(i.h) ? 0 : C(i.h, n), s = isNaN(i.c) ? 0 : i.c - o, _ = i.l - r;
return function(e) {
t.h = n + a * e;
t.c = o + s * e;
t.l = r + _ * e;
return t + "";
};
}
function N(t, i) {
t = e.hcl(t);
i = e.hcl(i);
var n = isNaN(t.h) ? i.h : t.h, o = isNaN(t.c) ? i.c : t.c, r = t.l, a = isNaN(i.h) ? 0 : i.h - n, s = isNaN(i.c) ? 0 : i.c - o, _ = i.l - r;
return function(e) {
t.h = n + a * e;
t.c = o + s * e;
t.l = r + _ * e;
return t + "";
};
}
function T(t, i, n) {
arguments.length < 3 && (n = 1);
t = e.cubehelix(t);
i = e.cubehelix(i);
var o = isNaN(t.h) ? i.h : t.h, r = isNaN(t.s) ? i.s : t.s, a = t.l, s = isNaN(i.h) ? 0 : C(i.h, o), _ = isNaN(i.s) ? 0 : i.s - r, l = i.l - a;
return function(e) {
t.h = o + s * e;
t.s = r + _ * e;
t.l = a + l * Math.pow(e, n);
return t + "";
};
}
function B(t, i, n) {
arguments.length < 3 && (n = 1);
t = e.cubehelix(t);
i = e.cubehelix(i);
var o = isNaN(t.h) ? i.h : t.h, r = isNaN(t.s) ? i.s : t.s, a = t.l, s = isNaN(i.h) ? 0 : i.h - o, _ = isNaN(i.s) ? 0 : i.s - r, l = i.l - a;
return function(e) {
t.h = o + s * e;
t.s = r + _ * e;
t.l = a + l * Math.pow(e, n);
return t + "";
};
}
function D(t, e) {
e = z.call(e);
e[0] = null;
e.unshift(null);
return function(i, n) {
e[0] = i;
e[1] = n;
return t.apply(null, e);
};
}
function E(t) {
return 1 === arguments.length ? t : D(t, arguments);
}
var O, L = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, W = new RegExp(L.source, "g"), P = [ function(t, a) {
var s, l = typeof a;
return ("string" === l ? (s = e.color(a)) ? (a = s, i) : _ : a instanceof e.color ? i : Array.isArray(a) ? n : "object" === l && isNaN(a) ? r : o)(t, a);
} ], R = 180 / Math.PI, F = {
a: 1,
b: 0,
c: 0,
d: 1,
e: 0,
f: 0
}, M = Math.SQRT2, V = 2, H = 4, q = 1e-12, z = Array.prototype.slice;
t.version = "0.4.0";
t.interpolate = l;
t.interpolators = P;
t.interpolateArray = n;
t.interpolateNumber = o;
t.interpolateObject = r;
t.interpolateRound = d;
t.interpolateString = _;
t.interpolateTransform = w;
t.interpolateZoom = j;
t.interpolateRgb = i;
t.interpolateHsl = S;
t.interpolateHslLong = A;
t.interpolateLab = k;
t.interpolateHcl = I;
t.interpolateHclLong = N;
t.interpolateCubehelix = T;
t.interpolateCubehelixLong = B;
t.interpolateBind = E;
}(e, i(223));
}();
}, function(t, e, i) {
!function(t, i) {
!function(t) {
"use strict";
function e(t, e) {
return function(i) {
return t(i, e);
};
}
function i(t, e, i) {
return function(n) {
return t(n, e, i);
};
}
function n(t, e) {
e = D.call(e);
e[0] = null;
return function(i) {
e[0] = i;
return t.apply(null, e);
};
}
function o(t, o, r) {
switch (arguments.length) {
case 1:
return t;

case 2:
return e(t, o);

case 3:
return i(t, o, r);

default:
return n(t, arguments);
}
}
function r(t) {
return +t;
}
function a(t) {
return t * t;
}
function s(t) {
return t * (2 - t);
}
function _(t) {
return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
function l(t) {
return t * t * t;
}
function d(t) {
return --t * t * t + 1;
}
function u(t) {
return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
function c(t, e) {
null == e && (e = 3);
return Math.pow(t, e);
}
function h(t, e) {
null == e && (e = 3);
return 1 - Math.pow(1 - t, e);
}
function f(t, e) {
null == e && (e = 3);
return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
}
function g(t) {
return 1 - Math.cos(t * O);
}
function p(t) {
return Math.sin(t * O);
}
function m(t) {
return (1 - Math.cos(E * t)) / 2;
}
function $(t) {
return Math.pow(2, 10 * t - 10);
}
function b(t) {
return 1 - Math.pow(2, -10 * t);
}
function w(t) {
return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}
function x(t) {
return 1 - Math.sqrt(1 - t * t);
}
function v(t) {
return Math.sqrt(1 - --t * t);
}
function y(t) {
return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
function j(t) {
return 1 - C(1 - t);
}
function C(t) {
return t < L ? z * t * t : t < P ? z * (t -= W) * t + R : t < M ? z * (t -= F) * t + V : z * (t -= H) * t + q;
}
function S(t) {
return ((t *= 2) <= 1 ? 1 - C(1 - t) : C(t - 1) + 1) / 2;
}
function A(t, e) {
e = null == e ? 1.70158 : +e;
return t * t * ((e + 1) * t - e);
}
function k(t, e) {
e = null == e ? 1.70158 : +e;
return --t * t * ((e + 1) * t + e) + 1;
}
function I(t, e) {
e = null == e ? 1.70158 : +e;
return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2;
}
function N(t, e, i) {
e = null == e ? 1 : Math.max(1, e);
i = (null == i ? .3 : i) / U;
return e * Math.pow(2, 10 * --t) * Math.sin((i * Math.asin(1 / e) - t) / i);
}
function T(t, e, i) {
e = null == e ? 1 : Math.max(1, e);
i = (null == i ? .3 : i) / U;
return 1 - e * Math.pow(2, -10 * t) * Math.sin((+t + i * Math.asin(1 / e)) / i);
}
function B(t, e, i) {
e = null == e ? 1 : Math.max(1, e);
i = (null == i ? .3 : i) / U;
var n = i * Math.asin(1 / e);
return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((n - t) / i) : 2 - e * Math.pow(2, -10 * t) * Math.sin((n + t) / i)) / 2;
}
var D = Array.prototype.slice, E = Math.PI, O = E / 2, L = 4 / 11, W = 6 / 11, P = 8 / 11, R = .75, F = 9 / 11, M = 10 / 11, V = .9375, H = 21 / 22, q = 63 / 64, z = 1 / L / L, U = 2 * Math.PI;
t.version = "0.5.1";
t.easeBind = o;
t.easeLinearIn = r;
t.easeLinearOut = r;
t.easeLinearInOut = r;
t.easeQuadIn = a;
t.easeQuadOut = s;
t.easeQuadInOut = _;
t.easeCubicIn = l;
t.easeCubicOut = d;
t.easeCubicInOut = u;
t.easePolyIn = c;
t.easePolyOut = h;
t.easePolyInOut = f;
t.easeSinIn = g;
t.easeSinOut = p;
t.easeSinInOut = m;
t.easeExpIn = $;
t.easeExpOut = b;
t.easeExpInOut = w;
t.easeCircleIn = x;
t.easeCircleOut = v;
t.easeCircleInOut = y;
t.easeBounceIn = j;
t.easeBounceOut = C;
t.easeBounceInOut = S;
t.easeBackIn = A;
t.easeBackOut = k;
t.easeBackInOut = I;
t.easeElasticIn = N;
t.easeElasticOut = T;
t.easeElasticInOut = B;
}(e);
}();
}, function(t, e, i) {
!function(t, i) {
!function(t) {
"use strict";
function e(t, e, i) {
this.id = ++d;
this.restart(t, e, i);
}
function i(t, i, n) {
return new e(t, i, n);
}
function n(t) {
t = null == t ? Date.now() : +t;
++_;
try {
for (var e = a; e; ) {
t >= e.time && (0, e.callback)(t - e.time, t);
e = e.next;
}
} finally {
--_;
}
}
function o() {
_ = l = 0;
try {
n();
} finally {
for (var t, e = a, i = 1 / 0; e; ) if (e.callback) {
i > e.time && (i = e.time);
e = (t = e).next;
} else e = t ? t.next = e.next : a = e.next;
s = t;
r(i);
}
}
function r(t) {
if (!_) {
l && (l = clearTimeout(l));
var e = t - Date.now();
e > 24 ? t < 1 / 0 && (l = setTimeout(o, e)) : (_ = 1, c(o));
}
}
var a, s, _ = 0, l = 0, d = 0, u = {}, c = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame) || function(t) {
return setTimeout(t, 17);
};
e.prototype = i.prototype = {
restart: function(t, e, i) {
if ("function" != typeof t) throw new TypeError("callback is not a function");
i = (null == i ? Date.now() : +i) + (null == e ? 0 : +e);
var n = this.id, o = u[n];
if (o) o.callback = t, o.time = i; else {
o = {
next: null,
callback: t,
time: i
};
s ? s.next = o : a = o;
u[n] = s = o;
}
r();
},
stop: function() {
var t = this.id, e = u[t];
if (e) {
e.callback = null, e.time = 1 / 0;
delete u[t];
r();
}
}
};
t.version = "0.1.0";
t.timer = i;
t.timerFlush = n;
}(e);
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Favicon = i(118);
n.__$$__jx_ui_Label = i(19);
n.__$$__meshim_widget_widgets_BorderOverlay = i(88);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Favicon, "", "", [], {
addClass: "favicon"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Label, "status_text_wrapper", "", [ [ n.__$$__jx_ui_Label, "status_text", "", [], {
id: "status_text"
} ], [ n.__$$__jx_ui_Label, "", "", [], {
text: " - "
} ] ], {
addClass: "status",
id: "status_text_wrapper"
} ], [ n.__$$__jx_ui_Label, "greeting", "", [], {
id: "greeting"
} ] ], {
addClass: "button_text"
} ], [ n.__$$__meshim_widget_widgets_BorderOverlay, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
var c = s.get(i + "__status_text_wrapper"), h = s.get(i + "__status_text"), f = s.get(i + "__greeting");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
u.setLanguageDirection = function(t) {
"rtl" == t ? u.addClass("is-rtl") : u.removeClass("is-rtl");
};
u.setStatusDisplay = function(t) {
c.setDisplay(t ? "" : "none");
};
u.setStatusText = function(t) {
h.setText(t);
};
u.updateGreeting = function(t) {
f.setText(t);
};
}();
for (var p in g) u[p] = g[p];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
paddingLeft: "$$faviconWidth",
overflow: "hidden"
},
"&.is-rtl": {
paddingLeft: 0,
paddingRight: "$$faviconWidth"
},
".favicon": {
position: "absolute",
height: "100%",
left: 0,
verticalAlign: "text-top",
textAlign: "center",
paddingTop: "8px",
width: "$$faviconWidth",
background: "$$faviconBg",
color: "$$faviconColor",
"borderTopLeftRadius, borderBottomLeftRadius": "$$chatButtonRadius"
},
"&.is-rtl .favicon": {
left: "auto",
right: 0,
"borderTopLeftRadius, borderBottomLeftRadius": 0,
"borderTopRightRadius, borderBottomRightRadius": "$$chatButtonRadius"
},
".button_text": {
position: "relative",
overflow: "hidden",
verticalAlign: "text-top",
width: "100%",
bottom: "0",
whiteSpace: "nowrap",
fontWeight: "$$chatButtonFontWeight",
lineHeight: "$$chatButtonHeight",
paddingLeft: "$$chatButtonPaddingFavicon",
paddingRight: "$$chatButtonPadding",
".status": {
fontWeight: "$$chatButtonStatusFontWeight"
}
},
".border_overlay": {
borderWidth: "$$chatButtonBorderWidth",
borderStyle: "$$chatButtonBorderStyle",
borderColor: "$$chatButtonBorderColor"
},
"&.is-rtl .button_text": {
paddingLeft: "$$chatButtonPadding",
paddingRight: "$$chatButtonPaddingFavicon"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatButton_ButtonBar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_mobileChatButton_ButtonBar = i(227);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_mobileChatButton_ButtonBar, "button_bar", "", [], {
id: "button_bar",
addClass: "button_bar"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mobileChatButton": "meshim.widget.components.mobileChatButton",
visibility: "hidden"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__button_bar");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t() {
m(e, c, !0);
}
function e() {
O.update(parseInt(c.getWidth(), 10) || parseInt($.getVariable("chatButtonMinWidth"), 10));
L.update(parseInt($.getVariable("chatButtonHeight"), 10));
if (!f && u) {
c.setVisibility("");
f = !0;
}
}
var n, o, r, a, s, _, l, d, u, f, g = i(2), p = i(20), m = i(16), $ = i(3), b = i(6), w = i(9), x = i(10), v = i(101), y = b.root.$("livechat"), j = y.$("ui"), C = j.$("chat_button"), S = C.$("display$bool"), A = y.$("account").$("status$string"), k = y.$("settings").$("theme").$("chat_button").$("display_status$bool"), I = -1, N = y.$("settings").$("greetings"), T = N.$("online$string"), B = N.$("offline$string"), D = y.$("settings").$("cookie_law").$("enabled$bool"), E = y.$("profile").$("allow_cookies$bool"), O = C.$("button_width$int"), L = C.$("button_height$int"), W = j.$("theme_loaded$bool"), P = j.$("lang_dir$string"), R = y.$("channel").$("chatting$bool");
!function() {
function e() {
var t;
t = s && void 0 !== _ && !_ ? x.cookie_law.disabled_mobile : "offline" != o || d ? x.chat_button.mobile_greeting.online : x.chat_button.mobile_greeting.offline;
if (u != t) {
u = t;
h.updateGreeting(t);
}
}
function i() {
var t = "offline" == o && d ? x.status.online : x.status[o || "offline"];
h.setStatusText(t);
$(e);
}
function f() {
$(e);
}
function $() {
for (var e = 0, i = arguments.length; e < i; e++) p(arguments[e]) && arguments[e]();
t();
}
w.rtl(c);
c.autobind(S, "value", function(t) {
if (n !== t) {
n = t;
$();
}
});
c.autobind(T, "value", function(t) {
r = t;
$(e);
});
c.autobind(B, "value", function(t) {
a = t;
$(e);
});
c.autobind(E, "value", function(t) {
_ = t;
$(e);
});
c.autobind(R, "value", function(t) {
if (d !== t) {
d = t;
$(i);
}
});
c.autobind(D, "value", function(t) {
s = t;
$(e);
});
c.autobind(W, "value", t);
if (g && g.onLanguage) {
g.onLanguage(f);
c.onDestruction(function() {
g.unLanguage(f);
});
}
c.autobind(k, "value", function(t) {
if (I !== t) {
I = t;
h.setStatusDisplay(t);
$();
}
});
c.autobind(A, "value", function(t) {
if (o !== t) {
o = t;
$(i);
}
});
c.autobind(P, "value", function(t) {
if (void 0 !== t && l !== t) {
l = t;
h.setLanguageDirection(t);
}
});
m(v.ieQuirksModeFix);
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
margin: "0 auto",
position: "relative",
"bottom, left": "auto",
paddingRight: "0px",
paddingTop: "0px"
},
".button_bar": {
minWidth: "0",
maxWidth: "$$chatButtonMaxWidth",
height: "$$chatButtonHeight",
color: "$$chatButtonColor",
background: "$$chatButtonBg",
boxShadow: "$$chatButtonShadow",
borderRadius: "$$chatButtonRadius"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_mobileChatButton_Button"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_FloatingFrame = i(71);
n.__$$__meshim_widget_widgets_fontLoader_ZopimFont = i(59);
n.__$$__meshim_widget_components_mobileChatButton_Button = i(228);
n.__$$__meshim_widget_components_mobileChatButton_TappingScreen = i(117);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_FloatingFrame, "", "", [ [ n.__$$__meshim_widget_widgets_fontLoader_ZopimFont, "", "", [], {} ], [ n.__$$__meshim_widget_components_mobileChatButton_Button, "", "", [], {} ], [ n.__$$__meshim_widget_components_mobileChatButton_TappingScreen, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:mobileChatButton": "meshim.widget.components.mobileChatButton",
useDisplay: "true",
visible: "false"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
c.setVisible(!0);
a.animate({
endStyle: v,
duration: F ? 200 : 0
}, function(e) {
e || N.update(!0);
t && t(e);
});
F = !0;
}
function e(t) {
N.update(!1);
a.animate({
endStyle: y,
duration: 200
}, function(e) {
e || c.setVisible(!1);
t && t(e);
});
}
function n(t) {
return "auto" !== t ? t + "px" : t;
}
function o() {
var t, e, i, o, a, s, l, d, u, h, f, g, $, b, v, y, j, C, S, A, I = c.wrapper.getWidth(), N = c.wrapper.getHeight();
if (R) {
t = R.scale;
i = R.pageLeft;
o = R.pageTop;
l = window.innerWidth;
d = window.innerHeight;
u = R.offsetLeft;
h = R.offsetTop;
a = R.width;
s = R.height;
} else {
t = m.getZoomLevel();
i = window.pageXOffset;
o = window.pageYOffset;
a = window.innerWidth;
s = window.innerHeight;
}
e = (1 / t).toFixed(2);
f = I / t;
g = N / t;
v = m.getOffset();
y = "fixed";
_.isIOS && m.iOSVersion < 13 && t >= 1 && (y = "absolute");
for (var T = 0, B = p.cssom_prefixes.length; T < B; T++) {
c.wrapper.setStyle(p.cssom_prefixes[T] + "Transform", "scale(" + e + ")");
c.wrapper.setStyle(p.cssom_prefixes[T] + "TransformOrigin", "0 0");
}
c.setStyle({
position: y,
width: f + "px",
height: g + "px",
top: "",
right: "",
bottom: "",
left: ""
});
$ = P;
b = W;
if ("br" === r) {
void 0 === L.getValue() && (b += w);
void 0 === O.getValue() && ($ += x);
}
$ /= t;
b /= t;
j = A = C = S = "auto";
if ("fixed" === y) if (R) {
"bl" === r ? A = u + $ : C = l - (a + u) + $;
S = Math.floor(l - a) < 1 ? b : d - (s + h) + b;
} else {
"bl" === r ? A = $ : C = $;
S = b;
} else {
j = Math.ceil(o + s - g - b - v.top);
A = "bl" === r ? Math.ceil(i + $ - v.left) : Math.floor(i + a - f - $ - v.left);
}
j = n(j);
C = n(C);
S = n(S);
A = n(A);
k.update({
height$string: g,
width$string: f,
zoom$string: t,
scale$string: e,
position$string: y,
top$string: j,
right$string: C,
bottom$string: S,
left$string: A
});
c.setStyle({
top: j,
right: C,
bottom: S,
left: A
});
V();
}
var r, a, s = i(14), _ = i(8), l = i(34), d = i(55), u = i(6), h = i(92), f = i(57), g = i(65), p = i(11), m = i(35), $ = i(46), b = i(74), w = 5, x = 5, v = {
opacity: 1,
translateY: "0%"
}, y = {
opacity: 0,
translateY: "50%"
}, j = u.root.$("livechat"), C = j.$("settings"), S = j.$("ui"), A = S.$("chat_button"), k = A.$("mobile").$("calculated_styles"), I = A.$("display$bool"), N = A.$("fully_visible$bool"), T = A.$("button_width$int"), B = A.$("button_height$int"), D = C.$("theme").$("chat_button"), E = D.$("position_mobile$string"), O = D.$("h_offset_mobile$int"), L = D.$("v_offset_mobile$int"), W = 10, P = 10, R = window.visualViewport, F = !1;
c.on("show", function() {
M();
});
var M = l.debounce(o, 300), V = d.once(function() {
h.registerChatButton(c);
});
!function() {
b.bind(c.iwin);
R && "offsetTop" in R && "offsetLeft" in R && "pageTop" in R && "pageLeft" in R || (R = null);
a = new g(c, y);
c.dom.className = "zopim";
c.iframe.setStyle("display", "block");
c.content.addClass(f.prototype.__jx__fqname);
c.wrapper.addClass(c.__jx__fqname);
c.ibody.style.overflow = "hidden";
$(c.ibody);
c.wrapper.addClass("mobile").setStyle({
position: "absolute",
top: 0,
left: 0
});
c.content.setStyle("textAlign", "left");
c.iframe.style.verticalAlign = "top";
c.autobind(O, "value", function(t) {
t = parseInt(t, 10);
if (P != t && !isNaN(t) && t >= 0) {
P = t;
M();
}
});
c.autobind(L, "value", function(t) {
t = parseInt(t, 10);
if (W != t && !isNaN(t) && t >= 0) {
W = t;
M();
}
});
c.autobind(E, "value", function(t) {
if (t && r != t) {
"bl" != t && "br" != t && (t = "br");
r && c.wrapper.removeClass(r);
r = t;
r && c.wrapper.addClass(r);
M();
}
});
if (R) {
R.addEventListener("scroll", M);
R.addEventListener("resize", M);
} else {
s.window.on("orientationchange", M);
s.window.on("resize", M);
s.window.on("scroll", M);
}
c.autobind(T, "value", function(t) {
t && M();
});
c.autobind(B, "value", function(t) {
t && M();
});
c.autobind(I, "value", M);
c.moveUp = t;
c.moveDown = e;
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_FloatingFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_FloatingFrame, {
fqname: "meshim_widget_components_MobileChatButton"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName || (r.tagName = "img");
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(7);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_Image"
});
n.prototype.getAlt = function() {
return this.dom.alt;
};
n.prototype.setAlt = function(t) {
this.dom.alt = t;
return this;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Favicon = i(118);
n.__$$__jx_ui_Label = i(19);
n.__$$__meshim_widget_widgets_BorderOverlay = i(88);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Favicon, "", "", [], {
addClass: "favicon"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Label, "status_text_wrapper", "", [ [ n.__$$__jx_ui_Label, "status_text", "", [], {
id: "status_text"
} ], [ n.__$$__jx_ui_Label, "", "", [], {
text: " - "
} ] ], {
addClass: "status",
id: "status_text_wrapper"
} ], [ n.__$$__jx_ui_Label, "greeting", "", [], {
id: "greeting",
addClass: "greeting"
} ] ], {
addClass: "blinds blinds_top"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Label, "unread", "", [], {
id: "unread",
text: "XX new messages"
} ] ], {
addClass: "blinds blinds_bottom"
} ] ], {
addClass: "button_text"
} ], [ n.__$$__meshim_widget_widgets_BorderOverlay, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__status_text_wrapper"), f = s.get(o + "__status_text"), g = s.get(o + "__greeting"), p = s.get(o + "__unread");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function t() {
a && r > 0 ? c.addClass("unread") : c.removeClass("unread");
p.setText(o.chat_button[1 == r ? "unread_one" : "unread_many"].replace("<number>", r));
}
var e = i(2), n = i(12), o = i(10), r = 0, a = !1;
c.setIsChatting = function(e) {
var i = n(e);
if (a !== i) {
a = i;
t();
}
};
c.setLanguageDirection = function(t) {
"rtl" == t ? c.addClass("is-rtl") : c.removeClass("is-rtl");
};
c.setStatusDisplay = function(t) {
h.setDisplay(t ? "" : "none");
};
c.setStatusText = function(t) {
f.setText(t);
};
c.updateUnread = function(e) {
if (r !== e) {
r = parseInt(e, 10) || 0;
t();
}
};
c.updateGreeting = function(t) {
g.setText(t);
};
!function() {
if (e && e.onLanguage) {
e.onLanguage(t);
c.onDestruction(function() {
e.unLanguage(t);
});
}
}();
}();
for (var $ in m) c[$] = m[$];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
paddingLeft: "$$faviconWidth",
overflow: "hidden"
},
"&.is-rtl": {
paddingLeft: 0,
paddingRight: "$$faviconWidth"
},
"&.unread .button_text ": {
bottom: "100%"
},
".blinds": {
"width, height": "100%",
overflow: "hidden",
textOverflow: "ellipsis",
whiteSpace: "nowrap"
},
".favicon": {
position: "absolute",
height: "100%",
left: 0,
verticalAlign: "text-top",
textAlign: "center",
paddingTop: "8px",
width: "$$faviconWidth",
background: "$$faviconBg",
color: "$$faviconColor"
},
"&.is-rtl .favicon": {
left: "auto",
right: 0
},
".button_text": {
position: "relative",
overflow: "hidden",
verticalAlign: "text-top",
width: "100%",
bottom: "0",
transition: "bottom 0.3s ease-in-out",
fontWeight: "$$chatButtonFontWeight",
lineHeight: "$$chatButtonHeight",
paddingLeft: "$$chatButtonPaddingFavicon",
paddingRight: "$$chatButtonPadding",
".status": {
fontWeight: "$$chatButtonStatusFontWeight"
}
},
".border_overlay": {
borderWidth: "$$chatButtonBorderWidth",
borderStyle: "$$chatButtonBorderStyle",
borderColor: "$$chatButtonBorderColor"
},
"&.is-rtl .button_text": {
paddingLeft: "$$chatButtonPadding",
paddingRight: "$$chatButtonPaddingFavicon"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatButton_ButtonBar"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatButton_ButtonBar = i(231);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatButton_ButtonBar, "button_bar", "", [], {
id: "button_bar",
addClass: "button_bar"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatButton": "meshim.widget.components.chatButton",
visibility: "hidden"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__button_bar");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t() {
m(e, c, !0);
}
function e() {
W.update(parseInt(c.getWidth(), 10) || parseInt($.getVariable("chatButtonMinWidth"), 10));
P.update(parseInt($.getVariable("chatButtonHeight"), 10));
if (!f && u) {
c.setVisibility("");
f = !0;
}
}
var n, o, r, a, s, _, l, d, u, f, g = i(2), p = i(20), m = i(16), $ = i(3), b = i(6), w = i(9), x = i(10), v = i(101), y = b.root.$("livechat"), j = y.$("ui"), C = j.$("chat_button"), S = C.$("display$bool"), A = C.$("unread_count$int"), k = 0, I = y.$("account").$("status$string"), N = y.$("settings").$("theme").$("chat_button").$("display_status$bool"), T = -1, B = y.$("settings").$("greetings"), D = B.$("online$string"), E = B.$("offline$string"), O = y.$("settings").$("cookie_law").$("enabled$bool"), L = y.$("profile").$("allow_cookies$bool"), W = C.$("button_width$int"), P = C.$("button_height$int"), R = j.$("theme_loaded$bool"), F = j.$("lang_dir$string"), M = y.$("channel").$("chatting$bool");
!function() {
function e() {
var t;
t = s && void 0 !== _ && !_ ? x.cookie_law.disabled : "offline" != o || d ? x.get(D) : x.get(E);
if (u != t) {
u = t;
h.updateGreeting(t);
}
}
function i() {
var t = "offline" == o && d ? x.status.online : x.status[o || "offline"];
h.setStatusText(t);
b(e);
}
function f() {
h.updateUnread(k);
}
function $() {
b(f, e);
}
function b() {
for (var e = 0, i = arguments.length; e < i; e++) p(arguments[e]) && arguments[e]();
t();
}
w.rtl(c);
c.autobind(S, "value", function(t) {
if (n !== t) {
n = t;
b();
}
});
c.autobind(A, "value", function(t) {
k = t;
b(f);
});
c.autobind(D, "value", function(t) {
r = t;
b(e);
});
c.autobind(E, "value", function(t) {
a = t;
b(e);
});
c.autobind(L, "value", function(t) {
_ = t;
b(e);
});
c.autobind(M, "value", function(t) {
if (d !== t) {
d = t;
h.setIsChatting(t);
b(i);
}
});
c.autobind(O, "value", function(t) {
s = t;
b(e);
});
c.autobind(R, "value", t);
if (g && g.onLanguage) {
g.onLanguage($);
c.onDestruction(function() {
g.unLanguage($);
});
}
c.autobind(N, "value", function(t) {
if (T !== t) {
T = t;
h.setStatusDisplay(t);
b();
}
});
c.autobind(I, "value", function(t) {
if (o !== t) {
o = t;
b(i);
}
});
c.autobind(F, "value", function(t) {
if (void 0 !== t && l !== t) {
l = t;
h.setLanguageDirection(t);
}
});
m(v.ieQuirksModeFix);
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
margin: "0 auto",
position: "absolute",
"bottom, left": 0
},
".button_bar": {
"minWidth, *width": "$$chatButtonMinWidth",
maxWidth: "$$chatButtonMaxWidth",
height: "$$chatButtonHeight",
color: "$$chatButtonColor",
background: "$$chatButtonBg",
boxShadow: "$$chatButtonShadow"
},
"**self, **self *": {
cursor: "pointer"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatButton_Button"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, n, s, _) {
function l(t, e) {
return [ [ t, 0, 0 ], [ 0, e, 0 ], [ 0, 0, 1 ] ];
}
function d(t, e) {
return [ [ 1, 0, t ], [ 0, 1, e ], [ 0, 0, 1 ] ];
}
function u(t) {
return [ t[0][0], t[1][0], t[0][1], t[1][1], t[0][2], t[1][2] ].join(" ");
}
function c(t) {
var e = g.generateSvgLinearGradient(m, t), i = m.createElementNS("http://www.w3.org/2000/svg", "defs");
i.appendChild(e);
p.parentNode.appendChild(i);
p.setAttribute("fill", "url(#" + e.id + ")");
return p;
}
function h(t, e) {
var i, n, o = [];
for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
i = e ? m.createElementNS(e, r) : m.createElement(r);
n = t[r];
for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && i.setAttribute(a, n[a]);
o.push(i);
}
return o;
}
function f() {
for (var t = [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ], e = 0; e < arguments.length; e++) {
for (var i = [], n = arguments[e], o = 0; o < 3; o++) {
i[o] = [];
for (var r = 0; r < 3; r++) {
for (var a = 0, s = 0; s < 3; s++) a += t[o][s] * n[s][r];
i[o][r] = a;
}
}
t = i;
}
return t;
}
var g = i(58);
e = e || o.generateID();
var p, m = t.ownerDocument;
p = m.createElementNS("http://www.w3.org/2000/svg", "path");
p.vectorType = "svg";
o.extend(p);
r.extend(p);
o.set(e, p);
var $ = !1;
p.appendToParent = function(e) {
o.hasParentNode(p) || o.appendChild(t, p);
if (e && !$) {
t.appendToParent && t.appendToParent(!0);
$ = !0;
}
};
p.setClass = function(t) {
p.setAttribute("class", t);
return p;
};
p.addClass = function(t) {
p.setAttribute("class", p.getAttribute("class") + " " + t);
return p;
};
p.removeClass = function(t) {
var e = p.getAttribute("class"), i = new RegExp("\\b" + t + "\\b", "g");
e.replace(i, "");
p.setAttribute("class", e);
return p;
};
p.setPath = function(t) {
p.setAttribute("d", t);
return p;
};
p.setOpacity = function(t) {
p.style.opacity = parseFloat(t);
return p;
};
p.setFill = function(t) {
/linear/.test(t) ? c(t) : p.setAttribute("fill", t);
return p;
};
p.setStroke = function(t) {
p.setAttribute("stroke", t);
return p;
};
p.setStrokeWidth = function(t) {
p.setAttribute("stroke-width", t);
return p;
};
var b = [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ];
p.resetTransform = function() {
p.setAttribute("transform", "");
b = [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ];
return p;
};
p.moveRight = function(t) {
var e = parseInt(t, 10);
if (isNaN(e)) return p;
b = f(b, d(e, 0));
p.setAttribute("transform", "matrix(" + u(b) + ")");
return p;
};
p.setLeft = p.moveRight;
p.moveDown = function(t) {
var e = parseInt(t, 10);
if (isNaN(e)) return p;
b = f(b, d(0, e));
p.setAttribute("transform", "matrix(" + u(b) + ")");
return p;
};
p.setTop = p.moveDown;
p.flipAlong = function(t) {
t = t.split("");
for (var e = 0; e < t.length; e++) {
var i = p.getBBox();
switch (t[e]) {
case "x":
b = f(b, l(-1, 1), d(-(2 * i.x + i.width), 0));
p.setAttribute("transform", "matrix(" + u(b) + ")");
break;

case "y":
b = f(b, l(1, -1), d(0, -(2 * i.y + i.height)));
p.setAttribute("transform", "matrix(" + u(b) + ")");
}
}
if (a.isWebkit) {
var n = p.getAttribute("filter");
p.setAttribute("filter", "");
p.setAttribute("filter", n);
}
return p;
};
p.setShadow = function(t) {
t = g.parseShadow(t);
var e, i;
if (!a.isOpera) {
var n = {
feOffset: {
result: "offset-out",
in: "SourceGraphic",
dx: t.offsetX,
dy: t.offsetY
},
feColorMatrix: {
result: "matrix-out",
in: "offset-out",
type: "matrix",
values: "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
},
feGaussianBlur: {
result: "blur-out",
in: "matrix-out",
stdDeviation: t.blurRadius / 2
},
feBlend: {
in: "SourceGraphic",
in2: "blur-out",
mode: "normal"
}
};
e = m.createElementNS("http://www.w3.org/2000/svg", "filter"), i = "sha_" + new Date().getTime();
e.setAttribute("id", i);
for (var o = h(n, "http://www.w3.org/2000/svg"), r = 0; r < o.length; r++) e.appendChild(o[r]);
var s = m.createElementNS("http://www.w3.org/2000/svg", "defs");
s.appendChild(e);
p.parentNode.appendChild(s);
p.setAttribute("filter", "url(#" + i + ")");
return p;
}
};
o.addChildren(p, s);
p.appendToParent();
p.setStyle(n);
p.setAttributes(_);
return p;
}
var o = i(4), r = i(14), a = i(8);
t.exports = n;
}, function(t, e, i) {
function n(t, e, n, a, s) {
var _ = i(58);
e = e || o.generateID();
var l, d = t.ownerDocument;
l = _.createVMLNode(d, "shape");
l.className = "vml";
l.style.width = "100%";
l.style.height = "100%";
l.stroked = !1;
l.filled = !0;
l.fillColor = "#000000";
l.vectorType = "vml";
var u = _.createVMLNode(d, "skew");
u.className = "vml";
u.setAttribute("on", "true");
u.setAttribute("matrix", "1,0,0,1,0,0");
u.setAttribute("offset", "-0.5,-0.5");
l.appendChild(u);
o.extend(l);
r.extend(l);
o.set(e, l);
var c = !1;
l.appendToParent = function(e) {
o.hasParentNode(l) || o.appendChild(t, l);
if (e && !c) {
t.appendToParent && t.appendToParent(!0);
c = !0;
}
if ("vml" == l.vectorType) {
l.style.width = "100%";
l.style.height = "100%";
}
};
l.moveRight = function(t) {
var e = parseInt(t, 10);
if (isNaN(e)) return l;
l.style.left = (parseInt(l.style.left, 10) || 0) + e;
var i = l.style.display;
l.style.display = "none";
l.style.display = i;
};
l.setLeft = l.moveRight;
l.moveDown = function(t) {
var e = parseInt(t, 10);
if (isNaN(e)) return l;
l.style.top = (parseInt(l.style.top, 10) || 0) + e;
var i = l.style.display;
l.style.display = "none";
l.style.display = i;
};
l.setTop = l.moveDown;
l.setPath = function(t) {
var e, i;
t = t.replace(/c/g, "v").replace(/z/g, "x").replace(/m/g, "t").replace(/l/g, "r").replace(/L/g, "l") + "e";
i = l.getElementsByTagName("v:path")[0];
e = i || _.createVMLNode(d, "path");
e.className = "vml";
e.setAttribute("v", t);
l.appendChild(e);
return l;
};
l.setOpacity = function(t) {
var e = parseFloat(t), i = _.createVMLNode(d, "fill");
i.className = "vml";
i.setAttribute("opacity", e);
i.setAttribute("o:opacity2", e);
l.appendChild(i);
return l;
};
l.setFill = function(t) {
var e = _.createVMLNode(d, "fill");
e.className = "vml";
if (/linear/.test(t)) e = _.generateVmlLinearGradient(d, t); else {
e = _.createVMLNode(d, "fill");
e.className = "vml";
"none" == t ? e.setAttribute("on", "false") : e.setAttribute("on", "true");
e.setAttribute("color", t);
}
l.appendChild(e);
return l;
};
l.setStroke = function(t) {
var e = _.createVMLNode(d, "stroke");
e.className = "vml";
"none" == t ? e.setAttribute("on", "false") : e.setAttribute("on", "true");
e.setAttribute("color", t);
l.appendChild(e);
return l;
};
l.setStrokeWidth = function(t) {
var e = _.createVMLNode(d, "stroke");
e.className = "vml";
t = parseInt(t, 10);
e.setAttribute("on", "true");
e.setAttribute("weight", t);
l.appendChild(e);
return l;
};
var h = 1, f = 1;
l.resetTransform = function() {
h = f = 1;
l.style.left = l.style.top = NaN;
return l;
};
l.flipAlong = function(t) {
t = t.split("");
for (var e = 0; e < t.length; e++) switch (t[e]) {
case "x":
h = -h;
break;

case "y":
f = -f;
}
var i = "";
-1 == h && (i += "x");
-1 == f && (i += "y");
l.style.flip = i;
return l;
};
l.setShadow = function(t) {
var e = _.createVMLNode(d, "shadow");
e.className = "vml";
t = _.parseShadow(t);
e.setAttribute("on", "true");
e.setAttribute("opacity", t.opacity);
e.setAttribute("color", t.color);
e.setAttribute("offset", t.offsetX + "px," + t.offsetY + "px");
l.appendChild(e);
return l;
};
o.addChildren(l, a);
l.appendToParent();
l.setStyle(n);
l.setAttributes(s);
return l;
}
var o = i(4), r = i(14);
t.exports = n;
}, function(t, e, i) {
function n() {
return null;
}
var o, r = i(234), a = i(233), s = i(58);
switch (s.detectedGraphicType) {
case "canvas":
o = s.CanvasData;
break;

case "vml":
o = r;
break;

case "svg":
o = a;
break;

case "div":
o = n;
}
t.exports = o;
}, function(t, e, i) {
function n(t, e, n, s, _) {
function l() {
w && window.clearInterval(w);
var t = Math.floor(201 * Math.random()) - 100;
w = window.setTimeout(u, 1e3 + t);
}
function d() {
w && window.clearTimeout(w);
}
function u() {
if (j && j.attributes.viewBox) {
m();
c();
h(j.childrens);
}
}
function c() {
var t = j.attributes.viewBox, e = j.attributes.canvasScale ? parseFloat(j.attributes.canvasScale) : 1;
x.width != t.width && (x.width = t.width * e);
x.height != t.height && (x.height = t.height * e);
v.scale(e, e);
v.transform(1, 0, 0, 1, -t.x * e, -t.y * e);
a.isWebKit && t.width * t.height > 4e4 ? l() : d();
f(j);
}
function h(t) {
for (var e = 0, i = t.length; e < i; e++) {
var n = t[e];
v.save();
n.childrens && h(n.childrens);
f(n);
v.restore();
}
}
function f(t) {
var e = t.attributes;
g();
e.left && "function" == typeof t.translateX && t.translateX(v, e.left);
e.top && "function" == typeof t.translateY && t.translateY(v, e.right);
"opacity" in e && (v.globalAlpha = e.opacity * v.globalAlpha);
if (e.path) {
e.stroke && (v.strokeStyle = e.stroke);
e.strokeWidth && (v.lineWidth = e.strokeWidth);
e.fill && (v.fillStyle = e.fill(v, e.path.bBox));
if (e.shadow && !a.isOpera) {
var i = e.shadow;
v.shadowOffsetX = i.offsetX;
v.shadowOffsetY = i.offsetY;
v.shadowBlur = i.blurRadius;
v.shadowColor = i.rgba;
}
e.path(v);
v.fill();
e.shadow && p();
v.stroke();
}
}
function g() {
v.strokeStyle = "rgba(0, 0, 0, 0)";
v.fillStyle = "rgba(0, 0, 0, 1)";
v.lineWidth = 0;
}
function p() {
v.shadowOffsetX = 0;
v.shadowOffsetY = 0;
v.shadowBlur = 0;
v.shadowColor = "#000";
}
function m() {
v.setTransform(1, 0, 0, 1, 0, 0);
v.clearRect(0, 0, x.width, x.height);
}
function $(t) {
for (var e = [], i = 0, n = t.length; i < n; i++) {
var o = t[i];
e.push({
constructor: o[0],
id: o[1],
attributes: o[4],
childrens: $(o[3])
});
}
return e;
}
var b = i(58);
e = e || o.generateID();
var w, x, v, y = t.ownerDocument, j = new b.parseCanvasData({
type: "canvas",
attributes: {},
childrens: []
});
x = y.createElement("canvas");
x.width = 0;
x.height = 0;
x.vectorType = "canvas";
x.getContext && (v = x.getContext("2d"));
o.extend(x);
r.extend(x);
o.set(e, x);
var C = !1;
x.appendToParent = function(e) {
o.hasParentNode(x) || o.appendChild(t, x);
if (e && !C) {
t.appendToParent && t.appendToParent(!0);
C = !0;
}
};
x.setData = function(t) {
"function" == typeof j.destroy && j.destroy();
j = new b.parseCanvasData(t);
d();
u();
j.on("update", u);
};
x.onDestruction(function() {
d();
"function" == typeof j.destroy && j.destroy();
});
x.setViewBox = function(t) {
j.setAttribute("viewBox", t);
return x;
};
x.setStyle(n);
x.setAttributes(_);
j = {
type: "canvas",
attributes: _,
childrens: $(s)
};
x.setData(j);
x.appendToParent();
return x;
}
var o = i(4), r = i(14), a = i(8);
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, n, a) {
e = e || o.generateID();
var s, _ = t.ownerDocument;
s = _.createElementNS("http://www.w3.org/2000/svg", "svg");
s.vectorType = "svg";
o.extend(s);
r.extend(s);
o.set(e, s);
var l = !1;
s.appendToParent = function(e) {
o.hasParentNode(s) || o.appendChild(t, s);
if (e && !l) {
t.appendToParent && t.appendToParent(!0);
l = !0;
}
};
s.setClass = function(t) {
s.setAttribute("class", t);
return s;
};
s.addClass = function(t) {
s.setAttribute("class", s.getAttribute("class") + " " + t);
return s;
};
s.removeClass = function(t) {
var e = s.getAttribute("class"), i = new RegExp("\\b" + t + "\\b", "g");
e.replace(i, "");
s.setAttribute("class", e);
return s;
};
s.setViewBox = function(t) {
s.setAttribute("viewBox", t);
return s;
};
s.setStyle(i);
s.setAttributes(a);
o.addChildren(s, n);
s.appendToParent();
return s;
}
var o = i(4), r = i(14);
t.exports = n;
}, function(t, e, i) {
function n(t, e, n, a, s) {
var _ = i(58);
e = e || o.generateID();
var l, d, u, c, h, f = t.ownerDocument;
l = f.createElement("span");
l.style.display = "inline-block";
l.style.overflow = "hidden";
l.style.position = "relative";
l.vectorType = "vml";
d = _.createVMLNode(f, "group");
d.className = "vml";
d.style.width = "100px";
d.style.height = "100px";
d.style.border = "0px none";
d.style.padding = "0px";
d.style.margin = "0px";
d.style.position = "absolute";
d.style.top = "0px";
d.style.left = "0px";
l.groupshape = d;
u = _.createVMLNode(f, "shape");
u.className = "vml";
u.stroked = !1;
u.fill = !1;
u.style.width = "1px";
u.style.height = "1px";
d.appendChild(u);
l.appendChild(d);
l.graphicType = "vml";
l.defaultPlacement = d;
o.extend(l);
r.extend(l);
o.set(e, l);
var g = !1;
l.appendToParent = function(e) {
o.hasParentNode(l) || o.appendChild(t, l);
if (e && !g) {
t.appendToParent && t.appendToParent(!0);
g = !0;
}
};
l.setCanvasScale = function(t) {
t = parseFloat(t);
c = t;
h && l.setViewBox(h);
return l;
};
l.setViewBox = function(t) {
h = t;
t = _.parseViewBox(t);
var e = l.getElementsByTagName("*"), i = t.x + ", " + t.y, n = "1, 1";
c && (n = 1 / c + "," + 1 / c);
d.coordorigin = i;
for (var o = 0, r = e.length; o < r; o++) {
var a = e[o].tagName;
"shape" !== a && "group" !== a || (e[o].coordsize = n);
}
u.style.left = t.x + "px";
u.style.right = t.y + "px";
return l;
};
var p = l.setWidth, m = l.setHeight;
l.setWidth = function(t) {
"function" == typeof p && p.call(l, t);
d.style.width = "1px";
return l;
};
l.setHeight = function(t) {
"function" == typeof m && m.call(l, t);
d.style.height = "1px";
return l;
};
l.setStyle(n);
l.setAttributes(s);
o.addChildren(l, a);
l.appendToParent();
return l;
}
var o = i(4), r = i(14);
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, n, o) {
e = e || r.generateID();
var s, _ = t.ownerDocument;
s = _.createElement("div");
r.extend(s);
a.extend(s);
r.set(e, s);
var l = !1;
s.appendToParent = function(e) {
r.hasParentNode(s) || r.appendChild(t, s);
if (e && !l) {
t.appendToParent && t.appendToParent(!0);
l = !0;
}
};
s.setViewBox = function() {};
s.setStyle(i);
s.setAttributes(o);
r.addChildren(s, n);
s.appendToParent();
return s;
}
var o, r = i(4), a = i(14), s = i(238), _ = i(237), l = i(236), d = i(58);
switch (d.detectedGraphicType) {
case "canvas":
o = l;
break;

case "vml":
o = s;
break;

case "svg":
o = _;
break;

case "div":
o = n;
}
t.exports = o;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_common_GCanvas = i(239);
n.__$$__meshim_common_GShape = i(235);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_common_GCanvas, "", "", [ [ n.__$$__meshim_common_GShape, "content", "", [], {
id: "content",
fill: "linear, top, from(#E0741B), to(#E0981B)",
stroke: "#c2c2c2"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:common": "meshim.common"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__content");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t(t, i) {
var n = {
tl: [ t.x, t.y ],
tr: [ t.x + t.width, t.y ],
br: [ t.x + t.width, t.y + t.height ],
bl: [ t.x, t.y + t.height ]
};
i = i.slice();
for (var o = 0; o < i.length; o++) {
var r = i[o], a = r[0];
n[a] && (i[o] = e(n[a], r));
}
return i;
}
function e(t, e) {
var i = t[0], n = t[1], o = [];
e = e.slice();
e.shift();
o.push(e.shift());
for (;e.length > 1; ) {
var r = e.splice(0, 2);
o.push(i + r[0]);
o.push(n + r[1]);
}
return o;
}
function n(t) {
for (var e = "", i = {
cs: o
}, n = 0, r = t.length; n < r; n++) {
var a = t[n], s = a[0];
i[s] && (a = i[s].apply(null, a.slice(1)));
e += " " + a.join(" ");
}
return e;
}
function o(t, e, i) {
var n = t, o = e, r = Math.round(.5522848 * n), a = Math.round(.5522848 * o);
return (i ? -n * o : n * o) > 0 ? [ "c", r, 0, n, o - a, n, o ] : [ "c", 0, a, n - r, o, n, o ];
}
function r(e, i) {
if (!a(e) || !a(i) || isNaN(e) || isNaN(i)) throw new window.Error("BubbleVector.setDimension(): invalid arguments");
var o = {
x: s - 1,
y: s - 1,
width: e - 2 * s + 2,
height: i - 2 * s - 3
}, r = n(t(o, _));
c.setWidth(e + "px").setHeight(i + "px").setViewBox("0 0 " + e + " " + i);
h.setPath(r);
return c;
}
var a = i(28), s = 2, _ = [ [ "tl", "M", 0, 8 ], [ "cs", 8, -8, 0 ], [ "tr", "L", -8, 0 ], [ "cs", 8, 8, 0 ], [ "br", "L", 0, -16 ], [ "cs", -8, 8, 0 ], [ "bl", "L", 39, -8 ], [ "bl", "L", 33, 0 ], [ "bl", "L", 27, -8 ], [ "bl", "L", 8, -8 ], [ "cs", -8, -8, 0 ], [ "z" ] ];
!function() {
h.setStrokeWidth(s);
c.setDimension = r;
c.setFill = function(t) {
h.setFill(t);
};
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_common_GCanvas.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_common_GCanvas, {
fqname: "meshim_widget_components_chatButton_BubbleVector"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatButton_BubbleVector = i(240);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(137), c = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatButton_BubbleVector, "bubble_vector", "", [], {
id: "bubble_vector",
position: "absolute"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "close", "", [], {
id: "close",
icon: "cross",
addClass: "close",
title: u
} ], [ n.__$$__jx_ui_Widget, "bubble_title_container", "", [], {
id: "bubble_title_container",
class: "bubble_title"
} ], [ n.__$$__jx_ui_Widget, "bubble_text_container", "", [], {
id: "bubble_text_container",
class: "bubble_text"
} ] ], {
class: "bubble_text_wrapper"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:button": "meshim.widget.components.chatButton",
"xmlns:widgets": "meshim.widget.widgets",
visibility: "hidden"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__bubble_vector"), p = _.get(o + "__close"), m = _.get(o + "__bubble_title_container"), $ = _.get(o + "__bubble_text_container");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
function t() {
if (!l) {
l = window.setTimeout(e, 0);
8 == u.isIE && f.setVisibility("");
}
}
function e() {
l = null;
if (n && o) {
var t = D.getValue();
if (t) {
var e = f.getHeight();
if (e) {
g.setDimension(t, e);
E.update(f.getHeight());
if (!d) {
f.setVisibility("");
d = !0;
}
}
}
}
}
var n, o, r, a, s, _, l, d, u = i(8), c = i(6), h = i(24), b = i(9), w = i(10), x = i(119), v = c.root.$("livechat"), y = v.$("settings"), j = v.$("ui"), C = j.$("chat_button"), S = C.$("display$bool"), A = C.$("bubble").$("display$bool"), k = j.$("theme_loaded$bool"), I = y.$("bubble"), N = I.$("title$string"), T = I.$("text$string"), B = y.$("theme").$("colors").$("bubble$string"), D = C.$("button_width$int"), E = C.$("bubble_height$int");
!function() {
b.rtl(f);
f.autobind(S, "value", function(e) {
if (n != e) {
n = e;
t();
}
});
f.autobind(A, "value", function(e) {
if (o != e) {
o = e;
t();
}
});
f.autobind(N, "value", function(e) {
if (r != e) {
r = e;
m.setText(w.get(N));
t();
}
});
f.autobind(T, "value", function(e) {
if (a != e) {
a = e;
$.setText(w.get(T));
$.setDisplay(e ? "" : "none");
t();
}
});
f.autobind(B, "value", function(t) {
t && s != t && (s = t);
});
f.autobind(k, "value", function(e) {
if (e) {
if (_ != s) {
_ = s;
var i = new x(_);
g.setFill("linear top from(" + i.lighten(.1).toRGB() + ") to(" + i.darken(.2).toRGB() + ") ");
}
t();
}
});
f.autobind(D, "value", function(e) {
e && t();
});
p.on("click", function(t) {
t.stopPropagation();
h.userHideBubble();
});
}();
}();
for (var w in b) f[w] = b[w];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative"
},
".bubble_text_wrapper": {
position: "relative",
padding: "10px 12px 26px"
},
".bubble_title": {
position: "relative",
zIndex: "1",
fontSize: "$$fontSizeL",
fontWeight: "bold",
color: "$$chatBubbleTitleColor",
whiteSpace: "pre-wrap"
},
".bubble_text": {
position: "relative",
zIndex: "1",
marginTop: "5px",
fontSize: "12px",
fontStyle: "italic",
color: "$$chatBubbleTextColor",
whiteSpace: "pre-wrap"
},
".close": {
float: "right",
position: "relative",
top: "-1px",
left: "5px",
padding: "6px 4px 2px",
zIndex: "2",
color: "$$chatBubbleCloseColor",
textShadow: "$$chatBubbleCloseShadow",
borderRadius: "$$radius",
"&:hover": {
background: "$$chatBubbleCloseHoverBg"
}
},
"&.rtl .close": {
float: "left",
left: "auto",
right: "5px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatButton_BubbleRenderer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatButton_BubbleRenderer = i(241);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_components_chatButton_BubbleRenderer, "", "", [], {
addClass: "bubble_renderer"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:button": "meshim.widget.components.chatButton",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(6), e = t.root.$("livechat").$("ui").$("chat_button"), n = e.$("bubble").$("display$bool"), o = -1;
!function() {
c.autobind(n, "value", function(t) {
if (o != t) {
o = t;
c.setDisplay(o ? "" : "none");
}
});
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "absolute",
width: "100%",
"top, left": 0,
cursor: "pointer"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatButton_Bubble"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_FloatingFrame = i(71);
n.__$$__meshim_widget_widgets_fontLoader_ZopimFont = i(59);
n.__$$__meshim_widget_components_chatButton_Bubble = i(242);
n.__$$__meshim_widget_components_chatButton_Button = i(232);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_FloatingFrame, "", "", [ [ n.__$$__meshim_widget_widgets_fontLoader_ZopimFont, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatButton_Bubble, "", "", [], {
addClass: "bubble"
} ], [ n.__$$__meshim_widget_components_chatButton_Button, "", "", [], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatButton": "meshim.widget.components.chatButton",
cursor: "pointer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
var t = v;
c.setDisplay(t ? "" : "none");
o();
}
function e() {
n();
s.bugs.noBoxSizing && window.setTimeout(function() {
c.dom.className = c.dom.className;
}, 100);
}
function n() {
if (T) c.setTop("").setRight("").setBottom("").setLeft(""); else switch (a) {
case "br":
c.setTop("").setLeft("").setMarginLeft("").setRight(D).setBottom(B);
break;

case "bm":
c.setTop("").setRight("").setBottom(B).setLeft("50%").setMarginLeft(-Math.round(c.__width / 2) + "px");
break;

case "bl":
c.setTop("").setRight("").setMarginLeft("").setBottom(B).setLeft(D);
break;

case "tr":
c.setBottom("").setLeft("").setMarginLeft("").setTop(B).setRight(D);
break;

case "tm":
c.setRight("").setBottom("").setTop(B).setLeft("50%").setMarginLeft(-Math.round(c.__width / 2) + "px");
break;

case "tl":
c.setRight("").setBottom("").setMarginLeft("").setTop(B).setLeft(D);
}
}
function o() {
r();
_(r, c, "once");
}
function r() {
var t = C.getValue() || 10;
t !== c.getWidth() && c.setWidth(t + "px");
var e = S.getValue() || 10;
j && (e += A.getValue() || 0);
e !== c.getHeight() && c.setHeight(e + "px");
}
var a, s = i(8), _ = i(16), l = i(57), d = i(33), u = i(6), h = i(49), f = i(24), g = i(46), p = i(74), m = u.root.$("livechat"), $ = m.$("settings"), b = m.$("ui"), w = b.$("chat_button"), x = w.$("display$bool"), v = -1, y = w.$("bubble").$("display$bool"), j = -1, C = w.$("button_width$int"), S = w.$("button_height$int"), A = w.$("bubble_height$int"), k = $.$("theme").$("chat_button").$("position$string"), I = $.$$("theme.chat_button.h_offset$int"), N = $.$$("theme.chat_button.v_offset$int"), T = b.$("mockup$bool").getValue(), B = 0, D = 10;
!function() {
p.bind(c.iwin);
c.dom.className = "zopim";
c.iframe.setStyle("display", "block");
c.content.addClass(l.prototype.__jx__fqname);
c.wrapper.addClass(c.__jx__fqname);
c.ibody.style.overflow = "hidden";
g(c.ibody);
T && c.setPosition("relative");
c.autobind(y, "value", function(t) {
if (j != t) {
j = t;
o();
}
});
c.autobind(I, "value", function(t) {
t = parseInt(t, 10);
if (!isNaN(t) && t >= 0) {
D = t;
e();
}
});
c.autobind(N, "value", function(t) {
t = parseInt(t, 10);
if (!isNaN(t) && t >= 0) {
B = t;
e();
}
});
c.autobind(A, "value", function(t) {
t && o();
});
c.autobind(k, "value", function(t) {
a && c.wrapper.removeClass(a);
a = t;
a && c.wrapper.addClass(a);
e();
});
c.autobind(C, "value", function(t) {
t && o();
});
c.autobind(S, "value", function(t) {
t && o();
});
c.autobind(x, "value", function(e) {
if (v != e) {
v = e;
t();
}
});
c.on("click", function() {
h.trackEvent("Button Clicked");
d.resetUnreadCount();
w.write({
button_clicked$bool: !0
});
f.userShowBadgeOrWindow();
});
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_FloatingFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
"*width": "100%"
},
"&.bm, &.tm": {
margin: "0 auto"
},
"&.br, &.bm, &.bl": {
".button_bar": {
"borderTopLeftRadius, borderTopRightRadius": "$$chatButtonRadius"
},
".favicon": {
borderTopLeftRadius: "$$chatButtonRadius"
},
".rtl .favicon": {
borderTopLeftRadius: 0,
borderTopRightRadius: "$$chatButtonRadius"
}
},
"&.tr, &.tm, &.tl": {
".button_bar": {
"borderBottomLeftRadius, borderBottomRightRadius": "$$chatButtonRadius"
},
".favicon": {
borderBottomLeftRadius: "$$chatButtonRadius"
},
".rtl .favicon": {
borderBottomLeftRadius: 0,
borderBottomRightRadius: "$$chatButtonRadius"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_FloatingFrame, {
fqname: "meshim_widget_components_ChatButton"
});
return t;
}();
}, function(t, e, i) {
"use strict";
var n = function(t, e, i) {
var n = t[e], o = t;
if (e in t) {
var r = "warn" === e ? "warning" : e;
t[e] = function() {
var t = [].slice.call(arguments), e = "" + t.join(" "), a = {
level: r,
logger: "console",
extra: {
arguments: t
}
};
i && i(e, a);
n && Function.prototype.apply.call(n, o, t);
};
}
};
t.exports = {
wrapMethod: n
};
}, function(t, e, i) {
"use strict";
function n(t) {
this.name = "RavenConfigError";
this.message = t;
}
n.prototype = new Error();
n.prototype.constructor = n;
t.exports = n;
}, function(t, e, i) {
"use strict";
function n(t, e) {
for (var i = 0; i < t.length; ++i) if (t[i] === e) return i;
return -1;
}
function o(t, e, i, n) {
return JSON.stringify(t, r(e, n), i);
}
function r(t, e) {
var i = [], o = [];
null == e && (e = function(t, e) {
return i[0] === e ? "[Circular ~]" : "[Circular ~." + o.slice(0, n(i, e)).join(".") + "]";
});
return function(r, a) {
if (i.length > 0) {
var s = n(i, this);
~s ? i.splice(s + 1) : i.push(this);
~s ? o.splice(s, 1 / 0, r) : o.push(r);
~n(i, a) && (a = e.call(this, r, a));
} else i.push(a);
return null == t ? a : t.call(this, r, a);
};
}
e = t.exports = o;
e.getSerialize = r;
}, function(t, e, i) {
"use strict";
(function(e) {
function n() {
return "undefined" == typeof document || void 0 === document.location ? "" : document.location.href;
}
var o = i(120), r = {
collectWindowErrors: !0,
debug: !1
}, a = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, s = [].slice, _ = "?", l = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
r.report = function() {
function t(t) {
c();
$.push(t);
}
function e(t) {
for (var e = $.length - 1; e >= 0; --e) $[e] === t && $.splice(e, 1);
}
function i() {
h();
$ = [];
}
function d(t, e) {
var i = null;
if (!e || r.collectWindowErrors) {
for (var n in $) if ($.hasOwnProperty(n)) try {
$[n].apply(null, [ t ].concat(s.call(arguments, 2)));
} catch (t) {
i = t;
}
if (i) throw i;
}
}
function u(t, e, i, a, s) {
var u = null;
if (x) {
r.computeStackTrace.augmentStackTraceWithInitialElement(x, e, i, t);
f();
} else if (s && o.isError(s)) {
u = r.computeStackTrace(s);
d(u, !0);
} else {
var c, h = {
url: e,
line: i,
column: a
}, g = void 0, m = t;
if ("[object String]" === {}.toString.call(t)) {
var c = t.match(l);
if (c) {
g = c[1];
m = c[2];
}
}
h.func = _;
u = {
name: g,
message: m,
url: n(),
stack: [ h ]
};
d(u, !0);
}
return !!p && p.apply(this, arguments);
}
function c() {
if (!m) {
p = a.onerror;
a.onerror = u;
m = !0;
}
}
function h() {
if (m) {
a.onerror = p;
m = !1;
p = void 0;
}
}
function f() {
var t = x, e = b;
b = null;
x = null;
w = null;
d.apply(null, [ t, !1 ].concat(e));
}
function g(t, e) {
var i = s.call(arguments, 1);
if (x) {
if (w === t) return;
f();
}
var n = r.computeStackTrace(t);
x = n;
w = t;
b = i;
setTimeout(function() {
w === t && f();
}, n.incomplete ? 2e3 : 0);
if (!1 !== e) throw t;
}
var p, m, $ = [], b = null, w = null, x = null;
g.subscribe = t;
g.unsubscribe = e;
g.uninstall = i;
return g;
}();
r.computeStackTrace = function() {
function t(t) {
if (void 0 !== t.stack && t.stack) {
for (var e, i, o, r = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, d = /\((\S*)(?::(\d+))(?::(\d+))\)/, u = t.stack.split("\n"), c = [], h = (/^(.*) is undefined$/.exec(t.message), 
0), f = u.length; h < f; ++h) {
if (i = r.exec(u[h])) {
var g = i[2] && 0 === i[2].indexOf("native"), p = i[2] && 0 === i[2].indexOf("eval");
if (p && (e = d.exec(i[2]))) {
i[2] = e[1];
i[3] = e[2];
i[4] = e[3];
}
o = {
url: g ? null : i[2],
func: i[1] || _,
args: g ? [ i[2] ] : [],
line: i[3] ? +i[3] : null,
column: i[4] ? +i[4] : null
};
} else if (i = s.exec(u[h])) o = {
url: i[2],
func: i[1] || _,
args: [],
line: +i[3],
column: i[4] ? +i[4] : null
}; else {
if (!(i = a.exec(u[h]))) continue;
var p = i[3] && i[3].indexOf(" > eval") > -1;
if (p && (e = l.exec(i[3]))) {
i[3] = e[1];
i[4] = e[2];
i[5] = null;
} else 0 !== h || i[5] || void 0 === t.columnNumber || (c[0].column = t.columnNumber + 1);
o = {
url: i[3],
func: i[1] || _,
args: i[2] ? i[2].split(",") : [],
line: i[4] ? +i[4] : null,
column: i[5] ? +i[5] : null
};
}
!o.func && o.line && (o.func = _);
c.push(o);
}
return c.length ? {
name: t.name,
message: t.message,
url: n(),
stack: c
} : null;
}
}
function e(t, e, i, n) {
var o = {
url: e,
line: i
};
if (o.url && o.line) {
t.incomplete = !1;
o.func || (o.func = _);
if (t.stack.length > 0 && t.stack[0].url === o.url) {
if (t.stack[0].line === o.line) return !1;
if (!t.stack[0].line && t.stack[0].func === o.func) {
t.stack[0].line = o.line;
return !1;
}
}
t.stack.unshift(o);
t.partial = !0;
return !0;
}
t.incomplete = !0;
return !1;
}
function i(t, a) {
for (var s, l, d = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [], c = {}, h = !1, f = i.caller; f && !h; f = f.caller) if (f !== o && f !== r.report) {
l = {
url: null,
func: _,
line: null,
column: null
};
f.name ? l.func = f.name : (s = d.exec(f.toString())) && (l.func = s[1]);
if (void 0 === l.func) try {
l.func = s.input.substring(0, s.input.indexOf("{"));
} catch (t) {}
c["" + f] ? h = !0 : c["" + f] = !0;
u.push(l);
}
a && u.splice(0, a);
var g = {
name: t.name,
message: t.message,
url: n(),
stack: u
};
e(g, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description);
return g;
}
function o(e, o) {
var a = null;
o = null == o ? 0 : +o;
try {
a = t(e);
if (a) return a;
} catch (t) {
if (r.debug) throw t;
}
try {
a = i(e, o + 1);
if (a) return a;
} catch (t) {
if (r.debug) throw t;
}
return {
name: e.name,
message: e.message,
url: n()
};
}
o.augmentStackTraceWithInitialElement = e;
o.computeStackTraceFromStackProp = t;
return o;
}();
t.exports = r;
}).call(this, i(99));
}, function(t, e, i) {
"use strict";
(function(e) {
function n() {
return +new Date();
}
function o(t, e) {
return s(e) ? function(i) {
return e(i, t);
} : e;
}
function r() {
this._hasJSON = !("object" != typeof JSON || !JSON.stringify);
this._hasDocument = !a(O);
this._hasNavigator = !a(L);
this._lastCapturedException = null;
this._lastData = null;
this._lastEventId = null;
this._globalServer = null;
this._globalKey = null;
this._globalProject = null;
this._globalContext = {};
this._globalOptions = {
logger: "javascript",
ignoreErrors: [],
ignoreUrls: [],
whitelistUrls: [],
includePaths: [],
crossOrigin: "anonymous",
collectWindowErrors: !0,
maxMessageLength: 0,
maxUrlLength: 250,
stackTraceLimit: 50,
autoBreadcrumbs: !0,
instrument: !0,
sampleRate: 1
};
this._ignoreOnError = 0;
this._isRavenInstalled = !1;
this._originalErrorStackTraceLimit = Error.stackTraceLimit;
this._originalConsole = E.console || {};
this._originalConsoleMethods = {};
this._plugins = [];
this._startTime = n();
this._wrappedBuiltIns = [];
this._breadcrumbs = [];
this._lastCapturedEvent = null;
this._keypressTimeout;
this._location = E.location;
this._lastHref = this._location && this._location.href;
this._resetBackoff();
for (var t in this._originalConsole) this._originalConsoleMethods[t] = this._originalConsole[t];
}
function a(t) {
return void 0 === t;
}
function s(t) {
return "function" == typeof t;
}
function _(t) {
return "[object String]" === W.toString.call(t);
}
function l(t) {
for (var e in t) return !1;
return !0;
}
function d(t, e) {
var i, n;
if (a(t.length)) for (i in t) f(t, i) && e.call(null, i, t[i]); else {
n = t.length;
if (n) for (i = 0; i < n; i++) e.call(null, i, t[i]);
}
}
function u(t, e) {
if (!e) return t;
d(e, function(e, i) {
t[e] = i;
});
return t;
}
function c(t) {
return !!Object.isFrozen && Object.isFrozen(t);
}
function h(t, e) {
return !e || t.length <= e ? t : t.substr(0, e) + "…";
}
function f(t, e) {
return W.hasOwnProperty.call(t, e);
}
function g(t) {
for (var e, i = [], n = 0, o = t.length; n < o; n++) {
e = t[n];
_(e) ? i.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && i.push(e.source);
}
return new RegExp(i.join("|"), "i");
}
function p(t) {
var e = [];
d(t, function(t, i) {
e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i));
});
return e.join("&");
}
function m(t) {
var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
if (!e) return {};
var i = e[6] || "", n = e[8] || "";
return {
protocol: e[2],
host: e[4],
path: e[5],
relative: e[5] + i + n
};
}
function $() {
var t = E.crypto || E.msCrypto;
if (!a(t) && t.getRandomValues) {
var e = new Uint16Array(8);
t.getRandomValues(e);
e[3] = 4095 & e[3] | 16384;
e[4] = 16383 & e[4] | 32768;
var i = function(t) {
for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
return e;
};
return i(e[0]) + i(e[1]) + i(e[2]) + i(e[3]) + i(e[4]) + i(e[5]) + i(e[6]) + i(e[7]);
}
return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
var e = 16 * Math.random() | 0;
return ("x" === t ? e : 3 & e | 8).toString(16);
});
}
function b(t) {
for (var e, i = [], n = 0, o = 0, r = " > ".length; t && n++ < 5; ) {
e = w(t);
if ("html" === e || n > 1 && o + i.length * r + e.length >= 80) break;
i.push(e);
o += e.length;
t = t.parentNode;
}
return i.reverse().join(" > ");
}
function w(t) {
var e, i, n, o, r, a = [];
if (!t || !t.tagName) return "";
a.push(t.tagName.toLowerCase());
t.id && a.push("#" + t.id);
e = t.className;
if (e && _(e)) {
i = e.split(/\s+/);
for (r = 0; r < i.length; r++) a.push("." + i[r]);
}
var s = [ "type", "name", "title", "alt" ];
for (r = 0; r < s.length; r++) {
n = s[r];
o = t.getAttribute(n);
o && a.push("[" + n + '="' + o + '"]');
}
return a.join("");
}
function x(t, e) {
return !!(!!t ^ !!e);
}
function v(t, e) {
if (x(t, e)) return !1;
t = t.values[0];
e = e.values[0];
return t.type === e.type && t.value === e.value && y(t.stacktrace, e.stacktrace);
}
function y(t, e) {
if (x(t, e)) return !1;
var i = t.frames, n = e.frames;
if (i.length !== n.length) return !1;
for (var o, r, a = 0; a < i.length; a++) {
o = i[a];
r = n[a];
if (o.filename !== r.filename || o.lineno !== r.lineno || o.colno !== r.colno || o.function !== r.function) return !1;
}
return !0;
}
function j(t, e, i, n) {
var o = t[e];
t[e] = i(o);
n && n.push([ t, e, o ]);
}
var C = i(247), S = i(246), A = i(245), k = i(120), I = k.isError, N = k.isObject, T = i(244).wrapMethod, B = "source protocol user pass host port path".split(" "), D = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/, E = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, O = E.document, L = E.navigator;
r.prototype = {
VERSION: "3.17.0",
debug: !1,
TraceKit: C,
config: function(t, e) {
var i = this;
if (i._globalServer) {
this._logDebug("error", "Error: Raven has already been configured");
return i;
}
if (!t) return i;
var n = i._globalOptions;
e && d(e, function(t, e) {
"tags" === t || "extra" === t || "user" === t ? i._globalContext[t] = e : n[t] = e;
});
i.setDSN(t);
n.ignoreErrors.push(/^Script error\.?$/);
n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/);
n.ignoreErrors = g(n.ignoreErrors);
n.ignoreUrls = !!n.ignoreUrls.length && g(n.ignoreUrls);
n.whitelistUrls = !!n.whitelistUrls.length && g(n.whitelistUrls);
n.includePaths = g(n.includePaths);
n.maxBreadcrumbs = Math.max(0, Math.min(n.maxBreadcrumbs || 100, 100));
var o = {
xhr: !0,
console: !0,
dom: !0,
location: !0
}, r = n.autoBreadcrumbs;
"[object Object]" === {}.toString.call(r) ? r = u(o, r) : !1 !== r && (r = o);
n.autoBreadcrumbs = r;
var a = {
tryCatch: !0
}, s = n.instrument;
"[object Object]" === {}.toString.call(s) ? s = u(a, s) : !1 !== s && (s = a);
n.instrument = s;
C.collectWindowErrors = !!n.collectWindowErrors;
return i;
},
install: function() {
var t = this;
if (t.isSetup() && !t._isRavenInstalled) {
C.report.subscribe(function() {
t._handleOnErrorStackInfo.apply(t, arguments);
});
t._globalOptions.instrument && t._globalOptions.instrument.tryCatch && t._instrumentTryCatch();
t._globalOptions.autoBreadcrumbs && t._instrumentBreadcrumbs();
t._drainPlugins();
t._isRavenInstalled = !0;
}
Error.stackTraceLimit = t._globalOptions.stackTraceLimit;
return this;
},
setDSN: function(t) {
var e = this, i = e._parseDSN(t), n = i.path.lastIndexOf("/"), o = i.path.substr(1, n);
e._dsn = t;
e._globalKey = i.user;
e._globalSecret = i.pass && i.pass.substr(1);
e._globalProject = i.path.substr(n + 1);
e._globalServer = e._getGlobalServer(i);
e._globalEndpoint = e._globalServer + "/" + o + "api/" + e._globalProject + "/store/";
this._resetBackoff();
},
context: function(t, e, i) {
if (s(t)) {
i = e || [];
e = t;
t = void 0;
}
return this.wrap(t, e).apply(this, i);
},
wrap: function(t, e, i) {
function n() {
var n = [], r = arguments.length, a = !t || t && !1 !== t.deep;
i && s(i) && i.apply(this, arguments);
for (;r--; ) n[r] = a ? o.wrap(t, arguments[r]) : arguments[r];
try {
return e.apply(this, n);
} catch (e) {
o._ignoreNextOnError();
o.captureException(e, t);
throw e;
}
}
var o = this;
if (a(e) && !s(t)) return t;
if (s(t)) {
e = t;
t = void 0;
}
if (!s(e)) return e;
try {
if (e.__raven__) return e;
if (e.__raven_wrapper__) return e.__raven_wrapper__;
} catch (t) {
return e;
}
for (var r in e) f(e, r) && (n[r] = e[r]);
n.prototype = e.prototype;
e.__raven_wrapper__ = n;
n.__raven__ = !0;
n.__inner__ = e;
return n;
},
uninstall: function() {
C.report.uninstall();
this._restoreBuiltIns();
Error.stackTraceLimit = this._originalErrorStackTraceLimit;
this._isRavenInstalled = !1;
return this;
},
captureException: function(t, e) {
if (!I(t)) return this.captureMessage(t, u({
trimHeadFrames: 1,
stacktrace: !0
}, e));
this._lastCapturedException = t;
try {
var i = C.computeStackTrace(t);
this._handleStackInfo(i, e);
} catch (e) {
if (t !== e) throw e;
}
return this;
},
captureMessage: function(t, e) {
if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) {
e = e || {};
var i = u({
message: t + ""
}, e);
if (this._globalOptions.stacktrace || e && e.stacktrace) {
var n;
try {
throw new Error(t);
} catch (t) {
n = t;
}
n.name = null;
e = u({
fingerprint: t,
trimHeadFrames: (e.trimHeadFrames || 0) + 1
}, e);
var o = C.computeStackTrace(n), r = this._prepareFrames(o, e);
i.stacktrace = {
frames: r.reverse()
};
}
this._send(i);
return this;
}
},
captureBreadcrumb: function(t) {
var e = u({
timestamp: n() / 1e3
}, t);
if (s(this._globalOptions.breadcrumbCallback)) {
var i = this._globalOptions.breadcrumbCallback(e);
if (N(i) && !l(i)) e = i; else if (!1 === i) return this;
}
this._breadcrumbs.push(e);
this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift();
return this;
},
addPlugin: function(t) {
var e = [].slice.call(arguments, 1);
this._plugins.push([ t, e ]);
this._isRavenInstalled && this._drainPlugins();
return this;
},
setUserContext: function(t) {
this._globalContext.user = t;
return this;
},
setExtraContext: function(t) {
this._mergeContext("extra", t);
return this;
},
setTagsContext: function(t) {
this._mergeContext("tags", t);
return this;
},
clearContext: function() {
this._globalContext = {};
return this;
},
getContext: function() {
return JSON.parse(S(this._globalContext));
},
setEnvironment: function(t) {
this._globalOptions.environment = t;
return this;
},
setRelease: function(t) {
this._globalOptions.release = t;
return this;
},
setDataCallback: function(t) {
var e = this._globalOptions.dataCallback;
this._globalOptions.dataCallback = o(e, t);
return this;
},
setBreadcrumbCallback: function(t) {
var e = this._globalOptions.breadcrumbCallback;
this._globalOptions.breadcrumbCallback = o(e, t);
return this;
},
setShouldSendCallback: function(t) {
var e = this._globalOptions.shouldSendCallback;
this._globalOptions.shouldSendCallback = o(e, t);
return this;
},
setTransport: function(t) {
this._globalOptions.transport = t;
return this;
},
lastException: function() {
return this._lastCapturedException;
},
lastEventId: function() {
return this._lastEventId;
},
isSetup: function() {
if (!this._hasJSON) return !1;
if (!this._globalServer) {
if (!this.ravenNotConfiguredError) {
this.ravenNotConfiguredError = !0;
this._logDebug("error", "Error: Raven has not been configured.");
}
return !1;
}
return !0;
},
afterLoad: function() {
var t = E.RavenConfig;
t && this.config(t.dsn, t.config).install();
},
showReportDialog: function(t) {
if (O) {
t = t || {};
var e = t.eventId || this.lastEventId();
if (!e) throw new A("Missing eventId");
var i = t.dsn || this._dsn;
if (!i) throw new A("Missing DSN");
var n = encodeURIComponent, o = "";
o += "?eventId=" + n(e);
o += "&dsn=" + n(i);
var r = t.user || this._globalContext.user;
if (r) {
r.name && (o += "&name=" + n(r.name));
r.email && (o += "&email=" + n(r.email));
}
var a = this._getGlobalServer(this._parseDSN(i)), s = O.createElement("script");
s.async = !0;
s.src = a + "/api/embed/error-page/" + o;
(O.head || O.body).appendChild(s);
}
},
_ignoreNextOnError: function() {
var t = this;
this._ignoreOnError += 1;
setTimeout(function() {
t._ignoreOnError -= 1;
});
},
_triggerEvent: function(t, e) {
var i, n;
if (this._hasDocument) {
e = e || {};
t = "raven" + t.substr(0, 1).toUpperCase() + t.substr(1);
if (O.createEvent) {
i = O.createEvent("HTMLEvents");
i.initEvent(t, !0, !0);
} else {
i = O.createEventObject();
i.eventType = t;
}
for (n in e) f(e, n) && (i[n] = e[n]);
if (O.createEvent) O.dispatchEvent(i); else try {
O.fireEvent("on" + i.eventType.toLowerCase(), i);
} catch (t) {}
}
},
_breadcrumbEventHandler: function(t) {
var e = this;
return function(i) {
e._keypressTimeout = null;
if (e._lastCapturedEvent !== i) {
e._lastCapturedEvent = i;
var n;
try {
n = b(i.target);
} catch (t) {
n = "<unknown>";
}
e.captureBreadcrumb({
category: "ui." + t,
message: n
});
}
};
},
_keypressEventHandler: function() {
var t = this;
return function(e) {
var i;
try {
i = e.target;
} catch (t) {
return;
}
var n = i && i.tagName;
if (n && ("INPUT" === n || "TEXTAREA" === n || i.isContentEditable)) {
var o = t._keypressTimeout;
o || t._breadcrumbEventHandler("input")(e);
clearTimeout(o);
t._keypressTimeout = setTimeout(function() {
t._keypressTimeout = null;
}, 1e3);
}
};
},
_captureUrlChange: function(t, e) {
var i = m(this._location.href), n = m(e), o = m(t);
this._lastHref = e;
i.protocol === n.protocol && i.host === n.host && (e = n.relative);
i.protocol === o.protocol && i.host === o.host && (t = o.relative);
this.captureBreadcrumb({
category: "navigation",
data: {
to: e,
from: t
}
});
},
_instrumentTryCatch: function() {
function t(t) {
return function(i, n) {
for (var o = new Array(arguments.length), r = 0; r < o.length; ++r) o[r] = arguments[r];
var a = o[0];
s(a) && (o[0] = e.wrap(a));
return t.apply ? t.apply(this, o) : t(o[0], o[1]);
};
}
var e = this, i = e._wrappedBuiltIns, n = this._globalOptions.autoBreadcrumbs;
j(E, "setTimeout", t, i);
j(E, "setInterval", t, i);
E.requestAnimationFrame && j(E, "requestAnimationFrame", function(t) {
return function(i) {
return t(e.wrap(i));
};
}, i);
for (var o = [ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ], r = 0; r < o.length; r++) !function(t) {
var o = E[t] && E[t].prototype;
if (o && o.hasOwnProperty && o.hasOwnProperty("addEventListener")) {
j(o, "addEventListener", function(i) {
return function(o, r, a, s) {
try {
r && r.handleEvent && (r.handleEvent = e.wrap(r.handleEvent));
} catch (t) {}
var _, l, d;
if (n && n.dom && ("EventTarget" === t || "Node" === t)) {
l = e._breadcrumbEventHandler("click");
d = e._keypressEventHandler();
_ = function(t) {
if (t) {
var e;
try {
e = t.type;
} catch (t) {
return;
}
return "click" === e ? l(t) : "keypress" === e ? d(t) : void 0;
}
};
}
return i.call(this, o, e.wrap(r, void 0, _), a, s);
};
}, i);
j(o, "removeEventListener", function(t) {
return function(e, i, n, o) {
try {
i = i && (i.__raven_wrapper__ ? i.__raven_wrapper__ : i);
} catch (t) {}
return t.call(this, e, i, n, o);
};
}, i);
}
}(o[r]);
},
_instrumentBreadcrumbs: function() {
function t(t, i) {
t in i && s(i[t]) && j(i, t, function(t) {
return e.wrap(t);
});
}
var e = this, i = this._globalOptions.autoBreadcrumbs, n = e._wrappedBuiltIns;
if (i.xhr && "XMLHttpRequest" in E) {
var o = XMLHttpRequest.prototype;
j(o, "open", function(t) {
return function(i, n) {
_(n) && -1 === n.indexOf(e._globalKey) && (this.__raven_xhr = {
method: i,
url: n,
status_code: null
});
return t.apply(this, arguments);
};
}, n);
j(o, "send", function(i) {
return function(n) {
function o() {
if (r.__raven_xhr && (1 === r.readyState || 4 === r.readyState)) {
try {
r.__raven_xhr.status_code = r.status;
} catch (t) {}
e.captureBreadcrumb({
type: "http",
category: "xhr",
data: r.__raven_xhr
});
}
}
for (var r = this, a = [ "onload", "onerror", "onprogress" ], _ = 0; _ < a.length; _++) t(a[_], r);
"onreadystatechange" in r && s(r.onreadystatechange) ? j(r, "onreadystatechange", function(t) {
return e.wrap(t, void 0, o);
}) : r.onreadystatechange = o;
return i.apply(this, arguments);
};
}, n);
}
i.xhr && "fetch" in E && j(E, "fetch", function(t) {
return function(i, n) {
for (var o = new Array(arguments.length), r = 0; r < o.length; ++r) o[r] = arguments[r];
var a, s = o[0], _ = "GET";
if ("string" == typeof s) a = s; else {
a = s.url;
s.method && (_ = s.method);
}
o[1] && o[1].method && (_ = o[1].method);
var l = {
method: _,
url: a,
status_code: null
};
e.captureBreadcrumb({
type: "http",
category: "fetch",
data: l
});
return t.apply(this, o).then(function(t) {
l.status_code = t.status;
return t;
});
};
}, n);
if (i.dom && this._hasDocument) if (O.addEventListener) {
O.addEventListener("click", e._breadcrumbEventHandler("click"), !1);
O.addEventListener("keypress", e._keypressEventHandler(), !1);
} else {
O.attachEvent("onclick", e._breadcrumbEventHandler("click"));
O.attachEvent("onkeypress", e._keypressEventHandler());
}
var r = E.chrome, a = r && r.app && r.app.runtime, l = !a && E.history && history.pushState;
if (i.location && l) {
var u = E.onpopstate;
E.onpopstate = function() {
var t = e._location.href;
e._captureUrlChange(e._lastHref, t);
if (u) return u.apply(this, arguments);
};
j(history, "pushState", function(t) {
return function() {
var i = arguments.length > 2 ? arguments[2] : void 0;
i && e._captureUrlChange(e._lastHref, i + "");
return t.apply(this, arguments);
};
}, n);
}
if (i.console && "console" in E && console.log) {
var c = function(t, i) {
e.captureBreadcrumb({
message: t,
level: i.level,
category: "console"
});
};
d([ "debug", "info", "warn", "error", "log" ], function(t, e) {
T(console, e, c);
});
}
},
_restoreBuiltIns: function() {
for (var t; this._wrappedBuiltIns.length; ) {
t = this._wrappedBuiltIns.shift();
var e = t[0], i = t[1], n = t[2];
e[i] = n;
}
},
_drainPlugins: function() {
var t = this;
d(this._plugins, function(e, i) {
var n = i[0], o = i[1];
n.apply(t, [ t ].concat(o));
});
},
_parseDSN: function(t) {
var e = D.exec(t), i = {}, n = 7;
try {
for (;n--; ) i[B[n]] = e[n] || "";
} catch (e) {
throw new A("Invalid DSN: " + t);
}
if (i.pass && !this._globalOptions.allowSecretKey) throw new A("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
return i;
},
_getGlobalServer: function(t) {
var e = "//" + t.host + (t.port ? ":" + t.port : "");
t.protocol && (e = t.protocol + ":" + e);
return e;
},
_handleOnErrorStackInfo: function() {
this._ignoreOnError || this._handleStackInfo.apply(this, arguments);
},
_handleStackInfo: function(t, e) {
var i = this._prepareFrames(t, e);
this._triggerEvent("handle", {
stackInfo: t,
options: e
});
this._processException(t.name, t.message, t.url, t.lineno, i, e);
},
_prepareFrames: function(t, e) {
var i = this, n = [];
if (t.stack && t.stack.length) {
d(t.stack, function(t, e) {
var o = i._normalizeFrame(e);
o && n.push(o);
});
if (e && e.trimHeadFrames) for (var o = 0; o < e.trimHeadFrames && o < n.length; o++) n[o].in_app = !1;
}
n = n.slice(0, this._globalOptions.stackTraceLimit);
return n;
},
_normalizeFrame: function(t) {
if (t.url) {
var e = {
filename: t.url,
lineno: t.line,
colno: t.column,
function: t.func || "?"
};
e.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(e.filename) || /(Raven|TraceKit)\./.test(e.function) || /raven\.(min\.)?js$/.test(e.filename));
return e;
}
},
_processException: function(t, e, i, n, o, r) {
var a;
if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
e += "";
if (o && o.length) {
i = o[0].filename || i;
o.reverse();
a = {
frames: o
};
} else i && (a = {
frames: [ {
filename: i,
lineno: n,
in_app: !0
} ]
});
if ((!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(i)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(i))) {
var s = u({
exception: {
values: [ {
type: t,
value: e,
stacktrace: a
} ]
},
culprit: i
}, r);
this._send(s);
}
}
},
_trimPacket: function(t) {
var e = this._globalOptions.maxMessageLength;
t.message && (t.message = h(t.message, e));
if (t.exception) {
var i = t.exception.values[0];
i.value = h(i.value, e);
}
var n = t.request;
if (n) {
n.url && (n.url = h(n.url, this._globalOptions.maxUrlLength));
n.Referer && (n.Referer = h(n.Referer, this._globalOptions.maxUrlLength));
}
t.breadcrumbs && t.breadcrumbs.values && this._trimBreadcrumbs(t.breadcrumbs);
return t;
},
_trimBreadcrumbs: function(t) {
for (var e, i, n, o = [ "to", "from", "url" ], r = 0; r < t.values.length; ++r) {
i = t.values[r];
if (i.hasOwnProperty("data") && N(i.data) && !c(i.data)) {
n = u({}, i.data);
for (var a = 0; a < o.length; ++a) {
e = o[a];
n.hasOwnProperty(e) && (n[e] = h(n[e], this._globalOptions.maxUrlLength));
}
t.values[r].data = n;
}
}
},
_getHttpData: function() {
if (this._hasNavigator || this._hasDocument) {
var t = {};
this._hasNavigator && L.userAgent && (t.headers = {
"User-Agent": navigator.userAgent
});
if (this._hasDocument) {
O.location && O.location.href && (t.url = O.location.href);
if (O.referrer) {
t.headers || (t.headers = {});
t.headers.Referer = O.referrer;
}
}
return t;
}
},
_resetBackoff: function() {
this._backoffDuration = 0;
this._backoffStart = null;
},
_shouldBackoff: function() {
return this._backoffDuration && n() - this._backoffStart < this._backoffDuration;
},
_isRepeatData: function(t) {
var e = this._lastData;
return !(!e || t.message !== e.message || t.culprit !== e.culprit) && (t.stacktrace || e.stacktrace ? y(t.stacktrace, e.stacktrace) : !t.exception && !e.exception || v(t.exception, e.exception));
},
_setBackoffState: function(t) {
if (!this._shouldBackoff()) {
var e = t.status;
if (400 === e || 401 === e || 429 === e) {
var i;
try {
i = t.getResponseHeader("Retry-After");
i = 1e3 * parseInt(i, 10);
} catch (t) {}
this._backoffDuration = i || (2 * this._backoffDuration || 1e3);
this._backoffStart = n();
}
}
},
_send: function(t) {
var e = this._globalOptions, i = {
project: this._globalProject,
logger: e.logger,
platform: "javascript"
}, o = this._getHttpData();
o && (i.request = o);
t.trimHeadFrames && delete t.trimHeadFrames;
t = u(i, t);
t.tags = u(u({}, this._globalContext.tags), t.tags);
t.extra = u(u({}, this._globalContext.extra), t.extra);
t.extra["session:duration"] = n() - this._startTime;
this._breadcrumbs && this._breadcrumbs.length > 0 && (t.breadcrumbs = {
values: [].slice.call(this._breadcrumbs, 0)
});
l(t.tags) && delete t.tags;
this._globalContext.user && (t.user = this._globalContext.user);
e.environment && (t.environment = e.environment);
e.release && (t.release = e.release);
e.serverName && (t.server_name = e.serverName);
s(e.dataCallback) && (t = e.dataCallback(t) || t);
t && !l(t) && (s(e.shouldSendCallback) && !e.shouldSendCallback(t) || (this._shouldBackoff() ? this._logDebug("warn", "Raven dropped error due to backoff: ", t) : "number" == typeof e.sampleRate ? Math.random() < e.sampleRate && this._sendProcessedPayload(t) : this._sendProcessedPayload(t)));
},
_getUuid: function() {
return $();
},
_sendProcessedPayload: function(t, e) {
var i = this, n = this._globalOptions;
if (this.isSetup()) {
this._lastEventId = t.event_id || (t.event_id = this._getUuid());
t = this._trimPacket(t);
if (this._globalOptions.allowDuplicates || !this._isRepeatData(t)) {
this._lastData = t;
this._logDebug("debug", "Raven about to send:", t);
var o = {
sentry_version: "7",
sentry_client: "raven-js/" + this.VERSION,
sentry_key: this._globalKey
};
this._globalSecret && (o.sentry_secret = this._globalSecret);
var r = t.exception && t.exception.values[0];
this.captureBreadcrumb({
category: "sentry",
message: r ? (r.type ? r.type + ": " : "") + r.value : t.message,
event_id: t.event_id,
level: t.level || "error"
});
var a = this._globalEndpoint;
(n.transport || this._makeRequest).call(this, {
url: a,
auth: o,
data: t,
options: n,
onSuccess: function() {
i._resetBackoff();
i._triggerEvent("success", {
data: t,
src: a
});
e && e();
},
onError: function(n) {
i._logDebug("error", "Raven transport failed to send: ", n);
n.request && i._setBackoffState(n.request);
i._triggerEvent("failure", {
data: t,
src: a
});
n = n || new Error("Raven send failed (no additional details provided)");
e && e(n);
}
});
} else this._logDebug("warn", "Raven dropped repeat event: ", t);
}
},
_makeRequest: function(t) {
var e = new XMLHttpRequest();
if ("withCredentials" in e || "undefined" != typeof XDomainRequest) {
var i = t.url;
if ("withCredentials" in e) e.onreadystatechange = function() {
if (4 === e.readyState) if (200 === e.status) t.onSuccess && t.onSuccess(); else if (t.onError) {
var i = new Error("Sentry error code: " + e.status);
i.request = e;
t.onError(i);
}
}; else {
e = new XDomainRequest();
i = i.replace(/^https?:/, "");
t.onSuccess && (e.onload = t.onSuccess);
t.onError && (e.onerror = function() {
var i = new Error("Sentry error code: XDomainRequest");
i.request = e;
t.onError(i);
});
}
e.open("POST", i + "?" + p(t.auth));
e.send(S(t.data));
}
},
_logDebug: function(t) {
this._originalConsoleMethods[t] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[t], this._originalConsole, [].slice.call(arguments, 1));
},
_mergeContext: function(t, e) {
a(e) ? delete this._globalContext[t] : this._globalContext[t] = u(this._globalContext[t] || {}, e);
}
};
var W = Object.prototype;
"undefined" != typeof __DEV__ && __DEV__ && (r.utils = {
isUndefined: a,
isFunction: s,
isString: _,
isObject: N,
isEmptyObject: l,
isError: I,
each: d,
objectMerge: u,
truncate: h,
hasKey: f,
joinRegExp: g,
urlencode: p,
uuid4: $,
htmlTreeAsString: b,
htmlElementAsString: w,
parseUrl: m,
fill: j
});
r.prototype.setUser = r.prototype.setUserContext;
r.prototype.setReleaseContext = r.prototype.setRelease;
t.exports = r;
}).call(this, i(99));
}, function(t, e, i) {
"use strict";
(function(e) {
var n = i(248), o = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, r = o.Raven, a = new n();
a.noConflict = function() {
o.Raven = r;
return a;
};
a.afterLoad();
t.exports = a;
}).call(this, i(99));
}, function(t, e, i) {
function n(t, e, i) {
_(e) && (i = e, e = null);
e || (e = {});
d("POST", t, e, i);
}
function o(t, e, i) {
_(e) && (i = e, e = null);
e || (e = {});
d("GET", t, e, i);
}
function r(t, e, i, n) {
var o, r, a, s = "form" + ~~(1e5 * Math.random()), _ = i.timeout || 1e4, d = document.createElement("form"), u = document.createElement("iframe");
d.method = t;
d.action = e;
u.style.display = "none";
if (i.params) for (r in i.params) if (i.params.hasOwnProperty(r)) {
a = document.createElement("input");
a.name = r;
a.value = i.params[r];
d.appendChild(a);
}
document.body.appendChild(d);
document.body.appendChild(u);
d.target = u.contentWindow.name = s;
l(function() {
d.submit();
document.body.removeChild(d);
a = d = null;
u.onload = function() {
u.onload = null;
u.contentWindow.location.href = "about:blank";
u.onload = function() {
u.onload = null;
clearTimeout(o);
n && n(null, u.contentWindow.name);
document.body.removeChild(u);
u = null;
};
};
});
o = setTimeout(function() {
n && n("timeout");
document.body.removeChild(u);
u = null;
}, _);
}
function a(t, e, i, n) {
function o() {
if (h.contentWindow.frames.length) {
h.contentWindow.location.href = "about:blank";
clearTimeout(a);
setTimeout(function() {
n && n(null, h.contentWindow.name);
r.body.removeChild(h);
r = h = null;
}, 0);
} else s = setTimeout(o, 100);
}
var r = document;
if (window.ActiveXObject) try {
r = new window.ActiveXObject("htmlfile");
r.open(), r.close();
} catch (t) {}
var a, s, _, l, d = "form" + ~~(1e5 * Math.random()), u = i.timeout || 1e4, c = r.createElement('<form target="' + d + '"/>'), h = r.createElement('<iframe name="' + d + '"/>');
c.method = t;
c.action = e;
h.style.display = "none";
if (i.params) for (_ in i.params) if (i.params.hasOwnProperty(_)) {
l = r.createElement('<input name="' + _ + '"/>');
l.value = i.params[_];
c.appendChild(l);
}
r.body.appendChild(c);
r.body.appendChild(h);
c.submit();
r.body.removeChild(c);
l = c = null;
s = setTimeout(o, 100);
a = setTimeout(function() {
n && n("timeout");
clearTimeout(s);
r.body.removeChild(h);
r = h = null;
}, u);
}
var s = i(8), _ = i(20), l = i(16), d = s.isIE6 || s.isIE7 || s.isIE8 ? a : r;
d.get = o;
d.post = n;
t.exports = d;
}, function(t, e, i) {
var n = i(45), o = i(8), r = {
info: {
gitCommit: n.git_commit,
buildNumber: n.build_number,
releaseTag: n.release_tag,
userAgent: window.navigator.userAgent,
platform: window.navigator.platform,
language: o.language,
browser: o.browser,
version: o.version,
javaVersion: o.hasJava,
flashVersion: o.hasFlash,
url: window.location.toString()
}
};
t.exports = r;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
r.tagName = "script";
a.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(23);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_html_script"
});
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
var s = t.ownerDocument;
r || (r = {});
r.tagName || (r.tagName = "link");
a.call(this, s.getElementsByTagName("head")[0], e, i, null, r);
this.dom.rel = "stylesheet";
this.dom.type = "text/css";
}
var o = i(1), r = i(0), a = i(7);
n.prototype = r(a.prototype);
o(n, a, {
fqname: "jx_ui_ExternalStyleSheet"
});
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
_.call(this, t, e, i, o, r);
}
var o = i(1), r = i(0), a = i(8), s = i(16), _ = i(182), l = i(18), d = [ "woff", "ttf", "svg" ], u = [ "svg", "woff", "ttf" ], c = {
woff: "url(@@DATA@@)format('woff')",
ttf: "url(@@DATA@@)format('truetype')",
svg: "url(@@DATA@@)format('svg')"
}, h = {
woff: "application/font-woff",
ttf: "font/ttf",
svg: "font/svg"
}, f = "@font-face{font-family:'@@NAME@@';src:@@FORMATS@@;font-weight:normal;font-style:normal;}";
n.prototype = r(_.prototype);
o(n, _, {
fqname: "meshim_widget_widgets_FontLoader"
});
n.prototype.setFont = function(t) {
var e, i, n, o = [], r = d, _ = this.getBase64();
(a.isIE <= 8 || a.isQuirks || window.document.documentMode && window.document.documentMode <= 8) && (_ = {});
a.isChrome && a.isWindows && (r = u);
for (var g = 0, p = r.length; g < p; g++) {
n = r[g];
i = c[n];
try {
o.push(i.replace(/@@DATA@@/g, _[n] ? "data:@@MIME@@;base64,@@B64DATA@@ " : "'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@'").replace(/@@FONTS_URL@@/g, l.FONTS_URL).replace(/@@FORMAT@@/g, n).replace(/@@MIME@@/g, h[n]).replace(/@@B64DATA@@/g, _[n]));
} catch (t) {}
}
e = f.replace(/@@FORMATS@@/g, o.join(",")).replace(/@@NAME@@/g, t);
var m = this;
s(function() {
m.dom && m.addChildren([ e ]);
});
return this;
};
n.prototype.getBase64 = function() {
return this.base64 || {};
};
n.prototype.setBase64 = function(t) {
this.base64 = t;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_Menu = i(66);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__jx_ui_Localizer = i(87);
n.__$$__jx_ui_Label = i(19);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(140), c = s(141), h = [ n.__$$__meshim_widget_widgets_Menu, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "", "", [ [ n.__$$__jx_ui_Localizer, "localizer", "", [ [ n.__$$__jx_ui_Label, "", "", [], {
addClass: "email"
} ] ], {
id: "localizer",
delimiter: "@@@@"
} ] ], {
addClass: "flow"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__localizer");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function t() {
"email_transcript_notification" == _ && f.update("");
}
var e = i(8), n = i(16), o = i(6), r = i(11), a = 4100, s = r.isStyleSupported("transition");
e.isFF && (s = !1);
var _, l, d = o.root.$("livechat"), h = d.$("ui").$("chat_window"), f = h.$("menu_stack_name$string"), m = h.$("email_transcript_notification").$("last_sent_email$string"), $ = d.$("channel").$("chatting$bool");
!function() {
g.autobind(f, "value", function(e) {
_ = e;
l && window.clearTimeout(l);
if (e == g.getName()) {
s && n(function() {
g.addClass("fade_out");
});
l = window.setTimeout(t, a);
} else s && n(function() {
g.removeClass("fade_out");
});
});
g.autobind(m, "value", function(t) {
var e = $.getValue();
p.setContent((e ? u : c).replace("<email>", t));
});
r.onTransitionEnd(g, g, t);
}();
}();
for (var $ in m) g[$] = m[$];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Menu.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
transition: "opacity 0.5s linear 3.5s",
opacity: 1,
"&.fade_out": {
opacity: 0
}
},
".email": {
fontWeight: "bold"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Menu, {
fqname: "meshim_widget_components_chatWindow_EmailTranscriptNotification"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_Menu = i(66);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__meshim_widget_widgets_ConnAwareForm = i(110);
n.__$$__meshim_widget_widgets_menu_Header = i(100);
n.__$$__meshim_widget_widgets_EmailField = i(79);
n.__$$__meshim_widget_widgets_ErrorMessage = i(80);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_ConnAwareSubmit = i(77);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(132), c = s(133), h = s(134), f = s(135), g = s(136), p = [ n.__$$__meshim_widget_widgets_Menu, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "", "", [ [ n.__$$__meshim_widget_widgets_ConnAwareForm, "form", "", [ [ n.__$$__meshim_widget_widgets_menu_Header, "label", "", [ u ], {
id: "label",
addClass: "label",
selectable: "false"
} ], [ n.__$$__meshim_widget_widgets_EmailField, "email", "", [], {
id: "email",
addClass: "email mobile_error_icon",
placeholder: c,
required: "true"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "error_message", "", [ h ], {
id: "error_message",
useDisplay: "true"
} ], [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_ConnAwareSubmit, "", "", [], {
placement: "primary",
value: f,
addClass: "short wide"
} ], [ n.__$$__meshim_widget_widgets_Button, "cancel", "", [ g ], {
placement: "secondary",
id: "cancel",
addClass: "secondary short wide"
} ] ], {
addClass: "controls_margin"
} ] ], {
id: "form",
noValidate: "true"
} ] ], {
addClass: "flow"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], m = p[0].call(this, e, o, null, _.mangleIDs(o, p[3]), p[4]), $ = m || this;
_.set(o, $);
var b = _.get(o + "__form"), w = _.get(o + "__label"), x = _.get(o + "__email"), v = _.get(o + "__error_message"), y = _.get(o + "__cancel");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var j = function() {
var t = i(6), e = t.root.$("livechat"), n = e.$("ui").$("chat_window"), o = e.$("channel"), r = n.$("menu_stack_name$string"), a = n.$("email_transcript_notification").$("last_sent_email$string"), s = e.$("profile").$("email$string"), _ = o.$("chatting$bool"), l = $.dom.ownerDocument;
!function() {
x.setLabelElement(w).setErrorMessageElement(v).setValidity(!0);
b.onConnectedAndSubmit(function(t) {
t.preventDefault();
if (x.validate(!0)) {
var e = x.getValue();
_.getValue() ? o.write({
email_transcript$string: e
}) : o.write({
email_last_transcript$string: e
});
a.update(e);
r.update("email_transcript_notification");
x.reset();
}
});
y.on("click", function() {
r.update("");
});
$.autobind(r, "value", function(t) {
if (t == $.getName()) {
x.setValidity(!0);
x.focus();
}
});
$.autobind(s, "value", function(t) {
l.activeElement !== x.dom && x.setValue(t || "");
});
}();
}();
for (var C in j) $[C] = j[C];
$.fire && $.fire("init");
$.setStyle && $.setStyle(r);
$.setAttributes && $.setAttributes(d);
"function" == typeof $.addChildren ? $.addChildren(l) : _.addChildren($, l);
if ($ !== this) {
$.__jx__constructor = this.__jx__constructor;
$.__jx__native = this.__jx__native;
}
return $;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Menu.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".controls_margin": {
marginTop: "10px"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Menu, {
fqname: "meshim_widget_components_chatWindow_EmailTranscriptMenu"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_Menu = i(66);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(138), c = s(139), h = [ n.__$$__meshim_widget_widgets_Menu, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "", "", [ [ n.__$$__jx_ui_Widget, "message", "", [], {
id: "message",
addClass: "message"
} ], [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "end_chat", "", [ u ], {
placement: "primary",
id: "end_chat",
addClass: "wide short"
} ], [ n.__$$__meshim_widget_widgets_Button, "cancel", "", [ c ], {
placement: "secondary",
id: "cancel",
addClass: "wide secondary short"
} ] ], {} ] ], {
addClass: "flow"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__message"), m = _.get(o + "__end_chat"), $ = _.get(o + "__cancel");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
var t = i(6), e = i(10), n = t.root.$("livechat"), o = n.$("ui").$("chat_window").$("menu_stack_name$string"), r = n.$("ui").$("chat_window").$("main_stack_name$string"), a = n.$("settings").$("end_chat_menu").$("message$string"), s = n.$("settings").$("rating").$("enabled$bool"), _ = n.$("channel"), l = _.$("served$bool"), d = _.$("rating$string"), u = n.$("ui").$("chat_window").$("rating_panel").$("end_chat$bool");
!function() {
g.autobind(a, "value", function(t) {
p.setText(t || e.end_chat_menu_message || "");
});
m.on("click", function() {
if (s.getValue() && l.getValue() && !d.getValue()) {
u.update(!0);
r.update("rating_panel");
} else t.livechat.endChat();
o.update("");
});
$.on("click", function() {
o.update("");
});
}();
}();
for (var w in b) g[w] = b[w];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Menu.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".message": {
marginBottom: "10px"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Menu, {
fqname: "meshim_widget_components_chatWindow_EndChatMenu"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ConnAwareForm = i(110);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__meshim_widget_widgets_menu_Header = i(100);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_TextField = i(86);
n.__$$__meshim_widget_widgets_ErrorMessage = i(80);
n.__$$__meshim_widget_widgets_EmailField = i(79);
n.__$$__meshim_widget_widgets_PhoneField = i(160);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_ConnAwareSubmit = i(77);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(186), c = s(187), h = s(188), f = s(189), g = s(190), p = s(191), m = s(192), $ = s(193), b = s(194), w = [ n.__$$__meshim_widget_widgets_ConnAwareForm, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "internal_section", "", [ [ n.__$$__meshim_widget_widgets_menu_Header, "label", "", [ u ], {
id: "label",
addClass: "label",
selectable: "false"
} ], [ n.__$$__jx_ui_Widget, "name_email_container", "", [ [ n.__$$__meshim_widget_widgets_TextField, "name", "", [], {
id: "name",
placeholder: c,
required: "true",
maxLength: "255",
addClass: "standalone mobile_error_icon"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "name_error", "", [ h ], {
id: "name_error",
useDisplay: "true"
} ], [ n.__$$__meshim_widget_widgets_EmailField, "email", "", [], {
id: "email",
placeholder: f,
required: "true",
addClass: "standalone mobile_error_icon"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "email_error", "", [ g ], {
id: "email_error",
useDisplay: "true"
} ] ], {
id: "name_email_container"
} ], [ n.__$$__jx_ui_Widget, "phone_container", "", [ [ n.__$$__meshim_widget_widgets_PhoneField, "phone", "", [], {
id: "phone",
placeholder: p,
addClass: "standalone mobile_error_icon"
} ], [ n.__$$__meshim_widget_widgets_ErrorMessage, "phone_error", "", [ m ], {
id: "phone_error",
useDisplay: "true"
} ] ], {
id: "phone_container"
} ], [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_ConnAwareSubmit, "", "", [], {
placement: "primary",
value: $,
addClass: "save short wide"
} ], [ n.__$$__meshim_widget_widgets_Button, "cancel", "", [ b ], {
placement: "secondary",
id: "cancel",
addClass: "cancel secondary wide"
} ] ], {
addClass: "controls_margin"
} ] ], {
id: "internal_section",
addClass: "flow"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu",
noValidate: "true"
} ], x = w[0].call(this, e, o, null, _.mangleIDs(o, w[3]), w[4]), v = x || this;
_.set(o, v);
var y = _.get(o + "__internal_section"), j = _.get(o + "__label"), C = _.get(o + "__name_email_container"), S = _.get(o + "__name"), A = _.get(o + "__name_error"), k = _.get(o + "__email"), I = _.get(o + "__email_error"), N = _.get(o + "__phone_container"), T = _.get(o + "__phone"), B = _.get(o + "__phone_error"), D = _.get(o + "__cancel");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var E = function() {
function t() {
S.reset();
k.reset();
T.reset();
}
function e() {
var t = x.getValue();
t && y.setDisplay(t.email$bool ? "" : "none");
}
var n, o, r, a = i(6), s = i(11), _ = i(9), l = a.root.$("livechat"), d = l.$("profile"), u = l.$("ui"), c = d.$("auth").$("type$string"), h = u.$("chat_window"), f = d.$("logged_in$bool"), g = d.$("display_name$string"), p = d.$("email$string"), m = d.$("phone$string"), $ = h.$("menu_stack_name$string"), b = h.$("profile_menu").$("index$int"), w = l.$("settings").$("login"), x = w.$("allowed_types"), E = w.$("phone_display$bool"), O = l.$("settings").$("forms").$("pre_chat_form");
!function() {
_.mobile(v);
S.setLabelElement(j).setErrorMessageElement(A).setValidity(!0);
k.setErrorMessageElement(I).setValidity(!0);
T.setErrorMessageElement(B).setValidity(!0);
v.autobind(f, "value", function(t) {
o = t;
});
v.autobind(c, "value", function(t) {
n = t;
C.setDisplay(t ? "none" : "");
});
v.autobind(g, "value", function(t) {
s.isDefaultName(t) && (t = "");
t = t || "";
S.setValue(t);
S.setInitialValue(t);
t && S.hidePlaceholder();
});
v.autobind(p, "value", function(t) {
t = t || "";
k.setValue(t);
k.setInitialValue(t);
t && k.hidePlaceholder();
});
v.autobind(m, "value", function(t) {
t = t || "";
T.setValue(t);
T.setInitialValue(t);
t && T.hidePlaceholder();
});
v.autobind(E, "value", function(t) {
r = t;
N.setDisplay(t ? "" : "none");
});
v.autobind($, "value", function(e) {
"profile_menu" == e && t();
});
v.autobind(b, "value", function(e) {
2 == e && t();
});
D.on("click", function(t) {
t.preventDefault();
$.update("");
});
v.onConnectedAndSubmit(function(t) {
t.preventDefault();
if (v.validate(!0)) {
var e = {};
if (!n) {
e.name = S.getValue().trim();
e.email = k.getValue().trim();
}
r && (e.phone = T.getValue().trim());
a.livechat.updateProfile(e);
$.update("");
}
});
v.autobind(x, "value", e);
v.autobind(O, "value", function() {
var t = O.getValue("profile_required$bool"), e = O.$("form").$("4").getValue("required$bool");
S.setRequired(t);
k.setRequired(t);
T.setRequired(e);
});
}();
}();
for (var O in E) v[O] = E[O];
v.fire && v.fire("init");
v.setStyle && v.setStyle(r);
v.setAttributes && v.setAttributes(d);
"function" == typeof v.addChildren ? v.addChildren(l) : _.addChildren(v, l);
if (v !== this) {
v.__jx__constructor = this.__jx__constructor;
v.__jx__native = this.__jx__native;
}
return v;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ConnAwareForm.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".cancel": {
display: "none"
},
".controls_margin": {
marginTop: "10px"
},
"&.mobile": {
".cancel": {
display: "inline-block"
},
".external": {
marginBottom: "20px",
".header": {
padding: "10px 0",
borderTop: "none"
}
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ConnAwareForm, {
fqname: "meshim_widget_components_chatWindow_profileMenu_Edit"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ProfileCard = i(137);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__meshim_widget_widgets_ProfileCard, "", "", [], {
xmlns: "meshim.widget.widgets"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var c = function() {
function t(t) {
e.call(u, t);
t && u.setTitleNode(t.$("email$string"));
}
var e;
!function() {
e = u.setDataNode || function() {};
u.setDataNode = t;
}();
}();
for (var h in c) u[h] = c[h];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ProfileCard.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ProfileCard, {
fqname: "meshim_widget_widgets_VisitorProfileCard"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__meshim_widget_widgets_VisitorProfileCard = i(259);
n.__$$__meshim_widget_widgets_iconFont_Button = i(161);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(201), c = s(202), h = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "", "", [ [ n.__$$__jx_ui_Widget, "external", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_VisitorProfileCard, "profile_card", "", [], {
id: "profile_card",
addClass: "profile_card"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_iconFont_Button, "sign_out", "", [], {
addClass: "iconfont_button",
id: "sign_out",
icon: "dustbin",
title: u
} ] ], {
addClass: "controls"
} ] ], {
addClass: "positioned"
} ], [ n.__$$__jx_ui_Widget, "phone_container_external", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "phone_text_external", "", [], {
id: "phone_text_external",
addClass: "phone_text_external break_word"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_iconFont_Button, "edit_external_phone", "", [], {
addClass: "iconfont_button",
id: "edit_external_phone",
icon: "pencil",
title: c
} ] ], {
addClass: "controls"
} ] ], {
addClass: "positioned"
} ] ], {
id: "phone_container_external",
addClass: "phone_container_external"
} ] ], {
id: "external"
} ], [ n.__$$__jx_ui_Widget, "name_email", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_Widget, "name", "", [], {
id: "name",
addClass: "name break_word"
} ], [ n.__$$__jx_ui_Widget, "email", "", [], {
id: "email",
addClass: "email break_word"
} ], [ n.__$$__jx_ui_Widget, "phone_text", "", [], {
id: "phone_text",
addClass: "phone break_word"
} ] ], {
addClass: "name_email"
} ], [ n.__$$__jx_ui_Widget, "edit_controls", "", [ [ n.__$$__meshim_widget_widgets_iconFont_Button, "edit", "", [], {
addClass: "iconfont_button",
id: "edit",
icon: "pencil",
title: c
} ], [ n.__$$__meshim_widget_widgets_iconFont_Button, "sign_out_name_email", "", [], {
addClass: "iconfont_button",
id: "sign_out_name_email",
icon: "dustbin",
title: u
} ] ], {
id: "edit_controls",
addClass: "controls"
} ] ], {
id: "name_email",
addClass: "positioned"
} ] ], {
addClass: "flow"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__external"), m = _.get(o + "__profile_card"), $ = _.get(o + "__sign_out"), b = _.get(o + "__phone_container_external"), w = _.get(o + "__phone_text_external"), x = _.get(o + "__edit_external_phone"), v = _.get(o + "__name_email"), y = _.get(o + "__name"), j = _.get(o + "__email"), C = _.get(o + "__phone_text"), S = _.get(o + "__edit_controls"), A = _.get(o + "__edit"), k = _.get(o + "__sign_out_name_email");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var I = function() {
var t, e, n, o = i(6), r = (i(44), i(11)), a = i(9), s = i(10), _ = o.root.$("livechat"), l = _.$("profile"), d = _.$("ui"), u = d.$("visitor").$("authenticated$bool"), c = l.$("auth").$("type$string"), h = l.$("display_name$string"), f = l.$("email$string"), I = l.$("phone$string"), N = _.$("settings").$("login").$("phone_display$bool"), T = d.$("chat_window").$("profile_menu").$("index$int"), B = d.$("chat_window").$("menu_stack_name$string");
!function() {
function i() {
if (t) {
b.setDisplay(n ? "" : "none");
w.setText(e || s.placeholder.phone);
w[e ? "removeClass" : "addClass"]("placeholder");
} else if (n && e) {
C.setText(e);
C.setDisplay("");
} else C.setDisplay("none");
}
function _() {
T.update(2);
}
g.autobind(u, "value", function(t) {
S.setDisplay(t ? "none" : "");
});
m.setDataNode(l);
a.mobile(g);
a.rtl(g);
g.autobind(h, "value", function(t) {
r.isDefaultName(t) && (t = "");
y.setText(t || "");
y.setDisplay(t ? "" : "none");
});
g.autobind(f, "value", function(t) {
j.setText(t || "");
j.setDisplay(t ? "" : "none");
});
g.autobind(I, "value", function(t) {
e = t;
i();
});
g.autobind(N, "value", function(t) {
n = t;
i();
});
g.autobind(c, "value", function(e) {
t = e;
if (e) {
p.setDisplay("");
v.setDisplay("none");
} else {
p.setDisplay("none");
v.setDisplay("");
}
i();
});
A.on("click", _);
x.on("click", _);
w.on("click", function() {
e || _();
});
$.on("click", function() {
o.livechat.doExternalLogout();
});
k.on("click", function() {
l.write({
display_name$string: "",
email$string: "",
phone$string: ""
});
B.update("");
});
}();
}();
for (var N in I) g[N] = I[N];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative"
},
".name_email": {
".name": {
paddingRight: "40px"
}
},
"&.rtl .name_email": {
".name": {
paddingRight: 0,
paddingLeft: "40px"
}
},
".controls": {
position: "absolute",
"top, right": 0,
".iconfont_button": {
display: "inline-block",
cursor: "pointer",
height: "100%",
paddingLeft: "5px",
color: "$$menuHeaderColor",
"&:hover, &:focus": {
color: "$$menuColor"
}
}
},
"&.rtl .controls": {
right: "auto",
left: 0,
".iconfont_button": {
paddingLeft: 0,
paddingRight: "5px"
}
},
".break_word": {
wordWrap: "break-word"
},
".name, .email, .phone": {
lineHeight: 1.5
},
".phone_text_external": {
paddingRight: "40px",
"&.placeholder": {
cursor: "pointer",
color: "$$inputPlaceholderColor",
fontStyle: "$$inputPlaceholderFontStyle"
}
},
"&.rtl .phone_text_external": {
paddingRight: 0,
paddingLeft: "40px"
},
".profile_card": {
cursor: "default",
".avatar_cell": {
width: "32px"
},
".content_cell": {
paddingLeft: "10px"
},
".profile_name": {
whiteSpace: "nowrap",
paddingRight: "20px"
}
},
"&.rtl .profile_card": {
".content_cell": {
paddingLeft: 0,
paddingRight: "10px"
},
".profile_name, .profile_email, .profile_title": {
paddingRight: 0,
paddingLeft: "20px"
}
},
".name": {
fontWeight: "bold"
},
".positioned": {
position: "relative"
},
".phone_container_external": {
"marginTop, paddingTop": "10px",
borderTopWidth: "$$menuBorderWidth",
borderTopStyle: "$$menuBorderStyle",
borderTopColor: "$$menuBorderColor"
},
"&.mobile": {
".controls": {
height: "100%",
".iconfont_button": {
"paddingRight, paddingLeft": "10px"
}
},
".name_email": {
".name, .email": {
paddingRight: "80px"
}
},
".profile_card": {
".profile_name, .profile_email, .profile_title": {
paddingRight: "40px"
}
},
".phone_text_external": {
lineHeight: "32px"
}
},
"&.mobile.rtl": {
".name_email": {
".name, .email": {
paddingRight: 0,
paddingLeft: "80px"
}
},
".profile_card": {
".profile_name, .profile_email, .profile_title": {
paddingRight: 0,
paddingLeft: "40px"
}
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatWindow_profileMenu_Status"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__meshim_widget_widgets_menu_Header = i(100);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(199), c = s(200), h = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "external_section", "", [ [ n.__$$__meshim_widget_widgets_menu_Header, "", "", [ u ], {
addClass: "item"
} ], [ n.__$$__jx_ui_Widget, "types", "", [], {
id: "types",
addClass: "external_types"
} ] ], {
id: "external_section"
} ], [ n.__$$__meshim_widget_widgets_menu_Section, "email", "", [ [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ c ], {
addClass: "menu_item"
} ] ], {
id: "email",
addClass: "border_top"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__external_section"), m = _.get(o + "__types"), $ = _.get(o + "__email");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
function t() {
var t = d.getValue();
if (t) {
e = c.getValue();
$.setDisplay(t.email$bool ? "" : "none");
var i, n;
for (var o in h) if (h.hasOwnProperty(o)) {
n = t[o + "$bool"];
h[o].setDisplay(n ? "" : "none");
e && n && h[o].setDisplay("inline-block");
n && (i = !0);
}
p.setDisplay(i ? "" : "none");
}
}
var e, n = i(6), o = i(81), r = i(159), a = i(37), s = i(10), _ = i(9), l = i(19), d = n.root.$("livechat").$("settings").$("login").$("allowed_types"), u = n.root.$("livechat").$("ui").$("chat_window").$("profile_menu").$("index$int"), c = n.root.$$("livechat.ui.mobile$bool"), h = {
facebook: null,
twitter: null,
google: null
}, f = {
facebook: "facebook",
twitter: "twitter",
google: "google_2019"
};
!function() {
_.mobile(g);
e = c.getValue();
for (var i in h) if (h.hasOwnProperty(i)) if (e) h[i] = new r(m, null, null, [ s.external_login[i] || i ], {
name: i,
addClass: "float " + i,
icon: f[i]
}); else {
h[i] = new a(m, null, null, null, {
addClass: "menu_item",
name: i
});
new o(h[i], null, null, null, {
addClass: "menu_icon " + i,
icon: f[i]
});
new l(h[i], null, null, [ s.external_login[i] || i ], {
addClass: "label"
});
}
g.autobind(d, "value", t);
m.on("click", function(t) {
var e = t.target.jx_wrapper;
if (e != m) {
for (;e.parentNode != m; ) e = e.parentNode;
var i = e.getName && e.getName();
i && n.livechat.doExternalLogin(i);
}
});
$.on("click", function() {
u.update(2);
});
}();
}();
for (var w in b) g[w] = b[w];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".menu_item": {
".label": {
marginLeft: "10px"
},
"&[name=facebook] .menu_icon": {
top: "1px"
},
"&[name=google]   .menu_icon": {
top: "2px"
}
},
".menu_icon": {
position: "relative",
float: "left",
fontSize: "$$fontSizeXL"
},
"&.mobile": {
".external_types": {
margin: "$$menuItemPadding"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatWindow_profileMenu_Login"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Menu = i(66);
n.__$$__meshim_widget_widgets_ViewStack = i(54);
n.__$$__meshim_widget_components_chatWindow_profileMenu_Login = i(261);
n.__$$__meshim_widget_components_chatWindow_profileMenu_Status = i(260);
n.__$$__meshim_widget_components_chatWindow_profileMenu_Edit = i(258);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Menu, "", "", [ [ n.__$$__meshim_widget_widgets_ViewStack, "vs", "", [ [ n.__$$__meshim_widget_components_chatWindow_profileMenu_Login, "", "", [], {
addClass: "login"
} ], [ n.__$$__meshim_widget_components_chatWindow_profileMenu_Status, "", "", [], {
addClass: "status"
} ], [ n.__$$__meshim_widget_components_chatWindow_profileMenu_Edit, "", "", [], {
addClass: "edit"
} ] ], {
id: "vs"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu",
"xmlns:profileMenu": "meshim.widget.components.chatWindow.profileMenu"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__vs");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t() {
h.setIndex(e ? 1 : n ? 0 : 2);
}
var e, n, o, r = i(6), a = r.root.$("livechat").$("ui").$("chat_window").$("profile_menu").$("index$int"), s = r.root.$("livechat").$("profile").$("logged_in$bool"), _ = r.root.$("livechat").$("settings").$("login").$("allowed_types");
!function() {
c.autobind(_, "value", function() {
var t = _.getValue();
n = 0;
for (var e in t) if (t.hasOwnProperty(e)) {
if ("email$bool" == e) continue;
t[e] && n++;
}
});
c.autobind(a, "value", function(e) {
o || h.setIndex(isNaN(e) ? t() : e);
});
h.on("indexChange", function(t) {
o = !0;
a.update(t);
o = !1;
});
c.autobind(s, "value", function(i) {
e = i;
t();
});
c.on("hide", t);
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Menu.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Menu, {
fqname: "meshim_widget_components_chatWindow_ProfileMenu"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__meshim_widget_widgets_Button = i(17);
n.__$$__jx_ui_Label = i(19);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(184), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "", "", [ u ], {
addClass: "end_chat wide short"
} ], [ n.__$$__jx_ui_Label, "", "", [ u ], {
addClass: "end_chat_mobile"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
var t = i(6), e = t.root.$("livechat"), n = e.$("settings").$("end_chat_menu").$("enabled$bool"), o = e.$("ui").$("chat_window").$("menu_stack_name$string"), r = t.root.$("connection").$("message$string");
!function() {
f.on("click", function() {
o.update("end_chat_menu");
});
f.autobind(n, "value", function(t) {
f.setDisplay(t ? "" : "none");
});
f.autobind(r, "value", function(t) {
var e = !!t;
f.setDisabled(e);
});
}();
}();
for (var p in g) f[p] = g[p];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
cursor: "default",
"&:hover": {
background: "transparent !important"
},
".end_chat": {
display: "block",
textAlign: "center",
cursor: "pointer",
"&.disabled": {
cursor: "default"
}
},
".end_chat_mobile": {
display: "none"
}
},
"&.mobile": {
".end_chat": {
display: "none"
},
".end_chat_mobile": {
display: "block"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_EndChat"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__meshim_widget_widgets_menu_ButtonLabel = i(75);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(185), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__meshim_widget_widgets_menu_ButtonLabel, "", "", [ u ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
var t = i(6), e = t.root.$("livechat").$("ui").$("chat_window").$("menu_stack_name$string");
!function() {
f.on("click", function() {
e.update("email_transcript_menu");
});
}();
}();
for (var p in g) f[p] = g[p];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
s.call(this, t, e, i, o, r);
this.setAttribute("method", "post");
this.setAttribute("enctype", "multipart/form-data");
}
var o = i(1), r = i(0), a = i(8), s = i(41);
n.prototype = r(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_FileUploader"
});
n.prototype.submit = function() {
if (this.path) {
this.setAttribute("action", this.path);
var t, e = "_widget_fileuploader_" + +new Date();
if (a.bugs.noBoxSizing) t = this.doc.createElement('<iframe name="' + e + '">'); else {
t = this.doc.createElement("iframe");
t.setAttribute("name", e);
}
t.setAttribute("id", e);
t.style.display = "none";
this.dom.target = e;
this.appendChild(t);
s.prototype.submit.call(this);
}
};
n.prototype.setPath = function(t) {
this.path = t;
return this;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__jx_ui_Label = i(19);
n.__$$__meshim_widget_widgets_SendFile = i(121);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(183), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__jx_ui_Label, "", "", [ u ], {} ], [ n.__$$__meshim_widget_widgets_SendFile, "send_file", "", [], {
id: "send_file",
addClass: "send_file"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__send_file");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function t() {
var t = a.getValue(), e = _.getValue("color_customization_enabled$int") || _.getValue("widget_customization_enabled$int"), i = s.getValue(), n = !0;
e ? !1 === t && (n = !1) : n = !1;
f.setDisplay(n && i ? "" : "none");
}
var e = i(6), n = e.root.$("livechat"), o = n.$("ui").$("chat_window").$("menu_stack_name$string"), r = n.$("settings").$("file_sending"), a = r.$("enabled$bool"), s = n.$("channel").$("chatting$bool"), _ = n.$("settings").$("package");
!function() {
g.on("before_submit", function() {
o.update("");
});
f.autobind(a, "value", t);
f.autobind(_, "value", t);
f.autobind(s, "value", t);
}();
}();
for (var m in p) f[m] = p[m];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".send_file": {
position: "absolute",
"bottom, right": 0
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_SendFile"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__meshim_widget_widgets_menu_ButtonLabel = i(75);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(181), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__meshim_widget_widgets_menu_ButtonLabel, "", "", [ u ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
var t = i(6), e = t.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
f.on("click", function() {
e.update("about_panel");
});
}();
}();
for (var p in g) f[p] = g[p];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_About"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__meshim_widget_widgets_menu_IconFont = i(123);
n.__$$__jx_ui_Label = i(19);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(182), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__meshim_widget_widgets_menu_IconFont, "icon", "", [], {
id: "icon"
} ], [ n.__$$__jx_ui_Label, "", "", [ u ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__icon");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function t() {
a.getValue() && r.getValue() ? f.setDisplay("") : f.setDisplay("none");
}
var e = i(6), n = e.root.$("livechat"), o = n.$("profile"), r = o.$("allow_cookies$bool"), a = n.$("settings").$("cookie_law").$("enabled$bool"), s = n.$("ui").$("chat_window").$("main_stack_name$string");
!function() {
f.on("click", function() {
r.getValue() && s.update("cookie_form");
});
f.autobind(r, "value", function(e) {
g.setIcon(e);
t();
});
f.autobind(a, "value", t);
}();
}();
for (var m in p) f[m] = p[m];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_Cookies"
});
return t;
}();
}, function(t, e, i) {
function n(t) {
if (o.isIE && !(o.isIE >= 9)) {
var e = document.createElement("bgsound");
document.body ? document.body.insertBefore(e, document.body.firstChild) : document.documentElement.appendChild(e);
this.dom = e;
this.loop = 0;
this.load(t);
}
}
var o = i(8);
n.prototype.load = function(t) {
this.src = t + ".wav";
};
n.prototype.play = function(t) {
this.dom.src = this.src;
this.dom.loop = t || this.loop;
};
n.prototype.stop = function() {
this.dom.src = "";
};
n.prototype.setVolume = function() {};
n.prototype.setLoop = function(t) {
this.loop = parseInt(t, 10);
};
t.exports = n;
}, function(t, e, i) {
function n(t) {
var e, i = +new Date() + Math.round(1e4 * Math.random()), n = t.substring(0, t.lastIndexOf("/") + 1) + "JSMP3.swf";
if (o.isIE) {
try {
new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
} catch (t) {
return;
}
e = document.createElement("div");
document.body.insertBefore(e, document.body.firstChild);
var a = '<object id="__zopimSoundPlayer' + i + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1"><param name="movie" value="' + n + '" /><param name="allowScriptAccess" value="always" /></object>';
e.innerHTML = a;
e = e.firstChild;
var s = document.title.split("#")[0];
r(function() {
document.title !== s && (document.title = s);
});
} else {
if (!navigator.mimeTypes || !navigator.mimeTypes["application/x-shockwave-flash"]) return;
e = document.createElement("embed");
e.id = "__zopimSoundPlayer" + i;
e.src = n;
e.setAttribute("allowScriptAccess", "always");
document.body.insertBefore(e, document.body.firstChild);
}
e.style.left = e.style.top = "-9999px";
e.style.position = "absolute";
this.dom = e;
this.loop = 1;
this.load(t);
}
var o = i(8), r = i(16);
n.prototype.load = function(t) {
if (this.dom.loadSound) {
this.dom.loadSound(t + ".mp3");
this.loaded = !0;
} else {
var e = this;
setTimeout(function() {
e.load(t);
}, 1e3);
}
};
n.prototype.play = function(t) {
if (this.loaded) try {
this.dom.playSound(t || this.loop);
} catch (t) {} else {
var e = this;
setTimeout(function() {
e.play(t);
}, 1e3);
}
};
n.prototype.stop = function() {
if (this.loaded) try {
this.dom.stopSound();
} catch (t) {}
};
n.prototype.setVolume = function(t) {
t = parseInt(t, 10);
if (!isNaN(t)) {
t > 10 && (t = 10);
t < 0 && (t = 0);
if (this.loaded) try {
this.dom.setVolume(t / 10);
} catch (t) {} else {
var e = this;
setTimeout(function() {
e.setVolume(t);
}, 500);
}
}
};
n.prototype.setLoop = function(t) {
this.loop = t;
if (this.loaded) try {
this.dom.setLoop(t);
} catch (t) {} else {
var e = this;
setTimeout(function() {
e.setLoop(t);
}, 500);
}
};
t.exports = n;
}, function(t, e, i) {
function n(t) {
var e = document.createElement("audio"), i = this, n = function() {
o.call(i);
};
if (e.canPlayType) {
var r = /^(probably|maybe)$/i;
try {
if (e.canPlayType("audio/mpeg").match(r)) this.type = "mp3"; else if (e.canPlayType('audio/ogg; codecs="vorbis"').match(r)) this.type = "ogg"; else {
if (!e.canPlayType("audio/wav").match(r)) return;
this.type = "wav";
}
} catch (t) {
return;
}
e.setAttribute("autobuffer", "true");
e.setAttribute("preload", "");
this.dom = e;
this.remainingLoop = 1;
this.loop = 1;
this.play_count = 0;
this.load(t);
this.dom.addEventListener("ended", n, !1);
}
}
function o() {
this.play_count++;
if (s.isSafari && this.play_count >= 50) {
this.play_count = 0;
this.dom.load();
}
if (this.remainingLoop > 0) {
this.remainingLoop--;
a.call(this);
var t = this.dom.play();
void 0 !== t && t.catch(r);
}
}
function r() {}
function a() {
this.dom && this.dom.currentTime && (this.dom.currentTime = 0);
}
var s = i(8), _ = i(28);
n.prototype.load = function(t) {
this.dom.setAttribute("src", t + "." + this.type);
this.remainingLoop = 0;
};
n.prototype.play = function(t) {
this.remainingLoop += t || this.loop;
o.call(this);
};
n.prototype.stop = function() {
this.dom.pause();
a.call(this);
};
n.prototype.setVolume = function(t) {
t = parseInt(t, 10);
if (!isNaN(t)) {
t > 10 && (t = 10);
t < 0 && (t = 0);
this.dom.volume = t / 10;
}
};
n.prototype.setLoop = function(t) {
t = parseInt(t, 10);
this.loop = _(t) ? t : 1;
};
t.exports = n;
}, function(t, e, i) {
function n(t) {
var e;
this.url = t;
e = new a(t);
if (e.dom) return e;
e = new s(t);
if (e.dom) return e;
e = new _(t);
return e.dom ? e : void 0;
}
function o() {
return this;
}
function r(t) {
/\/$/.test(t) || (t += "/");
this.repo_url = t || l;
this.repo = {};
}
var a = i(271), s = i(270), _ = i(269);
n.prototype.load = n.prototype.play = n.prototype.stop = n.prototype.setVolume = n.prototype.setLoop = o;
var l = "dashboard/sounds/";
r.prototype.create = function(t, e, i, o) {
var r = new n(this.repo_url + e);
i && r.setVolume(i);
o && r.setLoop(o);
r.title = e;
this.repo[t] = r;
return this;
};
r.prototype.getSound = function(t) {
var e = this.repo[t];
if (e) return e;
throw new window.Error("you have not created " + t + " sound yet");
};
r.prototype.hasSound = function(t) {
try {
this.getSound(t);
return !0;
} catch (t) {
return !1;
}
};
r.prototype.setSrc = function(t, e) {
this.getSound(t).load(this.repo_url + e);
return this;
};
r.prototype.getTitle = function(t) {
this.getSound(t).title;
};
r.prototype.play = function(t, e) {
this.getSound(t).play(parseInt(e, 10) || 0);
return this;
};
r.prototype.stop = function(t) {
this.getSound(t).stop();
return this;
};
r.prototype.setVolume = function(t, e) {
this.getSound(t).setVolume(e);
return this;
};
r.prototype.setLoop = function(t, e) {
this.getSound(t).setLoop(e);
return this;
};
r.prototype.getLoop = function(t) {
this.getSound(t).loop;
};
t.exports = r;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__meshim_widget_widgets_menu_IconFont = i(123);
n.__$$__meshim_widget_widgets_menu_ButtonLabel = i(75);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(177), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__meshim_widget_widgets_menu_IconFont, "icon_sound", "", [], {
id: "icon_sound"
} ], [ n.__$$__meshim_widget_widgets_menu_ButtonLabel, "", "", [ u ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__icon_sound");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
var t = i(6), e = i(122), n = t.root.$("livechat").$("profile"), o = n.$("notification").$("sound$bool");
!function() {
f.on("click", function() {
o.update(!e.isSoundEnabled());
});
f.autobind(o, "value", function() {
g.setIcon(e.isSoundEnabled() ? "sound_on" : "sound_off", !0);
});
}();
}();
for (var m in p) f[m] = p[m];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {},
"&.mobile": {
display: "none"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_Sound"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_menu_Item = i(37);
n.__$$__meshim_widget_widgets_menu_ButtonLabel = i(75);
n.__$$__jx_ui_Label = i(19);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(178), c = [ n.__$$__meshim_widget_widgets_menu_Item, "", "", [ [ n.__$$__meshim_widget_widgets_menu_ButtonLabel, "logged_out", "", [ u ], {
id: "logged_out"
} ], [ n.__$$__jx_ui_Label, "name", "", [], {
id: "name",
addClass: "logged_in_name"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__logged_out"), p = _.get(o + "__name");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function t() {
if (e) {
n && !_.isDefaultName(n) ? p.setText(r.replace("<name>", n)) : p.setText(a);
g.setDisplay("none");
p.setDisplay("");
} else {
g.setDisplay("");
p.setDisplay("none");
}
}
var e, n, o = i(2), r = o(179), a = o(180), s = i(6), _ = i(11), l = s.root.$("livechat"), d = l.$("profile"), u = d.$("logged_in$bool"), c = d.$("display_name$string"), h = l.$("ui").$("chat_window").$("menu_stack_name$string"), m = l.$("settings").$("login").$("restrict_profile$bool");
!function() {
f.on("click", function(t) {
t.stopPropagation();
h.update("profile_menu");
});
f.autobind(u, "value", function(i) {
e = i;
t();
});
f.autobind(c, "value", function(e) {
n = e || "";
t();
});
f.autobind(m, "value", function(t) {
f.setDisplay(t ? "none" : "");
});
o && o.onLanguage && o.onLanguage(t);
}();
}();
for (var $ in m) f[$] = m[$];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__meshim_widget_widgets_menu_Item.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
display: "none"
},
"&.mobile": {
display: "block"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_menu_Item, {
fqname: "meshim_widget_components_chatWindow_settingsMenu_Profile"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_Menu = i(66);
n.__$$__meshim_widget_widgets_menu_Section = i(47);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile = i(274);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound = i(273);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies = i(268);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_About = i(267);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile = i(266);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript = i(264);
n.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat = i(263);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_Menu, "", "", [ [ n.__$$__meshim_widget_widgets_menu_Section, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies, "", "", [], {} ], [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_About, "", "", [], {} ] ], {} ], [ n.__$$__meshim_widget_widgets_menu_Section, "chat_actions", "", [ [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile, "send_file", "", [], {
id: "send_file",
useDisplay: "true"
} ], [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript, "email_transcript", "", [], {
id: "email_transcript",
useDisplay: "true"
} ], [ n.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat, "end_chat", "", [], {
id: "end_chat",
useDisplay: "true"
} ] ], {
id: "chat_actions",
useDisplay: "true"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:menu": "meshim.widget.widgets.menu",
"xmlns:settingsMenu": "meshim.widget.components.chatWindow.settingsMenu"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__chat_actions"), f = (s.get(o + "__send_file"), s.get(o + "__email_transcript")), g = s.get(o + "__end_chat");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function t() {
var t = e();
g.setVisible(t.end_chat);
f.setVisible(t.email_transcript);
h.setVisible(t.chat_actions);
}
function e() {
var t = +new Date(), e = _.getValue() || !1, i = d.getValue() || !1, o = n && t - n >= r, a = e || i || u && !o;
return {
end_chat: i,
email_transcript: a,
chat_actions: i || a
};
}
var n, o = i(6), r = 6e5, a = o.root.$("livechat"), s = a.$("ui"), _ = s.$("visitor").$("authenticated$bool"), l = s.$("chat_window").$("menu_stack_name$string"), d = a.$("channel").$("chatting$bool"), u = !1;
!function() {
c.autobind(d, "value", function(t) {
t && (u = !0);
u && !t && (n = +new Date());
});
c.autobind(l, "value", function(e) {
"settings_menu" === e && t();
});
}();
}();
for (var m in p) c[m] = p[m];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_Menu.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_Menu, {
fqname: "meshim_widget_components_chatWindow_SettingsMenu"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_AgentProfileCard = i(138);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__meshim_widget_widgets_AgentProfileCard, "", "", [], {
xmlns: "meshim.widget.widgets",
addClass: "profile_card"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__meshim_widget_widgets_AgentProfileCard.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
marginBottom: "10px",
".avatar_cell": {
verticalAlign: "top",
width: "32px",
".profile_avatar": {
"width, height": "32px",
bottom: "auto"
}
},
".profile_table .content_cell": {
padding: "0 10px",
verticalAlign: "middle"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_AgentProfileCard, {
fqname: "meshim_widget_components_chatWindow_agentList_AgentProfileCard"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__meshim_widget_widgets_Header = i(61);
n.__$$__meshim_widget_widgets_Body = i(38);
n.__$$__jx_ui_Localizer = i(87);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Bottom = i(32);
n.__$$__jx_ui_Form = i(41);
n.__$$__meshim_widget_widgets_Controls = i(48);
n.__$$__meshim_widget_widgets_Submit = i(68);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(157), c = s(158), h = s(159), f = s(160), g = s(161), p = [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [ g ], {} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [ [ n.__$$__jx_ui_Localizer, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [], {
tagName: "a",
href: "https://www.zopim.com/privacy#cookie",
target: "_blank"
} ] ], {
content: u
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ c ], {
addClass: "note"
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__jx_ui_Form, "form", "", [ [ n.__$$__meshim_widget_widgets_Controls, "", "", [ [ n.__$$__meshim_widget_widgets_Submit, "", "", [], {
placement: "primary",
addClass: "wide",
value: h
} ], [ n.__$$__meshim_widget_widgets_Button, "cancel", "", [ f ], {
placement: "secondary",
id: "cancel",
addClass: "wide secondary"
} ] ], {} ] ], {
id: "form"
} ] ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
absPaddingBottom: "bottomHeight"
} ], m = p[0].call(this, e, o, null, _.mangleIDs(o, p[3]), p[4]), $ = m || this;
_.set(o, $);
var b = _.get(o + "__form"), w = _.get(o + "__cancel");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var x = function() {
var t = i(6), e = i(40), n = t.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
b.on("submit", function(t) {
t.preventDefault();
e.setUserChoice(!1);
});
w.on("click", function() {
n.update("chat_panel");
});
}();
}();
for (var v in x) $[v] = x[v];
$.fire && $.fire("init");
$.setStyle && $.setStyle(r);
$.setAttributes && $.setAttributes(d);
"function" == typeof $.addChildren ? $.addChildren(l) : _.addChildren($, l);
if ($ !== this) {
$.__jx__constructor = this.__jx__constructor;
$.__jx__native = this.__jx__native;
}
return $;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowContent.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowContent, {
fqname: "meshim_widget_components_chatWindow_cookieForm_Decline"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__meshim_widget_widgets_Header = i(61);
n.__$$__meshim_widget_widgets_Body = i(38);
n.__$$__jx_ui_Localizer = i(87);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_Bottom = i(32);
n.__$$__jx_ui_Form = i(41);
n.__$$__meshim_widget_widgets_Submit = i(68);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(153), c = s(154), h = s(155), f = s(156), g = [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "", "", [ f ], {} ], [ n.__$$__meshim_widget_widgets_Body, "", "", [ [ n.__$$__jx_ui_Localizer, "", "", [ [ n.__$$__jx_ui_Widget, "", "", [], {
tagName: "a",
href: "https://www.zopim.com/privacy#cookie",
target: "_blank"
} ] ], {
content: u
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ c ], {
addClass: "note"
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__jx_ui_Form, "form", "", [ [ n.__$$__meshim_widget_widgets_Submit, "", "", [], {
addClass: "wide",
value: h
} ] ], {
id: "form"
} ] ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
absPaddingBottom: "bottomHeight"
} ], p = g[0].call(this, e, o, null, _.mangleIDs(o, g[3]), g[4]), m = p || this;
_.set(o, m);
var $ = _.get(o + "__form");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
var t = i(6), e = i(40), n = t.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string");
!function() {
$.on("submit", function(t) {
t.preventDefault();
n.update("chat_panel");
e.setUserChoice(!0);
});
}();
}();
for (var w in b) m[w] = b[w];
m.fire && m.fire("init");
m.setStyle && m.setStyle(r);
m.setAttributes && m.setAttributes(d);
"function" == typeof m.addChildren ? m.addChildren(l) : _.addChildren(m, l);
if (m !== this) {
m.__jx__constructor = this.__jx__constructor;
m.__jx__native = this.__jx__native;
}
return m;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowContent.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowContent, {
fqname: "meshim_widget_components_chatWindow_cookieForm_Accept"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__jx_ui_Form = i(41);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__meshim_widget_widgets_Body = i(38);
n.__$$__jx_ui_TextArea = i(154);
n.__$$__meshim_widget_widgets_Bottom = i(32);
n.__$$__meshim_widget_widgets_Submit = i(68);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(143), c = s(144), h = [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__jx_ui_Form, "form", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__meshim_widget_widgets_Body, "message", "", [], {
id: "message"
} ], [ n.__$$__jx_ui_TextArea, "comments", "", [], {
id: "comments",
addClass: "comments"
} ] ], {} ], [ n.__$$__meshim_widget_widgets_Bottom, "", "", [ [ n.__$$__meshim_widget_widgets_Submit, "", "", [], {
value: u
} ], [ n.__$$__meshim_widget_widgets_Button, "skip", "", [ c ], {
id: "skip",
addClass: "secondary"
} ] ], {
addClass: "padding_bottom"
} ] ], {
id: "form"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:components": "meshim.widget.components",
"xmlns:widgets": "meshim.widget.widgets",
absPaddingBottom: "bottomHeight"
} ], f = h[0].call(this, e, o, null, _.mangleIDs(o, h[3]), h[4]), g = f || this;
_.set(o, g);
var p = _.get(o + "__form"), m = _.get(o + "__message"), $ = _.get(o + "__comments"), b = _.get(o + "__skip");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var w = function() {
function t() {
m.setText(o.get(l.$$(e + ".message$string")));
$.setPlaceholder(o.get(l.$$(e + ".placeholder$string")));
}
var e, n = i(6), o = i(10), r = n.root.$("livechat"), a = r.$("settings").$("forms").$("post_chat_form"), s = r.$("channel").$("rating$string"), _ = n.root.$("livechat").$("ui").$("chat_window").$("main_stack_name$string"), l = a.$("comments_messages");
!function() {
$.setLabelElement(m);
g.autobind(l, "value", function() {
t();
});
g.autobind(s, "value", function(i) {
e = i;
t();
});
p.on("submit", function(t) {
t.preventDefault();
if (g.validate()) {
a.write({
comments_user$string: $.getValue().trim()
});
_.update("chat_panel");
}
});
b.on("click", function() {
_.update("chat_panel");
});
}();
}();
for (var x in w) g[x] = w[x];
g.fire && g.fire("init");
g.setStyle && g.setStyle(r);
g.setAttributes && g.setAttributes(d);
"function" == typeof g.addChildren ? g.addChildren(l) : _.addChildren(g, l);
if (g !== this) {
g.__jx__constructor = this.__jx__constructor;
g.__jx__native = this.__jx__native;
}
return g;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowContent.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".comments": {
width: "100%",
height: "25%"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowContent, {
fqname: "meshim_widget_components_chatWindow_postChatForm_CommentsForm"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
var t = i(7);
c.setItems = function(e) {
e = e.split(",");
for (var i = 0, n = e.length; i < n; i++) new t(c, null, null, null, {
className: e[i]
});
};
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_Motif"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__meshim_widget_widgets_Header = i(61);
n.__$$__meshim_widget_widgets_Body = i(38);
n.__$$__meshim_widget_widgets_RatingBar = i(102);
n.__$$__meshim_widget_widgets_motif_Chat = i(130);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ChatWindowContent, "", "", [ [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__meshim_widget_widgets_Header, "header", "", [], {
id: "header"
} ], [ n.__$$__meshim_widget_widgets_Body, "message", "", [], {
id: "message"
} ], [ n.__$$__meshim_widget_widgets_RatingBar, "rating_bar", "", [], {
id: "rating_bar",
addClass: "rating_bar",
description: "true"
} ], [ n.__$$__meshim_widget_widgets_motif_Chat, "", "", [], {
addClass: "chat_motif"
} ] ], {
addClass: "scrollable_frame"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:components": "meshim.widget.components",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__header"), f = s.get(o + "__message"), g = s.get(o + "__rating_bar");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
var t = i(6), e = i(10), n = i(9), o = t.root.$("livechat").$("settings").$("forms").$("post_chat_form"), r = o.$("header$string"), a = o.$("message$string"), s = t.root.$("livechat").$("channel"), _ = s.$("rating$string");
!function() {
n.mobile(c);
g.setDataNode(_);
c.autobind(r, "value", function() {
h.setText(e.get(r));
});
c.autobind(a, "value", function() {
f.setText(e.get(a));
});
}();
}();
for (var m in p) c[m] = p[m];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowContent.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
textAlign: "center"
},
".rating_bar": {
display: "inline-block",
width: "150px"
},
".chat_motif": {
position: "absolute",
"bottom, left": 0
},
".scrollable_frame": {
paddingBottom: "0 !important"
},
"&.mobile": {
".chat_motif": {
position: "relative"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowContent, {
fqname: "meshim_widget_components_chatWindow_postChatForm_RatingForm"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
r || (r = {});
this.iframe_quirks = t.ownerDocument != document;
this.container = new s(t, null, null, null, {});
this.container.addClass("container");
var a = this;
this.container.destroy = function() {
a.destroy();
};
this.container.empty = function() {
a.empty();
};
this.container_middle = new s(this.container, null, null, null, {});
this.container_middle.addClass("container_middle");
s.call(this, this.container_middle, e, i, o, r);
this.useDisplay = !0;
if (l) {
this.container.setStyle("position", "relative");
this.container_middle.setStyle("position", "absolute");
this.setStyle("position", "relative");
(_ || this.iframe_quirks) && this.container_middle.setStyle("width", "100%").setStyle("left", 0);
} else {
r.visible || this.container.setStyle("display", "table");
this.container_middle.setStyle("display", "table-cell").setStyle("width", "100%");
this.setStyle("display", "table");
}
this.container.setStyle("overflow", "hidden").setStyle("width", "100%").setStyle("height", "100%");
r.hAlign || this.setHAlign();
r.vAlign || this.setVAlign();
}
var o = i(1), r = i(8), a = i(0), s = i(7), _ = r.isQuirks, l = r.bugs.noBoxSizing, d = l ? "block" : "table";
n.prototype = a(s.prototype);
o(n, s, {
fqname: "jx_ui_Frame"
});
n.prototype.show = function() {
if (this.container && this.container.dom.style.display != d) {
this.container.setVisible(d);
this.fire("show");
}
return this;
};
n.prototype.hide = function() {
if (this.container && "none" != this.container.dom.style.display) {
this.container.setVisible("none");
this.fire("hide");
}
return this;
};
n.prototype.isVisible = function() {
return this.container && this.container.dom.style.display == d;
};
n.prototype.setZIndex = function(t) {
this.container && this.container.setZIndex(t);
return this;
};
n.prototype.destroy = function() {
s.prototype.destroy.call(this);
if (this.container) {
s.prototype.empty.call(this.container);
this.container.empty = null;
s.prototype.destroy.call(this.container);
this.container = this.container_middle = null;
}
};
n.prototype.getHAlign = function() {
return this.hAlign;
};
n.prototype.setHAlign = function(t) {
switch (t) {
case "left":
_ || this.iframe_quirks ? this.container_middle.setStyle("text-align", "left") : l ? this.setStyle("margin-left", "0").setStyle("margin-right", "auto") : this.container_middle.setStyle("left", "0%").setStyle("right", "");
this.hAlign = t;
break;

case "right":
_ || this.iframe_quirks ? this.container_middle.setStyle("text-align", "right") : l ? this.setStyle("margin-left", "auto").setStyle("margin-right", "0") : this.container_middle.setStyle("left", "").setStyle("right", "0%");
this.hAlign = t;
break;

default:
_ || this.iframe_quirks ? this.container_middle.setStyle("text-align", "center") : l && this.container_middle.setStyle("left", "").setStyle("right", "");
this.setStyle("margin-left", "auto").setStyle("margin-right", "auto");
this.hAlign = "center";
}
};
n.prototype.getVAlign = function() {
return this.vAlign;
};
n.prototype.setVAlign = function(t) {
switch (t) {
case "top":
if (l) {
this.container_middle.setStyle("top", "0%").setStyle("bottom", "");
this.setStyle("top", "");
} else this.container_middle.setStyle("vertical-align", "top");
this.vAlign = t;
break;

case "bottom":
if (l) {
this.container_middle.setStyle("top", "").setStyle("bottom", "0%");
this.setStyle("top", "");
} else this.container_middle.setStyle("vertical-align", "bottom");
this.vAlign = t;
break;

default:
if (l) {
this.container_middle.setStyle("top", "50%").setStyle("bottom", "");
this.setStyle("top", "-50%");
} else {
this.container_middle.setStyle("height", "100%");
this.container_middle.setStyle("vertical-align", "middle");
}
this.vAlign = "middle";
}
return this;
};
n.prototype.getAlign = function() {
return this.hAlign + " " + this.vAlign;
};
n.prototype.setAlign = function(t) {
if ("string" == typeof t) {
t = t.replace(/^\s*|\s*$/, "").replace(/\s+/g, " ").split(" ");
this.setHAlign(t[0]);
this.setVAlign(t[1]);
}
};
t.exports = n;
}, function(t, e, i) {
function n(t, e, i, o, a) {
if (!(this instanceof n)) return new n(t, e, i, o, a);
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
s.call(this, t, e, i, o, a);
this.on("focus", function() {
this.addClass("focus");
});
this.on("blur", function() {
this.removeClass("focus");
});
}
var o = i(1), r = i(3), a = i(0), s = i(7);
n.__jx__jcss = {
"**self": {
"&:focus": {
outline: "none"
}
}
};
n.prototype = a(s.prototype);
o(n, s, {
fqname: "meshim_widget_widgets_Emoticon"
});
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:components": "meshim.widget.components"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
c.setDisplay(t ? "" : "none");
}
var e, n, o = i(283), r = i(7), a = {
ambivalent: ":|",
angry: ":(",
blush: ":?",
confused: ":?",
crazy: ":?",
crying: ":?",
frown: ":?",
gasp: ":?"
}, s = 6, _ = [];
c.setDataNode = function(i, o) {
e && c.autounbind(e, "value", t);
e = i;
n = o;
e && c.autobind(e, "value", t);
};
!function() {
var t, i = 0;
for (var l in a) if (a.hasOwnProperty(l)) {
t = new o(c, null, null, null, {
addClass: l,
title: l,
value: a[l],
tabIndex: 0
});
t.setAttribute("data-index", i);
_.push(t);
++i % s == 0 && new r(c, null, null, null, {
tagName: "br"
});
}
c.on("click", function(t) {
var i = t.target.jx_wrapper;
if (i != c) {
for (;i.parentNode !== c; ) i = i.parentNode;
if (i.getValue()) {
n && n.update(i.getValue());
e && e.update(!1);
}
}
});
c.on("keydown", function(t) {
var i;
t.target.jx_wrapper;
switch (t.keyCode) {
case 13:
i = t.target.jx_wrapper.getValue();
if (i) {
n && n.update(t.target.jx_wrapper.getValue());
e && e.update(!1);
}
break;

case 27:
e && e.update(!1);
break;

case 9:
return;

case 38:
i = _[parseInt(t.target.jx_wrapper.getAttribute("data-index"), 10) - s];
i && i.focus();
break;

case 40:
i = _[parseInt(t.target.jx_wrapper.getAttribute("data-index"), 10) + s];
i && i.focus();
break;

case 37:
i = _[parseInt(t.target.jx_wrapper.getAttribute("data-index"), 10) - 1];
i && i.focus();
break;

case 39:
i = _[parseInt(t.target.jx_wrapper.getAttribute("data-index"), 10) + 1];
i && i.focus();
break;

default:
return;
}
t.preventDefault();
});
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_EmoticonPicker"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, _) {
if (!(this instanceof n)) return new n(t, e, i, o, _);
this.$node;
if (!n.__jx__jcss_generated) {
r.generate(this, n.prototype.__jx__fqname, n.__jx__jcss, null, n);
n.__jx__jcss_generated = !0;
}
this.minHeight = 0;
this.maxHeight = window.Infinity;
this.vBoxOffset = 0;
this.hBoxOffset = 0;
_ || (_ = {});
_.overflow || (_.overflow = "hidden");
_.overflowY || (_.overflowY = "hidden");
l.call(this, t, e, i, o, _);
this.style.wordWrap = "break-word";
this.style.resize = "none";
this.compatMode = a.bugs.noBoxSizing && "CSS1Compat" != this.doc.compatMode && this.doc != document;
if (!this.compatMode) {
this.fakeTextArea = new l(this.doc.body, null, null, null, {
className: this.getClassName(),
tabIndex: "-1"
});
try {
this.fakeTextArea.setStyle("position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; word-wrap:break-word; height:0 !important; overflow:hidden; min-height:0 !important; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box;");
} catch (t) {}
this.onDestruction(function() {
this.fakeTextArea.destroy();
});
}
var d = this;
s(function() {
d.dom && d.updateStyles();
});
this._updateValueNode = function() {
this.updateValueNode();
};
this._readValueNode = function(t) {
d.readValueNode(t);
};
this.on("input", this._updateValueNode);
this.on("change", this._updateValueNode);
this.on("keyup", this._updateValueNode);
this._updateHeight = function() {
this.updateHeight();
};
if ("onpropertychange" in this.dom) if ("oninput" in this.dom) {
this.on("input", this._updateHeight);
this.on("keyup", this._updateHeight);
} else this.on("propertychange", this._updateHeight); else this.on("input", this._updateHeight);
}
var o = i(1), r = i(3), a = i(8), s = i(16), _ = i(0), l = i(78);
n.__jx__jcss = {
"**self": {}
};
n.prototype = _(l.prototype);
o(n, l, {
fqname: "meshim_widget_widgets_AutoResizeTextArea"
});
n.prototype.__jx__super = l;
n.prototype.updateValueNode = function() {
if (this.$node) {
this._updatingValueNode = !0;
this.$node.$("value$string").update(this.getValue());
this._updatingValueNode = !1;
}
};
n.prototype.readValueNode = function(t) {
this.$node && (this._updatingValueNode || null != t && this.setValue(t));
};
n.prototype.updateHeight = function() {
if ((this.compatMode || this.fakeTextArea) && !this.active) {
var t, e;
this.active = !0;
if (this.compatMode) {
this.style.height = 0;
t = this.dom.offsetHeight - this.vBoxOffset;
} else {
this.fakeTextArea.setValue(this.getValue());
this.fakeTextArea.style.overflowY = this.style.overflowY;
this.fakeTextArea.style.width = Math.max(Math.max(this.dom.offsetWidth, 0) - this.hBoxOffset, 0) + "px";
this.fakeTextArea.dom.scrollTop = 0;
this.fakeTextArea.dom.scrollTop = 9e4;
t = this.fakeTextArea.dom.scrollTop;
}
var i = this.maxHeight - this.vBoxOffset, n = this.minHeight - this.vBoxOffset;
if (t > i) {
t = i;
e = "scroll";
} else t < n && (t = n);
t += this.vBoxOffset;
t = Math.max(t, 0);
this.style.overflowY = e || "hidden";
this.style.height = t + "px";
this.$node && this.$node.update({
height$int: t,
overflow$bool: !!e
});
var o = this;
s(function() {
o.active = !1;
});
}
};
var d = [ "Top", "Bottom" ], u = [ "Left", "Right" ];
n.prototype.updateBoxOffset = function() {
var t = this.getComputedStyle();
if (t) {
this.vBoxOffset = 0;
this.hBoxOffset = 0;
var e;
if ("border-box" === t.boxSizing || "border-box" === t.MozBoxSizing || "border-box" === t.webkitBoxSizing || a.isIE <= 7 && "CSS1Compat" != this.doc.compatMode) {
for (e = 0; e < 2; e++) this.vBoxOffset += (parseInt(t["padding" + d[e]], 10) || 0) + (parseInt(t["border" + d[e] + "Width"], 10) || 0);
for (e = 0; e < 2; e++) this.hBoxOffset += (parseInt(t["padding" + u[e]], 10) || 0) + (parseInt(t["border" + u[e] + "Width"], 10) || 0);
}
return this;
}
};
n.prototype.setDataNode = function(t) {
this.$node && this.autounbind(this.$node.$("value$string"), "value", this._readValueNode);
this.$node = t;
if (this.$node) {
this.autobind(this.$node.$("value$string"), "value", this._readValueNode);
this.updateValueNode();
this.updateHeight();
}
return this;
};
n.prototype.setValue = function(t) {
l.prototype.setValue.call(this, t);
this.updateValueNode();
this.updateHeight();
return this;
};
n.prototype.updateMinMaxHeight = function() {
var t = this.getComputedStyle();
if (t) {
this.minHeight = parseInt(t.minHeight, 10);
this.maxHeight = parseInt(t.maxHeight, 10);
if (!this.minHeight && isNaN(this.maxHeight)) {
this.style.height = "";
this.minHeight = this.maxHeight = this.dom.offsetHeight;
}
isNaN(this.maxHeight) && (this.maxHeight = this.minHeight);
this.$node && this.$node.update({
min_height$string: this.minHeight,
max_height$string: this.maxHeight
});
return this;
}
};
n.prototype.updateClonedStyles = function() {
if (this.fakeTextArea) {
var t = [ "fontFamily", "fontSize", "fontWeight", "letterSpacing", "textTransform", "wordSpacing", "textIndent" ];
this.fakeTextArea.style.lineHeight = "99px";
"99px" === this.fakeTextArea.style.lineHeight && t.push("lineHeight");
this.fakeTextArea.style.lineHeight = "";
var e = this.getComputedStyle();
if (e) for (var i = 0, n = t.length; i < n; i++) this.fakeTextArea.style[t[i]] = e[t[i]];
}
};
n.prototype.updateStyles = function() {
a.isIE8 && (this.style.minHeight = "");
this.updateMinMaxHeight();
this.updateClonedStyles();
this.updateBoxOffset();
a.isIE8 && (this.style.minHeight = this.minHeight - this.vBoxOffset + "px");
this.updateHeight();
var t = this;
a.isIE8 && s(function() {
t.updateHeight();
});
return this;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_FakeInput = i(162);
n.__$$__meshim_widget_widgets_Button = i(17);
n.__$$__meshim_widget_widgets_AutoResizeTextArea = i(285);
n.__$$__meshim_widget_widgets_IconFont = i(15);
n.__$$__meshim_widget_widgets_EmoticonPicker = i(284);
n.__$$__jx_ui_Label = i(19);
n.__$$__jx_ui_Frame = i(282);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(142), c = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_FakeInput, "fake_input", "", [ [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_Button, "send", "", [], {
id: "send",
addClass: "send primary fit"
} ], [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__meshim_widget_widgets_AutoResizeTextArea, "textarea", "", [], {
id: "textarea",
addClass: "textarea unstyled"
} ] ], {
addClass: "textarea_wrapper"
} ] ], {
addClass: "float_wrapper"
} ], [ n.__$$__meshim_widget_widgets_IconFont, "toggle_picker", "", [], {
id: "toggle_picker",
addClass: "toggle_picker",
icon: "smiley",
tabIndex: "0",
tagName: "button"
} ], [ n.__$$__meshim_widget_widgets_EmoticonPicker, "picker", "", [], {
id: "picker",
addClass: "picker"
} ], [ n.__$$__jx_ui_Label, "", "", [ [ n.__$$__jx_ui_Frame, "", "", [ u ], {} ] ], {
addClass: "drop_label",
tabIndex: "0"
} ] ], {
id: "fake_input",
addClass: "fake_input"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__fake_input"), p = _.get(o + "__send"), m = _.get(o + "__textarea"), $ = _.get(o + "__toggle_picker"), b = _.get(o + "__picker");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var w = function() {
function t(t) {
function e() {
f.dom && (j || f.removeClass("dragover"));
}
t.stopPropagation();
t.preventDefault();
if (n()) if (k.isWebKit) if ("dragover" == t.type) {
j = !0;
C && window.clearTimeout(C);
f.addClass("dragover");
} else {
j = !1;
C = window.setTimeout(e, 200);
} else "dragover" == t.type ? f.addClass("dragover") : f.removeClass("dragover");
}
function e(e, i) {
if (n()) {
t(e);
var r;
if (i) {
r = e && e.dataTransfer && e.dataTransfer.files;
if (!r || !r.length) return;
O.reconnectIfServerRetired(function() {
o(r);
});
}
}
}
function n() {
return y && !f.getDisabled();
}
function o(t) {
if (y && window.FormData) {
var e = new window.FormData(), i = [], n = [], o = 0, r = O.getHost();
if (r) {
for (var a = 0, s = t.length; a < s; a++) {
if (!B.isValidType(t[a].name, v)) {
it.update("type");
return;
}
i.push(t[a].name);
n.push(t[a].type);
o += t[a].size || 0;
e.append("file_" + t[a].name, t[a]);
}
if (o > T.FILE_UPLOAD_MAX) it.update("size"); else {
i = i.join(", ");
n = n.join(", ");
var _ = L.livechat.sendFile({
file_name: i,
file_type: n,
file_size: o
}), l = new window.XMLHttpRequest(), d = {
ts: _
};
S = "https://" + r + T.FILE_UPLOAD_PATH + "?" + D.buildQuery(d);
if (l.upload) {
l.open("POST", S, !0);
l.setRequestHeader("X-Zopim-MID", tt.getValue());
l.setRequestHeader("X-Zopim-UID", et.getValue());
l.send(e);
P.increment("file_upload");
}
}
}
}
}
function r() {
A = !0;
X.write({
typing$bool: A
});
W.setUserChoice(!0);
}
function a() {
A = !1;
X.write({
typing$bool: A
});
}
function s() {
var t = ot.getValue(), e = at.getValue("color_customization_enabled$int") || at.getValue("widget_customization_enabled$int");
y = !!e && !1 !== t;
}
function _() {
var t = rt.getValue() || "";
v = t.trim().replace(/\s*,\s*/g, ",").split(",");
}
function l() {
var t = m.getValue().trim();
if (t) {
L.livechat.sendChatMsg({
msg: t
});
m.setValue("");
H.update({
scroll_to_bottom$bool: !0
});
c();
}
}
function d(t) {
for (var e = t.target.jx_wrapper; e && e.parentNode && e.parentNode != f; ) {
if (e == b) return;
e = e.parentNode;
}
z.update(!1);
}
function u() {
L.root.$("livechat").$("ui").$("chat_window").update({
menu_stack_name$string: ""
});
}
function c() {
E.resetUnreadCount();
}
var h, w, x, v, y, j, C, S, A, k = i(8), I = i(16), N = i(14), T = i(18), B = i(63), D = i(36), E = i(33), O = i(72), L = i(6), W = i(40), P = i(76), R = i(9), F = i(10), M = L.root, V = M.$("livechat"), H = V.$("ui").$("chat_window"), q = H.$("chat_panel"), z = q.$("emoticon_picker").$("display$bool"), U = q.$("emoticon_picker").$("value$string"), G = V.$("settings").$("emoticons").$("enabled$bool"), Y = q.$("textarea"), X = V.$("channel").$("typing"), Z = V.$("ui").$("theme_loaded$bool"), K = V.$("ui").$("hide_branding$bool"), Q = V.$("ui").$("popout$bool"), J = V.$("ui").$("mockup$bool"), tt = V.$("profile").$("mid$string"), et = V.$("profile").$("uid$string"), it = V.$("ui").$("chat_window").$("chat_panel").$("file_toast").$("error$string"), nt = V.$("settings").$("file_sending"), ot = nt.$("enabled$bool"), rt = nt.$("allowed_extensions$string"), at = V.$("settings").$("package"), st = M.$("connection").$("status$string");
f.focus = function() {
if (!x) {
m.updateHeight();
m.focus();
}
};
f.blur = function() {
m.updateHeight();
m.blur();
};
f.updateStyles = function() {
m.updateStyles();
};
!function() {
p.setText(F.chat_panel.sendbutton_text);
m.setPlaceholder(F.chat_panel.chattextarea_placeholder);
w = Q.getValue();
x = J.getValue();
R.mobile(f);
R.rtl(f);
m.setDataNode(Y);
b.setDataNode(z, U);
m.on("focus", function() {
u();
g.addClass("focus");
K.update(!0);
});
m.on("keydown", function() {
H.update({
mark_read_if_bottom$bool: !0
});
});
m.on("blur", function() {
g.removeClass("focus");
K.update(!1);
});
f.autobind(Z, "value", function() {
I(function() {
f.dom && m.updateStyles();
});
});
f.autobind(Y, "value", function(t) {
t && "overflow$bool" in t && (t.overflow$bool ? f.addClass("overflow") : f.removeClass("overflow"));
});
var i = 0;
f.autobind(Y.$("value$string"), "value", function(t) {
if (t) {
A || r();
window.clearTimeout(i);
i = window.setTimeout(a, 12e4);
} else if (A) {
window.clearTimeout(i);
a();
}
});
f.autobind(z, "value", function(t) {
t ? $.addClass("active") : $.removeClass("active");
h = t;
});
f.autobind(G, "value", function(t) {
$.setDisplay(t ? "" : "none");
t ? f.addClass("emoticons_enabled") : f.removeClass("emoticons_enabled");
});
f.autobind(U, "value", function(t) {
t && m.insertAtCaret(t);
});
b.on("click", function() {
f.focus();
});
$.on("click", function(t) {
t.stopPropagation();
z.update(!h);
f.focus();
});
for (var n = f; n && n.parentNode && "body" != n.parentNode.tagName.toLowerCase(); ) n = n.parentNode;
n && n.on("click", d);
w && N.window.on("click", d);
f.onDestruction(function() {
n && n.un("click", d);
w && N.window.un("click", d);
});
f.autobind(ot, "value", s);
f.autobind(at, "value", s);
f.autobind(rt, "value", _);
if (window.File && window.FileList && window.FileReader) {
f.on("dragover", t);
f.on("dragleave", t);
f.on("drop", function(t) {
e(t, !0);
});
}
m.on("keydown", function(t) {
if (13 == t.keyCode && !t.shiftKey && !t.ctrlKey && !t.altKey) {
t.preventDefault();
l();
}
});
p.on("click", function() {
u();
l();
});
f.autobind(st, "value", function(t) {
f.setDisabled("idle_disconnect" === t);
});
}();
}();
for (var x in w) f[x] = w[x];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
width: "100%",
padding: "10px",
height: "auto",
"*zoom": 1,
padding: "$$chatTextAreaPadding",
borderWidth: "$$chatTextAreaBorderWidth",
borderStyle: "$$chatTextAreaBorderStyle",
borderColor: "$$chatTextAreaBorderColor",
"&.emoticons_enabled.overflow": {
".toggle_picker": {}
},
"&.emoticons_enabled": {
".textarea": {}
},
"&.dragover": {
".fake_input": {
boxShadow: "none",
border: "none"
},
".drop_label": {
display: "block"
}
},
"&.disabled": {
opacity: "0.5"
}
},
".fake_input": {
position: "relative",
overflow: "visible",
"*zoom": 1,
padding: 0,
color: "$$chatTextAreaInputColor",
background: "$$chatTextAreaInputBg",
borderWidth: "$$chatTextAreaInputBorderWidth",
borderStyle: "$$chatTextAreaInputBorderStyle",
borderColor: "$$chatTextAreaInputBorderColor",
borderRadius: "$$chatTextAreaInputRadius",
boxShadow: "$$chatTextAreaInputShadow"
},
".fake_input.focus": {
color: "$$chatTextAreaInputFocusColor",
background: "$$chatTextAreaInputFocusBg",
borderColor: "$$chatTextAreaInputFocusBorderColor",
boxShadow: "$$chatTextAreaInputFocusShadow"
},
".drop_label, .file_input": {
display: "none",
position: "absolute",
"top, left": 0,
"width, height": "100%"
},
".drop_label": {
textAlign: "center",
color: "$$chatTextAreaDropColor",
background: "$$chatTextAreaDropBg",
borderWidth: "$$chatTextAreaDropBorderWidth",
borderStyle: "$$chatTextAreaDropBorderStyle",
borderColor: "$$chatTextAreaDropBorderColor",
".container": {
border: "none",
background: "transparent"
}
},
".file_input": {
opacity: 0
},
".toggle_picker": {
position: "absolute",
"top, right": 0,
cursor: "pointer",
fontSize: "18px",
lineHeight: "24px",
"&:hover": {},
"&:focus": {
outline: "none"
}
},
".picker": {
position: "absolute",
bottom: "100%"
},
".textarea": {
display: "block",
"width, height": "100%",
resize: "none",
transition: "height 0.1s ease-in-out",
fontSize: "$$chatTextAreaInputFontSize",
minHeight: "$$chatTextAreaInputMinHeight",
maxHeight: "$$chatTextAreaInputMaxHeight",
padding: "$$chatTextAreaInputPadding",
lineHeight: "$$chatTextAreaInputLineHeight"
},
".send": {
display: "none"
},
".float_wrapper": {
overflow: "hidden"
},
".textarea_wrapper": {
display: "block",
overflow: "hidden"
},
"&.mobile": {
position: "fixed",
zIndex: "1000",
padding: 0,
".fake_input": {},
".textarea": {
padding: "10px"
},
".send": {
display: "block",
float: "right",
margin: "$$chatTextAreaSubmitMargin",
padding: "$$chatTextAreaSubmitPadding"
},
".toggle_picker": {
display: "none"
}
},
"&.rtl.mobile": {
".send": {
float: "left"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_components_chatWindow_chatPanel_ChatTextArea"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer = i(142);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer, "", "", [], {
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
var t = a.$("num_typing_agents$int").getValue();
if (t >= 1) {
c.setText((1 == t ? o.chat_panel.name_is_typing : o.chat_panel.agents_are_typing).replace("<name>", a.$("agent_names$string").getValue()));
c.setDisplay("");
} else c.setDisplay("none");
}
var e = i(2), n = i(6), o = i(10), r = n.root.$("livechat"), a = r.$("ui").$("chat_window").$("typing_info");
!function() {
c.autobind(a.$("num_typing_agents$int"), "value", t);
if (e && e.onLanguage) {
e.onLanguage(t);
c.onDestruction(function() {
e.unLanguage(t);
});
}
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "100%"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer, {
fqname: "meshim_widget_widgets_chatLogRenderer_TypingRenderer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ScrollableFrame = i(29);
n.__$$__meshim_widget_components_chatWindow_chatPanel_Spinner = i(105);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_components_chatWindow_chatPanel_HistoryLog = i(104);
n.__$$__meshim_widget_components_chatWindow_chatPanel_FastInitChatLog = i(133);
n.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer = i(287);
n.__$$__meshim_widget_components_chatWindow_chatPanel_QueueMessage = i(132);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ScrollableFrame, "", "", [ [ n.__$$__meshim_widget_components_chatWindow_chatPanel_Spinner, "large_spinner", "", [], {
id: "large_spinner",
addClass: "large_spinner",
size: "big",
visible: "false"
} ], [ n.__$$__jx_ui_Widget, "chat_log_wrapper", "", [ [ n.__$$__meshim_widget_components_chatWindow_chatPanel_Spinner, "small_spinner", "", [], {
id: "small_spinner",
visible: "false"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_HistoryLog, "history_log", "", [], {
id: "history_log"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_FastInitChatLog, "", "", [], {} ], [ n.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer, "", "", [], {
addClass: "group_head"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_QueueMessage, "", "", [], {
addClass: "queue_message"
} ] ], {
id: "chat_log_wrapper",
class: "chat_log_wrapper"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:jx": "jx.controls",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatPanel": "meshim.widget.components.chatWindow.chatPanel"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__large_spinner"), f = s.get(o + "__chat_log_wrapper"), g = s.get(o + "__small_spinner");
s.get(o + "__history_log");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var p = function() {
function t(t) {
f.setStyle("marginTop", t);
}
var e = (i(6), i(67));
!function() {
c.setChatLogMarginTop = t;
c.getElement("inner").on("scroll", function(t) {
c.fire("scroll", t);
});
e.bindSpinnerUI(c, g, h);
}();
}();
for (var m in p) c[m] = p[m];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ScrollableFrame.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".group_head": {
marginTop: "$$margin"
},
".chat_log_wrapper": {
margin: "$$chatLogMargin"
},
".queue_message": {
marginTop: "10px"
},
".large_spinner": {
position: "fixed",
margin: "auto",
"top, bottom, left, right": "0"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ScrollableFrame, {
fqname: "meshim_widget_components_chatWindow_chatPanel_ChatLogContainer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_span = i(30);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_span, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "thumbs", "", [], {
id: "thumbs",
addClass: "rating_icon"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__thumbs");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
var t = i(11), e = i(6);
c.setType = function(t) {
switch (t) {
case "thumbs_up":
h.setIcon("thumbsup");
break;

case "thumbs_down":
h.setIcon("thumbsdown");
break;

default:
h.setDisplay("none");
}
};
t.hoverFix(c);
!function() {
var t = e.root.$("livechat").$("ui").$("mobile$bool");
c.autobind(t, "value", function(t) {
t || c.addClass("desktop");
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_span.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "50%",
display: "inline-block",
border: "1px solid transparent",
".default_value": {
display: "inline"
},
"&.desktop.hover, &.desktop:hover": {
color: "$$chatRatingsThumbDark"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_span, {
fqname: "meshim_widget_widgets_ratingBar_thumb_Button"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ButtonBar = i(135);
n.__$$__meshim_widget_widgets_ratingBar_thumb_Button = i(289);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ButtonBar, "", "", [ [ n.__$$__meshim_widget_widgets_ratingBar_thumb_Button, "good_option", "", [], {
id: "good_option",
type: "thumbs_up",
addClass: "rating_button"
} ], [ n.__$$__meshim_widget_widgets_ratingBar_thumb_Button, "bad_option", "", [], {
id: "bad_option",
type: "thumbs_down",
addClass: "rating_button"
} ] ], {
noMangle: "true",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__good_option"), f = s.get(o + "__bad_option");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t(t) {
if (t === r.GOOD) {
h.setTitle(a.REMOVE);
f.setTitle(a.BAD);
} else if (t === r.BAD) {
f.setTitle(a.REMOVE);
h.setTitle(a.GOOD);
} else e();
}
function e() {
h.setTitle(a.GOOD);
f.setTitle(a.BAD);
}
var n = i(2), o = i(9), r = {
GOOD: "good",
BAD: "bad"
}, a = {
GOOD: n(212),
BAD: n(213),
REMOVE: n(214)
};
!function() {
c.updateTitle = t;
h.setValue(r.GOOD);
f.setValue(r.BAD);
e();
o.mobile(c);
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ButtonBar.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".rating_button": {
".rating_icon": {
display: "inline-block",
verticalAlign: "middle"
},
color: "$$chatRatingsThumbLight",
"&.active": {
backgroundColor: "$$chatRatingsThumbActive",
border: "1px solid $$chatRatingsThumbBGHover",
borderRadius: "5px",
color: "$$chatRatingsThumbDark",
cursor: "pointer"
}
},
"&.small": {
".rating_button": {
"width, height": "24px",
fontSize: "18px",
".rating_icon": {
lineHeight: "22px",
paddingLeft: "1px"
},
"&:first-child": {
marginRight: "3px"
}
}
},
"&.big": {
".rating_button": {
"width, height": "50px",
fontSize: "40px",
".rating_icon": {
lineHeight: "48px"
},
"&:first-child": {
marginRight: "10px"
}
}
},
"&.desktop": {
".rating_button.active:hover": {
color: "$$chatRatingsThumbLight"
}
},
"&.mobile": {
"&.small .rating_button": {
"width, height": "40px",
fontSize: "25px",
padding: "6px 3px 3px",
"&:first-child": {
marginRight: "5px"
}
},
"&.big": {
".rating_button": {
"width, height": "62px",
fontSize: "40px",
paddingTop: "12px"
}
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ButtonBar, {
fqname: "meshim_widget_widgets_ratingBar_thumb_Thumb"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button = i(134);
n.__$$__jx_ui_html_span = i(30);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button, "", "", [ [ n.__$$__jx_ui_html_span, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "sad",
addClass: "rating_icon"
} ] ], {
placement: "default_value",
discardPlacement: "true"
} ], [ n.__$$__jx_ui_html_span, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "sadder",
addClass: "rating_icon"
} ] ], {
placement: "selected_value",
discardPlacement: "true"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:widgets": "meshim.widget.widgets"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button, {
fqname: "meshim_widget_widgets_ratingBar_emoticon_Bad"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button = i(134);
n.__$$__jx_ui_html_span = i(30);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, i, o, r, _) {
if (!(this instanceof t)) return new t(e, i, o, r, _);
i = i || s.generateID();
var l = [ n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button, "", "", [ [ n.__$$__jx_ui_html_span, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "happy",
addClass: "rating_icon"
} ] ], {
placement: "default_value",
discardPlacement: "true"
} ], [ n.__$$__jx_ui_html_span, "", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
icon: "happier",
addClass: "rating_icon"
} ] ], {
placement: "selected_value",
discardPlacement: "true"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:widgets": "meshim.widget.widgets"
} ], d = l[0].call(this, e, i, null, s.mangleIDs(i, l[3]), l[4]), u = d || this;
s.set(i, u);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
for (var c in void 0) u[c] = (void 0)[c];
u.fire && u.fire("init");
u.setStyle && u.setStyle(o);
u.setAttributes && u.setAttributes(_);
"function" == typeof u.addChildren ? u.addChildren(r) : s.addChildren(u, r);
if (u !== this) {
u.__jx__constructor = this.__jx__constructor;
u.__jx__native = this.__jx__native;
}
return u;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ratingBar_emoticon_Button, {
fqname: "meshim_widget_widgets_ratingBar_emoticon_Good"
});
return t;
}();
}, function(t, e, i) {
function n(t, e, i, o, r) {
if (!(this instanceof n)) return new n(t, e, i, o, r);
this.navStack = null;
d.call(this, t, e, i, o, r);
this.addClass("button_bar");
r.initialValue && this.setValue(r.initialValue);
this.on("click", function(t) {
var e = t && t.target && t.target.jx_wrapper;
if (e && e !== this) {
for (;e.parentNode && e.parentNode != this; ) e = e.parentNode;
if (!this.getDisabled() && !e.getDisabled()) {
var i = e.getValue();
if ("" !== i && null != i) {
this.setValue(i);
this.fire("change");
}
}
}
});
this.onDestruction(function() {
this.navStack = null;
});
}
var o = i(1), r = i(0), a = i(21), s = i(12), _ = i(28), l = i(69), d = i(7), u = i(23);
n.prototype = r(d.prototype);
o(n, d, {
fqname: "jx_ui_ButtonBar"
});
n.prototype.appendChild = function(t) {
var e = this.children.length;
a(t) && this.attributes && !s(this.attributes.noMangle) && (t[0] = l);
u.prototype.appendChild.call(this, t);
if (a(t)) {
this.children[e].addClass("option");
_(this.tabIndex) && this.children[e].setTabIndex(this.tabIndex);
}
};
n.prototype.setNoMangle = function(t) {
this.attributes.noMangle = s(t);
};
n.prototype.setValue = function(t) {
for (var e = 0, i = this.children.length; e < i; e++) if (this.children[e].getValue() == t) {
this.dom.value = this.children[e].getValue();
this.children[e].addClass("active");
} else this.children[e].removeClass("active");
};
n.prototype.getInitialValue = function() {
return this._initialValue;
};
n.prototype.setInitialValue = function(t) {
this._initialValue = t;
};
n.prototype.reset = function() {
this.setValue(this.getInitialValue());
};
n.prototype.setLabel = function(t, e) {
for (var i = 0, n = this.children.length; i < n; i++) this.children[i].getValue() == t && this.children[i].setText(e);
};
n.prototype.getTabIndex = function() {
return this.tabIndex;
};
n.prototype.setTabIndex = function(t) {
this.tabIndex = parseInt(t, 10) || 0;
for (var e = 0, i = this.children.length; e < i; e++) this.children[e].setTabIndex(this.tabIndex);
return this;
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ButtonBar = i(135);
n.__$$__meshim_widget_widgets_ratingBar_emoticon_Good = i(292);
n.__$$__meshim_widget_widgets_ratingBar_emoticon_Bad = i(291);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ButtonBar, "", "", [ [ n.__$$__meshim_widget_widgets_ratingBar_emoticon_Good, "good_option", "", [], {
id: "good_option",
addClass: "rating_button"
} ], [ n.__$$__meshim_widget_widgets_ratingBar_emoticon_Bad, "bad_option", "", [], {
id: "bad_option",
addClass: "rating_button"
} ] ], {
noMangle: "true",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__good_option"), f = s.get(o + "__bad_option");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t(t) {
if (t === r.GOOD) {
h.setTitle(a.REMOVE);
f.setTitle(a.BAD);
} else if (t === r.BAD) {
f.setTitle(a.REMOVE);
h.setTitle(a.GOOD);
} else e();
}
function e() {
h.setTitle(a.GOOD);
f.setTitle(a.BAD);
}
var n = i(2), o = i(9), r = {
GOOD: "good",
BAD: "bad"
}, a = {
GOOD: n(215),
BAD: n(216),
REMOVE: n(217)
};
!function() {
c.updateTitle = t;
h.setValue(r.GOOD);
f.setValue(r.BAD);
e();
o.mobile(c);
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ButtonBar.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".rating_button": {
borderRadius: "50%",
".rating_icon": {
display: "inline"
},
"&.active": {
backgroundColor: "$$chatRatingsEmoticonActive",
cursor: "pointer"
}
},
"&.small": {
".rating_button": {
"width, height": "24px",
border: "1px solid $$chatRatingsEmoticonColor",
padding: "6px 3px 3px",
".rating_icon": {
lineHeight: 1.1
},
"&:first-child": {
marginRight: "3px"
}
}
},
"&.big": {
".rating_button": {
"width, height": "50px",
border: "2px solid $$chatRatingsEmoticonColor",
fontSize: "25px",
paddingTop: "14px",
"&:first-child": {
marginRight: "10px"
}
}
},
"&.desktop": {
".rating_button.active:hover": {
backgroundColor: "$$chatRatingsEmoticonHover"
}
},
"&.mobile": {
"&.small .rating_button": {
"width, height": "40px",
fontSize: "18px",
padding: "12px 3px 3px",
"&:first-child": {
marginRight: "5px"
}
},
"&.big": {
".rating_button": {
"width, height": "62px",
fontSize: "26px",
paddingTop: "20px"
}
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ButtonBar, {
fqname: "meshim_widget_widgets_ratingBar_emoticon_Emoticon"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
n.__$$__jx_ui_html_table = i(53);
n.__$$__jx_ui_html_tbody = i(52);
n.__$$__jx_ui_html_tr = i(51);
n.__$$__jx_ui_html_td = i(50);
n.__$$__meshim_widget_widgets_Gravatar = i(83);
n.__$$__meshim_widget_widgets_profileCard_MemberName = i(136);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__jx_ui_html_table, "", "", [ [ n.__$$__jx_ui_html_tbody, "", "", [ [ n.__$$__jx_ui_html_tr, "", "", [ [ n.__$$__jx_ui_html_td, "", "", [ [ n.__$$__meshim_widget_widgets_Gravatar, "gravatar", "", [], {
id: "gravatar",
pseudo: "profile_avatar"
} ] ], {
pseudo: "avatar_cell"
} ], [ n.__$$__jx_ui_html_td, "content_cell", "", [ [ n.__$$__meshim_widget_widgets_profileCard_MemberName, "agent0", "", [], {
id: "agent0",
addClass: "profile_name"
} ], [ n.__$$__meshim_widget_widgets_profileCard_MemberName, "agent1", "", [], {
id: "agent1",
addClass: "profile_name"
} ] ], {
pseudo: "content_cell",
id: "content_cell"
} ] ], {} ] ], {} ] ], {
class: "profile_table"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__gravatar"), f = s.get(o + "__content_cell"), g = s.get(o + "__agent0"), p = s.get(o + "__agent1");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function t(t) {
if (n) {
if (n === t) return;
c.autounbind(n, "keys", e);
}
n = t;
if (n) {
h.setGroupNode(t);
c.autobind(n, "keys", e);
}
}
function e() {
var t = n.getKeys();
g.setDataNode(t.length <= 0 ? null : n.$(t[0]).$("display_name$string"));
p.setDataNode(t.length <= 1 ? null : n.$(t[1]).$("display_name$string"));
}
var n, o = i(6), r = o.root.$("livechat"), a = r.$("settings").$("theme").$("chat_window").$("profile_card").$("display_avatar$bool"), s = r.$("settings").$("theme").$("chat_window").$("profile_card").$("display_title_name$bool"), _ = r.$("ui").$("mobile$bool");
!function() {
c.setDataNode = t;
h.on("click", function() {
c.onGravatarClick && c.onGravatarClick();
});
f.on("click", function() {
c.onContentClick && c.onContentClick();
});
_.getValue() && c.addClass("mobile");
c.autobind(a, "value", function(t) {
c[t ? "removeClass" : "addClass"]("no_avatar");
});
c.autobind(s, "value", function(t) {
c[t ? "removeClass" : "addClass"]("no_title_name");
});
}();
}();
for (var $ in m) c[$] = m[$];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
width: "100%",
position: "relative",
".profile_table": {
width: "100%",
tableLayout: "fixed",
fontSize: "100%",
borderSpacing: "0px",
borderCollapse: "collapse",
td: {
padding: "0px"
}
},
".profile_avatar": {
width: "32px",
height: "32px",
"&": "$$profileCardAvatar"
}
},
"**self.mobile": {
".profile_table": {
height: "100%"
}
},
"**self.no_avatar .profile_table": {
".avatar_cell": {
display: "none"
},
".content_cell": {
paddingLeft: "0px"
}
},
"**self.no_title_name .profile_table": {
".content_cell": {
visibility: "hidden"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_MultiProfilesCard"
});
return t;
}();
}, function(t, e, i) {
function n() {
var t = [].slice.call(arguments);
if (t.length < 1) throw "Invalid chain: <empty>";
var e = null;
"string" == typeof t[t.length - 1] && (e = t.pop());
a.call(this, "chained$value");
this._chain = t;
this._default_primitive = e;
this._leafNodeValueCheck = o(this._leafNodeValueCheck, this);
}
function o(t, e) {
return function() {
t.apply(e, arguments);
};
}
var r = i(0), a = i(95), s = n.prototype = r(a.prototype);
s.bindValue = function() {
if (0 === this.listeners_value.length) for (var t = this._chain.length; t--; ) this._chain[t].bindValue(this._leafNodeValueCheck);
a.prototype.bindValue.apply(this, arguments);
};
s.unbindValue = function() {
a.prototype.unbindValue.apply(this, arguments);
if (0 === this.listeners_value.length) for (var t = this._chain.length; t--; ) this._chain[t].unbindValue(this._leafNodeValueCheck);
};
s.getChainedValue = function() {
for (var t = 0, e = this._chain.length; t < e; t++) {
var i = this._chain[t].getValue();
if (i) return i;
}
return this._default_primitive;
};
s._leafNodeValueCheck = function() {
this.update(this.getChainedValue());
};
t.exports = n;
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:widget": "meshim.widget",
"xmlns:mui": "meshim.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
c.setText(o.get(n));
}
function e(e) {
if (n !== e) {
n && c.autounbind(n, "value", t);
n = e;
n && c.autobind(n, "value", t);
}
}
var n, o = i(10);
c.setDataNode = e;
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
whiteSpace: "inherit",
overflow: "hidden",
textOverflow: "ellipsis",
paddingBottom: "2px"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_profileCard_TitleHolder"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_html_span = i(30);
n.__$$__jx_ui_html_div = i(13);
n.__$$__meshim_widget_widgets_IconFont = i(15);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_html_span, "message", "", [], {
class: "message",
id: "message"
} ], [ n.__$$__jx_ui_html_span, "", "", [], {
class: "spacer"
} ], [ n.__$$__jx_ui_html_div, "arrow", "", [ [ n.__$$__meshim_widget_widgets_IconFont, "", "", [], {
addClass: "arrow_icon",
icon: "arrow_down"
} ] ], {
id: "arrow",
addClass: "arrow_container"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
selectable: "false"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__message");
s.get(o + "__arrow");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
var t = i(6), e = i(9), n = i(10), o = t.root.$("livechat").$("ui").$("chat_button").$("unread_count$int");
!function() {
e.windowSize(c);
c.autobind(o, "value", function(t) {
if (t > 0) {
h.setText(n.chat_panel[1 == t ? "new_message_below" : "new_messages_below"].replace("<number>", t));
c.addClass("msgs");
} else c.removeClass("msgs");
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
textAlign: "center",
fontWeight: "bold",
display: "inline-flex",
alignItems: "center",
flexDirection: "row",
color: "$$toastColor",
background: "$$toastBg",
padding: "10px",
borderRadius: "16px",
boxShadow: "0px 2px 8px 2px rgba(0,0,0,0.1)",
cursor: "pointer",
"&.small": {
padding: "8px"
},
"&.msgs": {
".message, .spacer": {
display: "inline-block"
}
}
},
".message": {
display: "none"
},
".spacer": {
display: "none",
width: "4px"
},
".arrow_icon": {
marginTop: "3px"
},
".arrow_container": {
fontSize: "10px",
position: "relative",
display: "inline-block",
"width, height": "12px",
verticalAlign: "middle",
color: "$$colors.grey500"
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_toast_NewMessagesToast"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_ChatWindowPanel = i(39);
n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast = i(84);
n.__$$__jx_ui_Widget = i(7);
n.__$$__meshim_widget_widgets_toast_NewMessagesToast = i(298);
n.__$$__meshim_widget_components_chatWindow_chatPanel_File = i(140);
n.__$$__meshim_widget_widgets_ChatWindowContent = i(27);
n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader = i(139);
n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLogContainer = i(288);
n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea = i(286);
n.__$$__meshim_widget_widgets_Branding = i(89);
n.__$$__meshim_widget_widgets_Button = i(17);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_ChatWindowPanel, "", "", [ [ n.__$$__meshim_widget_widgets_ChatWindowDisconnectedToast, "", "", [], {
addClass: "disconnected_toast"
} ], [ n.__$$__jx_ui_Widget, "new_messages_toast_container", "", [ [ n.__$$__meshim_widget_widgets_toast_NewMessagesToast, "", "", [], {
addClass: "new_messages_toast"
} ] ], {
class: "new_messages_toast_container",
id: "new_messages_toast_container",
useDisplay: "true",
visible: "false"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_File, "", "", [], {} ], [ n.__$$__meshim_widget_widgets_ChatWindowContent, "chat_panel_container", "", [ [ n.__$$__jx_ui_Widget, "served_by_container", "", [ [ n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader, "", "", [], {} ] ], {
id: "served_by_container",
class: "served_by_container"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLogContainer, "chat_log", "", [], {
id: "chat_log",
addClass: "chat_log"
} ], [ n.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea, "chat_text_area", "", [], {
id: "chat_text_area",
addClass: "chat_text_area"
} ], [ n.__$$__meshim_widget_widgets_Branding, "", "", [], {
addClass: "chat_panel_branding",
hideOnDesktop: "true"
} ], [ n.__$$__meshim_widget_widgets_Button, "scroll_top_btn", "", [], {
id: "scroll_top_btn",
class: "scroll_top_btn"
} ] ], {
id: "chat_panel_container",
class: "chat_panel_container",
absPaddingTop: "chatPanelProfileCardContainerHeight"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:widgets": "meshim.widget.widgets",
"xmlns:chatPanel": "meshim.widget.components.chatWindow.chatPanel",
titleBar: "",
actionBar: "default",
hideBrandingMobile: "true"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__new_messages_toast_container"), f = s.get(o + "__chat_panel_container"), g = s.get(o + "__served_by_container"), p = s.get(o + "__chat_log"), m = s.get(o + "__chat_text_area"), $ = s.get(o + "__scroll_top_btn");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var b = function() {
function t() {
I(!0);
V(e, c, "once");
}
function e() {
if (c.dom) {
m.updateStyles();
A();
p.updateScrollStyles();
}
}
function n() {
N && T == c.getName() && t();
}
function o() {
yt || Z.testSafariFocusBug() || N && T == c.getName() && m.focus();
}
function r(t) {
t && N && T == c.getName() ? V(y) : D = !0;
}
function a() {
if (N && T == c.getName()) {
if (D) {
y(!0);
p.getScrollTop() && v(!0) ? D = !1 : J && !X.isIE || setTimeout(function() {
y(!0);
D = !1;
}, tt);
B = null;
} else if (B) {
p.setScrollTop(B);
p.getScrollTop() == B ? B = null : J && !X.isIE || setTimeout(function() {
p.setScrollTop(B);
B = null;
}, tt);
}
} else B = p.getScrollTop();
}
function s() {
V(y);
c.un("show", s);
A();
}
function _() {
window.setTimeout(y, 300);
X.unTransitionEnd(c, c, _);
A();
}
function l(t) {
g.setDisplay(t ? "block" : "none");
!t || yt ? f.setAbsPaddingTop() : f.setAbsPaddingTop("chatPanelProfileCardContainerHeight");
}
function d() {
m.setStyle("width:" + (c.getWidth() - 2) + "px");
}
function u() {
W && window.clearTimeout(W);
W = window.setTimeout(function() {
window.innerHeight >= 120 && window.scrollY > c.titleBar.getHeight() ? $.setDisplay("block") : $.setDisplay("none");
}, 100);
}
function b() {
var t, e, i;
p.setChatLogMarginTop("0px");
t = c.titleBar.getHeight() + g.getHeight() + m.getHeight();
e = p.getScrollHeight() - g.getHeight();
i = window.document.documentElement.clientHeight - t;
if (e < i) {
c.style.height = "100%";
e > 0 ? p.setChatLogMarginTop(i - 31 - e + "px") : p.setChatLogMarginTop(i - e + "px");
} else {
c.style.height = "auto";
p.setChatLogMarginTop("10px");
}
}
function w() {
O && window.clearTimeout(O);
O = window.setTimeout(function() {
v(!0) ? m.setStyle("position:absolute; left: 0px;") : m.setStyle("position:fixed; left:" + Math.round((window.innerWidth - c.getWidth()) / 2 + 1) + "px;");
}, 50);
}
function x() {
return yt ? c.getScrollHeight() - window.scrollY - window.innerHeight : p.getScrollHeight() - p.getScrollTop() - p.getHeight();
}
function v(t) {
return x() <= (t ? it : nt);
}
function y(t) {
if (c.dom) if (yt) {
t ? window.scrollTo(0, c.getScrollHeight()) : V(function() {
window.scrollTo(0, c.getScrollHeight());
});
window.setTimeout(function() {
w();
}, 100);
} else if (t) {
j(!1);
p.setScrollTop(p.getScrollHeight());
} else C();
}
function j(t) {
L = void 0 === t || t;
}
function C() {
if (P || v(!0)) j(!1); else {
R = +new Date();
F = p.getScrollTop();
if (p.getScrollHeight() - p.getHeight() - F <= Nt) {
p.setScrollTop(p.getScrollHeight());
j(!1);
} else P = window.setInterval(S, It);
}
}
function S() {
if (v(!0)) {
window.clearInterval(P);
P = null;
j(!1);
} else {
var t = +new Date();
if (t >= R + kt) {
p.setScrollTop(p.getScrollHeight());
window.clearInterval(P);
P = null;
} else p.setScrollTop(F + (t - R) / kt * (p.getScrollHeight() - F));
}
}
function A() {
var t = m.getComputedStyle();
if (t) {
ht = (parseInt(t.paddingTop, 10) || 0) + (parseInt(t.paddingBottom, 10) || 0) + ((parseInt(t.borderTopWidth, 10) || 0) + (yt ? 0 : 1)) + ((parseInt(t.borderBottomWidth, 10) || 0) + (yt ? 0 : 1));
k();
}
}
function k() {
E && window.clearTimeout(E);
I(E);
E = window.setTimeout(I, 500);
}
function I(t) {
E && window.clearTimeout(E);
E = null;
if (c.dom && ft) {
if (!t) {
jt = v();
Ct = v(!0);
}
f.setStyle("padding-bottom", ft + ht + "px");
h.setStyle("transform", "translateY(-" + (ft - 42) + "px)");
Ct && y(yt && "" === ct.$("value$string").getValue());
}
}
var N, T, B, D, E, O, L, W, P, R, F, M = i(14), V = i(16), H = i(141), q = i(34), z = i(33), U = i(6), G = i(67), Y = (i(44), 
i(35)), X = i(11), Z = i(101), K = i(9), Q = i(15), J = X.isStyleSupported("animation"), tt = 200, et = 100, it = 2, nt = 150, ot = U.root.$("livechat"), rt = ot.$("channel").$("log"), at = ot.$("ui").$("chat_window"), st = at.$("typing_info").$("agent_typing$bool"), _t = at.$("file_upload_scroll$bool"), lt = at.$("scroll_to_bottom$bool"), dt = at.$("mark_read_if_bottom$bool"), ut = at.$("chat_panel"), ct = ut.$("textarea"), ht = 0, ft = 0, gt = ot.$("ui").$("theme_loaded$bool"), pt = ot.$("settings").$("theme").$("chat_window").$("size$string"), mt = ot.$("ui").$("chat_window").$("display_profile_card$bool"), $t = at.$("display$bool"), bt = at.$("main_stack_name$string"), wt = ot.$("ui").$("popout$bool"), xt = wt.getValue(), vt = ot.$("ui").$("mobile$bool"), yt = vt.getValue(), jt = !0, Ct = !0, St = q.debounce(b, 200), At = q.debounce(y, 100), kt = 200, It = 16, Nt = 200;
!function() {
K.mobile(c);
K.rtl(c);
c.autobind(ct, "value", function(t) {
if (t && t.height$int) {
ft = t.height$int;
k();
}
});
X.onAnimationEnd(c, c, function() {
if (D) {
y(!0);
B = null;
p.getScrollTop() && v(!0) ? D = !1 : setTimeout(function() {
y(!0);
D = !1;
}, tt);
} else if (B) {
p.setScrollTop(B);
p.getScrollTop() == B ? B = null : setTimeout(function() {
p.setScrollTop(B);
B = null;
}, tt);
}
ht && ft || t();
});
X.onTransitionEnd(c, f, function(t) {
t.target.jx_wrapper == f && Ct && y(!0);
});
c.autobind(pt, "value", t);
c.autobind(gt, "value", t);
c.autobind($t, "value", function(t) {
N = t;
n();
a();
o();
});
c.autobind(bt, "value", function(t) {
T = t;
n();
a();
o();
});
xt && !yt && M.window.on("focus", o);
c.autobind(rt, "value", function() {
jt = v();
});
c.autobind(rt, "keys", function(t) {
if (t && t.length) if (N && T == c.getName()) {
if (jt) {
j();
At();
}
} else D = !0;
});
c.autobind(dt, "value", function() {
jt && z.resetUnreadCount();
});
c.autobind(lt, "value", function() {
h.hide();
j();
y();
});
c.autobind(_t, "value", r);
c.autobind(st, "value", function(t) {
t && jt && V(y);
});
c.on("show", s);
X.onTransitionEnd(c, c, _);
c.autobind(mt, "value", l);
if (yt) {
f.setAbsPaddingTop();
p.defaultPlacement.insertBefore(g, p.defaultPlacement.getFirstChild());
new Q($, null, null, null, {
className: "scroll_top_icon",
icon: "arrow_up"
});
$.on("click", function() {
$.setDisplay("none");
window.scrollTo(0, 0);
});
M.window.on("resize", function() {
d();
u();
});
M.window.on("orientationchange", function() {
d();
u();
});
M.window.on("scroll", function() {
d();
w();
u();
});
c.on("show", function() {
w();
});
M.window.on("resize", St);
M.window.on("orientationchange", St);
c.autobind(rt, "keys", St);
c.on("show", St);
m.on("click", function() {
window.setTimeout(function() {
y();
}, 200);
});
Y.isChromeIOSMobile && (c.style.paddingBottom = "42px");
} else {
h.on("click", function() {
at.update({
scroll_to_bottom$bool: !0
});
z.resetUnreadCount();
});
p.on("wheel", H.debounce(function() {
(jt || v(!0)) && z.resetUnreadCount();
}, et));
p.on("scroll", H.debounce(function() {
jt = v();
h[jt || L ? "hide" : "show"]();
}, et));
}
G.setupScrollListener(p);
}();
}();
for (var w in b) c[w] = b[w];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_ChatWindowPanel.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
".chat_panel_container": {
position: "relative",
"width, height": "100%",
zIndex: 20,
transition: "padding 0.1s ease-in-out",
"*overflow": "visible !important",
".served_by_container": {
position: "absolute",
"top, left": 0,
width: "100%",
padding: "$$paddingXL",
height: "$$chatPanelProfileCardContainerHeight",
background: "$$chatPanelProfileCardContainerBackground",
borderWidth: "$$chatPanelProfileCardContainerBorderWidth",
borderStyle: "$$chatPanelProfileCardContainerBorderStyle",
borderColor: "$$chatPanelProfileCardContainerBorderColor"
},
".chat_text_area": {
position: "absolute",
bottom: 0,
left: 0,
width: "100%"
},
".chat_log": {
".scrollable_inner": {
padding: 0
}
}
},
".disconnected_toast": {
top: "25%"
},
".new_messages_toast": {
transition: "transform 0.1s ease-in-out"
},
".new_messages_toast_container": {
textAlign: "center",
width: "100%",
height: 0,
position: "absolute",
zIndex: 99,
bottom: "101px"
},
".scroll_top_btn": {
position: "fixed",
top: "20px",
left: "50%",
width: "60px",
height: "40px",
marginLeft: "-30px",
padding: "0px",
zIndex: "1000",
display: "none",
".scroll_top_icon": {
lineHeight: "44px",
textAlign: "center",
fontSize: "16px"
}
},
"&.mobile": {
".served_by_container": {
position: "relative",
padding: "10px",
height: "auto"
},
".chat_panel_container": {
".chat_log": {
marginBottom: "30px"
}
},
".chat_panel_branding": {
display: "block",
position: "absolute",
padding: "5px",
bottom: "45px",
margin: "0",
zIndex: "30"
},
".disconnected_toast": {
top: "60px"
}
},
"&.mobile.ltr": {
".chat_panel_branding": {
left: "10px"
}
},
"&.mobile.rtl": {
".chat_panel_branding": {
right: "10px"
}
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_ChatWindowPanel, {
fqname: "meshim_widget_components_chatWindow_ChatPanel"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_Widget = i(7);
n.__$$__jx_ui_html_span = i(30);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_Widget, "", "", [ [ n.__$$__jx_ui_html_span, "text", "", [], {
id: "text",
addClass: "text"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"data-test-id": "dateSeparator"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__text");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t(t) {
a && c.autounbind(a, "value", e);
r = t;
a = r.$("timestamp$int");
c.autobind(a, "value", e);
}
function e(t) {
if (t) {
var e = new Date(t), i = e.toLocaleString([ _, "en" ], l);
h.setText(i);
}
}
function n(t) {
_ = t.replace(/_/g, "-");
e(a && a.getValue());
}
function o() {
s.unLanguage && s.unLanguage(n);
}
var r, a, s = i(2), _ = "en", l = {
hour12: !0,
month: "short",
day: "2-digit",
hour: "2-digit",
minute: "2-digit"
};
!function() {
c.setDataNode = t;
c.onDestruction(o);
s.onLanguage && s.onLanguage(n);
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_Widget.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontSize: "$$fontSizeS",
color: "$$chatLogDateDividerColor",
background: "$$chatLogSystemMsgBg",
borderWidth: "$$chatLogSystemMsgBorderWidth",
borderStyle: "$$chatLogSystemMsgBorderStyle",
borderColor: "$$chatLogSystemMsgBorderColor",
padding: "$$chatLogSystemMsgPadding",
marginTop: "20px",
marginBottom: "15px",
textAlign: "center",
lineHeight: "$$chatLogDateDividerLineHeight",
borderBottom: "$$chatLogDateDividerBorderBottom",
fontWeight: "$$chatLogDateDividerFontWeight",
".text": {
background: "#FFF",
padding: "0 10px"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_Widget, {
fqname: "meshim_widget_widgets_chatLogRenderer_DateDivider"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt = i(144);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:chatLogRenderer": "meshim.widget.widgets.chatLogRenderer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
var i = t.$("timestamp$int");
if (n !== i) {
n && c.autounbind(n, "value", e);
n = i;
n && c.autobind(n, "value", e);
}
}
function e() {
if (n) {
var t = a.getValue(), e = n.getValue(), i = l.getValue(), o = u.getValue(), r = _.getValue() && i && i <= e;
t && r && o === e && !d.getValue() ? c.setDisplay("") : c.setDisplay("none");
} else c.setDisplay("none");
}
var n, o = i(6), r = o.root.$("livechat"), a = r.$("settings").$("rating").$("enabled$bool"), s = r.$("channel"), _ = s.$("chatting$bool"), l = s.$("start$time"), d = s.$("rating$string"), u = s.$("last_agent_leave_ts$int");
!function() {
c.setDataNode = t;
c.autobind(a, "value", e);
c.autobind(d, "value", e);
c.autobind(_, "value", e);
c.autobind(l, "value", e);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt, {
fqname: "meshim_widget_widgets_chatLogRenderer_MemberLeaveRatingPrompt"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__div = i(146);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__div, "", "", [], {} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t() {
a.getValue() ? c.setDisplay("") : c.setDisplay("none");
}
var e = i(10), n = i(6), o = e.chat_log["chat.comment"], r = n.root.$("livechat"), a = r.$("settings").$("rating").$("enabled$bool");
c.setDataNode = function() {};
!function() {
c.setText(o);
c.autobind(a, "value", t);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__div, {
fqname: "meshim_widget_widgets_chatLogRenderer_Comment"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = i(2), _ = i(4);
n.__$$__jx_ui_html_div = i(13);
n.__$$__meshim_widget_widgets_chatLogRenderer_Button = i(143);
t.exports = function() {
function t(e, o, r, l, d) {
if (!(this instanceof t)) return new t(e, o, r, l, d);
o = o || _.generateID();
var u = s(218), c = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__jx_ui_html_div, "rating_msg", "", [], {
id: "rating_msg"
} ], [ n.__$$__meshim_widget_widgets_chatLogRenderer_Button, "leave_a_comment", "", [ u ], {
id: "leave_a_comment",
addClass: "leave_a_comment"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:widgets": "meshim.widget.widgets"
} ], h = c[0].call(this, e, o, null, _.mangleIDs(o, c[3]), c[4]), f = h || this;
_.set(o, f);
var g = _.get(o + "__rating_msg"), p = _.get(o + "__leave_a_comment");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var m = function() {
function e() {
x.update("rating_panel");
}
function n() {
var t = m.getValue();
f.setDisplay(t ? "" : "none");
}
function o() {
if (p && l) {
var t = $.getValue(), e = b.getValue(), i = l.getValue("timestamp$int"), n = e && i > t, o = w.getValue(), a = o && i <= o;
n && !a || r();
}
}
function r() {
if (p) {
f.autounbind(w, "value", o);
p.un("click", e);
p.destroy();
p = null;
}
}
function a(t) {
if (l !== t) {
l && f.autounbind(l, "value", s);
l = t;
t && f.autobind(l, "value", s);
}
}
function s() {
var t = l.getValue();
if (t) {
var e = t.new_rating$string;
g.setText(_(e));
o();
}
}
function _(t) {
return t ? c[t] : c.cancel;
}
var l, d = i(10), u = i(6), c = d.chat_log["chat.rating"], h = u.root.$("livechat"), m = h.$("settings").$("rating").$("enabled$bool"), $ = h.$("channel").$("start$time"), b = h.$("channel").$("chatting$bool"), w = h.$("channel").$("last_comment_ts$int"), x = h.$("ui").$("chat_window").$("main_stack_name$string");
!function() {
f.setDataNode = a;
f.disableLeaveComment = r;
f.autobind(m, "value", n);
f.autobind($, "value", o);
f.autobind(b, "value", o);
f.autobind(w, "value", o);
t.last_instance && t.last_instance.disableLeaveComment();
t.last_instance = f;
p.on("click", e);
}();
}();
for (var $ in m) f[$] = m[$];
f.fire && f.fire("init");
f.setStyle && f.setStyle(r);
f.setAttributes && f.setAttributes(d);
"function" == typeof f.addChildren ? f.addChildren(l) : _.addChildren(f, l);
if (f !== this) {
f.__jx__constructor = this.__jx__constructor;
f.__jx__native = this.__jx__native;
}
return f;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
padding: "0px 10px",
".leave_a_comment": {
margin: "5px 0px"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_chatLogRenderer_Rating"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
n && c.autounbind(n, "value", e);
n = t;
n && c.autobind(n, "value", e);
}
function e() {
var t = n.getValue();
if (t) {
var e = t.display_name$string, i = t.new_display_name$string, o = "";
e && i && (o = r.replace("<old_name>", e).replace("<new_name>", i));
c.parentNode.setDisplay(o ? "" : "none");
c.setText(o);
}
}
var n, o = i(10), r = o.chat_log["chat.changename"];
!function() {
c.setDataNode = t;
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_chatLogRenderer_NameChange"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_div = i(13);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_div, "", "", [ [ n.__$$__jx_ui_html_div, "log_message", "", [], {
id: "log_message"
} ] ], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__log_message");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var f = function() {
function t(t) {
n && c.autounbind(n, "value", e);
n = t.$("display_name$string");
c.autobind(n, "value", e);
}
function e(t) {
var e = n.parentNode.getValue("nick$string") || "";
e = e.split(":")[0];
var i = n.parentNode.getValue("type$string");
if (e && t || "chat.memberleave" === i && "visitor" === e) {
c.parentNode.setDisplay("");
var r = n.parentNode.getValue("timestamp$int"), d = l[i] || "";
d = d.replace("<name>", t);
if ("visitor" == e) if ("chat.memberleave" != i) {
d = a.chat_log["chat.visitorjoin"];
c.parentNode.addClass("visitor_join");
} else {
d = a.chat_log["chat.visitorleave"];
c.parentNode.addClass("visitor_leave");
}
if ("agent" == e && "chat.memberleave" == i) {
var u = n.parentNode.getValue("reason$string");
_.indexOf(u) > -1 && (d = l.agent_disconnected.replace("<agent_name>", t));
}
"agent" == e && "chat.memberjoin" == i && o && r > o && s.trackEvent("Served by Operator", t);
h.setText(d);
} else c.parentNode.setDisplay("none");
}
var n, o, r = i(6), a = i(10), s = i(49), _ = [ "user_no_ping", "disconnect_user", "kick_account", "unauthorized_user" ], l = a.chat_log, d = r.root.$$("connection.reattached_timestamp$int");
!function() {
c.setDataNode = t;
d.on("value", function(t) {
o = t;
});
}();
}();
for (var g in f) c[g] = f[g];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_div.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {};
"function" == typeof r && r(t, n.__$$__jx_ui_html_div, {
fqname: "meshim_widget_widgets_chatLogRenderer_MemberChange"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt = i(144);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt, "", "", [], {
xmlns: "jx.ui.html",
"xmlns:ui": "jx.ui",
"xmlns:chatLogRenderer": "meshim.widget.widgets.chatLogRenderer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var h = function() {
function t(t) {
var i = t.$("timestamp$int");
if (n !== i) {
n && c.autounbind(n, "value", e);
n = i;
n && c.autobind(n, "value", e);
}
}
function e() {
if (n) {
var t = a.getValue(), e = n.getValue(), i = _.getValue(), o = l.getValue();
t && i && o && o <= e ? c.setDisplay("") : c.setDisplay("none");
} else c.setDisplay("none");
}
var n, o = i(6), r = o.root.$("livechat"), a = r.$("settings").$("rating").$("enabled$bool"), s = r.$("channel"), _ = s.$("chatting$bool"), l = s.$("start$time");
!function() {
c.setDataNode = t;
c.autobind(a, "value", e);
c.autobind(_, "value", e);
c.autobind(l, "value", e);
}();
}();
for (var f in h) c[f] = h[f];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
fontSize: "$$fontSizeS",
color: "$$chatLogSystemMsgColor",
background: "$$chatLogSystemMsgBg",
borderWidth: "$$chatLogSystemMsgBorderWidth",
borderStyle: "$$chatLogSystemMsgBorderStyle",
borderColor: "$$chatLogSystemMsgBorderColor",
padding: "$$chatLogSystemMsgPadding",
textAlign: "center"
}
};
"function" == typeof r && r(t, n.__$$__meshim_widget_widgets_chatLogRenderer_RatingPrompt, {
fqname: "meshim_widget_widgets_chatLogRenderer_RequestRatingPrompt"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_table = i(53);
n.__$$__jx_ui_html_tbody = i(52);
n.__$$__jx_ui_html_tr = i(51);
n.__$$__jx_ui_html_td = i(50);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_table, "", "", [ [ n.__$$__jx_ui_html_tbody, "", "", [ [ n.__$$__jx_ui_html_tr, "", "", [ [ n.__$$__jx_ui_html_td, "left_cell", "", [], {
id: "left_cell"
} ], [ n.__$$__jx_ui_html_td, "right_cell", "", [], {
id: "right_cell"
} ] ], {} ] ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__left_cell"), f = s.get(o + "__right_cell");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t(t) {
n && c.autounbind(n, "value", e);
o = t;
n = t.$("nick$string");
c.autobind(n, "value", e);
}
function e(t) {
if (t) {
h.empty();
f.empty();
h.removeClass("avatar_cell");
f.removeClass("avatar_cell");
if (s.test(t)) {
new r(h).setHideAuthType(!0).setMemberId(t).addClass("log_avatar");
new a(f).setDataNode(o);
h.addClass("avatar_cell");
} else {
new r(f).setHideAuthType(!0).setMemberId(t).addClass("log_avatar");
new a(h).setDataNode(o);
f.addClass("avatar_cell");
}
}
}
var n, o, r = i(108), a = i(145), s = /^agent/;
!function() {
c.setDataNode = t;
}();
}();
for (var p in g) c[p] = g[p];
c.fire && c.fire("init");
c.setStyle && c.setStyle(r);
c.setAttributes && c.setAttributes(l);
"function" == typeof c.addChildren ? c.addChildren(_) : s.addChildren(c, _);
if (c !== this) {
c.__jx__constructor = this.__jx__constructor;
c.__jx__native = this.__jx__native;
}
return c;
}
t.prototype = o(n.__$$__jx_ui_html_table.prototype);
t.prototype.__jx__native = !1;
t.__jx__jcss = {
"**self": {
position: "relative",
width: "100%",
fontSize: "100%",
tableLayout: "fixed",
borderSpacing: "0px",
borderCollapse: "collapse",
td: {
verticalAlign: "bottom",
padding: "0px"
},
".chat_bubble": {
display: "inline",
margin: "0 8px"
},
".log_avatar": {
width: "32px",
height: "32px"
},
".avatar_cell": {
width: "32px"
}
},
"**self.group_children": {
".chat_name": {
display: "none"
}
}
};
"function" == typeof r && r(t, n.__$$__jx_ui_html_table, {
fqname: "meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"
});
return t;
}();
}, function(t, e, i) {
var n = i(5), o = i(0), r = i(1), a = i(3), s = (i(2), i(4));
n.__$$__jx_ui_html_table = i(53);
n.__$$__jx_ui_html_tbody = i(52);
n.__$$__jx_ui_html_tr = i(51);
n.__$$__jx_ui_html_td = i(50);
n.__$$__meshim_widget_widgets_Avatar = i(108);
n.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer = i(103);
t.exports = function() {
function t(e, o, r, _, l) {
if (!(this instanceof t)) return new t(e, o, r, _, l);
o = o || s.generateID();
var d = [ n.__$$__jx_ui_html_table, "", "", [ [ n.__$$__jx_ui_html_tbody, "", "", [ [ n.__$$__jx_ui_html_tr, "", "", [ [ n.__$$__jx_ui_html_td, "", "", [ [ n.__$$__meshim_widget_widgets_Avatar, "avatar", "", [], {
id: "avatar",
addClass: "log_avatar",
hideAuthType: "true"
} ] ], {
class: "avatar_cell"
} ], [ n.__$$__jx_ui_html_td, "", "", [ [ n.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer, "content", "", [], {
id: "content",
addClass: "content"
} ] ], {} ] ], {} ] ], {} ] ], {
xmlns: "jx.ui.html",
"xmlns:mui": "meshim.ui",
"xmlns:widgets": "meshim.widget.widgets",
class: "basicAvatarRenderer"
} ], u = d[0].call(this, e, o, null, s.mangleIDs(o, d[3]), d[4]), c = u || this;
s.set(o, c);
var h = s.get(o + "__avatar"), f = s.get(o + "__content");
if (!t.__jx__jcss_generated) {
a.generate(e, t.prototype.__jx__fqname, t.__jx__jcss, null, t);
t.__jx__jcss_generated = !0;
}
var g = function() {
function t(t) {
n && c.autounbind(n, "value", e);
f.setDataNode(t);
n = t.$("nick$string");
c.autobind(n, "value", e);
}
function e(t) {
t && h.setMemberId(t);
}
var n, o = i(9);
!function(){}