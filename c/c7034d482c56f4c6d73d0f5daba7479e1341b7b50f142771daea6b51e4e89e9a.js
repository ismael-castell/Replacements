/*! For license information please see bowencraggs-surveywidget-2.0.51.min.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/'),
    n((n.s = 0));
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t, n) {
    (function () {
      (window.BowenCraggs = n(2)),
        (BowenCraggs.surveywidget.init = function (e) {
          'use strict';
          this.JSSurvey.init(e);
        }),
        (BowenCraggs.surveywidget.addHiddenQuestion = BowenCraggs.surveywidget.JSSurvey.addHiddenQuestion),
        (BowenCraggs.surveywidget.removeHiddenQuestion = BowenCraggs.surveywidget.JSSurvey.removeHiddenQuestion),
        (BowenCraggs.surveywidget.updateSettings = BowenCraggs.surveywidget.JSSurvey.updateSettings),
        (BowenCraggs.surveywidget.getVersion = BowenCraggs.surveywidget.JSSurvey.getVersion);
    }.call(this));
  },
  function (e, t, n) {
    function r(e) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    (function () {
      'use strict';
      var e = e || {};
      (e.JSSurvey = {
        defaults: {
          survey: {
            surveys: {
              feedbackHtml: '',
              counter: 5,
              screenreader_text: 'Survey Invitation - press escape to dismiss',
              screenreader_new_window_warning: 'opens in new window',
              name1: {
                name: 'name1',
                lang: '',
                surveyURL: 'http://www.clicktools.com/survey?iv=aaaaaaaaaaaaaaa',
                design: 'modal',
                presentation: '_blank',
                windowWidth: '500',
                windowHeight: '600',
                windowScrolling: 'yes',
                windowResize: 'no',
                windowMenu: 'no',
                windowLocation: 'no',
                windowStatus: 'yes',
                timer: 2e3,
                ratio: 1,
                frequency: 0,
                expiry: 90,
                trapfocus: 1,
                gaEvents: !0,
                gaEventsCategory: 'Bowen Craggs Survey',
                gaEventsUA: '',
              },
              name2: {
                name: 'name2',
                lang: '',
                surveyURL: 'http://www.clicktools.com/survey?iv=bbbbbbbbbbbbbbbb',
                design: 'modal',
                presentation: '_blank',
                windowWidth: '500',
                windowHeight: '600',
                windowScrolling: 'yes',
                windowResize: 'no',
                windowMenu: 'no',
                windowLocation: 'no',
                windowStatus: 'yes',
                timer: 2e3,
                ratio: 1,
                frequency: 0,
                expiry: 90,
                trapfocus: 1,
                gaEvents: !0,
                gaEventsCategory: 'Bowen Craggs Survey',
                gaEventsUA: '',
              },
            },
            feedback: {
              active: 0,
              type: 1,
              text: 'Please tell us about your visit',
              url: 'http://www.clicktools.com/survey?iv=3a124d8e0d661ed',
              presentation: 'new',
              windowWidth: '500',
              windowHeight: '600',
              windowScrolling: 'yes',
              windowResize: 'yes',
              windowMenu: 'yes',
              windowLocation: 'no',
              windowStatus: 'yes',
              alignment: 3,
              font: 'Arial, helvetica, sans-serif',
              fontSize: '11pt',
              color: '#000',
              underline: 'underline',
              background: '#fa0',
              padding: '10px 10px 10px 10px',
              image: '/img/feedback.png',
              expiry: 0.001,
            },
            modal: {
              screenreader_text: 'Survey Invitation - press escape to dismiss',
              screenreader_new_window_warning: 'opens in new window',
              logo: { width: '50px', height: '50px', alt: '' },
              background: { color: '#E5E5E5', opacity: '60' },
              mWindow: { background: 'white', padding: '1em', autocenter: !0, border: '1px solid #333' },
              header: {
                text: 'The heading',
                background: '',
                backgroundImage: '',
                border: 'none',
                margin: '0',
                padding: '8px 10px',
                font: 'Arial, helvetica, sans-serif',
                fontSize: '14px',
                color: '#333',
              },
              question: {
                text: "This is the question.<br />With a carriage return and a <a href='#'>Link</a>",
                background: '',
                backgroundImage: '',
                border: 'none',
                margin: '0',
                padding: '5px 10px',
                font: 'Arial, helvetica, sans-serif',
                fontSize: '12px',
                color: '#333',
              },
              answers: { padding: '10px', borderTop: '0', borderBottom: '0' },
              answer1: {
                type: 'decline',
                text: 'no',
                background: '#006CB5',
                backgroundImage: '',
                border: '1px solid #006CB5',
                margin: '0',
                padding: '2px 15px',
                font: 'Arial, helvetica, sans-serif',
                fontSize: '12px',
                color: '#fff',
              },
              answer2: {
                type: 'accept',
                text: 'yes',
                background: '#006CB5',
                backgroundImage: '',
                border: '1px solid #006CB5',
                margin: '0',
                padding: '2px 15px',
                font: 'Arial, helvetica, sans-serif',
                fontSize: '12px',
                color: '#fff',
              },
            },
          },
          jssurls: [],
        },
        defaultModalDesignStrategy: 0,
        target: document.getElementsByTagName('body')[0],
        pageCounter: 0,
        matchedURL: '',
        urlQueryObject: null,
        getVersion: function () {
          return '2.0.51';
        },
        init: function (e) {
          try {
            var t = this.oninit();
            if (void 0 !== t && !1 === t) return !1;
          } catch (e) {}
          var r = JSON.parse(JSON.stringify(e));
          (this.defaultsDeep = n(3)),
            0 == this.defaultModalDesignStrategy && (this.defaults.survey.modal = null),
            this.defaultsDeep(r, this.defaults),
            (this.JSSsettings = r),
            (this.JSSurls = r.jssurls);
          var i = this.readCookie('JSSCounter'),
            o = this.getSearchParameter();
          if (o.bctestmode)
            switch (o.bctestmode) {
              case '0':
                this.writeCookie('JSStestmode', 0, '/');
                break;
              default:
                this.writeCookie('JSStestmode', 1, '/');
            }
          '' != i
            ? ((this.pageCounter = parseInt(i)),
              (this.pageCounter = this.pageCounter + 1),
              this.writeCookie('JSSCounter', this.pageCounter, '/'))
            : this.writeCookie('JSSCounter', 0, '/'),
            1 == this.JSSsettings.survey.feedback.active && this.feedBackLink();
          var a = this.getMatchedURL();
          (this.isTestMode() || this.pageCounter >= this.JSSsettings.survey.surveys.counter) &&
            a &&
            a[1].length > 0 &&
            'false' !== a[1] &&
            this.modal(a);
        },
        getMatchedURL: function () {
          for (var e, t = 0; t < this.JSSurls.length; t++) {
            var n = this.JSSurls[t];
            0 == document.location.href.indexOf(n[0]) && (e = n);
          }
          return !e && this.isTestMode() && (e = this.JSSurls[0]), (this.matchedURL = e), e;
        },
        randomNum: function (e) {
          return Math.floor(Math.random() * e);
        },
        feedBackLink: function () {
          var e = 0;
          if (('decline' == this.readCookie('feedback') && (e = 1), 0 == e)) {
            var t = this.JSSsettings.survey.feedback,
              n = document.createElement('div');
            n.id = 'JSSFB';
            var r = document.createElement('a');
            switch (
              ((r.id = 'JSSFeedBack'),
              (r.href = t.url),
              (r.onclick = function () {
                var e = BowenCraggs.surveywidget.JSSurvey;
                return (
                  '_self' == t.presentation
                    ? (document.location.href = this)
                    : 'new' == t.presentation
                    ? e.openURL({
                        url: this,
                        winName: t.presentation,
                        chrome:
                          'width=' +
                          t.windowWidth +
                          ',height=' +
                          t.windowHeight +
                          ',resizable=' +
                          t.windowResize +
                          ',scrollbars=' +
                          t.windowScrolling +
                          ',menubar=' +
                          t.windowMenu +
                          ',status=' +
                          t.windowStatus +
                          ',location=' +
                          t.windowLocation,
                      })
                    : e.openURL({ url: this, winName: t.presentation }),
                  !1
                );
              }),
              (n.style.position = 'fixed'),
              -1 != navigator.appVersion.indexOf('MSIE 6.') && (n.style.position = 'absolute'),
              (n.style.float = 'left'),
              (n.style.width = 'auto'),
              (n.style.outline = '0'),
              t.alignment)
            ) {
              case 1:
                (n.style.top = '0'), (n.style.left = '0');
                break;
              case 2:
                (n.style.top = '0'), (n.style.right = '0');
                break;
              case 3:
                (n.style.bottom = '0'), (n.style.right = '0');
                break;
              case 4:
                (n.style.bottom = '0'), (n.style.left = '0');
                break;
              default:
                (n.style.bottom = '0'), (n.style.left = '0');
            }
            var i = document.createElement('a');
            if (
              ((i.id = 'JSSClose'),
              (i.href = '#'),
              (i.innerHTML = 'x'),
              (i.style.position = 'absolute'),
              (i.style.right = '0'),
              (i.style.top = '0'),
              (i.style.display = 'block'),
              (i.style.float = 'right'),
              (i.style.outline = 'none'),
              (i.style.background = 'url(bc-survey/JSSclose.png) top left no-repeat'),
              (i.style.width = '11px'),
              (i.style.height = '10px'),
              (i.style.textIndent = '-500em'),
              (i.onclick = function () {
                document.getElementsByTagName('body')[0].removeChild(document.getElementById('JSSFB')),
                  this.writeCookie('JSSfeedback', 'decline', '/', t.expiry);
              }),
              1 == t.type)
            )
              (r.style.fontFamily = t.font),
                (r.style.fontSize = t.fontSize),
                (r.style.color = t.color),
                (r.style.textDecoration = t.underline),
                (r.style.background = t.background),
                (r.style.padding = t.padding),
                (r.style.display = 'block'),
                (r.style.float = 'left'),
                (r.style.width = 'auto'),
                r.appendChild(document.createTextNode(t.text));
            else {
              var o = document.createElement('img');
              (o.src = t.image), (o.border = '0'), r.appendChild(o);
            }
            var a,
              s = !1,
              u = this.JSSsettings.survey.surveys.feedbackHtml;
            if (null != u && null != u) {
              var c = new XMLHttpRequest();
              c.open('GET', u, !1), c.send(null), null != (a = c.responseText) && null != a && (s = !0);
            }
            if (s) {
              n.innerHTML = a;
              var d = this.getElementsByTagName(n, 'style');
              null != d[0] && (this.addCss(d[0].innerHTML), n.removeChild(d[0])),
                (n.style.fontFamily = t.font),
                (n.style.fontSize = t.fontSize),
                (n.style.color = t.color),
                (n.style.background = t.background),
                (n.style.padding = t.padding),
                (n.style.display = 'block'),
                (n.style.float = 'left'),
                (n.style.width = 'auto');
              var l = this.getElementsByClassName(n, 'survey-yes');
              null != l &&
                null != l &&
                ((l[0].href = r.href), (l[0].onclick = r.onclick), (l[0].style.textDecoration = t.underline));
              var f = this.getElementsByClassName(n, 'survey-no');
              null != f &&
                null != f &&
                ((f[0].href = i.href), (f[0].onclick = i.onclick), (f[0].style.textDecoration = t.underline));
            } else n.appendChild(r), n.appendChild(i);
            document.getElementsByTagName('body')[0].appendChild(n);
          }
        },
        modal: function (e) {
          var t = this,
            i = e,
            o = this.getCookiePath(i),
            a = this.JSSsettings.survey.surveys[i[1]].design,
            s = this.JSSsettings.survey[a];
          if (
            (1 == this.defaultModalDesignStrategy && this.defaultsDeep(s, this.defaults.survey.modal),
            'object' !== r(s))
          )
            return !1;
          var u = 0,
            c = i[1],
            d = this.readCookie(c + 'No');
          if (
            ('' != d && (d = parseInt(d)) >= this.JSSsettings.survey.surveys[i[1]].frequency && (u = 1),
            '1' == this.readCookie(c + 'Yes') && (u = 1),
            this.isTestMode() || 0 == u)
          ) {
            var l = this.randomNum(this.JSSsettings.survey.surveys[i[1]].ratio);
            if (this.isTestMode() || 0 == l) {
              var f = '',
                g = document.createElement('div');
              (g.id = 'JSOverlay'),
                (f +=
                  '#JSOverlay { position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: 999; ' +
                  this.addCssAttribute('background-color', s.background.color) +
                  this.addCssAttribute('opacity', parseInt(s.background.opacity) / 100) +
                  this.addCssAttribute('filter', 'alpha(opacity=' + s.background.opacity + ')') +
                  ' }\n');
              var v,
                h = document.createElement('div');
              if (
                ((h.id = 'JSQuestion'),
                (h.className = 'survey-modal'),
                void 0 !== this.JSSsettings.survey.surveys[i[1]].lang &&
                  this.JSSsettings.survey.surveys[i[1]].lang.length > 0)
              ) {
                var p = this.JSSsettings.survey.surveys[i[1]].lang;
                h.setAttribute('lang', p);
              }
              h.setAttribute('role', 'alertdialog'),
                null != s.header.text && s.header.text.length > 0
                  ? h.setAttribute('aria-Labelledby', 'bowencraggssurveywidgetheader')
                  : h.setAttribute('aria-label', 'Bowen Craggs Survey Dialog - escape to close'),
                null != s.question.text &&
                  s.question.text.length > 0 &&
                  h.setAttribute('aria-describedby', 'bowencraggssurveywidgetquestion'),
                (v =
                  null != s.mWindow.backgroundImage && s.mWindow.backgroundImage.length > 0
                    ? s.mWindow.backgroundImage
                    : s.mWindow.background);
              var y,
                b,
                m = parseInt(s.mWindow.width),
                w = parseInt(s.mWindow.height);
              w && (y = '-' + w / 2 + 'px'),
                m && (b = '-' + m / 2 + 'px'),
                (f +=
                  '#JSQuestion { position: fixed; top: 50%; left: 50%; z-index: 1000; ' +
                  this.addCssAttribute('width', s.mWindow.width) +
                  this.addCssAttribute('height', s.mWindow.height) +
                  this.addCssAttribute('border', s.mWindow.border) +
                  this.addCssAttribute('background', v) +
                  this.addCssAttribute('margin-top', y) +
                  this.addCssAttribute('margin-left', b) +
                  ' }\n');
              var S = document.createElement('div');
              S.className = 'survey-inner';
              var C = s.mWindow.padding;
              if (
                ((void 0 === s.mWindow.padding || !s.mWindow.padding.length > 0) && (C = 16),
                NaN !== parseInt(C) && (C = parseInt(C) + 'px'),
                (f += '#JSQuestion .survey-inner { ' + this.addCssAttribute('padding', C) + '}\n'),
                void 0 !== s.logo.url && s.logo.url.length > 0)
              ) {
                var _ = document.createElement('div');
                _.className = 'survey-logo';
                var k = document.createElement('img');
                (k.src = s.logo.url),
                  void 0 !== s.logo.alt && s.logo.alt.length > 0
                    ? k.setAttribute('alt', s.logo.alt)
                    : k.setAttribute('alt', ''),
                  (f +=
                    '#JSQuestion .survey-logo { float: left; margin-right: 8px; margin-bottom: 8px; ' +
                    this.addCssAttribute('margin-top', '-' + C) +
                    this.addCssAttribute('margin-left', '-' + C) +
                    this.addCssAttribute('width', s.logo.width) +
                    this.addCssAttribute('height', s.logo.height) +
                    ' }\n'),
                  _.appendChild(k),
                  S.appendChild(_);
              }
              var A = document.createElement('div');
              if (
                ((A.className = 'survey-header'),
                (A.background = s.header.background),
                (A.id = 'bowencraggssurveywidgetheader'),
                null != s.header.text && s.header.text.length > 0)
              ) {
                var x = document.createElement('h2'),
                  E = s.header.text;
                0, (x.innerHTML = E), A.appendChild(x);
              }
              (f += '#JSQuestion .survey-header { ' + this.addCssAttribute('background', s.header.background) + ' }\n'),
                (f +=
                  '#JSQuestion .survey-header h2 { ' +
                  this.addCssAttribute('padding', s.header.padding) +
                  this.addCssAttribute('margin', s.header.margin) +
                  this.addCssAttribute('font-family', s.header.font) +
                  this.addCssAttribute('font-size', s.header.fontSize) +
                  this.addCssAttribute('color', s.header.color) +
                  this.addCssAttribute('border', s.header.border) +
                  ' }\n');
              var J = document.createElement('div');
              (J.className = 'survey-question'),
                (J.style.background = s.question.background),
                (J.id = 'bowencraggssurveywidgetquestion'),
                (J.innerHTML = s.question.text),
                (f +=
                  '#JSQuestion .survey-question { ' +
                  this.addCssAttribute('padding', s.question.padding) +
                  this.addCssAttribute('margin', s.question.margin) +
                  this.addCssAttribute('font-family', s.question.font) +
                  this.addCssAttribute('font-size', s.question.fontSize) +
                  this.addCssAttribute('color', s.question.color) +
                  this.addCssAttribute('border', s.question.border) +
                  ' }\n');
              var j = document.createElement('div');
              (j.className = 'survey-buttons'),
                (f +=
                  '#JSQuestion .survey-buttons { ' +
                  this.addCssAttribute('clear', 'both') +
                  this.addCssAttribute('padding', s.answers.padding) +
                  this.addCssAttribute('border-top', s.answers.borderTop) +
                  this.addCssAttribute('border-bottom', s.answers.borderBottom) +
                  ' }\n'),
                (f += '#JSQuestion .survey-buttons:after { content: ""; display: table; clear: both; }\n');
              var O = document.createElement('a');
              (O.className = 'survey-no'),
                (O.href = '#'),
                (O.tabIndex = 0),
                (O.innerHTML = s.answer1.text),
                (f +=
                  '#JSQuestion .survey-no { ' +
                  this.addCssAttribute('background', s.answer1.background) +
                  this.addCssAttribute('padding', s.answer1.padding) +
                  this.addCssAttribute('margin', s.answer1.margin) +
                  this.addCssAttribute('font-family', s.answer1.font) +
                  this.addCssAttribute('font-size', s.answer1.fontSize) +
                  this.addCssAttribute('color', s.answer1.color) +
                  this.addCssAttribute('border', s.answer1.border) +
                  this.addCssAttribute('display', 'block') +
                  this.addCssAttribute('float', 'left') +
                  this.addCssAttribute('width', 'auto') +
                  this.addCssAttribute('text-decoration', 'none') +
                  this.addCssAttribute('font-weight', 'bold') +
                  ' }\n'),
                (f +=
                  '#JSQuestion .survey-no:focus { ' +
                  this.addCssAttribute('background', s.answer1.color) +
                  this.addCssAttribute('color', s.answer1.background) +
                  this.addCssAttribute('outline', '1px solid ' + s.answer1.background) +
                  ' }\n'),
                (O.onclick = function (e) {
                  BowenCraggs.surveywidget.JSSurvey.dismiss(), e.preventDefault();
                });
              var T = document.createElement('a');
              if (
                ((T.className = 'survey-yes'),
                (T.tabIndex = 0),
                (T.innerHTML = s.answer2.text),
                void 0 !== s.screenreader_new_window_warning && s.screenreader_new_window_warning.length > 0)
              )
                var B = s.screenreader_new_window_warning;
              else if (
                void 0 !== this.JSSsettings.survey.surveys.screenreader_new_window_warning &&
                this.JSSsettings.survey.surveys.screenreader_new_window_warning.length > 0
              )
                B = this.JSSsettings.survey.surveys.screenreader_new_window_warning;
              if (
                (void 0 !== B && B.length > 0 && (T.innerHTML += '<span class="sr-only"> (' + B + ')</span>'),
                (f +=
                  '#JSQuestion .survey-yes { ' +
                  this.addCssAttribute('background', s.answer2.background) +
                  this.addCssAttribute('padding', s.answer2.padding) +
                  this.addCssAttribute('margin', s.answer2.margin) +
                  this.addCssAttribute('font-family', s.answer2.font) +
                  this.addCssAttribute('font-size', s.answer2.fontSize) +
                  this.addCssAttribute('color', s.answer2.color) +
                  this.addCssAttribute('border', s.answer2.border) +
                  this.addCssAttribute('display', 'block') +
                  this.addCssAttribute('float', 'right') +
                  this.addCssAttribute('width', 'auto') +
                  this.addCssAttribute('text-decoration', 'none') +
                  this.addCssAttribute('font-weight', 'bold') +
                  ' }\n'),
                (f +=
                  '#JSQuestion .survey-yes:focus { ' +
                  this.addCssAttribute('background', s.answer2.color) +
                  this.addCssAttribute('color', s.answer2.background) +
                  ' }\n'),
                (T.onclick = function (e) {
                  e.preventDefault();
                  var t = BowenCraggs.surveywidget.JSSurvey,
                    n = BowenCraggs.surveywidget.JSSurvey.JSSsettings.survey.surveys[i[1]],
                    r = c + 'Yes';
                  t.writeCookie(r, 1, o, n.expiry);
                  var a = BowenCraggs.surveywidget.JSSurvey.getSurveyURL(i);
                  if (!(a.length > 0)) return !1;
                  n.gaEvents && t.sendGoogleEvent(n, 'Proceeded');
                  try {
                    var s = t.onlaunchsurvey();
                    if ((t.removeModal(), void 0 !== s && !1 === s)) return !1;
                  } catch (e) {}
                  return (
                    '_self' == n.presentation
                      ? (document.location.href = a)
                      : 'new' == n.presentation
                      ? t.openURL({
                          url: a,
                          winName: n.presentation,
                          chrome:
                            'width=' +
                            n.windowWidth +
                            ',height=' +
                            n.windowHeight +
                            ',resizable=' +
                            n.windowResize +
                            ',scrollbars=' +
                            n.windowScrolling +
                            ',menubar=' +
                            n.windowMenu +
                            ',status=' +
                            n.windowStatus +
                            ',location=' +
                            n.windowLocation,
                        })
                      : t.openURL({ url: a, winName: n.presentation }),
                    !1
                  );
                }),
                j.appendChild(O),
                j.appendChild(T),
                S.appendChild(A),
                S.appendChild(J),
                S.appendChild(j),
                void 0 !== s.screenreader_text && s.screenreader_text.length > 0)
              )
                var N = s.screenreader_text;
              else if (
                void 0 !== this.JSSsettings.survey.surveys.screenreader_text &&
                this.JSSsettings.survey.surveys.screenreader_text.length > 0
              )
                N = this.JSSsettings.survey.surveys.screenreader_text;
              if (void 0 !== N && N.length > 0) {
                var L = document.createElement('span');
                (L.className = 'sr-only'),
                  (L.innerHTML = N),
                  (f +=
                    '#JSQuestion .sr-only { border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; -webkit-clip-path: inset(50%) !important; clip-path: inset(50%) !important;  height: 1px !important; margin: -1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important; }'),
                  h.appendChild(L);
              }
              h.appendChild(S), this.addCss(f);
              var I = BowenCraggs.surveywidget.JSSurvey,
                M = BowenCraggs.surveywidget.JSSurvey.JSSsettings.survey.surveys[i[1]];
              if (void 0 === M.trapfocus || '0' != M.trapfocus) {
                var D = n(6);
                I.focusTrap = D.createFocusTrap(h, {
                  onDeactivate: function () {
                    t.deactivate();
                  },
                  clickOutsideDeactivates: !0,
                });
              }
              setTimeout(function () {
                var e = BowenCraggs.surveywidget.JSSurvey,
                  t = document.getElementsByTagName('body')[0],
                  n = BowenCraggs.surveywidget.JSSurvey.JSSsettings.survey.surveys[i[1]];
                (void 0 !== n.trapfocus && '0' == n.trapfocus) || (e.focusTrap.activate(), t.appendChild(g));
                var r = BowenCraggs.surveywidget.JSSurvey.getSurveyURL(
                    BowenCraggs.surveywidget.JSSurvey.getMatchedURL()
                  ),
                  o = h.querySelector('a.survey-yes');
                (o.href = r),
                  (o.target = n.presentation),
                  t.appendChild(h),
                  s.mWindow.autocenter &&
                    ((h.style.marginLeft = (h.offsetWidth / 2) * -1 + 'px'),
                    (h.style.marginTop = (h.offsetHeight / 2) * -1 + 'px')),
                  n.gaEvents && e.sendGoogleEvent(n, 'Displayed');
                try {
                  e.callback();
                } catch (e) {}
                try {
                  e.ondisplay();
                } catch (e) {}
              }, BowenCraggs.surveywidget.JSSurvey.JSSsettings.survey.surveys[i[1]].timer);
            }
          }
        },
        getCookiePath: function (e) {
          for (var t = e[0], n = '/', r = (t = (t = (t = t.split('://'))[1]).split('/')).length, i = 1; i < r; i++)
            (n += t[i]), (n += '/');
          return (n = n.replace('//', '/'));
        },
        deactivate: function () {
          return this.writeCookie('JSSCounter', 0, '/'), BowenCraggs.surveywidget.JSSurvey.removeModal(), !1;
        },
        dismiss: function () {
          this.matchedURL.length > 0 || this.getMatchedURL();
          var e = BowenCraggs.surveywidget.JSSurvey,
            t = BowenCraggs.surveywidget.JSSurvey.JSSsettings.survey.surveys[this.matchedURL[1]],
            n = this.matchedURL[1] + 'No',
            r = e.readCookie(n),
            i = this.getCookiePath(this.matchedURL);
          if ('' == r) e.writeCookie(n, 1, i, t.expiry);
          else {
            var o = (r = parseInt(r)) + 1;
            e.writeCookie(n, o, i, t.expiry);
          }
          t.gaEvents && e.sendGoogleEvent(t, 'Dismissed'), e.removeModal();
          try {
            e.ondismiss();
          } catch (e) {}
          return !1;
        },
        removeModal: function () {
          var e = BowenCraggs.surveywidget.JSSurvey;
          'object' === r(e.focusTrap) && e.focusTrap.deactivate({ onDeactivate: !1 });
          var t = document.getElementById('JSOverlay');
          null != t && t.parentNode.removeChild(t);
          var n = document.getElementById('JSQuestion');
          null != n && n.parentNode.removeChild(n);
        },
        openURL: function (e) {
          window.open(e.url, e.winName, e.chrome);
        },
        hydrateUrlQueryObject: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          if ((null == e && (e = this.getMatchedURL()), void 0 === e || null == e || !(e.length > 0))) return '';
          for (var t = e[2].length, n = {}, r = 0; r < t; r++)
            if ('url' == e[2][r][1]) n[e[2][r][0]] = document.location.href;
            else if ('useragent' == e[2][r][1]) n[e[2][r][0]] = navigator.userAgent;
            else if ('google_client_id' == e[2][r][1]) n[e[2][r][0]] = this.getGoogleClientID();
            else if ('google_linker_param' == e[2][r][1]) n[e[2][r][0]] = this.getGoogleLinkerParam();
            else if ('adobe_mcvid' == e[2][r][1]) n[e[2][r][0]] = this.getAdobeMarketingCloudVisitorID();
            else if ('tealium_vid' == e[2][r][1]) n[e[2][r][0]] = this.getTealiumVisitorID();
            else if ('urlcallback' == e[2][r][0]) {
              if ('function' == typeof this[e[2][r][1]])
                try {
                  n = this[e[2][r][1]](n);
                } catch (e) {}
            } else n[e[2][r][0]] = e[2][r][1];
          return (this.urlQueryObject = n), this.urlQueryObject;
        },
        getMatchedURLParam: function (e) {
          return (
            (void 0 === this.urlQueryObject || null == this.urlQueryObject || !this.urlQueryObject.length > 0) &&
              this.hydrateUrlQueryObject(),
            void 0 === this.urlQueryObject[e] ? '' : this.urlQueryObject[e]
          );
        },
        getSurveyURL: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          null == t && (t = this.getMatchedURL()),
            (void 0 === this.urlQueryObject || null == this.urlQueryObject || !this.urlQueryObject.length > 0) &&
              this.hydrateUrlQueryObject(t);
          var n = Object.keys(this.urlQueryObject)
              .map(function (t) {
                return t + '=' + encodeURIComponent(e.urlQueryObject[t]);
              })
              .join('&'),
            r = BowenCraggs.surveywidget.JSSurvey.JSSsettings.survey.surveys[t[1]],
            i = r.surveyURL;
          return 'string' == typeof i && i.length > 0 && (i = i.includes('?') ? i + '&' + n : i + '?' + n);
        },
        getGoogleClientID: function () {
          var e = null;
          return (
            'undefined' != typeof ga &&
              void 0 !== ga.getAll &&
              ga.getAll().forEach(function (t) {
                e = t.get('clientId');
              }),
            e
          );
        },
        getGoogleLinkerParam: function () {
          var e = null;
          return (
            'undefined' != typeof ga &&
              void 0 !== ga.getAll &&
              ga.getAll().forEach(function (t) {
                e = t.get('linkerParam');
              }),
            e
          );
        },
        sendGoogleEvent: function (e, t) {
          if ('undefined' == typeof ga || void 0 === ga.getAll) return !1;
          var n = 'Bowen Craggs Survey',
            r = 'Pop Up',
            i = null;
          void 0 !== e.gaEventsCategory && e.gaEventsCategory.length > 0 && (n = e.gaEventsCategory),
            void 0 !== e.name && e.name.length > 0 && (r = r + ': ' + e.name);
          var o = { hitType: 'event', eventCategory: n, eventAction: r, eventLabel: t };
          void 0 !== e.gaEventsUA && e.gaEventsUA.length > 0
            ? ((i = (i = e.gaEventsUA).split(/[, ]+/)),
              ga.getAll().forEach(function(){}