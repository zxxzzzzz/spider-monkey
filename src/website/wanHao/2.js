!(function (e) {
  function t(t) {
    for (var n, i, o = t[0], a = t[1], s = 0, l = []; s < o.length; s++)
      (i = o[s]), Object.prototype.hasOwnProperty.call(r, i) && r[i] && l.push(r[i][0]), (r[i] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (u && u(t); l.length; ) l.shift()();
  }
  var n = {},
    r = { 3: 0 };
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, i) {
          n = r[e] = [t, i];
        });
        t.push((n[2] = o));
        var a,
          s = document.createElement('script');
        (s.charset = 'utf-8'),
          (s.timeout = 120),
          i.nc && s.setAttribute('nonce', i.nc),
          (s.src = (function (e) {
            return (
              i.p +
              'mi-' +
              ({
                0: 'accordion',
                1: 'carousel',
                2: 'footer',
                4: 'gallery',
                5: 'gauge',
                6: 'header',
                7: 'hsia-nav',
                8: 'lazy-load-images',
                9: 'responsive-menu',
                10: 'scroll-nav',
                11: 'select',
                12: 'slider',
                13: 'ss',
                14: 'tile-error',
                15: 'vendors~gauge',
                16: 'vendors~picturefill',
                17: 'vendors~video',
                18: 'video',
              }[e] || e) +
              '.js'
            );
          })(e));
        var u = new Error();
        a = function (t) {
          (s.onerror = s.onload = null), clearTimeout(l);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var i = t && ('load' === t.type ? 'missing' : t.type),
                o = t && t.target && t.target.src;
              (u.message = 'Loading chunk ' + e + ' failed.\n(' + i + ': ' + o + ')'),
                (u.name = 'ChunkLoadError'),
                (u.type = i),
                (u.request = o),
                n[1](u);
            }
            r[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          a({ type: 'timeout', target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((i.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ''),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var o = (window.miJsonp = window.miJsonp || []),
    a = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var s = 0; s < o.length; s++) t(o[s]);
  var u = a;
  i((i.s = 18));
})({
  18: function (e, t, n) {
    (window.$ = window.jQuery = n(3)), n(19);
    var r = n(4);
    n.p = window.MI_S2_RESOURCE_BASE_URL || r.resourceBaseUrl;
    var i = function () {
      ($.fn.exists = function () {
        return $(this).length > 0;
      }),
        $(r.selectors.SELECT).exists() &&
          n
            .e(11)
            .then(
              function () {
                var e = n(5);
                try {
                  e.init();
                } catch (e) {}
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.FOOTER).exists() &&
          n
            .e(2)
            .then(
              function () {
                var e = n(6);
                try {
                  e.init();
                } catch (e) {}
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.CAROUSEL).exists() &&
          n
            .e(1)
            .then(
              function () {
                n(0).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.SLIDER).exists() &&
          n
            .e(12)
            .then(
              function () {
                n(7).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.GAUGE).exists() &&
          Promise.all([n.e(15), n.e(5)])
            .then(
              function () {
                n(1).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.SPLIT_GAUGE).exists() &&
          Promise.all([n.e(15), n.e(5)])
            .then(
              function () {
                n(1).initSplit();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.MENU).exists() &&
          n
            .e(9)
            .then(
              function () {
                n(8).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.GALLERY).exists() &&
          ($(r.selectors.GALLERY + ' ' + r.selectors.CAROUSEL).exists()
            ? n
                .e(1)
                .then(
                  function () {
                    n(0).init(),
                      n
                        .e(4)
                        .then(
                          function () {
                            n(2).init();
                          }.bind(null, n)
                        )
                        .catch(n.oe);
                  }.bind(null, n)
                )
                .catch(n.oe)
            : n
                .e(4)
                .then(
                  function () {
                    n(2).init();
                  }.bind(null, n)
                )
                .catch(n.oe)),
        $(r.selectors.TILE_ERROR).exists() &&
          n
            .e(14)
            .then(
              function () {
                n(9).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.STICKY_CONTAINER).exists() &&
          n
            .e(13)
            .then(
              function () {
                n(10).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.ACCORDION).exists() &&
          n
            .e(0)
            .then(
              function () {
                n(11).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.PICTUREFILL).exists() &&
          n
            .e(16)
            .then(
              function () {
                n(12);
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.VIDEO).exists() &&
          Promise.all([n.e(17), n.e(18)])
            .then(
              function () {
                n(13).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.HEADER).exists() &&
          n
            .e(6)
            .then(
              function () {
                n(14).initHeader();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.SCROLL_NAV).exists() &&
          n
            .e(10)
            .then(
              function () {
                n(15).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.HSIA_NAV).exists() &&
          n
            .e(7)
            .then(
              function () {
                n(16).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(r.selectors.LAZY_LOAD_IMAGES).exists() &&
          n
            .e(8)
            .then(
              function () {
                n(17).init();
              }.bind(null, n)
            )
            .catch(n.oe),
        $(document)
          .off(r.events.GLOBAL_CLICK_DISABLE)
          .on(r.events.GLOBAL_CLICK_DISABLE, r.selectors.GLOBAL_DISABLE, function (e) {
            var t = $(this).attr('href'),
              n = $(this).hasClass('mi-prevent-global-disable');
            if ((t && t.startsWith('#')) || n) return !0;
            $(this).addClass(r.class.GLOBAL_CSS_DISABLE);
          });
    };
    window.$(document).ready(i),
      window.$(document).off('GLOBAL_ELEMENTS_REINIT.mi-foundation').on('GLOBAL_ELEMENTS_REINIT.mi-foundation', i);
    var o,
      a = function () {
        window
          .$(document)
          .find(r.utils.COMPONENT_RESOLVE_SELECTOR.join())
          .off(r.utils.COMPONENT_CLICK_RESOLVE_EVENT)
          .on(r.utils.COMPONENT_CLICK_RESOLVE_EVENT, function () {
            if (($(this).off(r.utils.COMPONENT_CLICK_RESOLVE_EVENT), $(this).data(r.utils.COMPONENT_PARENT_TRIGGER_ATTR))) return !0;
            var e = [];
            $(this).data(r.utils.COMPONENT_PARENT_TRIGGER_ATTR, !0),
              $(this)
                .find(r.utils.COMPONENT_SELECTOR)
                .each(function (t, n) {
                  e.push(n[r.utils.ID]);
                }),
              e.length && window.MI_PubSub && window.MI_PubSub.publish(r.utils.GLOBAL_RENDER, [e]);
          });
      };
    function s(e) {
      var t = [];
      (e = e || $('html')[0]),
        $(r.utils.COMPONENT_SCROLL_RESOLVE_SELECTOR).each(function (n, i) {
          if (i.dataset[r.utils.COMPONENT_PARENT_TRIGGER_ATTR]) return !0;
          e.clientHeight + e.scrollTop + r.utils.EXTENDED_SCROLL_VIEWPORT_SIZE > i.parentElement.getBoundingClientRect().top &&
            ((i.dataset[r.utils.COMPONENT_PARENT_TRIGGER_ATTR] = !0), t.push(i[r.utils.ID]));
        }),
        t.length && window.MI_PubSub && window.MI_PubSub.publish(r.utils.GLOBAL_RENDER, [t]);
    }
    window.$(document).ready(a),
      window
        .$(document)
        .off('GLOBAL_ELEMENTS_REINIT.mi-clickResolveHandler')
        .on('GLOBAL_ELEMENTS_REINIT.mi-clickResolveHandler', function () {
          u(), a();
        }),
      window
        .$(document)
        .off(r.utils.COMPONENT_SCROLL_RESOLVE_EVENT)
        .on(r.utils.COMPONENT_SCROLL_RESOLVE_EVENT, function (e) {
          o && window.clearTimeout(o),
            (o = setTimeout(
              function () {
                s(this.currentTarget.scrollingElement);
              }.bind(e),
              200
            ));
        }),
      $(document).ready(s.bind(this, $(document)[0].scrollingElement));
    var u = function () {
      Array.prototype.slice.call(window.document.querySelectorAll(r.utils.COMPONENT_SELECTOR)).forEach(function (e) {
        if (!$(e.nextSibling).hasClass(r.utils.COMPONENT_LOADER_CSS_CLASS)) {
          var t =
            '<div class="l-pos-rel ' +
            r.utils.COMPONENT_LOADER_CSS_CLASS +
            ' ' +
            r.utils.COMPONENT_PARENT_CSS_PREFIX +
            e.dataset[r.utils.COMPONENT_RENDER_ACTION_ATTR] +
            '">                                         <div class="l-freeze-panel">                                             <div class="l-loading-panel" tabindex="0">                                                 <div class="l-icon-container">                                                     <span class="t-loading-icon"></span>                                                     <span class="t-loading-icon"></span>                                                     <span class="t-loading-icon"></span>                                                     <span class="t-loading-icon"></span>                                                     <span class="t-loading-icon"></span>                                                 </div>                                                 <p class="t-loading-text">Loading...</p>                                             </div>                                         </div>                                     </div>';
          e.insertAdjacentHTML('afterend', t);
        }
      });
    };
    function l(e) {
      var t = 0,
        n = $('.pci-data-frame').contents(),
        i = n.length ? n.find('body') : $('body'),
        o = n.length ? n.find('html') : $('html');
      e.type == r.frameConstants.LOAD_EVENT
        ? (t = i.find('.tile-credit-card-guest').outerHeight())
        : o.find(r.frameConstants.COMPONENT_SELECTOR).each(function () {
            t += this.clientHeight;
          }),
        i.find('.is-hybrid').length
          ? i.find('#credit-card-section-container').is(':visible') &&
            (!i.find('.is-hybrid .show-billing-zip-code-section').hasClass('is-hidden') ||
              (i.find('.show-cvv-section').length && !i.find('.show-cvv-section').hasClass('is-hidden')) ||
              (t += 80))
          : (!i.find('.show-cvv-section').hasClass('is-hidden') &&
              (i.find('.show-cvv-section').length ||
                i.find('.form-message-highlight').length ||
                i.find('#purpose').length ||
                i.find('.t-save-pref').length)) ||
            i.find('.tile-credit-card-quick-groups').length ||
            (t += 80),
        $(r.frameConstants.FRAME_SELECTOR_CLASS, window.parent.document).innerHeight(t + r.frameConstants.IFRAME_EXTENDED_HEIGHT);
    }
    function c() {
      var e = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty('--vh', e + 'px');
    }
    window.$(document).ready(u),
      window.addEventListener('message', function (e) {
        var t = e.data,
          n = t.data && JSON.parse(t.data),
          i = t.event,
          o = (function (e, t) {
            if (window.MI_PubSub && -1 !== Object.values(window.MI_PubSub.ariesPubSub.pubSubMessageKeys).indexOf(t)) {
              if (e) {
                for (var n = 0; n < e.length; n++)
                  if (
                    'function' == typeof e ||
                    ('object' == typeof HTMLElement
                      ? e instanceof HTMLElement
                      : e && 'object' == typeof e && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName)
                  )
                    return !1;
                return !0;
              }
              return !0;
            }
            return !1;
          })(n, i);
        if (($(r.frameConstants.FRAME_CLASS).innerHeight(3e3), i === r.frameConstants.RESIZE_FRAME_EVENT))
          return $(r.frameConstants.FRAME_SELECTOR_CLASS).innerHeight(n), l(e), !0;
        o && window.MI_PubSub && window.MI_PubSub.publish(i, n);
      }),
      $(window).on(r.frameConstants.IFRAME_SUBSCRIBED_EVENTS, function (e) {
        l(e);
      }),
      window.$(document).ready(c),
      window.addEventListener('resize', c);
  },
  19: function (e, t) {
    (showLog = !1),
      (function (e) {
        var t,
          n = {},
          r = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
          i = r.length,
          o = e.toLowerCase(),
          a = function (e) {
            return RegExp(e, 'i').test(o);
          },
          s = 'gecko',
          u = 'webkit',
          l = 'chrome',
          c = 'firefox',
          f = 'safari',
          d = 'opera',
          p = 'android',
          h = 'blackberry',
          g = document.documentElement,
          m = [
            (!/opera|webtv/i.test(o) && /msie\s(\d+)/.test(o)) || /trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.test(o)
              ? 'ie ie' + (/trident\/4\.0/.test(o) ? '8' : '11.0' == RegExp.$1 ? '11' : RegExp.$1)
              : a('firefox/')
              ? s +
                ' ' +
                c +
                (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(o) ? ' ' + c + RegExp.$2 + ' ' + c + RegExp.$2 + '_' + RegExp.$4 : '')
              : a('gecko/')
              ? s
              : a('opera')
              ? d +
                (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(o)
                  ? ' ' + d + RegExp.$2 + ' ' + d + RegExp.$2 + '_' + RegExp.$4
                  : /opera(\s|\/)(\d+)\.(\d+)/.test(o)
                  ? ' ' + d + RegExp.$2 + ' ' + d + RegExp.$2 + '_' + RegExp.$3
                  : '')
              : a('konqueror')
              ? 'konqueror'
              : a('blackberry')
              ? h +
                (/Version\/(\d+)(\.(\d+)+)/i.test(o)
                  ? ' ' + h + RegExp.$1 + ' ' + h + RegExp.$1 + RegExp.$2.replace('.', '_')
                  : /Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(o)
                  ? ' ' + h + RegExp.$2 + (RegExp.$3 ? ' ' + h + RegExp.$2 + RegExp.$3 : '')
                  : '')
              : a('android')
              ? p +
                (/Version\/(\d+)(\.(\d+))+/i.test(o) ? ' ' + p + RegExp.$1 + ' ' + p + RegExp.$1 + RegExp.$2.replace('.', '_') : '') +
                (/Android (.+); (.+) Build/i.test(o) ? ' device_' + RegExp.$2.replace(/ /g, '_').replace(/-/g, '_') : '')
              : a('chrome')
              ? u +
                ' ' +
                l +
                (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(o)
                  ? ' ' + l + RegExp.$2 + (RegExp.$4 > 0 ? ' ' + l + RegExp.$2 + '_' + RegExp.$4 : '')
                  : '')
              : a('iron')
              ? u + ' iron'
              : a('applewebkit/')
              ? u +
                ' ' +
                f +
                (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(o)
                  ? ' ' + f + RegExp.$2 + ' ' + f + RegExp.$2 + RegExp.$3.replace('.', '_')
                  : / Safari\/(\d+)/i.test(o)
                  ? '419' == RegExp.$1 || '417' == RegExp.$1 || '416' == RegExp.$1 || '412' == RegExp.$1
                    ? ' safari2_0'
                    : '312' == RegExp.$1
                    ? ' safari1_3'
                    : '125' == RegExp.$1
                    ? ' safari1_2'
                    : '85' == RegExp.$1
                    ? ' safari1_0'
                    : ''
                  : '')
              : a('mozilla/')
              ? s
              : '',
            a('android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk') ? 'mobile' : '',
            a('j2me')
              ? 'j2me'
              : a('ipad|ipod|iphone')
              ? (/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(o)
                  ? 'ios' +
                    (function (e, t) {
                      for (var n = (t = t.replace('.', '_')).indexOf('_'), r = ''; n > 0; )
                        (r += ' ' + e + t.substring(0, n)), (n = t.indexOf('_', n + 1));
                      return (r += ' ' + e + t);
                    })('ios', RegExp.$2)
                  : '') +
                ' ' +
                (/(ip(ad|od|hone))/gi.test(o) ? RegExp.$1 : '')
              : a('playbook')
              ? 'playbook'
              : a('kindle|silk')
              ? 'kindle'
              : a('playbook')
              ? 'playbook'
              : a('mac')
              ? 'mac' + (/mac os x ((\d+)[.|_](\d+))/.test(o) ? ' mac' + RegExp.$2 + ' mac' + RegExp.$1.replace('.', '_') : '')
              : a('win')
              ? 'win' +
                (a('windows nt 6.2')
                  ? ' win8'
                  : a('windows nt 6.1')
                  ? ' win7'
                  : a('windows nt 6.0')
                  ? ' vista'
                  : a('windows nt 5.2') || a('windows nt 5.1')
                  ? ' win_xp'
                  : a('windows nt 5.0')
                  ? ' win_2k'
                  : a('windows nt 4.0') || a('WinNT4.0')
                  ? ' win_nt'
                  : '')
              : a('freebsd')
              ? 'freebsd'
              : a('x11|linux')
              ? 'linux'
              : '',
            /[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(o)
              ? ('lang_' + RegExp.$2).replace('-', '_') + ('' != RegExp.$3 ? (' lang_' + RegExp.$1).replace('-', '_') : '')
              : '',
            a('ipad|iphone|ipod') && !a('safari') ? 'ipad_app' : '',
          ];
        function v() {
          var e = window.outerWidth || g.clientWidth,
            t = window.outerHeight || g.clientHeight;
          (n.orientation = e < t ? 'portrait' : 'landscape'),
            (g.className = g.className.replace(/ ?orientation_\w+/g, '').replace(/ [min|max|cl]+[w|h]_\d+/g, ''));
          for (var o = i - 1; o >= 0; o--)
            if (e >= r[o]) {
              n.maxw = r[o];
              break;
            }
          for (var a in ((widthClasses = ''), n)) widthClasses += ' ' + a + '_' + n[a];
          return (g.className = g.className + widthClasses), widthClasses;
        }
        (window.onresize = v), v(), (t = window.devicePixelRatio > 1), (g.className += t ? ' retina' : ' non-retina');
        var y = m.join(' ') + ' js ';
        g.className = (y + g.className.replace(/\b(no[-|_]?)?js\b/g, '')).replace(/^ /, '').replace(/ +/g, ' ');
      })(navigator.userAgent);
  },
  3: function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */ !(function (t, n) {
      'use strict';
      'object' == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document) throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })('undefined' != typeof window ? window : this, function (n, i) {
      'use strict';
      var o = [],
        a = Object.getPrototypeOf,
        s = o.slice,
        u = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        l = o.push,
        c = o.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        h = p.toString,
        g = h.call(Object),
        m = {},
        v = function (e) {
          return 'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        x = n.document,
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function E(e, t, n) {
        var r,
          i,
          o = (n = n || x).createElement('script');
        if (((o.text = e), t)) for (r in b) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function w(e) {
        return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? f[d.call(e)] || 'object' : typeof e;
      }
      var T = function (e, t) {
        return new T.fn.init(e, t);
      };
      function C(e) {
        var t = !!e && 'length' in e && e.length,
          n = w(e);
        return !v(e) && !y(e) && ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e));
      }
      (T.fn = T.prototype =
        {
          jquery: '3.6.0',
          constructor: T,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: l,
          sort: o.sort,
          splice: o.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
            for (
              'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                'object' == typeof a || v(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    '__proto__' !== t &&
                      a !== r &&
                      (l && r && (T.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}),
                          (i = !1),
                          (a[t] = T.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        T.extend({
          expando: 'jQuery' + ('3.6.0' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || '[object Object]' !== d.call(e)) &&
              (!(t = a(e)) || ('function' == typeof (n = p.call(t, 'constructor') && t.constructor) && h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            E(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? T.merge(n, 'string' == typeof e ? [e] : e) : l.call(n, e)), n;
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return u(a);
          },
          guid: 1,
          support: m,
        }),
        'function' == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]),
        T.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
          f['[object ' + t + ']'] = t.toLowerCase();
        });
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m,
            v,
            y,
            x,
            b = 'sizzle' + 1 * new Date(),
            E = e.document,
            w = 0,
            T = 0,
            C = ue(),
            S = ue(),
            N = ue(),
            A = ue(),
            L = function (e, t) {
              return e === t && (f = !0), 0;
            },
            R = {}.hasOwnProperty,
            O = [],
            _ = O.pop,
            k = O.push,
            D = O.push,
            j = O.slice,
            I = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            P =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            $ = '[\\x20\\t\\r\\n\\f]',
            M = '(?:\\\\[\\da-fA-F]{1,6}' + $ + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
            q =
              '\\[' +
              $ +
              '*(' +
              M +
              ')(?:' +
              $ +
              '*([*^$|!~]?=)' +
              $ +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              M +
              '))|)' +
              $ +
              '*\\]',
            H = ':(' + M + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + q + ')*)|.*)\\)|)',
            B = new RegExp($ + '+', 'g'),
            F = new RegExp('^' + $ + '+|((?:^|[^\\\\])(?:\\\\.)*)' + $ + '+$', 'g'),
            W = new RegExp('^' + $ + '*,' + $ + '*'),
            G = new RegExp('^' + $ + '*([>+~]|' + $ + ')' + $ + '*'),
            V = new RegExp($ + '|>'),
            U = new RegExp(H),
            z = new RegExp('^' + M + '$'),
            X = {
              ID: new RegExp('^#(' + M + ')'),
              CLASS: new RegExp('^\\.(' + M + ')'),
              TAG: new RegExp('^(' + M + '|[*])'),
              ATTR: new RegExp('^' + q),
              PSEUDO: new RegExp('^' + H),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  $ +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  $ +
                  '*(?:([+-]|)' +
                  $ +
                  '*(\\d+)|))' +
                  $ +
                  '*\\)|)',
                'i'
              ),
              bool: new RegExp('^(?:' + P + ')$', 'i'),
              needsContext: new RegExp(
                '^' + $ + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + $ + '*((?:-\\d)?\\d*)' + $ + '*\\)|)(?=[^-]|$)',
                'i'
              ),
            },
            Y = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp('\\\\[\\da-fA-F]{1,6}' + $ + '?|\\\\([^\\r\\n\\f])', 'g'),
            ne = function (e, t) {
              var n = '0x' + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t ? ('\0' === e ? '�' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ') : '\\' + e;
            },
            oe = function () {
              d();
            },
            ae = be(
              function (e) {
                return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
              },
              { dir: 'parentNode', next: 'legend' }
            );
          try {
            D.apply((O = j.call(E.childNodes)), E.childNodes), O[E.childNodes.length].nodeType;
          } catch (e) {
            D = {
              apply: O.length
                ? function (e, t) {
                    k.apply(e, j.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              l,
              c,
              f,
              h,
              v,
              y = t && t.ownerDocument,
              E = t ? t.nodeType : 9;
            if (((r = r || []), 'string' != typeof e || !e || (1 !== E && 9 !== E && 11 !== E))) return r;
            if (!i && (d(t), (t = t || p), g)) {
              if (11 !== E && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === E) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                } else {
                  if (f[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                  if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(o)), r;
                }
              if (n.qsa && !A[e + ' '] && (!m || !m.test(e)) && (1 !== E || 'object' !== t.nodeName.toLowerCase())) {
                if (((v = e), (y = t), 1 === E && (V.test(e) || G.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) ||
                      ((c = t.getAttribute('id')) ? (c = c.replace(re, ie)) : t.setAttribute('id', (c = b))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (c ? '#' + c : ':scope') + ' ' + xe(h[s]);
                  v = h.join(',');
                }
                try {
                  return D.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  c === b && t.removeAttribute('id');
                }
              }
            }
            return u(e.replace(F, '$1'), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], (t[n + ' '] = i);
            };
          }
          function le(e) {
            return (e[b] = !0), e;
          }
          function ce(e) {
            var t = p.createElement('fieldset');
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split('|'), i = n.length; i--; ) r.attrHandle[n[i]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return 'input' === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ('input' === n || 'button' === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e;
            };
          }
          function me(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !Y.test(t || (n && n.nodeName) || 'HTML');
            }),
          (d = se.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : E;
              return a != p && 9 === a.nodeType && a.documentElement
                ? ((h = (p = a).documentElement),
                  (g = !o(p)),
                  E != p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener ? i.addEventListener('unload', oe, !1) : i.attachEvent && i.attachEvent('onunload', oe)),
                  (n.scope = ce(function (e) {
                    return (
                      h.appendChild(e).appendChild(p.createElement('div')),
                      void 0 !== e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length
                    );
                  })),
                  (n.attributes = ce(function (e) {
                    return (e.className = 'i'), !e.getAttribute('className');
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return e.appendChild(p.createComment('')), !e.getElementsByTagName('*').length;
                  })),
                  (n.getElementsByClassName = Q.test(p.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (h.appendChild(e).id = b), !p.getElementsByName || !p.getElementsByName(b).length;
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute('id') === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                              if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ('*' === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (m = []),
                  (n.qsa = Q.test(p.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length && m.push('[*^$]=' + $ + '*(?:\'\'|"")'),
                        e.querySelectorAll('[selected]').length || m.push('\\[' + $ + '*(?:value|' + P + ')'),
                        e.querySelectorAll('[id~=' + b + '-]').length || m.push('~='),
                        (t = p.createElement('input')).setAttribute('name', ''),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || m.push('\\[' + $ + '*name' + $ + '*=' + $ + '*(?:\'\'|"")'),
                        e.querySelectorAll(':checked').length || m.push(':checked'),
                        e.querySelectorAll('a#' + b + '+*').length || m.push('.#.+[+~]'),
                        e.querySelectorAll('\\\f'),
                        m.push('[\\r\\n\\f]');
                    }),
                    ce(function (e) {
                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement('input');
                      t.setAttribute('type', 'hidden'),
                        e.appendChild(t).setAttribute('name', 'D'),
                        e.querySelectorAll('[name=d]').length && m.push('name' + $ + '*[*^$|!~]?='),
                        2 !== e.querySelectorAll(':enabled').length && m.push(':enabled', ':disabled'),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length && m.push(':enabled', ':disabled'),
                        e.querySelectorAll('*,:x'),
                        m.push(',.*:');
                    })),
                  (n.matchesSelector = Q.test(
                    (y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, '*')), y.call(e, "[s!='']:x"), v.push('!=', H);
                    }),
                  (m = m.length && new RegExp(m.join('|'))),
                  (v = v.length && new RegExp(v.join('|'))),
                  (t = Q.test(h.compareDocumentPosition)),
                  (x =
                    t || Q.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (L = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                          (!n.sortDetached && t.compareDocumentPosition(e) === r)
                            ? e == p || (e.ownerDocument == E && x(E, e))
                              ? -1
                              : t == p || (t.ownerDocument == E && x(E, t))
                              ? 1
                              : c
                              ? I(c, e) - I(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
                        if (i === o) return de(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r ? de(a[r], s[r]) : a[r] == E ? -1 : s[r] == E ? 1 : 0;
                      }),
                  p)
                : p;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if ((d(e), n.matchesSelector && g && !A[t + ' '] && (!v || !v.test(t)) && (!m || !m.test(t))))
              try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
              } catch (e) {
                A(t, !0);
              }
            return se(t, p, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), x(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o = i && R.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
          }),
          (se.escape = function (e) {
            return (e + '').replace(re, ie);
          }),
          (se.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(L), f)) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = se.getText =
            function (e) {
              var t,
                n = '',
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ('string' == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          ((r = se.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: X,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    'nth' === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return X.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || '')
                        : n &&
                          U.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(')', n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return '*' === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = C[e + ' '];
                  return (
                    t ||
                    ((t = new RegExp('(^|' + $ + ')' + e + '(' + $ + '|$)')) &&
                      C(e, function (e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute('class')) || ''
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = se.attr(r, e);
                    return null == i
                      ? '!=' === t
                      : !t ||
                          ((i += ''),
                          '=' === t
                            ? i === n
                            : '!=' === t
                            ? i !== n
                            : '^=' === t
                            ? n && 0 === i.indexOf(n)
                            : '*=' === t
                            ? n && i.indexOf(n) > -1
                            : '$=' === t
                            ? n && i.slice(-n.length) === n
                            : '~=' === t
                            ? (' ' + i.replace(B, ' ') + ' ').indexOf(n) > -1
                            : '|=' === t && (i === n || i.slice(0, n.length + 1) === n + '-'));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = 'nth' !== e.slice(0, 3),
                    a = 'last' !== e.slice(-4),
                    s = 'of-type' === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          d,
                          p,
                          h,
                          g = o !== a ? 'nextSibling' : 'previousSibling',
                          m = t.parentNode,
                          v = s && t.nodeName.toLowerCase(),
                          y = !u && !s,
                          x = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (d = t; (d = d[g]); ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                              h = g = 'only' === e && !h && 'nextSibling';
                            }
                            return !0;
                          }
                          if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                            for (
                              x =
                                (p =
                                  (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w &&
                                  l[1]) && l[2],
                                d = p && m.childNodes[p];
                              (d = (++p && d && d[g]) || (x = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++x && d === t) {
                                c[e] = [w, p, x];
                                break;
                              }
                          } else if (
                            (y &&
                              (x = p =
                                (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && l[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                              ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) ||
                                !++x ||
                                (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [w, x]), d !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
                  return i[b]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, '', t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; ) e[(r = I(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(F, '$1'));
                  return r[b]
                    ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    z.test(e || '') || se.error('unsupported lang: ' + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                          return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return K.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ('input' === t && 'button' === e.type) || 'button' === t;
                },
                text: function (e) {
                  var t;
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'text' === e.type &&
                    (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                  );
                },
                first: me(function () {
                  return [0];
                }),
                last: me(function (e, t) {
                  return [t - 1];
                }),
                eq: me(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: me(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && 'parentNode' === o,
              s = T++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    d = [w, s];
                  if (u) {
                    for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase()))
                          t = t[r] || t;
                        else {
                          if ((l = c[o]) && l[0] === w && l[1] === s) return (d[2] = l[2]);
                          if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function Ee(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function Te(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Te(r)),
              i && !i[b] && (i = Te(i, o)),
              le(function (o, a, s, u) {
                var l,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || '*', s.nodeType ? [s] : s, []),
                  m = !e || (!o && t) ? g : we(g, d, e, s, u),
                  v = n ? (i || (o ? e : h || r) ? [] : a) : m;
                if ((n && n(m, v, s, u), r))
                  for (l = we(v, p), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = v.length; c--; ) (f = v[c]) && l.push((m[c] = f));
                      i(null, (v = []), l, u);
                    }
                    for (c = v.length; c--; ) (f = v[c]) && (l = i ? I(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f));
                  }
                } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : D.apply(a, v);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[' '],
                u = a ? 1 : 0,
                c = be(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = be(
                  function (e) {
                    return I(t, e) > -1;
                  },
                  s,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) d = [be(Ee(d), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return Te(
                    u > 1 && Ee(d),
                    u > 1 && xe(e.slice(0, u - 1).concat({ value: ' ' === e[u - 2].type ? '*' : '' })).replace(F, '$1'),
                    n,
                    u < i && Ce(e.slice(u, i)),
                    i < o && Ce((e = e.slice(i))),
                    i < o && xe(e)
                  );
                }
                d.push(n);
              }
            return Ee(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = S[e + ' '];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(i = W.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = G.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(F, ' ') }), (s = s.slice(n.length))),
                  r.filter))
                    !(i = X[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  s = N[e + ' '];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; ) (s = Ce(t[n]))[b] ? i.push(s) : o.push(s);
                  (s = N(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                          var f,
                            h,
                            m,
                            v = 0,
                            y = '0',
                            x = o && [],
                            b = [],
                            E = l,
                            T = o || (i && r.find.TAG('*', c)),
                            C = (w += null == E ? 1 : Math.random() || 0.1),
                            S = T.length;
                          for (c && (l = a == p || a || c); y !== S && null != (f = T[y]); y++) {
                            if (i && f) {
                              for (h = 0, a || f.ownerDocument == p || (d(f), (s = !g)); (m = e[h++]); )
                                if (m(f, a || p, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (w = C);
                            }
                            n && ((f = !m && f) && v--, o && x.push(f));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (m = t[h++]); ) m(x, b, a, s);
                            if (o) {
                              if (v > 0) for (; y--; ) x[y] || b[y] || (b[y] = _.call(u));
                              b = we(b);
                            }
                            D.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && se.uniqueSort(u);
                          }
                          return c && ((w = C), (l = E)), x;
                        };
                      return n ? le(o) : o;
                    })(o, i)
                  )).selector = e;
                }
                return s;
              }),
            (u = se.select =
              function (e, t, n, i) {
                var o,
                  u,
                  l,
                  c,
                  f,
                  d = 'function' == typeof e && e,
                  p = !i && a((e = d.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if ((u = p[0] = p[0].slice(0)).length > 2 && 'ID' === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                  }
                  for (o = X.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !r.relative[(c = l.type)]); )
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), (ee.test(u[0].type) && ve(t.parentNode)) || t))) {
                      if ((u.splice(o, 1), !(e = i.length && xe(u)))) return D.apply(n, i), n;
                      break;
                    }
                }
                return (d || s(e, p))(i, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
              }),
            (n.sortStable = b.split('').sort(L).join('') === b),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
            })),
            ce(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
            }) ||
              fe('type|href|height|width', function (e, t, n) {
                if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
              })) ||
              fe('value', function (e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute('disabled');
            }) ||
              fe(P, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
              }),
            se
          );
        })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[':'] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var N = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        L = T.expr.match.needsContext;
      function R(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function _(e, t, n) {
        return v(t)
          ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : 'string' != typeof t
          ? T.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ':not(' + e + ')'),
          1 === t.length && 1 === r.nodeType
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ('string' != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(_(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(_(this, e || [], !0));
          },
          is: function (e) {
            return !!_(this, 'string' == typeof e && L.test(e) ? T(e) : e || [], !1).length;
          },
        });
      var k,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || k), 'string' == typeof e)) {
          if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || (!r[1] && t))
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
              O.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (i = x.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (k = T(x));
      var j = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };
      function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = 'string' != typeof e && T(e);
          if (!L.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? 'string' == typeof e
              ? c.call(T(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return N(e, 'parentNode');
            },
            parentsUntil: function (e, t, n) {
              return N(e, 'parentNode', n);
            },
            next: function (e) {
              return P(e, 'nextSibling');
            },
            prev: function (e) {
              return P(e, 'previousSibling');
            },
            nextAll: function (e) {
              return N(e, 'nextSibling');
            },
            prevAll: function (e) {
              return N(e, 'previousSibling');
            },
            nextUntil: function (e, t, n) {
              return N(e, 'nextSibling', n);
            },
            prevUntil: function (e, t, n) {
              return N(e, 'previousSibling', n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (R(e, 'template') && (e = e.content || e), T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, r) {
              var i = T.map(this, t, n);
              return (
                'Until' !== e.slice(-5) && (r = n),
                r && 'string' == typeof r && (i = T.filter(r, i)),
                this.length > 1 && (I[e] || T.uniqueSort(i), j.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var $ = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function q(e) {
        throw e;
      }
      function H(e, t, n, r) {
        var i;
        try {
          e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          'string' == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match($) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
          },
          l = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function (n, r) {
                      v(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && 'string' !== w(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ''), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ''), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                ['notify', 'progress', T.Callbacks('memory'), T.Callbacks('memory'), 2],
                ['resolve', 'done', T.Callbacks('once memory'), T.Callbacks('once memory'), 0, 'resolved'],
                ['reject', 'fail', T.Callbacks('once memory'), T.Callbacks('once memory'), 1, 'rejected'],
              ],
              r = 'pending',
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, r) {
                      var i = v(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && v(e.promise)
                          ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                          : n[r[0] + 'With'](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function () {
                      var s = this,
                        u = arguments,
                        l = function () {
                          var n, l;
                          if (!(e < o)) {
                            if ((n = r.apply(s, u)) === t.promise()) throw new TypeError('Thenable self-resolution');
                            (l = n && ('object' == typeof n || 'function' == typeof n) && n.then),
                              v(l)
                                ? i
                                  ? l.call(n, a(o, t, M, i), a(o, t, q, i))
                                  : (o++, l.call(n, a(o, t, M, i), a(o, t, q, i), a(o, t, M, t.notifyWith)))
                                : (r !== M && ((s = void 0), (u = [n])), (i || t.resolveWith)(s, u));
                          }
                        },
                        c = i
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (n) {
                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o && (r !== q && ((s = void 0), (u = [n])), t.rejectWith(s, u));
                              }
                            };
                      e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(a(0, n, v(i) ? i : M, n.notifyWith)),
                      t[1][3].add(a(0, n, v(e) ? e : M)),
                      t[2][3].add(a(0, n, v(r) ? r : q));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, i) : i;
                },
              },
              o = {};
            return (
              T.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return o[n[0] + 'With'](this === o ? void 0 : this, arguments), this;
                  }),
                  (o[n[0] + 'With'] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = s.call(arguments),
              o = T.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this), (i[e] = arguments.length > 1 ? s.call(arguments) : n), --t || o.resolveWith(r, i);
                };
              };
            if (t <= 1 && (H(e, o.done(a(n)).resolve, o.reject, !t), 'pending' === o.state() || v(i[n] && i[n].then))) return o.then();
            for (; n--; ) H(i[n], a(n), o.reject);
            return o.promise();
          },
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && B.test(e.name) && n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var F = T.Deferred();
      function W() {
        x.removeEventListener('DOMContentLoaded', W), n.removeEventListener('load', W), T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0), (!0 !== e && --T.readyWait > 0) || F.resolveWith(x, [T]));
          },
        }),
        (T.ready.then = F.then),
        'complete' === x.readyState || ('loading' !== x.readyState && !x.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (x.addEventListener('DOMContentLoaded', W), n.addEventListener('load', W));
      var G = function (e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ('object' === w(n)) for (s in ((i = !0), n)) G(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            v(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(T(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        V = /^-ms-/,
        U = /-([a-z])/g;
      function z(e, t) {
        return t.toUpperCase();
      }
      function X(e) {
        return e.replace(V, 'ms-').replace(U, z);
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function K() {
        this.expando = T.expando + K.uid++;
      }
      (K.uid = 1),
        (K.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ('string' == typeof t) i[X(t)] = n;
            else for (r in t) i[X(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && 'string' == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match($) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var J = new K(),
        Q = new K(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (((r = 'data-' + t.replace(ee, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(r)))) {
            try {
              n = (function (e) {
                return 'true' === e || ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : Z.test(e) ? JSON.parse(e) : e));
              })(n);
            } catch (e) {}
            Q.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return Q.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        removeData: function (e, t) {
          Q.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !J.get(o, 'hasDataAttrs'))) {
                for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf('data-') && ((r = X(r.slice(5))), te(o, r, i[r]));
                J.set(o, 'hasDataAttrs', !0);
              }
              return i;
            }
            return 'object' == typeof e
              ? this.each(function () {
                  Q.set(this, e);
                })
              : G(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                    this.each(function () {
                      Q.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Q.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || 'fx') + 'queue'),
                (r = J.get(e, t)),
                n && (!r || Array.isArray(n) ? (r = J.access(e, t, T.makeArray(n))) : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || 'fx';
            var n = T.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = T._queueHooks(e, t);
            'inprogress' === i && ((i = n.shift()), r--),
              i &&
                ('fx' === t && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: T.Callbacks('once memory').add(function () {
                  J.remove(e, [t + 'queue', n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              'string' != typeof e && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || 'fx', []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = T.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --r || i.resolveWith(o, [o]);
              };
            for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; a--; )
              (n = J.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp('^(?:([+-])=|)(' + ne + ')([a-z%]*)$', 'i'),
        ie = ['Top', 'Right', 'Bottom', 'Left'],
        oe = x.documentElement,
        ae = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      oe.getRootNode &&
        (ae = function (e) {
          return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
        });
      var ue = function (e, t) {
        return 'none' === (e = t || e).style.display || ('' === e.style.display && ae(e) && 'none' === T.css(e, 'display'));
      };
      function le(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return T.css(e, t, '');
              },
          u = s(),
          l = (n && n[3]) || (T.cssNumber[t] ? '' : 'px'),
          c = e.nodeType && (T.cssNumber[t] || ('px' !== l && +u)) && re.exec(T.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--; )
            T.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
          (c *= 2), T.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ce[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = T.css(t, 'display')),
          t.parentNode.removeChild(t),
          'none' === i && (i = 'block'),
          (ce[r] = i),
          i)
        );
      }
      function de(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ('none' === n && ((i[o] = J.get(r, 'display') || null), i[o] || (r.style.display = '')),
                '' === r.style.display && ue(r) && (i[o] = fe(r)))
              : 'none' !== n && ((i[o] = 'none'), J.set(r, 'display', n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return 'boolean' == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var pe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = x.createDocumentFragment().appendChild(x.createElement('div'))),
        (he = x.createElement('input')).setAttribute('type', 'radio'),
        he.setAttribute('checked', 'checked'),
        he.setAttribute('name', 't'),
        pe.appendChild(he),
        (m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = '<textarea>x</textarea>'),
        (m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = '<option></option>'),
        (m.option = !!pe.lastChild);
      var ye = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      function xe(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && R(e, t)) ? T.merge([e], n) : n
        );
      }
      function be(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", '</select>']);
      var Ee = /<|&#?\w+;/;
      function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
          if ((o = e[p]) || 0 === o)
            if ('object' === w(o)) T.merge(d, o.nodeType ? [o] : o);
            else if (Ee.test(o)) {
              for (
                a = a || f.appendChild(t.createElement('div')),
                  s = (me.exec(o) || ['', ''])[1].toLowerCase(),
                  u = ye[s] || ye._default,
                  a.innerHTML = u[1] + T.htmlPrefilter(o) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              T.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(o));
        for (f.textContent = '', p = 0; (o = d[p++]); )
          if (r && T.inArray(o, r) > -1) i && i.push(o);
          else if (((l = ae(o)), (a = xe(f.appendChild(o), 'script')), l && be(a), n))
            for (c = 0; (o = a[c++]); ) ve.test(o.type || '') && n.push(o);
        return f;
      }
      var Te = /^([^.]*)(?:\.(.+)|)/;
      function Ce() {
        return !0;
      }
      function Se() {
        return !1;
      }
      function Ne(e, t) {
        return (
          (e ===
            (function () {
              try {
                return x.activeElement;
              } catch (e) {}
            })()) ==
          ('focus' === t)
        );
      }
      function Ae(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
          for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t)) Ae(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i && ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Se;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function (e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, i, r, n);
          })
        );
      }
      function Le(e, t, n) {
        n
          ? (J.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (
                    ((o = s.call(arguments)),
                    J.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : (i = {}),
                    o !== i)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
                } else
                  o.length &&
                    (J.set(this, t, { value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this) }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(e, t) && T.event.add(e, t, Ce);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m = J.get(e);
          if (Y(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && T.find.matchesSelector(oe, i),
                n.guid || (n.guid = T.guid++),
                (u = m.events) || (u = m.events = Object.create(null)),
                (a = m.handle) ||
                  (a = m.handle =
                    function (t) {
                      return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                    }),
                l = (t = (t || '').match($) || ['']).length;
              l--;

            )
              (p = g = (s = Te.exec(t[l]) || [])[1]),
                (h = (s[2] || '').split('.').sort()),
                p &&
                  ((f = T.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = T.event.special[p] || {}),
                  (c = T.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && T.expr.match.needsContext.test(i),
                      namespace: h.join('.'),
                    },
                    o
                  )),
                  (d = u[p]) ||
                    (((d = u[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
                  f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (T.event.global[p] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m = J.hasData(e) && J.get(e);
          if (m && (u = m.events)) {
            for (l = (t = (t || '').match($) || ['']).length; l--; )
              if (((p = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || '').split('.').sort()), p)) {
                for (
                  f = T.event.special[p] || {},
                    d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                    a = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                      (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) || T.removeEvent(e, p, m.handle), delete u[p]);
              } else for (p in u) T.event.remove(e, p + t[l], n, r, !0);
            T.isEmptyObject(u) && J.remove(e, 'handle events');
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            u = T.event.fix(e),
            l = (J.get(this, 'events') || Object.create(null))[u.type] || [],
            c = T.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
            for (a = T.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
              for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !('click' === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                    (a[i] = r.needsContext ? T(i, this).index(l) > -1 : T.find(i, this, null, [l]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: l, handlers: o });
              }
          return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return ge.test(t.type) && t.click && R(t, 'input') && Le(t, 'click', Ce), !1;
            },
            trigger: function (e) {
              var t = this || e;
              return ge.test(t.type) && t.click && R(t, 'input') && Le(t, 'click'), !0;
            },
            _default: function (e) {
              var t = e.target;
              return (ge.test(t.type) && t.click && R(t, 'input') && J.get(t, 'click')) || R(t, 'a');
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Se),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          T.event.addProp
        ),
        T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Le(this, e, Ne), !1;
            },
            trigger: function () {
              return Le(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          { mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || T.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, r) {
            return Ae(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler),
                this
              );
            if ('object' == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Se),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Re = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function ke(e, t) {
        return (R(e, 'table') && R(11 !== t.nodeType ? t : t.firstChild, 'tr') && T(e).children('tbody')[0]) || e;
      }
      function De(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
      }
      function je(e) {
        return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
      }
      function Ie(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
          if (J.hasData(e) && (s = J.get(e).events))
            for (i in (J.remove(t, 'handle events'), s)) for (n = 0, r = s[i].length; n < r; n++) T.event.add(t, i, s[i][n]);
          Q.hasData(e) && ((o = Q.access(e)), (a = T.extend({}, o)), Q.set(t, a));
        }
      }
      function Pe(e, t) {
        var n = t.nodeName.toLowerCase();
        'input' === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
      }
      function $e(e, t, n, r) {
        t = u(t);
        var i,
          o,
          a,
          s,
          l,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = v(h);
        if (g || (d > 1 && 'string' == typeof h && !m.checkClone && Oe.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), $e(o, t, n, r);
          });
        if (d && ((o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
          for (s = (a = T.map(xe(i, 'script'), De)).length; f < d; f++)
            (l = i), f !== p && ((l = T.clone(l, !0, !0)), s && T.merge(a, xe(l, 'script'))), n.call(e[f], l, f);
          if (s)
            for (c = a[a.length - 1].ownerDocument, T.map(a, je), f = 0; f < s; f++)
              (l = a[f]),
                ve.test(l.type || '') &&
                  !J.access(l, 'globalEval') &&
                  T.contains(c, l) &&
                  (l.src && 'module' !== (l.type || '').toLowerCase()
                    ? T._evalUrl && !l.noModule && T._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') }, c)
                    : E(l.textContent.replace(_e, ''), l, c));
        }
        return e;
      }
      function Me(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || T.cleanData(xe(r)), r.parentNode && (n && ae(r) && be(xe(r, 'script')), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            u = ae(e);
          if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e)))
            for (a = xe(s), r = 0, i = (o = xe(e)).length; r < i; r++) Pe(o[r], a[r]);
          if (t)
            if (n) for (o = o || xe(e), a = a || xe(s), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
            else Ie(e, s);
          return (a = xe(s, 'script')).length > 0 && be(a, !u && xe(e, 'script')), s;
        },
        cleanData: function (e) {
          for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (Y(n)) {
              if ((t = n[J.expando])) {
                if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[Q.expando] && (n[Q.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return Me(this, e, !0);
          },
          remove: function (e) {
            return Me(this, e);
          },
          text: function (e) {
            return G(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return $e(this, arguments, function (e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || ke(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return $e(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = ke(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return $e(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return $e(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(xe(e, !1)), (e.textContent = ''));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return G(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ('string' == typeof e && !Re.test(e) && !ye[(me.exec(e) || ['', ''])[1].toLowerCase()]) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(xe(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return $e(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 && (T.cleanData(xe(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          { appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' },
          function (e, t) {
            T.fn[e] = function (e) {
              for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++)
                (n = a === o ? this : this.clone(!0)), T(i[a])[t](n), l.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var qe = new RegExp('^(' + ne + ')(?!px)[a-z%]+$', 'i'),
        He = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Be = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        Fe = new RegExp(ie.join('|'), 'i');
      function We(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || He(e)) &&
            ('' !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = T.style(e, t)),
            !m.pixelBoxStyles() &&
              qe.test(a) &&
              Fe.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + '' : a
        );
      }
      function Ge(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              oe.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = '1%' !== e.top),
              (u = 12 === t(e.marginLeft)),
              (c.style.right = '60%'),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = 'absolute'),
              (o = 12 === t(c.offsetWidth / 3)),
              oe.removeChild(l),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          s,
          u,
          l = x.createElement('div'),
          c = x.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (m.clearCloneStyle = 'content-box' === c.style.backgroundClip),
          T.extend(m, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == s &&
                  ((e = x.createElement('table')),
                  (t = x.createElement('tr')),
                  (r = x.createElement('div')),
                  (e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                  (t.style.cssText = 'border:1px solid'),
                  (t.style.height = '1px'),
                  (r.style.height = '9px'),
                  (r.style.display = 'block'),
                  oe.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight),
                  oe.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Ve = ['Webkit', 'Moz', 'ms'],
        Ue = x.createElement('div').style,
        ze = {};
      function Xe(e) {
        var t = T.cssProps[e] || ze[e];
        return (
          t ||
          (e in Ue
            ? e
            : (ze[e] =
                (function (e) {
                  for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; ) if ((e = Ve[n] + t) in Ue) return e;
                })(e) || e))
        );
      }
      var Ye = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Je = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Qe = { letterSpacing: '0', fontWeight: '400' };
      function Ze(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
      }
      function et(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
          'margin' === n && (u += T.css(e, n + ie[a], !0, i)),
            r
              ? ('content' === n && (u -= T.css(e, 'padding' + ie[a], !0, i)),
                'margin' !== n && (u -= T.css(e, 'border' + ie[a] + 'Width', !0, i)))
              : ((u += T.css(e, 'padding' + ie[a], !0, i)),
                'padding' !== n ? (u += T.css(e, 'border' + ie[a] + 'Width', !0, i)) : (s += T.css(e, 'border' + ie[a] + 'Width', !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
      }
      function tt(e, t, n) {
        var r = He(e),
          i = (!m.boxSizingReliable() || n) && 'border-box' === T.css(e, 'boxSizing', !1, r),
          o = i,
          a = We(e, t, r),
          s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (qe.test(a)) {
          if (!n) return a;
          a = 'auto';
        }
        return (
          ((!m.boxSizingReliable() && i) ||
            (!m.reliableTrDimensions() && R(e, 'tr')) ||
            'auto' === a ||
            (!parseFloat(a) && 'inline' === T.css(e, 'display', !1, r))) &&
            e.getClientRects().length &&
            ((i = 'border-box' === T.css(e, 'boxSizing', !1, r)), (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) + et(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
        );
      }
      function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = We(e, 'opacity');
                return '' === n ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = X(t),
              u = Ke.test(t),
              l = e.style;
            if ((u || (t = Xe(s)), (a = T.cssHooks[t] || T.cssHooks[s]), void 0 === n))
              return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
            'string' === (o = typeof n) && (i = re.exec(n)) && i[1] && ((n = le(e, t, i)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' !== o || u || (n += (i && i[3]) || (T.cssNumber[s] ? '' : 'px')),
                m.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
                (a && 'set' in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = X(t);
          return (
            Ke.test(t) || (t = Xe(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = We(e, t, r)),
            'normal' === i && t in Qe && (i = Qe[t]),
            '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
          );
        },
      }),
        T.each(['height', 'width'], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ye.test(T.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? tt(e, t, r)
                  : Be(e, Je, function () {
                      return tt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = He(e),
                a = !m.scrollboxSize() && 'absolute' === o.position,
                s = (a || r) && 'border-box' === T.css(e, 'boxSizing', !1, o),
                u = r ? et(e, t, r, s, o) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, 'border', !1, o) - 0.5)),
                u && (i = re.exec(n)) && 'px' !== (i[3] || 'px') && ((e.style[t] = n), (n = T.css(e, t))),
                Ze(0, n, u)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(We(e, 'marginLeft')) ||
                e.getBoundingClientRect().left -
                  Be(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        T.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            'margin' !== e && (T.cssHooks[e + t].set = Ze);
        }),
        T.fn.extend({
          css: function (e, t) {
            return G(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = He(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = nt),
        (nt.prototype = {
          constructor: nt,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (T.cssNumber[n] ? '' : 'px'));
          },
          cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = nt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : nt.propHooks._default.set(this),
              this
            );
          },
        }),
        (nt.prototype.init.prototype = nt.prototype),
        (nt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, '')) && 'auto' !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType || (!T.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (T.fx = nt.prototype.init),
        (T.fx.step = {});
      var rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
      function st() {
        it && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, T.fx.interval), T.fx.tick());
      }
      function ut() {
        return (
          n.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function lt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = ie[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners['*']), o = 0, a = i.length; o < a; o++)
          if ((r = i[o].call(n, t, e))) return r;
      }
      function ft(e, t, n) {
        var r,
          i,
          o = 0,
          a = ft.prefilters.length,
          s = T.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (i) return !1;
            for (
              var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length;
              o < a;
              o++
            )
              l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
          },
          l = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || ut(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
              return l.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) l.tweens[n].run(1);
              return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
            },
          }),
          c = l.props;
        for (
          !(function (e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = X(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = T.cssHooks[r]) && ('expand' in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, l.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = ft.prefilters[o].call(l, e, c, l.opts)))
            return v(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
          T.map(c, ct, l),
          v(l.opts.start) && l.opts.start.call(e, l),
          l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
          T.fx.timer(T.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (T.Animation = T.extend(ft, {
        tweeners: {
          '*': [
            function (e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ['*'])) : (e = e.match($));
          for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = 'width' in t || 'height' in t,
              d = this,
              p = {},
              h = e.style,
              g = e.nodeType && ue(e),
              m = J.get(e, 'fxshow');
            for (r in (n.queue ||
              (null == (a = T._queueHooks(e, 'fx')).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, T.queue(e, 'fx').length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), ot.test(i))) {
                if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                  if ('show' !== i || !m || void 0 === m[r]) continue;
                  g = !0;
                }
                p[r] = (m && m[r]) || T.style(e, r);
              }
            if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = m && m.display) && (l = J.get(e, 'display')),
                'none' === (c = T.css(e, 'display')) &&
                  (l ? (c = l) : (de([e], !0), (l = e.style.display || l), (c = T.css(e, 'display')), de([e]))),
                ('inline' === c || ('inline-block' === c && null != l)) &&
                  'none' === T.css(e, 'float') &&
                  (u ||
                    (d.done(function () {
                      h.display = l;
                    }),
                    null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
                  (h.display = 'inline-block'))),
              n.overflow &&
                ((h.overflow = 'hidden'),
                d.always(function () {
                  (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              p))
                u ||
                  (m ? 'hidden' in m && (g = m.hidden) : (m = J.access(e, 'fxshow', { display: l })),
                  o && (m.hidden = !g),
                  g && de([e], !0),
                  d.done(function () {
                    for (r in (g || de([e]), J.remove(e, 'fxshow'), p)) T.style(e, r, p[r]);
                  })),
                  (u = ct(g ? m[r] : 0, r, d)),
                  r in m || ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var r =
            e && 'object' == typeof e
              ? T.extend({}, e)
              : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
          return (
            T.fx.off
              ? (r.duration = 0)
              : 'number' != typeof r.duration &&
                (r.duration in T.fx.speeds ? (r.duration = T.fx.speeds[r.duration]) : (r.duration = T.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function () {
              v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }),
            r
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ue).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = T.isEmptyObject(e),
              o = T.speed(t, n, r),
              a = function () {
                var t = ft(this, T.extend({}, e), o);
                (i || J.get(this, 'finish')) && t.stop(!0);
              };
            return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              'string' != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || 'fx', []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + 'queueHooks',
                  o = T.timers,
                  a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function () {
                var t,
                  n = J.get(this),
                  r = n[e + 'queue'],
                  i = n[e + 'queueHooks'],
                  o = T.timers,
                  a = r ? r.length : 0;
                for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(['toggle', 'show', 'hide'], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, r, i) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i);
          };
        }),
        T.each(
          {
            slideDown: lt('show'),
            slideUp: lt('hide'),
            slideToggle: lt('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (rt = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          it || ((it = !0), st());
        }),
        (T.fx.stop = function () {
          it = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = x.createElement('input'),
            t = x.createElement('select').appendChild(x.createElement('option'));
          (e.type = 'checkbox'),
            (m.checkOn = '' !== e.value),
            (m.optSelected = t.selected),
            ((e = x.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (m.radioValue = 't' === e.value);
        })();
      var dt,
        pt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return G(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === o && T.isXMLDoc(e)) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? dt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ''), n)
                    : i && 'get' in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && 'radio' === t && R(e, 'input')) {
                  var n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match($);
            if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (dt = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = pt[t] || T.find.attr;
          pt[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return r || ((o = pt[a]), (pt[a] = i), (i = null != n(e, t, r) ? a : null), (pt[a] = o)), i;
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
      function mt(e) {
        return (e.match($) || []).join(' ');
      }
      function vt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function yt(e) {
        return Array.isArray(e) ? e : ('string' == typeof e && e.match($)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return G(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, 'tabindex');
                return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        m.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (v(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, vt(this)));
              });
            if ((t = yt(e)).length)
              for (; (n = this[u++]); )
                if (((i = vt(n)), (r = 1 === n.nodeType && ' ' + mt(i) + ' '))) {
                  for (a = 0; (o = t[a++]); ) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                  i !== (s = mt(r)) && n.setAttribute('class', s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (v(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, vt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = yt(e)).length)
              for (; (n = this[u++]); )
                if (((i = vt(n)), (r = 1 === n.nodeType && ' ' + mt(i) + ' '))) {
                  for (a = 0; (o = t[a++]); ) for (; r.indexOf(' ' + o + ' ') > -1; ) r = r.replace(' ' + o + ' ', ' ');
                  i !== (s = mt(r)) && n.setAttribute('class', s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, vt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r) for (i = 0, o = T(this), a = yt(e); (t = a[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && 'boolean' !== n) ||
                      ((t = vt(this)) && J.set(this, '__className__', t),
                      this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : J.get(this, '__className__') || ''));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = ' ' + e + ' '; (n = this[r++]); ) if (1 === n.nodeType && (' ' + mt(vt(n)) + ' ').indexOf(t) > -1) return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = v(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, T(this).val()) : e)
                    ? (i = '')
                    : 'number' == typeof i
                    ? (i += '')
                    : Array.isArray(i) &&
                      (i = T.map(i, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  ((t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i));
              }))
            : i
            ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(i, 'value'))
              ? n
              : 'string' == typeof (n = i.value)
              ? n.replace(xt, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, 'value');
                return null != t ? t : mt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = 'select-one' === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !R(n.parentNode, 'optgroup'))) {
                    if (((t = T(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--; )
                  ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        T.each(['radio', 'checkbox'], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute('value') ? 'on' : e.value;
              });
        }),
        (m.focusin = 'onfocusin' in n);
      var bt = /^(?:focusinfocus|focusoutblur)$/,
        Et = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            h = [r || x],
            g = p.call(e, 'type') ? e.type : e,
            m = p.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((a = d = s = r = r || x),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !bt.test(g + T.event.triggered) &&
              (g.indexOf('.') > -1 && ((m = g.split('.')), (g = m.shift()), m.sort()),
              (l = g.indexOf(':') < 0 && 'on' + g),
              ((e = e[T.expando] ? e : new T.Event(g, 'object' == typeof e && e)).isTrigger = i ? 2 : 3),
              (e.namespace = m.join('.')),
              (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (f = T.event.special[g] || {}),
              i || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!i && !f.noBubble && !y(r)) {
              for (u = f.delegateType || g, bt.test(u + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), (s = a);
              s === (r.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || n);
            }
            for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
              (d = a),
                (e.type = o > 1 ? u : f.bindType || g),
                (c = (J.get(a, 'events') || Object.create(null))[e.type] && J.get(a, 'handle')) && c.apply(a, t),
                (c = l && a[l]) && c.apply && Y(a) && ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !Y(r) ||
                (l &&
                  v(r[g]) &&
                  !y(r) &&
                  ((s = r[l]) && (r[l] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, Et),
                  r[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, Et),
                  (T.event.triggered = void 0),
                  s && (r[l] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
          T.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      var wt = n.location,
        Tt = { guid: Date.now() },
        Ct = /\?/;
      T.parseXML = function (e) {
        var t, r;
        if (!e || 'string' != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {}
        return (
          (r = t && t.getElementsByTagName('parsererror')[0]),
          (t && !r) ||
            T.error(
              'Invalid XML: ' +
                (r
                  ? T.map(r.childNodes, function (e) {
                      return e.textContent;
                    }).join('\n')
                  : e)
            ),
          t
        );
      };
      var St = /\[\]$/,
        Nt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      function Rt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          T.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : Rt(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
          });
        else if (n || 'object' !== w(t)) r(e, t);
        else for (i in t) Rt(e + '[' + i + ']', t[i], n, r);
      }
      (T.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = v(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
          };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) Rt(n, e[n], t, i);
        return r.join('&');
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, 'elements');
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return this.name && !T(this).is(':disabled') && Lt.test(this.nodeName) && !At.test(e) && (this.checked || !ge.test(e));
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(Nt, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(Nt, '\r\n') };
              })
              .get();
          },
        });
      var Ot = /%20/g,
        _t = /#.*$/,
        kt = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Pt = {},
        $t = {},
        Mt = '*/'.concat('*'),
        qt = x.createElement('a');
      function Ht(e) {
        return function (t, n) {
          'string' != typeof t && ((n = t), (t = '*'));
          var r,
            i = 0,
            o = t.toLowerCase().match($) || [];
          if (v(n))
            for (; (r = o[i++]); ) '+' === r[0] ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
      }
      function Bt(e, t, n, r) {
        var i = {},
          o = e === $t;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            T.each(e[s] || [], function (e, s) {
              var l = s(t, n, r);
              return 'string' != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i['*'] && a('*'));
      }
      function Ft(e, t) {
        var n,
          r,
          i = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
      }
      (qt.href = wt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: wt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Mt,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
            converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': T.parseXML },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, T.ajaxSettings), t) : Ft(T.ajaxSettings, e);
          },
          ajaxPrefilter: Ht(Pt),
          ajaxTransport: Ht($t),
          ajax: function (e, t) {
            'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p = T.ajaxSetup({}, t),
              h = p.context || p,
              g = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              m = T.Deferred(),
              v = T.Callbacks('once memory'),
              y = p.statusCode || {},
              b = {},
              E = {},
              w = 'canceled',
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a) for (a = {}; (t = Dt.exec(o)); ) a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                    t = a[e.toLowerCase() + ' '];
                  }
                  return null == t ? null : t.join(', ');
                },
                getAllResponseHeaders: function () {
                  return l ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return null == l && ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e), (b[e] = t)), this;
                },
                overrideMimeType: function (e) {
                  return null == l && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) C.always(e[C.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || w;
                  return r && r.abort(t), S(0, t), this;
                },
              };
            if (
              (m.promise(C),
              (p.url = ((e || p.url || wt.href) + '').replace(It, wt.protocol + '//')),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || '*').toLowerCase().match($) || ['']),
              null == p.crossDomain)
            ) {
              u = x.createElement('a');
              try {
                (u.href = p.url), (u.href = u.href), (p.crossDomain = qt.protocol + '//' + qt.host != u.protocol + '//' + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if ((p.data && p.processData && 'string' != typeof p.data && (p.data = T.param(p.data, p.traditional)), Bt(Pt, p, t, C), l))
              return C;
            for (f in ((c = T.event && p.global) && 0 == T.active++ && T.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !jt.test(p.type)),
            (i = p.url.replace(_t, '')),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                (p.data = p.data.replace(Ot, '+'))
              : ((d = p.url.slice(i.length)),
                p.data && (p.processData || 'string' == typeof p.data) && ((i += (Ct.test(i) ? '&' : '?') + p.data), delete p.data),
                !1 === p.cache && ((i = i.replace(kt, '$1')), (d = (Ct.test(i) ? '&' : '?') + '_=' + Tt.guid++ + d)),
                (p.url = i + d)),
            p.ifModified &&
              (T.lastModified[i] && C.setRequestHeader('If-Modified-Since', T.lastModified[i]),
              T.etag[i] && C.setRequestHeader('If-None-Match', T.etag[i])),
            ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && C.setRequestHeader('Content-Type', p.contentType),
            C.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Mt + '; q=0.01' : '')
                : p.accepts['*']
            ),
            p.headers))
              C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l)) return C.abort();
            if (((w = 'abort'), v.add(p.complete), C.done(p.success), C.fail(p.error), (r = Bt($t, p, t, C)))) {
              if (((C.readyState = 1), c && g.trigger('ajaxSend', [C, p]), l)) return C;
              p.async &&
                p.timeout > 0 &&
                (s = n.setTimeout(function () {
                  C.abort('timeout');
                }, p.timeout));
              try {
                (l = !1), r.send(b, S);
              } catch (e) {
                if (l) throw e;
                S(-1, e);
              }
            } else S(-1, 'No Transport');
            function S(e, t, a, u) {
              var f,
                d,
                x,
                b,
                E,
                w = t;
              l ||
                ((l = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (o = u || ''),
                (C.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (b = (function (e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0]; )
                      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + ' ' + u[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(p, C, a)),
                !f &&
                  T.inArray('script', p.dataTypes) > -1 &&
                  T.inArray('json', p.dataTypes) < 0 &&
                  (p.converters['text script'] = function () {}),
                (b = (function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = c.shift()))
                    )
                      if ('*' === o) o = u;
                      else if ('*' !== u && u !== o) {
                        if (!(a = l[u + ' ' + o] || l['* ' + o]))
                          for (i in l)
                            if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                              !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return { state: 'parsererror', error: a ? e : 'No conversion from ' + u + ' to ' + o };
                            }
                      }
                  return { state: 'success', data: t };
                })(p, b, C, f)),
                f
                  ? (p.ifModified &&
                      ((E = C.getResponseHeader('Last-Modified')) && (T.lastModified[i] = E),
                      (E = C.getResponseHeader('etag')) && (T.etag[i] = E)),
                    204 === e || 'HEAD' === p.type
                      ? (w = 'nocontent')
                      : 304 === e
                      ? (w = 'notmodified')
                      : ((w = b.state), (d = b.data), (f = !(x = b.error))))
                  : ((x = w), (!e && w) || ((w = 'error'), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || w) + ''),
                f ? m.resolveWith(h, [d, w, C]) : m.rejectWith(h, [C, w, x]),
                C.statusCode(y),
                (y = void 0),
                c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [C, p, f ? d : x]),
                v.fireWith(h, [C, w]),
                c && (g.trigger('ajaxComplete', [C, p]), --T.active || T.event.trigger('ajaxStop')));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, 'json');
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, 'script');
          },
        }),
        T.each(['get', 'post'], function (e, t) {
          T[t] = function (e, n, r, i) {
            return (
              v(n) && ((i = i || r), (r = n), (n = void 0)),
              T.ajax(T.extend({ url: e, type: t, dataType: i, data: n, success: r }, T.isPlainObject(e) && e))
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
        }),
        (T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, n);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not('body')
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Wt = { 0: 200, 1223: 204 },
        Gt = T.ajaxSettings.xhr();
      (m.cors = !!Gt && 'withCredentials' in Gt),
        (m.ajax = Gt = !!Gt),
        T.ajaxTransport(function (e) {
          var t, r;
          if (m.cors || (Gt && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = e.xhr();
                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                e.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest'),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      'abort' === e
                        ? s.abort()
                        : 'error' === e
                        ? 'number' != typeof s.status
                          ? o(0, 'error')
                          : o(s.status, s.statusText)
                        : o(
                            Wt[s.status] || s.status,
                            s.statusText,
                            'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t('error')),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t('abort'));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter('script', function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
        }),
        T.ajaxTransport('script', function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = T('<script>')
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function (e) {
                      t.remove(), (n = null), e && i('error' === e.type ? 404 : 200, e.type);
                    })
                  )),
                  x.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Vt,
        Ut = [],
        zt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var e = Ut.pop() || T.expando + '_' + Tt.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter('json jsonp', function (e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (zt.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  zt.test(e.data) &&
                  'data');
          if (s || 'jsonp' === e.dataTypes[0])
            return (
              (i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s ? (e[s] = e[s].replace(zt, '$1' + i)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
              (e.converters['script json'] = function () {
                return a || T.error(i + ' was not called'), a[0];
              }),
              (e.dataTypes[0] = 'json'),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? T(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(i)),
                  a && v(o) && o(a[0]),
                  (a = o = void 0);
              }),
              'script'
            );
        }),
        (m.createHTMLDocument =
          (((Vt = x.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'), 2 === Vt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return 'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((r = (t = x.implementation.createHTMLDocument('')).createElement('base')).href = x.location.href),
                    t.head.appendChild(r))
                  : (t = x)),
              (o = !n && []),
              (i = O.exec(e)) ? [t.createElement(i[1])] : ((i = we([e], t, o)), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
          var r, i, o;
        }),
        (T.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(' ');
          return (
            s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
            v(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
            a.length > 0 &&
              T.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                .done(function (e) {
                  (o = arguments), a.html(r ? T('<div>').append(T.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = T.css(e, 'position'),
              c = T(e),
              f = {};
            'static' === l && (e.style.position = 'relative'),
              (s = c.offset()),
              (o = T.css(e, 'top')),
              (u = T.css(e, 'left')),
              ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1
                ? ((a = (r = c.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              v(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              'using' in t ? t.using.call(e, f) : c.css(f);
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ('fixed' === T.css(r, 'position')) t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  e && (e === n.body || e === n.documentElement) && 'static' === T.css(e, 'position');

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = T(e).offset()).top += T.css(e, 'borderTopWidth', !0)), (i.left += T.css(e, 'borderLeftWidth', !0)));
              }
              return { top: t.top - i.top - T.css(r, 'marginTop', !0), left: t.left - i.left - T.css(r, 'marginLeft', !0) };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && 'static' === T.css(e, 'position'); ) e = e.offsetParent;
              return e || oe;
            });
          },
        }),
        T.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
          var n = 'pageYOffset' === t;
          T.fn[e] = function (r) {
            return G(
              this,
              function (e, r, i) {
                var o;
                if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
              },
              e,
              r,
              arguments.length
            );
          };
        }),
        T.each(['top', 'left'], function (e, t) {
          T.cssHooks[t] = Ge(m.pixelPosition, function (e, n) {
            if (n) return (n = We(e, t)), qe.test(n) ? T(e).position()[t] + 'px' : n;
          });
        }),
        T.each({ Height: 'height', Width: 'width' }, function (e, t) {
          T.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, r) {
            T.fn[r] = function (i, o) {
              var a = arguments.length && (n || 'boolean' != typeof i),
                s = n || (!0 === i || !0 === o ? 'margin' : 'border');
              return G(
                this,
                function (t, n, i) {
                  var o;
                  return y(t)
                    ? 0 === r.indexOf('outer')
                      ? t['inner' + e]
                      : t.document.documentElement['client' + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e]))
                    : void 0 === i
                    ? T.css(t, n, s)
                    : T.style(t, n, i, s);
                },
                t,
                a ? i : void 0,
                a
              );
            };
          });
        }),
        T.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
          T.fn[t] = function (e) {
            return this.on(t, e);
          };
        }),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          }
        );
      var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var n, r, i;
        if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (r = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            i
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = R),
        (T.isFunction = v),
        (T.isWindow = y),
        (T.camelCase = X),
        (T.type = w),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        }),
        (T.trim = function (e) {
          return null == e ? '' : (e + '').replace(Xt, '');
        }),
        void 0 ===
          (r = function () {
            return T;
          }.apply(t, [])) || (e.exports = r);
      var Yt = n.jQuery,
        Kt = n.$;
      return (
        (T.noConflict = function (e) {
          return n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Yt), T;
        }),
        void 0 === i && (n.jQuery = n.$ = T),
        T
      );
    });
  },
  4: function (e, t) {
    e.exports = {
      resourceBaseUrl: '../../standards/js/',
      viewports: { small: 601, medium: 769, tablet: 768, large: 1025 },
      imageCount: { one: 1, two: 2, three: 3 },
      keyCodes: { ENTER: 13, ARROW_LEFT: 37, ARROW_RIGHT: 39 },
      carouselConfig: { cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)' },
      selectors: {
        CAROUSEL: '.mi-carousel',
        SLIDER: '.mi-slider',
        GAUGE: '.m-gauge-container',
        SPLIT_GAUGE: '.m-gauge-split-container',
        SELECT: '.mi-select',
        FOOTER: '.mi-footer',
        MENU: '.m-navigation',
        GALLERY: '.mi-gallery',
        TILE_ERROR: '.m-tile-error-icon',
        STICKY_CONTAINER: '#stickySummary',
        ACCORDION: '.mi-accordion',
        PICTUREFILL: 'picture',
        VIDEO: '.mi-video',
        HEADER: '.mi-header',
        SCROLL_NAV: '.mi-scroll-nav',
        HSIA_NAV: '.mi-hsia-nav',
        GLOBAL_DISABLE:
          'body[data-hide-print=true] a, body[data-hide-print=true] button, body[data-hide-print=true] input[type="button"], body[data-hide-print=true] input[type="submit"]',
        LAZY_LOAD_IMAGES: '.mi-lazyLoadImage',
      },
      defaults: {
        gauge: {
          lines: 12,
          angle: 0.23,
          lineWidth: 0.08,
          colorStart: '#c5b491',
          colorStop: '#c5b491',
          strokeColor: '#F4F4F4',
          shadowColor: '#F4F4F4',
        },
      },
      accordion: { scrollDelay: 0 },
      events: { GLOBAL_CLICK_DISABLE: 'click.GlobalDissable' },
      class: { GLOBAL_CSS_DISABLE: 'is-global-disable' },
      utils: {
        ID: 'id',
        COMPONENT_RESOLVE_SELECTOR: ['.js-flydown-trigger'],
        COMPONENT_SELECTOR: 'script[type="text/mi-component"]:not([render="server"])',
        COMPONENT_SCROLL_RESOLVE_SELECTOR: 'script[type="text/mi-component"][data-render-action="scroll"]',
        GLOBAL_RENDER: 'global-render',
        COMPONENT_CLICK_RESOLVE_EVENT: 'click.resolveOnClick',
        COMPONENT_SCROLL_RESOLVE_EVENT: 'scroll.resolveOnScroll',
        COMPONENT_RENDER_ACTION_ATTR: 'renderAction',
        COMPONENT_PARENT_TRIGGER_ATTR: 'triggered',
        COMPONENT_LOADER_CSS_CLASS: 't-loader',
        COMPONENT_PARENT_CSS_PREFIX: 't-action-',
        EXTENDED_SCROLL_VIEWPORT_SIZE: 200,
        MI_PubSub: 'pubsub',
        DATALAYER_REFRESH: 'datalayer-refresh',
      },
      frameConstants: {
        FRAME_SELECTOR_CLASS: '.pci-data-frame-container',
        FRAME_CLASS: '.pci-data-frame',
        RESIZE_FRAME_EVENT: 'resizeFrame',
        IFRAME_EXTENDED_HEIGHT: 30,
        COMPONENT_SELECTOR: '[data-component-name]',
        IFRAME_SUBSCRIBED_EVENTS: 'load resize',
        LOAD_EVENT: 'load',
      },
    };
  },
});
