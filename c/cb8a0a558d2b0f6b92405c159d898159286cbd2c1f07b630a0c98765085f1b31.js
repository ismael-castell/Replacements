var com;
!(function (v) {
  "use strict";
  v.com || (v.com = {}),
    v.com.aniview || (v.com.aniview = {}),
    v.com.aniview.player || (v.com.aniview.player = {}),
    (v.com.aniview.player.avVer = "2.2.75.1");
  v.com.aniview.player.avPlayer = function (s) {
    var n,
      r,
      o,
      e,
      l,
      a,
      d = new (function () {
        var a = {};
        (this.subscribe = function (t, e, i) {
          a[e] || (a[e] = []), a[e].push({ callback: t, context: i });
        }),
          (this.unsubscribe = function (t, e) {
            if (a[e])
              for (var i = 0; i < a[e].length; i++)
                if (a[e][i].callback === t) {
                  a[e].splice(i, 1);
                  break;
                }
          }),
          (this.dispatch = function (t, e, i, n) {
            if (a[t])
              for (var o = 0; o < a[t].length; o++)
                if (a[t][o] && "function" == typeof a[t][o].callback)
                  try {
                    a[t][o].callback.call(a[t][o].context, e, i, n);
                  } catch (t) {}
          });
      })(),
      p = this;
    (p.AdLoaded = !1), (p.playing = !1), (p.muted = !s.autosound);
    var i,
      c,
      u = null,
      h = null,
      g = null;
    s.publisherId && (s.publisherId = s.publisherId.trim()),
      s.channelId && (s.channelId = s.channelId.trim()),
      (l = {
        AdLoaded: [],
        AdStarted: [],
        AdStopped: [],
        AdSkipped: [],
        AdClosed: [],
        AdSkippableStateChange: ["adSkippableState"],
        AdSizeChange: ["adWidth", "adHeight"],
        AdLinearChange: ["adLinear"],
        AdDurationChange: ["adDuration", "adRemainingTime"],
        AdExpandedChange: ["adExpanded"],
        AdRemainingTimeChange: ["adRemainingTime"],
        AdVolumeChange: ["adVolume"],
        AdImpression: [],
        AdVideoStart: [],
        AdVideoFirstQuartile: [],
        AdVideoMidpoint: [],
        AdVideoThirdQuartile: [],
        AdVideoComplete: [],
        AdClickThru: [],
        AdInteraction: [],
        AdUserAcceptInvitation: [],
        AdUserMinimize: [],
        AdUserClose: [],
        AdPaused: [],
        AdPlaying: [],
        AdLog: [],
        AdError: [],
        Inventory: [],
        InventoryRequest: [],
        FullScreenRequest: [],
        AdEvent: [],
        VPAIDLoadError: [],
        AdTimeout: [],
      }),
      document.getElementById("videoSlot"),
      n && n.parentNode && (n.parentNode.removeChild(n), (n = null)),
      (n = document.createElement("iframe")).setAttribute(
        "id",
        "AVLoader" + s.position
      ),
      (n.style.display = "none"),
      (n.src = "about:blank"),
      (e = function () {
        var t,
          e,
          i = "https://player.aniview.com/script/6.1/";
        (!s.baseJsUrl && "" != s.baseJsUrl) || (i = s.baseJsUrl);
        isNaN(s.abtest) &&
          5 == Math.floor(20 * Math.random()) &&
          (s.abtest = 5),
          5 == s.abtest && ((i += "ab5/"), (s.baseJsUrl = i)),
          (i = i + "AVmanager.js?v=1.0&type=s&pid=" + s.publisherId);
        try {
          ((o = n.contentWindow.document.createElement("script")).src = i),
            o.setAttribute("data-av", "AVScript" + s.position),
            (o.type = "text/javascript"),
            (e = function () {
              if ("function" == typeof n.contentWindow.getVPAIDAd) {
                for (t in ((r = n.contentWindow.getVPAIDAd()), l))
                  l.hasOwnProperty(t) &&
                    (function (a) {
                      r.subscribe(function (t, e, i) {
                        for (var n = 0; n < arguments.length; n++)
                          0 < n && 0, 0;
                        for (n = 0; n < l[a].length; n++)
                          l[a][n].charAt(0).toUpperCase(), l[a][n].slice(1);
                        if (
                          ("AdEvent" == a &&
                            "function" == typeof p.onEvent &&
                            p.onEvent(t, e, i),
                          "AdLoaded" == a &&
                            ((p.AdLoaded = !0),
                            "function" == typeof p.onLoad && p.onLoad()),
                          "AdImpression" == a &&
                            ((p.playing = !0),
                            "function" == typeof p.onPlay && p.onPlay(t)),
                          "AdVideoFirstQuartile" == a &&
                            "function" == typeof p.onPlay25 &&
                            p.onPlay25(),
                          "AdVideoMidpoint" == a &&
                            "function" == typeof p.onPlay50 &&
                            p.onPlay50(),
                          "AdVideoThirdQuartile" == a &&
                            "function" == typeof p.onPlay75 &&
                            p.onPlay75(),
                          "AdVideoComplete" == a &&
                            ((p.playing = !1),
                            "function" == typeof p.onPlay100 && p.onPlay100(t)),
                          "AdClickThru" == a &&
                            "function" == typeof p.onClick &&
                            p.onClick(),
                          "AdPaused" == a &&
                            "function" == typeof p.onPause &&
                            p.onPause(),
                          "AdPlaying" == a &&
                            "function" == typeof p.onResume &&
                            p.onResume(),
                          "AdError" == a &&
                            "function" == typeof p.onError &&
                            p.onError(t),
                          "AdStopped" == a &&
                            "function" == typeof p.onStopped &&
                            p.onStopped(),
                          "AdSkipped" == a &&
                            "function" == typeof p.onSkip &&
                            p.onSkip(),
                          "AdClosed" == a &&
                            "function" == typeof p.onClose &&
                            p.onClose(t),
                          "AdVolumeChange" == a)
                        ) {
                          var o = p.muted;
                          if (
                            (void 0 !== r.adVolume &&
                              (p.muted = !(0 < r.adVolume)),
                            o == p.muted)
                          )
                            return;
                          "function" != typeof p.onUnmute || p.muted
                            ? "function" == typeof p.onMute &&
                              p.muted &&
                              (p.onMute(), (p.muted = !0))
                            : (p.onUnmute(), (p.muted = !1));
                        }
                        "ContentImpression" == a &&
                          "function" == typeof p.onContentPlay &&
                          p.onContentPlay(t),
                          "ContentComplete" == a &&
                            "function" == typeof p.onContentPlay100 &&
                            p.onContentPlay100(),
                          "ContentPaused" == a &&
                            "function" == typeof p.onContentPaused &&
                            p.onContentPaused(),
                          "ContentPlaying" == a &&
                            "function" == typeof p.onContentPlaying &&
                            p.onContentPlaying(),
                          "Inventory" == a &&
                            "function" == typeof p.onInventory &&
                            p.onInventory(),
                          "InventoryRequest" == a &&
                            "function" == typeof p.onInventoryRequest &&
                            p.onInventoryRequest(t),
                          "FullScreenRequest" == a &&
                            "function" == typeof p.onFullScreenRequest &&
                            p.onFullScreenRequest(t),
                          d.dispatch(a, t, e, i);
                      }, a);
                    })(t);
                !(function () {
                  var t, e, i;
                  (t = {}),
                    (e =
                      document.getElementById(s.position).parentNode ||
                      "BODY" !=
                        document.getElementById(s.position).parentNode.tagName
                        ? document.getElementById(s.position).parentNode
                            .clientWidth
                        : document.body.clientWidth || screen.width);
                  1200 < Math.floor(e) && (e = 1200);
                  {
                    var n;
                    (i = Math.ceil(e / 1.777)),
                      0 == s.height &&
                        100 == s.width &&
                        ((s.height = i),
                        (s.width = e),
                        (n =
                          document.documentElement.clientHeight ||
                          document.body.clientHeight ||
                          screen.height),
                        s.height > n &&
                          ((s.height = n), (s.width = Math.ceil(1.77 * n))));
                  }
                  void 0 === s.hideControls && (s.hidecontrols = !1);
                  ((t = s).slot = document.getElementById(s.position)),
                    (t.videoSlot = document.getElementById("videoSlot")),
                    (t.videoSlotCanAutoPlay = !0),
                    (t.getviewability = g),
                    r.initAd(s.width, s.height, "normal", "", "", t);
                })();
              }
            }),
            (o.onload = function () {
              e();
            }),
            n.contentWindow.document.body.appendChild(o);
        } catch (t) {
          d.dispatch(l.VPAIDLoadError, t);
        }
      }),
      (p.play = function () {
        var t;
        p.playCalled ||
          ((p.playCalled = !0),
          document.body && "function" == typeof document.body.appendChild
            ? document.body.appendChild(n)
            : document.getElementById(s.position).appendChild(n),
          n.contentWindow &&
            ((t = n.contentWindow.document.open()),
            (n.contentWindow.avCallback = e),
            t.write('<html><body onload="window.avCallback();"></body></html>'),
            n.contentWindow.document.close()));
      }),
      (p.startAd = function (t) {
        p.AdLoaded && r.startAd(t);
      }),
      (p.setWaterfallState = function (t, e, i) {
        r &&
          "function" == typeof r.setWaterfallState &&
          r.setWaterfallState(t, e, i);
      }),
      (p.unmute = function () {
        r && r.setAdVolume(1);
      }),
      (p.mute = function () {
        try {
          r && r.setAdVolume(0);
        } catch (t) {}
      }),
      (p.pause = function () {
        r && r.pauseAd();
      }),
      (p.resume = function () {
        r && r.resumeAd();
      }),
      (p.skip = function () {
        r && r.skipAd();
      }),
      (p.close = function () {
        r && "function" == typeof r.stopAd && r.stopAd(),
          setTimeout(function () {
            try {
              n && (document.body.removeChild(n), (r = n = null));
            } catch (t) {}
          }, 3e3);
      }),
      (p.getEvents = function () {
        var t,
          e = [];
        for (t in l) e.push(t);
        return e;
      }),
      (p.updateGui = function (t) {
        try {
          if ("object" == typeof t)
            for (var e in t) {
              var i = e.toLowerCase();
              (n.contentWindow.AV_PlayerGui.config[i] = t[e]),
                (n.contentWindow.AV_PlayerGui.config[e] = t[e]),
                "showTimeline" == e &&
                  "function" ==
                    typeof n.contentWindow.AV_PlayerGui.showTimeline &&
                  n.contentWindow.AV_PlayerGui.showTimeline(t[e]);
            }
        } catch (t) {}
      }),
      (p.resize = function (t, e, i) {
        (i = i || "normal"), r && r.resizeAd(Math.floor(t), Math.floor(e), i);
      }),
      (p.getAdDuration = function () {
        if (r) return r.getAdDuration();
      }),
      (p.getAdRemainingTime = function () {
        if (r) return r.getAdRemainingTime();
      }),
      (p.getAdVolume = function () {
        if (r) return r.getAdVolume();
      }),
      (p.setAdVolume = function (t) {
        if (r) return r.setAdVolume(t);
      }),
      (p.seek = function (t) {
        if (r) return r.seekAd(t);
      }),
      (p.getContentPaused = function () {
        if (r) return r.getContentPaused();
      }),
      (this.pauseContent = function () {
        if (r) return r.pauseContent();
      }),
      (this.resumeContent = function () {
        if (r) return r.resumeContent();
      }),
      (this.setContentVolume = function (t) {
        if (r) return r.setContentVolume(t);
      }),
      (this.on = function (t, e, i) {
        d.subscribe(e, t, i);
      }),
      (this.off = function (t, e, i) {
        d.unsubscribe(e, t, i);
      }),
      (a = function () {
        var n = null,
          o = 0.5,
          a = null,
          s = !1,
          r = this;
        function i() {
          var t = r.getVieabilityInfo(a.el, a.wnd),
            e = t.vertical.value * t.horizontal.value,
            i = t.vertical.state;
          return { inView: o < e, ratio: e, state: i };
        }
        function l() {
          var t = i();
          n && n(t.inView, t.ratio, t.state);
        }
        (this.start = function (t, e, i) {
          return (
            !s &&
            !!(a = (function (t) {
              var e,
                i,
                n = null;
              try {
                v.top.location.href;
                if ((n = v.frameElement))
                  for (var o, a = v; a !== v.top; ) {
                    if (
                      (a =
                        (o = n.ownerDocument).defaultView || o.parentWindow) ===
                      v.top
                    ) {
                      (i = a), (e = n);
                      break;
                    }
                    n = a.frameElement;
                  }
              } catch (t) {
                return (s = !0), null;
              }
              if (null == n) {
                if (
                  !(e = "object" == typeof t ? t : document.getElementById(t))
                )
                  return (s = !0), null;
                i = v;
              }
              return { el: e, wnd: i };
            })(t)) &&
            (i && (o = i),
            e &&
              (a.wnd.addEventListener("resize", l, !0),
              a.wnd.addEventListener("scroll", l, !0),
              (n = e),
              setTimeout(l, 10)),
            !0)
          );
        }),
          (this.stop = function () {
            n &&
              (a.wnd.removeEventListener("resize", l, !0),
              a.wnd.removeEventListener("scroll", l, !0),
              (n = null));
          }),
          (this.get = function (t, e) {
            return !s && a ? i() : { inView: !1, ratio: 0, state: "UNKNOWN" };
          }),
          (this.getHorizontalViewability = function (t, e) {
            var i = e.innerWidth,
              n = t.getBoundingClientRect().left,
              o = t.getBoundingClientRect().right,
              a = o - n;
            return i < n
              ? { value: 0, state: "OUT_RIGHT" }
              : o <= 0
              ? { value: 0, state: "OUT_LEFT" }
              : 0 <= n && o <= i
              ? { value: 1, state: "IN_HVIEW" }
              : n < 0 && i < o
              ? { value: i / a, state: "LR_TRUNC" }
              : n < 0 && o <= i
              ? { value: o / a, state: "L_TRUNC" }
              : 0 <= n && i < o
              ? { value: (i - n) / a, state: "R_TRUNC" }
              : { value: 0, state: "OUT" };
          }),
          (this.getVerticalViewability = function (t, e) {
            var i = e.innerHeight,
              n = t.getBoundingClientRect().top,
              o = t.getBoundingClientRect().bottom,
              a = o - n;
            return i < n
              ? { value: 0, state: "OUT_BOTTOM" }
              : o <= 0
              ? { value: 0, state: "OUT_TOP" }
              : 0 <= n && o <= i
              ? { value: 1, state: "IN_VVIEW" }
              : n < 0 && i < o
              ? { value: i / a, state: "BT_TRUNC" }
              : n < 0 && o <= i
              ? { value: o / a, state: "T_TRUNC" }
              : 0 <= n && i < o
              ? { value: (i - n) / a, state: "B_TRUNC" }
              : { value: 0, state: "OUT" };
          }),
          (this.getVieabilityInfo = function (t, e) {
            return {
              vertical: r.getVerticalViewability(t, e),
              horizontal: r.getHorizontalViewability(t, e),
            };
          });
      }),
      (this.startViewability = function (t, e, i) {
        return (u = u || new a()).start(t, e, i);
      }),
      (this.stopViewability = function () {
        u && u.stop();
      }),
      (this.getViewability = function () {
        if (u) return u.get();
      }),
      (g = function (t, e, i) {
        if (t) return h || (h = new a()).start(t, e, i), h.get();
        h.stop();
      }),
      s.noMuteOnBlur ||
        ((i = { hidden: void 0, visibilityChange: void 0 }),
        void 0 !== document.hidden
          ? ((i.hidden = "hidden"), (i.visibilityChange = "visibilitychange"))
          : void 0 !== document.webkitHidden
          ? ((i.hidden = "webkitHidden"),
            (i.visibilityChange = "webkitvisibilitychange"))
          : void 0 !== document.mozHidden
          ? ((i.hidden = "mozHidden"),
            (i.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.msHidden &&
            ((i.hidden = "msHidden"),
            (i.visibilityChange = "msvisibilitychange")),
        i.hidden &&
          document.addEventListener(
            i.visibilityChange,
            function (t) {
              document[i.hidden] && p.mute();
            },
            !1
          )),
      (c = {
        addClass: function (t, e) {
          t.style.cssText = e;
        },
        setfloatingCSS: function () {
          s.floating.size || (s.floating.size = 0.5),
            s.floating.right || (s.floating.right = 0),
            s.floating.bottom || (s.floating.bottom = 0),
            (this.floatingCSS =
              "z-index:10000001;position:fixed; bottom:" +
              s.floating.bottom +
              "px; right:" +
              s.floating.right +
              "px; -webkit-transform:scale(" +
              s.floating.size +
              "); -webkit-transform-origin:bottom right; transform:scale(" +
              s.floating.size +
              "); transform-origin:bottom right");
        },
        getPlaceholderWidth: function (t) {
          var e =
            t.parentNode || "BODY" != t.parentNode.tagName
              ? t.parentNode.clientWidth
              : document.body.clientWidth || screen.width;
          return (
            1020 < e && (e = 1020),
            100 != s.width && 0 != s.height
              ? (e = s.width)
              : ((s.height = Math.floor(e / 1.777)), (s.width = e)),
            e
          );
        },
        hidePlayer: function (t, e) {
          (t.style.width = this.getPlaceholderWidth(t) + "px"),
            (t.style.height = "1px"),
            (e.style.position = "absolute"),
            (e.style.top = "-100000px");
        },
        showPlayer: function (t, e) {
          (t.style.height = s.height + "px"),
            p.resize(s.width, s.height),
            (e.style.top = ""),
            (e.style.position = ""),
            (e.style.zIndex = "9999999");
        },
        startAd: function (t) {
          this.playerInView &&
            this.playerLoadedFirstTime &&
            !this.startAdFirstTime &&
            ((this.startAdFirstTime = !0), p.startAd(t));
        },
        startViewability: function (n) {
          var o = this,
            t = !1;
          s.floting && !s.floating && (s.floating = s.floting),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
              navigator.userAgent
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                navigator.userAgent.substr(0, 4)
              )) &&
              (t = !0),
            s.preloader || (s.preloader = {});
          var a = document.querySelector("#" + s.position);
          o.addClass(
            n,
            "overflow:hidden; -webkit-transition:1s ease height; transition:1s ease height"
          ),
            s.floating && 0 < s.floating.size && o.setfloatingCSS(),
            s.playOnView && !s.autoPlay && o.hidePlayer(n, a),
            p.on("AdLoaded", function () {
              (o.playerLoadedFirstTime = !0), o.startAd();
            }),
            p.on("AdImpression", function () {
              s.preloader.type,
                o.showPlayer(n, a),
                s.unMuteOnMouseEnter &&
                  !t &&
                  (a.addEventListener("mouseenter", function (t) {
                    setTimeout(function () {
                      p.unmute();
                    }, 5);
                  }),
                  a.addEventListener("mouseleave", function (t) {
                    setTimeout(function () {
                      p.mute();
                    }, 5);
                  })),
                s.pauseOnBlur &&
                  !t &&
                  v.addEventListener("blur", function () {
                    setTimeout(function () {
                      p.pause();
                    }, 500);
                  });
            }),
            p.on("AdVideoComplete", function () {
              s.lastFrame || s.preloader.type || o.hidePlayer(n, a);
            }),
            p.on("AdSkipped", function () {
              o.hidePlayer(n, a);
            }),
            p.on("AdClosed", function () {
              o.hidePlayer(n, a);
            }),
            p.on("AdError", function (t) {
              var e = t && t.errorlimit;
              s.preloader.type || s.passbackUrl
                ? s.passbackUrl && s.playOnView && e && o.showPlayer(n, a)
                : o.hidePlayer(n, a);
            }),
            s.playOnView
              ? p.startViewability(
                  n,
                  function (t, e, i) {
                    t
                      ? (s.preloader.type &&
                          !o.playerInView &&
                          0 == s.Preroll &&
                          o.showPlayer(n, a),
                        (o.playerInView = !0),
                        p.playing || o.startAd(),
                        (p.playing ||
                          ("" != s.preloader.type && s.preloader.type)) &&
                          (s.pauseOnUnseen && p.resume(), o.addClass(a, "")))
                      : (p.playing ||
                          ("" != s.preloader.type && s.preloader.type)) &&
                        ("OUT_TOP" === i &&
                          s.floating &&
                          o.addClass(a, o.floatingCSS),
                        s.pauseOnUnseen && p.pause());
                  },
                  0.5
                )
              : ((o.startAdFirstTime = !1),
                (o.playerInView = !0),
                (o.playerLoadedFirstTime = !0),
                o.startAd(),
                o.showPlayer(n, a));
        },
      }),
      (p.startTemplate = function (t) {
        c.startViewability(t);
      });
  };
})(window),
  (function () {
    function t(t, e) {
      e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
      var i = document.createEvent("CustomEvent");
      return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
    }
    "function" != typeof window.CustomEvent &&
      ((t.prototype = window.Event.prototype), (window.CustomEvent = t));
  })(),
  (function (t) {
    "use strict";
    t.com || (t.com = {}),
      t.com.aniview || (t.com.aniview = {}),
      t.com.aniview.player || (t.com.aniview.player = {});
    var e = (t.com.aniview.player.EventListener = function () {
      this.listeners = {};
    });
    (e.prototype.listeners = null),
      (e.prototype.event = function (t, e) {
        var i = new CustomEvent(t, {});
        (i.data = e), this.dispatchEvent(i);
      }),
      (e.prototype.addEventListener = function (t, e, i) {
        t in this.listeners || (this.listeners[t] = []),
          this.listeners[t].push({ callback: e, context: i });
      }),
      (e.prototype.removeEventListener = function (t, e) {
        if (t in this.listeners)
          for (var i = this.listeners[t], n = 0, o = i.length; n < o; n++)
            if (i[n] === e)
              return i.splice(n, 1), this.removeEventListener(t, e);
      }),
      (e.prototype.dispatchEvent = function (t) {
        if (t.type in this.listeners)
          for (
            var e = this.listeners[t.type], i = 0, n = e.length;
            i < n;
            i++
          ) {
            var o = e[i].context;
            void 0 === o && (o = this);
            try {
              e[i].callback.call(o, t, t.data);
            } catch (t) {}
          }
      });
  })(window),
  (function (t) {
    var e, i, n;
    function a() {}
    (e = t.aniview || (t.aniview = {})),
      (i = e.utils || (e.utils = {})),
      (a.clone = function (t) {
        if (null == t || "object" != typeof t) return t;
        var e,
          i = t.constructor();
        for (e in t) t.hasOwnProperty(e) && (i[e] = t[e]);
        return i;
      }),
      (a.isMergeableObject = function (t) {
        return (
          t &&
          "object" == typeof t &&
          "[object RegExp]" !== Object.prototype.toString.call(t) &&
          "[object Date]" !== Object.prototype.toString.call(t)
        );
      }),
      (a.emptyTarget = function (t) {
        return Array.isArray(t) ? [] : {};
      }),
      (a.cloneIfNecessary = function (t, e) {
        return e && !0 === e.clone && a.isMergeableObject(t)
          ? a.deepmerge(emptyTarget(t), t, e)
          : t;
      }),
      (a.defaultArrayMerge = function (i, t, n) {
        var o = i.slice();
        return (
          t.forEach(function (t, e) {
            void 0 === o[e]
              ? (o[e] = a.cloneIfNecessary(t, n))
              : a.isMergeableObject(t)
              ? (o[e] = a.deepmerge(i[e], t, n))
              : -1 === i.indexOf(t) && o.push(a.cloneIfNecessary(t, n));
          }),
          o
        );
      }),
      (a.mergeObject = function (e, i, n) {
        if (null == i || null == e) return e;
        var o = {};
        return (
          a.isMergeableObject(e) &&
            Object.keys(e).forEach(function (t) {
              o[t] = a.cloneIfNecessary(e[t], n);
            }),
          Object.keys(i).forEach(function (t) {
            a.isMergeableObject(i[t]) && e[t]
              ? (o[t] = a.deepmerge(e[t], i[t], n))
              : (o[t] = a.cloneIfNecessary(i[t], n));
          }),
          o
        );
      }),
      (a.deepmerge = function (t, e, i) {
        var n = Array.isArray(e),
          o =
            (i || { arrayMerge: a.defaultArrayMerge }).arrayMerge ||
            a.defaultArrayMerge;
        return n
          ? Array.isArray(t)
            ? o(t, e, i)
            : a.cloneIfNecessary(e, i)
          : a.mergeObject(t, e, i);
      }),
      (a.deepmergeall = function (t, i) {
        if (!Array.isArray(t) || t.length < 2)
          throw new Error(
            "first argument should be an array with at least two elements"
          );
        return t.reduce(function (t, e) {
          return a.deepmerge(t, e, i);
        });
      }),
      (n = a),
      (i.ObjectUtils = n);
  })((com = com || {})),
  (function (m) {
    "use strict";
    m.com || (m.com = {}),
      m.com.aniview || (m.com.aniview = {}),
      m.com.aniview.player || (m.com.aniview.player = {});
    var a = (m.com.aniview.player.Utils = {});
    (a.extendsClass = function (t, e) {
      function i() {}
      (i.prototype = e.prototype), (t.prototype = new i());
    }),
      (a.getPath = function (t) {
        return t && -1 != t.indexOf("?") && (t = t.split("?").shift()), t;
      }),
      (a.clone = function (t, e) {
        if (null == t || "object" != typeof t) return t;
        var i,
          n = t.constructor();
        for (i in t)
          t.hasOwnProperty(i) &&
            (n[i] = e && 0 < e ? a.clone(t[i], e - 1) : t[i]);
        return n;
      }),
      (a.getExtension = function (t) {
        return (t = a.getPath(t)) && -1 != t.indexOf(".")
          ? t.split(".").pop().toLowerCase()
          : null;
      }),
      (a.isOneVideoElement = function () {
        var t = this.getOS();
        return (
          "webos" === t || ("tizen" === t && "4" === this.getOSVersion().major)
        );
      }),
      (a.isMobile = function () {
        return (
          !!this.isOneVideoElement() ||
          (this._isMobile ||
            ((t = !1),
            (e = navigator.userAgent || navigator.vendor || m.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              e
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4)
              )) &&
              (t = !0),
            (this._isMobile = t)),
          this._isMobile)
        );
        var t, e;
      }),
      (a.getBrowser = function () {
        return (
          this._browser ||
            (-1 != navigator.userAgent.toLowerCase().indexOf("chrome") &&
            -1 != navigator.vendor.toLowerCase().indexOf("google")
              ? (this._browser = "chrome")
              : -1 != navigator.userAgent.toLowerCase().indexOf("opera")
              ? (this._browser = "opera")
              : -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
              ? (this._browser = "firefox")
              : -1 != navigator.userAgent.toLowerCase().indexOf("safari") ||
                (navigator.vendor &&
                  -1 != navigator.vendor.toLowerCase().indexOf("apple"))
              ? (this._browser = "safari")
              : -1 != navigator.userAgent.toLowerCase().indexOf("msie") ||
                1 == !!document.documentMode
              ? (this._browser = "ie")
              : -1 != navigator.userAgent.toLowerCase().indexOf("mozilla") &&
                (this._browser = "edge")),
          this._browser
        );
      }),
      (a.logLevel = 0),
      (a.LOG_LEVEL = { DEBUG: 3, INFO: 2, ERR: 1 }),
      (a.log = function (t, e) {
        if ((e = e || a.LOG_LEVEL.INFO) <= a.logLevel) {
          var i = new Date(),
            n =
              "avcp::[" +
              i.getHours() +
              ":" +
              (i.getMinutes() < 10 ? "0" : "") +
              i.getMinutes() +
              ":" +
              (i.getSeconds() < 10 ? "0" : "") +
              i.getSeconds() +
              "] " +
              t;
          switch (e) {
            case a.LOG_LEVEL.DEBUG:
              console.debug ? console.debug(n) : console.log(n);
              break;
            case a.LOG_LEVEL.INFO:
              console.info(n);
              break;
            case a.LOG_LEVEL.ERR:
              console.error(n);
          }
        }
      }),
      (a.getOS = function () {
        return (
          this._os ||
            (-1 !== navigator.appVersion.toLowerCase().indexOf("android")
              ? (this._os = "android")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("mac") &&
                /iPad|iPhone|iPod/.test(navigator.userAgent)
              ? (this._os = "ios")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("win")
              ? (this._os = "windows")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("mac")
              ? (this._os = "mac")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("x11")
              ? (this._os = "unix")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("web0s") ||
                -1 !== navigator.appVersion.toLowerCase().indexOf("webos")
              ? (this._os = "webos")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("tizen")
              ? (this._os = "tizen")
              : -1 !== navigator.appVersion.toLowerCase().indexOf("linux")
              ? (this._os = "linux")
              : (this._os = "")),
          this._os
        );
      }),
      (a.getOSVersion = function () {
        var t,
          e = navigator.userAgent.toLowerCase().split(" "),
          i = null,
          n = 0,
          o = 0;
        return (
          "tizen" === this.getOS()
            ? -1 !== (t = e.indexOf("tizen")) &&
              (n = (i = e[t + 1].split("."))[0])
            : -1 !== (t = e.indexOf("os")) &&
              ((n = (i = e[t + 1].split("_"))[0]), (o = i[1])),
          { major: n, minor: o }
        );
      }),
      (a.getChromeVersion = function () {
        var t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return !!t && parseInt(t[2], 10);
      }),
      (a.httpsReplace = function (t) {
        return (
          "https:" == a.getProtocol() &&
            (t = (t = (t = t.replace(
              "data1.ani-view.com",
              "gbdl.hs.llnwd.net/v1"
            )).replace("data1.aniview.com", "aniview.hs.llnwd.net/d1")).replace(
              /^http:\/\//i,
              "https://"
            )),
          t
        );
      }),
      (a.getProtocol = function () {
        if (void 0 !== a.protocol) return a.protocol;
        if ("http:" == m.location.protocol || "https:" == m.location.protocol)
          (a.protocol = m.location.protocol), (a.topWindow = m);
        else {
          var t = m,
            e = t.location.protocol,
            i = 0;
          try {
            for (; "http:" != e && "https:" != e && i < 15 && t !== t.parent; )
              (e = (t = t.parent).location.protocol), i++;
          } catch (t) {}
          "http:" == e || "https:" == e
            ? ((a.protocol = e), (a.topWindow = t))
            : (a.protocol = "https:");
        }
        return a.protocol;
      }),
      (a.shuffleArray = function (t, e) {
        var i = t.length;
        if (((e = e || 0), i))
          for (; i != e && i--; ) {
            var n = Math.floor(Math.random() * (t.length - 1) + e),
              o = t[n];
            (t[n] = t[i]), (t[i] = o);
          }
      }),
      (a.loadScript = function (t, e) {
        var i = document.createElement("script");
        (i.src = t),
          (i.onload = e),
          document.getElementsByTagName("head")[0].appendChild(i);
      }),
      (a.fastHash = function (t) {
        var e,
          i = 0;
        if (0 === t.length) return i;
        for (e = 0; e < t.length; e++)
          (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
        return i < 0 && (i += 4294967295), i;
      }),
      (a.generateRandomString = function () {
        return this.fastHash(Math.random() + "" + Date.now());
      }),
      (a.parseInt = function (t, e, i) {
        return (
          (t = parseInt(t)),
          isNaN(t) && (t = 0),
          t < e ? (t = e) : i < t && (t = i),
          t
        );
      });
    var n,
      i = null;
    (a.requestAnimationFrame = function (t, e) {
      (i =
        i ||
        m.requestAnimationFrame ||
        m.webkitRequestAnimationFrame ||
        m.mozRequestAnimationFrame ||
        m.oRequestAnimationFrame ||
        m.msRequestAnimationFrame ||
        function (t, e) {
          setTimeout(t, 1e3 / 60);
        })(t, e);
    }),
      (a.fullscreenEnabled = function () {
        var t =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ||
          this.fixedFullScreenElement;
        if (
          this.fsels &&
          (this.fsels.content == t ||
            this.fsels.ad == t ||
            this.fsels.container == t)
        )
          return t;
      }),
      (a.setFullScreenElements = function (t) {
        this.fsels = t;
      }),
      (a.isFullscreenApiEnabled = function () {
        return (
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled
        );
      }),
      (a.requestFullScreenFixed = function (t, e) {
        if (e) {
          if (this.fsPrev) return;
          (this.fsPrev = {
            position: t.style.position,
            top: t.style.top,
            left: t.style.left,
            width: t.style.width,
            height: t.style.height,
            zIndex: t.style.zIndex,
            bodyMargin: t.ownerDocument.body.style.margin,
          }),
            (t.style.position = "fixed"),
            (t.style.top = "0px"),
            (t.style.left = "0px");
          var i = a.getDeviceDimensionsBasedOnOrientation();
          (t.style.width = i.width),
            (t.style.height = i.height),
            (t.style.zIndex = "2147483647"),
            (t.ownerDocument.body.style.margin = "0"),
            (this.fixedFullScreenElement = t);
        } else {
          if (!this.fsPrev) return;
          ((t = this.fixedFullScreenElement).style.position =
            this.fsPrev.position),
            (t.style.top = this.fsPrev.top),
            (t.style.left = this.fsPrev.left),
            (t.style.width = this.fsPrev.width),
            (t.style.height = this.fsPrev.height),
            (t.style.zIndex = this.fsPrev.zIndex),
            (t.ownerDocument.body.style.margin = this.fsPrev.bodyMargin),
            (this.fsPrev = null),
            (this.fixedFullScreenElement = null);
        }
      }),
      (a.requestFullscreen = function (t) {
        var e, i, n;
        this.isFullscreenApiEnabled()
          ? (t.requestFullscreen
              ? ((e = "fullscreenerror"), (i = "requestFullscreen"))
              : t.mozRequestFullScreen
              ? ((e = "mozfullscreenerror"), (i = "mozRequestFullScreen"))
              : t.webkitRequestFullscreen
              ? ((e = "webkitfullscreenerror"), (i = "webkitRequestFullscreen"))
              : t.webkitEnterFullscreen
              ? ((e = "webkitfullscreenerror"), (i = "webkitEnterFullscreen"))
              : t.msRequestFullscreen
              ? ((e = "MSFullscreenError"), (i = "msRequestFullscreen"))
              : this.requestFullScreenFixed(t, !0),
            e &&
              ((n = this),
              t.addEventListener(e, function () {
                n.requestFullScreenFixed(t, !0);
              }),
              t[i]()))
          : this.requestFullScreenFixed(t, !0);
      }),
      (a.cancelFullscreen = function () {
        this.requestFullScreenFixed(null, !1),
          document.cancelFullScreen
            ? document.cancelFullScreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen
            ? document.webkitCancelFullScreen()
            : document.msExitFullscreen && document.msExitFullscreen();
      }),
      (a.getFullScreenChangeEvent = function () {
        var t = document;
        return t.exitFullscreen
          ? "fullscreenchange"
          : t.webkitExitFullscreen || t.webkitCancelFullScreen
          ? "webkitfullscreenchange"
          : t.mozCancelFullScreen
          ? "mozfullscreenchange"
          : t.msExitFullscreen
          ? "MSFullscreenChange"
          : null;
      }),
      (a.getWindowWidth = function () {
        return (
          m.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        );
      }),
      (a.getWindowHeight = function () {
        return (
          m.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      }),
      (a.isResponsiveLayout = function (t, e) {
        return 100 == t && 0 == e;
      }),
      (a.getDeviceDimensionsBasedOnOrientation = function () {
        function t() {
          for (var t = 1 / 0, e = 0; e < arguments.length; e++)
            arguments[e] &&
              arguments[e] < t &&
              100 < arguments[e] &&
              (t = arguments[e]);
          return t;
        }
        var e,
          i,
          n = t(
            screen.clientWidth,
            screen.availWidth,
            screen.width,
            document.documentElement.clientWidth
          ),
          o = t(
            screen.clientHeight,
            screen.availHeight,
            screen.height,
            document.documentElement.clientHeight,
            document.body ? document.body.clientHeight : 0
          ),
          a =
            m.orientation && 90 !== m.orientation && -90 !== m.orientation
              ? ((e = o * (i = document.documentElement.clientWidth / o)),
                n * i)
              : ((e = n * (i = document.documentElement.clientWidth / n)),
                o * i);
        return { width: e, height: a };
      }),
      (a.__extends =
        (this && this.__extends) ||
        ((n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          }),
        function (t, e) {
          function i() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()));
        }));
    (a.viewabilityProto = function (s, r) {
      var a = null,
        l = 0.5,
        d = null,
        p = !1,
        c = this,
        u = "hidden",
        h = "visibilitychange",
        g = "visibilityState";
      function i() {
        var t,
          e = d.iframe ? d.baseEl : null,
          i = c.getVieabilityInfo(d.el, d.wnd, e),
          n = i.vertical.value * i.horizontal.value,
          o = i.vertical.state,
          a = i.vertical.diff;
        return (
          r &&
            ((t = s ? s.document : null), r && t && t[g] === u) &&
            ((n = 0), (o = "OUT_TAB")),
          {
            inView: l <= n,
            ratio: n,
            state: o,
            distance: i.vertical.distance,
            diff: a,
          }
        );
      }
      function v(t) {
        var e = i();
        a && a(e.inView, e.ratio, e.state, e.distance, t);
      }
      void 0 === document.hidden &&
        (void 0 !== document.msHidden
          ? ((u = "msHidden"),
            (h = "msvisibilitychange"),
            (g = "msVisibilityState"))
          : void 0 !== document.webkitHidden
          ? ((u = "webkitHidden"),
            (h = "webkitvisibilitychange"),
            (g = "webkitVisibilityState"))
          : void 0 !== document.mozHidden &&
            ((u = "mozHidden"),
            (h = "mozvisibilitychange"),
            (g = "mozVisibilityState"))),
        (this.checkViewability = function () {
          v();
        }),
        (this.start = function (t, e, i, n) {
          return (
            !p &&
            !!(d = (function (t, e) {
              var i,
                n,
                o = null,
                a = "object" == typeof t ? t : document.getElementById(t);
              try {
                m.top.location.href;
                if ((o = m.frameElement))
                  for (var s, r = m; r !== m.top; ) {
                    if (
                      (r =
                        (s = o.ownerDocument).defaultView || s.parentWindow) ===
                      m.top
                    ) {
                      (n = r), (i = o);
                      break;
                    }
                    o = r.frameElement;
                  }
              } catch (t) {
                return (p = !0), null;
              }
              if (null == o) {
                if (!(i = a)) return (p = !0), null;
                n = m;
              }
              return { el: i, wnd: n, baseEl: a, iframe: !(null == o) && e };
            })(t, n)) &&
            (i && (l = 1 < i ? i / 100 : i),
            e &&
              (d.wnd.addEventListener("resize", v, !0),
              d.wnd.addEventListener("scroll", v, !0),
              r && d.wnd.document.addEventListener(h, v),
              d.wnd.addEventListener("orientationchange", v, !0),
              (o = com.aniview.player.Utils.getFullScreenChangeEvent()),
              d.wnd.document.addEventListener(o, v, !0),
              (a = e),
              setTimeout(v, 10)),
            !0)
          );
          var o;
        }),
        (this.stop = function () {
          a &&
            (d.wnd.removeEventListener("resize", v, !0),
            d.wnd.removeEventListener("scroll", v, !0),
            d.wnd.removeEventListener("orientationchange", v, !0),
            (a = null));
        }),
        (this.get = function (t, e) {
          return !p && d ? i() : { inView: !1, ratio: 0, state: "UNKNOWN" };
        }),
        (this.getHorizontalViewability = function (t, e) {
          var i = e.innerWidth,
            n = t.getBoundingClientRect().left,
            o = t.getBoundingClientRect().right,
            a = o - n;
          return i < n
            ? { value: 0, state: "OUT_RIGHT" }
            : o <= 0
            ? { value: 0, state: "OUT_LEFT" }
            : 0 <= n && o <= i
            ? { value: 1, state: "IN_HVIEW" }
            : n < 0 && i < o
            ? { value: i / a, state: "LR_TRUNC" }
            : n < 0 && o <= i
            ? { value: o / a, state: "L_TRUNC" }
            : 0 <= n && i < o
            ? { value: (i - n) / a, state: "R_TRUNC" }
            : { value: 0, state: "OUT" };
        }),
        (this.getVerticalViewability = function (t, e, i) {
          var n = e.innerHeight,
            o = t.getBoundingClientRect().top,
            a = t.getBoundingClientRect().bottom,
            s = a - o;
          return (
            i &&
              (s =
                (a =
                  (o += i.getBoundingClientRect().top) +
                  (i.getBoundingClientRect().bottom -
                    i.getBoundingClientRect().top)) - o),
            n < o
              ? { value: 0, state: "OUT_BOTTOM", out: -1, diff: o - n }
              : a <= 0
              ? { value: 0, state: "OUT_TOP", out: -1, diff: a }
              : 0 <= o && a <= n
              ? {
                  value: 1,
                  state: "IN_VVIEW",
                  out: 0,
                  distance: n - o,
                  diff: 0,
                }
              : o < 0 && n < a
              ? { value: n / s, state: "BT_TRUNC", out: -o + a - n, diff: 0 }
              : o < 0 && a <= n
              ? { value: a / s, state: "T_TRUNC", out: -o, diff: 0 }
              : 0 <= o && n < a
              ? { value: (n - o) / s, state: "B_TRUNC", out: a - n, diff: 0 }
              : { value: 0, state: "OUT", out: -1, diff: -1e4 }
          );
        }),
        (this.getVieabilityInfo = function (t, e, i) {
          return {
            vertical: c.getVerticalViewability(t, e, i),
            horizontal: c.getHorizontalViewability(t, e, i),
          };
        });
    }),
      (a.getEl = function (t) {
        return "object" == typeof t ? t : document.getElementById(t);
      }),
      (a.startViewability = function (t, e, i, n) {
        var o = this.getEl(t);
        return (
          o.avViewability || (o.avViewability = new a.viewabilityProto(m, n)),
          o.avViewability.start(o, e, i)
        );
      }),
      (a.stopViewability = function (t) {
        var e = this.getEl(t);
        e.avViewability && e.avViewability.stop();
      }),
      (a.getViewability = function (t) {
        var e = this.getEl(t);
        if (e.avViewability) return e.avViewability.get();
      }),
      (a.setIniFloatingPropertyX = function (t) {
        this.floatingDocStyle.setProperty("--floatIniX", t.toString() + "px");
      }),
      (a.setIniFloatingPropertyY = function (t) {
        this.floatingDocStyle.setProperty("--floatIniY", t.toString() + "px");
      }),
      (a.setFinFloatingPropertyX = function (t) {
        this.floatingDocStyle.setProperty("--floatFinalX", t.toString() + "px");
      }),
      (a.setFinFloatingPropertyY = function (t) {
        this.floatingDocStyle.setProperty("--floatFinalY", t.toString() + "px");
      }),
      (a.setFloatingProperty = function (t, e) {
        this.setFinFloatingPropertyX(t), this.setFinFloatingPropertyY(e);
      }),
      (a.setFloatingAnimateProperty = function (t, e, i, n) {
        this.setIniFloatingPropertyX(t),
          this.setIniFloatingPropertyY(e),
          this.setFinFloatingPropertyX(i),
          this.setFinFloatingPropertyY(n);
      });
    var p = !(a.animateReturnPlayer = function (t, e) {
      var i,
        n = t.parentElement.getBoundingClientRect(),
        o = document.documentElement.clientWidth - n.right,
        a = e.floating.position.includes("bottom")
          ? ((i = e.floating.bottom || 0),
            document.documentElement.clientHeight - n.bottom)
          : ((i = e.floating.top || 0), n.top),
        s = e.floating.position.includes("right")
          ? e.floating.right
          : e.floating.left;
      this.setFloatingAnimateProperty(s, i, o, a),
        this.floatingDocStyle.setProperty(
          "--floatScale",
          e.floating.size.toString()
        );
      var r =
        "animation-duration:" +
        e.floating.animationDurationMS +
        "ms; animation-fill-mode: forwards;";
      switch (e.floating.position) {
        case "bottom-left":
          r +=
            "-webkit-transform-origin:bottom left; transform-origin:bottom left; animation-name:av-floating-back-bottom-left;";
          break;
        case "top-left":
          r +=
            "-webkit-transform-origin:top left; transform-origin:top left; animation-name:av-floating-back-top-left;";
          break;
        case "top-right":
          r +=
            "-webkit-transform-origin:top right; transform-origin:top right; animation-name:av-floating-back-top-right;";
          break;
        case "bottom-right":
          r +=
            "-webkit-transform-origin:bottom right; transform-origin:bottom right; animation-name:av-floating-back-bottom-right;";
      }
      return r;
    });
    (a.setFloating = function (t, e, i, n, o, a) {
      var s, r, l, d;
      e
        ? (((i.floating.floatOnBottom ||
            ("T_TRUNC" !== n && "OUT_TOP" !== n)) &&
            !i.floating.floatOnBottom) ||
            (i.floating.animate
              ? ((t.style.cssText = ""),
                (s = null),
                (r = 0),
                (r = i.floating.position.includes("bottom")
                  ? ((s =
                      document.documentElement.clientHeight -
                      t.getBoundingClientRect().bottom),
                    i.floating.bottom || 0)
                  : ((s = t.getBoundingClientRect().top), i.floating.top || 0)),
                (l =
                  document.documentElement.clientWidth -
                  t.getBoundingClientRect().right),
                (d = i.floating.position.includes("right")
                  ? i.floating.right || 0
                  : i.floating.left || 0),
                this.setFloatingAnimateProperty(l, s, d, r),
                this.floatingDocStyle.setProperty(
                  "--floatScale",
                  i.floating.size.toString()
                ))
              : i.floating.resize &&
                a(i.width * i.floating.size, i.height * i.floating.size, !0),
            (t.style.cssText = i.floatingCSS),
            (p = !0)),
          t.classList.add("av-floating"), 
          t.querySelector('.av-playlist-overlay') && t.querySelector('.av-playlist-overlay').classList.add('avp-hidden'))
          // modified ( add: t.querySelector('.av-playlist-overlay') && t.querySelector('.av-playlist-overlay').classList.add('avp-hidden');)
        : (!p ||
          !i.floating.animate ||
          (!i.floating.floatOnBottom && !o) ||
          !t.parentElement ||
          (t.parentElement.getBoundingClientRect().bottom >=
            t.getBoundingClientRect().bottom &&
            !i.floating.floatOnBottom &&
            i.floating.position.includes("bottom")) ||
          (t.parentElement.getBoundingClientRect().bottom >=
            t.getBoundingClientRect().bottom + t.clientHeight &&
            !i.floating.floatOnBottom)
            ? ((t.style.cssText = ""), i.floating.resize && a())
            : (t.style.cssText = this.animateReturnPlayer(t, i)),
          t.classList.remove("av-floating"),
          t.querySelector('.av-playlist-overlay') && t.querySelector('.av-playlist-overlay').classList.remove('avp-hidden'));
          // modified ( add: t.querySelector('.av-playlist-overlay') && t.querySelector('.av-playlist-overlay').classList.remove('avp-hidden');)
    }),
      (a.isFloating = function (t) {
        return t && t.floating && 0 < t.floating.size;
      }),
      (a.setFloatingCSS = function (t) {
        if (!t.floatingCSS)
          if (t.floating.floatingCSS) t.floating = t.floating.floatingCSS;
          else {
            var e, i;
            switch (
              (t.floating.right || (t.floating.right = 0),
              t.floating.left || (t.floating.left = 0),
              t.floating.top || (t.floating.top = 0),
              t.floating.bottom || (t.floating.bottom = 0),
              t.floating.position || (t.floating.position = "bottom-right"),
              !t.floating.animate ||
                (null ===
                  (e = document.getElementsByTagName("head")[0]).querySelector(
                    "#av_animate_css"
                  ) &&
                  (((i = document.createElement("style")).type = "text/css"),
                  (i.id = "av_animate_css"),
                  i.appendChild(
                    document.createTextNode(
                      "{--floatScale;--floatIniX;--floatIniY;--floatFinalX;--floatFinalY;}@keyframes av-floating-away-bottom-right{0%{bottom:var(--floatIniY); right:var(--floatIniX); -webkit-transform-origin:bottom right;}100%{transform: scale(var(--floatScale)); -webkit-transform-origin:bottom right; bottom: var(--floatFinalY); right: var(--floatFinalX);}}@keyframes av-floating-away-top-right{0%{top:var(--floatIniY); right:var(--floatIniX); -webkit-transform-origin:top right;}100%{transform: scale(var(--floatScale)); -webkit-transform-origin:top right; top: var(--floatFinalY); right: var(--floatFinalX);}}@keyframes av-floating-away-bottom-left{0%{bottom:var(--floatIniY); right:var(--floatIniX); -webkit-transform-origin:bottom left;}100%{transform: scale(var(--floatScale)); -webkit-transform-origin:bottom left; bottom: var(--floatFinalY); right: var(--floatFinalX);}}@keyframes av-floating-away-top-left{0%{top:var(--floatIniY); right:var(--floatIniX); -webkit-transform-origin:top left;}100%{transform: scale(var(--floatScale)); -webkit-transform-origin:top left; top: var(--floatFinalY); right: var(--floatFinalX);}}@keyframes av-floating-back-bottom-left{0%{ bottom: var(--floatIniY); left:var(--floatIniX);transform: scale(var(--floatScale)); position: fixed}98%{bottom:var(--floatFinalY); right:var(--floatFinalX); transform: scale(1); position: fixed}100%{position: static;}}@keyframes av-floating-back-top-left{0%{ top: var(--floatIniY); left:var(--floatIniX);transform: scale(var(--floatScale)); position: fixed}98%{top:var(--floatFinalY); right:var(--floatFinalX); transform: scale(1); position: fixed}100%{position: static;}}@keyframes av-floating-back-top-right{0%{ top: var(--floatIniY); right:var(--floatIniX);transform: scale(var(--floatScale)); position: fixed}98%{top:var(--floatFinalY); right:var(--floatFinalX); transform: scale(1); position: fixed}100%{position: static;}}@keyframes av-floating-back-bottom-right{0%{ bottom: var(--floatIniY); right:var(--floatIniX);transform: scale(var(--floatScale)); position: fixed}98%{bottom:var(--floatFinalY); right:var(--floatFinalX); transform: scale(1); position: fixed}100%{position: static;}}}"
                    )
                  ),
                  e.appendChild(i))),
              t.floating.animate &&
                !t.floating.animationDurationMS &&
                (t.floating.animationDurationMS = 750),
              (this.floatingDocStyle = document.getElementById(
                t.position
              ).style),
              t.floating.position)
            ) {
              case "bottom-left":
              case "bottom":
                (t.floatingCSS =
                  "bottom:" +
                  t.floating.bottom +
                  "px; left:" +
                  t.floating.left +
                  "px; -webkit-transform-origin:bottom left; transform-origin:bottom left;"),
                  t.floating.animate &&
                    ((t.floatingCSS +=
                      " animation-name: av-floating-away-bottom-left;"),
                    this.setFloatingProperty(
                      t.floating.left,
                      t.floating.bottom
                    ));
                break;
              case "top-left":
              case "top":
                (t.floatingCSS =
                  "top:" +
                  t.floating.top +
                  "px; left:" +
                  t.floating.left +
                  "px; -webkit-transform-origin:top left; transform-origin:top left;"),
                  t.floating.animate &&
                    ((t.floatingCSS +=
                      " animation-name: av-floating-away-top-left;"),
                    this.setFloatingProperty(t.floating.left, t.floating.top));
                break;
              case "top-right":
                (t.floatingCSS =
                  "top:" +
                  t.floating.top +
                  "px; right:" +
                  t.floating.right +
                  "px; -webkit-transform-origin:top right; transform-origin:top right;"),
                  t.floating.animate &&
                    ((t.floatingCSS +=
                      " animation-name: av-floating-away-top-right;"),
                    this.setFloatingProperty(t.floating.right, t.floating.top));
                break;
              case "bottom-right":
                (t.floatingCSS =
                  "bottom:" +
                  t.floating.bottom +
                  "px; right:" +
                  t.floating.right +
                  "px; -webkit-transform-origin:bottom right; transform-origin:bottom right;"),
                  t.floating.animate &&
                    ((t.floatingCSS +=
                      " animation-name: av-floating-away-bottom-right;"),
                    this.setFloatingProperty(
                      t.floating.right,
                      t.floating.bottom
                    ));
            }
            t.floating.resize
              ? (t.floatingCSS += "z-index:10000001;position:fixed;")
              : t.floating.animate
              ? (t.floatingCSS +=
                  " animation-duration:" +
                  t.floating.animationDurationMS +
                  "ms; z-index:10000001;position:fixed; animation-fill-mode:forwards; transition: width 20s, height 20s;")
              : (t.floatingCSS +=
                  "z-index:10000001;position:fixed; transform:scale(" +
                  t.floating.size +
                  "); -webkit-transform:scale(" +
                  t.floating.size +
                  ");");
          }
      }),
      (a.isSticky = function(){}